---
resourceId: "mb-ap-chem-3.4-study-guide"
title: "Ideal Gas Law: Study Guide (Chemistry 3.4)"
description: "Learn how PV = nRT links pressure, volume, temperature and amount of a gas, how to read gas-law graphs, and how partial pressures and mole fractions work in gas mixtures."
course: "chemistry"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Converting between mass and moles (Topic 1.1)"
  - "Particle model of a gas (Topic 3.3)"
  - "Rearranging an equation and converting units"
prerequisiteResources: ["mb-ap-chem-3.3-study-guide"]
learningObjectives:
  - "Use PV = nRT to calculate any one of pressure, volume, temperature or amount of gas, with consistent units"
  - "Predict how one gas property changes when another changes and the rest are held constant"
  - "Interpret and sketch graphs of P, V, T and n for an ideal gas"
  - "Calculate partial pressures from mole fractions and total pressure, and total pressure from partial pressures"
  - "Find the molar mass of a gas from its density, temperature and pressure"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 0.08206 L atm mol⁻¹ K⁻¹ = 62.36 L torr mol⁻¹ K⁻¹ = 8.314 J mol⁻¹ K⁻¹. 1 atm = 760 torr. K = °C + 273.15. Keep unrounded values until the final step"
related: ["mb-ap-chem-3.4-revision-notes", "mb-ap-chem-3.4-practice", "mb-ap-chem-3.4-checklist"]
next: "mb-ap-chem-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "PV = nRT links the pressure, volume, temperature (in kelvin) and amount of an ideal gas."
  - "Choose the value of R whose units match your pressure and volume units, and always use kelvin."
  - "With two variables held fixed, the other two are either directly proportional or inversely proportional."
  - "In a mixture, each gas exerts its own partial pressure: P_A = X_A × P_total, and the partial pressures add up to the total."
  - "A gas's molar mass follows from its density: M = dRT / P."
faqs:
  - question: "Why must temperature be in kelvin?"
    answer: "The gas laws are proportional to absolute temperature, which is zero at −273.15 °C. Doubling a Celsius temperature does not double the kinetic energy of the particles; doubling a kelvin temperature does."
  - question: "Which value of R should I use?"
    answer: "Match R to your units. With pressure in atm and volume in L, use 0.08206 L atm mol⁻¹ K⁻¹. With torr, use 62.36 L torr mol⁻¹ K⁻¹. In energy calculations, use 8.314 J mol⁻¹ K⁻¹."
  - question: "Does a heavier gas exert a larger partial pressure?"
    answer: "No. At a given temperature and volume, partial pressure depends only on the number of moles of that gas, not on its molar mass."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the ideal gas law says

Topic 3.3 described a gas as particles that are far apart and always moving. Four measurable properties describe a sample of gas:

- **P**, pressure (atm, torr or kPa), from particles hitting the walls;
- **V**, volume (L), the space the gas fills;
- **T**, absolute temperature (K), which sets how fast the particles move;
- **n**, amount of gas (mol), how many particles there are.

For an **ideal gas** these four are linked by one equation:

> **PV = nRT**

R is the gas constant. Its value depends on the units you use:

| Pressure unit | Volume unit | R |
|---|---|---|
| atm | L | 0.08206 L atm mol⁻¹ K⁻¹ |
| torr (mm Hg) | L | 62.36 L torr mol⁻¹ K⁻¹ |
| kPa | L | 8.314 L kPa mol⁻¹ K⁻¹ (the same number as 8.314 J mol⁻¹ K⁻¹) |

Three habits prevent most mistakes:

1. **Convert temperature to kelvin first:** K = °C + 273.15. A gas at 0 °C is not at "zero temperature"; it is at 273.15 K.
2. **Match R to your units.** 1 atm = 760 torr. If the pressure is in torr, either convert it to atm or use 62.36.
3. **Volume in litres.** 1 L = 1000 mL = 1000 cm³.

An ideal gas is a model: its particles have no volume of their own and do not attract each other. Real gases behave almost ideally at moderate temperatures and low pressures. Topic 3.6 looks at when the model fails.

## Reading PV = nRT as relationships

You often do not need a full calculation. Hold two variables fixed and look at how the other two are linked.

| Held constant | Relationship | In words |
|---|---|---|
| n and T | P ∝ 1/V | Halve the volume, double the pressure |
| n and P | V ∝ T | Double the kelvin temperature, double the volume |
| n and V | P ∝ T | Double the kelvin temperature, double the pressure |
| P and T | V ∝ n | Double the amount, double the volume |

Each line has a particle explanation. Squeezing the same particles into half the space means twice as many wall collisions each second, so pressure doubles. Heating makes particles move faster, so they hit the walls more often and harder; at fixed volume the pressure rises, and if the pressure is fixed the gas must expand.

When conditions change for a fixed amount of gas, rearrange PV = nRT so that the constants are on one side:

> **P₁V₁ / T₁ = P₂V₂ / T₂** (fixed n)

This saves you from calculating n at all.

## Graphs of gas behaviour

<figure>
<svg viewBox="0 0 640 210" role="img" aria-labelledby="gas-graphs-title gas-graphs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gas-graphs-title">Three graphs of ideal gas behaviour</title>
<desc id="gas-graphs-desc">Graph (a): pressure against volume for a fixed amount of gas at constant temperature. The curve starts high at small volume and falls steeply, then flattens towards the volume axis without touching it. Graph (b): pressure against one over volume, at the same conditions, is a straight line through the origin. Graph (c): volume against temperature in degrees Celsius at constant pressure. A solid straight line covers measured temperatures above 0 degrees Celsius; a dashed extension continues the line down to zero volume at minus 273 degrees Celsius, marked with an open circle on the temperature axis.</desc>
<defs><marker id="ax34" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M40 170 H205" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<path d="M40 170 V25" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<text x="120.0" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">Volume, V</text>
<text x="28" y="100.0" text-anchor="middle" font-size="13" fill="#1d2b44">P</text>
<text x="120.0" y="18" text-anchor="middle" font-size="12" fill="#1d2b44">(a) fixed n and T</text>
<path d="M56.7 37.6 L58.5 50.3 L60.3 60.8 L62.0 69.6 L63.8 77.1 L65.6 83.6 L67.4 89.2 L69.2 94.1 L70.9 98.5 L72.7 102.4 L74.5 105.9 L76.3 109.0 L78.0 111.8 L79.8 114.4 L81.6 116.8 L83.4 119.0 L85.2 121.0 L86.9 122.9 L88.7 124.6 L90.5 126.2 L92.3 127.7 L94.0 129.1 L95.8 130.4 L97.6 131.6 L99.4 132.7 L101.2 133.8 L102.9 134.8 L104.7 135.8 L106.5 136.7 L108.3 137.6 L110.0 138.4 L111.8 139.2 L113.6 139.9 L115.4 140.6 L117.2 141.3 L118.9 142.0 L120.7 142.6 L122.5 143.2 L124.3 143.7 L126.0 144.3 L127.8 144.8 L129.6 145.3 L131.4 145.8 L133.2 146.3 L134.9 146.7 L136.7 147.1 L138.5 147.5 L140.3 147.9 L142.0 148.3 L143.8 148.7 L145.6 149.0 L147.4 149.4 L149.2 149.7 L150.9 150.1 L152.7 150.4 L154.5 150.7 L156.3 151.0 L158.0 151.3 L159.8 151.5 L161.6 151.8 L163.4 152.1 L165.2 152.3 L166.9 152.6 L168.7 152.8 L170.5 153.0 L172.3 153.3 L174.0 153.5 L175.8 153.7 L177.6 153.9 L179.4 154.1 L181.2 154.3 L182.9 154.5 L184.7 154.7 L186.5 154.9 L188.3 155.1 L190.0 155.3 L191.8 155.4 L193.6 155.6 L195.4 155.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M255 170 H420" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<path d="M255 170 V25" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<text x="335.0" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">1 / V</text>
<text x="243" y="100.0" text-anchor="middle" font-size="13" fill="#1d2b44">P</text>
<text x="335.0" y="18" text-anchor="middle" font-size="12" fill="#1d2b44">(b) fixed n and T</text>
<path d="M255 170 L400.5 45.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M470 170 H635" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<path d="M470 170 V25" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ax34)"/>
<text x="550.0" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">Temperature (°C)</text>
<text x="458" y="100.0" text-anchor="middle" font-size="13" fill="#1d2b44">V</text>
<text x="550.0" y="18" text-anchor="middle" font-size="12" fill="#1d2b44">(c) fixed n and P</text>
<path d="M480.2 170.0 L584.3 81.6" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M584.3 81.6 L630.0 42.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M584.3 170 V30" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="587.3" y="38" font-size="11" fill="#1d2b44">0 °C</text>
<circle cx="480.2" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="476.2" y="184" font-size="11" fill="#1d2b44">−273 °C</text>
</svg>
<figcaption>Figure 1. (a) Pressure and volume are inversely proportional, so P against V is a curve. (b) Plotting P against 1/V turns the same data into a straight line through the origin. (c) Volume rises linearly with temperature. Extended back (dashed), the line reaches zero volume at −273.15 °C, which is 0 K.</figcaption>
</figure>

How to read these graphs:

- **A straight line through the origin** means direct proportion. In kelvin, V against T and P against T both give one. So does V against n.
- **A curve that falls and flattens** (graph a) means inverse proportion. Plot one variable against the reciprocal of the other to get a straight line (graph b).
- **On a Celsius scale**, V against T is still a straight line, but it crosses the temperature axis at −273.15 °C, not at zero. That intercept is the reason the kelvin scale starts there.
- **The slope means something.** For V against T(K) at fixed n and P, the slope is nR/P. A steeper line means more gas or a lower pressure.

## Mixtures of gases: partial pressures

Air is a mixture, and so is the gas inside most reaction vessels. In an ideal mixture, each gas behaves as if the others were not there. The pressure each gas would exert on its own in the same volume and temperature is its **partial pressure**.

Two rules follow (Dalton's law of partial pressures):

- **The total pressure is the sum of the partial pressures:** P_total = P_A + P_B + P_C + …
- **Each partial pressure is proportional to the gas's share of the moles:** P_A = X_A × P_total, where the **mole fraction** X_A = n_A ÷ n_total.

Mole fractions have no unit, and all the mole fractions in a mixture add up to 1. Note that X uses **moles**, not masses. A gram of hydrogen contributes far more particles, and so far more pressure, than a gram of carbon dioxide.

You can also find any partial pressure directly: P_A = n_A RT / V. This works because each gas fills the whole container.

## Molar mass from gas density

Combine PV = nRT with n = m / M. Since density d = m / V:

> **M = dRT / P**

For example, a gas with density 0.716 g L⁻¹ at 0 °C and 1.00 atm has M = 0.716 × 0.08206 × 273.15 ÷ 1.00 = 16.05 g mol⁻¹, which matches methane, CH₄ (16.04 g mol⁻¹). One mole of any ideal gas at 273.15 K and 1 atm fills 22.4 L; you can use this as a quick check, but PV = nRT works at every temperature and pressure.

## Worked example 1: amount and mass of gas in a cylinder

**Question.** A 12.0 L steel cylinder holds argon at 25 °C and a pressure of 8.50 atm. What mass of argon does it contain? (Ar = 39.95 g mol⁻¹)

1. Temperature in kelvin: T = 25 + 273.15 = 298.15 K.
2. Units: P in atm and V in L, so use R = 0.08206 L atm mol⁻¹ K⁻¹.
3. Rearrange: n = PV / RT = (8.50 atm × 12.0 L) ÷ (0.08206 L atm mol⁻¹ K⁻¹ × 298.15 K).
4. n = 102.0 ÷ 24.466 = 4.169 mol. (The units L, atm and K cancel, leaving mol.)
5. Mass: m = n × M = 4.169 mol × 39.95 g mol⁻¹ = 166.6 g.

**Answer.** 167 g of argon (3 significant figures).

**Check.** At 1 atm and 25 °C, 12.0 L would hold about 0.49 mol. The pressure here is 8.5 times higher, so about 8.5 × 0.49 ≈ 4.2 mol is sensible.

## Worked example 2: a balloon that rises and cools

**Question.** A sealed balloon holds 3.20 L of helium at 745 torr and 22 °C. It rises to where the pressure is 0.550 atm and the temperature is −18 °C. What is its new volume? Assume no gas escapes.

1. The amount of gas is fixed, so use P₁V₁ / T₁ = P₂V₂ / T₂, rearranged: V₂ = V₁ × (P₁ / P₂) × (T₂ / T₁).
2. Same pressure units: P₁ = 745 torr ÷ 760 torr atm⁻¹ = 0.9803 atm.
3. Kelvin: T₁ = 22 + 273.15 = 295.15 K; T₂ = −18 + 273.15 = 255.15 K.
4. Pressure factor: 0.9803 ÷ 0.550 = 1.782 (lower pressure, so the gas expands).
5. Temperature factor: 255.15 ÷ 295.15 = 0.8645 (cooler, so the gas contracts a little).
6. V₂ = 3.20 L × 1.782 × 0.8645 = 4.93 L.

**Answer.** 4.93 L.

**Check each factor's direction.** Pressure fell by almost half, so the volume should rise a lot; cooling should shrink it a little. The final answer is larger than 3.20 L, as expected. If you had used Celsius, the temperature factor would be −18 ÷ 22, giving a negative volume, which is impossible.

## Worked example 3: partial pressures in a mixture

**Question.** A 5.00 L flask at 300. K contains 0.150 mol N₂, 0.0500 mol O₂ and 0.0100 mol CO₂. Find the total pressure, the mole fraction of each gas and each partial pressure.

1. Total amount: n_total = 0.150 + 0.0500 + 0.0100 = 0.210 mol.
2. Total pressure: P_total = n_total RT / V = 0.210 × 0.08206 × 300. ÷ 5.00 = 1.034 atm.
3. Mole fractions: X(N₂) = 0.150 ÷ 0.210 = 0.714; X(O₂) = 0.0500 ÷ 0.210 = 0.238; X(CO₂) = 0.0100 ÷ 0.210 = 0.0476.
4. Partial pressures, P = X × P_total: N₂ 0.739 atm; O₂ 0.246 atm; CO₂ 0.0492 atm.

**Check.** 0.739 + 0.246 + 0.0492 = 1.034 atm, equal to the total. The mole fractions add up to 1.000. You can also check one value directly: P(N₂) = 0.150 × 0.08206 × 300. ÷ 5.00 = 0.739 atm.

**Answer.** P_total = 1.03 atm; partial pressures N₂ 0.739 atm, O₂ 0.246 atm, CO₂ 0.0492 atm.

## Common misconceptions

- **Using Celsius in PV = nRT.** Always convert to kelvin. Warming a gas from 10 °C to 20 °C does not double its volume; it raises it by a factor of 293.15 ÷ 283.15 = 1.035, about 3.5 per cent.
- **Mixing units.** Pressure in torr with R = 0.08206 gives an answer 760 times too large. Check that the units of R cancel.
- **"A heavier gas exerts more pressure."** At the same n, V and T, every ideal gas exerts the same pressure. Partial pressure depends on moles, not mass.
- **Mole fraction from masses.** X uses moles. Convert grams to moles first.
- **Reading a curve as a straight line.** P against V at constant T is a curve. Only P against 1/V is linear.
- **Forgetting what is held constant.** "Pressure is proportional to temperature" is true only if n and V do not change.
- **Rounding mid-calculation.** Rounding T to 298 K or P₁ to 0.98 atm can shift the last significant figure. Round once, at the end.

## Where this leads

The ideal gas law describes *what* gases do. Next, [Topic 3.5, Kinetic Molecular Theory](/advanced-course-resources/chemistry/3-5-kinetic-molecular-theory-study-guide/), explains *why*, using particle speeds and kinetic energy. Topic 3.6 then shows when real gases depart from PV = nRT, and in Unit 4 you will use gas volumes in stoichiometry. Try the [practice questions](/advanced-course-resources/chemistry/3-4-ideal-gas-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-4-ideal-gas-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-4-ideal-gas-law-checklist/) to consolidate.
