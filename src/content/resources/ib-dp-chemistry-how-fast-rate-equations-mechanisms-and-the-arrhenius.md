---
title: "IB DP Chemistry Reactivity 2.2: How fast? Rate equations, mechanisms and the Arrhenius equation"
seoTitle: "IB DP Chemistry Rate Equations and Arrhenius (HL)"
resourceType: "study-guides"
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
description: "HL study guide for IB DP Chemistry Reactivity 2.2.6 to 2.2.13: mechanisms, rate equations, orders, units of k and Arrhenius plots, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-07
featured: false
---

This guide teaches the second half of **Reactivity 2.2 (How fast?)** for IB DP Chemistry. Its reference document is the IB's DP *Chemistry guide* (2023 edition, first assessed in 2025), so it applies to exams from 2025 onwards. It covers understandings Reactivity 2.2.6 to 2.2.13, which the guide lists as additional higher level material, so **this whole page is HL only**. The SL and HL groundwork (rates, collision theory, activation energy and catalysts, Reactivity 2.2.1 to 2.2.5) is in the [rates and collision theory study guide](/resources/ib-dp-chemistry-how-fast-rates-and-collision-theory/).

See the [IB DP chemistry hub](/boards/ib/ib-dp/chemistry/), print the [checklist](/checklists/ib/ib-dp/chemistry/), or find weak spots with our free [diagnostics](/diagnostics/).

## What this unit covers

| Guide reference | Skills | Level |
|---|---|---|
| Reactivity 2.2.6 | Evaluate proposed mechanisms; recognise intermediates; tell intermediates from transition states, including on energy profiles; handle mechanisms where the slow step is not the first | HL only |
| Reactivity 2.2.7 | Construct and interpret energy profiles for multistep reactions from kinetic data, showing the rate-determining step | HL only |
| Reactivity 2.2.8 | Interpret unimolecular, bimolecular and termolecular | HL only |
| Reactivity 2.2.9 | Deduce a rate equation from experimental data | HL only |
| Reactivity 2.2.10 | Use orders (integer values only); link order to particles in the rate-determining step; sketch and analyse concentration–time and rate–concentration graphs for zero, first and second order | HL only |
| Reactivity 2.2.11 | Solve problems with the rate equation, including the units of k | HL only |
| Reactivity 2.2.12 | Describe how k changes with temperature; analyse the Arrhenius equation and its linear form graphically | HL only |
| Reactivity 2.2.13 | Determine Ea and the Arrhenius factor, A, from experimental data | HL only |

## Mechanisms and the rate-determining step (2.2.6)

Most reactions go through a **mechanism**: a series of **elementary steps**, each a single collision or break-up. The steps add up to the overall equation.

The **rate-determining step (RDS)** is the slowest step; the overall reaction cannot go faster than it.

### Intermediates and transition states

| | Intermediate | Transition state |
|---|---|---|
| What it is | A real species made in one step and used up in a later one | The highest-energy arrangement within one step, bonds part-broken and part-formed; cannot be isolated |
| On an energy profile | Sits in a **trough** between two humps | Sits at the **top** of a hump |
| In the equations | Appears in the steps but cancels out of the overall equation | Never written as a species in the steps |

A two-step reaction has two transition states and one intermediate.

### Evaluating a proposed mechanism

A mechanism is acceptable only if it passes two tests:

1. **Stoichiometry.** The steps add up to the overall equation, with intermediates cancelling.
2. **Kinetics.** The rate equation predicted from the RDS matches the experimental rate equation.

Passing both tests shows consistency, not proof, so mechanisms are only ever "possible mechanisms".

To predict the rate equation, look at the species that react in the RDS. If the RDS is the first step, its reactants appear in the rate equation directly. If the RDS comes **after** a fast step, any intermediate in the RDS is replaced by the reactants that formed it.

### Worked example 1: nitrogen monoxide and oxygen

Experiment shows that for 2NO(g) + O₂(g) → 2NO₂(g), rate = k[NO]²[O₂]. Evaluate three proposals.

**Mechanism I:** 2NO + O₂ → 2NO₂ in a single step.
Matches both tests, but needs three particles to collide at once, which is very unlikely.

**Mechanism II:**
Step 1 (fast): NO + NO ⇌ N₂O₂
Step 2 (slow): N₂O₂ + O₂ → 2NO₂
The steps add to 2NO + O₂ → 2NO₂; N₂O₂ cancels, so it is the intermediate. The slow step uses N₂O₂ and O₂, and N₂O₂ comes from two NO, so rate = k[NO]²[O₂]. Consistent, and the RDS is **not** the first step.

**Mechanism III:**
Step 1 (slow): NO + O₂ → NO₃
Step 2 (fast): NO₃ + NO → 2NO₂
The steps add up correctly, but the slow step predicts rate = k[NO][O₂], which **does not match**. Rejected.

Mechanism II is preferred over Mechanism I because each step needs only two particles to meet.

## Energy profiles for multistep reactions (2.2.7)

Each elementary step has its own hump. The RDS is the step whose transition state lies highest above the starting reactants.

To **construct** a profile from data, work level by level from the reactants (set at zero).

### Worked example 2: building a two-step profile

A reaction goes in two steps. Step 1 has Ea = 85 kJ mol⁻¹ and ΔH = +30 kJ mol⁻¹. Step 2 has Ea = 20 kJ mol⁻¹ and ΔH = −90 kJ mol⁻¹. Sketch the profile and identify the RDS.

- Reactants: 0 kJ mol⁻¹.
- First transition state: 0 + 85 = **85 kJ mol⁻¹**.
- Intermediate: 0 + 30 = **+30 kJ mol⁻¹** (a trough).
- Second transition state: 30 + 20 = **50 kJ mol⁻¹**.
- Products: 30 − 90 = **−60 kJ mol⁻¹**, so the overall reaction is exothermic, ΔH = −60 kJ mol⁻¹.

The first hump (85) is taller than the second (50), so **step 1 is the RDS**. A rate equation containing only step 1's reactants would support this profile.

Label the axes (potential energy, reaction coordinate), both transition states, the intermediate, the Ea of the RDS and the overall ΔH.

## Molecularity (2.2.8)

**Molecularity** counts how many particles react together in a single elementary step.

- **Unimolecular:** one particle breaks apart or rearranges, e.g. the slow first step of an SN1 reaction, where one halogenoalkane molecule breaks into a carbocation and a halide ion.
- **Bimolecular:** two particles collide, e.g. step 2 of Mechanism II above.
- **Termolecular:** three particles collide at once. This is rare, because a three-body collision with enough energy and the right orientation is very unlikely.

Molecularity belongs to **one step**; order belongs to the **rate equation** and is found by experiment.

## Rate equations from experimental data (2.2.9 and 2.2.10)

For a reaction aA + bB → products, the **rate equation** is:

rate = k[A]ᵐ[B]ⁿ

- m is the **order in A**; n is the order in B.
- The **overall order** is m + n.
- m and n are **not** taken from the coefficients a and b. They depend on the mechanism and can only be found by experiment.
- Only integer orders (0, 1, 2) are assessed.

The order in a reactant can show how many of its particles take part in the RDS (including fast steps before it). A reactant that enters only after the RDS is **zero order**.

### Worked example 3: initial rates for 2NO(g) + Cl₂(g) → 2NOCl(g)

At a fixed temperature:

| Experiment | [NO] / mol dm⁻³ | [Cl₂] / mol dm⁻³ | Starting rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|
| 1 | 0.020 | 0.010 | 1.8 × 10⁻⁵ |
| 2 | 0.020 | 0.030 | 5.4 × 10⁻⁵ |
| 3 | 0.050 | 0.010 | 1.125 × 10⁻⁴ |

**Order in Cl₂.** Compare 1 and 2: [NO] is fixed, [Cl₂] × 3, rate × 3. First order in Cl₂.

**Order in NO.** Compare 1 and 3: [Cl₂] is fixed, [NO] × 2.5, rate × 6.25. Since 2.5² = 6.25, the reaction is second order in NO.

**Rate equation:** rate = k[NO]²[Cl₂]; third order overall.

**k from experiment 1:** k = 1.8 × 10⁻⁵ ÷ (0.020² × 0.010) = **4.5 mol⁻² dm⁶ s⁻¹**.

**Rate at [NO] = 0.035 and [Cl₂] = 0.024 mol dm⁻³:** 4.5 × 0.035² × 0.024 = **1.32 × 10⁻⁴ mol dm⁻³ s⁻¹**.

### Graphs for zero, first and second order

| Order | Shape of [A] against t | Shape of rate against [A] |
|---|---|---|
| 0 | Falling straight line (constant gradient) | Horizontal line: rate does not change with concentration |
| 1 | Curve; equal time intervals halve the concentration each time (constant half-life) | Straight line through the origin |
| 2 | Curve that is steep at first and then levels off more slowly than first order | Upward curve (parabola) through the origin |

To get rate–concentration data, draw tangents to a concentration–time curve and plot each gradient against the concentration there.

### Worked example 4: order from tangents

Buta-1,3-diene dimerises in the gas phase. Tangents drawn to its concentration–time curve give:

| [C₄H₆] / mol dm⁻³ | 0.080 | 0.040 | 0.020 |
|---|---|---|---|
| Rate / mol dm⁻³ s⁻¹ | 3.2 × 10⁻⁴ | 8.0 × 10⁻⁵ | 2.0 × 10⁻⁵ |

Halving the concentration (0.080 → 0.040) divides the rate by 4, so the reaction is **second order**. Then k = 3.2 × 10⁻⁴ ÷ 0.080² = **0.050 mol⁻¹ dm³ s⁻¹**.

## The rate constant and its units (2.2.11)

k is constant for a given reaction **at a given temperature**. Changing concentration changes the rate but not k. Changing temperature changes k.

Rearrange the rate equation to find the units of k: units of k = (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)^(overall order).

| Example rate equation | Overall order | Units of k |
|---|---|---|
| rate = k | zero | mol dm⁻³ s⁻¹ |
| rate = k[A] | first | s⁻¹ |
| rate = k[A][B] | second | mol⁻¹ dm³ s⁻¹ |
| rate = k[A]²[B] | third | mol⁻² dm⁶ s⁻¹ |

**Link to Reactivity 3.4.** A primary halogenoalkane reacts with aqueous alkali in one step (SN2), so rate = k[RX][OH⁻], with k in mol⁻¹ dm³ s⁻¹. A tertiary halogenoalkane reacts by SN1: a slow first step forms a carbocation **intermediate**, which then reacts quickly with OH⁻. So rate = k[RX], with k in s⁻¹, and the hydroxide ion is zero order.

## The Arrhenius equation (2.2.12)

Raising the temperature increases k roughly exponentially, because a larger fraction of collisions has at least Ea. According to the guide, both the exponential and the straight-line forms appear in the data booklet:

k = A e^(−Ea/RT)

ln k = −(Ea/R)(1/T) + ln A

where T is in kelvin, R = 8.31 J K⁻¹ mol⁻¹ and Ea is in J mol⁻¹.

The linear form matches y = mx + c. Plot **ln k (y) against 1/T (x)**:

- the gradient is **−Ea/R**, so Ea = −gradient × R;
- the y-intercept is **ln A**.

A steeper line means a larger Ea and a k more sensitive to temperature.

## The Arrhenius factor, A (2.2.13)

A, the **Arrhenius factor** (pre-exponential factor), accounts for how often particles collide with the proper orientation. The term e^(−Ea/RT) is the fraction of those collisions with enough energy. A has the **same units as k**.

### Worked example 5: Ea and A from data

A first-order decomposition gives these rate constants:

| T / K | 1/T / K⁻¹ | k / s⁻¹ | ln k |
|---|---|---|---|
| 300 | 3.333 × 10⁻³ | 6.88 × 10⁻³ | −4.979 |
| 310 | 3.226 × 10⁻³ | 1.75 × 10⁻² | −4.046 |
| 320 | 3.125 × 10⁻³ | 4.18 × 10⁻² | −3.175 |
| 330 | 3.030 × 10⁻³ | 9.50 × 10⁻² | −2.354 |

The points lie on a straight line. Use two points far apart on the line:

gradient = (−2.354 − (−4.979)) ÷ (3.030 × 10⁻³ − 3.333 × 10⁻³) = 2.625 ÷ (−3.03 × 10⁻⁴) = −8.66 × 10³ K

Ea = 8.66 × 10³ × 8.31 = 7.20 × 10⁴ J mol⁻¹ = **72.0 kJ mol⁻¹**

ln A = ln k − gradient × (1/T) = −2.354 + 8.66 × 10³ × 3.030 × 10⁻³ = 23.89

A = e^23.89 ≈ **2.4 × 10¹⁰ s⁻¹** (units of a first-order k)

## Common errors

- Using the coefficients in the overall equation as orders.
- Calling an intermediate a transition state, or putting an intermediate at a peak of the profile.
- Ignoring fast steps **before** the RDS when writing the rate equation.
- Using °C, or kJ with R in J, in the Arrhenius equation.
- Reading the gradient of a ln k against 1/T plot as Ea itself, without multiplying by R or fixing the sign.

## Where to go next

Condense it all with the [revision notes](/resources/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-revision-notes/), and then work through the [practice questions](/resources/ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-practice/). Organic mechanisms that this unit links to are in the [Reactivity 3 mechanisms guide](/resources/ib-dp-chemistry-reactivity-3-mechanisms/).

## Official syllabus

Mapped to the *Chemistry guide* for the Diploma Programme (International Baccalaureate, February 2023; first assessment 2025). Scope: the HL-only understandings 2.2.6 to 2.2.13 of Reactivity 2.2, which asks how fast chemical change happens.
