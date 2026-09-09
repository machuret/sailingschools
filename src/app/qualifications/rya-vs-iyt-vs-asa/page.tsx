import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'RYA vs IYT vs ASA Australia | Which Qualification to Choose',
  description:
    'Three international schemes teach cruising yachts in Australia. Compared side by side on crew and skipper pathways, catamaran certificates, offshore routes, Australian school availability and commercial progression.',
  alternates: { canonical: '/qualifications/rya-vs-iyt-vs-asa/' },
};

type Row = { area: string; rya: string; iyt: string; asa: string; dim?: ('rya' | 'iyt' | 'asa')[]; spot?: ('rya' | 'iyt' | 'asa')[] };

const ROWS: Row[] = [
  { area: 'Beginner yacht training', rya: 'Yes', iyt: 'Yes', asa: 'Yes' },
  { area: 'Crew pathway', rya: 'Strong', iyt: 'Strong', asa: 'Less crew-specific', dim: ['asa'] },
  { area: 'Skipper pathway', rya: 'Strong', iyt: 'Strong', asa: 'Strong' },
  { area: 'Bareboat focus', rya: 'Yes', iyt: 'Yes', asa: 'Yes' },
  { area: 'Catamaran qualifications', rya: 'Available', iyt: 'Dedicated certificates', asa: 'ASA 114', spot: ['iyt'] },
  { area: 'Coastal navigation', rya: 'Yes', iyt: 'Yes', asa: 'ASA 105' },
  { area: 'Celestial navigation', rya: 'Yachtmaster Ocean', iyt: 'Yachtmaster Ocean', asa: 'ASA 107' },
  { area: 'Offshore pathway', rya: 'Yachtmaster', iyt: 'Yachtmaster', asa: 'ASA 108' },
  { area: 'Australian school availability', rya: 'Strong', iyt: 'Moderate', asa: 'Limited', spot: ['rya'], dim: ['asa'] },
  {
    area: 'ICC pathway',
    rya: 'Subject to eligibility',
    iyt: 'Subject to eligibility',
    asa: 'Not the primary structure',
    dim: ['asa'],
  },
  {
    area: 'Commercial progression',
    rya: 'Can support some pathways',
    iyt: 'Can support some pathways',
    asa: 'More limited in Australia',
    dim: ['asa'],
  },
];

function cell(row: Row, key: 'rya' | 'iyt' | 'asa') {
  const cls = row.spot?.includes(key) ? 'spot' : row.dim?.includes(key) ? 'dim' : undefined;
  return <span className={cls}>{row[key]}</span>;
}

export default function ComparePage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — yachts racing, spinnakers up" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / Qualifications / RYA vs IYT vs ASA
            </p>
            <h1>
              RYA vs IYT vs ASA <em>in Australia</em>
            </h1>
            <p className="sub">
              Three international schemes teach cruising yachts in Australia. They overlap more than
              they differ. The best qualification is the one that matches your goal, your intended
              vessel and destination, the schools actually available near you, and any charter or
              commercial requirements you will meet later.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kicker">Side by side</span>
          <h2 className="h2">What each scheme offers</h2>
          <div className="cmp">
            <div className="r">
              <span>Area</span>
              <span>RYA</span>
              <span>IYT</span>
              <span>American Sailing</span>
            </div>
            {ROWS.map((row) => (
              <div className="r" key={row.area}>
                <span>{row.area}</span>
                {cell(row, 'rya')}
                {cell(row, 'iyt')}
                {cell(row, 'asa')}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kicker">The same journey</span>
          <h2 className="h2">Three vocabularies for one pathway</h2>
          <div className="panel">
            <div className="cols">
              <div>
                <h3 className="h3">RYA</h3>
                <div className="track">
                  <div className="node dim">Start Yachting</div>
                  <div className="node">Competent Crew</div>
                  <div className="node">Day Skipper</div>
                  <div className="node">Coastal Skipper</div>
                  <div className="node lead">Yachtmaster Coastal · Offshore · Ocean</div>
                </div>
                <p className="copy" style={{ fontSize: 15 }}>
                  Yachtmaster is not the next five-day course: it is an independent examination
                  against a standard, after qualifying sea time.{' '}
                  <Link href="/rya/competent-crew/">Competent Crew →</Link>
                </p>
              </div>
              <div>
                <h3 className="h3">IYT</h3>
                <div className="track">
                  <div className="node dim">Try Sailing</div>
                  <div className="node">International Crew</div>
                  <div className="node">Flotilla Skipper</div>
                  <div className="node">Bareboat Skipper</div>
                  <div className="node lead">Yachtmaster Coastal · Offshore · Ocean</div>
                </div>
                <p className="copy" style={{ fontSize: 15 }}>
                  Bareboat Skipper is not a beginner course — IYT currently requires more than 200
                  nautical miles and 10 days at sea. Catamaran versions exist at every skipper level.
                </p>
              </div>
              <div>
                <h3 className="h3">American Sailing</h3>
                <div className="track">
                  <div className="node">ASA 101 Keelboat 1</div>
                  <div className="node">ASA 103 Coastal Cruising</div>
                  <div className="node">ASA 104 Bareboat Cruising</div>
                  <div className="node">ASA 106 Advanced Coastal</div>
                  <div className="node lead">ASA 108 Offshore Passagemaking</div>
                </div>
                <p className="copy" style={{ fontSize: 15 }}>
                  We distinguish &ldquo;ASA course exists&rdquo; from &ldquo;ASA course currently
                  available at an Australian school&rdquo; — availability is limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Working on the water</span>
            <h2 className="h2">None of these is a commercial licence</h2>
            <p className="copy">
              A recreational sailing qualification is not automatically permission to work
              commercially. Australia&rsquo;s domestic commercial certificates — Sailing Master
              Coastal and Sailing Master Offshore — are administered by AMSA and sit outside all
              three schemes. Recreational Yachtmaster training may form part of a route, but
              AMSA&rsquo;s sea-service, radio, first-aid and medical requirements remain separate.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/find-a-course/">
                Commercial sailing qualifications
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            {[
              {
                h: 'Australian Sailing vs RYA',
                p: 'Keelboat scheme versus cruising-yacht scheme',
                href: '/rya/competent-crew/',
              },
              {
                h: 'What is the ICC?',
                p: 'Not a universal world sailing licence — eligibility rules apply',
                href: '/find-a-course/',
              },
              {
                h: 'Qualifications for chartering',
                p: 'What charter companies and insurers actually ask for',
                href: '/find-a-course/',
              },
              {
                h: 'Qualifications for yacht ownership',
                p: 'Skills first, then systems, then own-boat tuition',
                href: '/pathways/complete-beginner/',
              },
            ].map((r) => (
              <Link className="row" href={r.href} key={r.h}>
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
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Which scheme do the schools near you teach?</h2>
            <p>
              Availability decides more than theory. RYA is strongest in Australia; IYT moderate; ASA
              limited to a handful of schools.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/sailing-schools/new-south-wales/sydney/">
              Browse schools
            </Link>
            <Link className="pill pill-ghost" href="/find-a-course/">
              Find a course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
