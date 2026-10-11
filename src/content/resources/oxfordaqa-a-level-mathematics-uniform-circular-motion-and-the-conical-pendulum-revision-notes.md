---
title: "OxfordAQA International AS and A-level Mathematics: Uniform circular motion and the conical pendulum (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Maths Circular Motion Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Uniform circular motion and the conical pendulum"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 214
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-uniform-circular-motion-oxfordaqa-alevel-maths"
description: "Condensed recall notes and a self-test on uniform circular motion, vector form and the conical pendulum for OxfordAQA International A-level Maths Unit M2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section M2.7 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The content belongs to International A-level (A2) Unit M2 (Mechanics) and is not examined at International AS. For full explanations, use the [study guide](/resources/oxfordaqa-a-level-mathematics-uniform-circular-motion-and-the-conical-pendulum/); to test yourself, use the [practice questions](/resources/oxfordaqa-a-level-mathematics-uniform-circular-motion-and-the-conical-pendulum-practice/).

Course hub: [/boards/oxfordaqa/a-level/mathematics/](/boards/oxfordaqa/a-level/mathematics/). Checklist: [/checklists/oxfordaqa/a-level/mathematics/](/checklists/oxfordaqa/a-level/mathematics/). Not sure where to start? Try the [free 10-minute diagnostics](/diagnostics/).

## Formulae to learn

The specification lists these among the formulae you must learn, because they are not in the formulae booklet.

| Result | Meaning |
|---|---|
| v = rω | speed from radius and angular speed |
| a = rω² | acceleration towards the centre, from ω |
| a = v²/r | acceleration towards the centre, from v |
| ω = 2π/T | angular speed from the time T for one revolution |
| ω (rad s⁻¹) = n × 2π/60 | angular speed from n rev/min |
| F = ma | resultant force towards the centre |

Units: ω in rad s⁻¹, v in m s⁻¹, a in m s⁻². Angular speed is the rate of turning in radians per second.

## Key ideas

- Speed is constant. Velocity changes direction, so there is an acceleration.
- The acceleration is towards the centre and perpendicular to the velocity.
- There is no extra "centripetal force". The resultant of the real forces (tension, friction, normal reaction, weight, gravity) points to the centre and equals ma.
- Problems involve horizontal circles, or orbits where gravity points to the centre.

## Method for a force problem

1. Draw the real forces on the particle.
2. Mark the direction to the centre of the circle.
3. Resolve towards the centre: resultant = m × a, with a = v²/r or rω².
4. Resolve vertically: forces balance if there is no vertical motion.
5. Solve and give units and the right accuracy.

## Setting up common situations

| Situation | Force towards the centre | Vertical balance |
|---|---|---|
| Particle on smooth table, string to a fixed point | Tension | R = mg |
| Object on a turntable or flat bend | Friction (at most μR) | R = mg |
| Satellite in circular orbit | Gravitational force | none (all force is towards the centre) |
| Conical pendulum | Horizontal part of tension, T sin θ | T cos θ = mg |

For limiting friction, use F = μR and note that the mass cancels with R = mg.

## Vector form

Anticlockwise, centre at the origin, radius r, angular speed ω, starting on the positive x-axis:

```
r = r cos(ωt) i + r sin(ωt) j
v = −rω sin(ωt) i + rω cos(ωt) j
a = −rω² cos(ωt) i − rω² sin(ωt) j = −ω² r
```

- |v| = rω, constant.
- v · r = 0.
- Centre at c: the acceleration is −ω²(r − c).
- For other starting points or clockwise motion, check the signs by finding v at t = 0.

**To show motion is circular:** pick the centre c, find |r − c|, and show it is a constant for every t. Use cos² + sin² = 1.

**Reminder example.** For r = (−2 + 6 sin(t/2))i + (4 + 6cos(t/2))j, the vector r − (−2i + 4j) has length 6 for all t, so the path is a circle of radius 6. Here ω = 1/2 and the speed is 6 × 1/2 = 3 m s⁻¹.

## Conical pendulum

Bob of mass m, string length L, angle θ to the vertical, radius r = L sin θ, depth below the pivot h = L cos θ.

```
T cos θ = mg
T sin θ = m r ω² = m L sin θ ω²
```

Results (divide by sin θ):

| Result | Use |
|---|---|
| T = m L ω² | tension from ω and L |
| cos θ = g/(L ω²) | angle from ω and L |
| ω² = g/h | angular speed from the depth h |
| tan θ = r ω²/g | angle from radius and ω |
| ω² > g/L | needed for the string to leave the vertical |

Period of one revolution: T_period = 2π/ω = 2π√(L cos θ/g).

**Reminder example.** L = 0.75 m and θ = 40°. Then h = 0.75 cos 40° = 0.5745 m, and the period is 2π√(0.5745/9.8) = 1.52 s (3 s.f.). Then ω = 4.13 rad s⁻¹.

## Quick conversions

| Given | Angular speed ω |
|---|---|
| 30 rev/min | π rad s⁻¹ |
| 60 rev/min | 2π rad s⁻¹ |
| 120 rev/min | 4π rad s⁻¹ |
| Period 2 s | π rad s⁻¹ |
| Period 0.5 s | 4π rad s⁻¹ |
| f revolutions per second | 2πf rad s⁻¹ |

Going back: n rev/min = ω × 60/(2π). Check that your answer is sensible. A rate of 5 rad s⁻¹ is a little under 1 revolution per second, which is about 48 rev/min.

## Orbit reminder

When the problem gives the gravitational force on a satellite as mk/r², the mass cancels:

```
m v²/r = m k/r²
v² = k/r
```

Then the period is 2πr/v. Equivalently, ω²r³ = k, so the square of the period is proportional to r³.

Reminder example: k = 3.6 × 10¹⁴ m³ s⁻² and r = 9.0 × 10⁶ m. Then v = √(3.6×10¹⁴/9.0×10⁶) = √(4.0×10⁷) = 6320 m s⁻¹ (3 s.f.), and the period is 2π × 9.0×10⁶/6325 = 8940 s (3 s.f.).

## Reminder: finding the angle from a period

If a conical pendulum has string length L and period P:

1. ω = 2π/P.
2. cos θ = g/(L ω²).
3. If the right side is greater than 1, the data are impossible, because the bob is turning too slowly to leave the vertical.

## Must-know distinctions

- **Speed v and angular speed ω.** v is in m s⁻¹, ω in rad s⁻¹. They are linked by v = rω.
- **Tension T and period T.** Use different symbols in your working, such as T for tension and P for period.
- **The circle's radius and the string length.** In a conical pendulum, r = L sin θ, not L.
- **Real forces and the resultant.** The resultant towards the centre is what equals ma.
- **Uniform circular motion and any circular path.** The formulae here need constant speed.

## Quick self-test

Take g = 9.8 m s⁻² and give 3 significant figures unless exact.

1. Convert 90 rev/min to rad s⁻¹ in terms of π.
2. A particle moves in a circle of radius 0.6 m with period 0.8 s. Find ω.
3. A point moves at 12 m s⁻¹ round a circle of radius 4 m. Find its acceleration.
4. A particle of mass 2 kg moves at constant speed on a circle of radius 1.5 m with ω = 4 rad s⁻¹. Find the resultant force.
5. Show that r = (5 + 3cos 2t)i + (1 + 3sin 2t)j describes motion on a circle, stating the centre and radius.
6. For the motion in question 5, find the speed.
7. Write down the acceleration vector when t = 0 for the motion in question 5.
8. A conical pendulum has string length 2 m and rotates at 3 rad s⁻¹. Find cos θ.
9. For the pendulum in question 8 with bob mass 0.3 kg, find the tension.
10. A bob moves in a horizontal circle 0.49 m below its pivot. Find ω.
11. State the condition on ω for a conical pendulum of length L to move in a cone.
12. A coin on a turntable stays put at 0.2 m from the axis when ω = 4 rad s⁻¹ but not at 5 rad s⁻¹. What can you say about μ?

### Answers

1. 90 × 2π/60 = **3π rad s⁻¹**
2. ω = 2π/0.8 = **7.85 rad s⁻¹**
3. a = v²/r = 144/4 = **36 m s⁻²**
4. F = m r ω² = 2 × 1.5 × 16 = **48 N**, towards the centre
5. r − (5i + j) = 3cos 2t i + 3sin 2t j, with length √(9cos² 2t + 9sin² 2t) = 3. So the centre is **(5, 1)** and the radius **3**.
6. v = −6 sin 2t i + 6cos 2t j, so the speed is **6** (units of length per unit time), which is rω = 3 × 2.
7. a = −12cos 2t i − 12sin 2t j, so at t = 0, **a = −12i**
8. cos θ = 9.8/(2 × 9) = 9.8/18 = **0.544** (θ = 57.0°)
9. T = m L ω² = 0.3 × 2 × 9 = **5.4 N**
10. ω² = g/h = 9.8/0.49 = 20, so ω = **4.47 rad s⁻¹** (exactly 2√5)
11. **ω² > g/L**, equivalently ω > √(g/L)
12. At the limit, μg = rω². So 16 × 0.2/9.8 ≤ μ < 25 × 0.2/9.8, giving **0.327 ≤ μ < 0.510** (3 s.f.)

## Where marks are usually lost

- Leaving ω in rev/min or using degrees. Work in radians per second.
- Choosing a = v²/r when only ω is known, then rounding early. Keep full values until the end.
- Forgetting that the horizontal radius of a conical pendulum is L sin θ.
- Writing T = mg for the string tension.
- Drawing a centripetal force in addition to the real forces.
- Showing that two points are equidistant from a centre and calling that a proof. The distance must be constant for all t.
- Quoting the acceleration of a vector problem without a direction or sign. In vector form the sign carries the direction.
- Omitting units, or giving a bare decimal where the question asked for an answer in terms of π.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Section M2.7 of Unit M2 (International A-level only).
