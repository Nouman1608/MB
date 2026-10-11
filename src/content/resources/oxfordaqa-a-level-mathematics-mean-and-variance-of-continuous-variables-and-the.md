---
title: "OxfordAQA International AS and A-level Mathematics: Mean and variance of continuous variables and the exponential distribution (9660)"
seoTitle: "OxfordAQA A-level Maths Continuous Mean & Exponential"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Mean and variance of continuous variables and the exponential distribution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 203
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-continuous-random-variables-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-exponential-distribution-oxfordaqa-alevel-maths"
description: "Study guide to means and variances of continuous random variables and the exponential distribution for OxfordAQA International A-level Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the second part of section S2.2 (mean and variance of continuous random variables, functions of X, and sums and differences of independent variables) and all of S2.3 (the exponential distribution). The specification places this content in International A-level Unit S2 (Statistics), so it is not examined at International AS.

Finding probabilities from a pdf or cdf is taught separately in [Probability density and cumulative distribution functions](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution/). The Poisson ideas used in section 4 are in [The Poisson distribution](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution/). Hub: [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/). Printable [checklist](/checklists/oxfordaqa/a-level/mathematics/). After this guide, use the [revision notes](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-revision-notes/) and the [practice set](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-practice/). To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What you must be able to do

| Section | Outcome |
|---|---|
| S2.2 | Know and use E(X) = ∫ x f(x) dx and E(g(X)) = ∫ g(x) f(x) dx |
| S2.2 | Know and use Var(X) = E(X²) − μ² |
| S2.2 | Know and use E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X) |
| S2.2 | Find the mean and variance of simple functions such as 2X + 3, 5X², 10X⁻¹, 4X − 5, 6X⁻¹ |
| S2.2 | Use E(aX ± bY) = aE(X) ± bE(Y) and Var(aX ± bY) = a²Var(X) + b²Var(Y) for independent X and Y |
| S2.2 | Use E(ΣXᵢ) = ΣE(Xᵢ) and Var(ΣXᵢ) = ΣVar(Xᵢ) for independent Xᵢ |
| S2.3 | State when an exponential distribution applies, and its link with Poisson events |
| S2.3 | Find exponential probabilities from the cdf or by integrating the pdf |
| S2.3 | Use the mean, variance and standard deviation of an exponential distribution (proofs are not expected) |

## 1. Mean and variance from a pdf

For a continuous random variable X with pdf f(x), the integrals run over the range where f is non-zero.

| Quantity | Formula |
|---|---|
| Mean | E(X) = μ = ∫ x f(x) dx |
| Expected value of g(X) | E(g(X)) = ∫ g(x) f(x) dx |
| Variance | Var(X) = σ² = E(X²) − μ² |
| Standard deviation | σ = √Var(X) |

The variance is also E((X − μ)²). The form E(X²) − μ² is usually quicker because E(X²) is just the case g(x) = x².

**Worked example 1.** X has pdf f(x) = 4x³/15 for 1 ≤ x ≤ 2, and 0 otherwise. Find E(X), E(X²) and Var(X).

```
E(X) = ∫ from 1 to 2 of x · 4x³/15 dx = (4/15) ∫ x⁴ dx
     = (4/15) [x⁵/5] from 1 to 2 = (4/15)(31/5)
     = 124/75   (about 1.65)

E(X²) = (4/15) ∫ x⁵ dx = (4/15) [x⁶/6] from 1 to 2
      = (4/15)(63/6) = 14/5

Var(X) = 14/5 − (124/75)² = 14/5 − 15376/5625
       = (15750 − 15376)/5625 = 374/5625   (about 0.0665)
```

Check the pdf first if you are unsure: ∫ 4x³/15 dx from 1 to 2 is (16 − 1)/15 = 1. A mean outside the range of X means an arithmetic slip.

## 2. Functions of X

**Linear functions.** For constants a and b:

```
E(aX + b) = aE(X) + b
Var(aX + b) = a²Var(X)
```

Adding b shifts the distribution and does not change its spread. Multiplying by a scales the spread by a, so the variance by a². A negative a gives the same variance as |a|: Var(−2X) = 4Var(X).

**Non-linear functions.** Do not push E through the function. E(X²) is not (E(X))², and E(1/X) is not 1/E(X). Use the integral E(g(X)) = ∫ g(x) f(x) dx instead.

**Worked example 2.** Using the variable from example 1, find (a) E(2X + 3), (b) E(5X²), (c) E(10X⁻¹), (d) Var(3X), (e) Var(6X⁻¹).

```
(a) E(2X + 3) = 2(124/75) + 3 = 473/75

(b) E(5X²) = 5E(X²) = 5(14/5) = 14

(c) E(X⁻¹) = (4/15) ∫ x² dx from 1 to 2 = (4/15)(7/3) = 28/45
    E(10X⁻¹) = 10(28/45) = 56/9

(d) Var(3X) = 9 × 374/5625 = 374/625

(e) For Var(6X⁻¹) you need Var(X⁻¹) = E(X⁻²) − (E(X⁻¹))².
    E(X⁻²) = (4/15) ∫ x dx from 1 to 2 = (4/15)(3/2) = 2/5
    Var(X⁻¹) = 2/5 − (28/45)² = 810/2025 − 784/2025 = 26/2025
    Var(6X⁻¹) = 36 × 26/2025 = 104/225
```

Notice in (e) that the variance of a function needs E of the squared function. For X⁻¹ that is E(X⁻²).

## 3. Sums and differences of independent variables

If X and Y are independent continuous random variables:

```
E(aX ± bY) = aE(X) ± bE(Y)
Var(aX ± bY) = a²Var(X) + b²Var(Y)
```

The variances always add, even for a difference. Subtracting a variable removes none of its uncertainty. The mean formula holds with or without independence, but the variance formula needs it.

For independent X₁, X₂, …, Xₙ:

```
E(ΣXᵢ) = ΣE(Xᵢ)        Var(ΣXᵢ) = ΣVar(Xᵢ)
```

**Worked example 3.** X is the variable from example 1. Y is independent of X, with pdf g(y) = 4y³ for 0 ≤ y ≤ 1. Find the mean and variance of 2X − 3Y.

```
E(Y) = ∫ 4y⁴ dy from 0 to 1 = 4/5
E(Y²) = ∫ 4y⁵ dy from 0 to 1 = 4/6 = 2/3
Var(Y) = 2/3 − (4/5)² = 2/75

E(2X − 3Y) = 2(124/75) − 3(4/5) = 248/75 − 180/75 = 68/75
Var(2X − 3Y) = 4(374/5625) + 9(2/75) = 1496/5625 + 1350/5625 = 2846/5625
```

**Two readings of "twice".** Suppose a machine part has length X. Two independent parts laid end to end have total length X₁ + X₂, with variance 2Var(X). One part scaled to twice its size has length 2X, with variance 4Var(X). These are different situations. Write down which one the question describes.

## 4. The exponential distribution

**When it applies.** Suppose events occur at random, singly, independently and at a constant average rate λ per unit of time (or length). The number of events in an interval of length t then has a Poisson distribution with mean λt. The specification states the link: the lengths of intervals between Poisson events have an exponential distribution. So if X is the waiting time (or distance) from one event to the next, X is exponential with parameter λ. In notation, X ~ Exp(λ).

Typical settings are the time between calls to a helpline, the distance between faults along a cable, or the time between particle emissions.

**The functions.** For x ≥ 0:

```
f(x) = λe^(−λx)
F(x) = P(X ≤ x) = 1 − e^(−λx)
P(X > x) = e^(−λx)
```

The last result follows from the Poisson link. X > x means no events in an interval of length x, which has probability e^(−λx), since a Poisson variable with mean λx is zero with probability e^(−λx). Integrating f gives the same answer.

**Mean and variance** (proofs are not expected):

| Quantity | Value |
|---|---|
| E(X) | 1/λ |
| Var(X) | 1/λ² |
| Standard deviation | 1/λ |

The mean and standard deviation are equal. That is a quick check for whether data could be exponential.

**Worked example 4.** Calls reach a helpline at an average rate of 0.4 per minute, at random. Let X minutes be the time between consecutive calls. Find (a) P(X < 3), (b) P(X > 5), (c) P(2 < X < 6), (d) the value t such that P(X > t) = 0.1, (e) the mean and standard deviation of X.

```
X ~ Exp(0.4)

(a) P(X < 3) = F(3) = 1 − e^(−1.2) = 0.699

(b) P(X > 5) = e^(−2) = 0.135

(c) P(2 < X < 6) = F(6) − F(2) = e^(−0.8) − e^(−2.4) = 0.359
    (as an integral: ∫ 0.4e^(−0.4x) dx from 2 to 6 = [−e^(−0.4x)] = e^(−0.8) − e^(−2.4))

(d) e^(−0.4t) = 0.1
    −0.4t = ln 0.1, so t = ln 10 / 0.4 = 5.76 minutes

(e) E(X) = 1/0.4 = 2.5 minutes, and the standard deviation is also 2.5 minutes
```

**Linking back to Poisson counts.** In example 4 the number of calls in 3 minutes is Poisson with mean 0.4 × 3 = 1.2. The probability of no calls is e^(−1.2) = 0.301, which equals P(X > 3) = 1 − 0.699. Use whichever form the question makes easier.

**Worked example 5.** The time X hours to repair a fault has an exponential distribution with mean 8 hours. Find P(X > 10).

The mean is 1/λ = 8, so λ = 1/8. Then P(X > 10) = e^(−10/8) = e^(−1.25) = 0.287.

**Combining with section 2.** For X ~ Exp(0.5), the mean is 2 and the variance is 4. Then E(X²) = Var(X) + (E(X))² = 4 + 4 = 8, so:

```
E(2X + 3) = 2(2) + 3 = 7
E(5X²) = 5(8) = 40
Var(4X − 5) = 16 × 4 = 64
```

For independent exponential waiting times, section 3 applies to their means and variances. The sum of two exponential variables is not itself exponential, so use the formulas for the mean and variance only.

## Common errors

- Using E(X²) = (E(X))². The gap between them is exactly Var(X).
- Forgetting to subtract μ² at the end of a variance calculation.
- Writing Var(aX + b) = aVar(X) + b. The correct result is a²Var(X).
- Writing Var(X − Y) = Var(X) − Var(Y). It is Var(X) + Var(Y) for independent variables.
- Treating X₁ + X₂ and 2X as the same. Their variances are 2Var(X) and 4Var(X).
- Using λ as the mean of an exponential distribution. The mean is 1/λ.
- Mixing units, such as a rate per minute with a time in hours. Convert first.
- Using P(X < x) = e^(−λx). That is P(X > x); the cdf is 1 − e^(−λx).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA: sections S2.2 (second part) and S2.3.
