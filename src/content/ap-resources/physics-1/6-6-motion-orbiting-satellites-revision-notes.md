---
resourceId: "mb-ap-phys1-6.6-revision-notes"
title: "Motion of Orbiting Satellites: Revision Notes (Physics 1 6.6)"
description: "One-page recap of orbiting satellites: a fixed central body, conserved energy and angular momentum, circular and elliptical orbits, bound orbits and escape speed."
course: "physics-1"
unit: 6
topics: ["6.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-6.6-study-guide"]
learningObjectives:
  - "Recall which quantities stay constant in circular and in elliptical orbits, and why"
  - "Spot the common errors with signs, radii and escape speed before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "scientific"
related: ["mb-ap-phys1-6.6-study-guide", "mb-ap-phys1-6.6-practice", "mb-ap-phys1-6.6-checklist"]
next: "mb-ap-phys1-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Gravity only, so E is constant; gravity points at the centre, so L is constant."
  - "Circular: K, U, E, L all constant, with E = −K = U/2."
  - "Escape: E = 0, v_esc = √(2GM/r), independent of the satellite's mass."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For diagrams, derivations and worked examples, use the [full study guide](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- **System:** a central body of mass M and a satellite of mass m, interacting only by gravity. If m ≪ M, the central body's motion is negligible: treat it as fixed.
- Gravity on the satellite points at the central body's centre, so it exerts **no torque** about that centre: the satellite's **angular momentum is constant**.
- Gravity is the only force, so the system's **mechanical energy is constant**.
- **U_g = 0 at infinite separation**, so U_g is negative at every finite r, and every bound orbit has E < 0.
- **Circular orbit:** r and v fixed, so K, U_g, E and L are all constant.
- **Elliptical orbit:** E and L constant; K and U_g trade. Fastest at the closest point, slowest at the farthest.
- **Escape speed:** the speed that makes E = 0. The satellite then slows towards zero speed only as r grows without limit.

## Key relationships

| Relationship | When it applies | Use it to |
|---|---|---|
| U_g = −GMm/r | any separation r, centre to centre | find potential energy (zero at infinity) |
| E = ½mv² − GMm/r = constant | gravity the only force | link speed and distance anywhere on an orbit |
| L = mvr sin θ = constant | gravity the only force | compare speeds; L = mvr at closest and farthest points |
| v² = GM/r | circular orbit | orbital speed |
| K = GMm/(2r), E = −GMm/(2r) | circular orbit | energies; E = −K and U_g = 2E |
| v_esc = √(2GM/r) | escape from distance r | minimum speed to escape (√2 × circular speed) |

## Assumptions behind the numbers

- The satellite's mass is negligible compared with the central body's.
- No atmosphere, no other bodies, no rocket thrust: gravity from one central body is the only force.
- Central bodies are spherical, so r is measured from their centre. G = 6.67 × 10⁻¹¹ N·m²/kg².

## Mistakes to avoid

1. **Measuring r from the surface.** Add the radius of the central body.
2. **Positive potential energy.** U_g = −GMm/r is always negative.
3. **"Higher orbit, more kinetic energy."** Higher circular orbit: less K, more (less negative) E.
4. **Using L = mvr at a general point on an ellipse.** Only where v ⟂ r.
5. **Making escape speed depend on m.** It cancels.
6. **Using mgh for large changes in height.** g changes with r; use −GMm/r.

## Quick self-check

1. A satellite in a circular orbit has K = 5.0 × 10⁹ J. What are E and U_g? *(E = −5.0 × 10⁹ J; U_g = −1.0 × 10¹⁰ J)*
2. A probe moves at 6.0 km/s at its closest point, 1.0 × 10⁷ m from a planet's centre. Its farthest point is 3.0 × 10⁷ m away. How fast is it there? *(2.0 km/s)*
3. Planet B has four times the mass of planet A and the same radius. Compare their surface escape speeds. *(B's is twice A's.)*

Next: [practice questions](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-practice/).
