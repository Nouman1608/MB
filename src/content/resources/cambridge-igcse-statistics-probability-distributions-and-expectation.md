---
title: "Cambridge IGCSE Statistics: Probability distributions and expectation (0479)"
seoTitle: "IGCSE Statistics 0479 Probability Distributions Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Probability distributions and expectation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 34
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-distributions-0479"
description: "Study guide to Topic 8 of Cambridge IGCSE Statistics 0479: building probability distribution tables, using ΣP(x) = 1, and calculating expectation."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is for **Cambridge IGCSE Statistics (0479)**, aligned to the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027. It covers **Topic 8, Probability distributions**, outcomes 8.1 and 8.2. The syllabus lists no extended-only content for this topic, so everything here is for every candidate. Topic 8 builds directly on Topic 7 (probability, including tree diagrams and the addition and multiplication rules).

Related pages: the [revision notes](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation-revision-notes/), the [practice questions](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation-practice/), the [course hub](/boards/cambridge/igcse/statistics/), the [printable checklist](/checklists/cambridge/igcse/statistics/) and the [free diagnostics](/diagnostics/).

## What Topic 8 asks you to do

| Syllabus | What you must be able to do |
|---|---|
| 8.1 | Calculate the probabilities of all possible outcomes in simple cases and present the probability distribution in a table. Know that ΣP(x) is 1. |
| 8.2 | Calculate the expectation of a variable from a probability distribution and solve problems involving expectation. |

## 8.1 Probability distributions

### The idea

A **random variable** is a quantity whose value depends on chance. We write it as a capital letter, such as X, and write a particular value as a small letter, x. For example, X could be the number of heads in three coin tosses, or the score on a spinner.

A **probability distribution** lists every value x that X can take, together with the probability P(x) = P(X = x) of each. It is usually shown as a table.

| x | x₁ | x₂ | x₃ | … |
|---|---|---|---|---|
| P(X = x) | p₁ | p₂ | p₃ | … |

Two facts always hold:

- every probability is between 0 and 1;
- **ΣP(x) = 1**, because exactly one of the listed outcomes must happen.

The second fact is your main checking tool. If your table does not add to 1, there is an error somewhere. It is also how you find a missing probability or an unknown constant.

### Method for building a distribution

1. List every value X can take.
2. Find P(X = x) for each value, using equally likely outcomes, a tree diagram or the rules from Topic 7.
3. Put the values and probabilities in a table.
4. Add the probabilities. They must total 1.

### Worked example 1: a missing constant

A random variable X takes the values 1, 2, 3 and 4, with P(X = x) = k(6 − x). Find k and show the distribution.

```
Sum of the probabilities = k(5) + k(4) + k(3) + k(2) = 14k
ΣP(x) = 1, so 14k = 1, so k = 1/14
```

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 5/14 | 4/14 | 3/14 | 2/14 |

Check: 5 + 4 + 3 + 2 = 14, so the total is 14/14 = 1.

### Worked example 2: a distribution from a tree diagram

A bag holds 4 red and 3 blue counters. Two counters are taken at random without replacement. Let X be the number of red counters taken. Find the distribution of X.

X can be 0, 1 or 2. Use the multiplication rule along the branches of a tree diagram.

```
P(X = 0) = P(blue, blue) = 3/7 × 2/6 = 6/42 = 1/7
P(X = 2) = P(red, red)   = 4/7 × 3/6 = 12/42 = 2/7
P(X = 1) = P(red, blue) + P(blue, red)
         = 4/7 × 3/6 + 3/7 × 4/6 = 12/42 + 12/42 = 24/42 = 4/7
```

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 1/7 | 4/7 | 2/7 |

Check: 1/7 + 4/7 + 2/7 = 1. For X = 1 you must add two routes. Forgetting the second route is the usual reason a table fails the check.

### Worked example 3: a distribution from a table of outcomes

Two fair four-sided spinners, each numbered 1 to 4, are spun. Let X be the larger of the two scores (if they are equal, X is that score). Find the distribution of X.

Draw a table of all 16 equally likely outcomes. The entry is the larger score.

| Spinner 1 \ Spinner 2 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 1 | 2 | 3 | 4 |
| 2 | 2 | 2 | 3 | 4 |
| 3 | 3 | 3 | 3 | 4 |
| 4 | 4 | 4 | 4 | 4 |

Count how often each value appears: one 1, three 2s, five 3s and seven 4s.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 1/16 | 3/16 | 5/16 | 7/16 |

Check: 1 + 3 + 5 + 7 = 16, so the total is 1.

## 8.2 Expectation

### What expectation means

The **expectation** of X, written E(X), is the average value of X over a great many repeats of the situation. It is a weighted average: each value is weighted by its probability.

```
E(X) = Σ x P(x)
```

Take each value, multiply by its own probability, and add up the results.

Expectation is a prediction about the average, not about any single trial. It does not have to be a value that X can actually take.

### Worked example 4: calculating E(X)

Use the distribution from worked example 1.

```
E(X) = 1 × 5/14 + 2 × 4/14 + 3 × 3/14 + 4 × 2/14
     = (5 + 8 + 9 + 8)/14
     = 30/14
     = 15/7  (about 2.14)
```

The expectation, about 2.14, lies between the smallest and largest values. That is a useful quick check. The expectation will always lie in that range, and it will sit closer to the values with larger probabilities.

For worked example 3:

```
E(X) = (1 × 1 + 2 × 3 + 3 × 5 + 4 × 7)/16 = (1 + 6 + 15 + 28)/16 = 50/16 = 25/8 = 3.125
```

The larger score is, on average, above the middle of the range 1 to 4, which makes sense because the larger of two numbers tends to be high.

### Worked example 5: expectation need not be a possible value

For worked example 2, E(X) = 0 × 1/7 + 1 × 4/7 + 2 × 2/7 = 8/7, about 1.14 red counters. You can never take 1.14 counters, but over many repeats of the experiment the average number of red counters is about 1.14. Write the answer as a number. Do not round it to a whole number.

There is also a shortcut here. Each counter drawn is red with probability 4/7, so the expected number of red counters in two draws is 2 × 4/7 = 8/7. The two methods agree.

### Expected frequency: n × p

For n independent repeats of a trial, where an event has probability p each time, the expected number of times it happens is **n × p**. This is just expectation applied to the distribution "1 with probability p, 0 otherwise", repeated n times.

### Worked example 6: expected number

On any day, the probability that a bus is late is 0.12. Find the expected number of late buses in 25 days.

```
Expected number = 25 × 0.12 = 3
```

You expect about 3 late buses. In a real 25-day period the actual number could easily be 2 or 5. Expectation describes the average, not a guarantee.

### Worked example 7: finding unknown probabilities from E(X)

A variable X takes the values 0, 1, 2 and 3. P(X = 0) = 0.1 and P(X = 3) = 0.2. The other two probabilities are a = P(X = 1) and b = P(X = 2). Given that E(X) = 1.7, find a and b.

Use ΣP(x) = 1 first:

```
0.1 + a + b + 0.2 = 1    so    a + b = 0.7
```

Now use the expectation:

```
E(X) = 0 × 0.1 + 1 × a + 2 × b + 3 × 0.2 = 1.7
a + 2b + 0.6 = 1.7       so    a + 2b = 1.1
```

Subtract the first equation from the second: b = 0.4. Then a = 0.7 − 0.4 = 0.3.

Check: 0.3 + 0.8 + 0.6 = 1.7, and 0.1 + 0.3 + 0.4 + 0.2 = 1.

## Problems involving expectation

Many problems define the variable as an amount of money, such as a prize, a cost or a payout. The method does not change. Make a distribution of the amounts, then find E(X).

### Worked example 8: is a game fair?

At a school fair you pay £4 to play. A spinner gives these results:

- with probability 1/10 you win £20;
- with probability 1/4 you win £5;
- otherwise you win nothing.

Let X be the amount you win (the payout).

First find the probability of winning nothing: 1 − 1/10 − 1/4 = 13/20.

| x (£) | 20 | 5 | 0 |
|---|---|---|---|
| P(X = x) | 2/20 | 5/20 | 13/20 |

```
E(X) = 20 × 2/20 + 5 × 5/20 + 0 × 13/20 = 2 + 1.25 = 3.25
```

You pay £4 and expect to receive £3.25 back, so your expected gain per game is 3.25 − 4 = **−£0.75**. A game is **fair** when the expected gain is zero, that is, when the stake equals the expected payout. This game is not fair, and it favours the organiser.

Over 200 plays the expected total gain for a player is 200 × (−0.75) = −£150. For the organiser it is an expected profit of £150.

### Method for expectation problems

1. Decide what the variable X is (a count, a score, a payout).
2. Build the distribution table and check that ΣP(x) = 1.
3. Calculate E(X) = Σ x P(x), keeping fractions or exact decimals until the end.
4. Use the context: subtract a cost or stake if you are asked for a gain or profit, and multiply by the number of repeats if you are asked for a total.
5. Answer in words with units.

## Common errors

- Not checking ΣP(x) = 1. A table that adds to 0.95 or 1.1 cannot be right.
- Averaging the values only. The expectation of the values 1, 2, 3, 4 is not 2.5 unless all four are equally likely.
- Forgetting a route. When X = 1 can happen in two ways, add both.
- Mixing up payout and gain. Expected gain is expected payout minus the stake.
- Rounding E(X) to a whole number because "you cannot have 1.14 counters". Give the number you calculated.
- Treating expectation as a certainty. The actual result of a few trials will usually differ.
- Using n × p when the trials are not independent, or when p changes between trials.

## Where next

Try the [practice questions](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation-practice/), use the [revision notes](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation-revision-notes/) for quick recall, and tick off the topic on the [printable checklist](/checklists/cambridge/igcse/statistics/). The [course hub](/boards/cambridge/igcse/statistics/) lists the other topics, and the [free 10-minute diagnostics](/diagnostics/) show which topics need most work.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Cambridge University Press & Assessment (Cambridge International Education), Topic 8: Probability distributions, learning outcomes 8.1 and 8.2.
