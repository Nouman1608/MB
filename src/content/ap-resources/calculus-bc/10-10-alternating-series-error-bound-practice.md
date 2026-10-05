---
resourceId: "mb-ap-calcbc-10.10-practice"
title: "Alternating Series Error Bound: Practice Questions (Calculus BC 10.10)"
description: "Seven original Marlbridge practice questions on the alternating series error bound: bounding errors, counting terms, overestimates and underestimates, and justifying conditions, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.10"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "The alternating series test (Topic 10.7) and partial sums (Topic 10.1)"
prerequisiteResources: ["mb-ap-calcbc-10.10-study-guide"]
learningObjectives:
  - "Bound the error of a partial sum of an alternating series"
  - "Find the least number of terms that guarantees a required accuracy"
  - "Decide whether a partial sum overestimates or underestimates the sum and give an interval for it"
  - "Justify that the conditions for the error bound hold"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5: no calculator (keep fractions). Questions 6 and 7: calculator allowed for arithmetic; give decimals to 6 decimal places unless stated."
related: ["mb-ap-calcbc-10.10-study-guide", "mb-ap-calcbc-10.10-revision-notes", "mb-ap-calcbc-10.10-checklist"]
next: "mb-ap-calcbc-10.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: every series starts at n = 1; S is the sum of the series and Sₙ is the sum of its first n terms; no calculator for Questions 1–5; a calculator may be used for arithmetic in Questions 6 and 7, with decimals given to 6 decimal places unless stated.

## Question 1 (multiple choice · foundation)

The series Σ (−1)ⁿ⁺¹/(n + 3)² converges to S. Which value is the alternating series error bound for |S − S₃|?

- (A) 1/25
- (B) 1/36
- (C) 1/49
- (D) 1/64

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The sizes aₙ = 1/(n + 3)² are positive, decreasing and approach 0, so the bound applies. For S₃ the first omitted term is the 4th: a₄ = 1/(4 + 3)² = 1/49.

- (A) 1/25 = 1/(2 + 3)² is a₂, a term that is already included in S₃.
- (B) 1/36 is a₃, the last term **included**. The bound uses the first term left out.
- (D) 1/64 is a₅, one term too far along.
</details>

## Question 2 (multiple choice · core)

For S = Σ (−1)ⁿ⁺¹/(3n + 2), what is the smallest n for which the alternating series error bound guarantees |S − Sₙ| < 0.01?

- (A) 31
- (B) 32
- (C) 33
- (D) 100

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** You need aₙ₊₁ = 1/(3(n + 1) + 2) < 0.01, so 3(n + 1) + 2 > 100, giving n + 1 > 32.67. The smallest integer is n + 1 = 33, so n = 32. Check: for n = 32 the bound is a₃₃ = 1/101 ≈ 0.0099 < 0.01; for n = 31 it is a₃₂ = 1/98 ≈ 0.0102, which is too big.

- (A) 31 uses the bound a₃₂ = 1/98, which is not below 0.01.
- (C) 33 is the index of the bounding term, n + 1, not the number of terms.
- (D) 100 ignores the 3n + 2 and uses 1/(n + 1) < 0.01, which gives n + 1 > 100 and so n = 100. The denominator of the omitted term is 3(n + 1) + 2, not n + 1.
</details>

## Question 3 (multiple choice · core)

The series Σ (−1)ⁿ⁺¹/(n² + 1) converges to S. Which statement about S₅ is true?

- (A) S₅ is an overestimate of S, by at most 1/37.
- (B) S₅ is an underestimate of S, by at most 1/37.
- (C) S₅ is an overestimate of S, by at most 1/26.
- (D) S₅ is an underestimate of S, by at most 1/26.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The conditions hold: 1/(n² + 1) is positive, decreasing and → 0. The first omitted term is the 6th, with sign (−1)⁷ = − and size 1/(36 + 1) = 1/37. It would be subtracted, so S₅ is too big: an overestimate, by at most 1/37. (S₅ ≈ 0.37964 and S ≈ 0.36399, so the actual error is about 0.0157 < 1/37 ≈ 0.0270.)

- (B) has the right bound but the wrong direction. It looks at the sign of the 5th term (added), not the 6th.
- (C) has the right direction but uses a₅ = 1/26, the last term included.
- (D) makes both mistakes.
</details>

## Question 4 (multiple choice · stretch)

A series Σ (−1)ⁿ⁺¹ aₙ satisfies the conditions of the alternating series test and has sum S. A student finds S₁₀ = 0.6531 and a₁₁ = 0.0042. Which of the following must be true?

- (A) S ≤ 0.6531
- (B) S ≥ 0.6573
- (C) 0.6531 ≤ S ≤ 0.6573
- (D) |S − 0.6531| ≥ 0.0042

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The 11th term has sign (−1)¹² = +, so the next step adds 0.0042 and S lies between S₁₀ and S₁₁ = S₁₀ + a₁₁ = 0.6573. So 0.6531 ≤ S ≤ 0.6573.

- (A) has the direction backwards: since the next term is added, S₁₀ is an underestimate, so S ≥ 0.6531.
- (B) treats S₁₁ as a lower limit. S₁₁ overshoots S, so S ≤ 0.6573.
- (D) reverses the error bound. The error is **at most** 0.0042, not at least.
</details>

## Question 5 (constructed response · core)

Let S = Σ (−1)ⁿ⁺¹/n⁴.

(a) Show that the series satisfies the conditions of the alternating series test.
(b) Find S₃ as an exact fraction.
(c) Use the alternating series error bound to show that S₃ approximates S with an error less than 0.005.
(d) Is S₃ an overestimate or an underestimate of S? Give an interval that must contain S.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** aₙ = 1/n⁴ > 0 and the signs alternate. n⁴ increases, so aₙ is decreasing. n⁴ → ∞, so aₙ → 0. The conditions hold.

**(b)** S₃ = 1 − 1/16 + 1/81 = 1296/1296 − 81/1296 + 16/1296 = **1231/1296** (≈ 0.949846).

**(c)** The first omitted term is a₄ = 1/4⁴ = **1/256 ≈ 0.003906**. By the alternating series error bound, |S − S₃| ≤ 1/256, and 1/256 < 0.005 (because 256 > 200). So the error is less than 0.005.

**(d)** The 4th term has sign (−1)⁵ = −, so it would be subtracted. **S₃ is an overestimate.** Interval: S₃ − a₄ ≤ S ≤ S₃, that is **1231/1296 − 1/256 ≤ S ≤ 1231/1296**, or about 0.945939 ≤ S ≤ 0.949846.

| Point | What earns it |
|---|---|
| 1 | All three conditions stated with reasons (alternating, decreasing, limit 0) |
| 1 | S₃ = 1231/1296 |
| 1 | Bound a₄ = 1/256 identified as the first omitted term |
| 1 | Explicit comparison 1/256 < 0.005 |
| 1 | Overestimate, with the reason (next term negative) and a correct interval |

Total: 5 points. (Background: the exact sum is 7π⁴/720 ≈ 0.947033, which lies in the interval.)
</details>

## Question 6 (constructed response · core)

Let S = Σ (−1)ⁿ⁺¹/(2n − 1)³ = 1 − 1/27 + 1/125 − 1/343 + … .

(a) Find the smallest number of terms n for which the alternating series error bound guarantees |S − Sₙ| < 0.001. Justify your answer.
(b) Find that partial sum to 6 decimal places (calculator allowed).
(c) Give an interval of length at most 0.001 that must contain S.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The sizes 1/(2n − 1)³ are positive, decrease and approach 0, and the signs alternate, so the bound applies. You need aₙ₊₁ = 1/(2(n + 1) − 1)³ < 0.001, so (2n + 1)³ > 1000, so 2n + 1 > 10.
- n = 4: bound a₅ = 1/9³ = 1/729 ≈ 0.001372, which is **not** below 0.001.
- n = 5: bound a₆ = 1/11³ = 1/1331 ≈ 0.000751, which **is** below 0.001.

So **n = 5 terms**.

**(b)** S₅ = 1 − 1/27 + 1/125 − 1/343 + 1/729 **≈ 0.969419**.

**(c)** The 6th term has sign (−1)⁷ = −, so S₅ is an overestimate: S₅ − a₆ ≤ S ≤ S₅, that is **0.968668 ≤ S ≤ 0.969419**. The length is a₆ ≈ 0.000751 < 0.001.

| Point | What earns it |
|---|---|
| 1 | Inequality aₙ₊₁ < 0.001 set up with the correct general term |
| 1 | n = 5, justified by checking that a₅ is too big and a₆ is small enough |
| 1 | S₅ ≈ 0.969419 |
| 1 | Correct interval with the correct direction (S₅ is the upper end) |

Total: 4 points. Common error: answering n = 6, the index of the bounding term, instead of the number of terms.
</details>

## Question 7 (constructed response · stretch)

Let S = Σ (−1)ⁿ⁺¹ aₙ with aₙ = n²/(n³ + 30).

(a) Find a₁, a₂, a₃, a₄ and a₅. Are the terms decreasing from the start?
(b) Using f(x) = x²/(x³ + 30), show that the terms decrease for n ≥ 4, and explain why the series converges.
(c) Explain why the alternating series error bound can still be used for Sₙ when n ≥ 3.
(d) Find the smallest n ≥ 3 for which the alternating series error bound guarantees |S − Sₙ| < 0.04.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a₁ = 1/31 ≈ 0.0323, a₂ = 4/38 = 2/19 ≈ 0.1053, a₃ = 9/57 = 3/19 ≈ 0.1579, a₄ = 16/94 = 8/47 ≈ 0.1702, a₅ = 25/155 = 5/31 ≈ 0.1613. **No:** the terms increase from a₁ to a₄ and only then start to decrease.

**(b)** By the quotient rule, f′(x) = [2x(x³ + 30) − 3x⁴]/(x³ + 30)² = x(60 − x³)/(x³ + 30)². For x > 0 this is negative when x³ > 60, that is x > ∛60 ≈ 3.915. So f is decreasing for x ≥ 4, giving a₄ > a₅ > a₆ > … . Also aₙ → 0 (degree 2 over degree 3). The alternating series test applied to the terms from n = 4 onwards shows that this part of the series converges; adding the first three terms (a finite amount) does not change convergence. So the series converges.

**(c)** S − Sₙ is the tail ±(aₙ₊₁ − aₙ₊₂ + …). When n ≥ 3, the tail starts at index 4 or later, so its terms are decreasing and approach 0. The zigzag argument then applies to the tail, giving |S − Sₙ| ≤ aₙ₊₁. (For n = 1 or 2 the tail begins with terms that are still increasing, so the bound is not justified.)

**(d)** Let m = n + 1, so m ≥ 4. You need m²/(m³ + 30) < 0.04, that is 25m² < m³ + 30, or **m²(m − 25) + 30 > 0**.
- m = 25: 0 + 30 > 0, so the inequality holds.
- 6 ≤ m ≤ 24: m − 25 ≤ −1, so m²(m − 25) + 30 ≤ −m² + 30 < 0 (because m² ≥ 36). The inequality fails.
- m = 4 and m = 5: a₄ ≈ 0.1702 and a₅ ≈ 0.1613, both above 0.04.

So m = 25, giving **n = 24**.
Check: a₂₅ = 625/15655 = 125/3131 ≈ 0.039923 < 0.04, but a₂₄ = 576/13854 = 96/2309 ≈ 0.041576 > 0.04, so n = 23 is not enough. (Note that a₁ ≈ 0.0323 is below 0.04, but that is irrelevant: the bound is only valid once n ≥ 3.)

| Point | What earns it |
|---|---|
| 1 | Correct a₁ to a₅ and the conclusion that the terms are not decreasing at first |
| 1 | f′(x) correct, with the sign argument giving decreasing terms for n ≥ 4 |
| 1 | Convergence justified: alternating series test on the tail from n = 4, with aₙ → 0 |
| 1 | (c) explains that the bound needs only the omitted terms to satisfy the conditions |
| 1 | n = 24, with the check of a₂₄ and a₂₅ |

Total: 5 points. Acceptable alternative for (d): testing values of aₘ near 0.04 with a calculator, provided both a₂₄ and a₂₅ are shown.
</details>

## How did you do?

- **Q1 or Q5(c) wrong:** the bound is the first **omitted** term; see "The alternating series error bound" in the [study guide](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/).
- **Q2 or Q6(a) wrong:** compare with Worked example 2, and watch the difference between n and n + 1.
- **Q3, Q4 or Q5(d) wrong:** reread "Why it works: the partial sums zigzag" and Figure 1.
- **Q7 wrong:** reread "When the bound does not apply", especially the point about terms that decrease only from some index onwards.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-checklist/).
