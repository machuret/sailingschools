import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { itemList, webPage } from '@/lib/schema';
import { comparisonGroups, comparisonsInGroup, comparisons } from '@/lib/comparisons';

export const metadata: Metadata = {
  title: 'Sailing Course Comparisons | X vs Y, Answered',
  description:
    'Side-by-side comparisons of sailing schemes, courses, boats and formats — RYA vs Australian Sailing, Day Skipper vs Yachtmaster, dinghy vs keelboat, and more. Each one ends with an answer.',
  alternates: { canonical: '/compare/' },
};

export default function CompareIndexPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Comparisons',
            description: metadata.description as string,
            url: '/compare/',
          }),
          itemList(
            'Sailing comparisons',
            comparisons.map((c) => ({ name: c.title, href: `/compare/${c.slug}/` })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder="Drop a photograph — two yachts on the same leg, close" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Compare' }]} />
            <h1>
              This <em>or</em> that
            </h1>
            <p className="sub">
              {comparisons.length} comparisons, each with the answer at the top. If the honest
              conclusion is &ldquo;they are the same thing under two names&rdquo;, the page says
              that rather than manufacturing a difference.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-ghost" href="/pathways/">
                Browse by goal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {comparisonGroups.map((g) => {
        const list = comparisonsInGroup(g.key);
        if (!list.length) return null;
        return (
          <section className="sec" key={g.key}>
            <div className="wrap">
              <div className="sec-head">
                <div>
                  <span className="kicker">{g.blurb}</span>
                  <h2 className="h2">{g.name}</h2>
                </div>
                <span className="tag tag-cream">{list.length}</span>
              </div>
              <div className="rows">
                {list.map((c) => (
                  <Link className="row" href={`/compare/${c.slug}/`} key={c.slug}>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.standfirst}</p>
                    </div>
                    <span className="arrow">
                      <i className="ph-duotone ph-caret-right" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Still not sure?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/faq/">
              Read the FAQ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
