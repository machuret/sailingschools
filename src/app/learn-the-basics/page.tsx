import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { basics, basicHref } from '@/lib/basics';
import { itemList } from '@/lib/schema';
export const metadata: Metadata = {
  title: 'Learn the Basics of Sailing with Saily | 15 Mini-lessons',
  description: 'Free beginner sailing lessons: boat parts, wind, steering, sailing terms and preparing to crew. Learn with Saily, visual summaries and quick quizzes.',
  alternates: { canonical: '/learn-the-basics/' },
};
export default function BasicsPage() {
  return <>
    <JsonLd nodes={[itemList('Learn the Basics with Saily', basics.map(l => ({ name: l.title, href: basicHref(l.slug) })))]} />
    <section className="basic-hero"><div className="wrap">
      <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Learn the Basics' }]} />
      <div className="basic-welcome"><div><span className="kicker">Your first steps, at your pace</span><h1>Learn the Basics<br /><em>with Saily.</em></h1><p>New to sailing? Start with one small idea. Get to know the boat, make sense of the wind and arrive at your first lesson with better questions.</p><Link href={basicHref(basics[0].slug)} className="pill pill-orange">Start lesson 1 →</Link><p className="basic-meta">15 mini-lessons · No account needed · Free to explore</p></div><Image src="/assets/saily.png" alt="Meet Saily, your guide to the sailing basics" width={300} height={300} priority /></div>
    </div></section>
    <div className="wrap basic-library">{Array.from(new Set(basics.map(l => l.group))).map((group, i) => <section key={group} aria-labelledby={`group-${i}`}><span className="kicker">Chapter {i + 1}</span><h2 id={`group-${i}`}>{group}</h2><div className="basic-grid">{basics.filter(l => l.group === group).map(l => <Link className="basic-card" key={l.slug} href={basicHref(l.slug)}><span className="basic-meta">Lesson {basics.indexOf(l) + 1} · 3-minute read + quiz</span><h3>{l.title}</h3><p>{l.intro}</p><span className="basic-card-link">Explore lesson →</span></Link>)}</div></section>)}
      <aside className="basic-boundary"><h2>Then take it onto the water</h2><p>These introductions help you prepare for practical learning. They are not a qualification or a replacement for instruction aboard your boat.</p><Link className="pill pill-sky" href="/pathways/complete-beginner/">Find your beginner pathway →</Link></aside>
    </div>
  </>;
}
