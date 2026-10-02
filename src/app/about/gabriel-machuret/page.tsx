import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gabriel Machuret | Founder of SailingSchools.com.au',
  description: 'Meet Gabriel Machuret, founder of SailingSchools.com.au and YouSail: marketer, author and sailor in the making, based in Merimbula.',
  alternates: { canonical: '/about/gabriel-machuret/' },
};

export default function FounderPage() {
  return <>
    <JsonLd nodes={[{
      '@context': 'https://schema.org', '@type': 'ProfilePage',
      '@id': absoluteUrl('/about/gabriel-machuret/#profile'),
      url: absoluteUrl('/about/gabriel-machuret/'),
      name: 'Gabriel Machuret — founder of SailingSchools.com.au',
      mainEntity: {
        '@type': 'Person', '@id': absoluteUrl('/about/gabriel-machuret/#person'),
        name: 'Gabriel Machuret', jobTitle: 'Founder of SailingSchools.com.au',
        description: 'Marketer, author and founder of SailingSchools.com.au and YouSail.',
        email: 'gabriel@yousail.com.au',
        url: absoluteUrl('/about/gabriel-machuret/'),
      },
    }]} />
    <section className="hero short"><div className="wrap hero-in"><div>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About us', href: '/about/' }, { name: 'Gabriel Machuret' }]} />
      <span className="kicker">Meet the founder</span>
      <h1>Gabriel <em>Machuret</em></h1>
      <p className="sub">Marketer. Author. Sailor in the making. Building useful websites around the life I want to live.</p>
    </div></div></section>
    <section className="sec"><article className="wrap" style={{ maxWidth: 760 }}>
      <p className="copy">I’m Gabriel, the creator of SailingSchools.com.au and <a href="https://yousail.com.au/">YouSail</a>.</p>
      <h2 className="h3">From marketing to sailing</h2>
      <p className="copy">My background is marketing. I’ve spent more than a decade in SEO and app store optimisation, and I was one of the first people to treat ASO as its own discipline. In 2013 I launched the first ASO course on Udemy, then wrote one of the first books on the subject, the ASO Bible, followed by ASO Ninja. More than 10,000 students have been through my courses.</p>
      <p className="copy">Along the way I ran a marketing agency and worked with companies like Red Bull, Disney, EA Games, FreshBooks, PBS and Xerox. I’ve helped more than 500 developers and app companies get found, and spoken at conferences in London, Singapore, China and Thailand. I also bought an ASO company, Appmind, which was later acquired by Mobile Action, where I stayed on as a consultant and ambassador.</p>
      <p className="copy">Not everything I write is about marketing. Zero Excuses is my book on how to live a beautiful life. The Lazy Bastard is a productivity guide for procrastinators.</p>
      <p className="copy">I also have a habit. I build websites around the life I want to live. When I worked as a diving instructor, I built diving websites. Now it’s sailing.</p>
      <h2 className="h3" style={{ marginTop: 44 }}>Why SailingSchools.com.au?</h2>
      <p className="copy">My partner Kristy and I are working towards buying a yacht, moving aboard and sailing Australia and the Pacific. Plan a life aboard and one question turns up fast: where do you learn the skills to make it happen?</p>
      <p className="copy">Finding a sailing school meant sorting through course names, qualifications and different ways to get started. The answers were scattered across school websites, forums and Facebook groups. So I did what I know how to do. I collected them, organised them and put them online.</p>
      <p className="copy">That became SailingSchools.com.au. It sits alongside YouSail and the rest of our sailing network: Sailing Courses, Sailing Clubs, Top Marinas, Top Charters and Buy Sails.</p>
      <p className="copy">I’m not an expert sailor, and I haven’t trained at every sailing school in Australia. What I’m good at is finding information and making it easy to use. The school knowledge on this site comes from the people who run them and teach there, which is why we interview school teams directly.</p>
      <p className="copy">Moving onto a yacht is me running out of excuses.</p>
      <h2 className="h3" style={{ marginTop: 44 }}>Let’s talk boats</h2>
      <p className="copy">I’m based in Merimbula, on the NSW South Coast. If you run a sailing school, represent a marine brand, or just want to talk boats, email me at <a href="mailto:gabriel@yousail.com.au">gabriel@yousail.com.au</a>.</p>
      <p className="copy">You can follow the full story at <a href="https://yousail.com.au/">yousail.com.au</a>.</p>
      <Link className="pill pill-sky" href="/about/">More about SailingSchools.com.au →</Link>
    </article></section>
  </>;
}
