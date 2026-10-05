---
resourceId: "mb-ap-chem-9.2-study-guide"
title: "Absolute Entropy and Entropy Change: Study Guide (Chemistry 9.2)"
description: "Use tables of standard molar entropies to calculate the entropy change of a reaction or physical process, with coefficients, states, units and sign checks handled correctly."
course: "chemistry"
unit: 9
topics: ["9.2"]
resourceType: "study-guide"
prerequisites:
  - "Predicting the sign of ΔS from phase and moles of gas (Topic 9.1)"
  - "Products-minus-reactants calculations with enthalpies of formation (Topic 6.8)"
  - "Converting a mass to moles (Topic 1.1)"
prerequisiteResources: ["mb-ap-chem-9.1-study-guide"]
learningObjectives:
  - "Explain what a standard molar entropy is and why every substance, including an element, has a positive value at 298 K"
  - "Calculate the standard entropy change of a reaction as products minus reactants, multiplying each value by its coefficient"
  - "Calculate the entropy change of a physical process, such as vaporisation, from standard molar entropies"
  - "Work backwards from a known entropy change to an unknown standard molar entropy"
  - "Check a calculated ΔS° against a prediction from moles of gas, and convert it to kJ K⁻¹ mol⁻¹ or scale it to a given amount"
skills: ["5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Standard molar entropies at 298 K are given in J K⁻¹ mol⁻¹ in the table on this page; keep one decimal place. Molar masses: H 1.008, C 12.01, O 16.00 g mol⁻¹"
related: ["mb-ap-chem-9.2-revision-notes", "mb-ap-chem-9.2-practice", "mb-ap-chem-9.2-checklist"]
next: "mb-ap-chem-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A standard molar entropy, S°, is the absolute entropy of 1 mol of a substance at standard pressure, usually listed at 298 K, in J K⁻¹ mol⁻¹."
  - "Every substance has a positive S° at 298 K. Elements in their standard states are not zero, unlike their enthalpies of formation."
  - "ΔS°reaction = ΣnS°(products) − ΣnS°(reactants), where n is each coefficient in the balanced equation."
  - "Entropies are in joules, enthalpies in kilojoules. Divide ΔS° by 1000 before combining it with ΔH° in Topic 9.3."
  - "Always check the sign of your answer against the moles-of-gas prediction from Topic 9.1."
faqs:
  - question: "Why is S° for O₂(g) not zero, when its ΔH°f is zero?"
    answer: "ΔH°f is measured relative to the elements, so elements are zero by definition. Entropy has a true zero, a perfect crystal at absolute zero, and S° is measured from there. Any substance at 298 K has some entropy, so O₂(g) has a positive S°."
  - question: "What does 'per mole' mean in the unit of ΔS°reaction?"
    answer: "It means per mole of reaction: the amounts shown by the coefficients in the equation as written. If you double the equation, ΔS° doubles. If you reverse it, the sign changes."
  - question: "Do I need to memorise S° values?"
    answer: "No. Questions give you the values. You need to pick the right value for each substance and state, multiply by the coefficients, subtract in the right order and use the right units."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From predictions to numbers

In [Topic 9.1](/advanced-course-resources/chemistry/9-1-introduction-entropy-study-guide/) you predicted the **sign** of ΔS from what the particles were doing: changing phase, gaining space, gaining energy, or changing the number of moles of gas. That reasoning tells you the direction of the change, but not its size. It also fails when the moles of gas are equal on both sides.

This topic gives you the numbers. Chemists have measured the entropy of thousands of substances and listed them in tables. From those tables you can calculate ΔS for any reaction or physical change whose substances are listed.

## Absolute entropy and standard molar entropy

Enthalpy has no natural zero, so in Topic 6.8 you measured it **relative** to the elements. Entropy is different: it has a true starting point.

- **Background (the third law of thermodynamics):** a perfect crystal at absolute zero, 0 K, has zero entropy. Its particles are perfectly ordered and all in their lowest energy state, so there is only one way to arrange them and their energy.
- As a substance is warmed from 0 K, its energy becomes more dispersed, and it melts and boils on the way. Each step adds entropy.
- So every substance at 298 K has a **positive absolute entropy**. Because it is measured from a true zero, it is called *absolute*.

The **standard molar entropy**, **S°**, is the absolute entropy of **one mole** of a substance at standard pressure (1 bar). Tables usually list values at 298 K. The unit is **J K⁻¹ mol⁻¹** (joules per kelvin per mole). Notice: **joules**, not kilojoules.

Two points that trip students up:

1. The symbol is S°, not ΔS°. It is an amount the substance *has*, not a change.
2. **Elements are not zero.** O₂(g), H₂(g) and C(graphite) all have positive S° values. Do not carry the "elements are zero" rule over from enthalpies of formation.

## Patterns in the table

<figure>
<svg viewBox="0 0 720 330" role="img" aria-labelledby="s-bar-title s-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="s-bar-title">Standard molar entropies at 298 K for seven substances</title>
<desc id="s-bar-desc">A horizontal bar chart. The axis runs from 0 to 300 joules per kelvin per mole. Values: carbon as graphite, a solid, 5.7. Water as a liquid, 70.0. Methanol as a liquid, 126.8. Hydrogen gas, 130.7. Water as a gas, 188.8. Methanol as a gas, 239.9. Propane gas, 270.3. Solid and liquid bars are plain; gas bars are hatched. The gas form of water and of methanol has a much longer bar than the liquid form of the same substance, and propane, a larger molecule, has the largest value of all.</desc>
<defs><pattern id="s-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><path d="M0 0 V8" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<g font-size="13" fill="#1d2b44">
<text x="190" y="56" text-anchor="end">C(graphite), solid</text><rect x="200" y="40" width="9.1" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="217.1" y="56">5.7</text>
<text x="190" y="90" text-anchor="end">H₂O, liquid</text><rect x="200" y="74" width="112.0" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="320.0" y="90">70.0</text>
<text x="190" y="124" text-anchor="end">CH₃OH, liquid</text><rect x="200" y="108" width="202.9" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="410.9" y="124">126.8</text>
<text x="190" y="158" text-anchor="end">H₂, gas</text><rect x="200" y="142" width="209.1" height="22" fill="url(#s-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="417.1" y="158">130.7</text>
<text x="190" y="192" text-anchor="end">H₂O, gas</text><rect x="200" y="176" width="302.1" height="22" fill="url(#s-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="510.1" y="192">188.8</text>
<text x="190" y="226" text-anchor="end">CH₃OH, gas</text><rect x="200" y="210" width="383.8" height="22" fill="url(#s-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="591.8" y="226">239.9</text>
<text x="190" y="260" text-anchor="end">C₃H₈, gas</text><rect x="200" y="244" width="432.5" height="22" fill="url(#s-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="640.5" y="260">270.3</text>
</g>
<path d="M200 30 V280 H680" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><path d="M200 280 V286 M280 280 V286 M360 280 V286 M440 280 V286 M520 280 V286 M600 280 V286 M680 280 V286"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="200" y="300">0</text><text x="280" y="300">50</text><text x="360" y="300">100</text><text x="440" y="300">150</text><text x="520" y="300">200</text><text x="600" y="300">250</text><text x="680" y="300">300</text>
<text x="440" y="322" font-size="13">S° at 298 K (J K⁻¹ mol⁻¹)</text>
</g>
</svg>
<figcaption>Figure 1. Standard molar entropies at 298 K. Plain bars are solids and liquids; hatched bars are gases, and each label also names the state. Gases sit far above condensed phases, and the gas of a substance always has a higher S° than its liquid.</figcaption>
</figure>

What the chart shows, and how it links to Topic 9.1:

- **Gases have much larger S° values than liquids and solids.** Compare H₂O(l), 70.0, with H₂O(g), 188.8. This is why moles of gas dominate ΔS for reactions.
- **For one substance, S°(gas) > S°(liquid) > S°(solid).** Matter is more dispersed in each later phase.
- *Background:* among substances in the same phase, molecules with more atoms usually have larger S°. Propane, C₃H₈, has more ways to store and spread out energy than H₂: it has more atoms and bonds, so more ways to vibrate, bend and rotate.
- *Background:* hard, strongly bonded solids such as graphite have very low S°.

## Calculating ΔS° for a process

The entropy change for a process is the total entropy after it minus the total entropy before it:

> **ΔS°reaction = ΣnS°(products) − ΣnS°(reactants)**

where n is the coefficient of each species in the balanced equation. This is the same "products minus reactants" pattern you used with enthalpies of formation in Topic 6.8.

Here are the values used on this page. All are standard molar entropies at 298 K, rounded to one decimal place.

| Substance | S° (J K⁻¹ mol⁻¹) | Substance | S° (J K⁻¹ mol⁻¹) |
|---|---|---|---|
| C(graphite) | 5.7 | H₂(g) | 130.7 |
| CO(g) | 197.7 | O₂(g) | 205.2 |
| CO₂(g) | 213.8 | H₂O(l) | 70.0 |
| C₃H₈(g) | 270.3 | H₂O(g) | 188.8 |
| CH₃OH(l) | 126.8 | CH₃OH(g) | 239.9 |

A reliable routine:

1. **Write the balanced equation with state symbols.** H₂O(l) and H₂O(g) have different S° values; using the wrong one is a common error.
2. **Predict the sign first** from the moles of gas (Topic 9.1). This gives you a check.
3. **Multiply** each S° by its coefficient and **add** each side separately.
4. **Subtract**: products minus reactants.
5. **Write the unit**: J K⁻¹ mol⁻¹, meaning per mole of reaction as written.
6. **Compare** with your prediction. If the signs disagree, look for a missed coefficient or a wrong state.

**What "per mole of reaction" means.** The value belongs to the equation exactly as written. Double every coefficient and ΔS° doubles. Reverse the equation and ΔS° changes sign. For an actual sample, find how many moles of reaction occur and multiply.

## Worked example 1: combustion of propane

**Question.** Calculate ΔS° for the combustion of propane at 298 K:

C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(l)

Then (b) give the answer in kJ K⁻¹ mol⁻¹ and (c) find the entropy change when 11.0 g of propane burns completely.

1. **Predict.** Moles of gas: 1 + 5 = 6 on the left; 3 on the right (the water is liquid). Fewer moles of gas, so ΔS° should be **negative** and fairly large.
2. **Products.** 3(213.8) + 4(70.0) = 641.4 + 280.0 = 921.4 J K⁻¹ mol⁻¹.
3. **Reactants.** 270.3 + 5(205.2) = 270.3 + 1026.0 = 1296.3 J K⁻¹ mol⁻¹. O₂ is an element, but its S° is **not** zero, so it must be included.
4. **Subtract.** ΔS° = 921.4 − 1296.3 = **−374.9 J K⁻¹ mol⁻¹**.
5. **Check.** Negative, as predicted.
6. **(b)** Divide by 1000: −374.9 J K⁻¹ mol⁻¹ = **−0.3749 kJ K⁻¹ mol⁻¹**. You will need this form in Topic 9.3, where ΔS° is combined with ΔH° in kilojoules.
7. **(c)** M(C₃H₈) = 3(12.01) + 8(1.008) = 44.094 g mol⁻¹, so n = 11.0 g ÷ 44.094 g mol⁻¹ = 0.24947 mol. The equation has 1 mol of propane, so this is 0.24947 mol of reaction. ΔS = 0.24947 mol × (−374.9 J K⁻¹ mol⁻¹) = −93.53 J K⁻¹.

**Answer.** (a) −374.9 J K⁻¹ mol⁻¹; (b) −0.3749 kJ K⁻¹ mol⁻¹; (c) **−93.5 J K⁻¹** for the 11.0 g sample (3 significant figures). Note that the unit in (c) has no "mol⁻¹": it is the change for that particular sample.

**Why the state matters.** If you used H₂O(g) (188.8) instead of H₂O(l), you would get +100.3 J K⁻¹ mol⁻¹, a different sign. With water as a gas there are 7 mol of gas products against 6 mol of gas reactants, so a positive value would then be correct. Read the state symbols.

## Worked example 2: a physical process

**Question.** Calculate the standard entropy change for the vaporisation of methanol at 298 K, and explain the sign and size.

CH₃OH(l) → CH₃OH(g)

1. **Predict.** Liquid to gas: matter becomes far more dispersed, so ΔS° should be large and positive.
2. **Calculate.** ΔS° = S°(CH₃OH, g) − S°(CH₃OH, l) = 239.9 − 126.8 = **+113.1 J K⁻¹ mol⁻¹**.
3. **Explain.** In the liquid the molecules are held close together by hydrogen bonds and other intermolecular forces. In the gas they are far apart and move freely through a much larger volume, so the matter is much more dispersed.

**Compare.** The same calculation for water gives 188.8 − 70.0 = +118.8 J K⁻¹ mol⁻¹. Both vaporisations are large and positive, which matches the Topic 9.1 rule that liquid → gas is a big entropy step. The equation ΔS° = ΣnS°(products) − ΣnS°(reactants) works for physical changes as well as chemical reactions.

## Worked example 3: working backwards to an unknown S°

**Question.** For the reaction

CO(g) + 2 H₂(g) → CH₃OH(l)

ΔS° = −332.3 J K⁻¹ mol⁻¹. Use this and the values for H₂(g) and CH₃OH(l) to find S° for CO(g).

1. **Write the expression.** ΔS° = S°(CH₃OH, l) − [S°(CO) + 2 S°(H₂)].
2. **Substitute.** −332.3 = 126.8 − [S°(CO) + 2(130.7)] = 126.8 − S°(CO) − 261.4.
3. **Rearrange.** S°(CO) = 126.8 − 261.4 + 332.3 = **197.7 J K⁻¹ mol⁻¹**.
4. **Check.** It matches the table value. It is also sensible: a gas, with a value in the same range as other small gas molecules (130 to 240 J K⁻¹ mol⁻¹ in Figure 1).

**Watch the sign.** The given ΔS° is negative. Substituting it as +332.3 would give 126.8 − 261.4 − 332.3, a negative S°, which is impossible at 298 K. A negative absolute entropy always means a sign slip.

## Common misconceptions

- **"Elements have S° = 0."** That rule belongs to ΔH°f. Every substance, element or compound, has a positive S° at 298 K. Leaving out O₂ is the single most common error in combustion questions.
- **Forgetting coefficients.** In Worked example 1, 5 O₂ contributes 5 × 205.2 = 1026.0, not 205.2.
- **Reactants minus products.** Always products minus reactants. Your sign check from moles of gas will catch this.
- **Using the wrong state.** H₂O(l) and H₂O(g) differ by almost 119 J K⁻¹ mol⁻¹. One wrong state can flip the sign.
- **Mixing J and kJ.** S° is in J K⁻¹ mol⁻¹; ΔH° is in kJ mol⁻¹. Convert ΔS° to kJ (divide by 1000) before combining the two in Topic 9.3.
- **Writing S° when you mean ΔS°.** S° is what one mole of a substance has; ΔS° is the change for a process.
- **Treating "per mole" as per mole of one substance.** ΔS° is per mole of reaction as written. Scale by moles of reaction for a real sample.

## Where this leads

Next, [Topic 9.3: Gibbs Free Energy and Thermodynamic Favorability](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-study-guide/) combines ΔS° with ΔH° to decide whether a process is thermodynamically favourable, which is where the J-to-kJ conversion matters. Try the [practice questions](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-checklist/) to consolidate.
