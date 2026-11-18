---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.8 Sum of infinite convergent geometric sequences"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-8"
description: "IB DP Maths AA section 1.8 study guide: why |r| < 1 makes a geometric series converge, S∞ = u₁/(1 − r), unknown ratios, ranges of x and contexts."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.8, the sum of infinite convergent geometric sequences**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is common content for SL and HL. You need the formula S∞ = u₁/(1 − r), the condition |r| < 1 that makes it valid, and the ability to use both in algebraic and real-world problems.

Section 1.8 extends the finite geometric series of section 1.3, so you should already be confident with uₙ = u₁rⁿ⁻¹ and Sₙ = u₁(1 − rⁿ)/(1 − r). Those, with arithmetic sequences and financial applications, are covered in the [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/). This page goes further on the infinite case.

## What section 1.8 asks of you

- Know that an infinite geometric series has a finite sum only when |r| < 1.
- Use S∞ = u₁/(1 − r), with |r| < 1.
- Apply the result: unknown terms or ratios, the values of x for which a series converges, recurring decimals and contexts.

## Why |r| < 1 is the condition

Start from the finite sum:

Sₙ = u₁(1 − rⁿ)/(1 − r) = u₁/(1 − r) − u₁rⁿ/(1 − r).

The first part does not depend on n. Everything therefore depends on what rⁿ does as n grows.

- If |r| < 1, rⁿ gets closer and closer to 0. So Sₙ gets closer and closer to u₁/(1 − r). This limit is S∞.
- If r > 1, rⁿ grows without bound, so Sₙ does too.
- If r = 1, every term equals u₁, so Sₙ = nu₁, which grows without bound (for u₁ ≠ 0).
- If r ≤ −1, rⁿ swings between positive and negative values that do not shrink, so Sₙ never settles.

Watch the partial sums settle for u₁ = 1:

| n | 1 | 2 | 3 | 5 | 10 | 20 | Limit |
|---|---|---|---|---|---|---|---|
| Sₙ, r = 0.5 | 1 | 1.5 | 1.75 | 1.9375 | 1.998 | 2.000 | 2 |
| Sₙ, r = −0.5 | 1 | 0.5 | 0.75 | 0.6875 | 0.666 | 0.6667 | 2/3 |

With r = 0.5 the sums rise steadily towards 2. With r = −0.5 they overshoot and undershoot alternately, closing in on 2/3. Both match u₁/(1 − r). No finite sum ever equals S∞ exactly; S∞ is the value the partial sums approach.

**The gap.** The difference between the limit and a partial sum is S∞ − Sₙ = u₁rⁿ/(1 − r). This tells you how many terms are needed for a given accuracy (Worked example 3).

## Recurring decimals

A recurring decimal is an infinite geometric series in disguise, so S∞ turns it into an exact fraction. If the decimal starts with a non-recurring part, separate it first.

```
0.8333… = 0.8 + 0.03 + 0.003 + …
        = 0.8 + 0.03/(1 − 0.1)
        = 4/5 + 1/30 = 5/6

1.2333… = 1.2 + 0.03/(1 − 0.1) = 6/5 + 1/30 = 37/30
```

Here u₁ = 0.03 and r = 0.1 for the recurring tail. A two-digit repeat uses r = 0.01.

## Worked example 1 (calculator-free): two possible series

The second term of a geometric series is 6 and its sum to infinity is 32. Find the possible values of the common ratio and the first term.

```
u₁r = 6                 and    u₁/(1 − r) = 32
So u₁ = 32(1 − r), and then 32r(1 − r) = 6
32r − 32r² = 6
16r² − 16r + 3 = 0
(4r − 1)(4r − 3) = 0,   so r = 1/4 or r = 3/4
r = 1/4: u₁ = 24;   r = 3/4: u₁ = 8
```

Both ratios satisfy |r| < 1, so **both** series are valid: 24 + 6 + 1.5 + … and 8 + 6 + 4.5 + …, each with sum 32.

*Annotation.* Always test each root against |r| < 1. When a root fails, reject it in writing; when both pass, give both. Writing u₁ in terms of r and substituting is the standard route for any "two conditions, two unknowns" question.

## Worked example 2 (calculator-free): the values of x for convergence

The series 5 + 10/x + 20/x² + … is geometric. Find the values of x for which it has a sum to infinity, and find that sum in terms of x.

```
r = (10/x)/5 = 2/x
Converges when |2/x| < 1, that is |x| > 2
So x < −2 or x > 2
S∞ = 5/(1 − 2/x) = 5x/(x − 2)
```

*Annotation.* The condition here gives two separate intervals, not one, because |2/x| < 1 means x is far from zero. Solve |r| < 1 carefully rather than assuming the answer is a single interval between two numbers. The inequalities are strict: x = 2 or x = −2 gives |r| = 1, and the series diverges.

## Series in sigma notation

Read the first term from the lower limit, not from the general term.

Σ (k = 1 to ∞) 6(−1/2)ᵏ has first term 6(−1/2)¹ = −3 and ratio −1/2, so the sum is −3/(1 − (−1/2)) = −3/(3/2) = −2.

A common error is to take u₁ = 6, which would give 4.

## Worked example 3 (calculator allowed): how many terms?

A geometric series has u₁ = 40 and r = 0.75. Find the smallest number of terms for which Sₙ is within 0.5 of S∞.

```
S∞ = 40/0.25 = 160
S∞ − Sₙ = 40(0.75)ⁿ/0.25 = 160(0.75)ⁿ
160(0.75)ⁿ < 0.5
(0.75)ⁿ < 1/320
n > ln(1/320)/ln 0.75 = 20.05…      (inequality flips: ln 0.75 < 0)
Smallest n = 21
```

Check with a GDC table: the gap is 0.507 when n = 20 and 0.381 when n = 21.

## Worked example 4 (calculator-free, in context)

A ball is dropped from a height of 10 m. After each bounce it rises to 60% of the height from which it fell. Assuming it bounces indefinitely, find the total vertical distance it travels.

```
Down:      10
Up then down after each bounce: 2 × (6 + 3.6 + 2.16 + …)
Rebound series: u₁ = 6, r = 0.6, sum = 6/0.4 = 15
Total = 10 + 2 × 15 = 40 m
```

*Annotation.* The first drop happens once; every later height is travelled twice. Treating the whole motion as a single series starting at 10 with ratio 0.6 gives 25 m, which forgets every upward journey.

## Common mistakes

- Using S∞ when |r| ≥ 1. Always state "|r| = … < 1, so S∞ exists" before using the formula.
- Writing ≤ in a convergence condition. |r| = 1 does not converge.
- Taking the first term of a sigma series from the coefficient instead of the lower limit.
- Not flipping the inequality after dividing by ln of a number less than 1.
- Accepting a root r ≥ 1 from a quadratic without checking it.
- Losing the sign of a negative ratio: with r = −0.4, 1 − r = 1.4, not 0.6.

## Exam technique: the command words

- **Explain why the sum to infinity exists**: name r, give |r| and state that it is less than 1. One sentence, but it must contain the value.
- **Find the values of x for which the series converges**: set up |r| < 1 and solve it completely, giving strict inequalities.
- **Find the exact value**: fractions only, as in recurring decimal questions.
- **Show that**: for instance "show that r satisfies 16r² − 16r + 3 = 0"; every algebraic step must be visible.

On Paper 1 these questions are exact and algebraic. On Paper 2, expect contexts and "how many terms" questions that need logarithms or a GDC table.

## Where next

Condense this page with the [section 1.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-8-revision-notes/), then work through the [section 1.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-8-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.8.
