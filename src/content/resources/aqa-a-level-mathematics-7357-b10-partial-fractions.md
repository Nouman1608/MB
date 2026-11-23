---
title: "AQA A-Level Mathematics (7357): Partial fractions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.10
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b10-partial-fractions-aqa-alevel-maths"
description: "AQA A-level Maths 7357 B10 in depth: why partial fraction forms work, identities, tricky denominators, comparing coefficients and fractional constants."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers content statement **B10** of AQA A-level Mathematics (7357), Section B: Algebra and functions: **"Decompose rational functions into partial fractions (denominators not more complicated than squared linear terms and with no more than 3 terms, numerators constant or linear)."** The brackets set the limits of what can be asked: linear factors, at most one of them squared, at most three fractions in the answer, and a numerator of degree 0 or 1.

The [partial fractions and functions in modelling study guide](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling/) shows the four standard forms and the basic method with substitution. This page explains **why** the method works, then tackles the harder cases: denominators that need careful factorising, factors such as (1 − x), a repeated factor on its own, and decompositions where the constants are fractions. Recall the steps with the [B10 revision notes](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions-revision-notes/) and practise with the [B10 practice questions](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions-practice/).

## Why the method works

### Identities, not equations

When you write

```
(7x − 1)/((x + 1)(x − 2)) ≡ A/(x + 1) + B/(x − 2)
```

the symbol ≡ means the two sides are equal for **every** allowed value of x. Multiplying by the denominator gives 7x − 1 ≡ A(x − 2) + B(x + 1). This is now an identity between two polynomials, so it holds for **all** x, including x = −1 and x = 2, even though the original fractions are undefined there. That is why substituting the values that make a factor zero is legitimate.

Because the identity holds for all x, the coefficients of each power of x must also match on both sides. That gives the second method, comparing coefficients.

### Why a repeated factor needs two fractions

Try to write (x + 1)/(x − 3)² as A/(x − 3)² only. Multiplying out gives x + 1 ≡ A, which is impossible, because the left side contains x. Adding the fraction B/(x − 3) gives

```
x + 1 ≡ A + B(x − 3)
x coefficients:  1 = B
constants:       1 = A − 3B, so A = 4
(x + 1)/(x − 3)² ≡ 1/(x − 3) + 4/(x − 3)²
```

In general, a denominator of degree n needs n unknown constants. (x + 1)(x − 2)² has degree 3, so it needs three: A/(x + 1) + B/(x − 2) + C/(x − 2)². Counting constants is a quick check that your form is complete.

### Why each numerator is a constant

The fraction you start with is **proper**: the numerator (constant or linear) has a lower degree than the denominator. Each partial fraction must be proper too, so over a linear factor the numerator is a constant.

## Step 1 done carefully: factorising the denominator

Many errors start here. Look for these patterns.

| Denominator | Factorised |
|---|---|
| 4x² − 9 | (2x − 3)(2x + 3), the difference of two squares |
| x³ − 6x² + 9x | x(x − 3)², after taking out x |
| x³ − 4x | x(x − 2)(x + 2) |
| 2 − x − x² | (1 − x)(2 + x) |
| 6x² + x − 2 | (2x − 1)(3x + 2) |

Always expand your factors again to check before going on.

**Worked example 1.** Express 12/(4x² − 9) in partial fractions.

```
12/((2x − 3)(2x + 3)) ≡ A/(2x − 3) + B/(2x + 3)
12 ≡ A(2x + 3) + B(2x − 3)
x = 3/2:    12 = 6A,   A = 2
x = −3/2:   12 = −6B,  B = −2
Result: 2/(2x − 3) − 2/(2x + 3)
```

**Worked example 2.** Express (2x + 9)/(x³ − 6x² + 9x) in partial fractions.

The denominator is x(x² − 6x + 9) = x(x − 3)².

```
(2x + 9)/(x(x − 3)²) ≡ A/x + B/(x − 3) + C/(x − 3)²
2x + 9 ≡ A(x − 3)² + Bx(x − 3) + Cx
x = 0:   9 = 9A,   A = 1
x = 3:  15 = 3C,   C = 5
x² coefficients:  0 = A + B,  B = −1
Result: 1/x − 1/(x − 3) + 5/(x − 3)²
```

Check with x = 1: the left side is 11/(1 × 4) = 11/4, and the right side is 1 + 1/2 + 5/4 = 11/4.

## Factors with a negative x term

Leave a factor such as (1 − x) as it is. Substitute the value that makes it zero, x = 1, exactly as before.

**Worked example 3.** Express (2x + 10)/((1 − x)(x + 2)(x + 3)) in partial fractions.

```
2x + 10 ≡ A(x + 2)(x + 3) + B(1 − x)(x + 3) + C(1 − x)(x + 2)
x = 1:    12 = 12A,          A = 1
x = −2:    6 = B(3)(1),      B = 2
x = −3:    4 = C(4)(−1),     C = −1
Result: 1/(1 − x) + 2/(x + 2) − 1/(x + 3)
```

Check with x = 0: 10/6 = 5/3, and 1 + 1 − 1/3 = 5/3. If you prefer, 1/(1 − x) can be written −1/(x − 1); both are correct, but keep the form the question uses.

## When substitution is not enough: comparing coefficients

With a single repeated factor, only one value of x makes a bracket zero, so compare coefficients for the rest. The constants do not have to be integers.

**Worked example 4.** Express (5x + 1)/(2x + 1)² in partial fractions.

```
(5x + 1)/(2x + 1)² ≡ A/(2x + 1) + B/(2x + 1)²
5x + 1 ≡ A(2x + 1) + B
x coefficients:   5 = 2A,      A = 5/2
constants:        1 = A + B,   B = −3/2
Result: 5/(2(2x + 1)) − 3/(2(2x + 1)²)
```

Write fractional constants tidily: (5/2)/(2x + 1) is clearer as 5/(2(2x + 1)). Do not "round" a constant to an integer to make it look nicer.

A mixed approach is usually fastest: substitute the easy values, then compare the coefficient of the highest power (or the constant term) for whatever is left.

## Checking your answer

Use one of these every time; each takes under a minute.

1. **Substitute a fresh value** of x, not used in the working, into both sides. x = 0 or x = 1 is usually easiest.
2. **Recombine** the partial fractions over the common denominator and check you get the original numerator.
3. **Count constants**: the number should equal the degree of the denominator.

## Where partial fractions are used later

B10 rarely appears alone. Decomposing first turns one hard expression into simple ones that later topics can handle:

- integrating each part to give logarithms, in Section H;
- differentiating each part separately, in Section G;
- expanding each part with the binomial expansion for rational n, in Section D.

So a question may say "express f(x) in partial fractions" in part (a) and "hence" use the result in part (b). Getting the constants right in (a) is worth extra care, because every later mark depends on them.

## Common mistakes

- Not factorising fully: x³ − 4x left as x(x² − 4).
- Writing only C/(x − 3)² for a repeated factor and leaving out B/(x − 3).
- Substituting x = 3 when the factor is (2x − 3); the value is x = 3/2.
- Losing a sign with a factor like (1 − x).
- Using the original fraction, not the identity, when substituting, so dividing by zero.
- Forcing fractional constants to be integers.
- Not checking, so one wrong constant ruins a "hence" part.

## Exam technique for AQA command words

- **"Express ... in partial fractions"**: write the form with A, B, C first, so the method mark is clear even if an arithmetic slip follows.
- **"Find the values of A, B and C"**: state each one clearly at the end.
- **"Show that ... ≡ ..."**: work from the left-hand side, find the constants, and finish on the given right-hand side.
- **"Hence"**: use your partial fractions in the next step rather than starting again.

## Where to go next

Condense the method with the [B10 revision notes](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions-revision-notes/) and work through the [B10 practice questions](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions-practice/). Factorising and algebraic division are revised in the [polynomial manipulation guide](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B10.
