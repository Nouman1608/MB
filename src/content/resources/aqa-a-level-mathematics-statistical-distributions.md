---
title: "AQA A-Level Mathematics: N: Statistical distributions (7357)"
seoTitle: "AQA A-Level Maths 7357 Statistical Distributions Guide"
resourceType: "study-guides"
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
description: "Study guide to AQA A-Level Maths Section N: discrete distributions, the binomial and Normal models, and choosing a model, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section N: Statistical distributions** (content references N1, N2 and N3) of
the **AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. Section N is listed under Paper 3 in the specification, with the rest of the statistics
content (Sections K to O). A calculator is required in every 7357 paper, and for Sections K to O
the specification says you must be able to use calculator technology to access probabilities from
standard statistical distributions.

Use it with the [Statistical distributions revision notes](/resources/aqa-a-level-mathematics-statistical-distributions-revision-notes/)
and the [Statistical distributions practice questions](/resources/aqa-a-level-mathematics-statistical-distributions-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start. Binomial coefficients ⁿCᵣ are
taught in the [Sequences and series guide](/resources/aqa-a-level-mathematics-sequences-and-series/),
and histograms, mean and standard deviation in the
[Data presentation and interpretation guide](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation/).

## What Section N covers

| Ref | What you must be able to do |
|---|---|
| N1 | Understand and use simple, discrete probability distributions, including the binomial distribution, as a model; calculate binomial probabilities. Calculating the mean and variance of a discrete random variable is excluded. |
| N2 | Understand and use the Normal distribution as a model; find probabilities using it. Link to histograms, mean, standard deviation, points of inflection and the binomial distribution. |
| N3 | Select an appropriate distribution for a context, with reasons, including recognising when a binomial or Normal model may not be appropriate. |

Section O (hypothesis testing) builds directly on N1 and N2, so this topic is worth securing first.

## N1 -- Discrete probability distributions

A **discrete random variable** X takes separate values, such as 0, 1, 2, … Its **probability
distribution** lists every value with its probability, as a table or a formula. Two facts always
hold:

- each probability is between 0 and 1;
- the probabilities add to 1: Σ P(X = x) = 1.

A simple case is the **discrete uniform distribution**, where every value is equally likely. The
score on a fair six-sided dice has P(X = x) = 1/6 for x = 1, 2, …, 6.

### Worked example 1 -- finding an unknown constant

X has probability function P(X = x) = k(x + 1) for x = 1, 2, 3, 4. Find k and P(X ≥ 3).

```
Sum of probabilities = 1
k(2) + k(3) + k(4) + k(5) = 1
14k = 1  so  k = 1/14

P(X ≥ 3) = P(X = 3) + P(X = 4) = 4/14 + 5/14 = 9/14
```

Keep answers as exact fractions when the question gives exact values.

### The binomial distribution

X ~ B(n, p) models the **number of successes** in n trials when:

1. there is a **fixed number of trials**, n;
2. each trial has **two outcomes**, success or failure;
3. the probability of success, p, is **the same on every trial**;
4. the trials are **independent**.

Then, with q = 1 − p:

```
P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ    for r = 0, 1, 2, …, n
```

In practice you use your calculator's **binomial probability** function for P(X = r) and its
**cumulative binomial** function for P(X ≤ r). Everything else is rewritten in terms of these.

| Words | Inequality | Write as |
|---|---|---|
| at most 5 | X ≤ 5 | P(X ≤ 5) |
| fewer than 5 | X < 5 | P(X ≤ 4) |
| more than 5 | X > 5 | 1 − P(X ≤ 5) |
| at least 5 | X ≥ 5 | 1 − P(X ≤ 4) |
| between 3 and 6 inclusive | 3 ≤ X ≤ 6 | P(X ≤ 6) − P(X ≤ 2) |

### Worked example 2 -- binomial probabilities

15% of the light bulbs from a supplier fail within a year. A random sample of 20 bulbs is taken.
X is the number that fail. Assume X ~ B(20, 0.15).

```
(a) P(X = 4)       = ²⁰C₄ (0.15)⁴ (0.85)¹⁶ = 0.182 (3 s.f.)
(b) P(X ≤ 2)       = 0.405 (3 s.f.)                [cumulative]
(c) P(X > 5)       = 1 − P(X ≤ 5) = 0.0673 (3 s.f.)
(d) P(3 ≤ X ≤ 6)   = P(X ≤ 6) − P(X ≤ 2) = 0.573 (3 s.f.)
```

Write the distribution and the probability statement before the number. A bare decimal gives the
reader no way to see which probability you found.

## N2 -- The Normal distribution

The Normal distribution models a **continuous** variable, such as a mass or a length. X ~ N(μ, σ²)
has mean μ and **variance** σ², so standard deviation σ. Its curve:

- is bell-shaped and **symmetrical about μ**;
- has total area 1 under it, and probability = area;
- has **points of inflection at x = μ − σ and x = μ + σ**;
- gives P(X = a) = 0 for any single value, so P(X < a) and P(X ≤ a) are equal.

Roughly 68% of values lie within one standard deviation of the mean, 95% within two and 99.7%
within three. These figures help you sketch the curve and judge whether data look Normal.

**Link to histograms.** A histogram of a large set of data that is symmetrical and bell-shaped
suggests a Normal model. Use the sample mean and standard deviation as estimates of μ and σ. The
Normal curve is then a smooth version of the histogram, with area again standing for proportion.

### Standardising

The **standard Normal** variable is Z ~ N(0, 1). Any Normal variable converts to it with

```
Z = (X − μ)/σ
```

Your calculator gives Normal probabilities directly from μ and σ, so you don't have to
standardise to find a probability. You do need Z when μ or σ is unknown.

### Worked example 3 -- Normal probabilities

The mass X grams of a bag of rice is modelled by X ~ N(250, 4²).

```
(a) P(X < 244):  z = (244 − 250)/4 = −1.5
    P(X < 244) = P(Z < −1.5) = 0.0668 (3 s.f.)

(b) P(247 < X < 255) = 0.668 (3 s.f.)
```

Note that σ = 4, not 16. Check which number the question gives: N(250, 16) and N(250, 4²) are the
same distribution.

### Worked example 4 -- finding a value (inverse Normal)

For the bags in Example 3, find the mass m that 10% of bags exceed.

```
P(X > m) = 0.1  so  P(X < m) = 0.9
Inverse Normal: m = 255.1… = 255 g (3 s.f.)
```

Using Z: P(Z < z) = 0.9 gives z = 1.2816, so m = 250 + 1.2816 × 4 = 255.1.

### Worked example 5 -- an unknown standard deviation

The lengths of a type of fish are Normally distributed with mean 80 cm. 15% of the fish are longer
than 86 cm. Find σ.

```
P(X > 86) = 0.15  so  P(Z < z) = 0.85, z = 1.0364
(86 − 80)/σ = 1.0364
σ = 6/1.0364 = 5.79 cm (3 s.f.)
```

With two unknowns (μ and σ), form two equations of this type and solve them together.

### Link to the binomial distribution

A binomial distribution with large n, and p not close to 0 or 1, has a bar chart that is roughly
bell-shaped. It can then be approximated by a Normal distribution with the same mean and variance:

```
B(n, p)  ≈  N(np, np(1 − p))
```

Because X is discrete and the Normal is continuous, treat each whole number r as the interval from
r − 0.5 to r + 0.5. This is called a **continuity correction**.

### Worked example 6 -- comparing the two models

X ~ B(80, 0.4). Compare P(X ≤ 28) from the binomial and from a Normal approximation.

```
Exact (cumulative binomial):  P(X ≤ 28) = 0.213 (3 s.f.)

np = 32,  np(1 − p) = 19.2,  so Y ~ N(32, 19.2)
P(X ≤ 28) ≈ P(Y < 28.5) = 0.212 (3 s.f.)
```

The two agree closely. Your calculator gives the exact binomial value, so use the binomial unless
the question asks about the Normal link.

## N3 -- Choosing a model

Pick the model from the **type of variable** and the **conditions**, and give a reason in context.

**Binomial is suitable** when you count successes in a fixed number of independent trials with a
constant probability. It may **not** be suitable when:

- items are chosen **without replacement** from a small group, so p changes and trials are not
  independent;
- the probability varies between trials (different people, different conditions);
- the number of trials is not fixed, for example "throw until you get a six";
- outcomes cluster, such as faults that come in batches, so trials are not independent.

**Normal is suitable** for a continuous variable whose data are roughly symmetrical, with a single
peak, and with about 95% of values within two standard deviations of the mean. It may **not** be
suitable when:

- the data are clearly **skewed** (a long tail on one side);
- the variable is discrete with only a few possible values;
- the model gives a noticeable probability to impossible values.

### Worked example 7 -- critiquing a model

Waiting times at a clinic have mean 4 minutes and standard deviation 3 minutes. Explain why
N(4, 3²) is not a good model.

```
P(X < 0) = 0.0912 under N(4, 3²)
```

A waiting time cannot be negative, yet the model gives about 9% of patients a negative time. The
mean is only 1.33 standard deviations above 0, so the real data are likely to be positively skewed.
A Normal model is not appropriate.

## Using your calculator

The specification lists, as a required minimum, a calculator that can access probabilities from
standard statistical distributions and has an inverse Normal function. Practise with your own
model:

- **Binomial pd** for P(X = r); **binomial cd** for P(X ≤ r).
- **Normal cd** with lower and upper bounds for P(a < X < b). Use a very large number as a bound
  for "greater than".
- **Inverse Normal** for a value from a probability. Check whether your model wants the area to
  the left or to the right.

Write down the distribution, its parameters and the probability statement every time. That
working shows what you entered.

## Common errors

- Entering the variance as σ in the Normal function. In N(250, 16), σ = 4.
- Treating P(X > 5) as 1 − P(X ≤ 4) for a binomial. That is P(X ≥ 5).
- Giving the four binomial conditions in general terms instead of in context.
- Using inverse Normal with the wrong tail: P(X > m) = 0.1 needs the 0.9 point.
- Using a Normal model for a variable that cannot be negative when μ is close to 0.
- Calculating a mean and variance for a general discrete table. This is excluded from 7357.
- Rounding a probability to 2 decimal places mid-question and carrying the error forward.

## Next steps

Condense the methods with the
[Statistical distributions revision notes](/resources/aqa-a-level-mathematics-statistical-distributions-revision-notes/),
then test yourself with the
[Statistical distributions practice questions](/resources/aqa-a-level-mathematics-statistical-distributions-practice/).
Revisit sampling ideas in the
[Statistical sampling guide](/resources/aqa-a-level-mathematics-statistical-sampling/), and plan your
final weeks with [exam preparation for 7357](/resources/aqa-a-level-mathematics-exam-preparation/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.15, N: Statistical distributions.
