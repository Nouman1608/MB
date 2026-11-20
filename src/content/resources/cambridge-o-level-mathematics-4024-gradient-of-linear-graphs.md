---
title: "Cambridge O Level Mathematics (4024): Gradient of linear graphs"
seoTitle: "O Level Maths 4024 Gradient of Linear Graphs Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 3.3
syllabusTopics:
  - qualification: "o-level"
    topic: "coordinate-geometry"
  - qualification: "o-level"
    topic: "coordinate-geometry"
    subtopic: "gradient-of-linear-graphs-4024"
description: "Cambridge O Level Maths 4024 subtopic 3.3 in depth: finding the gradient of a straight line from a graph and from two points, with signs, special cases and applications."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers subtopic **3.3 Gradient of linear graphs** in Topic 3, Coordinate geometry, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027 series. The gradient measures how steep a straight line is. The [Coordinate geometry revision notes](/resources/o-level-mathematics-coordinate-geometry-revision-notes/) summarise the whole topic in brief. This page explains the gradient in depth: what it means, how to find it from a graph or from two points, and how to use it to solve problems.

Companion page: the [Gradient of linear graphs practice questions](/resources/cambridge-o-level-mathematics-4024-gradient-of-linear-graphs-practice/).

## What the syllabus asks

The syllabus lists two outcomes:

1. Find the gradient of a straight line.
2. Calculate the gradient of a straight line from the coordinates of two points on it.

Gradient questions appear on both papers. They also underpin the next subtopics: the equation of a line, parallel lines and perpendicular lines all depend on the gradient.

## What the gradient means

The **gradient** of a line tells you how much y changes when x increases by 1. It is the ratio of the vertical change to the horizontal change between any two points on the line.

```
gradient = change in y ÷ change in x = rise ÷ run
```

- The **rise** is the vertical change (up is positive, down is negative).
- The **run** is the horizontal change, measured from left to right (so it is positive).

A line with a large gradient is steep. A line with a small gradient is shallow. The gradient is the same wherever you measure it along a straight line, because a straight line has a constant steepness.

## The sign of the gradient

| Line | Gradient | Description |
|---|---|---|
| goes up from left to right | positive | e.g. 2, 1/2 |
| goes down from left to right | negative | e.g. -3, -1/4 |
| horizontal | 0 | y does not change |
| vertical | undefined | x does not change; cannot divide by zero |

Always read the line from **left to right** when you decide the sign.

## Finding the gradient from a graph

1. Choose two points on the line where the line crosses grid intersections, so the coordinates are easy to read. Pick points far apart for accuracy.
2. Draw a right-angled triangle between them, with a horizontal side and a vertical side.
3. Read the vertical side (rise) and the horizontal side (run).
4. Divide rise by run. If the line goes down, the rise is negative.

**Worked example.** A line passes through (0, 12) and (6, 0). Find its gradient.

```
rise = 0 - 12 = -12   (the line goes down)
run  = 6 - 0 = 6
gradient = -12 ÷ 6 = -2
```

Check the scale on the axes. If the axes use different scales, use the numbers on the axes, not the lengths of the sides of the triangle, to find the rise and the run.

## Finding the gradient from two points

The calculation does not need a graph. For points (x₁, y₁) and (x₂, y₂):

```
gradient = (y₂ - y₁) ÷ (x₂ - x₁)
```

The syllabus does not require this to be memorised in a particular form, but you must be consistent: subtract the coordinates in the **same order** on the top and the bottom.

**Worked example.** Find the gradient of the line through A(1, 2) and B(5, 10).

```
change in y = 10 - 2 = 8
change in x = 5 - 1 = 4
gradient = 8 ÷ 4 = 2
```

**Worked example.** Find the gradient of the line through P(-3, 4) and Q(5, -2).

```
change in y = -2 - 4 = -6
change in x = 5 - (-3) = 8
gradient = -6 ÷ 8 = -3/4
```

If you swap the order on both the top and the bottom, you get the same result: (4 - (-2)) ÷ (-3 - 5) = 6 ÷ (-8) = -3/4. The mistake to avoid is swapping the order on only one of them, which gives +3/4.

**Worked example.** Find the gradient of the line through (-2, -7) and (4, 5).

```
change in y = 5 - (-7) = 12
change in x = 4 - (-2) = 6
gradient = 12 ÷ 6 = 2
```

Always leave a fraction gradient in its simplest form, as in -3/4, or give a decimal if the question asks for one. Do not turn it into an inexact decimal unless told to.

### Horizontal and vertical lines

```
(-4, 3) and (6, 3):  change in y = 0,  gradient = 0 ÷ 10 = 0
(2, 5) and (2, 9):   change in x = 0,  gradient = 4 ÷ 0, which is undefined
```

A horizontal line has gradient 0. A vertical line has no gradient (it is undefined).

## Using the gradient to find a missing coordinate

If the gradient is known, set up an equation.

**Worked example.** The line through (2, k) and (6, 9) has gradient 3/2. Find k.

```
(9 - k) ÷ (6 - 2) = 3/2
(9 - k) ÷ 4 = 3/2
9 - k = 6
k = 3
```

**Worked example.** The line through (3, k) and (7, 1) has gradient -2. Find k.

```
(1 - k) ÷ 4 = -2
1 - k = -8
k = 9
```

Check: the points (3, 9) and (7, 1) give gradient (1 - 9) ÷ (7 - 3) = -8 ÷ 4 = -2. ✓

## Testing for points on a straight line

Three points A, B and C lie on a straight line (they are **collinear**) if the gradient of AB equals the gradient of BC.

**Worked example.** Are A(0, -1), B(2, 3) and C(5, 9) on a straight line?

```
gradient AB = (3 - (-1)) ÷ (2 - 0) = 4 ÷ 2 = 2
gradient BC = (9 - 3) ÷ (5 - 2) = 6 ÷ 3 = 2
```

The gradients are equal, and B is common to both, so the three points lie on one straight line.

## Comparing steepness

To compare the steepness of two lines, compare the size of their gradients (ignoring the sign). A bigger size means steeper.

**Worked example.** Line A passes through (0, 0) and (4, 10). Line B passes through (0, 0) and (5, 11). Which is steeper?

```
gradient A = 10 ÷ 4 = 2.5
gradient B = 11 ÷ 5 = 2.2
```

Line A is steeper.

## Parallel lines

Parallel lines have equal gradients. This is used to find a missing coordinate.

**Worked example.** A line passes through (0, 1) and (3, k). It is parallel to the line through (1, 2) and (4, 8). Find k.

```
gradient of the second line = (8 - 2) ÷ (4 - 1) = 2
(k - 1) ÷ 3 = 2
k - 1 = 6
k = 7
```

The next subtopics return to parallel and perpendicular lines in more depth.

## Gradient as a rate

In real-life graphs the gradient has units. On a distance-time graph, the gradient is distance ÷ time, which is speed.

**Worked example.** A distance-time graph is a straight line from (0, 0) to (2.5, 40), where time is in hours and distance in km. Find the speed.

```
gradient = 40 ÷ 2.5 = 16
the speed is 16 km/h
```

A road gradient can be given as a fraction or a percentage. If a road rises 120 m over a horizontal distance of 2400 m:

```
gradient = 120 ÷ 2400 = 1/20 = 0.05 = 5%
```

## Exam technique

- Show the change in y and the change in x as separate lines before dividing.
- Keep the order of the subtraction the same on the top and bottom.
- State the sign. Check that your answer matches the picture: a line going down has a negative gradient.
- Simplify fractions. For a graph, pick points where the line passes through grid corners.
- For missing coordinates, form an equation and solve it. Check your answer by substituting back.

## Common mistakes

- Using x-change on the top and y-change on the bottom.
- Subtracting in opposite orders (y₂ - y₁ over x₁ - x₂), so the sign is wrong.
- Reading the sign wrongly: a line that goes down from left to right has a negative gradient.
- Making errors with negative coordinates, such as 5 - (-3) = 2.
- Using the lengths of the triangle sides when the axes have different scales.
- Calling the gradient of a vertical line 0.

## Where this leads

Gradient is the key to the equation y = mx + c in subtopic 3.5, parallel lines (3.6) and perpendicular lines (3.7). It also appears in velocity-time and distance-time graphs and in graphs of functions.
