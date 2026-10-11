---
title: "AQA A-level Mathematics: Graphs of Functions, Composite Functions and Inverse Functions (7357)"
seoTitle: "AQA A-level Maths B7-B8: Graphs, Composite, Inverse"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Graphs of Functions, Composite Functions and Inverse Functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b7-graphs-of-functions-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b8-composite-and-inverse-functions-aqa-alevel-maths"
description: "Study guide to AQA A-level Maths 7357 B7 and B8: sketching curves, asymptotes, proportion, composite functions, inverses and domain restrictions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to AQA A-level Mathematics 7357, specification version 1.3 of 31 January 2018. It covers content B7 (graphs of functions) and B8 (composite and inverse functions), and builds each outcome from scratch with worked examples. The functions notation used is the specification's own: gf(x) means g(f(x)), and f⁻¹ is the inverse of f.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [revision notes](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-revision-notes/) | [practice questions](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-practice/) | [free 10-minute diagnostics](/diagnostics/)

## What this unit covers

| Reference | Outcome |
|---|---|
| B7 | Understand and use graphs of functions; sketch polynomials, the modulus of a linear function, y = a/x and y = a/x², with their vertical and horizontal asymptotes |
| B7 | Interpret the algebraic solution of equations graphically; use intersection points of graphs to solve equations |
| B7 | Understand and use proportional relationships and their graphs |
| B8 | Understand and use composite functions |
| B8 | Understand and use inverse functions and their graphs, including the reflection in y = x and domain restrictions |

Related content: the definition of a function, domain and range are in [OT1 functions](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and/). Quadratic curves are in [quadratics and inequalities](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/). Stretches and translations of graphs are B9, a separate unit.

## 1. Sketching polynomials (B7)

A sketch shows shape, axis intercepts and behaviour for large |x|. Work through four checks.

1. **Roots.** Factorise and read off where y = 0.
2. **Repeated roots.** A factor (x − a)² makes the curve touch the x-axis at a and turn back. A factor (x − a)³ makes it flatten as it crosses.
3. **y-intercept.** Put x = 0.
4. **End behaviour.** The highest power decides it. A positive x⁴ term sends both ends up. A negative x⁴ term sends both ends down. For an odd power, the ends go opposite ways.

**Example 1.** Sketch y = (x + 3)(x − 2)²(1 − x).

```
Roots:        x = −3 (crosses), x = 2 (touches), x = 1 (crosses)
y-intercept:  x = 0 gives (3)(4)(1) = 12
Leading term: (x)(x²)(−x) = −x⁴, so both ends go down
```

Test a value between roots to confirm the sign: at x = −1, y = (2)(9)(2) = 36, which is positive. At x = 1.5, y = (4.5)(0.25)(−0.5) = −0.5625, which is negative.

The curve rises from far down on the left, crosses at (−3, 0), reaches a maximum above the axis, crosses down at (1, 0), dips below, touches the axis at (2, 0) from below, and then falls away. Label (−3, 0), (1, 0), (2, 0) and (0, 12).

## 2. The modulus of a linear function (B7)

|x| means the non-negative value of x. So |ax + b| equals ax + b when that is positive or zero, and −(ax + b) when it is negative. Plotting y = |ax + b| gives a V-shape. Its vertex is on the x-axis at x = −b/a, and any part of the straight line that lay below the axis is flipped above it.

For y = |2x − 5|: the vertex is (2.5, 0), the y-intercept is |−5| = 5, and the two arms have gradients +2 and −2.

**Example 2.** Solve (a) |2x − 5| = x + 1 and (b) |x − 4| < 2x.

(a) Sketch y = |2x − 5| and the line y = x + 1. The line starts above the vertex, so it meets the V twice.

```
Right arm:  2x − 5 = x + 1       so x = 6
Left arm:   −(2x − 5) = x + 1    so 5 − 2x = x + 1, giving x = 4/3
Check:      x = 6:   |7| = 7 = 6 + 1   ✓
            x = 4/3: |−7/3| = 7/3 = 4/3 + 1   ✓
```

(b) Use the same approach with y = |x − 4| and y = 2x. Solve the equality on each arm.

```
x − 4 = 2x       so x = −4 (but this is the arm where x ≥ 4, so it is rejected)
4 − x = 2x       so x = 4/3
```

The line y = 2x starts at the origin, below the V (at x = 0 the V is at 4, the line at 0), and meets the left arm at x = 4/3. For every larger x the line is above the V. So the solution is **x > 4/3**.

Always check each root in the original equation. A root from the wrong arm is the usual error.

## 3. y = a/x and y = a/x² (B7)

| | y = a/x | y = a/x² |
|---|---|---|
| Asymptotes | x = 0 (vertical), y = 0 (horizontal) | x = 0 (vertical), y = 0 (horizontal) |
| a > 0 | Two branches, in quadrants 1 and 3 | Two branches, both above the x-axis |
| a < 0 | Two branches, in quadrants 2 and 4 | Two branches, both below the x-axis |
| Symmetry | Rotational symmetry about the origin, also symmetric in y = x | Symmetric in the y-axis |
| Intercepts | None | None |

An **asymptote** is a line that the curve gets ever closer to without meeting it. The curve y = a/x² goes to infinity (or minus infinity) on both sides of x = 0. The curve y = a/x goes to opposite infinities on the two sides.

**Example 3.** Find where y = 12/x meets y = x + 4, and show how many solutions y = 8/x² and y = x give.

```
12/x = x + 4  →  12 = x² + 4x  →  x² + 4x − 12 = 0  →  (x + 6)(x − 2) = 0
x = −6 gives y = −2;   x = 2 gives y = 6
```

The points are (−6, −2) and (2, 6). For the second pair, the line y = x passes through quadrants 1 and 3 but y = 8/x² is only in the upper half. So they can meet only for x > 0: 8/x² = x gives x³ = 8, so there is **one** intersection, at (2, 2).

## 4. Solving equations graphically (B7)

An equation f(x) = g(x) has as many real solutions as the graphs y = f(x) and y = g(x) have intersections, and the x-coordinates of those points are the solutions. To use this on an equation you cannot easily solve, rearrange it into two curves you can sketch.

**Example 4.** Show that x³ − 4x − 1 = 0 has three real roots.

Divide by x (valid because x = 0 is not a root, as 0 − 0 − 1 ≠ 0): x² − 4 = 1/x. Sketch y = x² − 4, a parabola with vertex (0, −4), and y = 1/x.

- For x > 0 the hyperbola is above the parabola until the parabola reaches 0 at x = 2, then the parabola climbs steeply. One crossing, just above x = 2.
- For −2 < x < 0 both curves are negative. The hyperbola is below the parabola near x = 0, above it at x = −1 (−1 against −3), and below it again at x = −1.9 (about −0.53 against −0.39). Two crossings.
- For x < −2 the parabola is positive and the hyperbola negative, so there is no crossing.

That gives three intersections, so three real roots. (Their values are about −1.86, −0.254 and 2.11.)

## 5. Proportional relationships and their graphs (B7)

| Statement | Equation | Graph of y against x |
|---|---|---|
| y is proportional to x | y = kx | A line through the origin, gradient k |
| y ∝ x² | y = kx² | Parabola with vertex at the origin |
| y ∝ x³ | y = kx³ | Cubic through the origin |
| y ∝ √x | y = k√x | Half-parabola on its side, starting at the origin |
| y inversely proportional to x | y = k/x | Rectangular hyperbola |
| y inversely proportional to x² | y = k/x² | Curve of the form in section 3 |

To test y = kxⁿ from data, plot y against xⁿ. A straight line through the origin confirms it, and its gradient is k.

**Example 5.** y is inversely proportional to the square of x, and y = 5 when x = 4. Find y when x = 10, and x when y = 20 (x > 0).

```
y = k/x²:  5 = k/16, so k = 80
x = 10:    y = 80/100 = 0.8
y = 20:    20 = 80/x², so x² = 4 and x = 2
```

## 6. Composite functions (B8)

gf(x) means g(f(x)): apply f first, then g. The order matters, and in general gf and fg are different.

**Example 6.** f(x) = 3x + 4 and g(x) = x² − 1, for x ∈ ℝ. Find gf, fg, and solve gf(x) = fg(x).

```
gf(x) = g(3x + 4) = (3x + 4)² − 1 = 9x² + 24x + 15
fg(x) = f(x² − 1) = 3(x² − 1) + 4 = 3x² + 1
```

Setting them equal: 9x² + 24x + 15 = 3x² + 1, so 6x² + 24x + 14 = 0, which simplifies to 3x² + 12x + 7 = 0. The solutions are x = (−12 ± √60)/6 = **−2 ± √15/3**.

**Domain and range.** The domain of gf is the set of x that f accepts and for which f(x) lies in the domain of g. Its range comes from the output of g.

**Example 7.** f(x) = 1/(x − 2) for x ≠ 2, and g(x) = √x for x ≥ 0. Find fg, with its domain and range.

fg(x) = f(√x) = 1/(√x − 2). The input to g needs x ≥ 0. The input to f must not be 2, so √x ≠ 2, which means x ≠ 4. The domain is **x ≥ 0, x ≠ 4**.

For the range, √x − 2 takes every value in [−2, ∞) except 0 (as x ≠ 4). The reciprocal of a value in [−2, 0) is at most −1/2. The reciprocal of a positive value is any positive number. So the range is **fg(x) ≤ −1/2 or fg(x) > 0**.

## 7. Inverse functions and their graphs (B8)

The inverse f⁻¹ undoes f, so f⁻¹f(x) = x and ff⁻¹(x) = x. It exists only when f is **one-one**: each output comes from exactly one input.

**Method.** Write y = f(x). Make x the subject. Swap x and y (or just replace y by x in the answer).

**Domain and range swap.** The inputs allowed for f⁻¹ are the outputs of f, and the outputs of f⁻¹ are the inputs of f.

**Graph.** Reflect the curve y = f(x) in the line y = x to get y = f⁻¹(x). If (a, b) is on f, then (b, a) is on f⁻¹. Any point where f meets y = x is also on f⁻¹. For an increasing function, every intersection of f and f⁻¹ lies on y = x (a decreasing function can also have intersections off that line).

**Example 8.** f(x) = 2 + 5/(x − 3) for x ≠ 3. Find f⁻¹, state its domain, and solve f(x) = f⁻¹(x).

```
y − 2 = 5/(x − 3)   →   x − 3 = 5/(y − 2)   →   x = 3 + 5/(y − 2)
f⁻¹(x) = 3 + 5/(x − 2),   x ≠ 2
```

The range of f is y ≠ 2 (the horizontal asymptote), so the domain of f⁻¹ is x ≠ 2. Now f(x) = f⁻¹(x) means 2 + 5/(x − 3) = 3 + 5/(x − 2), so 5/(x − 3) − 5/(x − 2) = 1. Combining the fractions gives 5 = (x − 3)(x − 2), so x² − 5x + 1 = 0 and **x = (5 ± √21)/2**. Both values are valid, since neither is 2 or 3.

**Restricting a domain.** A many-one function such as a quadratic has no inverse over ℝ, because two inputs give one output. Restrict the domain to one side of the turning point.

**Example 9.** f(x) = x² + 4x − 1 for x ≥ −2. Find f⁻¹ and its domain and range.

Complete the square: f(x) = (x + 2)² − 5. For x ≥ −2 the range is f(x) ≥ −5.

```
y = (x + 2)² − 5  →  x + 2 = √(y + 5)    (positive root, since x + 2 ≥ 0)
f⁻¹(x) = √(x + 5) − 2,   domain x ≥ −5,   range f⁻¹(x) ≥ −2
```

## Common errors

- Reading gf as "f then g". It is g(f(x)): f acts first.
- Sketching a double root as a crossing, or ignoring a negative leading coefficient.
- Keeping a root of a modulus equation from the arm where it does not belong.
- Drawing y = a/x² so that it crosses an axis, or giving it no vertical asymptote.
- Giving f⁻¹ without its domain, or using the wrong sign of the square root after a domain restriction.

## Next steps

Do the [practice questions](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-practice/), then recall the key results with the [revision notes](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-revision-notes/). Check your readiness with the [free diagnostics](/diagnostics/).

## Official syllabus

AQA, A-level Mathematics (7357) specification, version 1.3, 31 January 2018, content B7 and B8 and Appendix A notation for functions.
