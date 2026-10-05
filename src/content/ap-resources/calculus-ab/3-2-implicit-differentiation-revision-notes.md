---
resourceId: "mb-ap-calcab-3.2-revision-notes"
title: "Implicit Differentiation: Revision Notes (Calculus AB 3.2)"
description: "One-page recap of implicit differentiation: why y terms gain dy/dx, the five-step method, horizontal and vertical tangents, and the mistakes that cost marks."
course: "calculus-ab"
unit: 3
topics: ["3.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.2-study-guide"]
learningObjectives:
  - "Recall how to differentiate y terms and mixed xy terms with respect to x"
  - "Spot the common errors in implicit differentiation before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.2-study-guide", "mb-ap-calcab-3.2-practice", "mb-ap-calcab-3.2-checklist"]
next: "mb-ap-calcab-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Implicit differentiation is the chain rule with y as the inner function."
  - "Differentiate, collect dy/dx terms, factor, divide."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the ellipse diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- An **implicit** equation mixes x and y, for example x² + 4y² = 25. You do not need to solve for y.
- Treat y as a function of x. Every y term is then a composite, so the **chain rule** attaches a factor **dy/dx**.
- Terms that multiply x and y need the **product rule**; terms that divide them need the **quotient rule**.
- Method: differentiate both sides → collect dy/dx terms → factor out dy/dx → divide.
- The answer usually contains **x and y**. To evaluate it, use both coordinates of a point that is **on the curve**.
- Write dy/dx = N/D. **Horizontal** tangent: N = 0, D ≠ 0. **Vertical** tangent: D = 0, N ≠ 0. Both 0: the formula does not decide.

## Key relationships

| Term | d/dx of the term |
|---|---|
| yⁿ | n yⁿ⁻¹ · dy/dx |
| sin y | cos y · dy/dx |
| cos y | −sin y · dy/dx |
| e^y | e^y · dy/dx |
| ln y (y > 0) | (1/y) · dy/dx |
| xy | y + x · dy/dx |
| x²y | 2xy + x² · dy/dx |
| a constant | 0 |

## Assumptions behind the method

- Near the point, the curve is locally the graph of a differentiable function y(x).
- The point you substitute must satisfy the original equation.
- Dividing by D is only valid where D ≠ 0; where D = 0, investigate separately.

## Mistakes to avoid

1. **Writing d/dx [y²] = 2y**, with no dy/dx.
2. **Writing d/dx [xy] = dy/dx**, or just y. The product rule gives both terms.
3. **Differentiating the constant on the right** to anything but 0.
4. **Substituting only x** into a dy/dx that contains y.
5. **Leaving dy/dx terms on both sides** instead of collecting and factoring.
6. **Using a point from N = 0 that is not on the curve.**

## Quick self-check

1. Find the slope of x² + y² = 10 at (1, 3). *(dy/dx = −x/y = −1/3)*
2. Find dy/dx if y⁴ = x. *(1/(4y³))*
3. Find the slope of xy = 6 at (2, 3). *(y + x · dy/dx = 0, so dy/dx = −y/x = −3/2)*
4. A curve has dy/dx = (x + 1)/(y − 2). Where could the tangent be vertical? *(Where y = 2 and x ≠ −1, at points on the curve)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-practice/).
