# Owner decisions report (final status)

Updated 26 Nov 2026, 03:10 PKT. First written 25 Nov 2026, 07:10 PKT. Decision log: D-531 to D-542 in `docs/decision-log.md`.

**State:** every decision that could be carried out without the owner is merged to `main` and live (checked on marlbridge.com after the last deploy). The CI gate on `main` is green on the final state. What still waits on the owner is listed at the end.

PRs: #245 (decisions), #246, #247 and #248 (CI fixes), #249 (Edexcel IGCSE thresholds), #250 (Edexcel command words), #252 (Pakistan Studies KQ1 to 5 drafts), #253 (0455 sweep).

## Round 1: IB

| Decision | Answer | What changed |
|---|---|---|
| Language A Paper 2 marks (D-531a) | 30 | `src/data/academic/assessments.ts`, notes, two tests. Confirmed in the OneDrive IB guides ("30 marks"). Live. |
| DP Computer Science 2014 (D-531b) | withdrawn, last 2026 | `assessments.ts`, `syllabuses.ts`. The subject page reads "withdrawn, no longer assessable"; the owner chose to keep that wording (D-542). |
| MYP Individuals and Societies, MYP Mathematics (D-531c) | same wording, if guides agree | **Deviation:** the guides do not support "moderation only for eAssessment/ePortfolio candidates" for these subjects. Pages say the criteria are teacher-assessed, with the on-screen exam as the optional external route. Eight rows set `externallyModerated: false`. |
| Maths AA 5.5 and 5.11 (D-531d) | keep both | No change. Supported by the AA guide. |

## Round 2: Global Politics and AP

| Decision | Answer | What changed |
|---|---|---|
| GP word limit and diagram (D-532a) | text fix, redrawn diagram under a new name | Text fixed in two resources and a flashcard. New figure `...--03-engagement-project-sl-hl-v2.webp` uploaded by the owner; verified live. The IB guide says 2,400 for HL in one place and 2,000 plus 400 in the HL section; the HL section was followed. |
| GP exam-prep figures (D-532b) | yes | "Marks at a glance" table in `ib-dp-global-politics-exam-preparation.md`. Live. |
| 312 AP meta descriptions (D-532c) | seoDescription, drafts for review | Optional `seoDescription` field, `apPageMetaDescription`, page uses it. 312 drafts in `reports/owner-decisions/ap-seo-descriptions-draft.tsv`; `apply-ap-seo-descriptions.mjs --write` applies them only after approval. **Not applied.** |
| 77 AP chemistry underscores (D-532d) | convert all | 24 SVG labels with `<tspan dy>`; lead and FAQ render subscripts through `leadHtml` (`PageLayout.astro`) and the FAQ `format` prop. JSON-LD uses the plain twin (`apSubscriptPlain`); the structured-data audit flattens inline sub/sup. Live. |

## Round 3: Languages and forms

| Decision | Answer | What changed |
|---|---|---|
| Arabic "AS" (D-533a) | "AS Level" | `src/i18n/copy.ts`. Live. |
| Contact phone (D-533b) | required everywhere | No change. |
| Urdu 3247 poet (D-533c) | "Aatish" with a note that Cambridge prints "Ahtish" | Four resource files, a flashcard deck, two figure scripts. Both Urdu figures regenerated and uploaded (`...--01-set-poems-v2.webp`, `...--02-set-texts-v2.webp`); verified to show "Aatish". |
| Singapore IB article (D-533d) | owner supplies languages; unsourced lines cut | Hidden draft `src/content/articles/ib-in-singapore-online-diploma-and-myp-lessons.md` (`draft: true`, no reviewer). The live `ib-tuition-in-singapore-online.md` stays (D-541). Waiting on the languages. |

## Round 4: Syllabus wording

| Decision | Answer | What changed |
|---|---|---|
| 4BI1 "water potential" (D-534a) | remove | Four pages and two figures edited; shared osmosis figure no longer used on 4BI1 pages. Live. The two edited SVGs have not been viewed for label overflow. |
| 0610 Core diagnostic (D-534b) | keep Paper 42 with the note | No change. June 2024 Paper 42 is not in the OneDrive folder, so the source is unverified here. |
| O Level Economics 0455 (D-534c) | cite 2281 if confirmed | Six captions now say "those in the 2281 syllabus" (confirmed against section 2.10.2 of the 2281 syllabus). The D-542 sweep found no other 0455 citation in O Level Economics (`reports/owner-decisions/econ-0455-sweep-done.md`). Open: the shared figure `igcse-economics-the-allocation-of-resources--03-causes-of-market-failure.webp` may have "0455" in its pixels. |
| IAL Maths unit codes (D-534d) | add where missing, hold D1 | Codes added to 33 lesson pages, three course pages and one article. D1 (WDM11) unchanged. |

## Round 5: Content planning

| Decision | Answer | Status |
|---|---|---|
| Past-papers rollout (D-535a) | Cambridge IGCSE Chemistry 0620 first | **Waiting on owner.** No manifest yet. |
| papers.marlbridge.com (D-535b) | use it | **Waiting on owner:** connect the R2 custom domain. |
| Rights notes (D-535c) | Claude drafts, owner confirms | Draft lines in `src/data/past-papers/config.ts` for Cambridge, Edexcel, AQA, OCR, OxfordAQA, no claim of permission. Edexcel, AQA and OxfordAQA holder names are my wording. **Owner to confirm the permission basis before any file goes live.** |
| 21 thin courses (D-535d, D-542) | pilot the content-led six | Six courses restructured to the specifications' numbered sections; 176 resource files remapped; six flashcard decks rewritten (card ids renamed for Pakistan and OCR, so saved progress on those cards resets); 27 redirects added. D-542 follow-up: Pakistan Studies 2059 KQ1 to 5 study guide and revision notes written as hidden drafts (PR 252), with gaps in KQ3, KQ4 and KQ5 listed in `reports/owner-decisions/pakistan-studies-2059-kq1-5-drafts/README.md`. OCR J204's 31 practice sets are not written. The other 15 thin courses are untouched. |
| Filler blocks (D-536a) | rule plus warn-only validator | `scripts/audit-filler-blocks.mjs` in `audit:all` with a baseline. Measured 73 / 31 / 1,212 pages for the three rules; the owner's 694 could not be reproduced. |
| Contradictions (D-536b) | all subjects, automated, report only | `reports/owner-decisions/overview-subtopic-contradictions.md`: 12 findings in 10 courses, Law none. Several need a human read. |
| Economics 9708 and shared links (D-536c) | review now | `reports/owner-decisions/econ-9708-review.md`: no near-duplicates over 60% (highest 33%), nothing edited. Two parallel page families cover topic 7. Sixty practice links are each shared by six pages. |
| Qur'an passages (D-536d) | Claude drafts for teacher review | Three hidden draft pages (15 set passages, no translation text of my own) and a README with 10 review questions in `reports/owner-decisions/quran-passages-drafts/`. Themes and answer advice come from the syllabus and general knowledge, with no examiner reports available. **Reviewer to be confirmed.** |

## Round 6, board PDFs and Edexcel follow-ups

- **Reminders (D-537a):** three scheduled tasks: 8 Jan 2027 (AS and A Level thresholds), 15 Jan 2027 (IGCSE and O Level thresholds), and every Monday 10:00 for the June 2027 key dates (delete once published). They run only while the app is open and report only.
- **Edexcel IGCSE thresholds (D-541, PR 249):** the model gained 9 to 1 grades and a required `board` field; 10 Edexcel IGCSE syllabuses added (4AC1, 4BI1, 4BS1, 4CH1, 4EC1, 4EA1, 4ET1, 4HI1, 4MA1, 4PH1), every figure re-read from the PDF. 4EB1 is left out (D-542). IAL is not added; the extract is in `reports/owner-decisions/edexcel-thresholds-extract.md`. The Edexcel records link to Pearson's grade-boundaries page, not the PDF.
- **Edexcel command words (D-541, PR 250):** four per-document sections on `/command-words/` (IAL Business 8, IAL Economics 8, IGCSE Physics 24, IGCSE Biology 4BI1 26); 4BI1 re-read from page renders. Live.
- **Region pages (D-537c):** UAE source documents not yet supplied.

## CI problems found and fixed

The first merge turned the CI gate red four times, each failure hiding the next. All four were caused by this work and are fixed:

1. The structured-data audit saw a mismatch between subscript text and JSON-LD on four chemistry FAQs (PR 246).
2. `audit:redirects` rejected a `/learning/` rule for the hidden Singapore draft (PR 247).
3. The negative-fixture test still looked for 25 marks (PR 248).
4. A tools unit test also asserted 25 marks (PR 248).

Cloudflare's own build also failed once on the command-words commit and was retried by the owner.

## Still waiting on the owner

1. Singapore article: the Language B and MYP Language Acquisition languages.
2. Review and approval of the 312 AP `seoDescription` drafts.
3. Past papers: connect `papers.marlbridge.com`, supply the 0620 PDFs, confirm the rights notes.
4. Qur'an drafts: confirm the reviewer and send the drafts and review questions.
5. UAE region source documents.
6. Decide on Edexcel IAL boundaries.
7. Open the market-failure figure and say whether it shows "0455".
8. View the two edited 4BI1 SVGs for overflow.
9. Teacher review of the Pakistan Studies KQ1 to 5 drafts.
10. Optional: the PDF's own URL for the Edexcel threshold links.
