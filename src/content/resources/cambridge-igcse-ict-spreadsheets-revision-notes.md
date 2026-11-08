---
title: "IGCSE ICT: Spreadsheets — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "create-a-data-model-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "manipulate-data-20-2-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "present-data-20-3-0417"
description: "Revision notes for Cambridge IGCSE ICT 0417 Topic 20: formulas, absolute and relative references, IF and LOOKUP functions, sorting, filtering and formatting."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Spreadsheets in Cambridge IGCSE ICT 0417 (Topic 20) cover building a data model with formulae and functions (including absolute and relative references, named ranges, IF, the LOOKUP family and nested functions), manipulating data by sorting and searching with operators and wildcards, and presenting it with number formats, conditional formatting and print settings. It is assessed practically in Paper 3, Spreadsheets and Website Authoring.

Condensed for revision. For the full explanation, use the
[spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/), then try the
[spreadsheets practice questions](/resources/cambridge-igcse-ict-spreadsheets-practice/).

## Syllabus coverage

| Syllabus ref | Content |
|---|---|
| 20.1 Create a data model | Insert/delete cells, rows, columns; merge cells; formulae with cell references; replicate with absolute and relative references; operators (+, −, ×, ÷, indices); named cells and ranges; functions SUM, AVERAGE, MAX, MIN, INT, ROUND, COUNT (counting), LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP, IF; external data sources in functions; nested functions. Know: formula vs function; order of operations; absolute vs relative referencing |
| 20.2 Manipulate data | Sort on one or more criteria, ascending or descending; select subsets of data with AND, OR, NOT, >, <, =, >=, <=, <>; wildcards |
| 20.3 Present data | Show formulae or values; adjust row height, column width and cell size so everything is visible; wrap text; hide and display rows and columns; text colour, cell colour, bold, underline, italic, shading; number formats (decimal places, currency symbols, percentages); conditional formatting; orientation; print to a set number of pages, print area, gridlines and row/column headings on or off |

## Key definitions

| Term | Meaning |
|---|---|
| Formula | A calculation entered by the user, starting with =, for example `=B2*C2` |
| Function | A ready-made, named formula, for example `=SUM(B2:B10)` |
| Relative reference | Changes when the formula is copied, for example B2 becomes B3 |
| Absolute reference | Stays fixed when copied, shown with $, for example `$F$1` |
| Named cell / range | A cell or range given a name, for example *VATRate*, used in formulae instead of the reference |
| Nested function | A function inside another function, for example IF inside IF |
| Replicate | Copy a formula down or across to other cells |

## What order are operations carried out in?

Brackets first, then indices (^), then multiplication and division, then addition and subtraction.
`=2+3*4` gives 14; `=(2+3)*4` gives 20. Use brackets to make the formula do what is intended.

## Absolute vs relative referencing

*Worked example*: VAT rate 20% is in F1. Prices are in B2:B10. In C2: `=B2*$F$1`. Copying down gives `=B3*$F$1`, `=B4*$F$1` … — B changes (relative), F1 stays (absolute). Without the $ signs, the copied formula would refer to F2, F3 … which are empty, giving 0. Using a named cell, `=B2*VATRate` works the same way.

## Functions to know

| Function | Purpose | Example |
|---|---|---|
| SUM | Adds a range | `=SUM(B2:B10)` |
| AVERAGE | Mean of a range | `=AVERAGE(B2:B10)` |
| MAX / MIN | Largest / smallest value | `=MAX(B2:B10)` |
| INT | Whole number part (removes decimals) | `=INT(7.8)` gives 7 |
| ROUND | Rounds to a set number of decimal places | `=ROUND(7.456,1)` gives 7.5 |
| COUNT / COUNTA / COUNTIF | Counts numbers / non-empty cells / cells meeting a condition | `=COUNTIF(D2:D30,"Yes")` |
| IF | Returns one value if a condition is true, another if false | `=IF(B2>=50,"Pass","Fail")` |
| VLOOKUP | Looks down the first column of a table and returns a value from a column to the right | `=VLOOKUP(A2,$H$2:$J$20,3,FALSE)` |
| HLOOKUP | Looks across the first row and returns a value from a row below | `=HLOOKUP(B1,$B$10:$G$12,2,FALSE)` |
| LOOKUP | Finds a value in one row/column and returns the matching item from another | `=LOOKUP(A2,$H$2:$H$20,$J$2:$J$20)` |
| XLOOKUP | Searches a lookup range and returns the matching value from a return range, in any direction | `=XLOOKUP(A2,$H$2:$H$20,$J$2:$J$20)` |

Use **absolute references** (or a named range) for the lookup table so it does not move when the formula is copied. FALSE (or 0) in VLOOKUP/HLOOKUP means an exact match.

### Nested IF example

`=IF(B2>=70,"Distinction",IF(B2>=50,"Pass","Fail"))` — tests the highest boundary first.

### External data sources

A function can refer to data in another file or worksheet, for example a VLOOKUP whose table is in a separate workbook supplied in the exam. The reference includes the file and sheet name, so keep the file in the location stated.

## 20.2 Sorting and searching

- **Sort** on one or more columns, ascending or descending; select the whole data range so rows stay together.
- **Filter/search** using criteria with AND, OR, NOT, >, <, =, >=, <=, <>, and **wildcards**: `*` for any characters, `?` for a single character (for example `S*` finds entries starting with S).

## 20.3 Presenting the spreadsheet

- **Show formulae** view for evidence of formulae (and widen columns so each formula is fully visible); values view for results.
- Adjust **row height and column width**, **wrap text**, and **hide/display** rows or columns as instructed.
- **Number formats**: decimal places, currency symbols (for example $, €, ¥), percentages.
- **Conditional formatting**: change cell appearance depending on content, for example red fill when stock < 10.
- **Page layout**: portrait or landscape; fit to a set number of pages; set print area; show or hide gridlines; show or hide row and column headings.

## Common mistakes and exam traps

- Forgetting $ signs, so a copied formula refers to the wrong cells.
- Typing a value (for example 0.2) into a formula when it should refer to the cell that holds it.
- Formulae view printout with columns too narrow, so formulae are cut off.
- VLOOKUP with an approximate match when an exact match is needed.
- Sorting one column only, which separates the data in each row.
- Wrong order of IF tests in a nested IF.
- Not including row and column headings in a formulae printout when asked.

## Frequently asked questions

**What is the difference between a formula and a function?**
A formula is any calculation the user writes, such as `=A1+A2`. A function is a predefined, named calculation such as SUM or VLOOKUP that can be used inside a formula.

**When should you use an absolute cell reference?**
When every copy of a formula must refer to the same cell, such as a tax rate or a lookup table. Add $ signs, for example `$F$1`, or use a named cell.

**What is the difference between VLOOKUP and HLOOKUP?**
VLOOKUP searches down the first column of a table and returns a value from the same row. HLOOKUP searches across the first row and returns a value from the same column.

**How do you show formulae for evidence?**
Switch to formulae view, widen the columns so every formula is fully visible, and print or screenshot with row and column headings if requested.

## Self-test

1. What does `=10-4/2` give?
2. Write a formula in C2, to be copied down, that multiplies B2 by a rate in E1.
3. Write an IF that shows "Reorder" when D2 is less than 5, otherwise blank.
4. Which function returns 3 from 3.9?
5. Give two page layout settings you can control for printing.

*Answers: 1 8; 2 `=B2*$E$1`; 3 `=IF(D2<5,"Reorder","")`; 4 INT; 5 any two of orientation, number of pages, print area, gridlines, row and column headings.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 20 "Spreadsheets" (20.1–20.3).
