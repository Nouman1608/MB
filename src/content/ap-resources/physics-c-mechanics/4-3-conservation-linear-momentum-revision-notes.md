---
resourceId: "mb-ap-physcm-4.3-revision-notes"
title: "Conservation of Linear Momentum: Revision Notes (Physics C: Mechanics 4.3)"
description: "One-page recap of total momentum, center-of-mass velocity, internal and external forces, choosing a system, and momentum conservation in collisions and explosions."
course: "physics-c-mechanics"
unit: 4
topics: ["4.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-4.3-study-guide"]
learningObjectives:
  - "Recall P = Σmᵢvᵢ = Mv_cm and ΔP = J_ext"
  - "Spot the sign, component and system-choice errors that spoil momentum answers"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-4.3-study-guide", "mb-ap-physcm-4.3-practice", "mb-ap-physcm-4.3-checklist"]
next: "mb-ap-physcm-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Total momentum is a vector sum and equals Mv_cm."
  - "Internal impulses cancel in pairs; only external impulse changes P."
  - "Conserve one component at a time, comparing just before with just after."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-study-guide/).

## Recap

- A **system** is the set of objects you choose. Everything else is the surroundings.
- **Total momentum** P is the vector sum of the parts' momenta. It equals the total mass times the **center-of-mass velocity**.
- Forces between parts of the system are **internal**. By Newton's third law their impulses are equal and opposite, so they cancel in P.
- Momentum is conserved in every interaction. A **chosen system** keeps constant P only if the net **external** force on it is zero.
- In collisions and explosions, external impulses are tiny over the short contact time, so P just before = P just after.
- Quantitative work is in one or two dimensions; three-dimensional cases are qualitative only.

## Key relationships

| Relationship | Units | Meaning |
|---|---|---|
| P = Σ mᵢvᵢ | kg·m/s | vector sum; use components |
| v_cm = Σ mᵢvᵢ / Σ mᵢ = P/M | m/s | whole system as one object |
| J_on A = −J_on B | N·s | third-law pair inside the system |
| dP/dt = ΣF_ext | N | slope of a P–t graph |
| ΔP = ∫ΣF_ext dt = J_ext | N·s | momentum transferred from outside |
| ΣF_ext,x = 0 ⇒ P_x before = P_x after | kg·m/s | conservation, one component |

## Assumptions behind the numbers

- Masses do not change during the interaction.
- "Frictionless", "air track" or "air table" means no horizontal external force.
- External forces are ignored only over the short interaction time, not afterwards.

## Mistakes to avoid

1. **Adding speeds.** Use signed velocities or components.
2. **Conserving each object's momentum.** Only the total is constant.
3. **Ignoring an external force.** State the system and check ΣF_ext first.
4. **Conserving a component that has an external force** (for example, the vertical component when something lands on a track).
5. **Thinking an explosion changes v_cm.** Internal forces cannot.
6. **Mixing momentum and kinetic energy.** Kinetic energy is often not conserved (Topic 4.4).

## Quick self-check

1. A 2.0 kg cart moves at +3.0 m/s and a 1.0 kg cart at −3.0 m/s. What is v_cm? *(+1.0 m/s)*
2. Two skaters at rest push apart. The 70 kg skater moves off at +0.60 m/s. What is the 50 kg skater's velocity? *(−0.84 m/s)*
3. A 0.20 kg ball is dropped vertically into a 1.8 kg cart rolling at 1.0 m/s on a frictionless track. What is the cart's new speed? *(0.90 m/s; only P_x is conserved)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-practice/).
