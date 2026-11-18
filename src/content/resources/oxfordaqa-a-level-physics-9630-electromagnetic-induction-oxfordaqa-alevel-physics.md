---
title: "OxfordAQA A-Level Physics (9630): Electromagnetic induction"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "electromagnetic-induction-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.4: induction experiments, Faraday's and Lenz's laws, BLv, energy in a moving rod, eddy currents and rotating coils."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.4, Electromagnetic induction, in Section 3.10 Magnetic fields (International A-level only). For a first pass through 3.10.3 and 3.10.4 together, use the [flux, flux linkage and electromagnetic induction study guide](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction/). Flux linkage itself is treated in depth in the [magnetic flux and flux linkage study guide](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics/). After this page, condense it with the [electromagnetic induction revision notes](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [electromagnetic induction practice questions](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

| Statement in 3.10.4 | What you must be able to do |
|---|---|
| Simple experimental phenomena | Describe and explain what a meter shows when magnets and coils move |
| Faraday's and Lenz's laws | State both and apply them to size and direction |
| Magnitude of induced emf = rate of change of flux linkage, ε = NΔΦ/Δt | Calculate average emf, and emf from a graph gradient |
| Applications such as a straight conductor moving in a magnetic field | Derive and use ε = BLv, and follow the energy |
| Production of eddy currents | Explain how they arise and their effects |
| Emf induced in a coil rotating uniformly in a magnetic field, ε = BANω sin ωt | Use the equation, sketch the graph, and predict changes |

## Simple experimental phenomena

Connect a coil to a centre-zero meter and move a bar magnet:

| Action | Meter |
|---|---|
| Magnet pushed into the coil | Deflects one way |
| Magnet held still inside the coil | Reads zero |
| Magnet pulled out | Deflects the other way |
| Magnet pushed in faster | Larger deflection, for a shorter time |
| Coil with more turns, or stronger magnet | Larger deflection |
| Coil moved instead of magnet | Same effect: only relative motion matters |

Every row is explained by one idea: an emf is induced only while the flux linkage is changing, and the faster it changes the bigger the emf.

### A magnet falling through a coil

A magnet dropped through a vertical coil gives an emf–time trace with two pulses of opposite sign. The flux linkage rises as the magnet enters and falls as it leaves, so the emf reverses. The second pulse is taller and narrower, because the magnet is moving faster as it leaves: the same change of flux linkage happens in less time. The areas under the two pulses are equal in size, since each equals the total change in flux linkage, NΔΦ.

## Faraday's law and Lenz's law

**Faraday's law:** the magnitude of the induced emf is directly proportional to (in SI units, equal to) the rate of change of flux linkage:

ε = N ΔΦ/Δt

**Lenz's law:** the induced emf acts in a direction that opposes the change producing it. If a current flows, its magnetic field opposes the change in flux.

Lenz's law is a consequence of conservation of energy. Push the north pole of a magnet towards a coil: the induced current makes that end of the coil a north pole, which repels the magnet, so you must do work to keep pushing. That work becomes electrical energy and then thermal energy in the circuit. If the induced current attracted the magnet instead, the magnet would speed up by itself and energy would appear from nothing.

### Worked example 1: a changing field

A coil of 500 turns and area 3.0 × 10⁻⁴ m² is perpendicular to a field that falls uniformly from 0.20 T to zero in 0.040 s. Find the emf.

ε = NΔΦ/Δt = 500 × 3.0 × 10⁻⁴ × 0.20 / 0.040 = **0.75 V**.

Direction: the flux through the coil is falling, so by Lenz's law the induced current flows so as to produce flux in the **same** direction as the original field, trying to keep the flux up.

### Emf from a graph

On a graph of flux linkage NΦ against time, the emf at any instant is the gradient. A straight section means a steady emf; a horizontal section means zero emf; a steeper section means a larger emf. Changing sign of gradient means the emf reverses.

## A straight conductor moving across a field

A rod of length L moves at speed v at right angles to a field B. In time Δt it sweeps out area LvΔt, so it cuts flux BLvΔt. The emf is the flux cut per second:

ε = BLv

### Worked example 2: following the energy

A rod 0.25 m long slides at a steady 2.0 m s⁻¹ along rails in a perpendicular field of 0.50 T. The circuit resistance is 0.40 Ω.

ε = BLv = 0.50 × 0.25 × 2.0 = 0.25 V.

I = ε/R = 0.25 / 0.40 = 0.625 A.

The current in the rod feels a force F = BIL = 0.50 × 0.625 × 0.25 = 0.078 N. By Lenz's law it opposes the motion, so a 0.078 N pull is needed to keep the speed steady.

Mechanical power supplied = Fv = 0.078 × 2.0 = **0.16 W**.

Electrical power dissipated = I²R = 0.625² × 0.40 = **0.16 W**.

The two are equal: the work done pushing the rod is transferred to thermal energy in the resistance. If the pull stops, the opposing force decelerates the rod.

### Worked example 3: emf with no current

An aircraft with wingspan 40 m flies horizontally at 250 m s⁻¹ where the vertical component of the Earth's field is taken as 4.0 × 10⁻⁵ T.

ε = BLv = 4.0 × 10⁻⁵ × 40 × 250 = **0.40 V** between the wing tips.

No current can be drawn from it: a wire connecting the tips moves with the aircraft and has the same emf induced in it, which cancels round the loop. There is an emf, but there is no change of flux linkage for a circuit fixed to the aircraft.

## Eddy currents

When a solid conductor moves through a field, or sits in a changing field, emfs are induced within it. Because the conductor offers closed paths of low resistance, currents circulate inside it: eddy currents.

- **Lenz's law** means they oppose the motion or change, producing a braking force. A metal plate swinging between magnet poles stops quickly; a magnet falls slowly through a copper or aluminium tube.
- **Heating:** eddy currents dissipate energy as thermal energy (I²R). This is useful in induction heating and braking, but is wasted energy in a transformer core.
- **Reducing them:** cutting slots in the plate, or building the core from thin laminations insulated from each other, breaks up the current paths. The emfs remain, but the currents are much smaller.

## The rotating coil

A coil of N turns and area A rotating at angular speed ω in a field B has flux linkage NΦ = BAN cos ωt, with t = 0 when the normal lies along the field. The emf, the rate of change of flux linkage, is

ε = BANω sin ωt

- Peak emf ε₀ = BANω, when sin ωt = ±1: the plane of the coil lies along the field, the flux linkage is zero and changing fastest.
- Zero emf when the face of the coil is perpendicular to the field: the flux linkage is at a maximum and momentarily not changing.
- The emf graph is a sine curve, a quarter of a cycle out of step with the flux linkage cosine curve.

### Worked example 4: a generator

A coil of 150 turns measures 0.050 m by 0.080 m and rotates at 50 revolutions per second in a field of 0.20 T.

ω = 2π × 50 = 314 rad s⁻¹; A = 4.0 × 10⁻³ m².

Peak emf = BANω = 0.20 × 4.0 × 10⁻³ × 150 × 314 = **38 V**.

When ωt = 30°, ε = 37.7 × sin 30° = **19 V**.

Doubling the rotation rate doubles both the peak emf (ω doubles) and the frequency of the alternating emf (half the period).

## Common mistakes

- Saying an emf is induced because a field is present, rather than because flux linkage is changing.
- Stating Lenz's law as "the current opposes the field". It opposes the **change**.
- Forgetting N in ε = NΔΦ/Δt.
- Using the peak emf at the instant the coil faces the field. The emf is zero there.
- Saying laminations "stop" eddy currents. They reduce them.
- Treating the second pulse of a falling magnet as equal in height to the first.

## Exam technique

- **State** Faraday's law with "rate of change of flux linkage", and Lenz's law with "opposes the change that produces it".
- **Explain** a direction: identify the change in flux, state what the induced field must do to oppose it, then give the current direction or pole.
- **Explain** using energy: link the opposing force to the work done and the electrical energy produced.
- **Sketch** emf against time for a rotating coil alongside flux linkage: emf zero where NΦ peaks, and largest where NΦ crosses zero.

## Related resources

- [Electromagnetic induction revision notes](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics-revision-notes/)
- [Electromagnetic induction practice questions](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics-practice/)
- [Alternating currents study guide](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics/)
- [The operation of a transformer study guide](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-oxfordaqa-alevel-physics/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.4 Electromagnetic induction, published by OxfordAQA. Check the board's website for the current version of the specification.
