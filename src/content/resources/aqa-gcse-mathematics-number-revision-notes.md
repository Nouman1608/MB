---
title: "AQA GCSE Mathematics: Number — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Number"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 1
syllabusTopics:
  - qualification: "gcse"
    topic: "number-aqa-gcse-maths"
description: "Condensed recall notes on indices, surds, standard form, fractions, percentages and bounds for AQA GCSE Mathematics 8300."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Number study guide](/resources/aqa-gcse-mathematics-number/).

## Index laws

```
a^m x a^n = a^(m+n)         a^m / a^n = a^(m-n)         (a^m)^n = a^(mn)
a^0 = 1                     a^-n = 1 / a^n              a^(1/n) = nth root of a
a^(m/n) = (nth root of a)^m
```

For a fractional index, **take the root first, then the power** — the numbers stay small.

```
8^(2/3) = (cube root of 8)^2 = 2^2 = 4
```

A **negative** index means reciprocal, not a negative answer: `2⁻³ = 1/8`, never −8. And for a negative fractional index, **flip first, then apply**: `(4/9)^(−1/2) = (9/4)^(1/2) = 3/2`.

## Surds

```
sqrt(a) x sqrt(b) = sqrt(ab)        sqrt(a) / sqrt(b) = sqrt(a/b)
```

**Simplify** by extracting the largest square factor: `√50 = √25 × √2 = 5√2`.

**Rationalising the denominator:**

```
single term:   3/sqrt(2)  ->  multiply top and bottom by sqrt(2)   =  3 sqrt(2) / 2

two terms:     1/(3 + sqrt(2))  ->  multiply by the CONJUGATE (3 - sqrt(2))
               = (3 - sqrt(2)) / (9 - 2) = (3 - sqrt(2)) / 7
```

The conjugate works because `(a + √b)(a − √b) = a² − b`, which contains no surd.

`√a + √b ≠ √(a+b)` — check with √9 + √16 = 7, not √25 = 5.

## Standard form

```
A x 10^n        where  1 <= A < 10
```

Multiplying and dividing: handle the numbers and the powers separately, then **re-adjust** if A falls outside the range. `40 × 10⁵` must become `4 × 10⁶`.

## Percentages

```
increase by 15%:   x 1.15          decrease by 15%:   x 0.85
reverse percentage: DIVIDE by the multiplier
compound interest:  P x (multiplier)^n
```

**Reverse percentage is the most commonly failed question.** If a price is £69 after a 15% increase, the original is 69 ÷ 1.15 = £60 — **not** 69 × 0.85, which gives £58.65. Divide, never subtract.

A 15% rise followed by a 15% fall does **not** return you to the start: 1.15 × 0.85 = 0.9775, a 2.25% net loss.

## Fractions

Multiply: multiply across. Divide: **multiply by the reciprocal** of the second fraction. Add and subtract: common denominator first. Always convert mixed numbers to improper fractions before multiplying or dividing.

## Bounds

For a value rounded to the nearest unit u, add and subtract **u/2**.

```
length 24 cm to nearest cm:   23.5 <= L < 24.5
```

Combining bounds — the rule that decides the marks:

| Operation | For the **maximum** | For the **minimum** |
|---|---|---|
| Add | UB + UB | LB + LB |
| Subtract | UB − **LB** | LB − **UB** |
| Multiply | UB × UB | LB × LB |
| Divide | UB ÷ **LB** | LB ÷ **UB** |

**Subtraction and division cross over.** That is the entire difficulty of the topic.

## HCF and LCM

Use prime factorisation. HCF = product of the **lowest** power of each common prime. LCM = product of the **highest** power of every prime appearing.

**Worked example.** Find the HCF and LCM of 60 and 72.

```
60 = 2^2 x 3 x 5
72 = 2^3 x 3^2

HCF = lowest power of each shared prime = 2^2 x 3 = 12
LCM = highest power of every prime present = 2^3 x 3^2 x 5 = 360
```

## Reverse percentage for a decrease

A jacket costs £68 after a 15% **reduction**. The sale price is 85% of the original, so the multiplier is 0.85: original = 68 ÷ 0.85 = **£80**. Check by working forwards: 80 × 0.85 = 68.

The trap here is finding 15% of £68 and adding it on — that gives £78.20, which is wrong, because the percentage applies to the **original** price, not the sale price. **Estimating** by rounding each value to 1 significant figure before a calculation is also useful for sanity-checking whether an answer is plausible.

## Exam traps

- Reading a negative index as a negative answer.
- Subtracting a percentage instead of dividing in reverse-percentage problems.
- Assuming an increase then an equal decrease cancels out.
- Using UB ÷ UB for a maximum quotient.
- Writing `√a + √b = √(a+b)`.
- Leaving a surd in the denominator when an exact answer is required.

## Self-test

1. Evaluate `8^(2/3)` and `(4/9)^(−1/2)`.
2. Rationalise `1/(3 + √2)`.
3. A price is £69 after a 15% increase. What was it before?
4. Give the bounds for a length of 24 cm measured to the nearest cm.
5. How do you find the maximum value of `a ÷ b` from bounds?
6. A jacket costs £68 after a 15% reduction. Find the original price, and explain the common error to avoid.
7. Find the HCF and LCM of 60 and 72 using prime factorisation.

**Answers:** 1. 4; and 3/2. 2. Multiply top and bottom by (3 − √2) to get (3 − √2)/7. 3. 69 ÷ 1.15 = £60. 4. 23.5 ≤ L < 24.5. 5. Upper bound of a divided by the **lower** bound of b. 6. £80, since the multiplier for an 85% sale price is 0.85 and 68 ÷ 0.85 = £80; the common error is finding 15% of £68 and adding it on, which wrongly applies the percentage to the sale price rather than the original. 7. 60 = 2² × 3 × 5 and 72 = 2³ × 3², so HCF = 2² × 3 = 12 and LCM = 2³ × 3² × 5 = 360.
