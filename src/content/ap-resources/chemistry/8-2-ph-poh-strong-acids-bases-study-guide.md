---
resourceId: "mb-ap-chem-8.2-study-guide"
title: "pH and pOH of Strong Acids and Bases: Study Guide (Chemistry 8.2)"
description: "Learn which acids and bases are strong, why they ionise completely, and how to find pH, pOH and the concentration of every species in their solutions."
course: "chemistry"
unit: 8
topics: ["8.2"]
resourceType: "study-guide"
prerequisites:
  - "pH, pOH and K_w (Topic 8.1)"
  - "Molarity and dilution (Topic 3.7)"
  - "Brønsted-Lowry acids, bases and conjugate pairs (Topic 4.8)"
prerequisiteResources: ["mb-ap-chem-8.1-study-guide"]
learningObjectives:
  - "Name the common strong acids and strong bases and explain what complete ionisation or dissociation means"
  - "Find [H₃O⁺] in a strong acid solution and [OH⁻] in a group 1 or group 2 hydroxide solution from the concentration of solute"
  - "Calculate pH and pOH of strong acid and strong base solutions, including after dilution or from a mass of solute"
  - "List every species in a strong acid or strong base solution with its concentration"
  - "Explain why a very dilute strong acid cannot have a pH above 7"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "K_w = 1.0 × 10⁻¹⁴ at 25 °C. Molar masses: H 1.008, O 16.00, Ba 137.33 g mol⁻¹. Decimal places in pH = significant figures in the concentration"
related: ["mb-ap-chem-8.2-revision-notes", "mb-ap-chem-8.2-practice", "mb-ap-chem-8.2-checklist"]
next: "mb-ap-chem-8.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Strong acids (HCl, HBr, HI, HClO₄, HNO₃ and H₂SO₄) ionise completely in water, so [H₃O⁺] equals the acid's starting concentration."
  - "Group 1 and group 2 hydroxides are strong bases: they dissociate completely, giving [OH⁻] = c for MOH and 2c for M(OH)₂."
  - "Find whichever of [H₃O⁺] or [OH⁻] comes straight from the solute, take −log, then use pH + pOH = 14.00 at 25 °C."
  - "In a strong acid solution, almost no acid molecules remain; the main species are H₃O⁺ and the conjugate base anion, plus a tiny [OH⁻] set by K_w."
  - "Strong means fully ionised, not concentrated: a dilute strong acid is still strong."
faqs:
  - question: "Is H₂SO₄ diprotic, so should I double its concentration?"
    answer: "Only its first proton ionises completely. The ion left behind, HSO₄⁻, is a weak acid, so the true [H₃O⁺] is more than the H₂SO₄ concentration but less than double it (how much more depends on the concentration, and the extra share is largest in dilute solutions). In this topic, take [H₃O⁺] as equal to the H₂SO₄ concentration unless a question tells you otherwise."
  - question: "Is a strong acid always more dangerous than a weak acid?"
    answer: "Not necessarily. Hazard depends heavily on concentration. A very dilute strong acid can be milder than a concentrated weak acid. 'Strong' describes how completely the acid ionises, not how much of it there is."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What makes an acid or base "strong"

In [Topic 8.1](/advanced-course-resources/chemistry/8-1-introduction-acids-bases-study-guide/) you learned to move between [H₃O⁺], [OH⁻], pH and pOH. The missing piece was: how do you know [H₃O⁺] in the first place? For strong acids and strong bases, the answer is simple, because they react **completely** with water.

A **strong acid** donates its proton to water so completely that, at equilibrium, practically no acid molecules are left. For nitric acid:

HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)

A single arrow is used because the reaction goes to completion. Every HNO₃ molecule becomes one H₃O⁺ ion and one NO₃⁻ ion (the conjugate base). So:

**For a strong acid HA at concentration c: [H₃O⁺] = c and [A⁻] = c.**

The six strong acids to know are:

| Strong acid | Formula | Conjugate base |
|---|---|---|
| hydrochloric acid | HCl | Cl⁻ |
| hydrobromic acid | HBr | Br⁻ |
| hydroiodic acid | HI | I⁻ |
| perchloric acid | HClO₄ | ClO₄⁻ |
| nitric acid | HNO₃ | NO₃⁻ |
| sulfuric acid | H₂SO₄ | HSO₄⁻ |

Sulfuric acid needs one comment. Its **first** proton ionises completely. The HSO₄⁻ ion left behind is itself a weak acid, so it gives up only part of its second proton. In this topic, treat [H₃O⁺] as equal to the H₂SO₄ concentration unless told otherwise; just remember that the true value is higher, by an amount that depends on the concentration. Most calculations use the five monoprotic acids for this reason.

In this course, treat an acid that is not on the list, such as HF or ethanoic acid, as **weak** unless a question says otherwise (Topic 8.3).

### Strong bases

The common strong bases are the **hydroxides of group 1 and group 2 metals**. They are ionic, and they **dissociate completely** when they dissolve:

NaOH(s) → Na⁺(aq) + OH⁻(aq)
Ba(OH)₂(s) → Ba²⁺(aq) + 2 OH⁻(aq)

Count the hydroxide ions in the formula:

- **Group 1 hydroxide, MOH, at concentration c: [OH⁻] = c.** (LiOH, NaOH, KOH, …)
- **Group 2 hydroxide, M(OH)₂, at concentration c: [OH⁻] = 2c.** (Ca(OH)₂, Sr(OH)₂, Ba(OH)₂)

Some group 2 hydroxides are only slightly soluble (Mg(OH)₂ barely dissolves at all, and Ca(OH)₂ only to about 0.02 M). That limits how much can dissolve, but whatever **does** dissolve is fully dissociated. The concentrations used in questions are always ones that can dissolve.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="strong-title strong-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="strong-title">Particle view of a strong acid and a strong base in water</title>
<desc id="strong-desc">Two panels, water molecules not shown. Left panel, nitric acid solution: four hydronium ions drawn as circles and four nitrate ions drawn as squares, and no intact nitric acid molecules. Caption below: four HNO3 added give four H3O plus and four NO3 minus. Right panel, barium hydroxide solution: three barium ions drawn as diamonds and six hydroxide ions drawn as circles. Caption below: three Ba(OH)2 added give three Ba 2 plus and six OH minus.</desc>
<rect x="10" y="10" width="300" height="220" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="330" y="10" width="300" height="220" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="34" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Strong acid: HNO₃(aq)</text>
<text x="480" y="34" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Strong base: Ba(OH)₂(aq)</text>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="55" cy="85" r="22"/><circle cx="195" cy="85" r="22"/><circle cx="125" cy="150" r="22"/><circle cx="265" cy="150" r="22"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="103" y="63" width="44" height="44"/><rect x="243" y="63" width="44" height="44"/><rect x="33" y="128" width="44" height="44"/><rect x="173" y="128" width="44" height="44"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="55" y="89">H₃O⁺</text><text x="195" y="89">H₃O⁺</text><text x="125" y="154">H₃O⁺</text><text x="265" y="154">H₃O⁺</text>
<text x="125" y="89">NO₃⁻</text><text x="265" y="89">NO₃⁻</text><text x="55" y="154">NO₃⁻</text><text x="195" y="154">NO₃⁻</text>
</g>
<text x="160" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">4 HNO₃ added → 4 H₃O⁺ + 4 NO₃⁻</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#1d2b44">intact HNO₃ molecules left: 0</text>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<path d="M400 46 L422 68 L400 90 L378 68 z"/><path d="M480 96 L502 118 L480 140 L458 118 z"/><path d="M560 146 L582 168 L560 190 L538 168 z"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="480" cy="68" r="20"/><circle cx="560" cy="68" r="20"/><circle cx="400" cy="118" r="20"/><circle cx="560" cy="118" r="20"/><circle cx="400" cy="168" r="20"/><circle cx="480" cy="168" r="20"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="400" y="72">Ba²⁺</text><text x="480" y="122">Ba²⁺</text><text x="560" y="172">Ba²⁺</text>
<text x="480" y="72">OH⁻</text><text x="560" y="72">OH⁻</text><text x="400" y="122">OH⁻</text><text x="560" y="122">OH⁻</text><text x="400" y="172">OH⁻</text><text x="480" y="172">OH⁻</text>
</g>
<text x="480" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">3 Ba(OH)₂ added → 3 Ba²⁺ + 6 OH⁻</text>
</svg>
<figcaption>Figure 1. Particle models (water molecules not shown). Each ion is labelled and drawn with its own shape. In the acid, every molecule has ionised. In the base, each formula unit releases two OH⁻ ions, so [OH⁻] is twice the Ba(OH)₂ concentration.</figcaption>
</figure>

### Strong is not the same as concentrated

"Strong" and "weak" describe **how completely** an acid ionises. "Concentrated" and "dilute" describe **how much** acid is dissolved per litre. A 0.0010 M HCl solution is dilute but strong. Its pH (3.00) is set by how little acid there is, not by any lack of ionisation.

## The method

1. Decide whether the solute is a strong acid or a strong base.
2. Write the ionisation or dissociation equation and read off the mole ratio.
3. Find [H₃O⁺] (acid) or [OH⁻] (base) directly from the solute concentration. If you are given a mass or a dilution, find the concentration first.
4. Take −log to get pH (acid) or pOH (base).
5. Use pH + pOH = 14.00 and K_w = [H₃O⁺][OH⁻] at 25 °C to find the other two quantities.
6. If asked for **all species**, list the ions from the solute, the minor ion from K_w, and note that intact strong acid molecules are essentially zero.

### Why water's own ions can usually be ignored

Pure water supplies only 1.0 × 10⁻⁷ M H₃O⁺, and in an acid solution even less, because the acid pushes the water equilibrium to the left. For any strong acid at 10⁻⁶ M or more, the acid provides at least ten times as much H₃O⁺ as water ever could, so [H₃O⁺] = c is an excellent approximation. The same applies to [OH⁻] in strong base solutions.

### Estimating pH as a check

Before you trust a calculator answer, estimate it. Write the concentration as a number between 1 and 10 times a power of ten. The pH lies between the two whole numbers on either side:

- 0.0250 M HClO₄ is 2.5 × 10⁻² M, which lies between 10⁻² and 10⁻¹ M. So the pH is between 1 and 2.
- 5 × 10⁻⁴ M HBr lies between 10⁻⁴ and 10⁻³ M, so the pH is between 3 and 4 (it is 3.30).
- For a base, estimate the pOH the same way, then subtract from 14. A base with [OH⁻] = 0.03 M has pOH between 1 and 2, so its pH is between 12 and 13.

A useful anchor: a factor of 2 in concentration changes pH by about 0.30, and a factor of 5 by about 0.70. If your answer falls outside the estimated range, look for a missing factor of 2, a sign error, or pH and pOH swapped.

## Worked example 1: every species in a strong acid

**Question.** Calculate the pH and pOH of 0.0250 M perchloric acid, HClO₄, at 25 °C, and give the concentration of every species present apart from water.

1. HClO₄ is a strong acid: HClO₄(aq) + H₂O(l) → H₃O⁺(aq) + ClO₄⁻(aq). The ratio is 1 : 1 : 1.
2. [H₃O⁺] = 0.0250 M.
3. pH = −log(0.0250) = **1.602** (3 significant figures in 0.0250 → 3 decimal places).
4. pOH = 14.00 − 1.602 = **12.398**.
5. [OH⁻] = K_w ÷ [H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 0.0250 = **4.0 × 10⁻¹³ M**.

| Species | Concentration (M) | Where it comes from |
|---|---|---|
| H₃O⁺ | 0.0250 | complete ionisation of HClO₄ |
| ClO₄⁻ | 0.0250 | conjugate base, same amount as H₃O⁺ |
| OH⁻ | 4.0 × 10⁻¹³ | water equilibrium, set by K_w |
| HClO₄ | ≈ 0 | almost none remains un-ionised |

**Check.** The charges balance: positive ions (0.0250 M H₃O⁺) match negative ions (0.0250 M ClO₄⁻ plus a negligible amount of OH⁻).

## Worked example 2: a group 2 hydroxide from a mass

**Question.** A student dissolves 0.450 g of barium hydroxide, Ba(OH)₂, in water and makes the solution up to 500.0 mL at 25 °C. Calculate [OH⁻], pOH, pH and [H₃O⁺].

1. Molar mass: M = 137.33 + 2(16.00 + 1.008) = 171.35 g mol⁻¹.
2. Amount: n = 0.450 g ÷ 171.35 g mol⁻¹ = 2.626 × 10⁻³ mol.
3. Concentration: c = 2.626 × 10⁻³ mol ÷ 0.5000 L = 5.253 × 10⁻³ M.
4. Ba(OH)₂ → Ba²⁺ + 2 OH⁻, so [OH⁻] = 2c = **0.0105 M**.
5. pOH = −log(0.010505) = **1.979**.
6. pH = 14.00 − 1.979 = **12.021**.
7. [H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 0.010505 = **9.5 × 10⁻¹³ M**.

**Why step 4 matters.** If you forget the factor of 2, you get pOH = 2.280 and pH = 11.720. The error is log 2 ≈ 0.30 pH units, which is enough to lose the mark.

## Worked example 3: making a solution of a chosen pH

**Question.** A technician needs 250.0 mL of nitric acid with pH 2.50 at 25 °C. The stock solution is 0.100 M HNO₃. What volume of stock should be diluted to 250.0 mL?

1. Target [H₃O⁺] = 10⁻²·⁵⁰ = 3.16 × 10⁻³ M. Because HNO₃ is strong, the target HNO₃ concentration is also 3.16 × 10⁻³ M.
2. Amount needed: n = 3.16 × 10⁻³ mol L⁻¹ × 0.2500 L = 7.91 × 10⁻⁴ mol.
3. Volume of stock: V = 7.91 × 10⁻⁴ mol ÷ 0.100 mol L⁻¹ = 7.91 × 10⁻³ L = **7.91 mL**.

(The dilution formula c₁V₁ = c₂V₂ gives the same answer: V₁ = 3.16 × 10⁻³ × 250.0 ÷ 0.100.)

**Interpretation.** The stock has pH 1.00, and the target is 1.50 units higher. That is a dilution by a factor of 10¹·⁵⁰ ≈ 31.6, and 250.0 mL ÷ 31.6 = 7.91 mL. Every tenfold dilution of a strong acid raises the pH by exactly 1 unit, as long as the solution is not so dilute that water's own ions matter.

## A very dilute strong acid

What is the pH of 1.0 × 10⁻⁸ M HCl? Using pH = −log c gives 8.00, which says an acid solution is basic. That cannot be right. At this tiny concentration the acid supplies **less** H₃O⁺ than water's own autoionization, so you can no longer ignore water. The true [H₃O⁺] is a little above 1.0 × 10⁻⁷ M, and the pH is just under 7 (about 6.98). You will not be asked to do this calculation, but you should be able to spot that pH = −log c fails here, and say why: adding an acid can never make water basic.

## Common misconceptions

- **"Strong means concentrated."** Strength is about the extent of ionisation. 1 × 10⁻⁴ M HCl is strong and dilute.
- **Forgetting the 2 for group 2 hydroxides.** [OH⁻] = 2c for Ca(OH)₂, Sr(OH)₂ and Ba(OH)₂.
- **Taking −log of a base concentration and calling it pH.** −log[OH⁻] is pOH. Subtract from 14.00 to get pH.
- **"There are still HCl molecules in hydrochloric acid."** Practically none remain; the solution contains H₃O⁺ and Cl⁻.
- **"A strong acid solution contains no OH⁻."** A small amount is always present, set by K_w.
- **Doubling for H₂SO₄ automatically.** Only the first proton is fully ionised.
- **Using pH = −log c for extremely dilute acid.** Below about 10⁻⁶ M, water's own H₃O⁺ cannot be ignored. An acid solution always has pH below 7 at 25 °C.
- **Thinking dilution changes the amount of acid.** Dilution lowers the concentration; the moles stay the same (c₁V₁ = c₂V₂).

## Where this leads

Strong acids and bases are the simple case: complete reaction, one-step calculation. Next, [Topic 8.3](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-study-guide/) deals with weak acids and bases, which only partly ionise, so you will need K_a, K_b and equilibrium tables. Later, strong acids and bases return as titrants in acid-base reactions and titration curves. Try the [practice questions](/advanced-course-resources/chemistry/8-2-ph-poh-strong-acids-bases-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-2-ph-poh-strong-acids-bases-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-2-ph-poh-strong-acids-bases-checklist/) to consolidate.
