---
title: "AQA A-Level Physics (7408): Capacitance"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "capacitance-aqa-alevel"
description: "AQA A-Level Physics 7408 capacitance in depth: C = Q/V, dielectrics, stored energy, charging and discharging graphs, time constants and Required practical 9."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.7.4 Capacitance of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards): 3.7.4.1 Capacitance, 3.7.4.2 Parallel plate capacitor, 3.7.4.3 Energy stored by a capacitor and 3.7.4.4 Capacitor charge and discharge. It is **A-level only** and assessed in Paper 2.

The [Fields and their consequences study guide](/resources/aqa-a-level-physics-fields-and-their-consequences/) summarises section 3.7. For recall use the [capacitance revision notes](/resources/aqa-a-level-physics-7408-capacitance-aqa-alevel-revision-notes/); to test yourself use the [capacitance practice questions](/resources/aqa-a-level-physics-7408-capacitance-aqa-alevel-practice/). Circuit rules are in the [Electricity study guide](/resources/aqa-a-level-physics-electricity/).

Value used: ε₀ = 8.85 × 10⁻¹² F m⁻¹.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.7.4.1 | C = Q/V |
| 3.7.4.2 | C = Aε₀εᵣ/d; dielectric action; relative permittivity and dielectric constant; action of a simple polar molecule in a field |
| 3.7.4.3 | Area under a Q–V graph; E = ½QV = ½CV² = ½Q²/C |
| 3.7.4.4 | Q, V and I against t for charge and discharge; gradients and areas; time constant RC; T½ = 0.69RC; Q = Q₀e^(−t/RC) and Q = Q₀(1 − e^(−t/RC)); Required practical 9 |

## Capacitance and the parallel-plate capacitor

**Capacitance** is the charge stored per unit potential difference, C = Q/V, measured in farads (1 F = 1 C V⁻¹). "Charge stored" means the charge on one plate: the plates carry +Q and −Q.

For parallel plates of overlapping area A and separation d, **C = Aε₀εᵣ/d**. Capacitance rises with area, falls with separation, and is multiplied by the **relative permittivity** εᵣ of the material between the plates. εᵣ is also called the **dielectric constant**: it equals the capacitance with the dielectric divided by the capacitance with a vacuum.

**Dielectric action.** A polar molecule has a positive end and a negative end. In the field between the plates each molecule rotates so its positive end points towards the negative plate. Together the aligned molecules produce their own field opposing the applied field, so the resultant field and the p.d. for a given charge are smaller. Since C = Q/V, the capacitance is larger.

**Worked example 1: inserting a dielectric two ways.** An air-gap capacitor of 50 pF is charged to 100 V. A dielectric with εᵣ = 4.0 is then slid in to fill the gap, so C becomes 200 pF.

```
Before:              Q = CV = 5.0 × 10⁻⁹ C;  E = ½CV² = 2.5 × 10⁻⁷ J
Isolated (Q fixed):  V = Q/C = 5.0 × 10⁻⁹/200 × 10⁻¹² = 25 V
                     E = ½QV = 6.3 × 10⁻⁸ J  (energy falls)
Connected (V fixed): Q = CV = 200 × 10⁻¹² × 100 = 2.0 × 10⁻⁸ C
                     E = ½CV² = 1.0 × 10⁻⁶ J  (supply delivers more charge)
```

Always decide first which quantity stays fixed: an isolated capacitor keeps its charge; one connected to a supply keeps its p.d.

## Energy stored

Charging moves charge onto the plates against a p.d. that grows from 0 to V. On a graph of charge against p.d. (a straight line through the origin with gradient C), the work done is the **area under the graph**, a triangle: E = ½QV. Substituting Q = CV gives ½CV² and ½Q²/C.

Because E ∝ V², halving the p.d. leaves a quarter of the energy; to halve the energy the p.d. must fall to V/√2 = 0.71V.

**Worked example 2: a camera flash.** A 150 μF capacitor charged to 300 V stores E = ½ × 150 × 10⁻⁶ × 300² = 6.75 J. If it discharges through the lamp in 1.0 ms, the mean power is 6.75/1.0 × 10⁻³ = 6.8 kW, far more than the battery could deliver directly.

**Where the other half goes.** When a capacitor is charged from a supply of emf ε through a resistor, the supply transfers charge Q at emf ε, doing work Qε. The capacitor stores only ½Qε. The other half is dissipated in the resistance, whatever its value. Charging 1000 μF to 12 V: the supply provides 0.144 J and the capacitor stores 0.072 J.

## Charge and discharge through a resistor

**Discharge.** The current is I = V/R, and as charge leaves, V falls, so I falls too. The rate of loss is proportional to the amount remaining, which produces exponential decay of Q, V and I:

```
Q = Q₀e^(−t/RC)     V = V₀e^(−t/RC)     I = I₀e^(−t/RC)
```

**Charging** from emf ε through R. Q and V rise towards Q₀ = Cε and ε; current falls from ε/R to zero, because I = (ε − V_C)/R.

```
Q = Q₀(1 − e^(−t/RC))     V = ε(1 − e^(−t/RC))     I = I₀e^(−t/RC)
```

**Gradients and areas.** The gradient of a Q–t graph is the current. The area under an I–t graph is the charge that has flowed.

**Time constant RC** (seconds, since Ω × F = s). After one RC a discharging capacitor keeps e⁻¹ = 37% of its charge, and a charging one reaches 63%. The time to halve is T½ = RC ln 2 = 0.69RC. After about 5RC the process is effectively complete.

**Worked example 3: time to discharge to a threshold.** A 330 μF capacitor at 12 V discharges through 15 kΩ. Find when V reaches 2.0 V.

```
RC = 330 × 10⁻⁶ × 15 × 10³ = 4.95 s
2.0 = 12e^(−t/4.95)  →  t = 4.95 ln(12/2.0) = 4.95 × 1.79 = 8.9 s
T½ = 0.69 × 4.95 = 3.4 s
```

**Worked example 4: finding C from a graph.** A discharge curve through 22 kΩ falls from 10.0 V to 3.7 V in 4.4 s. Since 3.7 V is 37% of the start, RC = 4.4 s and C = 4.4/22 × 10³ = 2.0 × 10⁻⁴ F (200 μF).

### Required practical 9

Charge and discharge a capacitor through a resistor, recording V (or I) at regular intervals, by data logger or with a stopwatch for large RC. For discharge, ln V = ln V₀ − t/RC, so a graph of **ln V against t** is a straight line of gradient −1/RC. This log-linear plot uses every reading, not just one point, and makes non-exponential behaviour easy to spot. Choose R and C so that RC is long enough (tens of seconds) for manual timing.

## Common mistakes

- Forgetting to convert μF, nF or pF and kΩ.
- Treating the total charge on both plates as 2Q.
- Assuming V stays fixed when an isolated capacitor's capacitance changes.
- Confusing RC with T½.
- Using Q = Q₀e^(−t/RC) for charging.
- Labelling a log axis "ln V / V": a logarithm has no unit, so write ln(V/V).

## Exam technique for AQA command words

- **Explain** (dielectric): mention polar molecules, rotation, opposing field, lower p.d. for the same charge, larger C.
- **Show that** (energy): use the area under the Q–V graph, not just the formula.
- **Determine** (time constant from a graph): mark the 37% point, or use the gradient of ln V against t, and show the construction.
- **Sketch**: label axes, start values (Q₀, I₀), and the shape; charging current and discharging current both decay.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.4 Capacitance (A-level only).
