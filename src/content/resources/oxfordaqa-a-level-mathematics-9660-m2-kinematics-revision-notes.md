---
title: "OxfordAQA A-level Mathematics (9660): Kinematics -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9660 M2.2 kinematics: calculus with vectors, speed and direction, circular paths, distance travelled, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section M2.2 (Kinematics) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, in International A-level Unit M2. The section covers the relationship between position, velocity and acceleration in one, two or three dimensions with variable acceleration, using differentiation and integration of f(t)i + g(t)j + h(t)k. For explanations and worked examples, read the [kinematics study guide](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics/); to practise, use the [kinematics practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-practice/).

## The calculus chain

```
        differentiate          differentiate
   r  ───────────────►  v  ───────────────►  a
   r  ◄───────────────  v  ◄───────────────  a
         integrate (+c)         integrate (+c)
```

In components: if r = f(t)i + g(t)j + h(t)k, then v = f′(t)i + g′(t)j + h′(t)k and a = f″(t)i + g″(t)j + h″(t)k. Every integration needs a constant vector c, found from a known position or velocity.

## Derivatives and integrals you will need

| Function of t | Derivative | Integral |
|---|---|---|
| tⁿ | ntⁿ⁻¹ | tⁿ⁺¹/(n + 1) |
| eᵏᵗ | keᵏᵗ | eᵏᵗ/k |
| sin kt | k cos kt | −(cos kt)/k |
| cos kt | −k sin kt | (sin kt)/k |

Angles in trigonometric functions of t are in radians.

## Quantities from vectors

| Quantity | How to find it |
|---|---|
| Speed | \|v\| = √(vx² + vy² + vz²) |
| Distance from O | \|r\| |
| Direction of motion | Direction of v; angle with i is given by tan θ = vy/vx, using a sketch for the quadrant |
| Moving parallel to i | j (and k) components of v are zero |
| At rest | Every component of v is zero at the same time |
| Due north / east of O | The other component of r is zero, and the remaining one has the right sign |
| Vector from A to B | r_B − r_A |
| Least speed or distance | Minimise the square; or use v · a = 0 for speed |

## Key results

- d(|v|²)/dt = 2 v · a, so speed is stationary when v and a are perpendicular.
- If |r| is constant, the path is a circle about O, and r · v = 0.
- For r = R cos ωt i + R sin ωt j: speed Rω, acceleration −ω²r, magnitude Rω², directed towards O.
- Constant acceleration equations apply only when a is a constant vector.

## Distance in a straight line

1. Find the times when v = 0 inside the interval.
2. Find s at the start, at each turning time, and at the end.
3. Add the sizes of the changes in s between these times.

Example: v = 8 − 2e^(0.5t) changes sign at t = 2 ln 4. With s(0) = 0, s = 10.18 m at the turning time and 6.44 m at t = 4, so the distance in 4 s is 10.18 + 3.74 = 13.9 m.

## Key terms

| Term | Meaning |
|---|---|
| Position vector r | The vector from the origin O to the particle |
| Displacement | Change in position; a vector |
| Velocity v | Rate of change of position, dr/dt |
| Acceleration a | Rate of change of velocity, dv/dt |
| Speed | Magnitude of velocity; a scalar |
| Distance travelled | Total length of path; a scalar, never negative |
| Variable acceleration | Acceleration that depends on time |

## Exam traps

- **Dropping the constant.** v = ∫a dt always has +c, and c is a vector.
- **c is not always zero at the origin.** If r contains e^(−t) or cos t, those terms are not zero at t = 0.
- **Chain rule factor.** The derivative of e^(−0.5t) is −0.5e^(−0.5t), and of sin 2t is 2 cos 2t.
- **Distance versus displacement.** Integrating through a change of direction gives displacement.
- **Direction from r.** The direction of motion comes from v, not from r.
- **One component zero is not rest.** Check all components at the same t.
- **Wrong quadrant.** v = −3i + 3j points at 135° to i, not −45°.

## Self-test

1. r = t³i + 2tj. Find v and a.
2. v = (4t − 1)i + 3j. Find the speed at t = 1.
3. v = 2 cos t i − 3 sin t j. Find a.
4. a = 6i − 2j and v = i + 4j when t = 0. Find v.
5. For the particle in Question 4, when is it moving parallel to i?
6. Describe the direction of v = 3i − 3j.
7. A particle starts at O with v = 4e^(−2t) along a line. Find s and its limit as t → ∞.
8. r = 3 cos t i + 3 sin t j. Find the speed.
9. What does v · a = 0 tell you about the speed at that instant?
10. Find the speed when v = i − 2j + 2k.
11. Why can v = u + at not be used when a = 2t i?
12. A and B have r_A = ti and r_B = 4i + tj. Find |AB|² in terms of t.

### Answers

1. v = 3t²i + 2j; a = 6ti.
2. v = 3i + 3j, speed √18 = 3√2 ≈ 4.24.
3. a = −2 sin t i − 3 cos t j.
4. v = (6t + 1)i + (4 − 2t)j.
5. When 4 − 2t = 0, so t = 2.
6. At 45° below the i direction (towards i and −j).
7. s = 2 − 2e^(−2t), which tends to 2.
8. v = −3 sin t i + 3 cos t j, so the speed is 3.
9. The speed is stationary (often a minimum or maximum) at that instant.
10. √(1 + 4 + 4) = 3.
11. The acceleration is not constant, so you must integrate.
12. r_B − r_A = (4 − t)i + tj, so |AB|² = (4 − t)² + t² = 2t² − 8t + 16.

## Related pages

- [Kinematics study guide](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics/)
- [Kinematics practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-kinematics-practice/)
- [Modelling and kinematics with vectors revision notes](/resources/oxfordaqa-a-level-mathematics-mathematical-modelling-and-kinematics-with-vectors-and-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.2 Kinematics, published by OxfordAQA.
