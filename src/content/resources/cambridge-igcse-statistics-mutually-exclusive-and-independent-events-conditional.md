---
title: "Cambridge IGCSE Statistics: Exclusive and independent events, conditional probability, tree diagrams (0479)"
seoTitle: "IGCSE Statistics 0479 Independent Events and Trees"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Mutually exclusive and independent events, conditional probability and tree diagrams"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 33
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-0479"
description: "Study guide to exclusive and independent events, conditional probability and tree diagrams for Cambridge IGCSE Statistics 0479, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers Topic 7 (Probability) outcomes 7.5, 7.6 and 7.7 of the 2027 Cambridge IGCSE Statistics (0479) syllabus: mutually exclusive and independent events, conditional probability in simple cases, and tree diagrams. The syllabus text shows no tier split for this unit. Condensed notes are in the [revision notes](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-revision-notes/) and exam-style work is in the [practice set](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-practice/). Related pages: the [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/), the printable [checklist](/checklists/cambridge/igcse/statistics/) and the [free diagnostics](/diagnostics/), which help you find where to begin.

## What this unit covers

| Outcome | Skill required |
|---|---|
| 7.5 | Explain mutually exclusive and independent events. Use P(A ∪ B) = P(A) + P(B) for mutually exclusive events and P(A ∩ B) = P(A) × P(B) for independent events |
| 7.6 | Calculate conditional probability in simple cases. The syllabus notes say the formula for P(A given B) is not required |
| 7.7 | Use tree diagrams to represent combined events and to help calculate their probabilities |

The notation comes from outcome 7.1: P(A′) is "not A", P(A ∩ B) is "A and B", P(A ∪ B) is "A or B". Probabilities can be written as fractions, decimals or percentages, and the syllabus covers selections with and without replacement. Knowledge of permutations and combinations formulas is not required.

## 1. Mutually exclusive events

An event pair is **mutually exclusive** when both cannot occur on the same trial. Knowing that one has happened tells you the other has not. In symbols, P(A ∩ B) = 0, so for mutually exclusive events:

P(A ∪ B) = P(A) + P(B)

The same idea extends to any number of events that cannot overlap. Mutually exclusive events that between them cover every outcome have probabilities that total 1.

**Worked example 1.** A ferry crossing is on time with probability 0.62, late by up to 10 minutes with probability 0.23, and late by more than 10 minutes otherwise. Find the probability that a crossing is late by any amount.

```
P(more than 10 minutes late) = 1 - 0.62 - 0.23 = 0.15
P(late by any amount) = 0.23 + 0.15 = 0.38
```

The two "late" outcomes cannot happen on the same crossing, so you may add. Check: 1 - 0.62 = 0.38.

**When events are not mutually exclusive.** Take 40 students. 18 are in the chess club (C), 14 are in the badminton club (B) and 6 are in both. Adding 18/40 + 14/40 = 0.8 would count the 6 students twice. The addition rule from outcome 7.4 corrects this:

```
P(C ∪ B) = 18/40 + 14/40 - 6/40 = 26/40 = 0.65
```

Test before you add: can both events happen on the same trial? If yes, the simple sum is wrong.

## 2. Independent events

Two events are **independent** if one happening does not change the probability of the other. Typical sources are separate trials that cannot influence each other, such as two different coin tosses, or draws made with replacement. For independent events:

P(A ∩ B) = P(A) × P(B)

You can also use this as a **test**. If the numbers show P(A ∩ B) = P(A) × P(B), the events are independent. If they do not, the events are not independent.

**Worked example 2 (calculation).** A and B are independent, P(A) = 0.7 and P(B) = 0.15. Find P(A ∩ B), P(A ∪ B) and the probability that neither happens.

```
P(A ∩ B) = 0.7 × 0.15 = 0.105
P(A ∪ B) = 0.7 + 0.15 - 0.105 = 0.745
P(neither) = P(A′) × P(B′) = 0.3 × 0.85 = 0.255
```

Check: 1 - 0.745 = 0.255. If A and B are independent, so are A′ and B′, which is why the last line works.

**Worked example 3 (test).** In a survey of 250 households, 200 have broadband (B), 75 have a dog (D) and 60 have both. Are B and D independent?

```
P(B) = 200/250 = 0.8
P(D) = 75/250 = 0.3
P(B ∩ D) = 60/250 = 0.24
P(B) × P(D) = 0.8 × 0.3 = 0.24
```

The two values are equal, so owning a dog and having broadband are independent in this survey. Had 50 households had both, P(B ∩ D) would be 0.2, which differs from 0.24, and the events would not be independent.

### Exclusive is not the same as independent

These ideas are often mixed up. If A and B are mutually exclusive and both have non-zero probability, then P(A ∩ B) = 0 but P(A) × P(B) > 0. So they **cannot** be independent. Exclusive events are strongly linked: if A happens, B is certain not to.

| | Mutually exclusive | Independent |
|---|---|---|
| Idea | Both cannot occur | Neither changes the other's chance |
| Rule | P(A ∪ B) = P(A) + P(B) | P(A ∩ B) = P(A) × P(B) |
| P(A ∩ B) | 0 | P(A) × P(B) |
| Typical wording | "one outcome of a single trial" | "separate trials", "with replacement" |

## 3. Conditional probability in simple cases

A **conditional probability** is the probability of an event given that another has already happened. It is written P(A | B), read "the probability of A given B". The syllabus does not require the formula, so use this idea instead: **the condition shrinks the list of possible outcomes.** Count only outcomes where the condition holds, then ask what fraction of those also satisfy the event.

**Worked example 4 (from a table).** 120 staff are asked how they travel to work.

| | Car | Bus | Cycle | Total |
|---|---|---|---|---|
| Finance | 14 | 16 | 10 | 40 |
| Support | 28 | 12 | 10 | 50 |
| Design | 8 | 10 | 12 | 30 |
| Total | 50 | 38 | 32 | 120 |

Someone who cycles is picked. Find the probability that they work in Finance. Then find the probability that a randomly picked Finance employee cycles.

```
Given "cycles": 32 people are possible, 10 are in Finance
P(Finance | cycles) = 10/32 = 5/16

Given "Finance": 40 people are possible, 10 cycle
P(cycles | Finance) = 10/40 = 1/4
```

The two answers differ. P(A | B) and P(B | A) are different questions, and the total you divide by is the group named after the word "given".

**Without replacement.** When items are not put back, the second probability depends on the first outcome. A box has 9 counters: 4 green and 5 yellow. One is taken and is green. Given that, 8 counters remain, 3 of them green, so P(second is green) = 3/8. This is a conditional probability, and tree diagrams build it in automatically.

## 4. Tree diagrams

A **tree diagram** shows each stage of a combined event as a set of branches, with the probability written on each branch. Draw the stages left to right.

Three working rules:

1. Branches that start from the same point have probabilities totalling 1.
2. **Multiply along** a route to get the probability of that whole outcome.
3. **Add** the routes that make up the event you want.

At the second stage the numbers on the branches are conditional probabilities. They are the same on every branch for independent events and different for dependent events.

**Worked example 5 (independent stages).** Each seed germinates with probability 0.85, independently. Two seeds are sown.

```
First seed        Second seed       Outcome   Probability
                  0.85 -- G         GG        0.85 × 0.85 = 0.7225
        0.85 -- G
                  0.15 -- N         GN        0.85 × 0.15 = 0.1275
Start
                  0.85 -- G         NG        0.15 × 0.85 = 0.1275
        0.15 -- N
                  0.15 -- N         NN        0.15 × 0.15 = 0.0225
```

- Both germinate: 0.7225.
- Exactly one germinates: 0.1275 + 0.1275 = 0.255.
- At least one germinates: 1 - 0.0225 = 0.9775.

"At least one" is almost always quicker as 1 minus "none". The four outcomes add to 1, which is a useful check.

**Worked example 6 (without replacement).** A jar holds 10 sweets: 6 mint (M) and 4 toffee (T). Two sweets are drawn one after the other and neither is put back.

```
Draw 1       Draw 2            Result    Probability
             5/9 -- M          MM        6/10 × 5/9 = 30/90
   6/10 -- M
             4/9 -- T          MT        6/10 × 4/9 = 24/90
Start
             6/9 -- M          TM        4/10 × 6/9 = 24/90
   4/10 -- T
             3/9 -- T          TT        4/10 × 3/9 = 12/90
```

The second-stage denominators are 9 because one sweet has gone.

- Same type: 30/90 + 12/90 = 42/90 = 7/15.
- Different types: 24/90 + 24/90 = 48/90 = 8/15.
- Given the second sweet is toffee, what is the probability the first was mint? The condition leaves only MT and TT, which have probabilities 24/90 and 12/90. Mint first is 24 out of 36 shares: 24/36 = **2/3**.

**Worked example 7 (stages that depend on each other, with a conditional question).** On a weekday, the probability of a signal fault on a rail line is 0.2. If there is a fault, the probability a train is delayed is 0.7. If there is no fault, the probability is 0.05.

```
Fault, delayed:      0.2 × 0.7  = 0.14
Fault, on time:      0.2 × 0.3  = 0.06
No fault, delayed:   0.8 × 0.05 = 0.04
No fault, on time:   0.8 × 0.95 = 0.76
```

P(delayed) = 0.14 + 0.04 = 0.18.

Given the train is delayed, what is the probability there was a fault? Only the two "delayed" paths are possible, and the fault path is 0.14 of the 0.18 total.

P(fault | delayed) = 0.14/0.18 = 7/9 ≈ 0.778

The second-stage branches are different after a fault and after no fault, so the stages are not independent.

## Common errors

- Adding probabilities when both events can occur together. Look for overlap first.
- Multiplying probabilities for events that are not independent without changing the second-stage numbers.
- Leaving the denominator at the original total after something has been removed.
- Dividing by the wrong total in a conditional question. Divide by the group after "given".
- Saying "mutually exclusive" when you mean "independent", or the reverse.
- Adding along a path or multiplying across separate paths. It is multiply along, add across.
- Branches from one point that do not sum to 1. Check every junction.

## Next steps

Condense the rules with the [revision notes](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-revision-notes/), then attempt the [practice set](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-practice/). Tick off the outcomes on the [checklist](/checklists/cambridge/igcse/statistics/), and try the [free diagnostics](/diagnostics/) to find gaps.

## Official syllabus

Source: the Cambridge IGCSE Statistics 0479 syllabus (examination year 2027), published by Cambridge University Press & Assessment. Covered here: Topic 7 Probability, outcomes 7.5 to 7.7. Hub: [Cambridge IGCSE Statistics](/boards/cambridge/igcse/statistics/).
