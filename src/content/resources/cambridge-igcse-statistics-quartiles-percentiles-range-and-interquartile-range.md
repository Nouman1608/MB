---
title: "Cambridge IGCSE Statistics: Quartiles, percentiles, range and interquartile range (0479)"
seoTitle: "IGCSE Statistics 0479 Quartiles, Percentiles and IQR"
resourceType: "study-guides"
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
description: "Study guide to quartiles, percentiles, range and IQR from lists, tables and cumulative frequency graphs, for Cambridge IGCSE Statistics 0479."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is written for Cambridge IGCSE Statistics (0479), aligned to the syllabus for examination in 2027. It covers Topic 5 outcomes 5.1 to 5.5: quartiles, percentiles, the range and the interquartile range, from lists, ungrouped tables and cumulative frequency graphs. Standard deviation (5.6) and choosing a measure of spread (5.7) are in a [separate guide](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion/).

Pair it with the [revision notes](/resources/cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-revision-notes/) and the [practice questions](/resources/cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-practice/). Building a cumulative frequency table is covered in [Frequency Distributions](/resources/igcse-cambridge-statistics-frequency-distributions/). The [course hub](/boards/cambridge/igcse/statistics/), the [checklist](/checklists/cambridge/igcse/statistics/) and the [free diagnostics](/diagnostics/) show where you stand.

## What you need to do

| Outcome | You must be able to |
|---|---|
| 5.1 | Find the quartiles of a small data set and of an ungrouped frequency distribution |
| 5.2 | Estimate quartiles and percentiles of a grouped distribution (cumulative frequency polygon or curve, or linear interpolation); find the percentile for a given value; estimate frequencies in given parts of the distribution |
| 5.3 | Calculate the range of a small data set and an ungrouped frequency distribution |
| 5.4 | Calculate the interquartile range of a small data set and an ungrouped frequency distribution |
| 5.5 | Estimate the interquartile range of a grouped distribution (graph or linear interpolation) |

Note what is not listed: the range of a grouped distribution is not an outcome here.

## The idea

Put the data in order. The **median** (Q2) splits it into two halves. The **lower quartile** (Q1) is the median of the lower half. The **upper quartile** (Q3) is the median of the upper half. A **percentile** generalises this: the 90th percentile is the value that 90% of the data falls at or below. So Q1 is the 25th percentile, the median is the 50th and Q3 is the 75th.

Two measures of spread follow:

```
range = largest value − smallest value
IQR   = Q3 − Q1
```

The range uses only the two extreme values. The IQR is the width of the middle half of the data, so a single odd value at either end cannot change it much.

A note on convention: the syllabus wording does not fix a rule for locating quartiles. This guide uses the halves method for lists and tables, and n/4, n/2 and 3n/4 for graphs. Use one method consistently and show your working.

## 5.1 Quartiles of a small data set

1. Write the values in order, smallest first.
2. Find the median. If n is odd it is the middle value. If n is even it is the mean of the two middle values.
3. Split into a lower half and an upper half. If n is odd, leave the median out of both halves.
4. Q1 is the median of the lower half. Q3 is the median of the upper half.

**Worked example 1 (n odd).** Eleven people record how many messages they sent yesterday: 14, 9, 21, 17, 12, 25, 9, 18, 30, 15, 20. Find Q1 and Q3.

```
Ordered: 9, 9, 12, 14, 15, 17, 18, 20, 21, 25, 30
Median is the 6th value = 17
Lower half (5 values): 9, 9, 12, 14, 15  →  Q1 = 12
Upper half (5 values): 18, 20, 21, 25, 30 →  Q3 = 21
```

The median 17 is left out of both halves because n = 11 is odd.

**Worked example 2 (n even).** Twelve waiting times in minutes: 6, 11, 4, 15, 9, 13, 8, 20, 7, 12, 10, 17.

```
Ordered: 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 20
Median = (10 + 11)/2 = 10.5
Lower half (6 values): 4, 6, 7, 8, 9, 10  →  Q1 = (7 + 8)/2 = 7.5
Upper half (6 values): 11, 12, 13, 15, 17, 20 → Q3 = (13 + 15)/2 = 14
```

Here the halves split cleanly and nothing is left out. A quartile can be a value that is not in the data, as Q1 = 7.5 is here.

## 5.3 and 5.4 Range and interquartile range of a small set

For worked example 1: range = 30 − 9 = **21** and IQR = 21 − 12 = **9**.

For worked example 2: range = 20 − 4 = **16** and IQR = 14 − 7.5 = **6.5**.

Always subtract the quartiles. Do not give "from 12 to 21" as the IQR: the IQR is a single number, 9.

## 5.1, 5.3 and 5.4 Ungrouped frequency distributions

With a frequency table, you do not list every value. Build a cumulative frequency column and find which row holds each position.

**Worked example 3.** Members of a library borrow books in one month. The table shows the number of books borrowed, x, by each of 40 members.

| x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency | 5 | 8 | 11 | 6 | 8 | 2 |
| Cumulative | 5 | 13 | 24 | 30 | 38 | 40 |

n = 40, so each half has 20 values. The median is the mean of the 20th and 21st values. Q1 is the median of the lower half, so it is the mean of the 10th and 11th values. Q3 is the mean of the 30th and 31st values.

- The 20th and 21st values both lie in the row ending at 24 (positions 14 to 24), so the median is 2.
- The 10th and 11th values both lie in the row ending at 13 (positions 6 to 13), so Q1 = 1.
- The 30th value is in the row ending at 30, which is x = 3. The 31st value is in the next row, x = 4. So Q3 = (3 + 4)/2 = 3.5.

Range = 5 − 0 = **5**. IQR = 3.5 − 1 = **2.5**.

When n is odd, find the median position first, discard it, and work with the two halves of (n − 1)/2 values each. When n is even and n/2 is odd, the median of a half is a single value, not a mean.

## 5.2 Grouped data and cumulative frequency

For grouped continuous data you cannot name exact values, so you **estimate**. Plot cumulative frequency against the **upper class boundary**. Join the points with straight lines for a polygon, or a smooth curve. Then read across from a cumulative frequency to the horizontal axis.

| Measure | Cumulative frequency to read at |
|---|---|
| Lower quartile Q1 | n/4 |
| Median | n/2 |
| Upper quartile Q3 | 3n/4 |
| k-th percentile | (k/100) × n |

The same estimate comes from **linear interpolation**, which assumes the values in a class are spread evenly. If the target position p lies between two plotted points (a, F1) and (b, F2):

```
value = a + (p − F1)/(F2 − F1) × (b − a)
```

**Worked example 4.** The times t minutes taken by 80 people to finish a puzzle:

| Time t | 0 < t ≤ 10 | 10 < t ≤ 20 | 20 < t ≤ 30 | 30 < t ≤ 40 | 40 < t ≤ 50 | 50 < t ≤ 70 |
|---|---|---|---|---|---|---|
| Frequency | 6 | 14 | 24 | 20 | 10 | 6 |
| Cumulative (up to) | 6 | 20 | 44 | 64 | 74 | 80 |

Estimate Q1, the median, Q3 and the IQR.

```
n = 80, so the positions are 20, 40 and 60.
Q1: position 20 is exactly the cumulative frequency at t = 20, so Q1 = 20.
Median: position 40 lies between 20 (at t = 20) and 44 (at t = 30).
  median = 20 + (40 − 20)/(44 − 20) × 10 = 20 + 8.33 = 28.3
Q3: position 60 lies between 44 (at t = 30) and 64 (at t = 40).
  Q3 = 30 + (60 − 44)/(64 − 44) × 10 = 30 + 8 = 38
IQR = 38 − 20 = 18
```

The median is about 28.3 minutes and the IQR is about 18 minutes. Each of these is an estimate, because the table does not tell you where the values sit inside a class. On a drawn graph you would read the same three positions off the vertical axis and across to the curve. Show your construction lines. A reading from a drawn graph can differ a little from the interpolated value, which is expected.

Percentiles work the same way. For the 90th percentile of this data, the position is 0.9 × 80 = 72. It lies between 64 (at t = 40) and 74 (at t = 50): 40 + (72 − 64)/(74 − 64) × 10 = **48**. About 90% of people finished within 48 minutes.

## 5.2 Percentile for a given value, and frequencies in parts of the distribution

Now reverse the direction: start from a value on the horizontal axis and find the cumulative frequency.

**Worked example 5.** Use the puzzle data in worked example 4.

**(a)** Find the percentile for t = 35.

```
t = 35 lies in 30 < t ≤ 40, between 44 and 64.
Cumulative frequency = 44 + (35 − 30)/(40 − 30) × (64 − 44) = 44 + 10 = 54
Percentile = 54/80 × 100 = 67.5
```

A time of 35 minutes is at about the 67.5th percentile.

**(b)** Estimate how many people took more than 25 minutes and up to 45 minutes.

```
Cumulative frequency at 45 = 64 + (45 − 40)/(50 − 40) × 10 = 69
Cumulative frequency at 25 = 20 + (25 − 20)/(30 − 20) × 24 = 32
People between 25 and 45 minutes ≈ 69 − 32 = 37
```

**(c)** Estimate how many took longer than 60 minutes.

```
Cumulative frequency at 60 = 74 + (60 − 50)/(70 − 50) × 6 = 77
People above 60 ≈ 80 − 77 = 3
```

The method for any part of the distribution is the same: find the cumulative frequency at each end of the part, then subtract. For "more than" or "above", subtract from n.

## 5.5 IQR of a grouped distribution

The IQR of a grouped distribution is Q3 − Q1 using the two estimated quartiles. In worked example 4 it is 38 − 20 = 18. If you read Q1 and Q3 from a graph, subtract the readings, and say that it is an estimate.

## Common errors

- Leaving the data unordered before picking out the median and quartiles.
- With odd n, keeping the median inside both halves. That moves Q1 and Q3.
- Writing the IQR as an interval rather than a single subtracted value.
- Plotting cumulative frequency at class midpoints or lower boundaries instead of upper boundaries.
- Reading the quartiles at n/4 and 3n/4 on the horizontal axis instead of the vertical axis. The positions are cumulative frequencies.
- Calculating a percentile as the frequency itself rather than the cumulative frequency divided by n.
- Giving a "number of people between two values" without subtracting the two cumulative frequencies.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027 (version 1), Cambridge International Education, part of Cambridge University Press & Assessment. This guide covers Topic 5, outcomes 5.1 to 5.5.
