---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Partial fractions (P4.2) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-algebra-and-functions-edexcel-alevel-maths"
description: "Original practice questions with full answers on partial fractions, improper fractions and their use in integration and series for Edexcel IAL Maths Unit P4."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover section 2 of Unit P4 (YMA01, Issue 3): partial fractions with denominators no more complicated than repeated linear factors, improper fractions, and applications to integration, differentiation and series. Revise first with the [P4 partial fractions study guide](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions/) and the [P4 partial fractions revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-revision-notes/).

---

## Section A

**1.** Express 7/((x − 3)(x + 4)) in partial fractions. **[3]**

**2.** Express (4x + 1)/((2x − 1)(x + 1)) in partial fractions. **[3]**

**3.** Write down the form in which (x² + 1)/((x − 1)²(x + 4)) should be expressed in partial fractions. You do not need to find the constants. **[2]**

## Section B

**4.** Express (2x² + 3x + 4)/(x(x + 2)(x − 1)) in partial fractions. **[4]**

**5.** Express (x² − x + 6)/((2x + 1)(x − 1)²) in the form A/(2x + 1) + B/(x − 1) + C/(x − 1)², where A, B and C are constants to be found. **[5]**

**6.** Express (3x² + 2x − 3)/((x + 1)(x − 1)) in the form A + B/(x + 1) + C/(x − 1). **[5]**

**7.** Express (x³ − x² − 4x + 7)/((x − 2)(x + 1)) in the form Ax + B + C/(x − 2) + D/(x + 1). **[5]**

**8.** f(x) = (2x + 8)/((x + 1)(x + 3)), x > −1.

**(a)** Express f(x) in partial fractions. **[3]**

**(b)** Hence show that ∫₀¹ f(x) dx = ln 6. **[4]**

**(c)** Find f′(x) and show that f is decreasing for x > −1. **[3]**

**9.** g(x) = (3 − x)/((1 − x)(1 + x)).

**(a)** Express g(x) in partial fractions. **[3]**

**(b)** Hence find the series expansion of g(x) in ascending powers of x, up to and including the term in x³. **[4]**

**(c)** State the set of values of x for which the expansion is valid. **[1]**

**10.** A student writes (5x + 4)/((x − 1)(x + 2)²) ≡ A/(x − 1) + B/(x + 2)² and finds that no values of A and B work for every x.

**(a)** Explain the student's error. **[1]**

**(b)** Express (5x + 4)/((x − 1)(x + 2)²) correctly in partial fractions. **[4]**

---

## Answers

**1.** 7 ≡ A(x + 4) + B(x − 3) [1]. x = 3: 7 = 7A, so A = 1; x = −4: 7 = −7B, so B = −1 [1]. **1/(x − 3) − 1/(x + 4)** [1].

**2.** 4x + 1 ≡ A(x + 1) + B(2x − 1) [1]. x = ½: 3 = (3/2)A, so A = 2; x = −1: −3 = −3B, so B = 1 [1]. **2/(2x − 1) + 1/(x + 1)** [1].

**3.** **A/(x − 1) + B/(x − 1)² + C/(x + 4)** [1] [1] (one mark for the two terms in (x − 1), one for the term in (x + 4)).

**4.** 2x² + 3x + 4 ≡ A(x + 2)(x − 1) + Bx(x − 1) + Cx(x + 2) [1]. x = 0: 4 = −2A, so A = −2 [1]. x = 1: 9 = 3C, so C = 3 [1]. x = −2: 8 − 6 + 4 = 6 = 6B, so B = 1. **−2/x + 1/(x + 2) + 3/(x − 1)** [1].

**5.** x² − x + 6 ≡ A(x − 1)² + B(2x + 1)(x − 1) + C(2x + 1) [1]. x = 1: 6 = 3C, so **C = 2** [1]. x = −½: ¼ + ½ + 6 = 27/4 = (9/4)A, so **A = 3** [1]. Comparing x² coefficients: 1 = A + 2B [1], so **B = −1** [1].

So the answer is 3/(2x + 1) − 1/(x − 1) + 2/(x − 1)².

**6.** The fraction is improper; comparing x² coefficients, A = 3 [1]. 3x² + 2x − 3 = 3(x² − 1) + 2x, so the fraction is 3 + 2x/((x + 1)(x − 1)) [1]. 2x ≡ B(x − 1) + C(x + 1) [1]. x = 1: C = 1; x = −1: B = 1 [1]. **3 + 1/(x + 1) + 1/(x − 1)** [1].

**7.** x² − x − 2 is the denominator. Dividing: x³ − x² − 4x + 7 = x(x² − x − 2) + (−2x + 7) [1], so A = 1 and B = 0 [1]. −2x + 7 ≡ C(x + 1) + D(x − 2) [1]. x = 2: 3 = 3C, so C = 1; x = −1: 9 = −3D, so D = −3 [1]. **x + 1/(x − 2) − 3/(x + 1)** [1].

**8. (a)** 2x + 8 ≡ A(x + 3) + B(x + 1) [1]. x = −1: 6 = 2A, so A = 3; x = −3: 2 = −2B, so B = −1 [1]. **f(x) = 3/(x + 1) − 1/(x + 3)** [1].

**(b)** ∫₀¹ f(x) dx = [3 ln(x + 1) − ln(x + 3)]₀¹ [1] = (3 ln 2 − ln 4) − (3 ln 1 − ln 3) [1] = 3 ln 2 − 2 ln 2 + ln 3 [1] = ln 2 + ln 3 = ln 6 [1].

**(c)** f′(x) = −3/(x + 1)² + 1/(x + 3)² [1]. For x > −1, 0 < x + 1 < x + 3, so 1/(x + 3)² < 1/(x + 1)² < 3/(x + 1)² [1]. Therefore f′(x) < 0, and f is decreasing for x > −1 [1].

Total: 10

**9. (a)** 3 − x ≡ A(1 + x) + B(1 − x) [1]. x = 1: 2 = 2A, so A = 1; x = −1: 4 = 2B, so B = 2 [1]. **g(x) = 1/(1 − x) + 2/(1 + x)** [1].

**(b)** (1 − x)⁻¹ = 1 + x + x² + x³ + ... [1]. 2(1 + x)⁻¹ = 2 − 2x + 2x² − 2x³ + ... [1]. Adding [1]: **g(x) = 3 − x + 3x² − x³ + ...** [1].

**(c)** Both expansions are valid for |x| < 1, so **|x| < 1** [1].

Total: 8

**10. (a)** The factor (x + 2) is repeated, so the form must include both B/(x + 2) and C/(x + 2)² [1].

**(b)** 5x + 4 ≡ A(x + 2)² + B(x − 1)(x + 2) + C(x − 1) [1]. x = 1: 9 = 9A, so A = 1 [1]. x = −2: −6 = −3C, so C = 2 [1]. Comparing x² coefficients: 0 = A + B, so B = −1. **1/(x − 1) − 1/(x + 2) + 2/(x + 2)²** [1].

Total: 5

## Where marks are usually lost

- In Questions 5 and 10, leaving out the single-power term for a repeated factor.
- In Questions 6 and 7, decomposing an improper fraction without first finding the polynomial part.
- In Question 8(b), integrating 3/(x + 1) as 3 ln(x + 1) correctly but then mishandling ln 1 = 0 or the laws of logarithms when combining.
- In Question 9(b), forgetting the alternating signs in the expansion of (1 + x)⁻¹.
- Finding the constants and not writing out the final partial fractions.
