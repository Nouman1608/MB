---
resourceId: "mb-ap-calcab-u7-review"
title: "Differential Equations: Mixed Unit Review (Calculus AB Unit 7)"
description: "The big ideas of Differential Equations in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics. One question is BC only."
course: "calculus-ab"
unit: 7
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 7 topics, or at least the Unit 7 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u7-diagnostic"]
learningObjectives:
  - "Connect modelling, verifying, slope fields and separation of variables as one set of ideas"
  - "Choose between reading a differential equation directly and solving it, depending on what a question asks"
  - "Answer multi-part questions that combine several Unit 7 topics, including models in context"
  - "Write complete justifications using signs, concavity, constant solutions and domains"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave e, π and ln in exact answers; decimals are given only to help you interpret."
related: ["mb-ap-calcab-u7-diagnostic", "mb-ap-calcab-7.1-checklist", "mb-ap-calcab-7.2-checklist", "mb-ap-calcab-7.3-checklist", "mb-ap-calcab-7.4-checklist", "mb-ap-calcbc-7.5-checklist", "mb-ap-calcab-7.6-checklist", "mb-ap-calcab-7.7-checklist", "mb-ap-calcab-7.8-checklist", "mb-ap-calcbc-7.9-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A differential equation gives the slope of every solution at every point; you can learn a lot from it before solving anything."
  - "Check any proposed solution by substituting it into both sides and into the initial condition."
  - "Separate, antidifferentiate, use the initial condition, then solve for y and state where the solution is valid."
  - "dy/dt = ky gives y = y₀e^(kt); a rate proportional to a difference, or to a square, gives a different model with different long-run behaviour."
  - "Shared review for Calculus AB and Calculus BC students; Question 7 (Euler's method and logistic growth) is BC only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after studying Unit 7, Differential Equations, or after the [Unit 7 diagnostic](/advanced-course-resources/calculus-ab/unit-7-diagnostic/). The unit is shared by Calculus AB and Calculus BC. **Question 7 is BC only** (Euler's method and logistic growth); Calculus AB students skip it. These are **original Marlbridge practice questions**, not past exam questions; contexts and data are invented. The rubrics are a suggested Marlbridge rubric, not official scoring. No calculator.

## Big ideas of the unit

- **A differential equation is a statement about rates.** "Proportional to" and "the difference between" turn into a rate equation; the sign shows increase or decrease ([Topic 7.1](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/)).
- **Checking a solution is differentiation.** Both sides must agree on a whole interval, not at one point ([Topic 7.2](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/)).
- **A slope field draws the equation.** Each segment has the slope the equation gives at that point ([Topic 7.3](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/)).
- **You can reason without solving.** The signs of dy/dx and d²y/dx² give direction and bending, and a constant solution is a level a curve cannot cross ([Topic 7.4](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/)).
- **Euler's method follows the field in steps (BC only).** Each step moves along a tangent line, so concavity says whether the estimate is too high or too low ([Topic 7.5](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/)).
- **Separation of variables turns the equation into two antiderivatives**, with one constant ([Topic 7.6](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/)).
- **An initial condition picks one curve, and that curve has a domain.** Find C at once, choose the sign of any root, and state where it is valid ([Topic 7.7](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/)).
- **"Rate proportional to amount" means exponential.** dy/dt = ky gives y = y₀e^(kt). Other rate laws give other shapes, so read the model first ([Topic 7.8](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/)).
- **Logistic growth levels off (BC only).** With y₀ > 0, y approaches a, and grows fastest at y = a/2 ([Topic 7.9](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| A sentence about a rate | Rate = k × (stated quantity); add a minus sign for a decrease | 7.1 |
| "Is this a solution?" | Differentiate, substitute into both sides, check the initial value | 7.2 |
| Horizontal segments | Set dy/dx = 0; a horizontal line here is a constant solution | 7.3, 7.4 |
| Estimate near a point | Tangent line, or Euler steps (BC only); concavity gives over or under | 7.4, 7.5 |
| dy/dx = f(x)g(y) | Separate, antidifferentiate, one constant | 7.6 |
| Initial condition given | Find C at once; choose the sign; state the open interval | 7.7 |
| No elementary antiderivative | y = y₀ + ∫ (a to x) f(t) dt | 7.7 |
| dy/dt = ky | y = y₀e^(kt); doubling time ln 2/k | 7.8 |
| dy/dt = ky(a − y) | Limit a; fastest at a/2 (BC only) | 7.9 |

## Question 1 (multiple choice · mixed)

A bacterial colony grows at a rate proportional to the number of cells N present, with t in hours. When N = 400, the colony is growing at 60 cells per hour. How long does it take the colony to double in size?

- (A) (20/3) ln 2 hours
- (B) 0.15 ln 2 hours
- (C) 20/3 hours
- (D) (ln 2)/60 hours

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dN/dt = kN with 60 = k(400) gives k = 0.15 per hour. N = N₀e^(0.15t) doubles when e^(0.15t) = 2, so t = (ln 2)/0.15 = (20/3) ln 2 hours (about 4.6).

- (B) multiplies by k instead of dividing.
- (C) assumes a steady 60 cells per hour. The rate rises as N grows.
- (D) uses the rate 60 as if it were k. k is the rate per cell, 60/400.

Topics: 7.1, 7.8.
</details>

## Question 2 (multiple choice · mixed)

Let y = f(x) be the particular solution of dy/dx = x/y with f(0) = −2. Which statement is true?

- (A) f(x) = −√(x² + 4), and f has a relative maximum at x = 0.
- (B) f(x) = −√(x² + 4), and f has a relative minimum at x = 0.
- (C) f(x) = √(x² + 4), and f has a relative minimum at x = 0.
- (D) f(x) = −√(x² + 2), and f has a relative maximum at x = 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: y dy = x dx, so y²/2 = x²/2 + C. At (0, −2), C = 2, so y² = x² + 4. f(0) < 0, so take the negative root: f(x) = −√(x² + 4). Since y < 0, dy/dx = x/y is positive for x < 0 and negative for x > 0, so f has a relative maximum at x = 0.

- (B) has the right formula but pictures the graph of x² + 4, not its negative.
- (C) takes the positive root, which does not pass through (0, −2).
- (D) forgets to double C when clearing the halves. Then f(0) = −√2, not −2.

Topics: 7.4, 7.6, 7.7.
</details>

## Question 3 (multiple choice · mixed)

Let y = F(x) be the particular solution of dy/dx = e^(−x²) with F(1) = 3. Which statement is true?

- (A) F(0) = 3 − ∫ (0 to 1) e^(−t²) dt, so 2 < F(0) < 3.
- (B) F(0) = 3 + ∫ (0 to 1) e^(−t²) dt, so 3 < F(0) < 4.
- (C) F(0) = ∫ (1 to 0) e^(−t²) dt, so F(0) < 0.
- (D) F(0) = 3 − 1/e exactly.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** There is no elementary antiderivative, so use the integral form: F(x) = 3 + ∫ (1 to x) e^(−t²) dt. Then F(0) = 3 + ∫ (1 to 0) e^(−t²) dt = 3 − ∫ (0 to 1) e^(−t²) dt. On [0, 1], 0 < e^(−t²) ≤ 1, so the integral is between 0 and 1, and 2 < F(0) < 3. (Every slope is positive, so F(0) < F(1) fits.)

- (B) forgets that the integral from 1 to 0 is negative.
- (C) drops the initial value 3.
- (D) is the tangent line estimate, not the exact value. (F(0) is about 2.25.)

Topics: 7.4, 7.7.
</details>

## Question 4 (constructed response · mixed)

In an invented model, the charge Q (per cent) of a phone battery increases at a rate proportional to the difference between 100 and Q, with t in minutes. At t = 0, Q = 20 and the charge is rising at 4 per cent per minute.

(a) Write a differential equation for Q and find the constant of proportionality, with units.
(b) Find d²Q/dt² in terms of Q. Explain what its sign says about the charging.
(c) Use the tangent line at t = 0 to estimate Q(2). Is this an overestimate or an underestimate? Justify.
(d) Use separation of variables to find Q(t), and find when the battery reaches 60 per cent.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dQ/dt = k(100 − Q), and 4 = k(80), so **k = 1/20 = 0.05 per minute**.

**(b)** d²Q/dt² = −0.05 · dQ/dt = **−0.0025(100 − Q)**. For Q < 100 this is negative, so the charging rate keeps falling: the battery charges more slowly as it fills.

**(c)** Q(2) ≈ 20 + 4(2) = **28 per cent**. d²Q/dt² < 0, so the graph of Q is concave down and the tangent line lies above it: 28 is an **overestimate**. (The model gives about 27.6.)

**(d)** For Q < 100, separate: dQ/(100 − Q) = 0.05 dt. Antidifferentiate: −ln(100 − Q) = 0.05t + C. At t = 0, −ln 80 = C. So ln(100 − Q) = ln 80 − 0.05t, giving 100 − Q = 80e^(−0.05t) and **Q(t) = 100 − 80e^(−t/20)**. Then 80e^(−t/20) = 40 gives **t = 20 ln 2 minutes** (about 13.9).

| Point | What earns it |
|---|---|
| 1 | dQ/dt = k(100 − Q) |
| 1 | k = 0.05 per minute, with units |
| 1 | d²Q/dt² = −0.0025(100 − Q) and the meaning of its sign |
| 1 | Estimate 28 and "overestimate" justified by concavity |
| 1 | Correct separation and antiderivatives with a constant |
| 1 | Q(t) = 100 − 80e^(−t/20) and t = 20 ln 2 minutes |

Total: 6 points. Topics: 7.1, 7.4, 7.6, 7.7.
</details>

## Question 5 (constructed response · mixed)

Consider the differential equation dy/dx = (2 − y)/(x² + 1).

(a) Show that y = 2 is a solution. Where in the plane are the slopes positive?
(b) Along the row y = 0, find the slopes at x = 0, x = 1 and x = 2. Describe how the segments change as you move away from the y-axis.
(c) Let y = f(x) be the particular solution through (0, 0). Find d²y/dx² at (0, 0) and say whether the graph of f is concave up or concave down there.
(d) Find f(x).
(e) A student says, "From the slope field, f(x) increases towards 2 as x → ∞." Find the limit of f(x) as x → ∞ and comment.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** If y = 2, the left side is 0 and the right side is (2 − 2)/(x² + 1) = 0 for every x, so **y = 2 is a solution**. x² + 1 > 0, so the slope is **positive wherever y < 2**.

**(b)** The slopes are 2/1 = **2**, 2/2 = **1** and 2/5 = **0.4**. The segments get **flatter** further from the y-axis, on both sides.

**(c)** Using the quotient rule and dy/dx: d²y/dx² = [−(dy/dx)(x² + 1) − (2 − y)(2x)]/(x² + 1)². At (0, 0), dy/dx = 2, so d²y/dx² = (−2 − 0)/1 = **−2 < 0: concave down**.

**(d)** For y < 2, separate: dy/(2 − y) = dx/(x² + 1). Antidifferentiate: −ln(2 − y) = arctan x + C. At (0, 0), −ln 2 = C. So ln(2 − y) = ln 2 − arctan x and 2 − y = 2e^(−arctan x). **f(x) = 2 − 2e^(−arctan x)**.

**(e)** As x → ∞, arctan x → π/2, so **f(x) → 2 − 2e^(−π/2)** (about 1.58). f does increase, but the slopes shrink like 1/x², so it levels off below y = 2. A slope field shows directions, not limits.

| Point | What earns it |
|---|---|
| 1 | Both sides shown equal to 0 for y = 2, and slopes positive for y < 2 |
| 1 | Slopes 2, 1, 0.4, with "flatter away from the y-axis" |
| 1 | Correct expression for d²y/dx² (implicit differentiation) |
| 1 | −2 at (0, 0), concave down |
| 1 | Correct separation with ln(2 − y) and arctan x |
| 1 | f(x) = 2 − 2e^(−arctan x) |
| 1 | Limit 2 − 2e^(−π/2), with a comment that the curve does not approach 2 |

Total: 7 points. Topics: 7.2, 7.3, 7.4, 7.6, 7.7.
</details>

## Question 6 (constructed response · mixed)

A boat cuts its engine at t = 0 seconds, with velocity 4 m/s, at position x = 0 m. Two invented models describe how it slows:

- **Model 1:** the boat's velocity v decreases at a rate proportional to the square of v.
- **Model 2:** v decreases at a rate proportional to v.

In both, the acceleration at t = 0 is −2 m/s².

(a) Write a differential equation for each model and find each constant of proportionality.
(b) Solve Model 1 to find v(t), and verify your answer.
(c) Give v(t) for Model 2 and find the position x(t) for each model.
(d) A buoy is 20 m from the boat's starting point. According to each model, does the boat reach it? If so, when?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Model 1: dv/dt = −kv². At t = 0: −2 = −k(16), so **k = 1/8**. Model 2: dv/dt = −kv. At t = 0: −2 = −k(4), so **k = 1/2**.

**(b)** Separate: v^(−2) dv = −(1/8) dt. Antidifferentiate: −1/v = −t/8 + C. At t = 0, −1/4 = C. So 1/v = t/8 + 1/4 = (t + 2)/8, and **v(t) = 8/(t + 2)**. Verify: dv/dt = −8/(t + 2)² = −(1/8)v², and v(0) = 4.

**(c)** Model 2 is exponential decay: **v(t) = 4e^(−t/2)**. Position is accumulated velocity from x(0) = 0.
Model 1: x(t) = ∫ (0 to t) 8/(s + 2) ds = **8 ln((t + 2)/2)**.
Model 2: x(t) = ∫ (0 to t) 4e^(−s/2) ds = **8 − 8e^(−t/2)**.

**(d)** Model 1: 8 ln((t + 2)/2) = 20 gives (t + 2)/2 = e^(2.5), so the boat **reaches the buoy at t = 2e^(2.5) − 2 seconds** (about 22.4). Model 2: x(t) = 8 − 8e^(−t/2) < 8 for every t, so the boat **never reaches the buoy**.

| Point | What earns it |
|---|---|
| 1 | Both differential equations with minus signs |
| 1 | k = 1/8 and k = 1/2 |
| 1 | Correct separation and antiderivative for Model 1 |
| 1 | v(t) = 8/(t + 2), verified in the equation and at t = 0 |
| 1 | v(t) = 4e^(−t/2) and both position functions |
| 1 | Model 1 time 2e^(2.5) − 2 seconds |
| 1 | Model 2 never reaches 20 m, justified by x(t) < 8 |

Total: 7 points. Topics: 7.1, 7.2, 7.6, 7.7, 7.8.
</details>

## Question 7 (constructed response · mixed) (BC only)

An invasive plant spreads over a 600 m² pond. The area A (m²) it covers grows at a rate jointly proportional to A and to the uncovered area. Time t is in weeks. At t = 0, A = 100 and the plant is spreading at 25 m² per week.

(a) Write a differential equation for A and find the constant of proportionality.
(b) Use Euler's method with two steps of 2 weeks to approximate A(4).
(c) Find d²A/dt² in terms of A. Is your answer to (b) an overestimate or an underestimate? Justify.
(d) Find lim A(t) as t → ∞. Find the area covered when the plant is spreading fastest, and that greatest rate, with units.
(e) A second pond has no plant at t = 0. Use the differential equation to explain what the model predicts for it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dA/dt = kA(600 − A). At t = 0: 25 = k(100)(500), so **k = 1/2000 = 0.0005**.

**(b)** Step 1: the slope at A = 100 is 25, so A(2) ≈ 100 + 2(25) = 150. Step 2: the slope at A = 150 is 0.0005(150)(450) = 33.75, so **A(4) ≈ 150 + 2(33.75) = 217.5 m²**.

**(c)** d²A/dt² = 0.0005(600 − 2A) · dA/dt = **0.0005²(600 − 2A) · A(600 − A)**. For 100 ≤ A < 300 this is positive, so the solution is concave up over these steps. Tangent lines lie below a concave up curve, so 217.5 is an **underestimate**.

**(d)** A(0) = 100 is below the carrying capacity, so A increases towards it: **lim A(t) = 600 m²**. The rate kA(600 − A) is greatest at **A = 300 m²**, half the carrying capacity, where dA/dt = 0.0005(300)(300) = **45 m² per week**.

**(e)** With A = 0, dA/dt = 0, and A = 0 is a constant solution. The model predicts the plant **never appears** there: it can only spread from plant already present.

| Point | What earns it |
|---|---|
| 1 | dA/dt = kA(600 − A) and k = 0.0005 |
| 1 | First Euler step: A(2) ≈ 150 |
| 1 | Second step with slope 33.75 at A = 150: A(4) ≈ 217.5 |
| 1 | Correct d²A/dt² in terms of A |
| 1 | Underestimate, justified by d²A/dt² > 0 on the interval |
| 1 | Limit 600 and A = 300 |
| 1 | Greatest rate 45 m² per week, with units |
| 1 | (e): A = 0 gives dA/dt = 0, a constant solution, so no growth |

Total: 8 points. Topics: 7.1, 7.4, 7.5, 7.9.
</details>

## How did you do?

Add up your points from Questions 4–6 (20 in total) and your correct answers to Questions 1–3; BC students add Question 7 (8 points). The total is only a guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[7.1](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-checklist/) ·
[7.2](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-checklist/) ·
[7.3](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-checklist/) ·
[7.4](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-checklist/) ·
[7.5 (BC only)](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-checklist/) ·
[7.6](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-checklist/) ·
[7.7](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-checklist/) ·
[7.8](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-checklist/) ·
[7.9 (BC only)](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-checklist/)

If many topics need work, go back to the [Unit 7 diagnostic](/advanced-course-resources/calculus-ab/unit-7-diagnostic/) and use its "Your next step" table to choose where to start.
