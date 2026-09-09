import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { webPage } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SailingSchools.com.au',
  description:
    'Terms of use for SailingSchools.com.au — what our listings are and are not, the limits of what we publish, and how to have a listing corrected.',
  alternates: { canonical: '/terms-and-conditions/' },
};

const UPDATED = 'September 2026';

export default function TermsPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'Terms and Conditions',
            description: 'Terms of use for SailingSchools.com.au.',
            url: '/terms-and-conditions/',
          }),
        ]}
      />

      <section className="sec" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Breadcrumbs dark items={[{ name: 'Home', href: '/' }, { name: 'Terms & conditions' }]} />
          <h1 className="h2" style={{ fontSize: 'clamp(32px,3.6vw,48px)', marginTop: 18 }}>
            Terms &amp; Conditions
          </h1>
          <p className="copy">
            <b>Last updated:</b> {UPDATED}
          </p>

          <div style={{ maxWidth: '68ch' }}>
            <p className="copy" style={{ marginTop: 32 }}>
              By using SailingSchools.com.au you agree to these terms. If you do not agree with them,
              please do not use the site.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              What this site is
            </h2>
            <p className="copy">
              SailingSchools.com.au is an independent editorial guide. We describe sailing courses,
              qualifications and training providers so that people can work out what to learn and
              where. We are not a booking agent, a broker, a training provider or a regulator, and we
              are not affiliated with Australian Sailing, the RYA, IYT, American Sailing, AMSA or any
              school listed here.
            </p>
            <p className="copy">
              A listing is not an endorsement, a recommendation or a warranty about a school. Schools
              cannot pay to be listed, to rank higher, or to have criticism removed.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Accuracy, and its limits
            </h2>
            <p className="copy">
              We check accreditation, course lists and prices against the school and publish the date
              each was checked. Even so, this information changes without notice: schools change
              vessels, drop courses, lose or gain accreditation and adjust prices.
            </p>
            <p className="copy">
              Always confirm the current details directly with the school before booking or paying —
              in particular accreditation, the exact vessel, instructor ratio, prerequisites,
              accommodation, meals, exam fees and cancellation policy. Where a price appears as{' '}
              <b>$—</b> it means we do not hold a verified figure, not that the course is free.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Not safety, legal or regulatory advice
            </h2>
            <p className="copy">
              Nothing on this site is safety advice, legal advice, or authoritative guidance on
              licensing or regulation. Sailing carries real risk, and requirements for qualifications,
              radio operator certificates, commercial certification and recreational licences vary by
              jurisdiction and change over time.
            </p>
            <p className="copy">
              Verify anything that matters with the awarding body, with AMSA, or with the relevant
              state authority. Your decisions on the water, and about your own training, are yours.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Your dealings with schools
            </h2>
            <p className="copy">
              Any booking, payment, contract or dispute is between you and the school. We are not a
              party to it, we take no commission on it, and we cannot resolve it. We are not liable
              for the conduct of any school or instructor, or for the quality or safety of any course.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Links to other sites
            </h2>
            <p className="copy">
              We link to schools, awarding bodies and regulators for your convenience. We do not
              control those sites and are not responsible for their content, their accuracy or their
              privacy practices.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Our content
            </h2>
            <p className="copy">
              The text, structure, design and compiled listings on this site are ours and are
              protected by copyright. You are welcome to quote a short extract with a link back. You
              may not copy or scrape the directory wholesale, or republish substantial portions,
              without permission.
            </p>
            <p className="copy">
              School names, scheme names and course names are the trade marks of their owners and are
              used here descriptively.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Liability
            </h2>
            <p className="copy">
              The site is provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law, we
              exclude liability for loss arising from use of the site or reliance on its content.
              Nothing in these terms excludes, restricts or modifies any guarantee, right or remedy
              you have under the Australian Consumer Law that cannot lawfully be excluded.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Corrections and takedowns
            </h2>
            <p className="copy">
              If a listing about your school is wrong, out of date, or should not be there, tell us
              and we will correct or remove it. Email{' '}
              <a href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a> with the
              detail and, where relevant, evidence of current accreditation or pricing.
            </p>

            <h2 className="h3" style={{ marginTop: 40 }}>
              Changes and governing law
            </h2>
            <p className="copy">
              We may update these terms; the date at the top of this page shows when they last
              changed. These terms are governed by the laws of Australia.
            </p>
          </div>

          <div style={{ marginTop: 48 }}>
            <p className="copy">
              See also our <Link href="/privacy-policy/">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
