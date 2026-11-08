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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-plotting-and-sketching-linear-quadratic-cubic-and--01-four-basic-shapes.webp" width="900" height="1200" alt="Four small graphs. y = x² is a U-shaped parabola with minimum at the origin; y = −x² is upside down with a maximum at the origin. y = x³ rises through the origin, flat for a moment there, in quadrants 1 and 3. y = 1/x has two branches in quadrants 1 and 3 that miss both axes." loading="lazy">
  <figcaption>The four shapes OCR expects you to recognise and sketch.</figcaption>
</figure>


## Exponential growth and decay

Graphs of the form `y = ab^x + c` show **exponential growth** when `b > 1`, and **exponential decay** when `0 < b < 1`. Typical real-world contexts: **population growth** and **compound interest** (growth); **radioactive decay** and **depreciation** (decay).

The curve approaches, but never quite reaches, a **horizontal asymptote at y = c** as x becomes very negative (growth) or very large (decay) — when c = 0, this is simply the x-axis, but a shifted exponential can level off at any horizontal line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and--03-g-exponential-pair.webp" width="900" height="960" alt="The curves y = 2 to the x and y = one half to the x for x from minus 3 to 3 on one grid. Both pass through (0, 1) and stay above the x-axis; one rises and the other falls, mirror images in the y-axis." loading="lazy">
  <figcaption>y = 2ˣ and y = (½)ˣ both pass through (0, 1) and are mirror images in the y-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--06-asymptotes.webp" width="900" height="1230" alt="Two Extended sketches with dashed asymptotes. y = 2/x + 1 has asymptotes x = 0 and y = 1 and crosses the x-axis at (−2, 0). y = 3 × 2ˣ − 6 has asymptote y = −6, y-intercept (0, −3) and root x = 1." loading="lazy">
  <figcaption>Reciprocal and exponential curves approach their asymptotes but never cross or touch them.</figcaption>
</figure>


## Straight lines

```
gradient  m = (y2 - y1) / (x2 - x1)
parallel:      same gradient
perpendicular: m1 x m2 = -1
```

To find the equation from two points: calculate the gradient, then substitute one point into `y = mx + c` to find c.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--01-gradient-rise-run.webp" width="900" height="910" alt="A line passes through A (1, 1) and B (5, 4). Going 4 along and 3 up gives rise 3 and run 4, so the gradient is 3 divided by 4 = 0.75." loading="lazy">
  <figcaption>Gradient is the change up divided by the change along.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--05-parallel-lines.webp" width="900" height="1000" alt="Lines y = 2x - 1 and y = 2x + 3 each go 1 across and 2 up, so they are parallel. The parallel line through P (1, 5) has c = 3." loading="lazy">
  <figcaption>Parallel lines share a gradient; use a point to find c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--06-perpendicular-lines.webp" width="900" height="960" alt="Two lines meet at right angles at (0, 1). One has gradient 2/3 and the other -3/2; their product is -1." loading="lazy">
  <figcaption>Perpendicular gradients multiply to -1.</figcaption>
</figure>


## Quadratics

Roots are where the curve crosses the x-axis — found by factorising or by the formula.

Completed square form `a(x + p)² + q` gives the **turning point at (−p, q)** immediately, and the **line of symmetry** at `x = −p`. Alternatively the line of symmetry lies exactly halfway between the two roots.

The **discriminant**, `b² − 4ac`, tells you how many times the curve meets the x-axis: two (positive), one repeated root/tangent (zero), or none (negative) — see the Algebraic Manipulation notes for the full sign-case treatment.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-plotting-and-sketching-linear-quadratic-cubic-and--04-sketch-max-quadratic.webp" width="900" height="820" alt="The upside-down parabola y = 8 + 2x − x² crosses the x-axis at −2 and 4 and the y-axis at (0, 8). A bracket joins the roots and shows the turning point is at x = (−2 + 4) ÷ 2 = 1, giving the maximum (1, 9)." loading="lazy">
  <figcaption>The turning point is halfway between the roots; substitute to find y.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-plotting-and-sketching-linear-quadratic-cubic-and--05-complete-square-turning-point.webp" width="900" height="1270" alt="Two parabolas. (x + 3)² − 2 has minimum (−3, −2), y-intercept (0, 7) and roots near −4.41 and −1.59. −(x − 2)² − 3 has maximum (2, −3), y-intercept (0, −7) and never reaches the x-axis, so has no roots." loading="lazy">
  <figcaption>Completed-square form (x + p)² + q shows the turning point (−p, q) and whether there are roots.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-quadratic-equations--04-quad-discriminant.webp" width="900" height="1010" alt="Three parabolas: 3x² − 7x + 1 (b² − 4ac = 37) crosses the x-axis twice; x² − 6x + 9 (0) touches it once at x = 3; x² − 2x + 3 (−8) never reaches it, so there are no real solutions." loading="lazy">
  <figcaption>Positive discriminant: two solutions; zero: one repeated solution; negative: none.</figcaption>
</figure>


## Key points to mark when sketching

1. **y-intercept** — set x = 0.
2. **x-intercepts (roots)** — set y = 0.
3. **Turning points**.
4. **Asymptotes**, for reciprocal and exponential graphs.

A sketch does not need to be to scale, but every one of these features must be shown and labelled. That is what the marks are for.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--04-sketch-quadratic.webp" width="900" height="1160" alt="A sketch of y = x² + 2x − 15: a U-shape crossing the x-axis at (−5, 0) and (3, 0) and the y-axis at (0, −15), symmetrical about x = −1. The turning point (−1, −16), from completing the square, is Extended only." loading="lazy">
  <figcaption>A sketch shows shape, roots, y-intercept and symmetry; Extended adds the turning point.</figcaption>
</figure>


## Solving equations graphically

To solve `f(x) = g(x)`, draw both graphs and read the **x-coordinates** of the intersection points.

To solve `f(x) = k`, draw the horizontal line `y = k` and read off where it meets the curve.

Often a question gives you a drawn curve and asks you to solve a different equation. **Rearrange the new equation so one side matches the drawn curve** — whatever remains is the line you must add.

The answer is always the **x-coordinate**, not the coordinate pair.

**Worked example.** To solve x³ + x − 4 = 0 graphically, plot y = x³ + x − 4 and read off the x-value where the curve crosses the x-axis — that x-value is the root of the equation, since setting y = 0 recovers the original equation exactly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/mathematics-graphs-curves-revision-notes--02-graphical-root.webp" width="900" height="980" alt="The curve y = x cubed + x minus 4 crosses the x-axis once at x about 1.38. A dashed line drops to the scale. Setting y = 0 recovers the equation, and the answer is the x-value, not the point." loading="lazy">
  <figcaption>Reading the root of x³ + x − 4 = 0 from where the curve meets y = 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--02-solve-with-a-line.webp" width="900" height="1090" alt="The curve y = x² − 2x − 3 is drawn once. Its x-axis crossings (x = −1 and 3) solve x² − 2x − 3 = 0. Rearranging x² − 4x − 1 = 0 gives the line y = 2x − 2, which meets the curve at about x = −0.2 and 4.2." loading="lazy">
  <figcaption>Draw the curve once, then choose the line that matches the equation to solve.</figcaption>
</figure>


## Gradient of a curve

The gradient changes at every point, so it is found by drawing a **tangent** at the point and calculating that tangent's gradient.

In context, the gradient is a **rate of change**:

- Distance–time graph → gradient is **speed**.
- Speed–time graph → gradient is **acceleration**, and the **area under** the graph is the **distance travelled**. This syllabus only requires areas made up of linear sections (e.g. triangles and trapezia), not curved regions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-in-practical-situations--05-tangent-speed.webp" width="900" height="930" alt="A curved distance-time graph through (0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25). A tangent at (3, 9) passes through (2, 3) and (5, 21), so its gradient is 18 divided by 3 = 6 m/s. A chord to (5, 25) has gradient 8 and only gives an average." loading="lazy">
  <figcaption>Speed at one instant is the gradient of the tangent, not of a chord.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-in-practical-situations--06-speed-time-area.webp" width="900" height="890" alt="A speed-time graph for a cyclist: 0 to 12 m/s in 8 s, 12 m/s for 20 s, then to rest in 6 s. The area under the graph is the distance, 48 + 240 + 36 = 324 m, and the average speed is 324 divided by 34 = 9.53 m/s." loading="lazy">
  <figcaption>Gradient is acceleration and area under the graph is distance.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--01-table-to-curve.webp" width="900" height="1090" alt="A table of values for y = x² − 2x − 3 from x = −2 to 5 (y = 5, 0, −3, −4, −3, 0, 5, 12) is plotted as crosses and joined by a smooth U-shaped curve. The curve is symmetrical about the dashed line x = 1. It is drawn smoothly, not with ruler segments." loading="lazy">
  <figcaption>Plot a table, then draw one smooth curve; the table is symmetrical about x = 1.</figcaption>
</figure>


## Transformations of graphs (extension, not a 4024 learning outcome)

> **Extension material.** Transforming the graph of a function is not a
> learning outcome in 4024. The syllabus sub-topics 2.10 Graphs of
> functions and 2.11 Sketching curves ask you to recognise, draw and
> sketch the listed equation forms, and topic 7.1 Transformations covers
> reflecting, rotating, enlarging and translating a shape, not a graph.
> You will not be asked to describe a graph transformation in `f(x)`
> notation; the table below is only a sketching shortcut.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/mathematics-graphs-curves-revision-notes--01-transform-parabola.webp" width="900" height="1300" alt="Three small graphs each show the dashed parabola y = x squared and a solid new curve. Adding 3 moves it up 3, replacing x by x + 2 moves it left 2, and putting a minus sign in front flips it in the x-axis." loading="lazy">
  <figcaption>The three shifting rules applied to y = x².</figcaption>
</figure>

## Frequently asked questions

**How can you tell the shape of a graph from its equation in O Level Mathematics?**
Look at the highest power of x. A power of 1 gives a straight line, x² gives a parabola, x³ gives a cubic, k/x gives a hyperbola with asymptotes along both axes, and ka^x gives an exponential curve.

**How do you solve an equation using a graph that is already drawn?**
Rearrange the new equation so that one side matches the drawn curve; the other side is the line you must add. The solutions are the x-coordinates of the points where the curve and the line intersect.

**How do you find the gradient of a curve at a point?**
Draw a tangent to the curve at that point and calculate the gradient of the tangent. In context the gradient is a rate of change, such as speed on a distance–time graph.

**What does the area under a speed–time graph represent?**
The area under a speed–time graph is the distance travelled, while the gradient is the acceleration. Cambridge O Level Mathematics 4024 only requires areas made of linear sections, such as triangles and trapezia.

**Are graph transformations in the Cambridge O Level Mathematics 4024 syllabus?**
No. These notes treat transformations such as f(x) + a and f(x + a) as extension material, not a 4024 learning outcome.
