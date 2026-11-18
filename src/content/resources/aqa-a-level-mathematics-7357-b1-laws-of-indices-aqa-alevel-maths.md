---
title: "AQA A-Level Mathematics (7357): Laws of indices for rational exponents"
resourceType: "study-guides"
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
description: "AQA A-level Maths 7357 B1 in depth: why rational indices work, writing terms as kxⁿ, factorising fractional powers and solving harder index equations."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one content statement from Section B (Algebra and functions) of the AQA A-level Mathematics (7357) specification: **B1, "Understand and use the laws of indices for all rational exponents."** The word *understand* matters. You are expected to know why the laws hold, not just to apply them, and B1 is used constantly in later work, especially differentiation and integration, where every term must be written as a power of x.

The basic table of laws and the standard evaluations (such as 32^(3/5)) are in the [rational indices and surds study guide](/resources/aqa-a-level-mathematics-rational-indices-and-surds/). This page builds on it with the skills that cost marks once questions get harder: the reasoning behind the laws, rewriting expressions as sums of powers, factorising fractional powers, solving equations in x^(1/3) or x^(1/2), and comparing sizes without a calculator. Recall the key points with the [B1 revision notes](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices-aqa-alevel-maths-revision-notes/) and test yourself with the [B1 practice questions](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices-aqa-alevel-maths-practice/).

## Why the laws work

Everything follows from one idea: for a positive whole number n, aⁿ means n copies of a multiplied together. Then aᵐ × aⁿ = aᵐ⁺ⁿ just counts factors. The other meanings are **chosen** so that this law keeps working.

| Meaning | Why it must be this |
|---|---|
| a⁰ = 1 | aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰, and any non-zero number divided by itself is 1 |
| a⁻ⁿ = 1/aⁿ | aⁿ × a⁻ⁿ = a⁰ = 1, so a⁻ⁿ is the reciprocal of aⁿ |
| a^(1/2) = √a | a^(1/2) × a^(1/2) = a¹ = a, so a^(1/2) squares to a |
| a^(1/n) = ⁿ√a | Multiplying n copies of a^(1/n) gives a¹ = a |
| a^(m/n) = (ⁿ√a)ᵐ | a^(m/n) = (a^(1/n))ᵐ by the power-of-a-power law |

Because (aᵐ)ⁿ = aᵐⁿ in either order, a^(m/n) can be found as the root of the power or the power of the root. For 27^(2/3): (³√27)² = 3² = 9, and ³√(27²) = ³√729 = 9. Root first is easier by hand, but both are correct.

### Why the base is usually positive

Textbooks state the laws for a > 0, and there is a good reason. With a negative base, equivalent fractions in the index can give different answers. (−8)^(1/3) = −2, since (−2)³ = −8. But 1/3 = 2/6, and ⁶√((−8)²) = ⁶√64 = 2. Root and power no longer agree, and (−4)^(1/2) is not a real number at all. So when you rewrite, say, √x as x^(1/2), you are assuming x ≥ 0. A question that writes "x > 0" is telling you the laws are safe to use.

## Skill 1: writing expressions in the form kxⁿ

Before you can differentiate or integrate, each term must be a single power of x with a numerical coefficient. The method is to split the fraction over its denominator, then deal with each term on its own.

**Worked example 1.** Write (5x³ − 4)/(2√x) in the form Axᵖ + Bx^q.

```
(5x³ − 4)/(2√x) = 5x³/(2x^(1/2)) − 4/(2x^(1/2))     split over the denominator
                = (5/2)x^(3 − 1/2) − 2x^(−1/2)        subtract indices; 4/2 = 2
                = (5/2)x^(5/2) − 2x^(−1/2)
```

So A = 5/2, p = 5/2, B = −2 and q = −1/2.

Two traps live in this skill.

- **The coefficient is not raised to the power.** 3/(4x²) = (3/4)x⁻², not (4x)⁻² × 3 and not 3 × 4x⁻². Only the x moves to the numerator.
- **A bracket raises everything inside it.** (2x)⁻¹ = 1/(2x) = (1/2)x⁻¹, but 2x⁻¹ = 2/x. These differ by a factor of 4.

**Worked example 2.** Given that (8x)^(2/3) × 4/√x = kxⁿ, find k and n.

```
(8x)^(2/3) = 8^(2/3) × x^(2/3) = 4x^(2/3)
4x^(2/3) × 4 = 16x^(2/3)
16x^(2/3) ÷ x^(1/2) = 16x^(2/3 − 1/2) = 16x^(1/6)
```

So k = 16 and n = 1/6. Use a common denominator of 6 for the indices: 4/6 − 3/6 = 1/6.

## Skill 2: factorising fractional powers

When terms share a base raised to different powers, take out the **lowest** power. This works for negative and fractional indices as well as whole numbers, and it is the tidy way to simplify results of the product rule later in the course.

**Worked example 3.** Factorise fully 2x(x + 1)^(1/2) + (x + 1)^(3/2).

The lowest power of (x + 1) is 1/2. Since (x + 1)^(3/2) = (x + 1)^(1/2) × (x + 1):

```
2x(x + 1)^(1/2) + (x + 1)^(3/2) = (x + 1)^(1/2)[2x + (x + 1)]
                                = (x + 1)^(1/2)(3x + 1)
```

Check by expanding back: (x + 1)^(1/2) × (x + 1) gives the second term again.

**Worked example 4.** Solve x^(3/2) = 9x^(1/2), where x ≥ 0.

Do not divide by x^(1/2): that loses a solution. Rearrange and factorise instead.

```
x^(3/2) − 9x^(1/2) = 0
x^(1/2)(x − 9) = 0
x^(1/2) = 0  or  x = 9
```

**Answer: x = 0 or x = 9.** Dividing both sides by x^(1/2) gives only x = 9, because it silently assumes x^(1/2) ≠ 0.

## Skill 3: equations that are quadratics in a fractional power

If one index is double another, substitute for the smaller power. The broader guide shows this for 3^(2x); here the unknown is the base.

**Worked example 5.** Solve x^(2/3) − 3x^(1/3) − 4 = 0.

Since x^(2/3) = (x^(1/3))², let u = x^(1/3).

```
u² − 3u − 4 = 0
(u − 4)(u + 1) = 0
u = 4  or  u = −1
x^(1/3) = 4   gives  x = 4³ = 64
x^(1/3) = −1  gives  x = (−1)³ = −1
```

**Answer: x = 64 or x = −1.** Both are valid, because a cube root of a negative number is real. Compare an equation in x^(1/2): there, a negative value of u would have to be rejected, since a square root is never negative. Always ask which values of u are possible before converting back.

Check x = −1: (−1)^(2/3) = ((−1)^(1/3))² = 1, and 1 − 3(−1) − 4 = 0.

## Skill 4: index equations with different bases

Sometimes the bases do not match, but they can be combined with (ab)ⁿ = aⁿbⁿ read backwards.

**Worked example 6.** Solve 4ˣ × 9ˣ = 216.

```
4ˣ × 9ˣ = (4 × 9)ˣ = 36ˣ = 6^(2x)
216 = 6³
2x = 3,  so  x = 3/2
```

Spotting that 36 and 216 are both powers of 6 is the key step. Write out the powers of small primes (2, 3, 5, 6, 7) up to about 1000 so that you recognise them quickly.

## Skill 5: comparing sizes without a calculator

To compare roots of different orders, raise both numbers to a power that clears every fractional index.

**Worked example 7.** Which is larger, √2 or ³√3?

√2 = 2^(1/2) and ³√3 = 3^(1/3). The lowest common multiple of 2 and 3 is 6, so raise both to the power 6:

```
(2^(1/2))⁶ = 2³ = 8
(3^(1/3))⁶ = 3² = 9
```

Both numbers are positive, and raising positive numbers to the same positive power keeps their order, so ³√3 is larger. State that reason: it is what turns a calculation into an argument.

## Common mistakes

- Writing (x + y)^(1/2) as x^(1/2) + y^(1/2). Index laws apply to products and quotients, never to sums.
- Moving a coefficient with the x: 5/(2x³) is (5/2)x⁻³, not 5 × 2x⁻³ or (5/2)x³.
- Dividing an equation by a power of x and losing x = 0.
- Rejecting a negative solution of x^(1/3) = k: cube roots of negative numbers are fine.
- Keeping a negative value of x^(1/2): a principal square root cannot be negative.
- Subtracting fractional indices without a common denominator, for example 2/3 − 1/2 written as 1/1.

## Exam technique for AQA command words

- **"Show that"**: the answer is printed, so every step must be visible and you finish by writing the printed result. Work forwards from the left-hand side.
- **"Hence"**: use the result you have just found. A different method may earn no marks.
- **"Write in the form kxⁿ"** or **"find the values of p and q"**: state the values clearly at the end, not only inside an expression.
- **"Exact"**: leave fractions and roots unrounded, such as x^(1/6) or 3/2.
- **"Simplify fully"**: one power of each letter, no negative indices unless the form asks for them, and all common factors taken out.

When a question says "x > 0", use that condition explicitly when you take an even root or divide by a power of x.

## Where to go next

Condense these methods with the [B1 revision notes](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices-aqa-alevel-maths-revision-notes/), then try the [B1 practice questions](/resources/aqa-a-level-mathematics-7357-b1-laws-of-indices-aqa-alevel-maths-practice/). Surds, the other half of the broader page, have their own [B2 surds study guide](/resources/aqa-a-level-mathematics-7357-b2-surds-aqa-alevel-maths/), and indices lead on to [exponentials and logarithms](/resources/aqa-a-level-mathematics-exponentials-and-logarithms/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B1.
