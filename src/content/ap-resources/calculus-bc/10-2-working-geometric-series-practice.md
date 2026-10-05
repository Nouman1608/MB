---
resourceId: "mb-ap-calcbc-10.2-practice"
title: "Working with Geometric Series: Practice Questions (Calculus BC 10.2)"
description: "Seven original Marlbridge practice questions on geometric series: sums, first terms, ratios containing x, repeating decimals, partial sums and a context, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.2"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "The definition of convergence (Topic 10.1), laws of exponents and logarithms"
prerequisiteResources: ["mb-ap-calcbc-10.2-study-guide"]
learningObjectives:
  - "Identify the first term and common ratio of a geometric series and find its sum"
  - "Decide whether a geometric series converges, including when the ratio contains x"
  - "Use the partial-sum formula, including solving for the number of terms"
  - "Model a context with a geometric series and justify a conclusion"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5: no calculator. Questions 6 and 7: calculator allowed for powers and logarithms; give decimals to 3 decimal places unless told otherwise."
related: ["mb-ap-calcbc-10.2-study-guide", "mb-ap-calcbc-10.2-revision-notes", "mb-ap-calcbc-10.2-checklist"]
next: "mb-ap-calcbc-10.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for Questions 1–5; in Questions 6 and 7 a calculator may be used for powers and logarithms, and decimals should be given to 3 decimal places. Notation: a is the first term of a geometric series, r is its common ratio and Sₙ is the sum of its first n terms. The data in Question 7 are fictional.

## Question 1 (multiple choice · foundation)

What is the sum of Σ from n = 0 to ∞ of 5(1/4)ⁿ?

- (A) 4
- (B) 5/3
- (C) 20/3
- (D) 15/4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The first term (n = 0) is 5 and r = 1/4, with |r| < 1. Sum = 5/(1 − 1/4) = 5/(3/4) = 20/3.

- (A) divides by 1 + r instead of 1 − r: 5/(5/4) = 4.
- (B) uses 5/4 as the first term, as if the series started at n = 1: (5/4)/(3/4) = 5/3.
- (D) multiplies by (1 − r) instead of dividing: 5 · 3/4 = 15/4.
</details>

## Question 2 (multiple choice · core)

What is the sum of Σ from n = 1 to ∞ of (−2)ⁿ/7ⁿ⁻¹?

- (A) −14/9
- (B) −14/5
- (C) 7/9
- (D) The series diverges because its terms alternate in sign.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The terms are −2, 4/7, −8/49, …. The first term (n = 1) is −2 and the ratio is (4/7) ÷ (−2) = −2/7, with |r| < 1. Sum = −2/(1 − (−2/7)) = −2/(9/7) = −14/9.

- (B) drops the minus sign of the ratio: −2/(1 − 2/7) = −2/(5/7) = −14/5.
- (C) takes the first term to be 1, as in the plain form Σ rⁿ, instead of substituting n = 1: 1/(9/7) = 7/9.
- (D) is false: alternating signs come from a negative ratio. Since |−2/7| < 1, the series converges.
</details>

## Question 3 (multiple choice · core)

For which values of x does Σ from n = 1 to ∞ of (3x)ⁿ converge?

- (A) −1/3 < x < 1/3
- (B) −1/3 ≤ x ≤ 1/3
- (C) x < 1/3
- (D) −3 < x < 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The ratio is r = 3x. A geometric series converges exactly when |r| < 1: |3x| < 1, so −1/3 < x < 1/3. (The first term 3x does not affect the condition, and for x = 0 every term is 0, which also converges.)

- (B) includes the endpoints. At x = 1/3, r = 1 and Sₙ = n, which grows without bound. At x = −1/3, r = −1 and the partial sums alternate −1, 0, −1, 0, …. Both diverge.
- (C) solves 3x < 1 and forgets the absolute value. For x = −1, r = −3 and the series diverges.
- (D) solves |x| < 3, dividing 1 by 3 the wrong way.
</details>

## Question 4 (multiple choice · stretch)

Which of the following series converge?

I. Σ from n = 0 to ∞ of (−0.99)ⁿ
II. Σ from n = 0 to ∞ of (π/3)ⁿ
III. Σ from n = 1 to ∞ of 2²ⁿ/5ⁿ

- (A) I only
- (B) I and III only
- (C) II and III only
- (D) I, II and III

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**
I: r = −0.99 and |r| < 1, so it converges (to 1/1.99 = 100/199).
II: π/3 ≈ 1.047, so |r| > 1 and it diverges, even though the ratio is only just above 1.
III: 2²ⁿ/5ⁿ = 4ⁿ/5ⁿ = (4/5)ⁿ, so r = 4/5 and it converges (to (4/5)/(1/5) = 4).

- (A) misses that III is geometric. Rewrite 2²ⁿ as 4ⁿ to see the ratio 4/5.
- (C) wrongly rejects I because its signs alternate (or because 0.99 is "too close to 1"); any |r| < 1 converges. It also wrongly accepts II.
- (D) treats π/3 as less than 1. Since π > 3, π/3 > 1.
</details>

## Question 5 (calculation · core)

Write the repeating decimal 2.1363636… (the block 36 repeats forever) as a fraction in lowest terms. Show the geometric series you use.

<details>
<summary>Worked solution</summary>

1. **Split off the part that does not repeat.** 2.1363636… = 2.1 + 0.0363636….
2. **Write the repeating part as a geometric series.** 0.0363636… = 0.036 + 0.00036 + 0.0000036 + …, with first term a = 0.036 and ratio r = 0.01.
3. **Sum it.** |r| < 1, so the sum is 0.036/(1 − 0.01) = 0.036/0.99 = 36/990 = **2/55**.
4. **Add.** 2.1 + 2/55 = 21/10 + 2/55 = 231/110 + 4/110 = 235/110 = **47/22**.

**Check.** 47 ÷ 22 = 2.13636…. ✓

Suggested mark points (3): 1 for a correct geometric series for the repeating part (a = 0.036, r = 0.01); 1 for its sum 2/55 with |r| < 1 noted; 1 for the final fraction 47/22 in lowest terms.

Common error: taking a = 0.36 (ignoring the non-repeating 1), which gives 2.1 + 0.36/0.99 ≈ 2.464.
</details>

## Question 6 (constructed response · core)

A geometric series Σ from n = 0 to ∞ of a·rⁿ has first term **12** and sum **16**.

(a) Find the common ratio r.
(b) Find S₄, the sum of the first four terms, as an exact value.
(c) Show that 16 − Sₙ = 16(1/4)ⁿ, and find the smallest n for which Sₙ is within 0.001 of the sum.
(d) A student wants a geometric series with first term 12 and sum 6. Explain why no such series exists.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 12/(1 − r) = 16, so 1 − r = 3/4 and **r = 1/4**. This satisfies |r| < 1, so the series does converge. ✓

**(b)** S₄ = 12(1 − (1/4)⁴)/(1 − 1/4) = 16(1 − 1/256) = **255/16** (= 15.9375). Check: 12 + 3 + 3/4 + 3/16 = 255/16. ✓

**(c)** Sₙ = 12(1 − (1/4)ⁿ)/(3/4) = 16 − 16(1/4)ⁿ, so 16 − Sₙ = 16(1/4)ⁿ. ✓
Need 16(1/4)ⁿ < 0.001. For n = 6: 16/4096 ≈ 0.00391 (too big). For n = 7: 16/16384 ≈ 0.000977 (< 0.001). So the smallest n is **7**.
(Log route: 4ⁿ > 16000 gives n > ln 16000 / ln 4 ≈ 6.98, so n = 7.)

**(d)** 12/(1 − r) = 6 gives 1 − r = 2, so r = −1. But a geometric series converges only when |r| < 1; with r = −1 the partial sums alternate 12, 0, 12, 0, … and have no limit. So **no convergent geometric series** with first term 12 has sum 6. (In fact, for −1 < r < 1 the sum 12/(1 − r) is always greater than 6.)

| Point | What earns it |
|---|---|
| 1 | r = 1/4 from 12/(1 − r) = 16 |
| 1 | S₄ = 255/16 using the partial-sum formula or by adding four terms |
| 1 | Shows 16 − Sₙ = 16(1/4)ⁿ |
| 1 | n = 7, supported by checking n = 6 and n = 7 or by logarithms |
| 1 | Finds r = −1 **and** explains that \|r\| < 1 is required (or that the partial sums have no limit) |

Total: 5 points. In (d), stating only "r = −1" without connecting it to the convergence condition does not earn the point.
</details>

## Question 7 (constructed response · stretch)

A fictional city starts a tree-planting programme. It plants **2,400** trees in year 1. A planning model assumes that each later year it plants **85%** as many trees as in the year before, and that the programme continues forever.

(a) Write an infinite series for the total number of trees planted under the model, and find its sum.
(b) Find the number of trees planted in the first 10 years, to the nearest whole tree.
(c) A council member claims: "If we keep going long enough, this programme will plant 20,000 trees." Is the claim correct under the model? Justify your answer.
(d) Keeping 2,400 trees in year 1, what constant yearly percentage would make the total under the model exactly 20,000 trees?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Total = 2400 + 2400(0.85) + 2400(0.85)² + … = Σ from n = 0 to ∞ of 2400(0.85)ⁿ. Geometric with a = 2400 and r = 0.85; |r| < 1, so it converges. Sum = 2400/(1 − 0.85) = 2400/0.15 = **16,000 trees**.

**(b)** S₁₀ = 2400(1 − 0.85¹⁰)/(1 − 0.85) = 16000(1 − 0.85¹⁰) ≈ 16000(1 − 0.19687) ≈ **12,850 trees**.

**(c)** **No.** Every term is positive, so the partial sums increase towards their limit, 16,000, and never exceed it. After any number of years the total is less than 16,000, which is less than 20,000. So under the model the programme never reaches 20,000 trees.

**(d)** Need 2400/(1 − r) = 20000, so 1 − r = 0.12 and r = 0.88. That is **88%** of the previous year's planting each year (and |0.88| < 1, so the series converges).

| Point | What earns it |
|---|---|
| 1 | A correct series with a = 2400 and r = 0.85 |
| 1 | Sum 16,000 with \|r\| < 1 stated |
| 1 | 12,850 trees from the partial-sum formula |
| 1 | "No", justified by comparing 20,000 with the limit 16,000 **and** noting that the partial sums never exceed it |
| 1 | 88% (r = 0.88) |

Total: 5 points. Acceptable alternatives: in (a), Σ from n = 1 to ∞ of 2400(0.85)ⁿ⁻¹; in (b), adding the ten terms on a calculator (12,850.0). In (c), the point needs both the comparison of 20,000 with 16,000 and the reason the running totals never pass 16,000.
</details>

## How did you do?

- **Q1 or Q2 wrong:** check the first term and the sign of r; see Worked example 1 in the [study guide](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/).
- **Q3 wrong:** revisit Worked example 3 (a ratio that contains x) and the endpoint checks.
- **Q4 wrong:** reread "When does a geometric series converge?" and practise rewriting terms as (constant)·(ratio)ⁿ.
- **Q5 wrong:** work through "Repeating decimals are geometric series".
- **Q6 or Q7 wrong:** compare with Worked example 2 (partial sums versus the full sum, and solving for n).

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-checklist/).
