---
title: "Cambridge O Level Mathematics (4024): Pythagoras’ Theorem and Trigonometry in 3D"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Trigonometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 6.4
syllabusTopics:
  - qualification: "o-level"
    topic: "trigonometry"
  - qualification: "o-level"
    topic: "trigonometry"
    subtopic: "pythagoras-theorem-and-trigonometry-4024"
description: "Study guide to 4024 section 6.4: Pythagoras' theorem and trigonometry in three dimensions, space diagonals, pyramids and cones, and the angle between a line and a plane."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section 6.4, Pythagoras' theorem and trigonometry in 3D, in the Trigonometry topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to carry out calculations and solve problems in three dimensions using Pythagoras' theorem and trigonometry, including calculating the angle between a line and a plane. After this guide, use the [Pythagoras' theorem and trigonometry in 3D revision notes](/resources/cambridge-o-level-mathematics-4024-pythagoras-theorem-and-trigonometry-revision-notes/) and the [Pythagoras' theorem and trigonometry in 3D practice questions](/resources/cambridge-o-level-mathematics-4024-pythagoras-theorem-and-trigonometry-practice/).

## What section 6.4 asks for

1. Find lengths in solids, such as the space diagonal of a cuboid.
2. Find angles between lines in solids and the base or another plane.
3. Break each three-dimensional problem into a sequence of right-angled triangles.

Everything uses the methods from the right-angled triangle sections: Pythagoras' theorem, sine, cosine and tangent. The challenge is to see the right-angled triangles inside the solid and to draw each one separately, flat, with its real dimensions.

## The key method

1. Sketch the solid and mark the line or angle that you need.
2. Find a **right-angled triangle** that contains it. Often one side is vertical and another lies on the horizontal base.
3. Draw that triangle on its own and label the known lengths.
4. If a length is missing, find it from another right-angled triangle, often one lying in the base.
5. Use Pythagoras or trigonometry.

## The angle between a line and a plane

The angle between a line and a plane is the angle between the line and its **projection** on the plane. The projection is the line you get by dropping perpendiculars from points of the line onto the plane. In practice:

1. Choose a point on the line that is not on the plane, such as an apex or a top corner.
2. Drop a perpendicular from it to the plane. The foot is where the point sits directly above.
3. Join the foot to the point where the line meets the plane. This is the projection.
4. The angle between the line and its projection is the required angle. It is always the smallest angle between the line and the plane.

## Cuboids

For a cuboid with sides l, w and h:

```
diagonal of the base = √(l² + w²)
space diagonal = √(l² + w² + h²)
```

### Worked example 1

ABCDEFGH is a cuboid. The base ABCD is horizontal with AB = 8 cm and BC = 6 cm. The vertical edges, including CG, are 5 cm. Find AC, AG and the angle between AG and the base.

```
AC² = 8² + 6² = 100, so AC = 10 cm
AG² = AC² + CG² = 100 + 25 = 125, so AG = 11.2 cm
the projection of AG on the base is AC
tan(angle GAC) = CG / AC = 5/10
angle GAC = 26.6°
```

### Worked example 2

In the same cuboid, find the angle between AG and the face ABFE.

```
G sits above C; the perpendicular from G to plane ABFE is GF (GF = BC = 6 cm)
so the projection of AG on ABFE is AF
AF² = 8² + 5² = 89, so AF = 9.43 cm
tan(angle GAF) = GF / AF = 6/9.43
angle GAF = 32.5°
```

Note that the same line AG makes different angles with different planes. Always read which plane is named.

### Worked example 3: the longest rod

A box measures 40 cm by 30 cm by 120 cm inside. What is the longest straight rod that fits?

```
longest rod = space diagonal = √(40² + 30² + 120²)
            = √(1600 + 900 + 14 400) = √16 900 = 130 cm
```

## Pyramids

For a pyramid with a rectangular base and the apex V directly above the centre of the base, the foot of the perpendicular from V is the centre of the base, M. The base diagonal passes through M and is bisected by it.

### Worked example 4

A square-based pyramid has base side 10 cm and vertical height 12 cm. Find the length of a sloping edge, the angle between a sloping edge and the base, and the angle between a sloping face and the base.

```
half the base diagonal = (10√2) ÷ 2 = 7.071 cm
sloping edge² = 12² + 7.071² = 144 + 50 = 194, so edge = 13.9 cm
angle between edge and base: tan θ = 12 / 7.071, so θ = 59.5°
slant height of a face: 12² + 5² = 169, so slant height = 13 cm
angle between a face and the base: tan φ = 12/5, so φ = 67.4°
```

The distance from the centre of the base to the midpoint of a base edge is half the side (5 cm). The angle between a face and the base is measured along this line, which is perpendicular to the base edge.

### Worked example 5

A pyramid has a rectangular base 8 cm by 6 cm and vertical height 12 cm, with the apex directly above the centre. Find the sloping edge and the angle it makes with the base.

```
base diagonal = √(64 + 36) = 10 cm, so half the diagonal = 5 cm
sloping edge² = 12² + 5² = 169, so edge = 13 cm
angle = tan⁻¹(12/5) = 67.4°
```

## Cones

For a cone, the slant height, the radius and the vertical height form a right-angled triangle with the vertical height and the radius as the shorter sides.

### Worked example 6

A cone has slant height 13 cm and base radius 5 cm. Find its height and the angle between the slant side and the base.

```
height² = 13² − 5² = 144, so height = 12 cm
cos θ = 5/13, so θ = 67.4°
```

## Prisms

### Worked example 7

A triangular prism has a base ABC with a right angle at B, AB = 3 cm and BC = 4 cm. The vertical edges are 12 cm. Let F be the top corner above C. Find AF and the angle between AF and the base.

```
AC² = 3² + 4² = 25, so AC = 5 cm
AF² = AC² + CF² = 25 + 144 = 169, so AF = 13 cm
angle FAC: tan θ = 12/5, so θ = 67.4°
```

## Angles of elevation in three dimensions

Ground-level points do not have to be in a line with the tower. Their distances to the base are found first, using the ground plane.

### Worked example 8

A vertical tower TB is 30 m high. From point A, 40 m due west of B, the angle of elevation of T is found. Point C is 50 m due south of B. Find the distance AC and the angles of elevation of T from A and from C.

```
AC² = 40² + 50² = 4100, so AC = 64.0 m
elevation from A: tan θ = 30/40, so θ = 36.9°
elevation from C: tan φ = 30/50, so φ = 31.0°
```

### Worked example 9

A room is 5 m long, 4 m wide and 3 m high. A cable runs in a straight line from a floor corner to the opposite ceiling corner. Find its length and its angle to the floor.

```
floor diagonal = √(25 + 16) = √41 = 6.40 m
cable² = 41 + 9 = 50, so cable = 7.07 m
angle with the floor: tan θ = 3 / 6.40, so θ = 25.1°
```

Here the floor diagonal is the projection of the cable on the floor. 

## Drawing the triangles

For every step, redraw the triangle as a flat right-angled triangle. Label the right angle, the known sides and the angle. It is tempting to read lengths from the 3D sketch, but the sketch distorts them, so rely only on the given dimensions.

## Common mistakes

- Using the wrong triangle, for example one that is not right-angled.
- Using a sloping edge as if it were the vertical height.
- Forgetting to halve the base diagonal in a pyramid problem.
- Using the base side instead of half of it for the angle between a face and the base.
- Using the angle between a line and an edge instead of its projection.
- Reading lengths from the sketch.
- Rounding early.

## Exam technique

- **Calculate** the angle: say which triangle you use, for example "triangle GAC, right-angled at C".
- Write each right-angled triangle separately, with its sides.
- Keep full accuracy until the final step, then give lengths to 3 significant figures and angles to 1 decimal place.
- Check that your answer is plausible: the angle between a line and a plane is below 90°.

## More on this topic

Work through the [Pythagoras' theorem and trigonometry in 3D practice questions](/resources/cambridge-o-level-mathematics-4024-pythagoras-theorem-and-trigonometry-practice/) and recap with the [Pythagoras' theorem and trigonometry in 3D revision notes](/resources/cambridge-o-level-mathematics-4024-pythagoras-theorem-and-trigonometry-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 6.4 Pythagoras’ theorem and trigonometry.
