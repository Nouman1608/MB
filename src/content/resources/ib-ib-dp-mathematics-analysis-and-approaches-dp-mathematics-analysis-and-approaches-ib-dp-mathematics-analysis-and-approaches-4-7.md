---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.7 Discrete random variables and their probability distributions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.7
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-7"
description: "IB Maths AA study guide to section 4.7: building probability distributions, solving for unknown probabilities, expected value and fair games, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.7** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **the concept of discrete random variables and their probability distributions;
expected value (mean), E(X), for discrete data; and applications**. It is SL and HL content. The variance of
a discrete random variable is HL only and belongs to section 4.14, so it is not covered here.

The [probability, discrete and continuous distributions, binomial and normal study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
shows one distribution defined by a formula and one fair-game check. This page covers the full range of 4.7
question types: building a distribution from an experiment, checking that it is valid, solving for two
unknown probabilities, and using expected value to judge games and set prices.

## What a discrete random variable is

A **random variable** X is a numerical quantity whose value is determined by the outcome of a random
experiment. It is **discrete** if it takes separate values, usually counts or scores: the number of heads in
three tosses, the larger score on two dice, the prize won in a game.

Capital X names the variable; lower-case x is a particular value. P(X = 3) means "the probability that X
takes the value 3".

## Probability distributions

The guide says distributions are given either as a **table** or as a **function**, such as
P(X = x) = k(x + 1) for x = 0, 1, 2, 3. Either way, a valid distribution must satisfy:

```
0 ≤ P(X = x) ≤ 1 for every x
Σ P(X = x) = 1
```

The second condition is how you find an unknown constant k: add all the probabilities and set the total
equal to 1.

## Expected value

```
E(X) = Σ x P(X = x)
```

E(X) is the **long-run mean** value of X over many repetitions. It need not be a value X can actually take:
the expected score on a fair die is 3.5.

**Fair games.** If X is a player's gain (winnings minus stake), the guide notes that E(X) = 0 indicates a
fair game. E(X) < 0 means the player loses on average and the organiser profits; E(X) > 0 favours the
player. Over n games the expected total gain is n × E(X).

### Worked example 1: building a distribution

Two fair dice are rolled and X is the larger of the two scores (the common score if they are equal).

For X = x, the outcomes are those where the larger score is x: the pairs (x, 1) to (x, x) and (1, x) to
(x − 1, x), which is 2x − 1 outcomes out of 36.

| x | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| P(X = x) | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 |

```
Check: (1 + 3 + 5 + 7 + 9 + 11)/36 = 36/36 = 1 ✓
E(X) = (1×1 + 2×3 + 3×5 + 4×7 + 5×9 + 6×11)/36 = 161/36 ≈ 4.47
P(X ≥ 5) = (9 + 11)/36 = 20/36 = 5/9
```

The distribution can also be written as a function: P(X = x) = (2x − 1)/36 for x = 1, 2, ..., 6.

### Worked example 2: two unknown probabilities

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.1 | p | q | 0.2 |

Given E(X) = 1.7, find p and q.

```
Sum to 1:     0.1 + p + q + 0.2 = 1        →   p + q = 0.7
Expectation:  0(0.1) + 1p + 2q + 3(0.2) = 1.7   →   p + 2q = 1.1
Subtract:     q = 0.4,  so p = 0.3
```

Two unknowns need two equations: one from the total probability and one from the expected value. Check both
answers lie between 0 and 1.

### Worked example 3: is the game fair?

A player pays $2 to spin a spinner. With probability 0.1 they receive $10, with probability 0.2 they receive
$3, and otherwise nothing. Let X be the player's gain.

| Gain x ($) | 8 | 1 | −2 |
|---|---|---|---|
| P(X = x) | 0.1 | 0.2 | 0.7 |

```
E(X) = 8(0.1) + 1(0.2) + (−2)(0.7) = 0.8 + 0.2 − 1.4 = −0.4
```

The game is not fair: the player loses 40 cents per game on average, so over 500 games the organiser expects
to make 500 × 0.40 = $200. For a fair game the stake should equal the expected amount received:
10(0.1) + 3(0.2) = $1.60.

Notice the gain, not the prize, goes in the table. Forgetting to subtract the stake from each prize is the
most common error in game questions.

## Applications

Expected value appears wherever a quantity depends on chance: average profit of a business, insurance
premiums, expected points in a game, expected number of items sold. The method is always the same: define X
clearly, list its values with their probabilities, check they sum to 1, then compute E(X) and interpret it in
context.

## Common mistakes

- Probabilities that do not sum to 1, or a negative "probability" from a wrong value of k.
- Writing prizes instead of gains in a fair-game question.
- Treating E(X) as the most likely value, or rounding it to a whole number.
- Using only one equation when there are two unknowns.
- Reading P(X > 2) as including X = 2.
- Using the variance of X in an SL answer: it is not part of 4.7.

## Exam technique

- **"Show that"** k takes a value: write the sum of the probabilities equal to 1, and solve, showing the
  sum explicitly.
- **"Find E(X)"**: show the sum Σ x P(X = x) on Paper 1; give exact values where possible.
- **"Complete the table"** of a distribution: every entry, and check the total.
- **"Determine whether the game is fair"**: find E(gain) and state "fair" only if it equals 0.
- **"Interpret"** E(X): long-run average per trial, in context.

On Paper 2, a GDC can compute Σ x P(X = x) from two lists, but writing the expression first protects the
method marks.

## Where to go next

Use the [4.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-7-revision-notes/)
for recall and the [4.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-7-practice/)
to test yourself. Section 4.8 studies one important discrete distribution in depth: see the
[4.8 binomial distribution study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.7 (SL and HL): concept of discrete random variables and their probability distributions;
expected value (mean), E(X), for discrete data; applications.
