---
resourceId: "mb-ap-stats-3.7-revision-notes"
title: "Carrying Out a Test for a Population Proportion: Revision Notes (Statistics 3.7)"
description: "One-page recap of the one-proportion z-test: test statistic, p-value for each alternative, comparison with α, and a conclusion in context, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.7-study-guide"]
learningObjectives:
  - "Recall the test statistic, the p-value rule for each alternative and the decision rule"
  - "Spot the common errors in a one-proportion significance test before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use 1-PropZTest or a normal cdf for the p-value, but show the formula with numbers substituted."
related: ["mb-ap-stats-3.7-study-guide", "mb-ap-stats-3.7-practice", "mb-ap-stats-3.7-checklist"]
next: "mb-ap-stats-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "z = (p̂ − p₀) / √[p₀(1 − p₀) / n], with p₀ in the standard error."
  - "p-value ≤ α: reject H₀. p-value > α: fail to reject H₀."
  - "Conclude about the true proportion, in context and in terms of Hₐ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/).

## Recap

- A full test has four parts: **hypotheses** (with p defined in context and α), **method and conditions**, **calculations**, **conclusion**.
- The method is a **one-sample z-test for a population proportion**.
- The **test statistic** z tells you how many standard errors p̂ is from p₀, assuming H₀ is true.
- If H₀ is true and the conditions hold, z has approximately a **standard normal** distribution (the null distribution).
- The **significance level α** is chosen before collecting data. It is the probability of rejecting H₀ when H₀ is true.

## Key relationships

| Item | Rule |
|---|---|
| Sample proportion | p̂ = x / n |
| Test statistic | z = (p̂ − p₀) / √[p₀(1 − p₀) / n] |
| p-value, Hₐ: p > p₀ | P(Z ≥ z), right tail |
| p-value, Hₐ: p < p₀ | P(Z ≤ z), left tail |
| p-value, Hₐ: p ≠ p₀ | 2 × P(Z ≥ \|z\|), both tails |
| Decision | p-value ≤ α → reject H₀; p-value > α → fail to reject H₀ |
| Reject H₀ means | convincing statistical evidence for Hₐ |
| Fail to reject H₀ means | not convincing statistical evidence for Hₐ (not evidence for H₀) |

## Assumptions and conventions

- Conditions (from Topic 3.5): random sample; n ≤ 10% of N when sampling without replacement; np₀ ≥ 10 and n(1 − p₀) ≥ 10.
- If no α is given, use 0.05 and say so.
- Round z to 2 decimal places and the p-value to 4. Find the p-value with a table or technology.
- Conclusion template: "Because the p-value of ___ is (less / greater) than α = ___, we (reject / fail to reject) H₀. There is (convincing / not convincing) statistical evidence that the true proportion of ___ is (less than / greater than / different from) ___."

## Mistakes to avoid

1. **p̂ in the standard error.** Tests use p₀.
2. **Wrong tail.** The direction comes from Hₐ, not from the sign of z.
3. **Not doubling** for a two-sided alternative.
4. **"Accept H₀"** or "prove". Say "fail to reject".
5. **No linkage.** Name the p-value and α in the decision sentence.
6. **Concluding about p̂** instead of the population proportion p.
7. **Changing α** after seeing the p-value.

## Quick self-check

1. n = 80, x = 36, H₀: p = 0.35, Hₐ: p > 0.35. Find z and the p-value. *(p̂ = 0.45, z ≈ 1.88, p-value ≈ 0.0304)*
2. z = −2.10 and Hₐ: p ≠ p₀. What is the p-value? *(2 × P(Z ≥ 2.10) ≈ 0.0357)*
3. In question 1, what is the decision at α = 0.01? *(0.0304 > 0.01, so fail to reject H₀: not convincing evidence that p > 0.35)*

Next: [practice questions](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-practice/).
