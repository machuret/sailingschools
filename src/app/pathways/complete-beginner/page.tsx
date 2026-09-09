import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'Learn to Sail Australia | Beginner Guide from Zero Experience',
  description:
    'There is no rule requiring a complete beginner to start in a dinghy. Three legitimate routes into sailing in Australia — dinghy, keelboat or straight onto a cruising yacht — and how to pick the one that matches your goal.',
  alternates: { canonical: '/pathways/complete-beginner/' },
};

export default function PathwayPage() {
  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — first-timers on a keelboat, instructor at the tiller" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / Pathways / Complete beginner
            </p>
            <h1>
              How to Learn to Sail in Australia <em>From Zero</em>
            </h1>
            <p className="sub">
              There is no rule requiring a complete beginner to start in a dinghy. There are several
              legitimate starting routes — and the right one depends on the boat you eventually want
              to sail, not on tradition.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find my starting course
              </Link>
              <Link className="pill pill-ghost" href="/sailing-schools/new-south-wales/sydney/">
                Schools near me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kicker">Three ways in</span>
          <h2 className="lead">
            Pick the route that matches the boat you want to sail — you do not need to complete Route
            1 before Route 3.
          </h2>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Start in a dinghy</h3>
              <p>
                Best for learning wind awareness and sail balance, and for becoming independent
                quickly. Suits youth sailors, future racers and anyone who enjoys a responsive boat
                and does not mind getting wet.
              </p>
              <ul>
                <li>
                  <Link href="/find-a-course/">Australian Sailing Start Sailing 1</Link> · ~12 hours
                </li>
                <li>
                  <Link href="/find-a-course/">RYA Dinghy Level 1</Link> · 2 days
                </li>
                <li>
                  <Link href="/find-a-course/">IYT Bronze: Start Sailing</Link>
                </li>
              </ul>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Start in a keelboat</h3>
              <p>
                Best for adults, people uncomfortable with capsizing, local yacht racing and learning
                crew and helm roles. A stable training boat and a natural bridge toward larger
                yachts.
              </p>
              <ul>
                <li>
                  <Link href="/find-a-course/">Start Crewing + Start Helming</Link> · ~20 hours
                </li>
                <li>
                  <Link href="/find-a-course/">Discover Sailing Experience</Link> · taster
                </li>
                <li>
                  <Link href="/qualifications/rya-vs-iyt-vs-asa/">ASA 101: Keelboat 1</Link>
                </li>
              </ul>
            </div>
            <div className="step">
              <div className="num o">3</div>
              <h3>Start on a cruising yacht</h3>
              <p>
                Best for future yacht owners, couples planning to cruise, charter holidays,
                liveaboard ambitions and coastal or offshore goals. Go straight to the boat you mean
                to sail.
              </p>
              <ul>
                <li>
                  <Link href="/rya/competent-crew/">RYA Competent Crew</Link> · 5 days
                </li>
                <li>
                  <Link href="/find-a-course/">RYA Start Yachting</Link> · 2 days
                </li>
                <li>
                  <Link href="/find-a-course/">IYT Introductory Sailing Skills</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The map</span>
              <h2 className="h2">One road out</h2>
            </div>
          </div>
          <div className="panel">
            <div className="cols">
              <div>
                <h3 className="h4">Small boats</h3>
                <div className="track">
                  <div className="node">Dinghy or keelboat course</div>
                  <div className="node dim">
                    Start Sailing 1–2 · Better Sailing · Start Crewing · Helming
                  </div>
                  <div className="node">Independent sailor / useful crew</div>
                </div>
              </div>
              <div>
                <h3 className="h4">Cruising yachts</h3>
                <div className="track">
                  <div className="node">Crew course</div>
                  <div className="node dim">
                    Competent Crew · International Crew · ASA 101/103
                  </div>
                  <div className="node">Useful yacht crew</div>
                </div>
              </div>
              <div>
                <h3 className="h4">Then, whichever route</h3>
                <div className="track">
                  <div className="node lead">Skipper training</div>
                  <div className="node">Build real coastal experience</div>
                  <div className="node">Coastal &amp; offshore skills</div>
                  <div className="node dim">
                    Navigation · weather · radio · first aid · sea survival
                  </div>
                  <div className="node lead">Yachtmaster or AMSA commercial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="photo">
            <ImageSlot placeholder="Drop a photograph — crew on the rail, coastal passage" />
          </div>
          <div>
            <span className="kicker">Then what?</span>
            <h2 className="h2">What comes after your first course</h2>
            <div className="rows">
              <Link className="row" href="/rya/competent-crew/">
                <div>
                  <h3>Skipper training</h3>
                  <p>
                    Start Skippering on a keelboat, or Day Skipper Theory and Practical on a yacht —
                    from handling sails to taking responsibility for the boat and crew.
                  </p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/find-a-course/">
                <div>
                  <h3>Navigation theory</h3>
                  <p>
                    Essential Navigation &amp; Seamanship, then Day Skipper Theory: charts, buoyage,
                    tides, weather, collision regulations and passage planning.
                  </p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/find-a-course/">
                <div>
                  <h3>Safety and systems</h3>
                  <p>
                    Marine radio, marine first aid, Safety &amp; Sea Survival and a diesel course —
                    the short courses that make a sailor self-reliant.
                  </p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">More pathways</span>
              <h2 className="h2">Goal-based routes</h2>
            </div>
          </div>
          <div className="cards">
            {[
              {
                h: 'Bareboat charter',
                p: 'Eight steps from basic sailing to checking whether the charter company wants an ICC.',
                tag: '8 steps',
                href: '/find-a-course/',
              },
              {
                h: 'Yacht owner',
                p: 'Sail, skipper, navigate, understand systems, safety — then buy the yacht and book own-boat tuition.',
                tag: '6 stages',
                href: '/find-a-course/',
              },
              {
                h: 'Yachtmaster',
                p: 'RYA and IYT routes compared — and why you should choose it when your experience is ready, not because the title sounds good.',
                tag: 'RYA · IYT',
                href: '/qualifications/rya-vs-iyt-vs-asa/',
              },
              {
                h: 'Kids & teens',
                p: 'Tackers for 7–12s and OutThere Sailing for teenagers who feel too old for Tackers but do not want an adult qualification yet.',
                tag: 'Australian Sailing',
                href: '/find-a-course/',
              },
            ].map((c) => (
              <Link className="ccard" href={c.href} key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <div className="foot">
                  <span className="tag tag-cream">{c.tag}</span>
                  <span className="arrow">
                    <i className="ph-duotone ph-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Schools that teach these routes</h2>
            <p>
              Sydney has the largest choice of all three routes. Other states are listed on the
              schools directory.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/sailing-schools/new-south-wales/sydney/">
              Sailing schools in Sydney
            </Link>
            <Link className="pill pill-ghost" href="/find-a-course/">
              Answer three questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
