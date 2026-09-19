import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { itemList, webPage } from '@/lib/schema';
import CourseFinder from './CourseFinder';

export const metadata: Metadata = {
  title: 'Which Sailing Course Should I Take? | Course Finder',
  description:
    'Three questions — your experience, your boat, your goal — point you at a starting sailing course and the Australian schools that teach it. No account needed.',
  alternates: { canonical: '/find-a-course/' },
};

export default function FindCoursePage() {
  return (
    <>
      <JsonLd nodes={[
        webPage({
          name: 'Find the right sailing course',
          description: metadata.description as string,
          url: '/find-a-course/',
        }),
        itemList('Ways to start sailing', [
          { name: 'Complete beginner pathway', href: '/pathways/complete-beginner/' },
          { name: 'Charter yacht pathway', href: '/pathways/charter-a-yacht/' },
          { name: 'Club racing pathway', href: '/pathways/race-with-a-club/' },
          { name: 'Commercial sailing pathway', href: '/pathways/work-on-boats/' },
        ]),
      ]} />
      <section className="hero short">
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Find a course' }]} />
            <h1>
              Find the <em>Right</em> Sailing Course
            </h1>
            <p className="sub">
              Three questions. The answer updates as you go, points to course types — then to the
              schools that teach them near you. No account, no email capture.
            </p>
          </div>
        </div>
      </section>
      <CourseFinder />

      <section className="sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">How the recommendation works</span>
            <h2 className="h2">Start with the outcome, not a certificate name</h2>
            <p className="copy">
              The finder combines three things: the experience you already have, the kind of boat
              you want to sail and what you eventually want to do. It then suggests a sensible
              starting course and a later step toward that goal.
            </p>
            <p className="copy">
              It is a guide, not an eligibility check. Schools set their own joining requirements,
              and advanced qualifications can require logged sea time, earlier certificates or an
              examination. Confirm those details with the provider before booking.
            </p>
          </div>
          <div className="panel">
            <span className="kicker">Important distinction</span>
            <h2 className="h4">Recreational and commercial routes differ</h2>
            <p className="copy">
              RYA, IYT, American Sailing and Australian Sailing are training systems. Paid work on
              Australian domestic commercial vessels is regulated separately through AMSA.
            </p>
            <Link className="pill pill-navy" href="/learn/amsa-vs-recreational/">Compare the two systems</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="kicker">Common goals</span><h2 className="h2">Browse a complete sailing pathway</h2></div></div>
          <div className="cards">
            {[
              { title: 'Start from zero', text: 'Choose dinghy, keelboat or yacht training and become useful crew first.', href: '/pathways/complete-beginner/' },
              { title: 'Charter a yacht', text: 'Build the skippering, navigation and boat-handling record charter operators expect.', href: '/pathways/charter-a-yacht/' },
              { title: 'Join a racing crew', text: 'Learn the boat skills that help a new crew member contribute safely and reliably.', href: '/pathways/race-with-a-club/' },
              { title: 'Work on boats', text: 'Separate recreational qualifications from the Australian commercial pathway.', href: '/pathways/work-on-boats/' },
            ].map((item) => (
              <Link className="ccard" href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.text}</p><div className="foot"><span className="arrow"><i className="ph-duotone ph-arrow-right" /></span></div></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap"><div className="cta-band"><div><h2>Already know the course you want?</h2><p>Compare qualification systems, then browse verified provider records by state and training area.</p></div><div className="btns"><Link className="pill pill-orange" href="/qualifications/rya-vs-iyt-vs-asa/">Compare qualifications</Link><Link className="pill pill-ghost" href="/sailing-schools/">Browse schools</Link></div></div></div>
      </section>
    </>
  );
}
