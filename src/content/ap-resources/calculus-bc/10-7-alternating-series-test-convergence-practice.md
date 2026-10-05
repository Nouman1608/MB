---
resourceId: "mb-ap-calcbc-10.7-practice"
title: "Alternating Series Test for Convergence: Practice Questions (Calculus BC 10.7)"
description: "Seven original Marlbridge practice questions on the alternating series test: spotting alternating series, checking both conditions and writing justifications, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.7"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity and L'Hospital's Rule (Topics 1.15 and 4.7), the nth term test (Topic 10.3) and comparison tests (Topic 10.6)"
prerequisiteResources: ["mb-ap-calcbc-10.7-study-guide"]
learningObjectives:
  - "Decide whether the alternating series test applies and what it concludes"
  - "Show that terms decrease, from some point on, using a derivative"
  - "Use the nth term test when the terms do not tend to 0"
  - "Write complete justifications that name the test and verify its conditions"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator for any question. Decimal values quoted in the solutions are only there to show patterns."
related: ["mb-ap-calcbc-10.7-study-guide", "mb-ap-calcbc-10.7-revision-notes", "mb-ap-calcbc-10.7-checklist"]
next: "mb-ap-calcbc-10.7-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator; all sums start at n = 1 unless stated; "Σ from n = 1 to ∞ of bₙ" means b₁ + b₂ + b₃ + …; for an alternating series, aₙ is the positive size of the nth term.

## Question 1 (multiple choice · foundation)

Which series can be shown to converge using the alternating series test?

- (A) Σ from n = 1 to ∞ of (−1)²ⁿ/n
- (B) Σ from n = 1 to ∞ of (−1)ⁿ (n + 4)/n
- (C) Σ from n = 1 to ∞ of (−1)ⁿ/√(2n + 7)
- (D) Σ from n = 1 to ∞ of (−1)ⁿ (1.1)ⁿ/n

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The series is alternating with aₙ = 1/√(2n + 7) > 0. As n increases, 2n + 7 increases, so aₙ decreases. Also lim 1/√(2n + 7) = 0. Both conditions hold, so the series converges.

- (A) is not alternating: (−1)²ⁿ = 1 for every n, so this is Σ 1/n, the harmonic series, which diverges.
- (B) has aₙ = (n + 4)/n → 1, not 0. The alternating series test cannot be used, and the nth term test shows the series diverges.
- (D) has aₙ = (1.1)ⁿ/n, which grows without bound (exponential beats linear), so the terms do not tend to 0. The series diverges by the nth term test.
</details>

## Question 2 (multiple choice · core)

Consider Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ n/(n² + 10). The first terms of aₙ = n/(n² + 10) are 1/11, 1/7, 3/19, 2/13, 1/7, … Which statement is correct?

- (A) The series diverges, because aₙ does not decrease for all n ≥ 1.
- (B) The series converges by the alternating series test, because aₙ decreases for n ≥ 4 and lim aₙ = 0.
- (C) The series diverges by the nth term test.
- (D) The alternating series test shows that Σ n/(n² + 10) also converges.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With f(x) = x/(x² + 10), f′(x) = (10 − x²)/(x² + 10)², which is negative for x > √10 ≈ 3.16. So aₙ₊₁ ≤ aₙ for n ≥ 4. (In fact a₃ = 3/19 > a₄ = 2/13 as well, so the fall starts at n = 3.) Also lim n/(n² + 10) = 0. Decreasing from some point on is enough, so the series converges.

- (A) treats an early rise (a₁ < a₂ < a₃) as a failure. Only eventual behaviour matters, and a failed condition would not prove divergence anyway.
- (C) is wrong because the terms do tend to 0; the nth term test then gives no conclusion.
- (D) is wrong: the test is about the alternating series only. Σ n/(n² + 10) diverges by limit comparison with Σ 1/n (ratio limit 1).
</details>

## Question 3 (multiple choice · core)

A series has terms ½ − 1/8 + 1/6 − 1/64 + 1/10 − 1/216 + …, so aₙ = 1/(2n) when n is odd and aₙ = 1/n³ when n is even. Which statement about the alternating series test is correct?

- (A) It shows that the series converges, because aₙ → 0.
- (B) It shows that the series diverges, because aₙ does not decrease.
- (C) It cannot be used, because aₙ does not decrease; another method is needed.
- (D) It cannot be used, because lim aₙ is not 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The terms do tend to 0, but they are not decreasing even eventually: for every even n, aₙ = 1/n³ is smaller than aₙ₊₁ = 1/(2n + 2). One condition fails, so the test gives no conclusion. (The series in fact diverges: the positive terms ½(1 + ⅓ + ⅕ + …) grow without bound, while the negative terms form a convergent p-series with p = 3.)

- (A) checks only the limit condition. Both conditions are needed.
- (B) claims the test proves divergence. It never does.
- (D) is false: 1/(2n) → 0 and 1/n³ → 0, so aₙ → 0.
</details>

## Question 4 (multiple choice · stretch)

For which real numbers k does the alternating series test show that Σ from n = 1 to ∞ of (−1)ⁿ nᵏ/(n² + 1) converges?

- (A) k < 1
- (B) k < 2
- (C) k ≤ 2
- (D) all real k

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Here aₙ = nᵏ/(n² + 1) > 0. Dividing top and bottom by n² gives aₙ = n^(k − 2)/(1 + 1/n²), which tends to 0 exactly when k < 2. For decreasing, let f(x) = xᵏ/(x² + 1). Then f′(x) = x^(k − 1)[(k − 2)x² + k]/(x² + 1)². When k < 2, the bracket (k − 2)x² + k is negative for all large x, so f decreases from some point on. Both conditions hold for every k < 2.

- (A) k < 1 is the condition for Σ nᵏ/(n² + 1) without signs to converge (limit comparison with a p-series, p = 2 − k > 1). It leaves out 1 ≤ k < 2, such as k = 1.
- (C) includes k = 2, where aₙ = n²/(n² + 1) → 1. The series then diverges by the nth term test.
- (D) includes k ≥ 2, where the terms do not tend to 0.
</details>

## Question 5 (calculation · core)

Determine whether Σ from n = 1 to ∞ of cos(nπ) · 6/(n + √n) converges or diverges. Justify your answer.

<details>
<summary>Worked solution</summary>

1. **Rewrite the sign.** cos(nπ) = (−1)ⁿ, so the series is Σ (−1)ⁿ aₙ with **aₙ = 6/(n + √n) > 0**. It is alternating: −3 + 6/(2 + √2) − 6/(3 + √3) + 1 − … (about −3, 1.757, −1.268, 1, …).
2. **Decreasing.** Both n and √n increase with n, so (n + 1) + √(n + 1) > n + √n. A larger denominator with the same numerator 6 gives a smaller fraction: 6/((n + 1) + √(n + 1)) < 6/(n + √n). So **aₙ₊₁ < aₙ for all n ≥ 1**.
3. **Limit.** As n → ∞, n + √n → ∞, so **lim aₙ = 0**.
4. **Conclude.** aₙ is positive, decreasing and tends to 0, so **the series converges by the alternating series test**.

Suggested mark points (4): 1 for rewriting cos(nπ) as (−1)ⁿ and identifying aₙ; 1 for showing aₙ decreases with a reason; 1 for lim aₙ = 0; 1 for the conclusion that names the alternating series test.

Common error: writing "the terms get smaller" with no reason. Listing four terms does not prove it.
</details>

## Question 6 (constructed response · core)

(a) Determine whether Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ (4n − 1)/(5n + 2) converges or diverges. Justify your answer.

(b) Explain why the alternating series test cannot be used to reach your conclusion in part (a).

(c) Determine whether Σ from n = 1 to ∞ of (−1)ⁿ n e⁻ⁿ converges or diverges. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (4n − 1)/(5n + 2) = lim (4 − 1/n)/(5 + 2/n) = **4/5**. So the terms (−1)ⁿ⁺¹ (4n − 1)/(5n + 2) swing between values near 4/5 and −4/5 and do not tend to 0. By the **nth term test**, the series **diverges**.

**(b)** The alternating series test only ever concludes convergence. Here its limit condition fails (aₙ → 4/5, not 0), so it gives no conclusion at all. It cannot be used to show divergence.

**(c)** aₙ = n e⁻ⁿ = n/eⁿ > 0. Let f(x) = x e⁻ˣ. Then f′(x) = e⁻ˣ − x e⁻ˣ = (1 − x) e⁻ˣ, which is negative for x > 1, so f decreases on [1, ∞) and **aₙ₊₁ ≤ aₙ for n ≥ 1**. (Terms: about 0.368, 0.271, 0.149, 0.073.) The limit lim n/eⁿ has the form ∞/∞; by L'Hospital's Rule it equals lim 1/eⁿ = **0**. So the series **converges by the alternating series test**.

| Point | What earns it |
|---|---|
| 1 | (a) lim aₙ = 4/5 with working |
| 1 | (a) Diverges, naming the nth term test |
| 1 | (b) The test can only show convergence, and its limit condition fails here |
| 1 | (c) Decreasing shown with f′(x) = (1 − x) e⁻ˣ < 0 for x > 1 |
| 1 | (c) lim n/eⁿ = 0 and the conclusion naming the alternating series test |

Total: 5 points. Acceptable alternative in (c): show aₙ₊₁/aₙ = (n + 1)/(n e) ≤ 2/e < 1 for n ≥ 1.
</details>

## Question 7 (constructed response · stretch)

Consider the series Σ from n = 2 to ∞ of (−1)ⁿ (ln n)²/n, with aₙ = (ln n)²/n.

(a) Show that aₙ decreases for n ≥ 8.
(b) Find lim aₙ.
(c) Does the series converge? Justify your answer.
(d) A student notices that a₂ < a₃ < a₄ and says, "The terms are not decreasing, so the alternating series test cannot be used." Explain the error.
(e) Does Σ from n = 2 to ∞ of (ln n)²/n, without the signs, converge? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let f(x) = (ln x)²/x for x ≥ 2. By the quotient rule, f′(x) = [2 ln x · (1/x) · x − (ln x)²]/x² = **ln x (2 − ln x)/x²**. For x > e² ≈ 7.39, ln x > 2, so 2 − ln x < 0 while ln x > 0 and x² > 0. So f′(x) < 0 and f decreases on [e², ∞). Since 8 > e², **aₙ₊₁ ≤ aₙ for n ≥ 8**.

**(b)** lim (ln x)²/x has the form ∞/∞. L'Hospital's Rule: lim [2 ln x · (1/x)]/1 = lim 2 ln x / x, again ∞/∞. Once more: lim (2/x)/1 = 0. So **lim aₙ = 0**.

**(c)** Yes. For n ≥ 8, aₙ is positive, decreasing and tends to 0, so the series **converges by the alternating series test**.

**(d)** The test only needs the terms to decrease **from some point on**. The early terms (a₂ ≈ 0.240, a₃ ≈ 0.402, a₄ ≈ 0.480, rising to a₇ ≈ 0.541) do not affect convergence, because removing finitely many terms does not change whether a series converges.

**(e)** No. For n ≥ 3, ln n > 1, so (ln n)² > 1 and (ln n)²/n > 1/n > 0. Σ 1/n diverges (harmonic series), so **Σ (ln n)²/n diverges by the direct comparison test**.

| Point | What earns it |
|---|---|
| 1 | (a) Correct f′(x) and the sign argument for x > e² |
| 1 | (b) Limit 0 with L'Hospital's Rule applied correctly (twice) |
| 1 | (c) Converges, naming the alternating series test with both conditions referenced |
| 1 | (d) Decreasing from some n on is enough; early terms do not affect convergence |
| 1 | (e) Diverges by comparison with Σ 1/n, with the inequality stated |

Total: 5 points. Acceptable alternative for (e): the integral test, since an antiderivative of (ln x)²/x is (ln x)³/3, which grows without bound, so ∫ from 2 to ∞ of (ln x)²/x dx diverges.
</details>

## How did you do?

- **Q1 or Q5 wrong:** reread "What an alternating series is" in the [study guide](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/), especially cos(nπ) and (−1)²ⁿ.
- **Q2 or Q7 wrong:** work through Worked example 1 (terms that decrease only eventually).
- **Q3 wrong:** see Common misconceptions: both conditions are needed.
- **Q4 or Q6 wrong:** revisit Worked example 2 and the role of the nth term test.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-checklist/).
