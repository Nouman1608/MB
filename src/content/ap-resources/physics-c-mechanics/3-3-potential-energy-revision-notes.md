---
resourceId: "mb-ap-physcm-3.3-revision-notes"
title: "Potential Energy: Revision Notes (Physics C: Mechanics 3.3)"
description: "One-page calculus recap of potential energy: ΔU = −∫F·dr, F_x = −dU/dx, stable and unstable equilibrium, spring and gravitational potential energy, and adding pair energies."
course: "physics-c-mechanics"
unit: 3
topics: ["3.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-3.3-study-guide"]
learningObjectives:
  - "Recall how potential energy and conservative force are linked by an integral and a derivative"
  - "Spot the common sign, system and equilibrium errors before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-3.3-study-guide", "mb-ap-physcm-3.3-practice", "mb-ap-physcm-3.3-checklist"]
next: "mb-ap-physcm-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Integrate down: ΔU = −∫F_c dx. Differentiate back: F_x = −dU/dx."
  - "Minimum of U(x): stable. Maximum: unstable. Where U = 0 means nothing special."
  - "U_g = −Gm₁m₂/r in general; mgΔy only for small height changes near a surface."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For derivations, the U(x) graph and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/).

## Recap

- Potential energy is a **scalar** stored in the **arrangement of a system** of two or more objects.
- It exists only for **conservative** interactions: work independent of path, zero around a closed loop. Friction has no potential energy.
- You choose where U = 0. Only **changes** in U are physical.
- The conservative force points towards **lower U**.
- For three or more objects, add the energy of **every pair once**.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| ΔU = −W_c = −∫F_c · dr | J | defines U from a conservative force |
| F_x = −dU/dx | N | minus the slope of the U(x) graph |
| dU/dx = 0 | — | equilibrium position |
| d²U/dx² > 0 / < 0 | — | stable (minimum) / unstable (maximum) |
| U_s = ½k(Δx)² | J | ideal spring, U = 0 at relaxed length |
| U_g = −Gm₁m₂/r | J | spheres, U = 0 at infinite separation |
| ΔU_g ≈ mgΔy | J | near a surface, Δy much smaller than the radius |
| U = U₁₂ + U₁₃ + U₂₃ + … | J | systems of three or more objects |

## Assumptions behind the numbers

- One-dimensional motion along a stated axis unless told otherwise.
- Ideal spring: massless, force proportional to deformation.
- Spheres act as point masses at their centres. g = 9.8 m/s²; G = 6.67 × 10⁻¹¹ N·m²/kg².

## Mistakes to avoid

1. **"An object has potential energy."** A system does.
2. **Losing the minus sign** in ΔU = −W_c or F_x = −dU/dx.
3. **Equilibrium where U = 0.** Equilibrium is where the slope is zero.
4. **Stable at a maximum.** A maximum pushes the object away.
5. **mgΔy for large heights.** Use −Gm₁m₂/r.
6. **½k(Δx)² for a nonideal spring.** Integrate the actual force.
7. **Counting a pair twice** in a many-body system.

## Quick self-check

1. U(x) = (4.0 J/m²)x². What is F_x at x = 0.50 m? *(−dU/dx = −8.0x = −4.0 N)*
2. A spring has k = 200 N/m. How much does U_s rise when the stretch goes from 0.050 m to 0.10 m? *(½ × 200 × (0.010 − 0.0025) = 0.75 J)*
3. U(x) has a local maximum at x = 3.0 m. Is that equilibrium stable? *(No. A small push gives a force away from 3.0 m: unstable.)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-practice/).
