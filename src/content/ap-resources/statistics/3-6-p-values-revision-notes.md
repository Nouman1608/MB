---
resourceId: "mb-ap-stats-3.6-revision-notes"
title: "p-Values: Revision Notes (Statistics 3.6)"
description: "One-page recap of p-values for a test about a proportion: the null distribution, which tail to use for each alternative, simulated p-values and a model interpretation."
course: "statistics"
unit: 3
topics: ["3.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.6-study-guide"]
learningObjectives:
  - "Recall how to find a p-value for each type of alternative hypothesis"
  - "Write a correct interpretation of a p-value and avoid common misstatements"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "normalcdf(lower, upper, 0, 1); use ±99 for an open end."
related: ["mb-ap-stats-3.6-study-guide", "mb-ap-stats-3.6-practice", "mb-ap-stats-3.6-checklist"]
next: "mb-ap-stats-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A p-value is calculated assuming H₀ is true."
  - "The tail follows the direction of Hₐ; a two-sided test uses both tails."
  - "Small p-value: evidence for Hₐ. Not small: no convincing evidence for Hₐ, and no evidence for H₀."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-6-p-values-study-guide/).

## Recap

- The **null distribution** is the distribution of the test statistic when H₀ is true. Get it by simulation, or use the standard normal model when the conditions are met.
- The **p-value** is the probability, assuming H₀ is true, of a test statistic as extreme as the observed one or more extreme, in the direction of Hₐ.
- **Small** p-value: the result would be unusual if H₀ were true, so it is evidence for Hₐ. Smaller means more convincing.
- **Not small**: the result is not unusual under H₀. There is no convincing evidence for Hₐ, but this is **not** evidence that H₀ is true.

## Key relationships

| Alternative | Normal model (observed z) | Simulation (observed statistic) |
|---|---|---|
| Hₐ: p > p₀ | P(Z ≥ z) | proportion of simulated values at or above it |
| Hₐ: p < p₀ | P(Z ≤ z) | proportion of simulated values at or below it |
| Hₐ: p ≠ p₀ | P(Z ≤ −\|z\|) + P(Z ≥ \|z\|) = 2P(Z ≥ \|z\|) | proportion at least as far from p₀ as it, on either side |

**Interpretation template:** "Assuming the true proportion of [population] who [response] is [p₀], there is a [p-value] probability of getting a sample proportion of [p̂] or [more extreme, in the direction of Hₐ] in a random sample of [n], by chance alone."

## Assumptions and conventions

- The normal-model p-value needs the conditions from Topic 3.5 (random, 10%, np₀ and n(1 − p₀) at least 10).
- A simulated p-value is an estimate; another simulation gives a slightly different value.
- "At least as extreme" includes the observed value itself.

## Mistakes to avoid

1. **No assumption** in the interpretation. Start with "Assuming the true proportion … is p₀".
2. **"The probability that H₀ is true"**: the p-value is not this.
3. **Wrong tail**: follow the inequality in Hₐ, not the sign of z.
4. **One tail only** for a two-sided test.
5. **"A large p-value proves H₀"**: say the evidence is not convincing instead.
6. **"1 − p-value = probability Hₐ is true"**: no.

## Quick self-check

1. Hₐ: p < p₀ and z = −0.85. Find the p-value. *(P(Z ≤ −0.85) ≈ 0.1977)*
2. Hₐ: p ≠ p₀ and z = 2.05. Find the p-value. *(2 × P(Z ≥ 2.05) ≈ 0.0404)*
3. Hₐ: p > p₀. In 250 simulated samples under H₀, 9 have p̂ at or above the observed value. Estimate the p-value. *(9 ÷ 250 = 0.036)*

Next: [practice questions](/advanced-course-resources/statistics/3-6-p-values-practice/).
