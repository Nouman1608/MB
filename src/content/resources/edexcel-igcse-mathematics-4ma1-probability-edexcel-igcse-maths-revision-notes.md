---
title: "Edexcel International GCSE Mathematics A (4MA1): Probability -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Statistics and probability"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-edexcel-igcse-maths"
    subtopic: "probability-edexcel-igcse-maths"
description: "Revision notes for Edexcel IGCSE Maths 4MA1 section 6.3: probability rules, sample spaces, Venn diagrams, tree diagrams, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for section 6.3 (Probability) of the 4MA1 specification. Statements A to J on the Foundation Tier are needed by both tiers; tree diagrams, independent events and picking without replacement are **Higher tier only**. Worked examples are in the [Probability study guide](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths/); exam-style questions are in the [Probability practice questions](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Outcome | One possible result of an experiment |
| Event | One or more outcomes |
| Equally likely | Every outcome has the same chance |
| Random | Every item has an equal chance of being chosen |
| Sample space | The list or grid of all possible outcomes |
| Complement A′ | "Not A" |
| Mutually exclusive | Cannot happen at the same time |
| Relative frequency | Number of successes ÷ number of trials |
| Expected frequency | Probability × number of trials |
| Independent | One event does not affect the other (Higher) |
| Without replacement | The item taken is not put back (Higher) |

## Rules

```
P(event) = favourable outcomes ÷ total outcomes   (equally likely outcomes)
0 ≤ P(A) ≤ 1, P(impossible) = 0, P(certain) = 1
all outcomes add to 1
P(A′) = 1 − P(A)
P(A or B) = P(A) + P(B)   only if A and B are mutually exclusive
expected frequency = P(A) × number of trials
relative frequency = successes ÷ trials
```

Higher:

```
P(A and B) = P(A) × P(B)   if A and B are independent
tree diagram: multiply along branches, add between routes
P(at least one) = 1 − P(none)
```

## Sample spaces

- Two coins: HH, HT, TH, TT (4 outcomes).
- Coin and dice: 2 × 6 = 12 outcomes.
- Two dice: 6 × 6 = 36 outcomes. Number of ways to get each total:

| Total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ways | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

- Choosing 2 from 4 (order does not matter): 6 pairs. List by fixing the first letter: AB, AC, AD, BC, BD, CD.

## Probability tables

Unknown probabilities: set the total equal to 1. If P(C) = x and P(D) = 3x with P(A) + P(B) = 0.6, then 4x = 0.4 and x = 0.1.

## Venn diagrams

- Fill the overlap first, then the "only" regions, then outside.
- Overlap from totals: (circle A + circle B) − (number in at least one).
- "A or B" includes the overlap; "exactly one" excludes it.

## Experimental probability

- More trials → more reliable estimate.
- Fair or biased? Compare relative frequency with the theoretical probability, over many trials.

## Higher tier only: tree diagrams

- Each pair of branches from one point adds to 1.
- With replacement or independent: the second-stage probabilities are the same as the first.
- Without replacement: the total drops by 1, and so does the count of the item already taken.
- Three stages: multiply three probabilities along each route.
- "Exactly one success in three": one route × number of positions (3).

Mini example: 5 red and 2 blue, two taken without replacement. P(both blue) = 2/7 × 1/6 = 2/42 = 1/21.

## Exam traps

- Probabilities written as ratios.
- A probability bigger than 1 or negative (always an error).
- Adding events that overlap.
- Missing reversed pairs on a two-dice grid.
- Counting the Venn overlap twice.
- Second branch not reduced without replacement.
- "At least one" done by listing routes and missing some.
- Rounding decimals in the middle of a calculation.

## Self-test

1. What is the probability of an impossible event?
2. P(rain) = 0.35. Find P(no rain).
3. A bag has 4 red and 6 blue beads. Find P(red).
4. How many outcomes when a coin is tossed and a dice is rolled?
5. Two dice: find P(total 10).
6. P(A) = 0.2, P(B) = 0.45, mutually exclusive. Find P(A or B).
7. P(win) = 0.15. How many wins would you expect in 60 games?
8. A drawing pin lands point up 33 times in 120 throws. Estimate P(point up).
9. In a Venn diagram, 10 are in A only, 4 in both, 6 in B only, 5 outside. Find P(A).
10. (Higher) Independent events with P = 0.5 and 0.4. Find P(both).
11. (Higher) A bag has 3 white and 2 black. Two taken without replacement. Find P(both black).
12. (Higher) P(hit) = 0.7 per shot, independent. Find P(at least one hit in two shots).

### Answers

1. 0.
2. 0.65.
3. 4/10 = 2/5.
4. 12.
5. 3/36 = 1/12.
6. 0.65.
7. 0.15 × 60 = 9.
8. 33/120 = 0.275.
9. 14/25.
10. 0.2.
11. 2/5 × 1/4 = 1/10.
12. 1 − 0.3² = 0.91.

## Frequently asked questions

**What does mutually exclusive mean?**
Two events are mutually exclusive if they cannot happen at the same time, such as rolling a 2 and rolling a 5 on one dice. Only then can you add their probabilities to find P(A or B).

**Are tree diagrams on the Foundation tier of 4MA1?**
No. Tree diagrams, independent events and simple conditional probability are Higher tier only. Foundation candidates use sample space lists and grids for two successive events.

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 6, Statistics and probability: 6.3 Probability (Foundation Tier A to J; Higher Tier A to D).
