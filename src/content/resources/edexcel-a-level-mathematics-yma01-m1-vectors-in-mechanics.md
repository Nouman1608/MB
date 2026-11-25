---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M1 Vectors in mechanics"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M1: Mechanics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-vectors-in-mechanics-edexcel-alevel-maths"
description: "Edexcel IAL Maths M1 vectors: bearings from components, resultants by diagram, parallel vectors, velocity and acceleration in i, j form, and two moving objects."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of Unit M1: Mechanics 1 (WME01) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. Statement 2.1 is "Magnitude and direction of a vector. Resultant of vectors may also be required", with the guidance that you "may be required to resolve a vector into two components or use a vector diagram" and that questions "may be set involving the unit vectors i and j". Statement 2.2 is "Application of vectors to displacements, velocities, accelerations and forces in a plane", using velocity = change of displacement ÷ time for constant velocity and acceleration = change of velocity ÷ time for constant acceleration.

The broader [models, vectors and constant acceleration guide](/resources/edexcel-ial-mathematics-mathematical-models-vectors-in-mechanics-and-constant/) introduces magnitudes, resolving and a single particle moving with constant velocity. This guide goes further: bearings from components, resultants found from a diagram, parallel vectors, and problems with two moving objects.

## What the specification asks for

| Statement | You must be able to |
|---|---|
| 2.1 | Find a magnitude and a direction, resolve into components, find a resultant by components or from a vector diagram |
| 2.1 | Work with i and j |
| 2.2 | Use r = r₀ + vt for constant velocity |
| 2.2 | Use a = (v − u)/t for constant acceleration, in vector form |
| 2.2 | Apply these to displacement, velocity, acceleration and force |

## Directions from components

A vector ai + bj has magnitude √(a² + b²). Its direction can be asked for in three ways, so read the wording carefully:

- **Angle with i:** tan θ = |b|/|a|, then use a sketch to say which side of the i direction it lies.
- **Angle with j:** tan φ = |a|/|b|.
- **Bearing**, with i east and j north: measured clockwise from north.

For a bearing, always sketch the vector first and decide which quadrant it points into.

**Worked example 1.** Find the bearing of each velocity, with i east and j north: **(a)** (−3i + 4j) m s⁻¹ **(b)** (5i − 12j) m s⁻¹.

```
(a) points north-west. Angle west of north: tan φ = 3/4, φ = 36.87°
    bearing = 360° - 36.87° = 323.1°
(b) points south-east. Angle east of south: tan φ = 5/12, φ = 22.62°
    bearing = 180° - 22.62° = 157.4°
```

A calculator's tan⁻¹ only returns angles between −90° and 90°. The sketch, not the calculator, decides the bearing.

## Resultants from a vector diagram

When two forces are given as magnitudes and the angle between them, rather than in i and j form, draw them nose to tail. The resultant closes the triangle, and the cosine and sine rules solve it.

**Worked example 2.** Forces of 6 N and 10 N act on a particle. The angle between their directions is 120°. Find the magnitude of the resultant and the angle it makes with the 10 N force.

Drawn nose to tail, the angle inside the triangle between the two forces is 180° − 120° = 60°.

```
R^2 = 6^2 + 10^2 - 2(6)(10)cos 60° = 136 - 60 = 76
R = 8.72 N
sin θ / 6 = sin 60° / 8.718
sin θ = 0.5960,  θ = 36.6°
```

The resultant is 8.72 N at 36.6° to the 10 N force. A frequent error is to use 120° in the cosine rule. The angle in the triangle is the supplement of the angle between the forces. You can check by components: put the 10 N force along i, so the 6 N force is 6 cos 120° i + 6 sin 120° j = −3i + 5.196j. The resultant is 7i + 5.196j, of magnitude √76.

## Parallel vectors

Two vectors are parallel when one is a scalar multiple of the other. So a force parallel to (3i + j) can be written λ(3i + j), and its components are in the ratio 3 : 1.

**Worked example 3.** Forces (2i + 3j) N and (pi − j) N act on a particle. Their resultant is parallel to (3i + j). Find p and the magnitude of the resultant.

```
resultant = (2 + p)i + 2j
parallel to 3i + j:   (2 + p)/2 = 3/1,  so p = 4
resultant = 6i + 2j,  magnitude = √40 = 6.32 N
```

When the direction is "parallel to i" or "due east", the j component is zero. When it is "due north", the i component is zero.

## Velocity and acceleration in vector form

With constant velocity v, a particle that starts at position r₀ is at r = r₀ + vt after time t. The speed is |v|, the magnitude of the velocity.

With constant acceleration, a = (v − u)/t. In vector form this is v = u + at.

To write a velocity with a given speed in a given direction, scale a unit vector. A speed of 15 m s⁻¹ in the direction of (3i − 4j) is 15 × (3i − 4j)/5 = (9i − 12j) m s⁻¹, because |3i − 4j| = 5.

Forces add as vectors too. The resultant force in i and j form is the sum of the components, and dividing it by the mass gives the acceleration vector, as Newton's second law in section 4 of M1 sets out.

## Two moving objects

For two objects P and Q, write each position vector in terms of t, then:

- **The vector from P to Q** is r_Q − r_P.
- **Q is due north of P** when the i component of r_Q − r_P is zero and its j component is positive.
- **They collide** when r_P = r_Q at the same t, so both components must agree for a single value of t.
- **Their distance apart** is |r_Q − r_P|.

**Worked example 4.** At noon ship A is at (2i + 3j) km and moves with constant velocity (4i + 2j) km h⁻¹. Ship B is at (10i − j) km and moves with constant velocity (−2i + 5j) km h⁻¹. Show that, if they do not change course, the ships will collide, and find when and where.

```
r_A = (2 + 4t)i + (3 + 2t)j
r_B = (10 - 2t)i + (-1 + 5t)j
i: 2 + 4t = 10 - 2t,  so t = 4/3
j at t = 4/3:  A: 3 + 8/3 = 17/3,  B: -1 + 20/3 = 17/3
```

The same t makes both components equal, so the ships collide 1 hour 20 minutes after noon, at 13:20, at the point (22/3 i + 17/3 j) km. If the j components had been different at t = 4/3, the ships would only be in line north–south at that moment, and would not collide.

## Common mistakes

- Using tan⁻¹ without a sketch, and giving a bearing in the wrong quadrant.
- Using the angle between two forces in the cosine rule, instead of 180° minus that angle.
- Mixing up speed and velocity. Speed is a magnitude, with no direction.
- Writing a = (u − v)/t, which reverses every sign.
- Checking only one component when deciding whether two objects collide.
- Forgetting that time in a vector question is measured from a stated start, such as noon.

## Exam technique

- **"Find the magnitude and direction"** wants two answers. Say which line the angle is measured from.
- **"Find the bearing"** wants a three-figure angle clockwise from north, such as 037° or 323°.
- **"Show that"** a position vector takes a given form: expand r₀ + vt and collect the i and j parts on separate lines.
- **"Explain why"** objects do not meet: compare both components at the time found.
- Give answers that use g to 2 or 3 significant figures, and others exactly or to 3 significant figures.

## Where next

- [M1 vectors revision notes](/resources/edexcel-a-level-mathematics-yma01-m1-vectors-in-mechanics-revision-notes/) for a summary and self-test.
- [M1 vectors practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-vectors-in-mechanics-practice/) with mark schemes.
- [M1 kinematics study guide](/resources/edexcel-a-level-mathematics-yma01-m1-kinematics-straight-line/) for constant acceleration in one dimension.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
