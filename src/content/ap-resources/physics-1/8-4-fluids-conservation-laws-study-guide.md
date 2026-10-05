---
resourceId: "mb-ap-phys1-8.4-study-guide"
title: "Fluids and Conservation Laws: Study Guide (Physics 1 8.4)"
description: "Use conservation of mass and energy for moving fluids: volume flow rate, the continuity equation, Bernoulli's equation, Torricelli's result and bar charts, with algebra only."
course: "physics-1"
unit: 8
topics: ["8.4"]
resourceType: "study-guide"
prerequisites:
  - "A fluid accelerates from higher to lower pressure (Topic 8.3)"
  - "Pressure and depth, P = P₀ + ρgh, and gauge pressure (Topic 8.2)"
  - "Kinetic energy, gravitational potential energy and work (Topics 3.1 to 3.4)"
  - "Horizontal projectile motion (Topic 1.5)"
prerequisiteResources: ["mb-ap-phys1-8.3-study-guide"]
learningObjectives:
  - "Explain that a pressure difference makes a fluid flow, and that an incompressible fluid enters and leaves a full pipe at the same rate"
  - "Derive the volume flow rate V/t = Av and use the continuity equation A₁v₁ = A₂v₂ to compare speeds"
  - "Derive Bernoulli's equation from conservation of energy and use it to compare pressure, height and speed at two points"
  - "Derive Torricelli's result v = √(2gh) for fluid leaving an opening, and combine it with projectile motion"
  - "Draw and interpret bar charts of pressure, ρgy and ½ρv² at points along a flow"
  - "Plan an experiment and plot data to test a fluid-flow relationship"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. g = 9.8 m/s², density of water 1000 kg/m³, 1 atm = 1.0 × 10⁵ Pa. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-8.4-revision-notes", "mb-ap-phys1-8.4-practice", "mb-ap-phys1-8.4-checklist"]
next: "mb-ap-phys1-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A pressure difference between two places makes a fluid flow. In a full pipe, an incompressible fluid leaves at the same rate it enters."
  - "Volume flow rate is V/t = Av. Mass conservation gives the continuity equation A₁v₁ = A₂v₂: narrower section, faster flow."
  - "Bernoulli's equation, P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂², is conservation of energy for an ideal fluid. Each term is energy per unit volume."
  - "Along a level pipe, where the fluid moves faster, its pressure is lower."
  - "Fluid leaving a small opening a depth h below an open surface has speed v = √(2gh), the same as an object falling from rest through h."
faqs:
  - question: "Why is the pressure lower where the fluid is faster? Shouldn't fast fluid push harder?"
    answer: "To speed up as it enters a narrow section, the fluid needs a net forward force, so the pressure behind it must be greater than the pressure ahead. The fast region therefore has the lower pressure. Pressure is the push of the fluid on its surroundings, not a measure of its speed."
  - question: "Can I use gauge pressure in Bernoulli's equation?"
    answer: "Yes, as long as you use gauge pressure at both points. Subtracting the same atmospheric pressure from both sides does not change the equation. Never mix gauge pressure at one point with absolute pressure at the other."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Fluids are **ideal** (incompressible, no viscosity) and pipes are **completely full** unless a question says otherwise. With those assumptions, two conservation laws you already know, mass and energy, describe moving fluids.

## Why fluids flow

Topic 8.3 showed that a piece of fluid accelerates from higher pressure towards lower pressure. So a **pressure difference** between two places is what starts a flow: a pump raises the pressure at one end of a pipe, or gravity gives the water at the bottom of a tank a higher pressure than the air outside a hole.

Once fluid is moving, conservation laws tell you how its speed and pressure change from place to place, without tracking forces on every parcel.

## Conservation of mass: flow rate and continuity

### Volume flow rate

Picture a full pipe of cross-sectional area A, with fluid moving at speed v. In a time t, the fluid passing a fixed line moves a distance vt. The fluid that crossed the line fills a cylinder of volume A × vt. So the **volume flow rate** is

**V / t = Av**  (units: m² × m/s = m³/s)

Multiply by the density to get the mass flow rate, ρAv, in kg/s.

### The continuity equation

Matter is not created or destroyed inside a pipe. An incompressible fluid cannot pile up, because it cannot be squeezed. So in any time interval, the mass entering one end of a full pipe must equal the mass leaving the other. With constant density, the volume flow rates must match too:

**A₁v₁ = A₂v₂**

Where the pipe narrows, the fluid speeds up. Speed is inversely proportional to area: one-third of the area means three times the speed.

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="p1-84-pipe-title p1-84-pipe-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-84-pipe-title">Continuity: equal volumes pass through wide and narrow parts of a pipe</title>
<desc id="p1-84-pipe-desc">Side view of a full pipe, flow to the right. The wide section on the left has area A₁ = 6.0 × 10⁻⁴ square metres and speed v₁ = 0.50 m/s. It tapers to a narrow section on the right with area A₂ = 2.0 × 10⁻⁴ square metres and speed v₂ = 1.5 m/s. In the wide section a short shaded slab, 0.10 m long, shows the water that passes in 0.20 s. In the narrow section a hatched slab three times as long, 0.30 m, shows the water that passes in the same 0.20 s. Both slabs have volume 6.0 × 10⁻⁵ cubic metres.</desc>
<defs>
<marker id="p1-84-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="p1-84-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.2"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="290" fill="#ffffff"/>
<path d="M30 70 H250 L320 120 H540" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M30 190 H250 L320 160 H540" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<rect x="110" y="72" width="40" height="116" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="370" y="122" width="120" height="36" fill="url(#p1-84-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M170 130 H230" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-84-ah)"/>
<path d="M500 140 H540" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-84-ah)"/>
<text x="168" y="122" font-size="12" fill="#1d2b44">v₁ = 0.50 m/s</text>
<text x="420" y="110" font-size="12" fill="#1d2b44">v₂ = 1.5 m/s</text>
<text x="40" y="60" font-size="12" fill="#1d2b44">A₁ = 6.0 × 10⁻⁴ m²</text>
<text x="370" y="186" font-size="12" fill="#1d2b44">A₂ = 2.0 × 10⁻⁴ m²</text>
<text x="130" y="212" font-size="12" fill="#1d2b44" text-anchor="middle">shaded slab: 0.10 m long</text>
<text x="430" y="212" font-size="12" fill="#1d2b44" text-anchor="middle">hatched slab: 0.30 m long</text>
<text x="280" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">In 0.20 s each slab passes a fixed line. Both volumes = 6.0 × 10⁻⁵ m³.</text>
<text x="280" y="270" font-size="12" fill="#1d2b44" text-anchor="middle">Flow rate Av = 3.0 × 10⁻⁴ m³/s in both sections.</text>
</svg>
<figcaption>Figure 1. Continuity in a full pipe (sketch, not to scale). In 0.20 s the water in the wide section moves 0.10 m and the water in the narrow section moves 0.30 m. The narrow section has one-third of the area, so the slab must be three times as long to hold the same volume. That is why v₂ = 3v₁.</figcaption>
</figure>

## Conservation of energy: Bernoulli's equation

Now follow a small volume V of fluid, mass m = ρV, from point 1 to point 2 in a steady flow. Choose the system **fluid + Earth**, so gravitational potential energy is inside the system.

1. **Work done by the surrounding fluid.** Fluid behind the volume pushes it forward; fluid ahead pushes back. The net work done by these pressure forces is (P₁ − P₂)V. (Pushing a volume V against pressure P takes work PV, because F × d = PA × d = PV.)
2. **Change in kinetic energy:** ½ρV(v₂² − v₁²).
3. **Change in gravitational potential energy:** ρVg(y₂ − y₁).
4. **Energy rule:** work done on the system = ΔK + ΔU_g, so (P₁ − P₂)V = ½ρV(v₂² − v₁²) + ρVg(y₂ − y₁).

Divide by V and collect the terms for each point:

**P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂²**

This is **Bernoulli's equation**. Every term has units of Pa, which is the same as J/m³, so each one is an **energy per unit volume**. The total P + ρgy + ½ρv² is the same at every point along an ideal flow. Energy is not lost, because an ideal fluid has no viscosity to turn kinetic energy into thermal energy.

**Two checks that it makes sense:**

- **Fluid at rest** (v₁ = v₂ = 0): P₁ − P₂ = ρg(y₂ − y₁). If point 1 is a distance h lower, its pressure is higher by ρgh. That is the depth rule from Topic 8.2.
- **Level pipe** (y₁ = y₂): P₁ − P₂ = ½ρ(v₂² − v₁²). If v₂ > v₁, then P₂ < P₁. **Faster fluid, lower pressure.** This matches Topic 8.3: to speed up, the fluid must be pushed from a higher-pressure region into a lower-pressure one.

## Torricelli's result: fluid leaving an opening

A wide tank is open to the air at the top. A small hole sits a depth h below the water surface. Apply Bernoulli between point 1 (on the surface) and point 3 (in the jet just outside the hole), with y = 0 at the hole:

- Both points are open to the atmosphere, so P₁ = P₃ = P_atm, and these cancel.
- The tank is much wider than the hole, so the surface falls very slowly: v₁ ≈ 0.

That leaves ρgh = ½ρv², so

**v = √(2gh)**

This is **Torricelli's result**. It is exactly the speed an object reaches after falling from rest through height h. Density cancels, so water and oil leave at the same speed. The speed depends only on how far the surface is above the opening.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-84-bar-title p1-84-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-84-bar-title">Bernoulli bar charts for water draining from a tank</title>
<desc id="p1-84-bar-desc">Three groups of bars, one for each point in a draining tank whose water surface is 0.80 m above a small hole, with y = 0 at the hole and gauge pressures. Each group has bars for gauge pressure, rho g y and one half rho v squared. Point 1, on the water surface: gauge pressure 0, rho g y 7840 joules per cubic metre, one half rho v squared 0. Point 2, inside the tank at the level of the hole, where the water is nearly still: gauge pressure 7840, rho g y 0, one half rho v squared 0. Point 3, in the jet just outside the hole: gauge pressure 0, rho g y 0, one half rho v squared 7840. The total is 7840 joules per cubic metre at every point. Pressure bars are dotted, rho g y bars are hatched and one half rho v squared bars are solid.</desc>
<defs>
<pattern id="p1-84-hatch2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<pattern id="p1-84-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="#1d2b44"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M70 230 H550" stroke="#1d2b44" stroke-width="2"/>
<path d="M70 230 V40" stroke="#1d2b44" stroke-width="2"/>
<path d="M65 60 H550" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="4 4"/>
<text x="64" y="64" font-size="11" fill="#1d2b44" text-anchor="end">7840</text>
<text x="64" y="234" font-size="11" fill="#1d2b44" text-anchor="end">0</text>
<text x="22" y="145" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 145)">energy per volume (J/m³)</text>
<rect x="132" y="60" width="30" height="170" fill="url(#p1-84-hatch2)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="250" y="60" width="30" height="170" fill="url(#p1-84-dots)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="476" y="60" width="30" height="170" fill="#1d2b44"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="105" y="224">0</text><text x="147" y="54">7840</text><text x="189" y="224">0</text>
<text x="265" y="54">7840</text><text x="307" y="224">0</text><text x="349" y="224">0</text>
<text x="415" y="224">0</text><text x="457" y="224">0</text><text x="491" y="54">7840</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="105" y="248">P</text><text x="147" y="248">ρgy</text><text x="189" y="248">½ρv²</text>
<text x="265" y="248">P</text><text x="307" y="248">ρgy</text><text x="349" y="248">½ρv²</text>
<text x="415" y="248">P</text><text x="457" y="248">ρgy</text><text x="491" y="248">½ρv²</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="147" y="272">1: surface</text>
<text x="307" y="272">2: in tank, hole level</text>
<text x="457" y="272">3: jet outside hole</text>
</g>
<text x="300" y="294" font-size="12" fill="#1d2b44" text-anchor="middle">Key: P (gauge) dotted · ρgy hatched · ½ρv² solid.</text>
<text x="300" y="312" font-size="12" fill="#1d2b44" text-anchor="middle">Total 7840 J/m³ at points 1, 2 and 3.</text>
</svg>
<figcaption>Figure 2. Bar charts for a tank whose surface is 0.80 m above a small hole (y = 0 at the hole, gauge pressures, ρ = 1000 kg/m³). Energy per volume moves from height (1) to pressure (2) to motion (3). The total stays 1000 × 9.8 × 0.80 = 7840 J/m³, so ½ρv² = 7840 J/m³ in the jet and v = 4.0 m/s.</figcaption>
</figure>

**How to draw a Bernoulli bar chart:** pick a zero for y and decide whether you are using gauge or absolute pressure. Draw three bars (P, ρgy, ½ρv²) at each point. For an ideal fluid, the total height must be the same at every point. If you know two bars and the total, the third follows.

## Worked example 1: a garden hose and its nozzle

**Question.** Water moves at 1.5 m/s through a hose with inner diameter 2.0 cm. The nozzle has inner diameter 1.0 cm. Find (a) the speed of the water in the nozzle, (b) the volume flow rate and (c) how long it takes to fill a 12 L bucket (1 L = 10⁻³ m³).

1. **(a) Continuity.** A ∝ d², so halving the diameter divides the area by 4. v₂ = v₁ × (A₁ / A₂) = 1.5 × (2.0 / 1.0)² = **6.0 m/s**.
2. **(b)** A₁ = π(0.010 m)² = 3.14 × 10⁻⁴ m². V/t = A₁v₁ = 3.14 × 10⁻⁴ × 1.5 = **4.7 × 10⁻⁴ m³/s** (0.47 L/s). Using the nozzle gives the same: π(0.0050)² × 6.0 = 4.7 × 10⁻⁴ m³/s.
3. **(c)** t = V ÷ (V/t) = 0.012 m³ ÷ 4.71 × 10⁻⁴ m³/s = **25 s**.

**Interpretation.** The nozzle makes the water faster but does **not** fill the bucket faster: the flow rate is the same everywhere along the hose.

## Worked example 2: pressure in a narrow section

**Question.** Water flows through a horizontal pipe. In the wide section, area 8.0 × 10⁻⁴ m², the speed is 1.2 m/s and the absolute pressure is 1.50 × 10⁵ Pa. The pipe narrows to 2.0 × 10⁻⁴ m². Find the speed and pressure in the narrow section.

1. **Continuity:** v₂ = (8.0 × 10⁻⁴ / 2.0 × 10⁻⁴) × 1.2 = **4.8 m/s**.
2. **Bernoulli, level pipe** (ρgy terms equal and cancel): P₂ = P₁ − ½ρ(v₂² − v₁²).
3. ½ρ(v₂² − v₁²) = 500 × (23.04 − 1.44) = 10 800 Pa.
4. P₂ = 1.50 × 10⁵ − 1.08 × 10⁴ = 1.392 × 10⁵ Pa ≈ **1.4 × 10⁵ Pa**.

**Check with totals.** Point 1: 1.50 × 10⁵ + ½(1000)(1.2)² = 150 720 J/m³. Point 2: 139 200 + ½(1000)(4.8)² = 150 720 J/m³. Equal, as they must be. The pressure drop is what accelerates the water into the narrow section.

## Worked example 3: where does the jet land?

**Question.** A wide water tank stands on a floor. A small hole in its side is 0.45 m above the floor, and the water surface is 0.80 m above the hole. Find (a) the speed of the water leaving the hole and (b) how far from the tank the jet hits the floor.

1. **(a) Torricelli:** v = √(2gh) = √(2 × 9.8 × 0.80) = **4.0 m/s** (3.96 m/s).
2. **(b) Projectile motion.** The water leaves horizontally, so its vertical motion starts from rest. Fall time: 0.45 = ½ × 9.8 × t², so t = √(2 × 0.45 / 9.8) = 0.303 s.
3. Horizontal distance: x = vt = 3.96 × 0.303 = **1.2 m**.

**Symbolic check.** x = √(2gh) × √(2H/g) = 2√(hH) = 2√(0.80 × 0.45) = 2 × 0.60 = 1.20 m. Notice g cancels. As the tank drains, h falls and the jet lands closer. If h fell to one quarter (0.20 m), v would halve to 2.0 m/s.

## Designing an experiment

To test Torricelli's result in a lab:

1. Fit a small hole near the bottom of a tall container and keep the water level steady (top it up, or use a wide container and take quick readings).
2. Measure h, the height of the surface above the hole, with a ruler.
3. Measure the jet's speed indirectly: measure the hole's height H above the bench and the horizontal distance R where the jet lands, then v = R ÷ √(2H/g).
4. Repeat for several values of h.
5. Plot **v² against h**. Torricelli predicts a straight line through the origin with slope 2g = 19.6 m/s². (Plotting R² against h also works; its predicted slope is 4H.)

Real water has some viscosity, so a little mechanical energy is lost as it squeezes through the hole, and air resistance acts on the jet. Measured speeds are usually a little below the ideal value. A slope slightly under 2g is what you should expect.

## Common misconceptions

- **"Faster fluid has higher pressure."** In a level pipe it is the other way round (Worked example 2). Pressure is the push the fluid exerts, not its speed.
- **"A narrower pipe slows the fluid down."** For a full pipe of incompressible fluid, a narrower section means **faster** flow (continuity).
- **Using the diameter ratio instead of the area ratio.** Area goes as diameter squared. Halving the diameter quadruples the speed (Worked example 1).
- **"A nozzle increases the flow rate."** It increases the speed, but the volume per second is set by the supply, not by the nozzle.
- **"Water leaves a hole faster if it is denser."** Density cancels in v = √(2gh). Only the depth below the surface matters.
- **Mixing gauge and absolute pressure** in one Bernoulli equation. Pick one and use it at both points.
- **Forgetting the height term.** If the two points are at different heights, ρgy changes, even if the speed does not.
- **Using Bernoulli for a real, viscous flow without comment.** It describes ideal fluids. Real fluids lose some mechanical energy to thermal energy.

## Where this leads

This is the last topic of the course. It brings together forces (Topic 8.3), energy (Unit 3) and conservation thinking from across the course. Try the [practice questions](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-checklist/) to consolidate. To review buoyancy and pressure-driven flow, go back to [Topic 8.3](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap) to plan your full-course review.
