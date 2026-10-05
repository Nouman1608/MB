---
resourceId: "mb-ap-physcm-2.1-revision-notes"
title: "Systems and Center of Mass: Revision Notes (Physics C: Mechanics 2.1)"
description: "One-page recap of systems and center of mass: choosing a system, when it is one object, the particle formula, symmetry, and integrals with linear, area and volume mass density."
course: "physics-c-mechanics"
unit: 2
topics: ["2.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-2.1-study-guide"]
learningObjectives:
  - "Recall the particle and integral formulas for the center of mass, and λ = dm/dx"
  - "Spot the common errors with signs, total mass and density before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-2.1-study-guide", "mb-ap-physcm-2.1-practice", "mb-ap-physcm-2.1-checklist"]
next: "mb-ap-physcm-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Name the system first. Treat it as one object at its center of mass only if its inner details do not matter."
  - "x_cm = Σmᵢxᵢ / Σmᵢ for particles; x_cm = ∫x dm / ∫dm for continuous objects."
  - "For a rod, dm = λ dx and M = ∫λ dx."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses sums only). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/).

## Recap

- A **system** is what you put inside a boundary; the rest is the **environment**. Say it in words.
- A system's behaviour comes from the **interactions** between its parts. Mass or energy may cross the boundary (an **open** system).
- Parts can move differently from the whole. Internal structure matters for some questions, and it can change when outside conditions change (water surging in a braking tank).
- If inner details do not matter, model the system as **one object at its center of mass**.
- A uniform symmetric object has its center of mass on its lines of symmetry. The center of mass can be in empty space.

## Key relationships

| Relationship | Units | When to use |
|---|---|---|
| x_cm = Σmᵢxᵢ / Σmᵢ (same for y, z) | m | particles, or uniform pieces placed at their own centers |
| x_cm = ∫x dm / ∫dm | m | continuous object |
| λ = dm/dx, so dm = λ dx | kg/m | rod or other thin object |
| M = ∫λ dx | kg | rod with varying density |
| M = ∫σ dA; M = ∫ρ dV | kg | plate (σ in kg/m²); solid (ρ in kg/m³) |
| Hole: include it as a piece of negative mass | — | composite shapes |

## Assumptions behind the numbers

- Thin rods are treated as one-dimensional; plates have negligible thickness.
- "Uniform" means constant density, so symmetry places the center of mass.
- Coefficients in a density function carry units: in λ = 0.50 + 1.5x, the 1.5 is in kg/m².

## Mistakes to avoid

1. **Dividing by the number of particles** instead of the total mass.
2. **Losing the sign** of a negative coordinate.
3. **Using λ × length** when λ varies. Integrate λ dx.
4. **Stopping at ∫x dm.** That has unit kg·m; divide by M.
5. **Assuming half the mass lies on each side** of the center of mass.
6. **Insisting the center of mass is on the object.** Rings and brackets say otherwise.
7. **Treating every system as a point**, even when its internal structure decides the answer.

## Quick self-check

1. A 1.0 kg particle is at (0, 0) and a 3.0 kg particle at (0.40 m, 0.20 m). Where is the center of mass? *((0.30 m, 0.15 m))*
2. A 2.0 m rod has λ = 3.0x (kg/m, x in m from one end). Find M and x_cm. *(M = 6.0 kg; x_cm = 4/3 m ≈ 1.3 m)*
3. Where is the center of mass of a uniform thin ring? *(At its center, where there is no material.)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-practice/).
