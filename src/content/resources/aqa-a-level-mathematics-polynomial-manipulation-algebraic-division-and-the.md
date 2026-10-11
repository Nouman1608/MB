---
title: "AQA A-level Mathematics: Polynomial Manipulation, Algebraic Division and the Factor Theorem (7357)"
seoTitle: "AQA A-level Maths B6 Polynomials, Factor Theorem Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Polynomial Manipulation, Algebraic Division and the Factor Theorem"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b6-manipulating-polynomials-aqa-alevel-maths"
description: "Study guide to AQA A-level Maths content B6: expanding, factorising, dividing by linear expressions, the factor theorem and rational expressions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the AQA A-level Mathematics 7357 specification (version 1.3, dated 31 January 2018) and covers content statement B6 in section B, Algebra and functions. It teaches how to expand and collect, factorise, divide a polynomial by a linear expression, use the factor theorem, and simplify rational expressions. B6 is pure-maths algebra that sits underneath many other topics, including graphs, calculus and proof.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [revision notes](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the-revision-notes/) | [practice questions](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the-practice/) | [free 10-minute diagnostics](/diagnostics/)

For the quadratic case see [quadratics and inequalities](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/). Proof questions often rely on the algebra here, so the [proof guide](/resources/aqa-a-level-mathematics-proof/) is a useful companion.

## What this unit covers

| Spec reference | What you must be able to do | Section below |
|---|---|---|
| B6 (part 1) | Expand brackets and collect like terms | 1 |
| B6 (part 2) | Factorise polynomials | 2 |
| B6 (part 3) | Carry out simple algebraic division | 3 |
| B6 (part 4) | Use the factor theorem | 4 |
| B6 (part 5) | Simplify rational expressions by factorising and cancelling, and by algebraic division (linear divisors only) | 5 |

The specification restricts algebraic division to linear expressions, so this guide divides only by linear divisors. The factor theorem can still be used twice to remove a quadratic factor in two steps.

## 1. Expanding brackets and collecting like terms

A polynomial in x is a sum of terms of the form axⁿ with n a non-negative integer. Its degree is the highest power present. To expand, multiply every term in one bracket by every term in the other, then collect terms with the same power of x.

**Example 1.** Expand and simplify (2x − 1)(x² + 3x − 4) − (x − 2)(x + 5).

```
(2x − 1)(x² + 3x − 4) = 2x³ + 6x² − 8x − x² − 3x + 4
                      = 2x³ + 5x² − 11x + 4
(x − 2)(x + 5)        = x² + 3x − 10
Difference            = 2x³ + 5x² − 11x + 4 − x² − 3x + 10
                      = 2x³ + 4x² − 14x + 14
```

The minus sign in front of the second product applies to all of it. Put it in brackets first, then change every sign.

**Example 2.** Expand (3x − 2)²(x + 4).

Square first, then multiply by the remaining bracket.

```
(3x − 2)² = 9x² − 12x + 4
(9x² − 12x + 4)(x + 4) = 9x³ + 36x² − 12x² − 48x + 4x + 16
                       = 9x³ + 24x² − 44x + 16
```

## 2. Factorisation

Work through these in order. Take out any common factor first, then look at the number of terms.

| Situation | Method | Pattern |
|---|---|---|
| Common factor | Divide it out | 6x³ + 9x² = 3x²(2x + 3) |
| Two terms, both squares | Difference of two squares | a² − b² = (a − b)(a + b) |
| Quadratic with leading coefficient above 1 | Split the middle term, then group | see Example 3 |
| Four terms | Group in pairs | see Example 4 |
| Cubic or higher | Find a root, then use the factor theorem | section 4 |

**Example 3.** Factorise 6x² + x − 35.

Multiply the outer coefficients: 6 × (−35) = −210. Find two numbers with product −210 and sum +1. These are 15 and −14.

```
6x² + 15x − 14x − 35
= 3x(2x + 5) − 7(2x + 5)
= (2x + 5)(3x − 7)
```

**Example 4.** Factorise (a) 18x³ − 50x, (b) x³ + 2x² − 9x − 18, (c) x⁴ − 81.

```
(a) 18x³ − 50x = 2x(9x² − 25) = 2x(3x − 5)(3x + 5)
(b) x³ + 2x² − 9x − 18 = x²(x + 2) − 9(x + 2)
                       = (x + 2)(x² − 9) = (x + 2)(x − 3)(x + 3)
(c) x⁴ − 81 = (x² − 9)(x² + 9) = (x − 3)(x + 3)(x² + 9)
```

In (c), x² + 9 has no real factors, so you stop there. "Factorise completely" means every factor is as simple as it can be using real numbers.

## 3. Algebraic division by a linear expression

Dividing a polynomial f(x) by a linear expression gives a quotient and a remainder:

f(x) = (divisor) × (quotient) + remainder

The remainder is a constant when the divisor is linear. The quotient has degree one less than f(x).

**Example 5.** Divide 3x³ + 2x² − 7x + 4 by (x − 2).

```
              3x²  + 8x  + 9
        ┌────────────────────────
x − 2   │ 3x³ + 2x² − 7x + 4
          3x³ − 6x²
          ─────────
                8x² − 7x
                8x² − 16x
                ─────────
                       9x + 4
                       9x − 18
                       ───────
                            22
```

So 3x³ + 2x² − 7x + 4 = (x − 2)(3x² + 8x + 9) + 22.

**Missing powers.** If a power is absent, write it with coefficient 0 so the columns line up.

**Example 6.** Divide 4x³ − 3x + 5 by (2x + 1).

Write the dividend as 4x³ + 0x² − 3x + 5. At each stage divide the leading term by 2x.

```
4x³ + 0x² − 3x + 5
2x²  × (2x + 1) = 4x³ + 2x²     → remainder −2x² − 3x
−x   × (2x + 1) = −2x² − x      → remainder −2x + 5
−1   × (2x + 1) = −2x − 1       → remainder 6
```

The quotient is 2x² − x − 1 and the remainder is 6. Check by expanding: (2x + 1)(2x² − x − 1) = 4x³ − 3x − 1, and adding 6 gives 4x³ − 3x + 5.

**Alternative: matching coefficients.** For Example 5, write 3x³ + 2x² − 7x + 4 ≡ (x − 2)(ax² + bx + c) + r. Comparing x³ gives a = 3. Comparing x² gives b − 2a = 2, so b = 8. Comparing x gives c − 2b = −7, so c = 9. The constant term gives r − 2c = 4, so r = 22. This is slower on paper but easy to check.

## 4. The factor theorem and the remainder

**Remainder result.** When f(x) is divided by (x − a), the remainder is f(a). Reason: f(x) = (x − a)q(x) + r, and putting x = a gives f(a) = r.

**Factor theorem.** If f(a) = 0 then (x − a) is a factor of f(x). The converse also holds: if (x − a) is a factor then f(a) = 0.

For a divisor (px + q), the value to substitute is x = −q/p. So (2x + 1) is a factor of f(x) exactly when f(−1/2) = 0.

**Finding a root.** For a polynomial with integer coefficients, any rational root written as a fraction in lowest terms has a numerator dividing the constant term and a denominator dividing the leading coefficient. Test the small candidates one at a time.

**Example 7.** Factorise f(x) = x³ − 4x² − 7x + 10 completely and solve f(x) = 0.

Candidates divide 10: ±1, ±2, ±5, ±10.

```
f(1) = 1 − 4 − 7 + 10 = 0     so (x − 1) is a factor
```

Divide by (x − 1), using the same layout as Example 5:

```
x³ − 4x² − 7x + 10 = (x − 1)(x² − 3x − 10)
x² × (x − 1) = x³ − x²          → remainder −3x² − 7x
−3x × (x − 1) = −3x² + 3x       → remainder −10x + 10
−10 × (x − 1) = −10x + 10       → remainder 0
```

The zero remainder confirms the factor. Then x² − 3x − 10 factorises as (x − 5)(x + 2). So

f(x) = (x − 1)(x − 5)(x + 2), and the solutions are x = 1, x = 5 and x = −2.

**Example 8 (unknown constants).** f(x) = 2x³ + ax² − 7x + b. (x − 2) is a factor, and the remainder when f(x) is divided by (x + 1) is 9. Find a and b.

```
f(2)  = 16 + 4a − 14 + b = 0   →  4a + b = −2
f(−1) = −2 + a + 7 + b = 9     →  a + b = 4
Subtract: 3a = −6, so a = −2 and b = 6
```

Check: f(x) = 2x³ − 2x² − 7x + 6 and f(2) = 16 − 8 − 14 + 6 = 0. Dividing by (x − 2) gives 2x² + 2x − 3. Its discriminant is 4 + 24 = 28, which is not a perfect square, so the other two roots are irrational and the factorisation stops at f(x) = (x − 2)(2x² + 2x − 3).

## 5. Rational expressions

A rational expression is one polynomial divided by another. Simplify by factorising top and bottom, then cancelling common factors. You can only cancel factors, never terms.

**Example 9.** Simplify (3x² + x − 10)/(x² − x − 6) and state the values of x that must be excluded.

```
3x² + x − 10 = (3x − 5)(x + 2)
x² − x − 6   = (x − 3)(x + 2)
```

The expression is (3x − 5)/(x − 3), provided x ≠ −2 and x ≠ 3. Keep the exclusion for x = −2 even though that factor has cancelled: the original expression is undefined there.

**Multiplying and dividing.** Factorise everything, turn a division into a multiplication by the reciprocal, then cancel.

**Example 10.** Simplify (x² − 4)/(x² + 3x) ÷ (x − 2)/(x + 3).

```
= (x − 2)(x + 2) / [x(x + 3)]  ×  (x + 3)/(x − 2)
= (x + 2)/x
```

Excluded values are x = 0, −3 and 2.

**Algebraic division in a fraction.** When the numerator has degree equal to or higher than the denominator, divide to rewrite it as a polynomial plus a fraction with a constant numerator.

**Example 11.** Write (x³ + x² − 5x + 8)/(x + 3) in the form Ax² + Bx + C + D/(x + 3).

Dividing x³ + x² − 5x + 8 by (x + 3) gives quotient x² − 2x + 1 and remainder 5, because f(−3) = −27 + 9 + 15 + 8 = 5. So

(x³ + x² − 5x + 8)/(x + 3) = x² − 2x + 1 + 5/(x + 3).

## Common errors

- Cancelling terms such as the x in (x + 3)/x. Only whole factors cancel.
- Forgetting the 0x² placeholder when a power is missing, which shifts every later column.
- Testing f(a) instead of f(−a) for a factor (x + a). The factor (x + 2) needs f(−2) = 0.
- For a divisor (2x + 1), substituting x = −1 instead of x = −1/2.
- Dropping a sign when subtracting a bracket during long division or expansion.
- Stopping after finding one factor when the question says "factorise completely" or "solve".
- Writing a remainder that still contains x. Dividing by a linear expression leaves a constant.

## Next steps

Try the [practice questions](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the-practice/), then use the [revision notes](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the-revision-notes/) to keep the methods fresh. If a method feels shaky, take a [free 10-minute diagnostic](/diagnostics/) to find the gap, and tick off progress on the [checklist](/checklists/aqa/a-level/mathematics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, for teaching from September 2017, version 1.3 dated 31 January 2018, published by AQA. This guide covers content statement B6.
