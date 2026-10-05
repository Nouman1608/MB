---
resourceId: "mb-ap-physcm-5.2-revision-notes"
title: "Connecting Linear and Rotational Motion: Revision Notes (Physics C: Mechanics 5.2)"
description: "One-page recap linking rotation to the motion of points on a rigid system: s = rθ, v = rω, a_T = rα, centripetal acceleration ω²r, and strings or belts that do not slip."
course: "physics-c-mechanics"
unit: 5
topics: ["5.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.2-study-guide"]
learningObjectives:
  - "Recall s = rθ, v = rω, a_T = rα and a_c = ω²r, and the conditions they need"
  - "Spot the common unit and component errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.2-study-guide", "mb-ap-physcm-5.2-practice", "mb-ap-physcm-5.2-checklist"]
next: "mb-ap-physcm-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Differentiate s = rθ with r constant: v = rω, a_T = rα."
  - "Same ω and α for every point; v, a_T and a_c all scale with r."
  - "Radians only. Add a_c = ω²r at right angles to a_T for the full acceleration."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For the derivations, a labelled diagram and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/).

## Recap

- Each point of a rigid system moves on a circle of fixed radius r about the axis.
- The radian is defined by **s = rθ**, so θ must be in radians in every formula below.
- Differentiating with r constant gives **v = rω** (speed along the circle, velocity tangent) and **a_T = rα** (the component that changes the speed).
- Every rotating point also has **a_c = v²/r = ω²r** toward the axis, even if ω is constant.
- All points share θ, ω and α. Linear quantities are **proportional to r**.
- A string, hose or belt that **does not slip** moves with the rim: v = Rω, a = Rα.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| s = rθ, Δs = rΔθ | m | θ in rad; distance along the arc |
| v = ds/dt = rω | m/s | tangent to the circle |
| a_T = dv/dt = rα | m/s² | along v if speeding up, against v if slowing |
| a_c = v²/r = ω²r | m/s² | toward the axis (Topic 2.10) |
| \|a\| = √(a_T² + a_c²) | m/s² | components are perpendicular |
| v_string = Rω, a_string = Rα | m/s, m/s² | no slipping, no stretching; R where it leaves the rim |

## Assumptions behind the numbers

- Fixed axis; rigid system, so r is constant for each point.
- Strings and belts do not slip or stretch; layers thin enough that R stays constant unless stated.
- Rotation directions given as clockwise or counterclockwise only.

## Mistakes to avoid

1. **Degrees or rpm in v = rω.** Convert to rad/s.
2. **Bigger ω for outer points.** ω is shared; v grows with r.
3. **Taking a_T as the whole acceleration.** Add a_c at right angles.
4. **Zero acceleration at constant ω.** a_c = ω²r is still there.
5. **Wrong radius for a string.** Use the radius where it leaves the rim.
6. **Centripetal acceleration for the straight string.** Only parts on the circle have one.
7. **Proportional reasoning with a_c = v²/r across points.** v also changes with r; use ω²r to see a_c ∝ r at fixed ω.

## Quick self-check

1. A point 0.50 m from the axis turns through 3.0 rad. How far does it travel? *(s = rθ = 1.5 m)*
2. ω = 12 rad/s, r = 0.25 m. Find v and a_c. *(v = 3.0 m/s; a_c = 144 × 0.25 = 36 m/s²)*
3. A rope on a drum of radius 0.15 m has acceleration 0.60 m/s² and does not slip. Find α. *(α = a/R = 4.0 rad/s²)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-practice/).
