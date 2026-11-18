---
title: "Cambridge AS & A Level Chemistry (9701): Hess's law"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Chemical energetics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-chemical-energetics"
    subtopic: "as-hess-s-law"
description: "Building Hess's law cycles from formation, combustion and experimental data, and finding enthalpy changes that cannot be measured, for Cambridge 9701."
author: "marlbridge-academic-team"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **5.2, Hess's law**, from Topic 5, Chemical energetics, of Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is AS Level content. The [Chemical Energetics: Hess's Law and Enthalpy Cycles](/resources/as-chemical-energetics-hess-law-and-enthalpy-cycles/) guide shows one combustion cycle; this page sets out a single method for every type of cycle, then applies it to formation data, combustion data, combined equations, experimental results and bond energies. Condensed notes are in the [Hess's law revision notes](/resources/cambridge-a-level-chemistry-9701-as-hess-s-law-revision-notes/), and you can practise with the [Hess's law practice questions](/resources/cambridge-a-level-chemistry-9701-as-hess-s-law-practice/). The definitions used here are explained in the [enthalpy change study guide](/resources/cambridge-a-level-chemistry-9701-as-enthalpy-change/).

## Syllabus coverage

Candidates should be able to:

1. apply Hess's law to construct simple energy cycles
2. carry out calculations using cycles and relevant energy terms, including (a) determining enthalpy changes that cannot be found by direct experiment, and (b) use of bond energy data

## Hess's law

**The enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.**

It follows from the conservation of energy. If two routes between the same start and end gave different enthalpy changes, you could go one way and return the other, creating energy from nothing.

This matters because many enthalpy changes cannot be measured directly. Carbon cannot be burned to carbon monoxide without some carbon dioxide forming; carbon and hydrogen do not combine to give propane; calcium carbonate needs strong heating, at which temperature it is hard to measure heat flow. In each case, Hess's law lets you calculate the value from reactions that **can** be measured.

## One method for every cycle

1. **Write the target equation** at the top, with an arrow from reactants to products labelled ΔH_r.
2. **Choose a common intermediate** that both reactants and products can reach using the data given:
    - formation data → the **elements** (drawn below);
    - combustion data → the **combustion products**, CO₂ and H₂O (drawn below);
    - bond energy data → the **gaseous atoms** (drawn above).
3. **Draw the arrows in the direction the data describe**, and multiply each value by the number of moles in the equation.
4. **Follow the indirect route**: add a value when you travel with its arrow, subtract it when you travel against it.

## Formation data

Elements are below. Arrows go **up** from the elements to both reactants and products. Going from reactants to elements is against the arrow:

    ΔH_r = ΣΔH_f(products) − ΣΔH_f(reactants)

### Worked example 1: decomposition of calcium carbonate

CaCO₃(s) → CaO(s) + CO₂(g). ΔH_f⦵ values: CaCO₃ −1207, CaO −635, CO₂ −394 kJ mol⁻¹ (typical values).

    ΔH_r = [(−635) + (−394)] − (−1207) = −1029 + 1207 = +178 kJ mol⁻¹

Elements in their standard states have ΔH_f = 0, so any O₂ in an equation contributes nothing.

## Combustion data

Combustion products are below. Arrows go **down** from both reactants and products:

    ΔH_r = ΣΔH_c(reactants) − ΣΔH_c(products)

### Worked example 2: ΔH_f of propane

Target: 3C(s) + 4H₂(g) → C₃H₈(g). ΔH_c⦵: C −394, H₂ −286, C₃H₈ −2220 kJ mol⁻¹.

Both sides burn to 3CO₂ + 4H₂O.

    ΔH_f = [3(−394) + 4(−286)] − (−2220)
         = (−1182 − 1144) + 2220
         = −106 kJ mol⁻¹

Remember the factors of 3 and 4. Leaving them out is the commonest error in this type of question.

## Combining equations

Sometimes you are given equations rather than tabulated data. Rearrange them so that they add up to the target equation; reverse an equation and its ΔH changes sign; multiply an equation and its ΔH is multiplied too.

### Worked example 3: ΔH_f of carbon monoxide

Target: C(s) + ½O₂(g) → CO(g). This cannot be measured directly.

    (1) C(s) + O₂(g) → CO₂(g)         ΔH = −394 kJ mol⁻¹
    (2) CO(g) + ½O₂(g) → CO₂(g)       ΔH = −283 kJ mol⁻¹

Keep (1); reverse (2): CO₂(g) → CO(g) + ½O₂(g), ΔH = +283. Adding them cancels CO₂ and half the O₂:

    ΔH = −394 + 283 = −111 kJ mol⁻¹

## Using experimental results

Two reactions that can each be measured in a calorimeter are combined in a cycle.

### Worked example 4: hydrating copper(II) sulfate

Target: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s). This cannot be measured directly because the solid absorbs water slowly and unevenly. Instead, dissolve each solid separately in water and measure:

    ΔH₁: CuSO₄(s) + aq → CuSO₄(aq)                 −66.5 kJ mol⁻¹
    ΔH₂: CuSO₄·5H₂O(s) + aq → CuSO₄(aq)            +11.7 kJ mol⁻¹

Both routes reach the same solution. Going from anhydrous solid to hydrated solid directly must equal going via the solution: ΔH₁ then the reverse of ΔH₂.

    ΔH = ΔH₁ − ΔH₂ = −66.5 − (+11.7) = −78.2 kJ mol⁻¹

*(Values are typical published values; experiments give similar figures.)*

The same idea is used for calcium carbonate: measure the enthalpy changes of CaCO₃ and of CaO each reacting with hydrochloric acid. Both form CaCl₂(aq) and water, so ΔH(decomposition) = ΔH(CaCO₃ + HCl) − ΔH(CaO + HCl).

## Bond energy data in a cycle

Bond energies form a cycle via gaseous atoms: reactants → atoms (bonds broken, ΔH positive) → products (bonds formed, ΔH negative). This gives the familiar "broken minus formed" expression. It only applies when every substance is a gas. If a substance is a liquid, the cycle needs an extra step for vaporisation, which is why bond-energy answers differ from values for reactions involving liquids.

### Worked example 5: finding an unknown bond energy

For H₂(g) + Br₂(g) → 2HBr(g), ΔH = −103 kJ mol⁻¹. H–H = 436 and Br–Br = 193 kJ mol⁻¹. Find H–Br.

    436 + 193 − 2E(H–Br) = −103
    2E(H–Br) = 732,  E(H–Br) = 366 kJ mol⁻¹

This matches the data booklet value.

## Common mistakes

- Forgetting to multiply by the coefficients in the equation.
- Using the formation formula with combustion data (or the reverse). Check which data are given before writing the expression.
- Including a non-zero ΔH_f for O₂ or another element.
- Reversing an equation but not changing the sign of ΔH.
- In solution experiments, adding ΔH₁ and ΔH₂ instead of following arrow directions.
- Drawing arrows in the cycle in the wrong direction, then subtracting by habit.

## Exam technique

- **Draw the cycle**, even when not asked. It carries method marks and shows the route.
- **Label every arrow** with its value multiplied by the moles involved.
- **Show the sum** with brackets: [3(−394) + 4(−286)] − (−2220).
- Give the final answer with **sign and units**, to the precision of the data.
- If asked why the enthalpy change "cannot be found directly", give a **chemical** reason, such as a reaction that does not occur, gives a mixture of products, or is too slow.

## Frequently asked questions

**Is combining equations the same as drawing a cycle?**
Yes. Both apply Hess's law: adding and reversing equations is the algebraic form of following arrows round a cycle. Use whichever suits the data, and show every step.

**Why must the initial and final conditions be the same?**
Enthalpy depends on physical state and temperature. If water ends as a liquid on one route but as a gas on the other, the routes do not finish at the same point, so their enthalpy changes differ.

## Related resources

- [Hess's law revision notes](/resources/cambridge-a-level-chemistry-9701-as-hess-s-law-revision-notes/)
- [Hess's law practice questions](/resources/cambridge-a-level-chemistry-9701-as-hess-s-law-practice/)
- [Enthalpy change study guide](/resources/cambridge-a-level-chemistry-9701-as-enthalpy-change/)
- [Chemical Energetics: Lattice Energy, Entropy and Gibbs Free Energy](/resources/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy/), where A Level extends these cycles

*Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. Always check the current syllabus for your examination year.*
