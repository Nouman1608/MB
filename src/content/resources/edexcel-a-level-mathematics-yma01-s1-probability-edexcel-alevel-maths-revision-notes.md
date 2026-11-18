---
title: "Edexcel International A Level Mathematics (YMA01): Probability -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-probability-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths S1 probability: the laws, conditional probability, independence tests, Venn and tree diagrams, and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S1, section 3: elementary probability, sample spaces, exclusive and complementary events, conditional probability, independence, and the sum and product laws with tree and Venn diagrams, including sampling with and without replacement. For worked examples, use the [probability study guide](/resources/edexcel-a-level-mathematics-yma01-s1-probability-edexcel-alevel-maths/).

## The laws

```
complement      P(A′) = 1 − P(A)
addition        P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
product         P(A ∩ B) = P(A) P(B | A) = P(B) P(A | B)
conditional     P(A | B) = P(A ∩ B) / P(B)
exclusive       P(A ∩ B) = 0,  so  P(A ∪ B) = P(A) + P(B)
independent     P(A | B) = P(A),  P(B | A) = P(B),  P(A ∩ B) = P(A) P(B)
```

All of these are expected to be remembered; they are not printed in the formulae booklet.

## Key terms

| Term | Meaning |
|---|---|
| Sample space | The set of all possible outcomes |
| Event | A set of outcomes from the sample space |
| Complementary events | A and A′: exactly one of them happens |
| Mutually exclusive | Cannot happen together: P(A ∩ B) = 0 |
| Exhaustive | Between them cover the whole sample space |
| Conditional probability | P(A \| B): the probability of A given that B has happened |
| Independent events | The occurrence of one does not change the probability of the other |
| With replacement | Item returned before the next draw; probabilities unchanged |
| Without replacement | Item kept out; later probabilities are conditional |

## Exclusive versus independent

| | Mutually exclusive | Independent |
|---|---|---|
| Test | P(A ∩ B) = 0 | P(A ∩ B) = P(A)P(B) |
| On a Venn diagram | Circles do not overlap | Overlap matches the product |
| Both at once? | Only if P(A) or P(B) is 0 | |

## Venn diagram routine (three events)

1. Triple overlap.
2. Each double overlap minus the triple.
3. Each single-event region: total minus the three overlap regions inside it.
4. Outside: total minus everything inside.
5. Check that the regions add to the total (or to 1).

For P(X | Y) from a Venn diagram, the denominator is everything inside Y; the numerator is everything inside both X and Y.

## Tree diagram routine

- Branch probabilities from one point add to 1.
- Second-stage branches are conditional on the first stage.
- Multiply along paths; add the paths you need.
- To reverse a conditional, divide one path by the total of all paths giving the condition:

```
P(first stage = A | outcome) = P(A and outcome) / P(outcome)
```

## Mini example: reversing a conditional

Machines A, B and C make 50%, 30% and 20% of output, with defect rates 2%, 3% and 5%.

```
P(defective) = 0.5(0.02) + 0.3(0.03) + 0.2(0.05) = 0.029
P(C | defective) = 0.010 / 0.029 = 0.345 (3 s.f.)
```

## Without replacement: quick counts

Three items from n without replacement: denominators n, n − 1, n − 2. For "exactly two of a kind", multiply one ordered path by the number of orders (here 3).

"At least one" = 1 − P(none).

## Algebra problems

When a question gives a mixture of probabilities:

1. Write every given value in symbols.
2. Use the product law to find P(A ∩ B) if a conditional is given.
3. Use the addition law to find the missing single probability.
4. Sketch a two-region Venn diagram and check it adds to 1.

**Finding an unknown with independence:** if P(A) = x, P(B) = 0.5, P(A ∪ B) = 0.65 and A, B are independent, then 0.65 = x + 0.5 − 0.5x, so x = 0.3.

## Sample spaces worth recognising

- **Two dice:** 36 equally likely ordered pairs; a 6 × 6 grid makes "given that" questions quick, because the condition picks out a set of cells.
- **Three coins:** 8 equally likely outcomes, from HHH to TTT.
- **Two draws without replacement from n items:** n(n − 1) equally likely ordered pairs.

For a conditional probability from a grid, count the cells meeting the condition (denominator), then the cells inside those that also meet the event (numerator).

## Exam traps

- Assuming independence without being told it or showing it.
- Using the full sample space instead of the reduced one for a conditional probability.
- Counting a triple overlap inside every double overlap.
- Not reducing the denominator on later draws without replacement.
- Giving "not independent" with no figures.
- Rounding intermediate probabilities: keep exact fractions until the end.

## Self-test

1. P(A) = 0.35, P(B) = 0.5 and A and B are mutually exclusive. Find P(A ∪ B).
2. A and B are independent, P(A) = 0.3 and P(B) = 0.6. Find P(A ∪ B).
3. Write P(A | B) in terms of P(A ∩ B) and P(B).
4. Can two events with non-zero probabilities be both exclusive and independent? Why?
5. P(A) = 0.5, P(B) = 0.4 and P(A | B) = 0.3. Find P(A ∩ B).
6. Using Question 5, find P(A ∪ B).
7. A fair die is rolled twice. Find P(two sixes | at least one six).
8. Two counters are drawn without replacement from 3 red and 2 blue. Find P(both red).
9. Repeat Question 8 with replacement.
10. What should the branch probabilities from one point of a tree diagram add to?
11. P(A) = 0.2, P(B) = 0.45 and P(A ∩ B) = 0.09. Are A and B independent?
12. State the quickest way to find P(at least one success).

**Answers:** 1. 0.85. 2. 0.3 + 0.6 − 0.18 = 0.72. 3. P(A | B) = P(A ∩ B)/P(B). 4. No: if they are exclusive, P(A ∩ B) = 0, but independence needs P(A ∩ B) = P(A)P(B) > 0. 5. 0.3 × 0.4 = 0.12. 6. 0.5 + 0.4 − 0.12 = 0.78. 7. 1/11 (11 outcomes contain a six; one of them is double six). 8. (3/5)(2/4) = 3/10. 9. (3/5)² = 9/25. 10. 1. 11. Yes: 0.2 × 0.45 = 0.09 = P(A ∩ B). 12. Use 1 − P(no successes).
