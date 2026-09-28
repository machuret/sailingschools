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
    title: `${feature.schoolName} In-depth Sailing School Profile`,
    description: feature.description,
    alternates: { canonical: `/in-depth/${feature.slug}/` },
    openGraph: {
      type: 'article',
      title: feature.title,
      description: feature.description,
      publishedTime: feature.publishedAt,
      images: [{ url: feature.heroImage ?? feature.portrait, width: 1200, height: 900, alt: `${feature.schoolName} sailing training` }],
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
          image: feature.heroImage ?? feature.portrait,
          interviewee: feature.subjectType === 'Organization' ? undefined : { name: feature.interviewee, jobTitle: feature.role, sameAs: feature.teamUrl },
        }),
        breadcrumbs(crumbs),
      ]} />

      <section className="hero short">
        {(feature.heroImage ?? school?.featureImage) && <div className="hero-photo"><Image src={(feature.heroImage ?? school?.featureImage)!} alt={`${feature.schoolName} sailing training`} fill priority sizes="100vw" className="school-feature" /></div>}
        {(feature.heroImage ?? school?.featureImage) && <div className="hero-scrim" />}
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

          <section className="interview-person" aria-labelledby="feature-profile">
            <div className="interview-person-visual">
              <div className="interview-person-photo"><Image src={feature.portrait} alt={`${feature.interviewee}, ${feature.role} of ${feature.schoolName}`} fill priority sizes="(max-width: 720px) 100vw, 280px" /></div>
              <a className="interview-school-logo" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer"><Image src={feature.logo} alt={`${feature.schoolName} website`} width={feature.logoWidth ?? 1038} height={feature.logoHeight ?? 273} /></a>
            </div>
            <div className="interview-person-copy">
              <span className="kicker">{feature.profileEyebrow ?? `Who is ${feature.interviewee}?`}</span>
              <h2 id="feature-profile">{feature.profileTitle ?? feature.interviewee}</h2>
              <p className="person-role">{feature.role}</p>
              {feature.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>{feature.credentialsHeading ?? 'Professional credentials'}</h3>
              <ul className="credentials-list">{feature.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
              <div className="external-actions">
                <a className="pill pill-navy" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer">Visit {feature.schoolName}</a>
                <a className="pill pill-outline" href={feature.coursesUrl} target="_blank" rel="noopener noreferrer">Explore courses</a>
                <a className="school-link" href={feature.teamUrl} target="_blank" rel="noopener noreferrer">Meet the team →</a>
              </div>
            </div>
          </section>

          <blockquote>“{feature.pullQuote}”<cite>— {feature.interviewee}, {feature.schoolName}</cite></blockquote>
          {feature.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        </div>

        <aside className="article-aside">
          <a className="aside-school-logo" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer"><Image src={feature.logo} alt={`${feature.schoolName} website`} width={feature.logoWidth ?? 1038} height={feature.logoHeight ?? 273} /></a>
          <span className="kicker">At a glance</span><h2>{feature.schoolName}</h2>
          <dl><div><dt>Interviewee</dt><dd>{feature.interviewee}, {feature.role}</dd></div><div><dt>Base</dt><dd>{feature.base ?? 'Middle Harbour, Sydney'}</dd></div><div><dt>Pathways discussed</dt><dd>{feature.pathways ?? 'RYA, MCA, AMSA and Australian Sailing'}</dd></div><div><dt>Interview focus</dt><dd>{feature.focus ?? 'Beginners, Yachtmaster and marine careers'}</dd></div></dl>
          <Link className="pill pill-orange" href={`/schools/${feature.schoolSlug}/`}>View school profile</Link>
          <a className="school-link" href={feature.schoolUrl} target="_blank" rel="noopener noreferrer">Official {feature.schoolName} website →</a>
          {(feature.relatedLinks ?? [
            { href: '/rya/yachtmaster/', label: 'Understand the Yachtmaster pathway' },
            { href: '/pathways/work-on-boats/', label: 'Explore professional pathways' },
          ]).map((item) => <Link key={item.href} className="school-link" href={item.href}>{item.label} →</Link>)}
        </aside>
      </div></article>
    </>
  );
}
