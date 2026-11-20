---
title: "Cambridge A Level Information Technology (9626): Using a spreadsheet -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 8.3: extracting, sorting and summarising data, pivot tables, and importing and exporting formats, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 8.3 Using a spreadsheet** (Topic 8 Spreadsheets) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, tested in Paper 2 Practical and Paper 1 Theory. Full explanations and the worked data set are in the [using a spreadsheet study guide](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet/); test yourself with the [using a spreadsheet practice questions](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet-practice/).

## The four skills

1. **Extract** data: search or filter using criteria.
2. **Sort** data: ascending or descending, on one or several columns.
3. **Summarise and display** data: pivot tables, pivot charts, subtotals, groups.
4. **Import and export** data: CSV, TXT, PDF, graphs and charts.

## Key terms

| Term | Meaning |
|---|---|
| Criterion | A condition a record must meet to be shown |
| Filter | Hides rows that do not meet the criteria; nothing is deleted |
| Boolean operator | AND, OR or NOT, used to combine criteria |
| Wildcard | A symbol that stands for any characters, such as `*` |
| Primary key (sort) | The first column used to order the records |
| Pivot table | An interactive summary table built from a data set |
| Subtotal | A summary row inserted when a value in a sorted column changes |
| Group | Rows or columns that can be collapsed and expanded |
| Delimiter | The character that separates fields in a text file |
| CSV | Comma-separated values: a plain-text file of records |

## Extracting data

| Criterion type | Examples |
|---|---|
| Text | `Class = "9B"` |
| Numeric | `Score > 60` |
| Date and time | `Date joined > 10/09/2025` |
| Comparison | `>`, `<`, `=`, `>=`, `<=`, `<>` |
| Contains | `*an*` finds Dana and Hana |
| Starts with | `H*` finds Hana |
| Ends with | `*h` finds Beth, Farah, Gareth |

| Boolean operator | Use | Effect |
|---|---|---|
| AND | Score >= 60 AND Class = 9B | Narrows the result: all conditions must be true |
| OR | Class = 9C OR Score > 85 | Widens the result: any condition is enough |
| NOT | NOT Class = 9A | Excludes matching records |

Rule of thumb: AND gives **fewer** records; OR gives **more**. Two values of the same field joined by AND (for example Class = 9A AND Class = 9B) returns nothing.

## Sorting

- **Ascending**: A to Z, smallest first, oldest first. **Descending**: the reverse.
- **Multi-level**: sort by Class (first), then Score descending (second). The second key only orders records that tie on the first.
- Select **all columns** before sorting so each row stays together.
- Tell the software that the first row holds **headings**.

## Summarising

| Tool | What it does | Remember |
|---|---|---|
| Subtotal | Adds a summary row at each change in a column | Sort by that column first |
| Group | Collapses or expands detail | Use for short reports |
| Pivot table | Summarises by chosen rows, columns and values (sum, count, average, max, min) | Refresh after the data changes |
| Pivot chart | A chart linked to the pivot table | Changes when the table changes |
| SUBTOTAL function | Totals only visible rows | Ignores filtered-out rows |

### Pivot table check

For scores 72, 88, 55 (class 9A), 55, 91, 78 (9B) and 49, 66 (9C):
- 9A sum 215, 9B sum 224, 9C sum 115, grand total 554.
- Grand average = 554 / 8 = 69.25.
- The grand average is **not** the mean of the three class averages (71.67, 74.67 and 57.5), because the classes have different sizes.

## Importing and exporting

| Format | Features | Limits |
|---|---|---|
| CSV | Plain text; fields separated by commas; read by almost any program | No formulas, formatting or multiple sheets |
| TXT | Plain text; often tab-separated; choose the delimiter on import | Same as CSV |
| PDF | Fixed layout for sharing a final report | Cannot be edited easily; no formulas |
| Chart or graph | Exported as an image, or copied into another document | A picture does not update unless it is linked |

Import tips: choose the correct delimiter; set code columns (such as `00123`) to **text** so leading zeros are kept; check dates are read in the right order (day, month, year).

## Choosing a tool: quick matching

| Task | Best tool |
|---|---|
| Show only the students in class 9B | Filter |
| Put students in order of score | Sort |
| Total score for each class | Pivot table or subtotals |
| Let a reader open or close each class | Group |
| Send data to a database | Export as CSV |
| Send a finished report that must not change | Export as PDF |

## Exam traps

- Mixing up AND and OR.
- Sorting one column on its own.
- Subtotals on unsorted data.
- Forgetting to refresh a pivot table.
- Calling a filter a deletion.
- Averaging averages.
- Expecting CSV to keep formulas.

## Self-test

1. What does a filter do to rows that do not match?
2. Which operator widens a search, AND or OR?
3. Which records does `NOT Class = 9A` return in the class data?
4. What does the wildcard pattern `*an*` find?
5. Why must data be sorted before inserting subtotals?
6. What is the difference between ascending and descending order?
7. Why is a multi-level sort used?
8. What is a pivot table?
9. What must be done to a pivot table after the source data changes?
10. State one limit of CSV.
11. Why might a code such as 00123 change when imported?
12. When is PDF a good export format?

### Answers

1. Hides them; the data is not deleted.
2. OR.
3. Every record that is not in class 9A: Beth, Dana, Farah, Gareth and Jamal.
4. Any text containing "an", such as Dana and Hana.
5. Otherwise the same group appears in several places and gets several subtotals.
6. Ascending goes smallest to largest (A to Z); descending is the reverse.
7. To order records that tie on the first column, for example by score within a class.
8. A summary of a data set, with chosen fields for rows, columns and values, which does not change the data.
9. Refresh it.
10. Any one: no formulas, no formatting, one sheet only.
11. It may be read as a number, which removes the leading zeros; import it as text.
12. For sharing a finished report in a fixed layout.
