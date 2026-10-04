---
title: "AQA GCSE Mathematics 8300: Graphs -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Graphs Study Guide (A8-A16)"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Graphs"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
    subtopic: "graphs-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 section 3.2.2 Graphs (A8-A16): straight lines, quadratics, graph shapes, transformations, gradients, areas, circles."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches section 3.2.2, **Graphs** (specification references A8 to A16), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Graphs can be tested on any of the three papers: Paper 1 is non-calculator, and Papers 2 and 3 allow a calculator. Basic and additional foundation content is for both tiers. Content in the specification's "Higher content only" column is labelled **Higher tier only** below.

Use it with the [Graphs revision notes](/resources/aqa-gcse-maths-8300-graphs-revision-notes/) and the [Graphs practice questions](/resources/aqa-gcse-maths-8300-graphs-practice/). For the whole of Topic 2, see the [Algebra study guide](/resources/aqa-gcse-mathematics-algebra/). The course hub is [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) lists every statement, and the [free 10-minute diagnostics](/diagnostics/) show where to start.

## What this section covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| A8 | Work with coordinates in all four quadrants | Both |
| A9 | Plot straight-line graphs; use y = mx + c for parallel lines; find a line through two points, or through one point with a given gradient | Both |
| A9 | Use y = mx + c to identify perpendicular lines | Higher tier only |
| A10 | Identify and interpret gradients and intercepts of linear functions, graphically and algebraically | Both |
| A11 | Identify roots, intercepts and turning points of quadratics graphically; deduce roots algebraically | Both |
| A11 | Deduce turning points by completing the square | Higher tier only |
| A12 | Recognise, sketch and interpret linear, quadratic, simple cubic and reciprocal (y = 1/x, x ≠ 0) graphs | Both |
| A12 | Exponential graphs y = kˣ (k > 0); y = sin x, y = cos x, y = tan x for any angle in degrees | Higher tier only |
| A13 | Sketch translations and reflections of a given function | Higher tier only |
| A14 | Plot and interpret graphs, including non-standard functions in real contexts and reciprocal graphs, to find approximate solutions (for example simple kinematics) | Both |
| A14 | The same with exponential graphs | Higher tier only |
| A15 | Calculate or estimate gradients of graphs and areas under graphs, and interpret them | Higher tier only |
| A16 | Equation of a circle centred at the origin; tangent to a circle at a given point | Higher tier only |

## Coordinates and plotting straight lines (A8, A9)

A point (x, y) is x across and y up. The axes split the plane into four quadrants, so either coordinate can be negative: (−3, 2) is left and up; (2, −3) is right and down.

To plot a straight line, make a table of values, plot the points and join them with a ruler. Three points are enough, but use the full x-range the question gives.

**Worked example.** Plot y = 3 − 2x for −2 ≤ x ≤ 3.

```
x  | -2  -1   0   1   2   3
y  |  7   5   3   1  -1  -3
```

Each step of 1 in x lowers y by 2, so the gradient is −2. The line crosses the y-axis at (0, 3). If one point does not line up with the others, recalculate it before drawing.

## Gradient, intercept and y = mx + c (A9, A10)

In y = mx + c, **m is the gradient** and **c is the y-intercept**. The equation must start "y =" before you read them off.

Gradient = (change in y) ÷ (change in x). A line sloping down from left to right has a negative gradient. From a graph, pick two points far apart where the line crosses grid corners, then divide.

**Parallel lines** have the same gradient. **Perpendicular lines (Higher tier only)** have gradients that multiply to −1, so the perpendicular gradient is the negative reciprocal: 3 becomes −1/3, and −2/5 becomes 5/2.

**Worked example (line through two points).** Find the equation of the line through (−1, 7) and (3, −1).

```
m = (-1 - 7) / (3 - (-1)) = -8 / 4 = -2
Substitute (-1, 7) into y = -2x + c:  7 = 2 + c,  so c = 5
Line: y = -2x + 5
Check with (3, -1): -2(3) + 5 = -1   (correct)
```

**Worked example (parallel, then perpendicular).** Find the line through (4, 1) that is (a) parallel to y = −2x + 5, (b) perpendicular to it.

```
(a) m = -2.    1 = -2(4) + c  ->  c = 9.        y = -2x + 9
(b) m = 1/2.   1 = (1/2)(4) + c -> c = -1.      y = (1/2)x - 1   (Higher tier only)
```

**Interpreting gradient and intercept.** In context, the gradient is a rate and the intercept is the starting value. A taxi fare is C = 2.5d + 3, where C is the cost in pounds and d is the distance in km. The gradient 2.5 means each extra kilometre costs £2.50; the intercept 3 is a fixed £3 charge before the taxi moves. An 8 km trip costs 2.5 × 8 + 3 = £23. This links to R14 (gradient as a rate of change) in the [ratio, proportion and rates of change revision notes](/resources/aqa-gcse-maths-8300-ratio-proportion-and-rates-of-change-revision-notes/).

## Quadratic graphs: roots, intercepts, turning points (A11)

The graph of y = ax² + bx + c is a parabola: U-shaped when a > 0 (a minimum), ∩-shaped when a < 0 (a maximum).

- **Roots** are where the curve crosses the x-axis (y = 0).
- The **y-intercept** is (0, c).
- The curve is **symmetrical** about a vertical line through the turning point. The line of symmetry lies halfway between the roots.

**Worked example.** For y = x² − 2x − 8, find the roots, the y-intercept and the turning point.

```
Roots:      x^2 - 2x - 8 = 0  ->  (x - 4)(x + 2) = 0  ->  x = 4 or x = -2
Intercept:  x = 0 gives y = -8, so (0, -8)
Symmetry:   halfway between -2 and 4 is x = 1
Turning pt: y = 1 - 2 - 8 = -9, so (1, -9), a minimum
```

**Completing the square (Higher tier only).** Write x² + bx + c as (x + b/2)² + k. The turning point is (−b/2, k). This works even when the roots are not whole numbers.

**Worked example.** Find the turning point of y = x² − 8x + 13.

```
x^2 - 8x + 13 = (x - 4)^2 - 16 + 13 = (x - 4)^2 - 3
(x - 4)^2 is never negative, so the least value of y is -3 when x = 4
Turning point: (4, -3), a minimum
```

## Recognising and sketching graphs (A12)

| Function | Shape and key features | Tier |
|---|---|---|
| y = mx + c | Straight line | Both |
| y = ax² + bx + c | Parabola, one turning point, symmetrical | Both |
| y = x³ (simple cubic) | Through the origin; rises from bottom left to top right and flattens at (0, 0) | Both |
| y = 1/x, x ≠ 0 | Two separate branches in the first and third quadrants; never touches either axis | Both |
| y = kˣ, k > 0 | Passes through (0, 1); above the x-axis everywhere; rises if k > 1, falls if 0 < k < 1 | Higher tier only |
| y = sin x | Wave between −1 and 1; repeats every 360°; sin 0° = 0, sin 90° = 1 | Higher tier only |
| y = cos x | Same wave shifted; cos 0° = 1, cos 180° = −1 | Higher tier only |
| y = tan x | Repeats every 180°; undefined at 90°, 270°, …; tan 45° = 1 | Higher tier only |

A sketch must show the correct shape and label key points: intercepts, turning points and, for reciprocal graphs, that the curve approaches but does not meet the axes. For exponential graphs, compare values: at x = 2, 2ˣ = 4 but 3ˣ = 9, so the graph with the larger k is steeper for positive x. For trig graphs, use symmetry: if sin x = 0.5 at 30°, it is also 0.5 at 180° − 30° = 150°. The exact values come from G21.

## Translations and reflections (A13, Higher tier only)

For a given graph y = f(x):

| New graph | Transformation |
|---|---|
| y = f(x) + a | Translation by vector (0, a): up a |
| y = f(x + a) | Translation by vector (−a, 0): left a |
| y = −f(x) | Reflection in the x-axis |
| y = f(−x) | Reflection in the y-axis |

The change *inside* the bracket moves the graph the opposite way to the sign.

**Worked example.** The point (2, 4) lies on y = f(x). Find its image on each graph.

```
y = f(x - 3):  right 3        -> (5, 4)
y = f(x) + 2:  up 2           -> (2, 6)
y = -f(x):     y changes sign -> (2, -4)
y = f(-x):     x changes sign -> (-2, 4)
```

## Graphs in real contexts and graphical solutions (A14)

**Distance-time graphs:** the gradient is the speed, and a horizontal section means the object is stationary. A runner whose graph is a straight line from (0, 0) to (40 s, 200 m) runs at 200 ÷ 40 = 5 m/s. Real-context graphs can also be non-standard curves (water depth in a filling vase, temperature over a day) and, on both tiers, reciprocal graphs such as time against speed for a fixed journey. Exponential graphs in contexts such as growth are Higher tier only.

**Graphical solutions.** To solve an equation from a graph you already have, rearrange so one side is the plotted function, then draw the other side as a line.

**Worked example.** Using the graph of y = x² − 2x − 8, solve x² − 2x − 8 = −5.

```
Draw the horizontal line y = -5.
It meets the curve where x = -1 and x = 3.
Check: (-1)^2 - 2(-1) - 8 = -5 and 3^2 - 6 - 8 = -5
```

Graph readings are approximate, so give answers to the accuracy of the grid.

## Gradients and areas of graphs (A15, Higher tier only)

- **Gradient of a curve at a point:** draw a tangent there and find its gradient. This is the instantaneous rate of change (R15).
- **Area under a graph:** split it into trapezia (or triangles and rectangles) of equal width and add them.
- On a **velocity-time graph**, the gradient is acceleration and the area is distance travelled. On a **distance-time graph**, the gradient is speed. In financial graphs, the gradient is a rate such as pounds per month.

**Worked example.** A cyclist's velocity v m/s after t seconds is shown by a smooth curve through these points:

```
t (s)   | 0   2   4   6   8
v (m/s) | 0   7  12  15  16
```

(a) Estimate the distance travelled in 8 seconds using four strips.

```
Area = (2/2) x [0 + 2(7 + 12 + 15) + 16] = 1 x 84 = 84 m
```

The curve bends downwards, so each trapezium sits below the curve: 84 m is an **underestimate**.

(b) A tangent drawn at t = 4 passes through (0, 4) and (8, 20). Estimate the acceleration at t = 4.

```
Gradient = (20 - 4) / (8 - 0) = 16 / 8 = 2 m/s^2
```

## Circles and tangents (A16, Higher tier only)

x² + y² = r² is a circle with centre (0, 0) and radius r. So x² + y² = 20 has radius √20 = 2√5.

A tangent meets the circle at one point and is **perpendicular to the radius** there.

**Worked example.** Find the equation of the tangent to x² + y² = 20 at (2, −4).

```
Check the point: 2^2 + (-4)^2 = 4 + 16 = 20   (on the circle)
Radius gradient: (-4 - 0) / (2 - 0) = -2
Tangent gradient: 1/2  (negative reciprocal)
-4 = (1/2)(2) + c  ->  c = -5
Tangent: y = (1/2)x - 5   (or x - 2y = 10)
```

## Common errors

- Reading the gradient from an equation not yet in the form y = mx + c, such as 2x + 3y = 6 (the gradient is −2/3, not 2).
- Dividing change in x by change in y, or losing a minus sign when one coordinate is negative.
- Using the reciprocal without changing the sign for a perpendicular gradient.
- Joining plotted quadratic points with straight segments, or giving a pointed "V" at the turning point.
- Giving only one root when the curve crosses the x-axis twice.
- Moving y = f(x + 3) to the right instead of the left.
- Drawing the tangent to a curve as a chord that cuts the curve in two places.
- Counting grid squares for an area without converting to the units on the axes.

## Where to go next

Fix the facts with the [Graphs revision notes](/resources/aqa-gcse-maths-8300-graphs-revision-notes/), then test yourself with the [Graphs practice questions](/resources/aqa-gcse-maths-8300-graphs-practice/). For other parts of Topic 2, use the [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) and [Algebra practice questions](/resources/aqa-gcse-mathematics-algebra-practice/).

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.2.2 Graphs (A8 to A16).
