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
description: "Quick-recall notes on coordinates, gradient, y = mx + c, length, midpoint and parallel and perpendicular lines for Cambridge IGCSE Mathematics 0580 Topic 3."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-04
updatedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. Pair these notes with the
[Coordinate Geometry practice questions](/resources/igcse-mathematics-coordinate-geometry-practice/)
for worked exam-style application.

> **Tier note:** items marked *(Extended)* are Extended only in the 0580 syllabus: calculating a gradient
> from the coordinates of two points (E3.3; Core finds a gradient from a grid only), length and midpoint
> (E3.4), lines written in other forms such as ax + by = c (E3.2, E3.5) and perpendicular lines (E3.7).
> Everything else is Core.

## Coordinates and linear graphs

A coordinate (x, y) gives a point's horizontal and vertical position. A line through points that all share the same x-coordinate is **vertical**; a line through points that all share the same y-coordinate is **horizontal**. To draw a linear graph from an equation, build a table of values by substituting at least three x-values, plot the resulting points, and join them with a single straight line.

```
y = 2x - 1
x = -2:  y = 2(-2) - 1 = -5
x =  0:  y = 2(0) - 1  = -1
x =  2:  y = 2(2) - 1  =  3

points to plot: (-2, -5), (0, -1), (2, 3)
```

Checking two points against the same table pattern also answers "is this line horizontal, vertical, or neither?" questions directly: if every y-value is identical the line is horizontal, if every x-value is identical it is vertical, and otherwise it slopes. Core finds its gradient from a grid; *(Extended)* calculating it from the coordinates of any two points is E3.3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--04-y-mx-c.webp" width="900" height="990" alt="The line y = 2x - 1 crosses the y-axis at (0, -1) so c = -1. Between (1, 1) and (3, 5) it goes 2 across and 4 up, so m = 2." loading="lazy">
  <figcaption>m is the gradient and c is where the line crosses the y-axis.</figcaption>
</figure>


## Gradient

Gradient = vertical change ÷ horizontal change. On a grid, count the squares up (or down) and across between two points on the line.

*(Extended)* From the coordinates of two points, without a grid:

```
gradient m = (y2 - y1) / (x2 - x1)
```

A positive gradient slopes upward left to right; a negative gradient slopes downward. A horizontal line has gradient **0**; a vertical line has an **undefined** gradient (division by zero). Always subtract the coordinates in the **same order** in both the numerator and denominator -- picking (x1, y1) and (x2, y2) consistently, and not swapping which point is which partway through the calculation, avoids the sign errors that are the most common mistake in this whole topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--01-gradient-rise-run.webp" width="900" height="910" alt="A line passes through A (1, 1) and B (5, 4). Going 4 along and 3 up gives rise 3 and run 4, so the gradient is 3 divided by 4 = 0.75." loading="lazy">
  <figcaption>Gradient is the change up divided by the change along.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--02-gradient-signs.webp" width="900" height="880" alt="Four small graphs: a rising line has positive gradient, a falling line negative, a horizontal line zero, and a vertical line has no gradient because the run is zero." loading="lazy">
  <figcaption>Uphill is positive, downhill is negative, flat is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--07-perpendicular-bisector.webp" width="900" height="1050" alt="AB joins (-3, 8) and (9, -2) with gradient -5/6. The bisector has gradient 6/5 and passes through M (3, 3), giving y = 6/5 x - 3/5." loading="lazy">
  <figcaption>Combine gradient, perpendicular rule, midpoint and y = mx + c.</figcaption>
</figure>


## Length and midpoint *(Extended)*

```
length AB   = sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
midpoint AB = ( (x1 + x2)/2 , (y1 + y2)/2 )
```

The length formula is Pythagoras' theorem applied to the horizontal and vertical distances between the two points -- the answer must be square-rooted at the end, not left as the sum of the two squares. The midpoint is simply the average of the two x-coordinates and the average of the two y-coordinates.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--03-length-midpoint.webp" width="900" height="960" alt="A line from A (-2, 1) to B (6, 7) forms a right triangle 8 across and 6 up, so its length is 10. The midpoint is the average of the coordinates, (2, 4)." loading="lazy">
  <figcaption>Length uses Pythagoras; the midpoint averages the coordinates.</figcaption>
</figure>


## Equations of straight lines

Every straight line (that is not vertical) can be written as **y = mx + c**, where m is the gradient and c is the y-intercept. When the graph is given, read m from the grid and c from where the line crosses the y-axis. *(Extended)* Given only two points, find m first using the gradient formula, then substitute **either** point's coordinates into y = mx + c to solve for c -- both points must lie on the same line, so either one gives the same, correct value of c.

```
Line through (2, 3) and (4, 9):
  m = (9 - 3) / (4 - 2) = 3
  3 = 3(2) + c  ->  c = -3
  y = 3x - 3
```

*(Extended)* A line may also be given in another form, such as ax + by = c. Rearrange it into y = mx + c to read off the gradient and y-intercept: 2x + 3y = 12 gives 3y = 12 - 2x, so y = -(2/3)x + 4, with gradient -2/3 and y-intercept 4.

## Parallel and perpendicular lines

**Parallel** lines have the **same gradient**. To find the equation of a line parallel to a given line through a new point, keep m unchanged and solve for a new c using the new point.

```
Line parallel to y = 3x - 7, passing through (1, 4):
gradient stays 3 (parallel lines have equal gradient)
4 = 3(1) + c  ->  c = 1
y = 3x + 1
```

*(Extended)* **Perpendicular** lines have gradients that are **negative reciprocals** of each other: if one line has gradient m, a line perpendicular to it has gradient **-1/m**, so that m x (-1/m) = -1.

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
- *(Extended)* Leaving a length answer as the sum of two squares, having forgotten the final square root.
- *(Extended)* Adding the coordinates for a midpoint but forgetting to divide by 2.
- *(Extended)* Applying the negative-reciprocal rule to a question that only asks for the equation of the given line itself, not a perpendicular one.
- Substituting a point into y = mx + c to solve for c, then writing the point's coordinates back into the final answer instead of the values of m and c.

## Self-test

1. State the gradient of a horizontal line and of a vertical line.
2. *(Extended)* Write down the formula for the length of the line joining two points.
3. *(Extended)* Two lines are perpendicular. If one has gradient 2, what is the gradient of the other?
4. What must be true of two lines for them to be parallel?
5. Given the equation of a line and one point on a new, parallel line, describe the two steps needed to find the new line's equation.
6. State the equation of a line with gradient -2 that passes through the origin.

**Answers:** 1. Horizontal line: gradient 0. Vertical line: gradient undefined. 2. Length = sqrt((x2 - x1)^2 + (y2 - y1)^2). 3. -1/2, since 2 x (-1/2) = -1. 4. They must have the same gradient. 5. Keep the gradient the same as the given line, then substitute the new point's coordinates into y = mx + c and solve for the new value of c. 6. y = -2x, since a line through the origin has c = 0.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--05-parallel-lines.webp" width="900" height="1000" alt="Lines y = 2x - 1 and y = 2x + 3 each go 1 across and 2 up, so they are parallel. The parallel line through P (1, 5) has c = 3." loading="lazy">
  <figcaption>Parallel lines share a gradient; use a point to find c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--06-perpendicular-lines.webp" width="900" height="960" alt="Two lines meet at right angles at (0, 1). One has gradient 2/3 and the other -3/2; their product is -1." loading="lazy">
  <figcaption>Perpendicular gradients multiply to -1.</figcaption>
</figure>

## Frequently asked questions

**How do you find the length of a line between two points?**
Use Pythagoras' theorem on the horizontal and vertical distances: length = √((x₂ − x₁)² + (y₂ − y₁)²). Leaving the answer without the final square root is incomplete.

**How do you find the midpoint of a line segment?**
Add the two x-coordinates and divide by 2, then add the two y-coordinates and divide by 2.

**What are the gradients of perpendicular lines?**
Perpendicular lines have gradients that are negative reciprocals of each other, so a line with gradient 2 is perpendicular to a line with gradient −1/2.

**What do m and c represent in y = mx + c?**
m is the gradient of the line and c is the y-intercept, where the line crosses the y-axis.
