---
resourceId: "mb-ap-stats-4.6-revision-notes"
title: "Sampling Distributions for the Difference Between Two Sample Means: Revision Notes (Statistics 4.6)"
description: "One-page recap of the sampling distribution of x̄₁ − x̄₂: mean, standard deviation, conditions, when a normal model applies, and the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.6-study-guide"]
learningObjectives:
  - "Recall the mean, standard deviation and conditions for the sampling distribution of a difference in sample means"
  - "Spot the common errors in these questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf with the mean μ₁ − μ₂ and the standard deviation √(σ₁²/n₁ + σ₂²/n₂)."
related: ["mb-ap-stats-4.6-study-guide", "mb-ap-stats-4.6-practice", "mb-ap-stats-4.6-checklist"]
next: "mb-ap-stats-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Mean μ₁ − μ₂; standard deviation √(σ₁²/n₁ + σ₂²/n₂)."
  - "Normal if both populations are normal; approximately normal if both samples have at least 30 values."
  - "State the order of subtraction and name both populations in every interpretation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/).

## Recap

- x̄₁ − x̄₂ is a **statistic**. It changes from one pair of samples to the next.
- Its **sampling distribution** describes all the values it could take over many pairs of independent samples.
- It is centred at the true difference μ₁ − μ₂, so it is an **unbiased estimator**.
- Its spread comes from **both** samples, so the variances add.
- Larger samples give less spread: multiplying both sample sizes by k divides the standard deviation by √k.

## Key relationships

| Item | Formula or rule |
|---|---|
| Mean | μ(x̄₁ − x̄₂) = μ₁ − μ₂ |
| Standard deviation | σ(x̄₁ − x̄₂) = √(σ₁²/n₁ + σ₂²/n₂) |
| Randomization | two independent random samples, or random assignment in an experiment |
| 10% | n₁ ≤ 10% of N₁ and n₂ ≤ 10% of N₂ (sampling without replacement only) |
| Normal | both populations normal (any n₁, n₂) |
| Approximately normal | populations not normal, but n₁ ≥ 30 and n₂ ≥ 30 |
| z-score | z = [(x̄₁ − x̄₂) − (μ₁ − μ₂)] / σ(x̄₁ − x̄₂) |

## Assumptions and conventions

- The two samples are **independent**: different individuals, not linked or paired.
- The population means and standard deviations are given in this topic. When they are unknown (Topic 4.7 onwards), you estimate with s₁ and s₂.
- For an experiment, random assignment meets the randomization condition and the 10% condition is not needed. The shape condition is still needed for a normal model.
- Interpretations name the variable, units, both populations and the order of subtraction.

## Mistakes to avoid

1. **Adding the standard deviations** instead of the variances.
2. **Subtracting the variances** because the means are subtracted.
3. **"n₁ + n₂ ≥ 30"** instead of both n₁ ≥ 30 and n₂ ≥ 30.
4. **Demanding n ≥ 30** when both populations are already normal.
5. **Using the formula for paired data** (the same individuals measured twice).
6. **Forgetting the order of subtraction** when turning words into an inequality.
7. **"A small probability proves the claim is false."** It only gives reason to doubt it.

## Quick self-check

1. σ₁ = 10, n₁ = 25, σ₂ = 6, n₂ = 16. Find σ(x̄₁ − x̄₂). *(√(4 + 2.25) = √6.25 = 2.5)*
2. μ₁ = 40 and μ₂ = 46. What is the mean of x̄₁ − x̄₂? *(−6)*
3. Both populations are strongly skewed; n₁ = 20 and n₂ = 50. Can you use a normal model? *(No: n₁ < 30)*

Next: [practice questions](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-practice/).
