---
resourceId: "mb-ap-stats-2.10-revision-notes"
title: "The Binomial Distribution: Revision Notes (Statistics 2.10)"
description: "One-page recap of the binomial conditions, the binomial probability function, cumulative probabilities, mean and standard deviation, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.10-study-guide"]
learningObjectives:
  - "Recall the binomial conditions and formulas"
  - "Spot the common errors in binomial questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Binomial pdf gives P(X = x); binomial cdf gives P(X ≤ x). Show the distribution, n, p and the values."
related: ["mb-ap-stats-2.10-study-guide", "mb-ap-stats-2.10-practice", "mb-ap-stats-2.10-checklist"]
next: "mb-ap-stats-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics"]
keyPoints:
  - "Binomial: two outcomes, fixed n, independent trials, same p; X counts successes."
  - "P(X = x) = ₙCₓ · pˣ · (1 − p)ⁿ⁻ˣ; μ = np; σ = √[ np(1 − p) ]."
  - "Write the inequality first, then add probabilities or use a complement."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/).

## Recap

- A **binomial random variable** X counts the number of successes in n trials.
- The four conditions: each trial has **two outcomes**; the **number of trials n is fixed**; the trials are **independent**; the probability of success **p is the same** on every trial.
- Write X ~ B(n, p). X takes the values 0, 1, 2, …, n.
- Probabilities can be **calculated** with the formula or technology, or **estimated** with a simulation.

## Key relationships

| What you want | How to find it |
|---|---|
| P(X = x) | ₙCₓ · pˣ · (1 − p)ⁿ⁻ˣ, where ₙCₓ = n! ÷ [x!(n − x)!]; or binomial pdf |
| P(X ≤ x) | add P(0) to P(x); or binomial cdf |
| P(X ≥ x) | 1 − P(X ≤ x − 1) |
| P(X ≥ 1) | 1 − P(X = 0) = 1 − (1 − p)ⁿ |
| P(a ≤ X ≤ b) | P(X ≤ b) − P(X ≤ a − 1) |
| Mean | μ = np |
| Standard deviation | σ = √[ np(1 − p) ] (variance = np(1 − p)) |
| Simulation estimate | (number of simulated repetitions with the event) ÷ (total repetitions) |

## Assumptions and conventions

- Justify "binomial" by stating each condition **in context**; to reject it, name the condition that fails.
- Independence is often an assumption: say why it is reasonable (separate pots, random selection from a very large population).
- Word to inequality: "at least 3" is X ≥ 3; "more than 3" is X ≥ 4; "at most 3" is X ≤ 3; "fewer than 3" is X ≤ 2.
- Round probabilities to 4 decimal places, but add unrounded values.

## Mistakes to avoid

1. **Leaving out ₙCₓ**, so finding the probability of one order only.
2. **Swapping the powers** of p and 1 − p.
3. **Wrong boundary** for "at least", "more than" or "fewer than".
4. **Reporting the variance np(1 − p) as σ.**
5. **Calling a variable binomial** when n is not fixed or draws are without replacement from a small group.
6. **Calculator syntax only**: always name the distribution, n, p and the values.
7. **No interpretation**: say what the probability, mean or σ means for the people or objects in the question.

## Quick self-check

1. X ~ B(4, 0.5). Find P(X = 2). *(₄C₂ (0.5)²(0.5)² = 6 × 0.0625 = 0.375)*
2. X ~ B(50, 0.2). Find μ and σ. *(μ = 10; σ = √8 ≈ 2.83)*
3. X ~ B(6, 0.1). Find P(X ≥ 1). *(1 − 0.9⁶ = 0.4686)*
4. Draw 3 cards without replacement from a 10-card pack with 4 red cards; X = number of red cards. Binomial? *(No: p changes after each draw, so the trials are not independent.)*

Next: [practice questions](/advanced-course-resources/statistics/2-10-binomial-distribution-practice/).
