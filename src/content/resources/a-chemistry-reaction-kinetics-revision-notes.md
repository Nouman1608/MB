---
title: "A Level Chemistry: Rate Equations and Catalysis — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Reaction kinetics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 26.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-reaction-kinetics"
    subtopic: "a-simple-rate-equations-orders-of-reaction-and-rate-constants"
  - qualification: "a-level"
    topic: "a-reaction-kinetics"
    subtopic: "a-homogeneous-and-heterogeneous-catalysts"
description: "Condensed recall notes on rate equations, orders of reaction, rate constants and their units, initial rates and half-life methods, mechanisms and rate-determining steps, and homogeneous and heterogeneous catalysis for Cambridge A Level Chemistry 9701 (2025-2027)."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

Condensed for revision. For the full explanation, use the
[Rate Equations and Catalysis study guide](/resources/a-reaction-kinetics-rate-equations-and-catalysis/),
then test yourself with the [practice questions](/resources/a-reaction-kinetics-rate-equations-practice/).
For collision theory, activation energy and the Boltzmann distribution at AS Level, see the
[AS Reaction Kinetics revision notes](/resources/as-chem-kinetics-revision-notes/).

**Syllabus:** Cambridge International AS & A Level Chemistry 9701, 2025–2027, **A Level** content:
subtopics 26.1 Simple rate equations, orders of reaction and rate constants and 26.2 Homogeneous and
heterogeneous catalysts.

## Rate equations, orders and rate constants (26.1)

### Key terms

| Term | Meaning |
|---|---|
| **Rate equation** | rate = k[A]ᵐ[B]ⁿ: links the rate to the concentrations of reactants (found by **experiment**) |
| **Order of reaction** (with respect to a reactant) | the **power** to which that reactant's concentration is raised in the rate equation (m or n: 0, 1 or 2) |
| **Overall order** | the **sum** of the orders, m + n |
| **Rate constant, k** | the proportionality constant in the rate equation; fixed at a given temperature |
| **Half-life, t½** | the time taken for the concentration of a reactant to fall to **half** its value |
| **Rate-determining step** | the **slowest** step in a multi-step mechanism; it controls the overall rate |
| **Intermediate** | a species **formed in one step and used up in a later step**; it is not in the overall equation |

Orders **cannot** be read from the balanced equation; they come only from experimental data.

### Units of k

Rearrange the rate equation: k = rate / ([A]ᵐ[B]ⁿ), with rate in mol dm⁻³ s⁻¹.

| Overall order | Example rate equation | Units of k |
|---|---|---|
| 0 | rate = k | mol dm⁻³ s⁻¹ |
| 1 | rate = k[A] | s⁻¹ |
| 2 | rate = k[A]² or k[A][B] | dm³ mol⁻¹ s⁻¹ |
| 3 | rate = k[A]²[B] | dm⁶ mol⁻² s⁻¹ |

### Graph shapes

| Order in A | Concentration–time graph | Rate–concentration graph |
|---|---|---|
| **0** | straight line, constant negative gradient | horizontal line (rate independent of [A]) |
| **1** | curve with a **constant half-life** | straight line **through the origin** |
| **2** | steeper curve at first; **half-life increases** as [A] falls | upward curve through the origin (rate against [A]² is a straight line) |

- **Initial rate from a concentration–time graph:** draw a **tangent at t = 0** and find its gradient
  (ignore the sign). The rate at any other time is the gradient of the tangent at that time.
  *(Illustrative values.)* A tangent at t = 0 runs from 0.050 mol dm⁻³ to zero at 125 s:

      initial rate = 0.050 / 125 = 4.0 × 10⁻⁴ mol dm⁻³ s⁻¹

- **Initial rate from concentration data over a short time:** rate = change in concentration ÷ time, while
  the change is still small. In a "clock" experiment, a fixed amount reacts each time, so rate ∝ 1/t.
- **Half-life method:** measure successive half-lives on a concentration–time graph. Constant half-lives
  mean **first order**.

### Worked example: initial-rates method

*(Illustrative data.)* For the reaction A + 2B → C + D at a fixed temperature:

| Experiment | [A] / mol dm⁻³ | [B] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|
| 1 | 0.010 | 0.020 | 2.4 × 10⁻⁴ |
| 2 | 0.020 | 0.020 | 4.8 × 10⁻⁴ |
| 3 | 0.020 | 0.040 | 1.92 × 10⁻³ |

1. Experiments 1 → 2: [A] doubles, [B] constant, rate × 2. **First order in A.**
2. Experiments 2 → 3: [B] doubles, [A] constant, rate × 4 (= 2²). **Second order in B.**
3. Rate equation: **rate = k[A][B]²**; overall order 3.
4. Rate constant, using experiment 1:

       k = 2.4 × 10⁻⁴ / (0.010 × 0.020²) = 2.4 × 10⁻⁴ / 4.0 × 10⁻⁶ = 60 dm⁶ mol⁻² s⁻¹

   Check with experiment 3: 1.92 × 10⁻³ / (0.020 × 0.040²) = 1.92 × 10⁻³ / 3.2 × 10⁻⁵ = 60, the same value.
5. Calculate an initial rate: when [A] = 0.030 and [B] = 0.010 mol dm⁻³,
   rate = 60 × 0.030 × 0.010² = 1.8 × 10⁻⁴ mol dm⁻³ s⁻¹.

Note that the order in B (2) happens to match its coefficient here; that is not a rule.

### Half-life of a first-order reaction

- For a **first-order** reaction, t½ is **independent of the starting concentration**: it takes the same
  time to go from 0.80 to 0.40 as from 0.40 to 0.20 mol dm⁻³.

      k = 0.693 / t½          t½ = 0.693 / k

*(Illustrative values.)* A first-order reaction has t½ = 40 s.

    k = 0.693 / 40 = 1.7 × 10⁻² s⁻¹
    starting at 0.80 mol dm⁻³, after 120 s (three half-lives):
    0.80 → 0.40 → 0.20 → 0.10 mol dm⁻³

### Mechanisms and the rate-determining step

**Rules:**

- The rate equation includes the species (and the number of each) that take part in the
  **rate-determining step** or in steps before it. Species that react only **after** the
  rate-determining step are **zero order**.
- The steps of the mechanism must **add up to the overall equation**.
- An **intermediate** is formed and then used up; a **catalyst** is used in one step and **reformed** in a
  later step, and may appear in the rate equation.

**Example 1:** NO₂ + CO → NO + CO₂, with rate = k[NO₂]².

    step 1 (slow):  NO₂ + NO₂ → NO₃ + NO
    step 2 (fast):  NO₃ + CO  → NO₂ + CO₂

Two NO₂ are in the slow step, so the reaction is second order in NO₂ and zero order in CO. NO₃ is an
intermediate. The steps add up to the overall equation.

**Example 2:** hydrolysis of 2-bromo-2-methylpropane, rate = k[(CH₃)₃CBr].

    step 1 (slow):  (CH₃)₃CBr → (CH₃)₃C⁺ + Br⁻
    step 2 (fast):  (CH₃)₃C⁺ + OH⁻ → (CH₃)₃COH

Only (CH₃)₃CBr is in the slow step, so the reaction is zero order in OH⁻. The carbocation is an
intermediate.

**Example 3:** iodination of propanone in acid, CH₃COCH₃ + I₂ → CH₃COCH₂I + HI, has
rate = k[CH₃COCH₃][H⁺]. I₂ is **zero order**, so it reacts only after the rate-determining step. H⁺
appears in the rate equation but not in the overall equation: it is a **catalyst**.

### Effect of temperature on k

- Raising the temperature **increases k**, so the **rate increases** (concentrations and orders stay the
  same).
- Reason: a larger proportion of molecules have energy **greater than or equal to the activation energy**,
  and collisions are more frequent, so there are more successful collisions per unit time.
- k is constant only **at a fixed temperature**; always quote the temperature with a k value.

## Homogeneous and heterogeneous catalysts (26.2)

| Type | Meaning | Mode of action |
|---|---|---|
| **Heterogeneous** | catalyst in a **different phase** from the reactants (usually a solid with gases) | reaction on the catalyst **surface** |
| **Homogeneous** | catalyst in the **same phase** as the reactants | **used in one step and reformed in a later step** |

Both provide an **alternative route with a lower activation energy**.

### Heterogeneous catalysis

1. **Adsorption:** reactant molecules are **adsorbed** onto **active sites** on the surface.
2. **Bond weakening:** bonds within the adsorbed reactant molecules are weakened (and reactants are held
   close together in a suitable orientation), so they react more easily.
3. **Desorption:** the product molecules leave the surface, freeing the active sites.

**Examples:**

- **Iron in the Haber process:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g). N₂ and H₂ adsorb on the iron surface, the
  strong N≡N bond is weakened, and NH₃ desorbs.
- **Catalytic converters:** **platinum, palladium and rhodium** on a ceramic support catalyse removal of
  oxides of nitrogen from car exhaust gases, for example:

      2CO + 2NO   → 2CO₂ + N₂
      4CO + 2NO₂ → 4CO₂ + N₂

### Homogeneous catalysis

**Atmospheric oxides of nitrogen in the oxidation of atmospheric sulfur dioxide:**

    SO₂ + NO₂    → SO₃ + NO
    NO  + ½O₂    → NO₂
    overall: SO₂ + ½O₂ → SO₃

NO₂ is used in the first step and reformed in the second, so it is the catalyst; NO is an intermediate.
The SO₃ then forms sulfuric acid in rain (SO₃ + H₂O → H₂SO₄), contributing to acid rain.

**Fe²⁺ or Fe³⁺ in the I⁻ / S₂O₈²⁻ reaction:**

    overall:  S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂

The uncatalysed reaction is slow: both reactants are **negative ions**, so they repel and the activation
energy is high. With Fe²⁺ each step is between **oppositely charged** ions:

    step 1:  S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺
    step 2:  2Fe³⁺ + 2I⁻    → 2Fe²⁺ + I₂

If Fe³⁺ is added instead, step 2 happens first and then step 1; either ion works because iron can change
between the +2 and +3 oxidation states. Both steps are feasible because E⦵ for Fe³⁺/Fe²⁺ (+0.77 V) lies
between E⦵ for I₂/I⁻ (+0.54 V) and E⦵ for S₂O₈²⁻/SO₄²⁻ (+2.01 V).

## Exam traps

- Never take orders from the coefficients of the balanced equation; use the data.
- Units of k change with overall order: first order is **s⁻¹**, second order **dm³ mol⁻¹ s⁻¹**.
- A zero-order reactant still takes part in the reaction; it reacts **after** the rate-determining step.
- Constant half-life proves **first** order; t½ = 0.693/k applies **only** to first-order reactions.
- Temperature changes **k**; concentration changes the **rate** but not k.
- A catalyst is **reformed** at the end; an intermediate is **formed then used up**. Do not mix them up.
- Heterogeneous catalysis: say **adsorption**, not "absorption", and include **desorption** of products.

## Self-test

1. Define the order of reaction with respect to a reactant.
2. Give the units of k for rate = k[A]².
3. Describe the rate–concentration graph for a reactant that is first order.
4. *(Illustrative data.)* Experiment 1: [X] = 0.10, [Y] = 0.10 mol dm⁻³, initial rate 3.0 × 10⁻⁵ mol dm⁻³ s⁻¹.
   Experiment 2: [X] = 0.30, [Y] = 0.10, rate 9.0 × 10⁻⁵. Experiment 3: [X] = 0.30, [Y] = 0.20,
   rate 9.0 × 10⁻⁵. Deduce the rate equation and calculate k with units.
5. A first-order reaction has a half-life of 25 s. Calculate k.
6. The concentration of a first-order reactant is 0.60 mol dm⁻³ and t½ = 30 min. What is its
   concentration after 90 min?
7. A reaction A + 2B → D has the mechanism: A + B → C (slow); C + B → D (fast). Deduce the rate equation
   and name the intermediate.
8. Describe and explain the effect of raising the temperature on the rate constant.
9. Describe how iron catalyses the Haber process.
10. Write two equations to show how Fe³⁺ catalyses the reaction between S₂O₈²⁻ and I⁻.

**Answers:**

1. The power to which the concentration of that reactant is raised in the rate equation.
2. dm³ mol⁻¹ s⁻¹.
3. A straight line through the origin: rate is proportional to concentration.
4. Tripling [X] triples the rate: first order in X. Doubling [Y] leaves the rate unchanged: zero order in Y.
   rate = k[X]; k = 3.0 × 10⁻⁵ / 0.10 = 3.0 × 10⁻⁴ s⁻¹.
5. k = 0.693 / 25 = 2.8 × 10⁻² s⁻¹.
6. 90 min is three half-lives: 0.60 → 0.30 → 0.15 → 0.075 mol dm⁻³.
7. rate = k[A][B] (one A and one B in the slow step); C is the intermediate.
8. k increases (so the rate increases): more molecules have energy at least equal to the activation
   energy, so there are more successful collisions per unit time.
9. N₂ and H₂ are adsorbed onto the iron surface; bonds in the reactants (especially N≡N) are weakened so
   they react; NH₃ is desorbed, freeing the surface.
10. 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂, then S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺.

*These are original notes written for revision. Rate data and rate constants marked illustrative are not
data-book values. Check the full syllabus wording in the
[official 9701 syllabus](https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf).*
