import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import SchoolMark from '@/components/SchoolMark';
import { schools } from '@/lib/schools';
import { stateByKey } from '@/lib/states';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return schools.flatMap((school) => school.sourceSlug ? [{ slug: school.sourceSlug }] : []);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const school = schools.find((entry) => entry.sourceSlug === slug);
  if (!school) return {};
  return {
    title: `${school.name} | Sailing School Profile`,
    description: `${school.name}${school.region ? ` in ${school.region}` : ''}: contact details, training services and current information synchronised from YouSail.`,
    alternates: { canonical: `/schools/${slug}/` },
  };
}

export default async function SchoolProfilePage({ params }: Params) {
  const { slug } = await params;
  const school = schools.find((entry) => entry.sourceSlug === slug);
  if (!school) notFound();
  const state = stateByKey(school.state);

  return (
    <>
      <section className="hero short">
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
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">School profile</span>
            <h2 className="h2">About {school.name}</h2>
            <p className="copy">{school.blurb ?? `${school.name} is a published sailing-training provider in the YouSail directory.`}</p>
            {school.types && <p className="copy"><strong>Training:</strong> {school.types}</p>}
            {school.scheme && <p className="copy"><strong>Training systems:</strong> {school.scheme}</p>}
            <div className="chain" style={{ marginTop: 22 }}>
              {school.website && <a className="pill pill-orange" href={school.website} rel="noopener nofollow" target="_blank">Visit school website</a>}
              {school.phone && <a className="pill pill-ghost" href={`tel:${school.phone.replace(/[^+0-9]/g, '')}`}>Call {school.phone}</a>}
              {school.email && <a className="pill pill-ghost" href={`mailto:${school.email}`}>Email school</a>}
            </div>
          </div>
          <div className="ccard">
            <div className="photo"><SchoolMark school={school} /></div>
            <h3>Current directory record</h3>
            <p>Business identity and contact fields are synchronised from YouSail. Editorial copy on this page belongs to SailingSchools.com.au.</p>
            {school.checked && <p className="note">Checked {school.checked}</p>}
            {school.sourceUrl && <a className="school-link" href={school.sourceUrl} rel="noopener" target="_blank"><span>View the canonical YouSail record</span><i className="ph-duotone ph-arrow-up-right" /></a>}
          </div>
        </div>
      </section>

      <section className="sec"><div className="wrap"><div className="cta-band"><div><h2>Compare your options</h2><p>Use the course finder, then compare the provider, training water, vessel and qualification system.</p></div><div className="btns"><Link className="pill pill-orange" href="/find-a-course/">Find a course</Link><Link className="pill pill-ghost" href="/sailing-schools/">Browse all schools</Link></div></div></div></section>
    </>
  );
}
