---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.5 Concepts of trial, outcome, sample space, event and probability"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-5"
description: "IB Maths AA study guide to section 4.5: trials, outcomes, sample spaces, P(A) = n(A)/n(U), complements, relative frequency and expected numbers of occurrences."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.5** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **concepts of trial, outcome, equally likely outcomes, relative frequency, sample
space (U) and event; the probability of an event A, P(A) = n(A)/n(U); complementary events A and A′; and
the expected number of occurrences**. It is SL and HL content and the foundation for everything else in
probability.

The [probability, discrete and continuous distributions, binomial and normal study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
summarises 4.5 in a few lines. This page slows down on the parts that cause errors: listing sample spaces
systematically, deciding whether outcomes really are equally likely, and the difference between theoretical
and experimental probability.

## The vocabulary

| Term | Meaning | Example (rolling one die) |
|---|---|---|
| Trial | One performance of an experiment | One roll |
| Outcome | One possible result of a trial | Rolling a 4 |
| Sample space U | The set of all possible outcomes | {1, 2, 3, 4, 5, 6} |
| Event | A set of outcomes (a subset of U) | "An even number" = {2, 4, 6} |
| Equally likely outcomes | Outcomes with the same chance of occurring | Each face of a fair die |

n(A) means the number of outcomes in A, so for "an even number" n(A) = 3 and n(U) = 6.

## Theoretical probability

When all outcomes in U are **equally likely**,

```
P(A) = n(A) / n(U)
```

Every probability lies between 0 (impossible) and 1 (certain), and the probabilities of all the outcomes in
U add to 1.

The condition "equally likely" is essential. The possible totals of two dice are 2 to 12, but P(total = 7) is
not 1/11, because the eleven totals are not equally likely: the 36 ordered pairs are. Always count in a
sample space whose outcomes really are equally likely.

## Representing a sample space

The guide notes that sample spaces can be shown in many ways. Choose the one that makes counting safe:

- **A list**, for small experiments: three coins give HHH, HHT, HTH, THH, HTT, THT, TTH, TTT.
- **A table (grid)**, for two-stage experiments such as two dice or two spinners: one stage across, one
  down, and the result of interest in each cell.
- **Set notation**, for events defined by properties: U = {1, 2, ..., 20}, A = {multiples of 3}.

Listing systematically (for example, ordering by number of heads) prevents missed or repeated outcomes.

### Worked example 1: a sample space table

Spinner A shows 1, 2 or 3; spinner B shows 1, 2, 3 or 4, each equally likely. The score is the product.

| × | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 1 | 2 | 3 | 4 |
| 2 | 2 | 4 | 6 | 8 |
| 3 | 3 | 6 | 9 | 12 |

```
n(U) = 3 × 4 = 12
P(product even) = 8/12 = 2/3
P(product > 6)  = 3/12 = 1/4       (8, 9 and 12)
P(product odd)  = 1 − 2/3 = 1/3    (complement)
```

Counting cells is reliable because each cell is equally likely, whereas the different product values are not
(the product 6 appears twice, 9 once).

## Complementary events

The **complement** A′ ("not A") contains every outcome in U that is not in A. Because A and A′ together
make up U and do not overlap,

```
P(A′) = 1 − P(A)
```

The complement is often the quicker route, especially for "at least one". For three fair coins,
P(at least one head) = 1 − P(no heads) = 1 − 1/8 = 7/8: one outcome to count instead of seven.

## Relative frequency and experimental probability

When outcomes are not equally likely or the probabilities are unknown (a drawing pin landing point up, a
biased die), estimate the probability by experiment:

```
relative frequency = number of times the event occurs / number of trials
```

Relative frequency is an **estimate** of the probability. It changes from experiment to experiment, and it
becomes more reliable as the number of trials increases. A fair die rolled 12 times may show no sixes at all;
rolled 12 000 times, the proportion of sixes will usually be close to 1/6.

### Worked example 2: from experiment to expectation

A drawing pin is dropped 200 times and lands point up 132 times.

```
Estimated P(point up) = 132/200 = 0.66
Expected number point up in 750 drops = 750 × 0.66 = 495
```

## Expected number of occurrences

If an event has probability p in each trial, the **expected number of occurrences** in n trials is

```
expected number = n × p
```

This is a long-run average, not a prediction of an exact count, so it need not be a whole number. Rolling a
fair die 100 times, the expected number of sixes is 100/6 ≈ 16.7. You would not be surprised to see 14 or
19 sixes.

### Worked example 3: equally likely or not?

A family has three children. Assume each child is equally likely to be a boy or a girl. Find P(exactly two
girls).

```
List: GGG, GGB, GBG, BGG, GBB, BGB, BBG, BBB   (8 equally likely outcomes)
Exactly two girls: GGB, GBG, BGG → 3 outcomes
P(exactly two girls) = 3/8
```

Treating "0, 1, 2 or 3 girls" as four equally likely outcomes would give 1/4, which is wrong: there are three
orders that give two girls but only one that gives three.

## Common mistakes

- Counting results (like totals or products) that are not equally likely instead of the underlying
  outcomes.
- Missing outcomes in a list, or counting HT and TH as the same when order produces separate outcomes.
- Forgetting that an event can be impossible (probability 0) or certain (probability 1).
- Treating relative frequency as the exact probability.
- Rounding an expected number to a whole number when the question asks for the expected value.
- Writing probabilities greater than 1 or as percentages mixed with fractions in one answer.

## Exam technique

- **"List"** or **"write down"** the sample space: a complete, systematic list or table.
- **"Find the probability"**: give an exact fraction, a decimal to 3 significant figures, or simplify; show
  n(A) and n(U) on Paper 1.
- **"Estimate"** a probability from experimental data: relative frequency.
- **"Find the expected number"**: n × p, and leave it unrounded unless the context asks otherwise.
- **"Explain"** why a probability is not 1/k: point to outcomes that are not equally likely.

These ideas are examined on both papers, often as the first part of a longer question that moves on to
section 4.6 (combined events) or section 4.7 (random variables).

## Where to go next

Use the [4.5 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-5-revision-notes/)
for recall and the [4.5 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-5-practice/)
to test yourself. Then continue with the
[4.6 combined, mutually exclusive, conditional and independent events study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.5 (SL and HL): concepts of trial, outcome, equally likely outcomes, relative frequency,
sample space (U) and event; the probability of an event A is P(A) = n(A)/n(U); the complementary events A and
A′ (not A); expected number of occurrences.
