---
resourceId: "mb-ap-chem-8.9-study-guide"
title: "Henderson-Hasselbalch Equation: Study Guide (Chemistry 8.9)"
description: "Use the Henderson-Hasselbalch equation to find the pH of a buffer from the pKa and the ratio of conjugate base to acid, and explain why small additions barely move the pH."
course: "chemistry"
unit: 8
topics: ["8.9"]
resourceType: "study-guide"
prerequisites:
  - "pH, pKa and logarithms (Topics 8.1 to 8.3 and 8.7)"
  - "What a buffer is and how its two components react with added acid or base (Topic 8.8)"
prerequisiteResources: ["mb-ap-chem-8.8-study-guide"]
learningObjectives:
  - "Calculate the pH of a buffer from the pKa of the weak acid and the concentrations or amounts of the conjugate pair"
  - "Use the ratio [A⁻]/[HA] to say whether the buffer pH is above, below or equal to the pKa"
  - "Work backwards from a target pH to the ratio of components needed, and choose a suitable conjugate pair"
  - "Apply the equation to buffers made from a weak base and its conjugate acid"
  - "Explain why adding a small amount of acid or base to a buffer changes the ratio, and so the pH, only slightly"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "pKa values at 25 °C: acetic acid 4.76, ammonium ion 9.25, dihydrogen phosphate ion 7.20; K_w = 1.0 × 10⁻¹⁴. Acids named with letters are fictional. Keep unrounded values to the end; give pH to two decimal places"
related: ["mb-ap-chem-8.9-revision-notes", "mb-ap-chem-8.9-practice", "mb-ap-chem-8.9-checklist"]
next: "mb-ap-chem-8.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "For a buffer of a weak acid HA and its conjugate base A⁻: pH = pKa + log([A⁻]/[HA])."
  - "When [A⁻] = [HA], pH = pKa. More base than acid gives pH above pKa; more acid gives pH below pKa."
  - "Both components share one volume, so you can use the ratio of moles instead of the ratio of concentrations."
  - "For a weak-base buffer such as NH₃/NH₄⁺, use the pKa of the conjugate acid (pKa = 14.00 − pKb at 25 °C)."
  - "A small addition of acid or base changes [A⁻]/[HA] only a little, so the log term, and the pH, barely move."
faqs:
  - question: "Do I need to derive the Henderson-Hasselbalch equation?"
    answer: "No. You will not be asked to derive it. It helps to see that it comes from rearranging the K_a expression, because that tells you when it works and why the ratio matters."
  - question: "Will I have to calculate the new pH after adding acid or base to a buffer?"
    answer: "Not in this course's exam: that calculation is outside the assessed content. You do need to explain, in words, why the pH changes only a little. This guide shows one background example to make the idea concrete."
  - question: "Why can I use moles instead of concentrations?"
    answer: "Both components are in the same solution, so each concentration is moles divided by the same volume. The volume cancels in the ratio [A⁻]/[HA]."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From K_a to a buffer equation

In [Topic 8.8](/advanced-course-resources/chemistry/8-8-properties-buffers-study-guide/) you saw that a buffer holds large amounts of both members of a conjugate pair: a weak acid HA and its conjugate base A⁻. This topic answers the next question: **what pH does a given buffer have?**

The answer comes straight from the equilibrium you already know:

HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)  K_a = [H₃O⁺][A⁻] / [HA]

Rearrange for [H₃O⁺]:

[H₃O⁺] = K_a × [HA] / [A⁻]

Now take −log of both sides. Because −log(K_a) = pKa and −log of a ratio flips it:

**pH = pKa + log([A⁻] / [HA])**

This is the **Henderson-Hasselbalch equation**. You will not be asked to derive it, but the three lines above show why it holds: it is the K_a expression written in log form. It is valid whenever the solution is at equilibrium, but it is most useful for buffers, where both [HA] and [A⁻] are large.

### Why the starting amounts work

In a buffer, the weak acid ionises very little, and the A⁻ already present pushes its equilibrium further to the left (the common-ion effect from [Topic 7.12](/advanced-course-resources/chemistry/7-12-common-ion-effect-study-guide/)). So the equilibrium [HA] and [A⁻] are almost exactly the amounts you put in. That is why you can substitute the concentrations you mixed, with no ICE table.

## Reading the equation

The log term decides everything. The pH is the pKa, shifted up or down by log of the ratio.

| [A⁻]/[HA] | log([A⁻]/[HA]) | pH compared with pKa | Form present in larger amount |
|---|---|---|---|
| 0.10 | −1.00 | pKa − 1.00 | HA (acid) |
| 0.50 | −0.30 | pKa − 0.30 | HA (acid) |
| 1.0 | 0 | pH = pKa | equal |
| 2.0 | +0.30 | pKa + 0.30 | A⁻ (base) |
| 10 | +1.00 | pKa + 1.00 | A⁻ (base) |

This is the same rule as in [Topic 8.7](/advanced-course-resources/chemistry/8-7-ph-pka-study-guide/), seen from the other side. There you compared pH with pKa to predict which form dominates. Here you use which form dominates (the ratio) to predict the pH.

Two useful shortcuts:

- **Equal amounts give pH = pKa.** To make a buffer at a chosen pH, start with an acid whose pKa is close to that pH.
- **Each tenfold change in the ratio moves the pH by one unit.** Doubling the ratio moves it by only 0.30. Most practical buffers keep the ratio between about 0.1 and 10, so their pH lies within about one unit of the pKa. Outside that range one component is so small that it is soon used up.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="hh-title hh-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hh-title">Buffer pH against the ratio of acetate to acetic acid</title>
<desc id="hh-desc">A straight line graph. The horizontal axis shows the ratio of acetate to acetic acid on a logarithmic scale from 0.1 to 10. The vertical axis shows pH from 3.76 to 5.76. Marked points: ratio 0.1 gives pH 3.76, ratio 0.5 gives 4.46, ratio 1 gives 4.76 which equals the pKa, ratio 2 gives 5.06, and ratio 10 gives 5.76. The left half of the graph is labelled more acid than base; the right half more base than acid.</desc>
<line x1="100" y1="250" x2="560" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="100" y1="250" x2="100" y2="40" stroke="#1d2b44" stroke-width="2"/>
<line x1="330" y1="40" x2="330" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="100" y1="150" x2="560" y2="150" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="268">0.1</text><text x="260.8" y="268">0.5</text><text x="330" y="268">1</text><text x="399.2" y="268">2</text><text x="560" y="268">10</text>
<text x="330" y="292" font-size="13">[CH₃COO⁻] / [CH₃COOH] (logarithmic scale)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="92" y="254">3.76</text><text x="92" y="154">4.76</text><text x="92" y="54">5.76</text>
</g>
<text x="30" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 30 150)">pH</text>
<line x1="100" y1="250" x2="560" y2="50" stroke="#1d2b44" stroke-width="3"/>
<g fill="#1d2b44">
<circle cx="100" cy="250" r="5"/><circle cx="260.8" cy="180.1" r="5"/><circle cx="330" cy="150" r="6"/><circle cx="399.2" cy="119.9" r="5"/><circle cx="560" cy="50" r="5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="270" y="198">4.46</text><text x="340" y="168">pH = pKa = 4.76</text><text x="408" y="138">5.06</text><text x="540" y="72" text-anchor="end">5.76</text>
<text x="215" y="100" text-anchor="middle">more acid than base</text>
<text x="445" y="232" text-anchor="middle">more base than acid</text>
</g>
</svg>
<figcaption>Figure 1. Acetic acid/acetate buffers (pKa 4.76). On a log scale for the ratio, pH rises in a straight line with slope 1: a tenfold rise in the ratio adds 1.00 to the pH, and doubling it adds 0.30. The dashed lines cross at ratio 1, where pH = pKa.</figcaption>
</figure>

## Moles or concentrations?

Both components are dissolved in the same solution, so each concentration is "moles ÷ the same volume". The volume cancels:

[A⁻]/[HA] = (n_A⁻ ÷ V) / (n_HA ÷ V) = n_A⁻ / n_HA

So when you mix two solutions to make a buffer, you can work in moles and skip the new volume. The same idea explains why **diluting a buffer with water does not change its pH** in this model: the ratio stays the same.

## Buffers made from a weak base

A buffer can also be made from a weak base B and its conjugate acid BH⁺, for example NH₃ and NH₄Cl. Write it as an acid buffer: the acid is BH⁺, the conjugate base is B.

pH = pKa(BH⁺) + log([B] / [BH⁺])

If you are given K_b for the base, convert first: pKb = −log K_b, then pKa = 14.00 − pKb (at 25 °C). For ammonia, pKa(NH₄⁺) = 9.25, so pKb(NH₃) = 4.75. Using pKb in place of pKa is a common error; it gives a pH that is far too low.

## Why a small addition barely changes the pH

When a little strong acid is added, the A⁻ in the buffer reacts with it: A⁻ + H₃O⁺ → HA + H₂O. When a little strong base is added, HA reacts with it: HA + OH⁻ → A⁻ + H₂O. Either way, the added acid or base is converted into the buffer's own components. The amounts of HA and A⁻ shift a little, but both stay large.

The pH depends on **log of the ratio**. If both amounts are large, a small shift changes the ratio only slightly, and the log of a number close to 1 is close to 0. So the pH moves very little. Without the buffer, the same amount of acid would change the pH by several units.

**Background illustration (this calculation is not assessed).** One litre of buffer holds 0.100 mol HA and 0.100 mol A⁻. Adding 0.0010 mol of H₃O⁺ turns the amounts into 0.099 mol HA and 0.101 mol A⁻. The ratio falls from 1.000 to 0.980, and the pH falls by only 0.009. The same 0.0010 mol of H₃O⁺ in one litre of pure water takes the pH from 7.00 to 3.00, a change of 4 units. You need the reasoning in the paragraph above, not this arithmetic.

## Worked example 1: pH from concentrations

**Question.** A buffer contains 0.250 M acetic acid, CH₃COOH, and 0.400 M sodium acetate, CH₃COONa. The pKa of acetic acid is 4.76. Find the pH.

1. Identify the pair: HA = CH₃COOH (0.250 M), A⁻ = CH₃COO⁻ (0.400 M; sodium acetate is fully dissociated).
2. Ratio: [A⁻]/[HA] = 0.400 ÷ 0.250 = 1.60.
3. pH = 4.76 + log(1.60) = 4.76 + 0.204 = **4.96**.

**Check.** There is more base than acid, so the pH must be a little above the pKa. 4.96 is 0.20 above 4.76, which fits a ratio between 1 and 2 (between +0 and +0.30).

## Worked example 2: mixing solutions of a weak-base buffer

**Question.** 50.0 mL of 0.200 M NH₃ is mixed with 30.0 mL of 0.150 M NH₄Cl. pKa of NH₄⁺ = 9.25. Find the pH of the mixture.

1. Moles of base: n(NH₃) = 0.0500 L × 0.200 mol L⁻¹ = 0.0100 mol.
2. Moles of acid: n(NH₄⁺) = 0.0300 L × 0.150 mol L⁻¹ = 0.00450 mol.
3. Both are now in the same 80.0 mL, so use the mole ratio: n(NH₃)/n(NH₄⁺) = 0.0100 ÷ 0.00450 = 2.22.
4. pH = 9.25 + log(2.22) = 9.25 + 0.347 = **9.60**.

**Check.** Using concentrations gives the same answer: 0.125 M ÷ 0.05625 M = 2.22. More base than acid, so pH above 9.25, as expected. A common mistake is to use the original molarities (0.200 and 0.150), which ignores the different volumes mixed.

## Worked example 3: designing a buffer for a target pH

**Question.** A biology lab needs a buffer at pH 7.40. It has three conjugate pairs: acetic acid/acetate (pKa 4.76), H₂PO₄⁻/HPO₄²⁻ (pKa 7.20) and NH₄⁺/NH₃ (pKa 9.25).
(a) Which pair should it use? (b) If [H₂PO₄⁻] = 0.050 M, what [HPO₄²⁻] is needed?

**(a)** Choose the pKa closest to the target pH: **H₂PO₄⁻/HPO₄²⁻**, pKa 7.20. With acetate the ratio would have to be about 440; with ammonium about 0.014. Both are far outside 0.1 to 10, so one component would be almost absent and the solution would hardly buffer at all.

**(b)** Rearrange: log([HPO₄²⁻]/[H₂PO₄⁻]) = pH − pKa = 7.40 − 7.20 = 0.20.
[HPO₄²⁻]/[H₂PO₄⁻] = 10^0.20 = 1.58.
[HPO₄²⁻] = 1.58 × 0.050 M = **0.079 M**.

**Check.** The target pH is above the pKa, so the base form (HPO₄²⁻) must be the larger one. It is.

## Worked example 4: finding pKa from a measured buffer pH

**Question.** A student makes a buffer from a fictional weak acid HQ and its sodium salt with [Q⁻]/[HQ] = 0.40. A calibrated pH meter reads 5.12. Find the pKa and K_a of HQ.

1. pKa = pH − log([Q⁻]/[HQ]) = 5.12 − log(0.40) = 5.12 − (−0.398) = **5.52**.
2. K_a = 10^−5.52 = **3.0 × 10⁻⁶**.

**Check.** The ratio is less than 1 (more acid than base), so the pH must be below the pKa: 5.12 < 5.52. This is also how a pH measurement on a buffer with equal amounts of HA and A⁻ gives the pKa directly: pH = pKa when the ratio is 1.

## Common misconceptions

- **Upside-down ratio.** It is base over acid: [A⁻]/[HA]. Check the direction: more base must give pH above pKa.
- **Using pKb for a base buffer.** For NH₃/NH₄⁺, use pKa(NH₄⁺) = 9.25, not pKb(NH₃) = 4.75.
- **Using molarities from before mixing.** When different volumes are mixed, use moles (or the new concentrations).
- **"A buffer always has pH 7."** A buffer holds its pH near its own pKa. An acetate buffer sits near 4.76; an ammonia buffer near 9.25.
- **"Adding acid to a buffer does nothing at all."** The pH does fall, but only slightly, because the ratio changes only slightly.
- **"Diluting a buffer changes its pH."** The ratio, and so the pH, stays the same in this model. What dilution does change is how much acid or base the buffer can absorb; that is Topic 8.10.
- **Using the equation for a weak acid on its own.** With no added A⁻ there is no meaningful ratio. Use the weak-acid method from Topic 8.3 instead.

## Where this leads

Next, [Topic 8.10](/advanced-course-resources/chemistry/8-10-buffer-capacity-study-guide/) asks how much acid or base a buffer can absorb, and why that depends on the total concentration and on the ratio you used here. Try the [practice questions](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-checklist/) to consolidate.
