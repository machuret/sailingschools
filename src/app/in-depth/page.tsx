import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import { inDepthArticles } from '@/lib/in-depth';

export const metadata: Metadata = { title: 'In-depth Sailing School Interviews | Australia', description: 'Independent long-form profiles built from interviews with the people behind Australian sailing schools.', alternates: { canonical: '/in-depth/' } };

export default function InDepthPage() {
  return <><section className="hero short"><div className="wrap hero-in"><div><Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'In depth' }]} /><span className="kicker">Independent editorial</span><h1>Inside Australia’s sailing schools</h1><p className="sub">Long-form reporting based on direct conversations with the people who teach, coach and build pathways onto the water.</p></div></div></section><section className="sec last"><div className="wrap"><div className="cards three">{inDepthArticles.map((article) => <Link key={article.slug} href={`/in-depth/${article.slug}/`} className="ccard"><div className="photo"><span className="badge">In depth</span></div><h2 className="h3">{article.title}</h2><p>{article.description}</p><div className="foot"><span className="tag tag-cream">{article.readTime}</span><span className="arrow">→</span></div></Link>)}</div></div></section></>;
}
