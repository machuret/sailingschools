import type { JsonLdNode } from '@/lib/schema';

/** Emits one JSON-LD graph. Escaped so a `<` in any value cannot break out of the script. */
export default function JsonLd({ nodes }: { nodes: JsonLdNode[] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
