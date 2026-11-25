# Owner decisions report

Prepared 25 Nov 2026, 07:10 PKT. Branch `owner-decisions-1` (worktree `C:\Users\nouma\repos\MB-owner-decisions`, from origin/main `cb2ebb95a`). **Not pushed, not deployed, no full build run.**

Decision log: D-531 to D-539 in `docs/decision-log.md`. Validators run and passing: academic-content, assessments, course-consistency, ap-library, past-papers (59 checks), grade-thresholds, review-integrity, resource-titles, and the agents' flashcards, matrix, diagnostics, practice-bank, commercial-claims. **Not run:** `astro check`, `npm run build`, `audit-metadata` (needs dist), `audit-redirects` (needs dist). Astro schema and the two template edits are therefore untested.

## Round 1: IB

| Decision | Answer | What changed |
|---|---|---|
| Language A Paper 2 marks (D-531a) | 30 | `src/data/academic/assessments.ts` (both Language A records, notes). Confirmed in the OneDrive guides ("30 marks"). |
| DP Computer Science 2014 (D-531b) | withdrawn, last 2026 | `assessments.ts`, `syllabuses.ts`. The subject page now says "withdrawn, no longer assessable", which is stronger than "last assessed 2026"; softening is one line in `src/pages/boards/[board]/[qualification]/[subject].astro`. |
| MYP Individuals and Societies, MYP Mathematics (D-531c) | same wording, if guides agree | **Deviation:** the guides do not support "moderation only for eAssessment/ePortfolio candidates" for these two subjects (no ePortfolio; no moderation of criterion grades described). Pages now say criteria are teacher-assessed with the on-screen exam as the optional external route; eight rows set `externallyModerated: false`. `assessments.ts`. |
| Maths AA 5.5 and 5.11 (D-531d) | keep both | No change. The guide prints SL5.5 and SL5.11 as quoted in the log. |

## Round 2: Global Politics and AP

| Decision | Answer | What changed |
|---|---|---|
| GP word limit and diagram (D-532a) | text fix; redraw under new name | 2,400-word claim fixed in `ib-dp-global-politics-assessment-revision-notes.md`, `-syllabus-guide.md`, flashcard `src/data/flashcards/ib-ib-dp-global-politics.ts`, figure script and generated copies. New figure `...--03-engagement-project-sl-hl-v2.webp` generated locally; page points at it. Note: the IB guide itself says 2,400 for HL in one internal-assessment line and 2,000 + 400 in the HL section; the HL section was followed. |
| GP exam-prep figures (D-532b) | yes | "Marks at a glance" table in `ib-dp-global-politics-exam-preparation.md`. |
| 312 AP meta descriptions (D-532c) | seoDescription, drafts for review | Optional `seoDescription` in `src/content.config.ts`; `apPageMetaDescription` in `src/utils/ap/text.ts`; used in `[resource].astro`. 312 drafts in `reports/owner-decisions/ap-seo-descriptions-draft.tsv`, applied by `reports/owner-decisions/apply-ap-seo-descriptions.mjs --write` only after your approval. Drafts omit "AP" (existing snippets do too) and are not hand-polished. |
| 77 AP chemistry underscores (D-532d) | convert all | 24 SVG labels converted in 6 study guides (`<tspan dy>`; `<title>`/`<desc>` plain text). Lead and FAQ render subscripts through the new `leadHtml` prop (`PageLayout.astro`), `format` prop (`FAQ.astro`) and `[resource].astro`. Data stays plain so meta and JSON-LD are unaffected. |

## Round 3: Languages and forms

| Decision | Answer | What changed |
|---|---|---|
| Arabic "AS" (D-533a) | "AS Level" | `src/i18n/copy.ts` |
| Contact phone (D-533b) | required everywhere | no change |
| Urdu 3247 poet (D-533c) | "Aatish" with a note that Cambridge prints "Ahtish" | Four resource files, flashcard `cambridge-o-level-urdu-language.ts`, two figure lesson scripts. **The published images `...--01-set-poems.webp` and `--02-set-texts.webp` still say "Ahtish"**; regenerate and upload. |
| Singapore article (D-533d) | you supply languages; unsourced lines cut | New hidden draft `src/content/articles/ib-in-singapore-online-diploma-and-myp-lessons.md` (`draft: true`, no reviewer). Five source-needed passages and the uncited Singapore-Cambridge line removed. A live article `ib-tuition-in-singapore-online.md` already exists and is referenced by `country-guides.ts`: decide whether the new one replaces it. The "Language B is assessed the same way at SL and HL except for…" clause is not covered by the draft's own source note: check it. |

## Round 4: Syllabus wording

| Decision | Answer | What changed |
|---|---|---|
| 4BI1 "water potential" (D-534a) | remove | Four 4BI1 pages; two figures edited (`bio-b34-edexcel-4bi1-osmosis-water-potential.svg` renamed `...water-concentration.svg`; `...plant-cell-water-balance.svg`). Shared `igcse-shared-intl-osmosis.svg` untouched and no longer used on 4BI1. **Check both SVGs visually** for label overflow. |
| 0610 Core diagnostic (D-534b) | keep Paper 42 with the note | no change. June 2024 Paper 42 is not in your OneDrive folder, so the source is unverified here. |
| O Level Economics 0455 (D-534c) | cite 2281 if confirmed | Confirmed against the Cambridge 2281 syllabus section 2.10.2 (same five causes). Six captions now say "those in the 2281 syllabus". Other `-practice` and mixed-economy pages may still say "0455": not checked. |
| IAL Maths unit codes (D-534d) | add where missing, hold D1 | Codes added to 33 `edexcel-a-level-mathematics-yma01-*` pages, three course pages and one article. D1 (WDM11) unchanged: no source found for a change, but Pearson's current page was not read. |

## Round 5: Content planning

| Decision | Answer | What changed / status |
|---|---|---|
| Past-papers rollout (D-535a) | Cambridge IGCSE Chemistry 0620 first | **Waiting on you:** no manifest exists yet; needs PDFs in R2. The editorial-policy sentence was already reworded by D-472. |
| papers.marlbridge.com (D-535b) | use it | **Waiting on you:** connect the R2 custom domain. |
| Rights notes (D-535c) | I draft, you confirm | `src/data/past-papers/config.ts` has draft lines for Cambridge, Edexcel, AQA, OCR, OxfordAQA. Holder names for Edexcel, AQA and OxfordAQA are my wording, not verified legal names. **Confirm the permission basis before any file goes live.** |
| 21 thin courses (D-535d) | pilot content-led six | Six courses restructured to the specifications' numbered sections (Islamiyat 0493 and 2058, Pakistan Studies 2059, AQA Psychology 8182, OCR Business J204, AQA AS Business 7137, the last using 7137 because 7131 is superseded). 176 resource files remapped; `syllabus-topics.ts`; six flashcard decks; 27 redirects in `scripts/generate-redirects.mjs` and `public/_redirects`. **No new resource pages were written**; practice sets are still needed for OCR's 31 topics and 2059 KQ1 to 5 study guide and notes. Twelve paper-wide practice pages now sit under "covering more than one topic". Flashcard card ids were renamed for Pakistan and OCR decks, so learners' saved progress on those cards resets; card placement is my judgement. Coverage, ledger, scorecard reports and `llms.txt` were not regenerated. |
| Filler blocks (D-536a) | rule plus warn-only validator | `scripts/audit-filler-blocks.mjs` in `audit:all` with a baseline. Measured 73 / 31 / 1,212 pages for the three rules. Your 694 could not be reproduced. |
| Contradictions (D-536b) | all subjects, automated, report only | `scripts/audit-overview-subtopic-consistency.mjs`; `reports/owner-decisions/overview-subtopic-contradictions.md`. Law: none. 12 findings in 10 courses; probably real: AQA 7702 Paper 1 150 vs 120 minutes, Cambridge 9489 Paper 1 40 vs 60 marks, IGCSE Urdu 0539 Paper 1 120 vs 30 minutes, 9239 Component 3 40 vs 30 marks. Some are section marks. Nothing was edited. |
| Economics 9708 and shared links (D-536c) | review now | `reports/owner-decisions/econ-9708-review.md`. No near-duplicates over 60% (highest 33%), nothing edited. Two parallel page families cover topic 7: your decision. 60 practice links are each shared by six pages. |
| Qur'an passages (D-536d) | I draft for teacher review | Three draft pages (15 set passages from Appendix 1), hidden by `reviewStatus: "draft"`, no reviewer named, no translation text of my own. README with 10 review questions in `reports/owner-decisions/quran-passages-drafts/`. Themes and answer advice come from the syllabus and general knowledge, with no past papers or examiner reports available: teacher must confirm. |

## Round 6 and later documents

- **Reminders (D-537a):** three scheduled tasks: 8 Jan 2027 10:00 PKT (AS and A Level thresholds), 15 Jan 2027 10:00 PKT (IGCSE and O Level), and every Monday 10:00 (June 2027 key dates; delete once published). The app must be open when they are due. They report only.
- **Board PDFs (D-538, D-539):** Edexcel June 2026 boundaries were **not added**: the model has no 9 to 1 grades, no per-unit Raw/UMS and is Cambridge-worded. Verbatim tables are in `reports/owner-decisions/edexcel-thresholds-extract.md`. Choose: IGCSE overall only, IAL as a second table type, or neither.
- **Edexcel command words:** added as four per-document lists in `src/data/academic/command-words.ts` (IAL Business 8, IAL Economics 8, IGCSE Biology 4BI1 25, IGCSE Physics 24), with `reports/owner-decisions/edexcel-command-words-extract.md`. **No page renders them.** Showing them needs a per-document section, updating the D-097 disclosure and a superseding log entry. The Biology list was transcribed by eye from an image: check it against the PDF before showing it.
- **Region facts (D-537c):** UAE sources not yet supplied.

## Still waiting on you

1. Upload `ib-dp-global-politics-syllabus-guide--03-engagement-project-sl-hl-v2.webp` to the figure bucket (`scripts/topic-figures/upload-figures.mjs`) **before the Global Politics page deploys**; no validator checks image URLs.
2. Regenerate and upload the two Urdu poet figures.
3. Singapore languages (DP Language B, MYP Language Acquisition), and whether the new article replaces the live one.
4. Review `ap-seo-descriptions-draft.tsv`, then run the apply script with `--write`.
5. Connect papers.marlbridge.com, supply 0620 PDFs, confirm rights notes.
6. Confirm the Qur'an reviewer (Azam Siddique's profile records no Qur'an expertise) and send the drafts to him.
7. Decide on Edexcel thresholds, Edexcel command-word display, and UAE region sources.
8. View the two edited 4BI1 SVGs.
9. Pre-merge checks: `npm run build` (about 45 minutes), then `astro check`.

## Process note

The commits for D-538 and D-539 used `git commit -a` and so include other agents' in-progress edits. Everything is local on `owner-decisions-1`. Do not push until you approve.
