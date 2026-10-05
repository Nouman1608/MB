---
resourceId: "mb-ap-chem-8.3-study-guide"
title: "Weak Acid and Base Equilibria: Study Guide (Chemistry 8.3)"
description: "Use K_a, K_b, pK_a and pK_b to find the pH, percent ionization and every species concentration in a weak acid or weak base solution, and link conjugate pairs through K_w."
course: "chemistry"
unit: 8
topics: ["8.3"]
resourceType: "study-guide"
prerequisites:
  - "pH, pOH and K_w for water and strong acid or base solutions (Topics 8.1 and 8.2)"
  - "Setting up an ICE table and solving for x (Topic 7.7)"
prerequisiteResources: ["mb-ap-chem-8.2-study-guide"]
learningObjectives:
  - "Explain why only a small fraction of a weak acid or weak base ionizes, and rank the concentrations of all species in its solution"
  - "Write K_a and K_b expressions and convert between K and pK"
  - "Calculate the pH of a weak acid or weak base solution from its initial concentration and K_a, pK_a, K_b or pK_b"
  - "Calculate percent ionization from K and concentration, or from a measured pH, and explain how it changes on dilution"
  - "Calculate K_a or K_b from a measured pH and initial concentration"
  - "Use K_a × K_b = K_w and pK_a + pK_b = pK_w to relate the strengths of a conjugate acid-base pair"
skills: ["3", "5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "All data at 25 °C, where K_w = 1.0 × 10⁻¹⁴ and pK_w = 14.00. Acetic acid K_a = 1.8 × 10⁻⁵; ammonia K_b = 1.8 × 10⁻⁵. Acids and bases named with letters (HZ, HG) are fictional. Keep unrounded values to the end"
related: ["mb-ap-chem-8.3-revision-notes", "mb-ap-chem-8.3-practice", "mb-ap-chem-8.3-checklist"]
next: "mb-ap-chem-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A weak acid ionizes only slightly: [H₃O⁺] is much smaller than the starting acid concentration, and most HA molecules stay intact."
  - "K_a = [H₃O⁺][A⁻] / [HA] and K_b = [OH⁻][HB⁺] / [B]. A smaller K (larger pK) means a weaker acid or base."
  - "For a weak acid, x = [H₃O⁺] ≈ √(K_a × c) when x is under about 5% of c. For a weak base the same method gives [OH⁻]; then convert pOH to pH."
  - "Percent ionization = (x ÷ c) × 100%. It rises when the solution is diluted, although [H₃O⁺] falls."
  - "For a conjugate pair, K_a × K_b = K_w and pK_a + pK_b = 14.00 at 25 °C: the weaker the acid, the stronger its conjugate base."
faqs:
  - question: "Is a weak acid the same as a dilute acid?"
    answer: "No. Weak and strong describe how much of the acid ionizes. Dilute and concentrated describe how much acid is dissolved per litre. A concentrated weak acid and a dilute strong acid can even have similar pH values."
  - question: "When can I use the approximation c − x ≈ c?"
    answer: "When x turns out to be less than about 5% of c. Solve with the approximation, then check. If the check fails, solve the quadratic instead. The check usually passes when K is at least a few hundred times smaller than c."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Weak means "mostly not ionized"

In [Topic 8.2](/advanced-course-resources/chemistry/8-2-ph-poh-strong-acids-bases-study-guide/) a strong acid ionized completely, so [H₃O⁺] equalled the acid concentration. A **weak acid** behaves differently. It still reacts with water to give hydronium ions:

HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)

but the reaction reaches equilibrium when only a small percentage of the HA molecules have reacted. Three things follow:

- [H₃O⁺] is **much less** than the starting concentration of HA.
- Almost all of the acid is still present as un-ionized HA molecules.
- The solution is an equilibrium mixture of HA and its conjugate base A⁻, so you need an equilibrium constant to find the pH.

That constant is the **acid ionization constant**, K_a. Water is the solvent, so it is left out:

K_a = [H₃O⁺][A⁻] / [HA]

K_a values are often small and awkward, so they are also reported as **pK_a = −log K_a**. A smaller K_a means a larger pK_a and a weaker acid. Acetic acid, for example, has K_a = 1.8 × 10⁻⁵, so pK_a = −log(1.8 × 10⁻⁵) = 4.74. To go back, K_a = 10^(−pK_a).

Like any equilibrium constant, K_a changes only with temperature. Diluting the acid or adding more of it does not change K_a.

## Seeing every species in the solution

The figure shows the four species in 0.10 M acetic acid at equilibrium. The scale is logarithmic: each gridline is a factor of 100.

<figure>
<svg viewBox="0 0 680 280" role="img" aria-labelledby="wa-title wa-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="wa-title">Concentrations of all species in 0.10 molar acetic acid</title>
<desc id="wa-desc">A dot plot on a logarithmic axis from 10 to the minus 12 to 10 to the 0 moles per litre. Acetic acid molecules: 9.9 times 10 to the minus 2. Hydronium ion: 1.3 times 10 to the minus 3. Acetate ion: 1.3 times 10 to the minus 3, the same as hydronium. Hydroxide ion: 7.5 times 10 to the minus 12. Un-ionized acid is by far the main species; hydronium and acetate are about 75 times smaller; hydroxide is tiny.</desc>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4" opacity="0.5">
<line x1="120" y1="30" x2="120" y2="225"/><line x1="200" y1="30" x2="200" y2="225"/><line x1="280" y1="30" x2="280" y2="225"/>
<line x1="360" y1="30" x2="360" y2="225"/><line x1="440" y1="30" x2="440" y2="225"/><line x1="520" y1="30" x2="520" y2="225"/><line x1="600" y1="30" x2="600" y2="225"/>
</g>
<line x1="120" y1="225" x2="600" y2="225" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="120" y="243">10⁻¹²</text><text x="200" y="243">10⁻¹⁰</text><text x="280" y="243">10⁻⁸</text><text x="360" y="243">10⁻⁶</text>
<text x="440" y="243">10⁻⁴</text><text x="520" y="243">10⁻²</text><text x="600" y="243">10⁰</text>
<text x="360" y="268" font-size="13">Equilibrium concentration (mol L⁻¹), logarithmic scale</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="112" y="59">CH₃COOH</text>
<text x="112" y="104">H₃O⁺</text>
<text x="112" y="149">CH₃COO⁻</text>
<text x="112" y="194">OH⁻</text>
</g>
<g fill="#1d2b44">
<circle cx="559.8" cy="55" r="7"/>
<rect x="478" y="93" width="14" height="14"/>
<path d="M485 141 L493 155 L477 155 z"/>
<path d="M155 183 L163 190 L155 197 L147 190 z"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="574" y="59">9.9 × 10⁻²</text>
<text x="500" y="104">1.3 × 10⁻³</text>
<text x="500" y="149">1.3 × 10⁻³</text>
<text x="171" y="194">7.5 × 10⁻¹²</text>
</g>
</svg>
<figcaption>Figure 1. Species in 0.10 M acetic acid at 25 °C (K_a = 1.8 × 10⁻⁵), each row marked with a different symbol and labelled with its value. Only 1.3% of the acid is ionized. The pH is 2.88, not the 1.00 a 0.10 M strong acid would give.</figcaption>
</figure>

The ranking [HA] ≫ [H₃O⁺] ≈ [A⁻] ≫ [OH⁻] holds for almost any weak acid solution. [H₃O⁺] and [A⁻] are equal because each ionization makes one of each. (Water's own ionization adds a little H₃O⁺, but at these concentrations it is negligible.) [OH⁻] comes from K_w: [OH⁻] = K_w ÷ [H₃O⁺].

## Calculating the pH of a weak acid

Use an ICE table, with c for the starting concentration and x for the amount that ionizes.

| | HA | H₃O⁺ | A⁻ |
|---|---|---|---|
| Initial | c | 0 | 0 |
| Change | −x | +x | +x |
| Equilibrium | c − x | x | x |

So K_a = x² / (c − x). Because x is small compared with c, you can usually write c − x ≈ c. Then:

**x = [H₃O⁺] ≈ √(K_a × c)** and **pH = −log x**

**Always check the approximation.** Work out (x ÷ c) × 100%. If it is under about 5%, the shortcut is fine. If not, solve the quadratic x² + K_a·x − K_a·c = 0 and take the positive root.

For example, a 0.010 M acid with K_a = 1.0 × 10⁻³ gives x ≈ 3.2 × 10⁻³ M with the shortcut: 32% of c, so the check fails. The quadratic gives x = 2.7 × 10⁻³ M and pH 2.57, not the 2.50 the shortcut predicts.

## Percent ionization

**Percent ionization = ([H₃O⁺] at equilibrium ÷ c) × 100%** for a weak acid (use [OH⁻] for a weak base).

You can find it in two ways:

- from **pK_a and c**: calculate x first, then divide by c;
- from **c and any one equilibrium concentration**, for example [H₃O⁺] from a measured pH, or [A⁻].

Percent ionization is not a constant. Look at acetic acid at three concentrations:

| c (M) | [H₃O⁺] (M) | pH | Percent ionization |
|---|---|---|---|
| 0.10 | 1.3 × 10⁻³ | 2.88 | 1.3% |
| 0.010 | 4.2 × 10⁻⁴ | 3.38 | 4.2% |
| 0.0010 | 1.3 × 10⁻⁴ | 3.90 | 13% |

Each tenfold dilution lowers [H₃O⁺] by only about √10 ≈ 3.2 times, so the pH rises by about 0.5, not 1. Meanwhile the percent ionization rises. This is Le Châtelier's principle: dilution lowers all concentrations, Q = x²/(c − x) drops below K_a, and more HA ionizes to restore K_a. (At 0.0010 M the 5% check fails, so these values come from the quadratic.)

## Worked example 1: everything in a weak acid solution

**Question.** The fictional acid HZ has pK_a = 5.30 at 25 °C. Find the pH, the percent ionization and the concentrations of all species in 0.150 M HZ.

1. K_a = 10^(−5.30) = 5.01 × 10⁻⁶.
2. ICE table: K_a = x² / (0.150 − x) ≈ x² / 0.150.
3. x = √(5.01 × 10⁻⁶ × 0.150) = 8.67 × 10⁻⁴ M = [H₃O⁺] = [Z⁻].
4. Check: (8.67 × 10⁻⁴ ÷ 0.150) × 100% = **0.58%**. Well under 5%, so the shortcut is fine.
5. pH = −log(8.67 × 10⁻⁴) = **3.06**.
6. [HZ] = 0.150 − 0.000867 = 0.149 M. [OH⁻] = 1.0 × 10⁻¹⁴ ÷ 8.67 × 10⁻⁴ = 1.2 × 10⁻¹¹ M.

**Answer.** pH 3.06; 0.58% ionized; [HZ] = 0.149 M, [H₃O⁺] = [Z⁻] = 8.7 × 10⁻⁴ M, [OH⁻] = 1.2 × 10⁻¹¹ M.

**Check.** pH 3.06 is above the 0.82 a 0.150 M strong acid would give, as it must be for a weak acid.

## Worked example 2: K_a from a measured pH

**Question.** A 0.0500 M solution of the fictional monoprotic acid HG has a measured pH of 3.10 at 25 °C. Calculate the percent ionization, K_a and pK_a.

1. [H₃O⁺] = 10^(−3.10) = 7.94 × 10⁻⁴ M. This is x, so [G⁻] = 7.94 × 10⁻⁴ M too.
2. Percent ionization = (7.94 × 10⁻⁴ ÷ 0.0500) × 100% = **1.6%**.
3. [HG] = 0.0500 − 0.000794 = 0.0492 M.
4. K_a = (7.94 × 10⁻⁴)² ÷ 0.0492 = **1.3 × 10⁻⁵**.
5. pK_a = −log(1.28 × 10⁻⁵) = **4.89**.

**Why step 3 matters less here.** Using 0.0500 instead of 0.0492 gives K_a = 1.26 × 10⁻⁵, which still rounds to 1.3 × 10⁻⁵. The ionization is small, so either is fine. When the percent ionization is larger, subtract x.

## Weak bases work the same way

A **weak base** B takes a proton from water and makes hydroxide ions, but only a small fraction of B reacts:

B(aq) + H₂O(l) ⇌ HB⁺(aq) + OH⁻(aq)  K_b = [OH⁻][HB⁺] / [B], pK_b = −log K_b

The ICE table is identical, with x = [OH⁻]. So x ≈ √(K_b × c). The answer is [OH⁻], which gives **pOH** first. Convert with pH = 14.00 − pOH at 25 °C.

The species ranking mirrors the acid case: [B] ≫ [HB⁺] ≈ [OH⁻] ≫ [H₃O⁺]. Most of the base stays as un-reacted B molecules, so [OH⁻] does **not** equal the starting base concentration, unlike the strong bases of Topic 8.2.

A routine that works for every weak acid or weak base problem:

1. Write the equation with water and decide whether x is [H₃O⁺] or [OH⁻].
2. Convert any pK value to K (K = 10^(−pK)).
3. Solve x ≈ √(K × c) and do the 5% check.
4. Convert x to pH (through pOH for a base) and find any other species you need.

## Worked example 3: a weak base and its conjugate acid

**Question.** Ammonia has K_b = 1.8 × 10⁻⁵ at 25 °C. (a) Find the pH and percent ionization of 0.250 M NH₃. (b) Find K_a and pK_a for the ammonium ion, NH₄⁺.

**(a)** NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.
1. x = [OH⁻] ≈ √(1.8 × 10⁻⁵ × 0.250) = 2.12 × 10⁻³ M.
2. Check: (2.12 × 10⁻³ ÷ 0.250) × 100% = **0.85%**. The shortcut is fine.
3. pOH = −log(2.12 × 10⁻³) = 2.67, so pH = 14.00 − 2.67 = **11.33**.

**(b)** NH₄⁺ and NH₃ are a conjugate pair, so K_a = K_w ÷ K_b = 1.0 × 10⁻¹⁴ ÷ 1.8 × 10⁻⁵ = **5.6 × 10⁻¹⁰**, and pK_a = 14.00 − 4.74 = **9.26**.

**Common slip.** Treating 0.250 M NH₃ as a strong base gives pOH 0.60 and pH 13.40, far too high. A weak base must go through K_b.

## Linking a conjugate pair: K_a × K_b = K_w

Write the two equilibria for a conjugate pair HA / A⁻ and multiply their constants:

K_a × K_b = ([H₃O⁺][A⁻]/[HA]) × ([HA][OH⁻]/[A⁻]) = [H₃O⁺][OH⁻] = K_w

Taking −log of both sides gives **pK_a + pK_b = pK_w = 14.00 at 25 °C**.

| Acid | pK_a | Conjugate base | pK_b |
|---|---|---|---|
| Acetic acid | 4.74 | acetate, CH₃COO⁻ | 9.26 |
| HZ (fictional) | 5.30 | Z⁻ | 8.70 |
| Ammonium, NH₄⁺ | 9.26 | ammonia, NH₃ | 4.74 |

The pattern: **the weaker the acid, the stronger its conjugate base**. Acetic acid is a much stronger acid than NH₄⁺, so acetate is a much weaker base than NH₃. This is why, in [Topic 8.4](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-study-guide/), a solution of a weak acid's salt turns out slightly basic.

## Common misconceptions

- **"[H₃O⁺] equals the acid concentration."** Only for a strong acid. For a weak acid, [H₃O⁺] is a small fraction of c and must come from K_a.
- **"Weak means dilute."** Weak is about the fraction ionized; dilute is about the amount dissolved per litre.
- **"A larger pK_a means a stronger acid."** The reverse: larger pK_a, smaller K_a, weaker acid.
- **"Diluting a weak acid lowers its percent ionization."** It raises it. [H₃O⁺] falls, but by less than c does.
- **"Diluting changes K_a."** K_a changes only with temperature.
- **Reporting pOH as pH for a weak base.** The weak-base calculation gives [OH⁻]. Convert at the end.
- **Skipping the 5% check.** The shortcut can be badly wrong when K is large or c is small.
- **Using K_a for a base problem.** If you are given K_a of the conjugate acid, convert first with K_b = K_w ÷ K_a.

## Where this leads

Next, in [Topic 8.4](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-study-guide/), you will mix weak acids and bases with strong ones and use these same equilibria to find the pH of the result, including buffer solutions. Try the [practice questions](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-checklist/) to consolidate.
