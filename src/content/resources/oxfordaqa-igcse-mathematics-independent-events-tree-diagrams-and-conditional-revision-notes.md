---
title: "OxfordAQA International GCSE Mathematics: Independent events, tree diagrams and conditional probability (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Tree Diagrams Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Independent events, tree diagrams and conditional probability"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 102
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-oxfordaqa-igcse-maths"
    subtopic: "probability-oxfordaqa-igcse-maths"
description: "Condensed revision notes on independent events, tree diagrams and conditional probability for OxfordAQA International GCSE Mathematics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the [study guide](/resources/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional/) for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). They cover section 3.4.3 Probability, statements S17 and S18, which are both **Extension only**. Practise afterwards with the [practice questions](/resources/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [checklist](/checklists/oxfordaqa/igcse/mathematics/). To find your weak spots first, use the [free 10-minute diagnostics](/diagnostics/).

## Statement map

| Statement | Skill | Tier |
|---|---|---|
| S17 | Probability of independent combined events, including tree diagrams and other representations | Extension only |
| S17 | P(A ∩ B) = P(A) × P(B) for independent A and B | Extension only |
| S18 | Conditional probabilities, including tree diagrams and other representations | Extension only |

## Key definitions

| Term | Meaning |
|---|---|
| Independent events | Knowing that one has happened leaves the probability of the other unchanged |
| A ∩ B | Both A and B happen |
| Complement | P(not A) = 1 − P(A) |
| Conditional probability | The probability of an event given that another has happened, written P(A given B) |
| With replacement | The item goes back, so later probabilities stay the same |
| Without replacement | The item stays out, so later probabilities change |

## Independent events: the rule

```
P(A ∩ B) = P(A) × P(B)   whenever A and B are independent
```

- "And" means multiply. Extend to three or more independent events by multiplying every probability.
- To test independence, multiply P(A) by P(B) and check the result against P(A ∩ B). A match means independent.
- "At least one" is usually 1 − P(none). Find P(none) by multiplying the complements.
- "Exactly one" means add the separate ways, each of which is a product.

**Worked reminder.** Two machines work independently. Machine 1 runs with probability 0.8 and machine 2 with probability 0.7.

```
P(both run)    = 0.8 × 0.7 = 0.56
P(neither run) = 0.2 × 0.3 = 0.06
P(at least one runs) = 1 − 0.06 = 0.94
P(exactly one runs)  = 0.8 × 0.3 + 0.2 × 0.7 = 0.24 + 0.14 = 0.38
```

Check: 0.56 + 0.06 + 0.38 = 1, so every case is counted once.

## Tree diagrams: method in steps

1. Draw one set of branches for each stage, left to right.
2. Write a probability on every branch. Branches from one point must add to 1.
3. Multiply the branch probabilities on one path to get that outcome.
4. Add the paths that match the question.
5. Check that all end-of-path probabilities add to 1.

### Replacement or not

| | With replacement | Without replacement |
|---|---|---|
| Second-stage probabilities | Same as the first stage | Change after the first pick |
| Denominator at stage 2 | Same total | Total reduced by 1 |
| Independent stages? | Yes | No |
| Typical wording | "replaced", "put back", "returned" | "not replaced", "kept", "two are chosen together" |

"Two are chosen together" or "two are picked at once" is treated as without replacement.

**Worked reminder (without replacement).** A bag holds 11 counters: 3 red and 8 blue. Two are taken without replacement.

```
P(red, red)   = 3/11 × 2/10 = 6/110 = 3/55
P(blue, blue) = 8/11 × 7/10 = 56/110 = 28/55
P(same)       = 3/55 + 28/55 = 31/55
P(different)  = 1 − 31/55 = 24/55
Check by paths: 3/11 × 8/10 + 8/11 × 3/10 = 24/110 + 24/110 = 48/110 = 24/55
```

## Other representations

- **Two-way table**: ideal for conditional probability. Read the given row or column total as the new total.
- **Sample space grid**: lists every outcome of two independent events with equally likely outcomes. Count favourable outcomes over total outcomes.
- **Organised lists**: write the paths in a fixed order so none is missed or repeated.

## Conditional probability: method in steps

1. Find the "given" event. It follows the word "given" or "if".
2. Restrict attention to outcomes where the given event happens. That is your new total.
3. Count or calculate the part of that total where the other event also happens.
4. Divide: P(A | B) = P(A ∩ B) ÷ P(B).

### From a tree

The second-stage branch is already a conditional probability. The branch from "rain" to "late" is P(late | rain). To reverse it:

```
P(rain | late) = P(rain and late) ÷ P(late)
P(late) = sum of every path that ends in "late"
```

**Worked reminder.** Frost has probability 0.4. With frost, a car fails to start with probability 0.2. Without frost, it fails with probability 0.05.

```
P(frost and fails)    = 0.4 × 0.2  = 0.08
P(no frost and fails) = 0.6 × 0.05 = 0.03
P(fails) = 0.08 + 0.03 = 0.11
P(frost | fails) = 0.08 ÷ 0.11 = 8/11
```

### From a table

If 60 members are split into Adult and Junior with 24 Junior, and 9 of the Juniors play chess, then P(chess | Junior) = 9/24 = 3/8. The total used is 24, not 60.

## Wording that tells you what to do

| Phrase in the question | What it usually means |
|---|---|
| "both", "and", "then" | Multiply along a path |
| "either", "or", "one of the following" | Add the separate paths |
| "at least one" | 1 − P(none) |
| "exactly one", "exactly two" | Add every arrangement, each one a product |
| "given that", "if", "knowing that" | Conditional: reduce the total |
| "replaced", "put back" | Same probabilities at every stage |
| "not replaced", "chosen together" | Totals reduce at each stage |

**Worked reminder (exactly two of three).** A basketball player scores each shot with probability 0.6, independently. Find the probability of scoring exactly two of three shots.

```
Each arrangement, such as score, score, miss: 0.6 × 0.6 × 0.4 = 0.144
There are 3 arrangements (the miss can be first, second or third).
P(exactly two) = 3 × 0.144 = 0.432
```

## Must-know distinctions

- **P(A | B) and P(B | A)** are usually different. Identify which event is given.
- **Independent and mutually exclusive** are different ideas. Independent events can both happen. Do not use one test for the other. Mutually exclusive events are taught in the sample spaces unit.
- **With and without replacement.** Only with replacement are stages independent.
- **Multiply along, add across.** Along one path multiply. Between paths add.
- **"At least one"** is the complement of "none".

## Quick self-test

1. Events G and H are independent with P(G) = 0.45 and P(H) = 0.2. Find P(G ∩ H).
2. Events C and D have P(C) = 0.5, P(D) = 0.3 and P(C ∩ D) = 0.2. Are they independent?
3. A fair coin is tossed three times. Find the probability of three tails.
4. Two independent switches work with probabilities 0.9 and 0.6. Find the probability that at least one works.
5. A bag holds 3 white and 7 black beads. Two are taken without replacement. Find the probability that both are white.
6. In the bag from question 5, find the probability that the second bead is black, given that the first was white.
7. In a group of 50 people, 30 have a bicycle and 12 of those also have a scooter. Find P(scooter | bicycle).
8. The probability of a delay is 0.4. If delayed, a meeting starts late with probability 0.7. If not delayed, with probability 0.2. Find P(meeting starts late).
9. Using question 8, find P(delayed | meeting starts late).
10. A tree diagram branch pair at one point has probabilities 0.35 and x. Find x.

### Answers

1. 0.45 × 0.2 = **0.09**
2. 0.5 × 0.3 = 0.15, which is not 0.2, so **not independent**.
3. (1/2)³ = **1/8**
4. P(neither) = 0.1 × 0.4 = 0.04, so P(at least one) = 1 − 0.04 = **0.96**
5. 3/10 × 2/9 = 6/90 = **1/15**
6. After a white bead, 9 remain: 2 white and 7 black, so **7/9**.
7. Given bicycle, the total is 30, so 12/30 = **2/5**.
8. 0.4 × 0.7 + 0.6 × 0.2 = 0.28 + 0.12 = **0.4**
9. 0.28 ÷ 0.4 = 0.7, so **7/10**
10. x = 1 − 0.35 = **0.65**

## Where marks are usually lost

- Multiplying with the original total for the second pick when items are not replaced.
- Writing branch probabilities that do not add to 1 at a point.
- Stopping at one path when the question needs two or more paths added.
- Answering P(B | A) when the question asked for P(A | B).
- Using the grand total as the denominator for a conditional probability.
- Declaring events independent without showing the product comparison.
- Rounding a decimal part-way through, then losing accuracy in the final answer.
- Leaving "at least one" as a long list of paths and missing one, when 1 − P(none) was available.
- Giving a probability greater than 1 or below 0 and not noticing.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. These notes follow section 3.4.3 Probability, statements S17 and S18.
