---
title: "OCR GCSE Mathematics: Circle theorems and proofs (J560)"
seoTitle: "OCR GCSE Maths Circle Theorems and Proofs Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Circle theorems and proofs"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 58
syllabusTopics:
  - qualification: "gcse"
    topic: "basic-geometry-ocr-gcse-maths"
    subtopic: "circles-ocr-gcse-maths"
description: "Study guide to OCR GCSE Mathematics J560 section 8.05: circle terms, every circle theorem and its proof, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers section 8.05 (Circles) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). The circle vocabulary in 8.05a is for both tiers. The theorems in 8.05b to 8.05h appear only in the Higher tier column of the specification, where each is "apply and prove", so this page marks them **Higher tier only**.

Use it with the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) and the [printable checklist](/checklists/ocr/gcse/mathematics/). The condensed version is the [revision notes](/resources/ocr-gcse-mathematics-circle-theorems-and-proofs-revision-notes/), and the [practice set](/resources/ocr-gcse-mathematics-circle-theorems-and-proofs-practice/) tests everything below. To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| 8.05a | Use the terms centre, radius, chord, diameter, circumference | Both tiers |
| 8.05a | Use the terms tangent, arc, sector, segment | Both tiers |
| 8.05b | Angle at the centre is twice the angle at the circumference: apply and prove | Higher tier only |
| 8.05c | Angle in a semicircle is a right angle: apply and prove | Higher tier only |
| 8.05d | Angles in the same segment are equal: apply and prove | Higher tier only |
| 8.05e | A radius or diameter bisects a chord if and only if it is perpendicular to it: apply and prove | Higher tier only |
| 8.05f | Radius and tangent meet at a right angle: apply and prove | Higher tier only |
| 8.05g | The alternate segment theorem: apply and prove | Higher tier only |
| 8.05h | Opposite angles of a cyclic quadrilateral are supplementary: apply and prove | Higher tier only |

"Apply" means use the theorem to find angles and lengths, giving a reason for each step. "Prove" means show why the theorem is true, starting from facts you already know.

## 8.05a Circle nomenclature

| Term | Meaning |
|---|---|
| Circumference | The distance around the circle, or the circle itself as a curve |
| Centre | The point equally far from every point on the circumference |
| Radius | A line from the centre to the circumference |
| Diameter | A chord through the centre, twice the length of the radius |
| Chord | A straight line joining two points on the circumference |
| Tangent | A straight line that touches the circle at exactly one point |
| Arc | A part of the circumference |
| Sector | The region between two radii and the arc they cut off |
| Segment | The region between a chord and the arc it cuts off |

A chord splits a circle into two segments. The smaller is the minor segment and the larger is the major segment. The same chord also marks out a minor arc and a major arc.

## 8.05b Angle at the centre (Higher tier only)

**Theorem.** The angle subtended by an arc at the centre is twice the angle subtended at the circumference.

**Proof.** A, B and C are on a circle with centre O. Join CO and extend it to D on the circle.

```
OA = OC (radii), so triangle OAC is isosceles: angle OAC = angle OCA = p
Exterior angle of a triangle: angle AOD = p + p = 2p
In the same way, angle BOD = 2q, where q = angle OCB
Angle AOB = 2p + 2q = 2(p + q) = 2 × angle ACB
```

This is the case with O inside angle ACB. If O lies outside it, subtract the two angles instead of adding them. The result is the same.

**Worked example 1.** A, B and C lie on a circle with centre O. Angle ACB = 41°, with C on the major arc. Find angle OAB.

```
Angle AOB = 2 × 41° = 82°          (angle at centre = 2 × angle at circumference)
OA = OB, so triangle OAB is isosceles
Angle OAB = (180° - 82°) ÷ 2 = 49°  (base angles of an isosceles triangle)
```

**Answer: 49°**

## 8.05c Angle in a semicircle (Higher tier only)

**Theorem.** The angle on the circumference subtended by a diameter is a right angle.

**Proof.** A diameter AB subtends an angle of 180° at the centre (a straight line). By 8.05b the angle at the circumference is half of that: 180° ÷ 2 = 90°.

**Worked example 2.** AB is a diameter. C is on the circumference. Angle CAB = (3x + 4)° and angle ABC = (2x - 9)°. Find both angles.

```
Angle ACB = 90°                      (angle in a semicircle)
(3x + 4) + (2x - 9) + 90 = 180       (angles in a triangle)
5x + 85 = 180, so x = 19
Angle CAB = 61°, angle ABC = 29°
```

**Answer: 61° and 29°**

## 8.05d Angles in the same segment (Higher tier only)

**Theorem.** Two angles in the same segment, standing on the same chord, are equal.

**Proof.** Both angles are subtended by the same arc. Each equals half the angle that arc subtends at the centre (8.05b), so they are equal to each other.

**Worked example 3.** Chords AC and BD cross at X. Angle ABD = 64° and angle BAC = 47°. Find angle ACD and angle AXB.

```
Angle ACD = angle ABD = 64°     (angles in the same segment, both standing on chord AD)
Angle AXB = 180° - 64° - 47°    (angles in a triangle, triangle ABX)
          = 69°
```

**Answer: angle ACD = 64°, angle AXB = 69°**

## 8.05e Radius and chord (Higher tier only)

**Theorem.** A radius or diameter bisects a chord if and only if it is perpendicular to the chord.

"If and only if" means you must prove both directions. Let M be the point where the radius OM meets chord AB, and take a chord that does not pass through O (a diameter is bisected at O by every other diameter).

**Proof, direction 1 (bisects, so perpendicular).** Suppose AM = MB. Then triangles OAM and OBM have OA = OB (radii), AM = MB and OM common. They are congruent (SSS), so angle OMA = angle OMB. These angles lie on a straight line, so each is 90°.

**Proof, direction 2 (perpendicular, so bisects).** Suppose angle OMA = angle OMB = 90°. Triangles OAM and OBM are right-angled with equal hypotenuses OA = OB and a common side OM. They are congruent (RHS), so AM = MB.

**Worked example 4.** A circle has radius 17 cm. Chord AB is 30 cm long. Find the distance from the centre O to AB.

```
The perpendicular from O meets AB at M, so AM = 30 ÷ 2 = 15 cm
Triangle OMA is right-angled at M: OM² = 17² - 15² = 289 - 225 = 64
OM = 8 cm
```

**Answer: 8 cm**

## 8.05f Radius and tangent (Higher tier only)

**Theorem.** For a point P on the circumference, the radius or diameter through P is perpendicular to the tangent at P.

**Proof (by contradiction).** Every point of the tangent except P lies outside the circle, so is more than one radius from O. Suppose OP were not perpendicular to the tangent. Then the foot Q of the perpendicular from O to the tangent is a different point, with OQ shorter than OP (a perpendicular is the shortest distance to a line). But OP is a radius, so Q would be inside the circle. That is impossible, so OP is perpendicular to the tangent.

**Worked example 5.** Tangents at A and B meet at T. O is the centre. Angle ATB = 48°. Find angle OAB.

```
Angle OAT = angle OBT = 90°         (radius meets tangent at 90°)
Angle AOB = 360° - 90° - 90° - 48°  (angles in a quadrilateral)
          = 132°
OA = OB, so angle OAB = (180° - 132°) ÷ 2 = 24°
```

**Answer: 24°**

## 8.05g The alternate segment theorem (Higher tier only)

**Theorem.** For a point P on the circumference, the angle between the tangent and a chord through P equals the angle subtended by the chord in the opposite (alternate) segment.

**Proof.** Let the tangent at P make angle x with chord PA. Draw the diameter PD, with D on the same side of PA as the point B in the alternate segment.

```
Angle TPD = 90°                       (radius meets tangent at 90°)
Angle APD = 90° - x
Angle PAD = 90°                       (angle in a semicircle)
Angle PDA = 180° - 90° - (90° - x) = x   (angles in a triangle)
Angle PBA = angle PDA = x             (angles in the same segment)
```

So the angle between tangent and chord is x, and the angle in the alternate segment is also x.

**Worked example 6.** A tangent touches a circle at A. B and C are on the circle. The tangent makes 65° with AB on one side and 55° with AC on the other side. Find the angles of triangle ABC.

```
Angle ACB = 65°     (alternate segment theorem, tangent-chord angle with AB)
Angle ABC = 55°     (alternate segment theorem, tangent-chord angle with AC)
Angle BAC = 180° - 65° - 55° = 60°   (angles in a triangle)
```

**Answer: 65°, 55° and 60°**

## 8.05h Cyclic quadrilaterals (Higher tier only)

A **cyclic quadrilateral** has all four vertices on a circle.

**Theorem.** Opposite angles of a cyclic quadrilateral are supplementary, which means they add up to 180°.

**Proof.** ABCD is on a circle with centre O. The arc BCD subtends angle BAD at the circumference, and the arc BAD subtends angle BCD. Their angles at the centre are the two angles around O formed by OB and OD, which total 360°.

```
Angle at centre for arc BCD = 2 × angle BAD
Angle at centre for arc BAD = 2 × angle BCD
2 × angle BAD + 2 × angle BCD = 360°
Angle BAD + angle BCD = 180°
```

**Worked example 7.** In cyclic quadrilateral ABCD, angle ABC = (3x + 10)° and angle ADC = (5x - 22)°. Find x and both angles. Angle BCD is 76°, so also find angle BAD.

```
Angle ABC + angle ADC = 180°      (opposite angles of a cyclic quadrilateral)
8x - 12 = 180, so x = 24
Angle ABC = 82°, angle ADC = 98°
Angle BAD = 180° - 76° = 104°     (opposite to angle BCD)
```

**Answer: x = 24, angle BAD = 104°**

## Putting theorems together

**Worked example 8.** AC is a diameter of a circle. B is on the circumference and angle CAB = 34°. The tangent at C is drawn. Find the angle between this tangent and the chord CB.

```
Angle ABC = 90°                       (angle in a semicircle)
Angle ACB = 180° - 90° - 34° = 56°    (angles in a triangle)
The tangent at C is perpendicular to the diameter AC   (radius meets tangent at 90°)
Angle between tangent and CB = 90° - 56° = 34°
```

**Answer: 34°.** This agrees with the alternate segment theorem, because angle CAB = 34° is the angle in the alternate segment. Use that agreement as a check.

## Common errors

- Writing "angles on the same arc" as a reason without saying "at the centre" or "at the circumference". The reason must name the theorem.
- Using the alternate segment theorem with the angle on the wrong side of the chord. The angle you want is in the segment on the far side of the chord from the angle you were given.
- Doubling or halving the wrong way round. The angle at the centre is the larger one, and the angle at the circumference is half of it.
- Forgetting that a triangle with two radii as sides is isosceles. This is often the missing step.
- Joining the centre to a chord's midpoint without stating that the line is perpendicular.
- In a proof, using the result you are trying to prove as one of the reasons.

## Writing a good proof

Start from the given facts. Name any line you add to the diagram. Give a reason beside every statement. End with the sentence you set out to prove. In a proof, a final numerical answer is not needed: the last line states the result in angle letters.

## Next steps

Work through the [practice set](/resources/ocr-gcse-mathematics-circle-theorems-and-proofs-practice/) and use the [revision notes](/resources/ocr-gcse-mathematics-circle-theorems-and-proofs-revision-notes/) to recall the reasons.

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017: section 8.05 Circles.
