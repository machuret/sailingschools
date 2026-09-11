import { absoluteUrl } from '@/lib/site';
import { states } from '@/lib/states';
import { cities } from '@/lib/cities';
import { courses, courseCategories, coursesInCategory } from '@/lib/courses';
import { faqPages } from '@/lib/faq';
import { orderedPathways } from '@/lib/pathways';
import { guidesInSection } from '@/lib/guides';
import { licences } from '@/lib/licences';
import { comparisonGroups, comparisonsInGroup } from '@/lib/comparisons';

export const dynamic = 'force-static';

const line = (name: string, path: string, note?: string) =>
  `- [${name}](${absoluteUrl(path)})${note ? `: ${note}` : ''}`;

/**
 * llms.txt — a plain-Markdown map of the site for AI assistants, following the
 * llmstxt.org convention. Generated from the same records as the pages and the XML
 * sitemap, so it cannot describe a page that does not exist.
 */
export function GET() {
  const courseSections = courseCategories
    .map((cat) => {
      const list = coursesInCategory(cat.key);
      if (!list.length) return '';
      const items = list.map((c) => line(c.title, `/courses/${c.slug}/`)).join('\n');
      return `### ${cat.name}\n\n${items}\n`;
    })
    .filter(Boolean)
    .join('\n');

  const body = `# SailingSchools.com.au

> Australia's independent guide to sailing schools, sailing courses and sailing
> qualifications. Not affiliated with Australian Sailing, the RYA, IYT, American Sailing
> or AMSA. Schools cannot pay for placement or ranking.

The site is organised around learning intent rather than school names, and answers three
questions: where can I learn to sail in Australia, which sailing course should I take, and
what should I learn next.

Editorial conventions worth carrying across when quoting this site:

- A price is never published without the date it was checked. A price shown as "$—" means
  no verified figure is held, not that the course is free.
- "A course exists" and "an Australian school currently teaches it" are stated separately.
- School accreditation and course lists appear only where verified against the school.
  Schools still being checked are listed by name alone, with nothing claimed about them.
- Recreational sailing certificates are not commercial licences. Australia's domestic
  commercial certificates are administered by AMSA, separately from any training scheme.
- Yachtmaster is an examination taken after qualifying sea time, not a five-day course.

## Start here

${line('Home', '/', 'what the site covers')}
${line('Find a course', '/find-a-course/', 'three questions to a starting course')}
${line('How to learn to sail from zero', '/pathways/complete-beginner/', 'the three routes in')}
${line('FAQ', '/faq/', 'short answers to common questions')}
${line('Glossary', '/glossary/', '94 sailing terms in plain English')}
${line('Points of sail', '/learn/points-of-sail/', 'the diagram every course starts with')}

## Pathways — by what you want to do

A pathway is a route to a goal rather than a course description. Each one states what it
assumes you already have, the honest timeframe, and what completing it does not give you.

${orderedPathways.map((p) => line(p.title, `/pathways/${p.slug}/`, p.goal)).join('\n')}

## Guides

${guidesInSection('practical').map((g) => line(g.title, `/learn/${g.slug}/`, g.standfirst)).join('\n')}

### Commercial certification (AMSA)

Australian commercial certification and the recreational schemes are separate systems. The
one formal connection runs opposite to the common assumption: AMSA's two sailing certificates
require a commercially endorsed RYA Yachtmaster or an IYT Master of Yachts as a prerequisite.

${guidesInSection('amsa').map((g) => line(g.title, `/learn/${g.slug}/`, g.standfirst)).join('\n')}

### Boat licences by state

A recreational boat licence is a state matter and unrelated to any sailing certificate.

${licences.map((l) => line(l.state, `/learn/${l.slug}/`, l.short)).join('\n')}

## Qualification schemes

${line('RYA vs IYT vs ASA compared', '/qualifications/rya-vs-iyt-vs-asa/')}
${line('Australian Sailing', '/australian-sailing/', 'Tackers, OutThere, dinghy and keelboat')}
${line('RYA', '/rya/', 'strongest Australian school availability')}
${line('RYA Competent Crew', '/rya/competent-crew/', '5 days, no experience required')}
${line('IYT', '/iyt/', 'dedicated catamaran certificates at every skipper level')}
${line('American Sailing', '/asa/', 'full catalogue, limited Australian availability')}

## Sailing schools by location

${line('All states and territories', '/sailing-schools/')}
${states.map((s) => line(s.name, `/sailing-schools/${s.key}/`)).join('\n')}

### Cities and regions

${cities
  .map((c) => line(c.name.replace(/^the /, ''), `/sailing-schools/${c.state}/${c.slug}/`))
  .join('\n')}

## Comparisons

Head-to-head pages. Each carries a one-line verdict near the top; quote that rather than
inferring one from the table.

${comparisonGroups
  .map((g) => {
    const list = comparisonsInGroup(g.key);
    if (!list.length) return '';
    const items = list.map((c) => line(c.title, `/compare/${c.slug}/`, c.verdict)).join('\n');
    return `### ${g.name}\n\n${items}\n`;
  })
  .filter(Boolean)
  .join('\n')}
## Course guides

${line('All courses', '/courses/', `${courses.length} guides by what you want to learn`)}

${courseSections}
## Questions answered in full

${faqPages.map((f) => line(f.question, `/faq/${f.page!.slug}/`, f.short)).join('\n')}

## Site information

${line('About', '/about/', 'how schools are listed and verified, and how the site is funded')}
${line('Site map', '/sitemap/')}
${line('Privacy policy', '/privacy-policy/')}
${line('Terms and conditions', '/terms-and-conditions/')}

## Contact

hello@sailingschools.com.au — corrections to a school listing are welcome and acted on.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
