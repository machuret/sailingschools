import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'RYA Competent Crew',
  description:
    'RYA Competent Crew is a five-day practical course requiring no previous sailing experience, normally run liveaboard on a cruising yacht. What it covers, who it suits, and the Australian schools that teach it.',
  alternates: { canonical: '/courses/rya-competent-crew' },
};

const SCHOOLS = [
  {
    name: 'SailCorp',
    badge: 'Sydney · NSW',
    blurb:
      'RYA Training Centre on Sydney Harbour. Also lists Cruising Level 1 and 2 for a shorter introduction before the full five days.',
    tags: ['RYA', 'Liveaboard'],
    href: '/schools/harbourline-sailing-school',
  },
  {
    name: 'Yachtmaster Sailing School',
    badge: 'Melbourne · VIC',
    blurb:
      'Publishes 2026 prices from short introductory programs through liveaboard RYA courses on Port Phillip.',
    tags: ['RYA', 'Liveaboard'],
    href: '/schools/harbourline-sailing-school',
  },
  {
    name: 'Oceanwest RYA Sailing School',
    badge: 'Fremantle · WA',
    blurb: 'RYA centre on Cockburn Sound, also listed for Cruising Level 1 and Level 2.',
    tags: ['RYA'],
    href: '/schools/harbourline-sailing-school',
  },
  {
    name: 'Sunshine Sailing Australia',
    badge: 'Mooloolaba · QLD',
    blurb:
      'Separate current prices for RYA, ASA and charter-preparation programs on the Sunshine Coast.',
    tags: ['RYA', 'ASA'],
    href: '/schools/harbourline-sailing-school',
  },
];

export default function CoursePage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <p className="crumb dark">
            <Link href="/">Home</Link> / <Link href="/qualifications/rya-vs-iyt-vs-asa">RYA</Link> /
            Sail cruising / Competent Crew
          </p>
          <div
            className="split top"
            style={{ marginTop: 20, gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)' }}
          >
            <div className="photo tall" style={{ aspectRatio: '1 / 1' }}>
              <span className="badge">5 days</span>
              <ImageSlot placeholder="Drop a photograph — crew reefing the mainsail" />
            </div>
            <div className="panel" style={{ marginTop: 0, padding: '48px 44px' }}>
              <span className="kicker">RYA · Sail cruising</span>
              <h1 className="h2" style={{ fontSize: 'clamp(34px,3.6vw,50px)' }}>
                RYA Competent Crew
              </h1>
              <div className="chain" style={{ marginTop: 22 }}>
                <span className="tag tag-orange" style={{ padding: '10px 20px', fontSize: 14 }}>
                  Description
                </span>
                <span
                  className="tag"
                  style={{
                    padding: '10px 20px',
                    fontSize: 14,
                    border: '2px solid var(--navy)',
                    color: 'var(--navy)',
                  }}
                >
                  Who it suits
                </span>
                <span
                  className="tag"
                  style={{
                    padding: '10px 20px',
                    fontSize: 14,
                    border: '2px solid var(--navy)',
                    color: 'var(--navy)',
                  }}
                >
                  Schools
                </span>
              </div>
              <p className="copy">
                <b>RYA Competent Crew</b> is one of the strongest entry points for anyone who intends
                to sail cruising yachts. RYA currently lists it as a five-day practical course
                requiring no previous sailing experience, normally run liveaboard on a cruising
                yacht.
              </p>
              <p className="copy">
                The purpose is not to create a skipper. The purpose is to create an active crew
                member who understands what is happening aboard: steering, changing sails, reefing,
                ropework and knots, safety equipment, person-overboard recovery, basic meteorology,
                keeping a lookout, general duties and onboard routines.
              </p>
              <p className="copy">
                It suits complete beginners who want yachts rather than dinghies; couples planning to
                cruise who want both partners competent; and anyone whose end goal is charter,
                ownership or offshore passages. Someone who only wants to try sailing once may prefer
                Start Yachting — two days rather than five.
              </p>
              <dl
                className="facts"
                style={{ marginTop: 32, gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}
              >
                <div className="fact">
                  <dt>Duration</dt>
                  <dd>5 days, practical</dd>
                </div>
                <div className="fact">
                  <dt>Experience required</dt>
                  <dd>None</dd>
                </div>
                <div className="fact">
                  <dt>Boat</dt>
                  <dd>Cruising yacht, usually liveaboard</dd>
                </div>
                <div className="fact">
                  <dt>What comes next</dt>
                  <dd>
                    <Link href="/find-a-course">Day Skipper Theory &amp; Practical</Link>
                  </dd>
                </div>
              </dl>
              <div
                className="cta"
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}
              >
                <a className="pill pill-orange" href="#schools">
                  Schools offering this course
                </a>
                <Link className="pill pill-outline" href="/qualifications/rya-vs-iyt-vs-asa">
                  Compare RYA, IYT &amp; ASA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kicker">Where it sits</span>
          <h2 className="h2">The RYA sail cruising pathway</h2>
          <div className="chain">
            <span className="tag tag-sky">Start Yachting</span>
            <span className="sep">→</span>
            <span className="tag tag-orange">Competent Crew</span>
            <span className="sep">→</span>
            <span className="tag tag-sky">Day Skipper Theory</span>
            <span className="sep">→</span>
            <span className="tag tag-sky">Day Skipper Practical</span>
            <span className="sep">→</span>
            <span className="tag tag-sky">Coastal Skipper</span>
            <span className="sep">→</span>
            <span className="tag tag-navy">Yachtmaster Coastal / Offshore / Ocean</span>
          </div>
          <p className="copy">
            Day Skipper Practical marks the transition from crew to skipper. It should not be
            marketed as &ldquo;become an expert skipper in five days&rdquo; — it is an important
            stage in skipper development, and experience still matters.
          </p>
          <div className="cols" style={{ marginTop: 36 }}>
            <div className="step">
              <h3 className="h4">IYT equivalent</h3>
              <p>
                International Crew — theory and practical for an active crew member; modules 1–11 of
                the IYT passport.
              </p>
              <ul>
                <li>
                  <Link href="/qualifications/rya-vs-iyt-vs-asa">IYT International Crew →</Link>
                </li>
              </ul>
            </div>
            <div className="step">
              <h3 className="h4">American Sailing equivalent</h3>
              <p>
                ASA 101 Keelboat 1 followed by ASA 103 Coastal Cruising covers similar ground on
                smaller boats first.
              </p>
              <ul>
                <li>
                  <Link href="/qualifications/rya-vs-iyt-vs-asa">ASA 101 + ASA 103 →</Link>
                </li>
              </ul>
            </div>
            <div className="step">
              <h3 className="h4">Australian Sailing equivalent</h3>
              <p>
                Start Crewing on a keelboat — boat handling, safety, terminology, theory and crew
                roles in sheltered waters.
              </p>
              <ul>
                <li>
                  <Link href="/pathways/learn-to-sail-from-scratch">Start Crewing →</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="schools">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Where to take it</span>
              <h2 className="h2">Schools offering RYA Competent Crew</h2>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="tag tag-navy">All</span>
              <Link className="tag tag-sky" href="/sailing-schools/new-south-wales/sydney">
                NSW
              </Link>
              <span className="tag tag-sky">QLD</span>
              <span className="tag tag-sky">VIC</span>
              <span className="tag tag-sky">WA</span>
            </div>
          </div>
          <div className="cards">
            {SCHOOLS.map((s) => (
              <Link className="ccard" href={s.href} key={s.name}>
                <div className="photo">
                  <span className="badge">{s.badge}</span>
                  <ImageSlot placeholder="School photo" />
                </div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <div className="meta">
                  {s.tags.map((t, i) => (
                    <span className={i === 0 ? 'tag tag-sky' : 'tag tag-cream'} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="foot">
                  <span className="price">From $—</span>
                  <span className="tag tag-cream">Checked Sep 2026</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="copy" style={{ marginTop: 28 }}>
            Every price on this site carries the date it was checked. A two-hour introduction and a
            five-day liveaboard course should never be compared on price alone.{' '}
            <Link href="/find-a-course">How much do sailing courses cost? →</Link>
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Is Competent Crew the right first course for you?</h2>
            <p>
              If you would rather start in a dinghy or keelboat, or you already crew, the
              three-question finder will say so.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/pathways/learn-to-sail-from-scratch">
              Beginner pathway
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
