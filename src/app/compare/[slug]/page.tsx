import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { faqPage, webPage } from '@/lib/schema';
import {
  comparisons,
  comparisonBySlug,
  orderedComparisons,
  comparisonGroups,
} from '@/lib/comparisons';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const record = comparisonBySlug(slug);
  if (!record) return {};
  return {
    title: record.metaTitle,
    description: record.description,
    alternates: { canonical: `/compare/${record.slug}/` },
  };
}

export default async function ComparePage({ params }: Params) {
  const { slug } = await params;
  const record = comparisonBySlug(slug);
  if (!record) notFound();

  const group = comparisonGroups.find((g) => g.key === record.group)!;
  const siblings = orderedComparisons.filter((c) => c.slug !== record.slug).slice(0, 8);

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: record.title,
            description: record.description,
            url: `/compare/${record.slug}/`,
          }),
          ...(record.faqs?.length
            ? [faqPage(record.faqs.map((f) => ({ question: f.q, answer: f.a })))]
            : []),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs
            dark
            items={[
              { name: 'Home', href: '/' },
              { name: 'Compare', href: '/compare/' },
              { name: record.title },
            ]}
          />
          <div style={{ marginTop: 22, maxWidth: 820 }}>
            <span className="kicker">{group.name}</span>
            <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
              {record.title}
            </h1>
            <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(19px,2.1vw,25px)' }}>
              {record.standfirst}
            </p>
          </div>

          {/* The verdict sits above the table on purpose. A comparison that makes you read
              to the bottom for an answer has not answered anything. */}
          <div className="verdict">
            <span className="verdict-k">The short answer</span>
            <p>{record.verdict}</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="vs">
            <div className="vs-side">
              <h2 className="h3">
                {record.a.href ? <Link href={record.a.href}>{record.a.name}</Link> : record.a.name}
              </h2>
              <p>{record.a.blurb}</p>
            </div>
            <span className="vs-mark" aria-hidden="true">
              vs
            </span>
            <div className="vs-side">
              <h2 className="h3">
                {record.b.href ? <Link href={record.b.href}>{record.b.name}</Link> : record.b.name}
              </h2>
              <p>{record.b.blurb}</p>
            </div>
          </div>

          <div className="scroll-x">
            <table className="cmp cmp-vs">
              <caption className="sr-only">
                {record.a.name} compared with {record.b.name}
              </caption>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">{record.a.name}</th>
                  <th scope="col">{record.b.name}</th>
                </tr>
              </thead>
              <tbody>
                {record.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>{r.a}</td>
                    <td>{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="picks">
            <div className="pick">
              <span className="kicker">Choose {record.a.name} if</span>
              <ul className="bullets">
                {record.chooseA.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="pick">
              <span className="kicker">Choose {record.b.name} if</span>
              <ul className="bullets">
                {record.chooseB.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          {record.blocks.map((block, i) => {
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

          {record.faqs && (
            <div className="qa" style={{ marginTop: 48 }}>
              {record.faqs.map((f) => (
                <div className="qa-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          )}
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
            {record.related.map((r) => (
              <Link className="row" href={r.href} key={r.href}>
                <div>
                  <h3>{r.name}</h3>
                  <p>{r.note}</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Other comparisons</span>
              <h2 className="h2">Still deciding?</h2>
            </div>
            <Link className="pill pill-sky" href="/compare/">
              All comparisons
            </Link>
          </div>
          <div className="chain">
            {siblings.map((c) => (
              <Link className="tag tag-sky" href={`/compare/${c.slug}/`} key={c.slug}>
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Decided? Now find a school.</h2>
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
