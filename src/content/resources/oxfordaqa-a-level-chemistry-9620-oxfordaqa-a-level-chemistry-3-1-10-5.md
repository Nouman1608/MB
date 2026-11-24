---
title: "OxfordAQA A-Level Chemistry (9620): pH curves, titrations and indicators"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 10.5
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-acids-and-bases"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-10-5"
description: "OxfordAQA 9620 study guide to 3.1.10.5: titration calculations, building pH curves point by point, explaining their shapes and choosing an indicator."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.1.10.5 pH curves, titrations and indicators** from the OxfordAQA International AS and A-level Chemistry (9620) specification. The point covers "titrations of acids with bases" and "typical pH curves for acid–base titrations in all combinations of weak and strong monoprotic acids and bases". You must be able to perform calculations for these titrations based on experimental results, sketch and explain the shapes of typical pH curves, and use pH curves to select an appropriate indicator. Required practical 7 belongs here too. This is International A2 content (**International A-level only**), examined in Unit 3; the practical skills are also tested in Unit 5.

The [acids and bases study guide](/resources/oxfordaqa-a-level-chemistry-acids-and-bases/) gives a summary table of the four curve types. This page shows **where each part of a curve comes from** by calculating it, then uses that to justify indicator choices. Afterwards, use the [pH curves revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5-revision-notes/) and the [pH curves practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5-practice/).

## Titration calculations from experimental results

Every titration calculation follows the same chain: mean titre → moles of the known solution → mole ratio → moles of the unknown → scale up if a portion was taken → concentration or mass.

### Worked example 1: ethanoic acid in vinegar

A 25.0 cm³ sample of vinegar is diluted to 250 cm³ in a volumetric flask. 25.0 cm³ portions are titrated with 0.100 mol dm⁻³ sodium hydroxide using phenolphthalein. Titres: 23.20 cm³ (rough), 22.60, 22.70 and 22.65 cm³. Calculate the concentration of ethanoic acid in the vinegar in mol dm⁻³ and in g dm⁻³ (Mr = 60.0).

```
mean titre       = (22.60 + 22.70 + 22.65) / 3 = 22.65 cm³
n(NaOH)          = 0.100 × 22.65 / 1000 = 2.265 × 10⁻³ mol
n(CH₃COOH)       = 2.265 × 10⁻³ mol in 25.0 cm³ of diluted solution   (1 : 1)
n in 250 cm³     = 2.265 × 10⁻² mol, all from 25.0 cm³ of vinegar
concentration    = 2.265 × 10⁻² / 0.0250 = 0.906 mol dm⁻³
in g dm⁻³        = 0.906 × 60.0 = 54.4 g dm⁻³
```

The rough titre is excluded because it overshoots; the other three agree within 0.10 cm³.

## Building a pH curve point by point

You are not asked to calculate a whole curve, but working through one shows why the curves look as they do. Each region uses a method you already know.

### Strong acid with strong base

25.0 cm³ of 0.100 mol dm⁻³ HCl is titrated with 0.100 mol dm⁻³ NaOH. Before equivalence, find the excess H⁺ and divide by the **total** volume; after it, find the excess OH⁻ and use Kw.

| NaOH added / cm³ | Species in excess | pH |
|---|---|---|
| 0.0 | H⁺ | 1.00 |
| 12.5 | H⁺ | 1.48 |
| 20.0 | H⁺ | 1.95 |
| 24.0 | H⁺ | 2.69 |
| 24.9 | H⁺ | 3.70 |
| 25.0 | neither | 7.00 |
| 25.1 | OH⁻ | 10.30 |
| 26.0 | OH⁻ | 11.29 |
| 30.0 | OH⁻ | 11.96 |

The first 24.9 cm³ moves the pH by under 3 units. The next **0.2 cm³** moves it by 6.6 units. Near equivalence almost no H⁺ is left, so a few drops change [H⁺] by factors of thousands, and the pH scale is logarithmic. That is the vertical section.

### Weak acid with strong base

Repeat with 0.100 mol dm⁻³ ethanoic acid (Ka = 1.74 × 10⁻⁵ mol dm⁻³). Now the region before equivalence is a mixture of CH₃COOH and CH₃COO⁻, so [H⁺] = Ka × n(HA) / n(A⁻).

| NaOH added / cm³ | Method | pH |
|---|---|---|
| 0.0 | weak acid alone: √(Ka × [HA]) | 2.88 |
| 5.0 | HA : A⁻ = 4 : 1 | 4.16 |
| 12.5 | HA : A⁻ = 1 : 1, so pH = pKa | 4.76 |
| 20.0 | HA : A⁻ = 1 : 4 | 5.36 |
| 24.0 | HA : A⁻ = 1 : 24 | 6.14 |
| 26.0 | excess OH⁻ | 11.29 |
| 30.0 | excess OH⁻ | 11.96 |

Three things to notice:

- The **start** is higher (2.88 against 1.00) because the weak acid is only slightly dissociated.
- Between about 5 and 20 cm³ the pH rises slowly: HA and A⁻ together act as a **buffer**.
- **After** equivalence the two tables are identical. Once the acid is used up, the pH is set by excess NaOH, so the strength of the acid no longer matters.

The equivalence pH lies above 7 because the solution then contains only CH₃COO⁻ ions, which accept protons from water and release OH⁻.

## Explaining the four shapes

| Feature | Controlled by | Explanation to give |
|---|---|---|
| Starting pH | strength and concentration of the acid in the flask | weak acid dissociates only slightly, so starts higher |
| Gentle early slope (weak acid) | buffer of HA and A⁻ | ratio of HA to A⁻ changes slowly |
| Equivalence volume | moles of acid and concentration of base | same for strong and weak acids of equal concentration |
| Equivalence pH | the salt formed | A⁻ makes it alkaline; NH₄⁺ makes it acidic |
| Length of vertical section | strength of both reagents, and their concentrations | longest for strong + strong; none for weak + weak |
| Final pH | concentration and strength of the base in excess | a weak base levels off lower than a strong one |

**Changing concentration.** If the same titration uses 0.0100 mol dm⁻³ HCl and NaOH, the pH at 24.9 cm³ is 4.70 and at 25.1 cm³ is 9.30. The curve starts higher, finishes lower and the vertical section shrinks from about pH 3.7–10.3 to 4.7–9.3, but the equivalence volume and the equivalence pH of 7.00 are unchanged.

**Reversing the titration.** With the base in the flask and the acid added from the burette, the curve is reflected: it starts at high pH and falls, with the vertical section in the same pH range.

## Choosing an indicator

An indicator is suitable when **its whole colour-change range lies within the vertical section**, so that it changes completely in one drop at the equivalence point.

Take the ethanoic acid titration above. The equivalence point is at 25.00 cm³.

- **Phenolphthalein (8.3–10.0)** changes within about 0.05 cm³ of the equivalence point, less than one drop. Suitable.
- **Bromothymol blue (6.0–7.6)** starts to change at about 23.6 cm³ and finishes by about 24.96 cm³. The change is spread over more than a cubic centimetre and is complete before equivalence. Unsuitable.
- **Methyl orange (3.1–4.4)** changes within the first 8 cm³ or so, in the buffer region. Badly unsuitable.

For a weak acid against a weak base there is no vertical section, so no indicator gives a sharp end point. Follow the pH with a meter instead.

## Required practical 7 in brief

The specification wording is: "investigate how pH changes when a weak acid reacts with a strong base and when a strong acid reacts with a weak base". In an exam you may be asked to describe the method, read data from your curve, or evaluate it.

- Calibrate the pH meter with buffer solutions of known pH before starting.
- Add small volumes and record the pH after each addition, once the reading is steady; add smaller portions as the pH begins to change faster.
- Read the equivalence volume at the **middle of the vertical section**.
- For the weak acid, read the pH at **half** the equivalence volume: this equals pKa.
- Sources of error to discuss: drift in the meter reading, temperature changes, and too few readings in the steep region.

## Common mistakes

- Dividing excess moles by one solution's volume instead of the total volume.
- Drawing the weak acid curve with an equivalence volume different from the strong acid curve at the same concentration.
- Drawing a weak acid–strong base curve that ends at a lower pH than the strong acid–strong base curve.
- Saying an indicator is suitable because its range "includes the equivalence pH" when part of the range lies outside the vertical section.
- Including the rough titre in the mean.

## Exam technique

- **"Sketch"**: label both axes, mark the equivalence volume on the x-axis, and show the start pH, the shape before equivalence, the vertical section and the final level. Accuracy of every point is not required, but the key features are.
- **"Explain the shape"**: link each feature to a cause, using the table above.
- **"Justify your choice of indicator"**: quote its range and state that the whole range lies within the vertical section of this curve.
- **"Calculate"**: show the mean titre, each mole step and any scaling factor on its own line.

## More on this topic

Condense this with the [pH curves revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5-revision-notes/), then work through the [pH curves practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5-practice/). The buffer region links directly to [buffer action](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6/), and the starting pH to [weak acids and Ka](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4/).
