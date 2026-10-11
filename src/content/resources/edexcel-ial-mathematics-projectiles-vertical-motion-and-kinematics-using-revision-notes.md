---
title: "Pearson Edexcel International Advanced Level Mathematics: Projectiles, vertical motion and kinematics using calculus and vectors (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths M2 Projectiles Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Projectiles, vertical motion and kinematics using calculus and vectors"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 158
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-kinematics-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Maths M2 kinematics: vertical motion, projectiles, calculus and vectors, with formulas and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense Pearson Edexcel International Advanced Level Mathematics (YMA01), Unit M2 section 1, topics 1.1 to 1.4, from the *Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification, Issue 3, April 2019. M2 is listed as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using/). Then try the [practice questions](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using-practice/).

Also useful: the [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the free [10-minute diagnostics](/diagnostics/).

## 1.1 Vertical motion: key facts

Constant acceleration of magnitude g, in the direction of gravity. Use the value of g the question gives (9.8 m s⁻² is used here).

| Equation | Use when you do not have |
|---|---|
| v = u + at | s |
| s = ut + ½at² | v |
| v² = u² + 2as | t |
| s = ½(u + v)t | a |

**Method in steps**
1. Draw a sketch and mark the start point.
2. Choose up (or down) as positive. If up is positive, a = −g.
3. List u, v, a, s, t with signs. Mark which is unknown.
4. Choose the equation that avoids the quantity you neither have nor want.
5. For a quadratic in t, say what each root means and reject the one that does not fit.

**Anchors:** at the top v = 0. The speed is the same at a given height going up and coming down. Time up equals time down to the same level. Launching with speed u, the rise is u²/2g and the time to the top is u/g.

**Two particles:** write both displacements from one origin and one clock. "Meet" means equal heights at the same time.

## 1.2 Projectiles: key facts

Projected at speed U at angle α above the horizontal:

| | Horizontal | Vertical (up +) |
|---|---|---|
| Acceleration | 0 | −g |
| Velocity | U cos α | U sin α − gt |
| Displacement | (U cos α)t | (U sin α)t − ½gt² |

Result for landing at launch level:
- Time of flight T = 2U sin α / g.
- Range = (U cos α)T.
- Greatest height H = (U sin α)² / 2g, reached at T/2.

**Method in steps**
1. Resolve the initial velocity into two components.
2. Write the horizontal and vertical equations separately.
3. Link them through t.
4. For speed, use √(vₓ² + v_y²). For direction, tan θ = |v_y| / |vₓ|, and say above or below the horizontal.

**Small worked reminder.** Launched horizontally at 15 m s⁻¹ from 19.6 m above level ground: fall time from 19.6 = 4.9t², so t = 2 s. It lands 30 m away. Vertical speed on landing is 19.6 m s⁻¹.

## 1.3 Calculus with displacement

| Starting from | To get | Do this |
|---|---|---|
| x(t) | v | differentiate |
| v(t) | a | differentiate |
| a(t) | v | integrate, add a constant |
| v(t) | x | integrate, add a constant |

- At rest: v = 0. Turning point: v = 0 with a sign change.
- Maximum or minimum velocity: a = 0.
- **Distance** needs a split at each turning point. Displacement is the net change in x.
- With variable acceleration, suvat does not apply.
- A definite integral of v from t = a to t = b gives displacement, not distance.

Useful derivatives and integrals for the level of P1 to P4: powers of t, e^(kt), sin(kt) and cos(kt).

**Small worked reminder.** v = 3t² − 2t with x = 4 at t = 0: x = t³ − t² + 4. At t = 2, x = 8 − 4 + 4 = 8.

## 1.4 Vectors and calculus

```
v = dr/dt     a = dv/dt     r = ∫v dt     v = ∫a dt
```

- Differentiate or integrate each component separately.
- The constant of integration is a vector. Find it from a condition such as v = 3i − j at t = 0.
- Speed = |v| = √(vₓ² + v_y²).
- Parallel to i: j-component zero. Parallel to j: i-component zero.
- At rest: both components zero at the same time.

**Small worked reminder.** r = 2t³ i − 5t j: v = 6t² i − 5j, a = 12t i. At t = 1: v = 6i − 5j and speed = √61 = 7.81.

## Worked reminders for exam-style steps

**Vertical motion, two roots.** A ball is thrown up at 21 m s⁻¹ from the ground. For the time above 15 m, solve 4.9t² − 21t + 15 = 0. The roots are (21 ± √147)/9.8, so the time above is 2√147/9.8 = 2.47 s.

**Projectile through a point.** Launched at 20 m s⁻¹ with components 16 and 12. At t = 1.5 s: horizontal distance = 24 m. Height = 12(1.5) − 4.9(2.25) = 18 − 11.025 = 6.975 m. Vertical velocity = 12 − 14.7 = −2.7, so the ball is already falling.

**Distance from calculus.** v = 3t² − 18t + 24 = 3(t − 2)(t − 4). Turning points at t = 2 and t = 4. Work out x at 0, 1, 3 and the end time, then add the sizes of the changes.

**Vector constant.** Given a = 6t i − 2j and v = 4i + 5j at t = 0: v = 3t² i − 2t j + (4i + 5j) = (3t² + 4)i + (5 − 2t)j.

**Exponential velocity.** v = 12e^(−t/2) integrates to x = −24e^(−t/2) + c. If x = 0 at t = 0, then c = 24 and x tends to 24 as t increases.

## Checks before you write the answer

- Does the sign of every quantity match the chosen positive direction?
- Is the landing level the same as the launch level? If not, is s negative?
- Is the question asking for speed, velocity or a component?
- Have you given units (m, s, m s⁻¹, m s⁻²) and 3 significant figures?
- For "show that", is every line written down, ending on the stated value?

## Must-know distinctions

- **Speed and velocity:** speed is a magnitude, velocity has direction.
- **Distance and displacement:** distance adds the sizes of the stages, displacement is the net change.
- **Constant and variable acceleration:** suvat for the first, calculus for the second.
- **Time up and range:** vertical motion sets the time, horizontal motion sets the range.

## Quick self-test

1. A stone is dropped from rest and falls 20 m. Find the time taken and the speed on reaching the ground (g = 9.8).
2. A ball is thrown upwards at 14.7 m s⁻¹ from the ground. Find the greatest height and the total time in the air.
3. A particle is projected from level ground at 10 m s⁻¹ with sin α = 0.6. Find the time of flight and the range.
4. A particle on a line has x = t² − 4t. Find v and when the particle is at rest.
5. For the same particle, find the distance travelled from t = 0 to t = 3.
6. A particle has v = 12e^(−t/2). Find its acceleration when t = 2.
7. A particle has acceleration a = 6t − 2 and v = 1 at t = 0. Find v when t = 2.
8. Position is r = 2t i + t² j. Find the velocity and the speed when t = 3.
9. Position is r = 3t³ i − t j. Find the acceleration when t = 1.
10. A particle has v = 4i + 2t j and is at i when t = 0. Find r.
11. What is the speed of a projectile at its highest point if it was projected with horizontal component 8 m s⁻¹ and vertical component 6 m s⁻¹?

### Answers

1. 20 = 4.9t², so t = 2.02 s (3 s.f.). Speed = 9.8 × 2.02 = 19.8 m s⁻¹ (3 s.f.).
2. Height = 14.7² / 19.6 = 11.0 m (3 s.f.). Time = 2 × 14.7 / 9.8 = 3 s.
3. Components 8 and 6. T = 12 / 9.8 = 1.22 s (3 s.f.). Range = 8 × 12/9.8 = 9.80 m (3 s.f.).
4. v = 2t − 4. At rest when t = 2.
5. x(0) = 0, x(2) = −4, x(3) = −3. Distance = 4 + 1 = 5 m.
6. a = −6e^(−t/2), so a(2) = −6e⁻¹ = −2.21 m s⁻² (3 s.f.).
7. v = 3t² − 2t + 1, so v(2) = 12 − 4 + 1 = 9.
8. v = 2i + 2t j. At t = 3, v = 2i + 6j and speed = √40 = 6.32 (3 s.f.).
9. v = 9t² i − j, a = 18t i. At t = 1, a = 18i.
10. r = (4t + 1)i + t² j.
11. The vertical component is zero at the top, so the speed is 8 m s⁻¹.

## Where marks are usually lost

- Taking g as positive when up is positive, so the signs clash.
- Giving one root of a quadratic in t when the question needs the difference or the later root.
- Finding the time of flight for the wrong landing level, such as a cliff top instead of the ground.
- Stating a landing angle without "below the horizontal".
- Using suvat when acceleration changes with time.
- Missing the constant of integration, or finding it from the wrong condition.
- Writing distance when the work only gives displacement.
- Rounding mid-way: keep exact or full values until the final line.
- Giving a vector answer without i and j, or giving a scalar when the question asks for a vector.

## Official syllabus

*Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics*, Specification, Issue 3, April 2019, published by Pearson Education Limited. Unit M2 section 1, topics 1.1 to 1.4.
