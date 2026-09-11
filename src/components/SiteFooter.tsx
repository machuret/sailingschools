import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-in">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-white.png" alt="Sailing Schools Australia" />
            <div className="contact">
              <a className="big" href="mailto:hello@sailingschools.com.au">hello@sailingschools.com.au</a>
              Australia&rsquo;s independent guide to sailing schools, sailing courses and sailing
              qualifications.
              <br />
              Editorial research baseline: September 2026.
            </div>
          </div>
          <div>
            <h2>Find your way onto the water</h2>
            <p className="footer-intro">
              Start with three quick questions, then compare the courses and schools that fit your
              experience, preferred boat and sailing goal.
            </p>
            <div className="footer-actions">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find my course
              </Link>
              <Link className="pill pill-ghost" href="/sailing-schools/">
                Browse schools
              </Link>
            </div>
            <div className="cols3">
              <div>
                <h4>Courses</h4>
                <Link href="/courses/">All sailing courses</Link>
                <Link href="/australian-sailing/">Australian Sailing</Link>
                <Link href="/rya/">RYA</Link>
                <Link href="/iyt/">IYT</Link>
                <Link href="/asa/">American Sailing</Link>
                <Link href="/qualifications/rya-vs-iyt-vs-asa/">Compare qualifications</Link>
                <Link href="/compare/">All comparisons</Link>
              </div>
              <div>
                <h4>Schools</h4>
                <Link href="/sailing-schools/new-south-wales/">New South Wales</Link>
                <Link href="/sailing-schools/queensland/">Queensland</Link>
                <Link href="/sailing-schools/victoria/">Victoria</Link>
                <Link href="/sailing-schools/western-australia/">Western Australia</Link>
                <Link href="/sailing-schools/">All states</Link>
                <Link href="/sailing-schools/new-south-wales/sydney/">Sydney</Link>
                <Link href="/sailing-schools/victoria/melbourne/">Melbourne</Link>
              </div>
              <div>
                <h4>Learn</h4>
                <Link href="/faq/">Questions &amp; answers</Link>
                <Link href="/pathways/">Pathways by goal</Link>
                <Link href="/learn/">Guides</Link>
                <Link href="/glossary/">Sailing terms glossary</Link>
                <Link href="/learn/boat-licence/">Do you need a boat licence?</Link>
                <Link href="/learn/sailing-course-costs/">What courses cost</Link>
                <Link href="/pathways/work-on-boats/">Working on boats</Link>
                <Link href="/find-a-course/">Find the right course</Link>
                <Link href="/schools/harbourline-sailing-school/">How a school profile works</Link>
                <a href="mailto:hello@sailingschools.com.au">Update a school</a>
              </div>
            </div>
          </div>
        </div>
        <div className="legal" style={{ marginTop: 48, paddingBottom: 4 }}>
          <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <Link href="/about/">About</Link>
            <Link href="/sitemap/">Site map</Link>
            <Link href="/privacy-policy/">Privacy policy</Link>
            <Link href="/terms-and-conditions/">Terms &amp; conditions</Link>
            <a href="mailto:hello@sailingschools.com.au">Contact</a>
          </span>
        </div>
        <div className="legal" style={{ marginTop: 0, borderTop: 0, paddingTop: 8 }}>
          <span>
            &copy; 2026 SailingSchools.com.au — independent, not affiliated with any training body
            or school.
          </span>
          <span>Australian Sailing · RYA · IYT · American Sailing · AMSA</span>
        </div>
      </div>
    </footer>
  );
}
