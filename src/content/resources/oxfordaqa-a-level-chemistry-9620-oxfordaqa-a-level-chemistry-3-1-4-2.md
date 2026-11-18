---
title: "OxfordAQA A-Level Chemistry (9620): Calorimetry"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Energetics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-2"
description: "OxfordAQA 9620 guide to 3.1.4.2: q = mcΔT, molar enthalpy changes from experiments, extrapolated temperature change, errors and required practical 2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.1.4.2 Calorimetry** from the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International AS content, examined in Unit 1, and practical skills from it can be tested in Unit 5. The specification gives the equation **q = mcΔT**, where m is the mass of the substance that has a temperature change ΔT and a specific heat capacity c. You must use it to **calculate the molar enthalpy change for a reaction** and in **related calculations**. You will **not** be expected to recall the value of c. The subtopic includes **required practical 2: measure an enthalpy change**.

The [energetics overview](/resources/oxfordaqa-a-level-chemistry-energetics/) shows a magnesium and acid example. This page sets out a general method, then works through a displacement reaction with a cooling correction, a combustion experiment, an endothermic dissolving and a reverse calculation. Afterwards use the [calorimetry revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-2-revision-notes/) and the [calorimetry practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-2-practice/). The sign conventions come from [enthalpy change](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-1/).

## The equation and its units

| Symbol | Quantity | Unit |
|---|---|---|
| q | Heat energy transferred | J |
| m | Mass of the substance whose temperature changes (usually water or the solution) | g |
| c | Specific heat capacity of that substance (for water, 4.18 J g⁻¹ K⁻¹ when given) | J g⁻¹ K⁻¹ |
| ΔT | Temperature change | K |

A temperature **change** in K is the same number as in °C, so a rise from 19.5 °C to 27.0 °C is ΔT = 7.5 K.

**The m is not the mass of the reactant.** It is the mass of whatever is heated or cooled: the water in a calorimeter, or the solution in a cup. For a dilute aqueous solution, assume a density of 1.00 g cm⁻³, so 50.0 cm³ has a mass of 50.0 g.

## From q to a molar enthalpy change

1. Calculate q = mcΔT in joules.
2. Divide by 1000 to convert to kJ.
3. Find the amount, in moles, of the reactant that is **not in excess** (the limiting reactant), or the amount stated in the question.
4. Divide: q ÷ n gives the heat per mole.
5. Add the **sign**: negative if the temperature rose (exothermic), positive if it fell (endothermic).

## Required practical 2: reactions in solution

**Apparatus.** An expanded polystyrene cup with a lid, standing in a beaker for stability; a thermometer reading to 0.1 °C or a temperature probe; a measuring cylinder or pipette; a stopwatch.

**Method for a reaction with a solid (for example, zinc with copper(II) sulfate).**

1. Measure a known volume of the solution into the cup.
2. Record the temperature every 30 s for 3 minutes to establish a steady starting value.
3. At exactly 3 minutes, add an excess of the powdered solid and stir.
4. Continue recording every 30 s for several more minutes, well after the maximum.
5. Plot temperature against time.

**Why extrapolate?** The reaction does not finish instantly, and the mixture starts losing heat to the surroundings as soon as it warms. The highest reading is therefore lower than the true maximum. Drawing a line of best fit through the **cooling** points and extending it back to the **time of mixing** estimates the temperature that would have been reached with no heat loss. ΔT is the difference between this extrapolated value and the steady starting temperature.

### Worked example 1: displacement with a cooling correction

25.0 cm³ of 0.500 mol dm⁻³ copper(II) sulfate is used with excess zinc powder. The starting temperature is steady at 20.2 °C. Extrapolating the cooling line back to the time of mixing gives 44.8 °C. Take c = 4.18 J g⁻¹ K⁻¹ and the solution's density as 1.00 g cm⁻³.

```
Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)
ΔT = 44.8 − 20.2 = 24.6 K
q = 25.0 × 4.18 × 24.6 = 2571 J = 2.571 kJ
n(CuSO₄) = 0.500 × 25.0 ÷ 1000 = 0.0125 mol     (zinc is in excess)
ΔH = −2.571 ÷ 0.0125 = −206 kJ mol⁻¹
```

The moles come from copper(II) sulfate because zinc is in excess; using the mass of zinc added would give a wrong answer.

## Combustion of a fuel

A spirit burner heats a known mass of water in a copper can. Weigh the burner before and after to find the mass of fuel burned, and record the water's temperature rise.

### Worked example 2: propan-1-ol

Burning 0.600 g of propan-1-ol, C₃H₇OH (Mr 60.0), raises the temperature of 200 g of water by 21.5 K. The data-book value of ΔcH° is −2021 kJ mol⁻¹.

```
q = 200 × 4.18 × 21.5 = 17 974 J = 17.97 kJ
n(propan-1-ol) = 0.600 ÷ 60.0 = 0.0100 mol
ΔcH = −17.97 ÷ 0.0100 = −1797 kJ mol⁻¹, or −1.80 × 10³ kJ mol⁻¹
```

The experimental value is only about 89 % of the data-book value. The main reasons:

- **heat loss** to the air and to the can, rather than to the water;
- **incomplete combustion**, shown by soot on the can, releasing less energy;
- **evaporation** of fuel from the wick, so the mass loss overestimates the fuel burned;
- conditions are not standard (for example, water may form as vapour).

Shielding the flame, using a lid and keeping the flame close to the can reduce heat loss.

## Worked example 3: an endothermic change

4.00 g of ammonium nitrate (Mr 80.0) dissolves in 50.0 g of water. The temperature falls by 5.8 K.

```
q = 50.0 × 4.18 × 5.8 = 1212 J = 1.212 kJ
n = 4.00 ÷ 80.0 = 0.0500 mol
ΔH = +1.212 ÷ 0.0500 = +24.2 kJ mol⁻¹
```

The temperature fell, so heat was taken from the water and ΔH is **positive**. Here m is the mass of water given; a question may instead tell you to use the total mass of the solution, so read the wording.

## Worked example 4: a related calculation

What mass of ethanol (Mr 46.0, ΔcH° = −1367 kJ mol⁻¹) must burn to raise 150 g of water by 30.0 K, assuming no heat loss?

```
q = 150 × 4.18 × 30.0 = 18 810 J = 18.81 kJ
n(ethanol) = 18.81 ÷ 1367 = 0.01376 mol
mass = 0.01376 × 46.0 = 0.633 g
```

## Common mistakes

- Using the mass of the solid or fuel as m.
- Forgetting to convert J to kJ before dividing by moles, giving an answer 1000 times too big.
- Leaving out the sign, or giving an exothermic value as positive.
- Using the moles of a reactant that is in excess.
- Reading ΔT from the highest recorded temperature when the question asks for the extrapolated value.
- Quoting the answer to more significant figures than the least precise measurement justifies.

## Exam technique

- **Calculate**: set out q = mcΔT with numbers, show the moles step and give the final value with sign and units (kJ mol⁻¹).
- **Describe** the practical: include insulation and a lid, the readings before mixing, stirring, and the extrapolation.
- **Explain** why an experimental value differs: name a specific source of error and say which way it moves the result.
- **Suggest** an improvement: link it to the error it reduces.

Next, use the [revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-2-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-2-practice/). Calorimetry results are often combined in a cycle using [Hess's law](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-4-3/).

## Frequently asked questions

**What mass do you use in q = mcΔT?**
Use the mass of the substance that changes temperature, normally the water or the solution, not the mass of the solid or fuel that reacts.

**Do I need to remember the specific heat capacity of water?**
No. The specification states that you will not be expected to recall the value of c; it is given in the question, commonly 4.18 J g⁻¹ K⁻¹.

**Why is the measured enthalpy of combustion less exothermic than the data-book value?**
Heat is lost to the surroundings and the apparatus, combustion may be incomplete, and some fuel can evaporate. Each makes the measured temperature rise per mole smaller.

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards, section 3.1.4.2 Calorimetry (International AS), with required practical 2. Published by OxfordAQA.
