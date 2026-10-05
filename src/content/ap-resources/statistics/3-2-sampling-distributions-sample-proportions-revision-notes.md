---
resourceId: "mb-ap-stats-3.2-revision-notes"
title: "Sampling Distributions for Sample Proportions: Revision Notes (Statistics 3.2)"
description: "One-page recap of the mean, standard deviation and shape of the sampling distribution of a sample proportion, the three conditions, normal probabilities and the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.2-study-guide"]
learningObjectives:
  - "Recall the mean, standard deviation and conditions for the sampling distribution of p̂"
  - "Spot the common errors in sampling-distribution questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "normalcdf(lower, upper, p, σp̂) gives normal probabilities for p̂."
related: ["mb-ap-stats-3.2-study-guide", "mb-ap-stats-3.2-practice", "mb-ap-stats-3.2-checklist"]
next: "mb-ap-stats-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Centre p, spread √(p(1 − p)/n), approximately normal if np ≥ 10 and n(1 − p) ≥ 10."
  - "Check random, 10% and large counts in context, with numbers."
  - "Interpret in terms of repeated random samples of the same size from the named population."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/).

## Recap

- p̂ = X / n, where X is the number of successes in the sample. It varies from sample to sample.
- The **sampling distribution of p̂** is the distribution of p̂ over all random samples of size n.
- Its mean is p, so p̂ is **unbiased** (Topic 3.1).
- Its standard deviation shrinks as n grows; multiply n by 4 to halve it.
- With large enough expected counts, its shape is approximately **normal**, so you can use z-scores.

## Key relationships

| Quantity | Formula or rule | Needs |
|---|---|---|
| Mean | μp̂ = p | Random sample |
| Standard deviation | σp̂ = √(p(1 − p) / n) | Independence: random, and n ≤ 10% of N when sampling without replacement |
| Shape | approximately normal | np ≥ 10 and n(1 − p) ≥ 10 |
| z-score | z = (p̂ − p) / σp̂ | Normal shape |
| Sample size for σp̂ ≤ d | n ≥ p(1 − p) / d², rounded **up** | — |

## Interpretation templates

- **Mean:** "In repeated random samples of [n] [individuals] from [population], the sample proportion who [success] averages [p]."
- **Standard deviation:** "In random samples of [n] [individuals], the sample proportion who [success] typically differs from the population proportion [p] by about [σp̂]."
- **Probability:** "If [p] of [population] [success], about [probability] of random samples of [n] would give a sample proportion [event]."

## Mistakes to avoid

1. Using **p̂** in the formula or the large-counts check when **p** is given.
2. Checking **n ≥ 30** instead of the expected counts np and n(1 − p).
3. Forgetting the **10%** condition, or checking it the wrong way round (it is n ≤ 0.10N).
4. Thinking **doubling** n halves σp̂ (it divides it by √2).
5. Rounding a required sample size **down**.
6. Writing "it varies less" without saying **which** distribution.
7. Concluding a claim is **proved** false from a small probability.

## Quick self-check

1. p = 0.7 and n = 84. Find σp̂ and check large counts. *(σp̂ = √(0.21 / 84) = √0.0025 = 0.05; np = 58.8 and n(1 − p) = 25.2, both ≥ 10.)*
2. A random sample of 100 is taken from a club of 600 members. Is the 10% condition met? *(No: 10% of 600 is 60, and 100 > 60.)*
3. σp̂ = 0.04 when n = 150. What is σp̂ when n = 600 (same p)? *(0.02: four times the sample size halves σp̂.)*

Next: [practice questions](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-practice/).
