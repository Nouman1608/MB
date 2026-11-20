---
title: "AQA A-Level Chemistry (7405): Applications of Hess’s law"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Energetics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "AS"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "energetics-7405"
    subtopic: "applications-of-hesss-law-7405"
description: "AQA 7405 Hess's law in depth: drawing enthalpy cycles, using enthalpies of formation and combustion, combining equations, and working out unknown enthalpy changes from experimental data."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.4.3 Applications of Hess's law** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content, examined on Papers 1 and 2 (and Paper 3). Many enthalpy changes cannot be measured directly, for example the formation of ethanol from carbon, hydrogen and oxygen. Hess's law lets you calculate them from changes that can be measured. The specification asks you to use the law, including calculations from enthalpies of **combustion** or **formation**. This page shows how to draw each cycle, which direction the arrows go, and how to avoid sign errors. The [Energetics study guide](/resources/aqa-a-level-chemistry-energetics/) covers the wider topic. Recall is in the [Hess's law revision notes](/resources/aqa-a-level-chemistry-7405-applications-of-hesss-law-revision-notes/), and questions are in the [Hess's law practice questions](/resources/aqa-a-level-chemistry-7405-applications-of-hesss-law-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| Hess's law | State it and apply it |
| Calculate enthalpy changes for reactions from enthalpies of combustion | Use a combustion cycle |
| Calculate enthalpy changes for reactions from enthalpies of formation | Use a formation cycle |
| Practical opportunity: find ΔH using Hess's law and calorimetry (for example thermal decomposition of NaHCO₃, hydration of MgSO₄ or CuSO₄) | Combine measured enthalpy changes to find one you cannot measure directly |

## Hess's law

**Hess's law states that the enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.** It follows from the conservation of energy: if two routes gave different totals, energy could be created or destroyed by going round the loop.

This means that, for any cycle, **the sum of the enthalpy changes by one route equals the sum by the other route**.

## The two standard cycles

### A formation cycle

Reactants and products are both made from their elements. The two routes are:

- **Route 1 (direct):** reactants → products, enthalpy change ΔrH⦵
- **Route 2 (via elements):** reactants → elements → products

```
reactants ───────ΔrH⦵───────► products
     \                           ▲
 −ΣΔfH⦵(reactants)       +ΣΔfH⦵(products)
       \                         /
        ▼                       /
              elements
```

Reactants break down into elements (the **reverse** of formation, so the sign is reversed), then the elements form the products.

**ΔrH⦵ = ΣΔfH⦵(products) − ΣΔfH⦵(reactants)**

### A combustion cycle

Reactants and products are both burned to the same combustion products. The arrows now point **down to** the combustion products.

```
reactants ───────ΔrH⦵───────► products
      \                          /
 ΣΔcH⦵(reactants)       ΣΔcH⦵(products)
        \                      /
         ▼                    ▼
        combustion products
```

Route 1 is the direct reaction followed by the combustion of the products. Route 2 is the combustion of the reactants.

**ΔrH⦵ = ΣΔcH⦵(reactants) − ΣΔcH⦵(products)**

Note the reversal compared with the formation formula: for formation it is products minus reactants, but for combustion it is reactants minus products.

## Method for any cycle

1. Write the balanced equation for the reaction you want, with state symbols.
2. Choose the cycle: formation data means elements at the bottom; combustion data means combustion products.
3. Draw the arrows, labelling each with its enthalpy data multiplied by the number of moles in the equation.
4. Write "route 1 = route 2" and solve for the unknown.
5. Check the sign and the unit, kJ mol⁻¹.

### Worked example 1: a formation cycle

Calculate ΔrH⦵ for the combustion of ethanol: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l).

ΔfH⦵ values (kJ mol⁻¹): CO₂(g) −394, H₂O(l) −286, C₂H₅OH(l) −277. O₂(g) is an element, so zero.

```
ΣΔfH⦵(products)  = 2(−394) + 3(−286) = −788 − 858 = −1646
ΣΔfH⦵(reactants) = −277 + 3(0)        = −277
ΔrH⦵ = −1646 − (−277) = −1369 kJ mol⁻¹
```

### Worked example 2: a combustion cycle

Calculate the standard enthalpy of formation of ethanol from enthalpies of combustion (kJ mol⁻¹): C(s) −394, H₂(g) −286, C₂H₅OH(l) −1367.

The target: 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l). Here the reactants are the elements and the product is ethanol.

```
ΔrH⦵ = ΣΔcH⦵(reactants) − ΣΔcH⦵(products)
     = [2(−394) + 3(−286)] − [−1367]
     = [−788 − 858] + 1367
     = −279 kJ mol⁻¹
```

The oxygen is not included because oxygen is not burned.

### Worked example 3: a decomposition

Calculate ΔH for 2NaHCO₃(s) → Na₂CO₃(s) + H₂O(l) + CO₂(g), using ΔfH⦵ values (kJ mol⁻¹): NaHCO₃(s) −948, Na₂CO₃(s) −1131, H₂O(l) −286, CO₂(g) −394.

```
ΣΔfH⦵(products)  = −1131 − 286 − 394 = −1811
ΣΔfH⦵(reactants) = 2(−948)          = −1896
ΔrH⦵ = −1811 − (−1896) = +85 kJ mol⁻¹
```

The value is for the equation as written (two moles of NaHCO₃). It is positive, so the reaction is endothermic. Per mole of NaHCO₃, the value is +42.5 kJ.

### Worked example 4: hydrogenation

Calculate ΔrH⦵ for C₂H₄(g) + H₂(g) → C₂H₆(g) using ΔcH⦵ values (kJ mol⁻¹): C₂H₄ −1411, H₂ −286, C₂H₆ −1560.

```
ΔrH⦵ = ΣΔcH⦵(reactants) − ΣΔcH⦵(products)
     = (−1411 − 286) − (−1560)
     = −1697 + 1560 = −137 kJ mol⁻¹
```

## Combining equations (algebraic method)

Sometimes data are given as equations and the cycle is not drawn. Treat the equations as algebra.

- **Reverse** an equation: change the sign of ΔH.
- **Multiply** an equation by a factor: multiply ΔH by the same factor.
- **Add** equations so that substances not wanted cancel.

### Worked example 5: carbon monoxide

Find ΔH for C(s) + ½O₂(g) → CO(g), given:

```
(1) C(s) + O₂(g) → CO₂(g)          ΔH = −394 kJ mol⁻¹
(2) CO(g) + ½O₂(g) → CO₂(g)        ΔH = −283 kJ mol⁻¹
```

Reverse equation (2) to get CO₂ → CO + ½O₂, ΔH = +283. Add it to (1):

```
C(s) + O₂(g) + CO₂(g) → CO₂(g) + CO(g) + ½O₂(g)
C(s) + ½O₂(g) → CO(g)
ΔH = −394 + 283 = −111 kJ mol⁻¹
```

The CO₂ and ½O₂ cancel. This reaction cannot be measured directly because burning carbon in limited oxygen gives a mixture of CO and CO₂.

## Using experimental data: a hydration

Anhydrous magnesium sulfate and its hydrate both dissolve in water. The enthalpy change of hydration, MgSO₄(s) + 7H₂O(l) → MgSO₄·7H₂O(s), cannot be measured directly. Calorimetry can give the enthalpy of solution of each solid.

```
MgSO₄(s) + 7H₂O(l) ──ΔH(hydration)──► MgSO₄·7H₂O(s)
        \                                 /
   ΔH(sol, anhydrous)         ΔH(sol, hydrate)
          \                              /
           ▼                            ▼
                 MgSO₄(aq)
```

Suppose the enthalpy of solution of anhydrous MgSO₄ is −91 kJ mol⁻¹ and of the hydrate is +16 kJ mol⁻¹. Route 1 = route 2:

```
ΔH(hydration) + (+16) = −91
ΔH(hydration) = −91 − 16 = −107 kJ mol⁻¹
```

Both reach the same solution, so the two routes must have the same total enthalpy change.

## Common mistakes

- Forgetting to multiply by the number of moles in the balanced equation.
- Reversing the formula: product minus reactant for formation, reactant minus product for combustion.
- Including oxygen or another element in a formation sum (its ΔfH⦵ is zero, but it must still be multiplied correctly).
- Drawing arrows in the wrong direction on the cycle.
- Using a combustion value in a formation cycle, or the reverse.
- Changing the sign for the wrong equation when combining equations.
- Omitting the unit or the sign.

## Exam technique for the command words

- **State** Hess's law: say "independent of the route" and "provided initial and final conditions are the same".
- **Calculate**: draw the cycle, show the arithmetic with all moles, and give the sign and unit.
- **Use** the data: check that every ΔH is multiplied by its balancing number.
- **Explain** why a value cannot be measured directly: the reaction may be too slow, incomplete, give a mixture of products, or be difficult to control.

## Frequently asked questions

**Why is ΔfH⦵ of an element zero?**
No reaction is needed to form it from itself.

**How do I choose the cycle?**
If the question gives enthalpies of formation, use the formation cycle. If it gives combustion data, use the combustion cycle.

**Do I have to draw the cycle?**
Not always, but a drawn cycle often earns marks even when the arithmetic goes wrong.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.4.3 Applications of Hess’s law.
