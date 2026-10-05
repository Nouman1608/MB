---
resourceId: "mb-ap-chem-5.2-study-guide"
title: "Introduction to Rate Law: Study Guide (Chemistry 5.2)"
description: "Learn how a rate law links rate to concentration, what reaction orders and the rate constant mean, how to work out the units of k, and how to find a rate law from initial-rate data."
course: "chemistry"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
prerequisites:
  - "Reaction rates, average and initial rates, and their units (Topic 5.1)"
  - "The Beer–Lambert law: absorbance is proportional to concentration (Topic 3.13)"
  - "Powers and simple logarithms"
prerequisiteResources: ["mb-ap-chem-5.1-study-guide"]
learningObjectives:
  - "Describe lab methods that follow the amount of a reactant or product over time and give an initial rate"
  - "Write a rate law, rate = k[A]ᵐ[B]ⁿ, and identify the order for each reactant and the overall order"
  - "Predict how the rate changes when one concentration is multiplied by a factor, for zero, first and second order"
  - "Explain what the rate constant k is, why it depends on temperature but not on concentration, and work out its units from the overall order"
  - "Determine the orders, the rate law and k from a table of initial rates, including when two concentrations change at once"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Orders in this topic are whole numbers (0, 1 or 2); a logarithm is only needed when the concentration factor is not a simple number. Give k to 2–3 significant figures with its units"
related: ["mb-ap-chem-5.2-revision-notes", "mb-ap-chem-5.2-practice", "mb-ap-chem-5.2-checklist"]
next: "mb-ap-chem-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A rate law has the form rate = k[A]ᵐ[B]ⁿ. The powers m and n are the orders with respect to A and B; m + n is the overall order."
  - "Orders come from experiments, not from the coefficients in the balanced equation."
  - "Multiply a concentration by a factor f and the rate is multiplied by fᵐ: zero order ×1, first order ×f, second order ×f²."
  - "The rate constant k does not change with concentration. It changes with temperature. Its units are M¹⁻ⁿ s⁻¹ for overall order n."
  - "Method of initial rates: compare two experiments in which only one concentration changes, and read off the order from the rate ratio."
faqs:
  - question: "Can I write the rate law straight from the balanced equation?"
    answer: "Not for an overall reaction. The orders must be measured. They often differ from the coefficients, because most reactions happen in several steps. Topic 5.4 shows the one case where you can: a single elementary step."
  - question: "Why use initial rates?"
    answer: "At the very start you know exactly what the concentrations are, because you mixed them. Products have not built up and reactants have hardly been used, so nothing else is changing the rate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Watching a reaction as it happens

In Topic 5.1 you saw that a higher reactant concentration usually makes a reaction faster. A **rate law** says exactly *how much* faster. To build one, you first need good rate measurements.

Chemists follow the amount of a reactant or product over time, without stopping the reaction. Common methods are:

- **Spectrophotometry.** If a reactant or product is coloured, shine light of a suitable wavelength through the solution and record the absorbance every few seconds. By the Beer–Lambert law (A = εbc, Topic 3.13), absorbance is proportional to concentration when the wavelength and path length stay the same. So the change in absorbance tracks the change in concentration directly.
- **Gas pressure or volume.** If the number of gas molecules changes, the pressure in a sealed flask (or the gas volume collected) changes too.
- **Conductivity or pH.** If ions are used up or made, the solution conducts differently or its pH shifts.
- **Sampling.** Remove small portions at set times, stop the reaction in each (for example by cooling or diluting), then analyse by titration.

From the readings you find the **initial rate**: the slope of the concentration–time curve at t = 0. You repeat the experiment with different starting concentrations and see how the initial rate changes.

## The rate law

For a reaction with reactants A and B, the rate law has the form:

> rate = k[A]ᵐ[B]ⁿ

- [A] and [B] are molar concentrations (M).
- **m** is the **order with respect to A**, and **n** is the **order with respect to B**.
- **m + n** is the **overall order** of the reaction.
- **k** is the **rate constant**.

In this course the orders are usually 0, 1 or 2. A reactant with order 0 does not appear in the rate law at all, because [A]⁰ = 1. That does not mean the reactant is unnecessary. It is still used up in the reaction; its concentration just does not affect how fast the reaction goes under these conditions.

**The orders must be found by experiment.** They are not the coefficients from the balanced equation. Sometimes the measured orders happen to match the coefficients, but often they do not. For example, the reaction of 2-bromo-2-methylpropane, (CH₃)₃CBr, with hydroxide ions is first order in (CH₃)₃CBr and **zero** order in OH⁻, even though both have a coefficient of 1. The orders reflect the step-by-step route of the reaction (its mechanism, Topic 5.7), which the balanced equation hides.

## What each order means

The order tells you how the rate responds when you change one concentration and keep everything else the same. If [A] is multiplied by a factor f, the rate is multiplied by fᵐ.

| Order in A | [A] doubled | [A] tripled | [A] halved |
|---|---|---|---|
| 0 | rate × 1 (no change) | rate × 1 | rate × 1 |
| 1 | rate × 2 | rate × 3 | rate × ½ |
| 2 | rate × 4 | rate × 9 | rate × ¼ |

<figure>
<svg viewBox="0 0 680 230" role="img" aria-labelledby="order-graphs-title order-graphs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="order-graphs-title">Initial rate against concentration of A for zero, first and second order</title>
<desc id="order-graphs-desc">Three small graphs side by side, each with concentration of A on the horizontal axis and initial rate on the vertical axis. Left, zero order: a horizontal straight line, so the rate does not change when the concentration changes. Middle, first order: a straight line through the origin, so doubling the concentration doubles the rate. Right, second order: a curve through the origin that gets steeper, a parabola, so doubling the concentration multiplies the rate by four.</desc>
<g stroke="#1d2b44" stroke-width="2">
<line x1="60" y1="170" x2="230" y2="170"/><line x1="60" y1="170" x2="60" y2="40"/>
<line x1="270" y1="170" x2="440" y2="170"/><line x1="270" y1="170" x2="270" y2="40"/>
<line x1="480" y1="170" x2="650" y2="170"/><line x1="480" y1="170" x2="480" y2="40"/>
</g>
<line x1="60" y1="110" x2="220" y2="110" stroke="#1d2b44" stroke-width="3"/>
<line x1="270" y1="170" x2="430" y2="50" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 5"/>
<path d="M480 170.0 L488 169.7 L496 168.8 L504 167.3 L512 165.2 L520 162.5 L528 159.2 L536 155.3 L544 150.8 L552 145.7 L560 140.0 L568 133.7 L576 126.8 L584 119.3 L592 111.2 L600 102.5 L608 93.2 L616 83.3 L624 72.8 L632 61.7 L640 50.0" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="3 4"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="145" y="25">Zero order</text><text x="355" y="25">First order</text><text x="565" y="25">Second order</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="145" y="190">[A]</text><text x="355" y="190">[A]</text><text x="565" y="190">[A]</text>
<text x="145" y="215">rate = k</text><text x="355" y="215">rate = k[A]; [A] × 2 → rate × 2</text><text x="565" y="215">rate = k[A]²; [A] × 2 → rate × 4</text>
<text x="145" y="100">[A] × 2 → rate × 1</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="40" y="105" transform="rotate(-90 40 105)" text-anchor="middle">rate</text>
<text x="250" y="105" transform="rotate(-90 250 105)" text-anchor="middle">rate</text>
<text x="460" y="105" transform="rotate(-90 460 105)" text-anchor="middle">rate</text>
</g>
</svg>
<figcaption>Figure 1. How the initial rate depends on [A] for each order (solid, dashed and dotted lines). Zero order: flat. First order: straight line through the origin. Second order: a curve that rises ever more steeply.</figcaption>
</figure>

When two concentrations change together, multiply their effects. For rate = k[A]²[B], doubling both [A] and [B] multiplies the rate by 2² × 2 = 8.

## The rate constant, k

The rate constant links the concentrations to the rate. Three facts matter:

1. **At a fixed temperature, k has one value for a given reaction,** whatever the concentrations. When you change [A], the rate changes, but k does not. That is what makes it a constant.
2. **k depends on temperature.** For almost all reactions, k gets larger as the temperature rises, so the same concentrations give a faster rate. A rate law with its k value therefore applies only at the temperature it was measured at. (Topic 5.5 explains why.)
3. **The units of k depend on the overall order.** The rate always has units of M s⁻¹, so k must have whatever units make the right-hand side come out in M s⁻¹.

| Overall order | Rate law example | Units of k |
|---|---|---|
| 0 | rate = k | M s⁻¹ |
| 1 | rate = k[A] | s⁻¹ |
| 2 | rate = k[A]² or k[A][B] | M⁻¹ s⁻¹ |
| 3 | rate = k[A]²[B] | M⁻² s⁻¹ |

The pattern is M¹⁻ⁿ s⁻¹ for overall order n. You can always check by substituting: for a second-order rate law, (M⁻¹ s⁻¹)(M)(M) = M s⁻¹. Correct. The units of k also tell you the overall order, if you are given k but not the rate law.

## The method of initial rates

1. Set up several experiments at the **same temperature**, changing the starting concentrations.
2. Measure the initial rate of each.
3. Find a pair of experiments in which **only one** concentration changes. The rate ratio is caused by that reactant alone: rate ratio = (concentration ratio)^order.
4. Repeat for each reactant.
5. Write the rate law, then substitute any one experiment to calculate k, with units.
6. Check: every experiment should give the same k.

If no pair changes just one concentration, use the order you already know to remove that reactant's effect first (Worked example 2). If the factor is awkward, take logarithms: order = log(rate ratio) ÷ log(concentration ratio).

## Worked example 1: a zero-order reactant

**Question.** 2-Bromo-2-methylpropane reacts with hydroxide ions: (CH₃)₃CBr + OH⁻ → (CH₃)₃COH + Br⁻. Invented initial-rate data at one temperature:

| Experiment | [(CH₃)₃CBr] (M) | [OH⁻] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻³ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻³ |
| 3 | 0.20 | 0.30 | 4.0 × 10⁻³ |

Find the rate law and k, and predict the initial rate when [(CH₃)₃CBr] = 0.050 M and [OH⁻] = 0.40 M.

1. **Order in (CH₃)₃CBr.** Experiments 1 and 2: [OH⁻] is fixed; [(CH₃)₃CBr] doubles; the rate doubles (4.0 ÷ 2.0 = 2). 2 = 2ᵐ, so **m = 1**.
2. **Order in OH⁻.** Experiments 2 and 3: [(CH₃)₃CBr] is fixed; [OH⁻] triples; the rate does not change. 1 = 3ⁿ, so **n = 0**.
3. **Rate law:** rate = k[(CH₃)₃CBr]. Overall order 1.
4. **k** from experiment 1: k = 2.0 × 10⁻³ M s⁻¹ ÷ 0.10 M = **0.020 s⁻¹**. Experiments 2 and 3 give the same value.
5. **Prediction:** rate = 0.020 s⁻¹ × 0.050 M = **1.0 × 10⁻³ M s⁻¹**. The [OH⁻] of 0.40 M plays no part.

**Interpretation.** The hydroxide ion is still used up, one for each (CH₃)₃CBr. But adding more of it does not speed things up, so the slow part of the reaction cannot involve OH⁻. You will use this kind of evidence to test mechanisms in Topic 5.8.

## Worked example 2: when two concentrations change at once

**Question.** For an invented gas-phase reaction 2 X(g) + Y₂(g) → 2 XY(g), a student measures (invented data, one temperature):

| Experiment | [X] (M) | [Y₂] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.0100 | 0.0100 | 1.80 × 10⁻⁴ |
| 2 | 0.0100 | 0.0200 | 3.60 × 10⁻⁴ |
| 3 | 0.0200 | 0.0300 | 2.16 × 10⁻³ |

Find the orders, the rate law and k.

1. **Order in Y₂.** Experiments 1 and 2: [X] is fixed; [Y₂] doubles; the rate doubles. So the reaction is **first order in Y₂**.
2. **Order in X.** No pair keeps [Y₂] fixed, so compare experiments 2 and 3 and remove the Y₂ effect.
   - Rate ratio = 2.16 × 10⁻³ ÷ 3.60 × 10⁻⁴ = 6.0.
   - [Y₂] rose by 0.0300 ÷ 0.0200 = 1.5. First order, so this alone multiplies the rate by 1.5.
   - The rest of the change is due to X: 6.0 ÷ 1.5 = 4.0. [X] doubled and the rate rose by a factor of 4 from X, so 2ᵐ = 4 and the reaction is **second order in X**.
3. **Rate law:** rate = k[X]²[Y₂]. Overall order 3.
4. **k** from experiment 1: k = 1.80 × 10⁻⁴ ÷ [(0.0100)² × 0.0100] = 1.80 × 10⁻⁴ ÷ 1.00 × 10⁻⁶ = **180 M⁻² s⁻¹**.
5. **Units check:** (M⁻² s⁻¹)(M²)(M) = M s⁻¹. Experiment 3 gives 2.16 × 10⁻³ ÷ [(0.0200)² × 0.0300] = 180 M⁻² s⁻¹ too.

**What this predicts.** Doubling both [X] and [Y₂] would multiply the rate by 2² × 2 = 8.

## Common misconceptions

- **"The orders are the coefficients."** Only measured data can give the orders of an overall reaction. Worked example 1 has a coefficient of 1 for OH⁻ but an order of 0.
- **"k changes when I change the concentration."** The rate changes; k stays the same at a fixed temperature. If your k values differ between experiments, recheck your orders.
- **"Zero order means the reactant is not needed."** It is still consumed. Its concentration just does not control the rate.
- **"Second order means the rate doubles when the concentration doubles."** That is first order. Second order means the rate goes up by a factor of four.
- **"k always has units of s⁻¹."** Only for an overall first-order reaction. Work the units out from the overall order every time.
- **Comparing experiments in which two concentrations both change, and giving the whole rate change to one reactant.** Remove the known effect first.
- **Mixing the units of graphs and equations.** Absorbance has no unit and concentration has M; a coefficient in the equation is just a number. Keep each where it belongs.

## Where this leads

This topic builds on [Topic 5.1, Reaction Rates](/advanced-course-resources/chemistry/5-1-reaction-rates-study-guide/). Next, [Topic 5.3, Concentration Changes Over Time](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-study-guide/), uses one long experiment instead of many short ones: the shape of a concentration–time graph reveals the order and gives k. Later, rate laws become the evidence for or against a proposed mechanism. Try the [practice questions](/advanced-course-resources/chemistry/5-2-introduction-rate-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-2-introduction-rate-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-2-introduction-rate-law-checklist/) to consolidate.
