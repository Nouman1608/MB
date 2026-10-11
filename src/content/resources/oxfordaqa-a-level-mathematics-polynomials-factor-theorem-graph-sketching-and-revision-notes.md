---
title: "OxfordAQA International AS and A-level Mathematics: Polynomials, factor theorem and graphs (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths P1 Factor Theorem Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on polynomial division, the Factor Theorem, sketching and transformations for OxfordAQA International AS Mathematics Unit P1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes cover the polynomial, graph and transformation content in P1.1 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It is part of International AS, Unit P1 (Pure Maths), with no Core, Extension or Higher labels. For fuller explanations and longer worked examples, use the [study guide](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-practice/). See also the [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) and the [free 10-minute diagnostics](/diagnostics/).

## Key facts

| Idea | Statement |
|---|---|
| Degree | Highest power of x in the polynomial |
| Remainder Theorem | Divide f(x) by (x − a): the remainder is the number f(a) |
| Factor Theorem | f(a) = 0 holds precisely when (x − a) divides f(x) |
| Divisor (x + 3) | Use a = −3, so test f(−3) |
| Repeated root | Curve touches the x-axis and turns there |
| Intersection | Solving f(x) = g(x) gives the x-values at which the two curves cross or touch |

## Expanding and collecting

Each term in the first bracket meets each term in the second. Then add up the like terms.

```
(x + 2)(x² − 3x + 5) = x³ − 3x² + 5x + 2x² − 6x + 10
                     = x³ − x² − x + 10
```

## Method: divide by (x − a)

1. Write f(x) = (x − a)(quadratic) + remainder.
2. Match the x³ coefficient to get the first quotient term.
3. Work down the powers, or compare coefficients.
4. Check by substituting x = a: it should give the remainder.

**Reminder.** 2x³ − x² − 13x − 6 divided by (x − 3). Since f(3) = 54 − 9 − 39 − 6 = 0, the remainder is zero.

```
2x³ − x² − 13x − 6 = (x − 3)(2x² + 5x + 2)
                   = (x − 3)(2x + 1)(x + 2)
```

## Method: factorise a cubic

1. Test a = 1, −1, 2, −2, … (factors of the constant term) until f(a) = 0.
2. Divide by (x − a) to get a quadratic.
3. Factorise the quadratic, or use the discriminant to see whether it has real roots.
4. Write the full factorisation and list all roots.

**Reminder.** f(x) = x³ + 2x² − 9x − 18. Here f(−2) = −8 + 8 + 18 − 18 = 0, so (x + 2) is a factor, and the quotient is x² − 9. So f(x) = (x + 2)(x − 3)(x + 3). Three distinct roots: −2, 3, −3.

## Three types of cubic

| Type | Example | What you see |
|---|---|---|
| Three distinct linear factors | (x + 2)(x − 3)(x + 3) | Crosses the x-axis three times |
| Repeated linear factor | (x − 1)²(x + 2) | Touches at x = 1, crosses at x = −2 |
| Irreducible quadratic factor | (x − 1)(x² + 1) | Crosses the x-axis once only |

For the last type, a quadratic ax² + bx + c has no real roots when b² − 4ac < 0. For x² + 1, b² − 4ac = −4.

## Finding unknown coefficients

- One condition (factor or remainder): substitute x = a and solve for the unknown.
- Two unknowns: use two conditions to make two equations in the unknowns.

**Reminder.** (x + 1) is a factor of x³ + kx² − 5x − 6. Then f(−1) = −1 + k + 5 − 6 = 0, so k − 2 = 0 and k = 2.

## Sketching curves

| Curve | Shape | Key points |
|---|---|---|
| y = mx + c | Straight line | Slope m, cuts the y-axis at c |
| y = ax² + bx + c | Parabola, ∪ if a > 0, ∩ if a < 0 | Roots, y-intercept c, vertex on the line of symmetry |
| Cubic with a > 0 | Low left to high right | Roots (crossing or touching), y-intercept |
| Cubic with a < 0 | High left to low right | Roots (crossing or touching), y-intercept |

**Reminder.** Sketch y = (x − 1)²(x + 2). Expanded: x³ − 3x + 2. The y-intercept is 2. The curve crosses at x = −2 and touches at x = 1. It starts low on the left and ends high on the right.

Always label axis crossings with coordinates, and show a touching root as a turning point on the axis.

## Solving by graphs

- To solve f(x) = g(x), equate and rearrange to a polynomial equal to zero.
- Factorise using the Factor Theorem if it is a cubic.
- Do not divide both sides by x: factor it out instead.
- Substitute the x-values into the simpler equation to get the y-coordinates.
- Count the intersections to count the real solutions.

## Transformations: y = f(x) becomes

| New equation | Description |
|---|---|
| y = f(x) + a | Shift of a units up: vector (0, a) |
| y = f(x + a) | Shift of a units left: vector (−a, 0) |
| y = af(x) | Stretch along y, scale factor a |
| y = f(ax) | Stretch along x, scale factor 1/a |
| y = −f(x) | Reflection in the x-axis |
| y = f(−x) | Mirror image in the y-axis |

Use the words reflection, translation and stretch, and give the direction and scale factor or vector. Only one transformation at a time is expected in descriptions.

**Reminders.**
- y = x² − 4x translated by (1, 5): replace x by (x − 1) and add 5, giving y = (x − 1)² − 4(x − 1) + 5 = x² − 6x + 10.
- For f(x) = x³ − 9x, the curve y = f(x − 2) has roots where x − 2 = 0, 3 or −3, so x = 2, 5 or −1.
- y = 3f(x) keeps the same roots but multiplies every y-value by 3.

## Worked reminders: remainders and two unknowns

**Negative a.** Find the remainder when 2x³ + x² − 7x + 3 is divided by (x + 3). Use a = −3.

```
f(−3) = 2(−27) + 9 + 21 + 3 = −54 + 33 = −21
```

The remainder is −21. Dividing in full gives 2x³ + x² − 7x + 3 = (x + 3)(2x² − 5x + 8) − 21.

**Two unknowns.** The cubic x³ + px² + qx + 6 has (x − 1) as a factor and leaves remainder 12 when divided by (x + 1).

```
f(1) = 0:    1 + p + q + 6 = 0     →  p + q = −7
f(−1) = 12:  −1 + p − q + 6 = 12   →  p − q = 7
```

Adding gives 2p = 0, so p = 0, and q = −7. Check: f(1) = 1 − 7 + 6 = 0.

## Must-know distinctions

- **Remainder versus factor.** A remainder of zero means a factor. A non-zero remainder means the divisor is not a factor.
- **Inside versus outside the bracket.** Changes outside f change y values and behave as written. Changes inside change x values and behave in reverse: f(x + 2) moves left, f(2x) squashes toward the y-axis.
- **Touching versus crossing.** An odd power of a factor gives a crossing. An even power gives a touch.
- **Root versus factor.** A root x = a corresponds to the factor (x − a). A root x = −2 is the factor (x + 2).
- **Stretch versus translation.** A translation moves every point by the same vector. A stretch multiplies one coordinate and fixes points on the axis.
- **Sketch versus plot.** A sketch shows shape, intercepts and turning behaviour. It needs no scale or table of values.

## Quadratic features for sketches

For y = x² − 4x + 7, the line of symmetry is x = 2 and the vertex is (2, 3). The discriminant is 16 − 28 = −12, which is negative, so the parabola never meets the x-axis. Stretching it in the x direction by scale factor 2 gives y = x²/4 − 2x + 7, because every x is replaced by x/2.

## Quick self-test

1. Expand and simplify (x − 5)(x² + 2x − 3).
2. Find the remainder when x³ − 5x + 9 is divided by (x − 2).
3. Show that (x − 1) is a factor of x³ + 4x² + x − 6, and find the other factors.
4. Find k such that (x + 2) is a factor of x³ + kx² + 3x + 2.
5. Divide 2x³ + 3x² − 8x + 3 by (x − 1).
6. How many real roots does x³ − x² + x − 1 = 0 have? Justify.
7. Describe the transformation from y = f(x) to y = f(x + 4).
8. Describe the transformation from y = f(x) to y = f(3x).
9. Write down the equation of y = x² − 6x after a translation by (2, −3).
10. Sketch y = (x − 2)(x + 1)². State the intercepts.

### Answers

1. x³ + 2x² − 3x − 5x² − 10x + 15 = **x³ − 3x² − 13x + 15**.
2. f(2) = 8 − 10 + 9 = **7**.
3. f(1) = 1 + 4 + 1 − 6 = 0, so (x − 1) is a factor. Dividing gives x² + 5x + 6, so **(x − 1)(x + 2)(x + 3)**.
4. f(−2) = −8 + 4k − 6 + 2 = 4k − 12 = 0, so **k = 3**.
5. f(1) = 0. Quotient: **2x² + 5x − 3**, remainder 0, which factorises as (2x − 1)(x + 3).
6. x³ − x² + x − 1 = (x − 1)(x² + 1). The quadratic has discriminant −4, so there is **one real root, x = 1**.
7. **Translation by the vector (−4, 0)**.
8. **Stretch in the x direction, scale factor 1/3**.
9. Replace x by (x − 2) and subtract 3: y = (x − 2)² − 6(x − 2) − 3 = **x² − 10x + 13**.
10. The y-intercept is (0, −2). The curve crosses the x-axis at (2, 0) and touches it at (−1, 0). The cubic has a positive leading coefficient, so it rises from the lower left to the upper right.

## Where marks are usually lost

- Testing f(2) when the divisor is (x + 2), or f(−2) when it is (x − 2).
- Showing a factor with a bare statement and no substitution.
- Stopping at one quadratic factor without checking whether it factorises or has no real roots.
- Cancelling x on both sides of an intersection equation and losing the root x = 0.
- Treating y = f(x + 3) as a move to the right.
- Describing a stretch without direction or scale factor.
- Forgetting that f(2x) halves the x-values: scale factor 1/2, not 2.
- Giving intercepts as numbers when the question asks for coordinates.
- Sketching a double root as a crossing.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. See section 3.1, International AS Unit P1 (Pure Maths), content area P1.1.

