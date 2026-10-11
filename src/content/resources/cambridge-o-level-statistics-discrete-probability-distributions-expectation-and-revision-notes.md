---
title: "Cambridge O Level Statistics: Discrete probability distributions, expectation and fair games (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Probability Distributions Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Discrete probability distributions, expectation and fair games"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 27
syllabusTopics:
  - qualification: "o-level"
    topic: "probability-distributions-4040"
    subtopic: "probability-distribution-of-a-discrete-variable-4040"
  - qualification: "o-level"
    topic: "probability-distributions-4040"
    subtopic: "expectation-4040"
description: "Condensed revision notes on probability distributions, expectation, expected gain and fair games for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These are condensed notes for topic 12 of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027: section 12.1 (probability distribution of a discrete variable) and section 12.2 (expectation, expected profit and loss in simple games, fair games). For full explanations and longer worked examples, read the [study guide](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and/). Then try the [practice questions](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and-practice/).

Other links: the [O Level Statistics course page](/boards/cambridge/o-level/statistics/), the [syllabus checklist](/checklists/cambridge/o-level/statistics/) and the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Random variable X | A quantity whose value depends on chance. Capital X is the variable, small x a value it takes. |
| Discrete | Takes separate, listable values such as 0, 1, 2, 3. |
| p(x) | The probability P(X = x). |
| Probability distribution | A table of every value of X with its probability. |
| E(X) | Expectation: the average value of X over very many repeats. |
| E[g(X)] | Expectation of a function of X. |
| Stake | The amount paid to play a game. |
| Net gain | Amount received minus stake. |
| Fair game | A game where the expected net gain is zero. |

## Formulas

| Result | Formula |
|---|---|
| Probabilities sum to 1 | Σ p(x) = 1, and 0 ≤ p(x) ≤ 1 |
| Estimated probability from data | p(x) = frequency of x ÷ total frequency |
| Expectation | E(X) = Σ x p(x) |
| Expectation of a function | E[g(X)] = Σ g(x) p(x) |
| Straight-line function | E(aX + b) = a E(X) + b |
| Expected net gain | Σ (net gain) × probability = E(received) − stake |
| Expected total over n plays | n × E(net gain) |
| Fair game | E(net gain) = 0, so stake = E(received) |

The straight-line rule holds only for aX + b. It does not hold for X² or any other curve.

## Method: forming a distribution

1. Say what X counts and list every possible value.
2. For each value, list the outcomes that give it. Count every order.
3. Work out the probabilities: multiply along tree branches, add the branches that give the same value.
4. Write the table.
5. Check the total is exactly 1.

Reminder: with replacement the draws are independent and the probabilities stay the same. Without replacement the second probability changes.

**Reminder example.** A box has 4 red and 6 blue pens. Two are taken at random without replacement. X is the number of red pens.

```
p(0) = 6/10 × 5/9 = 30/90 = 1/3
p(1) = 2 × (4/10 × 6/9) = 48/90 = 8/15
p(2) = 4/10 × 3/9 = 12/90 = 2/15
```

Check: 5/15 + 8/15 + 2/15 = 1.

## Method: unknown constants

* A constant k in a rule: add all the probabilities, set the sum equal to 1, solve for k.
* Two unknown probabilities: form one equation from Σ p(x) = 1 and a second from the given E(X). Solve together.

**Reminder example.** p(1) = 0.15, p(2) = a, p(3) = b, p(4) = 0.25, and E(X) = 2.7.

```
Total: 0.15 + a + b + 0.25 = 1, so a + b = 0.6
E(X):  0.15 + 2a + 3b + 1.0 = 2.7, so 2a + 3b = 1.55
Substitute a = 0.6 − b: 1.2 + b = 1.55, so b = 0.35 and a = 0.25
```

## Method: expectation

1. Write the table.
2. Add a row of x p(x), or g(x) p(x) for a function.
3. Add the row. Do not divide by the number of values.

**Reminder example.** With p(1) = 0.4, p(2) = 0.35 and p(3) = 0.25:

```
E(X)    = 0.4 + 0.70 + 0.75 = 1.85
E(X²)   = 0.4 + 1.40 + 2.25 = 4.05
E(3X−1) = 3 × 1.85 − 1 = 4.55
```

Note that E(X²) = 4.05 but [E(X)]² = 3.4225, about 3.42. They are different.

## Method: expected profit and loss in a game

1. Write each outcome, its probability and its net gain (received minus stake).
2. Multiply each net gain by its probability and add.
3. Positive means an expected profit for the player, negative an expected loss.
4. For n plays, multiply by n. Say it is an expected total, not what will happen.

**Reminder example.** Stake Rs 3. A fair spinner shows 1 to 5. A 5 pays Rs 10, a 4 pays Rs 4, anything else pays nothing.

```
E(received) = 10 × 1/5 + 4 × 1/5 = 2.8
E(net gain) = 2.8 − 3 = −0.2
Over 150 plays: 150 × (−0.2) = −30, an expected loss of Rs 30
```

## Method: fair games

* Find the stake that makes a game fair: stake = E(received).
* Find a missing prize that makes a game fair: set E(received) equal to the stake and solve.
* Decide who a game favours: positive favours the player, negative the organiser, zero is fair.

**Reminder example.** A raffle has 500 tickets: one prize of Rs 200, four of Rs 50 and ten of Rs 10.

```
Total prizes = 200 + 4 × 50 + 10 × 10 = 500
E(prize per ticket) = 500/500 = 1
```

A ticket costing Rs 1 makes the raffle fair. At Rs 1.50, the organiser expects Rs 0.50 per ticket, which is Rs 250 if all 500 sell.

## Must-know distinctions

| Often confused | Difference |
|---|---|
| p(x) and E(X) | p(x) is a probability between 0 and 1. E(X) is a value on the same scale as X. |
| E(X) and the mean of the x values | E(X) weights each x by its probability. A plain mean treats them as equally likely. |
| E(X²) and [E(X)]² | Square then average, against average then square. They differ. |
| Prize and net gain | Net gain subtracts the stake. |
| Fair and "close to zero" | Fair means exactly zero expected net gain. |
| Expectation and outcome | One play never gives the expectation unless that is a possible result. It describes the long run. |

## Quick self-test

1. A variable has p(0) = 0.1, p(1) = 0.3, p(2) = k and p(3) = 0.35. Find k.
2. A variable takes values 0 to 3 with p(x) = (x + 1)/10. Find E(X).
3. Which of these lists of probabilities for the values 1, 2, 3 is valid: (0.5, 0.3, 0.3), (0.2, 0.5, 0.3), or (0.6, 0.5, −0.1)?
4. Given p(0) = 0.2, p(1) = 0.4, p(2) = 0.2 and p(3) = 0.2, find E(X) and E(2X + 1).
5. Find P(X ≥ 2) for the distribution in question 4.
6. A game costs Rs 1. You roll a fair die and receive Rs 5 if it shows a 6, otherwise nothing. Find the expected net gain.
7. Using the game in question 6, for which prize for a 6 would the game be fair?
8. A game has expected net gain of Rs 0.25 per play. What is the expected total for 80 plays, and who does the game favour?
9. A coin is tossed twice. X is the number of heads. Write the distribution and find E(X).
10. Explain why E(X) can be a value that X can never equal.

### Answers

1. 1 − (0.1 + 0.3 + 0.35) = 0.25, so k = 0.25.
2. p = 0.1, 0.2, 0.3, 0.4. E(X) = 0 + 0.2 + 0.6 + 1.2 = 2.
3. The first adds to 1.1 and the third has a negative probability, so both are impossible. Only the second adds to 1 with no negative value, so it is valid.
4. E(X) = 0.4 + 0.4 + 0.6 = 1.4. E(2X + 1) = 2 × 1.4 + 1 = 3.8.
5. 0.2 + 0.2 = 0.4.
6. E(received) = 5 × 1/6 = 5/6. Net gain = 5/6 − 1 = −1/6, about −Rs 0.17.
7. Prize of Rs 6, since 6 × 1/6 = 1 equals the stake.
8. 80 × 0.25 = Rs 20 expected profit for the player. It favours the player.
9. p(0) = 1/4, p(1) = 1/2, p(2) = 1/4. E(X) = 0 + 1/2 + 1/2 = 1.
10. E(X) is a probability-weighted average, like a mean. In question 4 the expectation is 1.4, yet X only takes whole numbers.

## Where marks are usually lost

* Not checking that the probabilities total 1, so an arithmetic slip goes unseen.
* Counting only one order when a value can happen in two ways.
* Forgetting to change the probabilities when there is no replacement.
* Dividing the sum of x p(x) by the number of values.
* Writing E(X²) as the square of E(X).
* Giving the prize instead of the net gain, or subtracting the stake twice.
* Stating an expected loss as a positive number without saying it is a loss.
* Leaving a fair-game answer without a short check that the expectation is zero.
* Describing an expected value as what will happen on the next play.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International Education). Topic 12, sections 12.1 and 12.2, and the mathematical notation list.
