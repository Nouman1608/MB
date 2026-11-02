---
title: "OxfordAQA A Level Mathematics: Pure Maths 1 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Maths (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
description: "Condensed recall notes on algebra, quadratics, coordinate geometry and calculus for OxfordAQA 9660 Unit P1, with circle and trigonometry sections marked as Unit PSM1 content."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--01-root-then-power.webp" width="900" height="880" alt="Three step-by-step pipelines. 64 to the 2/3: cube root gives 4, square gives 16. 1296 to the 3/4: fourth root gives 6, cube gives 216. (27/8) to the minus 2/3: flip to 8/27, cube root gives 2/3, square gives 4/9. A note reminds that 2 to the minus 3 is 1/8, not minus 8." loading="lazy">
  <figcaption>For a fractional index take the root first, then the power; a negative index flips the fraction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--05-conjugate-area.webp" width="900" height="890" alt="A square of side 5 loses a corner square of side 2 root 3 (area 12), leaving an L-shape of area 13. Moving the lower rectangle turns the L into a rectangle of width 5 minus 2 root 3 and height 5 plus 2 root 3, so the conjugate product is rational: 13." loading="lazy">
  <figcaption>The conjugate pair multiplies to a rational number because (p - q)(p + q) = p squared minus q squared.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-mathematics-p1-revision-notes--03-always-positive-two-conditions.webp" width="900" height="1040" alt="Three parabolas: x^2 - 4x + 5 (a &gt; 0, discriminant -4) is always positive; x^2 - 4x + 3 (a &gt; 0, discriminant 4) crosses the axis at 1 and 3; -x^2 + 4x - 5 (discriminant -4 but a &lt; 0) is always negative." loading="lazy">
  <figcaption>Both a &gt; 0 and discriminant &lt; 0 are needed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--08-complete-square-vertex.webp" width="900" height="890" alt="Graph of y = 4x squared + 8x - 3, equal to 4(x+1) squared - 7, with vertex (-1,-7) on the line x = -1, y-intercept (0,-3) and roots about 0.32 and -2.32. A grey dashed y = 4x squared shows the shift of 1 left and 7 down." loading="lazy">
  <figcaption>Completed-square form a(x + p)^2 + q gives the vertex (-p, q) and the line of symmetry x = -p.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--02-discriminant-roots.webp" width="900" height="1150" alt="Three parabolas y = x^2 - 4x + k for k = 1, 4 and 7. Discriminants 12, 0 and -12 give two distinct real roots, one repeated root and no real roots respectively." loading="lazy">
  <figcaption>The sign of b^2 - 4ac tells you whether the curve crosses, touches or misses the x-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--07-discriminant-in-k.webp" width="900" height="980" alt="Graph of D = 4(k-5)(k+2) against k. It is zero at k = -2 and k = 5, negative between them (no real roots) and positive outside (two distinct real roots)." loading="lazy">
  <figcaption>With an unknown k, write the discriminant in k and read the ranges from its graph.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--04-line-meets-curve.webp" width="900" height="940" alt="Parabola y = x^2 with three parallel lines of gradient 2. Substituting gives discriminants 16, 0 and -8: two intersections, a tangent at (1, 1), and no intersection." loading="lazy">
  <figcaption>After substitution, the discriminant shows whether the line cuts, touches or misses the curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--03-hidden-quadratic.webp" width="900" height="1030" alt="Graph of 3^(2x) - 12 times 3^x + 27 crossing the x-axis at x = 1 and x = 2, with its lowest point -9. Below it, the substitution y = 3^x gives y = 3 or 9, and converting back gives x = 1 or 2." loading="lazy">
  <figcaption>Substitute y = 3^x, solve the quadratic, then convert back to x.</figcaption>
</figure>


## Coordinate geometry (P1)

```
m = (y2-y1)/(x2-x1)        y - y1 = m(x - x1)
distance = sqrt((x2-x1)^2 + (y2-y1)^2)
```

Perpendicular gradients multiply to **−1**. P1's coordinate geometry is lines only (equation of a line, parallel/perpendicular conditions, intersection of a line and a curve) -- the circle is **not** P1 content; see below.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--01-line-segment-toolkit.webp" width="900" height="950" alt="A(-2,5) and B(4,1): gradient, midpoint M, line 2x+3y-11=0 and perpendicular bisector 3x-2y+3=0 whose gradients multiply to -1." loading="lazy">
  <figcaption>The gradient triangle, the midpoint and the perpendicular bisector all come from the same two points.</figcaption>
</figure>


## Circle and trigonometry — Unit PSM1 content, not P1

**Neither of these two sections is P1 content.** Both belong to the *other* AS unit, PSM1's pure
maths strand (PP1.1 Circle, PP1.2 Trigonometry). They're included here because every P1 candidate
also sits PSM1, but don't revise them expecting a P1 paper to test them.

```
circle:  (x-a)^2 + (y-b)^2 = r^2
```

**Three circle facts solve most problems:** the tangent is perpendicular to the radius at the point of contact; the perpendicular bisector of a chord passes through the centre; the angle in a semicircle is a right angle.

From an expanded circle equation, **complete the square in both x and y** to find the centre and radius.

```
sin^2 x + cos^2 x = 1        tan x = sin x / cos x
sine rule:    a/sin A = b/sin B
cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
area = (1/2)ab sin C
```

**The ambiguous case:** when the sine rule gives an angle, there may be a **second solution**, since `sin(180° − θ) = sin θ`. Always check whether the obtuse alternative is consistent with the triangle.

When solving trigonometric equations, find **all** solutions in the stated interval using the graph's symmetry, and check both ends of the range.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--07-tangent-and-normal.webp" width="900" height="1026" alt="Circle centre (3,-5), point P(6,-1): radius gradient 4/3, tangent gradient -3/4 giving 3x+4y-14=0, normal 4x-3y-27=0 through the centre. No calculus needed." loading="lazy">
  <figcaption>The tangent is perpendicular to the radius, and the normal runs along it through the centre.</figcaption>
</figure>


## Differentiation (P1)

```
y = ax^n  ->  dy/dx = anx^(n-1)
```

**Applications:** gradient at a point; **tangent** with gradient m; **normal** with gradient −1/m; stationary points where `dy/dx = 0`, classified by `d²y/dx²` — positive gives a minimum, negative a maximum.

**If `d²y/dx² = 0` the test is inconclusive** and you must check the sign of the gradient either side. That case appears precisely because the shortcut fails.

**The limit definition of the derivative** — the gradient of the tangent as the limit of the gradient of a chord — is required knowledge. **Carrying out differentiation from first principles itself is not tested**; routine questions use the shortcut power rule directly.

**Worked example.** Find the coordinates and nature of the stationary point of y = x² − 8x + 3.

```
dy/dx = 2x - 8
2x - 8 = 0  ->  x = 4
y = 16 - 32 + 3 = -13   ->  (4, -13)

d2y/dx2 = 2, positive  ->  minimum
```

Completing the square gives (x − 4)² − 13, confirming the same turning point — a quick, independent check worth doing when time allows.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-mathematics-p1-revision-notes--04-stationary-point-x2-8x.webp" width="900" height="880" alt="Parabola with minimum at (4, -13) and horizontal tangent. dy/dx = 2x - 8 = 0 gives x = 4; y = -13; d2y/dx2 = 2 &gt; 0 so a minimum; completing the square confirms the vertex." loading="lazy">
  <figcaption>The lesson worked example drawn on its graph.</figcaption>
</figure>


## Integration

```
integral of ax^n = ax^(n+1)/(n+1) + c        n != -1
```

**The `+ c` is a mark.** It cancels in a definite integral but is required in an indefinite one.

**Area:** the integral gives a **signed** value, so regions below the x-axis integrate negative. For a region **entirely below** the x-axis, the area is simply the magnitude of the (negative) signed integral. P1 will **not** set questions on regions that are partially above and partially below the x-axis, so the "split at the roots and take absolute values" technique needed for that mixed case is background knowledge only, not something a P1 paper will require.

**Worked example.** Find the area enclosed between y = x² − 4 and the x-axis, between x = −2 and x = 2.

```
integral of (x^2 - 4) dx = x^3/3 - 4x

[8/3 - 8] - [-8/3 + 8] = -32/3

signed integral = -32/3, so area = 32/3
```

The curve lies entirely below the axis on this interval, so the signed integral comes out negative — the **area is its magnitude**, 32/3.

For the area between two curves, find the intersections first: they are the limits, and you integrate (upper − lower).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-mathematics-p1-revision-notes--05-area-below-axis-x2-4.webp" width="900" height="890" alt="Parabola y = x^2 - 4 wholly below the x-axis from -2 to 2, shaded. The integral gives -32/3, so the area is its magnitude, 32/3." loading="lazy">
  <figcaption>A region wholly below the axis: negative integral, positive area.</figcaption>
</figure>


## Exam traps

- Giving one condition for "always positive".
- Omitting `+ c`.
- Forgetting that the signed integral over a region entirely below the x-axis is negative, and that the area is its magnitude.
- Missing the second solution in the ambiguous case.
- Confusing tangent and normal gradients.
- Forgetting to reject invalid roots after a substitution.

## Self-test

1. What does `b² − 4ac = 0` mean geometrically?
2. Give both conditions for a quadratic to be positive for all x.
3. State three circle theorems useful in coordinate geometry. (PSM1 content, not P1 -- see above.)
4. When does the second derivative test fail, and what do you do?
5. A curve lies entirely below the x-axis between x = a and x = b. Why doesn't the signed integral directly give the area, and how do you find the area?

**Answers:** 1. The curve is tangent to the x-axis — one repeated root. 2. a > 0 and b² − 4ac < 0. 3. The tangent is perpendicular to the radius at the point of contact; the perpendicular bisector of a chord passes through the centre; the angle in a semicircle is 90°. 4. When d²y/dx² = 0; you must then examine the sign of the gradient on either side of the stationary point. 5. The signed integral comes out negative because the curve is below the axis throughout, so the area is the magnitude (absolute value) of that negative value. (Splitting a region at the roots and taking absolute values of each part is needed only when a region is partially above and partially below the axis -- P1 will not set that case.)
