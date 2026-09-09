import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { faqPage } from '@/lib/schema';
import { faqs, faqCategories, faqsInCategory } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Sailing Course FAQ Australia | Straight Answers',
  description:
    'Straight answers on learning to sail in Australia — whether you need a dinghy first, what Yachtmaster really is, and what a qualification does not get you.',
  alternates: { canonical: '/faq/' },
};

export default function FaqIndexPage() {
  return (
    <>
      <JsonLd
        nodes={[faqPage(faqs.map((f) => ({ question: f.question, answer: f.short })))]}
      />

      <section className="hero short">
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'FAQ' }]} />
            <h1>
              Sailing Course <em>Questions</em>
            </h1>
            <p className="sub">
              Short answers to what people actually ask, including the ones the industry tends to
              answer vaguely. Where a question deserves more than a line, it has its own page.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/courses/">
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {faqCategories.map((category) => {
        const list = faqsInCategory(category.key);
        if (!list.length) return null;
        return (
          <section className="sec" key={category.key}>
            <div className="wrap">
              <div className="sec-head">
                <div>
                  <span className="kicker">
                    {list.length} {list.length === 1 ? 'question' : 'questions'}
                  </span>
                  <h2 className="h2">{category.name}</h2>
                </div>
              </div>
              <div className="rows">
                {list.map((f) =>
                  f.page ? (
                    <Link className="row" href={`/faq/${f.page.slug}/`} key={f.question}>
                      <div>
                        <h3>{f.question}</h3>
                        <p>{f.short}</p>
                      </div>
                      <span className="arrow">
                        <i className="ph-duotone ph-caret-right" />
                      </span>
                    </Link>
                  ) : (
                    <div className="row" key={f.question}>
                      <div>
                        <h3>{f.question}</h3>
                        <p>{f.short}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>
        );
      })}

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Still not sure where to start?</h2>
            <p>
              Three questions — have you sailed before, what boat do you want to sail, and what is
              your goal — give you a starting course and the schools that teach it near you.
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
