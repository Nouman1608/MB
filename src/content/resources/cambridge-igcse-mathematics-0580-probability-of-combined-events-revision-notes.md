---
title: "Cambridge IGCSE Mathematics (0580): Probability of combined events -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 8 – Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 8.3
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "probability-of-combined-events-cambridge-igcse-maths"
description: "Revision notes for 0580 subtopic 8.3: the and/or rules, sample spaces, Venn diagrams, tree diagrams, with and without replacement, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **8.3 Probability of combined events** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). It is in both tiers; lines marked *(Extended)* apply to E8.3 only. For full explanations and worked examples, read the [combined events study guide](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events/); for exam-style questions, use the [combined events practice questions](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events-practice/).

## What the syllabus says

Calculate the probability of combined events using, where appropriate, sample space diagrams, Venn diagrams and tree diagrams.

| | Core | Extended |
|---|---|---|
| Replacement | with replacement only | with or without replacement |
| Venn diagrams | two sets | P(A ∩ B) and P(A ∪ B) may be used |
| Tree diagrams | outcomes at branch ends, probabilities beside branches | same |

## Key terms

| Term | Meaning |
|---|---|
| Combined event | An event made of two or more stages or conditions |
| Sample space | The list or grid of all possible outcomes |
| Independent | One result does not affect the probability of the other |
| Mutually exclusive | The outcomes cannot happen together |
| With replacement | The item is put back; probabilities stay the same |
| Without replacement | The item is kept out; totals and counts drop by one *(Extended)* |
| A ∩ B | A and B (the overlap) *(Extended notation)* |
| A ∪ B | A or B or both *(Extended notation)* |

## The rules

```
AND along a path  → multiply
OR between paths  → add (the paths are mutually exclusive)
At least one      → 1 − P(none)
Branches from one point add to 1; all path results add to 1
Independent A and B:  P(A and B) = P(A) × P(B)
```

## Choosing a diagram

| Situation | Best diagram |
|---|---|
| Two dice, two spinners, a coin and a dice (equally likely outcomes) | sample space grid |
| Overlapping categories, or P(A), P(B) and P(both) given | Venn diagram |
| Stages in order, or unequal probabilities | tree diagram |

## Sample space reminders

- Two dice: 36 outcomes. Sum 7 is the most likely total (6 ways).
- Fill the grid with the combined value (sum, product, difference), then count cells.
- Different values are not equally likely; cells are.

## Venn reminders

```
Fill the overlap first.
A only = P(A) − overlap
B only = P(B) − overlap
neither = 1 − (A only + overlap + B only)
P(A ∪ B) = A only + overlap + B only        (not P(A) + P(B))
```

## Tree reminders

```
With replacement:     3/10, 7/10   then   3/10, 7/10   (unchanged)
Without replacement:  3/10, 7/10   then   2/9, 7/9  (after green)
                                          3/9, 6/9  (after yellow)
```

Two-stage "one of each": add both orders, such as GY + YG.

## Worked reminder

A fair coin is tossed and a fair four-sided spinner (1 to 4) is spun. P(head and a 4) = 1/2 × 1/4 = 1/8. P(head or a 4, or both) = 1 − P(tail and not 4) = 1 − 1/2 × 3/4 = 5/8.

## Two-dice totals at a glance

| Total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ways (of 36) | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

So P(total of 10 or more) = (3 + 2 + 1)/36 = 6/36 = 1/6.

## A without-replacement reminder *(Extended)*

A class has 7 boys and 5 girls. Two students are chosen at random to be monitors.

```
P(two girls)       = 5/12 × 4/11 = 20/132 = 5/33
P(one of each)     = 7/12 × 5/11 + 5/12 × 7/11 = 70/132 = 35/66
P(at least one boy) = 1 − P(two girls) = 1 − 5/33 = 28/33
```

Choosing two people "at random" is always without replacement: the same person cannot be chosen twice.

## Exam traps

- Adding along a path instead of multiplying.
- Missing the second order in "one of each".
- Not reducing the second-stage denominator without replacement (or reducing it with replacement).
- Treating the different sums of two dice as equally likely.
- Using P(A) + P(B) for "A or B" when the events overlap.
- Mixing up ∩ (and) with ∪ (or).
- Leaving a tree incomplete when the question asks you to complete it.

## Self-test

1. Two fair dice are rolled. Find P(the sum is 7).
2. A fair coin is tossed three times. Find P(three heads).
3. P(A) = 0.7 and P(B) = 0.4; A and B are independent. Find P(A and B).
4. For question 3, find P(neither A nor B).
5. A bag has 2 red and 3 blue balls. One is taken and replaced, then another. Find P(both red).
6. For question 5, find P(one red and one blue).
7. *(Extended)* For question 5 without replacement, find P(both red).
8. P(A) = 0.4, P(B) = 0.45, P(A and B) = 0.1. Find P(A or B).
9. For question 8, find P(neither).
10. A fair dice is rolled twice. Find P(at least one six).
11. *(Extended)* What does P(A ∩ B′) mean in words?
12. The probability a light works is 0.95. Two lights work independently. Find P(exactly one works).

### Answers

1. 6/36 = **1/6**
2. (1/2)³ = **1/8**
3. 0.7 × 0.4 = **0.28**
4. 0.3 × 0.6 = **0.18**
5. 2/5 × 2/5 = **4/25**
6. 2 × 2/5 × 3/5 = **12/25**
7. 2/5 × 1/4 = **1/10**
8. 0.4 + 0.45 − 0.1 = **0.75** (A only 0.3, overlap 0.1, B only 0.35)
9. 1 − 0.75 = **0.25**
10. 1 − (5/6)² = **11/36**
11. **A happens and B does not**
12. 2 × 0.95 × 0.05 = **0.095**

## Next steps

- Re-read the worked examples in the [combined events study guide](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events/).
- Move on to "given that" questions with the [conditional probability revision notes](/resources/cambridge-igcse-mathematics-0580-conditional-probability-revision-notes/).
- Recap Topic 8 with the [probability revision notes](/resources/igcse-mathematics-probability-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International. Topic 8 Probability, subtopics C8.3 and E8.3 Probability of combined events.
