---
title: "OxfordAQA A-Level Chemistry (9620): Born–Haber cycles"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-thermodynamics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-8-1"
description: "OxfordAQA 9620 guide to 3.1.8.1: Born–Haber cycles with 2+ and 2− ions, finding any unknown term, covalent character, and hydration and solution cycles."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on point **3.1.8.1 Born–Haber cycles** of the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. The specification says lattice enthalpy "can be defined as either enthalpy of lattice dissociation or enthalpy of lattice formation", and that Born–Haber cycles calculate lattice enthalpies from enthalpy of formation, ionisation energy, enthalpy of atomisation, bond enthalpy and electron affinity. Students must define these terms, construct cycles to find a lattice enthalpy or "one of the other enthalpy changes", compare cycle values with "a perfect ionic model to provide evidence for covalent character", define enthalpy of hydration and use cycles to calculate enthalpies of solution. It is International A2 content (**International A-level only**), assessed in Unit 3.

The [thermodynamics study guide](/resources/oxfordaqa-a-level-chemistry-thermodynamics/) defines every term and works through cycles for caesium fluoride, barium chloride and silver iodide. This page tackles harder cases: oxide ions, two ions of the same element, and solving for an electron affinity. Condense it with the [3.1.8.1 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-1-revision-notes/) and practise with the [3.1.8.1 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-1-practice/).

## The logic of the cycle

A lattice enthalpy cannot be measured directly, because you cannot collect a mole of separate gaseous ions and let them combine. Hess's law gets round this: the enthalpy change from the elements to the solid is the same whether it happens directly (ΔfH) or by the long route through gaseous atoms and gaseous ions.

```
ΔfH = (steps from elements to gaseous ions) + (lattice enthalpy of formation)
```

Every step in the long route is measurable or calculable. One equation, one unknown: so any **one** term can be found if all the others are given.

### Precision checklist for definitions

When an exam asks you to define a term, these are the details that carry the marks:

- **Per mole** of the stated species: per mole of compound (formation), of gaseous atoms formed (atomisation), of bonds broken (bond enthalpy), of electrons removed or gained (ionisation energy, electron affinity).
- **States**: elements in their **standard states** for formation and atomisation; **gaseous** atoms and ions for ionisation energy, electron affinity and lattice enthalpy.
- **Direction**: lattice dissociation (solid → gaseous ions) is endothermic; lattice formation (gaseous ions → solid) is exothermic. Name the one you use.
- **Hydration**: gaseous ions → aqueous ions, per mole of ions.

## Ions with a 2+ or 2− charge

### Worked example 1: magnesium oxide

Data (kJ mol⁻¹), as given in a question: ΔfH(MgO) −602; ΔatH(Mg) +148; first IE(Mg) +738; second IE(Mg) +1451; ΔatH(O) +249; first EA(O) −141; second EA(O) +798.

Build the energy levels from the elements (zero) upwards:

| Species present | Step | Level / kJ mol⁻¹ |
|---|---|---|
| Mg(s) + ½O₂(g) | start | 0 |
| Mg(g) + ½O₂(g) | ΔatH(Mg), up | +148 |
| Mg⁺(g) + e⁻ + ½O₂(g) | first IE, up | +886 |
| Mg²⁺(g) + 2e⁻ + ½O₂(g) | second IE, up | +2337 |
| Mg²⁺(g) + 2e⁻ + O(g) | ΔatH(O), up | +2586 |
| Mg²⁺(g) + e⁻ + O⁻(g) | first EA, down | +2445 |
| Mg²⁺(g) + O²⁻(g) | second EA, **up** | +3243 |
| MgO(s) | lattice formation, down | −602 |

```
lattice enthalpy of formation = −602 − 3243 = −3845 kJ mol⁻¹
lattice enthalpy of dissociation = +3845 kJ mol⁻¹
```

Two points to notice:

- The **second electron affinity is endothermic**: an electron is being added to an ion that is already negative, so repulsion must be overcome. Its arrow points **up**.
- ΔatH(O) is the enthalpy to form **one** mole of O atoms, which is half the O=O bond enthalpy. If a question gives the bond enthalpy (498 kJ mol⁻¹), halve it.

The lattice enthalpy of MgO is about five times that of a 1+/1− compound such as sodium chloride, because both ions carry double charges and are small, so the attraction between them is much stronger.

## Two ions of the same element

### Worked example 2: finding the second electron affinity of oxygen from sodium oxide

Data (kJ mol⁻¹): ΔfH(Na₂O) −414; ΔatH(Na) +107; first IE(Na) +496; ΔatH(O) +249; first EA(O) −141; lattice enthalpy of formation of Na₂O −2526.

Na₂O needs **two** gaseous Na⁺ ions, so atomisation and first ionisation of sodium both count **twice**:

```
steps known:  2(+107) + 2(+496) + 249 + (−141) = +1314
Hess:         −414 = +1314 + EA₂ + (−2526)
EA₂ = −414 − 1314 + 2526 = +798 kJ mol⁻¹
```

The value is positive, as expected for a second electron affinity, and matches the value used in worked example 1: a useful consistency check.

## Solving for a first electron affinity

### Worked example 3: chlorine from potassium chloride

Data (kJ mol⁻¹): ΔfH(KCl) −437; ΔatH(K) +89; first IE(K) +419; ΔatH(Cl) +122; lattice enthalpy of formation of KCl −718.

```
−437 = 89 + 419 + 122 + EA₁ + (−718)
EA₁ = −437 − 89 − 419 − 122 + 718 = −349 kJ mol⁻¹
```

A first electron affinity of a halogen should come out negative. If yours is positive, check the sign you used for the lattice term.

**Method for any unknown**: write the Hess equation with every term in place, using the correct multiplier and sign, then rearrange. Drawing the energy-level table, as in worked example 1, is the safest way to keep signs right.

## Evidence for covalent character

A **perfect ionic model** calculates a lattice enthalpy assuming the ions are perfect spheres with evenly spread charge, attracted only electrostatically. A Born–Haber value comes from experimental data, so it reflects the real bonding.

Values given for this comparison (lattice enthalpy of formation, kJ mol⁻¹):

| Compound | Born–Haber cycle | Perfect ionic model | Difference |
|---|---|---|---|
| Sodium chloride | −787 | −766 | 21 (about 3%) |
| Silver chloride | −905 | −833 | 72 (about 9%) |

- For sodium chloride the values are close, so the bonding is **nearly purely ionic**.
- For silver chloride the Born–Haber value is clearly more exothermic: the lattice is held more strongly than pure electrostatics predicts. This is **evidence for covalent character**.

The cause is **polarisation**: the cation pulls the anion's electron cloud towards itself, putting some electron density between the ions, as in a covalent bond. Polarisation is greatest when the cation is small or highly charged and the anion is large.

## Enthalpy of hydration and enthalpy of solution

The **enthalpy of hydration** is the enthalpy change when one mole of gaseous ions dissolves in water to form one mole of aqueous ions, for example Mg²⁺(g) → Mg²⁺(aq). It is exothermic, and more so for ions that are smaller or more highly charged, because they attract the polar water molecules more strongly.

The solution cycle:

```
ΔsolH = lattice enthalpy of dissociation + Σ(ΔhydH of each ion)
```

### Worked example 4: magnesium chloride

Data (kJ mol⁻¹): lattice dissociation of MgCl₂ +2526; ΔhydH(Mg²⁺) −1920; ΔhydH(Cl⁻) −364.

```
ΔsolH = +2526 + (−1920) + 2(−364) = −122 kJ mol⁻¹
```

The hydration of **two** chloride ions is counted. Dissolving is exothermic because the hydration enthalpies together release more energy than is needed to break up the lattice.

## Common mistakes

- Forgetting to double atomisation and ionisation steps when a formula contains two of the same ion.
- Using the full bond enthalpy instead of half for one mole of O or Cl atoms.
- Giving the second electron affinity a negative sign.
- Mixing up lattice formation and dissociation signs.
- Forgetting the second ionisation energy for a 2+ ion.
- Counting one hydration enthalpy when the formula has two anions.

## Exam technique for the command words

- **Define**: include "one mole", the states and the direction.
- **Calculate**: write the Hess equation in full before substituting; show multipliers; give sign and units.
- **Construct** or **draw** a cycle: label every level with species and state symbols, use upward arrows for endothermic steps, and place the elements at zero.
- **Explain** a difference between cycle and model values: say which is more exothermic, what that shows (covalent character) and why (polarisation of the anion by the cation).

## Next steps

Condense this with the [3.1.8.1 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-1-revision-notes/), then try the [3.1.8.1 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-1-practice/). Next, [Gibbs free energy and entropy (3.1.8.2)](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-2/) explains why some reactions with positive ΔH still happen.

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.1.8 Thermodynamics (International A2), point 3.1.8.1 Born–Haber cycles. Published by OxfordAQA.
