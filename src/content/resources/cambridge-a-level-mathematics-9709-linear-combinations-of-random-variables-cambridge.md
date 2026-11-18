---
title: "Cambridge A Level Mathematics (9709): Linear combinations of random variables"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "linear-combinations-of-random-variables-cambridge"
description: "Cambridge 9709 Paper 6 subtopic 6.2 in depth: E and Var of aX + b and aX + bY, sums versus multiples, normal combinations and Poisson sums."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.2 Linear combinations of random variables is short in the Cambridge International AS & A Level Mathematics 9709 syllabus: it is a list of six results. In Paper 6 those results drive some of the longest questions, because a context has to be translated into the right combination before any result can be used. This guide states each result, then concentrates on the translation step: totals, differences, comparisons such as "more than twice", and the distinction between adding several independent values and multiplying one value.

The [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/) covers the whole paper. This page is paired with the [linear combinations revision notes](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge-revision-notes/) and the [linear combinations practice questions](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge-practice/).

## What the syllabus asks for

Candidates should be able to use, when solving problems, the results that:

- E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X);
- E(aX + bY) = aE(X) + bE(Y);
- Var(aX + bY) = a²Var(X) + b²Var(Y) for independent X and Y;
- if X has a normal distribution then so does aX + b;
- if X and Y have independent normal distributions then aX + bY has a normal distribution;
- if X and Y have independent Poisson distributions then X + Y has a Poisson distribution.

Proofs of these results are not required.

## One variable: aX + b

Adding a constant shifts every value, so it changes the mean but not the spread. Multiplying by a scales both.

```
E(aX + b) = aE(X) + b
Var(aX + b) = a²Var(X)          (b disappears; a is squared)
SD(aX + b) = |a| × SD(X)
```

**Example.** Daily temperatures C in °C have mean 20 and standard deviation 4. In °F, F = 1.8C + 32, so E(F) = 1.8 × 20 + 32 = 68 and SD(F) = 1.8 × 4 = 7.2, giving Var(F) = 51.84.

## Two variables: aX + bY

```
E(aX + bY) = aE(X) + bE(Y)                  (always true)
Var(aX + bY) = a²Var(X) + b²Var(Y)          (X and Y independent)
```

The variance result has a plus sign even when b is negative, because b² is positive. So Var(X − Y) = Var(X) + Var(Y). A difference is more variable than either quantity alone, never less. Using a minus sign here is the most common error in the whole subtopic.

## Sums of several values versus a multiple

This is the distinction that most questions test. Let X have mean 50 and variance 9, and let X₁ and X₂ be two independent observations of X.

| Quantity | Meaning | Mean | Variance |
|---|---|---|---|
| X₁ + X₂ | two separate values added | 100 | 9 + 9 = 18 |
| 2X | one value doubled | 100 | 2² × 9 = 36 |

The means agree, but the variances do not. Adding two independent values lets high and low values partly cancel; doubling a single value doubles any deviation. Read the context to decide which is meant:

- "the total mass of 10 randomly chosen bags" is X₁ + X₂ + … + X₁₀, with variance 10Var(X);
- "a bag's mass is measured in grams rather than kilograms" is 1000X, with variance 1000²Var(X);
- "the mass of one large tin is more than twice the mass of one small tin" is L > 2S, that is, L − 2S > 0, with variance Var(L) + 4Var(S).

## Normal combinations

If the variables are independent and normal, every linear combination is normal too. So a probability about a total, a difference or a comparison is found by forming the combination, finding its mean and variance, and standardising.

**Worked example 1: a total.** Bags of sugar have masses that are normally distributed with mean 1000 g and standard deviation 12 g. Ten bags are packed into a box whose mass is normally distributed with mean 400 g and standard deviation 20 g. Find the probability that a packed box has total mass more than 10 450 g.

```
T = S₁ + S₂ + … + S₁₀ + B
E(T)   = 10 × 1000 + 400 = 10 400
Var(T) = 10 × 12² + 20² = 1440 + 400 = 1840
P(T > 10 450) = P(Z > 50/√1840) = P(Z > 1.166) = 1 − 0.8782 = 0.122
```

*Annotation:* the ten bags are ten different bags, so their variances add ten times. Writing 10S with variance 100 × 144 = 14 400 would be wrong.

**Worked example 2: a comparison by difference.** The heights of adult men in a population are normally distributed with mean 176 cm and standard deviation 7 cm; those of adult women have mean 163 cm and standard deviation 6 cm. A man and a woman are chosen at random. Find the probability that the woman is taller.

"The woman is taller" means W > M, which is M − W < 0.

```
D = M − W:   E(D) = 176 − 163 = 13,   Var(D) = 7² + 6² = 85
P(D < 0) = P(Z < −13/√85) = P(Z < −1.410) = 1 − 0.9207 = 0.0793
```

Every comparison works the same way: move everything to one side so that the question becomes "combination > 0" or "combination < 0".

## Sums of Poisson variables

If X ~ Po(λ) and Y ~ Po(μ) are independent, then X + Y ~ Po(λ + μ). This lets you combine counts from different sources or different intervals.

**Example.** Machine A produces faults at random at a mean rate of 2.1 per day, and machine B independently at 1.4 per day. The total number of faults in a day is Po(3.5), so the probability of exactly 4 faults in a day is e^(−3.5) × 3.5⁴/4! = **0.189**.

Two warnings:

- The syllabus result is for **sums**. A difference X − Y can be negative, so it cannot be Poisson.
- A **multiple** 2X is not Poisson either: its mean is 2λ but its variance is 4λ, and a Poisson variable has equal mean and variance. Doubling the interval gives X₁ + X₂ ~ Po(2λ), which is different from 2X.

## Combinations of non-normal variables

The expectation and variance results do not need normality. For example, if X is the score on a fair die (mean 3.5, variance 35/12) and the die is thrown twice, T = 3X₁ − X₂ has E(T) = 10.5 − 3.5 = 7 and Var(T) = 9 × 35/12 + 35/12 = 29.2. What you cannot do without normality (or the Poisson result) is name the distribution of T and use tables.

## Common mistakes

- Subtracting variances for a difference.
- Treating the total of n independent values as nX, giving variance n²Var(X).
- Forgetting to square a coefficient: Var(3X) is 9Var(X), not 3Var(X).
- Including b in Var(aX + b).
- Using the variance instead of the standard deviation when standardising.
- Claiming X − Y or 2X is Poisson.

## Exam technique

- **Define the combination** in symbols before calculating, for example "Let D = L − 2S". Method marks are often attached to the correct combination.
- **Find the probability:** state the mean and variance of the combination, then standardise with the standard deviation.
- **State an assumption:** independence is the usual one, written in context, such as "the masses of the bags are independent of each other".
- **Find the value of k** in P(X − Y > k) = 0.05: form X − Y, then use the z-value 1.645 in reverse.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 6.2 "Linear combinations of random variables" (Probability & Statistics 2, Paper 6).
