---
title: "Cambridge O Level Statistics (4040): Formation of the probability distribution of a discrete variable"
resourceType: "study-guides"
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
description: "Forming a discrete probability distribution from sample spaces, tree diagrams, selections and rules, finding unknowns and reading probabilities, for O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 12.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "formation of the probability distribution of a discrete variable". It draws on topic 11, elementary ideas of probability, especially mutually exclusive and independent events and selections with or without replacement. The whole of topic 12 is introduced in the [discrete probability distributions and expectation study guide](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and/); this page concentrates on building distributions correctly from different starting points. Expectation, section 12.2, has its own [expectation study guide](/resources/cambridge-o-level-statistics-4040-expectation/). For recall and practice, use the [probability distribution revision notes](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable-revision-notes/) and the [probability distribution practice questions](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable-practice/).

## What a probability distribution is

A **discrete random variable**, usually written with a capital letter such as X, takes separate values (often whole numbers) determined by chance: the number of heads in four coin tosses, the score on a spinner, the number of faulty items in a box.

Its **probability distribution** lists every possible value x together with its probability P(X = x), usually in a table:

| x | x₁ | x₂ | … | xₙ |
|---|---|---|---|---|
| P(X = x) | p₁ | p₂ | … | pₙ |

Two conditions must hold:

1. Every probability lies between 0 and 1.
2. The probabilities add up to exactly 1, because exactly one of the values must occur.

The second condition is both a check on your work and a way of finding unknowns.

## Step one: list every possible value

Before calculating any probability, write down all the values X can take. Missing a value, very often X = 0, is the most common reason a distribution fails to add to 1.

| Variable | Possible values |
|---|---|
| Number of sixes when two dice are rolled | 0, 1, 2 |
| Number of red counters when 3 are taken from a bag of 2 red and 6 blue | 0, 1, 2 (only 2 reds exist) |
| Larger score when two dice are rolled | 1, 2, 3, 4, 5, 6 |
| Number of attempts, at most 3, until a first success | 1, 2, 3 |

## Forming a distribution from a sample space diagram

When two fair dice, spinners or coins are involved, a grid of all equally likely outcomes is the safest method.

### Worked example 1: the larger score on two dice

Two fair dice are rolled and X is the larger of the two scores (if they are equal, X is that score). The 6 × 6 grid has 36 equally likely outcomes. Counting the cells with each larger score:

| x | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Number of outcomes | 1 | 3 | 5 | 7 | 9 | 11 |
| P(X = x) | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 |

Check: 1 + 3 + 5 + 7 + 9 + 11 = 36, so the probabilities total 1.

A pattern helps you trust the counts: for X = k, the larger score is k when one die shows k and the other shows k or less, which gives 2k − 1 cells.

## Forming a distribution from a tree diagram

When stages happen one after another, or when items are taken **without replacement**, a tree diagram organises the probabilities. Multiply along branches; add the branches that give the same value of X.

### Worked example 2: selection without replacement

A bag holds 3 red and 5 blue counters. Two are taken at random without replacement. X is the number of red counters taken.

```
P(X = 0) = P(blue, blue)          = 5/8 × 4/7               = 20/56
P(X = 1) = P(red, blue) + P(blue, red)
         = 3/8 × 5/7 + 5/8 × 3/7 = 15/56 + 15/56           = 30/56
P(X = 2) = P(red, red)            = 3/8 × 2/7               = 6/56
```

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 5/14 | 15/28 | 3/28 |

Check: 20 + 30 + 6 = 56. Keeping a common denominator (56) until the check is done makes errors easy to spot; simplify afterwards.

Two branches give X = 1. Writing only one of them is a frequent loss of marks. If the counters were replaced after each draw, the second-stage probabilities would stay at 3/8 and 5/8.

### Worked example 3: a process that stops

A learner driver may take a test up to three times and stops after the first pass. The probability of passing on any attempt is 0.6, independently of other attempts. X is the number of attempts taken.

```
P(X = 1) = 0.6
P(X = 2) = 0.4 × 0.6 = 0.24
P(X = 3) = 0.4 × 0.4 = 0.16   (fails twice; the third attempt happens whether it is passed or not)
```

Check: 0.6 + 0.24 + 0.16 = 1. The value X = 3 includes both passing and failing on the third attempt, because either way three attempts are taken. Multiplying 0.4 × 0.4 × 0.6 for X = 3 is a common error that leaves the total short of 1.

## Forming a distribution from a rule

Sometimes the probability is given by a formula in x containing an unknown constant.

### Worked example 4

P(X = x) = kx² for x = 1, 2, 3, 4.

```
k(1 + 4 + 9 + 16) = 1
30k = 1, so k = 1/30
```

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 1/30 | 4/30 | 9/30 | 16/30 |

Then P(X ≥ 3) = 9/30 + 16/30 = 25/30 = 5/6.

Unknowns can also come from extra information, such as "X = 2 is twice as likely as X = 1". Turn each statement into an equation and use Σp = 1 as the final equation.

## Using a distribution

Once the table is complete, probabilities of ranges come from adding the relevant entries.

- P(X ≤ 2) includes 2; P(X < 2) does not.
- "At least 1" means 1 or more; often 1 − P(X = 0) is quickest.
- "More than 1 but at most 3" means P(X = 2) + P(X = 3).

The **most likely value** of X is the value with the highest probability; in Worked example 1 it is 6.

A distribution can also be shown as a **vertical line graph**: values of x on the horizontal axis and a vertical line of height P(X = x) at each value. The lines are separate because X cannot take values in between.

## Common mistakes

- Missing a possible value, especially X = 0, or including an impossible one.
- Counting only one order (red then blue) when two orders give the same value.
- Using with-replacement probabilities when items are not replaced.
- Multiplying in an extra success or failure for the final stage of a process that stops.
- Leaving probabilities that do not add to 1 without checking.
- Confusing P(X < k) with P(X ≤ k).
- Simplifying fractions to different denominators before the check, which hides an error.

## Exam technique for the command words

- **Show that** a probability equals a given value: write the branch products and their sum in full; the answer is given, so the working is the mark.
- **Find** or **Construct the probability distribution**: give a table with every value of x and its probability, then state that the total is 1.
- **Find k**: write the equation from Σp = 1 explicitly.
- **Calculate** P(range): name the values you are adding.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 12.1: formation of the probability distribution of a discrete variable.
