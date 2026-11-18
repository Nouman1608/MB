---
title: "Cambridge O Level Statistics (4040): Quartiles and percentiles"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 5 – Statistical measures, their interpretation and appropriate use"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 5.3
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "quartiles-and-percentiles-4040"
description: "Quartiles and percentiles for 4040 from lists, frequency tables, cumulative frequency tables and graphs, with cut-off marks, percentile ranks and comparisons."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5.3 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Quartiles and percentiles", which the syllabus says includes estimation of the median, quartiles and percentiles from a cumulative frequency curve or polygon, and by linear interpolation from a cumulative frequency table. It sits in topic 5, "Statistical measures, their interpretation and appropriate use", so you must also be able to use these measures to answer practical questions.

The core interpolation formula, value-to-percentile working and rounded-data boundaries are in the guide to [quartiles, percentiles and combining data sets](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets/). This page extends that work: quartiles from lists and ungrouped frequency tables, a full set of percentiles from one table, cut-off marks for "the top 15%", percentile ranks, and comparing groups. Afterwards, use the [quartiles and percentiles revision notes](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles-revision-notes/) and the [quartiles and percentiles practice questions](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles-practice/).

## What this unit covers

| Part of 5.3 | What you must be able to do |
|---|---|
| Meaning | Explain what a quartile or percentile tells you about the data |
| From a graph | Read the median, quartiles and percentiles from a cumulative frequency curve or polygon |
| From a table | Estimate them by linear interpolation in a cumulative frequency table |
| Use | Find cut-offs and percentile ranks; compare groups using median and interquartile range |

## The ideas in one table

| Measure | Fraction of data at or below it | Grouped-data target |
|---|---|---|
| Lower quartile, Q1 | One quarter | n/4 |
| Median, Q2 | One half | n/2 |
| Upper quartile, Q3 | Three quarters | 3n/4 |
| P-th percentile | P per cent | (P/100) × n |

The **interquartile range** (Q3 − Q1) measures the spread of the middle half. A **percentile rank** goes the other way: it states what percentage of the data lies at or below a given value.

## Quartiles from a list or an ungrouped table

For a small set of exact values, use the halves method (the convention used across these 4040 pages): find the median, then the median of each half, leaving the overall median out of both halves when n is odd.

**Worked example 1.** The number of books read in a month by 27 pupils:

| Books, x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency | 3 | 6 | 8 | 5 | 3 | 2 |
| Cumulative frequency | 3 | 9 | 17 | 22 | 25 | 27 |

```
n = 27, median = 14th value
Lower half: values 1 to 13, so Q1 = 7th value
Upper half: values 15 to 27, so Q3 = 7th of these = 21st value

7th value:  cumulative frequency reaches 9 at x = 1  → Q1 = 1
14th value: cumulative frequency reaches 17 at x = 2 → median = 2
21st value: cumulative frequency reaches 22 at x = 3 → Q3 = 3
IQR = 3 − 1 = 2 books
```

The cumulative frequency column tells you which value sits at each position: the 10th to 17th pupils all read 2 books, and so on.

## A full set of percentiles from one table

**Worked example 2.** Scores, s, of 250 candidates in an aptitude test.

| Score, s | 0 ≤ s < 20 | 20 ≤ s < 40 | 40 ≤ s < 60 | 60 ≤ s < 80 | 80 ≤ s < 100 |
|---|---|---|---|---|---|
| Frequency | 18 | 52 | 95 | 63 | 22 |
| Cumulative frequency (s < upper boundary) | 18 | 70 | 165 | 228 | 250 |

Each estimate uses: lower boundary + (target − cumulative frequency before the class) ÷ class frequency × class width.

```
10th percentile: target 25,    class 20–40: 20 + (25 − 18)/52 × 20    = 22.7
Q1:              target 62.5,  class 20–40: 20 + (62.5 − 18)/52 × 20  = 37.1
Median:          target 125,   class 40–60: 40 + (125 − 70)/95 × 20   = 51.6
Q3:              target 187.5, class 60–80: 60 + (187.5 − 165)/63 × 20 = 67.1
90th percentile: target 225,   class 60–80: 60 + (225 − 165)/63 × 20   = 79.0
IQR = 67.1 − 37.1 = 30.0
```

The middle half of the candidates scored between about 37 and 67, and the middle 80% between about 23 and 79.

### Cut-off for "the top 15%"

The organisers award a certificate to the top 15% of candidates. The top 15% are above the **85th** percentile, so the target is 0.85 × 250 = 212.5.

```
85th percentile = 60 + (212.5 − 165)/63 × 20 = 75.1
```

A candidate needs a score of about 75 or more. Reading at 15% instead would give the score that only the bottom 15% fall below, which answers a different question.

### Percentile rank of a candidate

A candidate scores 70. What percentile is this?

```
Cumulative frequency at 70 = 165 + (10/20) × 63 = 196.5
196.5 / 250 × 100 = 78.6%
```

About 79% of candidates scored 70 or less, so the candidate is at about the 79th percentile.

## Reading from a graph

On a cumulative frequency graph, draw a horizontal line from the target height to the graph, then down. On a **cumulative percentage** graph, the target for the P-th percentile is simply P on the vertical axis, which makes percentiles quick to read. For a polygon the readings equal the interpolation results above; a smooth curve gives slightly different, equally acceptable estimates.

## Comparing two groups

Quartiles allow fair comparison of groups of different size because they are positions within each group, not counts.

**Worked example 3.** The same test is taken at a second centre. Its estimates are: median 58, Q1 49, Q3 66.

| | Q1 | Median | Q3 | IQR |
|---|---|---|---|---|
| Centre 1 | 37.1 | 51.6 | 67.1 | 30.0 |
| Centre 2 | 49 | 58 | 66 | 17 |

**Comparison.** Centre 2's candidates scored higher on average (median 58 against 51.6) and their scores were more consistent (IQR 17 against 30.0). The upper quartiles are almost equal, so the difference lies mainly in the lower half: Centre 1 has many more low scores.

## Common errors

- Using n/4 positions on a short list where the halves method is expected, or (n + 1)/4 on grouped data, without stating the method.
- Reading the 85th percentile when the question asks for the bottom 15% (or the reverse).
- Using the class limit instead of the boundary for rounded data.
- Quoting the class frequency instead of the cumulative frequency before the class.
- Calling interpolated values exact; they are estimates.
- Comparing groups with counts rather than quartiles or percentages.

## Exam technique

- **Estimate the median/quartile/percentile**: state the target position, the class, and the interpolation.
- **Use your graph**: show guide lines at the target heights.
- **Find the mark needed for the top k%**: read at the (100 − k)th percentile.
- **Compare**: one statement about the medians and one about the interquartile ranges, both with figures, in context.

## Next steps

Condense the methods with the [revision notes on quartiles and percentiles](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles-revision-notes/), then practise with the [quartiles and percentiles practice questions](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles-practice/). Graph drawing is in [cumulative frequency in graphical form](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form/).

## Frequently asked questions

**Why use n/4 rather than (n + 1)/4 for grouped data?**
For grouped data the values are estimates anyway, and n/4, n/2 and 3n/4 match the heights read from a cumulative frequency graph. Follow any rule the question gives.

**How do I find the score needed to be in the top 10%?**
Find the 90th percentile: the target cumulative frequency is 0.9 × n.

**What does the 60th percentile mean?**
It is the value with 60% of the data at or below it.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 5, section 5.3: Quartiles and percentiles, including estimation of median, quartiles and percentiles from a cumulative frequency curve or polygon, and by linear interpolation from a cumulative frequency table.
