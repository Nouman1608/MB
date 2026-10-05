---
resourceId: "mb-ap-physcem-12.4-study-guide"
title: "Ampère's Law: Study Guide (Physics C: E&M 12.4)"
description: "Calculus-based guide to Ampère's law: Amperian loops, long wires, solid and hollow conductors, non-uniform current density, slabs, solenoids, superposition and Maxwell's addition."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.4"]
resourceType: "study-guide"
prerequisites:
  - "The Biot-Savart law and the field of a long straight wire, μ₀I/(2πr) (Topic 12.3)"
  - "Gauss's law and choosing a surface by symmetry (Topic 8.6)"
  - "Current density J and current I = ∫J·dA (Topic 11.1)"
prerequisiteResources: ["mb-ap-physcem-12.3-study-guide"]
learningObjectives:
  - "State Ampère's law and apply the sign rule linking the direction round an Amperian loop to the sign of the enclosed current"
  - "Choose an Amperian loop that makes ∮B·dℓ simple for wires, cylinders, slabs and solenoids"
  - "Derive B inside and outside a long cylindrical conductor, including one with a non-uniform current density"
  - "Derive B = μ₀nI inside a long solenoid and explain the ideal-solenoid assumptions"
  - "Use superposition to find the net field of several wires, cylinders or a solenoid with a wire"
  - "Explain qualitatively that a changing electric field also produces a magnetic field (Maxwell's addition)"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A. Keep unrounded values until the final step"
related: ["mb-ap-physcem-12.4-revision-notes", "mb-ap-physcem-12.4-practice", "mb-ap-physcem-12.4-checklist"]
next: "mb-ap-physcem-12.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Ampère's law: ∮B·dℓ = μ₀I_enc for any closed path (Amperian loop), for steady currents."
  - "It is always true, but it gives B directly only when symmetry makes B constant and parallel to the path (or perpendicular to it) on each part."
  - "Long wire: B = μ₀I/(2πr). Uniform solid wire, inside: B = μ₀Ir/(2πR²). Long solenoid: B = μ₀nI inside, about zero outside."
  - "For a non-uniform current density, find I_enc by integrating J(r) 2πr dr."
  - "Maxwell's addition: a changing electric field also makes a magnetic field. You need the idea, not calculations with it."
faqs:
  - question: "How is Ampère's law different from the Biot-Savart law?"
    answer: "Both describe the field made by currents. The Biot-Savart law works for any shape but needs an integral over the wire. Ampère's law relates a path integral of B to the current through the path, so it gives B quickly, but only when symmetry lets you take B out of the integral."
  - question: "If ∮B·dℓ = 0, is B zero on the loop?"
    answer: "Not necessarily. It means the net enclosed current is zero. Currents outside the loop, or equal and opposite currents inside it, can still make a field on the loop whose contributions cancel round the path."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 12.4. It builds on the Biot-Savart law (Topic 12.3) and uses the same symmetry thinking as Gauss's law (Topic 8.6).

Constant used throughout: **μ₀ = 4π × 10⁻⁷ T·m/A**, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A.

## From the long-wire field to Ampère's law

In Topic 12.3 you found that a long straight wire makes a field of size B = μ₀I/(2πr), circling the wire. Walk once round a circle of radius r centred on the wire, adding up B·dℓ as you go. B is parallel to dℓ everywhere and has the same size, so:

∮B·dℓ = B × 2πr = [μ₀I/(2πr)] × 2πr = μ₀I

The r cancels, just as it did for flux in Gauss's law. The answer does not depend on the size of the circle. In fact it does not depend on the shape of the path at all, only on the current passing through it. This is **Ampère's law**:

**∮B·dℓ = μ₀I_enc**

- The closed path is called an **Amperian loop**. It is imaginary: you choose it.
- I_enc is the **net** current passing through any surface bounded by the loop. Currents outside the loop add nothing to ∮B·dℓ.
- The law holds for steady currents. Maxwell's addition (below) completes it when electric fields change.

**Sign rule.** Curl the fingers of your right hand in the direction you go round the loop. Currents along your thumb count as positive; currents the other way count as negative. For example, a loop traversed anticlockwise on the page counts currents out of the page (⊙) as positive.

## Choosing an Amperian loop

Ampère's law is always true, but it only *gives* B easily when you can take B out of the integral. Choose a loop so that, on each part of it, B is either:

- **parallel** to the path with **constant size**, so B·dℓ = B dℓ and the integral becomes B × length; or
- **perpendicular** to the path (or zero), so that part contributes nothing.

| Current distribution | Amperian loop | ∮B·dℓ becomes |
|---|---|---|
| Long straight wire or long cylinder | coaxial circle, radius r | B(2πr) |
| Long solenoid | rectangle with one side inside, parallel to the axis | Bℓ (only the inside side counts) |
| Large flat slab or current sheet | rectangle straddling the slab, long sides parallel to it | 2Bℓ |

The course applies Ampère's law quantitatively only to fields with this kind of symmetry: long straight wires, long solenoids, and conducting slabs or cylinders carrying a current density. Compare Gauss's law, where the same logic applies to closed surfaces and flux.

## Wires and cylinders

**Solid cylindrical conductor**, radius R, total current I spread uniformly, so J = I/(πR²).

- Outside (r ≥ R): I_enc = I, so B(2πr) = μ₀I and **B = μ₀I/(2πr)**. It looks exactly like a thin wire on the axis.
- Inside (r < R): only the current within radius r counts: I_enc = J(πr²) = Ir²/R². Then B(2πr) = μ₀Ir²/R², so **B = μ₀Ir/(2πR²)**. B grows linearly from zero on the axis.

**Non-uniform current density.** If J depends on r, split the cross-section into thin rings of radius r′ and width dr′. Each ring has area 2πr′ dr′, so:

**I_enc(r) = ∫₀ʳ J(r′) 2πr′ dr′**

Then use B(2πr) = μ₀I_enc(r) as before.

**Hollow cylinders and coaxial cables.** Inside an empty region surrounded by a cylindrical shell of current, a coaxial circle encloses no current, and symmetry makes B the same all round it, so B = 0 there. A coaxial cable carries I along the inner wire and I back along the outer shell. Between them B = μ₀I/(2πr); outside the cable I_enc = I − I = 0, so B = 0.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="amp-br-title amp-br-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="amp-br-title">Magnetic field against distance for two long cylindrical conductors</title>
<desc id="amp-br-desc">Horizontal axis r over R from 0 to 4; vertical axis B over B at the surface from 0 to 1. Solid line: uniform current density, a straight line from the origin to 1 at r equals R. Dashed curve: current density proportional to r squared, rising slowly from the origin as r cubed and reaching 1 at r equals R, with value one eighth at half R. Beyond r equals R both follow the same solid curve, R over r, falling to one half at r equals 2R and one quarter at r equals 4R. A dotted horizontal line at one half joins the solid line at half R to the outside curve at 2R.</desc>
<defs><marker id="amp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#amp-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#amp-arr)"/>
<line x1="182.5" y1="300" x2="182.5" y2="70" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="126.25" y1="190" x2="295" y2="190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="320">0</text>
<line x1="182.5" y1="300" x2="182.5" y2="306" stroke="#1d2b44"/><text x="182.5" y="320">1</text>
<line x1="295" y1="300" x2="295" y2="306" stroke="#1d2b44"/><text x="295" y="320">2</text>
<line x1="407.5" y1="300" x2="407.5" y2="306" stroke="#1d2b44"/><text x="407.5" y="320">3</text>
<line x1="520" y1="300" x2="520" y2="306" stroke="#1d2b44"/><text x="520" y="320">4</text>
<text x="300" y="350" font-size="13">Distance from the axis, r / R (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="245" x2="70" y2="245" stroke="#1d2b44"/><text x="60" y="249">0.25</text>
<line x1="64" y1="190" x2="70" y2="190" stroke="#1d2b44"/><text x="60" y="194">0.50</text>
<line x1="64" y1="135" x2="70" y2="135" stroke="#1d2b44"/><text x="60" y="139">0.75</text>
<line x1="64" y1="80" x2="70" y2="80" stroke="#1d2b44"/><text x="60" y="84">1.00</text>
</g>
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Field, B / B(R) (no unit)</text>
<line x1="70" y1="300" x2="182.5" y2="80" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,300.0 81.2,299.8 92.5,298.2 103.8,294.1 115.0,285.9 126.2,272.5 137.5,252.5 148.8,224.5 160.0,187.4 171.2,139.6 182.5,80.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="182.5,80.0 193.8,100.0 205.0,116.7 216.2,130.8 227.5,142.9 238.8,153.3 250.0,162.5 261.2,170.6 272.5,177.8 283.8,184.2 295.0,190.0 306.2,195.2 317.5,200.0 328.8,204.3 340.0,208.3 351.2,212.0 362.5,215.4 373.8,218.5 385.0,221.4 396.2,224.1 407.5,226.7 418.8,229.0 430.0,231.2 441.2,233.3 452.5,235.3 463.8,237.1 475.0,238.9 486.2,240.5 497.5,242.1 508.8,243.6 520.0,245.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="126.25" cy="190" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="295" cy="190" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="78" y="120">uniform J: B ∝ r</text>
<text x="130" y="290">J ∝ r²: B ∝ r³</text>
<text x="330" y="180">outside: B ∝ 1/r</text>
<text x="190" y="66">surface, r = R</text>
</g>
</svg>
<figcaption>Figure 1. B(r) for a long cylindrical conductor with uniform current density (solid line inside) and with J ∝ r² (dashed curve inside), each scaled by its own surface value B(R) = μ₀I/(2πR). Outside, both follow the same solid 1/r curve, as for a thin wire. The open circles mark equal fields, B(R)/2, at r = R/2 on the uniform line and at r = 2R outside. B itself is measured in tesla (T).</figcaption>
</figure>

## Slabs and current sheets

A large flat slab of thickness t carries a uniform current density J parallel to its faces. By symmetry, B is parallel to the faces, perpendicular to J, and points in opposite directions on the two sides of the mid-plane.

Use a rectangular Amperian loop of length ℓ (parallel to the faces, perpendicular to J), placed symmetrically about the mid-plane, with its long sides a distance z above and below it. The short sides are perpendicular to B and give nothing. So ∮B·dℓ = 2Bℓ.

- Inside (z < t/2): I_enc = J(2zℓ), so **B = μ₀Jz**. It is zero on the mid-plane and grows linearly.
- Outside (z ≥ t/2): I_enc = Jtℓ, so **B = μ₀Jt/2**, the same at every distance.

A very thin sheet carrying current K per unit width (K = Jt) gives **B = μ₀K/2** on each side. This is the magnetic partner of the charged sheet's E = σ/(2ε₀).

## Long solenoids

A solenoid is a long coil with n turns per unit length (n = N/L) carrying current I. Unless told otherwise, treat every solenoid as **ideal**: very long, with a **uniform field inside** parallel to the axis and a **negligible field outside**.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="amp-sol-title amp-sol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="amp-sol-title">Rectangular Amperian loop for a long solenoid</title>
<desc id="amp-sol-desc">Cross-section through a long solenoid lying horizontally. The top row of wire cross-sections are circles with dots, meaning current out of the page; the bottom row are circles with crosses, meaning current into the page. Inside, arrows labelled B point to the right. A dashed rectangle has its lower side, side 1 of length l, inside the solenoid along the field, its upper side, side 3, outside above the top row, and two vertical sides, 2 and 4, crossing the top row of windings. Three wires of the top row lie inside the rectangle. Arrows on the rectangle show it is traversed anticlockwise: right along side 1, up side 2, left along side 3, down side 4.</desc>
<defs><marker id="sol-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="#ffffff">
<circle cx="60" cy="110" r="10"/><circle cx="100" cy="110" r="10"/><circle cx="140" cy="110" r="10"/><circle cx="180" cy="110" r="10"/><circle cx="220" cy="110" r="10"/><circle cx="260" cy="110" r="10"/><circle cx="300" cy="110" r="10"/><circle cx="340" cy="110" r="10"/><circle cx="380" cy="110" r="10"/><circle cx="420" cy="110" r="10"/><circle cx="460" cy="110" r="10"/><circle cx="500" cy="110" r="10"/>
<circle cx="60" cy="250" r="10"/><circle cx="100" cy="250" r="10"/><circle cx="140" cy="250" r="10"/><circle cx="180" cy="250" r="10"/><circle cx="220" cy="250" r="10"/><circle cx="260" cy="250" r="10"/><circle cx="300" cy="250" r="10"/><circle cx="340" cy="250" r="10"/><circle cx="380" cy="250" r="10"/><circle cx="420" cy="250" r="10"/><circle cx="460" cy="250" r="10"/><circle cx="500" cy="250" r="10"/>
</g>
<g fill="#1d2b44">
<circle cx="60" cy="110" r="3"/><circle cx="100" cy="110" r="3"/><circle cx="140" cy="110" r="3"/><circle cx="180" cy="110" r="3"/><circle cx="220" cy="110" r="3"/><circle cx="260" cy="110" r="3"/><circle cx="300" cy="110" r="3"/><circle cx="340" cy="110" r="3"/><circle cx="380" cy="110" r="3"/><circle cx="420" cy="110" r="3"/><circle cx="460" cy="110" r="3"/><circle cx="500" cy="110" r="3"/>
</g>
<g stroke="#1d2b44" stroke-width="2">
<path d="M53 243 L67 257 M67 243 L53 257"/><path d="M93 243 L107 257 M107 243 L93 257"/><path d="M133 243 L147 257 M147 243 L133 257"/><path d="M173 243 L187 257 M187 243 L173 257"/><path d="M213 243 L227 257 M227 243 L213 257"/><path d="M253 243 L267 257 M267 243 L253 257"/><path d="M293 243 L307 257 M307 243 L293 257"/><path d="M333 243 L347 257 M347 243 L333 257"/><path d="M373 243 L387 257 M387 243 L373 257"/><path d="M413 243 L427 257 M427 243 L413 257"/><path d="M453 243 L467 257 M467 243 L453 257"/><path d="M493 243 L507 257 M507 243 L493 257"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#sol-arr)">
<line x1="70" y1="215" x2="150" y2="215"/><line x1="390" y1="215" x2="470" y2="215"/>
<line x1="70" y1="150" x2="150" y2="150"/><line x1="390" y1="150" x2="470" y2="150"/>
</g>
<text x="160" y="220" font-size="14" fill="#1d2b44">B</text>
<rect x="230" y="40" width="120" height="140" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#sol-arr)">
<line x1="270" y1="180" x2="310" y2="180"/><line x1="350" y1="160" x2="350" y2="130"/><line x1="310" y1="40" x2="270" y2="40"/><line x1="230" y1="70" x2="230" y2="100"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="270" y="200">1 (length ℓ)</text>
<text x="358" y="70">2</text>
<text x="282" y="30">3 (outside)</text>
<text x="210" y="70">4</text>
<text x="20" y="300">top row ⊙ out of page; bottom row ⊗ into page</text>
</g>
</svg>
<figcaption>Figure 2. A side section through a long solenoid. The dashed Amperian rectangle has side 1 inside, along the uniform field, and side 3 outside, where the field is negligible. Sides 2 and 4 are perpendicular to B inside and lie in the near-zero field outside. Going round anticlockwise, the enclosed currents (⊙, out of the page) count as positive.</figcaption>
</figure>

**Derivation.** Go round the rectangle in Figure 2:

- Side 1 (inside, length ℓ, along B): contributes Bℓ.
- Sides 2 and 4: inside the solenoid they are perpendicular to B; outside, B ≈ 0. They contribute nothing.
- Side 3 (outside): B ≈ 0, so nothing.

The rectangle encloses nℓ turns, each carrying I, so I_enc = nℓI. Ampère's law gives Bℓ = μ₀nℓI:

**B = μ₀nI**

The result does not depend on the solenoid's radius, or on where you put side 1 inside. That is why the field inside is uniform.

## Superposition

Fields from different currents add as **vectors**. Find each field separately (by Ampère's law or Biot-Savart), give each its direction from the right-hand grip rule, and add. Typical cases: two parallel wires, a wire inside a hollow tube, a wire along the axis of a solenoid, or a solid cylinder with a hole (treat it as a full cylinder plus a cylinder of opposite current filling the hole).

## Maxwell's addition: changing electric fields

Ampère's law in its first form fails for a charging capacitor. Take a circular loop round the wire leading to one plate. A flat surface bounded by the loop is crossed by the wire's current I. But a bulging surface with the same edge can pass between the plates, where no charge flows. Both surfaces cannot be right.

Maxwell's answer: between the plates the **electric field is changing** as charge builds up, and a changing electric field also produces a magnetic field. The full law, **Maxwell's fourth equation**, is:

**∮B·dℓ = μ₀I_enc + μ₀ε₀ dΦ_E/dt**

where Φ_E is the electric flux through the surface. The course does not expect you to calculate with the second term. You should be able to explain that a changing electric field makes a magnetic field, in the same way that a moving charge does, so a magnetic field circles the space between the plates of a charging capacitor.

## Worked example 1: a uniform solid wire

**Question.** A long copper wire of radius 2.0 mm carries 12 A, spread uniformly over its cross-section. Find B at 1.0 mm, 2.0 mm and 6.0 mm from the axis.

1. Use coaxial circles. By symmetry B is tangent to each circle with constant size, so ∮B·dℓ = B(2πr).
2. Inside, r = 1.0 × 10⁻³ m: I_enc = I r²/R² = 12 × (1/4) = 3.0 A. B = μ₀I_enc/(2πr) = (2 × 10⁻⁷)(3.0) ÷ (1.0 × 10⁻³) = **6.0 × 10⁻⁴ T**.
3. Surface, r = 2.0 × 10⁻³ m: B = (2 × 10⁻⁷)(12) ÷ (2.0 × 10⁻³) = **1.2 × 10⁻³ T**. The inside formula μ₀Ir/(2πR²) gives the same value.
4. Outside, r = 6.0 × 10⁻³ m: B = (2 × 10⁻⁷)(12) ÷ (6.0 × 10⁻³) = **4.0 × 10⁻⁴ T**.

**Check.** Halving r inside halves B (B ∝ r); tripling r outside divides B by 3 (B ∝ 1/r). The values match at r = R, so B is continuous. The field is strongest at the surface.

## Worked example 2: non-uniform current density, J = J₀(r/R)²

**Question.** A long cylindrical conductor of radius R carries a current density J = J₀(r/R)², directed along the axis. (a) Find the total current. (b) Find B inside and outside. (c) Check the limits. (d) For R = 1.5 mm and I = 9.0 A, find J₀ and B at r = R/2.

**(a)** Use thin rings: I_enc(r) = ∫₀ʳ J₀(r′²/R²) 2πr′ dr′ = (2πJ₀/R²)(r⁴/4) = **πJ₀r⁴/(2R²)**. At r = R, the total current is **I = πJ₀R²/2**.

**(b)** Coaxial circle of radius r: B(2πr) = μ₀I_enc.

- Inside: B = μ₀πJ₀r⁴/(2R² × 2πr) = **μ₀J₀r³/(4R²)**. In terms of I: B = μ₀Ir³/(2πR⁴).
- Outside: **B = μ₀I/(2πr)**.

**(c)** At r = R both give μ₀I/(2πR), so B is continuous. On the axis B = 0, as symmetry requires.

**(d)** J₀ = 2I/(πR²) = 2(9.0) ÷ [π(1.5 × 10⁻³)²] = **2.5 × 10⁶ A/m²**. At r = R/2, B = [μ₀I/(2πR)] × (1/2)³ = (1.2 × 10⁻³ T)/8 = **1.5 × 10⁻⁴ T**.

**Interpretation.** Most of the current flows near the surface, so the field stays small deep inside. A uniform wire with the same I and R would give 6.0 × 10⁻⁴ T at R/2, four times more. Figure 1 shows this as the dashed curve.

## Worked example 3: a solenoid with a wire along its axis

**Question.** A solenoid 0.30 m long has 600 turns and carries 1.5 A. A long straight wire runs along its axis carrying 5.0 A. Find the net field inside, 0.010 m from the axis.

1. Solenoid: n = 600/0.30 = 2000 turns/m. B_s = μ₀nI = (4π × 10⁻⁷)(2000)(1.5) = 3.77 × 10⁻³ T, along the axis.
2. Wire: B_w = μ₀I/(2πr) = (2 × 10⁻⁷)(5.0) ÷ 0.010 = 1.0 × 10⁻⁴ T, circling the axis, so **perpendicular** to B_s.
3. Add as vectors: B = √(B_s² + B_w²) = **3.77 × 10⁻³ T**, tilted by tan⁻¹(B_w/B_s) = 1.5° from the axis.

**Interpretation.** The field lines become gentle spirals (helices) round the axis. The wire changes the size of the field by less than 0.1% here, but it changes its direction.

## Common misconceptions

- **"∮B·dℓ = 0 means B = 0 on the loop."** It means zero net enclosed current. Use symmetry before concluding B = 0.
- **"Currents outside the loop do not affect B."** They do not change ∮B·dℓ, but they do change B at each point.
- **Using the total current inside a conductor.** Inside, use I_enc(r), not I.
- **Multiplying J by an area when J varies.** Integrate J 2πr dr.
- **Forgetting the sign rule.** Currents in opposite directions through the loop subtract.
- **Thinking a solenoid's field depends on its radius.** For an ideal solenoid, B = μ₀nI only.
- **Using N instead of n.** n is turns per **metre**: n = N/L.
- **Using Ampère's law on a short wire or a single loop.** It is true, but B is not constant on any simple path. Use Biot-Savart there.

## Where this leads

Ampère's law completes the set of field laws for steady currents. Next, in Unit 13, you will meet [magnetic flux (Topic 13.1)](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/) and then Faraday's law, where a changing magnetic field makes an electric field: the mirror image of Maxwell's addition. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-checklist/). To revisit the field of wires and loops, see the [Biot-Savart law (Topic 12.3)](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/).
