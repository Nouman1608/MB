---
title: "Edexcel International GCSE Mathematics A (4MA1): Transformation geometry"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Vectors and transformation geometry"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 5.2
syllabusTopics:
  - qualification: "igcse"
    topic: "vectors-and-transformation-geometry-edexcel-igcse-maths"
    subtopic: "transformation-geometry-edexcel-igcse-maths"
description: "Study guide for Edexcel IGCSE Maths 4MA1 section 5.2: rotations, reflections, translations and enlargements, finding centres and describing fully."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into section 5.2, Transformation geometry, of topic 5 (Vectors and transformation geometry) in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017). Section 5.2 is Foundation Tier content. The Higher Tier entry says "See Foundation Tier", so every candidate needs it.

The [Vectors and transformation geometry study guide](/resources/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry/) sets out the coordinate rules for each transformation. This page concentrates on working backwards: finding a centre of rotation, a mirror line, a translation vector or a centre of enlargement from an object and its image, and describing the single transformation that replaces two. Use it with the [Transformation geometry revision notes](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry-edexcel-igcse-maths-revision-notes/) and the [Transformation geometry practice questions](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry-edexcel-igcse-maths-practice/).

## What the specification asks

| Statements | Content |
|---|---|
| 5.2 A–C | Rotations are specified by a centre and an angle; rotate a shape about a point; anticlockwise is a positive angle and clockwise is negative |
| 5.2 D–E | Reflections are specified by a mirror line (such as x = 1, y = 2, y = x, y − x = 0); construct a mirror line given an object, and reflect a shape given a mirror line |
| 5.2 F–H | Translations are specified by a distance and direction; translate a shape; use column vectors in translations |
| 5.2 I | Rotations, reflections and translations preserve length and angle, so the image is congruent to the object |
| 5.2 J–L | Enlargements are specified by a centre and a positive scale factor (including fractions); they preserve angles but not lengths; enlarge with or without a centre given |
| 5.2 M | Identify and give complete descriptions of transformations |

Column vectors are written on one line here as (x, y), across first.

## Rotations

### Half turns are the quickest

A rotation of 180° needs no direction. About a centre (p, q):

```
(x, y) -> (2p − x, 2q − y)
```

**Worked example 1.** Rotate the triangle with vertices (3, 1), (5, 1) and (5, 4) through 180° about (1, 2).

```
(3, 1) -> (2 − 3, 4 − 1) = (−1, 3)
(5, 1) -> (2 − 5, 4 − 1) = (−3, 3)
(5, 4) -> (2 − 5, 4 − 4) = (−3, 0)
```

The centre is the midpoint of each point and its image: the midpoint of (3, 1) and (−1, 3) is (1, 2). ✓

### Finding the centre and angle of a rotation

**Worked example 2.** Triangle A has vertices (1, 1), (3, 1) and (1, 2). Triangle B has vertices (5, 1), (5, 3) and (4, 1). Describe fully the single transformation that maps A onto B.

**Step 1: the angle.** The side from (1, 1) to (3, 1) points right, as (2, 0). Its image, from (5, 1) to (5, 3), points up, as (0, 2). Turning "right" into "up" is a quarter turn anticlockwise: **+90°**.

**Step 2: the centre.** The centre is the same distance from every point as from its image, so it lies on the perpendicular bisector of each object–image pair (the construction from section 4.5).

```
(1, 1) and (5, 1): midpoint (3, 1), segment horizontal -> bisector x = 3
(3, 1) and (5, 3): midpoint (4, 2), segment has gradient 1 -> bisector y = −x + 6
meet where x = 3: y = 3
```

The centre is **(3, 3)**. Check with the third vertex: (1, 2) − (3, 3) = (−2, −1); turning +90° gives (1, −2); adding (3, 3) gives (4, 1). ✓

**Answer: rotation, 90° anticlockwise (or +90°), centre (3, 3).** On a grid, tracing paper does the same job: guess a centre, pin it, turn 90° and see whether the tracing lands on B.

## Reflections

### Finding a mirror line

The mirror line is the perpendicular bisector of the segment joining any point to its image.

- (−1, 7) maps to (−1, 1): the points are directly above each other, so the mirror line is horizontal, halfway: **y = 4**.
- (1, 4) maps to (4, 1) and (2, 6) maps to (6, 2): each image swaps the coordinates, and both midpoints, (2.5, 2.5) and (4, 4), lie on **y = x** (also written y − x = 0).

With the line known, reflecting is quick: in y = 4, (x, y) goes to (x, 8 − y); in y = x, (x, y) goes to (y, x).

### Orientation is a clue

Label an object's vertices A, B, C going anticlockwise. After a rotation or translation, the images A′, B′, C′ still go anticlockwise. After a reflection they go **clockwise**. If the image is congruent and "flipped", the transformation must be a reflection.

## Translations

A translation by (a, b) moves every point a across and b up. To find the vector, use image minus object:

```
(2, 5) -> (−1, 9): vector = (−1 − 2, 9 − 5) = (−3, 4)
```

The translation that moves the image back (the inverse) has the opposite vector, (3, −4). Two translations in a row add: (−3, 4) followed by (5, 1) is the single translation (2, 5).

## Enlargements

An enlargement with centre C and scale factor k sends each point P to

```
P′ = C + k(P − C)
```

- k > 1: the image is bigger and further from the centre.
- 0 < k < 1: the image is smaller and closer to the centre.
- Lengths are multiplied by k; angles are unchanged; the image is similar, not congruent.
- "Without a centre given" (5.2 L) means draw the image anywhere, with every length multiplied by k.

**Worked example 3.** Enlarge the triangle with vertices (2, 3), (3, 3) and (2, 5) by scale factor 3, centre (1, 2).

```
P − C:      (1, 1), (2, 1), (1, 3)
× 3:        (3, 3), (6, 3), (3, 9)
+ C:        (4, 5), (7, 5), (4, 11)
```

The side of length 1 becomes 3, and the side of length 2 becomes 6.

### Finding the centre and scale factor

**Worked example 4.** Shape P has vertices (5, 7), (9, 7) and (5, 9). Shape Q has vertices (2, 3), (4, 3) and (2, 4). Describe fully the single transformation that maps P onto Q.

```
scale factor: side (5, 7)-(9, 7) has length 4; its image (2, 3)-(4, 3) has length 2
k = 2 ÷ 4 = ½
```

On a grid, draw straight lines through each vertex and its image; they meet at the centre. By algebra, from P′ = C + k(P − C), the centre is C = (P′ − kP) ÷ (1 − k):

```
C = ((2, 3) − ½(5, 7)) ÷ ½ = (−0.5, −0.5) × 2 = (−1, −1)
check (9, 7): (−1, −1) + ½(10, 8) = (4, 3) ✓
```

**Answer: enlargement, scale factor ½, centre (−1, −1).**

## Two transformations, one description

**Worked example 5.** Triangle T has vertices (1, 1), (3, 1) and (1, 2). T is reflected in the line x = 0 to give U, then U is reflected in the line x = 3 to give V. Describe fully the single transformation that maps T onto V.

```
reflect in x = 0: (x, y) -> (−x, y)       U: (−1, 1), (−3, 1), (−1, 2)
reflect in x = 3: (x, y) -> (6 − x, y)    V: (7, 1), (9, 1), (7, 2)
```

Every vertex of V is 6 to the right of the matching vertex of T, and V has the same orientation as T. **Answer: translation by the vector (6, 0).** Two reflections in parallel lines always combine to a translation, by twice the distance between the lines.

## Complete descriptions: the checklist

| Transformation | Every fact you must give |
|---|---|
| Rotation | the word rotation, the angle, the direction (or sign), the centre |
| Reflection | the word reflection, the equation of the mirror line |
| Translation | the word translation, the column vector |
| Enlargement | the word enlargement, the scale factor, the centre |

## Exam technique

- **"Describe fully the single transformation"**: one transformation only, with all its facts. Two transformations, even if they work, score nothing.
- **"On the grid, draw"**: plot each image vertex and label the image as the question asks.
- Write the centre as coordinates and the mirror line as an equation, not "the y-axis line" or "the middle".

## Common mistakes

- Giving a rotation angle with no direction (except 180°).
- Taking object minus image for a translation vector.
- Measuring an enlargement from the origin instead of the given centre.
- Thinking a scale factor of ½ is a "reduction" with a different name: in 4MA1 it is still an enlargement.
- Naming two transformations when the question asks for one.

## Next steps

Condense the rules with the [Transformation geometry revision notes](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry-edexcel-igcse-maths-revision-notes/), then try the [Transformation geometry practice questions](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry-edexcel-igcse-maths-practice/). Higher candidates can continue with the [Vectors study guide](/resources/edexcel-igcse-mathematics-4ma1-vectors-edexcel-igcse-maths/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 5, Vectors and transformation geometry: 5.2 Transformation geometry, statements A to M (Foundation Tier content; the Higher Tier refers to the Foundation Tier).
