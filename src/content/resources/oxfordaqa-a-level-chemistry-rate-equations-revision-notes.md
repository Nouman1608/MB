---
title: "OxfordAQA A-Level Chemistry: Rate equations (9620) -- Revision Notes"
seoTitle: "OxfordAQA A-Level Chemistry Rate Equations Notes (9620)"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Rate equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-rate-equations"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-rate-equations"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-11-1"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-rate-equations"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-11-2"
description: "Revision notes for OxfordAQA A-level Chemistry 9620 rate equations (3.1.11): orders, units of k, Arrhenius, mechanisms, practical 8 and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **section 3.1.11 Rate equations** of the OxfordAQA International AS and A-level
Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020
onwards. They cover 3.1.11.1 Rate equations, 3.1.11.2 Determination of rate equation and Required
practical 8. Section 3.1.11 belongs to International A2, so it is **International A-level only**. You meet it in the Unit 4 paper (Organic 2 and Physical 2), and the Unit 5 paper (Practical and synoptic) may test any topic.

Detailed teaching and longer examples are in the
[rate equations study guide](/resources/oxfordaqa-a-level-chemistry-rate-equations/). Then test yourself
with the [rate equations practice questions](/resources/oxfordaqa-a-level-chemistry-rate-equations-practice/).
The energy-distribution ideas are in the
[kinetics revision notes (3.1.6)](/resources/oxfordaqa-a-level-chemistry-kinetics-revision-notes/). The
[course hub](/boards/oxfordaqa/a-level/chemistry/) links every topic, the
[printable checklist](/checklists/oxfordaqa/a-level/chemistry/) lets you tick off each point, and the
free [10-minute diagnostics](/diagnostics/) point you at weak areas.

## Definitions

- **Rate equation**: Rate = k[A]^m [B]^n. It is found by experiment.
- **Order with respect to a reactant**: the power of that reactant's concentration in the rate equation.
  In 9620 each order is 0, 1 or 2.
- **Overall order**: the sum of all the individual orders.
- **Rate constant, k**: the number linking rate to the concentration terms. It has one value for a
  reaction at each temperature.
- **Rate-determining (rate-limiting) step**: the slowest step of a mechanism.
- **Initial rate**: the rate at the moment the reactants are mixed (t = 0).

## 3.1.11.1 Equations at a glance

| Equation | Tells you | Trap |
|---|---|---|
| Rate = k[A]^m [B]^n | how rate depends on concentration | orders are not the balancing numbers |
| k = Ae^(–Ea/RT) | how k depends on temperature | J mol⁻¹ for Ea, kelvin for T |
| ln k = –Ea/RT + ln A | the straight-line form for a graph | y = ln k, x = 1/T, slope = –Ea/R |

According to the specification, you are given these equations and R when a question needs them.
Use R = 8.31 J K⁻¹ mol⁻¹. A, the Arrhenius constant, carries the units of k.

## Finding the units of k

1. Rearrange: k = rate ÷ (the concentration terms).
2. Top: mol dm⁻³ s⁻¹. Bottom: (mol dm⁻³) to the power of the overall order.
3. Cancel and write any leftover units with negative powers.

| Overall order | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Units of k | mol dm⁻³ s⁻¹ | s⁻¹ | mol⁻¹ dm³ s⁻¹ | mol⁻² dm⁶ s⁻¹ |

Small reminder: Rate = k[V][L]² is overall order 3, so k is in mol⁻² dm⁶ s⁻¹.

## Concentration factors

Raise each concentration factor to its order, then multiply the results together.

| Order | conc × 1.5 | conc × 0.5 | conc × 4 |
|---|---|---|---|
| 0 | rate × 1 | rate × 1 | rate × 1 |
| 1 | rate × 1.5 | rate × 0.5 | rate × 4 |
| 2 | rate × 2.25 | rate × 0.25 | rate × 16 |

Small reminder: Rate = k[V]²[L]. Halve [V] and triple [L]: factor = 0.5² × 3 = 0.75.

## Temperature and k

- Higher temperature → **larger k** → faster rate at the same concentrations.
- Changing a concentration changes the rate, **not** k.
- Why: a larger fraction of collisions have energy equal to or greater than Ea, so more collisions succeed
  per second. The effect is large for a small temperature change.
- In calculations, rearrange k = Ae^(–Ea/RT) as needed: ln(A/k) = Ea/RT.

## Method: Ea (and A) from data

1. Turn every T into 1/T (keep at least five significant figures) and every k into ln k.
2. Plot ln k on the y-axis, 1/T on the x-axis; draw the best straight line.
3. Read two points on the line that are far apart and find the gradient.
4. Ea = –gradient × R (J mol⁻¹). Divide by 1000 for kJ mol⁻¹.
5. For A: ln A = ln k + Ea/RT at any point on the line; A = e^(ln A).

Small reminder: line through (3.50 × 10⁻³, –6.20) and (3.10 × 10⁻³, –3.10). Gradient =
3.10 ÷ (–4.0 × 10⁻⁴) = –7.75 × 10³ K, so Ea = 7.75 × 10³ × 8.31 = 6.44 × 10⁴ J mol⁻¹ = 64.4 kJ mol⁻¹.

## 3.1.11.2 Graph shapes

| Graph | Order 0 | Order 1 | Order 2 |
|---|---|---|---|
| Concentration against time | straight, sloping down | curve, levelling off | curve, levelling off (long tail) |
| Rate against concentration | flat line | straight line through origin | curve through origin, getting steeper |
| Rate against concentration² | not used | not used | straight line through origin |

- To get the rate at time t, draw a tangent to the concentration–time curve and take its gradient,
  ignoring the minus sign.
- Initial rate = tangent gradient at t = 0, or the steady fall in early readings ÷ time taken.
- Order 0: Rate = k, so k = size of the concentration–time gradient.

## Method: orders from initial rates

1. Choose two runs where only one concentration changes.
2. Compare the concentration factor with the rate factor.
3. Same factor → order 1. Factor squared → order 2. Rate unchanged → order 0.
4. If two concentrations change, divide out the reactant you have already solved.
5. Write the rate equation, leaving out order-0 reactants.
6. Calculate k from one run, work out its units, and check it against another run.

## Orders and the mechanism

- Every reactant in the rate equation reacts in the slow step or before it.
- The order of a reactant = how many of its particles take part up to and including that step.
- Order 0 → that reactant joins in **after** the slow step.
- Any mechanism you suggest must give the right rate equation **and** add up to the overall equation.

## Required practical 8

**Initial rate method**
- Several runs, each changing one starting concentration; temperature and everything else fixed.
- Keep the total volume the same by adding water.
- Clock reaction: time to a sudden colour change, when a fixed small amount of reaction has happened,
  so **rate ∝ 1/t**.

**Continuous monitoring method**
- One run, measured repeatedly: gas volume, mass, colorimeter absorbance, or quenched samples titrated.
- Plot concentration (or a proportional reading) against time; tangents give rates.

The written papers test the procedures and require an evaluation of the techniques. They may ask you to
interpret specimen results.

## Must-know distinctions

- **Rate vs k**: rate falls as reactants are used up; k stays the same unless the temperature changes.
- **Order vs stoichiometry**: an order is measured; a balancing number is not an order.
- **Initial rate vs average rate**: a tangent at t = 0 is not a change over a long interval.
- **ln vs log₁₀**: the straight-line Arrhenius form uses ln.
- **Order 0 vs no reaction**: a zero-order reactant is still consumed.

## Quick self-test

1. Give the units of k when Rate = k[L][T].
2. Rate = k[V]². [V] falls to 0.4 of its starting value. By what factor does the rate change?
3. Rate = k[L][Z]. [L] is multiplied by 5 and [Z] by 0.2. What happens to the rate?
4. A first-order reaction has k = 2.4 × 10⁻³ s⁻¹. Calculate the rate when the reactant concentration is
   0.35 mol dm⁻³.
5. A = 3.0 × 10¹¹ s⁻¹ and Ea = 88 kJ mol⁻¹. Calculate k at 340 K.
6. The graph of ln k (y) against 1/T (x) has a gradient of –1.12 × 10⁴ K. Calculate Ea in kJ mol⁻¹.
7. What is the y-intercept of a plot of ln k against 1/T?
8. Runs: [V] = 0.10, [L] = 0.10, rate 5.0 × 10⁻⁵; [V] = 0.30, [L] = 0.10, rate 1.5 × 10⁻⁴;
   [V] = 0.30, [L] = 0.20, rate 6.0 × 10⁻⁴ (concentrations in mol dm⁻³, rates in mol dm⁻³ s⁻¹).
   Write the rate equation and find k.
9. A plot of rate against [Z] is a flat line. What does that tell you about Z and the mechanism?
10. Does adding more of a reactant change k? Explain.

### Answers

1. Overall order 2, so mol⁻¹ dm³ s⁻¹.
2. 0.4² = **0.16** (the rate falls to 16 % of its value).
3. 5 × 0.2 = 1, so the rate is **unchanged**.
4. Rate = 2.4 × 10⁻³ × 0.35 = **8.4 × 10⁻⁴ mol dm⁻³ s⁻¹**.
5. Ea/RT = 88 000 ÷ (8.31 × 340) = 31.15; k = 3.0 × 10¹¹ × e^(–31.15) = **8.9 × 10⁻³ s⁻¹**.
6. Ea = 1.12 × 10⁴ × 8.31 = 9.31 × 10⁴ J mol⁻¹ = **93.1 kJ mol⁻¹**.
7. ln A.
8. V: ×3 gives rate ×3, first order. L: ×2 gives rate ×4, second order. **Rate = k[V][L]²**;
   k = 5.0 × 10⁻⁵ ÷ (0.10 × 0.10²) = **0.050 mol⁻² dm⁶ s⁻¹**.
9. Zero order in Z: Z is not in the rate equation and reacts after the rate-determining step.
10. No. k depends on temperature (and the reaction), not on concentration; the rate changes instead.

## Where marks are usually lost

- Writing an order equal to the balancing number in the equation.
- Getting the units of k wrong by not cancelling for the actual overall order.
- Putting Ea into the Arrhenius equation in kJ mol⁻¹, or T in °C.
- Plotting ln k against T rather than 1/T.
- Losing the sign: the gradient is negative, but Ea is positive.
- Choosing gradient points from scattered data instead of from the best-fit line.
- Treating 1/t as a time rather than as a measure of rate in a clock experiment.
- Claiming a zero-order reactant "does not react".
- Picking a mechanism with a suitable slow step that fails to balance to the overall equation.

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)* specification, Version 5.3, for International
AS and A-level exams May/June 2020 onwards: section 3.1.11 Rate equations (3.1.11.1 Rate equations and
3.1.11.2 Determination of rate equation, International A2), with Required practical 8.
