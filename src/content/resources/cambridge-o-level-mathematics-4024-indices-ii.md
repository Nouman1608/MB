---
title: "Cambridge O Level Mathematics (4024): Indices II"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.4
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "indices-ii"
description: "Cambridge O Level Maths 4024 subtopic 2.4 in depth: zero, negative and fractional indices, the index rules, simplifying and solving equations with powers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.4 Indices II** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The combined [Indices and Equations study guide](/resources/indices-and-equations/) states the rules and solves the syllabus's two example equations. This page explains why each rule works, evaluates harder numerical powers without a calculator, and solves a wider range of equations by matching bases.

Companion pages: the [Indices II revision notes](/resources/cambridge-o-level-mathematics-4024-indices-ii-revision-notes/) and the [Indices II practice questions](/resources/cambridge-o-level-mathematics-4024-indices-ii-practice/).

## What the syllabus asks

The 4024 syllabus lists two outcomes for 2.4:

1. Understand and use indices (positive, zero, negative and fractional).
2. Understand and use the rules of indices.

Its examples include solving equations such as 32^x = 2 and 5^(x+1) = 25^x, and simplifying products, quotients and powers of terms with indices. It also states that knowledge of logarithms is **not** required, so every index equation in 4024 can be solved by writing both sides as powers of the same base.

The "II" in the title is because Topic 1 (Number) has its own indices subtopic for numerical work; 2.4 extends this to algebra.

## The rules and why they work

For any base a (not zero) and any indices m and n:

```
a^m × a^n = a^(m + n)
a^m ÷ a^n = a^(m − n)
(a^m)^n   = a^(mn)
a^0       = 1
a^(−n)    = 1 / a^n
a^(1/n)   = ⁿ√a
a^(m/n)   = (ⁿ√a)^m
```

The first rule comes from counting factors: a³ × a² = (a × a × a)(a × a) = a⁵. The others follow from it.

- **Zero index.** a³ ÷ a³ = 1, but the division rule gives a^(3 − 3) = a⁰. So a⁰ = 1.
- **Negative index.** a² ÷ a⁵ = 1/a³, and the rule gives a^(2 − 5) = a^(−3). So a^(−3) = 1/a³. A negative index means "reciprocal"; it does not make the value negative.
- **Fractional index.** a^(1/2) × a^(1/2) = a¹ = a, so a^(1/2) is the number that multiplied by itself gives a: the square root. Similarly a^(1/3) is the cube root.
- **General fraction.** a^(m/n) = (a^(1/n))^m, so take the root first, then the power. Rooting first keeps numbers small.

## Evaluating numerical powers without a calculator

Deal with each part of the index in turn: the denominator is a root, the numerator is a power, and a minus sign is a reciprocal.

**Worked example.** Find the value of 27^(−2/3).

```
cube root of 27 = 3
3² = 9
negative index → reciprocal
27^(−2/3) = 1/9
```

**Worked example.** Find the value of (16/81)^(−3/4).

```
negative index: turn the fraction over → (81/16)^(3/4)
fourth root:    ⁴√81 = 3,  ⁴√16 = 2  → 3/2
cube:           (3/2)³ = 27/8
```

**More values to check yourself:**

```
8^(2/3)     = (∛8)²   = 2²  = 4
32^(−3/5)   = 1/(⁵√32)³ = 1/2³ = 1/8
(1/4)^(−1/2) = 4^(1/2) = 2
64^(−5/6)   = 1/(⁶√64)⁵ = 1/2⁵ = 1/32
(4/9)^(3/2) = (2/3)³ = 8/27
```

## Simplifying algebraic expressions

Deal with the numbers and each letter separately. Numbers multiply as normal; indices of the same letter combine using the rules.

**Worked example.** Simplify 4x^(−3) × (3/2)x^(1/2).

```
numbers:  4 × 3/2 = 6
x terms:  x^(−3 + 1/2) = x^(−5/2)
answer:   6x^(−5/2)   (or 6 / x^(5/2))
```

**Worked example.** Simplify 12x^(1/2) ÷ 3x^(−2).

```
numbers:  12 ÷ 3 = 4
x terms:  x^(1/2 − (−2)) = x^(5/2)
answer:   4x^(5/2)
```

Subtracting a negative index is where most errors happen: 1/2 − (−2) = 1/2 + 2 = 5/2.

**Worked example.** Simplify (27x⁶)^(1/3).

```
the power applies to both the number and the letter
27^(1/3) = 3,   (x⁶)^(1/3) = x²
answer:   3x²
```

**Worked example.** Simplify ((2/3)x²)^(−3).

```
negative power → reciprocal: (3/(2x²))³
= 27 / (8x⁶)
```

## Writing expressions in the form kxⁿ

Questions often ask for an expression in the form kxⁿ, which is needed later when working with graphs of functions such as y = ax^n. Rewrite roots as fractional indices and move powers of x from the denominator by making the index negative.

**Worked example.** Write 6/∛x in the form kxⁿ.

```
∛x = x^(1/3)
6/x^(1/3) = 6x^(−1/3)
k = 6, n = −1/3
```

**Worked example.** Write (2√x)/(8x²) in the form kxⁿ.

```
numbers:  2/8 = 1/4
x terms:  x^(1/2) ÷ x² = x^(1/2 − 2) = x^(−3/2)
answer:   (1/4)x^(−3/2)
```

A number in the denominator stays as a fraction coefficient: 5/(2x³) = (5/2)x^(−3), not 5 × 2x^(−3).

## When the unknown is the base

Sometimes the letter is raised to a known fractional power. Undo the index by raising both sides to its reciprocal.

**Worked example.** Solve x^(2/3) = 9, where x > 0.

```
raise both sides to the power 3/2:
x = 9^(3/2) = (√9)³ = 3³ = 27
```

Check: 27^(2/3) = (∛27)² = 3² = 9. ✓

## Solving equations with unknown indices

Write both sides as powers of the same base, then set the indices equal.

**Worked example.** Solve 4^x = 8^(x − 1).

```
4 = 2², 8 = 2³
(2²)^x = (2³)^(x − 1)
2^(2x) = 2^(3x − 3)
2x = 3x − 3
x = 3
```

**Worked example.** Solve 9^x = 1/27.

```
9 = 3², 1/27 = 3^(−3)
3^(2x) = 3^(−3)
2x = −3
x = −3/2
```

**Worked example.** Solve 3^(2x + 1) = 27^(x − 1).

```
3^(2x + 1) = 3^(3x − 3)
2x + 1 = 3x − 3
x = 4
```

**Worked example.** Solve 16^x = 1/2.

```
16 = 2⁴, 1/2 = 2^(−1)
2^(4x) = 2^(−1)
x = −1/4
```

Check each answer by substituting it back. For the last one: 16^(−1/4) = 1/⁴√16 = 1/2. ✓

### Choosing the base

Pick the smallest base that both numbers are powers of: 2 for 4, 8, 16, 32, 64; 3 for 9, 27, 81; 5 for 25, 125; 10 for 100, 1000. For 100^x = 1000, base 10 gives 10^(2x) = 10³, so x = 3/2.

## Exam technique

- **Find the value of** or **Work out** a numerical power on Paper 1: show the root and power steps. A final answer of 1/9 with no working may still score, but a wrong one with no working scores nothing.
- **Simplify**: the answer should have each letter once, with one index. Either a negative index or a fraction form is normally accepted unless the question asks for a particular form.
- **Solve**: show the line with the matching bases, such as 2^(2x) = 2^(3x − 3); that line usually earns the method mark.
- **Write in the form** kx^n: give k and n exactly, as fractions if needed.

## Common mistakes

- Thinking a negative index gives a negative number: 2^(−3) = 1/8, not −8.
- Applying a power to the letter only: (3x²)³ = 27x⁶, not 3x⁶.
- Multiplying indices when multiplying terms: x² × x³ = x⁵, not x⁶.
- Writing a⁰ = 0. Any non-zero number to the power 0 is 1.
- Squaring before rooting with a large base, making the arithmetic much harder.
- Setting indices equal before the bases match: 4^x = 8 does not give x = 8/4.
- Forgetting the reciprocal step with a negative fractional index.

## Where this leads

Index rules are used again in the graphs of functions in subtopic 2.10, where equations of the form y = ax^n include negative and fractional powers, and for exponential growth and decay. For solving other equation types, see the [equations study guide](/resources/cambridge-o-level-mathematics-4024-equations/).
