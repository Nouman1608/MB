---
resourceId: "mb-ap-stats-3.3-revision-notes"
title: "Constructing a Confidence Interval for a Population Proportion: Revision Notes (Statistics 3.3)"
description: "One-page recap of the one-sample z-interval for a proportion: parameter, conditions, critical values, standard error, margin of error and sample size, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.3-study-guide"]
learningObjectives:
  - "Recall the one-sample z-interval for a proportion, its conditions and the sample-size formula"
  - "Spot the common errors in confidence-interval questions before making them"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "z* = invNorm((1 + C)/2). Give endpoints to 3 decimal places; round sample sizes up."
related: ["mb-ap-stats-3.3-study-guide", "mb-ap-stats-3.3-practice", "mb-ap-stats-3.3-checklist"]
next: "mb-ap-stats-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interval: p̂ ± z* √[p̂(1 − p̂)/n]."
  - "Three conditions: random, 10%, at least 10 observed successes and failures."
  - "Margin of error = half the width; round sample sizes up."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/).

## Recap

- A **confidence interval** is an interval estimate: a range of plausible values for a population parameter, built from one sample.
- For one population proportion, the procedure is the **one-sample z-interval for a population proportion**.
- Define the parameter with three parts: the **proportion**, the **response** (what counts as a success) and the **population**.
- Every interval has the shape **point estimate ± margin of error**.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Point estimate | p̂ = x / n (x = number of successes) |
| Standard error | SE(p̂) = √[p̂(1 − p̂)/n] |
| Critical value | z* = invNorm((1 + C)/2): 1.645 (90%), 1.960 (95%), 2.576 (99%) |
| Margin of error | MOE = z* × SE |
| Interval | p̂ ± MOE |
| From an interval (a, b) | p̂ = (a + b)/2; MOE = (b − a)/2 |
| Sample size for a chosen MOE | n = (z*/MOE)² × p̂(1 − p̂), rounded **up**; use p̂ = 0.5 if no estimate |

## Conditions to check (in context, with numbers)

1. **Random:** say how the sample was chosen at random.
2. **10%:** when sampling without replacement, n ≤ 0.10N.
3. **Large counts:** np̂ ≥ 10 **and** n(1 − p̂) ≥ 10, using the observed successes and failures.

## Mistakes to avoid

1. **Calling p̂ the parameter**, or defining p as a proportion of the sample.
2. **Writing "SRS ✓"** with no link to the context.
3. **Using n ≥ 30** for the normality check instead of the success and failure counts.
4. **Using invNorm(C)**: for 90% this gives 1.282, the 80% value.
5. **Confusing MOE and width**: width = 2 × MOE.
6. **Rounding n down** in a sample-size question.
7. **Rounding p̂ early**, which shifts the endpoints.

## Quick self-check

1. In a random sample of 150 adults, 60 say yes. Find the 95% interval. *(p̂ = 0.4, SE = 0.04, MOE = 1.960 × 0.04 = 0.078, interval (0.322, 0.478))*
2. A 90% interval is (0.55, 0.63). What are p̂ and the margin of error? *(p̂ = 0.59, MOE = 0.04)*
3. What sample size gives a 95% margin of error of at most 0.04 with no prior estimate? *(n = (1.960/0.04)² × 0.25 = 600.25, so 601)*

Next: [practice questions](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-practice/).
