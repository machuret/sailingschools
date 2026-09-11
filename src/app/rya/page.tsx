import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { coursesInScheme } from '@/lib/scheme-courses';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'RYA Courses Australia | Competent Crew to Yachtmaster',
  description:
    'RYA courses in Australia — the cruising pathway from Competent Crew through Day Skipper to Yachtmaster, plus dinghy, navigation and specialist short courses.',
  alternates: { canonical: '/rya/' },
};

/** The sail cruising pathway. Only Competent Crew has a page so far. */
const CRUISING = [
  { name: 'Start Yachting', meta: '2 days · optional taster', href: null },
  { name: 'Competent Crew', meta: '5 days · no experience required', href: '/rya/competent-crew/' },
  { name: 'Day Skipper Theory', meta: '40 hours · classroom or online', href: null },
  { name: 'Day Skipper Practical', meta: '5 days · first command', href: null },
  { name: 'Coastal Skipper Practical', meta: '5 days · advanced', href: null },
  { name: 'Coastal / Yachtmaster Offshore Theory', meta: 'advanced shorebased', href: null },
  { name: 'Yachtmaster Coastal · Offshore · Ocean', meta: 'examination, not a course', href: null },
];

const OTHER = [
  {
    h: 'Dinghy',
    p: 'Start Sailing, Basic Skills and Improving Sailing Skills, then the advanced modules — seamanship, day sailing, spinnakers and performance sailing.',
    tag: 'Levels 1–3 + 4 modules',
    href: '/rya/dinghy-scheme/',
  },
  {
    h: 'Youth',
    p: 'Stages 1 to 4 for sailors under 16, covering the same ground as the adult levels at a pace built for younger sailors, plus the racing modules.',
    tag: 'Stages 1–4',
    href: '/rya/youth-stage-1/',
  },
  {
    h: 'Keelboat & multihull',
    p: 'Parallel schemes on small ballasted boats and on beach catamarans — start, basic skills, day sailing and advanced handling in each.',
    tag: '7 courses',
    href: '/rya/keelboat-start-sailing/',
  },
  {
    h: 'Navigation & short courses',
    p: 'Essential Navigation & Seamanship through Yachtmaster Ocean Theory, plus marine radio, diesel engine, radar, first aid and sea survival.',
    tag: '1–2 days each',
    href: '/courses/',
  },
];

/**
 * The RYA hub lists 30-odd courses. Flat, that is a wall; grouped by sub-scheme it reads as
 * four short menus. Order within a group still comes from the record's `order`.
 */
const GROUPS = (() => {
  const all = coursesInScheme('rya');
  const names = ['Sail cruising', 'Dinghy', 'Youth', 'Keelboat', 'Multihull'];
  return names
    .map((name) => ({
      name,
      list: all.filter((c) => (c.group ?? 'Sail cruising') === name),
    }))
    .filter((g) => g.list.length > 0);
})();

export default function RyaHubPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a cruising yacht under sail, crew working the foredeck" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'RYA' }]} />
            <h1>
              RYA Courses <em>in Australia</em>
            </h1>
            <p className="sub">
              RYA training is much broader than Competent Crew, Day Skipper and Yachtmaster. It
              covers adult and youth dinghy sailing, keelboats, multihulls, sail cruising,
              navigation, racing, foiling, radio, first aid, radar, diesel and sea survival — and it
              has the strongest school availability of any international scheme in Australia.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare with IYT &amp; ASA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The main route</span>
              <h2 className="h2">RYA sail cruising pathway</h2>
            </div>
          </div>
          <p className="copy">
            For someone whose goal is cruising yachts, this is the usual order. You do not have to
            start at the top — Start Yachting is an optional taster, and many people begin at
            Competent Crew. Yachtmaster at the end is not another five-day course: it is an
            independent examination against a standard, taken after qualifying sea time.
          </p>
          <div className="track" style={{ marginTop: 32, maxWidth: 640 }}>
            {CRUISING.map((c, i) => {
              const cls = i === 0 ? 'node dim' : i === CRUISING.length - 1 ? 'node lead' : 'node';
              return c.href ? (
                <Link className={cls} href={c.href} key={c.name}>
                  {c.name} <span style={{ fontWeight: 400, opacity: 0.75 }}>· {c.meta}</span>
                </Link>
              ) : (
                <div className={cls} key={c.name}>
                  {c.name} <span style={{ fontWeight: 400, opacity: 0.75 }}>· {c.meta}</span>
                </div>
              );
            })}
          </div>
          <p className="copy" style={{ marginTop: 32 }}>
            Course guides are being published in pathway order.{' '}
            <Link href="/rya/competent-crew/">RYA Competent Crew →</Link>
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Beyond cruising</span>
              <h2 className="h2">The rest of the scheme</h2>
            </div>
          </div>
          <div className="cards">
            {OTHER.map((o) => (
              <div className="ccard" key={o.h}>
                <h3>
                  <Link href={o.href}>{o.h}</Link>
                </h3>
                <p>{o.p}</p>
                <div className="foot">
                  <span className="tag tag-cream">{o.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Before you book</span>
            <h2 className="h2">What an RYA Training Centre is</h2>
            <p className="copy">
              RYA courses can only be taught by recognised RYA Training Centres, and recognition is
              held by the school rather than by the instructor. That matters when you are comparing
              two schools advertising the same course name: check the centre is currently
              recognised, and check which vessel the practical course actually runs on.
            </p>
            <p className="copy">
              An RYA certificate is a recreational qualification. It is not permission to work
              commercially — Australia&rsquo;s domestic commercial certificates are administered by
              AMSA and sit outside the scheme entirely.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/qualifications/rya-vs-iyt-vs-asa/">
                Recreational vs commercial
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/sailing-schools/">
              <div>
                <h3>Schools teaching RYA courses</h3>
                <p>RYA has the strongest Australian availability of the three international schemes</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>Starting from zero experience</h3>
                <p>Whether to begin in a dinghy, a keelboat or straight onto a cruising yacht</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/iyt/">
              <div>
                <h3>IYT courses</h3>
                <p>Dedicated catamaran certificates at every skipper level</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/australian-sailing/">
              <div>
                <h3>Australian Sailing courses</h3>
                <p>The domestic dinghy and keelboat scheme, taught nationwide</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div>
                <h3>RYA vs IYT vs ASA</h3>
                <p>Three vocabularies for one pathway — and where they genuinely differ</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Course guides</span>
              <h2 className="h2">Every RYA course, explained</h2>
            </div>
            <span className="tag tag-cream">
              {coursesInScheme('rya').length} guides
            </span>
          </div>
          {GROUPS.map(({ name, list }) => (
            <div key={name} style={{ marginTop: 34 }}>
              <h3 className="h4" style={{ marginBottom: 14 }}>
                {name}
              </h3>
              <div className="rows">
                {list.map((c) => (
                  <Link className="row" href={`/${c.scheme}/${c.slug}/`} key={c.slug}>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.standfirst}</p>
                    </div>
                    <span className="arrow">
                      <i className="ph-duotone ph-caret-right" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Which RYA course should you start with?</h2>
            <p>
              Three questions — have you sailed before, what boat do you want to sail, and what is
              your goal — give you a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/courses/">
              All sailing courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
