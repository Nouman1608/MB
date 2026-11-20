---
title: "Cambridge O Level Mathematics (4024): Probability of Combined Events -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 4024 section 8.3: sample space, Venn and tree diagrams, multiplication and addition rules, with and without replacement, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes summarise section 8.3, Probability of combined events, of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Full explanations are in the [probability of combined events study guide](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events/), and exam-style questions are in the [probability of combined events practice questions](/resources/cambridge-o-level-mathematics-4024-probability-of-combined-events-practice/).

## What is examined

- The probability of combined events using sample space diagrams, Venn diagrams and tree diagrams where appropriate.
- Events with or without replacement.
- Notation P(A ∩ B) and P(A ∪ B) with Venn diagrams.
- On tree diagrams, outcomes are written at the ends of the branches and probabilities by the side of the branches.

## Key terms

| Term | Meaning |
|---|---|
| Combined event | two or more events taken together |
| Sample space | the list or table of all possible outcomes |
| Independent | one event does not change the probability of the other |
| Mutually exclusive | the events cannot both happen |
| With replacement | the item is put back, so probabilities stay the same |
| Without replacement | the item is not put back, so the next probabilities change |
| A ∩ B | A and B (the overlap) |
| A ∪ B | A or B or both (the union) |
| A′ | not A |

## The rules

```
independent events:         P(A and B) = P(A) × P(B)
mutually exclusive events:  P(A or B)  = P(A) + P(B)
any two events:             P(A ∪ B)   = P(A) + P(B) − P(A ∩ B)
complement:                 P(A′) = 1 − P(A)
at least one:               1 − P(none)
```

## Sample space diagrams

Use a table or list when two events each have equally likely outcomes.

| Two dice, sum | Count out of 36 |
|---|---|
| 7 | 6 |
| 10, 11 or 12 | 6 |
| a double | 6 |
| prime sum | 15 |
| at least one 6 | 11 |

Count (2, 3) and (3, 2) separately. The probability is the number of favourable outcomes divided by the size of the sample space.

## Method box: a tree diagram

1. Draw a branch for each outcome of the first event, with its probability beside it.
2. At the end of each branch, draw branches for the second event.
3. If the item is not replaced, change the second probabilities: one fewer item, and possibly one fewer of the colour taken.
4. Write each outcome at the end of its branch.
5. Multiply the probabilities along each path.
6. Add the paths that match the question.
7. Check that all paths add up to 1.

```
With replacement  (4 red, 6 blue):
    RR 0.16    RB 0.24    BR 0.24    BB 0.36

Without replacement  (5 red, 3 blue):
    RR 20/56   RB 15/56   BR 15/56   BB 6/56
```

## Venn diagrams

1. Fill in the overlap A ∩ B first.
2. Subtract it from each set to get "A only" and "B only".
3. The region outside both circles is 1 − P(A ∪ B).
4. All regions add up to 1 (or to the total number).

```
P(A) = 0.45, P(B) = 0.35, P(A ∩ B) = 0.1:
A only 0.35, B only 0.25, both 0.1, neither 0.3
```

## Dependent events

When the second probability depends on the first outcome, use the branch probabilities. Example: rain 0.3, late if rain 0.4, late if dry 0.1.

```
P(late) = 0.3 × 0.4 + 0.7 × 0.1 = 0.12 + 0.07 = 0.19
```

## Counting ways

For three coin flips (8 outcomes):

| Event | Ways | Probability |
|---|---|---|
| exactly one head | 3 | 3/8 |
| exactly two heads | 3 | 3/8 |
| three heads | 1 | 1/8 |
| at least one head | 7 | 7/8 |

## Worked patterns

```
Two dice, total at least 8:          15/36 = 5/12
Bag 6 red, 4 white, no replacement:  P(both red) = 6/10 × 5/9 = 1/3
                                     P(different) = 2 × 6/10 × 4/9 = 8/15
Three penalties, p = 0.8:            all three 0.512; at least one 0.992
Cards, both aces:                    4/52 × 3/51 = 1/221
```

## Checks before you finish

1. Do the probabilities at each pair of branches add up to 1?
2. Do all the final outcomes add up to 1?
3. Is the answer between 0 and 1?
4. For "at least one", did you try 1 − P(none)?
5. Is the fraction in its simplest form?

## Must-know distinctions

| With replacement | Without replacement |
|---|---|
| same probabilities on each pick | probabilities change |
| events are independent | events are dependent |
| total stays the same | total goes down by one |

| And | Or |
|---|---|
| multiply along branches | add paths or outcomes |

## Exam traps

- Adding along branches and multiplying between paths.
- Using the same numbers on the second branches in "without replacement".
- Forgetting one of the paths, such as BR as well as RB.
- Forgetting to subtract the overlap for P(A ∪ B).
- Leaving fractions unsimplified.
- Not checking that outcomes add to 1.

## Command words you will meet

| Command word | What to do |
|---|---|
| Complete | fill in the missing values on the diagram |
| Calculate | work out the probability, showing the multiplication |
| Show that | give structured evidence ending at the stated probability |
| Work out | calculate with or without a calculator |
| Write down | give the answer without working |

## Self-test

1. A fair coin is flipped and a fair dice is rolled. Find P(heads and a 5).
2. P(A) = 0.4, P(B) = 0.5 and A and B are independent. Find P(A ∩ B) and P(A ∪ B).
3. A bag has 2 red and 3 blue balls. Two are taken without replacement. Find P(both red).
4. Using question 3, find P(different colours).
5. A coin is flipped three times. Find P(at least one head).
6. Two counters are drawn with replacement from a bag in which 30% of the counters are blue. Find P(both counters are blue).
7. Using question 6, find P(at least one is blue).
8. Two cards are dealt from a pack of 52 without replacement. Find P(both are aces).
9. A bag has 1 red and 3 blue counters. One counter is drawn, then replaced, and another drawn. Find P(first red, second blue).
10. P(rain) = 0.4. If rain, P(late) = 0.5. If no rain, P(late) = 0.1. Find P(late).

### Answers

1. 1/2 × 1/6 = **1/12**.
2. P(A ∩ B) = 0.2; P(A ∪ B) = 0.4 + 0.5 − 0.2 = **0.7**.
3. 2/5 × 1/4 = **1/10**.
4. 2/5 × 3/4 + 3/5 × 2/4 = 6/20 + 6/20 = **3/5**.
5. 1 − 1/8 = **7/8**.
6. 0.3 × 0.3 = **0.09**.
7. 1 − 0.7 × 0.7 = **0.51**.
8. 4/52 × 3/51 = **1/221**.
9. 1/4 × 3/4 = **3/16**.
10. 0.4 × 0.5 + 0.6 × 0.1 = 0.2 + 0.06 = **0.26**.


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 8.3 Probability of combined events.
