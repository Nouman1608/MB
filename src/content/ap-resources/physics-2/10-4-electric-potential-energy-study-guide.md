---
resourceId: "mb-ap-phys2-10.4-study-guide"
title: "Electric Potential Energy: Study Guide (Physics 2 10.4)"
description: "Define electric potential energy as the work needed to assemble charges from far apart, use U = kq₁q₂/r with signs, read U–r graphs and add the energy of every pair of charges."
course: "physics-2"
unit: 10
topics: ["10.4"]
resourceType: "study-guide"
prerequisites:
  - "Coulomb's law and electric fields (Topics 10.1 and 10.3)"
  - "Work, potential energy and conservation of energy from Physics 1"
prerequisiteResources: ["mb-ap-phys2-10.3-study-guide"]
learningObjectives:
  - "Describe the electric potential energy of a system as the external work needed to bring its charges from infinitely far apart"
  - "Calculate the electric potential energy of two point charges with U_E = kq₁q₂/r, keeping the signs of the charges"
  - "Explain what a positive or negative value of U_E says about the system"
  - "Sketch and interpret graphs of U_E against separation, and predict factor changes"
  - "Find the total electric potential energy of up to four point charges by adding the energy of every pair"
  - "Find the external work needed to rearrange charges that start and end at rest"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C². Keep the signs of the charges in U_E = kq₁q₂/r. Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.4-revision-notes", "mb-ap-phys2-10.4-practice", "mb-ap-phys2-10.4-checklist"]
next: "mb-ap-phys2-10.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The electric potential energy of two point charges is the work an external force must do to bring them from infinitely far apart to their positions."
  - "U_E = kq₁q₂/r. Put in the signs: like charges give U_E > 0; unlike charges give U_E < 0."
  - "U_E belongs to the system of charges, not to one charge, and it is a scalar."
  - "U_E ∝ 1/r, not 1/r²: double the separation and U_E halves."
  - "For three or four charges, add U_E for every pair: 3 pairs for three charges, 6 pairs for four."
faqs:
  - question: "How can energy be negative?"
    answer: "Zero is chosen as the energy when the charges are infinitely far apart. Negative U_E means the system has less energy than that: you would have to add energy to pull the charges apart. It does not mean 'less than nothing'."
  - question: "Is U_E the same as the electric potential?"
    answer: "No. U_E is the energy of a system of charges, in joules. The electric potential (Topic 10.5) is potential energy per unit charge, in volts."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Energy stored in a system of charges

In Physics 1 you stored energy by lifting a book: you did work against gravity, and the Earth–book system gained gravitational potential energy. Charges work the same way. Push two positive charges together and you do work against their repulsion. That energy is stored in the **system** of the two charges as **electric potential energy, U_E**.

The definition uses a fixed starting point:

> The electric potential energy of two point charges equals the work an external force must do to bring them from **infinitely far apart** to their present positions.

Two details matter.

- The charges are moved **slowly**, so they start and end at rest. Then all of the external work goes into U_E, not into kinetic energy.
- At infinite separation the charges do not interact, so U_E = 0 there. This is the zero the course uses.

U_E belongs to the **pair**, not to either charge on its own. It is a **scalar**: it has a sign but no direction.

## The equation and its sign

For two point charges q₁ and q₂ a distance r apart:

**U_E = k q₁ q₂ / r = (1/(4πε₀)) q₁ q₂ / r**

with k = 9.0 × 10⁹ N·m²/C². Put the **signs** of the charges into the equation. The sign of the answer tells you about the system.

- **Like charges** (both + or both −): q₁q₂ > 0, so **U_E > 0**. They repel, so the external force had to push them together. Release them and they fly apart, turning U_E into kinetic energy.
- **Unlike charges**: q₁q₂ < 0, so **U_E < 0**. They attract, so the external force had to hold them back as they came together: it did negative work. To separate them again you must **add** |U_E|.

A negative U_E does not mean "no energy". It means the system has less energy than when the charges were far apart.

### Comparing with gravitational potential energy

In Physics 1 the gravitational potential energy of two masses is U_G = −Gm₁m₂/r, with the same zero at infinite separation. It has the same 1/r form as U_E. The difference is the sign. Gravity always attracts, so U_G is always negative. Charges can attract or repel, so U_E can be negative or positive, and the signs of the charges decide which.

## Graphs of U_E against separation

Figure 1 shows U_E against r for two fixed charges. The pattern comes straight from U_E ∝ 1/r.

<figure>
<svg viewBox="0 0 600 400" role="img" aria-labelledby="ue-graph-title ue-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ue-graph-title">Electric potential energy of two point charges against their separation</title>
<desc id="ue-graph-desc">Horizontal axis: separation r, marked at r0, 2r0, 3r0 and 4r0. Vertical axis: electric potential energy U_E, marked at plus and minus U0 and plus and minus 2U0, with zero in the middle. A solid curve for two charges of the same sign lies above the axis: it is 2U0 at half r0, U0 at r0, half U0 at 2r0 and a quarter U0 at 4r0, rising steeply at small r and flattening towards zero at large r. A dashed curve for two charges of opposite sign is its mirror image below the axis: minus U0 at r0 and minus half U0 at 2r0. Both curves approach zero as r becomes large.</desc>
<defs><marker id="ue-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="200" x2="565" y2="200" stroke="#1d2b44" stroke-width="2" marker-end="url(#ue-arr)"/>
<line x1="80" y1="375" x2="80" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#ue-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="190" y1="196" x2="190" y2="204" stroke="#1d2b44"/><text x="190" y="218">r₀</text>
<line x1="300" y1="196" x2="300" y2="204" stroke="#1d2b44"/><text x="300" y="218">2r₀</text>
<line x1="410" y1="196" x2="410" y2="204" stroke="#1d2b44"/><text x="410" y="218">3r₀</text>
<line x1="520" y1="196" x2="520" y2="204" stroke="#1d2b44"/><text x="520" y="218">4r₀</text>
<text x="555" y="190">r</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">2U₀</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">U₀</text>
<text x="70" y="204">0</text>
<line x1="74" y1="270" x2="80" y2="270" stroke="#1d2b44"/><text x="70" y="274">−U₀</text>
<line x1="74" y1="340" x2="80" y2="340" stroke="#1d2b44"/><text x="70" y="344">−2U₀</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Electric potential energy U_E</text>
<polyline points="135.0,60.0 146.0,83.3 157.0,100.0 168.0,112.5 179.0,122.2 190.0,130.0 201.0,136.4 212.0,141.7 223.0,146.2 234.0,150.0 245.0,153.3 256.0,156.2 267.0,158.8 278.0,161.1 289.0,163.2 300.0,165.0 311.0,166.7 322.0,168.2 333.0,169.6 344.0,170.8 355.0,172.0 366.0,173.1 377.0,174.1 388.0,175.0 399.0,175.9 410.0,176.7 421.0,177.4 432.0,178.1 443.0,178.8 454.0,179.4 465.0,180.0 476.0,180.6 487.0,181.1 498.0,181.6 509.0,182.1 520.0,182.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="135.0,340.0 146.0,316.7 157.0,300.0 168.0,287.5 179.0,277.8 190.0,270.0 201.0,263.6 212.0,258.3 223.0,253.8 234.0,250.0 245.0,246.7 256.0,243.8 267.0,241.2 278.0,238.9 289.0,236.8 300.0,235.0 311.0,233.3 322.0,231.8 333.0,230.4 344.0,229.2 355.0,228.0 366.0,226.9 377.0,225.9 388.0,225.0 399.0,224.1 410.0,223.3 421.0,222.6 432.0,221.9 443.0,221.2 454.0,220.6 465.0,220.0 476.0,219.4 487.0,218.9 498.0,218.4 509.0,217.9 520.0,217.5" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<line x1="190" y1="130" x2="190" y2="200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="300" y1="165" x2="300" y2="200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<circle cx="190" cy="130" r="4" fill="#1d2b44"/><circle cx="300" cy="165" r="4" fill="#1d2b44"/>
<circle cx="190" cy="270" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><circle cx="300" cy="235" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="330" y="120" font-size="13" fill="#1d2b44">same signs: U_E &gt; 0 (solid)</text>
<text x="330" y="290" font-size="13" fill="#1d2b44">opposite signs: U_E &lt; 0 (dashed)</text>
<text x="200" y="124" font-size="12" fill="#1d2b44">U₀</text>
<text x="308" y="158" font-size="12" fill="#1d2b44">U₀/2</text>
</svg>
<figcaption>Figure 1. U_E against separation r for a pair of charges with |q₁q₂| fixed. Solid curve: same signs (U_E &gt; 0, filled dots). Dashed curve: opposite signs (U_E &lt; 0, open dots). U₀ is the value of |U_E| at separation r₀. Both curves approach zero as r grows.</figcaption>
</figure>

- Both curves approach **zero** at large r, because U_E = 0 at infinite separation.
- Both get very steep at small r. U_E grows without limit as the charges get very close.
- The two curves are **mirror images** in the r-axis: swapping the sign of one charge flips the sign of U_E.
- Moving to the right on the solid curve, U_E falls: the like charges lose energy as they separate. Moving to the right on the dashed curve, U_E rises toward zero: unlike charges gain energy as you pull them apart.

*Background:* the steeper the graph at a point, the larger the force between the charges there. This is why both curves are steep at small r, where the Coulomb force is large.

### Predicting changes

Because U_E = kq₁q₂/r, you can predict factors of change without numbers.

| Change | Effect on U_E | Compare: effect on the force |
|---|---|---|
| Separation doubled | × 1/2 | × 1/4 |
| Separation tripled | × 1/3 | × 1/9 |
| Separation halved | × 2 | × 4 |
| One charge doubled | × 2 | × 2 |
| Both charges doubled | × 4 | × 4 |

The most common error is to use 1/r² for energy. Force goes as 1/r²; energy goes as 1/r.

## Systems of more than two charges

The total electric potential energy of a system is the **sum of U_E for every pair** of charges. The course asks for systems of up to four point charges.

Why pairs? Build the system one charge at a time. Bringing in the first charge costs nothing, because there is nothing to push against. The second costs kq₁q₂/r₁₂. The third has to be pushed against both of the first two, so it costs kq₁q₃/r₁₃ + kq₂q₃/r₂₃. Every pair appears exactly once.

| Number of charges | Number of pairs |
|---|---|
| 2 | 1 |
| 3 | 3 |
| 4 | 6 |

Each pair keeps its own sign, so some terms are positive and some negative. Do not count a pair twice, and do not forget pairs that are not next to each other (such as the diagonals of a square).

## Work done to rearrange charges

If the charges start and end **at rest**, the work done by an external force equals the change in the system's electric potential energy:

**W_ext = ΔU_E = U_E,final − U_E,initial**

- W_ext > 0: you must push or pull, adding energy to the system (for example, separating unlike charges).
- W_ext < 0: the system does work on whatever holds the charges back (for example, letting like charges move apart slowly).

If nothing holds the charges back, the change in U_E becomes kinetic energy instead. Topic 10.7 develops this.

## Worked example 1: separating two charges

**Question.** A +3.0 μC charge and a −2.0 μC charge are held 0.15 m apart. (a) Find the electric potential energy of the system. (b) How much work must an external force do to move them slowly to 0.45 m apart? (c) How much work would separate them completely?

1. (a) U_E = (9.0 × 10⁹)(3.0 × 10⁻⁶)(−2.0 × 10⁻⁶) ÷ 0.15 = **−0.36 J**.
2. (b) At 0.45 m the separation is 3 times larger, so U_E is 3 times smaller: U_E = −0.36 ÷ 3 = −0.12 J. (Direct check: (9.0 × 10⁹)(3.0 × 10⁻⁶)(−2.0 × 10⁻⁶) ÷ 0.45 = −0.12 J.)
3. W_ext = ΔU_E = −0.12 J − (−0.36 J) = **+0.24 J**.
4. (c) At infinite separation U_E = 0, so W_ext = 0 − (−0.36 J) = **+0.36 J**.

**Interpretation.** Both works are positive, as they must be: unlike charges attract, so you have to pull to separate them. The system's energy rises from −0.36 J toward zero. Notice that the first 0.30 m of pulling needs two-thirds of the total energy. The force is strongest when the charges are close.

## Worked example 2: three charges

**Question.** Three point charges sit at the corners of the right triangle in Figure 2: q₁ = +2.0 μC at A, q₂ = +3.0 μC at B, 0.30 m from A, and q₃ = −5.0 μC at C, 0.40 m from A. (a) Find the total electric potential energy. (b) How much external work is needed to remove q₃ slowly to a very large distance?

<figure>
<svg viewBox="0 0 460 380" role="img" aria-labelledby="ue-tri-title ue-tri-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ue-tri-title">Three point charges at the corners of a right triangle</title>
<desc id="ue-tri-desc">A right triangle with the right angle at A. Charge q1 equals plus 2.0 microcoulombs at A, bottom left. Charge q2 equals plus 3.0 microcoulombs at B, 0.30 metres to the right of A. Charge q3 equals minus 5.0 microcoulombs at C, 0.40 metres above A. The hypotenuse BC is 0.50 metres. Each side is labelled with the pair it represents: U12 on AB, U13 on AC and U23 on BC.</desc>
<polygon points="100,330 310,330 100,50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<polyline points="100,314 116,314 116,330" fill="none" stroke="#1d2b44" stroke-width="1"/>
<circle cx="100" cy="330" r="14" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="100" y="335" font-size="15" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<circle cx="310" cy="330" r="14" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="310" y="335" font-size="15" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<circle cx="100" cy="50" r="14" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="100" y="55" font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">−</text>
<g font-size="13" fill="#1d2b44">
<text x="40" y="355">A: q₁ = +2.0 μC</text>
<text x="270" y="362">B: q₂ = +3.0 μC</text>
<text x="124" y="40">C: q₃ = −5.0 μC</text>
<text x="205" y="320" text-anchor="middle">0.30 m (U₁₂)</text>
<text x="90" y="195" text-anchor="end">0.40 m</text>
<text x="90" y="212" text-anchor="end">(U₁₃)</text>
<text x="222" y="180">0.50 m (U₂₃)</text>
</g>
</svg>
<figcaption>Figure 2. Three charges on a 0.30 m–0.40 m–0.50 m right triangle (positive charges drawn with solid circles, the negative charge with a dashed circle). Each side stands for one pair.</figcaption>
</figure>

1. The distance BC is the hypotenuse: √(0.30² + 0.40²) = 0.50 m.
2. Pair 1–2: U₁₂ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(3.0 × 10⁻⁶) ÷ 0.30 = +0.18 J.
3. Pair 1–3: U₁₃ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(−5.0 × 10⁻⁶) ÷ 0.40 = −0.225 J.
4. Pair 2–3: U₂₃ = (9.0 × 10⁹)(3.0 × 10⁻⁶)(−5.0 × 10⁻⁶) ÷ 0.50 = −0.27 J.
5. (a) Total: U_E = 0.18 − 0.225 − 0.27 = **−0.315 J**.
6. (b) With q₃ gone, only the pair 1–2 is left, so U_E = +0.18 J. W_ext = 0.18 − (−0.315) = **+0.495 J**.

**Check.** The work in (b) equals −(U₁₃ + U₂₃) = −(−0.495 J), the two pairs that disappear. It is positive, because q₃ is attracted to both positive charges and has to be pulled away.

## Worked example 3: predicting a change

**Question.** Two charged spheres, far smaller than their separation, have U_E = +0.80 J. One sphere's charge is tripled and the separation is doubled. What is the new U_E?

1. U_E ∝ q₁q₂/r. Tripling one charge multiplies U_E by 3. Doubling r multiplies it by 1/2.
2. New U_E = 0.80 J × 3 × 1/2 = **+1.2 J**.

**Check.** The sign stays positive because neither charge changed sign. Using 1/r² by mistake would give 0.60 J.

## Common misconceptions

- **"The charge has potential energy."** U_E belongs to the system of interacting charges. A single charge on its own in empty space has no electric potential energy.
- **Dropping the signs.** Using |q₁| and |q₂| makes every U_E positive. An attracting pair must have U_E < 0.
- **Using 1/r² instead of 1/r.** That is the force law, not the energy.
- **"Negative energy is impossible."** It just means less energy than at infinite separation. The zero is a choice.
- **Counting pairs wrongly.** Four charges have six pairs, including the diagonals of a square. Counting each pair from both ends doubles the answer.
- **"U_E = 0 means no forces act."** Total U_E can be zero while forces act. For example, two +2.0 μC charges and one −1.0 μC charge at the corners of an equilateral triangle of side 0.20 m have U_E = 0.18 − 0.09 − 0.09 = 0 J, yet every charge feels a force.
- **Mixing up the external work and the work done by the electric force.** When the charges start and end at rest, the external work is +ΔU_E and the work done by the electric force is −ΔU_E. Say which one you mean.
- **Mixing up U_E and potential.** U_E is in joules and needs at least two charges. Potential (Topic 10.5) is energy per unit charge, in volts.

## Where this leads

Topic 10.5 divides U_E by the charge to get the **electric potential**, a property of a point in space: see [Electric Potential](/advanced-course-resources/physics-2/10-5-electric-potential-study-guide/). Topic 10.7 uses changes in U_E to find the speed of moving charges. Test yourself now with the [practice questions](/advanced-course-resources/physics-2/10-4-electric-potential-energy-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-4-electric-potential-energy-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-4-electric-potential-energy-checklist/). For the field picture behind these forces, revisit [Electric Fields](/advanced-course-resources/physics-2/10-3-electric-fields-study-guide/).
