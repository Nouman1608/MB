---
title: "OCR GCSE Mathematics: Isometric transformations and vectors (J560)"
seoTitle: "OCR GCSE Maths Isometric Transformations and Vectors"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Isometric transformations and vectors"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 59
syllabusTopics:
  - qualification: "gcse"
    topic: "congruence-and-similarity-ocr-gcse-maths"
    subtopic: "plane-isometric-transformations-ocr-gcse-maths"
  - qualification: "gcse"
    topic: "congruence-and-similarity-ocr-gcse-maths"
    subtopic: "plane-vector-geometry-ocr-gcse-maths"
description: "Study guide to reflections, rotations, translations, combined transformations and column vectors for OCR GCSE Mathematics, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is for OCR GCSE (9-1) Mathematics, aligned to the OCR specification Version 2.1 (August 2026). It covers sections 9.01a to 9.01d (plane isometric transformations) and 9.03a and 9.03b (plane vector geometry). Most of the content is for both tiers. Combinations of transformations (9.01d) and the use of vectors in geometric arguments and proofs (9.03a) are **Higher tier only**.

Check your progress with the [printable checklist](/checklists/ocr/gcse/mathematics/) and browse the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/). Then use the [revision notes](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors-revision-notes/) and the [practice questions](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors-practice/). To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What this unit covers

| Section | What you must be able to do | Tier |
|---|---|---|
| 9.01a | Reflect a shape in a mirror line; identify a mirror line x = a, y = b or y = ± x | Both |
| 9.01b | Rotate a shape about a centre through a multiple of 90°; identify centre, angle and sense | Both |
| 9.01c | Describe and perform a translation using a column vector | Both |
| 9.01d | Perform a sequence of transformations, describe the single result, and state what changes and what stays invariant | Higher tier only |
| 9.03a | Add, subtract and multiply vectors by a scalar | Both |
| 9.03a | Use vectors in geometric arguments and proofs | Higher tier only |
| 9.03b | Write a 2D vector as a column vector and draw it on a grid | Both |

A transformation is isometric when it keeps every length and angle, so the image matches the object exactly in shape and size. Reflections, rotations and translations are isometric. Enlargement is not (section 9.04).

## Reflection (9.01a)

A reflection needs a mirror line. A point and its image lie equally far from the line, on opposite sides.

Mirror lines you must handle are x = a (vertical), y = b (horizontal) and the diagonals y = x and y = −x.

- In x = a, the x-coordinate becomes 2a − x and y stays the same.
- In y = b, the y-coordinate becomes 2b − y and x stays the same.
- In y = x, the coordinates swap: (x, y) goes to (y, x).
- In y = −x, they swap and change sign: (x, y) goes to (−y, −x).

You can count squares instead. The rules are a check.

### Worked example: reflecting

Triangle A has vertices (−3, 1), (−1, 1) and (−1, 4). Reflect it in y = −1.

```
Distances above the line y = −1:  2, 2 and 5
(−3, 1): 2 above, so image 2 below the line: (−3, −3)
(−1, 1): 2 above, so image (−1, −3)
(−1, 4): 5 above, so image 5 below: (−1, −6)
```

The rule agrees: 2b − y = −2 − 4 = −6.

### Identifying a mirror line

Pick a point and its image. The mirror line is the perpendicular bisector of the line joining them.

Triangle T has vertices (1, 4), (4, 4) and (4, 6). Its image has vertices (1, 0), (4, 0) and (4, −2). The point (1, 4) goes to (1, 0). These share an x-coordinate, so the mirror line is horizontal. The middle of the y-values is (4 + 0) ÷ 2 = 2. The mirror line is **y = 2**.

For a diagonal mirror, (1, 4) mapping to (4, 1) means y = x. Mapping to (−4, −1) would mean y = −x.

## Rotation (9.01b)

A rotation needs three things: a centre, an angle and a sense (clockwise or anti-clockwise). The specification asks for multiples of 90°, so 90°, 180° and 270°. A 270° anticlockwise turn is the same as 90° clockwise. A 180° turn needs no sense.

To rotate a point, find its position relative to the centre, turn that arrow, then add the centre back.

| Turn about the centre | Relative position (dx, dy) becomes |
|---|---|
| 90° clockwise | (dy, −dx) |
| 90° anticlockwise | (−dy, dx) |
| 180° | (−dx, −dy) |

Tracing paper also works: pin the centre, turn the paper, mark the image.

### Worked example: rotating

Rotate triangle S with vertices (2, 1), (5, 1) and (5, 3) through 90° clockwise about (0, −2).

```
Relative to (0, −2):  (2, 3)   (5, 3)   (5, 5)
Turn 90° clockwise:   (3, −2)  (3, −5)  (5, −5)
Add the centre back:  (3, −4)  (3, −7)  (5, −7)
```

The image has vertices (3, −4), (3, −7) and (5, −7).

### Worked example: finding the centre, angle and sense

Triangle K has vertices (1, 2), (3, 2) and (3, 5). Its image has vertices (1, −2), (1, 0) and (−2, 0).

1. Every point is as far from the centre as its image is, so the centre is on the perpendicular bisector of each point-and-image join.
2. (1, 2) and (1, −2): the bisector is y = 0.
3. (3, 5) and (−2, 0): the midpoint is (0.5, 2.5) and the chord has gradient 1, so the bisector has gradient −1: y = 3 − x. Where y = 0, x = 3.
4. The centre is (3, 0). From the centre, (1, 2) is at (−2, 2) and its image is at (−2, −2). That is a quarter turn from upper left to lower left, which is anticlockwise.

The rotation is **90° anticlockwise about (3, 0)**.

## Translation (9.01c)

A translation slides every point the same distance in the same direction. It is described by a column vector. The top number is the movement right (negative means left). The bottom number is the movement up (negative means down).

```
 ⎛ −4 ⎞     4 left, 3 up
 ⎝  3 ⎠
```

Inline on this page the same vector is written (−4 over 3).

The point (1, 2) translated by (−4 over 3) goes to (−3, 5). To describe a translation, take any point and subtract: image minus object. Give the column vector, not just words such as "4 left and 3 up".

The translation that undoes (a over b) is (−a over −b).

## Combinations of transformations (9.01d, Higher tier only)

To do a sequence, apply the first transformation to the whole shape, label the result, then apply the second to that result. "A then B" means A first. The order often matters.

### What changes and what is invariant

| Transformation | Lengths, angles, area | Orientation | Invariant points |
|---|---|---|---|
| Reflection | Unchanged | Reversed (the shape is flipped) | Every point on the mirror line |
| Rotation | Unchanged | Kept | The centre only (unless the angle is a multiple of 360°) |
| Translation | Unchanged | Kept | None |

Position changes, and a reflection also reverses orientation. In a sequence, an odd number of reflections reverses orientation and an even number keeps it. An invariant point of a combination ends where it started after every step.

### Describing the single transformation

Track a vertex through both steps, then compare object and final image. These results save time; check them against a point.

| Sequence | Single transformation |
|---|---|
| Reflect in two parallel lines | Translation at 90° to the lines, twice the distance between them, in the direction from the first line to the second |
| Reflect in two lines meeting at a point | Rotation about that point, through twice the angle between the lines |
| Two rotations about different centres, through angles that add to a multiple of 360° | Translation |
| Rotation then translation (angle not a multiple of 360°) | Rotation through the same angle about a different centre |

If no single reflection, rotation or translation works (for example a reflection then a translation along the mirror line), describe the two steps.

### Worked example: parallel mirror lines

Reflect a shape in x = 1, then in x = 5. A vertex at (−2, 1) goes to (2(1) − (−2), 1) = (4, 1), then to (2(5) − 4, 1) = (6, 1). The shift is 8 to the right, and 8 = 2 × (5 − 1).

The single transformation is a **translation by (8 over 0)**. No point is invariant.

### Worked example: order matters

Take the point (2, 1).

```
Reflect in the x-axis, then in y = x:  (2, 1) → (2, −1) → (−1, 2)
Reflect in y = x, then in the x-axis:  (2, 1) → (1, 2) → (1, −2)
```

The mirror lines meet at the origin at 45°, so each result is a 90° rotation about (0, 0). The first order is anticlockwise, since (2, 1) goes to (−1, 2). The second is clockwise, since (2, 1) goes to (1, −2). The order changes the answer. The origin is the only invariant point.

### Worked example: rotation then translation

Rotate a shape 90° clockwise about the origin, then translate by (4 over 0). The point (1, 0) goes to (0, −1) and then to (4, −1). The result is a 90° clockwise rotation about a new centre. To find it, look for the invariant point. Try (2, −2): the rotation sends it to (−2, −2), and the translation moves it to (2, −2). It has not moved, so the single transformation is a **rotation of 90° clockwise about (2, −2)**.

## Column vectors (9.03b)

A vector has size and direction but no fixed position. Write a 2D vector as a column. For points A(2, 1) and B(5, −3), the vector from A to B is **AB** = (5 − 2 over −3 − 1) = (3 over −4). On a grid, draw it as an arrow 3 right and 4 down.

Reversing direction changes the sign: **BA** = −**AB** = (−3 over 4).  A single letter such as **a** is the usual label (bold in print, underlined by hand).

## Vector arithmetic (9.03a)

Work on the top and bottom numbers separately.

Let **a** = (4 over −1) and **b** = (−2 over 3).

| Operation | Working | Result |
|---|---|---|
| **a** + **b** | (4 − 2 over −1 + 3) | (2 over 2) |
| **a** − **b** | (4 + 2 over −1 − 3) | (6 over −4) |
| 3**a** − 2**b** | (12 + 4 over −3 − 6) | (16 over −9) |

Adding follows a route: **AB** + **BC** = **AC**. For a point O, **AB** = **OB** − **OA**, because you go from A back to O and then out to B.

Multiplying by a scalar stretches the vector, and a negative scalar reverses it. Two vectors are parallel when one equals the other multiplied by a number. For example (6 over −9) and (−4 over 6) are parallel, because (−4 over 6) = −(2/3) × (6 over −9).

### Worked example: a parallelogram

P is (1, 2) and Q is (6, −1). Parallelogram PQRS has **PS** = (−1 over 4). Find R and S.

```
PQ = (5 over −3)
S = P + PS = (1 − 1, 2 + 4) = (0, 6)
R = Q + PS = (6 − 1, −1 + 4) = (5, 3)
```

Check: **SR** = (5 over −3) = **PQ**.

## Vectors in geometric arguments and proofs (9.03a, Higher tier only)

Describe every side as a route through known vectors, simplify, and then read off the geometry.

- Parallel lines: one vector equals a number times the other.
- Equal lengths and direction: the vectors are equal.
- Points A, B and C are collinear if **AB** is a multiple of **BC**. They share the point B, so parallel is enough.
- Ratio: if P is on AB with AP : PB = 2 : 3, then **AP** = (2/5)**AB**.

### Worked example: a trapezium

In quadrilateral ABCD, **AB** = **p** + 2**q**, **BC** = **q** − 3**p** and **CD** = −2**p** − 4**q**.

```
DC = −CD = 2p + 4q = 2(p + 2q) = 2AB
AD = AB + BC + CD = (p + 2q) + (q − 3p) + (−2p − 4q) = −4p − q
```

DC is twice AB in the same direction, so AB and DC are parallel and DC is twice as long. **BC** = −3**p** + **q** is not a multiple of **AD** = −4**p** − **q**, so BC and AD are not parallel. ABCD has exactly one pair of parallel sides, so it is a trapezium.

### Worked example: collinear points

O is the origin with **OP** = **a** − **b**, **OQ** = 3**a** + 2**b** and **OR** = 7**a** + 8**b**.

```
PQ = OQ − OP = 2a + 3b
PR = OR − OP = 6a + 9b = 3(2a + 3b) = 3PQ
```

**PR** = 3**PQ**, and P is on both, so P, Q and R are collinear. Also PQ : QR = 1 : 2.

## Common errors

- Measuring from the axis instead of from the mirror line.
- Mixing up clockwise and anticlockwise. A clockwise quarter turn sends a point on the positive x-axis downwards.
- Describing a rotation without its centre, angle and sense.
- Writing a translation as coordinates (−4, 3) instead of a column vector.
- Using object minus image for a translation. Use image minus object.
- Doing a sequence in the wrong order.
- Writing **BA** when asked for **AB**: the sign flips.
- Claiming vectors are parallel without showing a scalar multiple.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. This guide covers sections 9.01a to 9.01d and 9.03a and 9.03b.
