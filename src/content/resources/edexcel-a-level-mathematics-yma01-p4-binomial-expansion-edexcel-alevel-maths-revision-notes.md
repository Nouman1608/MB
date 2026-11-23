---
title: "Pearson Edexcel International A Level Mathematics (YMA01): P4 Binomial expansion -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-binomial-expansion-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths P4 binomial series: rational powers, taking out factors, validity ranges, approximations and partial fraction expansions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 4 of Unit P4 in Pearson Edexcel International A Level Mathematics (YMA01): the "Binomial Series for any rational n", including (ax + b)ⁿ and rational functions split into partial fractions. For worked explanations, use the [binomial expansion study guide](/resources/edexcel-a-level-mathematics-yma01-p4-binomial-expansion-edexcel-alevel-maths/).

## The series

```
(1 + x)^n = 1 + nx + n(n-1)/2! x^2 + n(n-1)(n-2)/3! x^3 + ...     |x| < 1
```

- The formula is in the formulae booklet. Learning the first four coefficients saves time.
- If n is a positive integer the series is finite and valid for all x (the P2 case).
- If n is negative or a fraction the series is infinite and valid only for |x| < 1.

## Coefficients worth knowing

| n | (1 + x)ⁿ up to x³ |
|---|---|
| −1 | 1 − x + x² − x³ |
| −2 | 1 − 2x + 3x² − 4x³ |
| −3 | 1 − 3x + 6x² − 10x³ |
| ½ | 1 + x/2 − x²/8 + x³/16 |
| −½ | 1 − x/2 + 3x²/8 − 5x³/16 |
| ⅓ | 1 + x/3 − x²/9 + 5x³/81 |

To get (1 − x)ⁿ, replace x by −x, which changes the sign of every odd power. For example, (1 − x)⁻¹ = 1 + x + x² + x³ + …, the geometric series.

## The three-step method for (a + bx)ⁿ

1. **Take out aⁿ:** (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ.
2. **Expand** with u = bx/a, keeping u in brackets: (bx/a)², (bx/a)³.
3. **Multiply** every term by aⁿ and simplify.

Example: (8 + 3x)^(1/3) = 2(1 + 3x/8)^(1/3) = 2(1 + x/8 − x²/64 + …) = 2 + x/4 − x²/32 + …, valid for |x| < 8/3.

## Validity

| Expression | Condition | Range |
|---|---|---|
| (1 + kx)ⁿ | \|kx\| < 1 | \|x\| < 1/\|k\| |
| (a + bx)ⁿ | \|bx/a\| < 1 | \|x\| < \|a/b\| |
| Sum or product of two series | Both conditions | The narrower range |

Example: (5 − 2x)⁻³ is valid for |x| < 5/2.

## Rational functions

1. Split into partial fractions. Only linear denominator factors are needed in P4, repeated or not. If the numerator's degree equals or exceeds the denominator's, divide first.
2. Write each fraction as a power: 3/(1 + 2x) = 3(1 + 2x)⁻¹ and 4/(1 + x)² = 4(1 + x)⁻².
3. Expand each one, then add like terms.
4. State the validity as the overlap of the separate ranges.

Example: (4 − x)/((1 + 2x)(1 − x)) = 3/(1 + 2x) + 1/(1 − x) = 4 − 5x + 13x² − 23x³ + …, valid for |x| < ½.

## Products

(1 + 2x)/(1 − x)² = (1 + 2x)(1 + 2x + 3x² + 4x³ + …) = 1 + 4x + 7x² + 10x³ + …

Build each coefficient from every pair of terms whose powers add to that power. The x³ coefficient here is 4 + 2 × 3 = 10.

## Unknown constants

If (1 + ax)ⁿ begins 1 + px + qx², then na = p and n(n − 1)a²/2 = q. Divide q by p² to remove a:

```
q / p^2 = (n - 1) / (2n)
```

Solve for n, then find a from na = p.

## Approximations

- Choose x so the bracket equals the number you need, for example x = 0.01 in √(1 − 4x) gives √0.96.
- Check the value lies inside the validity range. Small x gives a better estimate.
- Link the result to the target: √0.96 = √96/10 = 4√6/10, so √6 = 2.5 × √0.96.

## Key terms

| Term | Meaning |
|---|---|
| Ascending powers | Terms ordered x⁰, x¹, x², x³, … |
| Binomial coefficient | The number in front of xʳ; for rational n it is n(n − 1)…(n − r + 1)/r! |
| Convergent | The sum of the terms approaches a finite limit; true only inside the validity range |
| Range of validity | The set of x values for which the infinite series converges |
| Partial fractions | Writing a single fraction as a sum of simpler fractions with linear denominators |

## Exam traps

- Writing 4(1 − x/4)^(1/2) for (4 − x)^(1/2). The factor is 4^(1/2) = 2.
- Writing −3x² when the term is (−3x)² = 9x².
- Forgetting the 3! in the x³ coefficient.
- Using |x| < 1 for every series.
- Giving the union of two validity ranges, or no range at all.
- In an approximation, using an x value that lies outside the range, or one that does not give the number asked for.

## Self-test

1. Write down the first three terms of (1 + x)^(−1/2).
2. Find the coefficient of x² in (1 + x/3)^(3/2).
3. Expand (1 − 2x)^(−1/2) up to the term in x³.
4. State the range of validity of the expansion of (5 − 2x)⁻³.
5. Write (9 + 2x)^(1/2) in the form k(1 + mx)^(1/2).
6. Expand (2 − x)⁻² up to the term in x².
7. The expansions of (1 + 2x)⁻¹ and (1 − x)⁻¹ are added. For which x is the sum valid?
8. (1 + ax)ⁿ begins 1 − 2x + 6x². Find n and a.
9. Find the x² term in (1 + 2x)(1 − x)⁻².
10. Which value of x in √(1 − 4x) gives √0.96?
11. Why is x = 0.75 not allowed in the expansion of (1 + 2x)^(−1/2)?
12. Write (x + 5)/(1 + x)² in partial fractions.

**Answers:**

1. 1 − x/2 + 3x²/8.
2. (3/2)(1/2)/2 × (1/3)² = (3/8)(1/9) = 1/24.
3. 1 + x + (3/2)x² + (5/2)x³.
4. |x| < 5/2.
5. 3(1 + 2x/9)^(1/2), so k = 3 and m = 2/9.
6. (1/4)(1 − x/2)⁻² = 1/4 + x/4 + 3x²/16.
7. |x| < ½, the overlap of |x| < ½ and |x| < 1.
8. q/p² = 6/4 = (n − 1)/(2n), so 3n = n − 1 and n = −½. Then a = −2 ÷ (−½) = 4.
9. 1 × 3x² + 2x × 2x = 7x².
10. 1 − 4x = 0.96, so x = 0.01.
11. Validity needs |2x| < 1, so |x| < ½; 0.75 is outside this range, so the series does not converge.
12. 1/(1 + x) + 4/(1 + x)², since x + 5 = (1 + x) + 4.

Next, try the [binomial expansion practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-binomial-expansion-edexcel-alevel-maths-practice/).
