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
| `ENQUIRY_RATE_LIMIT` | Same function — KV namespace backing the 5-per-IP-per-hour cap. A **binding**, not a secret: declared in `wrangler.jsonc`. Fails open if absent, so a KV outage degrades rate limiting rather than blocking enquiries (D-152) | Declared in config |
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
| `/revision-planner/` | `pages/revision-planner/` — free weekly plan generator, runs in the browser (D-286) |
| `/practice/<code>/diagnostic/<set>/` | `pages/practice/[code]/diagnostic/[set].astro` — 10-minute self-marked diagnostics, sets in `src/data/diagnostics.ts` (D-286) |
| `/workshops/`, `/workshops/<slug>/` | `pages/workshops/` (content collection: `workshops`) — nothing public until a workshop is published (D-286) |
| `/subscribe/confirmed\|unsubscribed\|error/` | `pages/subscribe/` — noindexed pages for the optional revision emails (D-286) |
| `/tools-data/catalogue.json`, `/tools-data/<board>/<qualification>/<subject>.json` | course catalogue and per-course topic→resource map for the tools (`src/utils/tools/catalogue.ts`) |
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
to this standard, and the genuine IB source-access limitation (full IB subject guides are
licensed, not public). Current resource counts per combination are in the canonical coverage
report (see **Reports** below), not in this README.

### Sourcing academic content

Every syllabus fact, topic, tier label, assessment figure and command word comes from the
awarding body's own current specification or qualification page (cambridgeinternational.org,
aqa.org.uk, ocr.org.uk, oxfordaqa.com, qualifications.pearson.com, ibo.org) — never a tutoring
site, Wikipedia, a search snippet or memory. Record the official URL and the date it was checked
(`sourceUrl`/`verifiedDate` in `syllabus-topics.ts`, `officialSourceUrl`/`verifiedOn` in
`assessments.ts`). Where the official source cannot be read (IB's licensed subject guides), say
so on the page and keep to what the public IB subject brief states. Practice questions are
original: never reproduce past-paper questions or mark-scheme text. Tier labels follow
`src/utils/practice/question-tier.ts`; a new practice file on a Foundation/Higher syllabus is
added to `HIGHER_LABELS_CHECKED` only after every question has been checked against the
specification, and `npm run test:tools` fails until it is.

### Academic review: what the fields mean

- **`reviewStatus: "reviewed"`** — a named Marlbridge subject teacher (`reviewer`, an author
  profile with `isReviewer: true`, never the page's author) is credited as accountable for the
  page and the page shows "Reviewed by [name]". Since the owner's decision D-379 (1 Oct 2026)
  this is **not** a claim that a dated, line-by-line check took place.
- **`review-pending`** (the default) — no accountable teacher is credited yet.
- **`reviewer`** — the credited accountable teacher.
- **`reviewedDate`** — the date the reviewer credit was applied; not the date of a review.
- **Repository-side verification** — a recorded check of a page against its official
  specification (`docs/reports/academic-review/pending-review-*.json`). It is not a teacher
  review and never changes `reviewStatus`.
- A build or validator pass is none of the above.

**Recording a genuine review.** The reviewer reads the page against the official specification
it cites (its ledger row shows the repository-side verification result, any corrections and
open minor issues), fixes or asks for fixes, and then — in one commit that names them —
sets `reviewer`, `reviewStatus: "reviewed"` and `reviewedDate` (the real date) in the page's
frontmatter. Never assign a reviewer on someone's behalf, copy one from another page because
the subject matches, use the author as reviewer, back-date a review or bulk-change statuses.
`validate-review-integrity.mjs` enforces the structural rules (real designated reviewer, not
the author, subject and board covered by their profile, date not before publication or in the
future). Then regenerate the reports.

## Academic data (`src/data/academic/`)

The board × qualification × subject matrix that everything else (hub pages, checklists,
resources, pricing, assessment structure) is validated against:

- `matrix.ts` — every combination this site claims to teach, with `marlbridgeStatus` /
  `boardOfferingStatus` (only `ACTIVE` combinations get pages).
- `boards.ts`, `qualifications.ts`, `subjects.ts`, `syllabuses.ts` — canonical slugs and names.
- `syllabus-topics.ts` — per-combination, per-series topic/component lists with `source`,
  `sourceUrl`, `verifiedDate`, `status` (`published` / `being-verified`). Nothing here is
  guessed; unverifiable content is marked as such, never invented.
- `assessments.ts` — paper/component structure, weightings, tiers, assessment model and
  lifecycle status (`current` / `legacy-teach-out` / `future` / `withdrawn`, with `relatedCode`
  linking a transition pair). Every active combination has an assessment record, and every
  record states its `assessmentModel` (`linear`, `component-based`, `staged`, `modular`,
  `mixed`, `criterion-referenced`, …) taken from an explicit statement in its own official
  specification, never inferred from paper counts; `validate-assessments.mjs` check [15] fails
  the build if a record has none. The current completeness figure (every record with a source,
  a verification date, components with marks and a model = `VERIFIED_COMPLETE`) is in the
  canonical coverage report below rather than written here, because it changes with the data
  (160/160 complete on 4 Oct 2026, D-386). Every record cites `officialSourceUrl` and `verifiedOn`; run
  `npm run review:assessments` for a per-board checklist of every record's source and how long
  ago it was verified, useful for prioritising a re-check pass. The public "Assessment structure"
  section on each academic hub page, and the FAQPage schema generated alongside it, are both
  built directly from this file (`assessmentsFor()` in the same module).

### Reports

`npm run coverage:academic-v2` is the one canonical coverage report. A single run writes
`docs/reports/academic-coverage-current.md`, `.json` and `.csv` from the same dataset: one row
per active combination with its official source, topic map, assessment completeness and model,
resources by type, authors and reviewers (derived from frontmatter), review-status counts, the
latest real `reviewedDate`, topic-map gaps, depth thresholds, stale verifications, risks and a
recommended next action. Demand is `NO_DATA`: no analytics, Search Console, CRM or enrolment
source is read. No wall-clock timestamp is written (each file states `dataAsOf`, the latest
date in the data), so an unchanged repository regenerates identical files; `npm run
coverage:academic-v2 -- --check` fails if the committed files are out of date.

`npm run report:review-ledger` writes the academic-review ledger: one row per resource in
`docs/reports/academic-review/ledger.csv`, with totals in `ledger.json`, a summary in
`ledger-summary.md` and the named-reviewer sign-off queue in `signoff-queue.md`
(`npm run check:review-ledger` fails if they are out of date or a structural check fails).

Regenerate both after any change to resources, academic data or review metadata and commit
the output with the change. `docs/reports/README.md` lists which reports are canonical and
current and which are dated historical evidence: historical reports (for example
`academic-coverage-report-v1.1.md`, `-v1.2.md`, `-v1.2.json`, `-v1.2.csv`) are kept unchanged
under a "superseded" banner and are never regenerated. Quote counts from the current reports,
not from this README or from historical files.

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
localised field labels/errors without touching the ~500 existing English callers. The student,
tutoring and translated trial forms carry exactly 5 fields (v1.x CLOSURE decision). The English
/trial/ page uses `TrialRequestForm.astro` instead: a typed subject, board (default "Not sure"),
group/one-to-one, name, email, optional phone, country, and folded optional times and message,
with allow-listed preselection from `?course=`, `?program=`, `?teacher=`, `?format=`, `?source=`
(owner decisions 2026-09-23, D-287; shortened in D-291: no qualification dropdown, no time zone;
D-292 "Subjects" box; D-293 every visible field compulsory, empty ones marked with a red *). Do not add
fields to either form without recording a new decision-log entry.

`functions/api/subscribe.ts` (optional revision emails, double opt-in, hidden until configured —
see `docs/growth/newsletter-setup.md`) and `functions/api/workshop-register.ts` (workshop
registration with duplicate prevention) are routed in `src/worker/index.ts` (D-289).

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

`package.json` is the source of truth for what each command runs. Summary:

- **`npm run validate:academic`** — runs, in order: `validate-academic-matrix`,
  `validate-academic-content` (taxonomy, topic and stage references), `validate-commercial-claims`,
  `validate-cross-board-integrity`, `validate-pricing-consistency`, `validate-review-integrity`,
  `validate-pinned-teachers`, `validate-worker-bindings` (D-152), `validate-as-level-display`,
  `validate-fx-policy`, `validate-assessments`, `validate-grade-thresholds`,
  `validate-practice-bank`, `validate-practice-question-schema` and `validate-diagnostics`. It is
  part of every `dev` and `build` run, so a build cannot start unless it passes.
- **`npm run audit:all`** — decision-log encoding, metadata, structured data, redirects,
  internal-link graph, content integrity, fonts, sitemap/noindex agreement
  (`test-sitemap-noindex`), i18n routes (`test-i18n-routes`), rendered academic labels, tiered FAQ
  routes, review coverage, accessibility and trial-link sources. Needs a built `dist/`.
- **Standalone (not part of either chain):** `npm run check:duplicate-scope` (resources sharing
  an identical official scope must be reviewed and allow-listed),
  `node scripts/test-negative-validation-suite.mjs` (proves each validator rejects the fault it
  claims to catch: mutates a real file, asserts the expected failure, restores it byte-for-byte),
  `node scripts/test-cross-board-regression.mjs`, `npm run test:practice-analytics`,
  `npm run test:reports` (report and ledger regression tests, below) and the report generators
  above.
- **Tests:** `npm run test:tools` runs the unit tests for the revision planner engine, pricing
  calculator, syllabus points, course subject names, next steps, practice topic filter, practice
  question tiers (Foundation/Higher and Core/Extended labels, including the reviewed-file guard),
  and the signup and enquiry-validation endpoints. `npm run test:api` runs every test under
  `functions/api/__tests__/`, `functions/_lib/__tests__/` and `src/worker/__tests__/`.
- **`npm run test:reports`** — checks that the coverage report's Markdown, JSON and CSV agree
  with each other and with the repository, that reviewer and review-date fields match an
  independent derivation from frontmatter, that the ledger has exactly one row per resource,
  that both reports are current, and (with temporary fixtures, restored byte-for-byte) that a
  missing resource, a "reviewed" page without a reviewer and an orphan verification record are
  all caught.
- **Dependency audit:** run `npm audit`; it must report no moderate, high or critical
  vulnerability. Fix transitive issues with the smallest lockfile update inside the parents'
  existing ranges; never `npm audit fix --force`.

**CI** (`.github/workflows/deploy.yml`, on every push to `main`): `npm ci`, `npm run build`
(which includes `validate:academic`), `npm run audit:all`, the negative-fixture suite, the
cross-board regression check and `npm run test:api`. `test:tools`, `test:reports`,
`check:duplicate-scope`, `test:practice-analytics` and `npm audit` are not in CI; run them before
pushing. Production deploys come from Cloudflare's own Git integration, not from this workflow
(D-103).

A change that touches academic content, pricing, or translated routes is not done until both
chains pass clean, the standalone checks above pass, and the canonical reports have been
regenerated and committed.

## Client JavaScript

Minimal by design: the mobile menu toggle, enquiry-form progressive enhancement (inline errors,
busy state, `aria-live` status) on the pages that carry a form, the Pagefind search widget on
`/search/`, and consent-gated analytics (`components/analytics/ConsentAnalytics.astro`). The free
revision tools (D-286) add bundled, dependency-free modules in `src/scripts/`: the homepage syllabus
finder, the revision planner (`planner-engine.ts` is pure and unit tested; `planner-ui.ts` is the
page), the diagnostics and the workshop helpers. They store only in the visitor's browser.
Everything else is static HTML.

Tests for the tools: `npm run test:tools` (see **Validation and audit scripts** for the full
list).

## Decision log

`docs/decision-log.md` is the running record of every non-obvious product/technical decision —
business decisions requiring owner sign-off, scope boundaries, disclosed limitations, and the
reasoning behind anything a future contributor might otherwise second-guess or silently redo.
Check it before assuming a gap is an oversight.

## Not built yet

Translated collection-item detail pages (programs/subjects/authors/resources/articles by slug)
and the two academic hub matrices remain English-only (disclosed, D-051; reconfirmed for the
newly-expanded Assessment structure/FAQ content in D-059, which also documents what full
hub-page translation would require). Location pages and program × subject cross-listing pages
are not built. Every review-pending resource still needs a named, authorised reviewer's
sign-off (see **Academic review** above and `docs/reports/academic-review/signoff-queue.md`).
