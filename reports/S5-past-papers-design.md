# S5.3 Past-papers page template: design note (sketch only, nothing built)

## What the repo has (verified 24 Nov 2026)
- The library is built and tested: `src/data/past-papers/{config,types}.ts`, `src/utils/past-papers/{manifest,library}.ts`, pages under `src/pages/past-papers/`, `scripts/validate-past-papers.mjs`, `scripts/test-past-paper-library.mjs`.
- The manifest is EMPTY: `src/data/past-papers/courses/` contains no JSON. `validate-past-papers` prints that it is empty and that no library page, link or sitemap URL is generated. `test-past-paper-library` passes 59 checks. So no past-paper listing exists on the site today.
- `PAST_PAPER_RIGHTS_NOTES` is empty and must be written by the owner before a board's first entry (rule 7). Hosts allowed: img.marlbridge.com and papers.marlbridge.com (D-469, R2 bucket `marlbridge-past-papers`; custom domain not confirmed connected).
- What does exist today: 59 `resourceType: "past-papers"` resource pages (59 distinct syllabus codes) against 166 ACTIVE courses (matrix check: 166 distinct board/qualification/subject rows). Those are guide pages, not file listings.

## Entry shape (already defined, PastPaperFileInput)
year, session, paper, variant, type (question-paper, mark-scheme, examiner-report, insert and so on), file URL, optional rightsNote. One JSON file per course, named board-qualification-subject-code.json.

## Proposed per-course page (the existing course-page route; template to confirm)
```
/past-papers/<board>/<qualification>/<subject>/
  H1  <Course> past papers (code)
  Notice: papers are the board's; listed on the owner's rights basis
  Year jump: 2024  2023  2022 ...
  2024
    June series
      Paper 4
        Variant 1   [QP] [MS]
        Variant 2   [QP] [MS]
      Whole series  [ER]
    November series ...
  Below the table: link to the course exam-style questions resource and to /practice/<code>/
```
Rows are built from `courseListing(course)` (year, session, paper, variant, with QP/MS/ER labels from `documentLabel`). Suggested additions for the lead, not done because they touch existing templates: a "practise this paper's topics" link per paper; `hubLibraryLink` is already the hub entry point.

## Dependencies to unblock
1. Owner supplies the files and writes the board rights note (NEEDS OWNER).
2. Connect papers.marlbridge.com to the R2 bucket (Cloudflare dashboard).
3. Add the first manifest file, for example cambridge-igcse-chemistry-0620.json, then run validate:past-papers and test:past-papers.
