---
title: "OxfordAQA International AS and A-level Mathematics: The normal distribution and sums of normal variables (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Normal Distribution Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on the normal distribution for OxfordAQA International A-level Mathematics S2.4, with methods, a self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense section S2.4 (Normal distribution) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit S2 (Statistics); it is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables/) first.

When you have revised, try the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-normal-distribution-and-sums-of-normal-variables-practice/). Tick off the topics on the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), see the [course hub](/boards/oxfordaqa/a-level/mathematics/), and use the [free 10-minute diagnostics](/diagnostics/) to check what you remember.

## Key facts

| Item | Statement |
|---|---|
| Notation | X ~ N(μ, σ²). The second parameter is the variance |
| Shape | Bell-shaped, symmetric about x = μ, total area 1 |
| Centre | Mean, median and mode all equal μ |
| Within μ ± σ | about 2/3 (0.6827) |
| Within μ ± 2σ | about 0.95 (0.9545) |
| Within μ ± 3σ | about 0.997 (0.9973) |
| Standardising | Z = (X − μ)/σ, with Z ~ N(0, 1) |
| Cumulative probability | Φ(z) = P(Z ≤ z) |
| Negative z | Φ(−z) = 1 − Φ(z) |
| Sum | X + Y ~ N(μ₁ + μ₂, σ₁² + σ₂²) for independent X, Y |
| Difference | X − Y ~ N(μ₁ − μ₂, σ₁² + σ₂²) |
| Combination | aX + bY ~ N(aμ₁ + bμ₂, a²σ₁² + b²σ₂²) |

The sum and difference results are needed as results; proofs are not expected.

## Method boxes

**Finding a probability**

1. Sketch the curve, mark μ and shade the required area.
2. Standardise each end point: z = (x − μ)/σ. Round to 2 d.p.
3. Convert to Φ values. Upper tail: 1 − Φ(z). Negative z: 1 − Φ(|z|). Between two values: subtract.
4. Check the answer against the sketch. A small shaded area needs a small answer.

**Finding an unknown mean or standard deviation**

1. Write the given probability as P(X < x) = p, converting an upper tail by 1 − p.
2. Use the table of percentage points to find z for p. If p < 0.5, z is negative.
3. Write (x − μ)/σ = z.
4. With two unknowns, write two equations and solve them simultaneously.

**Sums and differences**

1. Check the variables are independent, and note the context.
2. Find the new mean from the means with the coefficients and signs given.
3. Find the new variance by adding a² × variance for every term. Never subtract.
4. Standardise using the new standard deviation (square root of the new variance).

## Percentage points used in these notes

| P(Z < z) | 0.75 | 0.80 | 0.90 | 0.95 | 0.975 | 0.99 |
|---|---|---|---|---|---|---|
| z | 0.6745 | 0.8416 | 1.2816 | 1.6449 | 1.9600 | 2.3263 |

These are supplied as data so you can follow the arithmetic. In a question, use the values you are given or look up.

## Worked reminders

**Both parameters unknown.** X ~ N(μ, σ²) with P(X < 10) = 0.05 and P(X > 22) = 0.20.

```
(10 − μ)/σ = −1.6449     →  μ − 1.6449σ = 10
(22 − μ)/σ =  0.8416     →  μ + 0.8416σ = 22
Subtract: 2.4865σ = 12, so σ = 4.83 (3 s.f.)
μ = 10 + 1.6449 × 4.8261 = 17.9 (3 s.f.)
```

**A linear combination.** X ~ N(5, 1²) and Y ~ N(8, 2²) are independent. Find P(2X + Y > 21).

```
2X + Y ~ N(2 × 5 + 8, 2² × 1² + 2²) = N(18, 8)
z = (21 − 18)/√8 = 1.06 (2 d.p.)
P(2X + Y > 21) = 1 − Φ(1.06) = 1 − 0.8554 = 0.1446
```

**A probability between two values.** The delay in a train departure is D ~ N(72, 6²) seconds. Find P(65 < D < 80).

```
z for 65: (65 − 72)/6 = −1.17 (2 d.p.)
z for 80: (80 − 72)/6 =  1.33 (2 d.p.)
P = Φ(1.33) − Φ(−1.17)
  = Φ(1.33) − (1 − Φ(1.17))
  = 0.9082 − (1 − 0.8790) = 0.7872
```

**Independent copies.** Four independent lengths, each N(2.5, 0.3²) metres, are laid end to end. Find the probability that the total is under 9.6 metres.

```
Total ~ N(4 × 2.5, 4 × 0.3²) = N(10, 0.36)
sd = 0.6
z = (9.6 − 10)/0.6 = −0.67 (2 d.p.)
P = 1 − Φ(0.67) = 1 − 0.7486 = 0.2514
```

**A difference in context.** A shelf gap is G ~ N(30.5, 0.6²) cm and a book is B ~ N(29.8, 0.5²) cm, independent. The book fits when G − B > 0.

```
G − B ~ N(0.7, 0.36 + 0.25) = N(0.7, 0.61)
sd = √0.61 = 0.7810
z = (0 − 0.7)/0.7810 = −0.90 (2 d.p.)
P(G − B > 0) = Φ(0.90) = 0.8159
```

## Symmetry shortcuts

These save time and reduce lookup errors, so check whether one applies before you start a calculation.

- P(Z > z) = P(Z < −z), so only positive z needs the table.
- P(−z < Z < z) = 2Φ(z) − 1. For z = 1.5 this is 2 × 0.9332 − 1 = 0.8664.
- If P(X < a) = p, then P(X > 2μ − a) = p too. The point reflected in the mean has the same tail.
- Percentage points for p < 0.5 are the negatives of those for 1 − p. For example, the point for 0.10 is −1.2816.

## Wording clues

| Phrase in the question | What to do |
|---|---|
| "Independent" stated in the question | A sum or difference result may be used |
| "Total mass of five packets" | Sum of five independent copies. Mean 5μ, variance 5σ² |
| "Five times the mass of one packet" | 5X. Mean 5μ, variance 25σ² |
| "How much longer than" or "heavier than" | Look at X − Y and compare it with 0 or with the stated amount |
| "Lowest mark for the top 10%" | Percentage point for 0.90, then x = μ + zσ |
| "The middle 95%" | 2.5% in each tail. Use the percentage point for 0.975 |
| "Within 1.5 standard deviations of the mean" | Use P(−1.5 < Z < 1.5) = 2Φ(1.5) − 1 |

## Must-know distinctions

| Compare | Key difference |
|---|---|
| X ~ N(μ, σ²) and Z ~ N(0, 1) | Z has mean 0 and standard deviation 1. Convert with Z = (X − μ)/σ |
| X − Y and X + Y | Means subtract, but variances add in both |
| X₁ + X₂ + X₃ and 3X | Same mean. Variances are 3σ² and 9σ² |
| P(Z < −z) and P(Z < z) | Sum to 1, by symmetry |
| "Variance 16" and "standard deviation 16" | N(μ, 16) has σ = 4. N(μ, 16²) has σ = 16 |

## Quick self-test

Let Y ~ N(35, 4²) for questions 1 to 5. Table values: Φ(1.5) = 0.9332 and Φ(1.75) = 0.9599.

1. For X ~ N(200, 16²), roughly what proportion of values lie between 184 and 216?
2. Find P(Y < 41).
3. Find P(Y > 29).
4. Find P(31 < Y < 42).
5. Find a such that P(Y < a) = 0.95.
6. W ~ N(μ, 2.5²) and P(W > 30) = 0.10. Find μ.
7. V ~ N(50, σ²) and P(V < 44) = 0.20. Find σ.
8. A ~ N(10, 3²) and B ~ N(6, 4²) are independent. State the distribution of A + B.
9. For the same A and B, find P(A − B > 0).
10. Compare the variance of 4A with the variance of A₁ + A₂ + A₃ + A₄, where the copies are independent.

### Answers

1. 184 to 216 is μ ± σ, so about 2/3.
2. z = (41 − 35)/4 = 1.5, so P = Φ(1.5) = 0.9332.
3. z = (29 − 35)/4 = −1.5. P(Y > 29) = P(Z > −1.5) = Φ(1.5) = 0.9332.
4. z = −1.00 and z = 1.75. P = Φ(1.75) − (1 − Φ(1.00)) = 0.9599 − 0.1587 = 0.8012.
5. a = 35 + 1.6449 × 4 = 41.6 (3 s.f.).
6. P(W < 30) = 0.90, so (30 − μ)/2.5 = 1.2816. μ = 30 − 3.204 = 26.8 (3 s.f.).
7. (44 − 50)/σ = −0.8416, so σ = 6/0.8416 = 7.13 (3 s.f.).
8. A + B ~ N(16, 3² + 4²) = N(16, 25).
9. A − B ~ N(4, 25), so sd = 5. z = (0 − 4)/5 = −0.8. P = Φ(0.8) = 0.7881.
10. Var(4A) = 16 × 9 = 144. Var of the sum = 4 × 9 = 36. The first is four times the second.

## Where marks are usually lost

- Writing N(35, 4) when the standard deviation is 4. The second number must be 16.
- Treating the variance as the standard deviation when standardising, or the reverse.
- Reading Φ(z) for an upper-tail question and forgetting 1 − Φ(z).
- Using a negative z in a table that has only positive values, with no symmetry step.
- Subtracting variances for a difference of two variables.
- Using 4A when the context has four independent observations, or the reverse.
- Giving the wrong sign to z when the unknown probability is below 0.5.
- Rounding z to one decimal place, or rounding too early in the middle of the working.
- Giving no sketch and no clear line showing which probability is being found.
- Omitting the statement that the variables are independent, where a sum or difference is being used.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S2.4: Normal distribution, published by OxfordAQA.
