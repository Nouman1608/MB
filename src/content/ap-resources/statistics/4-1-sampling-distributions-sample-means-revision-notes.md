---
resourceId: "mb-ap-stats-4.1-revision-notes"
title: "Sampling Distributions for Sample Means: Revision Notes (Statistics 4.1)"
description: "One-page recap of the mean and standard deviation of x̄, the randomization, 10% and normal-shape conditions, normal probabilities for sample means and the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.1-study-guide"]
learningObjectives:
  - "Recall the mean, standard deviation and shape conditions for the sampling distribution of a sample mean"
  - "Spot the common errors in sample-mean probability questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Standardise with σ/√n, then use normalcdf. Round probabilities to 4 decimal places."
related: ["mb-ap-stats-4.1-study-guide", "mb-ap-stats-4.1-practice", "mb-ap-stats-4.1-checklist"]
next: "mb-ap-stats-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "μx̄ = μ and σx̄ = σ/√n."
  - "Normal population: x̄ normal for any n. Otherwise: approximately normal if n ≥ 30."
  - "Questions about an average use σ/√n; questions about one individual use σ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/).

## Recap

- The **sampling distribution of x̄** is the distribution of the sample mean over all possible random samples of size n from one population.
- It is centred at the population mean, so **x̄ is unbiased** for μ.
- Sample means vary **less** than individual values, and less again for larger samples.
- Its shape is normal if the population is normal, and approximately normal for large n (central limit theorem).
- Interpret every value for the specific population, sample size and variable.

## Key relationships

| Quantity | Formula or rule | Notes |
|---|---|---|
| Mean of x̄ | μx̄ = μ | Does not depend on n |
| Standard deviation of x̄ | σx̄ = σ/√n | Needs independent values |
| Effect of n | n × 4 → σx̄ ÷ 2; n × 9 → σx̄ ÷ 3 | Square-root law |
| z-score for a sample mean | z = (x̄ − μ)/(σ/√n) | Not (x̄ − μ)/σ |
| Sample size for a target σx̄ = k | n ≥ (σ/k)² | Always round up |

## Conditions

| Condition | Check | Purpose |
|---|---|---|
| Randomization | Random sample | Independence; x̄ unbiased |
| 10% | n ≤ 10% of N when sampling without replacement | σ/√n is accurate |
| Normal shape | Population normal (any n), **or** n ≥ 30 | Normal model for x̄ is valid |

Extremely skewed population: n may need to be well above 30. Non-normal population with n < 30: no normal model.

## Mistakes to avoid

1. **Using σ for an average.** Divide by √n.
2. **Dividing by n** instead of √n.
3. **Claiming the CLT makes the sample data normal.** It is about the distribution of x̄.
4. **Demanding n ≥ 30 when the population is already normal.**
5. **Using the 10% condition as a shape check.** It is about independence only.
6. **Rounding a required sample size down.**
7. **Interpreting σx̄ as the spread of individuals.** It is the typical distance of a sample **mean** from μ.

## Quick self-check

1. A population has σ = 30 units. What is σx̄ for random samples of 25? *(30/√25 = 6 units)*
2. A random sample of 20 gives a certain σx̄. What sample size halves it? *(4 × 20 = 80)*
3. A normal population has μ = 50 and σ = 6. For random samples of 16, find P(x̄ > 53). *(σx̄ = 1.5, z = 2, P ≈ 0.0228)*

Next: [practice questions](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-practice/).
