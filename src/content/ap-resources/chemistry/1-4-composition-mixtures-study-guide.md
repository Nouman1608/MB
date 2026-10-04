---
resourceId: "mb-ap-chem-1.4-study-guide"
title: "Composition of Mixtures: Study Guide (Chemistry 1.4)"
description: "Learn how pure substances and mixtures differ at the particle level, and how elemental analysis by mass reveals the purity of a sample and the make-up of a mixture."
course: "chemistry"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites:
  - "Converting between mass and moles with n = m / M"
  - "Mass percent of an element in a pure compound"
prerequisiteResources: ["mb-ap-chem-1.3-study-guide"]
learningObjectives:
  - "Describe the difference between a pure substance and a mixture in terms of the particles they contain"
  - "Explain why a pure compound always has the same mass percent of each element, while a mixture can have a range of values"
  - "Use the mass of one element found by analysis to calculate the purity of a sample"
  - "Find the amounts of two components in a mixture when both contain the analysed element"
  - "Use elemental analysis data to find relative numbers of atoms and decide whether a sample is pure"
skills: ["1", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use the molar masses from the periodic table you are given; keep unrounded mass fractions until the final step"
related: ["mb-ap-chem-1.4-revision-notes", "mb-ap-chem-1.4-practice", "mb-ap-chem-1.4-checklist"]
next: "mb-ap-chem-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A pure substance contains particles of one type only; a mixture contains two or more types in proportions that can vary."
  - "A pure compound has a fixed mass percent of each element. A mixture's mass percent depends on how much of each component it holds."
  - "If an impurity contains none of the analysed element, purity = (measured mass of element ÷ mass fraction of element in the pure compound) ÷ sample mass."
  - "For a two-component mixture, write one equation for total mass and one for the analysed element, then solve, usually in moles."
  - "A non-whole-number atom ratio, or a mass percent that changes from sample to sample, is evidence of a mixture."
faqs:
  - question: "Can a mixture have a chemical formula?"
    answer: "No. A formula describes one type of particle in fixed proportions. A mixture can only be described by its components and how much of each it contains, for example 38% NaCl and 62% KCl by mass."
  - question: "Is a sample that looks uniform always pure?"
    answer: "No. Salt dissolved in water looks the same everywhere but contains two types of particle. Only the particle-level make-up, or data such as elemental analysis, tells you whether a sample is pure."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Pure substances and mixtures at the particle level

In Topic 1.3 you saw that a pure compound always has the same composition. Water is always 11.19% hydrogen by mass, whether it comes from a tap in Lahore or a glacier in Iceland. Real samples are often not pure, though. A bag of salt may contain some sand. A rock may hold two different iron oxides. This topic asks a practical question: **if you measure how much of one element a sample contains, what can you say about what the sample is made of?**

Start with the particles.

- A **pure substance** contains particles of **one type only**. These may be atoms (in an element such as Fe), molecules (such as H₂O) or formula units (such as NaCl). Every particle is identical, so the proportions of the elements are fixed by the formula.
- A **mixture** contains particles of **two or more types**. The relative amounts of the components are not fixed. You can mix 1 g of salt with 10 g of sand or with 2 g of sand, and both are still "salt and sand".

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="mix-part-title mix-part-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mix-part-title">Particle diagrams of a pure element, a pure compound and a mixture</title>
<desc id="mix-part-desc">Three boxes. The first box, labelled pure element, holds six identical single open circles. The second box, labelled pure compound, holds five identical units, each a large open circle joined to a small filled circle. The third box, labelled mixture, holds three of those same circle units plus three pairs of joined squares, so it contains two different types of particle.</desc>
<rect x="10" y="20" width="190" height="160" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="225" y="20" width="190" height="160" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="440" y="20" width="190" height="160" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="50" cy="60" r="12"/><circle cx="105" cy="55" r="12"/><circle cx="160" cy="65" r="12"/>
<circle cx="60" cy="130" r="12"/><circle cx="115" cy="120" r="12"/><circle cx="165" cy="140" r="12"/>
</g>
<g stroke="#1d2b44" stroke-width="2">
<circle cx="260" cy="60" r="12" fill="#ffffff"/><circle cx="279" cy="60" r="7" fill="#1d2b44"/>
<circle cx="345" cy="55" r="12" fill="#ffffff"/><circle cx="364" cy="55" r="7" fill="#1d2b44"/>
<circle cx="300" cy="105" r="12" fill="#ffffff"/><circle cx="319" cy="105" r="7" fill="#1d2b44"/>
<circle cx="255" cy="150" r="12" fill="#ffffff"/><circle cx="274" cy="150" r="7" fill="#1d2b44"/>
<circle cx="355" cy="140" r="12" fill="#ffffff"/><circle cx="374" cy="140" r="7" fill="#1d2b44"/>
</g>
<g stroke="#1d2b44" stroke-width="2">
<circle cx="475" cy="60" r="12" fill="#ffffff"/><circle cx="494" cy="60" r="7" fill="#1d2b44"/>
<circle cx="580" cy="110" r="12" fill="#ffffff"/><circle cx="599" cy="110" r="7" fill="#1d2b44"/>
<circle cx="480" cy="150" r="12" fill="#ffffff"/><circle cx="499" cy="150" r="7" fill="#1d2b44"/>
<rect x="545" y="45" width="18" height="18" fill="#ffffff"/><rect x="563" y="45" width="18" height="18" fill="#ffffff"/>
<rect x="490" y="95" width="18" height="18" fill="#ffffff"/><rect x="508" y="95" width="18" height="18" fill="#ffffff"/>
<rect x="545" y="145" width="18" height="18" fill="#ffffff"/><rect x="563" y="145" width="18" height="18" fill="#ffffff"/>
</g>
<text x="105" y="205" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Pure element</text>
<text x="320" y="205" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Pure compound</text>
<text x="535" y="205" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Mixture</text>
<text x="105" y="224" text-anchor="middle" font-size="12" fill="#1d2b44">one type of atom</text>
<text x="320" y="224" text-anchor="middle" font-size="12" fill="#1d2b44">one type of particle, fixed ratio</text>
<text x="535" y="224" text-anchor="middle" font-size="12" fill="#1d2b44">two types of particle, ratio can vary</text>
</svg>
<figcaption>Figure 1. Shapes, not shading, show the particle types. Every particle in a pure substance is the same; a mixture holds at least two kinds, and the number of each kind is not fixed.</figcaption>
</figure>

Notice that the compound in the middle box contains two elements, but it is still pure: every unit is identical. "Pure" means one type of particle, not one element.

## Mass percent: fixed for a compound, variable for a mixture

The **mass percent** of an element is the mass of that element divided by the mass of the sample, times 100. For a pure compound you can calculate it from the formula alone:

mass percent of X = (number of X atoms in the formula × atomic mass of X) ÷ molar mass × 100

| Pure compound | Working | Mass percent of Cl |
|---|---|---|
| NaCl | 35.45 ÷ 58.44 × 100 | 60.66% |
| KCl | 35.45 ÷ 74.55 × 100 | 47.55% |

Every pure sample of NaCl is 60.66% chlorine. This is the law of definite proportions from Topic 1.3.

A mixture of NaCl and KCl is different. Its chlorine content depends on how much of each salt is present. If the mixture is all NaCl, it is 60.66% Cl. If it is all KCl, it is 47.55% Cl. Any real mixture of the two must lie **between** those limits.

<figure>
<svg viewBox="0 0 640 150" role="img" aria-labelledby="mix-line-title mix-line-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mix-line-title">Possible chlorine mass percents for mixtures of NaCl and KCl</title>
<desc id="mix-line-desc">A horizontal number line of chlorine mass percent from 40 to 65 percent. Pure KCl is marked at 47.55 percent and pure NaCl at 60.66 percent. The stretch between them is drawn as a thick bar labelled possible for a mixture. A diamond marks a mixture at 52.5 percent, used in Worked example 2.</desc>
<line x1="40" y1="80" x2="600" y2="80" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2">
<line x1="40" y1="74" x2="40" y2="86"/><line x1="152" y1="74" x2="152" y2="86"/><line x1="264" y1="74" x2="264" y2="86"/>
<line x1="376" y1="74" x2="376" y2="86"/><line x1="488" y1="74" x2="488" y2="86"/><line x1="600" y1="74" x2="600" y2="86"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="104">40%</text><text x="152" y="104">45%</text><text x="264" y="104">50%</text>
<text x="376" y="104">55%</text><text x="488" y="104">60%</text><text x="600" y="104">65%</text>
</g>
<rect x="210" y="72" width="293" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="210" y1="40" x2="210" y2="72" stroke="#1d2b44" stroke-width="2"/>
<line x1="503" y1="40" x2="503" y2="72" stroke="#1d2b44" stroke-width="2"/>
<text x="210" y="32" text-anchor="middle" font-size="13" fill="#1d2b44">pure KCl 47.55%</text>
<text x="503" y="32" text-anchor="middle" font-size="13" fill="#1d2b44">pure NaCl 60.66%</text>
<path d="M320 66 L328 80 L320 94 L312 80 z" fill="#1d2b44"/>
<text x="320" y="128" text-anchor="middle" font-size="13" fill="#1d2b44">mixture in Worked example 2: 52.5%</text>
<text x="357" y="60" text-anchor="middle" font-size="12" fill="#1d2b44">possible for a mixture</text>
</svg>
<figcaption>Figure 2. A mixture of two chlorides can only have a chlorine mass percent between the values for the two pure compounds. A result outside the bar means the sample contains something else.</figcaption>
</figure>

One trap: the mixture's mass percent is **not** simply the average of 60.66% and 47.55%. That average (54.11%) is right only for a mixture with equal **masses** of the two salts. In general the mixture's value is a weighted average, weighted by the mass of each component.

## Is the sample pure? Reading elemental analysis data

**Elemental analysis** means measuring how much of one or more elements a sample contains. One common approach is to convert the element into a compound you can collect and weigh, for example by precipitating it or by burning the sample and weighing the products. You do not need the lab details for this topic; you need to interpret the numbers.

Elemental analysis lets you answer two kinds of question.

1. **What are the relative numbers of atoms?** Convert each element's mass to moles and compare. For a pure compound you get the whole-number ratio in its formula (this is how you found empirical formulas in Topic 1.3).
2. **How pure is the sample?** Compare the measured mass percent with the value the formula predicts.

Here is fictional data for samples taken from two bottles, each labelled "calcium carbonate, CaCO₃". Pure CaCO₃ is 40.04% calcium by mass.

| Sample | Bottle 1: % Ca by mass | Bottle 2: % Ca by mass |
|---|---|---|
| First | 40.0 | 31.2 |
| Second | 40.0 | 35.6 |
| Third | 40.1 | 28.4 |

Bottle 1 gives the same value every time, and it matches the formula. That is what a pure substance does. Bottle 2 gives values that are all **below** 40.04% and that **vary** from sample to sample. Both facts point to a mixture: CaCO₃ with something that contains less calcium (or none), unevenly spread through the bottle.

The identification step here uses skill 5.A: before you calculate anything, decide which quantities in the data you need. For a purity question you need the sample mass, the mass of the analysed element, and the mass fraction of that element in the pure compound.

### The purity calculation

If the impurity contains **none** of the analysed element, all of that element came from the compound you are interested in. Then:

1. mass of compound = mass of element ÷ (mass fraction of element in the compound)
2. purity (mass percent of compound in the sample) = mass of compound ÷ mass of sample × 100

You can do step 1 in moles instead: moles of element → moles of compound (using the formula) → mass of compound. Both routes give the same answer.

## Worked example 1: purity of a contaminated salt

**Question.** A 2.50 g sample of potassium chloride, KCl, is contaminated with sand. Sand contains no chlorine. Analysis shows the sample contains 1.02 g of chlorine. What is the percent by mass of KCl in the sample?

1. **Choose the quantities.** You need the sample mass (2.50 g), the chlorine mass (1.02 g) and the mass fraction of Cl in KCl.
2. **Mass fraction of Cl in KCl:** 35.45 ÷ 74.55 = 0.47552.
3. **Mass of KCl:** all the chlorine is in the KCl, so m(KCl) = 1.02 g ÷ 0.47552 = 2.1450 g.
   *Mole route:* n(Cl) = 1.02 g ÷ 35.45 g mol⁻¹ = 0.028773 mol. One Cl per KCl, so n(KCl) = 0.028773 mol and m(KCl) = 0.028773 mol × 74.55 g mol⁻¹ = 2.1450 g. Same result.
4. **Purity:** 2.1450 g ÷ 2.50 g × 100 = 85.80%.

**Answer.** The sample is **85.8% KCl by mass** (3 significant figures, matching 2.50 g and 1.02 g). The remaining 0.355 g is sand.

**Check.** The sample is 1.02 ÷ 2.50 × 100 = 40.8% chlorine. That is below 47.55% (pure KCl), as it must be when an impurity with no chlorine dilutes the salt. A purity above 100% would have told you the impurity also contains chlorine, or that the data are wrong.

## Worked example 2: a mixture where both parts contain the element

**Question.** A 4.00 g mixture of sodium chloride, NaCl, and potassium chloride, KCl, contains 2.10 g of chlorine. Find (a) the mass of each salt and (b) the ratio of sodium atoms to potassium atoms in the mixture.

Now the chlorine comes from **both** salts, so one division is not enough. You need two equations. Let a = moles of NaCl and b = moles of KCl.

1. **Chlorine equation (moles).** Each formula unit has one Cl, so a + b = n(Cl) = 2.10 g ÷ 35.45 g mol⁻¹ = 0.059238 mol.
2. **Mass equation.** 58.44a + 74.55b = 4.00 g.
3. **Solve.** From step 1, a = 0.059238 − b. Substitute:
   58.44(0.059238 − b) + 74.55b = 4.00
   3.4619 + 16.11b = 4.00, so b = 0.033402 mol and a = 0.025836 mol.
4. **Masses.** m(NaCl) = 0.025836 × 58.44 = 1.510 g; m(KCl) = 0.033402 × 74.55 = 2.490 g. These add to 4.00 g, which checks the algebra.
5. **Atom ratio.** Each NaCl holds one Na atom (as Na⁺) and each KCl one K atom, so Na : K = 0.025836 : 0.033402 = 0.774 : 1.

**Answer.** (a) **1.51 g NaCl and 2.49 g KCl** (37.7% and 62.3% by mass). (b) Na : K = **0.774 : 1** (or about 1 : 1.29).

**Interpretation.** The chlorine mass percent is 2.10 ÷ 4.00 × 100 = 52.5%, which sits between 47.55% and 60.66% (Figure 2). It is closer to the KCl value, so it makes sense that KCl is the larger part. The ratio of metal atoms is not a whole-number ratio, which is normal for a mixture: you could have made it with any proportions.

You can also solve with mass fractions: if x is the mass of NaCl, then 0.60661x + 0.47552(4.00 − x) = 2.10, giving x = 1.510 g. Use whichever route you find clearer.

## Common misconceptions

- **"A substance made of two elements is a mixture."** No. A compound such as NaCl contains two elements but only one type of formula unit, so it is pure. A mixture has two or more types of particle.
- **"A uniform-looking sample must be pure."** Salt water looks the same everywhere but contains water molecules and ions from the salt. Appearance does not decide purity; particle make-up does.
- **"The mass percent of a mixture is the simple average of the components' values."** Only for equal masses. In general it is a weighted average and can be anywhere between the two pure values.
- **"Divide the element mass by the sample mass and that is the purity."** That gives the mass percent of the *element* in the sample (40.8% Cl in Worked example 1), not the percent of the *compound* (85.8% KCl). You must divide by the element's mass fraction in the compound as well.
- **Assuming the impurity contains none of the element without checking.** The one-step purity method works only if that is true. If both components contain the element, set up two equations as in Worked example 2.
- **"A non-whole-number atom ratio means I made an arithmetic error."** For a pure compound, yes, check your working. For a mixture, a non-whole-number ratio is expected and is itself evidence that the sample is a mixture.
- **Rounding mass fractions early.** Rounding 0.47552 to 0.48 changes the purity in Worked example 1 from 85.8% to 85.0%. Keep full values until the end.

## Where this leads

The idea that a mixture's composition can vary returns in Unit 3, where you describe solutions and gas mixtures with concentration, mole fraction and partial pressure (Topics 3.4 and 3.7). Purity calculations reappear whenever you use stoichiometry with real, imperfect samples (Topic 4.5). Next you move from what samples are made of to what atoms are made of: [Topic 1.5, Atomic Structure and Electron Configuration](/advanced-course-resources/chemistry/1-5-atomic-structure-electron-configuration-study-guide/). If the empirical formula steps felt shaky, revisit [Topic 1.3, Elemental Composition of Pure Substances](/advanced-course-resources/chemistry/1-3-elemental-composition-pure-substances-study-guide/).

Now try the [practice questions](/advanced-course-resources/chemistry/1-4-composition-mixtures-practice/), then use the [revision notes](/advanced-course-resources/chemistry/1-4-composition-mixtures-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-4-composition-mixtures-checklist/) to consolidate.
