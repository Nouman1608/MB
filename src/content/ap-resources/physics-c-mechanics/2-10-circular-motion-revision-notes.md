---
resourceId: "mb-ap-physcm-2.10-revision-notes"
title: "Circular Motion: Revision Notes (Physics C: Mechanics 2.10)"
description: "One-page recap of circular motion: centripetal and tangential acceleration, period and frequency, loops, banked curves with friction, conical pendulums and Kepler's third law."
course: "physics-c-mechanics"
unit: 2
topics: ["2.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-2.10-study-guide"]
learningObjectives:
  - "Recall the circular-motion relationships and the condition behind each"
  - "Spot the force-diagram and radius errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-2.10-study-guide", "mb-ap-physcm-2.10-practice", "mb-ap-physcm-2.10-checklist"]
next: "mb-ap-physcm-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "a_c = v²/r toward the centre; a_t = dv/dt along the path; net a is their vector sum."
  - "ΣF toward the centre = mv²/r, built from real forces or their components."
  - "Minimum speed at the top of a loop √(gr); circular orbits obey T² = 4π²r³/(GM)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, figures and three worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/).

## Recap

- On a circle the velocity's direction changes, so the object accelerates even at constant speed.
- Differentiating r(t) = r cos(ωt) î + r sin(ωt) ĵ twice gives a = −ω²r: size v²/r, pointing to the centre.
- If the speed changes, add **tangential acceleration** a_t = dv/dt, perpendicular to a_c.
- Take **+ toward the centre** for the radial equation. "Centripetal force" is the inward net force, never an extra arrow.

## Key relationships

| Relationship | Condition or meaning |
|---|---|
| a_c = v²/r = 4π²r/T² | toward the centre, any circular path |
| a_t = dv/dt = d²s/dt² | along the velocity; zero for uniform circular motion |
| \|a\| = √(a_c² + a_t²) | net acceleration |
| T = 1/f; T = 2πr/v | uniform circular motion |
| ΣF toward centre = mv²/r | Newton's second law along the radius |
| v_min = √(gr) | top of a vertical loop, when N (or tension) is zero |
| v² = rg tan θ | banked curve needing no friction |
| v_max² = rg(sin θ + μ_s cos θ)/(cos θ − μ_s sin θ) | banked curve, friction down the slope |
| tan θ = v²/(rg); T = 2π√(L cos θ/g) | conical pendulum |
| T² = (4π²/GM) r³ | circular orbit, gravity the only force |

For v_min on a banked curve, change the sign of every μ_s term. If tan θ ≤ μ_s there is no minimum.

## Assumptions

- Inertial reference frame; objects treated as points.
- g = 9.8 m/s² near Earth's surface; orbit radius measured from the planet's centre.
- Kepler's first and second laws are not needed: orbits here are circles.

## Mistakes to avoid

1. **Drawing a "centripetal force" arrow** on a free-body diagram.
2. **Assuming the net force points to the centre** when the speed is changing.
3. **Fixing friction's direction on a banked curve** before checking the speed.
4. **Using altitude instead of orbit radius.**
5. **Normal force up at the top of a loop** (inside the track, it points down).
6. **Using frequency in place of 2πf** when finding speed: v = 2πrf.

## Quick self-check

1. A car goes round a bend of radius 16 m at 8.0 m/s. Find a_c. *(64 ÷ 16 = 4.0 m/s²)*
2. A ball on a string moves in a circle of radius 0.50 m at 2.0 Hz. Find T, v and a_c. *(T = 0.50 s; v = 2π × 0.50 × 2.0 ≈ 6.3 m/s; a_c ≈ 79 m/s²)*
3. What is the minimum speed at the top of a loop of radius 0.90 m? *(√(9.8 × 0.90) ≈ 3.0 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-practice/).
