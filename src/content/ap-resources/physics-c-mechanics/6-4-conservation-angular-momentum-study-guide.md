---
resourceId: "mb-ap-physcm-6.4-study-guide"
title: "Conservation of Angular Momentum: Study Guide (Physics C: Mechanics 6.4)"
description: "Calculus-based conservation of angular momentum: total L of a system, why internal torques cancel, choosing the system, shape changes with ω = L/I, and transfer by external torques."
course: "physics-c-mechanics"
unit: 6
topics: ["6.4"]
resourceType: "study-guide"
prerequisites:
  - "Angular momentum L = Iω and L = r × p, and τ_net = dL/dt (Topic 6.3)"
  - "Newton's third law and conservation of linear momentum (Topics 2.3 and 4.3)"
  - "Rotational inertia of point masses and rigid bodies (Topic 5.4); rotational kinetic energy (Topic 6.1)"
prerequisiteResources: ["mb-ap-physcm-6.3-study-guide"]
learningObjectives:
  - "Find the total angular momentum of a system about one axis by adding the angular momenta of its parts"
  - "Show from Newton's third law that internal torques give equal and opposite angular impulses, so only external torques change a system's L"
  - "Choose a system so that its angular momentum is constant, and explain when angular momentum is transferred to or from the surroundings"
  - "Use conservation of angular momentum to find angular velocities after collisions, couplings and changes of shape, including with calculus"
  - "Sketch and interpret graphs of angular momentum and angular velocity for the parts of a system and the whole"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.4-revision-notes", "mb-ap-physcm-6.4-practice", "mb-ap-physcm-6.4-checklist"]
next: "mb-ap-physcm-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "The total angular momentum of a system about an axis is the sum of the angular momenta of its parts about that same axis."
  - "Internal torques come in equal and opposite pairs, so they cannot change the total. Only a net external torque can: ΔL_sys = ∫τ_ext dt."
  - "If the net external torque on your chosen system is zero, its angular momentum is constant. Angular momentum is conserved in every interaction once the system is large enough."
  - "A system that changes shape keeps the same L but changes ω = L/I. Its kinetic energy L²/(2I) changes too."
  - "In a collision with a pivoted body, angular momentum about the pivot is conserved even though linear momentum is not."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.4?"
    answer: "They are separate courses. Physics 1 applies L_i = L_f to collisions and shape changes with algebra. Physics C: Mechanics also proves that internal torques cancel using vector products, and handles systems whose rotational inertia changes continuously, such as a bead sliding along a rod or sand landing on a turntable."
  - question: "If angular momentum is always conserved, why does a spinning wheel slow down?"
    answer: "The wheel alone is not an isolated system. Friction at the axle is an external torque on the wheel, which passes angular momentum to the axle mount and the Earth. The total for wheel plus Earth stays constant."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.4 called Conservation of Angular Momentum. This guide is the **calculus-based** one. It proves that internal torques cancel using vector products, and it treats systems whose rotational inertia changes continuously. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/); do not mix the two when you revise.

## Total angular momentum of a system

A **system** is whatever collection of objects you choose to study. Its total angular momentum about an axis is the sum of the angular momenta of all its parts **about that same axis**:

**L_sys = L₁ + L₂ + L₃ + …**

Use L = Iω for rigid parts turning about the axis, and L = r × p (size mvd) for point objects. Signs matter. With counterclockwise positive, a disk turning clockwise contributes a negative L. Two parts can have angular momenta that cancel, giving a system with L_sys = 0 even though both parts are turning.

## Why internal torques cancel

From Topic 6.3, the rate of change of each part's angular momentum equals the net torque on it. Add these for every part of the system:

dL_sys/dt = (sum of all torques on all parts) = τ_external + τ_internal

Now look at one internal pair. Particle 1 (position r₁) and particle 2 (position r₂) push or pull on each other. By Newton's third law, F₁₂ = −F₂₁, and for forces such as contact pushes, tension and gravity, the pair acts along the line joining the particles. Their torques about O add to

r₁ × F₁₂ + r₂ × F₂₁ = (r₁ − r₂) × F₁₂ = 0

because r₁ − r₂ points along the line joining them, parallel to F₁₂. Every internal pair cancels like this, so **τ_internal = 0** and

**dL_sys/dt = τ_ext, net**

Integrating over time:

**ΔL_sys = ∫τ_ext, net dt**

Two results follow:

- **Equal and opposite angular impulses.** During any interaction between two parts, the angular impulse that A gives B is equal in size and opposite in direction to the angular impulse that B gives A. What one part gains, the other loses.
- **Only the outside can change the total.** Any change in a system's angular momentum must come from an interaction with something outside it, and the change equals the external angular impulse.

## Choosing the system

Angular momentum is conserved in **every** interaction: it is only ever moved from one object to another. Whether a particular system's L stays constant depends on where you draw its boundary.

| Situation | System | External torque about the axis? | L of the system |
|---|---|---|---|
| Two disks on one frictionless shaft, coupled by a clutch | both disks | none (clutch torque is internal) | constant |
| Same, but you look at one disk only | disk A | clutch torque from disk B | changes |
| Clay hits a rod pivoted at one end | clay + rod, about the pivot | pivot force passes through the axis: zero torque (gravity's angular impulse is negligible during the brief impact) | constant about the pivot |
| A motor on a fixed stand spins up a fan | fan alone | motor torque | increases |
| Same | fan + motor + stand + Earth | none | constant (the Earth gains the opposite L) |
| A wheel slowing on a rubbing axle | wheel alone | friction torque | decreases: L passes to the mount and Earth |

**Collisions with pivots.** In the clay-and-rod case the pivot pushes on the rod during the impact, so the linear momentum of clay + rod is **not** conserved. But that force acts at the axis, so its torque about the pivot is zero. Use angular momentum about the pivot, not linear momentum.

**When the net external torque is not zero,** angular momentum is transferred between the system and its surroundings at the rate τ_ext. A braking torque passes the system's angular momentum to whatever holds the brake.

## Changing shape: same L, different ω

A system that is not rigid can change its rotational inertia by moving mass towards or away from the axis. If no external torque acts, L stays constant, so

**Iω = constant, and ω = L/I**

Pull mass in, I falls and ω rises. Push mass out, ω falls. The kinetic energy changes as well:

**K = ½Iω² = L²/(2I)**

At constant L, K is inversely proportional to I. Reducing I to one third makes ω three times larger **and** K three times larger. The extra energy comes from work done by internal forces, for example by a person pulling weights inwards. Angular momentum is conserved; kinetic energy generally is not.

## Worked example 1: two disks coupled by a clutch

**Question.** Take counterclockwise as positive. Disk A (I_A = 0.060 kg·m²) turns at +20 rad/s. Disk B (I_B = 0.030 kg·m²) is on the same frictionless shaft, turning at −10 rad/s. A clutch is engaged. While the disks slip, it exerts a constant torque of size 0.40 N·m on each, until they turn together. (a) Find the common final ω. (b) Find the angular impulse on each disk and the time to lock. (c) Find the kinetic energy lost. (d) After locking, a bearing exerts a friction torque of 0.030 N·m on the pair. How long until they stop, and where does their angular momentum go?

**(a) Common final ω.** System: both disks. The clutch torques are internal and the shaft is frictionless, so L_sys is constant.

1. L_A = 0.060 × 20 = +1.2 kg·m²/s. L_B = 0.030 × (−10) = −0.30 kg·m²/s.
2. L_sys = +0.90 kg·m²/s.
3. ω_f = L_sys/(I_A + I_B) = 0.90/0.090 = **+10 rad/s**.

**(b) Angular impulses and time.**

1. ΔL_A = 0.060 × (10 − 20) = **−0.60 N·m·s**. ΔL_B = 0.030 × (10 − (−10)) = **+0.60 N·m·s**. Equal and opposite, as Newton's third law requires.
2. Each torque has size 0.40 N·m, so the time is 0.60/0.40 = **1.5 s**.

**(c) Kinetic energy.** K_i = ½(0.060)(20²) + ½(0.030)(10²) = 12 + 1.5 = 13.5 J. K_f = ½(0.090)(10²) = 4.5 J. **9.0 J** is lost, two thirds of the starting energy, turned into thermal energy in the slipping clutch.

**(d) After locking.** Now the system has an external torque. ΔL = −0.90 kg·m²/s = (−0.030 N·m)Δt, so Δt = **30 s**. The angular momentum is not destroyed: it passes through the bearing into the frame and the Earth.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm-64-lt-title pcm-64-lt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-64-lt-title">Angular momentum of each disk and of the system during clutch coupling</title>
<desc id="pcm-64-lt-desc">Angular momentum in kilogram metres squared per second, from −0.4 to 1.2, against time in seconds from 0 to 2. Disk A, solid line: falls in a straight line from 1.2 at 0 s to 0.6 at 1.5 s, then stays at 0.6. Disk B, dashed line: rises in a straight line from −0.3 at 0 s, crossing zero at 0.75 s, to 0.3 at 1.5 s, then stays at 0.3. The total, a thick dotted line, stays at 0.9 for the whole time. A vertical marker at 1.5 s is labelled disks lock.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 310 H490 M70 190 H490 M70 130 H490 M70 70 H490"/>
<path d="M170 60 V310 M270 60 V310 M470 60 V310"/>
</g>
<path d="M70 250 H500 M70 320 V50" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M370 55 V315" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 3"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,70 370,160 470,160"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 6" points="70,295 370,205 470,205"/>
<path d="M70 115 H470" stroke="#1d2b44" stroke-width="4" stroke-dasharray="2 5"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="314">−0.4</text><text x="62" y="254">0</text><text x="62" y="194">0.4</text><text x="62" y="134">0.8</text><text x="62" y="74">1.2</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="336">0</text><text x="170" y="336">0.5</text><text x="270" y="336">1.0</text><text x="370" y="336">1.5</text><text x="470" y="336">2.0</text>
</g>
<text x="530" y="336" font-size="12" fill="#1d2b44" text-anchor="end">t (s)</text>
<text x="22" y="190" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 190)">L (kg·m²/s)</text>
<g font-size="12" fill="#1d2b44">
<text x="110" y="62">disk A (solid): 1.2 → 0.60</text>
<text x="380" y="108">total (dotted): 0.90</text>
<text x="380" y="154">A: 0.60</text>
<text x="380" y="222">B: 0.30</text>
<text x="180" y="300">disk B (dashed): −0.30 → 0.30</text>
<text x="376" y="48">disks lock</text>
</g>
</svg>
<figcaption>Figure 1. Worked example 1, counterclockwise positive. The clutch moves 0.60 kg·m²/s from disk A (solid) to disk B (dashed) at a steady 0.40 N·m. The two slopes are equal and opposite, so the total (dotted) stays at 0.90 kg·m²/s. Disk B's L passes through zero at 0.75 s, when it momentarily stops before turning counterclockwise.</figcaption>
</figure>

## Worked example 2: a bead sliding along a spinning rod

**Question.** A thin rod spins in a horizontal plane about a vertical axle through its centre. Its rotational inertia about the axle is I_r = 0.040 kg·m². A 0.10 kg bead, treated as a point, can slide along the rod without friction. It starts 0.10 m from the axle, with the system turning at 10 rad/s. The bead then slides outward until it reaches a stop 0.50 m from the axle. The axle is frictionless. (a) Explain why L is conserved. (b) Derive ω as a function of the bead's distance r, and find ω when it reaches the stop. (c) Find dω/dr and describe the ω–r graph. (d) Compare the rotational kinetic energies, and explain where the difference has gone.

**(a) Why L is constant.** System: rod + bead. The forces between bead and rod are internal. The axle force acts at the axis, and gravity and the vertical support forces are parallel to the axis, so neither has a torque about it. Net external torque about the axle = 0.

**(b) ω(r).**

1. I(r) = I_r + mr². At the start, I = 0.040 + 0.10 × 0.10² = 0.041 kg·m², so L = 0.041 × 10 = 0.41 kg·m²/s.
2. **ω(r) = L/(I_r + mr²)**.
3. At the stop: I = 0.040 + 0.10 × 0.50² = 0.065 kg·m², so ω = 0.41/0.065 = **6.3 rad/s**.

**(c) Shape of the graph.**

1. dω/dr = −2Lmr/(I_r + mr²)². It is negative for every r > 0: ω falls continuously as the bead moves out.
2. Near r = 0.10 m the slope is small, because the bead adds little to I there. Further out the mr² term grows, and ω falls faster. The slope is steepest at r = √(I_r/(3m)) ≈ 0.37 m, then eases very slightly as I itself becomes large (Figure 2).

**(d) Energy.**

1. Start: K = ½ × 0.041 × 10² = 2.05 J. At the stop, before the bead hits it: K_rot = L²/(2I) = 0.41²/(2 × 0.065) = 1.29 J.
2. The rotational kinetic energy has fallen by 0.76 J. With no friction, nothing has been lost: the bead is now also moving **outward along the rod**. That radial motion carries the missing 0.76 J, a radial speed of √(2 × 0.76/0.10) ≈ 3.9 m/s.

**Interpretation.** L stayed fixed while ω fell, because I rose. When the bead hits the stop, that radial kinetic energy becomes thermal energy, but L about the axle is still 0.41 kg·m²/s.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm-64-wr-title pcm-64-wr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-64-wr-title">Angular velocity against bead distance for the spinning rod</title>
<desc id="pcm-64-wr-desc">Angular velocity in radians per second, from 0 to 12, against the bead's distance from the axle in metres, from 0 to 0.6. A solid curve starts at 10 rad/s at r = 0.10 m, falls slowly at first and then more steeply, with the steepest part near r = 0.37 m, reaching 6.3 rad/s at r = 0.50 m. Both end points are marked with circles. A note states that L stays at 0.41 kilogram metres squared per second along the whole curve.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 190 H500 M70 110 H500 M70 30 H500"/>
<path d="M140 30 V270 M280 30 V270 M420 30 V270"/>
</g>
<path d="M70 270 H510 M70 270 V20" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="140.0,70.0 157.5,72.7 175.0,75.9 192.5,79.6 210.0,83.6 227.5,88.0 245.0,92.7 262.5,97.6 280.0,102.7 297.5,107.8 315.0,113.1 332.5,118.3 350.0,123.6 367.5,128.8 385.0,133.9 402.5,138.9 420.0,143.8"/>
<circle cx="140" cy="70" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="420" cy="143.8" r="5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="194">4</text><text x="62" y="114">8</text><text x="62" y="34">12</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="140" y="288">0.1</text><text x="210" y="288">0.2</text><text x="280" y="288">0.3</text><text x="350" y="288">0.4</text><text x="420" y="288">0.5</text><text x="490" y="288">0.6</text>
<text x="290" y="310" font-size="13">bead's distance from axle, r (m)</text>
</g>
<text x="22" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 150)">ω (rad/s)</text>
<g font-size="12" fill="#1d2b44">
<text x="150" y="58">start: 0.10 m, 10 rad/s (open circle)</text>
<text x="330" y="170">stop: 0.50 m, 6.3 rad/s (filled circle)</text>
<text x="160" y="220">L = (I_r + mr²)ω = 0.41 kg·m²/s throughout</text>
</g>
</svg>
<figcaption>Figure 2. Worked example 2. As the bead slides out, I = I_r + mr² grows and ω = L/I falls, slowly at first and then faster, because the bead's contribution grows as r². The curve is steepest near r = 0.37 m.</figcaption>
</figure>

## Common misconceptions

- **"Angular momentum is conserved, so ω cannot change."** L = Iω is fixed; ω changes whenever I does.
- **"Kinetic energy is conserved whenever angular momentum is."** Couplings lose kinetic energy; pulling mass in gains it.
- **Mixing axes.** Every L in the sum must be about the same axis.
- **Using linear momentum in a collision with a pivoted body.** The pivot force is external; use L about the pivot.
- **Forgetting the sign of a part turning the other way.** Opposite rotations partly cancel in L_sys.
- **"Internal forces can spin a system up from rest."** They can make parts turn, but always in opposite senses, so the total stays zero.
- **"Friction destroys angular momentum."** It transfers it to the surroundings. Draw a bigger system to see it conserved.

## Where this leads

Topic 6.5, Rolling, combines rotation and translation for wheels and balls that roll without slipping. Topic 6.6, Motion of Orbiting Satellites, uses conservation of angular momentum about the central body: gravity points at the centre, so it exerts no torque there, and a satellite moves faster when it is closer. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-checklist/). When you are ready, move on to [Topic 6.5, Rolling](/advanced-course-resources/physics-c-mechanics/6-5-rolling-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
