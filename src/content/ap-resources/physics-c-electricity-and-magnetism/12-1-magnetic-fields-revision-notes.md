---
resourceId: "mb-ap-physcem-12.1-revision-notes"
title: "Magnetic Fields: Revision Notes (Physics C: E&M 12.1)"
description: "One-page recap of magnetic fields for the calculus-based course: dipoles, field maps, Gauss's law for magnetism, magnetic materials, Earth's field and permeability."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-12.1-study-guide"]
learningObjectives:
  - "Recall the properties of magnetic fields, dipoles and magnetic materials"
  - "Use ∮B·dA = 0 to find a missing flux quickly"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-12.1-study-guide", "mb-ap-physcem-12.1-practice", "mb-ap-physcem-12.1-checklist"]
next: "mb-ap-physcem-12.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "No monopoles: ∮B·dA = 0 for every closed surface."
  - "Field lines are closed loops: N to S outside a magnet, S to N inside."
  - "Ferro: strong, can stay magnetised. Para: weak, with the field. Dia: weak, against the field, in all materials."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For Figure 1, the derivations and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/). This guide is for the calculus-based course.

## Recap

- B is a **vector field**. It gives the magnetic force on moving charges, currents and magnetic materials. Unit: tesla (T). A charge at rest feels no magnetic force.
- Sources of B are **dipoles** or combinations of dipoles, never monopoles. Each dipole has an N and an S pole. Cut a magnet and each piece is a dipole.
- Like poles repel; unlike poles attract. A compass (a small dipole) turns so that its N end points along B.
- A dipole's field gets weaker with distance from it.
- Dipoles come from the circular or spinning motion of charge, mainly electrons. Permanent and induced magnetism both come from **aligned** dipoles.
- Earth's field is modelled as a dipole field. The pole near the geographic North Pole is a magnetic **south** pole.
- μ₀ = 4π × 10⁻⁷ T·m/A is the constant permeability of free space. A material's μ depends on its composition and changes with temperature, orientation and field strength.

## Key relationships

| Idea | Statement |
|---|---|
| Gauss's law for magnetism (Maxwell's second equation) | ∮B·dA = 0 for any closed surface |
| Flux through an open surface | Φ_B = ∫B·dA; flat area in uniform B: Φ_B = BA cos θ |
| Unit of flux | 1 Wb = 1 T·m² |
| Missing flux | Φ_last part = −(sum of fluxes through all other parts) |
| Radial field near an axis (symmetric field) | B_r = −(r/2) dB_z/dz |
| Material types | ferro: μ ≫ μ₀; para: μ slightly > μ₀; dia: μ slightly < μ₀ |

## Assumptions

- Outward area vectors on closed surfaces, as for the electric Gauss's law.
- "Uniform field" means the same B at every point of the surface.
- The radial-field result needs symmetry about the z-axis and a point close to the axis.

## Mistakes to avoid

1. **Ending field lines at the S pole.** They carry on through the magnet.
2. **Non-zero net flux around a pole.** Every closed surface has zero net magnetic flux.
3. **Forgetting the sign.** Flux is negative where lines go **in** through a closed surface.
4. **Calling diamagnetism rare.** All materials have it; it is just weak.
5. **Treating μ as a fixed material constant.** Only μ₀ is fixed.
6. **Earth's poles.** The compass N end points towards a magnetic S pole.

## Quick self-check

1. A closed surface has 3.0 × 10⁻⁴ Wb entering through its base and 1.8 × 10⁻⁴ Wb leaving through its top. What is the flux through the rest? *(+1.2 × 10⁻⁴ Wb, leaving)*
2. An unmagnetised steel paper clip is attracted to either pole of a magnet. Why? *(The field induces aligned dipoles in it, with the near end opposite to the nearby pole)*
3. Aluminium is weakly attracted to a strong magnet but keeps no magnetism afterwards. Which type is it? *(Paramagnetic)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-practice/).
