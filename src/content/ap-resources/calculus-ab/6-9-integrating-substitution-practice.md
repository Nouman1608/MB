---
resourceId: "mb-ap-calcab-6.9-practice"
title: "Integrating Using Substitution: Practice Questions (Calculus AB 6.9)"
description: "Seven original Marlbridge practice questions on u-substitution for indefinite and definite integrals, with changed limits, full solutions and suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.9"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule and basic antiderivatives"
prerequisiteResources: ["mb-ap-calcab-6.9-study-guide"]
learningObjectives:
  - "Find indefinite integrals by substitution, adjusting constants where needed"
  - "Evaluate definite integrals by substitution with correctly changed limits"
  - "Rewrite leftover factors of x in terms of u"
  - "Check an antiderivative by differentiating and explain common substitution errors"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers unless a question asks for a decimal check."
related: ["mb-ap-calcab-6.9-study-guide", "mb-ap-calcab-6.9-revision-notes", "mb-ap-calcab-6.9-checklist"]
next: "mb-ap-calcab-6.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, exact answers, and every integrand is continuous where it is used. Notation: ∫ (a to b) f(x) dx means the definite integral of f(x) from x = a to x = b. The context in Question 6 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is ∫ x² sin(x³) dx?

- (A) −3 cos(x³) + C
- (B) (1/3) cos(x³) + C
- (C) −(1/3) cos(x³) + C
- (D) −(x³/3) cos(x³) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Let u = x³, so du = 3x² dx and x² dx = (1/3) du. The integral becomes (1/3) ∫ sin u du = −(1/3) cos u + C = −(1/3) cos(x³) + C. Check: the derivative of −(1/3) cos(x³) is (1/3) sin(x³) · 3x² = x² sin(x³).

- (A) multiplies by 3 instead of dividing by 3. Its derivative is 9x² sin(x³).
- (B) has the wrong sign: an antiderivative of sin u is −cos u, not cos u.
- (D) integrates x² on its own and multiplies the results. Antiderivatives of products do not work factor by factor.
</details>

## Question 2 (multiple choice · core)

What is ∫ e^(1/x)/x² dx, for x ≠ 0?

- (A) e^(1/x) + C
- (B) −e^(1/x) + C
- (C) −e^(1/x)/x + C
- (D) −x² e^(1/x) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Let u = 1/x = x^(−1). Then du = −x^(−2) dx, so (1/x²) dx = −du. The integral becomes ∫ e^u (−du) = −e^u + C = −e^(1/x) + C. Check: d/dx (−e^(1/x)) = −e^(1/x) · (−1/x²) = e^(1/x)/x².

- (A) misses the minus sign in du = −(1/x²) dx. Its derivative is −e^(1/x)/x².
- (C) integrates the two factors separately (1/x² gives −1/x) and multiplies. Products cannot be integrated that way.
- (D) divides e^(1/x) by the derivative of the inner function, −1/x², even though the factor 1/x² in the integrand was already doing that job.
</details>

## Question 3 (multiple choice · core)

What is the exact value of ∫ (0 to 2) x/√(x² + 5) dx?

- (A) √2
- (B) 6 − 2√5
- (C) 3 − √5
- (D) (3 − √5)/2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Let u = x² + 5, so du = 2x dx and x dx = (1/2) du. New limits: x = 0 gives u = 5; x = 2 gives u = 9. The integral is (1/2) ∫ (5 to 9) u^(−1/2) du = (1/2)[2u^(1/2)] (5 to 9) = [√u] (5 to 9) = 3 − √5.

- (A) uses the antiderivative √u but keeps the old limits 0 and 2: √2 − √0 = √2.
- (B) forgets the factor 1/2, so the answer is doubled.
- (D) uses the factor 1/2 twice: once when changing x dx to du, and again after integrating.
</details>

## Question 4 (multiple choice · core)

Using the substitution u = 2x − 1, which integral is equal to ∫ (1 to 3) x(2x − 1)³ dx?

- (A) (1/2) ∫ (1 to 5) x u³ du
- (B) (1/4) ∫ (1 to 3) (u⁴ + u³) du
- (C) (1/2) ∫ (1 to 5) (u⁴ + u³) du
- (D) (1/4) ∫ (1 to 5) (u⁴ + u³) du

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** From u = 2x − 1: du = 2 dx, so dx = (1/2) du, and x = (u + 1)/2. Limits: x = 1 gives u = 1; x = 3 gives u = 5. So x(2x − 1)³ dx = ((u + 1)/2) · u³ · (1/2) du = (1/4)(u⁴ + u³) du. Both integrals equal 976/5.

- (A) still contains x, so it is not ready to integrate in u.
- (B) keeps the old upper limit 3. Its value is 171/10, not 976/5.
- (C) uses only one factor of 1/2. The other comes from x = (u + 1)/2. It gives twice the correct value.
</details>

## Question 5 (constructed response · core)

(a) Find ∫ cos x/(3 + sin x)² dx.
(b) Show by differentiation that your answer to (a) is correct.
(c) A student writes: "∫ (x² + 1)³ dx = (x² + 1)⁴/(8x) + C, using u = x² + 1 and du = 2x dx." Explain the error, and describe a correct method.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let u = 3 + sin x, so du = cos x dx. The integral becomes ∫ u^(−2) du = −u^(−1) + C = **−1/(3 + sin x) + C**.

**(b)** d/dx [−(3 + sin x)^(−1)] = (3 + sin x)^(−2) · cos x = cos x/(3 + sin x)². This is the integrand, so the answer is correct.

**(c)** The integrand has no factor of x, so du = 2x dx cannot be formed. The student divided by 2x to make up for it, but 2x is a variable, and only constants can be moved through an integral sign. Differentiating the student's answer with the quotient rule gives (x² + 1)³(7x² − 1)/(8x²), which is not (x² + 1)³. A correct method is to expand: (x² + 1)³ = x⁶ + 3x⁴ + 3x² + 1, so the integral is x⁷/7 + 3x⁵/5 + x³ + x + C.

| Point | What earns it |
|---|---|
| 1 | Chooses u = 3 + sin x with du = cos x dx and rewrites the integral as ∫ u^(−2) du |
| 1 | Correct answer −1/(3 + sin x) + C, including + C |
| 1 | Differentiates with the chain rule and shows the result equals the integrand |
| 1 | Explains that 2x is not a constant so cannot be adjusted for, **and** gives a valid alternative (expanding, with a correct result) |
</details>

## Question 6 (constructed response · core)

Water is pumped into a tank. For 0 ≤ t ≤ 3, the rate is r(t) = 6t√(t² + 16) litres per minute, where t is in minutes. At t = 0 the tank holds 50 litres.

(a) Write a definite integral for the number of litres added from t = 0 to t = 3.
(b) Evaluate the integral exactly using a substitution. Show the new limits.
(c) How much water is in the tank at t = 3?
(d) A student uses u = t² + 16 and gets 6√3 for (b). Explain the student's likely error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Litres added = ∫ (0 to 3) 6t√(t² + 16) dt. A rate in litres per minute times minutes gives litres.

**(b)** Let u = t² + 16, so du = 2t dt and 6t dt = 3 du. New limits: t = 0 gives u = 16; t = 3 gives u = 25.

∫ (16 to 25) 3u^(1/2) du = [2u^(3/2)] (16 to 25) = 2(125) − 2(64) = 250 − 128 = **122 litres**.

**(c)** 50 + 122 = **172 litres**.

**(d)** The student found the antiderivative 2u^(3/2) correctly but substituted the old limits t = 0 and t = 3 into it: 2(3)^(3/2) − 0 = 6√3, about 10.4. The limits 0 and 3 are t-values. For a function of u, the limits must be u = 16 and u = 25. (Or rewrite 2(t² + 16)^(3/2) in t first, then use 0 and 3.)

| Point | What earns it |
|---|---|
| 1 | Correct definite integral with limits 0 and 3 (units noted in (a) or (c)) |
| 1 | Substitution with du and the factor 3 correct, and new limits 16 and 25 |
| 1 | Evaluates to 122, then states 172 litres in the tank at t = 3 |
| 1 | Identifies that t-limits were used in a function of u |

Acceptable alternative for (b): find the indefinite integral 2(t² + 16)^(3/2) + C, then evaluate from t = 0 to t = 3.
</details>

## Question 7 (constructed response · stretch)

Let I = ∫ (0 to √3) x³√(x² + 1) dx.

(a) Explain how the substitution u = x² + 1 can be used even though du = 2x dx does not match x³ dx.
(b) Find the exact value of I.
(c) Without integrating, find ∫ (−√3 to √3) x³√(x² + 1) dx. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Split x³ dx = x² · x dx. The factor x dx is (1/2) du. The leftover x² can be written in terms of u, because u = x² + 1 gives **x² = u − 1**. So every x can be replaced.

**(b)** Limits: x = 0 gives u = 1; x = √3 gives u = 4.

I = (1/2) ∫ (1 to 4) (u − 1)u^(1/2) du = (1/2) ∫ (1 to 4) (u^(3/2) − u^(1/2)) du.

An antiderivative of the bracket is H(u) = (2/5)u^(5/2) − (2/3)u^(3/2).

H(4) = (2/5)(32) − (2/3)(8) = 64/5 − 16/3 = 112/15. H(1) = 2/5 − 2/3 = −4/15.

I = (1/2)(112/15 + 4/15) = (1/2)(116/15) = **58/15** (about 3.87).

**(c)** Let f(x) = x³√(x² + 1). Then f(−x) = (−x)³√(x² + 1) = −f(x), so f is odd. On an interval symmetric about 0, the area below the axis on [−√3, 0] cancels the area above it on [0, √3]. So the integral is **0**.

| Point | What earns it |
|---|---|
| 1 | Splits x³ into x² · x and replaces x² by u − 1 |
| 1 | Correct integrand in u, (1/2)(u − 1)√u, with limits 1 and 4 |
| 1 | Correct antiderivative and value 58/15 |
| 1 | Answer 0 for (c), justified by f(−x) = −f(x) and cancelling signed areas |

Acceptable alternative for (b): u = √(x² + 1), so u² = x² + 1 and u du = x dx. Then I = ∫ (1 to 2) (u² − 1)u² du = ∫ (1 to 2) (u⁴ − u²) du = 31/5 − 7/3 = 58/15.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** redo "The method, step by step" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/), and check every answer by differentiating.
- **Q3 or Q6 wrong:** reread "Definite integrals: change the limits", Figure 1 and Worked example 2.
- **Q4 or Q7 wrong:** see "Rewriting leftover x" and Worked example 3.
- **Q5(c) wrong:** reread "You cannot adjust a variable".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-checklist/).
