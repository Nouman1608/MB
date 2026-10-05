---
resourceId: "mb-ap-calcab-5.5-revision-notes"
title: "Using the Candidates Test to Find Absolute Extrema: Revision Notes (Calculus AB 5.5)"
description: "One-page recap of the Candidates Test: the conditions, which points count as candidates, how to compare them and how to report absolute extrema."
course: "calculus-ab"
unit: 5
topics: ["5.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.5-study-guide"]
learningObjectives:
  - "Recall the four steps of the Candidates Test and the conditions it needs"
  - "Spot the common errors in absolute extrema questions before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.5-study-guide", "mb-ap-calcab-5.5-practice", "mb-ap-calcab-5.5-checklist"]
next: "mb-ap-calcab-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Continuous f on a closed interval [a, b]: absolute extrema occur only at critical points in (a, b) or at a and b."
  - "Evaluate f at every candidate and compare. Largest is the absolute maximum, smallest is the absolute minimum."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- An **absolute (global) maximum** on an interval is the highest value of f anywhere on that interval. A local maximum is only highest **nearby**.
- If f is **continuous** on a **closed** interval [a, b], the Extreme Value Theorem says the absolute maximum and minimum exist.
- An interior absolute extremum is also a local extremum, so it sits at a **critical point**. Otherwise it sits at an **endpoint**. Those are the only candidates.
- The test compares values. You do not need the sign of f′ or the second derivative.

## Key relationships

| Step | What you do | Watch out for |
|---|---|---|
| 1. Conditions | Confirm f is continuous on [a, b] | Open interval or a break: no guarantee |
| 2. Critical points | Solve f′(x) = 0; find where f′ does not exist | Keep only points strictly inside (a, b) |
| 3. Evaluate | Work out f at each critical point and at a and b | Use f, not f′, in the table |
| 4. Compare | Largest f = absolute max; smallest f = absolute min | A value can occur at two x's |

Answer format: "The absolute maximum **value** of f on [a, b] is __, at x = __."

## Assumptions behind the method

- f is continuous on the whole closed interval, endpoints included.
- You have found **every** critical point in the interval, including cusps and corners where f′ does not exist.
- On a calculator question, you keep full precision until the comparison.

## Mistakes to avoid

1. **Leaving out the endpoints.**
2. **Missing x-values where f′ does not exist**, such as x = 0 for x^(2/3).
3. **Keeping a critical point that lies outside the interval.**
4. **Giving the x-value when the question asks for the maximum value.**
5. **Assuming a local maximum is the absolute maximum.**
6. **Using the test on an open interval**, where an extremum may not exist.

## Quick self-check

1. Find the absolute extrema of f(x) = x³ − 3x on [0, 2]. *(Candidates 0, 1, 2 give 0, −2, 2. Absolute max 2 at x = 2; absolute min −2 at x = 1.)*
2. f(x) = 2x³ − 9x² + 12x on [0, 3]. What is the absolute maximum value? *(Critical points x = 1 and 2. Values: f(0) = 0, f(1) = 5, f(2) = 4, f(3) = 9. The absolute maximum is 9, at the endpoint x = 3, even though x = 1 is a local maximum.)*
3. Does x² have an absolute maximum on the open interval (−1, 2)? *(No. Values approach 4 near x = 2 but never reach it.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-practice/).
