---
title: "Cambridge IGCSE Mathematics (0580): Coordinates"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.1
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "coordinates-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 subtopic 3.1: distances along grid lines, missing vertices, squares and areas from Cartesian coordinates."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.1 Coordinates** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The Core (C3.1) and Extended (E3.1) statements are identical: "Use and interpret Cartesian coordinates in two dimensions." So everything here is for both tiers, and it can appear on any of the four papers.

The basics of the grid (axes, quadrants, reading a scaled grid) are taught in the [coordinates and drawing linear graphs study guide](/resources/igcse-mathematics-0580-coordinates-and-drawing-linear-graphs/). This page goes further into the *interpret* half of the statement: working out distances, missing corners and areas from coordinates alone, often with no grid drawn. When you have read it, use the [coordinates revision notes](/resources/cambridge-igcse-mathematics-0580-coordinates-cambridge-igcse-maths-revision-notes/) and the [coordinates practice questions](/resources/cambridge-igcse-mathematics-0580-coordinates-cambridge-igcse-maths-practice/).

## What "use and interpret" means in practice

Questions on 3.1 rarely say "plot this point" and stop there. They give you coordinates and ask you to reason with them. The common tasks are:

| Task | What you do |
|---|---|
| Read or write down coordinates | Give the ordered pair (x, y), with brackets and a comma |
| Find a distance along a grid line | Subtract the coordinates that change |
| Recognise horizontal and vertical lines | Same y means horizontal; same x means vertical |
| Find a missing vertex of a shape | Use the steps across and up between known vertices |
| Find an area | Use horizontal and vertical distances as bases and heights |
| Decide which points satisfy a condition | Test each point's coordinates against the condition |

Calculating the length of a *sloping* segment, and finding a midpoint, are Extended subtopic 3.4. In 3.1 you only need distances along grid lines.

## Distances along grid lines

When two points share a y-coordinate, the segment joining them is horizontal and its length is the difference of the x-coordinates. When they share an x-coordinate, the length is the difference of the y-coordinates.

Negative coordinates are where marks are lost. The distance from x = –4 to x = 5 is 5 – (–4) = 9, not 5 – 4 = 1. A number-line check helps: from –4 to 0 is 4 units, then 0 to 5 is 5 units, total 9.

Always subtract the smaller value from the larger, or take the size of the answer, because a length cannot be negative.

### Worked example 1: a right-angled triangle from coordinates

A(–4, 3), B(5, 3) and C(5, –6) are the vertices of a triangle. Find the lengths AB and BC, explain why angle ABC is a right angle, and find the area of the triangle.

```
A and B share y = 3, so AB is horizontal.
  AB = 5 - (-4) = 9 units
B and C share x = 5, so BC is vertical.
  BC = 3 - (-6) = 9 units
A horizontal line meets a vertical line at 90 degrees,
so angle ABC = 90 degrees.
Area = 1/2 x base x height = 1/2 x 9 x 9 = 40.5 square units
```

The explanation earns its mark only if it mentions *both* facts: AB is horizontal *and* BC is vertical. "It looks like a right angle" is not a reason.

## Finding a missing vertex with steps

Every pair of points is joined by a **step**: how far across (change in x) and how far up (change in y). Shapes with parallel, equal sides repeat the same step.

- In a **parallelogram** PQRS (letters in order round the shape), the step from P to Q equals the step from S to R, and the step from Q to R equals the step from P to S.
- In a **square** or **rectangle**, the sides also meet at right angles, which lets you turn a step through 90°.

### Worked example 2: completing a parallelogram

P(1, 2), Q(6, 3) and R(4, 7) are three vertices of parallelogram PQRS. Find the coordinates of S.

```
Step from Q to R:  across 4 - 6 = -2,  up 7 - 3 = 4
PS must be the same step as QR.
S = (1 + (-2), 2 + 4) = (-1, 6)

Check with the other pair of sides:
Step from P to Q:  across 5, up 1
Step from S to R:  across 4 - (-1) = 5, up 7 - 6 = 1   (equal, as required)
```

The letter order matters. If a question only says "P, Q and R are three vertices of a parallelogram" without naming the fourth in order, there are three possible positions, (–1, 6), (3, –2) and (9, 8), one opposite each of the given points. Read the wording carefully before you answer.

### Worked example 3: completing a square

A(2, 1) and B(5, 3) are adjacent vertices of square ABCD. The letters go anticlockwise. Find C and D.

```
Step from A to B: across 3, up 2.
Turning this step 90 degrees anticlockwise swaps the numbers
and changes the sign of the new "across":
  step from B to C: across -2, up 3
C = (5 - 2, 3 + 3) = (3, 6)
D = A + same step = (2 - 2, 1 + 3) = (0, 4)

Check: step from D to C = across 3, up 2, which equals A to B.
```

Sketch it on squared paper to see why the turn works: the step "3 across, 2 up" turned a quarter-turn becomes "2 back, 3 up". The two steps have the same length, and they are at right angles.

## Areas from coordinates

When a shape has a horizontal or vertical side, use it as a base. The height is the perpendicular distance to the opposite vertex, which is again a difference of coordinates.

### Worked example 4: area of a triangle with a vertical base

Find the area of the triangle with vertices E(–2, –1), F(–2, 7) and G(4, 2).

```
E and F share x = -2, so EF is vertical.
  EF = 7 - (-1) = 8 units  (base)
Height = horizontal distance from G to the line x = -2
       = 4 - (-2) = 6 units
Area = 1/2 x 8 x 6 = 24 square units
```

The y-coordinate of G does not affect the area. Any point on the line x = 4 gives the same height, so the same area.

For a shape with no horizontal or vertical side, draw the smallest rectangle round it with sides along grid lines, then subtract the right-angled triangles in the corners. That method uses only differences of coordinates.

## Points that satisfy a condition

Some questions describe points by a rule. "The x-coordinate is twice the y-coordinate" means x = 2y. Every point on the y-axis has x = 0, and every point on the x-axis has y = 0, so the point on the x-axis with x = 2y is the origin.

### Worked example 5: points from a description

Point T lies on the line y = –3 and its x-coordinate is 5 more than its y-coordinate. Write down the coordinates of T.

```
On y = -3, so the y-coordinate is -3.
x = -3 + 5 = 2
T = (2, -3)
```

## Common mistakes

- **Subtracting a negative wrongly.** The distance from y = 3 to y = –6 is 9, not –3 or 3.
- **Counting grid lines instead of gaps.** From x = 1 to x = 4 there are 4 grid lines but only 3 units.
- **Using the wrong letter order** in a named shape, so the missing vertex ends up on a diagonal instead of a corner.
- **Turning a step the wrong way.** Check your answer by drawing a quick sketch: a square must look square.
- **Leaving out brackets or the comma**, or writing the y-coordinate first.
- **Quoting a distance as negative.** A length is always positive.

## Exam technique

- **Write down** the coordinates: no working is needed, but the answer must be an ordered pair such as (–1, 6).
- **Find** or **Work out**: show the subtraction, for example 5 – (–4) = 9. A correct method can earn credit even if the arithmetic slips.
- **Explain** or **Show that**: give the coordinate fact behind each statement, such as "A and B have the same y-coordinate".
- **Plot**: mark each point with a small neat cross, exactly on the grid intersection.
- On a calculator paper, coordinates may be decimals such as (2.5, –1.5). The same subtraction rules apply.
- When no diagram is given, a quick sketch with rough axes catches most sign errors before they cost marks.

## Next steps

- Recap with the [coordinates revision notes](/resources/cambridge-igcse-mathematics-0580-coordinates-cambridge-igcse-maths-revision-notes/), then try the [coordinates practice questions](/resources/cambridge-igcse-mathematics-0580-coordinates-cambridge-igcse-maths-practice/).
- See the whole topic in the [Coordinate geometry study guide](/resources/igcse-mathematics-coordinate-geometry/) and the [Coordinate geometry revision notes](/resources/igcse-mathematics-coordinate-geometry-revision-notes/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 3 Coordinate geometry, C3.1 and E3.1 Coordinates: "Use and interpret Cartesian coordinates in two dimensions."
