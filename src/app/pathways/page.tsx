import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { itemList, webPage } from '@/lib/schema';
import { orderedPathways } from '@/lib/pathways';

export const metadata: Metadata = {
  title: 'Sailing Pathways | What Do I Need for What I Want to Do?',
  description:
    'Goal-based sailing pathways for Australia — chartering, owning a boat, racing, offshore passages, instructing and commercial work, each with the route and the honest timeframe.',
  alternates: { canonical: '/pathways/' },
};

/**
 * The beginner pathway predates the record-driven ones and keeps its bespoke page, so it is
 * listed here by hand rather than pulled from `pathways`.
 */
const BEGINNER = {
  href: '/pathways/complete-beginner/',
  title: 'I have never sailed',
  goal: 'Get on the water for the first time and find out whether this is for you.',
  realistic: 'One day to find out. One season to be useful.',
};

export default function PathwaysIndexPage() {
  const all = [
    { href: BEGINNER.href, name: BEGINNER.title },
    ...orderedPathways.map((p) => ({ href: `/pathways/${p.slug}/`, name: p.title })),
  ];

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Sailing pathways',
            description: metadata.description as string,
            url: '/pathways/',
          }),
          itemList('Sailing pathways', all),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — a yacht leaving a harbour at first light" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Pathways' }]} />
            <h1>
              Sailing <em>pathways</em>
            </h1>
            <p className="sub">
              Course listings answer &ldquo;what is this course&rdquo;. A pathway answers the
              question people actually have: I want to do this particular thing — what do I need,
              in what order, and how long will it really take?
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/courses/">
                Browse by course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Start here</span>
              <h2 className="h2">Pick the goal, not the course</h2>
            </div>
            <span className="tag tag-cream">{all.length} pathways</span>
          </div>
          <p className="copy">
            Every pathway states what it assumes you already have, roughly how long it takes if you
            are honest about it, and — the part brochures leave out — what finishing it will not get
            you. Where the answer is &ldquo;no course teaches this, go and get sea time&rdquo;, the
            page says so.
          </p>

          <div className="cards" style={{ marginTop: 36 }}>
            <div className="ccard">
              <h3>
                <Link href={BEGINNER.href}>{BEGINNER.title}</Link>
              </h3>
              <p>{BEGINNER.goal}</p>
              <div className="foot">
                <span className="tag tag-sky">{BEGINNER.realistic}</span>
              </div>
            </div>
            {orderedPathways.map((p) => (
              <div className="ccard" key={p.slug}>
                <h3>
                  <Link href={`/pathways/${p.slug}/`}>{p.title}</Link>
                </h3>
                <p>{p.goal}</p>
                <div className="foot">
                  <span className="tag tag-sky">{p.realistic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Three ways in</span>
            <h2 className="h2">How this site is organised</h2>
            <p className="copy">
              The same qualification appears in three places, deliberately. A pathway is the route
              to a goal. A course guide explains one thing you can book. A scheme hub lists what one
              training body awards. Most people arrive on one axis and leave on another.
            </p>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/courses/">
              <div>
                <h3>Course guides</h3>
                <p>What a course is, who it suits, and what it will not give you</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div>
                <h3>Qualification schemes</h3>
                <p>RYA, IYT, American Sailing and Australian Sailing compared</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/sailing-schools/">
              <div>
                <h3>Schools by location</h3>
                <p>Who actually teaches near you, state by state and city by city</p>
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
            <h2>None of these quite fit?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/faq/">
              Read the FAQ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
