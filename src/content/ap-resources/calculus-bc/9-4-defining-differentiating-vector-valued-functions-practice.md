---
resourceId: "mb-ap-calcbc-9.4-practice"
title: "Defining and Differentiating Vector-Valued Functions: Practice Questions (Calculus BC 9.4)"
description: "Seven original Marlbridge practice questions on vector-valued functions: domain, component derivatives, direction, tangents, r″ versus d²y/dx², and a table-based context, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.4"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Parametric derivatives (Topics 9.1 and 9.2) and the product and chain rules"
prerequisiteResources: ["mb-ap-calcbc-9.4-study-guide"]
learningObjectives:
  - "Find the domain and the first and second derivatives of a vector-valued function"
  - "Use r′(t) to describe direction and to find tangent lines and horizontal or vertical tangents"
  - "Distinguish r″(t) from d²y/dx²"
  - "Estimate a derivative vector from a table and interpret it with units"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator is needed for any question. Give exact values unless a question asks for a decimal. Angles in radians."
related: ["mb-ap-calcbc-9.4-study-guide", "mb-ap-calcbc-9.4-revision-notes", "mb-ap-calcbc-9.4-checklist"]
next: "mb-ap-calcbc-9.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator is needed. Notation: ⟨a, b⟩ is the vector a i + b j, and r′(t) means dr/dt.

## Question 1 (multiple choice · foundation)

Let r(t) = ⟨e^(2t), t sin t⟩. Which of the following is r′(t)?

- (A) ⟨2e^(2t), sin t + t cos t⟩
- (B) ⟨e^(2t), t cos t⟩
- (C) ⟨2e^(2t), cos t⟩
- (D) 2e^(2t) + sin t + t cos t

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate each component. d/dt [e^(2t)] = 2e^(2t) (chain rule). d/dt [t sin t] = 1 · sin t + t cos t (product rule). So r′(t) = ⟨2e^(2t), sin t + t cos t⟩.

- (B) drops the chain-rule factor 2 in the first component and differentiates only the sin t part of the product in the second.
- (C) multiplies the derivatives of t and sin t (1 · cos t). The derivative of a product is not the product of the derivatives.
- (D) has the right pieces but adds them into a single number. The derivative of a vector-valued function is a vector.
</details>

## Question 2 (multiple choice · foundation)

What is the domain of r(t) = ⟨√(6 − t), ln(t − 1)⟩?

- (A) t ≤ 6
- (B) t > 1
- (C) 1 < t ≤ 6
- (D) 1 ≤ t < 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** √(6 − t) needs 6 − t ≥ 0, so t ≤ 6. ln(t − 1) needs t − 1 > 0, so t > 1. Both components must be defined, so the domain is 1 < t ≤ 6.

- (A) uses only the first component.
- (B) uses only the second component.
- (D) swaps the inequalities at the ends. ln 0 is undefined, so t = 1 is excluded; √0 = 0 is fine, so t = 6 is included.
</details>

## Question 3 (multiple choice · core)

A point moves so that its position is r(t) = ⟨t² − 6t, 5 − t³/3⟩. At t = 2, which statement describes its direction of motion and the slope of the tangent line?

- (A) Moving left and down; slope 2
- (B) Moving right and up; slope 2
- (C) Moving left and down; slope ½
- (D) Moving left and up; slope −2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** r′(t) = ⟨2t − 6, −t²⟩, so r′(2) = ⟨−2, −4⟩. x′ < 0 means moving left; y′ < 0 means moving down. The slope is y′/x′ = (−4)/(−2) = 2.

- (B) reads the positive slope as "right and up". A positive slope only says the tangent line rises to the right; the point can travel along it in either direction. The signs of x′ and y′ decide.
- (C) computes x′/y′ = ½, run over rise.
- (D) loses the minus sign on y′, giving r′(2) = ⟨−2, 4⟩.
</details>

## Question 4 (multiple choice · stretch)

Let r(t) = ⟨t² + 1, t³ + 2t⟩. Which gives r″(1) and the value of d²y/dx² at t = 1?

- (A) r″(1) = ⟨2, 6⟩ and d²y/dx² = ¼
- (B) r″(1) = ⟨2, 6⟩ and d²y/dx² = 3
- (C) r″(1) = ⟨2, 5⟩ and d²y/dx² = 5/2
- (D) r″(1) = ⟨2, 6⟩ and d²y/dx² = 6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** r′(t) = ⟨2t, 3t² + 2⟩ and r″(t) = ⟨2, 6t⟩, so r″(1) = ⟨2, 6⟩.
For d²y/dx², use Topic 9.2: dy/dx = (3t² + 2)/(2t) = (3/2)t + 1/t. Then d/dt [dy/dx] = 3/2 − 1/t², and d²y/dx² = (3/2 − 1/t²) ÷ (2t). At t = 1: (3/2 − 1) ÷ 2 = ¼.

- (B) divides y″ by x″: 6 ÷ 2 = 3. That is not how d²y/dx² is found.
- (C) gives r′(1) = ⟨2, 5⟩ instead of r″(1), and then uses its ratio 5/2, which is dy/dx at t = 1.
- (D) takes the y-component of r″(1) as d²y/dx². The vector r″ and the scalar d²y/dx² are different quantities.
</details>

## Question 5 (calculation · core)

Let r(t) = ⟨t² e^(−t), cos³ t⟩ for 0 < t < π.

(a) Find r′(t).
(b) Find the value of t at which the curve has a vertical tangent, and the value at which it has a horizontal tangent. Justify each.

<details>
<summary>Worked solution</summary>

**(a)** First component (product rule): d/dt [t² e^(−t)] = 2t e^(−t) − t² e^(−t) = t(2 − t) e^(−t).
Second component (chain rule): d/dt [(cos t)³] = 3 cos² t · (−sin t) = −3 sin t cos² t.
**r′(t) = ⟨t(2 − t) e^(−t), −3 sin t cos² t⟩**

**(b)** *Vertical tangent:* x′(t) = 0 when t = 0 or t = 2. Only **t = 2** is in 0 < t < π. There y′(2) = −3 sin 2 cos² 2 ≠ 0, because sin 2 ≠ 0 and cos 2 ≠ 0 (2 is not a multiple of π/2). So r′(2) = ⟨0, nonzero⟩: vertical tangent.
*Horizontal tangent:* y′(t) = 0 when sin t = 0 or cos t = 0. In 0 < t < π, only cos t = 0 works, at **t = π/2**. There x′(π/2) = (π/2)(2 − π/2) e^(−π/2) ≠ 0, because 0 < π/2 < 2. So r′(π/2) = ⟨nonzero, 0⟩: horizontal tangent.

Suggested mark points (4): 1 for each correct component of r′(t); 1 for t = 2 with the check y′(2) ≠ 0; 1 for t = π/2 with the check x′(π/2) ≠ 0.

Common error: missing the check that the other component is nonzero. If both were 0, no conclusion about the tangent would be possible.
</details>

## Question 6 (constructed response · core)

Let r(t) = ⟨3 cos t, 2 sin(2t)⟩.

(a) Find r′(t) and r″(t).
(b) Find r(π/6) and r′(π/6).
(c) Find an equation of the tangent line to the curve at t = π/6.
(d) Describe the direction of motion at t = π/6.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** r′(t) = ⟨−3 sin t, 4 cos(2t)⟩. r″(t) = ⟨−3 cos t, −8 sin(2t)⟩.

**(b)** r(π/6) = ⟨3 · (√3/2), 2 sin(π/3)⟩ = **⟨3√3/2, √3⟩**.
r′(π/6) = ⟨−3 · ½, 4 cos(π/3)⟩ = **⟨−3/2, 2⟩**.

**(c)** Slope = y′/x′ = 2 ÷ (−3/2) = −4/3. Tangent line: **y − √3 = −(4/3)(x − 3√3/2)**, which simplifies to y = −(4/3)x + 3√3.

**(d)** x′ = −3/2 < 0 and y′ = 2 > 0, so the point is moving **left and up**.

| Point | What earns it |
|---|---|
| 1 | (a) Correct r′(t), including the chain-rule factor 2 in the second component |
| 1 | (a) Correct r″(t) |
| 1 | (b) Correct r(π/6) and r′(π/6) |
| 1 | (c) Slope −4/3 from y′/x′ and a correct line through (3√3/2, √3) |
| 1 | (d) Left and up, justified by the signs of x′ and y′ |

Total: 5 points. Any correct form of the line earns the (c) point. Extra: r″(π/6) = ⟨−3√3/2, −4√3⟩, not needed for the marks.
</details>

## Question 7 (constructed response · stretch)

A fictional remote-controlled boat moves on a lake. Its position is r(t) = ⟨x(t), y(t)⟩ metres, where x is measured east and y north of a jetty, and t is in seconds, 0 ≤ t ≤ 4. A student records these values:

| t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| x(t) (m) | 0 | 7 | 12 | 15 | 16 |
| y(t) (m) | 5 | 2.25 | 1 | 2.75 | 9 |

(a) Use the table to estimate r′(2). Show the method and give units.
(b) The values fit the model x(t) = 8t − t², y(t) = ¼t³ − 3t + 5. Use the model to find r′(2) exactly. In which direction is the boat moving at t = 2?
(c) Find r″(2) from the model and explain what its first component tells you.
(d) Show that at t = 4 the boat is moving due north.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use the symmetric difference quotient on [1, 3]:
x′(2) ≈ (15 − 7)/(3 − 1) = 4 and y′(2) ≈ (2.75 − 2.25)/(3 − 1) = 0.25.
**r′(2) ≈ ⟨4, 0.25⟩ m/s.**

**(b)** r′(t) = ⟨8 − 2t, ¾t² − 3⟩. **r′(2) = ⟨4, 0⟩ m/s.** The boat is moving **due east** (x′ > 0, y′ = 0). The estimate in (a) was close; its small y-component comes from averaging over [1, 3].

**(c)** r″(t) = ⟨−2, (3/2)t⟩, so **r″(2) = ⟨−2, 3⟩ m/s²**. The first component, −2 m/s², means the eastward component of the velocity is decreasing by 2 m/s every second at t = 2.

**(d)** r′(4) = ⟨8 − 8, ¾ · 16 − 3⟩ = ⟨0, 9⟩. The east component is 0 and the north component is positive, so the boat is moving due north (at 9 m/s).

| Point | What earns it |
|---|---|
| 1 | (a) Difference quotients using values on both sides of t = 2, giving ⟨4, 0.25⟩ with units m/s |
| 1 | (b) Correct r′(t) and r′(2) = ⟨4, 0⟩ |
| 1 | (b) Direction due east, justified by the signs of the components |
| 1 | (c) r″(2) = ⟨−2, 3⟩ with the meaning of −2 (eastward velocity component decreasing) |
| 1 | (d) r′(4) = ⟨0, 9⟩ and the conclusion "due north" from x′ = 0, y′ > 0 |

Total: 5 points. Acceptable alternative for (a): a one-sided quotient such as (x(3) − x(2))/1 = 3 and (y(3) − y(2))/1 = 1.75, if the method is shown; the symmetric quotient is usually more accurate. Units: metres per second for r′, metres per second per second for r″.
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** practise the product and chain rules inside components; see Worked example 1 in the [study guide](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/).
- **Q2 wrong:** reread the domain paragraph in "What is a vector-valued function?".
- **Q3, Q5(b) or Q6 wrong:** reread "What r′(t) tells you about the curve".
- **Q4 wrong:** work through "r″(t) is not d²y/dx²".
- **Q7 wrong:** compare with Worked example 2 and check your units.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-checklist/).
