---
title: "AQA A-Level Physics (7408): Capacitance -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-Level Physics 7408 capacitance notes: C = Q/V, dielectrics, energy stored, exponential charge and discharge, time constant and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for sub-section 3.7.4 Capacitance of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards). It is A-level only and assessed in Paper 2. Worked examples are in the [capacitance study guide](/resources/aqa-a-level-physics-7408-capacitance-aqa-alevel/); test yourself with the [capacitance practice questions](/resources/aqa-a-level-physics-7408-capacitance-aqa-alevel-practice/). Section 3.7 as a whole is in the [Fields and their consequences revision notes](/resources/aqa-a-level-physics-fields-and-their-consequences-revision-notes/).

## Equations

| Equation | Meaning | Units |
|---|---|---|
| C = Q/V | capacitance | F = C V⁻¹ |
| C = Aε₀εᵣ/d | parallel-plate capacitor | F |
| E = ½QV = ½CV² = ½Q²/C | energy stored | J |
| Q = Q₀e^(−t/RC) | discharge (same form for V, I) | C |
| Q = Q₀(1 − e^(−t/RC)) | charge (same form for V) | C |
| I = I₀e^(−t/RC) | current, charging or discharging | A |
| τ = RC | time constant | s |
| T½ = 0.69RC | time to halve on discharge | s |
| ln V = ln V₀ − t/RC | log-linear form of discharge | — |

## 3.7.4.1–3.7.4.2 Capacitance and dielectrics: recall

- Capacitance = charge stored per unit p.d.; Q is the charge on **one** plate.
- C ∝ A, C ∝ 1/d, C ∝ εᵣ.
- **Relative permittivity (dielectric constant)** εᵣ = C with dielectric ÷ C with vacuum.
- **Polar molecule action**: molecules rotate, + end towards − plate → opposing field → lower p.d. for same Q → larger C.
- Isolated capacitor: **Q constant** when C changes. Connected to supply: **V constant**.

## 3.7.4.3 Energy: recall

- Energy = **area under the Q–V graph** (a triangle).
- E ∝ V²: halve V → quarter of the energy.
- To halve the energy, V falls to 0.71V.
- Charging through a resistor from emf ε: supply does work Qε; capacitor stores ½Qε; half is dissipated in the resistor.

## 3.7.4.4 Charge and discharge: recall

| Quantity | Charging | Discharging |
|---|---|---|
| Q | rises to Q₀ = Cε, 1 − e^(−t/RC) | falls from Q₀, e^(−t/RC) |
| V across C | rises to ε | falls from V₀ |
| I | falls from ε/R to 0 | falls from V₀/R to 0 (opposite direction) |

- Gradient of Q–t = current. Area under I–t = charge.
- After **1 RC**: discharge leaves 37%; charge reaches 63%.
- After **0.69 RC**: discharge leaves 50%.
- After about **5 RC**: effectively complete.
- **Finding RC from a graph**: time to fall to 0.37V₀; or time to halve ÷ 0.69; or −1/gradient of ln V against t.
- Charging: V_R + V_C = ε, so I = (ε − V_C)/R.

**Required practical 9**: record V against t for charge and discharge (data logger, or stopwatch for large RC); plot ln V against t for discharge; gradient = −1/RC.

## Rearranged forms

| To find | Use |
|---|---|
| Time to discharge from V₀ to V | t = RC ln(V₀/V) |
| Time to charge to a fraction f of ε | t = −RC ln(1 − f) |
| RC from two discharge readings | RC = Δt/ln(V₁/V₂) |
| C from constant-current charging | C = IΔt/ΔV |
| Initial current | I₀ = V₀/R (discharge) or ε/R (charge) |

## Fixed charge or fixed p.d.?

| Change to the capacitor | Isolated (Q fixed) | Connected to supply (V fixed) |
|---|---|---|
| C increases (dielectric inserted, plates closer) | V falls; energy falls | Q rises; energy rises |
| C decreases (dielectric removed, plates apart) | V rises; energy rises (work done on it) | Q falls; energy falls |

## Key terms

| Term | Meaning |
|---|---|
| Capacitance | Charge stored per unit potential difference |
| Farad | One coulomb per volt |
| Dielectric | Insulating material between the plates |
| Relative permittivity | Ratio of capacitance with dielectric to capacitance with vacuum |
| Polar molecule | Molecule with separated positive and negative ends |
| Time constant | RC; time for discharge to fall to 37% |
| Time to halve | T½ = 0.69RC |

## Exam traps

- Prefixes: μF = 10⁻⁶ F, nF = 10⁻⁹ F, pF = 10⁻¹² F; kΩ = 10³ Ω, MΩ = 10⁶ Ω.
- Plate separation in metres: 0.50 mm = 5.0 × 10⁻⁴ m.
- Charging current decays exponentially; it does not stay constant.
- T½ and RC are different: T½ = 0.69RC.
- Log axis labels: ln(V/V), with no unit.
- Discharge current flows in the opposite direction to charging current.

## Self-test

**1.** Define capacitance.
**2.** How does C change if plate separation doubles?
**3.** Explain, using polar molecules, why a dielectric increases capacitance.
**4.** A 47 μF capacitor is charged to 12 V. Find Q.
**5.** Find the energy stored in question 4.
**6.** What does the area under a Q–V graph represent?
**7.** What fraction of the initial charge remains after one time constant of discharge?
**8.** R = 100 kΩ and C = 220 μF. Find RC.
**9.** Find T½ for question 8.
**10.** What does the gradient of a ln V against t graph give?
**11.** An isolated charged capacitor has a dielectric inserted. What stays the same: Q or V?
**12.** What fraction of the energy supplied is stored when a capacitor is charged through a resistor?

## Self-test answers

**1.** Charge stored per unit potential difference, C = Q/V.
**2.** It halves.
**3.** The molecules rotate so their positive ends face the negative plate; their field opposes the applied field, so V is lower for the same Q and C = Q/V is larger.
**4.** Q = 47 × 10⁻⁶ × 12 = 5.6 × 10⁻⁴ C.
**5.** E = ½CV² = ½ × 47 × 10⁻⁶ × 144 = 3.4 × 10⁻³ J.
**6.** The energy stored.
**7.** e⁻¹, about 37%.
**8.** 22 s.
**9.** 0.69 × 22 = 15 s.
**10.** −1/RC.
**11.** Q.
**12.** One half.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.4 Capacitance (A-level only).
