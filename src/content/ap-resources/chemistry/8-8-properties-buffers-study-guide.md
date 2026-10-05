---
resourceId: "mb-ap-chem-8.8-study-guide"
title: "Properties of Buffers: Study Guide (Chemistry 8.8)"
description: "Learn what a buffer contains, which reactions remove added acid or base, why that keeps the pH almost steady, and how to decide whether a mixture is a buffer."
course: "chemistry"
unit: 8
topics: ["8.8"]
resourceType: "study-guide"
prerequisites:
  - "Conjugate acid–base pairs and weak acid and base equilibria (Topics 8.1 to 8.3)"
  - "Reactions of strong acids and bases with weak bases and acids (Topic 8.4)"
  - "Comparing pH with pK_a (Topic 8.7)"
prerequisiteResources: ["mb-ap-chem-8.7-study-guide"]
learningObjectives:
  - "Describe a buffer as a solution with large concentrations of both members of a conjugate acid–base pair"
  - "Write the net ionic equations for the reactions that remove added strong acid and added strong base from a buffer"
  - "Explain, at the particle level, why these reactions keep the pH of a buffer almost constant"
  - "Track the amounts of the two buffer components after a small amount of strong acid or base is added"
  - "Decide whether a mixture is a buffer, including mixtures that become buffers after a reaction"
skills: ["6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "25 °C. Acetic acid K_a = 1.8 × 10⁻⁵. Amounts of buffer components are in moles; work out what reacts before thinking about pH"
related: ["mb-ap-chem-8.8-revision-notes", "mb-ap-chem-8.8-practice", "mb-ap-chem-8.8-checklist"]
next: "mb-ap-chem-8.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A buffer contains large amounts of both members of a conjugate pair: a weak acid and its conjugate base (HA and A⁻), or a weak base and its conjugate acid (B and BH⁺)."
  - "The conjugate base removes added acid: A⁻ + H₃O⁺ → HA + H₂O. The conjugate acid removes added base: HA + OH⁻ → A⁻ + H₂O."
  - "These reactions swap a strong acid or base for a weak one, so the pH changes only slightly."
  - "Each addition turns some of one buffer component into the other. The buffer keeps working only while both are still present in large amounts."
  - "A strong acid with its salt (for example HCl with NaCl) is not a buffer, because its conjugate base is far too weak to react with added acid."
faqs:
  - question: "Does a buffer always have a pH of 7?"
    answer: "No. A buffer holds the pH near the pK_a of its weak acid. An acetic acid–acetate buffer stays near pH 4.7; an ammonia–ammonium buffer stays near pH 9.3."
  - question: "Do the weak acid and its conjugate base in a buffer react with each other?"
    answer: "Transferring a proton from HA to A⁻ just gives A⁻ and HA again, so there is no overall change. The two can sit side by side in large amounts, which is exactly what makes the buffer work."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a buffer is

Add a few drops of strong acid to pure water and the pH crashes. Add the same drops to blood or to a well-made lab buffer, and the pH barely moves. A solution that resists changes in pH when small amounts of acid or base are added is a **buffer**.

The definition you need is about what is inside the solution:

> A **buffer** contains large concentrations of **both members of a conjugate acid–base pair**.

There are two types:

- a **weak acid and its conjugate base**, for example acetic acid, CH₃COOH, with acetate ions from sodium acetate, CH₃COONa;
- a **weak base and its conjugate acid**, for example ammonia, NH₃, with ammonium ions from ammonium chloride, NH₄Cl.

"Large" means both are present at concentrations far bigger than the small amounts of acid or base you expect to add. In [Topic 8.7](/advanced-course-resources/chemistry/8-7-ph-pka-study-guide/) you saw that HA and A⁻ are both present in large amounts only when the pH is within about one unit of the pK_a. That is why every buffer has a pH near the pK_a of its weak acid.

## The two reactions that do the work

A buffer has one member ready for each kind of attack. In general terms, for a pair HA / A⁻:

**Added strong acid** (H₃O⁺) is removed by the **conjugate base**:

A⁻(aq) + H₃O⁺(aq) → HA(aq) + H₂O(l)

**Added strong base** (OH⁻) is removed by the **conjugate acid**:

HA(aq) + OH⁻(aq) → A⁻(aq) + H₂O(l)

Both reactions go essentially to completion. For acetate, the equilibrium constant for the first is 1/K_a = 5.6 × 10⁴, and for the second it is K_a/K_w = 1.8 × 10⁹. So you can treat the added H₃O⁺ or OH⁻ as **used up**, and the buffer component that reacted as decreased by the same number of moles.

For a weak base buffer the pattern is the same; only the formulas change. B removes added acid and BH⁺ removes added base:

B(aq) + H₃O⁺(aq) → BH⁺(aq) + H₂O(l)  BH⁺(aq) + OH⁻(aq) → B(aq) + H₂O(l)

### Why this keeps the pH steady

Think about what each reaction does at the particle level. Before the reaction, the added particle is H₃O⁺ (or OH⁻), which changes the pH directly and strongly. After the reaction, it has been swapped for a molecule of the weak acid HA (or an A⁻ ion), which hardly affects the pH at all. The strong acid or strong base has been turned into a weak one.

The cost is that the ratio of the two buffer members shifts a little. One goes up and the other goes down by the same amount. Because both started large, a small addition changes their **ratio** only slightly, and the pH depends on that ratio (you will make this exact in [Topic 8.9](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-study-guide/)).

**Background (not assessed).** For a sense of scale: adding 0.010 mol of HCl to 1.00 L of pure water drops the pH from 7.00 to 2.00. Adding the same HCl to 1.00 L of a buffer containing 0.50 M acetic acid and 0.50 M sodium acetate moves the pH from 4.74 to about 4.73. Calculating that second change is not required in this course; explaining why it is small is.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="buf-title buf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="buf-title">Amounts of HA and A⁻ in a buffer before and after adding acid or base</title>
<desc id="buf-desc">Three bar charts side by side. Left, the buffer at the start: HA 0.100 mol and A⁻ 0.100 mol. Middle, after adding 0.020 mol of H₃O⁺: HA rises to 0.120 mol and A⁻ falls to 0.080 mol, because A⁻ + H₃O⁺ gives HA + H₂O. Right, after adding 0.020 mol of OH⁻ to the original buffer: HA falls to 0.080 mol and A⁻ rises to 0.120 mol, because HA + OH⁻ gives A⁻ + H₂O. HA bars are solid; A⁻ bars are hatched.</desc>
<defs>
<pattern id="hatch88" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#9a5b00" stroke-width="3"/></pattern>
</defs>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="110" y="34">Buffer at start</text>
<text x="320" y="34">Add 0.020 mol H₃O⁺</text>
<text x="530" y="34">Add 0.020 mol OH⁻</text>
</g>
<line x1="20" y1="250" x2="200" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="230" y1="250" x2="410" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="440" y1="250" x2="620" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="50" y="150" width="50" height="100" fill="#1d2b44"/>
<rect x="120" y="150" width="50" height="100" fill="url(#hatch88)" stroke="#9a5b00" stroke-width="1.5"/>
<rect x="260" y="130" width="50" height="120" fill="#1d2b44"/>
<rect x="330" y="170" width="50" height="80" fill="url(#hatch88)" stroke="#9a5b00" stroke-width="1.5"/>
<rect x="470" y="170" width="50" height="80" fill="#1d2b44"/>
<rect x="540" y="130" width="50" height="120" fill="url(#hatch88)" stroke="#9a5b00" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="75" y="144">0.100</text><text x="145" y="144">0.100</text>
<text x="285" y="124">0.120</text><text x="355" y="164">0.080</text>
<text x="495" y="164">0.080</text><text x="565" y="124">0.120</text>
<text x="75" y="266">HA</text><text x="145" y="266">A⁻</text>
<text x="285" y="266">HA</text><text x="355" y="266">A⁻</text>
<text x="495" y="266">HA</text><text x="565" y="266">A⁻</text>
<text x="110" y="292">amounts in mol</text>
<text x="320" y="292">A⁻ + H₃O⁺ → HA + H₂O</text>
<text x="530" y="292">HA + OH⁻ → A⁻ + H₂O</text>
<text x="320" y="310">A⁻ used up, HA made</text>
<text x="530" y="310">HA used up, A⁻ made</text>
</g>
<line x1="210" y1="60" x2="210" y2="300" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="3 4"/>
<line x1="425" y1="60" x2="425" y2="300" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="3 4"/>
</svg>
<figcaption>Figure 1. A buffer containing 0.100 mol each of HA (solid bars) and A⁻ (hatched bars). Added H₃O⁺ is converted into HA; added OH⁻ is converted into A⁻. Neither added ion survives, and both buffer members are still present in large amounts.</figcaption>
</figure>

## How buffers are made

There are two routes, and both end with the same thing: a solution holding large amounts of a weak acid and its conjugate base (or a weak base and its conjugate acid).

1. **Mix the two members directly.** Dissolve a weak acid and a soluble salt of its conjugate base (CH₃COOH with CH₃COONa), or a weak base and a salt of its conjugate acid (NH₃ with NH₄Cl).
2. **Partly neutralize a weak acid or weak base.** Add strong base to an excess of weak acid: part of the HA becomes A⁻, and the rest stays as HA. Or add strong acid to an excess of weak base. This is exactly what happens in the region around the half-equivalence point of a weak acid–strong base titration ([Topic 8.5](/advanced-course-resources/chemistry/8-5-acid-base-titrations-study-guide/)). That flat part of the curve is a buffer at work.

What does **not** make a buffer:

- **A strong acid with its salt**, such as HCl with NaCl. The Cl⁻ ion is a negligibly weak base. It does not react with added H₃O⁺, so nothing removes added acid.
- **A weak acid on its own.** A solution of acetic acid alone contains HA, which can remove added base, but almost no A⁻. Added H₃O⁺ has nothing to react with.
- **A weak acid exactly neutralized by strong base.** All of the HA has become A⁻, so only one member of the pair remains.

## Worked example 1: following the amounts in an ammonia buffer

**Question.** A buffer contains 0.200 mol of NH₃ and 0.150 mol of NH₄Cl dissolved in water. (a) Write the net ionic equation for the reaction when 0.010 mol of nitric acid, HNO₃, is added, and give the amounts of NH₃ and NH₄⁺ afterwards. (b) Repeat for 0.010 mol of potassium hydroxide, KOH, added to a fresh sample of the same buffer. (c) Explain why the pH changes only slightly in each case.

**(a) Added acid.**

1. HNO₃ is a strong acid, so it is present as H₃O⁺ and NO₃⁻. NO₃⁻ is a spectator ion.
2. The base member of the buffer removes H₃O⁺: **NH₃(aq) + H₃O⁺(aq) → NH₄⁺(aq) + H₂O(l)**
3. The reaction goes to completion and NH₃ is in excess, so all 0.010 mol of H₃O⁺ reacts.
4. NH₃: 0.200 − 0.010 = **0.190 mol**. NH₄⁺: 0.150 + 0.010 = **0.160 mol**.

**(b) Added base.**

1. KOH is a strong base, present as K⁺ (spectator) and OH⁻.
2. The acid member of the buffer removes OH⁻: **NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l)**
3. NH₃: 0.200 + 0.010 = **0.210 mol**. NH₄⁺: 0.150 − 0.010 = **0.140 mol**.

**(c) Reasoning.** In each case, the added strong acid or strong base reacts completely with a buffer member that is present in large excess. The H₃O⁺ is replaced by NH₄⁺, a weak acid, and the OH⁻ is replaced by NH₃, a weak base. Neither added ion is left free in solution. Both NH₃ and NH₄⁺ are still present in large amounts, and their ratio has shifted only slightly (from 1.33 to 1.19 after the acid, and to 1.50 after the base), so the pH stays close to its starting value.

**Check.** Total nitrogen-containing species: 0.200 + 0.150 = 0.350 mol at the start, 0.190 + 0.160 = 0.350 mol and 0.210 + 0.140 = 0.350 mol afterwards. The reactions only move protons; they do not create or destroy ammonia units.

## Worked example 2: is it a buffer?

**Question.** Each mixture below is made up to 1.00 L with water. Which are buffers? Explain each decision.

(a) 0.10 mol HNO₂ and 0.10 mol NaNO₂
(b) 0.10 mol HNO₃ and 0.10 mol NaNO₃
(c) 0.20 mol CH₃COOH and 0.10 mol NaOH
(d) 0.10 mol NH₃ and 0.10 mol HCl
(e) 0.10 mol NH₃ and 0.050 mol HCl

**Method.** If a strong acid or base is present, let it react first. Then list what remains and ask: are both members of a weak conjugate pair present in large amounts?

| Mixture | What remains after any reaction | Buffer? | Reason |
|---|---|---|---|
| (a) | 0.10 mol HNO₂, 0.10 mol NO₂⁻ | **Yes** | Weak acid and its conjugate base, both large |
| (b) | H₃O⁺ and NO₃⁻ only | **No** | HNO₃ is strong; NO₃⁻ is too weak a base to remove added acid |
| (c) | 0.10 mol CH₃COOH, 0.10 mol CH₃COO⁻ | **Yes** | Half the weak acid is neutralized, leaving both members |
| (d) | 0.10 mol NH₄⁺, no NH₃ | **No** | All the weak base has been converted; only one member remains |
| (e) | 0.050 mol NH₃, 0.050 mol NH₄⁺ | **Yes** | Weak base partly neutralized, leaving both members |

**The key move** is in (c), (d) and (e): you cannot judge these by reading the labels. You must do the stoichiometry first. A strong acid or base present in an amount *less than* the weak partner creates a buffer; an amount *equal to* it destroys one member and leaves no buffer.

## Common misconceptions

- **"A buffer keeps the pH at 7."** A buffer keeps the pH near the pK_a of its weak acid, which can be anywhere on the scale.
- **"A buffer keeps the pH perfectly constant."** The pH does change, just much less than it would without the buffer.
- **"The conjugate base reacts with added base."** It is the other way round: the base member removes added acid, and the acid member removes added base.
- **"Any acid mixed with its salt is a buffer."** Only a weak acid works. The conjugate base of a strong acid (Cl⁻, NO₃⁻) is too weak to remove H₃O⁺.
- **"HA and A⁻ in a buffer neutralize each other."** A proton passing from HA to A⁻ gives back HA and A⁻. There is no net reaction, so both stay in large amounts.
- **"A buffer can absorb any amount of acid."** Each addition uses up some of one member. Once that member runs out, the buffer stops working and the pH changes sharply. How much a buffer can take is the subject of Topic 8.10.

## Where this leads

Topic 8.9, the [Henderson–Hasselbalch Equation](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-study-guide/), links the pH of a buffer to the pK_a and the ratio [A⁻]/[HA], so you can say exactly where a buffer holds the pH. Topic 8.10 then asks how much acid or base a buffer can absorb. Try the [practice questions](/advanced-course-resources/chemistry/8-8-properties-buffers-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-8-properties-buffers-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-8-properties-buffers-checklist/).
