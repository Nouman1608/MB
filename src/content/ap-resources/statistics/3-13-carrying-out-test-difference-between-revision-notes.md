---
resourceId: "mb-ap-stats-3.13-revision-notes"
title: "Carrying Out a Test for the Difference Between Two Population Proportions: Revision Notes (Statistics 3.13)"
description: "One-page recap of the pooled proportion, the two-sample z statistic, p-values, decisions and conclusions for a difference in proportions, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.13"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.13-study-guide"]
learningObjectives:
  - "Recall the pooled proportion, the test statistic and the p-value rules for a two-sample z-test for proportions"
  - "Spot the common errors in calculations, p-value interpretations and conclusions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "2-PropZTest gives z, the p-value and p̂c. Round z to 2 decimal places and p-values to 4."
related: ["mb-ap-stats-3.13-study-guide", "mb-ap-stats-3.13-practice", "mb-ap-stats-3.13-checklist"]
next: "mb-ap-stats-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Pool the samples: p̂c = (x₁ + x₂) / (n₁ + n₂)."
  - "The tail of the p-value comes from Hₐ, not from the sign of z."
  - "Conclude about the true proportions, in context, in terms of Hₐ, without claiming proof."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/).

## Recap

- A full test has four parts: **hypotheses** (with p₁ and p₂ defined in context and α stated), **method and conditions**, **calculations**, **conclusion**.
- The test is calculated **assuming H₀: p₁ = p₂ is true**, so both samples estimate one common proportion. That is why the samples are pooled.
- If H₀ is true and the conditions hold, z is approximately **standard normal**.
- The p-value is the probability, assuming the true proportions are equal, of a difference in sample proportions at least as extreme as the one observed, in the direction of Hₐ.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Sample proportions | p̂₁ = x₁ / n₁, p̂₂ = x₂ / n₂ |
| Pooled proportion | p̂c = (x₁ + x₂) / (n₁ + n₂) |
| Test statistic | z = (p̂₁ − p̂₂ − 0) / √[p̂c(1 − p̂c)(1/n₁ + 1/n₂)] |
| p-value, Hₐ: p₁ > p₂ | P(Z ≥ z) |
| p-value, Hₐ: p₁ < p₂ | P(Z ≤ z) |
| p-value, Hₐ: p₁ ≠ p₂ | 2 × P(Z ≥ \|z\|) |
| Decision | p-value ≤ α: reject H₀; p-value > α: fail to reject H₀ |

## Assumptions and conventions

- Conditions (from Topic 3.12): random samples or random assignment; each sample ≤ 10% of its population when sampling without replacement (not needed for an experiment); n₁p̂c, n₁(1 − p̂c), n₂p̂c, n₂(1 − p̂c) all at least 10.
- α is chosen **before** the data are seen; 0.05 is the usual default if none is given.
- Independent random samples support conclusions about **populations**; random assignment supports **cause and effect** for the treatments.

## Mistakes to avoid

1. **Averaging p̂₁ and p̂₂** instead of pooling the counts (wrong unless n₁ = n₂).
2. **Using the unpooled standard error**, which belongs to the confidence interval.
3. **Wrong tail**, or forgetting to double for a two-sided test.
4. **A p-value interpretation with no assumption.** Say "assuming the true proportions are equal".
5. **"Accept H₀"** or "the proportions are the same".
6. **Conclusions about p̂₁ and p̂₂** instead of the true proportions.
7. **No linkage:** state the p-value and α together with the decision.

## Quick self-check

1. Group 1 has 30 successes out of 80; group 2 has 54 out of 120. What is p̂c? *(84 ÷ 200 = 0.42, not the average of 0.375 and 0.45, which is 0.4125)*
2. For Hₐ: p₁ > p₂, z = 1.80. What is the p-value? What would it be for Hₐ: p₁ ≠ p₂? *(0.0359; 0.0719)*
3. A p-value is 0.0359 and α = 0.01. What is the decision? *(Fail to reject H₀, because 0.0359 > 0.01. There is not convincing evidence for Hₐ.)*

Next: [practice questions](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-practice/).
