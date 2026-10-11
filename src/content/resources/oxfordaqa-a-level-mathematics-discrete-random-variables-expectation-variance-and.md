---
title: "OxfordAQA International AS and A-level Mathematics: Discrete random variables: expectation and variance (9660)"
seoTitle: "OxfordAQA Maths S1.2 Discrete Random Variables Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables: expectation, variance and combinations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 184
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-discrete-random-variables-oxfordaqa-alevel-maths"
description: "Study guide to OxfordAQA International AS and A-level Maths S1.2: expectation, variance, functions of X and independent sums, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide covers section S1.2 (Discrete random variables) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. This content is part of International AS, Unit PSM1 (section 3.2, S1). It teaches the mean, variance and standard deviation of a discrete random variable, of a function of it, and of sums and differences of independent variables.

Related pages: the [revision notes](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and-revision-notes/), the [practice questions](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and-practice/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the free [10-minute diagnostics](/diagnostics/). For the binomial distribution, see [Bernoulli and binomial distributions](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/).

## What this unit covers

| S1.2 content | What you must be able to do |
|---|---|
| Discrete random variables and distributions | Work with a finite distribution given as a table or a simple function |
| Mean, variance, standard deviation | Know and use E(X) = Σ x p, E(g(X)) = Σ g(x) p and Var(X) = E(X²) − μ² |
| Simple functions of X | Find E(2X + 3), E(5X²), E(10X⁻¹), E(100X⁻²), Var(3X), Var(4X − 5), Var(6X⁻¹) |
| Two independent variables | Know and use E(aX ± bY) and Var(aX ± bY) |
| Sums of independent variables | Know and use E(ΣXᵢ) = ΣE(Xᵢ) and Var(ΣXᵢ) = ΣVar(Xᵢ) |

The specification says the number of outcomes is finite and that distributions are given or easily determined as a table or simple function. It states that knowledge of the formulae above is expected, so learn them.

## 1. Discrete random variables and their distributions

A discrete random variable X takes a finite list of values x with probabilities p = P(X = x). The distribution is a table:

| x | x₁ | x₂ | … | xₙ |
|---|---|---|---|---|
| P(X = x) | p₁ | p₂ | … | pₙ |

Two facts do most of the work:
- every probability is at least 0 and at most 1;
- the total of all the probabilities is 1, so Σ p = 1.

The second fact finds a missing probability or an unknown constant.

**Worked example 1.** The table gives the distribution of X. Find k.

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| P(X = x) | 0.10 | 0.30 | 0.25 | k | 0.15 |

```
0.10 + 0.30 + 0.25 + k + 0.15 = 1
0.80 + k = 1
k = 0.20
```

We reuse this distribution below, so keep it in view.

## 2. Mean, variance and standard deviation

The mean (expected value) is the average of X over many repetitions:

```
E(X) = μ = Σ x p
```

Each value is weighted by its probability, so the mean need not be a possible value of X. The mean is the measure of central tendency used here; the mode is the most likely value, and the standard deviation and variance are the measures of spread. The variance measures spread about the mean:

```
Var(X) = σ² = E((X − μ)²) = E(X²) − μ²
E(X²) = Σ x² p
```

The standard deviation is σ = √Var(X). Variance is never negative, so a negative answer means an arithmetic slip. Use the second form, E(X²) − μ², for tables.

**Worked example 2.** Find E(X), Var(X) and the standard deviation for the distribution in example 1 (k = 0.20).

```
E(X)  = 1(0.10) + 2(0.30) + 3(0.25) + 4(0.20) + 5(0.15)
      = 0.10 + 0.60 + 0.75 + 0.80 + 0.75 = 3
E(X²) = 1(0.10) + 4(0.30) + 9(0.25) + 16(0.20) + 25(0.15)
      = 0.10 + 1.20 + 2.25 + 3.20 + 3.75 = 10.5
Var(X) = 10.5 − 3² = 1.5
σ = √1.5 = 1.22 (3 s.f.)
```

## 3. Linear functions: E(aX + b) and Var(aX + b)

If you change every value of X to aX + b, the specification expects you to know:

```
E(aX + b) = a E(X) + b
Var(aX + b) = a² Var(X)
```

The mean moves and scales like the values. The spread is only scaled, and by a² because variance is a squared quantity. Adding b shifts every value equally, so the spread does not change. A negative a gives a positive variance, since a² is positive. For example, Var(−3X) = 9 Var(X).

**Worked example 3.** Using example 2, find E(2X + 3), Var(2X + 3) and Var(4X − 5).

```
E(2X + 3)   = 2(3) + 3 = 9
Var(2X + 3) = 2² × 1.5 = 6
Var(4X − 5) = 4² × 1.5 = 24
```

## 4. E(g(X)) for any function of X

For a function that is not linear, go back to the table and use

```
E(g(X)) = Σ g(x) p
```

You apply g to each value of x and keep the probability unchanged. The mean of g(X) is not g applied to the mean. In particular E(10X⁻¹) is not 10/E(X), and E(5X²) is not 5(E(X))².

**Worked example 4.** The variable W has the following distribution. Find E(W), E(10/W), E(100/W²) and compare E(10/W) with 10/E(W).

| w | 2 | 4 | 5 | 10 |
|---|---|---|---|---|
| P(W = w) | 0.4 | 0.3 | 0.2 | 0.1 |

```
E(W)       = 0.8 + 1.2 + 1.0 + 1.0 = 4
E(10/W)    = 10/2(0.4) + 10/4(0.3) + 10/5(0.2) + 10/10(0.1)
           = 2 + 0.75 + 0.4 + 0.1 = 3.25
E(100/W²)  = 25(0.4) + 6.25(0.3) + 4(0.2) + 1(0.1)
           = 10 + 1.875 + 0.8 + 0.1 = 12.775
10/E(W)    = 10/4 = 2.5
```

So E(10/W) = 3.25, which is not equal to 2.5. For a reciprocal, always work from the table.

## 5. Variance of a non-linear function

For Var(6X⁻¹) and similar, the linear shortcut does not apply. Use the definition with g(X) in place of X:

```
Var(g(X)) = E(g(X)²) − (E(g(X)))²
```

**Worked example 5.** For W in example 4, find Var(6/W).

```
E(6/W)    = 3(0.4) + 1.5(0.3) + 1.2(0.2) + 0.6(0.1)
          = 1.2 + 0.45 + 0.24 + 0.06 = 1.95
E(36/W²)  = 9(0.4) + 2.25(0.3) + 1.44(0.2) + 0.36(0.1)
          = 3.6 + 0.675 + 0.288 + 0.036 = 4.599
Var(6/W)  = 4.599 − 1.95² = 4.599 − 3.8025 = 0.7965
```

## 6. Distributions given by a simple function

Sometimes P(X = x) is a formula. Write out the table first, then proceed as before.

**Worked example 6.** P(V = v) = k(6 − v) for v = 1, 2, 3, 4, 5. Find k, E(V) and Var(V).

```
Probabilities: 5k, 4k, 3k, 2k, k, so 15k = 1 and k = 1/15
E(V)  = (1×5 + 2×4 + 3×3 + 4×2 + 5×1)/15 = 35/15 = 7/3
E(V²) = (1×5 + 4×4 + 9×3 + 16×2 + 25×1)/15 = 105/15 = 7
Var(V) = 7 − (7/3)² = 7 − 49/9 = 14/9
```

## 7. Two independent variables: E(aX ± bY) and Var(aX ± bY)

Independent means the value of one variable gives no information about the other. For independent X and Y the specification expects:

```
E(aX ± bY)   = a E(X) ± b E(Y)
Var(aX ± bY) = a² Var(X) + b² Var(Y)
```

The mean follows the sign. The variance always adds, even for a difference, because uncertainty from each variable accumulates. The mean formula holds whether or not the variables are independent. The variance formula needs independence.

**Worked example 7.** X is the variable from example 2 (mean 3, variance 1.5). Y = W from example 4 (mean 4, variance 5.4). They are independent. Find E(3X − 2Y), Var(3X − 2Y) and the standard deviation of X + Y.

First Var(W). E(W²) = 4(0.4) + 16(0.3) + 25(0.2) + 100(0.1) = 1.6 + 4.8 + 5 + 10 = 21.4, so Var(W) = 21.4 − 16 = 5.4.

```
E(3X − 2Y)   = 3(3) − 2(4) = 1
Var(3X − 2Y) = 9(1.5) + 4(5.4) = 13.5 + 21.6 = 35.1
Var(X + Y)   = 1.5 + 5.4 = 6.9, so sd = √6.9 = 2.63 (3 s.f.)
```

## 8. Sums of independent variables

For independent X₁, X₂, …, Xₙ the specification expects:

```
E(ΣXᵢ) = ΣE(Xᵢ)
Var(ΣXᵢ) = ΣVar(Xᵢ)
```

If the Xᵢ are independent copies of X, then E(X₁ + … + Xₙ) = nE(X) and Var(X₁ + … + Xₙ) = n Var(X). Compare this with nX, where one value is multiplied: E(nX) = nE(X) but Var(nX) = n² Var(X).

**Worked example 8.** X has mean 3 and variance 1.5 (example 2). Compare 2X with X₁ + X₂, where X₁ and X₂ are independent copies of X.

```
2X:       E = 6,  Var = 4 × 1.5 = 6
X₁ + X₂:  E = 6,  Var = 1.5 + 1.5 = 3
```

The means agree but the spreads do not. Doubling one reading doubles the error, whereas adding two independent readings lets some errors cancel. Choose the formula from the wording: "the same value doubled" means aX, "two separate observations added" means X₁ + X₂.

## Common errors

- Forgetting E(X²) = Σ x² p and instead squaring E(X). This turns the variance into zero or a negative number.
- Writing Var(aX + b) = a Var(X) + b, or leaving a unsquared.
- Subtracting variances for X − Y. The variance of a difference is Var(X) + Var(Y).
- Taking E(10/X) as 10/E(X), or E(5X²) as 5(E(X))².
- Using Var(X + Y) = Var(X) + Var(Y) without saying X and Y are independent.
- Mixing up 2X with X₁ + X₂ (see example 8).
- Reporting a standard deviation when asked for variance, or the reverse.
- Not checking that the probabilities add to 1 before starting.

## Next steps

Condense this into the [revision notes](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and-revision-notes/), then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and-practice/). Check progress against the [checklist](/checklists/oxfordaqa/a-level/mathematics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S1.2 Discrete random variables. Published by OxfordAQA; International AS exams from May/June 2018 and International A-level exams from May/June 2019.
