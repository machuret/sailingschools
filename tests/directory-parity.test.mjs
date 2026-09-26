import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const snapshot = JSON.parse(fs.readFileSync(new URL('../data/yousail-schools.json', import.meta.url), 'utf8'));

test('the satellite directory contains every school in the YouSail snapshot exactly once', () => {
  assert.ok(Array.isArray(snapshot.schools));
  assert.equal(snapshot._meta.total, snapshot.schools.length);
  assert.equal(new Set(snapshot.schools.map((school) => school.sourceSlug)).size, snapshot.schools.length);
  for (const school of snapshot.schools) {
    assert.ok(school.sourceSlug);
    assert.ok(school.name);
    assert.ok(school.sourceUrl);
    assert.ok(school.state);
    assert.ok(school.editorial?.description, `${school.sourceSlug} needs its own editorial description`);
    assert.match(school.editorial.description, /## What we love/);
    assert.match(school.editorial.description, /## Ideal for/);
    assert.doesNotMatch(school.editorial.description, /https?:\/\//);
  }
});
