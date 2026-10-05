---
resourceId: "mb-ap-physcm-7.5-revision-notes"
title: "Simple and Physical Pendulums: Revision Notes (Physics C: Mechanics 7.5)"
description: "One-page recap of physical, simple and torsion pendulums: restoring torque, the small-angle step, the angular SHM equation from τ = Iα and the three period formulas."
course: "physics-c-mechanics"
unit: 7
topics: ["7.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-7.5-study-guide"]
learningObjectives:
  - "Recall the period formulas for physical, simple and torsion pendulums and the conditions behind each"
  - "Spot the common pivot, distance and angle errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-7.5-study-guide", "mb-ap-physcm-7.5-practice", "mb-ap-physcm-7.5-checklist"]
next: "mb-ap-physcm-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Physical pendulum: τ = −mgd sin θ ≈ −mgdθ, so T = 2π√(I/mgd) with I about the pivot."
  - "Simple pendulum: I = ml², d = l, so T = 2π√(l/g)."
  - "Torsion pendulum: τ = −κθ, so T = 2π√(I/κ), with no g and no small-angle step."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course. For the derivation, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/).

## Recap

- A **physical pendulum** is a rigid body swinging about a fixed axis. d is the distance from the axis to the **centre of mass**.
- Gravity acts at the centre of mass. Its lever arm is d sin θ, so the **restoring torque** is −mgd sin θ.
- For small angles **in radians**, sin θ ≈ θ. Then τ_net = Iα gives **d²θ/dt² = −(mgd/I)θ**: angular SHM, with solution θ = θ_max cos(ωt + φ).
- A **simple pendulum** is the special case of a point mass on a light string.
- A **torsion pendulum** has a restoring torque from a twisted wire, proportional to the angle.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| τ = −mgd sin θ ≈ −mgdθ | N·m | θ in rad; small angles |
| ω = √(mgd/I), T = 2π√(I/(mgd)) | rad/s, s | I about the pivot: I = I_cm + md² |
| T = 2π√(l/g) | s | simple pendulum: I = ml², d = l |
| l_eq = I/(md) | m | simple pendulum with the same period |
| τ = −κθ; T = 2π√(I/κ) | N·m; s | κ in N·m/rad; any angle the wire obeys |
| dθ/dt max = ωθ_max | rad/s | at the bottom of the swing |

## Assumptions behind the numbers

- Fixed, frictionless pivot; no air resistance; rigid body.
- Small amplitude for gravity pendulums (below about 15°, the period error is under half a percent). Larger swings have slightly longer periods.
- The simple pendulum bob is a point mass; the string is light and does not stretch.
- g = 9.8 m/s².

## Mistakes to avoid

1. **I_cm instead of I about the pivot.** Add md².
2. **d to the end of the body.** d goes to the centre of mass.
3. **Simple-pendulum formula for a plank or hoop.** Use 2π√(I/mgd).
4. **Degrees in sin θ ≈ θ.** Radians only.
5. **ω taken as the angular velocity.** ω is fixed; dθ/dt varies.
6. **g in a torsion pendulum.** The wire supplies the torque.
7. **"Mass never matters."** Scaling all the mass changes nothing; adding mass at one place usually changes T.

## Quick self-check

1. A uniform rod 1.5 m long swings from one end. What is its period? *(I = mL²/3, d = L/2, so T = 2π√(2L/(3g)) = 2π√(1.0/9.8) ≈ 2.0 s)*
2. A torsion pendulum has κ = 0.020 N·m/rad and I = 0.0050 kg·m². What is T? *(2π√0.25 = π ≈ 3.1 s)*
3. A pendulum has T = 1.5 s and amplitude 0.12 rad. What is its greatest angular speed? *(ω = 2π/1.5 = 4.19 rad/s; ωθ_max ≈ 0.50 rad/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-practice/).
