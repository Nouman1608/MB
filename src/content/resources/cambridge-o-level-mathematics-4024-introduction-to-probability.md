---
title: "Cambridge O Level Mathematics (4024): Introduction to Probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 8.1
syllabusTopics:
  - qualification: "o-level"
    topic: "probability"
  - qualification: "o-level"
    topic: "probability"
    subtopic: "introduction-to-probability-4024"
description: "Study guide to 4024 section 8.1: the probability scale, notation P(A) and P(A'), calculating the probability of a single event, and using tables, graphs and Venn diagrams."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section 8.1, Introduction to probability, in the Probability topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to understand and use the probability scale from 0 to 1, understand and use probability notation (P(A) is the probability of A and P(A′) is the probability of not A), calculate the probability of a single event, and understand that the probability of an event not occurring is 1 minus the probability of the event occurring. Probabilities should be given as a fraction, decimal or percentage, and problems may use information from tables, graphs or Venn diagrams. After this guide, use the [introduction to probability revision notes](/resources/cambridge-o-level-mathematics-4024-introduction-to-probability-revision-notes/) and the [introduction to probability practice questions](/resources/cambridge-o-level-mathematics-4024-introduction-to-probability-practice/).

## What section 8.1 asks for

1. Place events on the probability scale and describe them in words.
2. Use the notation P(A) and P(A′).
3. Calculate a probability from equally likely outcomes, tables, graphs or Venn diagrams.
4. Use P(not A) = 1 − P(A).
5. Give the answer as a fraction, a decimal or a percentage.

## The probability scale

A probability is a number from 0 to 1 that measures how likely an event is.

| Probability | Meaning |
|---|---|
| 0 | impossible |
| 0.25 or 1/4 | unlikely |
| 0.5 or 1/2 | even chance |
| 0.75 or 3/4 | likely |
| 1 | certain |

A probability can never be less than 0 or greater than 1. If you get an answer such as 1.3 or −0.2, there is a mistake. Probabilities can be written as fractions, decimals or percentages: 1/4 = 0.25 = 25%.

## Notation

- An **event** is a result or set of results we are interested in, such as "the dice shows an even number".
- **P(A)** means the probability of event A.
- **A′** (read "A prime" or "not A") is the event that A does not happen.
- **P(A′)** is the probability that A does not happen.

## Equally likely outcomes

When all outcomes are equally likely, the probability of an event is:

```
P(event) = number of outcomes in the event / total number of possible outcomes
```

Examples of fair situations are a fair dice, a fair coin, a well-shuffled pack of cards, and a bag in which each object is equally likely to be picked.

### Worked example 1

A fair six-sided dice is rolled. Find (a) P(prime number), (b) P(multiple of 3), (c) P(a number greater than 6), (d) P(a number less than 7).

```
(a) primes on the dice are 2, 3, 5: P = 3/6 = 1/2
(b) multiples of 3 are 3, 6: P = 2/6 = 1/3
(c) no outcomes: P = 0 (impossible)
(d) all six outcomes: P = 6/6 = 1 (certain)
```

Remember that 1 is not a prime number.

### Worked example 2

A bag contains 5 red, 3 blue and 2 green counters. One is chosen at random. Find the probability that it is (a) red, (b) not blue, (c) red or green.

```
total = 10
(a) P(red) = 5/10 = 1/2
(b) P(not blue) = 7/10     (red or green: 5 + 2)
(c) P(red or green) = 7/10
```

"At random" means each counter is equally likely to be chosen.

## The complement: P(A′) = 1 − P(A)

Every outcome either belongs to A or to A′, and the two events cannot happen together. So their probabilities add up to 1:

```
P(A) + P(A′) = 1
P(A′) = 1 − P(A)
```

This is helpful when "not A" is hard to count but A is easy.

### Worked example 3

P(B) = 0.8. Find P(B′).

```
P(B′) = 1 − 0.8 = 0.2
```

### Worked example 4

The probability that it rains tomorrow is 3x and the probability that it does not rain is x + 0.2. Find x and the probability of rain.

```
3x + x + 0.2 = 1
4x = 0.8
x = 0.2
P(rain) = 0.6
```

### Worked example 5

A spinner has four sections numbered 1 to 4, with probabilities 0.1, 0.3, x and 0.35. Find x.

```
0.1 + 0.3 + x + 0.35 = 1
x = 0.25
```

For a complete list of all possible outcomes, the probabilities add up to 1.

## Probability from a table

### Worked example 6

The table shows the colours of 40 cars in a car park.

| Colour | Red | Blue | White | Black |
|---|---|---|---|---|
| Number | 12 | 9 | 11 | 8 |

A car is chosen at random. Find P(white) as a fraction, a decimal and a percentage, and P(not red).

```
P(white) = 11/40 = 0.275 = 27.5%
P(not red) = 1 − 12/40 = 28/40 = 7/10
```

The total is the sum of the frequencies: 12 + 9 + 11 + 8 = 40.

## Probability from a Venn diagram

A Venn diagram shows how a group is divided into overlapping sets. The numbers inside each region are the numbers of items. To find a probability, divide the relevant number by the total number in the whole diagram (including those outside both circles).

### Worked example 7

Of 30 students, 18 play football (F), 12 play tennis (T), and 5 play both. Find P(F only), P(F or T) and P(F′).

```
both = 5
F only = 18 − 5 = 13
T only = 12 − 5 = 7
neither = 30 − (13 + 5 + 7) = 5
P(F only) = 13/30
P(F or T) = (13 + 5 + 7)/30 = 25/30 = 5/6
P(F′) = (7 + 5)/30 = 12/30 = 2/5
```

Check: P(F) = 18/30 = 3/5, so P(F′) = 1 − 3/5 = 2/5. The two methods agree.

## Probability from a graph or chart

Bar charts and pictograms give frequencies. Read the heights of the bars, add them to find the total, and then use the fraction method. For a pie chart, use the angle of a sector as a fraction of 360°. A sector of 90° represents a probability of 90/360 = 1/4.

## Playing cards

A pack has 52 cards in four suits of 13: hearts, diamonds (red) and clubs, spades (black). There are 12 picture cards (kings, queens and jacks).

| Event | Probability |
|---|---|
| a heart | 13/52 = 1/4 |
| a red card | 26/52 = 1/2 |
| a king | 4/52 = 1/13 |
| a picture card | 12/52 = 3/13 |
| the ace of spades | 1/52 |

## Letters in a word

### Worked example 8

A letter is chosen at random from the word MATHEMATICS. Find P(a vowel) and P(M).

```
11 letters in total: M, A, T, H, E, M, A, T, I, C, S
vowels: A, E, A, I, so 4 of them: P(vowel) = 4/11
M appears twice: P(M) = 2/11
```

List all of the outcomes carefully when letters repeat.

## Probability from a two-way table

A two-way table classifies the same group in two ways. The total of the whole table is the denominator.

### Worked example 9

Sixty pupils were asked how they travel to school.

| | Bus | Walk | Cycle | Total |
|---|---|---|---|---|
| Boys | 14 | 10 | 6 | 30 |
| Girls | 12 | 11 | 7 | 30 |
| Total | 26 | 21 | 13 | 60 |

A pupil is chosen at random. Find P(girl who walks), P(bus) and P(not cycle).

```
P(girl who walks) = 11/60
P(bus) = 26/60 = 13/30
P(not cycle) = 1 − 13/60 = 47/60
```

Check the totals first: 14 + 10 + 6 = 30, 12 + 11 + 7 = 30, and 30 + 30 = 60.

## Words that describe events

| Phrase | Meaning |
|---|---|
| at random | every outcome equally likely |
| fair | no outcome is favoured |
| biased | some outcomes are favoured |
| mutually exclusive | the events cannot both happen |
| and, both | the overlap of two events |
| or | one event or the other or both |
| not A | everything outside A |

## Common mistakes

- Giving a probability greater than 1 or less than 0.
- Dividing by the wrong total, for example using the number of outcomes in the event as the total.
- Treating unequal outcomes as equally likely.
- Forgetting that 1 is not a prime number.
- Using the Venn diagram total as the size of one circle instead of the entire group.
- Giving odds or a ratio such as 3 : 7 when a fraction, decimal or percentage is asked for.
- Not simplifying fractions, or giving a decimal that has been rounded too early.

## Exam technique

- **Calculate** or **find** the probability: write the fraction first, then simplify.
- **Write down**: answer without working, usually a simple fraction.
- **Show that**: give the exact fraction and the working.
- Check: probabilities for a full set of outcomes add to 1, and P(A′) = 1 − P(A).

## Next steps

Work through the [introduction to probability practice questions](/resources/cambridge-o-level-mathematics-4024-introduction-to-probability-practice/) and recap with the [introduction to probability revision notes](/resources/cambridge-o-level-mathematics-4024-introduction-to-probability-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 8.1 Introduction to probability.
