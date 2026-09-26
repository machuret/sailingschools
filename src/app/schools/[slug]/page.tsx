import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import SchoolCard from '@/components/SchoolCard';
import SchoolMark from '@/components/SchoolMark';
import HelpTip from '@/components/HelpTip';
import { cities } from '@/lib/cities';
import { educationalOrganization, webPage } from '@/lib/schema';
import { schools, schoolsInCity, schoolsInState } from '@/lib/schools';
import { stateByKey } from '@/lib/states';

type Params = { params: Promise<{ slug: string }> };

const SCHEME_LINKS: Record<string, { name: string; href: string }> = {
  RYA: { name: 'Explore the RYA course pathway', href: '/rya/' },
  IYT: { name: 'Explore the IYT course pathway', href: '/iyt/' },
  ASA: { name: 'Explore American Sailing courses', href: '/asa/' },
  'Australian Sailing': { name: 'Explore Australian Sailing courses', href: '/australian-sailing/' },
};

const TRAINING_LINKS: { match: RegExp; name: string; href: string }[] = [
  { match: /beginner|crew/iu, name: 'Beginner sailing pathway', href: '/pathways/complete-beginner/' },
  { match: /catamaran/iu, name: 'Catamaran sailing guide', href: '/courses/catamaran-sailing/' },
  { match: /charter/iu, name: 'Charter yacht pathway', href: '/pathways/charter-a-yacht/' },
  { match: /yachtmaster/iu, name: 'Yachtmaster pathway', href: '/rya/yachtmaster/' },
  { match: /navigation|theory/iu, name: 'Navigation and theory courses', href: '/rya/day-skipper-theory/' },
  { match: /radio/iu, name: 'Marine radio courses', href: '/courses/marine-radio/' },
  { match: /safety|sea survival/iu, name: 'Safety and sea survival', href: '/australian-sailing/safety-sea-survival/' },
  { match: /own-boat/iu, name: 'Own-boat tuition', href: '/courses/own-boat-tuition/' },
  { match: /racing/iu, name: 'Club racing pathway', href: '/pathways/race-with-a-club/' },
  { match: /commercial/iu, name: 'Commercial sailing pathway', href: '/pathways/work-on-boats/' },
];

type EditorialSection = { body: string; subsections: { title: string; body: string }[] };

function parseEditorial(markdown: string | undefined): Map<string, EditorialSection> {
  const sections = new Map<string, EditorialSection>();
  if (!markdown) return sections;
  const matches = [...markdown.matchAll(/^## (.+)$/gmu)];
  matches.forEach((match, index) => {
    const title = match[1].trim();
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    const content = markdown.slice(start, end).trim();
    const subsectionMatches = [...content.matchAll(/^### (.+)$/gmu)];
    const firstSubsection = subsectionMatches[0]?.index ?? content.length;
    sections.set(title, {
      body: content.slice(0, firstSubsection).trim(),
      subsections: subsectionMatches.map((subsection, subsectionIndex) => {
        const subsectionStart = (subsection.index ?? 0) + subsection[0].length;
        const subsectionEnd = subsectionMatches[subsectionIndex + 1]?.index ?? content.length;
        return { title: subsection[1].trim(), body: content.slice(subsectionStart, subsectionEnd).trim() };
      }),
    });
  });
  return sections;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return schools.flatMap((school) => school.sourceSlug ? [{ slug: school.sourceSlug }] : []);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const school = schools.find((entry) => entry.sourceSlug === slug);
  if (!school) return {};
  const verified = school.freshness !== 'unverified';
  const description = school.editorial?.seoDescription
    ?? `${school.name}${school.region ? ` in ${school.region}` : ''}: sailing training, course pathways and who this school suits.`;
  return {
    title: school.editorial?.seoTitle ?? `${school.name} | Sailing School Profile`,
    description,
    alternates: { canonical: `/schools/${slug}/` },
    robots: verified ? undefined : { index: false, follow: true },
    ...(school.featureImage ? {
      openGraph: { title: school.name, description, images: [{ url: school.featureImage, alt: `${school.name} sailing training` }] },
    } : {}),
  };
}

export default async function SchoolProfilePage({ params }: Params) {
  const { slug } = await params;
  const school = schools.find((entry) => entry.sourceSlug === slug);
  if (!school) notFound();

  const state = stateByKey(school.state);
  const verified = school.freshness !== 'unverified';
  const location = cities.find((city) =>
    schoolsInCity(city.state, city.slug).some((entry) => entry.sourceSlug === school.sourceSlug),
  );
  const relatedSchools = schoolsInState(school.state)
    .filter((entry) => entry.sourceSlug !== school.sourceSlug && entry.freshness !== 'unverified')
    .slice(0, 3);
  const schemes = (school.scheme ?? '').split(' · ').filter(Boolean);
  const trainingText = `${school.types ?? ''}`;
  const learningLinks = [
    ...schemes.flatMap((scheme) => SCHEME_LINKS[scheme] ? [SCHEME_LINKS[scheme]] : []),
    ...TRAINING_LINKS.filter((item) => item.match.test(trainingText)).map(({ name, href }) => ({ name, href })),
  ].filter((item, index, all) => all.findIndex((candidate) => candidate.href === item.href) === index);
  const description = school.editorial?.seoDescription
    ?? school.blurb
    ?? `${school.name} is listed as a sailing-training provider in the YouSail directory.`;
  const editorial = parseEditorial(school.editorial?.description);
  const learnMore = editorial.get(`Learn more about ${school.name}`)?.body ?? description;
  const whatWeLove = editorial.get('What we love')?.body;
  const whatYouWillLove = editorial.get('What you will love')?.body;
  const idealFor = editorial.get('Ideal for')?.subsections ?? [];
  const trainingTypes = editorial.get('Type of sailing and training')?.body;
  const verdict = editorial.get('Our verdict')?.body ?? school.editorial?.buyingGuide;

  return (
    <>
      {verified && (
        <JsonLd nodes={[
          webPage({ name: school.name, description, url: `/schools/${slug}/` }),
          educationalOrganization({
            name: school.name,
            description,
            areaServed: school.region ?? state?.name,
            url: school.website,
            telephone: school.phone,
            email: school.email,
            logo: school.logo,
            image: school.featureImage,
            sameAs: school.sourceUrl ? [school.sourceUrl] : undefined,
          }),
        ]} />
      )}

      <section className="hero short">
        {school.featureImage && (
          <div className="hero-photo">
            <Image className="school-feature" src={school.featureImage} alt={`${school.name} sailing training`} fill priority sizes="100vw" />
          </div>
        )}
        {school.featureImage && <div className="hero-scrim" />}
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[
              { name: 'Home', href: '/' },
              { name: 'Schools', href: '/sailing-schools/' },
              ...(state ? [{ name: state.name, href: `/sailing-schools/${state.key}/` }] : []),
              { name: school.name },
            ]} />
            <h1>{school.name}</h1>
            <p className="sub">{school.region ?? state?.name ?? 'Australia-wide sailing training provider'}</p>
            {school.operatingScope === 'online' && <span className="profile-online-tag"><i className="ph-duotone ph-wifi-high" aria-hidden="true" /> Online only</span>}
            <div className="cta">
              {school.website && <a className="pill pill-orange" href={school.website} rel="noopener" target="_blank">Visit school website</a>}
              {location && <Link className="pill pill-ghost" href={`/sailing-schools/${location.state}/${location.slug}/`}>Schools near {location.name}</Link>}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">School overview</span>
            <h2 className="h2">Learn more about {school.name}</h2>
            <p className="school-editorial-lead">{learnMore}</p>

            {(whatWeLove || whatYouWillLove) && (
              <div className="editorial-highlights">
                {whatWeLove && <article><i className="ph-duotone ph-heart" aria-hidden="true" /><h3>What we love</h3><p>{whatWeLove}</p></article>}
                {whatYouWillLove && <article><i className="ph-duotone ph-sparkle" aria-hidden="true" /><h3>What you will love</h3><p>{whatYouWillLove}</p></article>}
              </div>
            )}

            <h2 className="h3" style={{ marginTop: 42 }}>Training information</h2>
            <dl className="facts two" style={{ marginTop: 20 }}>
              <div className="fact"><dt>Training area</dt><dd>{school.region ?? 'Confirm with the school'}</dd></div>
              <div className="fact"><dt>Training system <HelpTip label="What is a training system?">The organisation that publishes the course framework or recognises the training centre. It is separate from a government boat licence.</HelpTip></dt><dd>{school.scheme ?? 'Not independently confirmed'}</dd></div>
              <div className="fact"><dt>Training focus</dt><dd>{school.types ?? 'See the school’s current course list'}</dd></div>
              <div className="fact"><dt>Record status</dt><dd>{verified ? 'Current directory record' : 'Awaiting independent verification'}</dd></div>
            </dl>
          </div>

          <aside className="ccard">
            <div className="photo">
              {school.operatingScope === 'online' && <span className="badge badge-online">Online only</span>}
              <SchoolMark school={school} />
            </div>
            <h3>Contact the school</h3>
            <p>Ask about the exact course, training boat, student-to-instructor ratio, prerequisites and what certificate is issued.</p>
            <div className="profile-contact">
              {school.phone && <a href={`tel:${school.phone.replace(/[^+0-9]/g, '')}`}><i className="ph-duotone ph-phone" /> {school.phone}</a>}
              {school.email && <a href={`mailto:${school.email}`}><i className="ph-duotone ph-envelope" /> {school.email}</a>}
              {school.website && <a href={school.website} rel="noopener" target="_blank"><i className="ph-duotone ph-globe" /> School website</a>}
            </div>
            {school.checked && <p className="note">Directory details checked {school.checked}.</p>}
          </aside>
        </div>
      </section>

      {idealFor.length > 0 && (
        <section className="sec school-fit-section">
          <div className="wrap">
            <span className="kicker">Find your fit</span>
            <h2 className="h2">Ideal for</h2>
            <div className="school-fit-grid">
              {idealFor.map((item, index) => (
                <article key={item.title}>
                  <span className="fit-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {(trainingTypes || verdict) && (
        <section className="sec">
          <div className="wrap editorial-conclusion">
            {trainingTypes && <article><span className="kicker">The experience</span><h2 className="h3">Type of sailing and training</h2><p>{trainingTypes}</p></article>}
            {verdict && <article className="verdict"><span className="kicker">Our verdict</span><p>{verdict}</p></article>}
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">Plan before booking</span>
            <h2 className="h2">Choose the qualification first</h2>
            <p className="copy">
              A school may teach several kinds of sailing. Start with what you want to do—crew,
              skipper, charter, race or work on the water—then check that the advertised course and
              qualification match that goal. A recreational certificate and an Australian
              commercial certificate are not interchangeable.
            </p>
            <div className="chain" style={{ marginTop: 24 }}>
              {learningLinks.length ? learningLinks.map((item) => (
                <Link className="tag tag-sky" href={item.href} key={item.href}>{item.name}</Link>
              )) : (
                <>
                  <Link className="tag tag-sky" href="/find-a-course/">Find a suitable starting course</Link>
                  <Link className="tag tag-sky" href="/qualifications/rya-vs-iyt-vs-asa/">Compare qualification systems</Link>
                </>
              )}
            </div>
          </div>
          <div className="panel">
            <span className="kicker">Verification</span>
            <h2 className="h4">What this status means</h2>
            <p className="copy">
              {verified
                ? 'The published identity and contact record has been checked through YouSail. Course schedules and availability can change, so confirm them directly.'
                : 'This school is known to the directory, but the record is not yet independently verified. This page is excluded from search indexing until that check is complete.'}
            </p>
            <p className="note">Corrections are welcome at <a href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a>.</p>
          </div>
        </div>
      </section>

      {relatedSchools.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head"><div><span className="kicker">Compare providers</span><h2 className="h2">Other verified schools in {state?.name}</h2></div>{state && <Link className="pill pill-sky" href={`/sailing-schools/${state.key}/`}>All {state.name} schools</Link>}</div>
            <div className="cards related-carousel">{relatedSchools.map((entry) => <SchoolCard school={entry} key={entry.name} />)}</div>
          </div>
        </section>
      )}

      <section className="sec"><div className="wrap"><div className="cta-band"><div><h2>Compare the course, not just the school</h2><p>Match your experience, preferred boat and sailing goal before contacting providers.</p></div><div className="btns"><Link className="pill pill-orange" href="/find-a-course/">Find a course</Link><Link className="pill pill-ghost" href="/sailing-schools/">Browse all schools</Link></div></div></div></section>
    </>
  );
}
