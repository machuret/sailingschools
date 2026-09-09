import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { webPage } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy | SailingSchools.com.au',
  description:
    'How SailingSchools.com.au handles personal information: what we collect, why, who we share it with, and how to access, correct or delete it.',
  alternates: { canonical: '/privacy-policy/' },
};

const UPDATED = 'September 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Privacy Policy',
            description: 'How SailingSchools.com.au collects, uses and protects personal information.',
            url: '/privacy-policy/',
          }),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Privacy policy' }]} />
          <h1 className="h2" style={{ fontSize: 'clamp(32px,3.6vw,48px)', marginTop: 18 }}>
            Privacy Policy
          </h1>
          <p className="copy">
            <b>Last updated:</b> {UPDATED}
          </p>

          <div style={{ maxWidth: '68ch' }}>
            <h2 className="h3" style={{ marginTop: 44 }}>
              Who we are
            </h2>
            <p className="copy">
              SailingSchools.com.au is an independent editorial guide to sailing schools, sailing
              courses and sailing qualifications in Australia. We are not affiliated with Australian
              Sailing, the Royal Yachting Association, International Yacht Training Worldwide,
              American Sailing, AMSA or any sailing school.
            </p>
            <p className="copy">
              This policy explains how we handle personal information, consistent with the Privacy
              Act 1988 (Cth) and the Australian Privacy Principles.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              What we collect
            </h2>
            <p className="copy">
              We collect as little as we can. Specifically:
            </p>
            <ul className="copy" style={{ paddingLeft: 22 }}>
              <li style={{ padding: '5px 0' }}>
                <b>Information you give us.</b> If you subscribe to the course digest, we collect the
                name and email address you enter. If you contact us or submit a school update, we
                collect whatever you choose to send.
              </li>
              <li style={{ padding: '5px 0' }}>
                <b>Technical information.</b> Standard server and analytics data such as pages
                requested, approximate location derived from IP address, referring page, browser and
                device type.
              </li>
            </ul>
            <p className="copy">
              The course finder runs entirely in your browser. Your answers are not sent to us, not
              stored, and not associated with you. There is no account to create and no email
              required to use it.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Why we collect it
            </h2>
            <p className="copy">
              To send the digest if you asked for it, to answer your message, to verify and correct
              school listings, and to understand which pages are useful so we can improve them. We do
              not sell personal information, and we do not sell leads to schools.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Cookies and analytics
            </h2>
            <p className="copy">
              We use cookies and similar technologies only where they are needed for the site to work
              or to measure aggregate usage. Analytics data is used in aggregate to see which guides
              people read. You can block or delete cookies in your browser; the site will continue to
              work without them.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Who we share it with
            </h2>
            <p className="copy">
              We share personal information only with service providers who help us run the site —
              hosting, email delivery and analytics — and only so far as they need it to provide that
              service. Some of these providers process data outside Australia. We may also disclose
              information where we are required to by law.
            </p>
            <p className="copy">
              We do not pass your details to sailing schools. If you contact a school through a link
              on this site, you are dealing with that school directly and under their privacy policy,
              not ours.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              How long we keep it
            </h2>
            <p className="copy">
              Digest subscriptions are kept until you unsubscribe. Correspondence is kept while it is
              useful for the purpose you sent it, and then deleted. Aggregate analytics data is
              retained in a form that does not identify individuals.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Access, correction and complaints
            </h2>
            <p className="copy">
              You can ask us what personal information we hold about you, ask us to correct it, or
              ask us to delete it. Email{' '}
              <a href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a> and we
              will respond within a reasonable period.
            </p>
            <p className="copy">
              Every digest email includes an unsubscribe link, and unsubscribing takes effect
              immediately.
            </p>
            <p className="copy">
              If you are not satisfied with how we have handled a privacy matter, you can complain to
              the Office of the Australian Information Commissioner at oaic.gov.au.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Security
            </h2>
            <p className="copy">
              The site is served over HTTPS and we take reasonable steps to protect the information
              we hold. No transmission over the internet is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Changes
            </h2>
            <p className="copy">
              If we change this policy we will update the date at the top of this page. Material
              changes will be noted here.
            </p>
          </div>

          <div className="note-box" style={{ marginTop: 48 }}>
            <p className="copy">
              Questions about this policy?{' '}
              <a href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a> · See also
              our <Link href="/terms-and-conditions/">terms and conditions</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
