# Open questions — academic quality remediation (D-448) and the Academic QA framework (D-452), 15 Nov 2026

Every item below is unresolved and needs the owner, a qualified subject teacher or a translator. Nothing here has been guessed or filled in. Questions answered during the programmes are recorded in `docs/decision-log.md` under D-448 and D-452. The reports are `docs/reports/academic-quality-2026-11-15/report.md` (D-448) and `docs/reports/academic-qa/implementation-report.md` (D-452).

## Answered during this programme (kept for traceability)

| # | Question | Owner's answer (15 Nov 2026) |
|---|---|---|
| A1 | 18 IB DP Psychology pages said "Checked … against the official specification, 15 Nov 2026", but there was no verification record and their own notes still asked for the check | Remove the line until a dated record exists |
| A2 | The ar/ur/bn editorial policies said "no study resource has had a second review" (frozen at 26 Aug) | Replace with a pointer to the English policy |
| A3 | The English policy said every resource "is checked against that document before publication", but the ledger records 95 UNVERIFIED | Narrow it, with a computed count |
| A4 | AP "Reviewed by [name], 8 Nov 2026": the date read as a review event, and no profile listed AP | Align the display with D-379 and add the AP courses to the profiles |
| A5 | 22 more Psychology pages (Cambridge 9990, AQA 7182) had the same unsupported "Checked by … 8 Nov 2026" | Remove the line in the same way |
| A7 (OQ-5) | "23 named subject specialists" (home) vs "8 named teachers" (policy): same kind of label, two definitions | Name the unit on both; done in D-451 |
| A6 (OQ-4) | AQA 7405 resources with `stage: AS` were labelled "AS Level" like the standalone AQA AS | Relabel as AS content of the A Level; done in D-450, also covering 7402 |
| A8 (D-452) | What must a resource have to be VERIFIED_APPROVED? | Documented teacher approval + complete rubric score ≥ 90 + no open hard-stop or major finding |
| A9 (D-452) | When does the QA gate block the build? | Integrity problems now; "new resource has no assessment" reported only, until an activation date (OQ-8) |
| A10 (D-452) | May ~5 pilot pages be AI-assessed against downloaded official syllabuses? | Yes, recorded as AI-assisted, never as teacher review; fix only clear-cut errors |
| A11 (D-452) | Scope of the QA ledger, version 1 | Main resources (`src/content/resources`) first; articles and the AP library next (OQ-11) |

## Open — needs the owner

| ID | Question | Evidence | Options (recommended first) | Affected files |
|---|---|---|---|---|
| OQ-1 | Should the 5,243 internal `reviewNote` values "2026-11-08: reviewed by X." be reworded to "credited to X (accountable teacher, D-379)"? They are not shown publicly, but they contradict D-379's meaning, and an auditor or another tool could read them as review events. | `git show 03159b8c`: 7,554 pages were credited in one commit on 8 Nov | (a) Reword them mechanically and keep the date; (b) leave them and note the meaning in `content.config.ts` | `src/content/resources/*.md` |
| OQ-2 | IB DP Biology and Chemistry hold HL assessment figures only. The FAQ now says SL figures are not listed. Can you supply the SL assessment outline from the IB subject guides (licensed), or approve deferring it? | `src/data/academic/assessments.ts` (DP Biology notes: "Standard Level is therefore not included"); D-128 | (a) Supply the guide pages; (b) defer, keeping the honest "not listed" wording | `assessments.ts` |
| OQ-3 | DP Language & Literature takes its Paper 2 mark total (25) from thinkib.net, a teacher-resource site. The editorial policy says sources are "never … a tutoring site". Should the value be removed, or the policy reworded to allow disclosed third-party corroboration? | `assessments.ts:3594-3599`; `editorial-policy.astro` (syllabus verification section) | (a) Remove the figure until an IB document confirms it; (b) reword the policy | both |
| OQ-6 (D-452) | The IB DP Biology subject guide could not be downloaded: ibo.org returns HTTP 403 to automated downloads, and that was not worked around. Can you save the guide (and, for OQ-2, the Chemistry guide) in `Papers 2025/resource check/IB/`? The IB pilot assessment waits on it. | `curl` 403 on the `sourceUrl` in `syllabus-topics.ts` (DP Biology) | (a) You save the PDFs and I add them to the manifest; (b) skip IB in the pilot | `docs/reports/academic-qa/source-manifest.json` |
| OQ-7 (D-452) | AQA 7405 "Relative mass and the mole" (QA-0002, 2 major findings). The page says the ideal gas, empirical-formula and balanced-equation work is "left for separate resources", yet four figures teach exactly that with no text. One caption reads "Edexcel worked example." and a figure is described as "tagged OCR and Edexcel". The figures are images, and the same ones appear on two other AQA pages. | `docs/reports/academic-qa/assessments.json` QA-0002 F1, F2 (checked by hand against spec pp.15-17) | (a) Remove the four figures from this page and drop the board labels from the captions and alt text (the images stay on the pages they belong to; images with board tags drawn in need regenerating); (b) widen the page's scope text instead; (c) leave as is | `src/content/resources/a-level-aqa-chemistry-relative-mass-and-the-mole.md` and 2 sibling pages; images on img.marlbridge.com |
| OQ-8 (D-452) | When should "a new resource published without a rubric assessment" start failing the build? It is reported only now (`QA_GATE.newResourceAssessment.activationDate: null`). | `src/utils/academic/qa-rubric.ts` QA_GATE | (a) Set a date once teacher review capacity is known; (b) keep it report-only | `qa-rubric.ts` |
| OQ-9 (D-452) | Cambridge 9990 Psychology has **no eligible reviewer**: no teacher profile covers Cambridge Psychology, so its pages cannot reach VERIFIED_APPROVED. Also, its 2024-2026 syllabus ends with the November 2026 series, and there is no 2027 record. Can you name an authorised Psychology reviewer, and approve fetching the 2027-2029 9990 syllabus? | review pack `a-level-psychology-clinical-psychology-practice.md`; QA-0003 F5 | (a) Name a reviewer and add the 2027 record; (b) defer | author profiles; `syllabus-topics.ts` |
| OQ-10 (D-452) | 12 titles or descriptions use complete-coverage wording ("every topic", "full syllabus", "covering all"). The page's own mapping supports 2, does not support 4, and 6 need a person to read them. No metadata was changed. Should a teacher check the 10 and propose rewording for your approval? | `docs/reports/academic-qa/dashboard.md`, "Search metadata" table | (a) Teacher check, then you approve each change; (b) leave | 10 resource frontmatters |
| OQ-11 (D-452) | Phase 2 scope: bring articles and the AP library (~2,400 pages, own validator) into the QA ledger. | framework §1 scope | (a) Next phase; (b) resources only | scorecard, loaders |

## Open — needs a qualified subject teacher

| ID | Task | Evidence | Affected |
|---|---|---|---|
| OT-1 | 429 topic-level-only mappings (380 pages) where the topic has subtopics. Which subtopics does each page teach? They now honestly render "(topic-level mapping)". Listing the subtopics, or adding `coverage: "whole-topic"` where truly complete, needs a teacher reading each page. | `docs/reports/academic-quality-2026-11-15/topic-coverage-audit.json`, class `TOPIC_ONLY_SUB` | 380 resources |
| OT-2 | Apparent syllabus-series mismatches between resources and their taxonomy record: 5014 (7 resources say 2025-2026; resolved against the kept 2025-2026 record now), 0479 (9 say 2025-2027 vs record 2027), H060 (84 say "Version 3.0 (June 2026), first assessment 2021" vs record "first assessment 2016"). Check each against the board PDFs. | scratch audit in the report, section C | 100 resources |
| OT-3 | Documented teacher verification: `docs/reports/academic-review/teacher-verifications.json` exists, is validated (rule [13]) and holds **0 records**. A record is added only when a teacher's own check is evidenced. | — | — |
| OT-4 | The 40 Psychology pages whose "Checked by" line was removed need a real check against the official guide (IB Psychology guide; Cambridge 9990 syllabus; AQA 7182 specification) before the line can return. One page (`a-level-psychology-clinical-psychology-practice`) has an AI-assisted assessment, QA-0003 (85.5). That record is a lead for the teacher; it does not close this task. | `scripts/validate-review-integrity.mjs` rule [12] | 40 resources |
| OT-5 (D-452) | First documented teacher verification. `igcse-chemistry-0620-elements-atomic-structure-and-isotopes` scored 93.5 (QA-0001, AI-assisted; minor and advisory findings only). A Cambridge Chemistry reviewer, for example the credited teacher, can verify it with the review pack, and record the result with the page's hash. It would be the first VERIFIED_APPROVED page. | `docs/reports/academic-qa/review-packs/igcse-chemistry-0620-elements-atomic-structure-and-isotopes.md` | 1 resource |
| OT-6 (D-452) | The AQA 7405 taxonomy lists 3.1.2.1-3.1.2.4, but the specification (p.17) also has **3.1.2.5 Balanced equations and associated calculations**. Confirm it against the current specification (v1.2), then add it. Adding it changes the hub and the checklist. | `syllabus-topics.ts` (7405 notes); spec PDF in `resource check/AQA/` | taxonomy |
| OT-7 (D-452) | The pilot's minor findings: 16 minor and 19 advisory findings across the 4 pilot pages, for example Q4's mark split and an untraced "Examiner insight (June 2025)" on the 0620/5070 practice set, and the 9990 4(b) levels scheme. Check each, then correct the page or close the finding. | dashboard "Open findings" table | 4 resources |

## Open — needs a translator

| ID | Task | Affected |
|---|---|---|
| OL-1 | Native-speaker check of the six replacement sentences (review-policy pointer and AI-disclosure pointer, in Arabic, Urdu and Bengali). They are short and literal, written without a native-speaking academic. | `src/i18n/pages/legal.ts` lines 85, 89, 97, 101, 109, 113 |
