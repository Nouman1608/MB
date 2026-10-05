---
resourceId: "mb-ap-calcbc-9.7-revision-notes"
title: "Defining Polar Coordinates and Differentiating in Polar Form: Revision Notes (Calculus BC 9.7)"
description: "One-page recap of polar coordinates: converting points and equations, the parametric form of r = f(θ), dy/dx and d²y/dx², tangents, and what dr/dθ means."
course: "calculus-bc"
unit: 9
topics: ["9.7"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.7-study-guide"]
learningObjectives:
  - "Recall the conversion formulas and the derivative formulas for a polar curve"
  - "Spot the common errors in polar differentiation before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Exact angles by hand; on calculator questions use radian mode and give 3 decimal places."
related: ["mb-ap-calcbc-9.7-study-guide", "mb-ap-calcbc-9.7-practice", "mb-ap-calcbc-9.7-checklist"]
next: "mb-ap-calcbc-9.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "x = r cos θ, y = r sin θ: a polar curve is a parametric curve in θ."
  - "dy/dx = (dy/dθ) ÷ (dx/dθ). dr/dθ is not the slope."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figure, explanations and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/). **BC-only material.** Prerequisites (parametric dy/dx 9.1, parametric second derivatives 9.2, product and chain rules) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- (r, θ) means: face along the ray at angle θ from the positive x-axis, then go r units. Negative r means go backwards.
- A point has many polar names: (r, θ), (r, θ + 2π) and (−r, θ + π) are all the same point.
- For r = f(θ), write **x = f(θ) cos θ, y = f(θ) sin θ** and use the parametric methods of Topics 9.1 and 9.2, with θ as the parameter.
- Work in radians.

## Key relationships

| Quantity | Formula | Note |
|---|---|---|
| Conversion | x = r cos θ, y = r sin θ, r² = x² + y² | Check the quadrant when finding θ |
| dx/dθ | f′(θ) cos θ − f(θ) sin θ | Product rule |
| dy/dθ | f′(θ) sin θ + f(θ) cos θ | Product rule |
| Slope | dy/dx = (dy/dθ) ÷ (dx/dθ) | Needs dx/dθ ≠ 0 |
| Second derivative | d²y/dx² = [d/dθ (dy/dx)] ÷ (dx/dθ) | Divide by dx/dθ again |
| Horizontal tangent | dy/dθ = 0, dx/dθ ≠ 0 | Both 0: investigate |
| Vertical tangent | dx/dθ = 0, dy/dθ ≠ 0 | |
| Distance from pole | Increasing if r and dr/dθ have the same sign | Decreasing if opposite signs |

## Mistakes to avoid

1. **Treating dr/dθ as the slope.** It measures change in r, not in y per unit x.
2. **Using tan θ as the slope.** That is the slope of the ray to the point, not of the tangent.
3. **Dropping a product-rule term** in dx/dθ or dy/dθ.
4. **Dividing second derivatives:** d²y/dx² ≠ (d²y/dθ²) ÷ (d²x/dθ²).
5. **Reading dr/dθ > 0 as "moving away"** when r < 0.
6. **Degree mode** on the calculator.

## Quick self-check

1. Convert the polar point (6, 7π/6) to rectangular form. *((−3√3, −3))*
2. For r = 1 + cos θ, find dy/dx at θ = π/2. *(r = 1, r′ = −1, dx/dθ = −1, dy/dθ = −1, so dy/dx = 1)*
3. For r = 5 sin θ, find dy/dx at θ = π/6. *(√3)*
4. At some θ, r = −1 and dr/dθ = 2. Is the point moving towards or away from the pole? *(Towards: opposite signs, so |r| is decreasing.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-practice/).
