---
resourceId: "mb-ap-physcm-3.4-study-guide"
title: "Conservation of Energy: Study Guide (Physics C: Mechanics 3.4)"
description: "Calculus-based conservation of energy: choosing a system, when mechanical energy is constant, speeds and turning points from U(x) graphs, escape with −GMm/r, and friction that varies with position."
course: "physics-c-mechanics"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Kinetic energy and the work–energy theorem (Topics 3.1 and 3.2)"
  - "Potential energy functions and F_x = −dU/dx (Topic 3.3)"
  - "Definite integrals of polynomials"
prerequisiteResources: ["mb-ap-physcm-3.3-study-guide"]
learningObjectives:
  - "Say which kinds of energy a chosen system can have"
  - "Decide, from the choice of system, whether its total or mechanical energy stays constant"
  - "Use K + U = constant, or ΔE = W_ext, to find speeds, heights and stretches"
  - "Read speeds, turning points and allowed regions from a U(x) graph with a total-energy line"
  - "Use U_g = −GMm/r to find maximum heights and escape speed"
  - "Find energy dissipated by friction that varies with position by integration, and show it on energy bar charts"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg², the values on the course equation table"
related: ["mb-ap-physcm-3.4-revision-notes", "mb-ap-physcm-3.4-practice", "mb-ap-physcm-3.4-checklist"]
next: "mb-ap-physcm-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A one-object system can have only kinetic energy. A system with conservative interactions, or one that deforms reversibly, can also have potential energy."
  - "Mechanical energy is E = K + U. It stays constant when no external work is done and no nonconservative forces act inside the system."
  - "Energy is always conserved. If the system's energy changes, the change equals the energy transferred in or out: ΔK + ΔU + ΔE_th = W_ext."
  - "On a U(x) graph, K = E − U(x). Turning points are where U = E; the object cannot enter regions where U > E."
  - "With U_g = −GMm/r, escape speed from a surface is √(2GM/R)."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 3.4?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics adds calculus: speeds and turning points from potential energy functions, the general gravitational form −GMm/r, and energy dissipated by forces that change with position, found by integration."
  - question: "Is energy conserved when there is friction?"
    answer: "Yes. Total energy is conserved in every interaction. Friction turns mechanical energy into thermal energy and sound, so mechanical energy alone is not constant unless you count that thermal energy too."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 3.4 called Conservation of Energy. This guide is the **calculus-based** one. It applies energy conservation to potential energy functions U(x), to the general gravitational form −GMm/r, and to friction that varies with position, using derivatives and integrals. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/3-4-conservation-energy-study-guide/); do not mix the two when you revise. This topic follows [Topic 3.3, Potential Energy](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/).

## What energies can a system have?

Every energy statement starts with a **system**: the objects you choose to include. Everything else is the **surroundings**.

- **One object only.** A system of a single object can have only **kinetic energy**, K = ½mv². A falling stone on its own has no potential energy: Earth is outside the system, so gravity is an external force doing work on the stone.
- **Interacting objects, or something that deforms reversibly.** If objects inside the system interact through conservative forces (stone and Earth through gravity), or the system can change shape and spring back (a spring), the system can have **kinetic and potential energy**.
- **Real systems.** Rubbing surfaces inside the system also give it **internal (thermal) energy**. This course asks you to track how much mechanical energy is dissipated, not to model the thermal energy in detail.

## Mechanical energy and the energy rule

The **mechanical energy** of a system is the sum of its kinetic and potential energies:

**E_mech = K + U**

**Energy is conserved in all interactions.** It is never created or destroyed. So any change in one type of energy inside the system must be balanced by an equal and opposite change in other types, or by energy crossing the system boundary. In symbols:

**ΔK + ΔU + ΔE_th = W_ext**

Here W_ext is the work done on the system by external forces (the energy transferred in), and ΔE_th is the thermal energy produced by nonconservative forces inside the system, such as kinetic friction.

## Choosing the system decides what stays constant

You can often **choose** the system so that its energy is constant. Two cases follow from the energy rule.

1. **No external work and no nonconservative forces inside.** Then W_ext = 0 and ΔE_th = 0, so **K + U = constant**. Mechanical energy is conserved.
2. **External work is not zero.** Then energy is transferred between the system and its surroundings, and the system's total energy changes by exactly W_ext.

The same physics can be described both ways:

| System | Energies inside | What changes it | Result for a falling stone |
|---|---|---|---|
| Stone alone | K only | Gravity (external) does W = mgh | ΔK = +mgh |
| Stone + Earth | K and U_g | Nothing external | ΔK = −ΔU_g = +mgh |

Both give the same speed. Never count gravity twice: either it is an external force doing work, or it is an internal interaction stored as U_g, not both.

**Nonconservative forces.** Kinetic friction and air resistance turn mechanical energy into **thermal energy and sound**. For sliding friction, the energy dissipated is usually taken as the friction force times the length of the path. If the friction force changes along the path, you integrate: ΔE_th = ∫ f_k ds.

## Energy with a potential energy function

For an object in a system with potential energy U(x), and no other forces doing work, rearrange K + U = E:

**½mv² = E − U(x), so v(x) = √[2(E − U(x))/m]**

Draw E as a horizontal line on the U(x) graph. Then:

- The gap between the line and the curve is K at that position. The bigger the gap, the faster the object.
- **Turning points** are where the line meets the curve: U = E, so K = 0 and the object stops and turns back.
- Regions where U(x) > E are **forbidden**: they would need negative K.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm34-ux-title pcm34-ux-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm34-ux-title">Double-well potential energy graph U = 3x⁴ − 6x² with two total-energy lines</title>
<desc id="pcm34-ux-desc">Potential energy U in joules from −5 to 5 against position x in metres from −1.6 to 1.6. The curve has two minima of −3 J at x = −1 m and x = +1 m and a local maximum of 0 J at x = 0. A dotted horizontal line at E = 1.69 J meets the curve at x = −1.5 m and x = +1.5 m, so an object with this energy moves across both wells. A dashed horizontal line at E = −2.42 J is drawn only between x = 0.75 m and x = 1.2 m in the right-hand well, where an object with this energy is trapped.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M160 270 V25 M290 270 V25 M420 270 V25"/>
<path d="M60 246 H515 M60 198 H515 M60 150 H515 M60 102 H515 M60 54 H515"/>
</g>
<path d="M60 270 H515 M60 270 V20" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="95" y="288">−1.5</text><text x="160" y="288">−1</text><text x="290" y="288">0</text><text x="420" y="288">1</text><text x="485" y="288">1.5</text>
<text x="290" y="318" font-size="13">position, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="250">−4</text><text x="52" y="202">−2</text><text x="52" y="154">0</text><text x="52" y="106">2</text><text x="52" y="58">4</text>
</g>
<text x="20" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 150)">energy (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="82.0,46.8 88.5,80.4 95.0,109.5 101.5,134.5 108.0,155.6 114.5,173.3 121.0,187.7 127.5,199.2 134.0,208.1 140.5,214.5 147.0,218.8 153.5,221.2 160.0,222.0 166.5,221.3 173.0,219.4 179.5,216.5 186.0,212.7 192.5,208.2 199.0,203.3 205.5,198.0 212.0,192.5 218.5,187.0 225.0,181.5 231.5,176.2 238.0,171.2 244.5,166.6 251.0,162.4 257.5,158.7 264.0,155.6 270.5,153.2 277.0,151.4 283.5,150.4 290.0,150.0 296.5,150.4 303.0,151.4 309.5,153.2 316.0,155.6 322.5,158.7 329.0,162.4 335.5,166.6 342.0,171.2 348.5,176.2 355.0,181.5 361.5,187.0 368.0,192.5 374.5,198.0 381.0,203.3 387.5,208.2 394.0,212.7 400.5,216.5 407.0,219.4 413.5,221.3 420.0,222.0 426.5,221.2 433.0,218.8 439.5,214.5 446.0,208.1 452.5,199.2 459.0,187.7 465.5,173.3 472.0,155.6 478.5,134.5 485.0,109.5 491.5,80.4 498.0,46.8"/>
<path d="M95 109.5 H485" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<path d="M387.2 208 H446" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4"/>
<circle cx="95" cy="109.5" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="485" cy="109.5" r="4" fill="#1d2b44"/>
<circle cx="387.2" cy="208" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="446" cy="208" r="4" fill="#1d2b44"/>
<path d="M420 109.5 V222" stroke="#1d2b44" stroke-width="1.2"/>
<text x="200" y="100" font-size="12" fill="#1d2b44">E = 1.69 J (dotted): released at x = 1.5 m</text>
<text x="416" y="160" font-size="12" fill="#1d2b44" text-anchor="end">K = 4.69 J</text>
<text x="416" y="174" font-size="12" fill="#1d2b44" text-anchor="end">at x = 1 m</text>
<text x="300" y="262" font-size="12" fill="#1d2b44" text-anchor="middle">E = −2.42 J (dashed): trapped, 0.75 m ≤ x ≤ 1.2 m</text>
<text x="128" y="244" font-size="12" fill="#1d2b44" text-anchor="middle">U = −3 J</text>
</svg>
<figcaption>Figure 1. U(x) = 3x⁴ − 6x² (U in J, x in m) for Worked example 1. Filled circles mark the release points and open circles the other turning points. The vertical line at x = 1 m shows K as the gap between the energy line and the curve.</figcaption>
</figure>

## Worked example 1: speeds and turning points from U(x)

**Question.** Take **+x to the right**. A 0.50 kg bead slides without friction on a straight wire. Its system has U(x) = (3.0 J/m⁴)x⁴ − (6.0 J/m²)x² (Figure 1). (a) The bead is released from rest at x = 1.5 m. Find its total energy, its speed at x = 1.0 m and at x = 0, and where it next stops. (b) Repeat for release from rest at x = 1.2 m.

1. **Equilibria.** dU/dx = 12x³ − 12x = 0 gives x = 0 (maximum, U = 0) and x = ±1.0 m (minima, U = −3.0 J).
2. **(a) Total energy.** At rest, K = 0, so E = U(1.5) = 3.0(5.0625) − 6.0(2.25) = **1.69 J**.
3. **Speed at x = 1.0 m:** K = 1.69 − (−3.0) = 4.69 J, so v = √(2 × 4.69 ÷ 0.50) = **4.3 m/s**. This is the fastest point, because U is lowest.
4. **Speed at x = 0:** K = 1.69 − 0 = 1.69 J, so v = **2.6 m/s**. E > U(0), so the bead crosses the hump.
5. **Next stop.** U is symmetric, so U = E again at **x = −1.5 m**. The bead oscillates between −1.5 m and +1.5 m.
6. **(b)** E = U(1.2) = 6.22 − 8.64 = **−2.42 J**. This is below the hump at U = 0, so the bead is **trapped in the right-hand well**. Solve 3.0x⁴ − 6.0x² = −2.42: x² = 1.44 or 0.560, so the turning points are **x = 1.2 m and x = 0.75 m**. At x = 1.0 m: K = −2.42 + 3.0 = 0.58 J, v = **1.5 m/s**.

**Check with force.** At release from 1.2 m, F_x = −dU/dx = −(20.7 − 14.4) = −6.3 N, pointing towards the minimum at 1.0 m, as the graph predicts.

## Worked example 2: escaping a moon

**Question.** Vessa is a fictional airless moon with M = 7.2 × 10²² kg and R = 1.5 × 10⁶ m. A probe is launched straight up from the surface at 1.6 km/s. Use the probe–moon system and treat the moon as fixed. Find (a) g at the surface, (b) the escape speed, and (c) the greatest height the probe reaches. (d) Compare (c) with the prediction from constant g.

1. **(a)** g = GM/R² = (6.67 × 10⁻¹¹)(7.2 × 10²²) ÷ (1.5 × 10⁶)² = **2.1 m/s²**.
2. **(b)** Escape means reaching r → ∞ with K ≥ 0. With U_g = 0 at infinity, the smallest launch energy satisfies ½mv² − GMm/R = 0, so v_esc = √(2GM/R) = √(2 × 4.80 × 10¹² ÷ 1.5 × 10⁶) = **2.5 km/s**. The probe's mass cancels.
3. **(c)** 1.6 km/s is below escape speed, so the probe stops at some r_max. Energy is conserved: ½mv₀² − GMm/R = −GMm/r_max. Divide by m and rearrange: 1/r_max = 1/R − v₀²/(2GM) = 6.67 × 10⁻⁷ − 2.67 × 10⁻⁷ = 4.00 × 10⁻⁷ m⁻¹. So r_max = 2.50 × 10⁶ m and the height is r_max − R = **1.0 × 10⁶ m** (about 1000 km).
4. **(d)** With constant g: h = v₀²/(2g) = (1600)² ÷ (2 × 2.13) = **6.0 × 10⁵ m**. This underestimates the true height by 40%. The field weakens with height, so less kinetic energy is needed per metre climbed.

**Why treat the moon as fixed?** Momentum is shared, but the moon's mass is so large that its share of the kinetic energy is negligible.

## Worked example 3: a spring launch onto a rough strip

**Question.** Take **+x along the floor**. A 2.0 kg block is pushed against an ideal spring (k = 800 N/m), compressing it by 0.15 m, on a smooth floor. When released, it leaves the spring and slides onto a rough strip that starts at x = 0. On the strip the coefficient of kinetic friction rises with distance: μ_k = (0.40 m⁻¹)x. (a) Find the speed as the block leaves the spring. (b) Find how far onto the strip it slides. (c) Draw energy bar charts. (d) Predict the stopping distance if the compression is doubled.

1. **(a)** System: block + spring, smooth floor. Elastic energy becomes kinetic: ½(800)(0.15)² = 9.0 J = ½(2.0)v², so **v = 3.0 m/s**.
2. **(b)** System: block + strip (+ Earth). The friction force has size μ_k mg = 0.40x × 2.0 × 9.8 = 7.84x N. It changes with x, so integrate: ΔE_th = ∫₀ᵈ 7.84x dx = 3.92d². All 9.0 J is dissipated when the block stops: 3.92d² = 9.0, so **d = 1.5 m**. (Here μ_k has reached 0.61.)
3. **(c)** Figure 2 shows four moments. After 1.0 m on the strip, ΔE_th = 3.92 J and K = 9.0 − 3.92 = 5.08 J, so v = 2.3 m/s. The total stays at 9.0 J throughout.
4. **(d)** Doubling the compression gives four times the elastic energy, 36 J. Since ΔE_th ∝ d², d ∝ √(energy), so the distance doubles to **3.0 m**. A strip with constant μ_k would give four times the distance instead.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm34-bar-title pcm34-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm34-bar-title">Energy bar charts for the spring launch onto a rough strip</title>
<desc id="pcm34-bar-desc">Four bar charts, each with three bars: elastic energy (solid), kinetic energy (hatched) and thermal energy (dotted), on a scale from 0 to 9 joules. At A, spring compressed and block at rest: elastic 9.0 J, kinetic 0, thermal 0. At B, block leaving the spring: elastic 0, kinetic 9.0 J, thermal 0. At C, 1.0 m onto the strip: elastic 0, kinetic 5.1 J, thermal 3.9 J. At D, block stopped 1.5 m onto the strip: elastic 0, kinetic 0, thermal 9.0 J.</desc>
<defs>
<pattern id="pcm34-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<pattern id="pcm34-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.3" fill="#1d2b44"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M50 230 H540" stroke="#1d2b44" stroke-width="2"/>
<path d="M50 230 V40" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="44" y="234">0</text><text x="44" y="144">4.5</text><text x="44" y="54">9.0</text></g>
<path d="M50 140 H540 M50 50 H540" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<text x="16" y="140" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 16 140)">energy (J)</text>
<g stroke="#1d2b44" stroke-width="1.5">
<rect x="70" y="50" width="30" height="180" fill="#1d2b44"/>
<rect x="245" y="50" width="30" height="180" fill="url(#pcm34-hatch)"/>
<rect x="365" y="128.4" width="30" height="101.6" fill="url(#pcm34-hatch)"/>
<rect x="400" y="151.6" width="30" height="78.4" fill="url(#pcm34-dots)"/>
<rect x="505" y="50" width="30" height="180" fill="url(#pcm34-dots)"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="85" y="44">9.0</text><text x="260" y="44">9.0</text><text x="380" y="122">5.1</text><text x="415" y="145">3.9</text><text x="520" y="44">9.0</text>
<text x="85" y="246">U_s</text><text x="120" y="246">K</text><text x="155" y="246">E_th</text>
<text x="225" y="246">U_s</text><text x="260" y="246">K</text><text x="295" y="246">E_th</text>
<text x="345" y="246">U_s</text><text x="380" y="246">K</text><text x="415" y="246">E_th</text>
<text x="450" y="246">U_s</text><text x="485" y="246">K</text><text x="520" y="246">E_th</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="120" y="268">A: compressed, at rest</text><text x="260" y="268">B: leaves spring</text><text x="380" y="268">C: 1.0 m on strip</text><text x="485" y="268">D: stopped</text>
</g>
<text x="290" y="292" font-size="12" fill="#1d2b44" text-anchor="middle">solid = elastic U_s · hatched = kinetic K · dotted = thermal E_th</text>
</svg>
<figcaption>Figure 2. Energy bar charts for the block + spring + strip system in Worked example 3. Each bar is labelled with its value; patterns, not colours, tell the energy types apart. The total is 9.0 J at every moment.</figcaption>
</figure>

## Comparing scenarios

Energy arguments are good for comparisons because masses and paths often cancel.

- On any frictionless path, the speed after a drop Δy is √(2gΔy), whatever the mass or the shape of the track.
- Spring launch: ½kx² = ½mv², so v ∝ x/√m. Double the compression, double the speed.
- Escape speed √(2GM/R) does not depend on the launched mass.
- Friction is the exception: dissipated energy depends on the path length, so a longer route loses more.

## Common misconceptions

- **"A falling stone's potential energy turns into kinetic energy" with the stone as the system.** A one-object system has no potential energy. Either include Earth, or treat gravity's work as external.
- **Counting gravity twice.** Use mgh as work done or as ΔU_g, never both.
- **"Energy is not conserved when there is friction."** Total energy is. Mechanical energy becomes thermal energy and sound.
- **"Constant speed means energy is constant."** Only K is constant. U can change, with an external force doing work (practice Q7).
- **"The object stops where U is greatest."** It stops where U = E. The highest point of U(x) may be out of reach or may be crossed.
- **Using mgh for large heights.** Use −GMm/r (Worked example 2).
- **Using f × d for friction that varies.** Integrate the force over the path (Worked example 3).

## Where this leads

Next, [Topic 3.5, Power](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/), asks how fast energy is transferred or converted. Energy conservation returns with rotation in Unit 6 and with oscillations in Unit 7, where a U(x) well like Figure 1 gives simple harmonic motion near its minimum. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
