---
title: "Cambridge O Level Mathematics: Vectors in Two Dimensions: Column Vectors, Magnitude and Vector Geometry (4024)"
seoTitle: "O Level Maths 4024 Vectors Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Vectors in Two Dimensions: Column Vectors, Magnitude and Vector Geometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "vectors-in-two-dimensions-4024"
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "magnitude-of-a-vector-4024"
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "vector-geometry-4024"
description: "Study guide to column vectors, magnitude and vector geometry for Cambridge O Level Mathematics 4024, with worked examples on parallel and collinear proofs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide is aligned to the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. It covers sections 7.2 (vectors in two dimensions), 7.3 (magnitude of a vector) and 7.4 (vector geometry). The syllabus is not tiered, so every candidate meets all of it. Translation by a vector (section 7.1) is the starting point, so you may want to revisit that first.

Condensed recall is in the [revision notes](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and-revision-notes/) and exam-style questions are in the [practice set](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and-practice/). The course hub is at [Cambridge O Level Mathematics](/boards/cambridge/o-level/mathematics/) and the printable [checklist](/checklists/cambridge/o-level/mathematics/) lets you tick off each outcome. If you are unsure where you stand, take a free [10-minute diagnostic](/diagnostics/) first.

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 7.2 (1) | Describe a translation using a column vector, AB or a |
| 7.2 (2) | Add and subtract vectors |
| 7.2 (3) | Multiply a vector by a scalar |
| 7.3 | Calculate the magnitude of a vector (x, y) as √(x² + y²), using the notation \|a\| and \|AB\| |
| 7.4 (1) | Represent vectors by directed line segments |
| 7.4 (2) | Use position vectors |
| 7.4 (3) | Use the sum and difference of two or more vectors to express given vectors in terms of two coplanar vectors |
| 7.4 (4) | Use vectors to reason and solve geometric problems: show vectors are parallel, show 3 points are collinear, solve problems involving ratio and similarity |

Vectors are printed as AB or a. When you write by hand, put an arrow over AB and underline a, so that your marker can tell a vector from a number.

## Column vectors and translations (7.2)

A vector has a size and a direction. A column vector (x, y) is written with x above y:

```
(x)
(y)
```

The top number is the movement in the x-direction (right is positive, left is negative). The bottom number is the movement in the y-direction (up is positive, down is negative). This is the same notation a translation uses: a translation by (x, y) moves every point of a shape x units across and y units up, with no turning or resizing.

A vector can be named in two ways. The vector from A to B is AB, with the arrow running from the first letter to the last. A single bold letter such as a names a vector without saying where it starts. Two vectors are equal if they have the same size and direction, wherever they are drawn.

**Reversing:** BA = −AB. The column is the same with both signs changed.

### Worked example 1: describing and applying a translation

A translation maps A(2, −1) onto A'(−1, 4). (a) Describe it with a column vector. (b) Find the image of P(1, 2).

(a) Image minus original: x-change = −1 − 2 = −3, y-change = 4 − (−1) = 5. The vector is (−3, 5).

(b) Add the same vector to P: (1 + (−3), 2 + 5) = **(−2, 7)**.

## Adding, subtracting and scaling vectors (7.2)

Work on the top and bottom numbers separately.

```
a + b = (a₁ + b₁, a₂ + b₂)
a − b = (a₁ − b₁, a₂ − b₂)
k a   = (k a₁, k a₂)
```

A scalar is an ordinary number. Multiplying by 2 doubles the length and keeps the direction. Multiplying by −1 keeps the length and reverses the direction. Multiplying by ½ halves the length.

**The triangle rule.** Going from A to B and then from B to C is the same as going straight from A to C:

```
AB + BC = AC
```

This is the key idea for the whole unit. Each vector must start where the last one ended.

### Worked example 2: combining vectors

a = (4, −3) and b = (−2, 5). Find a + b, a − b and 3a − 2b.

```
a + b = (4 + (−2), −3 + 5) = (2, 2)
a − b = (4 − (−2), −3 − 5) = (6, −8)
3a = (12, −9)    2b = (−4, 10)
3a − 2b = (12 − (−4), −9 − 10) = (16, −19)
```

Answers: **(2, 2)**, **(6, −8)**, **(16, −19)**. The common slip is 12 − (−4): subtracting a negative adds.

## Magnitude of a vector (7.3)

The magnitude is the length of the vector. For the column vector (x, y), the vector is the hypotenuse of a right-angled triangle with sides x and y, so Pythagoras gives:

```
|(x, y)| = √(x² + y²)
```

Magnitudes are written with modulus signs: |a| is the magnitude of a, and |AB| is the magnitude of AB. A magnitude is a length, so it is never negative, and signs in the column vanish when squared.

### Worked example 3: finding a magnitude

(a) Find |(−7, 24)|. (b) Find |(7, −3)| to 3 significant figures. (c) The vector (k, 6) has magnitude 10, where k is a positive number. Find k.

(a) √(49 + 576) = √625 = **25**.

(b) √(49 + 9) = √58 = **7.62** to 3 s.f.

(c) k² + 36 = 100, so k² = 64 and k = **8**. (Without the "positive" condition, k = −8 would also work.)

Notice that |2a| = 2|a| but |a + b| is usually not |a| + |b|. Add the vectors first, then find the magnitude of the result.

## Directed line segments and position vectors (7.4 (1) and (2))

A directed line segment is a line with an arrow showing its direction. It represents a vector. Every arrow of the same length and direction represents the same vector.

A position vector fixes a point relative to the origin O. The position vector of A is OA, often written a. If A is the point (3, 1), then OA = (3, 1).

**The key result:** AB = OB − OA = b − a. Go back to the origin, then out to B.

The midpoint M of AB has position vector ½(a + b).

### Worked example 4: from points to vectors

OA = (3, 1) and OB = (−1, 5). Find AB, |AB| and the position vector of the midpoint M of AB.

```
AB = OB − OA = (−1 − 3, 5 − 1) = (−4, 4)
|AB| = √(16 + 16) = √32 = 4√2
OM = ½(OA + OB) = ½(2, 6) = (1, 3)
```

Answers: AB = **(−4, 4)**, |AB| = **4√2** (about 5.66), OM = **(1, 3)**.

## Expressing vectors in terms of two others (7.4 (3))

In most problems you are given two vectors that are not parallel, usually a and b, and must write other vectors in terms of them. Method:

1. Mark the known vectors on a sketch, with arrows.
2. Find a route from the start point to the end point along known vectors.
3. Add the vectors along the route. If you travel against an arrow, use the negative.
4. Simplify by collecting the a terms and the b terms.

For a point that divides a line in a ratio, find the fraction of the whole line first. If AP : PB = 2 : 3, then AP is 2/5 of AB.

### Worked example 5: a point on a line

In triangle OAB, OA = a and OB = b. The point P lies on AB with AP : PB = 2 : 3. Find OP in terms of a and b.

```
AB = b − a
AP = (2/5)(b − a)
OP = OA + AP = a + (2/5)(b − a)
   = a + (2/5)b − (2/5)a
   = (3/5)a + (2/5)b
```

Answer: **OP = (3/5)a + (2/5)b**. A quick check: the two fractions add to 1, as they must for a point on AB.

## Parallel vectors and collinear points (7.4 (4))

**Parallel.** Two vectors are parallel when one is a scalar multiple of the other. If AB = k CD, then AB is parallel to CD. Parallel vectors need not be equal in length, and k can be negative (opposite directions).

**Collinear.** Three points are collinear (lie on one straight line) if two of the vectors between them are parallel and they share a common point. For A, B, C: show AB = k BC, then say B is a common point.

Always finish with a written sentence. The working shows the vectors; the sentence gives the conclusion.

### Worked example 6: parallel and collinear

(a) AB = 6a − 9b and CD = 4a − 6b. Show that AB and CD are parallel.

AB = 3(2a − 3b) and CD = 2(2a − 3b). So AB = (3/2) CD. They are scalar multiples, so **AB is parallel to CD**.

(b) OP = 2a + b, OQ = 5a + 2b and OR = 11a + 4b. Show that P, Q and R are collinear.

```
PQ = OQ − OP = (5a + 2b) − (2a + b) = 3a + b
QR = OR − OQ = (11a + 4b) − (5a + 2b) = 6a + 2b = 2(3a + b)
```

QR = 2 PQ, so PQ and QR are parallel. Q lies on both, so **P, Q and R are collinear**, with PQ : QR = 1 : 2.

## Ratio and similarity (7.4 (4))

If a line joins points that divide two sides of a triangle in the same ratio from a shared vertex, it is parallel to the third side. The small triangle is then similar to the large one. If the lengths are in the ratio 1 : k, the areas are in the ratio 1 : k².

### Worked example 7: similar triangles from vectors

In triangle OAB, OA = a and OB = b. M is on OA with OM : MA = 2 : 3, and N is on OB with ON : NB = 2 : 3. (a) Show that MN is parallel to AB. (b) The area of triangle OAB is 50 cm². Find the area of triangle OMN.

(a) OM = (2/5)a and ON = (2/5)b.

```
MN = ON − OM = (2/5)b − (2/5)a = (2/5)(b − a) = (2/5) AB
```

MN is a scalar multiple of AB, so **MN is parallel to AB**, and MN = 2/5 of AB.

(b) Triangles OMN and OAB are similar with length ratio 2 : 5. The area ratio is 4 : 25, so the area of OMN is (4/25) × 50 = **8 cm²**.

## Common errors

- Writing AB = OA − OB. It is OB − OA: end minus start.
- Using AB when you mean BA. A reversed arrow reverses the sign.
- Squaring a negative incorrectly in a magnitude, for example √(x² + y²) with (−5)² written as −25.
- Adding magnitudes instead of adding vectors first.
- Claiming collinear from parallel alone. Parallel lines can be apart, so you need a shared point.
- Stopping at a calculation with no conclusion sentence in a "show that" or proof.
- Mixing up ratio parts. If OM : MA = 2 : 3, then OM is 2/5 of OA, not 2/3.

## Next steps

Work through the [revision notes](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and-revision-notes/), then try the [practice questions](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and-practice/). For related skills see [coordinate geometry practice](/resources/o-level-mathematics-coordinate-geometry-practice/), which supports finding lengths and midpoints, and [geometry practice](/resources/o-level-mathematics-geometry-practice/) for similarity. Past-paper links are collected on the [4024 past papers page](/resources/cambridge-o-level-mathematics-4024-past-papers/).

## Official syllabus

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge International. Sections 7.2, 7.3 and 7.4.
