---
title: "Edexcel International A Level Mathematics (YMA01): Discrete random variables -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-random-variables-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths S1 discrete random variables: p(x), F(x), E(X), E(X²), Var(X), E(aX + b) and Var(aX + b), with traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S1, section 5 (topics 5.1 to 5.3): the concept of a discrete random variable, the probability function and cumulative distribution function, and the mean and variance, including linear changes. For worked examples, use the [discrete random variables study guide](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-edexcel-alevel-maths/).

## Definitions and formulae

```
p(x) = P(X = x)                    Σ p(x) = 1,   0 ≤ p(x) ≤ 1
F(x₀) = P(X ≤ x₀) = Σ p(x) for x ≤ x₀
E(X) = Σ x p(x)                    E(X²) = Σ x² p(x)
Var(X) = E(X²) − [E(X)]²
E(aX + b) = aE(X) + b              Var(aX + b) = a² Var(X)
```

The specification expects you to know E(aX + b) and Var(aX + b) without the booklet.

## Key terms

| Term | Meaning |
|---|---|
| Random variable | A quantity whose value depends on the outcome of a random experiment |
| Discrete | Takes only separate, countable values |
| Probability function | p(x) = P(X = x), given as a table or a formula |
| Cumulative distribution function | F(x₀) = P(X ≤ x₀), a running total of p(x) |
| Expectation E(X) | Long-run mean value of X |
| Variance Var(X) | Expected squared distance from the mean; never negative |
| Standard deviation | √Var(X) |
| Independent observations | Two values of X whose outcomes do not affect each other |

## Moving between p and F

- From p to F: add up as you go.
- From F to p: p(x) = F(x) − F(previous value); the first p equals the first F.
- The last value of F is always 1. Use it to find an unknown constant in a formula for F.

## Inequalities for whole-number variables

```
P(X ≤ 3) = F(3)          P(X < 3) = F(2)
P(X > 3) = 1 − F(3)      P(X ≥ 3) = 1 − F(2)
P(2 ≤ X ≤ 5) = F(5) − F(1)
```

## Linear coding at a glance

| Y | E(Y) | Var(Y) |
|---|---|---|
| X + 5 | E(X) + 5 | Var(X) |
| 3X | 3E(X) | 9Var(X) |
| 4 − 2X | 4 − 2E(X) | 4Var(X) |

The standard deviation scales by |a|.

## Standard routines

**Find an unknown constant k:** set Σ p(x) = 1 (or F(largest) = 1).

**Find two unknown probabilities:** use Σ p(x) = 1 and the given E(X) to get two simultaneous equations.

**Find three unknowns:** add E(X²) = Var(X) + [E(X)]² as a third equation.

**Expected gain in a game:** E(prize) − cost to play. A negative answer is an expected loss for the player.

**Two independent observations:** list ordered pairs that give the event; multiply probabilities within a pair; add the pairs.

## Mini example: three unknowns

Values 1, 2, 3 with probabilities p, q, r; E(X) = 1.9 and Var(X) = 0.49, so E(X²) = 0.49 + 3.61 = 4.1.

```
p +  q +  r = 1
p + 2q + 3r = 1.9
p + 4q + 9r = 4.1
subtract:  q + 2r = 0.9  and  3q + 8r = 3.1
so r = 0.2, q = 0.5, p = 0.3
```

Check: 0.3 + 0.5 + 0.2 = 1.

## Mini example: from a formula for F to p

X takes the values 1, 2, 3 and F(x) = (x² + kx)/12.

```
F(3) = 1:  (9 + 3k)/12 = 1, so k = 1
F(1) = 2/12,  F(2) = 6/12,  F(3) = 12/12
p(1) = 2/12,  p(2) = 4/12,  p(3) = 6/12
E(X) = (2 + 8 + 18)/12 = 7/3
```

Check that each p(x) is positive and that the values add to 1.

## Expectation of a function

E(g(X)) = Σ g(x) p(x). For example, if X takes 0, 1, 2 with probabilities 0.5, 0.3, 0.2, then E(X² + 1) = 1(0.5) + 2(0.3) + 5(0.2) = 2.1. In general E(g(X)) is not g(E(X)): here g(E(X)) = 0.7² + 1 = 1.49.

## Exam traps

- Forgetting to subtract [E(X)]² when finding the variance.
- Rounding E(X) before squaring it.
- Adding the constant when finding Var(aX + b), or not squaring a.
- Using F(4) for P(X < 4).
- Missing an ordered pair when combining two observations.
- Giving a probability greater than 1 or a negative variance without noticing it is impossible.
- Writing E(X) as a "possible value" of X: it need not be one.

## Self-test

1. What two conditions must a probability function satisfy?
2. P(X = x) = kx for x = 1, 2, 3, 4. Find k.
3. F(1) = 0.3, F(2) = 0.55, F(3) = 1. Find P(X = 2).
4. For a whole-number variable, write P(X ≥ 5) in terms of F.
5. E(X) = 4 and E(X²) = 20. Find Var(X).
6. Var(X) = 3. Find Var(2X + 7) and Var(1 − X).
7. E(X) = 2. Find E(10 − 3X).
8. Why can the expected value of a score on a die be 3.5 when 3.5 cannot be rolled?
9. A game costs £1 and the expected prize is £0.80. What is the expected gain per game for the player?
10. P(X = 0) = 0.5 and P(X = 1) = 0.5. Two independent observations are taken. Find P(the sum is 1).
11. E(X) = 1.9 and Var(X) = 0.49. Find E(X²).
12. Give an example of a discrete random variable and of a quantity that is not discrete.

**Answers:** 1. Each probability is between 0 and 1, and the probabilities add to 1. 2. 10k = 1, so k = 0.1. 3. 0.55 − 0.3 = 0.25. 4. 1 − F(4). 5. 20 − 16 = 4. 6. 4 × 3 = 12; (−1)² × 3 = 3. 7. 10 − 6 = 4. 8. E(X) is a long-run average over many rolls, not a single outcome. 9. 0.80 − 1 = −£0.20, an expected loss of 20p. 10. (0, 1) or (1, 0): 0.25 + 0.25 = 0.5. 11. 0.49 + 1.9² = 4.1. 12. Discrete: the number of goals in a match. Not discrete: the time taken to run a race, which is continuous.
