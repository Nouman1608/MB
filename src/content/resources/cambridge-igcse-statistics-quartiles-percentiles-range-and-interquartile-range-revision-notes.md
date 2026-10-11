---
title: "Cambridge IGCSE Statistics: Quartiles, percentiles, range and interquartile range (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Quartiles and IQR Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Quartiles, percentiles, range and interquartile range from lists, tables and cumulative frequency curves"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 29
syllabusTopics:
  - qualification: "igcse"
    topic: "quartiles-percentiles-and-measures-of-dispersion-0479"
description: "Condensed revision notes on quartiles, percentiles, range and IQR from lists, tables and cumulative frequency graphs, for Cambridge IGCSE Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for Cambridge IGCSE Statistics (0479), syllabus for examination in 2027, Topic 5 outcomes 5.1 to 5.5. For full explanations and longer worked examples, read the [study guide](/resources/cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range/), then test yourself with the [practice questions](/resources/cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-practice/). Related pages: the [course hub](/boards/cambridge/igcse/statistics/), the [checklist](/checklists/cambridge/igcse/statistics/), [Frequency Distributions](/resources/igcse-cambridge-statistics-frequency-distributions/) for building cumulative frequency, and the [free diagnostics](/diagnostics/).

## Definitions

| Term | Meaning |
|---|---|
| Median (Q2) | Middle value of ordered data |
| Lower quartile (Q1) | Median of the lower half; the 25th percentile |
| Upper quartile (Q3) | Median of the upper half; the 75th percentile |
| k-th percentile | Value with k% of the data at or below it |
| Range | Largest − smallest (small sets and ungrouped tables only) |
| Interquartile range | Q3 − Q1: the spread of the middle half |

## Formulas and positions

| Task | Rule |
|---|---|
| Range | maximum − minimum |
| IQR | Q3 − Q1 |
| Graph positions | n/4 for Q1, n/2 for the median, 3n/4 for Q3, (k/100) × n for the k-th percentile |
| Interpolation | value = a + (p − F1)/(F2 − F1) × (b − a), where (a, F1) and (b, F2) are the plotted points either side of position p |
| Percentile of a value v | (cumulative frequency at v) / n × 100 |
| Frequency in a part | cumulative frequency at the top end − cumulative frequency at the bottom end |

The syllabus wording does not fix a locating rule, so these notes use the halves method for lists and tables. Stay consistent and show your working.

## Method: quartiles from a list

1. Order the data.
2. Find the median. Odd n: the middle value. Even n: the mean of the middle two.
3. Odd n: remove the median from both halves. Even n: split exactly in two.
4. Q1 is the median of the lower half. Q3 is the median of the upper half.
5. Range = max − min. IQR = Q3 − Q1.

**Reminder, odd n.** 23, 31, 18, 27, 35, 29, 21.

```
Ordered: 18, 21, 23, 27, 29, 31, 35
Median 27. Lower half 18, 21, 23 → Q1 = 21. Upper half 29, 31, 35 → Q3 = 31.
Range = 35 − 18 = 17. IQR = 31 − 21 = 10.
```

**Reminder, even n.** 52, 47, 61, 58, 49, 66, 55, 60.

```
Ordered: 47, 49, 52, 55, 58, 60, 61, 66
Median = (55 + 58)/2 = 56.5
Q1 = (49 + 52)/2 = 50.5. Q3 = (60 + 61)/2 = 60.5.
Range = 19. IQR = 60.5 − 50.5 = 10.
```

## Method: quartiles from an ungrouped table

1. Add a cumulative frequency row.
2. Work out n. Decide the positions of the median and of each half.
3. For each position, find the first cumulative frequency that is at least that position. That row's value is the answer.
4. If the two middle positions fall in different rows, take the mean of the two values.

**Reminder.** Shoe sizes of 30 pupils.

| Size | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|
| Frequency | 2 | 5 | 9 | 7 | 5 | 2 |
| Cumulative | 2 | 7 | 16 | 23 | 28 | 30 |

n = 30, so each half has 15 values and the middle of a half is a single value.

```
Median: mean of the 15th and 16th values = size 5 (both in the row ending 16).
Q1: median of the lower 15, which is the 8th value → size 5.
Q3: median of the upper 15, which is the 15 + 8 = 23rd value → size 6.
Range = 8 − 3 = 5. IQR = 6 − 5 = 1.
```

## Method: grouped data

1. Make a cumulative frequency table using upper class boundaries. Start from 0 at the lowest boundary.
2. Work out the position you need (n/4, n/2, 3n/4, or a percentile position).
3. Find the two plotted points either side. Interpolate, or read across from the vertical axis to the curve and down.
4. For IQR, subtract the two estimates.

**Reminder.** Ages of 150 members of a club:

| Age up to | 20 | 30 | 40 | 50 | 60 | 80 |
|---|---|---|---|---|---|---|
| Cumulative | 12 | 40 | 78 | 118 | 140 | 150 |

The first class begins at 10, so the cumulative frequency at age 10 is 0.

```
Q1: position 37.5, between 12 (age 20) and 40 (age 30)
    = 20 + (37.5 − 12)/(40 − 12) × 10 = 29.1
Median: position 75, between 40 and 78
    = 30 + (75 − 40)/(78 − 40) × 10 = 39.2
Q3: position 112.5, between 78 and 118
    = 40 + (112.5 − 78)/(118 − 78) × 10 = 48.6
IQR = 48.6 − 29.1 = 19.5
80th percentile: position 120, between 118 and 140
    = 50 + (120 − 118)/(140 − 118) × 10 = 50.9
Percentile of age 35: cumulative frequency = 40 + 0.5 × 38 = 59, so 59/150 = 39.3% → about the 39th percentile.
Members aged 35 to 45: at 45 the cumulative frequency is 78 + 0.5 × 40 = 98, so 98 − 59 = 39.
```

## Reading a cumulative frequency graph

1. Check the horizontal axis shows upper class boundaries and the vertical axis shows cumulative frequency up to n.
2. For a quartile or percentile, find the cumulative frequency on the vertical axis. Draw across to the curve, then down to the horizontal axis. Read the value.
3. For the percentile of a value, start on the horizontal axis. Draw up to the curve, then across. Divide the reading by n and multiply by 100.
4. For frequencies in a part, read the cumulative frequency at both ends and subtract.
5. Draw the construction lines on the graph so that your readings can be seen.

A smooth curve and a polygon give slightly different readings, so a graph answer is an estimate. Interpolation uses the straight line between two plotted points and gives one definite value.

## Quick checks before you write the answer

- Q1 should not be greater than the median, and the median not greater than Q3.
- Every quartile of a list lies between the smallest and largest value.
- The IQR is never larger than the range of an ungrouped set.
- A percentile value should fall inside the class where the target position lies.
- The cumulative frequency in the last row must equal n.

## Must-know distinctions

- Range uses two values. IQR uses the middle half. Range is not asked for grouped data in this outcome list.
- A quartile position is a cumulative frequency (a vertical reading), not a data value.
- Percentile of a value: from the horizontal axis up to the curve, then divide by n.
- Value at a percentile: from a cumulative frequency across to the curve, then down.
- Estimates from grouped data are not exact. Say "estimate" or "about".

## Quick self-test

1. Find the median and quartiles of 5, 8, 9, 12, 14, 17, 20.
2. Find the IQR of 3, 6, 6, 9, 11, 15.
3. The ordered values 14, 18, 22, 30, 31, 44, 49, 52, 60 have n = 9. Which value is left out of both halves, and what are Q1 and Q3?
4. A table has n = 60. At which positions do you look for Q1 and Q3 (graph method)?
5. A set has range 24 and smallest value 7. What is the largest value?
6. If Q1 = 36 and the IQR is 17, what is Q3?
7. A cumulative frequency graph for 200 values passes through (40, 50) and (60, 90), written as (value, cumulative frequency). Estimate the 30th percentile.
8. What is the position for the 70th percentile when n = 120?
9. At a value v, the cumulative frequency is 63 out of 90. What percentile is v?
10. Cumulative frequencies at 20 and 35 are 41 and 77. How many values lie between 20 and 35?

### Answers

1. n = 7. Median 12, Q1 = 8, Q3 = 17.
2. n = 6. Lower half 3, 6, 6 gives Q1 = 6. Upper half 9, 11, 15 gives Q3 = 11. IQR = **5**.
3. The 5th value, 31, is the median and is left out of both halves. Then Q1 = (18 + 22)/2 = 20 and Q3 = (49 + 52)/2 = 50.5.
4. Positions 15 and 45.
5. 7 + 24 = **31**.
6. 36 + 17 = **53**.
7. The 30th percentile is at position 0.3 × 200 = 60. Between (40, 50) and (60, 90) it is 40 + (60 − 50)/(90 − 50) × 20 = **45**.
8. 0.7 × 120 = **84**.
9. 63/90 × 100 = **70th percentile**.
10. 77 − 41 = **36**.

## Where marks are usually lost

- Not ordering the list first.
- Keeping the median in both halves when n is odd.
- Writing a quartile position (such as "the 15th value") as the answer instead of the value found there.
- Missing the mean of two values when the quartile falls between two positions.
- Plotting at midpoints instead of upper class boundaries.
- Reading quartiles from the horizontal axis at n/4 instead of the vertical axis.
- Giving the IQR as "36 to 53" instead of a single number.
- Forgetting to subtract from n for "more than" questions.
- Dropping the word "estimate" for grouped answers.
- Using a table's n/4 position for an ungrouped table when you meant the halves method. Choose one method and say which.
- Stopping at a position (such as "the 20th value") without reading the matching value from the table.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027 (version 1), Cambridge International Education, part of Cambridge University Press & Assessment. Topic 5, outcomes 5.1 to 5.5.
