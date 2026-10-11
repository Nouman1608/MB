---
title: "AQA A-level Mathematics: Rational Indices and Surds (7357)"
seoTitle: "AQA A-Level Maths Rational Indices and Surds Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Rational Indices and Surds"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b1-laws-of-indices-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b2-surds-aqa-alevel-maths"
description: "A study guide to laws of indices, rational exponents and surds for AQA A-level Mathematics, with fully worked examples on rationalising denominators."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide teaches content references **B1** and **B2** from section 3.3 **B: Algebra and functions** of the AQA A-level Mathematics (7357) specification (version 1.3, dated 31 January 2018), which applies to A-level exams from June 2018. B1 is the laws of indices for all rational exponents. B2 is using and manipulating surds, including rationalising the denominator. 7357 is a linear A-level with no AS/A split. Section B is listed in the Paper 1 content, and Papers 2 and 3 can each assess any Paper 1 content, so these skills can turn up anywhere.

Use this page with the [Rational indices and surds revision notes](/resources/aqa-a-level-mathematics-rational-indices-and-surds-revision-notes/) and the [practice questions](/resources/aqa-a-level-mathematics-rational-indices-and-surds-practice/). For the whole course, see the [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/). If you are unsure where to start, try the [free 10-minute diagnostics](/diagnostics/) first. These ideas feed straight into [quadratics and inequalities](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/) and [exponentials and logarithms](/resources/aqa-a-level-mathematics-exponentials-and-logarithms/).

## What this unit covers

| Reference | What you must be able to do |
|---|---|
| B1 | Use the laws of indices with positive, negative, zero and fractional exponents |
| B1 | Simplify expressions containing powers of numbers and of letters |
| B1 | Solve equations where the unknown is in the index, or where the unknown has a fractional index |
| B2 | Simplify surds and combine them by adding, subtracting, multiplying and dividing |
| B2 | Rationalise a denominator of the form k/√a |
| B2 | Rationalise a denominator of the form k/(a + √b) using the conjugate |

The specification states B1 and B2 as short single statements. Everything below is the working you need in order to meet them with confidence. You should be able to state and use each law of indices without looking it up.

## B1: the laws of indices

For a > 0 and any rational numbers m and n:

| Law | In words |
|---|---|
| aᵐ × aⁿ = aᵐ⁺ⁿ | Multiply powers of the same base: add the indices |
| aᵐ ÷ aⁿ = aᵐ⁻ⁿ | Divide powers of the same base: subtract the indices |
| (aᵐ)ⁿ = aᵐⁿ | A power of a power: multiply the indices |
| a⁰ = 1 | Raising a non-zero base to 0 gives 1 |
| a⁻ⁿ = 1/aⁿ | A negative index means reciprocal |
| a^(1/n) = ⁿ√a | A power of 1/n is the nth root |
| a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ) | Root first, then power |

Two further results follow from these: (ab)ⁿ = aⁿbⁿ and (a/b)ⁿ = aⁿ/bⁿ. The laws only combine powers that share a **base**. So 2³ × 3³ does not become 6⁶, and 2³ × 2³ is 2⁶, not 4⁶.

### Fractional and negative indices

For a number, work in this order: take the **root**, then the **power**, then the **reciprocal** if the index is negative. The root is easiest on the base, because the numbers stay small.

### Worked example 1: a fraction to a negative fractional power

**Evaluate (125/8)^(−4/3) without a calculator.**

```
(125/8)^(−4/3) = (8/125)^(4/3)        negative index: flip the fraction
               = (³√(8/125))⁴          root first
               = (2/5)⁴                ³√8 = 2 and ³√125 = 5
               = 16/625
```

**Answer: 16/625.**

### Worked example 2: simplifying with letters

**Simplify (16x⁸y⁻⁴)^(3/4) ÷ (2xy⁻¹), giving your answer with positive indices.**

Apply the power to each factor of the bracket.

```
16^(3/4) = (⁴√16)³ = 2³ = 8
(x⁸)^(3/4) = x⁶
(y⁻⁴)^(3/4) = y⁻³
```

So the bracket is 8x⁶y⁻³. Now divide by 2xy⁻¹.

```
8x⁶y⁻³ ÷ 2xy⁻¹ = 4 × x⁶⁻¹ × y⁻³⁻⁽⁻¹⁾ = 4x⁵y⁻²
```

**Answer: 4x⁵/y².**

### Solving index equations

There are two standard types.

1. **The unknown is in the index.** Rewrite each side using one common **base**, then set the indices equal.
2. **The unknown is the base and the index is fractional.** Raise both sides to the reciprocal of the index.

### Worked example 3: same base

**Solve 9^(x+1) = 27^(2x−1).**

Both bases are powers of 3.

```
9^(x+1)  = (3²)^(x+1)  = 3^(2x+2)
27^(2x−1) = (3³)^(2x−1) = 3^(6x−3)
```

Equate the indices: 2x + 2 = 6x − 3, so 4x = 5.

**Answer: x = 5/4.** Check: 9^(9/4) = 3^(9/2) and 27^(3/2) = 3^(9/2). ✓

### Worked example 4: unknown as the base

**Solve x^(3/2) = 216, where x > 0.**

Raise both sides to the power 2/3, which undoes the power 3/2:

```
x = 216^(2/3) = (³√216)² = 6² = 36
```

**Answer: x = 36.**

### Worked example 5: surds as indices

**Solve 2ˣ = 8√2.**

Write √2 as 2^(1/2) and 8 as 2³:

```
8√2 = 2³ × 2^(1/2) = 2^(7/2)
```

**Answer: x = 7/2.**

### Worked example 6: a quadratic hiding in the index

**Solve 3^(2x) − 12 × 3ˣ + 27 = 0.**

Since 3^(2x) = (3ˣ)², let y = 3ˣ. The equation becomes a quadratic in y.

```
y² − 12y + 27 = 0
(y − 3)(y − 9) = 0
y = 3 or y = 9
```

Now go back: 3ˣ = 3 gives x = 1, and 3ˣ = 9 gives x = 2.

**Answer: x = 1 or x = 2.** Always convert back. Stopping at y is a very common slip. Also check each value of y is positive, because 3ˣ can never be negative or zero. A value such as y = −2 would give no solution.

## B2: surds

A **surd** is a root that cannot be written as a fraction of integers, for example √2, √7 or 3√5. √16 is not a surd, because it equals 4. Surds are irrational numbers. Leaving an answer in surd form keeps it exact.

### The two rules

| Rule | Example |
|---|---|
| √(ab) = √a × √b | √72 = √36 × √2 = 6√2 |
| √(a/b) = √a / √b | √(5/9) = √5 / 3 |

Also (√a)² = a and √a × √a = a. There is no rule for a sum: √(a + b) is **not** √a + √b. For instance √(9 + 16) = 5, but √9 + √16 = 7.

### Simplifying and combining

To simplify √n, find the largest square number that divides n. To add or subtract surds, simplify each first, then collect those with the same surd, as with like terms.

### Worked example 7: collecting surds

**Simplify √50 + √98 − 3√8.**

```
√50 = √25 × √2 = 5√2
√98 = √49 × √2 = 7√2
3√8 = 3 × √4 × √2 = 6√2
```

So the sum is 5√2 + 7√2 − 6√2 = 6√2.

**Answer: 6√2.**

### Expanding brackets

Treat surds as you would algebraic terms, and use √a × √a = a.

(2 + 3√5)² = 4 + 12√5 + 9 × 5 = **49 + 12√5**.

Note that the answer contains a rational part and a surd part. This **a + b√c** form is the usual final shape.

## Rationalising the denominator

To rationalise means to remove the surd from the denominator. Multiply the top and bottom by the same quantity. That is multiplying by 1, so the value does not change.

### Simple form: k/√a

Multiply top and bottom by √a.

### Worked example 8: a simple denominator

**Rationalise 6/√12.**

You can multiply by √12 straight away, but it is quicker to simplify first.

```
6/√12 = 6/(2√3) = 3/√3
3/√3 × √3/√3 = 3√3/3 = √3
```

**Answer: √3.**

### Conjugate form: k/(a + √b)

The **conjugate** of a + √b is a − √b. Because (a + √b)(a − √b) = a² − b, the product is rational. This is the difference of two squares. Multiply top and bottom by the conjugate. The same idea works when the denominator is a − √b (use a + √b) or involves two surds such as √a + √b.

### Worked example 9: a binomial denominator

**Write (4 + √3)/(5 − 2√3) in the form p + q√3.**

The conjugate of 5 − 2√3 is 5 + 2√3.

```
Numerator:   (4 + √3)(5 + 2√3) = 20 + 8√3 + 5√3 + 2 × 3 = 26 + 13√3
Denominator: (5 − 2√3)(5 + 2√3) = 25 − 4 × 3 = 13
```

Divide: (26 + 13√3)/13 = 2 + √3.

**Answer: 2 + √3**, so p = 2 and q = 1.

### Worked example 10: adding two fractions

**Show that 1/(√7 − 2) + 1/(√7 + 2) = 2√7/3.**

Rationalise each fraction. The denominators multiply to 7 − 4 = 3.

```
1/(√7 − 2) = (√7 + 2)/3
1/(√7 + 2) = (√7 − 2)/3
```

Add: (√7 + 2 + √7 − 2)/3 = 2√7/3. ✓

You could also combine over a common denominator first. Here (√7 − 2)(√7 + 2) = 3, so the numerator is (√7 + 2) + (√7 − 2) = 2√7 and the denominator is 3. This route is shorter.

### Worked example 11: a length from an area

**A rectangle has area (11 + 5√5) cm² and width (3 + √5) cm. Find its length in the form a + b√5.**

Length = area ÷ width = (11 + 5√5)/(3 + √5). The conjugate is 3 − √5.

```
Numerator:   (11 + 5√5)(3 − √5) = 33 − 11√5 + 15√5 − 25 = 8 + 4√5
Denominator: (3 + √5)(3 − √5) = 9 − 5 = 4
```

Length = (8 + 4√5)/4 = 2 + √5.

**Answer: (2 + √5) cm.**

## Common errors

- Writing 2³ × 3² = 6⁵. The bases differ, so the indices cannot be added.
- Giving 8^(2/3) as 8^(2) ÷ 3, or as 16/3. The denominator of the index is a **root**: 8^(2/3) = (³√8)² = 4.
- Treating a negative index as a negative number. 2⁻³ is 1/8, not −8.
- Using √(a + b) = √a + √b.
- Multiplying by the conjugate on the bottom only. Whatever goes on the bottom must also go on the top.
- Getting the sign wrong in the conjugate. The conjugate of √7 − 2 is √7 + 2, not −√7 − 2.
- Stopping with a surd in the denominator. 2/√3 is not in final form, but 2√3/3 is.
- Solving a hidden quadratic in y = 3ˣ and then not converting back to x.

## Where this fits in the exam

Expect these skills in short questions that ask you to simplify, evaluate or solve, and as steps inside longer problems on quadratics, coordinate geometry, trigonometry and calculus. Show your working, particularly in a "show that" question, where the steps are the answer. When a question asks for an exact answer, give it as a surd or fraction.

Next, condense this into your own notes with the [revision notes](/resources/aqa-a-level-mathematics-rational-indices-and-surds-revision-notes/), then try the [practice questions](/resources/aqa-a-level-mathematics-rational-indices-and-surds-practice/).

## Official syllabus

AQA, *A-level Mathematics 7357*, specification (version 1.3, dated 31 January 2018), which applies to A-level exams from June 2018: section 3.3 B: Algebra and functions, content references B1 and B2.
