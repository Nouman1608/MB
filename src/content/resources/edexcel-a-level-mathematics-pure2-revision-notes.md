---
title: "Edexcel A Level Mathematics: Pure Mathematics 2 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
description: "Condensed recall notes on proof, algebra and functions, sequences and series, exponentials/logarithms, trigonometry, differentiation and integration for Pearson Edexcel International A Level Mathematics (YMA01), Unit P2."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/).

## Proof (P2.1)

Two methods: **proof by deduction** (a general algebraic argument that holds for all cases) and **proof by exhaustion** (checking **every** case in a genuinely finite set — e.g. all integers in a stated range, or all remainders when dividing by a fixed number).

**Proof by exhaustion checklist:** (1) confirm the case list is truly complete — no case silently skipped; (2) present cases in an organised, clearly labelled list, not a run of unstructured numbers. A correct final statement reached by incomplete or unjustified reasoning earns far fewer marks than the working alone suggests.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure2-revision-notes--04-exhaustion-odd-squares.webp" width="900" height="840" alt="Five cards for n = 1, 3, 5, 7, 9 show n by n grids with one unpaired centre square, giving squares 1, 9, 25, 49 and 81, all odd. The case list is stated as complete, so the statement is proved for this finite set." loading="lazy">
  <figcaption>Check every case in a complete finite list.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--02-two-odd-letters.webp" width="900" height="820" alt="A 4 by 4 table shows p + q for odd p and q from 1, 3, 5, 7: all sixteen sums are even. The diagonal cells, where p = q, hold only 2, 6, 10 and 14, which is all that one letter 2n+1 used twice could cover. Using 2m+1 and 2n+1 gives 2(m+n+1) for every pair." loading="lazy">
  <figcaption>Two different odd numbers need two different letters; using one letter only covers the diagonal.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--03-remainder-lanes.webp" width="900" height="1075" alt="The integers 0 to 39 are arranged in four columns by remainder on division by 4. Squares sit only in the 4k and 4k+1 columns. Cubes (OCR only) sit in 4k, 4k+1 and 4k+3 but never 4k+2." loading="lazy">
  <figcaption>Every integer lies in one of four remainder lanes, so four cases cover them all.</figcaption>
</figure>


## Algebra and functions (P2.2)

**Factor theorem:** if f(b/a) = 0, then (ax − b) is a factor of f(x) — use it to find a first factor of a cubic before completing the factorisation by inspection or division. **Remainder theorem:** dividing f(x) by (ax − b) leaves remainder f(b/a), without carrying out the full division. (The modulus function is introduced later, in Pure Mathematics 3.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--01-factor-theorem-graph.webp" width="900" height="1020" alt="Graph of f(x) = x cubed minus 4x squared minus 7x + 10 crossing the x-axis at minus 2, 1 and 5. Each root is marked and labelled with its linear factor (x + 2), (x - 1), (x - 5). A zero of the function corresponds to a linear factor." loading="lazy">
  <figcaption>A root of f is where the graph meets the x-axis, and it gives a linear factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--02-remainder-is-fa.webp" width="900" height="990" alt="Two cubics are drawn: f(x) = 3x^3 + 2x^2 - 7x + 4 and (x - 2)(3x^2 + 8x + 9), which always sit 22 apart. At x = 2 the gap is marked as 22, equal to f(2), the remainder when f is divided by (x - 2)." loading="lazy">
  <figcaption>Dividing by (x - 2) leaves a remainder equal to the height f(2); the quotient part is the same curve lowered by that amount.</figcaption>
</figure>


## Coordinate geometry (P2.3)

**Circle:** (x − a)² + (y − b)² = r², centre (a, b), radius r — complete the square in both x and y to extract these from the expanded form. **Three circle facts:** (1) the tangent is perpendicular to the radius at the point of contact; (2) the perpendicular bisector of a chord passes through the centre; (3) the angle in a semicircle is a right angle. (Straight-line equations and the parallel/perpendicular conditions are covered in Unit P1.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--04-is-it-a-circle.webp" width="900" height="1070" alt="Equation x^2+y^2-4x+6y+k=0 completes to (x-2)^2+(y+3)^2=13-k: circles for k=0 and 9, a point at k=13 and nothing for k&gt;13." loading="lazy">
  <figcaption>After completing the square the right-hand side is r squared, so it must be positive for a circle to exist.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--03-circle-equation.webp" width="900" height="1046" alt="Circle centre (3,-5) radius 5 with a 3-4-5 right triangle from the centre to P(6,-1), showing the equation (x-3)^2+(y+5)^2=25 is Pythagoras." loading="lazy">
  <figcaption>Every point on the circle satisfies Pythagoras with the centre, which is why the equation has that form.</figcaption>
</figure>

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


## Sequences and series (P2.4)

| Type | Common feature | Sum formula basis |
|---|---|---|
| **Arithmetic** | Common **difference** between terms | Sn = n/2 (2a + (n−1)d) |
| **Geometric** | Common **ratio** between terms | Sn = a(1−rⁿ)/(1−r) |

**Check first:** does the sequence have a common difference (arithmetic) or common ratio (geometric)? Applying the wrong formula because this check was skipped is one of the most frequent errors across P2.4–P2.5.

**Convergence:** a geometric series converges (has a sum to infinity) only if **|r| < 1**:

```
S(infinity) = a / (1 - r)      [only valid when |r| < 1]
```

Don't assume every series has a finite sum — check the convergence condition first.

**Binomial expansion:** (a + bx)ⁿ for a positive integer n expands using the binomial coefficients (written ⁿCᵣ or `n choose r`). This is assessed in the same section as sequences and series, though it is a separate skill from summing a series.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--01-ap-vs-gp.webp" width="900" height="1060" alt="Two bar charts of six terms each. The arithmetic progression 5, 8, 11, 14, 17, 20 adds 3 each time, so the added amount on top of each bar is the same height every time. The geometric progression 3, 6, 12, 24, 48, 96 doubles each time, so the added amount grows. Three consecutive terms satisfy 2b = a + c for an arithmetic progression (8, 11, 14) and b squared = ac for a geometric one (6, 12, 24)." loading="lazy">
  <figcaption>An arithmetic progression adds the same amount each time; a geometric progression multiplies by the same ratio.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--02-ap-sum-pairing.webp" width="900" height="1070" alt="The series 3 + 7 + 11 + 15 + 19 + 23 + 27, written as the sum from r = 1 to 7 of (4r minus 1), is drawn as seven columns. Each column stacks a term on the term in the reversed order and every column totals 30, the first term plus the last. Seven columns of 30 give twice the sum, 210, so the sum is 105." loading="lazy">
  <figcaption>Pairing each term with its reverse shows why S_n = half n times (a + l).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--04-gp-convergence.webp" width="900" height="1230" alt="Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1." loading="lazy">
  <figcaption>A geometric series has a sum to infinity only when |r| &lt; 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--03-gp-sum-to-infinity.webp" width="900" height="1030" alt="A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14." loading="lazy">
  <figcaption>Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--07-pascal-binomial.webp" width="900" height="1130" alt="Pascal’s triangle for n = 0 to 6, each entry the sum of the two above; row 5 (1, 5, 10, 10, 5, 1) is highlighted and 10 is shown as 4 + 6. Below, a bar chart of the six terms of (4 + 3x)^5: 1024, 3840x, 5760x^2, 4320x^3, 1620x^4, 243x^5. At x = 1 they add to 7^5 = 16807." loading="lazy">
  <figcaption>Row n of Pascal’s triangle gives the binomial coefficients; the terms of (4 + 3x)^5 sum to 7^5 at x = 1.</figcaption>
</figure>


## Exponentials and logarithms (P2.5)

Laws of logarithms, and solving equations involving exponential/logarithmic functions. Questions frequently **combine geometric series with exponential growth/decay contexts** (investment growth, population change) — recognise this link rather than treating P2.4 and P2.5 as unrelated content.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--04-log-ruler-laws.webp" width="900" height="940" alt="A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9." loading="lazy">
  <figcaption>Logarithms turn products into sums: lengths on a log ruler add.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--05-solve-index.webp" width="900" height="1160" alt="The graph of 5^x meets y = 40 at x = 2.29 (ln 40 divided by ln 5). Below, points 0.8^n fall; n = 13 gives 0.0550 and n = 14 gives 0.0440, the first below 0.05. Dividing by the negative ln 0.8 reverses the inequality, so n &gt; 13.4." loading="lazy">
  <figcaption>Taking logs solves aˣ = b, and a negative log reverses an inequality.</figcaption>
</figure>


## Trigonometry (P2.6)

**New in P2:** the identity sin²θ + cos²θ = 1 and tanθ = sinθ ÷ cosθ, used to solve trigonometric equations within a given interval. P1's own trigonometry is triangle-based — the sine rule, cosine rule and area of a triangle — and does not include these identities or equation-solving.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure2-revision-notes--06-solve-2sin2-minus-1.webp" width="900" height="760" alt="The sine curve from 0 to 360 degrees meets y = 0.707 and y = -0.707 at 45, 135, 225 and 315 degrees, the four solutions of 2 sin squared theta minus 1 = 0." loading="lazy">
  <figcaption>Both roots of sin θ = ±√2/2 give four solutions in the interval.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--06-three-triangles.webp" width="900" height="770" alt="A quarter unit circle with a ray at 35°. The triangle with hypotenuse 1 gives sin² + cos² = 1; the triangle on the tangent line gives 1 + tan² = sec²; the triangle on the line y = 1 gives 1 + cot² = cosec²." loading="lazy">
  <figcaption>Pythagoras in three similar triangles gives all three identities.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--09-solve-sin-symmetry.webp" width="900" height="960" alt="Sine graph with the line y = −0.4 meeting it at 203.6° and 336.4°, each a reference angle α = 23.58° from 180° and 360°. The calculator value −23.58° is outside the interval." loading="lazy">
  <figcaption>Find the reference angle, then use symmetry to list every solution in the interval.</figcaption>
</figure>


## Differentiation (P2.7) and integration (P2.8)

**Differentiation (P2.7)** applies P1's calculus to **stationary points**: set dy/dx = 0, solve for x, then classify each point using d²y/dx² (positive → minimum, negative → maximum; zero → check the gradient's sign either side instead). Use this to determine where a function is increasing (dy/dx > 0) or decreasing (dy/dx < 0), and to sketch its curve.

**Integration (P2.8)** applies P1's integration to **definite integrals** and the area under a curve: [F(x)] from a to b = F(b) − F(a). A region below the x-axis integrates to a *negative* value, so a total area (rather than a signed value) requires splitting at the roots and adding the absolute value of each part. The **trapezium rule** approximates an area that can't be integrated exactly, using an increasing number of trapezia to improve accuracy.

(The chain, product and quotient rules for differentiation are introduced later, in Pure Mathematics 3.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure2-revision-notes--05-cubic-stationary-points.webp" width="900" height="780" alt="Graph of y = x cubed minus 3x with a maximum at (-1, 2), where the second derivative is -6, and a minimum at (1, -2), where it is +6; dashed flat tangents mark dy/dx = 0." loading="lazy">
  <figcaption>Solve dy/dx = 0, then classify with the second derivative.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the--01-gradient-sign-nature.webp" width="900" height="870" alt="Graph of y = x^3 - 9x^2 + 15x + 8 with the gradient sign marked in three zones. The curve increases for x &lt; 1, decreases for 1 &lt; x &lt; 5 and increases for x &gt; 5. It has a maximum at (1, 15) and a minimum at (5, -17), both with horizontal tangents." loading="lazy">
  <figcaption>The sign of dy/dx either side of a stationary point tells you whether it is a maximum or a minimum.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the--02-second-derivative-zero.webp" width="900" height="850" alt="Graph of y = 3x^5 - 5x^3 with a maximum at (-1, 2) and minimum at (1, -2). At the origin f″ = 0 so the second-derivative test fails; the gradient is -2.8125 at x = -0.5 and x = 0.5 and 0 at x = 0, so the origin is a point of inflection." loading="lazy">
  <figcaption>When f″(x) = 0, check the gradient on both sides: the same sign means a point of inflection.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the--05-signed-area.webp" width="900" height="920" alt="Graph of y = x(x-2)(x-5) from 0 to 5. The region above the axis from 0 to 2 has area 16/3 and the region below from 2 to 5 has area 63/4, total 253/12. Integrating 0 to 5 in one step gives the signed value -125/12, not an area." loading="lazy">
  <figcaption>Integrate each section between roots separately and add the magnitudes to get the true area.</figcaption>
</figure>


## Worked example: proof by exhaustion

Prove that the square of any positive odd number less than 10 is odd.

```
Positive odd numbers less than 10: 1, 3, 5, 7, 9

1^2 = 1   (odd)
3^2 = 9   (odd)
5^2 = 25  (odd)
7^2 = 49  (odd)
9^2 = 81  (odd)

All cases checked, all results odd -> statement proven for this
finite set.
```

The case list (1, 3, 5, 7, 9) is stated explicitly, restricted to the positive odd numbers below 10, and confirmed complete **before** checking — this is what separates a genuine proof by exhaustion from an unstructured list of examples. Restricting the domain like this is a genuine part of the proof, not a simplification: the same statement about *all* odd integers (including negative ones) would need a different case list or a general algebraic argument instead.

## Worked example: exponential growth combined with a geometric series

An investment of $1,000 grows by 5% each year. Find its value after 3 years, and the total value of three separate $1,000 investments made at the start of years 1, 2 and 3, valued at the end of year 3.

```
Single investment after 3 years:
        1000 x 1.05^3 = 1157.63 (to 2 d.p.)

Three investments, each growing for a different number of years
by the end of year 3 (this is a geometric-series-style sum):
        Year-1 investment grows for 3 years: 1000 x 1.05^3
        Year-2 investment grows for 2 years: 1000 x 1.05^2
        Year-3 investment grows for 1 year:  1000 x 1.05^1

        Total = 1000(1.05 + 1.05^2 + 1.05^3) = 1000 x 1.05 x (1.05^3 - 1)/(1.05 - 1)
```

Recognising that a series of repeated investments compounding at a fixed rate forms a geometric series -- rather than calculating each year's value separately from scratch -- is exactly the kind of applied link between P2.4 and P2.5 this unit rewards.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-a-level-mathematics-pure2-revision-notes--07-deposits-geometric-series.webp" width="900" height="880" alt="Three $1,000 deposits at the start of years 1, 2 and 3 grow at 5% for 3, 2 and 1 years to 1157.63, 1102.50 and 1050.00. Their total, 1000 x 1.05 x (1.05^3 - 1)/(1.05 - 1), is $3,310.13." loading="lazy">
  <figcaption>Repeated deposits at a fixed rate form a geometric series.</figcaption>
</figure>


## Why Unit P2 is assessed the way it is

Because every route through YMA01 requires all four Pure Mathematics units regardless of which applied units (M1, S1, D1, etc.) a candidate studies, P2's content is genuinely compulsory knowledge, not optional background. Exam questions on this unit typically combine two or three sub-topics within a single multi-step problem rather than testing each in isolation -- a question might open with a proof, use its result within an algebraic manipulation, and finish with a differentiation or integration step. Past-paper practice specific to Unit P2, rather than only topic-by-topic drilling, is the most reliable way to build fluency at combining sub-topics under exam conditions.

## Key terms

**Proof by deduction** — a general algebraic argument valid for all cases. **Proof by exhaustion** — checking every case in a genuinely finite, confirmed-complete set. **Factor theorem** — if f(b/a) = 0 then (ax − b) is a factor of f(x). **Stationary point** — a point where dy/dx = 0, classified as a maximum or minimum using d²y/dx². **Arithmetic sequence** — constant common difference between terms. **Geometric sequence** — constant common ratio between terms. **Convergent series** — a geometric series with |r| < 1, possessing a finite sum to infinity.

## Common mistakes

- Applying the arithmetic sum formula to a geometric sequence, or vice versa, without checking for a common difference/ratio first.
- Forgetting the |r| < 1 condition before using the sum-to-infinity formula.
- Adding signed definite integrals when a total area is required, instead of splitting at the roots and taking absolute values of each part.
- Not checking the gradient's sign either side of a stationary point when the second-derivative test itself gives zero.
- Treating a proof-by-exhaustion case list as complete without explicitly confirming it covers every possibility.

## Quick self-test

- State the sum-to-infinity formula and its validity condition.
- Prove, by exhaustion, that the square of any even number from 2 to 8 is even.
- Find and classify the stationary points of y = x³ − 3x.
- Solve 2 sin²θ − 1 = 0 for 0° ≤ θ ≤ 360°.
- Identify whether a sequence with terms 5, 10, 20, 40 is arithmetic or geometric, and find its next term.

## Related resources

- [Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/)
- [Pure Mathematics 2 practice questions](/resources/edexcel-a-level-mathematics-pure2-practice/)

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level
Mathematics (YMA01) specification, Issue 3 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
