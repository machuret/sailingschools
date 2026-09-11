'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { glossarySorted, glossaryLetters, type GlossaryTerm } from '@/lib/glossary';

/**
 * The glossary is one page, not 94 of them — a definition is two sentences, and a page
 * built around two sentences is thin. What a reader wants is to find the word fast, so the
 * page is a filter rather than a route. Everything is rendered server-side first; the
 * filter only hides.
 */
const GROUPS: { key: NonNullable<GlossaryTerm['tags']>[number] | 'all'; label: string }[] = [
  { key: 'all', label: 'Everything' },
  { key: 'beginner', label: 'First day aboard' },
  { key: 'rig', label: 'Rig & sails' },
  { key: 'navigation', label: 'Navigation' },
  { key: 'safety', label: 'Safety' },
  { key: 'qualification', label: 'Qualifications' },
];

export default function GlossaryList() {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState<(typeof GROUPS)[number]['key']>('all');

  const shown = useMemo(() => {
    const needle = q.trim().toLocaleLowerCase('en-AU');
    return glossarySorted.filter((t) => {
      if (tag !== 'all' && !t.tags?.includes(tag)) return false;
      if (!needle) return true;
      return (
        t.term.toLocaleLowerCase('en-AU').includes(needle) ||
        t.def.toLocaleLowerCase('en-AU').includes(needle)
      );
    });
  }, [q, tag]);

  const letters = glossaryLetters.filter((l) =>
    shown.some((t) => (t.sort ?? t.term).toLocaleUpperCase('en-AU')[0] === l),
  );

  return (
    <>
      <div className="gl-controls">
        <div className="gl-search">
          <i className="ph-duotone ph-magnifying-glass" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 94 terms — try “gybe” or “reef”"
            aria-label="Search the glossary"
          />
        </div>
        <div className="gl-tags">
          {GROUPS.map((g) => (
            <button
              key={g.key}
              type="button"
              className={tag === g.key ? 'gl-tag on' : 'gl-tag'}
              aria-pressed={tag === g.key}
              onClick={() => setTag(g.key)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="gl-jump" aria-label="Jump to letter">
        {glossaryLetters.map((l) => {
          const live = letters.includes(l);
          return live ? (
            <a href={`#letter-${l}`} key={l}>
              {l}
            </a>
          ) : (
            <span key={l} aria-hidden="true">
              {l}
            </span>
          );
        })}
      </nav>

      <p className="gl-count" role="status">
        {shown.length} {shown.length === 1 ? 'term' : 'terms'}
        {tag !== 'all' && ` in ${GROUPS.find((g) => g.key === tag)!.label.toLowerCase()}`}
        {q.trim() && ` matching “${q.trim()}”`}
      </p>

      {letters.length === 0 ? (
        <p className="copy">
          Nothing matches that. Try a shorter search, or{' '}
          <button type="button" className="gl-reset" onClick={() => { setQ(''); setTag('all'); }}>
            clear the filters
          </button>
          .
        </p>
      ) : (
        letters.map((letter) => (
          <section className="gl-block" key={letter} id={`letter-${letter}`}>
            <h2 className="gl-letter" aria-label={`Terms beginning with ${letter}`}>
              {letter}
            </h2>
            <dl className="gl-list">
              {shown
                .filter((t) => (t.sort ?? t.term).toLocaleUpperCase('en-AU')[0] === letter)
                .map((t) => (
                  <div className="gl-item" key={t.term}>
                    <dt>
                      {t.href ? <Link href={t.href}>{t.term}</Link> : t.term}
                    </dt>
                    <dd>{t.def}</dd>
                  </div>
                ))}
            </dl>
          </section>
        ))
      )}
    </>
  );
}
