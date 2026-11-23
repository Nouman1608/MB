---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M2 Collisions -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths M2 collisions: impulse vectors, conservation of momentum, restitution, energy loss, ranges of e and successive impacts."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 4 of Unit M2 in Pearson Edexcel International A Level Mathematics (YMA01): momentum and the impulse–momentum principle in vector form, conservation of linear momentum, direct impact with Newton's law of restitution, loss of mechanical energy, and successive impacts of up to three particles, or two particles and a smooth plane surface. For worked examples, use the [M2 collisions study guide](/resources/edexcel-a-level-mathematics-yma01-m2-collisions/).

## Core equations

```
momentum = mv                               (vector, N s)
impulse  I = mv - mu                        (vector, N s)
new velocity  v = u + I/m
conservation:  m1u1 + m2u2 = m1v1 + m2v2
restitution:   v2 - v1 = e(u1 - u2)         (particle 2 in front)
wall or floor: rebound speed = e × impact speed
0 ≤ e ≤ 1
```

## Values of e

| e | Name | What happens |
|---|---|---|
| 1 | Perfectly elastic | Kinetic energy is conserved |
| Between 0 and 1 | — | Some kinetic energy is lost |
| 0 | Perfectly inelastic | The particles move together after impact |

Momentum is conserved in every collision between two free particles. It is not conserved for a particle hitting a fixed wall, because the wall exerts an external impulse.

## The direct impact method

1. Sketch before and after, with a positive direction.
2. Label unknown final velocities in the positive direction.
3. Write the momentum equation with signed velocities.
4. Write the restitution equation as v₂ − v₁ = e(u₁ − u₂).
5. Solve simultaneously, then interpret signs as directions.

## Impulse in vector form

- Each component separately: Iₓ = m(vₓ − uₓ), I_y = m(v_y − u_y).
- Magnitude of impulse: √(Iₓ² + I_y²).
- Angle between initial and final velocities: cos θ = (u · v)/(|u||v|).
- In a collision between two particles, the impulses on them are equal in size and opposite in direction.

## Kinetic energy lost

```
loss = (sum of (1/2)mu^2 before) - (sum of (1/2)mv^2 after)
```

Loss is zero only when e = 1. With letters, the answer often contains a factor (1 − e²).

## Ranges from 0 ≤ e ≤ 1

| Question | Method |
|---|---|
| "Show that A reverses direction" | Show v_A < 0 for the given e, or for all allowed e |
| "Find the range of e for which A reverses" | Solve v_A < 0, then intersect with 0 ≤ e ≤ 1 |
| "Show that B always moves forward" | Show v_B > 0 for every e from 0 to 1 |

## Successive impacts

- Deal with one collision at a time, in time order.
- After each collision, the final velocities become the initial velocities for the next.
- **Further collision test** for two particles on a line, positive direction to the right:
  - left particle's velocity > right particle's velocity: they collide again;
  - otherwise: they do not.
- After a wall impact, reverse the direction of the particle and multiply its speed by e (or f) for the wall.

## Bouncing on a floor

- Drop from height h: speed before impact √(2gh).
- After impact: speed e√(2gh), rebound height e²h.
- Time for each flight up and down: 2v/g.

## Key terms

| Term | Meaning |
|---|---|
| Direct impact | Velocities along the line joining the centres before and after |
| Coefficient of restitution | e = speed of separation ÷ speed of approach |
| Impulse | Change in momentum; force × time for a constant force |
| Conservation of linear momentum | Total momentum is unchanged when no external impulse acts |
| Successive impacts | A sequence of collisions, each using the results of the last |

## Exam traps

- Speeds used where signed velocities are needed.
- A restitution equation with the subtractions in different orders on each side.
- Kinetic energy treated as conserved when e < 1.
- An impulse vector not divided by the mass before adding it to the velocity.
- A range for e not intersected with 0 ≤ e ≤ 1.
- Stopping the analysis before checking for a further collision.

## Self-test

1. State Newton's law of restitution.
2. What does e = 0 mean for two colliding particles?
3. Is kinetic energy conserved when e = 0.8?
4. A 2 kg particle with velocity (3i + j) m s⁻¹ receives an impulse (4i − 6j) N s. Find its new velocity.
5. Find the magnitude of the impulse in question 4.
6. A ball hits a smooth wall at right angles at 10 m s⁻¹, with e = 0.3. Find its rebound speed.
7. Particle A (1 kg, 5 m s⁻¹) hits B (1 kg, at rest), e = 1. Find their velocities after impact.
8. Find the kinetic energy lost in question 7.
9. A ball is dropped from 5 m onto a floor with e = 0.6. Find the rebound height.
10. After an impact, A moves right at 2 m s⁻¹ and B, to its right, moves right at 1 m s⁻¹. Will they collide again?
11. Why is momentum not conserved when a ball bounces off a fixed wall?
12. A velocity after impact is (1 − 2e)u/3. For which allowed values of e does the particle reverse?

**Answers:**

1. Speed of separation = e × speed of approach, for a direct impact.
2. They move with the same velocity after impact.
3. No; some kinetic energy is lost unless e = 1.
4. v = (3i + j) + (4i − 6j)/2 = (5i − 2j) m s⁻¹.
5. √(16 + 36) = √52 = 7.21 N s.
6. 0.3 × 10 = 3 m s⁻¹.
7. Equal masses and e = 1: they exchange velocities, so A stops and B moves at 5 m s⁻¹.
8. Zero, because e = 1.
9. e²h = 0.36 × 5 = 1.8 m.
10. Yes: A, behind, is faster than B in the same direction.
11. The wall exerts an external impulse on the ball.
12. 1 − 2e < 0, so e > ½; with e ≤ 1, ½ < e ≤ 1.

Next, try the [M2 collisions practice questions](/resources/edexcel-a-level-mathematics-yma01-m2-collisions-practice/).
