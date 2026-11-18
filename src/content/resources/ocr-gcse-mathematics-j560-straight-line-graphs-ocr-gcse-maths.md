---
title: "OCR GCSE Mathematics (J560): Straight line graphs"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 7 – Graphs of equations and functions"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 7.2
syllabusTopics:
  - qualification: "gcse"
    topic: "graphs-of-equations-and-functions-ocr-gcse-maths"
    subtopic: "straight-line-graphs-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 7.02 in depth: gradient and intercept in context, equations of lines, parallel and perpendicular lines, and tangents."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7.02, Straight line graphs, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Gradient, intercept, y = mx + c, the equation through two points and parallel lines are for **both tiers**. Inequality regions, perpendicular lines and tangents to a circle are **Higher tier only** and are labelled.

The [straight line graphs, parallel and perpendicular lines guide](/resources/ocr-gcse-mathematics-straight-line-graphs-parallel-and-perpendicular-lines/) introduces each skill. This page goes further on 7.02: reading a gradient from a grid, what the gradient and intercept mean in a real context, lines with fractional gradients, testing whether a point lies on a line, perpendicular bisectors and a full tangent question. Condense it with the [7.02 revision notes](/resources/ocr-gcse-mathematics-j560-straight-line-graphs-ocr-gcse-maths-revision-notes/) and test yourself with the [7.02 practice questions](/resources/ocr-gcse-mathematics-j560-straight-line-graphs-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 7.02a | Find and interpret the gradient and intercept of straight lines, graphically and using y = mx + c | Both tiers |
| 7.02a | Use y = mx + c to find and sketch equations of straight lines; find the equation of a line through two given points, or through one point with a given gradient | Both tiers |
| 7.02a | Identify the solution sets of linear inequalities in two variables, using the convention of dashed and solid lines | Higher tier only |
| 7.02b | Identify and find equations of parallel lines | Both tiers |
| 7.02b | Identify and find equations of perpendicular lines; calculate the equation of a tangent to a circle at a given point | Higher tier only |

Note the word **interpret**. You must be able to say what a gradient or intercept means, not only calculate it.

## Gradient from a graph

The gradient m measures steepness: the change in y for each increase of 1 in x.

```
m = change in y ÷ change in x = (y₂ − y₁)/(x₂ − x₁)
```

From a drawn line, pick two points where the line crosses grid corners exactly, as far apart as possible. Draw a right-angled triangle under the line and read the vertical and horizontal sides from the axis scales, not by counting squares. If the line goes down from left to right, the gradient is negative.

Common scale trap: if the x-axis goes up in 2s and the y-axis in 5s, a triangle 3 squares across and 2 squares up has run 6 and rise 10, so m = 10/6 = 5/3, not 2/3.

## Gradient and intercept in context

In a real-world graph, the gradient is a **rate** (units of y per unit of x) and the y-intercept is the **starting value** when x = 0.

**Worked example 1.** A plumber charges £85 for a 2-hour job and £145 for a 4-hour job. The cost C (£) is a straight-line function of the time t (hours). Find the equation and interpret both numbers. (Prices invented for practice.)

```
gradient m = (145 − 85)/(4 − 2) = 60/2 = 30
C = 30t + c;  use (2, 85):  85 = 60 + c, so c = 25
C = 30t + 25
```

The gradient 30 means the plumber charges £30 per hour. The intercept 25 is a fixed £25 call-out charge, paid even for zero hours. In context, write the units: "£30 per hour", not just "30".

## Equations of lines

### Rearranging into y = mx + c

**Worked example 2.** Find the gradient and y-intercept of 2y − 5x = 8.

```
2y = 5x + 8
y = 2.5x + 4
```

The gradient is 2.5 and the line crosses the y-axis at (0, 4). Divide every term by 2, including the 8.

### Does a point lie on the line?

Substitute the x-coordinate and see whether you get the y-coordinate. For y = 2.5x + 4 and the point (6, 19): 2.5 × 6 + 4 = 19, so yes. For (−2, 0): 2.5 × (−2) + 4 = −1, not 0, so no.

### Through two points with a fractional gradient

**Worked example 3.** Find the equation of the line through (−2, 7) and (4, 3). Give it in the form ax + by = c with integer coefficients.

```
m = (3 − 7)/(4 − (−2)) = −4/6 = −2/3
y = −(2/3)x + c;  use (4, 3):  3 = −8/3 + c,  c = 17/3
y = −(2/3)x + 17/3
multiply by 3:  3y = −2x + 17,  so  2x + 3y = 17
```

Check with the other point: 2(−2) + 3(7) = −4 + 21 = 17.

### Sketching

A sketch needs the correct slope direction and labelled intercepts with both axes, not plotted points. For 2x + 3y = 17: at x = 0, y = 17/3; at y = 0, x = 8.5. Draw a line falling from (0, 17/3) to (8.5, 0).

## Parallel lines

Parallel lines have the **same gradient** and different intercepts. Put each equation into y = mx + c before comparing.

**Worked example 4.** Find the equation of the line parallel to 4x + 2y = 7 that passes through (3, −1).

```
2y = −4x + 7,  y = −2x + 3.5,  so m = −2
y = −2x + c;  use (3, −1):  −1 = −6 + c,  c = 5
y = −2x + 5
```

## Inequality regions (Higher tier only)

7.02a also asks you to identify solution sets of inequalities in two variables. Draw each boundary from its y = mx + c form: a **solid** line for ≤ or ≥ and a **dashed** line for < or >. For y > mx + c the region is above the line; for y < mx + c it is below. If the inequality is not in that form, test a point such as (0, 0). Full worked examples are in the [algebraic inequalities guide](/resources/ocr-gcse-mathematics-j560-algebraic-inequalities-ocr-gcse-maths/).

## Perpendicular lines (Higher tier only)

Perpendicular lines meet at right angles. If one has gradient m, the other has gradient −1/m: the negative reciprocal. Equivalently, the two gradients multiply to give −1.

| Gradient | Perpendicular gradient |
|---|---|
| 3 | −1/3 |
| −1/4 | 4 |
| 2/5 | −5/2 |
| −1.5 | 2/3 |

**Worked example 5 (Higher tier only).** Show that 3x − 2y = 4 and 2x + 3y = 9 are perpendicular.

```
3x − 2y = 4  →  y = 1.5x − 2,       m₁ = 3/2
2x + 3y = 9  →  y = −(2/3)x + 3,    m₂ = −2/3
m₁ × m₂ = (3/2) × (−2/3) = −1
```

The product is −1, so the lines are perpendicular. A "show that" answer needs the conclusion in words.

**Worked example 6 (Higher tier only).** A is (1, 2) and B is (7, 6). Find the equation of the line that is perpendicular to AB and passes through the midpoint of AB.

```
midpoint = ((1 + 7)/2, (2 + 6)/2) = (4, 4)
gradient AB = (6 − 2)/(7 − 1) = 4/6 = 2/3
perpendicular gradient = −3/2
y = −(3/2)x + c;  use (4, 4):  4 = −6 + c,  c = 10
y = −(3/2)x + 10
```

This line is the perpendicular bisector of AB: every point on it is the same distance from A and B.

## Tangent to a circle (Higher tier only)

A tangent to a circle is perpendicular to the radius at the point of contact. For a circle centred on the origin, find the gradient of the radius from (0, 0) to the point, then use the negative reciprocal.

**Worked example 7 (Higher tier only).** Find the equation of the tangent to x² + y² = 20 at the point (−2, 4), and where it crosses the x-axis.

```
check point: (−2)² + 4² = 4 + 16 = 20, so it is on the circle
gradient of radius = (4 − 0)/(−2 − 0) = −2
gradient of tangent = 1/2
y = (1/2)x + c;  use (−2, 4):  4 = −1 + c,  c = 5
tangent: y = (1/2)x + 5
x-axis (y = 0):  0 = (1/2)x + 5,  x = −10
```

The tangent crosses the x-axis at (−10, 0).

## Common mistakes

- Reading a gradient by counting squares when the axes have different scales.
- Writing the gradient as change in x over change in y.
- Losing a negative sign when subtracting coordinates, such as 4 − (−2).
- Dividing only some terms when rearranging into y = mx + c.
- Comparing gradients for parallel lines before writing both equations as y = mx + c.
- Using the reciprocal without changing the sign (or the sign without the reciprocal) for a perpendicular gradient.
- Using the gradient of the radius as the gradient of the tangent.
- Interpreting a gradient without units or context.

## Exam technique for OCR command words

- **Find the equation**: give a complete equation, y = ... or in the form the question asks for, not just m and c.
- **Interpret** or **What does the gradient represent**: name the rate with units, linked to the context.
- **Sketch**: correct direction of slope, intercepts labelled; no need for a table of values.
- **Show that** lines are parallel or perpendicular: show both gradients and state the conclusion.
- **Show that** a point lies on a line: substitute and state that the two sides agree.

## Next steps

- Condense the methods with the [straight line graphs revision notes](/resources/ocr-gcse-mathematics-j560-straight-line-graphs-ocr-gcse-maths-revision-notes/).
- Test yourself with the [straight line graphs practice questions](/resources/ocr-gcse-mathematics-j560-straight-line-graphs-ocr-gcse-maths-practice/).
- See gradients as rates of change in the [interpreting graphs guide](/resources/ocr-gcse-mathematics-interpreting-graphs-real-world-graphs-gradients-and/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 7.02, Straight line graphs.
