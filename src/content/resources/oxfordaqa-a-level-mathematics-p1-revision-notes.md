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
description: "Condensed recall notes for OxfordAQA 9660 Unit P1 on algebra, quadratics, coordinate geometry and calculus, with circle and trig flagged as Unit PSM1 content."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--06-chord-bisector-centre.webp" width="900" height="1070" alt="Chord AB with A(2,1), B(6,5); its perpendicular bisector y=-x+7 meets y=x-3 at the centre (5,2); d^2 + half-chord^2 = r^2. AQA worked example 5." loading="lazy">
  <figcaption>The centre always lies on the perpendicular bisector of any chord, so two chords fix the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--05-angle-in-semicircle.webp" width="900" height="1046" alt="Circle with diameter PQ, P(1,7), Q(7,-1), point R(8,6): gradients -1/7 and 7 multiply to -1, so angle PRQ is 90 degrees." loading="lazy">
  <figcaption>A diameter subtends a right angle at any other point of the circle, which can be proved with gradients.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--04-is-it-a-circle.webp" width="900" height="1070" alt="Equation x^2+y^2-4x+6y+k=0 completes to (x-2)^2+(y+3)^2=13-k: circles for k=0 and 9, a point at k=13 and nothing for k&gt;13." loading="lazy">
  <figcaption>After completing the square the right-hand side is r squared, so it must be positive for a circle to exist.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--05-ambiguous-case.webp" width="900" height="890" alt="Angle A = 34°, a = 9, b = 13. A circle of radius 9 centred on C meets the line through A at two points, giving two triangles: B = 126.1° with c = 5.47, and B = 53.9° with c = 16.1. Two triangles exist when b sin A &lt; a &lt; b, here 7.27 &lt; 9 &lt; 13." loading="lazy">
  <figcaption>Two sides and a non-included angle can fit two different triangles.</figcaption>
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the--01-gradient-sign-nature.webp" width="900" height="870" alt="Graph of y = x^3 - 9x^2 + 15x + 8 with the gradient sign marked in three zones. The curve increases for x &lt; 1, decreases for 1 &lt; x &lt; 5 and increases for x &gt; 5. It has a maximum at (1, 15) and a minimum at (5, -17), both with horizontal tangents." loading="lazy">
  <figcaption>The sign of dy/dx either side of a stationary point tells you whether it is a maximum or a minimum.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the--02-second-derivative-zero.webp" width="900" height="850" alt="Graph of y = 3x^5 - 5x^3 with a maximum at (-1, 2) and minimum at (1, -2). At the origin f″ = 0 so the second-derivative test fails; the gradient is -2.8125 at x = -0.5 and x = 0.5 and 0 at x = 0, so the origin is a point of inflection." loading="lazy">
  <figcaption>When f″(x) = 0, check the gradient on both sides: the same sign means a point of inflection.</figcaption>
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-mathematics-p1-revision-notes--05-area-below-axis-x2-4.webp" width="900" height="890" alt="Parabola y = x^2 - 4 wholly below the x-axis from -2 to 2, shaded. The integral gives -32/3, so the area is its magnitude, 32/3." loading="lazy">
  <figcaption>A region wholly below the axis: negative integral, positive area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-integration--01-constant-of-integration.webp" width="900" height="748" alt="Three curves y = 3√(4x + 1) + c are vertical shifts of each other with identical gold tangents at x = 2. Only c = 1 passes through (2, 10), so a point on the curve fixes the constant. This is the lesson's worked example 5." loading="lazy">
  <figcaption>Integrating gives a family of curves; a known point picks out one of them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-integration--03-area-between-curves.webp" width="900" height="764" alt="The parabola y = 6x − x² and line y = 2x meet at (0, 0) and (4, 8). The region between is cut into vertical strips of height top minus bottom, 4x − x². The integral of that from 0 to 4 is 32/3." loading="lazy">
  <figcaption>The area between two curves is the integral of the top curve minus the bottom curve.</figcaption>
</figure>

## Frequently asked questions

**How do you show a quadratic is always positive?**
Two conditions are needed: the coefficient a > 0 and the discriminant b² − 4ac < 0. Giving only one of them loses a mark.

**How do you rationalise a denominator like a + √b?**
Multiply the numerator and denominator by the conjugate a − √b, since (a + √b)(a − √b) = a² − b.

**What happens if the second derivative is zero at a stationary point?**
The second derivative test is inconclusive, so check the sign of the gradient on either side of the point to decide its nature.

**Is the circle in OxfordAQA 9660 Unit P1?**
No. P1 coordinate geometry covers straight lines and the intersection of a line and a curve. The circle (PP1.1) and trigonometry (PP1.2) belong to Unit PSM1.

**Do you have to differentiate from first principles in Unit P1?**
You need to know the limit definition of the derivative, as the limit of the gradient of a chord. Carrying out differentiation from first principles is not tested; routine questions use the power rule directly.
