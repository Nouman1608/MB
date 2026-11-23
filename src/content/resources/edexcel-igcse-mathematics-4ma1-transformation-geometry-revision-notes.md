---
title: "Edexcel International GCSE Mathematics A (4MA1): Transformation geometry -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IGCSE Maths 4MA1 section 5.2: coordinate rules, finding centres and mirror lines, complete descriptions, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for section 5.2 (Transformation geometry) of the 4MA1 specification. It is Foundation Tier content that the Higher Tier also assumes. Worked examples, including finding centres, are in the [Transformation geometry study guide](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry/); exam-style questions are in the [Transformation geometry practice questions](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Object | The shape before the transformation |
| Image | The shape after it, labelled with primes (A′) |
| Congruent | Same shape and size |
| Similar | Same shape, lengths in the same ratio |
| Centre of rotation | The fixed point of a rotation |
| Mirror line | The line of a reflection; points on it stay fixed |
| Column vector | (a, b): a across, b up |
| Scale factor | The number every length is multiplied by in an enlargement |
| Centre of enlargement | The point distances are measured from |

## What specifies each transformation

| Transformation | Specified by | Preserves | Image is |
|---|---|---|---|
| Rotation | centre + angle (+ anticlockwise, − clockwise) | length, angle | congruent |
| Reflection | mirror line | length, angle | congruent |
| Translation | column vector | length, angle | congruent |
| Enlargement | centre + scale factor (positive, may be a fraction) | angle only | similar |

## Coordinate rules

**Rotation about the origin**

| Angle | (x, y) becomes |
|---|---|
| +90° (anticlockwise) | (−y, x) |
| −90° (clockwise) | (y, −x) |
| 180° | (−x, −y) |

About any other centre: subtract the centre, apply the rule, add the centre back. A half turn about (p, q): (x, y) → (2p − x, 2q − y).

**Reflection**

| Mirror line | (x, y) becomes |
|---|---|
| x = a | (2a − x, y) |
| y = b | (x, 2b − y) |
| y = x (y − x = 0) | (y, x) |

**Translation by (a, b):** (x, y) → (x + a, y + b). Vector = image − object. Inverse = (−a, −b). Two translations combine by adding the vectors.

**Enlargement, centre C, scale factor k:** P′ = C + k(P − C). Lengths × k. k between 0 and 1 makes the image smaller.

## Working backwards

| To find | Method |
|---|---|
| Translation vector | Image − object for any one vertex |
| Mirror line | Perpendicular bisector of a point and its image |
| Rotation angle | Compare the direction of a side before and after |
| Rotation centre | Perpendicular bisectors of two point–image pairs meet at it |
| Scale factor | Image length ÷ object length |
| Enlargement centre | Lines through each vertex and its image meet at it; or C = (P′ − kP) ÷ (1 − k) |

**Orientation check:** if the vertex order is reversed (anticlockwise becomes clockwise), the transformation is a reflection.

## Combining transformations

- Translation then translation → one translation (add vectors).
- Reflection in two parallel lines → translation by twice the gap, perpendicular to the lines.
- Always check: is the final image the same way round as the object? Same size?

## Complete descriptions

- **Rotation**: angle, direction, centre. (No direction needed for 180°.)
- **Reflection**: equation of the mirror line.
- **Translation**: column vector.
- **Enlargement**: scale factor, centre.

Only **one** transformation, with **every** fact.

## Mini example: describe fully

Object (2, 1), (4, 1), (2, 2). Image (−2, −1), (−4, −1), (−2, −2).

- Same size, so not an enlargement. Same vertex order, so not a reflection.
- The side from (2, 1) to (4, 1) points right; its image from (−2, −1) to (−4, −1) points left. A side that reverses direction means a half turn.
- Centre = midpoint of a point and its image: midpoint of (2, 1) and (−2, −1) is (0, 0).
- Check the third vertex: (2, 2) → (−2, −2) under (x, y) → (−x, −y). ✓

**Answer: rotation of 180° about (0, 0).** No direction is needed for a half turn.

## Exam traps

- Rotating about the origin when another centre is given.
- Anticlockwise and clockwise rules swapped.
- Changing signs instead of swapping coordinates for y = x.
- Vector as object − image.
- Enlargement measured from the origin, not the stated centre.
- Missing the centre or the direction in a description.
- Two transformations when one is asked for.

## Self-test

1. Translate (−2, 3) by (5, −4).
2. Find the vector that maps (6, 1) onto (2, 4).
3. Reflect (5, 2) in x = 1.
4. Reflect (−1, 6) in y = 2.
5. Rotate (3, 4) through +90° about the origin.
6. Rotate (1, 3) through 180° about (2, 2).
7. Which transformation preserves angles but not lengths?
8. A point and its image are (0, 3) and (0, −5). Give the mirror line.
9. Enlarge (4, 6) by scale factor ½, centre (0, 0).
10. Enlarge (3, 2) by scale factor 2, centre (1, 1).
11. An object side of 6 cm becomes 15 cm. Give the scale factor.
12. What single transformation is a translation by (2, 1) followed by a translation by (−5, 3)?

### Answers

1. (3, −1).
2. (−4, 3).
3. (−3, 2).
4. (−1, −2).
5. (−4, 3).
6. (3, 1).
7. Enlargement.
8. y = −1.
9. (2, 3).
10. (1, 1) + 2(2, 1) = (5, 3).
11. 15 ÷ 6 = 2.5.
12. Translation by (−3, 4).

## Frequently asked questions

**Is a rotation of −90° clockwise or anticlockwise?**
Clockwise. The specification states that anticlockwise rotations are positive angles and clockwise rotations are negative.

**Is an enlargement with a scale factor of ½ still called an enlargement?**
Yes. In 4MA1 the scale factor is positive and may be a fraction; a factor between 0 and 1 makes the image smaller, but it is still described as an enlargement with a centre and a scale factor.

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 5, Vectors and transformation geometry: 5.2 Transformation geometry, statements A to M (Foundation Tier; the Higher Tier refers to the Foundation Tier).
