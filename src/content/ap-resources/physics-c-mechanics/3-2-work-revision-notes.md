---
resourceId: "mb-ap-physcm-3.2-revision-notes"
title: "Work: Revision Notes (Physics C: Mechanics 3.2)"
description: "One-page recap of work for the calculus-based course: the dot product, W = ∫F·dr, areas under force–position graphs, the work–energy theorem and conservative versus nonconservative forces."
course: "physics-c-mechanics"
unit: 3
topics: ["3.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-3.2-study-guide"]
learningObjectives:
  - "Recall the definitions and equations for work, and when each applies"
  - "Spot the common work and sign errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-3.2-study-guide", "mb-ap-physcm-3.2-practice", "mb-ap-physcm-3.2-checklist"]
next: "mb-ap-physcm-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "W = ∫F·dr; for a constant force W = Fd cos θ. Only F‖ does work."
  - "Work = signed area under the F‖–position graph."
  - "W_net = ΔK, using the work done by every force."
  - "Conservative: path-independent, zero round a loop. Friction and air resistance are not."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).

## Recap

- **Work** is energy transferred into (W > 0) or out of (W < 0) a system by a force acting while its point of application moves. Scalar; joules (1 J = 1 N·m).
- Only the force component **parallel** to the displacement does work. A perpendicular component can turn the motion without changing K.
- **Conservative** forces (gravity, ideal springs): work depends only on start and end configurations; zero round a closed path; only these have a potential energy.
- **Nonconservative** forces (kinetic friction, air resistance): work depends on the path. Energy removed by friction ≈ f × path length.
- A system can be modelled as an **object** when the point of application and the centre of mass move the same distance.

## Key relationships

| Relationship | When to use it |
|---|---|
| A · B = AB cos θ = A_xB_x + A_yB_y + A_zB_z | any dot product |
| W = F · d = Fd cos θ = F‖d | F‖ constant |
| W = ∫ₐᵇ F · dr; in 1D, W = ∫ F_x dx | force varies along the path |
| W = signed area under F‖–position graph | graph given |
| W_s = −½k(x_f² − x_i²) | ideal spring, x from relaxed length |
| W_net = ΔK = ½mv_f² − ½mv_i² | work–energy theorem, all forces |

## Assumptions behind the numbers

- Point-object model unless the question says the system changes shape.
- g = 9.8 m/s²; a level surface means gravity and the normal force do no work on horizontal motion.
- Only mechanical energy is tracked. Friction's lost energy becomes thermal energy and sound, which you only need to name.

## Mistakes to avoid

1. **F × d with a varying force.** Integrate or use the area.
2. **Wrong angle.** θ is between **F** and **d**, not between **F** and the floor.
3. **Dropping signs.** Friction on a sliding object does negative work.
4. **Work–energy theorem with one force.** Add the work of every force.
5. **"Centripetal force does work."** It is perpendicular to the velocity: W = 0.
6. **Closed loop with friction gives zero.** Only for conservative forces.
7. **Using the centre-of-mass displacement** when the point of application does not move (pushing off a wall: W = 0).

## Quick self-check

1. **F** = (2.0, −5.0) N, **d** = (4.0, 1.0) m. Find W. *(8.0 − 5.0 = 3.0 J)*
2. A 20 N force at 60° to a 3.0 m displacement. Find W. *(20 × 3.0 × cos 60° = 30 J)*
3. F_x = 4.0x³ (N, x in m). Find the work from x = 0 to 1.0 m. *([x⁴]₀¹ = 1.0 J)*
4. A 0.50 kg ball goes from 2.0 m/s to 6.0 m/s. Find the net work. *(½ × 0.50 × (36 − 4.0) = 8.0 J)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/3-2-work-practice/).
