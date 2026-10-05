---
resourceId: "mb-ap-physcem-12.3-study-guide"
title: "Magnetic Fields of Current-Carrying Wires and the Biot-Savart Law: Study Guide (Physics C: E&M 12.3)"
description: "Calculus-based guide to the Biot-Savart law: field direction around a wire, finite straight wires, loops and arcs, the field on a loop's axis and the force on a current-carrying wire."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.3"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic fields as vector fields, and μ₀ as the permeability of free space (Topic 12.1)"
  - "The magnetic force on a moving charge, F = qv × B, and the right-hand rule (Topic 12.2)"
  - "Cross products, and integrals of the form ∫dx/(x² + a²)^(3/2)"
prerequisiteResources: ["mb-ap-physcem-12.2-study-guide"]
learningObjectives:
  - "Write the Biot-Savart law and use it to find the size and direction of the field from a small piece of current-carrying wire"
  - "Describe the field around a wire as circles centred on the wire, with no component toward, away from or along it"
  - "Derive the field on the perpendicular bisector of a finite straight wire and show it becomes μ₀I/(2πa) for a long wire"
  - "Derive the field at the centre of a loop or arc and on the central axis of a circular loop"
  - "Calculate the magnetic force on a straight or curved current-carrying wire in a magnetic field, including between parallel wires"
  - "Predict factors of change and sketch how B varies with distance"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(4π) = 1 × 10⁻⁷ T·m/A and μ₀/(2π) = 2 × 10⁻⁷ T·m/A. Keep unrounded values until the final step"
related: ["mb-ap-physcem-12.3-revision-notes", "mb-ap-physcem-12.3-practice", "mb-ap-physcem-12.3-checklist"]
next: "mb-ap-physcem-12.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Biot-Savart law: dB = (μ₀/4π) I dℓ × r̂ / r². Add up (integrate) the contributions from every piece of wire."
  - "Around a wire the field lines are circles centred on the wire. Use the right-hand grip rule: thumb along the current, fingers curl with B."
  - "Finite straight wire, point on its perpendicular bisector: B = μ₀IL / [2πa√(L² + 4a²)], which becomes μ₀I/(2πa) for a long wire."
  - "Centre of a loop: B = μ₀I/(2R). An arc of angle φ (radians) gives μ₀Iφ/(4πR). On the axis: B = μ₀IR² / [2(R² + z²)^(3/2)]."
  - "Force on a wire: F = Iℓ × B, or dF = I dℓ × B for a curved wire. Parallel currents attract; opposite currents repel."
faqs:
  - question: "Which shapes do I need to handle with the Biot-Savart law?"
    answer: "The course expects calculations for a point on the perpendicular bisector of a straight wire, a point on the central axis of a circular loop, and the centre of a loop or arc. For other points the law is still true, but the integrals are not expected."
  - question: "Why does a straight wire give no field at points on its own line?"
    answer: "For those points dℓ and r̂ are parallel, so the cross product dℓ × r̂ is zero for every piece of the wire. This is why straight leads that point at the centre of an arc add nothing to the field there."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 12.3. You will set up and evaluate integrals of the field from small pieces of wire.

Constant used throughout: **μ₀ = 4π × 10⁻⁷ T·m/A**, so μ₀/(4π) = 1 × 10⁻⁷ T·m/A and μ₀/(2π) = 2 × 10⁻⁷ T·m/A.

## The Biot-Savart law

In Topic 12.2 you saw that a magnetic field pushes on moving charge. Moving charge also **makes** magnetic field. A current I is a steady flow of charge, so every piece of a current-carrying wire contributes a little field. The **Biot-Savart law** gives that contribution.

Take a short piece of wire of length dℓ, pointing in the direction of the current. Let r be the distance from that piece to the point P where you want the field, and r̂ the unit vector from the piece towards P. Then:

**dB = (μ₀/4π) × I dℓ × r̂ / r²**

The size of the contribution is:

**dB = (μ₀/4π) × I dℓ sin θ / r²**

where θ is the angle between dℓ and r̂. Three features matter:

- **Inverse square.** Like Coulomb's law, each piece's field falls as 1/r².
- **The sin θ factor.** A piece pointing straight at P (θ = 0 or 180°) contributes nothing.
- **The cross product.** dB is perpendicular to both dℓ and r̂. So the field never points toward the wire, away from it, or along it.

To find the total field B, add the contributions: B = ∫dB. In practice you choose a variable along the wire, write r and sin θ in terms of it, and integrate. When the contributions point in different directions, split them into components first and use symmetry to cancel what you can.

### Direction: the right-hand grip rule

Point your right thumb along the current. Your fingers curl the way B circles round the wire. The field lines around a straight piece of wire are **circles centred on the wire**, in planes perpendicular to it. At any point, B is tangent to the circle through that point.

On a flat page we use ⊙ for "out of the page" and ⊗ for "into the page". For a current flowing up the page, the field is ⊗ to the right of the wire and ⊙ to the left.

## Finite straight wire: perpendicular bisector

A straight wire of length L carries current I. Point P is a distance a from the wire, level with its midpoint (on its perpendicular bisector).

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="bs-wire-title bs-wire-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bs-wire-title">Geometry for the field of a finite straight wire</title>
<desc id="bs-wire-desc">A vertical wire of length L carries current I upward. Its midpoint is O. Point P is a horizontal distance a to the right of O, on the perpendicular bisector. A small piece of wire dl sits a distance x above O. A straight line of length r joins the piece to P. The angle theta is marked between the upward current direction and the line r. At P the field is shown as a cross in a circle, meaning into the page.</desc>
<defs><marker id="bsw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="150" y1="320" x2="150" y2="40" stroke="#1d2b44" stroke-width="4"/>
<line x1="150" y1="250" x2="150" y2="222" stroke="#1d2b44" stroke-width="2" marker-end="url(#bsw-arr)"/>
<text x="125" y="245" font-size="14" fill="#1d2b44" text-anchor="end">I</text>
<rect x="143" y="80" width="14" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="125" y="95" font-size="14" fill="#1d2b44" text-anchor="end">dℓ</text>
<line x1="150" y1="90" x2="420" y2="180" stroke="#1d2b44" stroke-width="2"/>
<text x="290" y="122" font-size="14" fill="#1d2b44">r</text>
<line x1="150" y1="180" x2="420" y2="180" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="285" y="200" font-size="14" fill="#1d2b44">a</text>
<line x1="170" y1="92" x2="170" y2="178" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="178" y="140" font-size="14" fill="#1d2b44">x</text>
<path d="M150 65 A25 25 0 0 1 173.7 97.9" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="178" y="72" font-size="14" fill="#1d2b44">θ</text>
<circle cx="150" cy="180" r="3" fill="#1d2b44"/>
<text x="125" y="185" font-size="14" fill="#1d2b44" text-anchor="end">O</text>
<circle cx="420" cy="180" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="413" y1="173" x2="427" y2="187" stroke="#1d2b44" stroke-width="2"/>
<line x1="427" y1="173" x2="413" y2="187" stroke="#1d2b44" stroke-width="2"/>
<text x="438" y="185" font-size="14" fill="#1d2b44">P (B into page)</text>
<text x="60" y="30" font-size="13" fill="#1d2b44">top end, x = +L/2</text>
<text x="60" y="340" font-size="13" fill="#1d2b44">bottom end, x = −L/2</text>
</svg>
<figcaption>Figure 1. A finite wire of length L with current I upward. Point P lies on the perpendicular bisector, distance a from the midpoint O. A piece dℓ at height x is a distance r = √(x² + a²) from P, with sin θ = a/r. Every piece gives a field into the page at P.</figcaption>
</figure>

**Set up.** Measure x along the wire from the midpoint O. A piece of length dx at height x has r = √(x² + a²) and sin θ = a/r. Every piece gives a field in the **same direction** at P (into the page in Figure 1), so you can add magnitudes:

dB = (μ₀I/4π) × a dx / (x² + a²)^(3/2)

**Integrate** from x = −L/2 to x = +L/2. The standard integral is ∫dx/(x² + a²)^(3/2) = x / [a²√(x² + a²)]. So:

B = (μ₀Ia/4π) × 2 × (L/2) / [a²√(L²/4 + a²)]

**B = μ₀IL / [2πa√(L² + 4a²)]**

**Long-wire limit.** When L ≫ a, √(L² + 4a²) → L, so **B → μ₀I/(2πa)**. This is the field of a long straight wire. It falls as 1/a, more slowly than the 1/r² of a single piece. In Topic 12.4 you will get the same result in one line from Ampère's law.

## Loops and arcs

**Centre of a circular loop.** Every piece of a loop of radius R is the same distance R from the centre, and dℓ is always perpendicular to r̂, so sin θ = 1. Every contribution points the same way (along the loop's axis, by the right-hand rule). So:

B = (μ₀I/4πR²) ∮dℓ = (μ₀I/4πR²)(2πR) → **B = μ₀I/(2R)**

**Centre of an arc.** An arc that turns through angle φ (in radians) has length Rφ, so **B = μ₀Iφ/(4πR)**. A semicircle (φ = π) gives μ₀I/(4R); a quarter circle gives μ₀I/(8R). For N tightly wound turns, multiply by N.

**Straight leads aimed at the centre** add nothing, because dℓ is parallel to r̂ along them.

## The field on the axis of a loop

Now put P on the central axis, a distance z from the centre of a loop of radius R. Each piece is a distance r = √(R² + z²) from P, and dℓ is still perpendicular to r̂, so dB = (μ₀I/4π) dℓ/(R² + z²).

The contributions do **not** all point the same way. Each dB is perpendicular to its own r̂, so it tilts away from the axis. Pieces on opposite sides of the loop have equal and opposite sideways components, which cancel. Only the component along the axis survives. That component is dB × (R/r):

B = ∮ (μ₀I/4π) × [dℓ/(R² + z²)] × [R/√(R² + z²)] = (μ₀IR/4π(R² + z²)^(3/2)) × 2πR

**B = μ₀IR² / [2(R² + z²)^(3/2)]**

**Checks.** At z = 0 this gives μ₀I/(2R), the centre result. Far away (z ≫ R), B ≈ μ₀IR²/(2z³), so the field falls as **1/z³**. That is the behaviour of a magnetic dipole, which is what a small current loop is (Topic 12.1).

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="bs-axis-title bs-axis-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bs-axis-title">Magnetic field on the axis of a circular loop against distance</title>
<desc id="bs-axis-desc">Horizontal axis z over R from 0 to 3; vertical axis B over B at the centre from 0 to 1. The solid curve starts at 1 with zero slope at z equals 0, falls to about 0.72 at z equals half R, 0.35 at z equals R, 0.09 at z equals 2R and 0.03 at z equals 3R. A dashed curve, R over z cubed, is drawn from z equals 1.5R to 3R; it lies above the solid curve but gets closer to it as z increases. An open circle marks 0.35 at z equals R.</desc>
<defs><marker id="bsa-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#bsa-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#bsa-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="320">0</text>
<line x1="220" y1="300" x2="220" y2="306" stroke="#1d2b44"/><text x="220" y="320">1</text>
<line x1="370" y1="300" x2="370" y2="306" stroke="#1d2b44"/><text x="370" y="320">2</text>
<line x1="520" y1="300" x2="520" y2="306" stroke="#1d2b44"/><text x="520" y="320">3</text>
<text x="300" y="350" font-size="13">Distance along the axis, z / R (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="245" x2="70" y2="245" stroke="#1d2b44"/><text x="60" y="249">0.25</text>
<line x1="64" y1="190" x2="70" y2="190" stroke="#1d2b44"/><text x="60" y="194">0.50</text>
<line x1="64" y1="135" x2="70" y2="135" stroke="#1d2b44"/><text x="60" y="139">0.75</text>
<line x1="64" y1="80" x2="70" y2="80" stroke="#1d2b44"/><text x="60" y="84">1.00</text>
</g>
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Field, B / B(0) (no unit)</text>
<polyline points="70.0,80.0 85.0,83.3 100.0,92.6 115.0,106.7 130.0,123.9 145.0,142.6 160.0,161.3 175.0,179.0 190.0,195.2 205.0,209.7 220.0,222.2 235.0,233.0 250.0,242.3 265.0,250.1 280.0,256.8 295.0,262.5 310.0,267.2 325.0,271.3 340.0,274.8 355.0,277.8 370.0,280.3 385.0,282.5 400.0,284.4 415.0,286.1 430.0,287.5 445.0,288.7 460.0,289.8 475.0,290.8 490.0,291.6 505.0,292.4 520.0,293.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="295.0,234.8 310.0,246.3 325.0,255.2 340.0,262.3 355.0,267.9 370.0,272.5 385.0,276.2 400.0,279.3 415.0,281.9 430.0,284.1 445.0,285.9 460.0,287.5 475.0,288.8 490.0,290.0 505.0,291.0 520.0,291.9" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="220" cy="222.2" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="100" y="70">exact: B ∝ 1/(R² + z²)^(3/2)</text>
<text x="228" y="214">0.35 at z = R</text>
<text x="330" y="225">dashed: far-field (R/z)³</text>
</g>
</svg>
<figcaption>Figure 2. The field on the axis of a loop, scaled by its value at the centre. The solid curve is the exact result. The dashed curve is the far-field form (R/z)³, which approaches the exact curve as z grows. At z = R the field has already fallen to about 35% of its centre value. B itself is measured in tesla (T).</figcaption>
</figure>

## Force on a current-carrying wire

A wire carrying current contains moving charge, so a magnetic field pushes on it. Adding qv × B over all the moving charge in a length ℓ gives:

**F = Iℓ × B**, with size **F = IℓB sin θ**

where ℓ points along the current and θ is the angle between the wire and B. For a curved wire, or a field that changes along the wire, use **dF = I dℓ × B** and integrate.

Two useful results:

- **Closed loop in a uniform field:** ∮dℓ = 0, so the net force is zero (there can still be a torque).
- **Curved wire in a uniform field:** the force equals the force on a straight wire joining its two ends.

**Parallel wires.** Wire 1 makes a field μ₀I₁/(2πd) at wire 2, a distance d away. Wire 2 feels a force per length **F/ℓ = μ₀I₁I₂/(2πd)**. Currents in the same direction **attract**; opposite currents **repel**. For example, 8.0 A and 5.0 A in the same direction, 0.050 m apart: F/ℓ = (2 × 10⁻⁷)(8.0)(5.0)/0.050 = 1.6 × 10⁻⁴ N/m, attractive. By Newton's third law both wires feel the same size of force.

## Worked example 1: a finite wire compared with a long wire

**Question.** A straight wire of length 0.40 m carries 3.0 A. Find B at a point 0.15 m from the wire on its perpendicular bisector. Compare with the field the same distance from a very long wire.

1. L² + 4a² = (0.40)² + 4(0.15)² = 0.16 + 0.09 = 0.25 m², so √(L² + 4a²) = 0.50 m.
2. B = μ₀IL / [2πa√(L² + 4a²)] = (2 × 10⁻⁷ T·m/A)(3.0 A)(0.40 m) ÷ [(0.15 m)(0.50 m)] = **3.2 × 10⁻⁶ T**.
3. Long wire: B = μ₀I/(2πa) = (2 × 10⁻⁷)(3.0) ÷ 0.15 = **4.0 × 10⁻⁶ T**.

**Interpretation.** The finite wire gives 0.80 of the long-wire value, because the ratio is L/√(L² + 4a²) = 0.40/0.50. The missing 20% would come from the wire beyond the ends. The farther pieces contribute least, which is why the long-wire formula is a good model when L is several times a.

## Worked example 2: cancelling a loop's field with a straight wire

**Question.** A single circular loop of radius 0.050 m lies flat on a table and carries 2.0 A anticlockwise (seen from above). A long straight wire lies on the table 0.15 m from the centre of the loop. What current, in which direction, makes the net field at the loop's centre zero?

1. Loop field at the centre: B = μ₀I/(2R) = (4π × 10⁻⁷)(2.0) ÷ (2 × 0.050) = 2.51 × 10⁻⁵ T. Anticlockwise current gives a field pointing **up**, out of the table (right-hand grip rule).
2. The wire must give the same size of field, pointing **down**, at the centre: μ₀I₂/(2πd) = 2.51 × 10⁻⁵ T.
3. Solve: I₂ = 2πd × B/μ₀ = πdI₁/R = π(0.15)(2.0) ÷ 0.050 = **18.8 A** (about 19 A).
4. Direction: the near side of the loop already makes an upward field at the centre. A parallel current in the same direction would add to it. So the wire's current must flow **opposite to the current in the nearest part of the loop**. Check with the grip rule: thumb along the wire's current, and your fingers point down on the loop's side of the wire.

**Check.** A loop's centre field μ₀I/(2R) is π times the field μ₀I/(2πR) of a long wire at the same distance, and here the wire is also 3 times farther away. So it needs 3π ≈ 9.4 times the loop's current: 9.4 × 2.0 A ≈ 19 A. ✓

## Worked example 3: force on a semicircular wire

**Question.** A wire bent into a semicircle of radius 0.12 m carries 2.5 A. A uniform field of 0.30 T is perpendicular to the plane of the semicircle. Find the net force on it.

1. Measure angle θ from one end of the diameter, so a piece of arc is dℓ = R dθ. B is perpendicular to every piece, so each piece feels dF = IBR dθ, directed along the radius (outward or inward depending on the directions of I and B).
2. Split into components. Along the diameter, the components from pieces at θ and π − θ cancel. Perpendicular to the diameter, each piece contributes IBR sin θ dθ.
3. F = IBR ∫₀^π sin θ dθ = IBR × 2 = 2IRB.
4. F = 2(2.5 A)(0.12 m)(0.30 T) = **0.18 N**, perpendicular to the diameter, in the plane of the semicircle.

**Check.** A straight wire joining the two ends has length 2R = 0.24 m and is perpendicular to B: F = IℓB = (2.5)(0.24)(0.30) = 0.18 N. ✓ The shape of the path does not matter in a uniform field; only the straight-line separation of the ends does.

## Common misconceptions

- **"B points away from the wire, like E from a line charge."** It does not. B circles the wire; it has no component toward, away from or along it.
- **Forgetting sin θ.** Pieces aimed straight at the point contribute nothing. Straight leads pointing at an arc's centre add zero.
- **Adding magnitudes when directions differ.** On a loop's axis the sideways parts cancel. Use components and symmetry before integrating.
- **Using μ₀I/(2πa) for a short wire.** That is the long-wire limit. For a finite wire use the full result, or justify that L ≫ a.
- **Mixing up loop and wire formulas.** Loop centre: μ₀I/(2R). Long wire: μ₀I/(2πr). The loop has no π in the denominator.
- **Using degrees in μ₀Iφ/(4πR).** The arc angle must be in radians.
- **"Parallel currents repel, like charges repel."** It is the other way: same-direction currents attract.
- **Using the wire's length in cm.** Convert ℓ, R and a to metres before using SI formulas.

## Where this leads

The Biot-Savart law works for any shape of wire, but the integrals can be long. Next, [Ampère's law (Topic 12.4)](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/) gives the field of long wires and solenoids in a few lines, using the same symmetry thinking as Gauss's law. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-checklist/).
