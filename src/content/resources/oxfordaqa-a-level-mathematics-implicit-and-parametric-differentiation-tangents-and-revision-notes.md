---
title: "OxfordAQA International AS and A-level Mathematics: Implicit and parametric differentiation (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths Implicit & Parametric Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Implicit and parametric differentiation, tangents and normals"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 194
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-differentiation-oxfordaqa-alevel-maths"
description: "Condensed revision notes on implicit and parametric differentiation, with tangents and normals at given and general points, for OxfordAQA A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the second part of content area P2.6 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit P2; it is not examined at International AS. For full explanations see the [study guide](/resources/oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and-practice/). Hub: [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/). Tracker: [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). Find weak spots with the [free diagnostics](/diagnostics/).

## Key results

| Idea | Result |
|---|---|
| Implicit, power of y | d/dx (yⁿ) = n yⁿ⁻¹ dy/dx |
| Implicit, product | d/dx (xy) = y + x dy/dx |
| Implicit, function of y | d/dx (f(y)) = f′(y) dy/dx |
| Parametric gradient | dy/dx = (dy/dt) ÷ (dx/dt) |
| Tangent at (a, b) | y − b = m(x − a) |
| Normal at (a, b) | y − b = −(1/m)(x − a) |
| Horizontal tangent | numerator of dy/dx is 0 (or dy/dt = 0, dx/dt ≠ 0) |
| Vertical tangent | denominator of dy/dx is 0 (or dx/dt = 0, dy/dt ≠ 0) |

Second derivatives of implicit or parametric curves are not required. You are expected to know the derivatives and rules for exponentials, logarithms, trigonometric functions and the product, quotient and chain rules.

## Method: implicit differentiation

1. Check the point lies on the curve.
2. Differentiate every term with respect to x. Attach dy/dx to each y-term. Use the product rule on mixed terms.
3. Move all dy/dx terms to one side, factorise, divide.
4. Substitute x and y to get the gradient m.
5. Write the tangent, then the normal with gradient −1/m.

**Reminder.** The curve x³ − 2xy + y² = 4 passes through (1, 3).

```
3x² − 2y − 2x dy/dx + 2y dy/dx = 0
dy/dx (2y − 2x) = 2y − 3x²
dy/dx = (2y − 3x²)/(2y − 2x)
At (1, 3):  (6 − 3)/(6 − 2) = 3/4
Tangent: y − 3 = (3/4)(x − 1)   →  3x − 4y + 9 = 0
Normal:  y − 3 = −(4/3)(x − 1)  →  4x + 3y = 13
```

## Method: parametric differentiation

1. Differentiate x and y with respect to the parameter. Show both.
2. Divide: dy/dx = (dy/dt) ÷ (dx/dt). Simplify.
3. Substitute the value of t for the gradient. Substitute it into both equations for the point.
4. Write the tangent or normal.

**Reminder.** x = 1 + 2t², y = t³ − 6t at t = 2.

```
dx/dt = 4t     dy/dt = 3t² − 6
dy/dx = (3t² − 6)/(4t)  →  at t = 2:  6/8 = 3/4
Point: x = 1 + 8 = 9,  y = 8 − 12 = −4
Normal gradient −4/3:  y + 4 = −(4/3)(x − 9)  →  4x + 3y = 24
```

## Method: general point

1. Call the point t = p (or θ = φ). Write its coordinates in terms of p.
2. Find dy/dx in terms of p.
3. Write y − y₁ = m(x − x₁) with everything in p, then multiply out to remove fractions.
4. Look for identities, such as sin²φ + cos²φ = 1, that simplify the result.
5. To use it, substitute a given point (x, y) and solve for p, or set x = 0 or y = 0 for the intercepts.

**Reminder.** The curve x = t², y = t³ has dy/dx = 3t²/(2t) = 3t/2.

```
At t = p:  point (p², p³), gradient 3p/2
Tangent:  y − p³ = (3p/2)(x − p²)
          2y − 2p³ = 3px − 3p³
          2y = 3px − p³
Normal:   y − p³ = −(2/(3p))(x − p²)
```

Check: put (p², p³) into the tangent. Left side 2p³, right side 3p³ − p³ = 2p³. 

## Worked reminders by type

**Implicit with a function of y.** The curve ln y + xy = 2 passes through (2, 1). Differentiate: (1/y) dy/dx + y + x dy/dx = 0. Then dy/dx = −y²/(1 + xy), which is −1/3 at (2, 1).

**Implicit, stationary points.** For x² − xy + y² = 12, dy/dx = (2x − y)/(x − 2y). Horizontal tangents need y = 2x. Vertical tangents need x = 2y. Substitute each into the equation of the curve to find the points.

**Parametric, trigonometric.** For x = sin 2t and y = cos t, dy/dx = −sin t/(2 cos 2t). At t = π/6 this is −(1/2)/(2 × 1/2) = −1/2. The point is (√3/2, √3/2).

**Parametric, ellipse.** For x = a cos θ and y = b sin θ, dy/dx = −b cos θ/(a sin θ). At θ = φ the tangent is (x cos φ)/a + (y sin φ)/b = 1, after using sin²φ + cos²φ = 1. Always derive it rather than quote it, unless the question allows a quoted result.

**Parametric, parabola.** For x = 5t² and y = 10t, dy/dx = 1/t. At t = p the tangent is x − py + 5p² = 0 and the normal is px + y = 5p³ + 10p.

## Special cases

| Situation | What to do |
|---|---|
| dy/dx has a zero denominator at the point | Tangent is vertical: x = constant. Normal is horizontal: y = constant. |
| dy/dx = 0 at the point | Tangent is horizontal: y = constant. Normal is vertical: x = constant. |
| Question gives a gradient and asks for the point | Set dy/dx equal to it, solve, and substitute back into the curve. |
| Question gives a point on the curve in parametric form | Solve for t from one coordinate, then check it in the other. |
| Question asks where the tangent meets an axis | Put y = 0 or x = 0 in the simplified tangent equation. |
| Both dx/dt and dy/dt are zero | The formula gives 0/0. Do not quote a gradient without further work. |

## Setting out a long answer

Examiners can follow your reasoning only if each stage is visible. For a tangent and normal question, keep this order:

1. Show the differentiation (all of it, not just the result).
2. State the gradient in general form.
3. State the gradient at the point, with the point itself.
4. Write the line in point-gradient form.
5. Rearrange into the form the question asks for.
6. Give the normal separately, with its own gradient.

For a general-point question, keep the letter p or φ throughout and clear fractions only at the end.

## Must-know distinctions

| Compare | Point |
|---|---|
| dy/dx and dy/dt | dy/dt is the rate of change of y with the parameter. The gradient of the curve is dy/dt divided by dx/dt. |
| Tangent and normal | The normal is perpendicular to the tangent. Their gradients multiply to −1. |
| Horizontal tangent and vertical normal | A horizontal tangent has a vertical normal, x = constant, so −1/m is undefined. |
| Gradient at a point and gradient function | Give a number when asked for a point. Give an expression in x, y or t otherwise. |
| Point on curve and any point | An implicit gradient needs a point that satisfies the equation. |

## Quick self-test

1. Differentiate x²y³ with respect to x.
2. Differentiate cos 2y with respect to x.
3. The curve x² + y³ = 9 passes through (1, 2). Find dy/dx there.
4. Find dy/dx at (3/2, 2) on the curve xy² = 6.
5. A curve has x = 2t³ and y = t² + 1. Find dy/dx at t = −1.
6. A curve has x = t² − 2t and y = t³. Find the value of t where the tangent is vertical.
7. A curve has x = eᵗ and y = e²ᵗ + t. Find dy/dx at t = 0.
8. State the gradient of the normal to a curve at a point where the tangent has gradient −2/5.
9. For x = 4t, y = 2t², find the tangent at t = p in the form y = mx + c.
10. For x² + y² = 25, find the normal at (3, 4).

### Answers

1. 2xy³ + 3x²y² dy/dx.
2. −2 sin 2y × dy/dx.
3. 2x + 3y² dy/dx = 0, so dy/dx = −2x/(3y²) = −1/6.
4. y² + 2xy dy/dx = 0, so dy/dx = −y/(2x) = −2/3.
5. dy/dx = 2t/(6t²) = 1/(3t), so −1/3.
6. dx/dt = 2t − 2 = 0 gives t = 1 (and dy/dt = 3 ≠ 0), at the point (−1, 1).
7. dy/dx = (2e²ᵗ + 1)/eᵗ, so 3.
8. 5/2.
9. dy/dx = 4t/4 = t, so at t = p: y − 2p² = p(x − 4p), giving y = px − 2p².
10. dy/dx = −x/y = −3/4, so the normal has gradient 4/3: y − 4 = (4/3)(x − 3), which is 4x − 3y = 0.

## Where marks are usually lost

- Writing 3y² for the derivative of y³ with respect to x, with no dy/dx.
- Differentiating xy as if it were a single variable.
- Dividing dx/dt by dy/dt.
- Using the tangent gradient in the normal equation.
- Quoting a gradient without finding the point from the same value of t.
- Giving an implicit tangent in a different form from the one asked for, for example not clearing fractions when integer coefficients are requested.
- Taking a point that is not on the curve.
- In a general-point proof, stopping before the final form shown in the question. Show the identity step that gets you there.
- Calling a point a horizontal tangent when both numerator and denominator are zero.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Content area P2.6: Differentiation.
