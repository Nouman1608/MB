---
title: "OCR A Level Mathematics A: Quantities, units, and kinematics with constant acceleration (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Units and Kinematics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Quantities, units, and kinematics with constant acceleration"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 131
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "quantities-and-units-in-mechanics-ocr-alevel-maths"
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "kinematics-ocr-alevel-maths"
description: "Condensed revision notes on SI units, kinematics language, motion graphs and constant acceleration formulae for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense quantities, units and kinematics with constant acceleration for OCR A Level Mathematics A (H240), content references 3.01a to 3.01c and 3.02a to 3.02e, from the OCR specification, Version 3.1 (August 2026). Everything is Stage 1 (common to AS and A Level) except the unit for moment (3.01c) and vector motion in two dimensions (3.02e), which are A Level only. For full explanations and derivations, read the [study guide](/resources/ocr-a-level-mathematics-quantities-units-and-kinematics-with-constant/). When you are ready to test yourself, use the [practice questions](/resources/ocr-a-level-mathematics-quantities-units-and-kinematics-with-constant-practice/), the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Units (3.01a to 3.01c)

| Quantity | Unit | Note |
|---|---|---|
| Length | metre, m | base quantity |
| Time | second, s | base quantity |
| Mass | kilogram, kg | base quantity |
| Velocity | m s⁻¹ | length ÷ time |
| Acceleration | m s⁻² | velocity ÷ time |
| Force | newton, N | kg m s⁻² |
| Weight | N | a force |
| Moment (A Level only) | N m | force × perpendicular distance |

The three base quantities are mutually independent. Add the correct unit to any quantity you are given.

**Conversions to SI**

| From | To | Do this |
|---|---|---|
| km h⁻¹ | m s⁻¹ | divide by 3.6 |
| m s⁻¹ | km h⁻¹ | multiply by 3.6 |
| g | kg | divide by 1000 |
| cm | m | divide by 100 |
| minutes | s | multiply by 60 |

Convert first, then substitute.

**Checking units.** A formula is wrong if the units on its two sides differ. In s = ut + ½at², the terms are m s⁻¹ × s = m and m s⁻² × s² = m, so every term is a length. Writing s = u + at² fails, because u is a velocity but at² is a length. Adding terms with different units is the usual sign of a slip.

**Small worked reminder.** A runner covers 450 m in 3 minutes. Convert 3 minutes to 180 s, then average speed = 450 ÷ 180 = **2.5 m s⁻¹**.

## The language of kinematics (3.02a)

| Vector | Scalar |
|---|---|
| position | distance travelled |
| displacement | speed |
| velocity | |
| acceleration | |

- Displacement is change in position. Distance travelled is the length of the path.
- Speed is the magnitude of velocity. It cannot be negative.
- Average speed = distance travelled ÷ time. Average velocity = displacement ÷ time.
- In one dimension, choose a positive direction. Signs carry the direction.

**Must-know distinctions**

| Pair | Difference |
|---|---|
| Displacement and distance | displacement can be zero or negative; distance cannot |
| Velocity and speed | velocity has a direction; speed does not |
| Deceleration and negative acceleration | slowing down gives a negative a only if motion is in the positive direction |

## Graphs (3.02b and 3.02c)

| Graph | Gradient | Area |
|---|---|---|
| displacement-time | velocity | none needed |
| velocity-time | acceleration | displacement |

- Horizontal on displacement-time: at rest.
- Horizontal on velocity-time: constant velocity.
- Straight slope on velocity-time: constant acceleration.
- Area below the axis is negative displacement. Add absolute values for distance.

**Method in steps for a velocity-time graph**

1. Mark every point where the line changes slope.
2. Find any times where v = 0, which are changes of direction.
3. Split the area into rectangles, triangles and trapezia.
4. Attach signs for displacement. Ignore signs for distance.

**Small worked reminder.** A car's speed rises uniformly from 0 to 15 m s⁻¹ in 10 s, stays at 15 m s⁻¹ for 20 s, then falls uniformly to rest in 5 s.

```
accelerations: 15/10 = 1.5, then 0, then -15/5 = -3 (m/s²)
areas: 0.5 × 10 × 15 = 75
       20 × 15 = 300
       0.5 × 5 × 15 = 37.5
total distance = 412.5 m
```

The accelerations are **1.5, 0 and −3 m s⁻²** and the distance is **412.5 m**. The car never reverses, so distance and displacement agree.

## Constant acceleration (3.02d)

Use only when acceleration is constant and motion is in a straight line.

| Formula | No |
|---|---|
| v = u + at | s |
| s = ut + ½at² | v |
| s = ½(u + v)t | a |
| v² = u² + 2as | t |
| s = vt − ½at² | u |

**Method in steps**

1. Draw a sketch and choose the positive direction.
2. List s, u, v, a and t. Mark what is given and what is wanted. Use "rest" to fix u = 0 or v = 0.
3. Pick the formula that leaves out the variable you neither know nor want.
4. Substitute with signs, solve, and give a unit.

**Choosing a formula from the wording**

| Wording | What it tells you |
|---|---|
| starts from rest, or is released | u = 0 |
| comes to rest, or stops | v = 0 |
| constant speed | a = 0 |
| slows down while moving in the positive direction | a < 0 |
| "when it is back at the start" | s = 0 |
| "after 5 s" | t = 5 |

Once you have three known values and one wanted value, the formula table above picks itself. If two unknowns appear, find one with a formula that leaves out the other, then use a second formula.

**Derivations the specification allows**

| Route | Outline |
|---|---|
| Graph | gradient of the line gives a = (v − u)/t; trapezium area gives s = ½(u + v)t |
| Substitution | put v = u + at into s = ½(u + v)t to get s = ut + ½at² |
| Integration | v = ∫a dt = at + c with c = u, then s = ∫v dt = ut + ½at² |

For v² = u² + 2as, eliminate t using t = (v − u)/a in s = ½(u + v)t.

**Small worked reminder.** A train moving at 12 m s⁻¹ accelerates at 0.5 m s⁻² for 16 s.

```
v = 12 + 0.5 × 16 = 20
s = 12 × 16 + 0.5 × 0.5 × 256 = 192 + 64 = 256
check: s = 0.5 × (12 + 20) × 16 = 256
```

It reaches **20 m s⁻¹** and covers **256 m**. A second formula gives a quick check.

**Quadratic in t.** When s = ut + ½at² is solved for t, two positive roots mean the object passes the point twice. The mean of the two roots is the time at which v = 0, where the motion reverses.

## Vectors in two dimensions (3.02e, A Level only)

The same four formulae without v² = u² + 2as:

```
v = u + at
s = ut + ½at²
s = ½(u + v)t
s = vt - ½at²
```

- Questions may use column vectors or i, j notation.
- The dot-product form v · v = u · u + 2a · s is excluded from the specification.
- Work with i and j components separately, or with whole vectors.
- Speed = magnitude of v. Position = initial position + displacement.
- Moving parallel to the x-axis means the j-component of v is zero.
- Moving parallel to the y-axis means the i-component of v is zero.

**Small worked reminder.** u = (1, 4) and a = (−2, 0.5), t = 6.

```
v = (1, 4) + 6(-2, 0.5) = (-11, 7)
s = 6(1, 4) + 18(-2, 0.5) = (6, 24) + (-36, 9) = (-30, 33)
```

The velocity is **(−11, 7)** and the displacement is **(−30, 33)**.

**Small worked reminder: when does it move parallel to an axis?** u = (3, −2) and a = (−1, 1), starting at position (0, 4).

```
v = (3 - t, -2 + t)
parallel to x-axis: -2 + t = 0, so t = 2, where v = (1, 0)
position at t = 2: (0, 4) + 2(3, -2) + 2(-1, 1) = (4, 2)
speed at t = 2: 1 m/s
```

At **t = 2** the particle is at **(4, 2)** with speed **1 m s⁻¹**.

## Quick self-test

1. Write the newton in terms of kg, m and s.
2. Convert 90 km h⁻¹ to m s⁻¹.
3. Express a mass of 250 g in kilograms.
4. A particle moves 8 m in the positive direction, then 11 m in the negative direction. Find the displacement and the distance travelled.
5. A velocity-time graph is a straight line from (0, 3) to (4, 15). Find the acceleration.
6. A car starts from rest and accelerates at 2.5 m s⁻² for 6 s. Find its final speed and distance travelled.
7. A cyclist moving at 12 m s⁻¹ brakes uniformly to rest over 36 m. Find the acceleration and the braking time.
8. A particle's velocity increases uniformly from 4 to 10 m s⁻¹ in 5 s. Find the distance covered.
9. A particle has u = (1, 2) m s⁻¹ and a = (2, −1) m s⁻². Find its velocity and displacement after 3 s.
10. Find the speed of a particle with velocity (−6, 8) m s⁻¹.
11. Which constant acceleration formula does not contain u?
12. A force of 20 N acts at right angles to a rod, 0.15 m from the pivot. Give the moment with its unit (A Level only).

### Answers

1. kg m s⁻².
2. **25 m s⁻¹**.
3. **0.25 kg**.
4. Displacement **−3 m**, distance **19 m**.
5. (15 − 3)/4 = **3 m s⁻²**.
6. v = 2.5 × 6 = **15 m s⁻¹**; s = ½ × 2.5 × 36 = **45 m**.
7. 0 = 144 + 72a gives a = **−2 m s⁻²**; t = 12/2 = **6 s**.
8. s = ½(4 + 10) × 5 = **35 m**.
9. v = **(7, −1) m s⁻¹**; s = (3 + 9, 6 − 4.5) = **(12, 1.5) m**.
10. √(36 + 64) = **10 m s⁻¹**.
11. s = vt − ½at².
12. 20 × 0.15 = **3 N m**.

## Where marks are usually lost

- Using a constant acceleration formula when acceleration varies.
- Not converting km h⁻¹ or minutes to SI before substituting.
- Giving a weight in kg or a mass in N.
- Treating total area under a velocity-time graph as distance when part of it is below the axis.
- Losing the sign of a negative acceleration or velocity.
- Giving one root when a quadratic in t gives two valid times.
- Quoting a speed as a vector, or a velocity without its direction.
- Leaving out units on the final answer.
- Not showing the formula and substitution when a question says "show that".

## Official syllabus

These notes follow the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR.
