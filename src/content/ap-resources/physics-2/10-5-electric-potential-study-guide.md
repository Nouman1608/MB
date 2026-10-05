---
resourceId: "mb-ap-phys2-10.5-study-guide"
title: "Electric Potential: Study Guide (Physics 2 10.5)"
description: "Electric potential as energy per unit charge: scalar superposition for point charges, potential difference, conductors in contact, and how equipotential lines relate to the field."
course: "physics-2"
unit: 10
topics: ["10.5"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential energy of a system of point charges (Topic 10.4)"
  - "Electric field as force per unit charge, and field maps (Topic 10.3)"
  - "Work as force × displacement, and adding vectors by components"
prerequisiteResources: ["mb-ap-phys2-10.4-study-guide"]
learningObjectives:
  - "Explain electric potential as the electric potential energy per unit charge at a point"
  - "Calculate the potential at a point due to up to four point charges by adding signed scalar values"
  - "Use potential difference to find the change in electric potential energy of a charge that moves between two points"
  - "Explain why conductors in electrical contact end up at the same potential"
  - "Find the average electric field from a potential difference and a distance, and give its direction"
  - "Draw equipotential lines from a field map, and field vectors from an equipotential map, and use them to predict motion"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 9.0 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C. Potential is zero infinitely far away. Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.5-revision-notes", "mb-ap-phys2-10.5-practice", "mb-ap-phys2-10.5-checklist"]
next: "mb-ap-phys2-10.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Electric potential V is electric potential energy per unit charge: 1 V = 1 J/C."
  - "For point charges, V = Σ kqᵢ/rᵢ. Add the values with their signs; there are no components because V is a scalar."
  - "A charge q that moves through a potential difference ΔV has ΔU_E = qΔV."
  - "The average field between two points has size |ΔV|/Δr and points from high potential to low potential."
  - "Equipotential lines are perpendicular to the field, and no work is done by the field on a charge that moves along one."
faqs:
  - question: "What is the difference between electric potential and electric potential energy?"
    answer: "Potential energy belongs to a system of charges and is measured in joules. Potential is a property of a point in space: the potential energy per coulomb that a test charge would have there. Multiply V by the charge you place at the point to get U_E."
  - question: "Can the potential be zero at a point where the field is not zero?"
    answer: "Yes. Halfway between equal and opposite charges, the two potentials cancel (V = 0), but both fields point the same way, so the field is strong there. A zero of V says nothing directly about E."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Energy per coulomb

In Topic 10.4 you found the electric potential energy U_E of a *system* of charges. That number depends on every charge in the system, including the one you just placed. It is useful to separate the two parts: what the fixed charges do to a point in space, and how much charge you put there.

The **electric potential V** at a point is the electric potential energy per unit charge that a small test charge q would have at that point:

**V = U_E / q**

The unit is the **volt**: 1 V = 1 J/C. V is a property of the point, set by the charges around it. It does not depend on the test charge. Put a charge q at a point of potential V and the system's potential energy is U_E = qV.

Two things to keep straight:

- V is a **scalar**. It has a size and a sign, but no direction.
- In this course V is zero infinitely far from all charges. So V tells you the work per coulomb needed to bring a positive test charge slowly in from very far away.

### Potential of point charges

For a single point charge q, the potential at distance r is

**V = kq / r**, with k = 9.0 × 10⁹ N·m²/C²

The sign of q goes into the formula. Near a positive charge V is positive; near a negative charge V is negative. For example, 0.30 m from a +2.0 nC charge, V = (9.0 × 10⁹)(2.0 × 10⁻⁹) ÷ 0.30 = 60 V.

V falls off as 1/r, more slowly than the field, which falls off as 1/r². If you double the distance, V halves but E drops to a quarter.

For several charges, use **scalar superposition**: find the potential due to each charge on its own, then add the signed numbers.

**V = Σ kqᵢ / rᵢ**

This is much easier than adding fields. There are no components and no angles: only distances and signs. The course asks you to do this for four or fewer point charges, or for more charges when the arrangement is highly symmetric.

## Potential difference

What matters in most problems is the **change** in potential between two points. The **potential difference** from point A to point B is

**ΔV = V_B − V_A = ΔU_E / q**

So when a charge q moves from A to B, the electric potential energy of the system changes by

**ΔU_E = q ΔV**

Watch the signs. A positive charge that moves to a lower potential (ΔV < 0) loses potential energy, because qΔV < 0. A negative charge that moves to a *higher* potential also loses potential energy: now q < 0 and ΔV > 0, so again qΔV < 0. Put the signs of both q and ΔV into the product every time, rather than relying on a rule you half remember.

When ΔU_E < 0, the field does positive work on the charge, and the charge speeds up if nothing else acts on it. Positive charges, left alone, move toward lower potential. Negative charges move toward higher potential. (Topic 10.7 turns this into an energy calculation.)

### Batteries

Potential differences do not only come from fixed charges. Inside a battery, chemical reactions push positive and negative charges apart and keep them apart. That separation holds one terminal at a higher potential than the other. A 1.5 V cell gives each coulomb that passes through it from the negative to the positive terminal 1.5 J of electric potential energy, so 2.0 C gains 3.0 J.

### Conductors in contact

Electrons move freely inside a conductor. If two parts of a conductor were at different potentials, electrons would drift toward the higher potential until the difference vanished. So in electrostatic equilibrium **the whole conductor, including its surface, is at one potential**.

The same applies when you join two conductors, for example with a wire. Electrons flow from one to the other until **both surfaces are at the same potential**. Charge is conserved during this, but the charge is usually *not* shared equally. For two well-separated conducting spheres joined by a thin wire, each surface has V = kQ/R, so the sphere with the larger radius ends up with the larger charge.

## Potential and field

Imagine moving a positive test charge q a short distance Δr straight along the field. The field does work qEΔr on it, so the potential energy falls by that amount, and the potential falls by EΔr. Turned around, the **average** field between two points is

**|E| = |ΔV / Δr|**

where Δr is the distance between the points measured **along the field**. Two consequences:

- The unit V/m is the same as N/C. (Check: 1 V/m = 1 J/(C·m) = 1 N·m/(C·m) = 1 N/C.)
- The field **points in the direction of decreasing potential**. If you know which way V falls fastest, you know which way E points.

### Equipotential lines

An **equipotential line** (an isoline of potential) joins points that have the same V. A map of these lines is like a contour map of hills: closely spaced lines mean a steep slope, which here means a strong field.

- Equipotential lines are always **perpendicular** to the field vectors. If the field had a component along an isoline, moving along it would change V, so it would not be an isoline.
- So there is **no field component along an equipotential**, and the field does **no work** on a charge that moves along one.
- You can build either map from the other. From a field map, draw lines that cross every field vector at a right angle. From an isoline map, draw field vectors at right angles to the lines, pointing toward lower V, longer where the lines are closer together.

<figure>
<svg viewBox="0 0 560 430" role="img" aria-labelledby="eq-map-title eq-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq-map-title">Equipotential circles and field lines around a positive point charge</title>
<desc id="eq-map-desc">A small positive point charge of 0.50 nanocoulombs sits at the centre. Five dashed concentric circles are equipotential lines: 90 volts at radius 5.0 centimetres, 75 volts at 6.0 centimetres, 60 volts at 7.5 centimetres, 45 volts at 10 centimetres and 30 volts at 15 centimetres. The circles get further apart going outwards. Eight solid straight field lines run radially outward from the charge, with arrowheads pointing away from the charge, crossing every circle at a right angle. Point A is on the 90 volt circle directly left of the charge. Point B is on the 30 volt circle directly left of the charge. Point C is on the 30 volt circle directly below the charge. A scale bar shows 5.0 centimetres.</desc>
<defs><marker id="eq-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4">
<circle cx="230" cy="205" r="60"/><circle cx="230" cy="205" r="72"/><circle cx="230" cy="205" r="90"/><circle cx="230" cy="205" r="120"/><circle cx="230" cy="205" r="180"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#eq-arr)">
<line x1="250" y1="205" x2="425" y2="205"/>
<line x1="210" y1="205" x2="35" y2="205"/>
<line x1="230" y1="185" x2="230" y2="15"/>
<line x1="230" y1="225" x2="230" y2="400"/>
<line x1="244.1" y1="190.9" x2="367.9" y2="67.1"/>
<line x1="215.9" y1="190.9" x2="92.1" y2="67.1"/>
<line x1="244.1" y1="219.1" x2="367.9" y2="342.9"/>
<line x1="215.9" y1="219.1" x2="92.1" y2="342.9"/>
</g>
<circle cx="230" cy="205" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="210" font-size="15" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle" stroke="#ffffff" stroke-width="4" paint-order="stroke">
<text x="253" y="154">90 V</text>
<text x="296.5" y="181.5">75 V</text>
<text x="313" y="243.5">60 V</text>
<text x="276" y="320">45 V</text>
<text x="396" y="140">30 V</text>
</g>
<g fill="#1d2b44"><circle cx="170" cy="205" r="4"/><circle cx="50" cy="205" r="4"/><circle cx="230" cy="385" r="4"/></g>
<g font-size="14" font-weight="600" fill="#1d2b44">
<text x="160" y="196" text-anchor="end">A</text><text x="58" y="226">B</text><text x="242" y="402">C</text>
</g>
<line x1="440" y1="400" x2="500" y2="400" stroke="#1d2b44" stroke-width="2"/>
<line x1="440" y1="394" x2="440" y2="406" stroke="#1d2b44" stroke-width="2"/><line x1="500" y1="394" x2="500" y2="406" stroke="#1d2b44" stroke-width="2"/>
<text x="470" y="390" font-size="12" fill="#1d2b44" text-anchor="middle">5.0 cm</text>
</svg>
<figcaption>Figure 1. Equipotential lines (dashed circles, labelled in volts) and field lines (solid, with arrowheads) around a +0.50 nC point charge. The isolines are drawn every 15 V; they sit at radii 5.0, 6.0, 7.5, 10 and 15 cm, so they spread out with distance and the field weakens. Each field line crosses every isoline at a right angle and points toward lower potential.</figcaption>
</figure>

### Predicting motion from a map

A map of isolines tells you how a charged particle released at rest will start to move. A positive charge accelerates along the field, toward lower V and at right angles to the isolines. A negative charge accelerates the opposite way, toward higher V. Where the lines are crowded, the field is strong and the acceleration is large.

## Worked example 1: potential from three point charges

**Question.** Three point charges sit at three corners of a rectangle 4.0 cm wide and 3.0 cm tall (Figure 2): q₁ = +4.0 nC at the bottom left, q₂ = −2.0 nC at the bottom right and q₃ = +3.0 nC at the top left. Find the electric potential at P, the empty top-right corner. Then find the work an external force must do to bring a +1.5 nC charge slowly from very far away to P.

<figure>
<svg viewBox="0 0 520 360" role="img" aria-labelledby="rect-title rect-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rect-title">Three point charges at the corners of a 4.0 cm by 3.0 cm rectangle</title>
<desc id="rect-desc">A rectangle 4.0 centimetres wide and 3.0 centimetres tall. Bottom left: charge q1, plus 4.0 nanocoulombs. Bottom right: charge q2, minus 2.0 nanocoulombs. Top left: charge q3, plus 3.0 nanocoulombs. Top right: empty point P. Dashed lines join each charge to P: the diagonal from q1 is 5.0 centimetres long, the vertical side from q2 is 3.0 centimetres and the horizontal side from q3 is 4.0 centimetres.</desc>
<rect x="120" y="90" width="280" height="210" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4">
<line x1="120" y1="300" x2="400" y2="90"/><line x1="400" y1="300" x2="400" y2="90"/><line x1="120" y1="90" x2="400" y2="90"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"><circle cx="120" cy="300" r="14"/><circle cx="400" cy="300" r="14"/><circle cx="120" cy="90" r="14"/></g>
<g font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle"><text x="120" y="306">+</text><text x="400" y="306">−</text><text x="120" y="96">+</text></g>
<circle cx="400" cy="90" r="5" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="100" y="335" text-anchor="middle">q₁ = +4.0 nC</text>
<text x="420" y="335" text-anchor="middle">q₂ = −2.0 nC</text>
<text x="100" y="62" text-anchor="middle">q₃ = +3.0 nC</text>
<text x="414" y="78" font-weight="600" font-size="15">P</text>
<text x="240" y="185" text-anchor="middle" transform="rotate(-36.9 240 185)">5.0 cm</text>
<text x="412" y="200">3.0 cm</text>
<text x="260" y="80" text-anchor="middle">4.0 cm</text>
</g>
</svg>
<figcaption>Figure 2. The charge arrangement for Worked example 1. Charges are marked + or − inside the circles; dashed lines show the distance from each charge to P.</figcaption>
</figure>

1. Distances to P: from q₂, r₂ = 3.0 cm; from q₃, r₃ = 4.0 cm; from q₁, along the diagonal, r₁ = √(4.0² + 3.0²) = 5.0 cm.
2. Potential from each charge, with its sign, in metres:
   - V₁ = (9.0 × 10⁹)(+4.0 × 10⁻⁹) ÷ 0.050 = +720 V
   - V₂ = (9.0 × 10⁹)(−2.0 × 10⁻⁹) ÷ 0.030 = −600 V
   - V₃ = (9.0 × 10⁹)(+3.0 × 10⁻⁹) ÷ 0.040 = +675 V
3. Add the scalars: V_P = 720 − 600 + 675 = **+795 V** (8.0 × 10² V to 2 significant figures).
4. Work to bring the test charge in from infinity, where V = 0: W = qΔV = (1.5 × 10⁻⁹ C)(795 V − 0) = **1.19 × 10⁻⁶ J**.

**Interpretation and check.** No angles were needed, even though the charges lie in two directions from P. That is the advantage of a scalar. The negative charge is closest to P, but the two positive charges together win, so V_P is positive. The work is positive: you must push a positive charge "uphill" to a point of positive potential. If you brought an electron to P instead, the potential energy would change by (−1.60 × 10⁻¹⁹ C)(795 V) = −1.27 × 10⁻¹⁶ J; the field would pull it in.

## Worked example 2: reading an equipotential map

**Question.** Use Figure 1 (charge +0.50 nC).
(a) Find the average field between the 90 V and 75 V isolines, and between the 45 V and 30 V isolines. State the direction.
(b) A proton moves from A (on the 90 V line) to B (on the 30 V line). Find the change in electric potential energy and the work done on the proton by the field.
(c) The proton then moves from B to C along the 30 V line. How much work does the field do?
(d) An electron is released at rest near A. Which way does it start to move?

1. (a) The 90 V and 75 V lines are 6.0 − 5.0 = 1.0 cm apart, so |E| = 15 V ÷ 0.010 m = **1.5 × 10³ V/m**. The 45 V and 30 V lines are 15 − 10 = 5.0 cm apart, so |E| = 15 V ÷ 0.050 m = **3.0 × 10² V/m**. In both places E points radially **outward**, from higher V to lower V.
2. (b) ΔV = V_B − V_A = 30 V − 90 V = −60 V. For the proton, ΔU_E = qΔV = (1.60 × 10⁻¹⁹ C)(−60 V) = **−9.6 × 10⁻¹⁸ J**. The work done by the field is the negative of the change in potential energy: **+9.6 × 10⁻¹⁸ J**. The result does not depend on the path from A to B.
3. (c) B and C are on the same isoline, so ΔV = 0 and the field does **zero work**. The field is radial and the path along the circle is everywhere perpendicular to it.
4. (d) An electron has negative charge, so it moves toward **higher** potential: inward, toward the positive charge.

**Check.** The exact field of this charge is kq/r² = 1800 V/m at 5.0 cm and 1250 V/m at 6.0 cm. The average, 1500 V/m, lies between them, as it should. Further out, crowded lines have become sparse: the field is five times weaker between 10 cm and 15 cm.

## Common misconceptions

- **Adding potentials as vectors.** V is a scalar. Add the signed values directly. Do not split them into x and y parts.
- **Dropping the sign of the charge.** A negative charge makes a negative contribution to V. Leaving out the sign is the most common error in superposition problems.
- **"V = 0 means E = 0" (or the reverse).** Halfway between +q and −q, V = 0 but E is not. Inside a charged conducting shell, E = 0 but V is not zero; it equals the surface potential.
- **Confusing V and U_E.** V is per coulomb and belongs to a point. U_E = qV belongs to the system and depends on the charge you place there.
- **"Conductors in contact share charge equally."** They reach equal *potential*. A sphere of radius 0.10 m at 900 V holds kQ/R → Q = 1.0 × 10⁻⁸ C; a sphere twice as wide at the same potential holds twice the charge.
- **Field pointing toward higher potential.** E always points toward *lower* V. A positive charge goes "downhill" in V; a negative charge goes "uphill".
- **Using the straight-line distance when it is not along the field.** In |E| = |ΔV/Δr|, Δr is measured along the field (across the isolines), and the result is an average.

## Where this leads

Topic 10.6 applies these ideas to two parallel plates with equal and opposite charges, where the field is uniform and ΔV = Ed exactly: the [capacitors study guide](/advanced-course-resources/physics-2/10-6-capacitors-study-guide/). Topic 10.7 then uses ΔU_E = qΔV with conservation of energy to find speeds. Test yourself with the [practice questions](/advanced-course-resources/physics-2/10-5-electric-potential-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-5-electric-potential-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-5-electric-potential-checklist/) to consolidate. For the energy of a system of charges, look back at the [electric potential energy study guide](/advanced-course-resources/physics-2/10-4-electric-potential-energy-study-guide/).
