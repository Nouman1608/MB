---
title: "Cambridge O Level Mathematics (4024): Sketching Curves"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.11
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "sketching-curves"
description: "Study guide to 4024 section 2.11: sketching linear, quadratic, cubic, reciprocal and exponential graphs with roots, turning points and asymptotes."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.11, Sketching curves, in the Algebra and graphs topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The broader page [Graphs of Functions and Sketching Curves](/resources/graphs-of-functions-and-sketching-curves/) introduces the five shapes; this page shows how to produce and read a full sketch for each. Afterwards, use the [sketching curves revision notes](/resources/cambridge-o-level-mathematics-4024-sketching-curves-revision-notes/) and the [sketching curves practice questions](/resources/cambridge-o-level-mathematics-4024-sketching-curves-practice/).

## What section 2.11 asks for

You must **recognise, sketch and interpret** graphs of five types of function. The syllabus lists the forms:

| Type | Form in the syllabus |
|---|---|
| Linear | ax + by = c |
| Quadratic | y = ax² + bx + c |
| Cubic | y = ax³ + b or y = ax³ + bx² + cx |
| Reciprocal | y = a/x + b |
| Exponential | y = arˣ + b, with r a positive rational number |

Here a, b and c are rational numbers. You need knowledge of **turning points, roots and symmetry**, of **vertical and horizontal asymptotes**, and you must find the **turning point of a quadratic by completing the square**.

## Sketch or plot?

A plot uses a table of values and accurate points on a grid; that belongs to section 2.10. A sketch has no table. It shows the correct **shape** in the correct **position**, with the important points labelled by their coordinates and any asymptotes drawn as dashed lines with their equations. It does not need to be to scale, but it must not contradict the labels: a point labelled (0, 6) must sit above one labelled (0, 2).

## The checklist for any sketch

1. **Shape.** Decide the type of function and the overall direction.
2. **y-intercept.** Put x = 0 (not possible for a/x + b).
3. **Roots.** Put y = 0 and solve, if the equation can be solved.
4. **Turning point and symmetry** for a quadratic.
5. **Asymptotes** for reciprocal and exponential graphs.
6. **Label** everything you found.

## Linear graphs: ax + by = c

The quickest sketch uses both intercepts. For 3x + 2y = 12, putting x = 0 gives y = 6, and putting y = 0 gives x = 4. Draw the straight line through (0, 6) and (4, 0). Rearranging to y = −1.5x + 6 confirms the gradient is negative, so the line falls from left to right. A line of the form x = k is vertical and y = k is horizontal.

## Quadratic graphs

The sign of a decides the shape: a > 0 gives a U-shape with a minimum point, a < 0 gives an upside-down U with a maximum point. Every quadratic is symmetrical about the vertical line through its turning point.

### Worked example 1

Sketch y = 2x² + 8x + 3, showing the turning point, the line of symmetry and the y-intercept.

**Complete the square.** Take out the factor 2 from the x terms first:

```
y = 2(x² + 4x) + 3
  = 2[(x + 2)² − 4] + 3
  = 2(x + 2)² − 8 + 3
  = 2(x + 2)² − 5
```

The squared term is never negative, so y is smallest when x + 2 = 0. The **minimum point is (−2, −5)** and the **line of symmetry is x = −2**.

**y-intercept:** x = 0 gives y = 3.

**Roots:** 2(x + 2)² = 5, so (x + 2)² = 2.5 and x = −2 ± √2.5, giving x ≈ −0.42 and x ≈ −3.58. These sit at equal distances either side of x = −2, which is a useful check.

The sketch is a U-shape with lowest point (−2, −5), crossing the y-axis at (0, 3) and the x-axis at about −3.58 and −0.42.

**Using symmetry.** The point (0, 3) is 2 units right of the line x = −2, so (−4, 3) is also on the curve. Questions often ask for this kind of reflected point.

## Cubic graphs

For y = ax³ + bx² + cx, every term contains x, so you can take out a factor of x and the curve always passes through the origin.

- a > 0: the curve starts low on the left and ends high on the right.
- a < 0: it starts high on the left and ends low on the right.
- If the cubic has three distinct roots, it has two turning points, one between each pair of neighbouring roots.

For y = ax³ + b, the graph is the curve y = x³ stretched (and reflected if a < 0) and moved so that it crosses the y-axis at (0, b). It has no turning points; it flattens momentarily at (0, b).

### Worked example 2

Sketch y = x³ − 4x² + 3x.

```
y = x(x² − 4x + 3) = x(x − 1)(x − 3)
roots: x = 0, x = 1, x = 3
```

a = 1 > 0, so the curve rises from bottom left to top right. It crosses the x-axis at 0, 1 and 3, with a maximum between 0 and 1 and a minimum between 1 and 3. A check value confirms the dip: at x = 2, y = 8 − 16 + 6 = −2, below the axis as expected. You are not expected to find the exact turning points of a cubic; label the roots and show the turning points in the correct intervals.

## Reciprocal graphs: y = a/x + b

a/x has no value at x = 0, so the line **x = 0** (the y-axis) is a vertical asymptote. As x becomes very large, positive or negative, a/x approaches 0, so y approaches b: the line **y = b** is a horizontal asymptote.

- a > 0: the branches lie top right and bottom left of the point where the asymptotes cross.
- a < 0: the branches lie top left and bottom right.

### Worked example 3

Sketch y = 6/x − 2.

- Asymptotes: **x = 0** and **y = −2**, drawn dashed.
- Root: 6/x − 2 = 0 gives 6/x = 2, so **x = 3**.
- No y-intercept, because x = 0 is not allowed.
- a = 6 > 0, so one branch is above y = −2 for x > 0 (crossing the x-axis at 3) and the other is below y = −2 for x < 0.

The graph is symmetrical about the point (0, −2) where the asymptotes cross.

## Exponential graphs: y = arˣ + b

- r > 1 (with a > 0): growth, the curve rises more and more steeply to the right.
- 0 < r < 1 (with a > 0): decay, the curve falls and levels off to the right.
- The horizontal asymptote is **y = b**.
- The y-intercept is a + b, because r⁰ = 1.

### Worked example 4

Sketch y = 3(0.5)ˣ + 1.

y-intercept: 3 × 1 + 1 = 4, so (0, 4). The multiplier 0.5 is less than 1, so this is decay. As x increases, 3(0.5)ˣ shrinks towards 0 and y approaches **1**. There is no root, because y is always greater than 1. To the left the curve rises steeply; for example at x = −2, y = 3 × 4 + 1 = 13.

## Interpreting a sketch

Interpretation questions ask what a sketch tells you without further calculation.

- **Number of solutions.** The equation 6/x − 2 = k has one solution for every value of k except k = −2, because a horizontal line y = k meets the graph once unless it is the asymptote.
- **Range of values.** For y = 2(x + 2)² − 5 the y-values are all **y ≥ −5**.
- **Recognition.** A curve through the origin with three roots must be the ax³ + bx² + cx form; a curve with two asymptotes must be reciprocal; a curve with one horizontal asymptote and a y-intercept is exponential.

## Common mistakes

- Taking the turning point of y = 2(x + 2)² − 5 as (2, −5). The sign inside the bracket changes: x + 2 = 0 at x = −2.
- Forgetting to take out the coefficient of x² before completing the square.
- Drawing a reciprocal graph that touches or crosses an asymptote.
- Drawing an exponential curve that reaches its asymptote or dips below it.
- Showing a cubic with a > 0 ending low on the right.
- Leaving key points unlabelled; an unlabelled sketch shows the shape only.

## Exam technique for the command words

- **Sketch:** correct shape, labelled intercepts, turning point or asymptotes as required. No table is needed.
- **Write down:** the answer should be visible from the equation or form, such as an asymptote or the turning point from completed-square form.
- **Find:** show working, such as completing the square or solving for roots.
- **Show that:** finish with the exact expression in the question.

## Next steps

Try the [sketching curves practice questions](/resources/cambridge-o-level-mathematics-4024-sketching-curves-practice/) and revise from the [sketching curves revision notes](/resources/cambridge-o-level-mathematics-4024-sketching-curves-revision-notes/). For plotting accurate graphs from tables, see [graphs of functions](/resources/cambridge-o-level-mathematics-4024-graphs-of-functions/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 2.11 Sketching curves.
