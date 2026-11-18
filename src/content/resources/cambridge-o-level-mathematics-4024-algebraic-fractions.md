---
title: "Cambridge O Level Mathematics (4024): Algebraic fractions"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.3
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "algebraic-fractions"
description: "Cambridge O Level Maths 4024 subtopic 2.3 in depth: adding, subtracting, multiplying and dividing algebraic fractions and simplifying rational expressions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.3 Algebraic fractions** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The broader [Algebraic Manipulation study guide](/resources/algebraic-manipulation/) works through the syllabus's own examples. This page uses new examples and concentrates on the steps where marks are lost: subtracting a numerator, choosing the lowest common denominator, and spotting factors such as (2 − x) that hide a common factor.

Companion pages: the [algebraic fractions revision notes](/resources/cambridge-o-level-mathematics-4024-algebraic-fractions-revision-notes/) and the [algebraic fractions practice questions](/resources/cambridge-o-level-mathematics-4024-algebraic-fractions-practice/).

## What the syllabus asks

The 4024 syllabus lists two outcomes for 2.3:

1. Manipulate algebraic fractions. Its examples include adding and subtracting fractions with numerical denominators, multiplying and dividing simple algebraic fractions, and adding fractions with linear denominators such as x − 2 and x − 3.
2. Factorise and simplify rational expressions, such as a quadratic over a quadratic.

These skills rely on the factorising in subtopic 2.2, and they are used again when solving fractional equations in subtopic 2.5. Expect them on Paper 1, without a calculator.

## The one rule behind every method

An algebraic fraction obeys exactly the same rules as a numerical fraction. If you are unsure of a step, try it with numbers: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. The algebra copies this.

You may only **cancel a factor**: something that multiplies the whole numerator and the whole denominator. (x + 6)/(x + 2) cannot be simplified, because x is a term, not a factor.

## 1. Adding and subtracting with numerical denominators

Find the lowest common multiple of the denominators, rewrite each fraction over it, then combine the numerators.

**Worked example.** Simplify (2x + 1)/4 − (x − 3)/6.

```
LCM of 4 and 6 is 12

(2x + 1)/4 = 3(2x + 1)/12
(x − 3)/6  = 2(x − 3)/12

[3(2x + 1) − 2(x − 3)] / 12
= (6x + 3 − 2x + 6) / 12
= (4x + 9) / 12
```

The key line is **− 2(x − 3) = −2x + 6**. Keep the second numerator in brackets until you expand it, so the minus sign applies to both of its terms.

**Worked example.** Simplify 5/(2x) + 1/(3x).

```
common denominator 6x
5/(2x) = 15/(6x)
1/(3x) = 2/(6x)
sum = 17/(6x)
```

Using 6x², the product of the denominators, would also work but gives an answer that then needs simplifying.

## 2. Adding and subtracting with algebraic denominators

When the denominators are different linear expressions, the common denominator is their product.

**Worked example.** Write 3/(x + 2) − 2/(x − 1) as a single fraction.

```
common denominator (x + 2)(x − 1)

[3(x − 1) − 2(x + 2)] / [(x + 2)(x − 1)]
= (3x − 3 − 2x − 4) / [(x + 2)(x − 1)]
= (x − 7) / [(x + 2)(x − 1)]
```

Leave the denominator factorised. It is simpler, and it shows at once that nothing cancels with x − 7.

**Worked example.** Write x/(x + 1) + 2/(x − 3) as a single fraction.

```
[x(x − 3) + 2(x + 1)] / [(x + 1)(x − 3)]
= (x² − 3x + 2x + 2) / [(x + 1)(x − 3)]
= (x² − x + 2) / [(x + 1)(x − 3)]
```

The numerator x² − x + 2 does not factorise, so this is fully simplified.

### When one denominator is a factor of another

Factorise every denominator first. The lowest common denominator may be smaller than the product.

**Worked example.** Simplify x/(x − 2) − (x + 4)/(x² − 4).

```
x² − 4 = (x − 2)(x + 2), so the common denominator is (x − 2)(x + 2)

x/(x − 2) = x(x + 2) / [(x − 2)(x + 2)]

[x(x + 2) − (x + 4)] / [(x − 2)(x + 2)]
= (x² + 2x − x − 4) / [(x − 2)(x + 2)]
= (x² + x − 4) / [(x − 2)(x + 2)]
```

## 3. Multiplying and dividing

To multiply, multiply numerators together and denominators together. To divide, multiply by the reciprocal of the second fraction. In both cases, factorise and cancel **before** multiplying out, so the numbers stay small.

**Worked example.** Simplify (4a²/15b) ÷ (2a/5b²).

```
= 4a²/15b × 5b²/2a
= (4a² × 5b²) / (15b × 2a)
= 20a²b² / 30ab
= 2ab/3
```

Cancelling first is quicker: 4 with 2 leaves 2; 5 with 15 leaves 3; a² with a leaves a; b² with b leaves b.

**Worked example.** Simplify (x + 2)/(x² − 9) × (x − 3)/(x² + 2x).

```
x² − 9  = (x − 3)(x + 3)
x² + 2x = x(x + 2)

(x + 2) / [(x − 3)(x + 3)] × (x − 3) / [x(x + 2)]

cancel (x + 2) and (x − 3):
= 1 / [x(x + 3)]
```

When every factor in a numerator cancels, a 1 remains. Do not write 0.

## 4. Simplifying rational expressions

Factorise the numerator and denominator completely, then cancel common factors.

**Worked example.** Simplify (x² + 3x − 10)/(2x² − 8).

```
numerator:   x² + 3x − 10 = (x + 5)(x − 2)
denominator: 2x² − 8 = 2(x² − 4) = 2(x − 2)(x + 2)

= (x + 5)(x − 2) / [2(x − 2)(x + 2)]
= (x + 5) / [2(x + 2)]
```

The denominator needed two steps: the common factor 2, then the difference of two squares.

### Factors that differ only in sign

(2 − x) and (x − 2) are not the same, but 2 − x = −(x − 2). Taking out −1 reveals the common factor.

**Worked example.** Simplify (6 − 3x)/(x² − 4).

```
6 − 3x = 3(2 − x) = −3(x − 2)
x² − 4 = (x − 2)(x + 2)

= −3(x − 2) / [(x − 2)(x + 2)]
= −3 / (x + 2)
```

Missing the sign gives 3/(x + 2), which loses the accuracy mark.

**Worked example.** Simplify (2x² + 5x − 3)/(4x² − 1).

```
2x² + 5x − 3: ac = −6, sum 5 → 6 and −1
= 2x² + 6x − x − 3 = 2x(x + 3) − (x + 3) = (2x − 1)(x + 3)

4x² − 1 = (2x − 1)(2x + 1)

= (x + 3) / (2x + 1)
```

## Exam technique

- "Write as a single fraction" means one numerator over one denominator; simplify the numerator fully.
- "Simplify" for a rational expression means factorise and cancel until no common factor remains.
- Show the line with the common denominator and the bracketed numerators. A method mark is usually linked to it.
- Check an answer by substituting a simple value, such as x = 1, into the original and your final form. Avoid values that make a denominator zero.

**Check of the first example:** with x = 1, (2 + 1)/4 − (1 − 3)/6 = 3/4 + 1/3 = 13/12, and (4 + 9)/12 = 13/12. ✓

## Common mistakes

- Cancelling terms: (x + 6)/(x + 2) ≠ 6/2 = 3.
- Losing the sign of the second numerator when subtracting: −2(x − 3) written as −2x − 6.
- Adding fractions by adding numerators and denominators: a/b + c/d ≠ (a + c)/(b + d).
- Not factorising x² − 4 first, and so using a larger common denominator than needed.
- Missing that (2 − x) = −(x − 2).
- Turning the first fraction upside down when dividing, instead of the second.
- Multiplying out the denominator, which hides factors that could cancel.

## Where this leads

The same steps are used to solve fractional equations in [Indices and Equations](/resources/indices-and-equations/), where you multiply through by the common denominator. For the factorising forms themselves, see the [algebraic manipulation study guide](/resources/cambridge-o-level-mathematics-4024-algebraic-manipulation/).
