---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.7 Discrete random variables and their probability distributions -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB Maths AA 4.7: valid probability distributions, unknown constants, expected value, gains and fair games, with traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.7** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): discrete random variables, their distributions and expected value. Worked
examples are in the
[4.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-7/).

## Core recall

```
Valid distribution:   0 ≤ P(X = x) ≤ 1   and   Σ P(X = x) = 1
Expected value:       E(X) = Σ x P(X = x)
Fair game:            E(gain) = 0
Expected total over n repetitions = n × E(X)
```

- A **discrete random variable** takes separate numerical values determined by chance.
- Distributions are given as a **table** or as a **function** P(X = x) = f(x) with a stated set of x values.
- E(X) is a long-run mean; it need not be a possible value of X.
- Variance of a discrete random variable is HL section 4.14, not part of 4.7.

## Standard question types

| Question | Method |
|---|---|
| Find k | Sum all probabilities in terms of k; set equal to 1 |
| Two unknowns p, q | One equation from Σ P = 1, one from the given E(X) |
| Build a distribution | List the sample space; count outcomes for each value of X |
| P(X ≤ a), P(X > a) | Add the relevant probabilities; watch the inequality |
| Fair game | Table of gains (prize − stake); E(gain) = 0 for fair |
| Fair stake | Stake = expected amount received |
| Expected profit over n games | n × E(organiser's gain) |

## Gain versus prize

If the stake is s and the prize is w, the gain is w − s; when no prize is won, the gain is −s. A table of
gains for a $2 game with prizes $10 and $3:

| Gain | 8 | 1 | −2 |
|---|---|---|---|
| Probability | 0.1 | 0.2 | 0.7 |

E(gain) = −0.4, so the player loses 40 cents per game on average.

## Key terms

| Term | Meaning |
|---|---|
| Random variable | A numerical quantity determined by a random outcome |
| Discrete | Takes separate, countable values |
| Probability distribution | All possible values of X with their probabilities |
| Expected value E(X) | Long-run mean, Σ x P(X = x) |
| Fair game | A game in which the expected gain is zero |
| Gain | Amount received minus amount paid |

## Exam traps

- Probabilities not summing to 1; always check.
- A value of k that makes a probability negative: reject it.
- Prizes used instead of gains.
- E(X) rounded to a whole number or treated as the most likely value.
- P(X > 2) and P(X ≥ 2) confused.
- Only one equation used for two unknowns.
- "Fair" claimed when E(gain) is small but not zero.

## Worked reminders

**Building a distribution.** X is the larger score when two fair dice are rolled. P(X = x) = (2x − 1)/36 for
x = 1, ..., 6, because there are 2x − 1 pairs whose larger score is x. The probabilities 1, 3, 5, 7, 9, 11
(over 36) sum to 1, and E(X) = 161/36 ≈ 4.47.

**Two unknowns.** P(X = 0) = 0.1, P(X = 1) = p, P(X = 2) = q, P(X = 3) = 0.2 and E(X) = 1.7. Then p + q = 0.7
and p + 2q + 0.6 = 1.7, so q = 0.4 and p = 0.3.

**Fair stake.** For a fair game, the stake equals the expected amount received. Prizes $10 with probability
0.1 and $3 with probability 0.2 give a fair stake of 1 + 0.6 = $1.60.

## Method checklist

- Define X in words, with units.
- List every value of X, including "nothing won".
- Check the probabilities sum to 1.
- Use gains, not prizes, for fairness.
- Interpret E(X) as a long-run average in context.

## Self-test

1. Is this a valid distribution: P(X = 1) = 0.2, P(X = 2) = 0.3, P(X = 3) = 0.4, P(X = 4) = 0.2?
2. P(X = x) = kx for x = 1, 2, 3, 4. Find k.
3. Find E(X) for question 2.
4. Write down E(X) for the score on a fair six-sided die.
5. A player pays $5 and wins $20 with probability 0.2, otherwise nothing. Find the expected gain.
6. What does E(gain) = 0 mean?
7. Using question 5, find the organiser's expected profit from 200 games.
8. P(X = 1) = 0.5, P(X = 2) = 0.2, P(X = 3) = a. Find a and E(X).
9. Using question 8, find P(X ≥ 2).
10. Explain how E(X) = 1.8 can be correct when X takes only whole-number values.
11. X is the number of heads when two fair coins are tossed. Write down its distribution.
12. A distribution has two unknown probabilities and a given mean. Which two equations do you use?

### Answers

1. No: the probabilities sum to 1.1.
2. k(1 + 2 + 3 + 4) = 10k = 1, so k = 0.1.
3. 0.1(1 + 4 + 9 + 16) = 3.
4. 3.5.
5. Gains 15 and −5: 15(0.2) − 5(0.8) = 3 − 4 = −$1.
6. On average the player neither wins nor loses: the game is fair.
7. 200 × $1 = $200.
8. a = 0.3; E(X) = 0.5 + 0.4 + 0.9 = 1.8.
9. 0.2 + 0.3 = 0.5.
10. E(X) is a long-run mean over many trials, not a single outcome.
11. P(X = 0) = 1/4, P(X = 1) = 1/2, P(X = 2) = 1/4.
12. Σ P(X = x) = 1 and Σ x P(X = x) = the given mean.

## Where to go next

Practise with the [4.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-7-practice/),
then the [4.8 binomial distribution revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8-revision-notes/).
