import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PointsOfSail from '@/components/PointsOfSail';
import { faqPage, webPage } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Points of Sail Explained | Interactive Diagram',
  description:
    'The points of sail, as a diagram you can drive — close hauled, close reach, beam reach, broad reach and run, with the sail easing as the boat bears away.',
  alternates: { canonical: '/learn/points-of-sail/' },
};

const FAQS = [
  {
    question: 'What are the points of sail?',
    answer:
      'The points of sail are the boat’s angles relative to the wind: close hauled at about 45 degrees off the wind, close reach, beam reach with the wind across the beam, broad reach, and a run dead downwind. Inside about 45 degrees either side of the wind is the no-go zone, where a boat cannot sail.',
  },
  {
    question: 'What is the fastest point of sail?',
    answer:
      'For most boats, a beam reach — wind across the beam, sails about halfway out, the boat upright and tracking. High-performance boats with asymmetric spinnakers are often faster on a broad reach, because they generate their own apparent wind.',
  },
  {
    question: 'Why can’t a boat sail directly into the wind?',
    answer:
      'A sail generates drive by acting as a wing, which needs airflow across it at an angle. Pointed straight at the wind the sails simply flap, the boat loses steerage and stops — a state sailors call being in irons.',
  },
  {
    question: 'What is the no-go zone?',
    answer:
      'The arc of roughly 45 degrees either side of the wind direction in which a boat cannot generate drive. To reach a point inside it, you sail a zig-zag of close-hauled legs, tacking between them.',
  },
];

export default function PointsOfSailPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Points of sail',
            description: metadata.description as string,
            url: '/learn/points-of-sail/',
          }),
          faqPage(FAQS),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs
            dark
            items={[
              { name: 'Home', href: '/' },
              { name: 'Learn', href: '/learn/' },
              { name: 'Points of sail' },
            ]}
          />
          <div style={{ marginTop: 22, maxWidth: 760 }}>
            <span className="kicker">The first hour of any course</span>
            <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
              The points of sail
            </h1>
            <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(19px,2.1vw,25px)' }}>
              Every school draws this on a whiteboard in the first hour. Here it moves — so you can
              watch the sail ease as the boat bears away, which is the whole thing the diagram
              exists to show.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 12 }}>
        <div className="wrap">
          <PointsOfSail />
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 className="h3">The one rule underneath all of it</h2>
          <p className="copy">
            As the boat turns away from the wind, the sail goes out. As it turns towards the wind,
            the sail comes in. That is the entire trimming instruction, and it is why the diagram is
            worth understanding before your first lesson rather than during it.
          </p>
          <p className="copy">
            The refinement is that you ease the sail until it starts to luff — flutter along the
            leading edge — and then pull it in just enough to stop. That works on every point of
            sail, on every boat, and it is what an instructor means by &ldquo;ease to the
            luff&rdquo;.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            Why the no-go zone matters
          </h2>
          <p className="copy">
            A boat cannot sail within roughly 45 degrees either side of the wind. If the place you
            want to go is in there, you cannot steer at it — you sail a zig-zag of close-hauled legs
            and tack between them. That single fact explains most of what looks like inefficiency in
            sailing, and all of why a five-mile trip upwind takes three times as long as the same
            trip downwind.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            The point of sail that hurts people
          </h2>
          <p className="copy">
            A run feels calm, because the apparent wind has dropped by the whole of your boat speed.
            It is also the point of sail where the boom is furthest out and least controlled, and
            where a small steering error puts the wind on the wrong side of the mainsail and throws
            the boom across the boat. Rig a preventer, and keep the crew clear.
          </p>

          <div className="qa" style={{ marginTop: 48 }}>
            {FAQS.map((f) => (
              <div className="qa-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Read next</span>
              <h2 className="h2">Related</h2>
            </div>
          </div>
          <div className="rows">
            <Link className="row" href="/courses/sail-trim/">
              <div>
                <h3>Sail trim courses</h3>
                <p>Turning &ldquo;ease to the luff&rdquo; into something you can feel</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>I have never sailed</h3>
                <p>The three routes in, and which one suits you</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/rya/basic-skills/">
              <div>
                <h3>RYA Basic Skills</h3>
                <p>The level where you sail all the points of sail unaided</p>
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
            <h2>Ready to try it on the water?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/learn/">
              More guides
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
