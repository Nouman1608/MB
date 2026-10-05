---
resourceId: "mb-ap-chem-7.6-study-guide"
title: "Properties of the Equilibrium Constant: Study Guide (Chemistry 7.6)"
description: "Learn how K changes when you reverse an equation, multiply its coefficients or add equations together, and how to build K for an overall multistep process."
course: "chemistry"
unit: 7
topics: ["7.6"]
resourceType: "study-guide"
prerequisites:
  - "Writing Kc and Kp expressions, leaving out pure solids and liquids (Topic 7.3)"
  - "What the size of K means (Topic 7.5)"
  - "Laws of indices: (xᵃ)ᵇ = xᵃᵇ, x⁻¹ = 1/x and x^½ = √x"
prerequisiteResources: ["mb-ap-chem-7.5-study-guide"]
learningObjectives:
  - "Find K for the reverse of a reaction"
  - "Find K when the coefficients of an equation are multiplied by a whole-number or fractional factor"
  - "Combine equations, including intermediate steps, and find K for the overall reaction"
  - "Prove each rule by writing out the equilibrium expressions"
  - "Apply the same rules to the reaction quotient Q"
skills: ["5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Powers, reciprocals and square roots; K values on this page are invented for practice and written without units"
related: ["mb-ap-chem-7.6-revision-notes", "mb-ap-chem-7.6-practice", "mb-ap-chem-7.6-checklist"]
next: "mb-ap-chem-7.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A value of K belongs to one equation written one way. Change the equation and K changes."
  - "Reverse the equation: K becomes 1/K."
  - "Multiply every coefficient by c: K becomes Kᶜ (c = 2 squares K; c = ½ takes the square root)."
  - "Add equations: multiply their K values. Species that appear on both sides cancel."
  - "Q has the same form as K, so the same rules apply to Q."
faqs:
  - question: "Does reversing or doubling the equation change the actual mixture in the flask?"
    answer: "No. The chemicals and their concentrations at equilibrium are the same. Only the way you write the equation changes, so the number K that matches that equation changes."
  - question: "How do these rules compare with Hess's law for ΔH?"
    answer: "They run in parallel. Reversing changes the sign of ΔH but inverts K. Multiplying by c multiplies ΔH by c but raises K to the power c. Adding equations adds ΔH values but multiplies K values."
  - question: "Can I combine a Kc with a Kp?"
    answer: "No. Combine Kc values with Kc values and Kp values with Kp values. Converting between Kc and Kp is not assessed in this course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## One reaction, many equations

The same chemical change can be written in several ways. You can write it forwards or backwards, with whole-number coefficients or with halves. Each way gives a different K expression, so each has its own value of K.

This matters for two reasons:

1. A data table may give K for one version of an equation when the question asks about another version.
2. Many processes happen in steps. If you know K for each step, you can find K for the overall process without doing any new experiments.

All the rules below come from one idea: **write out the expressions and see what happens to them.** If you can do that, you never need to memorise the rules blindly. In this guide the K values are invented for practice.

## Rule 1: reversing an equation inverts K

Take 2 NO(g) + O₂(g) ⇌ 2 NO₂(g), with

K₁ = [NO₂]² / ([NO]²[O₂])

Written the other way, 2 NO₂(g) ⇌ 2 NO(g) + O₂(g), the products and reactants swap places:

K₂ = [NO]²[O₂] / [NO₂]² = 1 / K₁

So **K_reverse = 1 / K_forward**. This fits Topic 7.5: if the forward reaction is strongly product-favoured (large K), the reverse reaction is strongly reactant-favoured (small K).

## Rule 2: multiplying the coefficients by c raises K to the power c

Coefficients become powers in the expression. Multiply every coefficient by c and every power is multiplied by c, so the whole expression is raised to the power c.

Halve the equation above: NO(g) + ½ O₂(g) ⇌ NO₂(g).

K₃ = [NO₂] / ([NO][O₂]^½) = (K₁)^½ = √K₁

Doubling an equation **squares** K; it does not double it. Tripling cubes K. Halving takes the square root.

## Rule 3: adding equations multiplies K values

When you add two equations, you multiply their expressions. Anything that appears as a product of the first step and a reactant of the second step cancels, just as it cancels from the overall equation.

A two-step pathway that could make NO₂ (values invented):

| Step | Equation | K |
|---|---|---|
| 1 | 2 NO(g) ⇌ N₂O₂(g) | K_a = 80 |
| 2 | N₂O₂(g) + O₂(g) ⇌ 2 NO₂(g) | K_b = 8.0 × 10⁷ |
| Overall | 2 NO(g) + O₂(g) ⇌ 2 NO₂(g) | K = K_a × K_b = 6.4 × 10⁹ |

Check with the expressions:

K_a × K_b = [N₂O₂]/[NO]² × [NO₂]²/([N₂O₂][O₂]) = [NO₂]² / ([NO]²[O₂])

The intermediate N₂O₂ cancels, and what is left is the expression for the overall equation. This is how you **represent a multistep process with one overall expression**: add the steps, multiply the K values, and check that the intermediates cancel.

## Summary of the rules

| What you do to the equation | What happens to K | What happens to ΔH (Topic 6.9) |
|---|---|---|
| Reverse it | K → 1/K | ΔH → −ΔH |
| Multiply all coefficients by c | K → Kᶜ | ΔH → c × ΔH |
| Add two equations | K = K₁ × K₂ | ΔH = ΔH₁ + ΔH₂ |

A neat way to remember the link: whatever ΔH does by adding or multiplying, K does one level up, by multiplying or raising to a power.

The rules are the same for Kp. Partial pressures take the place of concentrations, but coefficients still become powers, so reversing, rescaling and adding work in exactly the same way. Just keep every K in one calculation the same type.

## A strategy for any target equation

Questions on this topic usually give you two or three equations with their K values and ask for K for a new "target" equation. Before calculating anything, identify what you need from the information given.

1. **Find each species in the target.** Pick a substance that appears in only one of the given equations. Note which side of the target it is on and its coefficient.
2. **Match that equation to the target.** If the substance is on the wrong side, reverse the equation (K → 1/K). If its coefficient is wrong, multiply the whole equation (K → Kᶜ).
3. **Repeat for the other given equations.**
4. **Add the adjusted equations** and cancel anything that appears on both sides. The result must be exactly the target, with the same coefficients. If it is not, go back and check steps 1 to 3.
5. **Multiply the adjusted K values.** Only now do you use the calculator.
6. **Sense-check the size.** A reversed product-favoured reaction should give a small K, and squaring a K below 1 should make it smaller still.

Keep a short record of what you did to each equation, such as "(1) × 2, (2) unchanged, then reverse". It makes the calculation easy to follow, and it shows your reasoning if the question asks for a justification.

## Worked example 1: one equation, three versions

**Question.** At a certain temperature, 2 NO(g) + O₂(g) ⇌ 2 NO₂(g) has Kc = 6.4 × 10⁹ (invented value). Find Kc at the same temperature for:
(a) 2 NO₂(g) ⇌ 2 NO(g) + O₂(g)
(b) NO(g) + ½ O₂(g) ⇌ NO₂(g)
(c) NO₂(g) ⇌ NO(g) + ½ O₂(g)

**(a) Reversed.** Kc = 1 / (6.4 × 10⁹) = **1.6 × 10⁻¹⁰** (1.5625 × 10⁻¹⁰ before rounding).

**(b) Halved.** Every coefficient × ½, so Kc = (6.4 × 10⁹)^½ = √(6.4 × 10⁹) = **8.0 × 10⁴**.

**(c) Halved and reversed.** Apply both changes: Kc = 1 / (8.0 × 10⁴) = **1.3 × 10⁻⁵** (1.25 × 10⁻⁵). The order does not matter: √(1.5625 × 10⁻¹⁰) gives the same answer.

**Check.** Write (c) out: [NO][O₂]^½ / [NO₂]. This is 1 / √([NO₂]²/([NO]²[O₂])), which is 1 / √K. ✓

**Common wrong answers.** 3.2 × 10⁹ for (b) halves K instead of taking the square root. −6.4 × 10⁹ for (a) treats K like ΔH. A K value can never be negative.

## Worked example 2: building K for a target equation

**Question.** Two invented values at the same temperature:

- Equation (1): S(s) + O₂(g) ⇌ SO₂(g), K₁ = 5.0 × 10¹²
- Equation (2): 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), K₂ = 9.0 × 10⁴

Find K for (i) 2 S(s) + 3 O₂(g) ⇌ 2 SO₃(g) and (ii) SO₃(g) ⇌ S(s) + 3/2 O₂(g).

**Plan.** The target (i) has 2 S on the left, so double equation (1). Then add equation (2) so that the 2 SO₂ cancels.

1. **Double (1):** 2 S(s) + 2 O₂(g) ⇌ 2 SO₂(g). K = K₁² = (5.0 × 10¹²)² = 2.5 × 10²⁵.
2. **Add (2):** 2 S(s) + 2 O₂(g) + 2 SO₂(g) + O₂(g) ⇌ 2 SO₂(g) + 2 SO₃(g). Cancel 2 SO₂ and collect O₂: 2 S(s) + 3 O₂(g) ⇌ 2 SO₃(g). ✓
3. **Multiply the K values:** K(i) = K₁² × K₂ = 2.5 × 10²⁵ × 9.0 × 10⁴ = **2.3 × 10³⁰** (2.25 × 10³⁰).
4. **For (ii),** the target is (i) reversed and halved. Reverse: 1/K. Halve: square root. K(ii) = 1 / √(2.25 × 10³⁰) = 1 / (1.5 × 10¹⁵) = **6.7 × 10⁻¹⁶**.

**Check with the expressions.** Sulfur is a solid, so it does not appear (Topic 7.3). K₁ = [SO₂]/[O₂] and K₂ = [SO₃]²/([SO₂]²[O₂]).
K₁² × K₂ = [SO₂]²/[O₂]² × [SO₃]²/([SO₂]²[O₂]) = [SO₃]² / [O₂]³, which is the expression for (i). ✓

<figure>
<svg viewBox="0 0 640 400" role="img" aria-labelledby="k-build-title k-build-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="k-build-title">Building K for a target equation step by step</title>
<desc id="k-build-desc">Four boxes stacked vertically, joined by downward arrows. Box 1: S plus O2 equilibrium with SO2, K equals K1, 5.0 times 10 to the 12. Arrow labelled multiply by 2, so square K. Box 2: 2 S plus 2 O2 equilibrium with 2 SO2, K equals K1 squared, 2.5 times 10 to the 25. Arrow labelled add equation 2, so multiply by K2. Box 3: 2 S plus 3 O2 equilibrium with 2 SO3, K equals K1 squared times K2, 2.3 times 10 to the 30. Arrow labelled reverse and multiply by one half, so take 1 over the square root. Box 4: SO3 equilibrium with S plus three halves O2, K equals 6.7 times 10 to the minus 16.</desc>
<defs><marker id="k6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="30" y="10" width="380" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="220" y="34" text-anchor="middle" font-size="15" fill="#1d2b44">S(s) + O₂(g) ⇌ SO₂(g)</text>
<text x="220" y="56" text-anchor="middle" font-size="13" fill="#1d2b44">equation (1), K = K₁</text>
<text x="430" y="43" font-size="14" font-weight="600" fill="#1d2b44">K₁ = 5.0 × 10¹²</text>
<path d="M220 68 V106" stroke="#1d2b44" stroke-width="2" marker-end="url(#k6a)"/>
<text x="235" y="92" font-size="13" fill="#1d2b44">× 2 → square K</text>
<rect x="30" y="110" width="380" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="220" y="134" text-anchor="middle" font-size="15" fill="#1d2b44">2 S(s) + 2 O₂(g) ⇌ 2 SO₂(g)</text>
<text x="220" y="156" text-anchor="middle" font-size="13" fill="#1d2b44">K = K₁²</text>
<text x="430" y="143" font-size="14" font-weight="600" fill="#1d2b44">2.5 × 10²⁵</text>
<path d="M220 168 V206" stroke="#1d2b44" stroke-width="2" marker-end="url(#k6a)"/>
<text x="235" y="192" font-size="13" fill="#1d2b44">add (2): 2 SO₂ + O₂ ⇌ 2 SO₃ → multiply by K₂</text>
<rect x="30" y="210" width="380" height="56" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="220" y="234" text-anchor="middle" font-size="15" fill="#1d2b44">2 S(s) + 3 O₂(g) ⇌ 2 SO₃(g)</text>
<text x="220" y="256" text-anchor="middle" font-size="13" fill="#1d2b44">target (i), K = K₁² × K₂</text>
<text x="430" y="243" font-size="14" font-weight="600" fill="#1d2b44">2.3 × 10³⁰</text>
<path d="M220 268 V306" stroke="#1d2b44" stroke-width="2" marker-end="url(#k6a)"/>
<text x="235" y="292" font-size="13" fill="#1d2b44">reverse and × ½ → 1 / √K</text>
<rect x="30" y="310" width="380" height="56" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="220" y="334" text-anchor="middle" font-size="15" fill="#1d2b44">SO₃(g) ⇌ S(s) + 3/2 O₂(g)</text>
<text x="220" y="356" text-anchor="middle" font-size="13" fill="#1d2b44">target (ii), K = 1 / √(K₁² × K₂)</text>
<text x="430" y="343" font-size="14" font-weight="600" fill="#1d2b44">6.7 × 10⁻¹⁶</text>
<text x="30" y="392" font-size="12" fill="#1d2b44">Each arrow names the change to the equation and the matching change to K.</text>
</svg>
<figcaption>Figure 1. The route in Worked example 2. Every change to the equation (left) has a matching change to K (arrow labels); the right-hand column gives the value after each step. The two shaded boxes are the targets.</figcaption>
</figure>

## The same rules apply to Q

The reaction quotient Q has exactly the same form as K; the only difference is that Q uses the concentrations at any moment, not only at equilibrium (Topic 7.3). So every manipulation above works for Q too.

**Example.** A flask holds [NO] = 0.20 M, [O₂] = 0.10 M and [NO₂] = 0.40 M.

- For 2 NO + O₂ ⇌ 2 NO₂: Q = (0.40)² / ((0.20)² × 0.10) = 0.16 / 0.0040 = 40.
- For the reverse equation: Q = 1/40 = 0.025. Working it directly gives (0.20)² × 0.10 / (0.40)² = 0.025 ✓.
- For the halved equation NO + ½ O₂ ⇌ NO₂: Q = √40 = 6.3. Directly: 0.40 / (0.20 × √0.10) = 6.3 ✓.

Because Q and K change in the same way, comparing them always gives the same conclusion however you write the equation. With the forward equation, Q = 40 is far below K = 6.4 × 10⁹. With the reverse equation, Q = 0.025 is far above K = 1.6 × 10⁻¹⁰. Both say the mixture still has to make more NO₂ to reach equilibrium. You will use Q and K this way in [Topic 7.7](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-study-guide/).

## Common misconceptions

- **"Doubling the equation doubles K."** It squares K. Coefficients are powers in the expression, so doubling every coefficient doubles every power, which squares the whole expression.
- **"Adding equations adds the K values."** It multiplies them. Adding is the rule for ΔH, not for K.
- **"Reversing makes K negative."** It makes K the reciprocal. K is always positive.
- **"Halving the equation halves K."** It takes the square root.
- **Forgetting to apply the power to the whole K.** If you double equation (1) before adding, you must use K₁², not K₁.
- **Mixing Kc and Kp.** Every K in one calculation must be the same type.
- **Including solids or pure liquids when checking.** They still drop out of every expression, so they do not affect any of the rules.
- **"Changing the equation changes the mixture."** It does not. The equilibrium concentrations stay the same; only the number that matches your chosen equation changes.

## Where this leads

Now that you can match a value of K to any version of an equation, [Topic 7.7](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-study-guide/) uses K to calculate the concentrations or partial pressures at equilibrium from the starting conditions. The same rules return in Unit 8, where the K values for acids and their conjugate bases are linked by multiplying equations. Try the [practice questions](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-checklist/) to consolidate.
