import { cities } from './cities';
import { courses } from './courses';
import { faqPages } from './faq';
import { guides } from './guides';
import { comparisons } from './comparisons';
import { pathways } from './pathways';
import { licences } from './licences';
import { schemeCourses } from './scheme-courses';
import { states } from './states';

/**
 * Canonical origin for the site. Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every
 * deployment, but preview deployments must not emit canonicals or a sitemap pointing at
 * themselves — so an explicit NEXT_PUBLIC_SITE_URL always wins.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://www.sailingschools.com.au')
).replace(/\/$/, '');

export const absoluteUrl = (path: string) => `${siteUrl}${path === '/' ? '' : path}`;

export type SiteRoute = {
  path: string;
  /** Relative weight within the site, per the sitemap spec. */
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
};

/**
 * Every indexable route. Pages are added here as they are built — the sitemap, and any
 * future link auditing, read from this one list rather than crawling the filesystem.
 */
const staticRoutes: SiteRoute[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/find-a-course/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sailing-schools/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/rya/competent-crew/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/qualifications/rya-vs-iyt-vs-asa/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pathways/complete-beginner/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/courses/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pathways/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/compare/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/learn/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/learn/points-of-sail/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/faq/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/learn/boat-licence/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sitemap/', priority: 0.3, changeFrequency: 'weekly' },
  { path: '/privacy-policy/', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions/', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/rya/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/iyt/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/asa/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/australian-sailing/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/schools/harbourline-sailing-school/', priority: 0.5, changeFrequency: 'monthly' },
];

/** State directory pages are generated from the school data, so they are derived here too. */
const stateRoutes: SiteRoute[] = states.map((state) => ({
  path: `/sailing-schools/${state.key}/`,
  priority: 0.8,
  changeFrequency: 'weekly',
}));

/** Intent course pages, generated from the course records. */
const courseRoutes: SiteRoute[] = courses.map((c) => ({
  path: `/courses/${c.slug}/`,
  priority: 0.7,
  changeFrequency: 'monthly',
}));

/** City and region pages — the highest-intent geography, so weighted above the states. */
const cityRoutes: SiteRoute[] = cities.map((c) => ({
  path: `/sailing-schools/${c.state}/${c.slug}/`,
  priority: 0.85,
  changeFrequency: 'weekly',
}));

/** Named courses under each training body's hub. */
const schemeCourseRoutes: SiteRoute[] = schemeCourses.map((c) => ({
  path: `/${c.scheme}/${c.slug}/`,
  priority: 0.75,
  changeFrequency: 'monthly',
}));

/** Boat licence rules, one page per state and territory. */
const licenceRoutes: SiteRoute[] = licences.map((l) => ({
  path: `/learn/${l.slug}/`,
  priority: 0.85,
  changeFrequency: 'monthly',
}));

/** Goal-based pathways — high intent, so weighted with the hubs. */
const pathwayRoutes: SiteRoute[] = pathways.map((p) => ({
  path: `/pathways/${p.slug}/`,
  priority: 0.85,
  changeFrequency: 'monthly',
}));

/** Head-to-head comparison pages. */
const comparisonRoutes: SiteRoute[] = comparisons.map((c) => ({
  path: `/compare/${c.slug}/`,
  priority: 0.8,
  changeFrequency: 'monthly',
}));

/** Long-form explainers under /learn/ that are not licence records. */
const guideRoutes: SiteRoute[] = guides.map((g) => ({
  path: `/learn/${g.slug}/`,
  priority: 0.8,
  changeFrequency: 'monthly',
}));

/** FAQ answers that carry their own URL. */
const faqRoutes: SiteRoute[] = faqPages.map((f) => ({
  path: `/faq/${f.page!.slug}/`,
  priority: 0.6,
  changeFrequency: 'monthly',
}));

const allRoutes: SiteRoute[] = [
  ...staticRoutes,
  ...stateRoutes,
  ...cityRoutes,
  ...courseRoutes,
  ...schemeCourseRoutes,
  ...licenceRoutes,
  ...pathwayRoutes,
  ...guideRoutes,
  ...comparisonRoutes,
  ...faqRoutes,
];

/**
 * De-duplicated by path. A page listed twice in a sitemap is a cheap way to look
 * careless to a crawler, and it is easy to reintroduce when a hand-written entry is
 * later replaced by a generated one.
 */
export const routes: SiteRoute[] = allRoutes.filter(
  (route, i) => allRoutes.findIndex((r) => r.path === route.path) === i,
);
