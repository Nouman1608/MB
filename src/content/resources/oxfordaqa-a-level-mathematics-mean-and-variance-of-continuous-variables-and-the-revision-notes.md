---
title: "OxfordAQA International AS and A-level Mathematics: Mean and variance of continuous variables and the exponential distribution (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Exponential Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on expectation, variance, sums of independent variables and the exponential distribution for OxfordAQA A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section S2.2 (second part: mean and variance of continuous random variables and of sums of independent variables) and section S2.3 (exponential distribution). The specification places this in International A-level Unit S2 (Statistics); it is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the/), then test yourself with the [practice set](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-practice/). Pdf and cdf work is in [Probability density and cumulative distribution functions](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-revision-notes/). Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/). Unsure where to start? Take a [free diagnostic](/diagnostics/).

## S2.2 Formulae to know

| Result | Formula |
|---|---|
| Mean | E(X) = μ = ∫ x f(x) dx |
| Function of X | E(g(X)) = ∫ g(x) f(x) dx |
| Variance | Var(X) = E(X²) − μ² (equal to E((X − μ)²)) |
| Standard deviation | σ = √Var(X) |
| Linear change | E(aX + b) = aE(X) + b |
| Linear change | Var(aX + b) = a²Var(X) |
| Two independent variables | E(aX ± bY) = aE(X) ± bE(Y) |
| Two independent variables | Var(aX ± bY) = a²Var(X) + b²Var(Y) |
| Many independent variables | E(ΣXᵢ) = ΣE(Xᵢ) and Var(ΣXᵢ) = ΣVar(Xᵢ) |

The integrals run over the range where f(x) is non-zero. The specification says these formulae are expected knowledge, so learn them rather than deriving them.

## Method: mean and variance from a pdf

1. Write down f(x) and its range. Check that the area is 1 if you can do so quickly.
2. Calculate E(X) = ∫ x f(x) dx.
3. Calculate E(X²) = ∫ x² f(x) dx.
4. Var(X) = E(X²) − μ².
5. For other functions, put g(x) into the integral: E(g(X)) = ∫ g(x) f(x) dx.
6. Sense-check: the mean must lie inside the range of X, and the variance must be positive.

**Worked reminder.** f(x) = 3(1 − x)² for 0 ≤ x ≤ 1.

```
E(X)  = 3 ∫ x(1 − x)² dx = 3 ∫ (x − 2x² + x³) dx
      = 3 [x²/2 − 2x³/3 + x⁴/4] from 0 to 1
      = 3(1/2 − 2/3 + 1/4) = 3(1/12) = 1/4

E(X²) = 3 ∫ (x² − 2x³ + x⁴) dx = 3(1/3 − 1/2 + 1/5) = 3(1/30) = 1/10

Var(X) = 1/10 − (1/4)² = 1/10 − 1/16 = 3/80
```

## Functions of X

| Function | Mean | Variance |
|---|---|---|
| X + b | E(X) + b | Var(X) |
| aX | aE(X) | a²Var(X) |
| aX + b | aE(X) + b | a²Var(X) |
| 5X² | 5E(X²) | needs E(X⁴): integrate |
| 10X⁻¹ | 10E(X⁻¹) by integration | 100(E(X⁻²) − (E(X⁻¹))²) |
| 100X⁻² | 100E(X⁻²) by integration | needs E(X⁻⁴): integrate |

The specification gives E(2X + 3), E(5X²), E(10X⁻¹), E(100X⁻²), Var(3X), Var(4X − 5) and Var(6X⁻¹) as examples of what can be set.

**Must-know distinctions**

- E(X²) is not (E(X))². The difference is Var(X).
- E(1/X) is not 1/E(X). Integrate (1/x) f(x).
- Var(aX + b) ignores b and squares a.
- Var(−X) = Var(X).
- X₁ + X₂ (two independent copies) has variance 2Var(X). 2X has variance 4Var(X).
- Var(X − Y) = Var(X) + Var(Y) for independent X and Y.

**Worked reminder.** E(X) = 12, Var(X) = 4; E(Y) = 5, Var(Y) = 9; X and Y independent.

```
E(3X − 2Y) = 3(12) − 2(5) = 26
Var(3X − 2Y) = 9(4) + 4(9) = 72
```

## S2.3 Exponential distribution

**Conditions.** The events occur singly, independently, at random and at a constant average rate λ per unit of time (or length). The lengths of the intervals between Poisson events then have an exponential distribution. If the number of events in an interval of length t is Poisson with mean λt, the gap X to the next event is Exp(λ).

| Result | Formula (x ≥ 0) |
|---|---|
| pdf | f(x) = λe^(−λx) |
| cdf | F(x) = 1 − e^(−λx) |
| Upper tail | P(X > x) = e^(−λx) |
| Interval | P(a < X < b) = e^(−λa) − e^(−λb) |
| Mean | E(X) = 1/λ |
| Variance | Var(X) = 1/λ² |
| Standard deviation | 1/λ |
| Second moment | E(X²) = Var(X) + (E(X))² = 2/λ² |

Proofs of the mean and variance are not expected.

**Method for an exponential question**

1. Identify the rate λ per unit. If you are given the mean m, then λ = 1/m.
2. Make sure the units of λ and x match. Convert if not.
3. Choose the form: P(X > x) = e^(−λx) for an upper tail, 1 − e^(−λx) for a lower tail, or a difference for an interval.
4. To find x for a given probability, set the expression equal to the probability and take natural logs.
5. For a median, solve F(x) = 0.5, which gives x = ln 2 / λ.

**Worked reminder.** X ~ Exp(0.25). Then P(X > 3) = e^(−0.75) = 0.472. The mean and standard deviation are both 4. Also E(X²) = 2/0.0625 = 32, so E(5X²) = 160.

**Worked reminder (combined).** Two independent waiting times T₁ and T₂ are each Exp(0.5), so each has mean 2 and variance 4.

```
E(T₁ + T₂) = 4         Var(T₁ + T₂) = 8        sd = 2.83
E(T₁ − T₂) = 0         Var(T₁ − T₂) = 8
E(3T₁) = 6             Var(3T₁) = 36
```

The sum of the two is not exponential. Use only the mean and variance results for it, and do not use the exponential cdf.

**Poisson link.** The number of events in time t is Poisson with mean λt. P(no events in time t) = e^(−λt) = P(X > t). Both routes give the same value.

## Which tool, when

| The question gives or asks | Use |
|---|---|
| A pdf and asks for a mean | Integrate x f(x) over the range |
| A pdf and asks for E(1/X) or E(X²) | Integrate g(x) f(x) with the right g |
| E(X) and Var(X) and asks about aX + b | The linear results, no integration |
| Two or more independent variables with known means and variances | Sum or difference formulae |
| Random events at a constant rate and a gap or distance | Exponential, with λ equal to the rate |
| A mean waiting time | λ = 1/mean |
| A count of events in an interval | Poisson with mean λt |

## Quick self-test

1. E(X) = 5 and Var(X) = 4. Find E(3X − 7) and Var(3X − 7).
2. E(X) = 10 and Var(X) = 5. Find E(X²).
3. X and Y are independent. E(X) = 6, Var(X) = 2, E(Y) = 4, Var(Y) = 3. Find E(X − 2Y) and Var(X − 2Y).
4. X has variance 0.5. Find the variance of X₁ + X₂ + X₃ + X₄ (independent copies of X) and of 4X.
5. f(x) = 3(1 − x)² for 0 ≤ x ≤ 1. Find E(X) without looking at the reminder above.
6. X ~ Exp(0.25). Find P(X > 2) to 3 decimal places.
7. X is exponential with mean 20. Find P(X < 10) to 3 decimal places.
8. Faults occur at random at an average rate of 3 per hour. Find the probability of no faults in a 20-minute period to 3 decimal places.
9. X ~ Exp(2). Find E(5X²).
10. F(x) = 1 − e^(−0.5x) for x ≥ 0. Find the median to 3 decimal places.
11. State the conditions on events that make the gaps between them exponential.
12. f(x) = 2x for 0 ≤ x ≤ 1. Find E(1/X).

### Answers

1. E = 3(5) − 7 = **8**; Var = 9 × 4 = **36**.
2. E(X²) = Var(X) + (E(X))² = 5 + 100 = **105**.
3. E = 6 − 2(4) = **−2**; Var = 2 + 4(3) = **14**.
4. Sum: 4 × 0.5 = **2**. For 4X: 16 × 0.5 = **8**.
5. **1/4**.
6. e^(−0.5) = **0.607**.
7. λ = 1/20 = 0.05; 1 − e^(−0.5) = **0.393**.
8. Rate per minute = 3/60 = 0.05, so λt = 0.05 × 20 = 1 and the probability is e^(−1) = **0.368**.
9. E(X²) = 2/λ² = 2/4 = 0.5, so E(5X²) = **2.5**.
10. 1 − e^(−0.5x) = 0.5 gives x = 2 ln 2 = **1.386**.
11. Events occur singly, independently, and at a constant average rate.
12. ∫ (1/x)(2x) dx from 0 to 1 = ∫ 2 dx = **2**.

## Where marks are usually lost

- Stopping at E(X²) and forgetting to subtract μ² (or subtracting μ instead of μ²).
- Using the variance formula with the wrong sign for a difference of independent variables.
- Treating E(g(X)) as g(E(X)) for non-linear g.
- Using the wrong limits, such as integrating over a range where f is zero.
- Mixing units, such as a rate per hour with a time in minutes.
- Quoting the mean of an exponential distribution as λ rather than 1/λ.
- Using the lower-tail formula when the question asks for P(X > x), or the reverse.
- Rounding too early in an exponential calculation. Keep unrounded values until the final line.
- Not showing the integral or the substitution when a question says "show that" or asks for exact values.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA: sections S2.2 (second part) and S2.3.
