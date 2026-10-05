---
resourceId: "mb-ap-calcab-5.1-revision-notes"
title: "Using the Mean Value Theorem: Revision Notes (Calculus AB 5.1)"
description: "One-page recap of the Mean Value Theorem: its two conditions, the conclusion, a three-part justification, table questions and the mistakes that cost marks."
course: "calculus-ab"
unit: 5
topics: ["5.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.1-study-guide"]
learningObjectives:
  - "Recall the conditions and conclusion of the Mean Value Theorem"
  - "Write a complete justification quickly and avoid the common slips"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.1-study-guide", "mb-ap-calcab-5.1-practice", "mb-ap-calcab-5.1-checklist"]
next: "mb-ap-calcab-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Continuous on [a, b] and differentiable on (a, b) means f′(c) = (f(b) − f(a))/(b − a) for some c in (a, b)."
  - "No conditions, no guarantee. Name both, with reasons."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- The **Mean Value Theorem** (MVT) is an existence theorem. It says a value exists; it does not say where.
- **Conditions:** f continuous on the closed interval [a, b]; f differentiable on the open interval (a, b).
- **Conclusion:** at least one c in (a, b) has f′(c) = (f(b) − f(a))/(b − a).
- **Picture:** a tangent line inside the interval is parallel to the secant line through the endpoints.
- **Context:** at some moment the instantaneous rate (for example, velocity) equals the average rate over the interval.
- If f(a) = f(b), the conclusion is f′(c) = 0 (Rolle's theorem, a special case).

## Key relationships

| Item | What to write |
|---|---|
| Average rate | (f(b) − f(a))/(b − a), the secant gradient |
| Instantaneous rate | f′(c), the tangent gradient |
| Differentiable on [a, b] | Also continuous on [a, b] (Topic 2.4), so both conditions hold |
| Finding c | Solve f′(x) = average rate; keep only solutions strictly inside (a, b) |
| Table question | Function must be stated differentiable; any sub-interval [p, q] of the table may be used |

## Assumptions behind the method

- Continuity is needed at every point of [a, b], including the endpoints.
- Differentiability is needed only inside (a, b). A vertical tangent or a corner at an endpoint is allowed.
- Corners, cusps, vertical tangents, jumps, holes and asymptotes inside the interval break a condition.

## The three-part justification

1. "f is continuous on [a, b] and differentiable on (a, b) because …"
2. "(f(b) − f(a))/(b − a) = …" with the numbers shown.
3. "By the Mean Value Theorem, there is a c in (a, b) with f′(c) = … ."

## Mistakes to avoid

1. **Taking c to be the midpoint**, or the average rate to be the average of f′(a) and f′(b).
2. **Keeping a solution** at an endpoint or outside the interval.
3. **Dropping the conditions** or the theorem's name.
4. **Saying "no such c exists"** just because a condition fails. Failure only removes the guarantee.
5. **Mixing up the MVT and the IVT.** The IVT gives values of f; the MVT gives values of f′.
6. **Forgetting the chain rule** when finding f′.

## Quick self-check

1. Find the value of c guaranteed by the MVT for f(x) = x² + 2x on [0, 2]. *(Average rate (8 − 0)/2 = 4; f′(c) = 2c + 2 = 4, so c = 1.)*
2. For f(x) = sin x on [0, π], what does the MVT give? *(Average rate 0, so f′(c) = cos c = 0 with c = π/2.)*
3. A differentiable function has g(2) = 7 and g(6) = −1. What must be true? *(g′(c) = −8/4 = −2 for some c in (2, 6).)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-practice/).
