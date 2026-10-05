---
resourceId: "mb-ap-phys2-12.4-study-guide"
title: "Electromagnetic Induction and Faraday's Law: Study Guide (Physics 2 12.4)"
description: "Magnetic flux and its sign, Faraday's law for the emf made by changing flux, Lenz's law for its direction, and the moving rod on rails with ε = Bℓv."
course: "physics-2"
unit: 12
topics: ["12.4"]
resourceType: "study-guide"
prerequisites:
  - "The field of a current and the force on a current-carrying wire (Topic 12.3)"
  - "Emf, current and resistance in a circuit, I = ΔV/R (Unit 11)"
  - "The cosine of an angle and the dot-product idea of a component"
prerequisiteResources: ["mb-ap-phys2-12.3-study-guide"]
learningObjectives:
  - "Calculate magnetic flux Φ = BA cos θ and explain what its sign means"
  - "Identify the three ways the flux through a loop can change"
  - "Use Faraday's law to find the average induced emf, including for a coil of several turns"
  - "Use Lenz's law and the right-hand rule to find the direction of an induced current"
  - "Derive and use ε = Bℓv for a conducting rod moving on rails"
  - "Sketch the induced emf against time from a graph of flux against time"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Flux in webers (1 Wb = 1 T·m²). Areas in m². Keep unrounded values until the final step"
related: ["mb-ap-phys2-12.4-revision-notes", "mb-ap-phys2-12.4-practice", "mb-ap-phys2-12.4-checklist"]
next: "mb-ap-phys2-12.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Magnetic flux Φ = BA cos θ measures how much field passes through an area; θ is measured from the area vector."
  - "A changing flux induces an emf: ε = −ΔΦ/Δt. A steady flux, however large, induces nothing."
  - "Lenz's law: the induced current makes a field that opposes the change in flux."
  - "A rod of length ℓ moving at speed v across a field B has emf ε = Bℓv."
  - "The opposition in Lenz's law is energy conservation: you must do work to keep an induced current flowing."
faqs:
  - question: "Is the induced emf the same thing as a potential difference?"
    answer: "It is measured in volts and drives a current like a battery does, so you can treat it as the emf of a source in the circuit. The difference is where it comes from: a changing magnetic flux rather than a chemical reaction."
  - question: "Does a loop need to be a closed circuit for an emf to be induced?"
    answer: "No. A changing flux induces an emf whether or not the loop is closed. A current flows only if there is a complete conducting path, and then I = ε/R."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## The big idea

In Topic 12.3 a current made a magnetic field. This topic runs the other way. If the magnetic field passing through a loop of wire **changes**, an emf appears in the loop, and if the loop is a closed circuit, a current flows. No battery is needed. This is **electromagnetic induction**, and it is how generators, transformers and induction cooktops work.

The key word is *changes*. A strong magnet sitting still next to a loop induces nothing. To describe "how much field passes through a loop" we need one new quantity: magnetic flux.

## Magnetic flux

Every flat surface has an **area vector A**: its size is the area, and it points at right angles to the surface. For a flat loop you choose which of the two perpendicular directions to use. For a closed surface, such as a box, each face's area vector points outward.

The **magnetic flux** Φ through the surface depends only on the part of B that is perpendicular to the surface, that is, the part along A:

**Φ = B · A = BA cos θ**

where θ is the angle between B and the **area vector** (not the surface). The unit is the weber: 1 Wb = 1 T·m².

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="flux-title flux-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flux-title">A loop in a uniform magnetic field, showing the area vector and the angle theta</title>
<desc id="flux-desc">A flat loop is seen almost edge-on as a tall, narrow ellipse. An arrow labelled A, the area vector, starts at the centre of the loop and points horizontally to the right, at right angles to the loop. Four parallel arrows labelled B cross the picture, sloping upwards to the right at about 40 degrees above the horizontal. An arc at the centre of the loop marks the angle theta between the area vector and the field direction.</desc>
<defs><marker id="fx-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4" marker-end="url(#fx-arr)">
<line x1="60" y1="330" x2="300" y2="129"/>
<line x1="150" y1="330" x2="390" y2="129"/>
<line x1="240" y1="330" x2="480" y2="129"/>
<line x1="60" y1="210" x2="250" y2="51"/>
</g>
<text x="488" y="128" font-size="14" font-weight="600" fill="#1d2b44">B</text>
<ellipse cx="220" cy="200" rx="34" ry="110" fill="#fdf6e3" fill-opacity="0.7" stroke="#1d2b44" stroke-width="3"/>
<line x1="220" y1="200" x2="360" y2="200" stroke="#1d2b44" stroke-width="3" marker-end="url(#fx-arr)"/>
<text x="368" y="205" font-size="14" font-weight="600" fill="#1d2b44">A (area vector)</text>
<path d="M280 200 A60 60 0 0 0 266 161" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="220" y1="200" x2="296" y2="136" stroke="#1d2b44" stroke-width="1.2"/>
<text x="290" y="185" font-size="15" fill="#1d2b44">θ</text>
<text x="160" y="335" font-size="12" fill="#1d2b44" text-anchor="middle">loop (seen nearly edge-on)</text>
</svg>
<figcaption>Figure 1. A flat loop in a uniform field. The area vector A is perpendicular to the loop. The flux uses the angle θ between B (dashed arrows) and A: Φ = BA cos θ. If B lay in the plane of the loop, θ would be 90° and the flux would be zero.</figcaption>
</figure>

For a square loop of side 0.10 m (A = 0.010 m²) in a 0.30 T field:

| θ (B to area vector) | cos θ | Φ (Wb) | Meaning |
|---|---|---|---|
| 0° | 1 | +3.0 × 10⁻³ | field straight through, along A |
| 60° | 0.5 | +1.5 × 10⁻³ | only part of B is perpendicular to the loop |
| 90° | 0 | 0 | field lies in the plane of the loop |
| 180° | −1 | −3.0 × 10⁻³ | field straight through, against A |

The **sign** of Φ tells you whether B is along the area vector (positive) or against it (negative). The size tells you how much field passes through.

## Three ways to change the flux

Since Φ = BA cos θ, the flux through a loop changes if any one of these changes:

1. **B** — move a magnet towards or away from the loop, or change the current in a nearby coil;
2. **A** — squash or stretch the loop, or slide part of the circuit (the rod on rails below);
3. **θ** — rotate the loop in the field. This is how a generator works.

For example, a loop of area 0.050 m² in a 0.40 T field starts with its area vector along B (Φ = 0.020 Wb). It is turned through 90° in 0.10 s, so the flux falls to zero. The average emf is 0.020 Wb ÷ 0.10 s = 0.20 V.

## Faraday's law

**Faraday's law** links the emf to the rate of change of flux:

**ε = −ΔΦ / Δt**

- The emf depends on **how fast** the flux changes, not on how big the flux is.
- With ΔΦ/Δt over a finite time, you get the **average** emf over that time.
- The minus sign is Lenz's law (next section). For sizes, use |ε| = |ΔΦ|/Δt and find the direction separately.

**Coils.** A coil of N identical turns has the same flux through each turn. Each turn gets the same emf, and the turns are connected in series, so the emfs add: **|ε| = N|ΔΦ|/Δt**, where Φ is the flux through one turn.

If the loop is part of a circuit with total resistance R, the induced current is **I = ε/R**, as in Unit 11.

Unit check: Wb/s = T·m²/s. Since T = N/(A·m), this is N·m/(A·s) = J/C = V.

## Lenz's law: which way does the current go?

**Lenz's law:** the induced current flows in the direction that makes its own magnetic field **oppose the change in flux** that caused it.

Work through four steps every time:

1. **External field.** Which way does the outside field B point through the loop?
2. **Change.** Is the flux through the loop increasing or decreasing?
3. **Induced field.** If the flux is increasing, the induced field inside the loop points **opposite** to B. If it is decreasing, the induced field points the **same way** as B, trying to keep the flux up.
4. **Current.** Use the right-hand rule for a loop (Topic 12.3): point your thumb along the induced field inside the loop; your fingers curl in the direction of the induced current.

Lenz's law opposes the **change**, not the field. A decreasing flux gets "topped up", not opposed.

**Why it must be so.** Suppose the induced current *helped* the change. Pushing a magnet towards a loop would then pull the magnet in faster, which would make a bigger current, which would pull harder, and so on, creating energy from nothing. Lenz's law is conservation of energy: whoever causes the change has to do work against the induced effect, and that work becomes the electrical energy in the circuit.

## The rod on rails: ε = Bℓv

A common set-up: two parallel conducting rails a distance ℓ apart, joined at one end by a resistor R. A conducting rod rests across the rails and slides along them at speed v. A uniform field B points at right angles to the plane of the rails.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="rails-title rails-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rails-title">A rod sliding to the right on rails in a magnetic field into the page</title>
<desc id="rails-desc">Two horizontal rails, one above the other, joined on the left by a resistor R. A vertical rod lies across the rails on the right and moves to the right with velocity v. Crosses fill the region to show a uniform magnetic field into the page. The distance between the rails is labelled l. Arrows show the induced current going anticlockwise: up through the rod, left along the top rail, down through the resistor and right along the bottom rail. An arrow labelled F on the rod points to the left, opposite to v.</desc>
<defs><marker id="rl-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="#1d2b44" font-size="16" text-anchor="middle">
<text x="140" y="146">×</text><text x="200" y="146">×</text><text x="260" y="146">×</text><text x="320" y="146">×</text><text x="430" y="146">×</text><text x="490" y="146">×</text>
<text x="140" y="236">×</text><text x="200" y="236">×</text><text x="260" y="236">×</text><text x="320" y="236">×</text><text x="430" y="236">×</text><text x="490" y="236">×</text>
</g>
<text x="490" y="190" font-size="13" fill="#1d2b44" text-anchor="middle">B into page</text>
<line x1="80" y1="100" x2="520" y2="100" stroke="#1d2b44" stroke-width="4"/>
<line x1="80" y1="280" x2="520" y2="280" stroke="#1d2b44" stroke-width="4"/>
<path d="M80 100 V140 L66 150 L94 165 L66 180 L94 195 L66 210 L94 225 L80 235 V280" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="50" y="195" font-size="14" font-weight="600" fill="#1d2b44">R</text>
<line x1="370" y1="88" x2="370" y2="292" stroke="#1d2b44" stroke-width="7"/>
<line x1="370" y1="62" x2="440" y2="62" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rl-arr)"/>
<text x="450" y="67" font-size="14" font-weight="600" fill="#1d2b44">v</text>
<line x1="388" y1="225" x2="388" y2="155" stroke="#1d2b44" stroke-width="2" marker-end="url(#rl-arr)"/>
<text x="396" y="195" font-size="13" fill="#1d2b44">I</text>
<line x1="260" y1="88" x2="200" y2="88" stroke="#1d2b44" stroke-width="2" marker-end="url(#rl-arr)"/>
<text x="230" y="80" font-size="13" fill="#1d2b44" text-anchor="middle">I</text>
<line x1="200" y1="294" x2="260" y2="294" stroke="#1d2b44" stroke-width="2" marker-end="url(#rl-arr)"/>
<text x="230" y="314" font-size="13" fill="#1d2b44" text-anchor="middle">I</text>
<line x1="364" y1="190" x2="300" y2="190" stroke="#1d2b44" stroke-width="3" marker-end="url(#rl-arr)"/>
<text x="318" y="182" font-size="14" font-weight="600" fill="#1d2b44">F</text>
<line x1="540" y1="100" x2="540" y2="280" stroke="#1d2b44" stroke-width="1.2"/>
<text x="548" y="195" font-size="14" fill="#1d2b44">ℓ</text>
</svg>
<figcaption>Figure 2. A rod moving right on rails in a field into the page (crosses). The loop formed by the rod, rails and resistor grows, so the flux into the page increases. The induced current runs anticlockwise (up the rod), and the field then pushes the rod with a force F opposite to its velocity.</figcaption>
</figure>

**Derivation from Faraday's law.** In time Δt the rod moves vΔt, so the area of the circuit grows by ΔA = ℓvΔt. With B perpendicular to the loop, ΔΦ = BΔA = BℓvΔt. So:

**|ε| = ΔΦ/Δt = Bℓv**

**Check from forces on charges.** Each charge q in the rod moves with the rod at speed v, at right angles to B, so it feels a magnetic force qvB along the rod (Topic 12.2). Charges pile up at the ends until an electric field E stops them: qE = qvB. Across a rod of length ℓ that gives a potential difference Eℓ = Bℓv, the same answer.

## Worked example 1: a coil in a growing field

**Question.** A flat rectangular coil of 200 turns, 4.0 cm by 5.0 cm, lies in the plane of the page. A uniform field out of the page increases steadily from 0.10 T to 0.50 T in 0.20 s. The coil's total resistance is 4.0 Ω. (a) Find the average emf. (b) Find the current. (c) Find the direction of the current, as seen from the front of the page. (d) What would the emf be if the coil were tilted so its area vector made 60° with the field?

1. **Area:** A = 0.040 m × 0.050 m = 2.0 × 10⁻³ m².
2. **Flux per turn.** B is along the area vector (θ = 0), so Φ = BA. Φ goes from (0.10)(2.0 × 10⁻³) = 2.0 × 10⁻⁴ Wb to (0.50)(2.0 × 10⁻³) = 1.0 × 10⁻³ Wb. ΔΦ = 8.0 × 10⁻⁴ Wb.
3. **(a) emf:** |ε| = NΔΦ/Δt = 200 × 8.0 × 10⁻⁴ Wb ÷ 0.20 s = **0.80 V**.
4. **(b) Current:** I = ε/R = 0.80 V ÷ 4.0 Ω = **0.20 A**.
5. **(c) Direction.** The external field points out of the page and the flux is increasing. The induced field must point **into** the page inside the coil. Thumb into the page: the fingers curl **clockwise** as seen from the front.
6. **(d) Tilted.** Every flux value is multiplied by cos 60° = 0.5, so ΔΦ halves and |ε| = **0.40 V**.

**Check.** Units: Wb/s = V. Over the 0.20 s, a charge of I × Δt = 0.040 C passes round the coil.

## Worked example 2: rod on rails

**Question.** In Figure 2, ℓ = 0.30 m, B = 0.50 T into the page, R = 1.5 Ω, and the rod is pulled to the right at a steady 2.0 m/s. Ignore the resistance of the rod and rails, and friction. Find (a) the emf, (b) the current and its direction in the rod, (c) the magnetic force on the rod and (d) the power needed to keep the rod moving. Compare with the power in the resistor.

1. **(a) emf:** ε = Bℓv = (0.50 T)(0.30 m)(2.0 m/s) = **0.30 V**.
2. **(b) Current:** I = ε/R = 0.30 V ÷ 1.5 Ω = **0.20 A**. Direction: the loop's area grows, so flux into the page increases. The induced field inside the loop points out of the page, so the current runs anticlockwise: **up the rod** in Figure 2. (Check: a positive charge moving right in a field into the page is pushed up the rod.)
3. **(c) Force:** F = IℓB = (0.20 A)(0.30 m)(0.50 T) = **0.030 N**. Right-hand rule: fingers up the rod (current), curl into the page (B): the thumb points **left**, opposite to v. The field brakes the rod, as Lenz's law predicts.
4. **(d) Power:** to keep v constant, the puller must supply 0.030 N to the right. P = Fv = (0.030 N)(2.0 m/s) = **0.060 W**. In the resistor, I²R = (0.20 A)²(1.5 Ω) = 0.060 W.

**Interpretation.** The two powers are equal: the work you do on the rod ends up as thermal energy in the resistor. Double the speed and the emf, current and braking force all double, so the power needed rises by a factor of 4.

## Sketching emf from a flux graph

Since ε = −ΔΦ/Δt, the emf at any moment is **minus the slope** of the Φ–t graph. Read the flux graph in pieces:

- straight rising section → constant emf of one sign;
- flat section → zero emf, however large Φ is;
- straight falling section → constant emf of the **opposite** sign; a steeper fall gives a larger emf.

Example: a single loop of area 0.040 m² sits in a field at right angles to it. The field rises steadily from 0 to 0.20 T over 2 s, stays at 0.20 T until t = 5 s, then falls steadily to zero by t = 6 s. Then Φ rises from 0 to 8.0 × 10⁻³ Wb, stays flat, then falls back. The emf is −4.0 × 10⁻³ V for 0–2 s, zero for 2–5 s, and +8.0 × 10⁻³ V for 5–6 s: twice the size, because the flux falls twice as fast as it rose.

<figure>
<svg viewBox="0 0 560 380" role="img" aria-labelledby="phi-emf-title phi-emf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="phi-emf-title">Graphs of magnetic flux and induced emf against time</title>
<desc id="phi-emf-desc">Two graphs share a time axis from 0 to 7 seconds. Top graph, flux in milliwebers: a straight rise from 0 at t equals 0 to 8 at t equals 2 seconds, flat at 8 until t equals 5 seconds, a steeper straight fall to 0 at t equals 6 seconds, then zero. Bottom graph, emf in millivolts: a constant value of minus 4 from 0 to 2 seconds, zero from 2 to 5 seconds, a constant value of plus 8 from 5 to 6 seconds, then zero.</desc>
<defs><marker id="pe-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="170" x2="525" y2="170" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<line x1="80" y1="170" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<text x="24" y="110" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 110)">Φ (mWb)</text>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="74" x2="80" y2="74" stroke="#1d2b44"/><text x="70" y="78">8</text>
<line x1="74" y1="122" x2="80" y2="122" stroke="#1d2b44"/><text x="70" y="126">4</text>
<text x="70" y="174">0</text>
</g>
<polyline points="80,170 200,74 380,74 440,170 500,170" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="80" y1="300" x2="525" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<line x1="80" y1="355" x2="80" y2="205" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<text x="24" y="285" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 285)">ε (mV)</text>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="220" x2="80" y2="220" stroke="#1d2b44"/><text x="70" y="224">+8</text>
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">+4</text>
<text x="70" y="304">0</text>
<line x1="74" y1="340" x2="80" y2="340" stroke="#1d2b44"/><text x="70" y="344">−4</text>
</g>
<polyline points="80,340 200,340 200,300 380,300 380,220 440,220 440,300 500,300" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="200" y1="300" x2="200" y2="306" stroke="#1d2b44"/><text x="200" y="372">2</text>
<line x1="380" y1="300" x2="380" y2="306" stroke="#1d2b44"/><text x="380" y="372">5</text>
<line x1="440" y1="300" x2="440" y2="306" stroke="#1d2b44"/><text x="440" y="372">6</text>
<text x="500" y="372">t (s)</text>
<line x1="200" y1="170" x2="200" y2="176" stroke="#1d2b44"/><text x="200" y="188">2</text>
<line x1="380" y1="170" x2="380" y2="176" stroke="#1d2b44"/><text x="380" y="188">5</text>
<line x1="440" y1="170" x2="440" y2="176" stroke="#1d2b44"/><text x="440" y="188">6</text>
</g>
</svg>
<figcaption>Figure 3. Top (solid line): flux through the loop against time. Bottom (dashed line): induced emf, equal to minus the slope of the flux graph. The emf is zero while the flux is steady, and the faster fall gives a larger emf of the opposite sign.</figcaption>
</figure>

## Common misconceptions

- **"A big flux means a big emf."** The emf depends on the **rate of change** of flux. A loop in a huge steady field has no emf.
- **"Lenz's law opposes the field."** It opposes the **change** in flux. When the flux is falling, the induced field points the same way as the external field.
- **Using the angle to the surface.** In Φ = BA cos θ, θ is measured from the area vector, which is perpendicular to the surface. A field lying in the plane of the loop gives zero flux.
- **"No current means no emf."** An open loop still has an emf when its flux changes; it just has no complete path for a current.
- **Forgetting N.** For a coil, multiply the single-turn emf by the number of turns.
- **"The induced current speeds the rod up."** The magnetic force on the induced current always opposes the motion that causes it. Otherwise energy would not be conserved.
- **Quoting a rule without reasons.** For a direction, write the chain: external field direction, increase or decrease, induced field direction, then current from the right-hand rule.

## Where this leads

Induction closes Unit 12. Unit 13 begins with [Topic 13.1, Reflection](/advanced-course-resources/physics-2/13-1-reflection-study-guide/), where light (an electromagnetic wave) is the subject. First test yourself with the [practice questions](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-practice/), then use the [revision notes](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-checklist/) to consolidate.
