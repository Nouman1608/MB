---
resourceId: "mb-ap-calcab-5.2-revision-notes"
title: "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points: Revision Notes (Calculus AB 5.2)"
description: "One-page recap of the Extreme Value Theorem, global and local extrema, critical points and the link between them, with the mistakes that cost marks."
course: "calculus-ab"
unit: 5
topics: ["5.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.2-study-guide"]
learningObjectives:
  - "Recall the Extreme Value Theorem and the definitions of global extremum, local extremum and critical point"
  - "Find critical points quickly and avoid the common slips"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.2-study-guide", "mb-ap-calcab-5.2-practice", "mb-ap-calcab-5.2-checklist"]
next: "mb-ap-calcab-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Continuous on a closed interval means a maximum value and a minimum value exist there."
  - "Local extrema occur at critical points; critical points are only candidates."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Extreme Value Theorem (EVT):** if f is continuous on the closed interval [a, b], then f has at least one maximum value and at least one minimum value on [a, b].
- It is an existence theorem: it does not say where the extrema are or how many times they occur.
- **Global (absolute)** extremum: highest or lowest value on the whole interval. It can be at an endpoint.
- **Local (relative)** extremum: highest or lowest compared with points on an open interval around c. With this definition, an endpoint is not a local extremum.
- **Critical point:** c in the domain of f with f′(c) = 0 or f′(c) undefined.
- **Every local extremum is at a critical point. Not every critical point is a local extremum.**

## Key relationships

| Situation | Critical point? | Extremum? | Example at x = 0 |
|---|---|---|---|
| Horizontal tangent, f′ keeps its sign | Yes (f′ = 0) | No | x³ |
| Horizontal tangent, f′ changes sign | Yes (f′ = 0) | Yes | x² |
| Corner or cusp | Yes (f′ undefined) | Can be (yes in these examples) | \|x\|, x^(2/3) |
| Vertical tangent, graph keeps rising | Yes (f′ undefined) | No | ∛x |
| f itself undefined | No | No | 1/x |

## Assumptions behind the method

- The EVT needs **both** a closed interval **and** continuity on it. An open interval or a single break removes the guarantee.
- A failed condition means "no guarantee", not "no extremum".
- To find critical points, write f′ as one fraction: zeros of the top give f′ = 0; zeros of the bottom give f′ undefined (check f is defined there).

## Mistakes to avoid

1. **Solving only f′(x) = 0** and missing points where f′ does not exist.
2. **Listing x-values where f is undefined** as critical points.
3. **Calling every critical point a maximum or minimum.**
4. **Forgetting endpoints** when thinking about global extrema.
5. **Mixing up value and location:** the maximum value is f(c); it occurs at x = c.
6. **Using the EVT on an open interval** or across a discontinuity.

## Quick self-check

1. Find the critical points of f(x) = x³ − 12x. *(f′(x) = 3x² − 12 = 0 gives x = −2 and x = 2.)*
2. Is x = 5 a critical point of f(x) = |x − 5|? *(Yes: f is defined at 5 but has a corner there, so f′(5) does not exist.)*
3. f(x) = x³ has f′(0) = 0. Is there a local extremum at 0? *(No: f(x) < 0 to the left and f(x) > 0 to the right.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-practice/).
