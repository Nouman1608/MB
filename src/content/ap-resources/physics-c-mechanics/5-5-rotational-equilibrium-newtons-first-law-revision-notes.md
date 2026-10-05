---
resourceId: "mb-ap-physcm-5.5-revision-notes"
title: "Rotational Equilibrium and Newton’s First Law in Rotational Form: Revision Notes (Physics C: Mechanics 5.5)"
description: "One-page recap of rotational equilibrium for the calculus-based course: Στ = 0 and constant ω, the torque of a distributed weight, the free choice of torque point, and the two independent conditions."
course: "physics-c-mechanics"
unit: 5
topics: ["5.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.5-study-guide"]
learningObjectives:
  - "Recall the conditions for rotational and translational equilibrium and how they differ"
  - "Spot the common lever-arm, center-of-mass and torque-point errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.5-study-guide", "mb-ap-physcm-5.5-practice", "mb-ap-physcm-5.5-checklist"]
next: "mb-ap-physcm-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Στ = 0 if and only if ω is constant (including ω = 0)."
  - "ΣF = 0 and Στ = 0 are separate conditions; check both."
  - "Weight acts at the center of mass: τ = −Mg x_cm about a pivot at x = 0."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For the derivations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/).

## Recap

- **Rotational equilibrium:** the net torque on the system is zero. Then ω is constant. The constant can be zero (a resting shelf) or not (a fan at steady speed).
- **Newton’s first law, rotational form:** ω stays constant only if Στ = 0. **Corollary:** unbalanced torques mean ω is changing.
- **Translational equilibrium** (ΣF = 0) is a separate condition. A couple gives ΣF = 0 with Στ ≠ 0; a tumbling object in free fall has Στ = 0 about its center of mass with ΣF ≠ 0.
- Draw an **extended force diagram**: the object’s outline, each force starting where it acts, the axis marked.
- One plane of rotation only: state "counterclockwise positive" and give every torque a sign.

## Key relationships

| Relationship | Meaning | When to use |
|---|---|---|
| τ = rF sin θ = r⊥F | size of one torque | every force; r⊥ is the lever arm |
| Στ = 0 | rotational equilibrium | ω constant |
| ΣF_x = 0, ΣF_y = 0 | translational equilibrium | v_cm constant |
| τ_grav = −g∫x dm = −Mg x_cm | weight acts at the center of mass | extended or non-uniform objects |
| x_cm = (1/M)∫x λ(x) dx, M = ∫λ dx | center of mass of a rod | λ(x) given |
| τ_Q = τ_P − d × ΣF | torque about a new point | if ΣF = 0, the torque point does not matter |

## Assumptions behind the numbers

- Rigid objects; all forces and rotation in one plane.
- g = 9.8 m/s². Light (massless) strings and cables unless a mass is given.
- "About to tip" means the support on the far side has just reached zero force.

## Mistakes to avoid

1. **Weight at the middle of a non-uniform object.** Integrate for x_cm first.
2. **Distance instead of lever arm.** Use the perpendicular distance to the line of action.
3. **Ignoring a pivot force in ΣF.** It has no torque about the pivot but still balances forces.
4. **"Spinning means not in equilibrium."** Constant ω is equilibrium.
5. **"ΣF = 0 means no rotation."** Look for a couple.
6. **Choosing a torque point that keeps every unknown.** Take torques where an unknown force acts.
7. **Forcing a unique answer** when there are more unknowns than equations (statically indeterminate).

## Quick self-check

1. A uniform plank (10 kg, 2.0 m) rests on supports at its left end and 1.6 m from it. Find both support forces. *(Torques about the left end: N(1.6) = 98(1.0), so N = 61 N; the left support gives 98 − 61 = 37 N.)*
2. A 0.90 m rod has λ = kx, where x is measured from its thin end. Where is its balance point? *(x_cm = ∫kx² dx ÷ ∫kx dx = 2L/3 = 0.60 m from the thin end.)*
3. Two opposite 5.0 N forces act on a free board along parallel lines 0.30 m apart. Find ΣF and the net torque. *(ΣF = 0; Στ = 5.0 × 0.30 = 1.5 N·m about every point, so ω changes.)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-practice/).
