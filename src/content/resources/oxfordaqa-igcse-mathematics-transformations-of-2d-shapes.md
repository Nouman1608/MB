---
title: "OxfordAQA International GCSE Mathematics: Transformations of 2D shapes (9260)"
seoTitle: "OxfordAQA IGCSE Maths Transformations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Transformations of 2D shapes"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 94
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-and-measures-oxfordaqa-igcse-maths"
    subtopic: "transformations-matrices-and-vectors-oxfordaqa-igcse-maths"
description: "Study guide to describing and carrying out rotations, reflections, translations and enlargements for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

This study guide covers reference G21 in section 3.3.3 (Transformations, Matrices and Vectors) of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1, for exams from May/June 2018 onwards. Core content is also assessable on the Extension tier. Content marked **Extension only** is combined transformations and enlargements with fractional or negative scale factors. The specification notes that translations are specified by a vector.

Related pages: [revision notes](/resources/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-revision-notes/), [practice questions](/resources/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-practice/), the [course hub](/boards/oxfordaqa/igcse/mathematics/), the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/) and the [free diagnostics](/diagnostics/). Vectors and matrices have their own pages, so this guide does not teach them.

## What G21 asks you to do

| Skill | Tier |
|---|---|
| Describe and carry out a single translation, given as a column vector | Core |
| Describe and carry out a single reflection in a line | Core |
| Describe and carry out a single rotation (centre, angle, direction) | Core |
| Describe and carry out an enlargement with a positive scale factor | Core |
| Say which properties a transformation preserves | Core |
| Describe and carry out a combination of transformations | Extension only |
| Enlarge by a fractional or negative scale factor | Extension only |

## The object and the image

The original shape is the **object**. After a transformation it becomes the **image**. A point P maps to P′ ("P dash"). Always label points this way so that you can see which point went where.

### Properties preserved

| Transformation | Lengths | Angles | Shape turned over? | Image congruent to object? |
|---|---|---|---|---|
| Translation | same | same | no | yes |
| Rotation | same | same | no | yes |
| Reflection | same | same | yes (mirror image) | yes |
| Enlargement, scale factor k | multiplied by k | same | no | no, but similar |

Congruent shapes have identical size and shape. Similar shapes have equal angles, and each side of one is the same multiple of the matching side of the other. Under an enlargement with scale factor k, areas are multiplied by k², not k. A **description** must be complete, so a single word such as "reflection" is never enough.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--03-what-each-move-keeps.webp" width="900" height="1010" alt="Four panels show a triangle and its image after a translation, a reflection, a rotation and an enlargement of scale factor 2. The first three images are congruent to the object, the reflection being turned over. The enlargement is similar but not congruent, with lengths doubled and area four times as big. Angles never change." loading="lazy">
  <figcaption>Translations, reflections and rotations give congruent images; an enlargement gives a similar one.</figcaption>
</figure>


## Translation
<!-- marlbridge-diagram:maths-b21-translation-coordinate-grid -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b21-translation-coordinate-grid.svg" aria-label="Open full-size diagram: maths-b21-translation-coordinate-grid"><img src="/images/learning/mathematics/maths-b21-translation-coordinate-grid.svg" width="1528" height="940" alt="Triangle A(-3,1), B(-1,1), C(-1,4) is translated by vector (5,-2) to A′(2,-1), B′(4,-1), C′(4,2). The congruent triangles show equal movement at every vertex." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Add the same column vector to each vertex. A translation preserves lengths, angles and orientation. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b21-translation-coordinate-grid -->


In a translation, every point of the shape moves by the same vector. The vector (a, b) means a units right (left if negative) and b units up (down if negative). Orientation and size do not change.

To describe a translation, subtract the coordinates of a point from those of its image.

**Example 1.** Triangle ABC has A(−3, 1), B(−1, 1) and C(−1, 4). It is translated by the vector (5, −2).

```
A′ = (−3 + 5, 1 − 2) = (2, −1)
B′ = (−1 + 5, 1 − 2) = (4, −1)
C′ = (−1 + 5, 4 − 2) = (4, 2)
```

To return A′B′C′ to ABC you use the opposite vector (−5, 2).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--03-translation-column-vector.webp" width="900" height="970" alt="Triangle ABC is translated by (4, -3): 4 right and 3 down. Every corner moves by the same arrow to A'(5,-1), B'(5,1), C'(7,-1)." loading="lazy">
  <figcaption>A translation slides every point by the same column vector without turning or resizing the shape.</figcaption>
</figure>


## Reflection

A reflection flips the shape over a **mirror line**. Every point and its image lie on opposite sides of the line, each at the same perpendicular distance from it. Points on the line do not move.

Useful rules for the lines you meet most often:

| Mirror line | Point (x, y) maps to |
|---|---|
| x = k | (2k − x, y) |
| y = k | (x, 2k − y) |
| y = x | (y, x) |
| y = −x | (−y, −x) |

**Example 2.** Triangle L(1, 1), M(4, 2), N(2, 5) is reflected in x = −1. Separately, the same triangle is reflected in y = x. Find both images.

```
In x = −1:  (x, y) → (−2 − x, y)
L′(−3, 1), M′(−6, 2), N′(−4, 5)

In y = x:   (x, y) → (y, x)
L″(1, 1), M″(2, 4), N″(5, 2)
```

L lies on the line y = x, so it does not move.

**Finding the mirror line.** Find the midpoint of any point and its image. The mirror line passes through it at right angles to the join. If (6, 1) maps to (2, 1), the points differ only in x and the midpoint has x = (6 + 2)/2 = 4. The mirror line is **x = 4**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--11-reflection-rules-table.webp" width="900" height="1145" alt="P(3,1) is reflected in x = 1, y = -1, y = x and y = -x to give (-1,1), (3,-3), (1,3) and (-1,-3), with each rule in a matching colour." loading="lazy">
  <figcaption>Where one point lands for each of the four common mirror lines.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--01-reflection-mirror-line.webp" width="900" height="845" alt="Triangle ABC is reflected in the vertical line x = 4. Dashed lines join each corner to its image and cross the mirror at their midpoints. Image corners are A'(7,2), B'(7,4), C'(5,2)." loading="lazy">
  <figcaption>A reflection puts each image point the same distance behind the mirror line, and is described by its mirror line.</figcaption>
</figure>


## Rotation

A rotation turns every point through the same angle about a fixed point, the **centre**. To describe one you must give three things: the angle, the direction (clockwise or anticlockwise) and the centre. For 180° the direction does not matter.

About the origin you can use these rules:

| Rotation | Image of the point (x, y) |
|---|---|
| a 90° turn, anticlockwise | (−y, x) |
| a 90° turn, clockwise | (y, −x) |
| a 180° turn | (−x, −y) |

For another centre C, work from the centre: write each point as a position relative to C, turn it, then add C back.

**Example 3.** Rotate triangle (2, 1), (5, 1), (5, 3) through 90° clockwise about (1, 0).

```
Relative to (1, 0):  (1, 1), (4, 1), (4, 3)
Turn 90° clockwise (x, y) → (y, −x):  (1, −1), (1, −4), (3, −4)
Add (1, 0) back:  (2, −1), (2, −4), (4, −4)
```

**Finding the centre.** A point and its image are equally far from the centre, so the centre must lie on the perpendicular bisector of the segment joining them. Use two pairs of points: the two bisectors cross at the centre.

**Example 4.** A rotation maps P(4, 3) to P′(0, 5) and Q(4, 1) to Q′(2, 5). Find the centre.

```
PP′: midpoint (2, 4), direction (−4, 2).
     Perpendicular bisector: y = 2x
QQ′: midpoint (3, 3), direction (−2, 4).
     Perpendicular bisector: y = 0.5x + 1.5
Solve 2x = 0.5x + 1.5:  x = 1, y = 2
```

The centre is (1, 2). Check the angle: P is (3, 1) from the centre and P′ is (−1, 3) from it. That is a turn of 90° anticlockwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--12-rotation-rules-origin.webp" width="900" height="1128" alt="P(3,1) maps to (-1,3) for 90 degrees anticlockwise, (1,-3) for 90 degrees clockwise and (-3,-1) for 180 degrees." loading="lazy">
  <figcaption>The three rotation rules about the origin shown on one point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--02-rotation-about-origin.webp" width="900" height="1065" alt="Triangle ABC is rotated 90 degrees clockwise about the origin. B(1,4) moves to B'(4,-1); the lines OB and OB' are equal and meet at a right angle. A rotation needs centre, angle and direction." loading="lazy">
  <figcaption>A rotation is described by its centre, angle and direction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--04-find-rotation-centre.webp" width="900" height="1030" alt="Perpendicular bisectors of two point-to-image joins cross at (3, 0), the centre of rotation. From there a vertex and its image are a quarter turn apart, anticlockwise." loading="lazy">
  <figcaption>The centre of a rotation is where the perpendicular bisectors of point-to-image joins meet.</figcaption>
</figure>


## Enlargement with a positive scale factor

To enlarge a shape you must know its **centre** and its **scale factor** k. Draw a ray from the centre through an object point. The image point sits on that ray, k times as far from the centre as the object point. If k is greater than 1 the image is bigger. A positive k keeps the image on the same side of the centre as the object.

**Example 5.** Enlarge triangle (2, 1), (3, 1), (3, 3) by scale factor 3, centre (1, 0).

```
Image = centre + 3 × (point − centre)
(2, 1): (1, 0) + 3(1, 1) = (4, 3)
(3, 1): (1, 0) + 3(2, 1) = (7, 3)
(3, 3): (1, 0) + 3(2, 3) = (7, 9)
```

The object has area ½ × 1 × 2 = 1 and the image has area 9, which is 3² times as big.

**Finding the centre.** Draw a line through each pair of corresponding points. The lines meet at the centre. Here (2, 1) to (4, 3) is the line y = x − 1, and (3, 3) to (7, 9) is the line y − 3 = 1.5(x − 3). They meet at (1, 0). The scale factor is the ratio of corresponding lengths: image ÷ object.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--04-enlargement-scale-factor-2.webp" width="900" height="945" alt="Triangle ABC is enlarged by scale factor 2 from P(1,1). Dashed lines from P pass through each corner to its image, which is twice as far from P. Every side doubles." loading="lazy">
  <figcaption>An enlargement multiplies every distance from the centre, and every side, by the scale factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-similarity-and-enlargement--04-find-the-centre.webp" width="900" height="1060" alt="Triangle K with vertices (4,1), (6,1), (4,3) is enlarged to K-prime with vertices (5,2), (9,2), (5,6). A line through each matching pair of vertices runs to (3, 0), the centre, and the base lengths 2 and 4 give scale factor 2." loading="lazy">
  <figcaption>Lines through matching vertices meet at the centre of enlargement.</figcaption>
</figure>


## Extension only: fractional scale factors

If 0 < k < 1 the enlargement makes the shape **smaller**, and the image is still on the same side of the centre. Say "enlargement, scale factor ½" even though the shape shrinks.

**Example 6 (Extension only).** Enlarge the triangle (0, 0), (4, 0), (0, 6) by scale factor ½, centre (6, 2).

```
(0, 0): (6, 2) + ½(−6, −2) = (3, 1)
(4, 0): (6, 2) + ½(−2, −2) = (5, 1)
(0, 6): (6, 2) + ½(−6, 4)  = (3, 4)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--09-enlargement-half-oxfordaqa.webp" width="900" height="1100" alt="Triangle (0,0), (4,0), (0,6) is enlarged by scale factor 1/2 from (6, 2) to (3,1), (5,1), (3,4). Every length halves and the area falls from 12 to 3." loading="lazy">
  <figcaption>A fractional scale factor shrinks the image towards the centre.</figcaption>
</figure>


## Extension only: negative scale factors

With a negative k the image lies on the **opposite side** of the centre from the object, and is turned through 180°. Its size is |k| times the object. Every image point is found by the same formula, centre + k × (point − centre).

**Example 7 (Extension only).** Enlarge (2, 2), (4, 2), (4, 3) by scale factor −2, centre (1, 1).

```
(2, 2): (1, 1) − 2(1, 1) = (−1, −1)
(4, 2): (1, 1) − 2(3, 1) = (−5, −1)
(4, 3): (1, 1) − 2(3, 2) = (−5, −3)
```

To find k from a diagram, compare lengths to get |k|, then decide the sign. If object and image are on opposite sides of the centre, k is negative.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--04-enlargement-negative.webp" width="900" height="890" alt="Triangle (2,1), (4,1), (4,2) is enlarged by scale factor -2 from the centre (1, 0). The image (-1,-2), (-5,-2), (-5,-4) lies on the opposite side of the centre, twice the size and upside down, with lines through the centre joining matching vertices." loading="lazy">
  <figcaption>A negative scale factor puts the image on the other side of the centre, upside down.</figcaption>
</figure>


## Extension only: combined transformations

A combination applies one transformation, then another to the image. **The order matters.** Take S with corners (1, 1), (3, 1), (3, 2).

**Example 8 (Extension only).** Compare "reflect in the x-axis, then rotate 90° anticlockwise about the origin" with the same two steps in the other order.

```
Reflect, then rotate:
(x, y) → (x, −y) → (y, x)
S → (1, 1), (1, 3), (2, 3)    a reflection in y = x

Rotate, then reflect:
(x, y) → (−y, x) → (−y, −x)
S → (−1, −1), (−1, −3), (−2, −3)    a reflection in y = −x
```

The two results differ, so the order cannot be swapped. A combination of two transformations can often be replaced by one. Three results are worth knowing:

* Reflections in two parallel lines give a translation. Reflecting in x = 1 and then x = 5 gives x → 2 − x → 10 − (2 − x) = x + 8, a translation by (8, 0). The distance is twice the gap between the lines.
* Reflections in the y-axis and then the x-axis give (x, y) → (−x, y) → (−x, −y), a rotation of 180° about the origin.
* Reflections in two lines that cross give a rotation about the crossing point, through twice the angle between the lines.

To describe the single equivalent transformation, track two or three points and compare the final positions with the start.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--10-two-mirrors-rotation.webp" width="900" height="1092" alt="Triangle S is reflected in y = 0 then in y = x, ending as a 90 degree anticlockwise rotation about O, twice the 45 degrees between the mirrors." loading="lazy">
  <figcaption>Two crossing mirrors turn a shape through twice the angle between them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--13-combined-order-matters.webp" width="900" height="900" alt="Reflect in the x-axis then rotate 90 degrees anticlockwise gives (1,1), (1,3), (2,3), a reflection in y = x. Rotating first then reflecting gives (-1,-1), (-1,-3), (-2,-3), a reflection in y = -x." loading="lazy">
  <figcaption>Example 8 with both orders drawn.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--01-parallel-mirrors-translation.webp" width="900" height="700" alt="A triangle is reflected in x = 1 and then in x = 5. Each point ends 8 units right of where it began, twice the 4 units between the mirrors, so the combination is a translation by the column vector (8, 0)." loading="lazy">
  <figcaption>Two reflections in parallel lines give a translation of twice the distance between them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-isometric-transformations-and-vectors--02-order-of-reflections.webp" width="900" height="970" alt="The point (2, 1) is reflected in the x-axis then y = x, ending at (-1, 2), a 90 degree anticlockwise turn about the origin. In the other order it ends at (1, -2), a clockwise turn." loading="lazy">
  <figcaption>Reflecting in the same two lines in a different order gives a different image.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--06-combination.webp" width="900" height="858" alt="Triangle B is reflected in the x-axis (dashed B1) then in the y-axis to give B2. A dashed line from (5,3) through the origin to (-5,-3) shows each point (x, y) goes to (-x, -y), which is a rotation of 180 degrees about the origin." loading="lazy">
  <figcaption>Reflecting in the x-axis and then the y-axis equals a single rotation of 180 degrees about the origin.</figcaption>
</figure>


## Common errors

* Writing only "rotation" or "enlargement". A full description needs the angle, direction and centre, or the scale factor and centre.
* Reading a vector as (up, right). The top number is the horizontal move.
* Reflecting in x = 3 by moving the point 3 units instead of measuring its distance from the line.
* Multiplying areas by k instead of k².
* Measuring enlargement distances from a corner instead of from the centre.
* Rotating "by eye" without checking one point's distance from the centre before and after.
* Forgetting that the first transformation in a combination is applied first.

## Frequently asked questions

**What are the four transformations in IGCSE Maths?**
Translation, reflection, rotation and enlargement. OxfordAQA International GCSE Mathematics (9260), reference G21, asks you to describe and carry out each one.

**How do you reflect a point in the line x = k?**
The point (x, y) maps to (2k − x, y), so the image is the same distance on the other side of the line. Moving the point k units instead of measuring its distance from the line is a common error.

**Is a fractional scale factor still called an enlargement?**
Yes. With 0 < k < 1 the shape gets smaller but is still described as an enlargement, for example "enlargement, scale factor ½". Fractional and negative scale factors are Extension only.

**What happens to the point (x, y) after a 90° anticlockwise rotation about the origin?**
It maps to (−y, x). A 90° clockwise rotation gives (y, −x), and a 180° rotation gives (−x, −y).

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. Reference G21 in section 3.3.3.
