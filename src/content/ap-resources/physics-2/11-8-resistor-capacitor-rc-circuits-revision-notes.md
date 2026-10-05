---
resourceId: "mb-ap-phys2-11.8-revision-notes"
title: "Resistor-Capacitor (RC) Circuits: Revision Notes (Physics 2 11.8)"
description: "One-page recap of RC circuits: series and parallel capacitors, charging and discharging behaviour, the time constant RC with its 63% and 37% benchmarks, and start and end states."
course: "physics-2"
unit: 11
topics: ["11.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys2-11.8-study-guide"]
learningObjectives:
  - "Recall the capacitor combination rules, τ = RC and the start and end behaviour of a capacitor"
  - "Spot combination, graph and time-constant errors before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-phys2-11.8-study-guide", "mb-ap-phys2-11.8-practice", "mb-ap-phys2-11.8-checklist"]
next: "mb-ap-phys2-11.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2"]
keyPoints:
  - "Parallel: C_eq = C₁ + C₂. Series: 1/C_eq = 1/C₁ + 1/C₂, with equal Q on each."
  - "Start: uncharged capacitor = wire. End: capacitor = break, zero current in its branch."
  - "τ = RC: about 63% charged, or 37% left, after one time constant."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, Figures 1–3 and the worked examples, use the [full study guide](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-study-guide/).

## Recap

- **Series capacitors** carry the **same charge** (the isolated inner plates keep a net charge of zero). Their ΔV values add. C_eq is less than the smallest capacitor.
- **Parallel capacitors** have the **same ΔV**. Their charges add.
- **Charging** through R: the current starts at ℰ/R and falls towards zero; Q, ΔV_C and stored energy rise towards their final values.
- **Discharging** through R: Q, ΔV_C, current and stored energy all fall towards zero. The current in the capacitor's branch is reversed compared with charging.
- All these changes are fast at first, then slower, and approach steady values asymptotically.
- In this course you describe and sketch these changes and calculate the start and end states. You do not model values at a given time.

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| C_eq = C₁ + C₂ + … | parallel; C in F (1 μF = 10⁻⁶ F) | combine parallel capacitors |
| 1/C_eq = 1/C₁ + 1/C₂ + … | series | combine series capacitors |
| τ = RC | Ω × F = s | compare how fast circuits charge or discharge |
| ℰ = IR + Q/C | loop rule at any instant | link current and charge while charging |
| Q = CΔV, U = ½QΔV = ½C(ΔV)² | from Topic 10.6 | final charge and stored energy |

| Moment | Capacitor (uncharged at the start) behaves like | Current in its branch |
|---|---|---|
| Just after the switch closes | a wire (ΔV_C = 0) | largest |
| After a long time (many τ) | a break | zero |

## Assumptions behind the numbers

- Batteries, wires and switches are **ideal**; resistors are ohmic.
- The capacitor starts **uncharged** when charging is described, unless stated.
- "A long time" means many time constants.

## Mistakes to avoid

1. **Using resistor rules for capacitors.** The series and parallel rules are swapped.
2. **Giving series capacitors different charges.** Same Q; the smallest C has the largest ΔV.
3. **Treating an uncharged capacitor as a break at t = 0.** It is a wire at first.
4. **Saying the capacitor is full after one τ.** About 63% only.
5. **Thinking a bigger emf shortens τ.** τ = RC only.
6. **Assuming the final ΔV_C equals the emf** when a resistor shares the loop with a current.

## Quick self-check

1. Find C_eq for 3.0 μF and 6.0 μF in series, then in parallel. *(2.0 μF; 9.0 μF)*
2. What is τ for 10 kΩ and 100 μF? *(1.0 s)*
3. An uncharged capacitor charges through a resistor from a 12 V battery. Roughly what is ΔV_C after one time constant? *(About 7.6 V, 63% of 12 V)*

Next: [practice questions](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-practice/).
