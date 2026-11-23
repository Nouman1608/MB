---
title: "AQA A-Level Mathematics (7357): Laws of indices for rational exponents -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.01
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b1-laws-of-indices-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 B1 notes: rational index meanings, kxⁿ form, factorising fractional powers, index equations and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense content statement **B1** of AQA A-level Mathematics (7357), Section B: Algebra and functions: "Understand and use the laws of indices for all rational exponents." They focus on the harder uses of B1. For explanations and worked examples, read the [B1 study guide](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices/); to test yourself under exam conditions, use the [B1 practice questions](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices-practice/). The standard law table also appears in the [rational indices and surds revision notes](/resources/aqa-a-level-mathematics-rational-indices-and-surds-revision-notes/).

## Core recall

For a > 0 and rational m and n:

```
aᵐ × aⁿ = aᵐ⁺ⁿ        aᵐ ÷ aⁿ = aᵐ⁻ⁿ        (aᵐ)ⁿ = aᵐⁿ
a⁰ = 1                a⁻ⁿ = 1/aⁿ
a^(1/n) = ⁿ√a         a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)
(ab)ⁿ = aⁿbⁿ          (a/b)ⁿ = aⁿ/bⁿ
```

**Where each meaning comes from.** a⁰ = 1 because aⁿ ÷ aⁿ = 1. a⁻ⁿ = 1/aⁿ because aⁿ × a⁻ⁿ = a⁰. a^(1/2) = √a because a^(1/2) × a^(1/2) = a. Being able to say this is part of "understand".

**Why a > 0.** With a negative base, equal fractions can give different values: (−8)^(1/3) = −2 but ⁶√((−8)²) = 2. Writing √x as x^(1/2) assumes x ≥ 0.

## Key terms

| Term | Meaning |
|---|---|
| Base | The number or expression being raised to a power, such as x in x^(3/2) |
| Index (exponent) | The power; a rational index has the form p/q |
| Rational exponent | An index that is a fraction p/q with integers p and q, q ≠ 0 |
| Reciprocal | 1 divided by the quantity; produced by a negative index |
| Principal root | The non-negative value of an even root, so √9 = 3, not ±3 |
| Coefficient | The number multiplying a power, such as 5/2 in (5/2)x^(5/2) |
| kxⁿ form | A single power of x with a numerical coefficient, needed for calculus |

## Method: writing an expression as a sum of powers

1. Replace every root by a fractional index: √x = x^(1/2), ³√(x²) = x^(2/3).
2. Split a fraction over its denominator, one term at a time.
3. Divide the coefficients as numbers; subtract the indices of x.
4. Leave the coefficient alone when you move a power of x: 7/(2x⁴) = (7/2)x⁻⁴.

*Reminder.* (6x² + √x)/(3x) = 2x + (1/3)x^(−1/2).

*Reminder.* (2x)⁻³ = 1/(8x³) = (1/8)x⁻³, while 2x⁻³ = 2/x³.

## Method: factorising with fractional or negative powers

1. Find the **lowest** power of the common base.
2. Take it out; divide each term by it by subtracting indices.
3. Simplify the bracket.

*Reminder.* x^(5/2) − 4x^(1/2) = x^(1/2)(x² − 4) = x^(1/2)(x − 2)(x + 2).

*Reminder.* 3x⁻² + x⁻³ = x⁻³(3x + 1). The lowest power is −3, not −2.

## Method: solving equations

| Equation type | Method | Watch for |
|---|---|---|
| Unknown in the index, same base possible | Write both sides as powers of one base; equate indices | Recognise 36 = 6², 216 = 6³, 0.04 = 5⁻² |
| Unknown in the index, mixed bases | Combine with aⁿbⁿ = (ab)ⁿ | 2ˣ × 5ˣ = 10ˣ |
| Unknown base, one fractional power | Raise to the reciprocal power | x > 0 for even roots |
| Terms in x^(1/3) and x^(2/3), or x^(1/2) and x | Let u = the smaller power; solve the quadratic | Cube roots allow u < 0; square roots do not |
| Same power on both sides with a factor | Bring to one side and factorise | Never divide by a power of x that could be 0 |

## Comparing sizes

Raise both numbers to the lowest common multiple of the root orders. For ⁴√5 and √3, raise to the power 4: 5 against 9, so √3 is larger. State that both numbers are positive, so the order is kept.

## Exam traps

- Treating a sum like a product: (x² + 9)^(1/2) is not x + 3.
- Applying the power to the x but not the number: (16x⁴)^(3/4) = 8x³, not 16x³.
- Moving the coefficient with the x when it was outside the bracket.
- Subtracting indices like 3/4 − 1/3 without a common denominator (answer 5/12).
- Dividing both sides by x or x^(1/2) and losing the solution x = 0.
- Rejecting x = −8 from x^(1/3) = −2: it is valid.
- Keeping x^(1/2) = −3: no real solution, so reject it.
- Giving u instead of x after a substitution.
- Leaving k and n inside an expression when the question asks for their values.

## Quick self-test

Do these without a calculator, then check.

1. Explain why 5⁰ = 1, using a law of indices.
2. Evaluate (0.008)^(−2/3).
3. Write (3x − 2√x)/x² in the form Axᵖ + Bx^q.
4. Write 1/(4∛x) in the form kxⁿ.
5. Simplify (9x⁴y⁻²)^(−1/2), with positive indices.
6. Factorise x^(3/2) + 2x^(1/2).
7. Factorise (x − 3)^(5/2) − (x − 3)^(3/2).
8. Solve 2ˣ × 5ˣ = 0.001.
9. Solve x^(1/2) − 5x^(1/4) + 6 = 0.
10. Solve x^(5/3) = 4x^(2/3).
11. Which is larger, ³√4 or √(5/2)?
12. Given that √x × x^(p) = x², find p.

### Answers

1. 5³ ÷ 5³ = 5³⁻³ = 5⁰, and any non-zero number divided by itself is 1.
2. 0.008 = 1/125, so (1/125)^(−2/3) = 125^(2/3) = 5² = **25**.
3. 3x/x² − 2x^(1/2)/x² = **3x⁻¹ − 2x^(−3/2)**.
4. **(1/4)x^(−1/3)**.
5. 9^(−1/2)x⁻²y¹ = **y/(3x²)**.
6. **x^(1/2)(x + 2)**.
7. (x − 3)^(3/2)[(x − 3) − 1] = **(x − 3)^(3/2)(x − 4)**.
8. 10ˣ = 10⁻³, so **x = −3**.
9. Let u = x^(1/4): u² − 5u + 6 = 0, so u = 2 or 3. Then x = 2⁴ = **16** or x = 3⁴ = **81**.
10. x^(2/3)(x − 4) = 0, so **x = 0 or x = 4**.
11. Raise both to the power 6: (4^(1/3))⁶ = 16 and (5/2)³ = 125/8 = 15.625. Both are positive, so **³√4 is larger**.
12. 1/2 + p = 2, so **p = 3/2**.

## Links

Surds have their own [B2 surds revision notes](/resources/aqa-a-level-mathematics-7357-b2-surds-revision-notes/). Rewriting in kxⁿ form is used again throughout differentiation and integration, and index equations lead on to [exponentials and logarithms](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-revision-notes/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B1.
