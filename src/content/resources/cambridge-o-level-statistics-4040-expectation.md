---
title: "Cambridge O Level Statistics (4040): Expectation"
resourceType: "study-guides"
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
description: "Expectation of a discrete variable, expected profit and loss in simple games, fair games and finding a fair stake or prize, for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 12.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "expectation", which the syllabus says includes "expected profit and loss in simple games" and the "idea of a fair game". It relies on section 12.1, building the probability distribution, explained in the [probability distribution study guide](/resources/cambridge-o-level-statistics-4040-probability-distribution-of-a-discrete-variable/). The whole of topic 12 is introduced in the [discrete probability distributions and expectation study guide](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and/). For recall and practice, use the [expectation revision notes](/resources/cambridge-o-level-statistics-4040-expectation-revision-notes/) and the [expectation practice questions](/resources/cambridge-o-level-statistics-4040-expectation-practice/).

## What expectation means

The **expectation** (expected value) of a discrete random variable X is

```
E(X) = Σ x × P(X = x)
```

Multiply each value by its probability and add. E(X) is the **long-run mean** of X: if the experiment were repeated a very large number of times, the average of the results would settle close to E(X).

Three consequences are tested:

- E(X) need not be a value X can take. The expected score on a fair die is 3.5, which never appears.
- E(X) says nothing certain about one trial. It describes what happens on average over many.
- Over n independent repetitions the expected **total** is n × E(X).

## Worked example 1: expectation from a table

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.1 | 0.3 | 0.4 | 0.2 |

```
E(X) = 0 × 0.1 + 1 × 0.3 + 2 × 0.4 + 3 × 0.2
     = 0 + 0.3 + 0.8 + 0.6 = 1.7
```

A quick sense check: E(X) must lie between the smallest and largest values of X (0 and 3), and it lies nearer the values with the larger probabilities.

## Finding an unknown from a given expectation

If a distribution contains two unknowns and E(X) is given, you have two equations: one from Σp = 1 and one from E(X).

X takes 1, 2, 3 and 4 with probabilities 0.2, a, b and 0.1, and E(X) = 2.3.

```
Σp = 1:   0.2 + a + b + 0.1 = 1        →  a + b = 0.7
E(X):     0.2 + 2a + 3b + 0.4 = 2.3    →  2a + 3b = 1.7
From the first, a = 0.7 − b, so 1.4 − 2b + 3b = 1.7, giving b = 0.3 and a = 0.4.
```

Check: 1 × 0.2 + 2 × 0.4 + 3 × 0.3 + 4 × 0.1 = 2.3.

## Expected profit and loss in games

A game usually has a **cost to play** (the stake) and **prizes**. Two variables can be used:

- **winnings**: the amount the player receives;
- **profit**: winnings minus the cost to play, which can be negative.

```
expected profit = expected winnings − cost to play
```

Either work out E(winnings) and subtract the cost, or build the distribution of profit directly and find its expectation. Both give the same answer. Building the profit table is safer when a winning prize already includes the stake returned; read the wording carefully.

### Worked example 2: a spinner game

A spinner has five equal sections. Three say "lose", one pays Rs 5 and one pays Rs 20. It costs Rs 6 to play.

```
E(winnings) = 0 × 3/5 + 5 × 1/5 + 20 × 1/5 = 1 + 4 = Rs 5
expected profit = 5 − 6 = −Rs 1 per game
```

The player expects to lose Rs 1 per game on average. The organiser expects to gain Rs 1 per game, so over 300 games the organiser expects a profit of about Rs 300.

As a profit table:

| Profit (Rs) | −6 | −1 | 14 |
|---|---|---|---|
| Probability | 3/5 | 1/5 | 1/5 |

E(profit) = −18/5 − 1/5 + 14/5 = −5/5 = −1, the same answer.

### Worked example 3: a selection game without replacement

A bag holds 2 gold and 3 white balls. A player pays Rs 10 and takes two balls without replacement. Two gold balls win Rs 30, one gold ball wins Rs 10, and no gold ball wins nothing.

```
P(2 gold) = 2/5 × 1/4 = 1/10
P(1 gold) = 2/5 × 3/4 + 3/5 × 2/4 = 3/5
P(0 gold) = 3/5 × 2/4 = 3/10        check: 1/10 + 6/10 + 3/10 = 1

E(winnings) = 30 × 1/10 + 10 × 3/5 + 0 × 3/10 = 3 + 6 = Rs 9
expected profit = 9 − 10 = −Rs 1 per game
```

Here winning Rs 10 for one gold ball means a profit of zero, not Rs 10, because the stake has been paid.

## The idea of a fair game

A game is **fair** when the player's expected profit is zero: the expected winnings equal the cost to play. Neither the player nor the organiser gains in the long run.

Fair does not mean "every player breaks even". In Worked example 2 a fair price would let individual players win Rs 15 or lose Rs 5, but the average over many games would be zero.

### Finding a fair cost

Set the cost equal to E(winnings). In Worked example 2, E(winnings) = Rs 5, so a fair cost is **Rs 5**.

### Finding a fair prize

Keep the cost at Rs 6 and change the top prize to Rs w:

```
E(winnings) = 5 × 1/5 + w × 1/5 = 1 + w/5
Fair:  1 + w/5 = 6   →   w = 25
```

The top prize must rise to **Rs 25**.

### Why real games are not fair

Raffles, fairground stalls and charity games are designed so that the organiser's expected profit is positive; it covers costs and raises money. When asked to advise an organiser, state the expected profit per game, multiply by the expected number of games, and comment that the actual total will vary.

## Common mistakes

- Dividing Σxp by the number of values, as if finding an ordinary mean.
- Forgetting to subtract the cost to play, or subtracting it twice when the prize table already shows profit.
- Treating a returned stake as profit.
- Giving the player's expected profit when the organiser's is asked for; they have opposite signs.
- Saying a fair game means nobody loses.
- Rounding probabilities before multiplying; keep fractions until the end.
- Stating an expected value with no units or no "per game".

## Exam technique for the command words

- **Calculate** E(X): show each x × p product, then the sum.
- **Find the expected profit**: state whose profit, give it per game with units, and show the subtraction of the cost.
- **Show that the game is fair** or **not fair**: compare E(winnings) with the cost, or show E(profit) = 0, and finish with a sentence.
- **Find the cost (or prize) for a fair game**: write the equation E(winnings) = cost, then solve.
- **Comment** or **Advise**: use the expected profit, scale it to the number of games, and note that real results vary from the expected value.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 12.2: expectation, including expected profit and loss in simple games and the idea of a fair game.
