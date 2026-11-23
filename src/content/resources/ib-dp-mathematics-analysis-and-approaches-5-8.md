---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.8 Local maximum and minimum points, optimization and points of inflexion"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-8"
description: "IB DP Maths AA section 5.8 study guide: testing local maxima and minima, optimisation in context, and points of inflexion with zero and non-zero gradient."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.8, local maximum and minimum points, testing for maximum and minimum, optimisation, and points of inflexion with zero and non-zero gradients**. It is SL content, examined at SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

It builds directly on the second derivative and concavity from section 5.7, covered in the [section 5.7 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-7/). The [AA differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) gives a shorter treatment of this section alongside the rest of the unit; this page adds the decisions and edge cases that cost marks.

## What section 5.8 asks of you

- Find local maximum and minimum points by solving f′(x) = 0.
- Test their nature using the change of sign of the first derivative or the sign of the second derivative.
- Solve optimisation problems in context, such as profit, area and volume.
- Find points of inflexion, both with zero gradient (stationary) and with non-zero gradient, knowing that f″(x) = 0 alone is not enough.

## Two tests for a stationary point

A **stationary point** is where f′(x) = 0: the tangent is horizontal. There are three possible types: local maximum, local minimum, or stationary point of inflexion.

**First derivative test (sign change).** Look at the sign of f′ just to the left and just to the right.

| Left of the point | Right of the point | Nature |
|---|---|---|
| f′ > 0 | f′ < 0 | local maximum |
| f′ < 0 | f′ > 0 | local minimum |
| same sign both sides | | stationary point of inflexion |

**Second derivative test.** Evaluate f″ at the point.

- f″ > 0: concave-up, so a **local minimum**.
- f″ < 0: concave-down, so a **local maximum**.
- f″ = 0: **no conclusion**. Go back to the first derivative test.

The second derivative test is usually quicker. The first derivative test always works, which is why you need both.

## Worked example 1 (calculator-free): a full analysis of a cubic

Let f(x) = 2x³ + 3x² − 36x + 10. Find and classify the stationary points, and find the point of inflexion.

```
f'(x)  = 6x² + 6x − 36 = 6(x + 3)(x − 2)    → x = −3 or x = 2
f''(x) = 12x + 6

x = −3: f(−3) = −54 + 27 + 108 + 10 = 91,   f''(−3) = −30 < 0 → maximum
x = 2:  f(2)  = 16 + 12 − 72 + 10 = −34,    f''(2)  = 30 > 0  → minimum

f''(x) = 0 when x = −1/2, and f'' changes from − to + there
f(−1/2) = 57/2,   f'(−1/2) = −75/2
```

Local maximum (−3, 91), local minimum (2, −34), and a **point of inflexion with non-zero gradient** at (−1/2, 57/2). For a cubic the inflexion always lies exactly halfway between the two turning points, which is a quick check on your arithmetic: (−3 + 2)/2 = −1/2.

## When the second derivative test fails

The guide makes the point that f″(x) = 0 is not a sufficient condition for a point of inflexion. Compare two curves that both have f′ = 0 and f″ = 0 at the same point.

**Curve A:** f(x) = (x − 2)³ + 3 = x³ − 6x² + 12x − 5.

```
f'(x) = 3(x − 2)²     f''(x) = 6(x − 2)
At x = 2: f' = 0, f'' = 0 → second derivative test gives no conclusion
f'(1.9) > 0 and f'(2.1) > 0: no change of sign
f'' changes from − to + at x = 2
```

(2, 3) is a **stationary point of inflexion** (zero gradient).

**Curve B:** f(x) = (x − 1)⁴ + 2.

```
f'(x) = 4(x − 1)³     f''(x) = 12(x − 1)²
At x = 1: f' = 0, f'' = 0 → no conclusion from f''
f'(0.9) < 0 and f'(1.1) > 0: changes from − to +
```

(1, 2) is a **local minimum**, even though f″(1) = 0. Here f″ = 12(x − 1)² ≥ 0 on both sides, so it does not change sign, and the concavity never changes.

The rule to quote: a point of inflexion needs f″ = 0 **and** a change of sign of f″ (a change of concavity). If the question says "justify", that sign change is what earns the mark.

## Optimisation: the method

1. Define the variables and draw a diagram if the context is geometric.
2. Write the quantity to be optimised in terms of **one** variable, using any constraint to eliminate the others.
3. State the domain allowed by the context.
4. Differentiate, set the derivative equal to zero and solve, keeping only solutions inside the domain.
5. Justify that the value is a maximum or minimum (second derivative or sign change).
6. Answer the question that was asked: the dimension, the maximum value, or both, with units.

### Worked example 2 (calculator-free): an open box

Equal squares of side x cm are cut from the corners of a 24 cm by 15 cm sheet of card, and the sides are folded up to make an open box. Find the maximum volume.

```
V = x(24 − 2x)(15 − 2x),   0 < x < 7.5   (15 − 2x must be positive)
  = 4x³ − 78x² + 360x
dV/dx = 12x² − 156x + 360 = 12(x − 3)(x − 10)
x = 3 or x = 10; only x = 3 is in the domain
d²V/dx² = 24x − 156 = −84 < 0 at x = 3 → maximum
V = 3 × 18 × 9 = 486
```

The maximum volume is **486 cm³**, when the squares have side 3 cm. Rejecting x = 10 needs a reason, here the domain, and stating it is part of the method.

### Worked example 3 (calculator-free): minimum distance

Find the shortest distance from the point A(3, 0) to the curve y = √x.

A general point on the curve is P(x, √x). Instead of minimising the distance D, minimise D², which avoids differentiating a square root. Because D ≥ 0, D and D² are smallest at the same x.

```
D² = (x − 3)² + (√x)² = x² − 5x + 9
d(D²)/dx = 2x − 5 = 0 → x = 5/2
d²(D²)/dx² = 2 > 0 → minimum
D² = 25/4 − 25/2 + 9 = 11/4,   so D = √11/2 ≈ 1.66
```

The shortest distance is √11/2 units, from the point (5/2, √(5/2)).

## Local versus global extrema

A local maximum is the highest point in its neighbourhood, not necessarily the highest value of f. When the domain is a closed interval, also evaluate f at the **end points** and compare. For f(x) = x + 2 cos x on 0 ≤ x ≤ 2π, the local maximum is at x = π/6 with value π/6 + √3 ≈ 2.26, but f(2π) = 2π + 2 ≈ 8.28, so the greatest value of f on the interval occurs at the end point. Read the question: "local maximum point" and "maximum value of f on the interval" are different requests.

## Technology on Paper 2

On Paper 2 the GDC can locate a maximum or minimum directly from the graph, or solve f′(x) = 0 when the equation cannot be solved by hand. For f(x) = 2e^(0.5x) − 1.5x², f′(x) = e^(0.5x) − 3x, and e^(0.5x) = 3x has no algebraic solution. Write down what you did, such as "using the GDC, f′(x) = 0 when x = 0.409 or x = 5.67", and still justify the nature, for example by reading the sign of f′ either side from its graph. A bare coordinate copied from a graph screen may lose the method mark.

## Common mistakes

- Using f″ = 0 to conclude "point of inflexion" without checking that f″ changes sign.
- Abandoning a stationary point because f″ = 0 there, instead of switching to the sign-change test.
- Optimising a function of two variables: always eliminate one using the constraint first.
- Keeping solutions outside the domain, such as negative lengths or x = 10 in the box example.
- Stopping at "x = 3" when the question asked for the maximum volume.
- Treating a local maximum as the greatest value on a closed interval without checking the end points.

## Exam technique: the command words

- **Find the coordinates**: give both x and y, exact unless told otherwise.
- **Justify** or **show that** it is a maximum: state the test and its result in words, such as "f″(3) = −84 < 0, so a maximum".
- **Hence**: use the previous part. A volume found from your own new method may not earn "hence" marks.
- **Determine the nature**: classify as maximum, minimum or point of inflexion, with a reason.

## Where next

Consolidate with the [section 5.8 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-8-revision-notes/) and test yourself with the [section 5.8 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-8-practice/). HL students meet further optimisation problems, alongside related rates, in section 5.14.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.8.
