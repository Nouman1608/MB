---
title: "Cambridge A Level Mathematics (9709): The Poisson distribution -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "the-poisson-distribution-cambridge-alevel-maths"
description: "Condensed 9709 Paper 6 notes on 6.1: the Poisson formula, mean equals variance, model conditions, both approximations, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 6.1 of Cambridge 9709 Paper 6. The [Poisson distribution study guide](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths/) explains each idea with worked examples; the [Poisson distribution practice questions](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths-practice/) give exam-style problems with mark schemes.

## Formula sheet

```
X ~ Po(λ)            P(X = r) = e^(−λ) λʳ / r!,   r = 0, 1, 2, …
Mean and variance    E(X) = Var(X) = λ,   standard deviation √λ
Rescaling            mean for an interval k times as long = kλ
At least r           P(X ≥ r) = 1 − P(X ≤ r − 1)
```

Proofs of the mean and variance are not required.

## Conditions for a Poisson model

Events occur:

- **randomly**;
- **independently** of each other;
- **singly** (not in groups or at the same instant);
- at a **constant mean rate** over the interval.

Write them in context: "faults occur independently along the length of the cable".

Evidence from data: sample mean ≈ sample variance supports a Poisson model; variance much larger than the mean suggests events cluster.

## Approximations

| From | To | Condition (approximate) | Continuity correction? |
|---|---|---|---|
| B(n, p) | Po(np) | n > 50 and np < 5 | no (both discrete) |
| Po(λ) | N(λ, λ) | λ > 15 | yes |
| B(n, p) | N(np, npq) | np > 5 and nq > 5 (Paper 5) | yes |

Continuity correction for Po(λ) → N(λ, λ):

| Poisson statement | Normal statement |
|---|---|
| X ≤ r | Y < r + 0.5 |
| X < r (so X ≤ r − 1) | Y < r − 0.5 |
| X ≥ r | Y > r − 0.5 |
| X > r (so X ≥ r + 1) | Y > r + 0.5 |
| X = r | r − 0.5 < Y < r + 0.5 |

## Reverse problems

- P(X = 0) = c gives λ = −ln c.
- P(X = r) = P(X = r + 1) gives λ = r + 1.
- Standard deviation s gives λ = s².
- "Least time for P(no events) < c": e^(−kt) < c, so t > −ln c ÷ k, where k is the rate per unit time.

## Worked mini-examples

**Rescale, then calculate.** Faults occur at 0.6 per metre of cable. In 5 m the mean is 3, so P(no faults in 5 m) = e^(−3) = 0.0498.

**At least, via the complement.** X ~ Po(2.2): P(X ≥ 2) = 1 − e^(−2.2)(1 + 2.2) = 1 − 0.3546 = 0.645.

**Poisson approximation.** B(120, 0.025) has n = 120 > 50 and np = 3 < 5, so use Po(3): P(X = 1) ≈ 3e^(−3) = 0.149.

**Normal approximation.** X ~ Po(36): P(X > 40) ≈ P(Y > 40.5) with Y ~ N(36, 36); z = 4.5/6 = 0.75, so 1 − Φ(0.75) = 0.227.

## Which approximation?

Ask two questions in order. Is the variable binomial with large n and small np? Use Poisson. Is it Poisson (given or after approximation) with λ > 15? Use the normal with a continuity correction. If neither condition holds, calculate exactly.

## Quick recall of P(X ≤ 2)

P(X ≤ 2) = e^(−λ)(1 + λ + λ²/2) and P(X ≤ 3) = e^(−λ)(1 + λ + λ²/2 + λ³/6). Writing the bracket first, then multiplying by e^(−λ) once, avoids rounding each term separately.

## Key terms

| Term | Meaning |
|---|---|
| Rate | mean number of events per unit of time or space |
| Interval | the fixed period or region in which events are counted |
| Random event | an event whose timing cannot be predicted individually |
| Approximation | a simpler distribution used when its conditions make it accurate |
| Continuity correction | ± 0.5 adjustment when a discrete distribution is replaced by a continuous one |

## Exam traps

- **λ not rescaled.** A rate of 4 per hour gives a mean of 2 for 30 minutes.
- **σ = λ.** For N(λ, λ), the standard deviation is √λ.
- **Continuity correction in the wrong place.** None for binomial → Poisson; always for Poisson → normal.
- **Conditions without numbers.** Write "n = 400 > 50 and np = 2 < 5".
- **Missing r = 0 term.** P(X ≤ 2) = e^(−λ)(1 + λ + λ²/2).
- **"More than" and "at least" confused.** "More than 3" is X ≥ 4.
- **Generic conditions.** "Events are independent" with no context may not score.
- **Over-rounding e^(−λ).** Keep at least 4 significant figures.

## Self-test

1. X ~ Po(3). Find P(X = 0).
2. X ~ Po(2). Find P(X = 2).
3. X ~ Po(5). Find P(X ≤ 1).
4. Events occur at a mean rate of 2 per hour. State the distribution of the number in 90 minutes.
5. X ~ Po(λ) has standard deviation 3. Find λ.
6. Can B(80, 0.04) be approximated by a Poisson distribution? If so, state it.
7. Is the Poisson approximation to B(40, 0.1) justified by the syllabus conditions?
8. State the normal approximation to Po(20).
9. X ~ Po(20). Write P(X ≤ 18) as an approximate normal probability.
10. A sample has mean 4.2 and variance 9.8. Comment on a Poisson model.
11. Explain why the number of passengers boarding a bus at a stop may not follow a Poisson distribution.
12. X ~ Po(1). Find P(X ≥ 1).

### Answers

1. e^(−3) = **0.0498**.
2. e^(−2) × 4/2 = **0.271**.
3. e^(−5)(1 + 5) = **0.0404**.
4. **Po(3)**.
5. λ = 3² = **9**.
6. **Yes**: n = 80 > 50 and np = 3.2 < 5, so **Po(3.2)**.
7. **No**: n = 40 is not greater than 50.
8. **N(20, 20)**.
9. **P(Y < 18.5)**, where Y ~ N(20, 20).
10. The variance is much larger than the mean, so a Poisson model is **unlikely to be suitable**.
11. Passengers often board **in groups**, so events do not occur singly or independently.
12. 1 − e^(−1) = **0.632**.
