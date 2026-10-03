import Link from 'next/link';
import Image from 'next/image';
import type { CourseDetail } from '@/lib/course-details';
import styles from './CourseDetails.module.css';

/** Static, server-rendered guidance: readable without JavaScript or expanded accordions. */
export default function CourseDetails({ detail }: { detail: CourseDetail }) {
  return (
    <section className={`sec ${styles.section}`} aria-labelledby="course-detail-heading" data-course-detail>
      <div className="wrap">
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="Course guide sections">
            <span className="kicker">In this guide</span>
            <a href="#course-detail-heading">The course in context</a>
            <a href="#course-entry">Before you start</a>
            <a href="#course-skills">Skills you will develop</a>
            <a href="#course-format">Training and assessment</a>
            <a href="#course-preparation">Make the most of it</a>
            <a href="#course-questions">Questions to ask the school</a>
            <a href="#course-next">Related learning</a>
          </nav>
          <div className={styles.article}>
            <h2 id="course-detail-heading">The course in context</h2>
            <p>{detail.overview}</p>
            <h2 id="course-entry">Before you start</h2>
            <p>{detail.entry}</p>
            <h2 id="course-skills">Skills you will develop</h2>
            {detail.skills.map(([heading, text]) => (
              <div key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            ))}
            <h2 id="course-format">Training and assessment</h2>
            <p>{detail.format}</p>
            <aside className={styles.tip} id="course-preparation" aria-labelledby="course-preparation-heading">
              <div className={styles.tipHeading}>
                <Image src="/assets/saily.png" alt="Saily, the Sailing Schools mascot" width={108} height={108} className={styles.mascot} sizes="108px" />
                <div>
                  <span className="kicker">Saily&rsquo;s learning tip</span>
                  <h2 id="course-preparation-heading">Make the most of it</h2>
                </div>
              </div>
              <p>{detail.practice}</p>
              <Link className={styles.basicsLink} href="/learn-the-basics/">Refresh the basics with Saily <span aria-hidden="true">→</span></Link>
            </aside>
            <h2 id="course-questions">Questions to ask the school</h2>
            <ul>{detail.questions.map(question => <li key={question}>{question}</li>)}</ul>
            <h2 id="course-next">Related learning</h2>
            <ul className={styles.related}>
              {detail.related.map(([href, label]) => <li key={href}><Link href={href}>{label}<span aria-hidden="true"> →</span></Link></li>)}
            </ul>
            <footer className={styles.sources}>
              <h3>Official references and further reading</h3>
              <ul>{detail.sources.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
              <p>Guide updated <time dateTime="2026-10-03">3 October 2026</time>. Preparation tips and questions are our editorial guidance. For a named qualification, check the awarding body’s current requirements; for a skills workshop, confirm the provider’s actual syllabus and assessment.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
