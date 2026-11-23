---
title: "Edexcel International GCSE Mathematics A (4MA1): Statistical measures"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Statistics and probability"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 6.2
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-edexcel-igcse-maths"
    subtopic: "statistical-measures-edexcel-igcse-maths"
description: "Study guide for Edexcel IGCSE Maths 4MA1 section 6.2: averages and range, problems with the mean, grouped data, quartiles and interquartile range."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into section 6.2, Statistical measures, of topic 6 (Statistics and probability) in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017). Section 6.2 has Foundation Tier content on averages and range, which both tiers need, and Higher Tier content on quartiles and the interquartile range, marked **Higher tier only** below.

The [Statistics and probability study guide](/resources/edexcel-igcse-maths-4ma1-statistics-and-probability/) shows the basic calculations. This page covers the "simple problems using these measures" that the specification mentions: missing values, combined means, choosing an average, unknown frequencies, and comparing data sets using an average and a spread. Use it with the [Statistical measures revision notes](/resources/edexcel-igcse-mathematics-4ma1-statistical-measures-revision-notes/) and the [Statistical measures practice questions](/resources/edexcel-igcse-mathematics-4ma1-statistical-measures-practice/).

## What the specification asks

| Tier | Statement |
|---|---|
| Foundation 6.2 A | understand the concept of average (note: data could be in a list or tabulated form) |
| Foundation 6.2 B | calculate the mean, median, mode and range for a discrete data set (note: includes simple problems using these measures) |
| Foundation 6.2 C | calculate an estimate for the mean for grouped data |
| Foundation 6.2 D | identify the modal class for grouped data |
| Higher 6.2 A | estimate the median from a cumulative frequency diagram |
| Higher 6.2 B | understand the concept of a measure of spread |
| Higher 6.2 C | find the interquartile range from a discrete data set (note: the terms "upper quartile" and "lower quartile" may be used) |
| Higher 6.2 D | estimate the interquartile range from a cumulative frequency diagram |

## Averages and range (both tiers)

An **average** is a single value that represents a typical member of the data set.

| Measure | How to find it | Strength | Weakness |
|---|---|---|---|
| Mean | Total ÷ number of values | Uses every value | Distorted by extreme values |
| Median | Middle value when ordered | Not affected by extremes | Ignores most values |
| Mode | Most common value | Works for non-numerical data | There may be none, or several |
| Range | Largest − smallest | Quick measure of spread | Uses only two values |

**Worked example 1 (an even number of values).** Find the mean, median, mode and range of 4, 9, 2, 7, 12, 5.

```
ordered: 2, 4, 5, 7, 9, 12
mean = 39 ÷ 6 = 6.5
median = halfway between the 3rd and 4th values = (5 + 7) ÷ 2 = 6
mode: no value repeats, so there is no mode
range = 12 − 2 = 10
```

The median does not have to be one of the data values.

## Problems using the mean (both tiers)

The key idea is that **total = mean × number of values**. Most problems are solved by working with totals.

**Worked example 2 (a missing value).** The mean of five numbers is 8. Four of them are 6, 9, 11 and 4. Find the fifth.

```
total of five = 5 × 8 = 40
total of four = 6 + 9 + 11 + 4 = 30
fifth number = 40 − 30 = 10
```

**Worked example 3 (combining groups).** 20 students in class A have a mean test mark of 64. 30 students in class B have a mean of 59. Find the mean for all 50 students.

```
total for A = 20 × 64 = 1280
total for B = 30 × 59 = 1770
overall mean = (1280 + 1770) ÷ 50 = 3050 ÷ 50 = 61
```

Averaging the two means, (64 + 59) ÷ 2 = 61.5, is wrong because the classes are different sizes.

**Worked example 4 (choosing an average).** The numbers of messages six people sent in an hour were 3, 4, 4, 5, 6 and 48.

```
mean = 70 ÷ 6 = 11.7 (1 d.p.)
median = (4 + 5) ÷ 2 = 4.5
mode = 4
```

The mean is larger than five of the six values because of the extreme value 48. The median, 4.5, represents the group better. When a question asks you to choose, name the average and give the reason in context.

## Data in a frequency table (both tiers)

```
mean = Σfx ÷ Σf      (Σ means "the sum of")
```

**Worked example 5.** Shoe sizes of 30 students:

| Size x | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|
| Frequency f | 3 | 8 | 11 | 6 | 2 |
| fx | 12 | 40 | 66 | 42 | 16 |
| Running total of f | 3 | 11 | 22 | 28 | 30 |

```
mean = 176 ÷ 30 = 5.87 (3 s.f.)
median: halfway between the 15th and 16th values
        the running totals show values 12 to 22 are size 6, so median = 6
mode = 6 (highest frequency)
range = 8 − 4 = 4
```

**Worked example 6 (an unknown frequency).** Scores 1, 2, 3 and 4 have frequencies 4, k, 6 and 2. The mean score is 2.4. Find k.

```
Σf = 12 + k        Σfx = 4 + 2k + 18 + 8 = 30 + 2k
30 + 2k = 2.4(12 + k) = 28.8 + 2.4k
1.2 = 0.4k, so k = 3
```

Check: Σfx = 36 and Σf = 15, and 36 ÷ 15 = 2.4. ✓

## Grouped data (both tiers)

In a grouped table the exact values are unknown, so use each class **midpoint** as a representative value. The result is an **estimate** of the mean. The **modal class** is the class with the highest frequency.

**Worked example 7.** Waiting times t minutes:

| Time t | 0 < t ≤ 5 | 5 < t ≤ 10 | 10 < t ≤ 20 | 20 < t ≤ 30 |
|---|---|---|---|---|
| Frequency f | 6 | 9 | 12 | 3 |
| Midpoint x | 2.5 | 7.5 | 15 | 25 |
| fx | 15 | 67.5 | 180 | 75 |

```
estimated mean = 337.5 ÷ 30 = 11.25 minutes
modal class: 10 < t ≤ 20
```

Midpoints of unequal classes must be worked out separately: the midpoint of 10 < t ≤ 20 is 15, not 12.5.

## Quartiles and the interquartile range (Higher tier only)

A **measure of spread** describes how varied the data are. The range is easy to find but uses only the two most extreme values. The **interquartile range** (IQR) is the spread of the middle half of the data:

```
IQR = upper quartile − lower quartile
for n ordered values: lower quartile = ((n + 1)/4)th value,
median = ((n + 1)/2)th value, upper quartile = (3(n + 1)/4)th value
```

**Worked example 8.** Find the IQR of these 15 values:

3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 18, 20, 22, 25, 30

```
lower quartile: (15 + 1)/4 = 4th value = 8
median: 8th value = 13
upper quartile: 12th value = 20
IQR = 20 − 8 = 12
range = 30 − 3 = 27
```

Changing the largest value from 30 to 60 would double the range but leave the IQR unchanged.

### From a cumulative frequency diagram

For a total frequency n, read across at **n/2** for the median, **n/4** for the lower quartile and **3n/4** for the upper quartile, then down to the horizontal axis.

**Worked example 9.** The cumulative frequency table for 120 values is:

| x | ≤ 10 | ≤ 20 | ≤ 30 | ≤ 40 | ≤ 50 | ≤ 60 |
|---|---|---|---|---|---|---|
| Cumulative frequency | 6 | 22 | 50 | 86 | 108 | 120 |

With points joined by straight lines:

```
median at 60: between (30, 50) and (40, 86): 30 + 10 × 10/36 ≈ 33
lower quartile at 30: between (20, 22) and (30, 50): 20 + 10 × 8/28 ≈ 23
upper quartile at 90: between (40, 86) and (50, 108): 40 + 10 × 4/22 ≈ 42
IQR ≈ 42 − 23 = 19
```

From a drawn curve, your readings may differ slightly, and mark schemes allow a range.

## Comparing two data sets

A good comparison gives **one average** and **one measure of spread**, each with a sentence in context. For example: "Group B's median time (29 s) is higher than group A's (24 s), so group B were slower on average. Group A's IQR (14 s) is larger than group B's (8 s), so group A's times were more varied."

## Exam technique

- **"Calculate"**: show Σfx and Σf, not just the answer.
- **"Explain why your answer is an estimate"**: because the midpoints are used, not the actual values.
- **"Compare"**: two statements, one about average and one about spread, both in context.

## Common mistakes

- Finding the median without ordering the data.
- Dividing Σfx by the number of classes instead of Σf.
- Averaging two means for groups of different sizes.
- Giving the frequency instead of the value as the mode or median.
- Using class widths or upper bounds instead of midpoints.
- Reading quartiles on a cumulative frequency diagram from the vertical axis value instead of the horizontal one.

## Next steps

Condense the formulae with the [Statistical measures revision notes](/resources/edexcel-igcse-mathematics-4ma1-statistical-measures-revision-notes/), then practise with the [Statistical measures practice questions](/resources/edexcel-igcse-mathematics-4ma1-statistical-measures-practice/). Drawing the diagrams themselves is covered in the [Graphical representation of data study guide](/resources/edexcel-igcse-mathematics-4ma1-graphical-representation-of-data/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 6, Statistics and probability: 6.2 Statistical measures (Foundation Tier statements A to D; Higher Tier statements A to D).
