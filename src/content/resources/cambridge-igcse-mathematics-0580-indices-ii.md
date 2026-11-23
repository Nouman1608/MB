---
title: "Cambridge IGCSE Mathematics (0580): Indices II"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.04
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "indices-ii-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.4 Indices II: rules of indices in algebra, the form ax^n, finding unknown powers and fractional indices, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.4 Indices II** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. Both tiers study it, with one difference: Core (C2.4) uses **positive, zero and negative** indices, and Extended (E2.4) adds **fractional** indices. The syllabus notes that knowledge of logarithms is **not** required.

| Statement | Core (C2.4) | Extended (E2.4) |
|---|---|---|
| 1 Understand and use indices | positive, zero and negative, e.g. solve 2ˣ = 32 | adds fractional, e.g. solve 32ˣ = 2 or 5ˣ⁺¹ = 25ˣ |
| 2 Understand and use the rules of indices | simplify expressions such as (5x³)² or 12a⁵ ÷ 3a⁻² | the same with fractional indices |

The rules themselves, with first examples, are set out in the [algebraic fractions and indices II guide](/resources/igcse-mathematics-0580-algebraic-fractions-and-indices-ii/). This page practises the skills exam questions combine: mixed operations in one expression, finding a missing index, rewriting expressions in the form axⁿ, and equations where the unknown is in the base rather than the index. Summarise with the [Indices II revision notes](/resources/cambridge-igcse-mathematics-0580-indices-ii-revision-notes/) and test yourself with the [Indices II practice questions](/resources/cambridge-igcse-mathematics-0580-indices-ii-practice/).

## The rules, compressed

```
x^m × x^n = x^(m+n)        x^m ÷ x^n = x^(m-n)        (x^m)^n = x^(mn)
(xy)^n = x^n y^n           x^0 = 1                     x^-n = 1/x^n
x^(1/n) = nth root of x    x^(m/n) = (nth root of x)^m           (Extended)
```

Numbers in front (coefficients) obey ordinary arithmetic; only the powers of the same letter combine using the rules.

## Mixed operations in one expression

### Worked example 1 (Core): brackets, then division

Simplify (2a³)⁴ ÷ (4a²)².

```
(2a^3)^4 = 2^4 × a^12 = 16a^12
(4a^2)^2 = 4^2 × a^4  = 16a^4
16a^12 ÷ 16a^4 = 1 × a^(12-4) = a^8
```

Deal with any bracket raised to a power first, coefficient included, then combine.

### Worked example 2 (Core): a fraction with two letters

Simplify 10x³y⁻² / (2x⁻¹y³).

```
Numbers:  10 ÷ 2 = 5
x:        3 - (-1) = 4
y:        -2 - 3 = -5
Answer:   5x^4 y^-5  =  5x^4 / y^5
```

Either form is accepted as simplified unless the question asks for positive indices only. If it does, any negative power moves to the other side of the fraction line and its index becomes positive.

## Finding a missing index

Questions often give the result and ask for one power. Write the rule as an equation in the index.

### Worked example 3 (Core)

Find n in each case: (a) x⁵ × xⁿ = x², (b) (x⁴)ⁿ = x⁻¹², (c) xⁿ ÷ x⁻³ = x.

```
(a) 5 + n = 2      ->  n = -3
(b) 4n = -12       ->  n = -3
(c) n - (-3) = 1   ->  n + 3 = 1  ->  n = -2
```

In (c), x on its own means x¹, so the right-hand index is 1, not 0.

## Equations with the unknown in the index

Write both sides as powers of one base, then equate the indices. The Core examples use whole numbers and their reciprocals; the Extended examples need a base that both numbers share.

### Worked example 4 (Core)

Solve (a) 3ˣ⁺² = 243, (b) 10ˣ = 0.001.

```
(a) 243 = 3^5, so x + 2 = 5  ->  x = 3
(b) 0.001 = 1/1000 = 10^-3, so x = -3
```

### Worked example 5 (Extended): different bases on each side

Solve 4ˣ × 2 = 8ˣ⁻¹.

```
4 = 2^2 and 8 = 2^3
(2^2)^x × 2^1 = (2^3)^(x-1)
2^(2x+1) = 2^(3x-3)
2x + 1 = 3x - 3  ->  x = 4
```

Check: 4⁴ × 2 = 256 × 2 = 512, and 8³ = 512. The 2 on the left is 2¹, so its index adds to the 2x.

## Writing expressions in the form axⁿ (Extended)

Rewriting a term as a single power of x is the first step when you meet the Extended graphs of functions in subtopic 2.10, where the syllabus lists terms axⁿ with n = −2, −1, −½, 0, ½, 1, 2 or 3. It is worth practising on its own.

| Expression | As axⁿ | Reason |
|---|---|---|
| 3/x² | 3x⁻² | one over a power is a negative power |
| 1/(2x) | ½x⁻¹ | only the x is in the denominator's power; the 2 stays as ½ |
| √x | x^(1/2) | square root is the power ½ |
| 5/√x | 5x^(−1/2) | combine the two ideas |
| √(x³) | x^(3/2) | root of a power: divide the index by 2 |
| x²√x | x^(5/2) | x² × x^(1/2) = x^(2 + 1/2) |

The commonest error is 1/(2x) = 2x⁻¹. The power −1 applies to x only; the 2 is not raised to it, so it becomes ½.

## Fractional indices (Extended)

### Worked example 6: fractional and negative together

Simplify (8x⁶/27)^(−2/3), where x > 0.

```
Negative index: invert the fraction
(27/(8x^6))^(2/3)
27^(2/3) = (cube root 27)^2 = 3^2 = 9
8^(2/3)  = 2^2 = 4
(x^6)^(2/3) = x^4
Answer: 9/(4x^4)
```

### Worked example 7: expanding with fractional indices

Expand and simplify (x^(1/2) + x^(−1/2))².

```
(x^(1/2))^2           = x
2 × x^(1/2) × x^(-1/2) = 2x^0 = 2
(x^(-1/2))^2          = x^-1
Answer: x + 2 + x^-1
```

The middle term shows why index rules matter in expansion: the powers ½ and −½ add to 0, so the middle term is a number.

### Worked example 8: the unknown in the base

Solve (a) x^(3/2) = 8, (b) x⁻² = 1/9.

```
(a) Raise both sides to the power 2/3 (the reciprocal of 3/2):
    x = 8^(2/3) = 2^2 = 4

(b) x^-2 = 1/9 means 1/x^2 = 1/9, so x^2 = 9
    x = 3 or x = -3
```

In (b), both 3 and −3 work, because (−3)⁻² = 1/9. In (a), only the positive root is taken, because x^(3/2) involves √x.

## Common mistakes

- Multiplying indices instead of adding them when multiplying terms: a³ × a⁴ = a⁷.
- Not raising the coefficient: (4a²)² = 16a⁴, not 4a⁴.
- Treating x as x⁰ in a missing-index question.
- Rewriting 1/(2x) as 2x⁻¹ instead of ½x⁻¹.
- Equating indices before the bases match, for example writing 2x = x − 1 from 4ˣ = 8ˣ⁻¹.
- Reading x^(2/3) as square root then cube. The denominator is the root.

## Exam technique

- **"Simplify"**: one coefficient and one power of each letter. Positive or negative indices are both accepted unless the question says otherwise.
- **"Find the value of n"**: set up the index equation and show it; a correct n with no working can lose method credit if it is wrong.
- **"Solve"** an index equation: write the common-base form as a line of working, then equate.
- On Papers 1 and 2 (no calculator), know powers of 2 up to 2¹⁰, powers of 3 up to 3⁵, and powers of 5 up to 5⁴.

## Next steps

- [Indices II revision notes](/resources/cambridge-igcse-mathematics-0580-indices-ii-revision-notes/) for condensed recall and a self-test.
- [Indices II practice questions](/resources/cambridge-igcse-mathematics-0580-indices-ii-practice/) with marked answers.
- Number-only indices are in the [powers, roots and indices guide](/resources/igcse-mathematics-0580-powers-roots-and-indices/).
- Indices in action: [graphs of functions study guide](/resources/cambridge-igcse-mathematics-0580-graphs-of-functions/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.4 and E2.4 Indices II.
