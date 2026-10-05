---
resourceId: "mb-ap-physcem-13.1-study-guide"
title: "Magnetic Flux: Study Guide (Physics C: E&M 13.1)"
description: "Calculus-based guide to magnetic flux: the area vector and its sign, Φ = B·A for flat surfaces, surface integrals for non-uniform fields, solenoids and closed surfaces."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.1"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic fields of wires and solenoids, B = μ₀I/(2πr) and B = μ₀nI (Topics 12.3 and 12.4)"
  - "The dot product a·b = ab cos θ and its component form"
  - "Electric flux and the outward area vector (Topic 8.5)"
prerequisiteResources: ["mb-ap-physcem-12.4-study-guide"]
learningObjectives:
  - "Explain what magnetic flux measures and give its unit, the weber"
  - "Define the area vector of an open or closed surface and use it to decide the sign of a flux"
  - "Calculate the flux through a flat surface in a uniform field with Φ_B = B·A = BA cos θ"
  - "Set up and evaluate ∫B·dA when the field changes across a surface, for example beside a long wire"
  - "Compare fluxes for different orientations, positions and sizes of a loop, and use zero net flux through closed surfaces"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Check your calculator is in degree mode. Keep unrounded values until the final step. Flux is measured in webers (1 Wb = 1 T·m²)"
related: ["mb-ap-physcem-13.1-revision-notes", "mb-ap-physcem-13.1-practice", "mb-ap-physcem-13.1-checklist"]
next: "mb-ap-physcem-13.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Magnetic flux measures how much magnetic field passes through a surface. It is a scalar, measured in webers: 1 Wb = 1 T·m²."
  - "For a uniform field and a flat surface, Φ_B = B·A = BA cos θ, where θ is the angle between B and the area vector (the normal), not the surface."
  - "The sign of the flux comes from the dot product: positive when B has a component along A, negative when it points against A."
  - "When B changes across a surface, Φ_B = ∫B·dA: split the surface into strips or rings on which B is constant."
  - "The net magnetic flux through any closed surface is zero, because magnetic field lines always form closed loops."
faqs:
  - question: "Is magnetic flux the same thing as magnetic field?"
    answer: "No. The field B is a vector at each point, measured in tesla. Flux is a scalar that adds up the perpendicular part of B over a whole surface, measured in webers (T·m²)."
  - question: "Why does this topic matter so much?"
    answer: "Because a changing magnetic flux induces an emf (Faraday's law, Topic 13.2). Every induction question starts with writing the flux correctly."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.1. The algebra-based Physics 2 course meets magnetic flux for flat surfaces in a uniform field; here you also need the surface integral ∫B·dA.

Constant used throughout: **μ₀ = 4π × 10⁻⁷ T·m/A**.

## What magnetic flux measures

Picture a wire loop held in a magnetic field. Some field lines pass through the loop and some miss it. **Magnetic flux**, Φ_B, measures how much field passes through the surface that the loop encloses.

Three things control it:

- the **strength** of the field, B;
- the **area** of the surface, A;
- the **orientation** of the surface. Only the part of B perpendicular to the surface passes through it.

Flux is a **scalar**. It has a size and a sign, but no direction. Its SI unit is the **weber** (Wb), where 1 Wb = 1 T·m².

You already know this idea from electric flux in Topic 8.5. Magnetic flux uses the same mathematics with B in place of E. The big difference comes later: in Topic 13.2 you will see that a **changing** magnetic flux induces an emf.

## The area vector and the sign of flux

Every flat surface has an **area vector** A:

- its **size** is the area of the surface;
- its **direction** is perpendicular (normal) to the surface.

A flat open surface, such as the inside of a loop, has two possible normals. You choose one and state it. The choice changes the **sign** of the flux, not its size.

On a **closed** surface (a box, a sphere, a can with both ends on) there is no choice: the area vector always points **outward**.

The sign of the flux comes from the dot product B·A:

| Angle θ between B and A | B·A | Flux |
|---|---|---|
| 0° ≤ θ < 90° | positive | positive: B passes through in the direction of A |
| θ = 90° | zero | zero: B runs along the surface |
| 90° < θ ≤ 180° | negative | negative: B passes through against A |

For a loop of wire, a useful convention links the normal to a direction around the loop: curl the fingers of your right hand around the loop in the chosen direction, and your thumb gives A. You will use this in Topic 13.2 to connect the sign of the flux to the direction of an induced current.

## Flat surfaces in a uniform field

If B is the same everywhere on a flat surface, the flux is a single dot product:

**Φ_B = B·A = BA cos θ**

Here θ is the angle between B and the **area vector**, not between B and the surface. If a problem gives the angle between the field and the plane of the loop, subtract it from 90° first.

In component form, if B = B_x î + B_y ĵ + B_z k̂ and the surface lies in the xy-plane with A = A k̂, then Φ_B = B_z A. Only the component along the normal counts.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="mf-tilt-title mf-tilt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mf-tilt-title">A flat loop seen edge-on in a uniform magnetic field</title>
<desc id="mf-tilt-desc">Uniform magnetic field lines run horizontally from left to right across the whole diagram, each with an arrowhead on the right. A flat loop is drawn edge-on as a thick straight line through the centre, tilted so that its plane makes 30 degrees with the field lines. The area vector A starts at the centre of the loop and points up and to the right, perpendicular to the loop. A dashed line from the centre shows the field direction. An arc between the dashed line and A is labelled theta equals 60 degrees. A second arc between the dashed line and the loop is labelled 30 degrees.</desc>
<defs><marker id="mf-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1.2" stroke-opacity="0.55">
<line x1="30" y1="50" x2="530" y2="50" marker-end="url(#mf-arr)"/>
<line x1="30" y1="100" x2="530" y2="100" marker-end="url(#mf-arr)"/>
<line x1="30" y1="260" x2="530" y2="260" marker-end="url(#mf-arr)"/>
<line x1="30" y1="310" x2="530" y2="310" marker-end="url(#mf-arr)"/>
<line x1="30" y1="180" x2="150" y2="180" marker-end="url(#mf-arr)"/>
</g>
<line x1="280" y1="180" x2="440" y2="180" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="184.7" y1="125" x2="375.3" y2="235" stroke="#1d2b44" stroke-width="6" stroke-linecap="round"/>
<line x1="280" y1="180" x2="335" y2="84.7" stroke="#1d2b44" stroke-width="3" marker-end="url(#mf-arr)"/>
<path d="M 330 180 A 50 50 0 0 0 305 136.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M 360 180 A 80 80 0 0 1 349.3 220" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="13" fill="#1d2b44">
<text x="342" y="80">A (area vector)</text>
<text x="335" y="150">θ = 60°</text>
<text x="368" y="210">30°</text>
<text x="388" y="250">loop, seen edge-on</text>
<text x="40" y="40">B (uniform, left to right)</text>
<text x="445" y="185">direction of B</text>
</g>
</svg>
<figcaption>Figure 1. A loop seen edge-on. Its plane makes 30° with B, so the area vector makes θ = 60° with B. The flux is Φ_B = BA cos 60° = 0.5BA, half the maximum.</figcaption>
</figure>

## Worked example 1: turning a coil in a uniform field

**Question.** A flat rectangular coil, 0.40 m by 0.25 m, can turn on an axle that is perpendicular to a uniform horizontal field of 0.060 T. Choose A along the field when the coil faces the field squarely. Find the flux through the coil when the angle between B and A is (a) 0°, (b) 60°, (c) 90° and (d) 180°. (e) By how much does the flux change between (a) and (d)?

1. Area: A = 0.40 m × 0.25 m = 0.10 m². Maximum flux: BA = (0.060 T)(0.10 m²) = 6.0 × 10⁻³ Wb.
2. (a) θ = 0°: Φ_B = 6.0 × 10⁻³ Wb × cos 0° = **6.0 × 10⁻³ Wb**.
3. (b) θ = 60° (the coil's plane is now 30° from the field, as in Figure 1): Φ_B = 6.0 × 10⁻³ × 0.5 = **3.0 × 10⁻³ Wb**.
4. (c) θ = 90° (the plane of the coil lies along the field): Φ_B = **0**.
5. (d) θ = 180° (the coil has turned half a revolution): Φ_B = **−6.0 × 10⁻³ Wb**.
6. (e) ΔΦ_B = (−6.0 × 10⁻³) − (6.0 × 10⁻³) = **−1.2 × 10⁻² Wb**.

**Check.** The size of the flux is never more than BA. A half turn reverses the sign but keeps the size, because the field now passes through the coil from the other face. The change in (e) is twice the maximum flux, not zero: forgetting the sign is a common error.

**Interpretation.** Turning a coil changes the flux even though B and A stay the same size. That is how a generator works, which you will meet in Topic 13.2.

## Flux as a surface integral

When B changes from place to place on the surface, or the surface is curved, a single product is not enough. Split the surface into small patches dA. On each patch B is nearly constant, so the patch contributes B·dA. Add them all:

**Φ_B = ∫ B·dA**

In practice you choose patches on which B is constant:

- **strips** of width dx when B depends only on x (dA = ℓ dx for a strip of length ℓ);
- **rings** of radius r and width dr when B depends only on distance from a centre (dA = 2πr dr).

If B is uniform and the surface is flat, the integral reduces to B·A, so the uniform-field formula is just a special case.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="mf-wire-title mf-wire-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mf-wire-title">Rectangular loop beside a long straight wire, split into thin strips</title>
<desc id="mf-wire-desc">A long straight wire runs vertically on the left, with an arrow showing current I flowing upward. To its right, in the same plane, is a rectangle. Its near side is a distance d from the wire, its width perpendicular to the wire is b and its length parallel to the wire is l. A thin hatched strip of width dx sits inside the rectangle at distance x from the wire. Cross symbols show the field pointing into the page; the crosses are drawn larger near the wire and smaller far from it, to show the field getting weaker with distance.</desc>
<defs>
<marker id="mw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<marker id="mw-arr2" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M10 0 L0 5 L10 10 z" fill="#1d2b44"/></marker>
<pattern id="mw-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern>
</defs>
<line x1="90" y1="280" x2="90" y2="25" stroke="#1d2b44" stroke-width="4" marker-end="url(#mw-arr)"/>
<text x="70" y="40" font-size="14" fill="#1d2b44">I</text>
<rect x="190" y="70" width="300" height="160" fill="none" stroke="#1d2b44" stroke-width="3"/>
<rect x="300" y="70" width="20" height="160" fill="url(#mw-hatch)" stroke="#1d2b44" stroke-width="1"/>
<g stroke="#1d2b44" stroke-width="2">
<path d="M212 92 l16 16 M228 92 l-16 16"/><path d="M212 190 l16 16 M228 190 l-16 16"/>
<path d="M357 95 l10 10 M367 95 l-10 10"/><path d="M357 195 l10 10 M367 195 l-10 10"/>
<path d="M447 97 l7 7 M454 97 l-7 7"/><path d="M447 197 l7 7 M454 197 l-7 7"/>
<path d="M213 142 l14 14 M227 142 l-14 14"/><path d="M445 146 l7 7 M452 146 l-7 7"/>
</g>
<g stroke="#1d2b44" stroke-width="1.2">
<line x1="92" y1="262" x2="188" y2="262" marker-start="url(#mw-arr2)" marker-end="url(#mw-arr)"/>
<line x1="192" y1="262" x2="488" y2="262" marker-start="url(#mw-arr2)" marker-end="url(#mw-arr)"/>
<line x1="92" y1="52" x2="298" y2="52" marker-start="url(#mw-arr2)" marker-end="url(#mw-arr)"/>
<line x1="512" y1="72" x2="512" y2="228" marker-start="url(#mw-arr2)" marker-end="url(#mw-arr)"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="140" y="282">d</text>
<text x="340" y="282">b</text>
<text x="195" y="46">x</text>
<text x="310" y="248">dx</text>
<text x="530" y="155">ℓ</text>
</g>
</svg>
<figcaption>Figure 2. The field of the wire points into the page on this side and weakens as 1/x, so the loop is split into strips of width dx and area ℓ dx. Not to scale.</figcaption>
</figure>

## Worked example 2: a rectangle beside a long wire

**Question.** A long straight wire carries a steady current I = 25 A. A rectangular loop lies in the same plane, with two sides parallel to the wire (Figure 2). The near side is d = 0.020 m from the wire, the loop is b = 0.060 m wide and ℓ = 0.15 m long. (a) Find an expression for the flux through the loop. (b) Evaluate it. (c) Compare with the estimate "field at the middle × area".

**(a) Set up the integral.** At distance x from the wire, B = μ₀I/(2πx), into the page. B is the same along a strip parallel to the wire, so use strips of width dx and area dA = ℓ dx. Take A into the page, so B·dA = B dA (positive).

Φ_B = ∫ from d to d+b of [μ₀I/(2πx)] ℓ dx = (μ₀Iℓ/2π) ∫ from d to d+b of dx/x = **(μ₀Iℓ/2π) ln[(d + b)/d]**

**(b) Numbers.** μ₀Iℓ/(2π) = (2 × 10⁻⁷ T·m/A)(25 A)(0.15 m) = 7.5 × 10⁻⁷ T·m². The ratio (d + b)/d = 0.080/0.020 = 4, and ln 4 = 1.386. So Φ_B = 7.5 × 10⁻⁷ × 1.386 = **1.04 × 10⁻⁶ Wb**.

**(c) Comparison.** At the middle of the loop, x = 0.050 m, B = (2 × 10⁻⁷)(25) ÷ 0.050 = 1.0 × 10⁻⁴ T. Multiplying by the area (0.060 m × 0.15 m = 9.0 × 10⁻³ m²) gives 9.0 × 10⁻⁷ Wb, about 13% too small. The field near the wire (2.5 × 10⁻⁴ T at the near side) is much stronger than at the far side (6.25 × 10⁻⁵ T), and the 1/x curve is not symmetric about the middle, so you must integrate.

**Check.** If the loop is very narrow (b ≪ d), then ln(1 + b/d) ≈ b/d, and the result becomes μ₀Iℓb/(2πd): the field at the loop times its area, as expected for an almost uniform field. Units: T·m/A × A × m = T·m², which is a weber.

## Flux through a solenoid

In Topic 12.4 you used Ampère's law to show that the field inside a long ideal solenoid is uniform, B = μ₀nI, along the axis, and nearly zero outside. So the flux through **one turn** of radius R is:

**Φ_B = μ₀nI × πR²**

For example, n = 2000 turns/m, I = 1.5 A and R = 0.020 m give B = 3.77 × 10⁻³ T and Φ_B = 4.74 × 10⁻⁶ Wb per turn.

Two consequences are often tested:

- A coaxial loop **inside** the solenoid, with radius r < R, has flux B × πr². Only its own area counts.
- A loop **around the outside** of the solenoid, of any larger radius, has the same flux as one turn, B × πR². The field outside is nearly zero, so the extra area adds nothing.

## Closed surfaces: zero net magnetic flux

Magnetic field lines always form **closed loops**. There are no magnetic monopoles where lines could start or stop. So every field line that enters a closed surface must also leave it, and:

**∮ B·dA = 0** for every closed surface

This is Gauss's law for magnetism (Topic 12.1). Compare Gauss's law for electric fields, ∮E·dA = q_enc/ε₀: electric field lines can start and end on charges, but magnetic field lines cannot.

A useful result follows. Take any two open surfaces bounded by the **same** loop, for example a flat disc and a bowl. Together they form a closed surface, so the flux through the bowl equals the flux through the disc (measured in the same direction). You can always pick the easiest surface to calculate the flux through a loop.

## Common misconceptions

- **Using the angle to the surface.** In Φ_B = BA cos θ, θ is measured from the **normal**. If the field makes 30° with the plane, use θ = 60°.
- **"Flux is a vector."** It is a scalar; it has a sign because of the dot product, not a direction.
- **Ignoring the sign when a coil turns over.** Turning a loop half a revolution changes the flux from +BA to −BA. The change is 2BA, not zero.
- **Using the loop's area outside a solenoid.** Only the area where B is non-zero counts. A wide loop around a solenoid has the same flux as one turn.
- **Multiplying B at the middle by the area when B varies.** Integrate B·dA. The middle-value estimate is only safe if B changes linearly across the surface.
- **"Zero net flux means no field."** The net flux through a closed surface is always zero, even inside a strong magnet. It tells you that lines enter and leave in equal amounts, not that B = 0.
- **Confusing flux with field.** A strong field through a tiny loop can give less flux than a weak field through a large loop.

## Where this leads

Magnetic flux is the starting point for the whole of Unit 13. In [Topic 13.2, Electromagnetic Induction](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/), Faraday's law says that the induced emf equals the rate of change of this flux, and Lenz's law gives its direction. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-checklist/).
