---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.11 Formal definition of conditional probability and independence -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.92
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-11"
description: "Revision notes on IB DP Maths AA section 4.11: conditional probability formula, three equivalent independence tests, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 4.11, the formal definition of conditional probability and
independence**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021), examined at SL
and HL. The
[4.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-11/)
explains each idea with worked examples; the
[4.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-11-practice/)
test it. For Venn, tree and table methods from section 4.6, see the
[probability and distributions revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/).

## The formulae to know

```
P(A | B) = P(A ∩ B) / P(B)                      (P(B) > 0)
P(A ∩ B) = P(B) P(A | B) = P(A) P(B | A)         (multiplication rule)
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)                (addition rule)
P(A ∩ B′) = P(A) − P(A ∩ B)                      (splitting A)
Independent:  P(A | B) = P(A) = P(A | B′)
              equivalently P(A ∩ B) = P(A) P(B)
Mutually exclusive:  P(A ∩ B) = 0
```

## Condensed recall

- **Read the bar as "given".** The event after the bar is what you know has happened, so its
  probability goes in the denominator.
- **Restricted sample space.** In a table, P(A | B) uses only the row or column for B. In a Venn
  diagram, it is the overlap divided by circle B.
- **Two conditionals, one overlap.** P(A | B) and P(B | A) share the numerator P(A ∩ B) but divide by
  different things.
- **Testing independence.** Pick whichever of the equivalent tests matches the information. Compare
  exact values. One failure proves dependence.
- **Independence carries over to complements.** If A and B are independent, so are A and B′, A′ and
  B, and A′ and B′. The proof uses P(A ∩ B′) = P(A) − P(A)P(B) = P(A)P(B′).
- **Independent versus exclusive.** For events with non-zero probabilities these cannot both be true:
  exclusive gives P(A ∩ B) = 0, independent gives P(A ∩ B) = P(A)P(B) > 0.
- **Tree diagrams.** Second-stage branches are conditional probabilities. If they are the same on
  every first-stage branch, the stages are independent.

## Key terms

| Term | Meaning |
|---|---|
| Conditional probability | The probability of one event when another is known to have occurred |
| Joint probability, P(A ∩ B) | The probability that both events occur |
| Independent events | The occurrence of one does not change the probability of the other |
| Mutually exclusive events | Events that cannot occur together |
| Complement, A′ | The event "A does not occur"; P(A′) = 1 − P(A) |
| Two-way table | A table of counts classified by two attributes, used to read conditional probabilities |
| Multiplication rule | P(A ∩ B) = P(B) P(A given B), used along tree branches |

## Quick reference: reading a table

For a table with rows B and B′ and columns A and A′, writing n(·) for a count:

| You want | Numerator | Denominator |
|---|---|---|
| P(A) | column total for A | grand total |
| P(A given B) | cell in row B, column A | row total for B |
| P(B given A) | cell in row B, column A | column total for A |
| P(A ∩ B) | cell in row B, column A | grand total |

## Exam traps

- **Trap: the swapped conditional.** "The probability that a late commuter came by car" is
  P(car given late), not P(late given car). Identify the known condition first.
- **Trap: rounding before testing.** 0.333 and 1/3 are not equal for a "show that" or a test of
  independence. Keep fractions.
- **Trap: "at least one".** Condition on the full event, which often has more outcomes than students
  expect (11 of the 36 outcomes for two dice contain at least one six).
- **Trap: assuming independence.** Only multiply P(A)P(B) for P(A ∩ B) when the question states or you
  have shown that the events are independent.
- **Trap: impossible values.** If your Venn diagram region comes out negative, or a probability
  exceeds 1, an earlier step is wrong.
- **Trap: wording of a conclusion.** "Not independent because P(A given B) = 0.2 and P(A) = 0.15625,
  which are not equal" earns the mark; "they are dependent" with no comparison does not.

## Self-test

1. Write the definition of P(A | B).
2. State the condition for A and B to be independent in the form the guide gives.
3. P(A ∩ B) = 0.12 and P(B) = 0.3. Find P(A | B).
4. P(A) = 0.5, P(B) = 0.2, P(A ∩ B) = 0.1. Are A and B independent?
5. P(A) = 0.3, P(B | A) = 0.6. Find P(A ∩ B).
6. Can two events with non-zero probabilities be both independent and mutually exclusive? Explain.
7. P(A) = 0.25, P(B) = 0.4 and A, B are independent. Find P(A ∪ B).
8. P(A) = 0.25, P(B) = 0.4 and A, B are mutually exclusive. Find P(A given B).
9. In a class of 30, 12 study French. Of these, 4 also study Spanish. Of the 18 who do not study
   French, 6 study Spanish. Find P(Spanish given French) and P(Spanish given not French).
10. Using question 9, are studying French and studying Spanish independent?
11. A and B are independent with P(A) = 0.7. Write down P(A given B′).
12. Two fair coins are tossed. Find P(two heads given at least one head).

**Answers**

1. P(A | B) = P(A ∩ B)/P(B), for P(B) > 0.
2. P(A | B) = P(A) = P(A | B′).
3. 0.12/0.3 = 0.4.
4. P(A)P(B) = 0.5 × 0.2 = 0.1 = P(A ∩ B), so yes, they are independent.
5. P(A ∩ B) = P(A)P(B | A) = 0.3 × 0.6 = 0.18.
6. No. Mutually exclusive means P(A ∩ B) = 0, but independence needs P(A ∩ B) = P(A)P(B), which is
   greater than 0.
7. P(A ∩ B) = 0.1, so P(A ∪ B) = 0.25 + 0.4 − 0.1 = 0.55.
8. P(A ∩ B) = 0, so P(A given B) = 0.
9. P(S given F) = 4/12 = 1/3; P(S given F′) = 6/18 = 1/3.
10. Yes: P(S) = 10/30 = 1/3, and both conditionals equal 1/3, so P(S given F) = P(S) = P(S given F′).
11. 0.7, because independence of A and B implies independence of A and B′.
12. Outcomes with at least one head: HH, HT, TH (3 outcomes). Only HH has two heads, so the answer is
    1/3.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.11: formal definition and use of the formulae for
conditional probability and for independent events.
