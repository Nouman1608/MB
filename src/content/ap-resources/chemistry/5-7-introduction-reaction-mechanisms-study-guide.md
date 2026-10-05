---
resourceId: "mb-ap-chem-5.7-study-guide"
title: "Introduction to Reaction Mechanisms: Study Guide (Chemistry 5.7)"
description: "Learn what a reaction mechanism is, how to spot reactants, products, intermediates and catalysts in its steps, how the steps add up to the overall equation, and how intermediates give evidence."
course: "chemistry"
unit: 5
topics: ["5.7"]
resourceType: "study-guide"
prerequisites:
  - "Elementary reactions and molecularity (Topic 5.4)"
  - "The collision model and reaction energy profiles (Topics 5.5 and 5.6)"
  - "Balancing chemical equations"
prerequisiteResources: ["mb-ap-chem-5.6-study-guide"]
learningObjectives:
  - "Describe a reaction mechanism as a sequence of elementary steps"
  - "Identify the reactants, products, intermediates and catalysts in a proposed mechanism"
  - "Add the elementary steps of a mechanism, cancelling species, to check that they give the overall balanced equation"
  - "Explain why an intermediate exists only while the reaction is running"
  - "Explain how detecting an intermediate can support one proposed mechanism over another"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "The only arithmetic is counting particles when you add steps and cancel species"
related: ["mb-ap-chem-5.7-revision-notes", "mb-ap-chem-5.7-practice", "mb-ap-chem-5.7-checklist"]
next: "mb-ap-chem-5.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A reaction mechanism is a series of elementary steps. The balanced equation shows only the overall change."
  - "When you add the steps and cancel anything that appears on both sides, you must get the overall balanced equation."
  - "An intermediate is made in one step and used up in a later step. It is not in the overall equation and is present only while the reaction runs."
  - "A catalyst is used up in one step and given back in a later step. It is also not in the overall equation."
  - "Detecting an intermediate that only one proposed mechanism predicts is evidence for that mechanism."
faqs:
  - question: "Is an intermediate the same as a transition state?"
    answer: "No. A transition state exists only at the top of an energy barrier during a single collision and cannot be isolated. An intermediate is a real species that is formed in one step and lasts long enough to take part in a later step."
  - question: "If a mechanism adds up to the right equation, is it correct?"
    answer: "Not necessarily. Adding up correctly is a test every mechanism must pass, but different mechanisms can add up to the same equation. You need further evidence, such as a detected intermediate or the rate law (Topic 5.8)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## The balanced equation hides the steps

A balanced equation tells you what you start with and what you end with. It does not tell you what the particles actually do. Take a reaction with the overall equation

2P + R₂ → 2PR

If this happened in one go, two P particles and one R₂ particle would have to hit each other at the same instant, in the right orientation, with enough energy. In Topic 5.4 you saw that collisions of three or more particles at once are rare. So most reactions with several reactant particles happen as a **series of simpler events**, each one a single collision (or a single particle falling apart).

Each of these simple events is an **elementary step** (an elementary reaction). The full series of elementary steps is the **reaction mechanism**.

- An elementary step describes one actual molecular event. Its coefficients tell you how many particles take part.
- The number of particles that react in a step is its **molecularity**: one particle is unimolecular, two is bimolecular, three is termolecular (rare).
- The overall balanced equation is *not* usually an elementary step. Its coefficients are only a summary of the whole process.

A mechanism is a **model**: chemists propose it to explain how a reaction happens, and then test it against evidence.

## The parts of a mechanism

Every species in a mechanism falls into one of four roles. You can sort them using only the steps, by asking *where the species first appears* and *whether it is left over at the end*.

| Role | Where it appears in the steps | In the overall equation? |
|---|---|---|
| Reactant | On the left of a step; not made back later | Yes, on the left |
| Product | On the right of a step; not used up later | Yes, on the right |
| Intermediate | **Made first** (right of an early step), **then used** (left of a later step) | No |
| Catalyst | **Used first** (left of an early step), **then made back** (right of a later step) | No |

Intermediates and catalysts both cancel when you add up the steps, which is why students mix them up. The order is the key: an intermediate is **made, then used**; a catalyst is **used, then given back**. A catalyst is there at the start of the reaction and still there at the end. An intermediate is not there at the start and is not there at the end.

A real example from atmospheric chemistry shows both roles. Chlorine atoms in the stratosphere help destroy ozone in two steps:

- Step 1: Cl + O₃ → ClO + O₂
- Step 2: ClO + O → Cl + O₂

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="mech-cycle-title mech-cycle-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mech-cycle-title">A two-step mechanism with an intermediate and a catalyst</title>
<desc id="mech-cycle-desc">Two boxes, one above the other. The top box is step 1: Cl plus O3 gives ClO plus O2. The bottom box is step 2: ClO plus O gives Cl plus O2. A solid arrow on the right runs down from step 1 to step 2 and is labelled: ClO is made in step 1 and used in step 2, so it is an intermediate. A dashed arrow on the left runs up from step 2 to step 1 and is labelled: Cl is used in step 1 and given back in step 2, so it is a catalyst. Below the boxes the overall equation is written: O3 plus O gives 2 O2, with Cl and ClO cancelled.</desc>
<rect x="180" y="30" width="280" height="56" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="54" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Step 1</text>
<text x="320" y="75" text-anchor="middle" font-size="15" fill="#1d2b44">Cl + O₃ → ClO + O₂</text>
<rect x="180" y="170" width="280" height="56" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="194" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Step 2</text>
<text x="320" y="215" text-anchor="middle" font-size="15" fill="#1d2b44">ClO + O → Cl + O₂</text>
<path d="M462 58 C 520 70, 520 180, 464 196" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#mc1)"/>
<path d="M178 196 C 120 180, 120 70, 176 58" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#mc1)"/>
<text x="530" y="112" font-size="13" font-weight="600" fill="#1d2b44">ClO: made,</text>
<text x="530" y="129" font-size="13" font-weight="600" fill="#1d2b44">then used</text>
<text x="530" y="146" font-size="13" fill="#1d2b44">= intermediate</text>
<text x="110" y="112" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">Cl: used,</text>
<text x="110" y="129" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">then given back</text>
<text x="110" y="146" text-anchor="end" font-size="13" fill="#1d2b44">= catalyst</text>
<text x="320" y="268" text-anchor="middle" font-size="14" fill="#1d2b44">Overall (Cl and ClO cancel): O₃ + O → 2O₂</text>
<defs><marker id="mc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. The solid arrow follows the intermediate (made in step 1, used in step 2). The dashed arrow follows the catalyst (used in step 1, given back in step 2), so one Cl atom can go round the cycle many times.</figcaption>
</figure>

ClO is formed in step 1 and used in step 2, so it is an **intermediate**. Cl is used in step 1 and comes back in step 2, so it is a **catalyst**. O₃ and O are reactants; O₂ is a product. Because the chlorine atom is given back each time, a single Cl atom can destroy a very large number of ozone molecules.

## Adding the steps to get the overall equation

A proposed mechanism must agree with the overall balanced equation. To check:

1. Write all the steps, one under another.
2. Add up everything on the left sides, and everything on the right sides.
3. Cancel any species that appears on both sides, in equal amounts.
4. Compare what is left with the overall equation.

For the chlorine cycle: left side Cl + O₃ + ClO + O; right side ClO + O₂ + Cl + O₂. Cancel Cl and ClO. You are left with O₃ + O → 2O₂, which is the overall reaction.

Sometimes a step has to happen **more than once** for every one time the overall reaction happens. Then you multiply that step by the right number before you add. You will see this in Worked example 2.

## Intermediates exist only while the reaction runs

An intermediate is made by one step and used by another. At the start, none has been made. As the reaction runs, it builds up a little, because it is being made and used at the same time. When the reactants run out, nothing makes the intermediate any more, but the later step still uses it, so its amount falls back to zero.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="inter-time-title inter-time-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="inter-time-title">Concentration against time for a reactant, an intermediate and a product</title>
<desc id="inter-time-desc">A sketch graph with time on the horizontal axis and concentration on the vertical axis. The reactant line, solid, starts high and falls towards zero as the reactant is used up. The product line, long dashes, starts at zero and rises towards a high level. The intermediate line, dotted, starts at zero, rises to a small peak early in the reaction and then falls back to zero as the reactant runs out. No numbers are shown; the shapes are qualitative.</desc>
<path d="M70 30 V240 H525" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="300" y="275" text-anchor="middle" font-size="14" fill="#1d2b44">time</text>
<text x="28" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 28 140)">concentration</text>
<path d="M72 45 C 150 160, 260 225, 520 228" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M72 238 C 170 140, 300 80, 520 62" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="12 6"/>
<path d="M72 238 C 100 185, 150 178, 200 198 C 260 222, 360 236, 520 238" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 5"/>
<text x="530" y="66" font-size="13" font-weight="600" fill="#1d2b44">product</text>
<text x="530" y="222" font-size="13" font-weight="600" fill="#1d2b44">reactant</text>
<text x="530" y="250" font-size="13" font-weight="600" fill="#1d2b44">intermediate</text>
</svg>
<figcaption>Figure 2. A sketch, not data. Reactant: solid line. Product: dashed line. Intermediate: dotted line. The intermediate rises from zero, peaks while the reaction is fast, and falls back to zero as the reactant runs out. It is never part of the starting mixture or the final mixture.</figcaption>
</figure>

This is why intermediates never appear in the overall equation: you do not add them at the start and you cannot collect them at the end. Many intermediates are highly reactive (atoms, radicals or unusual ions), so their concentration stays very small.

**Do not confuse an intermediate with a transition state.** In Topic 5.6 the transition state was the arrangement of atoms at the top of the energy barrier during one collision. It lasts only for the instant of that collision and cannot be isolated. An intermediate is a separate species made at the end of one step, which then lives long enough to collide in a later step.

## Building evidence for a mechanism

A mechanism is a proposal, so it needs evidence. Two tests come first:

- **It must add up** to the overall balanced equation. A mechanism that does not is wrong.
- **Its steps must be reasonable** elementary reactions, normally unimolecular or bimolecular.

Passing these tests is necessary, but not enough. Different mechanisms can add up to the same equation. One useful way to choose between them is to look for an **intermediate**:

- If mechanism A predicts intermediate I and mechanism B does not, then detecting I in the reacting mixture supports A over B.
- Chemists often use spectroscopy or a trapping reagent to show that a short-lived species is present. You will not be asked how such data are collected, but you should be able to explain what a detected intermediate means.
- Failing to detect an intermediate is weaker evidence. It may simply be too short-lived or too dilute to see.

Detection never *proves* a mechanism; it makes one mechanism more likely than the alternatives. In Topic 5.8 you will meet the second big piece of evidence: whether the mechanism predicts the rate law found by experiment.

## Worked example 1: identifying the parts of a three-step mechanism

**Question.** A fictional reaction is proposed to happen by this mechanism:

- Step 1: Q + Y₂ → QY + Y
- Step 2: Y + X → XY
- Step 3: QY + X → XY + Q

(a) Write the overall equation. (b) Identify the intermediates and the catalyst. (c) State the molecularity of each step.

1. **Add the left sides:** Q + Y₂ + Y + X + QY + X.
2. **Add the right sides:** QY + Y + XY + XY + Q.
3. **Cancel** what appears on both sides: Q (left in step 1, right in step 3), QY (right in step 1, left in step 3) and Y (right in step 1, left in step 2).
4. **What is left:** Y₂ + 2X → 2XY.
5. **Sort the cancelled species by order of appearance:**
   - QY: made in step 1, used in step 3 → **intermediate**.
   - Y: made in step 1, used in step 2 → **intermediate**.
   - Q: used in step 1, given back in step 3 → **catalyst**.
6. **Molecularity:** each step has two reacting particles on the left, so all three steps are **bimolecular**.

**Answer.** (a) Y₂ + 2X → 2XY. (b) Intermediates: QY and Y. Catalyst: Q. (c) Bimolecular, bimolecular, bimolecular.

**Check.** Count atoms in the overall equation: 2 Y and 2 X on each side. Notice that the overall equation contains three reactant particles, but no step needs more than two to collide. That is exactly why a mechanism is more believable than a single three-particle collision.

## Worked example 2: which proposed mechanisms fit the equation?

**Question.** The overall equation for a fictional reaction is 2P + R₂ → 2PR. Three mechanisms are proposed.

- Mechanism I: Step 1: R₂ → 2R. Step 2: R + P → PR.
- Mechanism II: Step 1: P + R₂ → PR₂. Step 2: PR₂ + P → 2PR.
- Mechanism III: Step 1: P + R₂ → PR + R. Step 2: PR + R → PR₂.

(a) Which mechanisms are consistent with the overall equation? (b) For each consistent mechanism, name the intermediate. (c) A research group detects free R atoms in the reacting mixture. Which mechanism does this support?

**Mechanism I.** Added once each, the steps give R₂ + R + P → 2R + PR, which leaves R on the right. But step 1 makes **two** R atoms, and step 2 uses only one. So step 2 must happen **twice** for each step 1. Multiply step 2 by 2: 2R + 2P → 2PR. Now add: R₂ + 2R + 2P → 2R + 2PR. Cancel 2R: **2P + R₂ → 2PR**. Consistent. Intermediate: **R**.

**Mechanism II.** Add: P + R₂ + PR₂ + P → PR₂ + 2PR. Cancel PR₂: **2P + R₂ → 2PR**. Consistent. Intermediate: **PR₂**.

**Mechanism III.** Add: P + R₂ + PR + R → PR + R + PR₂. Cancel PR and R: P + R₂ → PR₂. This is a different reaction, so mechanism III is **not consistent**, even though each of its steps is balanced.

**Detecting R atoms.** Mechanism I predicts free R atoms as an intermediate; mechanism II does not involve R atoms at all. Detecting R in the mixture therefore **supports mechanism I over mechanism II**. It does not prove mechanism I, because a mechanism nobody has proposed yet might also make R.

**What about a single step?** 2P + R₂ → 2PR as one elementary step would be termolecular (three particles colliding at once). It adds up, but it is unlikely, so a two-step mechanism is the better starting proposal.

## Common misconceptions

- **"The coefficients in the overall equation show which particles collide."** They do not. The overall equation summarises many events. Only an elementary step tells you which particles collide.
- **"An intermediate and a catalyst are the same thing because both cancel."** Look at the order. Made then used: intermediate. Used then given back: catalyst.
- **"A catalyst does not take part in the reaction."** It does take part: it reacts in one step and is regenerated in a later step. It is simply not used up overall.
- **"An intermediate can appear in the overall equation."** Never. It is not in the starting mixture and is not left at the end.
- **"Every step happens once."** Sometimes a step must happen twice (or more) for each overall reaction. If the steps do not cancel neatly, check whether one step needs a multiplier.
- **"If the steps add up, the mechanism is proven."** Adding up is only the first test. Other mechanisms may add up too, so you need extra evidence such as a detected intermediate or the rate law.
- **"An intermediate is the transition state."** A transition state cannot be isolated and lasts only for one collision; an intermediate is a real species between steps.
- **"Not finding an intermediate disproves the mechanism."** It may be too short-lived or too dilute to detect. Detection is strong evidence; non-detection is weak evidence.

## Where this leads

This topic builds on elementary steps (Topic 5.4) and the energy profile of a single step in [Topic 5.6, Reaction Energy Profile](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-study-guide/). Next, [Topic 5.8, Reaction Mechanism and Rate Law](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-study-guide/), shows how the slowest step of a mechanism sets the rate law, which gives you a second way to test a proposed mechanism. Try the [practice questions](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-checklist/) to consolidate.
