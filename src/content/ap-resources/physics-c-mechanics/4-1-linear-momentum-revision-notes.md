---
resourceId: "mb-ap-physcm-4.1-revision-notes"
title: "Linear Momentum: Revision Notes (Physics C: Mechanics 4.1)"
description: "One-page recap of linear momentum for the calculus-based course: p = mv as a vector, system momentum by components, p(t) from x(t), K = p²/2m, and the collision and explosion models."
course: "physics-c-mechanics"
unit: 4
topics: ["4.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-4.1-study-guide"]
learningObjectives:
  - "Recall p = mv, its vector nature and its link to kinetic energy"
  - "Spot the common sign, component and modelling errors with momentum before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-4.1-study-guide", "mb-ap-physcm-4.1-practice", "mb-ap-physcm-4.1-checklist"]
next: "mb-ap-physcm-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "p = mv points along v. Add momenta by components."
  - "p_x(t) = m dx/dt for constant mass; K = p²/(2m)."
  - "Collision: internal forces ≫ net external force. Explosion: internal forces push parts apart."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-study-guide/).

## Recap

- **Linear momentum** p = mv. Unit kg·m/s, the same as N·s.
- Momentum is a **vector** with the direction of the velocity. In one dimension, p_x has the sign of v_x.
- The momentum of a **system** is the vector sum of the momenta of its parts. Opposite momenta cancel; kinetic energies never do.
- From a position function: **p_x(t) = m dx/dt**. The p–t graph is the v–t graph scaled by m.
- A **collision** is an interaction where the forces between the objects are much larger than the net external force. Only the states just before and just after are compared, so each body can be modelled as an object.
- An **explosion** is an interaction where internal forces push parts of the system apart.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| p = mv | kg·m/s | vector, parallel to v |
| p_x = mv_x, p_y = mv_y | kg·m/s | work in components |
| \|p\| = √(p_x² + p_y²), tan θ = p_y/p_x | kg·m/s, degrees | check the quadrant from the signs |
| p_sys = p₁ + p₂ + … | kg·m/s | vector sum |
| p_x(t) = m dx/dt | kg·m/s | constant mass |
| K = p²/(2m), \|p\| = √(2mK) | J, kg·m/s | same p: lighter object has more K |

## Assumptions behind the numbers

- Masses are constant unless a question says otherwise.
- Velocities are measured in one inertial reference frame. Momentum depends on the frame, just as velocity does.
- "Just before" and "just after" a collision means close enough in time that external forces have had no noticeable effect.

## Mistakes to avoid

1. **Adding sizes of momenta.** Add components with signs.
2. **Losing the sign** of p_x when an object moves in −x.
3. **Wrong quadrant** after an inverse tangent.
4. **Treating p and K as interchangeable.** Doubling speed doubles p but quadruples K.
5. **Thinking zero total momentum means everything is at rest.**
6. **Using the collision model when external forces act for a long time** compared with the interaction.

## Quick self-check

1. Take +x east, +y north. A 0.30 kg ball moves with v = (4.0, −3.0) m/s. Find p and its size. *(p = (1.2, −0.90) kg·m/s; size 1.5 kg·m/s, pointing south of east)*
2. A 1.5 kg cart has momentum of size 6.0 kg·m/s. What is its kinetic energy? *(K = 6.0² ÷ (2 × 1.5) = 12 J)*
3. A 0.50 kg particle has x(t) = 2.0t² − t³ (x in m, t in s). What is p_x at t = 1.0 s? *(v_x = 4.0t − 3t² = 1.0 m/s, so p_x = 0.50 kg·m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-practice/).
