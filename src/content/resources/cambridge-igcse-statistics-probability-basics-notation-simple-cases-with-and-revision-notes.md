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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--16-notation-venn.webp" width="900" height="800" alt="Thirty cards numbered 1 to 30. A is even numbers, 15 cards, and B is multiples of 3, 10 cards. The Venn regions hold A only 10 cards, both 5 (the multiples of 6), B only 5 and neither 10. Shaded: A and B is the overlap, 5 out of 30, which is 1/6. A or B or both is 5 plus 10 plus 5 which is 20 out of 30, 2/3. Not A is 15 out of 30, 1/2. A and not B is 10 out of 30, 1/3." loading="lazy">
  <figcaption>The four notation forms shown as shaded regions of a Venn diagram, with counts out of 30.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--15-probability-favourable-total.webp" width="900" height="830" alt="A jar holds 25 buttons: 9 brass, 6 steel and 10 plastic, shown as a grid. One is chosen without looking. P(brass) is 9 out of 25, which is 0.36 or 36 percent. The 15 buttons that are not plastic fill the first three rows, so P(not plastic) is 15 out of 25, which is 3/5, 0.6 or 60 percent. Both probabilities sit on a scale from 0, impossible, to 1, certain. Check: P(plastic) 0.4 plus 0.6 is 1." loading="lazy">
  <figcaption>Probability is favourable outcomes divided by all equally likely outcomes, and always lies between 0 and 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--18-replacement-grids.webp" width="900" height="770" alt="Two 9 by 9 grids list every ordered pair of beads from a bag of 4 blue and 5 yellow. With replacement all 81 pairs are possible: 16 are both blue and 40 are one of each colour, so the probabilities are 16/81 and 40/81. Without replacement the 9 cells where the same bead is taken twice are crossed out, leaving 72 pairs: 12 both blue, which is 1/6, and 40 one of each, which is 5/9. This matches 4/9 times 3/8, which is 12/72." loading="lazy">
  <figcaption>Taking without replacement removes the same-bead pairs, so there are 72 equally likely ordered pairs instead of 81.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--19-three-chocolates.webp" width="900" height="840" alt="A box holds 9 chocolates, 4 dark and 5 milk. Three are taken without replacement. Each pick removes a dark chocolate, so the chance of dark is 4/9, then 3/8, then 2/7. Multiplying gives 24/504, which is 1/21, the probability that all three are dark. At least one milk is the complement, 1 minus 1/21, which is 20/21; a bar split into 1/21 and 20/21 shows this." loading="lazy">
  <figcaption>Each pick without replacement lowers both the number of dark chocolates and the total, and at least one milk is the complement of all dark.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--20-addition-rule-counts.webp" width="900" height="770" alt="Of 50 students, 31 study French, 24 study Spanish and 9 study both. The Venn diagram has 22 French only, 9 both, 15 Spanish only and 4 neither. Adding 31 and 24 gives 55 and counts the 9 twice, so subtract once: 46 students study at least one language, so P(F or S) is 46/50, which is 23/25. P(neither) is 1 minus 23/25, which is 2/25, matching 4 out of 50." loading="lazy">
  <figcaption>Adding P(F) and P(S) counts the overlap twice, so subtract it once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--21-addition-rule-rearranged.webp" width="900" height="640" alt="A bar of total length 1 is split into four parts: A and not B is 0.57, A and B is 0.15, B and not A is 0.16 and neither is 0.12. P(A) = 0.72 covers the first two parts, P(B) = 0.31 the middle two and P(A or B) = 0.88 the first three. Rearranging the addition rule, P(A and B) is 0.72 plus 0.31 minus 0.88, which is 0.15. Then P(A and not B) is 0.72 minus 0.15, which is 0.57, and P(B and not A) is 0.31 minus 0.15, which is 0.16." loading="lazy">
  <figcaption>Rearranging the addition rule finds the overlap, from which the other regions follow.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and--17-complement-two-dice.webp" width="900" height="860" alt="A 6 by 6 table of the totals of two dice. The six pairs with a total of 4 or less, (1,1), (1,2), (2,1), (1,3), (3,1) and (2,2), are outlined. The other 30 pairs give a total of at least 5. It is quicker to count the six: P(at least 5) is 1 minus 6 over 36, which is 30 over 36, or 5/6." loading="lazy">
  <figcaption>Count the few outcomes that fail the condition and subtract the fraction from 1.</figcaption>
</figure>


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

## Frequently asked questions

**What does A′ mean in probability?**
A′ is the complement of A, the event that A does not happen, and P(A′) = 1 − P(A).

**What is the difference between A ∩ B and A ∪ B?**
A ∩ B means both A and B happen. A ∪ B means A or B or both happen. Mixing up the two symbols is a common error in notation questions.

**What is the addition rule?**
P(A ∪ B) = P(A) + P(B) − P(A ∩ B). The overlap is subtracted because it would otherwise be counted twice.

**What is the difference between with and without replacement?**
With replacement, each item is put back, so the total stays the same on every pick. Without replacement, the total drops by one each time, and so does the number of the type taken.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Version 1, Cambridge International Education (part of Cambridge University Press & Assessment). These notes cover Topic 7, outcomes 7.1 to 7.4.
