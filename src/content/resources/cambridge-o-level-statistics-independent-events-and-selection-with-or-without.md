---
title: "Cambridge O Level Statistics: Independent events and selection with or without replacement (4040)"
seoTitle: "O Level Statistics 4040 Independent Events Guide"
resourceType: "study-guides"
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
description: "Study guide to independent events, the multiplication rule and tree diagrams for selections with and without replacement, for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers part of topic 11, "Elementary ideas of probability", in the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027. The syllabus text for this topic asks for the treatment of independent events, and for selections made with or without replacement. The course is not tiered. Mutually exclusive events are the other half of the same topic and are not taught here.

Useful links: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/), the [revision notes](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without-practice/). If you want to see where you stand first, try the [free 10-minute diagnostics](/diagnostics/). Averages and spread are in [averages: mean, median, mode and modal class](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/).

## What this unit covers

| Outcome | What you must be able to do |
|---|---|
| Independent events | Say what independence means, and decide whether two events are independent |
| Multiplication rule | Find the probability that independent events all happen |
| Selection with replacement | Handle repeated selections where the probabilities do not change |
| Selection without replacement | Handle repeated selections where the probabilities change after each pick |
| Tree diagrams | Draw and use a tree diagram for two or three stages, with either kind of selection |

The notation used here is P(A) for the probability of the event A, and P(A|B) for the probability of A given B. The symbols ∪ (union) and ∩ (intersection) are used for "or" and "and".

## Independent events

Two events are **independent** if the outcome of one has no effect on the probability of the other. Flipping a coin and rolling a die are independent: the coin cannot influence the die.

In symbols, A and B are independent when P(A|B) = P(A). Knowing that B happened does not change the chance of A.

### The multiplication rule

If A and B are independent, then

```
P(A and B) = P(A ∩ B) = P(A) × P(B)
```

This extends to any number of independent events: multiply all the probabilities.

You also need the addition rule for "or" when the events are not mutually exclusive:

```
P(A or B) = P(A) + P(B) − P(A and B)
```

### Worked example 1

Events A and B are independent, with P(A) = 0.4 and P(B) = 0.3. Find P(A and B), P(A or B) and the probability that neither happens.

```
P(A and B) = 0.4 × 0.3 = 0.12
P(A or B)  = 0.4 + 0.3 − 0.12 = 0.58
P(neither) = P(not A) × P(not B) = 0.6 × 0.7 = 0.42
```

Check: 0.58 + 0.42 = 1, as it must, because "at least one" and "neither" cover every outcome.

Notice that "not A" and "not B" are also independent. If A and B are independent, so are their complements.

### Testing for independence

To test whether two events are independent, work out P(A), P(B) and P(A and B) from the data, then check whether P(A) × P(B) equals P(A and B). State your conclusion in words.

### Worked example 2

Of 80 pupils, 32 study French, 20 study Art and 8 study both. Are "studies French" and "studies Art" independent?

```
P(French) = 32/80 = 0.4
P(Art)    = 20/80 = 0.25
P(French) × P(Art) = 0.4 × 0.25 = 0.1
P(French and Art)  = 8/80 = 0.1
```

The two values are equal, so the events are independent.

Now suppose 12 pupils studied both. Then P(French and Art) = 12/80 = 0.15, which is not 0.1, so the events would not be independent. Choosing Art would then be linked to choosing French.

### Worked example 3: repeated trials

A pupil is late on any day with probability 0.1, independently from day to day. Over three days, find the probability that the pupil is late (a) never, (b) exactly once, (c) at least once.

```
(a) Never late: 0.9 × 0.9 × 0.9 = 0.729
(b) Exactly once: the late day can be first, second or third.
    Each order has probability 0.1 × 0.9 × 0.9 = 0.081
    3 × 0.081 = 0.243
(c) At least once = 1 − P(never) = 1 − 0.729 = 0.271
```

Two habits help here. First, list the different orders in which "exactly once" can happen, and add them. Second, for "at least one", use 1 − P(none).

## Selection with replacement

Suppose items are picked at random from a collection and each item is put back before the next pick. The collection is the same every time, so the picks are independent and the probabilities on a tree diagram do not change from stage to stage.

## Selection without replacement

If an item is not put back, the collection shrinks. The second pick depends on what the first pick was, so the picks are not independent. You must adjust both the number of the type you want and the total.

The multiplication rule still works, but the second factor is a conditional probability:

```
P(first is X and second is Y) = P(first is X) × P(second is Y given first is X)
```

## Tree diagrams

A tree diagram shows each stage as a set of branches. Each branch carries a probability. The rules are:

1. The probabilities on the branches leaving any one point add up to 1.
2. To find the probability of a path, multiply along the branches.
3. To find the probability of an outcome that can happen by several paths, add the path probabilities.

A tree with two stages and two outcomes at each stage looks like this in text form:

```
Start ── First pick ── Second pick ── Path probability
         R (a/n) ───── R ───────────── a/n × (a−1)/(n−1)   [without replacement]
                  └──── B ───────────── a/n × b/(n−1)
         B (b/n) ───── R ───────────── b/n × a/(n−1)
                  └──── B ───────────── b/n × (b−1)/(n−1)
```

With replacement, every second-stage branch uses the full total n and the original counts.

### Worked example 4: both methods on the same bag

A bag holds 5 red, 3 blue and 2 yellow counters (10 in all). Two counters are picked. Find the probability that they are the same colour (a) with replacement, (b) without replacement.

```
(a) With replacement:
    P(RR) = 5/10 × 5/10 = 25/100
    P(BB) = 3/10 × 3/10 = 9/100
    P(YY) = 2/10 × 2/10 = 4/100
    Total = 38/100 = 0.38

(b) Without replacement:
    P(RR) = 5/10 × 4/9 = 20/90
    P(BB) = 3/10 × 2/9 = 6/90
    P(YY) = 2/10 × 1/9 = 2/90
    Total = 28/90 = 14/45 ≈ 0.311
```

The probability of matching is lower without replacement. Once you take out one colour, there are fewer of it left to match. So the probability of two different colours without replacement is 1 − 14/45 = 31/45.

### Worked example 5: three picks without replacement

A box holds 12 fuses, of which 4 are faulty. Three fuses are picked at random without replacement. Find the probability that (a) exactly one is faulty, (b) at least one is faulty.

Write F for faulty and O for working (4 faulty, 8 working).

```
Order F, O, O: 4/12 × 8/11 × 7/10 = 224/1320
Order O, F, O: 8/12 × 4/11 × 7/10 = 224/1320
Order O, O, F: 8/12 × 7/11 × 4/10 = 224/1320

(a) Exactly one faulty = 3 × 224/1320 = 672/1320 = 28/55 ≈ 0.509

(b) P(none faulty) = 8/12 × 7/11 × 6/10 = 336/1320 = 14/55
    P(at least one) = 1 − 14/55 = 41/55 ≈ 0.745
```

All three orders give the same product because the same numbers appear in the numerators and denominators, only in a different order. You may use this to save time, but show that you have counted the three orders.

### Worked example 6: waiting for the first success

A bag has 3 red counters and 6 green counters. Counters are picked one at a time. Find the probability that the first red counter appears on the third pick, (a) with replacement, (b) without replacement.

```
(a) G, G, R with replacement: 6/9 × 6/9 × 3/9 = 108/729 = 4/27 ≈ 0.148
(b) G, G, R without replacement: 6/9 × 5/8 × 3/7 = 90/504 = 5/28 ≈ 0.179
```

### Worked example 7: a tree with two different sources

Bag A has 4 red and 6 white counters. Bag B has 3 red and 2 white counters. One counter is taken from A, then two from B without replacement. Find the probability that all three counters are red.

The choice from A does not affect bag B, so the two stages are independent. Within bag B the two picks are dependent.

```
P(red from A)          = 4/10
P(both red from B)     = 3/5 × 2/4 = 6/20 = 3/10
P(all three red)       = 4/10 × 3/10 = 12/100 = 3/25 = 0.12
```

This is a common pattern in probability questions: independence between separate sources, and dependence inside a single source when there is no replacement.

## How to choose your method

```
1. Is each pick put back?
   Yes: probabilities are the same at every stage.
   No:  reduce the total, and reduce the count of whatever was removed.
2. Draw the tree. Label every branch with its probability.
3. Check each set of branches from one point adds to 1.
4. Multiply along paths. Add paths that give the outcome you want.
5. For "at least one", consider 1 − P(none).
6. Give the answer as a fraction or a decimal to 3 significant figures,
   and say which you are using if the question does not.
```

## Common errors

- Adding probabilities along a branch instead of multiplying.
- Keeping the same denominator in the second stage when the question says "without replacement".
- Reducing the denominator but forgetting to reduce the numerator, or the reverse.
- Reducing the numerator of the wrong colour: if the first counter is red, red goes down by one and blue stays the same.
- Missing paths: "exactly one" of three needs three orders, and "one of each colour" needs two orders.
- Assuming two events are independent without testing, especially when a table of data is given.
- Confusing independent with mutually exclusive. Independent events can happen together. Mutually exclusive events cannot happen together, so if both have non-zero probability they are not independent.
- Rounding too early. Keep fractions or full decimals until the last line.

## Next steps

Condense this unit with the [revision notes](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without-revision-notes/), then test yourself with the [practice questions](/resources/cambridge-o-level-statistics-independent-events-and-selection-with-or-without-practice/). Tick off what you have covered on the [checklist](/checklists/cambridge/o-level/statistics/), and use the [free diagnostics](/diagnostics/) to find your weak spots. Back to the [subject hub](/boards/cambridge/o-level/statistics/).

## Official syllabus

This page follows the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment (Cambridge International), topic 11 "Elementary ideas of probability".
