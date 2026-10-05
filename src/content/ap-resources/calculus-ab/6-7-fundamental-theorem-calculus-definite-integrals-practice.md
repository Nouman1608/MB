---
resourceId: "mb-ap-calcab-6.7-practice"
title: "The Fundamental Theorem of Calculus and Definite Integrals: Practice Questions (Calculus AB 6.7)"
description: "Seven original Marlbridge practice questions on evaluating definite integrals with antiderivatives, continuity conditions, Riemann sums and net change, with full solutions."
course: "calculus-ab"
unit: 6
topics: ["6.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of powers, trig functions, eˣ and ln x"
  - "Signed area and accumulation functions (Topics 6.1 to 6.4)"
prerequisiteResources: ["mb-ap-calcab-6.7-study-guide"]
learningObjectives:
  - "Evaluate definite integrals exactly using an antiderivative"
  - "Check that the integrand is continuous before applying the theorem"
  - "Connect accumulation functions, antiderivatives and limits of Riemann sums to F(b) − F(a)"
  - "Find and interpret net change from a rate of change in context"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers unless a question asks for a decimal."
related: ["mb-ap-calcab-6.7-study-guide", "mb-ap-calcab-6.7-revision-notes", "mb-ap-calcab-6.7-checklist"]
next: "mb-ap-calcab-6.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians and exact answers unless stated. Notation: ∫ (a to b) f(x) dx is the definite integral from a to b, and [F(x)] (a to b) means F(b) − F(a). The context in Question 7 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is ∫ (1 to 2) (6x² − 4x + 1) dx?

- (A) −9
- (B) 9
- (C) 10
- (D) 14

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** An antiderivative is F(x) = 2x³ − 2x² + x (check: F′(x) = 6x² − 4x + 1). Then F(2) − F(1) = (16 − 8 + 2) − (2 − 2 + 1) = 10 − 1 = 9.

- (A) subtracts in the wrong order: F(1) − F(2) = −9.
- (C) is F(2) alone. It forgets to subtract F(1), which is not 0 here.
- (D) substitutes into the integrand instead of an antiderivative: f(2) − f(1) = 17 − 3 = 14.
</details>

## Question 2 (multiple choice · core)

What is ∫ (0 to π/3) 4 sin x dx?

- (A) −6
- (B) −2
- (C) 2
- (D) 2√3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An antiderivative of 4 sin x is −4 cos x. So the integral is [−4 cos x] (0 to π/3) = (−4 · 1/2) − (−4 · 1) = −2 + 4 = 2.

- (A) drops the brackets around the second value: −4 cos(π/3) − 4 cos 0 = −2 − 4 = −6.
- (B) uses 4 cos x as the antiderivative (a sign error): 4 · 1/2 − 4 · 1 = −2. Differentiating 4 cos x gives −4 sin x, so the check fails.
- (D) substitutes into the integrand: 4 sin(π/3) − 4 sin 0 = 2√3.
</details>

## Question 3 (multiple choice · core)

f is continuous for all real numbers. F is an antiderivative of f with F(5) = 3 and F(9) = 11. Let G(x) = ∫ (5 to x) f(t) dt. What is G(9)?

- (A) −8
- (B) 8
- (C) 11
- (D) 14

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** G(9) = ∫ (5 to 9) f(t) dt. f is continuous and F is an antiderivative, so this is F(9) − F(5) = 11 − 3 = 8. (Equivalently, G is the antiderivative of f with G(5) = 0, so G(x) = F(x) − 3.)

- (A) subtracts in the wrong order.
- (C) assumes G and F are the same antiderivative. They differ by a constant: G(5) = 0 but F(5) = 3.
- (D) adds the two values instead of subtracting.
</details>

## Question 4 (multiple choice · core)

What is lim (n → ∞) Σ (i = 1 to n) (2/n) e^(2i/n)?

- (A) e² − 1
- (B) e²
- (C) 2e² − 2
- (D) 1 − e²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Δx = 2/n and xᵢ = 2i/n, so x runs from 0 to 2 and f(x) = eˣ. The limit is ∫ (0 to 2) eˣ dx = [eˣ] (0 to 2) = e² − e⁰ = e² − 1 (about 6.389). With n = 1000 the sum is about 6.395, which agrees.

- (B) treats e⁰ as 0, or forgets the lower limit.
- (C) multiplies the integral by 2 as well. The factor 2/n is Δx, which becomes the dx in the integral; it is not an extra constant.
- (D) subtracts in the wrong order.
</details>

## Question 5 (constructed response · core)

A student writes: ∫ (π/4 to 3π/4) sec²x dx = [tan x] (π/4 to 3π/4) = tan(3π/4) − tan(π/4) = −1 − 1 = −2.

(a) Explain why the answer −2 cannot be correct, using the sign of the integrand.
(b) State which condition of the Fundamental Theorem of Calculus fails, and where.
(c) Evaluate ∫ (−π/4 to π/3) sec²x dx exactly, and explain why the theorem does apply this time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** sec²x = 1/cos²x is positive wherever it is defined. A region that lies entirely above the axis has a positive signed area, so the integral cannot be negative. (In fact the region is unbounded, so no finite value is possible.)

**(b)** The theorem needs sec²x to be continuous on the whole of [π/4, 3π/4]. It is not: cos(π/2) = 0, so sec²x is undefined at x = π/2, which lies inside the interval. The subtraction tan(3π/4) − tan(π/4) has no meaning as the value of this integral.

**(c)** On [−π/4, π/3], cos x ≥ 1/2 > 0, so sec²x is continuous there. tan x is an antiderivative (d/dx tan x = sec²x). So

∫ (−π/4 to π/3) sec²x dx = [tan x] (−π/4 to π/3) = √3 − (−1) = **√3 + 1**.

| Point | What earns it |
|---|---|
| 1 | Integrand is positive (where defined), so the integral cannot be negative |
| 1 | Identifies that sec²x is not continuous on [π/4, 3π/4], undefined at x = π/2 |
| 1 | Justifies continuity on [−π/4, π/3] (cos x is not 0 there) |
| 1 | Correct antiderivative and value √3 + 1 |
</details>

## Question 6 (constructed response · core)

Let f(x) = 3x² − 6x.

(a) Evaluate ∫ (0 to 3) f(x) dx.
(b) The answer to (a) is 0, but f(x) is not 0 on (0, 3). Explain, using ∫ (0 to 2) f(x) dx and ∫ (2 to 3) f(x) dx.
(c) Find the total area of the regions between the graph of f and the x-axis for 0 ≤ x ≤ 3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F(x) = x³ − 3x² is an antiderivative (F′ = 3x² − 6x). f is a polynomial, so it is continuous.

∫ (0 to 3) f(x) dx = [x³ − 3x²] (0 to 3) = (27 − 27) − 0 = **0**.

**(b)** f(x) = 3x(x − 2) is negative on (0, 2) and positive on (2, 3).

∫ (0 to 2) f(x) dx = F(2) − F(0) = (8 − 12) − 0 = **−4**.
∫ (2 to 3) f(x) dx = F(3) − F(2) = 0 − (−4) = **4**.

The region below the axis and the region above have equal areas, so their signed values cancel.

**(c)** Total area counts each region as positive: 4 + 4 = **8**.

| Point | What earns it |
|---|---|
| 1 | Correct antiderivative x³ − 3x² and value 0 |
| 1 | Sign of f on each subinterval, from the factorisation or a sign check |
| 1 | Values −4 and 4, with the cancellation explained |
| 1 | Total area 8 |
</details>

## Question 7 (constructed response · stretch)

The depth of water in a garden pond is D(t) centimetres, where t is in days, 0 ≤ t ≤ 9. The depth changes at the rate

D′(t) = 0.6√t − 0.3t centimetres per day.

At t = 0 the depth is 120 cm.

(a) Find ∫ (0 to 9) D′(t) dt. Give its meaning in context, with units.
(b) Find D(9).
(c) Find D(4).
(d) Find the greatest depth of the pond for 0 ≤ t ≤ 9, and justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Write D′(t) = 0.6t^(1/2) − 0.3t. An antiderivative is 0.4t^(3/2) − 0.15t² (check: 0.4 × 1.5 = 0.6 and 0.15 × 2 = 0.3). D′ is continuous on [0, 9].

∫ (0 to 9) D′(t) dt = [0.4t^(3/2) − 0.15t²] (0 to 9) = 0.4(27) − 0.15(81) − 0 = 10.8 − 12.15 = **−1.35**

Between day 0 and day 9, the depth of the pond **decreases by a net 1.35 cm**.

**(b)** D(9) = D(0) + ∫ (0 to 9) D′(t) dt = 120 − 1.35 = **118.65 cm**.

**(c)** ∫ (0 to 4) D′(t) dt = 0.4(8) − 0.15(16) = 3.2 − 2.4 = 0.8, so D(4) = **120.8 cm**.

**(d)** D′(t) = 0 when 0.6√t = 0.3t, so √t = 2 (or t = 0), giving t = 4. D′(1) = 0.3 > 0 and D′(9) = −0.9 < 0, so D increases on (0, 4) and decreases on (4, 9). Compare the candidates: D(0) = 120, D(4) = 120.8, D(9) = 118.65. The greatest depth is **120.8 cm, at t = 4 days**.

| Point | What earns it |
|---|---|
| 1 | Correct antiderivative and −1.35 |
| 1 | Interpretation: net decrease of 1.35 cm in depth over the 9 days |
| 1 | D(9) = 118.65 and D(4) = 120.8, each as 120 plus an integral |
| 1 | Critical point t = 4 with a sign change or candidates comparison, and maximum 120.8 cm |

Acceptable alternative for (d): a candidates test (Topic 5.5) comparing D at 0, 4 and 9, without the sign analysis.
</details>

## How did you do?

- **Q1 or Q2 wrong:** redo Worked example 1 and Worked example 2 in the [study guide](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/), using brackets for F(a).
- **Q3 wrong:** reread "Where the theorem comes from".
- **Q4 wrong:** see "Reading a limit of Riemann sums as an integral".
- **Q5 wrong:** reread "When the theorem does not apply".
- **Q6 or Q7 wrong:** redo Worked example 3 and the net change section, paying attention to signs and units.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-checklist/).
