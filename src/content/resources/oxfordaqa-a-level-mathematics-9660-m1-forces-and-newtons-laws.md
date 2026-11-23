---
title: "OxfordAQA A-level Mathematics (9660): Forces and Newton's Laws"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- M1: Mechanics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-forces-and-newtons-laws-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 M1.3 in depth: equilibrium, finding friction coefficients, lifts in stages, three-body trains, slack ropes and two-stage pulley problems."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **M1.3 Forces and Newton's Laws** of OxfordAQA International AS and A-level Mathematics (9660), specification version 5.2, in the Mechanics strand of International AS Unit PSM1. The specification restricts dynamics to a straight line, horizontal or vertical, including resistive forces, and states that resolution of forces will not be required. Every force in an M1.3 problem is therefore horizontal or vertical. Take g = 9.8 m s⁻² and give answers to 3 significant figures unless they are exact.

The [study guide to forces, Newton's laws and momentum](/resources/oxfordaqa-a-level-mathematics-forces-newtons-laws-connected-particles-momentum-and/) sets out the force types and the standard lift, table-and-pulley and car-and-trailer examples. This page builds on it with problem types that need more than one equation or more than one stage. Condense it with the [M1.3 revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m1-forces-and-newtons-laws-revision-notes/) and test it with the [M1.3 practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-forces-and-newtons-laws-practice/). The motion results used here come from the [M1.1 study guide](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-constant-acceleration/).

## What M1.3 lists

| Content | Additional information |
|---|---|
| Force of gravity | W = mg, with g taken as 9.8 m s⁻² |
| Tensions in strings and rods, thrusts in rods | Including dynamic friction, F = μR |
| Normal reactions | |
| Resistive forces | |
| Newton's three laws of motion | Restricted to dynamics in a straight line on the horizontal or motion vertically, including resistive forces |
| Connected particle problems | Two particles joined by a light inextensible string over a smooth fixed peg or smooth light pulley, constant forces; other connected problems such as a car and trailer; no resolution of forces |

## A method that works every time

1. Draw a separate force diagram for each body, with every force as an arrow and its size or symbol.
2. Mark the direction of acceleration with a double-headed arrow.
3. For each body, write: resultant force in the direction of acceleration = mass × acceleration.
4. Where nothing moves in a direction (vertically for a block on a floor), the forces in that direction balance. This gives R.
5. Solve the equations, then check with an equation you did not use.

## Newton's first law: zero acceleration means balanced forces

Constant velocity, including rest, means the resultant force is zero. This often gives the quickest answer.

**Worked example 1.** A parachutist and parachute have a total mass of 85 kg and fall at a constant speed. Find the air resistance.

```
Constant speed, so a = 0 and forces balance: D = 85 × 9.8 = 833 N
```

The same reasoning applies to a car at a steady speed on a level road: driving force equals total resistance.

## Finding a coefficient of friction from motion

**Worked example 2.** An ice-hockey puck of mass 0.17 kg is struck across horizontal ice at 6 m s⁻¹ and slides 12 m before stopping. Find the coefficient of friction.

```
Motion:  0 = 6² + 2a × 12   ->   a = −1.5 m s⁻²
Vertical:  R = 0.17 × 9.8 = 1.666 N
Horizontal: −F = 0.17 × (−1.5)   ->   F = 0.255 N
μ = F / R = 0.255 / 1.666 = 0.153
```

The mass cancels: μg = 1.5, so μ = 1.5 ÷ 9.8. This holds only when friction is the sole horizontal force and the normal reaction equals the weight.

## When the normal reaction is not mg

Any extra vertical force changes R, and therefore the friction.

**Worked example 3.** A crate of mass 50 kg rests on a rough horizontal floor with μ = 0.4. A worker pulls it with a horizontal rope with tension 260 N while a crane cable pulls vertically upwards on it with a force of 150 N, not enough to lift it. Find the acceleration.

```
Vertical (no vertical motion):  R + 150 = 50 × 9.8   ->   R = 340 N
Friction:   F = 0.4 × 340 = 136 N
Horizontal: 260 − 136 = 50a   ->   a = 2.48 m s⁻²
```

Without the crane, R = 490 N, F = 196 N and a = 1.28 m s⁻². Using μmg automatically would give the wrong answer.

## Lifts in several stages

**Worked example 4.** A parcel of mass 4 kg hangs from a spring balance fixed to the ceiling of a lift. The lift starts from rest, accelerates upwards at 0.6 m s⁻² for 3 s, moves at constant speed for 8 s, then decelerates at 0.9 m s⁻² to rest. Find the balance reading in each stage and the total distance travelled.

```
Balance reading = tension T in the balance. Up positive.
Stage 1: T − 4g = 4 × 0.6   ->   T = 4(9.8 + 0.6) = 41.6 N
Stage 2: a = 0               ->   T = 4 × 9.8 = 39.2 N
Stage 3: T − 4g = 4 × (−0.9) ->   T = 4(9.8 − 0.9) = 35.6 N

Speed after stage 1 = 0.6 × 3 = 1.8 m s⁻¹; stage 3 lasts 1.8 / 0.9 = 2 s
Distance = ½ × 1.8 × 3 + 1.8 × 8 + ½ × 1.8 × 2 = 2.7 + 14.4 + 1.8 = 18.9 m
```

Decelerating while moving up gives the same reading as accelerating downwards: what matters is the direction of the acceleration, not of the velocity.

## Three bodies in a line

**Worked example 5.** An engine of mass 40 000 kg pulls two trucks, each of mass 15 000 kg, along a straight level track. The couplings are light and horizontal. The driving force is 49 000 N, and resistances are 4000 N on the engine and 1500 N on each truck. Find the acceleration and the tension in each coupling.

```
Whole train (couplings are internal):  49 000 − 4000 − 1500 − 1500 = 70 000a
                                        a = 42 000 / 70 000 = 0.6 m s⁻²
Rear truck:   T₂ − 1500 = 15 000 × 0.6         ->  T₂ = 10 500 N
Front truck:  T₁ − T₂ − 1500 = 15 000 × 0.6    ->  T₁ = 21 000 N
Check, engine: 49 000 − 4000 − 21 000 = 24 000 = 40 000 × 0.6 ✓
```

Start from the back: the rear truck has only one unknown tension. The coupling nearer the engine carries more tension because it pulls more mass.

## Ropes cannot push

A tow bar or rod can be in tension or thrust; a rope or string can only pull. This changes the answer when the leading vehicle brakes.

**Worked example 6.** A car of mass 1200 kg tows a trailer of mass 400 kg with a light horizontal rope. The car brakes with a force of 3000 N. Resistances are 300 N on the car and 200 N on the trailer. Decide whether the rope stays taut.

```
If they moved together:  deceleration = (3000 + 300 + 200) / 1600 = 2.1875 m s⁻²
Trailer would need a backward force of 400 × 2.1875 = 875 N
Its own resistance gives only 200 N, so the link would have to push with 675 N.
A rope cannot push, so it goes slack.
Then: car deceleration = 3300 / 1200 = 2.75 m s⁻²,  trailer = 200 / 400 = 0.5 m s⁻²
```

The trailer slows far less than the car, so it closes the gap: this is why trailers that must brake with the car are attached by a rigid bar. In a question, testing the sign of the tension you calculate is the way to decide.

## A pulley problem with a second stage

**Worked example 7.** Block A of mass 3 kg lies on a smooth horizontal table, 1.5 m from a smooth pulley at the edge. A light inextensible string from A passes over the pulley to block B of mass 2 kg, which hangs 0.5 m above the floor. The system is released from rest. Find the tension, and the time taken for A to reach the pulley.

```
A (towards pulley): T = 3a
B (downwards):      2g − T = 2a
Add:  2g = 5a  ->  a = 3.92 m s⁻²,  T = 3 × 3.92 = 11.76 N

B falls 0.5 m:  v² = 2 × 3.92 × 0.5 = 3.92  ->  v = 1.980 m s⁻¹
Time for this stage:  t₁ = 1.980 / 3.92 = 0.505 s
B lands, the string goes slack. The table is smooth, so A has no
horizontal force: by Newton's first law it moves at a constant 1.980 m s⁻¹.
Remaining distance 1.5 − 0.5 = 1.0 m:  t₂ = 1.0 / 1.980 = 0.505 s
Total time = 1.01 s
```

On a rough table, the second stage would be a deceleration of μg instead of constant speed.

## Newton's third law in connected problems

The forces between connected bodies are equal and opposite, so they cancel when you treat the whole system as one body. That is why the whole-system equation gives the acceleration without the tension. But tension and thrust still act on each body separately, and you need an equation for one body to find them. A string over a smooth light pulley has the same tension on both sides, and the two particles have accelerations of the same magnitude.

## Common mistakes

- Using R = mg when another vertical force acts, or in a lift.
- Using the whole-system mass in an equation for one body.
- Forgetting the internal tension on the truck between two couplings.
- Assuming a rope can be in thrust.
- Keeping the same acceleration after a hanging particle lands and the string is slack.
- Taking a balance reading in a decelerating lift as larger than the weight when the lift is moving up.
- Resolving forces at an angle: M1.3 problems do not need this.

## Exam technique

- **Find the tension** usually needs a single-body equation after a whole-system equation.
- **Show that the acceleration is** means writing each equation in full before combining them.
- **State a modelling assumption** might be: the string is light (same tension throughout), inextensible (same acceleration), the pulley is smooth (no friction at the pulley), the bodies are particles.
- Check each answer with an equation you did not use.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, version 5.2, published by OxfordAQA: Unit PSM1, Mechanics, section M1.3.
