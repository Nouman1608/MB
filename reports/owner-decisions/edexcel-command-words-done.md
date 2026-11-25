# Edexcel command words on /command-words/ (D-541): done

Branch `od-edexcel-command-words`. Not pushed, no build run (the lead builds).

## What is shown

`/command-words/` now has the Cambridge generic list (unchanged, 22 words) followed by a section "Pearson Edexcel: four separate documents" with one sub-section (h3) per document, in the owner's order:

1. International Advanced Subsidiary/Advanced Level in Business (spec Issue 1, Sept 2017, Appendix 6, PDF p58): 8 words with the "Number of marks" column.
2. International Advanced Subsidiary/Advanced Level in Economics (spec Issue 2, June 2018, Appendix 6, PDF p72): 8 words with marks.
3. International GCSE Physics exemplar pack (Issue 1, Feb 2026; covers 4PH1, 4XPH1, 4SD0, 4XSD1): 24 words, definition wording and page of first occurrence as recorded in the data.
4. International GCSE Biology (Modular) 4BI1 Getting Started Guide (Issue 2, Oct 2024, PDF p17-18): 26 entries. Shown, because every entry was verified (see below).

Each box shows document label with printed/PDF page, a link to the Pearson PDF, and an "Applies to" note ("Not a list for other Edexcel subjects"). The one search box filters across all lists; a section hides when it has no match; the count now reads "N entries". The disclosure, intro, description, meta and the Pearson Edexcel bullet now say: Cambridge's generic list plus these named Edexcel documents; AQA, OCR, OxfordAQA and other Edexcel subjects are not yet sourced.

## Verification

- Business, Economics, Physics: every entry compared (normalised text) against the PDF page with PyMuPDF; Business and Economics marks also compared against the raw page text. All matched except one: Physics "Describe" (PDF p24) printed "Statement in the response need to be developed" and the data had "needs"; corrected to "need" (p25-26 print "needs"; the data keeps p24 wording and page).
- Physics pack extras not shown: "Circle" (p11) and "Measure" (p55) are in the pack but the pack itself says they are not command words (Circle: "not a command word as such... true command is 'Draw'"; Measure: "Not a command word in the taxonomy"); they were not in the data and are not shown. "Compare" p16 is printed "Compare (note that this is similar to Discuss or Comment)"; the data keeps only the definition.
- Biology 4BI1: pages 17-18 rendered with PyMuPDF at 2.2-2.6x (pdftoppm is not installed) and each definition read visually. All 26 entries matched the data. Only changes: the printed en dash in Explain ("reasoning/justification - this can" now uses the printed dash), and two entries now carry a `group` field recording the printed sub-heading rows they sit under ("Analyse the data/graph to explain" under "Verb proceeding a command word" [sic]; "What, Why, Which" under "Multiple choice questions"). Nothing withheld.

## Withheld

Nothing from the four documents is withheld except the Physics non-command-word entries above (Circle, Measure).

## Files changed

- `src/data/academic/command-words.ts`: D-097/D-541 header comment, new `appliesTo` and optional `group` fields, Physics "Describe" fix, Biology en dash and label, doc comment no longer says "no page reads them".
- `src/pages/command-words/index.astro`: per-document sections, updated disclosure, search across all lists.
- `reports/owner-decisions/edexcel-command-words-done.md` (this file).

## Checks

- Structured data: the page has no JSON-LD of its own (layout-level only); `scripts/audit-structured-data.mjs` has no command-words rule.
- `scripts/test-negative-validation-suite.mjs` [AC] mutates `dist/command-words/index.html` by string-replacing `<input id="mb-cw-search" type="search"`; that markup is unchanged, so the mutation still applies. It needs a build.
- Heading order: h1 (layout) > h2 (Cambridge, Edexcel) > h3 (each document); "Why command words matter" h2 and its h3s follow. No skipped levels.
- Nav (`src/data/navigation.ts`) and `generate-llms-txt.mjs` already list the page; no change needed.
- `npx astro check`: 0 errors, 0 warnings (8305 hints).
