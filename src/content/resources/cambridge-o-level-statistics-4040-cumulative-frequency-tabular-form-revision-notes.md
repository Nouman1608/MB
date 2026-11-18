---
title: "Cambridge O Level Statistics (4040): Cumulative frequency distributions: representation in tabular form -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 4 – Formation of frequency distributions into cumulative frequency distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 4.1
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-cumulative-frequency-distributions-4040"
    subtopic: "cumulative-frequency-tabular-form-4040"
description: "Revision notes on cumulative frequency tables for discrete and grouped data, wording traps, cumulative percentages and unknowns, with a self-test for 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 4.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: cumulative frequency distributions in tabular form. The full explanation is in the [cumulative frequency table study guide](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form/), with exam-style drill in the [cumulative frequency table practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-practice/). Graphs and plotting are in the [cumulative frequency revision notes](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Cumulative frequency | Number of observations up to and including a value or boundary |
| Running total | Each frequency added to the sum of those before it |
| Upper class boundary | The value that labels a class's cumulative frequency for continuous data |
| Cumulative percentage | Cumulative frequency ÷ n × 100 |
| "Less than" table | Cumulative frequencies rising from 0 to n |
| "More than" table | Counts of observations at or above each lower boundary, falling from n to 0 |
| Linear interpolation | Estimating between two table entries by assuming values are spread evenly |

## Method

1. Order the classes from lowest to highest.
2. Add a starting entry: cumulative frequency 0 at the first lower boundary.
3. Keep a running total of the frequencies.
4. Label each total: "≤ x" for discrete values, "< upper boundary" (or "≤") for continuous classes.
5. Check the last total equals n.
6. If needed, add a cumulative percentage row: total ÷ n × 100.

## Translating the wording (whole-number data)

| Phrase | Read as | From the table |
|---|---|---|
| At most k | ≤ k | CF at k |
| Fewer than k | ≤ k − 1 | CF at k − 1 |
| At least k | not ≤ k − 1 | n − CF at k − 1 |
| More than k | not ≤ k | n − CF at k |
| From a to b inclusive | ≤ b minus ≤ a − 1 | CF at b − CF at a − 1 |

For continuous data, "less than" and "at most" a boundary give the same count, because no value equals the boundary exactly.

## Labels for different kinds of class

| Classes | Labels for cumulative frequency |
|---|---|
| 0 ≤ t < 10, 10 ≤ t < 20, ... | t < 10, t < 20, ... |
| 0 < t ≤ 10, 10 < t ≤ 20, ... | t ≤ 10, t ≤ 20, ... |
| Marks 0–9, 10–19, ... (whole numbers) | ≤ 9, ≤ 19, ... (or < 9.5, < 19.5) |
| Lengths 30–39 cm, to the nearest cm | < 39.5, < 49.5, ... |
| Ages 20–29, 30–39, in completed years | under 30, under 40, ... |

## Worked reminder

Times, t minutes, for 50 tasks: 0 ≤ t < 5: 7; 5 ≤ t < 10: 16; 10 ≤ t < 20: 18; 20 ≤ t < 30: 9.

```
t < 0: 0   t < 5: 7   t < 10: 23   t < 20: 41   t < 30: 50
Cumulative percentages: 0, 14, 46, 82, 100
Tasks taking 10 minutes or more: 50 − 23 = 27
Estimate for t < 15: 23 + (5/10) × 18 = 32
```

## Working backwards

- Frequency = CF at the upper boundary − CF at the previous boundary.
- First class frequency = first cumulative frequency.
- With unknowns, write one equation per known cumulative frequency and one for the total.

**Example.** Frequencies 3, p, 10, q; CF after the second class is 9; total 30. Then p = 6 and q = 30 − 3 − 6 − 10 = 11.

## "More than" tables

A "more than" table falls from n to 0. Convert it: "less than" entry = n − "at least" entry at the same boundary. Example: n = 60, at least 20: 37, so less than 20: 23.

## Exam traps

- "Fewer than 3" read at 3 instead of 2 for discrete data.
- Labelling by midpoint or lower boundary.
- Missing the zero starting entry.
- Treating a falling "more than" table as a rising one.
- Giving an exact count for a non-boundary value; it is an estimate.
- Percentages divided by the number of classes rather than n.
- Not checking the final total.

## Quick self-test

1. Frequencies 4, 9, 7, 5. Write the cumulative frequencies.
2. Cumulative frequencies 6, 15, 27, 33. Find the frequencies.
3. Discrete data: CF at 2 is 18, CF at 3 is 25, n = 30. How many values are fewer than 3?
4. Using question 3, how many are at least 3?
5. Classes 0 < m ≤ 20, 20 < m ≤ 40. How do you label the second cumulative frequency?
6. Ages 30–39 in completed years. What is the upper boundary?
7. CF at 40 is 52 out of 80. What is the cumulative percentage?
8. A "more than" table shows 45 values at least 30, n = 70. How many are less than 30?
9. CF at 10 is 12 and at 20 is 30. Estimate the CF at 16.
10. Frequencies 2, k, 9 with CF after the second class 11. Find k.
11. Why is the first entry of a "less than" table 0?
12. CF at 25 is 40 and at 35 is 58. How many lie from 25 up to 35?

### Answers

1. 4, 13, 20, 25.
2. 6, 9, 12, 6.
3. 18.
4. 30 − 18 = 12.
5. m ≤ 40.
6. 40.
7. 52/80 × 100 = 65%.
8. 70 − 45 = 25.
9. 12 + (6/10) × 18 = 22.8, about 23.
10. k = 9.
11. No observation lies below the first lower boundary.
12. 58 − 40 = 18.

## Frequently asked questions

**Do I always need a cumulative percentage row?**
Only when the question asks for percentages or for a comparison of groups of different sizes.

**Can a cumulative frequency ever decrease?**
Not in a "less than" table, since each frequency is zero or more. If yours falls, there is an arithmetic slip, or the table is a "more than" table.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 4, section 4.1: Representation in tabular form.
