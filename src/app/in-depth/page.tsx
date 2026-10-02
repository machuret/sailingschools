import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import { inDepthArticles } from '@/lib/in-depth';

export const metadata: Metadata = { title: 'Featured Sailing Schools | Interviews & In-depth Profiles', description: 'Meet Flying Fish Sailing, Adventure Sailing and Mainstay Sailing through interviews with the people behind the training.', alternates: { canonical: '/in-depth/' } };

const priority = ['flying-fish-sailing', 'adventure-sailing'];
const featured = [...inDepthArticles].sort((a, b) => {
  const rank = (slug: string) => priority.includes(slug) ? priority.indexOf(slug) : priority.length;
  return rank(a.schoolSlug) - rank(b.schoolSlug);
});

export default function InDepthPage() {
  return <>
    <section className="hero short"><div className="wrap hero-in"><div>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Featured Schools' }]} />
      <span className="kicker">Meet the people behind the training</span>
      <h1>Featured Schools</h1>
      <p className="sub">Get to know Australia’s sailing schools through our interviews. Discover how they teach, what makes each school different and the people helping sailors build confidence on the water.</p>
    </div></div></section>
    <section className="sec last in-depth-feature"><div className="wrap">
      <div className="cards pair featured-school-cards">{featured.map(article => <article key={article.slug} className="ccard">
        <Link href={`/in-depth/${article.slug}/`} className="photo in-depth-card-photo" aria-label={`Read the ${article.schoolName} feature`}>
          <Image src={article.heroImage ?? article.portrait} alt={`${article.schoolName} sailing training`} fill sizes="(max-width: 800px) 100vw, 50vw" />
          <span className="badge">Featured school</span>
        </Link>
        <Link className="featured-school-logo" href={`/schools/${article.schoolSlug}/`}>
          <Image src={article.logo} alt={article.schoolName} width={article.logoWidth ?? 1038} height={article.logoHeight ?? 273} />
        </Link>
        <h2 className="h3">{article.schoolName}</h2><p>{article.description}</p>
        <div className="foot">
          <Link className="pill pill-orange" href={`/in-depth/${article.slug}/`}>Read the school feature</Link>
          <Link className="school-link" href={`/schools/${article.schoolSlug}/`}>School profile →</Link>
        </div>
      </article>)}</div>
    </div></section>
  </>;
}
