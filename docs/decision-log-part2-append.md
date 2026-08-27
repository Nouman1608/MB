## D-032 — QIGT Section 3: real publication-state enforcement + editorial-policy honesty fix

- **Date:** 2026-08-26.
- **Workstream:** Quality/Indexing/Growth/Trust (QIGT) remediation programme, Section 3 (Quality assurance).
- **Baseline finding:** the required `reviewStatus` enum
  (draft/review-pending/reviewed/changes-requested/archived) and `reviewer`
  reference already existed in `content.config.ts` for resources and
  articles (from an earlier session, docs/decision-log.md D-006). Current
  real data is honest -- 0 of 731 resources and only 1 of 4 articles
  claim `reviewed`, with a real, sourced reviewer on file for that one
  article. But NONE of this was enforced or displayed anywhere: no page
  template read `reviewStatus`/`reviewer`/`isReviewer`, no JSON-LD builder
  emitted a reviewer, and no validator checked the rules the schema
  implies. A genuine, verified gap existed in draft/archived gating:
  resources had no filtering mechanism at all (a `draft` or `archived`
  resource would still build, index and appear in the sitemap); articles
  had a working boolean `draft` field but a SEPARATE, unchecked
  `reviewStatus: "draft"` enum value that could silently disagree with it;
  authors had an equivalent unenforced `publicationState` field.
- **What was built:**
  - `reviewedDate` (optional, coerced date) added to both resources and
    articles schema -- when a genuine review actually happened, distinct
    from authoring dates.
  - `getResources()`, `getArticles()`, `getAuthors()`
    (`src/utils/content/collections.ts`) now all exclude `draft` content
    from routing by default; `getArticles()` also now checks
    `reviewStatus !== 'draft'` in addition to the pre-existing boolean
    field, reconciling the two mechanisms so they cannot disagree.
    `src/utils/content/related.ts` and `resourcesAvailableFor()`
    (`src/utils/content/status.ts`) — every place that lists, links to, or
    counts resources/articles — updated the same way, so a draft item
    can never appear in a listing, related-content block, or subject
    resource-count badge whose own page doesn't actually get built.
  - `astro.config.mjs` gained `buildArchivedContentExclusions()` (mirrors
    the existing `buildIndexabilityExclusions()` pattern): `archived`
    resources/articles still build (so old links don't 404) but are
    excluded from the sitemap, matching the page-level `noindex` the
    templates now derive from `reviewStatus === 'archived'`.
  - `src/pages/resources/[slug].astro` and `src/pages/articles/[slug].astro`
    both now compute a single `genuinelyReviewed` boolean (reviewStatus
    is exactly `'reviewed'`, AND the `reviewer` reference resolves, AND
    that author has `isReviewer: true`) and reuse the SAME computed value
    for both the visible "Reviewed by [name] on [date]" byline and the
    JSON-LD `editor` property (new optional param on
    `articleNode()`, `src/utils/schema/article.ts`) -- there is no
    separate code path where schema could claim a reviewer the page
    itself doesn't show.
  - `scripts/validate-review-integrity.mjs` (new, wired into
    `npm run validate:academic`): reviewStatus "reviewed" or
    "changes-requested" requires a `reviewer` field; that reviewer must
    exist in `src/content/authors/`; that author must have
    `isReviewer: true`; `reviewedDate` must not precede `publishedDate`
    and must not be in the future. Applies identically to every
    `resourceType` -- practice-questions and exam-preparation get no
    weaker rule, addressing the brief's specific concern about those
    types.
  - 5 new negative-fixture tests added to
    `scripts/test-negative-validation-suite.mjs` (section [I]), each
    mutating a real resource file, asserting the validator fails with
    the right message, and restoring the original -- all 5 pass (11/11
    suite total).
  - `docs/reports/review-priority-queue-2026-08-26.md`: the required
    review-priority queue. GSC-based criteria (impressions, positions
    4-20) are explicitly flagged as unavailable this session (no export
    supplied) rather than fabricated; the remaining criteria are
    data-driven from the real repository (225 worked-answer/practice
    resources, 58 on a confirmed spec-transition syllabus, 204 with a
    named author, 244 remainder).
- **Real, verified editorial-policy contradiction found and fixed:**
  `src/pages/legal/editorial-policy.astro` stated "Marlbridge has not yet
  published real, named individual author profiles" and that content
  "carries the Marlbridge Academic Team byline... until real individual
  author profiles are introduced." This is false today: 373 of 731
  resources (majority) already carry a real named individual author
  (`nouman-ahmed`, `iftikhar-azeemi`, `muhammad-ghazali-siddiqui`, and 5
  others), each with a genuine, sourced author page. Rewrote the
  "Editorial policy" and "Authorship and accountability" sections to
  describe the real current state (most resources named-authored, a
  minority organisationally bylined, author pages state only verified
  facts, author and reviewer are explicitly distinct roles). Also
  rewrote "Academic review policy" to honestly describe the newly-
  enforced reviewer model instead of flatly denying any reviewer
  mechanism exists -- it now states plainly that review is real but
  incomplete (one article reviewed so far, the rest honestly
  review-pending), rather than either overclaiming or underclaiming.
  `lastUpdated` bumped to 26 August 2026.
- **Guardrail check:** no fact invented -- every authorship/reviewer
  count cited in the policy rewrite was grepped directly from the
  content files, not assumed; no resource or article was bulk-marked
  reviewed; archived/draft handling is additive (no existing content
  changed state) and only activates once a future editor actually sets
  one of those values.
- **Status:** implemented on `feature/qa-review-integrity`, full
  validation gate green (astro check, validate:academic [now including
  validate-review-integrity.mjs], build, cross-board-regression,
  negative-validation-suite [11/11], `npm run audit:all`, unit tests
  [13/13], npm audit [0 vulnerabilities], tsc --noEmit, wrangler deploy
  --dry-run).

## D-033 — QIGT Section 4: indexing-efficiency audit + /search/ noindex fix

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 4 (Indexing efficiency).
- **Scope note:** the brief's GSC baseline (501/923/385/489/48/1) comes
  from an export not re-available this session and predates the entire
  preceding SEO remediation programme (D-023 through D-031). Rather than
  force a stale reconciliation, verified the CURRENT technical state
  directly -- full itemised results in
  `docs/reports/qigt-indexing-workstream-2026-08-26.md`.
- **Real gap found and fixed:** `/search/` (the Pagefind results page)
  was indexable despite having no fixed content of its own -- results
  render entirely client-side into a container no crawler populates.
  Added `noindex={true}` to `src/pages/search/index.astro` and excluded
  `/search/` from the sitemap in `astro.config.mjs`. Deliberately made
  the page-level fix first and ran `test-sitemap-noindex.mjs` before the
  sitemap-side fix -- it correctly failed ("in the sitemap but its own
  page renders a noindex robots meta tag"), real proof the safeguard
  built in the prior programme (D-023/D-024) actually catches drift
  rather than just existing.
- **Everything else checked came back clean, not re-implemented:**
  self-canonicals (structurally guaranteed by `Meta.astro`), HTTP→HTTPS
  redirect (verified live), trailing-slash consistency
  (`trailingSlash: 'always'`), no redirected/noindexed/chained/looped
  URLs in the sitemap (already enforced by `audit-redirects.mjs` and
  `test-sitemap-noindex.mjs` from the prior programme), robots.txt
  access, sitemap-index validity, query-parameter indexability (the
  `/resources/` filters are client-side DOM filtering, no URL params
  generated), locale hreflang/canonicals (verified against the existing
  i18n architecture, no change needed).
- **www/non-www finding, explicitly NOT fixed here:** `www.marlbridge.com`
  does not resolve at all (times out), rather than redirecting to the
  bare domain. This is a DNS/Cloudflare-dashboard setting outside this
  repository -- recorded as an infrastructure recommendation, not
  silently left unmentioned, and not attempted without dashboard access
  being explicitly requested.
- **Redirect-inventory audit:** reviewed every redirect-generation
  category in `scripts/generate-redirects.mjs` against its own
  documented rationale; found no synthetic, never-public, speculative
  redirect -- every rule traces to a genuinely-was-live URL shape
  (flattened resource type-prefixed paths, the `/learning/` → `/articles/`
  rename, or a named, dated, decision-logged content consolidation). No
  redirects removed.
- **Page-uniqueness / crawled-not-indexed risk:** the templates most
  likely responsible for that GSC category (thin academic hub pages)
  were the direct subject of the immediately preceding SEO programme;
  re-verified 0 remain below the substantial-original-guidance bar
  (`audit-content-integrity.mjs`, 160/160 checked, 0 problems). No
  further consolidation identified as necessary without a fresh,
  URL-level GSC export to confirm which specific pages are still
  affected.
- **Guardrail check:** no canonical URL changed; the one fix made
  (`/search/` noindex) does not remove or hide the page from users, only
  from search indexing, and is the standard, widely-recommended
  treatment for a client-rendered internal search page.
- **Status:** implemented on `feature/qigt-indexing-repairs`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite [11/11],
  `npm run audit:all`, unit tests [13/13], npm audit [0 vulnerabilities],
  tsc --noEmit, wrangler deploy --dry-run).

## D-034 — QIGT Section 5: trust-consistency workstream (pricing display, teaching-location, authorship, licensing, trial flow)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 5 (Trust consistency).
- **Pricing display bug fixed (duplicated currency):** `src/pages/pricing/index.astro` rendered every fee as
  `{symbol} {amount} {currency}/unit` -- for regions where the symbol already IS the ISO code (SAR, AED, QAR,
  KWD, BHD, OMR) this produced literal duplication ("SAR 270 SAR/subject/month"), and even where symbol and
  code differ (Rs/PKR, £/GBP) it showed both together, exactly the defect class the brief named. Standardised
  every fee cell, the IB card and both pricing FAQ answers on a single format -- amount + ISO currency code
  only, unit stated separately (e.g. "270 SAR /subject/month", "19,000 PKR /subject/month") -- across the two
  region tables, the one-to-one table, the IB card and the two FAQ answers that previously spelled out symbol
  + code together. No amount, rounding or region was changed; `src/data/pricing.ts` (the canonical source) was
  not touched. Confirmed the three localised homepages (`/ar/`, `/bn/`, `/ur/`) do NOT have this bug -- they
  already show currency in its own labelled table column, separate from the symbol+amount cell, and needed no
  change. Re-ran `validate-pricing-consistency.mjs` after the fix -- still 0 hard-coded fee values outside
  `pricing.ts` across 879 files.
- **Teaching-location wording:** checked homepage (`GlobalVision.astro`), About, Tutoring and Contact for
  consistency. All four already say the same thing in compatible wording -- in-person teaching in Pakistan,
  online for learners elsewhere, resource library open to anyone -- no contradiction found, no change made.
- **Authorship-policy contradiction found beyond D-032's editorial-policy fix:** `src/pages/about/index.astro`
  still claimed "Study material published on Marlbridge is written **and reviewed** by subject specialists"
  (an unqualified, blanket review claim) and separately implied ALL published work carries the organisational
  "Marlbridge Academic Team" byline. Both were false against current data: only 1 of 735 published
  resources+articles has `reviewStatus: reviewed` (`where-igcse-maths-marks-are-lost-early.md`; re-verified
  directly via grep against `src/content/`, matching the review-integrity validator's own count), and 373/731
  resources already carry a real named author, not the organisational byline (the same fact D-032 already used
  to fix `editorial-policy.astro`). Rewrote both paragraphs on About to state the true, current split (most
  resources named-authored, a minority organisationally credited; review is a separate, accountable,
  not-yet-universal check) -- bringing About into the same honest framing D-032 already established elsewhere,
  rather than inventing new wording independently.
- **Licensing contradiction found and reconciled:** `/schools/` explicitly tells schools "No licence, no
  account, no attribution required" to use published resources with their classes, while `/legal/terms/`'s
  "Using our content" section told the same audience to "write to us first" for exactly that use -- a direct
  page-to-page contradiction for the same audience (not just vague inconsistency). Reconciled by narrowing
  Terms to carve out an explicit exception matching what Schools already grants (class use, no permission
  needed) while keeping the "write to us first" requirement for the different, still-real cases Terms actually
  intends to gate -- republishing under another name, resale, other partnerships. Did not touch the sitewide
  footer copyright notice ("© 2026 Marlbridge. All rights reserved.") -- a standard ownership assertion, not
  itself a reuse restriction, so it does not conflict with a specific permission grant elsewhere. The deeper
  question of exactly how far the schools' class-use permission extends (bulk printing, LMS upload,
  modification) is a genuine unresolved scope question, not something inferable from existing wording --
  flagged for the business-decisions register (task #81), not resolved here.
- **Free Trial Class form flow built:** the header/mobile-menu "Free Trial Class" button previously linked to
  the generic five-field `/contact/` enquiry form (`kind="student"`), with qualification/board/subject/level
  left to free-text in the message hint -- exactly the gap the brief named. Added a `trial` `EnquiryKind`
  (`functions/_lib/enquiry-validation.ts`, `src/utils/forms/submit.ts`) with structured required fields
  (qualification, exam board, subject) plus optional availability, and a new dedicated page at `/trial/`
  (`routes.trial`) using `EnquiryForm kind="trial"`; both header buttons now point at `/trial/` instead of
  `/contact/`. Qualification/board/subject dropdown options are read live from `QUALIFICATIONS`/`BOARDS`/
  `SUBJECTS` in `src/utils/academic/`/`src/data/academic/` (the same verified academic-matrix data every board
  hub page already uses), plus IELTS and "General academic support" added on top since both are genuinely
  taught per the existing Contact FAQ but sit outside the examined-syllabus matrix. Deliberately did NOT add a
  separate "level" field distinct from qualification -- in this site's own data model qualification already IS
  the level (see `LEVEL_FOR_QUALIFICATION`), so a second field would either duplicate it or invent a
  schooling-year concept the site does not otherwise use; documented this consolidation in the code comment
  rather than silently doing something different from the brief's literal field list. The submission
  confirmation copy states plainly this is a request, not a confirmed booking, and makes no response-time
  promise (none exists to promise). Added 5 new unit tests for the `trial` kind (required-field validation,
  successful submission, email-body rendering) -- `functions/api/__tests__/enquiry-validation.test.mjs` now
  16/16 passing; updated `test-negative-validation-suite.mjs`'s stale "11 cases" reference to 16.
- **Explicitly identified as genuinely unresolved, not invented an answer for:** discount stacking (can the
  multi-subject and sibling discounts combine?), class duration/frequency, cancellation/refund rules, payment
  schedule/fees, and the precise scope of the schools' content-licence grant. All five are real gaps in
  publicly stated policy, none inferable from existing evidence -- routed to the business-decisions register
  (task #81) rather than guessed at here.
- **Guardrail check:** no business fact, price, or academic claim was invented; `pricing.ts` amounts are
  unchanged; the only qualification/board/subject options exposed anywhere are ones the site already publicly
  claims to teach.
- **Status:** implemented on `feature/qigt-trust-consistency`, full validation gate green (astro build,
  `validate:academic` chain incl. `validate-pricing-consistency.mjs` and `validate-review-integrity.mjs`,
  `audit:all`, `enquiry-validation.test.mjs` [16/16], `test-negative-validation-suite.mjs` [11/11]).

## D-035 — QIGT Section 6: demand-led optimization audit of 10 named GSC priority pages

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 6 (Demand-led search optimization).
- **Scope:** the 10 pages the brief named as ranking positions 4-20 for real queries --
  4 board-hub pages (`/boards/cambridge/a-level/english-literature/`,
  `/boards/cambridge/o-level/urdu-language/`, `/boards/oxfordaqa/igcse/pakistan-studies/`,
  `/boards/cambridge/igcse/urdu-language/`) and 6 resource pages (`o-level-cambridge-urdu-first-and-second-language`,
  `igcse-islamiyat-paper-1`, `a-group-2-quantitative-trends`, `organic-chemistry-formulae-and-naming`,
  `a-physics-medical-physics-revision-notes`, `a-arenes-and-halogenoarenes`), each re-checked fresh against a
  12-point on-page checklist (direct-answer opening, title/description with spec code, visible syllabus code,
  topic-mapped headings, tables where useful, real cross-linking, accurate schema, currency of any spec-code/year
  claims) rather than assumed already-done from the prior SEO programme's Phase 4/Phase 12 work.
