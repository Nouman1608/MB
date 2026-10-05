---
resourceId: "mb-ap-physcem-13.3-study-guide"
title: "Induced Currents and Magnetic Forces: Study Guide (Physics C: E&M 13.3)"
description: "Calculus-based guide to the magnetic force on an induced current: which segments feel a force, magnetic braking, Newton's second law for moving loops and rods, and energy."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.3"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic force on a current-carrying wire, F = I L × B, and the right-hand rule (Unit 12)"
  - "Faraday's law and Lenz's law, including motional emf ℰ = BLv (Topic 13.2)"
  - "Solving dv/dt = −v/τ by separating variables"
prerequisiteResources: ["mb-ap-physcem-13.2-study-guide"]
learningObjectives:
  - "Explain why an external magnetic field pushes on the current it induces in a conductor"
  - "Identify which segments of a loop feel a magnetic force, and find the direction of the net force or torque"
  - "Calculate the induced current and the magnetic force from B, length, speed and resistance"
  - "Apply Newton's second law to a rod or loop to derive and solve its equation of motion"
  - "Predict factors of change in force, power and terminal speed, and link mechanical work to energy dissipated in the resistance"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Keep unrounded values until the final step; give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.3-revision-notes", "mb-ap-physcem-13.3-practice", "mb-ap-physcem-13.3-checklist"]
next: "mb-ap-physcem-13.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "An induced current sits in the same external field that caused it, so that field exerts a force F = I L × B on it."
  - "Only segments inside the field feel a force; forces on opposite segments that are both inside cancel."
  - "By Lenz's law the magnetic force always opposes the relative motion: this is magnetic braking."
  - "For a rod of length L moving at speed v: I = BLv/R and F = B²L²v/R, so the drag force grows with speed."
  - "Newton's second law, m dv/dt = −B²L²v/R, gives exponential decay with time constant τ = mR/(B²L²); with a steady driving force there is a terminal speed."
faqs:
  - question: "Does a loop moving through a uniform field feel a magnetic force?"
    answer: "Only while the flux through it is changing. If the whole loop is inside a uniform field and moving without rotating, the flux is constant, no current is induced and there is no magnetic force on it."
  - question: "Where does the work done against the magnetic force go?"
    answer: "Into the resistance of the circuit, as thermal energy. For a rod pulled at constant speed, the power you supply, Fv, equals the power dissipated, I²R."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.3. It joins two ideas you already have: the magnetic force on a current (Unit 12) and induced emf (Topic 13.2). You will set up and solve a simple differential equation for the motion.

Data used throughout: **g = 9.8 m/s²**. Unless a question says otherwise, rails and connecting wires have negligible resistance, and there is no friction.

## The field pushes on the current it induces

In Topic 13.2 you saw that a changing magnetic flux through a loop induces an emf, and the emf drives a current round the loop if the loop is a conductor. That current flows through wire that is still sitting in the **external** magnetic field. A current in a magnetic field feels a force. So the external field now exerts a force on the loop.

At the level of single charges: the charge carriers in the wire move along the wire (the induced current), and the external field pushes sideways on them, F = qv × B. Added up over a straight segment of length L carrying current I, this gives the familiar result:

**F = I L × B**, magnitude F = ILB sin θ

where L points along the segment in the direction of the current. For a segment perpendicular to the field, F = ILB.

Three facts about these forces matter for every problem in this topic.

1. **Only segments inside the field feel a force.** A part of the loop that lies outside the field region carries the same current but has no field to push on it.
2. **Forces on opposite sides cancel when both sides are inside the field.** In a uniform field, two parallel segments carrying opposite currents feel equal and opposite forces.
3. **The force can make the loop speed up, slow down or turn.** Net force gives translational acceleration; forces that do not line up give a torque and rotational acceleration.

## Direction: Lenz's law gives magnetic braking

Lenz's law says the induced current opposes the **change** in flux. The force on that current opposes the **motion** that causes the change. Here is why, using Figure 1.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="ic-loop-title ic-loop-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ic-loop-title">A square loop moving into a magnetic field region</title>
<desc id="ic-loop-desc">A field region on the right, bounded by a dashed vertical line, is filled with crosses showing a field into the page. A square loop moves to the right with velocity v; its right edge and short parts of its top and bottom edges are inside the field. Arrows on the loop show a counterclockwise current: up the right edge, left along the top, down the left edge, right along the bottom. A force arrow on the right edge points left, opposite to v. A short force arrow on the part of the top edge inside the field points down, and an equal arrow on the part of the bottom edge inside the field points up; these two cancel.</desc>
<defs><marker id="ic-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="300" y="30" width="240" height="270" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="1.2" opacity="0.55">
<path d="M326 46 l8 8 m0 -8 l-8 8"/><path d="M406 46 l8 8 m0 -8 l-8 8"/><path d="M486 46 l8 8 m0 -8 l-8 8"/>
<path d="M406 126 l8 8 m0 -8 l-8 8"/><path d="M486 126 l8 8 m0 -8 l-8 8"/>
<path d="M406 186 l8 8 m0 -8 l-8 8"/><path d="M486 186 l8 8 m0 -8 l-8 8"/>
<path d="M326 266 l8 8 m0 -8 l-8 8"/><path d="M406 266 l8 8 m0 -8 l-8 8"/><path d="M486 266 l8 8 m0 -8 l-8 8"/>
<path d="M436 226 l8 8 m0 -8 l-8 8"/><path d="M436 86 l8 8 m0 -8 l-8 8"/>
</g>
<text x="420" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">B into page (×), uniform</text>
<rect x="200" y="80" width="160" height="160" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="360" y1="190" x2="360" y2="140" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr)"/>
<line x1="260" y1="80" x2="230" y2="80" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr)"/>
<line x1="200" y1="140" x2="200" y2="190" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr)"/>
<line x1="230" y1="240" x2="260" y2="240" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr)"/>
<text x="372" y="168" font-size="12" fill="#1d2b44">I</text>
<line x1="352" y1="160" x2="300" y2="160" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 4" marker-end="url(#ic-arr)"/>
<text x="276" y="152" font-size="12" fill="#1d2b44" text-anchor="end">F on right edge</text>
<text x="276" y="167" font-size="12" fill="#1d2b44" text-anchor="end">(opposes v)</text>
<line x1="330" y1="84" x2="330" y2="114" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 4" marker-end="url(#ic-arr)"/>
<line x1="330" y1="236" x2="330" y2="206" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 4" marker-end="url(#ic-arr)"/>
<text x="296" y="128" font-size="11" fill="#1d2b44" text-anchor="end">F (down)</text>
<text x="296" y="216" font-size="11" fill="#1d2b44" text-anchor="end">F (up)</text>
<line x1="110" y1="160" x2="180" y2="160" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ic-arr)"/>
<text x="140" y="150" font-size="13" fill="#1d2b44" text-anchor="middle">v</text>
<text x="280" y="318" font-size="12" fill="#1d2b44" text-anchor="middle">Solid arrows: current and velocity. Dashed arrows: magnetic forces.</text>
</svg>
<figcaption>Figure 1. A loop entering a field that points into the page. The flux into the page is increasing, so the induced current is counterclockwise. Only the parts of the loop inside the field feel a force. The forces on the top and bottom parts cancel; the force on the right edge points against the velocity.</figcaption>
</figure>

Work through the figure step by step.

1. As the loop moves right, more of its area is in the field, so the flux **into** the page increases.
2. Lenz's law: the induced current makes its own field **out of** the page inside the loop. By the right-hand rule, that is a **counterclockwise** current.
3. On the right edge the current flows up the page. F = I L × B with L up and B into the page gives a force to the **left**.
4. On the top edge, only the part inside the field feels a force. The current there flows left, so the force points down. On the bottom edge the current flows right and the force points up. These two forces are equal and opposite.
5. The left edge is outside the field, so it feels nothing.

Net result: a force to the left, **opposite to v**. If the loop is leaving the field instead, the flux is decreasing, the current reverses, and the force on the edge still inside the field again points against v. Either way the field resists the motion. This is called **magnetic braking**, and it is energy conservation in action: if the force helped the motion, the loop would speed up and make more current for free.

When the loop is **entirely** inside a uniform field, the flux does not change, no current flows and there is no magnetic force at all.

## How big is the force?

For a straight rod or loop edge of length L moving at speed v perpendicular to a uniform field B, Topic 13.2 gives the motional emf:

ℰ = BLv

If the whole circuit has resistance R, the induced current is

I = ℰ/R = BLv/R

and the magnetic force on the moving edge is

**F = ILB = B²L²v/R**

This one expression explains the functional dependence the course asks you to reason with.

| Change (others fixed) | Current I | Force F | Power dissipated I²R |
|---|---|---|---|
| speed v doubled | × 2 | × 2 | × 4 |
| field B doubled | × 2 | × 4 | × 4 |
| resistance R doubled | × 1/2 | × 1/2 | × 1/2 |
| length L doubled | × 2 | × 4 | × 4 |

Notice the force depends on speed. That is unusual: it behaves like a drag force proportional to v. The force also depends on the **rate** of change of flux, not on the flux itself, because I depends on dΦ_B/dt. A large field with nothing changing produces no force.

**Energy check.** To keep the edge moving at constant speed, an outside agent must push with a force equal to F. The power it supplies is

P = Fv = B²L²v²/R

The power dissipated in the resistance is I²R = (BLv/R)²R = B²L²v²/R. They are equal. The work you do is turned into thermal energy in the circuit.

## Newton's second law for a moving conductor

If nothing else pushes, the magnetic force is the only horizontal force on a rod of mass m sliding on frictionless rails:

m dv/dt = −B²L²v/R

Separate the variables: dv/v = −(B²L²/(mR)) dt. Integrating from v₀ at t = 0 gives

**v(t) = v₀ e^(−t/τ)**, with **τ = mR/(B²L²)**

The time constant τ is the time for the speed to fall to v₀/e, about 37% of v₀. A heavier rod (larger m) or a larger resistance coasts for longer; a stronger field or a longer rod stops sooner.

If a steady force F₀ also acts (a pull, or gravity on a falling loop), then

m dv/dt = F₀ − B²L²v/R

The acceleration falls to zero when the magnetic force balances F₀. That gives a **terminal speed**

v_T = F₀R/(B²L²)

and starting from rest, v(t) = v_T(1 − e^(−t/τ)) with the same τ.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="ic-vt-title ic-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ic-vt-title">Speed against time for a coasting rod on rails</title>
<desc id="ic-vt-desc">Horizontal axis time from 0 to 2.5 seconds; vertical axis speed from 0 to 2.0 metres per second. A solid curve starts at 2.0 metres per second and decays exponentially, approaching zero but never reaching it. A dashed straight tangent line from the starting point meets the time axis at 0.5 seconds, the time constant. An open circle on the curve at 0.5 seconds marks a speed of about 0.74 metres per second, one over e of the starting speed.</desc>
<defs><marker id="ic-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="260" x2="548" y2="260" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr2)"/>
<line x1="80" y1="260" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#ic-arr2)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="170" y1="260" x2="170" y2="266" stroke="#1d2b44"/><text x="170" y="280">0.5</text>
<line x1="260" y1="260" x2="260" y2="266" stroke="#1d2b44"/><text x="260" y="280">1.0</text>
<line x1="350" y1="260" x2="350" y2="266" stroke="#1d2b44"/><text x="350" y="280">1.5</text>
<line x1="440" y1="260" x2="440" y2="266" stroke="#1d2b44"/><text x="440" y="280">2.0</text>
<line x1="530" y1="260" x2="530" y2="266" stroke="#1d2b44"/><text x="530" y="280">2.5</text>
<text x="80" y="280">0</text>
<text x="310" y="306" font-size="13">Time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="210" x2="80" y2="210" stroke="#1d2b44"/><text x="70" y="214">0.5</text>
<line x1="74" y1="160" x2="80" y2="160" stroke="#1d2b44"/><text x="70" y="164">1.0</text>
<line x1="74" y1="110" x2="80" y2="110" stroke="#1d2b44"/><text x="70" y="114">1.5</text>
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">2.0</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">Speed, v (m/s)</text>
<polyline points="80.0,60.0 98.0,96.3 116.0,125.9 134.0,150.2 152.0,170.1 170.0,186.4 188.0,199.8 206.0,210.7 224.0,219.6 242.0,226.9 260.0,232.9 278.0,237.8 296.0,241.9 314.0,245.1 332.0,247.8 350.0,250.0 368.0,251.8 386.0,253.3 404.0,254.5 422.0,255.5 440.0,256.3 458.0,257.0 476.0,257.5 494.0,258.0 512.0,258.4 530.0,258.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="60" x2="170" y2="260" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<circle cx="170" cy="186.4" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="180" y="182">t = τ: v = v₀/e ≈ 0.74 m/s</text>
<text x="128" y="104">initial slope −v₀/τ (dashed)</text>
<text x="330" y="230">v = v₀e^(−t/τ)</text>
</g>
</svg>
<figcaption>Figure 2. Speed of the coasting rod in Worked example 2 (v₀ = 2.0 m/s, τ = 0.50 s). The dashed tangent shows the initial deceleration, 4.0 m/s². The speed never quite reaches zero, but the distance travelled is finite.</figcaption>
</figure>

## Worked example 1: pushing a loop into a field

**Question.** A square loop of side 0.20 m has total resistance 0.50 Ω. It is pushed at a constant 3.0 m/s into a region of uniform field 0.60 T, as in Figure 1. While the loop is entering, find (a) the induced emf and current, (b) the magnetic force on the loop, (c) the power the pushing agent supplies, and (d) the total thermal energy produced while the loop enters.

1. (a) Only the right edge cuts field lines: ℰ = BLv = (0.60 T)(0.20 m)(3.0 m/s) = 0.36 V. I = ℰ/R = 0.36 V ÷ 0.50 Ω = **0.72 A**, counterclockwise as seen in Figure 1.
2. (b) The forces on the parts of the top and bottom edges in the field cancel. On the right edge: F = ILB = (0.72 A)(0.20 m)(0.60 T) = **0.0864 N, to the left**, opposite to the velocity.
3. (c) Constant speed means zero net force, so the agent pushes with 0.0864 N to the right. P = Fv = (0.0864 N)(3.0 m/s) = **0.259 W**. Check: I²R = (0.72 A)²(0.50 Ω) = 0.259 W.
4. (d) The loop takes L/v = 0.20 m ÷ 3.0 m/s = 0.0667 s to enter. Energy = Pt = (0.2592 W)(0.0667 s) = **0.0173 J** (17 mJ). The same value follows from B²L³v/R.

**Interpretation.** Once the loop is fully inside, the current and the force drop to zero, and the agent can stop pushing. When the loop leaves on the far side, the current flows clockwise but the force again points backwards, so the agent must push again.

## Worked example 2: a rod that coasts to a stop

**Question.** A metal rod of mass 0.050 kg lies across two horizontal rails 0.25 m apart. The rails are joined at one end by a 0.40 Ω resistor; everything else has negligible resistance. A uniform vertical field of 0.80 T fills the region. The rod is given a speed of 2.0 m/s along the rails and released. (a) Find the initial current and deceleration. (b) Derive v(t) and find the speed after 1.0 s. (c) Find the total distance the rod travels. (d) Show that energy is conserved.

**(a)** I₀ = BLv₀/R = (0.80)(0.25)(2.0) ÷ 0.40 = **1.0 A**. F₀ = B²L²v₀/R = (0.64)(0.0625)(2.0) ÷ 0.40 = 0.20 N, so a₀ = F₀/m = **4.0 m/s²**, opposite to the motion.

**(b)** Newton's second law along the rails: m dv/dt = −B²L²v/R. So v = v₀e^(−t/τ) with τ = mR/(B²L²) = (0.050)(0.40) ÷ [(0.64)(0.0625)] = **0.50 s**. At t = 1.0 s = 2τ: v = (2.0 m/s)e⁻² = **0.27 m/s**.

**(c)** Distance = ∫₀^∞ v dt = v₀τ = (2.0 m/s)(0.50 s) = **1.0 m**. The rod never quite stops, but it never passes 1.0 m.

**(d)** Thermal energy = ∫₀^∞ I²R dt = ∫₀^∞ (B²L²v₀²/R) e^(−2t/τ) dt = (B²L²v₀²/R)(τ/2). With τ = mR/(B²L²) this is ½mv₀² = ½(0.050)(2.0)² = **0.10 J**, all of the starting kinetic energy.

**Check.** The initial deceleration equals v₀/τ = 2.0 ÷ 0.50 = 4.0 m/s², matching (a). Figure 2 shows this as the slope of the dashed tangent.

## Turning effects: torque on an induced current

The same forces can make a loop rotate. Picture a coil spun in a uniform field, as in a generator. The flux through it changes, a current flows, and the forces on the two sides that cut the field act in opposite directions along lines that do not meet. They form a couple, so there is a **torque**. By Lenz's law the torque opposes the rotation. If you connect a smaller resistance, the current is larger and the coil is harder to turn: the extra mechanical work becomes the extra electrical energy delivered. A conducting plate swinging between magnet poles slows down for the same reason, which is why induced currents are used for smooth braking.

## Common misconceptions

- **"The field pulls the loop in."** The force on an induced current always opposes the relative motion, whether the loop is entering or leaving.
- **"Every edge of the loop feels a force."** Only segments inside the field feel one. A loop moving while half in the field has a net force; a loop wholly inside a uniform field has none.
- **"A strong field means a big force."** No change in flux means no current and no force, however strong the field.
- **Forgetting that the force depends on speed.** F = B²L²v/R changes as the rod slows, so the acceleration is not constant. Do not use constant-acceleration equations.
- **"Bigger resistance gives a bigger braking force."** It is the opposite: less resistance lets more current flow, so the braking is stronger.
- **Losing the energy.** The work against the magnetic force is not lost; it becomes thermal energy in the resistance.

## Where this leads

Next, Topic 13.4 shows that a coil can induce an emf in **itself** when its own current changes. That is inductance, and it leads to LR circuits in Topic 13.5. Go back to [Topic 13.2, Electromagnetic Induction](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/) if Lenz's law directions feel shaky. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-checklist/). The next study guide is [Topic 13.4, Inductance](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/).
