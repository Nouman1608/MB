# Marlbridge Academic Quality Assurance Framework

**Rubric version 1.0.0 · Decision D-465 (15 Nov 2026) · Owner of the policy: the project owner · Code: `src/utils/academic/qa-rubric.ts`**

This framework says how a Marlbridge resource is judged academically, how that judgement is recorded, and what a page needs before Marlbridge can call it verified. It extends the systems already in place (the academic-review ledger, D-386; the meaning of "reviewed", D-379; documented teacher verification, D-448). It does not replace them.

Accuracy comes before search rankings, publishing volume or commercial aims. Nothing in this framework allows a score, an AI output or a teacher credit to stand in for a subject teacher's documented check.

## 1. Five kinds of evidence, never merged

| # | Evidence | Where it is kept | Who or what produces it | What it is not |
|---|---|---|---|---|
| A | Automated structural checks | `docs/reports/academic-review/ledger.csv` (`structuralValidation`) | `npm run report:review-ledger`, every resource | Not an accuracy check |
| B | Repository-side specification check | `docs/reports/academic-review/pending-review-*.json` | Earlier programmes (D-386) | Not a teacher review |
| C | Accountable-teacher credit (`reviewStatus: "reviewed"`) | resource frontmatter | Owner's bulk credit (D-379) | **Not** a dated, line-by-line check. It never raises a QA state |
| D | Rubric assessment (`ai-assisted` or `human`) | `docs/reports/academic-qa/assessments.json` | An AI system reading the page against official documents, or a teacher | Not an approval |
| E | Documented teacher verification | `docs/reports/academic-review/teacher-verifications.json` | A named, authorised teacher who actually did the check | — |

Reports show each kind on its own line. No report gives a single "reviewed" percentage.

## 2. The ten mandatory checks

| # | Check | What is examined | Machine-checkable part (where it runs) | Needs a person |
|---|---|---|---|---|
| 1 | Syllabus accuracy | Board, qualification, code, series, outcome numbers and wording, Core/Extended, Foundation/Higher, AS/A, SL/HL, completeness claims | Board/qualification/code combination, topic and subtopic exist, cross-board codes, coverage claims (ledger; `validate-academic-content` M1-M5; `validate-cross-board-integrity`; rendered-label audit); coverage wording in titles and descriptions (scorecard) | Whether the content matches each outcome |
| 2 | Factual and scientific accuracy | Definitions, statements, figures, terminology, contradictions, outdated content | Placeholder text | Everything else |
| 3 | Worked answers and assessment accuracy | Calculations, units, significant figures, answers, mark tariffs, command words, assessment figures | Answer section present for practice sets; assessment records (`validate-assessments`); tier labels on practice questions | Recomputing answers; checking marking against the board's own style |
| 4 | Depth and teaching value | Teaches its declared scope; worked examples; misconceptions; exam technique; no filler | Near-duplicate detection (ledger) | Judgement of usefulness |
| 5 | Source traceability | Key claims traceable to official documents; secondary sources named as secondary; no invented citations | Official-source attribution present (ledger); official domain on every verification and assessment record | Whether the citation supports the claim |
| 6 | Clarity and accessibility | Headings, tables, notation, alt text, plain language; WCAG 2.2 AA where it applies | `audit:accessibility` on built pages | Alt-text accuracy, readability |
| 7 | Originality and copyright | Original wording; past papers referenced, not reproduced; licensed images | Named past paper flagged (ledger WARN) | Comparison with source papers; legal questions go to the owner |
| 8 | Editorial and review accountability | Author, accountable teacher, verification evidence, no implied checks | Review-state integrity (`validate-review-integrity` rules 1-13) | — |
| 9 | Freshness and syllabus lifecycle | Series current for the students served, or exam years stated | Superseded/current records (`syllabus-topics.ts`); series present (ledger WARN) | Whether a newer syllabus changes the content |
| 10 | Student experience | Scope stated, practice, answers, next steps, links work, calls to action do not interrupt | Internal links (ledger; `audit:internal-links`) | Judgement of the journey |

Each check is recorded separately in every assessment (`checks."1"`…`"10"`), so none disappears into a total.

## 3. The 100-point rubric (v1.0.0)

| Category | Max | Checks it scores |
|---|---:|---|
| Syllabus alignment | 20 | 1, 9 |
| Factual accuracy | 20 | 2 |
| Worked answers and exam alignment | 20 | 3 |
| Depth and teaching value | 15 | 4, 10 |
| Source traceability | 10 | 5, 7 |
| Clarity and accessibility | 10 | 6, 10 |
| Editorial completeness | 5 | 8 |
| **Total** | **100** | |

Rules:

- Points are given in half points, and every score needs **evidence** (sections, outcome numbers, document pages, recomputations) and **reasoning**.
- The **total is computed, never stored.** An assessment with any category unscored has **no total**. It is never 0, never 100 and never a guess. Resources with no assessment have no score and are excluded from every average.
- Only *worked answers and exam alignment* may be **not applicable**, and only on a page with no questions, answers or worked examples. The total is then scaled to 100 over the other 80 points.
- **Bands** (a Marlbridge policy, not an awarding-body standard): 90-100 meets the target (subject to gates and approval); 75-89.9 needs improvement and reassessment; below 75 needs major revision before approval.

### Hard-stop conditions

Any **open** finding with one of these codes blocks the resource **whatever its score**. A 97/100 page with a critical factual error is BLOCKED, not approved:

`MATERIAL_FACTUAL_ERROR`, `WRONG_BOARD_OR_QUALIFICATION`, `WRONG_SYLLABUS_CODE_OR_VERSION`, `INCORRECT_WORKED_ANSWER`, `WRONG_ASSESSMENT_DETAIL`, `UNSUPPORTED_COMPLETE_COVERAGE`, `FABRICATED_SOURCE`, `FABRICATED_REVIEW`, `CROSS_BOARD_CONTAMINATION`, `COPYRIGHT_OR_INTEGRITY_CONCERN`, `MISLEADING_QUALIFICATION_CLAIM`.

A hard-stop must be severity `critical`, and it cannot be closed as `wont-fix`.

### Finding severities

`critical` (materially wrong, would cost marks or mislead), `major` (significant gap or inaccuracy), `minor` (small precision or wording issue), `advisory` (suggestion). An open `major` or `critical` finding keeps the page in REVISION_REQUIRED even when its score is 90 or more.

## 4. QA states

One state per resource, derived (never typed in) by `deriveQaState()` in this order:

| State | When |
|---|---|
| `BLOCKED` | Structural FAIL in the ledger, an open error in the repository verification record, or an open hard-stop in the current assessment |
| `REVERIFICATION_REQUIRED` | The page's content hash differs from the one its latest assessment or teacher verification recorded, so the page was edited after it was checked |
| `REVISION_REQUIRED` | Score below 90, an open major/critical finding, or the teacher requested changes |
| `ACADEMIC_REVIEW_PENDING` | Complete score of 90 or more with no documented teacher approval (or approval with no complete score) |
| `VERIFIED_APPROVED` | **Owner decision, 15 Nov 2026:** documented teacher approval **and** a complete score of 90 or more **and** no open hard-stop or major finding |
| `AUTOMATED_CHECK_COMPLETE` | Automated checks only; no complete rubric assessment |
| `NOT_ASSESSED` | Not in the academic-review ledger yet |

The accountable-teacher credit (kind C) changes none of these. The existing `reviewStatus` and `reviewedDate` fields keep their D-379 meaning; this framework does not migrate or relabel them.

### Content hash

Every assessment and every teacher verification records `contentSha256`, the SHA-256 of the resource as checked: the whole file with LF line endings, leaving out only three frontmatter lines that no student sees and that make no academic claim (`reviewNote`, `featured`, `order`; `HASH_EXCLUDED_KEYS` in `scripts/lib/academic-qa-data.mjs`). That exclusion was added after D-453 reworded 7,636 `reviewNote` lines in one commit, which would otherwise have made every assessment stale. When anything else changes, including any new or unknown field, the hash no longer matches and the record becomes history: the page moves to REVERIFICATION_REQUIRED until someone checks it again. Records are append-only. A reassessment is a new record (`reassessmentOf` names the old one), so the audit trail is kept.

## 5. Records

- **Assessments**: `docs/reports/academic-qa/assessments.json`. Field definitions are in its `meta.fields`. An AI-assisted record must say `"assessor": "AI-assisted (<model>)"`. A human record must name an isReviewer profile covering the boards and subject, plus `humanEvidence`.
- **Teacher verifications**: `docs/reports/academic-review/teacher-verifications.json` (D-448 format plus `contentSha256`, D-465).
- **Scorecard** (generated): `docs/reports/academic-qa/scorecard.csv`, `scorecard.json`, `dashboard.md`, `dashboard.html` and `review-queue.md`.
- **Source manifest**: `docs/reports/academic-qa/source-manifest.json` (see section 9).

All of these are internal. Validator rule [Q9] fails the build if a page, component or layout references them.

## 6. Human academic review workflow

| Stage | What happens | Tool or record |
|---|---|---|
| 1 Selection | Take pages from the top of the risk queue (section 7) | `review-queue.md` |
| 2 Eligibility | A teacher can review a page when their profile is isReviewer, lists every board of the page, covers its subject, and they are not its author | `eligibleReviewers` in the ledger and scorecard |
| 3 Review pack | The resource, its hash, official sources (with the owner's local copy), automated and earlier findings, the ten-check checklist, a scoring sheet and record templates | `npm run qa:review-pack -- <slug>` → `docs/reports/academic-qa/review-packs/` |
| 4 Verification | The teacher reads the page against the official document | The teacher's own notes |
| 5 Correction | Errors are corrected in the page; each correction changes the hash | Commit; the finding is closed with a `resolution` |
| 6 Approval | The teacher records the decision: `approved`, `approved-after-corrections` or `changes-requested` | `teacher-verifications.json`, plus a `human` assessment if the teacher scores it |
| 7 Status update | The scorecard derives the new state; nothing public changes automatically | `npm run report:academic-qa` |
| 8 Reverification | Any later edit (hash change) or a syllabus change sends the page back to stage 1 | REVERIFICATION_REQUIRED |

Restrictions: nobody records approval on a teacher's behalf. Being eligible is not the same as being assigned or having accepted. No record is backdated. A teacher credit (kind C) is never converted into a verification (kind E). The validator rejects records that break these rules.

## 7. Risk-based queue

Lower tier = sooner. The tier is decided by the first rule that matches:

1. BLOCKED
2. REVISION_REQUIRED or REVERIFICATION_REQUIRED
3. Ledger outcome UNVERIFIED (never checked against its specification)
4. Ledger outcome REPO_PARTIAL_UNVERIFIABLE
5. Exam-preparation and past-papers guides (they state papers, marks, durations, thresholds)
6. Practice questions (worked answers)
7. High-stakes numerical or scientific subjects
8. Everything else

**Demand is unknown** for every page: no reliable Search Console or analytics export is in the repository, so traffic is not used and not guessed. When an export exists, it can become a tie-breaker inside a tier. That would be an owner decision.

## 8. Publication gate

Owner decision, 15 Nov 2026: **integrity now, coverage later.**

- **Enforced now** (`scripts/validate-academic-qa.mjs`, part of `validate:academic`, so it runs on every build):
  - malformed or unevidenced scores, and stored totals;
  - AI output recorded as human, and human records without evidence;
  - records from a non-official source domain, and future dates;
  - "pass" on a check with an open finding, and full marks beside an open major finding;
  - an open hard-stop on current content;
  - a public page referencing the QA register;
  - a teacher verification without a content hash.
- **Reported only:** new resources published without a rubric assessment (`QA_GATE.newResourceAssessment`, mode `report`, no activation date). Setting a date is an owner decision. From that date, a new resource with no assessment would fail the build.
- No existing page is deleted, unpublished, noindexed or relabelled by this framework.

## 9. Academic reference documents

Owner's rule: every academic reference downloaded for QA work is saved in the owner's OneDrive folder **`Papers 2025/resource check`** (organised by board), never in this repository and never in `public/`.

- `npm run qa:source-manifest` (with `QA_RESOURCE_DIR` set to that folder) recomputes each file's SHA-256 from disk and checks that it exists and is a real PDF. It writes the manifest beside the files (`Source-Manifests/source-manifest.json` and `.csv`) and a copy in the repository with relative paths only. It never substitutes another folder.
- Only official, publicly downloadable documents are fetched. A site that refuses automated download (for example ibo.org's 403 on the DP Biology guide) is **not** worked around; the document is requested from the owner.

## 10. Search, answer and AI-search quality

The framework protects search visibility by keeping what pages say about themselves true. It does not chase rankings.

- **SEO / AEO:** the scorecard checks coverage wording in titles, SEO titles and descriptions ("every topic", "full syllabus", "covering all" …) against the page's own syllabus mapping. A verdict of NOT_SUPPORTED_BY_MAPPING means the data cannot confirm the wording; a teacher decides, and the owner approves any metadata change. Rendered "(whole topic)" labels have been guarded since D-448.
- **GEO / AIO:** machine-readable claims (FAQPage text, llms.txt counts, structured data) are already tied to visible content and computed from the collections (D-448; `audit:structured-data`; negative case E). This framework adds no public markup. In particular, no review or rating schema is emitted from QA scores (D-380), and none should be until scores are teacher-approved.
- **SXO:** check 10 records the student journey for every assessed page.
- **E-E-A-T** is treated as a trust framework, not a score. Its evidence is kinds C-E above, shown honestly.

## 11. Example evaluations (pilot, 15 Nov 2026, AI-assisted)

All four pilot assessments were done by an AI system reading each page against the official PDF saved in the owner's folder. Every major finding was re-checked by hand before it was recorded. None of them is a teacher review.

| Record | Page | Score | State | What decided it |
|---|---|---:|---|---|
| QA-0001 | 0620 Elements, atomic structure and isotopes (study guide) | 93.5 | ACADEMIC_REVIEW_PENDING | All 11 outcomes of 2.1-2.3 with correct tiers; all ten worked examples recomputed and correct; minor and advisory points only. It needs a teacher's documented approval to reach VERIFIED_APPROVED |
| QA-0002 | AQA 7405 Relative mass and the mole (AS content) | 75.0 | REVISION_REQUIRED | Two major findings: four figures teach content the page says is out of scope, and a figure is labelled "Edexcel worked example" on an AQA page |
| QA-0003 | Cambridge 9990 Clinical psychology practice | 85.5 | REVISION_REQUIRED | Accurate content; the series ends with November 2026 and the page says nothing about 2027; the Paper 4-style section does not match the paper format |
| QA-0004 → QA-0005 | 0620/5070 Atomic structure practice | 79.5 → 82.5 | REVISION_REQUIRED | Major: Q4's second part is 0620 Supplement 2.3 outcome 3, but the page told Core candidates they could answer it. **Corrected** on 15 Nov 2026; QA-0004 became stale and QA-0005 records the fix. Minor findings remain |

### Pilot closure (17 Nov 2026, D-496)

The four pages were corrected and reassessed. The records above are kept as history; these are the current ones. All are AI-assisted and none is a teacher review.

| Record | Replaces | Score | State | What is left |
|---|---|---:|---|---|
| QA-0006 | QA-0001 | 95.5 | VERIFIED_APPROVED (18 Nov 2026, D-497) | One image label |
| QA-0007 | QA-0002 | 91.5 | VERIFIED_APPROVED (18 Nov 2026, D-497) | One image rounds an intermediate value |
| QA-0008 | QA-0003 | 88.0 | replaced by QA-0010 | |
| QA-0010 | QA-0008 | 89.0 | REVISION_REQUIRED (teacher verification recorded 18 Nov 2026, D-499; score below 90) | Level descriptors for the 10-mark answer; one study procedure unchecked |
| QA-0009 | QA-0005 | 92.0 | VERIFIED_APPROVED (18 Nov 2026, D-499; owner-reported) | |

Details: `docs/reports/academic-qa/pilot-closure-report.md`. Assessment dates use the UTC date, the one the validator compares against.

## 12. Commands

```bash
npm run report:review-ledger                                     # ledger first: the scorecard reads it
npm run report:academic-qa                                       # scorecard + dashboard + queue
npm run validate:academic-qa                                     # integrity gate (also inside validate:academic)
npm run qa:review-pack -- <slug> [<slug> ...]                    # teacher review packs
QA_RESOURCE_DIR="<resource check folder>" npm run qa:source-manifest -- --verify
node --experimental-strip-types scripts/test-negative-validation-suite.mjs   # cases AW-BC cover this framework
npm run test:academic-qa                                         # lifecycle tests on the real register (add -- --dist after a build)
```

## 13. Changing the rubric

Weights, bands, hard-stop codes and the approval rule are owner policy. A change means:

1. a new `RUBRIC_VERSION`;
2. a decision-log entry;
3. updated unit tests.

Assessments made under an older version stay valid as history but are not current. The validator accepts only the current version, so existing pages are reassessed rather than silently rescored.

## 14. What this framework does not claim

It does not claim 100% academic accuracy, any search-ranking or AI-citation effect, or that the library has been teacher-verified (0 documented teacher verifications existed on 15 Nov 2026; 4 of 10,241 pages have one on 18 Nov 2026, D-497 and D-499). It does not claim that the automated checks prove accuracy. Technical implementation can be complete while the academic review backlog remains open; the two are reported separately.
