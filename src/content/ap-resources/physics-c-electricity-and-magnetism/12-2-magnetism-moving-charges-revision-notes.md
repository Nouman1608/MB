---
resourceId: "mb-ap-physcem-12.2-revision-notes"
title: "Magnetism and Moving Charges: Revision Notes (Physics C: E&M 12.2)"
description: "One-page recap of moving charges and magnetism for the calculus-based course: the field of a moving charge, F = q(v × B), circular motion, combined fields and the Hall effect."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-12.2-study-guide"]
learningObjectives:
  - "Recall the field of a moving charge, the magnetic force law and the Hall relationship"
  - "Spot sign and direction errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-12.2-study-guide", "mb-ap-physcem-12.2-practice", "mb-ap-physcem-12.2-checklist"]
next: "mb-ap-physcem-12.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "B = (μ₀/4π) q(v × r̂)/r²; F = q(v × B)."
  - "Magnetic forces do no work: r = mv/(|q|B), T = 2πm/(|q|B)."
  - "Hall: ΔV_H = v_dBw = IB/(nqt)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For Figure 1, the derivations and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/). This guide is for the calculus-based course.

## Recap

- A **moving** charge makes a magnetic field. It depends on the velocity and on the distance to the point. B is perpendicular to both v and r, greatest when v ⊥ r and zero along the line of motion. Field lines circle the line of motion.
- A magnetic field pushes on a **moving** charge with a force perpendicular to both v and B. A charge at rest, or one moving along B, feels no magnetic force.
- For a negative charge, reverse the direction you get from the right-hand rule.
- The magnetic force does no work (F·v = 0), so speed is constant. In a uniform field the path is a circle (v ⊥ B) or a helix (v at an angle to B).
- With E and B together, the forces are independent and add as vectors.
- The Hall effect: in a field, carriers are pushed to one edge of a conductor, creating a potential difference across its width.

## Key relationships

| Quantity | Relationship |
|---|---|
| Field of a moving point charge | B = (μ₀/4π) q (v × r̂)/r²; size (μ₀/4π)qv sin θ/r² |
| Magnetic force | F = q(v × B); size qvB sin θ |
| Combined fields | F = qE + q(v × B) |
| Radius and period in uniform B | r = mv/(qB); T = 2πm/(qB) |
| Helix pitch | v∥ × T |
| Undeflected speed in crossed E and B | v = E/B |
| Hall potential difference | ΔV_H = v_dBw = IB/(nqt) |

In the sizes and in r and T, q means the magnitude of the charge. μ₀/4π = 1 × 10⁻⁷ T·m/A; 1 T = 1 N/(A·m).

## Assumptions

- Speeds much less than the speed of light (for the point-charge field and r = mv/(|q|B)).
- Uniform fields unless stated; gravity is negligible for charged particles.
- In the Hall derivation, all carriers drift at the same speed and the field is perpendicular to the strip.

## Mistakes to avoid

1. **Wrong order in a cross product.** v × B, not B × v; and v × r̂ with r **from the charge to the point**.
2. **Ignoring the sign of q.** Electrons: reverse.
3. **Saying B speeds the charge up.** It only turns it.
4. **Putting v in the period.** T = 2πm/(|q|B).
5. **Using the whole speed for the radius of a helix.** Only v⊥ goes into r.
6. **Mixing up width and thickness in the Hall formula.** ΔV_H = IB/(nqt) uses the thickness t along B.

## Quick self-check

1. A proton moves at 2.0 × 10⁶ m/s at 30° to a 0.50 T field. What is the force on it? *(8.0 × 10⁻¹⁴ N)*
2. A particle's speed is doubled and the field is doubled. What happens to the radius of its circle? *(No change)*
3. Where is the field of a moving charge zero? *(Everywhere on its line of motion, ahead and behind)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-practice/).
