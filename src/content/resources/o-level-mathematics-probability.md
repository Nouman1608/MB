---
title: "Cambridge O Level Mathematics: Probability (4024)"
seoTitle: "O Level Maths 4024 Probability Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 524
syllabusTopics:
  - qualification: "o-level"
    topic: "probability"
description: "Study guide to every Probability outcome in Cambridge O Level Mathematics 4024: the scale, relative frequency, expected frequency, Venn and tree diagrams."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---
This study guide is aligned to the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for examination in 2025, 2026 and 2027. It covers all of syllabus topic 8, Probability, sections 8.1 to 8.3. The syllabus is not tiered, so every candidate meets all of it. Calculators are not allowed in Paper 1 and a scientific calculator is required for Paper 2, so practise exact fraction work by hand.

Condensed recall is in the [revision notes](/resources/o-level-mathematics-probability-revision-notes/). Exam-style questions are in the existing [probability practice set](/resources/o-level-mathematics-probability-practice/). Use the [course hub](/boards/cambridge/o-level/mathematics/) and the printable [checklist](/checklists/cambridge/o-level/mathematics/) to track progress, and take a free 10-minute [diagnostic](/diagnostics/) if you are unsure where to start.

| Section | What you must be able to do |
|---|---|
| 8.1 | Use the probability scale and notation, find single-event probabilities, use P(not A) = 1 − P(A) |
| 8.2 | Use relative frequency as an estimate, calculate expected frequencies, understand fair, bias and random |
| 8.3 | Find probabilities of combined events with sample space diagrams, Venn diagrams and tree diagrams, with or without replacement |

## 8.1 Introduction to probability

### The probability scale

Every probability sits on a scale from 0 to 1. A probability of 0 describes an event that cannot happen, and 1 describes an event that must happen. Everything else lies between, and the closer to 1, the more likely the event. The syllabus says probabilities should be given as a fraction, a decimal or a percentage, so 3/20, 0.15 and 15% are all acceptable forms of the same answer.

### Notation

P(A) is the chance that A happens. P(A′) is the chance that A fails to happen. The symbol ′ is read "not".

### Single events

When all outcomes are equally likely:

```
P(event) = favourable outcomes / all possible outcomes
```

Problems can give you the information in a table, a graph or a Venn diagram. Read the totals carefully, because the denominator is the total of all outcomes, not the total of the row you happen to be looking at.

**Worked example.** A club has 60 members. The table shows how each member travels to the club.

| Method | Walk | Bus | Cycle | Car |
|---|---|---|---|---|
| Members | 21 | 18 | 9 | 12 |

A member is picked at random. Find the probability that this member (a) comes by bus, (b) does not come by car.

```
(a) P(bus) = 18/60 = 3/10   (also 0.3 or 30%)
(b) P(not car) = 1 − 12/60 = 1 − 1/5 = 4/5
```

Check by counting directly: 21 + 18 + 9 = 48 members do not use a car, and 48/60 = 4/5.

### The complement

The probability of an event not occurring is 1 minus the probability of it occurring:

```
P(A′) = 1 − P(A)
```

This works because "A happens" and "A does not happen" cover every possibility and share none. It is the quickest route whenever "not" or "at least one" appears.

## 8.2 Relative and expected frequencies

### Relative frequency

Sometimes you cannot work out a probability from symmetry. A biased die, a drawing pin or a factory machine have no obvious equal outcomes. Then you run an experiment and use:

```
relative frequency = number of times the outcome occurred / total number of trials
```

A relative frequency estimates a probability. The more trials you do, the more reliable the estimate. The relative frequencies of all the possible outcomes add up to 1.

**Worked example.** A six-sided die is rolled 200 times.

| Score | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Frequency | 24 | 30 | 28 | 26 | 32 | 60 |

The frequencies add up to 200. The relative frequency of a 6 is 60/200 = 0.3. For a fair die you would expect about 1/6, which is 0.167 to 3 decimal places. A 6 came up almost twice as often as that, which suggests the die may be biased. Two hundred rolls is a reasonable sample, so this is fairly strong evidence, though not proof.

### Expected frequency

Expected frequency tells you how many times to expect an outcome:

```
expected frequency = probability of the outcome × number of trials (or size of the population)
```

You can use a theoretical probability or a relative frequency from an experiment.

**Worked example (population).** A factory finds that the probability a bulb is faulty is 0.04. In a batch of 2500 bulbs, the expected number of faulty bulbs is 0.04 × 2500 = 100.

**Worked example (using the die above).** Using the relative frequency 0.3 for a 6, the expected number of sixes in 500 further rolls of that die is 0.3 × 500 = 150. If the die were fair, the expectation would be 500 × 1/6 = 83.3, which is about 83.

An expected frequency need not be a whole number, and it is not a promise. A real set of trials will usually differ from it.

### Fair, biased and random

- **Fair** means every outcome is equally likely. A fair coin has P(heads) = 1/2.
- **Biased** means the outcomes are not equally likely, so some are favoured. The die above looks biased.
- **Random** means each item has a chance of being picked and the choice cannot be predicted or controlled. "A ball is chosen at random" tells you every ball is equally likely to be chosen, so you can use the equally-likely formula.

If a question asks whether a game is fair, compare each probability with what a fair game would give and refer to the numbers in your answer.

## 8.3 Probability of combined events

Combined events are two or more events considered together, such as two rolls of a die or two items drawn from a bag. Sometimes they happen with replacement, meaning the item is put back before the next pick, and sometimes without replacement. The syllabus lists three methods. Choose the one that fits the information you are given.

### Sample space diagrams

A sample space diagram lists every equally likely outcome. It suits two events that each have a small number of outcomes.

**Worked example.** A fair spinner has sections numbered 1, 2 and 3. A fair four-sided die is numbered 1 to 4. The spinner and die are used once each and the scores are multiplied.

| × | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 1 | 2 | 3 | 4 |
| **2** | 2 | 4 | 6 | 8 |
| **3** | 3 | 6 | 9 | 12 |

There are 12 equally likely outcomes.

```
P(product is 4)     = 2/12 = 1/6
P(product is 6 or more) = 5/12   (6, 8, 6, 9, 12)
```

A product is odd only when both scores are odd. That gives 2 × 2 = 4 cells, so P(product is even) = 1 − 4/12 = 2/3.

### Venn diagrams

Venn diagrams use sets. The notation P(A ∩ B) means the probability of A and B, the overlap. P(A ∪ B) means the probability of A or B or both, the union. The universal set ξ holds every outcome, so the numbers in a Venn diagram add up to the total.

**Worked example.** Of 50 people at a cafe, 28 ordered tea (T), 22 ordered coffee (C) and 8 ordered neither.

```
People who ordered at least one drink = 50 − 8 = 42
n(T ∪ C) = n(T) + n(C) − n(T ∩ C)
42 = 28 + 22 − n(T ∩ C), so n(T ∩ C) = 8
```

Fill in the diagram from the middle outwards: 8 in the overlap, 28 − 8 = 20 in tea only, 22 − 8 = 14 in coffee only and 8 outside. Check: 20 + 8 + 14 + 8 = 50.

```
P(T ∩ C) = 8/50 = 4/25
P(T ∪ C) = 42/50 = 21/25
P(tea only) = 20/50 = 2/5
P(T′) = 22/50 = 11/25
P((T ∪ C)′) = 8/50 = 4/25
```

With three sets, fill the region where all three overlap first, then the regions where exactly two overlap, then the regions with one set only.

**Worked example (three sets).** Of 40 pupils, 20 play chess (A), 18 play draughts (B) and 15 play go (C). Seven play A and B, 6 play A and C, 5 play B and C, and 3 play all three. Exactly two games: A and B only 7 − 3 = 4, A and C only 6 − 3 = 3, B and C only 5 − 3 = 2. One game only: A 20 − 4 − 3 − 3 = 10, B 18 − 4 − 2 − 3 = 9, C 15 − 3 − 2 − 3 = 7. The regions total 38, so 2 pupils play none. P(exactly one game) = 26/40 = 13/20.

### Tree diagrams

A tree diagram shows a sequence of events. Write the probabilities beside the branches and write the outcomes at the end of the branches. The branches leaving any one point carry probabilities with total 1.

Two rules do the work:

- Multiply along the branches to get the probability of a path (this means "and").
- Add the probabilities of different paths that give the outcome you want (this means "or").

**Without replacement.** The probabilities on the second set of branches change, because the pool has changed.

**Worked example.** A box holds 9 tokens: 4 gold (G) and 5 silver (S). Two tokens are taken at random without replacement.

```
First pick:   G 4/9      S 5/9
After G: 3 gold, 5 silver left, so second pick  G 3/8, S 5/8
After S: 4 gold, 4 silver left, so second pick  G 4/8, S 4/8
```

```
P(GG) = 4/9 × 3/8 = 12/72 = 1/6
P(SS) = 5/9 × 4/8 = 20/72 = 5/18
P(same colour) = 12/72 + 20/72 = 32/72 = 4/9
P(at least one gold) = 1 − P(SS) = 1 − 5/18 = 13/18
```

Check "at least one gold" the long way: GG is 12/72, GS is 4/9 × 5/8 = 20/72 and SG is 5/9 × 4/8 = 20/72, which add to 52/72 = 13/18. Both routes agree.

**With replacement.** The token goes back, so the second set of branches is the same as the first. Then P(GG) = 4/9 × 4/9 = 16/81, and P(same colour) = 16/81 + 25/81 = 41/81. Compare this with 4/9 without replacement: the answers differ, so the wording matters.

**Branches that differ by path.** The second event does not have to use the same probabilities every time.

**Worked example.** The probability that a train is delayed is 0.2. If it is delayed, the probability that a pupil reaches school late is 0.7. If it is not delayed, that probability is 0.05.

```
P(delayed and late)     = 0.2 × 0.7  = 0.14
P(not delayed and late) = 0.8 × 0.05 = 0.04
P(late) = 0.14 + 0.04 = 0.18
P(delayed and on time)  = 0.2 × 0.3  = 0.06
```

All four path probabilities (0.14, 0.06, 0.04 and 0.76) add to 1, which is a good final check.

## Choosing a method

- Two small, equally likely events, such as two dice or two spinners: sample space diagram.
- Counts of people or objects that belong to overlapping groups: Venn diagram.
- Events in sequence, especially with or without replacement, or with more than two stages: tree diagram.

## Common errors

- Using the wrong total. In the club table, the denominator is 60, not 21 or 18.
- Forgetting to reduce the total by one on the second branch when the question says without replacement.
- Adding along the branches when you should multiply, or multiplying across different paths when you should add.
- Counting the overlap twice in a Venn diagram, or forgetting the people outside every circle.
- Reading P(T′) as "coffee only". It also contains everyone in neither set.
- Quoting a relative frequency from a handful of trials as if it were exact.
- Treating an expected frequency as a guaranteed result.
- Giving a probability outside the range 0 to 1, or writing a ratio such as 3:7 instead of a fraction, decimal or percentage.

## Where to go next

Use the [revision notes](/resources/o-level-mathematics-probability-revision-notes/) for a self-test, then the [practice questions](/resources/o-level-mathematics-probability-practice/). Venn work in the [Number guide](/resources/o-level-mathematics-number/) builds the counting skills. Check your progress against the [checklist](/checklists/cambridge/o-level/mathematics/) or run a [free diagnostic](/diagnostics/).

## Official syllabus

Cambridge O Level Mathematics (Syllabus D) 4024, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment.
