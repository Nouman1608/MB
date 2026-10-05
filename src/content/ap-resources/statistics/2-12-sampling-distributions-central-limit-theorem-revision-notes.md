---
resourceId: "mb-ap-stats-2.12-revision-notes"
title: "Sampling Distributions and the Central Limit Theorem: Revision Notes (Statistics 2.12)"
description: "One-page recap of sampling distributions, simulation from an assumed parameter, randomization distributions and the central limit theorem, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.12"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.12-study-guide"]
learningObjectives:
  - "Recall what sampling and randomization distributions are and how each is simulated"
  - "Spot the common errors in questions about sampling distributions and the central limit theorem"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "A random number generator is enough for simulations."
related: ["mb-ap-stats-2.12-study-guide", "mb-ap-stats-2.12-practice", "mb-ap-stats-2.12-checklist"]
next: "mb-ap-stats-2.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Ask what one value on the graph represents: an individual or a statistic from a whole sample."
  - "The CLT is about sample means, not the data."
  - "Describe every simulated distribution by shape, centre and variability, in context."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/).

## Recap

- A **statistic** (x̄, p̂) varies from sample to sample: **sampling variability**.
- The **sampling distribution** of a statistic is its distribution over **all possible samples of the same size** from the same population.
- For a small population you can list every sample. For a large one, **simulate**.
- A **randomization distribution** comes from an experiment: shuffle the observed responses between the treatment groups many times and recompute the statistic.
- **Central limit theorem:** the sampling distribution of a sample mean is approximately **normal**, and the approximation improves as **n increases**, even for a skewed population.

## Key relationships

| Idea | What to remember |
|---|---|
| Population distribution | one value = one individual in the population |
| One sample's distribution | one value = one individual in the sample; looks like the population |
| Sampling distribution | one value = the statistic from one whole sample |
| Simulating a sampling distribution | assume the parameter → random sample of size n → record statistic → repeat many times |
| Randomization distribution | keep the responses and group sizes → randomly reassign labels → record statistic → repeat |
| Larger n | centre stays near the parameter; variability shrinks; shape of x̄ gets closer to normal |
| More repetitions | a clearer picture of the same sampling distribution; spread does not shrink |

## Assumptions and conventions

- A simulation assumes a value for the parameter (or a model for the population). Say what you assumed.
- Judge "unusual" by the proportion of simulated values **as extreme as or more extreme than** the observed one.
- Simulation results vary a little each time you run them.

## Mistakes to avoid

1. **Confusing the sample's data with the sampling distribution.**
2. **Saying the CLT makes the population or the sample normal.**
3. **Mixing up n with the number of repetitions.**
4. **Claiming an unusual result proves a claim false.** It is evidence against it.
5. **Changing group sizes or responses** in a randomization.
6. **Describing a distribution without context** or without all three features.

## Quick self-check

1. A population has 6 individuals. How many different samples of size 2 (without replacement) are there? *(15)*
2. Simulated sample means for n = 5 have standard deviation 2.0. Would n = 50 give a larger or smaller standard deviation? *(Smaller: larger samples vary less.)*
3. In 400 reallocations, 12 differences were as large as the observed difference or larger. Is the observed difference unusual if the treatment has no effect? *(Yes: 12 ÷ 400 = 3% of reallocations.)*

Next: [practice questions](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-practice/).
