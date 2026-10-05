---
resourceId: "mb-ap-chem-9.11-study-guide"
title: "Electrolysis and Faraday's Law: Study Guide (Chemistry 9.11)"
description: "Learn how current, time and the Faraday constant give the moles of electrons in a cell, and use them to find masses deposited or removed, times, currents and ion charges."
course: "chemistry"
unit: 9
topics: ["9.11"]
resourceType: "study-guide"
prerequisites:
  - "Writing redox half-reactions and counting the electrons in them (Topic 4.9)"
  - "Anode, cathode and electron flow in galvanic and electrolytic cells (Topic 9.8)"
  - "Converting between mass and moles (Topic 1.1)"
prerequisiteResources: ["mb-ap-chem-9.10-study-guide"]
learningObjectives:
  - "Use I = q / t to move between current, time and the charge that passes through a cell"
  - "Convert charge into moles of electrons with the Faraday constant, and back again"
  - "Use the electrons in a half-reaction to link moles of electrons to moles of metal deposited or removed, or gas formed"
  - "Calculate the mass, time or current needed for an electroplating or electrolysis task"
  - "Work out the charge on a metal ion from the mass deposited by a measured charge"
  - "Apply the same electron counting to galvanic cells and to cells joined in series"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "F = 96,485 C mol⁻¹ of electrons; 1 A = 1 C s⁻¹. Molar masses: Ni 58.69, Zn 65.38, Ag 107.87, Sn 118.71, Au 196.97 g mol⁻¹. Convert minutes and hours to seconds before using I = q / t"
related: ["mb-ap-chem-9.11-revision-notes", "mb-ap-chem-9.11-practice", "mb-ap-chem-9.11-checklist"]
next: "mb-ap-chem-9.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Current is the rate of flow of charge: I = q / t, so the charge passed is q = I × t (amperes × seconds = coulombs)."
  - "One mole of electrons carries 96,485 C. This is the Faraday constant, F. Moles of electrons = q / F."
  - "The half-reaction tells you how many electrons each particle needs: 1 for Ag⁺ → Ag, 2 for Cu²⁺ → Cu, 3 for Al³⁺ → Al, 4 for each O₂ made from water."
  - "The chain is always current and time → charge → moles of electrons → moles of substance → mass. You can run it forwards or backwards."
  - "The same charge passes through every cell in a series circuit and through both electrodes of one cell, so electron moles link all the products."
faqs:
  - question: "Do I have to remember the value of F?"
    answer: "No. The Faraday constant, 96,485 C per mole of electrons, and the relationship I = q / t are given on the equations and constants sheet in the exam. You do need to know when and how to use them."
  - question: "Does a more concentrated solution plate more metal?"
    answer: "Not for the same charge. The amount of metal deposited depends on how many electrons pass, which is set by the current and the time. Concentration matters only if the solution runs out of the metal ion."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Counting electrons with an ammeter and a clock

In [Topic 9.8](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-study-guide/) you saw that an electrolytic cell uses a power supply to force an unfavourable reaction, such as depositing a metal on an electrode. You also linked the two electrodes through the electrons they share. This topic answers the next question: **how much** product do you get?

The key idea is simple. Every particle that is reduced at the cathode needs a fixed number of electrons, set by its half-reaction. If you can count the electrons that flowed, you can count the particles. You cannot count electrons one by one, but you can measure two things in the lab:

- the **current**, I, with an ammeter, in amperes (A);
- the **time**, t, with a clock, in seconds (s).

Current is the rate at which charge flows. One ampere means one coulomb of charge passes each second (1 A = 1 C s⁻¹). So:

> **I = q / t**, which rearranges to **q = I × t**

Here q is the charge in coulombs (C). Always convert minutes or hours into seconds first. A current of 1.50 A for 2.0 minutes passes 1.50 × 120 = 180 C, not 1.50 × 2.0 = 3.0 C.

## The Faraday constant: from coulombs to moles of electrons

One electron carries a charge of 1.602 × 10⁻¹⁹ C. One mole of electrons is 6.022 × 10²³ electrons, so a mole of electrons carries:

6.022 × 10²³ mol⁻¹ × 1.602 × 10⁻¹⁹ C ≈ 96,500 C mol⁻¹

The precise value is **F = 96,485 C mol⁻¹**, the **Faraday constant**. It is the charge on one mole of electrons. It works exactly like a molar mass, but for charge instead of mass:

| To convert | Use | Like |
|---|---|---|
| grams → moles of substance | n = m / M | dividing by grams per mole |
| coulombs → moles of electrons | n(e⁻) = q / F | dividing by coulombs per mole |

So the full chain from the lab measurements to the amount of product is:

<figure>
<svg viewBox="0 0 640 420" role="img" aria-labelledby="fchain-title fchain-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fchain-title">The Faraday calculation chain</title>
<desc id="fchain-desc">Five boxes stacked from top to bottom: current I and time t; charge q in coulombs; moles of electrons; moles of substance; mass in grams. Solid arrows go down the right-hand side with these labels: q equals I times t; divide by F, 96,485 coulombs per mole; divide by the number of electrons per particle from the half-reaction; multiply by molar mass M. Dashed arrows go up the left-hand side for working backwards: divide by M; multiply by electrons per particle; multiply by F; divide by t or by I.</desc>
<rect x="200" y="10" width="240" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="41" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Current I (A) and time t (s)</text>
<rect x="200" y="95" width="240" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Charge q (C)</text>
<rect x="200" y="180" width="240" height="50" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="211" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Moles of electrons, n(e⁻)</text>
<rect x="200" y="265" width="240" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="296" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Moles of substance, n</text>
<rect x="200" y="350" width="240" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="381" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Mass, m (g)</text>
<path d="M400 62 V90" stroke="#1d2b44" stroke-width="2" marker-end="url(#f1)"/>
<path d="M400 147 V175" stroke="#1d2b44" stroke-width="2" marker-end="url(#f1)"/>
<path d="M400 232 V260" stroke="#1d2b44" stroke-width="2" marker-end="url(#f1)"/>
<path d="M400 317 V345" stroke="#1d2b44" stroke-width="2" marker-end="url(#f1)"/>
<text x="452" y="82" font-size="13" fill="#1d2b44">q = I × t</text>
<text x="452" y="167" font-size="13" fill="#1d2b44">÷ F (96,485 C mol⁻¹)</text>
<text x="452" y="246" font-size="13" fill="#1d2b44">÷ electrons per particle</text>
<text x="452" y="262" font-size="12" fill="#1d2b44">(from the half-reaction)</text>
<text x="452" y="337" font-size="13" fill="#1d2b44">× M (g mol⁻¹)</text>
<path d="M240 90 V64" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f1)"/>
<path d="M240 175 V149" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f1)"/>
<path d="M240 260 V234" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f1)"/>
<path d="M240 345 V319" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f1)"/>
<text x="188" y="82" text-anchor="end" font-size="13" fill="#1d2b44">t = q / I or I = q / t</text>
<text x="188" y="167" text-anchor="end" font-size="13" fill="#1d2b44">× F</text>
<text x="188" y="252" text-anchor="end" font-size="13" fill="#1d2b44">× electrons per particle</text>
<text x="188" y="337" text-anchor="end" font-size="13" fill="#1d2b44">÷ M</text>
<defs><marker id="f1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Solid arrows on the right run the chain forwards (from measurements to mass). Dashed arrows on the left run it backwards (from a target mass to the charge, time or current needed). Moles of electrons are always the middle step.</figcaption>
</figure>

## The half-reaction sets the electron count

The step from moles of electrons to moles of substance comes from the balanced half-reaction. The **charge on the ion** decides how many electrons each atom needs.

| Half-reaction | Electrons per particle formed | Moles formed by 1 mol e⁻ |
|---|---|---|
| Ag⁺ + e⁻ → Ag | 1 per Ag | 1 mol Ag |
| Ni²⁺ + 2e⁻ → Ni | 2 per Ni | 0.5 mol Ni |
| Al³⁺ + 3e⁻ → Al | 3 per Al | 0.333 mol Al |
| 2Cl⁻ → Cl₂ + 2e⁻ | 2 per Cl₂ | 0.5 mol Cl₂ |
| 2H₂O → O₂ + 4H⁺ + 4e⁻ | 4 per O₂ | 0.25 mol O₂ |

So the same charge gives **more moles** of a metal whose ion has a **smaller charge**. For example, making 1.00 mol of Cl₂ at an anode needs 2.00 mol of electrons, which is 2 × 96,485 = 192,970 C.

The table also works for oxidation at the anode. If the anode is a metal that dissolves, as in electroplating with a silver or nickel anode, the same electron count tells you how much metal is **removed** from it.

## Worked example 1: mass deposited in electroplating

**Question.** A steel key is nickel-plated. It is made the cathode in a solution of nickel(II) sulfate, and a current of 1.80 A flows for 40.0 minutes. What mass of nickel is deposited? (Ni = 58.69 g mol⁻¹)

1. Time in seconds: 40.0 min × 60 s min⁻¹ = 2400 s.
2. Charge: q = I × t = 1.80 A × 2400 s = 4320 C.
3. Moles of electrons: n(e⁻) = 4320 C ÷ 96,485 C mol⁻¹ = 0.044774 mol.
4. Half-reaction: Ni²⁺ + 2e⁻ → Ni, so n(Ni) = 0.044774 ÷ 2 = 0.022387 mol.
5. Mass: m = 0.022387 mol × 58.69 g mol⁻¹ = 1.3139 g.

**Answer.** **1.31 g** of nickel (3 significant figures, matching the data).

**Check.** If you forget the "÷ 2", you get 2.63 g, twice the right answer. If you leave the time in minutes, you get about 0.022 g, which is 60 times too small. Both are common slips, so check the units and the half-reaction before you round.

## Worked example 2: how long will it take?

**Question.** A jeweller wants to deposit 0.500 g of gold on a ring from a solution containing Au³⁺ ions, using a steady current of 0.250 A. How long will this take? (Au = 196.97 g mol⁻¹)

This time you run the chain backwards (the dashed arrows in Figure 1).

1. Moles of gold: n(Au) = 0.500 g ÷ 196.97 g mol⁻¹ = 0.0025385 mol.
2. Half-reaction: Au³⁺ + 3e⁻ → Au, so n(e⁻) = 3 × 0.0025385 = 0.0076154 mol.
3. Charge: q = n(e⁻) × F = 0.0076154 mol × 96,485 C mol⁻¹ = 734.8 C.
4. Time: t = q / I = 734.8 C ÷ 0.250 A = 2939 s.

**Answer.** **2.94 × 10³ s**, which is about **49.0 minutes**.

**Interpretation.** Gold needs three electrons per atom, so it takes three times as long as plating the same number of moles of silver at the same current. Using one electron per atom would give about 16.3 minutes, which is far too short.

## Worked example 3: cells in series and the charge on an ion

When two electrolytic cells are joined **in series** (one after the other in a single loop), every electron that passes through one cell also passes through the other. The charge, and so the moles of electrons, is the same in both.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ser-title ser-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ser-title">Two electrolytic cells joined in series</title>
<desc id="ser-desc">A DC power supply at the top. A wire runs from the supply down to the left electrode of cell A, which holds silver nitrate solution; this electrode is labelled anode. The right electrode of cell A is labelled cathode, silver deposited. A wire joins the cathode of cell A to the left electrode of cell B, which holds a tin salt solution; this electrode is labelled anode. The right electrode of cell B is labelled cathode, tin deposited, and a wire runs from it back up to the supply. An arrow above the connecting wire, labelled e⁻ flow, points from the anode of cell B towards the cathode of cell A. The caption notes that there is only one path, so the same charge passes through both cells.</desc>
<rect x="235" y="10" width="170" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="35" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">DC power supply</text>
<path d="M100 120 V30 H235" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M405 30 H540 V120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M220 120 V90 H420 V120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M40 140 V250 H280 V140" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M360 140 V250 H600 V140" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="90" y="120" width="20" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="210" y="120" width="20" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="410" y="120" width="20" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="530" y="120" width="20" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">AgNO₃(aq)</text>
<text x="480" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">tin salt (aq)</text>
<text x="160" y="270" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Cell A</text>
<text x="480" y="270" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Cell B</text>
<text x="100" y="290" text-anchor="middle" font-size="11" fill="#1d2b44">anode</text>
<text x="220" y="290" text-anchor="middle" font-size="11" fill="#1d2b44">cathode: Ag forms</text>
<text x="420" y="290" text-anchor="middle" font-size="11" fill="#1d2b44">anode</text>
<text x="540" y="290" text-anchor="middle" font-size="11" fill="#1d2b44">cathode: Sn forms</text>
<path d="M360 80 H280" stroke="#1d2b44" stroke-width="2" marker-end="url(#s1)"/>
<text x="320" y="72" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ flow</text>
<defs><marker id="s1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 2. Two cells in series. There is only one path round the circuit, so the charge that deposits silver in cell A is the same charge that passes through cell B. The arrow shows electrons moving from the anode of cell B to the cathode of cell A along the connecting wire.</figcaption>
</figure>

**Question.** The two cells in Figure 2 run for 20.0 minutes. The cathode in cell A gains 1.079 g of silver and the cathode in cell B gains 0.594 g of tin. (a) Find the charge on the tin ions in cell B. (b) Find the average current. (Ag = 107.87, Sn = 118.71 g mol⁻¹)

**(a)**
1. Silver: Ag⁺ + e⁻ → Ag, so n(e⁻) = n(Ag) = 1.079 g ÷ 107.87 g mol⁻¹ = 0.010003 mol.
2. The same 0.010003 mol of electrons passed through cell B.
3. Moles of tin: n(Sn) = 0.594 g ÷ 118.71 g mol⁻¹ = 0.0050038 mol.
4. Electrons per tin atom: 0.010003 ÷ 0.0050038 = 1.999, which is **2**.

So each tin ion gained two electrons: the ions are **Sn²⁺**, and the cathode half-reaction is Sn²⁺ + 2e⁻ → Sn.

**(b)**
1. Charge: q = n(e⁻) × F = 0.010003 mol × 96,485 C mol⁻¹ = 965.1 C.
2. Current: I = q / t = 965.1 C ÷ 1200 s = **0.804 A**.

**Why this works.** The silver cell acts as a "charge meter": silver ions always take one electron each, so the mass of silver tells you the moles of electrons directly. Comparing that with the moles of another metal reveals the charge on its ion.

## The same counting works in a galvanic cell

Faraday's law is not only for electrolysis. In a galvanic cell (a battery), the current comes out of the cell instead of being pushed in, but every electron still comes from the anode half-reaction.

For example, a zinc-based battery delivers 0.200 A for 5.00 hours. The charge is 0.200 A × (5.00 × 3600 s) = 3600 C, which is 3600 ÷ 96,485 = 0.037311 mol of electrons. Zinc is oxidised at the anode: Zn → Zn²⁺ + 2e⁻. So 0.018656 mol of zinc is used, a mass of 0.018656 × 65.38 = **1.22 g**. The same reasoning tells you how long a battery with a given mass of anode metal can run at a given current.

## What changes the amount of product, and what does not

The mass of product depends only on the **charge passed** and the **half-reaction**:

- **Doubling the current** (same time) doubles the charge, so it doubles the product.
- **Doubling the time** (same current) also doubles the product.
- Doubling the current **and** halving the time leaves the charge, and the product, unchanged.
- A metal whose ion has a **higher charge** gives fewer moles for the same charge.
- **Concentration** and **electrode size** do not change the amount deposited for a given charge, as long as the ion does not run out. (They can affect how easy it is to keep the current steady, but the calculation uses the current that actually flowed.)

Real cells sometimes give **less** product than the calculation predicts. In water-based solutions, some electrons may reduce water to hydrogen gas instead of depositing the metal, or some deposit may flake off before weighing. The Faraday calculation gives the maximum product that the charge could make.

## Common misconceptions

- **"q = I × t works with the time in minutes."** Amperes are coulombs per **second**. Convert minutes and hours to seconds first.
- **"The charge in coulombs is the number of moles of electrons."** You must divide by F. 1930 C is about 0.0200 mol of electrons, not 1930 mol.
- **"One mole of electrons deposits one mole of any metal."** Only for 1+ ions. Cu²⁺ needs two moles of electrons per mole of copper; Al³⁺ needs three.
- **"Both electrodes change by the same mass."** They share the same moles of **electrons**. Different metals, different ion charges and different molar masses usually give different masses.
- **"A stronger solution plates faster."** For a fixed current and time, the amount deposited is fixed by the charge. Concentration does not appear in the calculation.
- **"In a series circuit, the current splits between the cells."** In series there is one path, so the same charge passes through every cell. (Current splits only between branches of a parallel circuit.)
- **"The calculated mass is what you always get."** It is the maximum the charge can produce. Side reactions or losses make the measured mass smaller.

## Where this leads

This is the last topic of the course framework. Faraday's law ties together moles (Topic 1.1), redox half-reactions (Topic 4.9) and the cells from [Topic 9.8](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-study-guide/), so it is a good place to check that unit 9 fits together. If cell potentials still feel shaky, go back to [Topic 9.10](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-study-guide/). Try the [practice questions](/advanced-course-resources/chemistry/9-11-electrolysis-faradays-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-11-electrolysis-faradays-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-11-electrolysis-faradays-law-checklist/) to consolidate, and finish with the [course roadmap](/advanced-course-resources/chemistry/#roadmap) for whole-course revision.
