---
title: "Edexcel IAL Physics: Mechanics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 1: Mechanics and Materials"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-1-mechanics-and-materials"
    subtopic: "mechanics"
description: "Condensed recall notes on kinematics, projectiles, Newton laws, momentum and energy for Edexcel International A Level Physics WPH11."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Mechanics study guide](/resources/edexcel-ial-physics-mechanics/).

## Kinematics

```
v = u + at        s = ut + 1/2 at^2
v^2 = u^2 + 2as   s = (u+v)t / 2
```

These **only apply to uniform acceleration**. For non-uniform acceleration you must use graphs — gradient for acceleration, area for displacement.

**Velocity–time graph:** gradient = acceleration, **area = displacement**.
**Displacement–time graph:** gradient = velocity.

## Projectiles

**Treat horizontal and vertical motion completely independently.** They share only the time.

- **Horizontal:** no acceleration (ignoring drag), so `s = vt`.
- **Vertical:** `a = g = 9.81 m s⁻²` downwards.

**Time is the link between them** — find it from the vertical motion, then use it in the horizontal. That single insight solves almost every projectile problem.

At maximum height the **vertical** velocity is zero, but the horizontal velocity is unchanged. Saying "the velocity is zero at the top" is wrong.

## Newton's laws

**First** — constant velocity unless a **resultant** force acts.
**Second** — `F = Δp/Δt`, reducing to `F = ma` for constant mass.
**Third** — equal and opposite forces on **different bodies**, of the **same type**.

**Terminal velocity:** as speed rises, drag increases until it equals weight; the resultant force becomes zero, so acceleration is zero and velocity is constant. The object is still moving — it has simply stopped accelerating.

## Moments and equilibrium

```
moment = F x        (x = perpendicular distance from the line of
                       action of the force to the axis of rotation)
```

An extended body's weight acts through its **centre of gravity**. For a body in equilibrium, the **principle of moments** applies: the sum of clockwise moments about any point equals the sum of anticlockwise moments. This principle underlies beam-support and balance problems throughout the topic, and it holds about **any** chosen point, not just the pivot — choosing a point that eliminates an unknown force from the equation is often the fastest route to a solution.

**Worked example.** A 4.0 m uniform beam pivots at its centre. A 60 N weight hangs 1.5 m to the left of the pivot. Where must a 40 N weight hang on the right to balance it?

```
Clockwise moment = anticlockwise moment
40 x d = 60 x 1.5
d = 90 / 40 = 2.25 m
```

**CORE PRACTICAL 1** uses light gates or strobe/video photography to determine the acceleration of a freely-falling object, i.e. to measure g experimentally. This experimentally measured value of g can then be compared with the standard value of 9.81 m s⁻² used throughout the rest of the mechanics topic.

## Momentum and impulse

```
p = mv          impulse = Ft = delta-p
```

Impulse is the **area under a force–time graph**.

**Momentum is conserved in all collisions; kinetic energy only in elastic ones.** In an inelastic collision the missing kinetic energy becomes thermal energy, sound and deformation.

Momentum is a **vector** — assign a positive direction and treat opposite motion as negative. That is the biggest source of lost marks in collision questions.

## Work, energy and power

```
W = F s cos(theta)        Ek = 1/2 m v^2        Ep = mgh
P = W/t = Fv
efficiency = useful output / total input
```

**The cos θ matters:** only the component of force **along** the displacement does work. A force perpendicular to motion — such as the centripetal force, or the normal contact force on a horizontal surface — does **no work at all**.

**Conservation of energy** solves problems that kinematics cannot, particularly on curved paths where acceleration is not uniform. If a question involves a slope, a loop or a swing, energy is usually the faster route.

## Exam traps

- Using the *suvat* equations where acceleration is not uniform.
- Saying velocity is zero at the top of a projectile's path.
- Mixing horizontal and vertical components.
- Ignoring the vector nature of momentum.
- Omitting cos θ from the work equation.
- Claiming kinetic energy is conserved in all collisions.
- Forgetting to use the perpendicular distance from the pivot to the line of action of a force when calculating a moment, especially when the force acts at an angle.

Related: [Mechanics practice questions](/resources/edexcel-ial-physics-mechanics-practice/) for further worked calculations.

## Self-test

1. When are the *suvat* equations valid?
2. What links horizontal and vertical motion in a projectile problem?
3. What is true of the velocity at the top of a projectile's flight?
4. Which quantity is conserved in all collisions, and what happens to the rest?
5. Why does a centripetal force do no work?
6. State the principle of moments.
7. A 3.0 m uniform beam pivots at its centre. A 50 N weight hangs 1.2 m to the left of the pivot. Where must a 30 N weight hang on the right to balance it?

**Answers:** 1. Only when acceleration is uniform. 2. The time of flight — the two motions are otherwise independent. 3. The vertical component is zero, but the horizontal component is unchanged, so the velocity is not zero. 4. Momentum; in an inelastic collision the missing kinetic energy is transferred to thermal energy, sound and deformation. 5. It acts perpendicular to the direction of motion, and only the component of force along the displacement does work. 6. For a body in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about that same point. 7. 30 × d = 50 × 1.2 → d = 60 ÷ 30 = **2.0 m**.
