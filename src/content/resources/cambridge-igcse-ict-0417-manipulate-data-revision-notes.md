---
title: "Cambridge IGCSE ICT (0417): Manipulate data -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.2
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "manipulate-data-0417"
description: "Quick recall of calculated fields and controls, summary functions, sorting, query operators and wildcards, with a self-test, for IGCSE ICT 0417 section 18.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes cover section 18.2 **Manipulate data** of Cambridge IGCSE ICT 0417: calculations, sorting, and searching with queries. The [manipulate data study guide](/resources/cambridge-igcse-ict-0417-manipulate-data/) works through every operation on a sample table; the [manipulate data practice questions](/resources/cambridge-igcse-ict-0417-manipulate-data-practice/) give you a new table to try them on.

## Syllabus coverage

| Syllabus statement | Notes and guidance (summarised) |
|---|---|
| Perform calculations | Arithmetic operations or numeric functions: calculated fields, calculated controls; run-time formulae and functions: addition, subtraction, multiplication, division, sum, average, maximum, minimum, count |
| Sort data | A single criterion or multiple criteria, ascending or descending |
| Search and select data | Single or multiple criteria in a query; operators AND, OR, NOT, LIKE, >, <, =, >=, <=, <>; wildcards |

## Key terms

| Term | Meaning |
|---|---|
| Query | A saved request that selects records meeting criteria, showing chosen fields |
| Criterion | A condition a record must meet, such as Price < 20 |
| Calculated field | A new field in a query worked out from other fields for each record |
| Calculated control | A box on a form or report showing the result of an expression, often a total |
| Run-time | Worked out when the query, form or report is run, using current data |
| Ascending | A to Z, smallest to largest, earliest to latest |
| Descending | Z to A, largest to smallest, latest to earliest |
| Wildcard | A symbol standing for unknown characters in a LIKE pattern |

## Calculations

- **Calculated field** (in a query, one value per record), for example `Total: [Quantity]*[UnitPrice]`.
- **Calculated control** (on a form or report), for example `=Sum([Total])` in a report footer.
- Arithmetic: `+`, `-`, `*`, `/`.
- Functions: **Sum**, **Avg** (average), **Max**, **Min**, **Count**.
- Results are recalculated each time, so they stay up to date; they are not stored in the table.
- Format results as instructed, for example currency with 2 decimal places.

### Quick example

Three orders with Quantity × UnitPrice: 4 × 2.50 = 10.00; 3 × 6.00 = 18.00; 10 × 1.20 = 12.00.

- Sum of Total = 40.00; Avg = 13.33 (to 2 decimal places); Max = 18.00; Min = 10.00; Count = 3.

## Sorting

- **Single criterion**: one field, ascending or descending.
- **Multiple criteria**: first field decides the order; the second breaks ties, and so on.
- The **order of the sort fields** changes the result.
- Text sorts letter by letter: *Football* comes before *Footwear* (b before w).

## Search operators

| Operator | Meaning | Words in a question |
|---|---|---|
| = | equal to | "is", "exactly" |
| <> | not equal to | "other than", "except" |
| > | greater than | "more than", "over", "after" (dates) |
| < | less than | "less than", "under", "before" (dates) |
| >= | greater than or equal to | "at least", "from ... onwards" |
| <= | less than or equal to | "up to", "no more than" |

- **AND**: all conditions true (narrows the results).
- **OR**: at least one true (widens the results).
- **NOT**: reverses a condition, for example `Not "Red"`.
- Range on one field: `>= 10 AND <= 20`.
- Query grid: same row = AND; different rows = OR.

## LIKE and wildcards

- In many packages: `*` = any number of characters; `?` = exactly one character. Some packages use `%` and `_`.
- `LIKE "B*"`: starts with B.
- `LIKE "*son"`: ends with son.
- `LIKE "*an*"`: contains *an* anywhere, including inside words.
- `LIKE "??"`: exactly two characters.
- Text criteria go in quotation marks.

## Exam traps

- "More than 10" is **> 10** and excludes 10; "at least 10" is **>= 10**.
- Using **OR** when both conditions must hold, or **AND** between two values of the same field (Colour = "Red" AND Colour = "Blue" finds nothing).
- `LIKE "*ball*"` also finds *Football*.
- A calculated field belongs in the **query**, not the table design.
- Sort fields in the wrong order in a multi-level sort.
- Combining AND with OR without thinking about brackets: put the AND condition on every OR row.
- Typing a text value with a different spelling from the data.

## Self-test

1. What is the difference between a calculated field and a calculated control?
2. Write a calculated field called Discounted that is 90% of Price.
3. Which function gives the number of records?
4. Write criteria for a Price that is at least 15.
5. Write criteria for a Town other than Leeds.
6. A query needs Colour Red and Size Large. Which operator joins them?
7. A query needs Colour Red or Blue. Which operator joins them?
8. What does `LIKE "S*"` find in a Surname field?
9. What does `LIKE "?at"` find? Give two examples.
10. A sort uses Year descending, then Surname ascending. Which field is applied first?
11. Why does `Colour = "Red" AND Colour = "Blue"` return no records?
12. Three prices are 4.00, 7.50 and 9.10. Give their sum, average, maximum and minimum.

### Answers

1. A calculated field is created in a query and gives a value for each record; a calculated control is on a form or report and shows the result of an expression, often a total or average.
2. `Discounted: [Price]*0.9`.
3. Count.
4. `>= 15`.
5. `<> "Leeds"` (or `Not "Leeds"`).
6. AND.
7. OR.
8. Every surname that starts with S.
9. Any three-letter value ending in *at*, for example *cat*, *hat*, *mat*.
10. Year (the first sort field).
11. One field cannot hold two different values in the same record, so no record meets both conditions.
12. Sum 20.60; average 6.87 (to 2 decimal places); maximum 9.10; minimum 4.00.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.2 Manipulate data.
