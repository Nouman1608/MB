---
resourceId: "mb-ap-stats-4.2-revision-notes"
title: "Constructing a Confidence Interval for a Mean or Mean Difference: Revision Notes (Statistics 4.2)"
description: "One-page recap of t-distributions, degrees of freedom, the one-sample t-interval for μ and for a matched-pairs μd, its three conditions, and the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.2-study-guide"]
learningObjectives:
  - "Recall the formula, degrees of freedom and conditions for a one-sample t-interval"
  - "Spot the common errors in t-interval questions before making them"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "t* = invT(1 − (1 − C)/2, n − 1). Check with the one-sample t-interval function."
related: ["mb-ap-stats-4.2-study-guide", "mb-ap-stats-4.2-practice", "mb-ap-stats-4.2-checklist"]
next: "mb-ap-stats-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "x̄ ± t* × s/√n with df = n − 1."
  - "Matched pairs: one sample of differences, interval for μd."
  - "Three conditions: randomization, 10%, sample data."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/).

## Recap

- σ is rarely known, so you estimate the standard deviation of x̄ with the **standard error** s/√n.
- Standardising with s gives a **t** statistic, which follows a **t-distribution** with df = n − 1.
- t-distributions: symmetric, bell-shaped, centred at 0, with **heavier tails** than the standard normal. As df grows they approach the standard normal.
- Heavier tails mean t* > z*, so intervals are wider, especially for small n.
- **Matched pairs** (two linked measurements per individual): subtract in a stated order and treat the differences as one sample.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Point estimate | x̄ (or x̄d) |
| Standard error | SE = s/√n |
| Degrees of freedom | df = n − 1 (n = number of differences for pairs) |
| Critical value | t* for the central C% of t(df); invT(1 − (1 − C)/2, df) |
| Margin of error | ME = t* × s/√n |
| Interval | x̄ ± t* × s/√n |

## Conditions

| Condition | Check |
|---|---|
| Randomization | Random sample or randomized experiment |
| 10% | n ≤ 10% of N, when sampling without replacement |
| Sample data | Population approximately normal, **or** n ≥ 30, **or** (n < 30) data free from strong skewness and outliers. For pairs: check the **differences** |

## Mistakes to avoid

1. **Using z*** when σ is unknown.
2. **df = n** instead of n − 1.
3. **Two-sample methods for paired data.** Pairs → differences → one sample.
4. **No order of subtraction** in a μd definition.
5. **"n ≥ 30"** written for a small sample. Look at the data and describe it.
6. **Checking each column** of paired data instead of the differences.
7. **Parameter without context:** name the mean, the variable, the units and the population.

## Quick self-check

1. What is t* for a 90% interval from a sample of 20? *(df = 19, t* ≈ 1.729)*
2. A sample of 36 has s = 12 cm. What is the standard error? *(12/√36 = 2 cm)*
3. Fifteen students each take a test before and after a course. What are the degrees of freedom for an interval for μd? *(15 differences, so df = 14)*

Next: [practice questions](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-practice/).
