import type { Metadata } from 'next';
import Link from 'next/link';
import CourseFinder from './CourseFinder';

export const metadata: Metadata = {
  title: 'Find the right sailing course',
  description:
    'Three questions — have you sailed before, what boat do you want to sail, and what is your goal — point you at a starting sailing course and the Australian schools that teach it.',
  alternates: { canonical: '/find-a-course' },
};

export default function FindCoursePage() {
  return (
    <>
      <section className="hero short">
        <div className="wrap hero-in">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / Find a course
            </p>
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
    </>
  );
}
