---
resourceId: "mb-ap-phys1-6.4-study-guide"
title: "Conservation of Angular Momentum: Study Guide (Physics 1 6.4)"
description: "When the angular momentum of a system stays constant, how the choice of system decides it, and how to solve rotational collisions and shape changes with algebra and graphs."
course: "physics-1"
unit: 6
topics: ["6.4"]
resourceType: "study-guide"
prerequisites:
  - "Angular momentum L = Iω and L = rmv sin θ, and τ_net Δt = ΔL (Topic 6.3)"
  - "Rotational kinetic energy K = ½Iω² (Topic 6.1)"
  - "Choosing a system and conservation of linear momentum (Topic 4.3)"
prerequisiteResources: ["mb-ap-phys1-6.3-study-guide"]
learningObjectives:
  - "Find the total angular momentum of a system by adding the signed angular momenta of its parts about one axis"
  - "Explain why torques between parts of a system cannot change the system's total angular momentum"
  - "Decide, from the net external torque, whether a chosen system's angular momentum stays constant"
  - "Solve rotational collisions and shape changes using conservation of angular momentum, and track what happens to kinetic energy"
  - "Use a graph of ω against 1/I to test whether angular momentum is conserved"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Angular speeds in rad/s. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-6.4-revision-notes", "mb-ap-phys1-6.4-practice", "mb-ap-phys1-6.4-checklist"]
next: "mb-ap-phys1-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A system's total angular momentum about an axis is the sum of the signed angular momenta of its parts about that axis."
  - "If the net external torque on a system is zero, its total angular momentum stays constant: L_initial = L_final."
  - "Parts of a system exert equal and opposite angular impulses on each other (Newton's third law), so internal torques move angular momentum around but cannot change the total."
  - "A system that changes shape can change its angular speed without changing its angular momentum. Its kinetic energy usually does change."
  - "Angular momentum is conserved in every interaction. If a chosen system's L changes, the same amount has been transferred to or from its surroundings."
faqs:
  - question: "Is kinetic energy conserved when angular momentum is conserved?"
    answer: "Not usually. When a ring lands on a turntable, friction turns some kinetic energy into thermal energy. When a spinning system pulls mass inwards, its kinetic energy rises because the pulling force does work. Angular momentum can stay constant in both cases."
  - question: "Why is linear momentum not conserved when clay hits a pivoted rod, but angular momentum is?"
    answer: "The pivot pushes on the rod during the impact. That is an external force, so the system's linear momentum changes. But the force acts at the pivot, so its torque about the pivot is zero, and angular momentum about the pivot is conserved."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It uses algebra and graphs only. It builds directly on [Topic 6.3](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-study-guide/), where you met the rotational impulse–momentum theorem, τ_net Δt = ΔL.

## The idea: no outside twist, no change

Topic 6.3 showed that a net torque acting for a time changes angular momentum. Now apply that idea to a **system**: a set of objects you choose to study together.

Only torques from **outside** the system can change the system's total angular momentum. So:

- If the **net external torque is zero**, the total angular momentum is **constant**: L_initial = L_final.
- If the net external torque is **not zero**, angular momentum is transferred between the system and its surroundings. The change in the system's L equals the angular impulse from outside.

This is the rotational partner of conservation of linear momentum from Topic 4.3. The method is the same: choose the system, check the external torques, then write "before = after".

## Total angular momentum of a system

The total angular momentum of a system about an axis is the **sum of the angular momenta of its parts about that same axis**. Each part gets a sign for its sense of rotation.

Example: take counterclockwise (seen from above) as +. Two disks turn on one axle. Disk 1 has I = 0.40 kg·m² and ω = +5.0 rad/s. Disk 2 has I = 0.20 kg·m² and ω = −8.0 rad/s.

L_total = (0.40)(+5.0) + (0.20)(−8.0) = 2.0 − 1.6 = **+0.40 kg·m²/s**

The parts can be rigid bodies (L = Iω) or point objects (L = rmv sin θ). All must be measured about the **same** axis.

## Why internal torques cannot change the total

Suppose part A of a system pushes or rubs on part B. By Newton's third law, B pushes back on A with an equal and opposite force, along the same line. The two forces have the same lever arm about the axis, so their torques are **equal in size and opposite in sign**. They act for the same time. So:

**angular impulse on B from A = −(angular impulse on A from B)**

Whatever angular momentum B gains, A loses. The total does not change. This is why only **external** torques matter for the system as a whole.

## Choosing the system

Whether angular momentum is "conserved" depends on the system you choose. Angular momentum itself is never created or destroyed in any interaction. It only moves from one object to another.

| Situation | System | Net external torque? | Is the system's L constant? |
|---|---|---|---|
| A ring dropped onto a turntable with a frictionless axle | turntable only | yes: friction from the ring | no; it loses L to the ring |
| Same | turntable + ring | no: ring–turntable friction is internal | **yes** |
| A wheel slowed by a brake pad fixed to a frame | wheel only | yes: friction from the pad | no; L is transferred to the frame and Earth |
| A spinning platform whose masses are pulled inwards by strings through the axis | platform + masses | no: string forces pass through the axis | **yes** |

Choose the system so that the unknown or awkward forces are **internal**, or act **through the axis**. Then their torques drop out.

## Changing shape: same L, different ω

A system that is not rigid can change its rotational inertia by moving mass towards or away from the axis. If the net external torque is zero, L = Iω stays the same, so

**I₁ω₁ = I₂ω₂**

Move mass inwards: I falls, so ω **rises**. Move mass outwards: I rises, so ω **falls**. A diver who tucks into a ball spins faster, and slows the spin again by opening out before entering the water.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-64-plat-title p1-64-plat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-64-plat-title">Top view of a spinning platform before and after its masses are pulled in</title>
<desc id="p1-64-plat-desc">Two top views side by side. Left, labelled before: a platform hub on a vertical axle with a rail across it and two 1.5 kg masses, each 0.80 m from the axis. A curved arrow shows counterclockwise rotation at 2.0 rad/s. Right, labelled after: the same platform with both masses pulled in to 0.20 m from the axis by strings that run through the axle. A curved arrow shows faster counterclockwise rotation at 7.0 rad/s. Underneath, the text states that the rotational inertia falls from 2.52 to 0.72 kilogram metre squared while the angular momentum stays 5.04 kilogram metre squared per second.</desc>
<defs><marker id="p1-64-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<text x="140" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Before</text>
<text x="420" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">After</text>
<path d="M280 40 V250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<g stroke="#1d2b44" stroke-width="3"><path d="M30 140 H250"/><path d="M310 140 H530"/></g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"><circle cx="140" cy="140" r="12"/><circle cx="420" cy="140" r="12"/></g>
<g fill="#1d2b44"><circle cx="140" cy="140" r="3"/><circle cx="420" cy="140" r="3"/></g>
<g fill="#1d2b44"><rect x="36" y="130" width="20" height="20"/><rect x="224" y="130" width="20" height="20"/><rect x="386" y="130" width="12" height="20"/><rect x="442" y="130" width="12" height="20"/></g>
<path d="M140 75 A65 65 0 0 0 82 112" stroke="#1d2b44" stroke-width="2" fill="none" marker-end="url(#p1-64-arr)"/>
<path d="M420 95 A45 45 0 0 0 378 122" stroke="#1d2b44" stroke-width="2" fill="none" marker-end="url(#p1-64-arr)"/>
<path d="M420 82 A58 58 0 0 0 366 118" stroke="#1d2b44" stroke-width="2" fill="none" marker-end="url(#p1-64-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="70" y="176">r = 0.80 m</text>
<text x="150" y="70">ω₁ = 2.0 rad/s</text>
<text x="400" y="176">r = 0.20 m</text>
<text x="440" y="80">ω₂ = 7.0 rad/s</text>
<text x="36" y="200">1.5 kg each</text>
<text x="316" y="200">strings pull masses in</text>
<text x="316" y="216">through the axle</text>
<text x="40" y="250">I₁ = 0.60 + 2(1.5)(0.80)² = 2.52 kg·m²</text>
<text x="316" y="250">I₂ = 0.60 + 2(1.5)(0.20)² = 0.72 kg·m²</text>
<text x="140" y="285" font-weight="600">L = 2.52 × 2.0 = 0.72 × 7.0 = 5.04 kg·m²/s</text>
</g>
</svg>
<figcaption>Figure 1. Top view of a lab platform, counterclockwise positive. Pulling the masses from 0.80 m to 0.20 m cuts the rotational inertia by a factor of 3.5, so the angular speed rises by the same factor. The string forces point at the axis, so they exert no torque about it.</figcaption>
</figure>

### Testing conservation with a graph

If L is constant, then ω = L × (1/I). A graph of **ω against 1/I** should be a straight line **through the origin**, with slope L. Figure 2 shows the platform of Figure 1 with its masses stopped at four different radii.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-64-gr-title p1-64-gr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-64-gr-title">Angular speed against one over rotational inertia for the platform</title>
<desc id="p1-64-gr-desc">Angular speed omega in radians per second from 0 to 8 against 1 over I, in inverse kilogram metre squared, from 0 to 1.5. Four plotted points: 0.40 and 2.0, 0.60 and 3.0, 0.93 and 4.7, 1.39 and 7.0. A straight line passes through the origin and all four points. Its slope is 5.04 kilogram metre squared per second, the constant angular momentum.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 270 V60 M270 270 V60 M370 270 V60 M470 270 V60"/>
<path d="M70 220 H520 M70 170 H520 M70 120 H520 M70 70 H520"/>
</g>
<path d="M70 270 H530 M70 270 V50" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M70 270 L520 81" stroke="#1d2b44" stroke-width="2"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="189" cy="220" r="5"/><circle cx="248.6" cy="195" r="5"/><circle cx="347.8" cy="153.3" r="5"/><circle cx="486.7" cy="95" r="5"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="170" y="288">0.33</text><text x="270" y="288">0.67</text><text x="370" y="288">1.00</text><text x="470" y="288">1.33</text>
<text x="300" y="312" font-size="13">1/I (kg⁻¹·m⁻²)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="224">2</text><text x="62" y="174">4</text><text x="62" y="124">6</text><text x="62" y="74">8</text>
</g>
<text x="22" y="165" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 165)">angular speed, ω (rad/s)</text>
<g font-size="12" fill="#1d2b44">
<text x="197" y="238">r = 0.80 m</text><text x="256" y="213">0.60 m</text><text x="356" y="171">0.40 m</text><text x="440" y="118">0.20 m</text>
<text x="110" y="100">straight line through origin</text>
<text x="110" y="118">slope = L = 5.04 kg·m²/s</text>
</g>
</svg>
<figcaption>Figure 2. ω against 1/I for the platform in Figure 1 with the masses at 0.80, 0.60, 0.40 and 0.20 m. The points lie on a straight line through the origin, so Iω is the same each time. A plot of ω against I would curve and be much harder to judge.</figcaption>
</figure>

## Worked example 1: a ring dropped onto a turntable

**Question.** Take counterclockwise (seen from above) as +. A turntable with I₁ = 0.020 kg·m² spins at +12 rad/s on a frictionless axle. A ring with I₂ = 0.010 kg·m² about the same axis is held just above it, not rotating, and released so that it lands centred. Friction between the two makes them turn together. Find (a) the final angular speed, (b) the angular impulse each exerts on the other and (c) the change in kinetic energy.

1. **System:** turntable + ring. The friction between them is internal. The axle is frictionless, and gravity and the axle's push act along or through the axis, so the net external torque is zero. L is constant.
2. Before: L = I₁ω₁ + I₂(0) = 0.020 × 12 = 0.24 kg·m²/s.
3. After: L = (I₁ + I₂)ω = 0.030ω.
4. (a) 0.030ω = 0.24, so **ω = 8.0 rad/s**.
5. (b) Ring: ΔL = 0.010 × 8.0 − 0 = **+0.080 N·m·s**. Turntable: ΔL = 0.020 × 8.0 − 0.24 = **−0.080 N·m·s**. Equal and opposite, as Newton's third law requires.
6. (c) Before: K = ½ × 0.020 × 12² = 1.44 J. After: K = ½ × 0.030 × 8.0² = 0.96 J. The system **loses 0.48 J**, a third of its kinetic energy, to thermal energy from the sliding friction.

**Check.** The final speed is less than 12 rad/s, as it must be. A common wrong answer is the plain mean of 12 and 0, which is 6.0 rad/s. That ignores the different rotational inertias. This is the rotational version of a perfectly inelastic collision: L is conserved, K is not.

## Worked example 2: clay hits a pivoted arm

**Question.** A thin arm lies on a level, frictionless table and can turn about a fixed vertical pin through one end. Its rotational inertia about the pin is 0.040 kg·m², and it is at rest. A 0.040 kg ball of clay slides across the table at 5.0 m/s, perpendicular to the arm. It hits the arm 0.50 m from the pin and sticks. Find the arm's angular speed just after the impact.

1. **System:** arm + clay. During the impact the pin pushes on the arm, an external force. But it acts at the pin, so its torque about the pin is zero. Take angular momentum **about the pin**.
2. Before: the clay moves perpendicular to the arm, so θ = 90° and L = rmv = 0.50 × 0.040 × 5.0 = 0.10 kg·m²/s. The arm has L = 0.
3. After: the clay is a point object 0.50 m from the pin, so its rotational inertia is mr² = 0.040 × 0.50² = 0.010 kg·m². Total I = 0.040 + 0.010 = 0.050 kg·m².
4. Conservation: 0.050ω = 0.10, so **ω = 2.0 rad/s**.

**Interpretation.** The clay now moves at ωr = 2.0 × 0.50 = 1.0 m/s. Linear momentum is **not** conserved here, because the pin exerts an external force. Kinetic energy falls from 0.50 J to 0.10 J. Only angular momentum about the pin is conserved, because the pin's torque about itself is zero.

## Worked example 3: pulling the masses in

**Question.** Use Figure 1. The platform alone (hub and rail) has I = 0.60 kg·m². Two 1.5 kg masses, treated as points, sit 0.80 m from the axis, and the system turns at 2.0 rad/s. Strings through the axle pull both masses in to 0.20 m. Find the new angular speed and the change in kinetic energy.

1. I₁ = 0.60 + 2 × 1.5 × 0.80² = 0.60 + 1.92 = 2.52 kg·m².
2. I₂ = 0.60 + 2 × 1.5 × 0.20² = 0.60 + 0.12 = 0.72 kg·m².
3. The string forces point at the axis, so the net external torque is zero: I₁ω₁ = I₂ω₂. ω₂ = 2.52 × 2.0 ÷ 0.72 = **7.0 rad/s**.
4. K₁ = ½ × 2.52 × 2.0² = 5.04 J. K₂ = ½ × 0.72 × 7.0² = 17.64 J. Kinetic energy **rises by about 13 J** (12.6 J).

**Where did the energy come from?** Whoever pulls the strings does work. The masses move inwards along the force, so the force does positive work on them. Since K = L² / (2I), keeping L fixed while I falls by a factor of 3.5 multiplies K by 3.5.

## Common misconceptions

- **"Angular momentum is conserved, so ω stays the same."** Only if I stays the same. In a shape change, ω changes in the opposite way to I.
- **"Kinetic energy is conserved too."** Rarely. Sticking collisions lose K (Worked examples 1 and 2); pulling mass in gains K (Worked example 3).
- **"Linear momentum is conserved in every collision."** Not when a pivot or axle exerts an external force. Use angular momentum about the pivot instead.
- **"Forces between parts of the system change its angular momentum."** They transfer it between the parts. Their angular impulses are equal and opposite.
- **"A wheel slowed by a brake breaks conservation."** For the wheel alone, an external torque acts. Include the brake, frame and Earth, and the total is conserved.
- **Averaging angular speeds.** Use I₁ω₁ + I₂ω₂ = (I₁ + I₂)ω, never (ω₁ + ω₂)/2.
- **Forgetting the moving object's rotational inertia after it sticks.** Add mr² to the total.
- **Mixing axes.** Every angular momentum in one equation must be about the same axis.

## Where this leads

Topic 6.5 (Rolling) combines translation and rotation: a rolling object has kinetic energy of both kinds and, if it does not slip, a fixed link between v and ω. Read the [Topic 6.5 study guide](/advanced-course-resources/physics-1/6-5-rolling-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-practice/), then use the [revision notes](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
