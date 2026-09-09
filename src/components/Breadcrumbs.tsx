import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbs, type Crumb } from '@/lib/schema';

/**
 * The visible breadcrumb trail and its structured data, rendered from one list so the two
 * can never disagree. `dark` picks the variant used on light backgrounds.
 */
export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <>
      <p className={dark ? 'crumb dark' : 'crumb'}>
        {items.map((item, i) => (
          <span key={item.name}>
            {i > 0 && ' / '}
            {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          </span>
        ))}
      </p>
      <JsonLd nodes={[breadcrumbs(items)]} />
    </>
  );
}
