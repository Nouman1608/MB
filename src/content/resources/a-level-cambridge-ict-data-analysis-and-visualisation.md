---
title: "Cambridge A Level Information Technology (ICT): Data analysis and visualisation (9626)"
seoTitle: "Cambridge A Level ICT 9626 Data Analysis and Visualisation"
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
description: "Study guide for Cambridge A Level IT 9626 Data analysis and visualisation: cleaning, splitting and merging data, consolidation, pivot tables and charts."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 17, Data analysis and visualisation** (section 17.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases **Paper 4 (Advanced Practical)** tasks on sections 17–21 and **Paper 3 (Advanced Theory)** questions on sections 12–21, so you need the practical skills and the reasons behind them.

The syllabus names no software, so skills are described in general terms using section 8 functions. Use this guide with the [revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-practice/). The course hub is [Cambridge A Level IT](/boards/cambridge/a-level/ict/), the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome, and a [free 10-minute diagnostic](/diagnostics/) shows where to start.

## What this topic covers

| Section 17.1 point | What you must be able to do | Level |
|---|---|---|
| Analyse, interpret and display data | Use skills from 8 Spreadsheets, 9 Modelling and 10 Database and file concepts to communicate information to users clearly and efficiently | A Level only |
| Transforming and cleaning data | Find and fix data problems, and reshape data so it gives meaningful information | A Level only |
| Getting data from different sources | Compare and consolidate data from two sources; split data into discrete fields; merge and combine data into required fields | A Level only |
| Displaying data | Produce pivot table reports and pivot charts | A Level only |

Topic 17 builds on AS skills: see the [Spreadsheets guide](/resources/a-level-cambridge-ict-spreadsheets/) for function syntax, [Database and file concepts](/resources/a-level-cambridge-ict-database-and-file-concepts/) for queries and cross-tabs, [Modelling](/resources/a-level-cambridge-ict-modelling/) for what-if analysis and [Data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/) for data versus information.

## The running example

Peak Hire rents bikes, kayaks and tents from two branches. North exports a **csv** file; South exports a tab-delimited **txt** file with different field names and layouts. The manager wants one table and a summary of revenue by category and branch. Daily rates (in dollars): Bikes 15, Kayaks 25, Tents 10.

## Analysing data: the process

Work in this order:

1. **Get** the data from each source.
2. **Clean** it.
3. **Transform** it: split, merge and calculate fields.
4. **Combine** the sources into one consistent table.
5. **Summarise and display** it: pivot table report and pivot chart.
6. **Interpret** the result for the user.

Skipping step 2 gives wrong totals however good the chart looks.

## Transforming and cleaning data

**Cleaning** corrects or removes data that is wrong, incomplete, repeated or inconsistent. **Transforming** changes the form or structure of data so it can be analysed, without changing its meaning.

### Common data problems

| Problem | Example | Fix |
|---|---|---|
| Extra spaces | " Sara Khan", "Kayaks " | Remove leading and trailing spaces |
| Inconsistent values | "Bike" and "Bikes" | Standardise to one value; add a drop-down list for future entry |
| Duplicate records | Hire N102 twice | Keep one copy |
| Missing values | Days left blank | Find with COUNTBLANK or ISBLANK; get the value from the source, or exclude and report it |
| Invalid values | Days = −1 | Check against the source; apply a validation rule |
| Numbers stored as text | "3 days" | Extract the number into a numeric field |
| Ambiguous dates | 06/07/2026 | Confirm the source format (6 July or June 7), then convert to true dates |

Variants such as "Bike", "Bikes" and "Bikes " (trailing space) can appear as separate rows in a summary, splitting one category's total. Removing spaces is not in the 8.1 list; the syllabus states a paper will name the function for any unlisted skill.

### Worked example 1: cleaning an extract

North's raw extract has eight rows:

| HireID | Customer | Category | Days |
|---|---|---|---|
| N101 | ␣Sara Khan | Bikes | 3 |
| N102 | Imran Butt | Bike | 2 |
| N103 | Hina Malik | Kayaks | (blank) |
| N102 | Imran Butt | Bike | 2 |
| N104 | Omar Shah | Tents | −1 |
| N105 | Ayesha Noor | Kayaks␣ | 2 |
| N106 | Bilal Raza | Tents | 4 |
| N107 | Zainab Ali | Bikes | 1 |

(␣ marks a space.)

**Step 1 -- duplicates.** Flag repeated IDs in a helper column, starting in row 2 and copied down:

```
=COUNTIF($A$2:A2,A2)>1
```

The range grows as the formula is copied (absolute start, relative end). In row 5 the range is A2:A5, N102 appears twice, and the result is **TRUE**. Delete that row. In a database, a find-duplicates query does this.

**Step 2 -- spaces and spelling.** Remove the spaces in N101 and N105. Replace "Bike" with "Bikes".

**Step 3 -- missing and invalid values.** N103 has no Days value and N104 has −1. Neither can be guessed: query both with the branch and exclude them until corrected.

**Result:** 8 rows − 1 duplicate − 1 blank − 1 invalid = **5 clean records**, with 2 sent back to the branch.

### Transforming fields

- **Derived fields**: calculate what you need, for example Revenue `=D2*E2` (Days × Rate), or Month `=MONTH(G2)`.
- **Extract numbers from text**: if Days is stored as "3 days", `=VALUE(LEFT(D2,FIND(" ",D2)-1))` gives **3** as a number.
- **Categorise**: IF or IFS puts values into bands, such as "Short" or "Long" hire.
- **Rotate**: TRANSPOSE turns data laid out in rows into columns, so both sources share one layout.
- **Look up**: VLOOKUP or XLOOKUP adds a field from another table, such as each category's rate.

## Getting data from different sources

### Splitting data into discrete fields

A **discrete field** holds one item of data. South stores "Surname, Forename" in one field, so you cannot sort by forename. Split it.

**Worked example 2.** B2 holds "Malik, Hina".

```
Surname:  =LEFT(B2,FIND(",",B2)-1)
Forename: =MID(B2,FIND(",",B2)+2,50)
```

- FIND returns **6**, the position of the comma.
- LEFT takes 6 − 1 = 5 characters: **Malik**.
- MID starts at 6 + 2 = 8, skipping the comma and the space, and takes up to 50 characters, which returns the rest of the text: **Hina**.

Software can also split a column at a **delimiter** (comma, tab or space), and when importing a csv or txt file you choose the delimiter so each value lands in its own field. Formulas update when data changes; a split tool suits a one-off clean-up.

### Merging and combining data into required fields

Merging joins fields into the one field the task needs.

**Worked example 3.** North wants "Forename Surname" in one field. With the forename in C2 and surname in B2:

```
=C2&" "&B2      gives "Hina Malik"
```

South stores the hire date as three fields: Day (F2 = 14), Month (G2 = 7), Year (H2 = 2026). Combine them into one true date:

```
=DATE(H2,G2,F2)      gives 14/07/2026
```

DATE takes year, month, day in that order. Joining the parts with `&` would give text, which will not sort or group by month reliably. To keep IDs unique when files are combined, `="S"&A2` turns South's hire 17 into **S17**.

### Comparing data from two sources

Before combining, compare the sources to find mismatches.

**Worked example 4.** The two branches send their rate lists. North is in A2:B4; South's list is in columns E:F of another sheet.

```
C2: =XLOOKUP(A2,South!$E$2:$E$10,South!$F$2:$F$10,"Missing")
D2: =IF(B2=C2,"Match","Check")
```

| Category | North rate | South rate (C) | Result (D) |
|---|---|---|---|
| Bikes | 15 | 15 | Match |
| Kayaks | 25 | 28 | Check |
| Tents | 10 | Missing | Check |

South charges a different kayak rate and has no tents entry; the manager confirms 15, 25 and 10 dollars everywhere. To test whether a record appears in the other source at all: `=IF(COUNTIF(South!$B$2:$B$50,B2)=0,"North only","Both")`. In a database, join the tables on a key field and look for unmatched records.

### Consolidating data from two sources

**Consolidating** brings the data into one table, or one set of totals, with consistent fields. Steps:

1. Import both files, choosing the correct delimiter for each.
2. Give both the **same field names, order, data types and formats** (true dates, one currency, one spelling of each category).
3. Add a **Branch** field so each record still shows where it came from.
4. Append one set of records below the other (in a database, an append query).
5. Remove duplicates and check the record count equals the sum of the two clean sources.

You can also consolidate totals without one table. Bikes revenue from both sheets:

```
=SUMIF(North!C:C,"Bikes",North!F:F)+SUMIF(South!C:C,"Bikes",South!F:F)
```

This gives 150 + 75 = **225**. A combined table is usually more efficient: one pivot table then answers many questions.

## Displaying data to communicate information

After cleaning, the combined table has 12 hires:

| Branch | Category | Days | Month | Revenue |
|---|---|---|---|---|
| North | Bikes | 3 | Jun | 45 |
| North | Kayaks | 2 | Jun | 50 |
| North | Tents | 4 | Jul | 40 |
| North | Bikes | 2 | Jul | 30 |
| North | Kayaks | 4 | Jul | 100 |
| North | Bikes | 5 | Aug | 75 |
| South | Bikes | 4 | Jun | 60 |
| South | Tents | 6 | Jun | 60 |
| South | Kayaks | 1 | Jul | 25 |
| South | Tents | 3 | Aug | 30 |
| South | Bikes | 1 | Aug | 15 |
| South | Kayaks | 3 | Aug | 75 |

### Pivot table reports

A **pivot table** summarises a list by grouping records. You choose:

- a **row field** (one group per row), such as Category
- a **column field** (one group per column), such as Branch
- a **value field** and how to summarise it: sum, count, average, maximum or minimum
- an optional **filter field**, such as Month, to include only some records.

**Worked example 5.** Rows Category, columns Branch, values Sum of Revenue:

| Total revenue (dollars) | North | South | Grand total |
|---|---|---|---|
| Bikes | 150 | 75 | 225 |
| Kayaks | 150 | 100 | 250 |
| Tents | 40 | 90 | 130 |
| **Grand total** | **340** | **265** | **605** |

Interpretation: Kayaks earn the most (250 of 605, about 41.3%). North earns 75 dollars more than South. Tents are South's strength: 90 against 40.

Change the summary to **Count** to show numbers of hires: Bikes 3 and 2, Kayaks 2 and 2, Tents 1 and 2. **Average** revenue per hire is Bikes 45.00, Kayaks 62.50, Tents 43.33. Filter to August and only four cells hold values: North Bikes 75; South Bikes 15, Kayaks 75 and Tents 30.

A **pivot table report** is the pivot table made ready for its reader: a clear title, meaningful headings ("Total revenue (dollars)", not "Sum of Revenue"), currency format, sensible sort order and the filter setting visible. If the source list changes, **refresh** the pivot table so its figures update.

### Pivot charts

A **pivot chart** is drawn from a pivot table and stays linked to it: rearranging or filtering the table changes the chart. Its **field selection buttons** let the user filter categories, branches or months on the chart itself.

Choose the chart for the message:

- Revenue by category for both branches: **comparative bar chart**.
- Each category's share of one branch's revenue: **pie chart**.
- Monthly revenue trend (June 215, July 195, August 195): **line graph**.

Add a title, axis titles with units, a legend, and a value axis starting at zero so differences are not exaggerated.

### Communicating clearly and efficiently

- Match the display to the user: a manager wants totals and a chart; an auditor may want record-level detail.
- Use the most efficient method: one pivot table replaces many typed totals; one replicated formula replaces manual edits.
- Save in the required format. The syllabus states that work saved in an incorrect file format receives no marks for that task in the practical papers.

### Pivot tables compared with formulas

| Pivot table | SUMIF/COUNTIF formulas |
|---|---|
| Rearranged by moving fields | Each total needs its own formula |
| New categories appear on refresh | A new category needs a new formula |
| May need refreshing after source changes | Recalculates automatically |

## Common errors

- Building the pivot table before cleaning, so "Bike" and "Bikes" appear as separate rows.
- Joining date parts with `&`, giving text that will not sort or group by month.
- Forgetting the −1 in `LEFT(B2,FIND(",",B2)-1)`, which keeps the comma.
- Appending sources whose fields are in a different order.
- Dropping the Branch field when consolidating.
- Reading a filtered pivot table as if it showed all records.

## Next steps

Condense the topic with the [revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/), then try the [practice questions](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-practice/) or a [free diagnostic](/diagnostics/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 17, Data analysis and visualisation, section 17.1.
