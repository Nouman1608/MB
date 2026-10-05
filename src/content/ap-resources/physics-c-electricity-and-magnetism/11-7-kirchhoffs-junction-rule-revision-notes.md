---
resourceId: "mb-ap-physcem-11.7-revision-notes"
title: "Kirchhoff's Junction Rule: Revision Notes (Physics C: E&M 11.7)"
description: "One-page recap of Kirchhoff's junction rule: charge conservation at junctions and closed regions, sign conventions, and the method for solving multi-loop circuits."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.7-study-guide"]
learningObjectives:
  - "Recall the junction rule and the charge-conservation reason for it"
  - "Avoid sign, branch-counting and equation-counting errors in circuit problems"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.7-study-guide", "mb-ap-physcem-11.7-practice", "mb-ap-physcem-11.7-checklist"]
next: "mb-ap-physcem-11.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ΣI_in = ΣI_out at every junction and for every closed region."
  - "The rule is conservation of charge; the loop rule is conservation of energy."
  - "A negative current means the true direction is opposite to your arrow."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the figures and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/).

## Recap

- A **junction** is a point where three or more wires meet. A **branch** runs between two junctions and carries one current throughout.
- Charge cannot build up at a junction in a wire, so the charge arriving per second equals the charge leaving per second.
- In calculus form: ∮J·dA = −dq_inside/dt, and dq_inside/dt = 0 for a junction.
- The rule also applies to any closed region of a circuit. Use this as a check.
- It holds at every instant, even while currents change (for example while a capacitor charges), because charge collects on capacitor plates, not at junctions.

## Key relationships

| Idea | Statement |
|---|---|
| Junction rule | ΣI_in = ΣI_out, or ΣI = 0 with "in" positive |
| Current and charge | I = dq/dt, so equal currents mean equal charge per unit time |
| Independent equations | N junctions give N − 1 independent junction equations |
| Unknowns | One current per branch; B branches need B equations in total |
| Node form | Current in a resistor = (V_start − V_end)/R, then apply ΣI_in = ΣI_out at each unknown node |

## Method for a multi-loop circuit

1. Label junctions and one current per branch, each with an assumed direction.
2. Write N − 1 junction equations.
3. Write loop equations for the remaining unknowns (Topic 11.6).
4. Solve, then interpret any negative signs.
5. Check with a closed region, an equivalent resistance or an energy balance.

## Assumptions

- Batteries, wires and meters are ideal unless stated.
- Junctions store no charge.
- Circuits with batteries of different potential differences joined in parallel are outside the unit's boundary.

## Mistakes to avoid

1. **"Current is used up."** The same current enters and leaves each element.
2. **Equal splitting.** Current divides equally only between identical branches.
3. **Redrawing arrows mid-solution.** Keep your assumed directions; fix the sign at the end.
4. **N junction equations.** Only N − 1 are independent.
5. **One current per resistor.** Use one per branch.

## Quick self-check

1. Currents of 0.8 A enter a junction along one wire, and 0.3 A and 0.2 A leave along two others. What is the current in the fourth wire? *(0.3 A, leaving)*
2. In 0.50 s, 1.5 C of charge passes along a wire into a junction. What current does this wire carry? *(3.0 A)*
3. You assume I₄ flows into a junction and get I₄ = −0.2 A. What does this mean? *(0.2 A flows out of the junction)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-practice/).
