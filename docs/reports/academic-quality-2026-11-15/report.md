# Academic quality, search visibility and trust remediation — findings A–F

Decision record: D-448 (`docs/decision-log.md`). Open items: [`OPEN_QUESTIONS.md`](../../../OPEN_QUESTIONS.md). Branch `claude/awesome-mccarthy-mm07j1`, based on `main` at `24c0bc63`.

## A. Executive summary

All six reported findings were investigated against the current source and data, not the earlier report.

| Finding | Status |
|---|---|
| A, E: whole-topic labels | **Confirmed.** Root cause in shared rendering logic. Fixed once for every page; 0 unsupported completeness labels remain. Guarded at data, unit-test and rendered-HTML level. |
| B: reviewer accountability | **Model already sound (D-379).** Three evidence defects were found and corrected on your answers: 40 unsupported "Checked by" lines, a policy sentence claiming checks with no record, and AP "Reviewed by" dates. A fourth verification concept was added with 0 records; none was inferred. |
| C: IB SL/HL | **Confirmed**, plus the same flat-answer defect on 16 Cambridge AS & A Level hubs. Fixed in a now unit-tested builder that runs on every assessment record. |
| D: statistics and sources | **Partly confirmed.** The English counts reconcile and are computed at build time. Defects fixed: hardcoded home and practice figures, stale/mixed llms.txt, frozen translated review claims, subject briefs labelled "specification". Two source questions are left to you. |
| F: AS / A Level | **Disproven as stated.** No AQA AS Chemistry 7404 page or record exists. A related labelling question is open (OQ-4). |

Not claimed: 100% academic accuracy, any human review, any search-ranking or AI-citation effect. Automated checks are structural; they do not replace a teacher reading a page.

## B. Findings register

| ID | Description | Sev. | Example URL | Source | Board / qual / subject / code | Confirmed | Evidence | Root cause | Correction | Tests | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-1 | Partial resource shows parent "(whole topic)" | High | /resources/igcse-chemistry-0620-elements-atomic-structure-and-isotopes/ | `src/utils/academic/syllabus-points.ts:62` (before) | Cambridge IGCSE Chemistry 0620 | Yes | The page's own mapping lists 3 of the 7 subtopics of topic 2 | Every topic-level entry was labelled "(whole topic)" | Membership/coverage split; explicit validated `coverage` claim | unit 11, negative AN-AQ + rendered fixture | Fixed |
| E-1 | Same, system-wide | High | 0580 / 4MA1 / 4BS1 reference pages | same | 54 codes | Yes: 835 entries / 835 pages | `topic-coverage-audit.json` CONTRADICTED | same | same, no resource edited | rendered-label audit [3] | Fixed |
| E-2 | Topic-level-only mapping; which subtopics are covered is not recorded | Med | 380 pages | resource frontmatter | 40+ codes | Unconfirmed (needs a teacher) | class TOPIC_ONLY_SUB, 429 entries | Mapping granularity | Now "(topic-level mapping)", honest but imprecise | — | Blocked: OT-1 |
| E-3 | Subtopic under the wrong parent was not validated | Med | — | `validate-academic-content.mjs` | all | 0 cases today; rule gap confirmed | Validator checked the slug existed anywhere | Missing rule | Rule [M1] | negative AO | Fixed (guard) |
| E-4 | Older-series resources numbered against the current record | Med | 5014 2025-2026 pages | `syllabus-points.ts` | Cambridge O Level Env. Mgmt 5014 | Yes: 8 pages showed no points | `topicsFor` is current-only | Version selection ignored `syllabusSeries` | `versionFor()` | unit 2 | Fixed |
| B-1 | "Checked by … official specification, 15 Nov 2026" with no record; own notes say still to check | High | /resources/ib-ib-dp-psychology-abnormal-psychology-study-guide/ | 18 resource files | IB DP Psychology | Yes | `pending-review-*.json` has no record; D-log: only the 2-page 2019 brief was held | Line set without the D-388 evidence | Removed (owner A1) | rule [12], negative AR | Fixed |
| B-2 | Same gap, dated 8 Nov | High | /resources/a-level-psychology-clinical-psychology/ | 22 files | Cambridge 9990, AQA 7182 | Yes | no record | same | Removed (owner A5) | rule [12] | Fixed |
| B-3 | Policy: every resource "is checked … before publication" | High | /legal/editorial-policy/ | `editorial-policy.astro` | — | Yes | ledger: 95 UNVERIFIED; 7,268 "content not re-checked" | Claim broader than the record | Computed count of resources with a recorded check (owner A3); AI paragraph narrowed the same way | build | Fixed |
| B-4 | AP "Reviewed by [name], 8 Nov 2026": date reads as a review event; no profile covers AP | Med | /advanced-course-resources/… | AP page template, 7 profiles | AP, 15 courses | Yes | D-379 removed dates on the main site; profile boards lack AP | AP template predates D-379 alignment | Undated, linked, "(what this means)"; `apCoursesReviewed` (owner A4) | validate-ap-library, negative AT | Fixed |
| B-5 | 7,606 internal reviewNotes read "<date>: reviewed by X" | Low | not public | resource frontmatter | all | Yes | `git show 03159b8c` | Bulk-credit note wording | Reworded to "credited to X (accountable teacher, D-379)", date kept (D-452) | rule [14], negative AV | Fixed |
| C-1 | IB DP Biology/Chemistry FAQ gives HL figures without "HL" | High | /boards/ib/ib-dp/biology/ | `[subject].astro:496-531` (before) | IB DP Biology, Chemistry | Yes | rebuilt answer string; FAQPage JSON-LD copies it | Level named only when 2+ levels | Single-level naming plus scope note | unit 7 (all records), mutation-tested | Fixed |
| C-2 | Staged Cambridge AS/A hubs: "% of the qualification", AS route unstated | Med | /boards/cambridge/a-level/chemistry/ | same | 16 Cambridge AS & A Level | Yes | 9701 Paper 1 "15.5% of the qualification" | Record-level stages never named | "% of the A Level" plus AS-route note | unit | Fixed |
| C-3 | SL figures absent for DP Biology/Chemistry | Med | same | `assessments.ts` | IB | Data gap (not an error) | notes say HL only; D-128 | Licensed guide | Not supplied (no guessing) | — | Open: OQ-2 |
| D-1 | Home meta "2,300+ free revision notes and practice questions" | Med | / | `index.astro:49` | — | Yes | 2,619 notes + 2,637 practice files | Hardcoded, mixed units | Computed, one unit per figure | build | Fixed |
| D-2 | Practice meta "Cambridge and Edexcel" omits AQA | Low | /practice/ | `practice/index.astro:45` | — | Yes | AQA GCSE specs have questions | Hardcoded | Derived from specs with questions | build | Fixed |
| D-3 | llms.txt counts raw files and omits AP | Low | /llms.txt | `generate-llms-txt.mjs` | — | Yes | committed copy said 8,088 | Separate counting path | Non-draft count; AP stated separately | negative E | Fixed |
| D-4 | ar/ur/bn policy: frozen "no study resource reviewed" (26 Aug) | High | /ar/legal/editorial-policy/ etc. | `src/i18n/pages/legal.ts` | — | Yes | English page shows 7,756 credited | Translation never updated | Pointer to English (owner A2); AI paragraph the same | build | Fixed; native review OL-1 |
| D-5 | IB subject briefs linked as "Official specification"; FAQ "official specification" | Med | 786 IB resource pages, IB hubs | `[slug].astro`, FAQ | IB | Yes | 15 of 21 IB records link a brief | Fixed label | "Official subject brief" | unit (sourceKind) | Fixed |
| D-6 | thinkib.net value vs policy "never a tutoring site" | Med | /boards/ib/ib-dp/english-language-and-literature/ | `assessments.ts` | IB DP Lang & Lit | Yes (conflict) | record cites thinkib.net | — | none | — | Open: OQ-3 |
| D-7 | "N named subject specialists" (23) vs "8 named teachers" | Low | / and policy | components | — | Different definitions | agent table | — | Units named: "teacher profiles", "named authors" (D-451) | build | Fixed |
| F-1 | AS 7404 page showing 7405 figures | — | — | — | AQA Chemistry | **Disproven** | no 7404 record/page/resource | — | — | — | Closed |
| F-2 | 7405 `stage: AS` shows "AS Level" filter value shared with AQA AS 7135/7137 | Low | AQA 7405 resources (53) | `collections.ts:95-98` | AQA A Level Chemistry 7405, Biology 7402 | Yes (ambiguity) | — | Label choice | "A Level (AS content)" (D-450, owner OQ-4) | level-label tests | Fixed (105 pages) |

## C. Syllabus mapping audit

From `scripts/audit-topic-coverage-claims.mjs` (full rows in [`topic-coverage-audit.json`](topic-coverage-audit.json), summary in [`topic-coverage-audit.md`](topic-coverage-audit.md)):

- Inspected: **8,158** resources and articles; 7,884 with a mapping; 7,685 resolve to a syllabus record.
- Showing "(whole topic)" before: **3,220 pages** (3,431 topic-level entries). Every one is a suspected overclaim, because none carried a coverage claim.
- **Confirmed** (the record contradicts the label): **835** entries on 835 pages.
- **Corrected**: all 3,431 entries, by one change to shared logic. 0 completeness labels now render without a claim.
- **Blocked / needs clarification**: 429 entries on 380 pages (topic-only, the topic has subtopics; OT-1).
- Topic is the finest grain in the record: 1,478 entries; they now render "(topic-level mapping)".
- Representative examples: the four reference pages (0620 2.1-2.3; 0580 2.1-2.2; 4MA1 2.1-2.2; 4BS1 2.x) are all in the CONTRADICTED class.
- Series check (scratch, needs a teacher): 5014, 0479 and H060 show apparent genuine series differences (OT-2). Other mismatches are wording only, because `syllabusSeries` is free text.

## D. Academic review integrity

Figures from `docs/reports/academic-review/ledger-summary.md`, regenerated on this branch (see section H):

| Category | Resources |
|---|---|
| Total resources | 8,143 |
| Teacher-credited (accountable, D-379; not a line-by-line review) | 7,756 status "reviewed" (ledger outcome TEACHER_CREDITED 7,268) |
| Review-pending | 387 |
| Repository-verified (REPO_VERIFIED + after correction) | 585 + 42 |
| Partial verification (REPO_PARTIAL_UNVERIFIABLE) | 153 |
| Unverified | 95 |
| Showing "Checked by Marlbridge Academic Team" | 332 → **292** (40 unsupported removed) |
| Genuine documented teacher verifications | **0** (no evidenced record exists; the format and rule [13] are ready) |
| Pending with no eligible reviewer | 387 (unchanged) |

These categories are not merged, and no "teacher reviewed" percentage is stated.

## E. Assessment accuracy

- SL/HL: DP Biology and DP Chemistry (HL-only records) now name HL in the FAQ and in the JSON-LD. The 14 IB records with both levels were already grouped per level.
- AS/A Level: 16 staged Cambridge records now say "% of the A Level" and that the AS route is not itemised. 9709 keeps both figures where an AS weighting is recorded.
- Core/Extended and Foundation/Higher: 13 records were already grouped. The new unit test asserts that every record with levels names each level.
- No assessment figure was added or changed; only the wording around existing figures.

## F. SEO / AEO / GEO / AIO / SXO

| Discipline | Problems | Changes | Expected benefit | Validation | Limits / remaining |
|---|---|---|---|---|---|
| SEO | Completeness overclaim in 3,220 resource pages' syllabus-points block; mixed-unit home meta | Honest labels; computed meta | Content no longer overstates coverage | rendered audit [3]; `audit:metadata` | Titles and descriptions were already scoped ("sub-topics 2.1-2.3"); not rewritten |
| AEO | FAQ answers that can be extracted without level context | Level named inside every answer; qualification in the question | An extracted answer carries its own scope | unit tests on all records | SL figures still absent (OQ-2) |
| GEO | AI readers could read "whole topic", read HL figures as SL, or treat a subject brief as the specification | Same fixes; llms.txt counts corrected | Accurate entity and scope signals | build plus tests | No AI citation effect is claimed |
| AIO | llms.txt mixed counting paths | Non-draft count; AP separate | Matches the site | negative [E] | llms.txt is optional and not an indexing guarantee |
| SXO | Student journeys 1-3 (Chemistry Core/Extended, IB SL, AS) | "3 of the 7 subtopics in topic 2", tier per point; SL told HL figures are not theirs | Students see what the page does and does not cover | rendered pages | Journey 3: no AQA AS Chemistry page exists; journey 4 not changed |
| Structured data | FAQPage text = visible text (unchanged mechanism); no review markup emitted (D-380) | none needed | — | `audit:structured-data` | — |

## G. Technical changes

- Shared logic: `src/utils/academic/syllabus-points.ts` (rewritten); new `src/utils/academic/assessment-faq.ts` (extracted from the hub template).
- Schema (`src/content.config.ts`): optional `syllabusTopics[].coverage` (resources and articles); author `apCoursesReviewed`.
- Templates: `resources/[slug].astro` (points list, official-link label), `boards/.../[subject].astro` (FAQ), `advanced-course-resources/.../[resource].astro` (AP reviewer line), `authors/[slug].astro`, `legal/editorial-policy.astro`, `index.astro`, `practice/index.astro`; `src/i18n/pages/legal.ts`.
- Validators: `validate-academic-content.mjs` [M1]-[M5]; `validate-review-integrity.mjs` [12], [13]; `validate-ap-library.mjs` (AP reviewer profile); `validate-rendered-academic-labels.mjs` [3]; `validate-tiered-faq-routes.mjs` (follows the extraction).
- Tests: `syllabus-points.test.mjs` (11), new `assessment-faq.test.mjs` (7, wired into `test:tools`); negative suite cases AN-AU plus a rendered whole-topic fixture.
- Data: 40 resource files (specCheck removed); 7 author profiles; new `docs/reports/academic-review/teacher-verifications.json` (0 records); `public/llms.txt` regenerated.
- Reports: this folder; ledger and coverage reports regenerated.

## H. Test results

See [`test-results.md`](test-results.md): commands, before/after results, and pre-existing failures recorded separately.

## I. Open questions

See [`OPEN_QUESTIONS.md`](../../../OPEN_QUESTIONS.md): 5 owner questions, 4 teacher tasks, 1 translator task.

## J. Prioritised backlog

**Critical**
1. (Teacher) Real checks for the 40 Psychology pages before any "Checked by" line returns (OT-4).

**High**
2. (Owner) SL assessment figures for IB DP Biology/Chemistry, or approved deferral (OQ-2).
3. (Teacher) Itemise subtopics for the 380 topic-level-only pages (OT-1).
4. (Teacher) Series check for 5014 / 0479 / H060 (OT-2).
5. (Owner) thinkib.net source vs policy (OQ-3).

**Medium**
6. (Translator) Native review of the six translated pointer sentences (OL-1).
7. (Technical) Give `syllabusSeries` a normalised key so series mismatches can be validated, not just eyeballed.
8. ~~7405 "AS Level" filter label (OQ-4)~~: done in D-450.

**Low**
9. ~~Internal reviewNote wording (OQ-1)~~: done in D-452.
10. ~~"Named teachers" definitions (OQ-5)~~: done in D-451.
