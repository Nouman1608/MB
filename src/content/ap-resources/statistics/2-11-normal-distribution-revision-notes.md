---
resourceId: "mb-ap-stats-2.11-revision-notes"
title: "The Normal Distribution: Revision Notes (Statistics 2.11)"
description: "One-page recap of continuous random variables, normal curves, the standard normal distribution, the 68–95–99.7 rule, areas, boundary values and percentiles, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.11"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.11-study-guide"]
learningObjectives:
  - "Recall the features of a normal distribution, the empirical rule and the standardising formula"
  - "Spot the common errors in normal-distribution questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "normalcdf(lower, upper, μ, σ) for areas; invNorm(area to the left, μ, σ) for boundaries."
related: ["mb-ap-stats-2.11-study-guide", "mb-ap-stats-2.11-practice", "mb-ap-stats-2.11-checklist"]
next: "mb-ap-stats-2.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Probability for a continuous variable = area under the curve over an interval; total area = 1."
  - "N(μ, σ): the second number is the standard deviation."
  - "Sketch, shade and label before you calculate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/).

## Recap

- A **continuous random variable** can take any value in an interval. Intervals have probabilities; a single exact value has probability 0.
- A **normal curve** is continuous, unimodal, symmetric and bell-shaped. It can model a data distribution or a random variable.
- It is fixed by **μ** (centre) and **σ** (spread). Smaller σ: taller and more concentrated. Larger σ: shorter and more spread out.
- The **standard normal** distribution is N(0, 1).
- **Percentiles** from a normal model let you compare positions within or between distributions.

## Key relationships

| Idea | Rule |
|---|---|
| Standardise | z = (x − μ) / σ; back again: x = μ + zσ |
| Empirical rule | about 68%, 95%, 99.7% within 1, 2, 3 σ of μ |
| Strips (one side) | 34%, 13.5%, 2.35%, 0.15% |
| Interval probability | P(a < X < b) = normalcdf(a, b, μ, σ) |
| Lowest p% | P(X < xₐ) = p/100 |
| Highest p% | P(X > x_b) = p/100, so area to the left is 1 − p/100 |
| Middle p% | (1 − p/100)/2 in each tail |
| Most extreme p% | ½(p/100) in each tail |

## Assumptions and conventions

- Use a normal model only when the variable is roughly unimodal and symmetric. Check the context: can the values go below 0?
- A z-table gives the area to the **left** of z, with z to 2 decimal places. Table and technology answers may differ slightly.
- Show four things: distribution and parameters, boundary, direction (sketch), answer.

## Mistakes to avoid

1. **Dividing by σ²** instead of σ in a z-score.
2. **Wrong tail:** forgetting 1 − area for "more than" or "highest".
3. **Putting the whole "most extreme p%" in one tail.**
4. **Quoting the empirical rule as exact.** Say "about".
5. **A bare calculator command** with no labels or context.
6. **Comparing raw values** from different distributions instead of percentiles.

## Quick self-check

X ~ N(40, 5).

1. Use the empirical rule to estimate the percentage of values above 50. *(50 is μ + 2σ, so about 2.5%)*
2. Find P(X < 33). *(z = −1.4; 0.0808)*
3. Find the value that separates the top 20% from the rest. *(area to the left 0.80, z = 0.8416, x = 44.21)*

Next: [practice questions](/advanced-course-resources/statistics/2-11-normal-distribution-practice/).
