---
title: "OxfordAQA A-Level Chemistry (9620): Buffer action"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Acids and bases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 10.6
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-acids-and-bases"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-10-6"
description: "OxfordAQA 9620 study guide to 3.1.10.6: how acidic and basic buffers work, acidic buffer pH calculations, making a buffer to a target pH, and uses."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.1.10.6 Buffer action** from the OxfordAQA International AS and A-level Chemistry (9620) specification. The specification says a buffer solution "maintains an approximately constant pH, despite dilution or addition of small amounts of acid or base". Acidic buffers contain a weak acid and the salt of that weak acid; basic buffers contain a weak base and the salt of that weak base. You must be able to explain qualitatively the action of acidic and basic buffers, calculate the pH of acidic buffer solutions, and know applications of buffers. This is International A2 content (**International A-level only**), examined in Unit 3.

The [acids and bases study guide](/resources/oxfordaqa-a-level-chemistry-acids-and-bases/) introduces buffers in the context of the whole section. This page adds what happens to the numbers when acid or alkali is added, how to design a buffer for a chosen pH, and the limits of buffering. Then use the [buffer action revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6-revision-notes/) and the [buffer action practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6-practice/).

## What a buffer must contain

A buffer needs **two reservoirs**: one species to remove added H⁺ and one to remove added OH⁻. Both must be present in **large amounts compared with what is added**.

| Buffer type | Removes added H⁺ | Removes added OH⁻ | Example |
|---|---|---|---|
| Acidic | A⁻ from the salt | HA, the weak acid | ethanoic acid + sodium ethanoate |
| Basic | the weak base | the conjugate acid from the salt | ammonia + ammonium chloride |

A strong acid with its salt (HCl with NaCl) cannot buffer. Cl⁻ does not take up H⁺, and there is no reservoir of undissociated acid.

## Explaining an acidic buffer

Use ethanoic acid and sodium ethanoate. The acid is weak, so its equilibrium lies to the left; the salt is fully ionised, supplying a large concentration of CH₃COO⁻.

```
CH₃COOH ⇌ CH₃COO⁻ + H⁺
```

**Small amount of acid added.** The added H⁺ reacts with the large supply of ethanoate ions: CH₃COO⁻ + H⁺ → CH₃COOH. The equilibrium shifts to the left, so most of the added H⁺ is removed.

**Small amount of alkali added.** The added OH⁻ reacts with H⁺: H⁺ + OH⁻ → H₂O. The equilibrium shifts to the right as more CH₃COOH dissociates, replacing the H⁺. Overall, CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.

**Why the pH barely moves.** From Ka, [H⁺] = Ka × [CH₃COOH] / [CH₃COO⁻]. Because both concentrations are large, a small addition changes their **ratio** only slightly, so [H⁺] changes only slightly.

**Dilution.** Adding water lowers both concentrations by the same factor, so the ratio and the pH stay the same.

## Explaining a basic buffer

Use ammonia and ammonium chloride. Ammonia is a weak base; the salt supplies a large concentration of NH₄⁺.

```
NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
```

- **Acid added:** NH₃ + H⁺ → NH₄⁺. The large reservoir of ammonia removes the H⁺.
- **Alkali added:** NH₄⁺ + OH⁻ → NH₃ + H₂O. The large reservoir of ammonium ions removes the OH⁻.

Both ammonia and ammonium ions are present in large amounts, so their ratio and the pH change very little. The specification asks you to explain basic buffers qualitatively; pH calculations are required for acidic buffers only.

## Calculating the pH of an acidic buffer

```
[H⁺] = Ka × [HA] / [A⁻]
```

[HA] is the weak acid concentration and [A⁻] is the salt concentration; both are effectively their made-up values because the equilibrium barely moves. As both share one volume, you can use **moles** directly.

### Worked example 1: a buffer before and after additions

1.00 dm³ of buffer contains 0.150 mol ethanoic acid and 0.100 mol sodium ethanoate. Ka = 1.74 × 10⁻⁵ mol dm⁻³.

```
[H⁺] = 1.74 × 10⁻⁵ × 0.150 / 0.100 = 2.61 × 10⁻⁵ mol dm⁻³      pH = 4.58
```

**Add 0.0100 mol HCl.** H⁺ turns ethanoate into ethanoic acid:

```
n(HA) = 0.150 + 0.0100 = 0.160 mol      n(A⁻) = 0.100 − 0.0100 = 0.090 mol
[H⁺] = 1.74 × 10⁻⁵ × 0.160 / 0.090 = 3.09 × 10⁻⁵      pH = 4.51
```

**Or add 0.0100 mol NaOH** to the original buffer. OH⁻ turns ethanoic acid into ethanoate:

```
n(HA) = 0.140 mol      n(A⁻) = 0.110 mol
[H⁺] = 1.74 × 10⁻⁵ × 0.140 / 0.110 = 2.21 × 10⁻⁵      pH = 4.65
```

For comparison, 0.0100 mol HCl in 1.00 dm³ of pure water takes the pH from 7.00 to 2.00. The buffer moved by only 0.07.

### Worked example 2: a buffer made by partial neutralisation

20.0 cm³ of 0.150 mol dm⁻³ NaOH is added to 50.0 cm³ of 0.200 mol dm⁻³ propanoic acid (Ka = 1.35 × 10⁻⁵ mol dm⁻³). Calculate the pH.

```
n(acid) at start = 0.200 × 0.0500 = 0.0100 mol
n(OH⁻)           = 0.150 × 0.0200 = 0.00300 mol
n(HA) left       = 0.00700 mol      n(A⁻) formed = 0.00300 mol
[H⁺] = 1.35 × 10⁻⁵ × 0.00700 / 0.00300 = 3.15 × 10⁻⁵      pH = 4.50
```

The NaOH is the **limiting** reagent; if it were in excess, no weak acid would remain and there would be no buffer.

### Worked example 3: designing a buffer for a target pH

A buffer of pH 5.00 is needed from 500 cm³ of 0.200 mol dm⁻³ ethanoic acid. What mass of sodium ethanoate (Mr = 82.0) should be dissolved in it?

```
[H⁺] needed     = 1.00 × 10⁻⁵ mol dm⁻³
n(A⁻) / n(HA)   = Ka / [H⁺] = 1.74 × 10⁻⁵ / 1.00 × 10⁻⁵ = 1.74
n(HA)           = 0.200 × 0.500 = 0.100 mol
n(A⁻)           = 1.74 × 0.100 = 0.174 mol
mass            = 0.174 × 82.0 = 14.3 g
```

A pH above the pKa (4.76) needs more salt than acid; a pH below the pKa needs more acid than salt. When the amounts are equal, pH = pKa.

## The limit of a buffer

A buffer only resists **small** additions. If 0.00500 mol each of ethanoic acid and sodium ethanoate (pH 4.76) receives 0.00400 mol HCl, the ethanoate is almost used up: n(HA) = 0.00900 and n(A⁻) = 0.00100, giving pH 3.81. Once one reservoir runs out, the pH changes rapidly.

## Applications

The specification lists "applications of buffer solutions". Useful examples:

- **Blood** is held in a narrow pH range, around 7.4, mainly by a carbonic acid–hydrogencarbonate buffer: H₂CO₃ ⇌ H⁺ + HCO₃⁻.
- **Calibrating pH meters**, as in required practical 7.
- **Foods, drinks and shampoos**, where buffers keep the pH steady during storage.
- **Biological and industrial processes** that use enzymes or reactions which only work well in a narrow pH range.

## Common mistakes

- Using √(Ka × [HA]) for a buffer; in a buffer [A⁻] is much larger than [H⁺].
- Writing the ratio upside down: it is [HA] / [A⁻] in the expression for [H⁺].
- After adding acid or alkali, changing only one of the two amounts.
- Explaining buffer action with "the buffer neutralises the acid" and no equation or equilibrium shift.
- Calling a buffer's pH "constant". It is approximately constant.

## Exam technique

- **"Explain how this buffer resists a change in pH when a small amount of acid is added"**: name the species that reacts, give the equation, state the direction of any equilibrium shift, and say the ratio changes only slightly because both species are present in large amounts.
- **"Calculate the pH of the buffer"**: write moles of HA and A⁻ on separate lines first; if acid or base has been added, do the reaction before substituting.
- **"Suggest a use"**: give a specific context, not just "to keep pH constant".

## More on this topic

Condense this with the [buffer action revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6-revision-notes/), then try the [buffer action practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-6-practice/). The buffer region of a titration curve is explained in [pH curves, titrations and indicators](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-5/), and Ka itself in [weak acids and Ka](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-10-4/).
