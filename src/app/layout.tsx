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
    // One card for the whole site. Generated from the same chart language the pages use
    // (scripts/og.mjs) and committed, so the build has no image-generation step. Pages
    // override the title and description through their own metadata; the image is shared.
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'SailingSchools.com.au — Australia’s independent guide to learning to sail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Light is the default; this only applies an explicit dark choice, and
            it runs before first paint so the page never flashes the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}",
          }}
        />
      </head>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
