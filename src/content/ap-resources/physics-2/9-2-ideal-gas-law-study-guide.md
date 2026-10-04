---
resourceId: "mb-ap-phys2-9.2-study-guide"
title: "The Ideal Gas Law: Study Guide (Physics 2 9.2)"
description: "Learn the ideal gas model and PV = nRT = Nk_BT from first principles: units, factor-of-change reasoning, PV and PT graphs, and finding absolute zero by extrapolation."
course: "physics-2"
unit: 9
topics: ["9.2"]
resourceType: "study-guide"
prerequisites:
  - "Pressure and temperature explained by atomic motion (Topic 9.1)"
  - "Converting between litres and cubic metres, and between °C and K"
  - "Reading the gradient and intercept of a straight-line graph"
prerequisiteResources: ["mb-ap-phys2-9.1-study-guide"]
learningObjectives:
  - "State the assumptions of the classical ideal gas model and explain what each one means"
  - "Use PV = nRT and PV = Nk_BT with SI units and absolute temperature"
  - "Predict how one gas variable changes when others change by a known factor"
  - "Interpret graphs of pressure, volume and temperature, including gradients and intercepts"
  - "Find absolute zero by extrapolating a pressure–temperature graph to zero pressure"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.31 J/(mol·K), k_B = 1.38 × 10⁻²³ J/K, N_A = 6.02 × 10²³ mol⁻¹, 1 atm ≈ 1.0 × 10⁵ Pa. Convert °C to K by adding 273. Keep unrounded values until the final step"
related: ["mb-ap-phys2-9.2-revision-notes", "mb-ap-phys2-9.2-practice", "mb-ap-phys2-9.2-checklist"]
next: "mb-ap-phys2-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "An ideal gas is a model: random atomic velocities, negligible atomic volume, elastic collisions and no forces except during collisions."
  - "PV = nRT = Nk_BT links pressure, volume, amount of gas and absolute temperature."
  - "T must be in kelvin. P in Pa and V in m³ give PV in joules."
  - "For a fixed amount of gas, P₁V₁/T₁ = P₂V₂/T₂, so you can predict factors of change without finding n."
  - "Extrapolating a pressure–temperature line to zero pressure gives absolute zero, about −273 °C."
faqs:
  - question: "When should I use n and R, and when N and k_B?"
    answer: "They give the same result. Use PV = nRT when the amount of gas is in moles, and PV = Nk_BT when you are told the number of atoms or molecules. R = N_A k_B links the two."
  - question: "Does a real gas obey PV = nRT?"
    answer: "Approximately, when the gas is at low pressure and well above the temperature at which it condenses. Then the atoms are far apart and the model's assumptions are reasonable. At high pressure or near condensation, real gases deviate from the model."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## The ideal gas model

In Topic 9.1 you explained pressure and temperature with moving atoms. Now you need a simple model that turns that picture into one equation. Physicists call it the **classical ideal gas**. It makes four assumptions about the atoms:

1. **Random motion.** At any instant the velocities of the atoms point in random directions and have a spread of speeds. No direction is special.
2. **Tiny atoms.** The volume of the atoms themselves is negligible compared with the volume the gas fills. Almost all of the container is empty space.
3. **Elastic collisions.** When atoms hit each other or the walls, kinetic energy is conserved in the collision.
4. **No forces between collisions.** The only significant forces on an atom act during collisions. Between collisions each atom moves in a straight line at constant speed.

No real gas is exactly ideal. But many gases come close when they are at **low pressure** and **well above the temperature at which they condense**. Then the atoms are far apart, so their own volume and the attractions between them hardly matter. If a gas is squeezed to a very high pressure or cooled until it is about to liquefy, assumptions 2 and 4 stop being reasonable, and the model's predictions become less accurate.

## The ideal gas law

For an ideal gas, four quantities are linked:

- **P**, the pressure of the gas, in pascals (Pa = N/m²)
- **V**, the volume it fills, in cubic metres (m³)
- **n**, the amount of gas in moles (mol), or **N**, the number of atoms
- **T**, the **absolute** temperature, in kelvin (K)

The link is the **ideal gas law**:

**PV = nRT = N k_B T**

R = 8.31 J/(mol·K) is the universal gas constant. k_B = 1.38 × 10⁻²³ J/K is Boltzmann's constant. The two forms agree because N = n N_A and R = N_A k_B, where N_A = 6.02 × 10²³ mol⁻¹ is Avogadro's number. (Check: 6.02 × 10²³ × 1.38 × 10⁻²³ = 8.31.)

Units check: Pa × m³ = (N/m²) × m³ = N·m = J. So PV is measured in joules, and so is nRT, since (mol) × J/(mol·K) × K = J.

Three habits avoid most errors:

- **Kelvin only.** Add 273 to a Celsius temperature: 27 °C = 300 K. A temperature *difference* is the same in both scales, but a *ratio* is not.
- **SI volume.** 1 L = 10⁻³ m³, and 1 cm³ = 10⁻⁶ m³.
- **SI pressure.** 1 kPa = 10³ Pa, and 1 atm ≈ 1.0 × 10⁵ Pa.

## Using the law to predict changes

Often the amount of gas stays fixed: a sealed container, a balloon with no leaks, a gas under a piston. Then nR (or Nk_B) is constant, and

**P₁V₁ / T₁ = P₂V₂ / T₂**

You do not need n to use this form. Any unit for P or V works, as long as you use the same unit on both sides, but T must still be in kelvin.

Holding one more variable fixed gives three simple proportions:

| Held constant | Relationship | In words |
|---|---|---|
| n and T | P ∝ 1/V | halve the volume, double the pressure |
| n and P | V ∝ T | double the absolute temperature, double the volume |
| n and V | P ∝ T | double the absolute temperature, double the pressure |

**Factor-of-change reasoning.** Write each variable as "new = factor × old" and substitute. Suppose the pressure of a fixed amount of gas doubles and its absolute temperature triples. Rearranging gives V = nRT/P, so V changes by a factor of 3 ÷ 2 = 1.5. The volume grows by 50%.

The law also explains the kinetic picture. At fixed V, a higher T means faster atoms. They hit the walls harder and more often, so P rises. At fixed T, a smaller V means each atom reaches a wall more often, so P rises again.

## Graphs of gas behaviour

Graphs let you test the model with data and read off properties of the gas.

**Pressure against volume at constant temperature.** P = nRT/V, so the graph is a curve that falls steeply at small V and flattens out. It never touches either axis. Each curve is an **isotherm**. A larger value of nRT (a hotter gas, or more of it) gives a curve further from the origin.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ig-iso-title ig-iso-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ig-iso-title">Two isotherms for the same sample of ideal gas</title>
<desc id="ig-iso-desc">Pressure in units of 10 to the 5 pascals on the vertical axis from 0 to 4, volume in units of 10 to the minus 3 cubic metres on the horizontal axis from 0 to 4. A solid curve labelled T1, with PV equal to 200 joules, falls from 2.0 at volume 1.0 to 0.5 at volume 4.0. A dashed curve labelled T2 equals 2 T1, with PV equal to 400 joules, falls from 4.0 at volume 1.0 to 1.0 at volume 4.0 and lies above the solid curve everywhere. At volume 2.0 a vertical dotted line marks pressure 1.0 on the lower curve and 2.0 on the upper curve.</desc>
<defs><marker id="ig-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#ig-arr)"/>
<line x1="80" y1="340" x2="80" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#ig-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="190" y1="340" x2="190" y2="346" stroke="#1d2b44"/><text x="190" y="360">1.0</text>
<line x1="300" y1="340" x2="300" y2="346" stroke="#1d2b44"/><text x="300" y="360">2.0</text>
<line x1="410" y1="340" x2="410" y2="346" stroke="#1d2b44"/><text x="410" y="360">3.0</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">4.0</text>
<text x="300" y="385" font-size="13">Volume V (× 10⁻³ m³)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="270" x2="80" y2="270" stroke="#1d2b44"/><text x="70" y="274">1.0</text>
<line x1="74" y1="200" x2="80" y2="200" stroke="#1d2b44"/><text x="70" y="204">2.0</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">3.0</text>
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">4.0</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Pressure P (× 10⁵ Pa)</text>
<polyline points="190.0,200.0 217.5,228.0 245.0,246.7 272.5,260.0 300.0,270.0 327.5,277.8 355.0,284.0 382.5,289.1 410.0,293.3 437.5,296.9 465.0,300.0 492.5,302.7 520.0,305.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="190.0,60.0 217.5,116.0 245.0,153.3 272.5,180.0 300.0,200.0 327.5,215.6 355.0,228.0 382.5,238.2 410.0,246.7 437.5,253.8 465.0,260.0 492.5,265.3 520.0,270.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<line x1="300" y1="340" x2="300" y2="200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<circle cx="300" cy="270" r="4" fill="#1d2b44"/><circle cx="300" cy="200" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="530" y="326" text-anchor="end">T₁ (PV = 200 J), solid</text>
<text x="225" y="95">T₂ = 2T₁ (PV = 400 J), dashed</text>
<text x="308" y="196">2.0</text><text x="308" y="266">1.0</text>
</g>
</svg>
<figcaption>Figure 1. Two isotherms for the same sample of gas. The dashed curve is at twice the absolute temperature of the solid curve. At the same volume, 2.0 × 10⁻³ m³, the hotter gas has twice the pressure (2.0 × 10⁵ Pa instead of 1.0 × 10⁵ Pa), as P ∝ T predicts.</figcaption>
</figure>

**Pressure against 1/V at constant temperature.** Because P = (nRT) × (1/V), this graph is a **straight line through the origin** with gradient nRT. Plotting P against 1/V is a good way to turn a curve into a line you can test, and the gradient tells you nRT.

**Volume or pressure against absolute temperature.** At constant P, V = (nR/P)T: a straight line through the origin with gradient nR/P. At constant V, P = (nR/V)T: a straight line through the origin with gradient nR/V. If you measure the gradient and know V, you can find n.

**The same graphs with T in °C.** The lines are still straight, but they no longer pass through the origin. They cross the temperature axis at about −273 °C. That point is the key to the next section.

## Absolute zero from a graph

Take a fixed amount of gas in a rigid container and measure its pressure at several temperatures. Plot P against T in °C. The points lie close to a straight line. Extend (**extrapolate**) the line to lower temperatures until P = 0. The temperature where it meets the axis is **absolute zero**: the temperature at which an ideal gas would have zero pressure. Its accepted value is 0 K = −273.15 °C.

You cannot actually cool a real gas to zero pressure. Long before that, it would liquefy and the model would no longer apply. That is why the value comes from extrapolation, not from a measurement at that temperature. Different gases, different amounts and different container volumes give lines with different gradients, but they all extrapolate to about the same temperature. This is strong evidence that absolute zero is a property of temperature itself, not of one particular gas.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ig-pt-title ig-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ig-pt-title">Pressure against Celsius temperature for a gas at constant volume, extrapolated to zero pressure</title>
<desc id="ig-pt-desc">Pressure in kilopascals on the vertical axis from 0 to 120, temperature in degrees Celsius on the horizontal axis from minus 300 to 100. Six measured points, shown as filled squares, lie between 0 and 100 degrees Celsius with pressures from about 80 to 110 kilopascals. A solid best-fit line runs through them from 80.3 kilopascals at 0 degrees to 109.4 kilopascals at 100 degrees. A dashed extension of the line continues down and to the left and meets the temperature axis at about minus 276 degrees Celsius, which is labelled.</desc>
<defs><marker id="ig-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="540" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#ig-arr2)"/>
<line x1="410" y1="345" x2="410" y2="30" stroke="#1d2b44" stroke-width="2" marker-end="url(#ig-arr2)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="80" y1="340" x2="80" y2="346" stroke="#1d2b44"/><text x="80" y="360">−300</text>
<line x1="190" y1="340" x2="190" y2="346" stroke="#1d2b44"/><text x="190" y="360">−200</text>
<line x1="300" y1="340" x2="300" y2="346" stroke="#1d2b44"/><text x="300" y="360">−100</text>
<text x="410" y="360">0</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">100</text>
<text x="300" y="385" font-size="13">Temperature (°C)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="404" y1="240" x2="410" y2="240" stroke="#1d2b44"/><text x="400" y="244">40</text>
<line x1="404" y1="140" x2="410" y2="140" stroke="#1d2b44"/><text x="400" y="144">80</text>
<line x1="404" y1="40" x2="410" y2="40" stroke="#1d2b44"/><text x="400" y="44">120</text>
</g>
<text x="440" y="28" font-size="13" fill="#1d2b44">Pressure P (kPa)</text>
<line x1="106.5" y1="340" x2="410" y2="139.25" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="410" y1="139.25" x2="520" y2="66.5" stroke="#1d2b44" stroke-width="2.5"/>
<g fill="#1d2b44">
<rect x="406" y="134.5" width="8" height="8"/><rect x="428" y="121.2" width="8" height="8"/><rect x="450" y="106" width="8" height="8"/>
<rect x="472" y="92" width="8" height="8"/><rect x="494" y="77.2" width="8" height="8"/><rect x="516" y="62" width="8" height="8"/>
</g>
<circle cx="106.5" cy="340" r="5" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="112" y="322" font-size="12" fill="#1d2b44">P = 0 at about −276 °C</text>
<text x="200" y="230" font-size="12" fill="#1d2b44">dashed: extrapolation</text>
<text x="440" y="160" font-size="12" fill="#1d2b44">solid: best-fit line</text>
</svg>
<figcaption>Figure 2. Fictional data for a rigid flask of gas (squares). The best-fit line through the measured points (solid) is extended by extrapolation (dashed) to zero pressure. It meets the temperature axis close to the accepted absolute zero, −273 °C. See Worked example 2.</figcaption>
</figure>

## Worked example 1: a sealed tank is heated

**Question.** A rigid, sealed tank of volume 2.0 × 10⁻² m³ holds gas at 2.5 × 10⁵ Pa and 27 °C. (a) How many moles of gas are in the tank? (b) How many atoms? (c) The tank is left in the sun and warms to 87 °C. What is the new pressure?

1. Convert the temperature: T₁ = 27 + 273 = 300 K.
2. (a) Rearrange PV = nRT: n = PV/(RT) = (2.5 × 10⁵ Pa)(2.0 × 10⁻² m³) ÷ [(8.31 J/(mol·K))(300 K)] = 5000 J ÷ 2493 J/mol = 2.006 mol ≈ **2.0 mol**.
3. (b) N = n N_A = 2.006 × 6.02 × 10²³ = **1.2 × 10²⁴ atoms**. (Check with PV = Nk_BT: N = 5000 J ÷ [(1.38 × 10⁻²³ J/K)(300 K)] = 1.21 × 10²⁴. The two agree.)
4. (c) The tank is rigid and sealed, so V and n are fixed and P ∝ T. T₂ = 87 + 273 = 360 K.
5. P₂ = P₁ × T₂/T₁ = (2.5 × 10⁵ Pa)(360 K ÷ 300 K) = **3.0 × 10⁵ Pa**.

**Interpretation and check.** The absolute temperature rose by a factor of 1.2, so the pressure rose by the same factor. If you had used Celsius, you would get a factor of 87/27 = 3.2 and a pressure of 8.1 × 10⁵ Pa, more than three times too big. A 60-degree rise on a summer day does not triple the pressure in a tank. That sanity check tells you Celsius ratios are wrong.

## Worked example 2: finding absolute zero from data

**Question.** A student traps gas in a rigid 1.00 × 10⁻³ m³ flask and measures its pressure at six temperatures (fictional data):

| T (°C) | 0 | 20 | 40 | 60 | 80 | 100 |
|---|---|---|---|---|---|---|
| P (kPa) | 80.6 | 85.9 | 92.0 | 97.6 | 103.5 | 109.6 |

(a) Use a graph to estimate absolute zero in °C. (b) Use the gradient to find the amount of gas in the flask.

1. **Plot** P (vertical) against T in °C (horizontal), as in Figure 2. Choose a temperature scale that reaches −300 °C, so there is room to extrapolate. The points lie close to a straight line.
2. **Draw the best-fit line** through the points, not through the first and last points only. This line passes through (0 °C, 80.3 kPa) and (100 °C, 109.4 kPa).
3. **Gradient:** (109.4 − 80.3) kPa ÷ (100 − 0) °C = 0.291 kPa/°C.
4. **Extrapolate** to P = 0. Starting from 80.3 kPa at 0 °C, the pressure must fall by 80.3 kPa. That takes 80.3 ÷ 0.291 = 275.9 °C. So the line meets the axis at about **−276 °C**.
5. **Compare** with the accepted value: |−275.9 − (−273.15)| ÷ 273.15 × 100% ≈ 1.0%. That is good agreement for an experiment like this.
6. (b) At constant V, P = (nR/V)T, so the gradient equals nR/V. A step of 1 °C is the same as a step of 1 K, so the gradient is 0.291 kPa/K = 291 Pa/K.
7. n = gradient × V ÷ R = (291 Pa/K)(1.00 × 10⁻³ m³) ÷ 8.31 J/(mol·K) = **0.0350 mol**.

**Interpretation.** The intercept tells you about temperature in general. The gradient tells you about this particular sample: a flask with more gas, or a smaller flask, would give a steeper line that still meets the axis near −273 °C.

## Common misconceptions

- **Using Celsius in PV = nRT.** The law needs absolute temperature. 20 °C is not "twice as hot" as 10 °C; in kelvin the ratio is 293/283 ≈ 1.04.
- **"Doubling the volume always halves the pressure."** Only if n and T stay the same. If the gas also warms, the pressure falls by less.
- **"An ideal gas has no volume."** The *atoms* have negligible volume compared with the container. The *gas* fills the whole container, and V in the law is the container's volume.
- **"Ideal gas atoms never collide."** They do collide, elastically. The model says there are no forces between atoms *except* during collisions.
- **Mixing n and N.** n is in moles and goes with R. N is a count of atoms and goes with k_B. Using N with R gives an answer 6.02 × 10²³ times too big.
- **Forgetting unit conversions.** Litres and kilopascals are fine in ratio form (P₁V₁/T₁ = P₂V₂/T₂), but in PV = nRT you need m³ and Pa.
- **"Absolute zero was measured by cooling a gas until its pressure vanished."** Real gases condense first. Absolute zero is found by extrapolating the straight-line trend.

## Where this leads

Topic 9.1 explained P and T in terms of atoms; this topic linked them in one law. In [Topic 9.3, thermal energy transfer and equilibrium](/advanced-course-resources/physics-2/9-3-thermal-energy-transfer-equilibrium-study-guide/), you will see how energy moves between systems at different temperatures. In Topic 9.4 you will combine PV = nRT with energy conservation, for example U = (3/2)nRT = (3/2)PV. Test yourself with the [practice questions](/advanced-course-resources/physics-2/9-2-ideal-gas-law-practice/), then use the [revision notes](/advanced-course-resources/physics-2/9-2-ideal-gas-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/9-2-ideal-gas-law-checklist/) to consolidate. To review the atomic picture first, go back to the [Topic 9.1 study guide](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-study-guide/).
