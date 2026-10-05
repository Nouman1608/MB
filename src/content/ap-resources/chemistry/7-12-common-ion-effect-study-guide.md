---
resourceId: "mb-ap-chem-7.12-study-guide"
title: "Common-Ion Effect: Study Guide (Chemistry 7.12)"
description: "Explain why a salt dissolves less in a solution that already contains one of its ions, calculate the reduced solubility from K_sp, and find K_sp from common-ion data."
course: "chemistry"
unit: 7
topics: ["7.12"]
resourceType: "study-guide"
prerequisites:
  - "K_sp expressions and molar solubility (Topic 7.11)"
  - "Le Châtelier's principle and comparing Q with K (Topics 7.9 and 7.10)"
prerequisiteResources: ["mb-ap-chem-7.11-study-guide"]
learningObjectives:
  - "Use Le Châtelier's principle to explain why a common ion lowers the solubility of a salt"
  - "State which quantities change (solubility, ion concentrations) and which do not (K_sp) when a common ion is added"
  - "Calculate the molar solubility of a salt in a solution that already contains one of its ions"
  - "Calculate K_sp from a solubility measured in a solution containing a common ion"
  - "Explain how using a solution with a common ion, instead of pure water, changes the results of a solubility experiment"
skills: ["2", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "K_sp of AgCl = 1.8 × 10⁻¹⁰ at 25 °C; M(AgCl) = 143.32 g mol⁻¹. Salts named with letters (R, A, T, X) are fictional. Keep unrounded values to the end"
related: ["mb-ap-chem-7.12-revision-notes", "mb-ap-chem-7.12-practice", "mb-ap-chem-7.12-checklist"]
next: "mb-ap-chem-7.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A common ion is an ion that the dissolving salt shares with something already in the solution."
  - "Adding a common ion raises Q above K_sp, so the equilibrium shifts towards the solid: the salt becomes less soluble."
  - "K_sp does not change (only temperature changes it); the molar solubility and the other ion's concentration fall."
  - "To calculate: put the common-ion concentration into the K_sp expression with s for the dissolved salt, then use c + s ≈ c when s is tiny."
  - "Measuring solubility in a solution with a common ion and then using the pure-water formula gives a K_sp that is far too small."
faqs:
  - question: "Does adding sodium nitrate to saturated silver chloride lower its solubility?"
    answer: "Not through the common-ion effect: neither Na⁺ nor NO₃⁻ appears in the K_sp expression of AgCl, so Q does not change. In the model used in this course, the solubility stays the same."
  - question: "When can I use the approximation c + s ≈ c?"
    answer: "When the amount the salt adds is tiny compared with the common ion already there. Check after solving: if xs (or ys) is less than about 5% of c, the approximation is fine. It is most likely to fail when the common ion is squared or cubed in K_sp and c is small, so never skip the check."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a common ion does

In [Topic 7.11](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-study-guide/) every salt dissolved in pure water. Real solutions are rarely that clean. Sea water, tap water and lab reagents already contain ions. When the water already holds one of the ions that the salt releases, that ion is called a **common ion**.

Take a saturated solution of silver chloride at equilibrium:

AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)  K_sp = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰

Now dissolve some sodium chloride in it. NaCl is soluble, so it adds Cl⁻ ions (and Na⁺ ions, which play no part). Two ways of seeing what happens give the same answer.

**Le Châtelier's principle (Topic 7.9).** Adding a product (Cl⁻) puts a stress on the equilibrium. The system responds by using up some of the added Cl⁻: Ag⁺ and Cl⁻ combine to form more solid AgCl. The equilibrium shifts to the left.

**Q and K (Topic 7.10).** Straight after the NaCl dissolves, [Cl⁻] is larger but [Ag⁺] has not changed yet. So Q = [Ag⁺][Cl⁻] is now **greater than K_sp**. The reverse reaction (precipitation) runs until Q falls back to K_sp.

Either way, the result is the **common-ion effect**: a salt is less soluble in a solution that already contains one of its ions than in pure water.

## What changes and what does not

| Quantity | Effect of adding a common ion (constant temperature) |
|---|---|
| K_sp | **No change.** It is an equilibrium constant; only temperature changes it. |
| Molar solubility, s | **Decreases.** Less of the salt can dissolve. |
| Concentration of the common ion | **Higher** than in the pure saturated solution (most of it came from the added salt). |
| Concentration of the other ion | **Lower.** For AgCl with added Cl⁻, [Ag⁺] falls. |
| Mass of undissolved solid | **Increases** (some ions precipitate), or less solid dissolves in the first place. |

Notice the balance: one ion concentration goes up, the other goes down, and their product (raised to the right powers) returns to the same K_sp.

Adding an ion that is **not** common, such as NO₃⁻ or Na⁺ to AgCl, does not appear in the K_sp expression, so it does not change Q. In the model used in this course, it leaves the solubility unchanged.

## Calculating solubility with a common ion

The method is the one from Topic 7.11 with one extra term.

1. Write the dissolving equation and the K_sp expression.
2. Let s be the molar solubility **in this solution**. The salt adds xs of its cation and ys of its anion.
3. Add the common ion that was already there, c, to the ion it matches: for example [Cl⁻] = c + s.
4. Substitute into K_sp and solve for s.
5. **Simplify** when s is tiny compared with c: c + s ≈ c. Then check the simplification afterwards.

For AgCl in a solution with [Cl⁻] = c already present:

K_sp = (s)(c + s) ≈ s × c, so s ≈ K_sp ÷ c.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-labelledby="ci-title ci-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ci-title">Molar solubility of silver chloride in water and in sodium chloride solutions</title>
<desc id="ci-desc">A dot plot on a logarithmic axis running from 10 to the minus 10 to 10 to the minus 4 moles per litre. Pure water: 1.3 times 10 to the minus 5. In 0.0010 molar sodium chloride: 1.8 times 10 to the minus 7. In 0.010 molar: 1.8 times 10 to the minus 8. In 0.10 molar: 1.8 times 10 to the minus 9. Each tenfold increase in chloride concentration lowers the solubility tenfold.</desc>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4" opacity="0.5">
<line x1="120" y1="30" x2="120" y2="225"/><line x1="200" y1="30" x2="200" y2="225"/><line x1="280" y1="30" x2="280" y2="225"/>
<line x1="360" y1="30" x2="360" y2="225"/><line x1="440" y1="30" x2="440" y2="225"/><line x1="520" y1="30" x2="520" y2="225"/><line x1="600" y1="30" x2="600" y2="225"/>
</g>
<line x1="120" y1="225" x2="600" y2="225" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="120" y="243">10⁻¹⁰</text><text x="200" y="243">10⁻⁹</text><text x="280" y="243">10⁻⁸</text><text x="360" y="243">10⁻⁷</text>
<text x="440" y="243">10⁻⁶</text><text x="520" y="243">10⁻⁵</text><text x="600" y="243">10⁻⁴</text>
<text x="360" y="268" font-size="13">Molar solubility of AgCl, s (mol L⁻¹), logarithmic scale</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="112" y="59">pure water</text>
<text x="112" y="104">0.0010 M NaCl</text>
<text x="112" y="149">0.010 M NaCl</text>
<text x="112" y="194">0.10 M NaCl</text>
</g>
<g fill="#1d2b44">
<circle cx="530.2" cy="55" r="7"/>
<rect x="373.4" y="93" width="14" height="14"/>
<path d="M300.4 141 L308.4 155 L292.4 155 z"/>
<path d="M220.4 183 L228.4 190 L220.4 197 L212.4 190 z"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="544" y="59">1.3 × 10⁻⁵</text>
<text x="396" y="104">1.8 × 10⁻⁷</text>
<text x="316" y="149">1.8 × 10⁻⁸</text>
<text x="236" y="194">1.8 × 10⁻⁹</text>
</g>
</svg>
<figcaption>Figure 1. Molar solubility of AgCl at 25 °C (K_sp = 1.8 × 10⁻¹⁰), each row marked with a different symbol and labelled with its value. Moving down, [Cl⁻] rises tenfold each row and the solubility falls tenfold. Even 0.0010 M chloride cuts the solubility to about 1/75 of its value in pure water.</figcaption>
</figure>

In pure water s = √K_sp = 1.3 × 10⁻⁵ M. With 0.0010 M Cl⁻ present, s ≈ 1.8 × 10⁻¹⁰ ÷ 0.0010 = 1.8 × 10⁻⁷ M. The check: s is about 0.02% of c, so ignoring it was safe.

## Worked example 1: which common ion matters more?

**Question.** The fictional salt RA₂ dissolves as RA₂(s) ⇌ R²⁺(aq) + 2 A⁻(aq), with K_sp = 3.2 × 10⁻⁸ at 25 °C. Calculate its molar solubility in (a) pure water, (b) 0.100 M NaA, (c) 0.100 M R(NO₃)₂. Both NaA and R(NO₃)₂ are soluble.

**(a) Pure water.** [R²⁺] = s, [A⁻] = 2s. K_sp = 4s³, so s = ∛(3.2 × 10⁻⁸ ÷ 4) = ∛(8.0 × 10⁻⁹) = **2.0 × 10⁻³ M**.

**(b) 0.100 M A⁻ already present.**

| | [R²⁺] | [A⁻] |
|---|---|---|
| Before any RA₂ dissolves | 0 | 0.100 |
| At equilibrium | s | 0.100 + 2s ≈ 0.100 |

K_sp = s(0.100)² so s = 3.2 × 10⁻⁸ ÷ 0.0100 = **3.2 × 10⁻⁶ M**.
Check: 2s = 6.4 × 10⁻⁶, under 0.01% of 0.100. The approximation holds.

**(c) 0.100 M R²⁺ already present.**

| | [R²⁺] | [A⁻] |
|---|---|---|
| Before any RA₂ dissolves | 0.100 | 0 |
| At equilibrium | 0.100 + s ≈ 0.100 | 2s |

K_sp = (0.100)(2s)² = 0.400 s², so s = √(3.2 × 10⁻⁸ ÷ 0.400) = √(8.0 × 10⁻⁸) = **2.8 × 10⁻⁴ M**.
Check: s is about 0.3% of 0.100. The approximation holds.

**Interpretation.** Both common ions lower the solubility, but by very different amounts: 625 times with A⁻ present and only about 7 times with R²⁺ present, at the same 0.100 M. The common ion A⁻ appears **squared** in K_sp, so fixing its concentration has a much bigger effect. Always put the common ion in the right place in the expression before you simplify.

## Worked example 2: K_sp from a common-ion experiment, and a procedure error

**Question.** A student wants K_sp for the fictional 1:1 salt TX, which dissolves as TX(s) ⇌ T⁺(aq) + X⁻(aq). By mistake she shakes the solid with 0.0500 M NaX instead of distilled water. When equilibrium is reached, an analysis gives [T⁺] = 3.0 × 10⁻⁷ M.

(a) Calculate K_sp correctly from her data.
(b) She calculates K_sp as [T⁺]², as she would for pure water. Find her value, and explain how her change in procedure affected the result.

**(a)** All the T⁺ came from TX, so s = 3.0 × 10⁻⁷ M. The X⁻ comes from both sources: [X⁻] = 0.0500 + 3.0 × 10⁻⁷ ≈ 0.0500 M.
K_sp = [T⁺][X⁻] = (3.0 × 10⁻⁷)(0.0500) = **1.5 × 10⁻⁸**.

**(b)** Her value: (3.0 × 10⁻⁷)² = **9.0 × 10⁻¹⁴**, about 170 000 times too small.
The 0.0500 M X⁻ already in the solution shifted the equilibrium to the left, so far less TX dissolved than would dissolve in pure water. Her formula [T⁺]² assumes [X⁻] = [T⁺], which is only true in pure water. Using the low [T⁺] for both ions makes the calculated K_sp **much too small**. If she had used distilled water, the solubility would have been √(1.5 × 10⁻⁸) = 1.2 × 10⁻⁴ M, and [T⁺]² would then give the right K_sp.

**Lesson.** A common ion changes the measured solubility, not the K_sp. As long as you know the common-ion concentration, you can still find the correct K_sp from the data.

## Worked example 3: washing a precipitate

**Question.** In a gravimetric analysis, a student collects a precipitate of AgCl on a filter and must rinse it with 50.0 mL of liquid to wash away other ions. Compare the mass of AgCl lost if she rinses with (a) distilled water, (b) 0.010 M HCl. Assume the rinse liquid becomes saturated with AgCl. (K_sp = 1.8 × 10⁻¹⁰; M = 143.32 g mol⁻¹.)

**(a) Distilled water.** s = √(1.8 × 10⁻¹⁰) = 1.34 × 10⁻⁵ M.
Mass lost = 1.34 × 10⁻⁵ mol L⁻¹ × 0.0500 L × 143.32 g mol⁻¹ = **9.6 × 10⁻⁵ g** (about 0.1 mg).

**(b) 0.010 M HCl.** The Cl⁻ is a common ion. s ≈ 1.8 × 10⁻¹⁰ ÷ 0.010 = 1.8 × 10⁻⁸ M.
Mass lost = 1.8 × 10⁻⁸ × 0.0500 × 143.32 = **1.3 × 10⁻⁷ g**.

**Interpretation.** The dilute chloride rinse loses about 750 times less precipitate. That is why analysts rinse a precipitate with a dilute solution containing a common ion: the change in procedure makes the measured mass closer to the true mass. For a large precipitate the water loss is small anyway, but in careful work, or with a more soluble salt, the choice of rinse matters.

## Removing an ion has the opposite effect

Le Châtelier's principle works in both directions. If something in the solution **removes** one of the salt's ions, Q falls below K_sp and more solid dissolves. Topic 8.11 uses this idea to explain why salts of weak-acid anions or hydroxides become more soluble in acid. That link is qualitative only: you will not be asked to calculate solubility as a function of pH.

## Common misconceptions

- **"Adding a common ion lowers K_sp."** K_sp is constant at constant temperature. What falls is the solubility, s.
- **"The common ion's concentration goes down."** It ends up higher than in the pure saturated solution; it is the *other* ion whose concentration falls.
- **Leaving out the common ion.** If you write K_sp = s² for AgCl in NaCl solution, you have ignored the Cl⁻ that was already there.
- **Forgetting the coefficient and power.** For RA₂ in A⁻ solution, K_sp = s(c)², not s × c.
- **Approximating without checking.** c + s ≈ c is valid only when s (or 2s, 3s) is tiny compared with c. Check after solving.
- **"Any added salt lowers the solubility."** Only an ion that appears in the K_sp expression is a common ion. NaNO₃ does not lower the solubility of AgCl in this model.
- **Using the pure-water formula on common-ion data.** It gives a K_sp that is far too small (Worked example 2).

## Where this leads

This topic ends Unit 7. Equilibrium ideas carry straight into [Topic 8.1](/advanced-course-resources/chemistry/8-1-introduction-acids-bases-study-guide/), where water's own equilibrium and K_w set up acid-base chemistry. The common-ion idea returns with buffers later in Unit 8. Try the [practice questions](/advanced-course-resources/chemistry/7-12-common-ion-effect-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-12-common-ion-effect-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-12-common-ion-effect-checklist/) to consolidate.
