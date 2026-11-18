---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Partial fractions (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-11"
description: "IB DP Maths AA HL section 1.11 study guide: why partial fractions work, factorising denominators, three methods for A and B, checks and uses."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.11, partial fractions**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is **HL only** (additional higher level). The syllabus limits it to a proper fraction (the numerator has lower degree than the denominator) whose denominator has at most two distinct linear factors.

The HL unit overview, with two standard examples, is the [counting principles, partial fractions, proof and linear systems study guide](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/). This page explains why the method works, how to deal with denominators that need factorising first, and how partial fractions feed into binomial series and integration.

## What section 1.11 asks of you

Write a fraction such as

(px + q)/((ax + b)(cx + d))

as a sum of two simpler fractions

A/(ax + b) + B/(cx + d),

where A and B are constants, and (ax + b) and (cx + d) are different linear factors.

## Partial fractions reverse addition

Adding fractions combines them over a common denominator:

```
2/(x − 1) + 3/(x + 2) = (2(x + 2) + 3(x − 1))/((x − 1)(x + 2))
                      = (5x + 1)/((x − 1)(x + 2))
```

Partial fractions run this backwards: given (5x + 1)/((x − 1)(x + 2)), recover the 2 and the 3. Two linear factors produce two simple fractions, each with a constant on top. A constant numerator is enough because the original numerator has degree at most 1, which is exactly what A(x + 2) + B(x − 1) can produce.

## The identity that drives every method

Start from

(5x + 1)/((x − 1)(x + 2)) ≡ A/(x − 1) + B/(x + 2)

and multiply through by (x − 1)(x + 2):

5x + 1 ≡ A(x + 2) + B(x − 1).

This is a polynomial identity: it holds for **every** value of x, including x = 1 and x = −2, where the original fractions were undefined. That is what justifies substituting those values. Two polynomials are identical only if their coefficients match, which justifies equating coefficients too.

### Method 1: substitute the roots of the factors

```
x = 1:   6 = 3A,  so A = 2
x = −2: −9 = −3B, so B = 3
```

Each substitution makes one bracket zero, removing one unknown.

### Method 2: equate coefficients

```
x terms:    5 = A + B
constants:  1 = 2A − B
Adding: 6 = 3A, so A = 2 and B = 3
```

This is slower but useful as a check, and it works even when the roots are awkward.

### Method 3: the cover-up shortcut

To find A, cover the factor (x − 1) in the original fraction and substitute x = 1 into what remains: (5 + 1)/(1 + 2) = 2. To find B, cover (x + 2) and substitute x = −2: (−10 + 1)/(−2 − 1) = 3. This is Method 1 done in your head. In a written answer, show the substitution so the method mark is visible.

## Factorise the denominator first

Questions rarely give the denominator in factorised form. Common shapes:

| Denominator | Factorised | Note |
|---|---|---|
| x² − 9 | (x − 3)(x + 3) | difference of two squares |
| x² + 2x | x(x + 2) | common factor; x is a linear factor |
| 2x² + 5x − 3 | (2x − 1)(x + 3) | non-monic; check by expanding |
| 6 − x − x² | (2 − x)(3 + x) | leading coefficient negative |

## Worked example 1 (calculator-free): a non-monic denominator

Express 7x/(2x² + 5x − 3) in partial fractions.

```
2x² + 5x − 3 = (2x − 1)(x + 3)
7x ≡ A(x + 3) + B(2x − 1)
x = 1/2:  7/2 = A(7/2),  so A = 1
x = −3:  −21 = B(−7),    so B = 3
7x/(2x² + 5x − 3) ≡ 1/(2x − 1) + 3/(x + 3)
```

**Check** with x = 0: the left side is 0; the right side is −1 + 1 = 0.

*Annotation.* Substituting x = 1/2 is the root of 2x − 1, not of x − 1. Choosing the value that makes a bracket zero is the whole point.

## Worked example 2 (calculator-free): a constant numerator

Express 12/(x² − 9) in partial fractions.

```
x² − 9 = (x − 3)(x + 3)
12 ≡ A(x + 3) + B(x − 3)
x = 3:  12 = 6A,   so A = 2
x = −3: 12 = −6B,  so B = −2
12/(x² − 9) ≡ 2/(x − 3) − 2/(x + 3)
```

A constant numerator still gives two fractions. The signs of A and B can differ, and a negative B is written as a subtraction.

## Worked example 3 (calculator-free): x as a factor

Express (3x + 4)/(x² + 2x) in partial fractions.

```
x² + 2x = x(x + 2)
3x + 4 ≡ A(x + 2) + Bx
x = 0:  4 = 2A,   so A = 2
x = −2: −2 = −2B, so B = 1
(3x + 4)/(x² + 2x) ≡ 2/x + 1/(x + 2)
```

## Where partial fractions are used

**Binomial series (section 1.10).** A single fraction such as 3/((1 − x)(1 + 2x)) is hard to expand directly, but each partial fraction is a standard binomial series, and you add the results. The expansion is valid only where both series are valid.

**Integration (HL calculus).** Each partial fraction integrates to a logarithm. For example:

```
∫ 12/(x² − 9) dx = ∫ (2/(x − 3) − 2/(x + 3)) dx
                 = 2 ln|x − 3| − 2 ln|x + 3| + C
```

Recognising when a rational integrand should be split is a key HL skill, so practise the algebra until it is quick and reliable.

## Common mistakes

- Not factorising the denominator fully before splitting.
- Substituting x = 1 for the factor 2x − 1, instead of x = 1/2.
- Sign errors with factors such as (2 − x): its root is x = 2, not x = −2.
- Writing B/(x + 3) − 2 when B = −2, instead of −2/(x + 3).
- Skipping the check. Substituting one easy value (often x = 0) into both forms catches almost every slip.

## Exam technique: the command words

- **Express … in partial fractions**: give the final answer as a sum of fractions with numerical numerators.
- **Hence**: the next part will use your partial fractions, usually to expand as a series or to integrate. An error in A or B carries forward, so check them first.
- **Show that**: if the answer is given, every step of finding A and B must be shown.

Partial fractions appear on HL Paper 1 (calculator-free), and the algebra is the same on Papers 2 and 3.

## Where next

Condense the methods with the [section 1.11 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-11-revision-notes/) and practise with the [section 1.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-11-practice/). For the series side, see the [section 1.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.11.
