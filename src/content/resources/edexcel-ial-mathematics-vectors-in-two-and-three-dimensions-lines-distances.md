---
title: "Pearson Edexcel International Advanced Level Mathematics: Vectors, lines and the scalar product (YMA01)"
seoTitle: "Edexcel IAL Maths P4 Vectors Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Vectors in two and three dimensions: lines, distances and the scalar product"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 154
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-vectors-edexcel-alevel-maths"
description: "Study guide to vectors in 2D and 3D for Pearson Edexcel IAL Mathematics P4: magnitude, position vectors, lines, skew lines and the scalar product."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches Unit P4 section 7 (topics 7.1 to 7.7, Vectors) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that P4 is a compulsory unit for IAL Mathematics and Pure Mathematics, and that its IAS weighting is N/A, so this content is not part of IAS. Coordinate geometry from [Pure Mathematics 1](/resources/a-level-edexcel-mathematics-pure-mathematics-1/) and [Pure Mathematics 2](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) is useful background, since lines in the (x, y) plane are the two-dimensional case of this work.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances-practice/). The course hub is [/boards/edexcel/a-level/mathematics/](/boards/edexcel/a-level/mathematics/), the printable checklist is [/checklists/edexcel/a-level/mathematics/](/checklists/edexcel/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/) show where to start.

## What section 7 covers

| Ref | You must be able to |
|---|---|
| 7.1 | Use vectors in two and three dimensions, written with i, j and k |
| 7.2 | Find the magnitude \|a\| and a unit vector in the direction of a |
| 7.3 | Add vectors and multiply by scalars, and explain both geometrically |
| 7.4 | Use position vectors, with OB − OA = AB = b − a |
| 7.5 | Find the distance between two points |
| 7.6 | Write vector equations of lines, r = a + tb and r = c + t(d − c), and decide whether two lines are parallel, intersecting or skew |
| 7.7 | Use the scalar product to find the angle between two lines and to test for perpendicular vectors |

## Vectors, magnitude and unit vectors (7.1 to 7.3)

A vector has magnitude and direction. In three dimensions, the vectors i, j and k have length 1 and point in the positive x, y and z directions, so a = a₁i + a₂j + a₃k. Two vectors are equal when all three components match.

- Add and subtract component by component.
- Multiplying by a scalar λ multiplies every component. The result is parallel to the original, in the same direction if λ > 0 and the opposite direction if λ < 0.
- Geometrically, a + b is found by joining the vectors head to tail, and a − b is a + (−b).

The magnitude is |a| = √(a₁² + a₂² + a₃²). A vector with magnitude 1 is a unit vector. To get one parallel to a, divide a by its own length: â = a/|a|. The notation |AB| means the magnitude of the vector AB.

**Worked example 1.** Let a = 12i + 4j − 3k.

```
|a| = √(144 + 16 + 9) = √169 = 13
â = (12i + 4j − 3k)/13
```

A vector of magnitude 26 in the opposite direction to a is −2a, because |−2a| = 2 × 13 = 26. So it is −24i − 8j + 6k.

## Position vectors and distance (7.4 and 7.5)

The position vector of a point A is OA = a, the vector from the origin O to A. For points A and B,

```
AB = OB − OA = b − a
```

Read this as "end minus start". The vector BA is the negative of AB.

The distance between (x₁, y₁, z₁) and (x₂, y₂, z₂) is d, where

```
d² = (x₁ − x₂)² + (y₁ − y₂)² + (z₁ − z₂)²
```

This is |AB|, the magnitude of the vector between the points. It does not matter which way round you subtract, because the components are squared.

**Worked example 2.** A is (3, −2, 4) and B is (9, 2, 16).

```
AB = (9 − 3)i + (2 − (−2))j + (16 − 4)k = 6i + 4j + 12k
|AB|² = 36 + 16 + 144 = 196, so |AB| = 14
```

The midpoint M has position vector (a + b)/2 = (6, 0, 10). The point P that splits AB in the ratio 3 : 1, measured from A, lies three quarters of the way along:

```
p = a + (3/4)AB = (3i − 2j + 4k) + (3/4)(6i + 4j + 12k) = 7.5i + j + 13k
```

**Worked example 3.** C is (−1, 2, 0) and D is (3, −2, 5). Then CD = 4i − 4j + 5k, and |CD| = √(16 + 16 + 25) = √57. Leave a surd like this unless the question asks for a decimal.

## Vector equations of lines (7.6)

A line is fixed by one point on it and a direction. If A has position vector a and the line is parallel to b, then

```
r = a + tb
```

where t is a scalar parameter. Each value of t gives the position vector of one point on the line. The vector b is the direction vector. Any non-zero multiple of b describes the same line direction, so 2b and −b are equally valid.

If you know two points C and D, the direction is d − c, and the line is

```
r = c + t(d − c)
```

Here t = 0 gives C and t = 1 gives D. For C and D in worked example 3, the line is r = (−i + 2j) + t(4i − 4j + 5k).

To test whether a point lies on a line, equate the three components. You need a single value of t that works for all three.

### Parallel, intersecting or skew

Two lines in three dimensions fall into exactly one of these cases:

1. **Parallel:** the direction vectors are scalar multiples of each other.
2. **Intersecting:** not parallel, and there is a point on both lines.
3. **Skew:** not parallel, and no common point.

In two dimensions, non-parallel lines always meet. In three dimensions they can miss each other, which is why skew lines exist.

**Method for intersection.** Write the lines with different parameters, say t and s. Equate the i, j and k components. Solve two of the three equations for t and s, then substitute into the third as a check. If it holds, the lines meet, and you substitute back to get the point. If it fails, the lines are skew (given they are not parallel).

**Worked example 4.** Let

```
l₁: r = (i + 2j − k) + t(3i − j + 2k)
l₂: r = (2i − 5j + 5k) + s(i + 3j − 2k)
```

The directions 3i − j + 2k and i + 3j − 2k are not multiples of each other, so the lines are not parallel. Equate components:

```
i:  1 + 3t = 2 + s
j:  2 − t  = −5 + 3s
k: −1 + 2t = 5 − 2s
```

The i equation gives s = 3t − 1. Put that in the j equation: 2 − t = −5 + 9t − 3, so 10 = 10t, t = 1 and s = 2. Check k: left side −1 + 2 = 1, right side 5 − 4 = 1. It holds, so the lines intersect. The point is (1 + 3, 2 − 1, −1 + 2) = (4, 1, 1).

Now change l₂ to start at 2i − 5j + 6k, keeping the same direction. The i and j equations still give t = 1, s = 2. The k equation now reads 1 on the left and 6 − 4 = 2 on the right. It fails, so the new line and l₁ are skew.

Parallel lines can also be the same line. Two parallel lines are identical only if a point of one lies on the other, so check that as well when a question asks whether they coincide.

## The scalar product (7.7)

For a = a₁i + a₂j + a₃k and b = b₁i + b₂j + b₃k, the scalar product (written a.b in the specification) is

```
a·b = a₁b₁ + a₂b₂ + a₃b₃
```

The result is a number, not a vector. For OA = a and OB = b, the specification gives

```
cos ∠AOB = (a·b)/(|a||b|)
```

The same formula gives the angle θ between any two vectors placed tail to tail, and can be rearranged as a·b = |a||b| cos θ.

If a and b are non-zero and a·b = 0, then cos θ = 0 and the vectors are perpendicular. This is the standard test, and it also works in reverse.

**Worked example 5 (angle in a triangle).** B is (2, 1, 3), A is (5, 3, 9) and C is (4, −2, 9). Find angle ABC.

```
BA = 3i + 2j + 6k,  |BA| = √(9 + 4 + 36) = 7
BC = 2i − 3j + 6k,  |BC| = √(4 + 9 + 36) = 7
BA·BC = 6 − 6 + 36 = 36
cos ∠ABC = 36/(7 × 7) = 36/49
∠ABC = 42.7° (1 d.p.)
```

Both vectors must start at B, because the angle is at B. Using AB instead of BA would change the sign of one vector and give the supplementary angle.

### Angle between two lines

Use the direction vectors only. The position vectors a and c in the equations play no part in the angle.

**Worked example 6.** For l₁ and l₂ in worked example 4, d₁ = 3i − j + 2k and d₂ = i + 3j − 2k.

```
d₁·d₂ = 3 − 3 − 4 = −4
|d₁| = √14,  |d₂| = √14
cos θ = −4/14 = −2/7,  θ = 106.6° (1 d.p.)
```

The directions make 106.6°, so the lines make the acute angle 180° − 106.6° = **73.4°** with each other. When a question asks for the angle between two lines, give the acute angle unless the context says otherwise.

### Perpendicular from a point to a line

To find the foot F of the perpendicular from P to a line with direction d, write F in terms of t, form PF, and solve PF·d = 0.

**Worked example 7.** P is (8, 3, 3). Find the foot of the perpendicular on l₁ from worked example 4, and the distance from P to l₁.

```
F = (1 + 3t, 2 − t, −1 + 2t)
PF = F − P = (3t − 7)i − (t + 1)j + (2t − 4)k
PF·d₁ = 3(3t − 7) + (t + 1) + 2(2t − 4) = 14t − 28 = 0, so t = 2
F = (7, 0, 3)
PF = −i − 3j + 0k, so the distance is |PF| = √10
```

## Common errors

- Subtracting the wrong way round, so AB becomes BA. Write "end minus start" before you calculate.
- Calling a vector a unit vector without dividing every component by the magnitude.
- Using one parameter for both lines. Use t and s, or you will force the two points to share a parameter value.
- Declaring lines intersecting after solving only two equations. The third equation is the test.
- Forgetting that skew lines must also be non-parallel.
- Giving an obtuse angle between lines when the question wants the angle between the lines themselves.
- Taking the angle at the wrong vertex by using vectors that do not both start there.

## Next steps

Try the [practice questions](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances-practice/), then keep the [revision notes](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances-revision-notes/) for the final weeks.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4, section 7 (Vectors).
