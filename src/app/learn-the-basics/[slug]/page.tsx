import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import BasicQuiz from '@/components/BasicQuiz';
import BasicVisual from '@/components/BasicVisual';
import BasicProgress from '@/components/BasicProgress';
import { basicExamples } from '@/lib/basic-examples';
import JsonLd from '@/components/JsonLd';
import { basics, basicHref } from '@/lib/basics';
import { absoluteUrl } from '@/lib/site';
export const dynamicParams = false;
export const generateStaticParams = () => basics.map(l => ({ slug: l.slug }));
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = basics.find(l => l.slug === slug);
  if (!lesson) return {};
  return { title: `${lesson.title} | Learn the Basics with Saily`, description: lesson.intro, alternates: { canonical: basicHref(lesson.slug) }, openGraph: { title: lesson.title, description: lesson.intro, url: absoluteUrl(basicHref(lesson.slug)), images: [{ url: absoluteUrl('/assets/saily.png'), width: 420, height: 420, alt: 'Saily sailing mascot' }] } };
}
export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = basics.find(l => l.slug === slug);
  if (!lesson) notFound();
  const index = basics.indexOf(lesson);
  const example = basicExamples[slug];
  return <>
    <JsonLd nodes={[{ '@type': 'LearningResource', name: lesson.title, description: lesson.intro, url: absoluteUrl(basicHref(slug)), inLanguage: 'en-AU', learningResourceType: 'Mini-lesson', educationalLevel: 'Beginner', isAccessibleForFree: true, teaches: lesson.memory, provider: { '@type': 'Organization', name: 'Sailing Schools Australia', url: absoluteUrl('/') } }]} />
    <div className="wrap basic-reading">
      <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Learn the Basics', href: '/learn-the-basics/' }, { name: lesson.title }]} />
      <header className="basic-heading"><span className="kicker">{lesson.group} · Lesson {index + 1} of {basics.length}</span><h1>{lesson.title}</h1><p>{lesson.intro}</p><span className="basic-meta">3-minute read + a quick quiz</span></header>
      <aside className="basic-saily"><Image src="/assets/saily.png" alt="Saily" width={100} height={100} priority /><div><strong>Saily’s tip</strong><p>{lesson.tip}</p></div></aside>
      <BasicVisual slug={slug} memory={lesson.memory} />
      <article className="basic-copy">{lesson.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</article>
      {example && <section className="basic-example" aria-labelledby="example-title"><span className="kicker">Put it into context</span><h2 id="example-title">{example.question}</h2><p>Think it through, then reveal the explanation.</p><details><summary>Show the explanation</summary><p>{example.answer}</p></details><details><summary>Word to know: {example.term}</summary><p>{example.definition}</p></details></section>}
      {slug === 'understanding-points-of-sail' && <p><Link className="pill pill-sky" href="/learn/points-of-sail/">Try the interactive points-of-sail diagram →</Link></p>}
      <BasicQuiz key={slug} questions={lesson.quiz} />
      <BasicProgress lessons={basics.map(({ slug, title }) => ({ slug, title }))} slug={slug} />
      <section className="basic-related"><h2>Keep exploring</h2><Link href={`/learn/${lesson.related}/`}>Related guide: {lesson.related.replaceAll('-', ' ')} →</Link><Link href="/glossary/">Look up more sailing terms →</Link><Link href="/pathways/complete-beginner/">Choose your beginner pathway →</Link></section>
      <nav className="basic-pagination" aria-label="Lesson navigation">{index > 0 && <Link href={basicHref(basics[index - 1].slug)}>← Previous: {basics[index - 1].title}</Link>}{index < basics.length - 1 ? <Link href={basicHref(basics[index + 1].slug)}>Next: {basics[index + 1].title} →</Link> : <Link href="/sailing-schools/">Find a school for practical lessons →</Link>}</nav>
      <p className="basic-boundary">An introduction to prepare you for supervised practical learning, not a qualification. Follow your instructor’s boat-specific guidance. <Link href="/learn-the-basics/">View all 15 lessons.</Link></p>
    </div>
  </>;
}
