---
resourceId: "mb-ap-physcm-7.4-study-guide"
title: "Energy of Simple Harmonic Oscillators: Study Guide (Physics C: Mechanics 7.4)"
description: "Calculus-based energy in simple harmonic motion: why K + U stays constant, E = ½kA², energy against position and time, amplitude from energy, and vertical springs."
course: "physics-c-mechanics"
unit: 7
topics: ["7.4"]
resourceType: "study-guide"
prerequisites:
  - "Spring potential energy U = ½kx² and conservation of energy (Topics 3.3 and 3.4)"
  - "x(t) = A cos(ωt + φ₀), v_max = Aω and ω = √(k/m) (Topics 7.2 and 7.3)"
prerequisiteResources: ["mb-ap-physcm-7.3-study-guide"]
learningObjectives:
  - "Describe the total energy of an oscillating system as the sum of its kinetic and potential energies"
  - "Show from Newton's second law, or from x(t), that the total energy of a simple harmonic oscillator is constant and equal to ½kA²"
  - "Use energy to find speeds, positions and amplitudes, including from a starting position and velocity"
  - "Sketch and interpret energy–position and energy–time graphs, and explain why K and U vary at twice the oscillation frequency"
  - "Predict how the total energy, maximum speed and period change when the amplitude, mass or spring constant changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and calculus by hand; calculator for arithmetic only, in radian mode. g = 9.8 m/s² where needed. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-7.4-revision-notes", "mb-ap-physcm-7.4-practice", "mb-ap-physcm-7.4-checklist"]
next: "mb-ap-physcm-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "The total energy of an oscillating system is E = K + U. With no friction it stays constant."
  - "For a spring–object system, E = ½kA² = ½mv_max². At a turning point all of it is potential; at equilibrium all of it is kinetic."
  - "At any position, K = ½k(A² − x²). Kinetic and potential energy are equal at x = ±A/√2, not at ±A/2."
  - "K and U each vary at twice the oscillation frequency; their sum is a flat line on an energy–time graph."
  - "Doubling the amplitude multiplies the total energy by 4 and doubles v_max, but leaves the period unchanged."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 7.4?"
    answer: "They are separate courses. Physics 1 uses bar charts and energy conservation between two positions. Physics C: Mechanics also proves that the energy is constant using calculus, finds K(t) and U(t) from x(t), and links energy to the amplitude and phase found in Topic 7.3."
  - question: "Does the mass affect the total energy of a spring oscillator?"
    answer: "Not for a given amplitude: E = ½kA² contains only k and A. The mass changes how that energy is shared out in time: a heavier object reaches a smaller v_max and has a longer period."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 7.4 called Energy of Simple Harmonic Oscillators. This guide is the **calculus-based** one. It proves that the total energy is constant, writes K and U as functions of time, and links energy to the amplitude and phase from Topic 7.3. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/7-4-energy-simple-harmonic-oscillators-study-guide/); do not mix the two when you revise.

## The system and its energy

Choose the system first. For a block on a horizontal spring, take the **block–spring system**. Its total mechanical energy is the sum of two parts:

**E = K + U, with K = ½mv_x² and U = ½kx²**

Here x is measured from equilibrium, where the spring is at its natural length. The potential energy comes from Topic 3.3: U = −∫F_x dx = −∫(−kx) dx = ½kx², taking U = 0 at x = 0.

If the system were only the block, the spring would be outside it. Then the spring would do work on the block and the block's energy would not be constant. Including the spring in the system turns that work into a change of internal potential energy.

## Why the total energy is constant

**From Newton's second law.** For the block, m dv_x/dt = −kx. Differentiate E with respect to time, using the chain rule:

dE/dt = mv_x (dv_x/dt) + kx (dx/dt) = v_x (m dv_x/dt + kx)

The bracket is zero by Newton's second law. So **dE/dt = 0**: the total energy does not change. This is conservation of energy for a system with no friction and no external work.

**From x(t).** Use x = A cos(ωt + φ₀) and v_x = −Aω sin(ωt + φ₀) from Topic 7.3, with k = mω²:

- U = ½kA² cos²(ωt + φ₀)
- K = ½mA²ω² sin²(ωt + φ₀) = ½kA² sin²(ωt + φ₀)
- K + U = ½kA² (sin² + cos²) = **½kA²**

So **E = ½kA²**. The amplitude fixes the energy, and the energy fixes the amplitude.

## Trading energy back and forth

The total stays the same, but the split changes all the time:

| Position | K | U |
|---|---|---|
| Turning point, x = ±A | **0** (minimum) | ½kA² = E (maximum) |
| Equilibrium, x = 0 | ½mv_max² = E (maximum) | **0** (minimum) |
| General x | ½k(A² − x²) | ½kx² |

Kinetic energy is greatest where potential energy is least, and the other way round. The smallest kinetic energy is zero, at each turning point.

Setting ½mv_max² = ½kA² gives **v_max = A√(k/m) = Aω**, the same result Topic 7.3 found by differentiating.

**Where are K and U equal?** Set ½kx² = ½k(A² − x²): x² = A²/2, so **x = ±A/√2 ≈ ±0.71A**. At x = A/2 the potential energy is only a quarter of the total, because U depends on x².

## Energy against position

On an energy–position graph (Figure 1) U = ½kx² is a parabola and E is a horizontal line. At any position, the gap between the line and the parabola is the kinetic energy. The object can only be where K ≥ 0, so it is trapped between the two points where the line meets the parabola. Those points are the **turning points**, x = ±A.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm74-ux-title pcm74-ux-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm74-ux-title">Energy against position for a spring–object system</title>
<desc id="pcm74-ux-desc">Energy on the vertical axis against displacement x on the horizontal axis, marked −A, 0, +A. A U-shaped parabola, the spring potential energy U = ½kx², has its minimum of zero at x = 0. A dashed horizontal line at height E = ½kA² meets the parabola at x = −A and x = +A, which are labelled turning points. At x = A/2 a vertical bracket from the parabola down to the axis is labelled U = E/4, and a second bracket from the parabola up to the dashed line is labelled K = 3E/4.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M80 270 H500 M290 20 V285" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="100.0,16.5 107.3,35.6 114.6,54.0 121.9,71.6 129.2,88.5 136.5,104.6 143.8,120.0 151.2,134.6 158.5,148.5 165.8,161.6 173.1,174.0 180.4,185.6 187.7,196.5 195.0,206.6 202.3,216.0 209.6,224.6 216.9,232.5 224.2,239.6 231.5,246.0 238.8,251.6 246.2,256.5 253.5,260.6 260.8,264.0 268.1,266.6 275.4,268.5 282.7,269.6 290.0,270.0 297.3,269.6 304.6,268.5 311.9,266.6 319.2,264.0 326.5,260.6 333.8,256.5 341.2,251.6 348.5,246.0 355.8,239.6 363.1,232.5 370.4,224.6 377.7,216.0 385.0,206.6 392.3,196.5 399.6,185.6 406.9,174.0 414.2,161.6 421.5,148.5 428.8,134.6 436.2,120.0 443.5,104.6 450.8,88.5 458.1,71.6 465.4,54.0 472.7,35.6 480.0,16.5"/>
<path d="M90 120 H490" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<path d="M143.8 120 V270 M436.2 120 V270" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<circle cx="143.8" cy="120" r="4.5" fill="#1d2b44"/><circle cx="436.2" cy="120" r="4.5" fill="#1d2b44"/>
<path d="M363.1 122 V230 M358 122 H368 M358 230 H368" stroke="#1d2b44" stroke-width="1.8"/>
<path d="M363.1 235 V268 M358 235 H368 M358 268 H368" stroke="#1d2b44" stroke-width="1.8"/>
<g font-size="12" fill="#1d2b44">
<text x="372" y="180" font-weight="600">K = 3E/4</text>
<text x="372" y="256" font-weight="600">U = E/4</text>
<text x="494" y="124">E = ½kA²</text>
<text x="150" y="112">turning point</text>
<text x="400" y="112" text-anchor="end">turning point</text>
<text x="118" y="40">U = ½kx²</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="143.8" y="288">−A</text><text x="282" y="288">0</text><text x="363.1" y="288">A/2</text><text x="436.2" y="288">+A</text>
<text x="290" y="310" font-size="13">displacement from equilibrium, x</text>
</g>
<text x="22" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 150)">energy</text>
</svg>
<figcaption>Figure 1. Energy–position graph. The solid parabola is U; the dashed line is the constant total E. The object is confined between the turning points at ±A. At x = A/2 only a quarter of the energy is potential.</figcaption>
</figure>

## Energy against time

Using the double-angle identities, with φ₀ = 0:

**U(t) = ½E[1 + cos(2ωt)]** and **K(t) = ½E[1 − cos(2ωt)]**

Each one oscillates at angular frequency **2ω**, so it repeats every **T/2**. That makes sense: U reaches its maximum at x = +A and again at x = −A, twice per cycle. Both average to E/2 over a full cycle. The sum is a flat line at E (Figure 2).

<figure>
<svg viewBox="0 0 560 310" role="img" aria-labelledby="pcm74-et-title pcm74-et-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm74-et-title">Kinetic, potential and total energy against time over one period</title>
<desc id="pcm74-et-desc">Energy from 0 to E against time from 0 to T, marked at quarter periods. A dashed curve, potential energy U, starts at E at t = 0, falls to zero at T/4, rises to E at T/2, falls to zero at 3T/4 and returns to E at T. A solid curve, kinetic energy K, does the opposite: zero at 0, E at T/4, zero at T/2, E at 3T/4 and zero at T. A dotted horizontal line at E is the total energy. The two curves cross at E/2 at T/8, 3T/8, 5T/8 and 7T/8.</desc>
<rect x="0" y="0" width="560" height="310" fill="#ffffff"/>
<path d="M80 260 H500 M80 260 V60" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M80 80 H480" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<path d="M80 170 H480" stroke="#1d2b44" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.6"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5" points="80.0,80.0 86.7,82.0 93.3,87.8 100.0,97.2 106.7,109.8 113.3,125.0 120.0,142.2 126.7,160.6 133.3,179.4 140.0,197.8 146.7,215.0 153.3,230.2 160.0,242.8 166.7,252.2 173.3,258.0 180.0,260.0 186.7,258.0 193.3,252.2 200.0,242.8 206.7,230.2 213.3,215.0 220.0,197.8 226.7,179.4 233.3,160.6 240.0,142.2 246.7,125.0 253.3,109.8 260.0,97.2 266.7,87.8 273.3,82.0 280.0,80.0 286.7,82.0 293.3,87.8 300.0,97.2 306.7,109.8 313.3,125.0 320.0,142.2 326.7,160.6 333.3,179.4 340.0,197.8 346.7,215.0 353.3,230.2 360.0,242.8 366.7,252.2 373.3,258.0 380.0,260.0 386.7,258.0 393.3,252.2 400.0,242.8 406.7,230.2 413.3,215.0 420.0,197.8 426.7,179.4 433.3,160.6 440.0,142.2 446.7,125.0 453.3,109.8 460.0,97.2 466.7,87.8 473.3,82.0 480.0,80.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,260.0 86.7,258.0 93.3,252.2 100.0,242.8 106.7,230.2 113.3,215.0 120.0,197.8 126.7,179.4 133.3,160.6 140.0,142.2 146.7,125.0 153.3,109.8 160.0,97.2 166.7,87.8 173.3,82.0 180.0,80.0 186.7,82.0 193.3,87.8 200.0,97.2 206.7,109.8 213.3,125.0 220.0,142.2 226.7,160.6 233.3,179.4 240.0,197.8 246.7,215.0 253.3,230.2 260.0,242.8 266.7,252.2 273.3,258.0 280.0,260.0 286.7,258.0 293.3,252.2 300.0,242.8 306.7,230.2 313.3,215.0 320.0,197.8 326.7,179.4 333.3,160.6 340.0,142.2 346.7,125.0 353.3,109.8 360.0,97.2 366.7,87.8 373.3,82.0 380.0,80.0 386.7,82.0 393.3,87.8 400.0,97.2 406.7,109.8 413.3,125.0 420.0,142.2 426.7,160.6 433.3,179.4 440.0,197.8 446.7,215.0 453.3,230.2 460.0,242.8 466.7,252.2 473.3,258.0 480.0,260.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="84">E</text><text x="72" y="174">E/2</text><text x="72" y="264">0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="180" y="278">T/4</text><text x="280" y="278">T/2</text><text x="380" y="278">3T/4</text><text x="480" y="278">T</text>
<text x="290" y="300" font-size="13">time, t</text>
</g>
<g font-size="12" fill="#1d2b44" font-weight="600">
<text x="486" y="76">E (dotted)</text>
<text x="190" y="62">K (solid)</text>
<text x="96" y="62">U (dashed)</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">energy</text>
</svg>
<figcaption>Figure 2. Energy–time graph for x = A cos(ωt). U (dashed) and K (solid) each repeat every T/2 and always add to the constant total E (dotted). They are equal, at E/2, four times per cycle.</figcaption>
</figure>

## Changing the amplitude, mass or spring

- **Amplitude.** E = ½kA², so doubling A multiplies E by **4**. v_max = Aω doubles. The period does not change (Topic 7.3).
- **Mass, at the same amplitude.** E is unchanged, because it contains only k and A. A heavier object has a smaller v_max = A√(k/m) and a longer period.
- **Spring constant, at the same amplitude.** A stiffer spring stores more energy, E ∝ k, and gives a shorter period.

## Vertical springs and pendulums

**Vertical spring.** Hang a mass on a spring. At equilibrium the spring is already stretched by d = mg/k. Measure y from this new equilibrium, +y upward. The spring potential energy is ½k(d − y)² and the gravitational potential energy is mgy. Their sum is ½kd² − kdy + ½ky² + mgy. Because kd = mg, the two middle terms cancel:

**U_total = ½ky² + constant**

So the energy pattern is the same as for a horizontal spring, as long as you measure from the hanging equilibrium. The minimum of U_total is not zero, but that does not matter: only changes in U appear in the energy equation.

**Pendulum.** For a bob of mass m on a string of length L, U = mgL(1 − cos θ). For small angles this is very close to ½(mg/L)s², where s = Lθ is the arc length. So a pendulum behaves like a spring with "k" = mg/L, and all the energy ideas above apply. Topic 7.5 develops this.

## Worked example 1: speed and position from energy

**Question.** Take **+x to the right**, origin at equilibrium. A 0.60 kg block on a frictionless surface is attached to a spring with k = 150 N/m. It oscillates with amplitude 0.080 m. Find (a) the total energy, (b) the maximum speed, (c) the speed at x = +0.040 m, and (d) where, and how soon after passing equilibrium, the kinetic and potential energies are equal.

1. **(a)** E = ½kA² = ½ × 150 × 0.080² = **0.48 J**.
2. **(b)** ½mv_max² = E, so v_max = √(2 × 0.48/0.60) = **1.26 m/s**. Check: ω = √(150/0.60) = 15.8 rad/s and Aω = 0.080 × 15.8 = 1.26 m/s.
3. **(c)** U = ½ × 150 × 0.040² = 0.12 J, so K = 0.48 − 0.12 = 0.36 J and v = √(2 × 0.36/0.60) = **1.10 m/s**. Halfway out, the block still has 75% of its kinetic energy.
4. **(d)** K = U when x = ±A/√2 = **±0.057 m**. Starting at equilibrium, x = A sin(ωt), so sin(ωt) = 1/√2 and ωt = π/4. t = π/(4 × 15.8) = **0.050 s**, which is T/8.

**Interpretation.** In the first T/8 after equilibrium the block covers 0.057 m. In the next T/8 it covers only 0.080 − 0.057 = 0.023 m, because it is slowing down as energy moves into the spring.

## Worked example 2: amplitude from a starting position and velocity

**Question.** Take **+x to the right**, origin at equilibrium. A 0.40 kg glider on a frictionless track is attached to a spring with k = 40 N/m. At t = 0 it is at x = +0.050 m moving at +1.2 m/s. Find the total energy, the amplitude, v_max and the period. What would the amplitude be if the glider had been given twice as much energy?

1. **Energy at the start:** U₀ = ½ × 40 × 0.050² = 0.050 J; K₀ = ½ × 0.40 × 1.2² = 0.288 J. **E = 0.338 J**.
2. **Amplitude:** at a turning point all of E is potential: ½kA² = 0.338 J, so A = √(2 × 0.338/40) = **0.13 m**.
3. **Maximum speed:** v_max = √(2E/m) = √(2 × 0.338/0.40) = **1.3 m/s**.
4. **Period:** ω = √(40/0.40) = 10 rad/s, so T = 2π/10 = **0.63 s**. It does not depend on the energy.
5. **Twice the energy:** A ∝ √E, so A′ = √2 × 0.13 = **0.18 m**. The period is still 0.63 s.

**Check.** Topic 7.3's formula gives the same amplitude: A = √(x₀² + (v_x0/ω)²) = √(0.050² + 0.12²) = 0.13 m. The energy method avoids the phase and is often quicker.

**Note.** The glider has the same speed, 1.2 m/s, at x = −0.050 m, because U depends on x², not x.

## Common misconceptions

- **"Doubling the amplitude doubles the energy."** E ∝ A², so it quadruples.
- **"K = U at half the amplitude."** At A/2, U is only E/4. They are equal at A/√2.
- **"K and U oscillate at the same frequency as x."** They repeat twice per cycle, every T/2.
- **"A heavier block on the same spring and amplitude has more energy."** E = ½kA² has no m in it.
- **"The energy is zero at equilibrium."** Only U is zero there; K is at its maximum.
- **Leaving the spring out of the system.** Then the block's energy alone is not conserved.
- **Using x measured from the natural length for a vertical spring.** Measure from the hanging equilibrium, or include gravitational energy separately.

## Where this leads

Topic 7.5 (Simple and Physical Pendulums) applies Newton's second law in rotational form to swinging bodies and uses the energy pattern you met here: read the [Topic 7.5 study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/). Now try the [practice questions](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
