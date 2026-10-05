---
resourceId: "mb-ap-physcm-3.5-study-guide"
title: "Power: Study Guide (Physics C: Mechanics 3.5)"
description: "Calculus-based power: average power, P = dW/dt, the dot product P = F·v, net power as dK/dt, work as the area under a power–time graph, and motion at constant power."
course: "physics-c-mechanics"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "Kinetic energy, work as ∫F·dr with the dot product, and the work–energy theorem (Topics 3.1 and 3.2)"
  - "Energy transfer and conversion in a chosen system (Topics 3.3 and 3.4)"
  - "Integrating with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-3.4-study-guide"]
learningObjectives:
  - "Describe power as the rate at which energy is transferred into or out of a system, or converted inside it"
  - "Calculate average power from a change in energy, or from total work, and the time taken"
  - "Derive P = F·v from P = dW/dt and use it with vector components, including negative and zero power"
  - "Use the net power on an object as dK/dt, and find work as the area under a power–time graph"
  - "Model motion at constant power by integration and state where the model breaks down"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic only. Use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-3.5-revision-notes", "mb-ap-physcm-3.5-practice", "mb-ap-physcm-3.5-checklist"]
next: "mb-ap-physcm-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Power is the rate of energy change: energy moving into or out of a system, or changing form inside it. Unit: watt, 1 W = 1 J/s."
  - "Average power: P_avg = ΔE/Δt = W/Δt. Instantaneous power: P = dW/dt."
  - "The power delivered by a force is P = F·v = Fv cos θ: only the component of the force along the velocity counts."
  - "Power can be positive (energy in), negative (energy out) or zero (force perpendicular to velocity)."
  - "The net power on an object equals dK/dt, and work is the area under a power–time graph: W = ∫P dt."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 3.5?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics defines instantaneous power as a derivative, derives P = F·v as a dot product, and integrates power over time, including cases where the force or the power changes with time."
  - question: "Is a kilowatt-hour a unit of power?"
    answer: "No. It is a unit of energy: 1 kW for 1 hour, which is 1000 W × 3600 s = 3.6 × 10⁶ J. Power is energy per unit time; a kilowatt-hour is power multiplied by time."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 3.5 called Power. This guide is the **calculus-based** one. It defines instantaneous power as a derivative, derives P = F·v as a dot product, and integrates power to find work and speed when the force or the power changes with time. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/3-5-power-study-guide/); do not mix the two when you revise. This topic follows [Topic 3.4, Conservation of Energy](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/).

## Power is a rate of energy change

Work and energy tell you **how much** energy changes. Power tells you **how fast** it changes.

Start, as always, by choosing a **system**. Energy can change in two ways:

- **Transfer** into or out of the system. A force from outside the system does work on it. Positive work brings energy in; negative work takes energy out.
- **Conversion** inside the system. Energy changes form, for example gravitational potential energy becoming kinetic energy, or kinetic energy becoming internal (thermal) energy through friction.

Power is the rate of either process. Its SI unit is the **watt**: **1 W = 1 J/s = 1 kg·m²/s³**.

The choice of system decides which process you describe. Take a 3.0 kg block sliding at 4.0 m/s across a floor with μ_k = 0.30. The friction force is μ_k mg = 0.30 × 3.0 × 9.8 = 8.82 N, so at that instant kinetic energy falls at 8.82 N × 4.0 m/s ≈ 35 W.

- **System = block only.** Friction is an external force. It transfers energy **out** of the system at about 35 W.
- **System = block + floor.** Friction is internal. About 35 W of kinetic energy is **converted** into internal energy of the block and floor, and the system's total energy does not change.

Both descriptions are correct. Say which system you are using.

## Average power

Average power uses only the total energy change and the time it took:

**P_avg = ΔE / Δt**

If the energy change comes from work done by forces, then:

**P_avg = W / Δt**

where W is the total work done during the time interval Δt. A motor that does 6.0 kJ of work in 20 s has an average output power of 300 W, however unevenly it delivered that energy.

## Instantaneous power: P = dW/dt = F·v

Shrink the interval, as you did for velocity in Topic 1.2. The instantaneous power delivered by a force is

**P = dW/dt**

Now use what you know about work. In a short time dt, the object moves through a small displacement dr, and the force does work dW = F·dr. Divide by dt:

**P = F·(dr/dt) = F·v**

So the power delivered by a force at an instant is the **dot product of the force and the velocity**. Written with the angle θ between them:

**P = Fv cos θ = F_∥ v**

Here F_∥ = F cos θ is the component of the force **parallel to the velocity**. The component perpendicular to v delivers no power at all, because it does no work over that instant.

The course states this result for a constant force, but the derivation above holds at any instant: you use the force and the velocity at that moment. In component form, P = F_x v_x + F_y v_y + F_z v_z.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm35-fv-title pcm35-fv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm35-fv-title">Force and velocity vectors with the force split into parallel and perpendicular components</title>
<desc id="pcm35-fv-desc">A point object has a velocity vector v pointing to the right. A force vector F starts at the same point and points up and to the right at angle theta to v. Dashed lines split F into a component along v, labelled F parallel equals F cos theta, and a component at right angles to v, labelled F perpendicular, which delivers no power. A note reads P = F·v = F v cos theta.</desc>
<defs>
<marker id="pcm35-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<line x1="120" y1="220" x2="440" y2="220" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm35-arrow)"/>
<line x1="120" y1="220" x2="306" y2="64" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm35-arrow)"/>
<line x1="120" y1="226" x2="306" y2="226" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="306" y1="220" x2="306" y2="68" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<path d="M296 220 V210 H306" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M190 220 A70 70 0 0 0 173.6 175" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="120" cy="220" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="14" fill="#1d2b44">
<text x="446" y="225" font-weight="600">v</text>
<text x="196" y="122" font-weight="600">F</text>
<text x="196" y="200">θ</text>
<text x="150" y="252">F∥ = F cos θ (dashed, along v)</text>
<text x="316" y="140">F⊥ = F sin θ (dashed)</text>
<text x="316" y="158">no power: does no work</text>
<text x="316" y="270" font-weight="600">P = F·v = Fv cos θ = F∥ v</text>
</g>
</svg>
<figcaption>Figure 1. Only the component of the force along the velocity delivers power. The perpendicular component changes the direction of motion but not the speed.</figcaption>
</figure>

## The sign of power

Because P = Fv cos θ, the angle decides the sign:

| Angle θ between F and v | Sign of P | What happens to the object's energy |
|---|---|---|
| 0 ≤ θ < 90° | positive | the force transfers energy **into** the object |
| θ = 90° | zero | no transfer at that instant (for example, the normal force on a block sliding along a level floor) |
| 90° < θ ≤ 180° | negative | the force transfers energy **out of** the object (friction, braking, gravity on a rising object) |

## Net power and kinetic energy

Add the powers of all the forces on an object and you get the power of the net force:

**P_net = F_net·v**

The work–energy theorem says W_net = ΔK. Differentiate it with respect to time:

**P_net = dK/dt**

You can check this directly. For motion along a line, K = ½mv², so dK/dt = mv(dv/dt) = (ma)v = F_net v. So if P_net is positive the object speeds up, if it is negative the object slows down, and if it is zero the speed is constant at that instant, even if the direction is changing.

## From power back to work: W = ∫P dt

Integrate P = dW/dt over time:

**W = ∫ P dt** (from t₁ to t₂)

On a **power–time graph**, the work done is the **area under the curve**. Area below the time axis counts as negative work. The average power is the height of the rectangle that has the same area over the same time interval, which is the same idea as average velocity on a v–t graph. Figure 2 shows this for Worked example 3.

## Worked example 1: power from vector components

**Question.** A 2.0 kg puck slides on frictionless, level ice. Take **+x east and +y north** in the plane of the ice. At one instant the puck's velocity is v = (3.0 x̂ − 1.5 ŷ) m/s and two horizontal forces act on it: F₁ = (6.0 x̂ + 2.0 ŷ) N and F₂ = (−2.0 x̂ + 4.0 ŷ) N. Find the power delivered by each force, the net power, and the rate at which the speed is changing.

1. Power of F₁: P₁ = F₁·v = (6.0)(3.0) + (2.0)(−1.5) = 18 − 3.0 = **+15 W**.
2. Power of F₂: P₂ = F₂·v = (−2.0)(3.0) + (4.0)(−1.5) = −6.0 − 6.0 = **−12 W**.
3. Gravity and the normal force are vertical and v is horizontal, so each delivers **zero** power.
4. Net power: P_net = 15 − 12 = **+3.0 W**. Kinetic energy is increasing at 3.0 J/s.
5. Speed: |v| = √(3.0² + 1.5²) ≈ 3.35 m/s. From dK/dt = m|v|(d|v|/dt): d|v|/dt = 3.0 ÷ (2.0 × 3.35) ≈ **0.45 m/s²**.

**Check.** The angle between F₁ and v is 45° and the angle between F₂ and v is about 143°, so P₁ should be positive and P₂ negative. They are. As a second check, F_net = (4.0 x̂ + 6.0 ŷ) N has a component along v of F_net·v ÷ |v| = 3.0 ÷ 3.35 ≈ 0.89 N, and 0.89 N ÷ 2.0 kg ≈ 0.45 m/s², the same rate.

## Worked example 2: motion at constant power

**Question.** A winch pulls a 400 kg trolley from rest along a level, frictionless track with a horizontal cable. Take **+x along the track**, origin at the start. The winch delivers a constant 2.0 kW to the trolley. Find v(t) and x(t), the speed and position at 10 s, and the cable tension at 2.5 s and at 10 s.

1. Only the cable does work, so P = dK/dt = 2000 W, constant. Integrate from rest: K = Pt.
2. Speed: ½mv² = Pt, so v = √(2Pt/m) = √(2 × 2000 × t ÷ 400) = **√(10t)** m/s (t in s).
3. Position: x = ∫₀ᵗ √(10t) dt = **(2/3)√10 · t^(3/2)** ≈ 2.11 t^(3/2) m.
4. At t = 10 s: v = √100 = **10 m/s** and x = (2/3)√10 × 10^(3/2) = (2/3) × 100 ≈ **67 m**.
5. Tension from P = Tv, so T = P/v. At 2.5 s, v = 5.0 m/s and T = **400 N**. At 10 s, v = 10 m/s and T = **200 N**.

**Check.** At 10 s, K = ½ × 400 × 10² = 20 000 J, which equals Pt = 2000 W × 10 s. The acceleration from the derivative is dv/dt = √10 ÷ (2√t) = 0.50 m/s² at 10 s, and T/m = 200 ÷ 400 = 0.50 m/s². Both agree.

**Where the model breaks down.** At constant power, T = P/v grows without limit as v → 0, so a real winch cannot supply constant power from a standing start. Real motors are limited by a maximum force at low speed and switch to near-constant power only once moving. Constant power also does **not** mean constant force or constant acceleration: here both fall as the trolley speeds up.

## Worked example 3: a force that grows with time

**Question.** A 4.0 kg cart starts from rest on a level, frictionless track. Take **+x along the track**. A horizontal force F_x = (6.0 N/s)t acts on it for 2.0 s. Find P(t), the work done by the force from the power, the average power, and the power at 2.0 s.

1. Velocity: a_x = F_x/m = 1.5t, so v_x = 0 + ∫₀ᵗ 1.5t dt = **0.75t²** m/s.
2. Power: P = F_x v_x = (6.0t)(0.75t²) = **4.5t³** W.
3. Work: W = ∫₀^2.0 4.5t³ dt = 4.5 × (2.0)⁴ ÷ 4 = **18 J**.
4. Average power: P_avg = W/Δt = 18 J ÷ 2.0 s = **9.0 W**.
5. Power at 2.0 s: P = 4.5 × 2.0³ = **36 W**, four times the average.

**Check with energy.** v_x(2.0) = 0.75 × 4.0 = 3.0 m/s, so ΔK = ½ × 4.0 × 3.0² = 18 J, the same as the work found from the power.

**A trap.** The average force is 6.0 N and the average velocity is 1.0 m/s (displacement 2.0 m in 2.0 s), but their product, 6.0 W, is **not** the average power. You cannot average F and v separately when both change; integrate P instead.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm35-pt-title pcm35-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm35-pt-title">Power–time graph for P = 4.5t³ from 0 to 2 seconds</title>
<desc id="pcm35-pt-desc">Power P in watts from 0 to 40 against time t in seconds from 0 to 2. The curve starts flat at the origin and rises ever more steeply to 36 W at t = 2 s. The area under the curve is shaded and labelled 18 J of work. A dashed horizontal line at 9 W marks the average power; the rectangle under it from 0 to 2 s has the same 18 J area.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 290 V50 M270 290 V50 M370 290 V50 M470 290 V50"/>
<path d="M70 230 H480 M70 170 H480 M70 110 H480 M70 50 H480"/>
</g>
<polygon fill="#fdf6e3" stroke="none" points="70.0,290.0 80.0,290.0 90.0,290.0 100.0,289.9 110.0,289.8 120.0,289.6 130.0,289.3 140.0,288.8 150.0,288.3 160.0,287.5 170.0,286.6 180.0,285.5 190.0,284.2 200.0,282.6 210.0,280.7 220.0,278.6 230.0,276.2 240.0,273.4 250.0,270.3 260.0,266.9 270.0,263.0 280.0,258.7 290.0,254.1 300.0,248.9 310.0,243.3 320.0,237.3 330.0,230.7 340.0,223.6 350.0,215.9 360.0,207.7 370.0,198.9 380.0,189.5 390.0,179.4 400.0,168.7 410.0,157.3 420.0,145.3 430.0,132.5 440.0,119.0 450.0,104.8 460.0,89.8 470.0,74.0 470,290"/>
<path d="M70 290 H500 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="170" y="308">0.5</text><text x="270" y="308">1.0</text><text x="370" y="308">1.5</text><text x="470" y="308">2.0</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">10</text><text x="62" y="174">20</text><text x="62" y="114">30</text><text x="62" y="54">40</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">power, P (W)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,290.0 80.0,290.0 90.0,290.0 100.0,289.9 110.0,289.8 120.0,289.6 130.0,289.3 140.0,288.8 150.0,288.3 160.0,287.5 170.0,286.6 180.0,285.5 190.0,284.2 200.0,282.6 210.0,280.7 220.0,278.6 230.0,276.2 240.0,273.4 250.0,270.3 260.0,266.9 270.0,263.0 280.0,258.7 290.0,254.1 300.0,248.9 310.0,243.3 320.0,237.3 330.0,230.7 340.0,223.6 350.0,215.9 360.0,207.7 370.0,198.9 380.0,189.5 390.0,179.4 400.0,168.7 410.0,157.3 420.0,145.3 430.0,132.5 440.0,119.0 450.0,104.8 460.0,89.8 470.0,74.0"/>
<path d="M70 236 H470" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5"/>
<circle cx="470" cy="74" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="380" y="68">(2.0 s, 36 W)</text>
<text x="390" y="270" font-weight="600">area = W = 18 J</text>
<text x="80" y="228">dashed: P_avg = 9.0 W (same 18 J area)</text>
<text x="180" y="120">P = 4.5t³</text>
</g>
</svg>
<figcaption>Figure 2. Power–time graph for Worked example 3. The shaded area under the curve is the work done, 18 J. The dashed line at the average power, 9.0 W, encloses a rectangle with the same area.</figcaption>
</figure>

## Common misconceptions

- **"Power and energy are the same thing."** Power is a rate. A joule is energy; a watt is a joule per second; a kilowatt-hour is energy again (power × time).
- **"P = Fv uses the whole force."** Only the component along the velocity counts. A force at right angles to the motion, like the tension on a ball moving in a circle at constant speed, delivers zero power.
- **"Power is always positive."** A force opposing the motion delivers negative power and takes energy out (Worked example 1, F₂).
- **"Constant power means constant force."** At constant power, F = P/v falls as speed rises (Worked example 2).
- **"Average power = average force × average velocity."** This fails when both change (Worked example 3). Use W/Δt or ∫P dt.
- **"More power means more work."** More power means work is done **faster**. A small motor can do the same work as a large one if it runs for longer.
- **"Zero net power means the object is at rest."** It means the speed is not changing at that instant. A car at steady speed has engine and resistive forces whose powers cancel.

## Where this leads

Power closes Unit 3. Next, [Topic 4.1, Linear Momentum](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-study-guide/) introduces a second quantity that forces change: momentum, changed by a force acting over time, just as energy is changed by a force acting over a displacement. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/3-5-power-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/3-5-power-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/3-5-power-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
