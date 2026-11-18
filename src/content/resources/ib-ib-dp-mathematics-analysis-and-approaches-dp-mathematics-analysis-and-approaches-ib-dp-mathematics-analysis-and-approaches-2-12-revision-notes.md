---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.12 Polynomial functions, zeros, roots and factors (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-12"
description: "HL revision notes for IB Maths AA 2.12 polynomials: factor and remainder theorems, division, multiplicity, root sums and products, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.12 (AHL only)** of IB DP Mathematics: Analysis and Approaches, first assessment 2021: polynomial functions, zeros, roots and factors, the factor and remainder theorems, and sums and products of roots. Full explanations are in the [polynomials study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-12/); exam-style questions are in the [polynomials practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-12-practice/).

## Condensed recall

**Structure of a polynomial**

- Degree n: aₙxⁿ + … + a₁x + a₀, with aₙ ≠ 0.
- Exactly n roots counted with multiplicity, including complex ones.
- At most n real zeros and at most n − 1 turning points.
- Real coefficients: non-real roots come in conjugate pairs, so a cubic always has at least one real root.

**The two theorems**

- Remainder theorem: p(x) ÷ (x − r) leaves p(r); p(x) ÷ (ax − b) leaves p(b/a).
- Factor theorem: (x − r) is a factor if and only if p(r) = 0.
- Two unknown coefficients usually need two conditions: one factor plus one remainder, or two factors.

**Finding the rest of the factors**

- Long division: include every power (write 0x² if needed).
- Comparing coefficients: p(x) = (x − r)(ax² + bx + c); a from the top term, c from the constant, b from a middle term.
- Two factors known: divide by their product, a quadratic, in one step.
- First root search with integer coefficients: integer roots divide the constant term.

**Graph shape from factors**

- Single factor: crosses. Squared factor: touches (turning point on the axis). Cubed factor: crosses with a point of inflection.
- Ends follow aₙxⁿ. Even degree: both ends same direction. Odd degree: opposite directions. aₙ > 0 means the right-hand end rises.
- y-intercept = a₀.
- Building from a graph: y = a(x − r₁)…(x − rₖ), then use one more point to find a.

**Sum and product of roots**

- Sum = −aₙ₋₁/aₙ.
- Product = (−1)ⁿa₀/aₙ.
- Quadratic ax² + bx + c: sum −b/a, product c/a.
- Cubic ax³ + bx² + cx + d: sum −b/a, product −d/a.
- Quartic: product +a₀/a₄.
- Repeated roots are counted as many times as their multiplicity; complex roots are included.

**Useful set-ups**

- Roots in arithmetic sequence: m − d, m, m + d (sum gives m at once).
- Roots in geometric sequence: m/r, m, mr (product gives m³ at once).
- One root is the negative of another: write them as α and −α so they cancel in the sum.

**Method: factorising a cubic by hand**

1. Test small divisors of the constant term until p(r) = 0.
2. Write p(x) = (x − r)(ax² + bx + c) and compare coefficients.
3. Factorise the quadratic, or use the discriminant to show it has no real roots.
4. Check: the sum of your roots should equal −a₂/a₃.

## Key terms

| Term | Meaning |
|---|---|
| Degree | Highest power of x with a non-zero coefficient |
| Leading coefficient | The coefficient aₙ of the highest power |
| Zero | Value of x where the function equals 0 |
| Root | Solution of the equation p(x) = 0 |
| Factor | A polynomial that divides p(x) with remainder 0 |
| Multiplicity | Number of times a factor (x − r) is repeated |
| Remainder | What is left after division; a constant when dividing by a linear factor |
| Quotient | The polynomial obtained on division |

## Exam traps

- Division by (x + 4) uses p(−4), not p(4).
- Division by (3x + 1) uses p(−1/3).
- "Show that (x − 2) is a factor" needs the conclusion sentence, not only p(2) = 0.
- A missing power in long division (for example no x² term) misaligns every later step.
- Building from zeros without the constant a.
- Product of roots for a cubic: −d/a, not d/a.
- The formulae count every root, so a quartic has four roots in its sum even if only two are real.
- A double root is not two separate crossing points.

## Self-test

1. Find the remainder when 2x⁴ − 3x² + x − 1 is divided by (x − 2).
2. Find the remainder when 2x³ + x² − 3 is divided by (2x + 1).
3. Show that (x − 3) is a factor of x³ − 7x − 6.
4. Hence factorise x³ − 7x − 6 fully.
5. Write down the sum and product of the roots of 3x⁴ − 6x³ + 2x − 9 = 0.
6. A cubic has a single zero at x = 4 and a double zero at x = −1, and a y-intercept of −8. Find its equation in factorised form.
7. Describe the end behaviour of y = −2x⁵ + x.
8. (x + 2) is a factor of 2x³ + kx² − x + 6. Find k.
9. How many turning points can a polynomial of degree 6 have at most?
10. The roots of x³ − 9x² + 23x − 15 = 0 form an arithmetic sequence. Find the middle root.
11. A real cubic has roots 3 and 2i. Write down the third root.
12. Find the product of the roots of x³ + 5x² − 2 = 0.

### Answers

1. p(2) = 32 − 12 + 2 − 1 = 21.
2. p(−1/2) = −1/4 + 1/4 − 3 = −3.
3. 27 − 21 − 6 = 0, so (x − 3) is a factor.
4. x³ − 7x − 6 = (x − 3)(x² + 3x + 2) = (x − 3)(x + 1)(x + 2).
5. Sum = 6/3 = 2; product = (+1)(−9)/3 = −3.
6. y = a(x − 4)(x + 1)²; at x = 0, a(−4)(1) = −8, so a = 2: y = 2(x − 4)(x + 1)².
7. Odd degree with negative leading coefficient: rises to the left (y → ∞ as x → −∞), falls to the right (y → −∞ as x → ∞).
8. p(−2) = −16 + 4k + 2 + 6 = 0, so k = 2.
9. Five.
10. Sum 9 = 3m, so the middle root is 3.
11. −2i (conjugate pair).
12. (−1)³(−2)/1 = 2.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.12.
