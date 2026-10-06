---
title: "Cambridge A Level Information Technology (ICT): Spreadsheets (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Spreadsheets Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
description: "Condensed revision notes for Cambridge AS & A Level IT 9626 Spreadsheets: function syntax, referencing, test data, pivot tables, charts, self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, read the [Spreadsheets study guide](/resources/a-level-cambridge-ict-spreadsheets/) first. These notes condense **topic 8, Spreadsheets**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections **8.1 to 8.4**. Topic 8 is an **AS Level** topic. It is assessed mainly in **Paper 2 (Practical)**, which tests sections 8–11; Paper 1 (Theory) covers sections 1–11, and Paper 4 (Advanced Practical) may include tasks from sections 8–10.

Then test yourself with the [Spreadsheets practice questions](/resources/a-level-cambridge-ict-spreadsheets-practice/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Validation check types are revised with topic 1 in the [Data Processing revision notes](/resources/a-ict-data-processing-revision-notes/). Find your gaps with a [free diagnostic](/diagnostics/).

## 8.1 Layout, structure, input and protection

| Skill | What to remember |
|---|---|
| Page setup | Orientation, page size, fit to page, margins, header and footer |
| Structure | Insert, delete, hide, resize rows and columns; merge cells |
| Validation | Rule limits entries, e.g. whole number 1–8, or a drop-down list |
| Input message | Shown when the cell is selected; tells the user what to enter |
| Error message | Shown when the rule is broken; says what went wrong and what is allowed |
| Protection | Cells, rows, columns, worksheets, workbooks |
| Freeze panes | Keeps headings on screen while scrolling; unfreeze afterwards |

**Locking in steps** (Excel and LibreOffice Calc): cells start locked → clear the locked setting on input cells → protect the worksheet → formulas can no longer be edited, inputs still can.

## Formulas and referencing

- Operators: `+ - * / ^`. Order: brackets, indices, × and ÷, + and −.
- `B4` relative: both parts move when copied.
- `$B$4` absolute: nothing moves. Use for one rate or target cell.
- `$B4` mixed: column fixed, row moves.
- `B$4` mixed: row fixed, column moves.
- Named cell or range: readable, behaves as absolute, usable on any worksheet in the workbook; can be referenced from another workbook.

**Why mixed?** A two-way table (rows × columns) needs one input fixed to its column and the other fixed to its row, so a single formula can fill the grid.

## Function families

| Purpose | Functions | Syntax reminder |
|---|---|---|
| Calculate | SUM, AVERAGE, MIN, MAX, MAXA, INT, ROUND, SUBTOTAL | `ROUND(value, places)`; `SUBTOTAL(9, range)` sums visible rows |
| Count | COUNT, COUNTA, COUNTBLANK, COUNTIF, COUNTIFS | `COUNTIF(range, criterion)` |
| Conditional | SUMIF, AVERAGEIF, SUMIFS, AVERAGEIFS, MAXIFS, MINIFS | `SUMIF(range, criterion, sum_range)`; `SUMIFS(sum_range, range1, criterion1, …)` |
| Look up | LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH | `VLOOKUP(value, table, column, FALSE)`; `MATCH(value, range, 0)` |
| Decide | IF, nested IF, IFS, AND, OR, NOT | `IF(test, if_true, if_false)` |
| Date and time | DATE, TIME, DAY, MONTH, YEAR, WEEKDAY | `DATE(year, month, day)`; WEEKDAY default Sunday = 1 |
| Strings | LEFT, RIGHT, MID, FIND, VALUE, `&` | `MID(text, start, length)`; `FIND(find, within)` |
| Test contents | ISTEXT, ISNUMBER, ISBLANK | return TRUE or FALSE |
| Error trapping | IFERROR, ISERROR | `IFERROR(formula, message)` |
| Rotate | TRANSPOSE | column ↔ row |

The syllabus also lists MAXIF and MINIF with this family. Function names are examples; a paper names any function needed for a skill the syllabus does not list.

### Method: exact-match VLOOKUP

1. Lookup value: the cell holding the key (e.g. a product code).
2. Table: the lookup table, **absolute** (`$H$2:$J$9`), with the key in its **first** column.
3. Column number: count from the table's first column.
4. `FALSE` for an exact match.
5. Wrap in IFERROR if a key might be missing.

### Method: nested IF bands

1. List the bands from highest to lowest.
2. Test the highest first with `>=`.
3. Each "false" branch holds the next IF.
4. The last false value is the lowest band; it needs no test.
5. Count brackets: one closing bracket per IF.

### Method: number from a code

`=VALUE(MID(code, start, length))`: MID extracts characters as text; VALUE converts them so you can calculate. FIND locates a separator when its position varies.

### Small reminders on criteria

- A criterion with an operator goes in quotes: `COUNTIF(D2:D40,">=50")`.
- To compare with a cell or a function, join the operator on with `&`: `COUNTIF(D2:D40,">="&H1)` or `COUNTIFS(B2:B40,">="&DATE(2026,1,1))`.
- Text criteria also go in quotes: `SUMIF(C2:C40,"Paid",E2:E40)`.
- In the IFS family, every criteria range must be the same size as the result range.

### Method: subtotals in steps

1. Sort the list by the field you want totals for (e.g. Region).
2. Apply subtotals "at each change in" that field.
3. Choose the function (sum, count, average) and the column to total.
4. Use the outline groups to collapse the list to the totals only.

## Must-know distinctions

- **COUNT** numbers only; **COUNTA** any non-empty cell; **COUNTBLANK** empty cells.
- **INT** rounds down (INT(−2.3) = −3); **ROUND** goes to the nearest value at the stated places.
- **MAX** ignores text in a range; **MAXA** treats text as 0.
- **SUMIF** puts the sum range last; **SUMIFS** puts it first.
- **VLOOKUP** searches down the first column and returns to the right; **HLOOKUP** searches along the first row; **XLOOKUP** returns from any column and matches exactly by default; **INDEX/MATCH** does the same job in two nested functions.
- **IFERROR** replaces an error with a value; **ISERROR** returns TRUE/FALSE.
- **Protect worksheet** stops editing locked cells; **protect workbook** stops changes to sheets themselves.
- **Contiguous** data is one adjacent block; **non-contiguous** data comes from separate ranges.
- **Pivot table** builds a separate summary; **subtotals** insert totals into the sorted list itself.

## Formatting and audience

Cell formats: date and time, text, numeric, currency, percentage, fractions, text orientation, alignment. Emphasis: size, style, colour, shading, merge, borders, comments, conditional formatting.

Audience: scientists want precision and units; administrators want clear labels, currency and protected inputs; artists want visual output; different age groups may need larger text and plain instructions.

## 8.2 Test plans and test data

Columns of a test plan: test number, what is tested, test data, data type, expected result, actual result, action. Test functions, validation rules and conditional formatting.

| Type | Meaning | For "percentage 0–100" |
|---|---|---|
| Normal | Valid, inside the limits | 57 |
| Extreme | Valid, on a limit | 0, 100 |
| Abnormal | Invalid, must be rejected | −1, 101, "pass" |

Test conditional formatting and IF formulas either side of every boundary.

## 8.3 Extract, sort, summarise, import and export

- **Search criteria:** text, numeric, date and time; `> < = >= <=`; AND, OR, NOT; contains, starts with, ends with.
- **Sort:** ascending or descending; single or multiple columns (primary key, then secondary key for ties).
- **Pivot tables** summarise by field; **pivot charts** chart them, with field selection buttons; **subtotals** need data sorted by the grouping field; **groups** collapse and expand rows or columns.
- **csv/txt:** values only. **pdf:** fixed, not editable. **Charts** export to other documents. Wrong format means no marks for that task.

## 8.4 Charts

| Purpose | Chart |
|---|---|
| Compare categories | Bar |
| Parts of a whole | Pie |
| Trend over time | Line |
| Several series by category | Comparative bar |
| Several trends | Comparative line |
| Two data types, e.g. bars and line | Combination (often with a secondary axis) |

Formatting checklist: title, legend, category and value axis labels, series labels, segment labels, values and percentages, field selection buttons, scales, axis maximum and minimum, data intervals, secondary axis, extracted pie sector.

## Quick self-test

1. What does `=5+2^3*2` return?
2. Give the results of `=ROUND(14.678,1)` and `=INT(14.678)`.
3. What does `=INT(-2.3)` return?
4. What does `=MID("LHR-2026-QX",5,4)` return, and is it text or a number?
5. What does `=FIND("Q","LHR-2026-QX")` return?
6. 25 December 2026 is a Friday. What does `=WEEKDAY(DATE(2026,12,25))` return?
7. Give the results of `=AND(7>5,3>4)` and `=OR(7>5,3>4)`.
8. What does `=IFERROR(10/0,"Check")` display?
9. `=A$4` is copied two rows down and one column right. What does it become?
10. `=$C$1*B5` is copied three rows down. What does it become?
11. What does `=VALUE(RIGHT("Room 214",3))*2` return?
12. Which chart shows each department's share of a budget?

### Answers

1. **21** (2³ = 8, 8 × 2 = 16, 5 + 16).
2. **14.7** and **14**.
3. **−3** (INT rounds down).
4. **"2026"**, as **text**.
5. **10**.
6. **6** (Sunday = 1, so Friday = 6).
7. **FALSE** and **TRUE**.
8. **Check**.
9. **`=B$4`** (row fixed, column moves).
10. **`=$C$1*B8`**.
11. **428**.
12. A **pie chart**, with percentages shown.

## Where marks are usually lost

- Writing a formula with no `=` or with mismatched brackets.
- Using a relative reference to a rate cell, so copies point at empty cells.
- Omitting `FALSE` in VLOOKUP, so a missing code returns a wrong row.
- Swapping SUMIF and SUMIFS argument orders.
- Ordering nested IF bands from lowest up.
- Describing an error message that does not say what valid data looks like.
- Giving only one item of extreme data when a range has two limits.
- Choosing a pie chart for data that changes over time.
- Leaving a chart without a title or axis labels.
- Saving or exporting in a format other than the one asked for.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 8: Spreadsheets (8.1 Creating a spreadsheet; 8.2 Testing a spreadsheet; 8.3 Using a spreadsheet; 8.4 Graphs and charts).
