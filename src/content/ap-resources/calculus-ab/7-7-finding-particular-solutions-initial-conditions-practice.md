---
resourceId: "mb-ap-calcab-7.7-practice"
title: "Particular Solutions from Initial Conditions and Separation of Variables: Practice Questions (Calculus AB 7.7)"
description: "Seven original Marlbridge practice questions on particular solutions: initial conditions, signs, domains and the integral form, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 7
topics: ["7.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "General solutions by separation of variables"
  - "The Fundamental Theorem of Calculus for accumulation functions"
prerequisiteResources: ["mb-ap-calcab-7.7-study-guide"]
learningObjectives:
  - "Find particular solutions of separable differential equations from initial conditions"
  - "Choose the correct sign and state the domain of a particular solution"
  - "Write and recognise the integral form of a particular solution"
  - "Interpret a particular solution and its domain in context"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers; decimals are only for checking."
related: ["mb-ap-calcab-7.7-study-guide", "mb-ap-calcab-7.7-revision-notes", "mb-ap-calcab-7.7-checklist"]
next: "mb-ap-calcab-7.7-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers. The tank in Question 5 is invented for practice. y(a) = y₀ means y = y₀ when x = a. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is the particular solution of dy/dx = y cos x with y(0) = −2?

- (A) y = −2e^(sin x)
- (B) y = e^(sin x) − 3
- (C) y = 2e^(sin x)
- (D) y = −2e^(−sin x)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: (1/y) dy = cos x dx. Integrate: ln|y| = sin x + C. At (0, −2): ln 2 = 0 + C, so C = ln 2 and |y| = 2e^(sin x). Since y(0) is negative and y cannot pass through 0, y = −2e^(sin x). Check: y(0) = −2, and dy/dx = −2e^(sin x) cos x = y cos x.

- (B) adds the constant after removing the logarithm. It passes through (0, −2), but its derivative is e^(sin x) cos x, not (e^(sin x) − 3) cos x.
- (C) ignores the sign. It solves the equation but passes through (0, 2).
- (D) uses ∫ cos x dx = −sin x. It passes through (0, −2) but solves dy/dx = −y cos x instead.
</details>

## Question 2 (multiple choice · core)

Let y = F(x) be the particular solution of dy/dx = cos(x³) with F(2) = 5. Which expression gives F(x)?

- (A) 5 + ∫ (2 to x) cos(t³) dt
- (B) ∫ (2 to x) cos(t³) dt
- (C) 5 + ∫ (0 to x) cos(t³) dt
- (D) 2 + ∫ (5 to x) cos(t³) dt

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the Fundamental Theorem of Calculus, the derivative of 5 + ∫ (2 to x) cos(t³) dt is cos(x³). At x = 2 the integral is 0, so F(2) = 5. Both conditions hold.

- (B) has the right derivative but gives F(2) = 0, not 5. The initial y-value is missing.
- (C) has the right derivative, but at x = 2 it gives 5 + ∫ (0 to 2) cos(t³) dt, which is not 5 because that integral is not 0. The lower limit must be the initial x-value, 2.
- (D) swaps the roles of 2 and 5. It passes through (5, 2), not (2, 5).
</details>

## Question 3 (multiple choice · core)

The particular solution of dy/dx = 3x²y² with y(1) = 1/2 is y = 1/(3 − x³). What is the largest open interval containing x = 1 on which this particular solution is valid?

- (A) All real x except x = ∛3
- (B) x < ∛3
- (C) x > ∛3
- (D) −∛3 < x < ∛3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The formula breaks only where 3 − x³ = 0, at x = ∛3 ≈ 1.442. The initial value x = 1 is to the left of this, and nothing else breaks the formula to the left. So the solution is valid for x < ∛3.

(Check of the solution: −1/y = x³ + C; at (1, 1/2), −2 = 1 + C, so C = −3 and y = 1/(3 − x³).)

- (A) is not an interval. The piece for x > ∛3 is cut off from the initial point by the asymptote.
- (C) is the piece on the wrong side of the asymptote. It does not contain x = 1.
- (D) invents a break at x = −∛3. Since x³ is negative there, 3 − x³ = 6, which is not 0.
</details>

## Question 4 (multiple choice · core)

Let y = f(x) be the particular solution of dy/dx = x/(2y) with f(2) = −1. What is f(4)?

- (A) −√7
- (B) √7
- (C) −2√2
- (D) −√13

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: 2y dy = x dx. Integrate: y² = x²/2 + C. At (2, −1): 1 = 2 + C, so C = −1 and y² = x²/2 − 1. Since f(2) < 0, y = −√(x²/2 − 1). Then f(4) = −√(8 − 1) = −√7.

- (B) takes the positive root, which does not pass through (2, −1).
- (C) leaves out the constant: y² = x²/2 gives −√8 = −2√2.
- (D) drops the factor 2 when separating (y dy = x dx). Then y²/2 = x²/2 + C gives C = −3/2, y² = x² − 3 and −√13.
</details>

## Question 5 (constructed response · core)

Water drains from an invented cylindrical tank. The depth of water is h centimetres, t minutes after draining starts. The depth satisfies

dh/dt = −0.4√h, with h(0) = 36.

(a) Find h as a function of t.
(b) Find the time when the tank is empty.
(c) Find the depth and the rate of change of the depth at t = 10, with units.
(d) Your formula from (a) gives h(40) = 4. Explain why the formula does not describe the tank at t = 40, and state the interval of t on which it is valid.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Separate: h^(−1/2) dh = −0.4 dt. Integrate: 2√h = −0.4t + C. At t = 0, h = 36: 2 × 6 = C, so C = 12. Then √h = 6 − 0.2t, and **h = (6 − 0.2t)²**.

**(b)** The tank is empty when h = 0, so 6 − 0.2t = 0 and **t = 30 minutes**.

**(c)** h(10) = (6 − 2)² = **16 cm**. dh/dt = −0.4√16 = **−1.6 cm per minute**: the depth is falling by 1.6 cm each minute at that moment.

**(d)** In the working, √h = 6 − 0.2t. A square root cannot be negative, so this needs 6 − 0.2t ≥ 0, that is t ≤ 30. For t > 30 the formula gives a positive depth that **increases** (its derivative is −0.4(6 − 0.2t), which is +0.8 at t = 40). But the differential equation says dh/dt = −0.4√h ≤ 0, so the depth can never increase. Once empty, the tank stays empty. The formula is valid for **0 ≤ t ≤ 30**.

| Point | What earns it |
|---|---|
| 1 | Separates and integrates correctly: 2√h = −0.4t + C |
| 1 | Uses h(0) = 36 to get C = 12, and h = (6 − 0.2t)² |
| 1 | t = 30 minutes, and h(10) = 16 cm with dh/dt = −1.6 cm per minute |
| 1 | Explains the failure for t > 30 (negative square root or increasing depth) and gives 0 ≤ t ≤ 30 |
</details>

## Question 6 (constructed response · core)

Consider dy/dx = 2x(y − 3).

(a) Find the general solution.
(b) Find the particular solutions through (0, 5) and through (0, 1).
(c) Find the particular solution through (0, 3), and explain why it is allowed even though you divided by y − 3 in (a).
(d) For the solution through (0, 5), find y(1) exactly.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Separate: (1/(y − 3)) dy = 2x dx. Integrate: ln|y − 3| = x² + C. So |y − 3| = e^C e^(x²) and **y = 3 + A e^(x²)**, with A any constant.

**(b)** Through (0, 5): 5 = 3 + A, so A = 2 and **y = 3 + 2e^(x²)**. Through (0, 1): 1 = 3 + A, so A = −2 and **y = 3 − 2e^(x²)**.

**(c)** Through (0, 3): 3 = 3 + A, so A = 0 and **y = 3**. Dividing by y − 3 assumed y ≠ 3, but the constant function y = 3 still satisfies the equation: dy/dx = 0 and 2x(3 − 3) = 0. It is the member of the family with A = 0. Each starting point gives exactly one particular solution, and this is the one through (0, 3).

**(d)** y(1) = 3 + 2e¹ = **3 + 2e** (about 8.44).

| Point | What earns it |
|---|---|
| 1 | General solution y = 3 + A e^(x²) (or ln\|y − 3\| = x² + C) |
| 1 | Both particular solutions in (b), with the correct signs of A |
| 1 | y = 3 in (c), with a check that it satisfies the equation |
| 1 | y(1) = 3 + 2e |
</details>

## Question 7 (constructed response · stretch)

Let y = g(x) be the particular solution of dy/dx = x eʸ with g(0) = 0.

(a) Find g(x).
(b) State the largest open interval on which g is valid, and explain your answer.
(c) Find g(1) exactly.
(d) Describe what happens to g(x) as x approaches the right end of the interval in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Separate: e^(−y) dy = x dx. Integrate: −e^(−y) = x²/2 + C. At (0, 0): −1 = 0 + C, so C = −1. Then −e^(−y) = x²/2 − 1, so e^(−y) = 1 − x²/2 and −y = ln(1 − x²/2). So **g(x) = −ln(1 − x²/2)**.

**(b)** The logarithm needs 1 − x²/2 > 0, that is x² < 2. The interval containing 0 is **−√2 < x < √2**.

**(c)** g(1) = −ln(1 − 1/2) = −ln(1/2) = **ln 2** (about 0.693).

**(d)** As x → √2 from the left, 1 − x²/2 → 0 through positive values, so ln(1 − x²/2) → −∞ and g(x) → **+∞**. The solution curve has a vertical asymptote at x = √2 (and, by symmetry, at x = −√2).

| Point | What earns it |
|---|---|
| 1 | Correct separation and antiderivative, −e^(−y) = x²/2 + C (not a logarithm of eʸ) |
| 1 | C = −1 from the initial condition, and g(x) = −ln(1 − x²/2) |
| 1 | Interval −√2 < x < √2, with the reason that the log's input must be positive |
| 1 | g(1) = ln 2, and g(x) → ∞ as x → √2⁻ |
</details>

## How did you do?

- **Q1 or Q4 wrong:** redo Worked examples 1 and 2 in the [study guide](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/); the sign comes from the initial value.
- **Q2 wrong:** reread "The integral form of a particular solution".
- **Q3, Q5(d) or Q7(b) wrong:** see "Domain restrictions", Worked example 3 and Figure 1.
- **Q6 wrong:** reread "From a family to one curve", then review the general-solution steps in [Topic 7.6](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-checklist/).
