# D-452 test results (15 Nov 2026)

Run locally on Windows (Node 26.7.0), on branch `academic-qa/framework` in its own worktree. The final runs below are after fast-forwarding to `origin/main` at `103016e4e`, with nothing else running at the same time.

| Command | Result | Notes |
|---|---|---|
| `npm run build` (includes `validate:academic`, so the new gate) | **PASS**, exit 0 | Academic QA gate: 5 records for 4 resources, 0 problems. Astro built 13,889 HTML files; pagefind indexed 4 languages. Built before the fast-forward; the merged change touched only two templates and three docs, none of them this programme's |
| `NODE_OPTIONS=--max-old-space-size=6144 npm run audit:all` (CI gate) | **PASS**, exit 0 | Every step PASS: redirects; internal links (0 broken, 0 orphans); structured data; metadata; i18n routes; rendered labels; tiered FAQ routes; review coverage; accessibility (0 problems across 13,888 pages); trial sources; course isolation; content store 44.3% of limit |
| `npm run validate:academic` (after the fast-forward) | **PASS**, exit 0 | |
| `npm run check` (astro check, 551 files) | **PASS** | 0 errors, 0 warnings, 31 hints |
| `npm run test:tools` | **179 pass / 0 fail** | Includes 25 new `qa-rubric.test.mjs` tests |
| `npm run test:api` | **90 pass / 0 fail** | |
| `node --experimental-strip-types scripts/test-negative-validation-suite.mjs` | **61 pass / 0 fail** | 7 new cases, AV-BB (see below). 53 cases when no `dist/` exists; the other 8 mutate the built site |
| `npm run check:review-ledger` | **PASS** | Ledger regenerated for the corrected page |
| `npm run check:academic-qa` | **PASS** | Scorecard and dashboard match the repository |
| `node scripts/academic-coverage-report-v2.mjs --check` | **PASS** | Regenerated: the corrected page's word count changed |
| `npm run check:duplicate-scope` | **PASS** | |
| `qa:source-manifest --verify` | **PASS** | 4 files present in `resource check`, SHA-256 match; the OneDrive and repository manifests are byte-identical |
| `npm run test:reports` (not in CI) | 46 pass / **2 fail** | Both failures are **pre-existing and unchanged** from the D-448 baseline: "every review-pending resource has a repository-side verification result" (138 UNVERIFIED) and "every reviewed resource is reported as a teacher credit, not as a line-by-line review". They come from the data, not from this change |

## New negative cases (each breaks a rule in the real file, expects a failure with a named message, then restores the file and re-checks)

| Case | Breaks | Expected failure |
|---|---|---|
| AV | Turns a minor finding on the 93.5-scored 0620 page into an open `MATERIAL_FACTUAL_ERROR` | `[Q3] … open hard-stop MATERIAL_FACTUAL_ERROR` |
| AW | Stores `"total": 99` | `totals and bands are computed … never recorded` |
| AX | Relabels an AI-assisted record as `human` / `nouman-ahmed` | `needs humanEvidence` |
| AY | Replaces evidence with `TODO …` | `syllabus-alignment has a score but no evidence` |
| AZ | Gives 20/20 syllabus alignment to the AQA page with an open major check-1 finding | `full marks despite this open major finding` |
| BA | A site component references `docs/reports/academic-qa/` | `[Q9]` |
| BB | Adds a teacher verification with no `contentSha256` | rule [13] `contentSha256 … is missing` |

## Rubric unit tests that matter most

- A critical defect on a 97/100 page gives BLOCKED.
- A high AI score alone gives ACADEMIC_REVIEW_PENDING, never VERIFIED_APPROVED.
- Teacher approval plus a score of 90 or more gives VERIFIED_APPROVED. Approval without a score stays pending.
- A teacher credit (TEACHER_CREDITED) does not raise the state.
- An edit after assessment gives REVERIFICATION_REQUIRED, and so does a verification with no hash.
- An unscored category gives no total (not 0).
- Not-applicable rescaling: 72/80 gives 90.0.
- Band edges: 90 / 89.9 / 75 / 74.9.

## Lifecycle observed end to end (not a fixture)

1. QA-0004 recorded with the page's hash.
2. Q4 tier error corrected.
3. The validator reported `[R2] atomic-structure-practice: changed since QA-0004; reassess`.
4. QA-0005 recorded.
5. The validator is clean, and the scorecard shows the new score.

## Not run, or not possible

- Lighthouse / Core Web Vitals: not run. This programme changed no template, script or style.
- No deployment, push or PR. The branch is uncommitted, pending the owner.
- No live-site check. Nothing is deployed.
