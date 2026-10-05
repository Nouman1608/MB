---
resourceId: "mb-ap-physcm-6.6-revision-notes"
title: "Motion of Orbiting Satellites: Revision Notes (Physics C: Mechanics 6.6)"
description: "One-page recap of orbits: U = −GMm/r with the zero at infinity, what is conserved in circular and elliptical orbits, K = −½U, apsis speeds and escape velocity."
course: "physics-c-mechanics"
unit: 6
topics: ["6.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.6-study-guide"]
learningObjectives:
  - "Recall the energy and angular momentum results for circular and elliptical orbits and for escape"
  - "Spot the common sign, radius and conservation errors in orbit problems before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.6-study-guide", "mb-ap-physcm-6.6-practice", "mb-ap-physcm-6.6-checklist"]
next: "mb-ap-physcm-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "U_g = −GMm/r, zero at infinite separation; bound orbits have E < 0."
  - "Circular: K = −½U, E = ½U = −GMm/(2r). Elliptical: E and L constant, K and U trade."
  - "Escape: E = 0, so v_esc = √(2GM/r)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-study-guide/).

## Recap

- **System:** central body M plus satellite m, interacting only by gravity. If m ≪ M, the central body's motion is negligible (its speed is m/M times the satellite's).
- **Potential energy:** integrate the force from infinity, U(r) = −∫ F_r dr, to get U_g = −GMm/r. It belongs to the system and is negative for all finite r.
- **Energy** is conserved because gravity is the only force and it is conservative.
- **Angular momentum** about the central body is conserved because gravity points along r, so it exerts no torque about the centre.
- **Circular orbit:** r, v, K, U, E and L are all constant.
- **Elliptical orbit:** E and L constant; K is largest and U lowest at the closest point.
- **Escape:** a body with E = 0 just reaches infinity, with its speed falling to zero there.

## Key relationships

| Relationship | When it applies |
|---|---|
| U_g = −GMm/r | any separation r (centre to centre), zero at r = ∞ |
| E = ½mv² − GMm/r = constant | gravity the only force |
| L = mvr sin φ = constant | gravity the only force; φ is the angle between r and v |
| v = √(GM/r) | circular orbit |
| K = GMm/(2r) = −½U; E = −GMm/(2r) = ½U | circular orbit |
| r_p v_p = r_a v_a | closest and farthest points of an ellipse (v ⟂ r) |
| v_esc = √(2GM/r) = √2 × v_circular | escape from distance r |

## Assumptions behind the numbers

- m ≪ M, so the central body is treated as fixed.
- No drag and no thrust. Firing a thruster is an outside force and changes E and L.
- r is measured from the centre of the central body, not from its surface. G = 6.67 × 10⁻¹¹ N·m²/kg².

## Mistakes to avoid

1. **Altitude used as r.** Add the central body's radius.
2. **Positive U.** With the zero at infinity, U_g is negative.
3. **"Higher orbit is faster."** v = √(GM/r) falls as r rises.
4. **K constant in an ellipse.** Only E and L are.
5. **L = mvr at every point of an ellipse.** Only at the two ends.
6. **Mass in v_esc.** The satellite's mass cancels.

## Quick self-check

1. A satellite in a circular orbit has U = −6.0 × 10⁹ J. Find K and E. *(K = 3.0 × 10⁹ J; E = −3.0 × 10⁹ J)*
2. A circular orbit's radius doubles. By what factor does the speed change? *(1/√2 ≈ 0.71)*
3. A fictional asteroid has mass 6.0 × 10¹⁵ kg and radius 5.0 × 10³ m. Find the escape speed from its surface. *(√(2GM/R) ≈ 13 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-practice/).
