---
resourceId: "mb-ap-calcbc-8.13-revision-notes"
title: "The Arc Length of a Smooth, Planar Curve and Distance Traveled: Revision Notes (Calculus BC 8.13)"
description: "One-page recap of arc length: where the integral comes from, the dx and dy forms, the smoothness condition, distance traveled along a path, and the mistakes that cost marks."
course: "calculus-bc"
unit: 8
topics: ["8.13"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-8.13-study-guide"]
learningObjectives:
  - "Recall the arc length integral for y = f(x) and for x = g(y), with its condition"
  - "Spot the common errors in arc length setups before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Set up by hand; evaluate with a graphing calculator unless 1 + (f′)² simplifies. Give decimals to 3 decimal places."
related: ["mb-ap-calcbc-8.13-study-guide", "mb-ap-calcbc-8.13-practice", "mb-ap-calcbc-8.13-checklist"]
next: "mb-ap-calcbc-8.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "L = ∫ from a to b of √(1 + (f′(x))²) dx, for f′ continuous on [a, b]."
  - "Check: L ≥ b − a and L ≥ the straight-line distance between the end points."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/). **BC-only material.** Prerequisites (chain rule, Mean Value Theorem 5.1, Riemann sums 6.2 to 6.6, FTC 6.7) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Arc length is the **length of a curve**, as if you laid a string along it and pulled it straight. Units: the units of the axes, not square units.
- Cut the curve into chords. Each chord has length √(Δx² + Δy²) = √(1 + (Δy/Δx)²) Δx. The Mean Value Theorem turns Δy/Δx into f′(c). Adding and taking the limit gives an integral.
- **Smooth** means f′ is continuous on the interval. Split at any corner.
- A point moving along the curve from one end to the other, without turning back, travels a **distance equal to the arc length**.

## Key relationships

| Situation | Formula | Note |
|---|---|---|
| y = f(x), a ≤ x ≤ b | L = ∫ from a to b of √(1 + (f′(x))²) dx | f′ continuous on [a, b] |
| x = g(y), c ≤ y ≤ d | L = ∫ from c to d of √(1 + (g′(y))²) dy | Limits are y-values |
| Small piece of length | ds = √(1 + (dy/dx)²) dx | Add the pieces with an integral |
| Straight line y = mx + c | L = (b − a)√(1 + m²) | Same as the distance formula |
| Lower bounds | L ≥ b − a and L ≥ chord length | Equality only for straight lines |

## When can you do it by hand?

- Only when 1 + (f′)² simplifies: it becomes a perfect square, or a simple expression such as x.
- Example: y = (2/3)(x − 1)^(3/2) has f′ = √(x − 1), so 1 + (f′)² = x and L on [1, 4] is 14/3.
- Otherwise write the integral and use a calculator.

## Mistakes to avoid

1. **Dropping the 1** or the square root: the integrand is not |f′| and not 1 + (f′)².
2. **Using f instead of f′** inside the square root.
3. **Splitting the root:** √(1 + (f′)²) ≠ 1 + f′.
4. **Wrong limits:** dy integrals need y-limits.
5. **Ignoring corners** where f′ is not continuous.
6. **An answer shorter than the chord.** That is impossible, so recheck.
7. **Rounding early.** Round only the final value, to 3 decimal places.

## Quick self-check

1. Find the exact length of y = (4/3)x^(3/2) for 0 ≤ x ≤ 2. *(f′ = 2√x, so L = ∫ from 0 to 2 of √(1 + 4x) dx = 13/3)*
2. Write and evaluate the length of y = sin x for 0 ≤ x ≤ π. *(∫ from 0 to π of √(1 + cos²x) dx ≈ 3.820, calculator)*
3. Use the formula on y = 3x + 1 for 0 ≤ x ≤ 2, then check with the distance formula. *(2√10 ≈ 6.325 both ways)*

Next: [practice questions](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-practice/).
