---
resourceId: "mb-ap-chem-8.11-study-guide"
title: "pH and Solubility: Study Guide (Chemistry 8.11)"
description: "Predict whether a salt dissolves more or less when the pH changes, explain the effect with Le Châtelier's principle, and read solubility data collected at different pH values."
course: "chemistry"
unit: 8
topics: ["8.11"]
resourceType: "study-guide"
prerequisites:
  - "K_sp and molar solubility, and the common-ion effect (Topics 7.11 and 7.12)"
  - "Weak acids, conjugate bases and comparing pH with pK_a (Topics 8.3 and 8.7)"
prerequisiteResources: ["mb-ap-chem-8.10-study-guide"]
learningObjectives:
  - "Decide whether a salt's solubility depends on pH by checking whether either ion is a weak base, a weak acid or hydroxide"
  - "Use Le Châtelier's principle to explain why a salt with a basic anion or hydroxide dissolves more in acid"
  - "Explain why a salt whose cation is a weak acid dissolves more in base"
  - "Write the reaction that removes an ion from solution and the overall equation for dissolving in acid"
  - "Interpret laboratory data on solubility at different pH values, paying attention to the precision of the measurements"
skills: ["2", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "This topic is qualitative: you will not be asked to calculate solubility as a function of pH. Salts named with letters (P, Q, R, MA, BH) are fictional"
related: ["mb-ap-chem-8.11-revision-notes", "mb-ap-chem-8.11-practice", "mb-ap-chem-8.11-checklist"]
next: "mb-ap-chem-8.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A salt's solubility depends on pH when one of its ions is a weak base, a weak acid or OH⁻."
  - "Acid removes a basic anion (such as F⁻, CO₃²⁻, PO₄³⁻) or OH⁻ by turning it into its conjugate acid; Q falls below K_sp and more solid dissolves."
  - "Base removes a weakly acidic cation (such as a BH⁺ ion) by turning it into its conjugate base, so that salt dissolves more in base."
  - "Salts such as AgCl, AgBr and AgI, whose anion comes from a strong acid and whose cation is not acidic, are not pH-sensitive in this course's model."
  - "K_sp does not change with pH; the solubility does. Computations of solubility versus pH are not assessed."
faqs:
  - question: "Why does silver chloride not dissolve in nitric acid?"
    answer: "Cl⁻ is the conjugate base of a strong acid, so it has almost no tendency to accept a proton. H₃O⁺ cannot remove it from solution, Q stays equal to K_sp, and the solubility does not change."
  - question: "Does a hydroxide dissolve less in base?"
    answer: "Yes. Added OH⁻ is a common ion for a salt such as Mg(OH)₂, so the equilibrium shifts towards the solid. This is the common-ion effect from Topic 7.12."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Removing an ion makes more solid dissolve

In [Topic 7.12](/advanced-course-resources/chemistry/7-12-common-ion-effect-study-guide/) you **added** one of a salt's ions and the salt became less soluble. This topic looks at the opposite stress: something in the solution **removes** one of the salt's ions. The tool is the same, Le Châtelier's principle.

Take calcium fluoride in water, with some undissolved solid present:

CaF₂(s) ⇌ Ca²⁺(aq) + 2 F⁻(aq)  K_sp = [Ca²⁺][F⁻]²

F⁻ is the conjugate base of HF, a **weak** acid. So F⁻ is a weak base. If you add a strong acid, H₃O⁺ reacts with F⁻:

F⁻(aq) + H₃O⁺(aq) → HF(aq) + H₂O(l)

Follow the stress step by step:

1. H₃O⁺ turns F⁻ into HF, so [F⁻] falls.
2. Q = [Ca²⁺][F⁻]² is now **less than K_sp**.
3. The dissolving reaction runs forward to replace the lost F⁻: more CaF₂ dissolves.
4. More Ca²⁺ ends up in solution. The salt is **more soluble** in acid than in pure water.

Adding the two equations (after doubling the second) gives the overall change:

CaF₂(s) + 2 H₃O⁺(aq) → Ca²⁺(aq) + 2 HF(aq) + 2 H₂O(l)

K_sp itself has not changed. It is still an equilibrium constant that depends only on temperature. What changes is how much solid has to dissolve before the ion product reaches K_sp again.

## Which salts are sensitive to pH?

Look at each ion in the salt and ask: **can this ion gain or lose a proton?** The solubility depends on pH when one of the ions is a weak base, a weak acid or the hydroxide ion itself.

| The salt contains… | Examples | What removes the ion | Effect on solubility |
|---|---|---|---|
| An anion that is a weak base (conjugate base of a weak acid) | CaF₂, CaCO₃, Ca₃(PO₄)₂, CaC₂O₄ | H₃O⁺ turns the anion into its conjugate acid | **Increases** as pH falls |
| Hydroxide ion | Mg(OH)₂, Fe(OH)₃ | H₃O⁺ turns OH⁻ into water | **Increases** as pH falls; **decreases** as pH rises (OH⁻ is a common ion) |
| A cation that is a weak acid, such as BH⁺, the conjugate acid of a weak base B | the fictional salt (BH)X | OH⁻ turns BH⁺ into B | **Increases** as pH rises |
| Only ions that are neither acids nor bases in water | AgCl, AgBr, AgI | nothing: H₃O⁺ and OH⁻ do not react with them | **No change** with pH (in this course's model) |

Cl⁻, Br⁻ and I⁻ are conjugate bases of strong acids. They have almost no tendency to take a proton, so acid cannot remove them.

**How much does the pH have to change?** Use the idea from [Topic 8.7](/advanced-course-resources/chemistry/8-7-ph-pka-study-guide/). When the pH is **above** the pK_a of the weak acid HA, the base form A⁻ predominates. Little A⁻ is removed, and the solubility is close to its value in pure water. When the pH drops **below** the pK_a, the acid form HA predominates. Most of the dissolved A⁻ is turned into HA, so much more solid must dissolve. For a salt with a weakly acidic cation BH⁺, the same reasoning works the other way round: the solubility rises once the pH climbs above the pK_a of BH⁺.

## Picturing the effect

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="phs-title phs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="phs-title">Sketch of how the solubility of four types of salt changes with pH</title>
<desc id="phs-desc">A sketch with pH from 0 to 14 on the horizontal axis and the logarithm of molar solubility on the vertical axis, with no numbers on the vertical axis. Line 1, solid, a salt whose anion is a weak base: flat at high pH, then rising steadily as the pH falls below about 5. Line 2, long dashes, a salt whose ions are neither acids nor bases: horizontal at all pH. Line 3, dotted, a salt whose cation is a weak acid: flat at low pH, then rising as the pH climbs above about 9. Line 4, dash-dot, a metal hydroxide: falls steeply from upper left to lower right between pH 6 and pH 10.</desc>
<line x1="80" y1="30" x2="80" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="268">0</text><text x="154.3" y="268">2</text><text x="228.6" y="268">4</text><text x="302.9" y="268">6</text>
<text x="377.1" y="268">8</text><text x="451.4" y="268">10</text><text x="525.7" y="268">12</text><text x="600" y="268">14</text>
<text x="340" y="292" font-size="13">pH (more acidic ← → more basic)</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="154.3" y1="250" x2="154.3" y2="255"/><line x1="228.6" y1="250" x2="228.6" y2="255"/><line x1="302.9" y1="250" x2="302.9" y2="255"/>
<line x1="377.1" y1="250" x2="377.1" y2="255"/><line x1="451.4" y1="250" x2="451.4" y2="255"/><line x1="525.7" y1="250" x2="525.7" y2="255"/>
</g>
<text x="24" y="140" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 140)">log (molar solubility)</text>
<text x="56" y="40" font-size="12" fill="#1d2b44" text-anchor="middle">higher</text>
<text x="56" y="245" font-size="12" fill="#1d2b44" text-anchor="middle">lower</text>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<path d="M80.0 98.7 L98.6 105.6 L117.1 112.5 L135.7 119.4 L154.3 126.2 L172.9 133.1 L191.4 139.9 L210.0 146.7 L228.6 153.2 L247.1 159.0 L265.7 163.4 L284.3 165.9 L302.9 166.9 L321.4 167.3 L340.0 167.4 L358.6 167.5 L600.0 167.5"/>
<path d="M80.0 195.0 L600.0 195.0" stroke-dasharray="12 6"/>
<path d="M80.0 222.5 L340.0 222.4 L358.6 222.3 L377.1 221.9 L395.7 220.9 L414.3 218.4 L432.9 214.0 L451.4 208.2 L470.0 201.7 L488.6 194.9 L507.1 188.1 L525.7 181.2 L544.3 174.4 L562.9 167.5 L581.4 160.6 L600.0 153.7" stroke-dasharray="2 5"/>
<path d="M302.9 30.0 L340.0 85.0 L377.1 140.0 L414.3 195.0 L451.4 250.0" stroke-dasharray="14 5 3 5"/>
</g>
<g font-size="13" fill="#1d2b44" font-weight="600">
<text x="96" y="90">1</text>
<text x="96" y="188">2</text>
<text x="586" y="145">3</text>
<text x="290" y="40">4</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="410" y="160">1: anion is a weak base</text>
<text x="160" y="188">2: no acidic or basic ion</text>
<text x="96" y="215">3: cation is a weak acid</text>
<text x="350" y="60">4: metal hydroxide</text>
</g>
</svg>
<figcaption>Figure 1. A qualitative sketch for four fictional salts (shapes only, no values). Each line has its own pattern and number: 1 solid, 2 long dashes, 3 dotted, 4 dash-dot. Line 1 rises once the pH falls below the pK_a of the anion's conjugate acid. Line 3 rises once the pH climbs above the pK_a of the cation. Line 4 changes at every pH because OH⁻ itself is in the K_sp expression; it runs off the sketch at both ends. Line 2 stays flat.</figcaption>
</figure>

Two features are worth noticing. First, the hydroxide (line 4) responds to pH everywhere, because [OH⁻] is fixed directly by the pH. Second, a salt whose ion is a very weak base, such as the salt in line 1, only responds once the solution is acidic enough to protonate that ion. You only need the **direction** of each change and the reason for it.

## Worked example 1: predicting the effect of acid

**Question.** Nitric acid is added to separate beakers, each containing water and some undissolved solid: (a) calcium carbonate, CaCO₃; (b) silver bromide, AgBr; (c) magnesium hydroxide, Mg(OH)₂; (d) barium fluoride, BaF₂. For each, predict whether the solubility increases, decreases or stays the same, and justify your answer. Then (e) predict what adding NaOH does to (c).

**Method.** Write the dissolving equation, then ask whether H₃O⁺ reacts with either ion.

**(a) CaCO₃(s) ⇌ Ca²⁺(aq) + CO₃²⁻(aq).** Carbonate is the conjugate base of the weak acid HCO₃⁻, so it is a base. H₃O⁺ converts it to HCO₃⁻ and then H₂CO₃, which breaks down to CO₂ and water. [CO₃²⁻] falls, Q < K_sp, so more CaCO₃ dissolves: **increases**. Overall, with excess acid:

CaCO₃(s) + 2 H₃O⁺(aq) → Ca²⁺(aq) + CO₂(g) + 3 H₂O(l)

The CO₂ bubbles out of the solution, so the carbonate cannot come back. That is why a limestone chip fizzes and disappears in dilute acid.

**(b) AgBr(s) ⇌ Ag⁺(aq) + Br⁻(aq).** Br⁻ is the conjugate base of HBr, a strong acid, so it does not accept a proton. Ag⁺ does not react with H₃O⁺. Q is unchanged: **stays the same**. (NO₃⁻ from the nitric acid is not a common ion either.)

**(c) Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2 OH⁻(aq).** H₃O⁺ + OH⁻ → 2 H₂O removes hydroxide, Q < K_sp: **increases**. Overall: Mg(OH)₂(s) + 2 H₃O⁺(aq) → Mg²⁺(aq) + 4 H₂O(l). This is how a magnesium hydroxide antacid neutralises stomach acid.

**(d) BaF₂(s) ⇌ Ba²⁺(aq) + 2 F⁻(aq).** F⁻ is a weak base (HF is a weak acid). H₃O⁺ converts F⁻ to HF, Q < K_sp: **increases**.

**(e) NaOH and Mg(OH)₂.** OH⁻ is a **common ion**. Q rises above K_sp and Mg(OH)₂ precipitates until Q = K_sp again: the solubility **decreases**.

**Check.** The only salt that does not respond is the one whose anion comes from a strong acid. That fits the rule in the table.

## Worked example 2: reading solubility data from the lab

**Question.** A student studies three fictional white solids, P, Q and R. She stirs 0.800 g of each solid with 100.0 mL of a buffer until no more dissolves, then filters, dries and weighs the solid left over. The balance reads to ±0.001 g. None of the buffers contains an ion that is also in P, Q or R.

| Solid | Mass recovered at pH 3 (g) | at pH 7 (g) | at pH 11 (g) |
|---|---|---|---|
| P | 0.796 | 0.795 | 0.796 |
| Q | 0.740 | 0.794 | 0.794 |
| R | 0.782 | 0.782 | 0.619 |

(a) Calculate the mass of each solid that dissolved at each pH. (b) Classify each solid as having a basic anion, a weakly acidic cation, or neither. (c) Why did the student need buffers, rather than plain acid or base, and why must the buffer not contain a common ion?

**(a) Mass dissolved = 0.800 g − mass recovered.**

| Solid | pH 3 | pH 7 | pH 11 |
|---|---|---|---|
| P | 0.004 g | 0.005 g | 0.004 g |
| Q | 0.060 g | 0.006 g | 0.006 g |
| R | 0.018 g | 0.018 g | 0.181 g |

**(b)** *P:* the three values differ by only 0.001 g, which is the precision of the balance. There is no real change with pH, so **neither** ion of P is acidic or basic.
*Q:* about ten times as much dissolves at pH 3 as at pH 7, and pH 7 and pH 11 give the same result. Acid removes one of Q's ions, so Q has a **basic anion**. Because nothing changes between pH 7 and 11, the anion is a base whose conjugate acid has a pK_a below 7.
*R:* the mass dissolved is unchanged from pH 3 to pH 7 but about ten times larger at pH 11. Base removes one of R's ions, so R has a **weakly acidic cation**.

**(c)** Dissolving Q uses up H₃O⁺, and dissolving R uses up OH⁻. In plain acid or base, the pH would drift as the solid dissolved. A buffer with enough capacity ([Topic 8.10](/advanced-course-resources/chemistry/8-10-buffer-capacity-study-guide/)) keeps the pH nearly constant, so each result belongs to one pH value. A common ion from the buffer would lower the solubility (Topic 7.12) and hide the pH effect.

**Lesson.** When you read data, compare differences with the precision of the measurement before you claim a trend.

## Worked example 3: acid and tooth enamel

**Question.** The mineral in tooth enamel is mainly hydroxyapatite, Ca₅(PO₄)₃OH. Bacteria in the mouth turn sugars into acids. Explain why this acid can dissolve enamel.

**Answer.** In water, a little hydroxyapatite dissolves:

Ca₅(PO₄)₃OH(s) ⇌ 5 Ca²⁺(aq) + 3 PO₄³⁻(aq) + OH⁻(aq)

Two of its ions are bases. H₃O⁺ converts PO₄³⁻ to HPO₄²⁻ (and further), and converts OH⁻ to water. Both changes lower Q below K_sp, so the equilibrium shifts to the right and more enamel dissolves. The lower the pH near the tooth surface, the more enamel can dissolve before equilibrium is reached.

**Extension.** Fluoride treatments help form fluorapatite, which resists acid attack better than hydroxyapatite. One part of the reason is that F⁻ is a much weaker base than OH⁻, so acid removes it far less readily.

## What you will not be asked to do

The course asks for **qualitative** reasoning only. You need to predict the direction of the change, write the reaction that removes an ion, and explain the shift with Le Châtelier's principle. Calculating solubility at a given pH is not assessed. You may still meet K_sp calculations (Topic 7.11) and pH calculations (Topics 8.2 and 8.3) on their own.

## Common misconceptions

- **"Acid makes every salt more soluble."** Only salts with a basic anion or hydroxide. AgCl, AgBr and AgI do not respond to acid.
- **"The pH changes K_sp."** K_sp depends only on temperature. The pH changes the solubility by removing ions, not the constant.
- **"H₃O⁺ reacts with the metal cation."** In these examples the acid reacts with the **anion**: CO₃²⁻, F⁻, PO₄³⁻ or OH⁻.
- **"To dissolve a chloride, add HCl."** The Cl⁻ in hydrochloric acid is a common ion. It can only lower the solubility of a chloride salt.
- **"Adding base always lowers solubility."** It lowers the solubility of a hydroxide (common ion), but it **raises** the solubility of a salt whose cation is a weak acid.
- **"Any change in the data is a real trend."** A difference no larger than the balance's precision is not evidence of a pH effect (Worked example 2, solid P).

## Where this leads

This topic ends Unit 8 and joins it to Unit 7: acid-base reactions are another way to apply a stress to a solubility equilibrium. Next, [Topic 9.1](/advanced-course-resources/chemistry/9-1-introduction-entropy-study-guide/) begins thermodynamics; in Topic 9.6 you will see why dissolving is favourable for some salts and not others. Try the [practice questions](/advanced-course-resources/chemistry/8-11-ph-solubility-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/8-11-ph-solubility-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/8-11-ph-solubility-checklist/) to consolidate.
