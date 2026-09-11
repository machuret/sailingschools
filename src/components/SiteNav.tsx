'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '/sailing-schools/', label: 'Schools', section: '/sailing-schools' },
  { href: '/courses/', label: 'Courses', section: '/courses' },
  { href: '/pathways/', label: 'Pathways', section: '/pathways' },
  { href: '/compare/', label: 'Compare', section: '/compare' },
  { href: '/learn/', label: 'Guides', section: '/learn' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentOf = (section: string) =>
    pathname === section || pathname.startsWith(`${section}/`) ? ('page' as const) : undefined;

  return (
    <>
      <div className="bar">
        Not sure which sailing course is right for you?{' '}
        <Link href="/find-a-course/">Answer three questions</Link> and we&rsquo;ll point you at the
        right starting course.
      </div>
      <header className="hdr">
        <div className="wrap hdr-in">
          <Link className="brand" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-white.png" alt="Sailing Schools Australia" />
          </Link>
          <nav>
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} aria-current={currentOf(l.section)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="util" style={{ marginLeft: 'auto' }}>
            <Link className="hide-l" href="/about/">
              About
            </Link>
            <a className="hide-l" href="mailto:hello@sailingschools.com.au">
              Update a school
            </a>
            <Link className="hide-m" href="/find-a-course/" aria-label="Search">
              <i className="ph-duotone ph-magnifying-glass" />
            </Link>
            <ThemeToggle />
            <Link className="pill pill-sky" href="/find-a-course/">
              Find a course
            </Link>
            <button
              className="menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((o) => !o)}
            >
              <i className={`ph-duotone ${open ? 'ph-x' : 'ph-list'}`} />
            </button>
          </div>
        </div>
        <div id="mobile-navigation" className={`mnav${open ? ' open' : ''}`} aria-hidden={!open}>
          <div className="wrap">
            <Link className="mobile-cta" href="/find-a-course/" onClick={() => setOpen(false)}>
              Find the right course
            </Link>
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                aria-current={currentOf(l.section)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/about/" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/sitemap/" onClick={() => setOpen(false)}>
              Site map
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
