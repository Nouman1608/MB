---
title: "Cambridge A Level Mathematics (9709): Differential equations (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.8
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differential-equations-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Paper 3 section 3.8: forming rate equations, separating variables, particular solutions and interpreting models in context."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.8 Differential equations** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) solves one draining-tank model. This page works through all four syllabus statements with models of different kinds, including ones that need partial fractions, and shows how to turn words into an equation and an answer back into words. Afterwards use the [3.8 revision notes](/resources/cambridge-a-level-mathematics-9709-differential-equations-revision-notes/) and the [3.8 practice questions](/resources/cambridge-a-level-mathematics-9709-differential-equations-practice/).

## What section 3.8 asks for

| Syllabus statement | Notes from the syllabus |
|---|---|
| Formulate a simple statement involving a rate of change as a differential equation | Introducing and evaluating a constant of proportionality is included |
| Find by integration a general form of solution for a first order equation in which the variables are separable | Any of the integration techniques from 3.5 may be needed |
| Use an initial condition to find a particular solution | |
| Interpret the solution in the context of the problem being modelled | No specialised knowledge of the context is required |

Only first order, separable equations are in the syllabus. Because 3.5 techniques can appear, a differential equations question is often also a test of partial fractions, integration by parts or a standard integral.

## From words to an equation

| Words | Equation |
|---|---|
| "the rate of change of x with respect to t" | dx/dt |
| "x increases at a rate proportional to x" | dx/dt = kx, k > 0 |
| "x decreases at a rate proportional to √x" | dx/dt = −k√x, k > 0 |
| "the rate of decrease is proportional to the difference between θ and 20" | dθ/dt = −k(θ − 20) |
| "inversely proportional to x²" | dx/dt = k/x² |
| "the gradient of the curve at (x, y) is …" | dy/dx = … |

Write k > 0 and put the sign in front for a decrease. If a rate is given at a particular moment, substitute it to evaluate k.

## Separating the variables

If dy/dx = f(x)g(y), then

```text
∫ 1/g(y) dy = ∫ f(x) dx
```

Put one constant of integration on one side only. Then use the initial condition.

*Worked example 1.* Solve dy/dx = e^(2x − y), given that y = 0 when x = 0. Express y in terms of x.

```text
dy/dx = e^(2x) × e^(−y)
∫ eʸ dy = ∫ e^(2x) dx
eʸ = ½e^(2x) + c
x = 0, y = 0:  1 = ½ + c   →   c = ½
eʸ = ½(e^(2x) + 1)   →   y = ln(½(e^(2x) + 1))
```

The index law e^(2x − y) = e^(2x)e^(−y) is what makes the variables separable. Look for it whenever an exponent contains both variables.

## A cooling model

*Worked example 2.* A liquid is placed in a room kept at 20°C. Its temperature θ °C at time t minutes decreases at a rate proportional to θ − 20. Initially θ = 80, and after 10 minutes θ = 50.

(a) Find θ in terms of t. (b) Find the time at which θ = 30. (c) State what happens to θ in the long term.

```text
dθ/dt = −k(θ − 20),  k > 0
∫ 1/(θ − 20) dθ = ∫ −k dt
ln(θ − 20) = −kt + c

t = 0, θ = 80:   c = ln 60
t = 10, θ = 50:  ln 30 = −10k + ln 60   →   k = (ln 2)/10

θ − 20 = 60e^(−kt)   →   θ = 20 + 60e^(−0.0693t)

(b) 60e^(−kt) = 10   →   e^(−kt) = 1/6   →   t = 10 ln 6/ln 2 = 25.8 minutes
(c) As t → ∞, e^(−kt) → 0, so θ → 20: the liquid cools towards room temperature.
```

The modulus in ln|θ − 20| can be dropped because θ > 20 throughout. Say so if a question asks you to justify it. Equivalently, θ = 20 + 60 × 2^(−t/10), which shows the excess temperature halves every 10 minutes.

## A model needing partial fractions

*Worked example 3.* The variable x satisfies dx/dt = x(4 − x)/8, and x = 1 when t = 0. Find x in terms of t and describe what happens to x as t becomes large.

```text
∫ 8/(x(4 − x)) dx = ∫ dt
8/(x(4 − x)) = 2/x + 2/(4 − x)
2 ln x − 2 ln(4 − x) = t + c        (0 < x < 4)
ln(x/(4 − x)) = t/2 + c′
t = 0, x = 1:   c′ = ln(1/3)
x/(4 − x) = (1/3)e^(t/2)
3x = (4 − x)e^(t/2)   →   x(3 + e^(t/2)) = 4e^(t/2)
x = 4e^(t/2)/(3 + e^(t/2))
```

As t → ∞, divide top and bottom by e^(t/2): x = 4/(3e^(−t/2) + 1) → 4. The quantity grows from 1 and levels off at 4. Note the minus sign: ∫ 2/(4 − x) dx = −2 ln(4 − x).

## Interpreting a solution

Interpretation questions ask what the model predicts, using the solution:

- the long-term value (let t → ∞);
- when a quantity reaches a level, or whether it ever does;
- when the model stops making sense, for example when a depth reaches zero.

Answer in the language of the context: "the temperature approaches 20°C", not "θ tends to 20".

## Common mistakes

- Omitting the minus sign for a decreasing quantity, or allowing k to be negative without saying so.
- Adding a constant on both sides, or forgetting it entirely.
- Using the initial condition before integrating.
- Writing ln(θ − 20) = −kt + c and then θ − 20 = e^(−kt) + e^c instead of Ae^(−kt).
- Losing the minus sign in ∫ 1/(4 − x) dx.
- Leaving the answer as an implicit relation when the question says "express y in terms of x".

## Exam technique

- **Form a differential equation**: define the constant (k > 0) and evaluate it if enough information is given.
- **Find the general solution**: separate, integrate both sides, include one constant.
- **Find the particular solution**: substitute the initial values and give the final relation, rearranged if asked.
- **State what happens**: use limits and say it in context.
- Give k exactly (such as (ln 2)/10) or to at least 3 significant figures if it must be decimal; keep more figures in later working.

## Frequently asked questions

**Are second order differential equations in 9709 Paper 3?**
No. The syllabus covers first order equations in which the variables are separable.

**Can I drop the modulus in ln|y|?**
Only when the quantity is known to stay positive, or negative, in the context. Otherwise keep it, or write y = Ae^(…) with A allowed to take either sign.

**What does "no specialised knowledge of the context" mean?**
The question gives every fact you need about the situation; you only need the mathematics.

## Where to go next

- [3.8 revision notes](/resources/cambridge-a-level-mathematics-9709-differential-equations-revision-notes/)
- [3.8 practice questions](/resources/cambridge-a-level-mathematics-9709-differential-equations-practice/)
- Integration techniques used here: [3.5 Integration](/resources/cambridge-a-level-mathematics-9709-integration-3/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.8 Differential equations.
