---
resourceId: "mb-ap-stats-3.1-revision-notes"
title: "Estimators: Revision Notes (Statistics 3.1)"
description: "One-page recap of parameters, statistics, estimators and point estimates, what makes an estimator unbiased, and how to justify bias from a sampling distribution or simulation."
course: "statistics"
unit: 3
topics: ["3.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.1-study-guide"]
learningObjectives:
  - "Recall the notation for parameters, statistics and point estimates"
  - "State and apply the meaning of an unbiased estimator"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Report Sx (divides by n − 1) as the point estimate of σ."
related: ["mb-ap-stats-3.1-study-guide", "mb-ap-stats-3.1-practice", "mb-ap-stats-3.1-checklist"]
next: "mb-ap-stats-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Estimator = the rule; estimate = the number one sample gives."
  - "Unbiased: the sampling distribution is centred on the parameter."
  - "Bias is judged over all samples, never from one estimate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-1-estimators-study-guide/).

## Recap

- A **parameter** describes a population and is fixed (usually unknown). A **statistic** comes from a sample and varies from sample to sample.
- An **estimator** is a statistic used to estimate a parameter: a rule such as p̂ = x / n.
- A **point estimate** is the single number the estimator gives for your sample.
- An estimator is **unbiased** if the mean of its sampling distribution equals the parameter. It neither overestimates nor underestimates on average.
- An estimator is **biased** if its sampling distribution is centred above or below the parameter.

## Key relationships

| Parameter | Estimator | Unbiased (random samples)? |
|---|---|---|
| proportion p | sample proportion p̂ = x / n | Yes |
| mean μ | sample mean x̄ = Σxᵢ / n | Yes |
| variance σ² | sample variance s² = Σ(xᵢ − x̄)² / (n − 1) | Yes |
| variance σ² | Σ(xᵢ − x̄)² / n | No: underestimates |
| population maximum | sample maximum | No: underestimates |
| population range | sample range | No: underestimates |

**How to justify:** find (or simulate) the sampling distribution, find its mean, compare with the parameter. Equal (or, with simulation, very close with no consistent direction): unbiased. Clearly above or below: biased, in that direction.

## Assumptions

- The samples are **random**. An unbiased estimator gives biased results if the sampling method is biased (convenience, voluntary response, undercoverage).
- Simulation gives an **approximate** sampling distribution, so expect a small difference from the parameter even for an unbiased estimator. Say "appears unbiased".

## Mistakes to avoid

1. **Unbiased = exact.** Individual estimates still miss; they balance out on average.
2. **Judging bias from one sample.**
3. **Thinking a larger sample removes bias.** It reduces variability only.
4. **Wrong notation**: writing p or μ for a sample result.
5. **No context**: name the parameter and the population ("the proportion of **all** members who…").

## Quick self-check

1. In a random sample of 75 commuters, 18 cycle to work. Give the point estimate and name the parameter. *(p̂ = 18 ÷ 75 = 0.24 estimates p, the proportion of all commuters in the population who cycle to work.)*
2. An estimator's simulated values have mean 41.9 when the parameter is 50. Biased or unbiased? *(Biased: centred well below 50, so it underestimates.)*
3. True or false: if an estimator is unbiased, a sample of 1,000 will give exactly the parameter. *(False: estimates vary; only their average equals the parameter.)*

Next: [practice questions](/advanced-course-resources/statistics/3-1-estimators-practice/).
