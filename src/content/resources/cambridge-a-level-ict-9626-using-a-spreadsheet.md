---
title: "Cambridge A Level Information Technology (9626): Using a spreadsheet"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.3
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "using-a-spreadsheet"
description: "Cambridge 9626 IT section 8.3 study guide: searching and filtering with Boolean operators, sorting, pivot tables, subtotals, groups, and importing and exporting data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 8.3 Using a spreadsheet** of Topic 8 Spreadsheets in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, tested mainly in Paper 2 Practical (where you carry out the tasks on a computer) and in Paper 1 Theory (where you explain or choose a method). The [Spreadsheets overview](/resources/a-level-cambridge-ict-spreadsheets/) lists the skills; this page explains each one with a worked data set. Use it with the [using a spreadsheet revision notes](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet-revision-notes/) and the [using a spreadsheet practice questions](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet-practice/).

## What section 8.3 covers

| Skill | Content |
|---|---|
| Extracting data | Searching using text, numeric, date and time criteria; Boolean operators AND, OR and NOT; comparison operators `>`, `<`, `=`, `>=`, `<=`; contains; starts with; ends with |
| Sorting data | Ascending and descending; on a single column or on multiple columns |
| Summarising and displaying | Pivot tables, pivot charts, subtotals and groups |
| Importing and exporting | CSV, TXT and PDF files; graphs and charts |

## The worked data

All examples use this class list. The headings are in row 1 and the data in rows 2 to 9.

| Row | A: Student | B: Class | C: Score | D: Date joined |
|---|---|---|---|---|
| 2 | Amir | 9A | 72 | 03/09/2025 |
| 3 | Beth | 9B | 55 | 04/09/2025 |
| 4 | Chen | 9A | 88 | 03/09/2025 |
| 5 | Dana | 9C | 49 | 10/09/2025 |
| 6 | Farah | 9B | 91 | 04/09/2025 |
| 7 | Gareth | 9C | 66 | 11/09/2025 |
| 8 | Hana | 9A | 55 | 12/09/2025 |
| 9 | Jamal | 9B | 78 | 12/09/2025 |

## Extracting data

**Extracting** (searching, filtering or querying) means displaying only the records that meet one or more **criteria**. A **filter** hides the rows that do not match; the data is not deleted. An **advanced filter** or a function-based extract can copy the matching rows to a new place.

### Types of criteria

- **Text:** `Class = "9B"`. Text comparisons are not usually case-sensitive.
- **Numeric:** `Score > 60`, `Score <= 55`.
- **Date and time:** `Date joined > 10/09/2025`. Dates are stored as numbers, so they can be compared like numbers.
- **Comparison operators:** `>`, `<`, `=`, `>=` (greater than or equal to), `<=` (less than or equal to), and `<>` (not equal to).
- **Wildcards and text matching:** **contains** (`*an*`), **starts with** (`H*`) and **ends with** (`*h`). The asterisk stands for any number of characters.

### Boolean operators

| Operator | Meaning | Rows are kept when |
|---|---|---|
| AND | Both conditions are true | Every condition is met |
| OR | At least one is true | Any condition is met |
| NOT | The condition is false | The condition is not met |

### Worked example 1: applying criteria

| Criteria | Records returned | Count |
|---|---|---|
| Class = 9B AND Score >= 60 | Farah (91), Jamal (78). Beth has 55, so she is excluded | 2 |
| Class = 9C OR Score > 85 | Dana, Gareth (class 9C) and Chen (88), Farah (91) | 4 |
| NOT Class = 9A | Beth, Dana, Farah, Gareth, Jamal | 5 |
| Date joined > 10/09/2025 | Gareth (11/09), Hana (12/09), Jamal (12/09). Dana joined on 10/09, which is not after it | 3 |
| Student starts with H | Hana | 1 |
| Student contains "an" | Dana, Hana | 2 |
| Student ends with "h" | Beth, Farah, Gareth | 3 |

**Check the AND/OR logic.** For `Class = 9B AND Score >= 60`, 9B students are Beth (55), Farah (91) and Jamal (78). Only the last two also satisfy the score condition. For `OR`, the set grows: any record that satisfies either condition is returned.

**Common error:** to select 9A or 9B students, use `Class = "9A" OR Class = "9B"`. Using AND would return nothing, as no student is in two classes.

## Sorting data

**Sorting** puts the records into order based on the values in one or more columns.

- **Ascending:** smallest to largest, A to Z, oldest to newest.
- **Descending:** largest to smallest, Z to A, newest to oldest.
- **Multiple columns:** sort by a **primary key** first, then by a second key to order records that tie.

### Worked example 2: a two-level sort

Sort by **Class ascending**, then by **Score descending**.

| Class | Student | Score |
|---|---|---|
| 9A | Chen | 88 |
| 9A | Amir | 72 |
| 9A | Hana | 55 |
| 9B | Farah | 91 |
| 9B | Jamal | 78 |
| 9B | Beth | 55 |
| 9C | Gareth | 66 |
| 9C | Dana | 49 |

Within each class the highest scorer is at the top. If you sorted by only the Score column, the classes would be mixed.

**Tips.** Select the whole data range before sorting, so that rows stay together. If only one column is sorted, the values no longer match the other columns of the row. Include the header row option so the headings are not sorted into the data.

## Summarising and displaying data

### Pivot tables

A **pivot table** summarises a large data set without changing it. You choose which fields go in the **rows**, the **columns** and the **values**, and how to summarise the values: sum, count, average, maximum or minimum.

**Worked example 3.** Rows: Class. Values: Sum of Score, Average of Score and Count of Student.

| Class | Sum of score | Average score | Count |
|---|---|---|---|
| 9A | 215 | 71.67 | 3 |
| 9B | 224 | 74.67 | 3 |
| 9C | 115 | 57.5 | 2 |
| Grand total | 554 | 69.25 | 8 |

Check: 72 + 88 + 55 = 215; 55 + 91 + 78 = 224; 49 + 66 = 115; and 215 + 224 + 115 = 554. The grand average is 554 divided by 8, which is 69.25, not the average of the three class averages.

A pivot table must be **refreshed** if the source data changes. A second field can go in the columns, such as the date joined, to make a cross-tabulation.

### Pivot charts

A **pivot chart** is a chart linked to a pivot table. It shows the summarised data graphically, and changes when the pivot table is changed. For the table above, a column chart shows the total score for each class.

### Subtotals

**Subtotals** insert a summary row (sum, count, average) each time a value in a chosen column changes. The data must be **sorted by that column first**, or the same class would give several subtotals. The subtotal for 9A above is 215 and the grand total is 554. The `SUBTOTAL` function can also be used so that filtered-out rows are ignored.

### Groups

**Grouping** lets rows or columns be collapsed and expanded with outline buttons. A sorted list can be grouped by class so a reader can see only the class totals, or open any class to see the detail. Dates can also be grouped by month or year in a pivot table.

| Tool | Best used for |
|---|---|
| Filter | Looking at only the records that match a criterion |
| Sort | Putting records in order |
| Subtotal | Totals for each group in a sorted list |
| Pivot table | Flexible summary of large data with different layouts |
| Group | Hiding and showing detail to keep a report short |

## Importing and exporting data

### Importing

Data can be brought into a spreadsheet from other software.

- **CSV (comma-separated values):** a plain-text file in which each record is a line and fields are separated by commas. It can be read by almost any software, but holds only data: no formatting, formulas or multiple sheets.
- **TXT (text):** plain text, often with fields separated by tabs or another character. The import wizard asks for the **delimiter** and the data type of each column. Dates and long numbers (such as a code with a leading zero) need to be imported as text or a date, or they will be changed.

### Exporting

- **CSV or TXT:** to share data with a database or other program. Only the active sheet's values are saved.
- **PDF:** a fixed layout that cannot be changed easily. It is used to share a finished report, with the print area, headers and footers set first.
- **Graphs and charts:** a chart can be exported as an image or copied into a document or presentation, either as a picture or linked to the data so it updates.

| Format | Keeps formulas | Keeps formatting | Best for |
|---|---|---|---|
| Spreadsheet file | Yes | Yes | Continuing to work |
| CSV | No | No | Moving data between systems |
| TXT | No | No | Simple data exchange |
| PDF | No | Yes (fixed) | Sharing a final printout |

## Common mistakes

- Using AND when OR is needed, and the reverse.
- Sorting a single column so that the rows no longer match.
- Applying subtotals to data that is not sorted by the grouping column.
- Forgetting to refresh a pivot table after changing the data.
- Averaging the class averages instead of dividing the total by the count.
- Saving as CSV and expecting formulas and several sheets to be kept.
- Importing codes with leading zeros as numbers, which removes the zeros.

## Exam technique

- In the practical paper, read **exactly** which fields, criteria and sort order are specified, and show the required results on the printout.
- Use the **most efficient method**. A pivot table is quicker and more accurate than building totals by hand.
- For a theory question about choosing a tool, state what the tool does and why it suits the task, for example "a pivot table, because it summarises the sales by region without changing the data".
- Check your results by calculating one total by hand.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 8 Spreadsheets, section 8.3 Using a spreadsheet.
