---
resourceId: "mb-ap-physcm-3.5-revision-notes"
title: "Power: Revision Notes (Physics C: Mechanics 3.5)"
description: "One-page calculus recap of power: average power, P = dW/dt, P = F·v with signs, net power as dK/dt, work as the area under a power–time graph, and constant-power motion."
course: "physics-c-mechanics"
unit: 3
topics: ["3.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-3.5-study-guide"]
learningObjectives:
  - "Recall the average and instantaneous forms of power, P = F·v and W = ∫P dt"
  - "Spot the common sign, component and averaging errors with power before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-3.5-study-guide", "mb-ap-physcm-3.5-practice", "mb-ap-physcm-3.5-checklist"]
next: "mb-ap-physcm-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Power is a rate: P_avg = ΔE/Δt = W/Δt and P = dW/dt. 1 W = 1 J/s."
  - "P = F·v: only the force component along the velocity counts, and the sign tells you the direction of energy flow."
  - "P_net = dK/dt, and W = ∫P dt is the area under a power–time graph."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/).

## Recap

- **Power** is the rate at which energy changes. Energy can be **transferred** into or out of a system by work from outside forces, or **converted** from one form to another inside the system.
- Choose the system first. Friction on a sliding block **transfers** energy out of a "block only" system but **converts** kinetic energy to internal energy in a "block + floor" system.
- **Average power** uses the total energy change (or total work) and the time taken.
- **Instantaneous power** is a derivative. With dW = F·dr, it becomes the dot product P = F·v.
- The **net power** on an object is the rate of change of its kinetic energy.

## Key relationships

| Relationship | Units | Meaning |
|---|---|---|
| P_avg = ΔE/Δt = W/Δt | W = J/s | total energy change ÷ time |
| P = dW/dt | W | instantaneous power |
| P = F·v = Fv cos θ = F∥v | W | only the component of F along v counts |
| P = F_x v_x + F_y v_y + F_z v_z | W | component form of the dot product |
| P_net = F_net·v = dK/dt | W | positive: speeding up; negative: slowing down |
| W = ∫P dt | J | area under the P–t graph |
| constant P from rest: v = √(2Pt/m) | m/s | from K = Pt, only that force doing work |

## Assumptions behind the numbers

- Inertial reference frame; air resistance ignored unless stated; g = 9.8 m/s².
- Point object: forces act at one point, so F·v uses the object's velocity.
- Constant-power models fail near v = 0, where F = P/v would be unlimited.

## Mistakes to avoid

1. **Watts for energy.** A kilowatt-hour (3.6 × 10⁶ J) is energy, not power.
2. **Using the whole force in P = Fv.** Take the component along v, or use the dot product.
3. **Dropping the sign.** Forces opposing the motion deliver negative power.
4. **Constant power = constant force.** At constant P, the force falls as v rises.
5. **P_avg = (average F) × (average v).** Wrong when both change. Use W/Δt.
6. **Forgetting perpendicular forces.** Normal force on level ground, or tension in uniform circular motion, deliver zero power.
7. **Mixing up the system.** Say whether energy is transferred out or converted inside.

## Quick self-check

1. A 40 N force acts at 60° to a velocity of 3.0 m/s. What power does it deliver? *(40 × 3.0 × cos 60° = 60 W)*
2. P(t) = 2.0t² W. How much work is done from 0 to 3.0 s? *(∫₀³ 2.0t² dt = 18 J)*
3. A 250 kg cart starts from rest and is pushed with a constant 500 W, no other work done. What is its speed at 4.0 s? *(v = √(2 × 500 × 4.0 ÷ 250) = 4.0 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/3-5-power-practice/).
