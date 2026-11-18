---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Counting principles and extension of the binomial theorem (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-10"
description: "Revision notes for IB DP Maths AA HL section 1.10: counting principles, nPr and nCr, the binomial series for rational n, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.10** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): counting principles, including permutations and combinations, and the binomial theorem for fractional and negative exponents. It is **HL only**. For explanations and worked examples, use the [section 1.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10/).

## Condensed recall: counting

**Principles**

- **Multiplication ("and")**: successive choices multiply.
- **Addition ("or")**: separate, non-overlapping cases add.
- **Complement**: required = total − unwanted, when the unwanted cases are easier to count.

**Formulae**

| Count | Formula | Example |
|---|---|---|
| Arrangements of n different objects | n! | 5 books in a row: 120 |
| Ordered selections of r from n | nPr = n!/(n − r)! | gold, silver, bronze from 10: 10P3 = 720 |
| Unordered selections of r from n | nCr = n!/(r!(n − r)!) | 3 delegates from 10: 10C3 = 120 |
| Link | nPr = nCr × r! | 720 = 120 × 6 |

**Strategy checklist**

1. Decide whether order matters (roles, positions, digits: yes; groups: no).
2. Deal with restrictions first: fixed positions, people who must be included, blocks that must stay together.
3. If a restriction changes the options for another position, split into cases and add.
4. For "at least one", use total − none.
5. For "together", treat the group as one block and multiply by its internal arrangements.
6. For "no two together", arrange the others first and place the restricted objects in the gaps.

**Selecting from groups.** Choose from each group separately and multiply: 2 boys from 6 and 3 girls from 5 gives 6C2 × 5C3 = 15 × 10 = 150.

## Condensed recall: extended binomial theorem

For n ∈ ℚ and |x| < 1:

(1 + x)ⁿ = 1 + nx + (n(n − 1)/2!)x² + (n(n − 1)(n − 2)/3!)x³ + …

- For n ∉ ℕ the series is infinite.
- (a + b)ⁿ = aⁿ(1 + b/a)ⁿ, valid for |b/a| < 1.
- For a sum of two expansions, the validity is the **smaller** interval (both conditions must hold).

**Standard expansions to recognise**

| Expression | First terms | Valid for |
|---|---|---|
| (1 + x)⁻¹ | 1 − x + x² − x³ + … | \|x\| < 1 |
| (1 − x)⁻¹ | 1 + x + x² + x³ + … | \|x\| < 1 |
| (1 + x)⁻² | 1 − 2x + 3x² − 4x³ + … | \|x\| < 1 |
| (1 + x)^(1/2) | 1 + x/2 − x²/8 + x³/16 − … | \|x\| < 1 |
| (1 + x)^(−1/2) | 1 − x/2 + 3x²/8 − … | \|x\| < 1 |

(1 − x)⁻¹ is the sum to infinity of the geometric series 1 + x + x² + …, which is why |x| < 1 appears in both.

**Approximations.** Choose x so that the bracket matches the number and x is small: √0.98 = (1 − 2x)^(1/2) with x = 0.01.

## Key terms

| Term | Meaning |
|---|---|
| Permutation | An ordered arrangement or selection |
| Combination | An unordered selection |
| Factorial | n! = n(n − 1)…1, with 0! = 1 |
| nPr | Number of ordered selections of r from n different objects |
| nCr | Number of unordered selections of r from n different objects |
| Binomial series | The infinite expansion of (1 + x)ⁿ for n ∉ ℕ |
| Interval of validity | Values of x for which the binomial series converges |

## Exam traps

- **"No two together" is not "not all together".** With three items A, B, C, "not all together" still allows A and B side by side.
- **Double counting in "at least one".** Fixing one special member first, then choosing the rest freely, counts some groups twice.
- **Cases that overlap.** Cases you add must not share outcomes.
- **Missing aⁿ.** (4 + x)^(1/2) = 2(1 + x/4)^(1/2), not (1 + x/4)^(1/2).
- **Powers of the whole term.** In (1 − 3x)⁻¹, the x² term is (−3x)² = 9x².
- **Validity.** (1 − 3x)⁻¹ is valid for |x| < 1/3, not |x| < 1.
- **Signs of coefficients.** For n = −1/2, the x² coefficient is (−1/2)(−3/2)/2 = 3/8, positive.

## Self-test

1. How many ways can 7 different books be arranged on a shelf?
2. Evaluate 9P3 and 9C3, and state the link between them.
3. How many 3-letter codes can be made from 26 letters if no letter is repeated?
4. A team of 5 is chosen from 8 women and 4 men. How many teams contain exactly 2 men?
5. How many teams of 5 from the same 12 people contain at least one man?
6. In how many ways can the letters of LOGARITHM be arranged so that they start with L?
7. How many 3-digit odd numbers can be made from the digits 1 to 6 without repetition?
8. Expand (1 + x)^(−3) up to the term in x².
9. Expand (1 − 4x)^(1/2) up to the term in x² and state the validity.
10. Write (9 + x)^(1/2) in the form p(1 + qx)^(1/2).
11. State the interval of validity for the expansion of (3 − x)⁻¹.
12. Use (1 + x)^(1/2) with x = 0.02 and three terms to approximate √1.02.

**Answers**

1. 7! = 5040.
2. 9P3 = 504, 9C3 = 84; 504 = 84 × 3!.
3. 26 × 25 × 24 = 26P3 = 15 600.
4. 4C2 × 8C3 = 6 × 56 = 336.
5. 12C5 − 8C5 = 792 − 56 = 736.
6. LOGARITHM has 9 different letters; with L fixed, 8! = 40 320.
7. Last digit 1, 3 or 5 (3 ways), then 5 × 4 for the others: 3 × 20 = 60.
8. 1 − 3x + 6x² (coefficient (−3)(−4)/2 = 6).
9. 1 + (1/2)(−4x) + ((1/2)(−1/2)/2)(16x²) = 1 − 2x − 2x²; valid for |x| < 1/4.
10. 3(1 + x/9)^(1/2), so p = 3 and q = 1/9.
11. (3 − x)⁻¹ = (1/3)(1 − x/3)⁻¹, valid for |x| < 3.
12. 1 + 0.01 − (0.02)²/8 = 1.01 − 0.00005 = 1.00995 (the true value is 1.009950 to 6 d.p.).

## Where next

Work through the [section 1.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10-practice/). The natural-number theorem is summarised in the [section 1.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9-revision-notes/), and partial fractions, often combined with binomial series, in the [section 1.11 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-11-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.10.
