import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'Australian Sailing Courses | Dinghy, Keelboat & Racing',
  description:
    'Australian Sailing courses — Tackers for kids, OutThere Sailing for teenagers, the dinghy pathway from Start Sailing 1, and the keelboat pathway from Start Crewing through Start Skippering to racing.',
  alternates: { canonical: '/australian-sailing/' },
};

const PATHWAYS = [
  {
    h: 'Kids',
    sub: 'From about age 7',
    steps: ['Little Tackers', 'Tackers Intro', 'Tackers 1', 'Tackers 2', 'Tackers 3'],
    note: 'Tackers is built around fun and water confidence first, sailing skill second — which is why it works.',
  },
  {
    h: 'Teens',
    sub: 'Too old for Tackers',
    steps: ['OutThere Experience', 'OutThere 1', 'OutThere 2', 'OutThere 3'],
    note: 'For teenagers who have outgrown Tackers but do not want an adult qualification yet.',
  },
  {
    h: 'Dinghy',
    sub: 'Adults and youth',
    steps: ['Discover Sailing / Intro', 'Start Sailing 1', 'Start Sailing 2', 'Better Sailing', 'Start Racing', 'Better Racing'],
    note: 'The fastest route to wind awareness and sail balance, and the standard entry to club racing.',
  },
  {
    h: 'Keelboat',
    sub: 'Adults',
    steps: ['Discover Sailing', 'Start Crewing', 'Start Helming', 'Start Skippering', 'Spinnakers', 'Start Racing'],
    note: 'A stable training boat, no capsizing, and a natural bridge toward larger yachts.',
  },
];

export default function AustralianSailingHubPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a dinghy fleet training on sheltered water" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Australian Sailing' }]} />
            <h1>
              Australian Sailing <em>Courses</em>
            </h1>
            <p className="sub">
              The national body&rsquo;s own scheme, and the one most Australians actually start on.
              It separates into Tackers for children, OutThere Sailing for teenagers, a dinghy
              pathway and a keelboat pathway — plus powerboat, Safety &amp; Sea Survival, instructor
              and coach education alongside.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/sailing-schools/">
                Browse schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Four routes</span>
              <h2 className="h2">The core sailing pathways</h2>
            </div>
          </div>
          <p className="copy">
            These are small-boat pathways. They build excellent sailors, and they are the cheapest
            and most widely available training in the country — but none of them is a cruising-yacht
            qualification. Sailors heading for charter, ownership or offshore usually cross to the
            RYA or IYT cruising schemes after the keelboat pathway.
          </p>
          <div className="cards" style={{ marginTop: 40 }}>
            {PATHWAYS.map((p) => (
              <div className="ccard" key={p.h} style={{ padding: '28px 24px 26px' }}>
                <span className="kicker" style={{ fontSize: 15 }}>
                  {p.sub}
                </span>
                <h3 style={{ margin: '0 0 16px' }}>{p.h}</h3>
                <div className="track" style={{ marginTop: 0 }}>
                  {p.steps.map((s, i) => (
                    <div className={i === 0 ? 'node dim' : 'node'} key={s} style={{ fontSize: 14.5 }}>
                      {s}
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 22 }}>{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Alongside the pathways</span>
            <h2 className="h2">Safety, powerboat and instructing</h2>
            <p className="copy">
              Australian Sailing also runs the Safety &amp; Sea Survival course and its refresher —
              a prerequisite for many offshore races and worth doing long before you need it —
              plus powerboat courses that matter more to sailors than they sound, since most
              training and rescue work happens from a tender.
            </p>
            <p className="copy">
              The instructor pathway is the domestic route into teaching, and the one most Australian
              sailing instructors take before adding RYA or IYT credentials.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/find-a-course/">
                Safety &amp; Sea Survival
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/rya/">
              <div>
                <h3>Crossing to the RYA cruising scheme</h3>
                <p>Where keelboat sailors go when the goal is a cruising yacht</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>Dinghy, keelboat or straight to a yacht?</h3>
                <p>Three legitimate starting routes, and how to pick between them</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div>
                <h3>How the schemes compare</h3>
                <p>Australian Sailing, RYA, IYT and American Sailing side by side</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Learning as an adult, or booking for a child?</h2>
            <p>
              The three-question finder separates the two, and points at the schools running Tackers
              and Start Sailing near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/pathways/complete-beginner/">
              Beginner pathway
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
