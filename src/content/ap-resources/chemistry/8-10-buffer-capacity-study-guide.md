---
resourceId: "mb-ap-chem-8.10-study-guide"
title: "Buffer Capacity: Study Guide (Chemistry 8.10)"
description: "Learn what buffer capacity is, why a more concentrated buffer with the same ratio has the same pH but more capacity, and how the ratio decides which way a buffer resists better."
course: "chemistry"
unit: 8
topics: ["8.10"]
resourceType: "study-guide"
prerequisites:
  - "How buffer components react with added strong acid and strong base (Topic 8.8)"
  - "The Henderson-Hasselbalch equation (Topic 8.9)"
  - "Limiting-reactant stoichiometry in moles"
prerequisiteResources: ["mb-ap-chem-8.9-study-guide"]
learningObjectives:
  - "Define buffer capacity and say which buffer component limits the amount of added acid, and which the amount of added base"
  - "Explain why raising the concentrations of both components at a fixed ratio keeps the pH the same but increases capacity"
  - "Predict whether a buffer with unequal amounts of acid and base resists added acid or added base better"
  - "Use moles of each component to compare the capacities of different buffers"
  - "Explain how errors in preparing or testing a buffer affect measured pH and measured capacity"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "pKa values at 25 °C: acetic acid 4.76, NH₄⁺ 9.25. The acid HL is fictional (pKa 5.30). Work in moles for every capacity comparison"
related: ["mb-ap-chem-8.10-revision-notes", "mb-ap-chem-8.10-practice", "mb-ap-chem-8.10-checklist"]
next: "mb-ap-chem-8.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Buffer capacity is how much strong acid or strong base a buffer can neutralise before its pH starts to change sharply."
  - "The conjugate base A⁻ uses up added acid; the weak acid HA uses up added base. Each one can neutralise at most its own number of moles."
  - "Same ratio, higher concentrations: same pH, greater capacity. Diluting a buffer keeps its pH but lowers its capacity per litre."
  - "More HA than A⁻: greater capacity for added base. More A⁻ than HA: greater capacity for added acid."
faqs:
  - question: "Is buffer capacity the same as buffer pH?"
    answer: "No. The pH is set by the pKa and the ratio [A⁻]/[HA]. Capacity is set by how many moles of each component are present. Two buffers can share a pH and have very different capacities."
  - question: "Does a buffer work perfectly until a component runs out, then fail all at once?"
    answer: "Not quite. The pH drifts more and more as the smaller component gets low, and changes sharply once it is used up. The number of moles of that component is the upper limit of what the buffer can neutralise."
  - question: "Will I have to calculate the pH after acid is added to a buffer?"
    answer: "No. That calculation is not assessed in this course. You do need to reason about capacity using the amounts of each component, and to explain the effect of changes in concentration and ratio."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What buffer capacity means

In [Topic 8.9](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-study-guide/) you found the pH of a buffer from its pKa and the ratio [A⁻]/[HA]. That tells you **where** the pH sits. It does not tell you **how much** acid or base the buffer can take before it stops working. That second idea is **buffer capacity**.

**Buffer capacity** is the amount of strong acid or strong base a buffer can neutralise while its pH stays nearly constant. To compare buffers fairly, compare the same volume of each (for example, one litre). Each component handles one direction:

- Added acid is used up by the conjugate base: A⁻ + H₃O⁺ → HA + H₂O
- Added base is used up by the weak acid: HA + OH⁻ → A⁻ + H₂O

Both reactions go essentially to completion, one mole for one mole. So:

- the most strong acid a buffer can neutralise is **the number of moles of A⁻** it contains;
- the most strong base it can neutralise is **the number of moles of HA** it contains.

Once the relevant component is used up, any further acid or base has nothing to react with. It stays in solution as H₃O⁺ or OH⁻, and the pH changes sharply. In practice the pH starts to drift before that point, as the smaller component gets low, so the number of moles is an **upper limit**.

## Same ratio, more concentrated: same pH, more capacity

Compare two acetic acid/acetate buffers, each 1.00 L:

| Buffer | [CH₃COOH] | [CH₃COO⁻] | Ratio | pH | Most HCl it can neutralise | Most NaOH it can neutralise |
|---|---|---|---|---|---|---|
| P | 0.50 M | 0.50 M | 1 | 4.76 | 0.50 mol | 0.50 mol |
| Q | 0.050 M | 0.050 M | 1 | 4.76 | 0.050 mol | 0.050 mol |

The ratio is the same, so the Henderson-Hasselbalch equation gives the same pH. But P holds ten times as many moles of each component, so its capacity is ten times larger.

This is the first big idea of the topic: **raising the concentrations of both components, while keeping their ratio fixed, leaves the pH unchanged and increases the capacity.** The reverse is also true. Diluting a buffer with water keeps the ratio, and so the pH, but each millilitre now holds fewer moles to react with added acid or base, so its capacity per litre (or per sample) falls.

## Unequal amounts: capacity is lopsided

Now look at a buffer with more acid than base: Buffer R, 1.00 L with 0.30 M CH₃COOH and 0.10 M CH₃COO⁻. Its pH is 4.76 + log(0.10/0.30) = 4.28.

- It can neutralise up to 0.30 mol of added **base** (limited by HA).
- It can neutralise only up to 0.10 mol of added **acid** (limited by A⁻).

So R resists added base three times better than added acid. This is the second big idea:

- **More conjugate acid than base → greater capacity for added base.**
- **More conjugate base than acid → greater capacity for added acid.**

A buffer with equal amounts (ratio 1) has equal capacity in both directions. That is why a buffer works best, in both directions, when its pH is close to its pKa.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="cap-title cap-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cap-title">Moles of weak acid and conjugate base in three one-litre buffers</title>
<desc id="cap-desc">A bar chart with two bars per buffer. Solid bars show moles of acetic acid, which limit added base. Striped bars show moles of acetate, which limit added acid. Buffer P: 0.50 mol of each, pH 4.76. Buffer Q: 0.050 mol of each, pH 4.76. Buffer R: 0.30 mol acetic acid and 0.10 mol acetate, pH 4.28. P and Q have the same pH but P holds ten times as much of each component. R holds more acid than base, so it can absorb more added base than added acid.</desc>
<defs>
<pattern id="stripe810" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="3"/>
</pattern>
</defs>
<line x1="70" y1="230" x2="610" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="230" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="234">0</text><text x="62" y="134">0.25</text><text x="62" y="34">0.50</text>
</g>
<text x="22" y="130" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 130)">amount (mol)</text>
<rect x="110" y="30" width="50" height="200" fill="#1d2b44"/>
<rect x="170" y="30" width="50" height="200" fill="url(#stripe810)" stroke="#1d2b44" stroke-width="2"/>
<rect x="280" y="210" width="50" height="20" fill="#1d2b44"/>
<rect x="340" y="210" width="50" height="20" fill="url(#stripe810)" stroke="#1d2b44" stroke-width="2"/>
<rect x="450" y="110" width="50" height="120" fill="#1d2b44"/>
<rect x="510" y="190" width="50" height="40" fill="url(#stripe810)" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="135" y="24">0.50</text><text x="195" y="24">0.50</text>
<text x="305" y="204">0.050</text><text x="365" y="204">0.050</text>
<text x="475" y="104">0.30</text><text x="535" y="184">0.10</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="165" y="250">Buffer P</text><text x="165" y="266">pH 4.76</text>
<text x="335" y="250">Buffer Q</text><text x="335" y="266">pH 4.76</text>
<text x="505" y="250">Buffer R</text><text x="505" y="266">pH 4.28</text>
</g>
<rect x="150" y="284" width="16" height="14" fill="#1d2b44"/>
<text x="172" y="296" font-size="12" fill="#1d2b44">CH₃COOH (limits added base)</text>
<rect x="370" y="284" width="16" height="14" fill="url(#stripe810)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="392" y="296" font-size="12" fill="#1d2b44">CH₃COO⁻ (limits added acid)</text>
</svg>
<figcaption>Figure 1. Three 1.00 L acetate buffers. Solid bars are the weak acid; striped bars are the conjugate base; every bar is labelled with its value. The heights of a pair set the capacity; their ratio sets the pH. P and Q share a pH but differ tenfold in capacity. R is lopsided: strong against added base, weak against added acid.</figcaption>
</figure>

## How to compare capacities: a short method

1. Convert every component to **moles** (concentration × volume). Capacity depends on amount, not concentration alone.
2. For added **acid**, compare moles of the **conjugate base**. For added **base**, compare moles of the **weak acid**.
3. Compare the amount to be added with the amount of the limiting component. If the addition is smaller, the buffer copes and the pH changes slightly. If it is larger, the buffer is overwhelmed and the pH changes sharply.
4. To raise capacity without changing pH, raise both amounts by the same factor.

## Worked example 1: same pH, different survival

**Question.** 0.060 mol of HCl is added separately to 1.00 L of Buffer P and to 1.00 L of Buffer Q (table above). Describe what happens to the pH of each.

1. Both buffers start at pH 4.76.
2. **Buffer P** has 0.50 mol CH₃COO⁻. The 0.060 mol of H₃O⁺ is all used up: CH₃COO⁻ falls to 0.44 mol and CH₃COOH rises to 0.56 mol. Both components are still large, so the ratio changes only a little and the pH falls only slightly.
3. **Buffer Q** has only 0.050 mol CH₃COO⁻. It is used up completely, and 0.060 − 0.050 = 0.010 mol of H₃O⁺ is left with nothing to react with. That excess strong acid in about 1 L takes the pH sharply down, to roughly 2.

**Interpretation.** The two buffers had the same pH, but only P had the capacity to absorb this much acid. Capacity, not pH, decided the outcome.

## Worked example 2: which way does a lopsided buffer resist better?

**Question.** A buffer is 0.500 L of 0.24 M HL and 0.060 M NaL (HL is a fictional weak acid, pKa 5.30).
(a) Find its pH. (b) Will it keep its pH nearly constant if 0.040 mol of NaOH is added? (c) If 0.040 mol of HCl is added instead?

**(a)** n(HL) = 0.500 L × 0.24 mol L⁻¹ = 0.120 mol; n(L⁻) = 0.500 L × 0.060 mol L⁻¹ = 0.030 mol.
pH = 5.30 + log(0.030 / 0.120) = 5.30 − 0.60 = **4.70**.

**(b)** Added base is used up by HL. 0.040 mol is less than the 0.120 mol of HL available. After the reaction: HL = 0.080 mol, L⁻ = 0.070 mol. Both remain large, so **the buffer copes**: the pH rises a little.

**(c)** Added acid is used up by L⁻. 0.040 mol is **more** than the 0.030 mol of L⁻ available. All the L⁻ is used, and 0.010 mol of H₃O⁺ is left over (0.020 M in 0.500 L). **The buffer is overwhelmed** and the pH drops sharply.

**Interpretation.** With four times as much acid as base, this buffer has a much greater capacity for added base than for added acid. The same 0.040 mol is harmless one way and fatal the other.

## Investigating capacity in the lab

A common way to compare buffers is to titrate a measured sample with a standard strong base (or acid) and record the volume needed to change the pH by a set amount, such as one unit. A larger volume means a larger capacity. Because the result depends on both a volume and a concentration, errors in either one change the measured capacity.

## Worked example 3: how errors affect the results

**Question.** A student tests 25.00 mL samples of a buffer that is 0.100 M in HA and 0.100 M in A⁻. She titrates each with NaOH labelled 0.100 M and calculates capacity as (volume of NaOH) × 0.100 mol L⁻¹. For each error, state the effect on (i) the measured starting pH and (ii) the calculated capacity.

**Error 1: the NaOH is really 0.090 M** (it was made up too dilute).
(i) **No effect** on the starting pH; the buffer itself is unchanged.
(ii) Each sample holds 0.02500 L × 0.100 mol L⁻¹ = 0.00250 mol HA. With weaker NaOH, she needs more volume to deliver the same moles (27.8 mL instead of 25.0 mL to use up all the HA). She multiplies that larger volume by 0.100, so her capacity comes out **about 11% too high**.

**Error 2: she rinses the pipette with distilled water, not with buffer, so some water dilutes each sample.**
(i) **No significant effect** on pH: dilution leaves [A⁻]/[HA] the same.
(ii) Each "25.00 mL" sample contains slightly less buffer, so fewer moles of HA and A⁻. The measured capacity is **too low**. (If 0.50 mL of water is left in the pipette, the sample holds only 24.50 mL of buffer: 2% fewer moles.)

**Error 3: the pH meter was not calibrated and reads 0.20 units too high throughout.**
(i) The starting pH is reported **0.20 too high**.
(ii) If she titrates until the pH has **changed** by one unit, the constant offset cancels, so the capacity is **not affected**. If she instead titrates to a fixed pH reading, the endpoint is reached early and the capacity is too low.

**Lesson.** Pay attention to what a measurement depends on. pH depends on the ratio; capacity depends on the amounts. An error that changes amounts but not the ratio affects capacity only.

## Common misconceptions

- **"A more concentrated buffer has a lower pH."** Not if the ratio is the same. pH depends on the ratio; capacity depends on the amounts.
- **"Diluting a buffer does not change it at all."** The pH stays the same, but the capacity of each litre (or each sample) falls.
- **"The total amount decides capacity in both directions."** For added acid, only the conjugate base counts; for added base, only the weak acid counts.
- **Mixing up the directions.** A buffer rich in HA is good against added **base**, not added acid.
- **Comparing concentrations when the volumes differ.** Capacity is about moles. 100 mL of 0.50 M holds the same moles as 1.00 L of 0.050 M.
- **"A buffer keeps the pH exactly constant until it fails."** The pH changes slightly with every addition, more as the limiting component runs low, and sharply once it is used up.

## Where this leads

Next, [Topic 8.11](/advanced-course-resources/chemistry/8-11-ph-solubility-study-guide/) uses Le Châtelier's principle to explain why the solubility of some salts depends on pH. Try the [practice questions](/advanced-course-resources/chemistry/8-10-buffer-capacity-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-10-buffer-capacity-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-10-buffer-capacity-checklist/) to consolidate.
