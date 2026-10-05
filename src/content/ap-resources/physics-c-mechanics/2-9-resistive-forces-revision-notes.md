---
resourceId: "mb-ap-physcm-2.9-revision-notes"
title: "Resistive Forces: Revision Notes (Physics C: Mechanics 2.9)"
description: "One-page recap of resistive forces F = −kv: the differential equation, separation of variables, exponential solutions, time constant and terminal velocity."
course: "physics-c-mechanics"
unit: 2
topics: ["2.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-2.9-study-guide"]
learningObjectives:
  - "Recall the solutions for coasting and for falling with a resistive force F_r = −kv"
  - "Spot the sign, limit and constant-acceleration errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-2.9-study-guide", "mb-ap-physcm-2.9-practice", "mb-ap-physcm-2.9-checklist"]
next: "mb-ap-physcm-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "F_r = −kv points against v. Newton's second law gives a differential equation for v(t)."
  - "Separate variables, integrate between matching limits, and get exponentials with τ = m/k."
  - "Terminal velocity: net force zero, so v_T = mg/k for falling."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the graph and two worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/).

## Recap

- A **resistive force** depends on velocity and points **opposite** to it. Course model: **F_r = −kv**, with k in kg/s.
- Newton's second law, m dv/dt = ΣF, then contains v on both sides: a **differential equation**.
- Solve by **separation of variables**: v terms on one side, t on the other, then integrate from the initial state (0, v₀) to a general state (t, v).
- The solutions are **exponential** with time constant **τ = m/k**. They approach asymptotes set by the forces and initial conditions.
- **Terminal velocity** is reached when the constant force and the resistive force balance: ΣF = 0.

## Key relationships

| Situation (axis) | Equation | Velocity | Acceleration | Asymptote |
|---|---|---|---|---|
| Coasting (+x along v₀) | m dv/dt = −kv | v₀ e^(−t/τ) | −(v₀/τ) e^(−t/τ) | v → 0; x → x₀ + mv₀/k |
| Falling from rest (+y down) | m dv/dt = mg − kv | v_T(1 − e^(−t/τ)) | g e^(−t/τ) | v → v_T = mg/k |
| Thrown down at v₀ (+y down) | m dv/dt = mg − kv | v_T + (v₀ − v_T) e^(−t/τ) | −((v₀ − v_T)/τ) e^(−t/τ) | v → v_T |

Useful numbers: after one τ an approach is 63% complete; after 5τ it is over 99% complete. The time to halve in coasting is τ ln 2.

## Assumptions

- The drag is exactly proportional to v (a model; real drag on fast objects is closer to v²).
- k stays constant: same shape, same fluid.
- Near Earth's surface, g = 9.8 m/s². Buoyancy is ignored.

## Mistakes to avoid

1. **Constant-acceleration equations.** The acceleration changes with v. Integrate instead.
2. **Wrong sign for drag.** It opposes the velocity, not "up". On the way up, drag acts down.
3. **Mismatched limits.** Pair v₀ with t = 0 in the two integrals.
4. **"No force at terminal velocity."** Two forces act; the net force is zero.
5. **"a = 0 at release."** From rest, a = g at t = 0; a → 0 as v → v_T.
6. **Losing the constant in ln.** ln v − ln v₀ = ln(v/v₀); exponentiate the whole side.

## Quick self-check

1. A 0.30 kg object with k = 1.5 kg/s falls from rest. Find v_T and τ. *(v_T = 0.30 × 9.8 ÷ 1.5 ≈ 2.0 m/s; τ = 0.20 s)*
2. An object coasts with v₀ = 4.0 m/s and τ = 2.0 s. Find v at 2.0 s and the total coasting distance. *(4.0 e^(−1) ≈ 1.5 m/s; v₀τ = 8.0 m)*
3. A falling object has reached half its terminal speed. What is its acceleration? *(Drag = mg/2, so a = g/2 = 4.9 m/s²)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-practice/).
