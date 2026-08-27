## D-040 — Business-decisions register (owner input required)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #81.
- **What this is:** a single consolidated document (`docs/business-
  decisions-register.md`) listing every question surfaced across this
  window's workstreams (and one earlier finding, D-010/D-033) that
  genuinely cannot be answered from the codebase, the live site, or
  public awarding-body sources -- not a new investigation, a
  consolidation of gaps already identified and explicitly deferred in
  D-034 and D-033.
- **Items registered:** (1) exact scope of the schools' content-licence
  grant (bulk printing / LMS upload / modification -- D-034); (2)
  whether the multi-subject and sibling pricing discounts stack
  (D-034); (3) standard class duration and frequency per subject/level
  (D-034); (4) cancellation/refund policy, currently unstated anywhere
  on the site (D-034); (5) billing cadence, accepted payment methods,
  and any fees beyond the published per-subject rate (D-034); (6)
  `www.marlbridge.com` not resolving at all rather than redirecting to
  the bare domain -- a DNS/Cloudflare-dashboard fix outside this repo
  (D-010, reconfirmed D-033).
- **Deliberately excluded, with reasoning given in the register itself:**
  faculty/reviewer role mapping (D-004/D-005/D-006) -- already resolved,
  owner approved publishing all 19 real teachers; and the `/resources/`
  index performance issue (D-039) -- an engineering follow-up, not a
  business decision, tracked in the final QIGT report (#83) instead.
- **Guardrail check:** no answer was invented or guessed for any item;
  each entry states only what the site currently does NOT say, and asks
  the specific question the owner would need to answer to close it.
- **Status:** delivered as `docs/business-decisions-register.md`; all six
  items remain `open` pending direct owner input; none block the
  remaining technical QIGT workstreams (#82, #83).

## D-041 — Full validation gate + before/after comparison (final QIGT gate)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #82. Consolidated validation of the combined effect of
  D-032 through D-040 (every QIGT workstream this window), run fresh against the merged `main`
  branch at commit `e870812` (not re-run per-workstream results from earlier in the day).
- **Full validation gate, all green:**
  - `npm run build`: succeeds. Pagefind indexed 1,132 HTML files, 4 languages, 5 filters (was
    "Indexing all `<body>` elements, 0 filters" before D-036).
  - `npx astro check`: 0 errors / 0 warnings / 0 hints (140 files).
  - `npm run validate:academic` (6 validators): all OK — matrix 183 rows (160 ACTIVE / 23
    NOT_SUPPORTED, unchanged from baseline), content tagging OK, commercial claims OK,
    cross-board integrity OK (5/5 rule categories), pricing consistency OK (0 hard-coded fees
    outside `pricing.ts` across 879 files), review-integrity OK (731 resources + 4 articles
    checked, 20 reviewer records, 9 `isReviewer: true`).
  - `npm run audit:all` (6 checks + sitemap-noindex): 0 problems across all. Structured-data
    audit: 1,131 pages with JSON-LD, 5,353 typed nodes (EducationalOrganization ×1,131,
    WebSite ×1,131, WebPage ×1,131, BreadcrumbList ×988, Article ×735, Course ×167,
    FAQPage ×50, Person ×19, Organization ×1). Redirect audit: 976 rules (975 static + 1
    wildcard), unchanged from baseline. Internal-link audit: 0 broken links, 0 orphan pages,
    0 generic anchor text, across 1,132 built pages / 1,130 indexable.
  - `node scripts/test-cross-board-regression.mjs`: OK, all previously-flagged and control
    pages intact.
  - `node scripts/test-negative-validation-suite.mjs`: 11/11 passed, including the 5 new
    review-integrity negative fixtures added under D-032.
  - `functions/api/__tests__/enquiry-validation.test.mjs`: 16/16 passed (was 11 before the
    `trial` kind was added under D-034).
  - `npx tsc --noEmit`: 0 errors. `npm audit`: 0 vulnerabilities. `npx wrangler deploy
    --dry-run`: succeeds, 3,622 files read from `dist`.
- **Before/after comparison (Section 11 requirements):**
  - **Route/page count:** 1,131 built pages at baseline (2026-08-26 morning, commit
    `e04fbc3...`) → 1,131-1,132 now (audit scripts count this two different ways, both
    pre-existing behaviour, not a regression) -- net unchanged; the QIGT programme reshaped and
    fixed existing pages, added exactly one net-new page (`/trial/`, D-034), and removed exactly
    one page from the indexable set (`/search/`, noindexed under D-033) -- the counts wash out.
  - **Sitemap URL set:** 1,130 URLs at baseline → **1,130 URLs now**, re-verified directly
    against the live production sitemap (`sitemap-0.xml`, 1,130 `<loc>` entries), not just the
    local build. `/search/` confirmed absent (0 matches); `/trial/` confirmed present (1 match).
  - **Redirect count:** 976 (975 static + 1 wildcard) at baseline → **976, unchanged** — no
    redirects added or removed this programme; the redirect-inventory audit (D-033) reviewed
    every existing rule's rationale and found nothing synthetic to remove.
  - **Indexable / noindexed pages:** baseline had 0 pages with an explicit code-level noindex
    that were also correctly excluded from the sitemap (the `isIndexableAcademicPage()` policy's
    27 pages were already excluded pre-QIGT). This programme added exactly one more:
    `/search/` (D-033) — verified live in production returning
    `<meta name="robots" content="noindex, follow">` and absent from the production sitemap.
  - **Titles/descriptions:** 0 missing, 0 duplicate titles, 0 duplicate descriptions at baseline
    and now (`audit-metadata.mjs`, 1,131 pages both times).
  - **Structured-data types:** not separately counted at baseline (D-038 confirmed the schema
    *builders* were already correct, not a counts-based check); now formally captured for the
    first time as the after-state (see counts above) for future comparison.
  - **Resource publication states:** 731 resources / 4 articles at both baseline and now (no
    resources added, removed, or reclassified this programme); reviewer records grew from
    implicitly-uncounted at baseline to a formally validated 20 records / 9 `isReviewer: true`
    once D-032's review-integrity validator landed.
  - **Internal links:** 0 broken, 0 orphans at baseline and now (`audit-internal-links.mjs`);
    D-036 added new internal `data-pagefind-filter` metadata (not visible links) rather than
    changing the link graph itself.
  - **Academic matrix:** 183 rows, 160 ACTIVE / 23 NOT_SUPPORTED at baseline and now — completely
    unchanged in row count, but D-037 corrected `levelsLabel` display copy for 11 subjects where
    it had drifted out of sync with the matrix's real ACTIVE combinations (a display-honesty fix,
    not a matrix change).
  - **Pricing data:** `src/data/pricing.ts` amounts unchanged throughout (0 amounts touched by
    D-034's display-bug fix, confirmed by `validate-pricing-consistency.mjs` passing identically
    before and after).
  - **Production headers:** re-verified live (not just locally) during this pass —
    `strict-transport-security: max-age=15552000` present on both `marlbridge.com` and
    `www.marlbridge.com`; `/search/` correctly serves `noindex, follow` in production, not just
    in the local build; `/trial/` confirmed live and rendering the new structured fields.
- **Unplanned discovery during this pass, register corrected:** re-checking `www.marlbridge.com`
  live (previously found not resolving at all in D-010/D-033) found it now resolves cleanly,
  returns HTTP 200, serves byte-identical content to the bare domain, and carries a correct
  self-referencing canonical to `https://marlbridge.com/` — the same safe pattern already
  verified for the other apex/protocol variants. Whatever caused the earlier timeout has
  resolved itself (DNS propagation or a Cloudflare-side change, not something in this
  repository). `docs/business-decisions-register.md` item 6 updated in place to reflect this —
  downgraded from "action needed" to an optional, non-blocking tidiness recommendation, with the
  correction dated and explained rather than silently overwritten.
- **Guardrail check:** every "after" figure in this entry was measured fresh this pass (local
  build + live production fetch), not carried over from an earlier workstream's own report
  without re-verification.
- **Status:** full validation gate green on `main` at commit `e870812`; before/after comparison
  complete; one register item corrected based on fresh live evidence.

## D-042 — Deployment verification + final evidence-based report (programme close-out)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #83 (final task).
- **Deployment verification:** rather than assume the auto-deploy pipeline (push to `main` ->
  Cloudflare Pages) succeeded, fetched a representative sample of production URLs live and
  checked each against the specific fix it is meant to demonstrate: `/pricing/` (no duplicated
  currency codes), `/about/` (old blanket review claim absent), `/legal/terms/` (schools carve-out
  live, dated), `/trial/` (new structured form live), `/search/` (serves `noindex, follow` and is
  absent from the live production sitemap -- 0 of 1,130 `<loc>` entries in `sitemap-0.xml` match
  "search", 1 matches "trial"), the homepage/`/resources/` footer nav (Past Papers/Exam
  Preparation absent, Practice Questions present, `data-pagefind-body` present), `/llms.txt` (no
  false past-papers claim), a resource page (`data-pagefind-filter` attributes and the
  link-underline fix both live), `/subjects/accounting/` (corrected label live), the compiled CSS
  bundle (`--color-gold-600:#7a5e10`, `--color-on-navy-mute:#9fadc2`, confirming the accessibility
  fix values are exactly what shipped), `robots.txt`, and HSTS headers on both `marlbridge.com`
  and `www.marlbridge.com`. Every check passed against the live site.
- **Final report:** `docs/reports/qigt-final-report-2026-08-26.docx` -- a 15-section report
  (executive summary; scope/method/ground rules; baseline; one section per workstream D-032
  through D-039; business decisions requiring owner input; full validation gate + before/after
  comparison; deployment verification; guardrails held/deliberately not changed; closing summary
  and recommendations) written for the owner, covering every real finding and fix from this
  programme with no invented facts. Rendered to PDF and visually reviewed page-by-page before
  delivery to confirm correct formatting (headings, tables, page breaks) rather than trusting the
  generation script alone.
- **Guardrail check:** the report states only what was directly verified this programme (repeating
  the specific evidence -- measured contrast ratios, real diff counts, live HTTP checks -- rather
  than summarising claims from earlier reports without re-confirmation); the one correction found
  mid-programme (the `www.marlbridge.com` DNS finding resolving itself) is stated plainly as a
  correction, not silently smoothed over.
- **Status:** implemented on `feature/qigt-final-report`, deployment independently re-verified
  live in production, report delivered. This is the final entry of the QIGT programme (D-032
  through D-042); task #83 and the full QIGT task list are now complete.

## D-043 — Business-decisions register: all five open items answered and implemented

- **Date:** 2026-08-26.
- **Workstream:** post-QIGT follow-up, at the owner's direct request ("ask me questions from the
  document i will give you the answers").
- **Method:** asked the owner each of the five open items from `docs/business-decisions-register.md`
  directly, one clarifying round-trip where the first answer needed follow-up (discount stacking:
  the owner's first answer restated the existing multi-subject-discount rule rather than confirming
  whether it combines with the sibling discount, so a second, more specific question was asked).
  Every fact below is the owner's own stated answer, not inferred or assumed.
- **Answers received and implemented:**
  1. **Discount stacking:** the 20% multi-subject discount (3+ subjects) and the 10% sibling
     discount (up to 2 siblings) combine when a family qualifies for both; both apply to group
     classes only, never one-to-one (already separately stated on the one-to-one FAQ). Added
     `PRICING_TERMS.discountsStack` to `src/data/pricing.ts`; updated the pricing page's discount
     FAQ answer and the "Discounts and trial" section intro to state this explicitly.
  2. **Schools' licence scope:** bulk printing for a whole year group and LMS upload (Google
     Classroom, Moodle, etc.) are both permitted; modifying, relabelling or rebranding the
     material is not -- it should be used as published. Updated `/schools/` with a new clarifying
     paragraph and `/legal/terms/`'s class-use carve-out to name both the permitted uses and the
     modification boundary explicitly.
  3. **Class duration/frequency:** group classes run 45-50 minutes, 3 times a week per subject;
     one-to-one classes run 1 hour, with the number of classes left to the student/family (no
     fixed frequency). Does not vary by qualification level. Added
     `PRICING_TERMS.classFormat` and a new pricing-page FAQ entry.
  4. **Cancellation/refund:** billing is monthly, starting once the free trial class has taken
     place; a family can cancel or pause at any time, the month already paid for is not refunded,
     and there is no further billing once cancelled. Added `PRICING_TERMS.billing` and
     `PRICING_TERMS.cancellationPolicy`, plus two new pricing-page FAQ entries.
  5. **Payment methods/fees:** bank transfer and international wire transfer are accepted; there
     is no separate registration/enrolment fee beyond the published per-subject rate. Added
     `PRICING_TERMS.paymentMethods` and `PRICING_TERMS.enrolmentFee`, surfaced in the same new FAQ
     entry as item 4's billing cadence.
- **Guardrail check:** every new fact traces to the owner's own direct answer in this
  conversation, none inferred; all new pricing-adjacent facts were added to `src/data/pricing.ts`
  (the single typed source of truth every pricing page already reads from) rather than
  hard-coded on any page, consistent with the file's own stated rule that "every page that shows
  a price MUST read from here"; `validate-pricing-consistency.mjs` re-ran clean afterward (0
  hard-coded fee values outside `pricing.ts` across 879 files, same as before this change).
  `docs/business-decisions-register.md` updated in place with each answer and exactly where it
  now appears live, rather than left stating the questions as still open.
- **Status:** implemented on `feature/qigt-business-decisions-answered`, full validation gate
  green (build, astro check, `validate:academic`, `audit:all`, negative-validation-suite [11/11],
  `tsc --noEmit`, `wrangler deploy --dry-run`).

## D-044 — /resources/ index page performance fix + regression testing

- **Date:** 2026-08-26.
- **Workstream:** post-QIGT follow-up, at the owner's direct request ("after that you can do the
  regression testing as suggested"), closing out the one performance issue D-039 deliberately
  left as a documented recommendation rather than a same-session fix.
- **The problem (recap from D-039):** `/resources/` renders every published resource card for
  every subject into the DOM up front (up to 257 cards in the largest type section), with
  client-side filtering toggling the `hidden` attribute rather than removing/adding elements.
  Measured cost: Performance 71, Total Blocking Time 1,370ms, ~5,200 DOM nodes, 3.7s of
  style-and-layout work on first paint (`mainthread-work-breakdown`).
- **Fix chosen:** `content-visibility: auto` (with a `contain-intrinsic-size` placeholder) applied
  to each `[data-subject-group]` block via a scoped `<style>` block in
  `src/pages/resources/index.astro`. This tells the browser to skip layout/paint work for a
  subject group until it is near the viewport -- a CSS-only, additive hint (harmlessly ignored in
  browsers that don't support it; supported in all evergreen browsers) specifically recommended
  by the Chrome/web.dev team for exactly this "long list of cards" scenario, and explicitly
  documented as compatible with search-engine indexing (the built static HTML is unchanged --
  Pagefind and crawlers read the full markup regardless of this CSS property). Deliberately not
  the riskier alternatives considered in D-039 (pagination, JS virtualization, lazy DOM
  insertion) -- those would have meant restructuring the existing, working, tested filter script;
  this fix changes zero JavaScript, zero DOM structure, and zero filter behaviour.
- **Regression testing performed (not assumed):**
  - Full validation gate re-run clean: build, `astro check` (0/0/0), `validate:academic` (all 6
    validators), `audit:all` (all 6 checks + sitemap-noindex), `npx tsc --noEmit`, `npm audit` (0
    vulnerabilities), `wrangler deploy --dry-run`, negative-validation-suite (11/11).
  - A dedicated Playwright functional test (`/tmp/pwtest/test-filters.mjs`, not committed --
    scratch verification, not a permanent project fixture) drove a real headless browser against
    the built preview site and confirmed, on the 257-card Mathematics/study-guides section:
    initial state shows all 23 subject groups and 257 cards; selecting a subject narrows to
    exactly 1 visible group matching that subject; the "Clear filters" button appears once
    filtered and correctly restores all groups on click; selecting a level hides non-matching
    cards and every still-visible card actually has that level; `content-visibility: auto` is
    confirmed applied via `getComputedStyle`; and the last (previously most implicitly
    deprioritized) subject group has real, nonzero rendered height once scrolled into view,
    confirming `content-visibility` does not silently drop or corrupt content -- 12/12 checks
    passed.
  - Fresh Lighthouse mobile runs against the local preview build: **Performance 71 -> 97**,
    **Total Blocking Time 1,370ms -> 50ms**, **mainthread-work-breakdown 3.7s -> 1.1s**, CLS
    stayed at 0 (confirming the `contain-intrinsic-size` placeholder didn't introduce layout
    shift), LCP/FCP/Speed Index unchanged or slightly improved. Accessibility re-confirmed at
    100/100 (unchanged from D-039 -- this fix touched no color, markup semantics, or focus
    order).
- **Guardrail check:** no JavaScript changed, no DOM structure changed, no filter behaviour
  changed (proven by the Playwright test, not assumed), no content removed from the built HTML
  (Pagefind/crawlers see the same markup as before); the fix is a single, scoped, additive CSS
  rule.
- **Status:** implemented on `feature/qigt-resources-performance`, full validation gate green,
  functional regression test 12/12 passed, before/after Lighthouse confirms the fix. This closes
  the one outstanding recommendation from the QIGT final report (D-042).
