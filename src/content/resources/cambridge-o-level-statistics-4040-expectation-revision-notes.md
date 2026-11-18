---
title: "Cambridge O Level Statistics (4040): Expectation -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 12 – Probability distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 12.2
syllabusTopics:
  - qualification: "o-level"
    topic: "probability-distributions-4040"
    subtopic: "expectation-4040"
description: "Condensed notes on E(X), expected profit and loss in games, fair games and fair stakes or prizes, with exam traps and a self-test, for O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 12.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: expectation, including expected profit and loss in simple games and the idea of a fair game. The full explanation and worked examples are in the [expectation study guide](/resources/cambridge-o-level-statistics-4040-expectation/), and exam-style questions are in the [expectation practice questions](/resources/cambridge-o-level-statistics-4040-expectation-practice/). Building the distribution first is revised in the [probability distribution revision notes](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable-revision-notes/).

## Core recall

```
E(X) = Σ x × P(X = x)
expected total over n plays = n × E(X)
expected profit = E(winnings) − cost to play
fair game: expected profit = 0, so E(winnings) = cost to play
```

- E(X) is the long-run mean, not a guaranteed result.
- E(X) need not be a possible value of X.
- E(X) lies between the smallest and largest values of X.
- The organiser's expected profit is the negative of the player's.

## Key terms

| Term | Meaning |
|---|---|
| Expectation, E(X) | Long-run average value of X: Σ x p |
| Winnings | Amount the player receives |
| Cost to play (stake) | Amount the player pays to take part |
| Profit | Winnings − cost; negative means a loss |
| Expected profit | Mean profit per game in the long run |
| Fair game | Expected profit for the player is zero |
| Fair cost | Cost equal to E(winnings) |
| Fair prize | Prize that makes E(winnings) equal to the cost |

## Method for a game question

1. List the outcomes and their probabilities (Σp = 1).
2. Write the winnings for each outcome.
3. E(winnings) = Σ winnings × probability.
4. Expected profit = E(winnings) − cost.
5. Interpret: per game, whose profit, with units; scale to n games if asked.

## Small worked reminders

### E(X) for heads in three coin tosses

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P | 1/8 | 3/8 | 3/8 | 1/8 |

E(X) = (0 + 3 + 6 + 3) ÷ 8 = 12 ÷ 8 = 1.5.

### A raffle

200 tickets at Rs 5 each. Prizes: one of Rs 300 and two of Rs 50.

```
E(winnings per ticket) = (300 + 2 × 50) ÷ 200 = Rs 2
expected profit per ticket = 2 − 5 = −Rs 3
organiser, if all 200 sell: 1000 − 400 = Rs 600 (= 200 × 3)
```

### Fair cost and fair prize

A game pays Rs 12 with probability 1/4 and Rs 0 otherwise.

- Fair cost: E(winnings) = 12 × 1/4 = Rs 3.
- If the cost is Rs 4, the fair prize w satisfies w × 1/4 = 4, so w = Rs 16.

### Two unknowns from Σp = 1 and E(X)

X = 1, 2, 3 with probabilities a, b, 0.2 and E(X) = 1.9:

```
a + b = 0.8
a + 2b + 0.6 = 1.9  →  a + 2b = 1.3
Subtract: b = 0.5, a = 0.3
```

## Profit tables

When a prize is stated as "wins Rs 10", the profit is Rs 10 minus the cost. When it is stated as "receives back the stake plus Rs 10", the profit is Rs 10. Build a profit table if in doubt:

| Outcome | Winnings | Profit (cost Rs 4) |
|---|---|---|
| Lose | 0 | −4 |
| Small prize | 4 | 0 |
| Big prize | 20 | 16 |

## Exam traps

- Dividing Σxp by the number of values.
- Forgetting to subtract the cost, or subtracting it from a table that already shows profit.
- Calling "wins back the stake" a profit.
- Mixing up the player's and organiser's expected profit.
- Rounding probabilities early.
- Saying a fair game means nobody loses money.
- No units, or no "per game".

## Quick self-test

1. Find E(X) when X takes 2, 4, 6 with probabilities 0.5, 0.3, 0.2.
2. Find the expected score on a fair four-sided die numbered 1 to 4.
3. E(X) = 2.4 for one play. What total do you expect over 50 plays?
4. A game costs Rs 5 and E(winnings) = Rs 4.20. Find the expected profit per game for the player.
5. In question 4, what is the organiser's expected profit over 100 games?
6. Define a fair game.
7. A game pays Rs 18 with probability 1/6. Find the fair cost.
8. A game costs Rs 6 and pays w with probability 1/5, otherwise nothing. Find w for a fair game.
9. X = 0, 1, 2 with probabilities p, 0.5, q and E(X) = 0.9. Find p and q.
10. A player pays Rs 2 and receives Rs 2 back with probability 0.3. What is the profit in that case?
11. Why can E(X) be a value that X never takes?
12. A game is fair. Does every player break even?

### Answers

1. 1 + 1.2 + 1.2 = 3.4.
2. (1 + 2 + 3 + 4) ÷ 4 = 2.5.
3. 50 × 2.4 = 120.
4. 4.20 − 5 = −Rs 0.80, a loss of 80 paisa per game.
5. 100 × 0.80 = Rs 80.
6. A game in which the player's expected profit is zero.
7. 18 × 1/6 = Rs 3.
8. w ÷ 5 = 6, so w = Rs 30.
9. 0.5 + 2q = 0.9, so q = 0.2; p = 1 − 0.5 − 0.2 = 0.3.
10. Zero.
11. It is a long-run average, which can fall between the possible values.
12. No. Individual players win or lose; only the long-run average profit is zero.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 12.2: expectation, including expected profit and loss in simple games and the idea of a fair game.
