---
title: "AQA A-Level Chemistry (7405): Gibbs free-energy change, ∆G, and entropy change, ∆S"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 8.2
syllabusTopics:
  - qualification: "a-level"
    topic: "thermodynamics-7405"
    subtopic: "gibbs-free-energy-change-g-and-entropy-change-s-7405"
description: "AQA 7405 Gibbs free-energy change and entropy change in depth: entropy and disorder, calculating delta S, using delta G = delta H - T delta S, feasibility temperatures and delta G against T graphs."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.8.2 Gibbs free-energy change, ΔG, and entropy change, ΔS** of the AQA A-level Chemistry specification (7405), for teaching from September 2015. It is A-level only content, examined on Paper 1 (and Paper 3). It is A-level only content. The enthalpy change alone cannot decide whether a reaction will go. Some endothermic reactions happen spontaneously, such as the dissolving of ammonium nitrate. This subtopic adds the entropy change, ΔS, and combines it with ΔH in the Gibbs equation. The calculations are short, but the units are a common trap. The [Thermodynamics study guide](/resources/aqa-a-level-chemistry-thermodynamics/) covers the whole topic. Recall is in the [Gibbs free-energy and entropy revision notes](/resources/aqa-a-level-chemistry-7405-gibbs-free-energy-change-and-entropy-change-revision-notes/), and questions are in the [Gibbs free-energy and entropy practice questions](/resources/aqa-a-level-chemistry-7405-gibbs-free-energy-change-and-entropy-change-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| ΔH, whilst important, is not sufficient to explain feasible change | Give examples of endothermic reactions that occur |
| The concept of increasing disorder (entropy change, ΔS), illustrated by physical and chemical changes | Predict the sign of ΔS |
| The balance between entropy and enthalpy determines feasibility: ΔG = ΔH − TΔS (derivation not required) | Use the equation |
| For a reaction to be feasible, ΔG must be zero or negative | Decide feasibility |
| Calculate entropy changes from absolute entropy values | Use ΔS = ΣS(products) − ΣS(reactants) |
| Use ΔG = ΔH − TΔS to find how ΔG varies with temperature, and the temperature at which a reaction becomes feasible | Rearrange and substitute |
| Determine ΔS and ΔH from a graph of ΔG against T (maths skill) | Read gradient and intercept |

## Entropy

**Entropy, S, is a measure of the disorder of a system**: the number of ways in which the particles and their energy can be arranged. The greater the number of arrangements, the greater the entropy. The units of entropy are **J K⁻¹ mol⁻¹**. Note joules, not kilojoules.

### Which changes increase entropy?

| Change | Entropy change |
|---|---|
| Solid → liquid (melting) | Increase |
| Liquid → gas (boiling) | Large increase |
| Solid → gas (sublimation) | Very large increase |
| Dissolving a solid | Usually an increase |
| Reaction that produces more moles of gas | Increase |
| Fewer, larger molecules from smaller ones | Decrease |
| Heating a substance | Increase (more energy levels are occupied) |

Gases have much higher entropy than liquids and solids because the particles are free to move randomly and are far apart. A **reaction that increases the number of moles of gas has a positive ΔS**. A reaction that reduces the number of moles of gas has a negative ΔS.

### Calculating ΔS

**ΔS = ΣS(products) − ΣS(reactants)**

Absolute entropy values (J K⁻¹ mol⁻¹) are given in questions. Multiply each by the coefficient in the balanced equation.

#### Worked example 1: calcium carbonate

CaCO₃(s) → CaO(s) + CO₂(g). S: CaCO₃ 92.9, CaO 39.7, CO₂ 213.6.

```
ΔS = (39.7 + 213.6) − 92.9 = +160.4 J K⁻¹ mol⁻¹
```

ΔS is positive: a gas is formed from a solid.

#### Worked example 2: ammonia

N₂(g) + 3H₂(g) → 2NH₃(g). S: N₂ 191.6, H₂ 130.6, NH₃ 192.3.

```
ΔS = 2(192.3) − (191.6 + 3 × 130.6)
   = 384.6 − 583.4 = −198.8 J K⁻¹ mol⁻¹
```

ΔS is negative: four moles of gas become two.

## The Gibbs equation

**ΔG = ΔH − TΔS**

- ΔG is the Gibbs free-energy change, in kJ mol⁻¹.
- ΔH is in kJ mol⁻¹.
- T is the temperature in **kelvin**.
- ΔS must be converted from J K⁻¹ mol⁻¹ to **kJ K⁻¹ mol⁻¹** by dividing by 1000.

**A reaction is feasible if ΔG ≤ 0.** If ΔG is positive, the reaction is not feasible at that temperature. "Feasible" means that the reaction can occur; it does not say anything about rate. A feasible reaction may be extremely slow if the activation energy is high.

### Worked example 3: calculating ΔG

For N₂ + 3H₂ → 2NH₃, ΔH = −92 kJ mol⁻¹ and ΔS = −198.8 J K⁻¹ mol⁻¹. Calculate ΔG at 298 K.

```
ΔS = −198.8 ÷ 1000 = −0.1988 kJ K⁻¹ mol⁻¹
ΔG = ΔH − TΔS = −92 − (298 × −0.1988)
   = −92 + 59.2 = −32.8 kJ mol⁻¹
```

ΔG is negative, so the reaction is feasible at 298 K.

### Worked example 4: the temperature at which the reaction becomes feasible

The boundary of feasibility is ΔG = 0, so

```
0 = ΔH − TΔS    so    T = ΔH ÷ ΔS
```

For CaCO₃(s) → CaO(s) + CO₂(g), ΔH = +178 kJ mol⁻¹ and ΔS = +160.4 J K⁻¹ mol⁻¹. Find the minimum temperature for the decomposition.

```
ΔS = 0.1604 kJ K⁻¹ mol⁻¹
T = 178 ÷ 0.1604 = 1110 K  (about 837 °C)
```

Above 1110 K, TΔS is greater than ΔH, so ΔG is negative and the decomposition is feasible. At 298 K, ΔG = 178 − 298 × 0.1604 = +130 kJ mol⁻¹, which is not feasible.

### Worked example 5: a reaction that becomes less feasible

For the ammonia synthesis, ΔH = −92 kJ mol⁻¹ and ΔS = −0.1988 kJ K⁻¹ mol⁻¹.

```
T = ΔH ÷ ΔS = −92 ÷ −0.1988 = 463 K
```

Below 463 K the reaction is feasible. Above it, −TΔS (which is positive) outweighs ΔH, so ΔG becomes positive. This agrees with Le Chatelier's principle: a high temperature disfavours an exothermic reaction.

### Worked example 6: melting ice

H₂O(s) → H₂O(l), ΔH = +6.01 kJ mol⁻¹, ΔS = +22.0 J K⁻¹ mol⁻¹.

```
T = 6.01 ÷ 0.0220 = 273 K
```

Ice melts above 273 K (0 °C): at exactly 273 K, ΔG = 0 and the two states are in equilibrium.

## The four cases

| ΔH | ΔS | ΔG = ΔH − TΔS | Feasibility |
|---|---|---|---|
| Negative (exothermic) | Positive | Always negative | Feasible at all temperatures |
| Positive (endothermic) | Negative | Always positive | Not feasible at any temperature |
| Negative | Negative | Negative at low T | Feasible only at low temperatures |
| Positive | Positive | Negative at high T | Feasible only at high temperatures |

## Graph of ΔG against T

Rearranging, ΔG = −ΔS × T + ΔH. This is the equation of a straight line y = mx + c with:

- **gradient = −ΔS**
- **intercept (at T = 0) = ΔH**
- the line crosses the T-axis at T = ΔH ÷ ΔS, where ΔG = 0.

### Worked example 7: reading a graph

A reaction gives the data: ΔG = +25 kJ mol⁻¹ at 300 K, 0 at 400 K, −25 at 500 K, −50 at 600 K.

```
gradient = (−50 − 25) ÷ (600 − 300) = −75 ÷ 300 = −0.25 kJ K⁻¹ mol⁻¹
ΔS = +0.25 kJ K⁻¹ mol⁻¹ = +250 J K⁻¹ mol⁻¹
intercept: ΔG = ΔH − TΔS, at 300 K: 25 = ΔH − 300 × 0.25, so ΔH = +100 kJ mol⁻¹
```

The line crosses ΔG = 0 at 400 K, which agrees with T = ΔH ÷ ΔS = 100 ÷ 0.25 = 400 K.

## Common mistakes

- Using ΔS in J K⁻¹ mol⁻¹ with ΔH in kJ mol⁻¹, without converting.
- Using a Celsius temperature.
- Forgetting to multiply the entropy values by the coefficients.
- Doing reactants minus products for ΔS.
- Believing ΔG predicts the rate of reaction.
- Saying that a reaction is feasible if ΔG is positive.
- Giving the temperature as a negative number without noticing an error.
- Not giving the units of ΔG and of T.

## Exam technique for the command words

- **Calculate** ΔS: show ΣS(products) − ΣS(reactants) with coefficients.
- **Calculate** ΔG or T: convert ΔS to kJ, write the equation in symbols, then substitute.
- **Explain** why an endothermic reaction can occur: ΔS is positive and TΔS is greater than ΔH at that temperature.
- **State** the condition for feasibility: ΔG is zero or negative.

## Frequently asked questions

**Why is ΔS multiplied by T?**
TΔS is the energy term associated with disorder. A higher temperature makes the entropy contribution bigger.

**Does a negative ΔG mean the reaction will happen quickly?**
No. It means the reaction is feasible. The rate depends on the activation energy.

**Why can the unit of ΔS be a source of marks lost?**
J K⁻¹ mol⁻¹ against kJ mol⁻¹ differ by a factor of 1000, which gives a completely wrong ΔG if not converted.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.8.2 Gibbs free-energy change, ∆G, and entropy change, ∆S.
