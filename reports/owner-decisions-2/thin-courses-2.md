# Thin courses, round 2 (D-543i): hidden drafts for teacher review

Date: 26 Nov 2026. Branch `owner-decisions-2`. Nothing committed or pushed. No existing files edited; 18 new files added to `src/content/resources/`, all `reviewStatus: "draft"` (no reviewer, no reviewedDate), so they are excluded from routing and counts.

## Topics chosen (thinnest first, by resources per topic, from `reports/audit3/A5-thin-courses.mjs`)

| Course | Topic | Published resources before | Files added |
|---|---|---|---|
| O Level Islamiyat 2058 | 1.1 Major Themes of the Qur'an (`major-themes-quran-2058`) | 3 | 3 |
| O Level Islamiyat 2058 | 2.1 Major Teachings in the Hadith (`major-teachings-hadiths-2058`) | 4 | 3 |
| O Level Islamiyat 2058 | 2.4 Articles of Faith and Pillars (`articles-faith-pillars-2058`) | 4 | 3 |
| IGCSE Islamiyat 0493 | 1.1 Major Themes of the Qur'an (`major-themes-quran-0493`) | 4 | 3 |
| A Level English Literature 9695 | Paper 1 Drama and Poetry (`paper-1-drama-and-poetry-9695`) | 9 | 3 |
| A Level English Literature 9695 | Paper 2 Prose and Unseen (`paper-2-prose-and-unseen-9695`) | 9 | 3 |

Six topics in total. The other 0493 and 2058 topics have 5 each and 9695 Papers 3 and 4 have 10 and 9, so they were left for a later round. Existing 2058 first-community pages and the Qur'an passage drafts were not touched.

## Files written (all in `src/content/resources/`)

2058 1.1: `cambridge-o-level-islamiyat-2058-q1-answer-building-study-guide-draft.md`, `...-appendix-1-connections-revision-notes-draft.md`, `...-q1-themes-practice-set-draft.md`
2058 2.1: `...-hadith-q1-teaching-to-action-study-guide-draft.md`, `...-appendix-2-twenty-hadiths-revision-notes-draft.md`, `...-hadith-q1-practice-set-draft.md`
2058 2.4: `...-articles-of-faith-essay-technique-study-guide-draft.md`, `...-five-pillars-quick-reference-revision-notes-draft.md`, `...-articles-pillars-practice-set-draft.md`
0493 1.1: `cambridge-igcse-islamiyat-0493-q1-choosing-passages-study-guide-draft.md`, `...-q1-checklist-revision-notes-draft.md`, `...-q1-themes-practice-set-draft.md`
9695 Paper 1: `cambridge-a-level-english-literature-9695-paper-1-planning-the-paper-study-guide-draft.md`, `...-paper-1-exam-card-revision-notes-draft.md`, `...-paper-1-planning-practice-draft.md`
9695 Paper 2: `...-paper-2-planning-the-paper-study-guide-draft.md`, `...-paper-2-exam-card-revision-notes-draft.md`, `...-paper-2-unseen-planning-practice-draft.md`

Each file carries a DRAFT banner, a `reviewNote` saying who must review, a "What a teacher must confirm" section and a sources line. Titles end "(Draft)" as the existing Qur'an passage drafts do.

## Sources

- Cambridge O Level Islamiyat 2058 syllabus 2026-2027 (697279-2026-2027-syllabus.pdf): section 3 overview, 4.2 levels of response, 5.1, 5.2, Appendix 1 and 2.
- Cambridge IGCSE Islamiyat 0493 syllabus 2026-2027 (697174-2026-2027-syllabus.pdf): same sections (content identical in structure to 2058; 0493 grades A* to G).
- Cambridge AS & A Level Literature in English 9695 syllabus 2024-2026 (636097-2024-2026-syllabus.pdf): overview, AOs and weightings, section 4 paper details, command words.
- The site's existing reviewed 2058 and 0493 pages (Major Themes, Hadith, Articles of Faith and Pillars, History of the Qur'an) for facts beyond the syllabus text (angels, zakat rate, hajj rites, Hadith applications, passage themes).

## Rules followed

- No Qur'an translation of my own and none copied: passages are cited by sura and verse and paraphrased as themes; pages tell students to read the syllabus Appendix 1 translation.
- Hadiths are cited by Appendix 2 number and summarised.
- (pbuh) and (RA) used as on the site. No Companion is named in the 2058 drafts except Abu Musa and Mu'adh ibn Jabal (as in the syllabus Hadith 12 text), without (RA), matching the site's existing Hadith pages; a teacher may want (RA) added there.
- No set-text titles or quotations in the English Literature drafts. The two papers' practice pages use short original extracts written for the page.
- Practice questions are original; guidance for Literature is labelled indicative, not a mark scheme.

## Validators run

`validate-academic-content` (OK), `validate-review-integrity` (PASS, 18,350 resources checked), `validate-resource-titles` (PASS), `validate-course-consistency` (hard problems 0, new findings 0), `validate-practice-bank` (OK). Resource counts in the title and consistency checks stayed at 18,309, confirming the drafts are excluded. A temporary `node_modules` junction was used to run the scripts and removed afterwards. No build was run.

## What a teacher must confirm

Islamiyat (Azam Siddique, or the Islamiyat teacher named by the owner):
1. Every model answer and mark tariff. The syllabus gives Q1(a) a maximum of 4 and Questions 2 to 5 part (a) a maximum of 10 with part (b) levels worth 3 to 4 (Q1) or the remainder to 14; the 4 and 4 split for Question 1 is from the site's earlier recording, not a recent paper.
2. Theme labels for the fifteen Appendix 1 passages and the one-line summaries of the twenty Hadiths; the Hadith drafts do not state which Hadith belongs to "individual conduct" or "life in the community" because the syllabus appendix text does not mark the split.
3. Facts taken from the site's reviewed pages: Sura 112 recited often in prayer, angel names, twenty-five prophets, zakat 2.5 per cent, hajj order, jihad conditions.
4. Pacing remark in the 0493 study guide (about 12 to 16 minutes for Question 1) is Marlbridge's arithmetic from 50 marks in 1.5 hours, not a Cambridge instruction.
5. The syllabus text says Appendix passages are "for examination in 2022 and 2023" (an old line carried into the 2026-2027 PDFs); confirm the Appendix lists are still current.

English Literature (Ammar Bilal or the Literature teacher):
1. The planning routines and unseen reading routine (Marlbridge guidance, not Cambridge).
2. The four original extracts and the indicative points.
3. That naming no set text is acceptable for paper-level pages; set texts rotate each year.

Not done in this round: Papers 3 and 4 of 9695, the five other topics each of 2058 and 0493, and other courses in D-543i.
