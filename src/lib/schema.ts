import { absoluteUrl, siteUrl } from './site';

/** A JSON-LD node. Values are whatever schema.org allows, so this stays deliberately loose. */
export type JsonLdNode = Record<string, unknown>;

export const organization = (): JsonLdNode => ({
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'SailingSchools.com.au',
  url: absoluteUrl('/'),
  logo: absoluteUrl('/assets/logo.png'),
  email: 'hello@sailingschools.com.au',
  description:
    'Australia’s independent guide to sailing schools, sailing courses and sailing qualifications.',
  areaServed: { '@type': 'Country', name: 'Australia' },
});

export const website = (): JsonLdNode => ({
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'SailingSchools.com.au',
  url: absoluteUrl('/'),
  inLanguage: 'en-AU',
  publisher: { '@id': `${siteUrl}/#organization` },
});

export type Crumb = { name: string; href?: string };

export const breadcrumbs = (items: Crumb[]): JsonLdNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    ...(item.href ? { item: absoluteUrl(item.href) } : {}),
  })),
});

export const itemList = (name: string, items: { name: string; href?: string }[]): JsonLdNode => ({
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    ...(item.href ? { url: absoluteUrl(item.href) } : {}),
  })),
});

/**
 * A course as the awarding body defines it. `provider` is the training body, not this site —
 * we describe the qualification, we do not deliver it. No CourseInstance dates or prices are
 * emitted, because we hold none: those belong to individual schools once verified.
 */
export const course = (input: {
  name: string;
  description: string;
  provider: string;
  providerUrl?: string;
  /** ISO 8601 duration, e.g. P5D for five days. */
  timeRequired?: string;
  credential?: string;
  teaches?: string[];
}): JsonLdNode => ({
  '@type': 'Course',
  name: input.name,
  description: input.description,
  provider: {
    '@type': 'Organization',
    name: input.provider,
    ...(input.providerUrl ? { url: input.providerUrl } : {}),
  },
  ...(input.timeRequired ? { timeRequired: input.timeRequired } : {}),
  ...(input.credential ? { educationalCredentialAwarded: input.credential } : {}),
  ...(input.teaches ? { teaches: input.teaches } : {}),
  inLanguage: 'en-AU',
});

export const educationalOrganization = (input: {
  name: string;
  description: string;
  areaServed?: string;
  url?: string;
}): JsonLdNode => ({
  '@type': 'EducationalOrganization',
  name: input.name,
  description: input.description,
  ...(input.areaServed ? { areaServed: input.areaServed } : {}),
  ...(input.url ? { url: input.url } : {}),
});
