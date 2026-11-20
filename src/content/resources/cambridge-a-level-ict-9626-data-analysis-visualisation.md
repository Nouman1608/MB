---
title: "Cambridge A Level Information Technology (ICT): 17.1 Data analysis and visualisation (9626)"
seoTitle: "Cambridge A Level IT 9626: Data Analysis Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Data analysis and visualisation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 17
syllabusTopics:
  - qualification: "a-level"
    topic: "data-analysis-and-visualisation"
  - qualification: "a-level"
    topic: "data-analysis-and-visualisation"
    subtopic: "data-analysis-and-visualisation-content"
description: "Study guide to section 17.1 of Cambridge A Level IT 9626: cleaning and transforming data, combining sources, splitting and merging fields, pivot table reports and pivot charts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **17.1 Data Analysis and Visualisation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. The syllabus says that Paper 4 (Advanced Practical) tests sections 17 to 21, so this topic is mainly examined by practical tasks on a computer. The skills build on spreadsheets, modelling and database and file concepts from the AS Level content (sections 8, 9 and 10).

The syllabus asks you to be able to:

- transform and clean data to extract meaningful information
- get data from different sources: compare and consolidate data from two data sources, split data into discrete fields, and merge and combine data into required fields
- display data to communicate information using **pivot table reports** and **pivot charts**.

Use it with the [data analysis and visualisation topic guide](/resources/a-level-cambridge-ict-data-analysis-and-visualisation/), the [topic revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-data-analysis-visualisation-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

Function names vary between spreadsheet programs. The ideas below apply to all of them, and you should practise in the software you use at school.

## The purpose

Raw data is rarely ready to use. It may contain mistakes, inconsistent entries, duplicates, or fields that combine several facts. It may come from several sources that do not match. Analysis is the process of turning this into **information**: accurate, in the right form and presented so that people can make decisions from it.

## Transforming and cleaning data

**Cleaning** removes or corrects errors and inconsistencies. **Transforming** changes the shape or form of the data so that it can be analysed.

| Problem | Example | Typical fix |
|---|---|---|
| Extra spaces | " Smith " | Trim function |
| Inconsistent case | "london", "LONDON", "London" | Convert to proper or upper case |
| Different spellings or codes | "M", "Male", "male" | Find and replace, or a lookup table |
| Duplicate records | The same customer entered twice | Remove duplicates (after checking which to keep) |
| Missing values | Blank age field | Filter blanks; fill from another source; or mark and exclude |
| Wrong data type | Number stored as text; date as text | Convert type; reformat |
| Impossible values | Age of 250 | Validation rule, filter and correct |
| Different formats | 01/02/2025 and 1 Feb 2025 | Standardise the date format |

Good practice:

1. **Keep a copy** of the original data.
2. Clean using formulas or tools so that the steps can be repeated and checked.
3. Check the result, for example by counting rows before and after.
4. Record what was changed.

## Getting data from different sources

### Comparing and consolidating data from two sources

Often two files hold related data: for example, last year's and this year's customer lists, or a spreadsheet of orders and a table of customers. Tasks include:

- **Comparing:** finding items in one source and not in the other, or finding records whose values differ. Use a lookup (such as a vertical or exact-match lookup) or a match function on a key field such as CustomerID, and flag results that are not found. Conditional formatting can highlight differences.
- **Consolidating:** combining the data into one table or summary. This may mean appending one list below the other (the structure must match), or joining by a key field so that the details from one source appear next to the matching records in the other. Summary functions such as totals by category can consolidate several sheets.

Points to check: the key field must be unique and in the same format in both sources, the column headings must match, and the number of rows should be checked afterwards.

### Splitting data into discrete fields

A **discrete field** holds one fact only. Data often arrives with several facts in one field, which makes sorting, searching and grouping difficult.

*Example:* a field "Smith, Anna" holds surname and first name.

- Use **text to columns** with a delimiter (the comma), or functions that find a character and take text before and after it (such as left, right, mid and find).
- Result: Surname = "Smith", FirstName = "Anna". The data can now be sorted by surname.

*Example:* a code "NW-2025-014" could be split into area, year and number using the hyphen as the delimiter.

### Merging and combining data into required fields

The opposite task: joining separate fields into one.

*Example:* FirstName "Anna" and Surname "Smith" are combined into FullName "Anna Smith". Use concatenation with a space between: first name & " " & surname. Dates can be built from separate day, month and year fields. Address lines can be combined into one label line.

The combined result should be tidy: no double spaces, consistent capital letters and the correct separators.

## Displaying data: pivot table reports

A **pivot table** summarises a large table without changing it. The user chooses which fields go where, and the program groups the records and calculates the results.

### Parts of a pivot table

| Area | Role |
|---|---|
| **Rows** | The field whose values become the row labels, for example Region |
| **Columns** | The field whose values become the column headings, for example Product |
| **Values** | The field to calculate on and the calculation: sum, count, average, minimum, maximum |
| **Filters** (and slicers) | Limit what is included, for example only one year |

The source must be a proper table: headings in the first row, one record per row, no blank rows or columns, and consistent data types.

### Worked example

A shop records sales:

| Region | Product | Units | Price (each) |
|---|---|---|---|
| North | Pen | 20 | 2 |
| North | Book | 5 | 8 |
| South | Pen | 30 | 2 |
| South | Book | 10 | 8 |
| South | Pen | 10 | 2 |
| East | Book | 4 | 8 |
| East | Pen | 15 | 2 |
| North | Pen | 10 | 2 |

First add a calculated field Revenue = Units × Price in the source table. Now build a pivot table with Region in rows, Product in columns and the **sum of Revenue** in values.

- North Pen: (20 + 10) × 2 = 60. North Book: 5 × 8 = 40. North total 100.
- South Pen: (30 + 10) × 2 = 80. South Book: 10 × 8 = 80. South total 160.
- East Pen: 15 × 2 = 30. East Book: 4 × 8 = 32. East total 62.

| Region | Book | Pen | Grand total |
|---|---|---|---|
| East | 32 | 30 | 62 |
| North | 40 | 60 | 100 |
| South | 80 | 80 | 160 |
| Grand total | 152 | 170 | 322 |

The table answers questions quickly: South earns the most (160); pens earn more than books (170 against 152). Changing the value to **sum of Units** gives totals of 35 (North), 50 (South) and 19 (East), 104 in all. Changing it to **count** shows how many sales records there are.

Pivot tables do not update automatically when the source data changes. Use the **refresh** command, and if rows are added, make sure the source range includes them (using a table object helps).

### Useful features

- **Grouping** dates into months, quarters or years, and numbers into bands.
- **Sorting and filtering** by label or by value.
- **Calculated fields** such as a percentage of the grand total.
- **Number formatting** (for example currency) for readability.

## Pivot charts

A **pivot chart** is a chart linked to a pivot table. When the pivot table changes, so does the chart, and the chart has the same fields as filters.

Choosing the chart type:

- **Column or bar chart:** compare categories (revenue by region).
- **Line chart:** trends over time (monthly revenue).
- **Pie chart:** share of a total, only with a few categories that add up to a whole.

Good practice for any chart: a clear title, labelled axes with units, a legend when there is more than one series, readable text, and a sensible scale. Remove clutter and do not use a chart type that misleads.

## Common errors

- Building the pivot table from data that has blank rows or text in number columns.
- Forgetting to refresh after data changes.
- Using **count** when **sum** is needed (or the reverse).
- Splitting data by position when the lengths vary, instead of using a delimiter.
- Deleting duplicates without checking the key field.
- Cleaning the only copy of the data.
- Using a pie chart for many categories or for values that do not add up to a whole.

## Frequently asked questions

**What is the difference between cleaning and transforming data?**
Cleaning corrects errors and inconsistencies. Transforming changes the shape or form of the data, such as splitting or merging fields, so that it can be analysed.

**What is a pivot table used for?**
It summarises a large table by grouping the records and calculating totals, counts or averages without changing the original data.

**What is a pivot chart?**
A chart linked to a pivot table, which changes when the pivot table is changed.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 17.1: Data Analysis and Visualisation.
