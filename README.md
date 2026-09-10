# SailingSchools.com.au

Australia's independent guide to sailing schools, sailing courses and sailing qualifications.

A Next.js (App Router) implementation of the "Coastal" design — navy header, orange calls to
action, cream panels, Plus Jakarta Sans body with a Playfair Display serif voice.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

Node 18.18+ is required (Next.js 15).

## Deploying

The app is a stock Next.js project and deploys to Vercel with no configuration: import the
repository and accept the detected framework preset. Every route below is statically prerendered
at build time, so the site ships as static output with one small client bundle for the course
finder.

## Routes

URLs follow the architecture in [`content-guide.md`](./content-guide.md): `/courses/` is
reserved for intent pages, while each training body gets its own hub (`/rya/`, and in future
`/iyt/`, `/asa/`, `/australian-sailing/`) holding that body's courses. Every path carries a
trailing slash.

| Route | Page |
| --- | --- |
| `/` | Home |
| `/find-a-course/` | Three-question course finder (client-side, no account or email capture) |
| `/pathways/complete-beginner/` | Complete-beginner pathway — the three routes in |
| `/learn/boat-licence/` | Boat licence comparison, all eight jurisdictions |
| `/learn/boat-licence-[state]/` | 8 state licence pages, from `src/lib/licences.ts` |
| `/rya/[slug]/`, `/iyt/[slug]/`, `/asa/[slug]/`, `/australian-sailing/[slug]/` | 38 scheme course pages, from `src/lib/scheme-courses.ts` |
| `/faq/` | FAQ index — 46 questions |
| `/faq/[slug]/` | 12 questions answered in full, from `src/lib/faq.ts` |
| `/sitemap/` | HTML site map |
| `/privacy-policy/`, `/terms-and-conditions/` | Legal |
| `/courses/` | Intent course index, grouped by what you want to learn |
| `/courses/[slug]/` | 22 intent course guides, generated from `src/lib/courses.ts` |
| `/australian-sailing/` | Australian Sailing hub — Tackers, OutThere, dinghy, keelboat |
| `/rya/` | RYA hub |
| `/iyt/` | IYT hub |
| `/asa/` | American Sailing hub |
| `/rya/competent-crew/` | Course detail |
| `/qualifications/rya-vs-iyt-vs-asa/` | Scheme comparison |
| `/sailing-schools/` | Schools index |
| `/sailing-schools/[state]/` | State directory — 6 states, generated from `src/lib/states.ts` |
| `/sailing-schools/[state]/[city]/` | 7 city and region pages, from `src/lib/cities.ts` |
| `/schools/harbourline-sailing-school/` | School profile (a sample profile; Harbourline is fictional) |

`src/lib/courses.ts` holds the intent course guides as ordered content blocks (`para`, `list`,
`flow`), so a lead-in line stays attached to the list it introduces and one template renders all
22. Adding a course is a record, not a page.

`src/lib/licences.ts` holds recreational boat licence rules per state and territory. These were
checked against each authority in September 2026 and every record carries that date and a link
to the authority — licensing changes, and the pages say so.

### School identity marks

We hold no school logos and no school website URLs, so `SchoolMark` renders a monogram from
the school's initials instead of an empty box. The monogram is deliberately **ours, not
theirs**: one typeface and a restrained range of the site's own palette, picked
deterministically from the name, so a directory grid reads as one system and nothing implies
we are showing a school's real branding.

`School.logo` and `School.website` exist for when real logos are licensed. Only set `logo`
where the school has given permission or the use has been checked — never a file fetched
from a domain guessed from the school's name.

### Content data

`src/lib/schools.ts` and `src/lib/states.ts` hold the directory. School records carry region,
accreditation and course mix **only where a profile has been verified** — the rest are listed by
name alone rather than guessed, because publishing the wrong accreditation for a real business is
worse than saying the profile is still being checked. State pages render from these records, so
adding a school is a data edit, not a new page.

Only states with schools in the directory get a page. The Northern Territory and the ACT appear in
the architecture but have no listed schools, so they are deliberately not published — an empty
location page is a doorway page.

The URL scheme follows the site architecture in [`content-guide.md`](./content-guide.md), which is
the editorial source for the remaining state, region, course and pathway pages.

## Layout of the code

```
src/
├── app/
│   ├── layout.tsx          # shell: fonts, nav, footer, site metadata
│   ├── site.css            # the whole design system — one stylesheet, no CSS framework
│   ├── icon.png            # favicon
│   └── <route>/page.tsx    # one file per page
└── components/
    ├── SiteNav.tsx         # header, top bar, mobile menu (client component)
    ├── SiteFooter.tsx
    └── ImageSlot.tsx       # photo slot — see below
public/assets/              # logos
```

Fonts (`next/font/google`) and the Phosphor icon set (`@phosphor-icons/web`) are self-hosted, so
no stylesheet or font is fetched from a CDN at runtime.

### Photography

The design hands over with the photography still to come. `ImageSlot` renders the brief for the
photograph that belongs in each slot, so pages read as finished layouts until the images arrive:

```tsx
<ImageSlot placeholder="Drop a photograph — Sydney Harbour from the water" />
```

Drop a file into `public/` and pass it as `src` to fill the slot — the placeholder text is then
used as the alt text:

```tsx
<ImageSlot src="/photos/sydney-harbour.jpg" placeholder="Sydney Harbour from the water" />
```

## Content status

The copy is the editorial content from the design. Prices are deliberately unset (`$—`) and
carry the date they were checked — the site's rule is that a price is never shown undated. The
school lists, course counts and the Harbourline profile are the design's sample data and need
verifying against the schools before launch.

## Design system

`src/app/site.css` carries the whole thing — no CSS framework. Tokens at the top:

- **Type** is a rem-based scale where tracking is size-specific: display text sets tight
  (`-0.032em`), small text slightly open (`+0.004em`). Sizes are rem so the browser's
  text-size setting still works — body text was previously locked to 16px and ignored it.
- **Motion** is one decelerating curve (`--ease`) at three durations. Press feedback is
  `--t-press` (110ms) because a control that waits for release feels slower than it is.
  Nothing on the site animates on scroll; motion only ever answers a user action.
- **Elevation** is a three-step scale (`--e1`–`--e3`) rather than one shadow on everything,
  so a resting card, a lifted card and floating chrome are distinguishable.

The header is sticky and translucent (navy at 82% with a backdrop blur), with a
`@supports` fallback to solid navy. That is the one material gesture the site makes;
everything else stays quiet.

### Night sailing (dark theme)

Not an inversion — a chart table under a red night light. Grounds go deep and slightly warm
rather than blue-black, the accent loses its daylight glare, and text is a warm off-white,
because pure white on black is what makes a screen painful to read in the dark. The
announcement bar drops its accent flood-fill and keeps the accent as text only: at full
strength it was the brightest thing on the page.

Three states — light, dark, and follow-the-system — cycled by the header control and stored
in `localStorage`. An inline script in the document head applies the stored choice before
first paint, so the page never flashes the wrong theme.

Surfaces use `--surface`, not `--white`: the two were the same token, which made a dark
theme impossible until they were separated.

`prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast: more` are
all handled. Under reduced motion, transforms are removed but colour and opacity changes
stay, because those carry meaning.

Column ratios use modifier classes (`.split.lean-left`, `.facts.two`) declared inside a
`min-width` query, never inline `grid-template-columns` — an inline style cannot be
overridden by a media query, which was forcing two columns onto 320px screens.
Wide tables go in `.scroll-x`; the page body never scrolls sideways.

Micro-typography: kerning and common ligatures on, hanging punctuation where supported,
tabular figures anywhere numbers form a column, and non-breaking spaces between a figure and
its unit so "4.5 kW" can never wrap to strand the unit.

## SEO

`src/lib/site.ts` holds the canonical origin and the route registry. Add each new page to
`routes` there and it appears in the sitemap automatically.

- `/sitemap.xml` and `/robots.txt` are generated from that registry (`src/app/sitemap.ts`,
  `src/app/robots.ts`).
- Every page declares its own canonical URL via `alternates.canonical`.
- Structured data comes from `src/lib/schema.ts`, rendered by `<JsonLd>`. `<Breadcrumbs>`
  emits the visible trail and its `BreadcrumbList` from one list, so the two cannot diverge.
  Pages carry `Organization`/`WebSite` (home), `Course`, `ItemList` and
  `EducationalOrganization` as appropriate. No `CourseInstance` dates, prices or
  `aggregateRating` are emitted — we hold none, and inventing them would be a lie in
  machine-readable form.
- Preview deployments serve `Disallow: /` so they can never be indexed in place of the
  production site.
- `robots.txt` names and allows the major AI crawlers explicitly rather than leaving them to
  the wildcard rule, and `/llms.txt` gives assistants a Markdown map of the site plus the
  editorial conventions (dated prices, verified-only claims) that should survive quotation.
- The route list is de-duplicated by path, so replacing a hand-written entry with a
  generated one cannot list a page twice.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project (for example `https://www.sailingschools.com.au`)
once the domain is attached — it overrides the default origin used for canonicals and the
sitemap.
