---
resourceId: "mb-ap-physcm-4.2-revision-notes"
title: "Change in Momentum and Impulse: Revision Notes (Physics C: Mechanics 4.2)"
description: "One-page recap of impulse for the calculus-based course: F_net = dp/dt, J = ∫F dt, graph areas and slopes, the impulse–momentum theorem, F = ma and F = v dm/dt as special cases."
course: "physics-c-mechanics"
unit: 4
topics: ["4.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-4.2-study-guide"]
learningObjectives:
  - "Recall F_net = dp/dt, J = ∫F dt and the impulse–momentum theorem with their graph meanings"
  - "Spot the common sign, average-force and changing-mass errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-4.2-study-guide", "mb-ap-physcm-4.2-practice", "mb-ap-physcm-4.2-checklist"]
next: "mb-ap-physcm-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "F_net = dp/dt: slope of p–t graph. J = ∫F dt: area under F–t graph."
  - "J_net = Δp = p_f − p_i, with signed values."
  - "Constant mass: F = ma. Constant velocity, mass gained: F = v dm/dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-study-guide/).

## Recap

- The **net external force** on a system equals the rate of change of its momentum. Internal forces cancel in pairs.
- **Impulse** is the integral of a force over a time interval. It is a vector, in N·s, pointing the way of the net force.
- **Change in momentum** is final minus initial: Δp = p_f − p_i.
- **Impulse–momentum theorem:** the impulse of the net external force equals Δp.
- **Graphs:** area under F–t = impulse; slope of p–t = net force.
- **Special cases:** constant mass gives F_net = ma; constant velocity with mass being added gives F_net = v dm/dt.

## Key relationships

| Relationship | Units | Graph or condition |
|---|---|---|
| F_net = dp/dt | N | slope of p–t graph |
| J = ∫ F dt | N·s | signed area under F–t graph |
| Δp = p_f − p_i | kg·m/s | use signed values |
| J_net = Δp | N·s = kg·m/s | net external force only |
| F_avg = J/Δt | N | less than the peak for a smooth pulse |
| F_net = m dv/dt = ma | N | constant mass |
| F_net = v dm/dt | N | constant v; added mass has no momentum along v |

## Assumptions behind the numbers

- The system is chosen first; only forces from outside it count in F_net.
- During short impacts, weight and friction are often negligible (the collision model, Topic 4.1). Check this with numbers.
- In two dimensions, apply J = Δp to each component separately.

## Mistakes to avoid

1. **Speeds instead of velocities in Δp.** Reversals double the change.
2. **Impulse in the direction of motion.** It points along the net force.
3. **Peak force × time** instead of the integral or the area.
4. **Forgetting p_i** when building p(t) from F(t).
5. **One force's impulse = Δp** when other forces are not negligible.
6. **F = ma for a system gaining mass.** Use dp/dt.

## Quick self-check

1. Take +x towards a wall. A 0.30 kg ball hits it at 6.0 m/s and rebounds at 4.0 m/s. What is the impulse on the ball? *(Δp = 0.30 × (−4.0 − 6.0) = −3.0 N·s, i.e. 3.0 N·s away from the wall)*
2. F_x = 2.0t (N, t in s) acts from 0 to 3.0 s. What is the impulse? *(∫ 2.0t dt = t² from 0 to 3.0 = 9.0 N·s)*
3. Sand falls onto a belt moving at a constant 3.0 m/s, at 0.50 kg/s. What extra horizontal force keeps the belt at that speed? *(v dm/dt = 3.0 × 0.50 = 1.5 N)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-practice/).
