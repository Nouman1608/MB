---
resourceId: "mb-ap-physcem-10.1-study-guide"
title: "Electrostatics with Conductors: Study Guide (Physics C: E&M 10.1)"
description: "Calculus-based guide to conductors in electrostatic equilibrium: zero field inside, surface charge, E = σ/ε₀, equipotentials, sharp points, polarization, cavities and shielding."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.1"]
resourceType: "study-guide"
prerequisites:
  - "Gauss's law and choosing a Gaussian surface (Topic 8.6)"
  - "Electric potential and ΔV = −∫E·dl (Unit 9)"
  - "Induced charge separation and grounding as ideas (Topic 8.2)"
prerequisiteResources: ["mb-ap-physcem-9.3-study-guide"]
learningObjectives:
  - "Explain why the field inside a conductor in electrostatic equilibrium is zero and why excess charge sits on its surface"
  - "Use Gauss's law to find the charge on the inner and outer surfaces of a hollow conductor"
  - "Explain why a conductor is an equipotential and why the field just outside it is perpendicular to the surface"
  - "Derive and use E = σ/ε₀ for the field just outside a conducting surface"
  - "Describe polarization of a conductor in an external field, the build-up of charge at sharp points, and electrostatic shielding"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), so 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.602 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-10.1-revision-notes", "mb-ap-physcem-10.1-practice", "mb-ap-physcem-10.1-checklist"]
next: "mb-ap-physcem-10.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "In electrostatic equilibrium, E = 0 everywhere inside the material of a conductor."
  - "Gauss's law then shows that there is no net charge inside the material: all excess charge sits on surfaces."
  - "The whole conductor is one equipotential, so the field just outside meets the surface at 90° and has size E = σ/ε₀."
  - "Surface charge density is largest at sharp points and edges, where the surface curves most."
  - "A closed conducting shell keeps outside fields out of its cavity (shielding); a charge inside the cavity induces an equal and opposite charge on the cavity wall."
faqs:
  - question: "Why is the field just outside a conductor σ/ε₀ and not σ/(2ε₀)?"
    answer: "For a thin isolated sheet, flux leaves both faces of the Gaussian pillbox. For a conductor, one face of the pillbox is inside the metal, where E = 0, so all the flux leaves through the outside face: EA = σA/ε₀."
  - question: "Does a metal box shield its inside from a charge placed inside it?"
    answer: "The box keeps outside fields out of the cavity. A charge inside, however, induces charge on the outer surface, so the field outside is not removed unless the box is grounded (Topic 10.2)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 10.1, the first topic of Unit 10 (Conductors and Capacitors). It builds directly on Gauss's law (Topic 8.6) and electric potential (Unit 9).

Constants used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**, so 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², and e = 1.602 × 10⁻¹⁹ C.

## What makes a conductor different

In an **ideal conductor**, some electrons are free to move through the whole material. In a metal, these are the outer electrons of the atoms. The positive ions stay fixed in the lattice.

- A conductor with a **negative** net charge has **extra electrons**. They are the excess charge carriers.
- A conductor with a **positive** net charge has **lost electrons**. Only electrons move, but you may model the result as if positive carriers sat where the missing electrons would be.

If there is any field inside the material, the free electrons feel a force qE and move. They keep moving until their new positions produce a field that cancels the original field everywhere inside. The conductor is then in **electrostatic equilibrium**: no charge is moving. The time this takes is so short that the course treats it as instant. So whenever you analyse a conductor "at rest", you may assume equilibrium has already been reached.

## Four results for a conductor in equilibrium

**1. E = 0 inside the material.** If E were not zero at some point inside, free electrons there would accelerate. That contradicts "no charge is moving". This is the starting point for everything else.

**2. No net charge inside; all excess charge is on the surface.** Draw a Gaussian surface of any shape that lies entirely **inside** the metal, just below the surface. E = 0 at every point on it, so ∮E·dA = 0, and Gauss's law gives q_enc = 0. You can shrink or move this surface anywhere inside the metal, so no region of the interior can hold net charge. Any excess charge must sit on the surface. Physically, the excess carriers repel one another and spread out until they can go no further.

**3. The conductor is an equipotential.** Between any two points A and B in the conductor, take a path that stays inside the metal. Then V_B − V_A = −∫E·dl = 0, because E = 0 along the whole path. Every point in the conductor, including every point on its surface, has the **same potential**.

**4. The field just outside is perpendicular to the surface.** Suppose E just outside had a component along the surface. It would push surface charges sideways, so they would not be in equilibrium. Another way to see it: the surface is an equipotential, and field lines always cross equipotentials at 90°.

These four results apply to any shape of conductor in equilibrium. They do not apply to insulators, which can hold charge anywhere in their volume (Topic 8.3).

## The field just outside: E = σ/ε₀

Let σ be the surface charge density at some point on the conductor. Use a small **pillbox** Gaussian surface with end area A, with one end just outside the surface and the other end just inside the metal.

- Inside end: E = 0, so no flux.
- Curved side: just outside, E is perpendicular to the surface, so it is parallel to the curved side. No flux. (The part of the side inside the metal has E = 0 anyway.)
- Outside end: E is perpendicular to it, so the flux is EA.

Gauss's law: EA = σA/ε₀, so **E = σ/ε₀**, pointing away from the surface if σ > 0 and towards it if σ < 0.

Compare this with E = σ/(2ε₀) for a thin isolated sheet (Topic 8.6). There, flux leaves through **both** ends of the pillbox. Here, one end is inside the metal, so all the flux goes out through one end.

The result is local: if a field meter reads 3.0 × 10⁴ N/C just outside a flat part of a charged metal object, the charge density there is σ = ε₀E = (8.85 × 10⁻¹²)(3.0 × 10⁴) = 2.7 × 10⁻⁷ C/m².

## Where the surface charge gathers: points and edges

Surface charge on a conductor is **not** spread evenly unless the shape is a sphere far from other charges. It is **denser at sharp points and edges** than on flat or gently curved parts. Because E = σ/ε₀, the field just outside is also strongest there.

A quick model shows why. For an isolated conducting sphere of radius R, the potential is V = Q/(4πε₀R) and σ = Q/(4πR²), so σ = ε₀V/R. Two parts of the **same** conductor must be at the **same** V. A sharply curved region behaves like a sphere of small R, so it needs a larger σ to reach the same potential. Topic 10.2 makes this exact for two spheres joined by a wire.

## Polarization in an external field

Put a **neutral** conductor in an external field E₀. Free electrons move against E₀ until the induced charges produce a field that cancels E₀ everywhere inside the metal. The side facing "upstream" (where E₀ comes from) gains negative charge and the far side is left positive. The net charge stays zero. This is **polarization**. It happens because the conductor must stay an equipotential: without the shift, points along E₀ would be at different potentials.

Outside, the field lines bend so that they meet the surface at 90°. They end on the negative induced charge and start again from the positive induced charge, as Figure 1 shows.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="cond-pol-title cond-pol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cond-pol-title">A neutral conducting sphere polarized by a uniform external field</title>
<desc id="cond-pol-desc">Field lines run from left to right across the diagram. A circle in the centre represents a neutral metal sphere. Five lines on the left curve towards the sphere and end on its left surface, meeting the surface at right angles; five matching lines leave the right surface at right angles and continue to the right. One line above and one below pass around the sphere, bending slightly towards it. Minus signs line the inside of the left surface and plus signs line the inside of the right surface. The centre of the sphere is labelled E equals zero inside, and there are no field lines inside the circle.</desc>
<defs><marker id="cp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.8">
<path d="M20 35 C200 35 220 60 280 60 C340 60 360 35 540 35" marker-end="url(#cp-arr)"/>
<path d="M20 295 C200 295 220 270 280 270 C340 270 360 295 540 295" marker-end="url(#cp-arr)"/>
<path d="M20 75 C130 75 214 70.8 237 103.6" marker-end="url(#cp-arr)"/>
<path d="M20 115 C120 115 180.4 107.5 215 127.5" marker-end="url(#cp-arr)"/>
<path d="M20 165 L205 165" marker-end="url(#cp-arr)"/>
<path d="M20 215 C120 215 180.4 222.5 215 202.5" marker-end="url(#cp-arr)"/>
<path d="M20 255 C130 255 214 259.2 237 226.4" marker-end="url(#cp-arr)"/>
<path d="M323 103.6 C346 70.8 430 75 540 75" marker-end="url(#cp-arr)"/>
<path d="M345 127.5 C379.6 107.5 440 115 540 115" marker-end="url(#cp-arr)"/>
<path d="M355 165 L540 165" marker-end="url(#cp-arr)"/>
<path d="M345 202.5 C379.6 222.5 440 215 540 215" marker-end="url(#cp-arr)"/>
<path d="M323 226.4 C346 259.2 430 255 540 255" marker-end="url(#cp-arr)"/>
</g>
<circle cx="280" cy="165" r="75" fill="#f2f4f8" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="18" font-weight="700" fill="#1d2b44" text-anchor="middle" dominant-baseline="middle">
<text x="220" y="165">−</text><text x="228" y="135">−</text><text x="228" y="195">−</text><text x="246" y="116">−</text><text x="246" y="214">−</text>
<text x="340" y="165">+</text><text x="332" y="135">+</text><text x="332" y="195">+</text><text x="314" y="116">+</text><text x="314" y="214">+</text>
</g>
<text x="280" y="170" font-size="13" fill="#1d2b44" text-anchor="middle">E = 0 inside</text>
<g font-size="12" fill="#1d2b44">
<text x="20" y="20">External field E₀ points to the right</text>
<text x="150" y="325">induced −  (left side)</text>
<text x="320" y="325">induced +  (right side)</text>
</g>
</svg>
<figcaption>Figure 1. A neutral metal sphere in a uniform field. Electrons shift left, leaving the right side positive. Field lines end on the induced negative charge and start from the induced positive charge, always meeting the surface at 90°. There is no field inside the metal. The net charge of the sphere is still zero.</figcaption>
</figure>

## Cavities and electrostatic shielding

Now make the conductor **hollow**: a closed metal shell with an empty space (a cavity) inside.

**Empty cavity.** Take a Gaussian surface inside the metal, surrounding the cavity. E = 0 on it, so the net charge on the cavity wall is zero. Could the wall hold + charge in one place and − charge in another? Then a field line would run from the + patch, across the cavity, to the − patch. Along that line ∫E·dl ≠ 0, so the two patches would be at different potentials. But the whole conductor is one equipotential. So the cavity wall has **no charge at all**, and **E = 0 everywhere in the empty cavity**, whatever happens outside.

This is **electrostatic shielding**. Surround a region with a closed conducting shell, and external fields cannot reach it. Outside charges induce charges on the **outer** surface, and those induced charges cancel the external field everywhere inside the outer surface, including in the cavity. A closed metal mesh with small gaps shields in nearly the same way; the outside field leaks in only close to the gaps. This is why sensitive instruments are often housed in metal cases.

**A charge inside the cavity.** Place a charge q in the cavity, not touching the wall. A Gaussian surface inside the metal still has E = 0 on it, so its enclosed charge is zero. Therefore the cavity wall must carry **−q**. If the conductor has net charge Q, the rest, **Q + q**, sits on the outer surface.

- Moving q around inside the cavity changes how −q is spread over the wall, but not its total.
- On a spherical outer surface far from other charges, Q + q spreads **uniformly**, wherever q is in the cavity. The metal "hides" the position of q from the outside.
- Shielding works one way only. Outside fields cannot get in, but the charge Q + q on the outer surface still produces a field outside. Grounding the shell can remove it (Topic 10.2).

## Worked example 1: a sphere inside a conducting shell

**Question.** A solid metal sphere of radius a = 0.040 m carries q₁ = +3.0 nC. It sits at the centre of a thick, concentric metal shell with inner radius b = 0.10 m and outer radius c = 0.12 m. The shell's net charge is −5.0 nC. Find (a) the charge on each surface, (b) E at r = 0.070 m, 0.11 m and 0.20 m, and (c) the charge density on the shell's outer surface, then check it with E = σ/ε₀.

**(a) Surface charges.**

1. The solid sphere is a conductor, so its +3.0 nC is on its surface, r = a.
2. Take a Gaussian sphere of radius 0.11 m, inside the shell's metal. E = 0 there, so q_enc = 0. It encloses +3.0 nC on the sphere, so the inner surface (r = b) must carry **−3.0 nC**.
3. The shell's net charge is −5.0 nC, so the outer surface (r = c) carries −5.0 − (−3.0) = **−2.0 nC**.

**(b) Fields.** Every charge layer is spherically symmetric, so use concentric Gaussian spheres.

- r = 0.070 m (in the gap): q_enc = +3.0 nC, so E = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ (0.070)² = **5.5 × 10³ N/C, outward**.
- r = 0.11 m (in the shell's metal): **E = 0**.
- r = 0.20 m (outside): q_enc = +3.0 − 5.0 = −2.0 nC, so E = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.20)² = **4.5 × 10² N/C, inward**.

**(c) Outer surface density.** σ = q/(4πc²) = (−2.0 × 10⁻⁹) ÷ (4π × 0.12²) = **−1.1 × 10⁻⁸ C/m²**. Check: |σ|/ε₀ = 1.25 × 10³ N/C. Gauss's law just outside, kQ/c² = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ 0.12² = 1.25 × 10³ N/C. They agree, and the field points inward because σ < 0.

**Interpretation.** The field outside depends only on the net charge, −2.0 nC, as if it were a point charge at the centre. The shell's metal is field-free even though there are charges on both sides of it.

## Worked example 2: a neutral slab in a uniform field

**Question.** A large, neutral metal slab, 0.020 m thick with face area 0.50 m², is placed with its faces perpendicular to a uniform field E₀ = 2.0 × 10⁴ N/C. Edge effects can be ignored. (a) Find the induced surface charge density and the induced charge on each face. (b) Use superposition to show that the field inside the slab is zero while the field outside is unchanged. (c) Compare the potential difference across the slab's 0.020 m with the potential difference across the same 0.020 m of empty space.

**(a)** The field just outside each face has size E₀ and is perpendicular to the face, so σ = ε₀E₀ = (8.85 × 10⁻¹²)(2.0 × 10⁴) = **1.77 × 10⁻⁷ C/m²**. The face where E₀ enters (the upstream face) is negative and the face where E₀ leaves is positive. Each face holds a charge of magnitude σA = (1.77 × 10⁻⁷)(0.50) = **8.9 × 10⁻⁸ C**. That is about 5.5 × 10¹¹ electrons moved from one face to the other. The net charge is still zero.

**(b)** Model each face as a sheet. Each gives a field of size σ/(2ε₀) = 1.0 × 10⁴ N/C, pointing away from the + face and towards the − face.

- Inside the slab, both sheet fields point **against** E₀: total induced field σ/ε₀ = 2.0 × 10⁴ N/C, so the net field is E₀ − E₀ = **0**.
- Outside, on either side, the two sheet fields point in **opposite** directions and cancel. The net field is just **E₀**.

**(c)** In empty space, ΔV = E₀d = (2.0 × 10⁴)(0.020) = **400 V**. Across the slab, ΔV = **0**: the two faces are at the same potential, as they must be for one conductor.

**Interpretation.** The induced charges arrange themselves exactly so that the conductor stays an equipotential. That is the meaning of polarization for a conductor.

## Common misconceptions

- **"A charged conductor has charge spread through its volume."** That is true for some insulators. For a conductor in equilibrium, all excess charge is on the surface.
- **"E = 0 inside, so V = 0 inside."** E = 0 means V is **constant**, not zero. A charged metal sphere can be at thousands of volts throughout.
- **"The charge density is the same all over a conductor."** Only for an isolated sphere. It is larger at points and edges.
- **Using σ/(2ε₀) just outside a conductor.** The field just outside a conductor is σ/ε₀.
- **"A neutral conductor in a field has no charges on it."** It has equal and opposite induced charges. The net charge is zero; the local charge is not.
- **"Shielding blocks the field of a charge inside the shell."** It does not. The charge induces Q + q on the outer surface, which produces a field outside.
- **Putting the cavity charge's partner on the outer surface.** The induced −q is on the **inner** wall; Gauss's law inside the metal forces this.
- **"Equilibrium takes noticeable time."** For the electrostatic situations in this course, it is reached effectively at once.

## Where this leads

Next, in Topic 10.2, you will connect conductors to each other and to ground and see how charge moves until their potentials are equal: [Redistribution of Charge Between Conductors](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-study-guide/). The results here, E = 0 inside and E = σ/ε₀ just outside, are also the basis of capacitors (Topic 10.3). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-checklist/).
