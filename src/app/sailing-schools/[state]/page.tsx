import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageSlot from '@/components/ImageSlot';
import SchoolCard from '@/components/SchoolCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { itemList } from '@/lib/schema';
import { schoolsInState } from '@/lib/schools';
import { states, stateByKey } from '@/lib/states';
import { citiesInState } from '@/lib/cities';

type Params = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return states.map((s) => ({ state: s.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state } = await params;
  const record = stateByKey(state);
  if (!record) return {};
  return {
    title: record.title,
    description: record.description,
    alternates: { canonical: `/sailing-schools/${record.key}/` },
  };
}

/** Course types the guide's Part 13 template lists for a location page. */
const COURSE_TYPES = [
  'Beginner sailing',
  'Keelboat courses',
  'Yacht training',
  'RYA courses',
  'IYT courses',
  'Catamaran training',
  'Yachtmaster preparation',
  'Racing',
  'Safety & Sea Survival',
  'Marine radio',
  'Navigation',
  'Own-boat tuition',
];

export default async function StatePage({ params }: Params) {
  const { state } = await params;
  const record = stateByKey(state);
  if (!record) notFound();

  const list = schoolsInState(record.key);
  const cityList = citiesInState(record.key);
  const verified = list.filter((s) => s.website || s.region);
  const unverified = list.filter((s) => !s.website && !s.region);

  return (
    <>
      <JsonLd
        nodes={[
          itemList(
            `Sailing schools in ${record.name}`,
            list.map((s) => ({ name: s.name, href: s.profile })),
          ),
        ]}
      />
      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder={`Drop a photograph — sailing training water in ${record.name}`} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Schools', href: '/sailing-schools/' },
                { name: record.name },
              ]}
            />
            <h1>
              Sailing Schools <em>{record.name}</em>
            </h1>
            <p className="sub">{record.description}</p>
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

      <section className="sec" id="schools">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">
                {list.length} {list.length === 1 ? 'school' : 'schools'}
              </span>
              <h2 className="h2">Sailing schools in {record.name}</h2>
            </div>
            {cityList.length > 0 ? (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {cityList.map((c) => (
                  <Link
                    className="tag tag-sky"
                    href={`/sailing-schools/${c.state}/${c.slug}/`}
                    key={c.slug}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {verified.length > 0 && (
            <div className="cards">
              {verified.map((s) => (
                <SchoolCard school={s} key={s.name} />
              ))}
            </div>
          )}

          {unverified.length > 0 && (
            <>
              {/* Only a sub-heading when it sits under a list of verified schools; on a
                  state with none, it would repeat the section heading directly above. */}
              {verified.length > 0 && (
                <h3 className="h3" style={{ marginTop: 56 }}>
                  Also operating in {record.name}
                </h3>
              )}
              <p className="copy" style={{ marginTop: verified.length ? undefined : 8 }}>
                These schools are in our directory but their profiles are still being checked. We
                publish accreditation, training boats and prices only once we have verified them
                against the school, so nothing is listed for them yet.
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

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Where will you train?</span>
            <h2 className="h2">The water you learn on</h2>
            <p className="copy">{record.waters}</p>
            <div className="chain" style={{ marginTop: 24 }}>
              {record.regions.map((r) => (
                <span className="tag tag-sky" key={r} style={{ padding: '9px 16px' }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="photo tall">
            <ImageSlot placeholder={`Drop a map of ${record.name} training waters, one pin per school`} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">What is taught here</span>
              <h2 className="h2">Course types around {record.name}</h2>
            </div>
          </div>
          <p className="copy">
            Availability varies by school, and not every course type is taught in every region.
            The three-question finder matches a starting course to your experience and goal, then
            points at the schools that teach it.
          </p>
          <div className="chain" style={{ marginTop: 24 }}>
            {COURSE_TYPES.map((c) => (
              <span className="tag tag-cream" key={c} style={{ padding: '9px 16px' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Other states</span>
              <h2 className="h2">Training elsewhere in Australia</h2>
            </div>
          </div>
          <div className="rows">
            {states
              .filter((s) => s.key !== record.key)
              .map((s) => (
                <Link className="row" href={`/sailing-schools/${s.key}/`} key={s.key}>
                  <div>
                    <h3>{s.name}</h3>
                    <p>
                      {s.regions.join(' · ')} — {schoolsInState(s.key).length} schools
                    </p>
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
            <h2>Not sure which school in {record.name} fits?</h2>
            <p>
              Do not start with price. Start with the outcome, the boat you will train on, class
              size and whether the qualification is relevant to what you want to do.
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
