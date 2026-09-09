import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="sec last" style={{ paddingTop: 96 }}>
      <div className="wrap">
        <span className="kicker">404</span>
        <h1 className="h2">That page is not on the chart</h1>
        <p className="copy">
          The page you asked for does not exist — it may have moved, or the link may be out of date.
          The three-question course finder is the quickest way back on course.
        </p>
        <div className="cta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
          <Link className="pill pill-orange" href="/find-a-course">
            Find a course
          </Link>
          <Link className="pill pill-outline" href="/">
            Back to the home page
          </Link>
        </div>
      </div>
    </section>
  );
}
