import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { itemList, webPage } from '@/lib/schema';
import { guidesInSection } from '@/lib/guides';
import { licences } from '@/lib/licences';

export const metadata: Metadata = {
  title: 'Sailing Guides | Licences, Costs & Commercial Certificates',
  description:
    'Practical guides for Australian sailors — boat licence rules state by state, what courses cost, how long learning takes, and how AMSA commercial certification works.',
  alternates: { canonical: '/learn/' },
};

export default function LearnHubPage() {
  const practical = guidesInSection('practical');
  const amsa = guidesInSection('amsa');

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Sailing guides',
            description: metadata.description as string,
            url: '/learn/',
          }),
          itemList('Sailing guides', [
            { name: 'Boat licences by state', href: '/learn/boat-licence/' },
            ...[...practical, ...amsa].map((g) => ({
              name: g.title,
              href: `/learn/${g.slug}/`,
            })),
          ]),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder="Drop a photograph — a chart table, dividers and a paper chart" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Learn' }]} />
            <h1>
              Sailing <em>guides</em>
            </h1>
            <p className="sub">
              The questions that sit either side of choosing a course: what the law requires, what
              it costs, how long it takes, and what changes if you want to be paid for it.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/learn/boat-licence/">
                Boat licence rules
              </Link>
              <Link className="pill pill-ghost" href="/pathways/">
                Browse by goal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Before you book</span>
              <h2 className="h2">Planning a course</h2>
            </div>
          </div>
          <div className="rows">
            {practical.map((g) => (
              <Link className="row" href={`/learn/${g.slug}/`} key={g.slug}>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.standfirst}</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The legal requirement</span>
              <h2 className="h2">Boat licences, state by state</h2>
            </div>
            <Link className="pill pill-sky" href="/learn/boat-licence/">
              Compare all {licences.length}
            </Link>
          </div>
          <p className="copy">
            A recreational boat licence has nothing to do with a sailing certificate. Whether you
            need one depends on the engine, the state and, in New South Wales, the speed. Most
            cruising yachts carry an auxiliary well above the power thresholds used in Queensland,
            Western Australia, Victoria and South Australia — so a sailor who needs no licence under
            sail may still need one to motor out of the marina.
          </p>
          <div className="chain" style={{ marginTop: 24 }}>
            {licences.map((l) => (
              <Link className="tag tag-sky" href={`/learn/${l.slug}/`} key={l.slug}>
                {l.abbr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Working on the water</span>
              <h2 className="h2">Commercial certification</h2>
            </div>
            <Link className="pill pill-sky" href="/pathways/work-on-boats/">
              The pathway
            </Link>
          </div>
          <p className="copy">
            Recreational schemes and Australian commercial certification are separate systems — with
            exactly one connection between them, which runs the opposite way to most people&rsquo;s
            assumption. These pages were checked against AMSA in September 2026.
          </p>
          <div className="rows">
            {amsa.map((g) => (
              <Link className="row" href={`/learn/${g.slug}/`} key={g.slug}>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.standfirst}</p>
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
            <h2>Ready to pick a course?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/courses/">
              All courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
