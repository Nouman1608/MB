---
title: "OCR GCSE Mathematics: Isometric transformations and vectors (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Transformations and Vectors Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on reflections, rotations, translations, combined transformations and vectors for OCR GCSE Mathematics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 9.01a to 9.01d and 9.03a and 9.03b of the OCR GCSE (9-1) Mathematics specification, Version 2.1 (August 2026). For full explanations and longer worked examples, read the [study guide](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors/). Section 9.01d (combinations) and the proof part of 9.03a are **Higher tier only**; everything else is for both tiers.

Tick topics off on the [printable checklist](/checklists/ocr/gcse/mathematics/), see the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), then try the [practice questions](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors-practice/). Unsure where to start? Use the [free diagnostics](/diagnostics/).

## Key facts

- Isometric means lengths and angles are kept, so the image is congruent to the object.
- Reflection, rotation and translation are isometric. Enlargement is not.
- Always give the full description: reflection needs a mirror line, rotation needs centre, angle and sense, and translation needs a column vector.

## Reflection (9.01a)

| Mirror line | Rule for the image of (x, y) |
|---|---|
| Vertical, x = a | New x is 2a − x; y unchanged |
| Horizontal, y = b | x unchanged; new y is 2b − y |
| Diagonal, y = x | Swap the coordinates |
| Diagonal, y = −x | Swap and change both signs |

Method for performing a reflection:

1. Draw the mirror line.
2. For each vertex, count the perpendicular distance to the line.
3. Mark its image that distance away on the opposite side.
4. Join the vertices in the same order.

Method for identifying the line: join a point to its image and find the middle of that line, then draw the line through the midpoints at 90°. Equal x-values mean a horizontal mirror line. Equal y-values mean a vertical one. If coordinates swap, check y = x or y = −x.

Worked reminder: (4, −3) reflected in y = 2 goes to (4, 2(2) − (−3)) = (4, 7). In x = −1 it goes to (2(−1) − 4, −3) = (−6, −3).

## Rotation (9.01b)

| Turn about the centre | Relative position (dx, dy) becomes |
|---|---|
| 90° clockwise | (dy, −dx) |
| 90° anticlockwise | (−dy, dx) |
| 180° | (−dx, −dy) |

A turn of 270° anticlockwise equals 90° clockwise. Method: subtract the centre, turn, add the centre back.

Worked reminder: rotate (5, 1) through 90° anticlockwise about (2, 3). Relative position: (3, −2). Turn: (2, 3). Add the centre: (4, 6).

To identify a rotation:

1. Join two different points to their images.
2. Draw the perpendicular bisector of each join. They cross at the centre.
3. Measure the angle from a point to its image about the centre.
4. State clockwise or anticlockwise by looking at the direction of travel.

For 180° there is no sense to state. The centre sits halfway between any point and its image.

## Translation (9.01c)

Column vector: top number is right (+) or left (−), bottom number is up (+) or down (−).

```
 ⎛ a ⎞   image = object + vector
 ⎝ b ⎠   vector = image − object
```

Inline, the vector with top number a and bottom number b is written (a over b). Worked reminder: (7, 2) maps to (3, 6). The vector is (3 − 7 over 6 − 2) = (−4 over 4). The inverse translation is (4 over −4).

## Combinations (9.01d, Higher tier only)

Do the steps in order, labelling the shape after each one. "A then B" means A first.

| Transformation | Invariant points | Orientation |
|---|---|---|
| Reflection | All points on the mirror line | Reversed |
| Rotation | The centre | Kept |
| Translation | None | Kept |

Lengths, angles and area never change. For a sequence, an odd number of reflections reverses orientation.

| Sequence | Single transformation |
|---|---|
| Reflection in two parallel lines | Translation, 2 × the gap between the lines, at 90° to them, from the first line towards the second |
| Reflection in two lines crossing at a point | Rotation about that point through 2 × the angle between the lines |
| Two 180° rotations about different centres | Translation |
| Rotation then translation | Rotation through the same angle about a new centre |

Always confirm by tracking a vertex. To find the new centre of a rotation produced by a combination, find a point that does not move.

Worked reminder: reflect in y = 1, then in y = 4. The point (0, 0) goes to (0, 2), then to (0, 6). The single transformation is a translation by (0 over 6). Doubling the gap gives 2 × 3 = 6.

Order matters. Reflecting in the x-axis then in y = x is a 90° anticlockwise rotation about the origin. Reflecting in y = x then in the x-axis is a 90° clockwise rotation about the origin.

## Vectors (9.03a, 9.03b)

| Idea | Rule |
|---|---|
| Column vector from A to B | **AB** = (xB − xA over yB − yA) |
| Reverse direction | **BA** = −**AB** |
| Addition | Add tops and add bottoms; **AB** + **BC** = **AC** |
| Subtraction | **AB** = **OB** − **OA** |
| Scalar multiple | Multiply both numbers; direction kept (reversed if negative) |
| Parallel | a and b are parallel if a = k × b for some number k |

Worked reminder: **a** = (2 over −5) and **b** = (−3 over 4). Then 2**a** + **b** = (4 − 3 over −10 + 4) = (1 over −6) and **a** − 3**b** = (2 + 9 over −5 − 12) = (11 over −17).

On a grid, draw a column vector as an arrow: right/left first, then up/down. Its position does not matter.

### Proofs with vectors (Higher tier only)

1. Write each required vector as a route along known vectors.
2. Simplify to the form (number) **a** + (number) **b**.
3. Parallel: one equals a number times the other.
4. Collinear: two vectors from a shared point are multiples.
5. Ratio: when AP : PB is m : n, the fraction of the way along from A is m out of m + n, so **AP** = m/(m + n) × **AB**.
6. Finish with a sentence that states the geometric conclusion.

Worked reminder: M is the midpoint of AB, with **OA** = **a** and **OB** = **b**. **AB** = **b** − **a**, so **OM** = **a** + (1/2)(**b** − **a**) = (1/2)(**a** + **b**).

## Must-know distinctions

| Often confused | Difference |
|---|---|
| Object and image | The object is the starting shape. The image is the result. |
| Vector and coordinates | A coordinate pair gives a position. A column vector gives a movement. |
| **AB** and **BA** | Equal size, opposite direction: **BA** = −**AB**. |
| Parallel and equal | Parallel vectors point the same way or opposite ways, at any size. Equal vectors match in size and direction. |
| Clockwise and anticlockwise | Clockwise follows the hands of a clock. |
| Mirror line x = 3 and y = 3 | x = 3 is vertical through 3 on the x-axis. y = 3 is horizontal through 3 on the y-axis. |

Worked reminder for identifying a line: the triangle with a vertex at (−3, 5) has an image vertex at (5, 5). The y-values match, so the mirror line is vertical. Its x-value is the middle of −3 and 5, which is 1. The line is x = 1.

## Quick self-test

1. Reflect (3, −2) in x = −1.
2. Reflect (−4, 1) in y = −x.
3. Rotate (4, 1) through 90° clockwise about (1, 1).
4. Rotate (−2, 3) through 180° about the origin.
5. A(1, 6) maps to A′(−2, 2) under a translation. Write the column vector.
6. Work out 3 × (2 over −1) − (4 over 5).
7. **AB** = (2 over 5) and **BC** = (−6 over 1). Find **AC**.
8. Are (6 over −9) and (−4 over 6) parallel? Give a reason.
9. (Higher tier only) A shape is reflected in x = 3, then in x = 9. Describe the single transformation.
10. (Higher tier only) A shape is rotated 180° about the origin, then 180° about (2, 1). Describe the single transformation.
11. (Higher tier only) **OA** = **a**, **OB** = **b**, and N is the point on OB with ON = (1/3)OB. Find **AN**.
12. (Higher tier only) Which of reflection, rotation and translation reverses orientation?

### Answers

1. (2(−1) − 3, −2) = **(−5, −2)**.
2. (−y, −x) = **(−1, 4)**.
3. Relative position (3, 0). Turn clockwise: (0, −3). Add centre: **(1, −2)**.
4. **(2, −3)**.
5. (−2 − 1 over 2 − 6) = **(−3 over −4)**.
6. (6 − 4 over −3 − 5) = **(2 over −8)**.
7. (2 − 6 over 5 + 1) = **(−4 over 6)**.
8. **Yes.** (−4 over 6) = −(2/3) × (6 over −9).
9. **Translation by (12 over 0).** The gap is 6, doubled is 12, to the right.
10. **Translation by (4 over 2).** The point (1, 0) goes to (−1, 0), then to (5, 2), a shift of (4 over 2).
11. **ON** = (1/3)**b**, so **AN** = **AO** + **ON** = −**a** + (1/3)**b**.
12. **Reflection.**

## Where marks are usually lost

- Describing a rotation with only an angle, or only a centre. Give all three details.
- Describing a translation in words or as a coordinate pair instead of a column vector.
- Using the wrong sense for a rotation. Check with one point before you write it down.
- Reflecting in x = a by counting from the y-axis rather than from the line.
- Reflecting in y = x or y = −x by eye. Test with a point.
- In a sequence, applying the steps in the wrong order, or transforming the original shape twice.
- Naming a combination as "a transformation" instead of the single type, with its full details.
- Making a sign slip in **AB** = **OB** − **OA**.
- Ending a proof without saying why the vectors being multiples means parallel or collinear.
- Forgetting that a vector has no fixed position, and treating two equal arrows in different places as different vectors.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. These notes cover sections 9.01a to 9.01d and 9.03a and 9.03b.
