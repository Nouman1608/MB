---
resourceId: "mb-ap-chem-3.7-study-guide"
title: "Solutions and Mixtures: Study Guide (Chemistry 3.7)"
description: "Learn how solutions differ from heterogeneous mixtures, what molarity measures, and how to calculate moles of solute, ion concentrations, volumes, dilutions and mixtures."
course: "chemistry"
unit: 3
topics: ["3.7"]
resourceType: "study-guide"
prerequisites:
  - "Converting between mass, moles and particles (Topic 1.1)"
  - "Pure substances and mixtures at the particle level (Topic 1.4)"
  - "Writing the ions in an ionic formula, such as Ca²⁺ and 2 Cl⁻ in CaCl₂"
prerequisiteResources: ["mb-ap-chem-3.6-study-guide"]
learningObjectives:
  - "Tell a solution (homogeneous mixture) from a heterogeneous mixture using properties you can observe"
  - "Give examples of solutions that are solids, liquids and gases"
  - "Use M = n ÷ V to find the molarity, the moles of solute or the volume of a solution"
  - "Find the concentration and number of each ion when an ionic compound dissolves"
  - "Calculate the result of diluting a solution or mixing two solutions, using conservation of moles of solute"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Molar masses from the periodic table you are given; N_A = 6.022 × 10²³ mol⁻¹. Convert mL to L before using M = n ÷ V; round once at the end"
related: ["mb-ap-chem-3.7-revision-notes", "mb-ap-chem-3.7-practice", "mb-ap-chem-3.7-checklist"]
next: "mb-ap-chem-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A solution is a homogeneous mixture: its properties are the same everywhere in the sample. Solutions can be solids, liquids or gases."
  - "In a heterogeneous mixture the properties depend on where you take the sample."
  - "Molarity M = moles of solute ÷ litres of solution. The unit is mol L⁻¹, written M."
  - "An ionic solute gives each ion its own concentration: 0.25 M CaCl₂ is 0.25 M Ca²⁺ and 0.50 M Cl⁻."
  - "Diluting or mixing changes the volume, not the moles of solute already present: n = M × V before and after."
faqs:
  - question: "Is molarity per litre of water or per litre of solution?"
    answer: "Per litre of solution. Dissolving a solid usually changes the volume a little, so you dissolve it first and then make the whole solution up to the final volume."
  - question: "Will I need molality or percent by mass?"
    answer: "Not for calculations in this course. Molarity is the concentration unit you calculate with. Other units may appear in a lab context, but you will not be asked to calculate molality, percent by mass or percent by volume."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Homogeneous and heterogeneous mixtures

In Topic 1.4 you met mixtures: samples with two or more kinds of particle in proportions that can vary. This topic sorts mixtures into two groups by asking one question: **is the sample the same all the way through?**

- A **solution**, also called a **homogeneous mixture**, has the same macroscopic properties everywhere. Take a drop from the top, the middle or the bottom, and its colour, density and composition are the same. At the particle level, the components are mixed at the scale of single molecules or ions.
- In a **heterogeneous mixture**, the properties depend on where you look. Sand stirred into water settles to the bottom, so a sample from the bottom has far more sand than one from the top. Oil floats on water as a separate layer.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="mix-title mix-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mix-title">A solution compared with a heterogeneous mixture</title>
<desc id="mix-desc">Two beakers drawn side by side. The left beaker, labelled solution, has small filled circles representing solute particles spread evenly from top to bottom, and two dashed sample boxes, one near the top and one near the bottom, each containing three solute particles. The right beaker, labelled heterogeneous mixture, has large solid grains drawn as squares piled at the bottom and almost none near the top; its top sample box contains no grains and its bottom sample box contains many.</desc>
<path d="M40 40 V210 H280 V40" fill="none" stroke="#1d2b44" stroke-width="3"/>
<path d="M360 40 V210 H600 V40" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="42" y1="60" x2="278" y2="60" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="362" y1="60" x2="598" y2="60" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<g fill="#1d2b44">
<circle cx="70" cy="85" r="5"/><circle cx="130" cy="75" r="5"/><circle cx="200" cy="90" r="5"/><circle cx="250" cy="80" r="5"/>
<circle cx="95" cy="125" r="5"/><circle cx="165" cy="115" r="5"/><circle cx="235" cy="130" r="5"/>
<circle cx="60" cy="170" r="5"/><circle cx="125" cy="185" r="5"/><circle cx="190" cy="165" r="5"/><circle cx="255" cy="190" r="5"/><circle cx="150" cy="150" r="5"/>
</g>
<rect x="55" y="68" width="160" height="30" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="50" y="160" width="160" height="34" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="375" y="190" width="16" height="16"/><rect x="395" y="186" width="16" height="16"/><rect x="415" y="191" width="16" height="16"/><rect x="437" y="188" width="16" height="16"/><rect x="459" y="191" width="16" height="16"/><rect x="481" y="187" width="16" height="16"/><rect x="503" y="190" width="16" height="16"/><rect x="525" y="188" width="16" height="16"/><rect x="547" y="191" width="16" height="16"/><rect x="569" y="187" width="16" height="16"/>
<rect x="400" y="170" width="16" height="16"/><rect x="450" y="171" width="16" height="16"/><rect x="510" y="170" width="16" height="16"/><rect x="560" y="169" width="16" height="16"/>
<rect x="480" y="120" width="16" height="16"/>
</g>
<rect x="375" y="68" width="160" height="30" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="370" y="166" width="160" height="40" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="160" y="232" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Solution (homogeneous)</text>
<text x="480" y="232" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Heterogeneous mixture</text>
<text x="160" y="28" text-anchor="middle" font-size="12" fill="#1d2b44">top and bottom samples match</text>
<text x="480" y="28" text-anchor="middle" font-size="12" fill="#1d2b44">top and bottom samples differ</text>
</svg>
<figcaption>Figure 1. Dashed boxes are samples. In the solution each sample holds the same number of solute particles; in the heterogeneous mixture the grains have settled, so the bottom sample is very different from the top one.</figcaption>
</figure>

### Solutions are not only liquids

The word "solution" makes most people think of salt water, but the state of a solution is the state of the whole mixture:

| State | Example | What is mixed |
|---|---|---|
| Gas | Air | Mainly nitrogen and oxygen molecules (about 78% and 21% by volume) |
| Liquid | Sugar dissolved in water | Sucrose molecules among water molecules |
| Liquid | Ethanol mixed with water | Two liquids that mix in any proportion |
| Solid | Brass | Zinc atoms spread through copper (an alloy, Topic 2.4) |

The component present in the largest amount is usually called the **solvent**; the others are **solutes**. A solution can be coloured (copper(II) sulfate solution is blue) and still be homogeneous. "Clear" means you can see through it; it does not mean colourless.

## Molarity: how much solute in how much solution

Saying a solution is "strong" or "weak" is not enough for chemistry. You need a number. The concentration unit used most in the laboratory is **molarity**:

> **M = n_solute ÷ V_solution**, where n is in moles and V is in **litres of solution**.

The unit is mol L⁻¹, written **M** and read "molar". If 0.500 mol of glucose is dissolved and the solution is made up to 2.00 L, then M = 0.500 mol ÷ 2.00 L = **0.250 M**.

Three points matter every time:

1. **Litres, not millilitres.** 25.0 mL is 0.0250 L.
2. **Litres of solution, not of solvent.** To make 100.0 mL of a 1.00 M KCl solution, you dissolve 7.455 g of KCl (0.1000 mol) in some water in a 100.0 mL volumetric flask, then add water up to the mark. Adding 7.455 g to 100.0 mL of water would give slightly more than 100.0 mL of solution and so a concentration slightly below 1.00 M.
3. **Molarity does not depend on how much you pour out.** A 50 mL portion of a 0.250 M solution is still 0.250 M. What changes is the number of moles in the portion.

### From molarity to particles

Because n = M × V, molarity is a bridge to everything in Topic 1.1:

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="conc-map-title conc-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="conc-map-title">Linking mass, moles, molarity and number of particles</title>
<desc id="conc-map-desc">Amount in moles sits in the middle box. To its left is mass in grams: divide mass by molar mass to get moles, multiply moles by molar mass to get mass. To its right is number of particles: multiply moles by Avogadro's number, or divide particles by Avogadro's number. Below the middle box is molarity in mol per litre: divide moles by the volume of solution in litres to get molarity, or multiply molarity by volume in litres to get moles.</desc>
<rect x="10" y="30" width="150" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="85" y="55" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Mass, m</text>
<text x="85" y="74" text-anchor="middle" font-size="12" fill="#1d2b44">g</text>
<rect x="245" y="30" width="150" height="56" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="55" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Amount, n</text>
<text x="320" y="74" text-anchor="middle" font-size="12" fill="#1d2b44">mol</text>
<rect x="480" y="30" width="150" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="555" y="55" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Particles, N</text>
<text x="555" y="74" text-anchor="middle" font-size="12" fill="#1d2b44">(no unit)</text>
<rect x="245" y="135" width="150" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="160" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Molarity, M</text>
<text x="320" y="179" text-anchor="middle" font-size="12" fill="#1d2b44">mol L⁻¹</text>
<path d="M162 48 H240" stroke="#1d2b44" stroke-width="2" marker-end="url(#c7a)"/>
<path d="M243 70 H165" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#c7a)"/>
<path d="M397 48 H475" stroke="#1d2b44" stroke-width="2" marker-end="url(#c7a)"/>
<path d="M478 70 H400" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#c7a)"/>
<path d="M300 88 V130" stroke="#1d2b44" stroke-width="2" marker-end="url(#c7a)"/>
<path d="M340 133 V91" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#c7a)"/>
<text x="202" y="22" text-anchor="middle" font-size="13" fill="#1d2b44">÷ molar mass</text>
<text x="202" y="104" text-anchor="middle" font-size="13" fill="#1d2b44">× molar mass</text>
<text x="437" y="22" text-anchor="middle" font-size="13" fill="#1d2b44">× N_A</text>
<text x="437" y="104" text-anchor="middle" font-size="13" fill="#1d2b44">÷ N_A</text>
<text x="292" y="114" text-anchor="end" font-size="13" fill="#1d2b44">÷ V (L)</text>
<text x="348" y="114" text-anchor="start" font-size="13" fill="#1d2b44">× V (L)</text>
<defs><marker id="c7a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 2. Moles are still the centre of every route. Solid arrows lead away from mass towards molarity and particles; dashed arrows go back.</figcaption>
</figure>

### Ionic solutes: each ion has its own concentration

When an ionic compound dissolves, its ions separate. One formula unit of CaCl₂ gives one Ca²⁺ ion and two Cl⁻ ions. So a 0.25 M CaCl₂ solution contains:

- [Ca²⁺] = 0.25 M
- [Cl⁻] = 2 × 0.25 = 0.50 M
- total ions = 0.75 mol in every litre

Square brackets mean "concentration of", in mol L⁻¹. A molecular solute such as glucose does not split up: 0.25 M glucose is 0.25 M glucose molecules. Polyatomic ions stay together, so Na₂CO₃ gives 2 Na⁺ and 1 CO₃²⁻, not separate carbon and oxygen.

### Dilution and mixing: moles are conserved

Adding solvent spreads the same solute particles through a larger volume. No solute is added or removed, so the moles of solute are the same before and after:

> **M₁V₁ = M₂V₂** (both sides are moles of solute; V₁ and V₂ only need the same unit)

A quick sense check: after a dilution the concentration must be lower and the volume larger, and the ratio of the two volumes equals the ratio of the two concentrations. Diluting 10.0 mL to 100.0 mL makes the solution ten times weaker.

When you mix two solutions that do not react, add up the moles of each species and divide by the **total** volume. For dilute aqueous solutions you may assume the volumes add (50.0 mL + 25.0 mL = 75.0 mL). That is an assumption, not a law, but it is accurate enough here.

## Worked example 1: making a solution from a solid

**Question.** A technician needs 250.0 mL of 0.0800 M sodium carbonate, Na₂CO₃. (a) What mass of Na₂CO₃ is needed? (b) What is the concentration of Na⁺ ions, and how many Na⁺ ions are in the flask?

1. Convert the volume: 250.0 mL = 0.2500 L.
2. Moles needed: n = M × V = 0.0800 mol L⁻¹ × 0.2500 L = 0.0200 mol.
3. Molar mass: M(Na₂CO₃) = 2(22.99) + 12.01 + 3(16.00) = 105.99 g mol⁻¹.
4. Mass: m = 0.0200 mol × 105.99 g mol⁻¹ = 2.1198 g.
5. Ions: each formula unit gives 2 Na⁺, so [Na⁺] = 2 × 0.0800 = 0.160 M, and n(Na⁺) = 2 × 0.0200 = 0.0400 mol.
6. Number of Na⁺ ions: 0.0400 mol × 6.022 × 10²³ mol⁻¹ = 2.409 × 10²² ions.

**Answer.** (a) **2.12 g** of Na₂CO₃, dissolved and made up to the 250.0 mL mark in a volumetric flask. (b) [Na⁺] = **0.160 M**; **2.41 × 10²²** Na⁺ ions.

**Check.** 0.02 mol of a substance with a molar mass of about 106 g mol⁻¹ is about 2 g. The carbonate ion concentration stays at 0.0800 M, because there is one CO₃²⁻ per formula unit.

## Worked example 2: dilution to a target ion concentration

**Question.** A stock solution is 0.500 M magnesium chloride, MgCl₂. What volume of stock is needed to make 100.0 mL of a solution in which [Cl⁻] = 0.0600 M?

1. Change the ion target into a salt concentration. Each MgCl₂ gives 2 Cl⁻, so the diluted solution must be 0.0600 ÷ 2 = 0.0300 M MgCl₂.
2. Moles of MgCl₂ needed: 0.0300 mol L⁻¹ × 0.1000 L = 0.00300 mol.
3. Volume of stock: V₁ = n ÷ M₁ = 0.00300 mol ÷ 0.500 mol L⁻¹ = 0.00600 L.
   Or directly: V₁ = M₂V₂ ÷ M₁ = (0.0300 M × 100.0 mL) ÷ 0.500 M = 6.00 mL.

**Answer.** **6.00 mL** of stock, transferred with a pipette into a 100.0 mL volumetric flask and made up to the mark (about 94 mL of water is added, but you fill to the mark rather than measuring the water).

**Why step 1 matters.** Using 0.0600 M as the MgCl₂ concentration gives 12.0 mL, which doubles every ion concentration.

## Worked example 3: mixing two solutions

**Question.** 50.0 mL of 0.200 M NaCl is mixed with 25.0 mL of 0.300 M CaCl₂. No reaction occurs. Find [Cl⁻], [Na⁺] and [Ca²⁺] in the mixture. Assume the volumes add.

1. Moles of Cl⁻ from NaCl: 0.200 mol L⁻¹ × 0.0500 L = 0.0100 mol.
2. Moles of Cl⁻ from CaCl₂: 2 × (0.300 mol L⁻¹ × 0.0250 L) = 2 × 0.00750 = 0.0150 mol.
3. Total Cl⁻ = 0.0250 mol; total volume = 0.0750 L.
4. [Cl⁻] = 0.0250 mol ÷ 0.0750 L = 0.333 M.
5. [Na⁺] = 0.0100 mol ÷ 0.0750 L = 0.133 M; [Ca²⁺] = 0.00750 mol ÷ 0.0750 L = 0.100 M.

**Answer.** [Cl⁻] = **0.333 M**, [Na⁺] = **0.133 M**, [Ca²⁺] = **0.100 M**.

**Check the charges.** Positive: 0.133 + 2(0.100) = 0.333 M of positive charge. Negative: 0.333 M. The solution is electrically neutral, as it must be.

**A tempting wrong method.** The Cl⁻ concentrations of the two starting solutions are 0.200 M and 0.600 M. Averaging them gives 0.400 M, which is wrong because the volumes are different. Always go through moles.

## Common misconceptions

- **"A solution must be a liquid."** Air is a gaseous solution and brass is a solid one. Homogeneous is the test, not the state.
- **"Coloured means heterogeneous."** A blue copper(II) sulfate solution is perfectly homogeneous. Cloudiness, layers or settling grains show a heterogeneous mixture; colour does not.
- **Using litres of solvent.** Molarity uses the final volume of the whole solution. That is why volumetric flasks are filled to a mark after the solute dissolves.
- **Forgetting to convert mL to L.** 0.100 mol in 250 mL is 0.400 M, not 0.000400 M.
- **Ignoring how many ions a formula gives.** 0.10 M Al(NO₃)₃ is 0.30 M in nitrate. Count the ions from the formula, keeping polyatomic ions whole.
- **"Diluting removes solute."** Dilution keeps the moles of solute fixed and lowers the concentration. Only the volume changes.
- **"A smaller portion is less concentrated."** Pouring out part of a solution changes the moles in your portion, not the molarity.
- **Averaging concentrations when mixing.** Add moles, then divide by the total volume.

## Where this leads

Molarity is the unit you will use for solution stoichiometry and titration (Topics 4.5 and 4.6), rate laws in Unit 5, equilibrium constants in Unit 7 and pH in Unit 8. Next, Topic 3.8 shows how to draw solutions at the particle level so that a diagram shows both the interactions and the concentrations: [Representations of Solutions](/advanced-course-resources/chemistry/3-8-representations-solutions-study-guide/). Try the [practice questions](/advanced-course-resources/chemistry/3-7-solutions-mixtures-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-7-solutions-mixtures-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-7-solutions-mixtures-checklist/) to consolidate. If you want to review gases first, go back to [Deviation from Ideal Gas Law](/advanced-course-resources/chemistry/3-6-deviation-ideal-gas-law-study-guide/).
