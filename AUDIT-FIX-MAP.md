# AUDIT-FIX-MAP (Phase 0, 23 Nov 2026)

Base: origin/main @ b3171c6b1. Integration branch: `audit-fixes-content-tools` (worktree `C:\Users\nouma\repos\MB-audit-fixes`).
Per-agent branches/worktrees (branched from the integration branch): `audit-fixes-A`..`G` in `C:\Users\nouma\repos\MB-audit-<letter>`.
Do NOT push. Commit on your own branch only. `node_modules` is a junction to the integration worktree's.

## Already done elsewhere (do not redo; unmerged branches)
- `seo/audit-nov-2026` (347879e7a): related-article matching (`src/utils/content/related.ts`, subject + level, empty when no match) = P15;
  WhatsApp link words ("Ib" -> "IB", `src/components/ui/WhatsAppButton.astro`) = P19; teacher photo alt in
  `ProgramTeachers/TeachersBand/TuitionPanel/authors` = the Azam Siddique alt item in C15; meta descriptions, JSON-LD, sitemap.
  Do not edit those lines; if you need related.ts/WhatsAppButton changes beyond them, report to lead.
- `fix/homepage-text-audit` (7a617a33b): homepage only.
- Fees / trial form / verification dates on course pages were merged earlier (D-2xx); P1 must first check what main already does.

## Repo facts
- Astro site, ~38.8k files, 18,318 resources in `src/content/resources/*.md` (flat; slug = filename). Collection schema: `src/content.config.ts`.
  Frontmatter: title, seoTitle, resourceType (revision-notes|practice|...), subject, level[], topic, boards[], qualifications[], syllabusCodes[],
  syllabusSeries, order, syllabusTopics[{qualification,topic,subtopic}], description, author, reviewer, reviewStatus, reviewedDate, publishedDate, relatedResources.
  Reviewed resources carry reviewStatus/reviewedDate/reviewNote: if you change a reviewed resource, append a dated reviewNote line, keep other fields.
- Advanced course resources (`/advanced-course-resources/...`): `src/content/ap-resources` and `src/data/ap*`, pages in `src/pages/advanced-course-resources/`.
- Resource page template: `src/pages/resources/[slug].astro` (649 lines); components `src/components/tools/{ResourceNextSteps,ResourceTutoringPrompt,SubscribeBox}.astro`, `src/components/layout/RelatedGrid.astro`,
  utils `src/utils/content/{related,next-steps,resource-next-steps,faq-extract,subject-teachers}.ts`.
- Course pages: `src/pages/boards/[board]/[qualification]/[subject].astro`, board hub `boards/[board]/index.astro`, `boards/index.astro`;
  course topic list `src/components/academic/CourseTopicResources.astro`; topic data `src/data/academic/{syllabus-topics,syllabuses,subjects,qualifications,boards,matrix,assessments}.ts`.
- Hub `src/pages/resources/index.astro`, `resources/[type]/`; subjects `pages/subjects/`, levels `pages/levels/`, programs `pages/programs/`, checklists `pages/checklists/`.
- Tools: `pages/exam-calendar/index.astro` + `data/academic/exam-calendar.ts`; `pages/grade-thresholds` + `data/academic/grade-thresholds.ts`;
  `pages/command-words` + `data/academic/command-words.ts`; `pages/syllabus-updates/index.astro` (data inline or in data/academic);
  flashcards `pages/flashcards/**`, `src/data/flashcards/*.ts`, `scripts/generate-flashcard-index.mjs`, `src/components/tools/FlashcardStudy.astro`;
  diagnostics `src/data/diagnostics.ts`, `pages/diagnostics`, `pages/practice/[code]/diagnostic/[set].astro`; practice `pages/practice/**`, `pages/practice-data/[code].json.ts`, `src/utils/practice`.
- Validators (run targeted ones, fast): `scripts/validate-*.mjs` (see `validate:academic` in package.json), `npm run check:duplicate-scope`, `npm run audit:*`.
  Full `npm run build` takes ~45+ minutes: do NOT run it. Run only the validators/`astro check` relevant to your files. Reviewer (H) and lead run the full build.
- Existing decision log: `docs/decision-log.md` (D-NNN). Do not add entries; lead does.

## Ownership (strict). Need a change in a file you do not own? Report the exact change; do not edit.
A: STEM resource .md (maths, physics, chemistry, biology incl. AP-maths/science). B: humanities, business, computing, languages .md.
C: other non-Cambridge resource .md not owned by A/B (read-only sweep first). D: course page template, topic/syllabus data, verification-date data, counts logic, new build-time consistency check script (add to validate:academic).
E: resource page template, RelatedGrid, signup form (SubscribeBox/related components), resources hub. F: exam-calendar, grade-thresholds, syllabus-updates, command-words (pages+data).
G: flashcards, diagnostics, practice, subjects, levels, programs, checklists (pages+data).

## Rules recap
Never invent facts/dates/codes. Cite official board source or mark NEEDS OWNER. Keep style. No URL/page deletions/renames, no price changes, English only (no /ar /ur /bn).
Report per item: ID, status (FIXED / VERIFIED CORRECT, NO CHANGE / DONE ELSEWHERE / NEEDS OWNER / NOT REPRODUCIBLE), files, official source, one-line note, working for any calculation.
Write your report to `AUDIT-REPORT-<letter>.md` at your worktree root and commit it with your changes.
