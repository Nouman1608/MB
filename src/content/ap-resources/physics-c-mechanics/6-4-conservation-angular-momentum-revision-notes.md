---
resourceId: "mb-ap-physcm-6.4-revision-notes"
title: "Conservation of Angular Momentum: Revision Notes (Physics C: Mechanics 6.4)"
description: "One-page calculus recap of conservation of angular momentum: system totals, cancelling internal torques, choosing the system, shape changes and transfer by external torques."
course: "physics-c-mechanics"
unit: 6
topics: ["6.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.4-study-guide"]
learningObjectives:
  - "Recall dL_sys/dt = τ_ext and the condition for constant angular momentum"
  - "Spot the common system-choice, axis and energy errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.4-study-guide", "mb-ap-physcm-6.4-practice", "mb-ap-physcm-6.4-checklist"]
next: "mb-ap-physcm-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "L_sys = ΣL about one axis; dL_sys/dt = τ_ext."
  - "Zero net external torque: L_sys constant. Nonzero: L moves between system and surroundings."
  - "Shape change at constant L: ω = L/I and K = L²/(2I)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which does not prove that internal torques cancel or handle continuously changing I). For the derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-study-guide/).

## Recap

- **Total** angular momentum = sum of the parts' angular momenta about **one** axis (Iω for rigid parts, mvd for point objects), with signs.
- Newton's third law pairs act along the line joining two particles, so (r₁ − r₂) × F₁₂ = 0: **internal torques cancel**.
- So **dL_sys/dt = τ_ext** and **ΔL_sys = ∫τ_ext dt**. Two interacting parts give each other **equal and opposite angular impulses**.
- Choose the system so that the net external torque about the axis is zero. Forces through the axis, or parallel to it, have no torque about it.
- Angular momentum is conserved in **all** interactions. A system's L changes only by transfer to or from its surroundings.

## Key relationships

| Relationship | When to use it |
|---|---|
| L_sys = ΣIᵢωᵢ + Σmᵢvᵢdᵢ | Any system, one axis |
| dL_sys/dt = τ_ext, net | Always |
| L_i = L_f | Net external torque about the axis is zero |
| ΔL_sys = ∫τ_ext dt | External torque acts |
| I₁ω₁ = I₂ω₂ | Shape change, no external torque |
| K = L²/(2I) | Energy at constant L: K ∝ 1/I |
| ω_f = (I_Aω_A + I_Bω_B)/(I_A + I_B) | Two parts end up turning together |

## Assumptions behind the numbers

- Internal forces act along the line joining the particles (true for pushes, tensions and gravity).
- Axles frictionless and pivots fixed unless stated.
- Point objects for small masses; every I about the same axis.

## Mistakes to avoid

1. **Constant L means constant ω.** Not if I changes.
2. **Assuming kinetic energy is conserved too.**
3. **Linear momentum in a pivot collision.** The pivot force is external.
4. **Mixing axes** in the sum.
5. **Dropping signs** for parts turning the other way.
6. **Treating one part as a closed system** when another part exerts a torque on it.
7. **"Friction destroys L."** It transfers L to the surroundings.

## Quick self-check

1. A freely spinning system changes I from 2.0 to 0.50 kg·m². It was turning at 3.0 rad/s. New ω, and factor of K? *(12 rad/s; K × 4)*
2. A disk (I = 0.10 kg·m²) at 12 rad/s is locked to a second disk (I = 0.050 kg·m²) at rest on the same shaft. Final ω? *(1.2/0.15 = 8.0 rad/s)*
3. A 0.020 kg blob of putty moving at 10 m/s strikes a pivoted bar 0.30 m from the pivot, moving perpendicular to the bar. L of the system about the pivot? *(0.060 kg·m²/s, before and after)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-practice/).
