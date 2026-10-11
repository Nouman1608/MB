---
title: "Pearson Edexcel International Advanced Level Mathematics: Discrete random variables (YMA01)"
seoTitle: "Edexcel IAL Maths S1 Discrete Random Variables Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables: probability functions, expectation, variance and the discrete uniform distribution"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 163
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-random-variables-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-distributions-edexcel-alevel-maths"
description: "Worked study guide to Edexcel IAL Maths S1 section 5: probability functions, cumulative distribution, E(X), Var(X) and the discrete uniform."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01) specification, Issue 3, April 2019. It covers unit S1 section 5, topics 5.1 to 5.4: the concept of a discrete random variable, the probability function and cumulative distribution function, the mean and variance, and the discrete uniform distribution. The specification states that S1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions-practice/). The course page is [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/), the printable list is the [checklist](/checklists/edexcel/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/) can help you choose a starting point. For wider exam technique see the [IAL Mathematics exam preparation page](/resources/edexcel-ial-mathematics-exam-preparation/).

## What this unit covers

| Spec topic | What you must be able to do |
|---|---|
| 5.1 | Explain what a discrete random variable is and use correct notation |
| 5.2 | Use the probability function p(x) = P(X = x) and the cumulative distribution function F(x₀) = P(X ≤ x₀) = Σ p(x) over x ≤ x₀ |
| 5.3 | Use E(X) and E(X²) to find Var(X); use E(aX + b) = aE(X) + b and Var(aX + b) = a² Var(X) |
| 5.4 | Use the discrete uniform distribution, including its mean and variance |

## 5.1 The concept of a discrete random variable

A random variable is a quantity whose value is decided by chance. It is discrete when it can take only separate values that can be listed, such as 0, 1, 2, 3. The number of defective items in a box is discrete. The time a bus takes is not, because it can be any value in an interval.

Notation matters. A capital letter, X, names the random variable. A lowercase letter, x, is one particular value it may take. So P(X = 2) means "the probability that the variable equals 2".

The probabilities across all possible values must add to 1. A table showing every value of x with its probability is the probability distribution of X.

### Worked example 1

A fair coin is tossed three times. Let X be the number of times the face changes between one toss and the next, so HHT has X = 1 and HTH has X = 2. Find the distribution of X.

X can be 0, 1 or 2. List the 8 equally likely outcomes.

```
HHH: 0    HHT: 1    HTH: 2    HTT: 1
THH: 1    THT: 2    TTH: 1    TTT: 0
```

Count each value and divide by 8:

```
P(X = 0) = 2/8 = 1/4
P(X = 1) = 4/8 = 1/2
P(X = 2) = 2/8 = 1/4
```

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 1/4 | 1/2 | 1/4 |

Check: 1/4 + 1/2 + 1/4 = 1.

## 5.2 The probability function and the cumulative distribution function

The probability function is p(x) = P(X = x). It can be presented as a table, or as a rule together with the x values it applies to. Two facts hold for every valid probability function:

1. Every p(x) satisfies 0 ≤ p(x) ≤ 1.
2. Σ p(x) = 1, summed over all possible x.

The second fact is how you find an unknown constant.

The cumulative distribution function is F(x₀) = P(X ≤ x₀) = Σ p(x) for x ≤ x₀. It adds up the probabilities from the bottom of the range.

Useful links between F and p, for a variable taking whole-number values:

```
P(X ≥ a)     = 1 − F(a − 1)
P(X > a)     = 1 − F(a)
P(a ≤ X ≤ b) = F(b) − F(a − 1)
p(x)         = F(x) − F(x − 1)
```

The "a − 1" is the step that most often goes wrong. The value a is included in P(X ≥ a), so F must stop one value earlier.

### Worked example 2

The probability function of X is p(x) = k(6 − x) for x = 1, 2, 3, 4, and p(x) = 0 otherwise.

(a) Find k. (b) Tabulate p(x) and F(x). (c) Find P(X > 2) and P(2 ≤ X ≤ 3).

(a) Σ p(x) = 1:

```
k(5 + 4 + 3 + 2) = 14k = 1     so k = 1/14
```

(b)

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| p(x) | 5/14 | 4/14 | 3/14 | 2/14 |
| F(x) | 5/14 | 9/14 | 12/14 | 1 |

(c) P(X > 2) = 1 − F(2) = 1 − 9/14 = 5/14. Check by adding: 3/14 + 2/14 = 5/14.

P(2 ≤ X ≤ 3) = F(3) − F(1) = 12/14 − 5/14 = 7/14 = 1/2.

### Worked example 3: from F back to p

A variable takes values 0, 1, 2, 3 with F(0) = 0.15, F(1) = 0.40, F(2) = 0.70, F(3) = 1. Find the probability function.

```
p(0) = F(0)        = 0.15
p(1) = 0.40 − 0.15 = 0.25
p(2) = 0.70 − 0.40 = 0.30
p(3) = 1 − 0.70    = 0.30
```

The first value, p(0), equals F(0) because nothing lies below it. The last value of F must be 1, which is a quick check on a table you are given.

## 5.3 Mean and variance of a discrete random variable

### Expectation

The mean, or expected value, is the long-run average of X:

```
E(X) = Σ x p(x)
```

For any function g(X), the same idea gives E(g(X)) = Σ g(x) p(x). The case you need most is E(X²) = Σ x² p(x).

### Variance

```
Var(X) = E(X²) − (E(X))²
```

The standard deviation is the positive square root of Var(X). Because Var(X) measures spread about the mean, it can never be negative. A negative answer means you have made an arithmetic error, most often by squaring E(X) wrongly or by forgetting to square the x values in E(X²).

### Linear changes

For constants a and b:

```
E(aX + b)   = aE(X) + b
Var(aX + b) = a² Var(X)
```

Adding b shifts every value by the same amount, so the mean moves but the spread does not. Multiplying by a scales the spread by a, so the variance scales by a². The sign of a does not matter for the variance, since a² is positive.

### Worked example 4

X has the distribution below.

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| p(x) | 0.10 | 0.30 | 0.35 | 0.20 | 0.05 |

(a) Find E(X) and Var(X). (b) Y = 4X − 3. Find E(Y) and Var(Y). (c) Find E(X² − X).

(a)

```
E(X)  = 0(0.10) + 1(0.30) + 2(0.35) + 3(0.20) + 4(0.05)
      = 0 + 0.30 + 0.70 + 0.60 + 0.20 = 1.8

E(X²) = 0(0.10) + 1(0.30) + 4(0.35) + 9(0.20) + 16(0.05)
      = 0 + 0.30 + 1.40 + 1.80 + 0.80 = 4.3

Var(X) = 4.3 − 1.8² = 4.3 − 3.24 = 1.06
```

(b)

```
E(Y)   = 4(1.8) − 3 = 4.2
Var(Y) = 4² × 1.06 = 16.96
```

(c) E(X² − X) = E(X²) − E(X) = 4.3 − 1.8 = 2.5. Splitting the expectation like this works because the expectation of a sum is the sum of the expectations.

### Worked example 5: working back from the mean

X takes the values 1, 2, 3 with p(1) = 0.3, p(2) = a, p(3) = b, and E(X) = 2.1. Find a and b.

```
Probabilities:   0.3 + a + b = 1       so a + b = 0.7
Mean:            0.3 + 2a + 3b = 2.1   so 2a + 3b = 1.8
```

Substitute a = 0.7 − b: 1.4 − 2b + 3b = 1.8, so b = 0.4 and a = 0.3.

Check: 0.3 + 0.3 + 0.4 = 1, and 0.3 + 0.6 + 1.2 = 2.1.

## 5.4 The discrete uniform distribution

A variable has a discrete uniform distribution when it takes n values and each is equally likely. In this unit the values are 1, 2, …, n, so:

```
P(X = x) = 1/n     for x = 1, 2, …, n
E(X)     = (n + 1)/2
Var(X)   = (n² − 1)/12
```

A fair six-sided die, a fair spinner with equal sectors numbered 1 to n, and a ticket drawn at random from numbered tickets are all examples.

### Where the results come from

You are asked for the mean and variance, not a derivation, but knowing the source helps you remember them. Using Σ x = n(n + 1)/2 and Σ x² = n(n + 1)(2n + 1)/6:

```
E(X)   = (1/n) × n(n + 1)/2            = (n + 1)/2
E(X²)  = (1/n) × n(n + 1)(2n + 1)/6    = (n + 1)(2n + 1)/6

Var(X) = (n + 1)(2n + 1)/6 − (n + 1)²/4
       = (n + 1)[2(2n + 1) − 3(n + 1)]/12
       = (n + 1)(n − 1)/12
```

### Worked example 6

A fair 12-sided die is numbered 1 to 12. Find the mean and variance of the score X.

```
E(X)   = (12 + 1)/2 = 6.5
Var(X) = (12² − 1)/12 = 143/12 ≈ 11.9
```

### Worked example 7: values that do not start at 1

A number X is chosen at random from the whole numbers 5, 6, …, 14. Find E(X) and Var(X).

There are 10 values. Let Y = X − 4, so Y takes the values 1 to 10 and is uniform with n = 10. Then X = Y + 4.

```
E(Y)   = 11/2 = 5.5            so E(X) = 5.5 + 4 = 9.5
Var(Y) = (100 − 1)/12 = 8.25   so Var(X) = 1² × 8.25 = 8.25
```

This is the 5.3 rule with a = 1 and b = 4: the mean shifts and the variance does not.

### Worked example 8: finding n

X is uniform on 1, 2, …, n and Var(X) = 8.25. Find n.

```
(n² − 1)/12 = 8.25
n² − 1 = 99
n² = 100, so n = 10   (n is positive)
```

## Common errors

1. Writing P(X ≥ 3) = 1 − F(3). This removes the value 3 as well. Use 1 − F(2).
2. Forgetting to check Σ p(x) = 1 after finding a constant, so a slip in k goes unnoticed.
3. Using E(X²) = (E(X))². The two are equal only when there is no spread at all.
4. Writing Var(aX + b) = a Var(X) + b. The variance is a² Var(X), with no b.
5. Giving a negative variance, or a probability above 1, without noticing it signals an error.
6. For a uniform variable on 1 to n, using n in place of n + 1 in the mean, or n² in place of n² − 1 in the variance.
7. Using the uniform formulas directly for values that do not run 1 to n, instead of shifting first.
8. Rounding E(X) before squaring it in the variance. Keep the exact value until the end.

## Next steps

Try the [practice questions](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions-practice/) with the working covered, then use the [revision notes](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions-revision-notes/) for the last few days. The [checklist](/checklists/edexcel/a-level/mathematics/) lets you tick off topics 5.1 to 5.4.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, first teaching September 2018, published by Pearson. This guide follows S1 section 5, topics 5.1 to 5.4.
