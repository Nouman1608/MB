---
title: "OxfordAQA International AS and A-level Mathematics: Exponentials, logarithms and solving a^x = b (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Exponentials and Logs Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Exponential functions, logarithms and solving a^x = b"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 182
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "pp1-exponential-and-logarithms-oxfordaqa-alevel-maths"
description: "Condensed revision notes on y = a^x, logarithm laws and solving a^x = b for OxfordAQA International AS and A-level Mathematics, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section PP1.3 (Exponential and logarithms) of the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*. The specification places this content in International AS, Unit PSM1 (3.2, PP1), for International AS exams from May/June 2018 and International A-level exams from May/June 2019. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b/).

Also useful: the [practice questions](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-practice/), the [OxfordAQA A-level Mathematics course page](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key facts at a glance

| Topic | What to remember |
|---|---|
| Graph of y = a^x | Passes through (0, 1); always above the x-axis; asymptote y = 0 |
| a > 1 | Increasing, steeper as x grows |
| 0 < a < 1 | Decreasing; y = (1/a)^x is y = a^x reflected in the y-axis |
| Equivalence | y = a^x ⇔ x = logₐy |
| Special values | logₐ1 = 0 and logₐa = 1 |
| Domain of a log | logₐx is defined only for x > 0 |
| Solving a^x = b | Take logarithms of both sides, then x = log b / log a |

## Laws of indices

```
a^m × a^n = a^(m+n)       a^m ÷ a^n = a^(m−n)
(a^m)^n = a^(mn)          a^(−n) = 1/a^n
a^0 = 1                   a^(1/n) = n-th root of a
```

## Laws of logarithms

Same base throughout.

```
logₐ x + logₐ y = logₐ(xy)
logₐ x − logₐ y = logₐ(x/y)
k logₐ x = logₐ(x^k)
```

Must-know distinctions:

| Looks similar | Actually |
|---|---|
| log x + log y | = log(xy), not log(x + y) |
| log x − log y | = log(x/y), not log(x − y) |
| log(x²) | = 2 log x |
| (log x)² | is not 2 log x |
| log x / log y | is not log(x/y) |

## Method: convert and evaluate

Steps to evaluate logₐb without a calculator:

1. Write logₐb = k.
2. Convert: a^k = b.
3. Write a and b as powers of one base.
4. Equate the powers and solve for k.

Worked reminder: log₂(1/8) = k means 2^k = 2⁻³, so k = −3. And log₂₅5 = k means 25^k = 5, so 5^(2k) = 5¹, giving k = 1/2.

Worked reminder: log₁₀5 + log₁₀20 = log₁₀100 = 2, and log₂48 − log₂3 = log₂16 = 4.

## Method: solve a^x = b

1. Isolate the power so the equation reads a^(expression) = number.
2. If both sides can be written with one base, equate the indices.
3. Otherwise take logarithms of both sides (same base each side).
4. Use k log a = log(a^k) to bring the index down.
5. Solve the resulting linear equation. Do not round until the final line.
6. Round to 3 significant figures (unless told otherwise) and check by substitution.

Worked reminders:

```
2^x = 11               x = log 11 / log 2 = 3.46
4^(3x) = 9             3x = log 9 / log 4 = 1.585, so x = 0.528
5^(x−2) = 12           x − 2 = log 12 / log 5 = 1.544, so x = 3.54
3^(x+1) = 2^(x+4)      (x+1) log 3 = (x+4) log 2
                       x (log 3 − log 2) = 4 log 2 − log 3
                       x = (4 log 2 − log 3) / (log 3 − log 2) = 4.13
```

If the equation has the unknown on both sides, gather the terms in x, factorise, then divide.

## Method: log equations

1. Combine into one log using the laws.
2. Convert to index form.
3. Solve.
4. Reject any root that makes an argument of a log zero or negative.

Worked reminder: log₂(x + 1) + log₂(x − 1) = 3 gives x² − 1 = 8, so x = ±3. Only x = 3 works, since x = −3 makes x − 1 negative.

## Growth and decay questions

For a model N = A × r^t, set N to the target and solve r^t = target / A by logarithms. If r < 1 then log r is negative. A division by it turns the inequality round.

Worked reminder: 3000 × 1.05^n > 4500 gives n > log 1.5 / log 1.05 = 8.31, so n = 9. Check: 3000 × 1.05⁸ = 4432.4 (too small) and 3000 × 1.05⁹ = 4654.0.

## Converting between forms

| Index form | Logarithm form |
|---|---|
| 2⁵ = 32 | log₂32 = 5 |
| 10³ = 1000 | log₁₀1000 = 3 |
| 7⁰ = 1 | log₇1 = 0 |
| 9^(1/2) = 3 | log₉3 = 1/2 |
| 3⁻² = 1/9 | log₃(1/9) = −2 |
| a^x = y | logₐy = x |

The base of the logarithm is the base of the power. The logarithm is the index.

## Sketching y = a^x

Checklist for a sketch:

1. Mark the y-intercept (0, 1).
2. Draw the curve above the x-axis everywhere.
3. Write "y = 0" next to the asymptote and make the curve approach it without touching.
4. Show the right shape: rising for a > 1, falling for 0 < a < 1.
5. If asked, add one more labelled point such as (1, a).

For a table of values, remember that a⁻¹ = 1/a and a⁻² = 1/a². For y = 3^x this gives 1/9, 1/3, 1, 3, 9 at x = −2, −1, 0, 1, 2.

## Two longer worked reminders

**Laws example.** Suppose logₐ2 = p and logₐ3 = q. Express logₐ(√12) in terms of p and q.

```
√12 = (2² × 3)^(1/2)
logₐ√12 = (1/2)(2logₐ2 + logₐ3) = p + q/2
```

**Mixed example.** Solve 2 log₃x − log₃(x − 2) = 2.

```
log₃[x² / (x − 2)] = 2
x² / (x − 2) = 9
x² = 9x − 18
x² − 9x + 18 = 0
(x − 3)(x − 6) = 0
```

So x = 3 or x = 6. Both make x and x − 2 positive, so both are valid. Check x = 3: 2log₃3 − log₃1 = 2 − 0 = 2.

**Equation with a coefficient.** Solve 4 × 3^x = 100.

```
3^x = 25
x = log 25 / log 3 = 2.93
```

Divide by 4 before taking logarithms. Taking logarithms of 4 × 3^x directly is allowed, but you then need log 4 + x log 3 = log 100, which has more places to slip.

## Checking your answer

A minute spent checking is worth more than a minute spent on a new question.

- For a^x = b, substitute your decimal back. It should return b to about 3 significant figures.
- For a log equation, check every argument is positive.
- For an inequality, test the whole numbers either side of the boundary.
- Estimate first, because it catches key-press errors. If 2^x = 11, then x is between 3 and 4 because 2³ = 8 and 2⁴ = 16.

## Quick self-test

1. Write 4³ = 64 in logarithm form.
2. Evaluate log₃81.
3. Evaluate log₂(1/16).
4. Evaluate log₅15 − log₅3 + log₅5.
5. Evaluate 3log₂2 + log₂5 − log₂10.
6. State the y-intercept and the asymptote of y = 6^x.
7. Solve 8^x = 32.
8. Solve 5^x = 40, giving 3 significant figures.
9. Solve 3^(x−1) = 20, giving 3 significant figures.
10. Solve 2^x = 5^(x−1), giving 3 significant figures.
11. Solve log₃(2x + 1) = 2.
12. Find the least whole number n for which 1.08^n > 3.

### Answers

1. log₄64 = 3.
2. log₃81 = **4**, because 3⁴ = 81.
3. **−4**, because 2⁻⁴ = 1/16.
4. log₅(15/3) + 1 = log₅5 + 1 = 1 + 1 = **2**.
5. 3log₂2 = 3, and log₂5 − log₂10 = log₂(1/2) = −1, so the total is **2**.
6. It crosses the y-axis at **(0, 1)**, with asymptote **y = 0**.
7. 2^(3x) = 2⁵, so 3x = 5 and x = **5/3**.
8. x = log 40 / log 5 = **2.29**.
9. x − 1 = log 20 / log 3 = 2.727, so x = **3.73**.
10. x log 2 = (x − 1) log 5, so x (log 5 − log 2) = log 5 and x = log 5 / (log 5 − log 2) = **1.76**.
11. 2x + 1 = 9, so x = **4**.
12. n > log 3 / log 1.08 = 14.27, so **n = 15**.

## Where marks are usually lost

- Splitting log(x + y) into log x + log y, or reading log x / log y as log(x/y).
- Mixing bases when adding or subtracting logarithms.
- Not converting the log equation to index form before solving.
- Leaving an extraneous root that makes a log undefined.
- Rounding log values to 2 or 3 figures before dividing, which shifts the final answer.
- Taking logarithms before isolating the power, for example from 5 × 3^x = 40.
- Keeping the inequality sign after a division by a negative logarithm.
- Giving a decimal when the question asks for an exact value, such as log₂9.
- Omitting the y-intercept or the asymptote label on a sketch of y = a^x.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2: section PP1.3, Exponential and logarithms. Published by OxfordAQA for International AS exams from May/June 2018 and International A-level exams from May/June 2019.
