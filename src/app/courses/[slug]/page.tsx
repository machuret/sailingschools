import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { course as courseSchema } from '@/lib/schema';
import { courseBySlug, courses, courseCategories, coursesInCategory } from '@/lib/courses';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const record = courseBySlug(slug);
  if (!record) return {};
  return {
    title: record.metaTitle,
    description: record.description,
    alternates: { canonical: `/courses/${record.slug}/` },
  };
}

export default async function CourseIntentPage({ params }: Params) {
  const { slug } = await params;
  const record = courseBySlug(slug);
  if (!record) notFound();

  const category = courseCategories.find((c) => c.key === record.category)!;
  const siblings = coursesInCategory(record.category).filter((c) => c.slug !== record.slug);
  // Everything the guide lists as covered, flattened for the Course schema's `teaches`.
  const teaches = record.blocks.flatMap((b) => (b.type === 'list' ? b.items : []));

  return (
    <>
      <JsonLd
        nodes={[
          courseSchema({
            name: record.title,
            description: record.description,
            // Intent courses are taught by many schools under several schemes; no single
            // awarding body owns them, so the site is named as the describing publisher.
            provider: 'SailingSchools.com.au',
            ...(teaches.length ? { teaches } : {}),
          }),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder={`Drop a photograph — ${record.title.toLowerCase()}`} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Courses', href: '/courses/' },
                { name: category.name },
                { name: record.title },
              ]}
            />
            <h1>{record.title}</h1>
            <p className="sub">{record.description}</p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/sailing-schools/">
                Browse schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kicker">{category.name}</span>
          <h2 className="h2">What this training covers</h2>
          {record.blocks.map((block, i) => {
            if (block.type === 'para') {
              return (
                <p className="copy" key={i}>
                  {block.text}
                </p>
              );
            }
            if (block.type === 'flow') {
              return (
                <div className="track" key={i} style={{ marginTop: 26, maxWidth: 420 }}>
                  {block.items.map((item, j) => (
                    <div
                      className={
                        j === 0 || j === block.items.length - 1 ? 'node lead' : 'node'
                      }
                      key={item}
                    >
                      {item.charAt(0) + item.slice(1).toLowerCase()}
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div className="chain" key={i} style={{ marginTop: 22 }}>
                {block.items.map((item) => (
                  <span className="tag tag-sky" key={item} style={{ padding: '9px 16px' }}>
                    {item}
                  </span>
                ))}
              </div>
            );
          })}
          <p className="copy" style={{ marginTop: 34 }}>
              Course names and content vary between schools, and this is a description of the
              training rather than one school&rsquo;s syllabus. Check what a particular course
            actually includes — and on which boat — before booking.
          </p>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">Related training</span>
                <h2 className="h2">{category.name}</h2>
              </div>
              <Link className="pill pill-sky" href="/courses/">
                All courses
              </Link>
            </div>
            <div className="rows">
              {siblings.map((c) => (
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
      )}

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Who teaches it</span>
              <h2 className="h2">Where this sits in the schemes</h2>
            </div>
          </div>
          <p className="copy">
            Training like this is taught both as a named certificate within a scheme and as
            standalone tuition by independent schools. If you want a certificate at the end, start
            from the scheme; if you only want the skill, an afternoon with a good instructor may
            serve you better.
          </p>
          <div className="cards" style={{ marginTop: 36 }}>
            {[
              { h: 'Australian Sailing', p: 'The domestic dinghy and keelboat scheme, taught nationwide.', href: '/australian-sailing/' },
              { h: 'RYA', p: 'Strongest Australian availability, with a deep cruising pathway.', href: '/rya/' },
              { h: 'IYT', p: 'Dedicated catamaran certificates at every skipper level.', href: '/iyt/' },
              { h: 'American Sailing', p: 'A full catalogue, but limited availability in Australia.', href: '/asa/' },
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

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Is this the right training for you right now?</h2>
            <p>
              Three questions — have you sailed before, what boat do you want to sail, and what is
              your goal — give you a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/pathways/complete-beginner/">
              Beginner pathway
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
