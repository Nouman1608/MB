---
resourceId: "mb-ap-physcem-8.4-study-guide"
title: "Electric Fields of Charge Distributions: Study Guide (Physics C: E&M 8.4)"
description: "Calculus-based guide to the electric field of continuous charge: setting up dE = k dq/r², using symmetry, and the field of rods, rings and arcs."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.4"]
resourceType: "study-guide"
prerequisites:
  - "The field of a point charge, E = q/(4πε₀r²), and adding fields as vectors (Topic 8.3)"
  - "Resolving vectors into components with sine and cosine"
  - "Integrating simple functions, including substitution and functions of an angle"
prerequisiteResources: ["mb-ap-physcem-8.3-study-guide"]
learningObjectives:
  - "Split a continuous charge into small pieces dq = λ dl and write the field dE of one piece"
  - "Use symmetry to decide which field components cancel before you integrate"
  - "Integrate to find E for a finite rod (on its axis and on its perpendicular bisector), a ring on its axis and a circular arc at its centre"
  - "Recover the field of an infinite line, E = λ/(2πε₀r), as a limit of the finite rod"
  - "Check a result with limiting cases and sketch how E changes with position"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), so k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Keep unrounded values until the final step"
related: ["mb-ap-physcem-8.4-revision-notes", "mb-ap-physcem-8.4-practice", "mb-ap-physcem-8.4-checklist"]
next: "mb-ap-physcem-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Treat a continuous charge as many point charges dq and add their fields: E = ∫ k dq/r² in the direction r̂, one component at a time."
  - "Use symmetry first: components that cancel in pairs need no integral at all."
  - "For a line of charge, dq = λ dx or dq = λR dθ; write r and every angle in terms of the one variable you integrate over."
  - "Standard results: rod on its axis kQ/[d(d + L)]; ring on its axis kQz/(z² + a²)^(3/2); semicircle at its centre 2kλ/R; infinite line λ/(2πε₀r)."
  - "Check every answer: far away it must become kQ/r², and it must point the way symmetry says."
faqs:
  - question: "Which charge shapes do I need to integrate in this course?"
    answer: "A long straight wire or cylinder (point off its axis), a thin ring (point on its axis), a semicircular arc or part of one (point at its centre), and a finite straight rod (point on its line or on its perpendicular bisector)."
  - question: "Why not use Gauss's law for all of these?"
    answer: "Gauss's law (Topic 8.6) gives E quickly only for spherical, cylindrical or planar symmetry. A ring, an arc or a finite rod does not have that symmetry, so you integrate instead."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 8.4. You will set up and evaluate integrals. The algebra-based Physics 2 course does not ask you to integrate over a charge distribution.

Constants used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)** and **k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²**.

## From point charges to continuous charge

In Topic 8.3 you found the field of a few point charges by adding their fields as vectors. Real charged objects (a rod, a ring, a curved wire) hold charge spread along their length. You cannot list every charge, so you cut the object into tiny pieces. Each piece has charge **dq** and acts like a point charge. Its field at the point P is:

**dE = k dq / r²**, directed along r̂ (away from dq if dq is positive)

Here r is the distance from that piece to P, and r̂ is the unit vector from the piece to P. The total field is the sum of all these small fields, which is an integral:

**E = k ∫ dq / r² r̂**

This is the **principle of superposition** turned into calculus. Because E is a vector, you never integrate the magnitudes directly unless every dE points the same way. Instead, you integrate each component: E_x = ∫ dE_x and E_y = ∫ dE_y.

To write dq, use the charge density of the object:

| Object | Density | Small piece of charge |
|---|---|---|
| Straight rod or wire | λ (C/m), charge per unit length | dq = λ dx |
| Circular arc or ring of radius R | λ (C/m) | dq = λ dl = λR dθ |
| Surface | σ (C/m²) | dq = σ dA |
| Volume | ρ (C/m³) | dq = ρ dV |

For a uniform rod of charge Q and length L, λ = Q/L. For a uniform semicircle of radius R, λ = Q/(πR). In this topic you integrate along lines and arcs; surfaces and volumes come back with Gauss's law in Topic 8.6.

## A method that works every time

1. **Draw** the object, the point P and axes. Mark one general piece dq at a general position (x or θ), not at a special point.
2. **Write dq** in terms of one variable: λ dx for a rod, λR dθ for an arc.
3. **Write r** from that piece to P in terms of the same variable.
4. **Use symmetry** to decide which components cancel. Keep only the ones that survive.
5. **Write the surviving component**, for example dE_x = (k dq/r²) cos θ, with cos θ also written in the same variable.
6. **Set the limits** so they cover the whole object once.
7. **Integrate**, then **check**: units, direction, and a limiting case such as "far away, it looks like a point charge".

## Symmetry does half the work

Symmetry tells you the direction of E before any calculus. Look for pairs of pieces that sit in mirror positions relative to P.

- **Ring, point on its axis.** A piece at the top of the ring has a partner at the bottom. Their field components across the axis are equal and opposite, so they cancel. Only the component **along the axis** survives.
- **Rod, point on its perpendicular bisector.** Pieces at +y and −y pair up. The components along the rod cancel, so E is perpendicular to the rod.
- **Semicircle, point at its centre.** Pieces at angle θ and π − θ pair up. E points along the line of symmetry, away from the arc's middle for a positive charge.
- **Full ring, point at its centre.** Every piece has a partner directly opposite. Everything cancels: E = 0.
- **Rod, point on its own line.** Every dE already points the same way, along the rod's line. Nothing cancels, but nothing needs resolving either.

If you skip this step, you may integrate a component that should be zero and get a confusing answer, or you may add magnitudes that point in different directions.

## Worked example 1: a finite rod, point on its line

**Question.** A thin plastic rod of length L = 0.40 m carries a charge Q = +8.0 × 10⁻⁹ C spread uniformly. Point P lies on the line of the rod, d = 0.10 m beyond its right-hand end. Find E at P.

**Set-up.** Put the rod on the x-axis from x = −L to x = 0, with P at x = d. Take a piece of length ds at position s. Then:

- dq = λ ds, with λ = Q/L = 2.0 × 10⁻⁸ C/m
- distance from the piece to P: r = d − s
- every piece pushes a positive test charge at P in the +x direction, so all the dE vectors point the same way

**Integral.**

E = ∫ k λ ds / (d − s)², from s = −L to s = 0

Since d/ds [1/(d − s)] = 1/(d − s)², the antiderivative is kλ/(d − s). So:

E = kλ [1/d − 1/(d + L)] = **kλL / [d(d + L)] = kQ / [d(d + L)]**

**Numbers.** E = (8.99 × 10⁹)(8.0 × 10⁻⁹) ÷ [(0.10)(0.50)] = 71.92 ÷ 0.050 = 1438 N/C.

**Answer.** E ≈ **1.4 × 10³ N/C**, pointing along the rod's line, away from the rod (+x).

**Checks.**

- If P is far away (d much larger than L), d(d + L) ≈ d², so E ≈ kQ/d², the field of a point charge. Good.
- Treating the whole rod as a point charge at its centre (0.30 m from P) gives kQ/(0.30)² = 799 N/C, which is too small here. The near end of the rod is much closer than 0.30 m, and because of the 1/r² rule, close charge counts for more. The point-charge shortcut works only when P is far from the rod.

## Worked example 2: a ring of charge, point on its axis

**Question.** A thin ring of radius a = 0.050 m carries Q = +6.0 × 10⁻⁹ C spread uniformly. (a) Derive E at a distance z from the centre, along the axis. (b) Evaluate E at z = 0.12 m. (c) Find where on the axis E is greatest.

**(a) Derivation.** Every piece dq of the ring is the same distance from P:

r = √(z² + a²)

Each dE has a component along the axis and one across it. By symmetry (Figure 1), the components across the axis cancel in pairs. The axial component of one piece is:

dE_z = (k dq / r²) cos θ, where cos θ = z/r

Here z, a and r are the same for every piece, so they come out of the integral, and ∫dq = Q:

E_z = k z Q / r³ = **kQz / (z² + a²)^(3/2)**

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="ring-geo-title ring-geo-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ring-geo-title">Why the field on a ring's axis points along the axis</title>
<desc id="ring-geo-desc">A ring of radius a is seen edge-on as a tall ellipse on the left, with centre O on a horizontal axis. Point P is on the axis a distance z to the right of O. A small piece dq at the top of the ring and its partner dq prime at the bottom are joined to P by dashed lines of length r equal to the square root of z squared plus a squared. At P, the field from dq points down and to the right, and the field from dq prime points up and to the right. Short dotted arrows show their components across the axis: one points down, one points up, and they cancel. A thick arrow along the axis shows the axial components, which add.</desc>
<defs><marker id="rg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="40" y1="180" x2="545" y2="180" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#rg-arr)"/>
<text x="540" y="168" font-size="13" fill="#1d2b44" text-anchor="end">axis (z)</text>
<ellipse cx="120" cy="180" rx="24" ry="100" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="120" y1="180" x2="120" y2="80" stroke="#1d2b44" stroke-width="1"/>
<text x="128" y="134" font-size="13" fill="#1d2b44">a</text>
<circle cx="120" cy="180" r="3" fill="#1d2b44"/>
<text x="104" y="198" font-size="13" fill="#1d2b44">O</text>
<circle cx="120" cy="80" r="6" fill="#1d2b44"/>
<text x="62" y="76" font-size="13" fill="#1d2b44">dq</text>
<circle cx="120" cy="280" r="6" fill="#1d2b44"/>
<text x="56" y="300" font-size="13" fill="#1d2b44">dq′</text>
<line x1="120" y1="80" x2="380" y2="180" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<line x1="120" y1="280" x2="380" y2="180" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<text x="210" y="105" font-size="13" fill="#1d2b44">r = √(z² + a²)</text>
<circle cx="380" cy="180" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="372" y="204" font-size="13" fill="#1d2b44">P</text>
<line x1="380" y1="180" x2="464" y2="212" stroke="#1d2b44" stroke-width="2" marker-end="url(#rg-arr)"/>
<line x1="380" y1="180" x2="464" y2="148" stroke="#1d2b44" stroke-width="2" marker-end="url(#rg-arr)"/>
<text x="470" y="140" font-size="12" fill="#1d2b44">dE from dq′</text>
<text x="470" y="228" font-size="12" fill="#1d2b44">dE from dq</text>
<line x1="380" y1="180" x2="470" y2="180" stroke="#1d2b44" stroke-width="5" marker-end="url(#rg-arr)"/>
<line x1="490" y1="180" x2="490" y2="210" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3" marker-end="url(#rg-arr)"/>
<line x1="500" y1="180" x2="500" y2="150" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3" marker-end="url(#rg-arr)"/>
<text x="270" y="262" font-size="12" fill="#1d2b44">thick arrow: axial parts add</text>
<text x="270" y="280" font-size="12" fill="#1d2b44">dotted arrows: parts across the axis cancel</text>
<line x1="120" y1="320" x2="380" y2="320" stroke="#1d2b44" stroke-width="1"/>
<line x1="120" y1="314" x2="120" y2="326" stroke="#1d2b44" stroke-width="1"/>
<line x1="380" y1="314" x2="380" y2="326" stroke="#1d2b44" stroke-width="1"/>
<text x="250" y="314" font-size="13" fill="#1d2b44" text-anchor="middle">z</text>
</svg>
<figcaption>Figure 1. A ring seen edge-on. Pieces on opposite sides of the ring are the same distance r from P. Their field components across the axis (dotted) cancel; their components along the axis (thick arrow) add. So E on the axis points along the axis.</figcaption>
</figure>

**(b) Numbers.** r = √(0.12² + 0.050²) = 0.13 m. Then E = (8.99 × 10⁹)(6.0 × 10⁻⁹)(0.12) ÷ (0.13)³ = 2946 N/C, so **E ≈ 2.9 × 10³ N/C**, pointing along the axis away from the ring.

Check the meaning: kQ/r² = 3192 N/C is the size of all the dE vectors added as if they were parallel. The factor cos θ = z/r = 0.923 removes the parts that cancel: 3192 × 0.923 = 2946 N/C.

**(c) Maximum.** Differentiate:

dE_z/dz = kQ [(z² + a²) − 3z²] / (z² + a²)^(5/2)

This is zero when a² − 2z² = 0, so **z = a/√2** = 0.0354 m. There E_max = 2kQ/(3√3 a²) ≈ 0.385 kQ/a² = 8.3 × 10³ N/C.

**Limiting cases.**

- At the centre, z = 0: E = 0, as the full-ring symmetry says.
- Far away, z much larger than a: (z² + a²)^(3/2) ≈ z³, so E ≈ kQ/z², a point charge. Figure 2 shows the ring curve joining the point-charge curve.
- For z < 0 the formula gives a negative E_z: the field still points away from the ring, now in the −z direction.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="ring-graph-title ring-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ring-graph-title">Axial field of a charged ring against position on the axis</title>
<desc id="ring-graph-desc">Horizontal axis z over a from minus 3 to 3; vertical axis E_z divided by kQ over a squared, from minus 0.45 to 0.45. Solid curve: the ring's field. It is zero at z equals 0, rises to a maximum of about 0.385 at z equals a over root 2, then falls towards zero. For negative z it is the mirror image below the axis, with a minimum of about minus 0.385 at z equals minus a over root 2. Dashed curves: the point-charge field kQ over z squared, drawn for the size of z from 1.6 to 3, positive on the right and negative on the left. The solid and dashed curves come closer as the size of z grows.</desc>
<defs><marker id="rgg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="60" y1="190" x2="548" y2="190" stroke="#1d2b44" stroke-width="2" marker-end="url(#rgg-arr)"/>
<line x1="300" y1="340" x2="300" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#rgg-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="70" y1="190" x2="70" y2="196" stroke="#1d2b44"/><text x="70" y="210">−3</text>
<line x1="146.7" y1="190" x2="146.7" y2="196" stroke="#1d2b44"/><text x="146.7" y="210">−2</text>
<line x1="223.3" y1="190" x2="223.3" y2="196" stroke="#1d2b44"/><text x="223.3" y="210">−1</text>
<line x1="376.7" y1="184" x2="376.7" y2="190" stroke="#1d2b44"/><text x="376.7" y="180">1</text>
<line x1="453.3" y1="184" x2="453.3" y2="190" stroke="#1d2b44"/><text x="453.3" y="180">2</text>
<line x1="530" y1="184" x2="530" y2="190" stroke="#1d2b44"/><text x="530" y="180">3</text>
<text x="430" y="360" font-size="13">Position on axis, z / a (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="294" y1="74.4" x2="300" y2="74.4" stroke="#1d2b44"/><text x="290" y="78">0.4</text>
<line x1="294" y1="132.2" x2="300" y2="132.2" stroke="#1d2b44"/><text x="290" y="136">0.2</text>
<line x1="294" y1="247.8" x2="300" y2="247.8" stroke="#1d2b44"/><text x="290" y="252">−0.2</text>
<line x1="294" y1="305.6" x2="300" y2="305.6" stroke="#1d2b44"/><text x="290" y="309">−0.4</text>
</g>
<text x="310" y="36" font-size="13" fill="#1d2b44">E_z ÷ (kQ/a²)</text>
<polyline points="70.0,217.4 77.7,219.0 85.3,220.8 93.0,222.7 100.7,224.7 108.3,227.0 116.0,229.4 123.7,232.1 131.3,235.0 139.0,238.2 146.7,241.7 154.3,245.5 162.0,249.6 169.7,254.0 177.3,258.8 185.0,264.0 192.7,269.4 200.3,275.1 208.0,281.0 215.7,286.7 223.3,292.1 231.0,296.8 238.7,300.0 246.3,301.2 254.0,299.3 261.7,293.4 269.3,282.5 277.0,266.2 284.7,244.5 292.3,218.5 300.0,190.0 307.7,161.5 315.3,135.5 323.0,113.8 330.7,97.5 338.3,86.6 346.0,80.7 353.7,78.8 361.3,80.0 369.0,83.2 376.7,87.9 384.3,93.3 392.0,99.0 399.7,104.9 407.3,110.6 415.0,116.0 422.7,121.2 430.3,126.0 438.0,130.4 445.7,134.5 453.3,138.3 461.0,141.8 468.7,145.0 476.3,147.9 484.0,150.6 491.7,153.0 499.3,155.3 507.0,157.3 514.7,159.2 522.3,161.0 530.0,162.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="422.7,77.2 430.3,90.0 438.0,100.8 445.7,110.0 453.3,117.8 461.0,124.5 468.7,130.3 476.3,135.4 484.0,139.8 491.7,143.8 499.3,147.3 507.0,150.4 514.7,153.2 522.3,155.6 530.0,157.9" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="177.3,302.8 169.7,290.0 162.0,279.2 154.3,270.0 146.7,262.2 139.0,255.5 131.3,249.7 123.7,244.6 116.0,240.2 108.3,236.2 100.7,232.7 93.0,229.6 85.3,226.8 77.7,224.4 70.0,222.1" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="354.2" cy="78.8" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="245.8" cy="301.2" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="345" y="60">maximum at z = a/√2</text>
<text x="160" y="330">minimum at z = −a/√2</text>
<text x="370" y="240">dashed: point charge kQ/z²</text>
<text x="370" y="258">solid: ring</text>
</g>
</svg>
<figcaption>Figure 2. The axial field of a positive ring, scaled by kQ/a². It is zero at the centre, peaks at z = ±a/√2 with size about 0.385 kQ/a², and changes sign with z because it always points away from the ring. The dashed point-charge curve shows the ring behaving like a point charge when |z| is large.</figcaption>
</figure>

## The finite rod on its perpendicular bisector, and the infinite line

Put a uniform rod (charge per length λ, length L) on the y-axis from −L/2 to +L/2. P is on the x-axis at distance x. A piece dy at height y is a distance r = √(x² + y²) from P. By symmetry, the y-components cancel. The x-component of one piece is:

dE_x = (kλ dy / r²)(x / r) = kλx dy / (x² + y²)^(3/2)

Integrate from −L/2 to L/2, using the antiderivative y / [x²√(x² + y²)]:

**E = kλL / [x√(x² + L²/4)] = kQ / [x√(x² + L²/4)]**, perpendicular to the rod

Two limits make this result worth knowing:

- **Far away** (x much larger than L): √(x² + L²/4) ≈ x, so E ≈ kQ/x², a point charge.
- **Very long rod** (L much larger than x): √(x² + L²/4) ≈ L/2, so **E ≈ 2kλ/x = λ/(2πε₀x)**. This is the field of an **infinite line of charge**. It falls as 1/x, not 1/x², because there is always more charge further along the line.

The same 1/r field applies outside a long, uniformly charged cylinder, measured from its axis: from outside, the cylinder acts like a line carrying the same charge per unit length. In Topic 8.6 you will get this result again in two lines using Gauss's law.

## Arcs: a semicircle at its centre

Take a thin rod bent into a semicircle of radius R with uniform charge λ = Q/(πR). Put the centre at the origin and let the arc run from θ = 0 to θ = π (the upper half). A piece at angle θ has dq = λR dθ and is a distance **R** from the centre, for every θ.

Each dE at the centre points away from its piece, in the direction (−cos θ, −sin θ). Pieces at θ and π − θ cancel in x, so only y survives:

E_y = −∫ (kλR dθ / R²) sin θ = −(kλ/R) ∫₀^π sin θ dθ = −2kλ/R

So **E = 2kλ/R = 2kQ/(πR²)**, pointing along the arc's line of symmetry, away from the arc (for positive charge).

For **part of an arc**, change the limits. A quarter circle from θ = 0 to π/2 gives E_x = −kλ/R and E_y = −kλ/R, so its field is √2 kλ/R at 45°. A symmetric arc spanning angles π/2 ± θ₀ gives 2kλ sin θ₀ / R. With θ₀ = π/2 this is the semicircle again, which is a good check.

**Quick numbers.** A semicircle of radius 0.10 m carrying +5.0 × 10⁻⁹ C has λ = 1.59 × 10⁻⁸ C/m and E = 2kλ/R = 2.9 × 10³ N/C at its centre. A point charge Q at distance R would give kQ/R² = 4.5 × 10³ N/C. The arc's field is smaller by the factor 2/π ≈ 0.64 because the pieces pull in different directions.

## The results you are expected to derive

| Charge distribution | Point P | Field (size) | Direction (positive charge) |
|---|---|---|---|
| Finite rod, length L, charge Q | On its line, distance d from the near end | kQ / [d(d + L)] | Along the line, away from the rod |
| Finite rod, length L, charge Q | On its perpendicular bisector, distance x | kQ / [x√(x² + L²/4)] | Perpendicular to the rod, away from it |
| Infinite line or long cylinder, λ | Distance r from the axis | λ/(2πε₀r) = 2kλ/r | Radially away from the axis |
| Ring, radius a, charge Q | On its axis, distance z from centre | kQz / (z² + a²)^(3/2) | Along the axis, away from the ring |
| Semicircle, radius R, λ | At its centre | 2kλ/R | Along the symmetry line, away from the arc |

The course expects you to integrate only for these shapes and locations. For any other shape (for example, a point off the axis of a ring) the integral is not expected.

## Common misconceptions

- **Adding magnitudes instead of components.** ∫k dq/r² is the answer only if every dE points the same way, as for a point on the rod's own line. Otherwise resolve first.
- **"Treat the object as a point charge at its centre."** This works only far away. Close to a rod, the near end dominates (Worked example 1).
- **Leaving two variables in the integral.** If you integrate over x, then r and cos θ must also be written in x.
- **Forgetting that the distance r changes along a rod** but is constant for a ring or an arc measured from its centre.
- **Integrating a component that symmetry has already cancelled.** You will get zero, but you waste time and may make sign errors.
- **"The field is biggest at the centre of a ring."** It is zero there. On the axis it peaks at z = a/√2.
- **Using 1/r² for an infinite line.** A long line gives E ∝ 1/r.
- **Wrong λ for an arc.** The arc length of a semicircle is πR, so λ = Q/(πR), not Q/(2πR).

## Where this leads

Next, [Topic 8.5, Electric Flux](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-study-guide/), measures how much field passes through a surface. That leads to Gauss's law (Topic 8.6), which gives the line and cylinder results above much more quickly. In Unit 9 you will use the same "cut it into dq" method to find electric potential, which is easier because potential is a scalar. If the point-charge field still feels shaky, review [Topic 8.3, Electric Fields](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-study-guide/).

Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-checklist/).
