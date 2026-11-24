---
title: "OxfordAQA A-Level Chemistry (9620): Gibbs free-energy change, ∆G, and entropy change, ∆S"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 8.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-thermodynamics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-8-2"
description: "OxfordAQA 9620 guide to 3.1.8.2: predicting and calculating ΔS, using ΔG = ΔH − TΔS, feasibility temperatures and reading ΔG against temperature graphs."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on point **3.1.8.2 Gibbs free-energy change, ∆G, and entropy change, ∆S** of the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. The specification states that "∆H, whilst important, is not sufficient to explain feasible change", introduces entropy change as "the concept of increasing disorder", gives ∆G = ∆H – T∆S (derivation not required) and says that "for a reaction to be feasible, the value of ∆G must be zero or negative". Students should be able to calculate entropy changes from absolute entropy values, and use the relationship to determine how ∆G varies with temperature and the temperature at which a reaction becomes feasible. It is International A2 content (**International A-level only**), assessed in Unit 3.

The [thermodynamics study guide](/resources/oxfordaqa-a-level-chemistry-thermodynamics/) sets out the four sign combinations with examples for melting ice, N₂O₄ and PCl₅. This page adds sign prediction, graph work and further calculation types. Condense it with the [3.1.8.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-2-revision-notes/) and practise with the [3.1.8.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-2-practice/).

## Why ∆H is not enough

If ∆H alone decided feasibility, no endothermic change would happen by itself. Yet water evaporates at room temperature, and ammonium chloride decomposes when heated: both are endothermic. The missing quantity is **entropy, S**, a measure of disorder: the number of ways the particles and their energy can be arranged. Changes that increase disorder are favoured.

## Predicting the sign of ∆S

Before calculating, decide whether ∆S should be positive or negative. This catches arithmetic slips.

| Change | Sign of ∆S | Reason |
|---|---|---|
| Solid → liquid → gas | Positive | Particles move more freely; gas is most disordered |
| More moles of gas formed than used | Positive | More gas particles, more arrangements |
| Fewer moles of gas formed | Negative | Fewer gas particles |
| Solid dissolving to form a solution | Usually positive | Ions spread through the solvent |
| Gas dissolving in a liquid | Negative | Gas particles become confined |

Counting **moles of gas** is the quickest guide for a chemical reaction.

## Calculating ∆S from absolute entropies

```
∆S = ΣS(products) − ΣS(reactants)
```

- Multiply each entropy by its coefficient in the equation.
- Elements have **non-zero** entropies (unlike enthalpies of formation): include them.
- Units: **J K⁻¹ mol⁻¹**.

### Worked example 1: ammonium chloride

NH₄Cl(s) → NH₃(g) + HCl(g)        ∆H = +176 kJ mol⁻¹

Absolute entropies (J K⁻¹ mol⁻¹): NH₄Cl(s) 95; NH₃(g) 193; HCl(g) 187.

```
∆S = (193 + 187) − 95 = +285 J K⁻¹ mol⁻¹ = +0.285 kJ K⁻¹ mol⁻¹
```

Positive, as predicted: a solid becomes two moles of gas.

**Is it feasible at 298 K?**

```
∆G = ∆H − T∆S = 176 − (298 × 0.285) = 176 − 84.9 = +91.1 kJ mol⁻¹
```

∆G is positive, so the decomposition is **not feasible** at 298 K.

**When does it become feasible?** Set ∆G = 0:

```
T = ∆H / ∆S = 176 / 0.285 = 618 K
```

Above 618 K, T∆S exceeds ∆H and ∆G is negative. This is why ammonium chloride must be heated strongly to decompose.

## Feasibility temperatures and their limits

### Worked example 2: boiling water

H₂O(l) → H₂O(g)        ∆H = +44.0 kJ mol⁻¹

Absolute entropies (J K⁻¹ mol⁻¹): H₂O(l) 70; H₂O(g) 189.

```
∆S = 189 − 70 = +119 J K⁻¹ mol⁻¹
T = 44.0 / 0.119 = 370 K
```

At this temperature ∆G = 0: liquid and gas are in equilibrium, which corresponds to the boiling point. The measured boiling point at 100 kPa is about 373 K. The small difference arises because ∆H and ∆S values measured at 298 K are assumed to stay constant, whereas both change slightly with temperature. State this assumption when an exam asks for a limitation of the calculation.

### Worked example 3: a reaction feasible only at lower temperatures

C₂H₄(g) + H₂O(g) → C₂H₅OH(g)        ∆H = −46 kJ mol⁻¹

Absolute entropies (J K⁻¹ mol⁻¹): C₂H₄(g) 219; H₂O(g) 189; C₂H₅OH(g) 282.

```
∆S = 282 − (219 + 189) = −126 J K⁻¹ mol⁻¹ = −0.126 kJ K⁻¹ mol⁻¹
T = ∆H / ∆S = −46 / −0.126 = 365 K
```

Check at 298 K: ∆G = −46 − 298 × (−0.126) = −46 + 37.5 = **−8.5 kJ mol⁻¹** (feasible). As temperature rises, the −T∆S term becomes more positive; above 365 K, ∆G is positive. The reaction is feasible **below** 365 K.

## How ∆G varies with temperature: graphs

If ∆H and ∆S are treated as constant, ∆G = ∆H − T∆S is a **straight line** when ∆G is plotted against T:

- **gradient = −∆S**;
- **intercept on the ∆G axis (T = 0) = ∆H**;
- the line crosses **∆G = 0** at the temperature at which the reaction becomes (or stops being) feasible.

A line sloping **down** means ∆S is positive; sloping **up** means ∆S is negative.

### Worked example 4: reading a graph

A straight-line graph of ∆G against T for a reaction passes through ∆G = +40 kJ mol⁻¹ at 300 K and ∆G = −20 kJ mol⁻¹ at 600 K.

```
gradient = (−20 − 40) / (600 − 300) = −60 / 300 = −0.200 kJ K⁻¹ mol⁻¹
∆S = −gradient = +0.200 kJ K⁻¹ mol⁻¹ = +200 J K⁻¹ mol⁻¹
∆H = ∆G + T∆S = 40 + 300 × 0.200 = +100 kJ mol⁻¹
feasible above T = 100 / 0.200 = 500 K
```

**A change of gradient** on such a graph shows that ∆S has changed, usually because a reactant or product has changed state. For example, if a product boils at a temperature within the range, the entropy of the products rises sharply, ∆S becomes more positive, and the line becomes steeper (more negative gradient) above that temperature.

## Feasible does not mean fast

A negative ∆G means a reaction **can** happen; it says nothing about **how fast**. A reaction with a large activation energy may be feasible but immeasurably slow at room temperature. Kinetics (3.1.6) and thermodynamics answer different questions.

## Common mistakes

- Using ∆S in J K⁻¹ mol⁻¹ with ∆H in kJ mol⁻¹. Divide ∆S by 1000 first.
- Using temperature in °C: T must be in kelvin.
- Leaving out an element's entropy, or forgetting coefficients.
- Saying a reaction is "spontaneous" or "fast" when the specification's word is **feasible**.
- Reversing the inequality: feasibility needs ∆G **≤ 0**.
- Giving the feasibility temperature without saying whether the reaction is feasible above or below it.

## Exam technique for the command words

- **Calculate ∆S**: show products minus reactants with coefficients; give the sign and units.
- **Calculate the temperature** at which a reaction becomes feasible: set ∆G = 0, convert units, T = ∆H/∆S, then say "above" or "below".
- **Explain** why an endothermic reaction becomes feasible at high temperature: ∆S is positive, so −T∆S becomes more negative as T rises until it outweighs ∆H.
- **Use a graph**: gradient = −∆S, intercept = ∆H, crossing point = feasibility temperature.

## More on this topic

Condense this with the [3.1.8.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-2-revision-notes/), then try the [3.1.8.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-2-practice/). The enthalpy side of thermodynamics is in [Born–Haber cycles (3.1.8.1)](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-8-1/).

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.1.8 Thermodynamics (International A2), point 3.1.8.2 Gibbs free-energy change, ∆G, and entropy change, ∆S. Published by OxfordAQA.
