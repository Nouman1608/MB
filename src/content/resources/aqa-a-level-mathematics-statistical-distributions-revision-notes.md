---
title: "AQA A-Level Mathematics: N: Statistical distributions (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Statistical Distributions Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "N: Statistical distributions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 15
syllabusTopics:
  - qualification: "a-level"
    topic: "n-statistical-distributions-aqa-alevel-maths"
description: "Revision notes for AQA A-Level Maths 7357 Section N: binomial and Normal facts, calculator methods, model choice and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section N: Statistical distributions** (N1 to N3) of the **AQA A-level
Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018 onwards. Section N
is listed under Paper 3. A calculator is required in every 7357 paper, and the specification expects
you to use it to access probabilities from standard statistical distributions. For full
explanations and worked examples, use the
[Statistical distributions study guide](/resources/aqa-a-level-mathematics-statistical-distributions/).

Practise afterwards with the
[Statistical distributions practice questions](/resources/aqa-a-level-mathematics-statistical-distributions-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) and the
[printable checklist](/checklists/aqa/a-level/mathematics/) show where this topic sits, and the free
[10-minute diagnostics](/diagnostics/) help you find gaps.

## Key definitions

- **Discrete random variable:** takes separate values (counts). Its probability distribution lists
  each value with its probability.
- **Probability distribution rule:** all probabilities are between 0 and 1, and Σ P(X = x) = 1.
- **Discrete uniform:** every value equally likely, for example a fair dice score.
- **Binomial B(n, p):** the number of successes in n independent trials, each with the same
  probability of success p.
- **Continuous random variable:** can take any value in a range (mass, time, length).
- **Normal N(μ, σ²):** bell-shaped, symmetrical continuous model with mean μ and variance σ².
- **Standard Normal Z ~ N(0, 1):** mean 0, standard deviation 1.
- **Point of inflection of a Normal curve:** where the curve changes from concave to convex, at
  x = μ ± σ.

N1 excludes calculating the mean and variance of a general discrete random variable.

## Formulas and facts

| Item | Result |
|---|---|
| Binomial probability | P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ |
| Binomial values | r = 0, 1, …, n |
| Standardising | Z = (X − μ)/σ |
| Back from Z | x = μ + zσ |
| Normal symmetry | P(X < μ − a) = P(X > μ + a) |
| Single value (Normal) | P(X = a) = 0 |
| Within 1, 2, 3 s.d. | about 68%, 95%, 99.7% |
| Points of inflection | x = μ − σ and x = μ + σ |
| Normal link to binomial | B(n, p) ≈ N(np, np(1 − p)) for large n, p not near 0 or 1 |

## Method in steps

**Binomial probability**

1. Define X and state X ~ B(n, p) with numbers.
2. Rewrite the event using P(X = r) or P(X ≤ r) only.
3. Use binomial pd or cd on your calculator.
4. Give the answer to 3 significant figures unless told otherwise.

| Event | Rewrite |
|---|---|
| X < r | P(X ≤ r − 1) |
| X > r | 1 − P(X ≤ r) |
| X ≥ r | 1 − P(X ≤ r − 1) |
| a ≤ X ≤ b | P(X ≤ b) − P(X ≤ a − 1) |

**Normal probability**

1. State X ~ N(μ, σ²) and find σ (square root of the variance).
2. Write the probability statement, for example P(X > 31).
3. Use Normal cd with lower and upper limits.
4. Sketch the curve if the region is not obvious.

**Unknown μ or σ**

1. Turn the given probability into a "less than" probability.
2. Use inverse Normal on N(0, 1) to find z (keep 4 decimal places).
3. Set (x − μ)/σ = z.
4. Solve. Two unknowns need two equations.

**Worked reminder.** X ~ N(μ, 3²) and P(X > 22) = 0.25. Then P(Z < z) = 0.75 gives z = 0.6745.
So (22 − μ)/3 = 0.6745 and μ = 22 − 2.0235 = 19.98 (to 2 d.p.).

## Small worked reminders

**A binomial range.** X ~ B(18, 0.4). Find P(5 < X ≤ 9).

```
5 < X ≤ 9 means X = 6, 7, 8, 9
P(X ≤ 9) − P(X ≤ 5) = 0.8653 − 0.2088 = 0.657 (3 s.f.)
```

List the whole numbers in the event first. It stops you subtracting the wrong cumulative value.

**Symmetry with no calculator work.** X ~ N(30, σ²) and P(X < 26) = 0.12. Then 26 is 4 below the
mean, so 34 is the matching point above it:

```
P(X > 34) = 0.12
P(26 < X < 34) = 1 − 0.12 − 0.12 = 0.76
```

You don't need σ for either answer. Spot symmetry before you reach for the calculator.

## The N2 links in one place

**Histograms.** If a histogram of a large sample is roughly symmetrical and bell-shaped, model the
variable as Normal, using the sample mean and standard deviation for μ and σ. The model then
predicts frequencies. For 250 values with mean 52 and standard deviation 6, the expected number
between 46 and 58 (one standard deviation either side) is 250 × 0.683 = 171 (3 s.f.). Compare
predictions like this with the real data to judge the fit.

**Mean and standard deviation.** μ fixes the centre and line of symmetry. σ fixes the spread:
a larger σ gives a lower, wider curve, because the area must stay equal to 1.

**Points of inflection.** The curve bends the other way at μ − σ and μ + σ. If you are given the
two inflection points, μ is their midpoint and σ is half the distance between them.

**Binomial.** For large n with p not near 0 or 1, B(n, p) is close to N(np, np(1 − p)). Use a
continuity correction, because a whole number r covers r − 0.5 to r + 0.5. For X ~ B(100, 0.5),
P(X ≥ 55) ≈ P(Y > 54.5) with Y ~ N(50, 25), giving 0.184; the exact binomial value is also 0.184
to 3 s.f.

## Calculator checklist

- Binomial pd for one value; binomial cd for "at most".
- Normal cd needs a lower and an upper limit. For "greater than 31", use 31 and a very large number.
- Inverse Normal needs the area and, on most models, whether it is to the left. Check yours.
- Store unrounded values in the memory and round only the final answer.
- Write the distribution and the probability statement before each calculator result.

## Choosing a model

| Clue in the context | Likely model | Check |
|---|---|---|
| Count of successes in a fixed number of trials | Binomial | independence, constant p |
| Measurement (continuous), symmetrical data | Normal | no impossible values with real probability |
| Count until the first success | Not binomial | n is not fixed |
| Picking without replacement from a small group | Not binomial | p changes each pick |
| Skewed data, or variable must be positive with μ near 0 | Not Normal | check P(X < 0) |

Always tie the reason to the context: "the probability a customer pays by card may differ between
weekday and weekend customers" beats "p might not be constant".

## Must-know distinctions

- **N(μ, σ²) vs N(μ, σ):** the standard notation puts the variance second. N(40, 9) has σ = 3.
- **Discrete vs continuous:** for a binomial, P(X < 5) and P(X ≤ 5) differ. For a Normal they are
  equal.
- **"More than" vs "at least":** X > 5 starts at 6; X ≥ 5 starts at 5.
- **Probability vs value:** Normal cd turns a value into a probability; inverse Normal turns a
  probability into a value.
- **Model vs reality:** a model can fit well in the middle and badly in the tails. Say so when
  you critique it.

## Quick self-test

1. X takes the values 0, 1, 2, 3 with probabilities 0.2, 0.35, a, 0.15. Find a and P(X ≥ 2).
2. X ~ B(12, 0.3). Find P(X = 3).
3. X ~ B(12, 0.3). Find P(X ≤ 2).
4. X ~ B(30, 0.2). Find P(X ≥ 8).
5. State the four conditions for a binomial model.
6. X ~ N(60, 25). Find P(X > 67).
7. X ~ N(60, 25). Find P(55 < X < 65).
8. Z ~ N(0, 1). Find z such that P(Z < z) = 0.9.
9. X ~ N(μ, 9) and P(X < 20) = 0.8. Find μ.
10. Where are the points of inflection of the curve for N(18, 2.5²)?
11. A student models the number of girls among 3 pupils chosen at once from a group of 5 girls and
    4 boys as B(3, 5/9). Give one reason this is not appropriate.

### Answers

1. 0.2 + 0.35 + a + 0.15 = 1, so **a = 0.3**. P(X ≥ 2) = 0.3 + 0.15 = **0.45**.
2. ¹²C₃ (0.3)³ (0.7)⁹ = **0.240** (3 s.f.).
3. **0.253** (3 s.f.).
4. 1 − P(X ≤ 7) = **0.239** (3 s.f.).
5. Fixed number of trials; two outcomes per trial; constant probability of success; independent
   trials.
6. σ = 5. P(X > 67) = **0.0808** (3 s.f.).
7. This is μ ± σ, so **0.683** (3 s.f.).
8. **z = 1.28** (1.2816).
9. z = 0.8416, so μ = 20 − 3 × 0.8416 = **17.5** (3 s.f.).
10. μ ± σ: **x = 15.5 and x = 20.5**.
11. Pupils are chosen without replacement from a small group, so the probability of a girl changes
    with each choice and the choices are not independent.

## Where marks are usually lost

- Entering the variance instead of the standard deviation into the Normal function.
- Writing a probability with no distribution or statement, so a slip cannot earn method credit.
- Using 1 − P(X ≤ 4) for P(X > 4) in a binomial.
- Listing binomial conditions without linking them to the context.
- Taking the wrong tail with inverse Normal, giving a value on the wrong side of the mean.
- Rounding z to 2 decimal places, then multiplying by a large σ.
- Solving for two unknowns with one equation copied wrongly from the sketch (sign of z wrong).
- Saying a Normal model "fits" without checking for impossible negative values or skew.
- Calculating a mean or variance of a general discrete table, which N1 excludes.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.15, N: Statistical distributions.
