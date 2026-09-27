---
title: "IGCSE Mathematics: Transformations and Vectors — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Transformations and vectors"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "transformations-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "vectors-in-two-dimensions-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "magnitude-of-a-vector-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "vector-geometry-cambridge-igcse-maths"
description: "Condensed recall notes on reflection, rotation, enlargement, translation, vector notation, magnitude and vector geometry for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. Pair these notes with the
[Transformations and Vectors practice questions](/resources/igcse-mathematics-transformations-and-vectors-practice/)
for worked exam-style application.

> **Tier note:** the four transformations are Core (C7.1). Extended adds reflection in any straight line,
> such as y = x or y = -x (Core uses vertical and horizontal lines only), rotation about any centre (Core
> uses the origin, a vertex or the midpoint of an edge), negative scale factors and combined
> transformations (E7.1). All the vector work is Extended only: vectors in two dimensions (E7.2),
> magnitude (E7.3) and vector geometry (E7.4). Extended-only items are marked *(Extended)*.

## The four transformations

Each transformation needs specific information stated to describe it **fully** -- naming the transformation type alone never earns full marks.

| Transformation | Must be stated |
|---|---|
| Reflection | the mirror line (e.g. the x-axis, the line x = 2 or, at Extended, y = x) |
| Rotation | the angle (with direction, unless 180 degrees) **and** the centre |
| Enlargement | the scale factor **and** the centre |
| Translation | the full column vector |

An enlargement about the origin with scale factor k maps a point (x, y) to (kx, ky) -- **both** coordinates are multiplied by k, never added to.

A translation described by a column vector such as (4, -2) means "move 4 units in the positive x-direction and 2 units in the negative y-direction" -- the column vector itself IS the full description; no separate direction or distance needs to be added.

Common mirror lines and what they do to a point (x, y): reflection in the **x-axis** (y = 0) gives (x, -y); reflection in the **y-axis** (x = 0) gives (-x, y); *(Extended)* reflection in the line **y = x** gives (y, x), and reflection in the line **y = -x** gives (-y, -x). Recognising these four directly, rather than re-deriving them from a sketch each time, saves time under exam conditions.

## Vectors in two dimensions *(Extended)*

A vector has both magnitude and direction, and can be written as a column vector or in terms of letters (e.g. **a**, **b**). Vectors add and subtract component-wise:

```
a = (3, 4),  b = (-6, 1)
a + b = (3 + -6, 4 + 1) = (-3, 5)
2a - b = (6 - -6, 8 - 1) = (12, 7)
```

The vector from one point to another is always **end point minus start point** -- reversing the order gives the negative (opposite direction) vector.

```
OM = a,  ON = b
MN = ON - OM = b - a
NM = OM - ON = a - b   (the negative of MN)
```

## Magnitude of a vector *(Extended)*

```
|v| = sqrt(x^2 + y^2)
```

This is Pythagoras' theorem applied to a vector's horizontal and vertical components -- the same underlying idea as the coordinate-geometry length formula. The square root must not be forgotten at the end.

```
v = (-5, 12)
|v| = sqrt((-5)^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13
```

## Vector geometry *(Extended)*

Vector-geometry questions ask for a route between two points expressed only in terms of the given vectors (commonly **a** and **b**). Every intermediate step must eventually be rewritten using only those given vectors -- a route like "OM = OA + AM" is not a final answer until AM itself is converted into a and b terms.

```
Triangle OAB, OA = a, OB = b, M is the midpoint of AB.
OM = OA + (1/2)AB = a + (1/2)(b - a) = (1/2)a + (1/2)b
```

**Collinear points** (points on the same straight line): to prove three points are collinear, find two displacement vectors sharing a common point (for example AM and AB) and show that one is a **scalar multiple of the other**. Their common direction can itself be a combination of both given vectors -- for the midpoint example above, AM = (1/2)b − (1/2)a and AB = b − a, and AM = (1/2)AB even though both still contain a and b. Seeing both given vectors in a simplified route is not itself evidence of an arithmetic error; the test is whether the two compared vectors are proportional.

**Parallel vectors** work on the same principle as collinear points: two vectors are parallel exactly when one is a scalar multiple of the other, regardless of where either one is positioned in the plane. This is why "show that PQ is parallel to RS" questions are answered by reducing both vectors to their simplest form and checking one is a number times the other, not by any visual or coordinate-plotting argument.

## Exam traps

- Naming a transformation without the extra information needed to describe it fully -- the mirror line, the angle and centre, or the scale factor and centre.
- Applying an enlargement as if it were an addition, rather than multiplying both coordinates by the scale factor.
- *(Extended)* Subtracting vector components in the wrong order when finding the vector between two points.
- *(Extended)* Forgetting the final square root when calculating a vector's magnitude.
- *(Extended)* Leaving a vector-geometry route with an unconverted intermediate vector (e.g. "AM") instead of expressing every term in the given vectors only.

## Self-test

1. State the two pieces of information a full description of a rotation must always include.
2. A point (2, 5) is enlarged by scale factor 3 about the origin. State the coordinates of its image.
3. *(Extended)* Write down the formula for the magnitude of a vector (x, y).
4. *(Extended)* If M is the midpoint of AB, and OA = a, OB = b, write OM in terms of a and b.
5. *(Extended)* Explain what it means for the vector between three points to confirm they are collinear.
6. State the image of the point (x, y) after a reflection in the y-axis.
7. *(Extended)* Given OM = a and ON = b, write down the vector NM.

**Answers:** 1. The angle of rotation (with direction, unless 180 degrees) and the centre of rotation. 2. (6, 15). 3. |v| = sqrt(x^2 + y^2). 4. OM = (1/2)a + (1/2)b. 5. The vector between any two of the three points must simplify to a scalar multiple of the same single vector as the vector between the other pair -- confirming all three lie on one straight line. 6. (-x, y). 7. a - b, the negative of vector MN.
