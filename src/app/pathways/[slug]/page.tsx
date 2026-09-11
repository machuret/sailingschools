import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { itemList, webPage } from '@/lib/schema';
import { pathways, pathwayBySlug, orderedPathways } from '@/lib/pathways';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pathways.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const record = pathwayBySlug(slug);
  if (!record) return {};
  return {
    title: record.metaTitle,
    description: record.description,
    alternates: { canonical: `/pathways/${record.slug}/` },
  };
}

export default async function PathwayPage({ params }: Params) {
  const { slug } = await params;
  const record = pathwayBySlug(slug);
  if (!record) notFound();

  const others = orderedPathways.filter((p) => p.slug !== record.slug);

  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: record.title,
            description: record.description,
            url: `/pathways/${record.slug}/`,
          }),
          // The steps are the substance of the page, so they are published as an ordered
          // list rather than as HowTo: a HowTo implies a procedure with a guaranteed
          // outcome, and this is a route with choices in it.
          itemList(
            record.title,
            record.steps.map((s) => ({ name: s.name, href: s.href })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder={`Drop a photograph — ${record.goal.toLowerCase()}`} />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Pathways', href: '/pathways/' },
                { name: record.title },
              ]}
            />
            <h1>{record.title}</h1>
            <p className="sub">{record.standfirst}</p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/sailing-schools/">
                Schools near you
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <dl className="facts two">
            <div className="fact">
              <dt>The goal</dt>
              <dd>{record.goal}</dd>
            </div>
            <div className="fact">
              <dt>Assumes you have</dt>
              <dd>{record.startsFrom}</dd>
            </div>
            <div className="fact">
              <dt>How long, honestly</dt>
              <dd>{record.realistic}</dd>
            </div>
            <div className="fact">
              <dt>What it is not</dt>
              <dd>{record.notThis}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The route</span>
              <h2 className="h2">Step by step</h2>
            </div>
            <span className="tag tag-cream">{record.steps.length} steps</span>
          </div>
          <ol className="ladder">
            {record.steps.map((step, i) => (
              <li className={step.optional ? 'rung optional' : 'rung'} key={step.name}>
                <span className="rung-n" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="rung-body">
                  <h3>
                    {step.href ? <Link href={step.href}>{step.name}</Link> : step.name}
                    {step.optional && <span className="tag tag-cream">optional</span>}
                  </h3>
                  <p>{step.detail}</p>
                  {step.meta && <span className="rung-meta">{step.meta}</span>}
                </div>
              </li>
            ))}
          </ol>
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
            if (block.type === 'flow') {
              return (
                <div className="track" key={i} style={{ marginTop: 24 }}>
                  {block.items.map((item, j) => (
                    <div
                      className={j === block.items.length - 1 ? 'node lead' : 'node'}
                      key={`${item}-${j}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
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
              <span className="kicker">Other goals</span>
              <h2 className="h2">Every pathway</h2>
            </div>
            <Link className="pill pill-sky" href="/pathways/">
              All pathways
            </Link>
          </div>
          <div className="rows">
            {others.map((p) => (
              <Link className="row" href={`/pathways/${p.slug}/`} key={p.slug}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.goal}</p>
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
            <h2>Not sure this is your pathway?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/courses/">
              All courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
