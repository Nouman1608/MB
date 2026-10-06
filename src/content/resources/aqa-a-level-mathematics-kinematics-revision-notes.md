---
title: "AQA A-Level Mathematics: Q: Kinematics (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Kinematics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Q: Kinematics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "q-kinematics-aqa-alevel-maths"
description: "Revision notes for AQA A-level Maths (7357) kinematics: key terms, graph rules, suvat, calculus and projectile methods, plus a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, use the [Kinematics study guide](/resources/aqa-a-level-mathematics-kinematics/). These notes are for quick recall in the final weeks.

They cover **Section Q: Kinematics (Q1 to Q5)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification assesses Section Q on **Paper 2**. A calculator is required in every 7357 paper.

Practise with the [Kinematics practice questions](/resources/aqa-a-level-mathematics-kinematics-practice/). Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Printable checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/). Find gaps fast with the [free 10-minute diagnostics](/diagnostics/).

## Q1: Key terms

| Term | Meaning | Scalar or vector |
|---|---|---|
| Position | Where the particle is, measured from a fixed origin O | Vector |
| Displacement | Change in position | Vector |
| Distance travelled | Total length of path covered | Scalar |
| Velocity | Rate of change of displacement | Vector |
| Speed | Magnitude of velocity | Scalar |
| Acceleration | Rate of change of velocity | Vector |

- Average velocity = total displacement ÷ time.
- Average speed = total distance ÷ time.
- In 1D a vector is shown by its sign. Choose the positive direction and write it down.

Notation from Appendix A: s, u, v, a, t, g; bold **r**, **s**, **v**, **a** for vectors. Units: m, s, m s⁻¹, m s⁻² (Section P).

## Q2: Graph rules

| Graph | Gradient | Area under graph |
|---|---|---|
| Displacement–time | Velocity | (not used) |
| Velocity–time | Acceleration | Displacement (below axis = negative) |

- Horizontal s–t line: at rest. Horizontal v–t line: constant velocity.
- Distance travelled from a v–t graph: add the sizes of all areas, above and below the axis.
- A v–t graph crossing the t-axis means the particle changes direction there.

**Reminder.** A v–t graph is a straight line from (0, 0) to (4, 10), then horizontal to (9, 10). Displacement = ½(4)(10) + 5(10) = 20 + 50 = 70 m. Acceleration in the first 4 s = 10/4 = 2.5 m s⁻².

## Q3: Constant acceleration

| Formula | Missing quantity |
|---|---|
| v = u + at | s |
| s = ½(u + v)t | a |
| s = ut + ½at² | v |
| s = vt − ½at² | u |
| v² = u² + 2as | t |

**Method in steps**
1. Draw a diagram and mark the positive direction.
2. List s, u, v, a, t with signs.
3. Pick the formula that leaves out the quantity you neither know nor want.
4. Solve. If a quadratic in t gives two roots, decide which one fits the context.

**Deriving them (Q3 says derive).** Constant a gives a straight v–t line: gradient a = (v − u)/t gives v = u + at. Area of the trapezium gives s = ½(u + v)t. Substitute for v to get s = ut + ½at², for u to get s = vt − ½at², and for t to get v² = u² + 2as.

**Vertical motion under gravity.** Take upwards as positive, so a = −g. A ball thrown upwards at 9.8 m s⁻¹ (g = 9.8 m s⁻²) reaches the top when v = 0: t = 9.8/9.8 = 1 s, and height = 9.8²/(2 × 9.8) = 4.9 m. It is back at the start after 2 s by symmetry.

**Two stages or two particles**
1. Use a separate suvat list for each stage or each particle.
2. Link them: the final v of stage 1 is the u of stage 2; two particles that meet have the same position at the same time.
3. If one particle starts later, write its time as (t − delay) and check the answer is after it starts.

**Two dimensions.** v = u + at and r = r₀ + ut + ½at² with vectors. Treat i and j separately.

**Reminder.** u = (2i + 5j) m s⁻¹, a = (i − 3j) m s⁻², starting at O. After 2 s: v = (2 + 2)i + (5 − 6)j = (4i − j) m s⁻¹, and r = (4 + 2)i + (10 − 6)j = (6i + 4j) m.

## Q4: Calculus

```
differentiate:   r  →  v  →  a
integrate:       a  →  v  →  r   (+ constant each time)
```

| Relationship | Use it to |
|---|---|
| v = dr/dt | find velocity from position |
| a = dv/dt = d²r/dt² | find acceleration |
| v = ∫ a dt | find velocity from acceleration |
| r = ∫ v dt | find position from velocity |

Appendix B lists these as formulae you must use without them being provided.

**Method for distance travelled with variable velocity**
1. Solve v = 0 to find when the particle changes direction.
2. Find the position at the start, at each time of rest inside the interval, and at the end.
3. Add the sizes of the changes.

**Reminder.** v = 4t − t² from O. At rest at t = 0 and t = 4. x = 2t² − t³/3, so x(4) = 32 − 64/3 = 32/3 m.

**Vectors.** Differentiate or integrate each component. Use the initial **vector** to find the constant vector.

## Q5: Projectiles

Model: particle, no air resistance, g constant, acceleration −g**j** (j upwards).

```
horizontal:  constant velocity          x = (U cos α)t
vertical:    suvat with a = −g          y = (U sin α)t − ½gt²
vector form: r = r₀ + ut − ½gt² j      v = u − gt j
```

| You want | Condition |
|---|---|
| Greatest height | vertical velocity = 0 |
| Time to land at launch level | vertical displacement = 0, t ≠ 0 |
| Time to land below launch | vertical displacement = −(height) |
| Range | horizontal velocity × time of flight |
| Velocity at an instant | both components, then speed and angle |

**Reminder.** A particle is projected horizontally at 12 m s⁻¹ from a point 4.9 m above level ground (g = 9.8 m s⁻²). Vertically: 4.9 = ½(9.8)t², so t = 1 s. It lands 12 × 1 = 12 m from the point directly below its start.

## Modelling assumptions

| Assumption | What it lets you do | What it ignores |
|---|---|---|
| Object is a particle | Treat it as a point | Size, shape and spin |
| No air resistance | Keep horizontal velocity constant | Drag, which grows with speed |
| g is constant | Use a = −g j throughout | Small changes of g with location and height |
| Acceleration constant | Use suvat | Real changes in driving or braking force |

If asked to improve a model, name one assumption and say how relaxing it changes the answer (for example, air resistance would reduce the range).

Kinematics feeds straight into the [Forces and Newton's laws revision notes](/resources/aqa-a-level-mathematics-forces-and-newtons-laws-revision-notes/) (Section R) and the [Moments revision notes](/resources/aqa-a-level-mathematics-moments-revision-notes/) (Section S).

## Must-know distinctions

| This | is not | this |
|---|---|---|
| Displacement (signed) | | Distance (total path) |
| Velocity (direction) | | Speed (size only) |
| suvat (constant a only) | | calculus (any a) |
| ∫v dt over an interval (displacement) | | distance travelled (split at v = 0) |
| "Parallel to i" (j-component 0) | | "at rest" (both components 0) |
| Deceleration of 3 m s⁻² | | a = +3 m s⁻² (it is a = −3 in the direction of motion) |

## Quick self-test

1. A particle moves 5 m forward then 8 m back. State its displacement and distance travelled.
2. A v–t graph rises in a straight line from (0, 0) to (3, 12). Find the distance travelled.
3. u = 3 m s⁻¹, a = 2 m s⁻², t = 5 s. Find v and s.
4. A car at 20 m s⁻¹ brakes with constant deceleration 2.5 m s⁻². Find its stopping distance.
5. A stone is dropped from rest. Take g = 9.8 m s⁻². Find its speed and the distance fallen after 2 s.
6. x = t³ − 6t² + 9t. When is the particle at rest?
7. v = 3t² + 2 and x = 0 when t = 0. Find x when t = 2.
8. r = t²i + (4t − t²)j. Find the speed at t = 1.
9. u = (3i + 4j) m s⁻¹ and a = (i − 2j) m s⁻². Find v and the speed after 2 s.
10. A particle is projected from level ground with velocity (10i + 19.6j) m s⁻¹. Take g = 9.8 m s⁻². Find the time of flight, the range and the greatest height.
11. r = (2t³ − 9t²)i + (6t − t²)j. Show that the particle is at rest when t = 3.

### Answers

1. Displacement −3 m (3 m behind the start); distance 13 m.
2. ½ × 3 × 12 = 18 m.
3. v = 3 + 10 = 13 m s⁻¹; s = 15 + 25 = 40 m.
4. 0 = 400 − 5s, so s = 80 m.
5. v = 19.6 m s⁻¹; s = ½(9.8)(4) = 19.6 m.
6. v = 3t² − 12t + 9 = 3(t − 1)(t − 3) = 0, so t = 1 s and t = 3 s.
7. x = t³ + 2t, so x(2) = 12 m.
8. v = 2t i + (4 − 2t)j; at t = 1, v = 2i + 2j, speed = √8 = 2.83 m s⁻¹.
9. v = 5i + 0j = 5i m s⁻¹; speed 5 m s⁻¹.
10. 19.6t − 4.9t² = 0 gives t = 4 s; range = 10 × 4 = 40 m; greatest height = 19.6²/(2 × 9.8) = 19.6 m.
11. v = (6t² − 18t)i + (6 − 2t)j; at t = 3, v = (54 − 54)i + (6 − 6)j = 0, so it is at rest.

## Where marks are usually lost

- Applying suvat to an acceleration that depends on t.
- Integrating v across a change of direction and calling the result the distance.
- Losing the sign of g: with upwards positive, a = −9.8 m s⁻².
- Dropping the constant of integration, or using the wrong initial condition to find it.
- Saying "parallel to j" from a zero i-component without checking the j-component is non-zero.
- Giving a speed when the question asks for a velocity, or giving a direction with no reference line.
- Rounding an intermediate time before using it for a range or a height.
- Keeping the negative root of a quadratic in t, or a root before the motion starts.
- Writing only the final number in a "show that" derivation, with no substitution shown.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.18 Q: Kinematics (Q1 to Q5), with Appendix A: mathematical notation (mechanics) and Appendix B: mathematical formulae and identities (kinematics).
