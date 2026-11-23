---
title: "Cambridge A Level Mathematics (9709): Algebra (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "algebra-cambridge-alevel-maths-3"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.1 Algebra: modulus rules, division, factor theorem, partial fractions, binomial series and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.1 Algebra** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For full worked examples use the [3.1 Algebra study guide](/resources/cambridge-a-level-mathematics-9709-algebra-3/); for marked questions use the [3.1 Algebra practice questions](/resources/cambridge-a-level-mathematics-9709-algebra-3-practice/).

## The five things to recall

1. **Modulus.** |x| is never negative. |a| = |b| ⇔ a² = b². |x − a| < b ⇔ a − b < x < a + b. Graph of y = |ax + b|: a V with vertex at (−b/a, 0). Graphs of |f(x)| and f(|x|) for non-linear f are not required.
2. **Division.** p(x) ≡ d(x)q(x) + r(x). The remainder has lower degree than the divisor: a constant for a linear divisor, Ax + B for a quadratic one. Degree of p(x) is at most 4.
3. **Factor and remainder theorems.** Remainder on dividing by (ax + b) is p(−b/a). (ax + b) is a factor ⇔ p(−b/a) = 0.
4. **Partial fractions.** Three denominator types (below). Equal-degree numerators need a constant term; higher-degree numerators are not set.
5. **Binomial series.** (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …, |x| < 1, n rational. It is in MF19. No general term is needed.

## Partial fraction forms

| Denominator | Form | Quickest constants |
|---|---|---|
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) | Substitute each root |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² | Roots give A and C; compare x² for B |
| (ax + b)(cx² + d) | A/(ax + b) + (Bx + C)/(cx² + d) | Root gives A; compare x² and constants |

## Remainders after division by a quadratic

When p(x) is divided by a quadratic that factorises, such as x² − 1, write p(x) ≡ (x − 1)(x + 1)q(x) + Ax + B. Then p(1) = A + B and p(−1) = −A + B, which gives the remainder with no long division at all.

## Adapting the binomial series

| Expression | Rewrite as | Valid for |
|---|---|---|
| (a + bx)ⁿ | aⁿ(1 + bx/a)ⁿ | \|x\| < \|a/b\| |
| 1/(2 − x) | ½(1 − x/2)⁻¹ | \|x\| < 2 |
| √(9 + x) | 3(1 + x/9)^½ | \|x\| < 9 |
| (1 + 2x)/(1 − x)² | (1 + 2x)(1 − x)⁻² | \|x\| < 1 |

Useful short series (all for |x| < 1):

```text
(1 − x)⁻¹ = 1 + x + x² + x³ + …
(1 + x)⁻¹ = 1 − x + x² − x³ + …
(1 − x)⁻² = 1 + 2x + 3x² + 4x³ + …
(1 + x)^½ = 1 + x/2 − x²/8 + …
```

## Key terms

| Term | Meaning |
|---|---|
| Modulus | The non-negative size of a number; \|x − a\| is the distance from x to a |
| Quotient | q(x) in p(x) ≡ d(x)q(x) + r(x) |
| Remainder | r(x), of lower degree than the divisor; may be zero |
| Factor theorem | (ax + b) is a factor of p(x) exactly when p(−b/a) = 0 |
| Proper fraction | Numerator degree less than denominator degree |
| Improper fraction | Numerator degree at least the denominator degree; in 3.1 only equal degree occurs |
| Repeated factor | A squared linear factor such as (cx + d)²; needs two fractions |
| Validity | The set of x for which an infinite series converges to the function |

## Exam traps

- **Squaring with an ordinary side.** x + 6 > |3x − 2| must be solved from a sketch; squaring can give a false boundary.
- **"Or" versus "and".** |x − a| > b gives two separate pieces; never write them as one chain.
- **Wrong root.** The factor (3x + 2) needs p(−2/3), not p(2/3) or p(−3/2).
- **Missing zero terms.** In long division write 0x² for a missing power.
- **Repeated factors.** (x − 2)² needs both B/(x − 2) and C/(x − 2)².
- **Quadratic factor numerator.** Over x² + 4 write Bx + C, not just B.
- **Equal degrees.** Include a constant; it equals the ratio of leading coefficients.
- **Taking out aⁿ.** (4 − x)^(−½) = ½(1 − x/4)^(−½), because 4^(−½) = ½.
- **Bracketed powers.** In (1 + 3x/2)ⁿ, the x² term uses (3x/2)² = 9x²/4.
- **Combined validity.** Take the narrower interval when two series are added or multiplied.

## Self-test

Cover the answers and try each question first.

1. Write down the form of the partial fractions for (x + 4)/((2x + 1)(x − 3)²).
2. Write down the form for (3x − 1)/((x + 2)(x² + 5)).
3. Find the remainder when x³ − 4x + 1 is divided by (x − 3).
4. (3x − 1) is a factor of 3x³ + kx² + x − 1. Find k.
5. Solve |x − 4| < 3.
6. State the values of x for which the expansion of (3 − 2x)⁻¹ is valid.
7. Find the first two terms of (1 − x)^(1/3).
8. Find the coefficient of x² in (1 + 4x)^½.
9. Express 5/((x − 1)(x + 4)) in partial fractions.
10. Why does (2x² + x + 3)/((x − 1)(x + 2)) need a constant term?
11. p(x) leaves remainder 6 when divided by (x − 1) and −12 when divided by (x + 1). Find the remainder when p(x) is divided by x² − 1.
12. Expand (2 + x)⁻¹ up to x².

**Answers**

1. A/(2x + 1) + B/(x − 3) + C/(x − 3)².
2. A/(x + 2) + (Bx + C)/(x² + 5).
3. 27 − 12 + 1 = **16**.
4. p(1/3) = 1/9 + k/9 + 1/3 − 1 = 0, so 1 + k + 3 − 9 = 0 and **k = 5**.
5. −3 < x − 4 < 3, so **1 < x < 7**.
6. (3 − 2x)⁻¹ = ⅓(1 − 2x/3)⁻¹, valid for |2x/3| < 1, that is **|x| < 3/2**.
7. **1 − x/3**.
8. (½)(−½)/2 × (4x)² = −⅛ × 16x², so the coefficient is **−2**.
9. 5 ≡ A(x + 4) + B(x − 1): x = 1 gives A = 1; x = −4 gives B = −1. **1/(x − 1) − 1/(x + 4)**.
10. The numerator and denominator are both degree 2, so the fraction is improper; the constant is 2.
11. Remainder Ax + B with A + B = 6 and −A + B = −12, so B = −3, A = 9: **9x − 3**.
12. ½(1 + x/2)⁻¹ = **½ − x/4 + x²/8**, valid for |x| < 2.

## Links

- Full teaching: [3.1 Algebra study guide](/resources/cambridge-a-level-mathematics-9709-algebra-3/)
- Practice with marks: [3.1 Algebra practice questions](/resources/cambridge-a-level-mathematics-9709-algebra-3-practice/)
- All of Paper 3 condensed: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
