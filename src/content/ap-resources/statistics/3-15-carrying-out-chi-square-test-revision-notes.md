---
resourceId: "mb-ap-stats-3.15-revision-notes"
title: "Carrying Out a Chi-Square Test for Homogeneity or Independence: Revision Notes (Statistics 3.15)"
description: "One-page recap of expected counts, the chi-square statistic, degrees of freedom, right-tail p-values and conclusions for homogeneity and independence tests, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.15"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.15-study-guide"]
learningObjectives:
  - "Recall the formulas for expected counts, the chi-square statistic and its degrees of freedom"
  - "Spot the common errors in carrying out and concluding a chi-square test before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Enter observed counts as a matrix and use the chi-square test function. Round χ² to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-3.15-study-guide", "mb-ap-stats-3.15-practice", "mb-ap-stats-3.15-checklist"]
next: "mb-ap-stats-3.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Expected count = row total × column total ÷ table total."
  - "χ² = Σ (O − E)² ÷ E over all cells; df = (r − 1)(c − 1)."
  - "The p-value is always the right-tail area beyond χ²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/).

## Recap

- A chi-square test compares **observed counts** with the **expected counts** you would see if H₀ were true.
- The calculations are identical for the test for **homogeneity** (one variable, several populations or treatments) and the test for **independence** (two variables, one population). Only the hypotheses, the randomization condition and the conclusion wording differ.
- Large χ² means the data are far from H₀, so only the **right tail** counts as evidence against H₀.
- Interpret the p-value **assuming H₀ is true**, in context. Decide by comparing the p-value with α.

## Key relationships

| Quantity | How to find it | Notes |
|---|---|---|
| Expected count | (row total × column total) ÷ table total | Keep decimals; rows and columns add to the observed totals |
| Component | (observed − expected)² ÷ expected | Never negative; one per cell |
| χ² statistic | sum of the components over every cell | Use counts, not percentages; leave out totals |
| Degrees of freedom | (rows − 1)(columns − 1) | Category rows and columns only |
| p-value | P(χ² ≥ observed value) for that df | Table gives a range; technology gives a value |
| Decision | p-value ≤ α: reject H₀; p-value > α: fail to reject H₀ | Quote both numbers |

## Assumptions and conditions

- **Randomization:** independent random samples or a randomized experiment (homogeneity); one random sample (independence).
- **10% condition:** n ≤ 10% of N for each sample taken without replacement; not needed for a randomized experiment.
- **Expected counts:** **all** expected counts greater than 5.
- When H₀ is true and these hold, χ² follows approximately a chi-square distribution with (r − 1)(c − 1) degrees of freedom.

## Conclusion templates

- **Homogeneity:** "Because the p-value of … is less than α = …, we reject H₀. There is convincing statistical evidence that the distribution of [variable] differs across [populations]."
- **Independence:** "Because the p-value of … is greater than α = …, we fail to reject H₀. There is not convincing statistical evidence of an association between [variable 1] and [variable 2] in [population]."

## Mistakes to avoid

1. **Percentages in the formula** instead of counts.
2. **Rounding expected counts** to whole numbers.
3. **df = r × c** or **(r × c) − 1** instead of (r − 1)(c − 1).
4. **Left tail or doubled p-value.** It is always the right tail.
5. **Checking observed counts** for the "greater than 5" condition instead of expected counts.
6. **"Accept H₀"** or "this proves the variables are independent".
7. **A conclusion with no population**, or homogeneity wording for an independence test.

## Quick self-check

1. A two-way table has 150 individuals. A cell's row total is 60 and its column total is 45. What is its expected count? *(60 × 45 ÷ 150 = 18)*
2. What are the degrees of freedom for a table with 3 rows and 4 columns of categories? *((3 − 1)(4 − 1) = 6)*
3. A cell has observed count 12 and expected count 20. What is its component of χ²? *((12 − 20)² ÷ 20 = 3.2)*

Next: [practice questions](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-practice/).
