---
title: "Cambridge A Level Mathematics (9709): Continuous random variables -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "continuous-random-variables-cambridge-alevel-maths"
description: "Thirteen original 9709 Paper 6 questions on 6.3: valid density functions, constants, probabilities, mean, variance, medians and percentiles."
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
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover subtopic 6.3 Continuous random variables of Cambridge International AS & A Level Mathematics 9709 (Paper 6). In every question f(x) = 0 outside the stated interval. Give exact answers where possible, and otherwise 3 significant figures.

Related: [continuous random variables study guide](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths/) | [continuous random variables revision notes](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths-revision-notes/)

## Section A

**1.** X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2. Find k. **[2]**

**2.** For the random variable in question 1, find P(X > 1). **[2]**

**3.** For the random variable in question 1, find E(X). **[2]**

**4.** X has probability density function f(x) = k/x³ for x ≥ 1. Find k and P(X > 3). **[3]**

**5.** X has probability density function f(x) = 1/5 for 2 ≤ x ≤ 7. Find E(X) and Var(X). **[3]**

**6.** Give two reasons why f(x) = (x − 1)/2 for 0 ≤ x ≤ 3 is not a valid probability density function. **[2]**

## Section B

**7.** X has probability density function f(x) = k(9 − x²) for 0 ≤ x ≤ 3.

**(a)** Show that k = 1/18.

**(b)** Find P(X < 1).

**(c)** Find E(X).

**(d)** Find Var(X). **[9]**

**8.** X has probability density function f(x) = k/x⁴ for x ≥ 2.

**(a)** Find k.

**(b)** Find E(X).

**(c)** Find the median of X. **[7]**

**9.** X has probability density function f(x) = 3x²/64 for 0 ≤ x ≤ 4.

**(a)** Find P(1 < X < 3).

**(b)** Find the median of X.

**(c)** Find the value exceeded by 10% of the distribution. **[6]**

**10.** X has probability density function f(x) = a + bx for 0 ≤ x ≤ 1, where a and b are constants. E(X) = 7/12. Find a and b. **[5]**

**11.** The lifetime X, in years, of an electronic component has probability density function f(x) = 0.5e^(−0.5x) for x ≥ 0.

**(a)** Show that f is a valid probability density function.

**(b)** Find the probability that a component lasts more than 3 years.

**(c)** Find the median lifetime. **[6]**

**12.** For the random variable in question 1, two independent observations of X are taken. Find the probability that both are greater than 1.5. **[3]**

**13.** X has probability density function f(x) = k sin x for 0 ≤ x ≤ π.

**(a)** Find k.

**(b)** Find P(X < π/3).

**(c)** State E(X), giving a reason. **[5]**

## Answers

**1.** k[x²/2 + x]₀² = 4k [1]; 4k = 1, so **k = 1/4** [1] **[2]**

**2.** (1/4)[x²/2 + x]₁² = (1/4)(4 − 1.5) [1] = **5/8** [1] **[2]**

**3.** (1/4)∫₀² (x² + x) dx = (1/4)(8/3 + 2) [1] = **7/6** [1] **[2]**

**4.** k[−1/(2x²)]₁^∞ = k/2 = 1, so **k = 2** [1]; P(X > 3) = [−1/x²]₃^∞ [1] = **1/9** [1] **[3]**

**5.** By symmetry **E(X) = 4.5** [1]; E(X²) = (1/5)[x³/3]₂⁷ = 335/15 = 22.33 [1]; Var(X) = 335/15 − 4.5² = **25/12 ≈ 2.08** [1] **[3]**

**6.** f(x) < 0 for 0 ≤ x < 1 [1]; the total area is (1/2)[x²/2 − x]₀³ = 0.75, not 1 [1] **[2]**

**7. (a)** k[9x − x³/3]₀³ = k(27 − 9) = 18k [1]; 18k = 1, so k = 1/18 [1]

**(b)** (1/18)[9x − x³/3]₀¹ = (1/18)(26/3) [1] = **13/27 ≈ 0.481** [1]

**(c)** (1/18)∫₀³ (9x − x³) dx = (1/18)[9x²/2 − x⁴/4]₀³ [1] = (1/18)(81/4) = **9/8** [1]

**(d)** E(X²) = (1/18)∫₀³ (9x² − x⁴) dx = (1/18)[3x³ − x⁵/5]₀³ [1] = (1/18)(162/5) = 9/5 [1]; Var(X) = 9/5 − 81/64 = **171/320 ≈ 0.534** [1] **[9]**

**8. (a)** k[−1/(3x³)]₂^∞ = k/24 [1]; **k = 24** [1]

**(b)** ∫₂^∞ 24x⁻³ dx = [−12/x²]₂^∞ [1] = **3** [1]

**(c)** ∫₂ᵐ 24x⁻⁴ dx = [−8/x³]₂ᵐ = 1 − 8/m³ [1]; 1 − 8/m³ = 0.5, so m³ = 16 [1]; **m = 2.52** [1] **[7]**

**9. (a)** [x³/64]₁³ = (27 − 1)/64 [1] = **13/32 ≈ 0.406** [1]

**(b)** m³/64 = 0.5, so m³ = 32 [1]; **m = 3.17** [1]

**(c)** q³/64 = 0.9, so q³ = 57.6 [1]; **q = 3.86** [1] **[6]**

*Examiner insight:* "exceeded by 10%" means 90% of the area lies below the value, so the area condition uses 0.9.

**10.** Area: a + b/2 = 1 [1]; mean: ∫₀¹ (ax + bx²) dx = a/2 + b/3 = 7/12 [1]; substituting a = 1 − b/2: 1/2 + b/12 = 7/12 [1]; **b = 1** [1], **a = 1/2** [1] **[5]**

**11. (a)** f(x) > 0 for all x ≥ 0 [1]; ∫₀^∞ 0.5e^(−0.5x) dx = [−e^(−0.5x)]₀^∞ = 0 − (−1) = 1 [1]

**(b)** [−e^(−0.5x)]₃^∞ = e^(−1.5) [1] = **0.223** [1]

**(c)** ∫₀ᵐ 0.5e^(−0.5x) dx = 1 − e^(−0.5m) = 0.5 [1]; m = 2 ln 2 = **1.39 years** [1] **[6]**

**12.** P(X > 1.5) = (1/4)[x²/2 + x] evaluated from 1.5 to 2 = (1/4)(4 − 2.625) = 11/32 [1]; both: (11/32)² [1] = **0.118** [1] **[3]**

**13. (a)** k[−cos x]₀^π = k(1 + 1) = 2k [1]; **k = 1/2** [1]

**(b)** (1/2)[−cos x]₀^(π/3) = (1/2)(1 − 1/2) [1] = **1/4** [1]

**(c)** The graph of sin x is symmetrical about x = π/2 on this interval, so **E(X) = π/2** [1] **[5]**

*Examiner insight:* integrating x sin x by parts also gives π/2, but the symmetry argument is quicker and earns the mark when the reason is stated.

## Where marks are usually lost

- Products not expanded before integrating.
- Var(X) found without squaring E(X).
- A median found by setting f(m) = 0.5 instead of using an area.
- Sign slips with infinite upper limits.
- Validity checked by area alone, without checking that f(x) is never negative.
