---
title: "IGCSE Mathematics: Graphs of Functions and Sketching Curves — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.10
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "graphs-of-functions"
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "sketching-curves"
description: "Condensed recall notes on linear, quadratic, cubic, reciprocal and exponential graphs, transformations and graphical solutions for IGCSE Mathematics."
author: "muhammad-ghazali-siddiqui"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Graphs of Functions and Sketching Curves study guide](/resources/graphs-of-functions-and-sketching-curves/).

## Recognise the shape from the equation

| Equation | Shape | Key features |
|---|---|---|
| `y = mx + c` | Straight line | Gradient m, y-intercept c |
| `y = ax² + bx + c` | **Parabola** | Opens up if a > 0, down if a < 0; one turning point |
| `y = ax³ + …` | **Cubic** | Two turning points, or none; opposite ends go opposite ways |
| `y = k/x` | **Hyperbola** | Two branches; asymptotes at both axes |
| `y = ka^x` | **Exponential** | Rapid growth or decay; never reaches the x-axis |
| `x² + y² = r²` | **Circle**, centre origin, radius r | |

**The highest power tells you the shape** before you plot a single point. That single habit prevents most sketching errors.

## Exponential growth and decay

Graphs of the form `y = ab^x + c` show **exponential growth** when `b > 1`, and **exponential decay** when `0 < b < 1`. Typical real-world contexts: **population growth** and **compound interest** (growth); **radioactive decay** and **depreciation** (decay).

The curve approaches, but never quite reaches, a **horizontal asymptote at y = c** as x becomes very large (growth) or very negative (decay) — when c = 0, this is simply the x-axis, but a shifted exponential can level off at any horizontal line.

## Straight lines

```
gradient  m = (y2 - y1) / (x2 - x1)
parallel:      same gradient
perpendicular: m1 x m2 = -1
```

To find the equation from two points: calculate the gradient, then substitute one point into `y = mx + c` to find c.

## Quadratics

Roots are where the curve crosses the x-axis — found by factorising or by the formula.

Completed square form `a(x + p)² + q` gives the **turning point at (−p, q)** immediately, and the **line of symmetry** at `x = −p`. Alternatively the line of symmetry lies exactly halfway between the two roots.

The **discriminant** `b² − 4ac` tells you how many times the curve meets the x-axis: two, one (tangent), or none.

## Key points to mark when sketching

1. **y-intercept** — set x = 0.
2. **x-intercepts (roots)** — set y = 0.
3. **Turning points**.
4. **Asymptotes**, for reciprocal and exponential graphs.

A sketch does not need to be to scale, but every one of these features must be shown and labelled. That is what the marks are for.

## Transformations

| Transformation | Effect |
|---|---|
| `y = f(x) + a` | Translation **up** by a |
| `y = f(x + a)` | Translation **left** by a |
| `y = −f(x)` | Reflection in the **x**-axis |
| `y = f(−x)` | Reflection in the **y**-axis |
| `y = kf(x)` | Vertical stretch, factor k |
| `y = f(kx)` | Horizontal stretch, factor 1/k |

**The counter-intuitive pair:** `f(x + a)` moves the graph **left**, not right, and `f(kx)` stretches by `1/k`, not k. Changes **inside** the bracket affect x and behave in the opposite way to what the sign suggests; changes **outside** affect y and behave as expected.

## Solving equations graphically

To solve `f(x) = g(x)`, draw both graphs and read the **x-coordinates** of the intersection points.

To solve `f(x) = k`, draw the horizontal line `y = k` and read off where it meets the curve.

Often a question gives you a drawn curve and asks you to solve a different equation. **Rearrange the new equation so one side matches the drawn curve** — whatever remains is the line you must add.

The answer is always the **x-coordinate**, not the coordinate pair.

**Worked example.** To solve x³ + x − 4 = 0 graphically, plot y = x³ + x − 4 and read off the x-value where the curve crosses the x-axis — that x-value is the root of the equation, since setting y = 0 recovers the original equation exactly.

## Gradient of a curve

The gradient changes at every point, so it is found by drawing a **tangent** at the point and calculating that tangent's gradient.

In context, the gradient is a **rate of change**:

- Distance–time graph → gradient is **speed**.
- Speed–time graph → gradient is **acceleration**, and the **area under** the graph is the **distance travelled**.

For a curved speed–time graph, estimate the area by counting squares or by the trapezium rule.

## Exam traps

- Plotting points without recognising the expected shape, so an error goes unnoticed.
- Getting `f(x + a)` the wrong way round.
- Giving the intersection point instead of the x-coordinate.
- Joining points with straight segments where a smooth curve is required.
- Forgetting asymptotes on reciprocal and exponential graphs.
- Reading the gradient of a curve as though it were constant.
- Confusing gradient with area on a speed–time graph.

## Self-test

1. What shape is `y = 5/x`, and where are its asymptotes?
2. Give the condition for two lines to be perpendicular.
3. Describe the transformation from `y = f(x)` to `y = f(x − 3)`.
4. How do you find the gradient of a curve at a point?
5. On a speed–time graph, what do the gradient and the area under the graph represent?

**Answers:** 1. A hyperbola with two branches; asymptotes along both the x-axis and the y-axis. 2. The product of their gradients is −1. 3. A translation of 3 units to the **right**. 4. Draw a tangent to the curve at that point and calculate the gradient of the tangent. 5. The gradient is the acceleration; the area under the graph is the distance travelled.
