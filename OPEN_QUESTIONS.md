# Open questions — academic quality remediation (D-448, 15 Nov 2026)

Every item below is unresolved and needs the owner, a qualified subject teacher or a translator. Nothing here has been guessed or filled in. The questions answered during this programme are recorded in `docs/decision-log.md` under D-448. The full report is in `docs/reports/academic-quality-2026-11-15/report.md`.

## Answered during this programme (kept for traceability)

| # | Question | Owner's answer (15 Nov 2026) |
|---|---|---|
| A1 | 18 IB DP Psychology pages said "Checked … against the official specification, 15 Nov 2026", but there was no verification record and their own notes still asked for the check | Remove the line until a dated record exists |
| A2 | The ar/ur/bn editorial policies said "no study resource has had a second review" (frozen at 26 Aug) | Replace with a pointer to the English policy |
| A3 | The English policy said every resource "is checked against that document before publication", but the ledger records 95 UNVERIFIED | Narrow it, with a computed count |
| A4 | AP "Reviewed by [name], 8 Nov 2026": the date read as a review event, and no profile listed AP | Align the display with D-379 and add the AP courses to the profiles |
| A5 | 22 more Psychology pages (Cambridge 9990, AQA 7182) had the same unsupported "Checked by … 8 Nov 2026" | Remove the line in the same way |

## Open — needs the owner

| ID | Question | Evidence | Options (recommended first) | Affected files |
|---|---|---|---|---|
| OQ-1 | Should the 5,243 internal `reviewNote` values "2026-11-08: reviewed by X." be reworded to "credited to X (accountable teacher, D-379)"? They are not shown publicly, but they contradict D-379's meaning, and an auditor or another tool could read them as review events. | `git show 03159b8c`: 7,554 pages were credited in one commit on 8 Nov | (a) Reword them mechanically and keep the date; (b) leave them and note the meaning in `content.config.ts` | `src/content/resources/*.md` |
| OQ-2 | IB DP Biology and Chemistry hold HL assessment figures only. The FAQ now says SL figures are not listed. Can you supply the SL assessment outline from the IB subject guides (licensed), or approve deferring it? | `src/data/academic/assessments.ts` (DP Biology notes: "Standard Level is therefore not included"); D-128 | (a) Supply the guide pages; (b) defer, keeping the honest "not listed" wording | `assessments.ts` |
| OQ-3 | DP Language & Literature takes its Paper 2 mark total (25) from thinkib.net, a teacher-resource site. The editorial policy says sources are "never … a tutoring site". Should the value be removed, or the policy reworded to allow disclosed third-party corroboration? | `assessments.ts:3594-3599`; `editorial-policy.astro` (syllabus verification section) | (a) Remove the figure until an IB document confirms it; (b) reword the policy | both |
| OQ-4 | 53 AQA 7405 (A Level) resources with `stage: "AS"` show an "AS Level" badge and the search filter value "AS LEVEL". That is the same value used for the standalone AQA AS qualifications (7135/7137). Should the label read "AS content (A Level 7405)" instead? | `src/utils/content/collections.ts:95-98`; `validate-as-level-display.mjs` | (a) Relabel as AS content of the A Level; (b) keep, as deliberate | `collections.ts`, rendered-label audit |
| OQ-5 | The home page says "N named subject specialists" (23 profiles). The editorial policy says "8 named teachers" (credited authors). Same kind of label, two definitions. Which definition should each page use? | statistics report section D | (a) Name the unit on both ("23 teacher profiles", "8 named authors"); (b) keep | `HomeHero.astro`, `editorial-policy.astro` |

## Open — needs a qualified subject teacher

| ID | Task | Evidence | Affected |
|---|---|---|---|
| OT-1 | 429 topic-level-only mappings (380 pages) where the topic has subtopics. Which subtopics does each page teach? They now honestly render "(topic-level mapping)". Listing the subtopics, or adding `coverage: "whole-topic"` where truly complete, needs a teacher reading each page. | `docs/reports/academic-quality-2026-11-15/topic-coverage-audit.json`, class `TOPIC_ONLY_SUB` | 380 resources |
| OT-2 | Apparent syllabus-series mismatches between resources and their taxonomy record: 5014 (7 resources say 2025-2026; resolved against the kept 2025-2026 record now), 0479 (9 say 2025-2027 vs record 2027), H060 (84 say "Version 3.0 (June 2026), first assessment 2021" vs record "first assessment 2016"). Check each against the board PDFs. | scratch audit in the report, section C | 100 resources |
| OT-3 | Documented teacher verification: `docs/reports/academic-review/teacher-verifications.json` exists, is validated (rule [13]) and holds **0 records**. A record is added only when a teacher's own check is evidenced. | — | — |
| OT-4 | The 40 Psychology pages whose "Checked by" line was removed need a real check against the official guide (IB Psychology guide; Cambridge 9990 syllabus; AQA 7182 specification) before the line can return. | `scripts/validate-review-integrity.mjs` rule [12] | 40 resources |

## Open — needs a translator

| ID | Task | Affected |
|---|---|---|
| OL-1 | Native-speaker check of the six replacement sentences (review-policy pointer and AI-disclosure pointer, in Arabic, Urdu and Bengali). They are short and literal, written without a native-speaking academic. | `src/i18n/pages/legal.ts` lines 85, 89, 97, 101, 109, 113 |
