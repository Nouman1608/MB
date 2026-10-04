---
resourceId: "mb-ap-chem-1.1-study-guide"
title: "Moles and Molar Mass: Study Guide (Chemistry 1.1)"
description: "Learn why chemists count particles in moles, how molar mass links grams to particles, and how to convert between mass, moles and particles with dimensional analysis."
course: "chemistry"
unit: 1
topics: ["1.1"]
resourceType: "study-guide"
prerequisites:
  - "Scientific notation and significant figures"
  - "Reading a chemical formula, including brackets such as Ca(NO₃)₂"
learningObjectives:
  - "Explain why chemists need the mole to connect lab-scale masses to numbers of particles"
  - "Calculate molar mass from a formula using average atomic masses"
  - "Convert between mass, amount in moles and number of particles using dimensional analysis"
  - "Count atoms of one element inside a given amount of a compound"
skills: ["1", "5"]
studyMinutes: 35
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Use the molar masses from the periodic table you are given; keep unrounded values until the final step"
related: ["mb-ap-chem-1.1-revision-notes", "mb-ap-chem-1.1-practice", "mb-ap-chem-1.1-checklist"]
next: "mb-ap-chem-1.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A mole is 6.022 × 10²³ particles (Avogadro's number, N_A). It lets you count particles by weighing them."
  - "Molar mass M (g mol⁻¹) is numerically equal to the average mass of one particle in atomic mass units."
  - "n = m / M converts grams to moles; N = n × N_A converts moles to particles."
  - "Always write units on every step: if the units cancel to the answer's unit, the setup is right."
faqs:
  - question: "Is molar mass the same as relative formula mass?"
    answer: "They have the same number. Relative formula mass has no unit; molar mass is the mass of one mole and has the unit g mol⁻¹. For water both are 18.02, but only molar mass is 18.02 g mol⁻¹."
  - question: "Why are particle numbers so large?"
    answer: "Atoms are tiny: one carbon atom has a mass of about 2 × 10⁻²³ g. Any sample you can weigh therefore holds roughly 10²² particles or more."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why chemists count in moles

In the lab you never count atoms one by one. You weigh a solid or measure a volume of solution. But reactions happen particle by particle: one oxygen molecule meets two hydrogen molecules, not "one gram meets two grams". Chemists need a bridge between the mass on the balance and the number of particles reacting. That bridge is the **mole**.

A mole is a fixed number of particles, in the same way that a dozen is 12 eggs:

- **1 mol = 6.022 × 10²³ particles.** This number is Avogadro's number. Written as a constant with units, N_A = 6.022 × 10²³ mol⁻¹.
- "Particles" means whatever the formula describes: atoms for Fe, molecules for H₂O, formula units for an ionic compound such as NaCl.

## Molar mass: why the numbers line up

The average mass of one carbon atom is about 12.01 atomic mass units (amu). The average mass of **one mole** of carbon atoms is 12.01 **grams**. This is not a coincidence: the amu and the mole were chosen so that the numbers match (since the 2019 redefinition of the mole they agree to better than one part in a billion, which is exact for every calculation in this course). So:

> The molar mass M of a substance, in g mol⁻¹, has the same number as the average mass of one of its particles in amu.

To find a molar mass, add the average atomic masses of every atom in the formula.

| Substance | Working | Molar mass |
|---|---|---|
| H₂O | 2(1.008) + 16.00 | 18.02 g mol⁻¹ |
| CO₂ | 12.01 + 2(16.00) | 44.01 g mol⁻¹ |
| CaCO₃ | 40.08 + 12.01 + 3(16.00) | 100.09 g mol⁻¹ |
| Ca(NO₃)₂ | 40.08 + 2(14.01) + 6(16.00) | 164.10 g mol⁻¹ |

The bracket in Ca(NO₃)₂ multiplies everything inside it: 2 nitrogen atoms and 2 × 3 = 6 oxygen atoms.

## The three-way conversion

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="mole-map-title mole-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mole-map-title">Converting between mass, moles and particles</title>
<desc id="mole-map-desc">Three boxes in a row: mass in grams, amount in moles, number of particles. From mass to moles divide by molar mass M; from moles back to mass multiply by M. From moles to particles multiply by Avogadro's number N_A; from particles back to moles divide by N_A.</desc>
<rect x="10" y="55" width="150" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="85" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Mass, m</text>
<text x="85" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">grams (g)</text>
<rect x="245" y="55" width="150" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Amount, n</text>
<text x="320" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">moles (mol)</text>
<rect x="480" y="55" width="150" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="555" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Particles, N</text>
<text x="555" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">(no unit)</text>
<path d="M162 72 H240" stroke="#1d2b44" stroke-width="2" marker-end="url(#a1)"/>
<path d="M243 100 H165" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a1)"/>
<path d="M397 72 H475" stroke="#1d2b44" stroke-width="2" marker-end="url(#a1)"/>
<path d="M478 100 H400" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a1)"/>
<text x="202" y="45" text-anchor="middle" font-size="14" fill="#1d2b44">÷ M</text>
<text x="202" y="135" text-anchor="middle" font-size="14" fill="#1d2b44">× M</text>
<text x="437" y="45" text-anchor="middle" font-size="14" fill="#1d2b44">× N_A</text>
<text x="437" y="135" text-anchor="middle" font-size="14" fill="#1d2b44">÷ N_A</text>
<defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Solid arrows go left to right (mass → moles → particles); dashed arrows go back. Moles are always the middle step.</figcaption>
</figure>

The two relationships you need are:

- **n = m / M** (amount in mol = mass in g ÷ molar mass in g mol⁻¹)
- **N = n × N_A** (number of particles = amount in mol × 6.022 × 10²³ mol⁻¹)

You can go straight from grams to particles only by passing through moles.

### Dimensional analysis: let the units check you

Write each step as a fraction whose units cancel. For 9.01 g of water:

9.01 g × (1 mol / 18.02 g) × (6.022 × 10²³ molecules / 1 mol) = 3.01 × 10²³ molecules

The "g" cancels, then "mol" cancels, leaving "molecules". If you had flipped a fraction by mistake, you would be left with g² mol⁻¹ or similar nonsense, which tells you to fix the setup before you calculate.

## Worked example 1: from grams to molecules and atoms

**Question.** A beaker contains 5.00 g of water. How many water molecules does it contain, and how many hydrogen atoms?

1. Molar mass: M(H₂O) = 2(1.008) + 16.00 = 18.016 g mol⁻¹ (keep this unrounded for now).
2. Moles: n = 5.00 g ÷ 18.016 g mol⁻¹ = 0.27753 mol.
3. Molecules: N = 0.27753 mol × 6.022 × 10²³ mol⁻¹ = 1.671 × 10²³ molecules.
4. Atoms of hydrogen: each molecule has 2 H atoms, so 2 × 1.671 × 10²³ = 3.342 × 10²³ H atoms.

**Answer.** 1.67 × 10²³ molecules and 3.34 × 10²³ hydrogen atoms (3 significant figures, matching 5.00 g).

**Check.** 5 g is a little more than a quarter of a mole (18 g), so a little more than a quarter of 6 × 10²³ is sensible.

## Worked example 2: from atoms of one element back to mass

**Question.** A sample of calcium carbonate, CaCO₃, contains 3.0 × 10²² oxygen atoms. What is the mass of the sample?

1. Each formula unit of CaCO₃ contains 3 O atoms, so the number of formula units is 3.0 × 10²² ÷ 3 = 1.0 × 10²² formula units.
2. Moles of CaCO₃: n = 1.0 × 10²² ÷ 6.022 × 10²³ mol⁻¹ = 0.01661 mol.
3. Molar mass: M(CaCO₃) = 40.08 + 12.01 + 3(16.00) = 100.09 g mol⁻¹.
4. Mass: m = n × M = 0.01661 mol × 100.09 g mol⁻¹ = 1.662 g.

**Answer.** 1.7 g (2 significant figures, because 3.0 × 10²² has two).

**Why step 1 matters.** If you skip the "÷ 3", you calculate the mass of a sample containing 3.0 × 10²² *formula units*, which is three times too large (5.0 g).

## Common misconceptions

- **"A mole of any substance has the same mass."** No: a mole always has the same *number* of particles, but each kind of particle has its own mass. 1 mol of H₂ is 2.016 g; 1 mol of CO₂ is 44.01 g.
- **"Equal masses contain equal numbers of particles."** Only if the molar masses are equal. 10.0 g of Mg (24.31 g mol⁻¹) contains more atoms than 10.0 g of Al (26.98 g mol⁻¹).
- **Ignoring subscripts and brackets.** In Ca(NO₃)₂ there are 6 oxygen atoms, not 3 and not 4.
- **Mixing up molecules and atoms.** One mole of O₂ molecules contains two moles of O atoms.
- **Multiplying by N_A when you should divide.** Converting a particle count *to* moles makes the number much smaller, so you divide by 6.022 × 10²³.
- **Rounding too early.** Rounding the molar mass or the moles mid-calculation can shift the final significant figure. Round once, at the end.

## Where this leads

Moles are the counting unit for the whole course. Next you will use them to interpret mass spectra (Topic 1.2), find empirical formulas from percent composition (Topics 1.3 and 1.4), and later do stoichiometry (Topic 4.5), gas calculations (Topic 3.4) and solution concentration (Topic 3.7). Try the [practice questions](/advanced-course-resources/chemistry/1-1-moles-and-molar-mass-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/1-1-moles-and-molar-mass-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-1-moles-and-molar-mass-checklist/) to consolidate.
