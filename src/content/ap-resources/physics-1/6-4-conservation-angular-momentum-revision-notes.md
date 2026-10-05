---
resourceId: "mb-ap-phys1-6.4-revision-notes"
title: "Conservation of Angular Momentum: Revision Notes (Physics 1 6.4)"
description: "One-page recap of conservation of angular momentum: total L of a system, internal and external torques, choosing the system, rotational collisions and shape changes."
course: "physics-1"
unit: 6
topics: ["6.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-6.4-study-guide"]
learningObjectives:
  - "Recall when a system's angular momentum is constant and write L_initial = L_final with signs"
  - "Spot the common errors with kinetic energy, linear momentum and system choice before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "scientific"
related: ["mb-ap-phys1-6.4-study-guide", "mb-ap-phys1-6.4-practice", "mb-ap-phys1-6.4-checklist"]
next: "mb-ap-phys1-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Zero net external torque on the system: total L stays constant."
  - "Internal torques come in equal and opposite pairs, so they only move L between parts."
  - "L conserved does not mean ω or K conserved."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For diagrams, the graph test and worked examples, use the [full study guide](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- The **total angular momentum** of a system about an axis is the sum of the signed angular momenta of its parts about that axis.
- Angular momentum is conserved in **every** interaction. It can move between objects but is never created or destroyed.
- For a **chosen system**: if the net external torque is zero, its L is constant. If not, its change in L equals the angular impulse from outside.
- Parts of a system exert **equal and opposite angular impulses** on each other (Newton's third law), so internal torques cannot change the total.
- A **non-rigid** system can change ω by moving mass towards or away from the axis, with L unchanged.

## Key relationships

| Relationship | When it applies | Use it to |
|---|---|---|
| L_total = ΣIω + Σrmv sin θ | always, all about one axis | add up the parts of a system |
| L_initial = L_final | net external torque on the system is zero | collisions, landings, shape changes |
| I₁ω₁ = I₂ω₂ | one system changing shape | predict the new ω |
| ΔL_system = τ_ext Δt | external torque acts | find the transfer to or from the surroundings |
| K = ½Iω² = L² / (2I) | any rotating rigid body | track energy when L is fixed |
| ω against 1/I is a straight line through the origin | L constant | test conservation from data |

## Assumptions behind the numbers

- Axles are **frictionless** unless stated; otherwise the axle exerts an external torque.
- Forces that act **through the axis**, or parallel to it, exert no torque about it.
- Small objects far from the axis are treated as **points**, with I = mr².

## Mistakes to avoid

1. **Averaging angular speeds** instead of using I₁ω₁ + I₂ω₂ = (I₁ + I₂)ω.
2. **Assuming kinetic energy is conserved.** Sticking loses K; pulling mass in gains K.
3. **Using linear momentum when a pivot acts.** The pivot's force is external; its torque about the pivot is zero.
4. **Dropping signs** for parts spinning in opposite senses.
5. **Leaving out mr²** for an object that sticks to a rotating body.
6. **Choosing a system with an unknown external torque**, then claiming L is constant.

## Quick self-check

1. A spinning system with no external torque halves its rotational inertia. What happens to ω and to K? *(Both double.)*
2. A disk (I = 0.20 kg·m²) at 6.0 rad/s has a second disk (I = 0.10 kg·m²), at rest, dropped onto it on the same axle. What is the common angular speed? *(4.0 rad/s)*
3. Is a wheel's angular momentum constant while a brake pad rubs on it? *(Not for the wheel alone: the pad exerts an external torque. For wheel + brake + frame + Earth, yes.)*

Next: [practice questions](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-practice/).
