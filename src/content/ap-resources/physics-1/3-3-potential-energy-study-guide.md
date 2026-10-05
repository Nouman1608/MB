---
resourceId: "mb-ap-phys1-3.3-study-guide"
title: "Potential Energy: Study Guide (Physics 1 3.3)"
description: "Potential energy as a property of a system: conservative forces, choosing the zero, spring and gravitational potential energy, and summing pairs, with algebra-only worked examples."
course: "physics-1"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
prerequisites:
  - "Work done by a constant force and the area under a force–displacement graph (Topic 3.2)"
  - "Hooke's law for an ideal spring (Topic 2.8) and Newton's law of gravitation (Topic 2.6)"
prerequisiteResources: ["mb-ap-phys1-3.2-study-guide"]
learningObjectives:
  - "Decide whether a chosen system can have potential energy by checking for two or more objects that interact through conservative forces"
  - "Explain that potential energy is a scalar set by the positions of objects in a system, and that the zero is a free choice"
  - "Calculate elastic potential energy with U_s = ½kΔx² and predict how it changes when the stretch or compression changes"
  - "Calculate gravitational potential energy with U_g = −Gm₁m₂/r, and changes near a planet's surface with ΔU_g = mgΔy"
  - "Find the total potential energy of a system of three or more objects by adding the energy of each pair"
  - "Sketch potential energy graphs for a spring and for two gravitating bodies"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. g = 9.8 m/s² (9.8 N/kg) and G = 6.67 × 10⁻¹¹ N·m²/kg², as on the course equation table; the course also accepts g = 10 m/s² where stated"
related: ["mb-ap-phys1-3.3-revision-notes", "mb-ap-phys1-3.3-practice", "mb-ap-phys1-3.3-checklist"]
next: "mb-ap-phys1-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Potential energy belongs to a system of two or more objects that interact through conservative forces. A single object on its own has none."
  - "Potential energy is a scalar that depends on where the objects are relative to each other. You choose where it is zero; only changes have physical meaning."
  - "Ideal spring: U_s = ½kΔx², where Δx is the stretch or compression from the relaxed length. Double Δx and U_s becomes four times as big."
  - "Two spherical masses: U_g = −Gm₁m₂/r, zero at very large separation and negative everywhere else. Near a planet's surface use ΔU_g = mgΔy."
  - "For three or more objects, add the potential energy of every pair."
faqs:
  - question: "Does a ball on a shelf 'have' potential energy?"
    answer: "Strictly, no. The ball–Earth system has gravitational potential energy, because it depends on the separation of the ball and Earth. Saying 'the ball's potential energy' is everyday shorthand; in written answers, name the system."
  - question: "Why is the general gravitational potential energy negative?"
    answer: "The zero is chosen at infinite separation. Gravity pulls the objects together, so bringing them closer lowers the energy below zero. A negative value is not an error; it is a consequence of that choice."
  - question: "Can potential energy be negative near Earth's surface too?"
    answer: "Yes, if you put the zero above the object. The value depends on your choice of zero. The change in potential energy between two positions does not."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## Potential energy belongs to a system

In Topic 3.1 you met kinetic energy, the energy of motion. Potential energy is different. It is energy stored in the **arrangement** of objects that pull or push on each other.

Three conditions must hold:

1. The system has **two or more objects** (or one object that can change its shape, such as a spring, whose parts push on each other).
2. Those objects interact **with each other**.
3. The interaction is through a **conservative force**, such as gravity or an ideal spring force.

A **conservative force** is one whose work depends only on the start and end positions, not on the path. Carry a box upstairs by the lift or by the stairs: gravity does the same work on it either way. Friction is **not** conservative. Drag a box the long way round a room and friction does more (negative) work than on the short path. There is no "friction potential energy".

So potential energy is always a property of a **system**. A ball on its own has kinetic energy only. The **ball–Earth system** has gravitational potential energy, because it depends on the separation of the ball and Earth. A **block–spring system** has elastic potential energy, because it depends on how far the spring is stretched.

### Scalar, and set by position

Potential energy is a **scalar**. It has a size and can be positive or negative, but it has no direction. Its value is fixed by the **positions** of the objects in the system, not by how fast they move or how they got there.

For a conservative force inside the system, the link to Topic 3.2 is:

**ΔU = −W** (work done by that conservative force on the objects inside the system)

When gravity does +20 J of work on a falling ball, the ball–Earth system's potential energy falls by 20 J. That energy has not vanished. In Topic 3.4 you will follow it into kinetic energy.

## Choosing the zero

Where U = 0 is **your decision**. Choose whatever makes the problem simplest: the floor, the lowest point of a swing, the relaxed length of a spring. Changing the zero shifts every value of U by the same amount, so every **change** ΔU stays the same. Only changes in potential energy affect what happens physically.

State your zero, just as you state your axis in kinematics: "U_g = 0 at the floor".

## Elastic potential energy of an ideal spring

An ideal spring obeys Hooke's law (Topic 2.8): the force it exerts has size kΔx, where Δx is the stretch or compression measured from its **relaxed** (equilibrium) length. Its potential energy is

**U_s = ½kΔx²**

- k is the spring constant in N/m; Δx is in m; U_s is in joules (J).
- The zero is at the relaxed length. That is the natural choice and the one the formula assumes.
- Δx is squared, so a spring stores the **same** energy when stretched 3 cm as when compressed 3 cm. U_s is never negative.
- **Functional dependence:** U_s ∝ Δx². Double the stretch and U_s becomes 2² = 4 times as big. Triple it: 9 times.

Where does the ½ come from? In Topic 3.2 you found work from the area under a force–displacement graph. The force needed to stretch the spring rises in a straight line from 0 to kΔx. The area under that line is a triangle: ½ × Δx × kΔx = ½kΔx². That work is what the spring stores.

## Gravitational potential energy

### The general form

For two roughly spherical masses (a planet and a moon, a star and a planet, or Earth and a satellite) with centres a distance r apart:

**U_g = −Gm₁m₂ / r**

- r is measured **centre to centre**, not from the surface.
- The zero is at **infinite** separation. Every finite separation gives a **negative** value.
- As r increases, U_g gets **less negative**, so it increases. Pulling two masses apart takes energy; letting them fall together releases it.
- **Functional dependence:** U_g ∝ 1/r. Double the separation and U_g becomes half as big (half as negative). Compare the force, which goes as 1/r².

### Near a planet's surface

Close to the surface, the gravitational field is nearly constant, with strength g. Then the **change** in potential energy of an object–planet system when the object rises a height Δy is

**ΔU_g = mgΔy**

Here Δy is positive for upward. This is a short cut, and it works only while Δy is tiny compared with the planet's radius. Worked example 3 tests where it breaks down.

## Graphs of potential energy

<figure>
<svg viewBox="0 0 580 320" role="img" aria-labelledby="p1-33-u-title p1-33-u-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-33-u-title">Potential energy graphs for a spring and for two gravitating masses</title>
<desc id="p1-33-u-desc">Left panel: elastic potential energy U_s in joules from 0 to 2.0 against spring stretch Δx in metres from −0.12 to +0.12, for k = 250 N/m. The curve is a U-shaped parabola with its lowest point, zero, at Δx = 0. It passes through 0.20 J at plus and minus 0.04 m, 0.80 J at plus and minus 0.08 m and 1.8 J at plus and minus 0.12 m. Right panel: gravitational potential energy U_g against centre-to-centre separation r, from the planet's surface r = R out to 5R. The vertical axis is in units of GMm over R, with 0 at the top and −1.0 at the bottom. The curve starts at −1.0 at r = R, rises steeply, passes −0.5 at 2R and −0.25 at 4R, and flattens towards zero without reaching it.</desc>
<rect x="0" y="0" width="580" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M60 250 V45 M110 250 V45 M210 250 V45 M260 250 V45"/>
<path d="M55 200 H265 M55 150 H265 M55 100 H265 M55 50 H265"/>
<path d="M418 60 V245 M462 60 V245 M506 60 V245 M550 60 V245"/>
<path d="M330 150 H555 M330 240 H555"/>
</g>
<path d="M50 250 H275 M160 255 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="60" y="268">−0.12</text><text x="110" y="268">−0.06</text><text x="160" y="268">0</text><text x="210" y="268">0.06</text><text x="260" y="268">0.12</text>
<text x="160" y="290" font-size="12">stretch, Δx (m)</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="154" y="204">0.5</text><text x="154" y="154">1.0</text><text x="154" y="104">1.5</text><text x="154" y="54">2.0</text>
</g>
<text x="166" y="36" font-size="12" fill="#1d2b44">U_s (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,70.0 68.3,98.8 76.7,125.0 85.0,148.8 93.3,170.0 101.7,188.8 110.0,205.0 118.3,218.8 126.7,230.0 135.0,238.8 143.3,245.0 151.7,248.8 160.0,250.0 168.3,248.8 176.7,245.0 185.0,238.8 193.3,230.0 201.7,218.7 210.0,205.0 218.3,188.8 226.7,170.0 235.0,148.8 243.3,125.0 251.7,98.7 260.0,70.0"/>
<circle cx="193.3" cy="230" r="4" fill="#1d2b44"/><circle cx="226.7" cy="170" r="4" fill="#1d2b44"/><circle cx="260" cy="70" r="4" fill="#1d2b44"/>
<text x="198" y="242" font-size="11" fill="#1d2b44">0.20 J</text><text x="232" y="180" font-size="11" fill="#1d2b44">0.80 J</text><text x="214" y="64" font-size="11" fill="#1d2b44">1.8 J</text>
<text x="20" y="312" font-size="12" fill="#1d2b44">(a) spring, k = 250 N/m: U_s = ½kΔx²</text>
<path d="M330 60 H560 M330 55 V250" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="374" y="50">R</text><text x="418" y="50">2R</text><text x="462" y="50">3R</text><text x="506" y="50">4R</text><text x="550" y="50">5R</text>
<text x="470" y="30" font-size="12">separation, r</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="324" y="64">0</text><text x="324" y="154">−0.5</text><text x="324" y="244">−1.0</text>
</g>
<text x="300" y="275" font-size="11" fill="#1d2b44">U_g in units of GMm/R</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="374.0,240.0 379.5,220.0 385.0,204.0 390.5,190.9 396.0,180.0 401.5,170.8 407.0,162.9 412.5,156.0 418.0,150.0 423.5,144.7 429.0,140.0 434.5,135.8 440.0,132.0 445.5,128.6 451.0,125.5 456.5,122.6 462.0,120.0 467.5,117.6 473.0,115.4 478.5,113.3 484.0,111.4 489.5,109.7 495.0,108.0 500.5,106.5 506.0,105.0 511.5,103.6 517.0,102.4 522.5,101.1 528.0,100.0 533.5,98.9 539.0,97.9 544.5,96.9 550.0,96.0"/>
<circle cx="374" cy="240" r="4" fill="#1d2b44"/><circle cx="418" cy="150" r="4" fill="#1d2b44"/><circle cx="506" cy="105" r="4" fill="#1d2b44"/>
<text x="382" y="244" font-size="11" fill="#1d2b44">surface: −1.0</text>
<text x="424" y="166" font-size="11" fill="#1d2b44">2R: −0.50</text>
<text x="490" y="124" font-size="11" fill="#1d2b44">4R: −0.25</text>
<text x="330" y="312" font-size="12" fill="#1d2b44">(b) planet and mass m: U_g = −GMm/r</text>
</svg>
<figcaption>Figure 1. (a) A spring's potential energy is a parabola with its minimum (zero) at the relaxed length; stretch and compression give the same value. (b) Gravitational potential energy is negative, rises as the separation r grows, and approaches zero far away. Doubling r from R to 2R halves the size of U_g.</figcaption>
</figure>

Three features to be able to sketch without notes:

- **Spring:** a symmetric U-shape (parabola) with its lowest point at Δx = 0.
- **General gravity:** a curve below the r-axis, steep close in, flattening towards zero far away. It never crosses zero.
- **Near-surface gravity:** U_g against height y is a **straight line** with slope mg. That is what the curve in Figure 1(b) looks like over a very short stretch near r = R.

## Systems with more than two objects

Potential energy is shared between **pairs** of interacting objects. For three or more objects, add up the potential energy of every pair. Three objects A, B and C have three pairs: AB, BC and AC.

**Example.** Three identical small moons, each of mass m, sit at the corners of an equilateral triangle of side d. Each pair has U = −Gm²/d. There are three pairs, so

**U_total = −3Gm²/d**

If the triangle grows to side 2d, every pair term halves, so U_total halves too: it becomes −3Gm²/(2d). That is an **increase**, because the value is less negative.

The same idea covers mixed systems. A block hanging on a vertical spring near Earth, with the system block + spring + Earth, has two potential energy terms: U_s for the block–spring interaction and U_g for the block–Earth interaction. (We treat the spring as massless, so it has no gravitational term of its own.)

## Worked example 1: spring energy and factors of change

**Question.** A toy launcher uses a spring with k = 250 N/m. (a) How much elastic potential energy is stored when it is compressed by 4.0 cm? (b) Predict the energy at 12 cm compression without substituting again. (c) What compression stores 0.80 J?

1. Convert: Δx = 4.0 cm = 0.040 m.
2. **(a)** U_s = ½kΔx² = ½ × 250 N/m × (0.040 m)² = **0.20 J**.
3. **(b)** 12 cm is 3 times 4.0 cm. U_s ∝ Δx², so the energy is 3² = 9 times bigger: 9 × 0.20 J = **1.8 J**.
4. **(c)** Rearrange: Δx = √(2U_s / k) = √(2 × 0.80 J ÷ 250 N/m) = **0.080 m** (8.0 cm).

**Check.** 0.80 J is 4 times 0.20 J, so the compression should be √4 = 2 times bigger: 2 × 4.0 cm = 8.0 cm. It is. These three points are marked on Figure 1(a).

## Worked example 2: the same shelf, two choices of zero

**Question.** A 2.5 kg bag of rice is lifted from the floor onto a shelf 1.60 m above the floor. A table top is 0.75 m above the floor. The system is bag + Earth, and **+y is upward**. Find the gravitational potential energy with the bag on the floor, on the table and on the shelf, (a) with U_g = 0 at the floor and (b) with U_g = 0 at the table top. (c) Find ΔU_g from floor to shelf in each case.

Near the surface, U_g = mgy, where y is the height above the chosen zero. Here mg = 2.5 kg × 9.8 N/kg = 24.5 N.

| Position | (a) zero at floor | (b) zero at table |
|---|---|---|
| floor (y = 0 or −0.75 m) | 0 J | 24.5 × (−0.75) = **−18 J** |
| table (y = 0.75 m or 0) | 24.5 × 0.75 = **18 J** | 0 J |
| shelf (y = 1.60 m or 0.85 m) | 24.5 × 1.60 = **39 J** | 24.5 × 0.85 = **21 J** |

**(c)** Floor to shelf: (a) 39.2 J − 0 = **39 J**; (b) 20.8 J − (−18.4 J) = **39 J**.

**Interpretation.** The values in the two columns differ, and some are negative. The **change** is the same, 39 J, because mgΔy = 24.5 N × 1.60 m = 39 J in both. The choice of zero is bookkeeping, not physics.

## Worked example 3: when mgΔy stops working

**Question.** Use Earth's mass 5.97 × 10²⁴ kg and mean radius 6.37 × 10⁶ m. A 500 kg satellite is moved from Earth's surface to a distance of 2R from Earth's centre (one Earth radius above the surface). (a) Find U_g at the surface and at 2R. (b) Find ΔU_g. (c) Compare with mgΔy using g = 9.8 N/kg and Δy = R.

1. **(a)** At the surface, r = R: U_g = −GMm / R = −(6.67 × 10⁻¹¹)(5.97 × 10²⁴)(500) ÷ (6.37 × 10⁶) = **−3.1 × 10¹⁰ J**.
2. At r = 2R the separation doubles, so U_g halves: **−1.6 × 10¹⁰ J**.
3. **(b)** ΔU_g = (−1.56 × 10¹⁰ J) − (−3.13 × 10¹⁰ J) = **+1.6 × 10¹⁰ J**. Positive: the system gained potential energy as the satellite moved away.
4. **(c)** mgΔy = 500 kg × 9.8 N/kg × 6.37 × 10⁶ m = **3.1 × 10¹⁰ J**, about **twice** the true change.

**Why.** mgΔy assumes the field stays at 9.8 N/kg all the way up. In fact the field weakens as 1/r², so less energy is needed. For a 1.0 km lift the two methods agree to within about 0.02%, which is why mgΔy is fine for anything happening near the ground. Use U_g = −Gm₁m₂/r whenever the distance moved is a sizeable fraction of the planet's radius.

## Common misconceptions

- **"The ball has potential energy."** A single object has no potential energy. The **ball–Earth system** does. Name the system.
- **"Potential energy is always positive."** It can be negative. U_g = −Gm₁m₂/r is always negative, and near-surface values are negative below your chosen zero (Worked example 2).
- **"Changing the zero changes the answer."** It changes the values of U but never ΔU.
- **"A compressed spring has negative potential energy."** U_s = ½kΔx² uses the square, so compression and stretch both give positive values.
- **"Doubling the stretch doubles the energy."** It quadruples it (Worked example 1).
- **"In U_g = −Gm₁m₂/r, r is the height above the surface."** r is the centre-to-centre distance.
- **"mgΔy works at any height."** Only while Δy is much smaller than the planet's radius (Worked example 3).
- **"Friction stores potential energy."** Friction is not conservative. The energy it removes does not come back; Topic 3.4 tracks it as thermal energy.

## Where this leads

Topic 3.4, [Conservation of Energy](/advanced-course-resources/physics-1/3-4-conservation-energy-study-guide/), combines potential energy with kinetic energy to predict speeds and heights without forces or time. Try the [practice questions](/advanced-course-resources/physics-1/3-3-potential-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/3-3-potential-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/3-3-potential-energy-checklist/) to consolidate. You can also look back at [Topic 3.2, Work](/advanced-course-resources/physics-1/3-2-work-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
