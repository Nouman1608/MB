---
title: "AQA A-Level Chemistry (7405): The ideal gas equation"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Amount of substance"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "AS"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "amount-of-substance-7405"
    subtopic: "the-ideal-gas-equation-7405"
description: "AQA 7405 ideal gas equation in depth: SI units and sanity checks, rearranging for Mr, gases from reactions, changing conditions and volatile-liquid errors."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide teaches section **3.1.2.3 The ideal gas equation** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content, examined on Paper 1, and it is the A-level way to link a gas volume to an amount in moles. The [Ideal gas equation and empirical formula study guide](/resources/aqa-a-level-chemistry-ideal-gas-equation-and-empirical-formula/) sets out the unit conversions and a full volatile-liquid practical. This page builds on that: checking whether an answer is sensible, rearranging to find Mᵣ, finding the volume of gas made in a reaction, handling a change of conditions, and evaluating errors in the volatile-liquid experiment. Recall is in the [Ideal gas equation revision notes](/resources/aqa-a-level-chemistry-7405-the-ideal-gas-equation-revision-notes/), and questions are in the [Ideal gas equation practice questions](/resources/aqa-a-level-chemistry-7405-the-ideal-gas-equation-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| The ideal gas equation pV = nRT with the variables in SI units | Substitute correctly, with every value in SI units |
| Use the equation in calculations | Rearrange to find any unknown quantity |
| You are not expected to recall the gas constant, R | Use the value given in the question |
| Practical opportunity: find the Mᵣ of a volatile liquid | Process and evaluate data from the experiment |

## The equation and its units

```
p V = n R T
p  pressure         Pa  (N m⁻²)
V  volume           m³
n  amount           mol
R  gas constant     8.31 J K⁻¹ mol⁻¹ (given)
T  temperature      K
```

The equation only works with these units. Conversions: kPa × 10³ = Pa; dm³ × 10⁻³ = m³; cm³ × 10⁻⁶ = m³; °C + 273 = K.

### A sanity check worth memorising

One mole of gas at 298 K and 100 kPa occupies:

```
V = 1 × 8.31 × 298 ÷ 100 000 = 0.0248 m³ = 24.8 dm³
```

So a few grams of gas at room conditions should occupy a few dm³. If your answer for a small sample is 10⁻⁹ m³ or 10⁴ m³, a unit has been missed. Use this only as a check: AQA gas calculations use pV = nRT, not a molar gas volume.

## Rearranging

```
p = nRT ÷ V      V = nRT ÷ p      n = pV ÷ RT      T = pV ÷ nR
```

Substituting n = m ÷ Mᵣ gives a form that finds a relative molecular mass directly:

```
pV = (m ÷ Mᵣ) R T     so     Mᵣ = mRT ÷ pV
```

## Worked example 1: pressure in a container

0.500 mol of nitrogen is held in a 12.0 dm³ cylinder at 25 °C. Calculate the pressure in kPa. R = 8.31 J K⁻¹ mol⁻¹.

```
V = 12.0 × 10⁻³ = 0.0120 m³       T = 25 + 273 = 298 K
p = nRT ÷ V = 0.500 × 8.31 × 298 ÷ 0.0120
  = 1.03 × 10⁵ Pa = 103 kPa
```

The question asked for kPa, so the final conversion is part of the answer.

## Worked example 2: gas from a reaction

0.500 g of magnesium carbonate is heated until it decomposes completely: MgCO₃ → MgO + CO₂. Calculate the volume of carbon dioxide, in cm³, at 20 °C and 101 kPa. (Mᵣ MgCO₃ = 84.3)

```
n(MgCO₃) = 0.500 ÷ 84.3 = 5.931 × 10⁻³ mol
n(CO₂)   = 5.931 × 10⁻³ mol        (1 : 1 from the equation)
V = nRT ÷ p = 5.931 × 10⁻³ × 8.31 × 293 ÷ (101 × 10³)
  = 1.43 × 10⁻⁴ m³ = 143 cm³
```

Three conversions happen here: grams to moles, °C to K and kPa to Pa, then m³ back to cm³.

## Worked example 3: identifying a gas from its Mᵣ

0.250 g of a hydrocarbon gas occupies 150 cm³ at 300 K and 98.0 kPa. Which of CH₄ (16.0), C₂H₆ (30.0), C₃H₆ (42.0) and C₄H₁₀ (58.0) is it?

```
Mᵣ = mRT ÷ pV = 0.250 × 8.31 × 300 ÷ (98.0 × 10³ × 1.50 × 10⁻⁴)
   = 623.3 ÷ 14.7 = 42.4
```

The closest value is 42.0, so the gas is C₃H₆. The small difference comes from rounding in the data and from real gases not behaving perfectly ideally.

## Changing conditions

For a fixed amount of gas, n and R are constant, so pV ÷ T is constant:

```
p₁V₁ ÷ T₁ = p₂V₂ ÷ T₂
```

Because the units cancel in a ratio, pressure and volume can stay in kPa and dm³ here, **but temperatures must be in kelvin**.

### Worked example 4

2.00 dm³ of gas at 25 °C and 100 kPa is compressed to 0.500 dm³ and heated to 100 °C. Calculate the new pressure.

```
p₂ = p₁ × (V₁ ÷ V₂) × (T₂ ÷ T₁)
   = 100 × (2.00 ÷ 0.500) × (373 ÷ 298)
   = 501 kPa
```

Check the direction of each factor: a smaller volume raises the pressure, and a higher temperature raises it further.

## Finding the Mᵣ of a volatile liquid: evaluating the method

In this practical a known mass of liquid is injected into a gas syringe in an oven above its boiling point. The vapour volume, temperature and pressure give n, and Mᵣ = mRT ÷ pV. Questions often ask you to evaluate it.

| Problem | Effect on calculated Mᵣ | Reason |
|---|---|---|
| Some liquid does not vaporise | Too high | Measured V is too small for the mass recorded |
| Vapour condenses on cooler parts of the syringe | Too high | Measured V is too small |
| Vapour is cooler than the oven reading used for T | Too high | The T substituted is larger than the true temperature |
| Very small vapour volume | Larger percentage uncertainty | The same reading error is a bigger fraction of V; use a larger mass of liquid |

Each entry follows from the rearranged equation: anything that makes V too small, or T or m too large, makes the calculated Mᵣ too high. Reasoning from Mᵣ = mRT ÷ pV in this way answers most evaluation questions without memorising a list.

**Measuring the mass.** Weigh the small hypodermic syringe containing the liquid, inject the liquid into the gas syringe, then weigh the hypodermic syringe again. The difference is the mass injected.

## Significant figures

R is usually given to three significant figures (8.31), so most answers are quoted to three. If a pressure is given as 98 kPa (two figures), the answer should be given to two.

## Common mistakes

- kPa, dm³, cm³ or °C substituted directly into pV = nRT.
- Dividing cm³ by 1000 and calling it m³ (that gives dm³).
- Celsius temperatures in p₁V₁ ÷ T₁ = p₂V₂ ÷ T₂.
- Rearranging incorrectly, for example V = nR ÷ pT.
- Leaving the final answer in m³ or Pa when the question asked for cm³ or kPa.
- Forgetting the mole ratio from the equation when a gas is made in a reaction.

## Exam technique for the command words

- **Calculate**: convert each quantity on its own line first, then write the rearranged equation in symbols before substituting.
- **Suggest** why a calculated Mᵣ differs from the true value: name one specific error and its direction (too high or too low), with the reason.
- **Explain** a precaution: say what it prevents and how that affects the measurement.

## Frequently asked questions

**Do I need to learn the value of R?**
No. The specification says you will not be expected to recall it, so it is given when needed.

**Can I use 24 dm³ per mole at A-level?**
AQA gas calculations use pV = nRT. A molar volume figure is useful only as a rough check that your answer is the right size.

**When can I leave pressure in kPa?**
Only when you use a ratio such as p₁V₁ ÷ T₁ = p₂V₂ ÷ T₂, where the units cancel. In pV = nRT itself, every quantity must be in SI units.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.2.3 The ideal gas equation.
