---
title: "Edexcel IAL Physics: Electric Circuits — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on current, resistance, Kirchhoff laws, internal resistance, potential dividers and I-V characteristics for Edexcel International A Level Physics WPH12."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electric Circuits study guide](/resources/edexcel-ial-physics-electric-circuits/).

## Current and charge

```
I = Q/t        I = n A v q        (number density, area, drift velocity, charge)
```

**The drift velocity equation explains why a thin wire glows first.** For the same current, reducing the cross-sectional area A must increase the drift velocity v, so electrons collide more frequently with the lattice, transferring more energy and heating that section faster. That reasoning is a standard extended-answer question.

Metals have a very high number density n, so drift velocity is tiny (millimetres per second) — yet the current flows almost instantly, because the electric field is established throughout the circuit at nearly the speed of light. Along a uniform current-carrying wire, potential varies **linearly** with distance from one end, which is the working principle behind a potential divider's continuous voltage split.

## Resistance

```
V = IR        R = rho L / A        P = VI = I^2 R = V^2 / R
```

**Resistivity ρ is a property of the material; resistance R is a property of the specimen.** Doubling the length doubles R; doubling the area halves it. **CORE PRACTICAL 7** is the experiment to determine the resistivity of a material — measure length and diameter (with a micrometer) and plot R against l/A, using the gradient.

**I–V characteristics:**

| Component | Shape | Reason |
|---|---|---|
| **Ohmic conductor** | Straight through origin | R constant at constant temperature |
| **Filament lamp** | Curve flattening | Temperature rises, so resistance rises |
| **Diode** | Zero then sharp rise | Conducts only above ~0.6 V forward bias; effectively no current at all in reverse |
| **Thermistor (NTC)** | Curve steepening | Resistance falls as temperature rises |

**A filament lamp's resistance rises with current because heating increases lattice vibration**, so electrons collide more often. In an NTC thermistor the opposite happens — heating releases more charge carriers, and that effect outweighs the increased vibration. **An LDR follows the same conduction-electron logic as an NTC thermistor**, but the trigger is light rather than heat: brighter illumination releases more charge carriers, so resistance falls as light intensity increases.

## Kirchhoff's laws

- **First law** — current into a junction equals current out. Conservation of **charge**.
- **Second law** — sum of e.m.f.s equals sum of p.d.s around a loop. Conservation of **energy**.

```
series:   R = R1 + R2      parallel:  1/R = 1/R1 + 1/R2
```

Adding a parallel resistor always **reduces** total resistance, because it provides an extra path.

## E.m.f. and internal resistance

```
E = I(R + r) = V + Ir        terminal p.d.  V = E - Ir
```

**E.m.f.** is energy supplied **to** each coulomb by the source; **p.d.** is energy transferred **from** each coulomb in a component.

Plotting V against I: **gradient = −r**, **intercept = E**. Terminal p.d. falls as current rises because more energy is dissipated inside the source. **CORE PRACTICAL 8** determines e.m.f. and internal resistance this way — typically a graph of terminal p.d. against current.

**Worked example.** A cell of e.m.f. 6.0 V and internal resistance 0.50 Ω drives an external resistor of 5.5 Ω. Total resistance = 5.5 + 0.50 = 6.0 Ω, so I = E / total R = 6.0 ÷ 6.0 = **1.0 A**. Terminal p.d. = E − Ir = 6.0 − (1.0 × 0.50) = **5.5 V**, equal to the p.d. across the external resistor, as expected.

## Potential dividers

```
V_out = V_in x R2 / (R1 + R2)
```

Substituting a **thermistor** or **LDR** makes the output respond to temperature or light. To predict the direction of change, ask what happens to that component's **share** of the total resistance.

## Exam traps

- Confusing resistivity with resistance.
- Saying electrons travel at the speed of light.
- Explaining a filament lamp's curve without mentioning temperature.
- Saying parallel resistors increase total resistance.
- Confusing e.m.f. with p.d.
- Ignoring internal resistance when a "real" cell is specified.

## Self-test

1. Why does a thin section of wire heat up first?
2. Distinguish resistivity from resistance.
3. Why does a filament lamp's resistance increase with current?
4. Why does an NTC thermistor behave in the opposite way?
5. What do the gradient and intercept of a V–I graph give?
6. A cell of e.m.f. 9.0 V and internal resistance 1.0 Ω drives an external resistor of 8.0 Ω. Find the current and the terminal p.d.
7. Why does an LDR's resistance fall as light intensity increases?

**Answers:** 1. For the same current a smaller cross-sectional area requires a higher drift velocity, so electrons collide with the lattice more frequently and transfer more energy there. 2. Resistivity is a property of the material; resistance depends additionally on the length and cross-sectional area of the specimen. 3. The current heats the filament, increasing lattice vibration so electrons collide more frequently and resistance rises. 4. Heating releases additional charge carriers in the semiconductor, and that increase outweighs the effect of greater lattice vibration, so resistance falls. 5. Gradient = −r (internal resistance); intercept = E (e.m.f.). 6. Total resistance = 8.0 + 1.0 = 9.0 Ω; I = 9.0 ÷ 9.0 = 1.0 A; terminal p.d. = 9.0 − (1.0 × 1.0) = 8.0 V. 7. Brighter light releases more charge carriers in the LDR's semiconductor material, and more carriers means a lower resistance, by the same conduction-electron logic used for an NTC thermistor.
