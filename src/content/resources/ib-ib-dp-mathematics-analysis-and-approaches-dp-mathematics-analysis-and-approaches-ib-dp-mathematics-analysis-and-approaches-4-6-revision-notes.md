---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.6 Combined, mutually exclusive, conditional and independent events -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.6
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-6"
description: "Revision notes for IB Maths AA 4.6: Venn and tree diagrams, the addition rule, mutually exclusive, conditional and independent events, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.6** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): combined, mutually exclusive, conditional and independent events, and the
diagrams used to find their probabilities. Worked examples are in the
[4.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6/).

## The four rules

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)          combined events
P(A ∩ B) = 0                               mutually exclusive
P(A | B) = P(A ∩ B) / P(B)                 conditional
P(A ∩ B) = P(A) P(B)                       independent
```

Rearranged forms worth knowing: P(A ∩ B) = P(B) P(A | B), and for independent events P(A | B) = P(A).

## Mutually exclusive versus independent

- Mutually exclusive: cannot happen together; Venn circles do not overlap.
- Independent: one happening does not change the probability of the other.
- With non-zero probabilities, mutually exclusive events are **never** independent.
- To show independence, compare P(A ∩ B) with P(A)P(B) numerically and conclude.

## Diagrams

| Diagram | Use it when | Key rule |
|---|---|---|
| Venn diagram | Overlapping categories | Fill the intersection first; all regions sum to the total |
| Tree diagram | Events in stages | Branches from one point sum to 1; multiply along, add between paths |
| Sample space diagram | Two experiments with equally likely outcomes | Count cells |
| Table of outcomes | Two categorical variables | For P(A given B), divide by B's row or column total |

**Without replacement:** second-stage numerator and denominator both change. **With replacement:** second
stage is the same as the first.

## Conditional probability: where the denominator comes from

- From a table or Venn diagram: the number (or probability) in the "given" event.
- From a tree: the total probability of the "given" event, adding every path that contains it.
- P(A | B) and P(B | A) are usually different: read "given" carefully.

## Key terms

| Term | Meaning |
|---|---|
| Union A ∪ B | A or B or both |
| Intersection A ∩ B | Both A and B |
| Complement A′ | Not A |
| Mutually exclusive | Cannot occur together: P(A ∩ B) = 0 |
| Independent | P(A ∩ B) = P(A)P(B) |
| Conditional probability | Probability of A when B is known to have occurred |

## Exam traps

- Adding P(A) + P(B) for "or" with overlapping events.
- Assuming independence without being told or testing.
- Calling mutually exclusive events independent.
- The wrong denominator in a conditional probability.
- Not reducing the denominator without replacement.
- Probabilities on tree branches from one point not adding to 1.
- Forgetting the "neither" region of a Venn diagram.

## Worked reminder

P(A) = 0.6, P(B) = 0.5 and P(A ∪ B) = 0.8. Then P(A ∩ B) = 0.6 + 0.5 − 0.8 = 0.3, and P(A)P(B) = 0.3, so A
and B are independent. P(A | B) = 0.3/0.5 = 0.6 = P(A), which confirms it.

## Method checklist

- Name the events with letters and write the probability statement you want, such as P(B | late).
- Decide the diagram from the structure of the information, not from habit.
- On a tree, write conditional probabilities on the second-stage branches.
- For "given", find the denominator first.
- For independence, give two numbers and a conclusion.
- Check: probabilities between 0 and 1; regions or branches summing correctly.

## Second worked reminder

A student takes the bus with probability 0.7 and is late with probability 0.1 if she takes the bus, 0.4 if
she walks. P(late) = 0.07 + 0.12 = 0.19, and P(bus | late) = 0.07/0.19 = 7/19 ≈ 0.368. The answer is very
different from P(late | bus) = 0.1, which shows why the order of a conditional probability matters.

## Self-test

1. P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Find P(A ∩ B).
2. Are the events in question 1 independent?
3. Find P(A | B) for the events in question 1.
4. A and B are mutually exclusive, P(A) = 0.3 and P(B) = 0.45. Find P(A ∪ B).
5. Can two mutually exclusive events with non-zero probabilities be independent? Explain.
6. A and B are independent, P(A) = 0.6 and P(B) = 0.3. Find P(A ∩ B) and P(A ∪ B).
7. A bag has 3 red and 5 green counters. Two are taken without replacement. Find P(both green).
8. Repeat question 7 with replacement.
9. P(A ∩ B) = 0.12 and P(B) = 0.3. Find P(A | B).
10. P(A) = 0.2, P(B | A) = 0.5 and P(B | A′) = 0.25. Find P(B).
11. Of 60 students, 40 play a sport, and 25 of those who play a sport are girls. Find P(girl | plays sport).
12. On a tree diagram, why must branches from the same point sum to 1?

### Answers

1. 0.5 + 0.4 − 0.7 = 0.2.
2. P(A)P(B) = 0.2 = P(A ∩ B), so yes.
3. 0.2/0.4 = 0.5.
4. 0.3 + 0.45 = 0.75.
5. No: P(A ∩ B) = 0 but P(A)P(B) > 0.
6. P(A ∩ B) = 0.18; P(A ∪ B) = 0.6 + 0.3 − 0.18 = 0.72.
7. (5/8)(4/7) = 20/56 = 5/14.
8. (5/8)(5/8) = 25/64.
9. 0.12/0.3 = 0.4.
10. 0.2 × 0.5 + 0.8 × 0.25 = 0.1 + 0.2 = 0.3.
11. 25/40 = 5/8.
12. They cover every possible outcome at that stage and do not overlap.

## Frequently asked questions

**Are mutually exclusive events independent?**
Not if both have non-zero probability: P(A ∩ B) = 0 but P(A)P(B) > 0.

**How do I show two events are independent?**
Compare P(A ∩ B) with P(A)P(B), or P(A | B) with P(A), giving the numbers and a conclusion.

**What changes without replacement?**
The second-stage probabilities: both the number of favourable items and the total fall.

## Where to go next

Practise with the [4.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6-practice/)
and then the [4.11 formal conditional probability revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-11-revision-notes/).
