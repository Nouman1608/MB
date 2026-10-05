---
resourceId: "mb-ap-chem-8.7-study-guide"
title: "pH and pKa: Study Guide (Chemistry 8.7)"
description: "Predict whether a weak acid or base is mostly protonated or deprotonated by comparing pH with pKa, explain how indicators work and choose the right indicator for a titration."
course: "chemistry"
unit: 8
topics: ["8.7"]
resourceType: "study-guide"
prerequisites:
  - "pH, K_a, pK_a and K_b for weak acids and bases (Topics 8.1 to 8.3)"
  - "Titration curves, the equivalence point and the half-equivalence point (Topic 8.5)"
prerequisiteResources: ["mb-ap-chem-8.6-study-guide"]
learningObjectives:
  - "Predict whether the acid form or the base form of a conjugate pair is present at the higher concentration by comparing the solution pH with the pK_a"
  - "Use the K_a expression to show why the ratio [A⁻]/[HA] changes tenfold for each pH unit"
  - "Apply the same comparison to a weak base, using the pK_a of its conjugate acid or the pK_b"
  - "Explain why an acid–base indicator changes colour, in terms of its protonated and deprotonated forms"
  - "Choose a suitable indicator for a titration from the pH at the equivalence point, and explain what goes wrong with a poor choice"
skills: ["2"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "25 °C throughout, so pK_a + pK_b = 14.00 for a conjugate pair. Acetic acid K_a = 1.8 × 10⁻⁵ (pK_a 4.74); ammonia K_b = 1.8 × 10⁻⁵ (pK_a of NH₄⁺ = 9.26). Indicator colour ranges are approximate"
related: ["mb-ap-chem-8.7-revision-notes", "mb-ap-chem-8.7-practice", "mb-ap-chem-8.7-checklist"]
next: "mb-ap-chem-8.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Compare the solution pH with the pK_a of the acid form: pH below pK_a means the acid form (HA) is present at the higher concentration; pH above pK_a means the base form (A⁻) is."
  - "At pH = pK_a the two forms have equal concentrations. Each pH unit away from pK_a changes the ratio [A⁻]/[HA] by a factor of 10."
  - "For a weak base B, compare the pH with the pK_a of BH⁺ (14.00 − pK_b at 25 °C), not with the pK_b itself."
  - "An indicator is a weak acid whose protonated and deprotonated forms have different colours, so its colour depends on the pH."
  - "Choose an indicator whose pK_a is close to the pH at the equivalence point, so the colour changes on the steep part of the titration curve."
faqs:
  - question: "Is the acid fully dissociated once the pH is above its pK_a?"
    answer: "No. Above the pK_a the base form is simply the larger of the two. Just above pK_a there is still almost as much HA as A⁻. Only about 2 pH units above pK_a is the acid form down to around 1%."
  - question: "Why does the course compare pH with pK_a rather than with pK_b for a base?"
    answer: "Because pH and pK_a are on the same scale: both describe the hydrogen-ion side of the equilibrium. For a base B, the pK_a of its conjugate acid BH⁺ plays that role. You can always get it from pK_a = 14.00 − pK_b at 25 °C."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two forms of the same substance

Every weak acid exists in two forms. The **acid form** (protonated), HA, still holds its proton. The **base form** (deprotonated), A⁻, has lost it. In water the two forms are linked by an equilibrium:

HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)  K_a = [H₃O⁺][A⁻] / [HA]

In [Topic 8.3](/advanced-course-resources/chemistry/8-3-weak-acid-base-equilibria-study-guide/) the acid was the only thing setting the pH. In real solutions that is often not the case. A drug molecule in blood, an indicator in a titration flask or an amino acid in a cell sits in a solution whose pH is already fixed by other substances. The useful question then is: **at this pH, which form of the molecule is present at the higher concentration?** The answer is called the **protonation state**, and the form present at the higher concentration is the **predominant form**.

## The rule: compare pH with pK_a

Rearrange the K_a expression so the ratio of the two forms is on its own:

[A⁻] / [HA] = K_a / [H₃O⁺]

This one line holds the whole topic. It says the ratio of the two forms depends only on how K_a compares with the hydrogen-ion concentration already in the solution. Written with logarithms (p means −log₁₀), the comparison becomes a comparison of pK_a with pH:

- **pH < pK_a:** [H₃O⁺] is larger than K_a, so [A⁻]/[HA] is less than 1. The **acid form, HA, predominates**.
- **pH = pK_a:** [H₃O⁺] equals K_a, so [A⁻] = [HA]. Neither form predominates.
- **pH > pK_a:** [H₃O⁺] is smaller than K_a, so [A⁻]/[HA] is greater than 1. The **base form, A⁻, predominates**.

A useful way to remember it: a low pH means plenty of H₃O⁺, so the molecule keeps its proton. A high pH means few H₃O⁺ ions, so the molecule gives its proton up.

### How big is the difference?

Because pH is a logarithm, each pH unit is a factor of 10 in [H₃O⁺], and therefore a factor of 10 in the ratio:

| Solution pH | [A⁻] / [HA] | Percentage present as HA |
|---|---|---|
| pK_a − 2 | 0.01 | about 99% |
| pK_a − 1 | 0.1 | about 91% |
| pK_a | 1 | 50% |
| pK_a + 1 | 10 | about 9% |
| pK_a + 2 | 100 | about 1% |

So "predominates" can mean anything from "just over half" to "almost all". Within about one unit of pK_a, both forms are present in large amounts. Two units or more away, one form is almost all of the substance. In Topic 8.9 you will meet this same relationship as the Henderson–Hasselbalch equation.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="dist-title dist-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dist-title">Percentage of acetic acid present as HA and as A⁻ at different pH values</title>
<desc id="dist-desc">Graph of percentage of each form against pH from 2 to 8 for acetic acid, pK_a 4.74. The solid curve for the acid form HA starts near 100% at pH 2, falls through 50% at pH 4.74 and approaches 0% by pH 7. The dashed curve for the base form A⁻ is its mirror image, rising from near 0% to near 100%. The curves cross at 50% at pH 4.74, marked by a vertical dotted line. The region to the left is labelled HA predominates and the region to the right A⁻ predominates.</desc>
<line x1="70" y1="240" x2="590" y2="240" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="40" x2="70" y2="240" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="258">2</text><text x="156.7" y="258">3</text><text x="243.3" y="258">4</text><text x="330" y="258">5</text><text x="416.7" y="258">6</text><text x="503.3" y="258">7</text><text x="590" y="258">8</text>
<text x="330" y="282" font-size="13">pH of the solution</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="244">0%</text><text x="62" y="144">50%</text><text x="62" y="44">100%</text>
</g>
<line x1="70" y1="140" x2="590" y2="140" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="307.5" y1="30" x2="307.5" y2="240" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="312" y="232" font-size="12" fill="#1d2b44">pK_a = 4.74</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,40.4 87.3,40.6 104.7,40.9 122.0,41.4 139.3,42.3 156.7,43.6 174.0,45.6 191.3,48.7 208.7,53.5 226.0,60.6 243.3,70.8 260.7,84.8 278.0,102.7 295.3,124.0 312.7,146.9 330.0,169.1 347.3,188.5 364.7,204.1 382.0,215.7 399.3,224.0 416.7,229.6 434.0,233.3 451.3,235.7 468.7,237.3 486.0,238.3 503.3,238.9 520.7,239.3 538.0,239.6 555.3,239.7 572.7,239.8 590.0,239.9"/>
<polyline fill="none" stroke="#9a5b00" stroke-width="2.5" stroke-dasharray="8 5" points="70.0,239.6 87.3,239.4 104.7,239.1 122.0,238.6 139.3,237.7 156.7,236.4 174.0,234.4 191.3,231.3 208.7,226.5 226.0,219.4 243.3,209.2 260.7,195.2 278.0,177.3 295.3,156.0 312.7,133.1 330.0,110.9 347.3,91.5 364.7,75.9 382.0,64.3 399.3,56.0 416.7,50.4 434.0,46.7 451.3,44.3 468.7,42.7 486.0,41.7 503.3,41.1 520.7,40.7 538.0,40.4 555.3,40.3 572.7,40.2 590.0,40.1"/>
<text x="92" y="64" font-size="13" fill="#1d2b44">HA (solid)</text>
<text x="470" y="64" font-size="13" fill="#9a5b00">A⁻ (dashed)</text>
<text x="170" y="22" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">pH &lt; pK_a: HA predominates</text>
<text x="460" y="22" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">pH &gt; pK_a: A⁻ predominates</text>
</svg>
<figcaption>Figure 1. Acetic acid (pK_a 4.74). The solid line (HA) and dashed line (A⁻) cross at 50% exactly where pH = pK_a. One pH unit either side, the split is about 91% to 9%.</figcaption>
</figure>

Notice that the pK_a, not the concentration of the acid, decides where the curves cross. A 0.001 M and a 1 M solution of acetic acid held at pH 6.00 both have far more acetate than acetic acid.

## Weak bases: use the pK_a of the conjugate acid

A weak base B and its conjugate acid BH⁺ form the same kind of pair. BH⁺ is the acid form and B is the base form. So the rule is unchanged, as long as you use the **pK_a of BH⁺**:

- pH < pK_a(BH⁺): the protonated form, **BH⁺**, predominates.
- pH > pK_a(BH⁺): the neutral base, **B**, predominates.

Tables often give K_b or pK_b for the base instead. At 25 °C, for any conjugate pair, pK_a + pK_b = 14.00 (because K_a × K_b = K_w). So convert first: pK_a(BH⁺) = 14.00 − pK_b(B).

Do **not** compare the pH directly with the pK_b. pK_b is on the hydroxide side of the scale, so the comparison would point the wrong way.

## Worked example 1: predicting the predominant form

**Question.** (a) Acetic acid, CH₃COOH, has pK_a = 4.74. Three solutions are held at pH 3.00, 4.74 and 6.50 by other substances. For each, state which form of acetic acid predominates and calculate the ratio [CH₃COO⁻]/[CH₃COOH]. (b) Ammonia has pK_b = 4.74. Which form, NH₃ or NH₄⁺, predominates in a solution held at pH 7.40?

**(a)**

1. Use [A⁻]/[HA] = K_a / [H₃O⁺], which is the same as 10^(pH − pK_a).
2. **pH 3.00:** pH < pK_a, so CH₃COOH predominates. Ratio = 10^(3.00 − 4.74) = 10^(−1.74) = **0.018**. About 98% is still the acid form.
3. **pH 4.74:** pH = pK_a, so ratio = 10⁰ = **1**. The two forms are present at equal concentrations.
4. **pH 6.50:** pH > pK_a, so CH₃COO⁻ predominates. Ratio = 10^(6.50 − 4.74) = 10^1.76 = **58**. About 98% is now acetate.

**Check.** pH 3.00 is 1.74 units below pK_a and pH 6.50 is 1.76 units above. The two ratios are almost exact reciprocals (0.018 and 58), as the symmetry of Figure 1 says they should be.

**(b)**

1. Convert: pK_a(NH₄⁺) = 14.00 − 4.74 = 9.26.
2. Compare: pH 7.40 < 9.26, so the protonated form, **NH₄⁺, predominates**.
3. Size: [NH₃]/[NH₄⁺] = 10^(7.40 − 9.26) = 10^(−1.86) = 0.014. About 99% of the ammonia is present as NH₄⁺.

**Trap avoided.** Comparing 7.40 with the pK_b (4.74) would suggest pH > 4.74, so "base form wins". That is wrong: a neutral solution is far too acidic for much free NH₃ to survive.

## Indicators are weak acids you can see

An **acid–base indicator** is a weak acid, written HIn, whose two forms have different colours:

HIn(aq) + H₂O(l) ⇌ H₃O⁺(aq) + In⁻(aq)
colour of HIn ⇌ colour of In⁻

The rule you have just learned decides the colour:

- pH well below pK_a(HIn): mostly HIn, so you see the **acid colour**.
- pH well above pK_a(HIn): mostly In⁻, so you see the **base colour**.
- pH close to pK_a(HIn): both forms are present in similar amounts, so you see a **mixture** of the two colours.

The eye usually needs about ten times more of one form before it sees that form's colour alone. So the visible colour change happens over a range of roughly **pK_a ± 1**. Some common indicators and their approximate ranges:

| Indicator | Colour below the range | Approximate change range (pH) | Colour above the range |
|---|---|---|---|
| Methyl orange | red | 3.1–4.4 | yellow |
| Methyl red | red | 4.4–6.2 | yellow |
| Bromothymol blue | yellow | 6.0–7.6 | blue |
| Phenolphthalein | colourless | 8.3–10.0 | pink |

The indicator is added in tiny amounts, so it does not change the pH of the solution noticeably. It reports the pH; it does not set it.

## Choosing an indicator for a titration

In a titration you want the colour to change **at the equivalence point**, not before or after. Near the equivalence point the pH rises (or falls) very steeply: one drop of titrant moves it by several units. If the indicator's change range lies on that steep part, the colour changes within one drop of the equivalence point. That is why you choose an indicator whose **pK_a is close to the pH at the equivalence point**.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="titr-title titr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="titr-title">Titration curve of acetic acid with sodium hydroxide, with two indicator ranges</title>
<desc id="titr-desc">pH against volume of 0.100 M NaOH added, from 0 to 50 mL, for 25.00 mL of 0.100 M acetic acid. The curve starts at pH 2.88, rises slowly, passes pH 4.74 at the half-equivalence point (12.5 mL), then jumps almost vertically near 25.0 mL, through the equivalence point at pH 8.72, before levelling off above pH 12. A dotted band from pH 3.1 to 4.4, labelled methyl orange, crosses the curve in the early, gently sloping part between about 0.4 and 7.8 mL. A hatched band from pH 8.3 to 10.0, labelled phenolphthalein, crosses the vertical section right at 25.0 mL.</desc>
<defs>
<pattern id="hatch87" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.2" opacity="0.45"/></pattern>
<pattern id="dots87" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="#1d2b44" opacity="0.45"/></pattern>
</defs>
<rect x="70" y="180.9" width="520" height="20.4" fill="url(#dots87)" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="3 3"/>
<rect x="70" y="92.9" width="520" height="26.7" fill="url(#hatch87)" stroke="#1d2b44" stroke-width="0.8"/>
<text x="586" y="196" font-size="12" fill="#1d2b44" text-anchor="end">methyl orange, pH 3.1–4.4 (dotted)</text>
<text x="586" y="88" font-size="12" fill="#1d2b44" text-anchor="end">phenolphthalein, pH 8.3–10.0 (hatched)</text>
<line x1="70" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="30" x2="70" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="254">0</text><text x="62" y="191">4</text><text x="62" y="128">8</text><text x="62" y="65">12</text>
</g>
<text x="22" y="140" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 140)">pH</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="268">0</text><text x="174" y="268">10</text><text x="278" y="268">20</text><text x="382" y="268">30</text><text x="486" y="268">40</text><text x="590" y="268">50</text>
<text x="330" y="290" font-size="13">Volume of 0.100 M NaOH added (mL)</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,204.8 80.4,196.4 90.8,191.9 101.2,188.9 111.6,186.7 122.0,184.9 148.0,181.2 174.0,178.2 200.0,175.4 226.0,172.7 252.0,169.7 278.0,166.0 298.8,161.8 309.2,158.8 319.6,153.7 324.8,148.9 329.0,137.8 330.0,112.9 331.0,88.1 335.2,77.2 340.4,72.5 350.8,67.9 361.2,65.3 382.0,62.1 434.0,57.9 486.0,55.7 538.0,54.3 590.0,53.2"/>
<circle cx="330" cy="112.9" r="4.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="140" font-size="12" fill="#1d2b44">equivalence point: 25.0 mL, pH 8.72</text>
<circle cx="200" cy="175.4" r="4" fill="#1d2b44"/>
<text x="150" y="232" font-size="12" fill="#1d2b44">half-equivalence: pH = pK_a = 4.74</text>
<line x1="200" y1="180" x2="200" y2="220" stroke="#1d2b44" stroke-width="1"/>
</svg>
<figcaption>Figure 2. 25.00 mL of 0.100 M acetic acid titrated with 0.100 M NaOH. Phenolphthalein's range sits on the vertical section, so it changes colour between 24.99 and 25.05 mL. Methyl orange's range sits on the early, gentle slope, so it changes colour between about 0.4 and 7.8 mL, far too soon.</figcaption>
</figure>

The equivalence-point pH depends on the type of titration ([Topic 8.5](/advanced-course-resources/chemistry/8-5-acid-base-titrations-study-guide/)):

- **Strong acid with strong base:** pH 7 at equivalence, and the vertical section is very long (roughly pH 4 to 10). Several indicators work.
- **Weak acid with strong base:** the conjugate base A⁻ is present at equivalence, so the pH is **above 7**. Choose an indicator with a pK_a above 7, such as phenolphthalein.
- **Weak base with strong acid:** the conjugate acid BH⁺ is present at equivalence, so the pH is **below 7**. Choose an indicator with a pK_a below 7, such as methyl red.

What goes wrong with a poor choice? The colour changes at the wrong volume, so the **end point** (what you see) no longer matches the **equivalence point** (where the amounts match). Every calculated concentration that uses that volume is then wrong.

## Worked example 2: choosing an indicator for a weak base titration

**Question.** A student titrates 25.00 mL of 0.100 M aqueous ammonia with 0.100 M HCl. The pH at the equivalence point is 5.28. Using the table of indicators above, choose the best indicator, say what colour change the student will see, and explain why phenolphthalein would be a poor choice.

1. **Find the target.** The equivalence point is at pH 5.28. This is acidic because NH₄⁺, a weak acid, is the main species there.
2. **Match the range.** Methyl red changes between pH 4.4 and 6.2, which contains 5.28. Methyl orange (3.1–4.4) and bromothymol blue (6.0–7.6) both miss it; phenolphthalein (8.3–10.0) misses it by a long way. **Choose methyl red.**
3. **Predict the colour change.** The flask starts basic (pH 11.12), so methyl red is in its base form: **yellow**. The pH falls as acid is added. At the equivalence point the pH drops steeply (from 6.86 at 24.90 mL to 3.70 at 25.10 mL), so the indicator turns from yellow to **red** within about one drop.
4. **Why not phenolphthalein?** Its range (8.3–10.0) lies on the gently sloping part of this curve. The pH reaches 10.0 after only about 3.8 mL of acid and 8.3 after about 22.5 mL. The pink colour would fade gradually over almost 19 mL, with no sharp end point, and it would be gone before the equivalence point at 25.00 mL.

**Answer.** Methyl red, changing from yellow to red at the end point.

**Check.** The rule "pK_a of indicator close to pH at equivalence" gives the same answer: methyl red's range is centred near pH 5, and 5.28 is close to that.

## Common misconceptions

- **"pH above pK_a means the acid is fully dissociated."** No: it means A⁻ is the larger of the two forms. At pK_a + 0.3 there is still about one HA for every two A⁻.
- **"At pH = pK_a the solution is neutral."** No: at pH = pK_a the *two forms of the acid* are equal. The solution is neutral only if pK_a happens to be 7.
- **"Concentration decides the predominant form."** In a solution whose pH is fixed, only the pH and the pK_a decide the ratio. The amount of acid changes both concentrations together.
- **Comparing pH with pK_b for a base.** Convert to the pK_a of the conjugate acid first (14.00 − pK_b at 25 °C).
- **"Choose an indicator that changes colour at pH 7."** Only a strong acid–strong base titration has its equivalence point at pH 7. Match the indicator to the actual equivalence-point pH.
- **"The indicator's pK_a must equal the equivalence pH exactly."** It only needs to be close enough that the change range falls on the steep part of the curve.
- **"The end point and the equivalence point are the same."** The equivalence point is set by amounts; the end point is set by the indicator. A good choice makes them almost coincide.

## Where this leads

Next, Topic 8.8, [Properties of Buffers](/advanced-course-resources/chemistry/8-8-properties-buffers-study-guide/), uses solutions where both HA and A⁻ are present in large amounts, which happens when the pH is close to the pK_a. Topic 8.9 then turns the ratio [A⁻]/[HA] = 10^(pH − pK_a) into the Henderson–Hasselbalch equation. Try the [practice questions](/advanced-course-resources/chemistry/8-7-ph-pka-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-7-ph-pka-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-7-ph-pka-checklist/).
