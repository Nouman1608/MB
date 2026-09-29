---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Algebra -- Revision Notes"
seoTitle: "Cambridge 9709 Pure Maths 2 Algebra Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Algebra"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 37
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "algebra-cambridge-alevel-maths-2"
description: "Revision notes for Cambridge 9709 Paper 2 Algebra (2.1): modulus rules, polynomial division, the factor and remainder theorems, and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

These notes condense section **2.1 Algebra** of topic 2, Pure Mathematics 2, in the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). The content is examined on **Paper 2** (1 hour 15 minutes, 50 marks), which is offered only as part of AS Level on the Pure Mathematics only route. Paper 1 knowledge is assumed. For full explanations and worked examples, read the [Pure Mathematics 2 Algebra study guide](/resources/a-level-maths-9709-pure-mathematics-2-algebra/) first.

Practise with the [2.1 Algebra practice questions](/resources/a-level-maths-9709-pure-mathematics-2-algebra-practice/). Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Checklist: [9709 printable checklist](/checklists/cambridge/a-level/mathematics/). Quick check: [AS Level 10-minute diagnostic](/practice/9709/diagnostic/as/) and the [9709 self-check bank](/practice/9709/).

## What 2.1 asks for

1. Understand |x| and sketch y = |ax + b|.
2. Use |a| = |b| ⇔ a² = b² and |x − a| < b ⇔ a − b < x < a + b to solve equations and inequalities.
3. Divide a polynomial of degree up to 4 by a linear or quadratic polynomial, and identify the quotient and remainder (which may be zero).
4. Use the factor and remainder theorems, including factors (ax + b) with a ≠ 1.

Not included: graphs of y = |f(x)| or y = f(|x|) for non-linear f. A scientific calculator is allowed, but unsupported calculator answers earn no marks.

## Key results

None of these is in the list of formulae (MF19). Learn them.

| Result | Statement |
|---|---|
| Definition | \|x\| = x for x ≥ 0; \|x\| = −x for x < 0 |
| Vertex of y = \|ax + b\| | (−b/a, 0); y-intercept (0, \|b\|) |
| Both sides moduli | \|a\| = \|b\| ⇔ a² = b² |
| "Less than" | \|x − a\| < b ⇔ a − b < x < a + b |
| "Greater than" | \|x − a\| > b ⇔ x < a − b or x > a + b |
| Division identity | p(x) ≡ d(x) × q(x) + r(x), degree of r < degree of d |
| Remainder theorem | Remainder on dividing p(x) by (x − a) is p(a); by (ax + b) it is p(−b/a) |
| Factor theorem | (ax + b) is a factor of p(x) ⇔ p(−b/a) = 0 |

## Must-know distinctions

- **Modulus on both sides vs one side.** Both sides moduli: square freely. One side an ordinary expression: solve two cases and check each, or sketch.
- **"< b" vs "> b".** "Less than" gives one interval between two values. "Greater than" gives two outer pieces joined by "or".
- **Strict vs non-strict.** |x − a| ≤ b gives a − b ≤ x ≤ a + b. Keep the same sign type as the question.
- **Remainder after a linear divisor vs a quadratic divisor.** Linear divisor: remainder is a constant. Quadratic divisor: remainder is Ax + B (A or B may be zero).
- **Factor (x − a) vs (ax + b).** For (x − 4) substitute x = 4. For (3x + 1) substitute x = −1/3, not x = −1 or x = 1/3.
- **Remainder zero vs remainder non-zero.** Zero remainder means the divisor is a factor. Any other value means it is not.
- **Exact vs decimal roots.** If a quadratic factor gives surds, leave them exact, such as (−1 ± √13)/2, unless the question asks for 3 significant figures.

## Method in steps

**Modulus equation, one side not a modulus**
1. Write case 1: expression inside = right-hand side.
2. Write case 2: −(expression inside) = right-hand side.
3. Solve each linear equation.
4. Substitute each answer back into the original equation. Reject any that make the right-hand side negative.

**Modulus inequality, one side not a modulus**
1. Sketch the V and the other graph on one diagram.
2. Find the boundary values with the two cases above. Keep only the valid ones.
3. Read off where the V is above (for >) or below (for <) the other graph.
4. Test one value in each region if you are unsure.

**Long division by a quadratic**
1. Write p(x) in descending powers, with 0 for any missing power.
2. Divide the leading term by x², write the result in the quotient, multiply back and subtract.
3. Repeat until what is left has degree 1 or 0. That is the remainder.
4. Check: d(x) × q(x) + r(x) should expand back to p(x).

**Two unknown coefficients**
1. Turn each condition into p(value) = remainder (0 for a factor).
2. Clear fractions, simplify each equation.
3. Solve the simultaneous equations.
4. Write out p(x) in full with the numbers in, before any later part.

**Solving a cubic**
1. Find one root by trial: test ± factors of the constant, then fractions ±c/d.
2. State the factor theorem result in words.
3. Divide (or compare coefficients) to get the quadratic factor.
4. Factorise the quadratic, or use the formula, or the discriminant to show no real roots.

## Worked reminders

**Comparing coefficients instead of long division.** Divide x³ + 4x² − x + 7 by x² + 2.

```
x³ + 4x² − x + 7 ≡ (x² + 2)(Ax + B) + Cx + D
x³:  1 = A
x²:  4 = B
x¹: −1 = 2A + C   →  C = −3
x⁰:  7 = 2B + D   →  D = −1
```

Quotient x + 4, remainder −3x − 1.

**Remainder with a non-unit coefficient.** Remainder when 9x³ − 3x + 5 is divided by (3x + 1):

```
p(−1/3) = 9(−1/27) − 3(−1/3) + 5 = −1/3 + 1 + 5 = 17/3
```

**One boundary disappears.** Solve |x − 3| < 2x.

```
Case 1: x − 3 = 2x      →  x = −3;  2x = −6 < 0, so not a meeting point
Case 2: −(x − 3) = 2x   →  x = 1;   |−2| = 2 = 2(1), valid
```

The line y = 2x is above the V only to the right of x = 1, so x > 1.

## Quick self-test

1. Evaluate |−4| + |1 − 6|.
2. Solve |x − 2| = 5.
3. Solve |2x + 3| ≤ 7.
4. Solve |x + 1| > 4.
5. Solve |x| = |2x − 6|.
6. Find the remainder when x³ − 4x + 9 is divided by (x + 3).
7. Find the remainder when 8x³ + 2x − 1 is divided by (2x + 1).
8. (x − 2) is a factor of x³ + kx² − 4. Find k.
9. Find the quotient and remainder when x³ + 3x² − 2x + 5 is divided by x² + 1.
10. Show that x² − 2x + 3 is a factor of x⁴ − x³ + 5x − 3, and find the other factor.
11. State the coordinates where y = |4x − 3| meets each axis.
12. Solve |x + 4| < x + 6.

### Answers

1. 4 + 5 = **9**
2. x − 2 = 5 or x − 2 = −5, so **x = 7 or x = −3**
3. −7 ≤ 2x + 3 ≤ 7, so **−5 ≤ x ≤ 2**
4. x + 1 < −4 or x + 1 > 4, so **x < −5 or x > 3**
5. x² = (2x − 6)² gives 3x² − 24x + 36 = 0, so x² − 8x + 12 = 0: **x = 2 or x = 6**
6. p(−3) = −27 + 12 + 9 = **−6**
7. p(−1/2) = 8(−1/8) − 1 − 1 = **−3**
8. 8 + 4k − 4 = 0, so **k = −1**
9. Quotient **x + 3**, remainder **−3x + 2**
10. Division gives quotient x² + x − 1 and remainder 0, so it is a factor; the other factor is **x² + x − 1**
11. **(3/4, 0) and (0, 3)**
12. Case x + 4 = x + 6 has no solution; case −(x + 4) = x + 6 gives x = −5, where both sides are 1. For x ≥ −4 the inequality x + 4 < x + 6 always holds. So **x > −5**

## Where marks are usually lost

- Squaring |ax + b| = cx + d and keeping a root that makes cx + d negative.
- Turning |x + 1| > 4 into −4 < x + 1 < 4, which answers the opposite question.
- Writing "x < −5 and x > 3" or "−5 > x > 3" instead of "x < −5 or x > 3".
- Solving a modulus inequality with no sketch, so an extra boundary value from a false case is used.
- Leaving out the zero coefficient of a missing power, such as the x² term in x⁴ + 2x³ − 3x + 1, during long division.
- Giving a remainder of the wrong degree, for example stopping at a quadratic when dividing by a quadratic.
- Substituting x = 1/2 for the factor (2x + 1); the correct value is x = −1/2.
- Not stating "so (x − a) is a factor" after showing p(a) = 0, which can cost the conclusion mark on a "show that".
- Finding a and b correctly, then using the old p(x) with letters in a later part.
- Ignoring a quadratic factor with negative discriminant instead of saying it gives no real roots.

## Links

- [Pure Mathematics 2 Algebra study guide](/resources/a-level-maths-9709-pure-mathematics-2-algebra/)
- [Pure Mathematics 2 Algebra practice questions](/resources/a-level-maths-9709-pure-mathematics-2-algebra-practice/)
- [Pure Mathematics 2 overview](/resources/a-level-mathematics-pure-mathematics-2/) and [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/) for the other Paper 2 sections
- [Quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) for the Paper 1 skills used after a factor is found
- [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/) if you move to the A Level route

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.1 Algebra.
