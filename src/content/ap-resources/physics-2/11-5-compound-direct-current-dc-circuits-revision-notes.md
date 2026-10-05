---
resourceId: "mb-ap-phys2-11.5-revision-notes"
title: "Compound Direct Current (DC) Circuits: Revision Notes (Physics 2 11.5)"
description: "One-page recap of series and parallel rules, equivalent resistance, network reduction, emf and internal resistance, terminal voltage and ideal versus real meters."
course: "physics-2"
unit: 11
topics: ["11.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys2-11.5-study-guide"]
learningObjectives:
  - "Recall the series and parallel rules and ΔV_terminal = ℰ − Ir"
  - "Spot connection, inversion and meter errors before making them"
skills: ["1", "2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-phys2-11.5-study-guide", "mb-ap-phys2-11.5-practice", "mb-ap-phys2-11.5-checklist"]
next: "mb-ap-phys2-11.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2"]
keyPoints:
  - "Series: same current; resistances add."
  - "Parallel: same potential difference; reciprocals add, and R_eq is below the smallest branch."
  - "Real battery: ideal emf ℰ in series with internal resistance r, so ΔV_terminal = ℰ − Ir."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, figures and worked examples, use the [full study guide](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-study-guide/).

## Recap

- **Series:** charge through one element must go through all of them; there is no other path. The current is the same in each.
- **Parallel:** charge takes one of several paths between the same two points. The potential difference is the same across each path.
- A group of resistors can be replaced by one **equivalent resistance** R_eq that draws the same current for the same potential difference.
- More parallel paths means **lower** R_eq.
- Wire resistance can be ignored only when other elements in the circuit have much larger resistance.
- **emf ℰ:** the terminal potential difference of a battery when there is no current in it.
- Ideal ammeter: zero resistance, in series. Ideal voltmeter: infinite resistance, in parallel. Real meters change the circuit slightly (qualitative only).

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| R_eq = R₁ + R₂ + … | Ω | combine resistors in series |
| 1/R_eq = 1/R₁ + 1/R₂ + … | Ω; invert at the end | combine resistors in parallel |
| R_eq = R/n | n identical resistors in parallel | shortcut for equal branches |
| ΔV_terminal = ℰ − Ir | ℰ and ΔV in V, I in A, r in Ω | find the voltage across a real battery |
| I = ℰ/(R + r) | single external resistance R | find the current with internal resistance |

## Assumptions behind the numbers

- Batteries, wires and meters are **ideal** unless the question says otherwise.
- Resistances are constant (ohmic), so ΔV = IR applies to each resistor.
- No circuit has batteries of different emf connected in parallel.

## Mistakes to avoid

1. **Not inverting** 1/R_eq at the end.
2. **Calling elements parallel because of the drawing.** Both ends must share the same two points.
3. **Splitting current equally** between unequal parallel branches.
4. **Treating ℰ as the terminal voltage** when there is a current.
5. **Putting an ammeter in parallel** (it would short the element) or a voltmeter in series (it would open the loop).
6. **Saying a real voltmeter reads high.** Its parallel branch lowers the resistance, so it reads slightly low.

## Quick self-check

1. What is the equivalent resistance of 12 Ω and 6.0 Ω in parallel? *(4.0 Ω)*
2. A cell of emf 1.5 V and internal resistance 0.20 Ω carries 0.50 A. What is its terminal voltage? *(1.4 V)*
3. A 20 Ω resistor is in series with two 20 Ω resistors in parallel. What is R_eq? *(30 Ω)*
4. A third bulb is added in parallel with two bulbs across an ideal battery. Does the first bulb get dimmer? *(No. Its potential difference is still the emf.)*

Next: [practice questions](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-practice/).
