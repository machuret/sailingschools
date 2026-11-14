import { getLiveSchools } from '@/lib/live-schools';
import type { MetadataRoute } from 'next';
import { absoluteUrl, routes } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { schools } = await getLiveSchools();
  return [...routes.filter(route => !route.path.startsWith('/schools/')), ...schools.flatMap(school => school.sourceSlug && school.freshness !== 'unverified' ? [{path: `/schools/${school.sourceSlug}/`}] : [])].map((route) => ({
    url: absoluteUrl(route.path),
  }));
}
