---
title: "Edexcel International GCSE Mathematics A (4MA1): Algebraic manipulation"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Equations, formulae and identities"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 2.2
syllabusTopics:
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
    subtopic: "algebraic-manipulation-edexcel-igcse-maths"
description: "Study guide to 4MA1 section 2.2: substitution, brackets, factorising, then Higher algebraic fractions, completing the square and proof, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.2, Algebraic manipulation, in topic 2 (Equations, formulae and identities) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2. Section 2.2 is the toolkit for almost every later algebra question: solving quadratics, rearranging formulae, finding turning points and writing proofs all depend on it.

The [Use of symbols and algebraic manipulation study guide](/resources/edexcel-igcse-maths-4ma1-use-of-symbols-and-algebraic-manipulation/) introduces each skill. This page works through 2.2 statement by statement with different examples and more detail on the decisions you make (which method, which order, how to check). Afterwards, use the [algebraic manipulation revision notes](/resources/edexcel-igcse-mathematics-4ma1-algebraic-manipulation-edexcel-igcse-maths-revision-notes/) and the [algebraic manipulation practice questions](/resources/edexcel-igcse-mathematics-4ma1-algebraic-manipulation-edexcel-igcse-maths-practice/).

## What the specification says

| Statement | Students should be taught to | Tier |
|---|---|---|
| Foundation 2.2 A | evaluate expressions by substituting numerical values for letters | Both |
| Foundation 2.2 B | collect like terms | Both |
| Foundation 2.2 C | multiply a single term over a bracket | Both |
| Foundation 2.2 D | take out common factors | Both |
| Foundation 2.2 E | expand the product of two simple linear expressions | Both |
| Foundation 2.2 F | factorise quadratic expressions, limited to x² + bx + c | Both |
| Higher 2.2 A | expand the product of two or more linear expressions | Higher only |
| Higher 2.2 B | factorise quadratic expressions (any form) | Higher only |
| Higher 2.2 C | manipulate algebraic fractions with numeric, linear or quadratic numerators and denominators | Higher only |
| Higher 2.2 D | complete the square for a given quadratic expression | Higher only |
| Higher 2.2 E | use algebra to support and construct proofs | Higher only |

## Foundation skills (both tiers)

### Substitution

Replace each letter with its value in brackets, then follow the order of operations.

**Worked example 1.** Find the value of (a² − 2b) / (3c) when a = −4, b = 2.5 and c = −2/3.

```
a² = (−4)² = 16;  2b = 5;  numerator = 16 − 5 = 11
3c = 3 × (−2/3) = −2
value = 11 ÷ (−2) = −5.5
```

### Like terms

Like terms have exactly the same letters raised to the same powers. x²y and xy² are **not** like terms.

5x²y − 3xy² + 2x²y + xy² = **7x²y − 2xy²**

### Brackets and common factors

When a bracket is subtracted, the minus sign multiplies every term inside it.

```
4(3x − 2) − 3(2x − 5) = 12x − 8 − 6x + 15 = 6x + 7
```

To factorise **fully**, take out the highest common factor of the numbers **and** of each letter.

```
18p²q − 24pq³:   HCF of 18 and 24 is 6;  lowest power of p is p;  lowest power of q is q
= 6pq(3p − 4q²)
```

Check by expanding: 6pq × 3p = 18p²q and 6pq × 4q² = 24pq³. An answer such as 3p(6pq − 8q³) is correct algebra but not fully factorised, so it would not gain full marks.

### Two linear brackets

Multiply every term in the first bracket by every term in the second. A squared bracket is two brackets.

```
(3x − 4)(2x + 5) = 6x² + 15x − 8x − 20 = 6x² + 7x − 20
(x − 7)²         = (x − 7)(x − 7) = x² − 14x + 49
```

(x − 7)² is not x² + 49: the middle term −14x comes from the two cross products.

### Factorising x² + bx + c

Find two numbers that multiply to c and add to b. The signs follow a pattern:

| c | b | Numbers |
|---|---|---|
| positive | positive | both positive |
| positive | negative | both negative |
| negative | either | one positive, one negative; the larger size takes the sign of b |

**Worked example 2.** Factorise (a) x² − 2x − 48 (b) x² − 49.

```
(a) multiply to −48, add to −2:  −8 and +6       (x − 8)(x + 6)
(b) b = 0: multiply to −49, add to 0:  −7 and +7  (x − 7)(x + 7)
```

Part (b) is the **difference of two squares**: x² − a² = (x − a)(x + a).

## Higher tier only

### Three or more brackets

Multiply two brackets, simplify, then multiply by the third.

**Worked example 3 (Higher).** Expand (x + 3)³.

```
(x + 3)² = x² + 6x + 9
(x² + 6x + 9)(x + 3) = x³ + 3x² + 6x² + 18x + 9x + 27
                     = x³ + 9x² + 27x + 27
```

Check with x = 1: (1 + 3)³ = 64 and 1 + 9 + 27 + 27 = 64.

### Factorising ax² + bx + c

Take out any common factor first. Then multiply a × c, find two numbers with that product and sum b, split the middle term, and factorise in pairs.

**Worked example 4 (Higher).** Factorise 12x² − 7x − 10.

```
a × c = 12 × (−10) = −120;  numbers with product −120 and sum −7:  −15 and 8
12x² − 15x + 8x − 10
= 3x(4x − 5) + 2(4x − 5)
= (3x + 2)(4x − 5)
```

The two brackets after factorising in pairs must match, here (4x − 5). If they do not, recheck the split.

### Algebraic fractions

Factorise first, then cancel only whole factors that appear in both numerator and denominator.

**Worked example 5 (Higher).** Simplify (x² − x − 6) / (2x² + 3x − 2).

```
= (x − 3)(x + 2) / [(2x − 1)(x + 2)]
= (x − 3) / (2x − 1)
```

To add or subtract, use a common denominator. To divide, multiply by the reciprocal.

**Worked example 6 (Higher).** (a) Write 4/(x − 3) − 2/(x + 1) as a single fraction. (b) Simplify (x² − 16)/(3x) ÷ (x + 4)/(6x²).

```
(a) [4(x + 1) − 2(x − 3)] / [(x − 3)(x + 1)]
    = (4x + 4 − 2x + 6) / [(x − 3)(x + 1)]
    = (2x + 10) / [(x − 3)(x + 1)]   or   2(x + 5) / [(x − 3)(x + 1)]

(b) (x − 4)(x + 4)/(3x) × 6x²/(x + 4)
    = (x − 4) × 2x
    = 2x(x − 4)
```

In (a), −2 × (−3) gives **+6**: the whole second numerator is subtracted.

### Completing the square

For x² + bx + c, halve b: x² + bx + c = (x + b/2)² − (b/2)² + c. When the x² coefficient is not 1, take it out of the x² and x terms first.

**Worked example 7 (Higher).** (a) Write x² − 6x + 14 in the form (x + p)² + q and state its minimum value. (b) Write 7 + 8x − 2x² in the form a + b(x + c)².

```
(a) (x − 3)² − 9 + 14 = (x − 3)² + 5
    (x − 3)² ≥ 0, so the minimum value is 5, when x = 3

(b) −2x² + 8x + 7 = −2(x² − 4x) + 7
                  = −2[(x − 2)² − 4] + 7
                  = −2(x − 2)² + 8 + 7
                  = 15 − 2(x − 2)²
```

In (b) the −4 inside the square bracket is multiplied by −2, giving +8. Because −2(x − 2)² ≤ 0, the expression has a maximum value of 15, when x = 2.

### Proof

A proof must work for **every** value, so use general forms: n for any integer, 2n for an even number, 2n + 1 for an odd number, n and n + 1 for consecutive integers. Expand, simplify and then explain what the final form shows.

**Worked example 8 (Higher).** Prove that (2n + 3)² − (2n − 1)² is a multiple of 8 for every integer n.

```
(4n² + 12n + 9) − (4n² − 4n + 1)
= 16n + 8
= 8(2n + 1)
```

8(2n + 1) has a factor of 8, and 2n + 1 is an integer, so the expression is a multiple of 8 for every integer n. The final sentence is part of the proof: without it, the algebra alone is incomplete.

## Common mistakes

- Subtracting a bracket without changing every sign inside it.
- Not factorising fully: 6x² + 9x = 3x(2x + 3), not 3(2x² + 3x).
- Writing (x − 7)² = x² + 49 or x² − 49.
- Cancelling terms that are added: (x + 6)/(x + 2) does not simplify to 3.
- Forgetting to multiply the adjustment term by the outside coefficient when completing the square.
- "Proving" with a few numerical examples instead of general algebra.

## Exam technique

- **"Expand and simplify"**: expand, then collect like terms; an unsimplified answer loses the final mark.
- **"Factorise fully"**: check the brackets for a remaining common factor.
- **"Simplify fully"** with algebraic fractions: factorise every numerator and denominator before cancelling.
- **"Show that"**: the answer is given, so every step must be written; the marks are for the working.
- **"Prove"**: define your general form in words, simplify, then end with a sentence that states the conclusion.
- Check any expansion or factorisation by substituting a simple value such as x = 1 or x = 2 into both forms.

## Next steps

Revise from the [algebraic manipulation revision notes](/resources/edexcel-igcse-mathematics-4ma1-algebraic-manipulation-edexcel-igcse-maths-revision-notes/), then try the [algebraic manipulation practice questions](/resources/edexcel-igcse-mathematics-4ma1-algebraic-manipulation-edexcel-igcse-maths-practice/). Factorising and completing the square are used again in the [quadratic equations study guide](/resources/edexcel-igcse-maths-4ma1-quadratic-equations/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 2, Equations, formulae and identities: 2.2 Algebraic manipulation, Foundation Tier statements A to F and Higher Tier statements A to E.
