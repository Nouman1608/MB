---
resourceId: "mb-ap-stats-3.4-revision-notes"
title: "Justifying a Claim Based on a Confidence Interval for a Proportion: Revision Notes (Statistics 3.4)"
description: "One-page recap of interpreting a confidence interval and confidence level, judging claims with plausible values, and how sample size and confidence level change the width."
course: "statistics"
unit: 3
topics: ["3.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.4-study-guide"]
learningObjectives:
  - "Recall the templates for interpreting an interval and a confidence level"
  - "Spot the common errors in claim and interpretation questions before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "z* = invNorm((1 + C)/2): 1.645, 1.960 and 2.576 for 90%, 95% and 99%."
related: ["mb-ap-stats-3.4-study-guide", "mb-ap-stats-3.4-practice", "mb-ap-stats-3.4-checklist"]
next: "mb-ap-stats-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Confident about the interval; the confidence level describes the method."
  - "Outside the interval: convincing evidence against. Inside: plausible, not proved."
  - "Width rises with confidence and falls like 1/√n."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/).

## Recap

- p is fixed; intervals vary from sample to sample. A single interval **may or may not** contain p.
- **Interval template:** "We are C% confident that the interval from a to b captures the proportion of all [population] who [response]."
- **Confidence level template:** "If we took many random samples of size n and built a C% interval from each, about C% of the intervals would capture the true proportion of [context]."
- An interval is a set of **plausible values** for p.

## Key relationships

| Situation | Conclusion or effect |
|---|---|
| Claimed value outside the interval | Convincing evidence against p = that value |
| Claimed value inside the interval | Plausible; no convincing evidence against it; not proved |
| Whole interval on one side of a boundary (e.g. all above 0.5) | Convincing evidence for the claim on that side |
| Interval straddles the boundary | Not convincing evidence either way |
| Higher confidence level (same data) | z* up, MOE up, width up; SE unchanged |
| Larger sample (same p̂, same level) | SE down, MOE down, width down |
| n multiplied by k | width divided by about √k (4 × n halves it) |

## Assumptions

- The interval only means something if the Topic 3.3 conditions (random, 10%, large counts) hold.
- The margin of error covers random sampling variation only, not bias.

## Mistakes to avoid

1. **"95% probability that p is between a and b."** Use "95% confident".
2. **Describing individuals:** the interval is not where 95% of people's values lie.
3. **Saying a plausible value is proved** or "accepted".
4. **Leaving out the population** in the interpretation.
5. **Thinking higher confidence means more precision.** It means a wider interval.
6. **Doubling n to halve the margin of error.** You need 4 times n.

## Quick self-check

1. A 95% interval is (0.62, 0.70). Is there convincing evidence against a claim of 0.75? Against 0.65? *(0.75: yes, it is outside. 0.65: no, it is plausible, but not proved.)*
2. The sample size is multiplied by 9. What happens to the margin of error? *(It is divided by about 3.)*
3. 100 random samples each give a 95% interval. About how many capture p? *(About 95, but the exact number varies.)*

Next: [practice questions](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-practice/).
