# Marlbridge

Astro + TypeScript + Tailwind CSS v4. Static output. Canonical domain: https://marlbridge.com
Live: https://marlbridge.com (Cloudflare Pages, builds from `main`).

## Run locally

    npm install
    npm run dev      # http://localhost:4321
    npm run check    # astro check — TypeScript + template diagnostics
    npm run build    # production build to ./dist
    npm run preview  # serve ./dist

### One-time note about dynamic routes

Astro dynamic routes use square brackets in filenames. Some file transfers strip
them, so those routes ship as `-slug-.astro` / `-category-/` and are restored
automatically by `npm run setup:routes`, which `dev` and `build` both run first.
If a route 404s, run it manually:

    npm run setup:routes

Affected: `src/pages/programs/[slug].astro`, `src/pages/subjects/[slug].astro`,
`src/pages/resources/[category]/index.astro`,
`src/pages/resources/[category]/[slug].astro`, `src/pages/learning/[slug].astro`.

## Pages

| Route | Source |
| --- | --- |
| `/` | `pages/index.astro` + `components/sections/*` |
| `/programs/`, `/programs/<slug>/` | `pages/programs/` |
| `/subjects/`, `/subjects/<slug>/` | `pages/subjects/` |
| `/resources/`, `/resources/<category>/`, `/resources/<category>/<slug>/` | `pages/resources/` |
| `/learning/`, `/learning/<slug>/` | `pages/learning/` |
| `/about/`, `/tutoring/`, `/schools/`, `/contact/` | `pages/*/index.astro` |
| `/legal/privacy|terms|cookies|accessibility/` | `pages/legal/` — noindex, awaiting legal review |
| `/404` | `pages/404.astro` |

## Content

All content is in `src/content/` with Zod schemas in `src/content.config.ts`
(programs, subjects, resources, articles, authors). Every read goes through
`src/utils/content/collections.ts`; relationships use `reference()` so a broken
link fails the build instead of shipping.

**Program availability is data.** `availability` in each program's frontmatter
drives its badge, its CTA and whether `Course` JSON-LD is emitted:

| Value | Badge | CTA | Course schema |
| --- | --- | --- | --- |
| `available` | Teaching now | Enquire about this program | yes |
| `resources-only` | Resources | Explore learning resources | no |
| `coming-soon` | Coming soon | Register interest | no |

⚠ **The current values are placeholders awaiting business confirmation.**

## Photography

No stock photography, and never an AI-generated person. Frames are reserved at
fixed aspect ratios by `components/ui/PhotoFrame.astro`, so a real photograph
drops in without changing the layout:

1. Put the file in `src/assets/`.
2. Import it in `src/data/site.ts` and set `image` plus a written `alt`
   (`academyPhoto` = 4:5 portrait, `classroomPhoto` = 21:9 full width).

`PhotoFrame` then emits a responsive AVIF/WebP `<picture>` with `widths`,
`sizes` and `loading="lazy"`. Until an image is set it renders the marked
reserved frame.

## Forms

`src/components/forms/` + `src/utils/forms/submit.ts`. Native HTML validation
plus a small progressive-enhancement script (inline errors, busy state,
`aria-live` status). Set the destination with one environment variable:

    PUBLIC_FORM_ENDPOINT=https://your-form-endpoint

Until it is set, submitting shows the email fallback — never a fake success.

## SEO

`components/seo/Meta.astro` is called only from `BaseLayout`; `title` and
`description` are required props, so a page cannot ship without them. Canonicals
come from `Astro.site` + route path, never the request URL. All internal links go
through `src/utils/urls/routes.ts`. JSON-LD is one `@graph` per page:
EducationalOrganization + WebSite + WebPage always, BreadcrumbList on every
non-home page, Article on resources and journal articles, Course only for
available programs, FAQPage only where FAQs are visible. Sitemap via
`@astrojs/sitemap`, excluding `/legal/`.

## Client JavaScript

Two scripts only: the mobile menu toggle, and enquiry-form enhancement on the
three pages that carry a form. Everything else is static HTML.

## Before first launch

- Add `public/images/brand/marlbridge-og.png` (1200×630).
- Confirm program availability values.
- Replace the legal pages with reviewed text (currently noindex).
- Optionally self-host fonts: subset variable WOFF2 into `public/fonts/`,
  uncomment the `@font-face` block in `src/styles/global.css`, and swap the
  Google `<link>` tags in `BaseLayout.astro` for the preload tags noted there.

## Not built yet

Site-wide search (architecture noted in the spec), internationalisation beyond
the `en` registry, location pages, program × subject pages.
