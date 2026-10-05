---
resourceId: "mb-ap-stats-3.9-revision-notes"
title: "Sampling Distributions for the Difference Between Sample Proportions: Revision Notes (Statistics 3.9)"
description: "One-page recap of the mean and standard deviation of p̂1 − p̂2, the randomization, 10% and large-counts conditions, normal probabilities and the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.9-study-guide"]
learningObjectives:
  - "Recall the mean, standard deviation and conditions for the sampling distribution of p̂1 − p̂2"
  - "Spot the common errors in difference-of-proportions questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf for probabilities. Add the two variances, then take one square root."
related: ["mb-ap-stats-3.9-study-guide", "mb-ap-stats-3.9-practice", "mb-ap-stats-3.9-checklist"]
next: "mb-ap-stats-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Mean of p̂1 − p̂2 is p1 − p2; it is an unbiased estimator."
  - "Standard deviation: √[p1(1 − p1)/n1 + p2(1 − p2)/n2]. Variances add."
  - "Four expected counts, all at least 10, for a normal model."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/).

## Recap

- To compare two groups, estimate **p1 − p2** with the statistic **p̂1 − p̂2**.
- p̂1 − p̂2 changes from one pair of samples to the next. Its distribution over all possible pairs of samples is its **sampling distribution**.
- State the **order of subtraction** (for example, "town A − town B") and keep it throughout.
- Interpret every value for the **two named populations**, the variable and the sample sizes.

## Key relationships

| Quantity | Formula or rule |
|---|---|
| Mean | μ(p̂1 − p̂2) = p1 − p2 |
| Standard deviation | σ(p̂1 − p̂2) = √[p1(1 − p1)/n1 + p2(1 − p2)/n2] |
| Size of the standard deviation | larger than the standard deviation of either p̂ alone; smaller than their sum |
| Both sample sizes × 4 | standard deviation ÷ 2 |
| Swap the order of subtraction | mean changes sign; standard deviation unchanged |
| z-score | z = [(p̂1 − p̂2) − (p1 − p2)] / σ(p̂1 − p̂2) |

## Conditions (in context, with numbers)

1. **Randomization:** two independent random samples, or treatments randomly assigned in an experiment.
2. **10%:** when sampling without replacement, n1 ≤ 0.10N1 and n2 ≤ 0.10N2. Not needed for an experiment.
3. **Large counts:** n1p1, n1(1 − p1), n2p2 and n2(1 − p2) are all at least 10. This gives an approximately normal shape.

The mean and standard deviation formulas need only independence. The normal shape needs large counts.

## Mistakes to avoid

1. **Adding or subtracting standard deviations** instead of adding variances.
2. **Subtracting the variances** because the proportions are subtracted.
3. **Checking only two counts** instead of four.
4. **Checking the 10% condition for an experiment**, or forgetting it for samples.
5. **Using one combined sample size** n1 + n2 in the formula.
6. **No order of subtraction**, so the sign of the mean is unclear.
7. **"A small probability proves the claim is false."** It only gives reason to doubt it.

## Quick self-check

1. p1 = 0.5, n1 = 100, p2 = 0.4, n2 = 150. Find the mean and standard deviation of p̂1 − p̂2. *(Mean 0.1; standard deviation √(0.0025 + 0.0016) = √0.0041 ≈ 0.0640)*
2. An experiment randomly assigns volunteers to two treatments. Which conditions do you check? *(Randomization, by random assignment, and large counts. Not the 10% condition.)*
3. Both sample sizes are multiplied by 4. What happens to the standard deviation of p̂1 − p̂2? *(It is divided by √4 = 2, so it halves.)*

Next: [practice questions](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-practice/).
