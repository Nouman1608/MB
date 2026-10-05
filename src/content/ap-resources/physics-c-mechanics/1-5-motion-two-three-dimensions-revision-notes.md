---
resourceId: "mb-ap-physcm-1.5-revision-notes"
title: "Motion in Two or Three Dimensions: Revision Notes (Physics C: Mechanics 1.5)"
description: "One-page calculus recap of motion in a plane: vector position, velocity and acceleration, independent components, non-uniform acceleration and projectiles."
course: "physics-c-mechanics"
unit: 1
topics: ["1.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-1.5-study-guide"]
learningObjectives:
  - "Recall the component form of v = dr/dt and a = dv/dt and the projectile equations"
  - "Spot the common component, time and formula errors in two-dimensional motion before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-1.5-study-guide", "mb-ap-physcm-1.5-practice", "mb-ap-physcm-1.5-checklist"]
next: "mb-ap-physcm-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Split the motion into x and y. Each is a one-dimensional problem; they share only t."
  - "Differentiate or integrate each component separately, with its own initial condition."
  - "Projectile: a_x = 0, a_y = −g. The level-ground range formula needs equal launch and landing heights."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/).

## Recap

- State the axes first, for example "+x horizontal, +y up". Write position as **r(t) = x(t) i + y(t) j**.
- Motion in a plane is **two one-dimensional motions**. Fill an x | y table: initial position, initial velocity, acceleration.
- The components can have **different** velocities and accelerations, and either can change with time.
- Changing the motion along one axis does **not** change the motion along the perpendicular axis.
- A **projectile** has zero acceleration horizontally and a constant acceleration g downward.
- Three dimensions add a z-component in the same way (background only). This course analyses motion in two dimensions.

## Key relationships

| Relationship | Notes |
|---|---|
| v_x = dx/dt, v_y = dy/dt | velocity is tangent to the path |
| a_x = dv_x/dt, a_y = dv_y/dt | a need not be parallel to v |
| v_x = v_x0 + ∫a_x dt, x = x₀ + ∫v_x dt (same for y) | one initial condition per component |
| \|v\| = √(v_x² + v_y²), tan θ = v_y / v_x | check the quadrant with a sketch |
| Projectile: x = v₀ cos θ · t, y = v₀ sin θ · t − ½gt² | +y up, launch from origin |
| y = x tan θ − gx² / (2v₀² cos²θ) | path is a parabola |
| R = v₀² sin 2θ / g | **equal** launch and landing heights only |
| Horizontal launch from height h: t = √(2h/g) | fall time does not depend on horizontal speed |

## Assumptions behind the numbers

- Point object; inertial frame (the ground) unless stated.
- Projectiles: air resistance ignored, g = 9.8 m/s² downward and constant.
- Coefficients in r(t) carry units (in x = 0.10t³, the 0.10 is in m/s³).

## Mistakes to avoid

1. **Speed zero at the top.** Only v_y = 0; the speed is v_x0.
2. **Range formula on a cliff or slope.** Solve y(t) = landing height instead.
3. **Constant-a equations for a component that changes.** Integrate it.
4. **Adding component sizes** (3 and 4 make 5, not 7).
5. **Different times for x and y.** Find t from one component and use it in the other.
6. **Treating v and a as parallel.** For a projectile, a always points down.

## Quick self-check

1. r(t) = (2.0t²) i + (3.0t) j (m). What is the speed at t = 1.0 s? *(v = 4.0 i + 3.0 j, so 5.0 m/s)*
2. A ball rolls off a 1.25 m high table at 2.0 m/s. How far from the table does it land? *(t = √(2 × 1.25 ÷ 9.8) = 0.51 s; x = 1.0 m)*
3. A ball is launched at 20 m/s, 60° above the horizontal. What are its speed and acceleration at the top? *(10 m/s; 9.8 m/s² downward)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-practice/).
