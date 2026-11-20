---
title: "AQA A-Level Chemistry (7405): Mass spectrometry"
seoTitle: "AQA A-Level Chemistry Mass Spectrometry Study Guide (7405)"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Organic analysis"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "AS"
order: 24.2
syllabusTopics:
  - qualification: "a-level"
    topic: "organic-analysis-7405"
    subtopic: "mass-spectrometry-7405"
description: "AQA 7405 mass spectrometry in depth: the molecular ion, why precise masses identify a molecular formula, worked searches through candidate formulae, and using fragments."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.3.6.2 Mass spectrometry** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content, examined on Paper 2 at AS and A-level, and A-level Paper 3 can test it. The [Organic analysis study guide](/resources/aqa-a-level-chemistry-organic-analysis/) covers all of section 3.3.6. This page goes deeper on the one skill the specification names: using **precise atomic masses and the precise molecular mass** to determine a molecular formula. It also revises how the molecular ion arises, and how fragment peaks help when the molecular formula is not the only clue. Recall is in the [Mass spectrometry revision notes](/resources/aqa-a-level-chemistry-7405-mass-spectrometry-revision-notes/), and questions are in the [Mass spectrometry practice questions](/resources/aqa-a-level-chemistry-7405-mass-spectrometry-practice/). The ideas of isotopes and the instrument itself are in the earlier [Mass number and isotopes study guide](/resources/aqa-a-level-chemistry-7405-mass-number-and-isotopes/).

## What the specification asks

| Content | What you must be able to do |
|---|---|
| Mass spectrometry can be used to determine the molecular formula of a compound | Use precise atomic masses and the precise molecular mass to determine the molecular formula of a compound |

The skills column does not mention fragmentation, but fragment peaks are a common part of structure-solving questions that combine data from several techniques, so they are covered briefly at the end.

## The molecular ion peak

In a mass spectrometer the sample is vaporised and ionised. In electron impact ionisation, a high-energy electron knocks an electron out of the molecule:

```
M(g) + e⁻ → M⁺•(g) + 2e⁻
```

The ion M⁺• is the **molecular ion**. Its mass-to-charge ratio, m/z, equals the relative molecular mass of the compound, because the charge is +1 and the mass of the lost electron is negligible. The peak with the highest m/z is usually the molecular ion peak (the exception is when the molecular ion is so unstable that it is not seen, which is not usually tested at this level).

Low-resolution spectra give m/z as whole numbers. For example, C₃H₆O, C₂H₂O₂ and C₄H₁₀ all have a molecular ion at m/z 58 when rounded. A low-resolution spectrum cannot tell them apart.

## Why precise masses can tell them apart

The relative atomic mass values used in everyday calculations (H = 1.0, C = 12.0, O = 16.0) are averages across isotopes, rounded. The mass of a single atom of one isotope is not a whole number, apart from carbon-12, which defines the scale.

| Isotope | Precise mass (to four decimal places) |
|---|---|
| ¹H | 1.0078 |
| ¹²C | 12.0000 |
| ¹⁴N | 14.0031 |
| ¹⁶O | 15.9949 |

Because hydrogen is a little heavier than 1 and oxygen a little lighter than 16, the total mass of a molecule depends on how many atoms of each kind it has, even when the whole-number masses match. A **high-resolution** mass spectrometer measures m/z to four or more decimal places. The question gives you the precise atomic masses to use. The exam data are always from the list you are given.

## Method: finding the molecular formula

1. Read the **precise m/z** of the molecular ion.
2. Round it to a whole number to find the nominal mass.
3. List the **possible formulae** with that nominal mass using the elements stated in the question.
4. Calculate the precise mass of each candidate using the precise atomic masses given.
5. Choose the formula whose calculated mass matches the measured value.

Match to the number of decimal places given. A small difference in the last digit comes from rounding in the atomic masses, so the best match, not an exact one, is the answer.

## Worked example 1: three candidates at 58

The molecular ion of a compound has m/z 58.0420. The compound contains C, H and possibly O or N. Use the masses above.

| Candidate | Calculation | Precise mass |
|---|---|---|
| C₃H₆O | 3(12.0000) + 6(1.0078) + 15.9949 | 58.0417 |
| C₂H₂O₂ | 2(12.0000) + 2(1.0078) + 2(15.9949) | 58.0054 |
| C₄H₁₀ | 4(12.0000) + 10(1.0078) | 58.0780 |
| C₂H₆N₂ | 2(12.0000) + 6(1.0078) + 2(14.0031) | 58.0530 |

The measured value, 58.0420, is closest to 58.0417. The molecular formula is **C₃H₆O**.

## Worked example 2: an acid or an alcohol?

A compound containing C, H and O has a molecular ion with m/z 60.0210. Three formulae have nominal mass 60.

| Candidate | Precise mass |
|---|---|
| C₃H₈O | 60.0573 |
| C₂H₄O₂ | 60.0210 |
| CH₄N₂O | 60.0323 |

Because only C, H and O are present, CH₄N₂O is excluded straight away. The measured value 60.0210 matches C₂H₄O₂. The molecular formula is **C₂H₄O₂**, which could be ethanoic acid or methyl methanoate. Further tests would be needed to decide which.

## Worked example 3: combining mass spectrometry with a test-tube result

A compound has molecular ion m/z 74.0366. It contains C, H and O only and fizzes when added to sodium carbonate solution. Identify it.

Candidates with nominal mass 74:

- C₄H₁₀O: 4(12.0000) + 10(1.0078) + 15.9949 = **74.0729**
- C₃H₆O₂: 3(12.0000) + 6(1.0078) + 2(15.9949) = **74.0366**

The measured mass matches **C₃H₆O₂**. A compound of this formula that gives effervescence with carbonate is a carboxylic acid: **propanoic acid**, CH₃CH₂COOH. (Methyl ethanoate and ethyl methanoate have the same formula but do not fizz.) This shows how precise mass gives the formula and chemistry gives the structure.

## Worked example 4: excluding nitrogen

A compound has a molecular ion at m/z 59.0733. It contains C, H and N and may also contain O. Candidates with nominal mass 59:

- C₃H₉N: 3(12.0000) + 9(1.0078) + 14.0031 = **59.0733**
- C₂H₅NO: 2(12.0000) + 5(1.0078) + 14.0031 + 15.9949 = **59.0370**

The molecular formula is **C₃H₉N**, an amine.

## Checking your arithmetic

A quick way to avoid slips is to work in two parts. First add the carbon contribution, which is a whole number because carbon-12 is exactly 12. Then add the small "mass defect" from the other atoms.

| Atom | Precise mass | Difference from whole number |
|---|---|---|
| ¹H | 1.0078 | +0.0078 |
| ¹²C | 12.0000 | 0 |
| ¹⁴N | 14.0031 | +0.0031 |
| ¹⁶O | 15.9949 | −0.0051 |

For C₃H₆O: the nominal mass is 58, then 6 × (+0.0078) + 1 × (−0.0051) = +0.0417, giving 58.0417. This is why a formula with more hydrogen sits slightly above the whole number, and one with more oxygen sits slightly below.

## Fragment ions

When the molecular ion has enough energy, it breaks into smaller pieces. Only the **positively charged** fragments reach the detector, so each peak below the molecular ion is the mass of a fragment ion. Neutral fragments (including radicals) are lost without being detected.

```
M⁺• → X⁺ + Y•
```

Common fragment ions and their m/z:

| m/z | Likely fragment |
|---|---|
| 15 | CH₃⁺ |
| 29 | C₂H₅⁺ (or CHO⁺) |
| 43 | C₃H₇⁺ (or CH₃CO⁺) |
| 57 | C₄H₉⁺ |

The difference between the molecular ion and a fragment shows what was lost. A drop of 15 from M means loss of CH₃•. A drop of 17 shows loss of OH•. A drop of 29 shows loss of C₂H₅• (or CHO•). Use these cautiously: say "consistent with" unless the data are unambiguous.

## Worked example 5: a fragment calculation

A compound has a molecular ion peak at m/z 72 and a strong peak at m/z 57. Suggest what was lost.

```
72 − 57 = 15, corresponding to a CH₃• radical lost
```

This fits an alkane skeleton or a compound containing a methyl group. The fragment at 57 could be C₄H₉⁺, for example from 2-methylbutane (C₅H₁₂, Mᵣ 72) losing a methyl radical.

## Common mistakes

- Using whole-number or 1-decimal atomic masses when the question gives precise masses.
- Rounding too early: keep four decimal places until the end.
- Including elements the question has not stated (for example nitrogen), then choosing a wrong formula.
- Treating the tallest peak (the base peak) as the molecular ion. The molecular ion is the peak at the highest m/z for the whole molecule.
- Forgetting that the molecular formula does not give the structure. Name the structure only if further data are given.
- Writing M⁺ without the dot when asked for the molecular ion equation.
- Stating that neutral fragments appear as peaks. They do not.
- Subtracting from the wrong peak when finding the mass lost.

## Exam technique

- **Show the sum for each candidate**: write the numbers so you can earn method marks even if you make an arithmetic slip.
- **State the match**: write which formula agrees with the measured value, and say why the others do not.
- **Connect data**: after the formula, use other information, such as a test-tube result, to choose a structure.
- **Use correct units and notation**: m/z has no units.

## Frequently asked questions

**Why do compounds with the same whole-number mass have different precise masses?**
Each isotope has a mass that is not a whole number. Hydrogen is slightly above 1 and oxygen slightly below 16 on the carbon-12 scale, so the total mass depends on the atoms present.

**Is the molecular ion peak always the tallest?**
No. The tallest peak is the base peak. The molecular ion peak is the one with the highest m/z that corresponds to the whole molecule.

**What is m/z?**
It is the mass-to-charge ratio. For singly charged ions, it equals the mass of the ion on the relative scale.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.3.6.2 Mass spectrometry.
