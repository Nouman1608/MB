---
title: "AQA A-Level Chemistry: Rate equations (7405) -- Revision Notes"
seoTitle: "AQA A-Level Chemistry Rate Equations Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Rate equations"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "rate-equations-7405"
description: "Condensed AQA A-Level Chemistry rate equations notes: definitions, units of k, Arrhenius, order graphs, mechanisms, RP7 and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense section **3.1.9 Rate equations** of the AQA AS and A-level Chemistry specification
(7404/7405), version 1.1, 1 December 2015, for AS and A-level exams from June 2016 onwards. They cover
3.1.9.1, 3.1.9.2 and Required practical 7. Everything here is **A-level only**. The specification places
3.1.9 on A-level Paper 2, and Paper 3 can test any content.

For full explanations and worked examples, use the
[rate equations study guide](/resources/aqa-a-level-chemistry-rate-equations/). Test yourself with the
[rate equations practice questions](/resources/aqa-a-level-chemistry-rate-equations-practice/). Collision
theory and the Maxwell–Boltzmann distribution are in the
[kinetics revision notes](/resources/aqa-a-level-chemistry-kinetics-revision-notes/). The course hub is
[AQA A-Level Chemistry](/boards/aqa/a-level/chemistry/), and the
[printable checklist](/checklists/aqa/a-level/chemistry/) lists every specification point.

## Definitions to learn

- **Rate equation**: Rate = k[A]^m [B]^n, an experimentally determined relationship.
- **Order of reaction with respect to a reactant**: the power to which its concentration is raised in the
  rate equation (m for A, n for B). Orders here are 0, 1 or 2.
- **Overall order**: the sum of the orders, m + n.
- **Rate constant, k**: the constant of proportionality in the rate equation. It changes only with
  temperature (for a given reaction).
- **Rate-determining step**: the slowest step in a mechanism; it limits the overall rate.
- **Initial rate**: the rate at t = 0, the gradient of the tangent to a concentration–time curve at the start.

## 3.1.9.1 Key equations

| Equation | Use it to | Watch out for |
|---|---|---|
| Rate = k[A]^m [B]^n | find rate, k or a concentration | square second-order concentrations |
| k = A e^(−Ea/RT) | find k, A, Ea or T | Ea in J mol⁻¹, T in K |
| ln k = −Ea/(RT) + ln A | plot ln k (y) against 1/T (x) | slope = −Ea/R, intercept = ln A |

R = 8.31 J K⁻¹ mol⁻¹. The specification states that these equations and R will be given when required.
A has the same units as k.

## Units of k: method in steps

1. Write k = Rate ÷ (concentration terms).
2. Put in mol dm⁻³ s⁻¹ on top and (mol dm⁻³) raised to the overall order underneath.
3. Cancel, and write negative powers.

| Overall order | Units of k |
|---|---|
| 0 | mol dm⁻³ s⁻¹ |
| 1 | s⁻¹ |
| 2 | mol⁻¹ dm³ s⁻¹ |
| 3 | mol⁻² dm⁶ s⁻¹ |

Worked reminder: Rate = k[A]²[B]. Overall order 3, so k = (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)³ =
mol⁻² dm⁶ s⁻¹.

## Effect of concentration changes

Multiply each concentration factor raised to its order.

| Order | ×2 conc | ×3 conc | ×½ conc |
|---|---|---|---|
| 0 | ×1 | ×1 | ×1 |
| 1 | ×2 | ×3 | ×½ |
| 2 | ×4 | ×9 | ×¼ |

Worked reminder: Rate = k[A][B]². Halve [A] and triple [B]: factor = ½ × 3² = 4.5.

## Temperature and k

- Raising the temperature **increases k**; lowering it decreases k.
- Concentration changes the rate but **never k**.
- Reason (link to 3.1.5): at a higher temperature a much larger proportion of collisions have energy at or
  above Ea, so k and the rate rise sharply for a small temperature rise.

## Method in steps: Ea from a graph

1. Convert each T to 1/T (keep 4 s.f.) and each k to ln k.
2. Plot ln k (y) against 1/T (x). Draw the best-fit straight line.
3. Gradient from two points far apart on the line (not data points off the line).
4. Ea = −gradient × R. Answer in J mol⁻¹; divide by 1000 for kJ mol⁻¹.
5. If you need A: ln A = ln k + Ea/RT for any point on the line, then A = e^(ln A).

## 3.1.9.2 Reading graphs

| Graph | Zero order | First order | Second order |
|---|---|---|---|
| [A] against time | straight line, falling | curve, flattening | curve, flattening |
| Rate against [A] | horizontal line | straight line through origin | upward curve through origin |
| Rate against [A]² | — | — | straight line through origin |

- Rate at time t = size of the gradient of the tangent to the concentration–time curve at t.
- Zero order: Rate = k, so **k = −gradient** of the concentration–time line. Units mol dm⁻³ s⁻¹.
- Tangents: draw them long and read two points far apart.

## Method in steps: orders from initial rates

1. Find two experiments where only one concentration changes.
2. Find the factor change in that concentration and the factor change in rate.
3. Factor 1 → order 0; same factor → order 1; factor squared → order 2.
4. If no pair isolates a reactant, divide the rate change by the effect of the reactant you already know.
5. Write the rate equation with only reactants of order 1 or 2.
6. Rearrange for k using any one experiment; work out the units; check with a second experiment.

## Orders and the rate-determining step

- Species in the rate equation are involved in the rate-determining step (or a step before it).
- The order tells you how many of that particle are involved up to and including that step.
- Zero-order reactants react **after** the rate-determining step.
- A valid mechanism must fit the rate equation **and** its steps must add up to the overall equation.

## Required practical 7

**Initial rate (clock) method**
- Iodine clock: iodine formed reacts with a small fixed amount of thiosulfate; when that runs out, iodine
  turns starch blue-black.
- Vary the volume of one reactant; add water so total volume stays constant.
- Same amount of product forms each run, so **rate ∝ 1/t**.
- Keep temperature and all other concentrations constant.

**Continuous monitoring method**
- One run, followed over time: gas volume, mass loss, colorimeter readings, or samples quenched and titrated.
- Plot concentration against time; tangents give rates at several concentrations.

Apparatus and techniques: AT a, k and l. Wear eye protection and handle chemicals by their hazards.

## Must-know distinctions

- **Rate vs rate constant**: rate changes as concentrations fall; k stays fixed at a given temperature.
- **Order vs coefficient**: orders come from experiment, coefficients from the balanced equation.
- **Initial rate vs mean rate**: initial rate is a tangent gradient at t = 0, not a change over an interval.
- **ln vs log**: the Arrhenius straight line uses natural logs (ln).
- **Zero order vs not reacting**: a zero-order reactant is used up; it just does not affect the rate.

## Quick self-test

1. Give the units of k for a reaction with overall order 3.
2. Rate = k[A]². By what factor does the rate change when [A] is tripled?
3. Describe the graph of rate against concentration for a first-order reactant.
4. A plot of ln k against 1/T has gradient −5.5 × 10³ K. Calculate Ea in kJ mol⁻¹ (R = 8.31 J K⁻¹ mol⁻¹).
5. Rate = k[A][B]. Rate = 3.0 × 10⁻³ mol dm⁻³ s⁻¹ when [A] = 0.10 and [B] = 0.25 mol dm⁻³. Calculate k
   with units.
6. A reactant is zero order. Is it involved in the rate-determining step?
7. A zero-order concentration–time line has gradient −2.5 × 10⁻⁴ mol dm⁻³ s⁻¹. State k.
8. State the effect of raising the temperature on k.
9. In k = Ae^(−Ea/RT), what units must Ea and T be in?
10. Rate = k[X][Y]². [X] is halved and [Y] is doubled. Find the rate factor.
11. A = 1.0 × 10¹⁰ s⁻¹, Ea = 50 kJ mol⁻¹, T = 300 K. Calculate k (R = 8.31 J K⁻¹ mol⁻¹).

### Answers

1. mol⁻² dm⁶ s⁻¹
2. ×9 (3²)
3. A straight line through the origin.
4. Ea = 5.5 × 10³ × 8.31 = 4.57 × 10⁴ J mol⁻¹ = **45.7 kJ mol⁻¹**
5. k = 3.0 × 10⁻³ ÷ (0.10 × 0.25) = **0.12 mol⁻¹ dm³ s⁻¹**
6. No. It reacts in a step after the rate-determining step.
7. k = 2.5 × 10⁻⁴ mol dm⁻³ s⁻¹
8. k increases.
9. Ea in J mol⁻¹ and T in K.
10. ½ × 2² = **×2**
11. k = 1.0 × 10¹⁰ × e^(−50 000 / (8.31 × 300)) = **19.5 s⁻¹**

## Where marks are usually lost

- Taking orders from the balanced equation instead of the data.
- Giving units of k from memory and getting them wrong for overall order 3.
- Leaving Ea in kJ mol⁻¹ in the Arrhenius equation, or using °C.
- Dropping the minus sign so that Ea comes out negative.
- Using log₁₀ instead of ln when plotting.
- Taking a gradient between two data points that lie off the best-fit line.
- Quoting a negative rate from a falling concentration–time gradient.
- Saying a temperature rise increases rate "because k increases" without the energy explanation, when the
  question asks you to explain.
- Choosing a mechanism whose slow step fits but whose steps do not add up to the overall equation.
- Forgetting to keep total volume constant in a clock-reaction plan.

## Next steps

Work through the [practice questions](/resources/aqa-a-level-chemistry-rate-equations-practice/), and go back
to the [study guide](/resources/aqa-a-level-chemistry-rate-equations/) for any step that felt shaky. The free
10-minute [diagnostics](/diagnostics/) show which topics to revise next.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), version 1.1, 1 December 2015, for AS and A-level
exams June 2016 onwards: section 3.1.9 Rate equations (3.1.9.1 and 3.1.9.2, A-level only), with Required
practical 7.
