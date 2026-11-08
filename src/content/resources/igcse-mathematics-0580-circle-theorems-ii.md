---
title: "Cambridge IGCSE Mathematics 0580: Circle theorems II -- Study Guide"
seoTitle: "IGCSE Maths 0580 Circle Theorems II Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Circle theorems II"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "geometry-cambridge-igcse-maths"
    subtopic: "circle-theorems-ii-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Mathematics 0580 E4.8 (Extended only): chord and tangent symmetry properties of circles, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subtopic E4.8, Circle theorems II, from the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The whole subtopic is **Extended only**: the syllabus lists C4.8 as "Extended content only", so there is no Core version. It is examined on Paper 2 (non-calculator) and Paper 4 (calculator), the two Extended papers.

Use it with the [0580 course hub](/boards/cambridge/igcse/mathematics/) and the [printable 0580 checklist](/checklists/cambridge/igcse/mathematics/). The angle theorems of C4.7 and E4.7 are covered in the [geometry study guide](/resources/igcse-mathematics-geometry/), with [geometry practice questions](/resources/igcse-mathematics-geometry-practice/) to test them. To check the whole Extended course, try the [Extended diagnostic](/practice/0580/diagnostic/extended/).

## What this subtopic covers

The syllabus asks you to **use** three symmetry properties of circles, and to quote them as reasons for your answers.

| 0580 reference | What you must be able to do | Tier |
|---|---|---|
| E4.8 | Use the fact that equal chords are equidistant from the centre | Extended only |
| E4.8 | Use the fact that the perpendicular bisector of a chord passes through the centre | Extended only |
| E4.8 | Use the fact that tangents from an external point are equal in length | Extended only |
| E4.8 (notes) | Give reasons using the geometrical properties listed in the syllabus | Extended only |

Most E4.8 questions also use Pythagoras' theorem, right-angled trigonometry, isosceles triangles and the fact that a tangent meets a radius at 90° (C4.7).

## The symmetry behind the properties

Join the centre O to the ends of a chord AB. OA and OB are radii, so triangle OAB is **isosceles**. Its line of symmetry passes through O and meets AB at its midpoint at 90°. That line is the perpendicular bisector of AB, so it contains O, and the perpendicular from O to a chord cuts the chord in half. You do not need to prove this, but it shows you which right-angled triangle to work in. The **distance from the centre to a chord** always means this perpendicular distance. For tangents from P, triangles OAP and OBP are right-angled at A and B, share the hypotenuse OP and have OA = OB, so Pythagoras gives PA = PB.

## Property 1: the perpendicular bisector of a chord passes through the centre

In practice you use this property in two ways.

1. **Lengths.** Draw OM perpendicular to chord AB. Then M is the midpoint of AB, and triangle OMA is right-angled at M with hypotenuse OA = r. Pythagoras gives `r² = OM² + (AB/2)²`.
2. **Finding the centre.** Any two chords that are not parallel have perpendicular bisectors that cross at exactly one point. Both bisectors pass through the centre, so that point *is* the centre.

### Worked example 1 (non-calculator)

A circle has centre O and radius 8.5 cm. AB is a chord of length 15 cm. Find the distance from O to AB.

```
Draw OM perpendicular to AB.
The perpendicular from the centre bisects the chord, so AM = 15 ÷ 2 = 7.5 cm.
Triangle OMA is right-angled at M:
  OM² = OA² − AM² = 8.5² − 7.5²
      = (8.5 − 7.5)(8.5 + 7.5) = 1 × 16 = 16
  OM = 4 cm
```

The difference of two squares keeps the arithmetic easy without a calculator.

### Worked example 2 (calculator)

A horizontal cylindrical tank is partly filled with water. In the circular cross-section, centre O, the water surface AB is 24 cm wide and the water is 8 cm deep at its deepest point. The tank is less than half full.

(a) Find the radius of the tank.
(b) Find angle AOB, the angle the water surface subtends at the centre.

```
(a) Let the radius be r. The deepest point lies on the line through O
    perpendicular to AB (the perpendicular bisector of a chord passes
    through the centre). Call the midpoint of AB M.
    AM = 24 ÷ 2 = 12 cm
    OM = r − 8   (the tank is less than half full, so O is above the water)
    In triangle OMA:  r² = (r − 8)² + 12²
                      r² = r² − 16r + 64 + 144
                      16r = 208
                      r = 13 cm

(b) sin(angle AOM) = AM / OA = 12/13
    angle AOM = 67.38...°
    angle AOB = 2 × 67.38...° = 134.8°  (1 d.p.)
```

Keep 67.38…° in your calculator and double it before rounding. Early rounding happens to give the same answer here, but it can cost accuracy in other questions.

### Worked example 3 (non-calculator): finding the centre with coordinates

A circle passes through A(1, 1), B(7, 1) and C(5, 5). Find the coordinates of its centre and its radius.

```
Perpendicular bisector of AB:
  AB is horizontal, midpoint (4, 1), so the bisector is x = 4.

Perpendicular bisector of BC:
  midpoint of BC = ((7 + 5)/2, (1 + 5)/2) = (6, 3)
  gradient of BC = (5 − 1)/(5 − 7) = −2
  perpendicular gradient = 1/2
  y − 3 = (1/2)(x − 6),  so  y = (1/2)x

Both bisectors pass through the centre:
  x = 4  gives  y = 2.   Centre (4, 2).

Radius = distance from (4, 2) to A(1, 1) = √(3² + 1²) = √10
Check with C(5, 5): √(1² + 3²) = √10
```

This uses the perpendicular-bisector skills from [coordinate geometry](/resources/igcse-mathematics-coordinate-geometry/). Checking the third point catches slips.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-circle-theorems-ii--03-find-the-centre.webp" width="900" height="890" alt="Circle with points A, B, C joined by chords AB and BC. The perpendicular bisector of each chord is dashed with right-angle marks. They cross at the centre O. Draw the perpendicular bisectors of two chords; they cross at the centre of the circle." loading="lazy">
  <figcaption>The perpendicular bisectors of two chords meet at the centre.</figcaption>
</figure>


## Property 2: equal chords are equidistant from the centre

If two chords of the same circle have the same length, their perpendicular distances from the centre are equal. The reason is Pythagoras again: the same radius and the same half-chord give the same third side. The reverse also follows from the same calculation: chords the same distance from the centre have the same length.

### Worked example 4 (non-calculator)

AB and CD are parallel chords of a circle with centre O and radius 6.5 cm. AB = CD = 12 cm, and the chords are not the same line.

(a) Find the distance between the two chords.
(b) Find the area of quadrilateral ABDC.

```
(a) Distance from O to AB:
      √(6.5² − 6²) = √(42.25 − 36) = √6.25 = 2.5 cm
    Equal chords are equidistant from the centre, so O is also 2.5 cm from CD.
    Two different parallel chords 2.5 cm from O must lie on opposite sides of O.
    Distance between the chords = 2.5 + 2.5 = 5 cm

(b) AB and CD are equal and parallel, and the line joining their midpoints
    is perpendicular to both, so ABDC is a rectangle.
    Area = 12 × 5 = 60 cm²
```

A quick check: the diagonal of the rectangle is √(12² + 5²) = 13 cm, which is the diameter. That fits the angle in a semicircle: each corner of the rectangle is 90°, so each diagonal must be a diameter.

The key step is in (a): the question does not say the chords are on opposite sides of O, so you have to work it out.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-circle-theorems-ii--01-equal-chords.webp" width="900" height="940" alt="Circle with centre O and two equal chords, each marked with double ticks. A dashed perpendicular from O to each chord is labelled d, with right-angle marks. Both distances are equal. Two chords of equal length are the same perpendicular distance d from the centre, and the reverse also holds." loading="lazy">
  <figcaption>Equal chords are equidistant from the centre.</figcaption>
</figure>


## Property 3: tangents from an external point are equal in length

From an external point P, draw tangents touching the circle at A and B. Then **PA = PB**. Two consequences come up again and again.

- Triangle PAB is **isosceles**, so angle PAB = angle PBA.
- Quadrilateral OAPB is a **kite** (OA = OB as radii, PA = PB as tangents), with right angles at A and B because the tangent meets the radius at 90°. OP is its line of symmetry.

### Worked example 5 (non-calculator, giving reasons)

<!-- marlbridge-diagram:maths-b32-tangent-circle-angle-reasons -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b32-tangent-circle-angle-reasons.svg" aria-label="Open full-size diagram: maths-b32-tangent-circle-angle-reasons"><img src="/images/learning/mathematics/maths-b32-tangent-circle-angle-reasons.svg" width="1600" height="1050" alt="With ∠APB=48°, equal tangent lengths give base angles 66°. Radii are perpendicular to tangents, so ∠AOB=132°. The angle at C on the major arc subtending the minor arc AB is 66°." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>With ∠APB=48°, equal tangent lengths give base angles 66°. Radii are perpendicular to tangents, so ∠AOB=132°. The angle at C on the major arc subtending the minor arc AB is 66°. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b32-tangent-circle-angle-reasons -->


PA and PB are tangents from P to a circle with centre O. Angle APB = 48°. C is a point on the major arc AB.

Find, giving a reason for each step: (a) angle PAB, (b) angle AOB, (c) angle ACB.

```
(a) PA = PB  (tangents from an external point are equal in length)
    so triangle PAB is isosceles.
    angle PAB = (180° − 48°) ÷ 2 = 66°
    (base angles of an isosceles triangle; angle sum of a triangle = 180°)

(b) angle OAP = angle OBP = 90°  (angle between tangent and radius = 90°)
    angle AOB = 360° − 90° − 90° − 48° = 132°
    (angle sum of a quadrilateral = 360°)

(c) angle ACB = 132° ÷ 2 = 66°
    (angle at the centre is twice the angle at the circumference)
```

Notice that angle ACB = angle PAB. That is the alternate segment theorem from E4.7, so it is a useful check on your arithmetic.

### Worked example 6 (calculator)

From a point P, 17 cm from the centre O of a circle of radius 8 cm, tangents PA and PB are drawn.

(a) Find the length of PA. (b) Find the area of kite OAPB. (c) Find angle APB.

```
(a) angle OAP = 90° (tangent meets radius at 90°)
    PA = √(17² − 8²) = √225 = 15 cm

(b) PB = PA = 15 cm (tangents from an external point are equal)
    Area = 2 × (1/2 × 8 × 15) = 120 cm²

(c) tan(angle APO) = OA / PA = 8/15
    angle APO = 28.07...°
    OP is the line of symmetry of the kite, so
    angle APB = 2 × 28.07...° = 56.1°  (1 d.p.)
```

### Worked example 7 (non-calculator): a circle inside a triangle

A circle touches all three sides of triangle ABC. AB = 10 cm, BC = 12 cm and CA = 8 cm. Find the length of the tangent from each vertex to the circle.

```
Let the tangent lengths from A, B and C be a, b and c.
Each vertex is an external point, so its two tangents are equal:
  AB:  a + b = 10
  BC:  b + c = 12
  CA:  c + a = 8
Add all three:  2(a + b + c) = 30,  so  a + b + c = 15
  a = 15 − 12 = 3 cm
  b = 15 − 8  = 7 cm
  c = 15 − 10 = 5 cm
```

Check: 3 + 7 = 10, 7 + 5 = 12 and 5 + 3 = 8. Labelling each tangent length once and using it on both sides is the whole method.

## Giving reasons

The syllabus notes say you are expected to use the geometrical properties listed in the syllabus when giving reasons. Write them in full. These wordings match the syllabus list:

- "the perpendicular bisector of a chord passes through the centre"
- "equal chords are equidistant from the centre"
- "tangents from an external point are equal in length"
- "angle between tangent and radius = 90°"

Short forms such as "tangent rule" or "chord theorem" do not say which property you used. When a question says "give a reason", a correct number with no reason, or with a vague one, may not earn full credit.

## Paper 2 and Paper 4

- **Paper 2 (non-calculator):** you work everything by hand. Use tricks such as the difference of two squares, give exact surd answers such as 2√5 when asked for an exact value (surds are E1.18, so simplify them), and set out angle chains like worked example 5 with a reason on every line.
- **Paper 4 (calculator):** you can use trigonometry inside the right-angled triangles, as in worked examples 2 and 6. Keep full calculator values until the end, then round to 3 significant figures, or 1 decimal place for angles.

## Common errors

- Using the whole chord as a side of the right-angled triangle. The triangle uses **half** the chord.
- Measuring the distance from the centre to the chord along a slanted line. It must be the perpendicular distance.
- Taking the tangent length as OP. The tangent length is PA, from the external point to the point of contact.
- Assuming two equal chords are parallel or on opposite sides of O when the question has not said so. Work it out from what you are given.
- Forgetting the right angle between tangent and radius before using Pythagoras in triangle OAP.
- Using OM = r − depth when the tank is more than half full. Then the centre is under the water surface and OM = depth − r. Draw the diagram first.
- Doubling an angle that has already been rounded, then rounding again.

## Frequently asked questions

**Is Circle theorems II on the Core paper for Cambridge IGCSE Maths 0580?**
No. Subtopic E4.8, Circle theorems II, is Extended only in Cambridge IGCSE Mathematics 0580, so it appears on Papers 2 and 4.

**What are the three symmetry properties of circles in 0580?**
The perpendicular bisector of a chord passes through the centre; equal chords are equidistant from the centre; and the two tangents from an external point are equal in length. You are expected to use them and quote them as reasons.

**How do you find the distance from the centre to a chord?**
Draw the perpendicular from the centre to the chord, which bisects it, then use Pythagoras with half the chord and the radius. Using the whole chord as a side of the triangle is a common error.

**How do you find the centre of a circle through three points?**
Find the perpendicular bisectors of two chords that are not parallel; they cross at exactly one point, which is the centre. The radius is the distance from that point to any of the three points.

**What is the length of a tangent from an external point?**
The tangent length is the distance from the external point P to the point of contact A, not OP. Because the tangent meets the radius at 90°, PA² = OP² − OA².

## Next steps

Use the [geometry revision notes](/resources/igcse-mathematics-geometry-revision-notes/) for a list of every circle theorem for your tier. Then try the chord question in the [Extended trigonometry practice questions](/resources/igcse-mathematics-trigonometry-extended-practice/), which uses the half-chord triangle from worked examples 1 and 2. The [course hub](/boards/cambridge/igcse/mathematics/) lists other resources for syllabus 0580.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, section 4 Geometry, E4.8 Circle theorems II (Extended subject content), with C4.8 marked "Extended content only".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-circle-theorems-ii--02-chord-bisector.webp" width="900" height="850" alt="Circle of radius 10 with chord AB of length 16. OM meets AB at right angles at the midpoint M, so AM = MB = 8. Triangle OMB has sides 6, 8, 10. A line from the centre perpendicular to a chord cuts the chord in half, giving a right-angled triangle (radius 10, half-chord 8, distance 6)." loading="lazy">
  <figcaption>The perpendicular from the centre bisects the chord, so Pythagoras finds the missing length.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-circle-theorems-ii--04-equal-tangents.webp" width="900" height="900" alt="Circle with centre O and external point P. Tangents PA and PB are marked equal, each 12. Radii OA and OB (5) meet them at right angles, and OP is 13. Two tangents drawn from the same outside point P touch the circle at A and B and have equal lengths; each is perpendicular to its radius." loading="lazy">
  <figcaption>Tangents from an external point are equal in length (here PA = PB = 12).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-circle-theorems-ii--05-tangent-angles.webp" width="900" height="910" alt="Circle with tangents PA and PB from P, angle APB 50 degrees. Triangle PAB is isosceles so angles at A and B are 65 degrees. Angle AOB is 360 minus 90 minus 90 minus 50 = 130 degrees. Given angle APB = 50 degrees: equal tangents make PAB isosceles (65 degrees each), and the quadrilateral OAPB gives AOB = 130 degrees." loading="lazy">
  <figcaption>Using PA = PB and the radius-tangent right angles to find angles.</figcaption>
</figure>

