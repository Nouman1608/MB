---
title: "Cambridge O Level Statistics (4040): Formation of the probability distribution of a discrete variable -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 12 – Probability distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 12.1
syllabusTopics:
  - qualification: "o-level"
    topic: "probability-distributions-4040"
    subtopic: "probability-distribution-of-a-discrete-variable-4040"
description: "Condensed notes on forming discrete probability distributions from grids, trees, selections and rules, with key terms, exam traps and a self-test, for 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 12.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: formation of the probability distribution of a discrete variable. The full explanation and worked examples are in the [probability distribution study guide](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable/), and exam-style questions are in the [probability distribution practice questions](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable-practice/). Expectation is revised in the [expectation revision notes](/resources/cambridge-o-level-statistics-4040-expectation-revision-notes/).

## Core recall

- A **discrete random variable** X takes separate values decided by chance.
- Its **probability distribution** gives every value x with P(X = x), usually as a table.
- Conditions: 0 ≤ P(X = x) ≤ 1 for each x, and **ΣP(X = x) = 1**.
- Use Σp = 1 to check a distribution and to find an unknown.

## Key terms

| Term | Meaning |
|---|---|
| Random variable | A quantity whose value depends on the outcome of a chance experiment |
| Discrete | Takes separate values, such as 0, 1, 2, with nothing in between |
| Probability distribution | Table (or formula) giving each value and its probability |
| Sample space diagram | Grid of all equally likely outcomes of two stages |
| Without replacement | Second-stage probabilities change because the first item is not returned |
| Independent | The outcome of one stage does not affect another |
| Most likely value | The value of x with the highest probability |
| Vertical line graph | Separate vertical lines of height P(X = x) at each value |

## Choosing a method

| Situation | Method |
|---|---|
| Two dice, spinners or coins; equally likely outcomes | Sample space grid, then count |
| Stages in sequence; without replacement; a process that stops | Tree diagram; multiply along, add across |
| Formula with a constant k | Substitute every x, set the total equal to 1 |
| Statements such as "twice as likely" | Write equations, finish with Σp = 1 |

## Small worked reminders

### Number of heads in three fair coin tosses

There are 8 equally likely outcomes.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 1/8 | 3/8 | 3/8 | 1/8 |

### Sum of two fair spinners, each numbered 1, 2, 3

There are 9 equally likely outcomes.

| x | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| P(X = x) | 1/9 | 2/9 | 3/9 | 2/9 | 1/9 |

### Unknowns from a relationship

X takes 0, 1, 2, 3 with P(0) = 0.1, P(1) = a, P(2) = 2a, P(3) = 0.3.

```
0.1 + a + 2a + 0.3 = 1
3a = 0.6, so a = 0.2 and P(2) = 0.4
```

### A process that stops

Up to 3 attempts, success probability 0.6 each time, stop at first success; X = attempts.

```
P(1) = 0.6,  P(2) = 0.4 × 0.6 = 0.24,  P(3) = 0.4² = 0.16
```

The last value covers success and failure on the final attempt.

## Reading probabilities from a table

| Wording | Means |
|---|---|
| P(X ≤ 2) | Values up to and including 2 |
| P(X < 2) | Values below 2 only |
| "At least one" | 1 − P(X = 0) |
| "More than 1 but at most 3" | P(X = 2) + P(X = 3) |

## Sense checks

- Keep a common denominator (for example 56 or 720) until the probabilities have been shown to total 1; simplify afterwards.
- A symmetric situation, such as heads in fair coin tosses, should give a symmetric table.
- Every probability must be between 0 and 1; a negative value or one above 1 means an equation was set up wrongly.

## Exam traps

- Leaving out X = 0, or including a value that cannot happen (such as 3 reds when only 2 exist).
- Counting one order only, such as red then blue but not blue then red.
- With-replacement probabilities in a without-replacement question.
- Adding an extra factor for the final stage of a process that stops.
- Not checking that the total is 1.
- Simplifying fractions to different denominators before checking.
- Mixing up "<" and "≤".

## Quick self-test

1. State the two conditions a discrete probability distribution must satisfy.
2. X takes 1, 2, 3 with probabilities 0.25, 0.4 and p. Find p.
3. P(X = x) = kx for x = 1, 2, 3, 4. Find k.
4. Two fair coins are tossed. Write the distribution of the number of tails.
5. A bag holds 2 green and 3 yellow balls. Two are taken without replacement. Find P(both green).
6. For question 5, find P(exactly one green).
7. List the possible values of the number of green balls when 3 balls are taken from the bag in question 5.
8. X has P(0) = 0.3, P(1) = 0.45, P(2) = 0.25. Find P(X ≥ 1).
9. Using question 8, state the most likely value of X.
10. Two fair dice are rolled. How many of the 36 outcomes give a larger score of 4?
11. Up to two attempts, success probability 0.7, stop at first success; X = attempts. Write the distribution.
12. Why are separate vertical lines, rather than touching bars, used to show a discrete distribution?

### Answers

1. Each probability is between 0 and 1; the probabilities total 1.
2. p = 1 − 0.65 = 0.35.
3. k(1 + 2 + 3 + 4) = 1, so k = 1/10.
4. P(0) = 1/4, P(1) = 1/2, P(2) = 1/4.
5. 2/5 × 1/4 = 2/20 = 1/10.
6. 2/5 × 3/4 + 3/5 × 2/4 = 6/20 + 6/20 = 12/20 = 3/5.
7. 0, 1, 2 (only 2 green balls exist).
8. 1 − 0.3 = 0.7.
9. 1, with probability 0.45.
10. 7 (2 × 4 − 1).
11. P(1) = 0.7, P(2) = 0.3.
12. X can take only the separate values listed, never values in between.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 12.1: formation of the probability distribution of a discrete variable.
