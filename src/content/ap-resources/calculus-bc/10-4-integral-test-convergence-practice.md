---
resourceId: "mb-ap-calcbc-10.4-practice"
title: "Integral Test for Convergence: Practice Questions (Calculus BC 10.4)"
description: "Seven original Marlbridge practice questions on the integral test: checking conditions, improper integrals, a parameter question and why the integral is not the sum, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.4"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Improper integrals (Topic 6.13), substitution and parts (Topics 6.9 and 6.11), and the nth term test (Topic 10.3)"
prerequisiteResources: ["mb-ap-calcbc-10.4-study-guide"]
learningObjectives:
  - "Check the conditions of the integral test for a given series"
  - "Evaluate the matching improper integral and draw the correct conclusion"
  - "Decide when the integral test cannot be applied"
  - "Explain why the value of the integral is not the sum of the series"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7(d): calculator allowed for decimal values only; give them to 3 decimal places."
related: ["mb-ap-calcbc-10.4-study-guide", "mb-ap-calcbc-10.4-revision-notes", "mb-ap-calcbc-10.4-checklist"]
next: "mb-ap-calcbc-10.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; every series starts at n = 1 unless stated; no calculator except in Question 7(d), where decimals should be given to 3 decimal places. Notation: "∫ from 1 to ∞ of f(x) dx" means the limit as b → ∞ of ∫ from 1 to b of f(x) dx, and "[F(x)] from a to b" means F(b) − F(a).

## Question 1 (multiple choice · foundation)

The integral test is to be used on ∑ aₙ, where aₙ = f(n). Which of the following is **not** a condition of the test?

- (A) f(x) > 0 for x ≥ N
- (B) f is continuous for x ≥ N
- (C) f is decreasing for x ≥ N
- (D) ∫ from N to ∞ of f(x) dx is equal to ∑ from n = N to ∞ of aₙ

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The test says only that the series and the integral both converge or both diverge. Their values are usually different, so equality is not a condition (and is generally false).

- (A) is required. Without positive terms, partial sums can go down as well as up, and the rectangle comparison fails.
- (B) is required. The improper integral must make sense on [N, ∞).
- (C) is required. Decreasing is what keeps the rectangles on one side of the curve.
</details>

## Question 2 (multiple choice · core)

Consider ∑ 6/(2n + 1)². Given that ∫ from 1 to ∞ of 6/(2x + 1)² dx = 1, which statement is true?

- (A) The series converges, and its sum is 1.
- (B) The series converges, but its sum is not necessarily 1.
- (C) The series diverges, because the integral is not 0.
- (D) The integral test cannot be used, because 6/(2x + 1)² is not decreasing.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f(x) = 6/(2x + 1)² is positive and continuous for x ≥ 1, and f′(x) = −24/(2x + 1)³ < 0, so it is decreasing. The integral converges, so the series converges by the integral test. The test does not give the sum. (In fact the sum is about 1.402. It must lie between the integral, 1, and a₁ + 1 = 2/3 + 1 ≈ 1.667.)

- (A) treats the integral's value as the sum of the series.
- (C) confuses a convergent integral with a zero integral. A finite value, of any size, means convergence.
- (D) is false: the denominator grows as x grows, so the fraction decreases.
</details>

## Question 3 (multiple choice · core)

For which series can the integral test **not** be applied directly?

- (A) ∑ 1/(n + 5)²
- (B) ∑ (2 + sin n)/n²
- (C) ∑ e^(−n/3)
- (D) ∑ n/(n² + 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The terms are positive (2 + sin n ≥ 1), but they are not decreasing: sin n wobbles, so the terms sometimes go up. For example, a₅ = (2 + sin 5)/25 ≈ 0.042 and a₆ = (2 + sin 6)/36 ≈ 0.048. Since f(x) = (2 + sin x)/x² is never decreasing on a whole interval [N, ∞), the condition fails. (A comparison test from Topic 10.6 handles this series.)

- (A) f(x) = 1/(x + 5)² is positive, continuous and decreasing: f′(x) = −2/(x + 5)³ < 0.
- (C) f(x) = e^(−x/3) is positive, continuous and decreasing: f′(x) = −⅓ e^(−x/3) < 0.
- (D) f(x) = x/(x² + 1) has f′(x) = (1 − x²)/(x² + 1)², which is ≤ 0 for x ≥ 1. The test applies (and shows divergence).
</details>

## Question 4 (multiple choice · stretch)

For which values of the constant k > 0 does ∑ n/(n² + 1)ᵏ converge?

- (A) k > 1/2
- (B) k > 1
- (C) k ≥ 1
- (D) k > 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Let f(x) = x(x² + 1)^(−k). Then f′(x) = (x² + 1)^(−k−1)(1 + (1 − 2k)x²), which is negative for x > 1 when k ≥ 1 (the bracket equals 2 − 2k ≤ 0 at x = 1 and decreases after that), so the integral test applies for every k ≥ 1.

- For k ≠ 1: ∫ x(x² + 1)^(−k) dx = (x² + 1)^(1−k)/(2(1 − k)). As x → ∞ this has a finite limit only when 1 − k < 0, that is, k > 1. (For k = 2, the integral from 1 to ∞ is 1/4.)
- For k = 1: ∫ x/(x² + 1) dx = ½ ln(x² + 1) → ∞. Diverges.

So the series converges exactly when k > 1. (For 1/2 < k < 1 the function is decreasing from some point on and the integral diverges; for k ≤ 1/2 the terms do not approach 0, so the nth term test shows divergence.)

- (A) includes values such as k = 3/4, where the integral grows like ∫ x^(−1/2) dx and diverges.
- (C) includes k = 1, where the integral is a logarithm and diverges.
- (D) leaves out values that work, such as k = 2 (integral 1/4) and k = 3/2.
</details>

## Question 5 (calculation · core)

Use the integral test to decide whether ∑ 1/(n² + 2n + 5) converges. Show that the conditions hold.

<details>
<summary>Worked solution</summary>

1. **Conditions.** f(x) = 1/(x² + 2x + 5) = 1/((x + 1)² + 4). The denominator is positive, so f is positive and continuous. For x ≥ 1 the denominator increases (its derivative 2x + 2 > 0), so f is decreasing. ✓
2. **Antiderivative.** Complete the square and use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) with u = x + 1, a = 2:
   ∫ 1/((x + 1)² + 4) dx = ½ arctan((x + 1)/2) + C.
3. **Improper integral.** ∫ from 1 to b = ½ arctan((b + 1)/2) − ½ arctan(1). As b → ∞, arctan((b + 1)/2) → π/2, so the integral converges to ½ · π/2 − ½ · π/4 = **π/8** (about 0.393).
4. **Conclusion.** The integral converges, so **∑ 1/(n² + 2n + 5) converges** by the integral test. (Its sum is about 0.460, not π/8.)

Suggested mark points (4): 1 for the three conditions with a reason for "decreasing"; 1 for the antiderivative ½ arctan((x + 1)/2); 1 for the limit π/8 with arctan → π/2; 1 for the conclusion naming the integral test.

Common error: writing the final answer as "the series converges to π/8".
</details>

## Question 6 (constructed response · core)

Consider the series ∑ 6/(3n + 1).

(a) Explain why the nth term test does not decide whether this series converges.
(b) Let f(x) = 6/(3x + 1). Show that f satisfies the conditions of the integral test for x ≥ 1.
(c) Evaluate ∫ from 1 to ∞ of f(x) dx, or show that it diverges.
(d) Does ∑ 6/(3n + 1) converge or diverge? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 6/(3n + 1) → 0. The nth term test can only show divergence when the limit is not 0, so here it is inconclusive.

**(b)** For x ≥ 1, 3x + 1 > 0, so f(x) > 0, and f is continuous there. f′(x) = −18/(3x + 1)² < 0, so f is decreasing.

**(c)** ∫ 6/(3x + 1) dx = 2 ln(3x + 1) + C (substitution u = 3x + 1). So
∫ from 1 to b of f(x) dx = 2 ln(3b + 1) − 2 ln 4 = 2 ln((3b + 1)/4).
As b → ∞, this → ∞. The integral **diverges**. (At b = 100 it is already about 8.64, and it keeps growing.)

**(d)** f is positive, continuous and decreasing for x ≥ 1, and ∫ from 1 to ∞ of f(x) dx diverges, so **∑ 6/(3n + 1) diverges** by the integral test.

| Point | What earns it |
|---|---|
| 1 | lim aₙ = 0, so the nth term test is inconclusive |
| 1 | All three conditions, with f′(x) < 0 (or another valid reason) for decreasing |
| 1 | Antiderivative 2 ln(3x + 1), including the factor from the chain rule |
| 1 | Limit as b → ∞ shown, concluding that the integral diverges |
| 1 | Series diverges, with the integral test named and linked to (b) and (c) |

Total: 5 points. A common error in (c) is the antiderivative 6 ln(3x + 1), which misses the factor 1/3. It still diverges, but the antiderivative point is lost.
</details>

## Question 7 (constructed response · stretch)

Consider the series ∑ n e^(−n), and let f(x) = x e^(−x).

(a) Show that f is decreasing for x ≥ 1.
(b) Without a calculator, show that ∫ from 1 to ∞ of x e^(−x) dx = 2/e.
(c) What does the integral test tell you about ∑ n e^(−n)? Justify your answer.
(d) A student says: "So the sum of the series is 2/e." Using the first three terms of the series (calculator allowed), show that the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = e^(−x) − x e^(−x) = e^(−x)(1 − x). For x > 1, 1 − x < 0, so f′(x) < 0 and f is decreasing for x ≥ 1. (f′(1) = 0 at a single point does not stop f being decreasing on [1, ∞).)

**(b)** Parts with u = x (du = dx) and dv = e^(−x) dx (v = −e^(−x)):
∫ x e^(−x) dx = −x e^(−x) + ∫ e^(−x) dx = −x e^(−x) − e^(−x) + C.
∫ from 1 to b = (−b e^(−b) − e^(−b)) − (−e⁻¹ − e⁻¹) = 2e⁻¹ − b e^(−b) − e^(−b).
As b → ∞, e^(−b) → 0 and b e^(−b) = b/eᵇ → 0 (L'Hospital's Rule: 1/eᵇ → 0). So the integral converges to **2/e**.

**(c)** f is positive (x > 0, e^(−x) > 0), continuous and decreasing for x ≥ 1, and ∫ from 1 to ∞ of f(x) dx converges, so **∑ n e^(−n) converges** by the integral test.

**(d)** S₃ = e⁻¹ + 2e⁻² + 3e⁻³ ≈ 0.368 + 0.271 + 0.149 = **0.788**. But 2/e ≈ **0.736**. All the remaining terms are positive, so the full sum is greater than S₃ and therefore greater than 2/e. The sum cannot be 2/e. (Its actual value is about 0.921.)

| Point | What earns it |
|---|---|
| 1 | f′(x) = e^(−x)(1 − x) and the reason it is negative for x > 1 |
| 1 | Correct antiderivative −x e^(−x) − e^(−x) by parts |
| 1 | Limit shown, including b e^(−b) → 0 with a reason, giving 2/e |
| 1 | Converges by the integral test, with the conditions stated |
| 1 | S₃ ≈ 0.788 compared with 2/e ≈ 0.736, with the argument that later terms only add more |

Total: 5 points. Acceptable alternative for (d): use the rectangle picture. Rectangles of height aₙ on [n, n + 1] lie above the curve (strictly, since f is strictly decreasing for x > 1), so the sum is greater than the integral 2/e. Any valid numerical comparison with S₂ or S₃ earns the point if it explains why later terms cannot bring the total back down to 2/e.
</details>

## How did you do?

- **Q1 or Q3 wrong:** reread "The integral test" and "When the integral test does not fit" in the [study guide](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/).
- **Q2 or Q7(d) wrong:** revisit Figure 1 and the misconception that the integral is the sum.
- **Q4 wrong:** practise the two cases k = 1 and k ≠ 1 of the antiderivative, then compare with Worked example 2.
- **Q5 or Q6 wrong:** compare your layout with Worked examples 1 and 2; check the chain-rule factor and the limit.
- **Q7(a)–(c) wrong:** work through Worked example 3 (parts and L'Hospital's Rule).

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-checklist/).
