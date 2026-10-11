---
title: "OCR A Level Mathematics A: Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration (H240)"
seoTitle: "OCR A Level Maths A Numerical Methods Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 122
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "numerical-methods-ocr-alevel-maths"
description: "Study guide to locating roots, iterative methods, cobweb and staircase diagrams, Newton-Raphson and the trapezium rule for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the OCR A Level Mathematics A specification (H240, Version 3.1, August 2026, for first assessment in 2018). It covers section 1.09, Numerical Methods, parts a to g. The whole of 1.09 sits in the Stage 2 column, so it is **A Level only** and is not part of the content shared with AS Level. Pure Mathematics content appears across all three assessed papers.

Use it with the [revision notes](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) show where to start.

## What you must be able to do

| Ref | Outcome (all A Level only) | Section below |
|---|---|---|
| 1.09a | Locate roots of f(x) = 0 by a change of sign, including checking accuracy with upper and lower bounds | Sign change |
| 1.09b | Understand how change of sign methods can fail | Sign change |
| 1.09c | Solve equations approximately by simple iteration; draw cobweb and staircase diagrams | Iteration |
| 1.09d | Use Newton-Raphson and other recurrences xₙ₊₁ = g(xₙ) | Newton-Raphson |
| 1.09e | Show how such methods can fail; know the convergence condition | Convergence, Newton-Raphson |
| 1.09f | Trapezium rule, under- or over-estimates, rectangles for upper and lower bounds | Numerical integration |
| 1.09g | Use numerical methods to solve problems in context | Modelling |

## Locating roots by sign change (1.09a, 1.09b)

Suppose f is continuous on [a, b]. When f(a) and f(b) are of opposite sign, the equation f(x) = 0 must have at least one solution inside the interval. The phrase "sufficiently well-behaved" in the specification means exactly this: no gaps, jumps or asymptotes between a and b.

To check a root to a stated accuracy, find the two values that would round to the same answer and show a sign change between them. For a root α given to 2 decimal places as 1.76, test 1.755 and 1.765.

### Worked example 1

Show that x³ + 2x − 9 = 0 has a root α between 1.7 and 1.8, and show that α = 1.76 to 2 decimal places.

```
f(x) = x³ + 2x − 9
f(1.7) = 4.913 + 3.4 − 9 = −0.687   (negative)
f(1.8) = 5.832 + 3.6 − 9 =  0.432   (positive)
```

The function is continuous and its sign changes, which places a root in (1.7, 1.8). Next:

```
f(1.755) = −0.0846   (negative)
f(1.765) =  0.0284   (positive)
```

The sign change means 1.755 < α < 1.765, so α = 1.76 to 2 decimal places.

### When sign change fails (1.09b)

| Situation | Example | What goes wrong |
|---|---|---|
| Curve touches the x-axis | h(x) = (2x − 3)²(x + 1) on [1, 2] | h(1) = 2 and h(2) = 3, both positive, yet h(1.5) = 0 |
| Even number of roots in the interval | k(x) = (x − 1)(x − 2)(x + 3) on [0.5, 2.5] | k(0.5) = 2.625 and k(2.5) = 4.125, but roots at 1 and 2 |
| Vertical asymptote | tan x on [1, 2], in radians | tan 1 = 1.557 and tan 2 = −2.185, a sign change, but no root: tan x is undefined at π/2 |

A sign change proves a root only for a continuous function. No sign change proves nothing. A sketch of the curve is the quickest way to spot these cases.

## Iteration xₙ₊₁ = g(xₙ) (1.09c)

Rearrange f(x) = 0 into x = g(x). Start from x₁ and repeat. If the values settle, the limit α satisfies α = g(α), so it is a root of the original equation. There are many rearrangements of one equation, and some of them converge while others do not.

### Worked example 2

x³ + 2x − 9 = 0 has a root α ≈ 1.76. Two rearrangements, both started at x₁ = 1.5:

```
(A) x = ∛(9 − 2x)     1.5, 1.8171, 1.7507, 1.7650, 1.7620, 1.7626, 1.7625
(B) x = 9/(x² + 2)    1.5, 2.1176, 1.3879, 2.2922, 1.2407, 2.5429, 1.0630
```

Rearrangement (A) homes in on α = 1.7625 to 4 decimal places. Rearrangement (B) swings further from α each time, so it fails.

### Staircase and cobweb diagrams

Draw y = x and y = g(x). From x₁ go vertically to the curve, then horizontally to the line y = x. That gives x₂. Repeat. Where g is increasing the path is a **staircase**. Where g is decreasing the path spirals, a **cobweb**.

## Convergence and failure (1.09e)

The iteration xₙ₊₁ = g(xₙ) converges to a root α if the gradient of g at α has magnitude less than 1, that is |g′(α)| < 1, and if x₁ is sufficiently close to α.

| g′(α) | Behaviour | Diagram |
|---|---|---|
| 0 < g′(α) < 1 | Converges from one side | Staircase inwards |
| −1 < g′(α) < 0 | Converges, alternating either side | Cobweb inwards |
| g′(α) > 1 | Diverges away from α | Staircase outwards |
| g′(α) < −1 | Diverges, alternating | Cobweb outwards |

For example 2, g′ for rearrangement (A) is −2/[3(9 − 2x)^(2/3)], which equals −0.215 at α, so it converges as a cobweb. For (B), g′(x) = −18x/(x² + 2)², which equals −1.217 at α, so it diverges as a cobweb.

### Worked example 3

The equation x² − 3x − 5 = 0 has roots (3 ± √29)/2, which are 4.1926 and −1.1926. Compare two rearrangements near the positive root.

```
(C) x = √(3x + 5)    g′(x) = 3/(2√(3x + 5))
    At α, √(3α + 5) = α, so g′(α) = 3/(2 × 4.1926) = 0.358
    x₁ = 3: 3, 3.7417, 4.0280, 4.1333, 4.1713, 4.1850, 4.1899

(D) x = (x² − 5)/3   g′(x) = 2x/3
    g′(α) = 2 × 4.1926/3 = 2.795
    x₁ = 5: 5, 6.667, 13.148, 55.96, 1042
```

(C) gives a staircase into the root from below, because 0 < g′(α) < 1. (D) has g′(α) > 1, so the values climb away. Starting (D) at 4 instead sends the values below 4.19 and towards the other root.

## The Newton-Raphson method (1.09d, 1.09e)

Newton-Raphson replaces the curve with its tangent at xₙ. The tangent meets the x-axis at the next approximation:

```
xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)
```

It is a recurrence of the form xₙ₊₁ = g(xₙ) with g(x) = x − f(x)/f′(x), and it usually converges much faster than a simple rearrangement.

### Worked example 4

Use Newton-Raphson with x₁ = 1.5 on f(x) = x³ + 2x − 9.

```
f′(x) = 3x² + 2
f(1.5) = −2.625, f′(1.5) = 8.75
x₂ = 1.5 − (−2.625)/8.75 = 1.8
f(1.8) = 0.432, f′(1.8) = 11.72
x₃ = 1.8 − 0.432/11.72 = 1.7631
x₄ = 1.7625  (4 decimal places)
```

Three steps reach the accuracy that rearrangement (A) needed six steps for.

### How Newton-Raphson fails

The method fails if the initial value is at a stationary point, because f′(x₁) = 0 and the tangent never meets the axis. It can also fail if x₁ is near a stationary point: the tangent is almost flat and throws the next value far away, possibly to a different root.

### Worked example 5

f(x) = x³ − 12x + 7 has f′(x) = 3x² − 12, which is zero at x = 2 and x = −2.

```
x₁ = 2:    f′(2) = 0, so x₂ is undefined
x₁ = 2.1:  f(2.1) = −8.939, f′(2.1) = 1.23, x₂ = 9.367
x₁ = 3:    x₂ = 3.1333, which converges to the root 3.1240
```

The roots are −3.7254, 0.6015 and 3.1240. Starting near 2 flings the iteration well beyond all three.

## Numerical integration (1.09f)

To estimate ∫ f(x) dx from a to b with n strips of width h = (b − a)/n, use ordinates y₀, y₁, ..., yₙ:

```
Trapezium rule:  ∫ f(x) dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + y₂ + ... + yₙ₋₁)]
```

For a curve that is **concave** (f″ < 0) the chords lie below the curve, so the rule **underestimates**. For a **convex** curve (f″ > 0) it **overestimates**. The specification excludes Simpson's rule.

**Rectangles.** For an increasing function, rectangles with heights at the left ends of the strips lie under the curve (lower bound), and rectangles with heights at the right ends lie over it (upper bound). For a decreasing function the roles swap.

### Worked example 6

Estimate ∫ ln x dx from 1 to 3 with 4 strips, and find bounds.

```
h = 0.5;  x: 1, 1.5, 2, 2.5, 3
y: 0, 0.405465, 0.693147, 0.916291, 1.098612

Trapezium:  0.25 × [0 + 1.098612 + 2(0.405465 + 0.693147 + 0.916291)] = 1.2821
Lower (left ends):   0.5 × (0 + 0.405465 + 0.693147 + 0.916291) = 1.0075
Upper (right ends):  0.5 × (0.405465 + 0.693147 + 0.916291 + 1.098612) = 1.5568
```

ln x is increasing, so 1.0075 < I < 1.5568. Its second derivative −1/x² is negative, so 1.2821 is an underestimate. The exact value is 3 ln 3 − 2 = 1.2958, so the trapezium estimate is 0.0137 too low. The trapezium value is the mean of the lower and upper rectangle totals. More strips give a smaller error.

## Modelling with numerical methods (1.09g)

Real problems often give an equation that has no algebraic solution. Set up the equation, locate the root by sign change, then refine it.

### Worked example 7

A solid sphere of radius 1 m floats in water. A model for the depth h metres of the part under the surface leads to h³ − 3h² + 2.4 = 0, with 0 < h < 2. Find h to 3 decimal places.

```
f(h) = h³ − 3h² + 2.4
f(1.1) = 0.101,  f(1.2) = −0.192     (sign change, so 1.1 < h < 1.2)
```

Rewrite as h²(3 − h) = 2.4, so h = √[2.4/(3 − h)]. Then g′(h) = 0.304 at the root, which is below 1, so it converges. Starting from h₁ = 1.2:

```
1.2, 1.1547, 1.1404, 1.1361, 1.1347, 1.1343, 1.1342
```

The other rearrangement, h = 3 − 2.4/h², has g′ = 4.8/h³ = 3.29 at the root, so from 1.2 it climbs away (1.333, 1.65, 2.12) towards the root near 2.66, which is outside the model. Finally f(1.1335) = 0.0019 and f(1.1345) = −0.0011 confirm **h = 1.134 m** to 3 decimal places. State the answer in words: the sphere sinks to a depth of about 1.13 m.

## Common errors

- Writing "root" for a sign change without saying f is continuous.
- Stating that no sign change means no root.
- Testing the rounded value only, instead of both ends of the rounding interval.
- Using a rearrangement without checking |g′(α)| < 1.
- Rounding in the middle of an iteration. Keep full working values and round only at the end.
- Using the trapezium formula with the wrong number of ordinates: n strips need n + 1 values.
- Calling an estimate an overestimate without a reason. Give the sign of f″ or describe the shape.

Next, work through the [practice questions](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-practice/).

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Section 1.09 Numerical Methods, 1.09a to 1.09g.
