---
title: "OxfordAQA A-Level Chemistry: Rate equations (9620)"
seoTitle: "OxfordAQA A-Level Chemistry Rate Equations Guide (9620)"
resourceType: "study-guides"
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
description: "Study guide for OxfordAQA International A-level Chemistry 9620 section 3.1.11: orders, the rate constant, Arrhenius plots and Required practical 8."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches **section 3.1.11 Rate equations** of the OxfordAQA International AS and
A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June
2020 onwards: 3.1.11.1, 3.1.11.2 and Required practical 8. This is International A2 material, meaning
**International A-level only**. Its written exam is Unit 4 (Organic 2 and Physical 2), and the synoptic Unit 5 (Practical and synoptic) may test any topic.

Pair it with the [revision notes](/resources/oxfordaqa-a-level-chemistry-rate-equations-revision-notes/)
and [practice questions](/resources/oxfordaqa-a-level-chemistry-rate-equations-practice/). Collision
theory is in the [kinetics study guide (3.1.6)](/resources/oxfordaqa-a-level-chemistry-kinetics/). See
also the [course hub](/boards/oxfordaqa/a-level/chemistry/), the
[printable checklist](/checklists/oxfordaqa/a-level/chemistry/) and the free
[10-minute diagnostics](/diagnostics/).

## What this unit covers

All rows are International A-level only.

| Spec ref | Skills |
|---|---|
| 3.1.11.1 | Define order and rate constant; rate equation calculations |
| 3.1.11.1 | Explain how temperature changes k; calculate with k = Ae^(–Ea/RT) |
| 3.1.11.1 | Plot ln k against 1/T from data; slope –Ea/R |
| 3.1.11.2 | Rates from concentration–time graphs; initial rates from early data |
| 3.1.11.2 | Orders (0, 1 or 2) from rate–concentration data or graphs; build the rate equation |
| 3.1.11.2 | Link orders to the rate-determining (rate-limiting) step |
| Required practical 8 | Initial rate method and continuous monitoring method |

The specification states that the Arrhenius equations and the gas constant, R, will be given when
required. Use R = 8.31 J K⁻¹ mol⁻¹.

## 3.1.11.1 The rate equation

```
Rate = k[A]^m [B]^n
```

Concentrations in square brackets are in mol dm⁻³, and the rate has units of mol dm⁻³ s⁻¹.

- **Order of reaction (for one reactant)**: the exponent on that reactant's concentration term in the
  rate equation. m is the order with respect to A; n is the order with respect to B.
- **Overall order**: m + n.
- **Rate constant, k**: the proportionality constant that links rate to the concentration terms. Its
  value is fixed for one reaction at one temperature.

Orders here are only **0, 1 or 2**. An order-0 reactant drops out of the rate equation, since
[A]⁰ = 1. Orders come from experiment, never from the balanced equation.

### Working out the units of k

Make k the subject, then substitute units and cancel. For Rate = k[A]²[B]:

```
k = Rate ÷ ([A]²[B])
units = (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹
```

Overall order 0 gives mol dm⁻³ s⁻¹, order 1 gives s⁻¹, order 2 gives mol⁻¹ dm³ s⁻¹.

**Worked example 1 (rate and a volume change).** Nitrogen monoxide reacts with hydrogen:
2NO(g) + 2H₂(g) → N₂(g) + 2H₂O(g). The rate equation found by experiment is Rate = k[NO]²[H₂]. At one
temperature, take k = 640 mol⁻² dm⁶ s⁻¹ (an illustrative value).

(a) Calculate the rate when [NO] = 2.5 × 10⁻³ mol dm⁻³ and [H₂] = 4.0 × 10⁻³ mol dm⁻³.

```
Rate = 640 × (2.5 × 10⁻³)² × 4.0 × 10⁻³ = 1.6 × 10⁻⁵ mol dm⁻³ s⁻¹
```

(b) The gas mixture is squeezed into half its volume at the same temperature. Find the new rate.

```
Both concentrations double: factor = 2² × 2 = 8
New rate = 8 × 1.6 × 10⁻⁵ = 1.28 × 10⁻⁴ mol dm⁻³ s⁻¹
```

k is unchanged, because the temperature is unchanged.

## 3.1.11.1 Temperature and the rate constant

Altering a concentration alters the rate while leaving k untouched. **Raising the temperature increases k**, so the rate rises at
the same concentrations. The reason comes from 3.1.6: at a higher temperature a much larger fraction of
collisions reach at least the activation energy, so more of them lead to reaction each second. A small temperature rise can produce a large increase in k.

The specification links k and T with the **Arrhenius equation**:

```
k = Ae^(–Ea/RT)
```

A is the **Arrhenius constant** (same units as k), Ea the activation energy in **J mol⁻¹** and T the
temperature in **K**.

**Worked example 2 (k at a temperature, then T for a target k).** A first-order reaction has
A = 5.0 × 10¹³ s⁻¹ and Ea = 105 kJ mol⁻¹.

(a) Calculate k at 330 K.

```
Ea/RT = 105 000 ÷ (8.31 × 330) = 38.29
k = 5.0 × 10¹³ × e^(–38.29) = 1.18 × 10⁻³ s⁻¹
```

(b) Calculate the temperature at which k = 1.0 × 10⁻² s⁻¹.

```
Rearrange: ln(A/k) = Ea/RT, so T = Ea ÷ (R × ln(A/k))
ln(5.0 × 10¹³ ÷ 1.0 × 10⁻²) = ln(5.0 × 10¹⁵) = 36.15
T = 105 000 ÷ (8.31 × 36.15) = 350 K
```

### The straight-line form

Taking natural logs gives:

```
ln k = –Ea/RT + ln A
```

Compared with y = mx + c, a plot of **ln k (y) against 1/T (x)** has **slope –Ea/R** and intercept ln A.

**Worked example 3 (Ea and A from experimental data).** A second-order reaction gave these rate
constants.

| T / K | 295 | 305 | 315 | 325 | 335 |
|---|---|---|---|---|---|
| k / mol⁻¹ dm³ s⁻¹ | 0.00287 | 0.00713 | 0.0167 | 0.0372 | 0.0789 |

Step 1: find 1/T and ln k for each point. The end points:

```
295 K: 1/T = 3.3898 × 10⁻³ K⁻¹, ln k = –5.853
335 K: 1/T = 2.9851 × 10⁻³ K⁻¹, ln k = –2.540
```

Step 2: plot all five points (a straight line) and take the gradient from points far apart:

```
gradient = (–2.540 – (–5.853)) ÷ (2.9851 × 10⁻³ – 3.3898 × 10⁻³)
         = 3.313 ÷ (–4.047 × 10⁻⁴) = –8.187 × 10³ K
```

Step 3: Ea = –gradient × R = 8.187 × 10³ × 8.31 = 6.80 × 10⁴ J mol⁻¹ = **68.0 kJ mol⁻¹**.

Step 4: the intercept is far off the plotted region, so use one point on the line (315 K):

```
ln A = ln k + Ea/RT = –4.092 + 68 000 ÷ (8.31 × 315) = 21.89
A = e^21.89 = 3.2 × 10⁹ mol⁻¹ dm³ s⁻¹
```

## 3.1.11.2 Rates from concentration–time graphs

To find the rate at a chosen time, measure how steep the **concentration–time graph** is at that time. On a
curve, draw a tangent and measure its gradient (negative for a reactant).

**Worked example 4 (tangent).** A tangent drawn at t = 90 s on the curve for a reactant passes through
(0 s, 0.284 mol dm⁻³) and (240 s, 0.044 mol dm⁻³).

```
gradient = (0.044 – 0.284) ÷ (240 – 0) = –1.0 × 10⁻³ mol dm⁻³ s⁻¹
rate at 90 s = 1.0 × 10⁻³ mol dm⁻³ s⁻¹
```

### Initial rate from early data

Near the start the curve is almost straight, so readings over a short early time give the
**initial rate** directly.

**Worked example 5.** In the first 15 s of a run, [V] was measured every 5 s.

| t / s | 0 | 5 | 10 | 15 |
|---|---|---|---|---|
| [V] / mol dm⁻³ | 0.2000 | 0.1964 | 0.1928 | 0.1892 |

Each 5 s interval shows the same fall (0.0036 mol dm⁻³), so the line is straight here.

```
initial rate = (0.2000 – 0.1892) ÷ 15 = 7.2 × 10⁻⁴ mol dm⁻³ s⁻¹
```

## 3.1.11.2 Deducing orders

### From rate–concentration data or graphs

| Order | Plot of rate against [A] | Test on the data |
|---|---|---|
| 0 | horizontal line | rate stays the same |
| 1 | straight line through the origin | rate ÷ [A] is constant |
| 2 | curve rising more and more steeply, through the origin | rate ÷ [A]² is constant (rate against [A]² is a straight line) |

**Worked example 6.** Nitrogen dioxide decomposes: 2NO₂(g) → 2NO(g) + O₂(g). Rates at one temperature
(illustrative values):

| [NO₂] / mol dm⁻³ | 0.0040 | 0.0080 | 0.0120 | 0.0160 |
|---|---|---|---|---|
| Rate / mol dm⁻³ s⁻¹ | 1.20 × 10⁻⁵ | 4.80 × 10⁻⁵ | 1.08 × 10⁻⁴ | 1.92 × 10⁻⁴ |

Rate ÷ [NO₂] rises, so it is not first order. Rate ÷ [NO₂]² is 0.75 every time, so it is
**second order**: Rate = k[NO₂]², with k = **0.75 mol⁻¹ dm³ s⁻¹**. This
matches the rate equation found by experiment for this reaction.

### From initial-rate experiments

Pick two experiments in which one concentration changes. If no pair isolates a reactant, allow for the
reactant whose order you already know.

**Worked example 7.** Initial rates for L + 2T + Z → products at constant temperature:

| Exp | [L] / mol dm⁻³ | [T] / mol dm⁻³ | [Z] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|---|
| 1 | 0.012 | 0.050 | 0.020 | 4.32 × 10⁻⁶ |
| 2 | 0.018 | 0.050 | 0.020 | 9.72 × 10⁻⁶ |
| 3 | 0.006 | 0.050 | 0.060 | 3.24 × 10⁻⁶ |
| 4 | 0.012 | 0.200 | 0.020 | 4.32 × 10⁻⁶ |

- L, Exps 1 and 2: [L] × 1.5, rate × 2.25 = 1.5², so **second order** in L.
- T, Exps 1 and 4: [T] × 4, rate unchanged, so **zero order** in T.
- Z, Exps 1 and 3: [L] × 0.5 alone would make the rate × 0.25. The rate actually changes × 0.75. The
  extra × 3 matches [Z] × 3, so **first order** in Z.
- Rate equation: **Rate = k[L]²[Z]**, overall order 3.
- k from Exp 1: k = 4.32 × 10⁻⁶ ÷ (0.012² × 0.020) = **1.5 mol⁻² dm⁶ s⁻¹**. Check with Exp 2:
  1.5 × 0.018² × 0.020 = 9.72 × 10⁻⁶. It agrees.

## 3.1.11.2 What orders reveal about the mechanism

When a reaction takes place in several steps, the slowest one sets the overall rate. It is called the
**rate-determining (rate-limiting) step**.

- Every reactant in the rate equation is involved in the slow step or a step before it. Its order equals the number of its particles used up to the end of that step.
- A zero-order reactant only reacts **after** the rate-determining step.
- A proposed mechanism needs two checks: its slow step must match the orders, and the steps together
  must sum to the overall equation.

**Worked example 8.** For 2NO + 2H₂ → N₂ + 2H₂O, Rate = k[NO]²[H₂]. Test this proposed mechanism.

```
Step 1 (slow): 2NO + H₂ → N₂O + H₂O
Step 2 (fast): N₂O + H₂ → N₂ + H₂O
```

The slow step uses two NO and one H₂, which matches orders of 2 and 1. Adding the steps and cancelling
N₂O gives 2NO + 2H₂ → N₂ + 2H₂O. The mechanism is consistent. A slow step of NO + H₂ → products
would give Rate = k[NO][H₂], so it would not fit. In Worked example 7, T (zero order) must react after the slow step.

## Required practical 8: measuring rate

Required practical 8 asks you to measure rate in two ways: with an **initial rate method** and with a
**continuous monitoring method**. The written papers test the procedures, require an evaluation of the techniques and
may ask you to interpret specimen results.

**Initial rate method.** Repeat the reaction, changing one starting concentration each time. In a clock
reaction, a small fixed amount of a second substance removes the product until it runs out; then a
sudden colour change appears. Time each run to that change.

- Keep the total volume fixed with water, so concentration ∝ volume.
- The same small amount of reaction has happened at each colour change, so **initial rate ∝ 1/t**.
- Keep temperature and the other concentrations fixed. Plot 1/t against concentration.

**Continuous monitoring method.** Follow one run over time: gas volume, mass loss, colorimeter
absorbance, or samples withdrawn, quenched and titrated. Convert readings to concentration, plot against
time and draw tangents. Evaluate timing judgements (worst for short times), temperature drift and
tangent drawing.

## Common errors

- Substituting Ea in kJ mol⁻¹ (it must be J mol⁻¹) or a Celsius temperature.
- Giving Ea a negative sign: Ea = –gradient × R.
- Saying that a higher concentration increases k.

## Next steps

Use the [revision notes](/resources/oxfordaqa-a-level-chemistry-rate-equations-revision-notes/), then the
[practice questions](/resources/oxfordaqa-a-level-chemistry-rate-equations-practice/).

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)* specification, Version 5.3, for International
AS and A-level exams May/June 2020 onwards: section 3.1.11 Rate equations (3.1.11.1 Rate equations and
3.1.11.2 Determination of rate equation, International A2), with Required practical 8.
