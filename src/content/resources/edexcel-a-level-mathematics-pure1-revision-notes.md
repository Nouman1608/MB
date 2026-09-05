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
description: "Condensed recall notes on algebra, quadratics, straight-line coordinate geometry, differentiation and integration for Pure Mathematics 1 of Pearson Edexcel International A Level Mathematics (YMA01)."
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

**Worked example.** Find the set of values of k for which `kx² + 4x + 1` is positive for all real x. Condition 1: `k > 0`. Condition 2: discriminant < 0, so `4² − 4(k)(1) < 0`, giving `16 − 4k < 0`, so `k > 4`. Since `k > 4` already forces `k > 0`, the answer is simply **k > 4** — stating both conditions and seeing that the stronger one absorbs the weaker is exactly what full marks require.

## Coordinate geometry (straight lines)

```
gradient   m = (y2 - y1)/(x2 - x1)
line       y - y1 = m(x - x1)
distance   sqrt((x2-x1)^2 + (y2-y1)^2)
midpoint   ((x1+x2)/2, (y1+y2)/2)
```

Perpendicular gradients multiply to **−1**; parallel lines have **equal** gradients. Unit P1 covers only the straight line — before setting up an equation, identify which of these three situations the question describes:

1. **Line through two given points** — find the gradient first, then substitute one point into `y − y1 = m(x − x1)`.
2. **Line parallel to a given line, through a given point** — the new line has the *same* gradient as the given line.
3. **Line perpendicular to a given line, through a given point** — the new line's gradient is the *negative reciprocal* of the given line's gradient.

**The coordinate geometry of circles — equations of the form `(x − a)² + (y − b)² = r²` and the circle theorems built on them — is not introduced until Pure Mathematics 2.** A P1 question that looks like it needs a circle almost always turns out to be a straight-line condition in disguise.

## Differentiation

```
y = ax^n   ->   dy/dx = anx^(n-1)
```

**From first principles:**

```
f'(x) = lim(h->0) [f(x+h) - f(x)] / h
```

The proof is examinable, and the mark is for writing the limit notation, not just the algebra.

**Applications (P1):**

- Gradient of a curve at a point.
- **Tangent** — gradient `m` at that point. **Normal** — gradient `−1/m`, found using the same perpendicular-gradient rule as in the coordinate geometry section above.

**Stationary points, and classifying them as maxima or minima using `d²y/dx²`, are introduced in Pure Mathematics 2** — P1 differentiation questions stop at finding a gradient, tangent or normal.

## Integration

```
integral of ax^n = ax^(n+1)/(n+1) + c        n != -1
```

**The `+ c` is a mark** — P1 integration is entirely **indefinite** (there is no `n = −1` case either, since that needs logarithms, not introduced until Pure Mathematics 2). Given a gradient function and one point on the curve, substitute that point into the integrated expression to find `c` and hence the full equation of the curve.

**Definite integration, and using it to find the area under a curve or between two curves, is introduced in Pure Mathematics 2** — do not evaluate `[F(x)]` between two limits on a P1 paper; if a question gives two x-values, check whether it is really asking you to substitute each into a curve or tangent equation instead.

## Trigonometry

```
sine rule:    a/sin A = b/sin B
cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
area = (1/2)ab sin C
radians:      s = r*theta            (arc length)
              A = (1/2) r^2 * theta  (area of sector)
```

**The ambiguous case:** when using the sine rule to find an angle, there may be a **second solution**, since `sin(180° − θ) = sin θ`. Always check whether the obtuse alternative — not just the calculator's default acute answer — is the one consistent with the triangle described.

**Radians:** a common trap is mixing degree and radian mode on a calculator mid-question — check the angle unit the question uses before substituting into either radian formula above.

**The identity `sin²x + cos²x = 1` (and `tan x = sin x / cos x`), and solving trigonometric equations with them, are introduced in Pure Mathematics 2** — P1 trigonometry stays within triangles (sine rule, cosine rule, area) and radian-measure calculations.

## Exam traps

- Giving only the discriminant condition for "always positive" — both conditions are needed.
- Omitting `+ c` on an indefinite integral.
- Forgetting the second solution in the sine rule's ambiguous case.
- Using the normal's gradient where the tangent's is needed, or vice versa.
- Mixing up the *parallel* condition (equal gradients) with the *perpendicular* condition (gradients multiply to −1) when a question gives one line and a point.
- Working in the wrong angle mode (degrees vs radians) in an arc-length or sector-area calculation.
- Not showing method — method marks are available even with a wrong final answer.

## Self-test

1. What does `b² − 4ac = 0` mean geometrically?
2. Give the two conditions for `ax² + bx + c` to be positive for all x.
3. What is the gradient of a line perpendicular to one with gradient 2/3?
4. Give the formulas for arc length and area of a sector in terms of radius r and angle θ (in radians).
5. Why might a P1 question that gives you two x-values be asking for something other than a definite integral?

**Answers:** 1. The curve is tangent to the x-axis — there is one repeated root. 2. a > 0 and b² − 4ac < 0. 3. −3/2 (the negative reciprocal of 2/3). 4. Arc length s = rθ; area of sector A = ½r²θ. 5. Because definite integration and areas are not introduced until Pure Mathematics 2 — on a P1 paper, two x-values are more likely to be points for substitution into a tangent, normal or curve equation.
