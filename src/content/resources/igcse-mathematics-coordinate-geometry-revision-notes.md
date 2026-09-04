---
title: "IGCSE Mathematics: Coordinate Geometry — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "coordinates-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "drawing-linear-graphs-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "gradient-of-linear-graphs-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "length-and-midpoint-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "equations-of-linear-graphs-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "parallel-lines-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "perpendicular-lines-cambridge-igcse-maths"
description: "Condensed recall notes on coordinates, gradient, straight-line equations, length, midpoint, and parallel and perpendicular lines for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
featured: false
---

Condensed for the final weeks. Pair these notes with the
[Coordinate Geometry practice questions](/resources/igcse-mathematics-coordinate-geometry-practice/)
for worked exam-style application.

## Coordinates and linear graphs

A coordinate (x, y) gives a point's horizontal and vertical position. A line through points that all share the same x-coordinate is **vertical**; a line through points that all share the same y-coordinate is **horizontal**. To draw a linear graph from an equation, build a table of values by substituting at least three x-values, plot the resulting points, and join them with a single straight line.

```
y = 2x - 1
x = -2:  y = 2(-2) - 1 = -5
x =  0:  y = 2(0) - 1  = -1
x =  2:  y = 2(2) - 1  =  3

points to plot: (-2, -5), (0, -1), (2, 3)
```

Checking two points against the same table pattern also answers "is this line horizontal, vertical, or neither?" questions directly: if every y-value is identical the line is horizontal, if every x-value is identical it is vertical, and otherwise it slopes, so its gradient can be calculated in the normal way from any two of the points on it.

## Gradient

```
gradient m = (y2 - y1) / (x2 - x1)
```

A positive gradient slopes upward left to right; a negative gradient slopes downward. A horizontal line has gradient **0**; a vertical line has an **undefined** gradient (division by zero). Always subtract the coordinates in the **same order** in both the numerator and denominator -- picking (x1, y1) and (x2, y2) consistently, and not swapping which point is which partway through the calculation, avoids the sign errors that are the most common mistake in this whole topic.

## Length and midpoint

```
length AB   = sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
midpoint AB = ( (x1 + x2)/2 , (y1 + y2)/2 )
```

The length formula is Pythagoras' theorem applied to the horizontal and vertical distances between the two points -- the answer must be square-rooted at the end, not left as the sum of the two squares. The midpoint is simply the average of the two x-coordinates and the average of the two y-coordinates.

## Equations of straight lines

Every straight line (that is not vertical) can be written as **y = mx + c**, where m is the gradient and c is the y-intercept. Given two points, find m first using the gradient formula, then substitute **either** point's coordinates into y = mx + c to solve for c -- both points must lie on the same line, so either one gives the same, correct value of c.

```
Line through (2, 3) and (4, 9):
  m = (9 - 3) / (4 - 2) = 3
  3 = 3(2) + c  ->  c = -3
  y = 3x - 3
```

## Parallel and perpendicular lines

**Parallel** lines have the **same gradient**. To find the equation of a line parallel to a given line through a new point, keep m unchanged and solve for a new c using the new point.

```
Line parallel to y = 3x - 7, passing through (1, 4):
gradient stays 3 (parallel lines have equal gradient)
4 = 3(1) + c  ->  c = 1
y = 3x + 1
```

**Perpendicular** lines have gradients that are **negative reciprocals** of each other: if one line has gradient m, a line perpendicular to it has gradient **-1/m**, so that m x (-1/m) = -1.

```
Line L: y = 4x - 1, gradient 4
Perpendicular gradient: 4 x m = -1  ->  m = -1/4

Perpendicular to L, passing through (2, 5):
y = -(1/4)x + c
5 = -(1/4)(2) + c  ->  c = 5.5
y = -(1/4)x + 5.5
```

## Exam traps

- Dividing the change in x by the change in y when finding a gradient, rather than change in y over change in x.
- Leaving a length answer as the sum of two squares, having forgotten the final square root.
- Adding the coordinates for a midpoint but forgetting to divide by 2.
- Applying the negative-reciprocal rule to a question that only asks for the equation of the given line itself, not a perpendicular one.
- Substituting a point into y = mx + c to solve for c, then writing the point's coordinates back into the final answer instead of the values of m and c.

## Self-test

1. State the gradient of a horizontal line and of a vertical line.
2. Write down the formula for the length of the line joining two points.
3. Two lines are perpendicular. If one has gradient 2, what is the gradient of the other?
4. What must be true of two lines for them to be parallel?
5. Given the equation of a line and one point on a new, parallel line, describe the two steps needed to find the new line's equation.
6. State the equation of a line with gradient -2 that passes through the origin.

**Answers:** 1. Horizontal line: gradient 0. Vertical line: gradient undefined. 2. Length = sqrt((x2 - x1)^2 + (y2 - y1)^2). 3. -1/2, since 2 x (-1/2) = -1. 4. They must have the same gradient. 5. Keep the gradient the same as the given line, then substitute the new point's coordinates into y = mx + c and solve for the new value of c. 6. y = -2x, since a line through the origin has c = 0.
