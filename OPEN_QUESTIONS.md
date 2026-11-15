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
| A9 (OQ-3) | DP Lang & Lit Paper 2 total (25) from thinkib.net vs the policy "never a tutoring site" | Remove the figure until an IB document confirms it; done in D-455 |
| A8 (OQ-1) | Internal reviewNotes "<date>: reviewed by X." contradict D-379 | Reword mechanically, keeping the date; done in D-453 (7,606 notes) |
| A7 (OQ-5) | "23 named subject specialists" (home) vs "8 named teachers" (policy): same kind of label, two definitions | Name the unit on both; done in D-451 |
| A6 (OQ-4) | AQA 7405 resources with `stage: AS` were labelled "AS Level" like the standalone AQA AS | Relabel as AS content of the A Level; done in D-450, also covering 7402 |

## Open — needs the owner

| ID | Question | Evidence | Options (recommended first) | Affected files |
|---|---|---|---|---|
| OQ-6 | DP Language A: Literature takes its HL essay (20) and individual oral (40) mark totals from teacher-resource websites (its own `marksSourceNote` says so), the same conflict as OQ-3. Should those totals also be removed until an IB document confirms them? | `assessments.ts`, DP Language A: Literature record | (a) Remove them the same way (D-455 pattern); (b) keep them with the existing disclosure | `assessments.ts` |
| OQ-2 | IB DP Biology and Chemistry hold HL assessment figures only. The FAQ now says SL figures are not listed. Can you supply the SL assessment outline from the IB subject guides (licensed), or approve deferring it? | `src/data/academic/assessments.ts` (DP Biology notes: "Standard Level is therefore not included"); D-128 | (a) Supply the guide pages; (b) defer, keeping the honest "not listed" wording | `assessments.ts` |

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
