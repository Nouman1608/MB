---
title: "Cambridge A Level Mathematics (9709): Discrete random variables -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.4
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "discrete-random-variables-cambridge-alevel-maths"
description: "Condensed 9709 Paper 5 notes on 5.4: distribution tables, E(X) and Var(X), binomial and geometric formulae, model conditions, traps and a self-test with answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 5.4 of Cambridge 9709 Paper 5. The [discrete random variables study guide](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths/) explains each idea with worked examples; the [discrete random variables practice questions](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths-practice/) test them.

## Formula sheet

```
Total probability         Σ P(X = x) = 1
Expectation               E(X) = Σ x P(X = x)
Variance                  Var(X) = Σ x² P(X = x) − [E(X)]²

Binomial  X ~ B(n, p)     P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ,  q = 1 − p,  r = 0, 1, …, n
                          E(X) = np,  Var(X) = npq

Geometric X ~ Geo(p)      P(X = r) = p qʳ⁻¹,  r = 1, 2, 3, …
                          P(X > r) = qʳ,  P(X ≤ r) = 1 − qʳ
                          E(X) = 1/p
```

Not required: proofs of these formulae, and the variance of the geometric distribution.

## Building a table: checklist

1. List every possible value of X, including 0 where it can occur.
2. Find each probability from a tree, a grid or counting.
3. Check the total is exactly 1.
4. Present as a table with x in one row and P(X = x) in the next.

## Model conditions

| Binomial B(n, p) | Geometric Geo(p) |
|---|---|
| fixed number n of trials | trials continue until the first success |
| two outcomes per trial | two outcomes per trial |
| trials independent | trials independent |
| constant probability p | constant probability p |
| X = number of successes | X = number of trials up to and including the first success |

In context, write conditions about the actual objects: "the probability that a light bulb is faulty is the same for every bulb".

## Inequality translation (discrete X)

| Words | Symbols | Calculation |
|---|---|---|
| at most 3 | X ≤ 3 | P(0) + P(1) + P(2) + P(3) |
| fewer than 3 | X ≤ 2 | P(0) + P(1) + P(2) |
| at least 3 | X ≥ 3 | 1 − P(X ≤ 2) |
| more than 3 | X ≥ 4 | 1 − P(X ≤ 3) |
| between 3 and 6 inclusive | 3 ≤ X ≤ 6 | P(3) + P(4) + P(5) + P(6) |

Geometric shortcut: P(a ≤ X ≤ b) = q^(a − 1) − q^b.

## Reverse problems

- **Unknown constant in P(X = x):** use Σ P = 1.
- **Two unknown probabilities and E(X) given:** solve Σ P = 1 and Σ xP = E(X) together.
- **E(X) and Var(X) given for B(n, p):** q = Var ÷ E, then p = 1 − q and n = E ÷ p.
- **Least n for "at least one success":** solve qⁿ < 1 − target; test the integer either side.

## Key terms

| Term | Meaning |
|---|---|
| Discrete random variable | takes separate, countable values, each with a probability |
| Probability distribution | all values of X with their probabilities |
| Expectation E(X) | long-run mean value of X |
| Variance Var(X) | spread of X about its mean, E(X²) − [E(X)]² |
| Trial | a single repetition of the experiment |
| Success | the outcome being counted |

## Exam traps

- **Without replacement treated as binomial.** The probability changes, so it is not binomial.
- **"More than 3" as 1 − P(X ≤ 2).** For discrete X, "more than 3" starts at 4.
- **[E(X)]² not subtracted,** or E(X²) confused with [E(X)]².
- **Geometric starts at r = 1,** not 0: X counts trials, including the success.
- **"First success on trial 5" and "one success in 5 trials"** are different: pq⁴ against 5pq⁴.
- **Log inequality direction.** Dividing by ln q (negative) reverses the inequality.
- **Context-free conditions.** "Trials are independent" alone may not score; say what is independent of what.
- **Premature rounding.** Keep 4 or more significant figures until the end.

## Self-test

1. P(X = x) = k(x + 1) for x = 0, 1, 2, 3. Find k.
2. For the distribution in question 1, find E(X).
3. X takes values 1, 2, 3 with probabilities 0.2, 0.5, 0.3. Find Var(X).
4. X ~ B(6, 0.5). Find P(X ≥ 4).
5. X ~ B(10, 0.2). Find E(X) and Var(X).
6. X ~ Geo(0.25). Find P(X = 3).
7. X ~ Geo(0.25). Find P(X > 5).
8. X ~ Geo(0.2). Find E(X).
9. X ~ B(n, p) with E(X) = 4 and Var(X) = 3.2. Find n and p.
10. Two cards are taken from 4 red and 6 black without replacement. Why is the number of red cards not binomial?
11. Write "fewer than 2 successes" in symbols for X ~ B(9, p).
12. Find the least n for which P(at least one six in n throws of a fair die) > 0.9.

### Answers

1. k(1 + 2 + 3 + 4) = 1, so **k = 1/10**.
2. (0 × 1 + 1 × 2 + 2 × 3 + 3 × 4)/10 = **2**.
3. E(X) = 2.1, E(X²) = 0.2 + 2 + 2.7 = 4.9; Var = 4.9 − 4.41 = **0.49**.
4. (⁶C₄ + ⁶C₅ + ⁶C₆)/2⁶ = (15 + 6 + 1)/64 = **11/32**.
5. E = **2**, Var = **1.6**.
6. 0.75² × 0.25 = **0.141** (3 s.f.).
7. 0.75⁵ = **0.237** (3 s.f.).
8. 1/0.2 = **5**.
9. q = 3.2/4 = 0.8, so **p = 0.2** and **n = 20**.
10. The probability of red **changes after the first card** is taken, so trials are not independent with constant p.
11. **X ≤ 1**.
12. (5/6)ⁿ < 0.1: (5/6)¹² = 0.112, (5/6)¹³ = 0.0935, so **n = 13**.
