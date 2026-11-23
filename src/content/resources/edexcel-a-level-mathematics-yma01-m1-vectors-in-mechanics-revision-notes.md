---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M1 Vectors in mechanics -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths M1 vectors: magnitude, bearings, resultants, parallel vectors, r = r0 + vt, a = (v - u)/t and two moving objects."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 2 of Unit M1 in Pearson Edexcel International A Level Mathematics (YMA01): magnitude and direction of a vector, resultants, resolving, the unit vectors i and j, and vectors applied to displacement, velocity, acceleration and force in a plane. The full explanations are in the [M1 vectors study guide](/resources/edexcel-a-level-mathematics-yma01-m1-vectors-in-mechanics/).

## Core formulae

```
|ai + bj| = √(a^2 + b^2)
resolving R at angle θ to i:   R cos θ i + R sin θ j
unit vector in direction of v:  v / |v|
constant velocity:      r = r0 + vt
constant acceleration:  a = (v - u)/t,   so v = u + at
vector from P to Q:     r_Q - r_P
```

## Directions

| Asked for | Use | Then |
|---|---|---|
| Angle with i | tan θ = \|b\|/\|a\| | State which side of i, from a sketch |
| Angle with j | tan φ = \|a\|/\|b\| | State which side of j |
| Bearing (i east, j north) | Angle from north | Measure clockwise; three figures |

**Bearing by quadrant**, with φ the acute angle from the north–south line:

| Vector points | Bearing |
|---|---|
| North-east (a > 0, b > 0) | φ |
| South-east (a > 0, b < 0) | 180° − φ |
| South-west (a < 0, b < 0) | 180° + φ |
| North-west (a < 0, b > 0) | 360° − φ |

Example: (−3i + 4j) points north-west, φ = tan⁻¹(3/4) = 36.9°, bearing 323.1°.

## Resultants

- **In i, j form:** add the i parts, add the j parts.
- **From magnitudes and an angle:** draw nose to tail. If the angle between the forces is θ, the angle in the triangle is 180° − θ. Use the cosine rule for the size and the sine rule for the direction.
- Equivalent formula: R² = P² + Q² + 2PQ cos θ, where θ is the angle between the forces.

Example: 6 N and 10 N at 120° give R² = 36 + 100 + 120 cos 120° = 76, so R = 8.72 N.

## Parallel vectors

- v is parallel to (ai + bj) when v = λ(ai + bj) for some scalar λ.
- Components in the same ratio: for xi + yj parallel to ai + bj, x/y = a/b.
- "Parallel to i" or "due east/west": j component zero.
- "Parallel to j" or "due north/south": i component zero.

## Velocity with a given speed and direction

v = speed × (unit vector). A speed of 26 m s⁻¹ in the direction of (5i + 12j) is 26 × (5i + 12j)/13 = (10i + 24j) m s⁻¹.

## Two moving objects

| Condition | Test |
|---|---|
| Q due north of P | i component of r_Q − r_P is zero, j component positive |
| Q due east of P | j component of r_Q − r_P is zero, i component positive |
| They collide | Both components equal at the same t |
| Distance apart | \|r_Q − r_P\| |

For "when are they d apart", write |r_Q − r_P|² = d², which gives a quadratic in t.

## Key terms

| Term | Meaning |
|---|---|
| Vector | A quantity with magnitude and direction |
| Scalar | A quantity with magnitude only |
| Resultant | The single vector equal to the sum of several vectors |
| Component | The part of a vector in a given direction |
| Resolve | Split a vector into two perpendicular components |
| Position vector | The displacement of a point from the origin O |
| Velocity and speed | Velocity is a vector; speed is its magnitude |

## Exam traps

- A bearing in the wrong quadrant, from tan⁻¹ with no sketch.
- Using the angle between the forces in the cosine rule triangle, instead of its supplement.
- Giving velocity when speed is asked for, or the reverse.
- a = (u − v)/t instead of (v − u)/t.
- Claiming a collision after checking only one component.
- Giving a time from the wrong starting point, such as forgetting that t = 0 is noon.

## Self-test

1. Find the magnitude of (−5i + 12j).
2. Find the bearing of (5i − 12j), with i east and j north.
3. Resolve a 20 N force at 30° above i into i and j components.
4. Forces of 8 N and 5 N act at 60° to each other. Find the magnitude of the resultant.
5. (2 + p)i + 2j is parallel to 3i + j. Find p.
6. Write a velocity of speed 15 m s⁻¹ in the direction of (3i − 4j).
7. A particle at (i + 2j) m moves with velocity (3i − j) m s⁻¹. Find its position after 4 s.
8. Velocity changes from (2i + 5j) to (8i − 3j) m s⁻¹ in 2 s. Find the acceleration.
9. When is a particle with r = (6 − 2t)i + (3 + t)j due north of O?
10. P is at (1 + 3t)i + (2 + t)j and Q at (7 − t)i + (−2 + 3t)j. Find r_Q − r_P.
11. Using question 10, show that PQ² = 20t² − 64t + 52.
12. What two things must be true for two ships to collide?

**Answers:**

1. √(25 + 144) = 13.
2. South-east; φ = tan⁻¹(5/12) = 22.6°, so the bearing is 157.4°.
3. 20 cos 30° = 17.3 i and 20 sin 30° = 10 j, so (17.3i + 10j) N.
4. R² = 64 + 25 + 80 cos 60° = 129, so R = 11.4 N.
5. (2 + p)/2 = 3, so p = 4.
6. 15(3i − 4j)/5 = (9i − 12j) m s⁻¹.
7. (i + 2j) + 4(3i − j) = (13i − 2j) m.
8. ((8 − 2)i + (−3 − 5)j)/2 = (3i − 4j) m s⁻².
9. 6 − 2t = 0, so t = 3; the j component is then 6, which is positive.
10. (6 − 4t)i + (2t − 4)j.
11. (6 − 4t)² + (2t − 4)² = 36 − 48t + 16t² + 4t² − 16t + 16 = 20t² − 64t + 52.
12. At the same value of t, both the i components and the j components of their position vectors must be equal.

Next, try the [M1 vectors practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-vectors-in-mechanics-practice/).
