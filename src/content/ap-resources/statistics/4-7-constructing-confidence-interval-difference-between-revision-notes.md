---
resourceId: "mb-ap-stats-4.7-revision-notes"
title: "Constructing a Confidence Interval for the Difference Between Two Means: Revision Notes (Statistics 4.7)"
description: "One-page recap of the two-sample t-interval: choosing it over a paired interval, defining μ₁ − μ₂, the three conditions, standard error, degrees of freedom and margin of error."
course: "statistics"
unit: 4
topics: ["4.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.7-study-guide"]
learningObjectives:
  - "Recall the formula, conditions and degrees-of-freedom rule for a two-sample t-interval"
  - "Spot the common errors in two-sample interval questions before making them"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Two-sample t-interval, not pooled. Use the df the calculator gives, or the smaller of n₁ − 1 and n₂ − 1."
related: ["mb-ap-stats-4.7-study-guide", "mb-ap-stats-4.7-practice", "mb-ap-stats-4.7-checklist"]
next: "mb-ap-stats-4.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Independent samples: two-sample t-interval. Paired data: one-sample t-interval on the differences."
  - "SE = √(s₁²/n₁ + s₂²/n₂): add the variance terms."
  - "Check every condition for both groups."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/).

## Recap

- Use a **two-sample t-interval for μ₁ − μ₂** when a quantitative response is measured in **two independent** groups.
- If the values come in linked pairs (same subject twice, matched pairs), the data are **paired**: use a one-sample t-interval on the differences instead.
- The **parameter** names the order of subtraction, the response variable (with units) and both populations or treatments.
- The interval is **point estimate ± t* × SE**, with t from a t-distribution because σ₁ and σ₂ are unknown.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Point estimate | x̄₁ − x̄₂ |
| Standard error | SE = √(s₁²/n₁ + s₂²/n₂) |
| Degrees of freedom | from technology; always between the smaller of n₁ − 1 and n₂ − 1, and n₁ + n₂ − 2 |
| Conservative df | smaller of n₁ − 1 and n₂ − 1 (slightly wider interval) |
| Margin of error | t* × SE |
| Interval | (x̄₁ − x̄₂) ± t* √(s₁²/n₁ + s₂²/n₂) |
| Reverse the order of subtraction | both limits change sign and swap places |

## Conditions

1. **Randomization:** two independent random samples, or a randomized experiment.
2. **10%:** n₁ ≤ 10% N₁ and n₂ ≤ 10% N₂, when sampling without replacement. Not needed for a randomized experiment.
3. **Sample data:** both n ≥ 30, or both populations approximately normal. If either n < 30, both samples must be free from strong skewness and outliers (look at a dot plot or use the 1.5 × IQR rule).

## Mistakes to avoid

1. **Adding standard deviations** (s₁/√n₁ + s₂/√n₂) instead of variance terms.
2. **Using z\*** instead of t*.
3. **Using df = n₁ + n₂ − 2** as if it were exact. It is only the upper bound.
4. **Choosing "pooled"** on the calculator.
5. **Treating paired data as independent.**
6. **Checking a condition for one group only.**
7. **A parameter with no order of subtraction**, or one that describes the samples instead of the populations.

## Quick self-check

1. n₁ = 20, s₁ = 3; n₂ = 20, s₂ = 4. Find the SE. *(√(9/20 + 16/20) = √1.25 ≈ 1.118)*
2. A 95% interval for μ₁ − μ₂ is (2.4, 9.0). Find the point estimate and margin of error. *(Point estimate 5.7, margin of error 3.3)*
3. n₁ = 12 and n₂ = 18. Between which values must the technology df lie? *(11 and 28)*
4. Ten patients have blood pressure measured before and after a drug. Two-sample t-interval? *(No: the data are paired. Use a one-sample t-interval on the 10 differences.)*

Next: [practice questions](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-practice/).
