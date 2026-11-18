---
title: "OxfordAQA A-Level Physics (9630): Estimation of physical quantities"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.1 – Measurements and Their Errors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
    subtopic: "estimation-of-physical-quantities-oxfordaqa"
description: "OxfordAQA 9630 subtopic 3.1.3 in depth: rounding to an order of magnitude, sensible everyday values, and chaining estimates with physics equations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.1.3 Estimation of physical quantities**, the last subtopic of Section 3.1 in the OxfordAQA International AS and A-level Physics (9630) specification. It is International AS content, assessed in Unit 1, and the specification describes estimation as a skill needed "throughout the course and beyond": estimate questions can appear on any topic, and the same habit lets you spot an impossible answer in an ordinary calculation.

When you have read the guide, condense it with the [estimation revision notes](/resources/oxfordaqa-a-level-physics-9630-estimation-of-physical-quantities-oxfordaqa-revision-notes/) and test yourself with the [estimation practice questions](/resources/oxfordaqa-a-level-physics-9630-estimation-of-physical-quantities-oxfordaqa-practice/). For the whole of Section 3.1, see the [measurements and their errors study guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## What the specification asks for

Two statements:

- estimation of approximate values of physical quantities to the nearest order of magnitude
- use of these estimates together with knowledge of physics to produce further derived estimates, also to the nearest order of magnitude.

The first is about knowing sensible sizes: the mass of a person, the speed of a car, the size of an atom. The second is about using those values in an equation, such as E = ½mv² or F = Δ(mv)/Δt, to estimate something you could not guess directly.

## Order of magnitude

The **order of magnitude** of a quantity is the power of ten closest to it. Because powers of ten are spaced evenly on a logarithmic scale, the boundary between 10ⁿ and 10ⁿ⁺¹ is at √10 × 10ⁿ ≈ 3.16 × 10ⁿ, not at 5 × 10ⁿ.

| Value | Order of magnitude | Reason |
|---|---|---|
| 2.4 × 10⁵ | 10⁵ | 2.4 < 3.16 |
| 4.5 × 10⁵ | 10⁶ | 4.5 > 3.16 |
| 8 × 10⁻³ | 10⁻² | 8 > 3.16 |
| 1.9 × 10⁻⁷ | 10⁻⁷ | 1.9 < 3.16 |

Some questions ask for the answer to one significant figure instead; read the wording. "To the nearest order of magnitude" wants a bare power of ten.

## Useful reference values

These are rounded values that are sensible starting points. In an answer you state the value you have chosen; any value in a sensible range is accepted.

| Quantity | Sensible estimate |
|---|---|
| Mass of an adult | 70 kg |
| Height of an adult | 1.7 m |
| Walking speed | 1.5 m s⁻¹ |
| Sprinting speed | 10 m s⁻¹ |
| Mass of a car | 1000 kg |
| Speed of a car on a motorway | 30 m s⁻¹ |
| Height of one storey of a building | 3 m |
| Area of the sole of one shoe | 0.025 m² |
| Mass of a football | 0.4 kg |
| Density of water | 1000 kg m⁻³ |
| Density of air | 1 kg m⁻³ |
| Diameter of an atom | 10⁻¹⁰ m |
| Diameter of a nucleus | 10⁻¹⁵ m |
| Gravitational field strength | 10 N kg⁻¹ |

Using g ≈ 10 N kg⁻¹ is acceptable in an estimate, because the other values are far less certain than the difference between 9.81 and 10.

## A method that earns every mark

1. **Name the physics.** Write the equation that links what you want to what you can estimate.
2. **State each assumption with a value and a unit**, for example "mass of car ≈ 1000 kg".
3. **Round** to one significant figure so the arithmetic stays simple.
4. **Calculate**, keeping units consistent (convert cm to m first).
5. **Give the answer** to the order of magnitude, or to one significant figure, as asked.
6. **Sense-check**: is it plausible? Compare with something known.

Marks are given for a reasoned method. A correct power of ten with no stated assumptions scores little, because the examiner cannot tell whether it was reasoned or guessed.

## Worked example 1: kinetic energy of a car

**Question.** Estimate the kinetic energy of a car travelling on a motorway, to the nearest order of magnitude.

**Method.**

1. Physics: Ek = ½mv².
2. Assumptions: m ≈ 1000 kg; v ≈ 30 m s⁻¹.
3. Ek = ½ × 1000 × 30² = 4.5 × 10⁵ J.
4. 4.5 > 3.16, so the order of magnitude is **10⁶ J**.

**Comment.** A student who rounds by the first digit would write 10⁵ J. Taking m = 1500 kg gives 6.8 × 10⁵ J, which is still 10⁶ J: a good estimate does not depend on the exact values chosen.

## Worked example 2: pressure under a person

**Question.** Estimate the pressure a person standing on both feet exerts on the floor.

**Method.**

1. Physics: p = F/A, with F equal to the person's weight.
2. Assumptions: mass 70 kg, so weight ≈ 700 N (g ≈ 10 N kg⁻¹); area of one shoe sole ≈ 0.25 m × 0.10 m = 0.025 m², so two soles ≈ 0.05 m².
3. p = 700 ÷ 0.05 = 1.4 × 10⁴ Pa.
4. Order of magnitude: **10⁴ Pa**.

**Sense-check.** Atmospheric pressure is about 10⁵ Pa, so standing on a floor presses down about a tenth as hard as the air does. That is plausible.

## Worked example 3: a derived estimate with momentum

**Question.** Estimate the average force a player's foot exerts on a football in a hard kick.

**Method.**

1. Physics: F = Δ(mv)/Δt.
2. Assumptions: ball mass ≈ 0.4 kg, initially at rest; speed after the kick ≈ 25 m s⁻¹; contact time ≈ 0.01 s.
3. Δ(mv) = 0.4 × 25 = 10 kg m s⁻¹.
4. F = 10 ÷ 0.01 = 1000 N.
5. Order of magnitude: **10³ N**.

**Comment.** This is the "derived estimate" the specification describes: no one can guess a kick force directly, but each input can be estimated. The contact time is the least certain value. Even if it were 0.02 s, the force would be 500 N, still 10³ N to the nearest order of magnitude.

## Worked example 4: counting

**Question.** Estimate the number of times a human heart beats in a lifetime.

**Method.**

1. Assumptions: 70 beats per minute; lifetime 75 years.
2. Minutes in 75 years ≈ 75 × 365 × 24 × 60 = 3.9 × 10⁷.
3. Beats ≈ 70 × 3.9 × 10⁷ = 2.8 × 10⁹.
4. Order of magnitude: **10⁹**.

## Estimation as a check on calculations

The same skill guards ordinary calculations. If a calculated speed of a car comes out as 3 × 10⁴ m s⁻¹, or the mass of a classroom's air as 0.1 kg, a prefix or unit has gone wrong. Before moving on, compare every final answer with a sensible reference value.

## Common mistakes

- Giving a number with no assumptions written down.
- Rounding to the order of magnitude by the first digit, so 4.5 × 10⁵ becomes 10⁵.
- Quoting an estimate to three or four significant figures, which implies precision that does not exist.
- Choosing values that are not sensible, such as a 5 kg adult or a 300 m s⁻¹ car.
- Mixing units in the estimate, for example a shoe area in cm² with a force in N.
- Estimating the wrong quantity: weight in kg instead of N, or mass instead of volume.

## Exam technique for OxfordAQA command words

- **Estimate**: state each assumed value, show the physics equation, and give a final answer to the order of magnitude or one significant figure.
- **Show that**: when a question says "show that the energy is about 10⁵ J", your working must arrive at a value that rounds to it, with every assumption visible.
- **Suggest**: give a sensible value for an unfamiliar quantity and justify it briefly, such as "a door is about 2 m tall, so...".
- **Discuss** or **Evaluate**: say which assumption has most effect on the estimate and whether changing it would change the order of magnitude.

## Where this subtopic leads

Estimation draws on the units in 3.1.1 and the honest treatment of uncertainty in 3.1.2. See the [SI units and prefixes study guide](/resources/oxfordaqa-a-level-physics-9630-use-of-si-units-and-their-prefixes-oxfordaqa/) and the [limitation of physical measurements study guide](/resources/oxfordaqa-a-level-physics-9630-limitation-of-physical-measurements-oxfordaqa/). In Section 3.2, estimates return in questions on energy, momentum and materials.
