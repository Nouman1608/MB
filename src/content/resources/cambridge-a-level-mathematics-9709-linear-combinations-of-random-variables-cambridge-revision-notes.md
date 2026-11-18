---
title: "Cambridge A Level Mathematics (9709): Linear combinations of random variables -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "linear-combinations-of-random-variables-cambridge"
description: "Condensed 9709 Paper 6 notes on 6.2: the six results, sums versus multiples, differences, normal and Poisson combinations, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 6.2 of Cambridge 9709 Paper 6. The [linear combinations study guide](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge/) explains each result with worked examples; the [linear combinations practice questions](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge-practice/) test them in context.

## The six results

```
E(aX + b)   = aE(X) + b
Var(aX + b) = a² Var(X)
E(aX + bY)  = aE(X) + bE(Y)
Var(aX + bY) = a² Var(X) + b² Var(Y)          X, Y independent
X normal  ⇒  aX + b normal
X, Y independent normal  ⇒  aX + bY normal
X ~ Po(λ), Y ~ Po(μ) independent  ⇒  X + Y ~ Po(λ + μ)
```

Proofs are not required. The expectation results hold for any random variables; the variance result for aX + bY needs independence.

## Sum of n values versus a multiple

| Context | Combination | Mean | Variance |
|---|---|---|---|
| total of n independent items | X₁ + … + Xₙ | nμ | nσ² |
| one item scaled by n | nX | nμ | n²σ² |
| difference of two items | X − Y | μ_X − μ_Y | σ_X² + σ_Y² |
| one item compared with twice another | L − 2S | μ_L − 2μ_S | σ_L² + 4σ_S² |
| one item compared with two others | L − S₁ − S₂ | μ_L − 2μ_S | σ_L² + 2σ_S² |

## Comparison recipe

1. Translate the words into an inequality, such as "A weighs more than B and C together": A > B + C.
2. Move everything to one side: A − B − C > 0.
3. Find the mean and variance of the combination.
4. If every variable is normal and they are independent, the combination is normal: standardise and use tables.

## Poisson combinations

- **Sum:** X + Y ~ Po(λ + μ). Use for totals from independent sources.
- **Longer interval:** a rate of λ per day gives Po(nλ) over n days (the sum of n independent days).
- **Not Poisson:** X − Y (can be negative) and 2X (mean 2λ, variance 4λ).

## Worked mini-examples

**Scaling.** X has mean 40 and standard deviation 6. For Y = 0.5X + 10: E(Y) = 30 and SD(Y) = 3, so Var(Y) = 9.

**Total of identical items.** Each of 8 independent parcels has mass N(2.5, 0.04) in kg. The total is N(20, 0.32): mean 8 × 2.5 and variance 8 × 0.04.

**Difference.** A ~ N(30, 4) and B ~ N(27, 5). P(A > B) = P(A − B > 0) with A − B ~ N(3, 9): z = −1, so P = Φ(1) = 0.841.

**Poisson sum over time.** Calls at 1.2 per hour on line A and 0.8 per hour on line B give Po(2) per hour in total, and Po(6) over 3 hours.

## Setting up the combination

| Words in the question | Combination |
|---|---|
| total mass of n items | X₁ + X₂ + … + Xₙ |
| mass in grams of an item weighed in kg | 1000X |
| A is heavier than B | A − B > 0 |
| A is more than three times B | A − 3B > 0 |
| A is more than three Bs together | A − B₁ − B₂ − B₃ > 0 |
| difference between A and B is less than 2 | −2 < A − B < 2 |

## Key terms

| Term | Meaning |
|---|---|
| Linear combination | aX + bY + c for constants a, b, c |
| Independent | the value of one variable does not affect the other |
| Total | sum of separate independent observations |
| Multiple | one observation multiplied by a constant |
| Difference | X − Y, used to compare two quantities |

## Exam traps

- **Var(X − Y) = Var(X) − Var(Y).** Wrong: variances always add.
- **Total of 5 items as 5X.** Gives 25σ² instead of 5σ².
- **Coefficient not squared.** Var(4X) = 16Var(X).
- **Constant in the variance.** Var(X + 7) = Var(X).
- **Variance in the standardisation.** Divide by the standard deviation.
- **Poisson for 2X or X − Y.** Only sums of independent Poisson variables are Poisson.
- **Independence not stated.** If a question asks for an assumption, independence in context is usually the one.
- **Units mixed.** Convert all masses or times to the same unit before combining.

## Self-test

1. E(X) = 12 and Var(X) = 4. Find E(3X − 5) and Var(3X − 5).
2. X has standard deviation 2.5. Find the standard deviation of −2X + 9.
3. Independent X and Y have variances 6 and 3. Find Var(X − Y).
4. Independent X and Y have variances 6 and 3. Find Var(2X − 3Y).
5. X ~ N(10, 4). State the distribution of 5X − 20.
6. X₁, …, X₄ are independent, each N(25, 9). State the distribution of their total.
7. In question 6, state the distribution of 4X₁.
8. X ~ Po(2) and Y ~ Po(3) are independent. State the distribution of X + Y.
9. In question 8, find P(X + Y = 0).
10. Why is X − Y in question 8 not Poisson?
11. L ~ N(100, 9) and S ~ N(48, 4) are independent. State the distribution of L − 2S.
12. In question 11, find P(L > 2S).

### Answers

1. E = **31**; Var = 9 × 4 = **36**.
2. |−2| × 2.5 = **5**.
3. 6 + 3 = **9**.
4. 4 × 6 + 9 × 3 = **51**.
5. Mean 30, variance 25 × 4 = 100: **N(30, 100)**.
6. **N(100, 36)**.
7. **N(100, 144)**.
8. **Po(5)**.
9. e^(−5) = **0.00674** (3 s.f.).
10. It **can take negative values**, which a Poisson variable cannot.
11. Mean 100 − 96 = 4; variance 9 + 4 × 4 = 25: **N(4, 25)**.
12. P(L − 2S > 0) = P(Z > −0.8) = Φ(0.8) = **0.788**.
