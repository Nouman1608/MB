---
title: "OCR GCSE Mathematics (J560): Plane isometric transformations -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 9 – Congruence and similarity"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 9.1
syllabusTopics:
  - qualification: "gcse"
    topic: "congruence-and-similarity-ocr-gcse-maths"
    subtopic: "plane-isometric-transformations-ocr-gcse-maths"
description: "Condensed OCR GCSE Maths J560 9.01 revision notes: reflection, rotation and translation rules, full descriptions, invariance, combinations and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 9.01, Plane isometric transformations, of OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026). Reflections, rotations and translations, and identifying them, are for **both tiers**; combinations of transformations are **Higher tier only**. Full explanations are in the [plane isometric transformations study guide](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths/); test yourself with the [plane isometric transformations practice questions](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths-practice/). The wider topic is in the [isometric transformations and vectors revision notes](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors-revision-notes/).

## Coverage at a glance

| Ref | Content | Tier |
|---|---|---|
| 9.01a | Reflect in a given line; identify the mirror line (x = a, y = b, y = ±x) | Both tiers |
| 9.01b | Rotate through multiples of 90° about a given centre; identify centre, angle and sense | Both tiers |
| 9.01c | Describe and perform translations with column vectors | Both tiers |
| 9.01d | Sequences of reflections, rotations and translations; the resulting transformation; changes and invariance | Higher tier only |

## Key terms

| Term | Meaning |
|---|---|
| Object | The shape before the transformation |
| Image | The shape after the transformation |
| Isometric transformation | Keeps lengths and angles, so object and image are congruent |
| Mirror line | The line of reflection; the perpendicular bisector of each object–image pair |
| Centre of rotation | The fixed point the shape turns about |
| Sense | Clockwise or anticlockwise |
| Column vector (a over b) | a right (left if negative), b up (down if negative) |
| Invariant point | A point that does not move |
| Orientation | The clockwise or anticlockwise order of the labelled vertices |

## Coordinate rules

```
Reflection in x-axis        (x, y) → (x, −y)
Reflection in y-axis        (x, y) → (−x, y)
Reflection in y = x         (x, y) → (y, x)
Reflection in y = −x        (x, y) → (−y, −x)
Reflection in x = a         (x, y) → (2a − x, y)
Reflection in y = b         (x, y) → (x, 2b − y)

Rotation 90° clockwise about O       (x, y) → (y, −x)
Rotation 90° anticlockwise about O   (x, y) → (−y, x)
Rotation 180° about O                (x, y) → (−x, −y)
Rotation 180° about (p, q)           (x, y) → (2p − x, 2q − y)

Translation by (a over b)            (x, y) → (x + a, y + b)
```

**Rotation about (p, q), any multiple of 90°:** subtract (p, q), rotate about O, add (p, q) back.

Reminder: rotating (5, 3) through 90° clockwise about (1, 1): relative (4, 2) → (2, −4) → add back: (3, −3).

## Identifying a transformation

| Clue from object and image | Likely transformation | How to pin it down |
|---|---|---|
| Same orientation, same direction, just moved | Translation | Image point − object point |
| Orientation reversed | Reflection | Midpoints of object–image pairs lie on the mirror line |
| Same orientation, turned | Rotation | Find centre (tracing paper or relative positions); 180°: all midpoints coincide |

Reminder: object (2, 5) and image (2, −1): midpoint (2, 2), so the mirror line is y = 2 (check with a second pair).

Reminder: (3, 1) → (−1, 3) and (5, 2) → (−2, 5) both fit (x, y) → (−y, x): rotation 90° anticlockwise about the origin.

## Describing fully

- Reflection: the mirror line's equation.
- Rotation: angle, sense (unless 180°), centre.
- Translation: column vector.
- One transformation only, when one is asked for.

## Invariance

| Transformation | Invariant points | Orientation |
|---|---|---|
| Reflection | All points on the mirror line | Reversed |
| Rotation | The centre only | Kept |
| Translation (non-zero) | None | Kept |

## Combinations (Higher tier only)

- Apply the first transformation, then the second to the image.
- Compose the coordinate rules to find the overall rule.
- Two reflections in parallel lines: a translation (twice the gap, at right angles to the lines).
- Two reflections in perpendicular lines: a rotation of 180° about the crossing point.
- Reflection in y = x then in the x-axis: rotation 90° clockwise about the origin.
- Order matters: swapping the two steps can change the result.
- Two reflections always keep orientation; one reflection plus a rotation or translation reverses it.

Reminder: reflecting in x = 2 then x = 5 gives (x, y) → (2 × 5 − (4 − x), y) = (x + 6, y): translation (6 over 0).

## Exam traps

- y = x treated as a sign change instead of a swap.
- 90° clockwise and anticlockwise rules swapped.
- Rotation done about the origin instead of the given centre.
- Translation vector given backwards.
- Descriptions missing the centre, sense or mirror line.
- Two transformations given when the question asks for a single one.

## Quick self-test

1. Reflect (3, −2) in the y-axis.
2. Reflect (4, 1) in the line x = 6.
3. Reflect (−3, 5) in y = x.
4. Rotate (2, 5) through 90° clockwise about the origin.
5. Rotate (2, 5) through 180° about (1, 1).
6. Translate (−4, 2) by (3 over −5).
7. (1, 3) maps to (6, 1) under a translation. Write the vector.
8. (2, 7) is reflected to (2, −3). Find the mirror line.
9. Which transformation has exactly one invariant point?
10. Which transformations reverse orientation?
11. (Higher tier only) Reflect in y = 1, then in y = 4. Describe the single transformation.
12. (Higher tier only) Reflect in the x-axis, then in the y-axis. Describe the single transformation.

### Answers

1. (−3, −2)
2. (8, 1)
3. (5, −3)
4. (5, −2)
5. (0, −3)
6. (−1, −3)
7. (5 over −2)
8. y = 2
9. Rotation (the centre)
10. Reflection
11. (x, y) → (x, 2 − y) → (x, 8 − (2 − y)) = (x, y + 6): translation by (0 over 6)
12. (x, y) → (x, −y) → (−x, −y): rotation of 180° about the origin

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 9.01, Plane isometric transformations.
