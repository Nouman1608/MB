---
resourceId: "mb-ap-chem-8.1-study-guide"
title: "Introduction to Acids and Bases: Study Guide (Chemistry 8.1)"
description: "Understand water's autoionization and K_w, define pH and pOH, convert between pH, pOH and ion concentrations, and see why neutral water is not always pH 7."
course: "chemistry"
unit: 8
topics: ["8.1"]
resourceType: "study-guide"
prerequisites:
  - "Brønsted-Lowry acids and bases, and water as an amphiprotic species (Topic 4.8)"
  - "Writing equilibrium-constant expressions and Le Châtelier's principle (Unit 7)"
  - "Logarithms to base 10 on a calculator"
prerequisiteResources: ["mb-ap-chem-7.12-study-guide", "mb-ap-chem-4.8-study-guide"]
learningObjectives:
  - "Write the autoionization equation for water and the expression for K_w"
  - "Calculate pH and pOH from [H₃O⁺] or [OH⁻], and convert back from pH or pOH to concentrations"
  - "Use K_w = [H₃O⁺][OH⁻] and pH + pOH = pK_w to find every ion concentration in an aqueous solution"
  - "Define a neutral solution by [H₃O⁺] = [OH⁻] and explain why its pH is 7.00 only at 25 °C"
  - "Explain how and why the pH of pure water changes with temperature"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "K_w = 1.0 × 10⁻¹⁴ at 25 °C unless a question gives another value. A pH has as many decimal places as its concentration has significant figures"
related: ["mb-ap-chem-8.1-revision-notes", "mb-ap-chem-8.1-practice", "mb-ap-chem-8.1-checklist"]
next: "mb-ap-chem-8.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Water ionises slightly: 2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq), with K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C."
  - "pH = −log[H₃O⁺] and pOH = −log[OH⁻]. Going back: [H₃O⁺] = 10⁻ᵖᴴ and [OH⁻] = 10⁻ᵖᴼᴴ."
  - "At 25 °C, pH + pOH = pK_w = 14.00, so knowing one of pH, pOH, [H₃O⁺] or [OH⁻] gives you all four."
  - "A solution is neutral when [H₃O⁺] = [OH⁻]. That means pH 7.00 only at 25 °C."
  - "K_w grows as temperature rises, so hot pure water has a pH below 7 but is still neutral."
faqs:
  - question: "Should I write H⁺ or H₃O⁺?"
    answer: "Both describe the same aqueous ion. H₃O⁺(aq), the hydronium ion, is the preferred form because a bare proton does not exist on its own in water, but H⁺(aq) is accepted. Be consistent within one answer."
  - question: "Can pH be negative or above 14?"
    answer: "Yes, for very concentrated acids or bases (for example [H₃O⁺] above 1 M gives a negative pH). The 0 to 14 range is just where most everyday solutions fall at 25 °C."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Water's own equilibrium

In [Topic 4.8](/advanced-course-resources/chemistry/4-8-introduction-acid-base-reactions-study-guide/) you saw that water is amphiprotic: it can donate a proton or accept one. That means two water molecules can react with **each other**. One acts as an acid and the other as a base:

H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)

This is called the **autoionization** (or self-ionization) of water. It happens in every sample of water, all the time, in both directions. It is an equilibrium like the ones in Unit 7, so it has an equilibrium constant. Because water is the pure liquid solvent, it is left out of the expression:

**K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C**

K_w is tiny, so the equilibrium lies very far to the left. In pure water at 25 °C, each ion forms in a 1 : 1 ratio, so [H₃O⁺] = [OH⁻] = x and x² = 1.0 × 10⁻¹⁴. That gives:

[H₃O⁺] = [OH⁻] = 1.0 × 10⁻⁷ M in pure water at 25 °C.

To see how small that is, pure water is about 55.5 M in H₂O molecules. So at any moment there are only about 2 hydronium ions for every billion water molecules (1.0 × 10⁻⁷ ÷ 55.5 ≈ 1.8 × 10⁻⁹).

### The K_w relationship holds in every aqueous solution

Here is the key idea for the whole unit. K_w is not only about pure water. **In any aqueous solution at 25 °C, [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴.** If an acid raises [H₃O⁺], the water equilibrium shifts left and [OH⁻] falls, so the product stays the same. If a base raises [OH⁻], [H₃O⁺] falls. This is why you can always find one ion concentration from the other:

[OH⁻] = K_w ÷ [H₃O⁺]  and  [H₃O⁺] = K_w ÷ [OH⁻]

### A note on notation

"Hydrogen ion", H⁺(aq), and "hydronium ion", H₃O⁺(aq), refer to the same aqueous ion. A bare proton does not exist by itself in water; it is always attached to water molecules. H₃O⁺ is the preferred symbol and H⁺ is accepted. This guide uses H₃O⁺.

## pH and pOH: a log scale for tiny numbers

Concentrations such as 3.2 × 10⁻⁹ M are awkward to compare. Chemists report them on a logarithmic scale instead:

- **pH = −log[H₃O⁺]**
- **pOH = −log[OH⁻]**

"log" means the logarithm to base 10. The minus sign makes the values positive for ordinary solutions. To go back from pH to concentration, undo the log:

- **[H₃O⁺] = 10⁻ᵖᴴ**
- **[OH⁻] = 10⁻ᵖᴼᴴ**

Three features of the scale cause most of the mistakes, so learn them now:

1. **Higher [H₃O⁺] means lower pH.** The minus sign reverses the direction.
2. **One pH unit is a factor of 10.** A solution at pH 3 has ten times the [H₃O⁺] of one at pH 4, and a thousand times that of one at pH 6.
3. **Significant figures live after the decimal point.** The digits before the decimal point only show the power of ten. So [H₃O⁺] = 4.7 × 10⁻⁵ M (2 significant figures) gives pH = 4.33 (2 decimal places).

### Linking pH and pOH

Take −log of both sides of K_w = [H₃O⁺][OH⁻]. The log of a product is the sum of the logs, so:

**pK_w = pH + pOH**, where pK_w = −log K_w.

At 25 °C, pK_w = −log(1.0 × 10⁻¹⁴) = 14.00, so **pH + pOH = 14.00**. In pure water at 25 °C, pH = pOH = 7.00.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="ph-scale-title ph-scale-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ph-scale-title">The pH scale at 25 degrees Celsius with matching ion concentrations</title>
<desc id="ph-scale-desc">A horizontal scale of pH from 0 to 14, marked every 2 units. Above each mark is the hydronium ion concentration, from 1 molar at pH 0 down to 10 to the minus 14 at pH 14. Below each mark is the hydroxide ion concentration, from 10 to the minus 14 at pH 0 up to 1 molar at pH 14. A dashed line at pH 7 is labelled neutral at 25 degrees Celsius. To its left the region is labelled acidic, hydronium greater than hydroxide; to its right basic, hydroxide greater than hydronium. Arrows show hydronium concentration increasing to the left and hydroxide increasing to the right.</desc>
<text x="320" y="20" text-anchor="middle" font-size="13" fill="#1d2b44">[H₃O⁺] (mol L⁻¹)</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="52">1</text><text x="120" y="52">10⁻²</text><text x="200" y="52">10⁻⁴</text><text x="280" y="52">10⁻⁶</text>
<text x="360" y="52">10⁻⁸</text><text x="440" y="52">10⁻¹⁰</text><text x="520" y="52">10⁻¹²</text><text x="600" y="52">10⁻¹⁴</text>
</g>
<rect x="40" y="70" width="280" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="320" y="70" width="280" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="95" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">ACIDIC: [H₃O⁺] &gt; [OH⁻]</text>
<text x="460" y="95" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">BASIC: [OH⁻] &gt; [H₃O⁺]</text>
<line x1="320" y1="60" x2="320" y2="122" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4"/>
<g stroke="#1d2b44" stroke-width="2">
<line x1="40" y1="110" x2="40" y2="120"/><line x1="120" y1="110" x2="120" y2="120"/><line x1="200" y1="110" x2="200" y2="120"/><line x1="280" y1="110" x2="280" y2="120"/>
<line x1="360" y1="110" x2="360" y2="120"/><line x1="440" y1="110" x2="440" y2="120"/><line x1="520" y1="110" x2="520" y2="120"/><line x1="600" y1="110" x2="600" y2="120"/>
</g>
<g font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="40" y="136">pH 0</text><text x="120" y="136">2</text><text x="200" y="136">4</text><text x="280" y="136">6</text>
<text x="360" y="136">8</text><text x="440" y="136">10</text><text x="520" y="136">12</text><text x="600" y="136">14</text>
</g>
<text x="320" y="152" text-anchor="middle" font-size="12" fill="#1d2b44">pH 7: neutral at 25 °C</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="180">10⁻¹⁴</text><text x="120" y="180">10⁻¹²</text><text x="200" y="180">10⁻¹⁰</text><text x="280" y="180">10⁻⁸</text>
<text x="360" y="180">10⁻⁶</text><text x="440" y="180">10⁻⁴</text><text x="520" y="180">10⁻²</text><text x="600" y="180">1</text>
</g>
<text x="320" y="200" text-anchor="middle" font-size="13" fill="#1d2b44">[OH⁻] (mol L⁻¹)</text>
<path d="M300 225 H60" stroke="#1d2b44" stroke-width="2" marker-end="url(#ph81a)"/>
<path d="M340 225 H580" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ph81a)"/>
<text x="180" y="245" text-anchor="middle" font-size="12" fill="#1d2b44">[H₃O⁺] rises (solid arrow)</text>
<text x="460" y="245" text-anchor="middle" font-size="12" fill="#1d2b44">[OH⁻] rises (dashed arrow)</text>
<defs><marker id="ph81a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. At 25 °C the two concentration scales mirror each other: every column multiplies to 1.0 × 10⁻¹⁴. Each step of 2 pH units is a factor of 100 in each concentration.</figcaption>
</figure>

## One number gives you all four

At 25 °C, the four quantities pH, pOH, [H₃O⁺] and [OH⁻] are locked together. Given any one, you can find the other three:

| You know | To find | Use |
|---|---|---|
| [H₃O⁺] | pH | pH = −log[H₃O⁺] |
| pH | pOH | pOH = 14.00 − pH |
| pOH | [OH⁻] | [OH⁻] = 10⁻ᵖᴼᴴ |
| [H₃O⁺] | [OH⁻] | [OH⁻] = 1.0 × 10⁻¹⁴ ÷ [H₃O⁺] |

Two routes to the same answer are a useful check: find [OH⁻] through pOH, then confirm that [H₃O⁺] × [OH⁻] = 1.0 × 10⁻¹⁴.

## Worked example 1: from a measured pH to every ion

**Question.** A pH meter reads 3.40 for a sample of a fruit drink at 25 °C. Calculate [H₃O⁺], pOH and [OH⁻], and say whether the drink is acidic, basic or neutral.

1. [H₃O⁺] = 10⁻³·⁴⁰ = 3.98 × 10⁻⁴ M. The pH has 2 decimal places, so report **4.0 × 10⁻⁴ M** (2 significant figures).
2. pOH = 14.00 − 3.40 = **10.60**.
3. [OH⁻] = 10⁻¹⁰·⁶⁰ = **2.5 × 10⁻¹¹ M**.
4. Check with K_w: 1.0 × 10⁻¹⁴ ÷ 3.98 × 10⁻⁴ = 2.5 × 10⁻¹¹ M. The two routes agree.
5. [H₃O⁺] is much greater than [OH⁻], so the drink is **acidic**.

**Interpretation.** Even in an acidic drink, hydroxide ions are still present. They are just very few. No aqueous solution has zero [OH⁻] or zero [H₃O⁺], because the water equilibrium is always there.

## Neutral means equal, not "pH 7"

A **neutral** solution is one in which [H₃O⁺] = [OH⁻], so pH = pOH. At 25 °C, that happens at pH 7.00 because pK_w = 14.00 and half of 14.00 is 7.00.

K_w, like every equilibrium constant, depends on temperature. Measured values show that K_w **increases** as water gets hotter:

| Temperature | pK_w | K_w | pH of pure (neutral) water |
|---|---|---|---|
| 25 °C | 14.00 | 1.0 × 10⁻¹⁴ | 7.00 |
| 50 °C | 13.26 | 5.5 × 10⁻¹⁴ | 6.63 |
| 100 °C | 12.25 | 5.6 × 10⁻¹³ | about 6.1 |

In hot pure water, both [H₃O⁺] and [OH⁻] are larger than 1.0 × 10⁻⁷ M, and they are still **equal**. So the pH falls below 7, yet the water is neutral, not acidic. Similarly, at temperatures above 25 °C, pH + pOH is less than 14.

Why does K_w rise? Heating shifts the equilibrium to the right, towards more ions. By Le Châtelier's principle, an equilibrium that shifts right on heating has an **endothermic** forward reaction. So the autoionization of water absorbs energy.

## Worked example 2: pure water at 50 °C

**Question.** At 50 °C, pK_w = 13.26. For pure water at this temperature, calculate K_w, [H₃O⁺], [OH⁻], pH and pOH. A student says the water is "slightly acidic". Evaluate the claim.

1. K_w = 10⁻¹³·²⁶ = **5.5 × 10⁻¹⁴**.
2. In pure water the ions form 1 : 1, so [H₃O⁺] = [OH⁻] = x, and x² = 5.5 × 10⁻¹⁴.
3. x = √(5.5 × 10⁻¹⁴) = **2.3 × 10⁻⁷ M** for both ions.
4. pH = −log(2.34 × 10⁻⁷) = **6.63**; pOH is also **6.63**. Check: 6.63 + 6.63 = 13.26 = pK_w.

**Evaluation.** The claim is **wrong**. The pH is below 7, but [H₃O⁺] = [OH⁻], which is the definition of neutral. The value 7 marks neutrality only when pK_w = 14.00, which is at 25 °C. A quick shortcut for pure water at any temperature: pH = pK_w ÷ 2.

## Worked example 3: comparing two solutions

**Question.** At 25 °C, sample P has pH 5.30 and sample Q has pH 8.10.
(a) How many times greater is [H₃O⁺] in P than in Q?
(b) Find [OH⁻] in each sample and compare them.

**(a)** The pH values differ by 8.10 − 5.30 = 2.80 units. Each unit is a factor of 10, so the ratio is 10²·⁸⁰ = **631**, about 630 times.
Directly: [H₃O⁺] in P = 10⁻⁵·³⁰ = 5.0 × 10⁻⁶ M; in Q = 10⁻⁸·¹⁰ = 7.9 × 10⁻⁹ M; and 5.0 × 10⁻⁶ ÷ 7.9 × 10⁻⁹ ≈ 630.

**(b)** pOH of P = 14.00 − 5.30 = 8.70, so [OH⁻] = 10⁻⁸·⁷⁰ = **2.0 × 10⁻⁹ M**.
pOH of Q = 14.00 − 8.10 = 5.90, so [OH⁻] = 10⁻⁵·⁹⁰ = **1.3 × 10⁻⁶ M**.
[OH⁻] in Q is about 630 times greater than in P: the same factor, the other way round. That has to be true, because [H₃O⁺][OH⁻] is fixed at 1.0 × 10⁻¹⁴.

**Interpretation.** P is acidic and Q is basic, but both contain both ions. A difference of under 3 pH units hides a factor of over 600 in concentration, which is why the log scale is useful. Always convert a pH difference into a factor of 10 before you compare.

## Common misconceptions

- **"Neutral always means pH 7."** Neutral means [H₃O⁺] = [OH⁻]. pH 7 is neutral only at 25 °C.
- **"Hot water with pH 6.6 is acidic."** If it is pure water, it is neutral; K_w is larger, so both ions are more concentrated and equal.
- **"K_w only applies to pure water."** It applies to every aqueous solution at that temperature.
- **"An acidic solution contains no OH⁻."** It contains a small but non-zero amount, set by K_w.
- **"A pH change from 4 to 5 means [H₃O⁺] fell by 1 M (or by 20%)."** It fell by a factor of 10.
- **"Higher pH means more acid."** Higher pH means lower [H₃O⁺].
- **Using ln instead of log.** pH uses log to base 10. ln gives a value about 2.3 times too large.
- **Wrong significant figures.** The number of decimal places in pH equals the number of significant figures in [H₃O⁺].
- **Including water in K_w.** Water is the solvent (a pure liquid), so it does not appear in the expression.

## Where this leads

Next, [Topic 8.2](/advanced-course-resources/chemistry/8-2-ph-poh-strong-acids-bases-study-guide/) uses these relationships to find the pH and pOH of strong acid and strong base solutions straight from their concentrations. Later topics add weak acids, K_a and K_b (linked by K_w = K_a × K_b) and buffers. Try the [practice questions](/advanced-course-resources/chemistry/8-1-introduction-acids-bases-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-1-introduction-acids-bases-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-1-introduction-acids-bases-checklist/) to consolidate.
