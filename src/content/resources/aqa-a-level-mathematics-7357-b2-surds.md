---
title: "AQA A-Level Mathematics (7357): Surds"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.02
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b2-surds-aqa-alevel-maths"
description: "AQA A-level Maths 7357 B2 in depth: comparing surds, equations with surd coefficients, two-surd denominators, equating parts and exact answers in context."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers one content statement from Section B (Algebra and functions) of AQA A-level Mathematics (7357): **B2, "Use and manipulate surds, including rationalising the denominator."** The short wording hides a wide range of question types. Surds appear in exact answers to quadratics, in Pythagoras and trigonometry, in coordinate geometry and in calculus, so fluent surd algebra saves time on every paper.

The basic rules (√(ab) = √a√b, simplifying √72, rationalising k/√a and k/(a + √b)) are taught in the [rational indices and surds study guide](/resources/aqa-a-level-mathematics-rational-indices-and-surds/). This page goes further: comparing surds, solving equations whose coefficients are surds, denominators with two surds, equating rational and irrational parts, and keeping answers exact in context. Recall the methods with the [B2 revision notes](/resources/aqa-a-level-mathematics-7357-b2-surds-revision-notes/) and practise with the [B2 practice questions](/resources/aqa-a-level-mathematics-7357-b2-surds-practice/).

## What "manipulate" includes

| Skill | Typical instruction |
|---|---|
| Simplify and collect | "Write in the form k√n" |
| Expand and multiply | "Expand and simplify", "Show that ... = a + b√c" |
| Rationalise | "Rationalise the denominator", "Write in the form p + q√3" |
| Solve | "Solve, giving your answer in the form a + b√c" |
| Compare | "Without a calculator, determine which is larger" |
| Use in context | "Find the exact length / area" |

The answer form is part of the question. If it says p + q√3 with integers p and q, an answer such as (6 + 3√3)/3 is not finished.

## Comparing surds without a calculator

Move every coefficient back inside the root, using k√n = √(k²n), and compare the numbers under the roots.

**Worked example 1.** Which is larger, 3√5 or 4√3?

```
3√5 = √(9 × 5) = √45
4√3 = √(16 × 3) = √48
```

Since 48 > 45, **4√3 is larger**. This also lets you order a list: 2√11 = √44 sits between them.

## Solving equations with surd coefficients

Treat each surd as a number. Collect the x terms, factorise out x, then divide, which usually leaves a surd in the denominator to rationalise.

**Worked example 2.** Solve x√3 + 4 = 2x + √3, giving x in the form a + b√3.

```
x√3 − 2x = √3 − 4                collect x terms on the left
x(√3 − 2) = √3 − 4               factorise
x = (√3 − 4)/(√3 − 2)
```

Multiply top and bottom by the conjugate √3 + 2:

```
Numerator:   (√3 − 4)(√3 + 2) = 3 + 2√3 − 4√3 − 8 = −5 − 2√3
Denominator: (√3 − 2)(√3 + 2) = 3 − 4 = −1
x = (−5 − 2√3)/(−1) = 5 + 2√3
```

**Answer: x = 5 + 2√3.** Check: x√3 + 4 = 5√3 + 6 + 4 = 10 + 5√3, and 2x + √3 = 10 + 4√3 + √3 = 10 + 5√3. A negative denominator is common here; divide carefully, because a sign slip changes both terms.

## Denominators with two surds

The conjugate idea still works: the conjugate of √a + √b is √a − √b, and their product is a − b.

**Worked example 3.** Simplify (√6 + √2)/(√6 − √2), giving your answer in the form p + √q.

```
Multiply top and bottom by (√6 + √2).
Numerator:   (√6 + √2)² = 6 + 2√12 + 2 = 8 + 4√3      (√12 = 2√3)
Denominator: (√6 − √2)(√6 + √2) = 6 − 2 = 4
Result: (8 + 4√3)/4 = 2 + √3
```

**Answer: 2 + √3.** Notice that the numerator became a square because it was already the conjugate of the denominator. Simplify every surd that appears in the working, such as √12, before the last step.

When one term has a coefficient, square the coefficient too: the conjugate of 2√3 − √2 is 2√3 + √2, and (2√3)² − (√2)² = 12 − 2 = 10.

## Equating rational and irrational parts

If a, b, c and d are rational and a + b√2 = c + d√2, then a = c and b = d. This holds because √2 is irrational: if b ≠ d, √2 would equal (c − a)/(b − d), a fraction. You can use this to find unknown integers.

**Worked example 4.** Find integers a and b such that (a + b√3)² = 28 − 10√3, and hence simplify √(28 − 10√3).

```
(a + b√3)² = a² + 2ab√3 + 3b²
Rational parts:   a² + 3b² = 28
Surd parts:       2ab = −10, so ab = −5
```

Try factor pairs of −5. a = 5, b = −1 gives 25 + 3 = 28. So (5 − √3)² = 28 − 10√3.

Since 5 − √3 is positive, **√(28 − 10√3) = 5 − √3**. The other pair, a = −5 and b = 1, gives −5 + √3, which is negative, so it cannot be a principal square root. Saying why you choose the positive one earns the final mark in a "show that".

## Exact answers from the quadratic formula

A discriminant that is not a perfect square leaves a surd. Simplify it, then cancel any common factor from **every** term.

**Worked example 5.** Solve 2x² − 4x − 1 = 0, giving exact answers in simplest form.

```
x = (4 ± √(16 + 8))/4 = (4 ± √24)/4
√24 = 2√6
x = (4 ± 2√6)/4 = (2 ± √6)/2
```

**Answer: x = (2 ± √6)/2**, which can also be written 1 ± (√6)/2. A common error is to cancel the 4 with the first 4 only, giving 1 ± 2√6.

A quick check uses the sum of roots: (2 + √6)/2 + (2 − √6)/2 = 2, and for ax² + bx + c = 0 the sum of the roots is −b/a = 4/2 = 2.

## Surds in context

**Worked example 6.** A rectangle has sides (2 + √3) cm and (2 − √3) cm. Find its exact area and the exact length of its diagonal.

```
Area = (2 + √3)(2 − √3) = 4 − 3 = 1 cm²
Diagonal² = (2 + √3)² + (2 − √3)²
          = (7 + 4√3) + (7 − 4√3) = 14
Diagonal = √14 cm
```

The surd terms cancel in both results. When a question uses conjugate lengths, expect simple answers, and treat an untidy result as a sign to check your expansion.

## Links with indices

Surds are powers with index 1/2, so B1 and B2 work together. √8 = 2^(3/2), and (√2)⁵ = 2^(5/2) = 2² × 2^(1/2) = 4√2. To solve 2ˣ = 4√2, write the right side as 2^(5/2), so x = 5/2. More on index methods is in the [B1 laws of indices guide](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices/).

## Common mistakes

- Adding unlike surds: √3 + √5 is not √8, and 2√3 + 3√2 cannot be combined.
- Squaring only the surd in k√n: (3√2)² = 18, not 6 or 9√2.
- Forgetting the middle term: (2 − √3)² = 7 − 4√3, not 4 − 3.
- Using the conjugate on the denominator only, which changes the value.
- Dividing by a negative denominator and changing the sign of only one term.
- Cancelling a common factor from one term of the numerator but not the other.
- Choosing a negative value for a principal square root.

## Exam technique for AQA command words

- **"Show that"**: start from the given expression and end on the printed form, writing each expansion in full.
- **"Exact"** or **"in surd form"**: a decimal from a calculator scores no accuracy mark, even if correct to many figures.
- **"Where a and b are integers"**: state a and b at the end, and check they really are integers.
- **"Hence"**: use the previous result, for example a simplified square root found in part (a).
- **"Without a calculator"**: write every comparison step, such as √45 against √48.

A calculator is allowed in AQA 7357 papers, but you can use it only to check surd work; the marks are for exact working.

## Where to go next

Use the [B2 revision notes](/resources/aqa-a-level-mathematics-7357-b2-surds-revision-notes/) for quick recall, then try the [B2 practice questions](/resources/aqa-a-level-mathematics-7357-b2-surds-practice/). Surds return in exact quadratic roots, covered in [quadratics and inequalities](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B2.
