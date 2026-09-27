---
title: "Cambridge International AS & A Level Mathematics 9709: Coordinate Geometry (Pure Mathematics 1) -- Revision Notes"
seoTitle: "A Level Maths 9709 Coordinate Geometry Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 31
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "coordinate-geometry-cambridge-alevel-maths"
description: "Condensed Cambridge 9709 Paper 1 revision notes on coordinate geometry: line forms, perpendicular bisectors, circles, tangents and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

These notes condense section 1.3, Coordinate geometry, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It is part of Pure Mathematics 1 and is examined on **Paper 1** (1 hour 50 minutes, 75 marks), which is compulsory for both AS Level and A Level. A scientific calculator is allowed, but unsupported calculator answers earn no marks, so show the algebra. For full explanations, use the [coordinate geometry study guide](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/).

Other links: [coordinate geometry practice questions](/resources/a-level-maths-9709-pure-mathematics-1-coordinate-geometry-practice/), the [quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) (the discriminant work used below), the [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/), the free [AS Level diagnostic](/practice/9709/diagnostic/as/) and the [9709 self-check question bank](/practice/9709/).

## What 1.3 asks you to do

The syllabus lists five learning outcomes. You should be able to:

1. find the equation of a straight line given sufficient information (two points, or a point and the gradient);
2. interpret and use y = mx + c, y − y₁ = m(x − x₁) and ax + by + c = 0, including distances, gradients, midpoints, points of intersection and the gradients of parallel and perpendicular lines;
3. understand that (x − a)² + (y − b)² = r² is the circle with centre (a, b) and radius r, including the expanded form x² + y² + 2gx + 2fy + c = 0;
4. use algebraic methods for problems on lines and circles, using tangent perpendicular to radius, the angle in a semicircle and symmetry;
5. relate a graph to its equation, and use the link between points of intersection and solutions of equations (for example, the values of k for which y = x + k meets, touches or misses a curve).

Implicit differentiation is **not** included. Find tangents to circles with the radius, not with calculus.

## Formulas

None of these is in the MF19 formulae list, so learn them all.

| Result | Formula |
|---|---|
| Gradient of AB | m = (y₂ − y₁)/(x₂ − x₁) |
| Midpoint of AB | ((x₁ + x₂)/2, (y₁ + y₂)/2) |
| Length of AB | √((x₂ − x₁)² + (y₂ − y₁)²) |
| Line through (x₁, y₁), gradient m | y − y₁ = m(x − x₁) |
| Parallel lines | m₁ = m₂ |
| Perpendicular lines | m₁m₂ = −1, so m₂ = −1/m₁ |
| Circle, centre (a, b), radius r | (x − a)² + (y − b)² = r² |
| Expanded circle | x² + y² + 2gx + 2fy + c = 0 |
| Centre and radius of expanded form | centre (−g, −f), r = √(g² + f² − c) |

## Straight lines

**Reading a line.** Rearrange to y = mx + c to read the gradient and y-intercept. From ax + by + c = 0 the gradient is −a/b.

**Which form to use.**
- You have a point and a gradient: y − y₁ = m(x − x₁). It needs no rearranging first.
- You need the y-intercept: y = mx + c.
- The question says "in the form ax + by + c = 0" or "with integer coefficients": clear fractions and collect everything on one side.

**Method: perpendicular bisector of AB**

```
1. Midpoint M of AB.
2. Gradient of AB, then the perpendicular gradient −1/m.
3. y − y_M = (−1/m)(x − x_M).
```

*Worked reminder.* A(−4, 1), B(2, 5). M = (−1, 3). Gradient AB = 4/6 = 2/3, so the perpendicular gradient is −3/2. y − 3 = −(3/2)(x + 1) gives **3x + 2y − 3 = 0**.

**Intersection of two lines.** Solve the equations simultaneously. Elimination is usually cleaner when both are in ax + by + c = 0 form.

**Foot of the perpendicular from P to a line.** Write the line through P with the perpendicular gradient, then intersect it with the original line. The distance from P to that foot is the shortest distance from P to the line.

**Area of a triangle.** Look for a right angle (gradients multiplying to −1) or an isosceles shape (a vertex on a perpendicular bisector). Then area = ½ × base × perpendicular height, with both lengths from the distance formula.

## Circles

**Centre-radius form.** (x − a)² + (y − b)² = r². Watch the signs: (x + 3)² + (y − 1)² = 49 has centre (−3, 1) and radius 7.

**Method: expanded form to centre and radius**

```
1. Group: (x² + 2gx) + (y² + 2fy) = −c.
2. Complete the square on x and on y separately.
3. Move the constants: (x + g)² + (y + f)² = g² + f² − c.
4. Centre (−g, −f); radius = √(g² + f² − c).
```

*Worked reminder.* x² + y² − 10x + 4y + 13 = 0 gives (x − 5)² − 25 + (y + 2)² − 4 + 13 = 0, so (x − 5)² + (y + 2)² = 16. **Centre (5, −2), radius 4.**

If g² + f² − c ≤ 0, the equation is not a real circle.

**Inside, on or outside?** Substitute the point into (x − a)² + (y − b)² and compare with r²: less means inside, equal means on the circle, greater means outside.

**Finding a circle's equation.** You need the centre and the radius.
- Ends of a diameter given: centre = midpoint, radius = half the diameter.
- Centre given and a point on the circle: r² = (distance from centre to the point)².
- Two points and a line containing the centre: the centre is where the perpendicular bisector of the two points meets that line.
- Three points: the centre is where two perpendicular bisectors meet.

## Geometry of the circle

| Property | How it is used |
|---|---|
| Tangent perpendicular to radius | Tangent gradient = −1/(gradient of radius to the point of contact) |
| Angle in a semicircle is 90° | If AB is a diameter and C is on the circle, AC ⊥ BC (gradients multiply to −1) |
| Symmetry | The perpendicular bisector of any chord passes through the centre; the line from the centre to a chord's midpoint is perpendicular to the chord |

**Method: tangent at a point P on the circle**

```
1. Find the centre C.
2. Gradient of CP.
3. Tangent gradient = −1/(gradient of CP).
4. y − y_P = m(x − x_P).
```

If the question says "show that P lies on the circle", substitute P and show the equation is satisfied before you use it.

## Intersections, graphs and the discriminant

The points where two graphs meet are the solutions of their equations solved together.

**Method: line and curve (or line and circle)**

```
1. Make y (or x) the subject of the linear equation.
2. Substitute into the curve or circle to get one quadratic.
3. Solve; then find the other coordinate from the LINE.
```

*Worked reminder.* y = x − 3 with x² + y² − 10x + 4y + 13 = 0 gives 2x² − 12x + 10 = 0, so x² − 6x + 5 = 0, x = 1 or 5. **Points (1, −2) and (5, 2).**

**The discriminant of that quadratic tells you how many times they meet:**

| b² − 4ac | Line and curve |
|---|---|
| > 0 | meet at two distinct points |
| = 0 | line is a tangent (touches once) |
| < 0 | do not meet |

For "the line meets the curve" (at least once) use b² − 4ac ≥ 0. When the line contains an unknown such as k or m, the discriminant becomes an inequality in that unknown. Solve it as a quadratic inequality if it contains k².

## Must-know distinctions

- **Parallel vs perpendicular.** Parallel: same gradient. Perpendicular: product −1. A gradient of 2 is perpendicular to −1/2, not to −2 or 1/2.
- **Midpoint vs perpendicular bisector.** The midpoint is a point; the perpendicular bisector is a line through it.
- **r vs r².** In (x − a)² + (y − b)² = 20 the radius is √20 = 2√5, not 20.
- **Centre signs.** (x − a)² gives +a; x² + 2gx gives −g.
- **Tangent vs radius.** The tangent at P is perpendicular to CP; it does not pass through the centre.
- **Two points vs at least one.** "Two distinct points" is b² − 4ac > 0; "meets" is ≥ 0; "touches" is = 0.
- **Distance vs distance squared.** Compare squared distances with r² when testing a point; take the square root only for a final length.

## Quick self-test

1. Find the gradient and the midpoint of the line joining (−2, 5) and (4, −7).
2. Find the distance between (−1, 3) and (4, −9).
3. State the gradient and y-intercept of 4x − 5y + 10 = 0.
4. Find the line through (2, −3) perpendicular to y = 4x − 1, in the form ax + by + c = 0.
5. Are 6x + 4y = 9 and y = −1.5x + 2 parallel, perpendicular or neither?
6. Find the centre and radius of x² + y² + 6x − 8y − 11 = 0.
7. Explain why x² + y² − 4x + 2y + 10 = 0 is not a circle.
8. Find the equation of the circle with centre (2, −5) passing through (−1, −1).
9. Is (7, 1) inside, on or outside the circle (x − 3)² + (y + 2)² = 30?
10. For y = x + k and y = x² − x + 3, find the value of k for which the line is a tangent, and the set of values for which they meet at two distinct points.
11. Find the tangent to x² + y² = 25 at (3, −4).
12. A diameter of a circle has ends (−3, 2) and (5, 8). Find the equation of the circle.

### Answers

1. Gradient = −12/6 = **−2**; midpoint **(1, −1)**.
2. √(5² + 12²) = **13**.
3. y = (4/5)x + 2: gradient **4/5**, y-intercept **2**.
4. Gradient −1/4: y + 3 = −(1/4)(x − 2), so **x + 4y + 10 = 0**.
5. 6x + 4y = 9 gives y = −1.5x + 9/4. Same gradient, different intercept: **parallel**.
6. (x + 3)² + (y − 4)² = 9 + 16 + 11 = 36: **centre (−3, 4), radius 6**.
7. g² + f² − c = 4 + 1 − 10 = **−5 < 0**, so no real radius.
8. r² = 3² + 4² = 25: **(x − 2)² + (y + 5)² = 25**.
9. 4² + 3² = 25 < 30: **inside**.
10. x² − 2x + 3 − k = 0; discriminant 4k − 8. Tangent: **k = 2**. Two points: **k > 2**.
11. Radius gradient −4/3, so tangent gradient 3/4: y + 4 = (3/4)(x − 3), **3x − 4y − 25 = 0**.
12. Centre (1, 5), r² = 4² + 3² = 25: **(x − 1)² + (y − 5)² = 25**.

## Where marks are usually lost

- Using −a/b wrongly: the gradient of 5x − 2y + 1 = 0 is 5/2, not −5/2 or 5.
- Taking the negative gradient (−m) instead of the negative reciprocal (−1/m) for a perpendicular line.
- Writing the perpendicular bisector through A or B instead of through the midpoint.
- Stopping at y = mx + c with fractions when the question asks for ax + by + c = 0 with integer coefficients.
- Sign errors in the centre: (x + 2)² + (y − 7)² = 9 has centre (−2, 7).
- Giving r² as the radius, or leaving the radius as a decimal when an exact surd was expected.
- Finding the tangent with the gradient of the radius itself, forgetting the perpendicular step.
- Finding the second coordinate of an intersection from the circle, which gives extra (wrong) points; use the line.
- Using > 0 when the question says "meets" or "intersects", which needs ≥ 0.
- Not showing that a given point lies on the circle before using it in a "show that" question.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Section 1 Pure Mathematics 1 (for Paper 1): 1.3 Coordinate geometry.
