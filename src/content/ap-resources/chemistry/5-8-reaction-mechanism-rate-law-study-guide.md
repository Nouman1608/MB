---
resourceId: "mb-ap-chem-5.8-study-guide"
title: "Reaction Mechanism and Rate Law: Study Guide (Chemistry 5.8)"
description: "Learn why the slowest step sets the pace of a reaction, how to write the rate law from a mechanism whose first step is rate limiting, and how to test proposed mechanisms against an experimental rate law."
course: "chemistry"
unit: 5
topics: ["5.8"]
resourceType: "study-guide"
prerequisites:
  - "Rate laws, reaction order and units of k (Topics 5.2 and 5.3)"
  - "Writing the rate law of an elementary step from its coefficients (Topic 5.4)"
  - "Reaction mechanisms, intermediates and catalysts (Topic 5.7)"
prerequisiteResources: ["mb-ap-chem-5.7-study-guide"]
learningObjectives:
  - "Explain why the slowest elementary step limits the rate of the whole reaction"
  - "Write the rate law for a reaction from a mechanism in which the first step is the slow, rate-limiting step"
  - "Use the rate law from a mechanism to predict how the rate changes when concentrations change, and give the units of k"
  - "Decide whether a proposed mechanism is consistent with an experimental rate law and the overall equation"
  - "Explain why a rate law can support a mechanism but cannot prove it"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in mol L⁻¹ (M), rates in M s⁻¹; give answers to the significant figures of the data"
related: ["mb-ap-chem-5.8-revision-notes", "mb-ap-chem-5.8-practice", "mb-ap-chem-5.8-checklist"]
next: "mb-ap-chem-5.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A reaction cannot go faster than its slowest elementary step. That step is the rate-limiting (rate-determining) step."
  - "When the first step is the slow step, the rate law of the whole reaction is the rate law of that step: each reactant in it is raised to its coefficient in the step."
  - "The rate law comes from the slow step, not from the overall equation, so reactants used only in later fast steps do not appear in it."
  - "An intermediate never appears in a final rate law. A catalyst can, if it takes part in the slow step."
  - "A mechanism that adds up correctly and predicts the experimental rate law is consistent with the evidence, but it is not proven."
faqs:
  - question: "Why can I use the coefficients of the slow step but not those of the overall equation?"
    answer: "The slow step is an elementary step, so its coefficients show the particles that actually collide. The overall equation is a summary of several steps, so its coefficients say nothing about collisions."
  - question: "What if the slow step is not the first step?"
    answer: "Then the slow step usually contains an intermediate, which cannot appear in the final rate law. You need an approximation to replace it; that is Topic 5.9, the pre-equilibrium approximation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## The slowest step sets the pace

In Topic 5.7 you saw that most reactions happen as a mechanism: a series of elementary steps. The steps rarely run at the same speed. Usually one step is much slower than the others.

Think of a café where customers queue to order at one till and then collect drinks from three fast baristas. However quickly the baristas work, customers cannot leave faster than the till serves them. The till is the bottleneck. In a mechanism, the bottleneck is the slowest elementary step. It is called the **rate-limiting step** (or rate-determining step).

- The fast steps after the slow step use up its products almost as soon as they form. They cannot speed up the overall reaction.
- So the rate of the **whole** reaction is (very nearly) the rate of the slow step.
- In a mechanism, steps are often labelled "slow" and "fast". If no label is given, you cannot assume which step is slow.

## Writing the rate law from a mechanism

In Topic 5.4 you learned that for an **elementary** step, the rate law follows from the step's coefficients. For a step aA + bB → products, the rate is k[A]ᵃ[B]ᵇ. Put that together with the bottleneck idea and you get the rule for this topic:

> When the **first** step of a mechanism is the slow (rate-limiting) step, the rate law for the overall reaction is the rate law of that first step, written from its coefficients.

The same idea holds whenever every step goes one way only (single arrows, →): the slowest step sets the rate law. In this topic the slow step is always the first step, so its rate law contains only species you put in the flask. If a fast step before the slow step is reversible (⇌), you need the approach of Topic 5.9.

Three consequences follow.

1. **The rate law can differ from the overall equation.** If a reactant appears only in a fast step after the slow step, its concentration does not appear in the rate law: the reaction is **zero order** in that reactant.
2. **An intermediate can never appear in a rate law found by experiment.** You cannot add an intermediate to a flask or set its concentration, so it cannot be one of the variables in the experimental rate law. When the slow step is the first step, it contains only species that were there at the start, so this is not a problem.
3. **A catalyst can appear in the rate law.** If the catalyst reacts in the slow step, the rate depends on its concentration, even though it is not in the overall equation.

**Quick example (catalyst).** For the fictional mechanism Step 1 (slow): G + Y → GY, Step 2 (fast): GY + Y → G + Y₂, the overall equation is 2Y → Y₂. The rate law is **rate = k[G][Y]**. G is a catalyst (used, then given back), yet doubling [G] doubles the rate, because G is in the slow step.

<figure>
<svg viewBox="0 0 640 340" role="img" aria-labelledby="ratelaw-flow-title ratelaw-flow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ratelaw-flow-title">Flow chart: getting a rate law from a mechanism</title>
<desc id="ratelaw-flow-desc">A flow chart with three boxes in a column, then two branches. Box 1: check that the steps add up to the overall equation. Box 2: find the slow, rate-limiting step. Box 3, a question: is the slow step the first step? A branch labelled yes leads to a box on the left: the rate law is k times the concentration of each species in that step raised to its coefficient. A branch labelled no leads to a box on the right: the slow step usually contains an intermediate, so an approximation is needed, covered in Topic 5.9.</desc>
<rect x="120" y="12" width="400" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="42" text-anchor="middle" font-size="14" fill="#1d2b44">1. Check the steps add up to the overall equation</text>
<rect x="120" y="92" width="400" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="122" text-anchor="middle" font-size="14" fill="#1d2b44">2. Find the slow (rate-limiting) step</text>
<rect x="120" y="172" width="400" height="50" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="320" y="202" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">3. Is the slow step the first step?</text>
<path d="M320 62 V88" stroke="#1d2b44" stroke-width="2" marker-end="url(#rf1)"/>
<path d="M320 142 V168" stroke="#1d2b44" stroke-width="2" marker-end="url(#rf1)"/>
<path d="M250 222 L170 262" stroke="#1d2b44" stroke-width="2" marker-end="url(#rf1)"/>
<path d="M390 222 L470 262" stroke="#1d2b44" stroke-width="2" marker-end="url(#rf1)"/>
<text x="190" y="240" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Yes</text>
<text x="452" y="240" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">No</text>
<rect x="15" y="266" width="295" height="64" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="162" y="292" text-anchor="middle" font-size="13" fill="#1d2b44">Rate law = k × [each species in that</text>
<text x="162" y="312" text-anchor="middle" font-size="13" fill="#1d2b44">step]^(its coefficient in the step)</text>
<rect x="330" y="266" width="295" height="64" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="3 3"/>
<text x="477" y="292" text-anchor="middle" font-size="13" fill="#1d2b44">Slow step usually has an intermediate:</text>
<text x="477" y="312" text-anchor="middle" font-size="13" fill="#1d2b44">approximation needed (Topic 5.9)</text>
<defs><marker id="rf1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. This topic covers the "Yes" branch (solid box): the slow step is the first step, so you write its rate law directly. The "No" branch (dotted box) leads to Topic 5.9.</figcaption>
</figure>

## Testing a mechanism against experiment

A rate law found by experiment (Topics 5.2 and 5.3) is one of the strongest tests of a proposed mechanism. A mechanism is **consistent with the evidence** when:

1. its elementary steps add up to the overall balanced equation (Topic 5.7);
2. each step is a reasonable elementary step (normally unimolecular or bimolecular); and
3. the rate law it predicts matches the rate law found by experiment.

If any test fails, the mechanism is rejected. If all three pass, the mechanism is **possible**, not proven. Two different mechanisms can predict the same rate law. The rate law only tells you about the slow step and anything before it; it tells you nothing about the fast steps that come after. To choose between mechanisms that pass, chemists look for other evidence, such as detecting an intermediate that only one mechanism predicts.

## Reading a rate law as a clue to the slow step

You can also use the rule in reverse, as a starting point for proposing a mechanism. If you assume the first step is the slow one, the experimental rate law tells you which particles collide in it.

| Experimental rate law | What a slow first step would have to be |
|---|---|
| rate = k[A] | One A particle breaking apart or rearranging (unimolecular) |
| rate = k[A]² | Two A particles colliding (bimolecular) |
| rate = k[A][B] | One A colliding with one B (bimolecular) |
| rate = k[A] (but the overall equation also uses B) | B must react in a fast step after the slow step |

Two cautions. First, a rate law with an overall order above 2, such as k[A]²[B], would need a termolecular slow first step, which is unlikely; a different mechanism, with a fast step before the slow step, is more probable (Topic 5.9). Second, the rate law points you to the slow step only. You still have to invent fast steps that use up any intermediates and bring the total to the overall equation, and then check the whole mechanism.

## Worked example 1: rate law and rate from a mechanism

**Question.** A fictional reaction 2M + N₂ → 2MN has the proposed mechanism:

- Step 1 (slow): M + N₂ → MN + N
- Step 2 (fast): N + M → MN

(a) Show that the mechanism is consistent with the overall equation. (b) Write the rate law predicted by the mechanism. (c) Give the units of k. (d) Calculate the rate when [M] = 0.050 M and [N₂] = 0.020 M, if k = 0.36 M⁻¹ s⁻¹. (e) Predict the effect on the rate of doubling [M] alone.

1. **Add the steps.** M + N₂ + N + M → MN + N + MN. Cancel N (an intermediate): **2M + N₂ → 2MN**. Consistent.
2. **Rate law.** The first step is slow, so use its coefficients: one M and one N₂ collide. **Rate = k[M][N₂]**.
3. **Units of k.** The reaction is first order in M and first order in N₂, so second order overall. Rate (M s⁻¹) = k × M × M, so k has units of **M⁻¹ s⁻¹**.
4. **Rate.** Rate = 0.36 M⁻¹ s⁻¹ × 0.050 M × 0.020 M = **3.6 × 10⁻⁴ M s⁻¹**.
5. **Doubling [M].** The rate law is first order in M, so the rate **doubles** (× 2).

**The trap.** The overall equation has 2M. If you wrote the rate law from it as k[M]²[N₂], you would predict that doubling [M] multiplies the rate by 4. The mechanism predicts × 2. An experiment that doubles [M] can tell these apart.

**Check.** The rate law contains no N. N is an intermediate, and it appears only in the fast step after the slow one, so it should not appear.

## Worked example 2: which mechanism fits the experimental rate law?

**Question.** For the fictional reaction 2D + E → D₂E, experiments give **rate = k[D]²**. Three mechanisms are proposed.

- Mechanism I: Step 1 (slow): D + D → D₂. Step 2 (fast): D₂ + E → D₂E.
- Mechanism II: Step 1 (slow): D + E → DE. Step 2 (fast): DE + D → D₂E.
- Mechanism III: one step: 2D + E → D₂E.

(a) Which mechanisms add up to the overall equation? (b) Which mechanism is consistent with the experimental rate law? (c) By what factor does the rate change if [E] is tripled? If [D] is tripled?

1. **Adding up.** I: 2D + D₂ + E → D₂ + D₂E, cancel D₂ → 2D + E → D₂E. II: D + E + DE + D → DE + D₂E, cancel DE → 2D + E → D₂E. III is the overall equation itself. **All three add up.** This is why adding up is not enough.
2. **Predicted rate laws.**
   - I: slow first step is D + D, so rate = k[D]². **Matches.**
   - II: slow first step is D + E, so rate = k[D][E]. Does not match (wrong order in D, and E should not appear).
   - III: a single termolecular step would give rate = k[D]²[E]. Does not match, and a three-particle collision is unlikely anyway.
3. **Conclusion.** Only **mechanism I** is consistent with the evidence. Its intermediate is D₂.
4. **Factors.** With rate = k[D]²: tripling [E] changes the rate by a factor of 3⁰ = **1** (no change: zero order in E). Tripling [D] multiplies the rate by 3² = **9**.

**Interpretation.** E is a reactant, but it reacts only in the fast step, after the bottleneck. However much E you add, the D + D step still limits how fast D₂E can form. Detecting D₂ in the reacting mixture would be further support for mechanism I (Topic 5.7).

## Common misconceptions

- **"The rate law comes from the overall equation."** Only an elementary step gives a rate law from its coefficients. For a mechanism, use the slow step.
- **"Every reactant must appear in the rate law."** A reactant that reacts only after the slow step is zero order: changing its concentration does not change the rate.
- **"The fast steps control the rate because they do most of the work."** The rate is limited by the slowest step, just as a queue is limited by the slowest till.
- **"Intermediates can go in the rate law."** Not in a rate law that is compared with experiment. If the slow step contains an intermediate, you need the approach of Topic 5.9.
- **"A catalyst cannot appear in the rate law because it is not in the overall equation."** It can, if it reacts in the slow step.
- **"The rate of the reaction is the sum of the rates of the steps."** The overall rate is set by the slow step alone.
- **"If the mechanism predicts the right rate law, it is the correct mechanism."** It is consistent with the evidence. Another mechanism could predict the same rate law.
- **"The slow step is always the first one listed."** Only if the question labels it slow. Always look for the label.

## Where this leads

This topic uses the mechanisms of [Topic 5.7, Introduction to Reaction Mechanisms](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-study-guide/). Next, [Topic 5.9, Pre-Equilibrium Approximation](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-study-guide/), deals with the "No" branch of Figure 1: mechanisms where a fast, reversible first step comes before the slow step. Try the [practice questions](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-checklist/) to consolidate.
