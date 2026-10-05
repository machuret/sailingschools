import type { Metadata } from 'next';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact us | SailingSchools.com.au',
  description: 'Contact the Sailing Schools team about school listings, interviews, corrections or our Australian sailing guide.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return <>
    <section className="hero short">
      <div className="wrap hero-in"><div>
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contact us' }]} />
        <h1>Contact <em>us</em></h1>
        <p className="sub">Have a question, a school update or a story to share? Get in touch with the Sailing Schools team.</p>
      </div></div>
    </section>
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <h2 className="h3">Send us a message</h2>
        <p className="copy">Use our YouSail contact form below, or email <a href="mailto:gabriel@yousail.com.au">gabriel@yousail.com.au</a>.</p>
        <div data-paperform-id="yousail" data-title="Contact Sailing Schools and YouSail" style={{ marginTop: 28, minHeight: 500 }} />
        <p className="copy" style={{ fontSize: 15 }}>Having trouble loading the form? <a href="https://yousail.paperform.co/">Open the contact form directly</a>.</p>
      </div>
    </section>
    <Script src="https://paperform.co/__embed.min.js" strategy="afterInteractive" />
  </>;
}
