import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { webPage } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About us | SailingSchools.com.au',
  description: 'Meet Gabriel and Kristy, the couple behind SailingSchools.com.au and YouSail, and discover why we built a guide to learning to sail in Australia.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return <>
    <JsonLd nodes={[webPage({ name: 'About SailingSchools.com.au', description: metadata.description as string, url: '/about/' })]} />
    <section className="hero short">
      <div className="wrap hero-in"><div>
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About us' }]} />
        <span className="kicker">Two sailors in the making</span>
        <h1>About <em>us</em></h1>
        <p className="sub">The sailing school guide we needed ourselves. Built by Gabriel and Kristy, as we learn our way towards a life aboard.</p>
        <div className="cta"><Link className="pill pill-orange" href="/about/gabriel-machuret/">Meet Gabriel, our founder</Link><a className="pill pill-ghost" href="mailto:gabriel@yousail.com.au">Get in touch</a></div>
      </div></div>
    </section>
    <section className="sec"><article className="wrap" style={{ maxWidth: 760 }}>
      <h2 className="h3">Why we built SailingSchools.com.au</h2>
      <p className="copy">We’re Gabriel and Kristy, the couple behind SailingSchools.com.au and <a href="https://yousail.com.au/">YouSail</a>.</p>
      <figure style={{ margin: '32px auto 40px', maxWidth: 440 }}>
        <Image
          src="/images/sailing/about-our-sailing-journey.webp"
          alt="Two people aboard a sailing boat beneath orange sails at sunset."
          width={960}
          height={1279}
          sizes="(max-width: 520px) calc(100vw - 40px), 440px"
          style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 20 }}
        />
        <figcaption className="copy" style={{ marginTop: 12, fontSize: 15, textAlign: 'center' }}>Our journey towards a life aboard.</figcaption>
      </figure>
      <p className="copy">Our dream is simple. Buy a sailing yacht, move aboard and see where the wind takes us. Australia first. Then the Pacific. Maybe much further.</p>
      <p className="copy">We’re not there yet. We’re still learning, taking courses, spending time on boats and asking a lot of questions.</p>
      <p className="copy">One of those questions kept coming back: where do we learn to sail?</p>
      <p className="copy">Which schools welcome complete beginners? What is the difference between the qualifications? Should we start on a dinghy or a yacht? The answers were scattered across school websites, forums and Facebook groups. We wanted one place that brought Australian sailing schools together and made the options easier to understand. So we built it.</p>
      <p className="copy">That’s SailingSchools.com.au. It’s the sailing school guide we needed ourselves, built by two sailors in the making.</p>
      <p className="copy">We’re not going to pretend we’ve trained at every sailing school in Australia. We haven’t. We’re learning as we go, and sharing what we find. The real knowledge comes from the school teams and instructors we interview.</p>
      <p className="copy">If you run a sailing school or a marine brand and like what we’re building, we’d love to talk. Email <a href="mailto:gabriel@yousail.com.au">gabriel@yousail.com.au</a>.</p>
      <p className="copy">Somewhere out there is the yacht that will become our home. Every lesson brings us a little closer.</p>
      <p className="copy">For everything else in Australian sailing, from schools and clubs to charters and brokers, head to <a href="https://yousail.com.au/">yousail.com.au</a>.</p>
      <p className="copy">See you on the water.<br />Gabriel and Kristy</p>
      <h2 className="h3" style={{ marginTop: 44 }}>Meet the founder</h2>
      <p className="copy">Gabriel Machuret brings a background in marketing, SEO and app store optimisation to a very personal project: making sailing information easier to find and use.</p>
      <Link className="pill pill-orange" href="/about/gabriel-machuret/">Read Gabriel’s story →</Link>
      <h2 className="h3" style={{ marginTop: 44 }}>How we put the guide together</h2>
      <p className="copy">School profiles bring together information from YouSail, school websites and direct responses from school teams. Verification status is shown on profiles so you can see where a detail still needs confirmation. Our in-depth interviews give schools room to explain their approach in their own words.</p>
      <p className="copy">Course and qualification guides help you understand the options before speaking with a school. Check current course availability, entry requirements and arrangements directly with the operator before booking.</p>
      <p className="copy">This site is independent of Australian Sailing, the RYA, IYT, American Sailing and AMSA. We explain qualifications; we do not award them. Our introductory lessons are preparation for practical instruction, not a replacement for it.</p>
      <h2 className="h3" style={{ marginTop: 44 }}>Corrections and school interviews</h2>
      <p className="copy">Is something out of date, or would you like to introduce your school? Email <a href="mailto:gabriel@yousail.com.au">gabriel@yousail.com.au</a> with the details and a source we can check.</p>
      <div className="cta"><Link className="pill pill-orange" href="/in-depth/">Meet the schools</Link><Link className="pill pill-sky" href="/learn-the-basics/">Learn with Saily</Link></div>
      <p className="copy" style={{ marginTop: 32 }}>Follow our wider sailing story at <a href="https://yousail.com.au/">YouSail</a>.</p>
    </article></section>
  </>;
}
