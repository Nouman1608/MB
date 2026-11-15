# D-465 test results (15 Nov 2026)

Run locally on Windows (Node 26.7.0), on branch `academic-qa/framework` in its own worktree. Each step ran on its own, with nothing else running at the same time.

`main` moved four times while this PR was open (D-451 to D-464 from other sessions). There is no GitHub Actions run on pull requests in this repository (`deploy.yml` runs on pushes to `main` only), so all verification below is local; the PR's only check is the Cloudflare Workers build.

**Latest merge, `main` at `e2e5df792`** (#167: past-paper validator added to the build chain, teacher photos, regional pricing cards; D-457 to D-464). Fast checks:

| Command | Result |
|---|---|
| `npm run validate:academic` (includes the new gate and main's new past-paper validator) | **PASS**: 5 records, 0 need reassessment |
| `npm run test:tools` | **187 pass / 0 fail** (25 from this programme; 8 added on main) |
| `npm run check:review-ledger`, `check:academic-qa`, `coverage:academic-v2 --check`, decision-log encoding, suite syntax | **PASS** |
| `qa:source-manifest` | **PASS**; the OneDrive and repository manifests are byte-identical |
| Full sequence (build, `audit:all`, `astro check`, negative suite, `test:api`, `test:reports`) | Re-run after this push; results are added in the next commit |

**Full sequence, on the previous merge, `main` at `41cb4f814`** (142 subject guides, D-456; Lang & Lit mark total, D-455):

| Command | Result |
|---|---|
| `npm run build` | **PASS**: QA gate 5 records, 0 stale; 14,139 HTML files |
| `audit:all` | **PASS**: accessibility 0 problems across 14,138 pages; content store 44.8% |
| `npm run check` | **PASS**: 0 errors, 0 warnings |
| `test:api` | **90 / 0** |
| Negative suite | **63 / 0** (main's AV and AW plus this programme's AX-BD) |
| `check:duplicate-scope` | **PASS** |
| `test:reports` | 46 / **2** (the 2 pre-existing data failures, below) |
| Cloudflare Workers build on the PR | **SUCCESS** |

**Full sequence, on the previous merge, `main` at `e6d01706d`** (90 new resources, a 7,636-line reviewNote rewording, and template and redirect fixes):

| Command | Result | Notes |
|---|---|---|
| `npm run build` (includes `validate:academic`, so the new gate) | **PASS**, exit 0 | Academic QA gate: 5 records for 4 resources, 0 problems, **0 need reassessment** (the reviewNote rewording did not make any assessment stale; see framework §4). Astro built 13,981 HTML files |
| `NODE_OPTIONS=--max-old-space-size=6144 npm run audit:all` (CI gate) | **PASS**, exit 0 | Every step PASS, including accessibility (0 problems across 13,980 pages), internal links, structured data, i18n routes, rendered labels and course isolation; content store at 44.5% of its limit |
| `npm run check` (astro check, 551 files) | **PASS** | 0 errors, 0 warnings, 31 hints. A first run failed on a syntax error I introduced when resolving the merge conflict in the negative suite (a missing `);` that closes main's D-453 case). Fixed and re-run |
| `npm run test:tools` | **179 pass / 0 fail** | Includes 25 new `qa-rubric.test.mjs` tests |
| `npm run test:api` | **90 pass / 0 fail** | |
| `node --experimental-strip-types scripts/test-negative-validation-suite.mjs` | **62 pass / 0 fail** | main's new case AV (D-453) plus this programme's 7, relettered AW-BC. Failed on the first run for the same merge-resolution syntax error; passes after the fix |
| `npm run check:review-ledger` | **PASS** | |
| `npm run check:academic-qa` | **PASS** | Scorecard and dashboard match the repository |
| `node scripts/academic-coverage-report-v2.mjs --check` | **PASS** | |
| `npm run check:duplicate-scope` | **PASS** | |
| `qa:source-manifest --verify` | **PASS** | 4 files present in `resource check`, SHA-256 match; the OneDrive and repository manifests are byte-identical |
| `npm run test:reports` (not in CI) | 46 pass / **2 fail** | Both failures are **pre-existing** (D-448 baseline): "every review-pending resource has a repository-side verification result" (now 228 UNVERIFIED, including the 90 pages that arrived from main) and "every reviewed resource is reported as a teacher credit, not as a line-by-line review". They come from the data, not from this change |

## New negative cases (each breaks a rule in the real file, expects a failure with a named message, then restores the file and re-checks)

| Case | Breaks | Expected failure |
|---|---|---|
| AW | Turns a minor finding on the 93.5-scored 0620 page into an open `MATERIAL_FACTUAL_ERROR` | `[Q3] … open hard-stop MATERIAL_FACTUAL_ERROR` |
| AX | Stores `"total": 99` | `totals and bands are computed … never recorded` |
| AY | Relabels an AI-assisted record as `human` / `nouman-ahmed` | `needs humanEvidence` |
| AZ | Replaces evidence with `TODO …` | `syllabus-alignment has a score but no evidence` |
| BA | Gives 20/20 syllabus alignment to the AQA page with an open major check-1 finding | `full marks despite this open major finding` |
| BB | A site component references `docs/reports/academic-qa/` | `[Q9]` |
| BC | Adds a teacher verification with no `contentSha256` | rule [13] `contentSha256 … is missing` |

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
