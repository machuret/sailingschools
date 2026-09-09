import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { itemList } from '@/lib/schema';
import { courses, courseCategories, coursesInCategory } from '@/lib/courses';

export const metadata: Metadata = {
  title: 'Sailing Courses Australia | Compare by What You Learn',
  description:
    'Every kind of sailing course taught in Australia, grouped by what you want to learn — sailing, boat handling, cruising, charter, navigation and safety.',
  alternates: { canonical: '/courses/' },
};

export default function CoursesIndexPage() {
  return (
    <>
      <JsonLd
        nodes={[
          itemList(
            'Sailing courses in Australia',
            courses.map((c) => ({ name: c.title, href: `/courses/${c.slug}/` })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder="Drop a photograph — instruction under way on a training yacht" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Courses' }]} />
            <h1>
              Sailing Courses <em>in Australia</em>
            </h1>
            <p className="sub">
              There is far more to sailing education than a single &ldquo;learn to sail&rdquo;
              course. These pages are organised by what you want to learn, not by which body awards
              the certificate — because most people know the skill they are missing long before they
              know which scheme teaches it.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare qualifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Two ways to look</span>
              <h2 className="lead">
                By skill, or by scheme — most people arrive knowing one and not the other.
              </h2>
            </div>
          </div>
          <div className="cards" style={{ marginTop: 36 }}>
            {[
              { h: 'Australian Sailing', p: 'Tackers, OutThere, dinghy and keelboat pathways.', href: '/australian-sailing/' },
              { h: 'RYA', p: 'Competent Crew through Day Skipper to Yachtmaster.', href: '/rya/' },
              { h: 'IYT', p: 'Crew, Flotilla and Bareboat Skipper, plus catamarans.', href: '/iyt/' },
              { h: 'American Sailing', p: 'ASA 101 to 108, with limited Australian availability.', href: '/asa/' },
            ].map((s) => (
              <Link className="ccard" href={s.href} key={s.h}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="foot">
                  <span className="arrow">
                    <i className="ph-duotone ph-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {courseCategories.map((category) => {
        const list = coursesInCategory(category.key);
        if (list.length === 0) return null;
        return (
          <section className="sec" key={category.key}>
            <div className="wrap">
              <div className="sec-head">
                <div>
                  <span className="kicker">{category.blurb}</span>
                  <h2 className="h2">{category.name}</h2>
                </div>
                <span className="tag tag-cream">
                  {list.length} {list.length === 1 ? 'guide' : 'guides'}
                </span>
              </div>
              <div className="rows">
                {list.map((c) => (
                  <Link className="row" href={`/courses/${c.slug}/`} key={c.slug}>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                    </div>
                    <span className="arrow">
                      <i className="ph-duotone ph-caret-right" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Not sure which of these you need?</h2>
            <p>
              Answer three questions and we will point you at a starting course, what comes after it,
              and the schools teaching it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/sailing-schools/">
              Browse schools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
