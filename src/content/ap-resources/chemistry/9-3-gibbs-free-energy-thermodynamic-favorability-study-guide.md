---
resourceId: "mb-ap-chem-9.3-study-guide"
title: "Gibbs Free Energy and Thermodynamic Favorability: Study Guide (Chemistry 9.3)"
description: "Use the standard Gibbs free energy change to decide whether a process is thermodynamically favoured: from formation data, from ΔG° = ΔH° − TΔS°, and from the signs of ΔH° and ΔS°."
course: "chemistry"
unit: 9
topics: ["9.3"]
resourceType: "study-guide"
prerequisites:
  - "Enthalpy change of reaction and enthalpies of formation (Topics 6.6 and 6.8)"
  - "Predicting the sign of ΔS° and calculating it from standard molar entropies (Topics 9.1 and 9.2)"
  - "Converting between °C and K, and between J and kJ"
prerequisiteResources: ["mb-ap-chem-9.2-study-guide"]
learningObjectives:
  - "Say what the symbol ΔG° means, including the standard states it refers to"
  - "Decide whether a process is thermodynamically favoured from the sign of ΔG°"
  - "Calculate ΔG° from standard free energies of formation, using products minus reactants with coefficients"
  - "Calculate ΔG° at a given temperature from ΔH° and ΔS°, converting J to kJ"
  - "Predict from the signs of ΔH° and ΔS° whether a process is favoured at all, high, low or no temperatures"
  - "Explain, with particle-level reasoning, why both enthalpy and entropy are needed for processes such as freezing and dissolving"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Data on this page are standard values at 298 K. Convert ΔS° from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ before using ΔG° = ΔH° − TΔS°; temperature must be in kelvin"
related: ["mb-ap-chem-9.3-revision-notes", "mb-ap-chem-9.3-practice", "mb-ap-chem-9.3-checklist"]
next: "mb-ap-chem-9.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A process with ΔG° < 0 is thermodynamically favoured; with ΔG° > 0 it is not favoured as written (the reverse is favoured)."
  - "ΔG° can be found two ways: ΔG° = ΣΔG°f(products) − ΣΔG°f(reactants), or ΔG° = ΔH° − TΔS°."
  - "In ΔG° = ΔH° − TΔS°, ΔS° is usually given in J K⁻¹ mol⁻¹ and must be divided by 1000 to match ΔH° in kJ mol⁻¹. T is in kelvin."
  - "Signs decide it without calculation when ΔH° < 0 and ΔS° > 0 (favoured at all T) or ΔH° > 0 and ΔS° < 0 (favoured at no T)."
  - "When ΔH° and ΔS° have the same sign, temperature decides: high T favours the entropy-driven case, low T the enthalpy-driven case."
faqs:
  - question: "Is 'thermodynamically favoured' the same as 'spontaneous'?"
    answer: "Older books use 'spontaneous' for ΔG° < 0. The course prefers 'thermodynamically favoured' (exam spelling: favored) because 'spontaneous' sounds like 'fast' or 'happens on its own without a cause'. ΔG° says nothing about speed."
  - question: "Why does ΔG°f of O₂(g) not appear in my sum?"
    answer: "It does appear, but its value is zero. An element in its standard state has ΔG°f = 0, just as it has ΔH°f = 0."
  - question: "Can I use ΔG° = ΔH° − TΔS° at temperatures other than 298 K?"
    answer: "Yes, as an estimate. ΔH° and ΔS° change only a little with temperature, so you treat them as constant and put the new T into the equation. ΔG° itself changes a lot with T because of the TΔS° term."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two drives, one decision

In Unit 6 you saw that many favoured reactions release energy (ΔH < 0). In [Topic 9.2](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-study-guide/) you saw that many favoured changes spread matter and energy out (ΔS > 0). But neither rule works on its own:

- Ice melts in a warm room even though melting **absorbs** energy (ΔH > 0).
- Water freezes in a freezer even though freezing makes the particles **more ordered** (ΔS < 0).

So you need one quantity that weighs both effects at a given temperature. That quantity is the **Gibbs free energy change**, ΔG.

## What ΔG° means

The **standard Gibbs free energy change**, ΔG°, is the free energy change when the reaction happens with every reactant and product in its **standard state**:

- pure solids and pure liquids;
- solutes at a concentration of 1 M;
- gases at a pressure of 1 bar (essentially the same as 1 atm).

The unit is kJ mol⁻¹, where "per mole" means per mole of reaction as written in the balanced equation. Double the equation and ΔG° doubles.

The sign of ΔG° gives the verdict:

| Sign of ΔG° | Verdict |
|---|---|
| ΔG° < 0 | **thermodynamically favoured** as written |
| ΔG° > 0 | **not favoured** as written; the reverse process is favoured |

A note on words. Older books call a process with ΔG° < 0 "spontaneous". This course uses **thermodynamically favoured** (the exam spells it "favored") because "spontaneous" sounds like "sudden" or "happens for no reason". ΔG° tells you which direction is downhill in free energy. It tells you **nothing about how fast** the process goes. That idea is the whole of the next topic.

## Method 1: from free energies of formation

The **standard free energy of formation**, ΔG°f, is ΔG° for making one mole of a substance from its elements in their standard states. As with ΔH°f in [Topic 6.8](/advanced-course-resources/chemistry/6-8-enthalpy-formation-study-guide/), an element in its standard state, such as O₂(g) or C(graphite), has ΔG°f = 0.

The rule is the same "products minus reactants" rule you already know:

**ΔG°reaction = ΣnΔG°f(products) − ΣnΔG°f(reactants)**

Here n is each coefficient in the balanced equation.

Values used on this page (298 K, kJ mol⁻¹):

| Substance | ΔG°f | Substance | ΔG°f |
|---|---|---|---|
| C₆H₁₂O₆(s), glucose | −910.56 | NH₄Cl(s) | −202.97 |
| C₂H₅OH(l), ethanol | −174.8 | NH₃(g) | −16.4 |
| CO₂(g) | −394.39 | HCl(g) | −95.30 |

## Worked example 1: is fermentation favoured?

**Question.** Yeast turns glucose into ethanol and carbon dioxide:

C₆H₁₂O₆(s) → 2C₂H₅OH(l) + 2CO₂(g)

Use the table to find ΔG° at 298 K. Is the process thermodynamically favoured?

1. Products: 2(−174.8) + 2(−394.39) = −349.6 + (−788.78) = −1138.38 kJ.
2. Reactants: 1(−910.56) = −910.56 kJ.
3. ΔG° = products − reactants = −1138.38 − (−910.56) = **−227.82 kJ**, which is −227.8 kJ mol⁻¹ of reaction (1 mol of glucose).

**Answer.** ΔG° = −227.8 kJ mol⁻¹. ΔG° < 0, so the fermentation of glucose is thermodynamically favoured at 298 K.

**Check the traps.** Reactants minus products gives +227.8 kJ, the wrong sign. Forgetting the coefficients gives +341.4 kJ, the wrong sign *and* the wrong size. Write the coefficient in front of each value before you add.

## Method 2: from ΔH° and ΔS°

If you know ΔH° and ΔS° at a temperature T, you can calculate ΔG° directly:

**ΔG° = ΔH° − TΔS°**

Read the two terms as the two drives:

- **ΔH°** is the enthalpy term. A negative ΔH° (energy released to the surroundings) makes ΔG° more negative.
- **−TΔS°** is the entropy term. A positive ΔS° (matter or energy more dispersed) makes −TΔS° negative, which also pushes ΔG° down. Because ΔS° is multiplied by T, **the entropy term grows as temperature rises**.

Two rules prevent almost every lost mark:

1. **Units.** ΔH° is in kJ mol⁻¹, but tables give ΔS° in J K⁻¹ mol⁻¹. Divide ΔS° by 1000 before you multiply by T.
2. **Kelvin.** T is always in kelvin: T(K) = T(°C) + 273.15. Using °C can even give the wrong sign.

## Worked example 2: heating ammonium chloride

**Question.** When solid ammonium chloride is heated strongly, it breaks down into two gases:

NH₄Cl(s) → NH₃(g) + HCl(g)

Data at 298 K:

| Substance | ΔH°f (kJ mol⁻¹) | S° (J K⁻¹ mol⁻¹) |
|---|---|---|
| NH₄Cl(s) | −314.4 | 94.6 |
| NH₃(g) | −45.9 | 192.8 |
| HCl(g) | −92.3 | 186.9 |

(a) Calculate ΔH° and ΔS°. (b) Calculate ΔG° at 298 K and decide whether the decomposition is favoured. (c) Estimate the temperature above which it becomes favoured.

**(a)**
ΔH° = (−45.9) + (−92.3) − (−314.4) = **+176.2 kJ mol⁻¹** (endothermic).
ΔS° = 192.8 + 186.9 − 94.6 = **+285.1 J K⁻¹ mol⁻¹**. This fits the particle picture: one mole of an ordered solid becomes two moles of freely moving gas, so matter is far more dispersed.

**(b)** Convert ΔS° first: +285.1 J K⁻¹ mol⁻¹ = +0.2851 kJ K⁻¹ mol⁻¹.
TΔS° = 298 K × 0.2851 kJ K⁻¹ mol⁻¹ = 84.96 kJ mol⁻¹.
ΔG° = 176.2 − 84.96 = **+91.2 kJ mol⁻¹**.

ΔG° > 0, so the decomposition is **not favoured** at 298 K. That matches experience: a bottle of ammonium chloride on the shelf does not turn into gas.

*Cross-check with Method 1:* ΔG° = (−16.4) + (−95.30) − (−202.97) = +91.3 kJ mol⁻¹. The two methods agree within rounding.

*The unit trap:* writing 176.2 − 298 × 285.1 gives −84 784 kJ mol⁻¹, which is far too large and has the wrong sign. If an answer is tens of thousands of kJ, check the units.

**(c)** ΔH° and ΔS° are both positive. The enthalpy term opposes the change; the entropy term favours it and grows with T. The changeover is where ΔG° = 0:

0 = ΔH° − TΔS°, so T = ΔH° ÷ ΔS° = 176 200 J mol⁻¹ ÷ 285.1 J K⁻¹ mol⁻¹ = **618 K** (about 345 °C).

Above about 618 K, TΔS° is larger than ΔH° and ΔG° < 0. For example, at 700 K: ΔG° = 176.2 − 700(0.2851) = 176.2 − 199.6 = −23.4 kJ mol⁻¹, favoured.

**Interpretation.** This is an estimate: it treats ΔH° and ΔS° as constant and assumes the gases are at 1 bar. Even so, it lands close to the measured value: ammonium chloride is reported to decompose at about 338 °C at 1 atm.

## The four sign combinations

You can often decide the verdict from the signs alone. ΔG° = ΔH° − TΔS° is a straight line when you plot ΔG° against T: it starts at ΔH° (when T = 0) and has a slope of −ΔS°.

<figure>
<svg viewBox="0 0 720 340" role="img" aria-labelledby="g-t-title g-t-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g-t-title">How ΔG° changes with temperature for the four sign combinations of ΔH° and ΔS°</title>
<desc id="g-t-desc">A schematic graph of ΔG° on the vertical axis against temperature on the horizontal axis, with a horizontal line at ΔG° = 0. Region below the line is labelled favoured; region above is labelled not favoured. Line A (ΔH° negative, ΔS° positive) starts below zero and slopes down: favoured at all temperatures. Line B (ΔH° positive, ΔS° negative) starts above zero and slopes up: favoured at no temperature. Line C (both positive) starts high and slopes down, crossing zero at a higher temperature: favoured only at high temperature. Line D (both negative) starts low and slopes up, crossing zero: favoured only at low temperature.</desc>
<rect x="80" y="30" width="480" height="260" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="80" y="160" width="480" height="130" fill="#eef4fb"/>
<line x1="80" y1="160" x2="560" y2="160" stroke="#1d2b44" stroke-width="2"/>
<text x="74" y="164" text-anchor="end" font-size="13" fill="#1d2b44">0</text>
<text x="90" y="50" font-size="13" fill="#1d2b44">ΔG° &gt; 0: not favoured</text>
<text x="90" y="282" font-size="13" fill="#1d2b44">ΔG° &lt; 0: favoured</text>
<line x1="80" y1="187.1" x2="560" y2="252.1" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="132.9" x2="560" y2="95" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 6"/>
<line x1="80" y1="51.7" x2="560" y2="225" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 5"/>
<line x1="80" y1="257.5" x2="560" y2="62.5" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="12 4 2 4"/>
<circle cx="380" cy="160" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="320" cy="160" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="568" y="256" font-size="13" fill="#1d2b44">A: ΔH° −, ΔS° +</text>
<text x="568" y="99" font-size="13" fill="#1d2b44">B: ΔH° +, ΔS° −</text>
<text x="568" y="229" font-size="13" fill="#1d2b44">C: ΔH° +, ΔS° +</text>
<text x="568" y="66" font-size="13" fill="#1d2b44">D: ΔH° −, ΔS° −</text>
<text x="320" y="315" text-anchor="middle" font-size="14" fill="#1d2b44">Temperature, T (K) →</text>
<text x="30" y="160" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 30 160)">ΔG° →</text>
</svg>
<figcaption>Figure 1. Schematic ΔG° against T. Line A (solid) stays below zero; line B (dashed) stays above zero; line C (dotted) crosses into the favoured region at high T; line D (dash-dot) leaves the favoured region at high T. Open circles mark where ΔG° = 0, at T = ΔH° ÷ ΔS°.</figcaption>
</figure>

| ΔH° | ΔS° | Favoured (ΔG° < 0) when | Why |
|---|---|---|---|
| − | + | at **all** temperatures | both terms push ΔG° below zero; no calculation needed |
| + | − | at **no** temperature | both terms push ΔG° above zero; no calculation needed |
| + | + | at **high** temperature | the growing −TΔS° term eventually outweighs the positive ΔH° |
| − | − | at **low** temperature | ΔH° wins while T is small; at high T the positive −TΔS° term takes over |

Only the last two cases need a number. For them, T = ΔH° ÷ ΔS° (in matching units) is the changeover temperature.

## When enthalpy and entropy pull in opposite directions

**Freezing water.** For H₂O(l) → H₂O(s), ΔH° = −6.01 kJ mol⁻¹ (extra hydrogen bonds form between molecules as the solid builds, releasing energy) and ΔS° = −22.0 J K⁻¹ mol⁻¹ (molecules lose freedom to move). Both are negative, so freezing is favoured only at low temperature.

- At 263 K (−10 °C): ΔG° = −6.01 − 263(−0.0220) = −6.01 + 5.79 = −0.22 kJ mol⁻¹. Favoured: water freezes.
- At 283 K (+10 °C): ΔG° = −6.01 − 283(−0.0220) = −6.01 + 6.23 = +0.22 kJ mol⁻¹. Not favoured: ice melts instead.
- The changeover is 6.01 ÷ 0.0220 = 273 K, the normal melting point. At that temperature ice and water coexist.

**Dissolving sodium nitrate.** Solid NaNO₃ dissolves readily in water at room temperature, and the solution gets colder. The cooling shows that dissolving is **endothermic** (ΔH° > 0): more energy is needed to separate the ions from the lattice than is released when they are surrounded by water molecules. The process is still favoured because ΔS° > 0: ions held in fixed lattice positions spread out through the whole solution. At room temperature the −TΔS° term is large enough to outweigh ΔH°, so ΔG° < 0.

In both examples, looking at ΔH° alone or ΔS° alone gives the wrong prediction for one of the temperatures. You need both, combined through ΔG°.

## Common misconceptions

- **"Exothermic means favoured."** Only when ΔS° is not too negative. Freezing water is exothermic but is not favoured above 273 K.
- **"Favoured means it happens quickly."** ΔG° says nothing about rate. A favoured process may take millions of years (see Topic 9.4).
- **"ΔG° > 0 means nothing happens at all."** It means the process is not favoured as written under standard conditions; the reverse process is favoured.
- **Mixing J and kJ.** ΔS° in J K⁻¹ mol⁻¹ must be divided by 1000 before combining with ΔH° in kJ mol⁻¹.
- **Using °C in ΔG° = ΔH° − TΔS°.** At 25 °C, T = 298 K, not 25.
- **Forgetting that ΔG°f of an element is zero, or giving a compound zero.** Only elements in their standard states have ΔG°f = 0.
- **Thinking ΔH° and ΔS° change sign with temperature.** In this course they are treated as constant. It is the TΔS° term that changes with temperature.

## Where this leads

Next, [Topic 9.4](/advanced-course-resources/chemistry/9-4-thermodynamic-kinetic-control-study-guide/) asks why some strongly favoured reactions do not happen at any measurable rate. Later in the unit you will link ΔG° to the equilibrium constant K and to cell potential. Try the [practice questions](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-checklist/) to consolidate.
