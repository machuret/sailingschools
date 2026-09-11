import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import SchoolCard from '@/components/SchoolCard';
import JsonLd from '@/components/JsonLd';
import { itemList, webPage } from '@/lib/schema';
import { cityBySlug, cityBySlugOnly } from '@/lib/cities';
import { schoolsInState } from '@/lib/schools';
import {
  cityCourses,
  cityCourseFor,
  cityCourseTopicBySlug,
  cityCoursesIn,
} from '@/lib/city-courses';

type Params = { params: Promise<{ state: string; city: string; topic: string }> };

export function generateStaticParams() {
  return cityCourses.flatMap((c) => {
    const city = cityBySlugOnly(c.city);
    return city ? [{ state: city.state, city: c.city, topic: c.topic }] : [];
  });
}

const load = (state: string, city: string, topic: string) => {
  const cityRecord = cityBySlug(state, city);
  const topicRecord = cityCourseTopicBySlug(topic);
  const record = cityCourseFor(city, topic);
  if (!cityRecord || !topicRecord || !record) return null;
  return { cityRecord, topicRecord, record };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state, city, topic } = await params;
  const found = load(state, city, topic);
  if (!found) return {};
  return {
    title: found.record.metaTitle,
    description: found.record.description,
    alternates: { canonical: `/sailing-schools/${state}/${city}/${topic}/` },
  };
}

export default async function CityCoursePage({ params }: Params) {
  const { state, city, topic } = await params;
  const found = load(state, city, topic);
  if (!found) notFound();
  const { cityRecord, topicRecord, record } = found;

  const name = cityRecord.name.replace(/^the /, 'the ');
  const schools = schoolsInState(cityRecord.state);
  const verified = schools.filter((s) => s.website || s.region);
  const others = cityCoursesIn(cityRecord.slug).filter((c) => c.topic !== topic);

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: `${topicRecord.label} in ${name}`,
            description: record.description,
            url: `/sailing-schools/${state}/${city}/${topic}/`,
          }),
          itemList(
            `Sailing schools listed in ${cityRecord.stateName}`,
            schools.map((s) => ({ name: s.name, href: s.profile })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot
            tone="deep"
            placeholder={`Drop a photograph — ${topicRecord.label.toLowerCase()} at ${name}`}
          />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Schools', href: '/sailing-schools/' },
                { name: cityRecord.stateName, href: `/sailing-schools/${cityRecord.state}/` },
                { name: cityRecord.name.replace(/^the /, ''), href: `/sailing-schools/${state}/${city}/` },
                { name: topicRecord.label },
              ]}
            />
            <h1>
              {topicRecord.label} <em>in {name}</em>
            </h1>
            <p className="sub">{record.standfirst}</p>
            <div className="cta">
              <Link className="pill pill-orange" href={`/sailing-schools/${cityRecord.state}/`}>
                Schools in {cityRecord.stateName}
              </Link>
              <Link className="pill pill-ghost" href={topicRecord.courseHref}>
                What the course covers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          {record.angle.map((block, i) => {
            if (block.type === 'sub') {
              return (
                <h2 className="h3" key={i} style={{ marginTop: i === 0 ? 0 : 44 }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'para') {
              return (
                <p className="copy" key={i}>
                  {block.text}
                </p>
              );
            }
            if (block.type !== 'list') return null;
            return (
              <ul className="bullets" key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          })}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The water</span>
              <h2 className="h2">What {name} teaches</h2>
            </div>
            <Link className="pill pill-sky" href={`/sailing-schools/${state}/${city}/`}>
              All {cityRecord.name.replace(/^the /, '')} training
            </Link>
          </div>
          <div className="cols">
            {cityRecord.waters.slice(0, 3).map((w) => (
              <p className="copy" key={w} style={{ marginTop: 0 }}>
                {w}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Where to look</span>
              <h2 className="h2">Schools listed in {cityRecord.stateName}</h2>
            </div>
            <span className="tag tag-cream">{schools.length} listed</span>
          </div>
          {/* Deliberately state-wide, and deliberately not a claim. Which schools teach this
              particular course is not yet verified, so the page lists who is in the state and
              tells the reader to ask rather than implying an answer it does not hold. */}
          <p className="copy">
            These are the dedicated sailing schools verified in {cityRecord.stateName}. We do not
            yet hold verified course lists for every one of them, so this is not a list of schools
            teaching {topicRecord.label.toLowerCase()} — it is where to start asking. If you run one
            of these schools and want your course list on file, tell us.
          </p>
          <div className="cards" style={{ marginTop: 30 }}>
            {verified.slice(0, 6).map((s) => (
              <SchoolCard school={s} key={s.name} />
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
            <Link className="row" href={topicRecord.courseHref}>
              <div>
                <h3>{topicRecord.label}: the course guide</h3>
                <p>{topicRecord.blurb}</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            {topicRecord.pathwayHref && (
              <Link className="row" href={topicRecord.pathwayHref}>
                <div>
                  <h3>The pathway</h3>
                  <p>Where this sits in the route to what you actually want to do</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            )}
            {others.map((o) => {
              const t = cityCourseTopicBySlug(o.topic)!;
              return (
                <Link
                  className="row"
                  href={`/sailing-schools/${state}/${city}/${o.topic}/`}
                  key={o.topic}
                >
                  <div>
                    <h3>
                      {t.label} in {name}
                    </h3>
                    <p>{o.standfirst}</p>
                  </div>
                  <span className="arrow">
                    <i className="ph-duotone ph-caret-right" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Not sure this is the right course?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/pathways/">
              Browse by goal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
