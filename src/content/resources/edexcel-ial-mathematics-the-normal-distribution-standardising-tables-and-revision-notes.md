---
title: "Pearson Edexcel International Advanced Level Mathematics: The Normal distribution (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths Normal Distribution Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on the Normal distribution for Pearson Edexcel IAL Mathematics: methods, a quick self-test and the usual lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense the Normal distribution content from the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Specification Issue 3, April 2019. The content is section 6 of Statistics 1, numbered 5.1 in the specification, and S1 is an optional unit for IAS and IAL Mathematics and Further Mathematics. For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and/).

Other pages: [practice questions](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-practice/), the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key facts

| Item | Result |
|---|---|
| Notation | X ~ N(μ, σ²). The second value is the variance |
| Parameters | Mean μ, variance σ², standard deviation σ |
| Shape | A bell, mirror-symmetrical about the line x = μ |
| Mean, median, mode | All equal μ |
| Total area | 1, and 0.5 on each side of μ |
| Exact values | A single point has zero probability, so strict and non-strict inequalities give the same answer |
| Standardising | Z = (X − μ)/σ, with Z ~ N(0, 1) |
| Cumulative function | Φ(z) = P(Z ≤ z) |
| Not required | Probability density function; derivations; interpolation |

## Reading probabilities from Φ

| You want | Use |
|---|---|
| P(Z < z), z > 0 | Φ(z) |
| P(Z > z), z > 0 | 1 − Φ(z) |
| P(Z < −z) | 1 − Φ(z) |
| P(Z > −z) | Φ(z) |
| P(−z < Z < z) | 2Φ(z) − 1 |
| P(a < Z < b) | Φ(b) − Φ(a) |

## Method boxes

**Finding a probability**
1. Sketch the bell and shade the region.
2. Standardise each end: z = (x − μ)/σ.
3. Rewrite using Φ and symmetry so that every z is positive.
4. Read the table and combine.

**Finding a value from a probability (inverse)**
1. Sketch and shade.
2. Turn the given probability into Φ(z) = p with p above 0.5.
3. Read z backwards from the table. If the shaded left tail is below 0.5, the z is negative.
4. Use x = μ + zσ.

**Finding μ and σ**
1. Write each statement as P(X < something) = a probability.
2. Find the z for each, with the correct sign.
3. Write (x₁ − μ)/σ = z₁ and (x₂ − μ)/σ = z₂, then rearrange to x = μ + zσ.
4. Subtract to eliminate μ, solve for σ, then substitute for μ.
5. Check that σ is positive and that μ lies between x₁ and x₂ when they sit on opposite sides.

**Symmetry shortcut**: if P(X < a) = P(X > b), then μ = (a + b)/2.

## Small worked reminders

The data for these reminders: Φ(1.2) = 0.8849, Φ(1.4) = 0.9192, Φ(z) = 0.75 gives z = 0.6745, Φ(z) = 0.90 gives z = 1.2816, Φ(z) = 0.70 gives z = 0.5244.

**Probability.** X ~ N(40, 25), so σ = 5.

```
P(X < 46) = Φ((46 − 40)/5) = Φ(1.2) = 0.8849
P(X > 33) = P(Z > −1.4) = Φ(1.4) = 0.9192
P(34 < X < 47) = Φ(1.4) + Φ(1.2) − 1 = 0.8041
```

**Inverse.** X ~ N(80, 12²). Find k with P(X > k) = 0.25.

```
P(X < k) = 0.75, so z = 0.6745
k = 80 + 0.6745 × 12 = 88.094 = 88.1
```

**Two unknowns.** X ~ N(μ, σ²), P(X < 20) = 0.30, P(X < 35) = 0.90.

```
P(X < 20) = 0.30: z = −0.5244, so μ − 0.5244σ = 20
P(X < 35) = 0.90: z = 1.2816,  so μ + 1.2816σ = 35
1.806σ = 15, so σ = 8.31 (3 s.f.)
μ = 35 − 1.2816 × 8.3056... = 24.4 (3 s.f.)
```

**One unknown, σ.** T ~ N(60, σ²) and P(T < 52) = 0.0668. Data: Φ(1.5) = 0.9332.

```
0.0668 = 1 − 0.9332, so the z-value is −1.5
(52 − 60)/σ = −1.5
σ = 16/3 = 5.33 (3 s.f.)
```

**One unknown, μ.** Y ~ N(μ, 6²) and P(Y > 50) = 0.0228. Data: Φ(2) = 0.9772.

```
P(Y < 50) = 0.9772, so (50 − μ)/6 = 2
μ = 38
```

**Expected number.** In a batch of 500 items with M ~ N(310, 20²), P(M > 340) = 1 − Φ(1.5) = 0.0668. Expected number = 500 × 0.0668 = 33.4, so about 33.

**Symmetry with one more fact.** P(X < 18) = P(X > 30) = 0.0668 gives μ = 24. With Φ(1.5) = 0.9332 the z-value for 18 is −1.5, so (18 − 24)/σ = −1.5 and σ = 4.

## Sketch checklist

A sketch takes ten seconds and catches most sign errors. Before you read the table, check three things:

- The shaded region is on the correct side of μ, and the probability you expect is more or less than 0.5.
- Every z you carry forward has the sign that matches whether the x value is below or above μ.
- The final answer sits on the same side of μ as the tail you shaded. A value for "the top 10%" must be above the mean.

For a two-sided interval symmetrical about the mean, such as P(μ − a < X < μ + a), the answer is 2Φ(a/σ) − 1. Run it in reverse for an unknown a: if the probability is 0.90, then Φ(a/σ) = 0.95, and a/σ = 1.6449.

## Wording that points to each skill

| The question says | The skill |
|---|---|
| "Find P(X > 35)" | Standardise, then use 1 − Φ |
| "The top 5% of values exceed k" | Inverse, with Φ(z) = 0.95 |
| "Show that σ = 4" | Standardise with a known z and show each line |
| "Find the values of μ and σ" | Two equations, solved simultaneously |
| "Estimate how many in a sample of 400" | Probability multiplied by the size |
| "Sketch the distribution" | Bell shape, label μ and the axis, symmetrical |

## Must-know distinctions

- Variance and standard deviation: N(μ, σ²) holds the variance, but you divide by σ.
- P(Z > z) and Φ(z): they add to 1.
- Forward and inverse: forward gives a probability from a value, inverse gives a value from a probability.
- One unknown and two unknowns: one statement gives one equation, two unknowns need two statements.
- Positive and negative z: the value is below the mean exactly when z is negative.

## Quick self-test

Use these values where you need them: Φ(0.5) = 0.6915, Φ(0.8) = 0.7881, Φ(1) = 0.8413, Φ(2) = 0.9772, and Φ(z) = 0.95 gives z = 1.6449.

1. State the standard deviation of X ~ N(7, 16).
2. State the value of P(X > μ) for any Normal X.
3. Z ~ N(0, 1). Write P(Z < −0.5) using Φ, then evaluate it.
4. X ~ N(50, 10²). Find P(X < 60).
5. X ~ N(50, 10²). Find P(X > 42).
6. X ~ N(100, 5²). Find P(95 < X < 105).
7. X ~ N(30, 4²). Find k such that P(X < k) = 0.95.
8. P(X < 14) = P(X > 26) for a Normal X. State μ.
9. X ~ N(μ, 3²) and P(X < 20) = 0.8413. Find μ.
10. X ~ N(45, σ²) and P(X > 53) = 0.0228. Find σ.

### Answers

1. 4, the square root of 16.
2. 0.5, by symmetry about the mean.
3. P(Z < −0.5) = 1 − Φ(0.5) = 1 − 0.6915 = 0.3085.
4. z = 1, so Φ(1) = 0.8413.
5. z = −0.8, so P = Φ(0.8) = 0.7881.
6. z = ±1, so 2Φ(1) − 1 = 0.6826.
7. z = 1.6449, so k = 30 + 1.6449 × 4 = 36.5796, which is 36.6 (3 s.f.).
8. μ = (14 + 26)/2 = 20.
9. Φ(z) = 0.8413 gives z = 1, so (20 − μ)/3 = 1 and μ = 17.
10. P(X < 53) = 0.9772, so z = 2. (53 − 45)/σ = 2 gives σ = 4.

## Setting out a full answer

Examiner advice on layout is the same for every Normal question, and following it also protects you from slips:

1. Name the variable and its distribution at the top, such as "X ~ N(40, 5²)", and say clearly which number is σ.
2. Write the probability statement in symbols, for example P(34 < X < 47).
3. Show the standardised values before you read any table.
4. Show the Φ expression with its subtractions, then the number.
5. Finish with a sentence in context, such as "the probability that a mango weighs less than 325 g is 0.773", and the units where there are any.

For inverse and parameter questions, write the z-value as a labelled line (for example "z = 1.2816") before forming the equation. When two statements are used, label the equations (1) and (2) so that subtracting them is easy to follow.

## Revision plan

- Day 1: forward probabilities in all six table cases, using sketches.
- Day 2: inverse questions, both tails, giving x to 3 significant figures.
- Day 3: one-unknown questions for μ and for σ.
- Day 4: two-unknown simultaneous questions and the symmetry shortcut.
- Day 5: a mixed set, then the [practice questions](/resources/edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and-practice/) under timed conditions.

## Where marks are usually lost

- Dividing by the variance instead of the standard deviation.
- Leaving a negative z unconverted, or reading a table entry that does not match the question.
- Reporting P(X > a) as Φ(z) with no subtraction from 1.
- Using the wrong tail in an inverse question, so the answer lies on the wrong side of μ.
- Forgetting the minus sign on z when the probability given is below 0.5.
- Rounding z or σ early in a simultaneous-equation question, which shifts the final answers.
- Skipping the standardising line. Showing (x − μ)/σ makes your method visible even when a later table read-off slips.
- Giving a probability with too few figures. Unless the question says otherwise, 3 significant figures is a safe default, and table-based answers are usually quoted to 4 decimal places.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics -- Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited.
