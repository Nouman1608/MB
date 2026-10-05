---
resourceId: "mb-ap-calcbc-7.9-practice"
title: "Logistic Models with Differential Equations: Practice Questions (Calculus BC 7.9)"
description: "Seven original Marlbridge practice questions on logistic models: carrying capacity, long-run limits, fastest growth, concavity and interpretation in context, with rubrics."
course: "calculus-bc"
unit: 7
topics: ["7.9"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Differential equations from words (Topic 7.1), exponential models (Topic 7.8) and concavity (Unit 5)"
prerequisiteResources: ["mb-ap-calcbc-7.9-study-guide"]
learningObjectives:
  - "Write a logistic differential equation from a verbal description"
  - "Find the carrying capacity, the long-run limit and the value of greatest growth from the equation"
  - "Use the second derivative to describe the shape of a logistic solution"
  - "Interpret the constants and results of a logistic model in context, with units"
skills: ["3", "1", "2"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: calculator allowed; give final decimals to 3 decimal places."
related: ["mb-ap-calcbc-7.9-study-guide", "mb-ap-calcbc-7.9-revision-notes", "mb-ap-calcbc-7.9-checklist"]
next: "mb-ap-calcbc-7.9-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for Questions 1–6; in Question 7 a calculator may be used, with final decimals to 3 decimal places. All contexts and data are invented. In every model, k and the carrying capacity are positive constants.

## Question 1 (multiple choice · foundation)

A quantity y satisfies dy/dt = 0.002y(350 − y), with y(0) = 40. What is lim y(t) as t → ∞?

- (A) 0.7
- (B) 40
- (C) 175
- (D) 350

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The equation has the form ky(a − y) with a = 350. Since y(0) = 40 > 0, y increases towards the carrying capacity, so the limit is 350.

- (A) is k × a = 0.002 × 350 = 0.7, the relative growth rate when y is small. It is not a value of y.
- (B) is the starting value. The quantity does not stay there, because dy/dt = 0.002 × 40 × 310 > 0.
- (C) is a/2, where y grows fastest, not where it ends up.
</details>

## Question 2 (multiple choice · core)

A population P satisfies dP/dt = 0.3P − 0.0006P², with P(0) = 50. For what value of P is the population growing fastest?

- (A) 50
- (B) 250
- (C) 500
- (D) 37.5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Factor: 0.3P − 0.0006P² = 0.0006P(500 − P). So a = 500 and growth is fastest at P = a/2 = 250. Since 50 < 250, the population does pass through 250.

- (A) assumes growth is fastest at the start. At P = 50 the curve is still concave up, so the rate is still increasing.
- (C) is the carrying capacity, where the rate is 0.
- (D) is the greatest **rate**, 0.0006 × 250 × 250 = 37.5 per unit time, not the value of P.
</details>

## Question 3 (multiple choice · core)

A quantity y satisfies dy/dt = 0.01y(60 − y), with y(0) = 90. Which statement describes y for t ≥ 0?

- (A) y increases without bound.
- (B) y decreases and approaches 60; its graph is concave up.
- (C) y decreases and approaches 60; its graph is concave down.
- (D) y decreases and approaches 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At y = 90, dy/dt = 0.01 × 90 × (−30) = −27 < 0, so y decreases. It approaches the carrying capacity 60 and never crosses it, because y = 60 is a constant solution. d²y/dt² = 0.01(60 − 2y) · dy/dt; for y > 60 both factors are negative, so d²y/dt² > 0 (at y = 90 it is 32.4): concave up.

- (A) would need dy/dt > 0; above the carrying capacity the rate is negative.
- (C) gets the direction right but the concavity wrong. The fall slows down as y nears 60, which is concave up.
- (D) ignores the constant solution y = 60. The quantity cannot pass below 60.
</details>

## Question 4 (multiple choice · core)

A plant disease spreads through a field of 2000 plants. The rate at which plants become infected is jointly proportional to the number I already infected and the number not yet infected. Which differential equation models this, for a positive constant k?

- (A) dI/dt = k(2000 − I)
- (B) dI/dt = kI(2000 − I)
- (C) dI/dt = kI + k(2000 − I)
- (D) dI/dt = kI/(2000 − I)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "Jointly proportional" to I and to 2000 − I means proportional to their **product**, kI(2000 − I). This is the logistic form with carrying capacity 2000.

- (A) is proportional only to the number not infected. Its solutions approach 2000 but grow fastest at the start, not at 1000.
- (C) adds the two quantities. It simplifies to 2000k, a constant rate.
- (D) divides instead of multiplying. It makes the rate grow without bound as I nears 2000.
</details>

## Question 5 (constructed response · core)

The area A, in mm², of a bacterial colony in a dish satisfies **dA/dt = 0.005A(200 − A)**, where t is in hours, and A(0) = 20.

(a) Find lim A(t) as t → ∞.
(b) Find the area of the colony when it is growing fastest, and the rate of growth at that moment. Include units.
(c) Find d²A/dt² in terms of A. Is the graph of A concave up or concave down when A = 150? Justify.
(d) A second dish starts with A(0) = 250. Describe how A changes over time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a = 200 and A(0) = 20 > 0, so **lim A(t) = 200 mm²**.

**(b)** Fastest growth at A = 200/2 = **100 mm²**. The rate then is 0.005 × 100 × 100 = **50 mm² per hour**.

**(c)** dA/dt = 0.005(200A − A²), so d²A/dt² = 0.005(200 − 2A) · dA/dt = **0.005(200 − 2A) · 0.005A(200 − A)**.
At A = 150: dA/dt = 0.005 × 150 × 50 = 37.5 > 0, and 200 − 2(150) = −100 < 0, so d²A/dt² = 0.005 × (−100) × 37.5 = −18.75 < 0. **Concave down.** (A is above 100, so growth is slowing.)

**(d)** At A = 250, dA/dt = 0.005 × 250 × (−50) = −62.5 < 0. The area **decreases** towards 200 mm², falling more and more slowly (concave up), and never goes below 200.

| Point | What earns it |
|---|---|
| 1 | Limit 200 |
| 1 | A = 100 mm² for fastest growth |
| 1 | Greatest rate 50 mm² per hour, with units |
| 1 | Correct d²A/dt² (chain rule) and "concave down" at A = 150 with the sign shown |
| 1 | (d): decreases towards 200, with a reason (dA/dt < 0 when A > 200) |

Total: 5 points.
</details>

## Question 6 (constructed response · core)

The number of users U, in thousands, of a new phone app in a fictional city is modelled by **dU/dt = 0.5U(1 − U/60)**, where t is in months, and U(0) = 4.

(a) Rewrite the equation in the form dU/dt = kU(a − U). State k and a.
(b) Find lim U(t) as t → ∞ and interpret it in context.
(c) How many users does the app have when the number is growing fastest? Find the rate of growth then, with units.
(d) A manager says: "The 0.5 in the model means the app gains 50% more users every month." Explain why this is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 0.5U(1 − U/60) = (0.5/60) U(60 − U) = (1/120) U(60 − U). So **k = 1/120** and **a = 60**.

**(b)** U(0) = 4 > 0, so **lim U(t) = 60**: in the long run the model predicts about **60 000 users**, the most the city's market can support.

**(c)** Fastest at U = 60/2 = **30, that is 30 000 users**. The rate is 0.5 × 30 × (1 − 30/60) = **7.5 thousand users per month** (7500 users per month).

**(d)** The relative growth rate is (dU/dt)/U = 0.5(1 − U/60), which **changes** as U changes. It is close to 0.5 only when U is small (at U = 4 it is 0.5 × 56/60 ≈ 0.467), and it falls towards 0 as U approaches 60 (at U = 45 it is 0.125). Also, even a constant relative rate of 0.5 is an instantaneous rate, not "50% more each month".

| Point | What earns it |
|---|---|
| 1 | k = 1/120 and a = 60, with the rewriting shown |
| 1 | Limit 60, interpreted as 60 000 users in the long run |
| 1 | 30 thousand users when growing fastest |
| 1 | 7.5 thousand users per month, with units |
| 1 | (d): explains that the relative rate 0.5(1 − U/60) depends on U and decreases as U grows |

Total: 5 points.
</details>

## Question 7 (constructed response · stretch, calculator allowed)

The number of birds B of a protected species on a fictional island satisfies **dB/dt = 0.0008B(500 − B)**, where t is in years, and B(0) = 50.

(a) Use Euler’s method with two steps of 1 year to approximate B(2).
(b) The solution is B(t) = 500/(1 + 9e^(−0.4t)). Find B(2) to 3 decimal places. Explain why your answer to (a) is lower, using d²B/dt².
(c) Find the number of birds when the population is growing fastest, and the time at which this happens.
(d) Find the greatest rate of growth, with units.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Step 1: slope at (0, 50) is 0.0008 × 50 × 450 = 18, so B(1) ≈ 68.
Step 2: slope at (1, 68) is 0.0008 × 68 × 432 = 23.5008, so **B(2) ≈ 68 + 23.5008 = 91.501 birds**.

**(b)** B(2) = 500/(1 + 9e^(−0.8)) ≈ **99.128 birds**.
d²B/dt² = 0.0008(500 − 2B) · dB/dt. For 0 < B < 250, both factors are positive, so the solution is concave up. The Euler steps follow tangent lines, which lie below a concave-up curve, so 91.501 is an underestimate.

**(c)** Fastest growth at B = 500/2 = **250 birds**. Solve 500/(1 + 9e^(−0.4t)) = 250: 1 + 9e^(−0.4t) = 2, so e^(−0.4t) = 1/9 and t = ln 9 / 0.4 ≈ **5.493 years**.

**(d)** 0.0008 × 250 × 250 = **50 birds per year**.

| Point | What earns it |
|---|---|
| 1 | Correct Euler steps, giving 68 and then 91.501 |
| 1 | B(2) ≈ 99.128 from the formula |
| 1 | Underestimate explained by d²B/dt² > 0 (concave up) for B < 250 |
| 1 | B = 250 and t = ln 9 / 0.4 ≈ 5.493 years |
| 1 | 50 birds per year, with units |

Total: 5 points. For (c) a calculator intersection of the graph of B with B = 250 is also accepted. Check of the given formula (not required): B(0) = 500/10 = 50 ✓.
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** reread "Reading the equation without solving it" in the [study guide](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-study-guide/).
- **Q2 or Q5(b) wrong:** practise factoring into ky(a − y) and finding a/2 (Worked example 1).
- **Q3 or Q5(d) wrong:** look at Figure 2 and the concavity rule d²y/dt² = k(a − 2y) · dy/dt.
- **Q4 or Q6 wrong:** work through Worked example 2 (from a sentence to the model) and Worked example 1(d).
- **Q7 wrong:** combine this topic with [Euler’s method](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/), and read "Going further (optional)".

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-checklist/).
