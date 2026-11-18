---
title: "Cambridge IGCSE Mathematics (0580): Transformations"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 7 – Transformations and vectors"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 7.1
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "transformations-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 7.1: reflections, rotations, enlargements and translations, how to describe them fully, and the Extended-only extras."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **7.1 Transformations** in Topic 7 Transformations and vectors of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is in **both tiers**, but the Extended statement (E7.1) goes further than the Core statement (C7.1), so each section below says which parts are Extended only.

The topic-level [transformations and vectors study guide](/resources/igcse-mathematics-transformations-and-vectors/) gives an overview. This page works through coordinate rules, finding centres and mirror lines from a diagram, negative scale factors and combined transformations. Revise with the [transformations revision notes](/resources/cambridge-igcse-mathematics-0580-transformations-cambridge-igcse-maths-revision-notes/) and practise with the [transformations practice questions](/resources/cambridge-igcse-mathematics-0580-transformations-cambridge-igcse-maths-practice/).

## What subtopic 7.1 asks for

You must **recognise, describe and draw** four transformations.

| Transformation | Core (C7.1) | Extended (E7.1) |
|---|---|---|
| Reflection | in a vertical or horizontal line | in any straight line |
| Rotation | about the origin, a vertex or the midpoint of an edge of the shape, through multiples of 90° | about any centre, through multiples of 90° |
| Enlargement | positive and fractional scale factors | positive, fractional and negative scale factors |
| Translation | by a column vector (x, y) | by a column vector (x, y) |
| Combinations | not examined | may be examined |

The syllabus also says a ruler must be used for all straight edges, so draw images with a ruler.

## "Describe fully": what earns the marks

| Transformation | You must state |
|---|---|
| Reflection | the word *reflection* and the **equation of the mirror line** |
| Rotation | *rotation*, the **centre**, the **angle** and the **direction** (clockwise or anticlockwise; not needed for 180°) |
| Enlargement | *enlargement*, the **centre** and the **scale factor** |
| Translation | *translation* and the **column vector** |

Naming two transformations, such as "a rotation and then a translation", when the question asks for a **single** transformation scores nothing.

In this guide, triangle T has vertices (2, 1), (5, 1) and (5, 3).

## Reflections

Each image point is the same perpendicular distance from the mirror line as the object point, on the other side.

```
Mirror line          Rule                    Tier
x = k                (x, y) → (2k − x, y)    Core and Extended
y = k                (x, y) → (x, 2k − y)    Core and Extended
y = x                (x, y) → (y, x)         Extended
y = −x               (x, y) → (−y, −x)       Extended
```

### Worked example 1: reflection in x = −1 (Core)

Reflect T in the line x = −1.

```
2k = −2, so each x becomes −2 − x; y is unchanged.
(2, 1) → (−4, 1)    (5, 1) → (−7, 1)    (5, 3) → (−7, 3)
```

Check one point by counting: (2, 1) is 3 units right of x = −1, so its image is 3 units left of it, at x = −4.

### Worked example 2: reflection in a sloping line (Extended)

Reflect the point (5, 1) in the line y = x + 2.

```
Move at right angles to the line (the direction (−1, 1), since the line has gradient 1).
Try (5, 1) + t(−1, 1) on the line: 1 + t = (5 − t) + 2, so t = 3.
The point on the line is (2, 4). Go the same distance again:
image = (2 − 3, 4 + 3) = (−1, 7)
```

Check: the midpoint of (5, 1) and (−1, 7) is (2, 4), which lies on y = x + 2.

To **find** a mirror line from a diagram, join an object point to its image; the mirror line is the perpendicular bisector of that segment. Then write its equation.

## Rotations

About the origin O:

```
90° anticlockwise:   (x, y) → (−y, x)
90° clockwise:       (x, y) → (y, −x)
180°:                (x, y) → (−x, −y)
```

About any other centre (a, b): subtract (a, b) from the point, apply the rule, then add (a, b) back.

### Worked example 3: rotation about a vertex (Core)

Rotate T through 90° clockwise about its vertex (2, 1).

```
Subtract (2, 1):   (0, 0)   (3, 0)   (3, 2)
90° clockwise:     (0, 0)   (0, −3)  (2, −3)
Add (2, 1):        (2, 1)   (2, −2)  (4, −2)
```

The centre of rotation does not move, which is a useful check.

### Worked example 4: rotation about a point outside the shape (Extended)

Rotate T through 90° anticlockwise about (1, 0).

```
Subtract (1, 0):   (1, 1)   (4, 1)   (4, 3)
90° anticlockwise: (−1, 1)  (−1, 4)  (−3, 4)
Add (1, 0):        (0, 1)   (0, 4)   (−2, 4)
```

To **find** the centre of a rotation, use the fact that the centre is the same distance from each point and its image: it lies on the perpendicular bisector of the segment joining a point to its image. Two such bisectors cross at the centre. Tracing paper is a quick check.

## Enlargements

From centre C with scale factor k, each image point is k times as far from C, along the same line:

```
image = C + k × (point − C)
```

- k > 1: larger image, on the same side of C.
- 0 < k < 1 (fractional): smaller image, on the same side of C.
- k < 0 (Extended only): the image is on the **opposite** side of C, and upside down.

Lengths are multiplied by the size of k; areas by k².

### Worked example 5: fractional scale factor (Core)

Enlarge the triangle with vertices (3, 1), (7, 1) and (7, 5) by scale factor ½, centre (−1, 1).

```
point − C:   (4, 0)   (8, 0)   (8, 4)
× ½:         (2, 0)   (4, 0)   (4, 2)
+ C:         (1, 1)   (3, 1)   (3, 3)
```

### Worked example 6: negative scale factor (Extended)

Enlarge T by scale factor −2, centre (1, 1).

```
point − C:   (1, 0)   (4, 0)   (4, 2)
× (−2):      (−2, 0)  (−8, 0)  (−8, −4)
+ C:         (−1, 1)  (−7, 1)  (−7, −3)
```

The image is twice the size and has been turned through 180° about the centre.

### Worked example 7: finding the centre and scale factor

Triangle P has vertices (1, 1), (3, 1) and (1, 2). Its image Q has vertices (1, 5), (7, 5) and (1, 8). Describe fully the single transformation.

```
Lengths: the side from (1, 1) to (3, 1) is 2; its image is 6. Scale factor 3.
Centre C satisfies image = C + 3(point − C), so C = (3 × point − image) ÷ 2.
Using (1, 1) and (1, 5):  C = ((3 − 1) ÷ 2, (3 − 5) ÷ 2) = (1, −1)
Check with (3, 1) → 3(3, 1) − 2(1, −1) = (7, 5)  ✓
```

**Enlargement, scale factor 3, centre (1, −1).** On a grid you would draw lines through corresponding vertices; they meet at the centre.

## Translations

Add the column vector (x, y) to every point: x across (right positive), y up (positive). Translating T by the vector (−4, 2) gives (−2, 3), (1, 3) and (1, 5). The [vectors in two dimensions study guide](/resources/cambridge-igcse-mathematics-0580-vectors-in-two-dimensions-cambridge-igcse-maths/) takes column vectors further.

## Combined transformations (Extended only)

Apply the first transformation, then apply the second to the **image**. If asked for the single equivalent transformation, test it with two or three points.

Example: reflect in the y-axis, then rotate 90° anticlockwise about O.

```
(x, y) → (−x, y) → (−y, −x)
```

That is the rule for **reflection in y = −x**. Check with (2, 1): (−2, 1) then (−1, −2), and (2, 1) reflected in y = −x is (−1, −2) ✓.

Order matters: rotating first and then reflecting in the y-axis gives (x, y) → (−y, x) → (y, x), a reflection in y = x instead.

## Common mistakes

- Giving a rotation without its centre or direction.
- Writing a mirror line as "the y-axis line" or "x = 0 axis" instead of an equation such as x = 0.
- Measuring an enlargement from the origin when the centre is elsewhere.
- Placing a negative-scale-factor image on the same side of the centre.
- Rotating about the origin when the centre given is a vertex or another point.
- Describing two transformations when one is asked for.

## Exam technique

- **Draw**: plot the vertices with exact coordinates, join with a ruler and label the image as asked.
- **Describe fully**: use the checklist above; each missing detail costs a mark.
- Check one image point by counting squares from the centre or mirror line.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 7 Transformations and vectors, C7.1 and E7.1 Transformations. See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
