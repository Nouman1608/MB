---
title: "Pearson Edexcel International Advanced Level Mathematics: Continuous uniform and Normal approximations (YMA01)"
seoTitle: "Edexcel IAL Maths S2 Uniform and Normal Approx Guide"
resourceType: "study-guides"
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
description: "Study guide to the continuous uniform distribution and Normal approximations with continuity correction for Edexcel IAL Mathematics S2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. It covers unit S2 (Statistics 2) content 3.1 and 3.2. The specification lists S2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics.

Work through it with the [revision notes](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-practice/). The [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/) show what to tackle next.

## What this unit covers

| S2 content | What you must be able to do |
|---|---|
| 3.1 | Use the continuous uniform (rectangular) distribution, including deriving its mean, variance and cumulative distribution function |
| 3.2 | Use the Normal distribution to approximate the binomial and Poisson distributions, applying a continuity correction |

The specification expects you to remember two results for continuous random variables: P(a < X ≤ b) is the integral of f(x) from a to b, and f(x) = dF(x)/dx. The content statement for 3.1 asks for derivations, so learn how each uniform result is obtained as well as the result itself.

## 3.1 The continuous uniform distribution

A continuous random variable X has a **uniform (rectangular) distribution** on the interval [a, b] if every sub-interval of a given length in [a, b] is equally likely. We write X ~ U[a, b].

```
f(x)
  |         +-----------+
1/(b-a)     |           |
  |         |           |
  0---------+-----------+---------- x
            a           b
```

The density is constant between a and b and zero elsewhere:

f(x) = 1/(b − a) for a ≤ x ≤ b, and f(x) = 0 otherwise.

The height must be 1/(b − a) because the total area is 1: a rectangle of width (b − a) needs height 1/(b − a).

### Probabilities and the cumulative distribution function

For a ≤ c < d ≤ b, P(c < X < d) is the area of a rectangle, so P(c < X < d) = (d − c)/(b − a). Because P(X = c) = 0 for any continuous variable, it makes no difference whether you write < or ≤.

The cumulative distribution function comes from integrating f from a to x. For a ≤ x ≤ b:

```
F(x) = ∫ from a to x of 1/(b − a) dt
     = [ t/(b − a) ] from a to x
     = (x − a)/(b − a)
```

Putting the three ranges together:

- F(x) = 0 for x < a
- F(x) = (x − a)/(b − a) for a ≤ x ≤ b
- F(x) = 1 for x > b

### Mean

```
E(X) = ∫ from a to b of x/(b − a) dx
     = [ x² / (2(b − a)) ] from a to b
     = (b² − a²) / (2(b − a))
     = (b − a)(b + a) / (2(b − a))
     = (a + b)/2
```

This is the midpoint, which you could also argue from symmetry. The median of a uniform distribution is the same value.

### Variance

First find E(X²), then use Var(X) = E(X²) − [E(X)]².

```
E(X²) = ∫ from a to b of x²/(b − a) dx
      = (b³ − a³) / (3(b − a))
      = (b − a)(a² + ab + b²) / (3(b − a))
      = (a² + ab + b²)/3

Var(X) = (a² + ab + b²)/3 − (a + b)²/4
       = (4a² + 4ab + 4b² − 3a² − 6ab − 3b²)/12
       = (a² − 2ab + b²)/12
       = (b − a)²/12
```

| Result | Formula |
|---|---|
| Density | 1/(b − a) on [a, b] |
| Mean and median | (a + b)/2 |
| Variance | (b − a)²/12 |
| P(c < X < d) | (d − c)/(b − a) |
| Median or quartile q with F(q) = p | q = a + p(b − a) |

### Worked example 1: probabilities, mean and variance

A timer on a lab sensor waits a random time T seconds before logging a reading, with T ~ U[4, 10]. Find P(5 < T < 8), P(T ≥ 9.5), the mean and the variance.

```
Width b − a = 6, so f(t) = 1/6.
P(5 < T < 8)  = (8 − 5)/6 = 3/6 = 0.5
P(T ≥ 9.5)    = (10 − 9.5)/6 = 0.5/6 = 1/12
Mean          = (4 + 10)/2 = 7
Variance      = 6²/12 = 3
```

### Worked example 2: finding a and b

X ~ U[a, b] has mean 11 and variance 12. Find a and b, then P(X < 8).

```
(a + b)/2 = 11  →  a + b = 22
(b − a)²/12 = 12  →  (b − a)² = 144  →  b − a = 12   (b > a)
Adding:      2b = 34  →  b = 17, a = 5
P(X < 8) = (8 − 5)/12 = 0.25
```

### Worked example 3: using the cdf for quartiles

Y ~ U[2, 10], so F(y) = (y − 2)/8 on [2, 10].

```
Lower quartile: (q − 2)/8 = 0.25  →  q = 4
Median:         (m − 2)/8 = 0.5   →  m = 6
Upper quartile: (q − 2)/8 = 0.75  →  q = 8
Find k with P(Y > k) = 0.3: F(k) = 0.7 → k − 2 = 5.6 → k = 7.6
```

### Worked example 4: a rounding error

Lengths are recorded to the nearest 0.1 cm. Model the rounding error R as uniform on [−0.05, 0.05].

```
Variance of R = 0.1²/12 = 1/1200 ≈ 0.000833
P(|R| < 0.02) = P(−0.02 < R < 0.02) = 0.04/0.1 = 0.4
```

## 3.2 Normal approximations with a continuity correction

### The approximations

| Distribution | Approximated by | Mean | Variance |
|---|---|---|---|
| X ~ B(n, p) | Y ~ N(np, np(1 − p)) | np | np(1 − p) |
| X ~ Po(λ) | Y ~ N(λ, λ) | λ | λ |

These means and variances are the ones you already know from the binomial and Poisson distributions (S2 content 1.2). The specification does not set numerical limits for when an approximation is allowed, so decide from the shape. A binomial is close to bell-shaped when n is large and p is not near 0 or 1. A Poisson is close to bell-shaped when λ is large. If the exact mean is small, the distribution is strongly skewed and a Normal curve fits badly.

A Poisson rate can be scaled first. If the number of events per hour is Po(4.5), the number in 8 hours is Po(36) (S2 content 1.1), and then you approximate with N(36, 36).

### Why the correction is needed

The binomial and Poisson variables take whole-number values. The Normal variable is continuous, so P(Y = r) = 0. Each whole number r is therefore spread over a band running from r − 0.5 up to r + 0.5, and this adjustment is the **continuity correction**.

| Discrete probability | Normal probability |
|---|---|
| P(X = r) | P(r − 0.5 < Y < r + 0.5) |
| P(X ≤ r) | P(Y < r + 0.5) |
| P(X < r) | P(Y < r − 0.5) |
| P(X ≥ r) | P(Y > r − 0.5) |
| P(X > r) | P(Y > r + 0.5) |
| P(r ≤ X ≤ s) | P(r − 0.5 < Y < s + 0.5) |

### Method in steps

1. Identify the exact distribution and check the approximation is sensible.
2. Write the approximating Normal distribution, with variance (not standard deviation) as the second parameter.
3. Rewrite the event using whole numbers only. For example, P(X > 29) is P(X ≥ 30) and P(X < 12) is P(X ≤ 11).
4. Apply the correction, giving a Normal event with the half-integers.
5. Standardise with z = (value − mean)/standard deviation and find the probability.

### Worked example 5: binomial

X ~ B(80, 0.35). Then np = 28 and np(1 − p) = 18.2, so use Y ~ N(28, 18.2) with standard deviation √18.2 = 4.266.

```
P(X ≤ 25): use Y < 25.5
  z = (25.5 − 28)/4.266 = −0.586    →  0.279   (exact binomial: 0.282)

P(X ≥ 30): use Y > 29.5
  z = (29.5 − 28)/4.266 = 0.352     →  1 − 0.637 = 0.363   (exact: 0.359)

P(X = 28): use 27.5 < Y < 28.5
  z = ±0.1172                       →  0.0933   (exact: 0.0932)

P(24 < X ≤ 31): whole numbers 25 to 31, so 24.5 < Y < 31.5
  z = ±0.820                        →  0.588   (exact: 0.588)
```

The last one shows the common trap. Because the lower limit is strict (24 < X), the first included value is 25, so the lower boundary is 24.5, not 23.5.

### Worked example 6: Poisson

Calls reach a helpline at a mean rate of 4.5 per hour. Find the probability of more than 40 calls in 8 hours.

```
Calls in 8 hours: X ~ Po(36). Approximate by Y ~ N(36, 36), sd = 6.
P(X > 40) = P(X ≥ 41) → P(Y > 40.5)
z = (40.5 − 36)/6 = 0.75
P(Z > 0.75) = 0.227     (exact Poisson: 0.223)
```

### Worked example 7: chaining a uniform model into a Normal approximation

Using the rounding error from example 4, suppose 60 independent lengths are recorded and X counts those with |R| < 0.02. Each has probability 0.4, so X ~ B(60, 0.4).

```
np = 24, np(1 − p) = 14.4, sd = 3.795.  Y ~ N(24, 14.4)
P(X ≥ 30) → P(Y > 29.5)
z = 5.5/3.795 = 1.449
P(Z > 1.449) = 0.0736     (exact binomial: 0.0746)
```

### Reading the comparisons

In each example the approximation agrees with the exact value to two or three significant figures. When a question asks you to comment on the approximation, say why the Normal curve is suitable (large mean, roughly symmetrical) and note that the continuity correction is what makes whole-number events line up with a continuous curve.

## Common errors

- Writing the variance as the standard deviation. In N(28, 18.2) the second number is the variance.
- Applying the correction in the wrong direction, for instance using 25.5 for P(X ≥ 26).
- Rewriting inequalities badly. P(X > 29) needs 29.5, and P(X < 12) needs 11.5.
- Applying a correction to a probability that is already continuous, such as a uniform probability.
- Forgetting that P(X = r) is a band of width 1, so it needs two standardisations.
- Using f(x) = 1/b for U[a, b] when a ≠ 0.
- Rounding z to two decimal places too early, which can change the third significant figure.

## Next steps

Test yourself on the [practice questions](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-practice/), then use the [revision notes](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-revision-notes/) as a quick recall sheet. For wider planning see [Edexcel IAL Mathematics exam preparation](/resources/edexcel-ial-mathematics-exam-preparation/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, published by Pearson Education Limited (unit S2, content 3.1 and 3.2).
