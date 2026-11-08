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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--01-parallel-mirrors-translation.webp" width="900" height="700" alt="A triangle is reflected in x = 1 and then in x = 5. Each point ends 8 units right of where it began, twice the 4 units between the mirrors, so the combination is a translation by the column vector (8, 0)." loading="lazy">
  <figcaption>Two reflections in parallel lines give a translation of twice the distance between them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--02-order-of-reflections.webp" width="900" height="970" alt="The point (2, 1) is reflected in the x-axis then y = x, ending at (-1, 2), a 90 degree anticlockwise turn about the origin. In the other order it ends at (1, -2), a clockwise turn." loading="lazy">
  <figcaption>Reflecting in the same two lines in a different order gives a different image.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--01-reflection-mirror-line.webp" width="900" height="845" alt="Triangle ABC is reflected in the vertical line x = 4. Dashed lines join each corner to its image and cross the mirror at their midpoints. Image corners are A'(7,2), B'(7,4), C'(5,2)." loading="lazy">
  <figcaption>A reflection puts each image point the same distance behind the mirror line, and is described by its mirror line.</figcaption>
</figure>


### Identifying a mirror line

Pick a point and its image. The mirror line is the perpendicular bisector of the line joining them.

Triangle T has vertices (1, 4), (4, 4) and (4, 6). Its image has vertices (1, 0), (4, 0) and (4, −2). The point (1, 4) goes to (1, 0). These share an x-coordinate, so the mirror line is horizontal. The middle of the y-values is (4 + 0) ÷ 2 = 2. The mirror line is **y = 2**.

For a diagonal mirror, (1, 4) mapping to (4, 1) means y = x. Mapping to (−4, −1) would mean y = −x.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--06-reflection-diagonal-mirrors.webp" width="900" height="1035" alt="Triangle T at (3,1), (5,1), (5,2) reflected in y = x to (1,3), (1,5), (2,5), and in y = -x to (-1,-3), (-1,-5), (-2,-5). Dashed joins cross each mirror at right angles at their midpoints." loading="lazy">
  <figcaption>In y = x the coordinates swap; in y = -x they swap and change sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--01-reflection.webp" width="900" height="1030" alt="Triangle T is reflected in the vertical line x = 1 and triangle D in the sloping line y = -x on a coordinate grid. Dotted lines join every vertex to its image and cross the mirror line at right angles, with equal distances on each side. The images T dash and D dash are gold." loading="lazy">
  <figcaption>Every point and its image are the same distance from the mirror line, on opposite sides.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--03-rotation-then-translation.webp" width="900" height="1030" alt="A triangle is turned 90 degrees clockwise about the origin and then slid by (4, 0). The final position is the same as one 90 degree clockwise turn about the invariant point (2, -2)." loading="lazy">
  <figcaption>A rotation followed by a translation is a rotation through the same angle about a new centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--02-rotation-about-origin.webp" width="900" height="1065" alt="Triangle ABC is rotated 90 degrees clockwise about the origin. B(1,4) moves to B'(4,-1); the lines OB and OB' are equal and meet at a right angle. A rotation needs centre, angle and direction." loading="lazy">
  <figcaption>A rotation is described by its centre, angle and direction.</figcaption>
</figure>


### Worked example: finding the centre, angle and sense

Triangle K has vertices (1, 2), (3, 2) and (3, 5). Its image has vertices (1, −2), (1, 0) and (−2, 0).

1. Every point is as far from the centre as its image is, so the centre is on the perpendicular bisector of each point-and-image join.
2. (1, 2) and (1, −2): the bisector is y = 0.
3. (3, 5) and (−2, 0): the midpoint is (0.5, 2.5) and the chord has gradient 1, so the bisector has gradient −1: y = 3 − x. Where y = 0, x = 3.
4. The centre is (3, 0). From the centre, (1, 2) is at (−2, 2) and its image is at (−2, −2). That is a quarter turn from upper left to lower left, which is anticlockwise.

The rotation is **90° anticlockwise about (3, 0)**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--04-find-rotation-centre.webp" width="900" height="1030" alt="Perpendicular bisectors of two point-to-image joins cross at (3, 0), the centre of rotation. From there a vertex and its image are a quarter turn apart, anticlockwise." loading="lazy">
  <figcaption>The centre of a rotation is where the perpendicular bisectors of point-to-image joins meet.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--02-rotation.webp" width="900" height="1060" alt="Triangle A is rotated 90 degrees clockwise about the centre (2, 1) to give A dash at (4,0), (4,-3), (6,-3). Dashed radii from the centre to a vertex and its image are equal in length and meet at a right angle, with a curved arrow showing the clockwise turn." loading="lazy">
  <figcaption>A rotation needs a centre, an angle and a direction: here 90 degrees clockwise about (2, 1).</figcaption>
</figure>


## Translation (9.01c)

A translation slides every point the same distance in the same direction. It is described by a column vector. The top number is the movement right (negative means left). The bottom number is the movement up (negative means down).

```
 ⎛ −4 ⎞     4 left, 3 up
 ⎝  3 ⎠
```

Inline on this page the same vector is written (−4 over 3).

The point (1, 2) translated by (−4 over 3) goes to (−3, 5). To describe a translation, take any point and subtract: image minus object. Give the column vector, not just words such as "4 left and 3 up".

The translation that undoes (a over b) is (−a over −b).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--05-translation.webp" width="900" height="1050" alt="Triangle B is translated by the column vector (-4, 3) to give B dash at (-3,5), (-1,5), (-1,8). Dotted lines show all vertices moving the same distance in the same direction, and arrows mark 4 units left and 3 units up. The shape is not turned." loading="lazy">
  <figcaption>A translation slides every point by the same column vector, with no turning and no centre.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--10-two-rotations-translation.webp" width="900" height="830" alt="Triangle at (1,0), (3,0), (3,1) rotated 180 degrees about A (0,0) and then 180 degrees about B (3,2) lands at (7,4), (9,4), (9,5): a translation by (6,4) = 2 x AB, because the angles add to 360 degrees." loading="lazy">
  <figcaption>Two rotations whose angles add to 360 degrees about different centres make a translation.</figcaption>
</figure>


### Worked example: parallel mirror lines

<!-- marlbridge-diagram:math-b80-ocr-parallel-mirror-translation -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-b80-ocr-parallel-mirror-translation.svg" aria-label="Open full-size diagram: math-b80-ocr-parallel-mirror-translation"><img src="/images/learning/mathematics/math-b80-ocr-parallel-mirror-translation.svg" width="1528" height="940" alt="A point reflects first across x=1 and then x=5, moving from −2 to 4 to 6 on the same horizontal line; the composition is a translation 8 units right." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>A point reflects first across x=1 and then x=5, moving from −2 to 4 to 6 on the same horizontal line; the composition is a translation 8 units right.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-b80-ocr-parallel-mirror-translation -->


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--09-invariance-what-changes.webp" width="900" height="1077" alt="Three rows with the letter F: a reflection reverses orientation and every point on the mirror line is invariant; a rotation keeps orientation and only the centre is invariant; a translation keeps orientation and has no invariant points. Lengths, angles and area never change." loading="lazy">
  <figcaption>Reflection reverses orientation; rotation and translation keep it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--06-combination.webp" width="900" height="858" alt="Triangle B is reflected in the x-axis (dashed B1) then in the y-axis to give B2. A dashed line from (5,3) through the origin to (-5,-3) shows each point (x, y) goes to (-x, -y), which is a rotation of 180 degrees about the origin." loading="lazy">
  <figcaption>Reflecting in the x-axis and then the y-axis equals a single rotation of 180 degrees about the origin.</figcaption>
</figure>


## Column vectors (9.03b)

A vector has size and direction but no fixed position. Write a 2D vector as a column. For points A(2, 1) and B(5, −3), the vector from A to B is **AB** = (5 − 2 over −3 − 1) = (3 over −4). On a grid, draw it as an arrow 3 right and 4 down.

Reversing direction changes the sign: **BA** = −**AB** = (−3 over 4).  A single letter such as **a** is the usual label (bold in print, underlined by hand).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--01-vector-between-points.webp" width="900" height="1020" alt="Grid with P(-3,5) and Q(4,-1). Going from P to Q is 7 right and 6 down, so PQ is the column vector (7, -6). QP goes the other way, (-7, 6), so QP = -PQ." loading="lazy">
  <figcaption>Finish minus start gives the column vector; the reverse vector has both signs changed.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--07-parallelogram-vectors.webp" width="900" height="1045" alt="Parallelogram PQRS on a grid with P (1,2), Q (6,-1), PQ = (5,-3) and PS = (-1,4). S = (0,6) and R = (5,3); SR = PQ and QR = PS." loading="lazy">
  <figcaption>Add the vector PS to P and to Q to find S and R.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--02-adding-vectors.webp" width="900" height="1020" alt="p = (5,-2) is drawn from the origin, then q = (-1,7) from where p ends. The single arrow from the origin to (4,5) is p + q, found by adding tops and adding bottoms." loading="lazy">
  <figcaption>p + q means do p, then q; add the tops and add the bottoms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--03-subtracting-vectors.webp" width="900" height="1026" alt="p = (5,-2), then -q = (1,-7) from the end of p. The arrow from the origin to (6,-9) is p - q, the same as subtracting entry by entry." loading="lazy">
  <figcaption>p − q is p plus the opposite of q.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--04-scalar-multiples.webp" width="900" height="866" alt="r = (6,-4) with 3r = (18,-12) three times as long, half r = (3,-2) half as long, and -2r = (-12,8) twice as long and reversed. All lie along the same line." loading="lazy">
  <figcaption>Multiplying by k scales both entries and keeps the arrow parallel to r.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and--04-position-vectors.webp" width="900" height="1070" alt="Points A (3, 1) and B (minus 1, 5) with position vectors a and b from O. AB = b minus a = (minus 4, 4), of magnitude 4 root 2. The midpoint M is at (1, 3), half of a plus b." loading="lazy">
  <figcaption>AB = OB − OA: end minus start, and the midpoint is half the sum of the position vectors.</figcaption>
</figure>


## Vectors in geometric arguments and proofs (9.03a, Higher tier only)

Describe every side as a route through known vectors, simplify, and then read off the geometry.

- Parallel lines: one vector equals a number times the other.
- Equal lengths and direction: the vectors are equal.
- Points A, B and C are collinear if **AB** is a multiple of **BC**. They share the point B, so parallel is enough.
- Ratio: if P is on AB with AP : PB = 2 : 3, then **AP** = (2/5)**AB**.

### Worked example: a trapezium

<!-- marlbridge-diagram:math-b80-ocr-vector-trapezium-proof -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-b80-ocr-vector-trapezium-proof.svg" aria-label="Open full-size diagram: math-b80-ocr-vector-trapezium-proof"><img src="/images/learning/mathematics/math-b80-ocr-vector-trapezium-proof.svg" width="1528" height="940" alt="A labelled quadrilateral realizes p and q as perpendicular unit vectors, showing DC twice AB in the same direction while the other pair is not parallel." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>A labelled quadrilateral realizes p and q as perpendicular unit vectors, showing DC twice AB in the same direction while the other pair is not parallel.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-b80-ocr-vector-trapezium-proof -->


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--08-vector-multiples-proofs.webp" width="900" height="1270" alt="Top: trapezium ABCD drawn with p one square across and q one square up; DC = 2AB so they are parallel, BC and AD are not multiples. Bottom: P (1,-1), Q (3,2), R (7,8) with PQ = (2,3), PR = (6,9) = 3PQ so P, Q, R are collinear and PQ : QR = 1 : 2." loading="lazy">
  <figcaption>If one vector is a multiple of another the lines are parallel; with a shared point they are collinear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--07-vector-proof-midpoints.webp" width="900" height="945" alt="In triangle OAB, M and N are midpoints of OA and OB. MN = ON - OM = half of (b - a), and AB = b - a, so MN is half of AB and parallel to it. Shown with a = (8,2), b = (2,6)." loading="lazy">
  <figcaption>Writing every vector in terms of a and b shows MN = half of AB, so the lines are parallel.</figcaption>
</figure>


## Common errors

- Measuring from the axis instead of from the mirror line.
- Mixing up clockwise and anticlockwise. A clockwise quarter turn sends a point on the positive x-axis downwards.
- Describing a rotation without its centre, angle and sense.
- Writing a translation as coordinates (−4, 3) instead of a column vector.
- Using object minus image for a translation. Use image minus object.
- Doing a sequence in the wrong order.
- Writing **BA** when asked for **AB**: the sign flips.
- Claiming vectors are parallel without showing a scalar multiple.

## Frequently asked questions

**How do you find the mirror line of a reflection?**
Join a point to its image and find the perpendicular bisector of that line; this is the mirror line. If the x-coordinates match, the line is horizontal through the midpoint of the y-values.

**How do you find the centre of a rotation?**
Join two different points to their images and draw the perpendicular bisector of each join. The bisectors cross at the centre of rotation.

**Does the order of transformations matter?**
Yes, the order often changes the result. Reflecting in the x-axis and then in y = x gives a 90° anticlockwise rotation about the origin, but the opposite order gives a 90° clockwise rotation.

**How do you prove three points are collinear using vectors?**
Show that two vectors joining the points are multiples of each other and share a point. For example, if PR = 3PQ, the lines PQ and PR are parallel and both pass through P, so P, Q and R lie on a straight line.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. This guide covers sections 9.01a to 9.01d and 9.03a and 9.03b.
