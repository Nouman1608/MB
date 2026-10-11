---
title: "OCR A Level Mathematics A: Graphs, sketching, intersections and proportionality (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Graph Sketching Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Graphs of functions, curve sketching, intersections and proportionality"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 106
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "algebra-and-functions-ocr-alevel-maths"
description: "Condensed revision notes for OCR A Level Mathematics A (H240): sketching polynomials, reciprocal graphs, intersections, proportionality and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the graph work in section 1.02 (items 1.02m to 1.02r, Stage 1) of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. The modulus parts of 1.02s and 1.02t are A Level only (Stage 2) and are covered in the separate modulus unit. For full explanations and longer worked examples, use the [study guide](/resources/ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and/). When you are ready to test yourself, move on to the [practice questions](/resources/ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and-practice/).

Related pages: the [course hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/) and the free 10-minute [diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Plot | Draw accurately from a table of values |
| Sketch | Draw a diagram, not necessarily to scale, showing the main features |
| Root | An x-value where y = 0 |
| Repeated root | A factor (x − a) raised to a power greater than 1 |
| Stationary point | A point where dy/dx = 0 |
| Asymptote | A line the curve approaches ever more closely without meeting it |
| Intersection | A point lying on both graphs; its x-coordinate solves f(x) = g(x) |
| Proportional | y = k f(x) for a constant k |

## Sketching a polynomial (1.02n)

Method in steps:

1. Factorise and mark every root on the x-axis.
2. Odd power on a factor: the curve crosses. Power 3 or more: it flattens as it crosses. Even power: it touches and turns back.
3. Find the y-intercept by putting x = 0.
4. Use the sign of the highest-power term for the ends.
5. Differentiate only if the question asks for stationary points, or the shape is unclear.

| Highest-power term | Left end | Right end |
|---|---|---|
| Positive odd (x³) | Down | Up |
| Negative odd (−x³) | Up | Down |
| Positive even (x² or x⁴) | Up | Up |
| Negative even (−x² or −x⁴) | Down | Down |

**Reminder.** Sketch y = (x + 1)²(x − 3).

Roots: −1 (touches) and 3 (crosses). y-intercept: (1)(−3) = −3. Positive cubic, so the curve starts low, rises to touch the axis at (−1, 0) where it has a maximum, falls through (0, −3) to a minimum, then rises through (3, 0).

**Stationary points.** Differentiate, set equal to zero, then classify using the second derivative or the sign of the gradient either side. For y = x³ − 3x, dy/dx = 3(x − 1)(x + 1), so the stationary points are at x = ±1. Then d²y/dx² = 6x, which is negative at x = −1 (maximum, y = 2) and positive at x = 1 (minimum, y = −2).

**Finding an equation from a sketch.** Write the factorised form with an unknown constant k, then use one known point (often the y-intercept) to find k.

## Reciprocal graphs (1.02o)

| | y = a/x | y = a/x² |
|---|---|---|
| Asymptotes | x = 0 and y = 0 | x = 0 and y = 0 |
| a > 0 | Quadrants 1 and 3 | Above the x-axis, both sides |
| a < 0 | Quadrants 2 and 4 | Below the x-axis, both sides |
| Intercepts | None | None |
| Symmetry | Half-turn about the origin | Mirror image in the y-axis |

For y = a/(x − p) the vertical asymptote moves to x = p. The horizontal asymptote is still y = 0.

## Algebra and graphs together (1.02p, 1.02q)

- The solutions of f(x) = g(x) are the x-coordinates of the intersections of y = f(x) and y = g(x).
- A repeated solution means the graphs touch. No real solution means they do not meet.
- To find intersection points, solve for x, then substitute into either equation to find y. Give coordinates as pairs.
- To count solutions to a difficult equation, rearrange it into two sketchable curves and count where they meet. The curves may be polynomial, trigonometric, exponential or reciprocal.
- Never divide through by an expression containing x without checking whether you lose a root. Factorise instead.

**Reminder.** Find where y = 4/x meets y = x + 3.

```
4/x = x + 3  →  4 = x² + 3x  →  x² + 3x − 4 = 0  →  (x + 4)(x − 1) = 0
x = −4:  y = −1        x = 1:  y = 4
```

The points are (−4, −1) and (1, 4).

## Inequalities from graphs

Method in steps:

1. Sketch both graphs on one set of axes.
2. Find the x-coordinates of the intersections. These are the boundaries.
3. For f(x) > g(x), take the x-values where the graph of f is above the graph of g. For f(x) < g(x), take where it is below.
4. Check one value in each interval.
5. Exclude any x-value where a graph is undefined, such as x = 0 for a/x.

## Curves you may be asked to intersect

Intersection questions can mix polynomial, trigonometric, exponential and reciprocal graphs. Have these features ready.

| Curve | Features to draw |
|---|---|
| y = eˣ | Always positive, passes through (0, 1), horizontal asymptote y = 0 (left) |
| y = sin x | Passes through the origin, oscillates between −1 and 1 |
| y = cos x | Starts at (0, 1), oscillates between −1 and 1 |
| y = a/x or a/x² | Asymptotes x = 0 and y = 0 |
| Straight line y = mx + c | Gradient m, y-intercept c |

To count solutions, ask where each pair of curves can possibly meet. A bounded curve such as sine limits the x-range. A curve that is always positive cannot meet one that is always negative. An increasing curve and a decreasing line can meet only once.

**Reminder.** How many solutions does cos x = x have? The line y = x increases through (0, 0) and cos x falls from 1, so they meet once, between 0 and 1. For x > 1 the line is above 1 and cos x is at most 1. For x < 0, either x < −1 and cos x ≥ −1, or −1 ≤ x < 0 and cos x is positive, so the line is below the curve throughout. **One solution.**

## Proportionality (1.02r)

| Relationship | Equation | Graph |
|---|---|---|
| y ∝ x | y = kx | Straight line through the origin |
| y ∝ x² | y = kx² | Parabola from the origin |
| y ∝ x³ | y = kx³ | Cubic through the origin |
| y ∝ √x | y = k√x | Half-parabola on its side |
| y ∝ 1/x | y = k/x | Reciprocal curve |
| y ∝ 1/x² | y = k/x² | The y = a/x² shape |

Method in steps: write the equation with k, substitute the known pair to find k, then use the full equation.

To test a relationship, plot y against xⁿ (or against 1/xⁿ). A straight line through the origin shows proportion, and its gradient is k. A line with a non-zero intercept is linear, not proportional.

## Must-know distinctions

- Touching versus crossing: even power touches, odd power crosses.
- Direct versus inverse: y = kx passes through the origin; y = k/x never reaches either axis.
- Plotting versus sketching: plotting needs accurate values; sketching needs correct features.
- Roots versus intersections: roots are intersections with y = 0.
- Coordinates versus x-values: a point has two coordinates; a solution of an equation is an x-value.

## Quick self-test

1. Find the y-intercept of y = (x + 3)(x − 1)(x − 4).
2. What happens at x = 4 on the curve y = (x − 4)³(x + 1)?
3. For y = x²(x − 2)³(x + 1), at which x-values does the curve cross the x-axis and at which does it touch?
4. State the equations of both asymptotes of y = 6/(x + 3).
5. In which quadrants does y = −4/x lie?
6. y is inversely proportional to x². y = 10 when x = 2. Find y when x = 5.
7. How many points do y = x³ and y = 2/x have in common?
8. Solve 4/x² < 1 by sketching y = 4/x² and y = 1.
9. Data: (1, 0.5), (2, 4), (3, 13.5). Find the relationship between y and x.
10. Find and classify the stationary points of y = x³ − 3x.

### Answers

1. (3)(−1)(−4) = **12**.
2. The curve crosses the x-axis with a flat point there (a stationary point of inflexion), because (x − 4) is cubed.
3. Crosses at **x = 2** (cubed) and **x = −1**. Touches at **x = 0** (squared).
4. **x = −3** and **y = 0**.
5. **Quadrants 2 and 4**.
6. k = 10 × 4 = 40, so y = 40/25 = **1.6**.
7. x³ = 2/x gives x⁴ = 2, so x = ±2^(1/4). **Two points**.
8. The curves meet at x = ±2. The reciprocal curve is below the line when the distance from the origin is greater than 2. **x < −2 or x > 2**.
9. y/x³ is 0.5 each time, so **y = 0.5x³**.
10. dy/dx = 3(x² − 1) = 0 at x = ±1. **Maximum at (−1, 2), minimum at (1, −2)** (second derivative 6x is negative at −1 and positive at 1).

## Where marks are usually lost

- Marking a repeated root as a crossing, or a crossing as a touch.
- Leaving out the y-intercept, or not labelling intercepts with coordinates.
- Drawing the end behaviour the wrong way round for a negative leading coefficient.
- Letting a reciprocal curve cross an asymptote or turn back on itself.
- Writing y-values when the question asks for x-values, or the reverse.
- Dividing both sides of an equation by an expression containing x.
- Giving an inequality answer without checking one value from each interval.
- Calling a linear graph with an intercept a direct proportion.
- Stopping at "three intersections" without saying that this means three real solutions.

## Official syllabus

Source: OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. Section 1.02, items 1.02m to 1.02r. The graphical inequalities in 1.02t involve the modulus function and are in the separate modulus unit.
