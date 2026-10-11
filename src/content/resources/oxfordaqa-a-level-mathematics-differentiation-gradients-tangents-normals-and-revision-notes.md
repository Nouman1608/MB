---
title: "OxfordAQA International AS and A-level Mathematics: Differentiation: gradients, tangents, normals and stationary points (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Differentiation Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiation: gradients, tangents, normals and stationary points"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 176
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-differentiation-oxfordaqa-alevel-maths"
description: "Condensed revision notes on OxfordAQA 9660 P1.3 differentiation: rules, tangents, normals, stationary points, optimisation and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense specification section P1.3 (Differentiation) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It is part of International AS Unit P1, which also counts towards the International A-level. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-practice/), then check the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/). For the whole unit, see the [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/).

## Definitions

| Term | Meaning |
|---|---|
| Derivative f'(x) or dy/dx | The gradient of the tangent to y = f(x) at the point with that x-value. |
| Limit idea | The gradient of a chord to a nearby point tends to the tangent gradient as the gap h tends to 0. |
| Rate of change | dy/dx is how fast y changes per unit of x. Its unit is (unit of y) per (unit of x). |
| Second derivative | f''(x) or d²y/dx²: the derivative of f'(x). It measures how the gradient is changing. |
| Stationary point | A point where dy/dx = 0. |
| Increasing / decreasing | f'(x) > 0 / f'(x) < 0 on an interval. |
| Normal | The line perpendicular to the tangent at the same point. |

The spec says differentiation from first principles is not tested, and points of inflection are not required.

## Rules in one table

| Task | Rule or result |
|---|---|
| Power rule | axⁿ → anxⁿ⁻¹, for rational n |
| Constant | k → 0 |
| Sum or difference | Differentiate term by term |
| Square root | √x = x^(1/2), derivative (1/2)x^(−1/2) |
| Reciprocal | 1/xⁿ = x⁻ⁿ, derivative −nx^(−n−1) |
| Parallel gradients | m₁ = m₂ |
| Perpendicular gradients | m₁ × m₂ = −1 |
| Line through (x₁, y₁) | y − y₁ = m(x − x₁) |

Quick reminder: x^(5/2) differentiates to (5/2)x^(3/2). The expression 3x² − √x differentiates to 6x − (1/2)x^(−1/2).

## Method boxes

**Rewrite before differentiating**

1. Split any fraction with a sum on top: (x³ + 4)/x becomes x² + 4x⁻¹.
2. Turn roots and reciprocals into powers.
3. Combine products of powers into one power: x√x is x^(3/2).
4. Differentiate term by term.

**Tangent and normal at x = a**

1. y-coordinate: substitute a into the curve.
2. Gradient m = f'(a).
3. Tangent: y − y₁ = m(x − a).
4. Normal: gradient −1/m, same point.
5. Rearrange to the requested form.

**Stationary points**

1. Solve dy/dx = 0.
2. Substitute each x into y to get the full coordinates.
3. Find d²y/dx² and substitute: negative means maximum, positive means minimum.
4. If it is 0, test the sign of dy/dx either side instead.

**Increasing or decreasing intervals**

1. Solve f'(x) = 0 to find the boundaries.
2. Test the sign of f'(x) in each interval (factorise first).
3. State intervals using inequalities and respect the domain.

**Optimisation**

1. Define variables and write the fixed constraint.
2. Eliminate to one variable and write the quantity as a function of it.
3. Differentiate, set to 0, solve.
4. Prove maximum or minimum.
5. Answer the question asked, with units.

## Worked reminders

**Tangent and normal.** Curve y = x² − 6x at x = 5. The y-value is 25 − 30 = −5 and dy/dx = 2x − 6 = 4.

```
Tangent: y + 5 = 4(x − 5)           → y = 4x − 25
Normal:  y + 5 = −(1/4)(x − 5)      → x + 4y + 15 = 0
```

**Stationary point.** For y = 3x² − 12x + 7 we have dy/dx = 6x − 12 = 0 at x = 2, and y = 12 − 24 + 7 = −5. Then d²y/dx² = 6 > 0, so (2, −5) is a minimum.

**Optimisation shape.** If a quantity is S = x² + k/x, then dS/dx = 2x − k/x². Setting it to 0 gives x³ = k/2. The second derivative 2 + 2k/x³ is positive for x > 0, which confirms a minimum.

## Common question patterns

**Points with a given gradient.** For y = x³ − 3x², find the points where the gradient is 9. Set 3x² − 6x = 9, so x² − 2x − 3 = 0 and (x − 3)(x + 1) = 0. Then x = 3 or x = −1, and substituting into the curve gives the points (3, 0) and (−1, −4). A tangent parallel to a given line has the same gradient as that line.

**Unknown constants.** If y = kx² − 5x has gradient 7 at x = 3, then dy/dx = 2kx − 5 gives 6k − 5 = 7, so k = 2. Differentiate first, substitute second, then solve.

**Interpreting a rate.** If V litres is the volume in a tank after t minutes and dV/dt = 18√t, then at t = 16 the volume is increasing at 72 litres per minute. A negative value means the quantity is falling. Only a general appreciation of this idea is required.

**Increasing or decreasing everywhere.** To show a function is always increasing, show f'(x) > 0 for every x. A quadratic derivative can be written in completed-square form: a positive square plus a positive constant is always positive.

**Sketching what you have found.** A cubic with a positive x³ coefficient rises, turns at a maximum, falls to a minimum and rises again. If you know its two stationary points, the shape follows. A table of x, f'(x) sign and behaviour is a tidy way to present the argument:

| Type of point | before the point | at the point | after the point |
|---|---|---|---|
| Maximum | f' > 0 | f' = 0 | f' < 0 |
| Minimum | f' < 0 | f' = 0 | f' > 0 |
| Neither | same sign | f' = 0 | same sign |

## Must-know distinctions

| Often confused | The difference |
|---|---|
| Tangent and normal | The tangent has gradient f'(a). The normal has gradient −1/f'(a). |
| Stationary point and maximum | Stationary means dy/dx = 0. It may be a maximum, a minimum, or neither. |
| f'(x) = 0 and f''(x) = 0 | The first locates stationary points. The second only makes the second-derivative test inconclusive. |
| Local and overall maximum | A local maximum is the highest value nearby, not necessarily the largest value of the function. |
| dy/dx and a gradient number | dy/dx is a function of x. Substitute an x-value to get a gradient. |

## Quick self-test

Try these without looking below. Use the working space on paper.

1. Differentiate 9x^(2/3).
2. Differentiate 3/(4x²).
3. Find the gradient of y = x³ − 5x where x = −2.
4. A tangent has gradient −3/5. State the gradient of the normal.
5. Find the equation of the tangent to y = x² + 3x at the point where x = 1.
6. Find and classify the stationary point of y = x² − 10x + 3.
7. For what values of x is f(x) = x³ − 12x increasing?
8. Find d²y/dx² when y = x⁴ − 2x², and evaluate it at x = 1.
9. What sign does f''(x) have at a maximum point?
10. A particle's distance is s = 4t^(3/2) metres after t seconds. Find ds/dt at t = 9 and give the unit.
11. For y = 2x^(3/2) − 12x with x > 0, find the coordinates of the stationary point and say whether it is a maximum or a minimum.

### Answers

1. 6x^(−1/3), which is 6/∛x.
2. Write as (3/4)x⁻², giving −(3/2)x⁻³.
3. 3x² − 5 = 7 at x = −2.
4. 5/3.
5. Gradient 2x + 3 = 5 and y = 4 at x = 1, so y − 4 = 5(x − 1), giving y = 5x − 1.
6. dy/dx = 2x − 10 = 0 at x = 5, y = −22, and d²y/dx² = 2 > 0, so (5, −22) is a minimum.
7. f'(x) = 3x² − 12 > 0, so x < −2 or x > 2.
8. d²y/dx² = 12x² − 4, which is 8 at x = 1.
9. Negative (when the test is conclusive).
10. ds/dt = 6t^(1/2), which is 18 metres per second at t = 9.
11. dy/dx = 3x^(1/2) − 12 = 0 gives x = 16, and y = 2(64) − 192 = −64. The second derivative (3/2)x^(−1/2) is 3/8 > 0 at x = 16, so (16, −64) is a minimum.

## Where marks are usually lost

- Differentiating before rewriting, especially terms like 5/x² or x√x.
- Dropping the minus sign on a negative power: x⁻² differentiates to −2x⁻³.
- Writing the normal with the tangent's gradient, or flipping the gradient without the sign change.
- Not showing the y-coordinate calculation, so the line has no justified point.
- Stating the nature of a stationary point with no second-derivative value or sign check to support it.
- Giving only the x-value of a stationary point when the coordinates were requested.
- In a justification, writing "f'' is positive so it is a maximum" (the wrong way round).
- In optimisation, not proving that the value is a maximum or minimum, or not giving the final quantity with units.
- Rounding too early, which spoils later answers; keep exact values until the end.
- Losing a fractional power when simplifying: 2x^(3/2) differentiates to 3x^(1/2), and the coefficient 3 is easy to miscopy.
- Using the second-derivative test on a point that is not stationary; always solve dy/dx = 0 first.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: section 3.1, International AS Unit P1 (Pure Maths), content P1.3 Differentiation.
