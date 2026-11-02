---
title: "OxfordAQA International GCSE Mathematics: Transformations of 2D shapes (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Transformations Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on rotation, reflection, translation and enlargement for OxfordAQA International GCSE Mathematics, with a short self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense reference G21 in section 3.3.3 of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1, for exams from May/June 2018 onwards. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes/). Test yourself with the [practice questions](/resources/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-practice/), tick topics off on the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/), find the [course hub](/boards/oxfordaqa/igcse/mathematics/) here, and try a [free diagnostic](/diagnostics/) to find weak spots. Content labelled **Extension only** is combined transformations and fractional or negative enlargements. Everything else is Core and is also assessable on the Extension tier.

## Describing each transformation

| Transformation | You must state |
|---|---|
| Translation | the column vector (a, b) |
| Reflection | the equation of the mirror line |
| Rotation | angle, direction (clockwise or anticlockwise), centre |
| Enlargement | scale factor and centre |

Use one transformation per description. If a question asks for a single transformation, do not name two.

## Properties preserved

| | Lengths | Angles | Area | Congruent? |
|---|---|---|---|---|
| Translation | same | same | same | yes |
| Rotation | same | same | same | yes |
| Reflection | same | same | same | yes |
| Enlargement, factor k | × k | same | × k² | no, similar |

* Reflection reverses the orientation, so the image is a mirror image. Translation, rotation and positive enlargement do not.
* Lengths scale by k and areas by k². The perimeter scales by k.
* Invariant points do not move. On a reflection they are the points on the mirror line. On a rotation it is the centre only. On an enlargement it is the centre only. A translation has none.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--03-what-each-move-keeps.webp" width="900" height="1010" alt="Four panels show a triangle and its image after a translation, a reflection, a rotation and an enlargement of scale factor 2. The first three images are congruent to the object, the reflection being turned over. The enlargement is similar but not congruent, with lengths doubled and area four times as big. Angles never change." loading="lazy">
  <figcaption>Translations, reflections and rotations give congruent images; an enlargement gives a similar one.</figcaption>
</figure>


## Translation

* Vector (a, b): a is the horizontal move (right is positive) and b is the vertical move (up is positive).
* Image = (x + a, y + b).
* Find the vector by taking the image point minus the object point.
* The inverse translation uses (−a, −b).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--03-translation-column-vector.webp" width="900" height="970" alt="Triangle ABC is translated by (4, -3): 4 right and 3 down. Every corner moves by the same arrow to A'(5,-1), B'(5,1), C'(7,-1)." loading="lazy">
  <figcaption>A translation slides every point by the same column vector without turning or resizing the shape.</figcaption>
</figure>


## Reflection

| Mirror line | (x, y) maps to |
|---|---|
| x = k | (2k − x, y) |
| y = k | (x, 2k − y) |
| y = x | (y, x) |
| y = −x | (−y, −x) |

**To find the mirror line:** take any point and the point it maps to, find their midpoint, then draw the line through it at right angles to the join. For (2, 7) and (2, 1) the mirror line is horizontal through the midpoint (2, 4), so it is y = 4.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--11-reflection-rules-table.webp" width="900" height="1145" alt="P(3,1) is reflected in x = 1, y = -1, y = x and y = -x to give (-1,1), (3,-3), (1,3) and (-1,-3), with each rule in a matching colour." loading="lazy">
  <figcaption>Where one point lands for each of the four common mirror lines.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--01-reflection-mirror-line.webp" width="900" height="845" alt="Triangle ABC is reflected in the vertical line x = 4. Dashed lines join each corner to its image and cross the mirror at their midpoints. Image corners are A'(7,2), B'(7,4), C'(5,2)." loading="lazy">
  <figcaption>A reflection puts each image point the same distance behind the mirror line, and is described by its mirror line.</figcaption>
</figure>


## Rotation

| Rotation about the origin | Image of the point (x, y) |
|---|---|
| a 90° turn, anticlockwise | (−y, x) |
| a 90° turn, clockwise | (y, −x) |
| a 180° turn | (−x, −y) |

**Method for another centre C in steps:**

1. Subtract C from the point to get its relative position.
2. Turn the relative position using the table.
3. Add C back.

**To find the centre:** draw the perpendicular bisector of two different point and image pairs. They cross at the centre. To find the angle, compare the direction of a point from the centre with the direction of its image.

Quick check: a point and its image must be equally far from the centre.

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


## Enlargement (positive scale factor)

* Image = centre + k × (point − centre).
* If k > 1 the image is larger. The image is on the same side of the centre as the object.
* To find the centre, join each point to its image with a straight line. The lines meet at the centre.
* To find k, divide an image length by the matching object length.
* Area and volume: multiply areas by k², not k.

**Worked reminder.** Enlarge (3, 2) by scale factor 4, centre (1, 1). The relative position is (2, 1). Multiply by 4 to get (8, 4). Add the centre to get (9, 5).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--04-enlargement-scale-factor-2.webp" width="900" height="945" alt="Triangle ABC is enlarged by scale factor 2 from P(1,1). Dashed lines from P pass through each corner to its image, which is twice as far from P. Every side doubles." loading="lazy">
  <figcaption>An enlargement multiplies every distance from the centre, and every side, by the scale factor.</figcaption>
</figure>


## Extension only: fractional and negative scale factors

| Scale factor | Effect on the image |
|---|---|
| k > 1 | larger, same side of centre |
| 0 < k < 1 | smaller, same side of centre |
| −1 < k < 0 | smaller, opposite side of centre |
| k < −1 | larger, opposite side of centre |
| k = −1 | same size, opposite side: a rotation of 180° about the centre |

* The same formula applies for every k: image = centre + k × (point − centre).
* The image size is |k| times the object, whatever the sign.
* To find the sign of k, look at which side of the centre the image is on.

**Worked reminder.** Centre (0, 0), k = −½, point (6, −4). The image is −½ × (6, −4) = (−3, 2).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--09-enlargement-half-oxfordaqa.webp" width="900" height="1100" alt="Triangle (0,0), (4,0), (0,6) is enlarged by scale factor 1/2 from (6, 2) to (3,1), (5,1), (3,4). Every length halves and the area falls from 12 to 3." loading="lazy">
  <figcaption>A fractional scale factor shrinks the image towards the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--04-enlargement-negative.webp" width="900" height="890" alt="Triangle (2,1), (4,1), (4,2) is enlarged by scale factor -2 from the centre (1, 0). The image (-1,-2), (-5,-2), (-5,-4) lies on the opposite side of the centre, twice the size and upside down, with lines through the centre joining matching vertices." loading="lazy">
  <figcaption>A negative scale factor puts the image on the other side of the centre, upside down.</figcaption>
</figure>


## Extension only: combined transformations

* Work through the transformations in the order given. The first one is applied first.
* Swapping the order often changes the answer. Reflect in y = 0 then rotate 90° anticlockwise about the origin gives reflection in y = x. Rotating first and then reflecting in y = 0 gives reflection in y = −x.
* Two reflections in parallel lines give a translation. Its length is twice the gap between the mirror lines.
* Two reflections in lines that cross give a rotation about the crossing point. The angle is twice the angle between the lines.
* Two translations add their vectors. Two enlargements about the same centre multiply their scale factors.

**To describe the single transformation:** follow two or three points through every step. Then compare their final positions with their starting positions. Decide which single transformation fits, and check it with a third point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--10-two-mirrors-rotation.webp" width="900" height="1092" alt="Triangle S is reflected in y = 0 then in y = x, ending as a 90 degree anticlockwise rotation about O, twice the 45 degrees between the mirrors." loading="lazy">
  <figcaption>Two crossing mirrors turn a shape through twice the angle between them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-transformations-of-2d-shapes--13-combined-order-matters.webp" width="900" height="900" alt="Reflect in the x-axis then rotate 90 degrees anticlockwise gives (1,1), (1,3), (2,3), a reflection in y = x. Rotating first then reflecting gives (-1,-1), (-1,-3), (-2,-3), a reflection in y = -x." loading="lazy">
  <figcaption>Example 8 with both orders drawn.</figcaption>
</figure>


## Identifying a single transformation from a diagram

1. Compare the size. If lengths have changed, it is an enlargement. If not, it is a translation, rotation or reflection.
2. If the lengths are the same, check whether the image is a mirror image. Walk round the vertices of the object in order, then round the matching vertices of the image. If the direction of travel has reversed, it is a reflection.
3. If the shape is the same way round and every side stays parallel to the original, it is a translation, or a rotation of 180°.
4. If the sides have turned to a new direction, it is a rotation. Find the centre with two perpendicular bisectors.
5. Write the full description, then test one vertex against it.

**Worked reminder.** Point (5, 2) is reflected in x = −1. The distance from the line is 5 − (−1) = 6, so the image is 6 units on the other side, at x = −1 − 6 = −7. The image is (−7, 2). The formula agrees: 2(−1) − 5 = −7.

## Must-know distinctions

* **Object and image:** the object is the original. The image is the result.
* **Congruent and similar:** congruent means identical in size and shape. Similar means the same shape with a constant ratio of lengths.
* **Scale factor and area factor:** scale factor k, area factor k².
* **Describe and carry out:** describing needs every defining detail. Carrying out needs the image drawn or its coordinates.

## Quick self-test

1. Translate (1, 1), (3, 1), (3, 2) by the vector (−2, −4). State the image coordinates.
2. Reflect (1, 0), (3, 0), (3, 2) in the line y = 2. State the image coordinates.
3. Rotate the point (2, 5) through 90° clockwise about the origin.
4. Enlarge the point (1, 2) by scale factor 3 from the origin.
5. (Extension only) Enlarge the point (2, 3) by scale factor −3, centre (1, 1).
6. (Extension only) Enlarge the point (8, 0) by scale factor ¼, centre (0, 4).
7. Rotate (5, 3) through 180° about (2, 2).
8. Reflect (3, −4) in the line y = −x.
9. (Extension only) The point (1, 1) is reflected in x = 3 and then in x = 7. State its final position and the single transformation that has the same effect.
10. A rectangle has area 20 cm² and perimeter 18 cm. It is enlarged by scale factor 1.5. State the new area and perimeter.

### Answers

1. (−1, −3), (1, −3), (1, −2)
2. (1, 4), (3, 4), (3, 2)
3. (5, −2), using (x, y) → (y, −x).
4. (3, 6)
5. (−2, −5). The relative position is (1, 2), and −3 times that is (−3, −6). Adding (1, 1) gives (−2, −5).
6. (2, 3). The relative position is (8, −4), and ¼ of that is (2, −1). Adding (0, 4) gives (2, 3).
7. (−1, 1). The relative position is (3, 1), the turn gives (−3, −1), and adding (2, 2) gives (−1, 1).
8. (4, −3), using (x, y) → (−y, −x).
9. (9, 1). In x = 3 the point goes to (5, 1) and in x = 7 it goes to (9, 1). The single transformation is a translation by (8, 0), which is twice the gap of 4 between the lines.
10. Area 20 × 1.5² = 45 cm². Perimeter 18 × 1.5 = 27 cm.

## Where marks are usually lost

* Giving a one-word description, such as "rotation", when the centre, angle and direction are also needed.
* Leaving out the direction of a rotation that is not 180°.
* Swapping the two numbers in a translation vector.
* Reflecting in x = k or y = k by moving a fixed distance rather than doubling the distance to the line.
* Multiplying area by k instead of k².
* Starting an enlargement from the object corner instead of from the centre.
* Calling a reduction "not an enlargement". A fractional scale factor is still called an enlargement.
* Getting the sign of a negative scale factor wrong, or putting the image on the same side of the centre.
* Applying combined transformations in the wrong order.
* Giving an unlabelled image. Mark every vertex clearly so that your working can be followed.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. Reference G21 in section 3.3.3.
