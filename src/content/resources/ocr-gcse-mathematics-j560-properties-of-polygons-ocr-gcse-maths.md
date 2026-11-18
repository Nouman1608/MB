---
title: "OCR GCSE Mathematics (J560): Properties of polygons"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 8 – Basic geometry"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 8.4
syllabusTopics:
  - qualification: "gcse"
    topic: "basic-geometry-ocr-gcse-maths"
    subtopic: "properties-of-polygons-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 8.04 in depth: triangle and quadrilateral properties, diagonals, justifying properties, symmetry and formal proofs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 8.04, Properties of polygons, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Knowing, justifying and using the properties of triangles and quadrilaterals, and identifying symmetry, are for **both tiers**. Using these facts in more formal proofs, for example of circle theorems, is **Higher tier only**.

The [angle facts, polygons, triangle and quadrilateral guide](/resources/ocr-gcse-mathematics-angle-facts-polygons-triangle-and-quadrilateral/) introduces 8.04 alongside angle facts. This page goes further on 8.04 alone: a full property table including diagonals, short geometrical justifications of the properties, identifying a shape from its diagonals, lengths from diagonal facts, a symmetry table and a formal proof that uses isosceles triangles. Condense it with the [8.04 revision notes](/resources/ocr-gcse-mathematics-j560-properties-of-polygons-ocr-gcse-maths-revision-notes/) and test yourself with the [8.04 practice questions](/resources/ocr-gcse-mathematics-j560-properties-of-polygons-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 8.04a | Know the basic properties of isosceles, equilateral and right-angled triangles, and give geometrical reasons to justify them | Both tiers |
| 8.04b | Know the basic properties of the square, rectangle, parallelogram, trapezium, kite and rhombus, and give geometrical reasons to justify them | Both tiers |
| 8.04a, b | Use these facts to find lengths and angles in rectilinear figures and in simple proofs | Both tiers |
| 8.04a, b | Use these facts in more formal proofs of geometrical results, for example circle theorems | Higher tier only |
| 8.04c | Identify reflection and rotation symmetries of triangles, quadrilaterals and other polygons | Both tiers |

## Triangles

| Triangle | Sides | Angles | Lines of symmetry |
|---|---|---|---|
| Equilateral | 3 equal | 3 equal, each 60° | 3 |
| Isosceles | 2 equal | 2 equal base angles, opposite the equal sides | 1 |
| Right-angled | the longest side, opposite the right angle, is the hypotenuse | one angle of 90°; the other two add up to 90° | 0, unless it is also isosceles |

A right-angled isosceles triangle has angles 90°, 45° and 45°, and one line of symmetry.

**Justifying the properties.** The specification asks for reasons, not just recall.

- *Equilateral angles are 60°.* All three sides are equal, so all three angles are equal (each pair of sides makes the triangle isosceles both ways). Three equal angles adding to 180° gives 60° each.
- *The other two angles of a right-angled triangle add up to 90°.* The angles of a triangle add up to 180°, and 180° − 90° = 90°.
- *Isosceles base angles are equal.* The line from the top vertex to the midpoint of the base is a line of symmetry; reflecting in it swaps the two base angles, so they are equal. (A congruence proof of this is in section 9.02.)

## Quadrilaterals: full property table

| Property | Square | Rectangle | Rhombus | Parallelogram | Kite | Trapezium |
|---|---|---|---|---|---|---|
| All sides equal | yes | no | yes | no | no | no |
| Opposite sides parallel | both pairs | both pairs | both pairs | both pairs | no | one pair |
| Opposite sides equal | yes | yes | yes | yes | no | not in general |
| All angles 90° | yes | yes | no | no | no | no |
| Opposite angles equal | yes | yes | yes | yes | one pair | not in general |
| Diagonals equal | yes | yes | no | no | no | not in general |
| Diagonals bisect each other | yes | yes | yes | yes | no (one bisects the other) | no |
| Diagonals perpendicular | yes | no | yes | no | yes | not in general |
| Diagonals bisect the angles | yes | no | yes | no | one diagonal does | no |

The "no" entries mean "not in general": a particular rectangle could be a square. An isosceles trapezium (non-parallel sides equal) has equal diagonals and equal base angles, and one line of symmetry.

**Worked example 1 (justifying a property).** Prove that the opposite angles of a parallelogram ABCD are equal.

```
AB ∥ DC, so angle A + angle D = 180°     co-interior angles add up to 180°
AD ∥ BC, so angle D + angle C = 180°     co-interior angles add up to 180°
so angle A = 180° − angle D = angle C
```

The same argument with the other pair of parallel sides shows angle B = angle D.

## Identifying a quadrilateral from its diagonals

Read the table backwards.

**Worked example 2.** Name each quadrilateral.

| Diagonal facts | Shape |
|---|---|
| Equal, and bisect each other, but not perpendicular | Rectangle |
| Bisect each other at right angles, but not equal | Rhombus |
| Equal, bisect each other, and perpendicular | Square |
| Bisect each other only | Parallelogram |
| Perpendicular, and only one bisects the other | Kite |

## Finding angles and lengths

**Worked example 3.** Kite ABCD has AB = AD and CB = CD. Angle BAD = 70° and angle ABC = 115°. Find angle BCD and angle BAC.

```
angle ADC = angle ABC = 115°     the angles between unequal sides of a kite are equal
angle BCD = 360 − 70 − 115 − 115 = 60°     angles in a quadrilateral add up to 360°
angle BAC = 70 ÷ 2 = 35°         diagonal AC is the line of symmetry and bisects angle A
```

**Worked example 4.** The diagonals of a rhombus are 10 cm and 24 cm long. Find the length of a side and the perimeter.

```
diagonals bisect each other at right angles:
half-diagonals 5 cm and 12 cm meet at 90°
side² = 5² + 12² = 25 + 144 = 169
side = 13 cm,  perimeter = 4 × 13 = 52 cm
```

The four triangles formed by the diagonals are identical right-angled triangles. This uses Pythagoras' theorem from the mensuration section.

**Worked example 5.** In rectangle PQRS the diagonals meet at M. PM = (2x + 1) cm and QM = (x + 4) cm. Find x and the length of each diagonal.

```
diagonals of a rectangle are equal and bisect each other, so PM = QM
2x + 1 = x + 4
x = 3
PM = 7 cm,  diagonal PR = 2 × 7 = 14 cm
```

## Symmetry

A shape has **reflection symmetry** if a mirror line maps it onto itself. It has **rotation symmetry of order k** if it fits onto itself k times in one full turn (order 1 means no rotation symmetry).

| Shape | Lines of symmetry | Order of rotation symmetry |
|---|---|---|
| Equilateral triangle | 3 | 3 |
| Isosceles triangle | 1 | 1 |
| Scalene triangle | 0 | 1 |
| Square | 4 | 4 |
| Rectangle | 2 | 2 |
| Rhombus | 2 (the diagonals) | 2 |
| Parallelogram | 0 | 2 |
| Kite | 1 (one diagonal) | 1 |
| Isosceles trapezium | 1 | 1 |
| Regular n-sided polygon | n | n |

Two traps: a rectangle's diagonals are **not** lines of symmetry (fold one along a diagonal and the corners do not meet), and a parallelogram has rotation symmetry of order 2 but no lines of symmetry.

## A formal proof (Higher tier only)

The specification gives circle theorems as an example of formal proofs that use polygon properties.

**Worked example 6 (Higher tier only).** AB is a diameter of a circle with centre O, and C is any other point on the circle. Prove that angle ACB = 90°.

```
OA = OB = OC                      radii of the same circle
triangle OAC is isosceles, so angle OCA = angle OAC = x
triangle OBC is isosceles, so angle OCB = angle OBC = y
in triangle ABC:  x + y + (x + y) = 180     angles in a triangle add up to 180°
2(x + y) = 180,  x + y = 90
angle ACB = angle OCA + angle OCB = x + y = 90°
```

Each step names its reason, letters stand for the unknown angles, and the final line states the result.

## Common mistakes

- Saying a rectangle's diagonals are perpendicular, or that they are lines of symmetry.
- Saying both diagonals of a kite bisect each other.
- Giving a parallelogram lines of symmetry.
- Using the equal angles of a kite between the equal sides instead of between the unequal sides.
- Halving a rhombus diagonal in one place but not the other before using Pythagoras.
- Stating a property with no geometrical reason when the question asks you to justify it.

## Exam technique for OCR command words

- **Give a reason** or **Justify**: quote the property, for example "the diagonals of a rhombus bisect each other at right angles".
- **Write down the order of rotation symmetry**: a number, at least 1.
- **Find** a length or angle in a shape: write each property you use beside the step.
- **Prove** (formal proofs, Higher tier only): introduce letters for unknown angles, give a reason for every line, and finish by stating the result.

## Next steps

- Condense the properties with the [properties of polygons revision notes](/resources/ocr-gcse-mathematics-j560-properties-of-polygons-ocr-gcse-maths-revision-notes/).
- Test yourself with the [properties of polygons practice questions](/resources/ocr-gcse-mathematics-j560-properties-of-polygons-ocr-gcse-maths-practice/).
- Combine properties with angle facts in the [angles guide](/resources/ocr-gcse-mathematics-j560-angles-ocr-gcse-maths/) and see more circle-theorem proofs in the [circle theorems and proofs guide](/resources/ocr-gcse-mathematics-circle-theorems-and-proofs/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 8.04, Properties of polygons.
