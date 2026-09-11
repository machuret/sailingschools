import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { faqPage, webPage } from '@/lib/schema';
import { schools } from '@/lib/schools';
import { routes } from '@/lib/site';
import { licenceChecked } from '@/lib/licences';

export const metadata: Metadata = {
  title: 'About SailingSchools.com.au | How This Site Works',
  description:
    'How this site lists sailing schools — what gets verified, what gets left blank, why no price appears undated, and why schools cannot pay for placement.',
  alternates: { canonical: '/about/' },
};

const FAQS = [
  {
    question: 'Can a school pay to be listed higher?',
    answer:
      'No. There is no paid placement, no sponsored listing and no advertising on this site. Order on a directory page is determined by the data, not by money, and no school has ever been charged for anything.',
  },
  {
    question: 'Are you affiliated with the RYA, IYT, American Sailing, Australian Sailing or AMSA?',
    answer:
      'No. This site is independent of all of them. It describes their qualifications; it does not deliver, endorse or represent them, and none of them have any editorial input.',
  },
  {
    question: 'Why do so many schools show no price?',
    answer:
      'Because no verified price is held for them. A price is published here only with the date it was checked against the school. A dash means we hold no figure, not that the course is free or cheap.',
  },
  {
    question: 'My school’s listing is wrong. How do I fix it?',
    answer:
      'Email hello@sailingschools.com.au. Corrections from the school itself are the most reliable source we have and are acted on quickly — including removal, if you would rather not be listed.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        nodes={[
          webPage({
            name: 'About SailingSchools.com.au',
            description: metadata.description as string,
            url: '/about/',
          }),
          faqPage(FAQS),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder="Drop a photograph — a chart, dividers and a logbook on a saloon table" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About' }]} />
            <h1>
              How this site <em>works</em>
            </h1>
            <p className="sub">
              An independent guide to learning to sail in Australia. Nobody pays to be here, and
              nothing is published that has not been checked — which is why a lot of fields on this
              site are deliberately empty.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/sailing-schools/">
                Browse the directory
              </Link>
              <a className="pill pill-ghost" href="mailto:hello@sailingschools.com.au">
                Send a correction
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <dl className="facts two">
            <div className="fact">
              <dt>Pages</dt>
              <dd>{routes.length}, every one in the sitemap</dd>
            </div>
            <div className="fact">
              <dt>Schools listed</dt>
              <dd>{schools.length}, each checked against its own site</dd>
            </div>
            <div className="fact">
              <dt>Paid placements</dt>
              <dd>None. There is no mechanism for one.</dd>
            </div>
            <div className="fact">
              <dt>Regulatory facts checked</dt>
              <dd>{licenceChecked}, and dated on the page</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 className="h3" style={{ marginTop: 0 }}>
            Why this exists
          </h2>
          <p className="copy">
            Australia has no single register of sailing schools. Learning to sail here means
            working out the difference between four training schemes, a state boat licence that has
            nothing to do with any of them, and a commercial certification system that sits outside
            all of it — mostly from brochures written by the people selling the courses.
          </p>
          <p className="copy">
            This site is an attempt at the other thing: one place that explains what each
            qualification is, says plainly what it is not, and lists who teaches near you without
            taking a cut.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            What gets verified
          </h2>
          <p className="copy">
            Every school in the directory has been checked against its own website. Where a detail
            was confirmed — the training base, the accreditation, the course types — it appears.
            Where it could not be confirmed, the field is left empty and the school is listed by
            name alone.
          </p>
          <p className="copy">
            That is deliberate. Publishing the wrong accreditation for a real business is worse
            than admitting a profile is incomplete, and a directory that fills gaps by inference is
            a directory that is quietly wrong about somebody.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            The rules we hold ourselves to
          </h2>
          <ul className="bullets">
            <li>
              A price is never published without the date it was checked. A dash means no verified
              figure is held — not that the course is cheap.
            </li>
            <li>
              &ldquo;This course exists&rdquo; and &ldquo;an Australian school currently teaches
              it&rdquo; are stated separately, because they are different claims.
            </li>
            <li>
              Every qualification page says what the qualification is <em>not</em>. Brochures never
              do, and it is where most expensive mistakes come from.
            </li>
            <li>
              Regulatory facts — boat licences, AMSA certificates — carry the date they were checked
              and a link to the authority, because they change.
            </li>
            <li>
              Where the honest answer is &ldquo;ask the operator, there is no national rule&rdquo;,
              that is the answer given.
            </li>
            <li>
              Thin pages are not published. A definition that runs to two sentences belongs in the
              glossary, not on a URL of its own.
            </li>
          </ul>

          <h2 className="h3" style={{ marginTop: 44 }}>
            Independence, concretely
          </h2>
          <p className="copy">
            There is no advertising, no sponsored placement, no affiliate link and no referral fee
            anywhere on this site. No school has been charged for anything, and there is no
            mechanism by which one could be. If that ever changes, it will be disclosed on this page
            before it appears anywhere else.
          </p>
          <p className="copy">
            We are not affiliated with Australian Sailing, the RYA, IYT, American Sailing or AMSA.
            This site describes their qualifications; it does not deliver, endorse or represent
            them.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            Corrections
          </h2>
          <p className="copy">
            If something here is wrong about your school — or about anything else — email{' '}
            <a href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a>. A
            correction from the school itself is the best source available and is acted on quickly.
            That includes removal: if you would rather not be listed, say so and you will not be.
          </p>
          <p className="copy">
            Schools are also welcome to send a verified course list and current prices. Both get
            published with the date they were supplied.
          </p>

          <h2 className="h3" style={{ marginTop: 44 }}>
            What this site is not
          </h2>
          <p className="copy">
            It is not a booking agent, and it takes no bookings. It is not a regulator, and nothing
            here is legal or safety advice — for boat licensing, check your state authority, and for
            commercial certification, check AMSA. It is not a directory of yacht clubs: a school can
            operate from a club and still be listed, but a club that runs an occasional course is
            not a sailing school.
          </p>

          <div className="qa" style={{ marginTop: 48 }}>
            {FAQS.map((f) => (
              <div className="qa-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Read next</span>
              <h2 className="h2">Related</h2>
            </div>
          </div>
          <div className="rows">
            <Link className="row" href="/faq/">
              <div>
                <h3>Questions and answers</h3>
                <p>Forty-six questions about learning to sail in Australia</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/sitemap/">
              <div>
                <h3>Every page on the site</h3>
                <p>The full site map, grouped by what it covers</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/terms-and-conditions/">
              <div>
                <h3>Terms and conditions</h3>
                <p>The formal version of most of the above</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Run a sailing school?</h2>
            <p>
              Send your course list, accreditation and current prices and they go up with the date
              you supplied them. Corrections and removals are acted on just as quickly.
            </p>
          </div>
          <div className="btns">
            <a className="pill pill-orange" href="mailto:hello@sailingschools.com.au">
              Email us
            </a>
            <Link className="pill pill-ghost" href="/sailing-schools/">
              See the directory
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
