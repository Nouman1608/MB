---
title: "OCR A Level Physics A (H556): Nature of quantities"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Foundations of physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
    subtopic: "nature-of-quantities-ocr-alevel"
description: "Study guide to OCR A Level Physics A 2.3 scalars and vectors: examples, adding and subtracting, vector triangles by calculation or drawing, and resolving."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.3, Nature of quantities, of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017: learning outcomes 2.3.1(a)-(d), Scalars and vectors, in Module 2. The specification notes that vector quantities add and subtract very differently from scalars, so it is important to know which is which. It expects examples of each, and allows vector triangles to be solved by calculation or by scale drawing.

The combined [units, measurement, uncertainty and vectors study guide](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors/) introduces the ideas; this page adds the cosine-and-sine-rule method, scale drawing, adding three or more vectors by components, and vector subtraction for a change of direction. Use it with the [nature of quantities revision notes](/resources/ocr-a-level-physics-h556-nature-of-quantities-revision-notes/) and the [nature of quantities practice questions](/resources/ocr-a-level-physics-h556-nature-of-quantities-practice/).

## What you must be able to do

| Statement | Content |
|---|---|
| 2.3.1(a) | Scalar and vector quantities, with examples of each |
| 2.3.1(b) | Vector addition and subtraction |
| 2.3.1(c) | A vector triangle to find the resultant of any two coplanar vectors, by calculation or by scale drawing |
| 2.3.1(d) | Resolving a vector into two perpendicular components: Fx = F cos θ, Fy = F sin θ |

## Scalars and vectors (2.3.1(a))

A **scalar** has magnitude only. A **vector** has magnitude and direction.

| Scalars | Vectors |
|---|---|
| distance, speed | displacement, velocity |
| mass | weight (and every other force) |
| time, temperature | acceleration |
| energy, work, power | momentum |
| pressure, density | electric field strength, gravitational field strength |
| volume, charge | |

Points that catch people out:

- **Pressure is a scalar** even though it is force per area; it acts in all directions at a point in a fluid.
- **Energy and work are scalars**, even though work is calculated from force and displacement.
- **Current is treated as a scalar.** It flows along a wire, but currents at a junction add as numbers (Kirchhoff's first law), not by vector rules.
- In one dimension a vector's direction is shown by a sign. A velocity of −4 m s⁻¹ is 4 m s⁻¹ in the negative direction; its speed is 4 m s⁻¹.

Example pairs make good exam answers: a runner completing one lap of a 400 m track has travelled a **distance** of 400 m but has a **displacement** of zero.

## Adding vectors (2.3.1(b)-(c))

Scalars add arithmetically: 3 kg + 4 kg = 7 kg. Vectors add **tip to tail**: draw the first vector, start the second at its tip, and the **resultant** runs from the start of the first to the tip of the second. 3 N + 4 N can give anything from 1 N to 7 N, depending on the angle between them.

### Perpendicular vectors

Use Pythagoras for the size and tan for the direction.

**Worked example 1.** An aircraft heads due north at 220 m s⁻¹ relative to the air. A wind blows due east at 40 m s⁻¹. Find its resultant velocity.

```
magnitude = √(220² + 40²) = √50 000 = 224 m s⁻¹
angle     = tan⁻¹(40 / 220) = 10.3° east of north
```

### Vectors at any angle: cosine and sine rules

When the vectors are not perpendicular, sketch the triangle and find the **interior angle** between the two sides. It is 180° minus the angle between the vectors when they are drawn from the same point.

**Worked example 2.** A walker goes 5.0 km due north, then 3.0 km on a bearing of 060° (60° east of north). Find the resultant displacement.

```
angle between the two legs, tip to tail: 180° − 60° = 120°
R² = 5.0² + 3.0² − 2(5.0)(3.0) cos 120°
   = 25 + 9 + 15 = 49           →   R = 7.0 km
sine rule: sin α / 3.0 = sin 120° / 7.0
   α = 21.8° east of north
```

The resultant is 7.0 km on a bearing of about 022°.

### Scale drawing

1. Choose a scale that makes the triangle large, such as 1 cm to 0.5 km, and write it down.
2. Draw the first vector with a ruler and protractor, then the second from its tip.
3. Draw and measure the resultant; convert back with the scale.
4. Measure the angle with a protractor.

A careful drawing usually agrees with calculation to within a few per cent. Examiners give credit for a stated scale, accurate lengths and angles, and a labelled resultant with an arrow.

## Subtracting vectors

To find a − b, add a and the reverse of b: a − b = a + (−b). The most common use is **change in velocity**, Δv = v − u, which is needed whenever an object changes direction.

**Worked example 3.** A car travels at 20 m s⁻¹ due east, then after a bend at 20 m s⁻¹ in a direction 60° north of east. Find the change in velocity.

```
Reverse u: 20 m s⁻¹ due west
Add v and −u tip to tail: the interior angle of the triangle is 60°
|Δv|² = 20² + 20² − 2(20)(20) cos 60° = 400   →   |Δv| = 20 m s⁻¹
direction: the triangle is equilateral, so Δv points 30° west of north
```

The speed did not change, but the velocity changed by 20 m s⁻¹, so the car accelerated. This is the idea behind circular motion in Module 5.

## Resolving vectors (2.3.1(d))

Any vector F can be replaced by two perpendicular **components** that together have the same effect. If F makes an angle θ with the x-direction:

Fx = F cos θ    Fy = F sin θ

The component **next to** the angle uses cos; the one **opposite** uses sin. If the angle is given from the vertical, the vertical component is F cos θ.

Components along and perpendicular to a slope inclined at θ to the horizontal, for a weight W:

- down the slope: W sin θ
- into the slope: W cos θ

### Adding three or more vectors by components

1. Resolve every vector into x and y components, with signs.
2. Add the x-components; add the y-components.
3. Combine: R = √(Σx² + Σy²), direction tan⁻¹(Σy ÷ Σx), checking the quadrant.

**Worked example 4.** Three forces act at a point: 10 N along the +x direction, 6.0 N along +y, and 8.0 N at 225° (pointing down and to the left at 45°). Find the resultant.

```
           x / N                      y / N
10 N       +10.00                      0
6.0 N        0                       +6.00
8.0 N      8.0 cos 225° = −5.66      8.0 sin 225° = −5.66
sum        +4.34                     +0.34
R = √(4.34² + 0.34²) = 4.36 N at tan⁻¹(0.34 / 4.34) = 4.5° above +x
```

If the sums were both zero, the forces would be in equilibrium; that idea is used in section 3.2.

## Common errors

- Adding vector magnitudes arithmetically when they are not in the same line.
- Using the angle between the vectors in the cosine rule instead of the interior angle of the triangle.
- Giving a resultant without a direction.
- Swapping sin and cos when the angle is measured from the vertical.
- Finding v − u by adding u and v.
- Calling pressure, energy or current a vector.

## Exam technique

- **State** whether a quantity is a vector: give the reason (it has direction) and, if asked, an example.
- **Determine** a resultant: sketch the triangle first, label the angle you use, and give magnitude and direction.
- **By scale drawing**: write the scale, draw neatly with a sharp pencil, and quote the measured length before converting.
- **Show that** a component has a given value: write F cos θ or F sin θ with numbers substituted before the answer.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Module 2, Foundations of physics: section 2.3, learning outcomes 2.3.1(a)-(d).
