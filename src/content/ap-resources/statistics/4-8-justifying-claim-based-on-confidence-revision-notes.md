---
resourceId: "mb-ap-stats-4.8-revision-notes"
title: "Justifying a Claim With a Confidence Interval for Two Means: Revision Notes (Statistics 4.8)"
description: "One-page recap of interpreting a confidence interval for μ₁ − μ₂ and its confidence level, and using the interval and the value 0 to justify claims, with the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.8-study-guide"]
learningObjectives:
  - "Recall the templates for interpreting an interval and a confidence level for μ₁ − μ₂"
  - "Recall how the position of 0 and of a claimed value decides a claim"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Keep the order of subtraction fixed; reversing it changes (a, b) into (−b, −a)."
related: ["mb-ap-stats-4.8-study-guide", "mb-ap-stats-4.8-practice", "mb-ap-stats-4.8-checklist"]
next: "mb-ap-stats-4.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Contains 0: no convincing evidence of a difference. Excludes 0: convincing evidence of a difference."
  - "The confidence level describes the method, not one interval."
  - "Name the order of subtraction, the response and both populations."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/).

## Recap

- μ₁ − μ₂ is fixed; the interval changes from sample to sample. One interval **may or may not** contain μ₁ − μ₂.
- **Interval template:** "We are C% confident that the interval from a to b [units] captures the difference (group 1 minus group 2) in the mean [response] of all [population 1] and all [population 2]."
- **Confidence level template:** "In repeated random sampling with the same sample sizes from these populations, about C% of intervals built this way would capture μ₁ − μ₂."
- For an experiment, refer to the true difference in mean response between the **treatments** for subjects like these.

## Key relationships

| Situation | Conclusion |
|---|---|
| Both limits positive | Convincing evidence μ₁ > μ₂ |
| Both limits negative | Convincing evidence μ₁ < μ₂ |
| Interval contains 0 | No convincing evidence of a difference (not proof of equal means) |
| Claimed value (or boundary) outside the interval | Convincing evidence against "μ₁ − μ₂ equals it" |
| Every value in the interval satisfies a directional claim | Convincing evidence for the claim |
| Interval straddles the claim's boundary | Not convincing either way |
| Reverse order of subtraction | (a, b) becomes (−b, −a); same conclusion |
| Higher confidence level | Larger t*, wider interval |

## Assumptions

- The conditions for the two-sample t-interval were met (Topic 4.7). Otherwise, no claim can be justified.
- Random samples allow generalising to the populations; random assignment allows cause-and-effect conclusions.

## Mistakes to avoid

1. **"Contains 0, so the means are equal."**
2. **"Mostly positive, so group 1 is higher."** Look at whether 0 is inside, not how much of the interval is positive.
3. **"95% probability"** for one computed interval.
4. **Interpreting sample means** or individual values instead of population means.
5. **No order of subtraction**, so the sign cannot be read.
6. **Cause and effect from an observational study.**
7. **A conclusion with no reference to the interval.**

## Quick self-check

1. A 95% interval for μ₁ − μ₂ is (−4.1, 2.7). Is there convincing evidence of a difference? *(No: 0 is inside the interval, so 0 is a plausible difference.)*
2. An interval for μ_A − μ_B is (1.2, 6.8). Give the interval for μ_B − μ_A. *((−6.8, −1.2))*
3. An interval for μ₁ − μ₂ is (3.5, 9.5). Judge the claims (i) "group 1's mean is at least 2 higher" and (ii) "group 1's mean is more than 4 higher". *((i) Convincing evidence for: every value exceeds 2. (ii) Not convincing: values from 3.5 to 4 are plausible.)*

Next: [practice questions](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-practice/).
