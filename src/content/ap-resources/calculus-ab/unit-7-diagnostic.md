---
resourceId: "mb-ap-calcab-u7-diagnostic"
title: "Differential Equations: Unit Diagnostic (Calculus AB Unit 7)"
description: "Nine short original questions, one per topic of Differential Equations, to show which topics you should revisit, with explanations and links. Two questions are BC only."
course: "calculus-ab"
unit: 7
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Antiderivatives of powers, exponentials, trigonometric functions and 1/x (Unit 6)"
  - "The chain rule and implicit differentiation (Unit 3)"
  - "Tangent lines and the meaning of the second derivative (Units 4 and 5)"
learningObjectives:
  - "Find out which Unit 7 topics are secure and which need more work"
  - "Check modelling, verifying, slope field and separation of variables skills quickly"
  - "Practise short written reasoning about solution curves and the domain of a particular solution"
skills: ["1", "2", "3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave e, π and ln in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcab-u7-review", "mb-ap-calcab-7.4-study-guide", "mb-ap-calcab-7.7-study-guide", "mb-ap-calcab-7.8-study-guide"]
next: "mb-ap-calcab-u7-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 7, to decide which of the 9 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "Questions 5 (Euler's method, Topic 7.5) and 9 (logistic models, Topic 7.9) are BC only; Calculus AB students skip them."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 7, Differential Equations, to revisit. There is one question per topic. These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are invented. The questions are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening any answer. k is a positive constant wherever it appears. The unit is shared by Calculus AB and Calculus BC. **Questions 5 and 9 are BC only** (Euler's method and logistic models). If you take Calculus AB, skip them; the other seven questions are for both courses.

## Question 1 (multiple choice · 7.1)

A cake is put into a freezer kept at −18 °C. In an invented model, the temperature T (°C) of the cake decreases at a rate proportional to the square of the difference between T and the freezer temperature. Time t is in minutes. Which differential equation fits this model?

- (A) dT/dt = −k(T − 18)²
- (B) dT/dt = k(T + 18)²
- (C) dT/dt = −k(T + 18)²
- (D) dT/dt = −k(T² + 18²)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The difference between T and −18 is T − (−18) = T + 18. "The square of the difference" is (T + 18)². The temperature decreases and k > 0, so a minus sign is needed.

- (A) uses +18 °C as the freezer temperature. Watch the sign when the fixed value is negative.
- (B) has the right form but describes a cake that warms up.
- (D) squares each term separately. (T + 18)² is not T² + 18².

**If you missed this:** "Getting the sign right" in the [Topic 7.1 study guide](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/).
</details>

## Question 2 (multiple choice · 7.2)

Which function is a solution of the differential equation x · dy/dx = 2y + x³ for x > 0?

- (A) y = x³ + 5x²
- (B) y = x³ + 5
- (C) y = x²
- (D) y = x³/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Substitute into both sides. For y = x³ + 5x², dy/dx = 3x² + 10x, so the left side is x(3x² + 10x) = 3x³ + 10x². The right side is 2(x³ + 5x²) + x³ = 3x³ + 10x². They match for every x > 0. In fact y = x³ + Cx² works for every constant C.

- (B) Adding a constant to x³ breaks the equation: the left side is 3x³ but the right side is 3x³ + 10.
- (C) is tempting because x · 2x = 2x² matches 2y, but the extra x³ on the right is left over.
- (D) gives x³ on the left and (5/3)x³ on the right.

**If you missed this:** "The verification method" in the [Topic 7.2 study guide](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/).
</details>

## Question 3 (multiple choice · 7.3)

Which statement about the slope field for dy/dx = x² − y² is true?

- (A) The segments are horizontal at every point of the line y = x and of the line y = −x.
- (B) The segments are horizontal only at points of the line y = x.
- (C) Every segment in a vertical column has the same slope.
- (D) At every point of the y-axis other than the origin, the segments rise from left to right.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The slope is 0 when x² = y², that is when y = x or y = −x. For example, the slope at (2, 2) and at (2, −2) is 4 − 4 = 0.

- (B) solves x² = y² as y = x only and forgets the negative root.
- (C) would be true only if the slope depended on x alone. Here it depends on y too: in the column x = 1 the slopes at y = 0, 1, 2 are 1, 0 and −3.
- (D) On the y-axis, x = 0, so the slope is −y², which is negative. The segments fall.

**If you missed this:** "Patterns that let you read a field quickly" in the [Topic 7.3 study guide](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/).
</details>

## Question 4 (short answer · 7.4)

Consider the differential equation dy/dx = (y − 2)(y + 1). Let y = f(x) be the particular solution through the point (0, 1).

(a) Find all constant solutions of the differential equation.
(b) Is f increasing or decreasing at x = 0? Is the graph of f concave up or concave down there? Justify both answers.
(c) Describe the behaviour of f(x) as x → ∞. Explain your reasoning.

<details>
<summary>Worked answer</summary>

**(a)** A constant solution has dy/dx = 0 for every x. (y − 2)(y + 1) = 0 gives **y = 2 and y = −1**.

**(b)** At (0, 1), dy/dx = (1 − 2)(1 + 1) = −2 < 0, so f is **decreasing**. Differentiate implicitly: d²y/dx² = [(y + 1) + (y − 2)] · dy/dx = (2y − 1) · dy/dx. At (0, 1), d²y/dx² = (1)(−2) = −2 < 0, so the graph is **concave down**.

**(c)** For −1 < y < 2, one factor is negative and one is positive, so dy/dx < 0. The solution keeps falling, but it cannot cross the constant solution y = −1. So **f(x) decreases towards −1**: the limit of f(x) as x → ∞ is −1.

**If you missed this:** "Constant solutions" and Worked example 1 in the [Topic 7.4 study guide](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/).
</details>

## Question 5 (multiple choice · 7.5) (BC only)

Let y = f(x) be the solution of dy/dx = x + 2y with f(1) = 0. Using Euler's method with two steps of size 0.5, starting at x = 1, what is the approximation of f(2)?

- (A) 1
- (B) 1.25
- (C) 1.75
- (D) 4.5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Step 1: the slope at (1, 0) is 1 + 0 = 1, so f(1.5) ≈ 0 + 0.5(1) = 0.5. Step 2: the slope at (1.5, 0.5) is 1.5 + 1 = 2.5, so f(2) ≈ 0.5 + 0.5(2.5) = 1.75.

- (A) is one step of size 1, the tangent line at x = 1.
- (B) works out the second slope at (1.5, 0), using the old y-value instead of the new one.
- (D) forgets to multiply each slope by the step size 0.5: 0 + 1 = 1, then 1 + 3.5 = 4.5.

**If you missed this:** "The procedure" in the [Topic 7.5 study guide](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/).
</details>

## Question 6 (multiple choice · 7.6)

What is the general solution of dy/dx = eʸ cos x?

- (A) y = −ln(C − sin x)
- (B) y = −ln(sin x + C)
- (C) y = Ce^(sin x)
- (D) y = ln(sin x + C)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: e^(−y) dy = cos x dx. Antidifferentiate: −e^(−y) = sin x + C. So e^(−y) = C − sin x (the constant just changes sign), and −y = ln(C − sin x), giving y = −ln(C − sin x). Check: dy/dx = cos x/(C − sin x), and eʸ cos x = cos x/(C − sin x).

- (B) antidifferentiates e^(−y) as e^(−y), missing the factor −1 from the chain rule.
- (C) solves dy/dx = y cos x. Here the factor is eʸ, not y.
- (D) multiplies by eʸ instead of dividing by it, so the variables are not really separated.

**If you missed this:** "The method" and Worked example 3 in the [Topic 7.6 study guide](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/).
</details>

## Question 7 (short answer · 7.7)

Let y = g(x) be the particular solution of dy/dx = 2x/cos y with g(0) = 0.

(a) Find g(x).
(b) State the largest open interval containing x = 0 on which g is a solution. Explain.
(c) Find g(1/√2) exactly.

<details>
<summary>Worked answer</summary>

**(a)** Separate: cos y dy = 2x dx. Antidifferentiate: sin y = x² + C. At (0, 0): sin 0 = 0 + C, so C = 0 and sin y = x². The solution passes through y = 0, so y stays between −π/2 and π/2, where y = arcsin(sin y). So **g(x) = arcsin(x²)**.

**(b)** arcsin(x²) needs x² ≤ 1. At x = ±1, g = arcsin 1 = π/2 and cos(π/2) = 0, so the differential equation dy/dx = 2x/cos y is undefined there. The interval must be open and contain 0, so it is **−1 < x < 1**.

**(c)** g(1/√2) = arcsin(1/2) = **π/6**.

**If you missed this:** "Domain restrictions" and Worked example 3 in the [Topic 7.7 study guide](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/).
</details>

## Question 8 (multiple choice · 7.8)

A quantity Q satisfies dQ/dt = kQ, where k is a constant (here k may be negative). Q(0) = 500 and Q(4) = 125. What is Q(6)?

- (A) 62.5
- (B) 15.625
- (C) 31.25
- (D) −62.5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The solution is Q = 500e^(kt). From Q(4) = 125: e^(4k) = 1/4, so k = −(ln 2)/2 and Q halves every 2 time units. From t = 4 to t = 6 is one half-life, so Q(6) = 125/2 = 62.5. (Directly: Q(6) = 500e^(−3 ln 2) = 500/8.)

- (B) starts at Q(4) = 125 but then lets 6 time units pass instead of 2.
- (C) applies the factor 1/4 to the last 2 time units. The factor 1/4 belongs to 4 time units.
- (D) assumes Q falls by the same amount each unit (a straight line). An exponential model never changes sign.

**If you missed this:** Worked example 2 in the [Topic 7.8 study guide](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/).
</details>

## Question 9 (multiple choice · 7.9) (BC only)

A population P of fish in a lake satisfies dP/dt = 0.3P − 0.0015P², where t is in years, and P(0) = 50. Which statement is true at the moment when P = 160?

- (A) P is increasing, and its graph is concave up.
- (B) P is increasing, and its graph is concave down.
- (C) P is decreasing, and its graph is concave down.
- (D) P is growing at its greatest rate.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Factor: dP/dt = 0.0015P(200 − P), so the carrying capacity is 200. At P = 160, dP/dt = 48 − 38.4 = 9.6 > 0: increasing. The population grows fastest at half the carrying capacity, P = 100. It is past that point, so the rate is falling and the graph is concave down. Check: d²P/dt² = (0.3 − 0.003P) · dP/dt = (−0.18)(9.6) < 0.

- (A) would be true below P = 100, before the point of inflection.
- (C) Below the carrying capacity, P always increases.
- (D) The greatest rate happens at P = 100, not 160.

**If you missed this:** "Reading the equation without solving it" in the [Topic 7.9 study guide](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 7.1 Modelling with differential equations | 1 | [Guide 7.1](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/) |
| 7.2 Verifying solutions | 2 | [Guide 7.2](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/) |
| 7.3 Sketching slope fields | 3 | [Guide 7.3](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/) |
| 7.4 Reasoning using slope fields | 4 | [Guide 7.4](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/) |
| 7.5 Euler's method (BC only) | 5 | [Guide 7.5](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/) |
| 7.6 General solutions by separation | 6 | [Guide 7.6](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/) |
| 7.7 Particular solutions | 7 | [Guide 7.7](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/) |
| 7.8 Exponential models | 8 | [Guide 7.8](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/) |
| 7.9 Logistic models (BC only) | 9 | [Guide 7.9](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 7.2 and 7.6 first.** Checking a solution by substitution (7.2) lets you catch your own mistakes everywhere else, and separation of variables (7.6) is the engine of Topics 7.7 and 7.8.
- **Check your written answers** to Questions 4 and 7 as well as the values. Did you give a reason (the sign of dy/dx, a constant solution that cannot be crossed, where the equation is undefined) and not just a conclusion?
- **For a gap**, read the guide, then do the topic's practice set.
- **Then try the [Unit 7 mixed review](/advanced-course-resources/calculus-ab/unit-7-review/)**, where each question combines topics.
