---
title: "AQA A-Level Physics: Electricity (7408) -- Revision Notes"
seoTitle: "AQA A-Level Physics Electricity (7408) Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-Level Physics 7408 Electricity notes: key equations, I-V graphs, resistivity, circuit rules, potential dividers and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

Condensed for the final weeks. For full explanations and worked examples, use the [Electricity study guide](/resources/aqa-a-level-physics-electricity/).

These notes cover section 3.5 Electricity (3.5.1.1 to 3.5.1.6) of the AQA AS and A-level Physics specification (7407/7408, version 1.3, AS and A-level exams June 2016 onwards). It is AS and A-level content: at A-level it is assessed in Paper 1 and assumed in Paper 2. It is not one of the options (sections 3.9 to 3.13), one of which you study for Paper 3 Section B. Test yourself afterwards with the [practice questions](/resources/aqa-a-level-physics-electricity-practice/), the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the free [diagnostics](/diagnostics/).

## Equations

| Equation | Meaning | Units |
|---|---|---|
| I = ΔQ/Δt | current = rate of flow of charge | A = C s⁻¹ |
| V = W/Q | pd = work done per unit charge | V = J C⁻¹ |
| R = V/I | definition of resistance | Ω = V A⁻¹ |
| ρ = RA/L | resistivity | Ω m |
| R_T = R₁ + R₂ + … | resistors in series | Ω |
| 1/R_T = 1/R₁ + 1/R₂ + … | resistors in parallel | Ω |
| E = IVt | energy transferred | J |
| P = IV = I²R = V²/R | power | W |
| ε = E/Q | emf = energy transferred per unit charge by the source | V |
| ε = I(R + r) | emf with internal resistance | V |

## 3.5.1.1 Definitions

- **Current**: rate of flow of charge.
- **Potential difference**: work done per unit charge.
- **Resistance**: R = V/I, valid at any point on any I–V graph.
- **Emf**: energy transferred to electrical form per unit charge by the source.

## 3.5.1.2 I–V characteristics

| Component | Shape (I on vertical axis) | Reason |
|---|---|---|
| Ohmic conductor | Straight line through origin | R constant at constant temperature |
| Filament lamp | Gradient falls as V rises; symmetrical | Hotter filament → ions vibrate more → R rises |
| Semiconductor diode | ~0 current below a threshold pd, then steep rise; ~0 in reverse | Conducts in one direction only |

**Ohm's law**: I ∝ V under constant physical conditions. It is a special case, not a definition of resistance.

**Ideal meters** (unless told otherwise): ammeter zero resistance, voltmeter infinite resistance.

With V on the horizontal axis the lamp curve flattens; with I on the horizontal axis it steepens. Either way R rises. Read the axes first.

## 3.5.1.3 Resistivity and temperature

**Method in steps: ρ from a wire**
1. Convert the diameter to metres.
2. A = πd²/4.
3. ρ = RA/L, or ρ = gradient × A from an R against L graph.

**Ratio reminder**: R ∝ L/d². Double L → R doubles. Double d → R falls to a quarter.

- **Metals**: R increases with temperature.
- **ntc thermistors** (the only type assessed): R decreases as temperature increases. Used as **temperature sensors**; the R–T graph is a falling curve.
- **Superconductor**: zero resistivity at and below a **critical temperature**, which depends on the material. Uses: **strong magnetic fields**; **less energy loss in power transmission**. Critical field is not assessed.

**Required practical 5**: micrometer for d (several readings, several orientations); ammeter and voltmeter for R at several lengths; plot R against L; gradient = ρ/A. Small currents to avoid heating.

## 3.5.1.4 Circuit rules

| | Series | Parallel |
|---|---|---|
| Current | same everywhere | splits; branch currents add |
| Pd | shared; pds add | same across each branch |
| Total R | larger than the largest | smaller than the smallest |

- **Conservation of charge** → current into a junction = current out.
- **Conservation of energy** → round a loop, sum of emfs = sum of pds.
- **Cells in series**: emfs add (watch direction), internal resistances add.
- **n identical cells in parallel**: emf of one cell, internal resistance r/n.

**Method in steps: series–parallel network**
1. Replace each parallel group with its single equivalent resistance.
2. Add series resistances to get R_T.
3. I = V/R_T from the supply.
4. Work back out: pd across each part, then branch currents.
5. Check that branch currents add to the total and pds round each loop add to the emf.

## 3.5.1.5 Potential divider

**V_out = V_in × R₂/(R₁ + R₂)**, with V_out across R₂.

- Fixed resistors → constant output. Variable resistor → variable output.
- **Thermistor**: hotter → R falls → its share of the pd falls.
- **LDR**: brighter → R falls → its share of the pd falls.
- To make V_out rise with temperature, take it across the fixed resistor (in series with the thermistor). To make it rise in the dark, take it across the LDR.
- A load across the output is in parallel with R₂ and lowers V_out.
- The potentiometer as a measuring instrument is not required.

## 3.5.1.6 Emf and internal resistance

- ε = I(R + r) = V + Ir
- **Terminal pd** V = IR = ε − Ir. It falls as current rises.
- **Lost volts** = Ir.
- Open circuit (I = 0): terminal pd = ε.

**Required practical 6**: vary an external resistor, record terminal pd V and current I. Plot V against I: **gradient = −r**, **y-intercept = ε**.

## Small worked reminders

**Resistance from resistivity.** A wire 2.0 m long has cross-sectional area 1.0 × 10⁻⁷ m² and ρ = 1.7 × 10⁻⁸ Ω m.

```
R = ρL/A = 1.7 × 10⁻⁸ × 2.0 / 1.0 × 10⁻⁷ = 0.34 Ω
```

**Emf from two readings.** Terminal pd is 5.6 V at 0.40 A and 4.8 V at 1.20 A.

```
r = ΔV/ΔI = (5.6 − 4.8) / (1.20 − 0.40) = 1.0 Ω
ε = V + Ir = 5.6 + 0.40 × 1.0 = 6.0 V
```

**LDR divider.** A 5.0 V supply feeds a 4.0 kΩ resistor in series with an LDR; V_out is across the LDR. In light the LDR is 1.0 kΩ; in the dark it is 16 kΩ.

```
light: V_out = 5.0 × 1.0 / 5.0 = 1.0 V
dark:  V_out = 5.0 × 16 / 20 = 4.0 V
```

**Opposing cells.** A 6.0 V cell and a 1.5 V cell in series but facing opposite ways give a net emf of 6.0 − 1.5 = 4.5 V.

## Must-know distinctions

- **Emf vs pd**: emf is energy given to each coulomb by the source; pd is energy transferred from each coulomb by a component.
- **Resistance vs resistivity**: R depends on shape; ρ is a property of the material (at a given temperature).
- **R = V/I vs gradient**: on a curved graph these differ. Resistance is always V/I.
- **Metal vs ntc thermistor**: opposite temperature behaviour.
- **Cells in series vs identical cells in parallel**: series raises emf; parallel keeps emf and cuts internal resistance.

## Quick self-test

1. A charge of 4.8 C passes a point in 3.0 s. Find the current.
2. 7.5 J of work is done moving 2.5 C between two points. Find the pd.
3. Find the total resistance of three 6.0 Ω resistors in parallel.
4. A 2.0 Ω and a 3.0 Ω resistor are in series across a 10 V supply of negligible internal resistance. Find the current and the power in the 3.0 Ω resistor.
5. A wire has resistance 2.0 Ω. Find the resistance of a wire of the same material with twice the length and twice the diameter.
6. A source of emf 6.0 V and internal resistance 1.0 Ω is connected to a 5.0 Ω resistor. Find the current and the terminal pd.
7. A 12 V supply is connected across a 3.0 kΩ and a 1.0 kΩ resistor in series. Find the pd across the 1.0 kΩ resistor.
8. State what happens to the resistance of an ntc thermistor when it is heated.
9. State the resistance of an ideal voltmeter.
10. A 60 W lamp runs on 230 V for 2.0 hours. Find the current and the energy transferred.
11. State the resistivity of a superconductor below its critical temperature.
12. State what the gradient of a graph of terminal pd against current gives.

### Answers

1. I = 4.8/3.0 = **1.6 A**
2. V = 7.5/2.5 = **3.0 V**
3. 1/R = 3/6.0, so **R = 2.0 Ω**
4. I = 10/5.0 = **2.0 A**; P = I²R = 2.0² × 3.0 = **12 W**
5. R ∝ L/d²: 2.0 × 2/2² = **1.0 Ω**
6. I = 6.0/(5.0 + 1.0) = **1.0 A**; V = IR = **5.0 V**
7. V = 12 × 1.0/4.0 = **3.0 V**
8. It **decreases**.
9. **Infinite**.
10. I = 60/230 = **0.26 A**; E = Pt = 60 × 7200 = **4.3 × 10⁵ J**
11. **Zero**.
12. **−r** (minus the internal resistance).

## Where marks are usually lost

- Writing "pd is the energy per charge" without "work done" or "transferred", or confusing it with emf.
- Using the gradient of a curved I–V graph as the resistance.
- Forgetting to convert mm to m, or squaring the diameter but forgetting the ÷4 in A = πd²/4.
- Leaving 1/R_T as the answer instead of taking the reciprocal.
- Explaining the filament lamp graph without the chain: current → temperature → ion vibration → resistance.
- Describing the thermistor in the wrong direction (only ntc thermistors are assessed).
- Using the supply emf as the terminal pd when internal resistance is not negligible.
- Giving the superconductor "very low" resistance rather than zero resistivity at and below the critical temperature.
- Forgetting that a load across a potential divider output reduces V_out.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), version 1.3, 1 June 2017, for AS and A-level exams June 2016 onwards, published by AQA. Section 3.5 Electricity.
