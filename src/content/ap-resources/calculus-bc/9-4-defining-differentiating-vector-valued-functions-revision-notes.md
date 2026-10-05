---
resourceId: "mb-ap-calcbc-9.4-revision-notes"
title: "Defining and Differentiating Vector-Valued Functions: Revision Notes (Calculus BC 9.4)"
description: "One-page recap of vector-valued functions: notation and domain, component-wise derivatives, what r′(t) says about tangents and direction, and r″(t) versus d²y/dx²."
course: "calculus-bc"
unit: 9
topics: ["9.4"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.4-study-guide"]
learningObjectives:
  - "Recall how to differentiate a vector-valued function and read its derivative"
  - "Spot the common errors with vector derivatives before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives by hand; a calculator only for decimal values where allowed."
related: ["mb-ap-calcbc-9.4-study-guide", "mb-ap-calcbc-9.4-practice", "mb-ap-calcbc-9.4-checklist"]
next: "mb-ap-calcbc-9.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "r′(t) = ⟨x′(t), y′(t)⟩; r″(t) = ⟨x″(t), y″(t)⟩."
  - "r′(t) is tangent to the curve and points the way it is traced."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the limit argument, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/). **BC-only material.** Prerequisites (parametric derivatives 9.1 and 9.2, product and chain rules) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- r(t) = ⟨x(t), y(t)⟩ = x(t) i + y(t) j takes a number and returns a vector.
- As a position vector, its tip traces the same curve as the parametric equations x = x(t), y = y(t).
- Domain: the values of t where **both** components are defined.
- The limit definition works component by component, so you differentiate each component separately.

## Key relationships

| Quantity | Formula | Meaning |
|---|---|---|
| First derivative | r′(t) = ⟨x′(t), y′(t)⟩ | Tangent vector; velocity if r is position |
| Second derivative | r″(t) = ⟨x″(t), y″(t)⟩ | Acceleration if r is position |
| Tangent slope | dy/dx = y′(t)/x′(t), x′(t) ≠ 0 | Rise over run |
| Horizontal tangent | y′ = 0, x′ ≠ 0 | r′ = ⟨nonzero, 0⟩ |
| Vertical tangent | x′ = 0, y′ ≠ 0 | r′ = ⟨0, nonzero⟩ |
| Size of r′ | √(x′² + y′²) | Arc length integrand (Topic 9.3) |
| Product rule | (f r)′ = f′ r + f r′ | f is an ordinary function |

## Reading the direction

| Sign of x′ | Sign of y′ | The point is moving |
|---|---|---|
| + | + | right and up |
| + | − | right and down |
| − | + | left and up |
| − | − | left and down |

## Mistakes to avoid

1. **Writing x′ + y′** instead of the vector ⟨x′, y′⟩.
2. **Missing chain or product rules** inside a component.
3. **Slope as x′/y′.** It is y′/x′.
4. **r″(t) confused with d²y/dx².** d²y/dx² = (d/dt[dy/dx]) ÷ (dx/dt), a single number.
5. **Domain from one component only.**
6. **r′ = ⟨0, 0⟩ called a vertical tangent.** No conclusion is possible from it alone.

## Quick self-check

1. Find r′(t) for r(t) = ⟨t e^t, cos(3t)⟩. *(⟨e^t + t e^t, −3 sin(3t)⟩)*
2. r(t) = ⟨t² − 4t, t³⟩. Which way is the point moving at t = 1? *(r′(1) = ⟨−2, 3⟩: left and up)*
3. For r(t) = ⟨2t, t³⟩, find r″(1) and d²y/dx² at t = 1. *(r″(1) = ⟨0, 6⟩; d²y/dx² = 3t/2 = 1.5)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-practice/).
