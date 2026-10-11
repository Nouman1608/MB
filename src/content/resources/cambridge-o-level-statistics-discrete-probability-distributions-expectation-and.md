---
title: "Cambridge O Level Statistics: Discrete probability distributions, expectation and fair games (4040)"
seoTitle: "O Level Statistics 4040 Probability Distributions Guide"
resourceType: "study-guides"
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
description: "Study guide to forming a discrete probability distribution, finding expectation and judging fair games, for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers topic 12 of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027: section 12.1 (forming the probability distribution of a discrete variable) and section 12.2 (expectation, expected profit and loss in simple games, and the idea of a fair game). The syllabus is not tiered, so everything here is for every candidate. You need the basic probability from topic 11 first: mutually exclusive events, independent events, and selections made with or without replacement.

For quick recall use the [revision notes](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and-revision-notes/). To test yourself use the [practice questions](/resources/cambridge-o-level-statistics-discrete-probability-distributions-expectation-and-practice/). The course page is [O Level Statistics](/boards/cambridge/o-level/statistics/), the printable list is the [syllabus checklist](/checklists/cambridge/o-level/statistics/), and the [free diagnostics](/diagnostics/) show which topics to revisit. If relative frequencies feel unfamiliar, read [frequency distributions](/resources/cambridge-o-level-statistics-frequency-distributions/) first.

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 12.1 | Form the probability distribution of a discrete variable: list every value with its probability, from a described experiment, a rule or observed data. |
| 12.2 | Find the expectation E(X), including E[g(X)]. |
| 12.2 | Work out expected profit and loss in simple games. |
| 12.2 | Explain the idea of a fair game and use it to find a stake or a prize. |

The syllabus notation is used throughout: X is the random variable, x a value it can take, p(x) = P(X = x), and E(X) the expectation.

## Random variables and the probability distribution (12.1)

A random variable X is a quantity whose value depends on chance, such as the number of green counters in a handful or the score on a spinner. It is discrete when it takes separate values that you can list: 0, 1, 2, 3 and so on.

The probability distribution of X lists every possible value x with its probability p(x). It is usually shown as a table.

| x | x₁ | x₂ | x₃ | … |
|---|---|---|---|---|
| p(x) | p₁ | p₂ | p₃ | … |

Two rules always hold:

* Every probability is between 0 and 1.
* The probabilities add up to 1, written Σ p(x) = 1. The values are mutually exclusive and cover every outcome, so nothing is left over.

The second rule is your main check. If your table does not total exactly 1, something is missing or wrong.

### Forming a distribution from a described experiment

The method has four steps.

1. Decide what X counts and list its possible values.
2. For each value, find which outcomes give it.
3. Work out each probability using topic 11 methods (a tree diagram, products for independent events, sums for exclusive events).
4. Write the table and check the total is 1.

**Worked example 1.** A bag holds 3 green and 5 yellow counters. Two are taken without replacement. X is the number of green counters.

X can be 0, 1 or 2.

```
p(0) = 5/8 × 4/7 = 20/56 = 5/14
p(1) = (3/8 × 5/7) + (5/8 × 3/7) = 30/56 = 15/28
p(2) = 3/8 × 2/7 = 6/56 = 3/28
```

The value 1 can happen in two orders (green then yellow, or yellow then green), so two products are added.

| x | 0 | 1 | 2 |
|---|---|---|---|
| p(x) | 5/14 | 15/28 | 3/28 |

Check: 10/28 + 15/28 + 3/28 = 28/28 = 1.

If the counters were replaced after each draw, the draws would be independent and every product would use 3/8 and 5/8 only.

### Forming a distribution from a rule

Sometimes the probabilities are given by a formula with an unknown constant. Use Σ p(x) = 1 to find it.

**Worked example 2.** A variable X takes the values 1, 2, 3, 4 with p(x) = k(x + 2).

```
p(1) + p(2) + p(3) + p(4) = 3k + 4k + 5k + 6k = 18k
18k = 1, so k = 1/18
```

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| p(x) | 3/18 | 4/18 | 5/18 | 6/18 |

### Forming a distribution from observed data

When there is no theory, use relative frequency as the estimate of probability: p(x) = frequency of x ÷ total frequency.

**Worked example 3.** A factory inspects 80 rolls of fabric and records the number of faults in each roll.

| Faults x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Rolls | 36 | 28 | 12 | 4 |

Divide each frequency by 80.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| p(x) | 0.45 | 0.35 | 0.15 | 0.05 |

The total is 1. These are estimates from one sample, so a different sample would give slightly different values.

## Expectation (12.2)

The expectation E(X) is the average you would see over very many repeats of the experiment: the mean of the results settles close to E(X). It is also called the expected value.

**Formula:** E(X) = Σ x p(x)

Multiply each value by its probability, then add.

Continuing worked example 1:

```
E(X) = 0 × 5/14 + 1 × 15/28 + 2 × 3/28
     = 0 + 15/28 + 6/28
     = 21/28 = 3/4
```

So on average 0.75 of a green counter is drawn in each pair. The expectation does not have to be a value X can actually take. Here X is never 0.75, and that is fine.

For worked example 2:

```
E(X) = (1 × 3 + 2 × 4 + 3 × 5 + 4 × 6)/18 = (3 + 8 + 15 + 24)/18 = 50/18 = 25/9
```

For worked example 3: E(X) = 0 × 0.45 + 1 × 0.35 + 2 × 0.15 + 3 × 0.05 = 0.35 + 0.30 + 0.15 = 0.80. The expected number of faults per roll is 0.8, which matches the mean of the observed data (64 faults in 80 rolls).

### The expectation of a function of X

The syllabus notation includes E[g(X)], the expectation of a function g(X). Apply the function to each value, keep the same probability, then add.

**Formula:** E[g(X)] = Σ g(x) p(x)

**Worked example 4.** Using the fault distribution from example 3, find E(X²) and E(3X + 2).

```
E(X²) = 0² × 0.45 + 1² × 0.35 + 2² × 0.15 + 3² × 0.05
      = 0 + 0.35 + 0.60 + 0.45 = 1.40

E(3X + 2) = 2 × 0.45 + 5 × 0.35 + 8 × 0.15 + 11 × 0.05
          = 0.90 + 1.75 + 1.20 + 0.55 = 4.40
```

Notice that E(X²) = 1.40 is not the same as [E(X)]² = 0.64. Squaring the expectation and finding the expectation of the square are different things.

For a straight-line function, a shortcut works: E(aX + b) = a E(X) + b. Here 3 × 0.80 + 2 = 4.40, which agrees. The shortcut does not work for X² or other curves.

## Expected profit and loss in games (12.2)

A simple game has a stake (what you pay to play) and one or more outcomes, each with a probability and a payout. To find the expected profit or loss, work with the net gain for each outcome.

**Net gain = amount received − stake**

Then use E(net gain) = Σ (net gain) × probability. A positive answer is an expected profit for the player. A negative answer is an expected loss. Over n plays the expected total is n × E(net gain).

**Worked example 5.** To play, you pay Rs 4 and roll a fair die. A 6 pays Rs 15. A 4 or a 5 pays Rs 3. Any other score pays nothing.

Method one, using net gains:

| Score | 6 | 4 or 5 | 1, 2 or 3 |
|---|---|---|---|
| Net gain | 11 | −1 | −4 |
| Probability | 1/6 | 2/6 | 3/6 |

```
E(net gain) = 11 × 1/6 + (−1) × 2/6 + (−4) × 3/6
            = (11 − 2 − 12)/6 = −3/6 = −0.50
```

Method two, using the amount received: E(received) = 15 × 1/6 + 3 × 2/6 = 3.50, and 3.50 − 4 = −0.50. Both methods agree.

The player expects to lose Rs 0.50 per play. Over 200 plays the expected loss is 200 × 0.50 = Rs 100. This is an average. Any single play is a win or a loss of a whole number of rupees.

## The idea of a fair game (12.2)

A game is fair when the expected net gain is zero, so that neither the player nor the organiser is expected to gain or lose in the long run. Equivalently, the stake equals the expected amount received.

* E(net gain) > 0: the game favours the player.
* E(net gain) = 0: the game is fair.
* E(net gain) < 0: the game favours the organiser.

In worked example 5 the fair stake is Rs 3.50, because that is E(received).

**Worked example 6.** You pay Rs 5 to take one card at random from 10 cards. Two of the cards win a prize of Rs w, and the rest win nothing. Find w so that the game is fair.

```
E(received) = w × 2/10 = w/5
Fair: w/5 = 5, so w = 25
```

Check using net gains: (25 − 5) × 0.2 + (−5) × 0.8 = 4 − 4 = 0. The prize must be Rs 25. The stake was paid up front and is not given back.

When a question says "wins Rs 25", read it as the amount received unless it says the stake is returned as well. State your reading in the answer.

## Common errors

* Probabilities that do not add to 1, left unchecked.
* Forgetting that two orders give a value of 1 in a without-replacement example, so only one product is counted.
* Computing Σ p(x) × x with the wrong x column, or dividing the sum by the number of values. Expectation is not the plain mean of the x values.
* Giving E(X²) as [E(X)]².
* Treating the prize as the profit. Subtract the stake.
* Calling a game fair because the expected profit is small. Fair means exactly zero.
* Rounding E(X) to a whole number because X is whole. Keep the exact value or a sensible decimal.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International Education). Topic 12, sections 12.1 and 12.2, with the mathematical notation list at the end of the syllabus.
