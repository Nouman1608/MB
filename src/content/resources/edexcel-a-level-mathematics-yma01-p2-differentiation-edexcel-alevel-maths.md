---
title: "Edexcel International A Level Mathematics (YMA01): Differentiation (P2.7)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.7
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-differentiation-edexcel-alevel-maths"
description: "Stationary points, maxima and minima, increasing and decreasing functions, curve sketching and optimisation for Edexcel IAL Maths Unit P2, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). The single content statement is "applications of differentiation to maxima and minima and stationary points, increasing and decreasing functions". The guidance adds that this includes "applications to curve sketching" and that "maxima and minima problems may be set in the context of a practical problem".

No new differentiation rules appear in Unit P2. You differentiate powers of x exactly as in Unit P1 (including negative and fractional powers and second derivatives), and the chain, product and quotient rules wait until Unit P3. What is new is what you do with the derivative.

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) summarises the unit, and the [guide to stationary points, definite integrals, areas and the trapezium rule](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the/) gives a first set of examples. This page goes deeper into proving that a function is increasing, classifying awkward stationary points, and setting up optimisation problems from words. Test yourself afterwards with the [P2 differentiation revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-revision-notes/) and the [P2 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-practice/).

## Increasing and decreasing functions

- f is **increasing** on an interval if f′(x) > 0 there (the curve rises from left to right).
- f is **decreasing** on an interval if f′(x) < 0 there.

At the end points of such an interval f′(x) = 0. A function whose derivative is negative except at the end points is still decreasing on the closed interval, so 1 < x < 3 and 1 ≤ x ≤ 3 both describe where it decreases; choose one form and be consistent.

### Worked example 1: increasing for every x

**Show that f(x) = x³ + 3x² + 6x − 1 is an increasing function.**

f′(x) = 3x² + 6x + 6. To show this is always positive, complete the square:

f′(x) = 3(x² + 2x + 2) = 3[(x + 1)² + 1] = 3(x + 1)² + 3

(x + 1)² ≥ 0 for all x, so f′(x) ≥ 3 > 0. Therefore **f is increasing for all x**.

Completing the square, or showing the discriminant is negative with a positive leading coefficient, are the two standard ways to prove a quadratic derivative never changes sign. Substituting a few values is not a proof.

### Worked example 2: an interval of decrease, then a sketch

**f(x) = x³ − 6x² + 9x + 1. Find the set of values of x for which f is decreasing, and sketch y = f(x).**

f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3).

f′(x) < 0 between the roots of this positive quadratic, so **f is decreasing for 1 < x < 3**.

For the sketch, find the stationary points: f(1) = 1 − 6 + 9 + 1 = 5 and f(3) = 27 − 54 + 27 + 1 = 1. The curve rises to a maximum at (1, 5), falls to a minimum at (3, 1), then rises again. It crosses the y-axis at (0, 1). Since the minimum value 1 is positive, the curve meets the x-axis only once, to the left of x = 0.

A sketch for this unit should show the shape, the stationary points with coordinates, and the axis intercepts that can be found.

## Classifying stationary points

At a stationary point, f′(x) = 0. To decide what kind:

| Test | Maximum | Minimum | Needs another test |
|---|---|---|---|
| Second derivative | f″(x) < 0 | f″(x) > 0 | f″(x) = 0 |
| Sign of f′(x) either side | + then − | − then + | same sign both sides: neither |

A stationary point where the gradient has the same sign on both sides is neither a maximum nor a minimum: the curve flattens momentarily and carries on in the same direction.

### Worked example 3: a fractional power

**Find and classify the stationary point of y = x − 6√x, x > 0.**

Write y = x − 6x^½. Then dy/dx = 1 − 3x^(−½).

dy/dx = 0 when 3x^(−½) = 1, so √x = 3 and x = 9. Then y = 9 − 6 × 3 = −9.

d²y/dx² = (3/2)x^(−3/2). At x = 9 this is (3/2) × 1/27 = 1/18 > 0, so **(9, −9) is a minimum**.

### Worked example 4: when the second derivative is zero

**Find and classify the stationary points of y = x⁴ − 4x³.**

dy/dx = 4x³ − 12x² = 4x²(x − 3), which is zero at x = 0 and x = 3.

d²y/dx² = 12x² − 24x.

- At x = 3: d²y/dx² = 108 − 72 = 36 > 0, so **(3, −27) is a minimum**.
- At x = 0: d²y/dx² = 0, so the test fails. Check the gradient either side: at x = −0.1, dy/dx = 4(0.01)(−3.1) < 0; at x = 0.1, dy/dx = 4(0.01)(−2.9) < 0. The gradient is negative on both sides, so **(0, 0) is neither a maximum nor a minimum**; it is a stationary point of inflection.

The factor 4x² in dy/dx is the clue: a squared factor does not change sign, so the gradient does not change sign there.

## Practical maximum and minimum problems

The method is always the same:

1. Define variables and write the quantity to be optimised (area, volume, cost) in terms of **one** variable, using any given constraint to eliminate the other.
2. Differentiate and solve "derivative = 0".
3. Justify the nature (usually the second derivative).
4. Answer the question that was asked, with units.

### Worked example 5: a can with the least surface area

**A closed cylindrical can has volume 500 cm³. Its radius is r cm and its height is h cm. Find the value of r that minimises the total surface area A, and the minimum area.**

Volume: πr²h = 500, so h = 500/(πr²).

Area: A = 2πr² + 2πrh = 2πr² + 2πr × 500/(πr²) = **2πr² + 1000/r**.

dA/dr = 4πr − 1000/r². Setting this to zero: 4πr³ = 1000, so r³ = 250/π and **r = 4.30** (3 s.f.).

d²A/dr² = 4π + 2000/r³, which is positive for r > 0, so this gives a minimum.

A = 2π(4.301)² + 1000/4.301 = **349 cm²** (3 s.f.).

Then h = 500/(π × 4.301²) = 8.60, which is twice the radius: the most economical closed can has height equal to its diameter.

## Common mistakes

- **Not rewriting before differentiating.** √x, 1/x and 6/x² must become x^½, x⁻¹ and 6x⁻² first.
- **Stopping at x-values.** "Find the stationary points" means coordinates; substitute back into y, not into dy/dx.
- **Classifying without evidence.** State the value or sign of d²y/dx², or the gradient either side, then the conclusion.
- **Assuming f″(x) = 0 means a point of inflection.** It means the test is inconclusive; check the gradient either side.
- **Two variables left in an optimisation expression.** Use the constraint to remove one before differentiating.
- **Rounding r before finding A,** which can change the final significant figure.
- **Giving the wrong interval** for "increasing": between the roots of a positive quadratic derivative the function is decreasing, not increasing.

## Exam technique

- **"Find the coordinates of the stationary points"**: derivative, solve = 0, substitute into y, list each point as (x, y).
- **"Determine the nature"** or **"Justify that it is a maximum"**: give the second-derivative value or sign and a conclusion.
- **"Show that the area is given by ..."**: start from the definitions and constraint; the printed result must appear at the end.
- **"Find the set of values of x for which f is increasing"**: solve f′(x) > 0 and write the answer as an inequality.
- **"Hence"** after "show that V = ..." means differentiate the printed expression, even if your part (a) went wrong.
- **Sketches:** label stationary points and intercepts with coordinates; a smooth shape matters more than scale.

## Related resources

- [P2 differentiation revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-revision-notes/)
- [P2 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-practice/)
- [Stationary points, definite integrals, areas and the trapezium rule](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the/)
- [Differentiating and integrating powers of x (Unit P1)](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/)
- [P2 integration study guide](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths/)
