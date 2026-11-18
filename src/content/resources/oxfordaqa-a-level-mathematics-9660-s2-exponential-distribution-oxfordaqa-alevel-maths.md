---
title: "OxfordAQA A-level Mathematics (9660): Exponential distribution"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S2: Statistics (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-exponential-distribution-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 S2.3 study guide: when the exponential model applies, the cdf by integration, medians and quartiles, finding the rate, and multi-step questions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section S2.3 (Exponential distribution) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. S2.3 is in Unit S2 (Statistics), the statistics option of the International A-level. It follows S2.1 (Poisson distribution) and S2.2 (continuous random variables), and it uses both.

The broader [continuous random variables and exponential distribution guide](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the/) gives the formulae and a first set of calculations. This page goes further: integrating the pdf yourself, finding medians and quartiles, working backwards to the rate, handling changes of unit, and building multi-step questions with the Poisson and binomial distributions. Condense it with the [exponential distribution revision notes](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [exponential distribution practice questions](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

| Content | Additional information |
|---|---|
| Conditions for application of an exponential distribution | Knowledge that lengths of intervals between Poisson events have an exponential distribution |
| Calculation of probabilities for an exponential distribution | Using the cumulative distribution function or by integration of the probability density function |
| Mean, variance and standard deviation of an exponential distribution | Proofs will not be expected |

## 1. When the model applies

The exponential distribution models the length of the interval, in time or in distance, between consecutive events of a Poisson process. So the conditions are those of the Poisson model, applied to the events:

- events occur singly (not two at once);
- events occur independently of each other;
- events occur at random, at a constant average rate λ per unit of time or length.

If these hold, the waiting time X from one event to the next satisfies X ~ Exp(λ), with λ the same rate as in the Poisson model.

**When the model fails.** Judge each context against the conditions:

- Buses that run to a timetable arrive regularly, not at random, so the gaps are not exponential.
- Customers arriving at a café are far more frequent at lunchtime, so the rate is not constant across a day. The model may still be reasonable for a short period with a steady rate.
- Machines on a production line may be unable to fail again for some time after a repair, so very short gaps are impossible; the exponential model gives short gaps the highest density.

A question that asks you to "comment on the suitability" wants one of these conditions applied to the context, not a list of all three.

## 2. From pdf to cdf by integration

For X ~ Exp(λ), the pdf is f(x) = λe^(−λx) for x ≥ 0 and 0 for x < 0. The specification allows probabilities to be found from the cdf or by integrating the pdf, so you should be able to derive the cdf.

### Worked example 1

X ~ Exp(0.25). Derive F(x) and find P(2 < X < 6).

```
F(x) = ∫₀ˣ 0.25e^(−0.25u) du
     = [−e^(−0.25u)]₀ˣ
     = −e^(−0.25x) − (−1)
     = 1 − e^(−0.25x),   for x ≥ 0
```

Then

```
P(2 < X < 6) = F(6) − F(2)
             = (1 − e^(−1.5)) − (1 − e^(−0.5))
             = e^(−0.5) − e^(−1.5)
             = 0.6065 − 0.2231 = 0.383 (3 s.f.)
```

Because X is continuous, P(X = 2) = 0, so P(2 ≤ X ≤ 6) has the same value. The survivor form P(X > x) = e^(−λx) is the fastest route for "more than" questions.

## 3. Medians, quartiles and other values

To find the value with a given probability below it, solve F(x) = p.

```
1 − e^(−λm) = 0.5   gives the median   m = (ln 2)/λ
1 − e^(−λq) = 0.25  gives the lower quartile  q₁ = ln(4/3)/λ
1 − e^(−λq) = 0.75  gives the upper quartile  q₃ = (ln 4)/λ
```

### Worked example 2

Faults occur at random along an electricity cable at an average rate of 0.4 per kilometre. Let X km be the distance between consecutive faults. Find the mean, the median and the interquartile range of X.

```
X ~ Exp(0.4)
Mean      = 1/0.4 = 2.5 km
Median    = (ln 2)/0.4 = 1.73 km (3 s.f.)
q₁        = ln(4/3)/0.4 = 0.719 km
q₃        = (ln 4)/0.4 = 3.47 km
IQR       = 3.47 − 0.719 = 2.75 km (3 s.f.)
```

The median is less than the mean. The distribution has a long right tail: a few long gaps pull the mean up. This is true for every exponential distribution, since (ln 2)/λ ≈ 0.693/λ < 1/λ.

### Two facts that hold for every rate

- P(X > mean) = e^(−λ × 1/λ) = e⁻¹ ≈ 0.368. Only about 37% of gaps are longer than the mean.
- The standard deviation equals the mean, 1/λ. So P(X lies within one standard deviation of the mean) = P(0 < X < 2/λ) = 1 − e⁻² ≈ 0.865.

## 4. Working backwards to λ

### Worked example 3

The time X minutes between arrivals at a petrol station is modelled by an exponential distribution. It is known that P(X > 5) = 0.3. Find the rate λ and the mean time between arrivals.

```
e^(−5λ) = 0.3
−5λ = ln 0.3
λ = (ln(10/3))/5 = 0.241 per minute (3 s.f.)
Mean = 1/λ = 4.15 minutes (3 s.f.)
```

If instead the median were given, use λ = (ln 2)/m. If the mean is given, λ is its reciprocal, not the mean itself.

## 5. Units must match

λ and x must use the same unit. Emails arriving at random at 6 per hour arrive at 0.1 per minute. The probability of waiting more than 15 minutes for the next email is

```
λ = 0.1 per minute:  P(X > 15) = e^(−0.1 × 15) = e^(−1.5) = 0.223
or λ = 6 per hour:   P(X > 0.25) = e^(−6 × 0.25) = e^(−1.5) = 0.223
```

Both give the same answer because λx is a pure number. Mixing 6 per hour with 15 minutes gives e⁻⁹⁰, which is clearly wrong.

## 6. Multi-step questions

### Worked example 4: given that

The time X minutes between calls to a help desk has distribution Exp(0.1). No call has arrived in the 3 minutes since the last one. Find the probability that the wait from the last call is more than 8 minutes in total.

This is a conditional probability (from S1.1):

```
P(X > 8 | X > 3) = P(X > 8) / P(X > 3)
                 = e^(−0.8) / e^(−0.3)
                 = e^(−0.5) = 0.607 (3 s.f.)
```

The answer equals P(X > 5): having already waited 3 minutes does not change the chance of waiting 5 more. This follows from the independence of events in the Poisson process.

### Worked example 5: combining with the binomial distribution

Cars pass a point at random at an average rate of 0.25 per second. Find the probability that, out of 5 independent gaps between cars, exactly 3 are longer than 4 seconds.

```
One gap:   p = P(X > 4) = e^(−0.25 × 4) = e⁻¹ = 0.3679
Five gaps: Y ~ B(5, 0.3679)
P(Y = 3) = ⁵C₃ × 0.3679³ × 0.6321² = 0.199 (3 s.f.)
```

Use the unrounded value of e⁻¹ in the binomial step. Rounding p to 0.37 first gives 0.201, which loses the accuracy mark.

### Worked example 6: two waiting times

For independent X₁, X₂ ~ Exp(0.5), the total waiting time for two consecutive events, T = X₁ + X₂, has

```
E(T) = 2 + 2 = 4
Var(T) = 4 + 4 = 8
```

T is not exponential, so you cannot find P(T > 6) with the exponential cdf. Questions at this level only ask for its mean and variance, which follow from S2.2.

## Common mistakes

- Treating λ as the mean: the mean is 1/λ.
- Using the cdf 1 − e^(−λx) for P(X > x).
- Mixing units, such as a rate per hour with a time in minutes.
- Using the exponential model when events are scheduled, or when the rate clearly changes.
- Forgetting that the median is (ln 2)/λ, not half the mean.
- Rounding a probability before using it in a binomial or conditional step.
- Claiming that the sum of two exponential variables is exponential.

## Exam technique

- **State the distribution** in full, for example X ~ Exp(0.4), before the first calculation.
- **Find** a probability: write the probability statement, then the expression, then the value.
- **Show that** a median or quartile is a given value: solve F(x) = p algebraically and show the logarithm step.
- **Comment on** a model: name the condition (random, independent, constant rate) and link it to the context.
- **By integration**: if a question says this, integrating the pdf is required; quoting the cdf will not earn the method marks.

## Where next

Work through the [exponential distribution practice questions](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-practice/), then condense with the [exponential distribution revision notes](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-revision-notes/). The Poisson groundwork is in the [Poisson distribution guide](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S2.3 Exponential distribution, published by OxfordAQA.
