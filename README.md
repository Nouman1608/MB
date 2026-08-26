# Marlbridge

Astro + TypeScript + Tailwind CSS v4. Static output (`output: 'static'`, `trailingSlash:
'always'`, `build: { format: 'directory' }`). Canonical domain: https://marlbridge.com
Live: https://marlbridge.com (Cloudflare Pages, builds from `main`).

## Run locally

    npm install
    npm run dev      # http://localhost:4321
    npm run check    # astro check — TypeScript + template diagnostics
    npm run build    # production build to ./dist (also runs postbuild: Pagefind indexing)
    npm run preview  # serve ./dist

Every `dev`/`build` run first executes, in order: `setup:routes` (see below),
`generate:redirects`, `generate:llms`, and the full `validate:academic` chain. A build does not
start until all four pass.

### One-time note about dynamic routes

Astro dynamic routes use square brackets in filenames. Some file transfers strip them, so those
routes ship as `-slug-.astro` / `-category-/` and are restored automatically by `npm run
setup:routes`. If a route 404s locally, run it manually:

    npm run setup:routes

### Environment variables

| Variable | Used by | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | `functions/api/enquiry.ts` (Cloudflare Pages Function) — sends the enquiry email | Yes, in production |
| `TURNSTILE_SECRET_KEY` | Same function — verifies the Cloudflare Turnstile token before sending | Yes, in production |

Both are Cloudflare Pages secrets, never committed. Until they're set in an environment, enquiry
submissions fail closed with a genuine error rather than a fake success — see **Forms** below.
`PUBLIC_*` build-time values (GA4 measurement ID, etc.) live directly in `src/data/site.ts`,
since they are already public once the page ships.

## Pages

**English routes:**

| Route | Source |
| --- | --- |
| `/` | `pages/index.astro` + `components/sections/*` |
| `/about/`, `/tutoring/`, `/schools/`, `/contact/`, `/pricing/`, `/trial/` | `pages/*/index.astro` |
| `/programs/`, `/programs/<slug>/` | `pages/programs/` (content collection: `programs`) |
| `/subjects/`, `/subjects/<slug>/` | `pages/subjects/` (content collection: `subjects`) |
| `/resources/`, `/resources/<slug>/` | `pages/resources/` (content collection: `resources`) |
| `/articles/`, `/articles/<slug>/` | `pages/articles/` (content collection: `articles`) |
| `/authors/<slug>/` | `pages/authors/[slug].astro` (content collection: `authors`) |
| `/boards/`, `/boards/<board>/`, `/boards/<board>/<qualification>/<subject>/` | `pages/boards/` — the academic hub matrix (board × qualification × subject) |
| `/checklists/`, `/checklists/<board>/<qualification>/<subject>/` | `pages/checklists/` — printable syllabus checklists, same matrix |
| `/levels/`, `/levels/<qualification>/` | `pages/levels/` |
| `/search/` | `pages/search/index.astro` — Pagefind-powered site search, noindexed |
| `/legal/privacy\|terms\|cookies\|accessibility\|editorial-policy/` | `pages/legal/` |
| `/404` | `pages/404.astro` |

**Translated routes** (`ar`, `ur`, `bn`) — 19 fixed, hand-authored pages plus the home page,
under `pages/[locale]/`: home, about, contact, pricing, schools, trial, tutoring, search, the 5
legal pages, and the 7 index/listing pages (boards, checklists, levels, programs, resources,
subjects, articles). One template file per page generates all three locales via
`getStaticPaths()`. Every collection-driven detail page (programs/subjects/authors/resources/
articles by slug, and the two 160-row academic hub matrices) remains English-only — see
**Internationalisation** below for why, and what's still English-only by design.

## Internationalisation

`src/i18n/routes.ts` is the single source of truth for every translated route: a `TranslationKey`
union plus `EN_PATH: Record<TranslationKey, string>`. `localePath(locale, key)` derives every
locale URL from it (`'/' + locale + EN_PATH[key]`), so hreflang, the language switcher, and
`<Meta translationKey="...">` on English pages can never disagree about where a translated
counterpart lives.

- `src/i18n/nav.ts` — translated chrome (nav, footer, language switcher, enquiry-form labels) per
  locale.
- `src/i18n/pages/{marketing,legal,directories}.ts` — translated page body content.
- `src/layouts/LocaleLayout.astro` — shared layout for every `[locale]/*` page; computes
  reciprocal hreflang (en/ar/ur/bn/x-default) from `translationKey` alone.
- Translated static/marketing pages use a shared `components/i18n/TranslatedProse.astro`
  renderer. Translated directory pages (boards, checklists, etc.) show the same **live data** as
  their English counterparts with translated labels only, linking to the real English detail
  pages with an explicit "this page is in English" note — never fake translated entity names.
- **Not yet translated, by disclosed design:** every collection-item detail page and both 160-row
  academic hub matrices. Each translated page carries a visible review-pending banner — all
  translations are AI-assisted and have not yet had native-speaker review.
- `scripts/test-i18n-routes.mjs` (run via `npm run test:i18n-routes`, wired into `audit:all`)
  reads the real built `dist/` HTML for every translated route across all 4 languages and asserts
  correct `lang`/`dir`, self-canonical, and fully reciprocal hreflang.

## Content

All content is in `src/content/` with Zod schemas in `src/content.config.ts` (`programs`,
`subjects`, `resources`, `articles`, `authors`, `pages`). Every read goes through
`src/utils/content/collections.ts`; relationships use `reference()` so a broken link fails the
build instead of shipping.

**Program availability is data.** `availability` in each program's frontmatter drives its badge,
its CTA and whether `Course` JSON-LD is emitted:

| Value | Badge | CTA | Course schema |
| --- | --- | --- | --- |
| `available` | Teaching now | Enquire about this program | yes |
| `resources-only` | Resources | Explore learning resources | no |
| `coming-soon` | Coming soon | Register interest | no |

### Resources: academic taxonomy

`resources` frontmatter ties each item to the official syllabus taxonomy, not just a subject:
`boards`/`qualifications` (validated against the active board×qualification×subject matrix),
`syllabusCodes`, `syllabusSeries`, an optional `topic` string, and a `syllabusTopics` array
mapping to `src/data/academic/syllabus-topics.ts` (validated at build time — a resource can't
claim a topic that syllabus data doesn't recognise). `resourceType` is one of `study-guides`,
`revision-notes`, `past-papers`, `practice-questions`, `exam-preparation`, `subject-guides`,
`learning-articles`. The established content pattern is a **study-guide/subject-guide** paired
with sibling **revision-notes** (condensed recall) and **practice-questions** (original
questions, never reproduced past-paper text, full worked answers) on the same verified topic —
`docs/decision-log.md` D-053 documents bringing every previously single-resource combination up
to this standard, and the genuine IB source-access limitation (full syllabi are not publicly
available) that keeps 19 IB combinations at 2 resources rather than 3+.

## Academic data (`src/data/academic/`)

The board × qualification × subject matrix that everything else (hub pages, checklists,
resources, pricing, assessment structure) is validated against:

- `matrix.ts` — every combination this site claims to teach, with `marlbridgeStatus` /
  `boardOfferingStatus` (only `ACTIVE` combinations get pages).
- `boards.ts`, `qualifications.ts`, `subjects.ts`, `syllabuses.ts` — canonical slugs and names.
- `syllabus-topics.ts` — per-combination, per-series topic/component lists with `source`,
  `sourceUrl`, `verifiedDate`, `status` (`published` / `being-verified`). Nothing here is
  guessed; unverifiable content is marked as such, never invented.
- `assessments.ts` — paper/component structure, weightings and tiers for the combinations that
  have a sourced assessment record (12/160 as of the last WS5 pass — a disclosed, tracked gap,
  not silently absent; see D-050).

`node scripts/academic-coverage-report-v2.mjs` (npm: `coverage:academic-v2`) produces a full
machine-readable coverage report (`docs/reports/academic-coverage-report-v1.2.{json,csv}`) —
source-verification status, resource counts and word counts per combination.

## Pricing

`src/data/pricing.ts` holds the base PKR pricing (region pricing, one-to-one pricing, IB
pricing) plus every currency-converted display price. `src/data/fx-policy.ts` records the FX
snapshot and the tolerance rule those converted prices must stay within.
`scripts/validate-fx-policy.mjs` (part of `validate:academic`) fails the build if: an approved
base rate silently changed, the FX snapshot is stale (>120 days), or a published conversion has
drifted beyond tolerance from what current rates imply — see D-049.

## Forms

`src/components/forms/` (`EnquiryForm.astro`, `FormField.astro`) + `functions/api/enquiry.ts`
(Cloudflare Pages Function) + `functions/_lib/enquiry-validation.ts` (shared validation, unit
tested under `functions/api/__tests__/`). Submission requires a valid Turnstile token
(`TURNSTILE_SECRET_KEY`) and sends via Resend (`RESEND_API_KEY`). `EnquiryForm` takes an optional
`labels` prop (defaulting to the original English strings) so translated pages can render
localised field labels/errors without touching the ~500 existing English callers. The student
enquiry form carries exactly 5 fields — an explicit, approved business decision, not an
oversight; do not add fields without recording a new decision-log entry.

## Search

Static, client-side, via [Pagefind](https://pagefind.app) — `npm run build`'s `postbuild` step
indexes the built `dist/` output. `/search/` (and its three locale variants) is a thin,
noindexed shell that loads the Pagefind UI; content pages are marked with
`data-pagefind-body` on their primary content region.

## Photography

No stock photography, and never an AI-generated person. Frames are reserved at fixed aspect
ratios by `components/ui/PhotoFrame.astro`, so a real photograph drops in without changing the
layout:

1. Put the file in `src/assets/`.
2. Import it in `src/data/site.ts` and set `image` plus a written `alt`.

`PhotoFrame` then emits a responsive AVIF/WebP `<picture>` with `widths`, `sizes` and
`loading="lazy"`. Until an image is set it renders the marked reserved frame.

## SEO

`components/seo/Meta.astro` is called only from `BaseLayout`/`LocaleLayout`; `title` and
`description` are required props, so a page cannot ship without them. Canonicals come from
`Astro.site` + route path, never the request URL. All internal links go through
`src/utils/urls/routes.ts` (English) / `src/i18n/routes.ts` (`localePath`, translated). JSON-LD
is one `@graph` per page: EducationalOrganization + WebSite + WebPage always, BreadcrumbList on
every non-home page, Article on resources and journal articles, Course only for available
programs, FAQPage only where FAQs are visible. Sitemap via `@astrojs/sitemap`, excluding
`/search/` (and its locale variants) and any academic hub page `isIndexableAcademicPage()`
(`src/utils/seo/indexability.ts`) rules thin — a combination needs 400+ words of qualifying
original Marlbridge content, summed across its resources, before its hub page is indexed. Fixed
via `_redirects` (generated by `scripts/generate-redirects.mjs`): apex is canonical, `www.`
redirects to it with a single 301.

## Validation and audit scripts

Run before every push; all are wired into `npm run validate:academic` and `npm run audit:all`
(see `package.json` for the exact commands each one runs):

- **`validate:academic`** — matrix integrity, resource/topic cross-references, commercial-claims
  wording, cross-board consistency, pricing/FX consistency, review-state integrity, duplicate
  resource scope, assessment-structure integrity.
- **`audit:all`** — metadata (duplicate titles/descriptions), structured data, redirects,
  internal-link graph (broken links, orphans, generic anchor text), content-integrity
  (indexability/metadata-honesty/self-canonical), font-binary integrity, sitemap/noindex
  agreement, i18n route completeness.
- `scripts/test-negative-validation-suite.mjs` — proves each validator actually rejects the fault
  it claims to catch: mutates a real file, asserts the expected failure message, restores the
  file byte-for-byte. Lettered categories [A]–[P], each with its own rationale documented inline.

A change that touches academic content, pricing, or translated routes is not done until both
chains pass clean and, where relevant, a fresh `npm run coverage:academic-v2` run confirms the
expected effect.

## Client JavaScript

Minimal by design: the mobile menu toggle, enquiry-form progressive enhancement (inline errors,
busy state, `aria-live` status) on the pages that carry a form, the Pagefind search widget on
`/search/`, and consent-gated analytics (`components/analytics/ConsentAnalytics.astro`). Everything else is
static HTML.

## Decision log

`docs/decision-log.md` is the running record of every non-obvious product/technical decision —
business decisions requiring owner sign-off, scope boundaries, disclosed limitations, and the
reasoning behind anything a future contributor might otherwise second-guess or silently redo.
Check it before assuming a gap is an oversight.

## Not built yet

Translated collection-item detail pages (programs/subjects/authors/resources/articles by slug)
and the two academic hub matrices remain English-only (disclosed, D-051). Assessment-structure
data (`assessments.ts`) covers 12/160 active combinations; populating the remainder is tracked,
future work (D-050). Location pages and program × subject cross-listing pages are not built.
