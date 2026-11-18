---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.8 The binomial distribution -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.8
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-8"
description: "Revision notes for IB Maths AA 4.8: binomial conditions, the probability formula, inequality wording, mean and variance, finding n and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.8** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): the binomial distribution and its mean and variance. Worked examples are in
the [4.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8/).

## Core recall

```
X ~ B(n, p):  number of successes in n trials
P(X = r) = C(n, r) p^r (1 − p)^(n − r)
E(X) = np
Var(X) = np(1 − p)
```

**Conditions (state them in context):**

1. Fixed number of trials n.
2. Two outcomes per trial: success or failure.
3. Constant probability of success p.
4. Independent trials.

In examinations binomial probabilities are found with technology; the formula explains them and handles
small cases by hand. Proof of the mean and variance is not required.

## From words to the GDC

| Words | Statement | Using cdf (P(X ≤ r)) |
|---|---|---|
| Exactly r | P(X = r) | pdf(r) |
| At most r | P(X ≤ r) | cdf(r) |
| Fewer than r | P(X ≤ r − 1) | cdf(r − 1) |
| At least r | P(X ≥ r) | 1 − cdf(r − 1) |
| More than r | P(X ≥ r + 1) | 1 − cdf(r) |
| From a to b inclusive | P(a ≤ X ≤ b) | cdf(b) − cdf(a − 1) |

## Typical extensions

- **Least n for P(at least one) > k:** solve 1 − (1 − p)^n > k with logarithms (reverse the inequality when
  dividing by a negative logarithm) or a GDC table; check neighbouring integers.
- **Given E(X) and Var(X):** 1 − p = Var(X)/E(X), then n = E(X)/p.
- **Two stages:** a binomial probability from stage 1 becomes p in stage 2. Keep it unrounded.
- **Most likely value:** the r with the largest P(X = r), found from a GDC table.
- **Expected number:** np, which need not be a whole number.

## When the model fails

| Situation | Problem |
|---|---|
| Selecting without replacement from a small group | p changes; trials not independent |
| Counting trials until the first success | No fixed n |
| Events that cluster (illness in a household, rainy days) | Independence doubtful |
| More than two outcomes counted separately | Not success/failure |

## Key terms

| Term | Meaning |
|---|---|
| Trial | One repetition, with outcome success or failure |
| Parameter n | The fixed number of trials |
| Parameter p | The probability of success on each trial |
| pdf (binomial) | P(X = r) |
| cdf (binomial) | P(X ≤ r) |
| Independent trials | The outcome of one does not affect the others |

## Exam traps

- "At least" and "more than" read as cdf values.
- Var(X) given as np, or standard deviation given as np(1 − p).
- Assumptions written without context ("trials are independent" instead of "each seed germinates
  independently of the others").
- A rounded stage 1 probability carried into stage 2.
- An inequality not reversed after dividing by ln of a number less than 1.
- No probability statement written before a GDC answer.

## Worked reminders

**Writing the model.** "Each of 20 seeds germinates with probability 0.85, independently": X ~ B(20, 0.85),
where X is the number of seeds that germinate.

**At least.** For X ~ B(12, 0.25), P(X ≥ 5) = 1 − P(X ≤ 4) = 0.158.

**Least n.** If P(faulty) = 0.04, then 1 − 0.96^n > 0.9 needs n > ln 0.1/ln 0.96 ≈ 56.4, so n = 57 (n = 56
gives 0.898; n = 57 gives 0.902).

**Two stages.** A week is good if a train is late on at most 1 of 5 days, with p = 0.15 per day:
P(good) = 0.83521. Then the number of good weeks out of 10 is B(10, 0.83521).

## Self-test

1. State the four conditions for a binomial model.
2. X ~ B(4, 0.5). Find P(X = 2) using the formula.
3. X ~ B(10, 0.35). Write down E(X) and Var(X).
4. Write P(X > 6) in terms of P(X ≤ r).
5. Write P(3 ≤ X < 7) in terms of cumulative probabilities.
6. E(X) = 8 and Var(X) = 6. Find p and n.
7. Why is "the number of girls when 4 students are chosen from a class of 9 girls and 6 boys" not binomial?
8. Find the least n for which 1 − 0.9^n > 0.95.
9. The most likely value of X ~ B(10, 0.35) is 3. How would you check this on a GDC?
10. X ~ B(3, 1/6) counts sixes on three dice. Find P(X = 0).
11. In question 10, find E(X).
12. A probability p = 0.83521 from one binomial model is used in a second. Why keep it unrounded?

### Answers

1. Fixed number of trials; two outcomes; constant probability of success; independent trials.
2. C(4, 2)(0.5)²(0.5)² = 6/16 = 3/8.
3. E(X) = 3.5; Var(X) = 10 × 0.35 × 0.65 = 2.275.
4. 1 − P(X ≤ 6).
5. P(X ≤ 6) − P(X ≤ 2).
6. 1 − p = 6/8, so p = 0.25 and n = 8/0.25 = 32.
7. Choosing without replacement from 15 students changes the probability of a girl after each choice, so p
   is not constant and the trials are not independent.
8. 0.9^n < 0.05 gives n > ln 0.05/ln 0.9 ≈ 28.4, so n = 29.
9. Tabulate P(X = r) for r = 0 to 10 and find the largest value: P(X = 3) ≈ 0.252 and P(X = 4) ≈ 0.238.
10. (5/6)³ = 125/216 ≈ 0.579.
11. 3 × 1/6 = 0.5.
12. Rounding p changes the final probability, often in the third significant figure.

## Frequently asked questions

**Do I need the binomial formula in the exam?**
Probabilities are found with technology, but the formula explains them and handles small cases such as
P(X = 2) for n = 4 by hand.

**What is the standard deviation of B(n, p)?**
√(np(1 − p)), the square root of the variance.

## Where to go next

Practise with the [4.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8-practice/),
then the [4.9 normal distribution revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-9-revision-notes/).
