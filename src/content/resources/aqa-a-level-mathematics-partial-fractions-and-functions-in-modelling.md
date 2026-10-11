---
title: "AQA A-level Mathematics: Partial Fractions and Functions in Modelling (7357)"
seoTitle: "AQA A-Level Maths Partial Fractions and Modelling Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Partial Fractions and Functions in Modelling"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b10-partial-fractions-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b11-functions-in-modelling-aqa-alevel-maths"
description: "Study guide to partial fractions and functions in modelling for AQA A-level Mathematics: B10 and B11, with fully worked examples and common errors."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches **B10 (partial fractions)** and **B11 (functions in modelling)** from Section B of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Section B is Paper 1 content, and Papers 2 and 3 can also assess any Paper 1 content. The specification states that a calculator is required in all assessments, but decompositions and "show that" steps need full algebra written down.

Use it with the [revision notes](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-revision-notes/) and the [practice questions](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-practice/). Course links: [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and [printable checklist](/checklists/aqa/a-level/mathematics/). To find weak spots first, take a free 10-minute test from [/diagnostics/](/diagnostics/). Related pages: [Integration](/resources/aqa-a-level-mathematics-integration/) (partial fractions are used in H6), [Exponentials and logarithms](/resources/aqa-a-level-mathematics-exponentials-and-logarithms/) and [Overarching themes](/resources/aqa-a-level-mathematics-overarching-themes/) (OT3 modelling).

## What this unit covers

| Ref | What the specification says | Where in this guide |
|---|---|---|
| B10 | Decompose rational functions into partial fractions (denominators not more complicated than squared linear terms and with no more than 3 terms, numerators constant or linear) | Part 1 |
| B11 | Use functions as models of real situations, and weigh up each model's limitations and possible refinements | Part 2 |
| OT3.1 to OT3.5 | Translate a situation into a model, use it, interpret outputs, refine it, state assumptions | Part 2 |

## Part 1: B10 Partial fractions

A rational function is one polynomial divided by another. Partial fractions reverse the adding of fractions: you split one fraction into simpler ones whose denominators are the factors of the original.

In scope, the numerator is constant or linear and the denominator is made of linear factors: at most three terms, with squared linear terms the most complicated case. The forms are:

| Denominator | Form of the decomposition |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)² | A/(ax + b) + B/(ax + b)² |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |

### Method in four steps

1. Factorise the denominator fully.
2. Write the form from the table with unknown constants.
3. Multiply both sides by the denominator, giving an identity (≡) with no fractions.
4. Find the constants by substituting convenient values of x, by comparing coefficients, or both. Then check.

Substituting the value that makes a factor zero is often called the cover-up method. It is quick for distinct linear factors. For a repeated factor it finds only some constants, so finish with another value of x or with coefficients.

**Worked example 1 (two distinct factors).** Express (8x + 1)/((x − 3)(x + 2)) in partial fractions.

```
(8x + 1)/((x − 3)(x + 2)) ≡ A/(x − 3) + B/(x + 2)
8x + 1 ≡ A(x + 2) + B(x − 3)
x = 3:   25 = 5A   → A = 5
x = −2: −15 = −5B  → B = 3
Result: 5/(x − 3) + 3/(x + 2)
```

Check with x = 0: left side is 1/(−6). Right side is 5/(−3) + 3/2 = −10/6 + 9/6 = −1/6. They agree.

**Worked example 2 (a factor with coefficient).** Express (7x − 1)/((2x + 1)(x − 1)) in partial fractions.

```
7x − 1 ≡ A(x − 1) + B(2x + 1)
x = 1:      6 = 3B           → B = 2
x = −1/2:  −9/2 = A(−3/2)   → A = 3
Result: 3/(2x + 1) + 2/(x − 1)
```

Substitute x = −1/2 because it makes 2x + 1 zero.

**Worked example 3 (factorise first).** Express (x + 7)/(x² − x − 6) in partial fractions.

```
x² − x − 6 = (x − 3)(x + 2)
x + 7 ≡ A(x + 2) + B(x − 3)
x = 3: 10 = 5A  → A = 2
x = −2: 5 = −5B → B = −1
Result: 2/(x − 3) − 1/(x + 2)
```

**Worked example 4 (three linear factors).** Express (7x + 6)/(x(x − 2)(x + 3)) in partial fractions.

```
7x + 6 ≡ A(x − 2)(x + 3) + Bx(x + 3) + Cx(x − 2)
x = 0:   6 = A(−2)(3)      → A = −1
x = 2:  20 = B(2)(5)       → B = 2
x = −3: −15 = C(−3)(−5)    → C = −1
Result: −1/x + 2/(x − 2) − 1/(x + 3)
```

**Worked example 5 (repeated factor).** Express (4x − 5)/((x + 1)(x − 2)²) in partial fractions.

```
4x − 5 ≡ A(x − 2)² + B(x + 1)(x − 2) + C(x + 1)
x = −1: −9 = 9A     → A = −1
x = 2:   3 = 3C     → C = 1
Compare x² coefficients: 0 = A + B  → B = 1
Result: −1/(x + 1) + 1/(x − 2) + 1/(x − 2)²
```

Check with x = 0: left side is −5/4. Right side is −1 − 1/2 + 1/4 = −5/4. Correct.

The repeated factor needs both A/(x − 2) and C/(x − 2)². Leaving out the first power is a common slip.

**Worked example 6 (finding unknown constants).** Given that (cx + d)/((x + 1)(x + 3)) ≡ 2/(x + 1) + 1/(x + 3), find c and d.

Combine the right side: 2(x + 3) + 1(x + 1) = 3x + 7. So c = 3 and d = 7. This reverse direction is just adding fractions, so no substitution is needed.

**Worked example 7 (constant numerator).** Express 9/((x − 1)(x + 2)) in partial fractions. Here 9 ≡ A(x + 2) + B(x − 1). Then x = 1 gives A = 3 and x = −2 gives B = −3, so the result is 3/(x − 1) − 3/(x + 2).

### Why decompose

Each piece is easier to handle, and the pieces can be integrated (H6). Part 2 shows a modelling use.

## Part 2: B11 Functions in modelling

B11 asks you to use functions as models of real situations, and to judge how far each model can be trusted. OT3 in the specification describes the full cycle: translate a situation into a model with simplifying assumptions, use the model with suitable inputs, interpret the outputs in context, and refine the model by considering its outputs and assumptions.

### Choosing a function family

| Situation | Typical function | Features to watch |
|---|---|---|
| Constant rate of change | Linear: y = mx + c | Unbounded; gradient is the rate |
| Rises then falls, or has a best value | Quadratic | Symmetric; vertex gives the maximum or minimum |
| Growth or decay to a limit | A − Be^(−kt) | Horizontal asymptote A; never exactly reaches it |
| Repeating cycle | a + b sin(kt) or a + b cos(kt) | Fixed period and amplitude |
| Different rules in different ranges | Piecewise | Check values at the joins |
| Quantity shared between two terms | Rational function | Behaviour for large input; undefined values |

### Using a model: inputs, outputs, interpretation

Write answers in context with units. Always check the domain: a model for a physical quantity may only make sense for some inputs.

**Worked example 8 (quadratic).** A club sells tickets at £x each. Attendance is modelled as 40 − 2x, and fixed costs are £72. So profit in pounds is P = x(40 − 2x) − 72 = −2x² + 40x − 72.

```
P = −2(x − 2)(x − 18)
Profit is positive for 2 < x < 18.
Vertex at x = 10:  P = −200 + 400 − 72 = 128
```

The model suggests a £10 ticket gives the largest profit, £128. The attendance model gives zero people at x = 20, so the model only makes sense for 0 ≤ x ≤ 20. At x = 0 it gives P = −72, the fixed cost, which is sensible.

Limitation: demand is assumed to fall in a straight line with price, and costs per person are ignored. Refinement: collect attendance at several prices and fit a different demand function, and add a cost per attendee.

**Worked example 9 (growth to a limit).** The charge B% of a battery after t hours is modelled by B = 100 − 85e^(−0.5t).

```
t = 0: B = 100 − 85 = 15          (initial charge 15%)
t = 3: B = 100 − 85e^(−1.5) = 81.0   (3 s.f.)
B = 90:  85e^(−0.5t) = 10
         e^(−0.5t) = 2/17
         t = 2 ln(8.5) = 4.28 hours   (3 s.f.)
```

As t grows, e^(−0.5t) tends to 0, so B tends to 100. That fits the context, since a charge cannot exceed 100%. Limitation: B never equals 100, while a real battery stops at full. Refinement: use one function for each stage of charging.

**Worked example 10 (piecewise).** A courier charges C pounds for a parcel of w kg: £4.50 up to 2 kg, then £1.20 per extra kg up to 10 kg, then £0.90 per extra kg.

```
7 kg:   C = 4.50 + 1.20(5) = 10.50
10 kg:  C = 4.50 + 1.20(8) = 14.10
15 kg:  C = 14.10 + 0.90(5) = 18.60
C = 23.10: 14.10 + 0.90(w − 10) = 23.10 → w = 20
```

Check the join at 10 kg: both rules give 14.10, so the model has no jump. Limitation: real price lists use weight bands.

**Worked example 11 (periodic).** Tide depth in metres is modelled by h = 5.2 + 1.8 sin(30t)°, where t is hours after midnight. A boat needs at least 4 m.

```
Maximum 5.2 + 1.8 = 7.0 m;  minimum 5.2 − 1.8 = 3.4 m;  period 360/30 = 12 h
h = 4:  sin(30t)° = −2/3
        30t = 180 + 41.81 = 221.81   or   360 − 41.81 = 318.19
        t = 7.39  or  10.61
```

Depth is below 4 m for 3.21 hours, roughly from 07:24 to 10:36. Limitation: a 12-hour period repeats exactly, but real tides have a longer cycle and change in size through the month. Refinement: add a second sine term or change the period.

### Judging a model against data

Compare predicted and observed values, and report error relative to the size of the observation.

**Worked example 12.** A gym models its membership as M = 120 + 17.5t, where t is months since opening. Records give 120, 150, 185, 225 at t = 0, 2, 4, 6. The model gives 120, 155, 190, 225. It is within five members across the observed range, so it suits interpolation: t = 5 gives 207.5. Extrapolating to t = 36 gives 750, which is not believable if the building holds 400. Refinement: use a function that approaches a limit.

### Limitations and refinements: a checklist

- **Assumptions:** list each one and say how the real world differs.
- **Domain:** state the inputs for which the model works.
- **Extrapolation:** predictions outside the data range are weaker than those inside it.
- **Long-term behaviour:** does it grow without limit, or go negative when it should not?
- **Refinement:** name a specific change, such as a limit, a second term, a piecewise rule or extra data.

**Worked example 13 (partial fractions inside a model).** A drug concentration in mg/l is modelled by C = (18t + 24)/((t + 1)(t + 3)), for t ≥ 0 hours.

```
18t + 24 ≡ A(t + 3) + B(t + 1)
t = −1: 6 = 2A    → A = 3
t = −3: −30 = −2B → B = 15
C = 3/(t + 1) + 15/(t + 3)
```

At t = 0, C = 3 + 5 = 8 mg/l. Both terms tend to 0 as t grows, so C tends to 0, which fits a drug leaving the body. To find when C = 2:

```
18t + 24 = 2(t² + 4t + 3)
t² − 5t − 9 = 0
t = (5 + √61)/2 = 6.41 hours   (reject the negative root)
```

Limitation: the model starts at its largest value, but a drug taken by mouth would first rise as it is absorbed. Refinement: use a function that starts at 0.

## Common errors

- Skipping the factorising step, or leaving a quadratic denominator unfactorised.
- Writing only A/(x − 2)² for a repeated factor and omitting A/(x − 2).
- Substituting a value into the wrong identity, or forgetting that the identity has no fractions left.
- Giving A/(x + 1/2) when the factor is 2x + 1.
- Reporting a modelling answer without units or without a sentence in context.
- Calling a model "inaccurate" without naming the assumption that fails.
- Extrapolating far beyond the data and accepting the result without comment.

## Next steps

Try the [practice questions](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-practice/), then keep the [revision notes](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-revision-notes/) for the final weeks.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), A-level exams June 2018 onwards, published by AQA. Section B10 and B11 and overarching theme OT3 are the sources for this page.
