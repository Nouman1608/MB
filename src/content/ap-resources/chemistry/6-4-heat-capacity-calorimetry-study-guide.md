---
resourceId: "mb-ap-chem-6.4-study-guide"
title: "Heat Capacity and Calorimetry: Study Guide (Chemistry 6.4)"
description: "Calculate the heat absorbed or released when a substance warms or cools with q = mcΔT, use specific and molar heat capacities, and analyse calorimetry data using conservation of energy."
course: "chemistry"
unit: 6
topics: ["6.4"]
resourceType: "study-guide"
prerequisites:
  - "Heat transfer and thermal equilibrium (Topic 6.3)"
  - "Endothermic and exothermic processes, read from temperature changes (Topic 6.1)"
  - "Converting mass to moles, n = m / M (Topic 1.1)"
prerequisiteResources: ["mb-ap-chem-6.3-study-guide"]
learningObjectives:
  - "Calculate the heat absorbed or released by a substance that is heated or cooled, using q = mcΔT with the correct sign"
  - "Explain why equal masses of different substances change temperature by different amounts when they gain the same energy"
  - "Convert between specific heat capacity and molar heat capacity, and use the heat capacity of a whole object"
  - "Use conservation of energy (energy lost = energy gained) to analyse a calorimetry experiment"
  - "Use the temperature change in a dissolution calorimeter to decide the direction of energy flow and calculate the energy involved"
skills: ["2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Specific heat capacity of water and dilute solutions: 4.18 J g⁻¹ °C⁻¹. A change of 1 °C equals a change of 1 K. Keep unrounded values until the end; the temperature change usually limits the significant figures"
related: ["mb-ap-chem-6.4-revision-notes", "mb-ap-chem-6.4-practice", "mb-ap-chem-6.4-checklist"]
next: "mb-ap-chem-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "q = mcΔT gives the heat absorbed (q positive) or released (q negative) by a substance that changes temperature without changing phase. ΔT = T(final) − T(initial)."
  - "Specific heat capacity c (J g⁻¹ °C⁻¹) is the energy needed to warm 1 g by 1 °C. Molar heat capacity (J mol⁻¹ °C⁻¹) is the energy to warm 1 mol by 1 °C: multiply c by the molar mass."
  - "The same energy gives a much larger temperature change in a substance with a small c. Water has an unusually large c (4.18 J g⁻¹ °C⁻¹)."
  - "Energy is conserved (first law of thermodynamics). In an insulated calorimeter, the heat released by one part equals the heat absorbed by the rest: q(lost) + q(gained) = 0."
  - "If the mixture in a dissolution calorimeter warms, dissolving released energy (exothermic); if it cools, dissolving absorbed energy (endothermic)."
faqs:
  - question: "Do I use °C or K for ΔT?"
    answer: "Either. A kelvin and a degree Celsius are the same size, so a change of 5.0 °C is a change of 5.0 K. You only need kelvin when you use a temperature itself, not a difference, for example in the gas laws or kinetic energy ratios."
  - question: "Why is the q of the reaction the opposite sign of the q of the water?"
    answer: "Energy is conserved. If the water in a calorimeter gains 1200 J, that energy came from the process inside it, which therefore lost 1200 J. Gain is positive and loss is negative, so the two values have opposite signs."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From direction to amount

In [Topic 6.3](/advanced-course-resources/chemistry/6-3-heat-transfer-thermal-equilibrium-study-guide/) you explained *which way* energy moves when a warmer body meets a cooler one. This topic asks *how much*.

The amount of energy transferred as heat has the symbol **q** and is measured in joules (J) or kilojoules (1 kJ = 1000 J). Its sign tells you the direction for the system you have chosen:

- **q positive**: the system **absorbs** heat. Heating a system increases its energy.
- **q negative**: the system **releases** heat. Cooling a system decreases its energy.

A system can change its energy in three main ways: by **heating or cooling** (this topic), by a **phase change** (Topic 6.5) and by a **chemical reaction** (Topics 6.6 to 6.9). Here the substance stays in the same phase and nothing reacts; only its temperature changes.

## Specific heat capacity and q = mcΔT

How much energy does it take to warm something up? It depends on three things:

1. **How much** substance there is (its mass, m). Twice the mass needs twice the energy for the same temperature rise.
2. **How big** the temperature change is (ΔT). A 20 °C rise needs twice the energy of a 10 °C rise.
3. **What** the substance is. This is captured by its **specific heat capacity, c**: the energy needed to raise the temperature of **1 g** of the substance by **1 °C**.

Putting these together gives the heat transfer equation:

> **q = mcΔT**, where q is in J, m in g, c in J g⁻¹ °C⁻¹ and ΔT = T(final) − T(initial) in °C.

Because 1 °C and 1 K are the same size, the units J g⁻¹ °C⁻¹ and J g⁻¹ K⁻¹ mean exactly the same thing. ΔT carries the sign: a temperature rise gives a positive q (heat absorbed), a fall gives a negative q (heat released).

| Substance (at about 25 °C) | c (J g⁻¹ °C⁻¹) |
|---|---|
| liquid water | 4.18 |
| ethanol | 2.44 |
| aluminium | 0.897 |
| iron | 0.449 |
| copper | 0.385 |

Water's specific heat capacity is unusually large. That is why it is used to carry energy in heating systems, and why the water in a calorimeter is a good "energy store" to measure with.

## Equal masses, different temperature changes

Give the same amount of energy to equal masses of two substances and they will **not** reach the same temperature. Rearranging q = mcΔT:

ΔT = q / (mc)

For a fixed q and m, ΔT is inversely proportional to c. Figure 1 shows 100.0 g of water, aluminium and copper each receiving up to 2.00 kJ.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="hc-fig1-title hc-fig1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hc-fig1-title">Temperature rise against energy added for 100.0 g of water, aluminium and copper</title>
<desc id="hc-fig1-desc">A graph with energy added from 0 to 2.0 kilojoules on the horizontal axis and temperature rise from 0 to 60 degrees Celsius on the vertical axis. Three straight lines start at the origin. The copper line is steepest and reaches about 52 degrees at 2.0 kilojoules. The aluminium line reaches about 22.3 degrees. The water line is nearly flat and reaches about 4.8 degrees.</desc>
<defs><marker id="hcf1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="260" x2="585" y2="260" stroke="#1d2b44" stroke-width="2" marker-end="url(#hcf1a)"/>
<line x1="80" y1="260" x2="80" y2="22" stroke="#1d2b44" stroke-width="2" marker-end="url(#hcf1a)"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="260" x2="80" y2="266"/><line x1="200" y1="260" x2="200" y2="266"/><line x1="320" y1="260" x2="320" y2="266"/><line x1="440" y1="260" x2="440" y2="266"/><line x1="560" y1="260" x2="560" y2="266"/>
<line x1="74" y1="223.3" x2="80" y2="223.3"/><line x1="74" y1="186.7" x2="80" y2="186.7"/><line x1="74" y1="150" x2="80" y2="150"/><line x1="74" y1="113.3" x2="80" y2="113.3"/><line x1="74" y1="76.7" x2="80" y2="76.7"/><line x1="74" y1="40" x2="80" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="282">0</text><text x="200" y="282">0.5</text><text x="320" y="282">1.0</text><text x="440" y="282">1.5</text><text x="560" y="282">2.0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="264">0</text><text x="70" y="227.3">10</text><text x="70" y="190.7">20</text><text x="70" y="154">30</text><text x="70" y="117.3">40</text><text x="70" y="80.7">50</text><text x="70" y="44">60</text>
</g>
<text x="320" y="308" text-anchor="middle" font-size="13" fill="#1d2b44">Energy added, q (kJ)</text>
<text x="24" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 24 150)">Temperature rise, ΔT (°C)</text>
<line x1="80" y1="260" x2="560" y2="69.5" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="260" x2="560" y2="178.2" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<line x1="80" y1="260" x2="560" y2="242.5" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4"/>
<text x="566" y="73" font-size="12" fill="#1d2b44">copper</text>
<text x="566" y="86" font-size="12" fill="#1d2b44">≈ 52 °C</text>
<text x="566" y="176" font-size="12" fill="#1d2b44">aluminium</text>
<text x="566" y="189" font-size="12" fill="#1d2b44">22.3 °C</text>
<text x="566" y="238" font-size="12" fill="#1d2b44">water</text>
<text x="566" y="251" font-size="12" fill="#1d2b44">4.78 °C</text>
</svg>
<figcaption>Figure 1. Each line is ΔT = q / (mc) for m = 100.0 g. Copper (solid, c = 0.385) heats up most for the same energy; water (dotted, c = 4.18) heats up least; aluminium (dashed, c = 0.897) is in between. The slope of each line is 1/(mc).</figcaption>
</figure>

The steeper the line, the smaller the specific heat capacity. Two kilojoules warm 100.0 g of copper by about 52 °C but the same mass of water by only 4.78 °C.

## Molar heat capacity and the heat capacity of an object

Specific heat capacity is "per gram". Sometimes "per mole" is more useful.

- **Molar heat capacity**, C_m, is the energy needed to raise the temperature of **1 mol** of a substance by 1 °C. Its unit is J mol⁻¹ °C⁻¹. To convert, multiply by the molar mass: **C_m = c × M**. Then **q = n C_m ΔT**.
- **Heat capacity** of a whole object, C, is the energy needed to raise the temperature of **that object** by 1 °C. Its unit is J °C⁻¹. For an object made of one substance, C = mc, so **q = CΔT**. A 250 g aluminium pan has C = 250 × 0.897 = 224 J °C⁻¹.

Look what happens when you convert the metals in the table to molar heat capacities:

| Metal | c (J g⁻¹ °C⁻¹) | M (g mol⁻¹) | C_m = c × M (J mol⁻¹ °C⁻¹) |
|---|---|---|---|
| aluminium | 0.897 | 26.98 | 24.2 |
| iron | 0.449 | 55.85 | 25.1 |
| copper | 0.385 | 63.55 | 24.5 |

Per gram the values differ by more than a factor of two, but **per mole** they are all close to 25 J mol⁻¹ °C⁻¹. A gram of aluminium contains more than twice as many atoms as a gram of copper, so it needs more energy for the same temperature rise. This is a useful particle-level link: for these simple metals, the energy needed per atom is similar.

## Calorimetry: energy lost = energy gained

The **first law of thermodynamics** states that energy is conserved in every chemical and physical process. It is not created or destroyed, only transferred. **Calorimetry** uses this law to measure heat transfer.

A simple **coffee-cup calorimeter** (Figure 2) is two nested polystyrene cups with a lid, a thermometer and a stirrer. Polystyrene is a poor conductor, so very little energy enters or leaves; the lid cuts losses to the air.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="hc-fig2-title hc-fig2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hc-fig2-title">A coffee-cup calorimeter</title>
<desc id="hc-fig2-desc">Cross-section of two nested polystyrene cups with a lid. A thermometer and a stirrer pass through holes in the lid into the liquid, which is labelled water or solution. Labels on the right identify the lid, the thermometer, the stirrer, the two nested polystyrene cups that insulate the liquid, and the liquid where the process happens.</desc>
<path d="M170 80 L200 260 L380 260 L410 80" fill="none" stroke="#1d2b44" stroke-width="3"/>
<path d="M185 88 L212 250 L368 250 L395 88" fill="none" stroke="#1d2b44" stroke-width="3"/>
<path d="M196 150 L212 250 L368 250 L384 150 Z" fill="#fdf6e3" stroke="none"/>
<line x1="196" y1="150" x2="384" y2="150" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="160" y="68" width="260" height="14" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="255" y="20" width="10" height="210" rx="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="260" cy="232" r="9" fill="#1d2b44"/>
<line x1="320" y1="30" x2="320" y2="225" stroke="#1d2b44" stroke-width="3"/>
<line x1="300" y1="225" x2="340" y2="225" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1" fill="none">
<line x1="420" y1="75" x2="470" y2="55"/><line x1="265" y1="40" x2="470" y2="30"/><line x1="320" y1="110" x2="470" y2="100"/>
<line x1="405" y1="160" x2="470" y2="160"/><line x1="360" y1="215" x2="470" y2="225"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="476" y="34">thermometer</text>
<text x="476" y="59">lid</text>
<text x="476" y="104">stirrer</text>
<text x="476" y="158">two nested polystyrene</text>
<text x="476" y="174">cups (insulation)</text>
<text x="476" y="222">water or solution:</text>
<text x="476" y="238">the process happens here</text>
</g>
</svg>
<figcaption>Figure 2. A coffee-cup calorimeter. The thermometer measures the temperature of the water or solution, which is the main part of the surroundings for the process inside it.</figcaption>
</figure>

Inside an insulated calorimeter, all the energy released by one part is absorbed by the other parts:

> **q(released) + q(absorbed) = 0**, or **q(lost) = −q(gained)**

For a hot object dropped into cool water, q(object) + q(water) = 0. For a process such as dissolving, q(process) + q(solution) = 0, so **q(process) = −q(solution)**.

### Direction of energy flow when something dissolves

When a solid dissolves in water inside a calorimeter, the thermometer reads the temperature of the **mixture**:

- **Temperature rises:** the solution gained energy, so the dissolving process **released** energy. Dissolving is **exothermic**, and q(dissolving) is negative.
- **Temperature falls:** the solution lost energy, so the dissolving process **absorbed** energy. Dissolving is **endothermic**, and q(dissolving) is positive.

### The usual assumptions

Calorimetry calculations rely on stated assumptions. Name them when a question asks about sources of error.

1. **No energy is exchanged with the outside** (perfect insulation).
2. **The calorimeter itself absorbs negligible energy**, unless you are given its heat capacity.
3. **A dilute solution has the specific heat capacity of water**, 4.18 J g⁻¹ °C⁻¹, and the mass of the solution is the mass of the water plus the mass of the solute.
4. **The final temperature is the equilibrium temperature**, reached after stirring (Topic 6.3).

## Worked example 1: heating water, and the same energy in a metal

**Question.** (a) How much energy is needed to heat 275 g of water from 19.0 °C to 85.0 °C? (b) If the same energy were given to 275 g of aluminium starting at 19.0 °C, what would its temperature rise be?

1. **ΔT for the water:** 85.0 − 19.0 = 66.0 °C.
2. **q = mcΔT** = 275 g × 4.18 J g⁻¹ °C⁻¹ × 66.0 °C = 75 867 J.
3. **Answer (a): q = 75.9 kJ** (positive: the water absorbs energy).
4. **(b) Rearrange:** ΔT = q / (mc) = 75 867 J ÷ (275 g × 0.897 J g⁻¹ °C⁻¹) = **308 °C** (307.6 °C).

**Interpretation.** Water's c is 4.18 / 0.897 = 4.66 times aluminium's, so the same energy warms the same mass of aluminium about 4.66 times as much. Equal masses with different specific heat capacities do not change temperature by the same amount.

## Worked example 2: finding the specific heat capacity of a metal

**Question.** A 62.0 g sample of an unknown metal Z is heated to 99.5 °C in boiling water, then quickly moved into an insulated calorimeter containing 75.0 g of water at 21.0 °C. After stirring, the final temperature is 26.6 °C. Find the specific heat capacity of Z. Assume the calorimeter absorbs negligible energy.

1. **Water:** ΔT = 26.6 − 21.0 = 5.6 °C. q(water) = 75.0 × 4.18 × 5.6 = **+1755.6 J** (absorbed).
2. **Conservation of energy:** q(metal) + q(water) = 0, so q(metal) = **−1755.6 J** (released).
3. **Metal:** ΔT = 26.6 − 99.5 = −72.9 °C.
4. **Solve for c:** c = q / (mΔT) = −1755.6 J ÷ (62.0 g × −72.9 °C) = 0.3884 J g⁻¹ °C⁻¹.

**Answer.** c(Z) = **0.39 J g⁻¹ °C⁻¹**. Of the metals in the table, this matches copper (0.385) and rules out iron (0.449) and aluminium (0.897).

**Attending to precision.** The water's ΔT, 5.6 °C, has only **two** significant figures, even though each thermometer reading has three. Subtracting two readings loses precision. So the answer is given to 2 significant figures. A larger mass of metal or a smaller mass of water would give a bigger ΔT and a more precise result.

## Worked example 3: a dissolution calorimeter

**Question.** 5.10 g of a fictional salt QZ (M = 85.0 g mol⁻¹) is dissolved in 50.0 g of water in a coffee-cup calorimeter. The temperature falls from 22.4 °C to 16.9 °C. (a) Is dissolving QZ endothermic or exothermic? (b) Calculate q for the dissolving process. (c) Calculate the energy absorbed per mole of QZ.

1. **(a) Direction.** The temperature of the mixture fell, so energy moved **from** the solution **into** the dissolving process. Dissolving QZ is **endothermic**.
2. **Mass of solution:** 50.0 + 5.10 = 55.10 g. ΔT = 16.9 − 22.4 = −5.5 °C.
3. **q(solution)** = 55.10 × 4.18 × (−5.5) = **−1266.7 J** (the solution lost energy).
4. **(b) q(dissolving)** = −q(solution) = **+1.3 × 10³ J** (1266.7 J). Positive, as expected for an endothermic process.
5. **(c) Moles of QZ:** n = 5.10 ÷ 85.0 = 0.0600 mol. Energy per mole = 1266.7 J ÷ 0.0600 mol = 21 112 J mol⁻¹ = **+21 kJ mol⁻¹**.

**Assumptions.** No energy exchanged with the air or the cup; the solution's specific heat capacity is 4.18 J g⁻¹ °C⁻¹. If you used the mass of water only (50.0 g), you would get 19 kJ mol⁻¹; either is accepted if stated, but use the total mass unless told otherwise. In Topic 6.6 this energy per mole, measured at constant pressure, becomes the enthalpy of solution, ΔH.

## Common misconceptions

- **"A high specific heat capacity means it heats up quickly."** The opposite. A large c means more energy is needed for each degree, so the temperature rises *less*.
- **"The temperature rose, so the dissolving absorbed heat."** The thermometer is in the solution (the surroundings). A rise means the process *released* energy into the solution.
- **"q of the water is q of the reaction."** They are equal in size and opposite in sign: q(process) = −q(solution).
- **"ΔT must be converted to kelvin."** A change of 1 °C equals a change of 1 K, so ΔT is the same number in both.
- **"The final temperature is halfway between the starting temperatures."** Only if the two parts have equal heat capacities (mc). Otherwise it lies closer to the starting temperature of the part with the larger mc.
- **"Heat and temperature are the same."** Temperature measures the average kinetic energy of the particles; q is energy transferred. A full bath at 40 °C releases far more heat as it cools to room temperature than a small cup of tea at 80 °C, because it has a much larger mass.
- **Mixing up specific and molar heat capacity.** Check the unit: per gram (J g⁻¹ °C⁻¹) goes with mass; per mole (J mol⁻¹ °C⁻¹) goes with moles.
- **Keeping too many significant figures.** The temperature change, found by subtraction, usually limits the precision.

## Where this leads

Next, [Topic 6.5](/advanced-course-resources/chemistry/6-5-energy-phase-changes-study-guide/) deals with the second way a system changes its energy: phase changes, where energy is absorbed or released with no change in temperature. The calorimetry method here is the basis for measuring enthalpies of reaction in Topic 6.6. Try the [practice questions](/advanced-course-resources/chemistry/6-4-heat-capacity-calorimetry-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-4-heat-capacity-calorimetry-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-4-heat-capacity-calorimetry-checklist/) to consolidate.
