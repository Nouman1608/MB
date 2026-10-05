---
resourceId: "mb-ap-chem-5.4-study-guide"
title: "Elementary Reactions: Study Guide (Chemistry 5.4)"
description: "Learn what an elementary reaction is, how to write its rate law straight from its equation, how molecularity is defined, and why steps needing three particles to collide at once are rare."
course: "chemistry"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites:
  - "Rate laws, reaction order and units of the rate constant (Topics 5.2 and 5.3)"
  - "Reading coefficients in a balanced equation"
prerequisiteResources: ["mb-ap-chem-5.3-study-guide"]
learningObjectives:
  - "Explain the difference between an elementary reaction and an overall reaction"
  - "Write the rate law of an elementary reaction from the numbers of each particle that collide"
  - "Classify an elementary reaction as unimolecular, bimolecular or termolecular and give the units of its rate constant"
  - "Explain why elementary reactions that need three or more particles to collide at the same moment are rare"
  - "Judge whether an overall reaction could happen in a single elementary step, using its experimental rate law"
skills: ["5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Rate calculations use powers of ten; give answers to the significant figures of the data"
related: ["mb-ap-chem-5.4-revision-notes", "mb-ap-chem-5.4-practice", "mb-ap-chem-5.4-checklist"]
next: "mb-ap-chem-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "An elementary reaction is one single event: the particles on the left meet in one collision (or one particle breaks apart) and the products form."
  - "For an elementary reaction only, the coefficients become the orders: for A + 2B → products, rate = k[A][B]²."
  - "Molecularity is the number of particles that take part: one (unimolecular), two (bimolecular) or three (termolecular)."
  - "Three particles colliding at exactly the same moment is rare, and steps with more than three particles are not expected at all."
  - "For an overall reaction you cannot read the rate law from the equation; it must come from experiment."
faqs:
  - question: "How do I know if a reaction is elementary?"
    answer: "In this course you are usually told that a step is elementary. You can never prove it from the balanced equation alone. An experimental rate law that differs from the one the equation predicts shows the reaction is not a single step."
  - question: "Is molecularity the same as order?"
    answer: "For an elementary step, the overall order equals the molecularity. But order is also used for overall reactions, where it is found by experiment and can be zero or a fraction. Molecularity only applies to elementary steps and is always 1, 2 or 3."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## One collision, one step

A balanced equation tells you the starting materials and products, and in what ratio. It usually does **not** tell you how the change happens. Many reactions go through a series of simple steps. Each simple step is called an **elementary reaction** (or elementary step).

An elementary reaction is a single event at the particle level:

- one particle breaks apart or rearranges on its own, **or**
- two (occasionally three) particles collide, and in that one collision bonds break and form to give the products.

The equation for an elementary reaction shows exactly the particles that take part. If the step is 2 NO₂ → NO₃ + NO, then two NO₂ molecules hit each other, and in that collision an O atom moves from one to the other. Nothing else is involved.

An **overall reaction** is the sum of the steps. In [Topic 5.2](/advanced-course-resources/chemistry/5-2-introduction-rate-law-study-guide/) you saw that the orders in an overall rate law have to be found by experiment. They cannot be read from the coefficients. The new idea in this topic is that **for an elementary step, they can**.

## Why the coefficients become the orders

For two particles to react, they must first meet. So the rate of a bimolecular step is proportional to **how often the right particles collide**, and that depends on how many of each there are in a given volume: their concentrations.

<figure>
<svg viewBox="0 0 650 200" role="img" aria-labelledby="pairs-title pairs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pairs-title">Counting possible A–B collision partners</title>
<desc id="pairs-desc">Three boxes of the same volume. Particles of A are drawn as circles labelled A, particles of B as squares labelled B. Box 1 holds 3 A and 2 B, giving 6 possible A–B pairs. Box 2 holds 6 A and 2 B, giving 12 pairs, twice as many. Box 3 holds 6 A and 4 B, giving 24 pairs, four times the first box.</desc>
<rect x="10" y="10" width="195" height="135" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="50" cy="45" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="49" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="115" cy="100" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="115" y="104" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="170" cy="50" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="170" y="54" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<rect x="95" y="50" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="105" y="64" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<rect x="40" y="80" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="94" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<text x="107.5" y="166" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">3 A, 2 B: 6 A–B pairs</text>
<text x="107.5" y="186" text-anchor="middle" font-size="13" fill="#1d2b44">relative rate 1</text>
<rect x="225" y="10" width="195" height="135" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="265" cy="45" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="265" y="49" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="330" cy="100" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="330" y="104" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="385" cy="50" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="385" y="54" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="295" cy="115" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="295" y="119" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="360" cy="40" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="360" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="390" cy="115" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="390" y="119" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<rect x="310" y="50" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="320" y="64" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<rect x="255" y="80" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="265" y="94" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<text x="322.5" y="166" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">6 A, 2 B: 12 A–B pairs</text>
<text x="322.5" y="186" text-anchor="middle" font-size="13" fill="#1d2b44">relative rate × 2</text>
<rect x="440" y="10" width="195" height="135" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="480" cy="45" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="480" y="49" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="545" cy="100" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="545" y="104" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="600" cy="50" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="600" y="54" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="510" cy="115" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="510" y="119" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="575" cy="40" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="575" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<circle cx="605" cy="115" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="605" y="119" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">A</text>
<rect x="525" y="50" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="535" y="64" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<rect x="470" y="80" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="480" y="94" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<rect x="580" y="72" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="590" y="86" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<rect x="545" y="115" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="555" y="129" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">B</text>
<text x="537.5" y="166" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">6 A, 4 B: 24 A–B pairs</text>
<text x="537.5" y="186" text-anchor="middle" font-size="13" fill="#1d2b44">relative rate × 4</text>
</svg>
<figcaption>Figure 1. In the elementary step A + B → products, every A–B pair is a possible reacting collision. Doubling [A] doubles the number of pairs; doubling [B] as well doubles it again. So the rate is proportional to [A] × [B].</figcaption>
</figure>

Figure 1 shows the counting idea. Each A particle can meet each B particle, so the number of possible A–B pairs is (number of A) × (number of B). Double the number of A, and there are twice as many pairs. Double B as well, and there are four times as many. That gives

**A + B → products: rate = k[A][B]**

If the two colliding particles are the **same** substance, the same counting gives a square. Doubling [A] doubles the number of A particles, **and** each one now has twice as many A partners to hit:

**A + A → products (written 2A → products): rate = k[A]²**

A unimolecular step needs no collision partner of a particular kind. Each particle has the same chance of reacting in the next second, so the rate is proportional to how many there are, as in radioactive decay ([Topic 5.3](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-study-guide/)):

**A → products: rate = k[A]**

The rule is general: **for an elementary step, the order in each reactant equals its coefficient in the step**, and only reactants appear in the rate law.

## Molecularity

The **molecularity** of an elementary step is the number of reactant particles that come together in it.

| Molecularity | General form | Rate law | Overall order | Units of k (rate in M s⁻¹) |
|---|---|---|---|---|
| Unimolecular | A → products | k[A] | 1 | s⁻¹ |
| Bimolecular | A + B → products | k[A][B] | 2 | M⁻¹ s⁻¹ |
| Bimolecular | 2A → products | k[A]² | 2 | M⁻¹ s⁻¹ |
| Termolecular | A + B + C → products | k[A][B][C] | 3 | M⁻² s⁻¹ |
| Termolecular | 2A + B → products | k[A]²[B] | 3 | M⁻² s⁻¹ |

"Particles" can be molecules, atoms, ions or free radicals. A step such as 2A → products is bimolecular even though only one substance is involved: two particles collide.

### Where the units of k come from

The rate of any step is measured in M s⁻¹. The concentrations in the rate law bring in one factor of M for each particle that collides. k has to cancel the extra ones:

- unimolecular: k × M = M s⁻¹, so k is in s⁻¹
- bimolecular: k × M² = M s⁻¹, so k is in M⁻¹ s⁻¹
- termolecular: k × M³ = M s⁻¹, so k is in M⁻² s⁻¹

So the units of k tell you the overall order, and for an elementary step that is also the molecularity. This is a useful check on any rate law you write: if the units do not come out as M s⁻¹, the setup is wrong. It also works the other way. If a question gives k = 3.0 × 10⁻² s⁻¹ for an elementary step, the step must be unimolecular.

## Why three-particle collisions are rare

For a termolecular step, three particles must arrive at the same place at the same instant, and still have enough energy and the right orientation. Two-particle collisions happen all the time. But for a third particle to arrive during the extremely short moment that two others are in contact is far less likely. So termolecular steps are **rare**.

Steps with four or more particles colliding at once are so unlikely that they are not used in reaction mechanisms. Most elementary steps are unimolecular or bimolecular.

This gives you a quick test. If an overall equation has four or more reactant particles on the left, it **cannot** be a single elementary step. It must happen in several steps.

## Worked example 1: writing rate laws for elementary steps

**Question.** Treat each equation below as an elementary step. For each, state the molecularity, write the rate law and give the units of k (rate in M s⁻¹).

(a) O₃ → O₂ + O
(b) NO + O₃ → NO₂ + O₂
(c) 2 NO₂ → NO₃ + NO
(d) 2 NO + Br₂ → 2 NOBr

**Method.** Count the reactant particles, then use each coefficient as the order. Ignore the products.

| Step | Particles colliding | Molecularity | Rate law | Units of k |
|---|---|---|---|---|
| (a) | one O₃ | unimolecular | rate = k[O₃] | s⁻¹ |
| (b) | one NO + one O₃ | bimolecular | rate = k[NO][O₃] | M⁻¹ s⁻¹ |
| (c) | two NO₂ | bimolecular | rate = k[NO₂]² | M⁻¹ s⁻¹ |
| (d) | two NO + one Br₂ | termolecular | rate = k[NO]²[Br₂] | M⁻² s⁻¹ |

**Check the units.** Rate is in M s⁻¹. In (d), k × M² × M must give M s⁻¹, so k must be in M⁻² s⁻¹.

**Interpretation.** Of the four, (d) would be the least likely to happen as a single step, because it needs three particles to collide at the same moment.

## Worked example 2: using an elementary rate law

**Question.** An elementary step A + B → C has k = 2.5 × 10⁵ M⁻¹ s⁻¹. (a) Calculate the rate when [A] = 4.0 × 10⁻⁴ M and [B] = 1.2 × 10⁻³ M. (b) Find the new rate if [A] is tripled and [B] is halved.

**(a)** The step is elementary and bimolecular, so rate = k[A][B]:

rate = (2.5 × 10⁵ M⁻¹ s⁻¹)(4.0 × 10⁻⁴ M)(1.2 × 10⁻³ M) = **0.12 M s⁻¹**

**(b)** The rate is first order in each reactant, so the rate changes by 3 × ½ = 1.5:

new rate = 1.5 × 0.12 M s⁻¹ = **0.18 M s⁻¹**

**Check.** Substitute directly: (2.5 × 10⁵)(1.2 × 10⁻³)(6.0 × 10⁻⁴) = 0.18 M s⁻¹. If the step had been second order in A instead (for example 2A + B → products), tripling [A] would multiply the rate by 3² = 9, not 3.

## Worked example 3: can the overall reaction be one step?

**Question.** (a) For an invented gas reaction A₂ + B₂ → 2 AB, experiments give rate = k[A₂][B₂]. A student says: "This proves the reaction is a single elementary step." Evaluate the claim. (b) Could the combustion of propane, C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O, be a single elementary step?

**(a)** If the reaction were one bimolecular step, its rate law would be k[A₂][B₂]. The experimental rate law **matches**, so a single step is **consistent** with the data. But it is not proved. A sequence of several steps can produce the same rate law, as you will see with reaction mechanisms. Agreement means "possible", not "certain". More evidence, such as detecting an intermediate, would be needed to decide.

**(b)** No. Six reactant particles (one C₃H₈ and five O₂) would have to collide at the same instant. Even three-particle collisions are rare; six is not realistic. Propane combustion must happen through many elementary steps.

**The general rule.** If the experimental rate law **differs** from the rate law written from the coefficients, the reaction is definitely **not** a single elementary step. If it **agrees**, a single step is possible but not proved.

## Common misconceptions

- **"You can always write the rate law from the balanced equation."** Only for an elementary step. For an overall reaction the orders come from experiment.
- **"2A → products is unimolecular because there is only one reactant."** Molecularity counts particles, not substances. Two A particles collide, so it is bimolecular, and rate = k[A]².
- **"Termolecular steps are impossible."** They are rare, not impossible. Steps with four or more particles colliding at once are the ones that are not expected.
- **"Products go in the rate law."** The rate law of a forward elementary step contains only the reactants that collide.
- **"Molecularity and order are the same thing."** For an elementary step the overall order equals the molecularity. For an overall reaction, order is measured and can be zero or a fraction, while molecularity is not defined.
- **"A matching rate law proves the reaction is elementary."** It only shows that a single step is possible.

## Where this leads

This topic builds on the rate laws of [Topic 5.3, Concentration Changes Over Time](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-study-guide/). Next, [Topic 5.5, Collision Model](/advanced-course-resources/chemistry/5-5-collision-model-study-guide/), explains why only some collisions lead to reaction: particles need enough energy and the right orientation. Later in the unit you will join elementary steps together into reaction mechanisms and use their rate laws to test a proposed mechanism against experiment. Try the [practice questions](/advanced-course-resources/chemistry/5-4-elementary-reactions-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-4-elementary-reactions-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-4-elementary-reactions-checklist/) to consolidate.
