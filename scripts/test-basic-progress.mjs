import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the client component with a small React/storage harness, without a browser dependency.
const source = await readFile(new URL('../src/components/BasicProgress.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
function harness({ initial = null, blocked = false } = {}) {
  let stored = initial;
  const notices = [];
  const exports = {};
  const jsx = (type, props) => ({ type, props });
  const context = {
    exports, Event: class {},
    window: { addEventListener() {}, removeEventListener() {}, dispatchEvent() {} },
    localStorage: { getItem() { if (blocked) throw Error('blocked'); return stored; }, setItem(key, value) { if (blocked) throw Error('blocked'); stored = value; } },
    require(name) {
      if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
      if (name === 'next/link') return { default: 'a' };
      if (name === 'react') return { useState: value => [value, next => notices.push(next)], useSyncExternalStore: (subscribe, snapshot) => snapshot() };
      throw Error(`Unexpected dependency ${name}`);
    },
  };
  vm.runInNewContext(compiled, context);
  const props = { lessons: [{ slug: 'one', title: 'One' }, { slug: 'two', title: 'Two' }], slug: 'one' };
  const render = () => exports.default(props);
  const nodes = value => value && typeof value === 'object' ? [value, ...[value.props?.children].flat(Infinity).flatMap(nodes)] : [];
  const button = () => nodes(render()).find(n => n.type === 'button' && 'aria-pressed' in n.props);
  return { button, stored: () => stored, notices };
}
const normal = harness();
assert.equal(normal.button().props['aria-pressed'], false);
normal.button().props.onClick();
assert.deepEqual(JSON.parse(normal.stored()), ['one']);
assert.equal(normal.button().props['aria-pressed'], true);
normal.button().props.onClick();
assert.deepEqual(JSON.parse(normal.stored()), []);
const reload = harness({ initial: '["one"]' });
assert.equal(reload.button().props['aria-pressed'], true);
const malformed = harness({ initial: '{bad json' });
assert.equal(malformed.button().props['aria-pressed'], false);
const invalid = harness({ initial: '["obsolete",123,"one","one"]' });
invalid.button().props.onClick();
assert.deepEqual(JSON.parse(invalid.stored()), []);
const blocked = harness({ initial: '["two"]', blocked: true });
blocked.button().props.onClick();
assert.equal(blocked.button().props['aria-pressed'], true);
assert.ok(blocked.notices.some(n => typeof n === 'string' && n.includes('could not save')));
console.log('Passed: mark/undo, reload, malformed data, unknown/duplicate values and blocked-storage fallback.');
