---
title: "IB DP Chemistry Reactivity 2.2: How fast? Rate equations, mechanisms and the Arrhenius equation -- Revision Notes"
seoTitle: "IB DP Chem Rate Equations and Arrhenius Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["ib"]
topic: "How fast? Rate equations, mechanisms and the Arrhenius equation"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Chemistry"]
syllabusSeries: "First assessment 2025"
order: 122
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-chemistry-reactivity-2"
    subtopic: "ib-dp-chemistry-reactivity-2-2"
description: "Condensed IB DP Chemistry HL notes on mechanisms, molecularity, orders, rate equations, units of k and the Arrhenius equation, with a self-test."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-07
featured: false
reviewNote: "2026-11-08: reviewed by nouman-ahmed."
---

These notes boil down Reactivity 2.2.6 to 2.2.13, the additional higher level end of **Reactivity 2.2 (How fast?)**. They are matched to the IB's Diploma Programme *Chemistry guide* issued in February 2023, used for exams from 2025. Everything here is **HL only**. The SL and HL material that comes first (Reactivity 2.2.1 to 2.2.5) is in the [rates and collision theory revision notes](/resources/ib-dp-chemistry-how-fast-rates-and-collision-theory-revision-notes/).

Full explanations and longer worked examples are in the [study guide](/resources/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius/), while the [practice set](/resources/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-practice/) holds original exam-style questions. Our [IB DP chemistry hub](/boards/ib/ib-dp/chemistry/) links each unit, the [checklist](/checklists/ib/ib-dp/chemistry/) prints the course on one page, and our free [diagnostics](/diagnostics/) help you spot gaps.

## Key definitions

| Term | Meaning |
|---|---|
| Elementary step | One single molecular event in a mechanism: a collision, or one particle breaking apart |
| Mechanism | The sequence of elementary steps; the steps must add up to the overall equation |
| Rate-determining step (RDS) | The slowest step; it limits the overall rate |
| Intermediate | Made by one step and consumed by a later step; it cancels out of the overall equation |
| Transition state | The highest-energy arrangement within one step; bonds part-made and part-broken |
| Molecularity | Number of reacting particles in one elementary step: uni- (1), bi- (2), termolecular (3) |
| Rate equation | rate = k[A]ᵐ[B]ⁿ, found only by experiment |
| Order with respect to A | The exponent m on [A] in the rate equation |
| Overall order | m + n: add the orders for all the reactants |
| Rate constant, k | The constant linking rate to the concentration terms; it changes with temperature, not with concentration |
| Arrhenius factor, A | Term that accounts for the frequency of collisions with proper orientation |

## Mechanisms (2.2.6)

**Method: testing a proposed mechanism**

1. Add the steps. Intermediates must cancel, leaving the overall equation.
2. Find the slow step. Write a rate equation from the species that react in it.
3. If the slow step contains an intermediate made in an earlier fast step, replace the intermediate with the reactants that made it.
4. Compare with the experimental rate equation. Match = consistent (not proven). No match = reject.

**Small reminder.** Mechanism: L + M → LM (slow); LM + M → LM₂ (fast). Overall: L + 2M → LM₂. Intermediate: LM. Rate equation: rate = k[L][M]. Only one M is in the slow step, so the reaction is first order in M even though the equation has 2M.

**RDS not the first step.** If a fast step 1 makes an intermediate that is then used in a slow step 2, all the particles that went into making the intermediate show up in the rate equation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--02-testing-mechanisms.webp" width="900" height="1120" alt="Two mechanisms for 2NO + O2 drawn with atoms. Mechanism II (fast NO + NO to N2O2, slow N2O2 + O2 to 2NO2) predicts rate = k[NO]^2[O2] and matches the experiment. Mechanism III (slow NO + O2 to NO3) predicts k[NO][O2] and is rejected." loading="lazy">
  <figcaption>The slow step, with any intermediate replaced by what made it, predicts the rate equation to compare with experiment.</figcaption>
</figure>


## Energy profiles for multistep reactions (2.2.7)

- One hump per elementary step.
- Peaks = transition states. Troughs between humps = intermediates.
- The RDS is the step whose transition state is **highest above the reactants**.
- Build a profile from data level by level: transition state = previous level + Ea of that step; next level = previous level + ΔH of that step.
- Overall ΔH = products level − reactants level.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--01-two-step-profile.webp" width="900" height="900" alt="A two-step energy profile with reactants at 0 kJ per mole, transition states at 85 and 50, an intermediate trough at +30 and products at -60. Transition states are hump tops and the intermediate is the trough between them. The first hump is taller, so step 1 is the rate-determining step." loading="lazy">
  <figcaption>Transition states sit at the top of humps; the intermediate sits in the trough; the tallest hump is the RDS.</figcaption>
</figure>


## Molecularity (2.2.8)

| Molecularity | Particles in the step | Note |
|---|---|---|
| Unimolecular | 1 | One particle breaks apart or rearranges |
| Bimolecular | 2 | Most common; two particles collide |
| Termolecular | 3 | Rare: three-body collisions with enough energy and right geometry are unlikely |

Molecularity applies to an elementary step. Order applies to the rate equation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--03-molecularity.webp" width="900" height="1050" alt="Three rows: one particle splitting (RX to R+ and X-), two particles colliding to form AB, and three particles meeting at once, which is rare. Molecularity belongs to one step, whereas order belongs to the whole rate equation." loading="lazy">
  <figcaption>Molecularity counts the particles in a single step; termolecular steps are rare.</figcaption>
</figure>


## Rate equations and orders (2.2.9 and 2.2.10)

- Orders are found by **experiment**, never from equation coefficients.
- Only integer orders are assessed; the graphs cover orders 0, 1 and 2.
- The order in a reactant can show how many of its particles are in the RDS (counting fast steps before it).

**Method: initial rates**

1. Pick a pair of experiments in which just one reactant's concentration is different.
2. Note how many times bigger that concentration is, and how many times bigger the rate is.
3. Rate factor = (concentration factor)^order. Solve for the order.
4. Do the same for every other reactant and combine the orders into a rate equation.
5. Substitute one experiment's values to find k, with units.

| Order | [A] × 2 | [A] × 3 | [A] × 0.5 |
|---|---|---|---|
| 0 | rate × 1 | rate × 1 | rate × 1 |
| 1 | rate × 2 | rate × 3 | rate × 0.5 |
| 2 | rate × 4 | rate × 9 | rate × 0.25 |

### Graph shapes

| Order | Concentration–time | Rate–concentration |
|---|---|---|
| 0 | Falling straight line | Flat line, parallel to the [A] axis |
| 1 | Curve; concentration halves in equal time intervals | Rising straight line from (0, 0) |
| 2 | Curve, steep at first then flattening more | Rising curve from (0, 0), getting steeper |

To go from a concentration–time graph to rate data, draw tangents at several concentrations; each gradient is the rate there.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--04-initial-rates.webp" width="900" height="960" alt="Two bar-chart panels. Tripling [Cl2] with [NO] fixed triples the rate (first order). Raising [NO] by 2.5 times with [Cl2] fixed raises the rate by 6.25 times, which is 2.5 squared (second order). So rate = k[NO]^2[Cl2]." loading="lazy">
  <figcaption>Compare the factor in concentration with the factor in rate to find each order.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--05-order-graphs.webp" width="900" height="1000" alt="Six graphs. Concentration against time: straight line (zero), constant half-life curve (first), steep-then-levelling curve (second). Rate against concentration: horizontal line, straight line through the origin, upward parabola." loading="lazy">
  <figcaption>Each order has a characteristic concentration-time and rate-concentration shape.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--06-order-from-tangents.webp" width="900" height="1110" alt="A concentration-time curve with three numbered tangents and the resulting rate against concentration plot. Halving the concentration from 0.080 to 0.040 divides the rate by 4, so the reaction is second order with k = 0.050 mol-1 dm3 s-1." loading="lazy">
  <figcaption>Tangent gradients on a concentration-time curve give the rates that show the order.</figcaption>
</figure>


## Units of k (2.2.11)

units of k = mol dm⁻³ s⁻¹ ÷ (mol dm⁻³)^(overall order)

| Units of k | Overall order | Example |
|---|---|---|
| mol dm⁻³ s⁻¹ | zero | rate = k |
| s⁻¹ | first | rate = k[X] |
| mol⁻¹ dm³ s⁻¹ | second | rate = k[X]² |
| mol⁻² dm⁶ s⁻¹ | third | rate = k[X][Y]² |

- k does **not** change with concentration.
- k **does** change with temperature (and is larger with a catalyst, which lowers Ea).

**Halogenoalkanes link (Reactivity 3.4).** Primary + OH⁻: rate = k[RX][OH⁻], k in mol⁻¹ dm³ s⁻¹ (SN2, one step). Tertiary + OH⁻: rate = k[RX], k in s⁻¹ (SN1, carbocation intermediate).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--07-units-of-k.webp" width="900" height="990" alt="Four rows link overall order to units of k: zero order mol dm-3 s-1, first s-1, second mol-1 dm3 s-1, third mol-2 dm6 s-1. SN2 of a primary halogenoalkane has k in mol-1 dm3 s-1; SN1 of a tertiary one has k in s-1." loading="lazy">
  <figcaption>Units of k follow from dividing mol dm-3 s-1 by concentration raised to the overall order.</figcaption>
</figure>


## Arrhenius equation (2.2.12 and 2.2.13)

| Form | Equation |
|---|---|
| Exponential | k = A e^(−Ea/RT) |
| Linear | ln k = −(Ea/R)(1/T) + ln A |
| Two temperatures (from the linear form) | ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂) |

According to the guide, the exponential and straight-line forms both appear in the data booklet; the two-temperature form is simply derived from the straight-line one. Use R = 8.31 J K⁻¹ mol⁻¹, T in kelvin and Ea in J mol⁻¹ inside the equation.

**Graph:** plot 1/T horizontally and ln k vertically.
- Gradient = −Ea/R, so **Ea = −gradient × R**.
- y-intercept = **ln A**, so A = e^(intercept).
- A has the same units as k.

**Method: Ea and A from a table of k and T**

1. Convert each T to 1/T (K⁻¹) and each k to ln k.
2. Put 1/T on the x-axis and ln k on the y-axis; draw the straight line that fits the points best.
3. Measure its gradient with two points far apart on your line (not table values, if the points scatter).
4. Multiply the gradient by −8.31 to get Ea in J mol⁻¹, then divide by 1000 for kJ mol⁻¹.
5. Read any point off the line and use ln A = ln k − gradient × (1/T); then A = e^(ln A).

**Qualitative points**
- Higher T gives larger k, and the rise is roughly exponential.
- Larger Ea gives a steeper line, so k is more sensitive to temperature.
- A reflects collision frequency and orientation; e^(−Ea/RT) is the fraction of collisions with at least Ea.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--08-arrhenius-gradient.webp" width="900" height="990" alt="A plot of ln k against 1/T with four points on a falling straight line from 300 K to 330 K and a gradient triangle with rise 2.625 and run -3.03e-4. The gradient is -8.66e3 K, equal to -Ea/R, so Ea = 72.0 kJ per mole." loading="lazy">
  <figcaption>The gradient of ln k against 1/T is -Ea/R.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius--09-arrhenius-intercept.webp" width="900" height="990" alt="The Arrhenius line extended back to 1/T = 0 meets the vertical axis at ln A = 23.89, so A is about 2.4e10 per second. The equation ln k = -(Ea/R)(1/T) + ln A is colour-coded to match the gradient and intercept." loading="lazy">
  <figcaption>Extrapolating ln k against 1/T to 1/T = 0 gives ln A, the y-intercept.</figcaption>
</figure>


## Must-know distinctions

- **Intermediate vs transition state:** trough vs peak; can be detected vs cannot be isolated.
- **Order vs molecularity:** experimental, for the rate equation vs a count of particles in one step.
- **Rate vs rate constant:** rate changes with concentration; k does not.
- **Order vs stoichiometry:** coefficients in the overall equation say nothing about orders.
- **Gradient vs Ea:** the gradient is −Ea/R, not Ea.

## Quick self-test

1. State the units of k for a reaction that is third order overall.
2. rate = k[A][B]². By what factor does the rate change if [A] is tripled and [B] is doubled?
3. A first-order reaction has rate 6.0 × 10⁻⁴ mol dm⁻³ s⁻¹ when [A] = 0.20 mol dm⁻³. Calculate k.
4. The best-fit line of ln k versus 1/T has a gradient of −6.00 × 10³ K. Calculate Ea in kJ mol⁻¹.
5. The same plot has y-intercept 25.0. Calculate A.
6. k = 2.0 × 10⁻³ s⁻¹ at 300 K and 8.0 × 10⁻³ s⁻¹ at 320 K. Calculate Ea.
7. State the molecularity of the step Cl + CH₄ → HCl + CH₃.
8. Mechanism: L + M → LM (slow); LM + M → LM₂ (fast). Identify the intermediate and write the rate equation.
9. rate = k[A]², k = 0.25 mol⁻¹ dm³ s⁻¹. Calculate the rate when [A] = 0.040 mol dm⁻³.
10. Describe the concentration–time graph for a zero-order reactant.

### Answers

1. **mol⁻² dm⁶ s⁻¹** (third order overall).
2. 3 × 2² = **× 12**.
3. k = 6.0 × 10⁻⁴ ÷ 0.20 = **3.0 × 10⁻³ s⁻¹**.
4. Ea = 6.00 × 10³ × 8.31 = 4.99 × 10⁴ J mol⁻¹ = **49.9 kJ mol⁻¹**.
5. A = e^25.0 = **7.2 × 10¹⁰** (same units as k).
6. ln(8.0 × 10⁻³ ÷ 2.0 × 10⁻³) = ln 4 = 1.386; 1/300 − 1/320 = 2.083 × 10⁻⁴ K⁻¹; Ea = 8.31 × 1.386 ÷ 2.083 × 10⁻⁴ = 5.53 × 10⁴ J mol⁻¹ = **55.3 kJ mol⁻¹**.
7. **Bimolecular** (two particles).
8. Intermediate **LM**; **rate = k[L][M]**.
9. 0.25 × 0.040² = **4.0 × 10⁻⁴ mol dm⁻³ s⁻¹**.
10. A **straight line** sloping down with constant gradient, until the reactant runs out.

## Where marks are usually lost

- Writing the rate equation from the coefficients of the balanced equation.
- Forgetting that a fast equilibrium before the slow step brings extra particles into the rate equation.
- Labelling an intermediate as a transition state, or drawing it at a peak.
- Rejecting a mechanism on kinetics alone without checking that its steps add up, or vice versa.
- Giving k with no units, or with units that do not fit the overall order.
- Using T in °C in the Arrhenius equation.
- Mixing kJ and J: Ea in kJ mol⁻¹ with R in J K⁻¹ mol⁻¹.
- Taking the gradient of the Arrhenius plot as Ea, or losing its minus sign.
- Using data points from the table rather than from the best-fit line when the points scatter.
- Saying a termolecular step is impossible: it is possible but rare.

## Frequently asked questions

**What is the rate-determining step?**
The rate-determining step is the slowest step in a reaction mechanism, and it limits the overall rate. On an energy profile, it is the step whose transition state is highest above the reactants.

**What is the difference between an intermediate and a transition state?**
An intermediate sits in a trough between humps on an energy profile and can be detected, while a transition state sits at a peak and cannot be isolated. Drawing an intermediate at a peak is a common error.

**What are the units of the rate constant k?**
Divide mol dm⁻³ s⁻¹ by (mol dm⁻³) raised to the overall order. So k has units mol dm⁻³ s⁻¹ for zero order, s⁻¹ for first order and mol⁻¹ dm³ s⁻¹ for second order.

**How do you find activation energy from an Arrhenius plot?**
Plot ln k against 1/T; the gradient is −Ea/R, so Ea = −gradient × R, and the y-intercept is ln A. Use points from the best-fit line, not table values, if the data scatter.

## Official syllabus

Source document: the IB's *Chemistry guide* for the Diploma Programme (International Baccalaureate, February 2023; first assessment 2025). These notes cover Reactivity 2.2 understandings 2.2.6 to 2.2.13, all of them HL only.
