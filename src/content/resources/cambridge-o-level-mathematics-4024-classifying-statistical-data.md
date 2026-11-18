---
title: "Cambridge O Level Mathematics (4024): Classifying Statistical Data"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 9.1
syllabusTopics:
  - qualification: "o-level"
    topic: "statistics"
    subtopic: "classifying-statistical-data-4024"
description: "Study guide to 4024 section 9.1: classifying data as categorical, discrete or continuous, and tabulating it in tally, grouped frequency and two-way tables."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.1, Classifying statistical data, in the Statistics topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The broader page [Statistics: Classifying Data, Averages, Spread and Statistical Charts](/resources/cambridge-o-level-mathematics-statistics-classifying-data-averages-spread-and/) introduces data types, tallies and a two-way table; this guide goes further into grouping continuous data and completing two-way tables from written information. Afterwards, use the [classifying statistical data revision notes](/resources/cambridge-o-level-mathematics-4024-classifying-statistical-data-revision-notes/) and the [classifying statistical data practice questions](/resources/cambridge-o-level-mathematics-4024-classifying-statistical-data-practice/).

## What section 9.1 asks for

The syllabus outcome is short: **classify and tabulate statistical data**, with tally tables and two-way tables given as examples. In practice this means three skills:

1. Saying what type of data you have.
2. Organising raw data into a tally or frequency table, grouped where sensible.
3. Organising data by two features at once in a two-way table, and completing such a table from partial information.

Every later statistics section depends on these. The type of data decides which average and which chart make sense, and an accurate table is the starting point for every calculation.

## Classifying data

| Type | Description | Examples |
|---|---|---|
| Categorical | described by words or labels, not measured | favourite fruit, eye colour, type of car |
| Discrete numerical | counted; only separate values are possible | number of siblings, goals scored, shoe size |
| Continuous numerical | measured; any value in a range is possible | height, mass, time, temperature |

**The test.** Ask "is it counted or measured?" Counted data is discrete; measured data is continuous. Ask "could it sensibly be halfway between two values?" A family cannot have 2.5 children, but a runner can take 12.35 seconds.

**Awkward cases.**

- *Shoe size* takes values such as 6, 6½ and 7, but nothing between them, so it is discrete even though it is not a whole number.
- *Age* is continuous, because time is measured, even when it is recorded in whole years.
- *Money* goes up in fixed steps such as cents, so it is usually treated as discrete.
- *Numbers used as labels*, such as a shirt number, are categorical. Their average means nothing.

## Tally tables

A tally table records each item as it is read, with every fifth stroke drawn across the previous four. This makes counting quick and avoids losing your place. Work through the raw list once, in order, crossing out each value as you tally it. Then write the frequency for each row and add the frequencies: the total must equal the number of items.

## Grouped frequency tables

When data has many different values, group it into classes.

**Discrete data** uses ranges such as 0–4, 5–9, 10–14. There is no gap problem, because no value lies between 4 and 5.

**Continuous data** uses inequalities so that every possible value belongs to exactly one class. The classes 5 ≤ t < 10 and 10 ≤ t < 15 meet at 10 with no gap and no overlap: a value of exactly 10.0 belongs to the second class, because the first requires t < 10.

**Choosing classes.** Use equal widths unless there is a reason not to, cover the whole range of the data, and use between about four and eight classes so the pattern is visible. Never write overlapping classes such as 5–10, 10–15 for continuous data, because it is unclear where 10 goes.

### Worked example 1

Twenty journey times, in minutes, are:

```
12.4  7.9 15.0 22.3  9.6 18.2 10.0 25.7 14.9 11.3
19.9  8.4 16.5 20.0 13.1  5.2 17.8 24.1 10.7 21.6
```

Organise them into a grouped frequency table with classes of width 5, starting at 5 minutes.

| Time t (minutes) | Tally | Frequency |
|---|---|---|
| 5 ≤ t < 10 | IIII | 4 |
| 10 ≤ t < 15 | IIII I | 6 |
| 15 ≤ t < 20 | IIII | 5 |
| 20 ≤ t < 25 | IIII | 4 |
| 25 ≤ t < 30 | I | 1 |
| Total | | 20 |

The boundary values need care. 10.0 goes in 10 ≤ t < 15, 15.0 goes in 15 ≤ t < 20, and 20.0 goes in 20 ≤ t < 25. The value 19.9 stays in 15 ≤ t < 20. The total of 20 confirms nothing was missed.

**What grouping loses.** Once the times are grouped you no longer know the exact values. You can say four journeys took between 20 and 25 minutes, but not how many took more than 22 minutes. This is the price of a clearer summary, and it is why a mean worked out from grouped data is only an estimate.

## Two-way tables

A two-way table classifies every item by two features, one along the rows and one down the columns. Each row and each column has a total, and the grand total in the corner is the total of the row totals and also of the column totals.

**Completing a table.** Any row or column with only one missing entry can be finished by subtraction. Work around the table, finishing whichever line has one gap, until it is complete.

### Worked example 2

There are 120 students in a year group, and 64 of them are girls. Each student studies exactly one of Art, Music or Drama. 18 boys study Art. 25 girls study Music. 40 students study Drama, and 22 of them are girls. 35 students study Art altogether. Complete a two-way table, and find how many boys study Music.

Start by placing every given number, then fill the gaps.

| | Art | Music | Drama | Total |
|---|---|---|---|---|
| Boys | 18 | | | |
| Girls | | 25 | 22 | 64 |
| Total | 35 | | 40 | 120 |

```
Boys total = 120 − 64 = 56
Girls, Art = 35 − 18 = 17
Boys, Drama = 40 − 22 = 18
Boys, Music = 56 − 18 − 18 = 20
Music total = 20 + 25 = 45
```

| | Art | Music | Drama | Total |
|---|---|---|---|---|
| Boys | 18 | 20 | 18 | 56 |
| Girls | 17 | 25 | 22 | 64 |
| Total | 35 | 45 | 40 | 120 |

**Check:** girls' row 17 + 25 + 22 = 64, and bottom row 35 + 45 + 40 = 120. **20 boys** study Music.

**Using the table.** Questions then ask for a fraction or percentage. "What fraction of the Drama students are boys?" means 18 out of the Drama total 40, so 18/40 = 9/20. "What fraction of the boys study Drama?" means 18 out of the boys' total 56, so 18/56 = 9/28. The same cell gives two different answers, depending on which total the question refers to.

## Common mistakes

- Calling shoe size continuous, or calling age discrete because it is given in whole years.
- Writing continuous classes that overlap or leave gaps.
- Putting a boundary value, such as exactly 10, in the lower class.
- Totals that do not match the number of items.
- In a two-way table, using the grand total when the question asks for a fraction of a row or column.
- Filling a table without a final check of every row and column.

## Exam technique for the command words

- **Classify** or **state the type**: use the words categorical, discrete or continuous, and give a reason if asked.
- **Complete the table**: every cell should be filled, including totals, and your numbers must be consistent.
- **Organise the data**: show a tally or frequency column, with classes written so each value has one place.
- **What fraction** or **what percentage**: write the fraction with the correct total before simplifying.

## Next steps

Try the [classifying statistical data practice questions](/resources/cambridge-o-level-mathematics-4024-classifying-statistical-data-practice/) and recap with the [classifying statistical data revision notes](/resources/cambridge-o-level-mathematics-4024-classifying-statistical-data-revision-notes/). Tables like these lead into [averages and measures of spread](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread/) and [statistical charts and diagrams](/resources/cambridge-o-level-mathematics-4024-statistical-charts-and-diagrams/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 9.1 Classifying statistical data.
