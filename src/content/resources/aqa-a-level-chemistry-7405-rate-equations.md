---
title: "AQA A-Level Chemistry (7405): Rate equations"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Rate equations"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "rate-equations-7405"
    subtopic: "rate-equations-subtopic-7405"
description: "AQA 7405 rate equations in depth: orders and the rate constant, deriving units, rate calculations, effects of concentration changes, and the Arrhenius equation with ln k against 1/T graphs."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.9.1 Rate equations** of the AQA A-level Chemistry specification (7405), for teaching from September 2015. It is A-level only content, examined on Paper 2 (and Paper 3). The rate equation links the rate of a reaction to the concentrations of the reactants. The specification asks you to define order and rate constant, to calculate with the rate equation, to explain how temperature affects k, and to use the Arrhenius equation k = Ae^(−Eₐ/RT) in its logarithmic form. The next subtopic covers how the equation is found from experiments. The [Rate equations study guide](/resources/aqa-a-level-chemistry-rate-equations/) covers the whole topic. Questions are in the [Rate equations practice questions](/resources/aqa-a-level-chemistry-7405-rate-equations-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| Rate = k[A]ᵐ[B]ⁿ, where m and n are orders with respect to A and B and k is the rate constant | Write and use rate equations |
| Orders m and n are restricted to 0, 1 and 2 | Recognise the three cases |
| k varies with temperature according to k = Ae^(−Eₐ/RT) | Use the Arrhenius equation (given in the exam, with R) |
| Define order of reaction and rate constant | Give precise definitions |
| Perform calculations with the rate equation | Find rate, k or a concentration |
| Explain the qualitative effect of temperature on k | Link to the Maxwell–Boltzmann distribution |
| Perform calculations with k = Ae^(−Eₐ/RT); rearrange to ln k = −Eₐ/RT + ln A and plot a straight line of slope −Eₐ/R | Calculate Eₐ from data |

## The rate equation

For a reaction involving A and B, an experiment may show that

```
rate = k [A]ᵐ [B]ⁿ
```

- **Rate** is in mol dm⁻³ s⁻¹.
- [A] and [B] are concentrations in mol dm⁻³.
- m and n are the **orders** with respect to A and B.
- k is the **rate constant**.

The orders are found by experiment. They are **not** the coefficients in the balanced equation.

### Order of reaction

**The order with respect to a reactant is the power to which its concentration is raised in the rate equation.** It shows how the rate depends on the concentration of that reactant.

| Order | Effect of doubling [A] | Rate–concentration graph |
|---|---|---|
| 0 | No effect on the rate | Horizontal line |
| 1 | Rate doubles | Straight line through the origin |
| 2 | Rate increases by a factor of four | Curve (upward) |

The **overall order** is the sum of the individual orders, m + n.

### The rate constant

**The rate constant, k, is the constant of proportionality in the rate equation.** It has a fixed value for a given reaction at a given temperature. Its units depend on the overall order.

### Units of k

Rearrange the rate equation to make k the subject, then substitute units.

| Overall order | Rate equation | k = rate ÷ concentrations | Units of k |
|---|---|---|---|
| 0 | rate = k | mol dm⁻³ s⁻¹ | mol dm⁻³ s⁻¹ |
| 1 | rate = k[A] | (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³) | s⁻¹ |
| 2 | rate = k[A][B] or k[A]² | (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)² | mol⁻¹ dm³ s⁻¹ |
| 3 | rate = k[A]²[B] | (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)³ | mol⁻² dm⁶ s⁻¹ |

## Calculations with the rate equation

### Worked example 1: finding k

For a reaction rate = k[A]²[B]. When [A] = 0.20 mol dm⁻³ and [B] = 0.10 mol dm⁻³, the rate is 3.6 × 10⁻⁴ mol dm⁻³ s⁻¹. Calculate k, with units.

```
k = rate ÷ ([A]²[B]) = 3.6 × 10⁻⁴ ÷ (0.20² × 0.10)
  = 3.6 × 10⁻⁴ ÷ 4.0 × 10⁻³ = 0.090
units: mol dm⁻³ s⁻¹ ÷ (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹
k = 0.090 mol⁻² dm⁶ s⁻¹
```

### Worked example 2: finding the rate

Using the value of k above, calculate the rate when [A] = 0.40 and [B] = 0.050 mol dm⁻³.

```
rate = 0.090 × 0.40² × 0.050 = 0.090 × 0.16 × 0.050 = 7.2 × 10⁻⁴ mol dm⁻³ s⁻¹
```

### Worked example 3: effect of changing concentrations

For rate = k[A][B]², what happens to the rate when [A] is doubled and [B] is halved?

```
new rate ÷ old rate = (2) × (½)² = 2 × ¼ = ½
```

The rate is halved. The rate constant does not change, because only the temperature affects k.

### Worked example 4: finding a concentration

For a first-order reaction rate = k[A] with k = 0.025 s⁻¹, the rate is 1.5 × 10⁻³ mol dm⁻³ s⁻¹. Find [A].

```
[A] = rate ÷ k = 1.5 × 10⁻³ ÷ 0.025 = 0.060 mol dm⁻³
```

## Temperature and the rate constant

When the temperature increases, **k increases**. The rate constant contains the effect of the temperature on the proportion of collisions with enough energy. As a result, the rate at a given set of concentrations rises. The orders do not change.

This is seen in the Maxwell–Boltzmann distribution: a higher temperature gives a larger proportion of molecules with energy of at least Eₐ. Because the reaction needs this energy, k is larger.

### The Arrhenius equation

```
k = A e^(−Eₐ/RT)
```

- A is the **Arrhenius constant** (a frequency factor, with the same units as k).
- Eₐ is the activation energy in **J mol⁻¹**.
- R is the gas constant, 8.31 J K⁻¹ mol⁻¹.
- T is the temperature in K.

The equation and R are given in the exam. The term e^(−Eₐ/RT) is a measure of the fraction of molecules with energy at least Eₐ.

### Worked example 5: calculating k

A = 1.0 × 10¹⁰ s⁻¹, Eₐ = 50.0 kJ mol⁻¹. Calculate k at 300 K.

```
Eₐ = 50 000 J mol⁻¹
Eₐ ÷ RT = 50 000 ÷ (8.31 × 300) = 20.06
k = 1.0 × 10¹⁰ × e^(−20.06) = 1.0 × 10¹⁰ × 1.95 × 10⁻⁹ = 19.5 s⁻¹
```

Check by calculating k at 310 K: Eₐ ÷ RT = 19.41, k = 37.2 s⁻¹. A 10 K rise has nearly doubled k.

### The logarithmic form

Taking natural logarithms of k = Ae^(−Eₐ/RT):

```
ln k = −(Eₐ/R) × (1/T) + ln A
```

This is the equation of a straight line y = mx + c, with y = ln k and x = 1/T. So a plot of **ln k against 1/T** is a straight line with

- **gradient = −Eₐ/R**
- **intercept on the ln k axis = ln A**

### Worked example 6: finding Eₐ from data

| T / K | 300 | 320 | 340 |
|---|---|---|---|
| k / s⁻¹ | 19.5 | 68.3 | 206 |
| 1/T / K⁻¹ | 3.333 × 10⁻³ | 3.125 × 10⁻³ | 2.941 × 10⁻³ |
| ln k | 2.970 | 4.223 | 5.328 |

```
gradient = (5.328 − 2.970) ÷ (2.941 × 10⁻³ − 3.333 × 10⁻³)
         = 2.358 ÷ (−3.92 × 10⁻⁴) = −6016 K
Eₐ = −gradient × R = 6016 × 8.31 = 50 000 J mol⁻¹ = 50.0 kJ mol⁻¹
```

The steps are: plot or use two well-separated points, find the gradient, multiply by −R, and convert J to kJ if the answer is wanted in kJ mol⁻¹. The intercept gives ln A.

## Common mistakes

- Taking orders from the balanced equation.
- Writing units for k that do not match the overall order.
- Using Eₐ in kJ mol⁻¹ in the Arrhenius equation (it must be J mol⁻¹).
- Using °C instead of K.
- Reading the gradient as +Eₐ/R instead of −Eₐ/R.
- Using log₁₀ instead of ln.
- Saying that k depends on the concentrations.
- Saying that k changes when concentrations change.

## Exam technique for the command words

- **Define** order: "the power to which the concentration of a reactant is raised in the rate equation".
- **Calculate k**: rearrange, substitute, then derive the units.
- **Explain** the effect of temperature on k: a greater proportion of molecules has energy at least equal to Eₐ.
- **Determine** Eₐ: calculate the gradient of a ln k against 1/T line and multiply by −R.

## Frequently asked questions

**Can the order be 3 or a fraction?**
In this specification the orders are 0, 1 or 2.

**Does the rate constant change when I double the concentration?**
No. Only temperature changes k.

**Why does a zero-order reactant not affect the rate?**
Its concentration does not appear in the rate equation, so changing it has no effect on the rate.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.9.1 Rate equations.
