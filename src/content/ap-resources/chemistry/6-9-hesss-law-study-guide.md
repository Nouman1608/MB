---
resourceId: "mb-ap-chem-6.9-study-guide"
title: "Hess's Law: Study Guide (Chemistry 6.9)"
description: "Break a process into steps, explain why the step enthalpies add to the overall enthalpy change, and combine equations by reversing, scaling and adding them."
course: "chemistry"
unit: 6
topics: ["6.9"]
resourceType: "study-guide"
prerequisites:
  - "Enthalpy change of reaction and its sign (Topic 6.6)"
  - "Energy diagrams with more than one step (Topic 6.2)"
  - "Standard enthalpies of formation (Topic 6.8)"
prerequisiteResources: ["mb-ap-chem-6.8-study-guide"]
learningObjectives:
  - "Show a chemical or physical change as a series of steps, each with its own enthalpy change"
  - "Explain, using conservation of energy, why the enthalpy change of a whole process equals the sum of the enthalpy changes of its steps"
  - "Apply the three rules: reversing changes the sign, multiplying by a factor multiplies ΔH, adding equations adds ΔH values"
  - "Pick out which given equations to use, and how to change each one, to build a target equation"
  - "Connect the formation-enthalpy equation to a route through the elements"
skills: ["3", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Additions, subtractions and simple fractions of ΔH values in kJ mol⁻¹; keep the sign on every value"
related: ["mb-ap-chem-6.9-revision-notes", "mb-ap-chem-6.9-practice", "mb-ap-chem-6.9-checklist"]
next: "mb-ap-chem-6.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Any process can be split into steps. Each step has its own ΔH, and the steps' ΔH values add up to the ΔH of the whole process."
  - "This works because energy is conserved: the route taken cannot change the net energy transferred between the same start and end."
  - "Reverse an equation: change the sign of ΔH. Multiply an equation by c: multiply ΔH by c. Add equations: add their ΔH values."
  - "Build the target equation first, then do exactly the same operations to the ΔH values."
  - "ΔH°rxn = ΣΔHf°(products) − ΣΔHf°(reactants) is Hess's law with a route through the elements."
faqs:
  - question: "Do I have to use every equation I am given?"
    answer: "Usually yes, but not always. Use an equation only if it supplies a substance you need or removes one you do not. Check by adding your chosen equations: the result must be the target exactly."
  - question: "What unit does ΔH have when an equation is doubled?"
    answer: "Still kJ mol⁻¹, where 'per mole' means per mole of reaction as written. Doubling the equation doubles the amounts that react, so the number doubles but the unit stays the same."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## One change, more than one route

Many changes cannot be carried out in a calorimeter in one clean step. Some are too slow. Some give a mixture of products. Some only make sense on paper. Hess's law lets you find ΔH for such a change anyway, by building it from steps whose ΔH values you already know.

The key idea is simple: **any process can be split into stages, and every stage carries its own ΔH.** The steps do not have to be the way the change really happens. They only have to start where the process starts and finish where it finishes.

Take water. Hydrogen and oxygen can form water vapour directly:

H₂(g) + ½O₂(g) → H₂O(g)  ΔH = −241.8 kJ mol⁻¹

Or you can picture two steps: first form liquid water, then boil it.

- Step 1: H₂(g) + ½O₂(g) → H₂O(l)  ΔH = −285.8 kJ mol⁻¹
- Step 2: H₂O(l) → H₂O(g)  ΔH = +44.0 kJ mol⁻¹

Add the steps: −285.8 + 44.0 = **−241.8 kJ mol⁻¹**, the same as the direct route. Notice that step 2 is a **physical** change. Hess's law works for any mix of chemical and physical steps. (These values are for 25 °C. The more familiar value of about 40.7 kJ mol⁻¹ for vaporizing water applies at 100 °C, a different temperature.)

<figure>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="hess1-title hess1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hess1-title">Two routes from hydrogen and oxygen to water vapour</title>
<desc id="hess1-desc">Vertical axis: energy in kilojoules per mole, from minus 300 to plus 50 in steps of 50. The starting level, H2 gas plus one half O2 gas, is at 0 on the left, with a dashed line carrying it to the right. Route A is a single downward arrow from 0 to the level for H2O gas at minus 241.8, labelled minus 241.8. Route B has two arrows: step 1 is a downward arrow from 0 to the level for H2O liquid at minus 285.8, labelled minus 285.8; step 2 is a short upward arrow from the liquid level to the gas level, labelled plus 44.0. Both routes end on the same H2O gas level.</desc>
<defs><marker id="h1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="90" y1="262" x2="90" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#h1a)"/>
<line x1="84" y1="40.0" x2="90" y2="40.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="44.0" text-anchor="end" font-size="12" fill="#1d2b44">50</text>
<line x1="84" y1="71.4" x2="90" y2="71.4" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="75.4" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<line x1="84" y1="102.9" x2="90" y2="102.9" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="106.9" text-anchor="end" font-size="12" fill="#1d2b44">−50</text>
<line x1="84" y1="134.3" x2="90" y2="134.3" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="138.3" text-anchor="end" font-size="12" fill="#1d2b44">−100</text>
<line x1="84" y1="165.7" x2="90" y2="165.7" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="169.7" text-anchor="end" font-size="12" fill="#1d2b44">−150</text>
<line x1="84" y1="197.1" x2="90" y2="197.1" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="201.1" text-anchor="end" font-size="12" fill="#1d2b44">−200</text>
<line x1="84" y1="228.6" x2="90" y2="228.6" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="232.6" text-anchor="end" font-size="12" fill="#1d2b44">−250</text>
<line x1="84" y1="260.0" x2="90" y2="260.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="264.0" text-anchor="end" font-size="12" fill="#1d2b44">−300</text>
<text x="24" y="150" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 150)">Energy (kJ mol⁻¹)</text>
<line x1="110" y1="71.4" x2="250" y2="71.4" stroke="#1d2b44" stroke-width="3"/>
<line x1="250" y1="71.4" x2="440" y2="71.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="180" y="62" text-anchor="middle" font-size="12" fill="#1d2b44">H₂(g) + ½O₂(g)</text>
<line x1="270" y1="223.4" x2="600" y2="223.4" stroke="#1d2b44" stroke-width="3"/>
<text x="345" y="215" text-anchor="middle" font-size="12" fill="#1d2b44">H₂O(g): −241.8</text>
<line x1="400" y1="251.1" x2="600" y2="251.1" stroke="#1d2b44" stroke-width="3"/>
<text x="500" y="270" text-anchor="middle" font-size="12" fill="#1d2b44">H₂O(l): −285.8</text>
<line x1="280" y1="73.4" x2="280" y2="220.4" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#h1a)"/>
<text x="288" y="135" font-size="13" fill="#1d2b44">Route A</text>
<text x="288" y="151" font-size="13" fill="#1d2b44">−241.8</text>
<line x1="430" y1="73.4" x2="430" y2="248.1" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4" marker-end="url(#h1a)"/>
<text x="438" y="135" font-size="13" fill="#1d2b44">Route B, step 1</text>
<text x="438" y="151" font-size="13" fill="#1d2b44">−285.8</text>
<line x1="570" y1="249.1" x2="570" y2="226.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#h1a)"/>
<text x="606" y="232" font-size="12" fill="#1d2b44">step 2</text>
<text x="606" y="248" font-size="12" fill="#1d2b44">+44.0</text>
<text x="350" y="292" text-anchor="middle" font-size="13" fill="#1d2b44">Progress (no scale)</text>
</svg>
<figcaption>Figure 1. Route A (solid arrow) forms water vapour directly. Route B (dashed arrows) forms liquid water first, then vaporizes it. Both routes start on the same level and end on the same level, so the overall energy change is the same: −241.8 kJ mol⁻¹. Values at 25 °C.</figcaption>
</figure>

## Why the steps must add up

Each step in a sequence transfers some thermal energy to or from the surroundings. These transfers come from changes in **potential energy** as bonds and attractions break and form. Energy is conserved (the **first law of thermodynamics**), so the **net** energy transferred over the whole sequence is just the sum of what each step transferred. At constant pressure, thermal energy transferred is ΔH, so:

> ΔH(overall) = ΔH(step 1) + ΔH(step 2) + ΔH(step 3) + …

Here is why the route cannot matter. Suppose route A released 250 kJ but route B released only 240 kJ for the same change. You could run route A forwards (release 250 kJ) and route B backwards (absorb 240 kJ). You would be back where you started, with 10 kJ of energy made from nothing. That would break conservation of energy, so the two routes must give the same ΔH.

*Background only:* textbooks often say ΔH is a "state function". You may see the term, but the idea of state functions is outside the scope of the exam. The reasoning you need is the conservation-of-energy argument above.

## The three rules

Equations with ΔH values behave like algebra. There are three rules.

| Rule | What you do to the equation | What happens to ΔH | Mini example |
|---|---|---|---|
| 1. Reverse | swap reactants and products | **same size, opposite sign** | A → B, ΔH = −50; so B → A, ΔH = +50 |
| 2. Multiply | multiply every coefficient by c (c may be a fraction) | **multiply ΔH by c** | A → B, ΔH = −50; so 3A → 3B, ΔH = −150 |
| 3. Add | add the equations; cancel what appears on both sides | **add the ΔH values** | A → B (−50) plus B → C (+20) gives A → C (−30) |

Rule 1 is energy conservation again: if forming B from A releases 50 kJ, turning B back into A must absorb 50 kJ. Rule 2 follows because "per mole" means per mole of reaction **as written**: triple the amounts, triple the energy. Rule 3 is the sum of the steps.

## A strategy for building the target equation

Most Hess's law questions give you a **target** equation and two or three **given** equations with ΔH values. Your job is to identify which pieces you need, and what to do to each one.

1. **Write the target** clearly at the top.
2. **Find each target substance in the given equations.** Start with substances that appear in only one given equation. That equation must be used.
3. **Fix the side.** If the substance is on the wrong side, reverse that equation (and change the sign of its ΔH).
4. **Fix the amount.** Multiply the equation so the coefficient matches the target (and multiply ΔH by the same factor).
5. **Add** the changed equations. Cancel substances that appear on both sides; if amounts differ, cancel only the smaller amount.
6. **Check** that what is left is exactly the target. Only then add the ΔH values.

Record each operation in a table. It makes the arithmetic easy to check.

## Worked example 1: reversing and doubling

**Question.** A fictional element X forms two gaseous compounds with a fictional gas Z₂. Use the data to find ΔH for the target reaction.

- (A) X(s) + Z₂(g) → XZ₂(g)  ΔH_A = −310 kJ mol⁻¹
- (B) 2XZ(g) + Z₂(g) → 2XZ₂(g)  ΔH_B = −380 kJ mol⁻¹
- Target: 2X(s) + Z₂(g) → 2XZ(g)

1. **X(s)** appears only in (A), on the left, as in the target. The target needs **2** X, so use **2 × (A)**.
2. **XZ(g)** appears only in (B), on the **left**. The target has it on the **right**, so **reverse (B)**. The amount (2) already matches.
3. Write the changed equations and add them:

| Equation used | Changed equation | ΔH (kJ mol⁻¹) |
|---|---|---|
| 2 × (A) | 2X(s) + 2Z₂(g) → 2XZ₂(g) | 2 × (−310) = −620 |
| reverse (B) | 2XZ₂(g) → 2XZ(g) + Z₂(g) | +380 |
| **Sum** | 2X(s) + Z₂(g) → 2XZ(g) | **−240** |

4. **Cancelling.** 2XZ₂ appears on both sides and cancels completely. Z₂ appears twice on the left and once on the right, so only one Z₂ cancels, leaving **1 Z₂ on the left**. The result matches the target.

**Answer.** ΔH = **−240 kJ mol⁻¹** (of reaction as written). Per mole of XZ formed this is −120 kJ mol⁻¹.

**Check.** Reverse (B) is endothermic, which makes sense: it breaks XZ₂ apart. The overall result is still exothermic because 2 × (A) releases more.

## Worked example 2: three equations and a fraction

**Question.** A fictional element D forms three gaseous compounds with a fictional gas Q₂. Find ΔH for the target.

- (1) D(s) + Q₂(g) → DQ₂(g)  ΔH₁ = −220 kJ mol⁻¹
- (2) 2DQ₂(g) + Q₂(g) → 2DQ₃(g)  ΔH₂ = −150 kJ mol⁻¹
- (3) 2DQ(g) + Q₂(g) → 2DQ₂(g)  ΔH₃ = −280 kJ mol⁻¹
- Target: D(s) + DQ₃(g) → 2DQ(g) + ½Q₂(g)

1. **D(s)** is only in (1), on the left, coefficient 1: use (1) as written.
2. **DQ₃(g)** is only in (2), on the right. The target needs **1** DQ₃ on the **left**: reverse (2) and multiply by **½**.
3. **DQ(g)** is only in (3), on the left. The target needs **2** DQ on the **right**: reverse (3).

| Equation used | Changed equation | ΔH (kJ mol⁻¹) |
|---|---|---|
| (1) | D(s) + Q₂(g) → DQ₂(g) | −220 |
| −½ × (2) | DQ₃(g) → DQ₂(g) + ½Q₂(g) | −½ × (−150) = +75 |
| −(3) | 2DQ₂(g) → 2DQ(g) + Q₂(g) | +280 |
| **Sum** | D(s) + DQ₃(g) → 2DQ(g) + ½Q₂(g) | **+135** |

4. **Cancelling.** DQ₂: 2 on the left (from −(3)) and 1 + 1 = 2 on the right, so it cancels completely. Q₂: 1 on the left, ½ + 1 = 1½ on the right, so **½Q₂ is left on the right**. This matches the target exactly.

**Answer.** ΔH = **+135 kJ mol⁻¹**. The reaction is endothermic.

**Point to notice.** The ½ came from the target, not from guessing. Fractions are allowed in Hess's law equations because ΔH is per mole of reaction as written.

## Worked example 3: the formation-enthalpy equation is Hess's law

In [Topic 6.8](/advanced-course-resources/chemistry/6-8-enthalpy-formation-study-guide/) you used ΔH°rxn = ΣΔHf°(products) − ΣΔHf°(reactants). Here is why that equation works.

**Question.** For the fictional compounds in Worked example 2, ΔHf(DQ) = −80 kJ mol⁻¹ and ΔHf(DQ₂) = −220 kJ mol⁻¹. Use a route through the elements to find ΔH for equation (3), 2DQ(g) + Q₂(g) → 2DQ₂(g), and compare with the value given above.

1. **Step 1: break the reactants into elements.** 2DQ(g) → 2D(s) + Q₂(g) is the reverse of forming 2 mol DQ, so ΔH = −2 × (−80) = **+160 kJ mol⁻¹**. Q₂(g) is already an element (ΔHf = 0).
2. **Step 2: form the products from elements.** 2D(s) + 2Q₂(g) → 2DQ₂(g): ΔH = 2 × (−220) = **−440 kJ mol⁻¹**.
3. **Add:** +160 + (−440) = **−280 kJ mol⁻¹**, which matches ΔH₃.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="hess2-title hess2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hess2-title">Hess cycle through the elements for 2DQ plus Q2 forming 2DQ2</title>
<desc id="hess2-desc">Three boxes in a triangle. Top left: reactants, 2DQ gas plus Q2 gas. Top right: products, 2DQ2 gas. Bottom centre: elements, 2D solid plus 2Q2 gas. A solid arrow goes straight across the top from reactants to products, labelled direct, delta H equals minus 280. A dashed arrow goes down from reactants to elements, labelled plus 160, reverse of forming 2 DQ. A dashed arrow goes up from elements to products, labelled minus 440, forming 2 DQ2.</desc>
<defs><marker id="h2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="30" width="190" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="115" y="54" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Reactants</text>
<text x="115" y="74" text-anchor="middle" font-size="13" fill="#1d2b44">2DQ(g) + Q₂(g)</text>
<rect x="430" y="30" width="190" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="525" y="54" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Products</text>
<text x="525" y="74" text-anchor="middle" font-size="13" fill="#1d2b44">2DQ₂(g)</text>
<rect x="225" y="190" width="190" height="56" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="214" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Elements</text>
<text x="320" y="234" text-anchor="middle" font-size="13" fill="#1d2b44">2D(s) + 2Q₂(g)</text>
<line x1="212" y1="58" x2="426" y2="58" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#h2a)"/>
<text x="320" y="48" text-anchor="middle" font-size="13" fill="#1d2b44">direct: ΔH = −280</text>
<line x1="115" y1="88" x2="250" y2="186" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4" marker-end="url(#h2a)"/>
<text x="24" y="140" font-size="13" fill="#1d2b44">+160</text>
<text x="24" y="156" font-size="12" fill="#1d2b44">(reverse of forming 2DQ)</text>
<line x1="390" y1="186" x2="525" y2="90" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4" marker-end="url(#h2a)"/>
<text x="470" y="140" font-size="13" fill="#1d2b44">−440</text>
<text x="470" y="156" font-size="12" fill="#1d2b44">(forming 2DQ₂)</text>
</svg>
<figcaption>Figure 2. A Hess cycle. The solid arrow is the direct reaction; the two dashed arrows are a route through the elements. Both routes join the same start and end, so +160 + (−440) = −280 kJ mol⁻¹. All values are for fictional compounds.</figcaption>
</figure>

**Interpretation.** Step 1 is "minus the formation enthalpies of the reactants". Step 2 is "plus the formation enthalpies of the products". So ΣΔHf°(products) − ΣΔHf°(reactants) is a Hess's law route through the elements, written as one line.

## Common misconceptions

- **"Reversing an equation leaves ΔH unchanged."** The size stays the same but the **sign** flips. Making a bond releases energy; breaking it absorbs the same amount.
- **"Only the ΔH needs changing, not the equation."** Change the equation first, then ΔH. If you skip writing the changed equations, you cannot check that they add up to the target.
- **"Multiplying by ½ halves the sign too."** A factor changes the size; only reversing changes the sign. Reverse and halve together: −150 becomes +75.
- **Cancelling whole substances when amounts differ.** If Q₂ is 1 on the left and 1½ on the right, ½Q₂ remains on the right. Do not delete it.
- **Ignoring state symbols.** H₂O(l) and H₂O(g) are different. They cancel only if the states match; the difference between them is a real step worth 44.0 kJ mol⁻¹ at 25 °C.
- **"The steps must be the real mechanism."** The steps are a bookkeeping route. They only need to start and end at the same substances as the target.
- **"A route with more steps gives a bigger ΔH."** The number of steps makes no difference. Energy conservation fixes the total.

## Where this leads

Hess's law completes Unit 6: you can now find ΔH from calorimetry (Topic 6.4), bond enthalpies (Topic 6.7), formation enthalpies (Topic 6.8) or a combination of known equations. Next, [Topic 7.1](/advanced-course-resources/chemistry/7-1-introduction-equilibrium-study-guide/) starts equilibrium. In Topic 7.6 you will reverse, multiply and add equations again, but the equilibrium constant K follows different rules from ΔH (it is inverted, raised to a power or multiplied). In Unit 9 the same "add the steps" idea returns for free energy and coupled reactions. Try the [practice questions](/advanced-course-resources/chemistry/6-9-hesss-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-9-hesss-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-9-hesss-law-checklist/) to consolidate.
