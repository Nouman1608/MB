---
resourceId: "mb-ap-physcm-2.5-revision-notes"
title: "Newton’s Second Law: Revision Notes (Physics C: Mechanics 2.5)"
description: "One-page recap of Newton’s second law for the calculus-based course: when velocity changes, a = ΣF/m in components, system choice, and integrating a force that changes with time."
course: "physics-c-mechanics"
unit: 2
topics: ["2.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-2.5-study-guide"]
learningObjectives:
  - "Recall a_cm = ΣF/m_sys, its component form and the condition for a change in velocity"
  - "Spot the common force, system and calculus errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-2.5-study-guide", "mb-ap-physcm-2.5-practice", "mb-ap-physcm-2.5-checklist"]
next: "mb-ap-physcm-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Velocity of the center of mass changes only if the net external force is not zero."
  - "a_cm = ΣF/m_sys, with a along ΣF. Use one axis at a time."
  - "Changing force: a_x(t) = ΣF_x(t)/m, then integrate with initial conditions."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/).

## Recap

- **Choose the system first.** Forces from inside it are internal; forces from outside are external.
- **Unbalanced forces** means ΣF ≠ 0. Only then does the velocity of the center of mass change (in size, direction or both).
- **ΣF = 0** means constant velocity, which may or may not be zero.
- **Internal forces** cancel in third-law pairs, so they never change the motion of the system's center of mass.
- **Acceleration points along the net force**, whatever the direction of the velocity.

## Key relationships

| Relationship | Units | Meaning |
|---|---|---|
| a_cm = ΣF / m_sys | m/s² | size ∝ ΣF, ∝ 1/m; direction of ΣF |
| ΣF_x = m a_x, ΣF_y = m a_y | N | one equation per axis |
| 1 N = 1 kg·m/s² | — | definition of the newton |
| a_x(t) = ΣF_x(t)/m | m/s² | holds at every instant |
| v_x(t) = v_x0 + (1/m)∫₀ᵗ ΣF_x dt | m/s | Δv_x = (area under ΣF_x–t graph) ÷ m |
| a against F is a line, slope 1/m; a against 1/m is a line, slope ΣF | — | lab tests of the law |

## Assumptions behind the numbers

- Inertial reference frame, and the system's mass does not change.
- "Smooth" or "low-friction" means friction is negligible; "light" bar or string means its mass is negligible.
- g = 9.8 m/s² for weight, mg.

## Mistakes to avoid

1. **Adding ma to the free-body diagram.** It is the result of the forces.
2. **Leaving out the weight** (or another external force) in one component.
3. **Counting internal forces** when the system contains both objects.
4. **Dividing by the wrong mass.** Use the mass of the system you chose.
5. **Thinking force sets velocity.** Force sets acceleration; the velocity remembers all earlier forces.
6. **Constant-a equations with F(t).** Integrate a_x(t) instead.
7. **Forgetting v_x0** when integrating.

## Quick self-check

1. A net force of 6.0 N acts on a 1.5 kg puck. What is its acceleration? *(4.0 m/s², along the net force)*
2. The net force doubles and the mass is multiplied by 4. By what factor does a change? *(× 0.5)*
3. A 2.0 kg cart starts from rest. The net force is F_x = (6.0 N/s)t. What is v_x at 2.0 s? *(a_x = 3.0t, so v_x = 1.5t² = 6.0 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-practice/).
