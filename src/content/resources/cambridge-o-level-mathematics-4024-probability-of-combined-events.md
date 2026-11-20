---
title: "Cambridge O Level Mathematics (4024): Probability of Combined Events"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 8.3
syllabusTopics:
  - qualification: "o-level"
    topic: "probability"
  - qualification: "o-level"
    topic: "probability"
    subtopic: "probability-of-combined-events-4024"
description: "Study guide to 4024 section 8.3: probabilities of combined events using sample space diagrams, Venn diagrams and tree diagrams, with and without replacement."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section 8.3, Probability of combined events, in the Probability topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to calculate the probability of combined events using, where appropriate, sample space diagrams, Venn diagrams and tree diagrams. Combined events could be with or without replacement. The notation P(A ∩ B) and P(A ∪ B) may be used in the context of Venn diagrams. On tree diagrams, outcomes are written at the end of the branches and probabilities by the side of the branches. After this guide, use the [probability of combined events revision notes](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events-revision-notes/) and the [probability of combined events practice questions](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events-practice/).

## What section 8.3 asks for

1. List all outcomes of two events in a sample space diagram, and count the ones you want.
2. Use Venn diagrams with the notation ∩ (and) and ∪ (or).
3. Draw tree diagrams for two or more events, with and without replacement.
4. Multiply along branches, add between branches.

## Sample space diagrams

A sample space diagram is a table or list that shows every possible outcome of two events. It works well when the outcomes of each event are equally likely.

### Worked example 1

Two fair dice are rolled and the scores are added. The diagram has 6 × 6 = 36 equally likely outcomes.

| + | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

Find (a) P(total 7), (b) P(total at least 10), (c) P(a double), (d) P(total is a prime number).

```
(a) six 7s: 6/36 = 1/6
(b) totals 10, 11, 12 occur 3 + 2 + 1 = 6 times: 6/36 = 1/6
(c) doubles (1,1) to (6,6): 6/36 = 1/6
(d) primes 2, 3, 5, 7, 11 occur 1 + 2 + 4 + 6 + 2 = 15 times: 15/36 = 5/12
```

Count by rows or by listing the totals. Do not forget that (2, 3) and (3, 2) are different outcomes.

## Independent events and the multiplication rule

Two events are **independent** if the outcome of one does not change the probability of the other, for example a coin flip and a dice roll. For independent events:

```
P(A and B) = P(A) × P(B)
```

### Worked example 2

A fair coin is flipped and a fair dice is rolled. Find P(heads and a 5).

```
P(heads) = 1/2, P(5) = 1/6
P(heads and 5) = 1/2 × 1/6 = 1/12
```

## Mutually exclusive events and the addition rule

Events are **mutually exclusive** if they cannot both happen. Then:

```
P(A or B) = P(A) + P(B)
```

For events that can overlap:

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
```

The overlap is counted once in each of P(A) and P(B), so it is subtracted once.

### Worked example 3

P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Find P(A ∩ B).

```
0.7 = 0.5 + 0.4 − P(A ∩ B)
P(A ∩ B) = 0.9 − 0.7 = 0.2
```

### Worked example 4

A and B are independent, with P(A) = 0.6 and P(B) = 0.5. Find P(A ∩ B) and P(A ∪ B).

```
P(A ∩ B) = 0.6 × 0.5 = 0.3
P(A ∪ B) = 0.6 + 0.5 − 0.3 = 0.8
```

## Venn diagrams

In the notation of sets, A ∩ B means "A and B" (the overlap), A ∪ B means "A or B or both" and A′ means "not A". With a Venn diagram, fill in the overlap first, and then the "only" regions, then the region outside both circles. Divide by the total of the whole diagram.

With frequencies, the regions add up to the total number in the group, as in section 8.1. With probabilities, the regions must add up to 1.

### Worked example 5

P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. Find the probability of exactly one of the events, and of neither.

```
A only = 0.5 − 0.2 = 0.3
B only = 0.4 − 0.2 = 0.2
exactly one = 0.3 + 0.2 = 0.5
neither = 1 − (0.3 + 0.2 + 0.2) = 0.3
```

## Tree diagrams

A tree diagram shows the outcomes of events in order. Each branch has a probability written beside it. The outcomes are written at the ends of the branches. At each set of branches, the probabilities add up to 1.

To find the probability of a path, **multiply** along the branches. To find the probability of a result that can happen in several ways, **add** the probabilities of the relevant paths.

### With replacement

A bag has 4 red and 6 blue counters. One counter is chosen, its colour noted, and it is put back. A second counter is then chosen.

```
First pick        Second pick         Outcome   Probability
              0.4  Red                RR        0.4 × 0.4 = 0.16
        Red <
              0.6  Blue               RB        0.4 × 0.6 = 0.24
Start <
              0.4  Red                BR        0.6 × 0.4 = 0.24
        Blue <
              0.6  Blue               BB        0.6 × 0.6 = 0.36
```

The probabilities on the second pair of branches are the same as on the first pair, because the counter was replaced. The four outcomes add up to 0.16 + 0.24 + 0.24 + 0.36 = 1.

```
P(two reds) = 0.16
P(one of each colour) = 0.24 + 0.24 = 0.48
P(at least one red) = 1 − P(BB) = 1 − 0.36 = 0.64
```

"At least one" is often quicker as 1 minus the probability of none.

### Without replacement

A bag has 5 red and 3 blue counters. Two counters are chosen without replacement. The second set of probabilities changes, because there is one fewer counter in the bag.

```
First pick        Second pick         Outcome   Probability
              4/7  Red                RR        5/8 × 4/7 = 20/56
        Red <
 5/8          3/7  Blue               RB        5/8 × 3/7 = 15/56
Start <
              5/7  Red                BR        3/8 × 5/7 = 15/56
 3/8    Blue <
              2/7  Blue               BB        3/8 × 2/7 = 6/56
```

```
P(both red) = 20/56 = 5/14
P(different colours) = 15/56 + 15/56 = 30/56 = 15/28
P(at least one blue) = 1 − 5/14 = 9/14
```

Check: 20 + 15 + 15 + 6 = 56, so the outcomes add up to 56/56 = 1.

### Three events

For three events, extend the tree. With three fair coin flips there are 8 equally likely outcomes, each with probability 1/2 × 1/2 × 1/2 = 1/8. The number of ways to get exactly one head is 3 (HTT, THT, TTH), so P(exactly one head) = 3/8.

### Worked example 6

The probability that it rains is 0.3. If it rains, the probability that a bus is late is 0.4. If it does not rain, the probability that the bus is late is 0.1. Find P(bus late).

```
rain and late: 0.3 × 0.4 = 0.12
no rain and late: 0.7 × 0.1 = 0.07
P(late) = 0.12 + 0.07 = 0.19
```

The probabilities on the second set of branches depend on the first event, so these events are not independent. This is a common use of tree diagrams.

### Three colours without replacement

A bag has 3 red, 4 green and 5 blue counters. Two are taken without replacement. Find P(same colour).

```
red, red: 3/12 × 2/11 = 6/132
green, green: 4/12 × 3/11 = 12/132
blue, blue: 5/12 × 4/11 = 20/132
total = 38/132 = 19/66
```

## Common mistakes

- Adding along branches or multiplying between them.
- Keeping the same probabilities on the second pick when there is no replacement.
- Forgetting that the order matters in a tree, so RB and BR are two different paths.
- Counting (2, 3) and (3, 2) as one outcome in a sample space.
- Using P(A) + P(B) for overlapping events without subtracting P(A ∩ B).
- Not checking that all outcomes add to 1.

## Exam technique

- **Complete the tree diagram**: put the missing probabilities by the branches and the outcomes at the branch ends.
- **Calculate** the probability: show the multiplication of branches and the addition of paths.
- Use "1 − P(none)" for "at least one".
- Keep fractions exact until the end.

## Next steps

Work through the [probability of combined events practice questions](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events-practice/) and recap with the [probability of combined events revision notes](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 8.3 Probability of combined events.
