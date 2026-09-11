import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import GlossaryList from '@/components/GlossaryList';
import { webPage } from '@/lib/schema';
import { glossary } from '@/lib/glossary';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sailing Terms Glossary | 94 Words Explained',
  description:
    'A plain-English glossary of 94 sailing terms — sheets, halyards, gybing, reefing, points of sail and the qualification acronyms, all on one page.',
  alternates: { canonical: '/glossary/' },
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Sailing glossary',
            description: metadata.description as string,
            url: '/glossary/',
          }),
          // DefinedTermSet rather than FAQPage: these are definitions, not questions, and
          // describing them accurately is the point of publishing structured data at all.
          {
            '@type': 'DefinedTermSet',
            name: 'Sailing terms glossary',
            url: absoluteUrl('/glossary/'),
            inLanguage: 'en-AU',
            hasDefinedTerm: glossary.map((t) => ({
              '@type': 'DefinedTerm',
              name: t.term,
              description: t.def,
              ...(t.href ? { url: absoluteUrl(t.href) } : {}),
            })),
          },
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Glossary' }]} />
          <div style={{ marginTop: 22, maxWidth: 760 }}>
            <span className="kicker">{glossary.length} terms</span>
            <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
              Sailing terms, in plain English
            </h1>
            <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(19px,2.1vw,25px)' }}>
              Written for someone who has just heard the word shouted on a boat and is too
              embarrassed to ask what it means.
            </p>
            <p className="copy">
              Sailing keeps a vocabulary that is genuinely old and genuinely useful — a sheet is
              not a sail, and the distinction matters when somebody is shouting. Where a term has
              a page of its own on this site, the word links to it.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <GlossaryList />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Read next</span>
              <h2 className="h2">Where the words come from</h2>
            </div>
          </div>
          <div className="rows">
            <Link className="row" href="/learn/points-of-sail/">
              <div>
                <h3>The points of sail</h3>
                <p>Half this vocabulary is angles to the wind — here they are, moving</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>I have never sailed</h3>
                <p>The three routes in, and which one suits you</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/compare/">
              <div>
                <h3>Comparisons</h3>
                <p>Once you know two of the words, which do you actually want?</p>
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
            <h2>Learn them where they are used</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/learn/">
              More guides
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
