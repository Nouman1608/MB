---
title: "Cambridge O Level Statistics: Independent events and selection with or without replacement (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Independent Events Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Independent events and selection with or without replacement"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 26
syllabusTopics:
  - qualification: "o-level"
    topic: "elementary-ideas-of-probability-4040"
description: "Condensed revision notes on independent events, the multiplication rule and tree diagrams with and without replacement, for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for part of topic 11, "Elementary ideas of probability", in the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027. They cover independent events, the multiplication rule, and selections made with or without replacement. For full explanations and longer worked examples, read the [study guide](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without/) first.

Related pages: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/), the [practice questions](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without-practice/) and the [free 10-minute diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Independent events | The outcome of one event does not change the probability of the other |
| With replacement | Each item is returned before the next pick, so every pick faces the same collection |
| Without replacement | Items are kept out, so the collection shrinks and later probabilities change |
| Complement | "Not A", with P(not A) = 1 − P(A) |
| Conditional probability | P(A|B) is the probability of A given that B has happened |

## Formulas and rules

| Situation | Rule |
|---|---|
| Independent A and B | P(A ∩ B) = P(A) × P(B) |
| Independent, test | A and B are independent if P(A ∩ B) = P(A) × P(B), equivalently P(A|B) = P(A) |
| Three independent events | P(A ∩ B ∩ C) = P(A) × P(B) × P(C) |
| Either or both | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Neither (independent) | P(not A and not B) = (1 − P(A)) × (1 − P(B)) |
| At least one | 1 − P(none) |
| Dependent picks | P(X then Y) = P(X) × P(Y given X) |

## Method in steps: tree diagrams

```
1. Decide: with or without replacement?
2. Draw one stage per pick. Put an outcome on each branch.
3. Write each probability on its branch.
     With replacement:    same numbers at every stage.
     Without replacement: total falls by 1 each stage,
                          and the count of the type just picked falls by 1.
4. Check: branches leaving each point add to 1.
5. Multiply along each path you need.
6. Add the paths that give the required outcome.
7. If the list of paths is long, use 1 − P(the paths you do not want).
```

## With replacement versus without replacement

| Feature | With replacement | Without replacement |
|---|---|---|
| Picks independent? | Yes | No |
| Second-stage denominator | Same as first | One less |
| Second-stage numerator | Same counts | One less for the type removed |
| Two picks, same type | (a/n)² | a/n × (a−1)/(n−1) |
| Matching likelihood | Higher | Lower |

### Reminder: same bag, both methods

A bag has 4 black and 5 white counters (9 in all). Two are picked.

```
With replacement:
  P(both black) = 4/9 × 4/9 = 16/81
  P(different colours) = 4/9 × 5/9 + 5/9 × 4/9 = 40/81

Without replacement:
  P(both black) = 4/9 × 3/8 = 12/72 = 1/6
  P(different colours) = 4/9 × 5/8 + 5/9 × 4/8 = 40/72 = 5/9
```

Without replacement, different colours is more likely (5/9 against 40/81), which fits: removing one colour makes it less likely to draw it again.

## Must-know distinctions

- Independent is about probabilities: one event does not change the other's chance.
- Mutually exclusive is about outcomes: the events cannot both happen. If both have a non-zero probability, mutually exclusive events are never independent.
- "With replacement" means independent picks. "Without replacement" means dependent picks.
- "And" along a path means multiply. "Or" between paths means add.
- P(A ∪ B) uses the subtraction of the overlap unless the events are mutually exclusive.

## Small worked reminders

### Testing independence from a table

A club has 50 members. 20 are in the choir, 10 are in the band, and 4 are in both.

```
P(choir) × P(band) = 20/50 × 10/50 = 200/2500 = 0.08
P(choir and band)  = 4/50 = 0.08
```

The values are equal, so choir and band are independent.

### At least one, repeated independent trials

A signal gets through on any attempt with probability 0.7, independently. Find the probability that it gets through at least once in two attempts.

```
P(fails both) = 0.3 × 0.3 = 0.09
P(at least once) = 1 − 0.09 = 0.91
```

### Three picks without replacement

A tray holds 6 cakes: 3 plain and 3 iced. Three are taken without replacement. Find the probability that all three are iced.

```
3/6 × 2/5 × 1/4 = 6/120 = 1/20 = 0.05
```

### Exactly one of two independent events

A and B are independent with P(A) = 0.5 and P(B) = 0.2. Find the probability that exactly one of them happens.

```
A but not B:  0.5 × 0.8 = 0.40
B but not A:  0.5 × 0.2 = 0.10
Exactly one:  0.40 + 0.10 = 0.50
```

### First success on the second pick

A bag has 2 red and 6 yellow counters. Counters are picked without replacement. Find the probability that the first red appears on the second pick.

```
yellow then red: 6/8 × 2/7 = 12/56 = 3/14
```

## Wording decoder

| Phrase in the question | What it tells you |
|---|---|
| "put back", "returned", "replaced" | With replacement: same probabilities each stage |
| "not replaced", "kept", "taken out one after another" | Without replacement: adjust the numbers |
| "chosen at random from the group" with two or more picked at once | Treat as without replacement |
| "at least one" | Use 1 − P(none) |
| "exactly one" | Add every order in which one happens |
| "in that order" | One path only |
| "in any order" | Add the paths for every order |
| "independent" | Multiply, and do not change the probabilities between stages |
| "show that" | Every line of the working must appear |

## Checks before you move on

- The probabilities on a tree, taken over all complete paths, add to 1. For the bag with 4 black and 5 white counters without replacement, the four paths give 1/6 + 5/18 + 5/18 + 5/18 = 1. If your total is not 1, a path is missing or a branch is wrong.
- A probability must lie between 0 and 1. A value above 1 means a path was added when it should have been multiplied.
- With replacement, the answer to "both the same type" cannot be smaller than the answer without replacement for the same bag. If your two answers are the wrong way round, look again at the second-stage numbers.

## Quick self-test

1. A and B are independent with P(A) = 1/2 and P(B) = 1/3. Find P(A ∩ B).
2. A fair die is rolled and a coin is flipped. Find the probability of a 5 and a head. Give your answer as a fraction.
3. A bag has 3 red and 5 blue counters. Two are picked without replacement. Find P(both red).
4. If P(A) = 1/4, P(B) = 1/3 and A and B are independent, find P(A ∪ B).
5. A component fails with probability 0.3, independently of the others. Find the probability that three components all work.
6. Using the same components as question 5, find the probability that at least one of the three fails.
7. A bag has 5 red and 3 blue counters. Two are picked with replacement. Find P(both red).
8. Using the bag in question 7, find P(both red) when the picks are made without replacement.
9. Using the bag in question 7, find P(one red and one blue) without replacement.
10. A box has 6 pens: 3 blue, 2 black and 1 red. Three are picked without replacement. Find the probability that they are picked in the order blue, black, red.

### Answers

1. 1/2 × 1/3 = **1/6**.
2. 1/6 × 1/2 = **1/12**.
3. 3/8 × 2/7 = 6/56 = **3/28**.
4. 1/4 + 1/3 − 1/12 = 6/12 = **1/2**.
5. 0.7³ = **0.343**.
6. 1 − 0.343 = **0.657**.
7. (5/8)² = **25/64**.
8. 5/8 × 4/7 = 20/56 = **5/14**.
9. 5/8 × 3/7 + 3/8 × 5/7 = 30/56 = **15/28**.
10. 3/6 × 2/5 × 1/4 = 6/120 = **1/20**.

## Where marks are usually lost

- Multiplying probabilities that should be added, or adding those that should be multiplied.
- Using the same denominator at the second stage when there is no replacement.
- Forgetting that "one of each colour" can happen in two orders.
- Stopping at the product of one path when the outcome is made of several paths.
- Asserting that events are independent without a check using P(A ∩ B) = P(A) × P(B).
- Treating "mutually exclusive" and "independent" as the same thing.
- Leaving a branch set that does not add to 1, which often signals a missed outcome.
- Rounding a fraction part-way through, then giving an answer that is only approximately right.
- Writing an answer with no working. Show the products so that the method is visible even if an arithmetic slip occurs.

## Official syllabus

These notes follow the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment (Cambridge International), topic 11 "Elementary ideas of probability".
