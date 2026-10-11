---
title: "Pearson Edexcel International Advanced Level Mathematics: Continuous uniform and Normal approximations (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S2 Uniform and Normal Approx Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "The continuous uniform distribution and the Normal approximation with continuity correction"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 167
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-continuous-distributions-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Mathematics S2: uniform results, continuity correction rules, method steps and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense S2 content 3.1 and 3.2 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. The specification lists S2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. For full explanations and derivations use the [study guide](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal/).

Then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-practice/). The [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/) help you plan the rest of your revision.

## 3.1 Continuous uniform distribution, X ~ U[a, b]

| Item | Result |
|---|---|
| Density | f(x) = 1/(b − a) for a ≤ x ≤ b, otherwise 0 |
| Probability | P(c < X < d) = (d − c)/(b − a) |
| cdf | F(x) = 0 for x < a; (x − a)/(b − a) for a ≤ x ≤ b; 1 for x > b |
| Mean and median | (a + b)/2 |
| Variance | (b − a)²/12 |
| Quartiles, percentiles | q = a + p(b − a), where p is the proportion below q |

The specification asks for the derivation of the mean, variance and cdf, so know these three chains.

```
cdf:      F(x) = ∫ from a to x of 1/(b − a) dt = (x − a)/(b − a)
mean:     ∫ x/(b − a) dx from a to b = (b² − a²)/(2(b − a)) = (a + b)/2
E(X²):    (b³ − a³)/(3(b − a)) = (a² + ab + b²)/3
variance: E(X²) − mean² = (a² − 2ab + b²)/12 = (b − a)²/12
```

The two results the specification lists to remember for any continuous variable also apply here: P(a < X ≤ b) is the integral of f(x) from a to b, and f(x) = dF(x)/dx.

### Method in steps: uniform questions

1. Read off a and b. Write the width b − a.
2. For a probability, take the width of the wanted interval divided by b − a. Keep the interval inside [a, b].
3. For a percentile, solve F(q) = p, which gives q = a + p(b − a).
4. For unknown a and b, form two equations: one from the mean, one from the variance.
5. For E(X²), use Var(X) + [E(X)]² rather than integrating again.

### Worked reminder: uniform

X ~ U[1, 7]. Find P(X > 5.5), E(X²) and the 90th percentile.

```
f(x) = 1/6.   P(X > 5.5) = (7 − 5.5)/6 = 0.25
Mean = 4, Var = 36/12 = 3, so E(X²) = 3 + 16 = 19
90th percentile: 1 + 0.9 × 6 = 6.4
```

X ~ U[a, b] has mean 9 and variance 3. Find a and b.

```
a + b = 18 and (b − a)² = 36, so b − a = 6
b = 12, a = 6
```

### Checking a uniform answer

- The answer to a probability must lie between 0 and 1, so a width larger than b − a signals a slip.
- The median should sit at the midpoint, and the lower and upper quartiles should sit a quarter of the width inside each end.
- The cdf should equal 0 at a and 1 at b. Test both ends before you move on.
- A variance of 3 for width 6 is correct, but a standard deviation of 3 is not: the standard deviation here is √3.

## 3.2 Normal approximations

| Exact distribution | Approximation | When it is reasonable |
|---|---|---|
| X ~ B(n, p) | Y ~ N(np, np(1 − p)) | n large and p not near 0 or 1 |
| X ~ Po(λ) | Y ~ N(λ, λ) | λ large |

The specification gives no numerical limits for these conditions, so argue from shape: a small mean means a skewed distribution that a symmetrical curve fits poorly. For a Poisson rate over a longer period, scale the rate first: events per hour Po(λ) gives Po(5λ) over 5 hours.

### Continuity correction

Replace each whole number r by the interval r − 0.5 to r + 0.5.

| Discrete | Normal |
|---|---|
| P(X = r) | P(r − 0.5 < Y < r + 0.5) |
| P(X ≤ r) | P(Y < r + 0.5) |
| P(X < r) | P(Y < r − 0.5) |
| P(X ≥ r) | P(Y > r − 0.5) |
| P(X > r) | P(Y > r + 0.5) |
| P(r ≤ X ≤ s) | P(r − 0.5 < Y < s + 0.5) |

### Method in steps: Normal approximation

1. Identify the exact distribution and comment on suitability.
2. State N(mean, variance), keeping variance as the second parameter.
3. Convert the event to whole numbers (P(X > 29) is P(X ≥ 30)).
4. Apply the correction, then standardise with z = (x − mean)/sd.
5. Give the probability to 3 significant figures unless told otherwise.

### Worked reminders: Normal approximation

X ~ B(150, 0.2): mean 30, variance 24, sd 4.899.

```
P(X ≤ 24) → P(Y < 24.5): z = −5.5/4.899 = −1.123  →  0.131
P(X > 35) → P(X ≥ 36) → P(Y > 35.5): z = 1.123  →  0.131
```

X ~ Po(52): approximate by N(52, 52), sd 7.211.

```
P(X < 45) = P(X ≤ 44) → P(Y < 44.5): z = −7.5/7.211 = −1.040  →  0.149
```

The exact values are 0.129 and 0.132 for the binomial, and 0.148 for the Poisson, so the approximation is close. The two binomial answers match to three figures only because the event limits sit symmetrically about the mean.

### Quick decision guide

| Question says | Do this |
|---|---|
| "Estimate" or "use a Normal approximation" | State N(mean, variance), then correct and standardise |
| "Comment on the approximation" | Refer to the size of the mean and the shape, then to the continuity correction |
| "Find the largest or smallest value" | Write the corrected inequality with the unknown inside it, solve, then round to a whole number |
| Rate given per unit time | Multiply the rate by the length of the period first |

### Must-know distinctions

- Uniform probabilities use areas of a rectangle. Normal approximations of discrete variables need a correction. Never apply a correction to a uniform probability.
- P(X = r) for a discrete variable is a positive number. For the Normal variable it is a band of width 1 around r.
- Strict and non-strict inequalities matter for discrete variables (X > 29 versus X ≥ 29) but not for continuous ones.
- N(μ, σ²): the second parameter is the variance.

## Quick self-test

1. X ~ U[3, 9]. State f(x), the mean and the variance.
2. X ~ U[0, 12]. Find P(X > 9).
3. X ~ U[−4, 6]. Find P(−1 < X < 2.5).
4. X ~ U[a, b] has mean 9 and b − a = 8. Find a and b.
5. Write down F(x) for X ~ U[1, 7] and find F(5.5).
6. Write P(X > 35) for a binomial variable X as a Normal probability with continuity correction.
7. Write P(X < 12) for a Poisson variable X as a Normal probability with continuity correction.
8. X ~ B(90, 0.5). Approximate P(X ≤ 40).
9. Cases arrive at a mean rate of 3.5 per day. Approximate the probability of at least 50 cases in 12 days.
10. For X ~ B(15, 0.04), the Normal model N(0.6, 0.576) gives P(Y < −0.5) as a positive number. Find it and explain why it shows the model is unsuitable.
11. X ~ U[2, 8]. State the variance of X.
12. If X ~ Po(36) is approximated by Y ~ N(36, 6²), what Normal event replaces P(X = 40)?

### Answers

1. f(x) = 1/6 on [3, 9]; mean 6; variance 36/12 = 3.
2. (12 − 9)/12 = 0.25.
3. (2.5 − (−1))/10 = 0.35.
4. Mean 9 gives a + b = 18 and b − a = 8, so a = 5 and b = 13.
5. F(x) = (x − 1)/6 for 1 ≤ x ≤ 7 (0 below, 1 above); F(5.5) = 4.5/6 = 0.75.
6. P(Y > 35.5).
7. P(X < 12) = P(X ≤ 11), so P(Y < 11.5).
8. Y ~ N(45, 22.5), sd 4.743. P(Y < 40.5): z = −0.949, giving 0.171.
9. Po(42), so Y ~ N(42, 42), sd 6.481. P(X ≥ 50) → P(Y > 49.5): z = 1.157, giving 0.124.
10. z = (−0.5 − 0.6)/0.759 = −1.449, so P(Y < −0.5) = 0.0736. A count cannot be negative, and about 7% of the model lies there, so the Normal model is poor (the mean is small and the distribution is skewed).
11. 36/12 = 3.
12. P(39.5 < Y < 40.5).

## Where marks are usually lost

- Using 1/b instead of 1/(b − a) as the height of the density.
- Quoting the uniform variance as (b − a)/12 or (b − a)²/6.
- Leaving out the continuity correction, or applying it in the wrong direction.
- Giving the standard deviation, not the variance, as the second parameter of the Normal.
- Converting P(X > 29) to 29.5 on the wrong side, or P(X < 12) to 12.5 instead of 11.5.
- Not scaling a Poisson rate to the time interval in the question before approximating.
- In a "show that" derivation, jumping from (b³ − a³) to the answer without factorising the difference of cubes.
- Rounding z to two decimal places early, then losing the third significant figure.
- Commenting on suitability without referring to the mean or the shape of the distribution.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, published by Pearson Education Limited (unit S2, content 3.1 and 3.2).
