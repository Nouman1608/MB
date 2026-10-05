---
resourceId: "mb-ap-calcbc-10.8-practice"
title: "Ratio Test for Convergence: Practice Questions (Calculus BC 10.8)"
description: "Seven original Marlbridge practice questions on the ratio test: finding L, cancelling factorials and powers, inconclusive cases and recursive terms, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.8"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Geometric series (Topic 10.2), the nth term test (Topic 10.3), p-series (Topic 10.5) and comparison tests (Topic 10.6)"
prerequisiteResources: ["mb-ap-calcbc-10.8-study-guide"]
learningObjectives:
  - "Find the ratio-test limit L for series with powers and factorials"
  - "Draw the correct conclusion from L, including L = 1"
  - "Choose another test when the ratio test gives no conclusion"
  - "Apply the ratio test to terms defined by a recursive rule"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator for any question."
related: ["mb-ap-calcbc-10.8-study-guide", "mb-ap-calcbc-10.8-revision-notes", "mb-ap-calcbc-10.8-checklist"]
next: "mb-ap-calcbc-10.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator; all sums start at n = 1; "Σ from n = 1 to ∞ of aₙ" means a₁ + a₂ + a₃ + …; L always means lim (n → ∞) |aₙ₊₁/aₙ|.

## Question 1 (multiple choice · foundation)

The ratio test is applied to Σ from n = 1 to ∞ of 7ⁿ/(n · 5ⁿ). Which statement is correct?

- (A) L = 5/7, so the series converges.
- (B) L = 7/5, so the series diverges.
- (C) L = 1, so the test gives no conclusion.
- (D) L = 7/5, so the series converges.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** aₙ₊₁/aₙ = [7ⁿ⁺¹/((n + 1) 5ⁿ⁺¹)] × [n · 5ⁿ/7ⁿ] = (7/5) · n/(n + 1). As n → ∞, n/(n + 1) → 1, so L = 7/5 > 1 and the series diverges.

- (A) uses the upside-down ratio aₙ/aₙ₊₁, which gives 1/L and the opposite conclusion.
- (C) looks only at the n/(n + 1) part and forgets the factor 7/5 from the powers.
- (D) has the right L but reverses the rule: L > 1 means divergence.
</details>

## Question 2 (multiple choice · core)

For which series does the ratio test give **no conclusion**?

- (A) Σ 2ⁿ/n!
- (B) Σ n/(n³ + 1)
- (C) Σ n(0.9)ⁿ
- (D) Σ 3ⁿ/n²

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The terms contain only powers of n, so the ratio [(n + 1)/((n + 1)³ + 1)] × [(n³ + 1)/n] tends to 1. The test is inconclusive. (The series converges by limit comparison with Σ 1/n², since the ratio of terms tends to 1.)

- (A) ratio 2/(n + 1) → 0 < 1: converges.
- (C) ratio 0.9(n + 1)/n → 0.9 < 1: converges.
- (D) ratio 3n²/(n + 1)² → 3 > 1: diverges.
</details>

## Question 3 (multiple choice · core)

Consider Σ from n = 1 to ∞ of (n + 2)!/(n! · 4ⁿ). Which statement is correct?

- (A) L = 1/4, so the series converges.
- (B) L = 4, so the series diverges.
- (C) L = 1, so the test gives no conclusion.
- (D) L = 1/4, but this only shows that the terms tend to 0; it says nothing about the series.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** First simplify: (n + 2)!/n! = (n + 2)(n + 1), so aₙ = (n + 1)(n + 2)/4ⁿ. Then aₙ₊₁/aₙ = [(n + 2)(n + 3)/4ⁿ⁺¹] × [4ⁿ/((n + 1)(n + 2))] = (n + 3)/[4(n + 1)] → 1/4. L < 1, so the series converges.

- (B) flips the ratio (or the power of 4) and gets 1/L.
- (C) cancels the factorials correctly but forgets the 4ⁿ in the denominator.
- (D) confuses the ratio test with the nth term test. L < 1 proves that the **series** converges.
</details>

## Question 4 (multiple choice · stretch)

Let k be a positive constant. For which values of k does the ratio test show that Σ from n = 1 to ∞ of n² kⁿ/3ⁿ converges?

- (A) 0 < k < 3
- (B) 0 < k ≤ 3
- (C) 0 < k < 1/3
- (D) k > 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** aₙ₊₁/aₙ = (k/3) · (n + 1)²/n² → k/3. The test shows convergence when k/3 < 1, that is 0 < k < 3.

- (B) includes k = 3, where L = 1 and the ratio test gives no conclusion. (At k = 3 the terms are n², which do not tend to 0, so the series diverges by the nth term test.)
- (C) comes from writing the condition as 3k < 1 instead of k/3 < 1, that is, putting the 3 on the wrong side.
- (D) is where L > 1, so the series diverges.
</details>

## Question 5 (calculation · core)

Use the ratio test to determine whether Σ from n = 1 to ∞ of (−2)ⁿ (n + 1)/3ⁿ⁺¹ converges or diverges.

<details>
<summary>Worked solution</summary>

1. **Terms:** aₙ = (−2)ⁿ (n + 1)/3ⁿ⁺¹. The first terms are −4/9, 4/9, −32/81, 80/243, so the signs alternate. Keep the absolute value bars.
2. **Ratio:** |aₙ₊₁/aₙ| = |(−2)ⁿ⁺¹ (n + 2)/3ⁿ⁺²| × |3ⁿ⁺¹/((−2)ⁿ (n + 1))| = **(2/3) · (n + 2)/(n + 1)**.
3. **Limit:** (n + 2)/(n + 1) → 1, so **L = 2/3**.
4. **Conclude:** L = 2/3 < 1, so **the series converges by the ratio test** (and Σ |aₙ| converges as well).

Suggested mark points (4): 1 for a correct ratio with the absolute value; 1 for simplifying the powers of −2 and 3 correctly; 1 for L = 2/3; 1 for the conclusion comparing L with 1 and naming the ratio test.

Common error: leaving out the bars and writing the ratio as −(2/3)(n + 2)/(n + 1), then concluding from "L = −2/3".
</details>

## Question 6 (constructed response · core)

(a) Use the ratio test to show that Σ from n = 1 to ∞ of n⁵/(1.2)ⁿ converges.

(b) Show that the ratio test gives no conclusion for Σ from n = 1 to ∞ of 1/(4n + 1).

(c) Use a different test to decide whether Σ from n = 1 to ∞ of 1/(4n + 1) converges.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** aₙ₊₁/aₙ = [(n + 1)⁵/(1.2)ⁿ⁺¹] × [(1.2)ⁿ/n⁵] = (1/1.2) · ((n + 1)/n)⁵ → 1/1.2 = **5/6**. Since 5/6 < 1, **the series converges by the ratio test**.

**(b)** aₙ₊₁/aₙ = (4n + 1)/(4n + 5) → **1**. L = 1, so the ratio test gives no conclusion.

**(c)** Limit comparison with the harmonic series Σ 1/n: lim [1/(4n + 1)]/(1/n) = lim n/(4n + 1) = **1/4**, a finite positive number. Σ 1/n diverges, so **Σ 1/(4n + 1) diverges by the limit comparison test**.

| Point | What earns it |
|---|---|
| 1 | (a) Correct ratio, with the factor 1/1.2 separated from ((n + 1)/n)⁵ |
| 1 | (a) L = 5/6 and the conclusion "converges by the ratio test" |
| 1 | (b) Ratio (4n + 1)/(4n + 5) → 1, so no conclusion |
| 1 | (c) Correct limit comparison with Σ 1/n, limit 1/4 (finite and positive) |
| 1 | (c) Diverges, naming the test and the harmonic series |

Total: 5 points. Acceptable alternatives for (c): direct comparison, since 1/(4n + 1) ≥ 1/(5n) for n ≥ 1 and Σ 1/(5n) diverges; or the integral test.
</details>

## Question 7 (constructed response · stretch)

A sequence of positive numbers is defined by a₁ = 2 and **aₙ₊₁ = [(3n + 1)/(5n + 2)] · aₙ** for n ≥ 1.

(a) Find a₂ and a₃.
(b) Does Σ from n = 1 to ∞ of aₙ converge? Justify your answer.
(c) A second sequence has b₁ = 1 and bₙ₊₁ = [(2n + 5)/(n + 4)] · bₙ. Does Σ bₙ converge? Justify your answer.
(d) Two more sequences start at c₁ = d₁ = 1, with cₙ₊₁ = [n/(n + 1)] · cₙ and dₙ₊₁ = [n/(n + 1)]² · dₙ. Show that the ratio test gives no conclusion for either series, then find formulas for cₙ and dₙ and decide whether each series converges.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a₂ = (4/7) · 2 = **8/7**. a₃ = (7/12) · (8/7) = **2/3**.

**(b)** The recursive rule gives the ratio directly: aₙ₊₁/aₙ = (3n + 1)/(5n + 2) → **3/5**. Since 3/5 < 1, **Σ aₙ converges by the ratio test**.

**(c)** bₙ₊₁/bₙ = (2n + 5)/(n + 4) → **2**. Since 2 > 1, **Σ bₙ diverges by the ratio test**. (Each ratio is already above 1, so the terms 1, 7/5, 21/10, 33/10, … keep growing.)

**(d)** Both ratios, n/(n + 1) and [n/(n + 1)]², tend to 1, so the ratio test gives no conclusion for either series.
- cₙ: c₂ = 1/2, c₃ = (2/3)(1/2) = 1/3, … The product telescopes: cₙ = (1/2)(2/3)(3/4)…((n − 1)/n) = **1/n**. Σ 1/n is the harmonic series, so **Σ cₙ diverges**.
- dₙ: squaring each factor gives dₙ = **1/n²**. This is a p-series with p = 2 > 1, so **Σ dₙ converges**.

So two series with L = 1 can behave in opposite ways, which is why L = 1 gives no conclusion.

| Point | What earns it |
|---|---|
| 1 | (a) a₂ = 8/7 and a₃ = 2/3 |
| 1 | (b) Ratio taken from the rule, L = 3/5, converges by the ratio test |
| 1 | (c) L = 2 > 1, diverges by the ratio test |
| 1 | (d) Both ratios → 1, so the ratio test is inconclusive |
| 1 | (d) cₙ = 1/n diverges and dₙ = 1/n² converges, with the tests named |

Total: 5 points. In (d), formulas found from a pattern in the first few terms are accepted if they are checked against the rule.
</details>

## How did you do?

- **Q1 or Q3 wrong:** check which way up the ratio goes and how powers and factorials cancel; see "Algebra you will need" and Worked example 2 in the [study guide](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/).
- **Q2, Q6 or Q7(d) wrong:** reread "When the ratio test fails: L = 1".
- **Q4 wrong:** revisit Worked example 1 and the three cases of the test.
- **Q5 wrong:** look again at why the absolute value bars are there.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-checklist/).
