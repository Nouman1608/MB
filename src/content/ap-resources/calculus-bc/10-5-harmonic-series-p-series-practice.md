---
resourceId: "mb-ap-calcbc-10.5-practice"
title: "Harmonic Series and p-Series: Practice Questions (Calculus BC 10.5)"
description: "Seven original Marlbridge practice questions on p-series and the harmonic series: reading off p, parameter conditions, sums of series, the grouping proof and an integral bound, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.5"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Partial sums (Topic 10.1), the nth term test (Topic 10.3) and the integral test (Topic 10.4)"
prerequisiteResources: ["mb-ap-calcbc-10.5-study-guide"]
learningObjectives:
  - "Classify p-series and series built from them, with a stated reason"
  - "Find the values of a parameter that make a p-series converge"
  - "Explain why the harmonic series diverges and contrast it with the alternating harmonic series"
  - "Use the integral test to justify convergence of a p-series and bound its sum"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "All questions are no-calculator. Leave answers as exact fractions."
related: ["mb-ap-calcbc-10.5-study-guide", "mb-ap-calcbc-10.5-revision-notes", "mb-ap-calcbc-10.5-checklist"]
next: "mb-ap-calcbc-10.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc", "exam-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for any question; every sum runs from n = 1 to ∞ unless stated; Sₙ is the nth partial sum; S(2ᵏ) is the sum of the first 2ᵏ terms.

## Question 1 (multiple choice · foundation)

Which of the following series converges?

- (A) ∑ 1/∜n
- (B) ∑ 1/(n + 1)
- (C) ∑ n/(n² √n)
- (D) ∑ n²/n³

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** n² √n = n^(5/2), so n/(n² √n) = 1/n^(3/2). This is a p-series with p = 3/2 > 1, so it converges.

- (A) is 1/n^(1/4), a p-series with p = 1/4 ≤ 1. It diverges.
- (B) is 1/2 + 1/3 + 1/4 + …, the harmonic series without its first term. Removing one term does not change divergence.
- (D) simplifies to 1/n, the harmonic series. It diverges. Students who choose (D) often read p = 3 from the denominator before simplifying.
</details>

## Question 2 (multiple choice · core)

For which values of the constant k does ∑ 1/n^(2k − 3) converge?

- (A) k > 2
- (B) k ≥ 2
- (C) k > 3/2
- (D) k < 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** This is a p-series with p = 2k − 3. It converges exactly when p > 1, so 2k − 3 > 1, which gives 2k > 4 and **k > 2**.

- (B) includes k = 2, which gives p = 1: the harmonic series, which diverges.
- (C) solves 2k − 3 > 0. That only makes the terms go to 0; it is not enough for convergence (for example k = 1.75 gives p = 0.5).
- (D) reverses the inequality. A smaller p gives *larger* terms 1/nᵖ, which is worse for convergence, not better.
</details>

## Question 3 (multiple choice · core)

Which statement about the harmonic series ∑ 1/n is true?

- (A) It converges, because 1/n → 0 as n → ∞.
- (B) It diverges, and the nth term test proves this.
- (C) It diverges, even though 1/n → 0; the nth term test gives no conclusion for it.
- (D) It converges to ln 2.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The harmonic series is a p-series with p = 1, so it diverges (by the integral test or the grouping argument). Its terms do approach 0, which is exactly why the nth term test is inconclusive here.

- (A) treats "terms → 0" as enough for convergence. It is necessary, not sufficient.
- (B) has the right conclusion with a wrong reason. The nth term test proves divergence only when the terms do *not* approach 0.
- (D) describes the *alternating* harmonic series, 1 − 1/2 + 1/3 − …, whose sum is ln 2.
</details>

## Question 4 (multiple choice · stretch)

Which of the following series diverges?

- (A) ∑ (1/n² − 1/n³)
- (B) ∑ (−1)ⁿ⁺¹/n
- (C) ∑ (1/n² + 1/(n + 2))
- (D) ∑ 1/n^(π/2)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ∑ 1/n² converges (p = 2). ∑ 1/(n + 2) = 1/3 + 1/4 + … is the harmonic series without its first two terms, so it diverges. Convergent plus divergent is divergent.

- (A) is the difference of two convergent p-series (p = 2 and p = 3), so it converges.
- (B) is the alternating harmonic series, which converges. The sign changes matter.
- (D) is a p-series with p = π/2 ≈ 1.571 > 1, so it converges. p does not have to be an integer.
</details>

## Question 5 (calculation · core)

Decide whether each series converges or diverges. Give a reason for each.

(a) ∑ 6/n^(5/4)  (b) ∑ n^(√2)/n²  (c) ∑ 1/(√n · ∜n)  (d) ∑ (n² − 1)/n⁴

<details>
<summary>Worked solution</summary>

**(a)** A constant multiple of the p-series with p = 5/4. Since 5/4 > 1, it **converges**.

**(b)** n^(√2)/n² = 1/n^(2 − √2). Since √2 ≈ 1.414, p = 2 − √2 ≈ 0.586 ≤ 1, so it **diverges**.

**(c)** √n · ∜n = n^(1/2 + 1/4) = n^(3/4). So p = 3/4 ≤ 1 and it **diverges**.

**(d)** (n² − 1)/n⁴ = 1/n² − 1/n⁴. Both ∑ 1/n² (p = 2) and ∑ 1/n⁴ (p = 4) converge, and the difference of two convergent series converges. So it **converges**. (The first term is 0, which does not matter.)

Suggested mark points (4): 1 for each part with a correct decision **and** the correct value of p (or correct split in (d)) compared with 1.

Common error in (b): reading p = 2 from the denominator and saying "converges". Always combine the powers first.
</details>

## Question 6 (constructed response · core)

Let Sₙ be the nth partial sum of the harmonic series and Tₙ the nth partial sum of the alternating harmonic series 1 − 1/2 + 1/3 − 1/4 + ….

(a) Find S₄ and T₄ as exact fractions.
(b) By grouping terms, show that S₈ ≥ 5/2.
(c) The grouping idea gives S(2ᵏ) ≥ 1 + k/2. Use it to find a number of terms that guarantees the harmonic partial sum is at least 4.
(d) The two series have terms of the same size. Explain briefly why it is not a contradiction that one diverges and the other converges.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** S₄ = 1 + 1/2 + 1/3 + 1/4 = 12/12 + 6/12 + 4/12 + 3/12 = **25/12**.
T₄ = 1 − 1/2 + 1/3 − 1/4 = 12/12 − 6/12 + 4/12 − 3/12 = **7/12**.

**(b)** S₈ = 1 + 1/2 + (1/3 + 1/4) + (1/5 + 1/6 + 1/7 + 1/8).
1/3 + 1/4 ≥ 1/4 + 1/4 = 1/2, and 1/5 + 1/6 + 1/7 + 1/8 ≥ 4 × 1/8 = 1/2.
So S₈ ≥ 1 + 1/2 + 1/2 + 1/2 = **5/2**. (In fact S₈ = 761/280.)

**(c)** Solve 1 + k/2 ≥ 4: k ≥ 6. So 2⁶ = **64 terms** guarantee a partial sum of at least 4. (Fewer terms may also work; the bound only promises 64 is enough.)

**(d)** Convergence depends on how the partial sums behave, not just on the size of each term. In the harmonic series every term is added, and the grouping shows the total passes any number. In the alternating series the terms alternately add and subtract, so the partial sums go up and down by shrinking amounts and settle towards a limit. Same sizes, different signs, so different behaviour.

| Point | What earns it |
|---|---|
| 1 | Both S₄ = 25/12 and T₄ = 7/12 |
| 1 | Correct groups for S₈, each shown to be at least 1/2 |
| 1 | Conclusion S₈ ≥ 5/2 stated from the groups |
| 1 | k = 6 and 64 terms from 1 + k/2 ≥ 4 |
| 1 | Explanation in (d) that refers to the partial sums and the effect of the alternating signs |

Total: 5 points. Acceptable alternative for (b): computing S₈ = 761/280 exactly and showing 761/280 > 700/280 = 5/2 is correct but does not show the grouping method asked for, so award the third point only.
</details>

## Question 7 (constructed response · stretch)

Consider the p-series ∑ 1/n^(4/3).

(a) Use the integral test to show the series converges. State why the test applies.
(b) Explain why, for n ≥ 2, 1/n^(4/3) is less than ∫ from n − 1 to n of x^(−4/3) dx. Use this to show that every partial sum Sₙ is less than 4.
(c) A student writes: "For n ≥ 1, 1/n^(3/4) ≥ 1/n^(4/3), and ∑ 1/n^(4/3) converges, so ∑ 1/n^(3/4) also converges." Explain the error and give the correct conclusion with a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) = x^(−4/3) is positive, continuous and decreasing for x ≥ 1, so the integral test applies.
∫ from 1 to b of x^(−4/3) dx = [−3x^(−1/3)] from 1 to b = 3 − 3/∛b → **3** as b → ∞.
The improper integral converges, so the series converges.

**(b)** f is decreasing, so on the interval [n − 1, n] its smallest value is at the right end, f(n) = 1/n^(4/3). A rectangle of width 1 and height f(n) fits under the curve, so 1/n^(4/3) < ∫ from n − 1 to n of x^(−4/3) dx.
Adding these for n = 2 to N:
S_N = 1 + ∑ from n = 2 to N of 1/n^(4/3) < 1 + ∫ from 1 to N of x^(−4/3) dx = 1 + 3 − 3/∛N < **4**.

**(c)** Being **larger** than the terms of a convergent series tells you nothing: a series can be bigger than a convergent one and still diverge. In fact ∑ 1/n^(3/4) is a p-series with p = 3/4 ≤ 1, so it **diverges**.

| Point | What earns it |
|---|---|
| 1 | Conditions for the integral test stated (positive, continuous, decreasing) |
| 1 | Integral evaluated as a limit, equal to 3, with conclusion "converges" |
| 1 | Rectangle reason in (b) based on f decreasing |
| 1 | Sum of the inequalities giving Sₙ < 1 + 3 = 4 |
| 1 | (c) identifies the wrong direction of comparison **and** concludes divergence because p = 3/4 ≤ 1 |

Total: 5 points. Note: (b) shows the partial sums are increasing and bounded by 4, so the sum is at most 4 (it is about 3.60, background). The value 3 of the integral is **not** the sum of the series.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** simplify each term to one power of n first; see "Recognising p-series in disguise" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/).
- **Q3 wrong:** reread "Why the harmonic series diverges" and the first two misconceptions.
- **Q4 wrong:** review the rules for constant multiples, shifts and sums, and Worked example 3.
- **Q6 wrong:** compare with Worked example 2 and "The alternating harmonic series".
- **Q7 wrong:** revisit "The p-series rule and why it is true" and the integral test in [Topic 10.4](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-checklist/).
