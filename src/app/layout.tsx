import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import '@phosphor-icons/web/duotone';
import { siteUrl } from '@/lib/site';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import './site.css';

// Self-hosted so the site never waits on a font CDN at runtime.
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-sans',
});
const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  // Part 19 titles are self-contained and already at the length search results show,
  // so pages set their own in full rather than having a site name appended.
  title: {
    default: 'Sailing Schools Australia | Learn to Sail Guide',
    template: '%s',
  },
  description:
    'Independent guide to Australian sailing schools and courses. Compare RYA, IYT, ASA and Australian Sailing, and find the right course near you.',
  openGraph: {
    type: 'website',
    siteName: 'SailingSchools.com.au',
    locale: 'en_AU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
