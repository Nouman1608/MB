---
resourceId: "mb-ap-calcbc-9.3-revision-notes"
title: "Finding Arc Lengths of Curves Given by Parametric Equations: Revision Notes (Calculus BC 9.3)"
description: "One-page recap of parametric arc length: the integral and where it comes from, when it gives the length, exact versus calculator answers, and the mistakes that cost marks."
course: "calculus-bc"
unit: 9
topics: ["9.3"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.3-study-guide"]
learningObjectives:
  - "Recall the parametric arc length integral and the conditions for using it"
  - "Spot the common errors in arc length set-ups before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Set up by hand; most values need a calculator (radian mode, 3 decimal places)."
related: ["mb-ap-calcbc-9.3-study-guide", "mb-ap-calcbc-9.3-practice", "mb-ap-calcbc-9.3-checklist"]
next: "mb-ap-calcbc-9.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "L = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt."
  - "Check the curve is traced once, and that L is at least the straight-line distance."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/). **BC-only material.** Prerequisites (parametric derivatives 9.1, arc length of y = f(x) 8.13, definite integrals, substitution 6.9) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A tiny piece of curve is almost a straight line with legs Δx ≈ x′(t)Δt and Δy ≈ y′(t)Δt.
- Pythagoras gives Δs ≈ √(x′(t)² + y′(t)²) Δt. Adding the pieces gives the integral.
- The limits are **values of t**.
- Exact answers happen only when (dx/dt)² + (dy/dt)² is a perfect square. Otherwise use the calculator.

## Key relationships

| Situation | Formula or fact | Note |
|---|---|---|
| Parametric curve, a ≤ t ≤ b | L = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt | Smooth, traced once |
| Curve y = f(x) | L = ∫ √(1 + (f′(x))²) dx | Special case x = t (Topic 8.13) |
| Circle x = r cos t, y = r sin t | Integrand = r; 0 ≤ t ≤ 2π gives 2πr | Useful check |
| Traced twice | Integral = twice the length | Integral counts every pass |
| Any curve | L ≥ straight-line distance between end points | Quick sanity check |

## Assumptions

- dx/dt and dy/dt are continuous on [a, b].
- The point does not go back over any part of the curve. An always-increasing x(t) or y(t) proves this.
- Radians for any trigonometric component.

## Mistakes to avoid

1. **No square root,** or adding dx/dt + dy/dt without squaring.
2. **Limits in x or y** instead of t.
3. **Lost chain-rule factor:** d/dt[sin(3t)] = 3 cos(3t).
4. **Splitting a root:** √(a² + b²) ≠ a + b.
5. **Retracing ignored:** a circle traced twice is not twice as long.
6. **Degree mode** on the calculator.

## Quick self-check

1. Write the length integral for x = t³, y = e^(2t), 0 ≤ t ≤ 1. *(∫ from 0 to 1 of √(9t⁴ + 4e^(4t)) dt)*
2. Find the length of x = 3 cos t, y = 3 sin t for 0 ≤ t ≤ π/2. *(Integrand 3, so L = 3π/2, about 4.712)*
3. For x = ½t², y = ⅓(2t + 1)^(3/2), what is (dx/dt)² + (dy/dt)²? *((t + 1)², so the integrand is t + 1)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-practice/).
