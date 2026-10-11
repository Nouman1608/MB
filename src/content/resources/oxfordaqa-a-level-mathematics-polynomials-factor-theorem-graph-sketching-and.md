---
title: "OxfordAQA International AS and A-level Mathematics: Polynomials, factor theorem and graphs (9660)"
seoTitle: "OxfordAQA Maths P1 Factor Theorem and Graphs Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Polynomials, factor theorem, graph sketching and transformations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 174
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-algebra-oxfordaqa-alevel-maths"
description: "Study guide to polynomial division, the Factor Theorem, curve sketching and graph transformations for OxfordAQA International AS Mathematics Unit P1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide follows the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the polynomial, graph and transformation content listed under P1.1 (Algebra): manipulating polynomials, algebraic division by (x − a), the Remainder Theorem and Factor Theorem, sketching linear, quadratic and cubic curves, solving equations from intersections, and the transformations y = af(x), y = f(x) + a, y = f(x + a) and y = f(ax). The specification places this content in International AS, Unit P1 (Pure Maths). It gives no Core, Extension or Higher labels. The specification applies to International AS exams from May/June 2018 and International A-level exams from May/June 2019.

Related pages: the [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [revision notes](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-revision-notes/), the [practice questions](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-practice/), the wider [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) and [Unit P1 practice](/resources/oxfordaqa-a-level-mathematics-p1-practice/). If you want to find your weak spots first, take the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec area | What you must be able to do |
|---|---|
| P1.1 | Expand brackets and collect like terms in polynomials |
| P1.1 | Divide a quadratic or cubic by (x − a), where a is an integer, by any method |
| P1.1 | Use the Remainder Theorem and Factor Theorem |
| P1.1 | Factorise cubics: three distinct linear factors, a repeated factor, or a quadratic factor with no real roots |
| P1.1 | Sketch linear, quadratic and cubic curves; use f(x) notation (domain and range are not required) |
| P1.1 | Read solutions of equations as intersection points of graphs, and the reverse |
| P1.1 | Describe and apply single transformations: reflection, translation, stretch |

## Manipulating polynomials

A polynomial adds together terms such as 5x³, −2x² and 7, where every power of x is a whole number. Its degree is the highest power. To expand, multiply each term of one bracket by each term of the next. To collect like terms, add the terms that share a power of x.

**Worked example 1.** Expand and simplify (2x − 3)²(x + 4).

```
(2x − 3)² = 4x² − 12x + 9
(4x² − 12x + 9)(x + 4) = 4x³ + 16x² − 12x² − 48x + 9x + 36
                       = 4x³ + 4x² − 39x + 36
```

Expand the square first, then multiply by the third bracket. A cubic from three linear brackets has four terms, so a result with fewer or more terms means an error.

## Algebraic division by (x − a)

Dividing a cubic by (x − a) gives a quadratic quotient and a number remainder. The specification accepts any method: inspection, equating coefficients or formal division. Whichever you choose, show enough working to see the quotient and remainder.

**Worked example 2 (inspection).** Divide x³ + 4x² − 11x − 30 by (x − 3).

Write x³ + 4x² − 11x − 30 = (x − 3)(x² + bx + c). The first term of the quotient is x², so the x³ term matches. The constant term gives −3c = −30, so c = 10. The x² coefficient gives b − 3 = 4, so b = 7. Check the x term: c − 3b = 10 − 21 = −11, which matches.

```
x³ + 4x² − 11x − 30 = (x − 3)(x² + 7x + 10)
```

**Worked example 3 (formal division, non-zero remainder).** Divide 3x³ − 5x² + x + 9 by (x − 2).

```
              3x²  +  x  +  3
        ┌──────────────────────────
x − 2   │  3x³ − 5x² +  x  +  9
           3x³ − 6x²
           ──────────
                  x² +  x
                  x² − 2x
                  ───────
                       3x +  9
                       3x −  6
                       ───────
                            15
```

So 3x³ − 5x² + x + 9 = (x − 2)(3x² + x + 3) + 15. The quotient is 3x² + x + 3 and the remainder is 15.

## The Remainder Theorem and Factor Theorem

**Remainder Theorem.** Divide a polynomial f(x) by (x − a) and the remainder you get is the number f(a).

**Factor Theorem.** A zero value f(a) = 0 tells you (x − a) divides f(x) exactly. It works backwards too: a factor (x − a) forces f(a) = 0.

Both theorems hold for quadratics as well as cubics. Dividing x² + 2x − 15 by (x − 3) gives quotient x + 5 and remainder 0, since f(3) = 9 + 6 − 15 = 0. Dividing x² − x + 4 by (x − 2) gives x² − x + 4 = (x − 2)(x + 1) + 6, and f(2) = 4 − 2 + 4 = 6.

In worked example 3, f(2) = 3(8) − 5(4) + 2 + 9 = 15, matching the remainder. For a divisor such as (x + 2), use a = −2.

**Worked example 4.** The polynomial f(x) = x³ + kx² − 4x + 6 leaves remainder 18 when divided by (x − 2). Find k.

```
f(2) = 8 + 4k − 8 + 6 = 4k + 6
4k + 6 = 18
k = 3
```

**Worked example 5 (two unknowns).** The polynomial g(x) = x³ + px² + qx − 12 has (x − 2) as a factor and leaves remainder −30 when divided by (x + 1). Find p and q.

```
g(2) = 0:   8 + 4p + 2q − 12 = 0   →   2p + q = 2
g(−1) = −30: −1 + p − q − 12 = −30   →   p − q = −17
```

Adding gives 3p = −15, so p = −5. Then q = 2 − 2(−5) = 12. Check: g(2) = 8 − 20 + 24 − 12 = 0.

## Factorising cubics with the Factor Theorem

The specification limits cubics to those with a factor (x − a) where a is an integer. Test integer values that divide the constant term, trying a = 1, −1, 2, −2 and so on, until f(a) = 0. Then divide to get a quadratic, and factorise that. Three outcomes can occur.

**Three distinct linear factors.** f(x) = x³ − 2x² − 11x + 12. Try a = 1: f(1) = 1 − 2 − 11 + 12 = 0. So (x − 1) is a factor.

```
x³ − 2x² − 11x + 12 = (x − 1)(x² − x − 12) = (x − 1)(x − 4)(x + 3)
```

The roots are x = 1, 4 and −3.

**A repeated factor.** f(x) = x³ + x² − 8x − 12. Trying values, f(3) = 27 + 9 − 24 − 12 = 0.

```
x³ + x² − 8x − 12 = (x − 3)(x² + 4x + 4) = (x − 3)(x + 2)²
```

The root x = −2 is repeated, so the curve touches the x-axis there.

**A quadratic factor with no real roots.** f(x) = x³ − 4x² + 6x − 4. Trying values, f(2) = 8 − 16 + 12 − 4 = 0.

```
x³ − 4x² + 6x − 4 = (x − 2)(x² − 2x + 2)
```

For x² − 2x + 2, the discriminant is (−2)² − 4(1)(2) = −4, which is negative. The quadratic cannot be factorised over the real numbers, so f(x) = 0 has one real root, x = 2.

## Graphs of linear, quadratic and cubic functions

**Linear:** y = mx + c is a straight line with gradient m and y-intercept c.

**Quadratic:** y = ax² + bx + c is a parabola. It is ∪-shaped if a > 0 and ∩-shaped if a < 0. It has a vertical line of symmetry through the vertex.

**Cubic:** y = ax³ + … rises from bottom-left to top-right if a > 0, and falls from top-left to bottom-right if a < 0. It crosses the x-axis once, twice (one touching) or three times.

**Checklist for any sketch:**
1. Find where the curve crosses the y-axis (set x = 0).
2. Find where it meets the x-axis (set y = 0, factorise).
3. Note whether each root is crossed or touched (repeated roots touch).
4. Use the sign of the leading coefficient for the end behaviour.
5. Label every intercept with its coordinates.

**Worked example 6.** Sketch y = (x + 1)(x − 2)².

The y-intercept is y = (1)(4) = 4. The roots are x = −1 (crossing) and x = 2 (touching, because it is squared). Expanding the brackets would give a positive x³ term, so the graph begins low at the left and ends high at the right.

| Feature | Value |
|---|---|
| y-intercept | (0, 4) |
| Crosses the x-axis | (−1, 0) |
| Touches the x-axis | (2, 0) |
| End behaviour | Low on the left, high on the right |

In words: the curve rises from far left, crosses at (−1, 0), peaks at (0, 4), falls to touch (2, 0), then rises again.

**Worked example 7.** Sketch y = −x² + 2x + 8. Factorising gives y = −(x − 4)(x + 2), so roots are x = 4 and x = −2. The y-intercept is 8. Because a < 0 the curve is ∩-shaped, and the line of symmetry is halfway between the roots, x = 1. At x = 1, y = −1 + 2 + 8 = 9, so the vertex is (1, 9).

## Solving equations from graphs

Solving f(x) = g(x) gives the x-values at which the curves y = f(x) and y = g(x) share a point. Reading it the other way, counting the intersection points tells you how many real solutions there are.

**Worked example 8.** Find where y = x³ − 2x² − 11x + 12 meets the line y = −8x + 12.

```
x³ − 2x² − 11x + 12 = −8x + 12
x³ − 2x² − 3x = 0
x(x − 3)(x + 1) = 0
x = −1, 0 or 3
```

The y-coordinates come from the line: x = −1 gives y = 20, x = 0 gives y = 12, x = 3 gives y = −12. The intersections are (−1, 20), (0, 12) and (3, −12). Do not cancel x: that would lose the solution x = 0.

## Transformations of graphs

The specification asks you to use the terms **reflection**, **translation** and **stretch** (in the x or y direction). Only single transformations are tested in descriptions.

| Equation | Transformation of y = f(x) |
|---|---|
| y = f(x) + a | Shift of a units up: translation by the vector (0, a) |
| y = f(x + a) | Shift of a units left: translation by the vector (−a, 0) |
| y = af(x) | Stretch along the y direction, scale factor a |
| y = f(ax) | Stretch along the x direction, scale factor 1/a |
| y = −f(x) | Reflection in the x-axis (a = −1 in af(x)) |
| y = f(−x) | Mirror image in the y-axis (a = −1 in f(ax)) |

Changes outside the brackets affect y and act as you would expect. Changes inside the bracket affect x and act opposite to your first instinct.

**Worked example 9.** Take f(x) = x² − 6x + 5.
- f(x + 2) = (x + 2)² − 6(x + 2) + 5 = x² − 2x − 3. This is a translation by (−2, 0).
- f(x/2) = x²/4 − 3x + 5. This is a stretch parallel to the x-axis, scale factor 2.

**Worked example 10.** The curve y = x² − 2x − 3 is translated by the vector (3, −2). Replace x by (x − 3) and subtract 2:

```
y = (x − 3)² − 2(x − 3) − 3 − 2 = x² − 8x + 10
```

The vertex moves from (1, −4) to (4, −6), which agrees with adding (3, −2). Going the other way: y = (x − 2)² + 3 becomes y = x² by a translation of (−2, −3).

## Common errors

- Reading f(x + 2) as a move rightwards, when the graph actually moves 2 units towards negative x.
- Dividing by (x + 2) and testing f(2) instead of f(−2).
- Stopping after finding one factor, and not checking whether the quadratic factorises further.
- Cancelling a common factor of x when solving an intersection equation, which loses a root.
- Describing y = 2f(x) only as "stretched", without direction and scale factor.
- Showing a squared factor as a crossing instead of a touch.
- Leaving off axis intercepts, or giving only x-values when a point needs coordinates.

## Examiner insights

Examiners usually give credit for method shown. When you use the Factor Theorem, write the substitution (for example f(2) = 0) and state the conclusion, because a bare final factorisation is harder to credit if one factor is wrong. In a sketch, clear labelled intercepts and the correct end behaviour usually matter more than neat drawing.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-revision-notes/) for quick recall. Tick off topics on the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and see the [course hub](/boards/oxfordaqa/a-level/mathematics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. See section 3.1, International AS Unit P1 (Pure Maths), content area P1.1.
