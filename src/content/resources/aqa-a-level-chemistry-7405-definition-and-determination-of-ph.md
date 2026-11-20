---
title: "AQA A-Level Chemistry (7405): Definition and determination of pH"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "acids-and-bases-7405"
    subtopic: "definition-and-determination-of-ph-7405"
description: "AQA 7405 pH in depth: the logarithmic scale, converting between [H+] and pH, strong acid calculations, dilution and mixing, significant figures and common errors."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.12.2 Definition and determination of pH** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is A-level only content, examined on Paper 1 and Paper 3. The [Acids and bases study guide](/resources/aqa-a-level-chemistry-acids-and-bases/) introduces pH alongside the rest of the topic. This page works through the pH definition and the calculation skills in the specification, with dilution and mixing problems that exams use. Recall is in the [Acids and bases revision notes](/resources/aqa-a-level-chemistry-acids-and-bases-revision-notes/), and questions are in the [Definition and determination of pH practice questions](/resources/aqa-a-level-chemistry-7405-definition-and-determination-of-ph-practice/).

## What the specification asks

| Content | What you must be able to do |
|---|---|
| The concentration of hydrogen ions covers a very wide range, so a logarithmic scale is used | Explain why pH is used |
| pH = –log₁₀[H⁺] | Recall and apply the definition |
| | Convert [H⁺] into pH and vice versa |
| | Calculate the pH of a strong acid from its concentration |

The mathematical skills in the specification are logarithms (MS 0.4) and using an appropriate number of decimal places. You need a calculator with log and 10ˣ keys.

## Why a logarithmic scale

The hydrogen ion concentration in laboratory solutions ranges from about 1 mol dm⁻³ down to 10⁻¹⁴ mol dm⁻³, a factor of a hundred million million. Numbers like 0.000 000 316 mol dm⁻³ are hard to compare and write. A logarithmic scale compresses this range into a few simple numbers. Each step of one pH unit is a tenfold change in [H⁺].

```
pH = –log₁₀[H⁺]        [H⁺] = 10^(–pH)
```

[H⁺] is the concentration of hydrogen ions in mol dm⁻³. It means the concentration of H⁺(aq), also written H₃O⁺(aq). pH has no units.

Key points about the scale:

- Lower pH means higher [H⁺] and a more acidic solution.
- A solution with pH 2 has ten times the [H⁺] of a solution with pH 3.
- A solution with [H⁺] = 1 mol dm⁻³ has pH 0. Very concentrated acids can have a negative pH.
- At 298 K, neutral water has [H⁺] = 1.00 × 10⁻⁷ mol dm⁻³ and pH 7.00.

## Converting concentration to pH

### Worked example 1

Calculate the pH of a solution with [H⁺] = 0.0250 mol dm⁻³.

```
pH = –log₁₀(0.0250) = 1.602 → 1.60
```

Give pH to two decimal places unless the question states otherwise.

### Worked example 2

A solution has [H⁺] = 2.5 × 10⁻⁴ mol dm⁻³.

```
pH = –log₁₀(2.5 × 10⁻⁴) = 3.60
```

Enter standard form carefully into the calculator. Use the ×10ˣ or EXP key, not ×10 then ^.

## Converting pH to concentration

### Worked example 3

A solution of pH 3.47. Find [H⁺].

```
[H⁺] = 10^(–3.47) = 3.39 × 10⁻⁴ mol dm⁻³
```

The number of significant figures in [H⁺] should match the number of decimal places in the pH. A pH with two decimal places gives [H⁺] to two or three significant figures.

## The pH of a strong acid

A strong acid dissociates almost completely. For a **monoprotic** strong acid such as HCl or HNO₃, [H⁺] equals the acid concentration.

```
HCl → H⁺ + Cl⁻         [H⁺] = [HCl]
```

### Worked example 4

Calculate the pH of 0.050 mol dm⁻³ nitric acid.

```
[H⁺] = 0.050 mol dm⁻³
pH = –log₁₀(0.050) = 1.30
```

### Worked example 5: a diprotic strong acid

Calculate the pH of 0.0300 mol dm⁻³ sulfuric acid, assuming that both protons dissociate completely.

```
H₂SO₄ → 2H⁺ + SO₄²⁻
[H⁺] = 2 × 0.0300 = 0.0600 mol dm⁻³
pH = –log₁₀(0.0600) = 1.22
```

The assumption must be given in the question. In reality the second dissociation is not complete.

## Dilution

Dilution lowers [H⁺] and raises pH. Use c₁V₁ = c₂V₂, or amount in moles, which does not change on dilution.

### Worked example 6

25.0 cm³ of 0.200 mol dm⁻³ hydrochloric acid is diluted with water to a total volume of 500 cm³. Calculate the new pH.

```
n(H⁺) = 0.200 × 0.0250 = 5.00 × 10⁻³ mol
[H⁺] = 5.00 × 10⁻³ ÷ 0.500 = 0.0100 mol dm⁻³
pH = 2.00
```

The solution has been diluted twenty times, and the pH rose from 0.70 to 2.00. Be careful: a tenfold dilution of a strong acid raises the pH by exactly 1, but a twentyfold dilution does not raise it by 2. The change is log₁₀(20) = 1.30.

## Mixing solutions of acid

When two acid solutions are mixed, add the moles of H⁺ and divide by the total volume.

### Worked example 7

40.0 cm³ of 0.100 mol dm⁻³ HCl is mixed with 60.0 cm³ of 0.0500 mol dm⁻³ HNO₃.

```
n(H⁺) = (0.100 × 0.0400) + (0.0500 × 0.0600) = 4.00 × 10⁻³ + 3.00 × 10⁻³ = 7.00 × 10⁻³ mol
total volume = 100 cm³ = 0.100 dm³
[H⁺] = 7.00 × 10⁻³ ÷ 0.100 = 0.0700 mol dm⁻³
pH = 1.15
```

Never average the two pH values. pH is logarithmic, so averages of pH do not give the pH of a mixture.

## Excess acid after partial neutralisation

When a strong acid is partly neutralised by a strong base, work out the amount of H⁺ left over, then divide by the new total volume.

### Worked example 8

25.0 cm³ of 0.100 mol dm⁻³ HCl is mixed with 10.0 cm³ of 0.100 mol dm⁻³ NaOH.

```
n(HCl) = 0.100 × 0.0250 = 2.50 × 10⁻³ mol
n(NaOH) = 0.100 × 0.0100 = 1.00 × 10⁻³ mol
H⁺ left = 2.50 × 10⁻³ – 1.00 × 10⁻³ = 1.50 × 10⁻³ mol
total volume = 35.0 cm³ = 0.0350 dm³
[H⁺] = 1.50 × 10⁻³ ÷ 0.0350 = 0.0429 mol dm⁻³
pH = 1.37
```

The volume used is the total volume of the mixture, not the volume of acid alone.

## Working backwards: from pH to a mass of acid

### Worked example 9

A student needs 250 cm³ of hydrochloric acid with pH 1.40. What mass of HCl (Mᵣ = 36.5) is needed?

```
[H⁺] = 10^(–1.40) = 0.0398 mol dm⁻³
n(HCl) = 0.0398 × 0.250 = 9.95 × 10⁻³ mol
mass = 9.95 × 10⁻³ × 36.5 = 0.363 g
```

## Determining pH in the laboratory

A pH meter with a glass electrode measures pH directly. Calibrate it with buffer solutions of known pH (often pH 4, 7 and 10) before use, rinse the electrode between solutions, and read the value when it is steady. Universal indicator gives a rough value only, since it is judged by eye.

## Decimal places and sense checks

pH is a logarithm, so the digits after the decimal point carry the information about the concentration. Write pH to two decimal places in calculations, and keep at least three significant figures in intermediate working so that rounding does not move the second decimal place.

Use these checks before you move on.

- A strong acid of concentration 0.01 to 1 mol dm⁻³ should have a pH between 0 and 2.
- If your pH is negative for a dilute acid, you have probably dropped a minus sign or entered the exponent wrongly.
- Doubling [H⁺] lowers the pH by about 0.30, because log₁₀2 = 0.30.
- Halving [H⁺] raises the pH by about 0.30.

## Common mistakes

- Forgetting the minus sign: pH = –log[H⁺], not log[H⁺].
- Using ln instead of log₁₀.
- Taking [H⁺] equal to the acid concentration for a diprotic acid without doubling it when told to assume full dissociation.
- Averaging pH values when solutions are mixed.
- Using the volume of acid alone, not the total volume, after mixing.
- Giving [H⁺] to one significant figure when the pH has two decimal places.
- Writing pH 1.6 when the data supports 1.60. Keep two decimal places.
- Applying "pH 7 is neutral" without checking the temperature. That depends on Kw, which is covered in the [ionic product of water study guide](/resources/aqa-a-level-chemistry-7405-the-ionic-product-of-water-kw/).

## Exam technique for the command words

- **Calculate**: write the substitution, then the answer to two decimal places.
- **Explain why pH is used**: say that [H⁺] covers a very wide range and the logarithmic scale makes it manageable.
- **Deduce the change in pH**: use the ratio of concentrations, not an average of pH.

## Frequently asked questions

**Can pH be negative?**
Yes. A strong acid at concentration above 1 mol dm⁻³ has [H⁺] greater than 1 and a negative logarithm. In practice, concentrated acids are not fully dissociated, so the true value depends on the activity of the ions, but A-level questions treat them as fully dissociated.

**If the pH changes from 3 to 5, how much has [H⁺] changed?**
It has fallen by a factor of 10² = 100.

**Why use log₁₀ and not natural log?**
The definition of pH is based on powers of ten, so each unit of pH is one order of magnitude of [H⁺].

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.12.2 Definition and determination of pH.
