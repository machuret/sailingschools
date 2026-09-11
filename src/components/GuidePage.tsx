import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { faqPage, webPage } from '@/lib/schema';
import type { Guide } from '@/lib/guides';

/** Shared body for the long-form explainers under /learn/ that are not licence records. */
export default function GuidePage({ record }: { record: Guide }) {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: record.title,
            description: record.description,
            url: `/learn/${record.slug}/`,
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
              { name: 'Learn', href: '/learn/' },
              { name: record.title },
            ]}
          />
          <div style={{ marginTop: 22, maxWidth: 760 }}>
            <span className="kicker">{record.kicker}</span>
            <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
              {record.title}
            </h1>
            <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(19px,2.1vw,25px)' }}>
              {record.standfirst}
            </p>
          </div>
        </div>
      </section>

      {record.facts && (
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <dl className="facts two">
              {record.facts.map((f) => (
                <div className="fact" key={f.term}>
                  <dt>{f.term}</dt>
                  <dd style={{ fontWeight: 500, fontSize: 17 }}>{f.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

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
                <div className="track" key={i}>
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

          {record.source && (
            <p className="note" style={{ marginTop: 40 }}>
              Source: <a href={record.source.url} rel="nofollow noopener">{record.source.name}</a>,
              checked {record.source.checked}. Requirements change — confirm the current position
              with the issuing authority before you plan around anything on this page.
            </p>
          )}
        </div>
      </section>

      {record.faqs && (
        <section className="sec">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <div>
                <span className="kicker">Questions</span>
                <h2 className="h2">People also ask</h2>
              </div>
            </div>
            <div className="qa">
              {record.faqs.map((f) => (
                <div className="qa-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Read next</span>
              <h2 className="h2">Related</h2>
            </div>
            <Link className="pill pill-sky" href="/learn/">
              All guides
            </Link>
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

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Still working out where to start?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/pathways/">
              Browse by goal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
