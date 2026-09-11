import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { webPage } from '@/lib/schema';
import { states } from '@/lib/states';
import { cities } from '@/lib/cities';
import { schoolsInState } from '@/lib/schools';
import { courses, courseCategories, coursesInCategory } from '@/lib/courses';
import { faqPages } from '@/lib/faq';
import { schemeNames, coursesInScheme, type SchemeKey } from '@/lib/scheme-courses';
import { licences } from '@/lib/licences';
import { orderedPathways } from '@/lib/pathways';
import { guidesInSection } from '@/lib/guides';
import { comparisonGroups, comparisonsInGroup } from '@/lib/comparisons';
import { routes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Site Map | Every Page on SailingSchools.com.au',
  description:
    'Every page on SailingSchools.com.au — sailing schools by state and city, course guides, qualification schemes, pathways and common questions.',
  alternates: { canonical: '/sitemap/' },
};

function Group({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="h3" style={{ marginTop: 0 }}>
        {title}
      </h2>
      {note && (
        <p className="copy" style={{ fontSize: 15, marginTop: 8 }}>
          {note}
        </p>
      )}
      <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0 }}>{children}</ul>
    </div>
  );
}

function Item({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li style={{ padding: '7px 0', borderTop: '1px solid var(--line)', fontSize: 15.5 }}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function HtmlSitemapPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Site map',
            description: 'Every page on SailingSchools.com.au.',
            url: '/sitemap/',
          }),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Site map' }]} />
          <h1 className="h2" style={{ fontSize: 'clamp(32px,3.6vw,48px)', marginTop: 18 }}>
            Site Map
          </h1>
          <p className="copy">
            Every page on the site, {routes.length} in all. There is also an{' '}
            <a href="/sitemap.xml">XML sitemap</a> for search engines and an{' '}
            <a href="/llms.txt">llms.txt</a> for AI assistants.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="cols two" style={{ marginTop: 0, gap: 48 }}>
            <Group title="Start here">
              <Item href="/">Home</Item>
              <Item href="/find-a-course/">Find a course — three questions</Item>
              <Item href="/pathways/">Pathways by goal</Item>
              <Item href="/pathways/complete-beginner/">How to learn to sail from zero</Item>
              <Item href="/learn/">Guides</Item>
              <Item href="/glossary/">Sailing terms glossary</Item>
              <Item href="/faq/">Frequently asked questions</Item>
            </Group>
            <Group title="Qualification schemes" note="Each training body and the courses it awards.">
              <Item href="/qualifications/rya-vs-iyt-vs-asa/">RYA vs IYT vs ASA compared</Item>
              <Item href="/compare/">All comparisons</Item>
              <Item href="/australian-sailing/">Australian Sailing</Item>
              <Item href="/rya/">RYA</Item>
              <Item href="/rya/competent-crew/">RYA Competent Crew</Item>
              <Item href="/iyt/">IYT</Item>
              <Item href="/asa/">American Sailing</Item>
            </Group>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Sailing schools</h2>
          <div className="cols" style={{ marginTop: 32 }}>
            <Group title="Directory">
              <Item href="/sailing-schools/">All states and territories</Item>
              <Item href="/schools/harbourline-sailing-school/">Sample school profile</Item>
            </Group>
            <Group title="By state">
              {states.map((s) => (
                <Item href={`/sailing-schools/${s.key}/`} key={s.key}>
                  {s.name} — {schoolsInState(s.key).length} schools
                </Item>
              ))}
            </Group>
            <Group title="By city and region">
              {cities.map((c) => (
                <Item href={`/sailing-schools/${c.state}/${c.slug}/`} key={c.slug}>
                  {c.name.replace(/^the /, '')}
                </Item>
              ))}
            </Group>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Course guides</h2>
          <p className="copy">{courses.length} guides, grouped by what you want to learn.</p>
          <div className="cols" style={{ marginTop: 32 }}>
            <Group title="All courses">
              <Item href="/courses/">Every sailing course</Item>
            </Group>
            {courseCategories.map((cat) => {
              const list = coursesInCategory(cat.key);
              if (!list.length) return null;
              return (
                <Group title={cat.name} key={cat.key}>
                  {list.map((c) => (
                    <Item href={`/courses/${c.slug}/`} key={c.slug}>
                      {c.title}
                    </Item>
                  ))}
                </Group>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Pathways and guides</h2>
          <p className="copy">
            A pathway is the route to a goal; a guide answers a question that sits either side of
            choosing a course.
          </p>
          <div className="cols" style={{ marginTop: 32 }}>
            <Group title="By goal">
              <Item href="/pathways/">All pathways</Item>
              <Item href="/pathways/complete-beginner/">I have never sailed</Item>
              {orderedPathways.map((p) => (
                <Item href={`/pathways/${p.slug}/`} key={p.slug}>
                  {p.title}
                </Item>
              ))}
            </Group>
            <Group title="Before you book">
              <Item href="/learn/">All guides</Item>
              {guidesInSection('practical').map((g) => (
                <Item href={`/learn/${g.slug}/`} key={g.slug}>
                  {g.title}
                </Item>
              ))}
            </Group>
            <Group title="Working on the water">
              {guidesInSection('amsa').map((g) => (
                <Item href={`/learn/${g.slug}/`} key={g.slug}>
                  {g.title}
                </Item>
              ))}
            </Group>
            <Group title="Boat licences">
              <Item href="/learn/boat-licence/">All states compared</Item>
              {licences.map((l) => (
                <Item href={`/learn/${l.slug}/`} key={l.slug}>
                  {l.state}
                </Item>
              ))}
            </Group>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Comparisons</h2>
          <p className="copy">Head-to-head pages, each one with the answer at the top.</p>
          <div className="cols" style={{ marginTop: 32 }}>
            {comparisonGroups.map((g) => (
              <Group title={g.name} key={g.key}>
                {comparisonsInGroup(g.key).map((c) => (
                  <Item href={`/compare/${c.slug}/`} key={c.slug}>
                    {c.title}
                  </Item>
                ))}
              </Group>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Courses by training body</h2>
          <p className="copy">
            The named courses each scheme awards, as distinct from the intent guides above.
          </p>
          <div className="cols" style={{ marginTop: 32 }}>
            {(['rya', 'iyt', 'asa', 'australian-sailing'] as SchemeKey[]).map((scheme) => (
              <Group title={schemeNames[scheme]} key={scheme}>
                <Item href={`/${scheme}/`}>{schemeNames[scheme]} overview</Item>
                {scheme === 'rya' && <Item href="/rya/competent-crew/">RYA Competent Crew</Item>}
                {coursesInScheme(scheme).map((c) => (
                  <Item href={`/${c.scheme}/${c.slug}/`} key={c.slug}>
                    {c.title}
                  </Item>
                ))}
              </Group>
            ))}
          </div>
        </div>
      </section>

      <section className="sec last">
        <div className="wrap">
          <h2 className="h2">Questions and site information</h2>
          <div className="cols" style={{ marginTop: 32 }}>
            <Group title="Answered in full">
              {faqPages.map((f) => (
                <Item href={`/faq/${f.page!.slug}/`} key={f.page!.slug}>
                  {f.question}
                </Item>
              ))}
            </Group>
            <Group title="About this site">
              <Item href="/faq/">All questions</Item>
              <Item href="/privacy-policy/">Privacy policy</Item>
              <Item href="/terms-and-conditions/">Terms &amp; conditions</Item>
              <Item href="/sitemap/">Site map</Item>
            </Group>
          </div>
        </div>
      </section>
    </>
  );
}
