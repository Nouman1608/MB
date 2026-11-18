---
title: "OxfordAQA A-Level Chemistry (9620): Infrared spectroscopy"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Organic analysis"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 24.3
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-organic-analysis"
    subtopic: "oxfordaqa-a-level-chemistry-3-3-6-3"
description: "OxfordAQA 9620 subtopic 3.3.6.3 in depth: reading IR spectra with the data booklet, functional groups, fingerprinting, impurities and global warming."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.3.6.3 Infrared spectroscopy**, the final subtopic of section 3.3.6 Organic analysis in the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International AS content, examined in Unit 2 (Organic 1 and Physical 1) and open to the synoptic Unit 5 paper. The [organic analysis study guide](/resources/oxfordaqa-a-level-chemistry-organic-analysis/) introduces it; this page builds a systematic way of reading spectra and applies it to reactions from the AS organic sections.

Condense it with the [infrared spectroscopy revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-6-3-revision-notes/) and test yourself with the [infrared spectroscopy practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-6-3-practice/).

## What the specification asks for

- "Bonds in a molecule absorb infrared radiation at characteristic wavenumbers."
- "'Fingerprinting' allows identification of a molecule by comparison of spectra."
- You should be able to "use infrared spectra and the Chemistry data booklet to identify particular bonds, and therefore functional groups, and also to identify impurities."
- "The link between absorption of infrared radiation by bonds in CO₂, methane and water vapour and global warming."

## Why bonds absorb infrared

Covalent bonds are always vibrating (stretching and bending). Each type of bond vibrates at its own natural frequencies, which depend on the masses of the atoms and the strength of the bond. When infrared radiation of a matching frequency passes through the sample, the bond absorbs it and vibrates with more energy. Because different bonds absorb at different frequencies, the absorptions identify the bonds present.

Spectra use **wavenumber** (in cm⁻¹) rather than frequency; a higher wavenumber means higher-energy radiation.

## Reading the spectrum

An infrared spectrum plots **transmittance (%)** on the vertical axis against **wavenumber (cm⁻¹)** on the horizontal axis. Two conventions catch students out:

- Wavenumber **decreases from left to right**, typically from 4000 to about 500 cm⁻¹.
- An absorption is a **dip** (a trough) downwards from 100 % transmittance, not a peak upwards.

The ranges below are those in the data booklet used for this course. In the exam, always read values from the booklet provided.

| Bond | Wavenumber / cm⁻¹ | What it looks like |
|---|---|---|
| O–H (alcohols) | 3230–3550 | broad |
| N–H (amines) | 3300–3500 | medium |
| C–H | 2850–3300 | present in almost all organic compounds |
| O–H (acids) | 2500–3000 | very broad, overlapping C–H |
| C≡N | 2220–2260 | sharp, in a quiet region |
| C=O | 1680–1750 | strong, sharp |
| C=C | 1620–1680 | medium to weak |
| C–O | 1000–1300 | in the fingerprint region |

## A systematic approach

1. **Look above 3000 cm⁻¹ first.** A broad dip at 3230–3550 suggests alcohol O–H. A very broad dip spreading over 2500–3000 suggests acid O–H.
2. **Check 1680–1750 cm⁻¹.** A strong, sharp dip means C=O.
3. **Check 1620–1680 cm⁻¹** for C=C and **2220–2260 cm⁻¹** for C≡N.
4. **Combine the evidence** to decide the functional group:

| Evidence | Likely functional group |
|---|---|
| broad O–H (3230–3550); no C=O | alcohol |
| C=O; no O–H | aldehyde or ketone (use Fehling's or Tollens' to decide) |
| very broad O–H (2500–3000) and C=O | carboxylic acid |
| C=C; no O–H, no C=O | alkene |
| C≡N | nitrile |

5. **Ignore** the C–H band unless the question asks about it: almost every organic molecule has one.
6. **State absences as evidence.** "No absorption at 3230–3550 cm⁻¹" rules out an alcohol O–H and is often the deciding point in an answer.

## Fingerprinting

Below about **1500 cm⁻¹** the spectrum contains many overlapping absorptions from vibrations of the molecule as a whole. This **fingerprint region** is unique to each compound. Comparing it with a database of reference spectra identifies the compound, even when two candidates have identical functional groups (for example, pentan-2-one and pentan-3-one). The match only identifies the compound if its reference spectrum is in the database being searched.

## Identifying impurities

An impurity shows up as an absorption that the pure product **cannot** produce. The commonest impurities are unreacted starting material and water (broad O–H).

### Worked example 1: monitoring an oxidation

*A student oxidises propan-2-ol to propanone. Describe how the IR spectrum of the product shows (a) that the reaction has happened and (b) whether the product still contains propan-2-ol.*

- **(a)** Propanone contains C=O, so a strong absorption appears at 1680–1750 cm⁻¹. Propan-2-ol has no C=O.
- **(b)** Propanone has no O–H bond. If a broad absorption is still present at 3230–3550 cm⁻¹, unreacted propan-2-ol (or water) remains. Its absence indicates no significant amount of alcohol remains.

### Worked example 2: checking an elimination

*Cyclohexene is made by heating cyclohexanol with concentrated phosphoric acid. The product's IR spectrum shows a medium absorption at 1650 cm⁻¹, C–H absorptions near 3000 cm⁻¹ and a broad absorption at 3350 cm⁻¹. Interpret it.*

- 1650 cm⁻¹ is within 1620–1680: **C=C**, so cyclohexene has formed.
- 3350 cm⁻¹ (broad) is alcohol **O–H**. Cyclohexene has no O–H, so the sample is **impure**: it contains cyclohexanol or water.
- Further distillation (or drying) is needed.

### Worked example 3: confirming a substitution

*1-Bromobutane is heated with potassium cyanide. How would IR show that pentanenitrile has formed?*

A sharp absorption at 2220–2260 cm⁻¹ shows **C≡N**. Neither 1-bromobutane nor the solvent has this bond, so its appearance confirms the nitrile (see [nucleophilic substitution](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-3-1/)).

## Infrared absorption and global warming

The Sun's radiation warms the Earth's surface, which then emits energy as **infrared** radiation. Molecules of **carbon dioxide** (C=O bonds), **methane** (C–H bonds) and **water vapour** (O–H bonds) in the atmosphere absorb some of this infrared, because it matches the vibrations of their bonds. The energy is then re-emitted in all directions, so some returns towards the surface instead of escaping to space. As the atmospheric concentrations of these gases rise, more infrared is absorbed, which contributes to **global warming**.

For full marks, the chain must link: Earth emits IR → **bonds** in the gases absorb it → energy re-emitted, some towards Earth → higher concentrations → more warming.

## Common mistakes

- Describing absorptions as peaks pointing upwards; they are dips in transmittance.
- Reading the wavenumber axis the wrong way.
- Using the C–H band as evidence of a functional group.
- Confusing the alcohol O–H range with the acid O–H range.
- Using C=O alone to decide between an aldehyde and a ketone.
- Saying greenhouse gases "trap heat" without mentioning that **bonds absorb infrared**.
- Concluding that an absent band proves a compound is completely pure; it shows that no significant amount is detected.

## Exam technique for the command words

- **Identify** a bond: quote the wavenumber and the matching range from the data booklet.
- **Deduce** a functional group: combine at least two pieces of evidence (presence and absence of bands).
- **Explain** how IR shows an impurity: name the band, the bond, and why the pure product cannot cause it.
- **Explain** fingerprinting: unique pattern below 1500 cm⁻¹, compared with reference spectra.
- **Explain** the global warming link: IR emitted by Earth, absorbed by named bonds, re-emitted.

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)* specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.3.6 Organic analysis (International AS), subtopic 3.3.6.3 Infrared spectroscopy.
