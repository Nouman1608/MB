---
title: "AQA A-Level Chemistry (7405): The ionic product of water, Kw"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 12.3
syllabusTopics:
  - qualification: "a-level"
    topic: "acids-and-bases-7405"
    subtopic: "the-ionic-product-of-water-kw-7405"
description: "AQA 7405 Kw in depth: deriving Kw from the dissociation of water, calculating the pH of strong bases, the effect of temperature and what neutral means at other temperatures."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.12.3 The ionic product of water, Kw** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is A-level only content, examined on Paper 1 and Paper 3. The [Acids and bases study guide](/resources/aqa-a-level-chemistry-acids-and-bases/) introduces Kw briefly. This page derives it, practises the calculation of pH for strong bases with full steps, and explains why Kw changes with temperature and what that does to the pH of neutral water. Recall is in the [Ionic product of water, Kw revision notes](/resources/aqa-a-level-chemistry-7405-the-ionic-product-of-water-kw-revision-notes/), and questions are in the [Ionic product of water, Kw practice questions](/resources/aqa-a-level-chemistry-7405-the-ionic-product-of-water-kw-practice/). Pre-requisite: the pH definition in the [Definition and determination of pH study guide](/resources/aqa-a-level-chemistry-7405-definition-and-determination-of-ph/).

## What the specification asks

| Content | What you must be able to do |
|---|---|
| Water is slightly dissociated | Write the equilibrium for the dissociation of water |
| Kw is derived from the equilibrium constant for this dissociation | Derive and recall Kw = [H⁺][OH⁻] |
| The value of Kw varies with temperature | Explain the effect of temperature on Kw and pH |
| | Use Kw to calculate the pH of a strong base from its concentration |

The mathematical skills include standard form (MS 2.2), using an appropriate number of decimal places in pH calculations, and using Kw = [H⁺][OH⁻] to find the pH of strong bases.

## Deriving Kw

Water ionises very slightly. One water molecule donates a proton to another:

```
H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)
```

The equilibrium constant for this is:

```
Kc = [H⁺][OH⁻] / [H₂O]
```

Water is in huge excess. In 1 dm³ there are about 55.5 mol of water, and only about 10⁻⁷ mol of that ionises. The concentration of water is therefore effectively constant, so it is combined with Kc into a new constant:

```
Kw = Kc × [H₂O] = [H⁺][OH⁻]
```

**Kw is the ionic product of water.** At 298 K its value is 1.00 × 10⁻¹⁴ mol² dm⁻⁶. The units come from multiplying two concentrations: mol dm⁻³ × mol dm⁻³ = mol² dm⁻⁶.

In pure water, every H⁺ ion formed has a matching OH⁻ ion, so [H⁺] = [OH⁻]. At 298 K:

```
[H⁺]² = 1.00 × 10⁻¹⁴
[H⁺] = 1.00 × 10⁻⁷ mol dm⁻³      pH = 7.00
```

Adding an acid raises [H⁺] and lowers [OH⁻], so the product stays 1.00 × 10⁻¹⁴. Adding an alkali does the opposite. This is why even strongly acidic solutions contain a tiny number of OH⁻ ions, and why alkaline solutions contain a tiny number of H⁺ ions.

## The pH of a strong base

Strong bases such as NaOH and KOH dissociate completely. A group 2 hydroxide such as Ba(OH)₂ gives two OH⁻ per formula unit. The method has four steps:

1. Find [OH⁻] from the concentration of the base.
2. Use [H⁺] = Kw ÷ [OH⁻].
3. Calculate pH = –log₁₀[H⁺].
4. Check that pH is above 7 for a base (at 298 K).

### Worked example 1: sodium hydroxide

Calculate the pH of 0.0100 mol dm⁻³ NaOH at 298 K.

```
[OH⁻] = 0.0100 mol dm⁻³
[H⁺] = 1.00 × 10⁻¹⁴ ÷ 0.0100 = 1.00 × 10⁻¹² mol dm⁻³
pH = 12.00
```

### Worked example 2: barium hydroxide

Calculate the pH of 0.0250 mol dm⁻³ Ba(OH)₂ at 298 K.

```
Ba(OH)₂ → Ba²⁺ + 2OH⁻
[OH⁻] = 2 × 0.0250 = 0.0500 mol dm⁻³
[H⁺] = 1.00 × 10⁻¹⁴ ÷ 0.0500 = 2.00 × 10⁻¹³ mol dm⁻³
pH = 12.70
```

Forgetting to double the hydroxide concentration is the most common mistake with Ba(OH)₂ and Ca(OH)₂.

### Worked example 3: from pH to concentration

A solution of sodium hydroxide has pH 13.30 at 298 K. Find its concentration.

```
[H⁺] = 10^(–13.30) = 5.01 × 10⁻¹⁴ mol dm⁻³
[OH⁻] = 1.00 × 10⁻¹⁴ ÷ 5.01 × 10⁻¹⁴ = 0.200 mol dm⁻³
concentration of NaOH = 0.200 mol dm⁻³
```

A shortcut at 298 K only: pH + pOH = 14. Here pOH = 14 – 13.30 = 0.70 and 10^(–0.70) = 0.200. This shortcut works only when Kw = 1.00 × 10⁻¹⁴. Use the full method if the temperature is different.

### Worked example 4: dilution of a base

10.0 cm³ of 0.100 mol dm⁻³ NaOH is diluted to 1000 cm³.

```
[OH⁻] = 0.100 × 10.0 ÷ 1000 = 1.00 × 10⁻³ mol dm⁻³
[H⁺] = 1.00 × 10⁻¹⁴ ÷ 1.00 × 10⁻³ = 1.00 × 10⁻¹¹ mol dm⁻³
pH = 11.00
```

A hundredfold dilution of the base lowers the pH by 2 units.

### Worked example 5: excess alkali after reaction with acid

25.0 cm³ of 0.150 mol dm⁻³ NaOH is mixed with 10.0 cm³ of 0.100 mol dm⁻³ HCl.

```
n(OH⁻) = 0.150 × 0.0250 = 3.75 × 10⁻³ mol
n(H⁺)  = 0.100 × 0.0100 = 1.00 × 10⁻³ mol
excess OH⁻ = 2.75 × 10⁻³ mol in 0.0350 dm³
[OH⁻] = 0.0786 mol dm⁻³
[H⁺] = 1.00 × 10⁻¹⁴ ÷ 0.0786 = 1.27 × 10⁻¹³ mol dm⁻³
pH = 12.90
```

## How Kw depends on temperature

The ionisation of water is **endothermic**: bonds in water molecules must break. By Le Chatelier's principle, raising the temperature moves the equilibrium to the right, so more H⁺ and OH⁻ are formed and Kw increases.

| Temperature / °C | Kw / mol² dm⁻⁶ |
|---|---|
| 25 | 1.00 × 10⁻¹⁴ |
| 40 | 2.92 × 10⁻¹⁴ |
| 50 | 5.48 × 10⁻¹⁴ |

### What this does to the pH of pure water

Pure water always has [H⁺] = [OH⁻], so it is always neutral. But the pH of neutral water changes with temperature.

```
At 50 °C: [H⁺] = √(5.48 × 10⁻¹⁴) = 2.34 × 10⁻⁷ mol dm⁻³
          pH = 6.63
```

The water is still neutral, because [H⁺] = [OH⁻]. Its pH is below 7 because the equilibrium has shifted to the right. This is a classic exam trap: a pH of 6.63 at 50 °C does not mean water has become acidic. **Neutral means [H⁺] = [OH⁻], not pH 7.**

### Worked example 6: a strong base at a different temperature

Calculate the pH of 0.100 mol dm⁻³ NaOH at 40 °C (Kw = 2.92 × 10⁻¹⁴ mol² dm⁻⁶).

```
[H⁺] = 2.92 × 10⁻¹⁴ ÷ 0.100 = 2.92 × 10⁻¹³ mol dm⁻³
pH = 12.53
```

At 298 K, the same solution has pH 13.00. The pH of a strong base falls as temperature rises, because Kw rises. The pH + pOH = 14 shortcut would give a wrong answer here.

## Finding [OH⁻] in an acidic solution

Kw works in both directions. In an acid, [H⁺] is known and [OH⁻] = Kw ÷ [H⁺].

```
0.0100 mol dm⁻³ HCl at 298 K:
[OH⁻] = 1.00 × 10⁻¹⁴ ÷ 0.0100 = 1.00 × 10⁻¹² mol dm⁻³
```

So even a strong acid contains a very small concentration of OH⁻ ions. In a neutral solution the two concentrations are equal. In an acidic solution [H⁺] is greater than [OH⁻], and in an alkaline solution [OH⁻] is greater than [H⁺]. These comparisons hold at every temperature, because they refer to the two concentrations and not to the number 7.

## Common mistakes

- Using pH = –log[OH⁻] instead of –log[H⁺].
- Forgetting to double [OH⁻] for Ba(OH)₂, Ca(OH)₂ and Sr(OH)₂.
- Using pH + pOH = 14 at a temperature other than 298 K.
- Leaving out the units of Kw (mol² dm⁻⁶), or giving them as mol dm⁻³.
- Saying that water is acidic at a higher temperature because its pH is below 7.
- Writing Kw with [H₂O] still in the expression.
- Stating that Kw changes when acid or alkali is added. It only changes with temperature.

## Exam technique for the command words

- **Derive Kw**: write the equilibrium, the expression for Kc, state that [H₂O] is effectively constant, and combine.
- **Calculate the pH of a strong base**: write [OH⁻], then [H⁺] = Kw ÷ [OH⁻], then pH.
- **Explain why the pH of water changes with temperature**: ionisation is endothermic, the equilibrium moves right, [H⁺] rises, pH falls, but [H⁺] = [OH⁻] so it is neutral.

## Frequently asked questions

**Why is [H₂O] left out of Kw?**
Water is present at about 55.5 mol dm⁻³ and almost none of it ionises, so its concentration is effectively constant. It is included in the value of Kw.

**Does adding NaOH to water change Kw?**
No. It changes [OH⁻] and [H⁺] but their product stays the same at a given temperature.

**Does a strong base always have a pH above 13?**
No. A dilute solution, such as 0.001 mol dm⁻³ NaOH, has pH 11.00 at 298 K.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.12.3 The ionic product of water, Kw.
