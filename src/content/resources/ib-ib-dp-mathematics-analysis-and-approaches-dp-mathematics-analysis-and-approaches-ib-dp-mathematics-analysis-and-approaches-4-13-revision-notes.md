---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.13 Bayes' theorem (HL) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.94
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-13"
description: "HL revision notes on IB DP Maths AA section 4.13: Bayes' theorem for two and three events, the tree method, key terms, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 4.13, Bayes' theorem**, in IB DP Mathematics: Analysis and
Approaches (first assessment 2021). This is AHL content, examined at HL only, and the guide limits it
to a maximum of three events. The
[4.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-13/)
derives the formula and works through full examples; the
[4.13 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-13-practice/)
test it. The whole probability unit is summarised in the
[probability and distributions revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/).

## The formulae

Two events (B and its complement B′):

```
P(B | A) = P(B) P(A | B) / [ P(B) P(A | B) + P(B′) P(A | B′) ]
```

Three mutually exclusive, exhaustive events B₁, B₂, B₃:

```
P(Bᵢ | A) = P(Bᵢ) P(A | Bᵢ) / [ P(B₁) P(A | B₁) + P(B₂) P(A | B₂) + P(B₃) P(A | B₃) ]
```

In words: **the branch you want, divided by the total of all branches that lead to what was
observed.**

## Condensed recall

- **Where it comes from.** P(B | A) = P(B ∩ A)/P(A), with P(B ∩ A) = P(B)P(A | B) on top and the law
  of total probability for P(A) underneath.
- **Exhaustive and exclusive.** The starting events must not overlap and must cover every case, so
  their probabilities add to 1.
- **Denominator = P(A).** Often a question asks for P(A) first; that answer is the denominator of the
  next part.
- **Observed complement.** If the observation is A′, use the A′ branches: P(B | A′) =
  P(B)P(A′ | B)/P(A′), with P(A′) = 1 − P(A).
- **Prior and updated probability.** P(B) before the observation; P(B | A) after it. If A is more
  likely under B than under B′, the observation raises the probability of B, and vice versa.
- **Rare starting events.** When P(B) is small, even strong evidence can leave P(B | A) well below
  1, because the many B′ cases produce most of the A results.
- **Paper 1 versus Paper 2.** On Paper 1 keep exact fractions; a common denominator makes the
  division simple. On Paper 2 give three significant figures.

## Key terms

| Term | Meaning |
|---|---|
| Bayes' theorem | A formula that reverses a conditional probability, giving P(B given A) from P(A given B) |
| Prior probability | The probability of a starting event before the observation, such as P(B) |
| Updated (posterior) probability | The probability of the starting event after the observation, P(B given A) |
| Law of total probability | P(A) = sum of P(Bᵢ)P(A given Bᵢ) over exclusive, exhaustive events Bᵢ |
| Mutually exclusive | Events that cannot happen together |
| Exhaustive | Events that between them cover every outcome |
| False positive | A positive result for someone who does not have the condition being tested |

## Worked mini-example

A quiz contestant knows the answer to 60% of questions. If she knows it she answers correctly; if not,
she guesses from four options. She answers a question correctly. Find P(she knew it).

```
Knew and correct:     0.6 × 1    = 0.6
Guessed and correct:  0.4 × 0.25 = 0.1
P(correct) = 0.7
P(knew | correct) = 0.6/0.7 = 6/7
```

## Exam traps

- **Trap: the reversed conditional.** "A test is positive for 95% of people with the condition" is
  P(positive given condition), not the probability that a positive person has it.
- **Trap: missing branches.** For three machines, all three "faulty" branches go in the denominator.
- **Trap: using the wrong second-stage probability.** A fault rate of 3% means the non-fault branch is
  0.97.
- **Trap: dividing by the prior.** The denominator is P(observation), never P(Bᵢ).
- **Trap: rounding the denominator.** Calculate P(A) exactly, then divide.
- **Trap: answers above 1 or below the branch product.** P(B given A) must lie between 0 and 1 and must
  be at least the branch product P(B)P(A given B), since P(A) ≤ 1.

## Self-test

1. Write Bayes' theorem for two events B and B′.
2. What must be true of B₁, B₂ and B₃ for the three-event form to apply?
3. P(B) = 0.5, P(A | B) = 0.6, P(A | B′) = 0.2. Find P(A).
4. Using question 3, find P(B | A).
5. Using question 3, find P(B | A′).
6. Machines X, Y, Z make 20%, 30%, 50% of output with fault rates 5%, 4%, 2%. Find P(faulty).
7. Using question 6, find P(Z given faulty).
8. Why is P(A given B) usually not equal to P(B given A)?
9. P(B) = 0.01, P(A given B) = 0.9, P(A given B′) = 0.1. Without a calculator, is P(B given A) closer
   to 0.08 or to 0.9?
10. In question 9, calculate P(B given A) exactly.
11. What name is given to P(B) in a Bayes' theorem problem?
12. If P(A given B) = P(A given B′), what is P(B given A)? Explain.

**Answers**

1. P(B | A) = P(B)P(A | B)/[P(B)P(A | B) + P(B′)P(A | B′)].
2. They must be mutually exclusive and exhaustive (their probabilities add to 1).
3. 0.5 × 0.6 + 0.5 × 0.2 = 0.4.
4. 0.3/0.4 = 0.75.
5. P(A′) = 0.6; P(B ∩ A′) = 0.5 × 0.4 = 0.2; P(B | A′) = 0.2/0.6 = 1/3.
6. 0.010 + 0.012 + 0.010 = 0.032.
7. 0.010/0.032 = 5/16 = 0.3125.
8. They share the numerator P(A ∩ B) but divide by different probabilities, P(B) and P(A).
9. Closer to 0.08: the B′ branch contributes 0.099, far more than the B branch's 0.009.
10. 0.009/(0.009 + 0.099) = 0.009/0.108 = 1/12.
11. The prior probability (the probability before the observation).
12. P(B given A) = P(B). The observation is equally likely either way, so A and B are independent and
    the observation tells you nothing about B.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section AHL 4.13: use of Bayes' theorem for a maximum of three events.
