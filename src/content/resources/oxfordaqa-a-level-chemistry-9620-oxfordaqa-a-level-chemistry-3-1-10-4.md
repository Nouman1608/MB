---
title: "OxfordAQA A-Level Chemistry (9620): Weak acids and bases; Ka for weak acids"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-acids-and-bases"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-10-4"
description: "OxfordAQA 9620 study guide to 3.1.10.4: what makes an acid weak, writing Ka, pH from Ka and Ka from pH, pKa conversions, dilution and ranking acids."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one point of the OxfordAQA International AS and A-level Chemistry (9620) specification: **3.1.10.4 Weak acids and bases; Ka for weak acids**. The specification states that "weak acids and weak bases dissociate only slightly in aqueous solution", that Ka is the dissociation constant for a weak acid and that pKa = −log₁₀ Ka. You must be able to construct an expression for Ka, perform calculations relating the pH of a weak acid to its concentration and Ka, and convert Ka into pKa and back. This is International A2 content (**International A-level only**), examined in Unit 3, and Unit 5 can draw on it.

For the whole of section 3.1.10 in one place, see the [acids and bases study guide](/resources/oxfordaqa-a-level-chemistry-acids-and-bases/). For this point alone, test recall with the [weak acids and Ka revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4-revision-notes/) and then try the [weak acids and Ka practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4-practice/).

## What "weak" means

Strength describes the **extent of dissociation**, not the amount of acid present. A weak acid sets up an equilibrium that lies well to the left:

```
CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)
```

In a 0.100 mol dm⁻³ solution of ethanoic acid, only about 1 in every 75 molecules has given up its proton at any moment. Most of the acid is still present as un-ionised CH₃COOH.

A weak base behaves the same way: in aqueous ammonia only a small fraction of NH₃ molecules accept a proton from water.

```
NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)
```

The specification asks for a dissociation constant for weak **acids** only. You need to know that weak bases react only slightly, but you will not be asked to calculate with a constant for a base.

### Strong and weak versus concentrated and dilute

These are two separate scales. A 5 mol dm⁻³ solution of ethanoic acid is **concentrated but weak**; a 0.001 mol dm⁻³ solution of hydrochloric acid is **dilute but strong**. Examiners reward answers that keep the two words apart.

## Constructing an expression for Ka

For any weak acid written as HA:

```
HA(aq) ⇌ H⁺(aq) + A⁻(aq)        Ka = [H⁺][A⁻] / [HA]
```

Ka is an equilibrium constant, so it uses **equilibrium** concentrations, has a fixed value at a given temperature and changes only when the temperature changes. With two concentration terms on top and one below, its units are always **mol dm⁻³**.

The "HA" can be a neutral molecule or an ion. Write the expression from the species that actually lose and form:

| Weak acid | Dissociation | Ka expression |
|---|---|---|
| Propanoic acid | CH₃CH₂COOH ⇌ CH₃CH₂COO⁻ + H⁺ | [CH₃CH₂COO⁻][H⁺] / [CH₃CH₂COOH] |
| Hydrocyanic acid | HCN ⇌ CN⁻ + H⁺ | [CN⁻][H⁺] / [HCN] |
| Ammonium ion | NH₄⁺ ⇌ NH₃ + H⁺ | [NH₃][H⁺] / [NH₄⁺] |
| Benzoic acid | C₆H₅COOH ⇌ C₆H₅COO⁻ + H⁺ | [C₆H₅COO⁻][H⁺] / [C₆H₅COOH] |

Water never appears in a Ka expression: these are dilute solutions, so its concentration is effectively constant.

## pKa and the strength scale

```
pKa = −log₁₀ Ka          Ka = 10^(−pKa)
```

pKa turns awkward powers of ten into manageable numbers, just as pH does for [H⁺].

- **Larger Ka → smaller pKa → stronger acid.**
- One unit of pKa is a factor of 10 in Ka.
- Give pKa to two decimal places, like pH, and remember it has no units.

## Linking pH, concentration and Ka

The key calculation rests on two approximations. Learn them by name, because questions often ask you to state them.

1. **[H⁺] = [A⁻].** Each HA that dissociates gives one H⁺ and one A⁻, and the H⁺ from the ionisation of water is negligible by comparison.
2. **[HA] at equilibrium ≈ [HA] at the start.** So little of the acid dissociates that its concentration hardly falls.

Substituting both into the Ka expression:

```
Ka = [H⁺]² / [HA]          so          [H⁺] = √(Ka × [HA])
```

This one rearranged equation lets you find any of the three quantities from the other two.

### Worked example 1: pH from Ka

Propanoic acid has Ka = 1.35 × 10⁻⁵ mol dm⁻³. Calculate the pH of a 0.250 mol dm⁻³ solution and the pKa of the acid.

```
[H⁺]² = 1.35 × 10⁻⁵ × 0.250 = 3.375 × 10⁻⁶
[H⁺]  = 1.84 × 10⁻³ mol dm⁻³
pH    = −log₁₀(1.84 × 10⁻³) = 2.74
pKa   = −log₁₀(1.35 × 10⁻⁵) = 4.87
```

Check the answer makes sense: a strong acid at 0.250 mol dm⁻³ would have pH 0.60, so a weak acid must give a higher value.

### Worked example 2: Ka from pH

A 0.0450 mol dm⁻³ solution of a weak monoprotic acid has pH 3.05. Calculate Ka and pKa, and the percentage of acid molecules dissociated.

```
[H⁺] = 10^(−3.05) = 8.91 × 10⁻⁴ mol dm⁻³
Ka   = (8.91 × 10⁻⁴)² / 0.0450 = 1.77 × 10⁻⁵ mol dm⁻³
pKa  = 4.75
dissociated = 8.91 × 10⁻⁴ / 0.0450 × 100 = 1.98 %
```

The final line justifies approximation 2: under 2 % of the acid has dissociated, so treating [HA] as 0.0450 mol dm⁻³ is sound.

### Worked example 3: the concentration needed for a target pH

Benzoic acid has pKa 4.20. What concentration gives a solution of pH 3.00, and what mass of benzoic acid (Mr = 122.0) is needed for 250 cm³ of it?

```
Ka   = 10^(−4.20) = 6.31 × 10⁻⁵ mol dm⁻³
[H⁺] = 10^(−3.00) = 1.00 × 10⁻³ mol dm⁻³
[HA] = [H⁺]² / Ka = (1.00 × 10⁻³)² / 6.31 × 10⁻⁵ = 0.0158 mol dm⁻³
n    = 0.0158 × 0.250 = 3.96 × 10⁻³ mol
mass = 3.96 × 10⁻³ × 122.0 = 0.483 g
```

## What dilution does to a weak acid

Because [H⁺] depends on the **square root** of the concentration, diluting a weak acid changes its pH less than diluting a strong acid.

### Worked example 4: tenfold dilution

Ethanoic acid has Ka = 1.74 × 10⁻⁵ mol dm⁻³. Compare the pH of 0.100 and 0.0100 mol dm⁻³ solutions.

```
0.100 mol dm⁻³:   [H⁺] = √(1.74 × 10⁻⁶) = 1.32 × 10⁻³    pH = 2.88
0.0100 mol dm⁻³:  [H⁺] = √(1.74 × 10⁻⁷) = 4.17 × 10⁻⁴    pH = 3.38
```

The pH rises by **0.50**, not by 1.00 as it would for hydrochloric acid. Diluting by a factor of ten cuts [H⁺] only by √10. The percentage dissociated rises from 1.3 % to 4.2 %, which is Le Chatelier's principle at work: fewer particles per dm³ favours the side with more particles.

## Comparing two weak acids

At the **same concentration**, the acid with the larger Ka has the higher [H⁺] and so the lower pH. Because pH = ½pKa − ½log₁₀[HA], two acids at equal concentration differ in pH by **half** their difference in pKa.

For 0.0200 mol dm⁻³ solutions, methanoic acid (pKa 3.74) has pH 2.72 and ethanoic acid (pKa 4.76) has pH 3.23. The pKa values differ by 1.02; the pH values differ by 0.51.

## Common mistakes

- Putting [HA] on top of the Ka expression, or including water in it.
- Using √(Ka × [HA]) when the solution also contains a salt of the acid: that is a buffer, and [H⁺] no longer equals [A⁻].
- Rounding [H⁺] before squaring it; carry at least three significant figures through to the end.
- Treating a weak acid as fully dissociated and writing pH = −log₁₀[HA].
- Stating that a lower pKa means a weaker acid.
- Leaving Ka without its unit, mol dm⁻³, when the question asks for units.

## Exam technique

- **"Write an expression for Ka"**: square brackets, the conjugate base and H⁺ on top, the undissociated acid below. No numbers, no water.
- **"Calculate"**: set out [H⁺] as a separate line before the pH. A slip in the final step still earns the earlier method marks.
- **"State the assumptions"** or **"approximations"**: give the two above in words. "Water's ionisation is ignored" alone does not earn both marks.
- **"Explain why ethanoic acid is described as weak"**: say it dissociates (ionises) only slightly in water and that the equilibrium lies to the left.
- **"Deduce which acid is stronger"**: convert all values to Ka or all to pKa first, then compare.

## Frequently asked questions

**Do I need Kb for weak bases in OxfordAQA 9620?**
No. Section 3.1.10.4 says weak bases dissociate only slightly, but the constant and calculations it lists are for weak acids, using Ka and pKa.

**When does the weak-acid approximation fail?**
When a relatively large fraction of the acid dissociates, for example with a very dilute solution or an acid with a large Ka. A quick check is to work out [H⁺] ÷ [HA]: if it is only a few per cent, the approximation is fine.

**Why does Ka have units of mol dm⁻³?**
Its expression has two concentrations multiplied on top and one below, so (mol dm⁻³)² ÷ mol dm⁻³ leaves mol dm⁻³.

## Next steps

Revise the key facts with the [weak acids and Ka revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4-revision-notes/), then test yourself with the [weak acids and Ka practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4-practice/). The next points in the section, [pH curves, titrations and indicators](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5/) and [buffer action](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6/), both build on Ka.
