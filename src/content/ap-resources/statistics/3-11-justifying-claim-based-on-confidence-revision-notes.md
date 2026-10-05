---
resourceId: "mb-ap-stats-3.11-revision-notes"
title: "Justifying a Claim Based on a Confidence Interval for Two Proportions: Revision Notes (Statistics 3.11)"
description: "One-page recap of interpreting a confidence interval and confidence level for p₁ − p₂, and using 0 and the endpoint signs to judge claims, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.11"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.11-study-guide"]
learningObjectives:
  - "Recall the templates for interpreting an interval and a confidence level for a difference in proportions"
  - "Decide quickly what an interval for p₁ − p₂ says about a claim"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "z* = invNorm((1 + C)/2): 1.645 (90%), 1.960 (95%), 2.576 (99%)."
related: ["mb-ap-stats-3.11-study-guide", "mb-ap-stats-3.11-practice", "mb-ap-stats-3.11-checklist"]
next: "mb-ap-stats-3.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics"]
keyPoints:
  - "Interval contains 0: not convincing evidence of a difference."
  - "Interval excludes 0: convincing evidence of a difference; the signs show the direction."
  - "Always state the order of subtraction and both populations."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/).

## Recap

- The parameter p₁ − p₂ is a **fixed** number. The interval changes from sample to sample, so one interval **may or may not** capture it.
- **Interval:** "We are C% confident that the interval from a to b captures the difference (population 1 − population 2) in the proportions of all [individuals] who [response]."
- **Confidence level:** "In repeated random sampling with the same sample sizes from the same populations, about C% of intervals built this way would capture the true difference p₁ − p₂."
- For an experiment, the populations are the **treatments**: "the proportion of subjects like these who would [respond] with treatment 1, minus with treatment 2".

## Key relationships

| The interval | Conclusion about p₁ − p₂ |
|---|---|
| Contains 0 | 0 is plausible: **not convincing evidence** of a difference (not proof of no difference) |
| All values positive | Convincing evidence of a difference, with **p₁ > p₂** |
| All values negative | Convincing evidence of a difference, with **p₁ < p₂** |
| Claimed difference d inside | d is plausible: no convincing evidence against the claim |
| Claimed difference d outside | Convincing evidence against the claim that p₁ − p₂ = d |
| Order reversed | Signs flip and endpoints swap; same conclusion |
| Higher confidence level | Larger z*, wider interval: a borderline conclusion can change |

## Assumptions and conventions

- The interval was built correctly (Topic 3.10): random samples or random assignment, 10% condition for sampling, at least 10 observed successes and failures in each group.
- Endpoints are differences in proportions. In words, use **percentage points**.
- Random sampling allows generalising to the populations. Only random assignment allows a cause-and-effect conclusion.

## Mistakes to avoid

1. **"95% probability that p₁ − p₂ is in the interval."** Use "95% confident"; the 95% is about the method.
2. **"Contains 0, so the proportions are equal."** Plausible is not proved.
3. **No order of subtraction**, so the sign has no meaning.
4. **Talking about the samples** instead of the populations or treatments.
5. **Judging from the point estimate alone** instead of the whole interval.
6. **Claiming cause** from independent random samples.
7. **Choosing the confidence level after seeing the data.**

## Quick self-check

1. A 95% interval for p₁ − p₂ is (0.03, 0.11). Is there convincing evidence of a difference? *(Yes: 0 is not in the interval; every value is positive, so p₁ > p₂.)*
2. A 95% interval is (−0.05, 0.02). What can you conclude? *(It contains 0, so there is not convincing evidence of a difference. It does not show the proportions are equal.)*
3. Rewrite (0.04, 0.10) for p₂ − p₁. *((−0.10, −0.04))*
4. Using (0.03, 0.11), is a claimed difference of 8 percentage points plausible? *(Yes: 0.08 is inside the interval.)*

Next: [practice questions](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-practice/).
