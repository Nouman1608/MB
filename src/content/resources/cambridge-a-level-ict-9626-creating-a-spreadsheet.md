---
title: "Cambridge A Level Information Technology (9626): Creating a spreadsheet"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "creating-a-spreadsheet"
description: "Cambridge 9626 IT section 8.1 study guide: page setup, structures, validation, protection, formulas, referencing, functions, formatting and audience, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 8.1 Creating a spreadsheet** of Topic 8 Spreadsheets in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is tested mainly in Paper 2 Practical, where you build and edit spreadsheets on a computer, and in Paper 1 Theory, where you explain why features are used. The [Spreadsheets overview](/resources/a-level-cambridge-ict-spreadsheets/) covers all of Topic 8; this page goes through section 8.1 in detail with worked formulas. Use it with the [creating a spreadsheet practice questions](/resources/cambridge-a-level-ict-9626-creating-a-spreadsheet-practice/).

The syllabus says the functions it lists are **examples only**. If a task needs a function that is not listed, the question will name the function to use. The formulas below use the common spreadsheet syntax; the function names are the same in the main spreadsheet programs, but check how your own software separates arguments (comma or semicolon).

## What section 8.1 covers

| Area | Skills |
|---|---|
| Page and screen structure | Orientation, page size, fit to page, margins, header and footer |
| Sheet structure | Insert, delete, hide and resize rows and columns; merge cells |
| Data input control | Validation techniques such as a drop-down menu; input and error messages |
| Protection | Cells, rows, columns, worksheets and workbooks |
| Display | Freezing and unfreezing panes and windows |
| Formulas | Addition, subtraction, multiplication, division and indices; absolute, relative and mixed referencing; named cells and ranges |
| Functions | Calculation, counting, lookup, decision, date and time, text, conditional, error trapping, nested and transpose |
| Formatting | Number formats, alignment, emphasis and conditional formatting |
| Audience | Matching the spreadsheet to its users and purpose |

## Page and screen structure

Set these to meet the **audience**, **task** or **house style**.

- **Orientation:** portrait for tall lists; landscape for wide tables.
- **Page size:** match the paper to be used, such as A4.
- **Fit to page:** scales a sheet to a set number of pages wide and tall, so a table is not split awkwardly.
- **Margins:** the blank space around the edge; narrower margins fit more on a page, wider ones give space for binding.
- **Header and footer:** repeated text at the top or bottom, such as the title, the author, the date, the file name or page numbers (for example "Page 2 of 5").

## Sheet structure

- **Insert** rows and columns to add data without overwriting; **delete** them to remove data (formulas that refer to deleted cells show an error).
- **Hide** rows and columns to keep helper data or workings out of sight; hidden data is still there and still used in formulas.
- **Resize** so all data is visible; avoid hash signs (####) that appear when a column is too narrow.
- **Merge cells** to make a heading span several columns. Avoid merging cells in data tables, as it makes sorting and filtering fail.

## Controlling data input

**Validation** stops wrong data being typed. A **drop-down menu** (a list validation) lets the user choose from a set list, such as the regions North, South and East, so spelling variations are not possible. Other rules include whole numbers between limits, dates in a range and text of a set length.

Add an **input message** that appears when the cell is selected ("Enter units sold, 0 to 500") and an **error message** that appears when the rule is broken ("Units must be a whole number from 0 to 500"). Use plain, specific wording that tells the user what to do.

## Protecting cells

**Protection** prevents accidental or unauthorised changes. By default every cell is locked, but this has no effect until the sheet is protected. A typical plan:

1. Unlock the cells where users must type (the input cells).
2. Leave formulas locked.
3. Protect the worksheet, with a password if needed.

You can protect **cells, rows, columns, worksheets and workbooks**. Protecting the workbook structure stops sheets being added, deleted or moved.

## Freezing panes

**Freeze panes** keeps chosen rows or columns visible when scrolling, such as the header row and the first column in a long table. **Unfreeze** returns to normal scrolling.

## Formulas and referencing

A formula starts with `=` and can use the operators `+`, `-`, `*`, `/` and `^` (indices, or powers). Brackets change the order of calculation: multiplication, division and indices come before addition and subtraction.

### Worked data

The examples use this table. Row 1 holds the headings, and the data is in rows 2 to 7.

| Row | A: Region | B: Product | C: Units | D: Price |
|---|---|---|---|---|
| 2 | North | Pens | 40 | 2.50 |
| 3 | South | Pens | 25 | 2.50 |
| 4 | North | Books | 12 | 8.00 |
| 5 | East | Books | 30 | 8.00 |
| 6 | South | Books | 18 | 8.00 |
| 7 | North | Files | 50 | 1.20 |

A VAT rate of 20% is stored in cell H1 as 0.2.

### Relative, absolute and mixed referencing

- A **relative reference** (`C2`) changes when a formula is copied. Copy a formula down one row and `C2` becomes `C3`.
- An **absolute reference** (`$H$1`) never changes when copied, because both the column and the row are fixed.
- A **mixed reference** fixes only one part: `$A2` fixes the column; `B$1` fixes the row.

**Worked example 1: total with VAT.** In cell F2 enter `=C2*D2*(1+$H$1)`. For row 2 this is 40 × 2.50 × 1.2 = 120. Copy it down to F7. The row references change (C3, D3 and so on), but `$H$1` stays fixed, so every row uses the same VAT rate. The results for rows 2 to 7 are 120, 75, 115.2, 288, 172.8 and 72. If you had written `H1` without the dollar signs, row 3 would point at H2, which is empty, giving wrong totals.

**Worked example 2: mixed reference.** To fill a multiplication grid with row headings 1 to 3 in `A2:A4` and column headings 1 to 3 in `B1:D1`, enter in `B2`: `=$A2*B$1`. Copying it across and down keeps column A for the row heading and row 1 for the column heading. The result in the cell at row 3, column C is 2 × 2 = 4.

### Named cells and ranges

A **named cell** or **named range** gives a clear name to a cell or group, for example `VATRate` for `H1` or `Units` for `C2:C7`. The formula `=C2*D2*(1+VATRate)` is easier to read than one with `$H$1`, and the name can be used across several **worksheets or workbooks**. Names behave like absolute references.

**Why use each type?** Relative references let one formula be copied down a column; absolute references hold a fixed value such as a tax rate; mixed references build tables from row and column headings; names make formulas readable and reduce errors.

## Functions

### Calculation

| Function | Use | Result for the worked data |
|---|---|---|
| `SUM(C2:C7)` | Adds | 175 |
| `AVERAGE(C2:C7)` | Mean | 29.17 (175 divided by 6) |
| `MIN(C2:C7)` and `MAX(C2:C7)` | Smallest and largest | 12 and 50 |
| `ROUND(AVERAGE(C2:C7),1)` | Rounds to 1 decimal place | 29.2 |
| `INT(7.9)` | Whole part, rounding down | 7 (and `INT(-7.9)` gives -8) |
| `SUBTOTAL` | Total of visible rows or a group | Used with filters and groups |

### Counting

`COUNT` counts numbers; `COUNTA` counts non-empty cells; `COUNTBLANK` counts empty cells; `COUNTIF(B2:B7,"Books")` counts cells that meet a criterion (answer 3); `COUNTIFS` uses several criteria.

### Conditional calculation

- `SUMIF(A2:A7,"North",C2:C7)` totals the units for North: 40 + 12 + 50 = **102**.
- `SUMIFS(C2:C7,A2:A7,"North",B2:B7,"Pens")` totals North and Pens: **40**.
- `AVERAGEIF`, `AVERAGEIFS`, `MAXIFS` and `MINIFS` work in the same way.

### Decision

`=IF(C2>=30,"Bulk","Standard")` returns "Bulk" for row 2 (40 is at least 30). `IFS` tests several conditions in order. A **nested IF** puts an IF inside another: `=IF(C2>=50,"Large",IF(C2>=30,"Medium","Small"))`. `AND` and `OR` combine conditions: `=IF(AND(A2="North",C2>30),"Check","")`.

### Lookup

A discount table is stored in `F2:G4`: 0 units gives 0%, 25 units gives 5%, 50 units gives 10%.

- `=VLOOKUP(C2,$F$2:$G$4,2,TRUE)` searches the first column for the largest value not above 40 and returns 5% from the second column.
- `HLOOKUP` does the same across a row. `XLOOKUP` searches any column and returns from another. `LOOKUP`, `INDEX` and `MATCH` also find values; `INDEX` returns the item at a position and `MATCH` finds the position.
- Use `FALSE` (or 0) as the last argument for an **exact match**, for example a product code.

### Date and time

`DATE(2026,11,20)` builds a date; `DAY`, `MONTH` and `YEAR` extract parts; `WEEKDAY(date,2)` gives 5 for a Friday when Monday is 1, so 20 November 2026 returns 5; `TIME` builds a time. Dates are stored as numbers, so `=DATE(2026,12,25)-DATE(2026,11,20)` gives 35 days.

### Text

Suppose cell `A2` holds the code `NOR-0412`.

- `LEFT(A2,3)` gives `NOR`; `RIGHT(A2,4)` gives `0412`; `MID(A2,5,2)` gives `04`.
- `FIND("-",A2)` gives 4, the position of the dash.
- `VALUE(RIGHT(A2,4))` extracts a number, 412, from a string. `&` or `CONCATENATE` joins strings, such as `=A2&" checked"`.
- `ISBLANK`, `ISNUMBER` and `ISTEXT` test the contents of a cell.

### Error trapping and other functions

`IFERROR(formula,"Not found")` replaces an error with a message. `ISERROR` returns TRUE if there is an error. **Nested functions** combine these: `=IFERROR(VLOOKUP(B2,F2:G4,2,FALSE),"Unknown")`. `TRANSPOSE` turns columns into rows or the reverse.

## Formatting

- **Number formats:** date and time, text, numeric, currency, percentage and fractions. A percentage format on 0.2 shows 20%.
- **Alignment and orientation:** left, centre, right; text rotated to fit narrow columns; wrap text for long labels.
- **Emphasis:** size, style (bold, italic), colour, shading, borders, merge and **comments** that explain a cell.
- **Conditional formatting:** changes the look of a cell when a condition is met, such as red shading when units are below 20.

## Matching the spreadsheet to its audience

The syllabus asks you to appreciate the requirements, purpose and use of a spreadsheet for various audiences, such as different age groups or specialisms (scientists, administrators and artists).

- Younger children and some older users need **larger text, simple layouts and clear colours**.
- Scientists may need many decimal places, units and formulas shown; administrators need clear totals and printouts; artists may prefer attractive colours and layout.
- Every audience needs **clear headings**, instructions and error messages, an uncluttered layout, and protection against accidental changes.

## Common mistakes

- Forgetting `$` signs when a value must stay fixed, so a copied formula gives wrong results.
- Using an approximate lookup (`TRUE`) when an exact match is needed.
- Merging cells inside data tables.
- Typing totals instead of using formulas, so they do not update.
- Protecting a sheet without unlocking the input cells first.
- Using `COUNT` on text, which counts only numbers.
- Giving unhelpful error messages such as "Wrong".

## Exam technique

- In the practical paper, use the **most efficient method**: formulas and functions, not typed values; and replicate formulas by copying.
- Read the question for the **exact function** named, and for the exact format (for example "currency with two decimal places").
- In the theory paper, explain **why** a feature is used (for example, "an absolute reference keeps the VAT cell fixed when the formula is copied").
- Check your results with a quick mental calculation.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 8 Spreadsheets, section 8.1 Creating a spreadsheet.
