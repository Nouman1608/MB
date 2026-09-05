---
title: "AS Chemistry: Infrared and Mass Spectrometry — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 22.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-analytical-techniques"
    subtopic: "as-infrared-spectroscopy"
  - qualification: "a-level"
    topic: "as-analytical-techniques"
    subtopic: "as-mass-spectrometry"
description: "Condensed recall notes on IR absorption, functional group identification, molecular ion, fragmentation and isotope patterns for Cambridge AS & A Level Chemistry 9701."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Infrared and Mass Spectrometry study guide](/resources/as-analytical-techniques-ir-and-mass-spectrometry/).

## Infrared spectroscopy

**Bonds vibrate** — stretching and bending — and absorb infrared radiation at frequencies matching their natural vibration. The frequency depends on **bond strength and the masses of the atoms**, so each bond type absorbs in a characteristic region.

**Key absorptions:**

These exact ranges are printed in the **Data section supplied in the exam** (syllabus 22.1.1 directs you to it), so precise memorisation isn't required — but knowing the shape of the table saves time:

| Bond | Wavenumber (cm⁻¹) | Appearance |
|---|---|---|
| C–O | 1040–1300 | — |
| C=C | 1500–1680 | Weak |
| C=O (amide) | 1640–1690 | Strong |
| C=O (carbonyl/carboxyl) | 1670–1740 | **Strong and sharp** |
| C=O (ester) | 1710–1750 | Strong |
| C≡N | 2200–2250 | Sharp |
| C–H (alkane) | 2850–2950 | — |
| O–H (carboxylic acid) | 2500–3000 | **Very broad** |
| N–H (amine) | 3300–3500 | Medium |
| O–H (hydroxy/alcohol) | 3200–3600 | **Broad** |

**The two peaks that identify most spectra are C=O and O–H**, and their combination distinguishes the functional group:

- **C=O present, O–H absent** → aldehyde, ketone or ester.
- **C=O present, very broad O–H at 2500–3000** → **carboxylic acid**.
- **O–H broad at 3200–3600, no C=O** → **alcohol**.

That decision tree answers the standard "identify the compound" question.

**Background (beyond the 9701 specification, not examinable at AS):** distinguishing a primary from a secondary amine by counting N–H peaks, and using the fingerprint region (below 1500 cm⁻¹) for identification by database comparison, are both useful analytical chemistry context but go beyond what 19.1 and 22.1 require — 19.1 explicitly states that classifying amines as primary/secondary/tertiary is not tested at AS, and the syllabus only requires recognising the listed characteristic absorptions, not fingerprint-region matching. Don't confuse a nitrile's sharp C≡N absorption at 2200–2250 with a carbonyl's C=O — the wavenumbers are very different even though both are described as "sharp."

**Application:** IR is used in breathalysers and in monitoring exhaust gases, because CO and CO₂ absorb characteristically.

## Relative atomic mass from isotope abundances

A mass spectrum of an element's own isotopes can be used to calculate its **relative atomic mass**, Ar, as a weighted mean:

**Ar = Σ(isotopic mass × % abundance) ÷ 100**

**Worked example.** Chlorine's spectrum shows ³⁵Cl at 75% abundance and ³⁷Cl at 25% abundance. Ar = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = **35.5**. Note this 75 : 25 (i.e. 3 : 1) abundance split is exactly why chlorine's M and M+2 peaks appear in a 3 : 1 ratio in a compound's spectrum.

## Mass spectrometry

**Stages:** ionisation → acceleration → deflection → detection (background only — the syllabus does not require you to know how a mass spectrometer works, only how to interpret the spectra it produces). Ions are separated by **mass-to-charge ratio (m/e — equivalent to the more common m/z notation used elsewhere)**.

**The molecular ion peak (M⁺)** is the peak at the **highest m/e** (ignoring isotope peaks) and gives the **relative molecular mass** directly.

**Fragmentation** produces smaller peaks. Common losses worth recognising:

| Loss | Fragment |
|---|---|
| 15 | CH₃ |
| 17 | OH |
| 29 | CHO or C₂H₅ |
| 31 | CH₂OH or OCH₃ |
| 45 | COOH |

The **base peak** is the tallest peak — the most stable, and therefore most abundant, fragment.

## Isotope patterns

**The M+2 peak is the giveaway for halogens**, and the ratio identifies which:

- **Chlorine** — M and M+2 in a **3 : 1** ratio, from ³⁵Cl and ³⁷Cl.
- **Bromine** — M and M+2 in a **1 : 1** ratio, from ⁷⁹Br and ⁸¹Br.

Seeing two peaks two units apart in roughly equal height means **bromine**; a 3:1 ratio means **chlorine**. This is examined regularly and is quick marks.

**M+1** arises from ¹³C, and its size relative to M indicates the **number of carbon atoms**, since each carbon contributes about 1.1%. As a rough rule, the **number of carbon atoms ≈ (height of M+1 as a % of M) ÷ 1.1** — so an M+1 peak at roughly 3.3% of the height of M suggests a three-carbon compound.

## Exam traps

- Confusing the broad acid O–H (2500–3000) with the alcohol O–H (3230–3550).
- Interpreting individual fingerprint-region peaks instead of comparing spectra.
- Taking an isotope peak as the molecular ion.
- Reversing the chlorine and bromine M+2 ratios.
- Forgetting that IR frequency depends on bond strength and atomic masses.
- Reading the base peak as the molecular ion.

## Self-test

1. What determines the frequency at which a bond absorbs infrared?
2. How do you distinguish an alcohol, a carboxylic acid and a ketone from an IR spectrum?
3. What does the molecular ion peak tell you?
4. What M+2 ratios identify chlorine and bromine?
5. What is the fingerprint region used for?
6. *(Background, beyond AS)* An IR spectrum shows a medium peak with two components at 3300–3500 cm⁻¹. What functional group is present?
7. A compound's mass spectrum shows an M+1 peak at about 6.6% of the height of M. Roughly how many carbon atoms does it contain?

**Answers:** 1. The strength of the bond and the masses of the atoms it joins. 2. A broad O–H at 3200–3600 with no C=O indicates an alcohol; a C=O with a very broad O–H at 2500–3000 indicates a carboxylic acid; a C=O with no O–H indicates an aldehyde or ketone. 3. The relative molecular mass of the compound. 4. Chlorine gives M : M+2 of 3 : 1; bromine gives 1 : 1. 5. Identifying a compound by comparing the whole pattern with a reference database, since it is unique to each substance. 6. An amine (N–H absorption at 3300–3500 cm⁻¹). Distinguishing primary from secondary amines by counting N–H peaks is background context beyond what AS 19.1 requires — 19.1 states that classifying amines this way is not tested at AS. 7. About six carbon atoms (6.6 ÷ 1.1 = 6).
