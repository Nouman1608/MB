---
resourceId: "mb-ap-calcab-5.12-revision-notes"
title: "Exploring Behaviors of Implicit Relations: Revision Notes (Calculus AB 5.12)"
description: "One-page recap of implicit relations: critical points where dy/dx is 0 or undefined, the 0/0 case, sign analysis in x and y, and second derivative tests."
course: "calculus-ab"
unit: 5
topics: ["5.12"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.12-study-guide"]
learningObjectives:
  - "Recall how to find and classify critical points of an implicit curve"
  - "Spot the common errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.12-study-guide", "mb-ap-calcab-5.12-practice", "mb-ap-calcab-5.12-checklist"]
next: "mb-ap-calcab-5.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Critical point: a point on the curve where dy/dx = 0 or dy/dx does not exist."
  - "The derivative tests work as before; the derivatives just contain y."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figure and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- Differentiate implicitly and write **dy/dx = N/D**, with N and D in terms of x and y.
- A **critical point** is a point on the curve where dy/dx = 0 or dy/dx does not exist.
- Setting N = 0 or D = 0 gives a line or curve, not a point. **Solve it together with the curve's equation.**
- Check the other part of the fraction at every point you find.
- Use the **sign of dy/dx** (in terms of x and y) for increasing and decreasing, and the **sign of d²y/dx²** for concavity and the second derivative test.

## Key relationships

| At a point on the curve | Meaning |
|---|---|
| N = 0, D ≠ 0 | dy/dx = 0: horizontal tangent; candidate for a relative max or min of y |
| D = 0, N ≠ 0 | dy/dx undefined: vertical tangent; a critical point, but not a max or min of y |
| N = 0, D = 0 | 0/0: the formula decides nothing; investigate another way |
| dy/dx = 0 and d²y/dx² < 0 | relative maximum of y |
| dy/dx = 0 and d²y/dx² > 0 | relative minimum of y |
| dy/dx changes + to − (or − to +) | relative maximum (or minimum) of y |

**Shortcut for y″ at a horizontal tangent:** every term containing y′ is 0. For y′ = N/D with N = 0 at the point, y″ = N′/D there, where N′ is the derivative of N with respect to x, evaluated with y′ = 0.

## Assumptions behind the method

- The point really lies on the curve: substitute it into the original equation.
- Near a point with D ≠ 0, the curve is locally the graph of a function y(x), so the usual tests apply to that piece.
- d²y/dx² may contain x, y and dy/dx. You need both coordinates (and dy/dx) to evaluate it.

## Mistakes to avoid

1. **Stopping at "y = 2x"** instead of finding points on the curve.
2. **Calling 0/0 a horizontal tangent.**
3. **Forgetting** that dy/dx not existing also makes a critical point.
4. **Treating y as a constant** when differentiating again.
5. **Evaluating with x alone** when one x gives two points.
6. **"It has a max"**: say "y has a relative maximum of … at x = …".

## Quick self-check

1. dy/dx = (x − 1)/(y + 3). Where could the tangent be vertical? *(Where y = −3 on the curve, provided x ≠ 1 there)*
2. For y² = x² − 4x + 13, differentiating 2y·y′ = 2x − 4 again gives 2(y′)² + 2y·y″ = 2. Classify the horizontal tangent at (2, 3). *(y′ = 0 there, so 6y″ = 2 and y″ = 1/3 > 0: relative minimum of y)*
3. dy/dx = x/y. On which quadrants is y decreasing? *(II and IV, where x and y have opposite signs)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-practice/).
