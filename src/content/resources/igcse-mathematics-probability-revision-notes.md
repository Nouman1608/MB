---
title: "IGCSE Mathematics: Probability — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "introduction-to-probability-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "relative-and-expected-frequencies-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "probability-of-combined-events-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "conditional-probability-cambridge-igcse-maths"
description: "Condensed recall notes on basic probability, relative and expected frequency, combined events and conditional probability for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-04
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. Pair these notes with the
[Probability practice questions](/resources/igcse-mathematics-probability-practice/)
for worked exam-style application.

> **Tier note:** items marked *(Extended)* are Extended only in the 0580 syllabus: combined events
> without replacement (E8.3; Core combined events are with replacement only) and conditional probability
> (E8.4). Probability notation such as P(A) and P(A′) is Extended (E8.1): Core answers do not need it, and
> Core Venn diagrams are limited to two sets. Everything else is Core.

## Basic probability

```
P(event) = number of favourable outcomes / total number of possible outcomes
```

This counting rule only applies when every possible outcome is **equally likely** (a fair coin or dice, or an object drawn at random from a bag) — for a biased coin or an event where outcomes have different probabilities, count-based favourable-over-total does not give the right answer, and the probability instead has to come from the stated or measured probabilities of the individual outcomes, or from a relative-frequency estimate based on repeated trials. Probability is always between 0 (impossible) and 1 (certain), and can be given as a fraction, decimal or percentage. The probabilities of all possible outcomes of a single event **sum to 1**, so P(not A) = 1 - P(A).

## Relative and expected frequency

**Relative frequency** is an experimental estimate of probability, found from data rather than counting outcomes theoretically:

```
relative frequency = number of times an outcome occurred / total number of trials
```

Relative frequency is only an **estimate** of the true probability -- it can be used to predict an **expected frequency** in a further set of trials by multiplying it by the new number of trials, but it will not usually match the theoretical probability exactly, especially for a small number of trials.

## Combined events

Two rules govern combining probabilities:

- **AND (both happen, independent events):** multiply the probabilities.
- **OR (either happens, mutually exclusive events):** add the probabilities.

A **tree diagram** is the standard tool for combined events across two or more stages. Probabilities on branches from the same point must sum to 1, and the probability of a complete path is found by **multiplying along the branches**. When more than one path gives the required outcome, **add** the probabilities of those paths together.

*(Extended)* **Without replacement** matters: once an item is removed from a group, the total (and sometimes the count of the relevant outcome) is reduced by one for every later branch, so probabilities on the second stage are different from the first.

```
Bag: 5 red, 3 blue. Two counters taken without replacement.
1st pick:  P(red) = 5/8,  P(blue) = 3/8
2nd pick (after a red):  P(red) = 4/7,  P(blue) = 3/7
2nd pick (after a blue): P(red) = 5/7,  P(blue) = 2/7

P(both red) = 5/8 x 4/7 = 5/14
```

A **possibility space diagram** (a grid of every combined outcome) is an alternative to a tree diagram, most useful for two independent events with a small, fixed number of outcomes each -- for example, rolling two dice, where a 6-by-6 grid of all 36 equally likely outcome pairs makes counting favourable outcomes for a combined event straightforward. Mutually exclusive events (outcomes that cannot both occur, such as rolling a 2 and rolling a 5 on the same single die) always use the addition rule; independent events (where one outcome has no effect on the other's probability, such as two separate dice rolls) always use the multiplication rule for a combined AND outcome.

```
Two fair dice rolled together. P(both scores add to 7)?
Possibility space has 36 equally likely outcomes (6 x 6 grid).
Pairs summing to 7: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1) -- 6 outcomes.
P(sum = 7) = 6/36 = 1/6
```

## Conditional probability *(Extended)*

```
P(B | A) = P(A and B) / P(A)
```

The syllabus does not require the notation P(B | A) or a formula (E8.4): questions are answered from a Venn diagram, tree diagram or table by counting only within the group already known to have happened. For example, if 12 of 30 students play chess and 5 of those 12 also play tennis, the probability that a chess player also plays tennis is 5/12. The formula above gives the same result.

P(B | A) means "the probability of B, given that A has already happened" -- it restricts attention to only the outcomes where A occurred, then asks what fraction of those also satisfy B. This is different from P(A and B), which is measured against the whole sample space, not just the outcomes where A happened.

```
P(A) = 0.3,  P(A and B) = 0.15
P(B | A) = 0.15 / 0.3 = 0.5
```

## Exam traps

- Confusing theoretical probability (counting outcomes) with relative frequency (an experimental estimate) -- a question asking for one is not answered with the other.
- Adding probabilities that should be multiplied (a combined AND event), or the reverse for two mutually exclusive OR outcomes.
- *(Extended)* Forgetting that probabilities change on the second branch of a tree diagram when an item is removed without replacement.
- Not simplifying a final probability fraction, or giving an answer greater than 1.
- *(Extended)* In conditional probability, dividing by the whole total instead of by the size of the group already known to have happened.

## Self-test

1. State the two things the probabilities of all possible outcomes of an event must do.
2. When should probabilities on a tree diagram be added rather than multiplied?
3. Why is relative frequency described as an "estimate" rather than the true probability?
4. *(Extended)* In a club of 30 students, 12 play chess, and 5 of the chess players also play tennis. A chess player is chosen at random. Find the probability that they also play tennis.
5. *(Extended)* A bag has 5 red and 3 blue counters. Without replacement, what is P(blue) on the second pick, given the first pick was blue?
6. State when a possibility space diagram is a useful alternative to a tree diagram.

**Answers:** 1. They must each be between 0 and 1, and they must sum to 1. 2. When combining separate paths that both lead to the outcome required (an OR situation across whole paths) -- multiply along a single path, add across different qualifying paths. 3. Because it is calculated from a limited number of trials and will not usually match the theoretical probability exactly, especially for small samples. 4. 5/12: only the 12 chess players can be chosen, and 5 of them play tennis. 5. 2/7, since one blue counter has already been removed, leaving 2 blue and 5 red out of 7 remaining. 6. When there are two independent events, each with a small, fixed number of equally likely outcomes -- a grid of every combined outcome makes counting favourable outcomes straightforward.
