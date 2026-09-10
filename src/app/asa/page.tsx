import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import { coursesInScheme } from '@/lib/scheme-courses';

export const metadata: Metadata = {
  title: 'ASA Courses Australia | ASA 101, 103, 104 & Catamaran',
  description:
    'The full ASA list from ASA 101 to ASA 108 — and the far shorter list of which certifications an Australian school actually teaches today.',
  alternates: { canonical: '/asa/' },
};

/**
 * The full ASA catalogue. `availableInAustralia` records only what the editorial research
 * confirms is currently advertised here — the guide's core distinction between "the course
 * exists" and "an Australian school currently teaches it".
 */
const CERTIFICATIONS = [
  { code: 'ASA 101', name: 'Keelboat 1', note: 'Introductory keelboat sailing', available: true },
  { code: 'ASA 102', name: 'Keelboat 2', note: 'Building on ASA 101' },
  { code: 'ASA 103', name: 'Coastal Cruising', note: 'Auxiliary-powered cruising boats', available: true },
  { code: 'ASA 104', name: 'Bareboat Cruising', note: 'The charter-focused certificate' },
  { code: 'ASA 105', name: 'Coastal Navigation', note: 'Shorebased navigation' },
  { code: 'ASA 106', name: 'Advanced Coastal Cruising', note: 'Extended coastal passages' },
  { code: 'ASA 107', name: 'Celestial Navigation', note: 'Sights and sight reduction' },
  { code: 'ASA 108', name: 'Offshore Passagemaking', note: 'The offshore endpoint' },
  { code: 'ASA 110', name: 'Basic Small Boat Sailing', note: 'Dinghies and small craft' },
  { code: 'ASA 114', name: 'Cruising Catamaran', note: 'Multihull handling' },
  { code: 'ASA 116', name: 'Dinghy and Outboard Endorsement', note: 'Tender handling' },
  { code: 'ASA 117', name: 'Basic Celestial Endorsement', note: 'Endorsement' },
  { code: 'ASA 118', name: 'Docking Endorsement', note: 'Close-quarters handling', available: true },
  { code: 'ASA 119', name: 'Marine Weather Endorsement', note: 'Endorsement' },
  { code: 'ASA 120', name: 'Radar Endorsement', note: 'Endorsement' },
];

export default function AsaHubPage() {
  const available = CERTIFICATIONS.filter((c) => c.available);

  return (
    <>
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a keelboat sailing in open water" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'American Sailing' }]} />
            <h1>
              American Sailing Courses <em>in Australia</em>
            </h1>
            <p className="sub">
              American Sailing certifications are far less widespread in Australia than Australian
              Sailing or RYA courses. The full catalogue runs from ASA 101 to ASA 108 with a set of
              endorsements alongside — but the list of certifications that exist and the list you can
              actually sit at an Australian school are very different lengths.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare with RYA &amp; IYT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The distinction that matters</span>
              <h2 className="h2">Exists, versus available here</h2>
            </div>
          </div>
          <p className="copy">
            A scheme can publish a certificate without a single school in the country teaching it.
            Booking a flight to sit ASA 104 is a legitimate choice; discovering the gap after you have
            planned a pathway around it is not. Our research currently finds{' '}
            <b>
              {available.map((c) => c.code).join(', ')}
            </b>{' '}
            advertised in Australia, with further ASA training packages listed in school catalogues.
            Everything else in the table below exists as a certification but should be treated as
            unavailable locally until a school confirms otherwise.
          </p>
          <div className="scroll-x">
            <table className="table">
              <thead>
                <tr>
                  <th>Certification</th>
                  <th>Covers</th>
                  <th>Australian availability</th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((c) => (
                  <tr key={c.code}>
                    <td>
                      <b>{c.code}</b> {c.name}
                    </td>
                    <td>{c.note}</td>
                    <td>
                      {c.available ? (
                        <span className="tag tag-sky">Advertised here</span>
                      ) : (
                        <span style={{ color: 'var(--muted)' }}>Not currently found</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="copy" style={{ marginTop: 20 }}>
            Availability is checked against school course lists and carries the date it was checked.
            Teaching an ASA course we have not found? <Link href="/sailing-schools/">Tell us →</Link>
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Should you choose ASA?</span>
            <h2 className="h2">Availability decides more than syllabus</h2>
            <p className="copy">
              ASA teaches beginner yacht training, a skipper pathway and bareboat cruising to a
              standard comparable with the other two schemes, and ASA 114 is a genuine catamaran
              certificate. On paper it is competitive. In Australia the deciding factor is that you
              may have to travel a long way to sit anything beyond the entry certificates.
            </p>
            <p className="copy">
              ASA makes most sense for sailors who already hold ASA certificates, or who intend to
              charter in North America where the scheme is best recognised. For most Australian
              sailors, RYA has the school availability and IYT the multihull certificates.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/qualifications/rya-vs-iyt-vs-asa/">
                RYA vs IYT vs ASA
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/rya/">
              <div>
                <h3>RYA courses</h3>
                <p>Strongest Australian availability of the three schemes</p>
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
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Course guides</span>
              <h2 className="h2">Every American Sailing course, explained</h2>
            </div>
            <span className="tag tag-cream">
              {coursesInScheme('asa').length} guides
            </span>
          </div>
          <div className="rows">
            {coursesInScheme('asa').map((c) => (
              <Link className="row" href={`/${c.scheme}/${c.slug}/`} key={c.slug}>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.standfirst}</p>
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
            <h2>Not sure a scheme matters as much as you think?</h2>
            <p>
              For most beginners the boat you train on and the school you train with matter more than
              which certificate ends up in your hand.
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
