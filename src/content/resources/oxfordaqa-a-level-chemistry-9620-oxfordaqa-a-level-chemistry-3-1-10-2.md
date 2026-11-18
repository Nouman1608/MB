---
title: "OxfordAQA A-Level Chemistry (9620): Definition and determination of pH"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-acids-and-bases"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-10-2"
description: "OxfordAQA 9620 guide to 3.1.10.2: why pH is logarithmic, converting [H⁺] and pH, strong acid pH from concentration, dilution, mixing and calculator method."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on point **3.1.10.2 Definition and determination of pH** of the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. The specification explains that hydrogen ion concentration "covers a very wide range", so "a logarithmic scale, the pH scale, is used", defines **pH = –log₁₀[H⁺]**, and asks students to "convert concentration of hydrogen ions into pH and vice versa" and "calculate the pH of a solution of a strong acid from its concentration". It is International A2 content (**International A-level only**), assessed in Unit 3.

The [acids and bases study guide](/resources/oxfordaqa-a-level-chemistry-acids-and-bases/) gives the definition with three short examples. This page builds the calculation skills fully: logarithm technique, preparing solutions from masses, dilution and mixing. Condense it with the [3.1.10.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-2-revision-notes/) and practise with the [3.1.10.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-2-practice/).

## Why a logarithmic scale

In aqueous solutions, [H⁺] ranges from more than 1 mol dm⁻³ in concentrated acids to around 10⁻¹⁴ mol dm⁻³ in concentrated alkalis: a factor of about 10¹⁴. Numbers like 0.000 000 000 32 are awkward to compare. Taking −log₁₀ turns each power of ten into one unit:

| [H⁺] / mol dm⁻³ | 1 | 10⁻¹ | 10⁻² | 10⁻⁷ | 10⁻¹² |
|---|---|---|---|---|---|
| pH | 0 | 1 | 2 | 7 | 12 |

Three consequences:

- **Lower pH means higher [H⁺].** The minus sign reverses the order.
- **One pH unit is a factor of 10** in [H⁺]; two units is a factor of 100.
- pH has **no units**.

## Converting between [H⁺] and pH

```
pH = −log₁₀[H⁺]                [H⁺] = 10^(−pH)
```

### Worked example 1: both directions

(a) [H⁺] = 3.6 × 10⁻³ mol dm⁻³

```
pH = −log₁₀(3.6 × 10⁻³) = 2.44
```

(b) pH = 9.25

```
[H⁺] = 10^(−9.25) = 5.62 × 10⁻¹⁰ mol dm⁻³
```

**Calculator technique.** For (a), press the minus key, then log, then enter 3.6 × 10⁻³ using the exponent key (EXP or ×10ˣ), not "× 10 ^ −3" typed separately, which can be misread. For (b), use the 10ˣ function (often SHIFT + log) and enter −9.25.

**Sensible checks.** 3.6 × 10⁻³ lies between 10⁻³ (pH 3) and 10⁻² (pH 2), so the pH must be between 2 and 3. A pH of 9.25 lies between 9 and 10, so [H⁺] must be between 10⁻⁹ and 10⁻¹⁰.

**Precision.** Give pH to **2 decimal places** unless told otherwise.

### Comparing two solutions

Because pH is a logarithm, a **difference** in pH corresponds to a **ratio** of [H⁺]:

```
[H⁺] ratio = 10^(difference in pH)
```

A solution of pH 2.50 compared with one of pH 3.20 has a pH difference of 0.70, so its [H⁺] is 10^0.70 = **5.01 times** greater. A difference of 0.30 corresponds to a factor of about 2, so halving [H⁺] raises the pH by 0.30. This lets you check answers quickly: if diluting an acid to half its concentration changes your pH by anything other than about 0.30, look for an error.

## pH of a strong acid

A strong acid is completely dissociated in water. For a **monoprotic** strong acid (HCl, HNO₃, HBr, HI), each molecule releases one H⁺, so

```
[H⁺] = concentration of the acid
```

### Worked example 2: from concentration

0.0340 mol dm⁻³ HNO₃: [H⁺] = 0.0340 mol dm⁻³, pH = −log₁₀(0.0340) = **1.47**.

### Worked example 3: from a mass

0.365 g of hydrogen chloride (Mr = 36.5) is dissolved in water and made up to 500 cm³.

```
n(HCl) = 0.365 ÷ 36.5 = 0.0100 mol
[HCl] = 0.0100 ÷ 0.500 = 0.0200 mol dm⁻³ = [H⁺]
pH = −log₁₀(0.0200) = 1.70
```

### Worked example 4: concentration needed for a target pH

What concentration of HCl has pH 2.50?

```
[H⁺] = 10^(−2.50) = 3.16 × 10⁻³ mol dm⁻³, so [HCl] = 3.16 × 10⁻³ mol dm⁻³
```

**Diprotic acids.** Sulfuric acid can release two protons per molecule, but the second proton transfer is not complete. Only if a question tells you to assume complete dissociation should you use [H⁺] = 2 × [H₂SO₄]: for example, 0.050 mol dm⁻³ gives [H⁺] = 0.10 mol dm⁻³ and pH 1.00.

## Dilution

Diluting an acid lowers [H⁺], so the pH **rises**. For a strong acid, a **tenfold** dilution raises the pH by exactly **1**.

### Worked example 5

25.0 cm³ of 0.200 mol dm⁻³ HCl (pH 0.70) is diluted to 250 cm³.

```
new [H⁺] = 0.200 × 25.0 / 250 = 0.0200 mol dm⁻³
new pH = 1.70
```

**A limit to remember.** Diluting an acid cannot make it alkaline. Very dilute acids approach pH 7, because the water itself provides about 10⁻⁷ mol dm⁻³ H⁺ at 25 °C. So "10⁻⁸ mol dm⁻³ HCl has pH 8" is wrong: its pH is just below 7.

## Mixing two strong acids

Add the **moles** of H⁺, then divide by the **total** volume.

### Worked example 6

50.0 cm³ of 0.100 mol dm⁻³ HCl is mixed with 50.0 cm³ of 0.0200 mol dm⁻³ HNO₃.

```
n(H⁺) = (0.100 × 0.0500) + (0.0200 × 0.0500) = 5.00 × 10⁻³ + 1.00 × 10⁻³ = 6.00 × 10⁻³ mol
[H⁺] = 6.00 × 10⁻³ ÷ 0.100 = 0.0600 mol dm⁻³
pH = 1.22
```

pH values **cannot be averaged**: the average of 1.00 and 1.70 is 1.35, which is wrong.

## Negative pH

When [H⁺] is greater than 1 mol dm⁻³, the pH is negative. For 2.0 mol dm⁻³ HCl, pH = −log₁₀(2.0) = **−0.30**. This is a correct answer; do not change it.

## Determining pH by measurement

- A **pH meter** gives a numerical reading, usually to 2 decimal places. Calibrate it first with buffer solutions of known pH, rinse the probe with deionised water between solutions and let the reading settle.
- **Universal indicator** gives only an approximate pH from a colour, so it cannot distinguish, for example, pH 2.40 from pH 2.60.

A pH meter is used in [required practical 7](/resources/oxfordaqa-a-level-chemistry-acids-and-bases/) to follow pH during titrations.

## Common mistakes

- Dropping the minus sign, giving a negative pH for a dilute acid.
- Using ln instead of log₁₀.
- Averaging pH values instead of adding moles of H⁺.
- Forgetting the total volume after mixing or diluting.
- Doubling [H⁺] for sulfuric acid without being told to assume complete dissociation.
- Rounding [H⁺] before taking the log, which shifts the second decimal place.

## Exam technique for the command words

- **Define** pH: write pH = −log₁₀[H⁺], stating that [H⁺] is the hydrogen ion concentration in mol dm⁻³.
- **Calculate** pH: show [H⁺] first, then the log step, then pH to 2 decimal places.
- **Explain** why the pH changes on dilution: [H⁺] falls, so −log₁₀[H⁺] rises; tenfold dilution of a strong acid adds 1.
- **Deduce** a concentration: rearrange with 10^(−pH), then use n = cV if a mass or volume is needed.

## Next steps

Condense this with the [3.1.10.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-2-revision-notes/), then try the [3.1.10.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-2-practice/). For alkalis, where [H⁺] must be found from [OH⁻], move on to the [ionic product of water (3.1.10.3)](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-3/).

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.1.10 Acids and bases (International A2), point 3.1.10.2 Definition and determination of pH. Published by OxfordAQA.
