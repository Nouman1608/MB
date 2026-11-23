---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M2 Collisions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 6.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-collisions-edexcel-alevel-maths"
description: "Edexcel IAL Maths M2 collisions: impulse as a vector, Newton's law of restitution, kinetic energy lost, using 0 ≤ e ≤ 1, and conditions for a second impact."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4 of Unit M2: Mechanics 2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. The statements are "Momentum as a vector. The impulse-momentum principle in vector form. Conservation of linear momentum", "Direct impact of elastic particles. Newton's law of restitution. Loss of mechanical energy due to impact", and "Successive impacts of up to three particles or two particles and a smooth plane surface". The guidance says you must "know and use the inequalities 0 ≤ e ≤ 1" and that "collision with a plane surface will not involve oblique impact".

The broader [work, energy, power and collisions guide](/resources/edexcel-ial-mathematics-work-energy-and-power-and-collisions-with-the/) sets out the basic method for a direct impact. This guide concentrates on the parts that carry the hardest marks: impulse vectors, collisions with letters instead of numbers, using 0 ≤ e ≤ 1 to find a range, and deciding whether a further collision happens.

## What the specification asks for

| Statement | You must be able to |
|---|---|
| 4.1 | Use momentum mv and impulse I = mv − mu as vectors, in i, j form |
| 4.1 | Apply conservation of linear momentum |
| 4.2 | Apply Newton's law of restitution to a direct impact, and find the kinetic energy lost |
| 4.2 | Use 0 ≤ e ≤ 1 |
| 4.3 | Handle up to three particles in a line, or two particles and a smooth wall or floor met at right angles |

## Impulse as a vector

```
I = mv - mu
```

Momentum and impulse are vectors, measured in N s. In i, j form, apply the equation to each component. The particle's new velocity is v = u + I/m.

**Worked example 1.** A ball of mass 0.5 kg moving with velocity (4i + 3j) m s⁻¹ receives an impulse of (−3i + 2j) N s. Find its new velocity, its new speed, and the angle through which its direction of motion is turned.

```
v = (4i + 3j) + (-3i + 2j)/0.5 = (4i + 3j) + (-6i + 4j) = -2i + 7j
speed = √(4 + 49) = √53 = 7.28 m s^-1
cos θ = (u . v)/(|u||v|) = (-8 + 21)/(5 × 7.28) = 0.357
θ = 69.1°
```

The scalar product from P4 is the quickest way to find the angle between two velocities.

## Newton's law of restitution

For two particles colliding directly (along the line of their centres):

```
speed of separation = e × speed of approach
```

The coefficient of restitution e satisfies 0 ≤ e ≤ 1.

- **e = 1:** perfectly elastic. No kinetic energy is lost.
- **e = 0:** the particles move off together, with the same velocity.
- **0 < e < 1:** some kinetic energy is lost.

For a particle hitting a fixed smooth surface at right angles: rebound speed = e × impact speed.

## The standard method

1. Draw "before" and "after" diagrams. Choose a positive direction.
2. Mark every unknown velocity as positive, in the chosen direction. The sign of your answer then gives its direction.
3. **Momentum:** m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.
4. **Restitution:** v₂ − v₁ = e(u₁ − u₂), where particle 2 is the one in front in the positive direction.
5. Solve the two equations simultaneously.

Writing the restitution equation with velocities, not speeds, avoids sign errors. Then v₂ − v₁ (separation) and u₁ − u₂ (approach) are both positive for a real collision.

## Kinetic energy lost

```
KE lost = total KE before - total KE after
```

Momentum is always conserved in a collision. Kinetic energy is conserved only when e = 1.

**Worked example 2.** Particle A, of mass 2 kg, moves at 6 m s⁻¹ towards particle B, of mass 1 kg, which moves at 3 m s⁻¹ towards A. The coefficient of restitution is 0.5. Find the velocities after impact and the kinetic energy lost.

Take A's direction as positive, so B's initial velocity is −3.

```
momentum:     2(6) + 1(-3) = 2v_A + v_B,   so 2v_A + v_B = 9
restitution:  v_B - v_A = 0.5(6 - (-3)) = 4.5
subtract:     3v_A = 4.5,  v_A = 1.5,  v_B = 6
KE before = (1/2)(2)(36) + (1/2)(1)(9) = 40.5 J
KE after  = (1/2)(2)(2.25) + (1/2)(1)(36) = 20.25 J
KE lost   = 20.25 J
```

Both particles move in A's original direction after the impact: A at 1.5 m s⁻¹, B at 6 m s⁻¹.

## Using 0 ≤ e ≤ 1

Questions with letters often ask you to find when something happens, such as when a particle reverses direction. Express the velocity in terms of e, then use the sign of that expression together with 0 ≤ e ≤ 1.

## Worked example 3: will there be a second collision?

A particle A of mass m moves with speed u along a smooth horizontal line towards a particle B, of mass 3m, which is at rest. The coefficient of restitution between A and B is e. Beyond B is a smooth vertical wall perpendicular to the line. **(a)** Find the velocities after the impact. **(b)** Find the range of values of e for which A rebounds. **(c)** Take e = ½. B hits the wall and rebounds, with coefficient of restitution f between B and the wall. Find the range of values of f for which A and B collide again.

**(a)** Positive towards the wall:

```
momentum:     mu = mv_A + 3mv_B,   so u = v_A + 3v_B
restitution:  v_B - v_A = eu
adding:       4v_B = u(1 + e),  v_B = (1 + e)u/4
              v_A = v_B - eu = (1 - 3e)u/4
```

**(b)** A rebounds when v_A < 0, so 1 − 3e < 0, that is e > 1/3. Combined with e ≤ 1: 1/3 < e ≤ 1.

**(c)** With e = ½: v_B = 3u/8 towards the wall and v_A = −u/8, so A moves away from the wall at u/8. B rebounds from the wall with speed 3fu/8, also moving away from the wall. B catches A only if it is faster:

```
3fu/8 > u/8,  so f > 1/3
```

With f ≤ 1, the range is 1/3 < f ≤ 1. The key idea: after the wall, both particles move the same way, so a second impact needs the one behind to be faster.

## Successive impacts

With three particles A, B, C in a line, work through the collisions one at a time, in the order they happen. After each one, use the new velocities as the "before" values of the next. Finish by checking each adjacent pair: a further collision occurs only if the particle behind is moving faster in the same direction, or the two are moving towards each other.

## Common mistakes

- Putting speeds instead of signed velocities into the momentum equation.
- Writing restitution as v₁ − v₂ on one side and u₁ − u₂ on the other, which gives e a negative value.
- Assuming kinetic energy is conserved when e < 1.
- Forgetting that an impulse in i, j form must be divided by the mass to give a change in velocity.
- Giving a range for e without combining it with 0 ≤ e ≤ 1.
- Stopping after one collision when the question asks whether there are more.

## Exam technique

- **"Show that the speed of B is…"** needs both equations written in full, then the algebra.
- **"Find the range of values of e"** needs the inequality from the velocity and the bound from 0 ≤ e ≤ 1.
- **"Find the kinetic energy lost"** needs KE before and after written separately.
- **"Determine whether there is a further collision"** needs the velocities after the last impact and a sentence comparing them.
- **"Find the magnitude of the impulse"** wants a positive number in N s; give a direction only if asked.

## Where next

- [M2 collisions revision notes](/resources/edexcel-a-level-mathematics-yma01-m2-collisions-edexcel-alevel-maths-revision-notes/) for the method on one page and a self-test.
- [M2 collisions practice questions](/resources/edexcel-a-level-mathematics-yma01-m2-collisions-edexcel-alevel-maths-practice/) with mark schemes.
- [M2 work and energy study guide](/resources/edexcel-a-level-mathematics-yma01-m2-work-and-energy-edexcel-alevel-maths/) for kinetic energy and energy methods.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
