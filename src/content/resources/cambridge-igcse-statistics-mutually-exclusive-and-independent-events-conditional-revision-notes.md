---
title: "Cambridge IGCSE Statistics: Exclusive and independent events, conditional probability, tree diagrams (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Tree Diagrams Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on exclusive and independent events, conditional probability and tree diagrams for Cambridge IGCSE Statistics 0479."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense outcomes 7.5, 7.6 and 7.7 of Topic 7 (Probability) in the 2027 Cambridge IGCSE Statistics (0479) syllabus. The [study guide](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional/) has the full explanations and worked examples. To test yourself afterwards, use the [practice set](/resources/cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-practice/), the [course hub](/boards/cambridge/igcse/statistics/), the [checklist](/checklists/cambridge/igcse/statistics/) and the [free diagnostics](/diagnostics/) are also linked.

## Key definitions

| Term | Meaning |
|---|---|
| Mutually exclusive | Cannot happen together, so P(A ∩ B) = 0 |
| Independent | One happening does not change the probability of the other |
| Conditional probability | Probability of an event given another has happened, written P(A given B) in words, with the syllabus using a vertical bar between A and B |
| Tree diagram | Branches for each stage, with a probability on every branch |
| With replacement | Item put back, so every draw has the same probabilities |
| Without replacement | Item kept out, so the numbers change after each draw |

## Rules to know (7.5)

| Situation | Rule |
|---|---|
| Not happening | P(A′) = 1 - P(A) |
| Mutually exclusive | P(A ∪ B) = P(A) + P(B) |
| Independent | P(A ∩ B) = P(A) × P(B) |
| Not mutually exclusive (7.4) | P(A ∪ B) = P(A) + P(B) - P(A ∩ B) |
| All outcomes, mutually exclusive | Probabilities add to 1 |

### Exclusive versus independent

- Mutually exclusive: both events cannot occur in one trial, so P(A ∩ B) = 0.
- Independent: the events can both occur, and the probability of both is the product.
- Two events with non-zero probabilities that are mutually exclusive are **never** independent, because 0 is not equal to P(A) × P(B).
- Exclusive suits "one trial, two outcomes". Independent suits "two separate trials".

### Testing for independence

1. Find P(A), P(B) and P(A ∩ B) from the data.
2. Work out P(A) × P(B).
3. If it equals P(A ∩ B), the events are independent. If not, they are not.
4. State the conclusion in the context of the question.

Reminder: in a survey of 200 people, events A and B with P(A) = 0.6, P(B) = 0.3 and P(A ∩ B) = 0.18 are independent, because 0.6 × 0.3 = 0.18.

## Conditional probability (7.6)

The formula P(A | B) = P(A ∩ B)/P(B) is not required by the syllabus notes. Use the method below.

**Method in steps**

1. Find the group named after the word "given". Only that group is now possible.
2. Count (or add the probabilities of) the outcomes in that group. This is your denominator.
3. Count how many of those outcomes also meet the event. This is your numerator.
4. Write the fraction and simplify.

Reminders:

- P(A given B) and P(B given A) are usually different. Check which group is the condition.
- Without replacement: reduce the total by one after each draw, and reduce the count of the colour taken.

## Tree diagrams (7.7)

### Drawing a tree

- Draw the first stage, then repeat for the next stage on every end point.
- Label each branch with its outcome and probability.
- Check that branches from one point add to 1.
- At the right-hand end, list each outcome and multiply along its path.

### Using a tree

| Task | Method |
|---|---|
| Probability of one full path | Multiply along the branches |
| Probability of an event with several paths | Work out each path, then add |
| "At least one" | 1 - P(none) |
| "Exactly one" of two stages | Add the two mixed paths |
| Conditional from a tree | Keep only the paths that satisfy the condition, then find the share for the event |

Check: the probabilities of all end outcomes add to 1.

### With and without replacement

```
With replacement           Without replacement
(bag of 3 red, 7 blue)     (bag of 3 red, 7 blue)

        3/10 -- R                  2/9 -- R
3/10 -- R                  3/10 -- R
        7/10 -- B                  7/9 -- B
Start                      Start
        3/10 -- R                  3/9 -- R
7/10 -- B                  7/10 -- B
        7/10 -- B                  6/9 -- B
```

The second-stage numbers stay the same on the left. On the right, the total drops to 9 and the count of the colour just taken drops by one.

## Worked reminders

**Three independent attempts, success probability 0.2 each.**

```
P(no successes)      = 0.8 × 0.8 × 0.8 = 0.512
P(at least one)      = 1 - 0.512 = 0.488
```

**Dependent stages.** P(A) = 0.6. If A happens, P(B) = 0.5. If A does not happen, P(B) = 0.2.

```
P(B) = 0.6 × 0.5 + 0.4 × 0.2 = 0.30 + 0.08 = 0.38
```

### Worked reminder: a table and a condition

A club has 50 members. 30 are adults, and 12 of the adults play chess. 20 are juniors, and 15 of the juniors play chess.

```
Chess players in total = 12 + 15 = 27
P(adult | plays chess)   = 12/27 = 4/9      (the condition is "plays chess")
P(plays chess | adult)   = 12/30 = 2/5      (the condition is "adult")
```

### Worked reminder: three stages

A coin is tossed three times. Each toss is independent, with P(head) = 1/2.

```
P(three heads)      = 1/2 × 1/2 × 1/2 = 1/8
P(exactly one head) = 3 × (1/2)³      = 3/8
P(at least one)     = 1 - 1/8         = 7/8
```

The three orders for exactly one head are HTT, THT and TTH. A tree with three stages has eight end points, and their probabilities add to 1.

### Checking a finished tree

1. Do the branches at every junction add to 1?
2. Are the second-stage numbers the same on each branch (independent) or different (dependent or without replacement)?
3. Do all end outcomes add to 1?
4. Does the answer make sense? A probability must lie between 0 and 1.

## Quick self-test

1. Events M and N cannot happen together, with P(M) = 0.3 and P(N) = 0.5. Find P(M ∪ N).
2. Events G and H are independent, with P(G) = 0.3 and P(H) = 0.5. Find P(G ∩ H).
3. A and B are independent with P(A) = 0.7 and P(B) = 0.2. Find the probability that neither happens.
4. Events X and Y are mutually exclusive, with P(X) = 0.4 and P(Y) = 0.3. Can they be independent? Justify your answer.
5. A bag holds 3 red and 7 blue counters. Two are taken with replacement. Find P(both red).
6. The same bag, but two are taken without replacement. Find P(both red).
7. In a class of 30, 18 study Spanish, and 11 of those 18 are girls. One Spanish student is picked by lot. What is the probability that this student is a girl?
8. Three independent attempts each succeed with probability 0.2. Find P(at least one success).
9. P(A) = 0.6. If A happens, P(B) = 0.5. If A does not happen, P(B) = 0.2. Find P(B).
10. A game is won with probability 0.4 each time, independently. It is played twice. Find P(exactly one win).
11. Two counters are taken without replacement from the bag in question 5. Find P(one red and one blue).
12. Explain in one sentence why branch probabilities leaving one point must add to 1.

### Answers

1. 0.3 + 0.5 = **0.8**
2. 0.3 × 0.5 = **0.15**
3. 0.3 × 0.8 = **0.24**
4. No. P(X ∩ Y) = 0, but P(X) × P(Y) = 0.12, which is not 0.
5. 0.3 × 0.3 = **0.09**
6. 3/10 × 2/9 = 6/90 = **1/15**
7. The condition is "Spanish", so the total is 18. **11/18**
8. 1 - 0.8³ = 1 - 0.512 = **0.488**
9. 0.6 × 0.5 + 0.4 × 0.2 = **0.38**
10. 0.4 × 0.6 + 0.6 × 0.4 = **0.48**
11. 3/10 × 7/9 + 7/10 × 3/9 = 21/90 + 21/90 = 42/90 = **7/15**
12. The branches cover every possible outcome at that stage, and the probabilities of all outcomes add to 1.

## Where marks are usually lost

- Using the sum rule when events can overlap, or the product rule when they depend on each other.
- Writing "mutually exclusive" as the reason for independence.
- Keeping the second-stage numbers unchanged when items are not put back.
- Dividing by the full total in a conditional question, not the group named after "given".
- Giving a bare final answer with no working on a multi-step question. Show the products and the sum.
- Adding along one path, or multiplying the separate paths.
- Forgetting that "at least one" is easier as 1 minus "none".
- Leaving a tree unlabelled, with branches that do not add to 1, or with no outcomes listed at the end.
- Answering an independence test with only numbers and no statement of the conclusion.

## Official syllabus

Source: the Cambridge IGCSE Statistics 0479 syllabus (examination year 2027), published by Cambridge University Press & Assessment. Covered here: Topic 7 Probability, outcomes 7.5 to 7.7. Hub: [Cambridge IGCSE Statistics](/boards/cambridge/igcse/statistics/).
