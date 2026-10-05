---
resourceId: "mb-ap-calcab-5.7-revision-notes"
title: "Using the Second Derivative Test to Determine Extrema: Revision Notes (Calculus AB 5.7)"
description: "One-page recap of the second derivative test: the three cases, when it cannot be used, how to justify a conclusion and when a relative extremum is also absolute."
course: "calculus-ab"
unit: 5
topics: ["5.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.7-study-guide"]
learningObjectives:
  - "Recall the three cases of the second derivative test and the conditions for using it"
  - "Recall the one-critical-point rule for absolute extrema and its conditions"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.7-study-guide", "mb-ap-calcab-5.7-practice", "mb-ap-calcab-5.7-checklist"]
next: "mb-ap-calcab-5.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′(c) = 0 with f″(c) > 0: relative minimum. f′(c) = 0 with f″(c) < 0: relative maximum."
  - "f″(c) = 0 or f′(c) undefined: use the first derivative test."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- At a critical point with **f′(c) = 0**, the tangent is horizontal. The concavity at c decides the type of point.
- Concave up (f″(c) > 0): the curve is a cup above its tangent, so a **relative minimum**.
- Concave down (f″(c) < 0): the curve is a cap below its tangent, so a **relative maximum**.
- The test is a shortcut to the first derivative test: f″(c) > 0 means f′ is increasing through 0, so f′ changes from negative to positive.
- **One-critical-point rule:** if f is continuous on an interval with exactly one critical point c there, and c is a relative minimum (maximum), then f(c) is the absolute minimum (maximum) on that interval.

## Key relationships

| Situation at x = c | Conclusion |
|---|---|
| f′(c) = 0, f″(c) > 0 | relative minimum |
| f′(c) = 0, f″(c) < 0 | relative maximum |
| f′(c) = 0, f″(c) = 0 | inconclusive: use the first derivative test |
| f′(c) does not exist | test does not apply: use the first derivative test |
| only one critical point on the interval, and it is a relative extremum | it is also the absolute extremum on that interval |

Model justification: "f has a relative minimum at x = 4 because f′(4) = 0 and f″(4) > 0."

## Assumptions behind the method

- f′(c) = 0 (not merely "c is a critical point").
- f″(c) exists and you know its sign.
- For the one-critical-point rule: f is continuous on a single interval and has no other critical point in it.

## Mistakes to avoid

1. **Swapping the cases.** Positive f″ gives a minimum, not a maximum.
2. **Reading f″(c) = 0 as "no extremum"** or as "point of inflection". It means "no conclusion".
3. **Leaving out f′(c) = 0** from the justification.
4. **Using the test at a cusp or corner**, where f′(c) does not exist.
5. **Calling a relative extremum absolute** when the interval has other critical points.
6. **Giving the x-value when the question asks for the value of f**, or the reverse.

## Quick self-check

1. Let h(x) = x³ − 6x² + 2. Classify the critical points with the second derivative test. *(h′ = 3x(x − 4). h″ = 6x − 12. h″(0) = −12, so relative maximum at x = 0 (h = 2). h″(4) = 12, so relative minimum at x = 4 (h = −30).)*
2. f′(2) = 0 and f″(2) = 0. What can you conclude? *(Nothing yet. Check the sign of f′ on each side of x = 2.)*
3. Does k(x) = x⁴ + 2 have an extremum at x = 0, even though k″(0) = 0? *(Yes. k′ = 4x³ changes from negative to positive, so there is a relative minimum, k(0) = 2.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-practice/).
