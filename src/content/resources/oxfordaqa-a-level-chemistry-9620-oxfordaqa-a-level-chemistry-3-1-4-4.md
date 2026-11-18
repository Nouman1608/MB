---
title: "OxfordAQA A-Level Chemistry (9620): Bond enthalpies"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Energetics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-4"
description: "OxfordAQA 9620 guide to 3.1.4.4: mean bond enthalpy, estimating ΔH for gas-phase reactions, finding unknown bond values, and why results differ from Hess."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.1.4.4 Bond enthalpies** from the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International AS content, examined in Unit 1. The specification names **mean bond enthalpy** and requires you to:

- define the term mean bond enthalpy;
- use mean bond enthalpies to calculate an approximate value of ΔH for reactions in the gaseous phase;
- explain why values from mean bond enthalpy calculations differ from those determined using Hess's law.

The [energetics overview](/resources/oxfordaqa-a-level-chemistry-energetics/) works through H₂ + Cl₂. This page builds a counting routine for larger molecules, compares several estimates with Hess's law values, and shows the reverse calculation for an unknown bond. Afterwards use the [bond enthalpies revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-4-revision-notes/) and the [bond enthalpies practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-4-practice/).

## Defining mean bond enthalpy

**Mean bond enthalpy**: the enthalpy change when **one mole** of a specified type of covalent bond is **broken in gaseous molecules**, **averaged** over a range of different compounds containing that bond.

Three parts carry the marks: one mole of bonds, gaseous molecules, and averaged over different compounds.

Why "mean"? The energy needed to break a particular bond depends on its surroundings. The C–H bond in methane does not need exactly the same energy as a C–H bond in ethanol or benzene. Data books therefore quote an average. For a diatomic molecule such as H₂ or Cl₂ there is only one compound, so the value is exact rather than a mean.

**Signs.** Breaking bonds always needs energy, so bond enthalpies are **positive**. Making bonds releases the same amount of energy.

## The calculation

```
ΔH ≈ Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed)
```

**Routine**

1. Write the equation with **displayed formulae**, so every bond is visible.
2. List the bonds broken in the reactants, with how many of each.
3. List the bonds formed in the products.
4. Multiply by the number of each bond and by the balancing numbers.
5. Subtract: broken minus formed.

A negative answer means more energy is released by forming bonds than is taken in to break them: the reaction is exothermic.

**Mean bond enthalpies used on this page** (kJ mol⁻¹): C–H 413, C–C 347, C=C 612, C=O 805, O–H 463, O=O 498, H–H 436, N≡N 945, N–H 391, Cl–Cl 243.

### Worked example 1: combustion of methane (all gases)

CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)

```
broken:  4 × C–H = 4 × 413 = 1652
         2 × O=O = 2 × 498 =  996      total 2648
formed:  2 × C=O = 2 × 805 = 1610
         4 × O–H = 4 × 463 = 1852      total 3462
ΔH ≈ 2648 − 3462 = −814 kJ mol⁻¹
```

The value from enthalpies of formation for the same gas-phase reaction is about −802 kJ mol⁻¹. The estimate is close, but not equal.

### Worked example 2: synthesis of ammonia

N₂(g) + 3H₂(g) → 2NH₃(g)

```
broken:  1 × N≡N = 945;  3 × H–H = 1308      total 2253
formed:  6 × N–H = 6 × 391                   total 2346
ΔH ≈ 2253 − 2346 = −93 kJ mol⁻¹   (for 2 mol NH₃)
per mole of NH₃: −46.5 kJ mol⁻¹
```

The equation forms two moles of ammonia, so halve the answer to compare it with ΔfH(NH₃) = −46 kJ mol⁻¹.

### Worked example 3: only the changing bonds need counting

CH₂=CH₂(g) + H₂(g) → CH₃–CH₃(g)

The four C–H bonds in ethene survive into ethane, so they cancel. Count only what changes:

```
broken:  C=C 612 + H–H 436 = 1048
formed:  C–C 347 + 2 × C–H 826 = 1173
ΔH ≈ 1048 − 1173 = −125 kJ mol⁻¹
```

The Hess's law value from enthalpies of combustion is −137 kJ mol⁻¹. Counting every bond on both sides gives the same −125; cancelling just saves time.

## Working backwards: an unknown bond enthalpy

If ΔH is known, the equation can be rearranged to find one bond enthalpy.

### Worked example 4: the H–Cl bond

ΔfH(HCl(g)) = −92 kJ mol⁻¹. H–H = 436 and Cl–Cl = 243 kJ mol⁻¹.

```
½H₂(g) + ½Cl₂(g) → HCl(g)
broken:  ½ × 436 + ½ × 243 = 339.5
formed:  1 × (H–Cl) = x
339.5 − x = −92
x = 339.5 + 92 = 431.5 ≈ 432 kJ mol⁻¹
```

Fractions of a mole of bonds are fine in the arithmetic, because ΔfH is per mole of HCl.

## Why bond enthalpy values differ from Hess's law values

1. **Mean values are averages.** The actual energy of each bond in the specific molecules in the reaction differs from the mean taken over many compounds. This is the main reason, and the one the specification expects.
2. **Gaseous state only.** Bond enthalpies apply to gaseous molecules. If the Hess's law value refers to a reaction with liquids or solids (for example H₂O(l) in a standard enthalpy of combustion), the bond enthalpy estimate leaves out the energy of the changes of state, so the difference is larger.

The Hess's law value, from measured enthalpies of formation or combustion, is specific to the compounds and states in the reaction, so it is the more accurate.

**Example of reason 2.** The standard enthalpy of combustion of methane, with liquid water, is −890 kJ mol⁻¹. The bond enthalpy estimate of −814 kJ mol⁻¹ is for gaseous water. Condensing two moles of water releases extra energy, which the estimate cannot include.

## Common mistakes

- Calculating formed minus broken, giving the wrong sign.
- Missing bonds: draw displayed formulae and tick each bond.
- Forgetting the balancing numbers (two O₂ molecules, so two O=O bonds).
- Treating C=O as two C–O bonds, or using the C–O value for a C=O bond.
- Applying bond enthalpies to a reaction with liquids without comment.
- Defining mean bond enthalpy without "gaseous" or "averaged over different compounds".
- Explaining the difference from Hess's law as "experimental error" or "heat loss": these are calculations, not experiments.

## Exam technique

- **Define**: one mole, gaseous molecules, bond broken, averaged over a range of compounds.
- **Calculate**: set out bonds broken and bonds formed as separate totals, then subtract; give the sign and units.
- **Explain** a discrepancy: "mean bond enthalpies are averages over many compounds, so they are not exact for the bonds in these molecules". Add the state point if liquids are involved.
- **Deduce** an unknown bond: write the full expression with x, then solve.

Next, use the [revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-4-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-4-practice/). Hess's law methods are in [applications of Hess's law](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3/).

## Frequently asked questions

**What is a mean bond enthalpy?**
It is the enthalpy change to break one mole of a specified covalent bond in gaseous molecules, averaged over a range of different compounds that contain that bond. Values are always positive.

**Why are bond enthalpy calculations only approximate?**
Mean bond enthalpies are averages, so they are not exact for the bonds in the particular molecules in a reaction. Bond enthalpies also apply only to gases, so reactions with liquids or solids give larger differences.

**Is ΔH bonds broken minus bonds formed, or the other way round?**
ΔH is the sum of bonds broken minus the sum of bonds formed. Breaking bonds takes in energy and forming them releases it.

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards, section 3.1.4.4 Bond enthalpies (International AS). Published by OxfordAQA.
