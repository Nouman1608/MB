---
resourceId: "mb-ap-physcem-8.6-study-guide"
title: "Gauss's Law: Study Guide (Physics C: E&M 8.6)"
description: "Calculus-based guide to Gauss's law: flux through closed surfaces, choosing Gaussian surfaces by symmetry, spheres, lines, sheets and non-uniform charge densities."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.6"]
resourceType: "study-guide"
prerequisites:
  - "Electric flux Φ_E = ∫E·dA and the outward area vector (Topic 8.5)"
  - "Coulomb's law and the field of a point charge (Topics 8.1 and 8.3)"
  - "Integrating a function of r, and the volume elements 4πr² dr and 2πrL dr"
learningObjectives:
  - "State Gauss's law and explain why the net flux depends only on the enclosed charge"
  - "Choose a spherical, cylindrical or planar Gaussian surface that makes the flux integral simple"
  - "Derive E(r) inside and outside a uniformly charged sphere, and for an infinite line and an infinite sheet"
  - "Integrate a non-uniform charge density to find the enclosed charge and the field"
  - "Check results with limiting cases: continuity at the surface and point-charge behaviour at large r"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), so 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Keep unrounded values until the final step"
related: ["mb-ap-physcem-8.6-revision-notes", "mb-ap-physcem-8.6-practice", "mb-ap-physcem-8.6-checklist"]
next: "mb-ap-physcem-8.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Gauss's law: Φ_E = ∮E·dA = q_enc/ε₀ for any closed surface."
  - "The law is always true, but it gives E easily only when symmetry makes E constant and perpendicular (or parallel) on each part of the surface."
  - "Use spheres for spherical symmetry, coaxial cylinders for line symmetry and pillboxes for planes."
  - "For a non-uniform density, find q_enc by integrating ρ dV, for example dV = 4πr² dr."
  - "Always check: E is continuous at the surface of a volume charge, and E → q/(4πε₀r²) far away."
faqs:
  - question: "Is Gauss's law part of Physics 2?"
    answer: "No. Gauss's law is in the calculus-based Physics C: Electricity and Magnetism course (Topic 8.6). The algebra-based Physics 2 course covers electric fields without Gauss's law."
  - question: "If the net flux is zero, is the field zero on the surface?"
    answer: "Not necessarily. Zero net flux means zero enclosed charge. A charge outside the surface still creates a field on it; its field lines enter and leave, so their contributions to the flux cancel."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 8.6. Gauss's law is not part of the algebra-based Physics 2 course. You will need to set up and evaluate integrals here.

Constant used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**, so 1/(4πε₀) = 8.99 × 10⁹ N·m²/C².

## From flux to Gauss's law

In Topic 8.5 you met **electric flux**, Φ_E. For a small patch of surface with area vector dA, the flux through it is E·dA. The total flux through a surface is the surface integral:

**Φ_E = ∫ E·dA**

For a **closed** surface, dA always points **outward**. Field lines leaving the surface give positive flux; lines entering give negative flux.

Now put a point charge q at the centre of a sphere of radius r. On the sphere, E is radial with constant magnitude q/(4πε₀r²), and it is parallel to dA everywhere. So:

Φ_E = E × (area) = [q/(4πε₀r²)] × 4πr² = q/ε₀

The r cancels. The flux does not depend on the size of the sphere. This is because E falls as 1/r² while the area grows as r². The same field lines cross every closed surface around the charge, whatever its size or shape. That idea gives **Gauss's law**:

**Φ_E = ∮ E·dA = q_enc / ε₀**

- The circle on the integral means the surface is **closed** (a Gaussian surface is a 3D closed surface).
- q_enc is the **net** charge inside the surface. Charges outside add nothing to the net flux.
- If q_enc stays the same, the flux stays the same when you enlarge or reshape the surface.

Gauss's law is the first of Maxwell's equations, so it is true for every closed surface. It is only *useful* for finding E when symmetry lets you take E out of the integral.

## Choosing a Gaussian surface

Choose the surface so that, on each part of it, E is either:

- **perpendicular** to the surface (parallel to dA) with **constant magnitude**, so E·dA = E dA and the integral becomes E × area; or
- **parallel** to the surface (perpendicular to dA), so E·dA = 0 there.

| Symmetry of the charge | Gaussian surface | ∮E·dA becomes |
|---|---|---|
| Spherical (point, sphere, shell) | concentric sphere, radius r | E(4πr²) |
| Cylindrical (long line, long cylinder) | coaxial cylinder, radius r, length L | E(2πrL); the end caps give zero |
| Planar (large sheet or slab) | "pillbox" cylinder through the sheet, end area A | 2EA for a thin sheet; the curved side gives zero |

The course expects you to apply Gauss's law quantitatively only to point charges and to distributions with spherical, cylindrical or planar symmetry. For a cube or a finite rod, the law is still true but E is not constant over any simple surface.

## Standard results

**Uniformly charged solid sphere** (insulator), total charge Q, radius R, density ρ = Q / [(4/3)πR³].

- Outside (r ≥ R): q_enc = Q, so E(4πr²) = Q/ε₀ and **E = Q/(4πε₀r²)**. It looks exactly like a point charge at the centre.
- Inside (r < R): only the charge within radius r counts: q_enc = ρ(4/3)πr³ = Q r³/R³. Then E(4πr²) = Q r³/(ε₀R³), so **E = Q r /(4πε₀R³) = ρr/(3ε₀)**. E grows linearly from zero at the centre.

**Infinite line charge**, charge per length λ. A coaxial cylinder of length L encloses λL. Only the curved side has flux: E(2πrL) = λL/ε₀, so **E = λ/(2πε₀r)**.

**Infinite sheet**, charge per area σ. A pillbox with end area A encloses σA. Field lines leave through both ends: 2EA = σA/ε₀, so **E = σ/(2ε₀)**, the same at every distance.

## Non-uniform charge density

If the density changes with r, you cannot multiply ρ by a volume. Instead, split the charge into thin shells. A spherical shell of radius r′ and thickness dr′ has volume dV = 4πr′² dr′ and charge dq = ρ(r′) 4πr′² dr′. Then:

**q_enc(r) = ∫₀ʳ ρ(r′) 4πr′² dr′**

Use dV = 2πr′L dr′ for a cylinder, and dA = 2πr′ dr′ for a flat disc with surface density σ(r′). The Gaussian surface step is unchanged: E(4πr²) = q_enc(r)/ε₀.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="gauss-er-title gauss-er-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gauss-er-title">Electric field against distance for two charged spheres</title>
<desc id="gauss-er-desc">Horizontal axis r over R from 0 to 3; vertical axis E over E at the surface from 0 to 1. Solid line: uniform sphere, a straight line from the origin to the value 1 at r equals R. Dashed curve: sphere with density proportional to r, a parabola from the origin to 1 at r equals R, passing through one quarter at r equals half R. Beyond r equals R both follow the same curve, one over r over R squared, falling to one quarter at r equals 2R and one ninth at r equals 3R. A dotted horizontal line at one quarter joins the dashed curve at half R to the outside curve at 2R.</desc>
<defs><marker id="ge-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#ge-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#ge-arr)"/>
<line x1="220" y1="300" x2="220" y2="70" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="145" y1="245" x2="370" y2="245" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="145" y1="300" x2="145" y2="306" stroke="#1d2b44"/><text x="145" y="320">0.5</text>
<line x1="220" y1="300" x2="220" y2="306" stroke="#1d2b44"/><text x="220" y="320">1</text>
<line x1="370" y1="300" x2="370" y2="306" stroke="#1d2b44"/><text x="370" y="320">2</text>
<line x1="520" y1="300" x2="520" y2="306" stroke="#1d2b44"/><text x="520" y="320">3</text>
<text x="300" y="350" font-size="13">Distance from centre, r / R (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="245" x2="70" y2="245" stroke="#1d2b44"/><text x="60" y="249">0.25</text>
<line x1="64" y1="190" x2="70" y2="190" stroke="#1d2b44"/><text x="60" y="194">0.50</text>
<line x1="64" y1="135" x2="70" y2="135" stroke="#1d2b44"/><text x="60" y="139">0.75</text>
<line x1="64" y1="80" x2="70" y2="80" stroke="#1d2b44"/><text x="60" y="84">1.00</text>
</g>
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Field, E / E(R) (no unit)</text>
<line x1="70" y1="300" x2="220" y2="80" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,300.0 85.0,297.8 100.0,291.2 115.0,280.2 130.0,264.8 145.0,245.0 160.0,220.8 175.0,192.2 190.0,159.2 205.0,121.8 220.0,80.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="220.0,80.0 235.0,118.2 257.5,159.2 280.0,187.8 295.0,202.2 332.5,228.2 370.0,245.0 407.5,256.5 445.0,264.8 482.5,270.9 520.0,275.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="145" cy="245" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="370" cy="245" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="78" y="110">uniform ρ: E ∝ r</text>
<text x="150" y="285">ρ = ρ₀r/R: E ∝ r²</text>
<text x="300" y="150">outside: E ∝ 1/r²</text>
<text x="226" y="66">surface, r = R</text>
</g>
</svg>
<figcaption>Figure 1. E(r) for a uniformly charged sphere (solid line inside) and a sphere with ρ = ρ₀r/R (dashed curve inside), each scaled by its own surface field E(R). Outside, both follow the same solid 1/r² curve, as for a point charge. The open circles mark equal fields, E(R)/4, at r = R/2 on the dashed curve and at r = 2R outside. E itself is measured in N/C.</figcaption>
</figure>

## Worked example 1: uniform sphere, inside and outside

**Question.** An insulating sphere of radius R = 0.10 m carries a charge Q = 4.0 × 10⁻⁹ C spread uniformly through its volume. Find E at r = 0.050 m, at the surface and at r = 0.20 m.

1. Inside (r = 0.050 m): E = Qr/(4πε₀R³) = (8.99 × 10⁹)(4.0 × 10⁻⁹ C)(0.050 m) ÷ (0.10 m)³ = 1798 N/C.
2. Surface (r = R): E = Q/(4πε₀R²) = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ (0.10)² = 3596 N/C. The inside formula with r = R gives the same value.
3. Outside (r = 0.20 m): E = Q/(4πε₀r²) = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ (0.20)² = 899 N/C.

**Answer.** 1.8 × 10³ N/C, 3.6 × 10³ N/C and 9.0 × 10² N/C, all directed radially outward (2 significant figures, matching the data).

**Check.** Halving r inside halves E (E ∝ r). Doubling r outside quarters E (E ∝ 1/r²). The two formulas agree at r = R, so E is continuous, as it must be for a volume charge with no surface layer.

## Worked example 2: a non-uniform sphere, ρ = ρ₀ r/R

**Question.** A sphere of radius R has charge density ρ(r) = ρ₀ r/R for r ≤ R, where ρ₀ is a positive constant. (a) Find the total charge. (b) Find E inside and outside. (c) Check the limits. (d) Evaluate E(R) for ρ₀ = 2.0 × 10⁻⁶ C/m³ and R = 0.30 m.

**(a) Enclosed charge.** Use thin shells:

q_enc(r) = ∫₀ʳ (ρ₀ r′/R) 4πr′² dr′ = (4πρ₀/R) ∫₀ʳ r′³ dr′ = (4πρ₀/R)(r⁴/4) = **πρ₀r⁴/R**

At r = R this gives the total charge **Q = πρ₀R³**.

**(b) Field.** Use a concentric spherical Gaussian surface of radius r. By symmetry E is radial and has the same size everywhere on it, so ∮E·dA = E(4πr²).

- Inside: E(4πr²) = πρ₀r⁴/(Rε₀), so **E = ρ₀r²/(4ε₀R)**.
- Outside: E(4πr²) = πρ₀R³/ε₀, so **E = ρ₀R³/(4ε₀r²)**.

**(c) Limiting cases.**

- At r = R: inside gives ρ₀R²/(4ε₀R) = ρ₀R/(4ε₀); outside gives ρ₀R³/(4ε₀R²) = ρ₀R/(4ε₀). They match, so E is continuous.
- At the centre, r → 0: E → 0, as symmetry requires.
- For large r: ρ₀R³/(4ε₀r²) = (πρ₀R³)/(4πε₀r²) = Q/(4πε₀r²), the field of a point charge Q.
- At r = R/2: q_enc is (1/2)⁴ = 1/16 of Q, so E = (1/16) × 4 = 1/4 of E(R). Compare E ∝ r for a uniform sphere, where the ratio would be 1/2.

**(d) Numbers.** E(R) = ρ₀R/(4ε₀) = (2.0 × 10⁻⁶ C/m³)(0.30 m) ÷ (4 × 8.85 × 10⁻¹² C²/(N·m²)) = 1.69 × 10⁴ N/C. The total charge is Q = π(2.0 × 10⁻⁶)(0.30)³ = 1.70 × 10⁻⁷ C.

**Interpretation.** Most of the charge sits near the surface, so the field stays small deep inside and rises steeply (as r²) near r = R. Figure 1 shows this as the dashed curve.

## Conductors: a pointer to Unit 10

Gauss's law also explains why the field inside a conductor in electrostatic equilibrium is zero, why excess charge sits on its surface and how a closed conducting shell shields its inside from outside fields. Those ideas belong to Topic 10.1, Electrostatics with Conductors, and are not needed for this topic's questions.

## Common misconceptions

- **"Zero flux means zero field."** Zero net flux means zero *enclosed* charge. Outside charges still produce a field on the surface.
- **"Charges outside the surface do not affect E."** They do not affect the net *flux*, but they do change E at each point. That is why symmetry is essential before you write ∮E·dA = E × area.
- **Using Q instead of q_enc inside a body.** Inside a sphere only the charge within radius r counts.
- **Multiplying ρ by a volume when ρ varies.** For ρ(r) you must integrate ρ dV.
- **Counting the cylinder's end caps for a line charge.** E is parallel to the end caps, so their flux is zero.
- **Using σ/ε₀ for an isolated sheet.** A thin sheet sends flux out of **both** faces of the pillbox: E = σ/(2ε₀).
- **"The sheet's field weakens with distance."** For an infinite sheet, E does not depend on distance. It is a good model only close to a large sheet.
- **Using Gauss's law on shapes without symmetry.** The law is true for a cube of charge, but you cannot pull E out of the integral.

## Where this leads

Gauss's law is the first of Maxwell's equations. Next you will integrate these fields to find electric potential (Unit 9), use Gauss's law to analyse conductors and capacitors (Unit 10), and meet its magnetic partner, Ampère's law (Topic 12.4), which uses the same symmetry thinking. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-checklist/).
