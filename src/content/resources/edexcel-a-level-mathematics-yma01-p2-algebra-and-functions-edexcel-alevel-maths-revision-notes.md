---
title: "Edexcel International A Level Mathematics (YMA01): Algebra and functions (P2.2) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-algebra-and-functions-edexcel-alevel-maths"
description: "Condensed notes on algebraic division, the remainder theorem and the factor theorem for Edexcel IAL Maths Unit P2, with key terms, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2 of Unit P2 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "Simple algebraic division; use of the Factor Theorem and the Remainder Theorem", with division only by (ax + b) or (ax − b). For full worked examples, use the [P2 algebra and functions study guide](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths/), then try the [P2 algebra and functions practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths-practice/).

## The section in four lines

1. f(x) ≡ (ax − b) q(x) + R, where q(x) is the quotient and R the remainder.
2. Remainder theorem: dividing f(x) by (ax − b) leaves remainder f(b/a).
3. Factor theorem: (ax − b) is a factor of f(x) exactly when f(b/a) = 0.
4. Factorising a cubic = find one root by trial, divide, factorise the quadratic quotient.

## What to substitute

| Divisor | Substitute | Remainder |
|---|---|---|
| x − 4 | x = 4 | f(4) |
| x + 4 | x = −4 | f(−4) |
| 2x − 3 | x = 3/2 | f(3/2) |
| 3x + 1 | x = −1/3 | f(−1/3) |

Rule: solve "divisor = 0" and substitute that value.

## Long division checklist

- Write every power, inserting zero coefficients (x³ − 5x + 2 becomes x³ + 0x² − 5x + 2).
- Divide the leading term only, multiply back the whole divisor, subtract the whole line.
- The quotient has degree one less than f(x); the remainder is a number.
- Check: f(b/a) must equal the remainder you found.

**Shortcut by inspection.** For a factor (x − 3) of 2x³ − 3x² − 11x + 6, the quotient is 2x² + Bx − 2 (leading term 2x³ ÷ x, constant 6 ÷ (−3)). Matching x² terms: B − 6 = −3, so B = 3.

## Factorising a cubic: the routine

1. Try x = ±1, ±2, ±3, ... (factors of the constant term); for a leading coefficient other than 1, also try fractions such as ±½ and ±⅓.
2. When f(c) = 0, write down the factor (x − c).
3. Divide or compare coefficients to get the quadratic quotient.
4. Factorise the quadratic, or use its discriminant to show it does not factorise.
5. If asked to solve, set each factor to zero.

## Unknown coefficients: the routine

- Each "is a factor" gives f(root) = 0.
- Each "leaves remainder R" gives f(value) = R.
- Two conditions, two unknowns: solve simultaneously, then substitute back to check.

## Graph links

- Linear factor (ax − b): curve meets the x-axis at x = b/a.
- Repeated factor (x − c)²: curve touches the x-axis at x = c.
- Quadratic factor with negative discriminant: no further x-intercepts.

## Key terms

| Term | Meaning |
|---|---|
| Dividend | The polynomial being divided, f(x) |
| Divisor | The expression divided by, here (ax ± b) |
| Quotient | The polynomial q(x) in f(x) ≡ (ax − b) q(x) + R |
| Remainder | The constant R left over; R = f(b/a) |
| Factor | A divisor that leaves remainder 0 |
| Root | A value c with f(c) = 0 |
| Factorise fully | Write as a product of linear factors and any irreducible quadratic factor |
| Repeated root | A root from a squared factor, where the curve touches the axis |

## Exam traps

- **Sign of the substitution:** (x + 5) means substitute −5.
- **(ax − b) with a ≠ 1:** substitute b/a, not b.
- **Showing a factor:** write f(c) = 0 *and* the sentence "so (x − c) is a factor".
- **Factorise fully** means the quadratic quotient must be factorised too, if it can be.
- **Missing x² or x term** in long division leads to misaligned columns.
- **Remainder versus quotient:** a question asking for both expects q(x) and R separately.
- **Fractions in the substitution:** evaluate f(−⅔) term by term; one slip in a cube spoils the answer.

## Self-test

**1.** Find the remainder when x³ − 2x² + 5 is divided by (x − 3).

**2.** Find the remainder when 2x³ + x² − 4 is divided by (2x − 1).

**3.** Is (x + 2) a factor of x³ + 8? Justify your answer.

**4.** What value of x would you substitute to test whether (3x + 4) is a factor?

**5.** Factorise x³ − 4x² + x + 6 fully.

**6.** Divide x³ − 8 by (x − 2).

**7.** When x³ + kx² − 2 is divided by (x − 1) the remainder is 7. Find k.

**8.** A quartic is divided by (2x + 3). State the degree of the quotient.

**9.** f(x) ≡ (x − 2)(x² + 3x + 5) + 4. Write down the remainder when f(x) is divided by (x − 2).

**10.** x³ − 3x² + 4 = (x + 1)(x − 2)². Describe how the graph of y = x³ − 3x² + 4 meets the x-axis.

**11.** f(x) = (x + 2)(2x² − x + 3). Explain why f(x) = 0 has exactly one real root.

### Answers

**1.** f(3) = 27 − 18 + 5 = 14.

**2.** f(½) = ¼ + ¼ − 4 = −7/2.

**3.** f(−2) = −8 + 8 = 0, so yes, (x + 2) is a factor.

**4.** x = −4/3.

**5.** f(−1) = −1 − 4 − 1 + 6 = 0, so (x + 1) is a factor; quotient x² − 5x + 6 = (x − 2)(x − 3). Answer: (x + 1)(x − 2)(x − 3).

**6.** Write x³ + 0x² + 0x − 8; quotient x² + 2x + 4, remainder 0.

**7.** f(1) = 1 + k − 2 = 7, so k = 8.

**8.** Degree 3.

**9.** 4.

**10.** It crosses the axis at x = −1 and touches it at x = 2 (repeated root).

**11.** x = −2 is a root. The quadratic 2x² − x + 3 has discriminant 1 − 24 = −23 < 0, so it has no real roots.

## Related resources

- [P2 algebra and functions study guide](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths/)
- [P2 algebra and functions practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths-practice/)
- [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)
- [Proof, the factor and remainder theorems and circles revision notes](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the-revision-notes/)
