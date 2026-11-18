---
title: "Cambridge A Level Mathematics (9709): Logarithmic and exponential functions (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "logarithmic-and-exponential-functions-cambridge-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.2: log laws, e^x and ln x as inverses, index equations and inequalities, and reducing laws to linear form."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.2 Logarithmic and exponential functions** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. It is examined on Paper 3 (1 hour 50 minutes, 75 marks). The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) gives one example of an inequality and one of linear form; here the section is taken apart statement by statement, with the question types that Paper 3 builds on it. Summarise it afterwards with the [3.2 revision notes](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-revision-notes/) and test yourself with the [3.2 practice questions](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-practice/).

## What section 3.2 asks for

| Syllabus statement | What you must be able to do |
|---|---|
| Relationship between logarithms and indices; laws of logarithms | Convert between aˣ = b and logₐ b = x; use the product, quotient and power laws. Change of base is excluded |
| Definition and properties of eˣ and ln x | Know they are inverse functions, sketch their graphs, including y = e^(kx) for positive and negative k |
| Unknowns in indices | Solve equations and inequalities such as 3^(x+1) = 4^(2x−1) by taking logarithms |
| Linear form | Rewrite y = kxⁿ or y = k(aˣ) as a straight line and read the constants from the gradient and intercept |

The content is the same as Pure Mathematics 2 section 2.2, which the [Paper 2 logarithms guide](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials/) teaches from the start. At Paper 3 the same skills are often hidden inside calculus, differential equations or numerical questions, so they must be fast and secure.

## The laws and the two inverse facts

```text
log(ab) = log a + log b
log(a/b) = log a − log b
log(aⁿ) = n log a
e^(ln x) = x  for x > 0        ln(eˣ) = x  for all x
```

There is no law for log(a + b). An equation such as ln(x + 4) = ln x + ln 4 cannot be simplified to x + 4 = 4x without first combining the right side into one logarithm.

**Graphs.** y = eˣ passes through (0, 1), lies above the x-axis and has the x-axis as an asymptote. y = ln x passes through (1, 0), is defined only for x > 0 and has the y-axis as an asymptote. Each is the reflection of the other in y = x. For y = e^(kx): k > 0 gives growth, k < 0 gives decay, and every such curve passes through (0, 1).

*Worked example 1 (inverse function).* f(x) = 2e^(−x) − 1 for all real x. Find the range of f, and f⁻¹(x) with its domain.

```text
e^(−x) > 0, so f(x) > −1. Range: f(x) > −1.
y = 2e^(−x) − 1   →   e^(−x) = (y + 1)/2   →   x = −ln((y + 1)/2) = ln(2/(y + 1))
f⁻¹(x) = ln(2/(x + 1)),  domain x > −1
```

The domain of f⁻¹ is the range of f. The sketch of f crosses the y-axis at (0, 1), crosses the x-axis where e^(−x) = ½, that is at x = ln 2, and approaches y = −1 as x increases.

## Equations with the unknown in the index

Take natural logarithms of both sides, bring the powers down, then collect the x terms.

*Worked example 2.* Solve 3^(2x−1) = 5^(x+2), giving x to 3 significant figures.

```text
(2x − 1) ln 3 = (x + 2) ln 5
2x ln 3 − ln 3 = x ln 5 + 2 ln 5
x(2 ln 3 − ln 5) = 2 ln 5 + ln 3
x = ln 75 / ln(9/5) = 7.35
```

Leaving the answer as ln 75/ln(9/5) is exact; the question decides which form is needed.

### Disguised quadratics

When the same base appears as a power and as its square, substitute.

*Worked example 3.* Solve 2^(2x+1) − 7 × 2ˣ + 3 = 0.

```text
2^(2x+1) = 2 × (2ˣ)². Let y = 2ˣ:
2y² − 7y + 3 = 0   →   (2y − 1)(y − 3) = 0
y = ½:  2ˣ = ½  →  x = −1
y = 3:  2ˣ = 3  →  x = ln 3 / ln 2 = 1.58 (3 s.f.)
```

If one root of the quadratic in y is negative, reject it: 2ˣ is always positive.

### Combining logarithms first

*Worked example 4.* Solve 2 ln(x + 1) − ln x = ln(x + 5).

```text
ln((x + 1)²/x) = ln(x + 5)
(x + 1)² = x(x + 5)
x² + 2x + 1 = x² + 5x   →   x = 1/3
```

Check that every logarithm in the original equation is defined at x = 1/3: x + 1, x and x + 5 are all positive, so the answer stands. A value that makes any argument zero or negative must be rejected.

## Inequalities: watch the sign of the logarithm

Taking ln of both sides keeps an inequality the right way round, because ln is an increasing function. The danger comes at the next step: dividing by the logarithm of a number between 0 and 1 means dividing by a **negative** number, which reverses the inequality.

*Worked example 5.* Find the smallest integer n for which 4 × 0.8ⁿ < 1.

```text
0.8ⁿ < 0.25
n ln 0.8 < ln 0.25
ln 0.8 < 0, so dividing reverses the sign:
n > ln 0.25 / ln 0.8 = 6.21
Smallest integer: n = 7
```

Check: 4 × 0.8⁷ = 0.84 < 1, while 4 × 0.8⁶ = 1.05 > 1.

## Reducing a relationship to linear form

| Model | Take logs | Plot | Gradient | Intercept |
|---|---|---|---|---|
| y = kxⁿ | ln y = ln k + n ln x | ln y against ln x | n | ln k |
| y = k(aˣ) | ln y = ln k + x ln a | ln y against x | ln a | ln k |

The test: if the plotted points lie on a straight line, the model fits. Always identify which variable is on the horizontal axis before reading the gradient.

*Worked example 6.* The variables satisfy y = k(aˣ). The graph of ln y against x is a straight line through (0.5, 2.1) and (3, 0.6). Find k and a.

```text
Gradient = (0.6 − 2.1)/(3 − 0.5) = −0.6 = ln a   →   a = e^(−0.6) = 0.549
Intercept: 2.1 = ln k + (−0.6)(0.5)   →   ln k = 2.4   →   k = e^(2.4) = 11.0
```

A negative gradient means a < 1, so y decreases as x increases. A common error is giving a = −0.6; the gradient is ln a, not a.

## Common mistakes

- Writing ln(x + 4) as ln x + ln 4.
- Forgetting to bring the whole bracket down: (2x − 1) ln 3, not 2x − 1 ln 3.
- Dividing by ln 0.8 without reversing the inequality.
- Keeping a solution such as 2ˣ = −3, which has no real solution.
- Not checking that log arguments are positive at the answer.
- In linear form, giving the gradient or intercept as the constant itself instead of n, ln a or ln k.
- Using change of base: it is outside this syllabus, so write ln 3/ln 2 rather than log₂ 3 when an answer is needed in that form.

## Exam technique

- **Solve, giving your answer correct to 3 significant figures**: show the line with logarithms taken before the decimal answer. A bare decimal is an unsupported calculator answer.
- **Exact value**: leave expressions such as ln 3/ln 2 or ½ ln 5 unevaluated.
- **Show that** in linear form: write the logarithmic equation and say which quantities are plotted on each axis.
- **Sketch**: label (0, 1) on y = e^(kx), (1, 0) on y = ln x, and draw asymptotes as lines that the curve approaches but never meets.
- Keep at least 4 significant figures in gradients and intercepts until the final answer.

## Frequently asked questions

**Is change of base in the 9709 Paper 3 syllabus?**
No. The syllabus states that the laws of logarithms are used excluding change of base. Solve index equations by taking natural logarithms of both sides.

**Why does the inequality sign sometimes reverse when solving with logarithms?**
Taking logarithms keeps the direction, but ln of a number between 0 and 1 is negative, and dividing by a negative number reverses the inequality.

**Which graph gives a straight line for y = kxⁿ?**
Plot ln y against ln x. The gradient is n and the vertical intercept is ln k.

## Where to go next

- [3.2 revision notes](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-revision-notes/) for a condensed summary and self-test
- [3.2 practice questions](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-practice/) with mark-by-mark answers
- Logarithms in calculus: [3.4 Differentiation](/resources/cambridge-a-level-mathematics-9709-differentiation-cambridge-alevel-maths-3/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.2 Logarithmic and exponential functions.
