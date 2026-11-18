---
title: "Cambridge O Level Physics (5054): Electric circuits"
resourceType: "study-guides"
subject: "physics"
level: ["o-levels"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 4.3
syllabusTopics:
  - qualification: "o-level"
    topic: "electricity-and-magnetism"
    subtopic: "electric-circuits"
description: "Circuit components, series and parallel rules, combined resistance, thermistors, LDRs and potential dividers for Cambridge O Level Physics 5054, worked through."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.3 Electric circuits**, from Topic 4,
Electricity and magnetism, of Cambridge O Level Physics 5054 (2026–2028
series). It has three parts: 4.3.1 circuit diagrams and components, 4.3.2
series and parallel circuits, and 4.3.3 the action and use of circuit
components. The
[Electricity and magnetism study guide](/resources/o-level-physics-electricity-and-magnetism/)
summarises the rules; this page shows a reliable step-by-step method for
multi-part circuit calculations and for sensor circuits, with fresh worked
examples.

Companion pages: [Electric circuits revision notes](/resources/cambridge-o-level-physics-5054-electric-circuits-revision-notes/)
and [Electric circuits practice questions](/resources/cambridge-o-level-physics-5054-electric-circuits-practice/).

## Syllabus coverage

- Draw and interpret circuit diagrams containing the components the
  syllabus lists, and know how each behaves in a circuit
- Recall and use the current and p.d. rules for series and parallel
  circuits
- Calculate the combined resistance of two or more resistors in series and
  of two resistors in parallel
- Calculate current, voltage and resistance in parts of a circuit or the
  whole circuit
- Describe the action of NTC thermistors and LDRs and their use as input
  sensors
- Describe a variable potential divider and use R₁ / R₂ = V₁ / V₂

## 4.3.1 Components and how they behave

You must be able to draw and recognise the standard symbols. Learn what
each component *does*, because questions ask you to interpret a diagram,
not only label it.

| Component | Behaviour in a circuit |
|---|---|
| Cell, battery, power supply | Source of e.m.f.; a battery is two or more cells; the longer line of a cell symbol is the positive terminal |
| Generator | Source of e.m.f. driven by rotation; usually a.c. |
| Switch | Open: no current; closed: completes the circuit |
| Fixed resistor | Constant resistance; limits current |
| Variable resistor | Resistance changed by a slider; adjusts current |
| Potential divider | Two resistors (or a resistor with a sliding contact) giving a chosen fraction of the supply p.d. |
| Heater | Resistor designed to transfer energy by heating |
| Thermistor (NTC) | Resistance decreases as temperature increases |
| Light-dependent resistor (LDR) | Resistance decreases as light intensity increases |
| Lamp | Lights when current flows; resistance rises as it heats |
| Motor | Turns when current flows |
| Ammeter | Measures current; placed in series |
| Voltmeter | Measures p.d.; placed in parallel |
| Oscilloscope | Displays how a p.d. varies with time |
| Magnetising coil | Coil producing a magnetic field when current flows |
| Transformer | Changes an alternating p.d. to a higher or lower value |
| Fuse | Melts and breaks the circuit if the current is too large |
| Relay | A small current in its coil works an electromagnet that closes or opens a separate switch |
| Diode | Lets current through in one direction only |
| Light-emitting diode (LED) | Diode that gives out light when current flows forwards |

## 4.3.2 Series and parallel rules

**Series** (one path):

- the current is the **same at every point**
- the p.d.s across the components **add up** to the total p.d.
- combined resistance: **R = R₁ + R₂ + R₃ + …**

**Parallel** (branches):

- the current entering a junction **equals** the current leaving it, so the
  branch currents add up to the total
- the p.d. across each branch is the **same** as the p.d. across the whole
  parallel arrangement
- combined resistance of two resistors:

```
1 / R = 1 / R₁ + 1 / R₂        or        R = (R₁ × R₂) / (R₁ + R₂)
```

The combined resistance of a parallel pair is always **less than the
smaller** of the two. Two equal resistors in parallel give half of one.

**Worked example 1 (series).** Resistors of 2.0 Ω, 3.0 Ω and 5.0 Ω are in
series with a 6.0 V supply.

```
R total = 2.0 + 3.0 + 5.0 = 10 Ω
I = V / R = 6.0 / 10 = 0.60 A   (same in each resistor)
p.d.s: 0.60 × 2.0 = 1.2 V,  0.60 × 3.0 = 1.8 V,  0.60 × 5.0 = 3.0 V
check: 1.2 + 1.8 + 3.0 = 6.0 V
```

The largest resistor takes the largest share of the p.d.

**Worked example 2 (combined circuit).** A 12 Ω and a 6.0 Ω resistor are in
parallel. The pair is in series with a 2.0 Ω resistor and a 9.0 V supply.
Find every current and p.d.

Work from the inside out:

```
step 1  parallel pair:  R = (12 × 6.0) / (12 + 6.0) = 72 / 18 = 4.0 Ω
step 2  whole circuit:  R = 4.0 + 2.0 = 6.0 Ω
step 3  supply current: I = 9.0 / 6.0 = 1.5 A
step 4  p.d. across 2.0 Ω: 1.5 × 2.0 = 3.0 V
        p.d. across the pair: 9.0 − 3.0 = 6.0 V
step 5  branch currents: 6.0 / 12 = 0.50 A and 6.0 / 6.0 = 1.0 A
check   0.50 + 1.0 = 1.5 A  ✓
```

The two checks — p.d.s adding to the supply and branch currents adding to
the total — catch most arithmetic slips.

**Adding a branch.** Connecting another resistor in parallel always
*reduces* the total resistance and *increases* the current from the
supply, even though the new branch is itself a resistor. Each branch is
an extra path for charge.

## 4.3.3 Sensors and potential dividers

**NTC thermistor.** As temperature **rises**, its resistance **falls**.
**LDR.** As light intensity **rises**, its resistance **falls**.

On their own they only change a resistance. To act as **input sensors**
they are placed in a **potential divider**, so that a change in
temperature or light produces a change in output p.d., which can then
switch another circuit on or off, often through a relay.

**The potential divider equation.** Two resistors in series share the
supply p.d. in the ratio of their resistances:

```
R₁ / R₂ = V₁ / V₂
```

Equivalently, V₁ = V supply × R₁ / (R₁ + R₂).

**Worked example 3 (light sensor).** An LDR is in series with a fixed
4.0 kΩ resistor across a 12 V supply. The LDR's resistance is 20 kΩ in the
dark and 2.0 kΩ in bright light. Find the p.d. across the LDR in each case.

```
dark:   V LDR = 12 × 20 / (20 + 4.0) = 12 × 20 / 24 = 10 V
light:  V LDR = 12 × 2.0 / (2.0 + 4.0) = 12 × 2.0 / 6.0 = 4.0 V
```

The p.d. across the LDR rises when it gets dark, so taking the output
across the LDR gives a circuit that can switch on a lamp at night.

**Worked example 4 (temperature sensor).** A thermistor is in series with
a fixed resistor. As the room heats up, the thermistor's resistance falls,
so it takes a smaller share of the supply p.d. and the **fixed resistor
takes a larger share**. Taking the output across the fixed resistor gives a
p.d. that rises with temperature — the basis of a fire or overheating
alarm. To make the alarm work at a lower temperature, the fixed resistor
can be replaced by a variable one and adjusted.

**Variable potential divider.** A resistor with a sliding contact (a
potentiometer) connected across the supply gives an output between the
slider and one end. Moving the slider from one end to the other varies the
output continuously from zero up to the full supply p.d. — used, for
example, as a volume or brightness control.

## Common mistakes

- Adding parallel resistances as if they were in series. Check: the result
  must be smaller than either resistor.
- Using the supply p.d. across one component in a series circuit instead
  of its share.
- Forgetting to invert at the end when using 1 / R = 1 / R₁ + 1 / R₂.
- Saying the current is "used up" by the first component in series. It is
  the same everywhere in a series loop.
- Stating that a thermistor's resistance increases with temperature. For
  the NTC thermistor in 5054, it decreases.
- Mixing up which resistor the output is taken across in a sensor circuit.
  Decide which resistance changes, then which share of the p.d. rises.

## Exam technique for Cambridge command words

- **Calculate**: write the rule you are using in words ("series: currents
  equal") before substituting, and show each step so method marks are
  available.
- **Explain** how a sensor circuit works: state the change in condition,
  the change in resistance, the change in share of p.d., and the effect on
  the output — four linked steps.
- **Draw** a circuit: use a ruler, standard symbols, no gaps in wires, and
  put meters in the correct place (ammeter in series, voltmeter in
  parallel).
- **Describe** the action of a component: say what changes and in which
  direction, for example "resistance decreases as light intensity
  increases".

*Written against Cambridge O Level Physics 5054, 2026–2028 series. Always
check the current syllabus for your examination year.*
