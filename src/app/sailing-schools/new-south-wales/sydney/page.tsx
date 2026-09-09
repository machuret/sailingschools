import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'Sailing Schools Sydney | Sailing Lessons, RYA & Yacht Courses',
  description:
    'Dedicated sailing schools operating from Sydney Harbour, Middle Harbour, Pittwater and Botany Bay — beginner sailing, Australian Sailing keelboat courses, RYA and IYT yacht training, catamaran handling, Yachtmaster preparation, racing, safety and navigation.',
  alternates: { canonical: '/sailing-schools/new-south-wales/sydney/' },
};

const SCHOOLS = [
  { name: 'Pacific Sailing School', where: 'Rushcutters Bay', blurb: 'Keelboat and yacht pathways on the Harbour.', scheme: 'Australian Sailing', types: 'Beginner · Keelboat · Racing' },
  { name: 'Flying Fish Australia', where: 'Sydney Harbour', blurb: 'Yacht training with instructor pathways.', scheme: 'RYA', types: 'Yacht · Instructor' },
  { name: 'SailCorp', where: 'Sydney Harbour', blurb: 'Cruising Level 1 & 2 through to Yachtmaster.', scheme: 'RYA', types: 'Yacht · Liveaboard' },
  { name: 'Eastsail', where: 'Rushcutters Bay', blurb: 'Keelboat courses and club racing.', scheme: 'Australian Sailing', types: 'Beginner · Keelboat' },
  { name: 'Sydney by Sail', where: 'Darling Harbour', blurb: 'Introductory and keelboat courses from the city.', scheme: 'Australian Sailing', types: 'Beginner · Keelboat' },
  { name: 'AusSea Sailing School', where: 'Middle Harbour', blurb: 'Yacht and skipper development.', scheme: 'IYT', types: 'Yacht · Skipper' },
  { name: 'Liquid Edge Sailing School', where: 'Pittwater', blurb: 'Keelboat and cruising courses on Pittwater.', scheme: 'Australian Sailing', types: 'Beginner · Yacht' },
  { name: 'Atlas Sailing', where: 'Sydney Harbour', blurb: 'Skipper and charter preparation.', scheme: 'IYT', types: 'Skipper · Charter' },
];

const COURSE_COUNTS = [
  { icon: 'ph-sailboat', n: 6, label: 'Beginner' },
  { icon: 'ph-anchor', n: 5, label: 'Keelboat' },
  { icon: 'ph-certificate', n: 3, label: 'RYA yacht' },
  { icon: 'ph-boat', n: 2, label: 'Catamaran' },
  { icon: 'ph-medal', n: 2, label: 'Yachtmaster' },
  { icon: 'ph-lifebuoy', n: 3, label: 'Safety & radio' },
];

export default function SydneyPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — Sydney Harbour from the water" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / <Link href="/sailing-schools/">Schools</Link> / New South
              Wales / Sydney
            </p>
            <h1>
              Sailing Schools <em>Sydney</em>
            </h1>
            <p className="sub">
              Australia&rsquo;s largest sailing-training market, with dedicated providers operating
              from Sydney Harbour, Middle Harbour, Pittwater and Botany Bay. Beginner sailing,
              Australian Sailing keelboat courses, RYA and IYT yacht training, catamaran handling,
              Yachtmaster preparation, racing, safety, radio, diesel and navigation are all taught
              here.
            </p>
            <div className="cta">
              <a className="pill pill-orange" href="#schools">
                See the schools
              </a>
              <Link className="pill pill-ghost" href="/find-a-course/">
                Which course first?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="schools">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">8 schools</span>
              <h2 className="h2">Sydney sailing schools</h2>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="tag tag-navy">All</span>
              {['Beginner', 'Keelboat', 'Yacht', 'Catamaran', 'Racing', 'Safety'].map((t) => (
                <span className="tag tag-sky" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="cards">
            {SCHOOLS.map((s) => (
              <Link className="ccard" href="/schools/harbourline-sailing-school/" key={s.name}>
                <div className="photo">
                  <span className="badge">{s.where}</span>
                  <ImageSlot placeholder="School photo" />
                </div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <div className="meta">
                  <span className="tag tag-sky">{s.scheme}</span>
                </div>
                <div className="foot">
                  <span className="meta" style={{ margin: 0 }}>
                    {s.types}
                  </span>
                  <span className="arrow">
                    <i className="ph-duotone ph-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="copy" style={{ marginTop: 28 }}>
            Accreditation and course types are drawn from each school&rsquo;s verified profile. Also
            in NSW: SailTime Newport, Yachting Directions, Ocean Boardroom, Above &amp; Beyond
            Boating, Marine SafetyWorks, Balmoral Water Sports Center.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Where will you train?</span>
            <h2 className="h2">Sydney Harbour is a hard, honest classroom</h2>
            <p className="copy">
              Confined water with heavy commercial traffic — ferries, tugs, cruise ships and weekend
              racing fleets — teaches collision regulations, pilotage and boat handling faster than
              any lecture, with open-water access through the Heads when conditions allow. Pittwater
              and Broken Bay offer quieter water for first lessons and anchoring practice.
            </p>
            <div className="rows">
              {[
                { h: 'Middle Harbour', p: 'Sheltered, less traffic — 2 schools' },
                { h: 'Pittwater & Broken Bay', p: 'Cruising grounds an hour north — 4 schools' },
                { h: 'Botany Bay', p: 'Open water, southern suburbs — 1 school' },
              ].map((r) => (
                <Link className="row" href="/sailing-schools/" key={r.h}>
                  <div>
                    <h3>{r.h}</h3>
                    <p>{r.p}</p>
                  </div>
                  <span className="arrow">
                    <i className="ph-duotone ph-caret-right" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="photo tall">
            <ImageSlot placeholder="Drop a map of the Sydney training waters, one pin per school" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Courses around Sydney</span>
              <h2 className="h2">By type</h2>
            </div>
          </div>
          <div
            className="panel feat"
            style={{ gridTemplateColumns: 'repeat(6,minmax(0,1fr))', gap: 24 }}
          >
            {COURSE_COUNTS.map((c) => (
              <div key={c.label}>
                <i className={`ph-duotone ${c.icon}`} />
                <h3 style={{ fontSize: 36 }}>{c.n}</h3>
                <p>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Not sure which of these schools fits?</h2>
            <p>
              Do not start with price. Start with the outcome, the boat you will train on, class size
              and whether the qualification is relevant to what you want to do.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
              How to compare schools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
