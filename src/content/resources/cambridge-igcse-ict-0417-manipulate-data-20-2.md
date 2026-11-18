---
title: "Cambridge IGCSE ICT (0417): Manipulate data (Spreadsheets)"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20.2
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "manipulate-data-20-2-0417"
description: "Sorting and searching spreadsheet data for Cambridge IGCSE ICT 0417 subtopic 20.2: multi-level sorts, filters with AND, OR, NOT, comparison operators and wildcards."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 20.2 of Cambridge IGCSE ICT 0417, "Manipulate data", has two skills. **Sort data**: using a single criterion or multiple criteria, sort data into ascending or descending order. **Search and select data**: using a single criterion or multiple criteria, select subsets of data, performing searches with the operators AND, OR, NOT, >, <, =, >=, <= and <>, and with wildcards. This guide explains each skill with one data set, so you can see exactly which rows each sort or search produces.

The [Spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/) covers the whole of Topic 20 more briefly. Practise this subtopic with the [20.2 revision notes](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2-revision-notes/) and the [20.2 practice questions](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2-practice/). Databases have their own version of these skills in subtopic 18.2; the logic is the same, but here you work with rows of a worksheet instead of records in a table.

## The data set

*All data is invented.* An athletics club keeps this sheet, with headings in row 1.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | ID | Surname | Event | Age | Time (s) |
| 2 | A01 | Patel | 100m | 15 | 12.4 |
| 3 | A02 | Smith | 200m | 16 | 25.9 |
| 4 | A03 | Okafor | 100m | 16 | 11.8 |
| 5 | A04 | Simmons | 400m | 15 | 58.2 |
| 6 | A05 | Brown | 200m | 15 | 26.4 |
| 7 | A06 | Sanchez | 100m | 17 | 11.5 |
| 8 | A07 | Stevenson | 400m | 16 | 55.0 |
| 9 | A08 | Bryant | 200m | 17 | 24.7 |

## Sorting data

Sorting rearranges whole rows into order based on the values in one or more columns.

- **Ascending**: A to Z for text, smallest to largest for numbers, earliest to latest for dates.
- **Descending**: Z to A, largest to smallest, latest to earliest.

### Before you sort

Select the **whole data range**, A1:E9 here, or click a single cell inside it and let the software detect the range. Tell the software the first row contains **headers** so the headings stay at the top. If you select only column E and sort, the times move but the names do not, and every row is scrambled. Many packages warn you about this; choose to expand the selection.

### Single criterion

Sort on Time (s), ascending, to list the fastest first. The order becomes Sanchez (11.5), Okafor (11.8), Patel (12.4), Bryant (24.7), Smith (25.9), Brown (26.4), Stevenson (55.0), Simmons (58.2). Every row moves as a unit, so each ID, event and age stays with its surname. Comparing a 100m time with a 400m time is not very useful, though, which is why multiple criteria exist.

### Multiple criteria

A multi-level sort uses a **first** (primary) criterion and then a **second** criterion to order rows that are equal on the first. Task: sort by Event ascending, then by Time ascending.

| Order | Surname | Event | Time (s) |
|---|---|---|---|
| 1 | Sanchez | 100m | 11.5 |
| 2 | Okafor | 100m | 11.8 |
| 3 | Patel | 100m | 12.4 |
| 4 | Bryant | 200m | 24.7 |
| 5 | Smith | 200m | 25.9 |
| 6 | Brown | 200m | 26.4 |
| 7 | Stevenson | 400m | 55.0 |
| 8 | Simmons | 400m | 58.2 |

The event names are text, so they sort character by character: "100m" before "200m" before "400m". The second criterion only matters within each event.

A different task, Age descending then Surname ascending, gives: Bryant and Sanchez (17); Okafor, Smith and Stevenson (16); Brown, Patel and Simmons (15). The order of the criteria matters: Surname then Age would give a simple alphabetical list.

## Searching and selecting data

Selecting a subset means showing only the rows that meet a **criterion** and hiding the rest. The usual tool is a **filter**, which adds a drop-down to each heading. Filtered-out rows are **hidden, not deleted**; clearing the filter shows them again. The row numbers of the visible rows usually change colour and skip, which is a quick visual check that a filter is on.

### Comparison operators

| Operator | Meaning | Example on the data | Rows selected |
|---|---|---|---|
| = | equal to | Event = 100m | Patel, Okafor, Sanchez |
| <> | not equal to | Event <> 200m | Patel, Okafor, Simmons, Sanchez, Stevenson |
| > | greater than | Age > 16 | Sanchez, Bryant |
| < | less than | Time < 12 | Okafor, Sanchez |
| >= | greater than or equal to | Age >= 16 | Smith, Okafor, Sanchez, Stevenson, Bryant |
| <= | less than or equal to | Time <= 25.9 | Patel, Smith, Okafor, Sanchez, Bryant |

Read the task's wording carefully: "at least 16" means >= 16, "over 16" means > 16, and "16 or younger" means <= 16.

### AND, OR and NOT

- **AND**: a row is selected only if it meets **every** criterion. Event = 100m AND Time < 12 selects Okafor and Sanchez. Patel is a 100m runner but his time is 12.4.
- **OR**: a row is selected if it meets **at least one** criterion. Age >= 16 OR Event = 400m selects Smith, Okafor, Simmons, Sanchez, Stevenson and Bryant. Simmons is 15 but runs the 400m, so the OR brings him in.
- **NOT**: excludes rows that meet a criterion. NOT Event = 100m is the same as Event <> 100m. Age = 15 AND NOT Event = 100m selects Simmons and Brown.

In a standard filter, criteria set on **different columns** combine with AND: filtering Event to 100m and Age to 16 shows only Okafor. Within **one column**, a custom filter can join two conditions with AND (such as Time >= 20 AND Time <= 30) or OR (such as Event = 100m OR Event = 400m). An OR across **different columns**, such as Age >= 16 OR Event = 400m, needs an **advanced filter** with a criteria range: criteria written on the **same row** are combined with AND, and criteria on **different rows** are combined with OR.

### Wildcards

Wildcards stand for unknown characters in a text search.

| Wildcard | Stands for | Example | Rows selected |
|---|---|---|---|
| * | any number of characters (including none) | Surname = S* | Smith, Simmons, Sanchez, Stevenson |
| * | | Surname = *son | Stevenson |
| ? | exactly one character | Surname = B???? | Brown (Bryant has six letters) |

Combine wildcards with NOT to exclude a pattern: Surname <> S* selects everyone whose surname does not begin with S: Patel, Okafor, Brown and Bryant. Most filters also offer text options such as "begins with" and "contains", which apply these wildcards for you.

## Worked example: a three-part task

Task: show only athletes aged 16 or over whose surnames begin with S, then sort them by time with the fastest first.

1. Filter Age with >= 16. Visible: Smith, Okafor, Sanchez, Stevenson, Bryant.
2. Filter Surname with S* (AND with the age filter, because it is on a different column). Visible: Smith, Sanchez, Stevenson.
3. Sort the visible data by Time ascending: Sanchez 11.5, Smith 25.9, Stevenson 55.0.

Check the result by testing each excluded row: Simmons begins with S but is 15; Okafor is 16 but does not begin with S.

## Common mistakes

- Sorting a single column, so the rows no longer belong together.
- Including the heading row in the sort, so it moves into the data.
- Using > when the task says "or more" (>=), or the reverse.
- Using OR when every condition must be true.
- Typing "S" when "begins with S" is meant, so only an exact match on "S" is found.
- Deleting rows to "select" data instead of filtering, losing records.
- Forgetting that criteria on different columns of a filter combine with AND.

## Exam technique

The practical task uses *sort*, *search*, *select* and *extract*. Treat each criterion as a separate mark and check every row: a subset with one wrong row loses the mark. Print or screenshot the evidence the task asks for, such as the filtered rows with the criteria visible. In theory questions, *describe* a search by naming the field, the operator and the value, for example: "Filter the Age column for values >= 16 AND the Surname column for S*."
