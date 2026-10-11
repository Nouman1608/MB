---
title: "OxfordAQA International AS and A-level Mathematics: The normal distribution and sums of normal variables (9660)"
seoTitle: "OxfordAQA A-level Maths Normal Distribution Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The normal distribution and sums of normal variables"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 204
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-normal-distribution-oxfordaqa-alevel-maths"
description: "Study guide to the normal distribution for OxfordAQA International A-level Mathematics: standardising, percentage points, unknown parameters and sums."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide covers section S2.4 (Normal distribution) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit S2 (Statistics). It is not examined at International AS.

It teaches the properties of normal distributions, standardising and using tables, finding an unknown mean or standard deviation from a table of percentage points, and the distribution of sums and differences of independent normal variables. Practise afterwards with the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables-practice/). Use the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) to track progress, and the [free 10-minute diagnostics](/diagnostics/) to find weak spots.

## What S2.4 asks for

| Spec content | What you must be able to do |
|---|---|
| Properties of normal distributions | Use shape, symmetry and area. Know that about 2/3 of observations lie within μ ± σ, and the equivalent results for 2σ and 3σ |
| Calculation of probabilities | Transform to the standardised normal distribution and use tables. Rounding z-values to two decimal places is accepted |
| Mean, variance and standard deviation | Find an unknown mean and/or standard deviation using a table of percentage points |
| Sum of independent normal random variables | Use the result for the distribution of a sum (and difference). The result is needed, not its proof |

In this guide, table values are quoted to four decimal places. Where a question needs a percentage point, the value is given as data, so you can follow every step.

## Properties of the normal distribution

If X has a normal distribution with mean μ and variance σ², write X ~ N(μ, σ²). Note that the second parameter is the **variance**. N(412, 9²) means standard deviation 9.

The probability density function is a bell-shaped curve:

```
          .  .
        .      .
      .          .
   .                .
 ______________________
        μ-σ  μ  μ+σ
```

Key facts:

- The curve is symmetric about x = μ, so the mean, median and mode are equal.
- The total area under the curve is 1.
- P(X < μ) = P(X > μ) = 0.5.
- The curve never touches the horizontal axis, but is very close to it beyond three standard deviations.

| Interval | Proportion of observations |
|---|---|
| μ − σ to μ + σ | about 2/3 (0.6827) |
| μ − 2σ to μ + 2σ | about 0.95 (0.9545) |
| μ − 3σ to μ + 3σ | almost all (0.9973) |

Because of symmetry, the tails are equal. About 0.0228 lies above μ + 2σ, and the same lies below μ − 2σ.

**Worked example 1.** The length L of a plank cut by a machine is N(2.40, 0.03²) metres. Describe the proportion of planks in each range.

```
2.37 to 2.43 is μ ± σ        → about 2/3
2.34 to 2.46 is μ ± 2σ       → about 0.95
Above 2.46: (1 − 0.95)/2     → about 0.025
Below 2.40                   → exactly 0.5
```

Check each interval by writing the end points as μ plus or minus a whole number of σ. If the interval is not of that form, you must standardise instead.

## Standardising and using tables

Every normal distribution can be turned into the **standardised normal distribution** Z ~ N(0, 1) by

```
Z = (X − μ) / σ
```

The z-value says how many standard deviations x is from the mean. The cumulative probability P(Z ≤ z) is written Φ(z), and many tables list Φ(z) for positive z only.

Three rules cover every case:

1. P(Z > z) = 1 − Φ(z).
2. P(Z < −z) = 1 − Φ(z), by symmetry. Never look up a negative z directly.
3. P(a < X < b) = Φ(zb) − Φ(za).

Round each z-value to two decimal places before using the tables. The specification says interpolation is not essential and that two-decimal-place z-values will be accepted.

**Worked example 2.** The mass of a loaf is X ~ N(412, 9²) grams. Find (a) P(X < 400), (b) P(X > 425), (c) P(400 < X < 425).

```
(a) z = (400 − 412)/9 = −1.33 (2 d.p.)
    P(X < 400) = P(Z < −1.33) = 1 − Φ(1.33) = 1 − 0.9082 = 0.0918

(b) z = (425 − 412)/9 = 1.44 (2 d.p.)
    P(X > 425) = 1 − Φ(1.44) = 1 − 0.9251 = 0.0749

(c) P(400 < X < 425) = 1 − 0.0918 − 0.0749 = 0.8333
```

In part (c), subtracting both tails from 1 avoids a negative-z lookup. A quick sketch showing the shaded area is the best check that the answer is sensible: here the shaded area is the middle, so it must be large.

## Finding an unknown mean or standard deviation

Here the probability is given and you work backwards to a z-value. A **table of percentage points** gives the z-value for a stated probability. In the working below, the percentage points are quoted as data:

| P(Z < z) | 0.80 | 0.85 | 0.90 | 0.95 | 0.975 | 0.99 |
|---|---|---|---|---|---|---|
| z | 0.8416 | 1.0364 | 1.2816 | 1.6449 | 1.9600 | 2.3263 |

Method in steps:

1. Sketch the curve and mark the given probability.
2. Decide whether the z-value is positive or negative. A probability below 0.5 to the left of x means a negative z.
3. Write the standardising equation (x − μ)/σ = z, using the value from the table.
4. Solve for the unknown.

**Worked example 3 (unknown mean).** A machine fills bottles with volume X ~ N(μ, 1.8²) ml. It is set so that 1% of bottles contain less than 500 ml. Find μ.

```
P(X < 500) = 0.01, so 500 lies below the mean: z is negative.
P(Z < −2.3263) = 0.01, because P(Z < 2.3263) = 0.99
(500 − μ)/1.8 = −2.3263
500 − μ = −4.187
μ = 504.2 ml (1 d.p.)
```

**Worked example 4 (unknown standard deviation).** Y ~ N(60, σ²) and P(Y > 70) = 0.15. Find σ.

```
P(Y > 70) = 0.15, so P(Y < 70) = 0.85, giving z = 1.0364
(70 − 60)/σ = 1.0364
σ = 10/1.0364 = 9.65 (3 s.f.)
```

**Worked example 5 (both unknown).** W ~ N(μ, σ²) with P(W < 42) = 0.20 and P(W > 58) = 0.10. Find μ and σ.

```
P(W < 42) = 0.20 → 42 is below the mean: (42 − μ)/σ = −0.8416
P(W > 58) = 0.10 → P(W < 58) = 0.90: (58 − μ)/σ = 1.2816

Equation 1: μ − 0.8416σ = 42
Equation 2: μ + 1.2816σ = 58
Subtract: 2.1232σ = 16, so σ = 7.54 (3 s.f.)
Substitute: μ = 42 + 0.8416 × 7.5358 = 48.3 (3 s.f.)
```

Write two simultaneous equations whenever both parameters are unknown. The signs of the z-values must match the side of the mean each value lies on.

## Sums and differences of independent normal variables

The specification asks for the result, not a proof. If X ~ N(μ₁, σ₁²) and Y ~ N(μ₂, σ₂²) are **independent**, then

```
X + Y ~ N(μ₁ + μ₂, σ₁² + σ₂²)
X − Y ~ N(μ₁ − μ₂, σ₁² + σ₂²)
aX + bY ~ N(aμ₁ + bμ₂, a²σ₁² + b²σ₂²)
```

The new variable is still normal. The means combine with the signs shown. The **variances always add**, even for a difference. This agrees with the formulae the specification expects you to know for a combination of independent continuous variables, E(aX ± bY) = aE(X) ± bE(Y) and Var(aX ± bY) = a²Var(X) + b²Var(Y).

Always work in variances, then take a square root only at the standardising step.

**Worked example 6.** The time to cross the campus is T₁ ~ N(14, 2.5²) minutes, and the time in the library queue is T₂ ~ N(9, 1.5²) minutes. The two are independent. Find (a) P(T₁ + T₂ > 25), (b) P(T₁ − T₂ > 8).

```
(a) T₁ + T₂ ~ N(23, 2.5² + 1.5²) = N(23, 8.5)
    standard deviation = √8.5 = 2.9155
    z = (25 − 23)/2.9155 = 0.69 (2 d.p.)
    P(T₁ + T₂ > 25) = 1 − Φ(0.69) = 1 − 0.7549 = 0.2451

(b) T₁ − T₂ ~ N(14 − 9, 8.5) = N(5, 8.5)
    z = (8 − 5)/2.9155 = 1.03 (2 d.p.)
    P(T₁ − T₂ > 8) = 1 − Φ(1.03) = 1 − 0.8485 = 0.1515
```

### One variable added to itself versus independent copies

Let X ~ N(30, 4²). Two different situations arise:

- **X₁ + X₂ + X₃**: three independent observations. Mean 90, variance 3 × 16 = 48.
- **3X**: one observation multiplied by three. Mean 90, variance 3² × 16 = 144.

The means agree, but the spreads do not. Independent values partly cancel each other's variation, so the sum is less spread out.

**Worked example 7.** For X ~ N(30, 4²), compare P(X₁ + X₂ + X₃ > 102) and P(3X > 102).

```
Sum:  N(90, 48), sd = 6.9282
      z = (102 − 90)/6.9282 = 1.73
      P = 1 − Φ(1.73) = 1 − 0.9582 = 0.0418

3X:   N(90, 144), sd = 12
      z = (102 − 90)/12 = 1.00
      P = 1 − Φ(1.00) = 1 − 0.8413 = 0.1587
```

Decide which situation applies by reading the context. Several separate items from the same machine mean independent copies. A single item scaled up (every item doubled in size, for example) means aX.

## Common errors

- Writing N(μ, σ) with the standard deviation in the second place. The second parameter is σ².
- Looking up a negative z-value in a table that lists only positive values. Use 1 − Φ(|z|).
- Using Φ(z) when the question asks for the upper tail, without subtracting from 1.
- Subtracting variances for X − Y. Variances add.
- Forgetting to take the square root of the variance before standardising.
- Treating n independent observations as nX.
- Giving the wrong sign to the z-value for a probability below 0.5 when solving for a parameter.
- Rounding the z-value to one decimal place, which can move the final answer in the third significant figure.

## Next steps

Condense this into the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables-revision-notes/), then test yourself on the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables-practice/). Check your coverage on the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and see the [course hub](/boards/oxfordaqa/a-level/mathematics/) for related units.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S2.4: Normal distribution, published by OxfordAQA. See the specification for the most up-to-date content.
