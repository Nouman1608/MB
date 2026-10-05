---
resourceId: "mb-ap-physcem-11.5-revision-notes"
title: "Compound Direct Current Circuits: Revision Notes (Physics C: E&M 11.5)"
description: "One-page recap of compound DC circuits: series and parallel rules, equivalent resistance, internal resistance and terminal voltage, and ideal and real meters."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.5-study-guide"]
learningObjectives:
  - "Recall the series and parallel rules and the terminal-voltage relationship"
  - "Spot path, reciprocal and meter-placement errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.5-study-guide", "mb-ap-physcem-11.5-practice", "mb-ap-physcem-11.5-checklist"]
next: "mb-ap-physcem-11.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Series: same current. Parallel: same potential difference."
  - "R_eq = ΣR in series; 1/R_eq = Σ(1/R) in parallel."
  - "Real battery: ΔV_terminal = ℰ − Ir."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, figures and worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/).

## Recap

- **Series:** charge through one element must go through the others, with no other path. Same current in each.
- **Parallel:** elements share the same two end points, so charge can take any one path. Same potential difference across each.
- Reduce a network from the inside out, find the total current, then work back out to each resistor.
- Adding a parallel path lowers R_eq and raises the total current.
- Ideal wires and batteries have no resistance. You may ignore wire resistance only if the circuit has other resistance.
- A real battery is an ideal emf in series with an internal resistance r. The emf is the terminal voltage when no current flows.
- Unless told otherwise, batteries, wires and meters are ideal.

## Key relationships

| Situation | Relationship |
|---|---|
| Resistors in series | R_eq = R₁ + R₂ + … |
| Resistors in parallel | 1/R_eq = 1/R₁ + 1/R₂ + … |
| Two in parallel | R_eq = R₁R₂/(R₁ + R₂) |
| n identical in parallel | R_eq = R/n |
| Single loop with a real battery | I = ℰ/(R + r) |
| Terminal voltage | ΔV = ℰ − Ir |

| Meter | Connected | Ideal resistance | A real one… |
|---|---|---|---|
| Ammeter | in series | zero | adds resistance, so current falls slightly |
| Voltmeter | in parallel | infinite | adds a parallel path, which usually lowers the reading |

## Mistakes to avoid

1. **Calling elements parallel because they look side by side.** Check the junctions at both ends.
2. **Forgetting to invert** after adding reciprocals.
3. **Using "product over sum" for three resistors.** It works for pairs only.
4. **Assuming terminal voltage equals emf** when a current is drawn.
5. **Treating the battery as a constant-current source.** It fixes ℰ, not I.
6. **Ammeter across an element.** That creates a short circuit.
7. **Ignoring wire resistance in a short circuit.** Then r and the wire set the current.

## Quick self-check

1. What is 12 Ω in parallel with 6.0 Ω? *(4.0 Ω)*
2. A 3.0 Ω resistor is added in parallel to a circuit fed by an ideal battery. Does the battery current rise or fall? *(Rise: R_eq falls)*
3. A battery of emf 9.0 V and internal resistance 1.5 Ω delivers 2.0 A. What is its terminal voltage? *(6.0 V)*
4. Why does an ideal voltmeter have infinite resistance? *(So no current passes through it and the circuit is unchanged)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-practice/).
