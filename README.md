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
| `/find-a-course/` | Three-question course finder (client-side, nothing stored or sent) |
| `/pathways/` | Goal-based pathway index |
| `/pathways/complete-beginner/` | Complete-beginner pathway — the three routes in |
| `/pathways/[slug]/` | 8 goal pathways, from `src/lib/pathways.ts` |
| `/compare/` | Comparison index |
| `/compare/[slug]/` | 14 head-to-head pages, from `src/lib/comparisons.ts` |
| `/glossary/` | 94 sailing terms, one page, filterable |
| `/learn/` | Guides hub |
| `/learn/points-of-sail/` | The interactive points-of-sail dial |
| `/learn/boat-licence/` | Boat licence comparison, all eight jurisdictions |
| `/learn/boat-licence-[state]/` | 8 state licence pages, from `src/lib/licences.ts` |
| `/learn/[slug]/` | 6 long-form guides — 4 AMSA, cost, duration — from `src/lib/guides.ts` |
| `/rya/[slug]/`, `/iyt/[slug]/`, `/asa/[slug]/`, `/australian-sailing/[slug]/` | 58 scheme course pages, from `src/lib/scheme-courses.ts` |
| `/faq/` | FAQ index — 46 questions |
| `/faq/[slug]/` | 12 questions answered in full, from `src/lib/faq.ts` |
| `/sitemap/` | HTML site map |
| `/privacy-policy/`, `/terms-and-conditions/` | Legal |
| `/courses/` | Intent course index, grouped by what you want to learn |
| `/courses/[slug]/` | 22 intent course guides, generated from `src/lib/courses.ts` |
| `/australian-sailing/`, `/rya/`, `/iyt/`, `/asa/` | Scheme hubs |
| `/rya/competent-crew/` | Course detail |
| `/qualifications/rya-vs-iyt-vs-asa/` | Three-way scheme comparison |
| `/sailing-schools/` | Schools index, with the chart map |
| `/sailing-schools/[state]/` | State directory — 6 states, from `src/lib/states.ts` |
| `/sailing-schools/[state]/[city]/` | 13 city and region pages, from `src/lib/cities.ts` |
| `/sailing-schools/[state]/[city]/[topic]/` | 18 curated city × course pages, from `src/lib/city-courses.ts` |
| `/schools/harbourline-sailing-school/` | School profile (a sample profile; Harbourline is fictional) |

188 pages in all. Every route is registered in `src/lib/site.ts`, which the XML sitemap, the
HTML site map and `llms.txt` all read from — so a page cannot exist without appearing in them,
and none of them can advertise a page that does not exist.

### Three axes, on purpose

The same qualification appears in three places. `/courses/` is an intent guide ("what is this
course"), a scheme hub is an awarding body's catalogue ("what does the RYA give you"), and
`/pathways/` is a route to a goal ("I want to charter — what do I need"). Most readers arrive on
one axis and leave on another.

### Curated, not generated

`/compare/` and the city × course cluster are explicit lists, not cross-products. The obvious
build for the latter is every city times every course from a template; that would produce a lot
of URLs, nothing worth reading, and — page after page — an implication that schools in that city
teach that course, which is not verified. A pair exists only where the local water genuinely
changes what learning that thing is like, and the angle on each is written for that pair.

`src/lib/courses.ts` holds the intent course guides as ordered content blocks (`para`, `list`,
`flow`), so a lead-in line stays attached to the list it introduces and one template renders all
22. Adding a course is a record, not a page.

`src/lib/licences.ts` holds recreational boat licence rules per state and territory. These were
checked against each authority in September 2026 and every record carries that date and a link
to the authority — licensing changes, and the pages say so.

### School identity marks

All 32 schools now carry a verified website; logos are still to be licensed, so `SchoolMark`
renders a monogram from the school's initials instead of an empty box. The monogram is deliberately **ours, not
theirs**: one typeface and a restrained range of the site's own palette, picked
deterministically from the name, so a directory grid reads as one system and nothing implies
we are showing a school's real branding.

`School.logo` exists for when real logos are licensed. Only set it where the school has
given permission or the use has been checked — never a file fetched from a domain guessed
from the school's name.

Every record's website, training base, accreditation and course types were checked against
the school's own site in September 2026, and `checked` records that. Where a detail could
not be confirmed the field is left unset rather than guessed.

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
├── components/
│   ├── SiteNav.tsx         # header, top bar, mobile menu (client component)
│   ├── SiteFooter.tsx
│   ├── ImageSlot.tsx       # photo slot, falling back to SeaChart — see below
│   ├── SeaChart.tsx        # the generated chart illustration
│   ├── AustraliaChart.tsx  # the directory map
│   ├── PointsOfSail.tsx    # the interactive dial
│   └── GlossaryList.tsx    # glossary filter
└── lib/                    # every page's content, as typed records
    ├── site.ts             # the route registry — sitemap, HTML map and llms.txt read this
    ├── schools.ts, states.ts, cities.ts, geo.ts
    ├── courses.ts, scheme-courses.ts, city-courses.ts
    ├── pathways.ts, guides.ts, comparisons.ts, licences.ts
    ├── glossary.ts, faq.ts
    └── schema.ts           # JSON-LD builders
public/assets/              # logos
```

Fonts (`next/font/google`) and the Phosphor icon set (`@phosphor-icons/web`) are self-hosted, so
no stylesheet or font is fetched from a CDN at runtime.

### Illustration, and the photography still to come

The design hands over with the photography still to come. An empty photo slot printing its own
art brief is the loudest possible "unfinished" signal, on every page at once — so `ImageSlot`
draws a chart instead.

`SeaChart` generates an Admiralty-style sheet from a string seed: bathymetric contours through a
Catmull-Rom spline so they read as depth rather than as polygons, a coastline with a hatched
margin, a compass rose throwing rhumb lines, soundings, and a dashed passage with waypoints. The
same seed always draws the same chart, so a page is stable across builds and no two pages match.
No images, no canvas, no client JS — it is markup.

```tsx
<ImageSlot placeholder="Drop a photograph — Sydney Harbour from the water" />
```

Drop a file into `public/` and pass it as `src` to fill the slot — the placeholder text is then
used as the alt text, and the chart steps aside:

```tsx
<ImageSlot src="/photos/sydney-harbour.jpg" placeholder="Sydney Harbour from the water" />
```

Heroes pass `tone="deep"` to draw on the dark ground; the home hero adds `live` to animate.

### Other drawn components

- `AustraliaChart` — the directory map. The coast is traced from coastal waypoints in degrees
  and projected at render time rather than stored as a path, so city markers land in the right
  place by construction. State boundaries are almost all lines of latitude and longitude, which
  is the only reason a map this small can carry them.
- `PointsOfSail` — the interactive dial at `/learn/points-of-sail/`. The boat rotates to the
  selected heading and the rig pivots about the mast, with the sail's camber carried round by
  that rotation so it always bellies to leeward.
- `GlossaryList` — every term is server-rendered; the filter only hides.

### The social card

`public/og.jpg` is generated by `scripts/og.mjs` (`node scripts/og.mjs`) from the same chart
language the site uses, and committed — so the build has no image-generation step and no
runtime dependency. Re-run it if the card design changes. Pages set their own OG title and
description through their metadata; the image is shared site-wide.

## Content status

Prices are deliberately unset (`$—`) and, when set, carry the date they were checked — the
site's rule is that a price is never shown undated. No verified prices are held yet;
`/learn/sailing-course-costs/` says so on the page rather than guessing a range.

All 32 school records were verified against the schools' own sites in September 2026. Two
remain open: **Atlas Sailing** (Mosman Bay confirmed, domain unverified) and **Yachting
Directions** (name only — could not be found anywhere). The Harbourline profile is a sample and
is labelled as fictional on the page.

The AMSA guides were checked against amsa.gov.au in September 2026 and each carries the date and
a link to the source.

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

### Night sailing (dark theme, opt-in)

**The Coastal palette is the default for everyone.** The site deliberately does not read
`prefers-color-scheme`: white ground, navy and orange is the brand, and it is what every
visitor meets first whatever their operating system is set to. Dark is a choice made with the
header control, never inherited from the OS.

The dark theme itself is not an inversion — it is a chart table under a red night light. Grounds go deep and slightly warm
rather than blue-black, the accent loses its daylight glare, and text is a warm off-white,
because pure white on black is what makes a screen painful to read in the dark. The
announcement bar drops its accent flood-fill and keeps the accent as text only: at full
strength it was the brightest thing on the page.

Two states, light and dark, stored in `localStorage`. An inline script in the document head
applies an explicit dark choice before first paint, so the page never flashes the wrong theme.
`color-scheme` follows the theme too, so native controls and scrollbars match rather than
tracking the OS.

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
