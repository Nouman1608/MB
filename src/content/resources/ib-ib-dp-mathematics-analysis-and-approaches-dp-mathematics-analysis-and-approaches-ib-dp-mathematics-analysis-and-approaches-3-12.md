---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Vectors: concept, components and algebraic/geometric operations (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 -- Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-12"
description: "IB Maths AA HL 3.12 study guide: position and displacement vectors, components, magnitude, unit vectors, parallel vectors and vector proofs in geometry."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.12 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) introduces vectors: the concept of a vector, position and displacement vectors, representation by directed line segments, the base vectors i, j and k, components, and algebraic and geometric approaches to sums, differences, scalar multiples, magnitude and unit vectors, together with proofs of geometrical properties using vectors. It is additional higher level (AHL) content, examined at HL only, and everything later in the vectors strand builds on it.

This page goes deeper on 3.12 alone; the [HL vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/) covers the whole strand. Condense this page with the [3.12 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-12-revision-notes/) and test yourself with the [3.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-12-practice/).

Vectors are written in a row here, such as (3, −1, 2), to save space. In the exam, write them as column vectors.

## What a vector is

A **vector** has both magnitude and direction; a **scalar** has magnitude only. Displacement, velocity and force are vectors; distance, speed and mass are scalars.

A vector can be drawn as a **directed line segment**: an arrow whose length is the magnitude and whose arrowhead shows the direction. The vector from A to B is written AB (with an arrow above it in print and handwriting). Any two arrows with the same length and direction represent the **same** vector, wherever they are drawn. That is why the opposite sides of a parallelogram are equal as vectors.

Notation you must read and write:

- bold lower case, **v**, or underlined, v̲, in handwriting;
- components, v = (v₁, v₂, v₃);
- base vectors, v = v₁i + v₂j + v₃k, where i = (1, 0, 0), j = (0, 1, 0) and k = (0, 0, 1) are unit vectors along the axes.

So 4i − 2k means (4, 0, −2): a missing base vector means a zero component. In two dimensions, use i and j only.

## Position and displacement vectors

The **position vector** of a point A is the vector from the origin O to A, written OA = a. Its components are the coordinates of A.

A **displacement vector** joins two points: AB = b − a, "end minus start". The **distance** between A and B is the magnitude |AB|.

## The operations, algebraically and geometrically

| Operation | Algebra (components) | Geometry |
|---|---|---|
| Sum a + b | add components | triangle law: b placed at the end of a; or the diagonal of the parallelogram on a and b |
| Difference a − b | subtract components | a + (−b); the vector from the end of b to the end of a when both start at one point |
| Negative −v | change every sign | same length, opposite direction |
| Zero vector 0 | (0, 0, 0) | no length, no direction; v + (−v) = 0 |
| Scalar multiple kv | multiply every component by k | k > 0: same direction, length × k; k < 0: reversed |
| Magnitude \|v\| | √(v₁² + v₂² + v₃²) | length of the arrow |
| Unit vector | v / \|v\| | length 1, direction of v |

Two non-zero vectors are **parallel** when one is a scalar multiple of the other. If the parallel vectors also share a point, the points lie on one straight line: they are **collinear**.

## Worked examples

### Example 1: a vector of given length

Find the vector of magnitude 10 in the direction of v = (2, −1, 2).

```
|v| = √(4 + 1 + 4) = 3
unit vector = (1/3)(2, −1, 2)
required vector = 10 × (1/3)(2, −1, 2) = (20/3, −10/3, 20/3)
```

Make a unit vector first, then scale it. The opposite direction would be −(20/3, −10/3, 20/3).

### Example 2: completing a parallelogram

ABCD is a parallelogram with A(1, 2, 0), B(4, 3, −1) and C(6, 0, 2). Find D.

```
AD = BC, so d − a = c − b
d = a + c − b = (1 + 6 − 4, 2 + 0 − 3, 0 + 2 + 1) = (3, −1, 3)
Check: AB = (3, 1, −1) and DC = (6 − 3, 0 + 1, 2 − 3) = (3, 1, −1)
```

The letters go round the shape in order, so AB = DC and AD = BC. A sketch prevents pairing the wrong sides.

### Example 3: collinear points

Show that A(1, −1, 2), B(3, 3, 0) and C(6, 9, −3) are collinear, and find the ratio AB : BC.

```
AB = (2, 4, −2)       BC = (3, 6, −3) = (3/2)(2, 4, −2) = (3/2)AB
```

AB and BC are parallel and share the point B, so A, B and C are collinear. |BC| = (3/2)|AB|, so AB : BC = 2 : 3. Both conditions, parallel and a common point, must be stated.

### Example 4: an unknown component

Find the values of k for which |(k, 2, k − 1)| = 3.

```
k² + 4 + (k − 1)² = 9
2k² − 2k − 4 = 0  →  k² − k − 2 = 0  →  (k − 2)(k + 1) = 0
k = 2 or k = −1
```

Square both sides of a magnitude equation; never "take the magnitude" component by component.

### Example 5: a point dividing a segment

A(2, 0, 5) and B(10, 4, −3). P lies on AB with AP : PB = 1 : 3. Find P.

```
AP is a quarter of AB, so p = a + (1/4)(b − a)
p = (2, 0, 5) + (1/4)(8, 4, −8) = (2, 0, 5) + (2, 1, −2) = (4, 1, 3)
```

The midpoint of AB is the special case p = a + (1/2)(b − a) = (a + b)/2.

### Example 6: a vector proof

Prove that the diagonals of a parallelogram bisect each other.

```
Let OABC be a parallelogram with OA = a and OC = c. Then OB = a + c.
Midpoint of OB:  (a + c)/2
Midpoint of AC:  a + (1/2)(c − a) = (a + c)/2
```

The two midpoints have the same position vector, so they are the same point: each diagonal passes through the midpoint of the other.

## Writing a vector proof

1. Name the given vectors, such as OA = a and OC = c, and draw a labelled diagram.
2. Write every vector you need in terms of the given ones, using displacement = end − start.
3. Show the property: a scalar multiple for parallel lines, equal position vectors for the same point, equal vectors for equal and parallel sides.
4. State the conclusion in words, including any shared point.

Proofs that use the scalar product to show perpendicularity belong to [section 3.13](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13/).

## Common mistakes

- Writing AB = a − b. It is b − a.
- Calling three points collinear from parallel vectors alone, without the common point.
- Adding magnitudes: |a + b| is not |a| + |b| unless a and b have the same direction.
- Forgetting a zero component: 3i + k is (3, 0, 1), not (3, 1).
- Treating a point and a vector as the same object in a proof without saying "position vector".
- Taking a parallelogram's vertices out of order.

## Exam technique

- **Write down** a displacement vector: no working is needed, but write it as a column.
- **Find** a magnitude: show the square root expression before the value; leave surds exact unless told otherwise.
- **Show that** points are collinear or lines parallel: give the scalar multiple explicitly and name the common point.
- **Prove** a geometrical property: follow the four steps above, and finish with a sentence.
- **Hence**: an expression such as OM = (a + b)/2 from one part is meant to be reused in the next.

## Where to go next

- Recall the facts with the [3.12 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-12-revision-notes/) and practise with the [3.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-12-practice/).
- Continue to the [3.13 scalar product guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13/).
