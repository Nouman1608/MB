---
title: "OCR GCSE Mathematics: Number Operations and Integers — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Number operations and integers"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "For first assessment 2017"
order: 1
syllabusTopics:
  - qualification: "gcse"
    topic: "number-operations-and-integers-ocr-gcse-maths"
description: "Condensed recall notes on integers, primes, HCF and LCM, fractions, percentages, indices, standard form and bounds for OCR GCSE Mathematics J560."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Number Operations and Integers study guide](/resources/ocr-gcse-mathematics-number-operations-and-integers/).

## Integers and primes

**BIDMAS** — Brackets, Indices, Division and Multiplication, Addition and Subtraction. Division and multiplication rank equally and are worked left to right, as do addition and subtraction.

Primes have exactly **two** factors, so **1 is not prime** and **2 is the only even prime**.

**Prime factorisation** gives HCF and LCM:

- **HCF** — product of the **lowest** power of each **common** prime.
- **LCM** — product of the **highest** power of **every** prime present.

**Negative numbers:** two like signs multiply or divide to give a positive; two unlike signs give a negative.

**Useful check:** HCF × LCM = the product of the two original numbers.

**Worked example.** Two bells ring at intervals of 84 s and 120 s, together at 09:00. When do they next ring together?

This is an **LCM** problem, not HCF — the bells coincide on a common multiple.

```
84  = 2^2 x 3 x 7
120 = 2^3 x 3 x 5
LCM = 2^3 x 3 x 5 x 7 = 840 s = 14 minutes -> 09:14
```

Choosing between HCF and LCM is the real difficulty: **LCM** answers "when do things next coincide", **HCF** answers "what is the largest equal group I can make".

## Fractions

Multiply across; divide by **multiplying by the reciprocal**; add and subtract with a common denominator. Convert mixed numbers to improper fractions **before** multiplying or dividing.

**Recurring decimals to fractions:** let x equal the decimal, multiply by a power of 10 so the recurring part aligns, subtract, and solve.

## Percentages

```
increase by 30%:  x 1.3        decrease by 30%:  x 0.7
percentage change = (change / ORIGINAL) x 100
reverse percentage: DIVIDE by the multiplier
compound growth: P x (multiplier)^n
```

**The two errors that dominate:**

1. Dividing by the **new** value instead of the original in percentage change.
2. **Subtracting** rather than dividing in reverse percentages. A price of £78 after a 30% rise was £78 ÷ 1.3 = £60, **not** £78 × 0.7 = £54.60.

Note also that a 30% rise followed by a 30% fall does **not** return to the start: 1.3 × 0.7 = 0.91, a 9% net loss.

**Estimating** by rounding every value to 1 significant figure before calculating is a quick way to sanity-check whether a final answer is plausible.

## Ratio

Divide by the **total number of parts**, then multiply. Read carefully whether the question gives the total, one share, or the **difference** between shares — which is given determines how you find the value of one part.

## Indices and standard form

```
a^m x a^n = a^(m+n)     a^m / a^n = a^(m-n)     (a^m)^n = a^(mn)
a^0 = 1                 a^-n = 1/a^n            a^(m/n) = (n-th root)^m
```

**A negative index means reciprocal, not a negative answer:** 3⁻² = 1/9. For a negative fractional index, **flip first**: (9/16)^(−1/2) = (16/9)^(1/2) = 4/3.

```
standard form:  A x 10^n     with  1 <= A < 10
```

After multiplying or dividing, **re-check that A lies between 1 and 10** and adjust the power.

## Surds

```
sqrt(a) x sqrt(b) = sqrt(ab)        sqrt(72) = 6 sqrt(2)
```

Rationalise by the surd, or by the **conjugate** for two terms.

`√a + √b ≠ √(a+b)` — check with √9 + √16 = 7, not √25 = 5.

## Bounds

For a value rounded to the nearest unit u, bounds are **± u/2**.

| Want | Add | Subtract | Multiply | Divide |
|---|---|---|---|---|
| **Maximum** | UB + UB | UB − **LB** | UB × UB | UB ÷ **LB** |
| **Minimum** | LB + LB | LB − **UB** | LB × LB | LB ÷ **UB** |

**Subtraction and division cross over.** That single fact is most of the topic.

## Error intervals

A value rounded to a given precision could have come from a range either side of it — a length recorded as 6.3 cm to 1 decimal place satisfies **6.25 ≤ length < 6.35**. The lower bound uses ≤ and the upper uses <, because 6.35 would itself round up to 6.4.

## Exam traps

- Treating 1 as prime.
- Working left to right instead of applying BIDMAS.
- Dividing by the new value in percentage change.
- Subtracting instead of dividing in reverse percentages.
- Reading a negative index as a negative answer.
- Using UB ÷ UB for a maximum quotient.
- Rounding partway through.

## Self-test

1. Find the HCF and LCM of 48 and 72 by prime factorisation.
2. A price is £78 after a 30% increase. What was it before?
3. Evaluate `(9/16)^(−1/2)`.
4. Rationalise `3/(4 + √2)`.
5. How do you find the maximum value of `a − b` from bounds?
6. Two bells ring at intervals of 84 s and 120 s, together at 09:00. When do they next ring together?
7. Write the error interval for a length recorded as 6.3 cm to 1 decimal place.

**Answers:** 1. 48 = 2⁴×3, 72 = 2³×3²; HCF = 2³×3 = 24, LCM = 2⁴×3² = 144. 2. 78 ÷ 1.3 = £60. 3. Flip to (16/9)^(1/2) = 4/3. 4. Multiply top and bottom by (4 − √2) to get 3(4 − √2)/14. 5. Upper bound of a minus the **lower** bound of b. 6. LCM of 84 and 120 = 2³×3×5×7 = 840 s = 14 minutes, so 09:14. 7. 6.25 ≤ length < 6.35.
