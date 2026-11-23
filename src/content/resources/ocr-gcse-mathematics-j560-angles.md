---
title: "OCR GCSE Mathematics (J560): Angles"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 8 – Basic geometry"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 8.3
syllabusTopics:
  - qualification: "gcse"
    topic: "basic-geometry-ocr-gcse-maths"
    subtopic: "angles-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 8.03 in depth: angle facts, parallel lines, polygon angle sums, regular polygons and writing reasons and simple proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 8.03, Angles, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Knowing and using the angle facts, finding angles in rectilinear figures and justifying results in simple proofs are for **both tiers**. Applying the facts in more formal proofs is **Higher tier only**.

The [angle facts, polygons, triangle and quadrilateral guide](/resources/ocr-gcse-mathematics-angle-facts-polygons-triangle-and-quadrilateral/) introduces 8.03 alongside polygon properties. This page goes further on 8.03 alone: the exact wording of reasons, deriving the triangle and polygon angle sums, the "bent line" between parallel lines, deciding whether a regular polygon can exist, and regular polygons meeting at a point. Condense it with the [8.03 revision notes](/resources/ocr-gcse-mathematics-j560-angles-revision-notes/) and test yourself with the [8.03 practice questions](/resources/ocr-gcse-mathematics-j560-angles-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 8.03a | Know and use: the sum of the angles at a point is 360° | Both tiers |
| 8.03b | Know that the sum of the angles at a point on a line is 180° | Both tiers |
| 8.03c | Know and use: vertically opposite angles are equal; alternate angles on parallel lines are equal; corresponding angles on parallel lines are equal | Both tiers |
| 8.03d | Derive and use the sum of the interior angles of a triangle (180°) and the sum of the exterior angles of a polygon (360°); find the sum of the interior angles of a polygon; find the interior angle of a regular polygon | Both tiers |
| 8.03a–d | Apply these facts to find angles in rectilinear figures and to justify results in simple proofs | Both tiers |
| 8.03a–d | Apply these properties in more formal proofs of geometrical results | Higher tier only |

"Rectilinear figures" means shapes made of straight lines. The word **derive** in 8.03d means you may be asked to explain why the triangle and exterior-angle results are true, not just use them.

## Reasons: say it the way examiners expect

Many angle questions say "give reasons for your answer". A reason is a named fact, written in words.

| Situation | Reason to write |
|---|---|
| Angles meeting at a point | Angles at a point add up to 360° |
| Angles on one side of a straight line | Angles on a straight line add up to 180° |
| Two angles opposite each other where two lines cross | Vertically opposite angles are equal |
| Angles in a Z shape between parallel lines | Alternate angles are equal |
| Angles in an F shape on parallel lines | Corresponding angles are equal |
| Angles in a C or U shape between parallel lines | Co-interior angles add up to 180° |
| Inside a triangle | Angles in a triangle add up to 180° |

Write "alternate angles are equal", not "Z angles". Letter shapes help you spot the pair, but they are not reasons. Co-interior angles are not named in the specification list, but the result follows from corresponding angles and angles on a line, and you can use it with that justification if needed.

**Worked example 1.** Lines PQ and RS are parallel. A transversal crosses PQ at T and RS at U. Angle PTU = (3x + 10)° and angle TUS = (5x − 30)°, and these two angles form a Z shape. Find x and angle PTU.

```
3x + 10 = 5x − 30      alternate angles are equal
40 = 2x
x = 20
angle PTU = 3(20) + 10 = 70°
```

Check: 5(20) − 30 = 70, so both expressions agree.

## Deriving the triangle angle sum

The specification asks you to derive this, so learn the argument.

Take triangle ABC. Draw the line through A parallel to BC.

- The angle between this line and AB equals angle B (alternate angles are equal).
- The angle between this line and AC, on the other side, equals angle C (alternate angles are equal).
- These two angles and angle A lie together on a straight line, so they add up to 180° (angles on a straight line).

So angle A + angle B + angle C = 180°.

**Worked example 2 (a simple proof).** Prove that an exterior angle of a triangle equals the sum of the two interior opposite angles.

Extend BC beyond C to a point D. The exterior angle is angle ACD.

```
angle ACD = 180° − angle ACB              angles on a straight line add up to 180°
angle A + angle B = 180° − angle ACB      angles in a triangle add up to 180°
so angle ACD = angle A + angle B
```

Both expressions equal 180° − angle ACB, so they are equal. Each line has its reason.

## The "bent line" between parallel lines

**Worked example 3.** Two parallel lines run from left to right: AB on top, with A to the right of B, and CD below, with C to the right of D. A point E lies between the lines, to the right of B and D. Angle ABE = 38° and angle CDE = 47°. Find angle BED and justify your answer.

No single fact connects these angles, so add a construction line: draw a line through E parallel to AB (and therefore to CD).

```
upper part of angle BED = 38°     alternate angles are equal (with AB)
lower part of angle BED = 47°     alternate angles are equal (with CD)
angle BED = 38° + 47° = 85°
```

Drawing an extra parallel line is a standard move in formal proofs on the Higher tier. Say clearly that you have drawn it and that it is parallel to the given lines.

## Polygons

### Exterior angles add up to 360°

Walk round any convex polygon. At each vertex you turn through the exterior angle. After one lap you face your starting direction, having turned through one full turn, 360°. So the exterior angles add up to 360°, whatever the number of sides.

At every vertex, interior angle + exterior angle = 180°, because they lie on a straight line.

### Interior angles

From one vertex of an n-sided polygon you can draw diagonals that split it into (n − 2) triangles, each with angle sum 180°.

```
sum of interior angles = (n − 2) × 180°
regular polygon:  exterior angle = 360° ÷ n
                  interior angle = 180° − exterior angle
```

**Worked example 4.** (a) A polygon has interior angles that add up to 1980°. How many sides does it have? (b) Can a regular polygon have an interior angle of 100°?

```
(a) (n − 2) × 180 = 1980
    n − 2 = 11
    n = 13 sides

(b) exterior angle = 180 − 100 = 80°
    number of sides = 360 ÷ 80 = 4.5
```

In part (b), a polygon cannot have 4.5 sides, so no regular polygon has an interior angle of 100°. The test works for any proposed angle: a regular polygon exists only if 360 divided by the exterior angle is a whole number of at least 3.

### Regular polygons meeting at a point

**Worked example 5.** Regular pentagon ABCDE and equilateral triangle ABF share the side AB, with F outside the pentagon. Find angle EAF and angle AEF.

```
interior angle of a regular pentagon = 180 − 360 ÷ 5 = 108°
angle EAF = 108° + 60° = 168°
AE = AB = AF, so triangle AEF is isosceles
angle AEF = (180 − 168) ÷ 2 = 6°
```

Use the same idea to test whether shapes fit together round a point. Two regular octagons and a square: 135° + 135° + 90° = 360°, so they fit exactly with no gap.

## Common mistakes

- Writing "Z angles" or "F angles" instead of naming the fact.
- Using alternate or corresponding angles when the lines are not stated or marked as parallel.
- Mixing up interior and exterior angles in a polygon.
- Using n × 180° instead of (n − 2) × 180° for the interior sum.
- Dividing 360° by the interior angle instead of the exterior angle to find the number of sides.
- Giving a final answer with no reason when reasons are asked for.
- Measuring a diagram that is "not drawn accurately".

## Exam technique for OCR command words

- **Work out** or **Find**: show each angle you find on the way, and label it on the diagram.
- **Give reasons for your answer**: one reason for each step, written as the full fact.
- **Show that**: the final value is printed, so the reasoning is what earns the marks.
- **Prove** (Higher tier formal proof): state each step with its reason, include any construction line, and finish with a sentence that matches what had to be proved.
- **Explain why** a regular polygon cannot have a given angle: show the division and say why the result is impossible.

## Next steps

- Condense the facts with the [angles revision notes](/resources/ocr-gcse-mathematics-j560-angles-revision-notes/).
- Test yourself with the [angles practice questions](/resources/ocr-gcse-mathematics-j560-angles-practice/).
- Move on to the properties of triangles and quadrilaterals in the [properties of polygons guide](/resources/ocr-gcse-mathematics-j560-properties-of-polygons/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 8.03, Angles.
