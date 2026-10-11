---
title: "Cambridge IGCSE Statistics: Probability basics: notation, simple cases with and without replacement, complements and the addition rule (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Probability Basics Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on probability notation, replacement, complements and the addition rule for Cambridge IGCSE Statistics, Topic 7 (7.1 to 7.4)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense outcomes 7.1 to 7.4 of Topic 7 (Probability) in the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. For full explanations and longer worked examples, read the [study guide](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and/). Then test yourself with the [practice questions](/resources/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-practice/). The [course hub](/boards/cambridge/igcse/statistics/) and the [printable checklist](/checklists/cambridge/igcse/statistics/) show the rest of the course, and the [free diagnostics](/diagnostics/) are a quick way to find gaps.

## Key results

| Outcome | Result or skill |
|---|---|
| 7.1 | P(A) is the probability of A. P(A′) is "not A". P(A ∩ B) is "A and B". P(A ∪ B) is "A or B" (or both). |
| 7.2 | For equally likely outcomes, P = favourable outcomes / total outcomes. Answers may be fractions, decimals or percentages. |
| 7.2 | With replacement: the total stays the same. Without replacement: the total and the number of the type you took both drop. |
| 7.3 | P(A′) = 1 – P(A) |
| 7.4 | P(A ∪ B) = P(A) + P(B) – P(A ∩ B) |

Permutation and combination formulas are not required. Count outcomes by listing them or by multiplying the number of choices at each pick.

## Notation at a glance

```
P(A)       probability that A happens
P(A′)      probability that A does not happen
P(A ∩ B)   probability that both A and B happen   (the overlap)
P(A ∪ B)   probability that A or B or both happen (everything in either)
P(A ∩ B′)  probability that A happens and B does not
```

Probabilities lie between 0 and 1 inclusive. 0 means impossible and 1 means certain.

## Converting between forms

| Fraction | Decimal | Percentage |
|---|---|---|
| 1/5 | 0.2 | 20% |
| 3/4 | 0.75 | 75% |
| 2/5 | 0.4 | 40% |
| 9/20 | 0.45 | 45% |
| 1/8 | 0.125 | 12.5% |

Fraction to decimal: divide the top by the bottom. Decimal to percentage: multiply by 100. Keep the form the question uses unless it asks for another.

## Method in steps: a single pick

1. Count the total number of equally likely outcomes.
2. Count the outcomes in the event.
3. Write event / total and simplify.
4. Convert to the form asked for.

## Method in steps: two or more picks

1. Decide whether the item is replaced.
2. Count the ordered ways for the total (for example 10 × 9 = 90 without replacement, 10 × 10 = 100 with).
3. Count the ordered ways for the event. If order does not matter in the wording, count every order.
4. Divide, or multiply the probabilities of each pick (they give the same answer).
5. For "at least one", try 1 minus the probability of none.

### Reminder: with and without replacement

A drawer holds 3 grey and 5 black socks (8 in all). Two are taken.

```
With replacement:     P(both grey) = 3/8 × 3/8 = 9/64
Without replacement:  P(both grey) = 3/8 × 2/7 = 6/56 = 3/28
```

Without replacement the second pick has one fewer sock overall and one fewer grey sock.

### Reminder: one of each

Using the same drawer without replacement:

```
Grey then black: 3/8 × 5/7 = 15/56
Black then grey: 5/8 × 3/7 = 15/56
P(one of each) = 30/56 = 15/28
```

The two orders are different outcomes, so both are added.

## Method in steps: the addition rule

1. Find P(A), P(B) and P(A ∩ B). A two-way table of counts is useful.
2. Add P(A) and P(B).
3. Subtract P(A ∩ B).
4. For "neither", subtract the answer from 1.

### Reminder: addition rule

In a group, P(A) = 2/5, P(B) = 1/3 and P(A ∩ B) = 1/10.

```
P(A ∪ B) = 2/5 + 1/3 - 1/10 = 12/30 + 10/30 - 3/30 = 19/30
P(neither) = 1 - 19/30 = 11/30
```

Rearranged, the rule gives the overlap: P(A ∩ B) = P(A) + P(B) – P(A ∪ B).

## Sample-space tables

For two dice, draw a 6 by 6 grid with the first die down the side, the second across the top and the total in each cell. Every cell is equally likely, so the denominator is 36.

```
        1  2  3  4  5  6
   1    2  3  4  5  6  7
   2    3  4  5  6  7  8
   3    4  5  6  7  8  9
   4    5  6  7  8  9 10
   5    6  7  8  9 10 11
   6    7  8  9 10 11 12
```

Reminder: P(total is 9 or more). The cells showing 9, 10, 11 or 12 number 4 + 3 + 2 + 1 = 10, so the probability is 10/36 = 5/18. The probability of a total below 9 is 1 – 5/18 = 13/18.

## Reminder: complement with picks

A pack holds 7 stamps and 3 are torn. Two are taken without replacement.

```
P(neither torn) = 4/7 × 3/6 = 12/42 = 2/7
P(at least one torn) = 1 - 2/7 = 5/7
```

The 4 and 3 are the undamaged stamps left at each pick, and 7 and 6 are the totals.

## Reminder: two-way table

Of 40 customers, 24 bought tea (T), 18 bought cake (C) and 8 bought both.

```
             Cake   No cake   Total
Tea            8      16        24
No tea        10       6        16
Total         18      22        40
```

```
P(T ∪ C) = (24 + 18 - 8)/40 = 34/40 = 17/20
P(neither) = 6/40 = 3/20
P(T ∩ C′) = 16/40 = 2/5
```

The cells of a table do not overlap, so you can read "tea only" straight from the table. The totals include the overlap, which is why the addition rule subtracts it.

## Wording to watch

| Wording in the question | What it usually means |
|---|---|
| "at least one" | 1 minus the probability of none |
| "neither A nor B" | 1 – P(A ∪ B) |
| "A but not B" | P(A) – P(A ∩ B) |
| "exactly one of A and B" | P(A) + P(B) – 2 × P(A ∩ B) |
| "one after the other, not put back" | without replacement |
| "put back each time" | with replacement |
| "in either order" | count both orders |

Check the last row of the table with the tea and cake figures: 24/40 + 18/40 – 2 × 8/40 = 26/40 = 13/20. The cells for tea only and cake only are 16 and 10, and 26/40 agrees.

## Must-know distinctions

| Idea | Distinction |
|---|---|
| ∩ and ∪ | ∩ means "and" and gives a smaller or equal probability. ∪ means "or" and gives a larger or equal probability. |
| A′ and A ∩ B′ | A′ is everything outside A. A ∩ B′ is the part of A that is outside B. |
| With and without replacement | With: the same fractions on every pick. Without: the denominator falls by one each pick. |
| "At least one" | The complement is "none", which is usually one simple event. |
| "One of each" | Count both orders. |

## Quick self-test

1. Write "A or B" using probability notation.
2. If P(A) = 0.37, find P(A′).
3. A spinner has 20 equal sectors and 8 are pink. Give P(pink) as a percentage.
4. P(A) = 2/5, P(B) = 1/3 and P(A ∩ B) = 1/10. Find P(A ∪ B).
5. Six cards are numbered 1 to 6. Two are taken without replacement. Find P(both even).
6. Repeat question 5 with replacement.
7. P(A ∪ B) = 0.9, P(A) = 0.5 and P(B) = 0.6. Find P(A ∩ B).
8. Two coins are tossed. Find P(at least one tail).
9. P(A) = 35%, P(B) = 50% and P(A ∩ B) = 10%. Find P(A ∪ B) as a percentage.
10. A tin has 2 black pens and 3 blue pens. Two are taken without replacement. Find P(one of each colour).

### Answers

1. P(A ∪ B)
2. 1 – 0.37 = 0.63
3. 8/20 = 0.4 = 40%
4. 2/5 + 1/3 – 1/10 = 19/30
5. 3/6 × 2/5 = 6/30 = 1/5
6. 3/6 × 3/6 = 9/36 = 1/4
7. 0.5 + 0.6 – 0.9 = 0.2
8. 1 – P(no tails) = 1 – 1/4 = 3/4
9. 35% + 50% – 10% = 75%
10. (2/5 × 3/4) + (3/5 × 2/4) = 6/20 + 6/20 = 12/20 = 3/5

## Where marks are usually lost

- Using P(A) + P(B) for "A or B" with no subtraction when the events overlap.
- Changing the total after one pick when the question says "with replacement", or keeping it the same when the question says "without".
- Counting only one order for "one of each".
- Forgetting to reduce the number of the wanted type on the second and third pick without replacement.
- Doing a long list for "at least one" instead of 1 minus "none", then missing a case.
- Stating a probability greater than 1 or less than 0 without checking it.
- Giving a decimal where a percentage was asked for, or the reverse.
- Not showing the working. The syllabus says essential working must be shown for full marks to be awarded.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Version 1, Cambridge International Education (part of Cambridge University Press & Assessment). These notes cover Topic 7, outcomes 7.1 to 7.4.
