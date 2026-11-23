---
title: "OxfordAQA A-Level Physics (9630): Resistivity"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "resistivity-oxfordaqa-alevel"
description: "Study guide to OxfordAQA 9630 section 3.4.3: resistivity calculations and measurement, temperature effects on metals and ntc thermistors, superconductivity."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.3, Resistivity, in Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.1 to 3.4.3 are taught together in the [current, p.d., resistance, I-V characteristics and resistivity study guide](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and/). After this page, condense it with the [resistivity revision notes](/resources/oxfordaqa-a-level-physics-9630-resistivity-revision-notes/) and test yourself with the [resistivity practice questions](/resources/oxfordaqa-a-level-physics-9630-resistivity-practice/).

## What the specification asks for

| Statement in 3.4.3 | What you must be able to do |
|---|---|
| Resistivity ρ = RA/L | Use and rearrange the equation for wires and other uniform conductors |
| Qualitative effect of temperature on the resistance of metal conductors and thermistors (ntc only) | Describe and explain both effects |
| Applications of thermistors: temperature sensors and resistance-temperature graphs | Read R-T graphs and explain sensor use |
| Superconductivity: zero resistivity at and below a critical temperature that depends on the material | Define and explain the term |
| Applications: strong magnetic fields; reducing energy loss in power transmission | Explain both applications |

Critical magnetic field is not assessed.

## Resistivity as a material property

The resistance of a uniform conductor is proportional to its length L and inversely proportional to its cross-sectional area A. The constant linking them is the resistivity of the material:

R = ρL/A, so ρ = RA/L

The unit is Ω m (from Ω × m² / m). Resistance belongs to one object; resistivity belongs to the material at a given temperature. As rough guides, good metallic conductors such as copper have resistivities of order 10⁻⁸ Ω m, alloys used in heating elements around 10⁻⁶ Ω m, and insulators many orders of magnitude higher.

### Worked example 1: designing a heating element

A heating element must have resistance 15 Ω. It is made from alloy wire of diameter 0.40 mm and resistivity 1.1 × 10⁻⁶ Ω m. Find the length needed.

A = π(d/2)² = π × (0.20 × 10⁻³)² = 1.26 × 10⁻⁷ m².

L = RA/ρ = 15 × 1.26 × 10⁻⁷ / 1.1 × 10⁻⁶ = **1.7 m**.

### Worked example 2: stretching a wire

A copper wire of length 2.0 m has resistance 0.50 Ω. It is drawn out uniformly to a length of 3.0 m. Find its new resistance.

The volume of copper stays the same, so A × L is constant. The length rises by a factor of 1.5, so the area falls by a factor of 1.5.

R ∝ L/A, so R rises by 1.5 × 1.5 = 2.25. New R = 0.50 × 2.25 = **1.1 Ω**.

This "constant volume" step is the usual trap: changing the length alone would give only 0.75 Ω.

### Worked example 3: a rectangular strip

A metal strip is 50 mm long with a rectangular cross-section 2.0 mm wide and 0.10 mm thick. Its resistivity is 2.8 × 10⁻⁸ Ω m. Find its resistance along its length.

A = 2.0 × 10⁻³ × 0.10 × 10⁻³ = 2.0 × 10⁻⁷ m².

R = ρL/A = 2.8 × 10⁻⁸ × 0.050 / 2.0 × 10⁻⁷ = **7.0 × 10⁻³ Ω**.

The length in the equation is the distance the current travels, and A is the area perpendicular to it. If the current crossed the thickness instead, L would be 0.10 mm and A would be 50 mm × 2.0 mm, giving a far smaller resistance.

## Finding resistivity by experiment

A practical approach measures the resistance of different lengths of the same wire.

1. Measure the diameter with a micrometer at several points and in two perpendicular directions; find the mean and A = πd²/4.
2. Connect a length of the wire with a crocodile clip and measure R for several lengths, from the current and pd (R = V/I) or with an ohmmeter.
3. Keep the current small so the wire does not heat up and change its resistance.
4. Plot R against L. The gradient is ρ/A, so ρ = gradient × A.

### Worked example 4: from a graph

A graph of R against L for a wire of diameter 0.315 mm is a straight line with gradient 3.2 Ω m⁻¹ and an intercept of 0.20 Ω on the R axis.

A = π × (0.1575 × 10⁻³)² = 7.79 × 10⁻⁸ m².

ρ = gradient × A = 3.2 × 7.79 × 10⁻⁸ = **2.5 × 10⁻⁷ Ω m**.

The intercept shows a constant extra resistance, such as the contacts or leads. It shifts the line but does not change the gradient, which is why the graph method is better than using a single length.

## Temperature and resistance

### Metal conductors

The resistance of a metal increases as its temperature rises. The number of free electrons does not change significantly, but the positive ions in the lattice vibrate with greater amplitude, so electrons collide with them more often. This reduces the rate at which charge flows for a given pd.

### Ntc thermistors

An ntc (negative temperature coefficient) thermistor is made from a semiconductor. As its temperature rises, its resistance falls, usually steeply. Heating releases more charge carriers, and this outweighs the increase in lattice vibrations. Only ntc thermistors are required.

### Worked example 5: reading resistance-temperature data

An ntc thermistor has these resistances: 0 °C, 16 kΩ; 20 °C, 6.0 kΩ; 40 °C, 2.6 kΩ; 60 °C, 1.2 kΩ. It is connected alone across a 5.0 V supply.

Current at 20 °C = 5.0 / 6.0 × 10³ = 0.83 mA; at 60 °C = 5.0 / 1.2 × 10³ = 4.2 mA.

From 0 °C to 20 °C the resistance falls by 10 kΩ; from 40 °C to 60 °C it falls by only 1.4 kΩ. The graph is a curve, steep at low temperatures, so the thermistor is most sensitive (largest change in R per degree) at the cold end of this range.

### Temperature sensors

A thermistor's resistance tells you its temperature, so it can be used as a sensor. In practice it is placed in a potential divider (section 3.4.5) so that the change in resistance becomes a change in output pd, which can be read by a meter or used to switch a circuit. The resistance-temperature graph is the calibration: read the temperature corresponding to a measured resistance.

## Superconductivity

A superconductor is a material whose resistivity becomes **zero** at and below its **critical temperature**. Each material has its own critical temperature; for many metals it is only a few kelvin, while some ceramic materials remain superconducting above 77 K, the temperature of liquid nitrogen. Above the critical temperature the material has a normal, non-zero resistivity.

Zero resistivity means a current flows with no energy transferred to heating. The two applications in the specification follow from this:

- **Strong magnetic fields.** Very large currents can flow in superconducting coils without heating them, producing strong magnetic fields, as used in hospital MRI scanners and particle accelerators.
- **Reducing energy loss in power transmission.** Power lost as heat in a cable is I²R. With zero resistance this loss would be zero, although the cable must be kept below its critical temperature, which needs cooling.

## Common mistakes

- Using the diameter as the radius, or the area of the wrong face of a strip.
- Forgetting that drawing a wire out also reduces its area.
- Writing the unit of resistivity as Ω m⁻¹ or Ω.
- Saying a thermistor's resistance falls because its "electrons have more energy" without mentioning more charge carriers.
- Stating that superconductors have "very low" resistance: it is zero.
- Saying a superconductor works at any temperature below room temperature.

## Exam technique

- **Calculate**: convert every length to metres and every area to m² before substituting.
- **Explain** the effect of temperature on a metal: lattice vibrations → more collisions → resistance rises.
- **Explain** an ntc thermistor: more charge carriers released as temperature rises → resistance falls.
- **Define** superconductivity: zero resistivity at and below a critical temperature.
- **Describe** an application: state the property used (zero resistance, so no heating) and the benefit.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.3 Resistivity, published by OxfordAQA.
