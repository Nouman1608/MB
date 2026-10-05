---
resourceId: "mb-ap-physcm-3.4-revision-notes"
title: "Conservation of Energy: Revision Notes (Physics C: Mechanics 3.4)"
description: "One-page calculus recap of energy conservation: choosing the system, when K + U is constant, energy transferred by external work, U(x) graphs with turning points, escape speed and dissipation."
course: "physics-c-mechanics"
unit: 3
topics: ["3.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-3.4-study-guide"]
learningObjectives:
  - "Recall the energy rule and the conditions for constant mechanical energy"
  - "Spot system-choice and double-counting errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-3.4-study-guide", "mb-ap-physcm-3.4-practice", "mb-ap-physcm-3.4-checklist"]
next: "mb-ap-physcm-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Name the system first. One object: K only. Interacting objects or a spring: K and U."
  - "ΔK + ΔU + ΔE_th = W_ext. With W_ext = 0 and no friction inside, K + U is constant."
  - "On a U(x) graph, K = E − U(x); the object turns where U = E."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For the graphs, bar charts and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/).

## Recap

- **Choose the system** before writing any energy term. Everything outside is the surroundings.
- A **single object** can only have kinetic energy. A system with conservative interactions, or one that deforms reversibly, can also have potential energy.
- **Mechanical energy** E = K + U.
- **Energy is conserved in every interaction.** A change in one type inside the system is balanced by changes in other types or by energy crossing the boundary.
- Nonconservative forces such as kinetic friction **dissipate** mechanical energy as thermal energy and sound.

## Key relationships

| Relationship | Units | Use it when |
|---|---|---|
| E_mech = K + U | J | always (definition) |
| ΔK + ΔU + ΔE_th = W_ext | J | any system |
| K_i + U_i = K_f + U_f | J | W_ext = 0 and no friction inside |
| v(x) = √[2(E − U(x))/m] | m/s | object in a U(x) system |
| turning point: U(x) = E | — | K = 0 there |
| v_esc = √(2GM/R) | m/s | U_g = −GMm/r, from the surface |
| ΔE_th = ∫ f_k ds (= f_k d if constant) | J | sliding friction |

## Assumptions behind the numbers

- Ideal springs, frictionless surfaces and no air resistance unless stated.
- A planet or moon is treated as fixed when the other object is much lighter.
- g = 9.8 m/s²; G = 6.67 × 10⁻¹¹ N·m²/kg².

## Mistakes to avoid

1. **Potential energy for a one-object system.** Include Earth or use work done by gravity, not both.
2. **"Friction breaks energy conservation."** Total energy is conserved; mechanical energy is not.
3. **Constant speed means constant energy.** U can still change while an external force does work.
4. **Turning points at the top of U(x).** They are where U = E.
5. **mgh for large heights.** Use −GMm/r.
6. **f_k d when μ_k varies.** Integrate.

## Quick self-check

1. A ball is dropped from rest and falls 0.45 m with no air resistance. Speed? *(√(2 × 9.8 × 0.45) = 3.0 m/s)*
2. A 0.20 kg object has E = 1.0 J and is at a point where U = 0.64 J. Speed? *(√(2 × 0.36 ÷ 0.20) = 1.9 m/s)*
3. A sledge's K falls from 50 J to 38 J on a level patch. What happened to the 12 J? *(Dissipated as thermal energy and sound by friction.)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-practice/).
