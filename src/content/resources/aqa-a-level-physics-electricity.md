---
title: "AQA A-Level Physics: Electricity (7408)"
seoTitle: "AQA A-Level Physics Electricity (7408) Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-aqa-alevel"
  - qualification: "a-level"
    topic: "electricity-aqa-alevel"
    subtopic: "current-electricity-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 Electricity: current, I-V graphs, resistivity, circuits, potential dividers, emf and internal resistance."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.5 Electricity of the AQA AS and A-level Physics specification (7407/7408, version 1.3, AS and A-level exams June 2016 onwards). It covers every sub-section of 3.5.1 Current electricity, from 3.5.1.1 to 3.5.1.6, including Required practicals 5 and 6. Electricity is AS and A-level content, not A-level only: at A-level it is assessed in Paper 1 (sections 1 to 5 and 6.1) and is assumed knowledge in Paper 2. Sections 3.9 to 3.13 are the options, of which you study one for Paper 3 Section B; Electricity is not an option.

Follow it with the [revision notes](/resources/aqa-a-level-physics-electricity-revision-notes/) and the [practice questions](/resources/aqa-a-level-physics-electricity-practice/). The [course hub](/boards/aqa/a-level/physics/) lists every topic, the [printable checklist](/checklists/aqa/a-level/physics/) tracks each outcome, and the free [diagnostics](/diagnostics/) show where to start.

## What this topic covers

| Specification | What you must be able to do |
|---|---|
| 3.5.1.1 Basics of electricity | Current as rate of flow of charge, I = ΔQ/Δt; pd as work done per unit charge, V = W/Q; R = V/I |
| 3.5.1.2 Current–voltage characteristics | I–V graphs for an ohmic conductor, semiconductor diode and filament lamp; Ohm's law; ideal meters |
| 3.5.1.3 Resistivity | ρ = RA/L; effect of temperature on metals and ntc thermistors; superconductivity; Required practical 5 |
| 3.5.1.4 Circuits | Series and parallel resistors; E = IVt; P = IV = I²R = V²/R; cells in series and identical cells in parallel; conservation of charge and energy |
| 3.5.1.5 Potential divider | Constant or variable pd from a supply; with variable resistors, thermistors and LDRs |
| 3.5.1.6 Emf and internal resistance | ε = E/Q, ε = I(R + r); terminal pd; Required practical 6 |

Not required: the potentiometer as a measuring instrument, positive temperature coefficient thermistors, and the critical magnetic field of a superconductor.

## 3.5.1.1 Basics of electricity

**Current** is the rate of flow of charge: **I = ΔQ/Δt**. One ampere is one coulomb per second. In a metal the charge carriers are free electrons, each of charge magnitude 1.60 × 10⁻¹⁹ C.

**Potential difference** is the work done (energy transferred) per unit charge: **V = W/Q**. One volt is one joule per coulomb.

**Resistance** is defined as **R = V/I**. One ohm is one volt per ampere. This definition holds for any component at any instant, even when R is not constant.

### Worked example 1

A charge of 36 C flows through a resistor in 2.0 minutes. The pd across it is 12 V. Find the current, the number of electrons passing per second, the energy transferred and the resistance.

```
I = ΔQ/Δt = 36 / 120 = 0.30 A
electrons per second = 0.30 / 1.60 × 10⁻¹⁹ = 1.9 × 10¹⁸
W = QV = 36 × 12 = 432 J
R = V/I = 12 / 0.30 = 40 Ω
```

## 3.5.1.2 Current–voltage characteristics

Questions can put either I or V on the horizontal axis, so check the axes first.

- **Ohmic conductor** (for example a metal wire at constant temperature): a straight line through the origin. I ∝ V, so R is constant.
- **Filament lamp**: a straight line near the origin, then a curve. With I on the vertical axis, the gradient decreases as V rises. A larger current heats the filament, the metal ions vibrate more, the charge carriers collide with them more often, and the resistance rises. The graph is symmetrical for reversed pd.
- **Semiconductor diode**: in forward bias almost no current flows until the pd reaches a small threshold pd; above it the current rises steeply. In reverse bias the resistance is very high and the current is close to zero.

**Ohm's law** is a special case: I ∝ V under constant physical conditions, such as constant temperature. A filament lamp does not obey it because its temperature changes.

Unless a question says otherwise, treat **ammeters as ideal (zero resistance)** and **voltmeters as ideal (infinite resistance)**.

### Worked example 2

A filament lamp carries 0.20 A at 1.0 V and 0.50 A at 6.0 V. Find its resistance at each point.

```
at 1.0 V: R = 1.0 / 0.20 = 5.0 Ω
at 6.0 V: R = 6.0 / 0.50 = 12 Ω
```

The hotter filament has more than double the resistance. Use R = V/I at the point, not the gradient.

## 3.5.1.3 Resistivity

Resistance depends on the material and the shape: R = ρL/A. **Resistivity** is

**ρ = RA/L**, unit Ω m

where L is the length and A the cross-sectional area. For a wire of diameter d, A = πd²/4.

### Worked example 3

A wire 0.800 m long with diameter 0.32 mm has a resistance of 4.9 Ω. Find the resistivity of the material.

```
A = π × (0.32 × 10⁻³)² / 4 = 8.04 × 10⁻⁸ m²
ρ = RA/L = 4.9 × 8.04 × 10⁻⁸ / 0.800 = 4.9 × 10⁻⁷ Ω m
```

A quick ratio check: a wire of the same material with twice the length and half the diameter has a quarter of the area, so R rises by a factor of 2 × 4 = 8.

### Temperature effects

- **Metal conductors**: resistance increases as temperature rises, because the ions vibrate more and impede the charge carriers.
- **ntc thermistors** (only negative temperature coefficient thermistors are assessed): resistance decreases as temperature rises, because more charge carriers are released.

Thermistors are used as **temperature sensors**. A **resistance–temperature graph** for an ntc thermistor is a curve falling steeply at low temperature and levelling off at high temperature. You can investigate it by heating the thermistor in a water bath and measuring R at a range of temperatures.

### Superconductivity

A **superconductor** is a material that has **zero resistivity at and below a critical temperature**, which depends on the material. Applications:

- producing **strong magnetic fields** (large currents in superconducting coils)
- **reducing energy loss** in the transmission of electric power.

### Required practical 5: resistivity of a wire

1. Measure the diameter with a **micrometer** at several points and in different orientations; take the mean and find A.
2. Clamp the wire along a metre rule. Connect it in series with an ammeter and connect a voltmeter across the section between two crocodile clips.
3. For a range of lengths L, record V and I and calculate R = V/I.
4. Plot R against L. The gradient is ρ/A, so **ρ = gradient × A**.
5. Use small currents and switch off between readings so the wire does not heat up. A non-zero intercept suggests contact resistance; the gradient method is unaffected.

Because d is small its percentage uncertainty is often the largest, and it doubles in A. See the [measurements revision notes](/resources/aqa-a-level-physics-measurements-revision-notes/) for combining uncertainties.

## 3.5.1.4 Circuits

| Arrangement | Current | Pd | Resistance |
|---|---|---|---|
| Series | Same through each | Shared: V = V₁ + V₂ + … | R_T = R₁ + R₂ + R₃ + … |
| Parallel | Shared: I = I₁ + I₂ + … | Same across each branch | 1/R_T = 1/R₁ + 1/R₂ + 1/R₃ + … |

These rules follow from:

- **Conservation of charge**: the total current into a junction equals the total current out.
- **Conservation of energy**: around any closed loop, the sum of the emfs equals the sum of the pds.

**Energy and power**: E = IVt, and P = IV = I²R = V²/R.

**Cells**: in series, emfs add (taking direction into account) and internal resistances add. For n **identical cells in parallel**, the emf equals that of one cell and the internal resistance is r/n. Three cells of emf 1.5 V and internal resistance 0.30 Ω give 4.5 V and 0.90 Ω in series, or 1.5 V and 0.10 Ω in parallel.

### Worked example 4

An 18 V supply with negligible internal resistance is connected to a 6.0 Ω resistor in series with a parallel pair of 12 Ω and 4.0 Ω. Find the current from the supply, the current in each parallel resistor, and the power in the 4.0 Ω resistor.

```
parallel pair: 1/R = 1/12 + 1/4.0  →  R = 3.0 Ω
total: R_T = 6.0 + 3.0 = 9.0 Ω
I = 18 / 9.0 = 2.0 A
pd across 6.0 Ω = 2.0 × 6.0 = 12 V, so pd across pair = 18 − 12 = 6.0 V
I(12 Ω) = 6.0 / 12 = 0.50 A ;  I(4.0 Ω) = 6.0 / 4.0 = 1.5 A   (sum 2.0 A ✓)
P(4.0 Ω) = V²/R = 6.0² / 4.0 = 9.0 W
```

The energy transferred in the 6.0 Ω resistor in 5.0 minutes is E = IVt = 2.0 × 12 × 300 = 7200 J.

## 3.5.1.5 Potential divider

Resistors in series across a supply share its pd in the ratio of their resistances:

**V_out = V_in × R₂ / (R₁ + R₂)**, where V_out is taken across R₂.

Fixed resistors give a **constant** output. Replacing one with a **variable resistor** gives a **variable** output. Replacing one with a **thermistor** or an **LDR** (whose resistance falls as light intensity rises) makes the output depend on temperature or light, which is how simple sensing circuits work.

### Worked example 5

A 9.0 V supply is connected across a 2.2 kΩ fixed resistor in series with an ntc thermistor. V_out is taken across the fixed resistor. The thermistor's resistance is 1.8 kΩ at 20 °C and 0.60 kΩ at 60 °C. Find V_out at each temperature.

```
20 °C: V_out = 9.0 × 2.2 / (2.2 + 1.8) = 4.95 V ≈ 5.0 V
60 °C: V_out = 9.0 × 2.2 / (2.2 + 0.60) = 7.1 V
```

V_out rises as it warms, because the thermistor takes a smaller share of the pd. Taking V_out across the thermistor reverses this. A load across the output is in parallel with that resistor, lowering the combined resistance and so V_out.

## 3.5.1.6 Electromotive force and internal resistance

**Emf** is the energy transferred to electrical form per unit charge passing through the source: **ε = E/Q**. Real sources have **internal resistance r**, which transfers some energy inside the source.

**ε = I(R + r)**, or ε = V + Ir

where V = IR is the **terminal pd** and Ir is the pd across the internal resistance (often called the "lost volts"). The terminal pd falls as the current increases.

### Worked example 6

A cell of emf 1.50 V and internal resistance 0.50 Ω is connected to a 2.5 Ω resistor.

```
I = ε / (R + r) = 1.50 / 3.0 = 0.50 A
terminal pd V = IR = 0.50 × 2.5 = 1.25 V
lost volts = Ir = 0.25 V   (1.25 + 0.25 = 1.50 ✓)
power wasted in the cell = I²r = 0.125 W
```

### Required practical 6: emf and internal resistance

Connect the cell in series with an ammeter and a variable resistor, with a voltmeter across the cell. Vary the resistance and record V and I. Rearranging ε = V + Ir gives

**V = −rI + ε**

so a graph of V against I is a straight line with **gradient −r** and **y-intercept ε**. Keep currents small and switch off between readings so r does not change as the cell warms.

With only two readings, for example V = 1.40 V at 0.20 A and V = 1.10 V at 0.80 A: r = (1.40 − 1.10)/(0.80 − 0.20) = 0.50 Ω and ε = 1.40 + 0.20 × 0.50 = 1.50 V.

## Common errors

- Taking resistance from the gradient of a curved I–V graph.
- Forgetting mm → m before squaring in A = πd²/4.
- Adding resistances in parallel, or forgetting to take the reciprocal at the end.
- Saying an ntc thermistor's resistance rises with temperature.
- Taking ε as the reading on a voltmeter across a cell that is supplying current.
- Giving the gradient of V against I as +r rather than −r.

## Next steps

Use the [revision notes](/resources/aqa-a-level-physics-electricity-revision-notes/), then the [practice questions](/resources/aqa-a-level-physics-electricity-practice/). See the [exam preparation guide](/resources/aqa-a-level-physics-exam-preparation/) and the free [diagnostics](/diagnostics/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), version 1.3, 1 June 2017, for AS and A-level exams June 2016 onwards, published by AQA. Section 3.5 Electricity.
