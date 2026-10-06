---
title: "AQA A-Level Mathematics: M: Probability (7357)"
seoTitle: "AQA A-Level Maths 7357 Probability Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "M: Probability"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "m-probability-aqa-alevel-maths"
description: "Study guide to AQA A-Level Maths Section M: mutually exclusive and independent events, conditional probability, trees, Venn diagrams and modelling."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section M: Probability** (content references M1 to M3) of the **AQA
A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. Section M is listed under Paper 3 in the specification, with the other statistics
sections (K to O). A calculator is required in every 7357 paper, and for Sections K to O the
specification says you must be able to use calculator technology to access probabilities from
standard statistical distributions.

Use it with the [Probability revision notes](/resources/aqa-a-level-mathematics-probability-revision-notes/)
and the [Probability practice questions](/resources/aqa-a-level-mathematics-probability-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start.

## What Section M covers

| Ref | What you must be able to do |
|---|---|
| M1 | Understand and use mutually exclusive and independent events when calculating probabilities |
| M1 | Link to discrete and continuous distributions |
| M2 | Understand and use conditional probability, including the use of tree diagrams, Venn diagrams and two-way tables |
| M2 | Understand and use the conditional probability formula P(A \| B) = P(A ∩ B) / P(B) |
| M3 | Modelling with probability, including critiquing assumptions made and the likely effect of more realistic assumptions |

## Notation and basic rules

The specification uses this notation, and you should use it in your working:

- A, B, C for events; P(A) for the probability of A.
- A′ for the complement of A ("not A").
- A ∪ B for "A or B (or both)"; A ∩ B for "A and B".
- P(A | B) for the probability of A given that B has happened.

Three rules underpin everything else:

```
0 ≤ P(A) ≤ 1
P(A′) = 1 − P(A)
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)     (addition rule)
```

The addition rule subtracts P(A ∩ B) because outcomes in both events are counted twice when you
add P(A) and P(B).

## M1: Mutually exclusive and independent events

**Mutually exclusive** events cannot happen together. Then P(A ∩ B) = 0, and the addition rule
becomes:

```
P(A ∪ B) = P(A) + P(B)
```

**Independent** events do not affect each other's probabilities. Then:

```
P(A ∩ B) = P(A) × P(B)
```

To **test** for independence, work out P(A) × P(B) and compare it with P(A ∩ B). Equal means
independent; different means not independent. Show both numbers and write a conclusion.

The two ideas are different. If P(A) > 0 and P(B) > 0, mutually exclusive events cannot be
independent, because P(A ∩ B) = 0 but P(A) × P(B) > 0. Knowing that A happened tells you B did
not.

### Worked example 1: testing for independence

P(A) = 0.4, P(B) = 0.35 and P(A ∪ B) = 0.61. Are A and B independent?

```
P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.4 + 0.35 − 0.61 = 0.14
P(A) × P(B) = 0.4 × 0.35 = 0.14
```

P(A ∩ B) = P(A) × P(B), so **A and B are independent**. They are not mutually exclusive, since
P(A ∩ B) ≠ 0.

### Link to discrete distributions

The values of a discrete random variable are mutually exclusive outcomes: X cannot equal 2 and 3
at once. So you **add** probabilities of separate values, and they must total 1. Repeated
observations are usually assumed **independent**, so you **multiply** across observations. The
binomial distribution in Section N rests on exactly these two ideas.

### Worked example 2: a biased die

The score S on a biased die has P(S = s) = (s + 1)/27 for s = 1, 2, …, 6.

Check the total: (2 + 3 + 4 + 5 + 6 + 7)/27 = 27/27 = 1.

```
P(S is even) = P(S=2) + P(S=4) + P(S=6) = (3 + 5 + 7)/27 = 15/27 = 5/9
```

The die is rolled twice and the rolls are independent.

```
P(both even) = 5/9 × 5/9 = 25/81 = 0.309 (3 s.f.)
P(total is 12) = P(S=6) × P(S=6) = (7/27)² = 49/729 = 0.0672 (3 s.f.)
```

Adding uses mutual exclusivity within one roll; multiplying uses independence between rolls.

### Link to continuous distributions

For a continuous random variable, the probability of any single exact value is 0, and
probabilities are areas. The events X < a and X > b (with a < b) are mutually exclusive, so
their probabilities add.

### Worked example 3: two tails of a Normal model

X ~ N(50, 4²). Find P(X < 44 or X > 58).

```
P(X < 44) = 0.06681   (calculator, Normal cdf)
P(X > 58) = 0.02275
P(X < 44 or X > 58) = 0.06681 + 0.02275 = 0.0896 (3 s.f.)
```

The two events cannot both happen, so you add. Use your calculator's Normal distribution
function directly; the specification expects you to access these probabilities with calculator
technology.

## M2: Conditional probability

P(A | B) means "the probability of A, given that B has happened". The condition B shrinks the
sample space to B only. The specification states the formula:

```
P(A | B) = P(A ∩ B) / P(B)
```

Rearranged, it gives the multiplication rule P(A ∩ B) = P(B) × P(A | B), which is what you use
along the branches of a tree diagram.

If A and B are independent, P(A | B) = P(A). This is a second way to test for independence.

### Two-way tables

In a table of counts, "given B" means "use only the B row or column". The denominator is that
row or column total, not the grand total.

**Worked example 4.** A survey of 300 gym members records age group and whether they use the
gym's app.

| | Uses app | Does not | Total |
|---|---|---|---|
| Under 30 | 84 | 36 | 120 |
| 30 and over | 72 | 108 | 180 |
| Total | 156 | 144 | 300 |

```
P(uses app | under 30) = 84/120 = 0.7
P(under 30 | uses app) = 84/156 = 7/13 = 0.538 (3 s.f.)
P(uses app) = 156/300 = 0.52
```

P(uses app | under 30) = 0.7 ≠ 0.52 = P(uses app), so using the app is **not independent** of
age group. Note that P(A | B) and P(B | A) are different: the two answers above use different
denominators.

### Venn diagrams

Fill a Venn diagram from the **middle outwards**: intersection first, then the "only" regions,
then the region outside both. The four regions must total 1.

**Worked example 5.** P(A) = 0.55, P(B) = 0.35 and P(A′ ∩ B′) = 0.2. Find P(A | B) and P(B | A′).

```
P(A ∪ B) = 1 − 0.2 = 0.8
P(A ∩ B) = 0.55 + 0.35 − 0.8 = 0.1
A only = 0.55 − 0.1 = 0.45      B only = 0.35 − 0.1 = 0.25
check: 0.45 + 0.1 + 0.25 + 0.2 = 1

P(A | B)  = P(A ∩ B)/P(B)  = 0.1/0.35  = 2/7 = 0.286 (3 s.f.)
P(B | A′) = P(B ∩ A′)/P(A′) = 0.25/0.45 = 5/9 = 0.556 (3 s.f.)
```

For P(B | A′), the region "B and not A" is the "B only" region, and the denominator is everything
outside A.

### Tree diagrams

Each branch after the first carries a **conditional** probability. Multiply along a path to get
the probability of that path; add the paths you need.

**Worked example 6: reversing the condition.** In a factory, 4% of components are faulty. A test
flags 95% of faulty components and also flags 3% of good ones. A component is flagged. Find the
probability that it is faulty.

```
First branches: F 0.04, F′ 0.96
Second branches: flagged | F = 0.95, flagged | F′ = 0.03

P(F ∩ flagged)  = 0.04 × 0.95 = 0.038
P(F′ ∩ flagged) = 0.96 × 0.03 = 0.0288
P(flagged) = 0.038 + 0.0288 = 0.0668

P(F | flagged) = 0.038 / 0.0668 = 0.569 (3 s.f.)
```

Only about 57% of flagged components are faulty, because good components are so common that 3%
of them is a large share of all flags.

### Without replacement

When items are not replaced, the second-stage probabilities change.

**Worked example 7.** A bag holds 6 red and 4 blue counters. Two are taken without replacement.
Find P(at least one blue) and P(first is red | at least one blue).

```
P(at least one blue) = 1 − P(R, R) = 1 − (6/10 × 5/9) = 1 − 1/3 = 2/3
P(R then B) = 6/10 × 4/9 = 4/15

P(first red | at least one blue) = P(R then B) / P(at least one blue)
                                 = (4/15) / (2/3) = 2/5
```

The numerator is "first red **and** at least one blue", which is only the path R then B.

## M3: Modelling with probability

A probability model rests on assumptions. Typical ones are:

- **equally likely outcomes** (a fair coin, an unbiased die, a random selection);
- **independence** between trials or between people;
- **constant probability** from one trial to the next;
- a probability **estimated from relative frequency** in past data is accurate for the future.

You must be able to state the assumption a calculation needs, judge whether it is realistic in
context, and say how a more realistic assumption would probably change the answer.

### Worked example 8: penalty kicks

A footballer scores each penalty with probability 0.8. Model her next 5 penalties as independent,
each with probability 0.8.

```
P(scores all 5) = 0.8⁵ = 0.328 (3 s.f.)
P(scores at least 4) = 0.8⁵ + 5 × 0.8⁴ × 0.2 = 0.32768 + 0.4096 = 0.737 (3 s.f.)
```

The factor 5 counts the positions of the single miss.

**Critique.** The value 0.8 is probably a relative frequency from her past penalties, so it is
only an estimate, and a less reliable one if it came from few kicks. Independence and a constant
probability are doubtful. Confidence after scoring, nerves after a miss, tiredness late in a
match and a goalkeeper who learns her habits all make the outcome of one kick depend on earlier
ones.

**Effect of a more realistic assumption.** If scoring makes the next kick more likely to score and
missing makes the next kick less likely, results bunch together. Runs of all goals and runs of
misses both become more likely, so P(scores all 5) would probably be **higher** than 0.328. Say
"probably" or "likely": without new numbers you can only describe the direction.

### What makes a good critique

- Quote the **specific assumption** ("each kick is independent"), not "the model is too simple".
- Give a **reason from the context** why it may fail.
- State the **likely direction** of the effect on the answer, if you can.
- Suggest an **improvement**: more data, separate probabilities for different conditions, or
  conditional probabilities on a tree.

The modelling cycle used here is set out in the
[overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/).

## Common errors

- Adding probabilities of events that are not mutually exclusive, so outcomes in both are counted
  twice.
- Multiplying probabilities of events that are not independent, such as draws without
  replacement.
- Mixing up "mutually exclusive" and "independent", or claiming events are independent without
  showing a numerical test.
- Dividing by the grand total instead of the row or column total in a two-way table.
- Writing P(A | B) when you mean P(B | A).
- In a Venn diagram, writing P(A) in the A circle instead of the "A only" region.
- Forgetting to change the second-stage probabilities when items are not replaced.
- Critiquing a model with generic comments that do not name the assumption or the context.
- Rounding intermediate values early. Keep exact fractions or full calculator values, and round
  only the final answer (3 s.f. unless told otherwise).

## Next steps

Condense this with the [Probability revision notes](/resources/aqa-a-level-mathematics-probability-revision-notes/),
then test yourself with the [Probability practice questions](/resources/aqa-a-level-mathematics-probability-practice/).
Histograms as probability models appear in the
[data presentation and interpretation guide](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation/),
and the link between ⁿCᵣ and binomial probabilities is in the
[sequences and series guide](/resources/aqa-a-level-mathematics-sequences-and-series/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.14, M: Probability.
