---
title: "Cambridge O Level Mathematics: Graphs of Functions and Sketching Curves — Revision Notes"
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
description: "Condensed recall notes on linear, quadratic, cubic, reciprocal and exponential graphs, and graphical solutions for Cambridge O Level Mathematics."
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

**The highest power tells you the shape** before you plot a single point. That single habit prevents most sketching errors.

## Exponential growth and decay

Graphs of the form `y = ab^x + c` show **exponential growth** when `b > 1`, and **exponential decay** when `0 < b < 1`. Typical real-world contexts: **population growth** and **compound interest** (growth); **radioactive decay** and **depreciation** (decay).

The curve approaches, but never quite reaches, a **horizontal asymptote at y = c** as x becomes very negative (growth) or very large (decay) — when c = 0, this is simply the x-axis, but a shifted exponential can level off at any horizontal line.

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

The **discriminant**, `b² − 4ac`, tells you how many times the curve meets the x-axis: two (positive), one repeated root/tangent (zero), or none (negative) — see the Algebraic Manipulation notes for the full sign-case treatment.

## Key points to mark when sketching

1. **y-intercept** — set x = 0.
2. **x-intercepts (roots)** — set y = 0.
3. **Turning points**.
4. **Asymptotes**, for reciprocal and exponential graphs.

A sketch does not need to be to scale, but every one of these features must be shown and labelled. That is what the marks are for.

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
- Speed–time graph → gradient is **acceleration**, and the **area under** the graph is the **distance travelled**. This syllabus only requires areas made up of linear sections (e.g. triangles and trapezia), not curved regions.

## Sketching from a table of values vs recognising the equation

Two different exam demands look similar but need different approaches:

- **Given an equation, sketch the graph** -- use the shape-recognition
  table above first, then mark the key points (intercepts, turning
  points, asymptotes) rather than plotting many individual points.
- **Given a table of values, plot the graph** -- plot each point
  accurately on the grid provided, then join with a **smooth curve**
  (never straight segments, unless the function genuinely is linear
  over that interval).

**Worked example.** A table gives values of y = x² − 2x − 3 for
x = −2 to 4. At x = −1, y = (−1)² − 2(−1) − 3 = 1 + 2 − 3 = 0, so
(−1, 0) is a root. At x = 3, y = 9 − 6 − 3 = 0, so (3, 0) is the other
root. The turning point lies on the line of symmetry, halfway between
the roots at x = 1, giving y = 1 − 2 − 3 = −4, so the minimum is
(1, −4).

## Transformations of graphs

Recognise how shifting or reflecting an equation moves its graph,
without needing to re-derive the shape from scratch each time:

| Change to equation | Effect on graph |
|---|---|
| `f(x) + a` | Shifts up by a (down if a is negative) |
| `f(x + a)` | Shifts left by a (right if a is negative) |
| `-f(x)` | Reflects in the x-axis |

This lets you sketch, for example, `y = x² + 3` directly from the
standard parabola shape shifted up 3 units, without plotting a single
point.

## Exam traps

- Plotting points without recognising the expected shape, so an error goes unnoticed.
- Giving the intersection point instead of the x-coordinate.
- Joining points with straight segments where a smooth curve is required.
- Forgetting asymptotes on reciprocal and exponential graphs.
- Reading the gradient of a curve as though it were constant.
- Confusing gradient with area on a speed–time graph.

## Self-test

1. What shape is `y = 5/x`, and where are its asymptotes?
2. Give the condition for two lines to be perpendicular.
3. How do you find the gradient of a curve at a point?
4. On a speed–time graph, what do the gradient and the area under the graph represent?

**Answers:** 1. A hyperbola with two branches; asymptotes along both the x-axis and the y-axis. 2. The product of their gradients is −1. 3. Draw a tangent to the curve at that point and calculate the gradient of the tangent. 4. The gradient is the acceleration; the area under the graph is the distance travelled.
