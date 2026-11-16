# Open questions — academic quality remediation (D-448) and the Academic QA framework (D-465), 15 Nov 2026

Every item below is unresolved and needs the owner, a qualified subject teacher or a translator. Nothing here has been guessed or filled in. Questions answered during the programmes are recorded in `docs/decision-log.md` under D-448 and D-465. The reports are `docs/reports/academic-quality-2026-11-15/report.md` (D-448) and `docs/reports/academic-qa/implementation-report.md` (D-465).

## Answered during this programme (kept for traceability)

| # | Question | Owner's answer (15 Nov 2026) |
|---|---|---|
| A1 | 18 IB DP Psychology pages said "Checked … against the official specification, 15 Nov 2026", but there was no verification record and their own notes still asked for the check | Remove the line until a dated record exists |
| A2 | The ar/ur/bn editorial policies said "no study resource has had a second review" (frozen at 26 Aug) | Replace with a pointer to the English policy |
| A3 | The English policy said every resource "is checked against that document before publication", but the ledger records 95 UNVERIFIED | Narrow it, with a computed count |
| A4 | AP "Reviewed by [name], 8 Nov 2026": the date read as a review event, and no profile listed AP | Align the display with D-379 and add the AP courses to the profiles |
| A5 | 22 more Psychology pages (Cambridge 9990, AQA 7182) had the same unsupported "Checked by … 8 Nov 2026" | Remove the line in the same way |
| A11 (OQ-2) | IB DP Biology and Chemistry hold HL figures only; supply the SL outline or defer? | **Deferred** (owner, 16 Nov 2026; D-483). The pages keep saying SL figures are not listed. |
| A12 (OL-1) | Native-speaker check of the six translated policy pointer sentences | Owner, 16 Nov 2026: "no need to translate the study materials". Closed (D-483); study materials stay English-only, and the six pointer sentences stay as written. |
| A13 (OT-4) | 40 Psychology pages needed a real check before a "Checked by" line could return | Superseded: credited as reviewed (D-477, owner); the "Checked by" line is not restored. |
| A10 (OQ-6) | DP Language A: Literature HL essay (20) and individual oral (40) totals from teacher-resource sites | Remove them the same way; done in D-473 |
| A9 (OQ-3) | DP Lang & Lit Paper 2 total (25) from thinkib.net vs the policy "never a tutoring site" | Remove the figure until an IB document confirms it; done in D-455 |
| A8 (OQ-1) | Internal reviewNotes "<date>: reviewed by X." contradict D-379 | Reword mechanically, keeping the date; done in D-453 (7,606 notes) |
| A7 (OQ-5) | "23 named subject specialists" (home) vs "8 named teachers" (policy): same kind of label, two definitions | Name the unit on both; done in D-451 |
| A6 (OQ-4) | AQA 7405 resources with `stage: AS` were labelled "AS Level" like the standalone AQA AS | Relabel as AS content of the A Level; done in D-450, also covering 7402 |
| A10 (D-465) | What must a resource have to be VERIFIED_APPROVED? | Documented teacher approval + complete rubric score ≥ 90 + no open hard-stop or major finding |
| A11 (D-465) | When does the QA gate block the build? | Integrity problems now; "new resource has no assessment" reported only, until an activation date (OQ-8) |
| A12 (D-465) | May ~5 pilot pages be AI-assessed against downloaded official syllabuses? | Yes, recorded as AI-assisted, never as teacher review; fix only clear-cut errors |
| A13 (D-465) | Scope of the QA ledger, version 1 | Main resources (`src/content/resources`) first; articles and the AP library next (OQ-11) |

## Open — needs the owner

| ID | Question | Evidence | Options (recommended first) | Affected files |
|---|---|---|---|---|
| OQ-7 (D-465) | The IB DP Biology subject guide could not be downloaded: ibo.org returns HTTP 403 to automated downloads, and that was not worked around. Can you save the guide (and, for OQ-2, the Chemistry guide) in `Papers 2025/resource check/IB/`? The IB pilot assessment waits on it. | `curl` 403 on the `sourceUrl` in `syllabus-topics.ts` (DP Biology) | (a) You save the PDFs and I add them to the manifest; (b) skip IB in the pilot | `docs/reports/academic-qa/source-manifest.json` |
| OQ-8 (D-465) | AQA 7405 "Relative mass and the mole" (QA-0002, 2 major findings). The page says the ideal gas, empirical-formula and balanced-equation work is "left for separate resources", yet four figures teach exactly that with no text. One caption reads "Edexcel worked example." and a figure is described as "tagged OCR and Edexcel". The figures are images, and the same ones appear on two other AQA pages. | `docs/reports/academic-qa/assessments.json` QA-0002 F1, F2 (checked by hand against spec pp.15-17) | (a) Remove the four figures from this page and drop the board labels from the captions and alt text (the images stay on the pages they belong to; images with board tags drawn in need regenerating); (b) widen the page's scope text instead; (c) leave as is | `src/content/resources/a-level-aqa-chemistry-relative-mass-and-the-mole.md` and 2 sibling pages; images on img.marlbridge.com |
| OQ-9 (D-465) | When should "a new resource published without a rubric assessment" start failing the build? It is reported only now (`QA_GATE.newResourceAssessment.activationDate: null`). | `src/utils/academic/qa-rubric.ts` QA_GATE | (a) Set a date once teacher review capacity is known; (b) keep it report-only | `qa-rubric.ts` |
| OQ-10 (D-465) | Cambridge 9990 Psychology has **no eligible reviewer**: no teacher profile covers Cambridge Psychology, so its pages cannot reach VERIFIED_APPROVED. Also, its 2024-2026 syllabus ends with the November 2026 series, and there is no 2027 record. Can you name an authorised Psychology reviewer, and approve fetching the 2027-2029 9990 syllabus? | review pack `a-level-psychology-clinical-psychology-practice.md`; QA-0003 F5 | (a) Name a reviewer and add the 2027 record; (b) defer | author profiles; `syllabus-topics.ts` |
| OQ-11 (D-465) | 15 titles or descriptions use complete-coverage wording ("every topic", "full syllabus", "covering all"). The page's own mapping supports 2, does not support 5, and 8 need a person to read them. No metadata was changed. Should a teacher check the 13 and propose rewording for your approval? | `docs/reports/academic-qa/dashboard.md`, "Search metadata" table | (a) Teacher check, then you approve each change; (b) leave | 13 resource frontmatters |
| OQ-12 (D-465) | Phase 2 scope: bring articles and the AP library (~2,400 pages, own validator) into the QA ledger. | framework §1 scope | (a) Next phase; (b) resources only | scorecard, loaders |

## Open — needs a qualified subject teacher

| ID | Task | Evidence | Affected |
|---|---|---|---|
| OT-1 | 429 topic-level-only mappings (380 pages) where the topic has subtopics. Which subtopics does each page teach? They now honestly render "(topic-level mapping)". Listing the subtopics, or adding `coverage: "whole-topic"` where truly complete, needs a teacher reading each page. | `docs/reports/academic-quality-2026-11-15/topic-coverage-audit.json`, class `TOPIC_ONLY_SUB` | 380 resources |
| OT-2 | Apparent syllabus-series mismatches between resources and their taxonomy record: 5014 (7 resources say 2025-2026; resolved against the kept 2025-2026 record now), 0479 (9 say 2025-2027 vs record 2027), H060 (84 say "Version 3.0 (June 2026), first assessment 2021" vs record "first assessment 2016"). Check each against the board PDFs. | scratch audit in the report, section C | 100 resources |
| OT-3 | Documented teacher verification: `docs/reports/academic-review/teacher-verifications.json` exists, is validated (rule [13]) and holds **0 records**. A record is added only when a teacher's own check is evidenced. | — | — |
| OT-5 (D-465) | First documented teacher verification. `igcse-chemistry-0620-elements-atomic-structure-and-isotopes` scored 93.5 (QA-0001, AI-assisted; minor and advisory findings only). A Cambridge Chemistry reviewer, for example the credited teacher, can verify it with the review pack, and record the result with the page's hash. It would be the first VERIFIED_APPROVED page. | `docs/reports/academic-qa/review-packs/igcse-chemistry-0620-elements-atomic-structure-and-isotopes.md` | 1 resource |
| OT-6 (D-465) | The AQA 7405 taxonomy lists 3.1.2.1-3.1.2.4, but the specification (p.17) also has **3.1.2.5 Balanced equations and associated calculations**. Confirm it against the current specification (v1.2), then add it. Adding it changes the hub and the checklist. | `syllabus-topics.ts` (7405 notes); spec PDF in `resource check/AQA/` | taxonomy |
| OT-7 (D-465) | The pilot's minor findings: 16 minor and 19 advisory findings across the 4 pilot pages, for example Q4's mark split and an untraced "Examiner insight (June 2025)" on the 0620/5070 practice set, and the 9990 4(b) levels scheme. Check each, then correct the page or close the finding. | dashboard "Open findings" table | 4 resources |

## Open — needs a translator

| ID | Task | Affected |
|---|---|---|
