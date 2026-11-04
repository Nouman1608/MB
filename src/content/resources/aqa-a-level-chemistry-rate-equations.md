---
title: "AQA A-Level Chemistry: Rate equations (7405)"
seoTitle: "AQA A-Level Chemistry Rate Equations Study Guide (7405)"
resourceType: "study-guides"
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
description: "AQA A-Level Chemistry rate equations from scratch: orders, k and its units, the Arrhenius equation, initial rates, mechanisms and Required practical 7."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches section **3.1.9 Rate equations** of the AQA AS and A-level Chemistry specification
(7404/7405), version 1.2, July 2026, for exams from June 2016 onwards: 3.1.9.1, 3.1.9.2 and Required
practical 7. The whole section is **A-level only**. The specification places it on A-level Paper 2, and
Paper 3 can test any content.

For quick recall, use the [rate equations revision notes](/resources/aqa-a-level-chemistry-rate-equations-revision-notes/).
To test yourself, use the [rate equations practice questions](/resources/aqa-a-level-chemistry-rate-equations-practice/).
It builds on [kinetics (3.1.5)](/resources/aqa-a-level-chemistry-kinetics/). The course hub is
[AQA A-Level Chemistry](/boards/aqa/a-level/chemistry/), and the
[printable checklist](/checklists/aqa/a-level/chemistry/) lists every specification point.

## What this unit covers

| Spec point | What you must be able to do | Status |
|---|---|---|
| 3.1.9.1 | Define order and rate constant; calculate with the rate equation | A-level only |
| 3.1.9.1 | Effect of temperature on k; calculate with k = Ae^(−Ea/RT); plot ln k against 1/T (slope −Ea/R) | A-level only |
| 3.1.9.2 | Rates and initial rates from concentration–time graphs; k of a zero-order reaction from a gradient | A-level only |
| 3.1.9.2 | Orders (0, 1, 2) from rate–concentration data or graphs; derive the rate equation; link orders to the rate-determining step | A-level only |
| Required practical 7 | Measure rate by an initial rate method and a continuous monitoring method | A-level only |

## 3.1.9.1 The rate equation

For a reaction involving reactants A and B, the rate is linked to their concentrations by a **rate
equation**:

```
Rate = k[A]^m [B]^n
```

[A] is concentration in mol dm⁻³; rate is in mol dm⁻³ s⁻¹.

- **Order of reaction with respect to a reactant**: the power to which the concentration of that reactant is
  raised in the rate equation. Here, m is the order with respect to A and n the order with respect to B.
- **Overall order**: the sum of the individual orders, m + n.
- **Rate constant, k**: the constant of proportionality in the rate equation. It is fixed for a given
  reaction at a given temperature.

Orders are restricted to **0, 1 and 2**:

| Order with respect to A | Doubling [A] multiplies rate by | Tripling [A] multiplies rate by |
|---|---|---|
| 0 | 1 | 1 |
| 1 | 2 | 3 |
| 2 | 4 | 9 |

A zero-order reactant is still used up, but it does not appear in the rate equation ([A]⁰ = 1). Orders come
from experiments, not from the balanced equation.

### Units of k

Rearrange for k, put in the units and cancel.

| Overall order | Units of k |
|---|---|
| 0 | mol dm⁻³ s⁻¹ |
| 1 | s⁻¹ |
| 2 | mol⁻¹ dm³ s⁻¹ |
| 3 | mol⁻² dm⁶ s⁻¹ |

**Worked example 1 (rate from a rate equation).** For a reaction, Rate = k[A][B]² and
k = 3.6 mol⁻² dm⁶ s⁻¹ at 298 K. Calculate the rate when [A] = 0.050 mol dm⁻³ and [B] = 0.20 mol dm⁻³. Then
state the factor by which the rate changes if [A] is tripled and [B] is halved.

```
Rate = 3.6 × 0.050 × (0.20)²
     = 3.6 × 0.050 × 0.040
     = 7.2 × 10⁻³ mol dm⁻³ s⁻¹
Factor = 3 × (½)² = 3 × ¼ = 0.75
```

**Worked example 2 (k and its units).** For Rate = k[C]², the rate is 4.5 × 10⁻⁴ mol dm⁻³ s⁻¹ when
[C] = 0.030 mol dm⁻³. Calculate k.

```
k = Rate ÷ [C]² = 4.5 × 10⁻⁴ ÷ (0.030)² = 4.5 × 10⁻⁴ ÷ 9.0 × 10⁻⁴ = 0.50
units = (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)² = mol⁻¹ dm³ s⁻¹
k = 0.50 mol⁻¹ dm³ s⁻¹
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--05-rate-vs-concentration.webp" width="900" height="1000" alt="A graph of rate against [A] shows order 0 as a horizontal line, order 1 as a straight line through the origin and order 2 as an upward curve through the origin. Doubling [A] multiplies the rate by 1, 2 and 4 respectively." loading="lazy">
  <figcaption>The shape of the rate against concentration graph gives the order: horizontal, straight line or curve.</figcaption>
</figure>


## 3.1.9.1 Temperature and the rate constant

Concentration changes the rate but not k. **When the temperature rises, k increases**, so the rate rises at
the same concentrations. A small rise gives a large increase in k because a much larger proportion of
collisions have energy at or above the activation energy, Ea (see 3.1.5).

The **Arrhenius equation**:

```
k = A e^(−Ea/RT)
```

- A is a constant, the **Arrhenius constant**. It has the same units as k.
- Ea is the activation energy, in **J mol⁻¹** in this equation.
- R is the gas constant, 8.31 J K⁻¹ mol⁻¹.
- T is the temperature in **K**.

The specification states that these equations and R will be given when required.

**Worked example 3 (Arrhenius calculation).** A first-order reaction has A = 4.0 × 10¹⁰ s⁻¹ and
Ea = 75 kJ mol⁻¹. Calculate k at 310 K and at 320 K.

```
Ea = 75 × 1000 = 75 000 J mol⁻¹
At 310 K: Ea/RT = 75 000 ÷ (8.31 × 310) = 29.11
          k = 4.0 × 10¹⁰ × e^(−29.11) = 9.08 × 10⁻³ s⁻¹
At 320 K: k = 4.0 × 10¹⁰ × e^(−75 000 / (8.31 × 320)) = 2.26 × 10⁻² s⁻¹
```

A 10 K rise multiplies k by about 2.5 here.

### The straight-line form

Taking natural logs of both sides gives:

```
ln k = −Ea/(RT) + ln A
```

This has the form y = mx + c, with y = ln k, x = 1/T, gradient m = −Ea/R and intercept c = ln A. So a plot
of ln k against 1/T is a straight line with **slope −Ea/R**.

**Worked example 4 (Ea from a graph).** A first-order reaction gives these values.

| T / K | k / s⁻¹ | 1/T / K⁻¹ | ln k |
|---|---|---|---|
| 300 | 0.0316 | 3.333 × 10⁻³ | −3.45 |
| 320 | 0.150 | 3.125 × 10⁻³ | −1.90 |
| 340 | 0.590 | 2.941 × 10⁻³ | −0.53 |
| 360 | 2.00 | 2.778 × 10⁻³ | 0.69 |

Step 1: calculate 1/T and ln k (shown) and plot ln k against 1/T; the points lie on a straight line.
Step 2: take the gradient from two points far apart:

```
gradient = (0.69 − (−3.45)) ÷ (2.778 × 10⁻³ − 3.333 × 10⁻³)
         = 4.14 ÷ (−5.55 × 10⁻⁴) = −7.46 × 10³ K
```

Step 3: Ea = −gradient × R = 7.46 × 10³ × 8.31 = 6.20 × 10⁴ J mol⁻¹ = **62.0 kJ mol⁻¹**.

Keep 1/T to at least four significant figures, or the small differences lose accuracy.

<!-- marlbridge-diagram:chem-b30-arrhenius-worked-example-plot -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/chemistry/chem-b30-arrhenius-worked-example-plot.svg" aria-label="Open full-size diagram: chem-b30-arrhenius-worked-example-plot"><img src="/images/learning/chemistry/chem-b30-arrhenius-worked-example-plot.svg" width="1528" height="940" alt="The four AQA worked-example points are plotted as ln(k/s-1) against 1/T, with the horizontal axis scaled in 10-3 K-1: 360 K (2.778, 0.69), 340 K (2.941, -0.53), 320 K (3.125, -1.90), and 300 K (3.333, -3.45). The physical x-values include the 10-3 factor, giving a negative gradient of -7.46e3 K; Ea = -gradient × 8.31 J mol-1 K-1 = 62.0 kJ mol-1. The intercept is ln A." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>The x-axis ticks show 1/T in units of 10⁻³ K⁻¹; include that scale factor when calculating the physical gradient. The four plotted points give a slope of −7.46 × 10³ K, so Ea = −gradient × 8.31 J mol⁻¹ K⁻¹ = 62.0 kJ mol⁻¹. The intercept is ln A. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:chem-b30-arrhenius-worked-example-plot -->

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--02-boltzmann-temperature.webp" width="900" height="960" alt="Two skewed curves of number of molecules against energy start at the origin. The hotter curve has a lower peak further right, a longer tail, and crosses the cooler curve once to the left of Ea. The shaded area beyond Ea is much bigger for the hotter curve, while both curves enclose the same total area." loading="lazy">
  <figcaption>A hotter gas has a lower, wider curve with the same area and many more molecules at or above Ea.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--08-arrhenius-plot.webp" width="900" height="1010" alt="Four points at 300 to 360 K lie on a downward straight line of ln k against 1/T. The gradient triangle gives minus Ea over R. Using R = 8.31 the gradient gives Ea = 62.0 kJ per mol, from ln k = -Ea/R times 1/T plus ln A." loading="lazy">
  <figcaption>The gradient of ln k against 1/T is -Ea/R, here giving Ea = 62.0 kJ per mol.</figcaption>
</figure>



## 3.1.9.2 Rates from concentration–time graphs

The rate at any moment is the size of the **gradient of the concentration–time graph** then. For a curve,
draw a **tangent** and find its gradient (negative for a reactant; quote the rate as positive).

The **initial rate** is the gradient of the tangent drawn at t = 0.

<!-- marlbridge-diagram:chem-batch-tangent-zero-order -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/chemistry/chem-batch-tangent-zero-order.svg" aria-label="Open full-size diagram: concentration-time tangents and zero-order slope"><img src="/images/learning/chemistry/chem-batch-tangent-zero-order.svg" width="1600" height="900" alt="Concentration-time sketches compare a curved first-order reactant trace, whose tangent at time zero is steeper than a later tangent, with a straight zero-order trace whose tangent gradient is constant and equals minus k." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For a curved concentration–time trace, tangent gradient depends on time; the initial rate uses t = 0. A zero-order trace is linear, so its gradient is constant and k is its positive magnitude.</figcaption>
</figure>
<!-- /marlbridge-diagram:chem-batch-tangent-zero-order -->

**Worked example 5 (tangent).** On a concentration–time curve for reactant D, the tangent at t = 60 s passes
through (0 s, 0.62 mol dm⁻³) and (150 s, 0.11 mol dm⁻³).

```
gradient = (0.11 − 0.62) ÷ (150 − 0) = −3.4 × 10⁻³ mol dm⁻³ s⁻¹
rate at 60 s = 3.4 × 10⁻³ mol dm⁻³ s⁻¹
```

### Zero-order reactions

<!-- marlbridge-diagram:chem-b28-zero-order-concentration-time-slope -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/chemistry/chem-b28-zero-order-concentration-time-slope.svg" aria-label="Open full-size diagram: chem-b28-zero-order-concentration-time-slope"><img src="/images/learning/chemistry/chem-b28-zero-order-concentration-time-slope.svg" width="1528" height="940" alt="A zero-order reactant concentration-time graph is a straight line from 0.80 mol dm-3 at 0 s to 0.44 mol dm-3 at 300 s. Its gradient is (0.44-0.80)/300 = -1.2e-3 mol dm-3 s-1, so k equals the positive magnitude, 1.2e-3 mol dm-3 s-1." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>A zero-order reactant concentration-time graph is a straight line from 0.80 mol dm-3 at 0 s to 0.44 mol dm-3 at 300 s. Its gradient is (0.44-0.80)/300 = -1.2e-3 mol dm-3 s-1, so k equals the positive magnitude, 1.2e-3 mol dm-3 s-1. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:chem-b28-zero-order-concentration-time-slope -->


If the reaction is zero order with respect to X, Rate = k, so the rate stays constant as X is used up. The
concentration–time graph is a **straight line**, and **k = −gradient**.

**Worked example 6.** [X] falls from 0.80 mol dm⁻³ at t = 0 to 0.44 mol dm⁻³ at t = 300 s, along a
straight line.

```
gradient = (0.44 − 0.80) ÷ 300 = −1.2 × 10⁻³ mol dm⁻³ s⁻¹
k = 1.2 × 10⁻³ mol dm⁻³ s⁻¹
```

For first and second order the graph is a curve that flattens as the concentration falls.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--03-concentration-pressure.webp" width="900" height="950" alt="Two equal boxes hold gas particles: 6 in the left (low concentration) and 18 in the right (three times as many). The crowded box has more collisions per second. The energy of the particles is unchanged, so the fraction able to react is the same, but the rate rises." loading="lazy">
  <figcaption>Raising concentration or gas pressure increases collision frequency, not the fraction of collisions that succeed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--06-tangent-rate.webp" width="900" height="1030" alt="A concentration-time curve for a reactant falls and flattens. A tangent at t = 0 is steep and its gradient is the initial rate. A tangent later on is shallower, so the rate is lower. Rate is the size of the gradient, quoted as positive." loading="lazy">
  <figcaption>The rate at any time is the size of the tangent gradient, and the gradient at t = 0 is the initial rate.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--07-half-life.webp" width="900" height="1060" alt="Two concentration-time graphs. For a first-order reaction each halving (0.80 to 0.40 to 0.20 to 0.10) takes the same 60 s, so k = ln 2 divided by the half-life. For a zero-order reaction the line is straight and successive halvings take 100, 50 and 25 s, with k equal to minus the gradient." loading="lazy">
  <figcaption>A constant half-life shows first order; in a zero-order reaction successive half-lives shorten.</figcaption>
</figure>


## 3.1.9.2 Deducing orders

### From rate–concentration graphs

| Order | Rate against [A] |
|---|---|
| 0 | horizontal straight line |
| 1 | straight line through the origin |
| 2 | upward curve through the origin; rate against [A]² is a straight line through the origin |

### From initial rates data

Compare two experiments in which **only one concentration changes**. If two change together, divide out
the effect of the one whose order you know.

**Worked example 7.** Data for D + E + F → products at a fixed temperature.

| Exp | [D] / mol dm⁻³ | [E] / mol dm⁻³ | [F] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|---|
| 1 | 0.10 | 0.10 | 0.20 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 0.20 | 8.0 × 10⁻⁴ |
| 3 | 0.10 | 0.30 | 0.20 | 6.0 × 10⁻⁴ |
| 4 | 0.10 | 0.10 | 0.40 | 2.0 × 10⁻⁴ |

Step 1, D (Exps 1 and 2): [D] doubles, rate ×4, so **second order** in D.
Step 2, E (Exps 1 and 3): [E] triples, rate ×3, so **first order** in E.
Step 3, F (Exps 1 and 4): [F] doubles, rate unchanged, so **zero order** in F.
Step 4, rate equation: **Rate = k[D]²[E]** (overall order 3).
Step 5, k from Exp 1:

```
k = 2.0 × 10⁻⁴ ÷ ((0.10)² × 0.10) = 0.20 mol⁻² dm⁶ s⁻¹
```

Check: Exp 2 gives 0.20 × (0.20)² × 0.10 = 8.0 × 10⁻⁴. It matches.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--01-collision-theory.webp" width="900" height="1070" alt="Two panels. In the first, particles A and B approach with short arrows (low energy), collide and bounce apart unchanged. In the second they approach with long arrows (energy at least the activation energy) and form the product AB. Activation energy is the minimum energy needed to react." loading="lazy">
  <figcaption>Only collisions with energy of at least Ea lead to a reaction; the rest bounce apart.</figcaption>
</figure>


## 3.1.9.2 Orders and the rate-determining step

In a multi-step reaction the slowest step is the **rate-determining (rate-limiting) step**.

- For a specified elementary slow step, its molecularity gives the concentration powers in that elementary rate law.
- If earlier equilibria form an intermediate, use their relations to express the slow-step rate in terms of measured reactants.
- Experimental order does not generally count all particles used before or during the slow step. Zero order means no concentration dependence over the tested range; a species may react later, but saturation and other mechanisms can also give zero-order behaviour.

**Worked example 8.** The reaction 2P + Q → P₂Q has Rate = k[P][Q]. Which of these mechanisms fits?

- Mechanism I: P + Q → PQ (slow), then PQ + P → P₂Q (fast)
- Mechanism II: P + P → P₂ (slow), then P₂ + Q → P₂Q (fast)

Step 1: the rate equation shows one P and one Q in the rate-determining step.
Step 2: the slow step of I uses one P and one Q, and the steps add up to the overall equation, so I fits.
Step 3: the slow step of II would give Rate = k[P]², so II does not fit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--09-rate-determining-step.webp" width="900" height="1170" alt="A two-hill enthalpy profile for 2P + Q going to P2Q. The first hill (P + Q forming PQ) is higher, so it is the slow, rate-determining step; the second (PQ + P forming P2Q) is lower and fast. Because the slow step has one P and one Q, Rate = k[P][Q]." loading="lazy">
  <figcaption>The slowest step sets the rate, and the orders show how many particles of each reactant take part in it.</figcaption>
</figure>


## Required practical 7: measuring rate
<!-- marlbridge-diagram:chem-b25-iodine-clock-initial-rate -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/chemistry/chem-b25-iodine-clock-initial-rate.svg" aria-label="Open full-size diagram: chem-b25-iodine-clock-initial-rate"><img src="/images/learning/chemistry/chem-b25-iodine-clock-initial-rate.svg" width="1528" height="940" alt="In the iodine clock method, iodine forms and is consumed by a small fixed amount of thiosulfate until the thiosulfate runs out. Starch then turns the mixture blue-black and the timer is stopped. Vary one reactant, replace its volume with water to keep total volume fixed, keep temperature constant, and treat 1/t as an estimate of initial rate when the fixed conversion is sufficiently small." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For a sufficiently small fixed conversion, 1/t estimates the initial rate. Keep temperature and total volume constant while varying one reactant. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:chem-b25-iodine-clock-initial-rate -->


The specification requires you to measure the rate of reaction **by an initial rate method** and **by a
continuous monitoring method** (apparatus and techniques AT a, k and l). It suggests finding the order for a
reactant in the iodine clock reaction.

**Initial rate method (clock reaction).** In an iodine clock, iodine forms slowly and reacts at once with a
small, fixed amount of thiosulfate ions. When the thiosulfate runs out, iodine stays in solution and turns
starch blue-black.

1. Measure solutions with a pipette or burette. Vary the volume of one reactant only, and add water so the
   **total volume is the same** each run; its concentration is then proportional to its volume.
2. Mix, start the timer, and stop it at the colour change. Keep the temperature constant.

The same small amount of product forms each run. If that threshold is small enough that the rate has not
changed much before the colour change, **1/t is an estimate proportional to the initial rate**. It is a
proxy, not an exact instantaneous rate. Plot 1/t against the varied concentration (or volume) and infer
the order from the pattern, as in the table above.

**Continuous monitoring method.** Follow one concentration through a single run: gas volume, mass loss,
colour with a colorimeter, or samples removed and titrated. For aliquots, use a quench that has been shown
to stop this particular reaction quickly on the sampling timescale; cooling in ice-cold water is only an
example and is not guaranteed to quench every reaction. Plot concentration against time and draw tangents
to find rates at different concentrations.

Wear eye protection and handle each chemical according to its hazards (AT k).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-kinetics--04-catalyst.webp" width="900" height="1130" alt="Top: an enthalpy profile with the same reactant and product levels, with a high peak without a catalyst (Ea 180) and a lower peak with one (Ea 105), so delta H is unchanged. Bottom: a single Maxwell-Boltzmann curve with two Ea lines; the shaded strip between them shows extra molecules that can react by the catalysed route." loading="lazy">
  <figcaption>A catalyst offers a lower-Ea route, so more molecules can react at the same temperature, and delta H does not change.</figcaption>
</figure>


## Common errors

- Deducing orders from the coefficients in the balanced equation.
- Writing units of k from memory instead of cancelling them for the overall order.
- Using Ea in kJ mol⁻¹ or T in °C in k = Ae^(−Ea/RT).
- Sign errors: Ea = −gradient × R.
- Crediting a rate change to one reactant when two concentrations changed.
- Saying a zero-order reactant is not used up. It can be consumed even though its concentration does not affect the measured rate over the tested range; zero order alone does not establish when it reacts.

## Next steps

Next, use the [revision notes](/resources/aqa-a-level-chemistry-rate-equations-revision-notes/) and the
[practice questions](/resources/aqa-a-level-chemistry-rate-equations-practice/). The
[exam preparation guide](/resources/aqa-a-level-chemistry-exam-preparation/) covers paper structure, and the
free 10-minute [diagnostics](/diagnostics/) show where to focus.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), version 1.2, July 2026, for AS and A-level
exams June 2016 onwards: section 3.1.9 Rate equations (3.1.9.1 and 3.1.9.2, A-level only), with Required
practical 7.
