---
title: "OxfordAQA International AS and A-level Mathematics: Work, energy and power (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Work and Energy Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Work, energy and power"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 213
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-work-and-energy-oxfordaqa-alevel-maths"
description: "Revision notes on work, energy, the work-energy principle and power for OxfordAQA International A-level Mathematics 9660 Unit M2, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes cover section M2.6 (Work and energy) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification states that this content belongs to International A-level (A2) Unit M2 (Mechanics) and is not examined at International AS. The [study guide](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power/) teaches each idea from scratch; these notes are the short version.

Links: [course hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), [practice questions](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power-practice/) and the [free diagnostics](/diagnostics/).

## Formulae to know

| Quantity | Formula | Unit |
|---|---|---|
| Work done by a constant force | Fd cos θ (θ is the angle between force and motion) | J |
| Gravitational potential energy | mgh | J |
| Kinetic energy | ½mv² | J |
| Work-energy principle | Total work done = final KE − initial KE | J |
| Power | P = work done / time = Fv | W |
| Weight | W = mg, with g = 9.8 m s⁻² | N |

The specification lists work = Fd cos θ, GPE = mgh and KE = ½mv² among the formulae you should learn. Learn P = Fv as well.

## Work done

- Work comes only from the part of the force that points along the motion.
- θ = 0°: work = Fd. θ = 90°: work = 0. θ = 180°: work = −Fd.
- Normal reaction, and tension in a string that stays perpendicular to the motion, do no work.
- Friction and drag do negative work (they remove mechanical energy).
- Work is a scalar: add the works of several forces with their signs.

Reminder: a 60 N force at 30° above the horizontal moving a trunk 10 m does 60 × 10 × cos 30° = 519.6 J, which is 520 J to 3 s.f.

## GPE and KE

- GPE: choose a zero level (usually the lowest point). Use the vertical height only. On a slope of length s at angle α, h = s sin α.
- KE: depends on v², has no direction, never negative.
- Doubling the speed gives four times the KE.

## Work-energy principle: method in steps

1. Pick the start and the end of the motion you are describing.
2. List all forces. Give each force its work with the correct sign.
3. Include the weight component along a slope as mg × (distance along slope) × sin α, negative when going up.
4. Write: sum of works = ½mv² − ½mu².
5. Solve and check that your answer is sensible, for example v² must come out positive.

Worked reminder: a 1000 kg van slows from 20 to 12 m s⁻¹ over 80 m on a level road with constant resistance R.

```
−R × 80 = ½(1000)(12² − 20²) = ½(1000)(−256) = −128 000
R = 1600 N
```

## Conservation of mechanical energy

If only gravity (and forces that do no work, such as a normal reaction from a smooth surface) act:

```
KE + GPE is constant:   ½mu² + mgh₁ = ½mv² + mgh₂
```

- Mass cancels, giving v² = u² + 2g(h₁ − h₂) for a particle falling a distance h₁ − h₂.
- The path and the direction of projection do not matter, only the heights.
- With friction, drag or an engine, use: initial energy + work done by driving forces − work done against resistances = final energy.

Worked reminder: a bead slides from rest down a smooth wire, dropping 1.8 m.

```
v² = 2 × 9.8 × 1.8 = 35.28       v = 5.94 m s⁻¹ (3 s.f.)
```

## Power

- Power is the rate of doing work. 1 W = 1 J s⁻¹. 1 kW = 1000 W.
- P = Fv, where F is the driving force in the direction of motion.
- Newton's second law along the motion: F − R − (mg sin α, if climbing) = ma.
- Constant speed: a = 0, so F equals the total resistance, including the weight component on a slope.
- Maximum speed occurs when a = 0 at maximum power.

Method for vehicle problems: 1) convert P to watts; 2) write F = P/v; 3) write the equation of motion along the road; 4) solve for a, v or R.

Worked reminder: a van of mass 1500 kg has power 45 kW and resistance 1000 N. Its maximum speed on level ground is 45000/1000 = 45 m s⁻¹. At 20 m s⁻¹ the driving force is 45000/20 = 2250 N, so a = (2250 − 1000)/1500 = 0.833 m s⁻² (3 s.f.).

## Must-know distinctions

| Idea | Do not confuse with |
|---|---|
| Work (J, scalar) | Force (N, vector) |
| Power (W) | Energy or work (J) |
| Height gained | Distance along a slope |
| Driving force F in P = Fv | Resultant force in F = ma |
| Conservation of energy (no resistances) | Work-energy principle (works with any forces) |

## Choosing the right method

| Situation | Best method |
|---|---|
| Smooth surface or free fall; only gravity does work | Conservation: KE + GPE constant |
| Friction, drag or a driving force acts over a known distance | Work-energy principle, or energy with work terms added |
| Distance not known, or time involved | Newton's second law with suvat |
| Engine or motor with stated power | P = Fv with F = ma along the motion |
| Speed asked at a point on a curved path | Energy only: the path shape does not matter |

## Worked reminders

**Rough slope, going up.** A 3 kg block is projected up a rough slope at 30° with speed 6 m s⁻¹. Friction is a constant 5 N. How far does it go?

```
KE = ½ × 3 × 6² = 54 J
resisting force = 3 × 9.8 × sin 30° + 5 = 14.7 + 5 = 19.7 N
54 = 19.7 d          d = 2.74 m (3 s.f.)
```

**Engine force on a hill.** A lorry of mass 5000 kg climbs at constant speed on a road with sin α = 1/25. The resistance is 1500 N and the engine power is 60 kW.

```
F = 1500 + 5000 × 9.8 / 25 = 1500 + 1960 = 3460 N
v = 60000 / 3460 = 17.3 m s⁻¹ (3 s.f.)
```

**Energy with a driving force.** A 20 kg trolley starts from rest and is pushed 10 m up a smooth slope that rises 2 m vertically, by a 120 N force parallel to the slope.

```
work by push = 120 × 10 = 1200 J
GPE gain = 20 × 9.8 × 2 = 392 J
½ × 20 × v² = 1200 − 392 = 808       v² = 80.8      v = 8.99 m s⁻¹ (3 s.f.)
```

## Units and conversions

- 1 J = 1 N m. 1 kJ = 1000 J.
- 1 W = 1 J s⁻¹. 1 kW = 1000 W.
- Convert km h⁻¹ to m s⁻¹ by multiplying by 1000/3600. For example 72 km h⁻¹ = 20 m s⁻¹.
- Check that your answer to a power question has a sensible size and that kW have been converted to W.

## Quick self-test

1. Find the work done by a 25 N force that acts at 60° to the direction of motion over 8 m.
2. A 0.4 kg ball moves at 15 m s⁻¹. Find its KE.
3. How much GPE does a 12 kg box gain when lifted 3.5 m?
4. A particle is released from rest and slides down a smooth slope through a vertical drop of 4.9 m. Find its speed at the bottom.
5. A 2 kg block speeds from 3 to 7 m s⁻¹. Find the total work done on it.
6. A constant 150 N resistance acts on a car moving 40 m. How much work does the resistance do?
7. An engine of power 24 kW drives a car at constant 30 m s⁻¹ on a level road. Find the resistance.
8. A lift motor raises a 600 kg lift at constant 2 m s⁻¹. Find the power needed, ignoring resistance.
9. A 5 kg crate is dragged up a slope at 30° for 4 m at constant speed, with friction 6 N. Find the work done by the dragging force.
10. State the work done by the normal reaction on a block sliding along a surface.

### Answers

1. 25 × 8 × cos 60° = **100 J**.
2. ½ × 0.4 × 15² = **45 J**.
3. 12 × 9.8 × 3.5 = **411.6 J**.
4. v² = 2 × 9.8 × 4.9 = 96.04, so v = **9.8 m s⁻¹**.
5. ½ × 2 × (49 − 9) = **40 J**.
6. −150 × 40 = **−6000 J** (6000 J of work done against it).
7. R = 24000/30 = **800 N**.
8. P = 600 × 9.8 × 2 = **11 760 W** (11.8 kW to 3 s.f.).
9. Force = 5 × 9.8 × sin 30° + 6 = 30.5 N; work = 30.5 × 4 = **122 J**.
10. **Zero**, because it is perpendicular to the motion.

## Where marks are usually lost

- Dropping cos θ, or taking θ from the wrong line.
- Using slope length instead of vertical height in mgh.
- Forgetting the component of weight along a slope in the work-energy equation.
- Treating work against friction as positive in an equation where friction removes energy.
- Applying conservation of energy when friction or an engine is present.
- Leaving power in kW while the force is in N.
- Putting the net force into P = Fv rather than the force produced by the engine.
- Giving a negative speed, or a square root of a negative number, without noticing an error in the signs.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.6 (Work and energy). Published by OxfordAQA for International AS exams from May/June 2018 and International A-level exams from May/June 2019.
