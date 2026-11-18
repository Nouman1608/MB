---
title: "OxfordAQA A-Level Chemistry (9620): Mass spectrometry"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Organic analysis"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 24.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-organic-analysis"
    subtopic: "oxfordaqa-a-level-chemistry-3-3-6-2"
description: "OxfordAQA 9620 subtopic 3.3.6.2 in depth: using precise atomic masses and the precise molecular mass from a mass spectrum to find a molecular formula."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.3.6.2 Mass spectrometry**, the second subtopic of section 3.3.6 Organic analysis in the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International AS content, examined in Unit 2 (Organic 1 and Physical 1) and open to the synoptic Unit 5 paper. How a time of flight mass spectrometer works is taught in 3.1.1.2 and covered in the [atomic structure guide](/resources/oxfordaqa-a-level-chemistry-atomic-structure/); this subtopic is about one specific use of the result.

Condense it with the [mass spectrometry revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-6-2-revision-notes/) and test yourself with the [mass spectrometry practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-6-2-practice/). The whole of section 3.3.6 is in the [organic analysis study guide](/resources/oxfordaqa-a-level-chemistry-organic-analysis/).

## What the specification asks for

- "Mass spectrometry can be used to determine the molecular formula of a compound."
- You should be able to "use precise atomic masses and the precise molecular mass to determine the molecular formula of a compound."

That is the full scope at AS. Fragmentation patterns are not part of this subtopic, so an answer about fragments will not earn credit here.

## The problem precise masses solve

Many different molecular formulae have the same **whole-number** relative molecular mass. All of these have Mr = 28 when you use Ar values rounded to whole numbers:

| Formula | Precise molecular mass |
|---|---|
| CO | 27.9949 |
| N₂ | 28.0062 |
| C₂H₄ | 28.0312 |

A low-resolution spectrum cannot tell them apart. A **high-resolution** mass spectrometer measures m/z to four decimal places, and at that precision the three are clearly different.

## Why the precise masses differ

Relative isotopic masses are measured against carbon-12, which is defined as exactly 12.0000. The other common isotopes are **not** exact whole numbers:

| Isotope | Precise relative mass |
|---|---|
| ¹²C | 12.0000 |
| ¹H | 1.0078 |
| ¹⁴N | 14.0031 |
| ¹⁶O | 15.9949 |

Hydrogen and nitrogen are slightly above their whole numbers; oxygen is slightly below. So a formula with many hydrogen atoms has a precise mass above its nominal value, while one with many oxygen atoms sits lower. That pattern is a useful check on your arithmetic: C₂H₄ (four H) is the heaviest of the three formulae above, and CO (an O, no H) is the lightest.

Use only the precise masses printed in the question or data booklet; values in other sources can differ in the fourth decimal place.

## Reading the molecular ion

For organic analysis, the peak you need is the **molecular ion**, M⁺, formed when the molecule loses one electron. Because the ion has a 1+ charge, its m/z value equals its mass, which is the **precise molecular mass** of the compound. In a spectrum, the molecular ion is normally the peak at the highest m/z (a much smaller peak one unit higher comes from molecules containing a carbon-13 atom).

## Method

1. Identify the candidate formulae. Either they are given, or you list formulae that fit the whole-number Mr and any other evidence.
2. Check every candidate has the same whole-number Mr; any that do not can be eliminated straight away.
3. For each, multiply the number of atoms of each element by its precise mass and add.
4. Keep **four decimal places** at every step. Rounding early can make two candidates look identical.
5. Choose the candidate that matches the measured m/z. Show the totals for the others so the examiner can see why they are rejected.

### Worked example 1: four candidates with Mr 88

*A liquid gives a molecular ion at m/z = 88.0522. Which of C₅H₁₂O, C₄H₈O₂, C₄H₁₂N₂ and C₃H₈N₂O is its molecular formula?*

```
C5H12O   : 5(12.0000) + 12(1.0078) + 15.9949             = 88.0885
C4H8O2   : 4(12.0000) + 8(1.0078)  + 2(15.9949)          = 88.0522
C4H12N2  : 4(12.0000) + 12(1.0078) + 2(14.0031)          = 88.0998
C3H8N2O  : 3(12.0000) + 8(1.0078)  + 2(14.0031) + 15.9949 = 88.0635
```

Only **C₄H₈O₂** matches. Notice that the candidate with the most oxygen and fewest hydrogen atoms has the lowest precise mass, as expected.

### Worked example 2: combining with percentage composition

*Compound P contains, by mass, 54.5 % carbon, 9.1 % hydrogen and 36.4 % oxygen. Its high-resolution mass spectrum shows a molecular ion at m/z = 88.0522. Find the empirical and molecular formulae.*

```
            C              H             O
mass / g    54.5           9.1           36.4
÷ Ar        54.5/12.0      9.1/1.0       36.4/16.0
moles       4.54           9.1           2.275
÷ smallest  2.00           4.00          1.00
empirical formula: C2H4O   (empirical formula mass 44)
```

The whole-number Mr from the spectrum is 88, so the molecular formula is (C₂H₄O)₂ = **C₄H₈O₂**. The precise mass confirms it: 4(12.0000) + 8(1.0078) + 2(15.9949) = 88.0522, which rules out other formulae with Mr 88 such as C₅H₁₂O (88.0885). The percentage-composition method is in the [amount of substance guide](/resources/oxfordaqa-a-level-chemistry-amount-of-substance/).

### Worked example 3: generating your own candidates

*A gas has a molecular ion at m/z = 44.0261. It contains only C, H and O. Find its molecular formula.*

Formulae with whole-number Mr 44 containing only C, H and O include CO₂, C₂H₄O and C₃H₈.

```
CO2   : 12.0000 + 2(15.9949)            = 43.9898
C2H4O : 2(12.0000) + 4(1.0078) + 15.9949 = 44.0261
C3H8  : 3(12.0000) + 8(1.0078)           = 44.0624
```

The formula is **C₂H₄O**. It could be ethanal or epoxyethane; mass spectrometry gives the molecular formula only, and other evidence (test tube reactions or [infrared spectroscopy](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-3-6-3/)) is needed to decide the structure.

## A quick way to check your answer

Before calculating, you can often predict the order of the candidates. Swapping CH₄ for O (same nominal mass, 16) lowers the precise mass by 0.0363; swapping CH₂ for N (14) lowers it by 0.0125 (14.0156 against 14.0031). So among C₅H₁₂O, C₄H₈O₂ and C₃H₄O₃, each extra O in place of CH₄ moves the total down by about 0.036. If your calculated totals do not follow this pattern, check the arithmetic.

## What mass spectrometry does and does not tell you

| It tells you | It does not tell you (in this subtopic) |
|---|---|
| The precise molecular mass | Which functional groups are present |
| The molecular formula, by matching | Which isomer the compound is |
| Whether a sample matches a proposed formula | The structure or arrangement of atoms |

## Common mistakes

- Using rounded Ar values (12, 1, 16) instead of precise masses, so every candidate gives the same answer.
- Rounding intermediate totals to fewer than four decimal places.
- Adding one O instead of two, or miscounting H, in long formulae: write each multiplication out.
- Claiming the spectrum shows the structure; it shows the molecular formula.
- Choosing a formula without showing the totals for the rejected candidates when the question says "show".
- Confusing the molecular ion (highest-m/z main peak) with the tallest peak in the spectrum.

## Exam technique for the command words

- **Show that** or **deduce**: write each calculation in full, to four decimal places, and state the match.
- **Explain** why precise masses are needed: formulae with the same whole-number Mr have different precise masses because isotopic masses (except ¹²C) are not whole numbers.
- **Suggest** a structure: mass spectrometry fixes the formula; use other evidence given to choose between isomers.
- **Identify** the molecular ion: the m/z value equal to the precise molecular mass of a 1+ ion.

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)* specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.3.6 Organic analysis (International AS), subtopic 3.3.6.2 Mass spectrometry.
