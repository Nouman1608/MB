---
resourceId: "mb-ap-physcm-6.2-revision-notes"
title: "Torque and Work: Revision Notes (Physics C: Mechanics 6.2)"
description: "One-page calculus recap of torque and work: W = ∫τ dθ, signs of work, signed areas on torque–angle graphs, the rotational work–energy theorem and the usual errors."
course: "physics-c-mechanics"
unit: 6
topics: ["6.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.2-study-guide"]
learningObjectives:
  - "Recall W = ∫τ dθ, W = τΔθ for constant torque, and W_net = ΔK_rot"
  - "Spot unit, sign and constant-torque errors in rotational work before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.2-study-guide", "mb-ap-physcm-6.2-practice", "mb-ap-physcm-6.2-checklist"]
next: "mb-ap-physcm-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "No angle turned, no work: W = ∫τ dθ."
  - "Signed area under τ against θ is work."
  - "Net work by all torques = change in ½Iω² (rigid body, fixed axis)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which does not integrate angle-dependent torques). For the derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-study-guide/).

## Recap

- A torque transfers energy into or out of a rigid body **only if the body turns** while the torque acts.
- When the body turns through dθ, the point where a force acts moves ds = r dθ along the tangent. Only F sin φ does work, so **dW = rF sin φ dθ = τ dθ**.
- State a positive sense of rotation. Torque with the rotation: positive work. Against it: negative work. τ = 0 or Δθ = 0: no work.
- Every point of a rigid body turns through the same dθ, so the works of several torques add to **∫τ_net dθ**.
- With α = ω dω/dθ, τ_net = Iα integrates to **W_net = ½Iω² − ½Iω₀²**.

## Key relationships

| Relationship | When to use it | Graph meaning |
|---|---|---|
| W = ∫τ dθ | Any torque, θ in rad | Signed area under τ–θ graph |
| W = τΔθ | Constant torque only | Rectangle |
| W_net = ∫τ_net dθ = ΣWᵢ | Several torques | Add signed areas |
| W_net = ½Iω² − ½Iω₀² | Rigid body, fixed axis | — |
| α = ω dω/dθ | Chain rule step | — |
| ω greatest where τ_net = 0 | Torque changes sign | Where τ_net graph crosses the axis |

## Assumptions behind the numbers

- The body is rigid and turns about a fixed axis, so I is constant.
- Angles are in radians; 1 rev = 2π rad.
- Axles are frictionless unless a friction torque is given.

## Mistakes to avoid

1. **Work from a torque that does not turn anything.**
2. **Revolutions or degrees in W = τΔθ.**
3. **W = τΔθ for a torque that changes with angle.**
4. **Adding sizes of areas** above and below the axis.
5. **Leaving out friction's negative work.**
6. **Writing a torque in J or work in N·m.**
7. **Equal work means equal ω.** Equal work means equal ΔK.

## Quick self-check

1. A constant 5.0 N·m torque turns a wheel through 4.0 rad in its direction of rotation. Work? *(20 J)*
2. A friction torque of 0.30 N·m acts while a wheel turns 10 rev. Work by friction? *(−0.30 × 20π = −19 J)*
3. τ(θ) = 6.0 − 2.0θ from 0 to 3.0 rad, in the direction of rotation. Work? *(18 − 9.0 = 9.0 J)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-practice/).
