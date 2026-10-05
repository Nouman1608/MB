---
resourceId: "mb-ap-physcem-13.6-revision-notes"
title: "Circuits with Capacitors and Inductors (LC Circuits): Revision Notes (Physics C: E&M 13.6)"
description: "One-page recap of LC circuits for the calculus-based course: energy exchange, maximum current, the simple harmonic equation for charge, ω = 1/√(LC) and the phase of q and I."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.6-study-guide"]
learningObjectives:
  - "Recall the LC energy equation, the differential equation for q and the formulas for ω, T and I_max"
  - "Avoid phase, frequency and factor-of-change errors"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.6-study-guide", "mb-ap-physcem-13.6-practice", "mb-ap-physcem-13.6-checklist"]
next: "mb-ap-physcem-13.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "q²/(2C) + ½LI² is constant in an ideal LC circuit."
  - "d²q/dt² = −q/(LC), so ω = 1/√(LC) and T = 2π√(LC)."
  - "q and I are a quarter-cycle out of step: I_max occurs when q = 0."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/). This topic is in the calculus-based course.

## Recap

- A charged capacitor connected across an inductor (no resistor) oscillates: energy moves between the electric field and the magnetic field.
- The total energy is constant, so the maximum current follows from energy conservation alone.
- The loop rule, q/C + L dI/dt = 0 with I = dq/dt, gives the simple harmonic equation for q.
- The period depends only on L and C, not on the starting charge.
- Mass–spring analogy: q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k.
- If the oscillation starts from an inductor current I₀ with the capacitor empty, use q = Q_max sin ωt and I = I₀ cos ωt instead; the capacitor's voltage can then be much larger than the emf that first set up I₀.

## Key relationships

| Quantity | Result |
|---|---|
| Energy (constant) | q²/(2C) + ½LI² = Q₀²/(2C) |
| Maximum current | I_max = Q₀/√(LC) = ωQ₀ |
| Maximum charge from a starting current I₀ | Q_max = I₀√(LC) |
| Differential equation | d²q/dt² = −q/(LC) |
| Angular frequency | ω = 1/√(LC) (rad/s) |
| Period and frequency | T = 2π√(LC); f = 1/(2π√(LC)) |
| Starting fully charged | q = Q₀ cos ωt; I = −ωQ₀ sin ωt |
| Energies | U_C = (Q₀²/2C)cos² ωt; U_L = (Q₀²/2C)sin² ωt; each repeats every T/2 |
| Charged by a battery ℰ | Q₀ = Cℰ; I_max = ℰ√(C/L) |

## Assumptions behind the results

- No resistance anywhere, so no energy is dissipated.
- A single capacitor (or equivalent capacitance) and a single inductor.
- The switch connects the elements instantly and adds no resistance.

## Mistakes to avoid

1. **Putting I_max at full charge.** The current is zero when |q| is greatest.
2. **Confusing ω and f.** f = ω/(2π).
3. **Thinking the period depends on Q₀.** It does not.
4. **Wrong energy period.** U_C and U_L repeat every T/2.
5. **Factor-of-change slips.** Decide whether Q₀ or the voltage is fixed before scaling.
6. **Using √(L/C) as a time.** Only √(LC) is in seconds.

## Quick self-check

1. L = 0.10 H and C = 10 μF. What is ω? *(1.0 × 10³ rad/s)*
2. For that circuit, what is T? *(6.3 ms)*
3. Q₀ = 2.0 × 10⁻⁴ C in the same circuit. What is I_max? *(0.20 A)*
4. The capacitor starts fully charged. When is all the energy first in the inductor? *(At T/4)*
5. The same circuit at T/8: what fraction of the energy is in the capacitor? *(One half)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-practice/).
