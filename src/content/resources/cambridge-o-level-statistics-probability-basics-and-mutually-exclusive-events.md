---
title: "Cambridge O Level Statistics: Probability basics and mutually exclusive events (4040)"
seoTitle: "O Level Statistics 4040 Probability Basics Study Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Probability basics and mutually exclusive events"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 25
syllabusTopics:
  - qualification: "o-level"
    topic: "elementary-ideas-of-probability-4040"
description: "Study guide to sample spaces, relative frequency, complements, the addition rule and mutually exclusive events for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027, topic 11, *Elementary ideas of probability*. It covers the basic ideas, the treatment of mutually exclusive events, and the Venn, tree and table methods used to organise them. The syllabus also lists independent events and selections with or without replacement under the same topic. Those are not the focus here, apart from one tree example where the stages are stated to be independent. The syllabus is not tiered, and its assessment overview says electronic calculators should be used on both papers.

Course pages: [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/) and [printable checklist](/checklists/cambridge/o-level/statistics/). For this unit: [revision notes](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-revision-notes/) and [practice questions](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-practice/). Related pages: [Venn diagrams for data](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams/) and [exam preparation](/resources/cambridge-o-level-statistics-exam-preparation/). Not sure where you stand? Try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Idea | You must be able to |
|---|---|
| Sample space and events | List outcomes, count those in an event, find a probability from equally likely outcomes |
| Relative frequency | Estimate a probability from trials and predict how often an event will occur |
| Complement | Use P(A′) = 1 − P(A), especially for "at least one" |
| Mutually exclusive events | Decide whether events can happen together and add their probabilities |
| Addition rule | Find P(A ∪ B) when events overlap |
| Representations | Use Venn diagrams, two-way tables and tree diagrams |

## Sample space and equally likely outcomes

An experiment is any process with an uncertain result. Each possible result is an outcome. The sample space is the set of all outcomes, written S, and an event is a set of outcomes you are interested in.

If all outcomes are equally likely:

```
P(A) = n(A) / n(S)
```

Probabilities lie between 0 and 1. A probability of 0 means the event is impossible and 1 means it is certain. Write answers as fractions, decimals or percentages, and cancel fractions fully.

**Example 1.** One letter is chosen at random from the letters of the word STATISTICS. Find the probability that it is (a) T, (b) a vowel, (c) S or I, (d) not C.

```
Letters: S S S T T T A I I C   so n(S) = 10
(a) P(T) = 3/10
(b) Vowels are A, I, I: P(vowel) = 3/10
(c) S or I: 3 + 2 = 5 letters, P = 5/10 = 1/2
(d) P(not C) = 1 − 1/10 = 9/10
```

Notice that the sample space has ten outcomes because each letter counts separately, not five outcomes (S, T, A, I, C would not be equally likely).

## Relative frequency

When outcomes are not equally likely, or cannot be listed, estimate the probability by experiment:

```
relative frequency = number of times the event happened / number of trials
```

More trials usually give a more reliable estimate. The relative frequency tends to settle near the true probability as the number of trials grows.

**Example 2.** A drawing pin is dropped 200 times and lands point up 124 times. The running results were:

| Trials | 20 | 50 | 100 | 200 |
|---|---|---|---|---|
| Point up | 11 | 29 | 59 | 124 |
| Relative frequency | 0.55 | 0.58 | 0.59 | 0.62 |

(a) Estimate P(point up). Use the largest number of trials: 124/200 = **0.62**.

(b) In 500 drops, how many would you expect to land point up? Expected number = probability × number of trials = 0.62 × 500 = **310**.

An expected number is an average over many repeats. It does not mean exactly 310 will happen in any one set of 500 drops.

## The complement

The complement of A, written A′, is the event "A does not happen". Since A and A′ cover every outcome and never overlap:

```
P(A) + P(A′) = 1     so     P(A′) = 1 − P(A)
```

Use the complement when "at least one" would need many cases.

**Example 3.** Two fair tetrahedral dice, faces 1 to 4, are thrown together. Subtract the smaller result from the larger (the answer is 0 for a tie). Find (a) P(difference 0) and (b) P(difference at least 2) by listing the sample space in a table.

```
Difference table (rows: first die, columns: second die)
      1  2  3  4
  1   0  1  2  3
  2   1  0  1  2
  3   2  1  0  1
  4   3  2  1  0
```

There are 16 equally likely outcomes. Zeros appear 4 times, so (a) P(0) = 4/16 = **1/4**.

For (b), differences of 2 or 3 occur 4 + 2 = 6 times, so P = 6/16 = **3/8**. Check with the complement: differences 0 or 1 occur 4 + 6 = 10 times, and 1 − 10/16 = 6/16.

## Mutually exclusive events

Events are mutually exclusive when one trial cannot produce both of them. They share no outcomes, so A ∩ B = Ø. Rolling a 2 and rolling a 5 on one throw are mutually exclusive. Rolling an even number and rolling a 6 are not.

For mutually exclusive events:

```
P(A or B) = P(A ∪ B) = P(A) + P(B)
```

The same idea works for three or more events that have no outcomes in common. When such events together include every outcome, their probabilities total 1.

**Example 4.** A survey asks 200 staff how they travel to work.

| Mode | Bus | Car | Walk | Cycle |
|---|---|---|---|---|
| Staff | 90 | 60 | 36 | 14 |

Each person gives one answer, so the modes are mutually exclusive.

```
P(bus or cycle) = 90/200 + 14/200 = 104/200 = 13/25
P(not car)      = 1 − 60/200 = 140/200 = 7/10
```

**Example 5.** A spinner shows 1, 2, 3 and 4. P(1) = 0.25, P(2) = x, P(3) = 2x and P(4) = 0.15. Find x and P(2 or 3).

```
Probabilities sum to 1:  0.25 + x + 2x + 0.15 = 1
                         3x = 0.6, so x = 0.2
P(2 or 3) = x + 2x = 3x = 0.6
```

## The addition rule for any two events

When events can overlap, adding P(A) and P(B) counts the overlap twice. Subtract it once:

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
```

For mutually exclusive events P(A ∩ B) = 0, so this reduces to the simple rule. In counting form: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).

### Venn diagrams

A Venn diagram shows the overlap directly. Start with the intersection, then work outwards.

**Example 6.** In a group of 50 pupils, 28 study French, 19 study Spanish and 9 study both. A pupil is chosen at random. Find P(French or Spanish), P(neither) and P(exactly one language).

```
Both = 9
French only  = 28 − 9 = 19
Spanish only = 19 − 9 = 10
Neither      = 50 − (19 + 10 + 9) = 12

      French only   Both   Spanish only        Neither
          19          9         10                12
```

```
P(French or Spanish) = (19 + 10 + 9)/50 = 38/50 = 19/25
Check by rule: 28/50 + 19/50 − 9/50 = 38/50
P(neither)           = 12/50 = 6/25
P(exactly one)       = (19 + 10)/50 = 29/50
```

### Two-way tables

A two-way table lists two features at once, so overlap is visible as a cell.

**Example 7.** 80 pupils are classified by year and journey to school.

| | Bus | Walk | Car | Total |
|---|---|---|---|---|
| Year 10 | 14 | 10 | 6 | 30 |
| Year 11 | 18 | 20 | 12 | 50 |
| Total | 32 | 30 | 18 | 80 |

Find P(Year 10 or walks). The events overlap in the cell "Year 10 and walk".

```
P(Year 10) = 30/80,  P(walk) = 30/80,  P(both) = 10/80
P(Year 10 or walk) = 30/80 + 30/80 − 10/80 = 50/80 = 5/8
```

"Bus" and "walk" are mutually exclusive here, because nobody is in both columns.

### Tree diagrams

A tree shows stages. Branch probabilities from one point add to 1. The ends of different paths are mutually exclusive outcomes, so you add path probabilities. Along a path, the stages are independent when the question says so, and you multiply.

**Example 8.** A sensor is faulty with probability 0.1, independently, on each of two tests. Find P(exactly one faulty) and P(at least one faulty).

```
First test      Second test      Path probability
F (0.1) ---- F (0.1)             0.1 × 0.1 = 0.01
        \--- N (0.9)             0.1 × 0.9 = 0.09
N (0.9) ---- F (0.1)             0.9 × 0.1 = 0.09
        \--- N (0.9)             0.9 × 0.9 = 0.81
```

```
P(exactly one) = 0.09 + 0.09 = 0.18       (two exclusive paths added)
P(at least one) = 1 − P(none) = 1 − 0.81 = 0.19
```

The four path probabilities add to 1, which is a useful check.

## Common errors

- Counting outcomes that are not equally likely, such as treating "two heads, one head, no heads" for two coins as equally likely. List HH, HT, TH, TT.
- Adding the probabilities of events that can occur together. Ask first whether one trial could give both.
- Calling events mutually exclusive because they look different. Even and prime are not exclusive, because 2 is both.
- Forgetting to subtract the intersection in the addition rule, or filling a Venn diagram with the totals 28 and 19 instead of the "only" regions.
- Leaving a probability above 1 or a negative value. Either signals an arithmetic error.
- Rounding in the middle of a calculation. Carry fractions or exact decimals, then round at the end if asked.
- Reading "expected number" as a guarantee.
- Writing only a final answer. Show the sum, such as 28/50 + 19/50 − 9/50, so the method is visible.

## Next steps

Do the [practice questions](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-practice/) and use the [revision notes](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-revision-notes/) to check recall. Tick topic 11 off on the [checklist](/checklists/cambridge/o-level/statistics/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment (Cambridge International Education).
