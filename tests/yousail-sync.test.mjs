import assert from 'node:assert/strict';
import test from 'node:test';

import { buildSchoolSnapshot, fetchYouSailSchools } from '../tools/yousail-sync.mjs';

test('fetches every paginated school including territories', async () => {
  const responses = [
    { pagination: { totalCount: 2 }, schools: [{ slug: 'alpha' }, { slug: 'territory' }] },
    { school: school('alpha', 'NSW') },
    { school: school('territory', 'NT') },
  ];
  const fetchImpl = async () => ({ ok: true, json: async () => responses.shift() });
  const schools = await fetchYouSailSchools({ apiBaseUrl: 'https://example.test', secret: 'x'.repeat(32), fetchImpl });
  assert.equal(schools.length, 2);
  assert.deepEqual(schools[0], {
    sourceSlug: 'alpha', sourceUrl: 'https://yousail.com.au/directory/alpha',
    sourceUpdatedAt: '2026-09-14', name: 'Alpha Sailing', state: 'new-south-wales',
    region: 'Sydney', website: 'https://alpha.test', logo: 'https://yousail.com.au/logo.png',
    checked: '2026-09-12', freshness: 'current', services: ['Sailing lessons'],
  });
  assert.equal(schools[1].state, 'northern-territory');
});

test('builds a dated, deterministic snapshot', () => {
  const snapshot = buildSchoolSnapshot({ schools: [{ sourceSlug: 'one' }], apiBaseUrl: 'https://example.test/', now: new Date('2026-09-14T00:00:00Z') });
  assert.deepEqual(snapshot._meta, { source: 'https://example.test', syncedAt: '2026-09-14T00:00:00.000Z', total: 1 });
});

test('refuses an empty or duplicate source snapshot', () => {
  assert.throws(() => buildSchoolSnapshot({ schools: [], apiBaseUrl: 'https://example.test/' }), /no published sailing schools/);
  assert.throws(() => buildSchoolSnapshot({ schools: [{ sourceSlug: 'one' }, { sourceSlug: 'one' }], apiBaseUrl: 'https://example.test/' }), /duplicate/);
});

function school(slug, state) {
  return {
    slug, canonicalUrl: `https://yousail.com.au/directory/${slug}`, sourceUpdatedAt: '2026-09-14',
    name: slug === 'alpha' ? 'Alpha Sailing' : 'Territory Sailing', featured: false,
    location: { suburb: 'Sydney', stateOrTerritory: state }, services: ['Sailing lessons'],
    featureImageUrl: null,
    contact: { website: 'https://alpha.test', phone: null, email: null },
    school: { serviceArea: null },
    media: { logoImageUrl: 'https://yousail.com.au/logo.png', featureImageUrl: null },
    freshness: { lastVerifiedAt: '2026-09-12', state: 'current' },
  };
}
