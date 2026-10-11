---
title: "Pearson Edexcel International Advanced Level Mathematics: The Normal distribution (YMA01)"
seoTitle: "Edexcel IAL Maths Normal Distribution Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The Normal distribution: standardising, tables and finding unknown parameters"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 164
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-normal-distribution-edexcel-alevel-maths"
description: "Study guide to the Normal distribution for Pearson Edexcel IAL Mathematics: standardising, cumulative tables, inverse use and finding mu and sigma."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Specification Issue 3, April 2019. It covers section 6 of the Statistics 1 (S1) content, "The Normal distribution", which the specification numbers 5.1. The specification states that S1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-practice/). Course pages: [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/), and the earlier statistics page on [statistical models and representing data](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary/). To find out where you stand first, try the [free diagnostics](/diagnostics/).

## What the specification asks for

| Outcome | What you must be able to do |
|---|---|
| The Normal distribution | Know the shape and the symmetry of the distribution; know what the mean and variance are |
| Tables of the cumulative distribution function | Find probabilities for any interval by using the table, with no interpolation |
| Inverse use of tables | Work backwards from a probability to a value of Z, then to a value of X |
| Simultaneous equations | Find unknown μ and σ from two probability statements |
| Not required | The probability density function, and derivations of the mean, variance and cumulative distribution function |

## The distribution and its shape

A continuous random variable X that follows a Normal distribution with mean μ and variance σ² is written

```
X ~ N(μ, σ²)
```

The second number is the variance, not the standard deviation. So N(25, 4) has standard deviation 2, and N(25, 4²) has standard deviation 4. Read the bracket carefully before you start.

The graph of the probability density function is a bell shape:

```
          |      ***
          |    **   **
          |  **       **
          | *           *
          |*             *
 ---------*-------+-------*---------
        μ-σ      μ      μ+σ
```

Three facts follow from the shape and you can use them without proof:

- The curve is symmetrical about the vertical line x = μ.
- The mean, the median and the mode are all equal to μ.
- Altogether the area under the curve equals 1, so exactly 0.5 lies to the left of μ.

A single exact value has probability zero for a continuous variable, so P(X < a) and P(X ≤ a) are the same number. Strict and non-strict inequalities do not change the answer.

## Standardising

Every Normal distribution can be turned into the standard Normal distribution, Z ~ N(0, 1), by

```
Z = (X − μ) / σ
```

Here σ is the standard deviation, so take the square root of the variance first. The value z tells you how many standard deviations a value sits above (positive) or below (negative) the mean.

## Using the cumulative table

The specification refers to tables of the cumulative distribution function. We write Φ(z) = P(Z ≤ z). Work with Φ(z) for positive z only, and use symmetry for negative z. Interpolation is not necessary, so you only meet values of z that can be read straight from the table. In the examples here, the Φ values you need are given as data, to 4 decimal places.

For other regions, use symmetry and the fact that the total area is 1:

| You want | Write it as |
|---|---|
| P(Z < z) for z > 0 | Φ(z) |
| P(Z > z) for z > 0 | 1 − Φ(z) |
| P(Z < −z) | 1 − Φ(z) |
| P(Z > −z) | Φ(z) |
| P(−z < Z < z) | 2Φ(z) − 1 |
| P(a < Z < b) | Φ(b) − Φ(a), after rewriting each end as above |

A quick sketch of the bell with the required region shaded saves most sign errors. If the shaded region contains the centre, the answer should be more than 0.5 for a one-sided region that reaches past μ.

### Worked example 1: probabilities

The mass M grams of a mango from an orchard is modelled by M ~ N(310, 20²). Data: Φ(0.75) = 0.7734 and Φ(1.5) = 0.9332. Find (a) P(M < 325), (b) P(M > 280), (c) P(280 < M < 325), (d) P(M < 295).

```
σ = 20
(a) z = (325 − 310)/20 = 0.75
    P(M < 325) = Φ(0.75) = 0.7734
(b) z = (280 − 310)/20 = −1.5
    P(M > 280) = P(Z > −1.5) = Φ(1.5) = 0.9332
(c) P(280 < M < 325) = P(−1.5 < Z < 0.75)
                     = Φ(0.75) − (1 − Φ(1.5))
                     = 0.7734 + 0.9332 − 1 = 0.7066
(d) z = (295 − 310)/20 = −0.75
    P(M < 295) = 1 − Φ(0.75) = 0.2266
```

## Inverse use of the table

Sometimes you are given a probability and asked for a value. Work in this order:

1. Draw the sketch and shade the region.
2. Rewrite the statement as Φ(z) = p with p greater than 0.5. If the given probability is below 0.5, find the z for the mirror-image probability, then attach a minus sign.
3. Read z from the table, working backwards. The table is not interpolated, so the probabilities you are given will match entries.
4. Convert back with x = μ + zσ.

Useful values for this guide (supplied as data): Φ(z) = 0.8 gives z = 0.8416, Φ(z) = 0.9 gives z = 1.2816, Φ(z) = 0.95 gives z = 1.6449, and Φ(z) = 0.975 gives z = 1.96.

### Worked example 2: finding a value

For the mangoes in example 1, find k such that (a) P(M > k) = 0.10, (b) P(M < k) = 0.20.

```
(a) P(M > k) = 0.10 so P(M < k) = 0.90
    Φ(z) = 0.90, so z = 1.2816
    k = 310 + 1.2816 × 20 = 335.632
    k = 335.6 (1 d.p.)
(b) P(M < k) = 0.20 is below 0.5, so z is negative.
    Mirror: Φ(z') = 0.80, so z' = 0.8416 and z = −0.8416
    k = 310 − 0.8416 × 20 = 293.168
    k = 293.2 (1 d.p.)
```

Check: part (a) is above the mean 310 and part (b) is below it, which matches the probabilities.

## Finding one unknown parameter

If only μ or only σ is unknown, one probability statement is enough. Standardise, set the result equal to the z you know, and solve one equation.

### Worked example 3: unknown σ

T ~ N(60, σ²) and P(T < 52) = 0.0668. Data: Φ(1.5) = 0.9332. Find σ.

```
P(T < 52) = 0.0668 is below 0.5, so z is negative.
Φ(1.5) = 0.9332 = 1 − 0.0668, so the z-value is −1.5.
(52 − 60)/σ = −1.5
σ = 8/1.5 = 16/3 = 5.33 (3 s.f.)
```

### Worked example 4: unknown μ

Y ~ N(μ, 6²) and P(Y > 50) = 0.0228. Data: Φ(2) = 0.9772.

```
P(Y < 50) = 1 − 0.0228 = 0.9772 = Φ(2)
(50 − μ)/6 = 2
μ = 50 − 12 = 38
```

## Using symmetry to find μ

If two values are equally far from the mean, the probabilities beyond them are equal. So if P(X < a) = P(X > b), then μ = (a + b)/2. This gives μ without any tables.

Suppose X ~ N(μ, σ²), P(X < 18) = P(X > 30) = 0.0668. Then μ = (18 + 30)/2 = 24. Since Φ(1.5) = 0.9332, the z-value for 18 is −1.5, so (18 − 24)/σ = −1.5 and σ = 4.

## Finding both μ and σ

Two unknown parameters need two probability statements. Each statement gives one equation in μ and σ, and you solve them as simultaneous linear equations. The unknowns appear linearly because z is a fixed number.

### Worked example 5: simultaneous equations

X ~ N(μ, σ²), P(X < 30) = 0.20 and P(X > 46) = 0.10. Find μ and σ. Data: Φ(z) = 0.8 gives z = 0.8416, and Φ(z) = 0.9 gives z = 1.2816.

```
P(X < 30) = 0.20 so (30 − μ)/σ = −0.8416
P(X > 46) = 0.10 so (46 − μ)/σ = 1.2816

Rewrite:   μ − 0.8416σ = 30
           μ + 1.2816σ = 46
Subtract:  2.1232σ = 16
           σ = 7.5358... = 7.54 (3 s.f.)
Substitute: μ = 30 + 0.8416 × 7.5358... = 36.342...
           μ = 36.3 (3 s.f.)
```

Keep the unrounded values through the working and round only the final answers. Check: μ must lie between 30 and 46, and it does.

## Using a probability to count

If a population or batch has N items, the expected number in a region is N × P(region). For 500 mangoes with M ~ N(310, 20²), P(M > 340) = 1 − Φ(1.5) = 0.0668, so the expected number is 500 × 0.0668 = 33.4, which is about 33.

## Common errors

- Putting the variance in place of the standard deviation. For N(40, 25) divide by 5, not 25.
- Looking up a negative z in a table that lists only positive values, and reading the wrong entry. Use 1 − Φ(|z|).
- Giving Φ(z) when the question asks for P(Z > z).
- In an inverse problem, finding z for the wrong tail. Always compare the sign of z with the position of the value relative to μ.
- Writing both equations with the same sign for z when one value is below the mean.
- Rounding z, σ or μ part-way through a simultaneous-equation solution.
- Writing an answer such as 1.3 as a probability. A probability lies between 0 and 1, so stop and check.

## Next steps

Condense this guide with the [revision notes](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-revision-notes/), then try the [practice questions](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-practice/). The [course hub](/boards/edexcel/a-level/mathematics/) and [checklist](/checklists/edexcel/a-level/mathematics/) show what else you need, and the [diagnostics](/diagnostics/) help you decide what to work on next.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics -- Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited.
