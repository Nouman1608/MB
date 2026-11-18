---
title: "OCR GCSE Mathematics (J560): Plane isometric transformations"
resourceType: "study-guides"
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
description: "OCR GCSE Maths J560 section 9.01 in depth: reflections, rotations and translations by coordinate rules, identifying them, and combined transformations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.01, Plane isometric transformations, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Reflecting, rotating and translating simple shapes, and identifying the mirror line, the centre, angle and sense of a rotation, and a translation vector, are for **both tiers**. Combinations of transformations are **Higher tier only**.

The [isometric transformations and vectors guide](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors/) introduces each transformation with grid examples. This page goes further on 9.01 alone: coordinate rules that do the work without a grid, reflecting in lines such as x = a, rotating about a centre that is not the origin, a quick test for 180° rotations, what "describe fully" requires, orientation and invariance, and combinations that reduce to a single transformation. Condense it with the [9.01 revision notes](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths-revision-notes/) and test yourself with the [9.01 practice questions](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 9.01a | Reflect a simple shape in a given mirror line, and identify the mirror line from a shape and its image | Both tiers |
| 9.01a | Identify a mirror line x = a, y = b or y = ±x from a simple shape and its image under reflection | Both tiers |
| 9.01b | Rotate a simple shape clockwise or anticlockwise through a multiple of 90° about a given centre | Both tiers |
| 9.01b | Identify the centre, angle and sense of a rotation from a simple shape and its image | Both tiers |
| 9.01c | Use a column vector to describe a translation of a simple shape, and perform a specified translation | Both tiers |
| 9.01d | Perform a sequence of isometric transformations (reflections, rotations or translations) on a simple shape; describe the resulting transformation and the changes and invariance achieved | Higher tier only |

**Isometric** means "same measure". Reflections, rotations and translations keep every length and every angle, so the image is always **congruent** to the object. Column vectors are written here as (a over b): a units right (left if negative) and b units up (down if negative).

## Reflections

The mirror line is the perpendicular bisector of the line joining each point to its image: each image point is the same distance from the mirror line as its object point, on the opposite side, along a line at right angles to the mirror.

| Mirror line | Rule for (x, y) |
|---|---|
| x-axis (y = 0) | (x, −y) |
| y-axis (x = 0) | (−x, y) |
| y = x | (y, x) |
| y = −x | (−y, −x) |
| x = a | (2a − x, y) |
| y = b | (x, 2b − y) |

The rule for x = a comes from distances: a point 3 units to the right of x = a ends up 3 units to the left of it.

**Worked example 1.** Reflect the triangle with vertices (2, 1), (4, 1) and (4, 2) in the line x = 1.

```
rule: (x, y) → (2 − x, y)
(2, 1) → (0, 1)
(4, 1) → (−2, 1)
(4, 2) → (−2, 2)
```

Check: (4, 1) is 3 units right of x = 1, and (−2, 1) is 3 units left of it.

**Worked example 2 (identifying the mirror line).** A triangle with vertices (1, 4), (3, 4) and (3, 5) is reflected to give the image (−4, −1), (−4, −3) and (−5, −3). Find the mirror line.

Compare each pair: (1, 4) → (−4, −1). The coordinates have swapped and both changed sign, which is the rule for y = −x. Check the others: (3, 4) → (−4, −3) and (3, 5) → (−5, −3). All three fit, so the mirror line is **y = −x**.

For a horizontal or vertical mirror line, find the midpoint of a point and its image. For (5, 2) and (5, −6), the midpoint is (5, −2), and the x-coordinates agree, so the mirror line is y = −2.

## Rotations

To describe a rotation you need three things: the **centre**, the **angle** and the **sense** (clockwise or anticlockwise). A rotation of 180° is the same in either sense.

About the origin:

| Rotation | Rule for (x, y) |
|---|---|
| 90° clockwise | (y, −x) |
| 90° anticlockwise | (−y, x) |
| 180° | (−x, −y) |

**About another centre.** Work out each point's position relative to the centre, rotate that, then add the centre back.

**Worked example 3.** Rotate the triangle with vertices (4, 1), (6, 1) and (6, 2) through 90° anticlockwise about (2, 1).

```
relative to (2, 1):     (2, 0),  (4, 0),  (4, 1)
rotate 90° anticlockwise, (x, y) → (−y, x):
                        (0, 2),  (0, 4),  (−1, 4)
add (2, 1) back:        (2, 3),  (2, 5),  (1, 5)
```

The vertex (4, 1) was 2 units right of the centre and is now 2 units above it, which is a quarter turn anticlockwise.

**Worked example 4 (identifying a 180° rotation).** A triangle with vertices (1, 1), (3, 1) and (1, 2) has image (3, −1), (1, −1) and (3, −2). Describe the transformation fully.

For a half turn, the centre is the midpoint of every object–image pair:

```
(1, 1) and (3, −1):   midpoint (2, 0)
(3, 1) and (1, −1):   midpoint (2, 0)
(1, 2) and (3, −2):   midpoint (2, 0)
```

All three agree: **rotation of 180° about (2, 0)**. For a 90° rotation there is no midpoint shortcut; test a possible centre with the relative-position method, or use tracing paper.

## Translations

A translation moves every point by the same column vector. To find the vector, subtract any object point from its image point.

**Worked example 5.** Triangle A has a vertex at (−2, 3); the corresponding vertex of its image B is (3, −1). Find the vector of the translation from A to B, and the vector that maps B back to A.

```
A to B:  (3 − (−2) over −1 − 3) = (5 over −4)
B to A:  (−5 over 4)
```

The reverse translation is the negative vector.

## What "describe fully" needs

| Transformation | Every detail you must give |
|---|---|
| Reflection | The word reflection and the equation of the mirror line |
| Rotation | The word rotation, the angle, the sense (unless 180°) and the centre as coordinates |
| Translation | The word translation and the column vector |

Two transformations in one answer earn no marks when one single transformation is asked for. "Moved" or "flipped" are not mathematical names.

## Orientation and invariance

- **Orientation.** Label the vertices A, B, C going anticlockwise. After a reflection they go clockwise (orientation reversed). After a rotation or translation they still go anticlockwise.
- **Invariant points** do not move. For a reflection: every point on the mirror line. For a rotation: only the centre. For a non-zero translation: none.
- **Invariant lines** map onto themselves. Any line perpendicular to a mirror line is invariant (its points move along it), and every line parallel to a translation vector is invariant.

## Combinations of transformations (Higher tier only)

Carry out the first transformation, then apply the second to the image. Then compare the final image with the original to find a single transformation that does the same job. Tracking where coordinates go is quicker than drawing.

**Worked example 6 (Higher tier only).** Reflect the triangle T with vertices (1, 2), (3, 2) and (1, 3) in the line y = x, then reflect the image in the x-axis. Describe the single transformation that maps T to the final image.

```
y = x, (x, y) → (y, x):       (2, 1), (2, 3), (3, 1)
x-axis, (x, y) → (x, −y):     (2, −1), (2, −3), (3, −1)
overall: (x, y) → (y, −x)
```

That is the rule for **rotation of 90° clockwise about the origin**. The origin is the only invariant point, and the orientation is back to the original, as two reflections always restore it.

**Worked example 7 (Higher tier only).** Show that reflecting in x = 1 and then in y = 2 is a rotation of 180° about (1, 2).

```
x = 1:  (x, y) → (2 − x, y)
y = 2:  (2 − x, y) → (2 − x, 4 − y)
180° about (1, 2) sends (x, y) to (2 − x, 4 − y)
```

The rules agree for every point, so the combination is that half turn. Reflections in two perpendicular lines always give a 180° rotation about their crossing point. Reflections in two parallel lines give a translation (see the [isometric transformations and vectors guide](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors/)).

**A caution.** Not every combination reduces to one of the three. A reflection followed by a translation parallel to the mirror line reverses orientation, so it is not a rotation or translation, and it has no invariant points, so it is not a reflection. If a question asks for a single transformation, it has been chosen so that one exists.

## Common mistakes

- Reflecting in y = x by changing signs instead of swapping coordinates.
- Rotating about the origin when the centre is somewhere else.
- Mixing up the clockwise and anticlockwise rules.
- Giving a translation vector from the image to the object.
- Leaving out the centre, the sense or the mirror line in a description.
- Describing a combined transformation with two transformations.

## Exam technique for OCR command words

- **Reflect**, **Rotate** or **Translate** on a grid: plot every vertex accurately and label the image as the question asks.
- **Describe fully the single transformation**: give the name and all its details from the table above.
- **Write down the invariant point(s)** (Higher tier only): give coordinates, or say "none".
- **Show that** a combination equals a single transformation (Higher tier only): track coordinates through both steps and compare with the single rule.

## Next steps

- Condense the rules with the [plane isometric transformations revision notes](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths-revision-notes/).
- Test yourself with the [plane isometric transformations practice questions](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths-practice/).
- Use the column vectors again in the [plane vector geometry guide](/resources/ocr-gcse-mathematics-j560-plane-vector-geometry-ocr-gcse-maths/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 9.01, Plane isometric transformations.
