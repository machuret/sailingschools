import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'Sailing schools by state',
  description:
    'Dedicated sailing schools, academies and yacht training businesses across every Australian state and territory — New South Wales, Queensland, Victoria, Western Australia, South Australia, Tasmania and the Northern Territory.',
  alternates: { canonical: '/sailing-schools' },
};

/** The state/region tree from the site architecture. Only Sydney has a page so far. */
const STATES = [
  {
    name: 'New South Wales',
    count: '14 schools',
    regions: ['Sydney', 'Sydney Harbour', 'Middle Harbour', 'Pittwater', 'Broken Bay', 'Botany Bay'],
    href: '/sailing-schools/new-south-wales/sydney',
  },
  {
    name: 'Queensland',
    count: '6 schools',
    regions: ['Brisbane', 'Moreton Bay', 'Sunshine Coast', 'Mooloolaba', 'Whitsundays', 'Airlie Beach', 'Hervey Bay'],
  },
  { name: 'Victoria', count: '4 schools', regions: ['Melbourne', 'Port Phillip'] },
  { name: 'Western Australia', count: '5 schools', regions: ['Perth', 'Fremantle', 'Busselton', 'Geographe Bay'] },
  { name: 'South Australia', count: '1 school', regions: ['Adelaide'] },
  { name: 'Tasmania', count: '1 school', regions: ['Hobart'] },
  { name: 'Northern Territory', count: '1 school', regions: ['Darwin'] },
  { name: 'Australian Capital Territory', count: 'Inland training', regions: ['Canberra'] },
];

export default function SchoolsIndexPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a training yacht on open Australian water" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / Schools
            </p>
            <h1>
              Sailing Schools <em>Across Australia</em>
            </h1>
            <p className="sub">
              Dedicated sailing schools, academies, yacht training businesses and specialist marine
              education providers — not a directory of yacht clubs. Each profile shows accreditation,
              training waters, training boats, course lists and prices with the date they were
              checked.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/sailing-schools/new-south-wales/sydney">
                Start with Sydney
              </Link>
              <Link className="pill pill-ghost" href="/find-a-course">
                Which course first?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">By state and territory</span>
              <h2 className="h2">Where do you want to train?</h2>
            </div>
          </div>
          <div className="rows">
            {STATES.map((s) => {
              const body = (
                <>
                  <div>
                    <h3>{s.name}</h3>
                    <p>
                      {s.regions.join(' · ')} — {s.count}
                    </p>
                  </div>
                  <span className="arrow">
                    <i className="ph-duotone ph-caret-right" />
                  </span>
                </>
              );
              return s.href ? (
                <Link className="row" href={s.href} key={s.name}>
                  {body}
                </Link>
              ) : (
                <div className="row" key={s.name}>
                  {body}
                </div>
              );
            })}
          </div>
          <p className="copy" style={{ marginTop: 28 }}>
            A sailing school can operate from a yacht club or marina and still be listed here, so
            long as the school is a separate training organisation. Ordinary yacht clubs and sailing
            clubs are not included simply because they run occasional courses.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">How we list schools</span>
            <h2 className="h2">Verified, dated and independent</h2>
            <p className="copy">
              Accreditation, course lists and prices are checked against the school rather than
              copied from a brochure, and every price carries the date it was checked. We are not
              affiliated with Australian Sailing, the RYA, IYT, American Sailing or AMSA, and schools
              cannot pay for placement.
            </p>
            <div className="rows">
              <Link className="row" href="/schools/harbourline-sailing-school">
                <div>
                  <h3>What a school profile contains</h3>
                  <p>See the sample profile every listing follows</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/qualifications/rya-vs-iyt-vs-asa">
                <div>
                  <h3>Accreditation explained</h3>
                  <p>Australian Sailing, RYA, IYT, American Sailing and AMSA</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/pathways/learn-to-sail-from-scratch">
                <div>
                  <h3>Choosing between two schools</h3>
                  <p>Outcome, boat, class size and relevance — then price</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="photo tall">
            <ImageSlot placeholder="Drop a map of Australia with a pin per training region" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Run a sailing school we have not listed?</h2>
            <p>
              Send us your accreditation, training waters, boats and current course list, and we will
              verify it before it appears.
            </p>
          </div>
          <div className="btns">
            <a className="pill pill-orange" href="mailto:hello@sailingschools.com.au">
              Update a school
            </a>
            <Link className="pill pill-ghost" href="/find-a-course">
              Find a course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
