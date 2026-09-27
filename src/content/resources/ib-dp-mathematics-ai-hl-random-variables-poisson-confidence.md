---
title: "IB DP Mathematics: Applications and Interpretation -- Random variables, the central limit theorem, confidence intervals and the Poisson distribution (HL) Study Guide"
seoTitle: "IB Maths AI HL Random Variables, CLT and Poisson Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Random variables, the central limit theorem, confidence intervals and the Poisson distribution (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-17"
description: "IB Maths AI HL study guide to linear combinations of random variables, the central limit theorem, confidence intervals and the Poisson distribution."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the HL random variables unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.14–4.17, which are all AHL content (HL only). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

It builds on the SL statistics in the [AI statistics and probability guide](/resources/ib-dp-mathematics-ai-statistics-probability/). Check where the unit sits on the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and tick it off on the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/). When you have worked through this page, use the [revision notes](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-revision-notes/) and the [practice questions](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-practice/).

## What this unit covers

| Section | What you must be able to do | Level |
|---|---|---|
| 4.14 | Find E and Var of aX + b and of linear combinations of random variables; use x̄ and s²ₙ₋₁ as unbiased estimates of μ and σ² | HL only |
| 4.15 | Know that a linear combination of independent normal variables is normal; use X̄ ~ N(μ, σ²/n); apply the central limit theorem | HL only |
| 4.16 | Find confidence intervals for the mean of a normal population (z when σ is known, t when σ is unknown) and interpret them in context | HL only |
| 4.17 | Use the Poisson distribution, its mean and variance, and the sum of two independent Poisson variables; choose between normal, binomial and Poisson models | HL only |

All three HL papers require a GDC. You will rarely calculate a probability or an interval by hand here, but you must write down the model, its parameters and the calculator command you used.

## 4.14 Linear transformations and linear combinations

### One random variable

If a and b are constants:

- E(aX + b) = aE(X) + b
- Var(aX + b) = a²Var(X)

Adding b moves the mean but not the spread. Multiplying by a scales variance by a². The guide says the variance formula for a discrete variable will not be required in examinations, so questions will give you Var(X) or let you find it with the GDC.

**Worked example 1.** E(X) = 12 and Var(X) = 4. Find the mean and standard deviation of Y = 3X − 5.

```
E(Y)   = 3(12) − 5 = 31
Var(Y) = 3² × 4    = 36
SD(Y)  = √36       = 6
```

The −5 has no effect on the variance.

### Several random variables

For any random variables X₁, X₂, …, Xₙ and constants a₁, …, aₙ:

- E(a₁X₁ + a₂X₂ + … + aₙXₙ) = a₁E(X₁) + a₂E(X₂) + … + aₙE(Xₙ)

If the variables are **independent**:

- Var(a₁X₁ + a₂X₂ + … + aₙXₙ) = a₁²Var(X₁) + a₂²Var(X₂) + … + aₙ²Var(Xₙ)

Two consequences catch people out. First, Var(X − Y) = Var(X) + Var(Y): variances always add, because the coefficient −1 is squared. Second, X₁ + X₂ (two separate observations) is not the same as 2X (one observation doubled).

**Worked example 2.** Apples have mean mass 150 g and standard deviation 8 g. An empty box has mean mass 400 g and standard deviation 15 g. All masses are independent. Find the mean and standard deviation of a box holding 6 apples.

```
T = B + X₁ + X₂ + … + X₆
E(T)   = 400 + 6(150)        = 1300 g
Var(T) = 15² + 6 × 8²        = 225 + 384 = 609
SD(T)  = √609                = 24.7 g (3 s.f.)
```

If you had used B + 6X you would get Var = 225 + 36 × 64 = 2529, which is far too big. Six different apples partly cancel each other's variation; one apple multiplied by six does not.

### Unbiased estimates

You rarely know μ and σ² for a population. From a sample of size n:

- x̄ = Σxᵢ / n is an unbiased estimate of μ.
- s²ₙ₋₁ = (n/(n − 1)) s²ₙ = Σfᵢ(xᵢ − x̄)² / (n − 1), where n = Σfᵢ, is an unbiased estimate of σ².

Here s²ₙ is the sample variance (dividing by n). On a GDC, the value labelled Sx (or sₙ₋₁) is sₙ₋₁; square it to get s²ₙ₋₁. The guide states that proving these estimates are unbiased is not examined.

**Worked example 3.** A sample of 20 people recorded how many books they read last month.

| Books, x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Frequency, f | 3 | 7 | 6 | 3 | 1 |

```
x̄     = (0×3 + 1×7 + 2×6 + 3×3 + 4×1) / 20 = 32/20 = 1.6
s²ₙ   = 1.14      (from GDC: sₙ = σx)
s²ₙ₋₁ = (20/19) × 1.14 = 1.2
```

So the unbiased estimates are μ ≈ 1.6 and σ² ≈ 1.2.

## 4.15 Sample means and the central limit theorem

### Combinations of normal variables

A linear combination of independent normal random variables is itself normally distributed. Find its mean and variance with the 4.14 rules, then use the normal distribution.

In particular, if X ~ N(μ, σ²) and X̄ is the mean of a random sample of size n, then

X̄ ~ N(μ, σ²/n)

The standard deviation of X̄ is σ/√n, so larger samples give sample means that sit closer to μ.

**Worked example 4.** X ~ N(500, 12²). A sample of 9 is taken. Find P(X̄ < 495).

```
X̄ ~ N(500, 144/9) = N(500, 16), so SD = 4
P(X̄ < 495) = 0.106 (3 s.f.)     [GDC: normalcdf(−∞, 495, 500, 4)]
```

**Worked example 5.** Small cups of juice A ~ N(45, 3²) ml and a large cup B ~ N(80, 4²) ml, all independent. Find the probability that two small cups hold more than one large cup.

```
D = A₁ + A₂ − B
E(D)   = 45 + 45 − 80 = 10
Var(D) = 9 + 9 + 16   = 34
D ~ N(10, 34)
P(D > 0) = 0.957 (3 s.f.)
```

### The central limit theorem

If X has **any** distribution with mean μ and variance σ², then for large n the sample mean X̄ is approximately N(μ, σ²/n). How large n must be depends on the shape of the original distribution. In IB examinations, n > 30 is taken as sufficient.

Use the theorem when the population is not normal (or its distribution is unknown) and the sample is large. If the population is already normal, X̄ is exactly normal for every n and you do not need the theorem.

**Worked example 6.** The number of items in a shopping basket has mean 3.2 and standard deviation 1.5. The distribution is not normal. A random sample of 40 baskets is taken. Find the probability that the mean number of items exceeds 3.5.

```
n = 40 > 30, so by the central limit theorem
X̄ ≈ N(3.2, 1.5²/40), SD = 1.5/√40 = 0.23717...
P(X̄ > 3.5) = 0.103 (3 s.f.)
```

State the reason (n > 30, central limit theorem) in your answer. It carries marks.

## 4.16 Confidence intervals for the mean

A confidence interval gives a range of plausible values for the population mean μ, built from one sample. The guide requires:

- the **normal distribution** when σ is known;
- the **t-distribution** when σ is unknown, **regardless of sample size**.

With σ known, a confidence interval is x̄ ± z × σ/√n, where z comes from the normal distribution (1.960 for 95%). With σ unknown, the GDC replaces σ with sₙ₋₁ and z with a value from the t-distribution. In practice you use the GDC's Z-interval or T-interval and write down the inputs.

**Worked example 7 (σ known).** A population is normal with σ = 3. A sample of 25 has x̄ = 48.6. Find a 95% confidence interval for μ.

```
Z-interval: σ = 3, x̄ = 48.6, n = 25, level 0.95
48.6 ± 1.960 × 3/√25
[47.4, 49.8] (3 s.f.)
```

**Worked example 8 (σ unknown).** The lengths (cm) of 8 leaves from a normally distributed population are

14.2, 15.1, 13.8, 14.9, 15.4, 14.6, 13.9, 15.0

Find a 90% confidence interval for the mean length.

```
σ unknown, so use t.
x̄ = 14.6125, sₙ₋₁ = 0.58904...
T-interval (data, level 0.90): [14.2, 15.0] (3 s.f.)
```

### Interpreting an interval

The guide says you must interpret the result in context. A 90% confidence interval means: if many samples were taken and an interval built from each in the same way, about 90% of those intervals would contain the true mean μ. For the leaves you would write: "We are 90% confident that the mean length of leaves in this population lies between 14.2 cm and 15.0 cm."

Do not say "there is a 90% probability that μ lies in [14.2, 15.0]". μ is fixed; it is the interval that varies from sample to sample.

A claimed value that lies outside the interval is not supported by the sample. A higher confidence level gives a wider interval; a larger sample gives a narrower one.

## 4.17 The Poisson distribution

X ~ Po(m) counts the number of events in a fixed interval of time or space, where m is the mean number of events in that interval.

```
P(X = x) = e⁻ᵐ mˣ / x!,   x = 0, 1, 2, …
E(X) = m      Var(X) = m
```

A Poisson model is appropriate when:

1. events are independent, and
2. events occur at a uniform average rate during the period of interest.

Because the rate is uniform, you scale m to the interval in the question. 2.4 calls per 10 minutes means m = 4.8 for 20 minutes.

If X ~ Po(m₁) and Y ~ Po(m₂) are independent, then X + Y ~ Po(m₁ + m₂).

Mean equal to variance is a useful check: if a sample mean and variance are far apart, a Poisson model is doubtful.

**Worked example 9.** Calls reach a help desk at an average rate of 2.4 per 10 minutes.

```
(a) X ~ Po(2.4):  P(X = 3) = 0.209          [poissonpdf(2.4, 3)]
(b) 20 minutes:   Y ~ Po(4.8)
    P(Y ≥ 5) = 1 − P(Y ≤ 4) = 0.524       [1 − poissoncdf(4.8, 4)]
```

A second desk receives calls at 1.1 per 10 minutes, independently. The total in 10 minutes is T ~ Po(2.4 + 1.1) = Po(3.5), so P(T ≤ 2) = 0.321.

### Choosing a model

| Model | Use when |
|---|---|
| Binomial B(n, p) | A fixed number n of independent trials, each a success or failure with the same p |
| Poisson Po(m) | A count of events in an interval, with no fixed upper limit, occurring independently at a uniform average rate |
| Normal N(μ, σ²) | A continuous measurement (mass, time, length) with a symmetric, bell-shaped spread |

Always give a reason from the context, not just the name of the model.

## Using your GDC

- Normal: normalcdf for probabilities, invNorm for boundaries. For X̄, enter σ/√n as the standard deviation.
- Confidence intervals: Z-interval when σ is given; T-interval when it is not. Both accept raw data or summary statistics.
- Poisson: poissonpdf for P(X = x) and poissoncdf for P(X ≤ x). Rewrite P(X ≥ k) as 1 − P(X ≤ k − 1).
- Write the distribution and parameters on the page before any GDC answer, for example "X ~ Po(4.8)".

## Common errors

- Subtracting variances for X − Y instead of adding them.
- Using Var(nX) = n²Var(X) when the question describes n separate items, which needs nVar(X).
- Using s²ₙ (the GDC's σx²) as the estimate of σ² instead of s²ₙ₋₁.
- Entering the variance σ²/n into normalcdf instead of the standard deviation σ/√n.
- Using a Z-interval with sₙ₋₁ because the sample is large. When σ is unknown, the guide requires t.
- Not scaling the Poisson mean to the new interval.
- Treating P(X > 4) as 1 − P(X ≤ 4) when the question asks for P(X ≥ 4).
- Choosing Poisson for a count that has a fixed maximum, such as successes in 20 trials.

## Where next

Condense this page with the [revision notes](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-revision-notes/), then test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-practice/). For the full course layout see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), and for paper-by-paper advice see [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections AHL 4.14, 4.15, 4.16 and 4.17.
