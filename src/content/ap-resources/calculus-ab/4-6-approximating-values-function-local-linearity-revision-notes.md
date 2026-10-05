---
resourceId: "mb-ap-calcab-4.6-revision-notes"
title: "Local Linearity and Linearization: Revision Notes (Calculus AB 4.6)"
description: "One-page recap of tangent line approximation: the linearization formula, choosing the point of tangency, and deciding whether an estimate is too high or too low."
course: "calculus-ab"
unit: 4
topics: ["4.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.6-study-guide"]
learningObjectives:
  - "Recall the linearization formula and the rule linking the bend of a graph to overestimates and underestimates"
  - "Spot the common errors in tangent line approximations before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-4.6-study-guide", "mb-ap-calcab-4.6-practice", "mb-ap-calcab-4.6-checklist"]
next: "mb-ap-calcab-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "L(x) = f(a) + f′(a)(x − a), and f(x) ≈ L(x) for x near a."
  - "f″ > 0 near a: underestimate. f″ < 0 near a: overestimate."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Local linearity:** zoom in on a differentiable function and its graph looks like its tangent line.
- **Linearization at a:** L(x) = f(a) + f′(a)(x − a). Use f(x) ≈ L(x) for x close to a.
- **Change form:** change in f ≈ f′(a) × (change in x).
- **Choose a** where f(a) and f′(a) are easy to find, as close as possible to the x you want.
- The **error grows** as x moves away from a.
- No linearization at a point where f is not differentiable (a corner or a cusp).

## Key relationships

| Near x = a | Tangent line is | Estimate is |
|---|---|---|
| f″ > 0 (graph bends upward) | below the curve | an underestimate |
| f″ < 0 (graph bends downward) | above the curve | an overestimate |
| f″ changes sign at a | on different sides on the left and right | check each side separately |

Common choices: ∛x near 8 or 27, √x near a perfect square, 1/x near an easy whole number.

## Assumptions behind the method

- f is differentiable at a, so the tangent line exists.
- x is close to a; "close" depends on how quickly f′ changes.
- To judge over or under, you need the sign of f″ (or the bend of the graph) **on the interval between a and x**.

## Mistakes to avoid

1. **Using f′(x) or f′ at the wrong point.** The slope is f′(a).
2. **Dropping f(a)**, so that only the change is reported.
3. **Using x in place of (x − a).**
4. **Swapping over and under.** Bending upward means the line is below: underestimate.
5. **Using the sign of f′** to decide over or under.
6. **Writing "=" instead of "≈"**, or forgetting units in context.

## Quick self-check

1. f(1) = 4 and f′(1) = −3. Estimate f(1.1). *(L(1.1) = 4 − 3(0.1) = 3.7)*
2. f″(x) > 0 near x = a. Is L(x) too high or too low? *(Too low: an underestimate.)*
3. Estimate √49.7 using a = 49. Over or under? *(7 + (1/14)(0.7) = 7.05; √x bends downward, so 7.05 is an overestimate. Actual ≈ 7.0498.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-practice/).
