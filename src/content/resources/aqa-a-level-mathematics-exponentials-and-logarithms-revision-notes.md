---
title: "AQA A-Level Mathematics: F: Exponentials and logarithms (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths Exponentials and Logs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "F: Exponentials and logarithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "f-exponentials-and-logarithms-aqa-alevel-maths"
description: "Condensed revision notes on exponentials and logarithms for AQA A-Level Maths (7357): key graphs, log laws, method steps and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section F: Exponentials and logarithms** (F1 to F7) of the AQA A-level
Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June
2018 onwards. Section F is Paper 1 content, and Papers 2 and 3 can also assess any Paper 1
content. A calculator is required in every paper, but exact forms (ln 3, e²/3) are often asked
for. For full explanations and worked examples, use the
[study guide](/resources/aqa-a-level-mathematics-exponentials-and-logarithms/); for exam-style
questions, use the [practice set](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-practice/).

Course hub: [AQA A-Level Mathematics](/boards/aqa/a-level/mathematics/) ·
[printable checklist](/checklists/aqa/a-level/mathematics/) ·
[free 10-minute diagnostics](/diagnostics/)

## Key definitions

- **Exponential function:** y = aˣ with a > 0 (F1). The **exponential function** is y = eˣ,
  where e ≈ 2.718.
- **Logarithm (F3):** for a > 0 and x > 0, y = log_a x ⇔ aʸ = x. The log is the power.
- **Natural logarithm:** ln x = log_e x. ln x is the inverse of eˣ.
- **Exponential model (F7):** y = Aeᵏᵗ. A is the initial value; k > 0 growth, k < 0 decay.

## Graphs at a glance (F1, F3)

| Feature | y = aˣ (a > 1) | y = aˣ (0 < a < 1) | y = ln x |
|---|---|---|---|
| Key point | (0, 1) | (0, 1) | (1, 0) |
| Asymptote | y = 0 (as x → −∞) | y = 0 (as x → ∞) | x = 0 |
| Domain | all real x | all real x | x > 0 |
| Range | y > 0 | y > 0 | all real y |
| Shape | increasing | decreasing | increasing, slowly |

y = ln x is the reflection of y = eˣ in y = x. The graph of y = e⁻ˣ is the reflection of y = eˣ
in the y-axis.

**Transformations to recall:** y = c + Aeᵏˣ has asymptote y = c and y-intercept c + A. For
y = c + ln(x − h), the asymptote is x = h.

## Formulae to recall

Appendix B of the specification lists the laws of logarithms, and x = aⁿ ⇔ n = log_a x for a > 0
and x > 0, among the formulae you must use without them being provided.

| Result | Form |
|---|---|
| Definition | x = aⁿ ⇔ n = log_a x |
| Special values | log_a 1 = 0, log_a a = 1 |
| Inverse pair | e^(ln x) = x (x > 0), ln(eˣ) = x |
| Multiplication law | log_a x + log_a y ≡ log_a xy |
| Division law | log_a x − log_a y ≡ log_a (x/y) |
| Power law | k log_a x ≡ log_a xᵏ |
| k = −1 | log_a (1/x) = −log_a x |
| k = −½ | log_a (1/√x) = −½ log_a x |
| Gradient (F2) | y = eᵏˣ → dy/dx = keᵏˣ |
| Solving aˣ = b (F5) | x = ln b / ln a |
| Half-life of Ae^(−kt) | ln 2 / k |
| Continuous interest | P e^(rt) |

## Methods in steps

**Solve aˣ = b (F5)**

1. Take ln (or log₁₀) of both sides.
2. Bring the power down: x ln a = ln b.
3. Divide: x = ln b / ln a. Give an exact form if asked, then round.

**Solve an equation with x in two different powers (e.g. 4^(x−1) = 3ˣ)**

1. Take ln of both sides: (x − 1) ln 4 = x ln 3.
2. Expand and collect x terms on one side.
3. Factorise x out and divide.

**Solve a hidden quadratic (e²ˣ, 9ˣ, 2²ˣ)**

1. Spot (aˣ)² = a²ˣ. Let u = aˣ.
2. Solve the quadratic in u.
3. Reject u ≤ 0 (aˣ is always positive).
4. Solve aˣ = u for each remaining value.

**Solve an equation with several logs**

1. Combine into a single log on each side, using the laws.
2. Remove the log: log_a P = c → P = aᶜ, or log_a P = log_a Q → P = Q.
3. Solve the resulting equation.
4. Check every root in the original: each log argument must be positive.

**Estimate parameters from a log graph (F6)**

1. Decide the model: y = axⁿ (plot log y against log x) or y = kbˣ (plot log y against x).
2. Find the gradient and intercept of the line of best fit.
3. y = axⁿ: n = gradient, a = 10^(intercept) or e^(intercept).
4. y = kbˣ: b = 10^(gradient), k = 10^(intercept) (or use e with ln).
5. State the model with the estimated values.

**Form an exponential model from two data points**

1. Write y = Aeᵏᵗ. Use t = 0 to read off A.
2. Substitute the second point and divide by A.
3. Take ln to find k.

## Small worked reminders

```
log₄ 8 = ?        4ʸ = 8  ->  2²ʸ = 2³  ->  y = 3/2

ln(e³√e) = 3 + ½ = 7/2

3 log 2 − log 4 + log 5 = log (8 × 5 / 4) = log 10    (= 1 if base 10)

4^(x − 1) = 3ˣ:  (x − 1) ln 4 = x ln 3
                 x(ln 4 − ln 3) = ln 4
                 x = ln 4 / ln(4/3)

200 × 1.5ᵗ = 200 e^(kt)  with  k = ln 1.5
```

The last line links the two growth forms: kbˣ and Aeᵏˣ describe the same family of curves,
because any positive base b can be written as e^(ln b). A growth factor b > 1 gives k > 0, and
a factor 0 < b < 1 gives k < 0. This is useful when a question gives a "percentage increase per
year" and you prefer to work with e.

## Must-know distinctions

- **log_a (xy) vs log_a (x + y):** the first splits into a sum; the second does not split at all.
- **(ln x)² vs ln(x²):** ln(x²) = 2 ln x, but (ln x)² is the square of the log.
- **ln x / ln y vs ln(x/y):** only ln x − ln y equals ln(x/y).
- **Power law y = axⁿ vs exponential y = kbˣ:** the variable is the base in the first and the
  exponent in the second. Log–log graph for the first, log y against x for the second.
- **Intercept vs parameter:** the intercept of a log graph is log a (or log k), not a.
- **log vs ln:** both work for solving aˣ = b; only ln undoes e directly.
- **Growth vs decay:** sign of k in Aeᵏᵗ. In a decay model, the quantity never actually reaches 0.
- **eᵏˣ vs aᵏˣ gradients:** the gradient of eᵏˣ is keᵏˣ; aᵏˣ needs an extra ln a factor (see the
  [differentiation revision notes](/resources/aqa-a-level-mathematics-differentiation-revision-notes/)).

## Modelling: what to say about limitations (F7)

- Growth models increase without limit; real populations level off as resources run out.
- The rate constant k is assumed fixed; real rates (interest, birth, drug clearance) may change.
- Models give non-integer values for counts.
- Predictions outside the data range (extrapolation) are less reliable.
- Refinements: a model that levels off at a maximum; a varying rate; adding a constant
  (y = Ae^(−kt) + c) when a quantity settles above zero.

Always tie a limitation to the context in the question, not a generic phrase.

## Quick self-test

1. Evaluate log₂ 64.
2. Evaluate e^(3 ln 2).
3. Write log_a (1/x) in terms of log_a x.
4. Write log₅ (1/√x) in terms of log₅ x.
5. Solve 4ˣ = 50, to 3 s.f.
6. Solve ln(2x) = 3. Give the exact answer and a value to 3 s.f.
7. Find the gradient of y = e^(−3x) at x = 0.
8. State the equation of the asymptote of y = 5e⁻ˣ + 2.
9. A graph of log₁₀ y against log₁₀ x is a straight line with gradient −2 and intercept 1.2.
   Find y in terms of x.
10. Find the half-life of y = Ae^(−0.05t), to 3 s.f.
11. Simplify log₃ 54 − log₃ 2.
12. Solve e²ˣ − 7eˣ + 12 = 0, giving exact answers.

### Answers

1. **6**, since 2⁶ = 64.
2. e^(3 ln 2) = e^(ln 8) = **8**.
3. **−log_a x** (power law with k = −1).
4. **−½ log₅ x** (power law with k = −½).
5. x = ln 50 / ln 4 = **2.82**.
6. 2x = e³, so x = **e³/2 = 10.0** (3 s.f.).
7. dy/dx = −3e^(−3x); at x = 0 the gradient is **−3**.
8. **y = 2**.
9. log₁₀ y = 1.2 − 2 log₁₀ x, so y = 10^1.2 x⁻² ≈ **15.8x⁻²** (3 s.f.).
10. t = ln 2 / 0.05 = **13.9** (3 s.f.).
11. log₃ (54/2) = log₃ 27 = **3**.
12. Let u = eˣ: u² − 7u + 12 = 0, so u = 3 or 4. x = **ln 3 or ln 4** (ln 4 = 2 ln 2).

## Where marks are usually lost

- Using a "law" for log(x + y) or for ln x / ln y. Neither exists.
- Leaving a root that makes a log argument zero or negative, after combining logs.
- Keeping a negative value of u = aˣ in a hidden quadratic instead of rejecting it with a reason.
- Giving a decimal when the question says "exact", or an exact form with no decimal when 3 s.f.
  is asked for.
- Rounding ln values early, so the final answer drifts in the third significant figure.
- Plotting the wrong axes for F6, or quoting the intercept as a instead of log a.
- Mixing log₁₀ and ln in the same calculation when converting back from a log graph.
- Saying a model is "unrealistic" without naming what in the context breaks down.
- Forgetting the asymptote or the intercept when asked to sketch an exponential or ln graph.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June
2018 onwards), published by AQA. Section 3.7 F: Exponentials and logarithms, content F1 to F7.
