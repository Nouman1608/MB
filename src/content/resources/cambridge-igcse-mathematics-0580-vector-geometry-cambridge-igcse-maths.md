---
title: "Cambridge IGCSE Mathematics (0580): Vector geometry"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 7 – Transformations and vectors"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 7.4
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "vector-geometry-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E7.4: position vectors, routes in terms of two vectors, points dividing a line in a ratio, and proving lines parallel or collinear."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E7.4 Vector geometry** in Topic 7 Transformations and vectors of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator). It is usually the last part of a vectors question and carries the reasoning marks.

The topic-level [transformations and vectors study guide](/resources/igcse-mathematics-transformations-and-vectors/) shows one parallel-lines proof. This page builds the full toolkit: position vectors, ratio division, collinearity, trapeziums and parallelograms, and similar triangles. Revise with the [vector geometry revision notes](/resources/cambridge-igcse-mathematics-0580-vector-geometry-cambridge-igcse-maths-revision-notes/) and practise with the [vector geometry practice questions](/resources/cambridge-igcse-mathematics-0580-vector-geometry-cambridge-igcse-maths-practice/).

## What subtopic E7.4 asks for

| Statement | What you must be able to do |
|---|---|
| E7.4.1 | Represent vectors by directed line segments |
| E7.4.2 | Use position vectors |
| E7.4.3 | Use the sum and difference of two or more vectors to express given vectors in terms of two coplanar vectors |
| E7.4.4 | Use vectors to reason and to solve geometric problems |

The syllabus gives examples for E7.4.4: show that vectors are parallel, show that three points are collinear, and solve vector problems involving ratio and similarity.

## The building blocks

**Directed line segments.** The vector AB (with an arrow) is the line segment from A to B with a direction. BA is the same segment the other way, so BA = −AB.

**Position vectors.** The position vector of a point A is OA, the vector from the origin O to A. It is often written **a**. If A is (3, −2), its position vector is the column vector (3, −2).

**The key route rule.** To get from A to B, go back to O and out again:

```
AB = AO + OB = −a + b = b − a
```

In words: **end position vector minus start position vector**.

**Routes.** Any vector in a diagram can be built by following a path along known vectors, adding them as you go and using a minus sign for any arrow you travel against.

## Points that divide a line in a ratio

If P lies on AB with AP : PB = m : n, then P is m/(m + n) of the way from A to B:

```
AP = (m / (m + n)) AB
OP = OA + AP = a + (m / (m + n))(b − a)
```

For a midpoint, m : n = 1 : 1, so OP = a + ½(b − a) = ½(a + b).

### Worked example 1: routes in a parallelogram (non-calculator)

OABC is a parallelogram with OA = **a** and OC = **c**. M is the midpoint of AB. N lies on CB with CN : NB = 2 : 1. Find, in terms of **a** and **c**, (a) OM, (b) ON, (c) MN.

```
Opposite sides of a parallelogram are equal vectors:
AB = OC = c   and   CB = OA = a

(a) OM = OA + ½AB = a + ½c
(b) ON = OC + ⅔CB = c + ⅔a
(c) MN = ON − OM = (⅔a + c) − (a + ½c) = −⅓a + ½c
```

Collect the **a** terms and the **c** terms separately, exactly as you would collect like terms in algebra.

## Parallel vectors

Two vectors are **parallel** if one is a scalar multiple of the other. To show it, write both in terms of the same base vectors and find the multiplier.

```
If PQ = k × RS, then PQ is parallel to RS, and PQ is k times as long.
```

For example, 6**b** − 3**a** = −3(**a** − 2**b**), so these vectors are parallel, pointing in opposite directions, with lengths in the ratio 3 : 1.

### Worked example 2: a trapezium becomes a parallelogram (non-calculator)

OABC is a quadrilateral with OA = **a**, OC = **c** and CB = 2**a**. D is the midpoint of CB.

(a) Explain why OABC is a trapezium. (b) Find AB and OD. (c) What type of quadrilateral is OABD? Give a reason.

```
(a) CB = 2a = 2 × OA, so CB is parallel to OA (and twice as long).
    One pair of parallel sides: a trapezium.

(b) AB = AO + OC + CB = −a + c + 2a = a + c
    OD = OC + CD = c + ½(2a) = c + a

(c) OD = AB, so OD and AB are parallel and equal in length.
    D lies on CB, which is parallel to OA, so DB is parallel to OA.
    Both pairs of opposite sides are parallel: OABD is a parallelogram.
```

## Collinear points

Three points are **collinear** if they lie on one straight line. To show P, Q and R are collinear:

1. Find two vectors that **share a point**, such as PQ and PR (or PQ and QR).
2. Show one is a scalar multiple of the other, so they are parallel.
3. State the conclusion: parallel **and** sharing the point P, so P, Q and R are collinear.

The shared point matters. Parallel vectors alone could lie on two separate parallel lines.

### Worked example 3: with column vectors (non-calculator)

A, B and C have position vectors (1, 3), (4, 5) and (10, 9). Show that A, B and C are collinear and find AB : BC.

```
AB = (4 − 1, 5 − 3) = (3, 2)
AC = (10 − 1, 9 − 3) = (9, 6) = 3 × (3, 2) = 3AB
AB and AC are parallel and share point A, so A, B and C are collinear.
AC = 3AB, so BC = 2AB and AB : BC = 1 : 2.
```

### Worked example 4: with a and b (non-calculator)

OA = **a** and OB = **b**. P lies on AB with AP : PB = 1 : 3. The point Q has OQ = 3**a** + **b**. Show that O, P and Q are collinear and find OP : PQ.

```
OP = a + ¼(b − a) = ¾a + ¼b
4 × OP = 3a + b = OQ
OQ = 4 OP: parallel, and both start at O, so O, P and Q are collinear.
OP : PQ = 1 : 3
```

Spotting the multiplier is easier once both vectors are simplified. Write ¾**a** + ¼**b** as ¼(3**a** + **b**) and it is clear.

## Unknown scalars

If two vectors must be parallel, their **a** and **b** coefficients must be in the same ratio.

### Worked example 5 (non-calculator)

OP = **a** + 2**b** and OQ = k**a** + 6**b**. O, P and Q are collinear. Find k.

```
OQ must be a multiple of OP: k a + 6b = m(a + 2b)
b terms: 6 = 2m, so m = 3
a terms: k = m = 3
```

**k = 3**, and OQ = 3OP.

## Ratio and similarity

When a line is parallel to a side of a triangle, the vectors show the scale factor of the similar triangles directly.

### Worked example 6: similar triangles (non-calculator)

OA = **a** and OB = **b**. C is the point with OC = 3**a** and D is the point with OD = 3**b**.

(a) Show that CD is parallel to AB. (b) Find the ratio of the area of triangle OCD to the area of triangle OAB.

```
(a) AB = b − a
    CD = 3b − 3a = 3(b − a) = 3AB
    CD is a multiple of AB, so they are parallel.

(b) Triangles OAB and OCD are similar with length scale factor 3.
    Area ratio = 3² : 1² = 9 : 1, so OCD : OAB = 9 : 1.
```

## Common mistakes

- Writing AB = **a** − **b**. It is end minus start: **b** − **a**.
- Using the wrong fraction for a ratio: AP : PB = 2 : 3 means AP = ⅖AB, not ⅔AB.
- Leaving an answer as a mixture, such as OA + ½AB, instead of simplifying in terms of the given vectors.
- Claiming collinearity from parallel vectors without a shared point.
- Showing two vectors are parallel without stating the multiplier or the conclusion.
- Losing a sign when travelling against an arrow.

## Exam technique

- **Find, in terms of a and b**: give the simplest form, with like terms collected.
- **Show that** lines are parallel or points collinear: write both vectors, the multiplier, and a sentence of conclusion naming the shared point if needed.
- Draw arrows on the diagram for each vector you use; it prevents sign errors on long routes.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 7 Transformations and vectors, E7.4 Vector geometry (Extended subject content), with C7.4 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
