---
title: "Cambridge IGCSE Mathematics (0580): Introduction to probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 8 – Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 8.1
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "introduction-to-probability-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 8.1: the probability scale, single events from lists, charts, tables and Venn diagrams, complements and working backwards."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **8.1 Introduction to probability** in Topic 8 Probability of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is in **both tiers**. The Core (C8.1) and Extended (E8.1) statements match, except that Extended candidates must also understand and use probability notation, P(A) and P(A′).

The broader [probability and expected frequency study guide](/resources/igcse-mathematics-0580-probability-and-expected-frequency/) introduces the scale, simple tables and Venn diagrams. This page goes further: listing outcomes systematically, probabilities from charts and sector angles, unknown numbers of items, and how a probability changes when items are added or removed. Revise with the [introduction to probability revision notes](/resources/cambridge-igcse-mathematics-0580-introduction-to-probability-cambridge-igcse-maths-revision-notes/) and practise with the [introduction to probability practice questions](/resources/cambridge-igcse-mathematics-0580-introduction-to-probability-cambridge-igcse-maths-practice/).

## What subtopic 8.1 asks for

| Statement | What you must be able to do | Tier |
|---|---|---|
| 8.1 | Understand and use the probability scale from 0 to 1 | Core and Extended |
| E8.1 | Understand and use probability notation: P(A) is the probability of A, P(A′) is the probability of not A | Extended only |
| 8.1 | Calculate the probability of a single event | Core and Extended |
| 8.1 | Understand that the probability of an event not occurring = 1 − the probability of the event occurring | Core and Extended |

The syllabus notes say probabilities should be given as a **fraction, decimal or percentage**, and that problems may use information from tables, graphs or Venn diagrams (limited to two sets on the Core papers).

## The words you need

| Word | Meaning |
|---|---|
| Experiment or trial | One go at something with an uncertain result: rolling a dice, picking a card |
| Outcome | One possible result |
| Event | A set of outcomes you are interested in, such as "an even number" |
| Equally likely | Every outcome has the same chance, as with a fair dice or a choice "at random" |
| Complement | The event "not A"; written A′ on Extended papers |

## Calculating the probability of a single event

When the outcomes are equally likely:

```
P(event) = number of outcomes in the event ÷ total number of outcomes
```

The key is a **complete, careful list** of the outcomes. Count each one exactly once.

### Worked example 1: numbers from a list (non-calculator)

A whole number from 1 to 30 is chosen at random. Find the probability that it is (a) a multiple of 4, (b) a prime number, (c) a factor of 30.

```
(a) Multiples of 4: 4, 8, 12, 16, 20, 24, 28  → 7 numbers
    P = 7/30

(b) Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29  → 10 numbers
    P = 10/30 = 1/3

(c) Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30  → 8 numbers
    P = 8/30 = 4/15
```

Writing the list out, rather than counting in your head, earns the method mark and catches missing values such as 2 in the primes.

## Probabilities from charts and diagrams

**Bar charts and frequency tables.** Read each frequency; the total of all frequencies is the denominator.

**Pie charts and spinners with sectors.** If a spinner lands in a sector at random, the probability is the angle divided by 360°.

### Worked example 2: a spinner with unequal sectors (non-calculator)

A circular spinner is divided into four sectors with angles: red 135°, blue 90°, green 75° and yellow 60°. Find (a) P(blue), (b) P(not red), (c) the probability of red or yellow.

```
Check: 135 + 90 + 75 + 60 = 360
(a) P(blue) = 90/360 = 1/4
(b) P(red) = 135/360 = 3/8, so P(not red) = 1 − 3/8 = 5/8
(c) red or yellow: (135 + 60)/360 = 195/360 = 13/24
```

These colours are **not** equally likely, which is why you work from angles, not from "4 colours".

### Worked example 3: a two-way table (non-calculator)

A cinema records 80 tickets sold for one film.

| | Adult | Child |
|---|---|---|
| Standard seat | 28 | 22 |
| Premium seat | 18 | 12 |

One ticket is chosen at random from all 80. Find the probability that it is (a) a child's ticket, (b) an adult premium ticket, (c) not a standard seat.

```
(a) Children: 22 + 12 = 34    P = 34/80 = 17/40
(b) Adult premium: 18          P = 18/80 = 9/40
(c) Premium: 18 + 12 = 30      P = 30/80 = 3/8
```

Every answer here uses all 80 tickets as the total. If a question chooses from a **smaller group**, such as "a ticket is chosen at random from the adult tickets", the denominator changes; that is conditional probability, covered in E8.4.

## The complement: not A

An event either happens or does not, so P(not A) = 1 − P(A). This is often the quickest route, especially when "not A" has many parts.

On Extended papers the same fact is written with notation: if P(B) = 0.8, then P(B′) = 1 − 0.8 = 0.2.

All the probabilities for **every** possible outcome of one trial add up to 1. This lets you find a missing entry in a probability table.

## Working backwards to find a number of items

### Worked example 4: an unknown number of counters (non-calculator)

A bag holds red and blue counters only. There are 6 red counters. The probability of taking a red counter at random is 2/9.

(a) How many blue counters are in the bag? (b) Some red counters are added, so that the probability of red becomes 1/2. How many are added?

```
(a) 6 red counters make up 2/9 of the total.
    1/9 of the total = 3, so the total = 27
    Blue = 27 − 6 = 21

(b) There are still 21 blue counters. For P(red) = 1/2,
    the number of red must equal the number of blue: 21.
    Red counters added = 21 − 6 = 15
```

Check (b): 21 red out of 42 counters = 1/2 ✓.

### Worked example 5: an algebraic total (non-calculator)

A box contains x green pens, 2x + 4 black pens and 5 blue pens. The probability of taking a blue pen at random is 1/6. Find x, then find the probability of taking a black pen.

```
Total = x + (2x + 4) + 5 = 3x + 9
5 / (3x + 9) = 1/6
3x + 9 = 30
x = 7
Green 7, black 18, blue 5: total 30
P(black) = 18/30 = 3/5
```

A number of objects must be a whole number. If your value of x is a fraction, re-read the question and your algebra for a slip.

## Answering in the right form

- Use a fraction, decimal or percentage: 3/8, 0.375 or 37.5%.
- Do **not** write "3 out of 8", "3 in 8" or a ratio "3 : 5". These are not probabilities and may not earn the mark.
- Fractions need not be simplified unless the question asks, but any simplification must be correct.
- A probability greater than 1 or less than 0 is always wrong; use that as a check.

## Common mistakes

- Missing outcomes when listing, such as forgetting 1 and the number itself as factors.
- Treating unequal sectors or unequal numbers of items as equally likely.
- Using the wrong total from a two-way table.
- Adding probabilities that overlap: "even or a multiple of 3" from 1 to 10 is 7/10, not 5/10 + 3/10, because 6 is in both.
- Forgetting that adding items to a bag changes the total as well as one count.

## Exam technique

- **Write down** a probability: a one-mark answer; no working needed, but the form must be correct.
- **Find** or **calculate**: show the count over the total.
- **Show that** the number of blue counters is 21: set out the calculation that leads to 21, not just a check that 21 works.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 8 Probability, C8.1 and E8.1 Introduction to probability. See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
