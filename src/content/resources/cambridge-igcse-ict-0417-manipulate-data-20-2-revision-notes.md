---
title: "Cambridge IGCSE ICT (0417): Manipulate data (Spreadsheets) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0417 subtopic 20.2: sorting on one or more criteria, filtering with comparison operators, AND, OR and NOT, and the * and ? wildcards."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 20.2 Manipulate data: sorting spreadsheet data on one or more criteria, and searching and selecting subsets with comparison operators, AND, OR, NOT and wildcards. The [20.2 Manipulate data study guide](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2/) works through every operator on one data set. Test yourself with the [20.2 practice questions](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2-practice/). The [Spreadsheets revision notes](/resources/cambridge-igcse-ict-spreadsheets-revision-notes/) cover the rest of Topic 20.

## Syllabus checklist

- **Sort data**: single criterion or multiple criteria; ascending or descending.
- **Search and select data**: single or multiple criteria to select subsets.
- Operators: **AND, OR, NOT, >, <, =, >=, <=, <>**.
- **Wildcards**.

## Key terms

| Term | Meaning |
|---|---|
| Sort | Rearrange whole rows into order using the values in one or more columns |
| Ascending | A to Z, smallest to largest, earliest to latest |
| Descending | Z to A, largest to smallest, latest to earliest |
| Criterion (plural criteria) | A condition used to sort or select, such as Age >= 16 |
| Primary / secondary sort | The first column sorted on, and the column used to order rows that are equal on the first |
| Subset | The rows that meet the search criteria |
| Filter | A tool that shows only rows meeting criteria and hides the others |
| Advanced filter | A filter that reads criteria from a criteria range, allowing OR across different columns |
| Wildcard | A symbol that stands for unknown characters in a text search |

## Sorting rules

- Select the **whole data range** (or one cell in it) so rows stay together.
- Tick **headers** so row 1 stays at the top.
- Multiple criteria: the **first** criterion decides the main order; the **second** only orders rows that tie on the first.
- Text sorts character by character, so "100m" comes before "200m", and "Ann" before "Anna".

Example (invented): sort by Class ascending, then Score descending.

| Class | Name | Score |
|---|---|---|
| 10A | Lena | 81 |
| 10A | Omar | 74 |
| 10B | Ruth | 90 |
| 10B | Kofi | 66 |

## Operators

| Operator | Meaning | Task wording that needs it |
|---|---|---|
| = | equal to | "is", "exactly" |
| <> | not equal to | "is not", "other than" |
| > | greater than | "more than", "over", "above" |
| < | less than | "less than", "under", "below" |
| >= | greater than or equal to | "at least", "or more" |
| <= | less than or equal to | "at most", "or less", "up to" |

## AND, OR, NOT

| Logic | Row selected when | Effect on size of subset |
|---|---|---|
| A AND B | Both are true | Smaller (more restrictive) |
| A OR B | Either or both are true | Larger |
| NOT A | A is false | Everything except matches for A |

- Filters on **different columns** combine with **AND**.
- **One column**, two conditions: a custom filter with AND (a range, such as >= 20 AND <= 30) or OR (two values).
- **OR across different columns**: advanced filter; criteria on the **same row = AND**, on **different rows = OR**.

## Wildcards

| Wildcard | Stands for | Example | Matches |
|---|---|---|---|
| * | any number of characters, including none | Br* | Brown, Bryant, Br |
| * | | *ing | Reading, King |
| * | | `*an*` | Sanchez, Danish, Ann |
| ? | exactly one character | B???? | Brown, Black (five letters starting B) |
| ? | | ?at | Cat, hat, mat |

Combine with NOT: <> S* excludes everything beginning with S.

## Filter facts

- Filtering **hides** rows; it does not delete them.
- Hidden rows reappear when the filter is cleared.
- Row numbers change colour and skip when a filter is on.
- Sort the filtered rows if the task asks for an order as well as a subset.

## Exam traps

- Sorting one column only: data in each row is scrambled.
- The heading row sorted into the data.
- > used for "or more"; < used for "up to".
- OR used where every condition must hold.
- A plain text criterion such as S, when the task means "begins with S" (S*).
- ? used for any number of characters (it is exactly one).
- Assuming two column filters give OR: they give AND.

## Self-test

Use this invented data for questions 6 to 10.

| Name | Town | Age | Paid |
|---|---|---|---|
| Ahmed | Leeds | 34 | Yes |
| Bella | York | 19 | No |
| Carlos | Leeds | 52 | Yes |
| Dina | Bath | 27 | Yes |
| Eric | Leyton | 41 | No |

1. What does ascending order mean for numbers?
2. Why must the whole range be selected before sorting?
3. A list is sorted by Surname, then First name. When is the first name used?
4. Which operator means "at least"?
5. State the difference between * and ? as wildcards.
6. Which names are selected by Age > 30 AND Paid = Yes?
7. Which names are selected by Town = Leeds OR Age < 20?
8. Which names are selected by Town = Le*?
9. Which names are selected by NOT Paid = Yes?
10. Sort the data by Age descending. Which name is first and which is last?
11. Two filters are set: Town = Leeds and Paid = No. How are they combined?
12. Is a filtered-out row deleted?

### Answers

1. From the smallest to the largest value.
2. So that every column moves with the sorted column and each row stays together.
3. Only to order people who have the same surname.
4. >=.
5. * stands for any number of characters (including none); ? stands for exactly one character.
6. Ahmed and Carlos.
7. Ahmed, Bella and Carlos.
8. Ahmed, Carlos and Eric.
9. Bella and Eric.
10. Carlos (52) first, Bella (19) last.
11. With AND: only rows meeting both are shown (none in this data).
12. No. It is hidden and reappears when the filter is cleared.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.2 Manipulate data.
