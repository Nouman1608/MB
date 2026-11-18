---
title: "OxfordAQA A-Level Physics (9630): Magnetic flux density"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "magnetic-flux-density-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.1: F = BIL, Fleming's left-hand rule, the tesla, levitating rods, coils in fields and finding B from a graph."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.1, Magnetic flux density, the first part of Section 3.10 Magnetic fields (International A-level only). For a first pass through 3.10.1 and 3.10.2 together, including the current balance, use the [force on conductors and moving charges study guide](/resources/oxfordaqa-a-level-physics-force-on-conductors-and-moving-charges-in-magnetic/). After this page, condense it with the [magnetic flux density revision notes](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [magnetic flux density practice questions](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics-practice/).

Take g = 9.81 N kg⁻¹.

## What the specification asks for

| Statement in 3.10.1 | What you must be able to do |
|---|---|
| Force on a current-carrying wire in a magnetic field: F = BIL when field is perpendicular to current | Calculate F, B, I or L, and use the force in equilibrium and motion problems |
| Fleming's left-hand rule | Find the direction of the force, field or current from the other two |
| Magnetic flux density B and definition of the tesla | Define B and the tesla, and express the tesla in other units |

The statement is short, but questions combine it with Newton's laws, with graphs from experiments, and with the coils used in motors and meters.

## The force on a wire

A wire carrying current I across a magnetic field of flux density B feels a force

F = BIL

where L is the length of wire in the field. Three conditions matter:

- **Perpendicular.** The specification uses F = BIL with the field perpendicular to the current. That is the arrangement that gives the largest force.
- **Parallel gives nothing.** A wire running along the field lines feels no force at all, however large the current.
- **Only the length in the field counts.** If 0.30 m of a 1.0 m wire passes between the poles of a magnet, L = 0.30 m.

The force is at right angles to both the current and the field, so it is perpendicular to the plane containing them.

## Fleming's left-hand rule

Hold the thumb, first finger and second finger of the left hand mutually at right angles.

- **F**irst finger: **F**ield, from north to south.
- Se**c**ond finger: **c**urrent, conventional (positive to negative round the circuit).
- Thu**m**b: **m**otion, the direction of the force.

Reversing either the current or the field reverses the force. Reversing both leaves it unchanged. In a question with the page as a map, mark the field as "into" or "out of" the page, mark the current, and then turn your hand until the first two fingers match before reading the thumb.

## Magnetic flux density and the tesla

Rearranging gives B = F/(IL). The **magnetic flux density** is the force per unit current per unit length on a conductor placed at right angles to the field. It is a vector, pointing along the field lines.

**One tesla** is the flux density of a field in which a wire 1 m long carrying 1 A at right angles to the field experiences a force of 1 N.

From B = F/(IL), 1 T = 1 N A⁻¹ m⁻¹. Since 1 N = 1 kg m s⁻², 1 T = 1 kg s⁻² A⁻¹ in SI base units.

The name "flux density" anticipates section 3.10.3: B is also the magnetic flux per unit area through a surface at right angles to the field, so 1 T = 1 Wb m⁻².

Typical values help you check answers: a strong school magnet gives about 0.1 T between its poles; the Earth's field is of the order of 10⁻⁵ T.

## Worked example 1: a rod held up by the magnetic force

A horizontal copper rod of mass 12 g and length 0.15 m lies across a horizontal magnetic field of 0.080 T, perpendicular to the rod. What current makes the magnetic force support its weight?

For equilibrium, BIL = mg.

I = mg/(BL) = 12 × 10⁻³ × 9.81 / (0.080 × 0.15) = **9.8 A**.

For the force to be upwards, Fleming's rule fixes the current direction. With the field pointing north and the force up, the current must flow east. Reverse the current and the magnetic force adds to the weight instead.

A useful extension: if the current were increased to 12 A, the resultant upward force would be BIL − mg = 0.080 × 12 × 0.15 − 0.118 = 0.026 N, giving an initial upward acceleration of 0.026 / 0.012 = 2.2 m s⁻².

## Worked example 2: forces on a rectangular coil

A rectangular coil of 25 turns carries 1.5 A. It sits in a uniform field of 0.20 T with its plane parallel to the field. The two sides perpendicular to the field are each 0.040 m long; the other two sides run along the field and are 0.030 m long.

Force on each 0.040 m side: each of the 25 turns contributes BIL, so F = NBIL = 25 × 0.20 × 1.5 × 0.040 = **0.30 N**.

The current runs in opposite directions in the two sides, so the forces are equal and opposite. They do not act along the same line, so they form a couple that turns the coil. This is the principle of the electric motor.

The 0.030 m sides lie along the field, so they feel no force in this position.

## Worked example 3: finding B from experimental data

A wire with 0.060 m of its length in a magnet's field sits on a balance. The force on it is measured for several currents.

| I / A | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| F / mN | 3.1 | 5.9 | 9.0 | 12.2 | 14.9 |

Plot F against I. F = (BL)I, so the graph is a straight line through the origin with gradient BL.

From the best-fit line, gradient ≈ (14.9 − 3.1) mN / (5.0 − 1.0) A = 2.95 × 10⁻³ N A⁻¹.

B = gradient / L = 2.95 × 10⁻³ / 0.060 = **0.049 T**.

Using the gradient, not a single reading, reduces the effect of random error. A line that does not pass through the origin suggests a systematic error, such as a balance that was not zeroed.

## Comparing field quantities

| Field | Defined by force on | Equation | Unit |
|---|---|---|---|
| Gravitational field strength | unit mass | g = F/m | N kg⁻¹ |
| Electric field strength | unit positive charge | E = F/Q | N C⁻¹ |
| Magnetic flux density | unit current × unit length, at right angles | B = F/(IL) | T = N A⁻¹ m⁻¹ |

## Common mistakes

- Using the whole length of a wire when only part of it is in the field.
- Using the right hand, or the direction of electron flow, with Fleming's rule.
- Forgetting the number of turns for a coil.
- Saying a wire parallel to a field feels a force.
- Giving the tesla as N A m⁻¹, with the metre on the wrong side.
- Treating the forces on two opposite sides of a coil as cancelling completely. Their sum is zero, but they turn the coil.

## Exam technique

- **Define** the tesla in a complete sentence: 1 N on 1 m of wire carrying 1 A at right angles to the field.
- **State** a direction using the frame of the question: "into the page", "vertically upwards", "towards the north".
- **Explain** a balance or levitation problem: identify the two forces, state that they are equal, then substitute.
- **Determine** B from data: plot F against I (or against L), use the gradient, and divide by the fixed quantity.

## Related resources

- [Magnetic flux density revision notes](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics-revision-notes/)
- [Magnetic flux density practice questions](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics-practice/)
- [Moving charges in a magnetic field study guide](/resources/oxfordaqa-a-level-physics-9630-moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics/)
- [Magnetic flux and flux linkage study guide](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.1 Magnetic flux density, published by OxfordAQA. Check the board's website for the current version of the specification.
