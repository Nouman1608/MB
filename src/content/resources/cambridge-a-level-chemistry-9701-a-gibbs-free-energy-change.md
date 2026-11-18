---
title: "Cambridge A Level Chemistry (9701): Gibbs free energy change"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Chemical energetics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 23.4
syllabusTopics:
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-gibbs-free-energy-change"
description: "Using ΔG = ΔH − TΔS for Cambridge 9701: unit handling, feasibility from the sign of ΔG, changeover temperatures and how temperature changes feasibility."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **23.4, Gibbs free energy change, ΔG**, from Topic 23, Chemical
energetics, of Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is
A Level content. The broader
[Lattice Energy, Entropy and Gibbs Free Energy guide](/resources/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy/)
uses the decomposition of calcium carbonate as its example; this page takes three different
reactions through full calculations and explains *why* temperature changes feasibility, so you
can reason through unfamiliar cases rather than relying on a memorised table.

## What the syllabus asks for

The learning outcomes for 23.4 are:

1. state and use the Gibbs equation, ΔG⦵ = ΔH⦵ − TΔS⦵;
2. perform calculations using that equation;
3. state whether a reaction or process will be feasible by using the sign of ΔG;
4. predict the effect of temperature change on the feasibility of a reaction, given standard
   enthalpy and entropy changes.

ΔS⦵ values come from subtopic 23.3, and ΔH⦵ values usually come from enthalpy changes of
formation or combustion met at AS Level. The same quantity, ΔG, reappears in electrochemistry
as ΔG⦵ = −nE⦵<sub>cell</sub>F (subtopic 24.2).

## The Gibbs equation and its terms

ΔG⦵ = ΔH⦵ − TΔS⦵

| Symbol | Meaning | Usual units |
|---|---|---|
| ΔG⦵ | standard Gibbs free energy change | kJ mol⁻¹ |
| ΔH⦵ | standard enthalpy change | kJ mol⁻¹ |
| T | temperature | K (kelvin) |
| ΔS⦵ | standard entropy change of the system | J K⁻¹ mol⁻¹ |

The unit mismatch is the key practical point. ΔH is normally in kJ mol⁻¹ and ΔS in
J K⁻¹ mol⁻¹, so **divide ΔS by 1000** before substituting if you want ΔG in kJ mol⁻¹. Write
the converted value on the page so the examiner can see it.

## Feasibility from the sign of ΔG

- **ΔG negative**: the reaction or process is **feasible** (it can take place without a
  continuous input of energy from outside).
- **ΔG positive**: the reaction is **not feasible** under those conditions.
- **ΔG = 0**: the boundary; the temperature at which feasibility changes.

"Feasible" is a statement about energetics, not rate. A reaction with a very negative ΔG may
not be observed at all because its activation energy is high. When an exam question gives you a
feasible reaction that "does not happen", the expected answer is a kinetic one: the rate is too
slow because the activation energy is high.

## Worked example 1: an exothermic reaction with ΔS negative

N₂(g) + 3H₂(g) → 2NH₃(g)

*Data supplied:* ΔH⦵ = −92.2 kJ mol⁻¹; ΔS⦵ = −198.8 J K⁻¹ mol⁻¹.

**(a) Is the reaction feasible at 298 K?**

ΔS⦵ = −198.8 ÷ 1000 = −0.1988 kJ K⁻¹ mol⁻¹

ΔG⦵ = −92.2 − (298 × −0.1988)

ΔG⦵ = −92.2 + 59.2 = **−33.0 kJ mol⁻¹**, negative, so the reaction is feasible.

**(b) Above what temperature is it no longer feasible?**

At the changeover, ΔG = 0, so T = ΔH⦵ ÷ ΔS⦵:

T = (−92 200 J mol⁻¹) ÷ (−198.8 J K⁻¹ mol⁻¹) = **464 K**

Above about 464 K, the −TΔS term (now a large positive number) outweighs the negative ΔH, and
ΔG becomes positive. Notice that both ΔH and ΔS were converted to the same energy unit, joules,
before dividing.

## Worked example 2: feasible but not observed

2Mg(s) + O₂(g) → 2MgO(s)

*Data supplied:* ΔH⦵ = −1203.4 kJ mol⁻¹; ΔS⦵ = −216.6 J K⁻¹ mol⁻¹.

ΔG⦵ at 298 K = −1203.4 − (298 × −0.2166) = −1203.4 + 64.5 = **−1138.9 kJ mol⁻¹**

This is strongly negative, yet magnesium ribbon can be kept in air without bursting into flame.
The reaction is feasible but needs heat to overcome its activation energy before it proceeds at
a noticeable rate. This is the standard "feasible does not mean fast" example to have ready.

## Worked example 3: an endothermic reaction with ΔS positive

NH₄Cl(s) → NH₃(g) + HCl(g)

*Data supplied:* ΔH⦵ = +176.0 kJ mol⁻¹; ΔS⦵ = +284.6 J K⁻¹ mol⁻¹.

At 298 K: ΔG⦵ = 176.0 − (298 × 0.2846) = 176.0 − 84.8 = **+91.2 kJ mol⁻¹**: not feasible.

Minimum temperature for feasibility: T = 176 000 ÷ 284.6 = **618 K**

Above 618 K, TΔS exceeds ΔH and ΔG is negative, which is why solid ammonium chloride
decomposes when heated strongly.

## Why temperature changes feasibility

Treat the Gibbs equation as two terms competing. ΔH does not involve T. The second term,
−TΔS, grows in size as T increases, and its sign is the **opposite** of the sign of ΔS:

- if ΔS is **positive**, −TΔS is **negative** and becomes more negative as T rises, so
  heating makes ΔG more negative (more feasible);
- if ΔS is **negative**, −TΔS is **positive** and grows as T rises, so heating makes ΔG
  more positive (less feasible).

Combining with the sign of ΔH:

- ΔH negative, ΔS positive: both terms negative at every temperature; **always feasible**.
- ΔH positive, ΔS negative: both terms positive; **never feasible** at any temperature.
- ΔH negative, ΔS negative: feasible at **low** temperature, until TΔS outweighs ΔH.
- ΔH positive, ΔS positive: feasible only at **high** temperature, once TΔS outweighs ΔH.

Only the last two have a changeover temperature, T = ΔH ÷ ΔS, which is always positive because
ΔH and ΔS share a sign.

A plot of ΔG against T is a straight line with intercept ΔH (at T = 0) and gradient −ΔS. A line
crossing the T axis shows the changeover temperature; a line that never crosses it belongs to
one of the "always" or "never" cases.

## The assumption behind changeover temperatures

Calculating a changeover temperature from ΔH⦵ and ΔS⦵ measured at 298 K assumes that **ΔH and
ΔS do not change significantly with temperature**. This is approximately true over moderate
ranges, so the answer is an estimate. If a question asks why a calculated decomposition
temperature differs from the observed one, this assumption, or a slow rate, is the expected
point.

## Phase changes: ΔG = 0 at the transition temperature

At a melting point or boiling point under standard pressure, the two phases are in
equilibrium and ΔG = 0, so ΔS = ΔH ÷ T. For example, if the enthalpy change of vaporisation of
water at 373 K is taken as +40.7 kJ mol⁻¹, ΔS = 40 700 ÷ 373 = +109 J K⁻¹ mol⁻¹. This lets you
find an entropy change from enthalpy data alone.

## Common mistakes

- **Not converting units.** Substituting −198.8 directly with ΔH in kJ gives an answer about
  1000 times too large in the TΔS term.
- **Using °C.** T must be in kelvin; add 273 to a Celsius temperature.
- **Sign errors with −TΔS.** When ΔS is negative, −TΔS is positive. Put negative values in
  brackets.
- **Saying ΔG = 0 means "the reaction stops".** It marks the changeover; the system is at
  equilibrium under standard conditions.
- **Predicting that a feasible reaction will be seen.** Mention activation energy if a
  feasible reaction is not observed.
- **Giving T = ΔH ÷ ΔS as negative.** A negative answer means you have mixed signs or one
  of the cases with no changeover.

## Exam technique

- **State** the Gibbs equation: write ΔG = ΔH − TΔS with the symbols defined if asked.
- **Calculate**: show the unit conversion, the substitution with brackets, and the final value
  with sign and units. For a temperature, give the answer in K, rounded sensibly.
- **State whether feasible**: refer explicitly to the sign of ΔG ("ΔG is negative, so the
  reaction is feasible").
- **Predict the effect of temperature**: describe what happens to the −TΔS term as T rises,
  then conclude whether ΔG becomes more or less negative.
- **Explain** a discrepancy: use kinetics (activation energy) or the assumption that ΔH and ΔS
  are constant.

## Where next

Condense this page with the
[Gibbs free energy change revision notes](/resources/cambridge-a-level-chemistry-9701-a-gibbs-free-energy-change-revision-notes/)
and test it with the
[Gibbs free energy change practice questions](/resources/cambridge-a-level-chemistry-9701-a-gibbs-free-energy-change-practice/).
For the entropy values used here, see the
[Entropy change study guide](/resources/cambridge-a-level-chemistry-9701-a-entropy-change/).

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series.
Always check the current syllabus for your examination year.
