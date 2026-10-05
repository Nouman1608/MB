---
resourceId: "mb-ap-stats-4.3-revision-notes"
title: "Justifying a Claim Based on a Confidence Interval for a Mean: Revision Notes (Statistics 4.3)"
description: "One-page recap of interpreting t-intervals and confidence levels for a mean or mean difference, judging claims with plausible values, and how n and C change the width."
course: "statistics"
unit: 4
topics: ["4.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.3-study-guide"]
learningObjectives:
  - "Recall the templates for interpreting a t-interval and its confidence level"
  - "Spot the common errors in judging claims about a mean or mean difference before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "t* comes from the inverse t function with df = n − 1. Give endpoints to 2 decimal places."
related: ["mb-ap-stats-4.3-study-guide", "mb-ap-stats-4.3-practice", "mb-ap-stats-4.3-checklist"]
next: "mb-ap-stats-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interpret the interval about μ or μd, in context, with units."
  - "For matched pairs, always state the order of subtraction."
  - "Outside the interval: not plausible. Inside: plausible, not proved."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/).

## Recap

- μ (or μd) is fixed; x̄ and s change from sample to sample, so both the centre and the width of the interval change. One interval **may or may not** capture the parameter.
- **Interval template:** "We are C% confident that the interval from a to b [units] captures the true mean [variable] of all [population]."
- **Matched pairs:** "…captures the true mean difference in [variable] (first − second) for [population]."
- **Confidence level template:** "If we took many random samples of size n and built a C% t-interval from each, about C% of the intervals would capture the true mean [context]."
- An interval is a set of **plausible values** for the parameter.

## Key relationships

| Situation | Conclusion or effect |
|---|---|
| Claimed value outside the interval | Convincing evidence against the parameter equalling that value |
| Claimed value inside the interval | Plausible; no convincing evidence against it; not proved |
| Interval for μd entirely above (or below) 0 | Convincing evidence of a positive (or negative) mean difference |
| Interval for μd contains 0 | No convincing evidence of a difference |
| Higher confidence level (same data) | t* up, MOE up, width up; SE = s/√n unchanged |
| Larger sample (same x̄, s, level) | SE down, t* slightly down, MOE and width down |
| n multiplied by 4 | width roughly halved (slightly less than half for t) |

## Assumptions

- The Topic 4.2 conditions hold: random sample or random assignment; n ≤ 10% of the population when sampling without replacement; normal population, n ≥ 30, or no strong skew or outliers in the sample (of differences, for pairs).
- A cause-and-effect conclusion needs random assignment; generalising to a population needs random sampling.
- The margin of error covers random variation only, not bias.

## Mistakes to avoid

1. **"95% probability that μ is between a and b."** Use "95% confident".
2. **Describing individuals:** the interval is about the mean, not where 95% of values lie.
3. **Leaving out the order of subtraction** for μd.
4. **"0 is inside, so there is no difference."** Say there is no convincing evidence of a difference.
5. **Interpreting about x̄ or the sample.** The interval always contains x̄.
6. **Thinking higher confidence means more precision.** It means a wider interval.

## Quick self-check

1. A 95% interval for a mean is (12.4, 15.0) cm. Is there convincing evidence against a claim of 15.5 cm? Against 13 cm? *(15.5: yes, it is outside. 13: no, it is plausible, but not proved.)*
2. With d = after − before, a 90% interval for μd is (−2.5, −0.8) points. What does it suggest? *(Every plausible value is negative, so there is convincing evidence that the mean score fell from before to after.)*
3. The sample size is multiplied by 9 with the same x̄ and s. What happens to the width? *(It is divided by about 3, slightly more because t* also falls.)*

Next: [practice questions](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-practice/).
