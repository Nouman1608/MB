---
resourceId: "mb-ap-calcab-7.8-practice"
title: "Exponential Models with Differential Equations: Practice Questions (Calculus AB 7.8)"
description: "Seven original Marlbridge practice questions on dy/dt = ky: translating sentences, finding k, half-lives, checking solutions and motion, with full solutions and rubrics."
course: "calculus-ab"
unit: 7
topics: ["7.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Separation of variables and particular solutions (Topics 7.6 and 7.7)"
  - "Laws of logarithms and exponents"
prerequisiteResources: ["mb-ap-calcab-7.8-study-guide"]
learningObjectives:
  - "Write dy/dt = ky from a description in words and interpret its constants"
  - "Find particular solutions and the constant k from data, a half-life or a doubling time"
  - "Confirm that a proposed solution is correct and that numerical answers are reasonable"
  - "Use a decay model for velocity to find position and total distance"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1 to 5 need no calculator. A scientific or graphing calculator is allowed for Questions 6 and 7. Round final decimal answers to three decimal places."
related: ["mb-ap-calcab-7.8-study-guide", "mb-ap-calcab-7.8-revision-notes", "mb-ap-calcab-7.8-checklist"]
next: "mb-ap-calcab-7.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions: **no calculator for Questions 1 to 5**; a calculator is allowed for Questions 6 and 7; round final decimal answers to three decimal places. All contexts and data are invented. Notation: e^(kt) means e to the power kt, and y₀ is the value at t = 0. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The mass S of salt dissolved in a tank decreases at a rate proportional to the mass of salt present. Here t is time and k is a positive constant. Which differential equation models this?

- (A) dS/dt = −kS
- (B) dS/dt = −kt
- (C) dS/dt = −k/S
- (D) S = −kt

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "Rate of change of S" is dS/dt. "Proportional to the mass present" means a constant times S. "Decreases" with k > 0 needs a minus sign. So dS/dt = −kS.

- (B) makes the rate proportional to time t, not to the amount S. Its solution is a parabola, not an exponential.
- (C) makes the rate inversely proportional to S: the less salt, the faster it would leave.
- (D) is not a differential equation at all. It describes S itself as a straight line, which would also become negative.
</details>

## Question 2 (multiple choice · core)

y satisfies dy/dt = −0.2y and y(0) = 50. What is y(10)?

- (A) 50e^(−2)
- (B) 50e^(2)
- (C) e^(−2) + 49
- (D) −50

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The solution of dy/dt = ky with y(0) = y₀ is y = y₀e^(kt). Here y = 50e^(−0.2t), so y(10) = 50e^(−2) ≈ 6.767.

- (B) drops the minus sign, turning decay into growth (≈ 369.453).
- (C) comes from the wrong form y = e^(kt) + C, with C = 49 chosen to make y(0) = 50. This function does not satisfy dy/dt = −0.2y.
- (D) treats the starting rate, −0.2 × 50 = −10 per unit time, as constant for 10 time units: 50 − 100 = −50. The rate shrinks as y shrinks, and a decay model never goes negative.
</details>

## Question 3 (multiple choice · core)

An invented radioactive isotope has a half-life of 8 days. The amount Q satisfies dQ/dt = kQ, with t in days. What is k?

- (A) −(ln 2)/8
- (B) −8 ln 2
- (C) −1/16
- (D) (ln 2)/8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** After 8 days Q is half of Q₀: Q₀e^(8k) = Q₀/2, so e^(8k) = 1/2 and 8k = ln(1/2) = −ln 2. So k = −(ln 2)/8 ≈ −0.087 per day.

- (B) multiplies by 8 instead of dividing (≈ −5.545). That would make the amount halve in a small fraction of a day.
- (C) reasons "half in 8 days, so k = −(1/2)/8". That treats the decay as linear and ignores the logarithm.
- (D) has the wrong sign: a positive k describes growth, not decay.
</details>

## Question 4 (multiple choice · core)

A town's population P (in thousands) satisfies dP/dt = 0.05P, with t in years and P(0) = 40. Which statement is true?

- (A) P increases by 2 thousand every year.
- (B) P increases by exactly 5% every year.
- (C) P doubles every (ln 2)/0.05 ≈ 13.863 years, whatever its value at the start of that period.
- (D) The rate of growth when P = 80 is the same as when P = 40.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** P = 40e^(0.05t). P doubles when e^(0.05T) = 2, so T = (ln 2)/0.05 ≈ 13.863 years. Because each time step multiplies P by the same factor, this doubling time does not depend on the starting value.

- (A) uses the initial rate 0.05 × 40 = 2 thousand per year as if it never changed. The rate grows as P grows.
- (B) confuses the instantaneous relative rate with the yearly change. In one year P is multiplied by e^0.05 ≈ 1.0513, an increase of about 5.13%.
- (D) contradicts the equation: at P = 80 the rate is 0.05 × 80 = 4 thousand per year, twice the rate at P = 40.
</details>

## Question 5 (constructed response · core, no calculator)

A student is asked to solve dy/dt = 0.6y with y(0) = 5. The student writes:

"(1/y) dy = 0.6 dt, so ln y = 0.6t + C, so y = e^(0.6t) + C. Using y(0) = 5 gives C = 4, so y = e^(0.6t) + 4."

(a) Show that the student's function does **not** satisfy the differential equation.
(b) Identify the step where the error happens and explain it.
(c) Give the correct solution and confirm that it satisfies both the differential equation and the initial condition.
(d) A second student, using the correct model, reports y(2) ≈ 1.506. Without calculating y(2), explain why this cannot be right.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** If y = e^(0.6t) + 4, then dy/dt = 0.6e^(0.6t). But 0.6y = 0.6e^(0.6t) + 2.4. These differ by 2.4 for every t, so dy/dt ≠ 0.6y. (The initial condition does hold, y(0) = 1 + 4 = 5, which is why the error is easy to miss.)

**(b)** The error is in going from ln y = 0.6t + C to y = e^(0.6t) + C. Exponentiating gives y = e^(0.6t + C) = e^C · e^(0.6t). The constant becomes a **factor**, not an added term.

**(c)** y = Ae^(0.6t), and y(0) = A = 5, so **y = 5e^(0.6t)**. Check: dy/dt = 5 × 0.6e^(0.6t) = 0.6(5e^(0.6t)) = 0.6y ✓. y(0) = 5e⁰ = 5 ✓.

**(d)** Since k = 0.6 > 0 and y(0) = 5 > 0, dy/dt = 0.6y > 0, so y is increasing. So y(2) must be greater than 5. The value 1.506 is below the starting value. (It equals 5e^(−1.2), so the second student probably lost the sign of k. The correct value is 5e^(1.2) ≈ 16.601.)

| Point | What earns it |
|---|---|
| 1 | Differentiates the student's function and shows dy/dt ≠ 0.6y (the difference 2.4, or equivalent) |
| 1 | Locates the error at exponentiation and explains that e^(0.6t + C) = e^C · e^(0.6t) |
| 1 | Correct solution y = 5e^(0.6t) **with** both checks: derivative and initial value |
| 1 | Explains, using the sign of dy/dt (or k > 0 and y > 0), that y increases, so y(2) > 5 |

Acceptable alternative for (a): substitute one value, e.g. at t = 0, dy/dt = 0.6 but 0.6y = 3.
</details>

## Question 6 (constructed response · core, calculator allowed)

The area A (cm²) of a moss colony on a test wall grows at a rate proportional to its area. At t = 0 weeks, A = 18; at t = 4 weeks, A = 30.

(a) Write a differential equation for A and give the particular solution in terms of k.
(b) Find the exact value of k, and give it to three decimal places with units.
(c) Find A(10).
(d) Find dA/dt at t = 10. Use correct units and explain what the value means.
(e) The wall panel has area 100 cm². According to the model, when will the moss cover it?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dA/dt = kA, with A(0) = 18. So A(t) = 18e^(kt).

**(b)** 30 = 18e^(4k), so e^(4k) = 30/18 = 5/3, and **k = (1/4) ln(5/3) ≈ 0.128 per week**. k > 0, as growth requires.

**(c)** A(10) = 18e^(10k) = 18(5/3)^(5/2) ≈ **64.550 cm²**. (If k is rounded to 0.128 first, you get about 64.740: a reminder to keep full accuracy.)

**(d)** dA/dt = kA = 0.12771 × 64.550 ≈ **8.243 cm² per week**. At t = 10 weeks the colony's area is increasing at about 8.243 cm² per week at that instant.

**(e)** 18e^(kt) = 100, so t = ln(100/18)/k ≈ **13.428 weeks**.

**Reasonableness.** The growth rate at t = 0 is about 2.299 cm² per week, much less than 8.243 at t = 10: consistent with a rate that grows with the area.

| Point | What earns it |
|---|---|
| 1 | dA/dt = kA and A = 18e^(kt) |
| 1 | k = (1/4) ln(5/3) ≈ 0.128, with units "per week" |
| 1 | A(10) ≈ 64.550 |
| 1 | dA/dt ≈ 8.243 cm²/week, with an interpretation that names time t = 10, units and "increasing" |
| 1 | t ≈ 13.428 weeks from a correct equation |

Acceptable alternative: A(t) = 18(5/3)^(t/4), which is the same function. In this suggested rubric, final answers must be correct to three decimal places, so a value such as 64.740 from a rounded k does not earn the mark for (c).
</details>

## Question 7 (constructed response · stretch, calculator allowed)

A puck slides along a straight, level track. Its velocity v (m/s) decreases at a rate proportional to its velocity. At t = 0 seconds, v = 8; at t = 3, v = 2. The puck starts at position x = 0 metres.

(a) Find v(t), giving k exactly.
(b) Find the acceleration at t = 3, with units.
(c) Find the position x(3).
(d) A barrier stands 18 m from the start. Will the puck ever reach it? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dv/dt = kv, so v = 8e^(kt). Then 2 = 8e^(3k), e^(3k) = 1/4 and **k = (1/3) ln(1/4) = −(2 ln 2)/3 ≈ −0.462 per second**. So **v(t) = 8e^(−(2 ln 2)t/3)**, or equivalently v(t) = 8 · 4^(−t/3).

**(b)** a(3) = dv/dt = kv(3) = −0.46210 × 2 ≈ **−0.924 m/s²**.

**(c)** x(3) = 0 + ∫ (0 to 3) 8e^(ks) ds = (8/k)(e^(3k) − 1) = (8/k)(1/4 − 1) = −6/k = 9/ln 2 ≈ **12.984 m**.

**(d)** In general x(t) = (8/k)(e^(kt) − 1) = (12/ln 2)(1 − e^(kt)). Since k < 0, e^(kt) → 0 as t → ∞, so x(t) increases towards 12/ln 2 ≈ 17.312 m but never reaches it. That is less than 18 m, so **the puck never reaches the barrier**.

**Reasonableness.** A constant deceleration from 8 to 2 m/s would cover (8 + 2)/2 × 3 = 15 m in 3 seconds. Here the puck slows fastest at the start, so it covers less, 12.984 m. ✓

| Point | What earns it |
|---|---|
| 1 | Sets up dv/dt = kv and v = 8e^(kt) |
| 1 | k = (1/3) ln(1/4) (exact) |
| 1 | Acceleration ≈ −0.924 m/s² using dv/dt = kv (or by differentiating) |
| 1 | x(3) ≈ 12.984 m from a definite integral of v |
| 1 | Total distance bound 12/ln 2 ≈ 17.312 m, with a limit argument, and conclusion that 18 m is never reached |

Acceptable alternative for (d): note that the distance travelled after t = 3 is at most v(3)/|k| = 2/0.4621 ≈ 4.328 m, and 12.984 + 4.328 ≈ 17.312 < 18.
</details>

## How did you do?

- **Q1 or Q4 wrong:** revisit "From a sentence to a differential equation" and "What y₀ and k mean" in the [study guide](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/).
- **Q2 or Q5 wrong:** redo "Solving dy/dt = ky by separation of variables" and "Confirm the solution before you use it".
- **Q3 wrong:** see Worked example 2 (half-life) and Figure 1.
- **Q6 wrong:** redo Worked example 1, keeping k at full accuracy.
- **Q7 wrong:** redo Worked example 3 (motion along a line).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-checklist/).
