---
resourceId: "mb-ap-physcm-6.3-revision-notes"
title: "Angular Momentum and Angular Impulse: Revision Notes (Physics C: Mechanics 6.3)"
description: "One-page calculus recap of angular momentum and angular impulse: L = Iω, L = r × p about a chosen point, ∫τ dt as a signed area, and τ_net = dL/dt."
course: "physics-c-mechanics"
unit: 6
topics: ["6.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.3-study-guide"]
learningObjectives:
  - "Recall L = Iω, L = r × p and ∫τ_net dt = ΔL, with units and sign conventions"
  - "Spot the common axis-choice, sign and integration errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.3-study-guide", "mb-ap-physcm-6.3-practice", "mb-ap-physcm-6.3-checklist"]
next: "mb-ap-physcm-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Rigid body: L = Iω. Point object: L = r × p, size mvd."
  - "Angular impulse = ∫τ dt = area under the τ–t graph."
  - "τ_net = dL/dt, so ∫τ_net dt = ΔL."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which does not use r × p or integrate time-dependent torques). For the derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-study-guide/).

## Recap

- A **rigid body** on a fixed axis has **L = Iω**, with I about that axis. L takes the sign of ω.
- A **point object** has **L = r × p** about a chosen point O. Its size is rmv sin φ = **mvd**, where d is the perpendicular distance from O to the line of motion. In the plane, **L_z = x p_y − y p_x**.
- An object moving in a straight line has L about any point **not** on its path. About a point on its path, L = 0.
- **Angular impulse** = ∫τ dt. It points the same way as the torque.
- From τ_net = Iα with constant I: **τ_net = dL/dt**. For a point object, d(r × p)/dt = r × F_net gives the same result.

## Key relationships

| Relationship | When to use it | Graph meaning |
|---|---|---|
| L = Iω | Rigid body, fixed axis | — |
| L = r × p; L = mvd | Point object, chosen point | d is the perpendicular distance to the path |
| angular impulse = ∫τ dt | Any torque | Signed area under τ–t graph |
| angular impulse = τΔt | Constant torque only | Rectangle |
| τ_net = dL/dt | Always (fixed axis or point) | Slope of L–t graph |
| ∫τ_net dt = L₂ − L₁ | Rotational impulse–momentum theorem | Area under τ_net–t equals ΔL |

Units: kg·m²/s = N·m·s.

## Assumptions behind the numbers

- One fixed axis or reference point, used for every quantity in the problem.
- The body is rigid (constant I) when you use τ_net = Iα to derive the theorem.
- An inertial reference frame; axles frictionless unless a friction torque is given.

## Mistakes to avoid

1. **Not stating the axis or point.** L has no meaning without it.
2. **"Straight-line motion has no angular momentum."**
3. **Constant-torque formula τΔt for a torque that changes with time.**
4. **Area under τ–θ (work) mistaken for area under τ–t (angular impulse).**
5. **Losing the sign of L₀** when the body reverses.
6. **Reading L = 0 from τ = 0.** Zero torque means zero slope.
7. **Using only one torque** in ∫τ dt = ΔL. The theorem needs the **net** torque.

## Quick self-check

1. A flywheel with I = 0.050 kg·m² turns at 40 rad/s. What is L? *(2.0 kg·m²/s)*
2. A 0.30 kg ball moves at 5.0 m/s along a line 0.60 m from point O. Its L about O? *(0.30 × 5.0 × 0.60 = 0.90 kg·m²/s)*
3. A net torque τ = 2.0t (N·m) acts from t = 0 to 3.0 s on a wheel. Change in L? *(∫₀³ 2.0t dt = 9.0 N·m·s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-practice/).
