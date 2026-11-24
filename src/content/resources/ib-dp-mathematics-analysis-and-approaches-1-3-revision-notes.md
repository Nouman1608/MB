---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.3 Geometric sequences and series -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-3"
description: "Revision notes for IB DP Maths AA section 1.3: geometric nth term and finite sums, sigma notation, least-n problems, growth models, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **1.3** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021), common to SL and HL: geometric sequences and series with a finite number of terms. Sums to
infinity belong to section 1.8. For worked examples, see the
[section 1.3 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-3/);
then practise with the
[section 1.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-3-practice/).

## Formulae

```
u_n = u_1 r^(n − 1)
S_n = u_1(r^n − 1)/(r − 1) = u_1(1 − r^n)/(1 − r),   r ≠ 1
```

Use the first sum form when r > 1 and the second when r < 1. If r = 1, S_n = nu₁.

## Key terms

| Term | Meaning |
|---|---|
| Geometric sequence | Each term is the previous term multiplied by a constant r |
| Common ratio, r | u_{n+1}/u_n; may be negative or fractional, never 0 |
| Geometric series | The sum of the terms of a geometric sequence |
| Growth factor | r = 1 + p/100 for a p% increase |
| Decay factor | r = 1 − p/100 for a p% decrease |
| Consecutive-term condition | a, b, c geometric means b² = ac |

## Methods in steps

**r from two terms.** Divide: u_m/u_k = r^(m−k). If m − k is even, take **both** signs of the root.

**Number of terms to a last term L.** Solve u₁r^(n−1) = L; by inspection of powers on Paper 1, or with logs
or a GDC on Paper 2.

**Sigma sum.** u₁ = value at the lower limit; ratio from the base of the power; terms = upper − lower + 1.

**Least n for a total.** Set S_n > target; solve with logs or a GDC table; round **up**; check n − 1 and n.

**Unknown terms.** Use b² = ac (or equal ratios), then solve.

**Growth context.** Decide whether the starting value is u₁ (power n − 1) or "after 0 years" (power n).

## Worked reminder

u₂ = 18 and u₄ = 2:

```
r^2 = 2/18 = 1/9  ->  r = 1/3 or r = −1/3
u_1 = 18 / r = 54 or −54
```

Both sequences are valid unless the question restricts the sign of the terms.

## Paper 1 or Paper 2?

| Paper 1 (no technology) | Paper 2 (technology) |
|---|---|
| Ratios that are integers or simple fractions | Percentage growth and decay models |
| Number of terms from exact powers | Least-n questions with logarithms or tables |
| b² = ac problems | Totals over many periods |
| Short sigma sums | Comparing two models over time |

## Arithmetic or geometric?

| Feature | Arithmetic | Geometric |
|---|---|---|
| Constant | Difference d | Ratio r |
| nth term | u₁ + (n − 1)d | u₁rⁿ⁻¹ |
| Graph of u_n against n | Points on a line | Points on an exponential curve |
| Real context | Fixed amount each step | Fixed percentage each step |

## Must-know distinctions

| Looks similar | Difference |
|---|---|
| u_n and S_n | One term (new cases on day n) versus a running total (all cases so far) |
| Power n and power n − 1 | n when the start is "after 0 years"; n − 1 when the start is u₁ |
| r² = 4 and r = 2 | r² = 4 has two solutions, r = 2 and r = −2 |
| Finite sum (section 1.3) and sum to infinity (section 1.8) | 1.3 always has a fixed number of terms |
| Growth and decay | r > 1 means growth; 0 < r < 1 means decay |

## Exam traps

- **Missing the negative ratio** when r², r⁴, … is given.
- **Wrong first term in sigma.** The sum from r = 0 starts at the r = 0 value.
- **Index slip.** u_n uses r^(n − 1), not rⁿ, when u₁ is the first term.
- **Term versus total.** "On day n" is a term; "in the first n days" is a sum.
- **Rounding r.** Keep 1.035, not 1.04.
- **Rounding down a least n.**
- **Percentage as the ratio.** A 6% rise is r = 1.06, not r = 0.06 or r = 6.

## Quick self-test

1. u₁ = 2 and r = 3. Find u₈.
2. u₂ = 10 and u₅ = 80. Find r and u₁.
3. Find S₆ for 64, 32, 16, …
4. Evaluate the sum from r = 1 to 5 of 3 × 2^(r − 1).
5. Is 4, −8, 16 geometric? State r.
6. How many terms are in 2, 6, 18, …, 4374?
7. A value grows by 6% a year. State r.
8. A value falls by 15% a year. State r.
9. 2, x, 18 are consecutive positive terms of a geometric sequence. Find x.
10. u₁ = 1 and r = 2. Find the least n with S_n > 1000.
11. Evaluate the sum from r = 0 to 4 of 5^r.
12. Why can the sum formula not be used when r = 1?

### Answers

1. 2 × 3⁷ = 4374.
2. r³ = 8, so r = 2; u₁ = 5.
3. 64(1 − 0.5⁶)/(1 − 0.5) = 126.
4. 3(2⁵ − 1)/(2 − 1) = 93.
5. Yes, r = −2.
6. 3^(n − 1) = 2187 = 3⁷, so n = 8.
7. 1.06.
8. 0.85.
9. x² = 36, so x = 6.
10. 2ⁿ − 1 > 1000, so n = 10 (S₁₀ = 1023).
11. 1 + 5 + 25 + 125 + 625 = 781.
12. The denominator r − 1 would be zero.

## More on this topic

- [Section 1.3 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-3/)
- [Section 1.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-3-practice/)
- [Section 1.4 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-revision-notes/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.3, geometric sequences and series.
