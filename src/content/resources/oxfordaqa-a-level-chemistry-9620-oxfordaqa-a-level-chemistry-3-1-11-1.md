---
title: "OxfordAQA A-Level Chemistry (9620): Rate equations"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Rate equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-rate-equations"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-11-1"
description: "OxfordAQA 9620 study guide to 3.1.11.1: orders and the rate constant, units of k, rate calculations, temperature and k, and the Arrhenius equation."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.1.11.1 Rate equations** from the OxfordAQA International AS and A-level Chemistry (9620) specification. The specification gives the rate equation in the form Rate = k[A]^m[B]^n, where m and n are the orders with respect to A and B and k is the rate constant; the orders are "restricted to the values 0, 1, and 2". It also gives k = Ae^(−Ea/RT) and its log form. You must be able to define order of reaction and rate constant, perform calculations using the rate equation, explain the qualitative effect of temperature on k, calculate with the Arrhenius equation, and use ln k = −Ea/RT + ln A with experimental data to plot a straight line of slope −Ea/R. The specification states that these equations and the gas constant R will be given when required. This is International A2 content (**International A-level only**), assessed in Unit 4.

For section 3.1.11 as a whole, including how orders are found by experiment, see the [rate equations study guide](/resources/oxfordaqa-a-level-chemistry-rate-equations/). This page concentrates on using the rate equation and the Arrhenius equation once the orders are known. Afterwards, use the [rate equations revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-1-revision-notes/) and the [rate equations practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-1-practice/). The next point, [determination of rate equation](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-2/), covers deducing orders from data.

## The definitions you must be able to give

- **Rate of reaction**: the change in concentration of a reactant or product per unit time, usually in mol dm⁻³ s⁻¹.
- **Order with respect to a reactant**: the power to which the concentration of that reactant is raised in the rate equation.
- **Overall order**: the sum of the orders with respect to each reactant (m + n).
- **Rate constant, k**: the constant of proportionality in the rate equation, linking the rate to the concentration terms. It has a fixed value for a given reaction at a given temperature.

Each phrase matters. "The power in the rate equation" earns the mark for order; "the number in the balanced equation" does not, because orders are found by experiment and need not match the stoichiometry.

## What each order means

The order tells you how the rate responds when one concentration changes and everything else stays the same.

| Order | Concentration × 2 | Concentration × 3 | Concentration × 0.5 |
|---|---|---|---|
| 0 | rate × 1 | rate × 1 | rate × 1 |
| 1 | rate × 2 | rate × 3 | rate × 0.5 |
| 2 | rate × 4 | rate × 9 | rate × 0.25 |

When several concentrations change at once, **multiply** the separate factors.

## Units of the rate constant

Rearrange the rate equation for k, substitute units and cancel. A quick rule: with overall order *x*, the units of k are mol^(1−x) dm^(3x−3) s⁻¹.

| Overall order | Example rate equation | Units of k |
|---|---|---|
| 0 | Rate = k | mol dm⁻³ s⁻¹ |
| 1 | Rate = k[A] | s⁻¹ |
| 2 | Rate = k[A][B] | mol⁻¹ dm³ s⁻¹ |
| 3 | Rate = k[A][B]² | mol⁻² dm⁶ s⁻¹ |
| 4 | Rate = k[A]²[B]² | mol⁻³ dm⁹ s⁻¹ |

The pre-exponential factor A in the Arrhenius equation always has the **same units as k**, because the exponential term has no units.

## Calculations with the rate equation

### Worked example 1: rate, then a change of conditions

For the reaction X + 2Y → products, Rate = k[X][Y]², with k = 0.36 mol⁻² dm⁶ s⁻¹ at 298 K (an illustrative value).

(a) Calculate the rate when [X] = 0.040 mol dm⁻³ and [Y] = 0.025 mol dm⁻³.

```
Rate = 0.36 × 0.040 × (0.025)² = 9.0 × 10⁻⁶ mol dm⁻³ s⁻¹
```

(b) [X] is tripled and [Y] is halved at the same temperature. Find the new rate.

```
factor = 3 × (0.5)² = 0.75
new rate = 0.75 × 9.0 × 10⁻⁶ = 6.8 × 10⁻⁶ mol dm⁻³ s⁻¹
```

(c) An equal volume of water is added to the original mixture. Find the rate.

```
both concentrations halve: factor = 0.5 × (0.5)² = 0.125
new rate = 1.1 × 10⁻⁶ mol dm⁻³ s⁻¹
```

In every part k stays at 0.36 mol⁻² dm⁶ s⁻¹: only the temperature changes k.

## Temperature and the rate constant

Raising the temperature **increases k**, so the rate rises even though the concentrations are unchanged. The explanation, in terms of the collision theory from 3.1.6, is that at a higher temperature a greater proportion of molecules have energy equal to or greater than the activation energy, so a greater proportion of collisions lead to reaction.

The Arrhenius equation puts numbers on this:

```
k = Ae^(−Ea/RT)
```

- Ea must be in **J mol⁻¹** because R = 8.31 J K⁻¹ mol⁻¹.
- T must be in **kelvin**.
- −Ea/RT is always negative; a larger T makes it less negative, so e^(−Ea/RT) and k get larger.
- A larger Ea makes k more sensitive to temperature.

### Worked example 2: how much faster for a 10 K rise?

A reaction has Ea = 50.0 kJ mol⁻¹. By what factor does k increase from 298 K to 308 K? Assume A is constant.

Write the Arrhenius equation at each temperature and divide one by the other, so that A cancels:

```
k₂ / k₁ = e^(−Ea/RT₂) / e^(−Ea/RT₁) = e^[(Ea/R)(1/T₁ − 1/T₂)]
(Ea/R)(1/T₁ − 1/T₂) = (50 000 / 8.31) × (1/298 − 1/308) = 0.656
k₂ / k₁ = e^0.656 = 1.93
```

The rate constant nearly doubles. With Ea = 100 kJ mol⁻¹, the same 10 K rise multiplies k by 3.71.

### Worked example 3: activation energy and A from two rate constants

A first-order reaction has k = 3.2 × 10⁻⁴ s⁻¹ at 300 K and k = 2.9 × 10⁻³ s⁻¹ at 325 K. Calculate Ea and A.

Subtract the log form at the two temperatures:

```
ln k₂ − ln k₁ = (Ea/R)(1/T₁ − 1/T₂)
ln(2.9 × 10⁻³ / 3.2 × 10⁻⁴) = 2.204
1/300 − 1/325 = 2.564 × 10⁻⁴ K⁻¹
Ea = 8.31 × 2.204 / 2.564 × 10⁻⁴ = 7.14 × 10⁴ J mol⁻¹ = 71.4 kJ mol⁻¹
```

Then rearrange k = Ae^(−Ea/RT) for A, using either temperature:

```
A = k × e^(Ea/RT) = 3.2 × 10⁻⁴ × e^(71 400 / (8.31 × 300)) = 8.9 × 10⁸ s⁻¹
```

Using the 325 K data gives the same value, which is a useful check.

## Using the straight-line form

```
ln k = −Ea/RT + ln A
```

Compare with y = mx + c: plot **ln k on the y-axis against 1/T on the x-axis**. The gradient is **−Ea/R** and the y-intercept is **ln A**.

### Worked example 4: from a gradient to Ea

A student plots ln k against 1/T and draws a line of best fit with gradient −6.50 × 10³ K.

```
−Ea/R = −6.50 × 10³ K
Ea = 6.50 × 10³ × 8.31 = 5.40 × 10⁴ J mol⁻¹ = 54.0 kJ mol⁻¹
```

Graph technique that earns marks:

- Calculate 1/T in K⁻¹ (values near 3 × 10⁻³) and ln k to at least three decimal places.
- Use a line of best fit, not the two end data points, and read a large triangle for the gradient.
- Check the sign: the gradient is negative, and Ea comes out positive.
- The intercept is usually far off the plotted region, so find ln A by substituting one point on the line.

### Worked example 5: effect of a catalyst

A catalyst lowers Ea from 80.0 to 60.0 kJ mol⁻¹ at 310 K. Assuming A is unchanged, the rate constants are in the ratio

```
k(cat) / k(uncat) = e^[(80 000 − 60 000) / (8.31 × 310)] = e^7.76 = 2.4 × 10³
```

## Common mistakes

- Using Ea in kJ mol⁻¹ with R in J K⁻¹ mol⁻¹, or T in °C.
- Saying that increasing concentration increases k.
- Adding the order factors instead of multiplying them.
- Defining order by reference to the balanced equation.
- Giving units of k without negative powers, such as "dm³ mol s⁻¹".
- Taking the gradient of an Arrhenius plot as +Ea/R and quoting a negative activation energy.

## Exam technique

- **"Define"**: use the wording above; a definition of k must mention the rate equation.
- **"Calculate"** with Arrhenius: write the rearranged equation first, then substitute, so a slip in arithmetic still earns method marks.
- **"Deduce the units of k"**: show the cancelling, not just the answer.
- **"Explain the effect of temperature on k"**: link the increase in k to the larger proportion of molecules with at least Ea.

## More on this topic

Condense this with the [rate equations revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-1-revision-notes/), then try the [rate equations practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-1-practice/). Move on to [determination of rate equation](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-11-2/) to find orders from experimental data.
