# Edexcel June 2026 grade boundaries (D-543h)

Branch `owner-decisions-2`. June 2026 only. Not committed.

## Sources (read 2026-11-26)

`C:\Users\nouma\OneDrive - Learners Academy\new topicals\Board PDFs\Pearson Edexcel\`

- `International-GCSE-June-2026.pdf`, title "Grade Boundaries - June 2026 - International GCSE (9-1)", 10 pages.
- `International-A-level-June-2026.pdf`, title "Grade Boundaries - June 2026 - International A Level", 15 pages.

Each record on the site carries `sourceDocument` (that title) and `sourcePage` (PDF page), and the page prints "Source: Pearson Edexcel, "<title>", June 2026 series, PDF page N".

## State found

The 9-1 grade scale, the `board` field, board-neutral page wording and the 10 IGCSE records were already on the branch from D-541 (merged). This work verified them and added the IAL table type, the source lines and the validator rules.

## IGCSE (9-1): 10 subjects, all kept

4AC1 (PDF p3), 4BI1 (p3), 4BS1 (p4), 4CH1 (p4), 4EC1 (p4), 4EA1 (p5), 4ET1 (p6), 4HI1 (p7), 4MA1 (p8), 4PH1 (p9).

4MA1 Foundation / Higher column mapping, checked by eye on the page 8 render: grades 9 to 6 are greyed out for Foundation and grades 2 and 1 are greyed out for Higher; Foundation prints 5 4 3 2 1 and Higher prints 9 8 7 6 5 4 3. The data matches (Foundation 148 125 90 56 22; Higher 165 138 111 87 64 41 29; resit rows 147 125 90 55 21 and 171 145 119 94 69 45 33). Mapping verified; nothing omitted.

Skipped: 4EB1 English Language B (D-542: only 4EA1 is on the site).

## IAL: 9 qualifications, 8 unit tables plus Law

Site ACTIVE for Edexcel A Level (matrix): accounting, biology, business, chemistry, economics, law, mathematics, physics, urdu-language, and English Literature (YET01). Added (PDF page): Accounting YAC11 (3), Biology YBI11 (4), Business YBS11 (4), Chemistry YCH11 (5), Economics YEC11 (6), English Literature YET01 (7), Mathematics YMA01 (13), Physics YPH11 (14), Law YLA1 (12).

Table type: per-unit raw boundaries, AS units (A to E) and A2 units (A* to E, A* theoretical as Pearson says), one record per qualification, `units` instead of `rows`, scale `edexcel-ial`. "Unit 1A"-style variants are separate rows. 74 unit rows in total (Accounting 4, Biology 12, Business 4, Chemistry 12, Economics 8, English Literature 8, Mathematics 18, Physics 12). Mathematics includes WDM11 (D-543c). Law is one overall raw row (200 marks; A* 119, A 108, B 97, C 86, D 75, E 65), as Pearson prints it.

UMS: each unit's UMS rows are fixed percentages of its UMS maximum. The generator asserted every UMS row in the PDF equals those percentages, so only `maxUms` is stored and shown; the note on the page explains the percentages. Cash-in (overall AS or A Level) rows are UMS only and fixed, so they are omitted and the note says so.

How numbers were obtained: read from the PDF text layer with a script (no hand typing), with structure asserts (strictly decreasing, correct count per AS/A2, UMS percentages, unit counts equal to the earlier extract), then checked by eye on the page renders for Chemistry (p5), Mathematics (p13) and Law (p12). Two unit titles are cut off or misspelt in the PDF text ("Introducttion", "Chemist", "Cosmolog"); they are shown as the plainly intended words.

Skipped (not ACTIVE for Edexcel A Level on the site, so not added): English Language, Further Mathematics, Pure Mathematics, Information Technology, French, German, Geography, History, Psychology, Statistics-only and similar IAL subjects; Urdu (9UR0 is UK GCE and not in this document).

## Changes

- `src/data/academic/grade-thresholds.ts`: `GradeScaleName` and `GRADE_SCALES`, `scaleOf()`, `IalUnitThreshold`, `units`, `scale`, `sourceDocument`, `sourcePage`; source fields on the 10 IGCSE records; 9 IAL records; `thresholdProblems()` requires source fields on Pearson records.
- `src/pages/grade-thresholds/index.astro`: lead and description cover IAL units and drop "Cambridge-only" wording; AS and A2 unit tables; per-record source line. Cambridge rows, heading, headers and source line are unchanged.
- `scripts/validate-grade-thresholds.mjs`: new rule group [9] (scale suits board; Pearson record has source document and page; unit-based records hold units not rows; unit code form, level, label, unique unit, A* present on A2 and absent on AS, strictly decreasing, within raw maximum, positive UMS maximum).
- `scripts/test-negative-validation-suite.mjs`: 5 new negative cases (order broken, A* on AS, A* missing on A2, boundary above maximum, source page missing).

## Validator output

`node --experimental-strip-types scripts/validate-grade-thresholds.mjs`:

```
Grade-threshold validation OK — 24 syllabus record(s), 202 route(s) and unit(s) total, no route collisions, no mark-basis or unavailable-grade problems found.
```

`npm run test:tools`: passed (exit 0). Negative validation suite: see the final line in the hand-back. `astro` compiler parse of the page: 0 diagnostics. `npm run build` not run, as instructed, so the rendered page was not viewed.
