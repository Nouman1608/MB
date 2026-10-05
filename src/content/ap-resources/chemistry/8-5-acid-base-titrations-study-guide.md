---
resourceId: "mb-ap-chem-8.5-study-guide"
title: "Acid-Base Titrations: Study Guide (Chemistry 8.5)"
description: "Learn to read a pH titration curve: find the analyte concentration from the equivalence point, pKa from the half-equivalence point, and the species present for mono- and polyprotic acids."
course: "chemistry"
unit: 8
topics: ["8.5"]
resourceType: "study-guide"
prerequisites:
  - "Titration amounts and the equivalence point (Topic 4.6)"
  - "pH of strong acids and bases, and weak acid or base equilibria (Topics 8.2 and 8.3)"
  - "What happens when weak and strong acids and bases are mixed (Topic 8.4)"
prerequisiteResources: ["mb-ap-chem-8.4-study-guide"]
learningObjectives:
  - "Describe the regions of a pH titration curve and the major species present in each"
  - "Use the volume of titrant at the equivalence point to find the concentration of a mono-protic analyte"
  - "Explain why pH = pKa at the half-equivalence point and use it to find Ka or Kb from a curve"
  - "Explain whether the pH at the equivalence point is acidic, neutral or basic from the species present"
  - "Use a polyprotic titration curve to find the number of acidic protons, each pKa and the major species at any point"
skills: ["5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Kw = 1.0 × 10⁻¹⁴ at 25 °C. Work in millimoles (mM × mL = mmol) to save conversions; round pH to 2 decimal places only at the end"
related: ["mb-ap-chem-8.5-revision-notes", "mb-ap-chem-8.5-practice", "mb-ap-chem-8.5-checklist"]
next: "mb-ap-chem-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A pH titration curve plots pH against volume of titrant added. The equivalence point is the middle of the steepest part."
  - "At the equivalence point of a mono-protic titration, moles of titrant added = moles of analyte at the start, whether the acid or base is strong or weak."
  - "At the half-equivalence point of a weak acid titration, [HA] = [A⁻], so pH = pKa."
  - "The pH at equivalence depends on what is left: 7 for strong + strong, above 7 for a weak acid, below 7 for a weak base."
  - "A polyprotic acid gives one jump for each proton it loses, and equal volumes of titrant for each proton."
faqs:
  - question: "Does a weak acid need less base to reach equivalence because it is only partly ionised?"
    answer: "No. As hydroxide removes the HA molecules, more HA reacts until all of it is used. The equivalence volume depends only on the moles of acid, not on its strength."
  - question: "Can I use the half-equivalence point for a strong acid?"
    answer: "No. A strong acid has no HA molecules in solution, so there is no conjugate pair to be equal. pH = pKa at half-equivalence only works for weak acids and weak bases."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a pH titration curve tells you

In Topic 4.6 a titration was a way to measure an amount. Here you add a pH probe. As titrant runs in from the burette, you record the pH after each addition and plot **pH against volume of titrant added**. That plot is a **titration curve**, and it summarises the whole experiment in one picture.

Every acid-base titration curve has the same four regions. Think of a weak acid HA being titrated with sodium hydroxide:

| Region | What has been added | Major species in the flask | How to find the pH |
|---|---|---|---|
| Start | no base | HA (barely ionised) | weak acid equilibrium (Topic 8.3) |
| Before equivalence | some OH⁻, all used up | HA and A⁻ (a buffer) | Henderson-Hasselbalch, or the Ka expression |
| Equivalence point | moles OH⁻ = moles HA at start | A⁻ only (plus Na⁺) | A⁻ is a weak base: use Kb |
| After equivalence | more OH⁻ than HA | A⁻ and excess OH⁻ | excess OH⁻ ÷ total volume |

The reaction in the flask is the one from Topic 8.4: HA(aq) + OH⁻(aq) → A⁻(aq) + H₂O(l). It goes essentially to completion, so for each mole of OH⁻ added, one mole of HA becomes one mole of A⁻.

## Strong and weak acids compared

Figure 1 shows two titrations with the same amounts. Each flask holds 30.00 mL of an acid at 0.0800 M, and the titrant is 0.100 M NaOH. One acid is HCl (strong). The other is a fictional weak acid, HQ, with Ka = 2.5 × 10⁻⁵ (pKa = 4.60).

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="sw-curve-title sw-curve-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sw-curve-title">Titration curves of a strong acid and a weak acid with sodium hydroxide</title>
<desc id="sw-curve-desc">Graph of pH from 0 to 14 against volume of 0.100 molar sodium hydroxide added, 0 to 40 millilitres. Two curves. The dashed curve, hydrochloric acid, starts at pH 1.10, stays low and rises vertically at 24.00 millilitres through pH 7.00. The solid curve, the weak acid HQ, starts higher at pH 2.85, rises quickly at first and then gently, passing pH 4.60 at 12.00 millilitres, which is marked as the half-equivalence point. Its jump at 24.00 millilitres is shorter and its equivalence point, marked, is at pH 8.62. After 24 millilitres both curves join and level off towards pH 12.4.</desc>
<line x1="80" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="142.5" y1="250" x2="142.5" y2="255"/><line x1="205" y1="250" x2="205" y2="255"/><line x1="267.5" y1="250" x2="267.5" y2="255"/><line x1="330" y1="250" x2="330" y2="255"/><line x1="392.5" y1="250" x2="392.5" y2="255"/><line x1="455" y1="250" x2="455" y2="255"/><line x1="517.5" y1="250" x2="517.5" y2="255"/><line x1="580" y1="250" x2="580" y2="255"/>
<line x1="75" y1="220" x2="80" y2="220"/><line x1="75" y1="190" x2="80" y2="190"/><line x1="75" y1="160" x2="80" y2="160"/><line x1="75" y1="130" x2="80" y2="130"/><line x1="75" y1="100" x2="80" y2="100"/><line x1="75" y1="70" x2="80" y2="70"/><line x1="75" y1="40" x2="80" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="268">0</text><text x="142.5" y="268">5</text><text x="205" y="268">10</text><text x="267.5" y="268">15</text><text x="330" y="268">20</text><text x="392.5" y="268">25</text><text x="455" y="268">30</text><text x="517.5" y="268">35</text><text x="580" y="268">40</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="254">0</text><text x="70" y="224">2</text><text x="70" y="194">4</text><text x="70" y="164">6</text><text x="70" y="134">8</text><text x="70" y="104">10</text><text x="70" y="74">12</text><text x="70" y="44">14</text>
</g>
<text x="335" y="295" text-anchor="middle" font-size="13" fill="#1d2b44">Volume of 0.100 M NaOH added (mL)</text>
<text x="22" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 140)">pH</text>
<polyline points="80.0,233.5 105.0,232.6 130.0,231.5 180.0,229.4 230.0,226.8 280.0,223.6 330.0,218.5 355.0,213.8 367.5,209.1 375.0,203.1 378.8,194.0 380.0,145.0 381.2,96.0 385.0,87.0 392.5,81.1" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="80.0,207.2 105.0,196.3 130.0,191.4 180.0,185.5 230.0,181.0 280.0,176.4 330.0,170.5 355.0,165.3 367.5,160.5 375.0,154.4 378.8,145.3 380.0,120.6 381.2,96.0 385.0,87.0 392.5,81.1 405.0,76.7 430.0,72.4 480.0,68.3 530.0,66.1 580.0,64.6" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="380" y1="250" x2="380" y2="60" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="230" y1="250" x2="230" y2="181" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<circle cx="230" cy="181" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="380" cy="120.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="374.5" y="139.5" width="11" height="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="238" y="168" font-size="12" fill="#1d2b44">half-equivalence: pH = pKa = 4.60</text>
<text x="390" y="118" font-size="12" fill="#1d2b44">weak acid equivalence: pH 8.62</text>
<text x="390" y="150" font-size="12" fill="#1d2b44">strong acid equivalence: pH 7.00</text>
<text x="120" y="244" font-size="12" fill="#1d2b44">HCl (dashed)</text>
<text x="120" y="200" font-size="12" fill="#1d2b44">HQ (solid)</text>
</svg>
<figcaption>Figure 1. Same moles of acid, same equivalence volume (24.00 mL). The weak acid (solid line) starts at a higher pH, has a flat buffer region with pH = pKa at the half-equivalence point (circle), and a basic equivalence point (shaded circle). The strong acid (dashed line) has its equivalence point at pH 7.00 (square).</figcaption>
</figure>

Four differences are worth learning from the picture:

1. **Start.** HCl is fully ionised, so pH = −log(0.0800) = 1.10. HQ is only about 2% ionised, so its pH is higher, 2.85.
2. **Buffer region.** Once some HQ has turned into Q⁻, the flask holds a conjugate pair, which resists pH change. The weak-acid curve is therefore flat in the middle. HCl forms no buffer.
3. **Equivalence pH.** HCl gives pH 7.00. HQ gives pH 8.62, because Q⁻ is a weak base.
4. **Same equivalence volume.** Both need 24.00 mL. Strength changes the **shape**, not **how much** base is needed.

## The equivalence point: moles, not pH

For an acid or base that gives or takes **one** proton (monoprotic), the equivalence point is reached when

> moles of titrant added = moles of analyte present at the start.

This is true for strong and weak acids and bases alike. If HQ is only 2% ionised at the start, how can all of it react? Each OH⁻ removes H⁺ or HQ; the equilibrium HQ ⇌ H⁺ + Q⁻ keeps shifting to the right, and hydroxide reacts with HQ directly. By the equivalence point every HQ molecule has been used.

On a curve, the equivalence point is the **middle of the steepest part** (the point of inflection), not the top of the jump. Read its volume off the x-axis, then use n = M × V.

## The half-equivalence point: pH = pKa

Halfway to the equivalence volume, exactly half of the original HA has been turned into A⁻. So **[HA] = [A⁻]**. Put that into the Ka expression:

Ka = [H₃O⁺][A⁻] / [HA], and with [A⁻] = [HA] this becomes Ka = [H₃O⁺], so **pH = pKa**.

This is the most useful single reading on a weak-acid curve. Find the equivalence volume, halve it, read the pH there, and you have pKa (and Ka = 10^(−pKa)). In Figure 1, the pH at 12.00 mL is 4.60, the pKa of HQ.

For a **weak base** B titrated with a strong acid, the same idea applies to the pair BH⁺/B. At half-equivalence [B] = [BH⁺], so the pH equals the **pKa of BH⁺**. Then pKb of B = 14.00 − pKa (at 25 °C).

## What sets the pH at the equivalence point

At the equivalence point the original acid and the added base have both been used up. The pH is fixed by **what is left in the flask**:

| Titration | Major species at equivalence | pH at equivalence (25 °C) |
|---|---|---|
| Strong acid + strong base (HCl + NaOH) | Na⁺, Cl⁻, H₂O; neither ion reacts with water | 7.00 (neutral) |
| Weak acid + strong base (HQ + NaOH) | Q⁻ (conjugate base), Na⁺ | above 7: Q⁻ + H₂O ⇌ HQ + OH⁻ |
| Weak base + strong acid (B + HCl) | BH⁺ (conjugate acid), Cl⁻ | below 7: BH⁺ + H₂O ⇌ B + H₃O⁺ |

The weak-base curve is the weak-acid curve upside down: it starts high (basic), falls slowly through a buffer region, drops steeply at equivalence, and the equivalence point sits below pH 7.

## Worked example 1: pH at four points on a weak acid curve

**Question.** For the HQ titration in Figure 1 (30.00 mL of 0.0800 M HQ, Ka = 2.5 × 10⁻⁵, titrated with 0.100 M NaOH), find: (a) the equivalence volume; (b) the pH after 18.00 mL; (c) the pH at equivalence; (d) the pH after 30.00 mL.

**(a)** n(HQ) = 30.00 mL × 0.0800 M = 2.400 mmol. At equivalence n(OH⁻) = 2.400 mmol, so V = 2.400 mmol ÷ 0.100 M = **24.00 mL**.

**(b)** 18.00 mL × 0.100 M = 1.800 mmol OH⁻, all used up.

| | HQ | OH⁻ | Q⁻ |
|---|---|---|---|
| Before reaction (mmol) | 2.400 | 1.800 | 0 |
| After reaction (mmol) | 0.600 | 0 | 1.800 |

Both members of the pair are present, so this is a buffer. Both share the same volume, so the mole ratio equals the concentration ratio:
pH = pKa + log([Q⁻]/[HQ]) = 4.60 + log(1.800 / 0.600) = 4.60 + 0.48 = **5.08**.

**(c)** At equivalence all 2.400 mmol of HQ is now Q⁻, in 30.00 + 24.00 = 54.00 mL.
[Q⁻] = 2.400 ÷ 54.00 = 0.04444 M. Kb(Q⁻) = Kw ÷ Ka = 1.0 × 10⁻¹⁴ ÷ 2.5 × 10⁻⁵ = 4.0 × 10⁻¹⁰.
[OH⁻] ≈ √(Kb × [Q⁻]) = √(4.0 × 10⁻¹⁰ × 0.04444) = 4.22 × 10⁻⁶ M, so pOH = 5.38 and **pH = 8.62**.

**(d)** 30.00 mL × 0.100 M = 3.000 mmol OH⁻; 3.000 − 2.400 = 0.600 mmol in excess, in 60.00 mL. [OH⁻] = 0.0100 M, pOH = 2.00, **pH = 12.00**. The small amount of OH⁻ made by Q⁻ is negligible beside the excess.

**Check.** Each answer sits where it should on Figure 1: 5.08 is a little above pKa (more Q⁻ than HQ), 8.62 is basic, and 12.00 is on the flat top.

## Worked example 2: reading a weak base curve

**Question.** A student titrates 25.00 mL of a solution of a fictional weak base, B, with 0.150 M HCl. The curve falls from pH 11.1, the steepest point is at **20.00 mL**, and the pH at **10.00 mL** is **9.20**. Find (a) the concentration of B; (b) Kb for B; (c) the pH at the equivalence point.

**(a)** Moles of HCl at equivalence: 20.00 mL × 0.150 M = 3.000 mmol. The reaction B + H₃O⁺ → BH⁺ + H₂O is 1:1, so n(B) = 3.000 mmol and [B] = 3.000 mmol ÷ 25.00 mL = **0.120 M**.

**(b)** 10.00 mL is half of 20.00 mL, so [B] = [BH⁺] there and pH = pKa(BH⁺) = 9.20. Then pKb = 14.00 − 9.20 = 4.80 and **Kb = 10^(−4.80) = 1.6 × 10⁻⁵**.

**(c)** At equivalence the flask holds 3.000 mmol BH⁺ in 25.00 + 20.00 = 45.00 mL: [BH⁺] = 0.06667 M. Ka(BH⁺) = 10^(−9.20) = 6.31 × 10⁻¹⁰.
[H₃O⁺] ≈ √(6.31 × 10⁻¹⁰ × 0.06667) = 6.49 × 10⁻⁶ M, so **pH = 5.19**.

**Interpretation.** The equivalence point is acidic, as it must be for a weak base titrated with a strong acid. The starting pH, 11.1, agrees with a 0.120 M base with this Kb, which is a useful check on the reading.

## Polyprotic acids: one jump per proton

A **diprotic** acid, H₂X, loses its protons one at a time. The first proton is removed (H₂X → HX⁻) before the second (HX⁻ → X²⁻) starts in earnest, as long as the two pKa values are well apart. So the curve shows **two** steep rises, and the second needs **the same volume** of titrant as the first, because each H₂X has one of each proton.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="di-curve-title di-curve-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="di-curve-title">Titration curve of a diprotic acid with sodium hydroxide</title>
<desc id="di-curve-desc">Graph of pH from 0 to 14 against volume of 0.100 molar sodium hydroxide added, 0 to 50 millilitres, for 20.00 millilitres of 0.100 molar diprotic acid H2X. The curve starts at pH 2.5. It has a first buffer region with pH 4.00 at 10 millilitres, a first steep rise at 20 millilitres through pH 6.0, a second buffer region with pH 8.00 at 30 millilitres, a second steep rise at 40 millilitres through pH 10.3, and then levels off near pH 12.2 at 50 millilitres. The major species are labelled along the curve: H2X and HX minus in the first region, HX minus at the first equivalence point, HX minus and X 2 minus in the second region, X 2 minus at the second equivalence point.</desc>
<line x1="80" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="130" y1="250" x2="130" y2="255"/><line x1="180" y1="250" x2="180" y2="255"/><line x1="230" y1="250" x2="230" y2="255"/><line x1="280" y1="250" x2="280" y2="255"/><line x1="330" y1="250" x2="330" y2="255"/><line x1="380" y1="250" x2="380" y2="255"/><line x1="430" y1="250" x2="430" y2="255"/><line x1="480" y1="250" x2="480" y2="255"/><line x1="530" y1="250" x2="530" y2="255"/><line x1="580" y1="250" x2="580" y2="255"/>
<line x1="75" y1="220" x2="80" y2="220"/><line x1="75" y1="190" x2="80" y2="190"/><line x1="75" y1="160" x2="80" y2="160"/><line x1="75" y1="130" x2="80" y2="130"/><line x1="75" y1="100" x2="80" y2="100"/><line x1="75" y1="70" x2="80" y2="70"/><line x1="75" y1="40" x2="80" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="268">0</text><text x="180" y="268">10</text><text x="280" y="268">20</text><text x="380" y="268">30</text><text x="480" y="268">40</text><text x="580" y="268">50</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="254">0</text><text x="70" y="224">2</text><text x="70" y="194">4</text><text x="70" y="164">6</text><text x="70" y="134">8</text><text x="70" y="104">10</text><text x="70" y="74">12</text><text x="70" y="44">14</text>
</g>
<text x="335" y="295" text-anchor="middle" font-size="13" fill="#1d2b44">Volume of 0.100 M NaOH added (mL)</text>
<text x="22" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 140)">pH</text>
<polyline points="80.0,212.4 90.0,207.4 110.0,201.0 140.0,195.4 180.0,190.0 220.0,184.5 250.0,178.7 270.0,171.1 276.0,165.9 280.0,160.0 284.0,154.1 290.0,148.9 310.0,141.3 340.0,135.5 380.0,130.0 420.0,124.5 450.0,118.7 470.0,110.9 476.0,105.1 480.0,96.1 484.0,87.2 490.0,81.7 510.0,74.8 540.0,70.6 580.0,67.7" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="180" cy="190" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="380" cy="130" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="274.5" y="154.5" width="11" height="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="474.5" y="90.6" width="11" height="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="215" text-anchor="middle" font-size="11" fill="#1d2b44">pH 4.00 = pKa₁</text>
<text x="180" y="230" text-anchor="middle" font-size="11" fill="#1d2b44">H₂X and HX⁻</text>
<text x="292" y="178" font-size="11" fill="#1d2b44">1st equivalence: HX⁻</text>
<text x="380" y="155" text-anchor="middle" font-size="11" fill="#1d2b44">pH 8.00 = pKa₂</text>
<text x="380" y="170" text-anchor="middle" font-size="11" fill="#1d2b44">HX⁻ and X²⁻</text>
<text x="470" y="58" text-anchor="middle" font-size="11" fill="#1d2b44">2nd equivalence: X²⁻</text>
</svg>
<figcaption>Figure 2. 20.00 mL of 0.100 M H₂X (fictional; pKa₁ = 4.00, pKa₂ = 8.00) titrated with 0.100 M NaOH. Circles mark the two half-equivalence points; squares mark the equivalence points at 20.00 mL and 40.00 mL.</figcaption>
</figure>

How to read a polyprotic curve:

- **Number of acidic protons** = number of clear jumps, provided each proton is acidic enough to show one. (Phosphoric acid, H₃PO₄, has three acidic protons but shows only two clear jumps with NaOH: its third proton is so weakly acidic that the last jump is lost in the high pH of excess hydroxide.)
- **Equal spacing.** The second equivalence volume is twice the first (40.00 mL against 20.00 mL in Figure 2). The moles of acid come from the **first** equivalence volume.
- **Each pKa.** Halfway to the first equivalence point, pH ≈ pKa₁ (here 4.00 at 10.00 mL). Halfway between the first and second equivalence points, pH ≈ pKa₂ (here 8.00 at 30.00 mL).
- **Major species.** Before the first jump: H₂X and HX⁻. At the first equivalence point: mainly HX⁻. Between the jumps: HX⁻ and X²⁻. At the second equivalence point: mainly X²⁻. After it: X²⁻ and excess OH⁻.

You need to reason about which species are present in **large** or **small** amounts at any point. You are not expected to calculate the concentration of every species along a polyprotic curve; that is outside the course. Full pH calculations are for monoprotic titrations, as in the worked examples above.

## Worked example 3: identifying species on a diprotic curve

**Question.** Use Figure 2. (a) How many moles of H₂X were titrated? (b) Name the two most abundant acid-containing species at 30.00 mL and say how their amounts compare. (c) At 20.00 mL, is H₂X or X²⁻ present in larger amount?

**(a)** First equivalence at 20.00 mL: 20.00 mL × 0.100 M = **2.00 mmol** of H₂X. (Using 40.00 mL would double-count: that volume removes both protons.)

**(b)** 30.00 mL is halfway between 20.00 and 40.00 mL. All the H₂X has become HX⁻, and half of that HX⁻ has become X²⁻. So **HX⁻ and X²⁻ are present in equal amounts**, which is why the pH there equals pKa₂.

**(c)** At the first equivalence point HX⁻ dominates. A little HX⁻ gives up a proton (making X²⁻) and a little accepts one (making H₂X). Their amounts are both small and close to each other, which is why the pH there, about 6.0, lies roughly midway between pKa₁ and pKa₂. Neither is a major species. This qualitative answer is all the course asks for.

## Common misconceptions

- **"The equivalence point is always at pH 7."** Only for strong acid with strong base. Weak acid gives a basic equivalence point; weak base gives an acidic one.
- **"A weak acid needs less base because it is only partly ionised."** The equilibrium shifts as OH⁻ removes acid, so every HA molecule is eventually used. Equal moles of acid need equal moles of base.
- **"The half-equivalence point is where pH is half of the equivalence pH."** It is where the **volume** is half the equivalence volume. The pH there equals pKa.
- **"pH = pKa at half-equivalence works for HCl too."** A strong acid has no undissociated HA, so there is no pair to balance.
- **"The equivalence point is where the curve flattens at the top."** It is the middle of the steep rise.
- **"For a diprotic acid, use the second equivalence volume to find the moles of acid with a 1:1 ratio."** That volume removed two protons per molecule. Use the first equivalence volume, or halve the second.
- **"Adding water to the flask before titrating changes the equivalence volume."** It changes the starting pH a little, but the moles of acid, and so the equivalence volume, stay the same.

## Where this leads

Next, Topic 8.6, [Molecular Structure of Acids and Bases](/advanced-course-resources/chemistry/8-6-molecular-structure-acids-bases-study-guide/), explains *why* some acids are strong and others weak, which is what gives the curves in Figure 1 their different shapes. Topic 8.7 shows how to choose an indicator whose colour change matches the equivalence pH, and Topics 8.8 to 8.10 study the buffer region in detail. Look back at [Acid-Base Reactions and Buffers](/advanced-course-resources/chemistry/8-4-acid-base-reactions-buffers-study-guide/) for the mixing calculations used in Worked example 1. Now try the [practice questions](/advanced-course-resources/chemistry/8-5-acid-base-titrations-practice/), then use the [revision notes](/advanced-course-resources/chemistry/8-5-acid-base-titrations-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-5-acid-base-titrations-checklist/).

Reading about titrations or using a simulation does not replace the hands-on laboratory work the course requires.
