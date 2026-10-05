---
resourceId: "mb-ap-calcbc-10.9-practice"
title: "Determining Absolute or Conditional Convergence: Practice Questions (Calculus BC 10.9)"
description: "Seven original Marlbridge practice questions on absolute and conditional convergence: definitions, p-series families, the ratio test, rearrangements and full justifications, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.9"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "The nth term, integral, p-series, comparison, limit comparison, alternating series and ratio tests (Topics 10.3 to 10.8)"
prerequisiteResources: ["mb-ap-calcbc-10.9-study-guide"]
learningObjectives:
  - "Classify a series as absolutely convergent, conditionally convergent or divergent"
  - "Justify a classification by naming each test and checking its conditions"
  - "Use the relationship between absolute convergence and convergence correctly in both directions"
  - "Explain when regrouping or reordering a series leaves its sum unchanged"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "All seven questions are no-calculator. Justify every conclusion with a named test."
related: ["mb-ap-calcbc-10.9-study-guide", "mb-ap-calcbc-10.9-revision-notes", "mb-ap-calcbc-10.9-checklist"]
next: "mb-ap-calcbc-10.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written justification."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for any question; ln means the natural logarithm; every series starts at n = 1 unless stated otherwise. Notation: Σ aₙ is the series a₁ + a₂ + a₃ + …, and Σ |aₙ| is the same series with every term replaced by its absolute value.

## Question 1 (multiple choice · foundation)

Which statement is always true for a series Σ aₙ?

- (A) If Σ aₙ converges, then Σ |aₙ| converges.
- (B) If Σ |aₙ| converges, then Σ aₙ converges.
- (C) If Σ |aₙ| diverges, then Σ aₙ diverges.
- (D) If aₙ → 0, then Σ aₙ converges absolutely.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Absolute convergence implies convergence. The proof uses 0 ≤ aₙ + |aₙ| ≤ 2|aₙ| and the comparison test.

- (A) is the converse, and it is false: Σ (−1)ⁿ⁺¹/n converges but Σ 1/n diverges.
- (C) is false for the same series: Σ |aₙ| = Σ 1/n diverges, yet Σ aₙ converges (conditionally).
- (D) is false: terms approaching 0 is necessary for convergence but not enough. For aₙ = 1/n, aₙ → 0 but Σ |aₙ| = Σ 1/n diverges.
</details>

## Question 2 (multiple choice · core)

For which values of p is Σ (−1)ⁿ⁺¹/nᵖ conditionally convergent?

- (A) p > 1
- (B) 0 < p ≤ 1
- (C) p ≥ 1
- (D) p > 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Σ |aₙ| = Σ 1/nᵖ is a p-series. It diverges when p ≤ 1. For p > 0 the terms 1/nᵖ decrease to 0, so the alternating series test gives convergence of Σ aₙ. Both happen exactly when 0 < p ≤ 1.

- (A) gives the values where the series is **absolutely** convergent, because Σ 1/nᵖ converges for p > 1.
- (C) includes p = 1 (conditional, correct) but also p > 1, where the convergence is absolute, not conditional.
- (D) is the set where Σ aₙ converges at all. It mixes the conditional values with the absolute ones.
</details>

## Question 3 (multiple choice · core)

Which of these series are absolutely convergent?

I. Σ (−1)ⁿ n/(n + 1)
II. Σ (−1)ⁿ 5ⁿ/n!
III. Σ (−1)ⁿ/(√n + 1)

- (A) I only
- (B) II only
- (C) II and III only
- (D) I, II and III

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

- **I diverges.** n/(n + 1) → 1, so the terms alternate between values near 1 and −1 and do not approach 0 (nth term test).
- **II is absolutely convergent.** Ratio test on |aₙ|: [5ⁿ⁺¹/(n + 1)!] × [n!/5ⁿ] = 5/(n + 1) → 0 < 1.
- **III is conditionally convergent.** Limit comparison of 1/(√n + 1) with 1/√n gives limit 1, and Σ 1/√n diverges (p = ½), so Σ |aₙ| diverges. The terms 1/(√n + 1) decrease to 0, so the alternating series test shows Σ aₙ converges.

Distractors: (A) treats series I as convergent because it alternates; alternating signs cannot rescue terms that do not approach 0. (C) treats III as absolutely convergent, but III only converges because of cancellation. (D) makes both errors.
</details>

## Question 4 (multiple choice · stretch)

A series Σ aₙ has sum 4, and Σ |aₙ| = 7. A student writes the same terms in a different order to make a new series. What can you conclude about the new series?

- (A) It converges to 4.
- (B) It converges to 7.
- (C) It converges, but its sum may not be 4.
- (D) It may diverge.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Σ |aₙ| converges (to 7), so Σ aₙ is absolutely convergent. Any rearrangement of an absolutely convergent series converges to the same value, 4.

- (B) confuses the sum of the series with the sum of its absolute values. Reordering does not turn negative terms positive.
- (C) and (D) describe what can happen to a **conditionally** convergent series. This one converges absolutely, so neither can happen.
</details>

## Question 5 (constructed response · core)

Consider the series Σ from n = 2 to ∞ of (−1)ⁿ/(n ln n).

(a) Show that Σ from n = 2 to ∞ of 1/(n ln n) diverges.
(b) Show that Σ from n = 2 to ∞ of (−1)ⁿ/(n ln n) converges.
(c) Classify the series as absolutely convergent, conditionally convergent or divergent.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use the integral test with f(x) = 1/(x ln x) on [2, ∞). f is positive and continuous there, and it is decreasing because x ln x is increasing for x ≥ 2 (both factors are positive and increasing).
∫ from 2 to b of 1/(x ln x) dx = [ln(ln x)] from 2 to b = ln(ln b) − ln(ln 2) (substitution u = ln x).
As b → ∞, ln(ln b) → ∞, so the improper integral diverges. By the integral test, **Σ 1/(n ln n) diverges**.

**(b)** Alternating series test with bₙ = 1/(n ln n) > 0 for n ≥ 2:
- the signs alternate because of (−1)ⁿ;
- bₙ is decreasing, since n ln n increases (b₂ ≈ 0.721, b₃ ≈ 0.303, b₄ ≈ 0.180);
- bₙ → 0, since n ln n → ∞.
So **Σ (−1)ⁿ/(n ln n) converges**.

**(c)** The series converges, but the series of absolute values diverges, so it is **conditionally convergent**.

| Point | What earns it |
|---|---|
| 1 | Integral test set up for 1/(x ln x), with its conditions (positive, continuous, decreasing) stated |
| 1 | Antiderivative ln(ln x) and the conclusion that the integral, and so the series, diverges |
| 1 | Alternating series test with **both** conditions shown: bₙ decreasing and bₙ → 0 |
| 1 | Classification "conditionally convergent", supported by (a) and (b) |

Total: 4 points. Note for (a): direct comparison with the harmonic series does not work here, because 1/(n ln n) is smaller than 1/n (for n ≥ 3, where ln n > 1), and being smaller than a divergent series proves nothing. An answer that only says "smaller than 1/n, so diverges" earns no credit for (a).
</details>

## Question 6 (constructed response · core)

Consider the series Σ from n = 1 to ∞ of cos(πn)(n + 1)/n³.

(a) Write the first four terms as fractions, and explain why cos(πn) = (−1)ⁿ for positive integers n.
(b) Show that the series converges absolutely.
(c) A student groups the terms in pairs: (a₁ + a₂) + (a₃ + a₄) + … . Explain why the grouped series has the same sum as the original series.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** cos(π) = −1, cos(2π) = 1, cos(3π) = −1, and so on: cos(πn) is −1 for odd n and 1 for even n, which is (−1)ⁿ.
The terms are a₁ = −2, a₂ = 3/8, a₃ = −4/27, a₄ = 5/64.

**(b)** |aₙ| = (n + 1)/n³. Use the **limit comparison test** with bₙ = 1/n²:
lim as n → ∞ of [(n + 1)/n³] ÷ (1/n²) = lim of (n + 1)/n = **1**, which is finite and positive.
Σ 1/n² is a p-series with p = 2 > 1, so it converges. Therefore Σ |aₙ| converges and the series is **absolutely convergent**.

(Direct comparison also works: n + 1 ≤ 2n for n ≥ 1, so (n + 1)/n³ ≤ 2/n², and Σ 2/n² converges.)

**(c)** The series converges absolutely (part (b)). If a series converges absolutely, then any series formed by regrouping or rearranging its terms converges to the same value. So the grouped series has the same sum.

| Point | What earns it |
|---|---|
| 1 | Correct first four terms, with the sign pattern explained |
| 1 | Works with \|aₙ\| = (n + 1)/n³ and chooses a suitable comparison series, 1/n² |
| 1 | Correct limit (1) or a correct inequality, plus the p-series reason that Σ 1/n² converges |
| 1 | Conclusion "absolutely convergent" |
| 1 | (c) uses absolute convergence as the reason regrouping keeps the sum |

Total: 5 points. A (c) answer that only says "brackets do not change a sum" earns no credit: that is true for finite sums, but for an infinite series the reason is absolute convergence.
</details>

## Question 7 (constructed response · stretch)

Let aₙ = (−1)ⁿ sin(1/n) for n ≥ 1.

(a) Show that lim as n → ∞ of n sin(1/n) = 1.
(b) Use part (a) to show that Σ |aₙ| diverges.
(c) Show that Σ aₙ converges, and classify the series.
(d) A student writes: "Σ sin(1/n) diverges, so Σ (−1)ⁿ sin(1/n) diverges." Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let t = 1/n. As n → ∞, t → 0⁺, and n sin(1/n) = sin(t)/t. Since lim as t → 0 of sin(t)/t = 1, **lim of n sin(1/n) = 1**.

**(b)** For n ≥ 1, 0 < 1/n ≤ 1 < π/2, so sin(1/n) > 0 and |aₙ| = sin(1/n). Use the **limit comparison test** with bₙ = 1/n:
lim of sin(1/n) ÷ (1/n) = lim of n sin(1/n) = **1** (part (a)), which is finite and positive.
Σ 1/n is the harmonic series, which diverges. Therefore **Σ |aₙ| diverges**.

**(c)** Let bₙ = sin(1/n) > 0. The signs alternate because of (−1)ⁿ.
- **Decreasing:** as n increases, 1/n decreases, and sin is increasing on (0, π/2), so sin(1/n) decreases (b₁ ≈ 0.841, b₂ ≈ 0.479, b₃ ≈ 0.327).
- **Limit 0:** 1/n → 0 and sin is continuous, so sin(1/n) → sin 0 = 0.

By the alternating series test, **Σ aₙ converges**. With (b), the series is **conditionally convergent**.

**(d)** The student has tested only the series of absolute values. Its divergence shows the series is not **absolutely** convergent, but a series can still converge through cancellation. Here the alternating series test shows it does converge.

| Point | What earns it |
|---|---|
| 1 | Correct limit in (a), using the substitution t = 1/n and sin(t)/t → 1 |
| 1 | Limit comparison with 1/n and the harmonic series, so Σ \|aₙ\| diverges |
| 1 | Alternating series test with both conditions (decreasing, limit 0) justified |
| 1 | "Conditionally convergent", supported by (b) and (c) |
| 1 | (d) states that divergence of Σ \|aₙ\| does not imply divergence of Σ aₙ |

Total: 5 points. Acceptable alternative for (a): L'Hospital's rule on sin(t)/t, or on sin(1/x) ÷ (1/x) as x → ∞. Acceptable alternative for (b): direct comparison using sin x ≥ 2x/π for 0 ≤ x ≤ π/2, which gives sin(1/n) ≥ (2/π)(1/n).
</details>

## How did you do?

- **Q1 or Q7(d) wrong:** reread "Why absolute convergence implies convergence" in the [study guide](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/), and note which direction is true.
- **Q2 wrong:** learn the reference family Σ (−1)ⁿ⁺¹/nᵖ table.
- **Q3 wrong:** follow the decision path (Figure 1): nth term test, then Σ |aₙ|, then Σ aₙ.
- **Q4 or Q6(c) wrong:** reread "Regrouping and reordering terms".
- **Q5, Q6(b) or Q7 wrong:** compare with Worked examples 1 and 2, and check that you stated every test condition.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-checklist/).
