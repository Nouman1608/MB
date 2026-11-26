# Thin courses, batch 1 (D-543i): hidden drafts

Eighteen resources written as hidden drafts (`reviewStatus: "draft"`, no reviewer, no reviewedDate, so they are excluded from routing and from the course-page counts). Filenames end `-draft.md`; titles end "(Draft)"; each carries a DRAFT banner naming the teacher to confirm, following the existing Islamiyat drafts.

## Topics covered (thinnest first; six topics, three resources each)

| Course | Topic (existing syllabus id) | Count before |
|---|---|---|
| Edexcel IGCSE English Language | Spoken Language Endorsement (`spoken-language-endorsement-4ea1`) | 3 |
| IB MYP Language Acquisition | Key concepts (`ib-myp-language-acquisition-key-concepts`) | 4 |
| IB MYP Language Acquisition | Global contexts (`ib-myp-language-acquisition-global-contexts`) | 4 |
| IB MYP Language Acquisition | Related concepts (`ib-myp-language-acquisition-related-concepts`) | 7 |
| IB DP Language B | Experiences (`ib-dp-language-b-experiences`) | 13 |
| IB DP Language B | Human ingenuity (`ib-dp-language-b-human-ingenuity`) | 13 |

Language B topics 13 to 16: only the two below 14 were taken. The other Edexcel components have 9 each, so the sixth slot went to MYP Related concepts (7).

## Files (all in `src/content/resources/`)

MYP: `ib-myp-language-acquisition-key-concepts-{in-unit-tasks,quick-recall,applying-practice}-draft.md`, `...-related-concepts-{improve-your-task,checklist-notes,edit-and-explain-practice}-draft.md`, `...-global-contexts-{reading-a-task,one-page-recall,lenses-practice}-draft.md`.
Language B: `ib-dp-language-b-experiences-{from-theme-to-task,fast-facts-and-phrases,plan-and-reflect-practice}-draft.md`, `ib-dp-language-b-human-ingenuity-{argue-and-evaluate,fast-facts,evaluate-practice}-draft.md`.
Edexcel: `edexcel-igcse-english-language-spoken-language-endorsement-{choosing-your-form,responding-and-moderation,plan-and-respond-practice}-draft.md`.

Each set has one study guide, one revision-notes page and one practice page, with an angle distinct from the reviewed pages (task planning, checklists, original questions with model answers). Front matter copies the reviewed pages (resourceType, subject, level, qualifications, syllabusCodes, syllabusSeries, syllabusTopics).

## Sources

The official IB guides are not in the OneDrive (there is no 'IB' folder) and the Pearson PDF fetch failed (ECONNRESET). Every board fact therefore comes from the facts already stated on the reviewed Marlbridge pages of the same course and from the verified notes in `src/data/academic/syllabus-topics.ts` (checked 2026-11-20 against the full IB guides, per that file). The source is named in each draft banner. Nothing was invented: no criterion names, marks, durations or wording beyond those pages.

## English only

All examples and model texts are English. No page says Marlbridge teaches French, German or Spanish. Tasks that need target-language output say "do it in the language your school course uses; ask your school teacher to check it".

## Validators

review-integrity PASS; course-consistency 0 hard problems and 0 new findings (18,309 resources, so drafts are excluded); practice-bank OK; resource-titles PASS (0 duplicates); academic-content: tagging OK, and one syllabus-topic failure in `ocr-gcse-chemistry-atomic-structure.md` ([M1] subtopic c1-2-atomic-structure-j248), a file this task did not touch.

## What the teacher must confirm

1. Every board fact against the official guide: MYP brief (key concepts, related-concept examples, six contexts, Criterion C wording "personal, local and global interest and significance"); Language B (theme wording, Paper 1 and Paper 2 durations, word ranges, oral criteria and marks); Edexcel Issue 7 (forms, 10 minutes, audience rule, strand wording, moderation sample rules, Appendix 3).
2. The Human ingenuity guiding principle and possible questions are given as paraphrase (as on the reviewed page), not as IB quotations. Experiences wording is in quotes, copied from the reviewed page.
3. MYP revision-note Criterion C wording and the statement that the brief prints no topic list.
4. Practice answers, mark splits and the original passages. All marks are labelled a revision aid.
5. Reviewer to name (the banners say "to be confirmed by owner").
