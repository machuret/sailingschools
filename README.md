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

| Route | Page |
| --- | --- |
| `/` | Home |
| `/find-a-course` | Three-question course finder (client-side, no account or email capture) |
| `/pathways/learn-to-sail-from-scratch` | Complete-beginner pathway — the three routes in |
| `/courses/rya-competent-crew` | Course detail |
| `/qualifications/rya-vs-iyt-vs-asa` | Scheme comparison |
| `/sailing-schools` | Schools index, by state and territory |
| `/sailing-schools/new-south-wales/sydney` | Regional school directory |
| `/schools/harbourline-sailing-school` | School profile (a sample profile; Harbourline is fictional) |

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

## SEO

`src/lib/site.ts` holds the canonical origin and the route registry. Add each new page to
`routes` there and it appears in the sitemap automatically.

- `/sitemap.xml` and `/robots.txt` are generated from that registry (`src/app/sitemap.ts`,
  `src/app/robots.ts`).
- Every page declares its own canonical URL via `alternates.canonical`.
- Preview deployments serve `Disallow: /` so they can never be indexed in place of the
  production site.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project (for example `https://www.sailingschools.com.au`)
once the domain is attached — it overrides the default origin used for canonicals and the
sitemap.
