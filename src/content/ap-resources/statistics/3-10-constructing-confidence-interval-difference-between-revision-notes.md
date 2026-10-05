---
resourceId: "mb-ap-stats-3.10-revision-notes"
title: "Constructing a Confidence Interval for the Difference Between Two Population Proportions: Revision Notes (Statistics 3.10)"
description: "One-page recap of the two-sample z-interval for p1 − p2: the parameter, the three conditions, standard error, margin of error, reading an interval and the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.10-study-guide"]
learningObjectives:
  - "Recall the steps, formulas and conditions for a two-sample z-interval for a difference in proportions"
  - "Spot the common errors in difference-of-proportions intervals before making them"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Check with a two-proportion z-interval function. Do not pool the proportions."
related: ["mb-ap-stats-3.10-study-guide", "mb-ap-stats-3.10-practice", "mb-ap-stats-3.10-checklist"]
next: "mb-ap-stats-3.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Identify, define, check, calculate: name the two-sample z-interval and define p1 − p2 in context first."
  - "SE = √[p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2]; interval = (p̂1 − p̂2) ± z* × SE."
  - "Four observed counts, all at least 10."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/).

## Recap

- To estimate how far apart two population proportions are, use a **two-sample z-interval for a difference between population proportions**.
- Define the parameter with the **difference** (order stated), the **response** and **both populations** (or both treatments).
- The interval has the shape **point estimate ± margin of error**, with point estimate **p̂1 − p̂2**.
- Interpreting the interval and using it to judge a claim come next, in Topic 3.11.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Point estimate | p̂1 − p̂2, with p̂1 = x1/n1 and p̂2 = x2/n2 |
| Standard error | SE = √[p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2] |
| Critical value | z* = invNorm((1 + C)/2): 1.645 (90%), 1.960 (95%), 2.576 (99%) |
| Margin of error | MOE = z* × SE |
| Interval | (p̂1 − p̂2) ± MOE |
| From an interval (a, b) | point estimate = (a + b)/2; MOE = (b − a)/2; SE = MOE ÷ z* |
| Reverse the order | interval (a, b) becomes (−b, −a); width unchanged |

## Conditions (in context, with numbers)

1. **Randomization:** two independent random samples, or a randomized experiment.
2. **10%:** n1 ≤ 0.10N1 and n2 ≤ 0.10N2 when sampling without replacement. Not needed for an experiment.
3. **Normality:** n1p̂1, n1(1 − p̂1), n2p̂2 and n2(1 − p̂2) are all at least 10 (observed successes and failures).

## Mistakes to avoid

1. **Pooling** the two proportions. That is for tests, not intervals.
2. **Defining the parameter with the samples** or leaving out the order of subtraction.
3. **Checking two counts, or n ≥ 30,** instead of four observed counts.
4. **Applying the 10% condition to an experiment.**
5. **Adding standard errors** instead of adding the variance terms under one root.
6. **Using invNorm(C)** for z*; use (1 + C)/2.
7. **Rounding p̂1 and p̂2 early**, which moves the endpoints.

## Quick self-check

1. Independent random samples: 60 of 100 and 45 of 100 are successes. Find the 95% interval for p1 − p2. *(Point estimate 0.15, SE ≈ 0.0698, MOE ≈ 0.137, interval (0.013, 0.287))*
2. A 90% interval for p1 − p2 is (0.04, 0.16). Find the point estimate and the margin of error. *(0.10 and 0.06)*
3. One group has 9 failures. Can you use the z-interval? *(No: the normality condition needs at least 10 failures in each group.)*

Next: [practice questions](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-practice/).
