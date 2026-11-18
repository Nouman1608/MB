---
title: "Cambridge A Level Mathematics (9709): Probability -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "probability-cambridge-alevel-maths"
description: "Condensed 9709 Paper 5 notes on 5.3 Probability: notation, counting methods, exclusive and independent events, trees, conditional probability, self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 5.3 of Cambridge 9709 Paper 5. For full explanations and worked examples, see the [probability study guide](/resources/cambridge-a-level-mathematics-9709-probability-cambridge-alevel-maths/); for exam-style questions with mark schemes, use the [probability practice questions](/resources/cambridge-a-level-mathematics-9709-probability-cambridge-alevel-maths-practice/).

## Notation

| Symbol | Meaning |
|---|---|
| P(A) | probability that A happens |
| A′ | complement: A does not happen; P(A′) = 1 − P(A) |
| P(A ∩ B) | A and B both happen |
| P(A ∪ B) | A or B or both happen |
| P(A \| B) | probability of A given that B has happened |

The general formula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) does **not** need to be used explicitly; questions can be done with a diagram, a table or exclusive cases.

## Core rules

```
Equally likely outcomes      P(A) = favourable ÷ total
Exclusive events             P(A or B) = P(A) + P(B)
Independent events           P(A and B) = P(A) × P(B)
Conditional probability      P(A | B) = P(A ∩ B) ÷ P(B)
Rearranged                   P(A ∩ B) = P(B) × P(A | B)
At least one                 1 − P(none)
```

## Choosing a method

| Situation | Method |
|---|---|
| Two dice, two spinners, two coins | 6 × 6 (or similar) outcome grid |
| Draws without replacement, two stages | tree with changing denominators |
| Three or more draws, or "at least two of..." | counts with ⁿCᵣ |
| Random arrangements | favourable arrangements ÷ total arrangements |
| Data in a table | row or column totals as denominators |
| "Given that" | P(A ∩ B) ÷ P(B) |

## Exclusive versus independent

| | Exclusive | Independent |
|---|---|---|
| Can both happen? | no | yes (unless one has probability 0) |
| P(A ∩ B) | 0 | P(A) × P(B) |
| Effect of knowing B | A becomes impossible | P(A) unchanged |

Two events with non-zero probabilities **cannot be both exclusive and independent**.

To **test independence**: compute P(A ∩ B) and P(A) × P(B), compare, and write a conclusion. Equivalently, compare P(A | B) with P(A).

## Tree diagram checklist

- First-stage branches add to 1; each set of second-stage branches adds to 1.
- Second-stage probabilities are **conditional** on the first branch.
- Multiply along a path; add the paths that make up the event.
- For "first was X given that second was Y": P(X then Y) ÷ P(second is Y), adding every path that ends in Y in the denominator.

## Key terms

| Term | Meaning |
|---|---|
| Sample space | the set of all possible outcomes |
| Elementary event | a single outcome from the sample space |
| Equiprobable | all outcomes have the same probability |
| Exclusive | cannot happen at the same time |
| Independent | probability of one is unaffected by the other |
| Conditional probability | probability within a restricted sample space |
| Complement | everything outside the event |

## Reversed trees in three lines

For "given that the second counter is red, find the probability that the first was blue":

```
P(B then R)           from one path of the tree
P(second is R)        = P(R then R) + P(B then R)
P(first B | second R) = P(B then R) ÷ P(second is R)
```

The denominator always collects every path ending in the given outcome.

## Exam traps

- **Unordered dice outcomes.** (1, 2) and (2, 1) are different; there are 36 outcomes, not 21.
- **Replacement ignored.** Without replacement, the second denominator drops by one.
- **Independence asserted, not shown.** Always give the numerical comparison.
- **Exclusive and independent confused.** Exclusive is about overlap; independence is about influence.
- **Wrong denominator in conditional probability.** Divide by the probability of the **given** event.
- **P(A | B) and P(B | A) swapped.** "The probability that it was red, given that it was large" has "large" in the denominator.
- **Non-exclusive events added.** "A or B" needs the overlap removed, so list the exclusive cases instead.
- **Too much rounding.** Keep fractions or 4 significant figures until the final answer.

## Self-test

1. Two fair dice are thrown. Find P(the total is 10 or more).
2. Two fair dice are thrown. Find P(both scores are odd).
3. P(A) = 0.6 and P(B) = 0.5, and A and B are independent. Find P(A ∩ B) and P(A′ ∩ B′).
4. P(A) = 0.2, P(B) = 0.3 and P(A ∩ B) = 0.1. Are A and B independent?
5. A and B are exclusive with P(A) = 0.3 and P(B) = 0.4. Find P(A or B).
6. Can the events in question 5 be independent? Explain.
7. Two cards are taken without replacement from 4 red and 6 black cards. Find P(both red).
8. In question 7, find P(the cards are different colours).
9. P(B) = 0.4 and P(A ∩ B) = 0.1. Find P(A | B).
10. Three people are chosen at random from 5 men and 3 women. Find P(all three are men).
11. A fair coin is tossed 4 times. Find P(at least one head).
12. Two fair dice are thrown. Given that the total is 9, find the probability that one die shows a 4.

### Answers

1. Totals 10, 11, 12 occur 3 + 2 + 1 = 6 times: 6/36 = **1/6**.
2. 3 × 3 = 9 outcomes: **1/4**.
3. P(A ∩ B) = **0.3**; P(A′ ∩ B′) = 0.4 × 0.5 = **0.2**.
4. 0.2 × 0.3 = 0.06 ≠ 0.1, so **not independent**.
5. **0.7**.
6. **No**: P(A ∩ B) = 0 but P(A) × P(B) = 0.12.
7. 4/10 × 3/9 = **2/15**.
8. 2 × (4/10 × 6/9) = **8/15**.
9. 0.1 ÷ 0.4 = **0.25**.
10. ⁵C₃ ÷ ⁸C₃ = 10/56 = **5/28**.
11. 1 − (1/2)⁴ = **15/16**.
12. Total 9: (3, 6), (4, 5), (5, 4), (6, 3); two contain a 4: **1/2**.
