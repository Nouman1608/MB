---
title: "OxfordAQA A Level Mathematics: Pure Maths 1 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Maths (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "International AS exams from May/June 2018, International A-level exams from May/June 2019, Version 5.2"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
description: "Condensed recall notes on algebra, quadratics, coordinate geometry, trigonometry and calculus for International AS Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Maths 1 study guide](/resources/a-level-oxfordaqa-mathematics-unit-p1/).

## Algebra and surds

```
a^m x a^n = a^(m+n)     a^-n = 1/a^n     a^(m/n) = (n-th root of a)^m
```

Rationalise a single-term denominator by multiplying by the surd; for `a + √b`, multiply by the **conjugate** `a − √b`, since `(a+√b)(a−√b) = a² − b`.

## Quadratics

```
completed square:  a(x + p)^2 + q     vertex at (-p, q)
discriminant:  b^2 - 4ac
```

| Discriminant | Meaning |
|---|---|
| **> 0** | Two distinct roots — crosses the axis twice |
| **= 0** | Repeated root — **tangent** to the axis |
| **< 0** | No real roots — never meets the axis |

**Almost every "find the values of k" question is a discriminant question.** Tangency means set it to zero; two intersections means greater than zero; no intersection means less than zero.

**"Always positive" needs two conditions:** `a > 0` **and** discriminant < 0. Giving only one loses a mark.

**Disguised quadratics** — substitute for the repeated term, then **substitute back and reject impossible values** (√x cannot be negative; aˣ is always positive).

## Coordinate geometry

```
m = (y2-y1)/(x2-x1)        y - y1 = m(x - x1)
distance = sqrt((x2-x1)^2 + (y2-y1)^2)
circle:  (x-a)^2 + (y-b)^2 = r^2
```

Perpendicular gradients multiply to **−1**.

**Three circle facts solve most problems:** the tangent is perpendicular to the radius at the point of contact; the perpendicular bisector of a chord passes through the centre; the angle in a semicircle is a right angle.

From an expanded circle equation, **complete the square in both x and y** to find the centre and radius.

## Trigonometry

```
sin^2 x + cos^2 x = 1        tan x = sin x / cos x
sine rule:    a/sin A = b/sin B
cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
area = (1/2)ab sin C
```

**The ambiguous case:** when the sine rule gives an angle, there may be a **second solution**, since `sin(180° − θ) = sin θ`. Always check whether the obtuse alternative is consistent with the triangle.

When solving trigonometric equations, find **all** solutions in the stated interval using the graph's symmetry, and check both ends of the range.

## Differentiation

```
y = ax^n  ->  dy/dx = anx^(n-1)
```

**Applications:** gradient at a point; **tangent** with gradient m; **normal** with gradient −1/m; stationary points where `dy/dx = 0`, classified by `d²y/dx²` — positive gives a minimum, negative a maximum.

**If `d²y/dx² = 0` the test is inconclusive** and you must check the sign of the gradient either side. That case appears precisely because the shortcut fails.

**Differentiation from first principles** — using the limit definition of the derivative rather than the power rule directly — is examinable, though routine questions use the shortcut rule.

**Worked example.** Find the coordinates and nature of the stationary point of y = x² − 8x + 3.

```
dy/dx = 2x - 8
2x - 8 = 0  ->  x = 4
y = 16 - 32 + 3 = -13   ->  (4, -13)

d2y/dx2 = 2, positive  ->  minimum
```

Completing the square gives (x − 4)² − 13, confirming the same turning point — a quick, independent check worth doing when time allows.

## Integration

```
integral of ax^n = ax^(n+1)/(n+1) + c        n != -1
```

**The `+ c` is a mark.** It cancels in a definite integral but is required in an indefinite one.

**Area:** the integral gives a **signed** value, so regions below the x-axis integrate negative. For a total area, **split at the roots and take absolute values** — simply adding the signed integrals gives the wrong answer.

**Worked example.** Find the area enclosed between y = x² − 4 and the x-axis, between x = −2 and x = 2.

```
integral of (x^2 - 4) dx = x^3/3 - 4x

[8/3 - 8] - [-8/3 + 8] = -32/3

signed integral = -32/3, so area = 32/3
```

The curve lies entirely below the axis on this interval, so the signed integral comes out negative — the **area is its magnitude**, 32/3.

For the area between two curves, find the intersections first: they are the limits, and you integrate (upper − lower).

## Exam traps

- Giving one condition for "always positive".
- Omitting `+ c`.
- Adding signed integrals when a total area is required.
- Missing the second solution in the ambiguous case.
- Confusing tangent and normal gradients.
- Forgetting to reject invalid roots after a substitution.

## Self-test

1. What does `b² − 4ac = 0` mean geometrically?
2. Give both conditions for a quadratic to be positive for all x.
3. State three circle theorems useful in coordinate geometry.
4. When does the second derivative test fail, and what do you do?
5. Why can adding definite integrals give the wrong area?

**Answers:** 1. The curve is tangent to the x-axis — one repeated root. 2. a > 0 and b² − 4ac < 0. 3. The tangent is perpendicular to the radius at the point of contact; the perpendicular bisector of a chord passes through the centre; the angle in a semicircle is 90°. 4. When d²y/dx² = 0; you must then examine the sign of the gradient on either side of the stationary point. 5. Regions below the x-axis give negative values that cancel against positive regions, so the total area must be found by splitting at the roots and taking absolute values.
