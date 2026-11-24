---
title: "Cambridge O Level Statistics (4040): Classification and representation in tabular form"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 2 – Summary representation of data"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 2.1
syllabusTopics:
  - qualification: "o-level"
    topic: "summary-representation-of-data-4040"
    subtopic: "classification-tabular-form-4040"
description: "How to classify data into sound categories, design clear tables, build and complete two-way tables, and choose the right base for percentages in 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Classification and representation in tabular form", which the syllabus says includes two-way tables. A table is usually the first summary of raw data, and every later chart or calculation depends on it being right. Questions test three things: whether your categories are sound, whether you can build or complete a table, and whether you take percentages of the correct total.

Frequency tables built by tallying, and a first two-way table, are in the guide to [tables and bar-type, pie and pictorial charts](/resources/cambridge-o-level-statistics-tables-and-bar-type-pie-and-pictorial-charts/). This page goes further on classification rules, table design, two-way tables from raw records and from written information, and percentage bases. Afterwards, use the [classification and tables revision notes](/resources/cambridge-o-level-statistics-4040-classification-tabular-form-revision-notes/) and the [classification and tables practice questions](/resources/cambridge-o-level-statistics-4040-classification-tabular-form-practice/). The course map is on the [4040 hub](/boards/cambridge/o-level/statistics/).

## What this unit covers

| Part of 2.1 | What you must be able to do |
|---|---|
| Classification | Choose categories or classes that are clear, do not overlap and cover every observation |
| Tabular form | Design a table with a title, headings, units and totals |
| Two-way tables | Construct one from raw records; complete one from partial figures or written information |
| Using tables | Take proportions and percentages of the correct row, column or grand total |

## Rules of classification

To **classify** data is to sort each observation into exactly one category. Sound categories are:

1. **Mutually exclusive**: no observation fits two categories. Classes 10–20 and 20–30 break this rule, because 20 fits both.
2. **Exhaustive**: every observation fits somewhere. A table of ages 0–19, 20–39, 40–59 fails if someone is 63. An open class ("60 and over") or an "Other" category fixes this.
3. **Clearly defined**: anyone sorting the data would put each observation in the same place. "Large family" is vague; "5 or more people" is clear.
4. **Relevant to the purpose**: categories should separate the groups the investigation needs to compare.

For quantitative data, classes are written so that the rule for the edges is clear: 0–9, 10–19, ... for whole numbers, or 0 ≤ t < 10, 10 ≤ t < 20, ... for continuous measurements. Choosing class limits and boundaries in detail belongs to topic 3.

## Designing a table

A good statistical table can be read without the text around it. It has:

- a **title** saying what the data are, where and when they were collected;
- **row and column headings**, with **units** where needed (minutes, kg, $);
- **totals** for rows and columns, so readers can check and compare;
- a note of the **source** if the data are secondary;
- the categories in a sensible **order** (size order, time order, or a natural order such as age groups).

### Worked example 1: correcting a poor table

A pupil records the time spent on a phone each day by 50 friends.

| Time | 0–1 | 1–2 | 2–3 | 3–4 |
|---|---|---|---|---|
| People | 6 | 17 | 15 | 9 |

Faults: there is no title and no unit (hours?). The classes overlap at 1, 2 and 3. The frequencies add to 47, not 50, so three friends (perhaps those over 4 hours) have no class. There is no total.

Improved table:

**Daily phone use of 50 friends (hours), recorded in one week**

| Time, t hours | 0 ≤ t < 1 | 1 ≤ t < 2 | 2 ≤ t < 3 | 3 ≤ t < 4 | t ≥ 4 | Total |
|---|---|---|---|---|---|---|
| Frequency | 6 | 17 | 15 | 9 | 3 | 50 |

## Two-way tables

A **two-way table** classifies each observation by two variables at once, one along the rows and one along the columns. Each cell holds the number of observations with that combination. Three sets of totals must agree:

```
sum of each row's cells    = that row total
sum of each column's cells = that column total
sum of row totals = sum of column totals = grand total
```

These checks are also the tools for finding missing entries.

### Worked example 2: building a two-way table from raw records

Twenty pupils give their year group (10 or 11) and where they eat lunch (C = canteen, P = packed lunch, H = home):

```
10C 11P 10P 10C 11H 11C 10P 10H 11C 11P
10C 10C 11P 10P 11C 11H 10C 11P 10P 11C
```

Work through the list once, placing a tally mark in the correct cell for each record.

| | Canteen | Packed | Home | Total |
|---|---|---|---|---|
| Year 10 | 5 | 4 | 1 | 10 |
| Year 11 | 4 | 4 | 2 | 10 |
| Total | 9 | 8 | 3 | 20 |

Checks: the rows give 10 + 10 = 20 and the columns give 9 + 8 + 3 = 20. A single pass with tallies is safer than counting each combination separately, because each record is used exactly once.

### Worked example 3: completing a table from written information

A survey of 200 adults records age group and preferred source of news. You are told:

- 120 of the adults are under 40.
- 72 of the under-40s prefer online news.
- Among the under-40s, the number preferring television is twice the number preferring newspapers.
- 45 adults aged 40 and over prefer television.
- 92 adults altogether prefer online news.

```
Under 40: TV + newspaper = 120 − 72 = 48
          TV = 2 × newspaper, so 3 × newspaper = 48
          newspaper = 16, TV = 32
40 and over: total = 200 − 120 = 80
          online = 92 − 72 = 20
          newspaper = 80 − 45 − 20 = 15
```

| | Television | Online | Newspaper | Total |
|---|---|---|---|---|
| Under 40 | 32 | 72 | 16 | 120 |
| 40 and over | 45 | 20 | 15 | 80 |
| Total | 77 | 92 | 31 | 200 |

Final check: 77 + 92 + 31 = 200.

Draw the empty table first and fill in each given fact before calculating. Most errors come from putting a figure in the wrong cell.

## Choosing the base for a percentage

The same cell gives different percentages depending on the total you divide by. Using the table in worked example 3:

| Question | Base | Working | Answer |
|---|---|---|---|
| What percentage of the under-40s prefer TV? | Row total, 120 | 32/120 × 100 | 26.7% |
| What percentage of those preferring TV are under 40? | Column total, 77 | 32/77 × 100 | 41.6% |
| What percentage of all adults are under-40 TV viewers? | Grand total, 200 | 32/200 × 100 | 16% |

Read the words after "of" in the question: they name the group that forms the base.

### Comparing groups of different sizes

To compare the two age groups, convert each row to percentages of its own row total.

| | Television | Online | Newspaper | Total |
|---|---|---|---|---|
| Under 40 | 26.7% | 60.0% | 13.3% | 100% |
| 40 and over | 56.3% | 25.0% | 18.8% | 100% |

(Rounded to 1 decimal place; the second row's rounded figures add to 100.1%.) Now the comparison is fair: online news is preferred by 60% of the under-40s but only 25% of the older group, even though the older group has fewer people overall.

## Common errors

- Overlapping or incomplete classes, especially at the top end.
- Missing units in the headings.
- Totals that do not agree, left unchecked.
- Using the grand total when the question asks for a percentage "of the boys" or "of those who walk".
- Comparing raw counts for groups of different sizes.
- Rounding percentages in a row and then being surprised the total is not exactly 100%; say the difference is due to rounding.

## Exam technique

- **Complete the table**: show each calculation beside the table, so a slip in one cell does not cost every later mark.
- **Calculate the percentage**: write the fraction first (32/120) so the base is visible.
- **Compare**: quote figures from both groups and use a percentage or proportion when group sizes differ.
- **Criticise a table**: name the specific fault (overlap at 20; no class above 60; no unit).

## More on this topic

Condense the method with the [revision notes on classification and tables](/resources/cambridge-o-level-statistics-4040-classification-tabular-form-revision-notes/), then work through the [practice questions on classification and tables](/resources/cambridge-o-level-statistics-4040-classification-tabular-form-practice/). Turning tables into diagrams is the subject of [representation in pictorial or diagrammatic form](/resources/cambridge-o-level-statistics-4040-representation-pictorial-diagrammatic/).

## Frequently asked questions

**What makes a set of classes acceptable?**
They must not overlap, they must cover every possible observation, and they must be defined clearly enough that anyone would sort an observation the same way.

**How do I find a missing value in a two-way table?**
Use a row or column where only one value is unknown, subtract the known values from that total, and then check the result against the other direction.

**Which total should a percentage use?**
The total of the group named in the question: a row total, a column total or the grand total.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 2, section 2.1: Classification and representation in tabular form, including two-way tables.
