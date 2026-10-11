---
title: "OCR A Level Mathematics A: Applications of differentiation: tangents, normals, stationary points, optimisation and increasing/decreasing functions (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Tangents and Stationary Points Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Applications of differentiation: tangents, normals, stationary points, optimisation and increasing/decreasing functions"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 117
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "differentiation-ocr-alevel-maths"
description: "Condensed revision notes on tangents, normals, stationary points, increasing functions, inflection and optimisation for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the applications of differentiation in OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026): references 1.07m, 1.07n and 1.07o (Stage 1, shared with AS Level) and 1.07p (Stage 2, A Level only). Read the [full study guide](/resources/ocr-a-level-mathematics-applications-of-differentiation-tangents-normals/) for explanations, then test yourself with the [practice set](/resources/ocr-a-level-mathematics-applications-of-differentiation-tangents-normals-practice/).

Related pages: the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key facts

| Idea | Rule | Ref |
|---|---|---|
| Gradient of a curve at a point | dy/dx (or f′(x)) evaluated at that x | 1.07m |
| Tangent | y − y₁ = m(x − x₁), m = dy/dx at the point | 1.07m |
| Normal | y − y₁ = −(1/m)(x − x₁) | 1.07m |
| Stationary point | dy/dx = 0 | 1.07n |
| Minimum | d²y/dx² > 0 at the point, or dy/dx goes − to + | 1.07n |
| Maximum | d²y/dx² < 0 at the point, or dy/dx goes + to − | 1.07n |
| Increasing | dy/dx > 0 on the interval | 1.07o |
| Decreasing | dy/dx < 0 on the interval | 1.07o |
| Point of inflection | d²y/dx² = 0 and its sign changes either side | 1.07p, A Level only |
| Stationary inflection | inflection with dy/dx = 0 as well | 1.07p, A Level only |
| Non-stationary inflection | inflection with dy/dx ≠ 0 | 1.07p, A Level only |

## Method boxes

### Tangent and normal

1. Differentiate. Substitute x to get m.
2. Get y from the curve.
3. Write the line through (x₁, y₁) with gradient m (tangent) or −1/m (normal).
4. Give the answer in the form the question asks, such as y = mx + c or ax + by + c = 0 with integer coefficients.

### Find and classify stationary points

1. Solve dy/dx = 0. Reject roots outside the domain.
2. Substitute each root into the curve for y.
3. Find d²y/dx² and substitute each root.
4. Positive means minimum, negative means maximum. Zero means switch to a sign check of dy/dx either side.
5. State the conclusion with the evidence.

### Where a function is increasing or decreasing

1. Differentiate and factorise.
2. Find the roots of the derivative.
3. Sketch the derivative or use a sign table.
4. Write the intervals using inequalities on x.

### Optimisation

1. One quantity to optimise, one constraint.
2. Eliminate a variable.
3. Differentiate, set to zero, solve.
4. Justify maximum or minimum.
5. Answer in context with units.

## Worked reminders

### Tangent and normal

y = x³ − 2x at x = −1. Then y = 1 and dy/dx = 3x² − 2 = 1.

```
Tangent: y − 1 = 1(x + 1)   →  y = x + 2
Normal : y − 1 = −1(x + 1)  →  y = −x
```

### Classification

y = x³ − 27x. dy/dx = 3x² − 27 = 3(x − 3)(x + 3). d²y/dx² = 6x.

```
x = 3  : y = −54, d²y/dx² = 18 > 0  →  minimum (3, −54)
x = −3 : y = 54,  d²y/dx² = −18 < 0 →  maximum (−3, 54)
```

The maximum value 54 is larger than the minimum value −54 even though the maximum is on the left. Local maxima and minima are not the greatest and least values overall.

### Increasing and decreasing

The same function: dy/dx > 0 when x < −3 or x > 3, so it is increasing there and decreasing for −3 < x < 3.

### When the second derivative gives zero

y = 3x⁴ − 20x³ + 1 has d²y/dx² = 12x(3x − 10) and dy/dx = 12x²(x − 5). At x = 0 the second derivative is zero, but dy/dx is negative on both sides. The point (0, 1) is therefore neither a maximum nor a minimum. Because d²y/dx² changes sign there, it is a stationary point of inflection.

### Optimisation

Two positive numbers x and y have x + y = 12. Find the greatest value of P = xy².

```
P = x(12 − x)² = x³ − 24x² + 144x
dP/dx = 3x² − 48x + 144 = 3(x − 4)(x − 12)   →  x = 4 (0 < x < 12)
d²P/dx² = 6x − 48 = −24 < 0  →  maximum
P = 4 × 8² = 256
```

### Sketching checklist

1. Intercepts: set x = 0 and y = 0. A repeated root means the curve touches the axis.
2. Stationary points: solve dy/dx = 0 and classify.
3. Inflection (A Level only): solve d²y/dx² = 0 and check the sign change.
4. End behaviour: the sign of the highest power decides what happens for large positive and negative x.
5. Label every coordinate you have found.

Example: y = x(x − 3)² = x³ − 6x² + 9x. It crosses the x-axis at 0 and touches it at 3. Since dy/dx = 3(x − 1)(x − 3) and d²y/dx² = 6x − 12, there is a maximum at (1, 4), a minimum at (3, 0) and an inflection at (2, 2).

### Inflection test in a table

For y = 3x⁴ − 20x³ + 1, d²y/dx² = 12x(3x − 10):

| x | −1 | 1 | 4 |
|---|---|---|---|
| sign of d²y/dx² | + | − | + |

The second derivative is zero at x = 0 and x = 10/3 and flips sign at each, which makes both inflections. Only x = 0 also has dy/dx = 0.

## Must-know distinctions

- Stationary point versus turning point: every maximum or minimum is stationary, but a stationary point of inflection is not a turning point.
- Stationary inflection versus non-stationary inflection: only the first has dy/dx = 0.
- d²y/dx² = 0 versus a sign change in d²y/dx²: you need both to claim inflection.
- Solving f′(x) = 0 versus solving f′(x) > 0: the first finds points, the second finds intervals.
- Tangent versus normal: the normal uses the negative reciprocal.
- Local maximum versus greatest value: in context, compare with the end values of the allowed range.

## Quick self-test

1. Find the gradient of y = 3x⁴ − 2x at x = 1.
2. Find the stationary point of y = x² − 6x + 4 and its y-value.
3. The tangent to a curve at a point has gradient −4. What is the gradient of the normal there?
4. Find the stationary points of y = 2x³ − 3x² and classify each using the second derivative.
5. Find the values of x for which f(x) = 6x − x³ is increasing.
6. Find the point of inflection of y = x³ − 3x² + x and say whether it is stationary.
7. Explain why y = x⁴ has no point of inflection even though d²y/dx² = 0 at x = 0.
8. Two numbers have sum 10. Find the value of x that maximises x²(10 − x), for 0 < x < 10.
9. For y = x² + 2/x, show that there is a stationary point at x = 1 and classify it.
10. Write the equation of the normal to y = x³ − 2x at x = −1 in the form ax + by = 0.

### Answers

1. dy/dx = 12x³ − 2, so the gradient is **10**.
2. dy/dx = 2x − 6 = 0 gives x = 3, and y = 9 − 18 + 4 = −5, so **(3, −5)**.
3. **1/4**, the negative reciprocal of −4.
4. dy/dx = 6x² − 6x = 6x(x − 1), so x = 0 or x = 1. d²y/dx² = 12x − 6: at x = 0 it is −6, so **maximum at (0, 0)**; at x = 1 it is 6, so **minimum at (1, −1)**.
5. f′(x) = 6 − 3x² > 0 when x² < 2, so **−√2 < x < √2**.
6. d²y/dx² = 6x − 6 = 0 at x = 1, with sign change (negative to positive). y = −1 and dy/dx = 3 − 6 + 1 = −2 ≠ 0. The point is **(1, −1), a non-stationary inflection**.
7. d²y/dx² = 12x² is zero at x = 0 but never negative, so there is no sign change. The point is not an inflection; it is a minimum. A zero second derivative is necessary for an inflection but not sufficient.
8. P = 10x² − x³, dP/dx = 20x − 3x² = x(20 − 3x) = 0 gives **x = 20/3**. d²P/dx² = 20 − 6x = −20 < 0, so it is a maximum.
9. dy/dx = 2x − 2/x². At x = 1 this is 0. d²y/dx² = 2 + 4/x³ = 6 > 0, so it is a **minimum** at (1, 3).
10. The normal is y = −x, which rearranges to **x + y = 0**.

## Where marks are usually lost

- Using the derivative value as the y-coordinate of the point.
- Giving the normal gradient as −m or as 1/m.
- Leaving the answer as a gradient when the question asked for an equation, or leaving an equation unrearranged when a form was specified.
- Finding stationary x-values and not finding the y-values.
- Declaring "minimum" or "maximum" without quoting the sign of d²y/dx² or the signs of dy/dx.
- Calling a point an inflection because d²y/dx² = 0, with no check on the sign change.
- Giving the roots of the derivative when the question asked for intervals of increase or decrease.
- Keeping a root that lies outside the domain of the problem, or giving a stationary value without checking it is sensible in context.
- Algebraic slips when eliminating the second variable in optimisation: re-expand the constraint once more before differentiating.

## Official syllabus

*Cambridge OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by Cambridge OCR: section 1.07, Differentiation, references 1.07m to 1.07p.
