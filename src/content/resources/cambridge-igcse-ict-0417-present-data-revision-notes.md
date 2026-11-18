---
title: "Cambridge IGCSE ICT (0417): Present data (Databases) -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.3
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "present-data-0417"
description: "Condensed notes on 0417 subtopic 18.3: report sections, titles, tabular versus columnar layout, aligning labels and numbers, and numeric display formats."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 18.3 Present data, the "Display data" skill: producing a database report that shows the right data, in the right sections, with the right layout, alignment and number formats. Read the full explanation in the [18.3 Present data study guide](/resources/cambridge-igcse-ict-0417-present-data/), then test yourself with the [18.3 practice questions](/resources/cambridge-igcse-ict-0417-present-data-practice/). The whole topic is summarised in the [Databases revision notes](/resources/cambridge-igcse-ict-databases-revision-notes/).

## Syllabus checklist

The syllabus wording for "Display data" asks you to:

- produce reports that display **all the required data and labels in full**;
- use appropriate **report header, report footer, page header and page footer**;
- **set report titles**;
- produce **tabular or columnar** layouts, controlling the display of data and labels;
- **align** data and labels, including **right-aligned** and **decimal-aligned** numbers;
- control numeric display: **decimal places, currency symbol, percentage**.

## Key terms

| Term | Meaning |
|---|---|
| Report | A formatted presentation of data from a table or query, for printing or saving as a document |
| Control | An item placed on a report, such as a label, a text box showing a field, or a calculated value |
| Label | Fixed text on a report, such as a column heading or a title |
| Report header | Section printed once at the start of the report |
| Page header | Section printed at the top of every page |
| Detail section | Section printed once for each record |
| Page footer | Section printed at the bottom of every page |
| Report footer | Section printed once after the last record |
| Tabular layout | One record per row, labels once as column headings |
| Columnar layout | Each record as a block, with a label beside every value |
| Decimal alignment | Numbers placed so their decimal points line up vertically |
| Display format | How a value is shown (decimal places, symbol, percentage) without changing the stored value |

## Where does each item go?

| Item the task asks for | Section | Why |
|---|---|---|
| Report title | Report header | Needed once, at the start |
| Column headings (tabular) | Page header | Must appear above the data on every page |
| Field values | Detail | One line or block per record |
| Page number, "Page 2 of 3" | Page footer | Belongs on every page |
| Name, candidate number, date (if asked) | Wherever the task states, often page header or footer | Follow the instruction exactly |
| Total, average, count for all records | Report footer | Calculated once over every record |

Memory hook: **report** sections happen **once**, **page** sections happen on **every page**, **detail** happens for **every record**.

## Tabular or columnar?

| | Tabular | Columnar |
|---|---|---|
| Layout | Rows of records under headings | A block per record, labels beside values |
| Labels | Once per page, in page header | Repeated for every record, in detail |
| Best for | Many records, few fields; comparing values | Many fields per record; record cards or contact sheets |
| Paper use | Compact | Uses more pages |

## Displaying data and labels in full

- Widen each control to fit the **longest** value in that field, not just the first record.
- Check every page in print preview, especially the last.
- Hash symbols or a cut-off word mean the control is too narrow.
- If the fields will not fit, switch to **landscape** or reduce gaps between columns.
- Show **only** the fields asked for, in the **order** asked for; extra fields lose marks.
- Use the exact label wording the task gives; otherwise the field name, in full.

## Alignment rules

- Text: **left** aligned.
- Numbers (including currency and percentages): **right** aligned.
- Same number of decimal places in a column + right alignment = decimal points line up (**decimal alignment**).
- Label above a number column: **right** aligned to match its data.

Example of a correctly aligned column (invented values, currency, 2 decimal places):

| Price |
|---:|
| $4.50 |
| $12.00 |
| $108.75 |

## Numeric display formats

| Stored value | Format applied | Displayed |
|---|---|---|
| 12.4567 | Fixed, 1 decimal place | 12.5 |
| 7 | Currency, $, 2 decimal places | $7.00 |
| 0.15 | Percentage, 0 decimal places | 15% |
| 0.125 | Percentage, 1 decimal place | 12.5% |
| 15 | Percentage | 1500% (wrong: should have been stored as 0.15) |

Formatting changes appearance only: a value displayed as 12.5 is still 12.4567 in any calculation. A format set in the table design carries through to reports; a format set on the report control affects only that report.

## Exam traps

- Column headings put in the **report header**, so they are missing from page 2 onwards.
- A whole-report total placed in the **page footer** instead of the report footer.
- The default title left in place (often the table or query name) instead of the title given.
- A label that is left aligned above right-aligned numbers.
- Some values shown to 1 decimal place and others to 2 in the same column, so decimal points do not line up.
- Writing "header" or "footer" alone in a theory answer. Say **report** header or **page** header: they print differently.
- Confusing a report (presentation of output) with a form (screen for entering data).

## Self-test

1. Which section prints once for each record?
2. Where should a report title be placed?
3. A tabular report runs to four pages. Where must the column labels go so that every page has headings?
4. State where a page number should be placed.
5. Where should the total of all values in a field be placed, and why?
6. Give one feature of a columnar layout.
7. Give one situation where a tabular layout is more suitable than a columnar one.
8. How should numeric data be aligned?
9. What is decimal alignment?
10. A field stores 0.08. It is formatted as a percentage with no decimal places. What is displayed?
11. A price control shows "####". What has gone wrong and how is it fixed?
12. Does setting a field to display 1 decimal place change the value used in calculations?

### Answers

1. The detail section.
2. In the report header.
3. In the page header, which repeats at the top of every page.
4. In the page footer (or page header), so it appears on every page.
5. In the report footer, because it prints once after the last record, so the total covers all records.
6. Each record is shown as a separate block with a label beside each value; labels repeat for every record.
7. When many records with only a few fields need to be compared down columns, such as a price list.
8. Right aligned.
9. Positioning numbers so that their decimal points line up under one another, achieved by right alignment with the same number of decimal places.
10. 8%.
11. The control is too narrow to show the formatted value; widen the control until the whole value is visible.
12. No. The display format changes only how the value looks; the full stored value is still used.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 18 Databases, 18.3 Present data.
