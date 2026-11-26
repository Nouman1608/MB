# Thin-course drafts (D-543i) and the publish decision (D-546d)

Date: 26 Nov 2026. Branch `owner-decisions-3`. Nothing committed, pushed or built.

## What "publish" requires in this repo

- Visibility is controlled only by `reviewStatus`. `getResources()` and the resource count, routing, sitemap, related-links, practice bank and the duplicate/title/consistency validators all skip `reviewStatus: "draft"` (`src/utils/content/collections.ts`, `related.ts`, `practice/bank.ts`).
- `reviewStatus: "review-pending"` is the schema default and is published. The review policy (editorial policy page, "Academic review policy", D-379/D-134) does not require a named reviewer to publish; a page with no reviewer is shown as awaiting an accountable teacher. `validate-review-integrity` only demands a real reviewer (different from the author, profile covering the board and subject) when status is `reviewed` or `changes-requested`, and forbids `specCheck` on a `reviewed` page. So no reviewer credit, no `reviewedDate`, no `specCheck` was added.
- Filename: the slug is the filename, so `-draft` was dropped; titles lost "(Draft)"; DRAFT banners and "What a teacher must confirm" sections were removed from the body (the teacher to-do list moved into the internal `reviewNote`, never rendered).
- `scripts/check-duplicate-resource-scope.mjs` is a hard gate: published pages that share board, qualification, subject, resource type and topic tags with an existing page must be allow-listed with evidence. 21 groups were involved; 21 `REVIEWED_LEGITIMATE` entries were added, each naming the real difference between the new and existing page.
- Practice pages: `validate-practice-bank` / `validate-practice-question-schema` cover flagship specifications only; these courses are not in that set, so they were not affected.

## The 36 drafts

| Course | Title | File | Words | Sources cited | Validator status | Decision |
|---|---|---|---|---|---|---|
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 1 Exam Card | `cambridge-a-level-english-literature-9695-paper-1-exam-card-revision-notes.md` | 382 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 1 Planning Practice | `cambridge-a-level-english-literature-9695-paper-1-planning-practice.md` | 433 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 1 Planning the Whole Paper | `cambridge-a-level-english-literature-9695-paper-1-planning-the-paper-study-guide.md` | 628 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 2 Exam Card | `cambridge-a-level-english-literature-9695-paper-2-exam-card-revision-notes.md` | 309 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 2 Planning the Whole Paper | `cambridge-a-level-english-literature-9695-paper-2-planning-the-paper-study-guide.md` | 528 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Cambridge A Level English Literature 9695 | Cambridge A Level Literature in English (9695): Paper 2 Unseen and Prose Planning Practice | `cambridge-a-level-english-literature-9695-paper-2-unseen-planning-practice.md` | 410 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Edexcel IGCSE English Language 4EA1 | Pearson Edexcel IGCSE English Language (4EA1) -- Spoken Language Endorsement: Choosing Your Form Study Guide | `edexcel-igcse-english-language-spoken-language-endorsement-choosing-your-form.md` | 425 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Edexcel IGCSE English Language 4EA1 | Pearson Edexcel IGCSE English Language (4EA1) -- Spoken Language Endorsement: Plan and Respond Practice Questions | `edexcel-igcse-english-language-spoken-language-endorsement-plan-and-respond-practice.md` | 343 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| Edexcel IGCSE English Language 4EA1 | Pearson Edexcel IGCSE English Language (4EA1) -- Spoken Language Endorsement: Responding and Moderation Revision Notes | `edexcel-igcse-english-language-spoken-language-endorsement-responding-and-moderation.md` | 310 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Experiences Fast Facts Revision Notes | `ib-dp-language-b-experiences-fast-facts-and-phrases.md` | 424 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Experiences: From Theme to Task Study Guide | `ib-dp-language-b-experiences-from-theme-to-task.md` | 619 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Experiences Plan and Reflect Practice Questions | `ib-dp-language-b-experiences-plan-and-reflect-practice.md` | 436 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Human Ingenuity: Argue and Evaluate Study Guide | `ib-dp-language-b-human-ingenuity-argue-and-evaluate.md` | 443 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Human Ingenuity Evaluate Practice Questions | `ib-dp-language-b-human-ingenuity-evaluate-practice.md` | 336 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB DP Language B | IB Diploma Programme Language B -- Human Ingenuity Fast Facts Revision Notes | `ib-dp-language-b-human-ingenuity-fast-facts.md` | 334 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Global Contexts Lenses Practice Questions | `ib-myp-language-acquisition-global-contexts-lenses-practice.md` | 357 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Global Contexts One-Page Recall Revision Notes | `ib-myp-language-acquisition-global-contexts-one-page-recall.md` | 274 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Global Contexts: Reading a Task Study Guide | `ib-myp-language-acquisition-global-contexts-reading-a-task.md` | 472 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Applying Key Concepts Practice Questions | `ib-myp-language-acquisition-key-concepts-applying-practice.md` | 469 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Key Concepts in Unit Tasks Study Guide | `ib-myp-language-acquisition-key-concepts-in-unit-tasks.md` | 631 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Key Concepts Quick Recall Revision Notes | `ib-myp-language-acquisition-key-concepts-quick-recall.md` | 379 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Related Concepts Checklist Revision Notes | `ib-myp-language-acquisition-related-concepts-checklist-notes.md` | 285 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Related Concepts Edit and Explain Practice Questions | `ib-myp-language-acquisition-related-concepts-edit-and-explain-practice.md` | 327 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IB MYP Language Acquisition | IB MYP Language Acquisition -- Related Concepts and Improving a Task Study Guide | `ib-myp-language-acquisition-related-concepts-improve-your-task.md` | 418 | 2 (board document as cited on reviewed site pages + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IGCSE Islamiyat 0493 | Cambridge IGCSE Islamiyat (0493): Question 1 Checklist and Recall Cards | `cambridge-igcse-islamiyat-0493-q1-checklist-revision-notes.md` | 462 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IGCSE Islamiyat 0493 | Cambridge IGCSE Islamiyat (0493): Question 1 Choosing and Planning Guide | `cambridge-igcse-islamiyat-0493-q1-choosing-passages-study-guide.md` | 668 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| IGCSE Islamiyat 0493 | Cambridge IGCSE Islamiyat (0493): Question 1 Themes Practice Set B | `cambridge-igcse-islamiyat-0493-q1-themes-practice-set.md` | 568 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Appendix 1 Quick-Recall Tables | `cambridge-o-level-islamiyat-2058-appendix-1-connections-revision-notes.md` | 611 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Appendix 2 Hadith Recall Table | `cambridge-o-level-islamiyat-2058-appendix-2-twenty-hadiths-revision-notes-draft.md` | 697 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (hidden draft) | HOLD |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Articles of Faith and Pillars Essay Guide | `cambridge-o-level-islamiyat-2058-articles-of-faith-essay-technique-study-guide.md` | 609 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Articles of Faith and Pillars Practice Set B | `cambridge-o-level-islamiyat-2058-articles-pillars-practice-set.md` | 581 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Articles and Pillars Quick-Reference Tables | `cambridge-o-level-islamiyat-2058-five-pillars-quick-reference-revision-notes.md` | 555 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Hadith Question 1 Practice Set B | `cambridge-o-level-islamiyat-2058-hadith-q1-practice-set-draft.md` | 626 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (hidden draft) | HOLD |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Hadith Question 1, Teaching to Action | `cambridge-o-level-islamiyat-2058-hadith-q1-teaching-to-action-study-guide-draft.md` | 587 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (hidden draft) | HOLD |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Question 1 Answer-Building Guide | `cambridge-o-level-islamiyat-2058-q1-answer-building-study-guide.md` | 767 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |
| O Level Islamiyat 2058 | Cambridge O Level Islamiyat (2058): Question 1 Themes Practice Set B | `cambridge-o-level-islamiyat-2058-q1-themes-practice-set.md` | 752 | 2 (Cambridge syllabus PDF + reviewed site pages) | Passes (published as review-pending) | PUBLISH |

Words = body words excluding the callout banners (counted on the final text). Sources cited: none of the 36 carries a URL. Cambridge pages end with a "Sources" line naming the Cambridge syllabus plus the site's reviewed pages (2). IB and Edexcel drafts named only their banner source, the board document as already stated on the reviewed pages, plus the reviewed pages (2); on publication the banner was rewritten to say exactly that. The IB guides and the Pearson PDF were never read (earlier report), so every IB/Edexcel board fact had to come from the reviewed Marlbridge pages.

## Pass / hold

**Published as `review-pending` (33):** all 6 A Level English Literature 9695, all 3 IGCSE Islamiyat 0493, 6 of 9 O Level Islamiyat 2058, all 3 Edexcel Spoken Language Endorsement, all 6 IB DP Language B, all 9 IB MYP Language Acquisition.

Board facts were checked against the reviewed pages of the same course:
- Edexcel (3): 10 minutes, two forms, teacher-only audience wording, grade descriptors for responding, the 30-or-fewer / sample-of-30 / at least 10 rule, Appendix 3 record sheet, digital submission: all present on the reviewed Spoken Language Endorsement pages.
- IB DP Language B (6): theme wording and recommended topics, possible questions, Paper 1 and 2 timings and word ranges, 25/25/50 weights, oral criteria 12/6/6/6, HL literary works: all present on reviewed Language B pages.
- IB MYP (9): four key concepts, six contexts, related-concept examples, criteria A to D, proficiency phases, 1 to 8 levels, Criterion C wording, "no prescribed content list": present on reviewed MYP pages and the verified notes in `src/data/academic/syllabus-topics.ts`.
- Cambridge (15): facts rest on the Cambridge syllabus PDFs the earlier round read (those PDFs are not in the OneDrive and I did not re-open them; I could only confirm the facts that also appear on reviewed site pages). Passage list, themes, Q1 8-mark and 4+4 split, Topic 4 10+4 split, zakat 2.5 per cent, prophets, hajj and so on are on reviewed Islamiyat pages; AO weightings, paper structure, unseen rules and several command-word meanings for 9695 are traced to the syllabus text per the earlier report only.
- One edit for traceability: in the 2058 Appendix 1 notes the "Paper 1 Question 2 / Question 3 / Paper 2 Question 4" cross-reference column was not on any reviewed page, so it now names topics only (History of the Qur'an, Life of the Prophet, Articles of Faith).

**Held hidden (3), all O Level Islamiyat 2058 Hadith pages:**
- `...-appendix-2-twenty-hadiths-revision-notes-draft.md`
- `...-hadith-q1-practice-set-draft.md`
- `...-hadith-q1-teaching-to-action-study-guide-draft.md`

Reason: they depend on the Appendix 2 numbering (Hadith 1 to 20) and a number-by-number summary table. The hadith content appears on reviewed pages, but the number-to-hadith mapping appears on no reviewed page and I could not open the syllabus PDF, so I cannot trace it. The earlier report also notes the 2058 Appendix 1/2 lists carry an old "examination in 2022 and 2023" line. Unhold once someone checks the numbering against the syllabus Appendix 2.

Not touched (not in these 36): the three Qur'an passage drafts, chemistry 9701 and mathematics 9709 drafts, and a physics 0625 draft added by another task in this worktree.

## Validators (real output, run after the change)

- `check-duplicate-resource-scope`: PASS: every group sharing an identical official syllabus scope is reviewed and allow-listed above.
- `validate-review-integrity`: PASS: 0 problem(s) found (18356 resources checked).
- `validate-academic-content`: tagging OK, syllabus topic references OK, stage OK, codes OK.
- `validate-practice-bank`: OK (15922 questions); `validate-practice-question-schema`: OK.
- `validate-resource-titles`: PASS, 0 duplicate titles (18342 resources, up from 18309 = +33).
- `validate-course-consistency`: 166 courses, hard problems 0, new findings 0, baselined 60.
- `validate-academic-matrix`, `validate-cross-board-integrity`, `validate-commercial-claims`: OK.
- Not run: the full `npm run validate:academic` chain and the Astro build (the instruction was not to build); the remaining validators in the chain (pricing, fx, assessments, flashcards, past papers, academic-qa and so on) do not read these pages.

## Questions for the owner

1. Policy: these 33 pages now publish with no teacher named and no "Checked by Marlbridge Academic Team" line (specCheck needs a recorded verification, D-448). Are you content for them to sit as "awaiting an accountable teacher" until a teacher is assigned? Changing a page to `reviewed` needs a real named reviewer whose profile covers the board and subject.
2. Islamiyat is religious content with no teacher review yet; theme labels for the 15 Appendix 1 passages and the 4+4 Question 1 split come from Marlbridge's own reading. Publish as is, or keep the 15 Islamiyat pages hidden until Azam Siddique looks?
3. Hadith pages: should someone check the Appendix 2 numbering so the three held pages can go out?
4. Sitemaps, counts and llms files regenerate at build; nothing else to edit.
