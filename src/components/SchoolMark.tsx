import type { School } from '@/lib/schools';

/**
 * A school's identity mark.
 *
 * Where we hold a licensed logo, it renders. Where we do not — which is every
 * school today — it renders a monogram built from the school's initials rather
 * than an empty grey box.
 *
 * The monogram is explicitly ours, not theirs: one typeface, one restrained
 * range of the site's own palette, chosen deterministically from the name so a
 * school always looks the same. That keeps the directory grid reading as one
 * system, and it never implies we are showing a school's actual branding.
 */

/**
 * Initials from up to three significant words. Single-word names are split on
 * internal capitals first (SailCorp -> SC) and otherwise take their first two
 * letters, because one lone letter reads as a mistake rather than a mark.
 */
function initials(name: string) {
  const skip = new Set(['the', 'of', 'and', '&', 'a', 'at', 'on', 'in', 'for']);
  const words = name
    .replace(/[^\w\s&]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !skip.has(w.toLowerCase()));

  if (words.length === 1) {
    const word = words[0];
    const camel = word.match(/[A-Z][a-z]*/g);
    if (camel && camel.length > 1) return camel.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
    return word.slice(0, 2).toUpperCase();
  }
  return words
    .slice(0, words.length > 2 ? 3 : 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

/** Stable hash so a given school always draws the same mark. */
function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Five tints, all inside the Coastal range — a grid of these still reads as one palette. */
const TINTS = ['mark-navy', 'mark-blue', 'mark-cyan', 'mark-deep', 'mark-slate'] as const;

export default function SchoolMark({ school }: { school: School }) {
  if (school.logo) {
    return (
      <div className="school-mark has-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={school.logo} alt={`${school.name} logo`} loading="lazy" />
      </div>
    );
  }
  const tint = TINTS[hash(school.name) % TINTS.length];
  return (
    <div className={`school-mark ${tint}`} aria-hidden="true">
      <span className="school-mark-letters">{initials(school.name)}</span>
      <span className="school-mark-rule" />
    </div>
  );
}
