---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.9 The normal distribution"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.9
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-9"
description: "IB Maths AA study guide to section 4.9: properties of the normal curve, symmetry arguments without a GDC, normal probabilities and inverse normal calculations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.9** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **the normal distribution and curve; properties of the normal distribution;
diagrammatic representation; normal probability calculations; and inverse normal calculations**. It is SL
and HL content. Finding an unknown mean or standard deviation by standardising belongs to section 4.12; see
the [4.12 standardization study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12/).

The [probability, discrete and continuous distributions, binomial and normal study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
gives one probability and one inverse calculation. This page adds the symmetry reasoning that Paper 1 tests
without technology, the "area to the left" rule for inverse normal problems, intervals about the mean, and
questions that combine a normal probability with the binomial distribution.

## The normal distribution and its properties

X ~ N(μ, σ²) is a **continuous** random variable with a bell-shaped curve. The guide expects awareness that
many natural measurements (heights, masses, measurement errors) are approximately normal.

- The curve is **symmetric** about x = μ, so mean = median = mode = μ.
- The **total area** under the curve is 1; areas are probabilities.
- The spread is set by σ: a larger σ gives a lower, wider curve.
- About **68%** of values lie within μ ± σ, **95%** within μ ± 2σ and **99.7%** within μ ± 3σ.
- Because X is continuous, P(X = a) = 0, so P(X < a) and P(X ≤ a) are equal.

**Notation trap.** The second parameter is the **variance**. N(50, 16) has σ = 4, not 16. Many GDCs ask for
σ, so take the square root before entering it.

## Diagrammatic representation

Always sketch the curve, mark μ on the axis, mark the values in the question and shade the required area. The
sketch tells you whether an answer should be more or less than 0.5 and which side of μ an inverse value
should lie, which catches most input errors.

## Symmetry: probabilities without a calculator

Paper 1 questions can be answered from symmetry and the total area of 1.

### Worked example 1: Paper 1 reasoning

X ~ N(50, σ²) and P(X < 42) = 0.18. Find P(X > 58), P(42 < X < 58) and P(50 < X < 58).

```
42 and 58 are each 8 from the mean, so by symmetry P(X > 58) = P(X < 42) = 0.18
P(42 < X < 58) = 1 − 0.18 − 0.18 = 0.64
P(50 < X < 58) = 0.64 / 2 = 0.32
```

The 68-95-99.7 percentages give quick estimates in the same way. For X ~ N(70, 5²), P(X > 80) ≈
(1 − 0.95)/2 = 0.025, since 80 is two standard deviations above the mean.

## Normal probability calculations (technology)

Use the GDC's normal cdf with a lower bound, an upper bound, μ and σ. For a one-sided region, use a very
large or very small number (such as 10⁹⁹ or −10⁹⁹) as the open bound.

### Worked example 2: probabilities and expected numbers

The heights of seedlings after three weeks are modelled by X ~ N(12.4, 1.8²) cm.

```
P(X > 15)        = 0.0743
P(10 < X < 14)   = 0.722
Expected number taller than 15 cm among 300 seedlings = 300 × 0.0743 ≈ 22.3
```

## Inverse normal calculations

Inverse normal gives the value k with a given area **to its left**, P(X < k) = a. Convert every wording to
that form first:

| Wording | Area to the left of k |
|---|---|
| P(X < k) = 0.1 (lowest 10%) | 0.1 |
| P(X > k) = 0.05 (top 5%) | 0.95 |
| Middle 90%, symmetric about μ | Lower limit 0.05, upper limit 0.95 |

Some GDCs offer a "right" or "centre" option; if you use it, still write the probability statement.

### Worked example 3: thresholds

For the seedlings in worked example 2:

```
Shortest 10%:  P(X < k) = 0.1   →  k ≈ 10.1 cm
Tallest 5%:    P(X > k) = 0.05  →  P(X < k) = 0.95  →  k ≈ 15.4 cm
Middle 90%:    from 9.44 cm to 15.4 cm  (areas 0.05 and 0.95)
```

Check against the sketch: 10.1 is below the mean, 15.4 above it, and the middle interval is symmetric about
12.4 (12.4 − 9.44 ≈ 15.36 − 12.4).

### Worked example 5: two given probabilities (Paper 1)

X ~ N(μ, σ²), P(X < 20) = 0.3 and P(X > 28) = 0.3. Find μ, P(20 < X < 28) and P(24 < X < 28). Given also
that P(X < 31) = 0.9, find P(28 < X < 31).

```
Equal tails: 20 and 28 are equidistant from μ, so μ = (20 + 28)/2 = 24
P(20 < X < 28) = 1 − 0.3 − 0.3 = 0.4
P(24 < X < 28) = 0.4/2 = 0.2
P(28 < X < 31) = P(X < 31) − P(X < 28) = 0.9 − 0.7 = 0.2
```

Equal tail areas always mean equal distances from the mean, and every region can be built from "area to
the left" values. A quick sketch confirms consistency: 31 lies above 28, so P(X < 31) must exceed
P(X < 28) = 0.7, which it does.

## Combining with the binomial distribution

A normal probability can be the p of a binomial model.

### Worked example 4

Eight seedlings are chosen at random. Find the probability that at least two are taller than 15 cm.

```
p = P(X > 15) = 0.074307...      (keep unrounded)
Y ~ B(8, 0.074307)
P(Y ≥ 2) = 1 − P(Y ≤ 1) = 0.115
```

## Common mistakes

- Entering the variance as σ in the GDC.
- Using inverse normal with the area to the right without converting.
- Giving a probability greater than 1 or a threshold on the wrong side of the mean (the sketch prevents
  both).
- Treating P(X ≤ a) and P(X < a) as different for a normal variable.
- Applying the 68-95-99.7 rule as exact values when technology is expected.
- Rounding a normal probability before using it in a binomial calculation.

## Exam technique

- **"Sketch"** or **"shade"**: a symmetric curve, μ marked, the region shaded and the values labelled.
- **"Find the probability"** (Paper 2): write the statement, such as P(10 < X < 14), then the GDC value to 3
  significant figures.
- **"Find k such that"**: write P(X < k) = a in left-area form before using inverse normal.
- **"Write down"** a probability using symmetry (Paper 1): use the total area of 1 and equal tails.
- **"Find the expected number"**: n × probability, unrounded.
- **"Hence"**: reuse the probability you have just found, often as p in a binomial model.

## Frequently asked questions

**Do I need z-values for section 4.9?**
No. In 4.9 the mean and standard deviation are known and a GDC does the calculation directly.
Standardisation is section 4.12.

## Where to go next

Use the [4.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-9-revision-notes/)
for recall and the [4.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-9-practice/)
to test yourself. The binomial ideas used in worked example 4 are in the
[4.8 binomial distribution study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.9 (SL and HL): the normal distribution and curve; properties of the normal distribution;
diagrammatic representation; normal probability calculations; inverse normal calculations.
