import Link from 'next/link';
import { schools } from '@/lib/schools';

export default function SchoolLogoRail() {
  const entries = schools.filter((school) => school.logo && school.profile && school.freshness !== 'unverified');
  if (entries.length < 2) return null;

  return (
    <section className="logo-section" aria-labelledby="school-logo-heading">
      <div className="wrap">
        <div className="logo-intro">
          <div>
            <span className="kicker">Explore verified providers</span>
            <h2 className="h3" id="school-logo-heading">Sailing schools in the directory</h2>
          </div>
          <Link className="pill pill-sky" href="/sailing-schools/">Browse all schools</Link>
        </div>
      </div>
      <div className="logo-viewport">
        <div className="logo-track">
          {[...entries, ...entries].map((school, index) => (
            <Link
              className="logo-tile"
              href={school.profile!}
              key={`${school.sourceSlug}-${index}`}
              aria-hidden={index >= entries.length ? true : undefined}
              tabIndex={index >= entries.length ? -1 : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={school.logo} alt={index < entries.length ? `${school.name} logo` : ''} loading="lazy" />
              <span>{school.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
