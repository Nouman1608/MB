---
title: "Cambridge O Level Mathematics (4024): Length and midpoint"
seoTitle: "O Level Maths 4024 Length and Midpoint Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 3.4
syllabusTopics:
  - qualification: "o-level"
    topic: "coordinate-geometry"
  - qualification: "o-level"
    topic: "coordinate-geometry"
    subtopic: "length-and-midpoint-4024"
description: "Cambridge O Level Maths 4024 subtopic 3.4 in depth: calculating the length of a line segment with Pythagoras and finding its midpoint, with applications to shapes."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers subtopic **3.4 Length and midpoint** in Topic 3, Coordinate geometry, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027 series. The subtopic asks you to calculate the length of a line segment and to find the coordinates of its midpoint. The [Coordinate geometry revision notes](/resources/o-level-mathematics-coordinate-geometry-revision-notes/) summarise the whole topic. This page shows where the length formula comes from, how to use it with exact and decimal answers, and how to apply both ideas to shapes.

Companion pages: the [Length and midpoint revision notes](/resources/cambridge-o-level-mathematics-4024-length-and-midpoint-revision-notes/) and the [Length and midpoint practice questions](/resources/cambridge-o-level-mathematics-4024-length-and-midpoint-practice/).

## What the syllabus asks

The syllabus lists two outcomes:

1. Calculate the length of a line segment.
2. Find the coordinates of the midpoint of a line segment.

A **line segment** is the part of a line between two points. Both skills can be examined on either paper. Neither formula appears in the list of formulas supplied in the exam, so you must remember the method.

## The length of a line segment

The length comes from Pythagoras' theorem. Draw a right-angled triangle with the segment as the hypotenuse. The horizontal side is the difference in the x-coordinates, and the vertical side is the difference in the y-coordinates.

For A(x₁, y₁) and B(x₂, y₂):

```
AB² = (x₂ - x₁)² + (y₂ - y₁)²
AB  = √[(x₂ - x₁)² + (y₂ - y₁)²]
```

Because the differences are squared, the order of subtraction does not matter, and the negative signs disappear.

**Worked example.** Find the length of the line segment from A(1, 2) to B(7, 10).

```
horizontal difference = 7 - 1 = 6
vertical difference   = 10 - 2 = 8
AB² = 6² + 8² = 36 + 64 = 100
AB = 10
```

**Worked example.** Find the length of the line segment from C(-4, 3) to D(2, -5).

```
horizontal difference = 2 - (-4) = 6
vertical difference   = -5 - 3 = -8
CD² = 6² + (-8)² = 36 + 64 = 100
CD = 10
```

Notice that (-8)² = 64, not -64. Squares of negative numbers are positive.

### Exact answers and decimals

If the sum under the root is not a perfect square, leave the answer as a surd in simplest form, or give a decimal to 3 significant figures if the question asks for it or if you are on the calculator paper.

**Worked example.** Find the length of the line segment from E(-2, -1) to F(4, 5).

```
horizontal = 4 - (-2) = 6
vertical   = 5 - (-1) = 6
EF² = 36 + 36 = 72
EF = √72 = √(36 x 2) = 6√2
EF = 8.49 (3 s.f.)
```

**Worked example.** Find the length from (1, 1) to (4, 3) in exact form.

```
differences 3 and 2:   9 + 4 = 13
length = √13
```

The surd √13 is already simplified because 13 has no square factor.

### Lines parallel to an axis

If the segment is horizontal or vertical, you do not need Pythagoras. Subtract the coordinates that differ. The distance from (-3, 4) to (5, 4) is 5 - (-3) = 8.

## The midpoint of a line segment

The midpoint is halfway along the segment. Its coordinates are the **means** of the endpoint coordinates.

```
midpoint = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 )
```

**Worked example.** Find the midpoint of A(1, 2) and B(7, 10).

```
x: (1 + 7)/2 = 4
y: (2 + 10)/2 = 6
midpoint = (4, 6)
```

**Worked example.** Find the midpoint of C(-4, 3) and D(2, -5).

```
x: (-4 + 2)/2 = -1
y: (3 + (-5))/2 = -1
midpoint = (-1, -1)
```

**Worked example.** Find the midpoint of (2, -7) and (-6, 1).

```
x: (2 + (-6))/2 = -2
y: (-7 + 1)/2 = -3
midpoint = (-2, -3)
```

A useful check: the midpoint should lie between the two endpoints. Its x-coordinate lies between the two x-values, and its y-coordinate lies between the two y-values.

## Finding an endpoint from the midpoint

If you know the midpoint M and one end A, then M is the mean of A and B. Double the midpoint coordinates and subtract the known end.

**Worked example.** M(3, 1) is the midpoint of AB, and A is (-1, 4). Find B.

```
x: (-1 + x_B)/2 = 3,  so x_B = 6 + 1 = 7
y: (4 + y_B)/2 = 1,   so y_B = 2 - 4 = -2
B = (7, -2)
```

An alternative is to use steps. To get from A to M, you move +4 across and -3 up. Make the same move again from M to reach B: (3 + 4, 1 - 3) = (7, -2).

**Worked example.** The midpoint of (a, 3) and (5, b) is (2, 4). Find a and b.

```
(a + 5)/2 = 2,  so a = -1
(3 + b)/2 = 4,  so b = 5
```

## Using length and midpoint in geometry

### Perimeter

**Worked example.** Find the perimeter of the triangle with vertices (0, 0), (6, 0) and (6, 8).

```
side along the x-axis: 6
side along x = 6:      8
the third side:        √(36 + 64) = 10
perimeter = 6 + 8 + 10 = 24
```

### Isosceles triangle

**Worked example.** Show that the triangle A(1, 1), B(5, 1), C(3, 5) is isosceles.

```
AC² = (3 - 1)² + (5 - 1)² = 4 + 16 = 20
BC² = (3 - 5)² + (5 - 1)² = 4 + 16 = 20
AC = BC = √20 = 2√5
```

Two sides are equal, so the triangle is isosceles. (The third side AB has length 4.)

### Right-angled triangle

Use the converse of Pythagoras: if the square of the longest side equals the sum of the squares of the other two, the triangle has a right angle.

**Worked example.** Show that the triangle P(1, 2), Q(4, 6), R(8, 3) has a right angle at Q.

```
PQ² = 3² + 4² = 25
QR² = 4² + 3² = 25
PR² = 7² + 1² = 50
PQ² + QR² = 50 = PR²
```

So the angle at Q is a right angle. Since PQ = QR = 5, the triangle is also isosceles.

### Circle with a diameter

The midpoint of a diameter is the centre and half its length is the radius.

**Worked example.** The ends of a diameter of a circle are (-2, 3) and (6, -3). Find the centre and the radius.

```
centre = ((-2 + 6)/2, (3 + (-3))/2) = (2, 0)
diameter² = 8² + 6² = 100, so the diameter is 10
radius = 5
```

### Diagonals of a parallelogram

The diagonals of a parallelogram bisect each other, so they have the same midpoint.

**Worked example.** A(1, 2), B(5, 2), C(7, 5), D(3, 5) form a parallelogram ABCD. Show that the diagonals bisect each other.

```
midpoint of AC = ((1 + 7)/2, (2 + 5)/2) = (4, 3.5)
midpoint of BD = ((5 + 3)/2, (2 + 5)/2) = (4, 3.5)
```

The midpoints are the same, so the diagonals bisect each other.

## Finding an unknown coordinate from a length

Put the length into the formula and solve.

**Worked example.** The distance from (1, 2) to (k, 6) is 5. Find the possible values of k.

```
(k - 1)² + (6 - 2)² = 25
(k - 1)² + 16 = 25
(k - 1)² = 9
k - 1 = 3 or k - 1 = -3
k = 4 or k = -2
```

There are two values because the point could be either side.

## Exam technique

- Write the horizontal and vertical differences, then square them. This earns the method mark even if the arithmetic slips.
- Leave surds in simplest form unless a decimal is requested.
- Give the midpoint as a coordinate pair, with brackets.
- In "show that" questions, finish with a sentence that states the conclusion.
- For unknown values from a length, square both sides and remember the ± when taking the square root.

## Common mistakes

- Forgetting to take the square root at the end.
- Adding instead of subtracting the coordinates in the length, or subtracting in the midpoint.
- Squaring wrongly: (-8)² written as -64.
- Dividing the sum by 2 for only one coordinate of the midpoint.
- Leaving out one of the two answers for k.
- Giving an answer to the length formula in decimals when the question says "exact".

## Where this leads

Length and midpoint are used for the perpendicular bisector of a segment in subtopic 3.7, and the length idea reappears in vectors (magnitude of a vector) and in circle geometry.
