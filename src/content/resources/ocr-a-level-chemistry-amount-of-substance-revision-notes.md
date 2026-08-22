---
title: "OCR A Level Chemistry: Amount of Substance — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Foundations in chemistry"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H432"]
syllabusSeries: "First assessment 2017 (current specification version 3.1, May 2026)"
description: "Condensed recall notes on the mole, empirical formulae, titrations, gas volumes, yield and atom economy for OCR A Level Chemistry H432."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Amount of Substance study guide](/resources/ocr-a-level-chemistry-amount-of-substance/).

## Core relationships

```
n = m / M                   mass and molar mass
n = c x V                   V in dm3
n = V / 24                  gas volume in dm3 at RTP
n = N / N_A                 N_A = 6.02 x 10^23 mol^-1
pV = nRT                    R = 8.31 J mol^-1 K^-1, T in KELVIN, p in Pa, V in m3
```

**Unit conversions are where most marks vanish:**

- cm³ → dm³: **divide by 1000**.
- dm³ → m³: **divide by 1000**.
- kPa → Pa: multiply by 1000.
- °C → K: add 273.

For `pV = nRT` everything must be in **SI units**. Using cm³ or °C is the single most common cause of an answer being out by a factor of a thousand.

## Empirical and molecular formulae

**Method:** divide each mass or percentage by the relative atomic mass, divide all results by the smallest, then scale to whole numbers.

```
molecular formula = empirical formula x (Mr / empirical formula mass)
```

For **hydrated salts**, treat the water as another "element": find the moles of anhydrous salt and the moles of water, then take the simplest ratio to get the value of x in `salt·xH₂O`.

## Titrations

```
c1 V1 / n1 = c2 V2 / n2       where n is the stoichiometric coefficient
```

**Method for a calculation:** find the moles of the known solution, use the balanced equation to find the moles of the unknown, then divide by the volume.

**Concordant titres** are results within **0.10 cm³** of each other. **Only concordant titres are averaged** — including a rough titre or an outlier in the mean is a guaranteed lost mark.

**Accuracy points worth stating:**

- A burette reads to ±0.05 cm³, and each titre needs **two** readings, so the uncertainty is **±0.10 cm³ total**.
- Percentage uncertainty falls as the titre volume rises — which is why titres around 25 cm³ are aimed for.
- The rough titration establishes the approximate endpoint so subsequent ones can be added dropwise near it.

## Yield and atom economy

```
percentage yield  = (actual moles / theoretical moles) x 100
atom economy      = (Mr of desired product / sum of Mr of ALL products) x 100
```

**These measure different things, and the distinction is examined directly.** Yield measures how much of the theoretical maximum was actually obtained; atom economy measures what proportion of the reactant mass ends up in the wanted product. A reaction can have 100% yield and terrible atom economy if it necessarily produces large by-products.

**Yield is never 100%** because of reversible reactions, side reactions, losses in transfer and purification, and incomplete reaction.

**High atom economy matters industrially** because it means less waste to dispose of, lower raw-material cost, and better sustainability — an addition reaction has 100% atom economy by definition, which is why addition routes are preferred where available.

## Limiting reagents

The reagent that runs out first determines the maximum product. **Method:** convert both reactants to moles, divide each by its stoichiometric coefficient, and the smaller value identifies the limiting reagent. Base the yield calculation on that one only.

The other reagent is in **excess**, which is often deliberate — to drive a reversible reaction forward or to ensure the expensive reagent is fully consumed.

## Concentration and solutions

```
concentration in mol dm-3  x  M  =  concentration in g dm-3
```

**Serial dilution:** `c₁V₁ = c₂V₂`. A standard solution is prepared by dissolving a weighed mass, transferring quantitatively with washings, and making up to the mark in a volumetric flask — the washings matter, because solute left in the beaker lowers the true concentration.

## Exam traps

- Failing to convert cm³ to dm³.
- Using °C in `pV = nRT`.
- Averaging a rough titre with the concordant ones.
- Confusing percentage yield with atom economy.
- Forgetting to identify the limiting reagent before calculating yield.
- Rounding partway through a multi-step calculation — round only at the end.
- Giving an answer to the wrong number of significant figures; match the least precise data.

## Self-test

1. Give the four expressions for calculating moles.
2. What counts as a concordant titre, and which values are averaged?
3. Why is the burette uncertainty ±0.10 cm³ rather than ±0.05?
4. Distinguish percentage yield from atom economy.
5. How do you identify the limiting reagent?

**Answers:** 1. n = m/M, n = cV, n = V/24 for gases at RTP, and n = N/N_A. 2. Titres within 0.10 cm³ of each other; only concordant titres are averaged, and the rough titre is excluded. 3. Each titre requires an initial and a final reading, and each carries ±0.05 cm³, so the uncertainties combine. 4. Yield compares the product actually obtained with the theoretical maximum; atom economy measures what proportion of the total reactant mass ends up in the desired product. 5. Convert both reactants to moles and divide each by its stoichiometric coefficient; the smaller value is the limiting reagent.
