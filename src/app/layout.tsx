import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import '@phosphor-icons/web/duotone';
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
  metadataBase: new URL('https://sailingschools.com.au'),
  title: {
    default: 'SailingSchools.com.au — Australia’s independent guide to learning to sail',
    template: '%s · SailingSchools.com.au',
  },
  description:
    'Find sailing schools, sailing courses and the right path to learn to sail in Australia — from a first afternoon on the water to Yachtmaster, bareboat charter or owning your own yacht.',
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
