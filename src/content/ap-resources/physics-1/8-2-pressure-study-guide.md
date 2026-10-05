---
resourceId: "mb-ap-phys1-8.2-study-guide"
title: "Pressure: Study Guide (Physics 1 8.2)"
description: "Pressure as perpendicular force per area, why it is a scalar, the particle picture of fluid pressure, absolute and gauge pressure, and the pressure under a column of fluid, P = P₀ + ρgh."
course: "physics-1"
unit: 8
topics: ["8.2"]
resourceType: "study-guide"
prerequisites:
  - "Density ρ = m / V and the ideal-fluid model (Topic 8.1)"
  - "Splitting a force into perpendicular components (Topics 1.5 and 2.2)"
  - "Impulse and the force from many collisions (Topic 4.2)"
prerequisiteResources: ["mb-ap-phys1-8.1-study-guide"]
learningObjectives:
  - "Calculate the pressure a force exerts on a surface, using only the force component perpendicular to that surface"
  - "Explain why pressure is a scalar and how a fluid's particles produce pressure on every surface they touch"
  - "Tell absolute pressure from gauge pressure and convert between them using a reference pressure such as atmospheric pressure"
  - "Calculate the pressure at a depth h in a fluid of uniform density with P = P₀ + ρgh, and explain why the container's shape does not matter"
  - "Sketch and interpret graphs of pressure against depth for one or more fluids"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Use g = 9.8 m/s² and atmospheric pressure 1.0 × 10⁵ Pa, the values on the course equation table. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-8.2-revision-notes", "mb-ap-phys1-8.2-practice", "mb-ap-phys1-8.2-checklist"]
next: "mb-ap-phys1-8.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Pressure is the perpendicular force per unit area: P = F⊥ / A. Its unit is the pascal, 1 Pa = 1 N/m²."
  - "Pressure is a scalar. At a point in a fluid it pushes equally on a surface facing any way; the force it makes is always perpendicular to the surface."
  - "Fluid pressure comes from huge numbers of particle collisions with a surface."
  - "Absolute pressure = reference pressure + gauge pressure: P = P₀ + P_gauge. Near Earth's surface, P₀ is usually atmospheric pressure, 1.0 × 10⁵ Pa."
  - "Under a column of fluid, P_gauge = ρgh, where h is the vertical depth. The width and shape of the container do not matter."
faqs:
  - question: "Is pressure the same thing as force?"
    answer: "No. Force is a vector measured in newtons. Pressure is a scalar measured in pascals (newtons per square metre). The same force spread over a bigger area gives a smaller pressure."
  - question: "What is the difference between gauge pressure and absolute pressure?"
    answer: "Absolute pressure is the total pressure. Gauge pressure is how much it exceeds a reference pressure, usually the atmosphere. A tyre gauge reading 2.2 × 10⁵ Pa means the absolute pressure inside is about 3.2 × 10⁵ Pa."
  - question: "Why do I not feel the weight of the air above me?"
    answer: "The air pushes on you from every side, and the fluids inside your body push outwards with about the same pressure. The forces on you nearly balance, so you notice only pressure changes, such as in your ears on a fast lift or a dive."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Topic 8.1 described fluids by their density. This topic asks what a fluid, or any object, does to the surfaces it presses on.

## Pressure on a surface

Stand on one foot on soft snow and you sink. Lie flat and you do not. Your weight is the same, but it is spread over a different area. **Pressure** measures how concentrated a force is:

**P = F⊥ / A**

- F⊥ is the **magnitude of the force component perpendicular to the surface**, in N.
- A is the area over which that force acts, in m².
- The unit is the **pascal**: 1 Pa = 1 N/m².

A 600 N person standing on one foot (contact area about 0.015 m²) exerts 600 ÷ 0.015 = 40,000 Pa on the ground. Lying down on 0.50 m², the same person exerts only 1200 Pa: about 33 times less.

### Only the perpendicular part counts

If a force pushes at an angle, split it into a component perpendicular to the surface and a component along it. Only the perpendicular component presses into the surface. The parallel component tries to slide things along the surface (that is the job of friction, not pressure).

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-82-box-title p1-82-box-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-82-box-title">A box on a floor pushed at an angle, with the push split into components</title>
<desc id="p1-82-box-desc">A rectangular storage box rests on a hatched floor. A solid arrow labelled F = 80 N pushes on the top left corner of the box, pointing down and to the right at 30 degrees below the horizontal. Two dashed arrows show its components: a horizontal one labelled F cos 30° = 69 N, along the floor, and a vertical one labelled F sin 30° = 40 N, pointing down, perpendicular to the floor. A second solid arrow inside the box points straight down and is labelled weight mg = 147 N. The base of the box is labelled contact area A = 0.40 m × 0.30 m.</desc>
<defs><pattern id="p1-82-floor" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V10" stroke="#1d2b44" stroke-width="1"/></pattern>
<marker id="p1-82-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="40" y="240" width="480" height="18" fill="url(#p1-82-floor)"/>
<path d="M40 240 H520" stroke="#1d2b44" stroke-width="2"/>
<rect x="200" y="140" width="220" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M96 80 L196 138" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-82-ah)"/>
<path d="M96 80 L192 80" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-82-ah)"/>
<path d="M200 80 L200 134" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-82-ah)"/>
<path d="M310 170 L310 228" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-82-ah)"/>
<g font-size="12" fill="#1d2b44">
<text x="40" y="180">push F = 80 N,</text><text x="40" y="196">30° below horizontal</text>
<text x="96" y="70">F cos 30° = 69 N (parallel to floor)</text>
<text x="208" y="112">F sin 30° = 40 N (perpendicular)</text>
<text x="318" y="200">weight mg = 147 N</text>
<text x="230" y="282">contact area A = 0.40 m × 0.30 m</text>
</g>
</svg>
<figcaption>Figure 1. A box pushed at an angle (Worked example 1). Only the components perpendicular to the floor (weight and F sin 30°) press the box into the floor. The dashed horizontal component acts along the floor and adds nothing to the pressure.</figcaption>
</figure>

## Worked example 1: pressure under a pushed box

**Question.** A 15 kg storage box has a base 0.40 m by 0.30 m. (a) Find the pressure it exerts on the floor. (b) A student then pushes on the top of the box with a force of 80 N directed 30° below the horizontal. The box does not move. Find the new pressure on the floor.

1. Contact area: A = 0.40 m × 0.30 m = 0.12 m².
2. (a) The only perpendicular force is the box's weight: mg = 15 kg × 9.8 m/s² = 147 N. P = 147 N ÷ 0.12 m² = 1225 Pa ≈ **1.2 × 10³ Pa**.
3. (b) Split the push. Perpendicular to the floor: 80 sin 30° = 40 N downward. Along the floor: 80 cos 30° = 69 N.
4. The box is at rest vertically, so the floor's normal force balances both downward forces: 147 N + 40 N = 187 N. By Newton's third law the box presses on the floor with 187 N.
5. P = 187 N ÷ 0.12 m² = 1558 Pa ≈ **1.6 × 10³ Pa**.

**Check.** The 69 N horizontal component does not appear. Using the whole 80 N would overestimate the pressure. The pressure rose by a factor 187/147 ≈ 1.27, the same factor as the perpendicular force, because the area did not change.

## Pressure is a scalar

Force has a direction. Pressure does not: it is a **scalar**. Think of a tiny pressure sensor held at one point under water. Turn its face up, down or sideways and it reads the same value. What does have a direction is the **force** that the pressure produces on a particular surface: F = PA, always directed **perpendicular to that surface**, pushing on it.

So the water in a tank pushes down on the base, sideways on the walls, and even up on the underside of anything submerged. The pressure at a point is one number; the surfaces decide the directions of the forces.

## Where fluid pressure comes from

Topic 8.1 pictured a fluid as huge numbers of moving particles. When a particle hits a wall and bounces off, its momentum changes. By Newton's third law, the wall receives a small impulse pushing outward on it. One collision is tiny, but an enormous number of particles hit every square millimetre each second. Their combined effect is a steady average force on the wall. That force per unit area is the **fluid's pressure**.

This picture explains several facts at once:

- Particles move in all directions, so a fluid pushes on **every** surface it touches, including the top of its container.
- More particles in each cubic metre, or faster particles, mean more collisions each second and so **greater pressure**.
- For an **incompressible** liquid, squeezing harder raises the pressure but does not change its volume or density. That is why we can use one value of ρ at every depth below.

## Absolute pressure and gauge pressure

The total pressure at a point is the **absolute pressure**. Often it is easier to measure how much the pressure exceeds some **reference pressure** P₀. That difference is the **gauge pressure**:

**P = P₀ + P_gauge**

Near Earth's surface the reference is usually atmospheric pressure, P_atm = 1.0 × 10⁵ Pa (the course's value for 1 atm). A tyre gauge reading 2.2 × 10⁵ Pa means the absolute pressure in the tyre is 2.2 × 10⁵ + 1.0 × 10⁵ = 3.2 × 10⁵ Pa. A flat tyre has gauge pressure zero, not absolute pressure zero: the air inside is still at atmospheric pressure.

Gauge pressure can be negative. Air pumped partly out of a sealed jar has absolute pressure below 1.0 × 10⁵ Pa, so its gauge pressure is below zero.

## Pressure under a column of fluid

Why does pressure increase as you go deeper? Picture an imaginary vertical column of liquid inside a still tank, with cross-sectional area A and height h (Figure 2).

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-82-col-title p1-82-col-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-82-col-title">Forces on an imaginary column of liquid at rest</title>
<desc id="p1-82-col-desc">A tank of liquid with its surface marked near the top. Inside it, a dashed rectangle marks an imaginary column of liquid of height h and cross-sectional area A, with its top at the surface. Three vertical arrows act on the column: one pushing down on the top labelled P₀A, one from the middle pointing down labelled weight ρAhg, and a longer one pushing up on the bottom labelled P_bottom A. Pairs of short horizontal arrows on the left and right sides point inward and are labelled side forces cancel.</desc>
<defs><marker id="p1-82-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M120 40 V290 H440 V40" fill="none" stroke="#1d2b44" stroke-width="3"/>
<rect x="123" y="80" width="314" height="207" fill="#fdf6e3"/>
<path d="M123 80 H437" stroke="#1d2b44" stroke-width="1.5"/>
<text x="380" y="72" font-size="12" fill="#1d2b44">surface</text>
<rect x="240" y="80" width="80" height="150" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M280 30 L280 76" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-82-ah2)"/>
<path d="M280 140 L280 186" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-82-ah2)"/>
<path d="M280 282 L280 234" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-82-ah2)"/>
<path d="M205 120 L236 120 M205 190 L236 190" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p1-82-ah2)"/>
<path d="M355 120 L324 120 M355 190 L324 190" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p1-82-ah2)"/>
<path d="M395 80 V230" stroke="#1d2b44" stroke-width="1"/>
<path d="M390 80 H400 M390 230 H400" stroke="#1d2b44" stroke-width="1"/>
<g font-size="12" fill="#1d2b44">
<text x="290" y="40">P₀A (air above)</text>
<text x="288" y="164">weight ρAhg</text>
<text x="288" y="270">P_bottom A</text>
<text x="403" y="160">h</text>
<text x="250" y="222">area A</text>
<text x="130" y="105">side forces</text>
<text x="340" y="105">cancel</text>
</g>
</svg>
<figcaption>Figure 2. An imaginary column of liquid at rest. The side forces cancel in pairs. Vertically, the upward push on the bottom must balance the downward push on the top plus the column's weight, so the pressure at the bottom is greater by ρgh.</figcaption>
</figure>

The column is at rest, so the vertical forces on it balance (Newton's first law, Topic 2.4; Topic 8.3 develops this further):

1. Mass of the column: m = ρV = ρAh, so its weight is ρAhg.
2. Balance: P_bottom A = P₀A + ρAhg.
3. Divide by A: **P_bottom = P₀ + ρgh**.

So the gauge pressure at a depth h below the surface is

**P_gauge = ρgh**

Three things to notice:

- **h is the vertical depth** below the surface, not the distance along a sloping wall or tube.
- **A cancelled.** The pressure at a given depth does not depend on how wide the column is. The same liquid at the same depth gives the same pressure in a narrow tube, a wide tank or an odd-shaped vase, as long as the liquid is connected and at rest.
- Every **10 m of water** adds about 1000 × 9.8 × 10 = 98,000 Pa ≈ 1 atm of gauge pressure. A diver at 10 m feels roughly twice the absolute pressure felt at the surface.

## Graphs of pressure against depth

For an incompressible liquid, P = P₀ + ρgh is a straight line when P is plotted against depth h:

- **Vertical intercept** = P₀, the pressure at the surface.
- **Slope** = ρg. A denser liquid gives a steeper line.
- A graph of **gauge** pressure against depth has the same slope but starts at zero.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-82-graph-title p1-82-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-82-graph-title">Pressure against depth for water and for a denser liquid</title>
<desc id="p1-82-graph-desc">Pressure in units of 10 to the 5 pascals, from 0 to 2.4, against depth in metres from 0 to 10. A solid line for the absolute pressure in water starts at 1.0 at zero depth and rises in a straight line to 1.98 at 10 m. A dash-dot line for the absolute pressure in a denser liquid of density 1200 kilograms per cubic metre also starts at 1.0 but is steeper, reaching 2.18 at 10 m. A dashed line for the gauge pressure in water starts at 0 and rises parallel to the solid water line, reaching 0.98 at 10 m.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M158 290 V50 M246 290 V50 M334 290 V50 M422 290 V50 M510 290 V50"/>
<path d="M70 240 H510 M70 190 H510 M70 140 H510 M70 90 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="158" y="308">2</text><text x="246" y="308">4</text><text x="334" y="308">6</text><text x="422" y="308">8</text><text x="510" y="308">10</text>
<text x="295" y="330" font-size="13">depth below surface, h (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="244">0.5</text><text x="62" y="194">1.0</text><text x="62" y="144">1.5</text><text x="62" y="94">2.0</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">pressure, P (× 10⁵ Pa)</text>
<path d="M70 190 L510 92" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 190 L510 72.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="10 4 2 4"/>
<path d="M70 290 L510 192" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<g font-size="12" fill="#1d2b44">
<text x="300" y="98">denser liquid, absolute (dash-dot)</text>
<text x="330" y="160">water, absolute (solid)</text>
<text x="300" y="250">water, gauge (dashed)</text>
<text x="80" y="182">P₀ = 1.0 × 10⁵ Pa</text>
</g>
</svg>
<figcaption>Figure 3. For an incompressible liquid, pressure rises linearly with depth. Both absolute-pressure lines start at atmospheric pressure; the denser liquid (1200 kg/m³) has the steeper slope ρg. The gauge-pressure line for water is the solid line shifted down by 1.0 × 10⁵ Pa.</figcaption>
</figure>

**Background: air is different.** Air is compressible, so it is denser near the ground and thinner higher up. A graph of air pressure against height above the ground still falls as you climb, but it curves: it gets less steep with height because each metre of thinner air weighs less. You may be asked to sketch this shape, but not to calculate it.

## Worked example 2: a viewing window in the floor of a tank

**Question.** An aquarium tank holds fresh water 6.0 m deep. Its floor has a horizontal glass window 0.20 m by 0.30 m. Below the window is a viewing room at atmospheric pressure. Find (a) the gauge and absolute pressure at the window and (b) the net force of the water and air on the window.

1. (a) Gauge pressure: P_gauge = ρgh = 1000 kg/m³ × 9.8 m/s² × 6.0 m = 58,800 Pa ≈ **5.9 × 10⁴ Pa**.
2. Absolute pressure: P = P_atm + P_gauge = 1.0 × 10⁵ + 0.588 × 10⁵ = 1.588 × 10⁵ Pa ≈ **1.6 × 10⁵ Pa**.
3. (b) Window area: A = 0.20 × 0.30 = 0.060 m².
4. Water (with the air above it) pushes down: 1.588 × 10⁵ Pa × 0.060 m² = 9528 N.
5. Room air pushes up: 1.0 × 10⁵ Pa × 0.060 m² = 6000 N.
6. Net force = 9528 − 6000 = 3528 N ≈ **3.5 × 10³ N, downward**.

**Check.** Atmospheric pressure acts on both sides, so it cancels. The net force is simply gauge pressure × area: 58,800 × 0.060 = 3528 N. That shortcut works whenever the same reference pressure acts on the other side.

## Worked example 3: identifying a liquid from a pressure reading

**Question.** A gauge at the bottom of a beaker reads a gauge pressure of 6.2 kPa when the beaker holds 0.50 m of an unknown liquid. Find the liquid's density and compare it with water.

1. Rearrange P_gauge = ρgh: ρ = P_gauge / (gh).
2. ρ = 6200 Pa ÷ (9.8 m/s² × 0.50 m) = 1265 kg/m³ ≈ **1.3 × 10³ kg/m³**.
3. Water at the same depth would give 1000 × 9.8 × 0.50 = 4900 Pa = 4.9 kPa. The reading is higher, so the liquid is denser than water, by a factor 6.2 / 4.9 ≈ 1.3.

**Interpretation.** Glycerol has a density of about 1260 kg/m³, so the reading is consistent with glycerol. The beaker's width is not needed: only the depth matters.

## Comparing scenarios

- **Double the depth:** gauge pressure doubles (ρgh ∝ h), but absolute pressure does not. In water, P at 3.0 m is 1.29 × 10⁵ Pa and at 6.0 m is 1.59 × 10⁵ Pa: a factor of only 1.23.
- **Same depth, denser liquid:** gauge pressure rises in proportion to ρ.
- **Same depth, wider container:** no change in pressure. More liquid means a larger total force on a larger base, but the force per area is the same.

## Common misconceptions

- **"Pressure is a force."** Pressure is force per area, a scalar, in Pa. The force a pressure makes depends on the area and acts perpendicular to the surface.
- **"Pressure only pushes down."** Fluid pressure pushes on every surface in every orientation, including upward on the bottom of a submerged object.
- **"A bigger container has more pressure at the bottom."** At the same depth, pressure depends only on ρ, g and h (plus P₀), not on the amount of liquid.
- **"h is the length of the tube."** h is the vertical depth below the free surface. For a slanted tube, use the vertical drop only.
- **Mixing gauge and absolute pressure.** Read the question: a tyre gauge or a pressure-difference question wants gauge; "total pressure" wants absolute.
- **Using the whole force at an angle.** Only F⊥ counts in P = F⊥ / A.
- **"Doubling depth doubles the pressure."** True for gauge pressure only.
- **Forgetting units.** Depth in m, area in m², density in kg/m³. A depth in cm gives an answer 100 times too big.

## Where this leads

Topic 8.3 (Fluids and Newton's Laws) uses the pressure difference between the top and bottom of a submerged object to explain the buoyant force and why some objects float. Read the [Topic 8.3 study guide](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/8-2-pressure-practice/), then use the [revision notes](/advanced-course-resources/physics-1/8-2-pressure-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/8-2-pressure-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
