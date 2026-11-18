---
title: "Cambridge A Level Chemistry (9701): Mass spectrometry"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 22.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-analytical-techniques"
    subtopic: "as-mass-spectrometry"
description: "Ar from isotope peaks, molecular and fragment ions, carbon counting with the [M+1]+ peak and Cl and Br [M+2]+ patterns, for Cambridge 9701 AS Chemistry."
author: "marlbridge-academic-team"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **22.2, Mass spectrometry**, from Topic 22, Analytical techniques, of Cambridge
International AS & A Level Chemistry 9701, 2025–2027 series. It is AS Level content. The
[Analytical Techniques: IR and Mass Spectrometry study guide](/resources/as-analytical-techniques-ir-and-mass-spectrometry/)
introduces each outcome with one example; this page adds isotope calculations where the abundances do not
total 100, fragmentation that separates positional isomers, a full use of the [M+1]⁺ formula, and the
peak patterns for molecules with two halogen atoms.

## What the syllabus asks for

Candidates should be able to:

1. analyse mass spectra in terms of **m/e values and isotopic abundances** (the working of the mass
   spectrometer is not required)
2. calculate the **relative atomic mass** of an element from the relative abundances of its isotopes, or
   from its mass spectrum
3. deduce the **molecular mass** of an organic molecule from the **molecular ion peak**
4. suggest the identity of molecules formed by **simple fragmentation**
5. deduce the **number of carbon atoms**, n, using the **[M+1]⁺** peak and
   n = (100 × abundance of [M+1]⁺ ion) / (1.1 × abundance of M⁺ ion)
6. deduce the presence of **bromine and chlorine** atoms using the **[M+2]⁺** peak

## Reading the axes

The horizontal axis is **m/e**, the mass-to-charge ratio. At this level the ions detected carry a single
positive charge, so m/e equals the mass of the ion. The vertical axis is **relative abundance** (or relative
intensity), sometimes scaled so that the tallest peak is 100.

## Relative atomic mass from isotopes

Ar is the weighted mean mass of the isotopes:

Ar = Σ(isotope mass × abundance) / Σ(abundances)

Dividing by the **sum of the abundances** matters when they do not add up to 100.

**Worked example 1.** Magnesium gives peaks at m/e 24 (abundance 79.0), 25 (10.0) and 26 (11.0).

Ar = (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = (1896 + 250 + 286) / 100 = 2432 / 100 = **24.3**

**Worked example 2.** Silver gives peaks at m/e 107 (relative height 13.0) and 109 (relative height 12.1).

Ar = (107 × 13.0 + 109 × 12.1) / (13.0 + 12.1) = (1391 + 1318.9) / 25.1 = 2709.9 / 25.1 = **108.0**

The reverse problem also appears: if chlorine has Ar 35.5 and isotopes 35 and 37, let the percentage of ³⁵Cl
be x. Then 35x + 37(100 − x) = 3550, so 3700 − 2x = 3550 and x = 75. Chlorine is about **75% ³⁵Cl and
25% ³⁷Cl**, a 3 : 1 ratio, which is the origin of the chlorine [M+2]⁺ pattern below.

## The molecular ion

In the spectrometer a molecule loses one electron to form the **molecular ion**, M⁺. Its peak is at the
highest m/e value (apart from small isotope peaks at M+1 and M+2), and its m/e value equals the **Mr** of
the compound. For butanone, CH₃COCH₂CH₃, M⁺ is at m/e = 72.

## Fragmentation

The molecular ion can break into a **fragment ion** (positive, detected) and a **radical** (uncharged, not
detected):

    [CH₃COCH₂CH₃]⁺ → CH₃CO⁺ + •CH₂CH₃      (fragment at m/e 43)
    [CH₃COCH₂CH₃]⁺ → CH₃CH₂CO⁺ + •CH₃      (fragment at m/e 57)

Common fragment ions and the losses that produce them:

| m/e | Fragment ion | Difference from M⁺ often seen |
|---|---|---|
| 15 | CH₃⁺ | M − 15: loss of CH₃ |
| 29 | C₂H₅⁺ (or CHO⁺) | M − 29: loss of C₂H₅ or CHO |
| 31 | CH₂OH⁺ | M − 31: loss of CH₂OH |
| 43 | CH₃CO⁺ or C₃H₇⁺ | M − 43 |
| 45 | COOH⁺ | M − 45: loss of COOH |
| 57 | C₂H₅CO⁺ or C₄H₉⁺ | M − 57 |

Always write fragment ions **with a positive charge**; a fragment without a charge would not be detected.

**Worked example 3: telling positional isomers apart.** Pentan-2-one, CH₃COCH₂CH₂CH₃, and pentan-3-one,
CH₃CH₂COCH₂CH₃, both have M⁺ at m/e = 86. One spectrum has a large peak at m/e 57 and one at 29; the other
has large peaks at m/e 43 and 71. Which is which?

Breaking either C–C bond next to the C=O in pentan-3-one gives the same pieces: C₂H₅CO⁺ (57) and C₂H₅⁺
(29). Pentan-2-one gives CH₃CO⁺ (43) or C₃H₇CO⁺ (71). So the **57/29** spectrum is **pentan-3-one** and the
**43/71** spectrum is **pentan-2-one**. Infrared spectroscopy could not separate these two ketones.

## Counting carbons with the [M+1]⁺ peak

About 1.1% of carbon atoms are ¹³C, so a molecule with more carbons has a larger chance of containing one
¹³C atom. That gives a small peak one unit above M⁺.

**Worked example 4.** A compound has M⁺ at m/e = 84 with relative abundance 23.6 and an [M+1]⁺ peak with
relative abundance 1.56. Deduce the number of carbon atoms and suggest a molecular formula.

n = (100 × 1.56) / (1.1 × 23.6) = 156 / 25.96 = 6.0, so **6 carbon atoms**

Six carbons account for 72 of the 84 mass units, leaving 12, which must be hydrogen for a hydrocarbon:
**C₆H₁₂** (for example a hexene or cyclohexane).

Round n to the nearest whole number; examiners choose data that give a value close to an integer.

## Chlorine and bromine: the [M+2]⁺ peak

| Halogen atoms in molecule | Peaks | Ratio of heights |
|---|---|---|
| one Cl | M, M+2 | 3 : 1 |
| one Br | M, M+2 | 1 : 1 |
| two Cl | M, M+2, M+4 | 9 : 6 : 1 |
| two Br | M, M+2, M+4 | 1 : 2 : 1 |

The ratios come from the isotope abundances: ³⁵Cl : ³⁷Cl ≈ 3 : 1 and ⁷⁹Br : ⁸¹Br ≈ 1 : 1. For two chlorine
atoms, the chances are (3/4)² for two ³⁵Cl, 2 × (3/4)(1/4) for one of each, and (1/4)² for two ³⁷Cl, giving
9/16 : 6/16 : 1/16.

For example, chloroethane, C₂H₅Cl, shows M⁺ at m/e 64 and [M+2]⁺ at 66 in a 3 : 1 ratio; bromomethane,
CH₃Br, shows peaks at 94 and 96 in a 1 : 1 ratio.

## Common mistakes

- **Dividing by 100 when the abundances do not total 100.** Divide by their sum.
- **Taking the tallest peak as M⁺.** The molecular ion is at the highest m/e (ignoring M+1 and M+2), and is
  often small.
- **Writing fragments without a + charge**, or giving the radical as the detected species.
- **Using the [M+1]⁺ formula upside down.** The [M+1]⁺ abundance goes on top, multiplied by 100.
- **Reading a 1 : 1 pair as two chlorines.** One bromine gives 1 : 1; one chlorine gives 3 : 1.

## Exam technique for the command words

- **Calculate** Ar: show the weighted sum and the divisor; give the answer to the precision the data allow.
- **Deduce** Mr: quote the m/e of M⁺.
- **Suggest** a fragment: give its formula with a positive charge and its m/e.
- **Deduce** the number of carbons: substitute into the formula and round.
- **Deduce** halogens: state the M : M+2 ratio and what it shows.

## Next steps

- Condensed recall and self-test: [Mass spectrometry revision notes](/resources/cambridge-a-level-chemistry-9701-as-mass-spectrometry-revision-notes/)
- Exam-style questions with full answers: [Mass spectrometry practice questions](/resources/cambridge-a-level-chemistry-9701-as-mass-spectrometry-practice/)
- The other AS technique: [Infrared spectroscopy study guide](/resources/cambridge-a-level-chemistry-9701-as-infrared-spectroscopy/)

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. Always check
the current syllabus for your examination year.
