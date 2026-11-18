---
title: "IB DP Mathematics: Analysis and Approaches (1.2): Arithmetic sequences and series -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 1 – Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-2"
description: "Revision notes for IB DP Maths AA section 1.2: arithmetic nth term and sum formulae, sigma notation, finding n, data modelling, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **1.2** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021), common to SL and HL: arithmetic sequences and series. For full worked examples, see the
[section 1.2 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-2/);
then practise with the
[section 1.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-2-practice/).

## Formulae

```
u_n = u_1 + (n − 1)d
S_n = (n/2)(2u_1 + (n − 1)d)
S_n = (n/2)(u_1 + u_n)
```

Both sums are in the formula booklet. Equivalent view: u_n = dn + (u₁ − d) is linear in n with gradient d.

## Key terms

| Term | Meaning |
|---|---|
| Arithmetic sequence | Each term is the previous term plus a constant d |
| Common difference, d | u_{n+1} − u_n; may be negative or a fraction |
| Series | The sum of the terms of a sequence |
| S_n | The sum of the first n terms |
| Sigma notation | Σ from r = a to b of f(r): substitute each integer r from a to b and add |
| Simple interest | The same interest each period, giving an arithmetic balance |
| Extrapolation | Predicting beyond the range of the data |

## Methods in steps

**Find u₁ and d from two terms.** Subtract the two equations: u_m − u_k = (m − k)d. Then back-substitute.

**Test whether a number is a term.** Solve u_n = value. A positive integer n means yes; anything else means no.

**Count terms from first to last.** n = (last − first)/d + 1, or, for an index range, b − a + 1.

**Evaluate a sigma sum.** Find the number of terms, the first term and the last term, then use
(n/2)(u₁ + u_n).

**From S_n to u_n.** u₁ = S₁; u_n = S_n − S_{n−1}; constant u_n − u_{n−1} proves the sequence is arithmetic.

**Least n so that S_n exceeds a value.** Form the quadratic inequality, solve (GDC on Paper 2), round **up**,
then check n − 1 and n.

**Nearly arithmetic data.** Approximate d by (last − first)/(number of gaps); build u_n; predict; comment
on reliability.

## Worked reminder

u₁ = 5, d = 3. Least n with S_n > 500:

```
S_n = (n/2)(10 + 3(n − 1)) = n(3n + 7)/2 > 500
3n² + 7n − 1000 > 0  ->  n > 17.13
n = 18   (S_17 = 493, S_18 = 549)
```

## Must-know distinctions

| Looks similar | Difference |
|---|---|
| u_n and S_n | A single term versus the total of the first n terms |
| "Is 150 a term?" and "Which term is 150?" | The first needs a yes or no with a reason; the second needs n |
| Number of gaps and number of terms | From u₁ to u_n there are n − 1 gaps but n terms |
| Simple and compound interest | Simple interest is arithmetic (section 1.2); compound interest is geometric (section 1.4) |
| Exact model and approximate model | Real data needs an approximate d and a comment on reliability |

## Paper 1 or Paper 2?

| Paper 1 (no technology) | Paper 2 (technology) |
|---|---|
| Finding u₁, d from two terms | Least-n inequalities with awkward roots |
| Sigma sums with small numbers | Sequence tables and graphs on the GDC |
| Proving a sequence is arithmetic from S_n | Modelling real data and predicting |
| Factorisable quadratics in n | Large sums in context |

## Exam traps

- **Off-by-one counting.** From r = 4 to r = 15 is 12 terms.
- **u₁ + nd.** The nth term uses (n − 1)d.
- **Non-integer n.** It shows the value is not a term; it is not an answer to "which term".
- **Rounding down a least n.** Always round up and check.
- **Negative roots.** Reject a negative n from a quadratic.
- **Decreasing sequences.** A negative d is still arithmetic; keep the sign in every substitution.
- **Technology without set-up.** Write u₁ and d before using a GDC sequence function.

## Quick self-test

1. u₁ = 9 and d = −3. Find u₂₀.
2. u₅ = 22 and u₁₂ = 50. Find d and u₁.
3. Find S₁₅ for 2, 7, 12, …
4. Evaluate the sum from r = 1 to 40 of (4r + 1).
5. Is 100 a term of 3, 10, 17, …? Explain.
6. How many terms are in 12, 15, 18, …, 99?
7. S_n = n² + 4n. Find u₁ and d.
8. £800 earns 4% simple interest per year. Find the balance after 6 years.
9. u₁ = 5 and d = 3. Find the least n with S_n > 500.
10. Data 50, 58, 67, 74 over four years. Approximate d.
11. Write 3 + 8 + 13 + … + 98 in sigma notation.
12. Why do the points (n, u_n) of an arithmetic sequence lie on a straight line?

### Answers

1. 9 + 19(−3) = −48.
2. 7d = 28, so d = 4; u₁ = 22 − 16 = 6.
3. (15/2)(4 + 14 × 5) = 555.
4. 40 terms, from 5 to 161: 20 × 166 = 3320.
5. No: 3 + 7(n − 1) = 100 gives n = 14.86, not an integer.
6. (99 − 12)/3 + 1 = 30.
7. u₁ = 5; u_n = 2n + 3, so d = 2.
8. 800 + 6 × 32 = £992.
9. n = 18.
10. (74 − 50)/3 = 8.
11. The sum from r = 1 to 20 of (5r − 2).
12. u_n = dn + (u₁ − d) is a linear function of n with gradient d.

## Next steps

- [Section 1.2 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-2/)
- [Section 1.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-2-practice/)
- [Section 1.3 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-3-revision-notes/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.2, arithmetic sequences and series.
