---
title: "Edexcel International A Level Mathematics: Pure Mathematics 1 — Revision Notes"
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
    subtopic: "p1-coordinate-geometry-edexcel-alevel-maths"
description: "Revision notes for Pearson Edexcel IAL Mathematics Pure 1 (YMA01): surds, quadratics, straight lines, differentiation, integration and trigonometry."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure1--01-perp-rotation.webp" width="900" height="860" alt="A line from the origin goes 5 across and 3 up, gradient 3/5. Turned through a right angle it goes 3 left and 5 up, gradient minus 5/3. The right angle is marked, and 3/5 times minus 5/3 equals minus 1." loading="lazy">
  <figcaption>Turning a direction through a right angle swaps the steps and flips one sign, so the gradients multiply to −1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure1--06-collinear-by-gradient.webp" width="900" height="884" alt="Points A(1,2), B(5,4), C(11,7). Gradient triangle AB has run 4, rise 2 (1/2); BC has run 6, rise 3 (1/2). Equal gradients with B shared mean A, B, C lie on one line." loading="lazy">
  <figcaption>Equal gradients AB and BC with a shared point show three points are collinear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure1--07-general-form-intercepts.webp" width="900" height="975" alt="The line 6x - 5y - 23 = 0 through A(3,-1) and B(8,5): gradient triangle run 5 rise 6 gives 6/5 = -a/b. Setting x = 0 gives y = -23/5; setting y = 0 gives x = 23/6. B satisfies the equation." loading="lazy">
  <figcaption>Gradient is -a/b and the intercepts come from setting x or y to zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure1--08-unknown-k-conditions.webp" width="900" height="1040" alt="Line l2: 3x - 2y = 5 has gradient 3/2. l1: kx + 4y = 9 has gradient -k/4. Parallel when -k/4 = 3/2, k = -6 (lines never meet). Perpendicular when (-k/4)(3/2) = -1, k = 8/3, gradient -2/3, and the lines cross at a right angle." loading="lazy">
  <figcaption>Write each gradient in terms of k, then apply the parallel or perpendicular condition.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--01-line-segment-toolkit.webp" width="900" height="950" alt="A(-2,5) and B(4,1): gradient, midpoint M, line 2x+3y-11=0 and perpendicular bisector 3x-2y+3=0 whose gradients multiply to -1." loading="lazy">
  <figcaption>The gradient triangle, the midpoint and the perpendicular bisector all come from the same two points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--01-gradient-rise-run.webp" width="900" height="910" alt="A line passes through A (1, 1) and B (5, 4). Going 4 along and 3 up gives rise 3 and run 4, so the gradient is 3 divided by 4 = 0.75." loading="lazy">
  <figcaption>Gradient is the change up divided by the change along.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs--07-line-two-points.webp" width="900" height="910" alt="A straight line passes through (minus 3, minus 4) and (5, 8). A step triangle of 8 across and 12 up gives gradient 3/2. Using one point, y + 4 = 3/2 (x + 3), so y = 3/2 x + 1/2; the line crosses the y-axis at (0, one half)." loading="lazy">
  <figcaption>Gradient from two points, then the equation of the line through them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--05-parallel-lines.webp" width="900" height="1000" alt="Lines y = 2x - 1 and y = 2x + 3 each go 1 across and 2 up, so they are parallel. The parallel line through P (1, 5) has c = 3." loading="lazy">
  <figcaption>Parallel lines share a gradient; use a point to find c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--06-perpendicular-lines.webp" width="900" height="960" alt="Two lines meet at right angles at (0, 1). One has gradient 2/3 and the other -3/2; their product is -1." loading="lazy">
  <figcaption>Perpendicular gradients multiply to -1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--07-perpendicular-bisector.webp" width="900" height="1050" alt="AB joins (-3, 8) and (9, -2) with gradient -5/6. The bisector has gradient 6/5 and passes through M (3, 3), giving y = 6/5 x - 3/5." loading="lazy">
  <figcaption>Combine gradient, perpendicular rule, midpoint and y = mx + c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--07-vec-proof-collinear.webp" width="900" height="1010" alt="Triangle OAB is drawn with a = (3,1), b = (1,4). N divides AB in ratio 1:2 and ON = (1/3)(2a + b). D has OD = 2a + b = 3 ON, so O, N and D are on one line with ON : ND = 1 : 2." loading="lazy">
  <figcaption>OD is a multiple of ON and both start at O, so O, N and D are collinear.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure1--02-right-angle-gradients.webp" width="900" height="750" alt="Triangle with D(1, 1), E(7, 3), F(0, 4). DE has gradient 1/3 and DF has gradient minus 3. Their product is minus 1 so the angle at D is a right angle." loading="lazy">
  <figcaption>Gradients 1/3 and −3 multiply to −1, so angle EDF is 90°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--04-y-mx-c.webp" width="900" height="990" alt="The line y = 2x - 1 crosses the y-axis at (0, -1) so c = -1. Between (1, 1) and (3, 5) it goes 2 across and 4 up, so m = 2." loading="lazy">
  <figcaption>m is the gradient and c is where the line crosses the y-axis.</figcaption>
</figure>

## Frequently asked questions

**When is a quadratic positive for all values of x?**
Two conditions are needed: a > 0 and the discriminant b² − 4ac < 0. Giving only the discriminant condition loses marks.

**Do you need + c in Pure 1 integration?**
Yes. Integration in Pure 1 of Edexcel IAL Mathematics (YMA01) is indefinite, so the constant of integration carries a mark.

**Is differentiation from first principles examinable in Pure 1?**
Yes. The proof is examinable, and the mark is for writing the limit notation as well as the algebra.

**What is the ambiguous case of the sine rule?**
When using the sine rule to find an angle, there may be a second solution, because sin(180° − θ) = sin θ. Check whether the obtuse angle is also possible.

**Are circles and stationary points in Edexcel IAL Pure 1?**
No. Pure 1 covers only straight-line coordinate geometry and applications of differentiation such as tangents and normals; circles and classifying stationary points come in Pure Mathematics 2.
