---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.9 The binomial theorem -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-9"
description: "Revision notes for IB DP Maths AA section 1.9: nCr, the general term, coefficient and constant-term methods, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.9, the binomial theorem**, of IB DP Mathematics: Analysis and Approaches (first assessment 2021): expanding (a + b)ⁿ for n ∈ ℕ, Pascal's triangle and nCr. It is common content for SL and HL. For explanations and worked examples, use the [section 1.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9/).

## Condensed recall

**The theorem.** For n ∈ ℕ,

(a + b)ⁿ = aⁿ + nC1 aⁿ⁻¹b + nC2 aⁿ⁻²b² + … + nCr aⁿ⁻ʳbʳ + … + bⁿ.

**General term:** T(r + 1) = nCr aⁿ⁻ʳ bʳ, for r = 0, 1, …, n.

**Why nCr.** Each term comes from choosing b from r of the n brackets and a from the others; there are nCr such choices.

**Facts about the expansion**

- n + 1 terms.
- Powers of a fall from n to 0; powers of b rise from 0 to n; each term's powers add to n.
- Coefficients are symmetric: nCr = nC(n − r).
- Setting a = b = 1 shows the coefficients in row n add to 2ⁿ.

**nCr**

- Formula: nCr = n!/(r!(n − r)!).
- Cancelled form: nCr = n(n − 1)…(n − r + 1)/r!.
- nC0 = 1, nC1 = n, nC2 = n(n − 1)/2, nC3 = n(n − 1)(n − 2)/6.
- Pascal's rule: nCr + nC(r + 1) = (n + 1)C(r + 1).

**Pascal's triangle (rows 0 to 7)**

```
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
```

**Method for "coefficient of xᵏ" or "constant term"**

1. Write T(r + 1) with a and b substituted in full, in brackets.
2. Simplify the power of x to a single expression in r.
3. Solve power = k (or 0 for the constant term) for a whole number r between 0 and n. No such r means that term does not appear.
4. Substitute r and evaluate.

**Method for a product, such as (p + qx)(a + b)ⁿ:** find only the terms of (a + b)ⁿ that pair with p and with qx to give the required power, then add the two contributions.

**Finding an unknown.** Write the coefficient in terms of the unknown (k or n) and solve. For unknown n, use the cancelled form of nCr; n must be a natural number.

**Exact-value trick.** (a + b)ⁿ + (a − b)ⁿ keeps only even powers of b (doubled); (a + b)ⁿ − (a − b)ⁿ keeps only odd powers (doubled).

## Key terms

| Term | Meaning |
|---|---|
| Binomial | An expression with two terms, such as a + b |
| Binomial coefficient, nCr | The number of ways to choose r objects from n; the coefficient of aⁿ⁻ʳbʳ |
| Factorial, n! | n × (n − 1) × … × 2 × 1, with 0! = 1 |
| Pascal's triangle | Triangle of binomial coefficients; each entry is the sum of the two above |
| General term | nCr aⁿ⁻ʳ bʳ, the (r + 1)th term |
| Constant term | The term independent of x |
| Ascending powers of x | Order starting from the constant (x⁰) upwards |

## Exam traps

- **Bracket the whole of b.** In (1 − 2x)⁵ the third term is 10(−2x)² = 40x², not −20x².
- **Term number.** The fourth term has r = 3.
- **Term or coefficient.** "Find the term" wants 40x²; "find the coefficient" wants 40.
- **Power of x in r.** For (x³ − 1/x)⁸, the power is 3(8 − r) − r = 24 − 4r, not 24 − r.
- **Two contributions in a product.** In (2 + x)(1 − x)⁶ the x² coefficient is 2 × 15 + 1 × (−6) = 24.
- **Unknown sign.** If 10k² = 40, k = ±2; keep both unless the question restricts k.
- **n must be natural.** Reject negative or non-integer solutions for n, and say why.

## Self-test

1. Evaluate 8C3 by hand.
2. Write down the number of terms in the expansion of (2x − 5)¹¹.
3. Expand (1 + 2x)⁴.
4. Find the coefficient of x³ in (3 − x)⁵.
5. Find the term independent of x in (x + 3/x)⁶.
6. Find the coefficient of x⁴ in (x² + 2)⁵.
7. The coefficient of x² in (1 + kx)⁵ is 90. Find the possible values of k.
8. The coefficient of x² in (1 + 2x)ⁿ is 84. Find n.
9. Find the coefficient of x² in (2 + x)(1 − x)⁶.
10. Use the first three terms of (1 + x)⁸ to approximate 1.01⁸.
11. Show that the coefficients in row 5 of Pascal's triangle add to 2⁵.
12. Find the exact value of (√3 + 1)³ − (√3 − 1)³.

**Answers**

1. (8 × 7 × 6)/6 = 56.
2. 12.
3. 1 + 8x + 24x² + 32x³ + 16x⁴.
4. 5C3 × 3² × (−1)³ = 10 × 9 × (−1) = −90.
5. General term 6Cr x⁶⁻ʳ(3/x)ʳ = 6Cr 3ʳ x⁶⁻²ʳ; r = 3 gives 20 × 27 = 540.
6. General term 5Cr (x²)⁵⁻ʳ 2ʳ has power 10 − 2r = 4, so r = 3: 10 × 8 = 80.
7. 5C2 k² = 10k² = 90, so k = ±3.
8. nC2 × 4 = 84, so n(n − 1) = 42 and n = 7.
9. 2 × 6C2 + 1 × (−6C1) = 30 − 6 = 24.
10. 1 + 8(0.01) + 28(0.0001) = 1.0828 (the true value is 1.08286 to 5 d.p.).
11. 1 + 5 + 10 + 10 + 5 + 1 = 32 = 2⁵ (equivalently, put a = b = 1 in (a + b)⁵).
12. Only odd powers of 1 survive, doubled: 2(3(√3)² × 1 + 1³) = 2(9 + 1) = 20.

## Where next

Test every method in the [section 1.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9-practice/). HL students continue with counting principles and the extended theorem in the [section 1.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.9.
