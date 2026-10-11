---
title: "OxfordAQA International AS and A-level Mathematics: Straight lines and intersections of lines with curves (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths Straight Lines Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on straight lines, perpendicular lines and line-curve intersections for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These are condensed notes for section P1.2 (Coordinate geometry) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2, for International AS exams from May/June 2018 and A-level exams from May/June 2019. The content sits in International AS Unit P1 (Pure Maths) and is not split into core and extension parts. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-straight-lines-and-intersections-of-lines-with-curves/).

Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-straight-lines-and-intersections-of-lines-with-curves-practice/). Other useful pages are the [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Formulas to know

| Item | Result |
|---|---|
| Gradient through (x₁, y₁), (x₂, y₂) | m = (y₂ − y₁)/(x₂ − x₁) |
| Mid-point | ((x₁ + x₂)/2, (y₁ + y₂)/2) |
| Distance | √[(x₂ − x₁)² + (y₂ − y₁)²] |
| Line, gradient and point | y − y₁ = m(x − x₁) |
| Line, gradient and intercept | y = mx + c |
| General form | ax + by + c = 0, gradient −a/b, y-intercept −c/b |
| Parallel | m₁ = m₂ |
| Perpendicular | m₁m₂ = −1 |
| Discriminant of ax² + bx + c = 0 | b² − 4ac |

## Method boxes

**Find the equation of a line**

1. Get the gradient (given, or from two points).
2. Pick one known point.
3. Write y − y₁ = m(x − x₁).
4. If asked for ax + by + c = 0, clear fractions and collect terms on one side. Check with the second point.

**Perpendicular bisector of AB**

1. Mid-point M of AB.
2. Gradient of AB, then flip and change the sign.
3. Line through M with that gradient.

**Intersection of a line and a curve**

1. Substitute the line into the curve.
2. Rearrange to a quadratic equal to zero.
3. Solve.
4. Find y from the line.
5. Give coordinate pairs.

**Tangent condition**

1. Substitute and rearrange so the right side is 0.
2. Find b² − 4ac in terms of the unknown.
3. Set it equal to 0 for a tangent.
4. Solve, then find the point of contact from x = −b/(2a).

## Discriminant and geometry

| b² − 4ac | Roots | Line and curve |
|---|---|---|
| > 0 | Two distinct real | Two points of intersection |
| = 0 | Equal | One point, a tangent |
| < 0 | None | No intersection |

## Small worked reminders

**Perpendicular bisector.** A(2, −3), B(10, 3).

```
Gradient AB = 6/8 = 3/4
Mid-point = (6, 0)
Perpendicular gradient = −4/3
y − 0 = −4/3 (x − 6)
3y = −4x + 24
4x + 3y − 24 = 0
```

**Is the line a tangent?** Does y = 2x − 1 touch y = x² − 2x + 3?

```
x² − 2x + 3 = 2x − 1
x² − 4x + 4 = 0
(x − 2)² = 0
```

The roots are equal, so yes. The point of contact has x = 2, y = 3, so it is (2, 3).

**Family of lines.** For the line y = x + k and the curve y = x² − 3x + 6:

```
x² − 4x + (6 − k) = 0
Discriminant: 16 − 4(6 − k) = 4k − 8
```

| k | Discriminant | Result |
|---|---|---|
| k > 2 | positive | two intersections |
| k = 2 | zero | tangent at x = 2 |
| k < 2 | negative | none |

**A reciprocal curve.** Where does y = 20/x meet 2x + y = 13?

```
2x + 20/x = 13
2x² − 13x + 20 = 0
(2x − 5)(x − 4) = 0
x = 5/2 or x = 4
y = 13 − 2x: y = 8 or y = 5
Points: (5/2, 8) and (4, 5)
```

A repeated factor in any polynomial, not just a quadratic, means the line touches the curve there.

**Right angle and collinear checks.** Use gradients.

```
A(−2, 1), B(4, 3), C(2, 9)
Gradient AB = 2/6 = 1/3
Gradient BC = 6/(−2) = −3
Product = −1, so AB is perpendicular to BC (right angle at B).

P(−1, −5), Q(2, 1), R(5, 7)
Gradient PQ = 6/3 = 2, gradient QR = 6/3 = 2
Same gradient and a shared point Q, so P, Q, R lie on one line.
```

**Tangent with an unknown constant.** The line y = 5x + c touches y = x² − x + 6. Find c and the point of contact.

```
x² − x + 6 = 5x + c
x² − 6x + (6 − c) = 0
Discriminant: 36 − 4(6 − c) = 12 + 4c = 0, so c = −3
Equal roots at x = −(−6)/2 = 3
y = 5(3) − 3 = 12, so the contact point is (3, 12)
```

**Range of gradients.** For which m does y = mx − 3 meet y = x² + 1 at two points?

```
x² + 1 = mx − 3
x² − mx + 4 = 0
Discriminant: m² − 16 = (m − 4)(m + 4) > 0
m < −4 or m > 4
```

Solve a quadratic inequality like this with a quick sketch of the U-shaped graph. The discriminant is above the axis outside the roots.

## Method for combined problems

Longer questions chain the skills together. Work in this order and label each result so that a slip in one part does not cost you the rest.

1. Draw a rough sketch with the given points. It catches sign errors early.
2. Find gradients first. Everything else (parallel, perpendicular, bisector) follows from them.
3. Write each line in y − y₁ = m(x − x₁) form, then convert to the requested form only at the end.
4. When two lines meet, solve them simultaneously and give both coordinates.
5. When a line meets a curve, substitute, then read the discriminant if the question mentions tangent, touching, distinct points or no intersection.
6. Substitute your answers back into both equations as a final check.

## Presenting answers

* Give exact values: fractions such as 3/4 and surds such as 2√13, not rounded decimals, unless the question asks for a decimal.
* "Show that" questions need every line of working to be visible, finishing on the stated result.
* When a question gives the required form, such as ax + by + c = 0 with whole numbers, your final line must be in that form.
* State the conclusion in words for interpretation questions: "equal roots, so the line is a tangent".

## Must-know distinctions

* **Parallel versus perpendicular.** Parallel: same gradient. Perpendicular: flip and change sign.
* **Gradient versus intercept in ax + by + c = 0.** The gradient is −a/b. The intercept is −c/b.
* **Distinct, equal, no real roots.** These describe the quadratic after substitution, not the curve itself.
* **Point of intersection versus point of contact.** Contact is the single intersection point when the line is a tangent.
* **Horizontal and vertical lines.** y = k is horizontal with gradient 0. x = k is vertical with no gradient. They are perpendicular, but the product rule does not apply.
* **Mid-point versus distance.** The mid-point uses addition and halving. The distance uses subtraction, squaring, adding and a square root.

## Quick self-test

1. Find the gradient of the line through (−2, 4) and (6, −8).
2. Find the mid-point of (−5, 2) and (9, 10).
3. Find the distance between (1, −2) and (13, 3).
4. State the gradient and y-intercept of 8x + 5y − 20 = 0.
5. Find the line through (4, 1) with gradient −2, in the form ax + by + c = 0.
6. What is the gradient of a line perpendicular to one with gradient −5/3?
7. Are 3x − 2y = 8 and 4x + 6y = 5 perpendicular?
8. Find the line through (2, 5) parallel to y = 4 − x, in the form x + y + c = 0.
9. For which values of k does y = x + k miss the curve y = x² − 3x + 6?
10. Find the points where y = 20/x meets 2x + y = 13.

### Answers

1. −12/8 = **−3/2**.
2. (2, 6).
3. √(12² + 5²) = √169 = **13**.
4. Gradient −8/5, intercept 4.
5. y − 1 = −2(x − 4), giving **2x + y − 9 = 0**.
6. **3/5**.
7. The gradients are 3/2 and −2/3, with product −1, so **yes**.
8. The gradient is −1. y − 5 = −(x − 2), so **x + y − 7 = 0**.
9. The discriminant is 4k − 8, which is negative when **k < 2**.
10. **(5/2, 8) and (4, 5)**, as in the worked reminder above.

## Where marks are usually lost

* Subtracting coordinates in different orders in the numerator and denominator of the gradient.
* Dropping the minus sign when reading the gradient from ax + by + c = 0.
* Taking the perpendicular gradient as only the reciprocal, or only the negative.
* Starting a perpendicular bisector from a point on AB other than the mid-point.
* Stopping at the x-values and not giving the y-coordinates of the intersection points.
* Substituting into the wrong equation and ending up with a messy expression instead of a quadratic.
* Setting the discriminant greater than zero when the question says tangent, or equal to zero when it says two points.
* Dropping a bracket: (2 − m)² written as 4 − m².
* Leaving fractions in a line equation when the question asks for whole-number coefficients.
* Giving a decimal approximation when an exact answer or surd was expected.

## Official syllabus

These notes follow section P1.2 (Coordinate geometry) in section 3.1 of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2, published by OxfordAQA.
