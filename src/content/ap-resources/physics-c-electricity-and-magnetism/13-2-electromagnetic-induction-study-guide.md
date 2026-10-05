---
resourceId: "mb-ap-physcem-13.2-study-guide"
title: "Electromagnetic Induction: Study Guide (Physics C: E&M 13.2)"
description: "Calculus-based guide to Faraday's and Lenz's laws: emf from changing field, area or angle, coils of N turns, flux graphs, induced electric fields and Maxwell's equations."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.2"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic flux Φ_B = ∫B·dA and its sign (Topic 13.1)"
  - "Emf, current and resistance in a simple circuit (Unit 11)"
  - "The right-hand rule for the field of a current loop (Unit 12)"
  - "Differentiating functions of time, including the chain rule"
prerequisiteResources: ["mb-ap-physcem-13.1-study-guide"]
learningObjectives:
  - "Use Faraday's law, ℰ = −N dΦ_B/dt, to find the emf induced in a loop or a coil of N turns"
  - "Find the emf when the field changes at constant area, when the area changes in a constant field and when a coil rotates"
  - "Use Lenz's law and the right-hand rule to find the direction of an induced current"
  - "Turn a graph of flux against time into a graph of emf against time, and back"
  - "Use ∮E·dl = −dΦ_B/dt to find the induced electric field around a changing field with symmetry"
  - "Describe how Maxwell's equations link electricity, magnetism and light, and plan a measurement of induced emf"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A and ε₀ = 8.85 × 10⁻¹² C²/(N·m²). 1 Wb/s = 1 V. Keep unrounded values until the final step"
related: ["mb-ap-physcem-13.2-revision-notes", "mb-ap-physcem-13.2-practice", "mb-ap-physcem-13.2-checklist"]
next: "mb-ap-physcem-13.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Faraday's law: a changing magnetic flux induces an emf, ℰ = −dΦ_B/dt for one loop and ℰ = −N dΦ_B/dt for a coil of N turns."
  - "The flux can change because B changes (ℰ = A dB⊥/dt in size), because the area changes (ℰ = B dA⊥/dt) or because the angle changes (a rotating coil)."
  - "Lenz's law: the induced current makes a magnetic field that opposes the change in flux. The minus sign in Faraday's law expresses this."
  - "No change in flux means no emf, however strong the field."
  - "A changing magnetic field creates a circulating electric field: ∮E·dl = −dΦ_B/dt, Maxwell's third equation."
faqs:
  - question: "Does the loop have to be a conductor for an emf to be induced?"
    answer: "No. The changing flux creates an induced electric field, and so an emf around any path, whether or not a wire is there. A conducting loop simply lets charges move, so a current flows."
  - question: "Do I need to derive the speed of light from Maxwell's equations?"
    answer: "No. You should know that Maxwell's equations predict electromagnetic waves travelling at c = 1/√(μ₀ε₀), but deriving this is beyond the course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.2. Physics 2 also covers Faraday's and Lenz's laws; this course adds time-dependent fluxes that you must differentiate, and the induced electric field.

Constants used: **μ₀ = 4π × 10⁻⁷ T·m/A** and **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**.

## Faraday's law

In Topic 13.1 you learned to calculate magnetic flux, Φ_B = ∫B·dA. Faraday's law says what happens when that flux **changes**: an emf appears around the edge of the surface.

**ℰ = −dΦ_B/dt** (one loop)

**ℰ = −N dΦ_B/dt** (a coil of N identical turns)

- The emf depends on the **rate of change** of flux, not on the flux itself. A huge steady flux induces nothing.
- In a coil or a long solenoid, each turn has the same flux change, so the emfs of the turns add: the total is N times the emf of one turn.
- Units: Wb/s = T·m²/s = V.
- If the loop is a closed conductor of resistance R, the induced current is I = |ℰ|/R.

**Sign convention.** Pick a direction for the area vector A. Curl the fingers of your right hand around the loop with your thumb along A. That way round the loop is the positive direction for ℰ and for the current. The minus sign then gives the direction automatically. Most students find it quicker to use Lenz's law (below) for direction and Faraday's law for size.

## Three ways to change the flux

For a flat loop in a uniform field, Φ_B = B A cos θ. Any of the three factors can change.

| What changes | Size of the emf (one loop) | Example |
|---|---|---|
| The field, B (area fixed) | ℰ = A dB⊥/dt | a coil inside an electromagnet whose current is ramped |
| The area, A (field fixed) | ℰ = B dA⊥/dt | a rod sliding along rails; a loop being stretched or squeezed |
| The angle, θ | ℰ = BAω sin ωt for θ = ωt | a coil spinning in a field: a generator |

Here B⊥ is the component of B perpendicular to the loop, and A⊥ is the area perpendicular to B.

For a **rotating coil** with N turns and constant angular speed ω, the flux per turn is BA cos ωt, so ℰ = −N d(BA cos ωt)/dt = **NBAω sin ωt**. The peak emf, NBAω, grows with every factor, and the emf alternates with the frequency of rotation. The emf is largest when the plane of the coil lies along the field (the flux is zero but changing fastest) and zero when the coil faces the field (the flux is greatest but momentarily not changing).

## Lenz's law: the direction

**Lenz's law:** the induced current flows in the direction that makes its own magnetic field **oppose the change** in flux. It opposes the change, not the field.

Use four steps:

1. What is the direction of the external field through the loop?
2. Is the flux in that direction **increasing** or **decreasing**?
3. The induced field inside the loop points **opposite** to the external field if the flux is increasing, and the **same way** if it is decreasing.
4. Use the right-hand rule: thumb along the induced field inside the loop, fingers curl in the direction of the induced current.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="ind-lenz-title ind-lenz-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ind-lenz-title">Lenz's law for a loop in a growing field that points out of the page</title>
<desc id="ind-lenz-desc">Two panels. Left panel: a circular loop with a grid of dot symbols inside and around it, meaning the external field points out of the page; a label says the field is increasing. Right panel: the same loop with arrows drawn along the wire going clockwise, labelled induced current, clockwise; inside the loop there are cross symbols, meaning the induced field points into the page, opposing the increase.</desc>
<defs><marker id="lz-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<circle cx="140" cy="125" r="80" fill="none" stroke="#1d2b44" stroke-width="4"/>
<g fill="#1d2b44">
<circle cx="100" cy="85" r="4"/><circle cx="140" cy="85" r="4"/><circle cx="180" cy="85" r="4"/>
<circle cx="100" cy="125" r="4"/><circle cx="140" cy="125" r="4"/><circle cx="180" cy="125" r="4"/>
<circle cx="100" cy="165" r="4"/><circle cx="140" cy="165" r="4"/><circle cx="180" cy="165" r="4"/>
<circle cx="40" cy="30" r="4"/><circle cx="240" cy="30" r="4"/><circle cx="40" cy="220" r="4"/><circle cx="240" cy="220" r="4"/>
</g>
<circle cx="420" cy="125" r="80" fill="none" stroke="#1d2b44" stroke-width="4"/>
<g fill="none" stroke="#1d2b44" stroke-width="4">
<path d="M 420 45 A 80 80 0 0 1 495.2 97.6" marker-end="url(#lz-arr)"/>
<path d="M 500 125 A 80 80 0 0 1 447.4 200.2" marker-end="url(#lz-arr)"/>
<path d="M 420 205 A 80 80 0 0 1 344.8 152.4" marker-end="url(#lz-arr)"/>
<path d="M 340 125 A 80 80 0 0 1 392.6 49.8" marker-end="url(#lz-arr)"/>
</g>
<g stroke="#1d2b44" stroke-width="2.5">
<path d="M388 93 l14 14 M402 93 l-14 14"/><path d="M438 93 l14 14 M452 93 l-14 14"/>
<path d="M388 143 l14 14 M402 143 l-14 14"/><path d="M438 143 l14 14 M452 143 l-14 14"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="140" y="245">External B: out of page (dots),</text>
<text x="140" y="262">increasing</text>
<text x="420" y="245">Induced current: clockwise;</text>
<text x="420" y="262">induced B inside: into page (crosses)</text>
</g>
</svg>
<figcaption>Figure 1. The outward flux is growing, so the induced current is clockwise (as you look at the page). Its field inside the loop points into the page and opposes the growth. If the outward field were shrinking, the current would be anticlockwise instead.</figcaption>
</figure>

Lenz's law is energy conservation at work. If the induced current helped the change, the flux would grow faster, giving a bigger current, and so on, creating energy from nothing.

## Reading flux graphs

Since ℰ = −N dΦ_B/dt, the emf graph is −N times the **gradient** of the flux graph. Straight sections of Φ_B(t) give constant emf; flat sections give zero emf.

<figure>
<svg viewBox="0 0 560 420" role="img" aria-labelledby="ind-graph-title ind-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ind-graph-title">Flux per turn and induced emf against time for a 50-turn coil</title>
<desc id="ind-graph-desc">Top graph: flux per turn in milliwebers against time in seconds from 0 to 7. The flux rises in a straight line from 0 at t equals 0 to 6 at t equals 2, stays at 6 until t equals 5, falls in a straight line to 0 at t equals 6, then stays at 0. Bottom graph: emf in volts against time on the same time scale. The emf is minus 0.15 volts from 0 to 2 seconds, zero from 2 to 5 seconds, plus 0.30 volts from 5 to 6 seconds, and zero after 6 seconds.</desc>
<defs><marker id="gr-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="170" x2="520" y2="170" stroke="#1d2b44" stroke-width="2" marker-end="url(#gr-arr)"/>
<line x1="70" y1="180" x2="70" y2="30" stroke="#1d2b44" stroke-width="2" marker-end="url(#gr-arr)"/>
<line x1="70" y1="320" x2="520" y2="320" stroke="#1d2b44" stroke-width="2" marker-end="url(#gr-arr)"/>
<line x1="70" y1="385" x2="70" y2="225" stroke="#1d2b44" stroke-width="2" marker-end="url(#gr-arr)"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<line x1="190" y1="50" x2="190" y2="385"/><line x1="370" y1="50" x2="370" y2="385"/><line x1="430" y1="170" x2="430" y2="385"/>
</g>
<polyline points="70,170 190,50 370,50 430,170 490,170" fill="none" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="3">
<line x1="70" y1="360" x2="190" y2="360"/><line x1="190" y1="320" x2="370" y2="320"/>
<line x1="370" y1="240" x2="430" y2="240"/><line x1="430" y1="320" x2="490" y2="320"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="50" x2="70" y2="50" stroke="#1d2b44"/><text x="60" y="54">6</text>
<line x1="64" y1="110" x2="70" y2="110" stroke="#1d2b44"/><text x="60" y="114">3</text>
<text x="60" y="174">0</text>
<line x1="64" y1="240" x2="70" y2="240" stroke="#1d2b44"/><text x="60" y="244">+0.30</text>
<text x="60" y="324">0</text>
<line x1="64" y1="360" x2="70" y2="360" stroke="#1d2b44"/><text x="60" y="364">−0.15</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="190" y="400">2</text><text x="370" y="400">5</text><text x="430" y="400">6</text>
<text x="300" y="416">Time, t (s)</text>
<text x="140" y="40">Φ_B per turn (mWb)</text>
<text x="120" y="232">ℰ (V)</text>
</g>
</svg>
<figcaption>Figure 2. A 50-turn coil. From 0 to 2 s the flux per turn rises at 3 mWb/s, so ℰ = −50 × 0.003 = −0.15 V. From 2 to 5 s the flux is steady and ℰ = 0. From 5 to 6 s it falls at 6 mWb/s, so ℰ = +0.30 V: twice the size and the opposite sign.</figcaption>
</figure>

To go the other way, from an emf graph to the flux, use the area under the graph: ΔΦ_B = −(1/N)∫ℰ dt.

## Worked example 1: a coil in a growing field

**Question.** A flat circular coil of 200 turns and radius 0.040 m has its axis along a uniform field that points towards you. The field grows as B(t) = 0.10 T + (0.030 T/s²)t². The coil's ends are joined, and its total resistance is 4.0 Ω. At t = 2.0 s, find (a) the size of the induced emf, (b) the current and its direction as you see it.

1. Area: A = π(0.040 m)² = 5.03 × 10⁻³ m². It is constant, so ℰ = NA dB/dt.
2. dB/dt = 2(0.030 T/s²)t = 0.12 T/s at t = 2.0 s.
3. (a) |ℰ| = (200)(5.03 × 10⁻³ m²)(0.12 T/s) = **0.121 V**.
4. (b) I = 0.121 V ÷ 4.0 Ω = **0.030 A**.
5. Direction: the flux towards you is increasing, so the induced field inside the coil points away from you. Thumb away from you: fingers curl **clockwise** as you see it.

**Check.** Units: m² × T/s = Wb/s = V. Because dB/dt ∝ t, the emf at t = 4.0 s would be twice as big (0.241 V). The emf depends on how fast B changes, not on B itself (B = 0.22 T at t = 2.0 s does not appear in the answer).

## Worked example 2: a rod sliding on rails

**Question.** Two parallel horizontal rails 0.30 m apart are joined at the left by a 1.5 Ω resistor. A uniform 0.50 T field points vertically down through the circuit. A metal rod lies across the rails and moves to the right at a steady 2.0 m/s. Viewed from above, find the emf, the current and its direction in the rod.

1. Let x be the distance from the resistor to the rod. The circuit's area is A = Lx, with L = 0.30 m. So dA/dt = L dx/dt = Lv = (0.30 m)(2.0 m/s) = 0.60 m²/s.
2. B is constant, so |ℰ| = B dA/dt = BLv = (0.50 T)(0.60 m²/s) = **0.30 V**.
3. I = 0.30 V ÷ 1.5 Ω = **0.20 A**.
4. Direction: the downward flux is increasing, so the induced field inside the circuit points up. Draw the circuit as seen from above, with the resistor on the left and the rails running across the page. Thumb up (out of your drawing): the current goes **anticlockwise**, so in the rod it flows up the page, from the lower rail to the upper rail.

**Check.** You can also find the direction from the magnetic force on positive charges in the moving rod, qv × B; it gives the same answer. Now that the rod carries a current in a field, a force acts on it. That force, and the motion it causes, are the subject of Topic 13.3.

## Induced electric fields

What pushes the charges round a loop when only B changes and nothing moves? A **changing magnetic field creates an electric field**. This is Maxwell's third equation, Faraday's law in field form:

**∮ E·dl = −dΦ_B/dt**

The left side is the emf around a closed path. The induced field E forms closed loops around the region where B changes. It is **non-conservative**: its line integral around a closed path is not zero, so you cannot describe it with an electric potential.

## Worked example 3: the field around a changing solenoid

**Question.** A long solenoid of radius R = 0.025 m has a uniform field along its axis that is increasing at 0.40 T/s. Find the size of the induced electric field at (a) r = 0.010 m and (b) r = 0.050 m from the axis. (c) Find the emf around a circle of radius 0.050 m.

By symmetry, E is tangent to circles centred on the axis and has the same size all round each circle, so ∮E·dl = E(2πr).

1. (a) Inside (r < R): the flux through the circle is Bπr². E(2πr) = πr² dB/dt, so E = (r/2) dB/dt = (0.010 m ÷ 2)(0.40 T/s) = **2.0 × 10⁻³ V/m**.
2. (b) Outside (r > R): only the solenoid's cross-section has flux, πR²B. E(2πr) = πR² dB/dt, so E = (R²/2r) dB/dt = (0.025)² ÷ (2 × 0.050) × 0.40 = **2.5 × 10⁻³ V/m**.
3. (c) ℰ = πR² dB/dt = π(0.025)²(0.40) = **7.85 × 10⁻⁴ V**. Check: E(2πr) = (2.5 × 10⁻³)(2π × 0.050) gives the same value.

**Interpretation.** There is an electric field **outside** the solenoid, where B is almost zero. E rises linearly inside, peaks at r = R (5.0 × 10⁻³ V/m) and falls as 1/r outside. Looking along the field (the field pointing towards you), E circulates clockwise, by Lenz's law. A wire loop placed anywhere around the solenoid would carry an induced current.

## Maxwell's equations and light

You have now met all four of Maxwell's equations:

| Equation | Meaning |
|---|---|
| ∮E·dA = q_enc/ε₀ | Gauss's law: charges create electric fields (Topic 8.6) |
| ∮B·dA = 0 | No magnetic monopoles; field lines form closed loops (Topic 12.1) |
| ∮E·dl = −dΦ_B/dt | Faraday: a changing magnetic flux creates an electric field (this topic) |
| ∮B·dl = μ₀I + μ₀ε₀ dΦ_E/dt | Ampère–Maxwell: currents and changing electric flux create magnetic fields (Topic 12.4) |

Together they predict that changing E and B fields can sustain each other and travel as an electromagnetic wave, at the speed **c = 1/√(μ₀ε₀) = 1/√[(4π × 10⁻⁷)(8.85 × 10⁻¹²)] = 3.00 × 10⁸ m/s**, the speed of light. The course does not expect you to derive this.

## Measuring an induced emf

A typical investigation: place a small flat search coil inside a long solenoid, with the axes lined up. Drive the solenoid with a current that rises at a steady, known rate, so that dB/dt = μ₀n dI/dt is known. Record the coil's emf with a voltmeter or data logger. Repeat for several ramp rates and plot ℰ against dB/dt. Faraday's law predicts a straight line through the origin with gradient NA, so the graph gives the number of turns or the area. Hold the angle and position of the coil fixed, and check that the emf drops to zero when the current is steady.

## Common misconceptions

- **"A strong field induces a big emf."** Only a **changing** flux induces an emf. A coil at rest in a strong steady field has ℰ = 0.
- **"The induced field always opposes the external field."** It opposes the **change**. When the flux is decreasing, the induced field points the same way as the external field.
- **Forgetting N.** Every turn of a coil adds its own emf.
- **Ignoring a sign change.** If the flux goes from +Φ to −Φ, the change is 2Φ.
- **"Maximum flux means maximum emf."** For a rotating coil the emf is largest when the flux is zero.
- **"Induced electric fields need a wire."** The field exists in empty space; the wire only lets a current flow.
- **Using V = −∫E·dl round a loop.** The induced field is non-conservative, so "potential" around a closed loop has no single value.

## Where this leads

Next, in [Topic 13.3, Induced Currents and Magnetic Forces](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/), you will find the forces on induced currents and use Newton's second law for moving loops and rods. Later, inductance (Topic 13.4) applies Faraday's law to a coil's own changing current. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-checklist/).
