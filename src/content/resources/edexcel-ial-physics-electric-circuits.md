---
title: "Unit 2: Electric Circuits"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Unit 2: Waves and Electricity"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 2.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-2-waves-and-electricity"
    subtopic: "electric-circuits"
description: "Current, potential difference, resistance, Ohm's law, resistivity, potential dividers, e.m.f. and internal resistance: sub-topic 2.4 of Edexcel IAL Physics."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers sub-topic **2.4 Electric Circuits**, completing
**Unit 2: Waves and Electricity**, from the Pearson Edexcel International
Advanced Subsidiary/Advanced Level in Physics (YPH11), Issue 3
specification (first assessment June 2019). This topic is commonly
studied using applications such as space technology.

## Before studying this

This topic follows sub-topic 2.3, Waves and Particle Nature of Light, and
assumes familiarity with rearranging equations and basic circuit
diagrams from GCSE/IGCSE-level physics.

## Syllabus coverage

**PEARSON EDEXCEL INTERNATIONAL A LEVEL PHYSICS (YPH11) — Sub-topic 2.4**

Candidates will be assessed on their ability to: understand that electric
current is the rate of flow of charged particles and use I = ΔQ/Δt;
understand how to use the equation V = W/Q; understand that resistance is
defined by R = V/I and that Ohm's law is a special case when I ∝ V for
constant temperature; understand how the distribution of current in a
circuit is a consequence of charge conservation, and how the distribution
of potential differences in a circuit is a consequence of energy
conservation; derive the equations for combining resistances in series and
parallel using the principles of charge and energy conservation, and use
these equations; use the equations P = VI, W = VIt, and derive and use
related equations such as P = I²R and P = V²/R; understand how to sketch,
recognise and interpret current-potential difference graphs for
components, including ohmic conductors, filament bulbs, thermistors and
diodes; use the equation R = ρl/A; **CORE PRACTICAL 7**: determine the
electrical resistivity of a material; use I = nqvA to explain the large
range of resistivities of different materials; understand how the
potential along a uniform current-carrying wire varies with distance
along it; understand the principles of a potential divider circuit and
how to calculate potential differences and resistances in such a circuit;
analyse potential divider circuits where one resistance is variable,
including thermistors and light dependent resistors (LDRs); know the
definition of electromotive force (e.m.f.), understand internal
resistance, and distinguish between e.m.f. and terminal potential
difference; **CORE PRACTICAL 8**: determine the e.m.f. and internal
resistance of an electrical cell; understand how changes of resistance
with temperature may be modelled in terms of lattice vibrations and
number of conduction electrons, and how to apply this model to metallic
conductors and negative temperature coefficient thermistors; and
understand how changes of resistance with illumination may be modelled in
terms of the number of conduction electrons, and how to apply this model
to LDRs.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


## Current, potential difference and resistance

**Electric current** is the rate of flow of charged particles:

```
I = ΔQ / Δt
```

**Potential difference** relates energy transferred to charge:

```
V = W / Q
```

**Resistance** is defined as R = V/I; **Ohm's law** is the special case
where current is proportional to potential difference at constant
temperature (I ∝ V), giving a straight-line current-potential difference
graph through the origin. Non-ohmic components — filament bulbs (curve as
temperature rises), thermistors (current rises faster than linearly as
resistance falls with heating) and diodes (near-zero current until a
threshold forward voltage, then rapid rise; effectively no current in
reverse) — have characteristic non-linear I-V graphs that must be
sketched, recognised and interpreted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--02-iv-characteristics.webp" width="900" height="1115" alt="Four I-V graphs: a fixed resistor is a straight line through the origin; a filament lamp curves flat as it heats, with lesson data giving 10 ohm at 1.0 V and 25 ohm at 10 V; a diode conducts only above about 0.7 V forward; an NTC thermistor curve steepens as it heats." loading="lazy">
  <figcaption>Four I–V shapes side by side, with R = V/I read at a point.</figcaption>
</figure>


## Circuit laws and combining resistors

Current distribution in a circuit follows from **conservation of
charge** (current into a junction equals current out); potential
difference distribution follows from **conservation of energy** (energy
transferred per unit charge around any closed loop sums to zero). From
these principles, resistances combine as:

```
series:   R = R1 + R2 + R3 + ...
parallel: 1/R = 1/R1 + 1/R2 + 1/R3 + ...
```

**Power** in a circuit is P = VI, and energy transferred is W = VIt;
combined with V = IR these give the related forms P = I²R and P = V²/R.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


## Resistivity and CORE PRACTICALs 7-8

**Resistivity** relates a material's resistance to its dimensions:

```
R = ρl / A
```

where l is length and A is cross-sectional area — investigated in
**CORE PRACTICAL 7**, determining the electrical resistivity of a
material. At the microscopic level, current is described by
I = nqvA, where n is the number density of charge carriers, q is charge
per carrier, v is mean drift velocity and A is cross-sectional area —
explaining why different materials (metals, semiconductors, insulators)
span such a large range of resistivities. Along a uniform current-carrying
wire, potential varies linearly with distance from one end.

A **potential divider circuit** splits a supply voltage across two or
more resistors in series, in proportion to their resistances; when one
resistance is variable — a **thermistor** or **light dependent resistor
(LDR)** — the output potential difference varies with temperature or
light level respectively, and candidates must be able to analyse such
circuits.

**Electromotive force (e.m.f.)** is the total energy supplied per unit
charge by a source; **internal resistance** is the resistance within the
source itself, meaning the **terminal potential difference** (measured
across the source's terminals when current flows) is less than the
e.m.f. by the "lost volts" across the internal resistance. **CORE
PRACTICAL 8** determines the e.m.f. and internal resistance of an
electrical cell, typically from a graph of terminal potential difference
against current.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--01-drift-velocity.webp" width="900" height="1260" alt="A wire carries free electrons that drift slowly against the conventional current. In time t the carriers in a slab of length vt cross a plane, so I = nAvq. For a 13 A copper cable the drift speed is 3.8 x 10^-4 m/s, and halving the diameter makes the drift speed four times larger for the same current." loading="lazy">
  <figcaption>Why a current of many amperes needs only a tiny drift speed: I = nAvq.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--08-potential-divider-load.webp" width="900" height="1170" alt="Left: 12 V across 4.7 kohm and 3.3 kohm gives 4.95 V across the 3.3 kohm resistor. Right: a 3.3 kohm load in parallel makes 1.65 kohm, so the output falls to 3.12 V. Below: a potentiometer slider 35.0 cm along a 100.0 cm track on a 6.0 V supply gives 2.1 V." loading="lazy">
  <figcaption>A loaded divider lowers the output; a slider on a track gives a variable output.</figcaption>
</figure>


## Modelling resistance changes

Resistance changes with **temperature** can be modelled in terms of
**lattice vibrations** (which increase and impede electron flow as
temperature rises) and the **number of conduction electrons** (which,
for negative temperature coefficient thermistors, increases sharply with
temperature, dominating over increased lattice vibration and causing
resistance to fall). This model applies to both metallic conductors
(resistance rises with temperature, dominated by lattice vibrations) and
NTC thermistors (resistance falls with temperature, dominated by
increasing conduction electrons). Resistance changes with **illumination**
in an LDR are modelled similarly, in terms of the number of conduction
electrons increasing as light intensity increases, reducing resistance.

**Worked example.** A cell of e.m.f. 6.0 V and internal resistance 0.50 Ω
is connected to an external resistor of 5.5 Ω. Find (a) the current in the
circuit, and (b) the terminal potential difference.

(a) Total resistance = 5.5 + 0.50 = 6.0 Ω. Current I = e.m.f. / total
resistance = 6.0 / 6.0 = **1.0 A**.

(b) Terminal p.d. = e.m.f. − (I × internal resistance) = 6.0 − (1.0 ×
0.50) = **5.5 V** (equal to the p.d. across the external resistor, as
expected).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


## Common mistakes

Confusing e.m.f. (energy per unit charge supplied by the source) with
terminal potential difference (what is actually measured externally) —
they are only equal when no current flows or internal resistance is zero.
Adding resistances in parallel directly instead of using the reciprocal
relationship. Forgetting that Ohm's law only describes a special case
(constant temperature, I ∝ V) rather than a universal definition of
resistance. Misreading non-ohmic I-V graphs, particularly assuming a
diode conducts symmetrically in both directions.

## Quick revision checklist

- Use I = ΔQ/Δt, V = W/Q and R = V/I, and state the condition for Ohm's law to apply.
- Explain current and potential-difference distribution using charge and energy conservation.
- Derive and use the series and parallel resistor-combination equations.
- Use P = VI, W = VIt, P = I²R and P = V²/R.
- Sketch and interpret I-V graphs for ohmic conductors, filament bulbs, thermistors and diodes.
- Use R = ρl/A and describe CORE PRACTICAL 7 (resistivity).
- Use I = nqvA to explain the range of material resistivities.
- Analyse potential divider circuits, including with a thermistor or LDR.
- Distinguish e.m.f. from terminal potential difference and describe CORE PRACTICAL 8 (e.m.f. and internal resistance).
- Explain resistance changes with temperature (conductors, NTC thermistors) and illumination (LDRs) in terms of lattice vibrations and conduction-electron number.

## Frequently asked questions

**What is Ohm's law?**
Ohm's law is the special case where current is directly proportional to potential difference at constant temperature. Resistance itself is defined more generally by R = V/I.

**What is Core Practical 8 in Edexcel IAL Physics?**
Core Practical 8 determines the e.m.f. and internal resistance of an electrical cell, typically from a graph of terminal potential difference against current.

**Why do materials have such different resistivities?**
Edexcel IAL Physics uses I = nqvA to explain this: the number density of charge carriers n is very large in metals, much smaller in semiconductors and tiny in insulators, giving a huge range of resistivities.

**What is the I-V characteristic of a diode?**
A diode passes almost no current until a threshold forward voltage is reached, then the current rises rapidly. It passes effectively no current in reverse, so its graph is not symmetrical.

## Related resources

- [Unit 2: Waves and Particle Nature of Light](/resources/edexcel-ial-physics-waves-and-particle-nature-of-light/) — the previous sub-topic
- [Unit 4: Further Mechanics, Fields and Particles](/resources/edexcel-ial-physics-further-mechanics/) — the first International A2 unit (Unit 3, Practical Skills in Physics I, comes between this unit and Unit 4)
- [Pearson Edexcel International A Level Physics hub](/boards/edexcel/a-level/physics/)

*This guide is intended to support, not replace, engagement with the
official Pearson Edexcel specification and your own teacher's guidance.
Always check the current version of the specification for authoritative
detail.*
