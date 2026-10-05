---
resourceId: "mb-ap-physcm-6.1-study-guide"
title: "Rotational Kinetic Energy: Study Guide (Physics C: Mechanics 6.1)"
description: "Calculus-based rotational kinetic energy: K = ½Iω² from integrating ½v² dm, total kinetic energy as translation plus rotation about the centre of mass, and energy with the centre of mass at rest."
course: "physics-c-mechanics"
unit: 6
topics: ["6.1"]
resourceType: "study-guide"
prerequisites:
  - "Translational kinetic energy K = ½mv² and the idea that energy is a scalar (Topic 3.1)"
  - "Angular velocity ω = dθ/dt and the link v = rω for a point on a rigid body (Topics 5.1 and 5.2)"
  - "Rotational inertia I = ∫r² dm for rods and discs, and the parallel axis theorem (Topic 5.4)"
prerequisiteResources: ["mb-ap-physcm-5.6-study-guide"]
learningObjectives:
  - "Show by integrating ½v² dm over a rigid body that its kinetic energy about a fixed axis is ½Iω²"
  - "Calculate rotational kinetic energy for continuous bodies, including rods of non-uniform density"
  - "Split the total kinetic energy of a moving, spinning body into ½Mv_cm² and ½I_cm ω², and explain why the cross term vanishes"
  - "Explain how a rigid body can have kinetic energy while its centre of mass is at rest"
  - "Sketch and interpret graphs of kinetic energy against ω, t and θ, and compare kinetic energies between scenarios"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. Angular velocity must be in rad/s. g = 9.8 m/s², the value on the course equation sheet. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.1-revision-notes", "mb-ap-physcm-6.1-practice", "mb-ap-physcm-6.1-checklist"]
next: "mb-ap-physcm-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A rigid body turning about a fixed axis has kinetic energy K = ½Iω², with ω in rad/s. It is the sum of ½v² dm over every piece, so it is the body's whole kinetic energy."
  - "A body that moves and spins has K = ½Mv_cm² + ½I_cm ω². Use I about the centre of mass in the second term, never I about another axis."
  - "A wheel on a fixed axle has zero momentum but non-zero kinetic energy: momenta of opposite sides cancel, kinetic energies do not."
  - "Rotational kinetic energy is a scalar and never negative. Reversing the direction of spin does not change it."
  - "Mass far from the axis carries most of the energy, because each piece contributes ½r²ω² dm."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.1?"
    answer: "They are separate courses. Physics 1 adds up ½mv² for a few point objects and is given the rotational inertia of extended objects. Physics C: Mechanics integrates over continuous bodies, including rods whose density changes along their length, and expects you to derive the results."
  - question: "Is rotational kinetic energy a different kind of energy from ½mv²?"
    answer: "No. It is the ordinary kinetic energy of all the moving pieces, written in a convenient form. For rotation about a fixed axis, ½Iω² is the total kinetic energy, not an extra amount added to ½mv²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.1 called Rotational Kinetic Energy. This guide is the **calculus-based** one. It builds K = ½Iω² by integrating over a continuous body and proves the translation-plus-rotation split. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/); do not mix the two when you revise.

## Where the energy of a spinning body lives

Picture a grinding wheel spinning on a fixed axle. Its centre of mass does not move. Yet press a tool against it and sparks fly: energy is leaving the wheel. So the wheel had kinetic energy.

The energy is in the pieces. Every small piece of the wheel moves in a circle, so every piece has a speed and an ordinary kinetic energy. Pieces on opposite sides move in opposite directions, so their momenta cancel and the centre of mass stays still. Their kinetic energies do **not** cancel, because kinetic energy is a scalar that is never negative.

## From ½v² dm to ½Iω²

Model a rigid body as many small pieces of mass dm. The body turns about a fixed axis with angular velocity ω. Every piece shares the same ω. A piece a perpendicular distance r from the axis moves in a circle with speed

**v = rω** (ω in rad/s)

Its kinetic energy is dK = ½v² dm = ½r²ω² dm. Add (integrate) over the whole body:

K = ∫½v² dm = ∫½r²ω² dm

ω is the same for every piece, so it comes outside the integral:

K = ½ω² ∫r² dm

The integral is the rotational inertia about the axis from Topic 5.4, I = ∫r² dm. So:

**K = ½Iω²**

Three things follow from this derivation.

1. **It is the whole kinetic energy.** For rotation about a fixed axis, ½Iω² is just the sum of ½v² dm for every piece. It is not extra energy on top of a ½mv² term.
2. **The unit is the joule.** kg·m² × (rad/s)² = kg·m²/s² = J. The radian is dimensionless and drops out. But ω **must** be in rad/s, because v = rω only holds in radians.
3. **Distant mass dominates.** Each piece contributes in proportion to r² dm. Double the distance of a piece from the axis and its share of the energy goes up four times.

The same argument works for a collection of point objects, where the integral becomes a sum: K = ½ω² Σmᵢrᵢ².

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm-61-rod-title pcm-61-rod-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-61-rod-title">A rod whose density increases along its length, spinning about one end</title>
<desc id="pcm-61-rod-desc">A thin rod 0.60 m long lies along the x-axis with a pivot at its left end, x = 0. The rod is drawn thin at the pivot and gradually thicker towards the right end, showing a linear density that increases with x. A small element of length dx at position x = 0.45 m is hatched and labelled dm = λ dx. The rod turns counterclockwise at 4.0 rad/s, shown by a dashed curved arrow near the pivot. An upward arrow at the element is labelled v = xω = 1.8 m/s. A longer upward arrow at the right end is labelled v = Lω = 2.4 m/s. Below the rod, labels give x = 0 at the pivot and x = L = 0.60 m at the far end.</desc>
<defs>
<marker id="pcm-61-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="pcm-61-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1.2"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<polygon points="80,168 440,152 440,188 80,172" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="344" y="155" width="12" height="30" fill="url(#pcm-61-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="80" cy="170" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="80" cy="170" r="2.5" fill="#1d2b44"/>
<path d="M350 152 V80" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#pcm-61-arr)"/>
<path d="M440 150 V54" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm-61-arr)"/>
<path d="M130 210 A60 60 0 0 0 130 130" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#pcm-61-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="142" y="128">ω = 4.0 rad/s</text>
<text x="262" y="74">v = xω = 1.8 m/s</text>
<text x="452" y="62">v = Lω</text>
<text x="452" y="78">= 2.4 m/s</text>
<text x="316" y="210">element dm = λ dx</text>
<text x="316" y="226">(hatched) at x = 0.45 m</text>
<text x="60" y="250">pivot, x = 0</text>
<text x="400" y="250">x = L = 0.60 m</text>
<text x="140" y="285">density λ = Cx grows towards the far end (drawn as thickness)</text>
</g>
</svg>
<figcaption>Figure 1. The rod of Worked example 1. Every element has the same ω, but its speed v = xω grows with distance from the pivot. Because dK = ½(xω)² λ dx, the heavier, faster outer part carries most of the kinetic energy.</figcaption>
</figure>

## Moving and spinning: translation plus rotation

Many bodies move **and** spin at once: a thrown baton, a tumbling satellite, a wheel skidding along a road. For any rigid body, the total kinetic energy splits into two scalar parts:

**K_total = ½Mv_cm² + ½I_cm ω²**

- ½Mv_cm² is the **translational** part: the whole mass M moving with the velocity of the centre of mass.
- ½I_cm ω² is the **rotational** part: spinning about an axis through the centre of mass, using I_cm.

### Why the split works

Write the velocity of each piece as the centre-of-mass velocity plus its velocity relative to the centre of mass: **v = v_cm + v′**. Then

v² = v_cm² + 2v_cm·v′ + v′²

Integrate ½v² dm over the body:

K = ½Mv_cm² + v_cm·∫v′ dm + ½∫v′² dm

- The middle integral is zero. ∫v′ dm is the total momentum measured in the centre-of-mass frame, and by the definition of the centre of mass that is zero.
- In the last integral, each piece circles the centre of mass, so v′ = r′ω, where r′ is its distance from an axis through the centre of mass. That integral is ½ω²∫r′² dm = ½I_cm ω².

So the cross term vanishes, and K = ½Mv_cm² + ½I_cm ω² exactly. There is no "mixed" energy.

### A fixed axis that is not through the centre of mass

A rod swinging about one end turns about a fixed axis, so K = ½I_pivot ω² is already the total. You can also split it: the centre of mass moves at v_cm = dω, where d is its distance from the pivot, and the rod turns about its centre of mass at the same ω. The parallel axis theorem, I_pivot = I_cm + Md², shows that the two methods agree:

½I_pivot ω² = ½(I_cm + Md²)ω² = ½I_cm ω² + ½M(dω)² = ½I_cm ω² + ½Mv_cm²

Use **one** method or the other. Adding ½I_pivot ω² and ½Mv_cm² counts the centre-of-mass motion twice.

## Kinetic energy with the centre of mass at rest

If v_cm = 0, the translational part is zero, but the rotational part need not be. A flywheel on a fixed axle through its centre of mass has total momentum zero and kinetic energy ½I_cm ω². This is how flywheels store energy: the energy sits in the moving rim while the body as a whole goes nowhere.

The reason is the difference between a vector and a scalar. Momentum is a vector, so the momenta of opposite sides cancel. Kinetic energy is a scalar that is never negative, so the contributions of all the pieces add up.

## A scalar, never negative

Because ω is squared, a wheel turning clockwise at 20 rad/s has exactly the same rotational kinetic energy as the same wheel turning counterclockwise at 20 rad/s. Two identical wheels spinning in opposite directions have a total kinetic energy twice that of one wheel, not zero. When you add rotational kinetic energies, you never need a sign convention.

## Graphs and comparisons

K = ½Iω² gives you functional dependences to reason with:

- **K against ω** for a fixed body is a parabola through the origin, opening upward. Doubling ω multiplies K by 4.
- **K against I** at fixed ω is a straight line through the origin. A thin hoop has twice the rotational inertia of a uniform disc of the same mass and radius about their central axes (MR² against ½MR²), so at the same ω it has twice the kinetic energy.
- **Constant angular acceleration from rest:** ω = αt, so K = ½Iα²t². K against t is a parabola starting flat at the origin. In terms of angle, ω² = 2αθ, so K = Iαθ: K against θ is a **straight line**. That straight line is a first hint of Topic 6.2, where a torque does work through an angle.

When a question asks you to compare two scenarios, write K = ½Iω² for each, cancel what is the same, and state the ratio with a reason, not just the equation.

## Worked example 1: a rod with non-uniform density

**Question.** A thin rod of length L = 0.60 m lies along the x-axis from a pivot at x = 0. Its linear mass density is λ(x) = Cx with C = 5.0 kg/m², so it gets heavier towards the far end (Figure 1). It turns about the pivot, in the plane of the page, at ω = 4.0 rad/s. (a) Find the rod's kinetic energy by integrating ½v² dm. (b) Check the answer by splitting it into translation and rotation. (c) What fraction of the kinetic energy is in the outer half of the rod?

**(a) Integrate directly.**

1. The element at x has mass dm = λ dx = Cx dx and speed v = xω.
2. dK = ½(xω)² Cx dx = ½Cω²x³ dx.
3. K = ½Cω² ∫₀ᴸ x³ dx = ½Cω² × L⁴/4 = ½ × 5.0 × 16 × (0.60)⁴/4 = **1.296 J ≈ 1.3 J**.
4. Same thing via I: I = ∫₀ᴸ x² Cx dx = CL⁴/4 = 5.0 × 0.1296/4 = 0.162 kg·m², and ½Iω² = ½ × 0.162 × 16 = 1.296 J. ✓

**(b) Translation plus rotation.**

1. Mass: M = ∫₀ᴸ Cx dx = CL²/2 = 0.90 kg.
2. Centre of mass: x_cm = (∫₀ᴸ x · Cx dx)/M = (CL³/3)/(CL²/2) = 2L/3 = **0.40 m**.
3. I_cm = I_pivot − Mx_cm² = 0.162 − 0.90 × 0.16 = **0.018 kg·m²**.
4. v_cm = x_cm ω = 0.40 × 4.0 = 1.6 m/s, so ½Mv_cm² = ½ × 0.90 × 2.56 = 1.152 J.
5. ½I_cm ω² = ½ × 0.018 × 16 = 0.144 J.
6. Total: 1.152 + 0.144 = **1.296 J**. ✓ The two methods agree, as the parallel axis theorem says they must.

**(c) Outer half.** Integrate from L/2 to L: K_outer = ½Cω²(L⁴ − (L/2)⁴)/4 = (15/16) of the total = 1.215 J, about **94 %**. The outer half holds 3/4 of the mass but nearly all the energy, because those pieces are both heavier and faster.

**Interpretation.** Two common wrong answers show why the method matters. Using ½Mv² with the tip speed of 2.4 m/s gives 2.6 J, twice too big: most of the rod moves slower than the tip. Adding ½Mv_cm² to ½I_pivot ω² gives 2.4 J, which double-counts the centre-of-mass motion.

## Worked example 2: a spinning baton thrown upward

**Question.** A juggler throws a uniform baton of mass M = 0.40 kg and length L = 0.70 m straight up. Its centre of mass leaves the hand at 5.0 m/s and it spins at 15 rad/s about its centre, in a vertical plane. Treat it as a thin uniform rod, so I_cm = ML²/12 (Topic 5.4). Ignore air resistance; take +y upward. (a) Find its translational, rotational and total kinetic energy at release. (b) Find its kinetic energy at the top of its flight. (c) Sketch how each kinetic energy changes with time.

**(a) At release.**

1. Translational: ½Mv_cm² = ½ × 0.40 × 5.0² = **5.0 J**.
2. I_cm = 0.40 × 0.70²/12 = 0.01633 kg·m². Rotational: ½I_cm ω² = ½ × 0.01633 × 15² = **1.84 J**.
3. Total: 5.0 + 1.84 = **6.84 J ≈ 6.8 J**. About 27 % of it is rotational.

**(b) At the top.**

1. Gravity acts at the centre of mass, so it exerts no torque about the centre of mass. The spin stays at 15 rad/s throughout the flight, and ½I_cm ω² stays at 1.84 J.
2. The centre of mass slows under gravity: v_cm = 5.0 − 9.8t, which is zero at t = 5.0/9.8 = 0.51 s.
3. At the top, the centre of mass is momentarily at rest, but the baton still has **K = 1.84 J ≈ 1.8 J**, all rotational. This is the "kinetic energy with the centre of mass at rest" idea in action.

**(c) The graph.** K_trans = ½M(5.0 − 9.8t)² is a parabola that falls to zero at 0.51 s and rises back to 5.0 J when the baton returns to the release height at 1.02 s. K_rot is a horizontal line at 1.84 J. The total is the parabola shifted up by 1.84 J (Figure 2). The loss of total kinetic energy on the way up goes into gravitational potential energy of the baton–Earth system.

**Why not use the tip speed?** If the baton is horizontal at release, one tip moves at 5.0 + 0.35 × 15 = 10.25 m/s and the other at 5.0 − 5.25 = −0.25 m/s (slightly downward). No single point's speed gives the kinetic energy; the split formula does it correctly.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm-61-kt-title pcm-61-kt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-61-kt-title">Kinetic energy against time for a spinning baton thrown upward</title>
<desc id="pcm-61-kt-desc">Kinetic energy in joules from 0 to 8 against time in seconds from 0 to just over 1. Three curves. The translational kinetic energy, a solid parabola, starts at 5.0 J, falls to zero at t = 0.51 s and rises back to 5.0 J at t = 1.02 s. The rotational kinetic energy, a dashed horizontal line, stays at 1.84 J. The total kinetic energy, a dotted parabola, starts at 6.84 J, falls to a minimum of 1.84 J at t = 0.51 s and rises back to 6.84 J at 1.02 s. A label marks the top of the flight at 0.51 s where the centre of mass is at rest but the total kinetic energy is 1.84 J.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M150 290 V50 M230 290 V50 M310 290 V50 M390 290 V50 M470 290 V50"/>
<path d="M70 230 H500 M70 170 H500 M70 110 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="150" y="308">0.2</text><text x="230" y="308">0.4</text><text x="310" y="308">0.6</text><text x="390" y="308">0.8</text><text x="470" y="308">1.0</text>
<text x="290" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">2</text><text x="62" y="174">4</text><text x="62" y="114">6</text><text x="62" y="54">8</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">kinetic energy (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,140.0 83.6,159.3 97.2,177.3 110.8,194.0 124.4,209.3 138.0,223.3 151.6,236.0 165.2,247.3 178.8,257.3 192.4,266.0 206.1,273.3 219.7,279.3 233.3,284.0 246.9,287.3 260.5,289.3 274.1,290.0 287.7,289.3 301.3,287.3 314.9,284.0 328.5,279.3 342.1,273.3 355.7,266.0 369.3,257.3 382.9,247.3 396.5,236.0 410.1,223.3 423.7,209.3 437.3,194.0 451.0,177.3 464.6,159.3 478.2,140.0"/>
<path d="M70 234.9 H478.2" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 6"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.2" stroke-dasharray="2 4" points="70.0,84.9 83.6,104.2 97.2,122.2 110.8,138.9 124.4,154.2 138.0,168.2 151.6,180.9 165.2,192.2 178.8,202.2 192.4,210.9 206.1,218.2 219.7,224.2 233.3,228.9 246.9,232.2 260.5,234.2 274.1,234.9 287.7,234.2 301.3,232.2 314.9,228.9 328.5,224.2 342.1,218.2 355.7,210.9 369.3,202.2 382.9,192.2 396.5,180.9 410.1,168.2 423.7,154.2 437.3,138.9 451.0,122.2 464.6,104.2 478.2,84.9"/>
<circle cx="274.1" cy="234.9" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="80" y="76">total (dotted): 6.84 J</text>
<text x="84" y="134">translational (solid): 5.0 J</text>
<text x="380" y="250">rotational (dashed): 1.84 J</text>
<text x="200" y="206">top of flight, t = 0.51 s:</text>
<text x="200" y="222">v_cm = 0, K = 1.84 J</text>
</g>
</svg>
<figcaption>Figure 2. Kinetic energy of the baton in Worked example 2, +y upward. The spin, and so the rotational kinetic energy, is constant during the flight. Only the translational part changes, so at the top of the flight the baton still has 1.84 J of kinetic energy.</figcaption>
</figure>

## Common misconceptions

- **"The centre of mass is at rest, so K = 0."** A wheel on a fixed axle has rotational kinetic energy. Only its momentum is zero.
- **Double counting.** For a body turning about a fixed pivot, use ½I_pivot ω² **or** ½Mv_cm² + ½I_cm ω², never ½I_pivot ω² + ½Mv_cm².
- **Using ½Mv² with the rim or tip speed.** Different pieces move at different speeds. Integrate, or use I.
- **Using rev/min or degrees per second.** v = rω needs rad/s. Convert first: rad/s = rev/min × 2π/60.
- **Giving K a sign.** K is never negative; the direction of spin does not matter. Opposite spins add, they do not cancel.
- **Treating ½Iω² as extra energy on top of ½mv² for a fixed axis.** It is the sum of ½v² dm. It is the total.
- **Using the wrong I in the split formula.** The rotational term must use I about the centre of mass.
- **"More mass means more kinetic energy."** At the same ω, where the mass sits matters as much as how much there is.

## Where this leads

Topic 6.2, Torque and Work, explains how a torque acting through an angle changes ½Iω²: the straight-line K–θ graph above is the clue. Topic 6.5, Rolling, adds a link between v_cm and ω, so the split formula gives the energy of a rolling wheel. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-checklist/). When you are ready, move on to [Topic 6.2, Torque and Work](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
