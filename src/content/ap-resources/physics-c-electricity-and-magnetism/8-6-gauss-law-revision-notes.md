---
resourceId: "mb-ap-physcem-8.6-revision-notes"
title: "Gauss's Law: Revision Notes (Physics C: E&M 8.6)"
description: "One-page recap of Gauss's law for the calculus-based course: Gaussian surfaces, standard field results, integrating non-uniform densities and the limit checks."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-8.6-study-guide"]
learningObjectives:
  - "Recall Gauss's law and the standard fields for spheres, lines and sheets"
  - "Spot enclosed-charge and symmetry errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-8.6-study-guide", "mb-ap-physcem-8.6-practice", "mb-ap-physcem-8.6-checklist"]
next: "mb-ap-physcem-8.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Φ_E = ∮E·dA = q_enc/ε₀ for any closed surface."
  - "Symmetry first: sphere, coaxial cylinder or pillbox."
  - "Non-uniform ρ: q_enc = ∫ρ dV."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-study-guide/). This topic is in the calculus-based course only; it is not part of Physics 2.

## Recap

- Gauss's law links the **net flux** through a closed surface to the **net charge inside** it. Area vectors point outward.
- The flux does not change if you resize the surface, as long as q_enc stays the same.
- The law is always true, but it gives E directly only when symmetry makes E constant and perpendicular on parts of the surface, and parallel (zero flux) on the rest.
- The course applies it quantitatively to point charges and to spherical, cylindrical and planar symmetry.
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C².

## Key relationships

| Charge distribution | Gaussian surface | Field |
|---|---|---|
| Point charge or outside any spherical distribution | sphere, radius r | E = Q/(4πε₀r²) |
| Inside a uniform solid sphere (r < R) | sphere, radius r | E = Qr/(4πε₀R³) = ρr/(3ε₀) |
| Infinite line, charge per length λ | coaxial cylinder | E = λ/(2πε₀r) |
| Inside a uniform long cylinder (r < R) | coaxial cylinder | E = ρr/(2ε₀) |
| Infinite thin sheet, σ | pillbox | E = σ/(2ε₀), independent of distance |
| Non-uniform sphere, ρ(r) | sphere, radius r | q_enc = ∫₀ʳ ρ(r′)4πr′² dr′, then E = q_enc/(4πε₀r²) |

## Assumptions behind the results

- The charge distribution has exact symmetry: "infinite" lines and sheets, and perfect spheres.
- Insulators hold their charge in place; conductors are treated in Unit 10.
- The system is in electrostatic equilibrium (charges at rest).

## Mistakes to avoid

1. **Using total Q inside a body.** Use q_enc(r).
2. **ρ × volume when ρ varies.** Integrate ρ dV.
3. **Zero flux ⇒ zero field.** Wrong: zero flux means zero enclosed charge.
4. **End caps on a line-charge cylinder.** They carry no flux.
5. **σ/ε₀ for a thin sheet.** Two faces of the pillbox carry flux, so E = σ/(2ε₀).
6. **Skipping the checks.** E should match at r = R and approach Q/(4πε₀r²) for large r.

## Quick self-check

1. What is the net flux through a closed surface around +8.85 × 10⁻¹² C? *(1.00 N·m²/C)*
2. Inside a uniform sphere, how does E change if r is doubled (still inside)? *(It doubles, since E ∝ r)*
3. A sphere has ρ = ρ₀r/R. What is q_enc(r)? *(πρ₀r⁴/R)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-practice/).
