---
title: "OxfordAQA International AS and A-level Mathematics: Newton's laws: slopes, variable acceleration (9660)"
seoTitle: "OxfordAQA A-level Maths M2 Slopes & Variable Acceleration"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Newton's laws: inclined planes and variable acceleration"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 211
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-newtons-law-of-motion-oxfordaqa-alevel-maths"
description: "Study guide to Newton's laws on inclined planes and variable acceleration in 1, 2 and 3 dimensions for OxfordAQA International A-level Maths (9660)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers specification section M2.4 (Newton's Law of Motion) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit M2 (Mechanics), which is part of the International A-level only and is not examined at International AS. Unit M2 is a written paper of 1 hour 30 minutes, 80 marks, with a calculator allowed. The same unit also contains M2.2 (kinematics with calculus) and M2.3 (statics and forces), which you will use throughout.

Course hub: [/boards/oxfordaqa/a-level/mathematics/](/boards/oxfordaqa/a-level/mathematics/). Printable checklist: [/checklists/oxfordaqa/a-level/mathematics/](/checklists/oxfordaqa/a-level/mathematics/). Companion pages: [revision notes](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration-practice/). Not sure where your gaps are? Try the [free 10-minute diagnostics](/diagnostics/).

## What you must be able to do

| Reference | What the specification asks | Where in this guide |
|---|---|---|
| M2.4 | Apply Newton's laws to linear motion with constant acceleration, including motion up or down an inclined plane | Sections 1 and 2 |
| M2.4 | Apply Newton's laws where the acceleration is variable; problems may be in one, two or three dimensions and may need integration or differentiation | Sections 3 to 5 |
| M2.2 | Position, velocity and acceleration vectors by differentiating or integrating with respect to t | Sections 3 to 5 |
| M2.3 | Friction with F ≤ μR, resolving forces | Section 2 |
| M2.1 | Comment on assumptions such as particle, smooth surface, motion under gravity | Section 6 |

## 1. Newton's second law for constant acceleration

For a particle of mass m (kg) acted on by forces with resultant F (N), the acceleration a (m s⁻²) satisfies

    F = ma     (resultant force = mass × acceleration)

In one dimension, choose a positive direction and write "resultant in the positive direction = ma". If the resultant is zero the acceleration is zero (Newton's first law). When a is constant you may also use the constant-acceleration equations:

    v = u + at     s = ut + ½at²     v² = u² + 2as     s = ½(u + v)t

Do not use these when a changes with time. That is the subject of sections 3 to 5.

Method: draw a force diagram, mark the direction of motion, write one equation of motion for each direction, then solve.

## 2. Motion on an inclined plane

A particle of mass m on a plane at angle θ to the horizontal has weight mg acting vertically downwards. Resolve it along and perpendicular to the plane:

    component down the slope = mg sin θ
    component into the slope = mg cos θ

There is no acceleration perpendicular to the plane, so the normal reaction is R = mg cos θ if no other force has a component perpendicular to the plane. Along the plane you apply F = ma.

When the particle slides, friction opposes the motion and is limiting, so F = μR. If a particle is not sliding, friction only needs to satisfy F ≤ μR. Take g = 9.8 m s⁻² unless told otherwise.

**Worked example 1 (smooth plane).** A particle of mass 3.5 kg is released from rest on a smooth plane inclined at 32° to the horizontal. Find its acceleration, the time it takes to travel 4.5 m, and its speed after 4.5 m.

    Down the plane: 3.5g sin32° = 3.5a
    a = 9.8 sin32° = 5.19 m s⁻²
    s = ½at²: 4.5 = ½(5.193)t²  →  t = 1.32 s
    v² = 2as = 2(5.193)(4.5)  →  v = 6.84 m s⁻¹

The mass cancels, so on a smooth slope the acceleration does not depend on mass. **a = 5.19 m s⁻², t = 1.32 s, v = 6.84 m s⁻¹.**

**Worked example 2 (rough plane, applied force).** A block of mass 6 kg is pushed up a rough plane inclined at 20° by a force of 50 N acting parallel to the line of greatest slope. The coefficient of friction is 0.3. Find the acceleration.

    Perpendicular: R = 6g cos20° = 55.25 N
    Friction: F = μR = 0.3(55.25) = 16.58 N, acting down the slope
    Weight component: 6g sin20° = 20.11 N, down the slope
    Up the slope: 50 − 20.11 − 16.58 = 6a
    6a = 13.31  →  a = 2.22 m s⁻²

**Acceleration 2.22 m s⁻² up the slope.**

**Worked example 3 (finding μ from observed motion).** A 2.4 kg block, starting at rest on a rough 30° incline, slides 3 m in 2 s. Find μ.

    s = ½at²: 3 = ½a(4)  →  a = 1.5 m s⁻²
    Perpendicular: R = 2.4g cos30°
    Down the slope: 2.4g sin30° − μ(2.4g cos30°) = 2.4(1.5)
    Divide by 2.4: 4.9 − μ(8.487) = 1.5
    μ = 3.4 / 8.487 = 0.401

**μ = 0.401.** A useful check: a particle on a rough slope can only start from rest and slide down if tan θ > μ. Here tan30° = 0.577, which is larger than 0.401, so it does slide.

## 3. Variable acceleration in one dimension

When the force depends on time, F(t), the acceleration is a(t) = F(t)/m. Then:

    a = dv/dt     v = dx/dt     v = ∫ a dt     x = ∫ v dt

Each integration gives a constant. Use the given conditions (for example, the velocity at t = 0) to find it. Always write the constant before you substitute.

**Worked example 4.** A particle of mass 2 kg moves on the x-axis under a single force F = (12 − 4t) N in the positive x direction. At t = 0 the particle is at the origin with velocity −5 m s⁻¹. Find (a) its velocity at time t, (b) the times when it is instantaneously at rest, (c) the total distance travelled between t = 0 and t = 5.

    (a) a = (12 − 4t)/2 = 6 − 2t
        v = 6t − t² + c;  v = −5 when t = 0, so c = −5
        v = −t² + 6t − 5 = −(t − 1)(t − 5)
    (b) v = 0 at t = 1 and t = 5
    (c) x = −t³/3 + 3t² − 5t   (x = 0 at t = 0)
        x(1) = −1/3 + 3 − 5 = −7/3
        x(5) = −125/3 + 75 − 25 = 25/3

The velocity is negative for 0 < t < 1 and positive for 1 < t < 5, so the particle turns round at t = 1. Distance = |x(1)| + (x(5) − x(1)) = 7/3 + 32/3 = **13 m**. Displacement alone, 25/3 m, would be the wrong answer to a "distance travelled" question.

## 4. Variable acceleration in two dimensions

Forces and motion are written as vectors in i and j (or as column vectors; the specification allows either). Each component obeys Newton's law separately: F = ma means Fx = max and Fy = may. Integrating a vector integrates each component and adds a constant vector, found from the initial velocity or position.

**Worked example 5.** A particle of mass 0.5 kg moves under a force F = (6t i + 4 j) N, with t in seconds. At t = 0 it is at the origin with velocity (2i − 3j) m s⁻¹. Find its velocity and position at t = 1, and its speed and direction at that time.

    a = F/0.5 = 12t i + 8 j
    v = (6t² + c1) i + (8t + c2) j;  at t = 0 v = 2i − 3j
    v = (6t² + 2) i + (8t − 3) j
    r = (2t³ + 2t) i + (4t² − 3t) j        (r = 0 at t = 0)
    t = 1: v = 8i + 5j,  r = 4i + j
    speed = √(8² + 5²) = √89 = 9.43 m s⁻¹
    angle above the i direction: tan⁻¹(5/8) = 32.0°

**v = (8i + 5j) m s⁻¹, r = (4i + j) m, speed 9.43 m s⁻¹ at 32.0° to i.**

## 5. Variable acceleration in three dimensions, and using differentiation

The method is identical with a third component k. If k is vertical, the weight mg acts in the −k direction and must be included in the resultant force.

Sometimes you are given the position vector r(t) and asked for the force. Then you differentiate twice: v = dr/dt, a = dv/dt, and F = ma.

**Worked example 6.** A particle of mass 2 kg has position vector r = 2t² i + (t³ − 6t) j + 4t k metres at time t seconds. Find (a) the force acting on it at time t, (b) the value of t when the magnitude of the force is 10 N, (c) its speed when it is moving parallel to the plane containing i and k.

    (a) v = 4t i + (3t² − 6) j + 4 k
        a = 4 i + 6t j
        F = 2a = (8 i + 12t j) N
    (b) |F|² = 64 + 144t² = 100  →  t² = 1/4  →  t = 0.5 (t > 0)
    (c) Moving parallel to the i–k plane means the j component of v is zero:
        3t² − 6 = 0  →  t = √2
        v = 4√2 i + 4 k,  speed = √(32 + 16) = √48 = 4√3 = 6.93 m s⁻¹

**(a) F = 8i + 12t j N, (b) t = 0.5 s, (c) 6.93 m s⁻¹.**

## 6. Modelling comments

The specification expects you to comment on terms such as particle, smooth surface, light, inextensible string and motion under gravity. For this unit:

- Particle: the object's size and rotation are ignored, so all forces act at one point.
- Smooth surface: friction is zero, so the only forces along the plane are the weight component and any applied force.
- Motion under gravity: air resistance is ignored and g is taken as constant.
- A force given as a function of t is a model; it only holds for the time interval in which the model is stated to apply.

## Common errors

- Using mg cos θ down the slope and mg sin θ into it. If the angle is between the plane and the horizontal, sin goes along the plane.
- Putting friction in the wrong direction. It opposes motion, or the tendency to move.
- Using constant-acceleration equations when a depends on t.
- Omitting a constant of integration, or applying the t = 0 condition to the wrong integral: the constant for r differs from the one for v.
- Reporting displacement when asked for distance. Split the motion where v changes sign.
- Dropping the vector structure: an answer to "find the velocity" should be a vector, not a number.
- Forgetting the weight term in a three-dimensional problem where k is vertical.

## Next steps

Condense this into the [revision notes](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration-revision-notes/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration-practice/). Return to the [course hub](/boards/oxfordaqa/a-level/mathematics/) or the [checklist](/checklists/oxfordaqa/a-level/mathematics/) to see what else is in Unit M2, and use the [diagnostics](/diagnostics/) to find weaker topics.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, for International AS exams from May/June 2018 and International A-level exams from May/June 2019, published by OxfordAQA. This guide follows section M2.4 and draws on M2.1 to M2.3.
