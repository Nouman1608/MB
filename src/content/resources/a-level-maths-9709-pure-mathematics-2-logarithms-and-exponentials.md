---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Logarithms and Exponentials -- Study Guide"
seoTitle: "9709 P2 Logarithms and Exponentials Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Logarithmic and exponential functions"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 38
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "logarithmic-and-exponential-functions-cambridge-2"
description: "Study guide for Cambridge 9709 Pure Mathematics 2 section 2.2: log laws, eˣ and ln x, equations in indices, and linear form, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This study guide teaches section 2.2, Logarithmic and exponential functions, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.2 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), which is taken only in the AS Level Pure Mathematics route of Paper 1 plus Paper 2. The same four learning outcomes appear again as section 3.2 of Pure Mathematics 3, so everything here also applies if you later take Paper 3.

A scientific calculator is allowed in every 9709 examination. The syllabus is clear that no marks are given for unsupported answers from a calculator, so every log step must be written down. Give non-exact answers to 3 significant figures unless the question says otherwise, and do not round until the final answer.

Use this page with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-revision-notes/) and the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-practice/). For an overview of the whole paper, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). Course links: the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/) and the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/).

## What this unit covers

| Syllabus 2.2 | What you must be able to do | Paper |
|---|---|---|
| Logs and indices | Understand that logₐ b = x means aˣ = b; use the laws of logarithms (change of base is **excluded**) | Paper 2 |
| eˣ and ln x | Know the definition and properties of eˣ and ln x, that they are inverse functions, and their graphs, including y = e^(kx) for k > 0 and k < 0 | Paper 2 |
| Unknowns in indices | Use logarithms to solve equations and inequalities in which the unknown is in an index | Paper 2 |
| Linear form | Turn y = kxⁿ or y = k(aˣ) into a straight-line relationship, then find the constants from the gradient and/or intercept | Paper 2 |

Calculus of eˣ and ln x belongs to sections 2.4 and 2.5.

## Logarithms and indices

A logarithm answers the question "what power?". For a base a with a > 0 and a ≠ 1:

```
log_a b = x   means exactly the same as   a^x = b      (b > 0)
```

So log₂ 32 = 5 because 2⁵ = 32, and log₂ 0.125 = −3 because 2⁻³ = 1/8. Also logₐ 1 = 0 and logₐ a = 1. You cannot take the log of zero or a negative number, because aˣ is always positive.

The log of a number that is not a neat power can still be found without change of base. To find log₄ 8, write 4ˣ = 8, so 2^(2x) = 2³, giving 2x = 3 and log₄ 8 = 3/2.

### The three laws

For any valid base, and x, y > 0:

| Law | In words |
|---|---|
| log(xy) = log x + log y | log of a product is the sum of the logs |
| log(x/y) = log x − log y | log of a quotient is the difference of the logs |
| log(xⁿ) = n log x | a power comes down as a multiplier |

They come from the index laws aᵐ × aⁿ = a^(m+n), aᵐ ÷ aⁿ = a^(m−n) and (aᵐ)ⁿ = a^(mn). Notation: lg x means log₁₀ x and ln x means logₑ x.

### Worked example 1: simplifying

Find the value of 2 log₃ 6 − log₃ 4 without a calculator.

```
2 log_3 6 = log_3 (6^2) = log_3 36          (power law)
log_3 36 - log_3 4 = log_3 (36/4)           (quotient law)
                   = log_3 9 = 2            (since 3^2 = 9)
```

Always apply the power law first, so that every term has coefficient 1 before you combine.

### Worked example 2: an equation with logs on both sides

Solve 2 lg x − lg(x − 2) = lg 9.

```
lg(x^2) - lg(x - 2) = lg 9
lg( x^2 / (x - 2) ) = lg 9
x^2 / (x - 2) = 9
x^2 = 9x - 18
x^2 - 9x + 18 = 0
(x - 3)(x - 6) = 0,  so x = 3 or x = 6
```

Now check each root in the **original** equation. Both lg x and lg(x − 2) need a positive argument, so you need x > 2. Both roots satisfy this, so the answer is **x = 3 or x = 6**. When a root gives a zero or negative argument, you must reject it and say why.

### Worked example 3: log equal to a number

Solve log₅(2x + 3) − log₅(x − 1) = 1.

```
log_5( (2x + 3)/(x - 1) ) = 1
(2x + 3)/(x - 1) = 5^1 = 5        (definition of a log)
2x + 3 = 5x - 5
x = 8/3
```

Check: x − 1 = 5/3 > 0, so **x = 8/3** is valid. The key step is replacing "log₅(something) = 1" with "something = 5¹".

## The functions eˣ and ln x

The number e ≈ 2.718 is the base of the **natural exponential function** eˣ. Its inverse is the **natural logarithm**, ln x = logₑ x. Because they are inverse functions:

```
e^(ln x) = x    for x > 0
ln(e^x)  = x    for all real x
```

These two facts let you "undo" one function with the other. For example, e^(2 ln 3) = e^(ln 9) = 9, and ln(e^(−4)) = −4.

### Graphs

| | y = eˣ | y = ln x |
|---|---|---|
| Domain | all real x | x > 0 |
| Range | y > 0 | all real y |
| Crosses an axis at | (0, 1) | (1, 0) |
| Asymptote | y = 0 (the x-axis) | x = 0 (the y-axis) |
| Shape | increasing, gets steeper | increasing, gets flatter |

Each graph is the reflection of the other in the line y = x, as for any function and its inverse (see the [Pure Mathematics 1 functions page](/resources/a-level-mathematics-pure-mathematics-1-functions/) for inverse functions in general).

The syllabus names y = e^(kx) for positive and negative k:

- **k > 0**: the curve passes through (0, 1) and increases. Larger k makes it steeper (growth).
- **k < 0**: the curve still passes through (0, 1) but decreases towards the x-axis as x increases (decay).
- In both cases y > 0 and the x-axis is an asymptote. The curve never touches it.

A sketch needs the correct shape, (0, 1) labelled, and the curve approaching but not crossing the asymptote.

### Worked example 4: a hidden quadratic

Solve e^(2x) − 5eˣ + 6 = 0, giving exact answers.

```
Let u = e^x, so e^(2x) = (e^x)^2 = u^2
u^2 - 5u + 6 = 0
(u - 2)(u - 3) = 0,  so e^x = 2 or e^x = 3
x = ln 2  or  x = ln 3
```

"Exact" means leave the answers as ln 2 and ln 3. If one factor gave eˣ = a negative number, you would reject it, because eˣ > 0 for all x.

### Worked example 5: ln on both sides

Solve ln(x + 2) = 1 + ln x.

```
ln(x + 2) - ln x = 1
ln( (x + 2)/x ) = 1
(x + 2)/x = e^1 = e
x + 2 = ex
x(e - 1) = 2
x = 2/(e - 1) = 1.16  (3 s.f.)
```

The exact answer is 2/(e − 1). Since 1.16 > 0, both logs are defined.

## Equations and inequalities with the unknown in an index

When the unknown is in a power and you cannot write both sides with the same base, take logs of both sides and use the power law. Natural logs (ln) or lg both work, as long as you use the same one on each side.

### Worked example 6: different bases

Solve 5^(2x − 1) = 3^(x + 2), giving x to 3 significant figures.

```
(2x - 1) ln 5 = (x + 2) ln 3              (take ln, power law)
2x ln 5 - ln 5 = x ln 3 + 2 ln 3          (expand)
x(2 ln 5 - ln 3) = 2 ln 3 + ln 5          (collect x terms)
x = (2 ln 3 + ln 5)/(2 ln 5 - ln 3)
  = ln 45 / ln(25/3)
  = 1.80  (3 s.f.)
```

Expand the brackets before collecting terms, and keep full calculator values until the last line.

### Worked example 7: an inequality

Find the smallest integer n for which 0.8ⁿ < 0.05.

```
n ln 0.8 < ln 0.05
ln 0.8 is negative, so dividing by it reverses the inequality:
n > ln 0.05 / ln 0.8 = 13.42...
smallest integer n = 14
```

Check: 0.8¹³ = 0.0550 (too big) and 0.8¹⁴ = 0.0440 (small enough). The log of any number between 0 and 1 is negative. That is why the sign turns round, and it is the step most often missed.

## Transforming to linear form

Taking logs turns y = kxⁿ or y = k(aˣ) into a straight line Y = mX + c, so you can read the constants from a graph.

| Model | Take ln | Plot | Gradient | Intercept |
|---|---|---|---|---|
| y = kxⁿ | ln y = ln k + n ln x | ln y against ln x | n | ln k |
| y = k(aˣ) | ln y = ln k + x ln a | ln y against x | ln a | ln k |

If a question uses lg instead of ln, the method is the same: lg y = lg k + n lg x, and k = 10^(intercept).

Look at the horizontal axis: x itself means y = k(aˣ); ln x means y = kxⁿ.

### Worked example 8: exponential model

The variables x and y satisfy y = k(aˣ). The graph of ln y against x is a straight line through (1, 1.8) and (4, 3.0). Find k and a.

```
gradient = (3.0 - 1.8)/(4 - 1) = 0.4 = ln a,   so a = e^0.4 = 1.49  (3 s.f.)
ln y = ln k + x ln a;  at (1, 1.8):  1.8 = ln k + 0.4
ln k = 1.4,   so k = e^1.4 = 4.06  (3 s.f.)
```

So y = 4.06 × 1.49ˣ. The intercept of the line on the ln y axis is ln k, not k, and the gradient is ln a, not a.

### Worked example 9: power model with a negative gradient

The variables x and y satisfy y = kxⁿ. The graph of ln y against ln x is a straight line through (0.4, 2.6) and (1.6, 0.8). Find n and k.

```
gradient n = (0.8 - 2.6)/(1.6 - 0.4) = -1.8/1.2 = -1.5
ln y = ln k + n ln x;  at (0.4, 2.6):  2.6 = ln k - 1.5(0.4)
ln k = 3.2,   so k = e^3.2 = 24.5  (3 s.f.)
```

So y = 24.5x^(−1.5).

## Using your calculator

- Write the log equation before the decimal. "x = ln 45/ln(25/3) = 1.80" earns method marks; "x = 1.80" alone may earn nothing.
- Store intermediate values in memory. Rounding ln a to 0.4 when it is 0.405 changes a to 3 s.f.

## Common errors

- Writing log(x + y) = log x + log y. There is no law for the log of a sum.
- Writing (ln 5)/(ln 3) = ln(5/3). The quotient law is about ln 5 − ln 3, not ln 5 ÷ ln 3.
- Dropping the logs from "ln(x + 2) − ln x = 1" to get "x + 2 − x = 1".
- Forgetting to reverse the inequality after dividing by ln of a number less than 1.
- Accepting a root that makes the argument of a log zero or negative, or accepting eˣ = −3.
- Reading k straight off the intercept of a ln y graph instead of finding k = e^(intercept).
- Sketching y = e^(−x) crossing the x-axis, or with the wrong y-intercept.

## Next steps

Condense this unit with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-revision-notes/), then try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-practice/). The [Pure Mathematics 2 practice set](/resources/a-level-mathematics-pure-mathematics-2-practice/) mixes logs with the rest of Paper 2. If you are on the A Level route, the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) covers the same outcomes as section 3.2. Check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.2 Logarithmic and exponential functions.
