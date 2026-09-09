import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { faqPage } from '@/lib/schema';
import { faqPages, faqBySlug, faqsInCategory, faqCategories } from '@/lib/faq';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return faqPages.map((f) => ({ slug: f.page!.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = faqBySlug(slug);
  if (!entry?.page) return {};
  return {
    title: entry.page.title,
    description: entry.page.description,
    alternates: { canonical: `/faq/${entry.page.slug}/` },
  };
}

export default async function FaqAnswerPage({ params }: Params) {
  const { slug } = await params;
  const entry = faqBySlug(slug);
  if (!entry?.page) notFound();

  const page = entry.page;
  const category = faqCategories.find((c) => c.key === entry.category)!;
  const siblings = faqsInCategory(entry.category).filter(
    (f) => f.page && f.page.slug !== page.slug,
  );

  return (
    <>
      <JsonLd
        nodes={[faqPage([{ question: entry.question, answer: page.answer.join(' ') }])]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs
            dark
            items={[
              { name: 'Home', href: '/' },
              { name: 'FAQ', href: '/faq/' },
              { name: category.name },
              { name: entry.question },
            ]}
          />
          <div className="split top" style={{ marginTop: 24, alignItems: 'start' }}>
            <div>
              <span className="kicker">{category.name}</span>
              <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,44px)' }}>
                {entry.question}
              </h1>
              <p
                className="lead"
                style={{ marginTop: 24, fontSize: 'clamp(20px,2.2vw,26px)', maxWidth: '30ch' }}
              >
                {entry.short}
              </p>
            </div>
            <div className="panel" style={{ marginTop: 0 }}>
              {page.answer.map((para, i) => (
                <p className="copy" key={i} style={i === 0 ? { marginTop: 0 } : undefined}>
                  {para}
                </p>
              ))}
              {page.related && page.related.length > 0 && (
                <>
                  <div
                    style={{
                      marginTop: 34,
                      paddingTop: 22,
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <span className="kicker" style={{ fontSize: 15 }}>
                      Read next
                    </span>
                    <div className="chain" style={{ marginTop: 12 }}>
                      {page.related.map((r) => (
                        <Link
                          className="tag tag-sky"
                          href={r.href}
                          key={r.href}
                          style={{ padding: '9px 16px' }}
                        >
                          {r.name} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">More questions</span>
                <h2 className="h2">{category.name}</h2>
              </div>
              <Link className="pill pill-sky" href="/faq/">
                All questions
              </Link>
            </div>
            <div className="rows">
              {siblings.map((f) => (
                <Link className="row" href={`/faq/${f.page!.slug}/`} key={f.question}>
                  <div>
                    <h3>{f.question}</h3>
                    <p>{f.short}</p>
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

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Get a starting course, not just an answer</h2>
            <p>
              Three questions give you a course to begin with, what comes after it, and the schools
              teaching it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/faq/">
              All questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
