---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.14 Variance of discrete and continuous random variables (HL) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.95
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-14"
description: "HL revision notes on IB DP Maths AA section 4.14: variance, pdfs, mode, median, linear transformations, key terms, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 4.14, variance of discrete and continuous random variables**, in
IB DP Mathematics: Analysis and Approaches (first assessment 2021). This is AHL content, examined at
HL only. The
[4.14 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14/)
works through polynomial and piecewise pdfs in full; the
[4.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14-practice/)
test every skill below. The SL distribution work this builds on is in the
[probability and distributions revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/).

## Formula sheet

| | Discrete X | Continuous X with pdf f |
|---|---|---|
| Total probability | Σ P(X = x) = 1 | ∫ f(x) dx = 1, with f(x) ≥ 0 |
| Probability of an interval | add the relevant P(X = x) | P(a < X < b) = ∫ₐᵇ f(x) dx |
| E(X) | Σ x P(X = x) | ∫ x f(x) dx |
| E(X²) | Σ x² P(X = x) | ∫ x² f(x) dx |
| Var(X) | E(X²) − [E(X)]² | E(X²) − [E(X)]² |
| Mode | value with the largest probability | value where f(x) is greatest |
| Median | (4.14 names the median for continuous variables only) | m with ∫ f(x) dx up to m = 1/2 |

Linear transformations, for both types:

```
E(aX + b) = aE(X) + b
Var(aX + b) = a² Var(X)
```

## Condensed recall

- **Variance is never negative.** It is an average of squared distances. A negative answer means an
  arithmetic error, most often forgetting to square E(X).
- **Two variance routes.** E((X − μ)²) is the definition; E(X²) − μ² is usually quicker. Use one to
  check the other when time allows.
- **Single values in a continuous distribution.** P(X = a) = 0, so strict and non-strict
  inequalities give the same probability.
- **Density is not probability.** f(x) can be greater than 1; only areas are probabilities.
- **Finding k.** Set the total integral equal to 1. For a piecewise pdf, add the integrals of the
  pieces.
- **Mode.** Look at the shape of f first. If f is increasing or decreasing throughout, the mode is an
  endpoint. Otherwise solve f′(x) = 0 and confirm it is a maximum.
- **Median.** For a piecewise pdf, first find the cumulative area up to each join to see which piece
  contains m. Reject roots outside that piece's interval.
- **Skew and order.** For a single-peaked pdf with a long right tail, typically mode < median < mean;
  for a long left tail the order reverses; for a symmetric pdf all three coincide at the centre of
  symmetry.
- **Transformations.** Adding a constant shifts the mean only; multiplying by a scales the mean by a,
  the standard deviation by |a| and the variance by a².

## Key terms

| Term | Meaning |
|---|---|
| Random variable | A quantity whose value is determined by the outcome of a random process |
| Probability density function | A function f ≥ 0, with total area 1, whose integrals give probabilities |
| Piecewise pdf | A pdf defined by different expressions on different intervals |
| Expected value E(X) | The long-run mean of X |
| Variance Var(X) | The expected squared deviation from the mean, E((X − μ)²) |
| Standard deviation | √Var(X), measured in the units of X |
| Mode (continuous) | The value of x at which the pdf takes its maximum |
| Median (continuous) | The value that splits the area under the pdf into two halves |

## Mini-examples

**Discrete.** P(X = x) = x/10 for x = 1, 2, 3, 4.

```
E(X)  = (1 + 4 + 9 + 16)/10 = 3
E(X²) = (1 + 8 + 27 + 64)/10 = 10
Var(X) = 10 − 9 = 1
```

**Continuous.** f(x) = kx(3 − x) for 0 ≤ x ≤ 3.

```
k ∫₀³ (3x − x²) dx = k(27/2 − 9) = 9k/2 = 1  →  k = 2/9
f is symmetric about x = 1.5, so mean = median = mode = 1.5
E(X²) = (2/9) ∫₀³ (3x³ − x⁴) dx = (2/9)(243/4 − 243/5) = 27/10
Var(X) = 27/10 − 9/4 = 9/20
```

## Exam traps

- **Trap: E(X²) is not [E(X)]².** They are different quantities; their difference is the variance.
- **Trap: integration limits.** Integrate only over the interval where f is non-zero, or over each
  piece separately.
- **Trap: the mode at an endpoint.** f′(x) = 0 may have no solution in the domain.
- **Trap: the median root.** Solving a cubic or quadratic often gives roots outside the domain.
- **Trap: transformations and constants.** Var(3X + 7) = 9Var(X); the 7 disappears.
- **Trap: standard deviation of aX with negative a.** SD(−2X) = 2SD(X), not −2SD(X).

## Self-test

1. State the formula for Var(X) in terms of E(X²) and E(X).
2. E(X) = 4 and E(X²) = 19. Find Var(X) and SD(X).
3. Var(X) = 5. Find Var(3X − 2).
4. E(X) = 6. Find E(10 − 2X).
5. What two conditions must a function satisfy to be a pdf?
6. f(x) = k for 2 ≤ x ≤ 6. Find k.
7. For the pdf in question 6, write down E(X) and the median.
8. Why is P(X = 3) = 0 for a continuous random variable?
9. f(x) = 2x for 0 ≤ x ≤ 1. Find the mode.
10. For the pdf in question 9, find the median.
11. For the pdf in question 9, find E(X).
12. f(x) = x/8 for 0 ≤ x ≤ 4. Find P(1 < X < 3).

**Answers**

1. Var(X) = E(X²) − [E(X)]².
2. Var(X) = 19 − 16 = 3; SD(X) = √3 ≈ 1.73.
3. 3² × 5 = 45.
4. 10 − 2(6) = −2.
5. f(x) ≥ 0 for all x, and the total integral of f over its domain is 1.
6. 4k = 1, so k = 1/4.
7. E(X) = 4 and median = 4, by symmetry.
8. The probability is the area under f between two values, and the area over a single point is zero.
9. f is increasing on [0, 1], so the mode is 1.
10. ∫₀ᵐ 2x dx = m² = 1/2, so m = 1/√2 ≈ 0.707.
11. ∫₀¹ 2x² dx = 2/3.
12. [x²/16] from 1 to 3 = 9/16 − 1/16 = 1/2.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section AHL 4.14: variance of discrete random variables; continuous
random variables and pdfs; mode and median; mean, variance and standard deviation; linear
transformations of X.
