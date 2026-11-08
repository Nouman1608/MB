---
title: "IGCSE Mathematics: Trigonometry — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Trigonometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "pythagoras-theorem-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "right-angled-triangles-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "exact-trigonometric-values-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "trigonometric-functions-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "non-right-angled-triangles-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "pythagoras-theorem-and-trigonometry-cambridge-igcse-maths"
description: "Recall notes on Pythagoras, SOHCAHTOA, exact values, sine and cosine graphs, the sine and cosine rules and 3D trigonometry for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-04
updatedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. Pair these notes with the
[Trigonometry practice questions](/resources/igcse-mathematics-trigonometry-practice/)
for worked exam-style application.

> **Tier note:** Pythagoras' theorem (C6.1) and sine, cosine and tangent in right-angled triangles (C6.2)
> are Core. The sections and items marked *(Extended)* are Extended only: exact trigonometric values
> (E6.3), the graphs of sin, cos and tan (E6.4), the sine rule, cosine rule and area formula (E6.5) and
> Pythagoras and trigonometry in 3D (E6.6). Extended also adds angles of elevation and depression, the
> shortest distance from a point to a line (E6.2) and solving trigonometric equations (E6.4), which are
> not covered on this page.

## Pythagoras' theorem

```
hyp^2 = a^2 + b^2
```

Applies only to **right-angled** triangles. The hypotenuse is always the **longest side**, always **opposite the right angle** -- identify it first before deciding whether to add the two shorter sides' squares (finding the hypotenuse) or subtract one square from the other (finding a shorter side).

## Right-angled triangles: SOHCAHTOA

```
sin(angle) = opposite / hypotenuse
cos(angle) = adjacent / hypotenuse
tan(angle) = opposite / adjacent
```

Relative to the **marked angle**, not a fixed position on the page -- the opposite and adjacent sides swap depending on which angle in the triangle is being used, so identify the marked angle first, then label the three sides relative to it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--01-soh-cah-toa.webp" width="900" height="890" alt="A right-angled triangle with sides 3, 4, 5 and angle theta. Opposite is 3, adjacent 4, hypotenuse 5. Sine is 3/5 = 0.6, cosine 4/5 = 0.8, tangent 3/4 = 0.75, and inverse sine of 0.6 gives theta = 36.9 degrees." loading="lazy">
  <figcaption>Name the sides from the angle, then pick sin, cos or tan.</figcaption>
</figure>


## Exact trigonometric values *(Extended)*

| angle | 0 | 30 | 45 | 60 | 90 |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | sqrt(2)/2 | sqrt(3)/2 | 1 |
| cos | 1 | sqrt(3)/2 | sqrt(2)/2 | 1/2 | 0 |
| tan | 0 | sqrt(3)/3 | 1 | sqrt(3) | undefined |

An "exact value" answer must not be a rounded decimal approximation of an irrational value -- writing 0.707 instead of √2/2 loses accuracy and is not acceptable. This is different from a terminating decimal that equals the exact value precisely: 0.5 is exactly equal to 1/2 (not a rounding of it), so it is an acceptable exact answer for sin 30 degrees unless the question specifically demands fraction notation.

## Trigonometric functions and their graphs *(Extended)*

The graphs of y = sin x and y = cos x are smooth waves repeating every 360 degrees, both oscillating between -1 and 1. y = cos x starts at its maximum (cos 0 = 1), falls to its minimum at 180 degrees (cos 180 = -1), and returns to its maximum at 360 degrees. y = sin x starts at 0, rises to its maximum at 90 degrees, and falls back through 0 at 180 degrees. y = tan x repeats every 180 degrees and is undefined at 90 and 270 degrees.

## Non-right-angled triangles *(Extended)*

```
Sine rule:    a / sin A = b / sin B = c / sin C
Cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
Area:         Area = (1/2) ab sin C
```

Use the **sine rule** when a matching angle-side pair is known (an angle and the side opposite it). Use the **cosine rule** when either two sides and the included angle are known, or all three sides are known and an angle is required. The area formula needs two sides and the angle **between** them.

```
Sine rule example: angle A = 40, angle B = 65, side a = 8 cm. Find side b.
b / sin B = a / sin A
b = (a x sin B) / sin A = (8 x sin 65) / sin 40 = 11.3 cm (3 s.f.)

Cosine rule example: PQ = 7 cm, QR = 9 cm, angle Q = 55 degrees. Find PR.
PR^2 = PQ^2 + QR^2 - 2(PQ)(QR)cos Q = 49 + 81 - 126 cos 55 = 57.7
PR = 7.60 cm (3 s.f.)
```

The cosine rule can also be rearranged to find an **angle** when all three sides are known: cos A = (b^2 + c^2 - a^2) / (2bc). A negative value inside cos-inverse is not an error -- it correctly signals an obtuse angle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--02-elevation-depression.webp" width="900" height="950" alt="A person 55 m from a 40 m tower. The angle of elevation to the top is 36.0 degrees since tan x = 40/55. From the top, the angle of depression to the person is also 36.0 degrees, measured from a horizontal line, as they are alternate angles." loading="lazy">
  <figcaption>Elevation and depression are both measured from the horizontal and are equal for the same line of sight.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--03-sine-rule.webp" width="900" height="860" alt="Triangle ABC with A = 48, B = 65, C = 67 degrees and a = 9 cm drawn to scale. a over sin A equals b over sin B gives b = 9 sin 65 over sin 48 = 11.0 cm. The rule needs a side and its opposite angle." loading="lazy">
  <figcaption>Pair each side with the angle opposite it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--04-ambiguous-case.webp" width="900" height="850" alt="Angle A = 30 degrees, AC = 10, BC = 6. BC can meet the base at two points, giving two triangles with B = 56.4 degrees (acute) or 123.6 degrees (obtuse), both with sin B = 0.833." loading="lazy">
  <figcaption>Two different triangles can fit the same sine rule data.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--05-cosine-rule.webp" width="900" height="860" alt="The lesson worked example drawn to scale: AB = 7, AC = 10, angle A = 110 degrees. A bar shows BC squared = 149 + 47.9 = 196.9, so BC = 14.0 cm. The extra 47.9 is added because cos 110 degrees is negative." loading="lazy">
  <figcaption>With an obtuse angle the cosine term adds, so BC is longer than the right-angle case.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--06-area-sine.webp" width="900" height="800" alt="Triangle with a = 8, b = 10 and C = 40 degrees. Height h = 8 sin 40 = 5.14 cm, so area = half of 10 times 5.14 = 25.7 cm squared, which is half a b sin C." loading="lazy">
  <figcaption>The area formula comes from base times height with h = a sin C.</figcaption>
</figure>


## Pythagoras and trigonometry in 3D *(Extended)*

3D problems are solved by finding the correct 2D right-angled triangle inside the solid first -- typically a diagonal across a face or the base -- then applying Pythagoras or SOHCAHTOA within that flat triangle.

```
Cuboid 6 x 8 x 10:
base diagonal   = sqrt(6^2 + 8^2) = sqrt(100) = 10 cm
space diagonal  = sqrt(6^2 + 8^2 + 10^2) = sqrt(200) = 14.1 cm (3 s.f.)
angle to base: tan(angle) = height / base diagonal = 10 / 10 = 1 -> angle = 45.0 degrees
```

Keeping an intermediate length in exact (surd) form, rather than rounding it early, avoids losing accuracy before the final step.

## Exam traps

- Applying Pythagoras to the wrong pair of sides, forgetting the hypotenuse is always opposite the right angle.
- Mixing up which side is opposite, adjacent and hypotenuse relative to the marked angle in an unfamiliar orientation.
- *(Extended)* Giving an exact-value answer as a rounded decimal approximation of an irrational surd value (e.g. 1.73 instead of sqrt(3)) -- a genuinely exact terminating decimal such as 0.5 for 1/2 is not this error.
- *(Extended)* Using the sine rule when the cosine rule is needed (or the reverse), because the given information doesn't match a sine-rule angle-side pair.
- *(Extended)* In a 3D problem, applying a 2D triangle directly to the solid without first identifying the correct base diagonal or cross-section.
- Rounding an intermediate length before the final trigonometric step, which compounds into an inaccurate final answer.

## Self-test

1. State which side of a right-angled triangle is always the hypotenuse.
2. *(Extended)* Write down the exact value of tan 45 degrees.
3. *(Extended)* State the condition needed to use the sine rule rather than the cosine rule.
4. *(Extended)* Write down the formula for the area of a triangle given two sides and the included angle.
5. *(Extended)* In a 3D cuboid problem, what should be found first before calculating the space diagonal?
6. *(Extended)* Write down the rearranged cosine rule formula used to find an angle, given all three sides of a triangle.

**Answers:** 1. The longest side, always opposite the right angle. 2. tan 45 = 1. 3. A known angle and the side directly opposite it (a matching angle-side pair). 4. Area = (1/2) ab sin C, where C is the angle between sides a and b. 5. The base diagonal (the 2D diagonal across the cuboid's base), found using Pythagoras' theorem on the two base edges. 6. cos A = (b^2 + c^2 - a^2) / (2bc).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--07-trig-3d.webp" width="900" height="960" alt="A cuboid 8 by 6 by 5 cm. The base diagonal AC = 10 cm, and with CG = 5 and AG = 11.2 it forms a right-angled triangle. The angle between AG and the base has tan x = 5/10, so x = 26.6 degrees. The triangle is also shown flat." loading="lazy">
  <figcaption>Pull the right-angled triangle out of the solid, then use ordinary trigonometry.</figcaption>
</figure>

## Frequently asked questions

**When do you use the sine rule?**
Use the sine rule when you know a matching angle-side pair, an angle and the side opposite it. Otherwise, with two sides and the included angle or all three sides, use the cosine rule.

**How do you find an angle with the cosine rule?**
Rearrange it to cos A = (b² + c² − a²) ÷ 2bc, where a is the side opposite angle A, then take the inverse cosine.

**What is the formula for the area of a non-right-angled triangle?**
Area = ½ab sin C, where C is the angle between the sides a and b.

**What is the exact value of tan 45°?**
tan 45° = 1. Other exact values to know include sin 30° = 1/2 and cos 60° = 1/2.
