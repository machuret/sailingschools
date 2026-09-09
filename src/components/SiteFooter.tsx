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
              <span className="big">hello@sailingschools.com.au</span>
              Australia&rsquo;s independent guide to sailing schools, sailing courses and sailing
              qualifications.
              <br />
              Editorial research baseline: September 2026.
            </div>
          </div>
          <div>
            <h2>Get the monthly course digest:</h2>
            <div className="sub-form">
              <input className="uline" placeholder="Name" aria-label="Name" />
              <input className="uline" placeholder="Email address" aria-label="Email address" />
            </div>
            <div style={{ marginTop: 28 }}>
              <button className="pill pill-orange" type="button">
                Subscribe
              </button>
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
              </div>
              <div>
                <h4>Schools</h4>
                <Link href="/sailing-schools/new-south-wales/">New South Wales</Link>
                <Link href="/sailing-schools/queensland/">Queensland</Link>
                <Link href="/sailing-schools/victoria/">Victoria</Link>
                <Link href="/sailing-schools/western-australia/">Western Australia</Link>
                <Link href="/sailing-schools/">All states</Link>
              </div>
              <div>
                <h4>About</h4>
                <Link href="/sailing-schools/">How we review schools</Link>
                <Link href="/qualifications/rya-vs-iyt-vs-asa/">Accreditation</Link>
                <Link href="/sailing-schools/">Update a school</Link>
                <Link href="/qualifications/rya-vs-iyt-vs-asa/">Glossary</Link>
                <Link href="/find-a-course/">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="legal">
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
