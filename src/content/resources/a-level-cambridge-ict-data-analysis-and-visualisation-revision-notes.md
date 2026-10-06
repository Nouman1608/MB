---
title: "Cambridge A Level Information Technology (ICT): Data analysis and visualisation (9626) -- Revision Notes"
seoTitle: "9626 A Level IT: Data Analysis and Visualisation Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge A Level IT 9626 data analysis: cleaning checklist, split and merge formulas, consolidation steps, pivot tables, self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes cover **topic 17, Data analysis and visualisation** (section 17.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases **Paper 4 (Advanced Practical)** tasks on sections 17–21 and **Paper 3 (Advanced Theory)** questions on sections 12–21, so learn the method and the reasons for it.

For full explanations and worked examples, use the [study guide](/resources/a-level-cambridge-ict-data-analysis-and-visualisation/). Then test yourself with the [practice questions](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-practice/). Course hub: [Cambridge A Level IT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Not sure where to start? Take a [free diagnostic](/diagnostics/).

## What the syllabus asks for

Section 17.1 asks you to use skills from **8 Spreadsheets**, **9 Modelling** and **10 Database and file concepts** to analyse, interpret and display data so it communicates information to users clearly and efficiently. It lists:

- transforming and cleaning data to extract meaningful information
- getting data from different sources: comparing and consolidating data from two sources; splitting data into discrete fields; merging and combining data into required fields
- displaying data: pivot table reports and pivot charts.

Function syntax is revised in the [Spreadsheets revision notes](/resources/a-level-cambridge-ict-spreadsheets-revision-notes/); import, append and find-duplicates queries in the [Database and file concepts revision notes](/resources/a-level-cambridge-ict-database-and-file-concepts-revision-notes/).

## Key definitions

| Term | Meaning |
|---|---|
| Cleaning | Correcting or removing data that is wrong, incomplete, repeated or inconsistent |
| Transforming | Changing the form or structure of data (split, merge, calculate, rotate) without changing its meaning |
| Discrete field | A field holding one item of data, such as Surname only |
| Splitting | Separating one field into several discrete fields |
| Merging (combining) | Joining several fields into the one field a task needs |
| Comparing | Checking two sources against each other for missing, extra or different values |
| Consolidating | Bringing data from two or more sources into one consistent table or set of totals |
| Pivot table | A summary that groups records by row and column fields and sums, counts or averages a value field |
| Pivot table report | A pivot table formatted for its reader: title, clear headings, number formats, sort order |
| Pivot chart | A chart drawn from a pivot table, linked to it, with field selection buttons for filtering |

## The process in six steps

1. **Get** the data (import csv or txt, choosing the right delimiter).
2. **Clean** it.
3. **Transform** it (split, merge, calculate).
4. **Combine** the sources.
5. **Summarise and display** (pivot table report, pivot chart).
6. **Interpret** for the user.

## Cleaning checklist

| Look for | How to find it | Action |
|---|---|---|
| Duplicates | `=COUNTIF($A$2:A2,A2)>1` copied down, or a find-duplicates query | Keep one copy |
| Blanks | `COUNTBLANK`, `ISBLANK` | Get the value from the source or exclude and report |
| Invalid values | Sort, filter, or test against validation rules | Check with the source; never guess |
| Spelling or case variants | Filter the column to see every distinct value | Replace with one agreed value |
| Extra spaces | Values that look identical but group separately | Remove the spaces (a paper names the function if needed) |
| Numbers stored as text | Values that will not sum | Extract with `VALUE` |
| Ambiguous dates | 04/05/2026 | Confirm the source format, convert to true dates |
| Mixed units or currencies | kg and g, two currencies | Convert to one unit |

## Formula toolkit

| Job | Pattern |
|---|---|
| Text before a delimiter | `=LEFT(A2,FIND(",",A2)-1)` |
| Text after ", " | `=MID(A2,FIND(",",A2)+2,50)` |
| Last n characters | `=RIGHT(A2,n)` |
| Number from text | `=VALUE(LEFT(A2,FIND(" ",A2)-1))` |
| Join fields | `=B2&" "&C2` |
| Date from parts | `=DATE(year,month,day)` |
| Is it in the other list? | `=IF(COUNTIF(Other!$A$2:$A$99,A2)=0,"Missing","Both")` |
| Fetch the matching value | `=XLOOKUP(A2,Other!$A$2:$A$99,Other!$B$2:$B$99,"Missing")` |
| Do values agree? | `=IF(B2=C2,"Match","Check")` |
| Total across two sheets | `=SUMIF(S1!B:B,"X",S1!C:C)+SUMIF(S2!B:B,"X",S2!C:C)` |

The syllabus describes the 8.1 functions as examples; any function needed for an unlisted skill is named on the paper.

## Method boxes

**Split a field**
1. Find the delimiter's position with FIND.
2. LEFT for the part before it (position − 1 characters).
3. MID for the part after it (start at position + 1, or + 2 if a space follows).
4. For a one-off job on imported text, a split-at-delimiter tool also works.

**Merge fields**
1. Join text with `&`, adding spaces or separators as text in quotes.
2. Build dates with DATE, never with `&` (that gives text).
3. Add a prefix to keep IDs unique across sources.

**Compare and consolidate two sources**
1. Import both; set the same field names, order, data types and formats.
2. Compare keys (COUNTIF or XLOOKUP) to find records in one source only.
3. Compare values (IF) to find disagreements; resolve them with the owner of the data.
4. Add a source field (for example Branch).
5. Append one set below the other (append query in a database).
6. Remove duplicates; check the record count.

**Build a pivot table report and pivot chart**
1. Select the clean, combined list (one header row, no blank rows).
2. Choose row field, column field, value field and summary type (sum, count, average, max, min).
3. Add a filter field if only some records are needed.
4. Retitle headings with units, format numbers, sort.
5. Create the pivot chart; choose a chart that fits the message; label it fully.
6. Refresh after any change to the source data.

## Must-know distinctions

- **Cleaning vs transforming**: cleaning fixes errors; transforming reshapes correct data.
- **Splitting vs merging**: one field into many vs many fields into one.
- **Comparing vs consolidating**: finding differences between sources vs producing one combined set.
- **Pivot table vs pivot chart**: the summary numbers vs a linked chart of them.
- **Pivot table vs subtotals**: a separate summary that needs no sorting vs totals inserted into a sorted list.
- **Pivot table vs SUMIF formulas**: quick to rearrange and picks up new categories on refresh vs a formula per total, recalculated automatically.
- **Row or column field vs filter field**: grouping vs including only some records.
- **Sum vs count vs average**: total value vs number of records vs mean value per record.
- **True date vs date-like text**: only a true date sorts, groups by month and works in date calculations.
- **Data vs information**: raw values vs a summary that has meaning for its user, such as a pivot table report answering the manager's question.

## Quick self-test

1. Define consolidating data.
2. Give two reasons for cleaning data before building a pivot table.
3. A2 holds "Iqbal, Sana". What does `=FIND(",",A2)` return?
4. For the same cell, give a formula for the surname and state its result.
5. Give a formula returning "Sana" from A2.
6. C2 holds "Sana" and D2 holds "Iqbal". Write a formula giving "Sana Iqbal".
7. E2 holds "REF-7781". What does `=VALUE(RIGHT(E2,4))+1` return?
8. Year 2027, month 2, day 3 are in J2, K2 and L2. Write a formula giving one true date.
9. A pivot table shows values of 40, 60 and 100 for three groups. What percentage of the grand total is the largest group?
10. Name the four areas you place fields in when building a pivot table.
11. What are field selection buttons used for?
12. Why add a source field when consolidating?

### Answers

1. Bringing data from two or more sources into one consistent table or set of totals.
2. Any two: duplicates double-count; spelling variants split one group into several rows; blanks and invalid values distort totals and averages.
3. **6**
4. `=LEFT(A2,FIND(",",A2)-1)` gives **Iqbal**.
5. `=MID(A2,FIND(",",A2)+2,50)`
6. `=C2&" "&D2`
7. **7782** (RIGHT gives the text "7781"; VALUE converts it).
8. `=DATE(J2,K2,L2)`
9. 100 out of 200 = **50%**.
10. Rows, columns, values, filters.
11. Filtering what a pivot chart shows, directly on the chart.
12. So each record still shows where it came from, allowing comparisons between sources.

## Where marks are usually lost

- Describing a formula in words ("use LEFT") instead of writing it with cell references.
- Leaving out the −1 after FIND, so the delimiter is kept.
- Starting MID at the delimiter, not after it.
- Joining date parts with `&` and then sorting the text.
- Saying a pivot table "changes the data": it summarises it and leaves the source unchanged.
- Confusing a filter field with a row field.
- Listing cleaning actions without saying what problem each fixes.
- Choosing a pie chart to compare two branches across categories.
- Giving advantages of pivot tables only, when a question asks for a comparison.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 17, Data analysis and visualisation, section 17.1.
