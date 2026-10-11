---
title: "OxfordAQA International AS and A-level Mathematics: Straight lines and intersections of lines with curves (9660)"
seoTitle: "OxfordAQA Maths Straight Lines and Curves Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Straight lines and intersections of lines with curves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 175
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-coordinate-geometry-oxfordaqa-alevel-maths"
description: "Study guide to straight lines, parallel and perpendicular lines and line-curve intersections for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers section P1.2 (Coordinate geometry) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2, for International AS exams from May/June 2018 and A-level exams from May/June 2019. The specification places this content in International AS Unit P1 (Pure Maths); it is not split into core and extension parts, and it carries on into the A-level. It is also the algebra you rely on when you meet tangents in differentiation.

Pair it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-straight-lines-and-intersections-of-lines-with-curves-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-straight-lines-and-intersections-of-lines-with-curves-practice/). For the rest of the unit see the [Unit P1 overview](/resources/a-level-oxfordaqa-mathematics-unit-p1/), the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What P1.2 asks you to do

| Specification content | What you must be able to do |
|---|---|
| Equation of a straight line | Write it as y − y₁ = m(x − x₁), as ax + by + c = 0 and as y = mx + c, and move between them |
| Problems with gradients, mid-points and distance | Find the gradient, mid-point and length of a line segment from two points |
| Parallel and perpendicular lines | Use equal gradients for parallel lines and a product of −1 for perpendicular lines |
| Intersection of a straight line and a curve | Solve algebraically, then interpret equal roots, distinct real roots and no real roots geometrically |

Every method below is algebra you can do by hand, and the working is what shows your understanding.

## Gradient, mid-point and distance

For points A(x₁, y₁) and B(x₂, y₂):

| Quantity | Formula |
|---|---|
| Gradient of AB | m = (y₂ − y₁)/(x₂ − x₁) |
| Mid-point of AB | ((x₁ + x₂)/2, (y₁ + y₂)/2) |
| Length AB | √[(x₂ − x₁)² + (y₂ − y₁)²] |

The gradient is the change in y for a change of 1 in x. A positive gradient rises left to right, a negative one falls, and a vertical line has no gradient at all.

**Worked example 1.** A is (−3, 7) and B is (5, 1). Find the gradient, mid-point and length of AB.

```
Gradient: (1 − 7)/(5 − (−3)) = −6/8 = −3/4
Mid-point: ((−3 + 5)/2, (7 + 1)/2) = (1, 4)
Length: √(8² + (−6)²) = √(64 + 36) = √100 = 10
```

Keep brackets round negative coordinates. Writing 5 − −3 is how sign errors start.

## Three forms of a straight line

| Form | Best used when |
|---|---|
| y = mx + c | You know the gradient m and the y-intercept c, or want to read them off |
| y − y₁ = m(x − x₁) | You know the gradient and one point (x₁, y₁) |
| ax + by + c = 0 | The answer must be in this form, usually with a, b, c whole numbers |

The y − y₁ = m(x − x₁) form is the workhorse. Both the point and the gradient go in directly, with no need to find c first.

**Worked example 2.** Find the line through A(−3, 7) and B(5, 1), in the form ax + by + c = 0 with whole-number coefficients.

```
m = −3/4 (from example 1)
y − 7 = −3/4 (x + 3)
4(y − 7) = −3(x + 3)
4y − 28 = −3x − 9
3x + 4y − 19 = 0
```

Check by substituting the other point: 3(5) + 4(1) − 19 = 0. It works, so the line is right.

**Worked example 3.** Find the line through (2, −5) with gradient 3/2.

```
y + 5 = 3/2 (x − 2)
2y + 10 = 3x − 6
3x − 2y − 16 = 0
```

Multiply through by the denominator to clear fractions, then collect everything on one side. Keep the x term positive if you can.

**Reading a gradient from ax + by + c = 0.** Rearrange to y = −(a/b)x − c/b. The gradient is −a/b and the y-intercept is −c/b. For 6x − 4y + 9 = 0 the gradient is 6/4 = 3/2 and the intercept is 9/4. Beware the sign: the gradient is minus a over b, not a over b.

## Parallel and perpendicular lines

* Parallel lines have equal gradients: m₁ = m₂.
* Perpendicular lines have gradients with product −1: m₁m₂ = −1. Equivalently, one gradient is the negative reciprocal of the other. Flip the fraction and change the sign.

Examples of negative reciprocals: 2/3 and −3/2, 5 and −1/5, −4/7 and 7/4.

Two warnings. First, compare gradients only after both lines are in a form where the gradient is visible. The lines 4x − 6y + 5 = 0 and 2x − 3y = 1 both have gradient 2/3, so they are parallel, even though the coefficients look different. Second, a horizontal line (gradient 0) is perpendicular to a vertical line (no gradient). The product rule cannot be used for that pair.

**Worked example 4 (perpendicular bisector).** Find the perpendicular bisector of AB, where A and B are as in example 1.

```
Gradient of AB = −3/4, so the perpendicular gradient is 4/3.
The bisector passes through the mid-point (1, 4).
y − 4 = 4/3 (x − 1)
3y − 12 = 4x − 4
4x − 3y + 8 = 0
```

Every point on this line is equidistant from A and B. A quick check: the point (1, 4) is the mid-point, and 4 − 12 + 8 = 0.

**Worked example 5 (parallel line).** Find the line through (6, −2) parallel to 5x − 2y = 7.

```
Rearrange: 2y = 5x − 7, so the gradient is 5/2.
y + 2 = 5/2 (x − 6)
2y + 4 = 5x − 30
5x − 2y − 34 = 0
```

A parallel line keeps the left-hand side, 5x − 2y, and changes only the constant. Here 5(6) − 2(−2) = 34, which gives the same answer in one line.

## Where a line meets a curve

To find where a line meets a curve, solve their equations simultaneously. The method never changes.

1. Substitute the line (written as y = ... or x = ...) into the curve.
2. Rearrange into a quadratic, usually with everything on one side equal to zero.
3. Solve it by factorising, the formula or completing the square.
4. Put each x-value back into the **line** equation to get y. The line is easier to substitute into than the curve.
5. Write the answers as coordinate pairs.

**Worked example 6.** Find where y = 2x − 1 meets y = x² − 5x + 9.

```
x² − 5x + 9 = 2x − 1
x² − 7x + 10 = 0
(x − 2)(x − 5) = 0
x = 2 or x = 5
Points: (2, 3) and (5, 9)
```

For x = 2 the line gives y = 2(2) − 1 = 3, and for x = 5 it gives y = 9. Substituting into the curve returns the same values, and doing so is a worthwhile check.

Do not stop at the x-values. A question that asks for the points of intersection needs both coordinates.

## What the discriminant tells you

After substitution you have a quadratic ax² + bx + c = 0. Its discriminant is b² − 4ac, and it decides how many times the line meets the curve.

| Discriminant | Roots | Geometry |
|---|---|---|
| b² − 4ac > 0 | Two distinct real roots | The line cuts the curve at two points |
| b² − 4ac = 0 | Equal (repeated) roots | The line touches the curve at one point, so it is a tangent |
| b² − 4ac < 0 | No real roots | The line and curve do not meet |

Equal roots mean one point of contact, found from x = −b/(2a). This reading of the discriminant is exactly what P1.2 asks you to be able to interpret.

**Worked example 7 (finding a tangent gradient).** The line y = mx + 1 touches the curve y = x² + 2x + 5. Find the possible values of m and the points of contact.

```
x² + 2x + 5 = mx + 1
x² + (2 − m)x + 4 = 0
```

The line touches the curve when this has equal roots:

```
(2 − m)² − 4(1)(4) = 0
(2 − m)² = 16
2 − m = 4 or 2 − m = −4
m = −2 or m = 6
```

Points of contact, using x = −(2 − m)/2:

```
m = −2: x = −2, y = −2(−2) + 1 = 5   → (−2, 5)
m = 6:  x = 2,  y = 6(2) + 1 = 13    → (2, 13)
```

Both points lie on the curve: (−2)² + 2(−2) + 5 = 5 and 2² + 2(2) + 5 = 13. There are two tangents because there are two lines through (0, 1) that just touch the curve.

**Worked example 8 (range of values).** For the same family of lines, for what values of m does the line cut the curve at two points?

The discriminant is (2 − m)² − 16, which factorises as (m − 6)(m + 2). We need this greater than 0.

```
(m − 6)(m + 2) > 0
m < −2 or m > 6
```

The sketch of a positive U-shaped quadratic in m shows why: it is above zero outside its roots. For −2 < m < 6 the line misses the curve, and at m = −2 and m = 6 it is a tangent.

**Worked example 9 (curve that is not a parabola).** Curves like y = k/x also appear. Multiply through by x to get a quadratic. To find where y = 12/x meets 3x + y = 13:

```
3x + 12/x = 13
3x² + 12 = 13x
3x² − 13x + 12 = 0
(3x − 4)(x − 3) = 0
x = 4/3 or x = 3
y = 13 − 3x: y = 9 or y = 4
Points: (4/3, 9) and (3, 4)
```

The quadratic route works for any curve that becomes a quadratic after substitution. If the equation you get is a cubic, the same reading of repeated roots still applies, but you need to factorise it first.

## Putting the ideas together

Questions often join several of these skills. A typical chain: find a gradient from two points, write the line, find a perpendicular bisector or a parallel line, then intersect it with a curve and interpret the discriminant. Work one step at a time, label each result, and keep exact values (fractions and surds) until the end.

## Common errors

* Using y₂ − y₁ over x₁ − x₂, with the subtraction in different orders on top and bottom. The gradient of the line falling from (−3, 7) to (5, 1) is negative, so check the sign against a quick sketch.
* Forgetting the minus when reading the gradient from ax + by + c = 0.
* Taking the perpendicular gradient as just the reciprocal or just the negative. You need both flips.
* Giving only x-values after solving for the intersection.
* Setting the discriminant of the **curve** to zero rather than the discriminant of the combined quadratic. A tangent condition always comes from the equation after substitution.
* Writing b² − 4ac > 0 for a tangent. A tangent needs equals zero. Greater than zero means two points.
* Leaving the answer as y = (−3/4)x + 19/4 when the question asks for whole-number coefficients in the form ax + by + c = 0.
* Squaring a bracket wrongly: (2 − m)² is not 4 − m².

## Official syllabus

This guide follows section P1.2 (Coordinate geometry) in section 3.1 of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2, published by OxfordAQA. Check the current specification on the OxfordAQA website for any updates.
