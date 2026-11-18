---
title: "OxfordAQA A-level Mathematics (9660): Kinematics"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-kinematics-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 M2.2 study guide: variable acceleration with exponential and trigonometric functions, direction of motion, circular paths and vector integration."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section M2.2 (Kinematics) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. M2.2 is in Unit M2 (Mechanics), the mechanics option of the International A-level. Unlike the straight-line work in Unit PSM1, which the specification restricts to the calculus of Unit P1, Unit M2 expects the Unit P2 calculus as well, so position, velocity and acceleration can involve exponential and trigonometric functions.

The broader [modelling and kinematics with vectors guide](/resources/oxfordaqa-a-level-mathematics-mathematical-modelling-and-kinematics-with-vectors-and/) covers differentiating and integrating polynomial position vectors, least speed and collisions. This page adds exponential and trigonometric motion, distance with a change of direction, the direction of motion as an angle, circular paths, and the link between speed and the scalar product. Condense it with the [kinematics revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [kinematics practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

| Content | Additional information |
|---|---|
| Relationship between position, velocity and acceleration in one, two or three dimensions, involving variable acceleration | Application of calculus techniques will be required to solve problems |
| Finding position, velocity and acceleration vectors by the differentiation or integration of f(t)i + g(t)j + h(t)k with respect to t | If r = f(t)i + g(t)j + h(t)k then v = f′(t)i + g′(t)j + h′(t)k and a = f″(t)i + g″(t)j + h″(t)k. Vectors may be written as ai + bj + ck or as column vectors |

## 1. One dimension with P2 functions

The rules are unchanged: v = ds/dt, a = dv/dt, s = ∫v dt, v = ∫a dt. What changes is the functions.

### Worked example 1: approaching a limiting speed

A particle starts from rest at O and moves along a straight line so that its velocity after t seconds is v = 6 − 6e^(−0.5t) m s⁻¹. Find its initial acceleration, the speed it approaches, and its displacement from O after 4 s.

```
a = dv/dt = 3e^(−0.5t),   so a = 3 m s⁻² at t = 0
As t → ∞, e^(−0.5t) → 0,  so v → 6 m s⁻¹

s = ∫(6 − 6e^(−0.5t)) dt = 6t + 12e^(−0.5t) + c
t = 0, s = 0:  0 = 0 + 12 + c, so c = −12
s = 6t + 12e^(−0.5t) − 12
t = 4:  s = 24 + 12e⁻² − 12 = 13.6 m (3 s.f.)
```

The constant of integration is not zero here, even though the particle starts at O, because the exponential term is 12, not 0, at t = 0. Always find c from the stated starting condition.

### Worked example 2: distance when the direction changes

A particle moves in a straight line with velocity v = 8 − 2e^(0.5t) m s⁻¹, starting at O. Find the total distance travelled in the first 4 seconds.

The particle reverses where v = 0:

```
2e^(0.5t) = 8,  e^(0.5t) = 4,  t = 2 ln 4 ≈ 2.77 s
```

Integrate, with s = 0 at t = 0:

```
s = 8t − 4e^(0.5t) + 4
s(2 ln 4) = 16 ln 4 − 16 + 4 = 16 ln 4 − 12 ≈ 10.18 m
s(4)      = 32 − 4e² + 4 ≈ 6.44 m
```

The particle goes out 10.18 m, then comes back 10.18 − 6.44 = 3.74 m. The total distance is 10.18 + 3.74 = 13.9 m (3 s.f.), while the final displacement is only 6.44 m. Integrating from 0 to 4 in one step gives the displacement, not the distance.

## 2. Direction of motion

The velocity vector points along the direction of motion. To give the direction as an angle, use the components.

### Worked example 3: angle, perpendicularity and least speed

A particle has position vector r = (t² + 1)i + (4t − t²)j metres at time t seconds.

```
v = 2t i + (4 − 2t) j
a = 2i − 2j
```

**Direction at t = 1.** v = 2i + 2j, so the particle moves at 45° above the i direction, with tan θ = 2/2 = 1.

**When is the velocity perpendicular to the acceleration?** Use the scalar product (from Unit P2 vectors):

```
v · a = 2t(2) + (4 − 2t)(−2) = 8t − 8 = 0,  so t = 1
```

**Why this matters.** Speed² = v · v, so d(speed²)/dt = 2 v · a. The speed is stationary exactly when v and a are perpendicular. Here that happens at t = 1, where speed² = 4 + 4 = 8, so the least speed is 2√2 ≈ 2.83 m s⁻¹. This gives a quick check on any least-speed answer found by completing the square.

## 3. Circular paths

Trigonometric position vectors often describe a circle.

### Worked example 4

A particle has position vector r = 5 cos 2t i + 5 sin 2t j metres. Show that it moves on a circle at constant speed, and find its acceleration in terms of r.

```
|r|² = 25 cos²2t + 25 sin²2t = 25,  so |r| = 5: a circle of radius 5, centre O

v = −10 sin 2t i + 10 cos 2t j
|v|² = 100 sin²2t + 100 cos²2t = 100,  so the speed is a constant 10 m s⁻¹

a = −20 cos 2t i − 20 sin 2t j = −4r
```

The acceleration is always directed towards O, with magnitude 4 × 5 = 20 m s⁻². Also r · v = −50 sin 2t cos 2t + 50 sin 2t cos 2t = 0, so the velocity is always at right angles to the radius. These results agree with the uniform circular motion of section M2.7, where a = rω² with ω = 2: 5 × 4 = 20.

## 4. Integrating with exponentials

### Worked example 5

A particle has velocity v = 3e^(−t) i + (2t − 4) j m s⁻¹. When t = 0 it is at the point with position vector 2i + j. Find r, and the times at which the particle is due east of O (take i as east and j as north).

```
r = ∫v dt = −3e^(−t) i + (t² − 4t) j + c
t = 0:  −3i + 0j + c = 2i + j,  so c = 5i + j
r = (5 − 3e^(−t)) i + (t² − 4t + 1) j
```

Due east of O means the j component is zero and the i component is positive:

```
t² − 4t + 1 = 0,  t = 2 ± √3,  so t = 0.268 or t = 3.73 (3 s.f.)
```

At both times 5 − 3e^(−t) is positive (about 2.71 and 4.93), so both are valid. Check the i component: a negative value would mean due west, which is a different answer.

## 5. Three dimensions

The method is identical; there is just one more component.

A particle has r = 2t i + t² j + (4 − t³/3) k. Then v = 2i + 2t j − t² k, and at t = 2, v = 2i + 4j − 4k, so the speed is √(4 + 16 + 16) = 6 m s⁻¹. Its acceleration is a = 2j − 2t k, which at t = 2 is 2j − 4k.

## 6. Two moving particles

For particles A and B, the vector from A to B is r_B − r_A, and the distance between them is its magnitude.

If r_A = (1 + 2t)i + (3 + t)j and r_B = (4 + t)i + (1 + 3t)j, then

```
r_B − r_A = (3 − t)i + (2t − 2)j
|AB|² = (3 − t)² + (2t − 2)² = 5t² − 14t + 13
d(|AB|²)/dt = 10t − 14 = 0,  t = 1.4
|AB|² = 5(1.96) − 14(1.4) + 13 = 3.2,  least distance = √3.2 ≈ 1.79 m
```

Minimise the square of a distance or speed, not the distance itself: the algebra is far simpler and the minimum occurs at the same time.

## Common mistakes

- Assuming c = 0 because the particle starts at the origin, when another term is non-zero at t = 0.
- Integrating straight through a change of direction and calling the result the distance.
- Differentiating sin 2t as cos 2t, forgetting the factor 2.
- Giving the direction of motion from the position vector instead of the velocity vector.
- Calling a particle "due east" from the j component alone without checking the sign of the i component.
- Using constant acceleration equations when the acceleration depends on t.

## Exam technique

- **Show that** a speed is constant: find |v|² and simplify it to a number using sin² + cos² = 1.
- **Find the direction of motion**: give an angle with a stated reference direction, or a vector parallel to v.
- **Find the distance travelled**: find where v = 0 first, and say so.
- **Hence**: use the vector just found; for example, find a from the v you derived.
- Use either i, j, k notation or column vectors, but keep one notation throughout an answer.

## Where next

Work through the [kinematics practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-oxfordaqa-alevel-maths-practice/), then condense with the [kinematics revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-oxfordaqa-alevel-maths-revision-notes/). Circular motion continues in the [uniform circular motion guide](/resources/oxfordaqa-a-level-mathematics-uniform-circular-motion-and-the-conical-pendulum/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.2 Kinematics, published by OxfordAQA.
