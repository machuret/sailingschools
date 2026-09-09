import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { course as courseSchema } from '@/lib/schema';
import { schemeNames, coursesInScheme, type SchemeCourse } from '@/lib/scheme-courses';

/** Shared body for every scheme course page. One template, four namespaces. */
export default function SchemeCoursePage({ record }: { record: SchemeCourse }) {
  const schemeName = schemeNames[record.scheme];
  const siblings = coursesInScheme(record.scheme).filter((c) => c.slug !== record.slug);
  const teaches = record.blocks.flatMap((b) => (b.type === 'list' ? b.items : []));
  const prev = siblings.find((c) => `/${c.scheme}/${c.slug}/` === record.prev);
  const next = siblings.find((c) => `/${c.scheme}/${c.slug}/` === record.next);

  return (
    <>
      <JsonLd
        nodes={[
          courseSchema({
            name: record.title,
            description: record.description,
            provider: schemeName,
            ...(teaches.length ? { teaches } : {}),
          }),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs
            dark
            items={[
              { name: 'Home', href: '/' },
              { name: schemeName, href: `/${record.scheme}/` },
              { name: record.title },
            ]}
          />
          <div
            className="split top"
            style={{ marginTop: 22, gridTemplateColumns: 'minmax(0,.85fr) minmax(0,1.15fr)' }}
          >
            <div>
              <span className="kicker">{schemeName}</span>
              <h1 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>
                {record.title}
              </h1>
              <p className="lead" style={{ marginTop: 22, fontSize: 'clamp(19px,2.1vw,25px)' }}>
                {record.standfirst}
              </p>
              <div className="photo wide" style={{ marginTop: 32 }}>
                <ImageSlot placeholder={`Photo — ${record.title}`} />
              </div>
            </div>

            <div className="panel" style={{ marginTop: 0 }}>
              {record.blocks.map((block, i) => {
                if (block.type === 'sub') {
                  return (
                    <h2 className="h4" key={i} style={{ marginTop: i === 0 ? 0 : 30 }}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'para') {
                  return (
                    <p className="copy" key={i} style={i === 0 ? { marginTop: 0 } : undefined}>
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'flow') {
                  return (
                    <div className="track" key={i} style={{ marginTop: 20 }}>
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
                  <div className="chain" key={i} style={{ marginTop: 18 }}>
                    {block.items.map((item) => (
                      <span className="tag tag-sky" key={item} style={{ padding: '8px 15px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                );
              })}

              <dl
                className="facts"
                style={{ marginTop: 34, gridTemplateColumns: '1fr', gap: 20 }}
              >
                <div className="fact">
                  <dt>Who it suits</dt>
                  <dd style={{ fontWeight: 500, fontSize: 16 }}>{record.suits}</dd>
                </div>
                <div className="fact">
                  <dt>What it is not</dt>
                  <dd style={{ fontWeight: 500, fontSize: 16 }}>{record.notThis}</dd>
                </div>
              </dl>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                <Link className="pill pill-orange" href="/sailing-schools/">
                  Schools teaching this
                </Link>
                <Link className="pill pill-outline" href="/find-a-course/">
                  Is this right for me?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(prev || next) && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">Where it sits</span>
                <h2 className="h2">Before and after</h2>
              </div>
            </div>
            <div className="rows">
              {prev && (
                <Link className="row" href={`/${prev.scheme}/${prev.slug}/`}>
                  <div>
                    <h3>← Before: {prev.title}</h3>
                    <p>{prev.standfirst}</p>
                  </div>
                </Link>
              )}
              {next && (
                <Link className="row" href={`/${next.scheme}/${next.slug}/`}>
                  <div>
                    <h3>Next: {next.title} →</h3>
                    <p>{next.standfirst}</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">The rest of the scheme</span>
              <h2 className="h2">Other {schemeName} courses</h2>
            </div>
            <Link className="pill pill-sky" href={`/${record.scheme}/`}>
              {schemeName} overview
            </Link>
          </div>
          <div className="rows">
            {siblings.slice(0, 8).map((c) => (
              <Link className="row" href={`/${c.scheme}/${c.slug}/`} key={c.slug}>
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

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Which course should you actually book?</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you
              a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
              Compare schemes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
