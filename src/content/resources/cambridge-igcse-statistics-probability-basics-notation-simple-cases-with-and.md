---
title: "Cambridge IGCSE Statistics: Probability basics: notation, simple cases with and without replacement, complements and the addition rule (0479)"
seoTitle: "IGCSE Statistics 0479 Probability Basics Study Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Probability basics: notation, simple cases with and without replacement, complements and the addition rule"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 32
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-0479"
description: "Study guide to probability notation, selection with and without replacement, complements and the addition rule for Cambridge IGCSE Statistics, Topic 7."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers outcomes 7.1 to 7.4 of Topic 7 (Probability) in the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. It teaches probability notation, probabilities in simple cases (including selecting with and without replacement), the complement rule and the addition rule. The syllabus has one set of content for all candidates, so there is no tier split. The remaining Topic 7 outcomes (mutually exclusive and independent events, conditional probability and tree diagrams) are a separate unit and are not taught here.

Use it with the [revision notes](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-revision-notes/) and the [practice questions](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-practice/). The [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/) and the [printable checklist](/checklists/cambridge/igcse/statistics/) show where this unit sits in the course. To locate your weak spots before you start, use the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Outcome | What you must be able to do |
|---|---|
| 7.1 | Understand and use P(A), P(A′), P(A ∩ B) and P(A ∪ B) |
| 7.2 | Calculate probabilities in simple cases, including selections made with or without replacement, as fractions, decimals or percentages |
| 7.3 | Find the probability of an event not happening using P(A′) = 1 – P(A) |
| 7.4 | Know and use the addition rule P(A ∪ B) = P(A) + P(B) – P(A ∩ B) |

The syllabus says that knowledge of permutations and combinations formulas is not required. Everything below is done by listing and counting outcomes.

## 7.2 Simple probabilities

When every outcome is equally likely:

```
P(event) = (outcomes in the event) / (all equally likely outcomes)
```

A probability is always between 0 and 1. An impossible event has probability 0 and a certain event has probability 1. The syllabus says answers might be given as fractions, decimals or percentages, so be ready to move between them. Multiply a decimal by 100 to get a percentage.

### Worked example 1

A jar holds 25 buttons: 9 brass, 6 steel and 10 plastic. One button is chosen without looking. Find the probability of choosing (a) a brass button, (b) a button that is not plastic.

(a) 9 of the 25 buttons are brass.

```
P(brass) = 9/25 = 0.36 = 36%
```

(b) The buttons that are not plastic are 9 + 6 = 15.

```
P(not plastic) = 15/25 = 3/5 = 0.6 = 60%
```

Check: P(plastic) = 10/25 = 0.4, and 0.4 + 0.6 = 1.

## 7.1 Notation

| Symbol | Meaning | Read as |
|---|---|---|
| P(A) | the probability of event A | "probability of A" |
| P(A′) | the probability of A not happening | "probability of not A" |
| P(A ∩ B) | the probability of A and B | both happen |
| P(A ∪ B) | the probability of A or B | at least one happens, possibly both |

Two points cause most slips. First, "or" in statistics includes "both", so A ∪ B means "A, or B, or both". Second, A ∩ B is the overlap, the outcomes that sit in both events. You can mix the symbols: P(A ∩ B′) means "A happens and B does not".

### Worked example 2

Cards numbered 1 to 30 are shuffled and one is turned over. Let A be "the number is even" and B be "the number is a multiple of 3". Find P(A), P(B), P(A ∩ B), P(A ∪ B), P(A′) and P(A ∩ B′).

List what you need.

```
A: 2, 4, 6, ..., 30        15 cards
B: 3, 6, 9, ..., 30        10 cards
A ∩ B: multiples of 6 -> 6, 12, 18, 24, 30     5 cards
```

Then:

```
P(A) = 15/30 = 1/2
P(B) = 10/30 = 1/3
P(A ∩ B) = 5/30 = 1/6
P(A ∪ B) = (15 + 10 - 5)/30 = 20/30 = 2/3
P(A′) = 15/30 = 1/2
P(A ∩ B′) = (15 - 5)/30 = 10/30 = 1/3
```

For A ∩ B′ you take the even cards and remove the five that are also multiples of 3. The 20 in P(A ∪ B) counts each card once, even though the multiples of 6 appear in both lists.

## 7.3 Complements

Every outcome is either in the event or outside it, so P(A) and P(A′) together account for all the probability:

```
P(A′) = 1 – P(A)
```

This is the quickest route whenever "not A" has many outcomes, or whenever the question says "at least one".

### Worked example 3

(a) The probability that a delivery arrives late is 0.18. Find the probability it is not late.

```
P(not late) = 1 - 0.18 = 0.82
```

(b) Two fair coins are tossed. Find the probability of at least one head.

The equally likely outcomes are HH, HT, TH, TT. "At least one head" has three of them, but the complement has only one.

```
P(no heads) = P(TT) = 1/4
P(at least one head) = 1 - 1/4 = 3/4
```

(c) Two fair dice are rolled and the scores are added. Find the probability that the total is at least 5.

There are 6 × 6 = 36 equally likely pairs. The totals of 4 or less are (1,1), (1,2), (2,1), (1,3), (3,1) and (2,2), which is 6 pairs.

```
P(total at least 5) = 1 - 6/36 = 30/36 = 5/6
```

Writing the sample space as a list or a table keeps the count honest. A common table has one die down the side, the other across the top and the total in each cell.

## 7.2 Selection with and without replacement

Many questions take two or three items from a collection, one after another.

- **With replacement**: each item is put back before the next is taken. The collection is the same every time.
- **Without replacement**: the item stays out. The total number left drops by one each time, and the number of items of the type you took drops as well.

The counting method needs no formulas. Count the ordered ways to make the picks, then count how many of those ways give the event.

### Worked example 4

A bag holds 4 blue and 5 yellow beads. Two beads are taken one after the other. Find (a) P(both blue) and (b) P(one of each colour), first with replacement and then without.

**With replacement.** Each pick has 9 choices, so there are 9 × 9 = 81 equally likely ordered pairs.

```
Both blue: 4 × 4 = 16 pairs         P = 16/81
Blue then yellow: 4 × 5 = 20 pairs
Yellow then blue: 5 × 4 = 20 pairs
One of each: 40 pairs               P = 40/81
```

**Without replacement.** The first pick has 9 choices and the second has 8, so there are 9 × 8 = 72 ordered pairs.

```
Both blue: 4 × 3 = 12 pairs         P = 12/72 = 1/6
Blue then yellow: 4 × 5 = 20 pairs
Yellow then blue: 5 × 4 = 20 pairs
One of each: 40 pairs               P = 40/72 = 5/9
```

This is the same as multiplying probabilities along the picks: 4/9 × 3/8 = 12/72. Both ways give the same answer, so use whichever you find clearer. Notice that "one of each" needs both orders. Leaving out the second order halves the answer.

### Worked example 5

A box holds 9 chocolates: 4 dark and 5 milk. Three are taken without replacement. Find (a) P(all three are dark) and (b) P(at least one is milk).

(a) The number of dark chocolates and the total both drop with each pick.

```
P(all dark) = 4/9 × 3/8 × 2/7 = 24/504 = 1/21
```

(b) "At least one milk" is the complement of "all dark".

```
P(at least one milk) = 1 - 1/21 = 20/21
```

Listing every way to get at least one milk would take far longer. Whenever you see "at least one", ask whether the complement is a single, simple event.

## 7.4 The addition rule

If you add P(A) and P(B), the outcomes in both events are counted twice. Subtract one copy of the overlap:

```
P(A ∪ B) = P(A) + P(B) – P(A ∩ B)
```

A table of counts shows this clearly. Take 50 students, where 31 study French (F), 24 study Spanish (S) and 9 study both.

```
              Spanish   Not Spanish   Total
French           9          22          31
Not French      15           4          19
Total           24          26          50
```

### Worked example 6

A student is chosen at random from the 50. Find P(F ∪ S) and the probability that the student studies neither language.

```
P(F ∪ S) = P(F) + P(S) - P(F ∩ S)
         = 31/50 + 24/50 - 9/50
         = 46/50 = 23/25
P(neither) = 1 - 23/25 = 2/25
```

The table agrees: the "neither" cell is 4, and 4/50 = 2/25.

### Worked example 7

For two events, P(A) = 0.72, P(B) = 0.31 and P(A ∪ B) = 0.88. Find P(A ∩ B).

Rearrange the rule: P(A ∩ B) = P(A) + P(B) – P(A ∪ B).

```
P(A ∩ B) = 0.72 + 0.31 - 0.88 = 0.15
```

You can then find related probabilities. P(A ∩ B′) = 0.72 – 0.15 = 0.57 and P(B ∩ A′) = 0.31 – 0.15 = 0.16.

## Common errors

- Writing P(A ∪ B) = P(A) + P(B) and forgetting to subtract the overlap when the events can both happen.
- Reading "or" as "one or the other but not both".
- Using the same denominator for every pick when the question says "without replacement".
- Finding "one of each colour" for two picks and counting only one order.
- Leaving a probability above 1, or giving a negative probability. Both signal an arithmetic slip.
- Mixing forms in a final answer, such as a percentage sign on a fraction. Give the form the question asks for.

## Next steps

Work through the [practice questions](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-practice/), then condense the unit with the [revision notes](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-revision-notes/). Tick off each outcome on the [checklist](/checklists/cambridge/igcse/statistics/), and use the [diagnostics](/diagnostics/) to test yourself under time.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Version 1, Cambridge International Education (part of Cambridge University Press & Assessment). This unit covers Topic 7, outcomes 7.1 to 7.4.
