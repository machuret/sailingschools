import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import SchoolCard from '@/components/SchoolCard';
import JsonLd from '@/components/JsonLd';
import HelpTip from '@/components/HelpTip';
import { faqPage, itemList, place, webPage } from '@/lib/schema';
import { cities, cityBySlug, citiesInState } from '@/lib/cities';
import { cityCoursesIn, cityCourseTopicBySlug } from '@/lib/city-courses';
import { schoolsInCity } from '@/lib/schools';
import { stateByKey } from '@/lib/states';

type Params = { params: Promise<{ state: string; city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ state: c.state, city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state, city } = await params;
  const record = cityBySlug(state, city);
  if (!record) return {};
  return {
    title: record.title,
    description: record.description,
    alternates: { canonical: `/sailing-schools/${record.state}/${record.slug}/` },
  };
}

export default async function CityPage({ params }: Params) {
  const { state, city } = await params;
  const record = cityBySlug(state, city);
  if (!record) notFound();

  const stateRecord = stateByKey(record.state)!;
  const list = schoolsInCity(record.state, record.slug);
  const verified = list.filter((s) => s.freshness !== 'unverified');
  const unverified = list.filter((s) => s.freshness === 'unverified');
  const nearby = citiesInState(record.state).filter((c) => c.slug !== record.slug);
  const localTopics = cityCoursesIn(record.slug);
  const geoFaqs = [
    {
      question: `Where do sailing lessons run around ${record.name}?`,
      answer: `${record.regions.slice(0, 3).map((region) => region.name).join(', ')} are the main training areas described in this guide. Confirm the exact departure point with the school because offices and training boats may be in different places.`,
    },
    {
      question: `What sailing courses are available near ${record.name}?`,
      answer: `The local market includes ${record.taught.slice(0, 5).join(', ')}. Availability changes by provider and season, so check the current course list directly.`,
    },
    {
      question: `How should I compare sailing schools near ${record.name}?`,
      answer: 'Compare the intended outcome, current recognition where relevant, training boat, student-to-instructor ratio, weather policy and how much practical helm time each student receives.',
    },
  ];

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: `Sailing schools in ${record.name}`,
            description: record.description,
            url: `/sailing-schools/${record.state}/${record.slug}/`,
          }),
          place({ name: record.name, description: record.description, state: stateRecord.name, url: `/sailing-schools/${record.state}/${record.slug}/` }),
          itemList(
            `Sailing schools near ${record.name}`,
            verified.map((s) => ({ name: s.name, href: s.profile })),
          ),
          faqPage(geoFaqs),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder={`Drop a photograph — sailing training water at ${record.name}`} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Schools', href: '/sailing-schools/' },
                { name: stateRecord.name, href: `/sailing-schools/${record.state}/` },
                { name: record.name },
              ]}
            />
            <h1>
              Sailing Schools <em>{record.name}</em>
            </h1>
            <p className="sub">{record.intro}</p>
            <div className="cta">
              <a className="pill pill-orange" href="#schools">
                See the schools
              </a>
              <Link className="pill pill-ghost" href="/find-a-course/">
                Which course first?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec geo-orientation">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Local orientation</span>
              <h2 className="h2">Plan sailing training around {record.name}</h2>
            </div>
          </div>
          <dl className="facts geo-facts">
            <div className="fact"><dt>Training areas <HelpTip label="What is a training area?">The water used for practical exercises. It may differ from the school&rsquo;s office or mailing address.</HelpTip></dt><dd>{record.regions.length}</dd></div>
            <div className="fact"><dt>Verified providers shown</dt><dd>{verified.length}</dd></div>
            <div className="fact"><dt>Local course guides</dt><dd>{localTopics.length}</dd></div>
            <div className="fact"><dt>Wider directory</dt><dd><Link href={`/sailing-schools/${record.state}/`}>{stateRecord.name}</Link></dd></div>
          </dl>
          <div className="geo-notes">
            <div className="panel">
              <span className="kicker">Choose by water</span>
              <h3>Where you train changes what you practise</h3>
              <p className="copy">{record.waters[0]}</p>
            </div>
            <div className="panel">
              <span className="kicker">Before you travel</span>
              <h3>Confirm the operating details</h3>
              <ul className="bullets">
                <li>the exact meeting point and whether parking or public transport is practical</li>
                <li>which boat runs the course and the normal group size</li>
                <li>the school&rsquo;s weather, rescheduling and minimum-number policy</li>
                <li>whether the practical course stays sheltered or uses open water</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Where will you train?</span>
            <h2 className="h2">The water you learn on</h2>
            {record.waters.map((w, i) => (
              <p className="copy" key={i}>
                {w}
              </p>
            ))}
          </div>
          <div>
            <div className="photo tall">
              <ImageSlot placeholder={`Drop a map of the ${record.name} training waters`} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="kicker">Local questions</span><h2 className="h2">Learning to sail around {record.name}</h2></div></div>
          <div className="qa">
            {geoFaqs.map((faq) => <div className="qa-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
          </div>
          <div className="chain" style={{ marginTop: 30 }}>
            <Link className="tag tag-sky" href="/learn/how-to-choose-a-sailing-school/">How to compare sailing schools</Link>
            <Link className="tag tag-sky" href="/learn/first-sailing-lesson/">What happens in your first lesson</Link>
            <Link className="tag tag-sky" href="/learn/weather-for-beginner-sailors/">Weather basics for beginners</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Training areas</span>
              <h2 className="h2">Where courses actually run</h2>
            </div>
          </div>
          <div className="rows">
            {record.regions.map((r) => (
              <div className="row" key={r.name}>
                <div>
                  <h3>{r.name}</h3>
                  <p>{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="schools">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">{stateRecord.name}</span>
              <h2 className="h2">Schools within reach of {record.name}</h2>
            </div>
            <Link className="pill pill-sky" href={`/sailing-schools/${record.state}/`}>
              All {stateRecord.name}
            </Link>
          </div>

          {verified.length > 0 ? (
            <div className="cards related-carousel">
              {verified.map((s) => (
                <SchoolCard school={s} key={s.name} />
              ))}
            </div>
          ) : null}

          {unverified.length > 0 && (
            <>
              <p className="copy" style={{ marginTop: verified.length ? 44 : 8 }}>
                These schools operate in {stateRecord.name}. We publish a school&rsquo;s exact base,
                accreditation and course details only once we have verified them against the school, so we
                do not yet claim which of these trade from {record.name} itself.
              </p>
              <div className="chain" style={{ marginTop: 20 }}>
                {unverified.map((s) => (
                  <span className="tag tag-cream" key={s.name} style={{ padding: '9px 16px' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {localTopics.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">In more detail</span>
                <h2 className="h2">Training at {record.name}, by course</h2>
              </div>
            </div>
            <div className="rows">
              {localTopics.map((t) => {
                const topic = cityCourseTopicBySlug(t.topic)!;
                return (
                  <Link
                    className="row"
                    href={`/sailing-schools/${record.state}/${record.slug}/${t.topic}/`}
                    key={t.topic}
                  >
                    <div>
                      <h3>
                        {topic.label} in {record.name.replace(/^the /, 'the ')}
                      </h3>
                      <p>{t.standfirst}</p>
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
      )}

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">What is taught here</span>
              <h2 className="h2">Course types around {record.name}</h2>
            </div>
            <Link className="pill pill-sky" href="/courses/">
              All courses
            </Link>
          </div>
          <div className="chain" style={{ marginTop: 20 }}>
            {record.taught.map((t) => (
              <span className="tag tag-cream" key={t} style={{ padding: '9px 16px' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Nearby</span>
              <h2 className="h2">Other training regions</h2>
            </div>
          </div>
          <div className="rows">
            {nearby.map((c) => (
              <Link className="row" href={`/sailing-schools/${c.state}/${c.slug}/`} key={c.slug}>
                <div>
                  <h3>{c.name.replace(/^the /, '')}</h3>
                  <p>{c.description}</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            ))}
            <Link className="row" href={`/sailing-schools/${record.state}/`}>
              <div>
                <h3>All of {stateRecord.name}</h3>
                <p>
                  {stateRecord.regions.join(' · ')} — {list.length} schools
                </p>
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
            <h2>Not sure which course to start with in {record.name}?</h2>
            <p>
              Three questions — have you sailed before, what boat do you want to sail, and what is
              your goal — give you a starting course and the schools that teach it.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
              Compare qualifications
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
