---
resourceId: "mb-ap-physcem-11.8-revision-notes"
title: "Resistor-Capacitor (RC) Circuits: Revision Notes (Physics C: E&M 11.8)"
description: "One-page recap of RC circuits for the calculus-based course: series and parallel capacitors, charging and discharging equations, the time constant, and initial and steady states."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.8-study-guide"]
learningObjectives:
  - "Recall the capacitor combination rules and the RC charging and discharging equations"
  - "Spot sign, time-constant and initial-state errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.8-study-guide", "mb-ap-physcem-11.8-practice", "mb-ap-physcem-11.8-checklist"]
next: "mb-ap-physcem-11.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Parallel capacitors add; series capacitors add as reciprocals and share the same charge."
  - "τ = RC: 63% charged, or 37% left, after one time constant."
  - "Uncharged capacitor at t = 0: a wire. After a long time: a break."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the figures and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/).

## Recap

- Capacitors in **parallel** have the same ΔV; in **series** they have the same Q, because the joined inner plates form an isolated, neutral conductor.
- Series C_eq is less than the smallest capacitance in the group.
- The loop rule plus I = ±dq/dt gives a first-order differential equation. Its solutions are exponentials with time constant τ = RC.
- Current is largest just after the switch moves and decays towards zero, whether charging or discharging.
- After times much longer than τ (about 5τ), use steady-state conditions: no current in the capacitor branch.

## Key relationships

| Situation | Result |
|---|---|
| Parallel | C_eq = C₁ + C₂ + … |
| Series | 1/C_eq = 1/C₁ + 1/C₂ + … |
| Charging equation | R dq/dt + q/C = ℰ |
| Charging solution | q = Cℰ(1 − e^(−t/RC)); I = (ℰ/R)e^(−t/RC) |
| Discharging equation | R dq/dt + q/C = 0 (I = −dq/dt) |
| Discharging solution | q = Q₀e^(−t/RC); ΔV_C and I have the same factor e^(−t/RC) |
| Time constant | τ = RC (Ω·F = s); 1 − e⁻¹ ≈ 0.63, e⁻¹ ≈ 0.37 |
| Energy | U = ½CΔV²; when charging, half of Cℰ² is stored and half dissipated |
| Linear graph | ln ΔV_C = ln ΔV₀ − t/(RC), slope −1/(RC) |

## Just after and long after

| Moment | Capacitor behaves like | Current in its branch | ΔV_C |
|---|---|---|---|
| Just after closing, uncharged | a wire | largest (set by the resistors) | 0 |
| Just after, already charged | a battery of its present ΔV | jumps at once (ΔV/R if it discharges through a single resistor R) | unchanged |
| Long after (t ≫ τ) | a break | 0 | its steady-state value |

## Assumptions

- Ideal battery, wires and meters unless stated; capacitors start uncharged unless stated.
- The resistance and capacitance stay constant.

## Mistakes to avoid

1. **Treating series capacitors like series resistors.** Reciprocals for series capacitors.
2. **"Half charged after τ."** It is 63%; half takes 0.69τ.
3. **Blocking current at t = 0.** An uncharged capacitor acts like a wire at first.
4. **Using the wrong R.** τ uses the resistance the capacitor charges or discharges through.
5. **Energy falling like charge.** U ∝ q², so U decays as e^(−2t/RC).

## Quick self-check

1. What is τ for R = 2.0 kΩ and C = 3.0 μF? *(6.0 ms)*
2. What is C_eq for 3.0 μF and 6.0 μF in series? In parallel? *(2.0 μF; 9.0 μF)*
3. What fraction of its charge does a discharging capacitor keep after 3τ? *(e⁻³ ≈ 0.050, about 5%)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-practice/).
