---
title: "Cambridge A Level Information Technology (ICT): Spreadsheets (9626)"
seoTitle: "Cambridge A Level ICT 9626 Spreadsheets Study Guide"
resourceType: "study-guides"
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
description: "Study guide for Cambridge AS & A Level IT 9626 topic 8, Spreadsheets: layout, referencing, functions, validation, testing, pivot tables and charts."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 8, Spreadsheets**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 8.1 to 8.4. Topic 8 is an **AS Level** topic, so it is part of both the AS Level and the full A Level. It is assessed mainly in **Paper 2 (Practical)**, which tests sections 8–11. **Paper 1 (Theory)** is based on sections 1–11, so written questions are possible too, and **Paper 4 (Advanced Practical)** may include tasks from sections 8–10.

This guide teaches skills and formulas, not menus. Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Validation check types are taught with topic 1 in the [Data Processing and Information study guide](/resources/a-level-cambridge-ict-data-processing-and-information/). Find your gaps with a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

All sections are AS Level.

| Section | What you must be able to do |
|---|---|
| 8.1 | Set page layout; edit structure; validate input with messages; protect cells to workbooks; freeze panes |
| 8.1 | Write formulas with + − × ÷ and indices; use relative, absolute and mixed references, named cells and ranges |
| 8.1 | Use functions to calculate, count, look up, decide, handle dates and strings, apply conditions, trap errors, nest and transpose |
| 8.1 | Format cells and emphasis; suit the spreadsheet to its audience |
| 8.2 | Write and apply a test plan with normal, extreme and abnormal data |
| 8.3 | Search, sort, summarise (pivot tables, pivot charts, subtotals, groups), import and export |
| 8.4 | Create and format the right graph or chart for a purpose |

## 8.1 Creating a spreadsheet

### Page and screen structure

Match the layout to the task or house style: **orientation** (portrait for narrow tables, landscape for wide ones), **page size** (for example A4), **fit to page** (scale so no column spills onto a second sheet), **margins**, and a **header and footer** repeated on every page (title, name, date, file name, page numbers).

### Editing the structure

You can **insert**, **delete**, **hide** and **resize** rows and columns, and **merge** cells, for example one title across A1:F1. Before deleting, check nothing refers to that row or column, or formulas show a reference error.

### Validation, input messages and error messages

A **validation rule** limits what can be entered: a whole number from 1 to 8, a date after today, or a **drop-down menu** of allowed values. Pair it with:

- an **input message**, shown when the cell is selected ("Enter the number of tickets, 1 to 8");
- an **error message**, shown when the rule is broken, saying what is allowed ("Tickets must be a whole number from 1 to 8").

### Protection and freezing

You can protect **cells**, **rows**, **columns**, **worksheets** and **workbooks**. In Excel and LibreOffice Calc every cell starts as locked, but locking only takes effect when the sheet is protected, so clear the locked setting on input cells first, then protect the sheet. Workbook protection stops sheets being added, deleted or renamed; a password can stop the file being opened.

**Freezing panes** keeps headings on screen while you scroll; **unfreeze** them when finished.

### Formulas and referencing

Formulas start with `=` and use `+`, `-`, `*`, `/` and `^` (indices). Indices come before multiplication and division, then addition and subtraction; brackets override this. `=2+3*4^2` gives **50**; `=(2+3)*4^2` gives **80**.

When you replicate a formula, references change unless fixed with `$`:

| Reference | Copied down | Copied across | Use it when |
|---|---|---|---|
| `B4` relative | row changes | column changes | each row uses its own data |
| `$B$4` absolute | fixed | fixed | every copy uses one cell, such as a rate |
| `$B4` mixed | row changes | column fixed | only the row should move |
| `B$4` mixed | row fixed | column changes | only the column should move |

**Worked example: a price grid.** Ticket prices run down column A from A3; group sizes run across row 2 from B2. Enter `=$A3*B$2` in B3 and copy it across and down. In D5 it becomes **`=$A5*D$2`**: one formula fills the whole grid.

A **named cell** or **named range** replaces an address with a meaningful name. If B1 on a Settings sheet is named `Discount`, `=E2*(1-Discount)` works on every worksheet. A name acts like an absolute reference and makes formulas easier to read. Formulas can also use a name in another workbook, which must stay where the link expects it.

### Functions

The examples use this table, with a rates table in H2:I4 (Junior 120, Adult 240, Senior 150).

| | A Code | B Surname | C Type | D Joined | E Fee | F Visits |
|---|---|---|---|---|---|---|
| 2 | JN-2041 | Okafor | Junior | 14/03/2024 | 120 | 18 |
| 3 | AD-1187 | Haddad | Adult | 02/11/2023 | 240 | 42 |
| 4 | SN-0935 | Lindqvist | Senior | 20/01/2025 | 150 | 9 |
| 5 | AD-2210 | Mensah | Adult | 08/07/2024 | 240 | 31 |
| 6 | JN-1462 | Silva | Junior | 30/05/2025 | 120 | *(blank)* |
| 7 | AD-0874 | Tanaka | Adult | 15/09/2022 | 240 | 27 |

**Calculating.** `=AVERAGE(F2:F7)` gives 25.4 (blanks are ignored). `=INT(AVERAGE(F2:F7))` gives **25**: INT rounds **down** to a whole number, while `ROUND(x, 1)` rounds to 1 decimal place. **MAXA** counts text as 0: for −5, −2 and "n/a", MAX gives −2 but MAXA gives **0**. `=SUBTOTAL(9, E2:E7)` sums (code 1 averages) and leaves out rows hidden by a filter.

**Counting.** On F2:F7, `COUNT` gives 5 (numbers), `COUNTA` gives 5 (non-empty) and `COUNTBLANK` gives 1. `=COUNTIF(C2:C7,"Adult")` gives **3**; `=COUNTIFS(C2:C7,"Adult",F2:F7,">30")` gives **2**.

**Conditional formulas.** `=SUMIF(C2:C7,"Adult",E2:E7)` gives **720**. `=ROUND(AVERAGEIF(C2:C7,"Adult",F2:F7),1)` gives **33.3**. The plural forms take the result range **first**: `=SUMIFS(E2:E7,C2:C7,"Adult",F2:F7,">30")` gives **480**, and `=MAXIFS(F2:F7,C2:C7,"Adult")` gives **42** (MINIFS gives 27).

**Looking up.** The Fee column holds `=VLOOKUP(C2,$H$2:$I$4,2,FALSE)`: find the type in the first column of the rates table and return column 2. `FALSE` forces an exact match; the absolute table reference survives copying. `HLOOKUP` works along a row. `LOOKUP` needs its search values sorted ascending. `=INDEX(B2:B7,MATCH(MAX(F2:F7),F2:F7,0))` returns **Haddad**: MATCH finds the position of the top visit count, INDEX returns the surname there. `=XLOOKUP("SN-0935",A2:A7,B2:B7,"Not found")` returns **Lindqvist**; XLOOKUP matches exactly by default, can return from a column to the left and has its own not-found text.

**Decisions.** A nested IF tests in order, so put the highest band first:

```
=IF(F2="","No record",IF(F2>=30,"Gold",IF(F2>=15,"Silver","Bronze")))
```

Row 2 (18) gives **Silver**, row 4 (9) **Bronze**, row 6 **No record**. With IFS: `=IFS(F2="","No record",F2>=30,"Gold",F2>=15,"Silver",TRUE,"Bronze")`. `AND` needs every condition true, `OR` at least one, `NOT` reverses a result: `=IF(AND(C3="Adult",F3>=40),"Reward","")` gives **Reward**.

**Dates and times.** For D2, `YEAR` gives 2024, `MONTH` 3, `DAY` 14 and `WEEKDAY` **5** (Thursday; by default Sunday = 1). `=DATE(YEAR(D2)+1,MONTH(D2),DAY(D2))` gives the renewal date 14/03/2025. `=TIME(14,30,0)` builds 14:30.

**Strings.** `=LEFT(A2,2)` gives "JN". `=FIND("-",A2)` gives **3**, the hyphen's position. `=MID(A3,FIND("-",A3)+1,4)` gives "1187" as text; `=VALUE(RIGHT(A2,4))+1` converts "2041" to a number and gives **2042**. Join strings with `&`: `=B2&" ("&C2&")"` gives "Okafor (Junior)". Test contents with `ISTEXT`, `ISNUMBER` and `ISBLANK`: `=ISBLANK(F6)` is TRUE.

**Error trapping, nesting, transposing.** `=IFERROR(VLOOKUP("Student",$H$2:$I$4,2,FALSE),"Type not found")` shows a message instead of an error code; `ISERROR` returns TRUE or FALSE for use inside IF. A **nested function** is used as an argument of another, as in INDEX/MATCH. `TRANSPOSE` turns a column into a row or vice versa.

These function names are examples; the syllabus says a paper will name any function needed for a skill it does not list.

### Formatting and audience

Format cells as **date and time**, **text**, **numeric** (decimal places), **currency**, **percentage** (0.25 shows as 25%) or **fractions**, and set **text orientation** and **alignment**. Add emphasis with font **size**, **style** and **colour**, **shading**, **merge**, **borders**, **comments** and **conditional formatting** (shade Visits green when ≥ 30).

Suit the audience. A scientist needs consistent decimal places and units. An administrator needs clear labels, currency formats, protected formulas and drop-down inputs. An artist may want a visual, chart-led summary. Younger or older users may need larger text and plain instructions.

## 8.2 Testing a spreadsheet

A **test plan** lists, for each test, what is tested, the test data, its type, the expected result, the actual result and any action. Test **functions** (correct at each boundary?), **validation rules** (right entries accepted and rejected?) and **conditional formatting** (switches at the right value?).

Choose data that exposes errors:

- **Normal**: valid, well inside the limits; accepted.
- **Extreme**: valid, at the limits; accepted.
- **Abnormal**: invalid; rejected.

**Worked example.** Rule: tickets must be a whole number from 1 to 8.

| Test | Data | Type | Expected result |
|---|---|---|---|
| 1 | 4 | Normal | Accepted |
| 2 | 1 | Extreme | Accepted |
| 3 | 8 | Extreme | Accepted |
| 4 | 9 | Abnormal | Rejected, error message shown |
| 5 | 3.5 | Abnormal | Rejected, error message shown |
| 6 | two | Abnormal | Rejected, error message shown |

To test the Gold/Silver/Bronze formula, use 14, 15, 29 and 30 visits, either side of each boundary, where `>` versus `>=` mistakes show.

## 8.3 Using a spreadsheet

**Extracting (searching)** uses criteria on **text**, **numbers**, **dates and times**, the operators **>, <, =, >=, <=**, the Boolean operators **AND, OR, NOT**, and **contains**, **starts with** and **ends with**.

**Sorting** is **ascending** or **descending**, on one or several columns. The first key orders everything; the second orders rows that tie on the first, for example Type A–Z, then Visits largest first. Select the whole table, or records are split apart.

**Summarising:**

- A **pivot table** groups records by field and gives a total, count or average for each group, such as total fees by Type.
- A **pivot chart** is drawn from a pivot table; its **field selection buttons** filter what it shows.
- **Subtotals** insert a total row at each change in a field, so **sort by that field first**.
- **Groups** collapse and expand rows or columns to hide or show detail.

**Importing and exporting.** **csv** (comma-separated) and **txt** (delimited plain text) files keep values only: formulas, formatting and extra worksheets are lost. **pdf** gives a fixed layout that is easy to share but not to edit. **Graphs and charts** can be exported into other documents. The syllabus states that work saved in the wrong format earns no marks for that task.

## 8.4 Graphs and charts

| Purpose | Chart |
|---|---|
| Compare separate categories | Bar chart |
| Show parts of one whole | Pie chart |
| Show change over time | Line graph |
| Compare several series by category | Comparative bar chart |
| Compare trends of several series | Comparative line graph |
| Show two kinds of data together, e.g. bars and a line | Combination chart |

Select the **data series** from **contiguous** (adjacent) or **non-contiguous** (separate) cells, or a **specified range**. Then format: **title**, **legend**, **category** and **value axis labels**, **series labels**, pie **segment labels**, **segment values** and **percentages**, pivot-chart **field selection buttons**, axis **scales** with a set **maximum and minimum**, and **data intervals** (the gap between gridlines). **Add a secondary axis** when two series have very different sizes, such as rainfall in mm and visitor numbers. **Extract a pie chart sector** to pull one segment out for emphasis.

## Common errors

- Copying a formula that should use one rate cell without `$`, so the reference drifts.
- Leaving out `FALSE` in VLOOKUP (or `0` in MATCH) and getting an approximate match.
- Putting the condition range first in SUMIFS, as in SUMIF.
- Testing a lower IF band first, so it catches every value.
- Calculating with the text output of MID or RIGHT without `VALUE`.
- Adding subtotals to unsorted data.

## Next steps

Condense the topic with the [Spreadsheets revision notes](/resources/a-level-cambridge-ict-spreadsheets-revision-notes/), then try the [Spreadsheets practice questions](/resources/a-level-cambridge-ict-spreadsheets-practice/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 8: Spreadsheets (8.1 Creating a spreadsheet; 8.2 Testing a spreadsheet; 8.3 Using a spreadsheet; 8.4 Graphs and charts).
