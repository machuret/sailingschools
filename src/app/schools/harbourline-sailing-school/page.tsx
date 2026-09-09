import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: 'Harbourline Sailing School (sample profile)',
  description:
    'A sample school profile showing the template every SailingSchools.com.au listing follows: accreditation, training waters, training boats, course list, published prices and the date they were checked.',
  alternates: { canonical: '/schools/harbourline-sailing-school' },
};

const PRICES = [
  { course: 'Competent Crew', duration: '5 days', includes: 'Liveaboard, meals, certificate', excludes: 'Travel' },
  { course: 'Day Skipper Practical', duration: '5 days', includes: 'Liveaboard, meals, certificate', excludes: 'Travel' },
  { course: 'Day Skipper Theory', duration: '40 hours', includes: 'Course pack, exam', excludes: '—' },
  { course: 'Marine Radio SRC', duration: '1 day', includes: 'Tuition', excludes: 'Exam fee' },
  { course: 'Own-boat tuition', duration: 'Per day', includes: 'Instructor', excludes: 'Fuel, marina' },
];

export default function SchoolPage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <p className="crumb dark">
            <Link href="/">Home</Link> / <Link href="/sailing-schools">Schools</Link> / NSW /{' '}
            <Link href="/sailing-schools/new-south-wales/sydney">Sydney</Link> / Harbourline Sailing
            School
          </p>
          <div
            className="split top"
            style={{ marginTop: 20, gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)' }}
          >
            <div>
              <div className="photo" style={{ aspectRatio: '1 / 1' }}>
                <span className="badge">Sample profile</span>
                <ImageSlot placeholder="Drop a photograph — the school's training yacht at its berth" />
              </div>
              <div
                className="cards two"
                style={{ gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}
              >
                <div className="photo">
                  <ImageSlot placeholder="Photo — on deck" />
                </div>
                <div className="photo">
                  <ImageSlot placeholder="Photo — classroom" />
                </div>
              </div>
            </div>
            <div className="panel" style={{ marginTop: 0, padding: '48px 44px' }}>
              <span className="kicker">RYA Training Centre · Rushcutters Bay, Sydney</span>
              <h1 className="h2" style={{ fontSize: 'clamp(34px,3.6vw,50px)' }}>
                Harbourline Sailing School
              </h1>
              <div className="chain" style={{ marginTop: 18 }}>
                <span className="tag tag-sky">RYA</span>
                <span className="tag tag-cream">Liveaboard</span>
                <span className="tag tag-cream">Catamaran</span>
                <span className="tag tag-cream">Own-boat tuition</span>
                <span className="tag tag-cream">Online theory</span>
              </div>
              <p className="copy">
                A sample profile showing the template every school page follows — Harbourline is
                fictional. An RYA centre working out of Rushcutters Bay: five-day liveaboard courses
                on a 40-foot monohull and a 42-foot catamaran, a strong Day Skipper program, and
                own-boat tuition for new owners on the Harbour. The kind of school that suits adults
                heading toward charter or ownership rather than club racing.
              </p>
              <dl
                className="facts"
                style={{ marginTop: 32, gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}
              >
                <div className="fact">
                  <dt>Training waters</dt>
                  <dd>Sydney Harbour · coastal</dd>
                </div>
                <div className="fact">
                  <dt>Main training type</dt>
                  <dd>Cruising yacht</dd>
                </div>
                <div className="fact">
                  <dt>Max class size</dt>
                  <dd>5 students</dd>
                </div>
                <div className="fact">
                  <dt>Last verified</dt>
                  <dd>September 2026</dd>
                </div>
              </dl>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}>
                <span className="pill pill-orange">Visit website</span>
                <span className="pill pill-outline">Save to compare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">What can you learn here?</span>
              <h2 className="h2">Courses, grouped by stage</h2>
            </div>
            <a className="pill pill-sky" href="#prices">
              See prices
            </a>
          </div>
          <div className="cards">
            <div className="ccard">
              <div className="photo">
                <span className="badge">Beginner</span>
                <ImageSlot placeholder="Photo" />
              </div>
              <h3>Start Yachting &amp; Competent Crew</h3>
              <p>Two-day introduction, or the full five-day liveaboard crew course.</p>
              <div className="foot">
                <Link className="pill pill-orange sm" href="/courses/rya-competent-crew">
                  Competent Crew
                </Link>
              </div>
            </div>
            <div className="ccard">
              <div className="photo">
                <span className="badge">Skipper</span>
                <ImageSlot placeholder="Photo" />
              </div>
              <h3>Day Skipper Theory &amp; Practical</h3>
              <p>
                Classroom or online theory, then five days liveaboard taking charge of the yacht.
              </p>
              <div className="foot">
                <Link className="pill pill-orange sm" href="/find-a-course">
                  Day Skipper
                </Link>
              </div>
            </div>
            <div className="ccard">
              <div className="photo">
                <span className="badge">Advanced</span>
                <ImageSlot placeholder="Photo" />
              </div>
              <h3>Coastal Skipper &amp; Yachtmaster prep</h3>
              <p>
                Coastal/Yachtmaster Offshore theory, Coastal Skipper practical, exam preparation on
                application.
              </p>
              <div className="foot">
                <Link className="pill pill-orange sm" href="/qualifications/rya-vs-iyt-vs-asa">
                  Coastal Skipper
                </Link>
              </div>
            </div>
            <div className="ccard">
              <div className="photo">
                <span className="badge">Specialist</span>
                <ImageSlot placeholder="Photo" />
              </div>
              <h3>Radio, Diesel, Sea Survival</h3>
              <p>
                One-day SRC and Diesel Engine courses, two-day Safety &amp; Sea Survival, own-boat
                tuition by the day.
              </p>
              <div className="foot">
                <Link className="pill pill-orange sm" href="/find-a-course">
                  Specialist courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="panel feat" style={{ gridTemplateColumns: 'repeat(3,minmax(0,1fr))' }}>
            <div style={{ textAlign: 'left' }}>
              <i className="ph-duotone ph-sailboat" style={{ margin: '0 0 20px' }} />
              <h3 style={{ fontSize: 26 }}>Training boats</h3>
              <p>
                A 40-foot cruising monohull with six berths for the liveaboard courses, and a 42-foot
                cruising catamaran for multihull conversion and charter preparation. Vessels are
                described only where verified.
              </p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <i className="ph-duotone ph-map-pin" style={{ margin: '0 0 20px' }} />
              <h3 style={{ fontSize: 26 }}>Training location</h3>
              <p>
                Rushcutters Bay is ten minutes from the busiest water in the country. Ferry wakes and
                a working harbour teach collision regulations and pilotage fast; the Heads give
                coastal miles when the forecast allows.
              </p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <i className="ph-duotone ph-users-three" style={{ margin: '0 0 20px' }} />
              <h3 style={{ fontSize: 26 }}>Who it may suit</h3>
              <p>
                Adults heading toward charter or ownership who want liveaboard RYA training on the
                Harbour, and couples training together. Less suited to anyone whose aim is dinghy or
                keelboat racing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="prices">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Published prices</span>
              <h2 className="h2">Current course list</h2>
            </div>
            <span className="tag tag-cream">Prices checked September 2026</span>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Includes</th>
                <th>Excludes</th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((p) => (
                <tr key={p.course}>
                  <td>
                    <b>{p.course}</b>
                  </td>
                  <td>{p.duration}</td>
                  <td>$—</td>
                  <td>{p.includes}</td>
                  <td>{p.excludes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="copy" style={{ marginTop: 20 }}>
            Things to check before booking: current accreditation · exact vessel · instructor ratio ·
            prerequisites · accommodation · meals · exam fees · cancellation policy. Something out of
            date? <Link href="/sailing-schools">Update this school →</Link>
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Compare Harbourline with other Sydney schools</h2>
            <p>
              Eight dedicated schools operate around Sydney. Start with the outcome, then the boat,
              then class size — not the price.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/sailing-schools/new-south-wales/sydney">
              All Sydney schools
            </Link>
            <Link className="pill pill-ghost" href="/find-a-course">
              Find a course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
