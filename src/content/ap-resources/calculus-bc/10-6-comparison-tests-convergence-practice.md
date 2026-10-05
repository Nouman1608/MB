---
resourceId: "mb-ap-calcbc-10.6-practice"
title: "Comparison Tests for Convergence: Practice Questions (Calculus BC 10.6)"
description: "Seven original Marlbridge practice questions on the direct and limit comparison tests: valid directions, finding L, choosing benchmarks and writing full justifications, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.6"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity (Topic 1.15), geometric series (Topic 10.2) and p-series (Topic 10.5)"
prerequisiteResources: ["mb-ap-calcbc-10.6-study-guide"]
learningObjectives:
  - "Draw only valid conclusions from a direct comparison"
  - "Find and interpret the limit in the limit comparison test"
  - "Choose a p-series or geometric benchmark from the dominant terms"
  - "Write a complete justification that checks every condition of the test used"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "All questions are no-calculator."
related: ["mb-ap-calcbc-10.6-study-guide", "mb-ap-calcbc-10.6-revision-notes", "mb-ap-calcbc-10.6-checklist"]
next: "mb-ap-calcbc-10.6-checklist"
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
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for any question; every sum runs from n = 1 to ∞ unless stated; e ≈ 2.718 and π/2 ≈ 1.571 where needed.

## Question 1 (multiple choice · foundation)

Suppose 0 < aₙ ≤ bₙ for every n ≥ 1. Which statement **must** be true?

- (A) If ∑ aₙ converges, then ∑ bₙ converges.
- (B) If ∑ bₙ diverges, then ∑ aₙ diverges.
- (C) If ∑ bₙ converges, then ∑ aₙ converges.
- (D) If ∑ aₙ diverges, then ∑ bₙ converges.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The partial sums of ∑ aₙ increase and are never bigger than those of ∑ bₙ. If ∑ bₙ converges, its sum is a ceiling for the partial sums of ∑ aₙ, so ∑ aₙ converges.

- (A) is "bigger than convergent". Example: aₙ = 1/n² and bₙ = 1/n. ∑ aₙ converges but ∑ bₙ diverges.
- (B) is "smaller than divergent". The same example shows ∑ bₙ can diverge while ∑ aₙ converges.
- (D) is the opposite of what is true: if the smaller series diverges, the bigger one diverges too.
</details>

## Question 2 (multiple choice · core)

A student applies the limit comparison test to ∑ (3n² + 1)/(n⁴ + 2n), using bₙ = 1/n². What is L = lim aₙ/bₙ, and what can be concluded?

- (A) L = 3; the series converges.
- (B) L = 3; the series diverges.
- (C) L = 0; the series converges.
- (D) L = 1/3; no conclusion is possible.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** aₙ/bₙ = n²(3n² + 1)/(n⁴ + 2n) = (3n⁴ + n²)/(n⁴ + 2n). Divide by n⁴: (3 + 1/n²)/(1 + 2/n³) → 3. Since 0 < 3 < ∞ and ∑ 1/n² converges (p = 2), the series converges. All terms are positive.

- (B) has the right L but the wrong conclusion: the benchmark converges, so the series converges.
- (C) comes from comparing with 1/n instead of 1/n² (that limit is 0). With L = 0 and a divergent benchmark, the basic test gives no conclusion anyway.
- (D) computes bₙ/aₙ instead of aₙ/bₙ. Even so, 1/3 is finite and positive, so a conclusion *would* still follow; "no conclusion" is wrong either way.
</details>

## Question 3 (multiple choice · core)

Each statement below is true for every n ≥ 1. Which one, together with what you know about the benchmark series, gives **no conclusion** about the series on the left?

- (A) 1/(n³ + 2) < 1/n³
- (B) 1/(n − 1/2) > 1/n
- (C) 1/(n + 2) < 1/n
- (D) (n + 1)/n² > 1/n

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ∑ 1/n diverges, and 1/(n + 2) is *smaller*. Smaller than divergent gives no information. (∑ 1/(n + 2) does diverge, but you need another reason, such as a shift of the index or limit comparison.)

- (A) Smaller than the convergent ∑ 1/n³ (p = 3): ∑ 1/(n³ + 2) converges.
- (B) Bigger than the divergent harmonic series: ∑ 1/(n − 1/2) diverges.
- (D) (n + 1)/n² = 1/n + 1/n² > 1/n, bigger than divergent: the series diverges.
</details>

## Question 4 (multiple choice · stretch)

Which of the following series converges?

- (A) ∑ 1/(3n − 2)
- (B) ∑ √n/(n + 4)
- (C) ∑ n/(n³ + 5)
- (D) ∑ (n² + 1)/(n³ + 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Dominant terms n/n³ = 1/n². Limit comparison with 1/n²: n³/(n³ + 5) → 1, and ∑ 1/n² converges. (Direct comparison also works: n/(n³ + 5) < n/n³ = 1/n².)

- (A) behaves like 1/(3n). Limit comparison with 1/n gives L = 1/3, so it diverges like the harmonic series.
- (B) behaves like √n/n = 1/√n. Limit comparison with 1/√n gives L = 1, and p = 1/2 ≤ 1, so it diverges.
- (D) behaves like n²/n³ = 1/n. Limit comparison with 1/n gives L = 1, so it diverges.
</details>

## Question 5 (calculation · core)

Let aₙ = (2n + 5)/(n^(5/2) + 3).

(a) Use the limit comparison test to decide whether ∑ aₙ converges.
(b) A student tries the direct comparison aₙ ≤ 2/n^(3/2). Show that this inequality is false for every n ≥ 2.
(c) Give a direct comparison that does work.

<details>
<summary>Worked solution</summary>

**(a)** aₙ > 0 for all n ≥ 1. Dominant terms: 2n/n^(5/2) = 2/n^(3/2), so take bₙ = 1/n^(3/2).
aₙ/bₙ = (2n + 5) n^(3/2)/(n^(5/2) + 3) = (2n^(5/2) + 5n^(3/2))/(n^(5/2) + 3). Divide by n^(5/2): (2 + 5/n)/(1 + 3/n^(5/2)) → **2**.
0 < 2 < ∞ and ∑ 1/n^(3/2) converges (p = 3/2 > 1), so **∑ aₙ converges** by the limit comparison test.

**(b)** Compare (2n + 5) n^(3/2) with 2(n^(5/2) + 3). Their difference is 2n^(5/2) + 5n^(3/2) − 2n^(5/2) − 6 = 5n^(3/2) − 6. For n ≥ 2, n^(3/2) ≥ 2√2 > 2, so 5n^(3/2) − 6 > 4 > 0. So aₙ > 2/n^(3/2) for every n ≥ 2: the inequality points the wrong way. (It does hold at n = 1, where a₁ = 7/4 < 2, but one term is not enough.)

**(c)** For n ≥ 1, 2n + 5 ≤ 2n + 5n = 7n, and n^(5/2) + 3 > n^(5/2). So 0 < aₙ < 7n/n^(5/2) = 7/n^(3/2). ∑ 7/n^(3/2) converges (constant multiple of p = 3/2), so ∑ aₙ converges by direct comparison.

Suggested mark points (5): 1 for the benchmark 1/n^(3/2); 1 for L = 2 with working; 1 for the conclusion with "0 < L < ∞" and the benchmark's p stated; 1 for showing the difference 5n^(3/2) − 6 > 0 for n ≥ 2; 1 for a valid direct comparison with a convergent benchmark.
</details>

## Question 6 (constructed response · core)

(a) Show that ∑ arctan(n)/n² converges.
(b) Show that ∑ (1 + e^(−n))/n diverges.
(c) Explain why the true inequality (1 + e^(−n))/n < 2/n does **not** help in part (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For n ≥ 1, π/4 ≤ arctan n < π/2, so every term is positive and
0 < arctan(n)/n² < (π/2)/n².
∑ (π/2)/n² is a constant multiple of the p-series with p = 2 > 1, so it converges. By the direct comparison test, **∑ arctan(n)/n² converges**.

**(b)** e^(−n) > 0, so 1 + e^(−n) > 1 and (1 + e^(−n))/n > 1/n > 0 for every n ≥ 1.
∑ 1/n is the harmonic series, which diverges. By the direct comparison test, **∑ (1 + e^(−n))/n diverges**.

**(c)** ∑ 2/n diverges (twice the harmonic series). A series whose terms are **smaller** than those of a divergent series could converge or diverge, so this comparison gives no conclusion.

| Point | What earns it |
|---|---|
| 1 | Bound 0 < arctan n < π/2 used to get aₙ < (π/2)/n² |
| 1 | Benchmark identified as convergent (p = 2) and conclusion by direct comparison |
| 1 | Inequality (1 + e^(−n))/n > 1/n with a reason (e^(−n) > 0) |
| 1 | Harmonic series named as divergent and conclusion by direct comparison |
| 1 | (c) explains that "smaller than divergent" gives no information |

Total: 5 points. Acceptable alternative for (a) and (b): limit comparison with 1/n² (L = π/2) and with 1/n (L = 1). Each needs the limit with a reason, for example arctan n → π/2 and e^(−n) → 0.
</details>

## Question 7 (constructed response · stretch)

Consider ∑ 2ⁿ/(3ⁿ − n).

(a) Explain why the direct comparison 2ⁿ/(3ⁿ − n) ≤ (2/3)ⁿ fails.
(b) Use the limit comparison test with bₙ = (2/3)ⁿ to show that the series converges. You may use the fact that n/3ⁿ → 0.
(c) Show that n ≤ ½ · 3ⁿ for every n ≥ 1. Deduce that 2ⁿ/(3ⁿ − n) ≤ 2(2/3)ⁿ, and hence find an upper bound for the sum of the series.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For n ≥ 1, 3ⁿ − n < 3ⁿ, so the denominator is **smaller** than 3ⁿ and the fraction is **bigger**: 2ⁿ/(3ⁿ − n) > (2/3)ⁿ. Bigger than a convergent series gives no conclusion. (For example, a₁ = 2/2 = 1 > 2/3.)

**(b)** 3ⁿ − n = 2, 7, 24, … is positive for n ≥ 1, so aₙ > 0; also bₙ > 0.
aₙ/bₙ = [2ⁿ/(3ⁿ − n)] · [3ⁿ/2ⁿ] = 3ⁿ/(3ⁿ − n) = 1/(1 − n/3ⁿ) → 1/(1 − 0) = **1**.
0 < 1 < ∞, and ∑ (2/3)ⁿ is geometric with |r| = 2/3 < 1, so it converges. By the limit comparison test, **the series converges**.

**(c)** At n = 1: 1 ≤ 3/2. When n increases by 1, the left side goes up by 1, while the right side triples, going up by 3ⁿ ≥ 3. So the inequality stays true for every n ≥ 1.
Then 3ⁿ − n ≥ 3ⁿ − ½ · 3ⁿ = ½ · 3ⁿ, so aₙ ≤ 2ⁿ/(½ · 3ⁿ) = 2(2/3)ⁿ.
∑ from n = 1 of (2/3)ⁿ = (2/3)/(1 − 2/3) = 2, so the sum of the series is **at most 2 × 2 = 4**.

| Point | What earns it |
|---|---|
| 1 | (a) shows aₙ > (2/3)ⁿ and says bigger than convergent gives no conclusion |
| 1 | Correct ratio aₙ/bₙ = 3ⁿ/(3ⁿ − n), simplified |
| 1 | Limit 1 with a reason, conclusion with 0 < L < ∞ and the geometric benchmark justified |
| 1 | Valid argument that n ≤ ½ · 3ⁿ for all n ≥ 1, leading to aₙ ≤ 2(2/3)ⁿ |
| 1 | Geometric sum 2 and bound 4 |

Total: 5 points. Background: adding terms numerically gives a sum of about 2.51, which is below the bound of 4. Part (c) on its own is also a complete proof of convergence, by direct comparison.
</details>

## How did you do?

- **Q1 or Q3 wrong:** study Figure 1 (the four cases) in the [study guide](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/).
- **Q2 or Q5 wrong:** rework the limit by dividing by the highest power; see Worked example 2.
- **Q4 wrong:** reread "Choosing bₙ" and its table of dominant terms.
- **Q6 wrong:** review the inequality tricks and Worked example 1.
- **Q7 wrong:** compare with Worked example 3 (geometric benchmarks) and "Writing a complete justification".

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-checklist/).
