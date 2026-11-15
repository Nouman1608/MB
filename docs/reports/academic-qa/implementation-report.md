# Academic Quality Assurance Programme — implementation report

Decision: **D-452** (`docs/decision-log.md`). Framework: [`docs/academic-qa/framework.md`](../../academic-qa/framework.md). Dashboard: [`dashboard.md`](dashboard.md) / [`dashboard.html`](dashboard.html). Tests: [`test-results.md`](test-results.md). Open items: [`OPEN_QUESTIONS.md`](../../../OPEN_QUESTIONS.md) (OQ-6 to OQ-11, OT-5 to OT-7).

Branch `academic-qa/framework`, started from `origin/main` at `47e84134d` and brought up to date with `103016e4e` (D-451, another session's work). Nothing is committed or deployed.

## 1. Summary

**Technical implementation:** complete for phase 1 (scope: `src/content/resources`, 8,186 files).

**Academic review:** not complete, and not claimed. 0 documented teacher verifications exist, so 0 resources are VERIFIED_APPROVED.

What already existed and was kept:

- the review ledger (D-386);
- the D-379 meaning of "reviewed";
- repository verification records;
- the D-448 documented-verification format;
- about 40 validators and the negative suite.

Nothing was rebuilt or migrated; `reviewStatus` and `reviewedDate` keep their meanings.

What this programme added: the ten-check framework, a versioned 100-point rubric with hard-stops, a resource-level QA register and state model, an integrity gate in every build, a scorecard and dashboard, a risk queue, teacher review packs, a source-download manifest, and a pilot of real assessments.

## 2. Baseline vs now

| Measure | Baseline (47e84134d) | Now |
|---|---|---|
| Resources in scope | 8,186 | 8,186 |
| Ledger: structural PASS / WARN / FAIL | 7,575 / 611 / 0 | 7,575 / 611 / 0 |
| Ledger outcome UNVERIFIED | 138 | 138 |
| Accountable-teacher credit ("reviewed", D-379) | 7,756 | 7,756 (unchanged; not a check) |
| Quality rubric | none | v1.0.0 (7 categories, 10 checks, 11 hard-stops) |
| Resources with a complete, current rubric score | 0 | 4 (all AI-assisted) |
| Mean / median score | n/a | 84.1 / 84.0 (n = 4 only) |
| QA states | none | AUTOMATED_CHECK_COMPLETE 8,182 · ACADEMIC_REVIEW_PENDING 1 · REVISION_REQUIRED 3 · all others 0 |
| Documented teacher verifications | 0 | 0 |
| VERIFIED_APPROVED | n/a | 0 |
| Negative-suite cases | 46 | 53 |
| test:tools tests | 154 | 179 |
| Academic references in the owner's `resource check` folder | 0 | 4 (SHA-256 recorded) |

## 3. Owner decisions taken (15 Nov 2026, multiple choice)

1. **Approval**: VERIFIED_APPROVED needs a documented teacher approval **and** a complete score of 90 or more **and** no open hard-stop or major finding.
2. **Gate**: block now on integrity; report only "new resource has no assessment" until an activation date is set.
3. **Pilot**: about 5 AI-assisted assessments against downloaded official syllabuses, never recorded as teacher reviews; fix only clear-cut errors.
4. **Scope**: main resources first; articles and the AP library come next.

## 4. Changes

| Area | Files |
|---|---|
| Rubric engine (pure, shared) | `src/utils/academic/qa-rubric.ts` |
| Unit tests (25) | `src/utils/academic/__tests__/qa-rubric.test.mjs` (in `test:tools`) |
| Shared loaders | `scripts/lib/academic-qa-data.mjs` |
| Integrity gate | `scripts/validate-academic-qa.mjs` (rules Q1-Q3, Q9; reports R1, R2), appended to `validate:academic` |
| Teacher verification hash | `scripts/validate-review-integrity.mjs` rule [13] now requires `contentSha256`; `teacher-verifications.json` meta documents it (0 records, so nothing is affected) |
| Scorecard / dashboard / queue | `scripts/academic-qa-scorecard.mjs` → `docs/reports/academic-qa/{scorecard.csv,scorecard.json,dashboard.md,dashboard.html,review-queue.md}` |
| Review packs | `scripts/academic-qa-review-pack.mjs` → `docs/reports/academic-qa/review-packs/` (4 pilot pages) |
| Source manifest | `scripts/academic-qa-source-manifest.mjs` → `docs/reports/academic-qa/source-manifest.json` plus copies beside the files |
| Register | `docs/reports/academic-qa/assessments.json` (5 records) |
| Negative suite | `scripts/test-negative-validation-suite.mjs` cases AV-BB |
| npm scripts | `validate:academic-qa`, `report:academic-qa`, `check:academic-qa`, `qa:review-pack`, `qa:source-manifest` |
| Content correction | `src/content/resources/atomic-structure-practice.md` (3 lines; see section 6) |
| Regenerated | `docs/reports/academic-review/*` (ledger), `docs/reports/academic-coverage-current.{csv,json}` (word count of the corrected page) |
| Docs | `docs/academic-qa/framework.md`, this report, `test-results.md`, decision log D-452, `OPEN_QUESTIONS.md` |

No public template, schema, URL, title, description, sitemap entry, robots directive or structured data changed. Rule [Q9] makes sure no page can reference the QA register.

## 5. Pilot assessments (AI-assisted; not teacher reviews)

| Record | Resource | Official source (saved) | Score | State |
|---|---|---|---:|---|
| QA-0001 | `igcse-chemistry-0620-elements-atomic-structure-and-isotopes` | 0620 2026-2028 v2 | 93.5 | ACADEMIC_REVIEW_PENDING |
| QA-0002 | `a-level-aqa-chemistry-relative-mass-and-the-mole` | AQA 7404/7405 spec | 75.0 | REVISION_REQUIRED (2 major) |
| QA-0003 | `a-level-psychology-clinical-psychology-practice` | 9990 2024-2026 | 85.5 | REVISION_REQUIRED |
| QA-0004 | `atomic-structure-practice` (before correction) | 0620 + 5070 2026-2028 | 79.5 | history (stale) |
| QA-0005 | `atomic-structure-practice` (after correction) | same | 82.5 | REVISION_REQUIRED |

Method: one subagent per page read the page and the official PDF, recomputed every calculation, and returned a record in the register format. The lead re-checked every **major** finding against the page text and the extracted PDF text before recording it. Minor and advisory findings are recorded as the assessor reported them, with their evidence, as leads for a teacher.

An IB DP Biology pilot was planned but **blocked**: ibo.org returns HTTP 403 to automated download of the subject guide. It was not worked around (OQ-6).

Open findings on current content: 2 major, 16 minor, 19 advisory; 0 hard-stops.

## 6. Resources corrected

**`atomic-structure-practice`** (QA-0004 F1, major, confirmed). Question 4 asks students to explain why isotopes have identical chemical properties. That is 0620 **Supplement** content (syllabus 2.3, Supplement outcome 3), but the tier note told 0620 Core candidates that every question except the Ar calculations was theirs.

Corrected on 15 Nov 2026 in three places:

- the tier note, which now names Q7, Q13 and the second part of Q4;
- Q4's label;
- the FAQ answer.

The edit changed the page hash, so the validator reported QA-0004 as stale, as designed. QA-0005 records the fix as a reassessment. The built page shows the new text.

**Not corrected** (owner decision needed, OQ-7): the AQA moles page's four out-of-scope figures and its "Edexcel worked example" / "tagged OCR and Edexcel" labels. These are images on img.marlbridge.com, and the same figures appear on two other AQA pages.

## 7. SEO / AEO / GEO / AIO / SXO

| Discipline | Finding | Change | Evidence | Remaining |
|---|---|---|---|---|
| SEO (metadata accuracy) | 12 titles/descriptions use complete-coverage wording; 2 supported by the mapping, 4 not supported by it, 6 need a reader | New scorecard check, report only; no metadata changed | dashboard "Search metadata" table | OQ-10: teacher reading, then owner approval for any rewording |
| SEO (technical) | No public change this programme | none | `audit:all` on this branch's build (test-results.md) | — |
| AEO | Answers stay tied to visible text (D-448); the corrected FAQ now names all Extended parts | 1 FAQ answer corrected | built page | — |
| GEO / AIO | No review or rating markup emitted from QA data (D-380 kept); scores are internal | Q9 guard | negative case BA | Publishing any QA signal publicly would be an owner decision, and only after teacher approval |
| SXO | Pilot check 10 recorded student-journey issues: the Core/Extended tier note (fixed); figures out of sequence on the AQA page | as section 6 | QA-0001..0005 | OQ-7 |
| International | No translated page carries resource-level academic content in scope; ar/ur/bn legal pointers are unchanged (OL-1 still open) | none | — | OL-1 |

No ranking, traffic or AI-citation effect is claimed.

## 8. Downloaded sources

Four official PDFs are saved in `Papers 2025/resource check`, and their SHA-256 hashes were checked from disk by `qa:source-manifest --verify`:

- `Cambridge/IGCSE/Cambridge-IGCSE-Chemistry-0620-syllabus-2026-2028.pdf`
- `Cambridge/O-Level/Cambridge-O-Level-Chemistry-5070-syllabus-2026-2028.pdf`
- `Cambridge/AS-A-Level/Cambridge-AS-A-Level-Psychology-9990-syllabus-2024-2026.pdf`
- `AQA/AQA-AS-A-level-Chemistry-7404-7405-specification-2015.pdf`

The full manifest is [`source-manifest.json`](source-manifest.json), with a copy and a CSV under `resource check/Source-Manifests/`. None of these files is in the repository.

## 9. Outstanding (each has a next action in OPEN_QUESTIONS.md)

- **Critical:** none open; 0 hard-stops on current content.
- **High:**
  - OQ-7 (AQA figures);
  - OT-5 (first documented teacher verification, QA-0001 is ready);
  - OQ-9 (no eligible reviewer for Cambridge 9990, and its syllabus ends November 2026);
  - OT-4 (still open: QA-0003 is AI-assisted, not the teacher check it needs).
- **Medium:**
  - OQ-6 (IB guide);
  - OQ-8 (gate activation date);
  - OQ-10 (metadata wording);
  - OT-6 (7405 taxonomy lacks 3.1.2.5);
  - OT-7 (minor pilot findings).
- **Next phase:** articles and the AP library (OQ-11), and scaling assessments down the risk queue. That needs either teacher time or an owner decision on further AI-assisted passes.
