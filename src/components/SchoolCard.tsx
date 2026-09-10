import Link from 'next/link';
import SchoolMark from './SchoolMark';
import type { School } from '@/lib/schools';

/**
 * A directory card.
 *
 * The card is a container rather than a link, because the useful destination
 * differs per school: a verified school links out to its own site, and only a
 * school with a profile page on this site links inward. Wrapping the whole card
 * in one or the other would either send everyone off-site or point them at a
 * page that does not exist.
 */
export default function SchoolCard({ school }: { school: School }) {
  const host = school.website
    ? school.website.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
    : null;

  return (
    <div className="ccard">
      <div className="photo">
        {school.region && <span className="badge">{school.region}</span>}
        <SchoolMark school={school} />
      </div>
      <h3>{school.name}</h3>
      {school.blurb && <p>{school.blurb}</p>}
      {school.scheme && (
        <div className="meta">
          {school.scheme.split(' · ').map((s) => (
            <span className="tag tag-sky" key={s}>
              {s}
            </span>
          ))}
        </div>
      )}
      {school.types && (
        <div className="meta" style={{ marginTop: 12 }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{school.types}</span>
        </div>
      )}
      <div className="foot">
        {school.profile ? (
          <Link className="pill pill-orange sm" href={school.profile}>
            Full profile
          </Link>
        ) : school.website ? (
          <a
            className="school-link"
            href={school.website}
            target="_blank"
            rel="noopener nofollow"
          >
            <span>{host}</span>
            <i className="ph-duotone ph-arrow-up-right" aria-hidden="true" />
          </a>
        ) : (
          <span className="tag tag-cream">Being verified</span>
        )}
        {school.checked && <span className="school-checked">Checked {school.checked}</span>}
      </div>
    </div>
  );
}
