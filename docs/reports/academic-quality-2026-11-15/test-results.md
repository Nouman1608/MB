# Test results (D-448)

Baseline = clean `main` at `24c0bc63`. For the two mutation suites it was run in a separate worktree, so the suites could not interfere with each other. After = this branch.

| Command | Baseline (`main`) | After (this branch) |
|---|---|---|
| `npm run validate:academic` | exit 0 | exit 0 (run inside both builds) |
| `npm run check` (astro check) | not run on baseline | 0 errors, 0 warnings, 30 hints |
| `npm run test:tools` | 134 pass / 0 fail | 149 pass / 0 fail (+8 syllabus-points, +7 assessment-faq) |
| `npm run test:api` | 90 / 0 | 90 / 0 |
| `npm run check:review-ledger` | **FAIL** (pre-existing: committed ledger.csv stale, 6 Commerce rows) | PASS (ledger regenerated) |
| `npm run check:duplicate-scope` | PASS | PASS |
| `coverage:academic-v2 --check` | **FAIL** (pre-existing: stale report) | PASS (regenerated) |
| `audit-topic-coverage-claims.mjs --check` (new) | n/a | PASS: 0 unsupported completeness labels |
| `npm run build` | not run on baseline | exit 0, 13,838 pages (two builds: before and after the final edits) |
| `npm run test:reports` (not in CI) | 44 pass / **4 fail** (pre-existing) | 46 pass / **2 fail**. Both are identical to baseline and come from the data, not this change: "every review-pending resource has a repository-side verification result" (95 UNVERIFIED) and "every reviewed resource is reported as a teacher credit". The two stale-report failures are fixed. |
| `node scripts/test-negative-validation-suite.mjs` (CI) | 37 pass / **1 fail** (pre-existing: committed llms.txt stale) | **54 pass / 0 fail** (new cases AN-AU plus a rendered whole-topic fixture; the llms.txt failure is fixed) |
| `npm run audit:all` (CI) | not run on baseline | PASS. Includes rendered-label audit [3]: 7,685 syllabus-point lists, 0 unsupported whole-topic labels; 13,828 sitemap URLs; 13,838 pages |
| `audit:tiered-faq-routes` (in audit:all) | — | 166 hub FAQ answers checked, 0 problems |
| `node scripts/test-cross-board-regression.mjs` (CI) | — | OK |
| Browser journeys `scripts/e2e-navigation-journeys.mjs` (CI) | — | 11 of 11 passed (local Playwright; CI pins 1.56.0) |

## Targeted checks of the corrected defects

- The negative fixture runs on the first run with the new cases (before the final edits): AN (false whole-topic claim), AO (wrong parent), AP (claim on a subtopic) passed. AQ first failed because rule [M4] treated Foundation/Higher tiering as Core/Extended. The rule was corrected.
- The FAQ regression net was mutation-tested: with the old single-level and staged wording restored, 3 of 7 tests failed, naming DP Biology and 9701. With the fix in place, 7 of 7 pass.
- Rule [13] spot check: a fabricated teacher verification (wrong board, future date, unknown approval, placeholder evidence, non-official source, subject not covered) produced all six errors. The real (empty) file passes.
- Rendered HTML (first build):
  - 0620 page: "2.1 · Core; 2.2 · Core; 2.3 · Core and Extended. This page covers 3 of the 7 subtopics in topic 2, Atoms, elements and compounds." No "whole topic".
  - IB DP Biology FAQPage JSON-LD: "Higher Level (HL) candidates take: … These figures are for Higher Level (HL) only; figures for other levels are not listed on this page. … Source: official International Baccalaureate subject brief".
  - 9701: "% of the A Level … A candidate taking the AS Level only sits fewer papers, weighted differently".
  - AP page: "Reviewed by Ameer Hamza (what this means)", no date.
