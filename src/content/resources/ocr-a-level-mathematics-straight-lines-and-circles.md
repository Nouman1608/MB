---
title: "OCR A Level Mathematics A: Straight lines and circles (H240)"
seoTitle: "OCR A Level Maths Straight Lines and Circles Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Straight lines and circles"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 108
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "coordinate-geometry-in-the-xy-plane-ocr-alevel-maths"
description: "Study guide to straight lines, parallel and perpendicular gradients, line models, circle equations and tangents for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers straight lines and circles in OCR A Level Mathematics A (H240), as set out in the OCR specification (Version 3.1, August 2026): content references 1.03a to 1.03f, within 1.03 Coordinate Geometry in the x-y plane. The specification lists all of this as Stage 1 content, the stage common to AS Level (H230) and A Level, so none of it is A Level only. Parametric equations (1.03g and 1.03h) are not covered here.

Use it with the [revision notes](/resources/ocr-a-level-mathematics-straight-lines-and-circles-revision-notes/) and the [practice set](/resources/ocr-a-level-mathematics-straight-lines-and-circles-practice/). For the wider course see the [Pure Mathematics guide](/resources/ocr-a-level-mathematics-pure-mathematics/), the [course hub](/boards/ocr/a-level/mathematics/) and the [checklist](/checklists/ocr/a-level/mathematics/). The [free diagnostics](/diagnostics/) show where to start.

## Scope at a glance

| Ref | Skills | Stage |
|---|---|---|
| 1.03a | Use y = mx + c, y - y1 = m(x - x1) and ax + by + c = 0; draw a line and form its equation from a graph, a gradient and a point, or two points; find a midpoint, a distance and an intersection | 1 |
| 1.03b | Use the gradient conditions for parallel and perpendicular lines | 1 |
| 1.03c | Use straight line models in context, including average rates of change | 1 |
| 1.03d | Use the equation (x - a)² + (y - b)² = r²; draw a circle from its equation or form it from centre and radius | 1 |
| 1.03e | Complete the square to find a circle's centre and radius | 1 |
| 1.03f | Use three circle properties in coordinate problems; decide whether a line and a circle, or two circles, intersect | 1 |

## 1.03a Equations of straight lines

Three forms are named in the specification.

| Form | Use it when |
|---|---|
| y = mx + c | you know the gradient m and the y-intercept c |
| y - y1 = m(x - x1) | you know the gradient and one point (x1, y1) |
| ax + by + c = 0 | an answer is wanted with integer coefficients |

The gradient between (x1, y1) and (x2, y2) is m = (y2 - y1)/(x2 - x1). Two further results come up constantly:

- Midpoint: ((x1 + x2)/2, (y1 + y2)/2)
- Distance: √[(x2 - x1)² + (y2 - y1)²]

To draw a line, find two points, usually the intercepts: put x = 0, then y = 0. To form an equation from a graph, read off two clear points (or the gradient and one point) and continue as for two points.

**Worked example 1.** Find the equation of the line through A(-2, 7) and B(4, -5), the midpoint of AB and the length AB.

```
m = (-5 - 7)/(4 - (-2)) = -12/6 = -2
y - 7 = -2(x + 2)  →  y = -2x + 3  →  2x + y - 3 = 0
midpoint = ((-2 + 4)/2, (7 - 5)/2) = (1, 1)
AB = √(6² + 12²) = √180 = 6√5
```

Check: the midpoint (1, 1) gives 2 + 1 - 3 = 0, so it lies on the line.

**Worked example 2.** A line has gradient 3/5 and passes through (10, -1). Write it as ax + by + c = 0 with integer coefficients, then find where it meets x + 2y + 3 = 0.

```
y + 1 = (3/5)(x - 10)
5y + 5 = 3x - 30
3x - 5y - 35 = 0
```

Intersection: from the second line x = -3 - 2y. Substitute:

```
3(-3 - 2y) - 5y = 35
-9 - 11y = 35  →  y = -4,  x = -3 + 8 = 5
```

The lines meet at (5, -4). Always check by substituting into both equations.

## 1.03b Parallel and perpendicular lines

- Parallel lines: m1 = m2
- Perpendicular lines: m1 × m2 = -1

So a line with gradient 3/5 has perpendicular gradient -5/3: flip the fraction and change the sign. To read a gradient from ax + by + c = 0, rearrange to y = mx + c first. It is -a/b.

**Worked example 3.** Find the perpendicular bisector of P(-6, 1) and Q(4, 7).

```
gradient PQ = (7 - 1)/(4 + 6) = 6/10 = 3/5
midpoint = (-1, 4)
perpendicular gradient = -5/3
y - 4 = -(5/3)(x + 1)
3y - 12 = -5x - 5
5x + 3y - 7 = 0
```

Perpendicular gradients also prove right angles. If the gradients of two sides of a triangle multiply to -1, the angle between them is 90°.

## 1.03c Straight line models

A linear model assumes a constant rate of change. The gradient is that rate, with units "units of y per unit of x". The intercept is the starting value. The specification says these problems may be set in realistic contexts, including average rates of change.

**Worked example 4.** A tank drains steadily. After 4 minutes it holds 310 litres, and after 10 minutes it holds 238 litres. Model the volume V litres after t minutes.

```
gradient = (238 - 310)/(10 - 4) = -12
V - 310 = -12(t - 4)  →  V = 358 - 12t
```

- The gradient -12 means the tank loses 12 litres each minute.
- The intercept 358 is the volume at t = 0.
- The tank is empty when 358 - 12t = 0, so t = 179/6 ≈ 29.8 minutes.

A limitation to state: the model is only valid while V ≥ 0, and it assumes the flow never changes. Real drains often slow as the level falls.

## 1.03d The equation of a circle

A circle with centre (a, b) and radius r has equation

(x - a)² + (y - b)² = r²

Note the signs: (x + 3)² means a = -3. A point is inside the circle if (x - a)² + (y - b)² < r², on it if equal, and outside if greater.

**Worked example 5.** A circle has centre (3, -2) and passes through (5, 3). Find its equation and where it crosses the axes.

```
r² = (5 - 3)² + (3 + 2)² = 4 + 25 = 29
(x - 3)² + (y + 2)² = 29
```

Where x = 0: 9 + (y + 2)² = 29, so (y + 2)² = 20 and y = -2 ± 2√5.
Where y = 0: (x - 3)² + 4 = 29, so x - 3 = ±5 and x = -2 or x = 8.

To draw it, plot the centre, then mark points a distance r above, below, left and right of it, and join them in a smooth curve. Here r = √29 ≈ 5.4.

## 1.03e Completing the square for circles

When the equation is expanded, group x terms and y terms and complete the square on each.

**Worked example 6.** Find the centre and radius of x² + y² - 8x + 10y + 5 = 0.

```
(x² - 8x) + (y² + 10y) = -5
(x - 4)² - 16 + (y + 5)² - 25 = -5
(x - 4)² + (y + 5)² = 36
```

Centre (4, -5), radius 6.

**Worked example 7.** Find the centre and radius of 2x² + 2y² - 12x + 4y - 9 = 0.

Divide by 2 first so the coefficients of x² and y² are 1:

```
x² + y² - 6x + 2y - 9/2 = 0
(x - 3)² - 9 + (y + 1)² - 1 = 9/2
(x - 3)² + (y + 1)² = 29/2
```

Centre (3, -1), radius √(29/2).

**When is it a circle?** In x² + y² - 4x + 6y + k = 0 the completed form is (x - 2)² + (y + 3)² = 13 - k. The right-hand side is r², so it must be positive: k < 13. If it equals 0 the "circle" is a single point; if negative, nothing is plotted.

## 1.03f Circle properties and intersections

The specification names three properties for use in coordinate geometry problems:

1. Any angle drawn in a semicircle is a right angle.
2. A line from the centre at right angles to a chord cuts that chord in half.
3. The radius at a point on the circumference is perpendicular to the tangent at that point.

The normal to a circle at a point is the line through that point and the centre.

**Worked example 8 (semicircle).** A(0, 1) and B(6, 5) are ends of a diameter. Show that P(5, 0) is on the circle.

```
gradient PA = (0 - 1)/(5 - 0) = -1/5
gradient PB = (0 - 5)/(5 - 6) = 5
product = -1
```

So angle APB is 90°, and P lies on the circle with diameter AB. As a check, the centre is (3, 3) and r² = 13, and (5 - 3)² + (0 - 3)² = 13.

**Worked example 9 (chord).** The line y = x + 1 meets (x - 1)² + (y + 2)² = 40 at two points. Find the midpoint and length of the chord.

The centre is (1, -2). The perpendicular from the centre has gradient -1: y + 2 = -(x - 1), so y = -x - 1. It meets the chord where x + 1 = -x - 1, giving the midpoint M(-1, 0).

```
CM² = (1 + 1)² + (-2 - 0)² = 8
half chord = √(40 - 8) = √32
chord = 2√32 = 8√2
```

Substitution confirms it: x² + 2x - 15 = 0 gives x = 3 or -5, so the ends are (3, 4) and (-5, -4), with midpoint (-1, 0).

**Worked example 10 (tangent and normal).** Find the tangent and normal to (x + 2)² + (y - 1)² = 50 at (5, 2).

First check the point: 49 + 1 = 50.

```
radius gradient = (2 - 1)/(5 + 2) = 1/7
tangent gradient = -7
tangent: y - 2 = -7(x - 5)  →  7x + y - 37 = 0
normal:  y - 2 = (1/7)(x - 5)  →  x - 7y + 9 = 0
```

**Does a line meet a circle?** Substitute the line into the circle to get a quadratic in one variable, then look at the discriminant b² - 4ac: positive means two points, zero means tangent, negative means no intersection.

**Worked example 11.** For which values of k does y = x + k meet x² + y² = 18?

```
x² + (x + k)² = 18
2x² + 2kx + k² - 18 = 0
discriminant = 4k² - 8(k² - 18) = 144 - 4k²
```

Two points when 144 - 4k² > 0, so -6 < k < 6. Tangent when k = ±6. No intersection when |k| > 6.

**Two circles.** Compare the distance d between centres with the radii r1 and r2. They meet at two points if |r1 - r2| < d < r1 + r2. They touch externally if d = r1 + r2, touch internally if d = |r1 - r2|, and do not meet if d is larger than r1 + r2 or smaller than |r1 - r2|.

Example: x² + y² = 16 and (x - 6)² + (y - 2)² = 9 have d = √40 ≈ 6.32, r1 + r2 = 7 and |r1 - r2| = 1. Since 1 < 6.32 < 7, they meet at two points.

## Common errors

- Writing the perpendicular gradient as the negative only, or the reciprocal only. You need both changes.
- Reading the centre of (x + 3)² + (y - 4)² = 25 as (3, -4). It is (-3, 4).
- Giving the radius as r² or forgetting the square root: (x - 1)² + (y - 2)² = 36 has radius 6, not 36.
- Not dividing by the coefficient of x² and y² before completing the square.
- Finding the tangent gradient from the radius but using the centre as the point, rather than the point of contact.
- Leaving a gradient model without units, or applying it far outside the data.

## Where next

Try the [practice questions](/resources/ocr-a-level-mathematics-straight-lines-and-circles-practice/) and keep the [revision notes](/resources/ocr-a-level-mathematics-straight-lines-and-circles-revision-notes/) for the final weeks.

## Official syllabus

*Cambridge OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by Cambridge OCR: section 1.03, Coordinate Geometry in the x-y plane, references 1.03a to 1.03f.
