---
title: "OxfordAQA International AS and A-level Physics: Current, p.d., resistance, I-V characteristics and resistivity (9630)"
seoTitle: "OxfordAQA A-level Physics Current, I-V and Resistivity"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Current, p.d., resistance, I-V characteristics and resistivity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 105
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "basics-of-electricity-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "current-voltage-characteristics-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "resistivity-oxfordaqa-alevel"
description: "Study guide to current, p.d., resistance, I-V characteristics, resistivity, thermistors and superconductors for OxfordAQA AS and A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards. It covers sections 3.4.1 (Basics of electricity), 3.4.2 (Current-voltage characteristics) and 3.4.3 (Resistivity). This is shared International AS and A-level content, so it applies to both qualifications. Use it with the [course hub](/boards/oxfordaqa/a-level/physics/) and tick off each point on the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Companion pages: the [revision notes](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and-practice/). Unit handling and uncertainty are in [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/). If you are not sure where you stand, try the [free diagnostics](/diagnostics/) first.

## What these sections ask you to do

| Section | Specification content | What you must be able to do |
|---|---|---|
| 3.4.1 | I = ΔQ/Δt; V = W/Q; R = V/I | Define current, potential difference and resistance and use all three equations |
| 3.4.2 | Characteristics of an ohmic conductor, a semiconductor diode and a filament lamp | Recognise, sketch and explain each graph, with I or V on either axis |
| 3.4.2 | Ohm's law; ideal meters | State the law with its condition; treat meters as ideal unless told otherwise |
| 3.4.3 | ρ = RA/L | Calculate resistance, resistivity or dimensions, and find ρ from a graph |
| 3.4.3 | Effect of temperature on metals and ntc thermistors | Describe it qualitatively and read resistance-temperature graphs |
| 3.4.3 | Thermistor uses; superconductivity | Explain temperature sensing, critical temperature and two applications |

## 3.4.1 Current, potential difference and resistance

**Current** is the rate of flow of charge. In a metal the moving charges are electrons, but the equation works for any charge carrier:

I = ΔQ/Δt

One ampere is one coulomb of charge passing a point each second. If the current is constant, ΔQ = I × Δt. Charge is quantised, so ΔQ = N × e for N electrons, where e = 1.60 × 10⁻¹⁹ C.

**Potential difference (p.d.)** between two points is the work done per unit charge moving between them:

V = W/Q

The volt is defined as 1 J C⁻¹. The work W is the energy transferred from electrical energy to other forms, so a 5.5 V lamp transfers 5.5 J to light and heat for every coulomb that passes through it.

**Resistance** measures how hard it is to push current through a component:

R = V/I

The ohm is 1 V A⁻¹. It is the ratio of p.d. across a component to the current through it, at that instant. It is not automatically the gradient of a graph.

### Worked example 1: charge and electrons

A steady current of 0.35 A flows for 12 minutes. Find the charge and the number of electrons passing a point.

1. Convert the time: t = 12 × 60 = 720 s.
2. Q = It = 0.35 × 720 = 252 C.
3. N = Q/e = 252 / (1.60 × 10⁻¹⁹) = 1.575 × 10²¹, so **N ≈ 1.6 × 10²¹ electrons**.

### Worked example 2: energy and resistance of a lamp

A lamp has 5.5 V across it and carries 2.4 A for 90 s. Find the charge, the energy transferred and the resistance.

1. Q = It = 2.4 × 90 = **216 C**.
2. W = VQ = 5.5 × 216 = **1188 J** (1.2 kJ to 2 s.f.).
3. R = V/I = 5.5 / 2.4 = **2.3 Ω**.

Always check units. Time must be in seconds, and milliamps and kilo-ohms must be converted before you substitute.

## 3.4.2 Current-voltage characteristics

An I-V characteristic is a graph of the current through a component against the p.d. across it. Unless the question says otherwise, treat the ammeter as ideal (zero resistance) and the voltmeter as ideal (infinite resistance). Then the ammeter does not change the current and the voltmeter takes no current from the component.

To plot a characteristic you need a power supply whose output you can vary, with the ammeter in series with the component and the voltmeter in parallel across it. Take readings in both directions, so the polarity must be reversible. Wait a moment at each setting for the component to settle.

### Ohmic conductor

For a metal wire or resistor at constant temperature the graph is a straight line through the origin. I is directly proportional to V, so the resistance is constant.

**Ohm's law:** for a conductor, doubling the p.d. across it doubles the current through it, so long as physical conditions such as temperature are unchanged. Ohm's law is a special case. Many components do not obey it, but R = V/I still defines their resistance at any point.

### Filament lamp

The line curves towards the horizontal axis. As the p.d. rises, the current rises more slowly. The graph is symmetrical about the origin: reversing the p.d. reverses the current but gives the same magnitudes.

The explanation: a bigger current makes the filament hotter. Its lattice of positive ions oscillates more vigorously, so free electrons suffer more frequent collisions and drift more slowly for a given p.d. Resistance increases with temperature, and R = V/I gets bigger as V gets bigger. The lamp does not obey Ohm's law because the temperature does not stay constant.

### Semiconductor diode

A diode conducts in one direction only.

| Region | Behaviour |
|---|---|
| Forward bias, below about 0.6 V (silicon) | Almost no current |
| Forward bias, above the threshold | Current rises steeply; resistance falls rapidly |
| Reverse bias | Current is negligible; resistance is very large |

The threshold of roughly 0.6 V applies to silicon diodes, and you will normally be given any value you need.

### Which axis?

Questions can put I or V on the horizontal axis. Read the labels before you read the graph.

| Axes | Ohmic gradient | Resistance at a point |
|---|---|---|
| I (y) against V (x) | 1/R | R = V/I, read both values from the point |
| V (y) against I (x) | R | R = V/I, read both values from the point |

For a curve, never take R as the gradient or as the reciprocal of the gradient. Use the coordinates of the point: R = V/I.

### Worked example 3: resistance of a lamp from a table

| V / V | 0 | 1.0 | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|---|---|
| I / A | 0 | 0.10 | 0.17 | 0.25 | 0.31 | 0.36 | 0.40 |

Calculate R at each non-zero point and comment.

R = V/I gives 10 Ω, 11.8 Ω, 16 Ω, 19.4 Ω, 22.2 Ω and 25 Ω. The resistance rises as V increases because the filament gets hotter. A constant R would indicate an ohmic conductor.

### Worked example 4: swapped axes

A graph of V (vertical) against I (horizontal) for a resistor is a straight line through the origin passing through (0.040 A, 5.0 V). The gradient is 5.0/0.040 = **125 Ω**, which equals R. If the same data were plotted with I vertical, the gradient would be 1/125 = 8.0 × 10⁻³ S, and R would be found as the reciprocal.

## 3.4.3 Resistivity

For a uniform conductor, resistance depends on the material and its shape:

R = ρL/A, so **ρ = RA/L**

Here L is the length (m), A is the cross-sectional area (m²) and ρ is the resistivity in ohm metres (Ω m). Resistivity depends on the material and its temperature. Resistance depends on the actual sample, including its size.

Doubling the length doubles R. Doubling the diameter increases A by a factor of four, so R falls to a quarter. For a round wire, A = πd²/4.

### Worked example 5: resistance of a wire

A nichrome wire has length 2.40 m and diameter 0.30 mm. Its resistivity is 1.1 × 10⁻⁶ Ω m (given). Find its resistance.

1. d = 0.30 × 10⁻³ m, so A = π(0.15 × 10⁻³)² = 7.07 × 10⁻⁸ m².
2. R = ρL/A = (1.1 × 10⁻⁶ × 2.40) / (7.07 × 10⁻⁸) = **37 Ω**.

### Worked example 6: resistivity from a graph

A wire of diameter 0.250 mm is tested at several lengths L. Plotting R against L produces a straight line from the origin whose gradient is 7.8 Ω m⁻¹. Find ρ.

1. R = (ρ/A) L, so the gradient is ρ/A.
2. A = π(0.125 × 10⁻³)² = 4.91 × 10⁻⁸ m².
3. ρ = gradient × A = 7.8 × 4.91 × 10⁻⁸ = **3.8 × 10⁻⁷ Ω m**.

The diameter is the dominant source of uncertainty because it is squared. Measure it at several places along the wire and in two perpendicular directions.

## Temperature and resistance

### Metals

Resistance of a metal conductor increases as temperature rises. Greater vibration of the positive ions means more frequent electron-ion collisions. The number of free electrons per unit volume hardly changes, so the net effect is higher resistivity.

### Negative temperature coefficient (ntc) thermistors

Only ntc thermistors are on the specification. Their resistance falls as temperature rises. The thermistor is made of semiconducting material, so heating releases more charge carriers. More carriers means a larger current for the same p.d., which outweighs the extra lattice vibration.

On a graph of resistance against temperature, an ntc thermistor gives a falling curve that flattens as it gets hotter. Be ready to read values from it.

### Worked example 7: reading a thermistor

An ntc thermistor has resistance 5.0 kΩ at 20 °C and 1.1 kΩ at 60 °C (given). It is connected across a 5.0 V supply with an ideal ammeter in series.

At 20 °C: I = 5.0 / 5000 = 1.0 mA. At 60 °C: I = 5.0 / 1100 = 4.5 mA. The current rises as temperature rises, so the ammeter reading could be calibrated as a temperature scale.

### Temperature sensors

Put an ntc thermistor in series with a fixed resistor and a cell. When the surroundings warm up, the thermistor's resistance falls, the current rises, and the p.d. across the fixed resistor rises. A voltmeter across the fixed resistor therefore acts as a temperature sensor. Examples include thermostats and fire or engine-temperature monitoring.

## Superconductivity

A **superconductor** is a material whose resistivity is zero at and below a **critical temperature**, Tc, which depends on the material. Above Tc it behaves as an ordinary conductor. In a resistivity-temperature graph the line drops abruptly to zero at Tc. Mercury, for example, becomes superconducting at about 4 K, so it must be cooled with liquid helium.

Because R = 0, a current carries no energy loss as heat. Two applications are on the specification:

- **Strong magnetic fields.** A large current in a superconducting coil produces a very strong field without the coil overheating, as in MRI scanners and particle accelerators.
- **Reducing energy loss in power transmission.** A superconducting cable would waste no energy as heat. The cooling cost is the main limit.

The critical field is not assessed.

## Common errors

- Writing R as the gradient of a curved I-V graph, or using 1/gradient on a V-I graph.
- Saying the lamp's resistance rises "because current increases". The cause is the temperature rise.
- Forgetting the squared term: using the diameter instead of the area in ρ = RA/L, or radius for diameter.
- Saying a thermistor's resistance rises with temperature. For the ntc thermistors on this specification it falls.
- Forgetting to convert mA, kΩ, mm and minutes before substituting.
- Describing a superconductor as having "very low" rather than zero resistivity.

## Official syllabus

Source: OxfordAQA International AS and A-level Physics (9630), Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.4.1 to 3.4.3, shared International AS and A-level content.
