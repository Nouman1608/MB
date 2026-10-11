---
title: "OCR A Level Mathematics A: Exponential and logarithmic functions: e^x, a^x, ln x and the gradient of e^kx (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths e^x, a^x, ln x Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Exponential and logarithmic functions: e^x, a^x, ln x and the gradient of e^kx"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 114
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "exponentials-and-logarithms-ocr-alevel-maths"
description: "Condensed revision notes on a^x, e^x, the gradient of e^kx, log_a x and ln x for OCR A Level Mathematics A (H240), with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for OCR A Level Mathematics A (H240), based on the OCR specification (Version 3.1, August 2026): content references 1.06a to 1.06e. All of this is Stage 1 content, common to AS Level (H230) and A Level. Laws of logarithms, exponential equations a^x = b, linear form and modelling (1.06f to 1.06i) are separate topics. Full explanations are in the [study guide](/resources/ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and/); test yourself with the [practice set](/resources/ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and-practice/). See also the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key results

| Ref | Result |
|---|---|
| 1.06a | y = a^x (a > 0): passes through (0, 1), always positive, asymptote y = 0 |
| 1.06a | e ≈ 2.718; y = e^x is increasing with asymptote y = 0 and gradient 1 at (0, 1) |
| 1.06b | gradient of e^(kx) is k e^(kx) |
| 1.06c | y = a^x ⇔ x = log_a y; log_a a = 1; log_a 1 = 0 |
| 1.06d | ln x = log_e x; domain x > 0; passes through (1, 0) and (e, 1) |
| 1.06e | ln(e^x) = x for all x; e^(ln x) = x for x > 0; ln e = 1; ln 1 = 0 |

## 1.06a Graphs of a^x and e^x

- a > 1: increasing. 0 < a < 1: decreasing. a = 1: the line y = 1.
- Every one passes through (0, 1) and never touches the x-axis.
- y = a^(−x) is y = (1/a)^x, the reflection of y = a^x in the y-axis.
- Adding a constant moves the asymptote: y = a^x + c has asymptote y = c and y-intercept 1 + c.
- Sequences link: terms of C × r^t form a geometric sequence with ratio r.

```
y = 2^x:  x   -2    -1    0   1   2   3
          y   1/4   1/2   1   2   4   8
```

When two models are compared, tabulate both over a sensible range and look for the crossover. A larger base eventually wins, however small its starting value.

## 1.06b Gradient of e^(kx)

Method in steps:

1. Write the function as a constant times e^(kx), identifying k.
2. Multiply by k: the gradient function is k × the original.
3. Substitute the given x to get the numerical gradient.
4. For a tangent, find y at that x, then use y − y₁ = m(x − x₁).
5. For a normal, use the negative reciprocal of m.

Why it matters: the gradient is k times the value, so the rate of change is proportional to the current size. A positive k gives growth, a negative k decay.

**Reminder.** For y = e^(3x) at x = 0: y = 1, gradient 3, tangent y = 3x + 1.

## 1.06c Logarithms

A logarithm is a power: log_a b is the power of a that gives b. Convert both ways:

```
5⁻² = 1/25   ⇔   log₅ (1/25) = -2
log₂ 32 = 5  ⇔   2⁵ = 32
```

Method for an unknown in a log equation:

1. Rewrite as a power using x = log_a y ⇔ y = a^x.
2. Solve the resulting equation by indices.
3. Check that the base is positive and any bracket inside the log is positive.

Graph of y = log_a x (a > 1): through (1, 0) and (a, 1), asymptote x = 0, domain x > 0, range all reals. It is the reflection of y = a^x in y = x.

Replacing x by x − c in a log graph moves the asymptote to x = c and the domain to x > c.

## 1.06d and 1.06e ln x and e^x

ln is the logarithm to base e. It undoes e^x, and e^x undoes ln.

Method for e^(f(x)) = k:

1. Take ln of both sides: f(x) = ln k (needs k > 0).
2. Rearrange for x.

Method for ln(f(x)) = k:

1. Raise e to both sides: f(x) = e^k.
2. Rearrange for x.

Method for the inverse of an e^x or ln x function:

1. Write y = f(x) and rearrange to get e^(…) or ln(…) on its own.
2. Apply the other function to both sides.
3. Make x the subject, then swap the letters.
4. State the domain as the range of f.

**Reminder.** If f(x) = e^x + 2 then f(x) > 2, f⁻¹(x) = ln(x − 2) and f⁻¹ accepts only x > 2.

## Worked reminders

**Gradient condition.** Find the point on y = 4e^(x/2) where the gradient is 6.

```
dy/dx = 4 × (1/2) e^(x/2) = 2e^(x/2) = 6   →   e^(x/2) = 3
x/2 = ln 3   →   x = 2 ln 3 = 2.20
y = 4 × 3 = 12
```

The point is (2 ln 3, 12). The y-coordinate comes from e^(ln 3) = 3.

**Rate of change.** A quantity is Q = 5e^(−0.2t). Then dQ/dt = −e^(−0.2t) = −0.2Q. At t = 5, Q = 5e^(−1) = 1.84 and the rate is −e^(−1) = −0.368. The negative sign shows decay, and the rate is always the same fraction, −0.2, of the current value.

**Log graph.** For y = log₃ x, the points (1/3, −1), (1, 0), (3, 1) and (9, 2) lie on the curve. Reflect them in y = x to get points of y = 3^x: (−1, 1/3), (0, 1), (1, 3), (2, 9).

## Sketching checklist

Before you sketch an exponential or logarithmic graph, check these in order:

1. Is the base greater than 1 or between 0 and 1?
2. Mark the asymptote as a dashed line and label its equation.
3. Mark the intercept with the y-axis (for a^x types) or x-axis (for log types).
4. Mark one more labelled point so the scale is clear.
5. Show the curve approaching the asymptote without touching it.

## Values to know

| Expression | Value | Reason |
|---|---|---|
| log_a a | 1 | a¹ = a |
| log_a 1 | 0 | a⁰ = 1 |
| ln e | 1 | e¹ = e |
| ln 1 | 0 | e⁰ = 1 |
| e⁰ | 1 | any non-zero base to the power 0 |
| e^(ln 5) | 5 | inverse functions |
| ln(e^(−3)) | −3 | inverse functions |

## Must-know distinctions

| Compare | Key difference |
|---|---|
| a^x and x^a | the variable is in the power for a^x; a^x has a horizontal asymptote and is positive |
| log_a x and a^x | inverses: swap the coordinates of every point; the asymptote switches from y = 0 to x = 0 |
| e^(kx) and e^x | the gradient of e^(kx) is k times the value; for e^x the gradient equals the value |
| ln x and log x | ln is base e; always say which base |
| f⁻¹ and 1/f | f⁻¹ is the inverse function; 1/f is the reciprocal |
| growth and decay | k > 0 gives growth, k < 0 gives decay; both stay positive |

## Quick self-test

1. State the y-intercept and asymptote of y = 5^x + 2.
2. Is y = 0.4^x increasing or decreasing? How is its graph related to y = 2.5^x?
3. Find the gradient of y = e^(−2x) at x = 1, to 3 significant figures.
4. Find the gradient of y = 3e^(x/3) at x = 3.
5. Write 5⁻² = 1/25 in logarithmic form.
6. Evaluate log₉ 3.
7. Solve ln(x + 1) = 2, giving an exact answer and a 3 significant figure answer.
8. Solve 2e^(3x) = 14, giving an exact answer.
9. State the domain and range of y = ln x.
10. Find the inverse of f(x) = e^x + 2 and state its domain.

### Answers

1. (0, 3); y = 2.
2. Decreasing, since 0 < 0.4 < 1. 0.4^x = (2.5)^(−x), so it is the reflection of y = 2.5^x in the y-axis.
3. Gradient = −2e^(−2) = −0.271.
4. Gradient = 3 × (1/3) e^(x/3) = e^(x/3); at x = 3 it is e = 2.72.
5. log₅ (1/25) = −2.
6. 9^(1/2) = 3, so log₉ 3 = 1/2.
7. x + 1 = e², so x = e² − 1 = 6.39.
8. e^(3x) = 7, so 3x = ln 7 and x = (ln 7)/3 = 0.649.
9. Domain x > 0; range all real numbers.
10. f⁻¹(x) = ln(x − 2), domain x > 2.

## Where marks are usually lost

- Drawing a^x with the asymptote at the wrong axis, or crossing it.
- Forgetting that the asymptote of a^x + c is y = c, not y = 0.
- Differentiating e^(kx) without the factor k, or putting k in the power only.
- Taking the tangent gradient from the wrong x, or using the normal's gradient as the tangent's.
- Writing log_a b as a/b or as a number times b.
- Leaving an answer as a decimal when the question asks for an exact value such as ln 7 or e² − 1.
- Rounding an intermediate value and losing accuracy in the final answer.
- Taking ln of a negative number or zero, for instance when solving e^x = −3.
- Giving an inverse function with no domain, or with the domain of the original function.

## Official syllabus

*OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: section 1.06, Exponentials and Logarithms, references 1.06a to 1.06e.
