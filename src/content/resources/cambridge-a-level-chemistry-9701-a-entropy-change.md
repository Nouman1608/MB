---
title: "Cambridge A Level Chemistry (9701): Entropy change"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Chemical energetics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 23.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-entropy-change"
description: "What entropy means in 9701, predicting the sign of ΔS for changes of state, temperature and gas moles, and calculating ΔS from standard entropies."
author: "marlbridge-academic-team"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **23.3, Entropy change, ΔS**, from Topic 23, Chemical energetics,
of Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level
content and leads directly into Gibbs free energy (23.4). The broader
[Lattice Energy, Entropy and Gibbs Free Energy guide](/resources/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy/)
gives a short summary of entropy; this page explains the reasoning behind each type of sign
prediction and works through calculations where the sign is not obvious.

## What the syllabus asks for

The learning outcomes for 23.3 are:

1. define entropy, S, as **the number of possible arrangements of the particles and their
   energy in a given system**;
2. predict and explain the sign of the entropy change:
   - (a) during a change in state, such as melting, boiling and dissolving, and their reverse;
   - (b) during a temperature change;
   - (c) during a reaction in which the number of gaseous molecules changes;
3. calculate ΔS⦵ for a reaction from standard entropies:
   ΔS⦵ = ΣS⦵(products) − ΣS⦵(reactants).

The syllabus states that ΔS = ΔS<sub>surr</sub> + ΔS<sub>sys</sub> is **not** required.
Every entropy change you calculate in 9701 is the entropy change of the reacting system.

## The definition and what it means

Use the syllabus wording exactly: entropy is the number of possible arrangements of the
particles **and their energy** in a given system. Two kinds of arrangement count:

- **arrangements of the particles in space**: particles that can move freely through a large
  volume can be arranged in far more ways than particles fixed in a lattice;
- **arrangements of energy among the particles**: energy comes in quanta, and the more
  energy levels that are accessible, the more ways the total energy can be shared out.

A system with more possible arrangements has higher entropy. "Disorder" is a useful picture,
but if a question asks for the definition, the arrangements wording is what earns the mark.

**Standard entropy, S⦵**, is the entropy of one mole of a substance under standard conditions
(298 K and 101 kPa in this syllabus). Units are **J K⁻¹ mol⁻¹**, joules rather than
kilojoules. Two facts help you check answers:

- every element and compound in the solid, liquid or gas state has a **positive** S⦵ at
  298 K;
- elements do **not** have S⦵ = 0. Unlike enthalpy change of formation, there is no "zero for
  elements" rule, so H₂(g) and O₂(g) must appear in the sum.

## Predicting the sign of ΔS

### Changes of state

| Process | Sign of ΔS | Reason |
|---|---|---|
| melting (s → l) | positive | particles leave fixed lattice positions and can move past each other |
| boiling (l → g) | positive, large | particles separate completely and move freely through a much larger volume |
| sublimation (s → g) | positive, large | combines both changes |
| freezing, condensing | negative | the reverse: fewer arrangements |

Boiling gives a much bigger entropy increase than melting. Using standard entropies of water,
S⦵(H₂O, l) = 69.9 and S⦵(H₂O, g) = 188.7 J K⁻¹ mol⁻¹, the change from liquid to gas is
+118.8 J K⁻¹ mol⁻¹, far larger than any typical melting value, because gas particles can be
arranged in so many more ways.

### Dissolving and its reverse

- **A solid dissolving** in water: the ions or molecules leave an ordered lattice and spread
  through the solvent, so ΔS is usually **positive**.
- **Crystallisation or precipitation** (the reverse): ions come together into a lattice, so ΔS
  is **negative**.
- **A gas dissolving** in water: gas molecules that could move through the whole container
  become confined in the liquid, so ΔS is **negative**. This case catches students who
  assume all dissolving increases entropy.

### Temperature change

Raising the temperature of a substance **increases its entropy**. The particles have more
energy, so more energy levels become accessible and there are more ways to distribute the
energy among the particles; the particles also move faster. Cooling decreases entropy. This
is a change of temperature with no change of state; a change of state on heating adds a
further, larger increase.

### Reactions with a change in gaseous molecules

Gas particles have far higher entropy than solids or liquids, so the number of **gaseous
molecules** dominates the sign of ΔS for a reaction:

- more moles of gas on the product side → ΔS **positive**;
- fewer moles of gas on the product side → ΔS **negative**.

Count only gases. In CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), there are 3 moles of gas on the
left and 1 on the right; the liquid water does not count as gas, so ΔS is negative.

When the number of gas moles **does not change**, the sign cannot be predicted reliably from
the equation and must be calculated. For H₂(g) + Cl₂(g) → 2HCl(g), both sides have 2 moles of
gas and ΔS⦵ is only about +20 J K⁻¹ mol⁻¹.

## Calculating ΔS⦵

ΔS⦵ = ΣS⦵(products) − ΣS⦵(reactants)

Multiply each S⦵ by the stoichiometric coefficient in the equation, and include every
species, elements as well.

### Worked example 1: the Haber process

N₂(g) + 3H₂(g) → 2NH₃(g)

*Standard entropies supplied (J K⁻¹ mol⁻¹):* N₂ 191.6; H₂ 130.6; NH₃ 192.3.

ΣS⦵(products) = 2 × 192.3 = 384.6

ΣS⦵(reactants) = 191.6 + (3 × 130.6) = 191.6 + 391.8 = 583.4

ΔS⦵ = 384.6 − 583.4 = **−198.8 J K⁻¹ mol⁻¹**

Check against the prediction: 4 moles of gas become 2, so a negative value is expected.

### Worked example 2: a solid reacting with a gas

2Mg(s) + O₂(g) → 2MgO(s)

*Supplied (J K⁻¹ mol⁻¹):* Mg(s) 32.7; O₂(g) 205.0; MgO(s) 26.9.

ΔS⦵ = (2 × 26.9) − [(2 × 32.7) + 205.0] = 53.8 − 270.4 = **−216.6 J K⁻¹ mol⁻¹**

Most of the decrease comes from the loss of one mole of gas: the oxygen term alone is
205.0 J K⁻¹ mol⁻¹. This is a useful way to explain the size of a value as well as its sign.

### Worked example 3: annotated model answer

> *Question:* Predict and explain the sign of the entropy change when steam condenses to
> liquid water at 373 K. [2]
>
> *Answer:* ΔS is negative [1]. Particles in the liquid are close together and less free to
> move than in the gas, so there are fewer possible arrangements of the particles and their
> energy [1].

The second mark needs the link back to arrangements, not just "the liquid is more ordered".

## Common mistakes

- **Treating elements as zero.** S⦵(O₂) = 205.0 J K⁻¹ mol⁻¹ must be included.
- **Forgetting the coefficients.** In the Haber process, H₂ is multiplied by 3 and NH₃ by 2.
- **Reversing the subtraction.** It is always products minus reactants.
- **Counting liquids and solids as gas moles.** Only (g) species count when predicting the sign.
- **Mixing units.** ΔS is in J K⁻¹ mol⁻¹. If the next step is a Gibbs calculation, convert to
  kJ K⁻¹ mol⁻¹ there, not here, and say that you have done so.
- **Predicting a sign when gas moles are unchanged.** Say that the change is small and its
  sign needs data.
- **Saying all dissolving increases entropy.** A gas dissolving in a liquid decreases it.

## Exam technique

- **Define**: quote "the number of possible arrangements of the particles and their energy in
  a given system".
- **Predict**: give the sign, positive or negative, as a single clear word.
- **Explain**: name the feature (change of state, temperature, moles of gas), then link it to
  more or fewer possible arrangements. Two marks usually need both steps.
- **Calculate**: write the ΣS⦵(products) − ΣS⦵(reactants) expression with coefficients,
  show both sums, then give the answer with sign and units. A quick sign check against
  the gas moles catches arithmetic slips.
- **Suggest** or **comment**: if a calculated sign disagrees with your prediction, look first
  for a missed coefficient.

## Where next

Use the
[Entropy change revision notes](/resources/cambridge-a-level-chemistry-9701-a-entropy-change-revision-notes/)
to condense this page and the
[Entropy change practice questions](/resources/cambridge-a-level-chemistry-9701-a-entropy-change-practice/)
to test it. Entropy values feed directly into ΔG = ΔH − TΔS in the
[Gibbs free energy change study guide](/resources/cambridge-a-level-chemistry-9701-a-gibbs-free-energy-change/).

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series.
Always check the current syllabus for your examination year.
