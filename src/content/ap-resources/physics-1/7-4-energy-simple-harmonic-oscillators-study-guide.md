---
resourceId: "mb-ap-phys1-7.4-study-guide"
title: "Energy of Simple Harmonic Oscillators: Study Guide (Physics 1 7.4)"
description: "Track kinetic and potential energy in spring and pendulum oscillators, use E = ½kA² to find maximum speed and amplitude, and read energy graphs and bar charts with algebra only."
course: "physics-1"
unit: 7
topics: ["7.4"]
resourceType: "study-guide"
prerequisites:
  - "Kinetic energy, spring potential energy U = ½kx² and gravitational potential energy U = mgh (Topics 3.1 and 3.3)"
  - "Conservation of mechanical energy in a system with no external work or friction (Topic 3.4)"
  - "Where speed and acceleration are zero or largest in SHM (Topic 7.3)"
prerequisiteResources: ["mb-ap-phys1-7.3-study-guide"]
learningObjectives:
  - "Write the total energy of an oscillating system as the sum of its kinetic and potential energies, and explain why it stays constant"
  - "Identify where kinetic energy and potential energy are largest and smallest in an oscillation"
  - "Use E = ½kA² with energy conservation to find maximum speed, speed at any displacement, or amplitude"
  - "Predict how a change of amplitude changes the total energy, the maximum speed and the period"
  - "Draw and interpret energy bar charts and graphs of energy against position or time"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-7.4-revision-notes", "mb-ap-phys1-7.4-practice", "mb-ap-phys1-7.4-checklist"]
next: "mb-ap-phys1-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "The total energy of an oscillating system is E = K + U. With no friction or outside work, E stays constant."
  - "At the turning points K = 0 (its minimum) and U is largest. At equilibrium U is smallest and K is largest."
  - "For a spring–object system, E = ½kA². So doubling the amplitude multiplies the total energy by 4."
  - "Setting ½mv_max² = ½kA² gives the maximum speed; ½mv² = ½kA² − ½kx² gives the speed at any displacement."
  - "Changing the amplitude changes the energy and the maximum speed, but not the period."
faqs:
  - question: "Is the energy lost when the object stops at a turning point?"
    answer: "No. At a turning point the kinetic energy is zero, but all the energy is stored as potential energy in the spring (or in the pendulum–Earth system). It turns back into kinetic energy as the object returns."
  - question: "Does a heavier object on the same spring with the same amplitude have more energy?"
    answer: "No. For a spring–object system E = ½kA², which does not contain the mass. The heavier object has the same energy but a smaller maximum speed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It uses the energy ideas from Unit 3 and needs no calculus. Topic 7.3 described *where* an oscillator is fastest; energy explains *why*, and lets you calculate *how fast*.

## The system and its energy

Choose the system first. For a mass on a spring, take the **spring–object system**. For a pendulum, take the **bob–Earth system**. The total mechanical energy is:

**E_total = K + U**

- **Kinetic energy:** K = ½mv². It is never negative.
- **Spring potential energy:** U = ½kx², with x measured from the spring's relaxed length. On a level surface that is also the equilibrium position.
- **Gravitational potential energy:** U = mgh, with h measured up from the lowest point of the swing.

If there is no friction or air resistance and nothing outside the system does work on it, **the total energy stays constant**. The energy moves back and forth between K and U, but the sum does not change.

## Trading energy back and forth

Follow a spring–object system through one swing:

- **At a turning point (x = ±A):** the object is momentarily at rest, so K = 0. This is the **smallest possible kinetic energy**. The spring is stretched or compressed the most, so U is at its **largest**: U = ½kA².
- **At equilibrium (x = 0):** on a level surface the spring is relaxed there, so U = 0, its **smallest** value. All the energy is kinetic, so K is at its **largest**.
- **In between:** some of each. K + U is the same everywhere.

Because the total energy equals the potential energy at a turning point:

**E_total = ½kA²** (spring–object system)

At equilibrium all of that is kinetic energy:

**½mv_max² = ½kA², so v_max = A√(k/m)**

At any displacement x:

**½mv² + ½kx² = ½kA²**

This last line is the most useful one. It links speed and position without needing any time.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-74-ex-title p1-74-ex-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-74-ex-title">Energy against displacement for a spring–object oscillator</title>
<desc id="p1-74-ex-desc">Energy in joules from 0 to 0.40 against displacement x in metres from −0.15 to +0.15, for the system in Worked example 1. A horizontal dotted line at 0.36 J shows the constant total energy. A solid U-shaped parabola shows spring potential energy: zero at x = 0 and 0.36 J at x = ±0.15 m. A dashed upside-down parabola shows kinetic energy: 0.36 J at x = 0 and zero at x = ±0.15 m. At x = +0.090 m a vertical marker shows potential energy 0.13 J from the axis up to the solid curve, and kinetic energy 0.23 J from the solid curve up to the total-energy line.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M100 40 V280 M172 40 V280 M388 40 V280 M460 40 V280"/>
<path d="M100 220 H470 M100 160 H470 M100 100 H470"/>
</g>
<path d="M90 280 H480 M280 290 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M100 64 H460" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="100.0,64.0 112.0,91.8 124.0,117.8 136.0,141.8 148.0,163.8 160.0,184.0 172.0,202.2 184.0,218.6 196.0,233.0 208.0,245.4 220.0,256.0 232.0,264.6 244.0,271.4 256.0,276.2 268.0,279.0 280.0,280.0 292.0,279.0 304.0,276.2 316.0,271.4 328.0,264.6 340.0,256.0 352.0,245.4 364.0,233.0 376.0,218.6 388.0,202.2 400.0,184.0 412.0,163.8 424.0,141.8 436.0,117.8 448.0,91.8 460.0,64.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" points="100.0,280.0 112.0,252.2 124.0,226.2 136.0,202.2 148.0,180.2 160.0,160.0 172.0,141.8 184.0,125.4 196.0,111.0 208.0,98.6 220.0,88.0 232.0,79.4 244.0,72.6 256.0,67.8 268.0,65.0 280.0,64.0 292.0,65.0 304.0,67.8 316.0,72.6 328.0,79.4 340.0,88.0 352.0,98.6 364.0,111.0 376.0,125.4 388.0,141.8 400.0,160.0 412.0,180.2 424.0,202.2 436.0,226.2 448.0,252.2 460.0,280.0"/>
<path d="M388 280 V202" stroke="#1d2b44" stroke-width="5"/>
<path d="M388 202 V64" stroke="#1d2b44" stroke-width="5" stroke-dasharray="3 3"/>
<circle cx="388" cy="202" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="298">−0.15</text><text x="172" y="298">−0.090</text><text x="280" y="298">0</text><text x="388" y="298">+0.090</text><text x="460" y="298">+0.15</text>
<text x="280" y="320" font-size="13">displacement, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="94" y="284">0</text><text x="94" y="224">0.10</text><text x="94" y="164">0.20</text><text x="94" y="104">0.30</text><text x="94" y="58">0.36</text>
</g>
<text x="22" y="165" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 165)">energy (J)</text>
<g font-size="12" fill="#1d2b44">
<text x="396" y="250">U = 0.13 J</text>
<text x="396" y="120">K = 0.23 J</text>
<text x="300" y="56">total E = 0.36 J (dotted)</text>
<path d="M110 20 H140" stroke="#1d2b44" stroke-width="2.5"/><text x="146" y="24">U (solid)</text>
<path d="M220 20 H250" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4"/><text x="256" y="24">K (dashed)</text>
</g>
</svg>
<figcaption>Figure 1. Energy against displacement for the puck in Worked example 1 (k = 32 N/m, A = 0.15 m). The solid curve is U = ½kx²; the dashed curve is K = E − U. At any x, the gap from the axis to the solid curve is U and the gap from the solid curve to the dotted line is K. At x = +0.090 m: U = 0.13 J, K = 0.23 J.</figcaption>
</figure>

## Energy bar charts

An **energy bar chart** shows each kind of energy as a bar at one instant. For an oscillator, the rules are:

- Every bar starts at the zero line. K can never go below it.
- The **total height** of the bars is the same at every instant (if no energy leaves the system).
- A zero quantity is shown as a line on the zero mark, not left blank.

For the puck in Worked example 1, the bars at three positions would be:

| Position | K (J) | U (J) | Total (J) |
|---|---|---|---|
| x = +0.15 m (turning point) | 0 | 0.36 | 0.36 |
| x = +0.090 m | 0.23 | 0.13 | 0.36 |
| x = 0 (equilibrium) | 0.36 | 0 | 0.36 |

## Energy against time

K and U also change with time. Starting from x = +A, U begins at its largest value and K at zero. After a quarter period they have swapped; after half a period they have swapped back. So **each energy reaches its maximum twice in every period** of the motion. Their sum is a flat line.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="p1-74-et-title p1-74-et-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-74-et-title">Kinetic and potential energy against time for one period</title>
<desc id="p1-74-et-desc">Energy against time for one period T of an oscillator released from x = +A. A dashed curve for potential energy U starts at the total energy E, falls to zero at T/4, rises to E at T/2, falls to zero at 3T/4 and rises to E at T. A solid curve for kinetic energy K does the opposite: zero at 0, E at T/4, zero at T/2, E at 3T/4 and zero at T. A dotted horizontal line at E shows that K plus U is constant.</desc>
<rect x="0" y="0" width="560" height="270" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6">
<path d="M170 30 V220 M270 30 V220 M370 30 V220 M470 30 V220"/>
</g>
<path d="M70 220 H490 M70 230 V25" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M70 40 H470" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" points="70.0,40.0 80.0,44.4 90.0,57.2 100.0,77.1 110.0,102.2 120.0,130.0 130.0,157.8 140.0,182.9 150.0,202.8 160.0,215.6 170.0,220.0 180.0,215.6 190.0,202.8 200.0,182.9 210.0,157.8 220.0,130.0 230.0,102.2 240.0,77.1 250.0,57.2 260.0,44.4 270.0,40.0 280.0,44.4 290.0,57.2 300.0,77.1 310.0,102.2 320.0,130.0 330.0,157.8 340.0,182.9 350.0,202.8 360.0,215.6 370.0,220.0 380.0,215.6 390.0,202.8 400.0,182.9 410.0,157.8 420.0,130.0 430.0,102.2 440.0,77.1 450.0,57.2 460.0,44.4 470.0,40.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,220.0 80.0,215.6 90.0,202.8 100.0,182.9 110.0,157.8 120.0,130.0 130.0,102.2 140.0,77.1 150.0,57.2 160.0,44.4 170.0,40.0 180.0,44.4 190.0,57.2 200.0,77.1 210.0,102.2 220.0,130.0 230.0,157.8 240.0,182.9 250.0,202.8 260.0,215.6 270.0,220.0 280.0,215.6 290.0,202.8 300.0,182.9 310.0,157.8 320.0,130.0 330.0,102.2 340.0,77.1 350.0,57.2 360.0,44.4 370.0,40.0 380.0,44.4 390.0,57.2 400.0,77.1 410.0,102.2 420.0,130.0 430.0,157.8 440.0,182.9 450.0,202.8 460.0,215.6 470.0,220.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="64" y="44">E</text><text x="64" y="224">0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="240">0</text><text x="170" y="240">T/4</text><text x="270" y="240">T/2</text><text x="370" y="240">3T/4</text><text x="470" y="240">T</text>
<text x="270" y="262" font-size="13">time, t</text>
</g>
<text x="22" y="130" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 130)">energy</text>
<g font-size="12" fill="#1d2b44">
<text x="478" y="44">K + U</text><text x="478" y="60">(dotted)</text>
<text x="478" y="120">K (solid)</text>
<text x="478" y="138">U (dashed)</text>
</g>
</svg>
<figcaption>Figure 2. Kinetic energy (solid) and potential energy (dashed) against time for one period, starting from x = +A. Each peaks twice per period; their sum (dotted) stays at E.</figcaption>
</figure>

## Changing the amplitude

Since E = ½kA², the total energy depends on the **square** of the amplitude:

| Change | Total energy | Maximum speed | Period |
|---|---|---|---|
| A doubled | × 4 | × 2 | unchanged |
| A tripled | × 9 | × 3 | unchanged |
| A halved | × ¼ | × ½ | unchanged |

The maximum speed scales with A because v_max = A√(k/m). The period does not change, as Topic 7.3 showed. Changing the amplitude changes the largest potential energy, and so the total energy.

## Worked example 1: speed from energy

**Question.** A 0.50 kg puck on a frictionless air table is attached to a spring with k = 32 N/m. Take **+x along the spring**, from equilibrium. The puck is pulled to x = 0.15 m and released. Find (a) the total energy, (b) the maximum speed and (c) the speed at x = 0.090 m.

1. (a) At release, K = 0 and all the energy is spring energy: E = ½kA² = ½ × 32 × 0.15² = **0.36 J**.
2. (b) At equilibrium U = 0, so ½mv_max² = 0.36 J. v_max = √(2 × 0.36 ÷ 0.50) = √1.44 = **1.2 m/s**.
3. (c) At x = 0.090 m: U = ½ × 32 × 0.090² = 0.1296 J ≈ 0.13 J. So K = 0.36 − 0.1296 = 0.2304 J ≈ 0.23 J.
4. v = √(2K/m) = √(2 × 0.2304 ÷ 0.50) = √0.9216 = **0.96 m/s**.

**Check.** v_max = A√(k/m) = 0.15 × √64 = 0.15 × 8.0 = 1.2 m/s, which agrees. At 60% of the amplitude the puck still has 80% of its top speed: it slows down mostly near the turning points.

## Worked example 2: a pendulum

**Question.** A 0.15 kg bob hangs on a light string 0.60 m long. It is pulled aside until it is 0.015 m higher than its lowest point and released from rest. Take the bob–Earth system and h = 0 at the lowest point. Find (a) the total energy, (b) the speed at the bottom, and (c) the speed when the bob is 0.0075 m above the bottom.

1. (a) At release K = 0: E = mgh = 0.15 × 9.8 × 0.015 = **0.022 J** (0.02205 J).
2. (b) At the bottom U = 0, so ½mv² = mgh and v_max = √(2gh) = √(2 × 9.8 × 0.015) = **0.54 m/s**.
3. (c) At h = 0.0075 m, half the energy is still potential, so K = 0.02205 − 0.011025 = 0.011025 J. v = √(2 × 0.011025 ÷ 0.15) = **0.38 m/s**.

**Interpretation.** The mass cancels in step 2. A 0.30 kg bob released from the same height has twice the energy (0.044 J) but the same speed at the bottom. The angle here is about 13°, small enough for the motion to be close to SHM. Energy conservation itself works at any angle.

## Worked example 3: finding the amplitude from a push

**Question.** A 0.50 kg cart on a level, frictionless track sits at rest at the equilibrium position of a spring with k = 18 N/m. It is given a quick push so that it starts moving at 0.30 m/s. (a) Find the amplitude. (b) The experiment is repeated with a starting speed of 0.60 m/s. Find the new amplitude, and compare the energies and periods.

1. (a) The cart starts at x = 0, so all the energy is kinetic: E = ½ × 0.50 × 0.30² = 0.0225 J.
2. At the turning point all of it is spring energy: ½kA² = 0.0225 J, so A = √(2 × 0.0225 ÷ 18) = √0.0025 = **0.050 m**.
3. (b) E = ½ × 0.50 × 0.60² = 0.090 J, which is **4 times** as much. A = √(2 × 0.090 ÷ 18) = **0.10 m**, twice as far.
4. Period in both cases: T = 2π√(0.50 ÷ 18) = **1.0 s** (1.05 s unrounded). It does not depend on the push.

**Check.** v_max = A√(k/m) gives 0.050 × 6.0 = 0.30 m/s and 0.10 × 6.0 = 0.60 m/s, matching the starting speeds.

## Quick checks with extreme cases

- **x = 0:** ½mv² + 0 = ½kA² gives v = v_max, as it should.
- **x = ±A:** ½mv² + ½kA² = ½kA² gives v = 0, the turning point.
- **A → 0:** no energy, no motion. The object just sits at equilibrium.
- **A stiffer spring, same amplitude:** E = ½kA² grows with k, and so does v_max. The period gets shorter, because T = 2π√(m/k).

## Background: real oscillators lose energy

Real springs and pendulums slowly stop. Friction and air resistance do negative work and turn mechanical energy into thermal energy, so E falls and the amplitude shrinks. The SHM model in this course assumes these effects are negligible over the time you study.

## Common misconceptions

- **"The kinetic energy is largest at the turning points, where the force is largest."** The force is largest there, but the object is at rest, so K = 0.
- **"Energy is lost when the object stops."** It is stored as potential energy and returned.
- **"At half the amplitude, the energy is half kinetic and half potential."** At x = A/2, U = ¼E and K = ¾E. K equals U at x = A/√2 ≈ 0.71A.
- **"Doubling the amplitude doubles the energy."** It multiplies the energy by 4, because E = ½kA².
- **"A heavier pendulum bob swings faster at the bottom."** v_max = √(2gh) does not depend on mass (Worked example 2).
- **"More energy means a longer period."** The period depends on m and k (or ℓ and g), not on the energy.

## Where this leads

This completes Unit 7. Next, Unit 8 turns to fluids, starting with [Topic 8.1, Internal Structure and Density](/advanced-course-resources/physics-1/8-1-internal-structure-density-study-guide/). Before moving on, try the [practice questions](/advanced-course-resources/physics-1/7-4-energy-simple-harmonic-oscillators-practice/), then use the [revision notes](/advanced-course-resources/physics-1/7-4-energy-simple-harmonic-oscillators-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/7-4-energy-simple-harmonic-oscillators-checklist/). To review graphs of SHM, go back to [Topic 7.3](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
