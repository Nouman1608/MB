---
resourceId: "mb-ap-physcem-13.5-revision-notes"
title: "Circuits with Resistors and Inductors (LR Circuits): Revision Notes (Physics C: E&M 13.5)"
description: "One-page recap of LR circuits for the calculus-based course: the loop equation, τ = L/R, growth and decay formulas, switching rules and where the stored energy goes."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.5-study-guide"]
learningObjectives:
  - "Recall the LR loop equation, its solutions and the meanings of τ = L/R"
  - "Apply the just-after and long-after rules for inductors without hesitation"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.5-study-guide", "mb-ap-physcem-13.5-practice", "mb-ap-physcem-13.5-checklist"]
next: "mb-ap-physcem-13.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ℰ = IR + L dI/dt for a series LR circuit."
  - "τ = L/R: 63% of the final current after one τ when growing, 37% of the starting current when decaying."
  - "Just after switching, the inductor keeps its current; long after, it is a plain wire."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/). This topic is in the calculus-based course.

## Recap

- An inductor's emf opposes the **change** in current: ℰ_L = −L dI/dt.
- Its current **cannot jump**. Just after a switch moves, it has its old value; an inductor with zero current acts like an open branch.
- The induced emf just after switching is equal in size and opposite in direction to the potential difference applied across the inductor's branch.
- After a long time (several τ), the current is steady and the inductor acts as a wire with zero resistance.
- Current, inductor voltage and stored energy all change exponentially between these two states.
- The resistor dissipates the energy the inductor stored.

## Key relationships

| Situation | Result |
|---|---|
| Loop rule, series ℰ, R, L | ℰ = IR + L dI/dt |
| Time constant | τ = L/R (H/Ω = s) |
| Growth from zero | I = (ℰ/R)(1 − e^(−t/τ)); V_L = ℰe^(−t/τ) |
| Initial rate of growth | dI/dt = ℰ/L; at this rate I would reach ℰ/R at t = τ |
| Decay from I₀ (no battery) | I = I₀e^(−t/τ) |
| After one τ | growth: 0.63 of final; decay: 0.37 of start |
| Energy stored | U_L = ½LI²; during decay U ∝ e^(−2t/τ) |
| Energy balance | ℰI = I²R + d/dt(½LI²) |
| Energy dissipated in a decay | ∫I²R dt = ½LI₀² |

## Assumptions behind the results

- Ideal inductor (no resistance in its windings) unless a resistance is given; a real coil's resistance adds to R.
- Ideal battery (no internal resistance) unless stated.
- Straight connecting wires have negligible inductance.

## Mistakes to avoid

1. **Letting the inductor current jump.** It is continuous; other branch currents can jump.
2. **τ = RL or R/L.** It is L/R.
3. **"Final value after one τ."** Only 63%; allow about 5τ.
4. **Same τ for growth and decay.** Use the resistance in the loop the inductor's current actually flows through.
5. **Forgetting direction.** When a switch opens, the inductor current can reverse the current in a parallel resistor.
6. **Energy decays with τ.** It decays with τ/2, because U ∝ I².

## Quick self-check

1. L = 0.50 H and R = 25 Ω. What is τ? *(20 ms)*
2. A series LR circuit has ℰ = 6.0 V and R = 30 Ω. What is the current a long time after switching on? *(0.20 A)*
3. A current of 2.0 A decays through a resistor. What is it after 2τ? *(2.0e⁻² ≈ 0.27 A)*
4. Just after closing the switch in a series LR circuit, what is the potential difference across the inductor? *(ℰ, the full battery emf)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-practice/).
