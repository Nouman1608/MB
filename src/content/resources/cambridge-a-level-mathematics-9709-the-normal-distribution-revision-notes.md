---
title: "Cambridge A Level Mathematics (9709): The normal distribution -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "the-normal-distribution-cambridge-alevel-maths"
description: "Condensed 9709 Paper 5 notes on 5.5: standardising, symmetry rules, reverse problems, the normal approximation to the binomial and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 5.5 of Cambridge 9709 Paper 5. The [normal distribution study guide](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution/) works through each question type in full; the [normal distribution practice questions](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution-practice/) give exam-style problems with mark schemes.

## Core facts

```
X ~ N(μ, σ²)          mean μ, variance σ², standard deviation σ
Standardise           Z = (X − μ)/σ,   Z ~ N(0, 1)
Un-standardise        x = μ + zσ
Table                 Φ(z) = P(Z < z)
```

- Symmetrical about μ; total area 1; P(X = a) = 0, so < and ≤ are interchangeable for X itself.
- Show the standardisation in full: the syllabus requires full working.
- Sketches may be asked for: bell shape, symmetrical, μ marked, region shaded.

## Symmetry rules

| Want | Use |
|---|---|
| P(Z < z), z > 0 | Φ(z) |
| P(Z > z), z > 0 | 1 − Φ(z) |
| P(Z < −z) | 1 − Φ(z) |
| P(Z > −z) | Φ(z) |
| P(a < Z < b) | Φ(b) − Φ(a) |
| P(−z < Z < z) | 2Φ(z) − 1 |

## Reverse problems

1. Convert the given probability to an area **to the left**.
2. If that area is below 0.5, the z-value is **negative**.
3. Read z from the tables (or the critical-value list).
4. Write (x − μ)/σ = z and solve for the unknown.
5. Two unknowns (μ and σ): two equations, then subtract.

Useful critical values: 0.674 (0.75), 1.282 (0.90), 1.645 (0.95), 1.960 (0.975), 2.326 (0.99), 2.576 (0.995).

## Normal approximation to the binomial

| Step | Detail |
|---|---|
| Condition | np > 5 **and** nq > 5 (state both with values) |
| Parameters | mean np, variance npq |
| Integers first | rewrite "< r" as "≤ r − 1" and "> r" as "≥ r + 1" |
| Continuity correction | ≤ r → < r + 0.5; ≥ r → > r − 0.5; = r → between r ± 0.5 |
| Standardise | with σ = √(npq) |

## Worked mini-examples

**Probability between two values.** X ~ N(12, 3²). P(10 < X < 15): z-values −0.667 and 1; Φ(1) − (1 − Φ(0.667)) = 0.8413 − 0.2524 = 0.589.

**Expected number.** If 0.589 of a population lies in a range, a sample of 300 is expected to contain 300 × 0.589 ≈ 177 such values.

**Reverse with σ unknown.** X ~ N(60, σ²) and P(X > 70) = 0.025. Then z = 1.960, so 10/σ = 1.96 and σ = 5.10.

**Approximation to an exact count.** X ~ B(90, 0.5): np = nq = 45, so use N(45, 22.5). P(X = 45) ≈ P(44.5 < Y < 45.5), z = ±0.105, giving 2Φ(0.105) − 1 ≈ 0.0836.

## Presentation that earns the method mark

Write the standardisation with numbers, for example P(Z > (75 − 65)/8), then the z-value, then Φ(z) from the tables, then the final probability. A calculator answer with no standardisation shown may lose the method mark.

## Sketch habit

Draw a bell curve, mark μ in the centre, mark the given value on the correct side, and shade the region asked for. The sketch shows at once whether the answer should be more or less than 0.5.

## Key terms

| Term | Meaning |
|---|---|
| Continuous random variable | can take any value in an interval |
| Standard normal | N(0, 1), denoted Z |
| Standardising | converting x to z = (x − μ)/σ |
| Φ(z) | area to the left of z under the standard normal curve |
| Critical value | z-value for a stated tail area |
| Continuity correction | ± 0.5 adjustment when a discrete variable is approximated by a continuous one |

## Exam traps

- **Variance read as standard deviation.** N(50, 16) has σ = 4.
- **Wrong side of the table.** Sketch and shade before choosing Φ(z) or 1 − Φ(z).
- **Sign of z in reverse problems.** Below the mean means negative z.
- **Unrounded table values.** Use z to 3 decimal places and Φ to 4.
- **One condition only.** Both np > 5 and nq > 5 are needed.
- **Continuity correction missing or reversed.** "More than 40" becomes Y > 40.5, not Y > 39.5.
- **"Expected number" not rounded sensibly.** Give a whole number or a sensible value at the end.
- **Negative σ.** A sign error in the z-values; recheck which side of μ each value lies.

## Self-test

1. X ~ N(50, 16). Find P(X > 54).
2. X ~ N(10, 2²). Find P(X < 7).
3. Find P(−1 < Z < 2).
4. Find P(−1.96 < Z < 1.96).
5. X ~ N(80, 5²). Find a such that P(X < a) = 0.9.
6. X ~ N(80, 5²). Find b such that P(X > b) = 0.75.
7. X ~ N(μ, 4²) and P(X < 30) = 0.95. Find μ.
8. X ~ N(20, σ²) and P(X > 26) = 0.1. Find σ.
9. Can B(30, 0.1) be approximated by a normal distribution? Explain.
10. X ~ B(50, 0.4). State the approximating normal distribution.
11. Write P(X < 25) for the binomial in question 10 as a normal probability with continuity correction.
12. X ~ N(40, σ²) and P(X < 32) = 0.15. Without finding σ, write down P(X > 48).

### Answers

1. z = 1; 1 − 0.8413 = **0.1587**.
2. z = −1.5; 1 − 0.9332 = **0.0668**.
3. 0.9772 − (1 − 0.8413) = **0.8185**.
4. 2 × 0.975 − 1 = **0.95**.
5. a = 80 + 1.282 × 5 = **86.4** (3 s.f.).
6. Area to the left is 0.25, so z = −0.674; b = 80 − 3.37 = **76.6** (3 s.f.).
7. μ = 30 − 1.645 × 4 = **23.4** (3 s.f.).
8. σ = 6 ÷ 1.282 = **4.68** (3 s.f.).
9. **No**: np = 3, which is not greater than 5.
10. **N(20, 12)**.
11. X ≤ 24, so **P(Y < 24.5)**.
12. 48 is as far above 40 as 32 is below, so **0.15**.
