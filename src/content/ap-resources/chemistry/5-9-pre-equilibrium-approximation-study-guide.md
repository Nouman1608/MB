---
resourceId: "mb-ap-chem-5.9-study-guide"
title: "Pre-Equilibrium Approximation: Study Guide (Chemistry 5.9)"
description: "Learn how to find the rate law of a mechanism whose first step is a fast equilibrium: set forward and reverse rates equal, solve for the intermediate and substitute it out."
course: "chemistry"
unit: 5
topics: ["5.9"]
resourceType: "study-guide"
prerequisites:
  - "Writing the rate law of an elementary step from its molecularity (Topic 5.4)"
  - "Identifying intermediates and the rate-limiting step in a mechanism (Topics 5.7 and 5.8)"
  - "Finding reaction orders and rate constant units (Topics 5.2 and 5.3)"
prerequisiteResources: ["mb-ap-chem-5.8-study-guide"]
learningObjectives:
  - "Explain why the rate law of the slow step cannot be the final answer when it contains an intermediate"
  - "Use the idea that a fast reversible step has equal forward and reverse rates to write the intermediate's concentration in terms of reactants"
  - "Derive the rate law for a mechanism whose first step is a fast equilibrium and whose later step is slow"
  - "Combine the step rate constants into the overall rate constant and give its units"
  - "Decide whether a proposed mechanism with a pre-equilibrium is consistent with an experimental rate law"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in M (mol L⁻¹), time in s; keep unrounded values until the final step"
related: ["mb-ap-chem-5.9-revision-notes", "mb-ap-chem-5.9-practice", "mb-ap-chem-5.9-checklist"]
next: "mb-ap-chem-5.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "If the first step is slow, its rate law is the overall rate law (Topic 5.8). If a later step is slow, its rate law usually contains an intermediate, so more work is needed."
  - "A fast reversible first step reaches equilibrium: forward rate = reverse rate, so k₁[reactants] = k₋₁[intermediate]."
  - "Solve that equation for the intermediate and substitute it into the slow step's rate law. The final rate law contains only species you can control, never an intermediate."
  - "The overall rate constant is a combination such as k = k₂k₁ / k₋₁, and orders can be fractions such as ½."
  - "A mechanism that gives the experimental rate law is consistent with the data. It is not proven."
faqs:
  - question: "Why can't an intermediate appear in the final rate law?"
    answer: "An intermediate exists only while the reaction runs, usually at a tiny concentration. You cannot weigh it out or set its concentration, so a rate law that depends on it cannot be tested against experiments. The rate law must use species you add, such as reactants or a catalyst."
  - question: "Does 'equilibrium' here mean the whole reaction has stopped?"
    answer: "No. Only the fast first step is close to balance: it goes forward and backward much faster than the slow step drains the intermediate. The overall reaction keeps going at the rate of the slow step."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## When the slow step is not the first step

In Topic 5.8 you met the easy case. When the **first** elementary step is the slow one, the rate law of the whole reaction is just the rate law of that step, written from its molecularity. Every species in that step is a reactant you added, so nothing else is needed.

Now suppose a fast step comes **before** the slow step. The slow step still sets the rate. But its reactants now include an **intermediate**: a species made in the fast step and used up in the slow step. Look at this mechanism for the overall reaction A + 2B → C + D:

| Step | Elementary reaction | Speed |
|---|---|---|
| 1 | A + B ⇌ AB | fast, reversible |
| 2 | AB + B → AB₂ | slow |
| 3 | AB₂ → C + D | fast |

The slow step is bimolecular, so its rate law is rate = k₂[AB][B]. That expression is correct for step 2, but it is **not acceptable as the rate law of the reaction**, because AB is an intermediate.

Why does this matter?

- An intermediate is present only while the reaction is running, usually at a very low concentration.
- You cannot choose its concentration in an experiment. You can only choose the concentrations of the species you add: reactants, and sometimes a catalyst.
- An experimental rate law is built from those controllable concentrations. To compare a mechanism with experiment, the mechanism's rate law must be written in the same terms.

So you need a way to replace [AB] with an expression that contains only A and B. The **pre-equilibrium approximation** gives you one.

## The idea: a fast step that runs both ways

Step 1 is fast in **both** directions. A and B combine to make AB quickly, and AB falls apart back into A and B quickly. Step 2, by contrast, removes AB only slowly.

Think of it this way. Each AB particle has two choices: fall back to A + B (fast) or react with another B (slow). Almost every AB falls back many times before one finally goes on through step 2. So the slow step hardly disturbs step 1, and step 1 stays very close to equilibrium: its forward and reverse rates are equal.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="preq-title preq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="preq-title">A fast pre-equilibrium followed by a slow step</title>
<desc id="preq-desc">Three boxes in a row. Left box: A plus B. Middle box: AB, labelled intermediate. Right box: AB2, then products. Between the left and middle boxes are two thick solid arrows, one each way, labelled k1 forward and k minus 1 back, with the note fast, both directions, forward rate equals reverse rate. Between the middle and right boxes is a single dashed arrow labelled k2, slow, plus B. Under the middle box is the result: concentration of AB equals k1 over k minus 1, times concentration of A times concentration of B.</desc>
<defs><marker id="pq1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="10" y="60" width="140" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="96" text-anchor="middle" font-size="18" font-weight="600" fill="#1d2b44">A + B</text>
<rect x="250" y="60" width="140" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="88" text-anchor="middle" font-size="18" font-weight="600" fill="#1d2b44">AB</text>
<text x="320" y="108" text-anchor="middle" font-size="12" fill="#1d2b44">intermediate</text>
<rect x="490" y="60" width="140" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="560" y="88" text-anchor="middle" font-size="18" font-weight="600" fill="#1d2b44">AB₂</text>
<text x="560" y="108" text-anchor="middle" font-size="12" fill="#1d2b44">→ C + D (fast)</text>
<path d="M153 78 H245" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pq1)"/>
<path d="M247 102 H156" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pq1)"/>
<text x="200" y="68" text-anchor="middle" font-size="13" fill="#1d2b44">k₁</text>
<text x="200" y="120" text-anchor="middle" font-size="13" fill="#1d2b44">k₋₁</text>
<text x="200" y="34" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">FAST, both ways</text>
<text x="200" y="50" text-anchor="middle" font-size="12" fill="#1d2b44">forward rate = reverse rate</text>
<path d="M393 90 H485" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#pq1)"/>
<text x="440" y="80" text-anchor="middle" font-size="13" fill="#1d2b44">+ B, k₂</text>
<text x="440" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">SLOW</text>
<text x="320" y="170" text-anchor="middle" font-size="15" fill="#1d2b44">k₁[A][B] = k₋₁[AB]</text>
<text x="320" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">[AB] = (k₁ / k₋₁)[A][B]</text>
</svg>
<figcaption>Figure 1. Thick solid arrows: the fast step, which runs both ways and stays balanced. Dashed arrow: the slow step, which drains the intermediate only a little at a time. The balance gives [AB] in terms of [A] and [B].</figcaption>
</figure>

### The algebra in three lines

Because step 1 is elementary, you can write the rate law of each direction from its molecularity (Topic 5.4):

- forward rate of step 1 = k₁[A][B]
- reverse rate of step 1 = k₋₁[AB]

At equilibrium these are equal:

k₁[A][B] = k₋₁[AB], so **[AB] = (k₁ / k₋₁)[A][B]**

The ratio k₁ / k₋₁ is a constant. It is the equilibrium constant K₁ for step 1 (you will meet equilibrium constants properly in Unit 7). Notice the order: **forward constant on top**. A large K₁ means the forward reaction is favoured, so more AB is present.

## The pre-equilibrium recipe

Use the same four steps every time.

1. **Write the rate law of the slow step** from its molecularity.
2. **Spot any intermediate** in that rate law.
3. **Set the forward rate of the fast reversible step equal to its reverse rate**, and solve for the intermediate's concentration.
4. **Substitute** that expression into the slow step's rate law. Combine the rate constants into one overall constant k.

A quick check you can use afterwards: add up the species that go **into** the slow step, counting back through any fast steps before it, and remove any intermediates. In the mechanism above, A + B make AB, and AB + B go into the slow step. That totals one A and two B, so you expect rate = k[A][B]². Steps that come **after** the slow step, such as step 3, never affect the rate law.

## Worked example 1: deriving a rate law with a pre-equilibrium

**Question.** For the mechanism in the table above (step 1 fast and reversible, step 2 slow, step 3 fast), derive the rate law for A + 2B → C + D and give the overall rate constant in terms of k₁, k₋₁ and k₂.

1. **Check the mechanism adds up.** A + B + AB + B + AB₂ → AB + AB₂ + C + D. Cancel AB and AB₂ (each made in one step and used in a later one): A + 2B → C + D. It matches the overall equation, and AB and AB₂ are the intermediates.
2. **Slow step rate law.** Step 2 is AB + B → AB₂, bimolecular: rate = k₂[AB][B].
3. **Intermediate.** AB is an intermediate, so it must be removed.
4. **Pre-equilibrium.** Step 1 is fast and reversible: k₁[A][B] = k₋₁[AB], so [AB] = (k₁ / k₋₁)[A][B].
5. **Substitute.** rate = k₂ × (k₁ / k₋₁)[A][B] × [B] = (k₂k₁ / k₋₁)[A][B]².

**Answer.** rate = k[A][B]², with k = k₂k₁ / k₋₁. The reaction is first order in A, second order in B, and third order overall.

**Check.** The quick count gives one A and two B going into the slow step, which matches. Step 3 (fast, after the slow step) does not appear, as expected. The units of k for a third-order rate law are M⁻² s⁻¹.

**Interpretation.** If an experiment finds rate = k[A][B]², this mechanism is **consistent** with the data. A different mechanism could give the same rate law, so the data support the mechanism but do not prove it.

## Worked example 2: a dissociation pre-equilibrium and a half order

**Question.** A hypothetical diatomic gas Z₂ reacts with M: Z₂ + 2M → 2MZ. The proposed mechanism is:

| Step | Elementary reaction | Speed |
|---|---|---|
| 1 | Z₂ ⇌ 2Z | fast, reversible; K₁ = k₁ / k₋₁ = 1.6 × 10⁻⁵ M |
| 2 | Z + M → MZ | slow; k₂ = 3.0 M⁻¹ s⁻¹ (happens twice for each Z₂) |

(a) Derive the rate law. (b) Find the overall rate constant with units. (c) Calculate the rate when [Z₂] = 0.25 M and [M] = 0.10 M. (d) Predict the effect of doubling [Z₂].

**(a)**

1. Slow step: rate = k₂[Z][M]. Z is an intermediate.
2. Fast step: Z₂ ⇌ 2Z. The reverse direction needs **two** Z particles to collide, so its rate is k₋₁[Z]². Setting rates equal: k₁[Z₂] = k₋₁[Z]².
3. Solve: [Z]² = (k₁ / k₋₁)[Z₂] = K₁[Z₂], so [Z] = (K₁[Z₂])^½.
4. Substitute: rate = k₂ K₁^½ [Z₂]^½ [M].

So rate = k[Z₂]^½[M]. The order in Z₂ is **one half**. Fractional orders are a common sign of a fast dissociation before the slow step.

**(b)** k = k₂ × K₁^½ = 3.0 M⁻¹ s⁻¹ × (1.6 × 10⁻⁵ M)^½ = 3.0 × 4.0 × 10⁻³ = **0.012 M^(−½) s⁻¹**.
Units: M⁻¹ s⁻¹ × M^½ = M^(−½) s⁻¹. Check: overall order 1½, so k must carry M^(1 − 1.5) = M^(−½).

**(c)** First find the intermediate: [Z] = (1.6 × 10⁻⁵ × 0.25)^½ = (4.0 × 10⁻⁶)^½ = 2.0 × 10⁻³ M.
Rate = k₂[Z][M] = 3.0 × 2.0 × 10⁻³ × 0.10 = **6.0 × 10⁻⁴ M s⁻¹**.
Same answer from the overall rate law: 0.012 × (0.25)^½ × 0.10 = 0.012 × 0.50 × 0.10 = 6.0 × 10⁻⁴ M s⁻¹.

**(d)** Doubling [Z₂] multiplies the rate by 2^½ ≈ **1.41**, not by 2. To double the rate through Z₂ alone, you would need four times the [Z₂].

**Interpretation.** Only a small fraction of Z₂ is split at any moment: [Z] is 2.0 × 10⁻³ M against 0.25 M of Z₂. That is typical of an intermediate, and it is why you cannot measure or control [Z] directly.

**A note on the rate.** Here "rate" means the rate of the slow step as written. Because step 2 happens twice for each Z₂, some books include a factor of 2 depending on which species the rate is measured by. The orders, which are what experiments test, are the same either way.

## When is the approximation reasonable?

The approximation works when the intermediate goes **back** to reactants much faster than it goes **on** through the slow step. For the mechanism above, the reverse of step 1 (rate k₋₁[AB]) must be much faster than step 2 (rate k₂[AB][B]). Cancelling [AB], this means k₋₁ must be much larger than k₂[B]. If instead the first step were slow, you would be back in Topic 5.8: the first step's rate law would be the answer, and later fast steps would not matter.

You will not be asked to prove that the approximation holds. You should be able to say why it is needed (the slow step contains an intermediate) and what it assumes (the fast first step stays at equilibrium).

## Common misconceptions

- **"Write the rate law from the overall equation."** Coefficients in an overall equation do not give orders. Orders come from the mechanism (or from experiment). In Worked example 2 the overall equation has 2M, but the order in M is 1.
- **"The rate law of the slow step is always the final answer."** Only when every species in the slow step is a reactant or a catalyst. If an intermediate appears, you must substitute it out.
- **"Fast steps never matter."** Fast steps **before** the slow step matter, because they decide how much intermediate is available. Fast steps **after** it do not appear in the rate law.
- **Flipping the ratio.** [Intermediate] = (k₁ / k₋₁) × [reactants], forward over reverse. Writing k₋₁ / k₁ gives the right orders but the wrong rate constant.
- **"Equilibrium means equal concentrations."** It means equal forward and reverse **rates**. In Worked example 2, [Z] is far smaller than [Z₂].
- **Forgetting the power from a coefficient.** In Z₂ ⇌ 2Z the reverse rate is k₋₁[Z]², which gives a square root, not a factor of 2.
- **"Matching the rate law proves the mechanism."** It shows the mechanism is consistent with the data. Another mechanism may give the same rate law (see Practice Question 5).

## Where this leads

Next, Topic 5.10 shows the same mechanisms as [multistep reaction energy profiles](/advanced-course-resources/chemistry/5-10-multistep-reaction-energy-profile-study-guide/). A fast pre-equilibrium shows up there as a low first hump with a valley that can easily slide back, followed by a taller second hump. In Topic 5.11 you will see catalysts take part in fast steps like these, which is why a catalyst can appear in a rate law even though it is not in the overall equation. Look back at [Topic 5.8](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-study-guide/) if the slow-first-step case is not secure. Try the [practice questions](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-checklist/) to consolidate.
