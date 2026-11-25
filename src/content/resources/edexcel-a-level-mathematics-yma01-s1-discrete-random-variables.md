---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Discrete random variables"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-random-variables-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 discrete random variables: probability functions, cumulative distribution functions, E(X), Var(X) and linear coding, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers the core of section 5 of **Unit S1: Statistics 1** (WST01) in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "The concept of a discrete random variable" (5.1); "The probability function and the cumulative distribution function for a discrete random variable" (5.2); and "Mean and variance of a discrete random variable" (5.3), including "use of E(X), E(X²) for calculating the variance of X" and "knowledge and use of E(aX + b) = aE(X) + b, Var(aX + b) = a²Var(X)". The discrete uniform distribution (5.4) has its own guide on [discrete distributions](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions/).

The broader S1 guide on [discrete random variables](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions/) introduces each idea. This page concentrates on the question types that combine them: deriving a distribution from a situation, moving between a formula for F(x) and p(x), finding unknown probabilities from given moments, and combining two independent observations. The [discrete random variables revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-revision-notes/) give quick recall, and the [discrete random variables practice set](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-practice/) has twelve questions with answers.

## The concept

A **random variable** is a quantity whose value is determined by the outcome of a random experiment. It is **discrete** if it can take only particular, separate values (often whole numbers): the number of heads in four tosses, a score on a spinner, the number of customers in a queue. Capital letters (X) name the variable; lower-case letters (x) are its values.

A **probability distribution** lists every possible value with its probability. For it to be valid, every probability must lie between 0 and 1, and the probabilities must add up to 1.

## The probability function and the cumulative distribution function

```
probability function:          p(x) = P(X = x)
cumulative distribution function: F(x₀) = P(X ≤ x₀) = Σ p(x), summed over x ≤ x₀
```

F is a running total of p, so it never decreases and its last value is 1. To recover p from F, subtract consecutive values: p(x) = F(x) − F(previous value).

Be careful with strict and non-strict inequalities for discrete variables. If X takes whole-number values, P(X < 4) = P(X ≤ 3) = F(3), and P(X ≥ 4) = 1 − F(3).

## Worked example 1: building a distribution from a situation

Two fair six-sided dice are rolled, and X is the larger of the two scores (or the common score if they are equal).

For X = x, both dice must show at most x, and at least one must show exactly x. The number of outcomes with both dice at most x is x², so

```
F(x) = P(X ≤ x) = x²/36           for x = 1, 2, ..., 6
p(x) = F(x) − F(x − 1) = (x² − (x − 1)²)/36 = (2x − 1)/36
```

| x | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| p(x) | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 |

Working with F first is often quicker than listing outcomes. Here it also gives a neat check: the probabilities add to 36/36.

**Mean and variance.**

```
E(X)  = Σ x p(x)  = (1 + 6 + 15 + 28 + 45 + 66)/36 = 161/36 = 4.47
E(X²) = Σ x² p(x) = (1 + 12 + 45 + 112 + 225 + 396)/36 = 791/36
Var(X) = E(X²) − [E(X)]² = 791/36 − (161/36)² = 2555/1296 = 1.97
```

Keep fractions (or full calculator values) until the last step. Rounding E(X) to 4.5 before squaring would give a variance of 1.72, which is wrong.

## Worked example 2: from a formula for F

A discrete random variable X takes the values 1, 2, 3, 4, 5, and its cumulative distribution function is F(x) = x(x + k)/30.

**(a) Find k.** The largest value must give F = 1: 5(5 + k)/30 = 1, so 5 + k = 6 and **k = 1**.

**(b) Find the probability function.**

```
p(x) = F(x) − F(x − 1) = [x(x + 1) − (x − 1)x]/30 = 2x/30 = x/15
```

**(c) Find P(X = 3) and P(X > 2).** P(X = 3) = 3/15 = 1/5. P(X > 2) = 1 − F(2) = 1 − 6/30 = 4/5.

## Expectation and variance

```
E(X)   = Σ x p(x)
E(X²)  = Σ x² p(x)
Var(X) = E(X²) − [E(X)]²
E(g(X)) = Σ g(x) p(x)      for any function g
```

E(X) is the long-run mean of X over many repetitions; it need not be a value X can take. Var(X) measures spread about that mean, so it can never be negative.

**Linear changes.** If Y = aX + b:

```
E(aX + b)  = aE(X) + b
Var(aX + b) = a² Var(X)
```

The added constant b shifts every value equally, so it has no effect on the spread. A negative a still gives a positive variance, because it is squared.

## Worked example 3: unknown probabilities from the mean

X has the distribution below, and E(X) = 2.3.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 0.2 | a | b | 0.1 |

**(a) Find a and b.** Two equations are needed:

```
total:  0.2 + a + b + 0.1 = 1        so  a + b = 0.7
mean:   0.2 + 2a + 3b + 0.4 = 2.3    so  2a + 3b = 1.7
substituting a = 0.7 − b:  1.4 + b = 1.7,  b = 0.3,  a = 0.4
```

**(b) Find Var(X).** E(X²) = 0.2 + 1.6 + 2.7 + 1.6 = 6.1, so Var(X) = 6.1 − 2.3² = **0.81**.

**(c) Y = 5 − 2X. Find E(Y) and Var(Y).** E(Y) = 5 − 2(2.3) = **0.4**. Var(Y) = (−2)² × 0.81 = **3.24**.

**(d) Two independent observations.** Two independent values X₁ and X₂ are taken. Find P(X₁ + X₂ = 4).

```
pairs giving 4: (1, 3), (3, 1), (2, 2)
P = 0.2 × 0.3 + 0.3 × 0.2 + 0.4 × 0.4 = 0.06 + 0.06 + 0.16 = 0.28
```

List the ordered pairs: (1, 3) and (3, 1) are different outcomes and both count.

## Common mistakes

- Using Σ x² p(x) as the variance without subtracting [E(X)]².
- Writing [E(X)]² as E(X²), or the reverse.
- Applying Var(aX + b) = aVar(X) + b. The constant disappears and a is squared.
- Reading P(X < 4) as F(4) for a whole-number variable.
- Forgetting one of the two orders when two independent observations are combined.
- Not checking that the probabilities add to 1 after finding unknowns.

## Exam technique

- **"Show that"** k takes a value: write Σ p(x) = 1 (or F(largest value) = 1) with the terms shown, then solve.
- **"Find the probability distribution"**: give a table of every value with its probability, or a formula with its range of values.
- **"Find E(X) and Var(X)"**: show Σ x p(x) and Σ x² p(x) with substitutions, then use the variance formula.
- **"Hence"** after finding Var(X): use your result with Var(aX + b), rather than starting again.
- Give exact fractions where the probabilities are fractions; otherwise 3 significant figures.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, section 5 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
