---
resourceId: "mb-ap-stats-4.10-revision-notes"
title: "Carrying Out a Test for the Difference Between Two Population Means: Revision Notes (Statistics 4.10)"
description: "One-page recap of the two-sample t-test: test statistic, degrees of freedom, p-value, its interpretation, the decision and a conclusion in context, with the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.10-study-guide"]
learningObjectives:
  - "Recall the two-sample t-statistic, the degrees of freedom range and how the p-value depends on Hₐ"
  - "Write a p-value interpretation and a conclusion without the common errors"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Two-sample t-test, not pooled."
related: ["mb-ap-stats-4.10-study-guide", "mb-ap-stats-4.10-practice", "mb-ap-stats-4.10-checklist"]
next: "mb-ap-stats-4.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "t = (x̄₁ − x̄₂ − 0) / √(s₁²/n₁ + s₂²/n₂)."
  - "p-value ≤ α: reject H₀. p-value > α: fail to reject H₀."
  - "Conclude about Hₐ, in context, with 'convincing evidence'."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/).

## Recap

- **Do:** calculate t and the p-value. **Conclude:** compare the p-value with α and answer the question in context.
- The t-statistic counts how many standard errors x̄₁ − x̄₂ is from the null value 0.
- The p-value assumes H₀ (equal population means) is true.
- Random samples allow generalising to the populations; random assignment allows cause and effect.

## Key relationships

| Item | Rule |
|---|---|
| Standard error | SE = √(s₁²/n₁ + s₂²/n₂) |
| Test statistic | t = ((x̄₁ − x̄₂) − 0) / SE |
| Degrees of freedom | From technology; between min(n₁ − 1, n₂ − 1) and n₁ + n₂ − 2 |
| Conservative df | min(n₁ − 1, n₂ − 1): gives a slightly larger p-value |
| Hₐ: μ₁ − μ₂ > 0 | p-value = P(t ≥ observed t) |
| Hₐ: μ₁ − μ₂ < 0 | p-value = P(t ≤ observed t) |
| Hₐ: μ₁ − μ₂ ≠ 0 | p-value = 2 × P(t ≥ \|observed t\|) |
| Decision | p-value ≤ α: reject H₀; p-value > α: fail to reject H₀ |

## Templates

- **p-value:** "Assuming the true mean [response] of [group 1] and [group 2] are equal, there is a [p] probability of getting a difference in sample means of [observed] or more extreme [in the direction of Hₐ] by chance alone."
- **Conclusion:** "Because [p] ≤ (>) [α], we reject (fail to reject) H₀. There is (not) convincing evidence that the mean [response] of [population 1] is [greater than / less than / different from] that of [population 2]."

## Mistakes to avoid

1. **p-value = probability H₀ is true.** It assumes H₀ is true.
2. **"Accept H₀" or "the means are equal."**
3. **"Proves."** Use "convincing evidence".
4. **Not doubling** for a two-sided test.
5. **df = n₁ + n₂ − 2** or pooling.
6. **Comparing t, not the p-value, with α.**
7. **Causal claims from random samples.**

## Quick self-check

1. x̄₁ − x̄₂ = 3.0 and SE = 1.2. What is t? *(t = 3.0 ÷ 1.2 = 2.5)*
2. Samples of 15 and 22. What are the conservative df and the largest possible df? *(14 and 35)*
3. p-value = 0.074, α = 0.05, Hₐ: μ₁ ≠ μ₂. Decision? *(0.074 > 0.05, fail to reject H₀: not convincing evidence that the population means differ.)*

Next: [practice questions](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-practice/).
