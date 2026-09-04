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
description: "Condensed recall notes on Pythagoras' theorem, right-angled and non-right-angled triangle trigonometry, exact values, trig functions and 3D problems for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
featured: false
---

Condensed for the final weeks. Pair these notes with the
[Trigonometry practice questions](/resources/igcse-mathematics-trigonometry-practice/)
for worked exam-style application.

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

## Exact trigonometric values

| angle | 0 | 30 | 45 | 60 | 90 |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | sqrt(2)/2 | sqrt(3)/2 | 1 |
| cos | 1 | sqrt(3)/2 | sqrt(2)/2 | 1/2 | 0 |
| tan | 0 | sqrt(3)/3 | 1 | sqrt(3) | undefined |

An "exact value" answer must be given as a fraction or surd, not a rounded decimal -- 0.5 is not an acceptable substitute for 1/2 when a question specifically asks for an exact value.

## Trigonometric functions and their graphs

The graphs of y = sin x and y = cos x are smooth waves repeating every 360 degrees, both oscillating between -1 and 1. y = cos x starts at its maximum (cos 0 = 1), falls to its minimum at 180 degrees (cos 180 = -1), and returns to its maximum at 360 degrees. y = sin x starts at 0, rises to its maximum at 90 degrees, and falls back through 0 at 180 degrees. y = tan x repeats every 180 degrees and is undefined at 90 and 270 degrees.

## Non-right-angled triangles

```
Sine rule:    a / sin A = b / sin B = c / sin C
Cosine rule:  a^2 = b^2 + c^2 - 2bc cos A
Area:         Area = (1/2) ab sin C
```

Use the **sine rule** when a matching angle-side pair is known (an angle and the side opposite it). Use the **cosine rule** when either two sides and the included angle are known, or all three sides are known and an angle is required. The area formula needs two sides and the angle **between** them.

## Pythagoras and trigonometry in 3D

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
- Giving an exact-value answer as a rounded decimal instead of a fraction or surd.
- Using the sine rule when the cosine rule is needed (or the reverse), because the given information doesn't match a sine-rule angle-side pair.
- In a 3D problem, applying a 2D triangle directly to the solid without first identifying the correct base diagonal or cross-section.
- Rounding an intermediate length before the final trigonometric step, which compounds into an inaccurate final answer.

## Self-test

1. State which side of a right-angled triangle is always the hypotenuse.
2. Write down the exact value of tan 45 degrees.
3. State the condition needed to use the sine rule rather than the cosine rule.
4. Write down the formula for the area of a triangle given two sides and the included angle.
5. In a 3D cuboid problem, what should be found first before calculating the space diagonal?

**Answers:** 1. The longest side, always opposite the right angle. 2. tan 45 = 1. 3. A known angle and the side directly opposite it (a matching angle-side pair). 4. Area = (1/2) ab sin C, where C is the angle between sides a and b. 5. The base diagonal (the 2D diagonal across the cuboid's base), found using Pythagoras' theorem on the two base edges.
