---
resourceId: "mb-ap-physcem-13.4-study-guide"
title: "Inductance: Study Guide (Physics C: E&M 13.4)"
description: "Calculus-based guide to inductance: self-induced emf, the inductance of a solenoid and its core, ℰ = −L dI/dt, and energy stored in an inductor's magnetic field."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.4"]
resourceType: "study-guide"
prerequisites:
  - "The field inside a long solenoid, B = μ₀NI/ℓ, from Ampère's law (Unit 12)"
  - "Faraday's law and Lenz's law (Topic 13.2)"
  - "Power in a circuit element, P = IV, and integrating a simple polynomial"
prerequisiteResources: ["mb-ap-physcem-13.3-study-guide"]
learningObjectives:
  - "Explain inductance as a conductor's opposition to a change in its own current"
  - "Derive the inductance of a long solenoid and predict how it changes with turns, length, area and core"
  - "Use ℰ = −L dI/dt to find the size and direction of a self-induced emf, including from a current–time graph"
  - "Derive and use U = ½LI² for the energy stored in an inductor"
  - "Track the energy an inductor stores and releases to a resistor or a capacitor using conservation of energy"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Keep unrounded values until the final step; give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.4-revision-notes", "mb-ap-physcem-13.4-practice", "mb-ap-physcem-13.4-checklist"]
next: "mb-ap-physcem-13.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Inductance L measures how strongly a conductor opposes a change in its own current: L = NΦ_B/I, in henries (1 H = 1 V·s/A)."
  - "A long solenoid has L = μN²A/ℓ; straight wires are modelled as having zero inductance."
  - "The self-induced emf is ℰ = −L dI/dt: it depends on how fast the current changes, not on the current itself."
  - "An inductor stores energy U = ½LI² in its magnetic field."
  - "That energy can later be dissipated in a resistor or used to charge a capacitor; the total energy is conserved."
faqs:
  - question: "Does an inductor oppose current?"
    answer: "No. It opposes a change in current. A steady current through an ideal inductor produces no emf, so the inductor then behaves like a plain wire."
  - question: "Why can the current through an inductor not jump suddenly?"
    answer: "A sudden jump means dI/dt is infinite, which would need an infinite emf. So the current through an inductor always changes smoothly; Topic 13.5 uses this idea to analyse LR circuits."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.4. It applies Faraday's law (Topic 13.2) to a coil's **own** changing current. You will differentiate and integrate simple functions of current and time.

Constant used throughout: **μ₀ = 4π × 10⁻⁷ T·m/A**.

## A coil that resists change in its own current

In Topic 13.2 a changing flux from a magnet or another circuit induced an emf in a loop. Now look at a single coil connected to a supply. The current in the coil makes a magnetic field, and that field passes through the coil's own turns. If the current changes, the field changes, so the flux through the coil changes. By Faraday's law an emf is induced in the coil itself. This is **self-induction**.

By Lenz's law the self-induced emf opposes the change that causes it:

- If the current is **rising**, the emf acts against the current and slows the rise.
- If the current is **falling**, the emf acts in the direction of the current and slows the fall.

**Inductance** is the name for this tendency of a conductor to oppose a change in its current. It works a little like inertia in mechanics: mass resists a change in velocity; inductance resists a change in current.

To measure it, define the inductance as the **flux linkage per unit current**:

**L = NΦ_B / I**

where Φ_B is the flux through one turn and N is the number of turns. For a coil without an iron core the flux is proportional to the current, so L is a constant that depends only on the coil's shape, size and core. The SI unit is the **henry**: 1 H = 1 Wb/A = 1 V·s/A = 1 Ω·s.

**Which conductors have inductance?** Every conductor has some, but the amount depends on its physical form. A straight wire links very little of its own flux, so in circuit problems **straight wires are modelled as having zero inductance**. A component built to have significant inductance, such as a solenoid with many closely wound turns, is called an **inductor**.

## The inductance of a long solenoid

Take a long solenoid with N turns, length ℓ and cross-sectional area A, with no core (air or vacuum inside). Ampère's law gives the field inside:

B = μ₀NI/ℓ

1. Flux through one turn: Φ_B = BA = μ₀NIA/ℓ.
2. Flux linkage: NΦ_B = μ₀N²IA/ℓ.
3. Divide by I: **L = μ₀N²A/ℓ**.

The current cancels, as it should. If the solenoid is wound on a core of a magnetic material, replace μ₀ by the permeability of the core:

**L_sol = μ_core N²A / ℓ**

A core of iron or a similar material has a permeability many times μ₀, so it raises the inductance by the same factor. This is why real inductors are often wound on a core.

| Change (others fixed) | Effect on L | Reason |
|---|---|---|
| turns N doubled | × 4 | B doubles **and** twice as many turns link it |
| length ℓ doubled (same N) | × 1/2 | turns are spread out, so B halves |
| radius doubled | × 4 | area A ∝ r² |
| core with μ_core = kμ₀ inserted | × k | the field for a given current is k times larger |

Watch the first two rows together: doubling **both** N and ℓ keeps the turns per metre the same but doubles the volume, so L doubles.

## The self-induced emf: ℰ = −L dI/dt

Apply Faraday's law to the coil: ℰ = −d(NΦ_B)/dt. Since NΦ_B = LI and L is constant,

**ℰ = −L dI/dt**

Read the minus sign as Lenz's law. Here ℰ is measured in the direction of the current. When dI/dt > 0, ℰ is negative: it pushes against the current. When dI/dt < 0, ℰ is positive: it pushes along the current to keep it going.

Three consequences follow.

- **Steady current, no emf.** If dI/dt = 0, ℰ = 0. An ideal inductor (no resistance) carrying a steady current has no potential difference across it.
- **The size of the current does not matter, only its rate of change.** A large current that is not changing gives no emf; a small current that changes quickly can give a large one.
- **The current cannot jump.** An instant change would need dI/dt to be infinite. Real circuits produce a large emf when a switch tries to stop the current in an inductor suddenly; this is why a spark can appear at the switch.

In a circuit, the potential difference across an ideal inductor has magnitude L|dI/dt|. It is a drop in the direction of the current while the current is increasing, and a rise while it is decreasing.

<figure>
<svg viewBox="0 0 560 440" role="img" aria-labelledby="ind-graph-title ind-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ind-graph-title">Current through an inductor and the self-induced emf, against time</title>
<desc id="ind-graph-desc">Two graphs share a time axis from 0 to 40 milliseconds. Top graph, current: rises in a straight line from 0 to 3.0 amperes between 0 and 10 milliseconds, stays at 3.0 amperes until 30 milliseconds, then falls in a straight line to 0 at 40 milliseconds and stays at 0. Bottom graph, induced emf measured in the direction of the current: minus 36 volts from 0 to 10 milliseconds, 0 from 10 to 30 milliseconds, plus 36 volts from 30 to 40 milliseconds, then 0. Dashed vertical lines mark the jumps in emf at 10, 30 and 40 milliseconds.</desc>
<defs><marker id="ind-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="170" x2="535" y2="170" stroke="#1d2b44" stroke-width="2" marker-end="url(#ind-arr)"/>
<line x1="80" y1="170" x2="80" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#ind-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="180" y1="170" x2="180" y2="176" stroke="#1d2b44"/><text x="180" y="190">10</text>
<line x1="280" y1="170" x2="280" y2="176" stroke="#1d2b44"/><text x="280" y="190">20</text>
<line x1="380" y1="170" x2="380" y2="176" stroke="#1d2b44"/><text x="380" y="190">30</text>
<line x1="480" y1="170" x2="480" y2="176" stroke="#1d2b44"/><text x="480" y="190">40</text>
<text x="80" y="190">0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="70" x2="80" y2="70" stroke="#1d2b44"/><text x="70" y="74">3.0</text>
<line x1="74" y1="120" x2="80" y2="120" stroke="#1d2b44"/><text x="70" y="124">1.5</text>
</g>
<text x="22" y="110" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 110)">Current, I (A)</text>
<polyline points="80,170 180,70 380,70 480,170 525,170" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44">
<text x="96" y="92">rising: +300 A/s</text>
<text x="240" y="62">steady</text>
<text x="420" y="92">falling: −300 A/s</text>
</g>
<line x1="80" y1="320" x2="535" y2="320" stroke="#1d2b44" stroke-width="2" marker-end="url(#ind-arr)"/>
<line x1="80" y1="400" x2="80" y2="235" stroke="#1d2b44" stroke-width="2" marker-end="url(#ind-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">+36</text>
<text x="70" y="324">0</text>
<line x1="74" y1="380" x2="80" y2="380" stroke="#1d2b44"/><text x="70" y="384">−36</text>
</g>
<text x="22" y="320" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 320)">Induced emf, ℰ (V)</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="180" y1="320" x2="180" y2="326" stroke="#1d2b44"/>
<line x1="280" y1="320" x2="280" y2="326" stroke="#1d2b44"/>
<line x1="380" y1="320" x2="380" y2="326" stroke="#1d2b44"/>
<line x1="480" y1="320" x2="480" y2="326" stroke="#1d2b44"/>
<text x="180" y="418">10</text><text x="280" y="418">20</text><text x="380" y="418">30</text><text x="480" y="418">40</text>
<text x="310" y="436" font-size="13">Time, t (ms) — same scale for both graphs</text>
</g>
<polyline points="80,380 180,380" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="180,320 380,320" fill="none" stroke="#1d2b44" stroke-width="4"/>
<polyline points="380,260 480,260" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="480,320 525,320" fill="none" stroke="#1d2b44" stroke-width="4"/>
<line x1="180" y1="380" x2="180" y2="320" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 4"/>
<line x1="380" y1="320" x2="380" y2="260" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 4"/>
<line x1="480" y1="260" x2="480" y2="320" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 4"/>
<g font-size="12" fill="#1d2b44">
<text x="90" y="372">opposes the rise</text>
<text x="390" y="252">keeps the current going</text>
</g>
</svg>
<figcaption>Figure 1. The current and self-induced emf for the 0.12 H inductor in Worked example 2. The emf graph is −L times the slope of the current graph: a constant slope gives a constant emf, and a flat current gives zero emf. The emf jumps where the slope changes suddenly; the current itself never jumps.</figcaption>
</figure>

## Energy stored in an inductor

To build up a current, the circuit must push charge against the self-induced emf. The rate at which the circuit does work on the inductor is

P = I × (L dI/dt)

Integrate this as the current rises from 0 to I:

U = ∫ P dt = ∫₀ᴵ LI′ dI′ = **½LI²**

This energy is stored in the **magnetic field** inside the inductor. It is not lost; it comes back out when the current falls. Compare a capacitor, which stores ½CV² in its electric field.

*Background (not required for this course):* for a solenoid, dividing ½LI² by the volume Aℓ gives an energy density B²/(2μ₀) in the field. Worked example 1 shows the two methods agree.

Where can the stored energy go? If the current is allowed to fall through a **resistor**, all of ½LI² ends up as thermal energy in the resistor. If the inductor is connected to an uncharged **capacitor**, the energy moves into the capacitor's electric field. In both cases the total energy is conserved. Topics 13.5 and 13.6 follow these transfers in time.

## Worked example 1: a solenoid with and without a core

**Question.** A solenoid has 500 turns wound over a length of 0.25 m on a tube of radius 0.020 m. (a) Find its inductance with an air core. (b) A core with permeability 300μ₀ (an invented value for this example) fills the tube. Find the new inductance. (c) Find the energy stored in each case when the current is 2.0 A. (d) A second solenoid has twice the turns and twice the length, with the same radius and an air core. Compare its inductance with (a).

1. (a) A = πr² = π(0.020 m)² = 1.257 × 10⁻³ m². L = μ₀N²A/ℓ = (4π × 10⁻⁷)(500)²(1.257 × 10⁻³) ÷ 0.25 = **1.58 × 10⁻³ H** (1.58 mH).
2. (b) L is proportional to the permeability, so L = 300 × 1.579 mH = **0.474 H**.
3. (c) Air core: U = ½(1.579 × 10⁻³ H)(2.0 A)² = **3.16 × 10⁻³ J**. With the core: U = ½(0.4737 H)(2.0 A)² = **0.947 J**.
4. (d) L ∝ N²/ℓ, so the factor is 2²/2 = **2**: about 3.16 mH.

**Check.** The field inside the air-cored solenoid is B = μ₀NI/ℓ = 5.03 × 10⁻³ T. The flux linkage per ampere, NBA/I, is 1.58 × 10⁻³ H, matching (a). The background energy-density method, [B²/(2μ₀)](Aℓ), also gives 3.16 × 10⁻³ J.

## Worked example 2: reading the emf from a current graph

**Question.** The current in a 0.12 H inductor follows the top graph in Figure 1: it rises steadily from 0 to 3.0 A in the first 10 ms, stays at 3.0 A until 30 ms, then falls steadily to zero at 40 ms. (a) Find the induced emf in each interval and sketch ℰ(t). (b) Find the greatest energy stored. (c) At t = 5.0 ms, find the stored energy and the rate at which energy is entering the inductor.

**(a)** Use ℰ = −L dI/dt in each interval.

- 0 to 10 ms: dI/dt = 3.0 A ÷ 0.010 s = 300 A/s, so ℰ = −(0.12 H)(300 A/s) = **−36 V** (against the current).
- 10 to 30 ms: dI/dt = 0, so **ℰ = 0**.
- 30 to 40 ms: dI/dt = −300 A/s, so **ℰ = +36 V** (along the current).

The sketch is the bottom graph of Figure 1: constant blocks, because each slope is constant.

**(b)** The energy is greatest when the current is greatest: U = ½(0.12)(3.0)² = **0.54 J**, held from 10 ms to 30 ms.

**(c)** At 5.0 ms, I = 1.5 A, so U = ½(0.12)(1.5)² = **0.135 J**. The power into the inductor is P = LI dI/dt = (0.12)(1.5)(300) = **54 W**.

**Interpretation.** The energy is stored while the current rises, held while it is steady and returned to the circuit while it falls. The emf is largest when the current changes fastest, not when the current is largest.

## Common misconceptions

- **"An inductor opposes current."** It opposes a **change** in current. With a steady current an ideal inductor has no emf.
- **"Large current means large emf."** The emf depends on dI/dt. At the top of the current graph in Figure 1 the emf is zero.
- **Forgetting to square N.** Doubling the turns quadruples L, because B and the number of linked turns both double.
- **Treating straight wires as inductors.** In circuit problems their inductance is modelled as zero; the inductance is in the coil.
- **Using ½L(ΔI)² for the energy released.** The energy change is ½LI₁² − ½LI₂², not ½L(I₁ − I₂)².
- **"The emf always points against the current."** It points against the current only while the current is increasing.

## Where this leads

Next, Topic 13.5 puts an inductor in series with a resistor. You will use ℰ = −L dI/dt with Kirchhoff's loop rule to derive how the current grows and decays with time, and you will see the stored energy ½LI² dissipated in the resistor. Topic 13.6 then sends the energy back and forth between an inductor and a capacitor. Go back to [Topic 13.3, Induced Currents and Magnetic Forces](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/) if Faraday's and Lenz's laws feel shaky. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-checklist/). The next study guide is [Topic 13.5, Circuits with Resistors and Inductors (LR Circuits)](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/).
