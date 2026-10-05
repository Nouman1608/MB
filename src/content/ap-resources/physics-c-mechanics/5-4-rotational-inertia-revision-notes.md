---
resourceId: "mb-ap-physcm-5.4-revision-notes"
title: "Rotational Inertia: Revision Notes (Physics C: Mechanics 5.4)"
description: "One-page recap of rotational inertia for the calculus-based course: Σmr², ∫r² dm with good mass elements, the standard rod, shell, disk and annulus results, and the parallel axis theorem."
course: "physics-c-mechanics"
unit: 5
topics: ["5.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.4-study-guide"]
learningObjectives:
  - "Recall the definition of rotational inertia, the standard derived results and the parallel axis theorem"
  - "Spot the common distance, element and axis errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.4-study-guide", "mb-ap-physcm-5.4-practice", "mb-ap-physcm-5.4-checklist"]
next: "mb-ap-physcm-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "I = Σmr² or ∫r² dm, with r the perpendicular distance to the axis."
  - "I = I_cm + Md²; the minimum is about the centre-of-mass axis."
  - "Mass far from the axis raises I: hoop MR² > disk ½MR²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This is the recap for the **calculus-based** course, where you derive rotational inertias by integration. For figures and full derivations, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/).

## Recap

- **Rotational inertia** I measures a rigid system's resistance to changes in its rotation about a **given axis**.
- It depends on the **mass** and on **how far that mass is from the axis**.
- Point masses: add mr² for each, all about the same axis.
- Continuous objects: I = ∫r² dm. Pick dm so that all of it is the same distance from the axis, write dm = λ dx or σ(2πr dr), integrate, then replace λ or σ by M.
- **Parallel axis theorem**: I = I_cm + Md², so I is smallest about the centre-of-mass axis.

## Key relationships

| Object and axis | I | How you get it |
|---|---|---|
| Point mass at distance r | mr² | definition |
| Uniform rod, perpendicular axis at x = a | M(L²/3 − La + a²) | ∫(x − a)²(M/L) dx from 0 to L |
| Uniform rod, centre | ML²/12 | a = L/2 |
| Uniform rod, end | ML²/3 | a = 0 |
| Thin hoop or cylindrical shell, central axis | MR² | all mass at R |
| Uniform disk or solid cylinder, central axis | ½MR² | rings, dm = σ 2πr dr |
| Annular ring, central axis | ½M(R₁² + R₂²) | rings from R₁ to R₂ |
| Any object, parallel axis a distance d from the cm axis | I_cm + Md² | parallel axis theorem |

Unit: kg·m².

## What you must derive

Rods (uniform or nonuniform) about any perpendicular axis; thin cylindrical shells, disks and annular rings, or other coaxial rings and shells, about the central axis. Other shapes, such as spheres, are given if needed.

## Mistakes to avoid

1. **Distance to the origin instead of to the axis.** For the y-axis, r = |x|.
2. **r instead of r².**
3. **A bad element.** A strip across a disk is not all at one distance from the centre.
4. **Leaving λ₀ or σ in the answer** when the question asks for M.
5. **Parallel axis from a non-cm axis.** Always go through I_cm.
6. **"Hoop and disk of the same M and R have the same I."** The hoop's is twice as big.

## Quick self-check

1. Two 0.30 kg beads sit 0.20 m from an axis, one on each side. I? *(2 × 0.30 × 0.20² = 0.024 kg·m²)*
2. A uniform 0.60 kg rod, 0.80 m long, turns about one end. I? *(0.60 × 0.80²/3 = 0.128 kg·m²)*
3. A uniform 2.0 kg disk of radius 0.15 m turns about a perpendicular axis through its rim. I? *(½MR² + MR² = 1.5 × 2.0 × 0.15² = 0.0675 kg·m²)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-practice/).
