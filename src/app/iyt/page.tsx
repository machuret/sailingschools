import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'IYT Courses Australia | Crew, Bareboat & Yachtmaster',
  description:
    'IYT sailing courses in Australia — the pathway from Try Sailing and International Crew through Flotilla Skipper and Bareboat Skipper to Yachtmaster Ocean, plus dedicated catamaran certificates and the ICC.',
  alternates: { canonical: '/iyt/' },
};

const PATHWAY = [
  'Try Sailing',
  'Introductory Sailing Skills',
  'Day Skipper / Crew Sail',
  'International Crew',
  'International Flotilla Skipper',
  'International Bareboat Skipper',
  'Yachtmaster Coastal · Offshore · Ocean',
];

const CATALOGUE = [
  {
    h: 'Dinghy',
    items: ['Bronze: Start Sailing', 'Silver: Safe Sailing', 'Gold: Independent Sailing', 'Platinum: Perfected Sailing'],
  },
  {
    h: 'Introductory yacht sailing',
    items: ['IYT Try Sailing', 'Introductory Sailing Skills', 'Day Skipper / Crew Sail', 'Introduction to Yachting'],
  },
  {
    h: 'Crew and skipper',
    items: ['International Crew', 'International Flotilla Skipper', 'International Bareboat Skipper'],
  },
  {
    h: 'Catamaran',
    items: ['International Flotilla Skipper Sail — Catamaran', 'International Bareboat Skipper Sail — Catamaran'],
  },
  {
    h: 'Advanced recreational',
    items: [
      'Yachtmaster Coastal Power or Sail',
      'Yachtmaster Coastal Sail — Catamaran',
      'Yachtmaster Offshore Power or Sail',
      'Yachtmaster Offshore Sail — Catamaran',
      'Yachtmaster Ocean',
    ],
  },
  {
    h: 'Navigation, weather and radio',
    items: ['Navigation Master', 'Weather Master', 'Marine Communications VHF/SRC', 'International Yacht Racing'],
  },
];

export default function IytHubPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a cruising catamaran at anchor" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'IYT' }]} />
            <h1>
              IYT Courses <em>in Australia</em>
            </h1>
            <p className="sub">
              International Yacht Training Worldwide has a broad recreational catalogue running from
              dinghy sailing and Try Sailing through to Yachtmaster Ocean. Its distinguishing feature
              in Australia is multihulls: IYT is the only one of the three international schemes with
              dedicated catamaran certificates at every skipper level.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare with RYA &amp; ASA
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
              <h2 className="h2">IYT sailing pathway</h2>
            </div>
          </div>
          <p className="copy">
            Not every student completes every course. Eligibility and prior-experience requirements
            matter more the higher you go — International Bareboat Skipper is not a beginner course,
            and IYT currently requires more than 200 nautical miles and 10 days at sea before it.
          </p>
          <div className="track" style={{ marginTop: 32, maxWidth: 620 }}>
            {PATHWAY.map((name, i) => (
              <div
                className={i === 0 ? 'node dim' : i === PATHWAY.length - 1 ? 'node lead' : 'node'}
                key={name}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Recreational catalogue</span>
              <h2 className="h2">What IYT certifies</h2>
            </div>
          </div>
          <div className="panel">
            <div className="cols">
              {CATALOGUE.map((group) => (
                <div key={group.h}>
                  <h3 className="h4">{group.h}</h3>
                  <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{ padding: '7px 0', borderTop: '1px solid var(--line)', fontSize: 15 }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">The ICC</span>
            <h2 className="h2">Not a world sailing licence</h2>
            <p className="copy">
              IYT is one of the routes to an International Certificate of Competence, and multiple ICC
              endorsements exist for sail, power, coastal and inland operating categories. The ICC is
              widely misunderstood: it is not a universal licence to sail anywhere, eligibility rules
              apply, and whether you need one depends entirely on where you intend to charter.
            </p>
            <p className="copy">
              Check what the charter company and the country actually require before you book a course
              to obtain one.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare the three schemes
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/sailing-schools/">
              <div>
                <h3>Schools teaching IYT courses</h3>
                <p>Moderate Australian availability — fewer centres than RYA, more than ASA</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/rya/">
              <div>
                <h3>RYA courses</h3>
                <p>The scheme with the strongest Australian school availability</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/asa/">
              <div>
                <h3>American Sailing courses</h3>
                <p>The full ASA list, and the shorter list available in Australia</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/australian-sailing/">
              <div>
                <h3>Australian Sailing courses</h3>
                <p>Tackers, dinghy and keelboat pathways taught nationwide</p>
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
            <h2>Heading for a catamaran?</h2>
            <p>
              IYT&rsquo;s dedicated multihull certificates at Flotilla Skipper, Bareboat Skipper and
              Yachtmaster level are the clearest catamaran pathway of the three schemes.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/sailing-schools/">
              Browse schools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
