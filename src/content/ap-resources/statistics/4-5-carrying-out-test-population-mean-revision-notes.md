---
resourceId: "mb-ap-stats-4.5-revision-notes"
title: "Carrying Out a Test for a Population Mean or Population Mean Difference: Revision Notes (Statistics 4.5)"
description: "One-page recap of the one-sample t-test for a mean or mean difference: test statistic, degrees of freedom, p-value, decision rule and conclusion wording, with the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.5-study-guide"]
learningObjectives:
  - "Recall the t test statistic, its degrees of freedom and how the p-value depends on the alternative hypothesis"
  - "Spot the common errors in calculating, interpreting and concluding a t-test before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the T-Test function or a t cdf with df = n − 1, never the normal distribution."
related: ["mb-ap-stats-4.5-study-guide", "mb-ap-stats-4.5-practice", "mb-ap-stats-4.5-checklist"]
next: "mb-ap-stats-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "t = (x̄ − μ₀) / (s / √n), df = n − 1. Matched pairs: the same formula on the differences."
  - "p-value: the tail area in the direction of Hₐ, from the t-distribution, calculated assuming H₀ is true."
  - "p-value ≤ α: reject H₀. p-value > α: fail to reject H₀. Never accept or prove H₀."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/).

## Recap

- A full test has four parts: **hypotheses**, **method and conditions**, **calculations**, **conclusion**.
- The **test statistic** t says how many standard errors x̄ is from μ₀.
- If H₀ is true and the conditions hold, t follows a **t-distribution with n − 1 degrees of freedom**.
- The **p-value** is the probability, assuming H₀ is true, of a test statistic at least as extreme as the observed one, in the direction of Hₐ.
- The conclusion is about the **parameter** (μ or μd) and the **population**, never about x̄.

## Key relationships

| Item | One-sample mean | Matched pairs |
|---|---|---|
| Test statistic | t = (x̄ − μ₀) / (s / √n) | t = (x̄d − 0) / (sd / √n) |
| n | sample size | number of pairs (differences) |
| Degrees of freedom | n − 1 | n − 1 |
| Hₐ with > | p-value = P(T ≥ t) | same |
| Hₐ with < | p-value = P(T ≤ t) | same |
| Hₐ with ≠ | p-value = 2 × P(T ≥ \|t\|) | same |
| Decision | p-value ≤ α: reject H₀; p-value > α: fail to reject H₀ | same |

## Assumptions and conventions

- σ is unknown, so the standard error uses s and the p-value uses a t-distribution.
- The conditions from Topic 4.4 must hold: random sample or randomized experiment; n ≤ 10% of N when sampling without replacement; normal population, n ≥ 30, or no strong skew or outliers in the sample (of differences).
- A t-table gives a range for the p-value. If your df is missing, use the next smaller df.
- If no α is given, use 0.05 and say so.

## Mistakes to avoid

1. **Using z or the normal curve** instead of the t-distribution.
2. **df = n**, or counting both measurements in each pair.
3. **Wrong tail** or **not doubling** for a two-sided test.
4. **"The p-value is the probability that H₀ is true."** It is calculated assuming H₀ is true.
5. **"Accept H₀"** or "proves". Use "fail to reject" and "convincing evidence".
6. **No linkage:** compare the p-value with α, using both numbers.
7. **Concluding about x̄** instead of the true mean of the population.

## Quick self-check

1. A random sample of 16 gives x̄ = 81.5 and s = 6. Find t for H₀: μ = 78. *(t = 3.5 / (6 / 4) ≈ 2.33, df = 15)*
2. For Hₐ: μ > μ₀, t = 2.05 and n = 25. Find the p-value. *(P(T ≥ 2.05) with df = 24 ≈ 0.0257)*
3. A test gives p-value = 0.08 with α = 0.05. What is the decision? *(Fail to reject H₀: there is not convincing evidence for Hₐ)*

Next: [practice questions](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-practice/).
