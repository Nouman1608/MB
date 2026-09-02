---
title: "Pearson Edexcel IGCSE Mathematics: Use of Symbols and Algebraic Manipulation — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Equations, formulae and identities"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
description: "Condensed recall notes on index notation, expanding, factorising, algebraic fractions and completing the square for Pearson Edexcel International GCSE Mathematics (4MA1), Higher Tier sub-topics 2.1-2.2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Use of Symbols and Algebraic Manipulation study guide](/resources/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation/).

## Index notation (2.1)

```
x^(-n) = 1 / x^n           (negative power = reciprocal)
x^0 = 1                    (for any non-zero base)
x^(1/n) = nth root of x    (fractional power = a root)
```

Treat these as **three separate rules**, not one blurred idea of "powers can look different." Index laws for combining powers only apply to the **same base**.

## Expanding three linear expressions (2.2A)

**Systematic method:** multiply the first two brackets fully, simplify, **then** multiply by the third bracket — don't attempt all three at once, where arithmetic slips creep in.

## Factorising quadratics (2.2B)

Factorise when the quadratic has **clean integer roots**. Example: 6x² − 5x − 6.

## Completing the square (2.2D)

Use when a quadratic does **not** factorise cleanly, or when finding a **turning point**.

**Worked example:** write 2x² + 6x − 1 in the form a(x + b)² + c.

```
2x^2 + 6x - 1
= 2(x^2 + 3x) - 1              [factor out coefficient of x^2]
= 2[(x + 1.5)^2 - 2.25] - 1    [complete the square inside]
= 2(x + 1.5)^2 - 4.5 - 1       [multiply -2.25 by 2 !]
= 2(x + 1.5)^2 - 5.5

a = 2, b = 1.5, c = -5.5
```

**The single most common error:** forgetting to multiply the adjustment term (−2.25) by the factored-out coefficient (2) before combining with the constant already outside the bracket.

## Algebraic fractions (2.2C)

Combines several skills at once: **factorise → cancel common factors → find a common denominator**. Revise this **only after 2.2B is genuinely fluent** — a factorising weakness will surface here.

**Worked example:** express (3x+1)/(x+2) − (x−2)/(x−1) as a single fraction.

```
Common denominator: (x + 2)(x - 1)

(3x + 1)(x - 1) - (x - 2)(x + 2)
---------------------------------
        (x + 2)(x - 1)

Numerator: (3x^2 - 2x - 1) - (x^2 - 4) = 2x^2 - 2x + 3

Result: (2x^2 - 2x + 3) / [(x + 2)(x - 1)]
```

**Two commonly rushed steps:** expanding each bracket fully first, and subtracting the **entire second numerator**, not just its first term.

## Proof using algebra (2.2E)

Algebra is used to construct proofs — express an unknown generally (e.g. "let the number be n" or "2n" for any even number), manipulate, and show the required result holds for **all** valid values, not just checked examples.

## Worked example: factorising vs. completing the square

Decide the more efficient method for x^2 + 6x + 5, then for x^2 + 4x + 1.

```
x^2 + 6x + 5:
  Look for two numbers multiplying to 5, adding to 6: 1 and 5.
  Factorises cleanly: (x + 1)(x + 5).
  -> FACTORISING is the faster method here.

x^2 + 4x + 1:
  No integer pair multiplies to 1 and adds to 4.
  Does not factorise with integers.
  -> COMPLETING THE SQUARE is required:
     x^2 + 4x + 1 = (x + 2)^2 - 4 + 1 = (x + 2)^2 - 3
```

Practising this decision -- try factorising first, and switch to completing the square only when it doesn't yield clean integers -- rather than defaulting to one method regardless of the expression, saves time in an exam and avoids forcing a factorisation that doesn't actually exist.

## Where this content leads

Sub-topics 2.1 and 2.2 are the toolkit every later sub-topic in Topic 2 (Equations, Formulae and Identities) depends on: solving equations (2.3) uses factorising and completing the square directly to solve quadratics; functions and graphs (2.4-2.5) require confident algebraic manipulation to find intercepts, turning points and asymptotes. Treat fluency here as a prerequisite to secure before moving on, not content to revise once in isolation.

## Key terms

**Index notation** — writing repeated multiplication as a power (base and exponent). **Factorising** — writing an expression as a product of factors. **Completing the square** — rewriting a quadratic as a(x+b)²+c. **Algebraic fraction** — a fraction with an algebraic expression in the numerator and/or denominator.

## A note on proof by algebra (2.2E)

A typical exam task: "Prove that the sum of any two consecutive odd numbers is always even." Represent the first odd number generally as 2n + 1 (for any integer n), so the next consecutive odd number is 2n + 3. Their sum is (2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1), which is a multiple of 4 and therefore always even, for **every** integer value of n -- not just the specific examples you might check by hand. Representing the unknown generally, rather than proving the claim only for a few chosen numbers, is what separates a genuine algebraic proof from an unconvincing pattern-spotting answer.

## Common mistakes

- Applying an index law to terms with **different bases**.
- Sign errors when expanding three linear expressions, especially with a negative term in more than one bracket.
- **Cancelling additive terms** in an algebraic fraction as though they were multiplicative factors — not valid.
- Forgetting to multiply the adjustment term by the factored-out coefficient when completing the square.

## Quick self-test

- Simplify x⁻³, x⁰, and x^(1/2) in words.
- Expand (x + 1)(x + 2)(x − 3).
- Write 3x² − 12x + 5 in completed-square form.
- Simplify (2x² + 3x)/(4x² − 9).
- Express (x+1)/(x−1) + (x−2)/(x+1) as a single fraction.

Higher-tier candidates should expect 2.2A–2.2E assessed **both in isolation and combined** within a single longer question — practising them together is genuinely representative of exam demand.

## Official syllabus

Pearson Edexcel International GCSE Mathematics (Specification A) (4MA1)
specification, Issue 2, November 2017 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf).
