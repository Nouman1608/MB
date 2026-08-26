# QIGT Baseline — 2026-08-26

Quality / Indexing / Growth / Trust (QIGT) remediation programme. Baseline recorded before any change in this programme.

## Repository state

- Commit: `e04fbc307f0d4666c6e2ee32106e0f315f362d16` (branch `main`)
- Last commit message: "Merge feature/seo-phase12-resource-clusters into main (D-031)"
- Node: v22.23.2, npm: 10.9.8
- Astro: `^7.2.2`, `@astrojs/sitemap`: `^3.7.3`, `@astrojs/check`: `^0.9.10`

## Counts

- Built pages: 1,131 (1,130 in sitemap; 1 is `/404.html`, correctly excluded)
- Resources: 731 files in `src/content/resources/`
- Academic matrix: 183 rows, 160 ACTIVE, 23 NOT_SUPPORTED
- Redirect rules: 976 (975 static, 1 wildcard) in `public/_redirects`
- Font files: 14 (all independently verified distinct binaries)

## Validation gate (all green pre-change)

- `npm ci`: clean, 0 vulnerabilities
- `npm audit`: 0 vulnerabilities
- `npx astro check`: 0 errors / 0 warnings / 0 hints (138 files)
- `npm run build`: succeeds, 1,131 pages
- `npm run validate:academic`: matrix/content/commercial-claims/cross-board-integrity/pricing-consistency all OK
- `npm run audit:all` (metadata, structured-data, redirects, internal-links, content-integrity, fonts, sitemap-noindex): 0 problems across all 6 checks
  - **content-integrity audit checked 160/160 academic hub pages** (not zero — the brief's stated failure condition does not apply to the current build)
- `node scripts/test-cross-board-regression.mjs`: OK
- `node scripts/test-negative-validation-suite.mjs`: 6/6 passed
- Enquiry/API unit tests: 13/13 passed
- `npx tsc --noEmit`: 0 errors
- `npx wrangler deploy --dry-run`: succeeds

## Production spot-check

`https://marlbridge.com/` fetched directly and confirmed live and in sync with this commit: 731 resources published (matches repo), same subject/program copy, same nav.

Confirmed from the live homepage (relevant to later workstreams):
- Past Papers: 0 published; Exam Preparation: 0 published; Learning Articles: 0 published — all three categories are advertised in the resources index with a live "0 published" count (Section 7 concern is real and current).
- Programs already carry an honest per-program status label ("Teaching now" / "Not confirmed" — SAT is the one program marked "Not confirmed").
- Subjects list already uses a `Selected levels` fallback label for at least one subject (Languages) rather than false exhaustive level claims — a pre-existing good pattern.
- Homepage states "Live teaching from Pakistan. Online tutoring for learners anywhere" and "Our teaching operates in Pakistan today" — a single, consistent statement on this page; cross-page consistency (About/Contact/Tutoring/Pricing) not yet checked at baseline time.

## Historical PageSpeed evidence (from prior session, treated as historical per instruction)

Captured 2026-08-25 against production via interactive Lighthouse: Mobile 92/96/100/100 (Perf/A11y/BP/SEO), Desktop 98/96/100/100. No CrUX field data existed at that time. Full detail: `docs/reports/lighthouse-2026-08-25.md`.

## QA/review-state findings at baseline (feeds directly into the QA workstream)

- The required publication-state enum already exists in `content.config.ts` for both `resources` and `articles`: `reviewStatus: draft | review-pending | reviewed | changes-requested | archived`, defaulting to `review-pending`. A `reviewer` reference field (optional, into the `authors` collection) also already exists on both collections.
- **Current real state is honest**: 0 of 731 resources set `reviewStatus` explicitly (all default to `review-pending`); exactly 1 of the articles (`where-igcse-maths-marks-are-lost-early.md`) is marked `reviewed`, with a real, sourced reviewer (`muhammad-ghazali-siddiqui`, `isReviewer: true`, `sourceUrl` on file). No bulk/false "reviewed" claim exists anywhere.
- **However, none of this is enforced or displayed**: `reviewStatus`, `reviewedDate` (field doesn't exist yet), and `isReviewer` are not read by any page template, any JSON-LD builder, or any validator script in the repository (confirmed by a full-repo grep). The one real reviewed article does not visibly display its reviewer anywhere on the page.
- **A real gap exists in draft/archived gating**: resources have no boolean `draft` field and nothing filters `reviewStatus: draft`/`archived` resources out of routing or the sitemap — if a resource were ever marked `draft` or `archived` today, it would still build, index and appear in the sitemap. Articles have a working boolean `draft` field (correctly wired into `getStaticPaths`/sitemap via `getArticles()`), but this is a SEPARATE mechanism from `reviewStatus`'s own `'draft'` enum value, which is not checked anywhere — the two can silently disagree (e.g. `reviewStatus: "draft"` with `draft: false` would still publish).
- These are genuine, verified problems, not assumptions — confirmed by grepping the actual template/validator/schema code, not by reading the brief's claims at face value.
