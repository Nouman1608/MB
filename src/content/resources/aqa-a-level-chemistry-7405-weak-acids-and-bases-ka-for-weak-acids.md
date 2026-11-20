---
title: "AQA A-Level Chemistry (7405): Weak acids and bases, Ka for weak acids"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 12.4
syllabusTopics:
  - qualification: "a-level"
    topic: "acids-and-bases-7405"
    subtopic: "weak-acids-and-bases-ka-for-weak-acids-7405"
description: "AQA 7405 weak acids in depth: the Ka expression, the two approximations, pH from concentration and Ka, Ka from pH, pKa conversions and percentage dissociation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.12.4 Weak acids and bases Ka for weak acids** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is A-level only content, examined on Paper 1 and Paper 3. The [Acids and bases study guide](/resources/aqa-a-level-chemistry-acids-and-bases/) covers the whole topic. This page concentrates on the Ka calculations: building the expression, the approximations that make the algebra simple, and how to work in both directions between pH and Ka. Recall is in the [Acids and bases revision notes](/resources/aqa-a-level-chemistry-acids-and-bases-revision-notes/), and questions are in the [Weak acids and bases, Ka for weak acids practice questions](/resources/aqa-a-level-chemistry-7405-weak-acids-and-bases-ka-for-weak-acids-practice/). You should be comfortable with the pH definition first.

## What the specification asks

| Content | What you must be able to do |
|---|---|
| Weak acids and weak bases dissociate only slightly in aqueous solution | Explain why a weak acid has a higher pH than a strong acid of the same concentration |
| Ka is the dissociation constant for a weak acid | Construct an expression for Ka |
| pKa = –log₁₀ Ka | Convert Ka into pKa and vice versa |
| | Perform calculations relating the pH of a weak acid to its concentration and Ka |

The specification links this to Required practical 9 (measuring pH during titrations) and the idea that Ka for a weak acid can be found from the pH at half-neutralisation.

## Weak acids and weak bases

A weak acid dissociates only slightly. At any moment only a small fraction of the molecules have donated a proton:

```
CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)
```

Most of the acid is present as undissociated CH₃COOH. A weak base such as ammonia also reacts only slightly with water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. The calculation expected in this subtopic is for weak acids.

A 0.100 mol dm⁻³ solution of hydrochloric acid has pH 1.00. A 0.100 mol dm⁻³ solution of ethanoic acid has pH 2.88. Same concentration, different strength.

## The Ka expression

For a general weak acid HA:

```
HA(aq) ⇌ H⁺(aq) + A⁻(aq)

Ka = [H⁺][A⁻] / [HA]
```

All concentrations are at equilibrium, in mol dm⁻³. The units of Ka are mol dm⁻³ here, because two concentrations are on top and one underneath. Water is the solvent and is left out. A large Ka means a stronger weak acid.

Write Ka expressions from the equation, not from memory of a specific acid:

| Acid | Equilibrium | Ka expression |
|---|---|---|
| Ethanoic | CH₃COOH ⇌ H⁺ + CH₃COO⁻ | [H⁺][CH₃COO⁻] / [CH₃COOH] |
| Methanoic | HCOOH ⇌ H⁺ + HCOO⁻ | [H⁺][HCOO⁻] / [HCOOH] |
| Hydrogen cyanide | HCN ⇌ H⁺ + CN⁻ | [H⁺][CN⁻] / [HCN] |

## pKa

Because Ka values are small and awkward, pKa is used on the same logic as pH:

```
pKa = –log₁₀ Ka        Ka = 10^(–pKa)
```

A lower pKa means a stronger acid. Ethanoic acid has Ka = 1.75 × 10⁻⁵ mol dm⁻³, so pKa = 4.76. Methanoic acid has Ka = 1.78 × 10⁻⁴ mol dm⁻³, so pKa = 3.75, and is the stronger acid. pKa has no units.

## The two approximations

For a pure solution of a weak acid HA of initial concentration c, the only source of H⁺ and A⁻ is the dissociation, so:

1. **[H⁺] = [A⁻].** Water's own ionisation is negligible compared with the acid's. (This is only valid for an acid with nothing else added.)
2. **[HA] at equilibrium ≈ c.** The acid dissociates so slightly that the amount lost is negligible.

Substituting into Ka gives:

```
Ka = [H⁺]² / c      so      [H⁺] = √(Ka × c)
```

Always write down both assumptions in a calculation. Exam mark schemes often reward the statement.

### Worked example 1: pH from concentration and Ka

Calculate the pH of 0.100 mol dm⁻³ ethanoic acid. Ka = 1.75 × 10⁻⁵ mol dm⁻³.

```
[H⁺]² = Ka × c = 1.75 × 10⁻⁵ × 0.100 = 1.75 × 10⁻⁶
[H⁺] = 1.32 × 10⁻³ mol dm⁻³
pH = –log(1.32 × 10⁻³) = 2.88
```

### Worked example 2: another acid

Calculate the pH of 0.0500 mol dm⁻³ methanoic acid. Ka = 1.78 × 10⁻⁴ mol dm⁻³.

```
[H⁺]² = 1.78 × 10⁻⁴ × 0.0500 = 8.90 × 10⁻⁶
[H⁺] = 2.98 × 10⁻³ mol dm⁻³
pH = 2.53
```

### Worked example 3: effect of dilution

Calculate the pH of 0.0100 mol dm⁻³ ethanoic acid.

```
[H⁺]² = 1.75 × 10⁻⁵ × 0.0100 = 1.75 × 10⁻⁷
[H⁺] = 4.18 × 10⁻⁴ mol dm⁻³
pH = 3.38
```

Diluting the acid by 10 raised the pH from 2.88 to 3.38, a change of 0.50, not 1.00 as for a strong acid. Weak acids dissociate more, in proportion, when diluted, so the fall in [H⁺] is less than tenfold.

## Finding Ka from the pH

The method runs backwards: find [H⁺] from the pH, then use [A⁻] = [H⁺] and [HA] ≈ c.

### Worked example 4

A 0.200 mol dm⁻³ solution of a weak acid HA has pH 2.85. Calculate Ka.

```
[H⁺] = 10^(–2.85) = 1.41 × 10⁻³ mol dm⁻³
[A⁻] = [H⁺] = 1.41 × 10⁻³ mol dm⁻³
[HA] ≈ 0.200 mol dm⁻³
Ka = (1.41 × 10⁻³)² ÷ 0.200 = 9.98 × 10⁻⁶ mol dm⁻³
pKa = 5.00
```

### Worked example 5: finding concentration

A solution of ethanoic acid has pH 3.00. What is its concentration? Ka = 1.75 × 10⁻⁵ mol dm⁻³.

```
[H⁺] = 1.00 × 10⁻³ mol dm⁻³
c = [H⁺]² ÷ Ka = (1.00 × 10⁻³)² ÷ 1.75 × 10⁻⁵ = 0.0571 mol dm⁻³
```

## Percentage dissociation

Percentage dissociation = [H⁺] ÷ initial concentration × 100. For worked example 1, this is 1.32 × 10⁻³ ÷ 0.100 × 100 = 1.32%. That is small, which shows the approximation [HA] ≈ c was fair. If the percentage were above about 5%, the approximation would be poor and an exact solution would be required, which is beyond the specification.

## Ka from a half-neutralised acid

When a weak acid is exactly half neutralised by a strong base, [HA] = [A⁻]. Ka = [H⁺][A⁻] / [HA] then simplifies to Ka = [H⁺], so pH = pKa. If the pH at half-neutralisation is 4.19, then Ka = 10^(–4.19) = 6.46 × 10⁻⁵ mol dm⁻³. This is the method used in the practical, and it links to pH curves on a later page.

## Weak bases and comparing strengths

A weak base is only partly protonated by water. Ammonia is the standard example:

```
NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)
```

Most of the ammonia stays as NH₃ molecules, so the solution has a lower [OH⁻], and a lower pH, than a strong base of the same concentration. The specification does not ask for calculations with weak bases, but you should be able to describe them in these terms.

To compare weak acids, compare Ka or pKa, not the pH of solutions of different concentrations. A larger Ka, or a smaller pKa, means a stronger weak acid. Methanoic acid (pKa 3.75) is a stronger acid than ethanoic acid (pKa 4.76), because its equilibrium lies further to the right.

## Common mistakes

- Forgetting to square [H⁺], or taking the square root at the wrong stage.
- Using the concentration as [H⁺], as if the acid were strong.
- Not stating the two assumptions.
- Giving Ka a unit of mol² dm⁻⁶ (that is Kw) rather than mol dm⁻³.
- Writing the Ka expression for an acid with the undissociated acid on top.
- Reporting pKa with a unit.
- Using [H⁺] = Ka when the acid is not at half-neutralisation.
- Calling the weaker acid the one with the larger pKa and then ranking them the wrong way round in an answer.

## Exam technique for the command words

- **State two assumptions**: [H⁺] = [A⁻] (dissociation of water negligible) and [HA]ₑq ≈ initial [HA] (dissociation is slight).
- **Calculate the pH**: write the Ka expression, use the assumptions, solve for [H⁺], then give pH to two decimal places.
- **Explain why the pH of a weak acid is higher than that of a strong acid**: it is only partially dissociated, so [H⁺] is lower.

## Frequently asked questions

**Why can I not use the pH of a strong acid method for a weak acid?**
A weak acid does not release all its hydrogen ions, so [H⁺] is much less than the acid concentration.

**Is a more concentrated weak acid a stronger acid?**
No. Strength depends on Ka. A concentrated solution has more H⁺ than a dilute one but the same Ka.

**Do I need to solve a quadratic?**
Not for the calculations in this specification. The assumptions make the working simple.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.12.4 Weak acids and bases Ka for weak acids.
