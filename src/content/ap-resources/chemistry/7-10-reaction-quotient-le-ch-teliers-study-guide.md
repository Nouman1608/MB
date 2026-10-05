---
resourceId: "mb-ap-chem-7.10-study-guide"
title: "Reaction Quotient and Le Châtelier's Principle: Study Guide (Chemistry 7.10)"
description: "Learn to explain every equilibrium shift with numbers: calculate Q after a stress, compare it with K, and see why temperature is the only stress that changes K."
course: "chemistry"
unit: 7
topics: ["7.10"]
resourceType: "study-guide"
prerequisites:
  - "Writing Qc and Qp expressions and comparing Q with K (Topic 7.3)"
  - "Calculating K from equilibrium data (Topic 7.4)"
  - "Predicting shifts with Le Châtelier's principle (Topic 7.9)"
prerequisiteResources: ["mb-ap-chem-7.9-study-guide"]
learningObjectives:
  - "Explain that a stress takes a system out of equilibrium by making Q different from K"
  - "Use the comparison of Q with K to predict the direction a reaction goes to restore equilibrium"
  - "Calculate Q after adding or removing a species, changing the volume of a gas mixture or diluting a solution"
  - "Explain why a temperature change alters K while other stresses alter only Q"
  - "Describe how all concentrations or partial pressures change as Q returns to K"
skills: ["5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in M (mol L⁻¹), partial pressures in atm. All K values in this guide are invented for practice; treat K and Q as unitless"
related: ["mb-ap-chem-7.10-revision-notes", "mb-ap-chem-7.10-practice", "mb-ap-chem-7.10-checklist"]
next: "mb-ap-chem-7.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A stress makes Q differ from K. The system then reacts until Q equals K again."
  - "Q < K: too few products, so the net reaction goes forward. Q > K: too many products, so it goes in reverse."
  - "Adding or removing species, changing gas volume and diluting change Q only. K stays the same."
  - "A temperature change alters K itself. Raising the temperature lowers K for an exothermic reaction and raises K for an endothermic one."
  - "Scaling every concentration by a factor s multiplies Q by s raised to (product coefficients − reactant coefficients)."
faqs:
  - question: "Why does Le Châtelier's principle need Q at all?"
    answer: "Le Châtelier's principle predicts a direction, but Q explains it. Comparing Q with K shows the system is no longer at equilibrium and which way it must react. It also handles cases where the simple rule is hard to apply, such as several species changing at once."
  - question: "Does the system have to get back to the same K?"
    answer: "Yes, unless the temperature has changed. At a fixed temperature K is fixed, so every new equilibrium has Q equal to the same K, even though the individual concentrations are different."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From a rule of thumb to a reason

In Topic 7.9 you predicted shifts with Le Châtelier's principle. That works, but it does not explain *why* the system must shift. The reaction quotient Q gives the reason.

Recall from Topic 7.3: Q has the same form as the equilibrium expression, but you can calculate it for **any** mixture, at any moment. For aA + bB ⇌ cC + dD,

Qc = [C]^c [D]^d / ([A]^a [B]^b)

and for gases you can write Qp with partial pressures in place of concentrations. At equilibrium, Q = K.

Here is the key idea of this topic:

1. Before the stress, the system is at equilibrium: **Q = K**.
2. The stress makes **Q ≠ K**. The system is no longer at equilibrium.
3. The system reacts (forward or in reverse) until **Q = K** again. This is the new equilibrium.

A stress can upset the balance in one of two ways. Most stresses change the **concentrations** in Q but leave K alone. A change in **temperature** changes the value of **K**, while the concentrations at that instant stay the same (in a rigid container). Either way, Q and K no longer match, and the concentrations or partial pressures redistribute until they do.

## Comparing Q with K

<figure>
<svg viewBox="0 0 640 210" role="img" aria-labelledby="qk-title qk-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="qk-title">Using Q and K to find the direction of reaction</title>
<desc id="qk-desc">A horizontal line represents increasing values of Q, with K marked in the middle. To the left of K, labelled Q less than K, an arrow points right towards K: the net reaction goes forward, making products, so Q increases. To the right of K, labelled Q greater than K, an arrow points left towards K: the net reaction goes in reverse, making reactants, so Q decreases. At K itself the system is at equilibrium.</desc>
<line x1="40" y1="110" x2="600" y2="110" stroke="#1d2b44" stroke-width="2"/>
<path d="M600 110 l-10 -6 v12 z" fill="#1d2b44"/>
<text x="600" y="140" text-anchor="end" font-size="13" fill="#1d2b44">larger Q</text>
<line x1="320" y1="90" x2="320" y2="130" stroke="#1d2b44" stroke-width="3"/>
<text x="320" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Q = K</text>
<text x="320" y="152" text-anchor="middle" font-size="13" fill="#1d2b44">at equilibrium</text>
<text x="160" y="40" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Q &lt; K</text>
<text x="160" y="60" text-anchor="middle" font-size="13" fill="#1d2b44">too few products</text>
<path d="M110 95 H290" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#qk-arrow)"/>
<text x="160" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">net forward reaction:</text>
<text x="160" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">Q rises to K</text>
<text x="480" y="40" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Q &gt; K</text>
<text x="480" y="60" text-anchor="middle" font-size="13" fill="#1d2b44">too many products</text>
<path d="M530 95 H350" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" marker-end="url(#qk-arrow)"/>
<text x="480" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">net reverse reaction:</text>
<text x="480" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">Q falls to K</text>
<defs><marker id="qk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Q always moves towards K. Solid arrow: when Q &lt; K the net reaction goes forward. Dashed arrow: when Q &gt; K the net reaction goes in reverse.</figcaption>
</figure>

| Comparison | What it means | Net reaction | What happens to Q |
|---|---|---|---|
| Q < K | Products too low compared with reactants | Forward (shift right) | Rises to K |
| Q = K | At equilibrium | None | Stays equal to K |
| Q > K | Products too high compared with reactants | Reverse (shift left) | Falls to K |

## Which stresses change Q, and which change K?

| Stress | Changes Q? | Changes K? | Example of the effect on Q |
|---|---|---|---|
| Add a reactant | Yes: Q falls | No | Q < K, forward |
| Add a product | Yes: Q rises | No | Q > K, reverse |
| Remove a reactant or product | Yes | No | Opposite of adding it |
| Change the volume of a gas mixture | Yes, if gas coefficients differ | No | See the factor rule below |
| Dilute a solution | Yes, if dissolved-particle coefficients differ | No | See the factor rule below |
| Change the temperature (rigid container) | Not at that instant | **Yes** | K moves away from Q |
| Add a catalyst, extra solid or pure liquid | No | No | Still Q = K |

### The factor rule for volume and dilution

When you change the volume, every concentration (or partial pressure) is multiplied by the same factor, s. Each term in Q is raised to its coefficient, so for a system that was at equilibrium (Q = K) before the change,

**new Q = s^Δn × K**, where Δn = (sum of product coefficients) − (sum of reactant coefficients),

counting only gases (for a volume change) or only dissolved species (for dilution).

- Halving the volume of a gas mixture: s = 2.
- Diluting a solution to twice its volume: s = ½.

If Δn = 0, Q is unchanged and there is no shift. This is the numerical reason behind the "count the molecules" rule from Topic 7.9.

## Worked example 1: adding a reactant

**Question.** For the reaction CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), Kc = 4.00 at the temperature of this experiment (an invented value). A 1.00 L flask holds an equilibrium mixture with [CO] = 0.200 M, [H₂O] = 0.200 M, [CO₂] = 0.400 M and [H₂] = 0.400 M. Then 0.200 mol of CO is added at constant temperature and volume. (a) Show that the original mixture was at equilibrium. (b) Calculate Q just after the addition and predict the direction of reaction. (c) Describe how each concentration changes as the new equilibrium is reached.

1. **(a) Check K.** Qc = (0.400)(0.400) / ((0.200)(0.200)) = 0.160 / 0.0400 = 4.00. This equals Kc, so the mixture was at equilibrium.
2. **(b) New concentration.** Adding 0.200 mol to 1.00 L raises [CO] to 0.400 M. Nothing else has changed yet.
3. **New Q.** Qc = (0.400)(0.400) / ((0.400)(0.200)) = 0.160 / 0.0800 = **2.00**.
4. **Compare.** Q = 2.00 < K = 4.00, so there are too few products. The net reaction goes **forward**.
5. **(c) Changes.** As the forward reaction runs, [CO] and [H₂O] decrease, and [CO₂] and [H₂] increase, until Q = 4.00 again.

**Going further.** Solving for the new equilibrium (the method from Topic 7.7) gives [CO] = 0.347 M, [H₂O] = 0.147 M, [CO₂] = [H₂] = 0.453 M. Using the unrounded values, Q = 4.00 again. Only about a quarter of the added CO reacted, and [CO] is still well above its original 0.200 M. This is the "partly undoes the stress" idea from Topic 7.9, now in numbers.

## Worked example 2: halving the volume of a gas mixture

**Question.** For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Kp = 128 at a certain temperature (an invented value). An equilibrium mixture has partial pressures P(SO₂) = 0.20 atm, P(O₂) = 0.50 atm and P(SO₃) = 1.6 atm. The volume is halved at constant temperature. Find Qp just after the change and predict the direction of reaction.

1. **Check K.** Qp = (1.6)² / ((0.20)² × 0.50) = 2.56 / 0.020 = 128. The mixture is at equilibrium.
2. **Effect of halving the volume.** At constant temperature, each partial pressure doubles: P(SO₂) = 0.40 atm, P(O₂) = 1.00 atm, P(SO₃) = 3.2 atm.
3. **New Q.** Qp = (3.2)² / ((0.40)² × 1.00) = 10.24 / 0.16 = **64**.
4. **Compare.** Q = 64 < K = 128, so the net reaction goes **forward**, making more SO₃.

**Check with the factor rule.** Δn = 2 − (2 + 1) = −1 and s = 2, so new Q = 2⁻¹ × 128 = 64. ✓ This agrees with Le Châtelier's principle: 3 gas molecules on the left, 2 on the right, so a smaller volume favours the right.

## Worked example 3: changing the temperature

**Question.** Return to the equilibrium mixture of Worked example 1 *before* any CO was added: [CO] = [H₂O] = 0.200 M and [CO₂] = [H₂] = 0.400 M, with Kc = 4.00. The forward reaction is exothermic. The rigid flask is heated to a higher temperature, where Kc = 2.25 (invented). (a) Explain why the system is no longer at equilibrium. (b) Predict the direction of reaction and how the concentrations change.

1. **(a) What changes.** Heating a rigid flask does not change the amount of any gas or the volume, so the concentrations, and therefore Q, are unchanged at the instant of heating: Q = 4.00. But K has changed to 2.25. Now Q ≠ K.
2. **Why K fell.** The forward reaction is exothermic. Raising the temperature favours the endothermic (reverse) direction, so the equilibrium mixture at the higher temperature contains relatively fewer products. That is what a smaller K means.
3. **(b) Compare.** Q = 4.00 > K = 2.25, so the net reaction goes **in reverse**. [CO₂] and [H₂] decrease; [CO] and [H₂O] increase.
4. **New equilibrium.** Because every coefficient is 1, the new concentrations can be found by taking square roots: [CO₂]/[CO] = √2.25 = 1.5. This gives [CO₂] = [H₂] = 0.360 M and [CO] = [H₂O] = 0.240 M. Check: (0.360)² / (0.240)² = 2.25. ✓

## When two things change at once

Le Châtelier's principle struggles when a reactant and a product are added together: one pushes the system forward, the other pushes it back. Q settles the question.

Start again from the original mixture in Worked example 1 ([CO] = [H₂O] = 0.200 M, [CO₂] = [H₂] = 0.400 M, Kc = 4.00). Suppose 0.100 mol of CO **and** 0.100 mol of CO₂ are added to the 1.00 L flask at the same time. Now [CO] = 0.300 M and [CO₂] = 0.500 M, so

Qc = (0.500)(0.400) / ((0.300)(0.200)) = 0.200 / 0.0600 = 3.33.

Q = 3.33 < K = 4.00, so the net reaction goes **forward**, even though a product was added too. The added reactant has the bigger effect on Q here because its concentration rose by a larger fraction (from 0.200 M to 0.300 M, an increase of one half) than the product's did (from 0.400 M to 0.500 M, an increase of one quarter). You do not need to reason about this in words: calculate Q, compare it with K, and the direction follows.

## Common misconceptions

- **"Adding a reactant changes K."** K depends only on temperature (for a given reaction). Adding a reactant lowers Q; the system then reacts until Q is back to the same K.
- **"Q > K means the reaction goes forward because Q is bigger."** It is the reverse. A large Q means too many products, so the system makes reactants.
- **"Heating changes Q."** In a rigid container, heating leaves concentrations unchanged at that instant. It is K that moves.
- **"At the new equilibrium, every concentration is back to its old value."** Only the ratio in Q returns to K. The individual concentrations are different (Worked example 1).
- **"Doubling the pressure doubles Q."** Q changes by s^Δn, which depends on the coefficients. If Δn = 0, Q does not change at all.
- **"Raising the temperature always increases K."** Only for an endothermic reaction. For an exothermic reaction K decreases.

## Where this leads

Next, in [Topic 7.11, Introduction to Solubility Equilibria](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-study-guide/), you will apply Q and K to a salt dissolving in water, where the equilibrium constant is called Ksp. Previous topic: [Introduction to Le Châtelier's Principle](/advanced-course-resources/chemistry/7-9-introduction-le-ch-teliers-principle-study-guide/). Now try the [practice questions](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-practice/), then use the [revision notes](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-checklist/).
