---
resourceId: "mb-ap-chem-8.4-study-guide"
title: "Acid-Base Reactions and Buffers: Study Guide (Chemistry 8.4)"
description: "Find the major species and the pH after mixing strong and weak acids and bases: excess strong reagent, buffer, salt hydrolysis at equal moles, and weak acid with weak base."
course: "chemistry"
unit: 8
topics: ["8.4"]
resourceType: "study-guide"
prerequisites:
  - "pH of strong acids and bases (Topic 8.2)"
  - "pH of weak acids and bases, K_a × K_b = K_w (Topic 8.3)"
  - "Moles from volume and molarity, limiting reactant (Topics 3.7 and 4.5)"
prerequisiteResources: ["mb-ap-chem-8.3-study-guide"]
learningObjectives:
  - "Explain why a strong acid or strong base reacts essentially completely with any base or acid it is mixed with"
  - "Identify the major species left after mixing an acid and a base, using moles and the limiting reactant"
  - "Calculate the pH when a strong acid or strong base is in excess, using the total volume"
  - "Recognise when a mixture is a buffer and calculate its pH from pK_a and the ratio of conjugate base to acid"
  - "Calculate the slightly basic or slightly acidic pH when a weak acid or weak base is exactly neutralised"
  - "Write the equilibrium for a weak acid mixed with a weak base and decide whether products are favoured"
skills: ["1", "5", "6"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "All data at 25 °C, where K_w = 1.0 × 10⁻¹⁴ and pK_w = 14.00. Ammonia K_b = 1.8 × 10⁻⁵; acetic acid K_a = 1.8 × 10⁻⁵. The acid HQ is fictional. Volumes are assumed to add. Keep unrounded values to the end"
related: ["mb-ap-chem-8.4-revision-notes", "mb-ap-chem-8.4-practice", "mb-ap-chem-8.4-checklist"]
next: "mb-ap-chem-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "React first, then think about equilibrium: a strong acid or strong base reacts completely, so do the stoichiometry in moles before anything else."
  - "If the strong reagent is in excess, the pH comes from its excess moles divided by the total volume."
  - "If a weak acid is in excess over a strong base (or a weak base over a strong acid), you have a buffer: pH = pK_a + log([A⁻]/[HA])."
  - "At equal moles, only the conjugate is left: a weak acid neutralised by a strong base gives pH above 7; a weak base neutralised by a strong acid gives pH below 7."
  - "A weak acid and a weak base reach an equilibrium; K = K_a(acid) ÷ K_a(conjugate acid of the base)."
faqs:
  - question: "Why can I use moles instead of concentrations in the buffer equation?"
    answer: "The acid and its conjugate base are in the same solution, so they share one total volume. The volume cancels in the ratio [A⁻]/[HA], leaving the mole ratio."
  - question: "Does neutralisation always give pH 7?"
    answer: "Only when a strong acid exactly neutralises a strong base. Neutralising a weak acid leaves its conjugate base, which makes the solution basic; neutralising a weak base leaves its conjugate acid, which makes it acidic."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## React first, then think about equilibrium

In [Topic 8.3](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-study-guide/) each solution held one acid or one base. Now you mix an acid with a base. The key fact is that **H₃O⁺ and OH⁻ react with each other, and with weak bases and weak acids, essentially to completion.** The equilibrium constants are so large that you can treat these reactions as one-way:

- strong acid + strong base: H₃O⁺(aq) + OH⁻(aq) → 2 H₂O(l)
- weak acid + strong base: HA(aq) + OH⁻(aq) → A⁻(aq) + H₂O(l)
- weak base + strong acid: B(aq) + H₃O⁺(aq) → HB⁺(aq) + H₂O(l)

So every mixing problem has the same shape. First do the **stoichiometry** in moles, as a limiting-reactant problem. Then look at what is left and choose the right **equilibrium** calculation.

<figure>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="mix-title mix-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mix-title">Deciding how to find the pH after mixing an acid and a base</title>
<desc id="mix-desc">A flowchart. Step 1: find the moles of every acid and base mixed. Step 2: let the strong acid or strong base react completely. Step 3: ask what is left. Four outcomes follow. First, strong acid or base left over: pH from excess moles divided by total volume. Second, a weak acid and its conjugate base both left, or a weak base and its conjugate acid: a buffer, pH from pKa and the ratio. Third, only the conjugate base left after equal moles of weak acid and strong base: use Kb, pH above 7. Fourth, only the conjugate acid left after equal moles of weak base and strong acid: use Ka, pH below 7.</desc>
<defs><marker id="mx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="140" y="8" width="400" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="31" text-anchor="middle" font-size="14" fill="#1d2b44">1. Find moles of every acid and base mixed</text>
<text x="340" y="52" text-anchor="middle" font-size="14" fill="#1d2b44">2. The strong acid or base reacts completely</text>
<path d="M340 64 V88" stroke="#1d2b44" stroke-width="2" marker-end="url(#mx)"/>
<rect x="190" y="92" width="300" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="117" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">3. What is left?</text>
<path d="M300 132 L88 172" stroke="#1d2b44" stroke-width="2" marker-end="url(#mx)"/>
<path d="M330 132 L258 172" stroke="#1d2b44" stroke-width="2" marker-end="url(#mx)"/>
<path d="M350 132 L428 172" stroke="#1d2b44" stroke-width="2" marker-end="url(#mx)"/>
<path d="M380 132 L596 172" stroke="#1d2b44" stroke-width="2" marker-end="url(#mx)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<rect x="8" y="176" width="160" height="112" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="88" y="196" font-weight="600">Strong acid or base</text>
<text x="88" y="212" font-weight="600">left over</text>
<text x="88" y="236">pH from excess</text>
<text x="88" y="252">moles ÷ total</text>
<text x="88" y="268">volume</text>
<rect x="178" y="176" width="160" height="112" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 3"/>
<text x="258" y="196" font-weight="600">Weak acid + its</text>
<text x="258" y="212" font-weight="600">conjugate base left</text>
<text x="258" y="228">(or B + HB⁺)</text>
<text x="258" y="252">Buffer: pH from pK_a</text>
<text x="258" y="268">and the ratio</text>
<rect x="348" y="176" width="160" height="112" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="428" y="196" font-weight="600">Only A⁻ left</text>
<text x="428" y="212">(equal moles weak</text>
<text x="428" y="228">acid + strong base)</text>
<text x="428" y="252">Use K_b</text>
<text x="428" y="268">pH above 7</text>
<rect x="518" y="176" width="160" height="112" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="598" y="196" font-weight="600">Only HB⁺ left</text>
<text x="598" y="212">(equal moles weak</text>
<text x="598" y="228">base + strong acid)</text>
<text x="598" y="252">Use K_a</text>
<text x="598" y="268">pH below 7</text>
</g>
</svg>
<figcaption>Figure 1. The "react first" routine. Steps 1 and 2 are stoichiometry; step 3 picks the equilibrium calculation. The buffer box has a dashed border because it is the only outcome in which both members of a conjugate pair are left in solution.</figcaption>
</figure>

Two habits make the stoichiometry safe. Work in **moles** (n = c × V, with V in litres), not in concentrations, because mixing changes the volume. And when you need a concentration at the end, divide by the **total** volume.

## Strong acid with strong base

The reaction H₃O⁺ + OH⁻ → 2 H₂O goes to completion. Whatever is in excess sets the pH. If neither is in excess, only water and spectator ions remain, and the pH is 7.00 at 25 °C.

## Worked example 1: excess strong acid

**Question.** 25.0 mL of 0.200 M HCl is mixed with 30.0 mL of 0.150 M NaOH. Find the pH.

1. n(H₃O⁺) = 0.0250 L × 0.200 M = 5.00 × 10⁻³ mol.
2. n(OH⁻) = 0.0300 L × 0.150 M = 4.50 × 10⁻³ mol. OH⁻ is limiting.
3. Excess H₃O⁺ = 5.00 × 10⁻³ − 4.50 × 10⁻³ = 5.0 × 10⁻⁴ mol.
4. Total volume = 25.0 + 30.0 = 55.0 mL = 0.0550 L, so [H₃O⁺] = 5.0 × 10⁻⁴ ÷ 0.0550 = 9.09 × 10⁻³ M.
5. pH = −log(9.09 × 10⁻³) = **2.04**.

**Common slip.** Dividing by 25.0 mL (the acid volume only) gives pH 1.70. The excess acid is spread through the whole 55.0 mL.

## Weak acid with strong base: three possible outcomes

HA + OH⁻ → A⁻ + H₂O goes to completion. What is left depends on which reactant runs out.

- **Weak acid in excess.** Some HA remains, together with the A⁻ just made. A weak acid and its conjugate base together form a **buffer**. Its pH follows from the K_a expression rearranged, the Henderson–Hasselbalch equation (studied fully in Topic 8.9):

  **pH = pK_a + log([A⁻] / [HA])**

  Both species share one volume, so you can put the mole ratio straight in.
- **Equal moles.** All the HA has become A⁻. A⁻ is a weak base (Topic 8.3), so it reacts slightly with water: A⁻ + H₂O ⇌ HA + OH⁻. The pH is **slightly basic**. Use K_b = K_w ÷ K_a.
- **Strong base in excess.** The leftover OH⁻ swamps the tiny amount A⁻ makes. pH comes from the excess OH⁻ moles ÷ total volume.

## Worked example 2: one weak acid, three amounts of base

**Question.** The fictional weak acid HQ has pK_a = 4.80. A 50.0 mL sample of 0.100 M HQ is mixed with 0.100 M NaOH. Find the pH after adding (a) 20.0 mL, (b) 50.0 mL, (c) 60.0 mL of NaOH.

Start: n(HQ) = 0.0500 L × 0.100 M = 5.00 × 10⁻³ mol.

**(a) 20.0 mL.** n(OH⁻) = 2.00 × 10⁻³ mol, limiting.

| | HQ | OH⁻ | Q⁻ |
|---|---|---|---|
| Before (mol) | 5.00 × 10⁻³ | 2.00 × 10⁻³ | 0 |
| After (mol) | 3.00 × 10⁻³ | 0 | 2.00 × 10⁻³ |

Both HQ and Q⁻ are left: a buffer. pH = 4.80 + log(2.00 / 3.00) = 4.80 − 0.18 = **4.62**.
Check: there is more acid than conjugate base, so the pH should be a little below pK_a. It is.

**(b) 50.0 mL.** n(OH⁻) = 5.00 × 10⁻³ mol, exactly equal. Only Q⁻ is left.
[Q⁻] = 5.00 × 10⁻³ mol ÷ 0.100 L = 0.0500 M. K_b = 1.0 × 10⁻¹⁴ ÷ 10^(−4.80) = 6.31 × 10⁻¹⁰.
[OH⁻] ≈ √(6.31 × 10⁻¹⁰ × 0.0500) = 5.62 × 10⁻⁶ M (0.011% of 0.0500, so the shortcut is fine).
pOH = 5.25, so pH = **8.75**. Slightly basic, as predicted.

**(c) 60.0 mL.** n(OH⁻) = 6.00 × 10⁻³ mol. Excess OH⁻ = 1.00 × 10⁻³ mol in 110.0 mL.
[OH⁻] = 1.00 × 10⁻³ ÷ 0.1100 = 9.09 × 10⁻³ M; pOH = 2.04; pH = **11.96**.

## Weak base with strong acid: the mirror image

B + H₃O⁺ → HB⁺ + H₂O goes to completion. The three outcomes mirror the weak acid case:

- **weak base in excess**: a buffer of B and HB⁺, with pH = pK_a(HB⁺) + log([B] / [HB⁺]);
- **equal moles**: only HB⁺ remains, and HB⁺ + H₂O ⇌ B + H₃O⁺ makes the pH **slightly acidic**;
- **strong acid in excess**: pH from the excess H₃O⁺ moles ÷ total volume.

## Worked example 3: ammonia and hydrochloric acid

**Question.** A 40.0 mL sample of 0.250 M NH₃ (K_b = 1.8 × 10⁻⁵) is mixed with 0.250 M HCl. Find the pH after adding (a) 10.0 mL, (b) 40.0 mL of the acid.

Start: n(NH₃) = 0.0400 L × 0.250 M = 1.00 × 10⁻² mol. For NH₄⁺, K_a = K_w ÷ K_b = 5.56 × 10⁻¹⁰ and pK_a = 9.26.

**(a) 10.0 mL.** n(H₃O⁺) = 2.50 × 10⁻³ mol, limiting. After reaction: 7.50 × 10⁻³ mol NH₃ and 2.50 × 10⁻³ mol NH₄⁺. A buffer.
pH = 9.255 + log(7.50 / 2.50) = 9.255 + 0.477 = **9.73** (keep the unrounded pK_a until the end).

**(b) 40.0 mL.** n(H₃O⁺) = 1.00 × 10⁻² mol, equal to NH₃. Only NH₄⁺ remains.
[NH₄⁺] = 1.00 × 10⁻² ÷ 0.0800 L = 0.125 M.
[H₃O⁺] ≈ √(5.56 × 10⁻¹⁰ × 0.125) = 8.33 × 10⁻⁶ M, so pH = **5.08**.

**Interpretation.** "Neutralised" does not mean "neutral". The ammonium ion left behind is a weak acid, so the solution is acidic.

## Weak acid with weak base: an equilibrium, not a completed reaction

When neither reactant is strong, the reaction does not go to completion. It reaches equilibrium:

HA(aq) + B(aq) ⇌ A⁻(aq) + HB⁺(aq)

Its constant combines what you know from Topic 8.3: K = K_a(HA) × K_b(B) ÷ K_w, which is the same as **K = K_a(HA) ÷ K_a(HB⁺)**. Read it as a contest between two acids, HA on the left and HB⁺ on the right. The proton ends up mostly on the weaker acid's conjugate base.

- Acetic acid with ammonia: K = 1.8 × 10⁻⁵ ÷ 5.56 × 10⁻¹⁰ = **3.2 × 10⁴**. Acetic acid is the stronger acid, so products are favoured: mostly CH₃COO⁻ and NH₄⁺.
- A fictional acid with pK_a 9.00 and a base whose conjugate acid has pK_a 5.00: K = 10^(−9.00) ÷ 10^(−5.00) = **1.0 × 10⁻⁴**. Reactants are favoured; very little proton transfer happens.

The rule: **products are favoured when the acid on the left is stronger (smaller pK_a) than the acid on the right.**

## What makes a buffer, and the boundary of this topic

A buffer contains a weak acid and its conjugate base (or a weak base and its conjugate acid) in **comparable amounts**. You can make one by mixing the two directly, or, as in Worked examples 2(a) and 3(a), by **partly** neutralising a weak acid with a strong base or a weak base with a strong acid. Topics 8.8 to 8.10 explain why buffers resist pH change and how much acid or base they can absorb. Calculating the pH change when acid or base is added to an existing buffer is outside the scope of the exam, so it is not covered here.

## Common misconceptions

- **"Neutralisation always gives pH 7."** True only for strong acid with strong base.
- **Subtracting concentrations instead of moles.** Mixing changes volumes; always convert to moles first.
- **Forgetting the total volume** when converting excess moles back to a concentration.
- **Running an ICE table on HA + OH⁻.** That reaction goes to completion; use a before/after table, then do the equilibrium step.
- **Using H–H when one species has run out.** A buffer needs both members of the pair. At equal moles, use K_b (or K_a) of what is left.
- **Flipping the ratio.** It is log(base form ÷ acid form). More base form means pH above pK_a.
- **"Any acid plus any base goes to completion."** Two weak species reach an equilibrium whose K may be large or small.

## Where this leads

Next, in [Topic 8.5](/advanced-course-resources/chemistry/8-5-acid-base-titrations-study-guide/), you will follow these same calculations continuously as base is added drop by drop, and see them as a titration curve. Try the [practice questions](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-checklist/) to consolidate.
