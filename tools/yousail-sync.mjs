import fs from 'node:fs';

const STATE_KEYS = {
  NSW: 'new-south-wales', QLD: 'queensland', VIC: 'victoria',
  WA: 'western-australia', SA: 'south-australia', TAS: 'tasmania',
  NT: 'northern-territory', ACT: 'australian-capital-territory',
};

export async function fetchYouSailSchools({ apiBaseUrl, secret, fetchImpl = fetch, sleepImpl = sleep }) {
  if (typeof secret !== 'string' || secret.length < 32) {
    throw new Error('YOUSAIL_CONTENT_API_SECRET must contain at least 32 characters');
  }
  const summaries = [];
  let offset = 0;
  do {
    const url = new URL(`${apiBaseUrl.replace(/\/$/, '')}/schools`);
    url.searchParams.set('limit', '50');
    url.searchParams.set('offset', String(offset));
    const page = await readJson(url, secret, fetchImpl, sleepImpl);
    if (!page?.pagination || !Array.isArray(page.schools)) throw new Error('YouSail school list has an unexpected shape');
    summaries.push(...page.schools);
    offset += page.schools.length;
    if (page.schools.length === 0 || offset >= page.pagination.totalCount) break;
  } while (offset <= 1_000_000);

  const schools = [];
  for (const summary of summaries) {
    const detail = await readJson(
      new URL(`${apiBaseUrl.replace(/\/$/, '')}/schools/${encodeURIComponent(summary.slug)}`),
      secret,
      fetchImpl,
      sleepImpl,
    );
    if (!detail?.school || detail.school.slug !== summary.slug) {
      throw new Error(`YouSail school detail has an unexpected shape for ${summary.slug}`);
    }
    const school = toSchool(detail.school);
    if (school !== null) schools.push(school);
  }
  return schools;
}

export function buildSchoolSnapshot({ schools, apiBaseUrl, now = new Date() }) {
  if (!Array.isArray(schools) || schools.length === 0) {
    throw new Error('YouSail returned no published sailing schools; refusing to replace the current directory');
  }
  if (new Set(schools.map((school) => school.sourceSlug)).size !== schools.length) {
    throw new Error('YouSail returned duplicate sailing school identities');
  }
  return {
    _meta: {
      source: apiBaseUrl.replace(/\/$/, ''),
      syncedAt: now.toISOString(),
      total: schools.length,
    },
    schools,
  };
}

function toSchool(entry) {
  const state = STATE_KEYS[entry.location?.stateOrTerritory] ?? 'australia-wide';
  return compact({
    sourceSlug: entry.slug,
    sourceUrl: entry.canonicalUrl,
    sourceUpdatedAt: entry.sourceUpdatedAt,
    name: entry.name,
    state,
    region: entry.location?.suburb ?? entry.school?.serviceArea,
    website: entry.contact?.website,
    phone: entry.contact?.phone,
    email: entry.contact?.email,
    logo: entry.media?.logoImageUrl,
    featureImage: entry.media?.featureImageUrl ?? entry.featureImageUrl,
    checked: entry.freshness?.lastVerifiedAt,
    freshness: entry.freshness?.state,
    services: entry.services,
    operatingScope: entry.school?.operatingScope,
    editorial: entry.editorial,
  });
}

function compact(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== null && entry !== ''));
}

async function readJson(url, secret, fetchImpl, sleepImpl) {
  let lastError;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    let response;
    try {
      response = await fetchImpl(url, {
        headers: { authorization: `Bearer ${secret}`, accept: 'application/json' },
        signal: AbortSignal.timeout(30_000),
      });
    } catch (error) {
      lastError = error;
      if (attempt === 5) throw lastError;
      await sleepImpl(750 * (2 ** (attempt - 1)));
      continue;
    }
    if (response.ok) return response.json();
    lastError = new Error(`YouSail content API returned HTTP ${response.status} for ${url.pathname}`);
    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 5) throw lastError;
    await sleepImpl(750 * (2 ** (attempt - 1)));
  }
  throw lastError;
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

if (import.meta.url === `file://${process.argv[1]}`) {
  const apiBaseUrl = process.env.YOUSAIL_CONTENT_API_URL
    || 'https://yousail.com.au/api/content-platform/v1/sites/sailingschools';
  const schools = await fetchYouSailSchools({ apiBaseUrl, secret: process.env.YOUSAIL_CONTENT_API_SECRET });
  const snapshot = buildSchoolSnapshot({ schools, apiBaseUrl });
  fs.mkdirSync(new URL('../data/', import.meta.url), { recursive: true });
  fs.writeFileSync(new URL('../data/yousail-schools.json', import.meta.url), `${JSON.stringify(snapshot, null, 2)}\n`);
  process.stdout.write(`Synced ${schools.length} published sailing schools from YouSail.\n`);
}
