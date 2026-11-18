---
title: "Cambridge IGCSE ICT (0417): Present data (Databases)"
resourceType: "study-guides"
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
description: "Producing database reports for Cambridge IGCSE ICT 0417 subtopic 18.3: report sections, titles, tabular and columnar layouts, alignment and number formats."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 18.3 of Cambridge IGCSE ICT 0417 is about the last step of a database task: turning the records you have selected into a **report** that someone can read and use. The syllabus lists one skill, "Display data", and spells out what that means: show all the required data and labels in full, use the report header, report footer, page header and page footer appropriately, set a report title, choose a tabular or columnar layout, align data and labels (including right-aligned and decimal-aligned numbers), and control how numbers are displayed (decimal places, currency symbol, percentage). This guide goes through each of those requirements in turn, with two worked examples.

For the whole of Topic 18, including tables, keys and queries, see the [Databases study guide](/resources/cambridge-igcse-ict-databases-study-guide/). When you have read this page, use the [18.3 revision notes](/resources/cambridge-igcse-ict-0417-present-data-revision-notes/) and the [18.3 practice questions](/resources/cambridge-igcse-ict-0417-present-data-practice/).

## What a database report is for

A table holds every record; a query picks out the records and fields you need; a report **presents** that selection on paper or as a document file. The report adds things a table cannot: a title, headings that repeat on every page, page numbers, totals at the end and consistent formatting. In the practical paper the report is often the only evidence the examiner sees of your query, so a report with the wrong fields or a cut-off value can lose marks for work that was actually correct.

## The five report sections

Most database packages divide a report into the same bands. Knowing what prints where is the key to placing items correctly.

| Section | Prints | Typical contents |
|---|---|---|
| Report header | Once, at the very start of the report | The report title, perhaps a logo or date |
| Page header | At the top of every page | Column headings (labels) in a tabular report |
| Detail | Once for every record | The data from each field |
| Page footer | At the bottom of every page | Page number, your name or candidate details if the task asks |
| Report footer | Once, after the last record | Totals, averages or counts for the whole report |

Two details catch candidates out. First, the report footer appears only on the **last** page, after the final record and above that page's footer, so a total placed there is printed once, for the whole report. The page footer is the wrong place for a whole-report total: it repeats on every page, and many packages will not calculate a summary there at all. Second, labels placed in the report header appear only on page 1; if the report runs to three pages, pages 2 and 3 would have columns of data with no headings. Column labels for a tabular report belong in the page header.

## Setting the report title

The title goes in the report header. Type it exactly as the task gives it, including capital letters and spaces, and make sure the text box is wide enough to show it in full. If the task asks for the title to be a particular size or to be centred, apply that to the title control only. A report saved under one name can show a different title, so check the title that prints, not the name of the object in the database window.

## Tabular and columnar layouts

A **tabular** report shows one record per row with the labels once, as column headings, in the page header. It suits many records with a handful of fields because the reader can compare values down a column.

A **columnar** report shows each record as a block, with every label beside its value in the detail section, so the labels repeat for every record. It suits records with many fields, such as one customer per block with name, address and contact details.

"Controlling the display of data and labels" means deciding which fields appear, in which order, and with which label text. Delete any field the task did not ask for, put the fields in the order given, and do not leave a label without its data or data without its label.

## Showing all data and labels in full

Every value of every record, and every label, must be fully visible. A text box sized for the first record may cut off a longer value further down, so find the longest entry in each field (sorting the query on that field is a quick check) and widen the control until it fits. Numeric fields that are too narrow may show a row of hash symbols or a rounded value instead of the true one. If widening every column would push the report off the page, change to landscape orientation or reduce spacing between columns, then check the preview again.

## Aligning data and labels

The convention is:

- **Text** data is left aligned, so words start at the same point.
- **Numeric** data is right aligned, so units line up under units and tens under tens.
- **Decimal alignment** lines up the decimal points. When every value in a column is displayed to the same number of decimal places, right alignment achieves this automatically.
- A **label** should sit in line with its data: a heading above a right-aligned number column should also be right aligned, so it sits over the numbers it describes.

Mixed alignment within one column, or a label that is left aligned over right-aligned numbers, looks untidy and does not meet the requirement.

## Controlling the display format of numbers

The display format changes how a value looks, not the value stored. The syllabus names three things to control:

- **Number of decimal places**: a weight stored as 12.4567 can be displayed to 1 decimal place as 12.5.
- **Currency symbol**: a price can show a symbol such as $, £ or € and normally two decimal places.
- **Percentage**: a value stored as 0.15 displays as 15%. If 15 is stored and then formatted as a percentage, it displays as 1500%, a common error.

You can set the format in the table design, which affects everything based on that field, or on the control in the report, which affects only that report. If the task says "in the report", set it on the report control.

## Worked example 1: planning a report

*The data in this example is invented.* A cycle hire shop has a query called *City bikes* with fields BikeID, Model, Type, DailyRate and Weight. The task says: produce a tabular report showing only Model, DailyRate and Weight, in that order, with the title *City Bikes for Hire*; show the daily rate in dollars with 2 decimal places and the weight to 1 decimal place; show the average daily rate at the end of the report; put a page number at the bottom of every page.

| Requirement | Decision |
|---|---|
| Only three fields, in order | Remove BikeID and Type; order Model, DailyRate, Weight from left to right |
| Tabular layout | Labels in the page header, data in the detail section |
| Title | *City Bikes for Hire* in the report header, wide enough to show in full |
| DailyRate | Currency format, $ symbol, 2 decimal places, right aligned; label right aligned too |
| Weight | Fixed format, 1 decimal place, right aligned |
| Average rate | A calculated control in the report footer, formatted as currency with 2 decimal places |
| Page number | In the page footer |

If the DailyRate values are 18.5, 22 and 15.75, the average is (18.5 + 22 + 15.75) / 3 = 56.25 / 3 = 18.75, displayed as $18.75. The calculation itself belongs to subtopic 18.2; 18.3 is about where it appears and how it is formatted.

## Worked example 2: spotting faults in a report

A candidate's report on the same data has these faults. Each is followed by the correction.

1. *The column headings appear on page 1 only.* They were placed in the report header; move them to the page header.
2. *The Model column shows "Trailblaz".* The control is too narrow; widen it to fit the longest model name.
3. *DailyRate shows 18.5, 22 and 15.75.* No consistent format; apply currency with 2 decimal places, giving $18.50, $22.00 and $15.75.
4. *The average appears at the foot of every page.* It was placed in the page footer; move it to the report footer.
5. *BikeID appears as the first column.* An extra field was left in; delete it from the report.

## Common mistakes

- Putting column labels in the report header, so later pages have no headings.
- Totals or averages in the page footer instead of the report footer.
- Leaving the default title (often the query name) instead of the title the task gives.
- Values truncated because a control was sized for the first record only.
- Left-aligned numbers, or a label aligned differently from its data.
- Formatting 15 as a percentage and getting 1500%.

## Exam technique

The practical task uses *produce*, *display*, *set*, *align* and *format*. Treat each requirement as a separate mark and tick it off against your printout or PDF, checking the last page as well as the first. In the theory paper, *state* where an item should go (for example "page footer"), and *explain* why with a reason linked to how the section prints, such as "the page header repeats on every page, so every page has column headings".
