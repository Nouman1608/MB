---
resourceId: "mb-ap-physcm-5.6-study-guide"
title: "Newton’s Second Law in Rotational Form: Study Guide (Physics C: Mechanics 5.6)"
description: "Calculus-based rotational dynamics: α = Στ/I derived from Newton’s second law, torques that change with time handled by integration, separate linear and rotational analyses, and a lab method for I."
course: "physics-c-mechanics"
unit: 5
topics: ["5.6"]
resourceType: "study-guide"
prerequisites:
  - "Rotational equilibrium and Newton’s first law in rotational form (Topic 5.5)"
  - "Rotational inertia, including the parallel axis theorem (Topic 5.4)"
  - "Newton’s second law for a system, a_cm = ΣF/m (Topic 2.5); integrating with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-5.5-study-guide"]
learningObjectives:
  - "Explain that a rigid system’s angular velocity changes only when the net torque on it is not zero"
  - "Derive Στ = Iα for a rigid system from Newton’s second law applied to its parts"
  - "Find ω(t) and θ(t) from a net torque that changes with time by dividing by I and integrating"
  - "Apply a_cm = ΣF/M and α = Στ/I as two separate equations to the same rigid system, including finding an axle force"
  - "Predict factors of change in α when torque or rotational inertia changes, and design a measurement of I that corrects for friction"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. We use g = 9.8 m/s², the value on the course equation table. Each example states its positive sense of rotation"
related: ["mb-ap-physcm-5.6-revision-notes", "mb-ap-physcm-5.6-practice", "mb-ap-physcm-5.6-checklist"]
next: "mb-ap-physcm-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A rigid system’s angular velocity changes only if the net torque on it is not zero."
  - "Newton’s second law in rotational form: α = Στ/I. α has the same sense as the net torque and is inversely proportional to I."
  - "Στ = Iα follows from F = ma applied to every piece of the system; internal torques cancel in pairs."
  - "If the net torque depends on time, α(t) = Στ(t)/I; integrate with initial conditions to get ω(t) and θ(t)."
  - "Linear and rotational analyses are separate: a_cm = ΣF/M and α = Στ/I can be zero or nonzero independently."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 5.6?"
    answer: "They are separate courses with the same topic title. Physics 1 uses α = Στ/I with constant torques and algebra. Physics C: Mechanics derives the equation, handles torques that change with time by integration, and uses the parallel axis theorem and symbolic derivations."
  - question: "Is Στ = Iα true about any point?"
    answer: "For this course, use it about a fixed axle or about an axis through the center of mass. The derivation below covers a fixed axle; the center-of-mass case is the other one this course uses."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.6 with this title. This guide is the **calculus-based** one: it derives Στ = Iα, handles torques that change with time by integration, and uses the parallel axis theorem from Topic 5.4. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-study-guide/); do not mix the two when you revise.

## When does angular velocity change?

Topic 5.5 gave the rule for a constant angular velocity: the net torque must be zero. Now take the other case.

**The angular velocity of a rigid system changes only when the net external torque on it is not zero.**

"Changes" means ω gets bigger, gets smaller, or reverses its sense of turning. This topic tells you **how fast** it changes.

## Newton’s second law in rotational form

**α = Στ / I**  (equivalently, Στ = Iα)

Three facts are packed into this equation:

1. **Proportional to net torque.** Double the net torque on the same system and α doubles.
2. **Same sense.** α points the same way as the net torque. If the net torque is counterclockwise, α is counterclockwise, even if the object is turning clockwise at that moment (then it is slowing down).
3. **Inversely proportional to rotational inertia.** The same torque gives a smaller α to a system with more rotational inertia about that axis.

Units: N·m ÷ kg·m² = (kg·m²/s²) ÷ (kg·m²) = s⁻² = rad/s². The radian is a ratio, so it can appear or disappear in units.

**Using functional dependence.** Suppose a string pulls with force F at the rim of a solid disk of mass M and radius R (I = ½MR²). Now use a disk with the **same mass** but **twice the radius**, pulled with the same force at its rim. The torque doubles (lever arm 2R) but I becomes ½M(2R)² = 4 × ½MR². So α changes by 2 ÷ 4 = **½**. The larger disk turns more sluggishly even though the torque is bigger.

## Where Στ = Iα comes from

Think of a rigid system turning about a fixed axis as many small pieces. Piece i has mass mᵢ at distance rᵢ from the axis. Because the system is rigid, every piece has the same angular acceleration α, and piece i has tangential acceleration a_t,i = rᵢα (Topic 5.2).

1. Newton’s second law for piece i, along its tangent: F_t,i = mᵢ a_t,i = mᵢ rᵢ α. Here F_t,i is the total tangential force on the piece, from outside **and** from other pieces.
2. Multiply by rᵢ to turn force into torque: τᵢ = rᵢ F_t,i = mᵢ rᵢ² α. (Radial force components have no lever arm, so they give no torque.)
3. Add over all pieces: Στᵢ = (Σ mᵢ rᵢ²) α = Iα.
4. **Internal torques cancel.** Two pieces push on each other with equal and opposite forces along the line joining them (Newton’s third law). Those two forces have the same lever arm and opposite senses, so their torques cancel. Only **external** torques survive.

So **Στ_ext = Iα**, with I = Σ mᵢ rᵢ² = ∫ r² dm. This is the rotational partner of ΣF = ma, built from it.

## Linear and rotational analyses are separate

A rigid system obeys two equations at the same time:

**a_cm = ΣF / M**  and  **α = Στ / I**

They answer different questions and must be written separately. One can be zero while the other is not (Topic 5.5). An axle can push hard on a wheel without exerting any torque about the axle, because its force acts at the axis. When a problem asks for the force from an axle or pivot, you usually need **both** equations: Στ = Iα gives α, the geometry gives a_cm, and ΣF = Ma_cm then gives the pivot force.

## Worked example 1: a falling signal arm

**Question.** Take **+y upward** and **clockwise as positive** for rotation (the sense the arm will turn). A uniform bar of mass M = 3.5 kg and length L = 1.6 m can turn freely about a horizontal axle through a point **L/4 from its left end**. It is held horizontal and released from rest. Find, just after release, (a) the angular acceleration, (b) the acceleration of its center of mass and (c) the force from the axle. Derive symbolic answers first.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm56-arm-title pcm56-arm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm56-arm-title">Extended force diagram of the signal arm just after release</title>
<desc id="pcm56-arm-desc">A horizontal bar 1.6 metres long. An axle, drawn as a circle, passes through the bar 0.40 metres from its left end. The center of mass is at the middle of the bar, 0.40 metres to the right of the axle. A downward arrow labelled Mg, 34.3 newtons, acts at the center of mass. A shorter upward arrow labelled N, 19.6 newtons, acts at the axle. A curved arrow near the right end shows the clockwise angular acceleration alpha. A dashed downward arrow beside the center of mass shows its acceleration, 4.2 metres per second squared.</desc>
<defs><marker id="pcm56-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<rect x="80" y="150" width="400" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180" cy="158" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="280" cy="158" r="4" fill="#1d2b44"/>
<line x1="280" y1="166" x2="280" y2="262" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm56-arr)"/>
<text x="246" y="282" font-size="13" fill="#1d2b44">Mg = 34.3 N</text>
<line x1="180" y1="224" x2="180" y2="168" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm56-arr)"/>
<text x="120" y="244" font-size="13" fill="#1d2b44">N = 19.6 N</text>
<line x1="304" y1="176" x2="304" y2="214" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#pcm56-arr)"/>
<text x="312" y="204" font-size="12" fill="#1d2b44">a_cm = 4.2 m/s² (dashed)</text>
<path d="M430 120 A 60 60 0 0 1 488 176" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm56-arr)"/>
<text x="440" y="108" font-size="13" fill="#1d2b44">α (clockwise)</text>
<path d="M80 100 H480 M80 94 V106 M480 94 V106" stroke="#1d2b44" stroke-width="1.2"/>
<text x="280" y="92" font-size="12" fill="#1d2b44" text-anchor="middle">L = 1.6 m</text>
<path d="M180 300 H280 M180 294 V306 M280 294 V306" stroke="#1d2b44" stroke-width="1.2"/>
<text x="230" y="316" font-size="12" fill="#1d2b44" text-anchor="middle">d = L/4 = 0.40 m</text>
<text x="180" y="140" font-size="12" fill="#1d2b44" text-anchor="middle">axle</text>
</svg>
<figcaption>Figure 1. Extended force diagram of the bar just after release, forces roughly to scale. The axle force N has no torque about the axle; only the weight turns the bar. Because the center of mass accelerates downward, N is less than Mg.</figcaption>
</figure>

**(a) Rotation.**

1. Rotational inertia about the axle (parallel axis theorem, Topic 5.4), with d = L/4: I = ML²/12 + M(L/4)² = **7ML²/48** = 7(3.5)(1.6)²/48 = 1.31 kg·m².
2. Torques about the axle: the axle force has zero lever arm; the weight acts L/4 to the right and turns the bar clockwise: Στ = MgL/4 = 3.5 × 9.8 × 0.40 = 13.7 N·m.
3. α = Στ/I = (MgL/4) ÷ (7ML²/48) = **12g/(7L)** = 12(9.8) ÷ (7 × 1.6) = **10.5 rad/s²**, clockwise.

**(b) Center of mass.** At release ω = 0, so the center of mass has only tangential acceleration: a_cm = dα = (L/4)(12g/7L) = **3g/7** = **4.2 m/s²**, downward.

**(c) Linear analysis, separately.** ΣF_y = Ma_y: N − Mg = M(−3g/7), so N = **4Mg/7** = 4(34.3)/7 = **19.6 N**, upward.

**Checks.** If the axle were at the center (d = 0), α = 0 and N = Mg: rotational equilibrium. If it were at the end (d = L/2), the same method gives α = 3g/(2L) and N = Mg/4. Our case lies between. Using I = ML²/3 (the end-axis value) would give 4.6 rad/s², which is wrong because the axle is not at the end.

These answers hold only **just after release**. As the bar swings down, the weight’s lever arm shrinks, so α changes; the energy methods of Unit 6 handle that motion.

## Torques that change with time

When the net torque depends on time, the law holds at each instant:

**α(t) = Στ(t) / I**

Then the calculus of Topics 1.2 and 5.1 does the rest:

**ω(t) = ω₀ + (1/I) ∫₀ᵗ Στ dt  and  θ(t) = θ₀ + ∫₀ᵗ ω dt**

So the change in angular velocity equals the signed area under the net-torque–time graph, divided by I. Two consequences:

- ω keeps **increasing** while Στ is positive, even if Στ is getting smaller. The greatest ω occurs when Στ passes through **zero**: a moment of rotational equilibrium.
- When Στ is negative, ω decreases, even if a motor is still pushing forward.

## Worked example 2: a pottery wheel with a fading motor

**Question.** Take **counterclockwise (seen from above) as positive**. A pottery wheel and its clay have I = 0.25 kg·m² about the axle. Starting from rest at t = 0, its motor exerts a torque τ_m(t) = (2.4 N·m) − (0.40 N·m/s)t for 0 ≤ t ≤ 6.0 s, then switches off. A constant friction torque of 0.40 N·m opposes the rotation throughout. Find α(t), ω(t) and θ(t) for the first 6.0 s, the greatest angular velocity, the angular velocity and angle at 6.0 s, and when the wheel stops.

1. Net torque: Στ = 2.4 − 0.40t − 0.40 = **2.0 − 0.40t** (N·m, t in s).
2. α = Στ/I = (2.0 − 0.40t) ÷ 0.25 = **8.0 − 1.6t** (rad/s²).
3. ω = 0 + ∫₀ᵗ (8.0 − 1.6t) dt = **8.0t − 0.80t²** (rad/s).
4. θ = 0 + ∫₀ᵗ (8.0t − 0.80t²) dt = **4.0t² − 0.267t³** (rad).
5. **Greatest ω** when Στ = 0: t = 5.0 s, where ω = 40 − 20 = **20 rad/s**. The motor still pushes (0.40 N·m), but no harder than friction.
6. **At 6.0 s:** ω = 48 − 28.8 = **19.2 rad/s**; θ = 144 − 57.6 = **86.4 rad**.
7. **After 6.0 s**, only friction acts: α = −0.40 ÷ 0.25 = −1.6 rad/s², constant. Time to stop: 19.2 ÷ 1.6 = **12 s**, so the wheel stops at **t = 18 s**, after a further 19.2² ÷ (2 × 1.6) = 115 rad.

<figure>
<svg viewBox="0 0 620 520" role="img" aria-labelledby="pcm56-wt-title pcm56-wt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm56-wt-title">Net torque–time and angular velocity–time graphs for the pottery wheel</title>
<desc id="pcm56-wt-desc">Top graph: net torque in newton metres from −0.4 to 2.0 against time from 0 to 8 seconds. A straight line falls from 2.0 at t = 0, crosses zero at t = 5 seconds, reaches −0.4 at t = 6 seconds, then stays level at −0.4 to 8 seconds. Bottom graph: angular velocity in radians per second from 0 to 20 against the same time axis. The curve rises from zero, levels off to a maximum of 20 at t = 5 seconds, is 19.2 at t = 6 seconds, then falls in a straight line to 16 at 8 seconds. A vertical dashed line at 6 seconds through both graphs is labelled motor off.</desc>
<rect x="0" y="0" width="620" height="520" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M180 40 V160 M300 40 V160 M420 40 V160 M540 40 V160"/>
<path d="M180 210 V460 M300 210 V460 M420 210 V460 M540 210 V460"/>
<path d="M60 400 H560 M60 340 H560 M60 280 H560 M60 220 H560 M60 90 H560 M60 50 H560"/>
</g>
<path d="M60 40 V160 H560" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M60 130 H560" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="54">2.0</text><text x="52" y="94">1.0</text><text x="52" y="134">0</text><text x="52" y="152">−0.4</text>
</g>
<text x="20" y="100" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 100)">net torque (N·m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,50 420,146 540,146"/>
<circle cx="360" cy="130" r="4" fill="#1d2b44"/>
<text x="330" y="118" font-size="12" fill="#1d2b44">Στ = 0 at 5.0 s</text>
<text x="100" y="74" font-size="12" fill="#1d2b44">Στ = 2.0 − 0.40t</text>
<text x="440" y="140" font-size="12" fill="#1d2b44">friction only</text>
<path d="M60 210 V460 H560" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="464">0</text><text x="52" y="404">5</text><text x="52" y="344">10</text><text x="52" y="284">15</text><text x="52" y="224">20</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="480">0</text><text x="180" y="480">2</text><text x="300" y="480">4</text><text x="420" y="480">6</text><text x="540" y="480">8</text>
<text x="300" y="506" font-size="13">time, t (s)</text>
</g>
<text x="20" y="335" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 335)">angular velocity, ω (rad/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,460.0 75.0,436.6 90.0,414.4 105.0,393.4 120.0,373.6 135.0,355.0 150.0,337.6 165.0,321.4 180.0,306.4 195.0,292.6 210.0,280.0 225.0,268.6 240.0,258.4 255.0,249.4 270.0,241.6 285.0,235.0 300.0,229.6 315.0,225.4 330.0,222.4 345.0,220.6 360.0,220.0 375.0,220.6 390.0,222.4 405.0,225.4 420.0,229.6 480.0,248.8 540.0,268.0"/>
<circle cx="360" cy="220" r="4" fill="#1d2b44"/>
<text x="250" y="206" font-size="12" fill="#1d2b44">ω_max = 20 rad/s (flat tangent)</text>
<text x="430" y="226" font-size="12" fill="#1d2b44">19.2 rad/s</text>
<text x="440" y="290" font-size="12" fill="#1d2b44">slope −1.6 rad/s²</text>
<path d="M420 30 V470" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="426" y="30" font-size="12" fill="#1d2b44">motor off (dashed)</text>
</svg>
<figcaption>Figure 2. Net torque (top) and angular velocity (bottom) on the same time axis. ω is greatest where the net torque crosses zero, not where the motor torque is largest. From 5.0 s to 6.0 s the motor is still on, but the net torque is negative, so ω already falls.</figcaption>
</figure>

**Check.** The area under the net-torque graph from 0 to 6.0 s is ∫₀⁶ (2.0 − 0.40t) dt = 12 − 7.2 = 4.8 N·m·s, and 4.8 ÷ 0.25 = 19.2 rad/s. Treating the starting net torque of 2.0 N·m as constant for 6.0 s would give 48 rad/s, far too large.

## Measuring rotational inertia in the lab

Wind a string round a spindle of radius r on the rotating part. Hang a mass m on the string and release it. A rotary motion sensor gives α. Two corrections make the measurement honest:

1. **Tension is not mg.** The hanging mass accelerates downward at a = rα, so m g − T = m rα and **T = m(g − rα)**. The applied torque is τ = Tr.
2. **Friction torque.** Στ = Tr − τ_f = Iα, so **Tr = Iα + τ_f**.

Plot **Tr (vertical) against α (horizontal)** for several hanging masses. The slope is I and the vertical intercept is the friction torque τ_f. Plotting α against Tr instead gives slope 1/I. Change only m between runs, and repeat each run.

## Common misconceptions

- **"α points the way the object turns."** It points along the net torque. A wheel turning clockwise while braking has a counterclockwise α.
- **"Biggest torque means biggest ω."** The biggest net torque gives the biggest α. In Worked example 2, ω was greatest when the net torque was zero.
- **"The axle force has no effect, so I can ignore it."** It has no torque about the axle, but it appears in ΣF = Ma_cm (Worked example 1).
- **Using the wrong I.** I depends on the axis. Use the parallel axis theorem when the axle is not at the center of mass.
- **Setting T = mg for a hanging mass that accelerates.** T = m(g − a).
- **Using constant-α equations with a changing torque.** If Στ depends on t, integrate.
- **Writing τ = Iα with internal torques included.** Only external torques count.

## Where this leads

Earlier: [Topic 5.5, Rotational Equilibrium and Newton’s First Law in Rotational Form](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/), the Στ = 0 case. Next, [Topic 6.1, Rotational Kinetic Energy](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-study-guide/), starts Unit 6, where energy and angular momentum let you follow rotations whose torque changes with angle, such as the swinging arm in Worked example 1. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
