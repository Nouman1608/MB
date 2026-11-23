---
title: "AQA A-Level Mathematics (7357): Partial fractions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.10
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b10-partial-fractions-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 B10 partial fractions notes: forms, identities, factorising, comparing coefficients, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense content statement **B10** of AQA A-level Mathematics (7357), Section B: Algebra and functions: "Decompose rational functions into partial fractions (denominators not more complicated than squared linear terms and with no more than 3 terms, numerators constant or linear)." For explanations, read the [B10 partial fractions study guide](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions/); for exam-style questions, use the [B10 practice questions](/resources/aqa-a-level-mathematics-7357-b10-partial-fractions-practice/). B10 is also summarised alongside modelling in the [partial fractions and functions in modelling revision notes](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Rational function | One polynomial divided by another |
| Proper fraction | Numerator degree lower than denominator degree; every B10 question starts proper |
| Partial fractions | Simpler fractions, one for each factor (and power) of the denominator, that add to the original |
| Identity (≡) | True for every value of x, so any x may be substituted and coefficients compared |
| Repeated factor | A squared linear factor such as (x + 4)² |
| Cover-up / substitution | Putting in the value that makes a factor zero to find one constant |
| Comparing coefficients | Matching the coefficients of x², x and the constant on both sides |

## The forms you need

| Denominator | Form | Constants |
|---|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) | 2 |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) | 3 |
| (ax + b)² | A/(ax + b) + B/(ax + b)² | 2 |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² | 3 |

**Check:** number of constants = degree of the denominator.

## Method

1. **Factorise** the denominator fully (look for a common factor, the difference of two squares, or a perfect square).
2. **Write the form** with unknown constants.
3. **Multiply through** to get an identity with no fractions.
4. **Substitute** each value that makes a factor zero (for (2x + 1), use x = −1/2).
5. **Compare coefficients** (often x² or the constant term) for any constant still unknown.
6. **Check** with a fresh value of x.

## Factorising patterns

| Spot | Example |
|---|---|
| Common factor of x² | x³ + 5x² = x²(x + 5): here x² is the squared linear factor |
| Difference of two squares | 9x² − 1 = (3x − 1)(3x + 1) |
| Perfect square | x² − 8x + 16 = (x − 4)² |
| Common factor then quadratic | x³ − x² − 6x = x(x − 3)(x + 2) |
| Negative x² | 3 + 2x − x² = (3 − x)(1 + x) |

## Worked reminders

*Two factors.* (x + 11)/((x − 3)(x + 4)): x + 11 ≡ A(x + 4) + B(x − 3); x = 3 gives A = 2, x = −4 gives B = −1. Result: 2/(x − 3) − 1/(x + 4).

*Repeated factor alone.* (3x − 1)/(x − 2)²: 3x − 1 ≡ A(x − 2) + B, so A = 3 and B = 5. Result: 3/(x − 2) + 5/(x − 2)².

*Fractional constants.* (x + 2)/((2x + 1)(x − 1)): x = 1 gives 3 = 3B, B = 1; x = −1/2 gives 3/2 = A(−3/2), A = −1. Result: −1/(2x + 1) + 1/(x − 1). Constants can also be fractions; leave them exact.

## Exam traps

- Leaving a denominator partly factorised.
- Missing B/(x − a) when (x − a)² is present.
- Putting an x in a numerator over a linear factor (Bx + C over a linear factor is never needed).
- Substituting x = 1 for the factor (2x − 1) instead of x = 1/2.
- Dropping the sign when a factor is (1 − x) or (3 − x).
- Making an arithmetic slip and not checking: one wrong constant spoils every "hence" mark.
- Writing A = 5/2 as 2.5 and then rounding later working.

## Quick self-test

1. Write the form of the decomposition of (4x − 3)/(x²(x + 1)) with constants A, B, C.
2. Factorise 9x² − 16 and x³ + 6x² + 9x.
3. Express (5x + 1)/((x + 1)(x − 1)) in partial fractions.
4. Express 8/(x² − 4) in partial fractions.
5. Express (2x + 7)/(x + 3)² in partial fractions.
6. Express (4x − 1)/((2x − 1)(x + 1)) in partial fractions.
7. Express (2x + 3)/(x(x + 1)) in partial fractions.
8. Express 5/((2 − x)(x + 3)) in partial fractions.
9. Express (x + 3)/(x(x − 1)²) in partial fractions.
10. Express (7x + 4)/(x³ − x² − 2x) in partial fractions.
11. How many constants does (5x + 2)/((x + 2)(3x − 1)²) need, and why?
12. In (x + 4)/(x + 1)² ≡ A/(x + 1) + B/(x + 1)², explain why x = −1 may be substituted after multiplying through by (x + 1)².

### Answers

1. **A/x + B/x² + C/(x + 1)**.
2. **(3x − 4)(3x + 4)** and **x(x + 3)²**.
3. 5x + 1 ≡ A(x − 1) + B(x + 1): x = 1 gives B = 3, x = −1 gives A = 2, so **2/(x + 1) + 3/(x − 1)**.
4. 8 ≡ A(x + 2) + B(x − 2): A = 2, B = −2, so **2/(x − 2) − 2/(x + 2)**.
5. 2x + 7 ≡ A(x + 3) + B, so A = 2 and B = 1: **2/(x + 3) + 1/(x + 3)²**.
6. x = 1/2 gives 1 = (3/2)A, so A = 2/3; x = −1 gives −5 = −3B, so B = 5/3. **2/(3(2x − 1)) + 5/(3(x + 1))**.
7. 2x + 3 ≡ A(x + 1) + Bx: x = 0 gives A = 3, x = −1 gives B = −1, so **3/x − 1/(x + 1)**.
8. 5 ≡ A(x + 3) + B(2 − x): x = 2 gives A = 1, x = −3 gives B = 1, so **1/(2 − x) + 1/(x + 3)**.
9. x + 3 ≡ A(x − 1)² + Bx(x − 1) + Cx: A = 3, C = 4, and x² gives B = −3, so **3/x − 3/(x − 1) + 4/(x − 1)²**.
10. x³ − x² − 2x = x(x − 2)(x + 1). A = −2, B = 3, C = −1, so **−2/x + 3/(x − 2) − 1/(x + 1)**.
11. **Three**: the denominator has degree 3, giving A/(x + 2) + B/(3x − 1) + C/(3x − 1)².
12. Multiplying through gives x + 4 ≡ A(x + 1) + B, a polynomial identity true for **every** x, including x = −1 (which gives B = 3; then A = 1).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B10.
