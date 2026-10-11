---
title: "OxfordAQA International AS and A-level Mathematics: Mathematical modelling and kinematics with vectors and calculus (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Maths Modelling Kinematics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Mathematical modelling and kinematics with vectors and calculus"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 208
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-mathematical-modelling-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-kinematics-oxfordaqa-alevel-maths"
description: "Condensed revision notes on modelling assumptions and vector kinematics with calculus for OxfordAQA International A-level Maths Unit M2, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections M2.1 (mathematical modelling) and M2.2 (kinematics) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level Unit M2 (Mechanics); it is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-mathematical-modelling-and-kinematics-with-vectors-and/) first.

Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-mathematical-modelling-and-kinematics-with-vectors-and-practice/). Course links: [hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). Related revision: [straight-line kinematics](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-revision-notes/).

## M2.1 Modelling: the cycle and the vocabulary

1. Simplify the situation and state assumptions.
2. Write the mathematics and solve it.
3. Interpret the answer in the context of the question.
4. Compare with evidence and decide whether the model is valid.
5. Refine the assumptions if it is not.

| Word in the question | Say this |
|---|---|
| Particle | Size and rotation ignored; all of the object moves alike |
| Large body as a point mass | Acceptable when its size is small compared with the distances involved |
| Light | Negligible mass, so the tension is the same all along a string |
| Inextensible string | Fixed length, so connected objects share speed and acceleration along the string while it is taut |
| Smooth surface | Zero friction; contact force is perpendicular to the surface |
| Motion under gravity | Only gravity acts, with constant g; air resistance ignored |

**Commenting on validity.** Name the assumption, say which way the prediction shifts, and say how to improve the model. Example: ignoring air resistance makes a predicted fall time too short and a predicted impact speed too large.

## M2.2 Key relationships

| Quantity | Differentiate | Integrate |
|---|---|---|
| Position r | gives v = dr/dt | from v: r = ∫ v dt + constant vector |
| Velocity v | gives a = dv/dt | from a: v = ∫ a dt + constant vector |
| Acceleration a | second derivative of r | start here when a is given |

Form: r = f(t)i + g(t)j + h(t)k gives v = f′(t)i + g′(t)j + h′(t)k and a = f″(t)i + g″(t)j + h″(t)k. Column vectors work the same way, and you may use either notation.

| Result | Formula |
|---|---|
| Speed | \|v\| = √(vx² + vy² + vz²) |
| Magnitude of acceleration | \|a\| = √(ax² + ay² + az²) |
| Distance from O | \|r\| |
| Direction of motion | angle of v, for example tan θ = vy/vx for two dimensions |

## Method boxes

**Differentiating to find v and a**
1. Differentiate each component once for v, twice for a.
2. Substitute the time asked for.
3. For speed, take the magnitude of v.

**Integrating with initial conditions**
1. Integrate each component and add an unknown constant to each.
2. Use the given value at a known time to find each constant.
3. Check by differentiating one component.

**At rest**
1. Set every component of v to zero.
2. Find the t for each component.
3. Only a t common to all components counts.

**Parallel to i (or j)**
1. Set the other component of v to zero.
2. Solve for t and reject any t outside the stated range.

**Least or greatest speed**
1. Write |v|² as a function of t.
2. Differentiate or complete the square.
3. State the speed (take the square root) and the time.

**Meeting or collision**
1. Equate the i components and solve; equate the j components and solve.
2. Keep only a t that appears in both lists.
3. Substitute to give the position.

**Small worked reminder.** Given a = 6t i − 2j and v = 4i when t = 0:

```
v = (3t² + 4)i − 2t j
At t = 1: v = 7i − 2j, speed = √53 (about 7.28)
```

Here v at t = 0 is 4i, so the constant for the j component is zero, which you must state rather than assume.

**Second reminder (three dimensions).** Given a = (4; −2; 6), v = (3; 0; −2) and r = (1; 3; 0) when t = 0:

```
v = (4t + 3; −2t; 6t − 2)
r = (2t² + 3t + 1; 3 − t²; 3t² − 2t)
t = 2:  v = (11; −4; 10),  r = (15; −1; 8)
```

Each constant of integration comes from its own component of the initial condition. The check d/dt of 3t² − 2t = 6t − 2 matches the third component of v.

**Third reminder (trigonometric functions).** The derivative rules from Unit P2 apply to each component. For r = 2cos(3t)i + 4sin(3t)j:

```
v = −6sin(3t)i + 12cos(3t)j
a = −18cos(3t)i − 36sin(3t)j
t = π/6:  r = 4j,  v = −6i,  a = −36j
```

The chain rule brings out a factor 3 at each differentiation, so a has a factor 9 compared with r. Work in radians whenever t is in a trigonometric function of this kind.

**Direction of motion.** For v = 3i − 4j, the angle below the direction of i is tan⁻¹(4/3) = 53.1° (1 d.p.). Say which axis the angle is measured from, and draw a small sketch of v before choosing the angle.

## Must-know distinctions

- Speed is a scalar; velocity is a vector.
- Position vectors start at O. Displacement is the change in position over a time interval. Distance travelled is the length of path covered.
- Distance from O is |r|; distance travelled is the length of the path.
- Constant acceleration formulas are for constant a only.
- "Parallel to i" needs one component zero; "at rest" needs all components zero.
- Same path does not mean same place at the same time. Collisions need equal t.

## How to write a modelling comment

1. Name the assumption in the words of the specification, for example "the stone is a particle" or "the surface is smooth".
2. Say what it removes from the real situation: air resistance, friction, size, mass of the string.
3. Say how the answer would change: a predicted time too short, a predicted speed too large, a tension too uniform.
4. Suggest one improvement, such as adding a resistive force.

A comment that only says "the model is not realistic" earns little, because it names nothing.

## Quick self-test

1. State what treating a string as light tells you about its tension.
2. r = (t² − t)i + t²j. Find v, a and the speed when t = 2.
3. a = (6t − 2)i and v = 4i when t = 0. Find v when t = 1.
4. v = (t − 2)i + (t² − 4)j for t ≥ 0. When, if ever, is the particle at rest?
5. Repeat question 4 for v = (t − 3)i + (t² − 4)j.
6. r = (t²; 3t; 2t³). Find the velocity and acceleration when t = 1, and the speed.
7. v = (2t; 3t²) and r = (1; 2) when t = 0. Find r when t = 2.
8. v = (t − 2)i + 3j. Find the least speed.
9. A has position (t + 1)i + t²j and B has position (3t − 1)i + 2tj. Do they collide?
10. A 12 m lorry makes a 300 km trip. Can it be a particle? Can it be a particle when reversing into a 14 m bay?

### Answers

1. The tension is the same throughout the string.
2. v = (2t − 1)i + 2t j and a = 2i + 2j; at t = 2, v = 3i + 4j, so the speed is **5** (a = 2i + 2j).
3. v = (3t² − 2t + 4)i, so at t = 1, **v = 5i**.
4. i component zero at t = 2; j component zero at t = 2 (and −2, rejected). So **at rest at t = 2**.
5. i component zero at t = 3; j component zero at t = 2. No common value: **never at rest**.
6. v = (2t; 3; 6t²) and a = (2; 0; 12t). At t = 1: **v = (2; 3; 6)**, **a = (2; 0; 12)**, speed = √(4 + 9 + 36) = **7**.
7. r = (t² + 1; t³ + 2), so at t = 2, **r = (5; 10)**.
8. |v|² = (t − 2)² + 9, least when t = 2, so the **least speed is 3**.
9. i: t + 1 = 3t − 1 gives t = 1. j: t² = 2t gives t = 0 or 2. No common value, so **they do not collide**; at t = 1 they are at 2i + j and 2i + 2j.
10. Yes for the trip, since 12 m is tiny against 300 km. No when reversing, since the size matters against 14 m.

## Where marks are usually lost

- Using constant acceleration formulas when a depends on t.
- Omitting the vector constant of integration, or writing one number for the whole vector.
- Not using the initial conditions to find each constant separately.
- Stating "at rest" when only one component of v is zero.
- Accepting two different times for a collision.
- Mixing up |r| (distance from O) with the distance travelled.
- Giving a speed as a vector or leaving it as |v|² when the speed is asked.
- Calling a model unrealistic while naming neither the assumption nor its effect on the answer.
- Rounding too early: keep exact surds until the final line.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Sections M2.1 and M2.2 of Unit M2 (International A-level only).
