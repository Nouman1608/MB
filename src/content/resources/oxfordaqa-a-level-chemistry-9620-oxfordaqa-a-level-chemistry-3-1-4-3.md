---
title: "OxfordAQA A-Level Chemistry (9620): Applications of Hess's law"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Energetics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-3"
description: "OxfordAQA 9620 guide to 3.1.4.3: Hess's law, energy cycles from formation and combustion data, combining equations and cycles built from calorimetry results."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.1.4.3 Applications of Hess's law** from the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International AS content, examined in Unit 1. The specification lists **Hess's law** and requires you to **use Hess's law to perform calculations, including calculation of enthalpy changes for reactions from enthalpies of combustion or from enthalpies of formation**.

The [energetics overview](/resources/oxfordaqa-a-level-chemistry-energetics/) states the law and shows one cycle for methane. This page gives you two reliable cycle layouts, a shortcut formula for each and its limits, the equation-combining method, and a cycle built from experimental results. You need the definitions from [enthalpy change](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-1/). Afterwards use the [Hess's law revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3-revision-notes/) and the [Hess's law practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3-practice/).

## Hess's law

**Hess's law**: the enthalpy change for a reaction is **independent of the route** taken, provided the initial and final conditions are the same.

It follows from the conservation of energy. If two routes from the same reactants to the same products had different enthalpy changes, you could go one way and return the other and create energy from nothing.

**Why it is useful.** Many enthalpy changes cannot be measured directly: the reaction is too slow, gives a mixture of products, or cannot be done at all (carbon and hydrogen do not combine to give ethanol). Hess's law lets you calculate them from values that can be measured.

## Cycle 1: using enthalpies of formation

Put the reaction across the top. Put the **elements** in their standard states at the bottom. Arrows go **up** from the elements to both reactants and products, because they are formation reactions.

```
          ΔrH
reactants ───────→ products
     ↖                 ↗
 ΣΔfH(reactants)   ΣΔfH(products)
          elements
```

Going from reactants to products by the lower route means reversing the left arrow and following the right one:

```
ΔrH = ΣΔfH(products) − ΣΔfH(reactants)
```

### Worked example 1: hydration of ethene (gas phase)

C₂H₄(g) + H₂O(g) → C₂H₅OH(g). Data, ΔfH / kJ mol⁻¹: C₂H₄(g) +52, H₂O(g) −242, C₂H₅OH(g) −235.

```
ΣΔfH(products)  = −235
ΣΔfH(reactants) = +52 + (−242) = −190
ΔrH = −235 − (−190) = −45 kJ mol⁻¹
```

### Worked example 2: an enthalpy of combustion from formation data

Calculate ΔcH for propane: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). Data, ΔfH / kJ mol⁻¹: C₃H₈(g) −105, CO₂(g) −394, H₂O(l) −286.

```
ΣΔfH(products)  = 3(−394) + 4(−286) = −1182 − 1144 = −2326
ΣΔfH(reactants) = −105 + 5(0) = −105          (O₂ is an element)
ΔcH = −2326 − (−105) = −2221 kJ mol⁻¹
```

Each value is **multiplied by its balancing number**, and oxygen counts as zero.

## Cycle 2: using enthalpies of combustion

Put the reaction across the top. Put the **combustion products** (CO₂ and H₂O) at the bottom. Arrows go **down** from reactants and products, because they are combustion reactions.

```
          ΔrH
reactants ───────→ products
     ↘                 ↙
 ΣΔcH(reactants)   ΣΔcH(products)
     combustion products
```

Going down from the reactants and back up to the products:

```
ΔrH = ΣΔcH(reactants) − ΣΔcH(products)
```

The order of subtraction is the **opposite** of the formation formula, because the arrows point the other way.

### Worked example 3: hydrogenation of ethene

C₂H₄(g) + H₂(g) → C₂H₆(g). Data, ΔcH / kJ mol⁻¹: C₂H₄ −1411, H₂ −286, C₂H₆ −1560.

```
ΣΔcH(reactants) = −1411 + (−286) = −1697
ΣΔcH(products)  = −1560
ΔrH = −1697 − (−1560) = −137 kJ mol⁻¹
```

A useful check: both reactant and product sides must burn to the **same** amounts of CO₂ and H₂O. Here C₂H₄ + H₂ and C₂H₆ each give 2CO₂ + 3H₂O, so the cycle closes.

## Method 3: combining equations

Write the equations you are given, then reverse or multiply them so they add up to the target equation. Do the same to each ΔH.

### Worked example 4: the enthalpy of formation of carbon monoxide

Target: C(s) + ½O₂(g) → CO(g). Given:

```
(1) C(s) + O₂(g) → CO₂(g)              ΔH = −394 kJ mol⁻¹
(2) CO(g) + ½O₂(g) → CO₂(g)            ΔH = −283 kJ mol⁻¹
```

Keep (1) as written. Reverse (2): CO₂(g) → CO(g) + ½O₂(g), ΔH = +283. Add them; CO₂ and ½O₂ cancel:

```
C(s) + ½O₂(g) → CO(g)        ΔH = −394 + 283 = −111 kJ mol⁻¹
```

This enthalpy cannot be measured directly, because burning carbon in limited oxygen always gives some CO₂.

## Using calorimetry results in a cycle

Hess's law is often combined with [calorimetry](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-2/). The classic example is the hydration of anhydrous copper(II) sulfate, which cannot be measured directly because the solid takes up water slowly and unevenly.

### Worked example 5

Target: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s). Two dissolving experiments give (values supplied for this example):

```
ΔH₁: CuSO₄(s) + aq → CuSO₄(aq)                    −66.5 kJ mol⁻¹
ΔH₂: CuSO₄·5H₂O(s) + aq → CuSO₄(aq)               +11.7 kJ mol⁻¹
```

Both routes end at the same solution. Going from anhydrous solid to hydrated solid means dissolving the anhydrous solid, then reversing the second step:

```
ΔH = ΔH₁ − ΔH₂ = −66.5 − (+11.7) = −78.2 kJ mol⁻¹
```

## Choosing the method

| Data given | Use |
|---|---|
| Enthalpies of formation | ΣΔfH(products) − ΣΔfH(reactants) |
| Enthalpies of combustion | ΣΔcH(reactants) − ΣΔcH(products) |
| A set of equations with ΔH values | Reverse and multiply equations so they add to the target |
| Two experiments that share a product | Draw a triangle cycle through the shared product |

## Common mistakes

- Using the formation formula with combustion data, or the other way round.
- Forgetting to multiply by balancing numbers.
- Giving an element in its standard state a non-zero ΔfH.
- Reversing an equation without changing the sign of ΔH.
- Mixing H₂O(l) and H₂O(g) values.
- Arithmetic slips with double negatives: write brackets, as in −2326 − (−105).

## Exam technique

- **Draw** a cycle when asked, or whenever the data type is unfamiliar: label each arrow with its ΔH and its multiplier.
- **Calculate**: write the general expression before substituting numbers; examiners can then credit method even after a slip.
- **State** Hess's law: include "independent of route" and "initial and final conditions the same".
- **Explain** why a value is found indirectly: give the practical reason (does not happen, too slow, side products).

Next, use the [revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3-practice/). For approximate values from bond data, and why they differ from Hess's law values, go to [bond enthalpies](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-4/).

## Frequently asked questions

**What is Hess's law?**
Hess's law states that the enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same. It follows from the conservation of energy.

**Why is the combustion formula reactants minus products?**
In a combustion cycle the arrows point down from reactants and products to the combustion products. The route from reactants to products goes down one arrow and back up the other, so the product combustion values are subtracted.

**Why can the enthalpy of formation of ethanol not be measured directly?**
Carbon, hydrogen and oxygen do not react together to form ethanol. Its enthalpy of formation is found from enthalpies of combustion using Hess's law.

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards, section 3.1.4.3 Applications of Hess's law (International AS). Published by OxfordAQA.
