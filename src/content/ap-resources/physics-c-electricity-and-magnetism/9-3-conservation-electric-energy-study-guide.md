---
resourceId: "mb-ap-physcem-9.3-study-guide"
title: "Conservation of Electric Energy: Study Guide (Physics C: E&M 9.3)"
description: "Calculus-based guide to energy conservation for charges moving through a potential difference: ΔU = qΔV, kinetic energy gained, signs, turning points and the electron-volt."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.3"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential energy of a system of charges (Topic 9.1)"
  - "Electric potential, and ΔV = −∫E·dr (Topic 9.2)"
  - "Kinetic energy, work and conservation of energy from mechanics"
prerequisiteResources: ["mb-ap-physcem-9.2-study-guide"]
learningObjectives:
  - "Calculate the change in electric potential energy when a charge moves between two points at different potentials"
  - "Use conservation of energy to find the kinetic energy and speed gained or lost by a charged object"
  - "Predict from the signs of q and ΔV whether a charge speeds up or slows down"
  - "Find turning points and speeds from a potential or potential-energy graph"
  - "Integrate a non-uniform field to find ΔV, then the energy change, and compare scenarios with factor-of-change reasoning"
  - "Outline an experiment that tests the link between potential difference and kinetic energy"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "e = 1.602 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg, ε₀ = 8.85 × 10⁻¹² C²/(N·m²). Keep unrounded values until the final step"
related: ["mb-ap-physcem-9.3-revision-notes", "mb-ap-physcem-9.3-practice", "mb-ap-physcem-9.3-checklist"]
next: "mb-ap-physcem-9.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "When a charge q moves through a potential difference ΔV, the potential energy of the charge–field system changes by ΔU = qΔV."
  - "If only electric forces do work, energy is conserved: ΔK = −ΔU = −qΔV."
  - "Positive charges speed up when they move to lower potential; negative charges speed up when they move to higher potential."
  - "Only the start and end potentials matter, not the path, because the electrostatic force is conservative."
  - "A charge stops and turns back where its potential energy equals its total energy."
faqs:
  - question: "Is ΔU the potential energy of the charge on its own?"
    answer: "Strictly, potential energy belongs to the system of the charge and the field (or the charges that make the field). When the source charges are fixed, all the change in kinetic energy goes to the moving charge, so you can treat ΔU as its energy change."
  - question: "Why do positive and negative charges move in opposite directions in the same field?"
    answer: "ΔU = qΔV. For q > 0, U falls when V falls; for q < 0, U falls when V rises. Released from rest, any charge moves so that the system's potential energy decreases."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 9.3. It builds directly on electric potential energy (Topic 9.1) and electric potential (Topic 9.2). One worked example uses an integral to find a potential difference.

Data used throughout: **e = 1.602 × 10⁻¹⁹ C**, **mₑ = 9.11 × 10⁻³¹ kg**, **mₚ = 1.67 × 10⁻²⁷ kg**, ε₀ = 8.85 × 10⁻¹² C²/(N·m²).

## Energy bookkeeping for a moving charge

In Topic 9.2 you defined the potential difference between two points as the change in electric potential energy per unit charge. Turn that definition around and you get the one equation this topic is built on:

**ΔU = qΔV = q(V_f − V_i)**

Here q is the charge that moves (with its sign), V_i is the potential where it starts and V_f is the potential where it ends. ΔU is the change in the electric potential energy of the **object–field system**.

Now add conservation of energy. If the only force doing work on the charge is the electric force, the total energy K + U of the system stays the same:

**K_i + U_i = K_f + U_f, so ΔK = −ΔU = −qΔV**

A fall in potential energy appears as a gain in kinetic energy, and a rise in potential energy is paid for by a loss of kinetic energy. The work done by the electric field on the charge is W_field = −ΔU = −qΔV.

If another force also acts (your hand, a spring, friction), include its work:

**W_ext = ΔK + ΔU**

For example, to move a charge slowly (ΔK = 0) from low to high potential energy, an external agent must do work W_ext = ΔU = qΔV.

Two features make this approach powerful:

- **Path independence.** The electrostatic force is conservative. ΔU depends only on V_i and V_f, never on the route. You can find the speed at the end of a curved path without knowing the forces along it.
- **No vectors.** Potential and energy are scalars. You add numbers with signs, not components.

## Signs: which way does a charge "fall"?

A charge released from rest moves so that the potential energy of the system **decreases**. Since ΔU = qΔV, the direction depends on the sign of q.

| Charge | Moves towards | ΔV | ΔU = qΔV | ΔK |
|---|---|---|---|---|
| positive | lower V | negative | negative | positive (speeds up) |
| positive | higher V | positive | positive | negative (slows down) |
| negative | higher V | positive | negative | positive (speeds up) |
| negative | lower V | negative | positive | negative (slows down) |

A quick rule: positive charges "fall" downhill in V, negative charges "fall" uphill in V. This matches Topic 9.2: E points towards lower V, so the force on a positive charge points towards lower V, and the force on a negative charge points the other way.

## The electron-volt

Atomic-scale energies in joules are awkward numbers. The **electron-volt** (eV) is the kinetic energy gained by one elementary charge e moving through a potential difference of 1 V:

**1 eV = (1.602 × 10⁻¹⁹ C)(1 V) = 1.602 × 10⁻¹⁹ J**

So an electron or proton moving through 250 V gains 250 eV. A particle of charge 2e moving through 250 V gains 500 eV. Convert to joules before you use K = ½mv², because the masses are in kilograms.

## Energy diagrams and turning points

Two representations help you reason without numbers.

- **Energy bar charts.** Draw bars for K, U and the total at the start and the end. With no external work the total bar is the same height in both. The U bar shrinks by exactly the amount the K bar grows.
- **Potential-energy graphs, U(x) or U(r).** Draw the total energy E_total as a horizontal line. At any position, the gap between the line and the U curve is the kinetic energy. Where the curve meets the line, K = 0: the charge stops and turns back. That point is a **turning point**. The charge can never be where U is above the line, because K cannot be negative.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="cee-u-title cee-u-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cee-u-title">Potential energy against distance for a proton approaching a fixed positive charge</title>
<desc id="cee-u-desc">Horizontal axis: distance r from a fixed positive charge. Vertical axis: potential energy U of the system. A solid curve falls from high values near r equals zero towards zero at large r, following U proportional to one over r. A dashed horizontal line shows the constant total energy. The curve crosses the line at the turning point, labelled r minimum, marked with an open circle. At a larger distance a vertical bracket from the curve up to the dashed line is labelled K, and a bracket from the axis up to the curve is labelled U. To the left of the turning point the region is labelled not allowed, since K would be negative.</desc>
<defs><marker id="cee-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#cee-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#cee-arr)"/>
<text x="300" y="340" font-size="13" fill="#1d2b44" text-anchor="middle">Distance from the fixed charge, r</text>
<text x="22" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 180)">Energy of the system</text>
<polyline points="115.0,60.0 123.3,96.5 131.9,125.5 140.3,145.0 148.8,162.9 165.6,187.1 182.5,204.0 199.4,216.5 216.2,226.2 233.1,233.8 250.0,240.0 266.9,245.1 283.8,249.5 300.6,253.2 317.5,256.4 334.4,259.1 351.2,261.6 368.1,263.8 385.0,265.7 401.9,267.5 418.7,269.0 435.6,270.5 452.5,271.8 469.4,273.0 486.2,274.1 503.1,275.1 520.0,276.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="70" y1="180" x2="530" y2="180" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="160" y1="180" x2="160" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<circle cx="160" cy="180" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="340" y1="184" x2="340" y2="256" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cee-arr)"/>
<line x1="340" y1="256" x2="340" y2="184" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cee-arr)"/>
<line x1="360" y1="296" x2="360" y2="265" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cee-arr)"/>
<line x1="360" y1="265" x2="360" y2="296" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cee-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="345" y="225">K</text>
<text x="366" y="288">U</text>
<text x="400" y="172">total energy (constant)</text>
<text x="160" y="318" text-anchor="middle">r_min</text>
<text x="168" y="168">turning point, K = 0</text>
<text x="76" y="250">not allowed:</text>
<text x="76" y="265">U &gt; total</text>
<text x="200" y="110">U = kQq/r</text>
</g>
</svg>
<figcaption>Figure 1. Potential energy U(r) = kQq/r of a proton (charge q) and a fixed positive charge Q, with the proton's constant total energy shown dashed. The gap between the dashed line and the curve is the kinetic energy. The proton turns back at r_min, where U equals the total energy. This is a sketch: no scale is given.</figcaption>
</figure>

## Worked example 1: an accelerating gap, two particles compared

**Question.** In a vacuum tube, grid A is held at +1200 V and grid B at +200 V. (a) A proton is released from rest at A and passes through B. Find the change in potential energy, its kinetic energy at B and its speed. (b) An electron is released from rest at B and passes through A. Find its speed at A and compare it with the proton's. (c) By what factor would the proton's speed change if the potential difference were four times larger?

**(a) Proton, A → B.**

1. ΔV = V_B − V_A = 200 V − 1200 V = −1000 V.
2. ΔU = qΔV = (+1.602 × 10⁻¹⁹ C)(−1000 V) = −1.602 × 10⁻¹⁶ J. The system loses potential energy.
3. Energy conservation with K_i = 0: K_B = −ΔU = 1.602 × 10⁻¹⁶ J = 1000 eV.
4. v = √(2K/mₚ) = √(2 × 1.602 × 10⁻¹⁶ J ÷ 1.67 × 10⁻²⁷ kg) = **4.4 × 10⁵ m/s**.

**(b) Electron, B → A.** Now q = −e and ΔV = V_A − V_B = +1000 V. So ΔU = (−1.602 × 10⁻¹⁹)(+1000) = −1.602 × 10⁻¹⁶ J. The electron also gains 1000 eV, moving towards **higher** potential.

v = √(2 × 1.602 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹) = **1.9 × 10⁷ m/s**.

**Comparison.** Same charge magnitude and same |ΔV|, so the same kinetic energy. Since v = √(2|q||ΔV|/m), the speed ratio is √(mₚ/mₑ) = 42.8. The electron is about 43 times faster. Its speed is about 6% of the speed of light, so the classical formula K = ½mv² is still a good model.

**(c) Factor of change.** v ∝ √|ΔV|. Four times the potential difference gives √4 = **2 times** the speed.

**Check.** Each particle moved in the direction that lowers the system's potential energy, so each sped up, as the sign table predicts.

## Worked example 2: a proton pushed away from a charged wire

**Question.** A very long straight wire carries a uniform charge per unit length λ = +5.0 × 10⁻⁹ C/m. A proton is released from rest 0.010 m from the wire. It moves radially outward. Find its kinetic energy and speed when it is 0.050 m from the wire. Ignore gravity.

**Step 1: the field.** From Gauss's law (Topic 8.6), E = λ/(2πε₀r), pointing radially away from the wire.

**Step 2: the potential difference by integration.** Along the radial path, E·dr = E dr, so

V(r_b) − V(r_a) = −∫ from r_a to r_b of λ/(2πε₀r) dr = −(λ/(2πε₀)) ln(r_b/r_a)

Numbers: λ/(2πε₀) = (5.0 × 10⁻⁹) ÷ (2π × 8.85 × 10⁻¹²) = 89.9 V, and ln(0.050/0.010) = ln 5 = 1.609. So ΔV = −89.9 × 1.609 = **−145 V**.

**Step 3: energy.** ΔU = qΔV = (1.602 × 10⁻¹⁹ C)(−144.7 V) = −2.32 × 10⁻¹⁷ J. With K_i = 0, K_f = −ΔU = **2.32 × 10⁻¹⁷ J (145 eV)**.

**Step 4: speed.** v = √(2 × 2.32 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷) = **1.7 × 10⁵ m/s**.

**Interpretation and checks.**

- The proton moves to lower potential and speeds up, as a positive charge should.
- The kinetic energy depends on the **ratio** r_b/r_a, not on the distance travelled. Going from 0.050 m to 0.25 m (another factor of 5) adds the same 145 eV again. So the speed at 0.25 m is √2 times the speed at 0.050 m, about 2.4 × 10⁵ m/s.
- ln(r_b/r_a) grows without limit as r_b → ∞. That is a sign that the "infinite wire" is a model: a real, finite wire gives a finite energy at very large distances.
- You did not need the force at each point or the time taken. Energy methods skip the details of the motion.

## Designing an experiment

You may be asked to plan a procedure. Suppose the question is: "Does the kinetic energy a charged particle gains equal |q||ΔV|?"

1. In a vacuum tube, release particles of known charge and mass (for example electrons from a heated filament) almost at rest. Accelerate them through an adjustable potential difference ΔV, read on a voltmeter.
2. After the accelerating gap, let them travel through a field-free region of known length L. Measure the travel time t with two detectors, so v = L/t.
3. Repeat for at least five values of ΔV, with several readings for each.
4. Plot v² against ΔV. Energy conservation predicts ½mv² = |q|ΔV, so v² = (2|q|/m)ΔV: a straight line through the origin with gradient 2|q|/m.
5. Compare the measured gradient with the predicted one. A non-zero intercept would suggest the particles did not start from rest.

Control variables: the same type of particle, the same path length L and a good vacuum, so that collisions with gas molecules do not remove energy. This is a reasoning exercise; it does not replace the hands-on laboratory work the course requires.

## Common misconceptions

- **"Positive charges always move to lower potential, so electrons do too."** Released from rest, negative charges move to **higher** potential. Always use ΔU = qΔV with the sign of q.
- **Dropping the sign of q or ΔV.** Write ΔV = V_f − V_i and keep the sign of q. Most wrong answers in this topic come from a sign slip.
- **Using V instead of ΔV.** The energy change depends on the difference in potential, not on the value at one point. A charge moving between +1200 V and +200 V behaves the same as one moving between +1000 V and 0 V.
- **"A longer or curved path gives more energy."** The electrostatic force is conservative. Only V_i and V_f matter.
- **Forgetting to convert eV to J** before using K = ½mv² with masses in kilograms.
- **"Speed is proportional to ΔV."** Kinetic energy is proportional to ΔV; speed is proportional to √ΔV (from rest).
- **"The charge can reach any point if you wait long enough."** It cannot pass a turning point where U equals its total energy.
- **Giving all the kinetic energy to one particle when both can move.** If both charges are free, they share the energy, and momentum conservation sets the split.

## Where this leads

This topic closes Unit 9. Next you will apply potential and energy ideas to conductors: Topic 10.1, [Electrostatics with Conductors](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-study-guide/), then capacitors, which store energy. In circuits (Unit 11), the same idea, ΔU = qΔV, tells you how much energy each coulomb of charge gives to a resistor. If you need to review potential first, go back to [Topic 9.2, Electric Potential](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).

Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-checklist/).
