---
title: "Cambridge IGCSE Mathematics (0580): Transformations -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0580 subtopic 7.1: coordinate rules for the four transformations, the describe-fully checklist, Core and Extended limits and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **7.1 Transformations** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). It is in both tiers; lines marked *(Extended)* are in E7.1 only. For full explanations and worked examples, read the [transformations study guide](/resources/cambridge-igcse-mathematics-0580-transformations-cambridge-igcse-maths/); for exam-style questions, use the [transformations practice questions](/resources/cambridge-igcse-mathematics-0580-transformations-cambridge-igcse-maths-practice/).

## Core and Extended at a glance

| | Core (C7.1) | Extended (E7.1) |
|---|---|---|
| Reflection | vertical or horizontal mirror line | any straight line |
| Rotation (multiples of 90°) | about the origin, a vertex or the midpoint of an edge | about any centre |
| Enlargement | positive and fractional scale factors | also negative scale factors |
| Translation | column vector | column vector |
| Combinations | not examined | may be examined |

A ruler must be used for all straight edges.

## Key terms

| Term | Meaning |
|---|---|
| Object | The original shape |
| Image | The shape after the transformation |
| Mirror line | The line of reflection; give its equation |
| Centre of rotation | The fixed point the shape turns about |
| Centre of enlargement | The point lengths are measured from |
| Scale factor | Image length ÷ object length (negative: image on the opposite side of the centre) |
| Column vector | (x, y): x across, y up |
| Congruent | Same shape and size: reflections, rotations and translations give congruent images |
| Similar | Same shape, sizes in proportion: enlargements give similar images |

## Coordinate rules

```
Reflect in x = k:      (x, y) → (2k − x, y)
Reflect in y = k:      (x, y) → (x, 2k − y)
Reflect in y = x:      (x, y) → (y, x)            (Extended)
Reflect in y = −x:     (x, y) → (−y, −x)          (Extended)

Rotate about O:
  90° anticlockwise    (x, y) → (−y, x)
  90° clockwise        (x, y) → (y, −x)
  180°                 (x, y) → (−x, −y)
Other centre: subtract the centre, rotate, add the centre back.

Enlarge, centre C, scale factor k:   image = C + k(point − C)
Translate by (a, b):                 (x, y) → (x + a, y + b)
```

## Describe fully: the checklist

| Transformation | Name + | Details |
|---|---|---|
| Reflection | reflection | equation of the mirror line |
| Rotation | rotation | centre, angle, direction (not needed for 180°) |
| Enlargement | enlargement | centre, scale factor |
| Translation | translation | column vector |

"Describe the **single** transformation" means one transformation only.

## Finding the missing detail

- **Mirror line:** the perpendicular bisector of the line joining a point to its image.
- **Centre of rotation:** where the perpendicular bisectors of two point-to-image segments cross (or trial with tracing paper).
- **Angle of rotation:** compare the direction of one edge before and after.
- **Centre of enlargement:** where lines through corresponding vertices meet.
- **Scale factor:** image length ÷ object length; negative if the image is on the other side of the centre and inverted.

**Worked reminder: centre of enlargement by calculation.** If image = C + k(point − C), then C = (k × point − image) ÷ (k − 1). An enlargement with scale factor 2 maps (3, 2) to (5, 1):

```
C = (2 × (3, 2) − (5, 1)) ÷ (2 − 1) = (6 − 5, 4 − 1) = (1, 3)
Check: (1, 3) + 2 × ((3, 2) − (1, 3)) = (1, 3) + (4, −2) = (5, 1) ✓
```

## Sizes and areas

| Transformation | Lengths | Area |
|---|---|---|
| Reflection, rotation, translation | unchanged | unchanged |
| Enlargement, scale factor k | × size of k | × k² |

An enlargement with scale factor −1 has the same effect as a rotation of 180° about the centre.

## Combinations *(Extended)*

Do the first, then the second to the image. Order matters.

```
Reflect in x-axis, then in y-axis   →  rotation 180° about O
Reflect in y-axis, then rotate 90° anticlockwise about O   →  reflection in y = −x
```

## Exam traps

- Leaving out the centre or direction of a rotation.
- Calling a mirror line "the x-axis line" instead of y = 0.
- Measuring an enlargement from the origin when the centre is somewhere else.
- Drawing the image of a fractional enlargement larger than the object.
- Rotating about the wrong point, such as the origin instead of a vertex.
- *(Extended)* Putting a negative-scale-factor image on the same side as the object.
- *(Extended)* Applying combined transformations in the wrong order.

## Self-test

1. Reflect (3, −2) in the line y = 2.
2. Reflect (−1, 5) in the line x = 3.
3. Rotate (4, 1) through 90° anticlockwise about the origin.
4. Rotate (4, 1) through 90° clockwise about (2, 3).
5. Enlarge (6, 2) by scale factor ½, centre (2, 0).
6. A point moves from (2, 7) to (−3, 9). Write the translation as a column vector.
7. A shape of area 5 cm² is enlarged by scale factor 3. Find the area of the image.
8. *(Extended)* Reflect (2, −5) in the line y = x.
9. *(Extended)* Enlarge (3, 4) by scale factor −1, centre (1, 2).
10. *(Extended)* Which single transformation is the same as an enlargement with scale factor −1 about the origin?
11. What four things make a full description of a rotation?
12. *(Extended)* Reflect in the x-axis, then reflect in the y-axis. What single transformation is this?

### Answers

1. **(3, 6)**
2. **(7, 5)**
3. **(−1, 4)**
4. Subtract (2, 3): (2, −2); clockwise: (−2, −2); add back: **(0, 1)**
5. (2, 0) + ½(4, 2) = **(4, 1)**
6. **(−5, 2)**
7. 5 × 3² = **45 cm²**
8. **(−5, 2)**
9. (1, 2) − (2, 2) = **(−1, 0)**
10. **Rotation of 180° about the origin**
11. The word rotation, the **centre**, the **angle** and the **direction**
12. **Rotation of 180° about the origin**

## Next steps

- Re-read the worked examples in the [transformations study guide](/resources/cambridge-igcse-mathematics-0580-transformations-cambridge-igcse-maths/).
- Recap Topic 7 with the [transformations and vectors revision notes](/resources/igcse-mathematics-transformations-and-vectors-revision-notes/).
- Mixed Topic 7 questions: [transformations and vectors practice](/resources/igcse-mathematics-transformations-and-vectors-practice/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International. Topic 7 Transformations and vectors, subtopics C7.1 and E7.1 Transformations.
