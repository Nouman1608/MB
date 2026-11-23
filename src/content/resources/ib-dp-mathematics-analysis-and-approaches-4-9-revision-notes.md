---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.9 The normal distribution -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.9
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-9"
description: "Revision notes for IB Maths AA 4.9: normal curve properties, the 68-95-99.7 rule, symmetry, normal and inverse normal calculations, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.9** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): the normal distribution, its properties, and normal and inverse normal
calculations. Worked examples are in the
[4.9 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-9/).

## Core recall

```
X ~ N(μ, σ²)       second parameter = VARIANCE; σ = its square root
mean = median = mode = μ;   total area = 1;   symmetric about μ
P(μ − σ < X < μ + σ)   ≈ 0.68
P(μ − 2σ < X < μ + 2σ) ≈ 0.95
P(μ − 3σ < X < μ + 3σ) ≈ 0.997
P(X = a) = 0, so P(X < a) = P(X ≤ a)
```

- A continuous model; many natural measurements are approximately normal.
- Larger σ: lower, wider curve. Changing μ slides the curve without changing its shape.
- Always sketch: mark μ, mark the values, shade the region.

## Symmetry rules (no calculator)

| Known | Deduce |
|---|---|
| P(X < μ − d) = a | P(X > μ + d) = a |
| P(X < μ − d) = a | P(μ − d < X < μ + d) = 1 − 2a |
| P(μ − d < X < μ + d) = b | P(μ < X < μ + d) = b/2 |
| Any value of μ | P(X < μ) = P(X > μ) = 0.5 |

## GDC calculations

| Task | GDC function | Input |
|---|---|---|
| P(a < X < b) | Normal cdf | lower a, upper b, μ, σ |
| P(X > a) | Normal cdf | lower a, upper a very large number |
| k with P(X < k) = p | Inverse normal | area p (to the left), μ, σ |
| k with P(X > k) = p | Inverse normal | area 1 − p |
| Middle proportion c | Inverse normal twice | areas (1 − c)/2 and (1 + c)/2 |

Finding an unknown μ or σ needs standardisation (section 4.12), not 4.9.

## Combining with other topics

- Expected number in a sample of n: n × P(event).
- Binomial: p = a normal probability; then Y ~ B(n, p). Keep p unrounded.
- Conditional: P(X > a | X > b) = P(X > a)/P(X > b) when a > b.

## Key terms

| Term | Meaning |
|---|---|
| Normal distribution | Continuous, symmetric, bell-shaped distribution N(μ, σ²) |
| μ | Mean; the line of symmetry |
| σ | Standard deviation; distance from μ to each point of inflection of the curve |
| Normal cdf | Area under the curve between two values |
| Inverse normal | The value with a given area to its left |

## Exam traps

- Variance entered instead of standard deviation.
- Inverse normal used with a right-hand area.
- A threshold for the "top 5%" that comes out below the mean: the area was entered wrongly.
- Rule-of-thumb percentages given when an exact GDC value is required.
- Probability statements missing before GDC values.
- A rounded normal probability carried into a binomial calculation.

## Worked reminders

**Probability.** For X ~ N(12.4, 1.8²), P(X > 15) = 0.0743, so about 300 × 0.0743 ≈ 22.3 of 300 seedlings
are expected to be taller than 15 cm.

**Upper tail inverse.** For the tallest 5%: P(X > k) = 0.05, so enter area 0.95; k ≈ 15.4 cm, above the mean
as the sketch requires.

**Symmetric interval.** The middle 90% runs from the value with area 0.05 to the value with area 0.95:
9.44 cm to 15.4 cm, equally spaced either side of 12.4.

**Equal tails (Paper 1).** If P(X < 20) = P(X > 28), the mean is halfway: μ = 24.

## Method checklist

- Sketch first: μ, values, shading.
- Write the probability statement before the GDC value.
- Enter σ, not σ².
- Convert every inverse question to "area to the left".
- Keep unrounded probabilities for later parts.

## Self-test

1. X ~ N(30, 9). Write down the standard deviation.
2. State the mean, median and mode of N(30, 9).
3. X ~ N(80, σ²) and P(X > 92) = 0.15. Find P(X < 68).
4. Using question 3, find P(68 < X < 92).
5. X ~ N(70, 5²). Use the 68-95-99.7 rule to estimate P(65 < X < 75).
6. Using question 5, estimate P(X > 80).
7. Explain why P(X ≤ 40) = P(X < 40) for a normal variable.
8. X ~ N(64, 9²). Find P(55 < X < 73) and explain the value.
9. For X ~ N(64, 9²), find k such that P(X > k) = 0.12.
10. What area do you enter in inverse normal to find the lower limit of the middle 80%?
11. X ~ N(500, 6²) and P(X < 490) = 0.0478. Find the expected number below 490 in 1000 items.
12. In question 11, why must you not round 0.0478 further before using it as p in a binomial model?

### Answers

1. σ = 3.
2. All equal 30.
3. 68 and 92 are each 12 from 80, so P(X < 68) = 0.15.
4. 1 − 0.15 − 0.15 = 0.7.
5. About 0.68.
6. 80 is 2σ above the mean: about (1 − 0.95)/2 = 0.025.
7. X is continuous, so P(X = 40) = 0.
8. 0.683 (3 s.f.): 55 and 73 are exactly μ ± σ.
9. P(X < k) = 0.88, so k ≈ 74.6.
10. 0.1 (the upper limit uses 0.9).
11. 1000 × 0.0478 ≈ 47.8.
12. Rounding p changes the binomial probabilities; keep the GDC's full value.

## Frequently asked questions

**Does N(50, 16) have standard deviation 16?**
No. The second parameter is the variance, so σ = 4.

**Can I find an unknown mean or standard deviation in 4.9?**
No. That uses standardisation (z-values), which is section 4.12.

## Where to go next

Practise with the [4.9 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-9-practice/),
then the [4.12 standardization revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-12-revision-notes/).
