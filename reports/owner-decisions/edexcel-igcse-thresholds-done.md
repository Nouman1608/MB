# Edexcel International GCSE grade boundaries (June 2026): done (D-541)

Source: `Board PDFs\Pearson Edexcel\International-GCSE-June-2026.pdf` (identical to the top-level `Pearson-Edexcel-IGCSE-Grade-Boundaries-June-2026.pdf`). Every number was re-read from the PDF by word position (PyMuPDF), each number assigned to the nearest column under the printed 9..1 header; the result matches the previous agent's `-raw` extract for all 10 syllabuses.

## Syllabuses added (overall boundaries, raw marks, grades 9 to 1, series June 2026)

4AC1 Accounting, 4BI1 Biology, 4BS1 Business, 4CH1 Chemistry, 4EC1 Economics, 4EA1 English Language A, 4ET1 English Literature, 4HI1 History, 4MA1 Mathematics A, 4PH1 Physics. One row per printed paper combination (resit-coded `R` combinations included as printed; no claim is made about what R means because the PDF does not say).

4MA1 mapping verified on PDF page 8 by x position: Foundation rows print grades 5 to 1 only (148/125/90/56/22 and 147/125/90/55/21); Higher rows print grades 9 to 3 only (165/138/111/87/64/41/29 and 171/145/119/94/69/45/33). Unawarded grades are absent (shown as a dash), never zero. The 4MA1 note on the page states this.

## Omitted

- 4EB1 English Language B: in the PDF, but the site's Edexcel English Language resources and matrix coverage are 4EA1 (A) only. Easy to add if wanted.
- Grade U (0) is not stored (below the lowest boundary).
- Edexcel IAL: out of scope per D-541.
- Matrix lists Edexcel IGCSE English Language, but with no code; I read that as 4EA1 from the resources. Confirm.

## Model and page changes

- `Grade` now includes '9'..'1'; new `ExamBoard` ('Cambridge' | 'Pearson Edexcel'), `GRADE_SCALE_BY_BOARD`, `BOARD_ORDER`; `board` is a required field on every record (five Cambridge records tagged `Cambridge`).
- `thresholdsByCode` groups carry `board`; `thresholdProblems` rejects an unknown board and counts the board in the label-consistency check.
- Page: board-neutral title/description/lead; drop-down grouped by board (optgroup); each table uses its board's grade columns (Cambridge unchanged: A*-G, a-e; Edexcel: 9-1) and header "Max mark (raw)" for Edexcel; source line names the board; "Why thresholds change" and past-papers intro copy no longer Cambridge-only. Cambridge-specific wording (staged assessment, weighted marks) is kept and labelled Cambridge.
- Source link for Edexcel records is Pearson's grade-boundaries page (`https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html`, already used elsewhere on the site), because the PDF's own public URL was not available to me. Replace with the direct PDF URL if the owner has it.
- No sitemap change was needed: the route is the single `/grade-thresholds/` page.

## Files changed

- `src/data/academic/grade-thresholds.ts`
- `src/pages/grade-thresholds/index.astro`
- `scripts/validate-grade-thresholds.mjs` (numeric 9-1 order list; board required [8]; keys must belong to the record's board scale; no mixing of scales)
- `scripts/test-negative-validation-suite.mjs` (three new mutation tests: broken 9-1 order, unknown board, Edexcel keys on a Cambridge row)
- `scripts/generate-llms-txt.mjs`, `public/llms.txt` (one line: board-neutral description)
- `reports/owner-decisions/edexcel-igcse-thresholds-done.md` (this file)
