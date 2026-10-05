---
resourceId: "mb-ap-chem-6.6-study-guide"
title: "Introduction to Enthalpy of Reaction: Study Guide (Chemistry 6.6)"
description: "Use the enthalpy change of a reaction and the moles that react to calculate the heat released or absorbed, and explain where that energy comes from at the particle level."
course: "chemistry"
unit: 6
topics: ["6.6"]
resourceType: "study-guide"
prerequisites:
  - "Mole ratios, limiting reactants and stoichiometry (Topic 4.5)"
  - "Endothermic and exothermic processes and energy diagrams (Topics 6.1 and 6.2)"
  - "Thermal equilibrium and q = mcΔT (Topics 6.3 and 6.4)"
prerequisiteResources: ["mb-ap-chem-6.5-study-guide"]
learningObjectives:
  - "Interpret the sign and size of ΔH for a reaction carried out at constant pressure"
  - "Explain how a difference in chemical potential energy between reactants and products shows up as a temperature change"
  - "Describe how the products exchange energy with the surroundings until thermal equilibrium is reached"
  - "Calculate the heat released or absorbed from the moles of a reactant or product and the molar enthalpy of reaction, including when the coefficients are not 1"
  - "Scale and reverse a thermochemical equation, and use the limiting reactant to find the moles of reaction"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "H 1.008, C 12.01, N 14.01 g mol⁻¹. For solutions, take density 1.00 g mL⁻¹ and c = 4.18 J g⁻¹ °C⁻¹ unless told otherwise. Keep unrounded values until the final step"
related: ["mb-ap-chem-6.6-revision-notes", "mb-ap-chem-6.6-practice", "mb-ap-chem-6.6-checklist"]
next: "mb-ap-chem-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "ΔH of a reaction is the heat absorbed (positive) or released (negative) at constant pressure, for the amounts shown in the balanced equation."
  - "q = (moles of a substance ÷ its coefficient) × ΔH. The bracket is the number of moles of reaction."
  - "Doubling the equation doubles ΔH; reversing the equation changes its sign."
  - "In an exothermic reaction, lower potential energy in the products becomes extra kinetic energy, so the mixture warms; that energy then flows to the surroundings."
  - "Only the limiting reactant sets how much reaction happens, and so how much heat is transferred."
faqs:
  - question: "What does kJ mol⁻¹ mean when the equation has several substances?"
    answer: "It means kJ per mole of reaction: the energy for the amounts in the balanced equation as written. For 2H₂ + O₂ → 2H₂O, one mole of reaction uses 2 mol H₂ and 1 mol O₂ and makes 2 mol H₂O."
  - question: "Is enthalpy change the same thing as energy change?"
    answer: "For the reactions in this course, carried out at constant pressure, you can treat ΔH as the heat, and so the energy, transferred by the reaction. The fine difference between enthalpy and internal energy is not assessed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the enthalpy of reaction tells you

In [Topic 6.5](/advanced-course-resources/chemistry/6-5-energy-phase-changes-study-guide/) you calculated the energy of a phase change with q = n × ΔH. A chemical reaction works the same way. The **enthalpy change of reaction, ΔH**, is the heat transferred when a reaction happens at **constant pressure**, such as in an open beaker or a coffee-cup calorimeter.

The sign tells you the direction:

- **ΔH negative**: heat is **released** by the reacting system. The reaction is exothermic.
- **ΔH positive**: heat is **absorbed** by the reacting system. The reaction is endothermic.

An equation that includes its ΔH is a **thermochemical equation**:

CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)  ΔH = −890 kJ mol⁻¹

The "per mole" here means **per mole of reaction**: the amounts written in the equation. When 1 mol CH₄ reacts with 2 mol O₂ to make 1 mol CO₂ and 2 mol H₂O(l), 890 kJ is released. The value applies only to the equation as written, including the **state symbols**. If the water were formed as a gas, less energy would be released, because some energy would stay in the water vapour (Topic 6.5).

In this course, reactions are run at constant pressure, so you can treat ΔH as "the heat of reaction". The technical difference between enthalpy and internal energy is not assessed.

## Where the energy comes from

Why does an exothermic reaction warm its surroundings? The answer has two stages.

**Stage 1: inside the reacting system.** Reactions break bonds and form new ones. Breaking bonds needs energy; forming bonds releases energy. If the products end up with **lower chemical potential energy** than the reactants, the difference does not vanish. It becomes **kinetic energy**: the product particles move faster than the reactant particles did. Faster particles mean a higher temperature, so immediately after reacting, the products are **hotter than their surroundings**.

**Stage 2: reaching thermal equilibrium.** Now the hot products collide with the cooler water, container and air. As in [Topic 6.3](/advanced-course-resources/chemistry/6-3-heat-transfer-thermal-equilibrium-study-guide/), energy is transferred from the hotter particles to the cooler ones until both have the same average kinetic energy, and so the same temperature. Thermal energy has moved **to the surroundings**, and the thermometer in the water shows a rise.

An endothermic reaction runs the other way. The products have **higher** potential energy, so the particles slow down and the mixture becomes **colder than its surroundings**. Energy then flows **from** the surroundings into the products until thermal equilibrium is reached, and the thermometer shows a fall.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="rx-title rx-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rx-title">Three stages of an exothermic reaction in water</title>
<desc id="rx-desc">Three boxes from left to right. Box 1, before: reactants and surrounding water both at 21 degrees. Box 2, just after reacting: potential energy has become kinetic energy, so the products are hotter than the water; arrows show energy flowing from the products to the water. Box 3, thermal equilibrium: products and water both at a higher temperature, 24 degrees; the energy released by the reaction is now in the water.</desc>
<rect x="10" y="30" width="190" height="150" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="225" y="30" width="190" height="150" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="440" y="30" width="190" height="150" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="105" y="20">1. Before</text>
<text x="320" y="20">2. Just after reacting</text>
<text x="535" y="20">3. Thermal equilibrium</text>
</g>
<circle cx="105" cy="95" r="34" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="105" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">reactants</text>
<text x="105" y="108" text-anchor="middle" font-size="12" fill="#1d2b44">21 °C</text>
<text x="105" y="155" text-anchor="middle" font-size="12" fill="#1d2b44">water: 21 °C</text>
<circle cx="320" cy="95" r="34" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="5 3"/>
<text x="320" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">products</text>
<text x="320" y="108" text-anchor="middle" font-size="12" fill="#1d2b44">hotter</text>
<path d="M356 95 H395" stroke="#1d2b44" stroke-width="2" marker-end="url(#ar6)"/>
<path d="M284 95 H245" stroke="#1d2b44" stroke-width="2" marker-end="url(#ar6)"/>
<path d="M320 131 V150" stroke="#1d2b44" stroke-width="2" marker-end="url(#ar6)"/>
<text x="320" y="170" text-anchor="middle" font-size="12" fill="#1d2b44">water: still 21 °C</text>
<circle cx="535" cy="95" r="34" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="535" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">products</text>
<text x="535" y="108" text-anchor="middle" font-size="12" fill="#1d2b44">24 °C</text>
<text x="535" y="155" text-anchor="middle" font-size="12" fill="#1d2b44">water: 24 °C</text>
<text x="320" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">Lower potential energy → faster particles → energy flows out to the water</text>
<defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. An exothermic reaction in water. Stage 2 shows the products briefly hotter than the water (dashed outline, arrows outward); by stage 3 they have shared that energy with the water and everything is at the same, higher temperature. The temperatures match Worked example 3.</figcaption>
</figure>

This is why, in calorimetry, the energy gained by the solution (q = mcΔT) equals the energy released by the reaction, with the opposite sign: **q_reaction = −q_surroundings**.

## Using ΔH as a conversion factor

Treat the thermochemical equation as a recipe with an energy line. ΔH links the energy to every substance through its **coefficient**:

N₂(g) + 3H₂(g) → 2NH₃(g)  ΔH = −92 kJ mol⁻¹

| The statement | Conversion factor |
|---|---|
| 92 kJ released per 1 mol N₂ that reacts | −92 kJ / 1 mol N₂ |
| 92 kJ released per 3 mol H₂ that react | −92 kJ / 3 mol H₂ |
| 92 kJ released per 2 mol NH₃ formed | −92 kJ / 2 mol NH₃ |

So, in general:

**q = (n of substance ÷ its coefficient) × ΔH**

The bracket is the **moles of reaction**. Whichever substance you start from, you get the same answer.

### Scaling and reversing

- **Multiply the equation by a number, multiply ΔH by the same number.** 2N₂ + 6H₂ → 4NH₃ has ΔH = −184 kJ mol⁻¹.
- **Reverse the equation, change the sign of ΔH.** 2NH₃ → N₂ + 3H₂ has ΔH = +92 kJ mol⁻¹. Breaking ammonia back down needs the energy that forming it released.

### The limiting reactant decides

Heat is released only by reactants that actually react. When amounts of two reactants are given, find the **limiting reactant** first ([Topic 4.5](/advanced-course-resources/chemistry/4-5-stoichiometry-study-guide/)), then use it to find the moles of reaction. The excess reactant left over releases nothing.

### Heat is not the same as temperature change

ΔH and the moles of reaction fix **how much energy** is transferred. They do not fix **how much the temperature changes**. That depends on what receives the energy, through q = mcΔT:

- The same reaction run in **twice the mass of water** releases the same energy, so ΔT is **half** as large.
- Running **twice the amount of reaction** in the same mass of water releases twice the energy, so ΔT **doubles**.
- If the surroundings have a **smaller specific heat capacity**, the same energy gives a **larger** ΔT.

So two students who carry out the same reaction can see quite different temperature rises and still find the same ΔH, as long as each divides the energy by the moles of reaction that actually happened. This is why ΔH, not ΔT, is the quantity tabulated for a reaction: it is a property of the reaction itself, per mole, and not of the apparatus. Worked example 3 shows the full chain from moles of reaction to a predicted temperature.

## Worked example 1: energy from burning a fuel

**Question.** Use CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH = −890 kJ mol⁻¹. (a) What is q when 4.00 g of methane burns completely? (b) What mass of methane must burn to release 1.00 × 10³ kJ?

**(a)**

1. M(CH₄) = 12.01 + 4(1.008) = 16.042 g mol⁻¹.
2. n(CH₄) = 4.00 g ÷ 16.042 g mol⁻¹ = 0.2493 mol.
3. The coefficient of CH₄ is 1, so moles of reaction = 0.2493 mol.
4. q = 0.2493 mol × (−890 kJ mol⁻¹) = −221.9 kJ.

**Answer.** **q = −222 kJ**: 222 kJ is released.

**(b)**

1. Moles of reaction needed = 1.00 × 10³ kJ ÷ 890 kJ mol⁻¹ = 1.1236 mol, so 1.1236 mol CH₄.
2. Mass = 1.1236 mol × 16.042 g mol⁻¹ = 18.02 g.

**Answer.** **18.0 g** of methane.

**Check.** 4.00 g is about a quarter of a mole, and a quarter of 890 is about 220. Units: mol × kJ mol⁻¹ = kJ.

## Worked example 2: a coefficient that is not 1

**Question.** Using N₂(g) + 3H₂(g) → 2NH₃(g), ΔH = −92 kJ mol⁻¹, calculate q when 10.0 g of NH₃ is formed. What is q when 10.0 g of NH₃ decomposes into N₂ and H₂?

1. M(NH₃) = 14.01 + 3(1.008) = 17.034 g mol⁻¹.
2. n(NH₃) = 10.0 g ÷ 17.034 g mol⁻¹ = 0.5871 mol.
3. Moles of reaction = 0.5871 mol ÷ 2 = 0.2935 mol (two NH₃ per mole of reaction).
4. q = 0.2935 mol × (−92 kJ mol⁻¹) = −27.0 kJ.

**Answer.** Forming 10.0 g of NH₃: **q = −27 kJ** (2 significant figures, from ΔH). Decomposing the same mass is the reverse reaction: **q = +27 kJ**.

**Why step 3 matters.** Forgetting to divide by the coefficient gives −54 kJ, twice the true value. A quick test: work it out from the hydrogen used (0.5871 × 3/2 = 0.8806 mol H₂; ÷ 3 = 0.2935 mol of reaction). Both routes must agree.

## Worked example 3: limiting reactant and temperature change

**Question.** Two fictional solutes react in water: A(aq) + 2B(aq) → AB₂(aq), ΔH = −84.0 kJ mol⁻¹. A student mixes 50.0 mL of 0.400 M A with 50.0 mL of 0.600 M B in an insulated cup. Both solutions start at 21.0 °C. Predict the final temperature. Assume the mixture has a mass of 100.0 g and c = 4.18 J g⁻¹ °C⁻¹, and that no energy is lost.

1. **Moles:** n(A) = 0.0500 L × 0.400 mol L⁻¹ = 0.0200 mol; n(B) = 0.0500 L × 0.600 mol L⁻¹ = 0.0300 mol.
2. **Limiting reactant:** 0.0300 mol B needs only 0.0150 mol A, and 0.0200 mol A is available. So **B is limiting**.
3. **Moles of reaction:** 0.0300 mol B ÷ 2 = 0.0150 mol.
4. **Heat of reaction:** q_rxn = 0.0150 mol × (−84.0 kJ mol⁻¹) = −1.26 kJ = −1260 J.
5. **Energy gained by the solution:** q_soln = −q_rxn = +1260 J.
6. **Temperature change:** ΔT = q ÷ (mc) = 1260 J ÷ (100.0 g × 4.18 J g⁻¹ °C⁻¹) = 3.01 °C.

**Answer.** Final temperature ≈ 21.0 + 3.0 = **24.0 °C**.

**Common error.** Using A to count the reaction gives 0.0200 mol of reaction and a rise of 4.02 °C. That is too large: 0.0050 mol of A is left over unreacted and releases nothing.

## Common misconceptions

- **"ΔH = −890 kJ mol⁻¹ means 890 kJ per mole of each substance."** It is per mole of **reaction**, as written. Per mole of H₂O in the methane equation it is 445 kJ, because two moles of water form.
- **"An exothermic reaction makes heat from nothing."** Energy is conserved. It comes from the drop in chemical potential energy between reactants and products.
- **"Breaking bonds releases energy."** Breaking bonds always needs energy. A reaction is exothermic when forming the new bonds releases more energy than breaking the old ones needed. (Topic 6.7 puts numbers on this.)
- **"The temperature of the solution is the energy of the reaction."** The thermometer measures the surroundings. A rise means the reacting system **lost** energy, so ΔH is negative.
- **"Doubling one reactant always doubles the heat."** Only if that reactant is limiting. Extra excess reactant changes nothing.
- **Ignoring state symbols.** ΔH for forming H₂O(l) is different from forming H₂O(g); use the equation exactly as given.
- **Forgetting to change the sign** when an equation is reversed.

## Where this leads

So far you have been given ΔH. Next you will estimate it yourself from the energies of the bonds broken and formed in [Topic 6.7, Bond Enthalpies](/advanced-course-resources/chemistry/6-7-bond-enthalpies-study-guide/), and then from enthalpies of formation (Topic 6.8) and Hess's law (Topic 6.9). Try the [practice questions](/advanced-course-resources/chemistry/6-6-introduction-enthalpy-reaction-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-6-introduction-enthalpy-reaction-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-6-introduction-enthalpy-reaction-checklist/) to consolidate.
