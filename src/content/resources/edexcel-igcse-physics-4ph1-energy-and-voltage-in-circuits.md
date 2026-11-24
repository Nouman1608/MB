---
title: "Pearson Edexcel International GCSE Physics (4PH1): Energy and voltage in circuits"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Electricity"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 2.3
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "energy-and-voltage-in-circuits"
description: "Series and parallel circuits, I-V investigations, LDRs, thermistors, V = IR, Q = It, E = QV and junctions for Edexcel International GCSE Physics 4PH1, 2c."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

This guide goes deep on sub-topic **2(c) Energy and voltage in circuits**,
statements 2.7 to 2.21 of the Pearson Edexcel International GCSE in
Physics (4PH1), Issue 4. None of these statements carries a "P", so all
can be assessed on both papers. For Topic 2 as a whole, see the
[Electricity study guide](/resources/edexcel-igcse-physics-electricity/).

## What the specification asks

- **Circuit choice (2.7–2.8):** why series or parallel suits particular
  applications, including domestic lighting; how the current in a series
  circuit depends on the applied voltage and the number and nature of the
  other components.
- **Components (2.9–2.12):** how current varies with voltage in wires,
  resistors, metal filament lamps and diodes, and how to investigate it;
  the qualitative effect of changing resistance; LDRs and thermistors;
  lamps and LEDs as indicators of current.
- **Quantities (2.13–2.21):** V = I × R; current as rate of flow of
  charge; Q = I × t; current in metals as a flow of electrons;
  conservation of current at a junction; equal voltages across parallel
  components; calculations for two components in series; voltage as
  energy per unit charge; E = Q × V.

## Charge, current and energy: the picture

In a solid metal, current is a flow of **negatively charged electrons**
(2.16). They drift from the negative terminal of the supply, round the
circuit, to the positive terminal. Conventional current is shown on
diagrams in the opposite direction, from positive to negative.

**Current** is the rate of flow of charge (2.14): Q = I × t. **Voltage**
is the energy transferred per unit charge (2.20): a 6.0 V battery gives
6.0 J to every coulomb passing through it, and across a component the
voltage is the energy each coulomb transfers to that component. So
E = Q × V (2.21).

Charge is not used up in a circuit; energy is transferred. This one idea
explains the two junction and loop rules.

**Current at a junction (2.17).** Charge cannot build up or vanish at a
junction, so the total current into a junction equals the total current
out. If 0.80 A enters a junction and 0.30 A leaves along one branch, the
other branch carries 0.50 A.

**Voltage in series and parallel.** In a series circuit, each coulomb
passes through every component in turn, so the supply voltage is shared:
V_supply = V_1 + V_2. In parallel, each coulomb passes through only one
branch, and each branch connects directly across the supply, so the
voltage across each parallel component is the same (2.18).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--01-charge-current-energy.webp" width="900" height="545" alt="A 6.0 V battery and a lamp in a loop. Conventional current runs from + to −, electrons drift the other way. Each coulomb gains 6.0 J in the battery and transfers it in the lamp. Side notes: Q = I × t, voltage is energy per unit charge, E = Q × V." loading="lazy">
  <figcaption>Charge is not used up: each coulomb picks up energy at the supply and transfers it in the components.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--02-junction-and-voltage-rules.webp" width="900" height="545" alt="Left: 0.80 A enters a junction and splits into 0.30 A and 0.50 A. Middle: in series the supply voltage is shared, V supply = V₁ + V₂. Right: in parallel each branch has the full supply voltage." loading="lazy">
  <figcaption>Current in equals current out at a junction; series shares the voltage, parallel branches each get all of it.</figcaption>
</figure>

## Series and parallel: choosing (2.7)

| Feature | Series | Parallel |
|---|---|---|
| current | same everywhere | shared between branches |
| voltage | shared between components | same across each branch |
| one component fails | all stop | others keep working |
| switching | one switch controls all | each branch can have its own switch |
| adding components | current falls | total current rises |

**Domestic lighting** is wired in parallel: each lamp gets the full mains
voltage, works at its correct brightness, can be switched on its own, and
keeps working if another lamp fails. **Series** suits a switch or fuse,
which must carry the same current as the device it controls, and some
decorative strings of low-voltage lamps.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--03-series-vs-parallel-lighting.webp" width="900" height="565" alt="Left: three lamps in series with one broken; all go out. Right: three lamps in parallel, each with its own switch; one lamp is broken but the other two stay lit." loading="lazy">
  <figcaption>In parallel each lamp gets the full voltage, has its own switch and keeps working if another fails.</figcaption>
</figure>

## Current in a series circuit (2.8, 2.10)

The current in a series circuit depends on:

- the **applied voltage**: a larger voltage gives a larger current through
  the same components
- the **number** of components: adding a resistor in series increases the
  total resistance, so the current falls
- the **nature** of the components: a larger resistance, a thermistor in
  the cold, or an LDR in the dark gives a smaller current

Qualitatively (2.10): increasing resistance decreases the current;
decreasing resistance increases it, for the same voltage.

## Worked example 1: two resistors in series (2.19)

A 9.0 V battery is connected to a 120 Ω resistor and a 60 Ω resistor in
series.

```
total resistance  R = 120 + 60 = 180 Ω
current           I = V / R = 9.0 / 180 = 0.050 A
voltage across 120 Ω: V = I × R = 0.050 × 120 = 6.0 V
voltage across 60 Ω:  V = 0.050 × 60 = 3.0 V    (check: 6.0 + 3.0 = 9.0 V)
charge in 2.0 minutes: Q = I × t = 0.050 × 120 = 6.0 C
energy from battery:   E = Q × V = 6.0 × 9.0 = 54 J
```

*Commentary.* The same current flows through both resistors, and the
larger resistor takes the larger share of the voltage. The voltages add
up to the supply voltage, a quick check worth writing down.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--04-series-worked-example.webp" width="900" height="500" alt="A 9.0 V battery with 120 Ω and 60 Ω resistors in series. Total 180 Ω gives 0.050 A, so the resistors have 6.0 V and 3.0 V across them. In 2.0 minutes 6.0 C flows and the battery transfers 54 J." loading="lazy">
  <figcaption>Total resistance first, then current, then each voltage; check they add to the supply.</figcaption>
</figure>

## I−V characteristics and how to investigate them (2.9)

**Circuit.** Connect the component in series with an ammeter, a variable
resistor (or a variable power supply) and the supply. Connect a voltmeter
in parallel across the component.

**Method.**

1. Set the variable resistor to give a small voltage; record voltage and
   current.
2. Change the variable resistor in steps to obtain at least six pairs of
   readings across the range.
3. Reverse the connections to the component and repeat to obtain negative
   values.
4. Plot current (y-axis) against voltage (x-axis).
5. Switch off between readings so that the component does not heat up,
   unless that heating is what you are investigating (the lamp).

**Results.**

| Component | Graph shape | Reason |
|---|---|---|
| wire, or resistor at constant temperature | straight line through the origin | resistance constant, current ∝ voltage |
| metal filament lamp | curve, becoming less steep at higher voltage (both directions) | filament gets hotter, resistance increases |
| diode | almost zero current in reverse; current rises steeply once a small forward voltage is exceeded | conducts in one direction only |

Resistance at any point is R = V ÷ I, using the readings at that point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--05-iv-investigation-circuit.webp" width="900" height="550" alt="Circuit with a supply, an ammeter and a variable resistor in series with the component under test, and a voltmeter connected across the component. Steps: take at least six readings, reverse the component, and plot current against voltage." loading="lazy">
  <figcaption>Vary the resistor, read V and I, reverse the component, and plot I against V.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--06-iv-characteristics.webp" width="900" height="555" alt="Current against voltage for three components. A wire or resistor gives a straight line through the origin. A filament lamp gives a curve that flattens in both directions. A diode passes almost no current in reverse and a steeply rising current once a small forward voltage is exceeded." loading="lazy">
  <figcaption>Straight line: constant resistance. Flattening curve: resistance rising. Diode: one direction only.</figcaption>
</figure>

## LDRs and thermistors (2.11)

An **LDR**'s resistance decreases as illumination increases. A
**thermistor**'s resistance decreases as temperature increases. In series
with a fixed resistor and an ammeter, shining a lamp on the LDR or warming
the thermistor makes the current rise, and the voltage across the fixed
resistor rises while the voltage across the sensor falls. This is how
these sensors are used in circuits that respond to light (outdoor lamps)
or temperature (fire alarms, thermostats).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--07-ldr-thermistor-circuits.webp" width="900" height="615" alt="An LDR and, separately, a thermistor each in series with a fixed resistor, an ammeter and a battery. More light or a higher temperature lowers the sensor resistance, so the current and the voltage across the fixed resistor rise while the voltage across the sensor falls." loading="lazy">
  <figcaption>More light or more warmth: lower sensor resistance, larger current.</figcaption>
</figure>

## Lamps and LEDs as indicators (2.12)

A lamp lighting or an LED glowing shows there is a current in that part
of the circuit. An LED is a diode, so it glows only when connected the
right way round. Indicator LEDs on chargers and appliances use this.

## Worked example 2: a lamp's resistance

A filament lamp has 2.0 V across it at 0.20 A, and 6.0 V across it at
0.30 A.

```
at 2.0 V: R = 2.0 / 0.20 = 10 Ω
at 6.0 V: R = 6.0 / 0.30 = 20 Ω
```

The resistance doubles because the filament is hotter at the higher
current. This is why V = I × R gives a different R at each point on the
curve.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--08-lamp-resistance-two-points.webp" width="900" height="590" alt="A filament lamp I–V curve with two marked points: 2.0 V at 0.20 A gives 10 Ω, and 6.0 V at 0.30 A gives 20 Ω." loading="lazy">
  <figcaption>On a curve, find R = V ÷ I at each point: here 10 Ω rises to 20 Ω.</figcaption>
</figure>

## Common mistakes

- Saying current is "used up" by a lamp. Current is the same before and
  after a component in series; energy is transferred.
- Putting the voltmeter in series or the ammeter in parallel.
- Describing a thermistor as "more resistance when hot". Its resistance
  falls as temperature rises.
- Adding resistances for components in parallel. The rule R = R₁ + R₂ is
  for series only.
- Calling the gradient of an I−V graph the resistance. Use V ÷ I at a
  point.

## Exam technique with command words

- **Explain** why domestic lighting is in parallel: give at least two
  features, each with its consequence.
- **Describe** an I−V investigation: circuit, how the voltage is varied,
  what is recorded, how the graph is plotted.
- **Calculate** in series circuits: total resistance first, then current,
  then each voltage; check that the voltages add up.
- **Describe** the effect of a sensor: say how its resistance changes,
  then the effect on current.

## More on this topic

- [Energy and voltage in circuits revision notes](/resources/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits-revision-notes/)
- [Energy and voltage in circuits practice questions](/resources/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits-practice/)
- Unit links (1 V = 1 J/C, 1 A = 1 C/s): [Units for electricity study guide](/resources/edexcel-igcse-physics-4ph1-units-electricity/)

*Written against the Pearson Edexcel International GCSE in Physics (4PH1)
specification, Issue 4. Always check the current specification for your
examination year.*
