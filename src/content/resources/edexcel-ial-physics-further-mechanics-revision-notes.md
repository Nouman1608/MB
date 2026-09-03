---
title: "Edexcel IAL Physics: Further Mechanics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 4: Further Mechanics, Fields and Particles"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-4-further-mechanics-fields-and-particles"
    subtopic: "further-mechanics"
description: "Condensed recall notes on momentum in two dimensions, circular motion and centripetal force for Edexcel International A Level Physics WPH14."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Further Mechanics study guide](/resources/edexcel-ial-physics-further-mechanics/).

## Momentum in two dimensions

Momentum is a vector, so it is conserved **independently in each perpendicular direction**. Resolve into x and y, apply conservation separately, then recombine.

```
p = mv        impulse = Ft = delta-p
```

**Elastic** collisions conserve kinetic energy; **inelastic** do not. Momentum is conserved in both.

For a perfectly elastic collision, the **relative speed of approach equals the relative speed of separation** — a useful shortcut that avoids simultaneous equations.

**Ek = p²/2m** is a useful form of the kinetic energy equation when momentum, rather than velocity, is known directly — handy for checking whether a collision is elastic without first converting every momentum back to a velocity.

**CORE PRACTICAL 9** investigates the relationship between force and change of momentum. **CORE PRACTICAL 10** uses ICT (e.g. video analysis software) to analyse collisions between small spheres such as ball bearings on a table top — the standard practical basis for two-dimensional momentum questions.

```
Worked example: a 0.15 kg ball moving at 8.0 m/s collides head-on with a
stationary 0.25 kg ball. After the collision the first ball rebounds at
2.0 m/s. Find the velocity of the second ball, and state whether the
collision is elastic.

Momentum:    (0.15 x 8.0) = (0.15 x -2.0) + (0.25 x v)
             1.2 = -0.30 + 0.25v  ->  v = 6.0 m/s

KE before:   0.5 x 0.15 x 8.0^2 = 4.8 J
KE after:    0.5 x 0.15 x 2.0^2 + 0.5 x 0.25 x 6.0^2 = 0.3 + 4.5 = 4.8 J
             Kinetic energy conserved -> ELASTIC
```

## Circular motion

```
omega = theta / t = 2 pi / T = 2 pi f       rad s^-1
v = r omega
a = v^2 / r = r omega^2
F = m v^2 / r = m r omega^2
```

**Angles must be in radians.**

**Centripetal force is not a new force.** It is the *resultant* of the real forces already present — tension, gravity, friction, normal contact, or magnetic force. Adding it as an extra arrow on a free-body diagram is the standard error.

| Situation | Provided by |
|---|---|
| Ball on a string | Tension |
| Car on a flat bend | Friction |
| Planet in orbit | Gravitational attraction |
| Charged particle in a magnetic field | Magnetic force BQv |
| Car on a banked track | Horizontal component of the normal force |

**Why there is acceleration at constant speed:** velocity is a vector, and its direction changes continuously, so the velocity changes even though the speed does not.

The force is always **perpendicular to the velocity**, so it does **no work** and kinetic energy is constant.

## Vertical circles

```
top:     T + mg = mv^2/r    ->   T = mv^2/r - mg
bottom:  T - mg = mv^2/r    ->   T = mv^2/r + mg
```

Tension is **greatest at the bottom** and least at the top, differing by **2mg**.

**Minimum speed at the top** is when T = 0 and gravity alone supplies the centripetal force:

```
mg = mv^2/r    ->    v_min = sqrt(gr)
```

Below this the object leaves the circular path.

## Exam traps

- Drawing centripetal force as an additional force rather than identifying its source.
- Using degrees instead of radians.
- Saying there is no acceleration because speed is constant.
- Claiming centripetal force does work.
- Forgetting that at the top of a vertical circle *both* tension and weight act towards the centre.
- Failing to resolve momentum into components in a two-dimensional collision.
- Converting every momentum back to a velocity before checking kinetic energy, when Ek = p²/2m gives the answer directly from momentum and mass alone.
- Confusing what each core practical investigates: Core Practical 9 is force and momentum change; Core Practical 10 is two-dimensional collision analysis by video.

## Self-test

1. How is momentum conserved in a two-dimensional collision?
2. Give the two expressions for centripetal acceleration.
3. Why is an object in uniform circular motion accelerating?
4. Why does the centripetal force do no work?
5. Derive the minimum speed at the top of a vertical circle.
6. Write the kinetic energy equation in terms of momentum, and state when this form is most useful.
7. A 0.20 kg ball moving at 5.0 m/s collides with a stationary 0.30 kg ball; after the collision the first ball moves at 1.0 m/s in the same direction. Find the second ball's velocity and state whether the collision is elastic.

**Answers:** 1. It is conserved independently in each of two perpendicular directions, so resolve into components and apply conservation to each separately. 2. a = v²/r and a = rω². 3. Velocity is a vector whose direction is continuously changing, so the velocity changes even at constant speed. 4. It acts perpendicular to the direction of motion, and work requires a component of force along the displacement. 5. At minimum speed the tension is zero, so weight alone provides the centripetal force: mg = mv²/r, giving v = √(gr). 6. Ek = p²/2m; most useful when momentum, rather than velocity, is already known. 7. Momentum: (0.20 × 5.0) = (0.20 × 1.0) + (0.30 × v) → 1.0 = 0.20 + 0.30v → v = 2.67 m/s. KE before = ½(0.20)(5.0)² = 2.5 J; KE after = ½(0.20)(1.0)² + ½(0.30)(2.67)² ≈ 0.1 + 1.07 = 1.17 J — kinetic energy is not conserved, so the collision is **inelastic**.
