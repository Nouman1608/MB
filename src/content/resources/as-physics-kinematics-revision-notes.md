---
title: "AS Physics: Kinematics and Equations of Motion — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Kinematics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 2.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-kinematics"
    subtopic: "as-equations-of-motion"
description: "Condensed recall notes on the suvat equations, motion graphs and projectile motion for Cambridge International AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Kinematics and Equations of Motion study guide](/resources/as-physics-kinematics-equations-of-motion/).

Assessed on **Paper 1** (multiple choice, 1 h 15, 40 marks) and **Paper 2** (structured, 1 h 15, 60 marks), both testing AO1 and AO2 on AS content, so both recall of the equations and their application to unfamiliar situations can be examined.

## The four equations of motion

Valid **only for uniform acceleration** — check this condition before reaching for any of the four.

```
v = u + at
s = ut + 1/2 a t^2
v^2 = u^2 + 2as
s = (u + v) t / 2
```

Choosing the right one: list u, v, a, s, t; identify the three you know and the one you want; pick the equation containing exactly those four.

**"Derive" is an explicit syllabus command word here**, not just "recall": v = u + at follows directly from the definition of acceleration (a = Δv/Δt, rearranged), and the others follow by combining that with the definition of velocity — know the derivation, not just the finished equations.

**Determining g experimentally:** drop an object through a known, measured height and time the fall electronically (a light gate or a timer released by an electromagnet), then rearrange s = ½gt² (since u = 0) to **g = 2s/t²**. Repeating the drop and averaging t reduces the effect of random timing error.

## Scalars and vectors

| Scalar | Vector |
|---|---|
| distance, speed, mass, time, energy, work, power | displacement, velocity, acceleration, force, momentum, weight |

Vectors combine by the parallelogram rule or by resolving into perpendicular components, whichever suits the quantities given:

```
horizontal:  F cos(theta)
vertical:    F sin(theta)
```

## Motion graphs

| Graph | Gradient | Area under |
|---|---|---|
| Displacement–time | Velocity | — |
| Velocity–time | **Acceleration** | **Displacement** |
| Acceleration–time | — | Change in velocity |

For a curve, take the gradient of the **tangent** at the point, drawn as a straight line touching the curve at exactly that instant rather than joining two separate points on it.

Note "displacement", not "distance": area below the axis on a velocity–time graph is negative displacement, since the object is moving in the opposite direction to whichever was defined as positive.

## Projectile motion — the whole method

Treat horizontal and vertical **independently**, applying the equations of motion separately in each direction. They share only the time.

```
HORIZONTAL   a = 0        so    s = u_x t          (constant velocity)
VERTICAL     a = -g       so    use suvat with u_y

At maximum height:   v_y = 0
Time of flight:      solve the vertical equation for s = 0
Range:               s = u_x x (time of flight)
Max height:          use v^2 = u_y^2 + 2as with v_y = 0 at the top
```

For a projectile launched at angle θ with speed u: `u_x = u cos θ`, `u_y = u sin θ`. See the [Kinematics and Equations of Motion study guide](/resources/as-physics-kinematics-equations-of-motion/) for the full derivations and worked reasoning behind every method above.

## Air resistance

Without it, the trajectory is a symmetrical parabola. **With** air resistance the path becomes asymmetric: reduced range and maximum height, a steeper descent than ascent, and the impact speed is less than the launch speed, since a resistive force continuously removes kinetic energy from the projectile throughout its flight.

## Exam traps

- Applying suvat when acceleration is **not** uniform.
- Mixing horizontal and vertical quantities in one equation.
- Sign errors: choose a positive direction and hold it. Taking up as positive makes g = −9.81.
- Confusing distance with displacement, or speed with velocity.
- Forgetting that at maximum height the **vertical** velocity is zero but the horizontal is not.
- Using the gradient of a chord where a tangent is required.
- Reciting the suvat equations without being able to derive v = u + at from the definition of acceleration, when a question explicitly asks for a derivation.
- Timing a single drop when determining g experimentally, rather than repeating and averaging to reduce random timing error.

## Self-test

1. State the four equations of motion.
2. A ball is thrown at 20 m/s at 30° above the horizontal. Find its initial horizontal and vertical velocity components.
3. What does the area under a velocity–time graph give?
4. At the top of a projectile's path, which velocity component is zero?
5. Give two effects of air resistance on a projectile's path.
6. Derive v = u + at from the definition of acceleration.
7. Describe a method for determining g experimentally, including the equation used.

**Answers:** 1. v = u + at; s = ut + ½at²; v² = u² + 2as; s = (u+v)t/2. 2. u_x = 20 cos 30° = **17.3 m/s**; u_y = 20 sin 30° = **10 m/s**. 3. Displacement (not distance — area below the axis counts as negative). 4. The vertical component; the horizontal component is unchanged. 5. Any two: reduced range, reduced maximum height, asymmetric trajectory with a steeper descent, impact speed lower than launch speed. 6. Acceleration a = Δv/Δt = (v − u)/t; rearranging gives at = v − u, so v = u + at. 7. Drop an object through a known height, timing the fall with a light gate or electromagnet-released timer; rearrange s = ½gt² to g = 2s/t², repeating and averaging t to reduce random error.
