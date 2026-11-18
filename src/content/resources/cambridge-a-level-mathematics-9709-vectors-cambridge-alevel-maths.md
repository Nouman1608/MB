---
title: "Cambridge A Level Mathematics (9709): Vectors (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.7
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "vectors-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Paper 3 section 3.7 Vectors: position vectors, lines r = a + tb, skew lines, scalar product, feet of perpendiculars and 3D solids."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.7 Vectors** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). Vectors do not appear in Pure Mathematics 1 or 2, so this section is new at A Level. The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) shows two lines that intersect; this page builds the whole section from notation to the problems on solids that the syllabus names. Afterwards use the [3.7 revision notes](/resources/cambridge-a-level-mathematics-9709-vectors-cambridge-alevel-maths-revision-notes/) and the [3.7 practice questions](/resources/cambridge-a-level-mathematics-9709-vectors-cambridge-alevel-maths-practice/).

## What section 3.7 asks for

| Syllabus statement | Notes from the syllabus |
|---|---|
| Use standard notations: column vectors, xi + yj + zk, AB with an arrow, bold a | |
| Add, subtract and multiply by a scalar, and interpret geometrically | "OABC is a parallelogram" is equivalent to OB = OA + OC; the midpoint of AB has position vector ½(OA + OB). The general ratio theorem is not included |
| Magnitude, unit vectors, displacement and position vectors | In 2 or 3 dimensions |
| The line r = a + tb | Find it from a point and a direction, or from two points |
| Parallel, intersecting or skew lines; point of intersection | Shortest distance between skew lines and the common perpendicular are not required |
| Scalar product | Angle between two lines; foot of the perpendicular from a point to a line; 3D objects such as cuboids and tetrahedra. The vector product is not required |

MF19 gives a.b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b| cos θ.

## Position vectors, displacement and magnitude

If A and B have position vectors a and b, then AB = b − a. The magnitude of xi + yj + zk is √(x² + y² + z²), and the unit vector in the direction of v is v/|v|.

*Worked example 1.* A, B and C have coordinates (1, 2, 0), (4, 0, 3) and (2, 5, 1). Find the unit vector in the direction of AB and the position vector of D such that ABCD is a parallelogram.

```text
AB = (4 − 1, 0 − 2, 3 − 0) = (3, −2, 3)
|AB| = √(9 + 4 + 9) = √22,  unit vector (1/√22)(3i − 2j + 3k)
ABCD is a parallelogram, so DC = AB:
d = c − AB = (2, 5, 1) − (3, −2, 3) = (−1, 7, −2)
```

The order of letters matters: in ABCD the sides go A to B to C to D, so AB and DC are equal vectors, not AB and CD.

## The equation of a line

r = a + tb: a is the position vector of one point on the line, b is a direction vector, and t is a scalar parameter. Each value of t gives one point. Through A and B, use r = a + t(b − a).

To test whether a point lies on a line, find t from one component and check the other two.

## Parallel, intersecting or skew

1. **Parallel**: the direction vectors are multiples of each other. Check one point to see whether the lines are the same line.
2. **Not parallel**: set the components equal, solve two equations for s and t, then test the third.
3. If the third equation holds, the lines **intersect**; substitute to find the point. If it fails, the lines are **skew**.

*Worked example 2.* Show that l₁: r = (2i + k) + s(i + j − k) and l₂: r = (3j + 2k) + t(2i − j + k) are skew.

```text
Directions (1, 1, −1) and (2, −1, 1) are not multiples, so not parallel.
x: 2 + s = 2t
y:     s = 3 − t
Substitute: 2 + 3 − t = 2t  →  t = 5/3,  s = 4/3
z: l₁ gives 1 − s = −1/3;  l₂ gives 2 + t = 11/3
−1/3 ≠ 11/3, so the lines do not intersect. Not parallel and not
intersecting, so they are skew.
```

Both parts of the definition must be shown: "not parallel" **and** "do not meet".

## Angles with the scalar product

cos θ = (a.b)/(|a||b|). For the angle between two **lines**, use their direction vectors. If the scalar product is negative, the angle found is obtuse; the acute angle between the lines is 180° minus it.

*Worked example 3.* A cuboid OABCDEFG has O at the origin, A(4, 0, 0), C(0, 3, 0) and D(0, 0, 2), with B, E, F and G the remaining vertices so that F is (4, 3, 2) and G is (0, 3, 2). Find the acute angle between the diagonals OF and AG.

```text
OF = (4, 3, 2);  AG = G − A = (−4, 3, 2)
OF.AG = −16 + 9 + 4 = −3
|OF| = |AG| = √29
cos θ = −3/29   →   θ = 95.9°
Acute angle between the lines = 180° − 95.9° = 84.1°
```

In a solid, write down the coordinates of every vertex you need before computing anything; most errors come from a wrong vertex.

## The foot of the perpendicular

To find the foot F of the perpendicular from P to the line r = a + tb, write F in terms of t, then use PF.b = 0.

*Worked example 4.* Find the foot of the perpendicular from P(5, 1, 2) to the line r = (i + 2k) + t(2i + j − 2k), and the perpendicular distance from P to the line.

```text
F = (1 + 2t, t, 2 − 2t)
PF = F − P = (2t − 4, t − 1, −2t)
PF.(2, 1, −2) = 4t − 8 + t − 1 + 4t = 9t − 9 = 0   →   t = 1
F = (3, 1, 0)
PF = (−2, 0, −2),  distance = √8 = 2√2
```

The same F also gives the reflection of P in the line: P′ = 2F − P = (1, 1, −2).

## Common mistakes

- Using position vectors instead of direction vectors to find the angle between two lines.
- Calling lines skew after only showing they do not intersect, without checking they are not parallel.
- Solving for s and t from two equations and not testing the third.
- Writing AB as a − b instead of b − a.
- Giving the obtuse angle when the question asks for the acute angle between two lines.
- Using the vector product, which is not in the syllabus, when a scalar product is required.

## Exam technique

- **Show that the lines are skew**: state "not parallel" with a reason, solve two components, show the third fails, conclude.
- **Find the exact value of cos θ**: leave surds; do not convert to an angle.
- **Find the position vector**: answer as a vector, such as −i + 7j − 2k; **find the coordinates**: answer as a point.
- Use the same letter for different parameters only if you mean the same point: use s and t for two lines.
- Answers for angles in degrees are given to 1 decimal place unless stated.

## Frequently asked questions

**Do I need the vector product for 9709 Paper 3?**
No. The syllabus states that knowledge of the vector product is not required; use the scalar product for angles and perpendiculars.

**Is the shortest distance between skew lines on Paper 3?**
No. It is not required, and neither is the common perpendicular. You do need the perpendicular distance from a point to a line.

**How do I find the acute angle between two lines?**
Use the scalar product of the direction vectors. If cos θ is negative, subtract the angle from 180°, or take the modulus of the scalar product.

## Where to go next

- [3.7 revision notes](/resources/cambridge-a-level-mathematics-9709-vectors-cambridge-alevel-maths-revision-notes/)
- [3.7 practice questions](/resources/cambridge-a-level-mathematics-9709-vectors-cambridge-alevel-maths-practice/)
- Mixed questions: [Pure 3 trigonometry, vectors and complex numbers practice](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.7 Vectors.
