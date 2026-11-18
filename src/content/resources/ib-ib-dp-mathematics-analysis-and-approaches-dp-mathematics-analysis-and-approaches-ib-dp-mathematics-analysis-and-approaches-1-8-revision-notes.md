---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.8 Sum of infinite convergent geometric sequences -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-8"
description: "Revision notes for IB DP Maths AA section 1.8: the convergence condition, S∞ = u₁/(1 − r), standard question types, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.8, the sum of infinite convergent geometric sequences**, of IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is common content for SL and HL. For explanations and annotated examples, use the [section 1.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-8/).

## Condensed recall

**The result.** For a geometric series with first term u₁ and common ratio r,

S∞ = u₁/(1 − r), provided |r| < 1.

**Why.** Sₙ = u₁(1 − rⁿ)/(1 − r). When |r| < 1, rⁿ → 0 as n → ∞, so Sₙ → u₁/(1 − r). When |r| ≥ 1, rⁿ does not tend to 0 and the series has no finite sum.

**Behaviour of the partial sums.**

- 0 < r < 1: the partial sums increase (for u₁ > 0) towards S∞ from one side.
- −1 < r < 0: the partial sums alternate above and below S∞, closing in.
- r ≥ 1 or r ≤ −1: divergent.

**The gap after n terms.** S∞ − Sₙ = u₁rⁿ/(1 − r). Use it, or a GDC table, for "how many terms" questions.

**Six standard question types.**

1. **Direct:** find r from two consecutive terms, check |r| < 1, apply the formula.
2. **Sigma notation:** u₁ is the term at the lower limit. Σ (k = 0 to ∞) 3(0.2)ᵏ has u₁ = 3, sum 3/0.8 = 3.75. Σ (k = 1 to ∞) 3(0.2)ᵏ has u₁ = 0.6, sum 0.75.
3. **Find r or u₁:** from S∞ and one term, or S∞ and a relation such as S∞ = 4u₁ (which gives 1/(1 − r) = 4, so r = 3/4).
4. **Two conditions giving a quadratic in r:** substitute u₁ from one equation into the other; test each root against |r| < 1.
5. **Convergence in terms of x:** solve |r(x)| < 1 completely, with strict inequalities; then write S∞ in terms of x.
6. **Recurring decimals and contexts:** 0.0̇7̇ style decimals use r = 0.01; bouncing balls count each rebound twice.

**Solving |r| < 1.**

- Linear in x, such as |x + 3|/2 < 1: −2 < x + 3 < 2, so −5 < x < −1.
- Reciprocal, such as |3/x| < 1: |x| > 3, so x < −3 or x > 3.

**Two short models to copy.**

- *Decimal with a non-recurring start:* 0.4777… = 0.4 + 0.07/(1 − 0.1) = 2/5 + 7/90 = 43/90. Split off the digits that do not repeat, then sum the recurring tail.
- *Quadratic in r with a repeated root:* u₂ = 2 and S∞ = 8 give u₁ = 8(1 − r) and 8r(1 − r) = 2, so 4r² − 4r + 1 = 0, (2r − 1)² = 0 and r = 1/2 only. Then u₁ = 4, and 4 + 2 + 1 + … does sum to 8. A quadratic in r can give two series, one, or none that converge.

## Key terms

| Term | Meaning |
|---|---|
| Infinite series | A sum with infinitely many terms |
| Partial sum, Sₙ | The sum of the first n terms |
| Converge | The partial sums approach a finite limit |
| Diverge | The partial sums do not approach a finite limit |
| Sum to infinity, S∞ | The limit of Sₙ as n → ∞, when it exists |
| Common ratio, r | uₙ₊₁/uₙ, constant for a geometric sequence |
| Recurring decimal | A decimal with a block of digits that repeats forever |

## Exam traps

- **No check of |r|.** S∞ = u₁/(1 − r) applied to r = 1.5 gives a negative "sum" for a series of positive terms, a clear sign of misuse.
- **Non-strict inequalities.** −1 ≤ r ≤ 1 is wrong; the ends diverge.
- **Negative ratio arithmetic.** u₁ = 12, r = −1/3: S∞ = 12/(4/3) = 9, not 12/(2/3) = 18.
- **Wrong first term in sigma notation.** Substitute the lower limit.
- **Bouncing ball.** The first drop counts once; each rebound height counts twice.
- **Inequality direction.** Dividing by ln 0.8 (negative) reverses the inequality.
- **Both roots valid.** A quadratic in r can give two acceptable series. Give both unless one fails |r| < 1.

## Self-test

1. State the condition for an infinite geometric series to converge.
2. Find S∞ for 45 − 15 + 5 − ….
3. Explain why 2 + 3 + 4.5 + … has no sum to infinity.
4. Evaluate Σ (k = 1 to ∞) 8(0.5)ᵏ.
5. Write 0.1̇5̇ (= 0.151515…) as a fraction in its lowest terms.
6. Write 2.4̇ (= 2.444…) as a fraction.
7. A geometric series has S∞ = 5u₁. Find r.
8. A geometric series has u₁ = 9 and S∞ = 6. Find r.
9. Find the values of x for which 1 + (x − 1)/4 + ((x − 1)/4)² + … converges.
10. Find the values of x for which the series with r = 5/x converges.
11. For u₁ = 20 and r = 0.9, write an expression for S∞ − Sₙ.
12. A ball dropped from 2 m rebounds to 3/4 of each previous height. Find the total vertical distance travelled.

**Answers**

1. |r| < 1.
2. r = −1/3, so S∞ = 45/(4/3) = 33.75.
3. r = 1.5, and |r| > 1, so the series diverges.
4. u₁ = 4, r = 0.5, sum = 4/0.5 = 8.
5. 0.15/(1 − 0.01) = 15/99 = 5/33.
6. 2.4 + 0.04/(1 − 0.1) = 12/5 + 2/45 = 110/45 = 22/9.
7. 1/(1 − r) = 5, so r = 4/5.
8. 9/(1 − r) = 6, so 1 − r = 3/2 and r = −1/2 (|r| < 1, valid).
9. |x − 1| < 4, so −3 < x < 5.
10. |5/x| < 1, so x < −5 or x > 5.
11. 20(0.9)ⁿ/0.1 = 200(0.9)ⁿ.
12. 2 + 2 × (1.5/(1 − 0.75)) = 2 + 2 × 6 = 14 m.

## Where next

Practise every question type in the [section 1.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-8-practice/). Finite arithmetic and geometric series, with financial applications, are summarised in the [sequences, series and financial applications revision notes](/resources/ib-dp-mathematics-aa-sequences-series-financial-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.8.
