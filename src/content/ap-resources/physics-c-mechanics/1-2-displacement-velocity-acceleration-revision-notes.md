---
resourceId: "mb-ap-physcm-1.2-revision-notes"
title: "Displacement, Velocity, and Acceleration: Revision Notes (Physics C: Mechanics 1.2)"
description: "One-page calculus recap of displacement, velocity and acceleration: derivatives, integrals with initial conditions, signed areas, and when the constant-acceleration equations apply."
course: "physics-c-mechanics"
unit: 1
topics: ["1.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-1.2-study-guide"]
learningObjectives:
  - "Recall v_x = dx/dt, a_x = dv_x/dt and the integral forms with initial conditions"
  - "Spot the common calculus and sign errors in kinematics before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-1.2-study-guide", "mb-ap-physcm-1.2-practice", "mb-ap-physcm-1.2-checklist"]
next: "mb-ap-physcm-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Differentiate down: x → v_x → a_x. Integrate up, adding initial conditions."
  - "Constant-acceleration equations only when a_x is constant."
  - "Displacement = ∫v_x dt; distance = ∫|v_x| dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).

## Recap

- Treat the object as a **point**. State the axis first, for example "+x to the right".
- **Displacement** Δx = x − x₀ is signed. **Distance travelled** is the total path length.
- **Averages** use the initial and final states only: v_avg = Δx/Δt, a_avg = Δv_x/Δt.
- **Instantaneous** values are limits of averages as Δt → 0: derivatives.
- To go from a_x back to v_x and x, **integrate** and use the initial conditions v_x0 and x₀.

## Key relationships

| Relationship | Units | Graph meaning |
|---|---|---|
| v_x = dx/dt | m/s | tangent slope of x–t graph |
| a_x = dv_x/dt = d²x/dt² | m/s² | tangent slope of v_x–t graph |
| v_x(t) = v_x0 + ∫₀ᵗ a_x dt | m/s | signed area under a_x–t graph gives Δv_x |
| x(t) = x₀ + ∫₀ᵗ v_x dt | m | signed area under v_x–t graph gives Δx |
| distance = ∫ \|v_x\| dt | m | all areas counted positive |
| v_x = v_x0 + a_xt; x = x₀ + v_x0t + ½a_xt²; v_x² = v_x0² + 2a_x(x − x₀) | — | constant a_x only |

## Assumptions behind the numbers

- Point object, one straight line, inertial reference frame unless stated.
- The constant-acceleration equations assume a_x does not change. Free fall near Earth's surface: a_y = −g with g = 9.8 m/s² (+y upward), air resistance ignored.
- Polynomial coefficients carry units (in x = 2.0t³, the 2.0 is in m/s³).

## Mistakes to avoid

1. **Constant-a equations with a(t).** Integrate instead.
2. **Missing v_x0 or x₀.** An indefinite integral needs its constant.
3. **∫v_x dt as distance.** Split at v_x = 0 and add sizes.
4. **Negative a_x = slowing down.** Compare signs of v_x and a_x.
5. **v_x = 0 so a_x = 0.** Check a_x separately.
6. **Differentiating twice when asked for velocity.**
7. **Using a velocity-dependent a(v) here.** That needs separation of variables (Topic 2.9).

## Quick self-check

1. x(t) = 4.0t² − t³ (m). What is v_x at t = 2.0 s? *(dx/dt = 8.0t − 3t² = 4.0 m/s)*
2. a_x = 2.0t (m/s²) and v_x0 = −3.0 m/s. What is v_x at t = 3.0 s? *(−3.0 + 9.0 = 6.0 m/s)*
3. v_x = 2.0t − 4.0 (m/s). What are the displacement and distance from 0 to 4.0 s? *(Displacement 0; distance 8.0 m)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-practice/).
