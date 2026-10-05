---
resourceId: "mb-ap-physcm-3.3-study-guide"
title: "Potential Energy: Study Guide (Physics C: Mechanics 3.3)"
description: "Calculus-based potential energy: ΔU = −∫F·dr, F_x = −dU/dx, spring and gravitational potential energy derived, equilibrium and stability from U(x) graphs, and systems of many objects."
course: "physics-c-mechanics"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
prerequisites:
  - "Work as an integral of force over displacement (Topic 3.2)"
  - "Hooke's law and Newton's law of gravitation (Topics 2.6 and 2.8)"
  - "Derivatives, definite integrals and the second-derivative test"
prerequisiteResources: ["mb-ap-physcm-3.2-study-guide"]
learningObjectives:
  - "Explain why potential energy belongs to a system of interacting objects and needs conservative forces"
  - "Use ΔU = −∫F·dr to derive a potential energy function from a conservative force"
  - "Find a conservative force from U(x) with F_x = −dU/dx and give its direction"
  - "Locate equilibrium positions on a U(x) graph and classify them as stable or unstable"
  - "Calculate spring and gravitational potential energies, and judge when mgΔy is a good approximation"
  - "Add pair energies to find the potential energy of a system of three or more objects"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg², the values on the course equation table"
related: ["mb-ap-physcm-3.3-revision-notes", "mb-ap-physcm-3.3-practice", "mb-ap-physcm-3.3-checklist"]
next: "mb-ap-physcm-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Potential energy is a scalar that belongs to a system whose objects interact through conservative forces. A single object has none."
  - "Definition: ΔU = −W_c = −∫F_c · dr. Only changes in U have meaning; you choose where U = 0."
  - "In one dimension F_x = −dU/dx. The force points towards lower potential energy."
  - "A local minimum of U(x) is a stable equilibrium; a local maximum is an unstable equilibrium."
  - "Spring: U_s = ½k(Δx)². Two spheres: U_g = −Gm₁m₂/r with U = 0 at infinite separation. Near a surface: ΔU_g ≈ mgΔy."
  - "For three or more objects, add the potential energy of every pair."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 3.3?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics derives each potential energy function by integrating its force, finds forces as F_x = −dU/dx, and uses derivatives to locate and classify equilibrium positions on U(x) graphs."
  - question: "Can potential energy be negative?"
    answer: "Yes. Only differences in U are physical, so the sign depends on your zero. With U = 0 at infinite separation, every gravitational potential energy is negative."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 3.3 called Potential Energy. This guide is the **calculus-based** one. It builds each potential energy from an integral of force, gets forces back as derivatives, and uses the shape of U(x) to find and classify equilibrium positions. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/); do not mix the two when you revise. This topic follows [Topic 3.2, Work](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).

## Potential energy belongs to a system

Kinetic energy belongs to one moving object. **Potential energy** is different: it is energy stored in the **arrangement** of a system of two or more objects that push or pull on each other.

Three conditions:

1. **A system of two or more objects.** A book on its own has no gravitational potential energy. The book–Earth system has it.
2. **Conservative interactions only.** The objects must interact through **conservative forces**, such as gravity or an ideal spring force. A force is conservative if the work it does between two points does not depend on the path. Equivalently, it does zero work around any closed path. Friction fails this test: a longer path means more negative work, so friction has no potential energy.
3. **A scalar that depends on position.** U has no direction. It depends only on where the objects are relative to each other, for example the separation r of two planets or the stretch Δx of a spring.

## Defining U with an integral

Topic 3.2 gave the work done by a force as an integral. For a **conservative** force exerted between objects inside the system, the change in potential energy is defined as

**ΔU = −W_c = −∫ F_c · dr** (from the initial to the final position)

The minus sign matters. When a conservative force does **positive** work (gravity on a falling ball), the system's potential energy **decreases**. The energy has not vanished: Topic 3.4 shows it becomes kinetic energy.

**Choosing the zero.** The definition only fixes changes. You pick where U = 0 to make the analysis easier: the floor, the lowest point of a swing, the relaxed length of a spring, or infinite separation for planets. Every ΔU, and every physical prediction, comes out the same for any choice. Only the values of U itself change.

## Force from potential energy: F_x = −dU/dx

In one dimension, ΔU = −∫F_x dx. Differentiate both sides to reverse the integral:

**F_x = −dU/dx**

Read it as a rule about slopes: the conservative force is minus the slope of the U(x) graph.

- Where U(x) slopes **upward** (dU/dx > 0), F_x is negative: the force points to −x.
- Where U(x) slopes **downward**, F_x is positive.
- Either way, **the force points in the direction of decreasing potential energy**, like a ball rolling downhill on the graph.
- Where the graph is flat (dU/dx = 0), there is **no** conservative force. That is an equilibrium position.

## Equilibrium and stability on a U(x) graph

At an equilibrium position x_eq, dU/dx = 0. Now nudge the object a little and see which way the force acts.

- **Stable equilibrium:** after a small displacement, the force points **back** towards x_eq. This happens at a **local minimum** of U(x). Test: d²U/dx² > 0.
- **Unstable equilibrium:** after a small displacement, the force points **away** from x_eq, in the same direction as the displacement. This happens at a **local maximum** of U(x). Test: d²U/dx² < 0.

If the second derivative is zero, look at the graph shape on both sides instead.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm33-ux-title pcm33-ux-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm33-ux-title">Potential energy graph U = 2x³ − 6x with one stable and one unstable equilibrium</title>
<desc id="pcm33-ux-desc">Potential energy U in joules from −5 to 5 against position x in metres from −2 to 2. The curve starts at −4 J at x = −2 m, rises to a local maximum of +4 J at x = −1 m, falls through zero at the origin to a local minimum of −4 J at x = +1 m, and rises to +4 J at x = 2 m. A dashed horizontal line marks U = 0. Near the minimum, two arrows point inwards towards x = 1 m, labelled stable. Near the maximum, two arrows point outwards away from x = −1 m, labelled unstable.</desc>
<defs><marker id="pcm33-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M80 290 V30 M185 290 V30 M290 290 V30 M395 290 V30 M500 290 V30"/>
<path d="M60 265 H515 M60 215 H515 M60 115 H515 M60 65 H515"/>
</g>
<path d="M60 165 H515" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<path d="M60 290 H515 M60 290 V25" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="308">−2</text><text x="185" y="308">−1</text><text x="290" y="308">0</text><text x="395" y="308">1</text><text x="500" y="308">2</text>
<text x="290" y="330" font-size="13">position, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="294">−5</text><text x="52" y="269">−4</text><text x="52" y="219">−2</text><text x="52" y="169">0</text><text x="52" y="119">2</text><text x="52" y="69">4</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">potential energy, U (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,265.0 85.2,243.2 90.5,222.9 95.8,204.1 101.0,186.6 106.2,170.5 111.5,155.6 116.8,142.1 122.0,129.8 127.2,118.7 132.5,108.8 137.8,99.9 143.0,92.2 148.2,85.5 153.5,79.8 158.8,75.2 164.0,71.4 169.2,68.5 174.5,66.6 179.8,65.4 185.0,65.0 190.2,65.4 195.5,66.4 200.8,68.2 206.0,70.6 211.2,73.6 216.5,77.2 221.8,81.2 227.0,85.8 232.3,90.8 237.5,96.2 242.8,102.1 248.0,108.2 253.2,114.6 258.5,121.4 263.8,128.3 269.0,135.4 274.2,142.7 279.5,150.1 284.8,157.5 290.0,165.0 295.2,172.5 300.5,180.0 305.8,187.3 311.0,194.6 316.2,201.7 321.5,208.7 326.8,215.4 332.0,221.8 337.2,227.9 342.5,233.8 347.8,239.2 353.0,244.2 358.3,248.8 363.5,252.9 368.8,256.4 374.0,259.4 379.2,261.8 384.5,263.6 389.8,264.6 395.0,265.0 400.2,264.6 405.5,263.4 410.8,261.5 416.0,258.6 421.2,254.8 426.5,250.1 431.8,244.5 437.0,237.8 442.2,230.1 447.5,221.2 452.8,211.3 458.0,200.2 463.2,187.9 468.5,174.3 473.8,159.5 479.0,143.4 484.2,125.9 489.5,107.0 494.8,86.8 500.0,65.0"/>
<circle cx="185" cy="65" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="395" cy="265" r="5" fill="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="2" fill="none" marker-end="url(#pcm33-head)">
<path d="M172 45 H140"/><path d="M198 45 H230"/>
<path d="M350 280 H383"/><path d="M440 280 H407"/>
</g>
<text x="185" y="30" font-size="12" fill="#1d2b44" text-anchor="middle">unstable: force pushes away (open circle)</text>
<text x="340" y="250" font-size="12" fill="#1d2b44" text-anchor="end">stable: force pushes back</text>
<text x="340" y="265" font-size="12" fill="#1d2b44" text-anchor="end">(filled circle)</text>
<text x="300" y="158" font-size="12" fill="#1d2b44">U = 0 (dashed)</text>
</svg>
<figcaption>Figure 1. U(x) = 2x³ − 6x (U in J, x in m), used in Worked example 1. The open circle at x = −1 m is a local maximum (unstable equilibrium); the arrows show the force pushing the object away. The filled circle at x = +1 m is a local minimum (stable equilibrium); the arrows show the force pushing it back.</figcaption>
</figure>

## Elastic potential energy of an ideal spring

Take +x along the spring, with x = Δx measured from the relaxed length. The spring force on the object is F_x = −kx (Topic 2.8). Choose U_s = 0 at the relaxed length and integrate:

U_s(x) = −∫₀ˣ (−kx′) dx′ = **½kx²**, usually written **U_s = ½k(Δx)²**.

The energy is the same for a stretch and a compression of the same size, because Δx is squared. It also grows as the square of the deformation: double the stretch, four times the energy. Check the slope: −dU_s/dx = −kx, which is Hooke's law again.

The system here is the spring and the object it is attached to. The spring stores energy because it changes shape reversibly.

## Gravitational potential energy

**General form.** Two roughly spherical masses m₁ and m₂ attract with a force of size Gm₁m₂/r². Take r as the centre-to-centre separation. The force on m₂ points towards m₁, so its radial component is F_r = −Gm₁m₂/r². Choose U_g = 0 when the objects are infinitely far apart and bring them in from infinity:

U_g(r) = −∫_∞ʳ (−Gm₁m₂/r′²) dr′ = **−Gm₁m₂/r**

U_g is **negative at every finite separation** and rises towards zero as r grows. Moving the objects apart increases U_g, as it should, because you must pull against the attraction.

**Near a planet's surface.** Over small height changes, the field is nearly constant at g. For a mass m raised by Δy:

**ΔU_g ≈ mgΔy**

This is the limit of the general form. Raising m from r = R to R + h gives ΔU_g = GMm[1/R − 1/(R + h)] = GMmh / [R(R + h)]. When h is much smaller than R, R(R + h) ≈ R², and GM/R² = g, so ΔU_g ≈ mgh. Worked example 2 shows how good this approximation is.

## Systems with three or more objects

Potential energy belongs to **pairs** of interacting objects. For a system of three or more, add the potential energy of **each pair once**:

U_total = U₁₂ + U₁₃ + U₂₃ + …

For three spheres: U_g = −G(m₁m₂/r₁₂ + m₁m₃/r₁₃ + m₂m₃/r₂₃). Three objects give three pairs; four objects give six. Different interaction types add too. A block on a vertical spring has U_s (block–spring) and U_g (block–Earth), and the system's potential energy is their sum.

## Worked example 1: forces and equilibria from U(x)

**Question.** Take **+x to the right**. A small object moves along the x-axis in a system whose potential energy is U(x) = (2.0 J/m³)x³ − (6.0 J/m)x (Figure 1). Find (a) the force F_x(x), (b) the equilibrium positions and their stability, (c) the force at x = 2.0 m, and (d) the work done by this force as the object moves from x = −1.0 m to x = +1.0 m.

1. **(a)** F_x = −dU/dx = −(6.0x² − 6.0) = **6.0 − 6.0x²** (N, with x in m).
2. **(b)** Equilibrium: dU/dx = 0, so 6.0x² = 6.0 and **x = ±1.0 m**. Second derivative: d²U/dx² = 12x.
   - At x = +1.0 m: d²U/dx² = +12 J/m² > 0, a minimum (U = −4.0 J). **Stable.**
   - At x = −1.0 m: d²U/dx² = −12 J/m² < 0, a maximum (U = +4.0 J). **Unstable.**
3. **Check by nudging.** At x = 1.1 m, F_x = 6.0 − 7.26 = −1.26 N, back towards 1.0 m. At x = 0.9 m, F_x = +1.14 N, also back towards 1.0 m. At x = −1.1 m, F_x = −1.26 N, further away from −1.0 m. Stable and unstable, as predicted.
4. **(c)** F_x(2.0) = 6.0 − 24 = **−18 N**. The graph slopes steeply upward at x = 2.0 m, so the force points to −x, downhill on the graph.
5. **(d)** W = −ΔU = −[U(1.0) − U(−1.0)] = −(−4.0 − 4.0) = **+8.0 J**.

**Check (d) by integration.** ∫₋₁¹ (6.0 − 6.0x²) dx = 12 − 4.0 = 8.0 J. Positive work and a fall in U agree: the object moved downhill on the graph.

## Worked example 2: when does mgΔy stop working?

**Question.** Orvane is a fictional planet with mass M = 2.4 × 10²⁴ kg and radius R = 4.0 × 10⁶ m. A probe has mass m = 800 kg. Use G = 6.67 × 10⁻¹¹ N·m²/kg². (a) Find g at the surface and U_g of the probe–planet system at the surface, with U = 0 at infinite separation. (b) Find ΔU_g exactly, and with mgΔy, for lifting the probe 20 km. (c) Repeat (b) for 2000 km.

1. **(a)** g = GM/R² = (6.67 × 10⁻¹¹)(2.4 × 10²⁴) ÷ (4.0 × 10⁶)² = **10.0 m/s²** (10.005 before rounding).
   U_g = −GMm/R = −(6.67 × 10⁻¹¹)(2.4 × 10²⁴)(800) ÷ (4.0 × 10⁶) = **−3.2 × 10¹⁰ J**.
2. **(b)** Exact: ΔU_g = GMm[1/R − 1/(R + h)] with h = 2.0 × 10⁴ m gives **1.593 × 10⁸ J**.
   Approximate: mgh = 800 × 10.005 × 2.0 × 10⁴ = **1.601 × 10⁸ J**. The approximation is only **0.50%** too high.
3. **(c)** With h = 2.0 × 10⁶ m = R/2: exact ΔU_g = GMm[1/R − 1/(1.5R)] = GMm/(3R) = **1.07 × 10¹⁰ J**. mgh = **1.60 × 10¹⁰ J**, which is **50%** too high.

**Interpretation.** mgΔy assumes the field stays at its surface value. Higher up, the real field is weaker, so the true energy needed is smaller. The ratio mgh ÷ exact equals (R + h)/R, so the error grows in proportion to h/R: 0.50% for h/R = 0.005, 50% for h/R = 0.5.

## Worked example 3: a potential energy from a nonideal force

**Question.** Take **+x in the direction of stretch**, with x = 0 at the cord's natural length. A stretched elastic cord exerts F_x = −(ax + bx²) for x ≥ 0, with a = 50 N/m and b = 200 N/m². (a) Derive U(x), choosing U = 0 at x = 0. (b) Find the energy stored at x = 0.30 m and compare it with an ideal spring of k = 50 N/m. (c) How much energy must be supplied to stretch the cord from 0.10 m to 0.30 m?

1. **(a)** U(x) = −∫₀ˣ F_x dx′ = ∫₀ˣ (ax′ + bx′²) dx′ = **½ax² + ⅓bx³**.
   Check: −dU/dx = −(ax + bx²) = F_x. ✓
2. **(b)** U(0.30) = ½(50)(0.30)² + ⅓(200)(0.30)³ = 2.25 + 1.80 = **4.05 J ≈ 4.1 J**.
   An ideal spring with k = 50 N/m stores ½(50)(0.30)² = **2.25 J**. The cord stores 1.8 times as much, because it gets stiffer as it stretches.
3. **(c)** U(0.10) = 0.25 + 0.0667 = 0.317 J, so ΔU = 4.05 − 0.317 = **3.7 J**.

**Check the units.** b has unit N/m², so ⅓bx³ has unit N·m = J. ✓ Note that ½k(Δx)² would give the wrong answer here: it applies only when F is proportional to x.

## Common misconceptions

- **"The ball has potential energy."** Potential energy belongs to the ball–Earth **system**. A system of one object can only have kinetic energy.
- **Dropping the minus sign.** ΔU = −W_c and F_x = −dU/dx. Positive work by a conservative force lowers U.
- **"Equilibrium is where U = 0."** Equilibrium is where the **slope** dU/dx is zero. In Figure 1, U = 0 at x = 0, where F_x = +6.0 N.
- **"Negative U means no energy."** The sign depends on the zero you chose. Only changes in U have meaning.
- **Using mgΔy far from the surface.** Use −Gm₁m₂/r when the height change is not small compared with the planet's radius (Worked example 2).
- **Using ½k(Δx)² for any elastic object.** It holds only for an ideal spring with F ∝ Δx. Otherwise integrate the force (Worked example 3).
- **Counting pairs twice.** In a three-body system, U₁₂ and U₂₁ are the same pair. Count it once.
- **Giving friction a potential energy.** Friction is not conservative. Its work depends on the path.

## Where this leads

Next, [Topic 3.4, Conservation of Energy](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/), combines U with kinetic energy: you will use U(x) graphs with a total energy line to find speeds and turning points. Later, the minimum of U at a stable equilibrium returns in simple harmonic motion, and −Gm₁m₂/r returns in orbits. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
