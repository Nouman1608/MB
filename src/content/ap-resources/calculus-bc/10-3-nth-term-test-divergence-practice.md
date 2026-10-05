---
resourceId: "mb-ap-calcbc-10.3-practice"
title: "The nth Term Test for Divergence: Practice Questions (Calculus BC 10.3)"
description: "Seven original Marlbridge practice questions on the nth term test: limits of terms, the inconclusive case, a parameter question and a savings context, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.3"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity (Topic 1.15), L'Hospital's Rule (Topic 4.7), partial sums (Topic 10.1) and geometric series (Topic 10.2)"
prerequisiteResources: ["mb-ap-calcbc-10.3-study-guide"]
learningObjectives:
  - "Find the limit of the terms of a series and apply the nth term test"
  - "State correctly when the nth term test is inconclusive"
  - "Use the fact that a convergent series has terms approaching 0"
  - "Write a complete divergence justification, including in context"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator for any question. Exact values are expected; simple decimals are given where they help."
related: ["mb-ap-calcbc-10.3-study-guide", "mb-ap-calcbc-10.3-revision-notes", "mb-ap-calcbc-10.3-checklist"]
next: "mb-ap-calcbc-10.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator; angles in radians; every series starts at n = 1 unless stated. Notation: "∑ aₙ" means the series ∑ from n = 1 to ∞ of aₙ, and Sₙ = a₁ + a₂ + … + aₙ is its nth partial sum.

## Question 1 (multiple choice · foundation)

For which series does the nth term test prove divergence?

- (A) ∑ (6n + 1)/(3n − 1)
- (B) ∑ 4/(n² + 1)
- (C) ∑ (0.6)ⁿ
- (D) ∑ 5/√n

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The highest powers match, so (6n + 1)/(3n − 1) → 6/3 = 2. Since 2 ≠ 0, the series diverges by the nth term test.

- (B) 4/(n² + 1) → 0, so the test gives no conclusion. (The series actually converges, but this test cannot show that.)
- (C) (0.6)ⁿ → 0, so the test gives no conclusion. It is a convergent geometric series with |r| = 0.6 < 1.
- (D) 5/√n → 0, so the test gives no conclusion. (This series diverges, but you need a later test, from Topic 10.5, to show it.)
</details>

## Question 2 (multiple choice · foundation)

A series ∑ aₙ has terms with lim (n → ∞) of aₙ = 0. What can you conclude from the nth term test alone?

- (A) The series converges.
- (B) The series diverges.
- (C) The series converges, and its sum is 0.
- (D) Nothing: the test gives no conclusion.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The nth term test can only show divergence, and only when the terms do **not** approach 0. When aₙ → 0, the series might converge (for example ∑ (0.5)ⁿ) or diverge (for example the block series 1 + ½ + ½ + ⅓ + ⅓ + ⅓ + … in Worked example 3 of the study guide).

- (A) treats "terms approach 0" as enough for convergence. It is necessary, not sufficient.
- (B) reverses the test: divergence follows when the limit is **not** 0.
- (C) confuses the limit of the terms with the sum. The sum is the limit of the partial sums; ∑ (0.5)ⁿ, for instance, has sum 1.
</details>

## Question 3 (multiple choice · core)

Consider ∑ n sin(3/n). Which statement is correct?

- (A) lim aₙ = 0, so the nth term test is inconclusive.
- (B) lim aₙ = 3, so the series diverges by the nth term test.
- (C) lim aₙ = 1, so the series diverges by the nth term test.
- (D) lim aₙ = 3, so the series converges to 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Write aₙ = sin(3/n)/(1/n), a 0/0 form. With a continuous x and L'Hospital's Rule: [cos(3/x) · (−3/x²)] / (−1/x²) = 3 cos(3/x) → 3. So lim aₙ = 3 ≠ 0 and the series diverges.

- (A) uses sin(3/n) → 0 and forgets the factor n, which grows. The product is an ∞ · 0 form, not 0.
- (C) uses the limit sin u / u → 1 but forgets the chain-rule factor 3 (u = 3/n, so n sin(3/n) = 3 · sin u / u).
- (D) finds the right limit but confuses the limit of the terms with the sum. Terms approaching 3 make the series diverge.
</details>

## Question 4 (multiple choice · stretch)

A series ∑ aₙ is known to converge, and aₙ ≠ −2 for every n. What is lim (n → ∞) of (6aₙ + 1)/(aₙ + 2)?

- (A) 1/2
- (B) 6
- (C) 0
- (D) It cannot be found without knowing the sum of the series.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** If a series converges, its terms approach 0 (this is the fact behind the nth term test). So aₙ → 0, and the expression is continuous at 0: (6 · 0 + 1)/(0 + 2) = 1/2.

- (B) treats aₙ as if it grows without bound and takes the ratio of the coefficients, 6/1. For a convergent series the terms approach 0.
- (C) assumes every part of the expression approaches 0, forgetting the constants 1 and 2.
- (D) confuses the limit of the terms with the sum. Only lim aₙ = 0 is needed, and that follows from convergence alone.
</details>

## Question 5 (calculation · core)

For each series, find lim aₙ and state what the nth term test shows.

(a) ∑ (2n³ − n)/(5n³ + 4n²)
(b) ∑ (−1)ⁿ n²/(n² + 1)
(c) ∑ 6n/(n² + 5)
(d) ∑ [ln(5n + 1) − ln n]

<details>
<summary>Worked solution</summary>

**(a)** Divide top and bottom by n³: (2 − 1/n²)/(5 + 4/n) → **2/5 ≠ 0**. Diverges by the nth term test.

**(b)** The size n²/(n² + 1) → 1, and the sign alternates. Even terms → +1 and odd terms → −1, so **lim aₙ does not exist**. It is not 0, so the series diverges by the nth term test.

**(c)** The bottom has the higher power: 6n/(n² + 5) = (6/n)/(1 + 5/n²) → **0**. The nth term test is **inconclusive**.

**(d)** Combine: ln(5n + 1) − ln n = ln((5n + 1)/n) = ln(5 + 1/n) → **ln 5 ≠ 0** (about 1.609). Diverges by the nth term test.

Suggested mark points (4): 1 for each part with the correct limit **and** the correct conclusion. A part with "converges" in (c) earns 0 for that part.

Common error in (d): treating ln(5n + 1) − ln n as "∞ − ∞ = 0". Combine the logs first.
</details>

## Question 6 (constructed response · core)

For a constant c, let aₙ = (c n² + 4n)/(5n² + 1).

(a) Let c = 3. Show that ∑ aₙ diverges, using the nth term test.
(b) Find the value of c for which the nth term test gives no conclusion about ∑ aₙ. Show your reasoning.
(c) For the value of c in (b), a student writes: "The terms approach 0, so by the nth term test ∑ aₙ converges." Explain the error.
(d) Let c = −5. What does the nth term test show? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Divide top and bottom by n²: (3 + 4/n)/(5 + 1/n²) → **3/5**. Since 3/5 ≠ 0, ∑ aₙ diverges by the nth term test.

**(b)** In general, (c + 4/n)/(5 + 1/n²) → c/5. The test gives no conclusion only when this limit is 0, so **c = 0**. Then aₙ = 4n/(5n² + 1) → 0.

**(c)** The nth term test can only prove **divergence**, and only when lim aₙ ≠ 0. When lim aₙ = 0 it gives no conclusion, so it cannot show that the series converges. (Terms approaching 0 are needed for convergence but are not enough on their own.)

**(d)** aₙ → −5/5 = **−1**. Since −1 ≠ 0, ∑ aₙ diverges by the nth term test. A negative limit counts: the test asks only whether the limit is 0.

| Point | What earns it |
|---|---|
| 1 | Limit 3/5 for c = 3, using the highest powers |
| 1 | Conclusion "diverges", with the limit compared with 0 and the test named |
| 1 | General limit c/5 (or equivalent reasoning) leading to c = 0 |
| 1 | States that the nth term test is inconclusive when the limit is 0, so it cannot prove convergence |
| 1 | Limit −1 and conclusion "diverges" for c = −5 |

Total: 5 points. An answer of "diverges" with no limit stated earns at most 1 of the 2 points in part (a), and no point in part (d).
</details>

## Question 7 (constructed response · stretch)

Two fictional savings plans add money to an account at the end of each month. In month n, Plan A adds **dₙ = 50n/(n + 4)** dollars and Plan B adds **bₙ = 80(0.75)ⁿ⁻¹** dollars. Assume each plan runs forever.

(a) Find lim dₙ. Use the nth term test to decide whether the total ∑ dₙ is finite. Interpret your answer in context.
(b) Find lim bₙ. What does the nth term test tell you about ∑ bₙ?
(c) Decide whether ∑ bₙ converges. If it does, find the total amount Plan B ever adds.
(d) A student says: "Plan A's monthly amounts level off at 50 dollars, so its total must level off too." Explain why this is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dₙ = 50n/(n + 4) = 50/(1 + 4/n) → **50**. Since 50 ≠ 0, ∑ dₙ diverges by the nth term test. In context: Plan A adds nearly 50 dollars every month in the long run (d₁₀ = 250/7 ≈ 35.71, d₁₀₀ = 625/13 ≈ 48.08), so the total grows without bound.

**(b)** bₙ = 80(0.75)ⁿ⁻¹ → **0**, because 0 < 0.75 < 1. The nth term test is **inconclusive** for ∑ bₙ.

**(c)** ∑ bₙ is geometric with first term 80 and ratio r = 0.75 (the terms are 80, 60, 45, …). Since |r| < 1 it converges, and the total is 80/(1 − 0.75) = **320 dollars**.

**(d)** Levelling off of the **monthly amounts** (the terms) is not the same as levelling off of the **total** (the partial sums). Each month adds close to 50 dollars, so after N more months the total has risen by roughly 50N dollars. For the total to have a finite limit, the monthly amounts would have to approach 0.

| Point | What earns it |
|---|---|
| 1 | lim dₙ = 50 with a correct reason |
| 1 | Concludes ∑ dₙ diverges by the nth term test, with an interpretation (total grows without bound) |
| 1 | lim bₙ = 0 and states the nth term test is inconclusive |
| 1 | Identifies a geometric series with a = 80 and r = 0.75 (between −1 and 1), and finds the total 320 dollars |
| 1 | Explains the difference between terms and partial sums in (d) |

Total: 5 points. Acceptable alternative for (c): Sₙ = 320(1 − 0.75ⁿ) → 320. An answer to (c) of "converges because bₙ → 0" earns no point, even with 320 dollars, because the reason given is not valid.
</details>

## How did you do?

- **Q1, Q3 or Q5 wrong:** practise finding limits; see Worked examples 1 and 2 in the [study guide](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/).
- **Q2 or Q6(c) wrong:** reread "Why the terms of a convergent series must go to 0" and Worked example 3.
- **Q4 wrong:** revisit "Using the fact forwards".
- **Q6(a), (b) or (d) wrong:** practise dominant terms again (Worked example 1) and check you compare the limit with 0, not with 1.
- **Q7 wrong:** compare terms and totals again, and review geometric series from Topic 10.2.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-checklist/).
