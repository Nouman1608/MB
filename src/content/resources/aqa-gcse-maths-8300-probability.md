---
title: "AQA GCSE Mathematics 8300: Probability -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Probability Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Probability"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 5
syllabusTopics:
  - qualification: "gcse"
    topic: "probability-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 Probability (P1-P9): relative frequency, sample spaces, Venn and tree diagrams, and conditional probability."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches Topic 5, **Probability** (specification references P1 to P9), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Probability can be tested on any of the three papers at Foundation or Higher tier. P1 to P8 are for both tiers; P9, conditional probability, is Higher tier only and is labelled where it appears. Exams run every May/June and November.

Use it with the [Probability revision notes](/resources/aqa-gcse-maths-8300-probability-revision-notes/) and the [Probability practice questions](/resources/aqa-gcse-maths-8300-probability-practice/). The course hub is [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) lists every statement, and the [free 10-minute diagnostics](/diagnostics/) show where to start.

## What this topic covers

| Spec | What you must be able to do | Tier |
|---|---|---|
| P1 | Record, describe and analyse outcomes of experiments using tables and frequency trees | Both |
| P2 | Use randomness, fairness and equally likely events to calculate expected outcomes | Both |
| P3 | Link relative expected frequency to theoretical probability; use the 0 to 1 scale | Both |
| P4 | Use the fact that probabilities of an exhaustive set of (mutually exclusive) outcomes sum to 1 | Both |
| P5 | Know that bigger unbiased samples give estimates closer to the theoretical probability | Both |
| P6 | List sets and combinations systematically with tables, grids, Venn diagrams and tree diagrams | Both |
| P7 | Build sample spaces for single and combined experiments and use them | Both |
| P8 | Probabilities of independent and dependent combined events, including tree diagrams; know when to add and when to multiply | Both |
| P9 | Calculate and interpret conditional probabilities using two-way tables, tree diagrams and Venn diagrams | Higher tier only |

The whole of probability and statistics together makes up about 15% of the marks at both tiers. Probabilities can be written as fractions, decimals or percentages. Never write them as ratios or "1 in 4".

## The probability scale and the "sum to 1" rule (P3, P4)

A probability is a number from 0 (impossible) to 1 (certain). An even chance is 0.5. Words such as *unlikely* and *likely* sit either side of 0.5.

If a set of outcomes is **exhaustive** (covers everything that can happen) and **mutually exclusive** (no two can happen together), their probabilities add up to 1. So:

`P(not A) = 1 − P(A)`

**Worked example 1.** A four-colour spinner has P(red) = 0.3 and P(blue) = 0.25. Yellow is twice as likely as green. Find P(yellow).

```
P(green) + P(yellow) = 1 − 0.3 − 0.25 = 0.45
Let P(green) = x, so P(yellow) = 2x
x + 2x = 0.45  →  3x = 0.45  →  x = 0.15
P(yellow) = 2 × 0.15 = 0.3
```

## Experiments, frequency trees and relative frequency (P1, P3, P5)

When you cannot work out a probability from equally likely outcomes, you run an experiment and use the **relative frequency**:

`relative frequency = number of times the outcome happened ÷ number of trials`

Relative frequency is an **estimate** of the probability. P5 is the key idea: an unbiased experiment with more trials tends to give an estimate closer to the theoretical probability. So always use the result from the largest number of trials.

**Worked example 2.** Mia rolls a dice 50 times and gets 14 sixes. Later she rolls it 500 times and gets 86 sixes.

- After 50 rolls the relative frequency is 14/50 = 0.28.
- After 500 rolls it is 86/500 = 0.172.
- A fair dice gives 1/6 ≈ 0.167. The 500-roll estimate is better because it uses more trials. It is close to 1/6, so there is no strong evidence that the dice is biased.

A **frequency tree** records how a group splits in two stages. Numbers, not probabilities, go on the branches.

**Worked example 3.** 240 people visit a museum. 3/8 are children and the rest are adults. 2/3 of the children and 40% of the adults buy something in the shop.

```
                    ┌── buy        60
      children 90 ──┤
                    └── no buy     30
240 ──┤
                    ┌── buy        60
      adults 150 ───┤
                    └── no buy     90
```

Children: 3/8 × 240 = 90, and 2/3 × 90 = 60 buy. Adults: 240 − 90 = 150, and 0.4 × 150 = 60 buy. So P(a visitor chosen at random buys something) = 120/240 = **1/2**.

## Expected outcomes and fairness (P2)

If an event has probability p and you repeat the experiment n times:

`expected number of times = p × n`

This is what you *expect* on average. It is not a guarantee, and it does not have to be a whole number.

**Worked example 4.** The probability of winning a fairground game is 0.15. Ali plays 60 times. The expected number of wins is 0.15 × 60 = **9**.

A dice, coin or spinner is **fair** (unbiased) if every outcome is equally likely. To judge fairness, compare the relative frequency from many trials with the theoretical probability.

## Sample spaces and systematic listing (P6, P7)

A **sample space** lists every possible outcome. For two experiments together, a grid is the clearest way.

**Worked example 5.** A fair four-sided spinner (1 to 4) and a fair three-sided spinner (1 to 3) are spun. The two scores are multiplied.

```
 ×  |  1   2   3
----+------------
 1  |  1   2   3
 2  |  2   4   6
 3  |  3   6   9
 4  |  4   8  12
```

There are 4 × 3 = 12 equally likely outcomes. 8 products are even, so P(even) = 8/12 = **2/3**. Three products are greater than 6 (8, 9, 12), so P(product > 6) = 3/12 = **1/4**.

When listing combinations without a grid, fix the first item and run through all choices of the second, then move on. This stops you missing or repeating outcomes.

### Venn diagrams

A Venn diagram sorts items into overlapping sets inside a rectangle that holds everything.

**Worked example 6.** In a class of 40, 23 play football, 18 play tennis and 7 play both.

- Fill the overlap first: 7.
- Football only: 23 − 7 = 16. Tennis only: 18 − 7 = 11.
- Neither: 40 − (16 + 7 + 11) = 6. Write this outside both circles.
- P(neither) = 6/40 = **3/20**.

## Combined events and tree diagrams (P6, P8)

You must know these two results. They are not given in the exam.

| Rule | Use it when |
|---|---|
| P(A or B) = P(A) + P(B) − P(A and B) | "or" questions; if A and B are mutually exclusive, P(A and B) = 0 so you just add |
| P(A and B) = P(A given B) × P(B) | "and" questions; if A and B are independent, P(A given B) = P(A), so P(A and B) = P(A) × P(B) |

Check with the Venn example: P(football or tennis) = 23/40 + 18/40 − 7/40 = 34/40 = 17/20.

**Multiply along branches, add between branches.** On a tree diagram, each set of branches from one point must sum to 1.

**Independent events.** The first outcome does not change the second. The probability that a bus is late is 0.2 and the probability that it rains is 0.3, and you assume these are independent. P(late and rain) = 0.2 × 0.3 = 0.06. P(neither) = 0.8 × 0.7 = 0.56, so P(at least one) = 1 − 0.56 = 0.44.

**Dependent events.** The first outcome changes the second, as in picking "without replacement".

**Worked example 7.** A bag holds 5 red and 3 blue counters. Two are taken at random without replacement.

```
First        Second        Outcome   Probability
             R  4/7   →    RR        5/8 × 4/7 = 20/56
R  5/8  ──<
             B  3/7   →    RB        5/8 × 3/7 = 15/56
             R  5/7   →    BR        3/8 × 5/7 = 15/56
B  3/8  ──<
             B  2/7   →    BB        3/8 × 2/7 =  6/56
```

The four outcomes total 56/56 = 1, which is a useful check.

- P(same colour) = 20/56 + 6/56 = 26/56 = **13/28**.
- P(at least one blue) = 1 − P(RR) = 1 − 20/56 = 36/56 = **9/14**.

"Know the underlying assumptions" (P8) means you should be able to say why you multiplied: the counters are picked at random, and for independent events one result does not affect the other.

## Conditional probability (P9) -- Higher tier only

"The probability of A **given** B" means you already know B has happened. The group you are choosing from shrinks to B only.

`P(A given B) = P(A and B) ÷ P(B)`

This is the second formula above, rearranged.

**From a two-way table.** 120 students: 70 in Year 10 (28 walk to school) and 50 in Year 11 (15 walk).

|  | Walk | Other | Total |
|---|---|---|---|
| Year 10 | 28 | 42 | 70 |
| Year 11 | 15 | 35 | 50 |
| Total | 43 | 77 | 120 |

A student who walks is chosen at random. P(Year 11 given walks) = 15/43. The denominator is the **walk total**, 43, not 120.

**From a Venn diagram.** In worked example 6, a footballer is chosen. P(plays tennis given plays football) = 7/23.

**From a tree diagram.** In worked example 7, given that both counters are the same colour, P(both red) = (20/56) ÷ (26/56) = **10/13**.

Expected frequencies make this easier to see. Imagine 56 repeats: about 20 give RR and 6 give BB, so 20 of the 26 "same colour" results are red.

## Calculator and non-calculator

Probability can appear on Paper 1, so you must add, subtract and multiply fractions by hand. On Papers 2 and 3 a calculator helps with decimals, but keep exact fractions until the end and give a fraction answer unless the question asks for a decimal.

## Common errors

- Adding probabilities along a tree branch instead of multiplying.
- Not changing the denominator on the second pick without replacement (writing 4/8 instead of 4/7).
- Adding "or" probabilities when the events overlap, so the overlap is counted twice.
- Using 120 (the grand total) instead of the row or column total for a "given" question.
- Putting the "both" number into each circle as well as the overlap in a Venn diagram.
- Writing "3 : 5" or "3 out of 8" as a probability. Write 3/8.
- Giving a probability greater than 1 and not noticing.

## Next steps

Condense this into the [revision notes](/resources/aqa-gcse-maths-8300-probability-revision-notes/), then test yourself with the [practice questions](/resources/aqa-gcse-maths-8300-probability-practice/). The [AQA GCSE Mathematics hub](/boards/aqa/gcse/mathematics/) links the other topics.

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.5 Probability (P1 to P9) and Appendix: mathematical formulae.
