---
title: "AQA A-Level Chemistry (7405): Bond enthalpies"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Energetics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "AS"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "energetics-7405"
    subtopic: "bond-enthalpies-7405"
description: "AQA 7405 bond enthalpies in depth: defining mean bond enthalpy, calculating approximate enthalpy changes for gaseous reactions, finding unknown bonds and explaining differences from Hess's law values."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.4.4 Bond enthalpies** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content, examined on Papers 1 and 2 (and Paper 3). Bond enthalpies give a quick estimate of the enthalpy change of a reaction in the gas phase, by counting the bonds broken and the bonds made. The specification asks for three skills: defining mean bond enthalpy, using values to calculate an approximate ΔH, and explaining why the answer differs from a value found using Hess's law. The [Energetics study guide](/resources/aqa-a-level-chemistry-energetics/) covers the whole topic. Recall is in the [Bond enthalpies revision notes](/resources/aqa-a-level-chemistry-7405-bond-enthalpies-revision-notes/), and questions are in the [Bond enthalpies practice questions](/resources/aqa-a-level-chemistry-7405-bond-enthalpies-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| Mean bond enthalpy | Define it |
| Use mean bond enthalpies to calculate an approximate value of ΔH for reactions in the gaseous phase | Calculate ΔH from bonds broken and bonds made |
| Explain why values from mean bond enthalpy calculations differ from those determined using Hess's law | Give the reasons, in particular that the values are averages and that the state may not be gaseous |

## The definition

Breaking a bond needs energy, so bond breaking is endothermic. Making a bond releases energy, so bond making is exothermic.

**The mean bond enthalpy is the enthalpy change when one mole of a given type of bond is broken in the gas phase, averaged over a range of different compounds containing that bond.**

Two features need to be mentioned: the bond is broken in the **gaseous state**, and the value is an **average** (mean) over different molecules. The bond enthalpy of C–H in methane differs a little from C–H in ethanol or in ethene, so the data table gives one mean value.

## The calculation

```
ΔH = Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed)
```

Method:

1. Write the equation and draw the **displayed formula** of every species so that every bond is visible.
2. Count only the bonds that **change**: those in the reactants that are broken, and those in the products that are formed. You may also count all bonds, which gives the same answer.
3. Multiply each bond enthalpy by the number of bonds.
4. Subtract: broken minus formed.
5. State the sign and unit, kJ mol⁻¹.

The common data are the mean bond enthalpies in kJ mol⁻¹ (given in questions): C–H 413, C–C 347, C=C 612, C–O 358, C=O 805, O–H 464, O=O 498, H–H 436, N–H 391, N≡N 945, Cl–Cl 243, H–Cl 432, C–Cl 346.

### Worked example 1: combustion of methane

CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)

```
Bonds broken:  4 × C–H = 4 × 413 = 1652
               2 × O=O = 2 × 498 =  996      total 2648 kJ
Bonds formed:  2 × C=O = 2 × 805 = 1610
               4 × O–H = 4 × 464 = 1856      total 3466 kJ
ΔH = 2648 − 3466 = −818 kJ mol⁻¹
```

The result is negative: more energy is released making bonds than is needed to break them, so the reaction is exothermic.

### Worked example 2: hydrogenation of ethene

C₂H₄(g) + H₂(g) → C₂H₆(g)

```
Bonds broken:  1 × C=C = 612
               1 × H–H = 436      total 1048 kJ
Bonds formed:  1 × C–C = 347
               2 × C–H = 826      total 1173 kJ
ΔH = 1048 − 1173 = −125 kJ mol⁻¹
```

The four C–H bonds in ethene stay as C–H bonds in ethane, so they can be left out of both sums. The two new C–H bonds are formed.

### Worked example 3: ammonia synthesis

N₂(g) + 3H₂(g) → 2NH₃(g)

```
Bonds broken:  1 × N≡N = 945
               3 × H–H = 1308     total 2253 kJ
Bonds formed:  6 × N–H = 2346     total 2346 kJ
ΔH = 2253 − 2346 = −93 kJ mol⁻¹
```

Each NH₃ has three N–H bonds, and the equation shows two NH₃, so six N–H bonds form.

### Worked example 4: combustion of ethanol in the gas phase

C₂H₅OH(g) + 3O₂(g) → 2CO₂(g) + 3H₂O(g)

Ethanol has 5 C–H, 1 C–C, 1 C–O and 1 O–H bonds.

```
Bonds broken:  5 × C–H = 2065
               1 × C–C =  347
               1 × C–O =  358
               1 × O–H =  464
               3 × O=O = 1494      total 4728 kJ
Bonds formed:  4 × C=O = 3220
               6 × O–H = 2784      total 6004 kJ
ΔH = 4728 − 6004 = −1276 kJ mol⁻¹
```

## Finding an unknown bond enthalpy

If ΔH is known, rearrange the equation.

### Worked example 5

For CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g), ΔH = −122 kJ mol⁻¹. Use C–H = 413, Cl–Cl = 243, H–Cl = 432 to calculate the mean C–Cl bond enthalpy.

```
Bonds broken:  1 × C–H + 1 × Cl–Cl = 413 + 243 = 656
Bonds formed:  1 × C–Cl + 1 × H–Cl = x + 432
ΔH = 656 − (x + 432) = −122
x = 656 − 432 + 122 = 346 kJ mol⁻¹
```

## Why bond enthalpy answers differ from Hess's law values

| Reason | Explanation |
|---|---|
| The values are **mean** values | The bond enthalpy of a given bond differs a little between compounds, so the mean is not exact for the molecule in question |
| Bond enthalpies apply to the **gas phase** | The equation may involve a liquid or solid (for example H₂O(l)), but bond enthalpies do not include the enthalpy of vaporisation, so the answer differs from a value for the same reaction with liquids |
| Hess's law uses **actual** data | Values from enthalpies of formation or combustion are measured for the specific compounds in the reaction |

### Worked example 6: comparing with a Hess's law value

For the combustion of methane, the bond enthalpy calculation (steam as the product) gave −818 kJ mol⁻¹. The data-book enthalpy of combustion is −890 kJ mol⁻¹, with liquid water. Two points explain the difference. First, the bond enthalpy calculation produces water **vapour**, whereas the data-book value is for liquid water. Condensing 2 mol of water releases about 88 kJ more (2 × 44), which accounts for most of the difference. Second, the bond enthalpies are mean values, not exact values for the molecules involved, which explains the rest.

Correct comparison: the Hess's law value for burning methane to give steam is −890 + 88 = −802 kJ mol⁻¹. The bond enthalpy calculation (−818) is within about 2 per cent of this.

## Common mistakes

- Subtracting the wrong way round (formed minus broken).
- Forgetting to multiply by the number of bonds, particularly in two moles of product.
- Missing bonds in the displayed formula, for example the O–H bond in ethanol.
- Using bond enthalpies for reactions involving liquids without comment.
- Defining mean bond enthalpy without "gaseous" or "mean/average".
- Treating a double bond as two single bonds.
- Not giving a sign.

## Exam technique for the command words

- **Define**: include "one mole", "gaseous state" and "mean (average) over different compounds".
- **Calculate**: show bonds broken, bonds formed, then the subtraction.
- **Explain** a difference from Hess's law: state both the mean-value reason and the state reason, if the question involves liquids.
- **Predict** whether the reaction is exothermic: compare the two totals.

## Frequently asked questions

**Why is the answer called an "approximate" value?**
Because mean bond enthalpies are averages over many compounds, so they never exactly match the bonds in the particular molecules.

**Why do I use the displayed formula?**
It shows every bond, so none is missed.

**Do I include bonds that do not change?**
You may, but it is quicker to cancel them. Both give the same answer.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.4.4 Bond enthalpies.
