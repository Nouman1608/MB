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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--05-rate-vs-concentration.webp" width="900" height="1000" alt="A graph of rate against [A] shows order 0 as a horizontal line, order 1 as a straight line through the origin and order 2 as an upward curve through the origin. Doubling [A] multiplies the rate by 1, 2 and 4 respectively." loading="lazy">
  <figcaption>The shape of the rate against concentration graph gives the order: horizontal, straight line or curve.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--03-concentration-pressure.webp" width="900" height="950" alt="Two equal boxes hold gas particles: 6 in the left (low concentration) and 18 in the right (three times as many). The crowded box has more collisions per second. The energy of the particles is unchanged, so the fraction able to react is the same, but the rate rises." loading="lazy">
  <figcaption>Raising concentration or gas pressure increases collision frequency, not the fraction of collisions that succeed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--06-tangent-rate.webp" width="900" height="1030" alt="A concentration-time curve for a reactant falls and flattens. A tangent at t = 0 is steep and its gradient is the initial rate. A tangent later on is shallower, so the rate is lower. Rate is the size of the gradient, quoted as positive." loading="lazy">
  <figcaption>The rate at any time is the size of the tangent gradient, and the gradient at t = 0 is the initial rate.</figcaption>
</figure>


## Temperature and k

- Higher temperature → **larger k** → faster rate at the same concentrations.
- Changing a concentration changes the rate, **not** k.
- Why: a larger fraction of collisions have energy equal to or greater than Ea, so more collisions succeed
  per second. The effect is large for a small temperature change.
- In calculations, rearrange k = Ae^(–Ea/RT) as needed: ln(A/k) = Ea/RT.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--02-boltzmann-temperature.webp" width="900" height="960" alt="Two skewed curves of number of molecules against energy start at the origin. The hotter curve has a lower peak further right, a longer tail, and crosses the cooler curve once to the left of Ea. The shaded area beyond Ea is much bigger for the hotter curve, while both curves enclose the same total area." loading="lazy">
  <figcaption>A hotter gas has a lower, wider curve with the same area and many more molecules at or above Ea.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--04-catalyst.webp" width="900" height="1130" alt="Top: an enthalpy profile with the same reactant and product levels, with a high peak without a catalyst (Ea 180) and a lower peak with one (Ea 105), so delta H is unchanged. Bottom: a single Maxwell-Boltzmann curve with two Ea lines; the shaded strip between them shows extra molecules that can react by the catalysed route." loading="lazy">
  <figcaption>A catalyst offers a lower-Ea route, so more molecules can react at the same temperature, and delta H does not change.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--08-arrhenius-plot.webp" width="900" height="1010" alt="Four points at 300 to 360 K lie on a downward straight line of ln k against 1/T. The gradient triangle gives minus Ea over R. Using R = 8.31 the gradient gives Ea = 62.0 kJ per mol, from ln k = -Ea/R times 1/T plus ln A." loading="lazy">
  <figcaption>The gradient of ln k against 1/T is -Ea/R, here giving Ea = 62.0 kJ per mol.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--09-rate-determining-step.webp" width="900" height="1170" alt="A two-hill enthalpy profile for 2P + Q going to P2Q. The first hill (P + Q forming PQ) is higher, so it is the slow, rate-determining step; the second (PQ + P forming P2Q) is lower and fast. Because the slow step has one P and one Q, Rate = k[P][Q]." loading="lazy">
  <figcaption>The slowest step sets the rate, and the orders show how many particles of each reactant take part in it.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--07-half-life.webp" width="900" height="1060" alt="Two concentration-time graphs. For a first-order reaction each halving (0.80 to 0.40 to 0.20 to 0.10) takes the same 60 s, so k = ln 2 divided by the half-life. For a zero-order reaction the line is straight and successive halvings take 100, 50 and 25 s, with k equal to minus the gradient." loading="lazy">
  <figcaption>A constant half-life shows first order; in a zero-order reaction successive half-lives shorten.</figcaption>
</figure>


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

## Frequently asked questions

**What are the units of the rate constant for a third-order reaction?**
For an overall order of 3, such as Rate = k[V][L]², k has units of mol⁻² dm⁶ s⁻¹. Work out the units each time by making k the subject and cancelling.

**What is the rate-determining step?**
The rate-determining (rate-limiting) step is the slowest step in a multi-step mechanism. Every reactant in the rate equation takes part in that step or in a step before it.

**Why is 1/t used as a measure of rate in a clock reaction?**
Each colour change marks the same small, fixed amount of reaction, so a shorter time means a faster rate. If the extent of reaction is small enough, 1/t is proportional to the initial rate.

**What are the two methods in Required practical 8?**
Required practical 8 measures rate using an initial rate method, such as a clock reaction with several runs, and a continuous monitoring method, which follows one run over time by gas volume, mass, absorbance or titration of quenched samples.

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)* specification, Version 5.3, for International
AS and A-level exams May/June 2020 onwards: section 3.1.11 Rate equations (3.1.11.1 Rate equations and
3.1.11.2 Determination of rate equation, International A2), with Required practical 8.
