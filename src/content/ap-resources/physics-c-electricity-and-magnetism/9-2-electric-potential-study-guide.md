---
resourceId: "mb-ap-physcem-9.2-study-guide"
title: "Electric Potential: Study Guide (Physics C: E&M 9.2)"
description: "Calculus-based guide to electric potential: V = U/q, point charges and superposition, integrating for rods, rings, arcs and long wires, E = −dV/dx and equipotential maps."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.2"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential energy of a system of charges (Topic 9.1)"
  - "Setting up dq = λ dx or λR dθ for rods and arcs (Topic 8.4)"
  - "Fields of a long line and a long cylinder from Gauss's law (Topic 8.6)"
prerequisiteResources: ["mb-ap-physcem-9.1-study-guide"]
learningObjectives:
  - "Define electric potential as potential energy per unit charge and potential difference as the change in it"
  - "Find the potential of one or more point charges by adding scalar contributions"
  - "Integrate k dq/r to find the potential of a ring on its axis, an arc at its centre and a finite rod on its line or perpendicular bisector"
  - "Find a potential difference from the field using ΔV = −∫E·dl, including near a long charged wire or cylinder"
  - "Find a field component from the potential using E_x = −dV/dx"
  - "Draw and read equipotential maps alongside field maps"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-9.2-revision-notes", "mb-ap-physcem-9.2-practice", "mb-ap-physcem-9.2-checklist"]
next: "mb-ap-physcem-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Electric potential is potential energy per unit charge: V = U/q, measured in volts (1 V = 1 J/C)."
  - "Point charges: V = Σ kq_i/r_i, a scalar sum with signs and no components."
  - "Continuous charge: V = ∫k dq/r. You are expected to do this for a ring on its axis, an arc at its centre, a finite rod on its line or bisector, and (as a difference) a long wire or cylinder."
  - "Field to potential: ΔV = −∫E·dl. Potential to field: E_x = −dV/dx."
  - "Equipotentials are perpendicular to field lines, and E points towards lower potential."
faqs:
  - question: "Can the potential be zero where the field is not?"
    answer: "Yes. Midway between equal and opposite charges V = 0, but E is large. The reverse also happens: at the centre of a charged ring E = 0 but V = kQ/R. V and E are linked by a derivative, not by their values."
  - question: "Why can't I set V = 0 at infinity for an infinite line of charge?"
    answer: "Because the integral of λ/(2πε₀r) from a point out to infinity diverges. For an infinite line or cylinder you work only with potential differences, such as V(a) − V(b) = (λ/2πε₀) ln(b/a)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 9.2. You will integrate to find potentials and differentiate to find fields. The algebra-based Physics 2 course uses point-charge potentials and uniform fields only.

Constants used throughout: **k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²**, ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and e = 1.60 × 10⁻¹⁹ C.

## From potential energy to potential

In Topic 9.1 the potential energy U belonged to a **system** of charges. Now fix some source charges and imagine a small test charge q at a point P. The energy U of the system depends on q. Divide it out:

**V = U/q**

V is the **electric potential** at P: the potential energy per unit charge. It depends only on the source charges and on where P is. It exists whether or not a test charge is there, just as the field E does.

- **Unit:** joule per coulomb, called the **volt**: 1 V = 1 J/C. This also gives a second unit for field: 1 V/m = 1 N/C.
- **Scalar:** V has a sign but no direction.
- **Reference:** for charges of finite size, V = 0 infinitely far away.

The **potential difference** between points A and B tells you how much the potential energy changes, per coulomb, as a test charge goes from A to B:

**ΔV = V_B − V_A = ΔU/q**, so **ΔU = qΔV**

A positive charge moving to a higher potential gains potential energy; a negative charge moving to a higher potential loses it.

## Point charges and scalar superposition

For one point charge q, put U = kqq₀/r from Topic 9.1 into V = U/q₀:

**V = kq/r = q/(4πε₀r)**

V is positive near a positive charge and negative near a negative charge. It falls as 1/r, not 1/r².

For several point charges, the potentials **add as numbers**:

**V = Σ kq_i/r_i**

There are no components and no angles. Each r_i is just the distance from charge i to P. This is the main reason potential is easier to calculate than field.

## Continuous charge: integrate k dq/r

Cut the object into pieces of charge dq, each acting like a point charge, and add:

**V = ∫ k dq/r**

Use dq = λ dx for a rod and dq = λR dθ for an arc, as in Topic 8.4. Because V is a scalar, **nothing needs resolving**. The course expects you to use calculus for these cases:

| Charge distribution | Point | Potential |
|---|---|---|
| Thin ring, charge Q, radius R | on the axis, distance x from the centre | V = kQ/√(R² + x²) |
| Arc (semicircle or part of one), charge Q, radius R | at the centre of curvature | V = kQ/R |
| Finite rod, length L, charge per length λ | on its line, distance d beyond one end | V = kλ ln[(d + L)/d] |
| Finite rod, length L, λ | on its perpendicular bisector, distance y | V = kλ ln{[√(L²/4 + y²) + L/2] / [√(L²/4 + y²) − L/2]} |
| Infinite line or outside a long cylinder, λ | distances a and b from the axis | V(a) − V(b) = (λ/2πε₀) ln(b/a) |

Where these come from:

- **Ring.** Every piece is the same distance √(R² + x²) from P, so that factor comes out of the integral and ∫dq = Q.
- **Arc.** Every piece is the distance R from the centre, so V = kQ/R **whatever the angle of the arc**. Compare the field: for a full ring E = 0 at the centre, but V = kQ/R.
- **Rod on its bisector.** Put the rod from s = −L/2 to s = +L/2. Then V = ∫ kλ ds/√(s² + y²) = kλ [ln(s + √(s² + y²))] evaluated from −L/2 to L/2, which gives the table entry.
- **Infinite line.** Integrating kλ ds/r along an infinite line diverges, so there is no "V at infinity = 0" reference. Use the field instead; see Worked example 3. The same method works inside a uniformly charged solid cylinder, using the inside field from Gauss's law (practice Question 7).

## From field to potential, and back

Moving a test charge q from A to B, the electric force does work ∫qE·dl. The change in potential energy is minus this, so dividing by q:

**ΔV = V_B − V_A = −∫_A^B E·dl**

The electric force is conservative, so any path from A to B gives the same answer. In a uniform field E along +x, this becomes ΔV = −EΔx: the potential **drops** by E for every metre you move along the field.

Run it backwards and you get the field from the potential. For each direction:

**E_x = −dV/dx**, E_y = −dV/dy, E_z = −dV/dz

- The field component is minus the **slope** of V. A steep V(x) graph means a strong field; a flat one means E_x = 0.
- **E points towards lower potential.** Positive charges are pushed "downhill" in V; negative charges are pushed "uphill".
- E and V are not linked by their values. V can be large where E is zero (top of a flat hill) or zero where E is large (on the slope).

Check with a point charge: E_r = −d(kq/r)/dr = kq/r². That is Coulomb's law again.

## Equipotential maps

An **equipotential** (or **isoline**) joins points at the same potential. In 3D these are surfaces; on a diagram you see lines.

- **Equipotentials are perpendicular to field lines** everywhere. If E had a component along an isoline, V would change along it.
- Moving a charge along an equipotential takes **no work** by the electric force.
- When equal steps in V are drawn, **closely spaced** isolines mean a **strong** field. Estimate |E| ≈ ΔV/Δs, where Δs is the gap between neighbouring lines.
- To build an isoline map from a field map, draw lines crossing every field line at right angles. To build a field map from isolines, draw arrows at right angles to them, pointing from high V to low V.

<figure>
<svg viewBox="0 0 560 420" role="img" aria-labelledby="eqp-title eqp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eqp-title">Equipotentials and field lines around a positive point charge</title>
<desc id="eqp-desc">A positive point charge sits at the centre. Eight solid straight arrows point radially outward from it in all directions, showing field lines. Four dashed circles centred on the charge are equipotentials labelled 300 volts at radius 0.10 metres, 200 volts at 0.15 metres, 150 volts at 0.20 metres and 100 volts at 0.30 metres. The gap between the 300 and 200 volt circles is 0.05 metres; the gap between the 150 and 100 volt circles is 0.10 metres. A scale bar at the bottom left shows 0.10 metres.</desc>
<defs><marker id="eqp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="6 5">
<circle cx="280" cy="210" r="60"/>
<circle cx="280" cy="210" r="90"/>
<circle cx="280" cy="210" r="120"/>
<circle cx="280" cy="210" r="180"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#eqp-arr)">
<line x1="294.0" y1="210.0" x2="478.0" y2="210.0"/>
<line x1="289.9" y1="200.1" x2="420.0" y2="70.0"/>
<line x1="280.0" y1="196.0" x2="280.0" y2="14.0"/>
<line x1="270.1" y1="200.1" x2="140.0" y2="70.0"/>
<line x1="266.0" y1="210.0" x2="82.0" y2="210.0"/>
<line x1="270.1" y1="219.9" x2="140.0" y2="350.0"/>
<line x1="280.0" y1="224.0" x2="280.0" y2="406.0"/>
<line x1="289.9" y1="219.9" x2="420.0" y2="350.0"/>
</g>
<circle cx="280" cy="210" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="215" font-size="15" fill="#1d2b44" text-anchor="middle">+</text>
<g font-size="12" fill="#1d2b44" stroke="#ffffff" stroke-width="3" paint-order="stroke">
<text x="337" y="185">300 V</text>
<text x="365" y="173">200 V</text>
<text x="393" y="161">150 V</text>
<text x="448" y="139">100 V</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="12" y="24">dashed circles: equipotentials</text>
<text x="12" y="40">solid arrows: field lines</text>
<line x1="30" y1="395" x2="90" y2="395" stroke="#1d2b44" stroke-width="2"/>
<line x1="30" y1="389" x2="30" y2="401" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="389" x2="90" y2="401" stroke="#1d2b44" stroke-width="2"/>
<text x="60" y="385" text-anchor="middle">0.10 m</text>
</g>
</svg>
<figcaption>Figure 1. A positive point charge with kq = 30 V·m (q ≈ 3.3 nC). The dashed equipotentials at 300, 200, 150 and 100 V lie at r = 0.10, 0.15, 0.20 and 0.30 m, because V = kq/r. Field lines (solid arrows) cross every equipotential at right angles and point towards lower V. Near the charge a 100 V drop happens over 0.05 m (about 2000 V/m); further out a 50 V drop takes 0.10 m (about 500 V/m), so the field is weaker where the equipotentials are further apart.</figcaption>
</figure>

## Batteries: potential difference from chemistry

A potential difference does not need a fixed arrangement of static charges that you place by hand. In a **battery**, chemical reactions push positive and negative charge apart, onto the two terminals, and keep them separated. That separation sets a potential difference between the terminals. A 1.5 V cell gives each coulomb that passes through it 1.5 J of electric potential energy; a 9 V battery gives 9 J per coulomb. You will use this in circuits in Unit 11.

## Worked example 1: two point charges, and where V = 0

**Question.** A charge q₁ = +5.0 nC is at x = 0 and q₂ = −3.0 nC is at x = 0.50 m. (a) Find V at the midpoint, x = 0.25 m. (b) Find every point on the x-axis where V = 0. (c) Is the field zero at the point between the charges where V = 0? (d) How much work does an external agent do to bring a +2.0 nC charge slowly from infinity to the midpoint?

**(a)** Both charges are 0.25 m away: V = k(5.0 × 10⁻⁹ − 3.0 × 10⁻⁹) ÷ 0.25 = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ 0.25 = **71.9 V**.

**(b)** Set kq₁/|x| + kq₂/|x − 0.50| = 0, so 5/|x| = 3/|x − 0.50|.
- Between the charges (0 < x < 0.50): 5(0.50 − x) = 3x, so **x = 0.3125 m**, about 0.31 m.
- Beyond q₂ (x > 0.50): 5(x − 0.50) = 3x, so **x = 1.25 m**.
- To the left of q₁ there is no solution: every point there is closer to the larger charge.

**(c)** No. At x = 0.3125 m the field from q₁ points away from it (+x), and the field from q₂ points towards it (also +x). They add: E = k(5.0 × 10⁻⁹/0.3125² + 3.0 × 10⁻⁹/0.1875²) = **1.23 × 10³ N/C** in the +x direction. V = 0 does not mean E = 0.

**(d)** W_ext = ΔU = qΔV = (2.0 × 10⁻⁹ C)(71.9 V − 0) = **1.44 × 10⁻⁷ J**.

## Worked example 2: a rod on its own line, then the field from V

**Question.** A thin rod lies on the x-axis from x = 0 to x = L, where L = 0.25 m. It carries Q = +5.0 nC spread uniformly. (a) Derive V at a point P on the axis at position x > L. (b) Evaluate V at x = 0.30 m. (c) Use E_x = −dV/dx to find the field at P, and check the far-away limit.

**(a)** λ = Q/L = 2.0 × 10⁻⁸ C/m. A piece at position s has charge λ ds and is (x − s) from P:

V(x) = ∫₀ᴸ kλ ds/(x − s) = kλ [−ln(x − s)] from 0 to L = **kλ ln[x/(x − L)]**

With d = x − L this is the table result kλ ln[(d + L)/d].

**(b)** kλ = (8.99 × 10⁹)(2.0 × 10⁻⁸) = 179.8 V. V = 179.8 × ln(0.30/0.050) = 179.8 × ln 6 = **322 V**.

A point charge Q at the rod's centre, 0.175 m away, would give kQ/0.175 = 257 V. That is too small, because the near end of the rod is much closer than the centre.

**(c)** E_x = −dV/dx = −kλ [1/x − 1/(x − L)] = kλL/[x(x − L)] = **kQ/[x(x − L)]**. This matches the field of a rod on its line from Topic 8.4, but this time with no vector integral. At x = 0.30 m: E_x = (8.99 × 10⁹)(5.0 × 10⁻⁹) ÷ (0.30 × 0.050) = **3.00 × 10³ V/m**, in the +x direction (away from the rod, towards lower V).

**Check.** Far away (x ≫ L), x(x − L) ≈ x², so E → kQ/x², and ln[x/(x − L)] ≈ L/x, so V → kQ/x. Both match a point charge.

## Worked example 3: a long charged wire

**Question.** A long straight wire carries λ = +4.0 × 10⁻⁹ C/m. (a) Find the potential difference V(0.020 m) − V(0.080 m) between points 2.0 cm and 8.0 cm from the wire. (b) Which point is at the higher potential? (c) Find the change in potential energy when an electron moves from 8.0 cm to 2.0 cm.

**(a)** From Gauss's law (Topic 8.6), E = λ/(2πε₀r), radially outward. Go from A (r = 0.080 m) to B (r = 0.020 m) along a radius:

V_B − V_A = −∫ from 0.080 to 0.020 of λ/(2πε₀r) dr = (λ/2πε₀) ln(0.080/0.020)

λ/(2πε₀) = 2kλ = 71.9 V, so ΔV = 71.9 × ln 4 = **99.7 V**.

**(b)** The point **closer** to the wire, 2.0 cm, is about 100 V higher. That fits: E points outward, and E points towards lower V.

**(c)** ΔU = qΔV = (−1.60 × 10⁻¹⁹ C)(+99.7 V) = **−1.60 × 10⁻¹⁷ J**. The electron is attracted to the positive wire, so the system loses potential energy as it moves in. What happens to that energy is Topic 9.3.

## Common misconceptions

- **Treating V as a vector.** Never resolve potentials into components; add them with their signs.
- **V = 0 means E = 0 (or the reverse).** E is minus the slope of V, not its value.
- **Using 1/r² for potential.** Potential goes as 1/r; field goes as 1/r².
- **Mixing up V and U.** V is in volts and belongs to a point; U is in joules and belongs to a system. U = qV.
- **Forgetting the minus signs.** ΔV = −∫E·dl and E_x = −dV/dx. Check: E points to lower V.
- **Setting V(∞) = 0 for an infinite line.** It diverges; use differences.
- **Assuming an arc's potential depends on its angle.** For charge Q at radius R, every piece is distance R from the centre, so V = kQ/R for any arc.
- **Drawing equipotentials parallel to field lines.** They always cross at right angles.

## Where this leads

Topic 9.3 uses ΔU = qΔV with conservation of energy to find how fast charges move between points at different potentials. Unit 10 uses potential differences to define capacitance. Next: [Conservation of Electric Energy](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/). Before that, try the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-checklist/). If any of the energy ideas felt shaky, revisit [Electric Potential Energy](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/).
