---
resourceId: "mb-ap-chem-6.8-study-guide"
title: "Enthalpy of Formation: Study Guide (Chemistry 6.8)"
description: "Use tables of standard enthalpies of formation to calculate the enthalpy change of a chemical or physical process, with coefficients, states and signs handled correctly."
course: "chemistry"
unit: 6
topics: ["6.8"]
resourceType: "study-guide"
prerequisites:
  - "Enthalpy of reaction, its sign and its link to moles (Topic 6.6)"
  - "Estimating ΔH from bond enthalpies (Topic 6.7)"
  - "Writing balanced equations with state symbols"
prerequisiteResources: ["mb-ap-chem-6.7-study-guide"]
learningObjectives:
  - "State what a standard enthalpy of formation describes and write the equation it refers to"
  - "Explain why an element in its standard state has a standard enthalpy of formation of zero"
  - "Calculate the standard enthalpy change of a reaction as products minus reactants, multiplying each value by its coefficient"
  - "Calculate the enthalpy change of a physical process, such as vaporisation, from formation data"
  - "Work backwards from a known reaction enthalpy to an unknown enthalpy of formation"
skills: ["5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Standard enthalpies of formation at 298 K are given in kJ mol⁻¹ in the table on this page; keep one decimal place"
related: ["mb-ap-chem-6.8-revision-notes", "mb-ap-chem-6.8-practice", "mb-ap-chem-6.8-checklist"]
next: "mb-ap-chem-6.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "The standard enthalpy of formation, ΔH°f, is the enthalpy change when 1 mol of a substance forms from its elements in their standard states."
  - "For an element in its standard state (O₂(g), H₂(g), C(graphite), Fe(s), Br₂(l) …), ΔH°f = 0."
  - "ΔH°reaction = ΣnΔH°f(products) − ΣnΔH°f(reactants), where n is each coefficient in the balanced equation."
  - "State symbols matter: H₂O(l) and H₂O(g) have different values, and their difference is the enthalpy of vaporisation."
  - "Formation values give accurate reaction enthalpies; bond enthalpies (Topic 6.7) only estimate them."
faqs:
  - question: "Why is it products minus reactants here, but broken minus formed for bond enthalpies?"
    answer: "Both follow the same logic. Formation values tell you how far each substance lies below or above the elements, so ΔH is the final level minus the starting level. Bond enthalpies are energies put in, so the reactant bonds (broken) come first."
  - question: "Does O₂ ever count in the calculation?"
    answer: "It is in the equation, but its ΔH°f is 0, so it adds nothing to the sum. Ozone, O₃(g), is not the standard state of oxygen, so its ΔH°f is not zero."
  - question: "Do I need to memorise the table?"
    answer: "No. Questions give you the values. You need to choose the right value for each substance and state, and handle the coefficients."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why we need a table of formation enthalpies

In [Topic 6.7](/advanced-course-resources/chemistry/6-7-bond-enthalpies-study-guide/) you estimated ΔH from average bond enthalpies. The estimates were close, but not exact, and the method works only for gases. Chemists want accurate values for thousands of reactions, including reactions of solids and liquids. Measuring every one would take for ever.

The solution is to measure **one** number per substance and store it in a table: its **standard enthalpy of formation**. From that table you can calculate ΔH for any reaction whose substances are listed, without doing the experiment.

## What a standard enthalpy of formation is

The **standard enthalpy of formation**, ΔH°f, of a substance is the enthalpy change when **one mole** of the substance forms from its **elements in their standard states**.

- The symbol ° means **standard conditions**: a pressure of 1 bar (almost the same as 1 atm; the difference is too small to matter here) and, in data tables, usually 25 °C (298 K).
- The **standard state** of an element is its most stable form under those conditions: O₂(g), H₂(g), N₂(g), Cl₂(g), Br₂(l), Hg(l), C(graphite), Na(s), Fe(s), and so on.

Each ΔH°f refers to a specific equation with exactly **1 mol of product**, so some equations need fractions:

- ΔH°f of CO₂(g): C(graphite) + O₂(g) → CO₂(g), ΔH° = −393.5 kJ mol⁻¹
- ΔH°f of NH₃(g): ½N₂(g) + 3/2 H₂(g) → NH₃(g), ΔH° = −46.1 kJ mol⁻¹
- ΔH°f of NO(g): ½N₂(g) + ½O₂(g) → NO(g), ΔH° = +90.3 kJ mol⁻¹

Most compounds have negative values: energy is released when they form from their elements. A few, such as NO(g), have positive values.

### Elements in their standard state are zero

Forming O₂(g) from O₂(g) is no change at all, so ΔH°f[O₂(g)] = **0**. The same is true of every element in its standard state. This is the reference point of the whole table: every other value tells you how far a substance lies **above or below its elements**.

Be careful: other forms of an element are **not** zero. Ozone, O₃(g), has ΔH°f = +143 kJ mol⁻¹, and diamond has ΔH°f = +1.9 kJ mol⁻¹, because graphite, not diamond, is the standard state of carbon.

## The values used on this page

Standard enthalpies of formation at 298 K, in kJ mol⁻¹, from a standard data table:

| Substance | ΔH°f | Substance | ΔH°f |
|---|---|---|---|
| CO₂(g) | −393.5 | CaCO₃(s) | −1206.9 |
| H₂O(l) | −285.8 | CaO(s) | −635.1 |
| H₂O(g) | −241.8 | NH₃(g) | −46.1 |
| C₂H₄(g) | +52.5 | NO(g) | +90.3 |
| O₂(g), N₂(g), H₂(g) | 0 | C(graphite) | 0 |

## The formula and where it comes from

To find the standard enthalpy change of a reaction:

> **ΔH°reaction = ΣnΔH°f(products) − ΣnΔH°f(reactants)**

Here Σ means "add up" and n is the coefficient of each substance in the balanced equation. Because each ΔH°f is per mole, you multiply it by the number of moles in the equation.

**Why it works.** Imagine taking the reaction by a detour through the elements. First, turn the reactants back into their elements: that is the **reverse** of forming them, so its enthalpy change is −ΣnΔH°f(reactants). Then build the products from the same elements: +ΣnΔH°f(products). Enthalpy depends only on the start and the end, so the detour gives the same ΔH as the direct reaction. Topic 6.9 (Hess's law) develops this idea fully; for now, Figure 1 shows it as an energy diagram.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="hf1-title hf1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hf1-title">Path through the elements for the decomposition of calcium carbonate</title>
<desc id="hf1-desc">Vertical axis: energy in kilojoules per mole, from minus 1400 to plus 200 in steps of 200. A long level at 0 near the top is labelled elements: calcium solid, graphite and three halves O2 gas. On the left, a level at minus 1206.9 is labelled CaCO3 solid. On the right, a level at minus 1028.6 is labelled CaO solid plus CO2 gas. A dashed upward arrow on the left goes from CaCO3 to the elements, labelled plus 1206.9, reverse of formation. A solid downward arrow on the right goes from the elements to CaO plus CO2, labelled minus 1028.6, form products. A short upward arrow in the middle goes directly from the CaCO3 level to the CaO plus CO2 level, labelled delta H degree equals plus 178.3.</desc>
<defs><marker id="hf1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="90" y1="270" x2="90" y2="28" stroke="#1d2b44" stroke-width="2" marker-end="url(#hf1a)"/>
<line x1="84" y1="40.0" x2="90" y2="40.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="44.0" text-anchor="end" font-size="12" fill="#1d2b44">200</text>
<line x1="84" y1="67.5" x2="90" y2="67.5" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="71.5" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<line x1="84" y1="95.0" x2="90" y2="95.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="99.0" text-anchor="end" font-size="12" fill="#1d2b44">−200</text>
<line x1="84" y1="122.5" x2="90" y2="122.5" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="126.5" text-anchor="end" font-size="12" fill="#1d2b44">−400</text>
<line x1="84" y1="150.0" x2="90" y2="150.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="154.0" text-anchor="end" font-size="12" fill="#1d2b44">−600</text>
<line x1="84" y1="177.5" x2="90" y2="177.5" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="181.5" text-anchor="end" font-size="12" fill="#1d2b44">−800</text>
<line x1="84" y1="205.0" x2="90" y2="205.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="209.0" text-anchor="end" font-size="12" fill="#1d2b44">−1000</text>
<line x1="84" y1="232.5" x2="90" y2="232.5" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="236.5" text-anchor="end" font-size="12" fill="#1d2b44">−1200</text>
<line x1="84" y1="260.0" x2="90" y2="260.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="264.0" text-anchor="end" font-size="12" fill="#1d2b44">−1400</text>
<text x="22" y="150" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 150)">Energy (kJ mol⁻¹)</text>
<line x1="120" y1="67.5" x2="560" y2="67.5" stroke="#1d2b44" stroke-width="3"/>
<text x="340" y="58" text-anchor="middle" font-size="13" fill="#1d2b44">elements: Ca(s) + C(graphite) + 3/2 O₂(g), ΔH°f = 0</text>
<line x1="120" y1="233.4" x2="230" y2="233.4" stroke="#1d2b44" stroke-width="3"/>
<line x1="230" y1="233.4" x2="310" y2="233.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="175" y="252" text-anchor="middle" font-size="13" fill="#1d2b44">CaCO₃(s): −1206.9</text>
<line x1="400" y1="208.9" x2="560" y2="208.9" stroke="#1d2b44" stroke-width="3"/>
<line x1="290" y1="208.9" x2="400" y2="208.9" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="480" y="227" text-anchor="middle" font-size="13" fill="#1d2b44">CaO(s) + CO₂(g): −1028.6</text>
<line x1="160" y1="231.4" x2="160" y2="70.5" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4" marker-end="url(#hf1a)"/>
<text x="168" y="135" font-size="12" fill="#1d2b44">+1206.9</text>
<text x="168" y="151" font-size="12" fill="#1d2b44">(reverse of formation)</text>
<line x1="500" y1="69.5" x2="500" y2="205.9" stroke="#1d2b44" stroke-width="2" marker-end="url(#hf1a)"/>
<text x="492" y="135" text-anchor="end" font-size="12" fill="#1d2b44">−1028.6</text>
<text x="492" y="151" text-anchor="end" font-size="12" fill="#1d2b44">(form products)</text>
<line x1="300" y1="231.4" x2="300" y2="211.9" stroke="#1d2b44" stroke-width="2.4" marker-end="url(#hf1a)"/>
<text x="306" y="200" font-size="13" font-weight="600" fill="#1d2b44">ΔH° = +178.3</text>
<text x="340" y="290" text-anchor="middle" font-size="13" fill="#1d2b44">detour: reactants → elements → products</text>
</svg>
<figcaption>Figure 1. Energy diagram for CaCO₃(s) → CaO(s) + CO₂(g), in kJ mol⁻¹, with the elements at 0. Going up from CaCO₃ to the elements (dashed, +1206.9) and then down to the products (solid, −1028.6) gives the same result as the short direct arrow: ΔH° = −1028.6 − (−1206.9) = +178.3 kJ mol⁻¹. The products sit above the reactant, so the reaction is endothermic.</figcaption>
</figure>

## A method that avoids sign slips

1. **Write the balanced equation with state symbols.**
2. **Make a table**: substance, coefficient n, ΔH°f, and n × ΔH°f. Put 0 for elements in their standard states.
3. **Add the products column** and **add the reactants column** separately.
4. **Subtract**: products total − reactants total. Put brackets around a negative reactants total so the double negative is clear.
5. **Check** the sign makes sense and the unit is kJ per mole of the equation as written (written kJ mol⁻¹ or kJ mol_rxn⁻¹).

## Worked example 1: heating limestone

**Question.** Calculate ΔH° for CaCO₃(s) → CaO(s) + CO₂(g). Is the reaction exothermic or endothermic?

| Substance | n | ΔH°f (kJ mol⁻¹) | n × ΔH°f (kJ) |
|---|---|---|---|
| CaO(s) | 1 | −635.1 | −635.1 |
| CO₂(g) | 1 | −393.5 | −393.5 |
| **Products total** | | | **−1028.6** |
| CaCO₃(s) | 1 | −1206.9 | −1206.9 |
| **Reactants total** | | | **−1206.9** |

ΔH° = (−1028.6) − (−1206.9) = −1028.6 + 1206.9 = **+178.3 kJ mol⁻¹**.

**Interpretation.** ΔH° is positive, so the reaction is **endothermic**. That matches the fact that limestone must be heated strongly to decompose. Figure 1 shows the same calculation as levels.

**Check.** A common slip is to calculate reactants − products, which gives −178.3 kJ mol⁻¹. Ask yourself: do the products lie above or below the reactant? Here CaO + CO₂ (−1028.6) is above CaCO₃ (−1206.9), so ΔH must be positive.

## Worked example 2: coefficients and a zero

**Question.** The first step in making nitric acid is 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g). Calculate ΔH°, and the enthalpy change per mole of NH₃.

| Substance | n | ΔH°f (kJ mol⁻¹) | n × ΔH°f (kJ) |
|---|---|---|---|
| NO(g) | 4 | +90.3 | +361.2 |
| H₂O(g) | 6 | −241.8 | −1450.8 |
| **Products total** | | | **−1089.6** |
| NH₃(g) | 4 | −46.1 | −184.4 |
| O₂(g) | 5 | 0 | 0 |
| **Reactants total** | | | **−184.4** |

ΔH° = (−1089.6) − (−184.4) = **−905.2 kJ mol⁻¹** for the equation as written.

Per mole of NH₃: −905.2 ÷ 4 = **−226.3 kJ** per mol NH₃.

**Points to notice.**
- The **state** matters. Water is formed as a gas here, so you use −241.8, not −285.8.
- O₂ contributes 0, but you still list it so you do not forget anything.
- Ignoring the coefficients gives 90.3 + (−241.8) − (−46.1) = −105.4 kJ, which is far from the right answer.

## Worked example 3: working backwards to a missing value

**Question.** The standard enthalpy of combustion of ethene is −1411.1 kJ mol⁻¹:
C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l). Use the values for CO₂(g) and H₂O(l) to find ΔH°f of C₂H₄(g).

1. **Products total:** 2(−393.5) + 2(−285.8) = −787.0 + (−571.6) = **−1358.6 kJ**.
2. **Reactants total:** ΔH°f(C₂H₄) + 3(0) = **x**.
3. **Set up the equation:** −1411.1 = −1358.6 − x.
4. **Solve:** x = −1358.6 + 1411.1 = **+52.5 kJ mol⁻¹**.

**Interpretation.** Ethene has a positive enthalpy of formation: it lies above its elements on an energy diagram. That is why burning it releases even more energy than burning the same carbon and hydrogen as the elements would. This "working backwards" method is how tables are built for substances that cannot be made directly from their elements.

## Physical processes too

The formula works for any process whose substances are in the table, not only reactions. For vaporising water:

H₂O(l) → H₂O(g): ΔH° = (−241.8) − (−285.8) = **+44.0 kJ mol⁻¹**

The value is positive because separating water molecules needs energy to overcome the hydrogen bonds between them, as you saw for phase changes in Topic 6.5. This is also why the "state" column matters: using the wrong state for water in a combustion reaction changes the answer by 44.0 kJ for every mole of water.

## Formation enthalpies and bond enthalpies compared

In Topic 6.7 you estimated ΔH for H₂(g) + Cl₂(g) → 2HCl(g) as −183 kJ mol⁻¹ from bond enthalpies. With formation data, ΔH°f of HCl(g) is −92.3 kJ mol⁻¹, and both reactants are elements in their standard states:

ΔH° = 2(−92.3) − (0 + 0) = **−184.6 kJ mol⁻¹**

The two methods agree well here. They will not always agree so closely, and when they differ, trust the formation value. The table below sums up the differences.

| | Bond enthalpies (6.7) | Formation enthalpies (6.8) |
|---|---|---|
| Formula | Σ(broken) − Σ(formed) | ΣnΔH°f(products) − ΣnΔH°f(reactants) |
| Which side first | reactants | products |
| Accuracy | estimate (average values) | accurate (measured for each substance) |
| States allowed | gases only | any state listed in the table |
| Best use | explaining **why** a reaction releases or absorbs energy | calculating **how much** |

Both methods give a ΔH per mole of the equation as written, and both describe the same start and end points. They differ only in the reference they use: separate gaseous atoms for bond enthalpies, elements in their standard states for formation enthalpies.

## Common misconceptions

- **Reactants minus products.** That reverses the sign. It is always products − reactants for formation enthalpies.
- **Forgetting coefficients.** Each ΔH°f is per mole; multiply by n from the balanced equation.
- **Giving elements a non-zero value**, or giving **every** form of an element zero. O₂(g) is 0; O₃(g) is not. C(graphite) is 0; C(diamond) is not.
- **Using the wrong state.** H₂O(l) and H₂O(g) differ by 44.0 kJ mol⁻¹.
- **Mixing up the two methods.** Bond enthalpies: broken − formed (reactants first). Formation enthalpies: products − reactants.
- **Thinking ΔH°f equations can make more than 1 mol.** The definition is per mole of the compound formed, so fractions such as ½N₂ are normal.
- **Dropping a minus sign when subtracting a negative.** Use brackets: −1028.6 − (−1206.9) = +178.3.

## Where this leads

Next, [Topic 6.9, Hess's law](/advanced-course-resources/chemistry/6-9-hesss-law-study-guide/), explains why the detour through the elements in Figure 1 must give the same ΔH as the direct reaction, and shows how to combine known reactions to find unknown ones. Try the [practice questions](/advanced-course-resources/chemistry/6-8-enthalpy-formation-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-8-enthalpy-formation-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-8-enthalpy-formation-checklist/) to consolidate.
