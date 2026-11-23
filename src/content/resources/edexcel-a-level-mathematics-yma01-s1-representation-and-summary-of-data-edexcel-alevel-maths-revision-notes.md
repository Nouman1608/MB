---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Representation and summary of data -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-representation-and-summary-of-data-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths S1 data summary: frequency density, quartile rules, interpolation, variance, coding, skewness, outliers and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S1, section 2: histograms, stem and leaf diagrams and box plots; measures of location; measures of dispersion including interpercentile ranges; skewness and outliers. For worked examples, use the [representation and summary of data study guide](/resources/edexcel-a-level-mathematics-yma01-s1-representation-and-summary-of-data-edexcel-alevel-maths/).

## Formulae you must know (not in the booklet)

```
mean            x̄ = Σx / n     or    Σfx / Σf
variance        Σx²/n − x̄²   =  Sxx / n,   where Sxx = Σx² − (Σx)²/n
grouped         Σfx²/Σf − x̄²
sd              √variance
IQR             Q3 − Q1
```

## Diagrams

- **Histogram:** area ∝ frequency; frequency density = frequency ÷ class width. Classes touch (continuous data). With a given drawing scale, find a width factor and a height factor separately.
- **Stem and leaf:** keeps every value; needs a key; back-to-back diagrams compare two sets, with the left leaves read outwards from the stem.
- **Box plot:** minimum, Q1, median, Q3, maximum; outliers plotted as crosses with the whisker ending at the most extreme value that is not an outlier.

## Quartiles: two rules

| Data type | Position of Q1 | Method |
|---|---|---|
| Ungrouped (listed) | n/4 | Not a whole number: round up. Whole number: average that value and the next |
| Grouped continuous | n/4 | Interpolate within the class |

The same rules apply to the median (n/2), Q3 (3n/4) and any percentile (pn/100).

**Interpolation template:**

```
value = lower boundary + (position − cumulative frequency before class) / class frequency × class width
```

## Coding

```
y = (x − a)/b   ->   x̄ = bȳ + a      sd(x) = |b| × sd(y)      var(x) = b² var(y)
```

Adding or subtracting changes location only. Multiplying or dividing changes location and spread.

## Key terms

| Term | Meaning |
|---|---|
| Frequency density | Frequency ÷ class width; the height of a histogram bar |
| Class boundary | The true limit of a class (for example 9.5 for a class 5–9 of whole numbers) |
| Interpolation | Estimating a value within a class by assuming values are spread evenly |
| Interquartile range | Q3 − Q1, the spread of the middle 50% |
| Interpercentile range | Difference between two percentiles, such as P90 − P10 |
| Coding | Transforming data by y = (x − a)/b to simplify arithmetic |
| Positive skew | Long tail to the right: Q3 − Q2 > Q2 − Q1, mean usually > median |
| Negative skew | Long tail to the left: Q3 − Q2 < Q2 − Q1, mean usually < median |
| Outlier | Extreme value, judged by a rule the question gives |

## Skewness: three pieces of evidence

```
quartiles:   Q3 − Q2  vs  Q2 − Q1
averages:    mean vs median (vs mode)
formula:     if given, e.g. 3(mean − median)/sd; its sign gives the direction
```

Positive answers mean positive skew. Quote the numbers you used.

## Choosing summary measures

- Symmetric, no outliers: mean and standard deviation.
- Skewed or with outliers: median and IQR.
- An interpercentile range (such as 10% to 90%) excludes extremes but uses more of the data than the IQR.

## Mini example: combined data

Group 1: n = 10, x̄ = 12, sd = 3. Group 2: n = 15, x̄ = 14, sd = 2. Rebuild the sums first:

```
Σx₁ = 120,  Σx₁² = 10(3² + 12²) = 1530
Σx₂ = 210,  Σx₂² = 15(2² + 14²) = 3000
combined:   x̄ = 330/25 = 13.2,  variance = 4530/25 − 13.2² = 6.96,  sd = 2.64
```

You cannot average two standard deviations.

## Exam traps

- Plotting frequency instead of frequency density.
- Mixing the ungrouped quartile rule with the grouped one.
- Using class limits instead of class boundaries when interpolating.
- Rounding x̄ before computing Σx²/n − x̄².
- Adding the coding constant to the standard deviation.
- Comparing two distributions without context or without a spread comment.
- Claiming a value is an outlier without using the rule given in the question.

## Self-test

1. A class 20–35 has frequency 45. Find its frequency density.
2. For 11 ordered values, which positions give Q1, the median and Q3?
3. For 12 ordered values, how is Q1 found?
4. Σx = 84, Σx² = 1052, n = 8. Find the mean and variance.
5. Data are coded by y = (x − 100)/4. ȳ = 2.5 and sd(y) = 1.2. Find x̄ and sd(x).
6. What is the effect on the standard deviation of adding 7 to every value?
7. Q1 = 8, Q2 = 11, Q3 = 20. Describe the skewness, with a reason.
8. Which measures of location and spread suit data with outliers?
9. What does a 10% to 90% interpercentile range measure?
10. Write the interpolation formula for the median of grouped data.
11. On a box plot, where does the whisker end when there is an outlier?
12. Why are mean and standard deviation from grouped data called estimates?

**Answers:** 1. 45 ÷ 15 = 3. 2. 3rd, 6th and 9th (11/4 = 2.75 rounds up to 3; 11/2 = 5.5 rounds up to 6; 33/4 = 8.25 rounds up to 9). 3. 12/4 = 3 is whole, so Q1 is the mean of the 3rd and 4th values. 4. x̄ = 10.5; variance = 1052/8 − 10.5² = 21.25. 5. x̄ = 4(2.5) + 100 = 110; sd(x) = 4 × 1.2 = 4.8. 6. None: the standard deviation is unchanged. 7. Q3 − Q2 = 9 > Q2 − Q1 = 3, so positive skew. 8. Median and interquartile range. 9. The spread of the middle 80% of the data. 10. Median = L + (n/2 − cf before)/f × w, with L the lower class boundary, f the class frequency and w the class width. 11. At the most extreme value that is not an outlier. 12. The class midpoints are used in place of the actual values, which are not known.
