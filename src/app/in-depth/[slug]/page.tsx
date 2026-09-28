import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { inDepthArticles, inDepthBySlug } from '@/lib/in-depth';
import { article as articleSchema, breadcrumbs, webPage } from '@/lib/schema';
import { schools } from '@/lib/schools';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return inDepthArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const feature = inDepthBySlug((await params).slug);
  if (!feature) return {};

  return {
    title: `Flying Fish Sailing Interview with ${feature.interviewee}`,
    description: feature.description,
    alternates: { canonical: `/in-depth/${feature.slug}/` },
    openGraph: {
      type: 'article',
      title: feature.title,
      description: feature.description,
      publishedTime: feature.publishedAt,
      images: [{ url: feature.portrait, width: 600, height: 600, alt: `${feature.interviewee}, ${feature.role} of ${feature.schoolName}` }],
    },
  };
}

export default async function InDepthArticlePage({ params }: Params) {
  const feature = inDepthBySlug((await params).slug);
  if (!feature) notFound();

  const school = schools.find((entry) => entry.sourceSlug === feature.schoolSlug);
  const path = `/in-depth/${feature.slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'In depth', href: '/in-depth/' },
    { name: feature.schoolName },
  ];

  return (
    <>
      <JsonLd nodes={[
        webPage({ name: feature.title, description: feature.description, url: path }),
        articleSchema({
          headline: feature.title,
          description: feature.description,
          url: path,
          datePublished: feature.publishedAt,
          about: feature.schoolName,
          aboutUrl: feature.schoolUrl,
          image: feature.portrait,
          interviewee: { name: feature.interviewee, jobTitle: feature.role, sameAs: feature.teamUrl },
        }),
        breadcrumbs(crumbs),
      ]} />

      <section className="hero short">
        {school?.featureImage && <div className="hero-photo"><Image src={school.featureImage} alt={`${feature.schoolName} sailing training`} fill priority sizes="100vw" className="school-feature" /></div>}
        {school?.featureImage && <div className="hero-scrim" />}
        <div className="wrap hero-in"><div>
          <Breadcrumbs items={crumbs} />
          <span className="kicker">In-depth school profile</span>
          <h1>{feature.title}</h1>
          <p className="sub">{feature.description}</p>
          <div className="article-meta"><span>{feature.readTime}</span><span>Based on an interview with {feature.interviewee}, {feature.role}</span></div>
        </div></div>
      </section>

      <article className="sec last"><div className="wrap article-layout">
        <div className="article-body">
          <div className="article-standfirst">{feature.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>

          <section className="interview-person" aria-labelledby="who-is-andy">
            <div className="interview-person-visual">
              <div className="interview-person-photo"><Image src={feature.portrait} alt={`${feature.interviewee}, ${feature.role} of ${feature.schoolName}`} fill priority sizes="(max-width: 720px) 100vw, 280px" /></div>
              <a className="interview-school-logo" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer"><Image src={feature.logo} alt={`${feature.schoolName} website`} width={1038} height={273} /></a>
            </div>
            <div className="interview-person-copy">
              <span className="kicker">Who is Andy?</span>
              <h2 id="who-is-andy">{feature.interviewee}</h2>
              <p className="person-role">{feature.role}</p>
              {feature.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>Professional credentials</h3>
              <ul className="credentials-list">{feature.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
              <div className="external-actions">
                <a className="pill pill-navy" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer">Visit Flying Fish</a>
                <a className="pill pill-outline" href={feature.coursesUrl} target="_blank" rel="noopener noreferrer">Explore courses</a>
                <a className="school-link" href={feature.teamUrl} target="_blank" rel="noopener noreferrer">Meet the team →</a>
              </div>
            </div>
          </section>

          <blockquote>“{feature.pullQuote}”<cite>— {feature.interviewee}, {feature.schoolName}</cite></blockquote>
          {feature.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        </div>

        <aside className="article-aside">
          <a className="aside-school-logo" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer"><Image src={feature.logo} alt={`${feature.schoolName} website`} width={1038} height={273} /></a>
          <span className="kicker">At a glance</span><h2>{feature.schoolName}</h2>
          <dl><div><dt>Interviewee</dt><dd>{feature.interviewee}, {feature.role}</dd></div><div><dt>Base</dt><dd>Middle Harbour, Sydney</dd></div><div><dt>Pathways discussed</dt><dd>RYA, MCA, AMSA and Australian Sailing</dd></div><div><dt>Interview focus</dt><dd>Beginners, Yachtmaster and marine careers</dd></div></dl>
          <Link className="pill pill-orange" href={`/schools/${feature.schoolSlug}/`}>View school profile</Link>
          <a className="school-link" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer">Official Flying Fish website →</a>
          <Link className="school-link" href="/rya/yachtmaster/">Understand the Yachtmaster pathway →</Link>
          <Link className="school-link" href="/pathways/work-on-boats/">Explore professional pathways →</Link>
        </aside>
      </div></article>
    </>
  );
}
