---
title: "Edexcel A Level Mathematics: Pure Mathematics 1 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
description: "Condensed recall notes on algebra, quadratics, coordinate geometry, differentiation and integration for Edexcel A Level Mathematics 9MA0."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics 1 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-1/).

## Algebra and surds

```
a^m x a^n = a^(m+n)     a^-n = 1/a^n     a^(m/n) = (n-th root of a)^m
```

**Rationalising:** multiply by the surd, or by the **conjugate** for two terms. `(a + √b)(a − √b) = a² − b`, which removes the surd.

## Quadratics

```
completed square:  a(x + p)^2 + q     vertex at (-p, q)
discriminant:      b^2 - 4ac
```

| Discriminant | Roots | Geometry |
|---|---|---|
| **> 0** | Two distinct | Crosses the x-axis twice |
| **= 0** | One repeated | **Tangent** to the x-axis |
| **< 0** | None real | Never meets the x-axis |

**Almost every "find the values of k" question is a discriminant question.** Tangency → set it to zero; two intersections → greater than zero; no intersection → less than zero.

**"Always positive"** requires **two** conditions: `a > 0` **and** discriminant < 0. Giving only the discriminant loses a mark.

## Coordinate geometry

```
gradient   m = (y2 - y1)/(x2 - x1)
line       y - y1 = m(x - x1)
distance   sqrt((x2-x1)^2 + (y2-y1)^2)
midpoint   ((x1+x2)/2, (y1+y2)/2)
```

Perpendicular gradients multiply to **−1**.

**Circle:** `(x − a)² + (y − b)² = r²`, centre (a, b), radius r. From the expanded form, **complete the square in both x and y** to find the centre and radius.

**Three circle facts that solve most problems:**

1. The **tangent is perpendicular to the radius** at the point of contact.
2. The **perpendicular bisector of a chord passes through the centre**.
3. The angle in a **semicircle** is a right angle.

## Differentiation

```
y = ax^n   ->   dy/dx = anx^(n-1)
```

**From first principles:**

```
f'(x) = lim(h->0) [f(x+h) - f(x)] / h
```

The proof is examinable, and the mark is for writing the limit notation, not just the algebra.

**Applications:**

- Gradient of a curve at a point.
- **Tangent** — gradient `m` at that point. **Normal** — gradient `−1/m`.
- **Stationary points:** set `dy/dx = 0`, then classify with `d²y/dx²` — positive means a **minimum**, negative a **maximum**.
- **Increasing** where `dy/dx > 0`; **decreasing** where `dy/dx < 0`.

**If `d²y/dx² = 0` the test is inconclusive** — you must check the sign of the gradient either side. That case is examined precisely because the shortcut fails.

## Integration

```
integral of ax^n = ax^(n+1)/(n+1) + c        n != -1
```

**The `+ c` is a mark.** For a definite integral it cancels, but omitting it in an indefinite integral costs.

```
definite:   [F(x)] from a to b  =  F(b) - F(a)
area between curve and x-axis:  integral of y dx
area between two curves:        integral of (upper - lower) dx
```

**Area below the x-axis integrates to a negative value.** For a total *area* rather than a signed integral, split at the roots and take the absolute value of each part. Adding the signed values gives the wrong answer and is a standard trap.

To find the area between two curves, find the intersections first — they are the limits.

## Trigonometry

```
sin^2 x + cos^2 x = 1        tan x = sin x / cos x
sine rule:    a/sin A = b/sin B
cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
area = (1/2)ab sin C
```

**The ambiguous case:** when using the sine rule to find an angle, there may be a **second solution**, since `sin(180° − θ) = sin θ`. Always check whether the obtuse alternative is consistent with the triangle.

When solving trigonometric equations, find **all** solutions in the given interval — use the symmetry of the graph, and check both ends of the range.

## Exam traps

- Giving only the discriminant condition for "always positive".
- Omitting `+ c`.
- Adding signed integrals when a total area is required.
- Forgetting the second solution in the ambiguous case.
- Using the normal's gradient where the tangent's is needed, or vice versa.
- Not checking the sign either side when `d²y/dx² = 0`.
- Not showing method — method marks are available even with a wrong final answer.

## Self-test

1. What does `b² − 4ac = 0` mean geometrically?
2. Give the two conditions for `ax² + bx + c` to be positive for all x.
3. State three circle theorems useful in coordinate geometry.
4. How do you classify a stationary point, and when does the test fail?
5. Why can adding definite integrals give the wrong area?

**Answers:** 1. The curve is tangent to the x-axis — there is one repeated root. 2. a > 0 and b² − 4ac < 0. 3. The tangent is perpendicular to the radius at the point of contact; the perpendicular bisector of a chord passes through the centre; the angle in a semicircle is 90°. 4. Substitute into d²y/dx² — positive gives a minimum, negative a maximum; the test fails when d²y/dx² = 0, and you must then check the gradient's sign either side. 5. Regions below the x-axis integrate to negative values, so they cancel against positive regions; split at the roots and take absolute values.
