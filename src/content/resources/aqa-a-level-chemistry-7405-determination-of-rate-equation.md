---
title: "AQA A-Level Chemistry (7405): Determination of rate equation"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Rate equations"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "rate-equations-7405"
    subtopic: "determination-of-rate-equation-7405"
description: "AQA 7405 determination of rate equation in depth: initial rate data, concentration-time and rate-concentration graphs, deducing orders and k, and linking orders to the rate-determining step."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.9.2 Determination of rate equation** of the AQA A-level Chemistry specification (7405), for teaching from September 2015. It is A-level only content, examined on Paper 2 (and Paper 3). The rate equation is not written from the balanced equation. It is an **experimentally determined** relationship, and this subtopic is about how it is found. The specification asks for four data skills: deduce a rate from a concentration–time graph, deduce an initial rate, deduce an order from rate–concentration data or graphs, and derive the rate equation. It also asks you to use orders to say something about the rate-determining step. The [Rate equations study guide](/resources/aqa-a-level-chemistry-rate-equations/) covers the whole topic. Questions are in the [Determination of rate equation practice questions](/resources/aqa-a-level-chemistry-7405-determination-of-rate-equation-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| The rate equation is an experimentally determined relationship | State this and explain why |
| Use concentration–time graphs to deduce the rate of a reaction | Draw tangents and find gradients |
| Use initial concentration–time data to deduce the initial rate | Calculate rate from early data |
| Use rate–concentration data or graphs to deduce the order (0, 1 or 2) with respect to a reactant | Compare experiments |
| Derive the rate equation from the orders | Write the equation and find k |
| Use the orders to provide information about the rate-determining (limiting) step | Link the equation to the mechanism |
| Required practical 7 | Measure rate by an initial rate method and by continuous monitoring |

## Two experimental approaches

### 1. Initial rate method

Several experiments are done, changing the concentration of **one** reactant at a time and keeping the others constant. In each, the rate at the very start is measured, before the concentrations change much. The "iodine clock" reaction is a common example: the time to a sudden colour change is measured, and rate ∝ 1 ÷ time.

### 2. Continuous monitoring

A single experiment is followed over time, for example by measuring the volume of gas, the colour of the solution (with a colorimeter) or the pH. A graph of concentration against time is plotted.

## Reading a concentration–time graph

The **rate at any time is the gradient of the tangent** to the curve at that time. The gradient is negative for a reactant, so the rate is its magnitude.

### Shapes and the order

| Shape of the concentration–time graph | Order | Reason |
|---|---|---|
| Straight line, constant negative gradient | Zero | Rate does not depend on concentration |
| Curve getting shallower, with a constant half-life | First | Rate proportional to concentration |
| Steep curve that flattens quickly, with successive half-lives lengthening | Second | Rate proportional to the square of the concentration |

(The half-life is the time for the concentration to halve. It is a feature of the shapes rather than a required calculation.)

### Worked example 1: finding the order from tangents

For a reactant A, tangents were drawn on a concentration–time graph.

| Time / s | [A] / mol dm⁻³ | Gradient of tangent / mol dm⁻³ s⁻¹ |
|---|---|---|
| 0 | 0.80 | −0.0139 |
| 40 | 0.40 | −0.0069 |

The rate is 0.0139 at 0.80 mol dm⁻³ and 0.0069 at 0.40 mol dm⁻³. When the concentration halves, the rate halves, so the rate is proportional to [A] and the reaction is **first order** in A.

### Worked example 2: a zero-order graph

A graph of concentration against time is a straight line from 0.60 mol dm⁻³ at t = 0 to 0.00 mol dm⁻³ at t = 120 s. The gradient is −0.60 ÷ 120 = −5.0 × 10⁻³ mol dm⁻³ s⁻¹. The reaction is zero order in the reactant, the rate is constant, and k = 5.0 × 10⁻³ mol dm⁻³ s⁻¹.

## Using initial rate data

Compare two experiments in which only one concentration changes.

- If the rate does not change when the concentration doubles: **zero order**.
- If the rate doubles: **first order**.
- If the rate quadruples: **second order**.

For the factor, the rate ratio = (concentration ratio)ᵒʳᵈᵉʳ.

### Worked example 3: initial rates

For A + B → products, the initial rates are:

| Experiment | [A] / mol dm⁻³ | [B] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻⁴ |
| 3 | 0.10 | 0.20 | 8.0 × 10⁻⁴ |
| 4 | 0.20 | 0.20 | 1.6 × 10⁻³ |

**Order in A:** experiments 1 and 2. [B] is constant, [A] doubles, the rate doubles. First order in A.

**Order in B:** experiments 1 and 3. [A] is constant, [B] doubles, the rate increases by a factor of four (8.0 × 10⁻⁴ ÷ 2.0 × 10⁻⁴). Second order in B.

**Check with experiment 4:** both double, so the rate should increase by 2 × 4 = 8: 2.0 × 10⁻⁴ × 8 = 1.6 × 10⁻³ ✓.

**Rate equation:** rate = k[A][B]².

**Rate constant:** from experiment 1,

```
k = rate ÷ ([A][B]²) = 2.0 × 10⁻⁴ ÷ (0.10 × 0.10²) = 2.0 × 10⁻⁴ ÷ 1.0 × 10⁻³ = 0.20
units: mol dm⁻³ s⁻¹ ÷ (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹
k = 0.20 mol⁻² dm⁶ s⁻¹
```

Calculate k from one experiment and verify it with another: from experiment 3, k = 8.0 × 10⁻⁴ ÷ (0.10 × 0.20²) = 8.0 × 10⁻⁴ ÷ 4.0 × 10⁻³ = 0.20 ✓.

### Worked example 4: when the ratio is not a simple doubling

If [A] is tripled and the rate increases by a factor of nine, then 3ⁿ = 9 so n = 2: second order. If [A] increases by a factor of 1.5 and the rate by 2.25, then 1.5ⁿ = 2.25 and n = 2.

### Worked example 5: a reactant that is zero order

Propanone reacts with iodine in acid: CH₃COCH₃ + I₂ → CH₃COCH₂I + HI. Doubling [I₂] has no effect on the rate, doubling [CH₃COCH₃] doubles it, and doubling [H⁺] doubles it. The rate equation is

rate = k[CH₃COCH₃][H⁺]

Note that iodine does not appear, although it is in the balanced equation, and that H⁺ appears although it is not in the balanced equation (it is a catalyst).

## Rate-determining step

Most reactions occur in several steps. The slowest step is the **rate-determining step**. It controls the overall rate, as the narrowest part of a pipe controls the flow.

- A species that appears in the rate equation is involved in the rate-determining step, or in a step before it.
- A species that is zero order is **not** involved in the rate-determining step, and takes part only after it.
- The orders in the rate equation tell you the number of molecules of each species taking part in the rate-determining step.

### Worked example 6: proposing a step

For propanone and iodine in acid, the rate equation shows that one propanone molecule and one H⁺ ion take part in the rate-determining step, and iodine does not. So the slow step involves propanone and H⁺ (the propanone is protonated), and iodine reacts in a later, fast step.

### Worked example 7: a rate equation and a proposed mechanism

A reaction has the equation 2NO₂ + F₂ → 2NO₂F and a measured rate equation rate = k[NO₂][F₂]. A suggested mechanism is:

Step 1 (slow): NO₂ + F₂ → NO₂F + F
Step 2 (fast): NO₂ + F → NO₂F

The slow step involves one NO₂ and one F₂, which fits the rate equation. The two steps add to give 2NO₂ + F₂ → 2NO₂F. The mechanism is consistent with the data, but the data cannot prove that it is correct.

## Practical points (Required practical 7)

| Method | Detail |
|---|---|
| Initial rate | Vary one concentration at a time, keep others and the temperature constant; measure the time for a fixed change |
| Continuous monitoring | Take regular readings (gas volume, mass, colour); plot a graph; draw tangents |
| Control variables | Temperature (water bath), total volume (add water to keep it constant), other concentrations |
| Improving accuracy | Repeat and average; use a data logger; add reagents quickly and start the timer at once |

## Common mistakes

- Taking orders from the coefficients in the equation.
- Comparing experiments in which more than one concentration has changed.
- Concluding "first order" from a doubling in rate when the other reactant also changed.
- Forgetting that a catalyst can appear in the rate equation.
- Drawing a tangent that is not touching the curve at one point, or not extending it enough.
- Dropping the negative sign of the gradient of a reactant curve, without using its magnitude.
- Working out k with the wrong units.
- Saying that the rate-determining step is the first step.

## Exam technique for the command words

- **Deduce** the order: compare two experiments and state which concentration changed and what happened to the rate.
- **Derive** the rate equation: write it with all orders, then calculate k with units.
- **Explain** the use of a tangent: its gradient gives the rate at that time.
- **Suggest** a mechanism: the slow step must match the orders in the rate equation.

## Frequently asked questions

**Why is initial rate used?**
At the start the concentrations are known, because little reaction has occurred. Later, concentrations change and are harder to measure.

**Can a product appear in a rate equation?**
Yes, in some reactions (autocatalysis), but at this level the orders refer to reactants and catalysts.

**Can the rate equation be proved from a mechanism?**
No. Data can show that a mechanism is consistent, but cannot prove it.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.9.2 Determination of rate equation.
