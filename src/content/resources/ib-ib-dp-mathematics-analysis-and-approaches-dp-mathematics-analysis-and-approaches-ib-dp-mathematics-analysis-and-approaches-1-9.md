---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.9 The binomial theorem"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-9"
description: "IB DP Maths AA section 1.9 study guide: why binomial coefficients are nCr, the general term, finding n or a coefficient, and exact-value tricks."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.9, the binomial theorem**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is common content for SL and HL. You need to expand (a + b)ⁿ for n ∈ ℕ, use Pascal's triangle and nCr, and find nCr both by formula and with technology. At HL the theorem is extended to fractional and negative exponents in section 1.10, covered in the [section 1.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10/).

The [exponents, logarithms, binomial theorem and proof study guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/) sets out Pascal's triangle and the basic expansions. This page explains where the coefficients come from and works through the question types that go beyond a straight expansion.

## What section 1.9 asks of you

- Expand (a + b)ⁿ for n ∈ ℕ.
- Use Pascal's triangle and the binomial coefficients nCr.
- Find nCr using the formula nCr = n!/(r!(n − r)!) and using technology.

## Why the coefficients are nCr

(a + b)ⁿ is the product of n identical brackets: (a + b)(a + b)…(a + b). Multiplying out means choosing either a or b from **every** bracket and multiplying the choices.

To get the term a^(n − r)bʳ, you choose b from exactly r of the n brackets and a from the rest. The number of ways to choose which r brackets supply b is nCr. So the coefficient of a^(n − r)bʳ is nCr. That is the whole theorem:

(a + b)ⁿ = Σ (r = 0 to n) nCr a^(n − r) bʳ.

This also explains three facts about the expansion:

- There are **n + 1 terms**, one for each r = 0, 1, …, n.
- In every term the powers of a and b **add to n**.
- The coefficients are **symmetric**: choosing r brackets for b is the same as choosing n − r brackets for a, so nCr = nC(n − r).

## Working with nCr

Cancel before multiplying. nCr = n(n − 1)…(n − r + 1)/r!, so

10C3 = (10 × 9 × 8)/(3 × 2 × 1) = 120.

Useful values: nC0 = nCn = 1, nC1 = n, nC2 = n(n − 1)/2.

**Pascal's rule.** Each entry in Pascal's triangle is the sum of the two above it: nCr + nC(r + 1) = (n + 1)C(r + 1). That is why the triangle and the formula always agree.

**Technology.** On Paper 2, a GDC evaluates nCr directly and can tabulate it. To find r with 9Cr = 84, tabulate 9Cr for r = 0 to 9: r = 3 or r = 6, a pair, because of symmetry.

## The general term

The term containing bʳ is

**T(r + 1) = nCr a^(n − r) bʳ**

(it is the (r + 1)th term, because counting starts at r = 0). Every "find the coefficient of …" or "find the constant term" question uses this:

1. Write the general term with a and b substituted, **including signs and coefficients inside a and b**.
2. Collect the power of x as a single expression in r.
3. Set it equal to the power you want; solve for r (it must be a whole number from 0 to n).
4. Substitute r back.

## Worked example 1 (calculator-free): negative powers of x

Expand (x + 2/x)⁴, simplifying each term.

```
Row 4: 1, 4, 6, 4, 1.   a = x, b = 2/x
x⁴ + 4x³(2/x) + 6x²(2/x)² + 4x(2/x)³ + (2/x)⁴
= x⁴ + 8x² + 24 + 32/x² + 16/x⁴
```

*Annotation.* The powers of x fall by 2 each time because a = x and b contains x⁻¹. The middle term, 24, is the constant term. Square and cube the 2 as well as the x: (2/x)³ = 8/x³.

## Worked example 2 (calculator-free): finding n

The coefficient of x² in the expansion of (1 + 3x)ⁿ is 189. Find n.

```
Term in x²: nC2 (3x)² = 9 × n(n − 1)/2 × x²
9n(n − 1)/2 = 189
n(n − 1) = 42
n² − n − 42 = 0
(n − 7)(n + 6) = 0
n = 7  (n ∈ ℕ, so reject −6)
```

*Annotation.* Use nC2 = n(n − 1)/2, since n is unknown and the factorial formula cannot be evaluated directly. State why −6 is rejected.

## Worked example 3 (calculator-free): a product of two brackets

Find the coefficient of x³ in (x² − 3)(1 + x/2)⁶.

You need only two terms of the expansion: those that make x³ when multiplied by x² or by −3.

```
From (1 + x/2)⁶:  x term:  6C1 (x/2)  = 3x
                  x³ term: 6C3 (x/2)³ = 20 × x³/8 = (5/2)x³
x³ in the product: x² × 3x + (−3) × (5/2)x³ = 3x³ − (15/2)x³
Coefficient = −9/2
```

*Annotation.* Do not expand everything; identify which pairs of terms combine to give x³. Missing one of the two contributions is the usual error.

## Worked example 4 (calculator-free): an exact value

Find the exact value of (√2 + 1)⁴ + (√2 − 1)⁴.

```
(a + b)⁴ + (a − b)⁴ = 2(a⁴ + 6a²b² + b⁴)      (the odd-power terms cancel)
With a = √2, b = 1:  2(4 + 6 × 2 × 1 + 1) = 2 × 17 = 34
```

Adding the two expansions cancels every term with an odd power of b. That is why the answer is an integer even though each bracket is irrational.

## Approximations

When b is small, the first few terms give a good approximation:

(1.02)⁶ = (1 + 0.02)⁶ ≈ 1 + 6(0.02) + 15(0.02)² = 1 + 0.12 + 0.006 = 1.126.

The true value is 1.12616… (to 5 d.p.), so three terms already give 3 decimal places. Later terms are tiny because they contain higher powers of 0.02.

## Common mistakes

- Writing (3x)² as 3x² inside a term. Brackets around the whole of b are essential.
- Losing the sign: in (2 − x)ⁿ, b = −x, and (−x)³ = −x³.
- Using r = k for the term in xᵏ without checking. In (x + 2/x)⁴, the x² term has r = 1, not r = 2.
- Confusing "the term" with "the coefficient": the term includes x; the coefficient does not.
- Counting terms from r = 1, so "the fourth term" is taken as r = 4. It is r = 3.
- Leaving nCr unevaluated when the question asks for a number.

## Exam technique: the command words

- **Expand**: write every term, simplified. "Expand in ascending powers of x" means start with the constant.
- **Find the coefficient of**: give the number only, with its sign.
- **Find the term**: give the coefficient and the power of x together.
- **Hence**: use the expansion you have just found, for instance to approximate (1.02)⁶ after expanding (1 + x)⁶.
- **Show that**: for instance "show that the coefficient of x² is 9n(n − 1)/2"; every step must appear.

Paper 1 expects small expansions and nCr by hand. On Paper 2, use technology for nCr and for tables when solving for n or r.

## Where next

Revise the methods with the [section 1.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9-revision-notes/) and practise every question type in the [section 1.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.9.
