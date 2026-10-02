import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const loadedModule = { exports: {} };
  cache.set(file, loadedModule.exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(code, {
    module: loadedModule, exports: loadedModule.exports,
    require: specifier => load(path.resolve(path.dirname(file), specifier + '.ts')),
  }, { filename: file });
  return loadedModule.exports;
}

const { schemeCourses } = load('src/lib/scheme-courses.ts');
const { courses } = load('src/lib/courses.ts');
const { schemeDetail } = load('src/lib/all-course-details.ts');
const { skillDetails } = load('src/lib/course-details-skills.ts');
const records = [
  ...schemeCourses.map(c => [`/${c.scheme}/${c.slug}/`, schemeDetail(c.scheme, c.slug)]),
  ...courses.map(c => [`/courses/${c.slug}/`, skillDetails[c.slug]]),
  ['/rya/competent-crew/', schemeDetail('rya', 'competent-crew')],
];
assert.equal(records.length, 81);
const overviews = new Set();
for (const [route, detail] of records) {
  assert.ok(detail, route);
  for (const field of ['overview', 'entry', 'format', 'practice']) assert.ok(detail[field]?.length > 100, `${route}: ${field}`);
  assert.ok(detail.skills.length >= 3, route + ': skills');
  assert.ok(detail.questions.length >= 3, route + ': questions');
  assert.ok(detail.related.length >= 3, route + ': related');
  assert.ok(detail.sources.length, route + ': sources');
  for (const [, url] of detail.sources) assert.ok(url.startsWith('https://'), url);
  assert.ok(!overviews.has(detail.overview), route + ': duplicate overview');
  overviews.add(detail.overview);
}
const wordCounts = records.map(([, d]) => [d.overview, d.entry, d.format, d.practice, ...d.skills.flat(), ...d.questions].join(' ').split(/\s+/).length);
console.log(`Content coverage: ${records.length} unique guides; ${wordCounts.reduce((a, b) => a + b, 0)} new words; shortest ${Math.min(...wordCounts)} words.`);

const origin = process.argv[2];
if (origin) {
  const pending = [...records];
  const related = new Set(records.flatMap(([, d]) => d.related.map(([href]) => href)));
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (pending.length) {
      const [route, detail] = pending.shift();
      const response = await fetch(origin + route);
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert.ok(html.includes('data-course-detail'), route + ': rendered detail');
      assert.ok(html.includes(detail.overview.slice(0, 55)), route + ': initial HTML content');
      for (const id of ['course-entry', 'course-skills', 'course-format', 'course-preparation', 'course-questions', 'course-next']) {
        assert.equal((html.match(new RegExp(`id="${id}"`, 'g')) || []).length, 1, route + ': ' + id);
      }
      assert.ok(html.includes(`rel="canonical" href="https://www.sailingschools.com.au${route}"`), route + ': canonical');
      assert.ok(!html.includes('content="noindex'), route + ': indexability');
      for (const [, url] of detail.sources) assert.ok(html.includes(url.replaceAll('&', '&amp;')), route + ': source');
      for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(match[1]);
      console.log('Passed ' + route);
    }
  }));
  const known = new Set(records.map(([route]) => route));
  for (const route of related) {
    if (!known.has(route)) assert.equal((await fetch(origin + route)).status, 200, 'Related page ' + route);
  }
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
  for (const [route] of records) assert.ok(sitemap.includes('https://www.sailingschools.com.au' + route), route + ': sitemap');
  console.log('All 81 pages, related destinations, canonical URLs, JSON-LD and sitemap entries passed.');
}
