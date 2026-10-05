---
resourceId: "mb-ap-stats-2.8-practice"
title: "Introduction to Random Variables and Probability Distributions: Practice Questions (Statistics 2.8)"
description: "Seven original Marlbridge practice questions on discrete random variables, valid distributions, cumulative distributions and simulation estimates, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.8"]
resourceType: "practice-questions"
prerequisites:
  - "Probability rules, including independence and complements"
prerequisiteResources: ["mb-ap-stats-2.8-study-guide"]
learningObjectives:
  - "Check whether a table is a valid probability distribution"
  - "Construct a discrete probability distribution with probability rules or from a function"
  - "Build and use a cumulative distribution"
  - "Estimate a distribution from simulation results and compare it with the exact one"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Give probabilities to 4 decimal places unless they are exact."
related: ["mb-ap-stats-2.8-study-guide", "mb-ap-stats-2.8-revision-notes", "mb-ap-stats-2.8-checklist"]
next: "mb-ap-stats-2.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every distribution you build should be checked: probabilities from 0 to 1, sum 1."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data, simulations and settings are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: X is a discrete random variable; give probabilities to 4 decimal places unless they are exact. Show the rule you use, the values you substitute and the answer.

## Question 1 (multiple choice · foundation)

Which table shows a valid probability distribution?

- (A) x: 0, 1, 2, 3 with P(X = x): 0.3, 0.4, 0.2, 0.1
- (B) x: 0, 1, 2, 3 with P(X = x): 0.4, 0.3, 0.2, 0.2
- (C) x: 0, 1, 2, 3 with P(X = x): 0.5, 0.4, 0.2, −0.1
- (D) x: 0, 1, 2, 3 with P(X = x): 0.25, 0.25, 0.25, 0.15

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every probability is between 0 and 1, and 0.3 + 0.4 + 0.2 + 0.1 = 1.

- (B) adds to 1.1. The probabilities of all possible values must add to exactly 1.
- (C) adds to 1, but it contains −0.1. A probability can never be negative.
- (D) adds to 0.9, so 0.1 of the probability is missing.
</details>

## Question 2 (multiple choice · core)

The number of goals, X, scored by a fictional youth football team in a match has this distribution:

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| P(X = x) | 0.15 | 0.25 | 0.30 | 0.20 | 0.10 |

What is P(1 < X ≤ 3)?

- (A) 0.30
- (B) 0.50
- (C) 0.75
- (D) 0.90

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "1 < X ≤ 3" means X = 2 or X = 3, because X = 1 is excluded by the strict inequality. 0.30 + 0.20 = 0.50.

- (A) is P(X = 2) only. It leaves out X = 3, which is allowed by "≤ 3".
- (C) includes X = 1: 0.25 + 0.30 + 0.20 = 0.75. That is P(1 ≤ X ≤ 3).
- (D) is P(X ≤ 3), which also includes X = 0 and X = 1.
</details>

## Question 3 (multiple choice · core)

A random variable X takes the values 1, 2, 3 and 4. Its cumulative distribution is:

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X ≤ x) | 0.20 | 0.45 | 0.80 | 1.00 |

What is P(X = 3)?

- (A) 0.20
- (B) 0.35
- (C) 0.55
- (D) 0.80

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P(X = 3) = P(X ≤ 3) − P(X ≤ 2) = 0.80 − 0.45 = 0.35.

- (A) is 1 − 0.80 = P(X > 3), which is P(X = 4).
- (C) is 1 − 0.45 = P(X > 2), which includes both X = 3 and X = 4.
- (D) reads P(X ≤ 3) from the table as if it were P(X = 3). Cumulative values are running totals.
</details>

## Question 4 (constructed response · core)

A fictional café has two coffee machines. On a given morning, machine A works with probability 0.95 and machine B works with probability 0.85. Assume the machines work or fail independently. Let X = the number of machines that work on a given morning.

(a) Construct the probability distribution of X as a table. Show your working.
(b) Show that your distribution is valid.
(c) The café can serve customers if at least one machine works. Find this probability.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** X can be 0, 1 or 2.

- P(X = 0) = P(A fails) · P(B fails) = 0.05 × 0.15 = 0.0075.
- P(X = 1) = P(A works, B fails) + P(A fails, B works) = 0.95 × 0.15 + 0.05 × 0.85 = 0.1425 + 0.0425 = 0.1850.
- P(X = 2) = 0.95 × 0.85 = 0.8075.

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 0.0075 | 0.1850 | 0.8075 |

**(b)** Each probability is between 0 and 1, and 0.0075 + 0.1850 + 0.8075 = 1.

**(c)** P(X ≥ 1) = 1 − P(X = 0) = 1 − 0.0075 = **0.9925**. On about 99.25% of mornings, at least one machine works.

| Point | What earns it |
|---|---|
| 1 | P(X = 0) and P(X = 2) correct, using the multiplication rule for independent events |
| 1 | P(X = 1) correct, with **both** ways of getting exactly one working machine added |
| 1 | Validity checked: all probabilities in [0, 1] and sum = 1 |
| 1 | P(X ≥ 1) = 0.9925 with the complement (or addition) shown, interpreted in context |

The most common error is P(X = 1) = 0.95 × 0.15 = 0.1425 only; this does not earn point 2, and the sum check in (b) would then fail.
</details>

## Question 5 (constructed response · core)

In a fictional puzzle app, a player has at most 4 attempts to clear a level. For players who clear it, X = the number of attempts used, with

P(X = x) = k(5 − x) for x = 1, 2, 3, 4.

(a) Find k.
(b) Write the probability distribution and the cumulative distribution of X as tables.
(c) Find the probability that a player who clears the level needs at least 2 attempts.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The probabilities must add to 1: k(4) + k(3) + k(2) + k(1) = 10k = 1, so **k = 0.1**.

**(b)**

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 0.4 | 0.3 | 0.2 | 0.1 |
| P(X ≤ x) | 0.4 | 0.7 | 0.9 | 1.0 |

**(c)** P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.4 = **0.6**. Or 0.3 + 0.2 + 0.1 = 0.6.

| Point | What earns it |
|---|---|
| 1 | Sets the sum equal to 1 and finds k = 0.1 |
| 1 | Correct distribution table |
| 1 | Correct cumulative table (running totals ending at 1) |
| 1 | P(X ≥ 2) = 0.6 with working shown |
</details>

## Question 6 (constructed response · stretch)

A student guesses the answers to 3 true-or-false questions on a fictional quiz. Each guess is correct with probability 0.5, independently. Let X = the number of correct guesses. A class ran a simulation: for each trial, a random digit generator produced three digits, with 0–4 meaning "correct" and 5–9 meaning "wrong". The results of 400 trials were:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Number of trials | 60 | 140 | 147 | 53 |

(a) Explain why the digit rule is a valid way to simulate one guess.
(b) Use the simulation to estimate the probability distribution of X and P(X ≥ 2).
(c) Find the exact distribution of X using probability rules, and compare it with your estimate.
(d) How could the class make the estimates closer to the exact values?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each digit 0 to 9 is equally likely, so 5 of the 10 digits (0–4) give "correct": probability 5/10 = 0.5. The generator's digits are independent, just like the guesses.

**(b)** Divide each count by 400:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Estimated P(X = x) | 0.15 | 0.35 | 0.3675 | 0.1325 |

Estimated P(X ≥ 2) = 0.3675 + 0.1325 = **0.50**.

**(c)** There are 2 × 2 × 2 = 8 equally likely outcomes (each has probability 0.5³ = 1/8). One outcome has 0 correct, three have 1, three have 2 and one has 3.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Exact P(X = x) | 1/8 = 0.125 | 3/8 = 0.375 | 3/8 = 0.375 | 1/8 = 0.125 |

The estimates are close to the exact values (each within 0.03), and both give P(X ≥ 2) = 0.5. They are not identical because a simulation result varies by chance.

**(d)** Run many more trials. With more trials, relative frequencies tend to be closer to the true probabilities.

| Point | What earns it |
|---|---|
| 1 | (a) Links 5 of 10 equally likely digits to probability 0.5 |
| 1 | (b) All four estimates as relative frequencies, and estimated P(X ≥ 2) |
| 1 | (c) Exact distribution from the 8 equally likely outcomes |
| 1 | (c) and (d) Compares estimate and exact, explains the difference as chance variation and suggests more trials |
</details>

## Question 7 (explanation · stretch)

In a fictional board game, two fair spinners are spun. Each has four equal sectors numbered 1 to 4. Let X = the larger of the two numbers shown (if they are equal, X is that number). A student writes: "X can be 1, 2, 3 or 4, so P(X = x) = 0.25 for each value."

(a) Explain why the student is wrong.
(b) Construct the correct probability distribution of X.
(c) Construct the cumulative distribution and show that P(X ≤ x) = x² ÷ 16 for x = 1, 2, 3, 4.
(d) Find P(X ≤ 3).

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Having 4 possible values does not make them equally likely. The 16 equally likely outcomes are the ordered pairs (first spinner, second spinner). Only one of them, (1, 1), gives X = 1, but many give X = 4.

**(b)** Count the pairs whose larger value is x:

- X = 1: (1, 1). 1 pair.
- X = 2: (1, 2), (2, 1), (2, 2). 3 pairs.
- X = 3: (1, 3), (2, 3), (3, 1), (3, 2), (3, 3). 5 pairs.
- X = 4: the remaining 16 − 9 = 7 pairs.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 1/16 = 0.0625 | 3/16 = 0.1875 | 5/16 = 0.3125 | 7/16 = 0.4375 |

Check: (1 + 3 + 5 + 7)/16 = 16/16 = 1.

**(c)**

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X ≤ x) | 1/16 | 4/16 | 9/16 | 16/16 |

These are 1²/16, 2²/16, 3²/16 and 4²/16. Reason: X ≤ x means **both** spinners show x or less. Each spinner does this with probability x/4, independently, so P(X ≤ x) = (x/4)² = x²/16.

**(d)** P(X ≤ 3) = 9/16 = **0.5625**.

| Point | What earns it |
|---|---|
| 1 | (a) Explains that the values are not equally likely, referring to the 16 equally likely outcomes |
| 1 | (b) Correct distribution with counts shown and a sum check |
| 1 | (c) Correct cumulative table and a link to x²/16 (by matching values or by the independence argument) |
| 1 | (d) 0.5625 |
</details>

## How did you do?

- **Q1 wrong:** re-read "The probability distribution of a discrete random variable" in the [study guide](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/). Check both rules.
- **Q2 wrong:** revisit the word-to-symbol table in "The cumulative distribution".
- **Q3 or Q5(b) wrong:** revisit Worked example 2. Subtract cumulative values to get a single probability.
- **Q4 or Q7 wrong:** work through Worked example 1 again. Add every outcome that gives the same value of X.
- **Q6 wrong:** revisit Worked example 3 on simulation.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-checklist/).
