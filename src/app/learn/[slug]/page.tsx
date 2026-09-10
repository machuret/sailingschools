import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { faqPage, webPage } from '@/lib/schema';
import { licences, licenceBySlug } from '@/lib/licences';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return licences.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const record = licenceBySlug(slug);
  if (!record) return {};
  return {
    title: record.title,
    description: record.description,
    alternates: { canonical: `/learn/${record.slug}/` },
  };
}

const VERDICT: Record<string, { label: string; cls: string }> = {
  yes: { label: 'Licence required', cls: 'tag tag-orange' },
  no: { label: 'No licence required', cls: 'tag tag-sky' },
  conditional: { label: 'Sometimes required', cls: 'tag tag-cream' },
};

export default async function LicencePage({ params }: Params) {
  const { slug } = await params;
  const record = licenceBySlug(slug);
  if (!record) notFound();

  const others = licences.filter((l) => l.slug !== record.slug);
  const verdict = VERDICT[record.required];

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: record.title,
            description: record.description,
            url: `/learn/${record.slug}/`,
          }),
          faqPage([
            {
              question: `Do you need a boat licence to sail in ${record.state}?`,
              answer: `${record.short} ${record.rule}`,
            },
          ]),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs
            dark
            items={[
              { name: 'Home', href: '/' },
              { name: 'Boat licences', href: '/learn/boat-licence/' },
              { name: record.abbr },
            ]}
          />
          <div
            className="split top even"
            style={{ marginTop: 22 }}
          >
            <div>
              <span className="kicker">{record.state}</span>
              <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
                Do you need a boat licence to sail in {record.abbr}?
              </h1>
              <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(20px,2.2vw,27px)' }}>
                {record.short}
              </p>
              <div style={{ marginTop: 26 }}>
                <span className={verdict.cls} style={{ padding: '9px 18px', fontSize: 14 }}>
                  {verdict.label}
                </span>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 0 }}>
              <span className="kicker">The rule</span>
              <p className="copy" style={{ marginTop: 8 }}>
                {record.rule}
              </p>
              <dl className="facts one" style={{ marginTop: 30, gap: 18 }}>
                <div className="fact">
                  <dt>Registration</dt>
                  <dd style={{ fontWeight: 500, fontSize: 16 }}>{record.registration}</dd>
                </div>
                {record.minimumAge && (
                  <div className="fact">
                    <dt>Minimum age</dt>
                    <dd style={{ fontWeight: 500, fontSize: 16 }}>{record.minimumAge} years</dd>
                  </div>
                )}
                <div className="fact">
                  <dt>Authority</dt>
                  <dd style={{ fontWeight: 500, fontSize: 16 }}>
                    <a href={record.authorityUrl} rel="nofollow noopener" target="_blank">
                      {record.authority} →
                    </a>
                  </dd>
                </div>
                <div className="fact">
                  <dt>Checked</dt>
                  <dd style={{ fontWeight: 500, fontSize: 16 }}>{record.checked}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">What it means if you sail</span>
              <h2 className="h2">Sailing, motoring, and where the line falls</h2>
            </div>
          </div>
          <div style={{ maxWidth: '68ch' }}>
            {record.sailing.map((para, i) => (
              <p className="copy" key={i}>
                {para}
              </p>
            ))}
          </div>
            <p className="copy" style={{ marginTop: 32, maxWidth: '68ch' }}>
              <b>A boat licence is not a sailing qualification.</b> It tests that you can operate a
              powered vessel safely and know the rules of the water. It says nothing about reefing,
              navigation, anchoring or handling a yacht under sail — which is what a sailing course
              teaches, and what a charter company will actually ask you about.
            </p>
            <p className="copy" style={{ maxWidth: '68ch' }}>
              Licensing rules change. This page was checked in {record.checked}; confirm the current
              requirement with{' '}
              <a href={record.authorityUrl} rel="nofollow noopener" target="_blank">
                {record.authority}
              </a>{' '}
              before you rely on it.
            </p>
          {record.schoolsPath && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
              <Link className="pill pill-orange" href={record.schoolsPath}>
                Sailing schools in {record.abbr}
              </Link>
              <Link className="pill pill-outline" href="/find-a-course/">
                Which course should I take?
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Everywhere else</span>
              <h2 className="h2">The rule in other states</h2>
            </div>
            <Link className="pill pill-sky" href="/learn/boat-licence/">
              Compare all eight
            </Link>
          </div>
          <div className="rows">
            {others.map((l) => (
              <Link className="row" href={`/learn/${l.slug}/`} key={l.slug}>
                <div>
                  <h3>{l.state}</h3>
                  <p>{l.short}</p>
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
            <h2>A licence gets you out of the marina. A course gets you sailing.</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
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
