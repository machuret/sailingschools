import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import SchoolMark from '@/components/SchoolMark';
import JsonLd from '@/components/JsonLd';
import { itemList } from '@/lib/schema';
import { cities, cityBySlug, citiesInState } from '@/lib/cities';
import { schoolsInState } from '@/lib/schools';
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
  const list = schoolsInState(record.state);
  const verified = list.filter((s) => s.profile);
  const unverified = list.filter((s) => !s.profile);
  const nearby = citiesInState(record.state).filter((c) => c.slug !== record.slug);

  return (
    <>
      <JsonLd
        nodes={[
          itemList(
            `Sailing schools near ${record.name}`,
            list.map((s) => ({ name: s.name, href: s.profile })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot placeholder={`Drop a photograph — sailing training water at ${record.name}`} />
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
            <div className="cards">
              {verified.map((s) => (
                <Link className="ccard" href={s.profile!} key={s.name}>
                  <div className="photo">
                    {s.region && <span className="badge">{s.region}</span>}
                    <SchoolMark school={s} />
                  </div>
                  <h3>{s.name}</h3>
                  {s.blurb && <p>{s.blurb}</p>}
                  {s.scheme && (
                    <div className="meta">
                      <span className="tag tag-sky">{s.scheme}</span>
                    </div>
                  )}
                  <div className="foot">
                    <span className="meta" style={{ margin: 0 }}>
                      {s.types}
                    </span>
                    <span className="arrow">
                      <i className="ph-duotone ph-arrow-right" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}

          {unverified.length > 0 && (
            <>
              <p className="copy" style={{ marginTop: verified.length ? 44 : 8 }}>
                These schools operate in {stateRecord.name}. We publish a school&rsquo;s exact base,
                accreditation and prices only once we have verified them against the school, so we
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
