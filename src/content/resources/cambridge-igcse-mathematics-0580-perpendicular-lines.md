---
title: "Cambridge IGCSE Mathematics (0580): Perpendicular lines"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.7
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "perpendicular-lines-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E3.7 (Extended only): perpendicular gradients, equations through a point, perpendicular bisectors, right angles and tangents."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.7 Perpendicular lines** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. It is **Extended only**: C3.7 is listed as "Extended content only". The Extended statement is "Find the gradient and equation of a straight line perpendicular to a given line", and the syllabus examples are finding the gradient of a line perpendicular to 2y = 3x + 1, and finding the equation of the perpendicular bisector of the line joining (–3, 8) and (9, –2). It is examined on Paper 2 (non-calculator) and Paper 4 (calculator).

That perpendicular bisector example is worked in full in the [Coordinate geometry study guide](/resources/igcse-mathematics-coordinate-geometry/). This page explains why the rule works and practises it in every setting where it is tested: gradients from awkward equations, equations through a point, other perpendicular bisectors, right angles in shapes and tangents to circles. Afterwards, use the [perpendicular lines revision notes](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines-revision-notes/) and the [perpendicular lines practice questions](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines-practice/).

## The rule and why it works

If a line has gradient m, a line perpendicular to it has gradient **–1/m**. Equivalently, the two gradients multiply to give **–1**:

```
m1 x m2 = -1
```

To see why, take the step "across 3, up 2" (gradient 2/3). Turn it through 90° and it becomes "across –2, up 3", which is the step "across 2, down 3" (gradient –3/2). The numbers swap places and one sign changes: the **negative reciprocal**.

| Gradient m | Perpendicular gradient | Check: product |
|---|---|---|
| 3 | –1/3 | –1 |
| –2/5 | 5/2 | –1 |
| 1/4 | –4 | –1 |
| –1 | 1 | –1 |
| 0 (horizontal) | vertical line, no gradient | rule does not apply |

Horizontal and vertical lines are always perpendicular to each other, but the product rule cannot be used because a vertical line has no gradient.

## Step 1 is always the given gradient

Make y the subject of the given equation before you take the negative reciprocal.

### Worked example 1

Find the gradient of a line perpendicular to 5x – 2y = 7.

```
-2y = 7 - 5x
  y = 2.5x - 3.5         gradient = 5/2
Perpendicular gradient = -2/5
```

Taking the coefficient of x straight from 5x – 2y = 7 gives 5, and then –1/5, which is wrong. The syllabus example 2y = 3x + 1 tests exactly this: its gradient is 3/2, not 3.

## Equation of a perpendicular line through a point

### Worked example 2

Find the equation of the line perpendicular to y = –3x + 2 that passes through (6, 1). Give your answer in the form ax + by = c.

```
Given gradient = -3, so perpendicular gradient = 1/3
1 = (1/3)(6) + c = 2 + c,  so c = -1
y = (1/3)x - 1
Multiply by 3:  3y = x - 3
                x - 3y = 3
```

Check with the point: 6 – 3(1) = 3.

## Perpendicular bisectors

The **perpendicular bisector** of AB passes through the **midpoint** of AB and is **perpendicular** to AB. Every point on it is the same distance from A as from B. Four steps:

1. Midpoint of AB (E3.4).
2. Gradient of AB (E3.3).
3. Negative reciprocal.
4. Equation through the midpoint with that gradient.

### Worked example 3

Find the equation of the perpendicular bisector of A(–4, 1) and B(2, 5).

```
Midpoint M = ((-4 + 2)/2, (1 + 5)/2) = (-1, 3)
Gradient AB = (5 - 1)/(2 - (-4)) = 4/6 = 2/3
Perpendicular gradient = -3/2
3 = (-3/2)(-1) + c = 1.5 + c,   so c = 1.5
y = -1.5x + 1.5      or      3x + 2y = 3
```

Check: M(–1, 3) gives 3(–1) + 2(3) = 3. Also, any point on the line should be equally far from A and B. Take (1, 0): distance to A is √(25 + 1) = √26 and to B is √(1 + 25) = √26.

The most common error is to use A or B in step 4 instead of the midpoint. The bisector passes through neither end.

## Testing for right angles

Two lines are perpendicular if the product of their gradients is –1.

### Worked example 4

P(1, 2), Q(5, 4) and R(3, 8) are the vertices of a triangle. Show that angle PQR is a right angle.

```
Gradient PQ = (4 - 2)/(5 - 1) = 2/4 = 1/2
Gradient QR = (8 - 4)/(3 - 5) = 4/(-2) = -2
Product = (1/2) x (-2) = -1
So PQ is perpendicular to QR, and angle PQR = 90 degrees.
```

The same test shows whether a parallelogram is a rectangle (adjacent sides perpendicular) or a rhombus (diagonals perpendicular).

## Tangents to circles

A tangent meets the radius at its point of contact at 90° (a circle property in C4.7 and E4.7). So the gradient of a tangent is the negative reciprocal of the gradient of the radius.

### Worked example 5

A circle has centre C(2, 1). The point T(5, 5) lies on the circle. Find the equation of the tangent at T.

```
Gradient CT = (5 - 1)/(5 - 2) = 4/3
Tangent gradient = -3/4
5 = (-3/4)(5) + c = -3.75 + c,   so c = 8.75
y = -0.75x + 8.75
Multiply by 4:  4y = -3x + 35,   so  3x + 4y = 35
```

Check: 3(5) + 4(5) = 35.

## Where perpendicular lines meet

To find where two perpendicular lines cross, solve their equations simultaneously (Topic 2 skills). For y = 2x + 1 and x + 2y = 8 (gradients 2 and –½, product –1):

```
x + 2(2x + 1) = 8  ->  5x = 6  ->  x = 1.2,  y = 3.4
```

## Common mistakes

- **Only changing the sign** (3 becomes –3) or **only taking the reciprocal** (3 becomes 1/3). Both changes are needed: 3 becomes –1/3.
- **Using the coefficient of x** before y is the subject.
- **Using an end point instead of the midpoint** for a perpendicular bisector.
- **Using the perpendicular rule when the question asks for the line itself** or for a parallel line.
- **Fraction slips**: the negative reciprocal of –2/5 is 5/2, not –5/2.
- **Writing the final equation with fractions** when integer coefficients are requested.

## Exam technique

- **Write down** the perpendicular gradient: one value; give it as a fraction, not a rounded decimal.
- **Find the equation**: show the gradient, the substitution and the final form. Check the point fits.
- **Show that** lines are perpendicular: give both gradients, multiply, state that the product is –1, and conclude.
- On Paper 2 keep everything as fractions; on Paper 4 exact decimals such as 8.75 are fine.

## Next steps

- Recap with the [perpendicular lines revision notes](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines-revision-notes/) and practise with the [perpendicular lines practice questions](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines-practice/).
- Revisit midpoints in the [length and midpoint study guide](/resources/cambridge-igcse-mathematics-0580-length-and-midpoint/) and the chord and tangent properties in the [Circle theorems II study guide](/resources/igcse-mathematics-0580-circle-theorems-ii/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 3 Coordinate geometry, E3.7 Perpendicular lines (Extended subject content), with C3.7 marked "Extended content only".
