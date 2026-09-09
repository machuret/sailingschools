import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SchemeCoursePage from '@/components/SchemeCoursePage';
import { coursesInScheme, schemeCourseBySlug } from '@/lib/scheme-courses';

const SCHEME = 'rya' as const;
type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return coursesInScheme(SCHEME).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const record = schemeCourseBySlug(SCHEME, slug);
  if (!record) return {};
  return {
    title: record.metaTitle,
    description: record.description,
    alternates: { canonical: `/${SCHEME}/${record.slug}/` },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const record = schemeCourseBySlug(SCHEME, slug);
  if (!record) notFound();
  return <SchemeCoursePage record={record} />;
}
