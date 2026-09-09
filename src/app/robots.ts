import type { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must never be indexed in place of the real site.
  const isPreview = process.env.VERCEL_ENV === 'preview';
  return {
    rules: isPreview ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl,
  };
}
