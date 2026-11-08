---
title: "OCR A Level Chemistry: Amount of Substance — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Foundations in chemistry"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H432"]
syllabusSeries: "Version 3.1 (May 2026), for first assessment in 2017"
syllabusTopics:
  - qualification: "a-level"
    topic: "ocr-a-level-chemistry-foundations-in-chemistry"
    subtopic: "ocr-a-level-chemistry-2-1-3"
description: "Condensed recall notes on the mole, empirical formulae, titrations, gas volumes, yield and atom economy for OCR A Level Chemistry H432."
author: "nouman-ahmed"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29."
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

**Worked example.** A gas occupies 250 cm³ at 100 kPa and 298 K; its mass is 0.44 g. Find its M_r.

```
p = 100 000 Pa    V = 250 x 10^-6 m3    T = 298 K
n = pV/RT = (100 000 x 250x10^-6) / (8.31 x 298) = 1.01x10^-2 mol
M_r = mass / n = 0.44 / 1.01x10^-2 = 43.6 -> 44 (likely CO2)
```

Converting cm³ to m³ and kPa to Pa **before** substituting is what makes this answer come out right rather than a factor of a thousand or more out.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--01-mole-hub.webp" width="900" height="1050" alt="A hub with the amount in moles (0.50 mol of CO2) in the centre and four double-headed arrows to mass (22.0 g), particles (3.01 x 10^23), gas volume (12.0 dm3) and solution concentration times volume. Each box shows the formula linking it to moles. The gas-volume route is tagged OCR and Edexcel." loading="lazy">
  <figcaption>The mole is the bridge between mass, particle number, gas volume and solution quantities.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--04-ideal-gas.webp" width="900" height="925" alt="Three arrows convert pressure, volume and temperature to SI units: 96.0 kPa to 96 000 Pa, 0.750 dm3 to 7.50 x 10^-4 m3 and 18 C to 291 K. Below, n = pV/RT gives 0.0298 mol and a mass of 2.11 g." loading="lazy">
  <figcaption>Convert to Pa, m3 and K before using pV = nRT.</figcaption>
</figure>


## Empirical and molecular formulae

**Method:** divide each mass or percentage by the relative atomic mass, divide all results by the smallest, then scale to whole numbers.

```
molecular formula = empirical formula x (Mr / empirical formula mass)
```

For **hydrated salts**, treat the water as another "element": find the moles of anhydrous salt and the moles of water, then take the simplest ratio to get the value of x in `salt·xH₂O`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--05-empirical-formula.webp" width="900" height="1000" alt="A bar chart of moles per 100 g (C 3.33, H 6.70, O 3.33) leads to the ratio 1:2:1, the empirical formula CH2O (mass 30) and, since Mr is 180 (6 x 30), the molecular formula C6H12O6." loading="lazy">
  <figcaption>Moles from percentages give the ratio, and Mr divided by the empirical mass gives the multiplier.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--06-hydrated-salt.webp" width="900" height="900" alt="A crucible of blue hydrated copper sulfate (2.50 g) is heated and becomes white anhydrous copper sulfate (1.60 g) with 0.90 g of water driven off as steam. Moles of 0.0100 CuSO4 and 0.0500 H2O give a 1:5 ratio, so CuSO4.5H2O." loading="lazy">
  <figcaption>Mass lost on heating gives the moles of water per mole of salt. OCR content.</figcaption>
</figure>


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
atom economy      = (Mr of desired product / sum of Mr of ALL reactants) x 100
```

**These measure different things, and the distinction is examined directly.** Yield measures how much of the theoretical maximum was actually obtained; atom economy measures what proportion of the reactant mass ends up in the wanted product. A reaction can have 100% yield and terrible atom economy if it necessarily produces large by-products.

**Yield is never 100%** because of reversible reactions, side reactions, losses in transfer and purification, and incomplete reaction.

**High atom economy matters industrially** because it means less waste to dispose of, lower raw-material cost, and better sustainability — an addition reaction has 100% atom economy by definition, which is why addition routes are preferred where available.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--02-relative-atomic-mass.webp" width="900" height="960" alt="Two bars show chlorine-35 at 75% and chlorine-37 at 25%. A dashed line marks the weighted mean, 35.5, nearer the taller bar. A carbon-12 atom is shown as the exact standard of 12." loading="lazy">
  <figcaption>Ar is the weighted mean isotope mass on a scale where carbon-12 is exactly 12, so it has no units.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--08-atom-economy-yield.webp" width="900" height="1050" alt="Panel one is a bar of total reactant mass 238.5 where only the 47.9 of titanium is useful, so atom economy is 20.1%. Panel two compares the possible 5.00 g with 4.25 g collected, an 85% yield." loading="lazy">
  <figcaption>Atom economy is fixed by the equation; yield depends on the experiment.</figcaption>
</figure>


## Limiting reagents

The reagent that runs out first determines the maximum product. **Method:** convert both reactants to moles, divide each by its stoichiometric coefficient, and the smaller value identifies the limiting reagent. Base the yield calculation on that one only.

The other reagent is in **excess**, which is often deliberate — to drive a reversible reaction forward or to ensure the expensive reagent is fully consumed.

## Concentration and solutions

```
concentration in mol dm-3  x  M  =  concentration in g dm-3
```

**Dilution:** `c₁V₁ = c₂V₂`. A standard solution is prepared by dissolving a weighed mass, transferring quantitatively with washings, and making up to the mark in a volumetric flask — the washings matter, because solute left in the beaker lowers the true concentration.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-chemistry-relative-mass-and-the-mole--03-solution-to-ions.webp" width="900" height="960" alt="A flask of sodium chloride solution sits above four stacked steps: cm3 to dm3 gives 0.250 dm3, c times V gives 0.050 mol, times the Avogadro constant gives 3.0 x 10^22 formula units, and times 2 gives 6.0 x 10^22 ions." loading="lazy">
  <figcaption>Convert cm3 to dm3, find moles, then particles, then multiply by the ions per formula unit.</figcaption>
</figure>

## Frequently asked questions

**What are concordant titres in OCR A Level Chemistry?**
Concordant titres are results within 0.10 cm³ of each other. Only concordant titres are averaged; the rough titre is not included.

**What is the uncertainty in a burette titre?**
A burette reads to ±0.05 cm³, and each titre needs two readings, so the uncertainty in a titre is ±0.10 cm³. Larger titres, around 25 cm³, have a lower percentage uncertainty.

**Why is high atom economy important in industry?**
A high atom economy means less waste to dispose of and lower raw-material costs.

**When should you round in a multi-step mole calculation?**
Round only at the end, and give the answer to the same number of significant figures as the least precise data.
