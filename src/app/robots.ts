import type { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/site';

/**
 * AI crawlers are named and allowed explicitly rather than left to the wildcard rule.
 * This site exists to answer questions about learning to sail in Australia; being quoted
 * by an assistant serves that purpose, and an explicit Allow removes any ambiguity for
 * crawlers that treat an unnamed agent conservatively.
 */
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'DuckAssistBot',
  'MistralAI-User',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must never be indexed in place of the real site.
  if (process.env.VERCEL_ENV === 'preview') {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl,
  };
}
