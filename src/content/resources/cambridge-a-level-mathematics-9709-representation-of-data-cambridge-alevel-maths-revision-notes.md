---
title: "Cambridge A Level Mathematics (9709): Representation of data -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "representation-of-data-cambridge-alevel-maths"
description: "Condensed 9709 Paper 5 notes on 5.1: diagrams, class boundaries, frequency density, percentiles, coded and combined totals, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 5.1 of Cambridge 9709 Paper 5. The [representation of data study guide](/resources/cambridge-a-level-mathematics-9709-representation-of-data-cambridge-alevel-maths/) has full worked examples; the [representation of data practice questions](/resources/a-level-maths-9709-representation-of-data-practice/) give exam-style questions with mark schemes.

## Formula sheet

```
Mean                          x̄ = Σx ÷ n                 (grouped: Σfx ÷ Σf)
Variance                      Σx² ÷ n − x̄²               (grouped: Σfx² ÷ Σf − x̄²)
Standard deviation            √variance
Coded mean                    x̄ = a + Σ(x − a) ÷ n
Coded variance                Σ(x − a)² ÷ n − (Σ(x − a) ÷ n)²
Rebuild totals from x̄ and σ   Σx = n x̄,   Σx² = n(σ² + x̄²)
Frequency density             frequency ÷ class width
Interquartile range           upper quartile − lower quartile
```

## Diagrams at a glance

| Diagram | Use when | Keeps raw values? |
|---|---|---|
| Stem-and-leaf (incl. back-to-back) | small data sets, one or two groups | yes |
| Box-and-whisker | comparing groups on a common scale | no (five summary values only) |
| Histogram | large continuous grouped data, unequal widths | no |
| Cumulative frequency graph | estimating median, quartiles, percentiles | no |

Box-and-whisker plot = lowest value, lower quartile, median, upper quartile, highest value, drawn on a scaled axis.

## Class boundaries

| Data recorded as | Class written | True boundaries | Width |
|---|---|---|---|
| nearest whole unit | 10–14 | 9.5 to 14.5 | 5 |
| nearest 0.1 | 2.0–2.4 | 1.95 to 2.45 | 0.5 |
| age in completed years | 20–29 | 20 to 30 | 10 |
| inequality form | 10 ≤ t < 15 | 10 to 15 | 5 |

## Cumulative frequency routine

1. Cumulative totals at each **upper boundary**; start at (lowest boundary, 0).
2. Plot, join with a smooth curve or straight lines, as the question directs.
3. Median at n/2, quartiles at n/4 and 3n/4, pth percentile at p% of n.
4. "More than x": total minus the reading at x.
5. "Between a and b": reading at b minus reading at a.

Linear interpolation inside a class: lower boundary + (target − cf below) ÷ class frequency × width.

## Measures: when each is preferred

| Measure | Strength | Weakness |
|---|---|---|
| Mean | uses every value | pulled by extreme values |
| Median | not affected by extreme values | ignores the size of most values |
| Mode | only option for most common category | may not exist or be unique |
| Range | quick | depends only on two extreme values |
| IQR | ignores extremes; pairs with median | uses only the middle half |
| Standard deviation | uses every value; pairs with mean | affected by extreme values |

## Key terms

| Term | Meaning |
|---|---|
| Raw data | individual values before grouping |
| Class boundary | the true dividing value between adjacent classes |
| Frequency density | bar height in a histogram; frequency per unit of class width |
| Percentile | value below which a given percentage of the data lies |
| Coded data | data transformed as x − a to simplify totals |
| Back-to-back | two stem-and-leaf diagrams sharing one stem |

## Exam traps

- **Class limits used as boundaries.** 10–14 to the nearest minute has width 5, not 4.
- **Height = frequency.** Only correct when every class has the same width; otherwise use frequency density.
- **Cumulative frequency at mid-points.** Always plot at the upper boundary.
- **Left-hand leaves in the wrong order.** They increase moving away from the stem.
- **Missing key.** A stem-and-leaf diagram without a key loses a mark; a back-to-back key must cover both sides.
- **Rounded mean squared.** Keep x̄ unrounded in the variance formula.
- **Standard deviations averaged.** Combine via Σx and Σx², never directly.
- **Coded variance shifted.** Subtracting a from every value changes the mean by a but leaves the variance unchanged.
- **Comparison without context.** "Group Y took longer on average (median 33 s against 23 s)" is the standard to aim for.

## Self-test

1. Data are recorded to the nearest centimetre in the class 40–49. Give the class boundaries and width.
2. A class of width 15 has frequency 36. Find its frequency density.
3. For 10 values, Σx = 85 and Σx² = 800. Find the standard deviation.
4. For 25 values, Σ(x − 30) = 75 and Σ(x − 30)² = 625. Find the mean and variance of x.
5. Set A: 10 values, mean 6, standard deviation 2. Find Σx and Σx².
6. A data set has 11 values in order. Which positions give the median and quartiles?
7. On a cumulative frequency graph of 200 values, at what cumulative frequency do you read the 85th percentile?
8. State one advantage of a box-and-whisker plot over a histogram for comparing two data sets.
9. Why is the median preferred to the mean for a data set with one very large value?
10. The cumulative frequency at 30 is 48 and at 40 is 80, out of 100. Estimate the number of values between 30 and 40, and estimate the median by interpolation.
11. A histogram bar for 20 ≤ x < 30 has height 3.6. How many values does it represent?
12. Why are the mean and standard deviation from grouped data only estimates?

### Answers

1. **39.5 to 49.5; width 10.**
2. 36 ÷ 15 = **2.4**.
3. Mean 8.5; variance 80 − 72.25 = 7.75; standard deviation **2.78** (3 s.f.).
4. Mean = 30 + 3 = **33**; variance = 25 − 9 = **16**.
5. Σx = **60**; Σx² = 10 × (4 + 36) = **400**.
6. Median **6th**; quartiles **3rd and 9th** (the medians of the five values below and above the median).
7. 0.85 × 200 = **170**.
8. The **medians and quartiles of both sets can be compared directly** on one scale.
9. The median is **not affected by the extreme value**; the mean is pulled towards it.
10. **32** values; median = 30 + (50 − 48) ÷ 32 × 10 = **30.6** (3 s.f.).
11. 3.6 × 10 = **36**.
12. **Mid-points** replace the unknown actual values in each class.
