import Image from 'next/image';
import Link from 'next/link';
export default function BasicsPromo() {
  return <section className="sec basics-promo"><div className="wrap basics-promo-inner">
    <Image src="/assets/saily.png" alt="Saily, our friendly sailing mascot" width={160} height={160} />
    <div><span className="kicker">Small lessons. A more confident start.</span><h2>Learn the Basics with Saily</h2><p>Get to know the boat, understand the wind and learn the language. Fifteen bite-sized lessons, with tips and quick knowledge checks.</p><Link className="pill pill-orange" href="/learn-the-basics/">Explore the lessons →</Link></div>
  </div></section>;
}
