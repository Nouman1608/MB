---
resourceId: "mb-ap-calcbc-9.2-practice"
title: "Second Derivatives of Parametric Equations: Practice Questions (Calculus BC 9.2)"
description: "Seven original Marlbridge practice questions on d²y/dx² for parametric curves: evaluating it, concavity, the sign of dx/dt and tangent-line estimates, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.2"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "dy/dx for parametric curves (Topic 9.1), the quotient rule (Topic 2.9) and concavity (Topic 5.6)"
prerequisiteResources: ["mb-ap-calcbc-9.2-study-guide"]
learningObjectives:
  - "Find d²y/dx² for a parametric curve, in general and at a value of t"
  - "Determine concavity from d²y/dx², including when dx/dt is negative"
  - "Decide whether a tangent-line estimate is an overestimate or an underestimate"
  - "Explain why dividing d²y/dt² by d²x/dt² is not a valid method"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5 and 7: no calculator. Question 6: calculator allowed; give decimal answers to 3 decimal places. Angles in radians."
related: ["mb-ap-calcbc-9.2-study-guide", "mb-ap-calcbc-9.2-revision-notes", "mb-ap-calcbc-9.2-checklist"]
next: "mb-ap-calcbc-9.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator for Questions 1–5 and 7; in Question 6 a calculator is allowed and decimal answers should be given to 3 decimal places. Notation: x′(t) = dx/dt, y′(t) = dy/dt, and x″(t), y″(t) are second derivatives with respect to t. All contexts and data are fictional.

## Question 1 (multiple choice · foundation)

A curve is given by x = 3t² and y = 2t³ + 6t, for t > 0. What is the value of d²y/dx² at t = 2?

- (A) 1/16
- (B) 3/4
- (C) 4
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dx/dt = 6t and dy/dt = 6t² + 6, so dy/dx = (6t² + 6)/(6t) = t + 1/t. Then d/dt (dy/dx) = 1 − 1/t², and d²y/dx² = (1 − 1/t²) ÷ 6t. At t = 2: (1 − ¼) ÷ 12 = (3/4) ÷ 12 = 1/16.

- (B) is d/dt (dy/dx) = 3/4. It forgets to divide by dx/dt.
- (C) uses the invalid shortcut d²y/dt² ÷ d²x/dt² = 12t ÷ 6 = 4 at t = 2.
- (D) multiplies by dx/dt instead of dividing: (3/4) × 12 = 9.
</details>

## Question 2 (multiple choice · core)

A curve is given by x = e^(−t) and y = e^(2t). Which of the following gives d²y/dx² and the concavity of the curve?

- (A) 6e^(4t); concave up for all t
- (B) −6e^(3t); concave down for all t
- (C) 4e^(3t); concave up for all t
- (D) −6e^(4t); concave down for all t

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dx/dt = −e^(−t) and dy/dt = 2e^(2t), so dy/dx = 2e^(2t) ÷ (−e^(−t)) = −2e^(3t). Then d/dt (dy/dx) = −6e^(3t). Divide by dx/dt = −e^(−t): d²y/dx² = (−6e^(3t)) ÷ (−e^(−t)) = 6e^(4t) > 0, so the curve is concave up everywhere. Check: y = e^(2t) = (e^(−t))^(−2) = x^(−2), and d²/dx² [x^(−2)] = 6x^(−4) = 6e^(4t). ✓

- (B) stops at d/dt (dy/dx) = −6e^(3t) and reads the concavity from it. Here dx/dt < 0, so its sign is the opposite of the concavity.
- (C) uses the invalid shortcut d²y/dt² ÷ d²x/dt² = 4e^(2t) ÷ e^(−t).
- (D) divides by +e^(−t), losing the minus sign in dx/dt.
</details>

## Question 3 (multiple choice · core)

For a parametric curve, dx/dt = t² + 2 and dy/dx = t³ − 4t. What is the value of d²y/dx² at t = 2?

- (A) 4/3
- (B) 8
- (C) 48
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** d/dt (dy/dx) = 3t² − 4 = 8 at t = 2, and dx/dt = 6 at t = 2. So d²y/dx² = 8 ÷ 6 = 4/3.

- (B) is d/dt (dy/dx) alone, without dividing by dx/dt.
- (C) multiplies by dx/dt instead of dividing: 8 × 6.
- (D) divides dy/dx (which is 0 at t = 2) by dx/dt. A zero slope does not mean a zero second derivative: the curve has a horizontal tangent at t = 2 but is still concave up.
</details>

## Question 4 (multiple choice · stretch)

A curve is given by x = t³ + t and y = 4t − t². The tangent line to the curve at t = 1 is used to estimate the value of y at a nearby point on the curve. Which statement is true?

- (A) The estimate is an overestimate, because d²y/dx² < 0 at t = 1.
- (B) The estimate is an underestimate, because d²y/dx² > 0 at t = 1.
- (C) The estimate is an underestimate, because dy/dx > 0 at t = 1.
- (D) The estimate is an overestimate, because dy/dx > 0 at t = 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dx/dt = 3t² + 1 and dy/dt = 4 − 2t, so dy/dx = (4 − 2t)/(3t² + 1), which is ½ at t = 1. By the quotient rule, d/dt (dy/dx) = [−2(3t² + 1) − (4 − 2t)(6t)] ÷ (3t² + 1)², which is (−8 − 12)/16 = −5/4 at t = 1. Divide by dx/dt = 4: d²y/dx² = −5/16 < 0. The curve is concave down, so the tangent line lies above the curve nearby and the estimate is too big. (For example, at t = 1.1 the curve has x = 2.431, y = 3.19, while the tangent line gives 3 + ½(0.431) ≈ 3.216.)

- (B) has the wrong sign for d²y/dx², and so the wrong conclusion.
- (C) and (D) use the sign of the slope. A positive slope tells you the curve rises to the right; it says nothing about whether the tangent line is above or below the curve. (D) has the right conclusion but an invalid reason.
</details>

## Question 5 (calculation · core)

A curve is given by x = ln t and y = t² − 2t, for t > 0.

(a) Show that dy/dx = 2t² − 2t.
(b) Find d²y/dx² in terms of t.
(c) Find the values of t for which the curve is concave up, and the exact point where the concavity changes.
(d) Check your answer to (b) by writing y as a function of x.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = 1/t and dy/dt = 2t − 2, so dy/dx = (2t − 2) ÷ (1/t) = **2t² − 2t**.

**(b)** d/dt (dy/dx) = 4t − 2. Divide by dx/dt = 1/t: d²y/dx² = (4t − 2) · t = **4t² − 2t**.

**(c)** 4t² − 2t = 2t(2t − 1). For t > 0 this is positive when t > ½, so the curve is **concave up for t > ½** and concave down for 0 < t < ½. The concavity changes at t = ½, at the point **(ln ½, −¾) = (−ln 2, −¾)**.

**(d)** t = eˣ, so y = e^(2x) − 2eˣ. Then d²y/dx² = 4e^(2x) − 2eˣ = 4t² − 2t. ✓

| Point | What earns it |
|---|---|
| 1 | dy/dx = 2t² − 2t, dividing by dx/dt = 1/t |
| 1 | d/dt (dy/dx) = 4t − 2 |
| 1 | Divides by dx/dt to get 4t² − 2t |
| 1 | Concave up for t > ½, from the sign of 2t(2t − 1) with t > 0 |
| 1 | Point (−ln 2, −¾) |

Total: 5 points. Part (d) is a self-check and earns no separate point. Common error: answering (b) with 4t − 2, which forgets the second division.
</details>

## Question 6 (constructed response · calculator · core)

A kite moves in a vertical plane. At time t seconds, its horizontal distance from the person flying it is **x(t) = 3t + sin t** metres and its height is **y(t) = 10 + 4 sin(t/2)** metres, for 0 ≤ t ≤ 6.

(a) Find dy/dx at t = 3.
(b) Find d²y/dx² at t = 3. Show the setup.
(c) Use the tangent line to the kite's path at t = 3 to estimate the kite's height when its horizontal distance is 9.6 m.
(d) Is your estimate in (c) greater than or less than the kite's actual height at that horizontal distance? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = 3 + cos t and dy/dt = 2 cos(t/2). At t = 3: dx/dt ≈ 2.010 and dy/dt ≈ 0.141, so dy/dx = 2 cos(t/2) ÷ (3 + cos t) ≈ **0.070**.

**(b)** d²y/dx² = [d/dt (2 cos(t/2) ÷ (3 + cos t))] ÷ (3 + cos t). At t = 3 the numerator is about −0.491 (numerical derivative), so d²y/dx² ≈ −0.491 ÷ 2.010 ≈ **−0.244**.

**(c)** At t = 3 the kite is at x ≈ 9.141 m, y ≈ 13.990 m. Tangent line: y ≈ 13.990 + 0.0704(x − 9.141). At x = 9.6: y ≈ 13.990 + 0.0704 × 0.459 ≈ **14.022 m**.

**(d)** **Greater than** (an overestimate). d²y/dx² < 0 at t = 3, so the path is concave down there and the tangent line lies above the path near this point. (The actual height at x = 9.6 is about 13.996 m.)

| Point | What earns it |
|---|---|
| 1 | dx/dt and dy/dt correct, including the factor ½ from the chain rule |
| 1 | dy/dx ≈ 0.070 at t = 3 |
| 1 | Correct setup: d/dt (dy/dx) divided by dx/dt |
| 1 | d²y/dx² ≈ −0.244 |
| 1 | Tangent-line estimate ≈ 14.022 m, using the point and slope at t = 3 |
| 1 | Overestimate, justified by d²y/dx² < 0 (concave down) |

Total: 6 points. Optional exact work: d²y/dx² simplifies to −2 sin³(t/2) ÷ (3 + cos t)³. The (d) point needs the reason; "the kite is going down" does not earn it.
</details>

## Question 7 (constructed response · stretch)

A curve is given by **x = 1/t** and **y = ln t**, for t > 0.

(a) Find dy/dx in terms of t.
(b) Find d²y/dx² in terms of t.
(c) A student writes: "d/dt (dy/dx) = −1, which is negative, so the curve is concave down." Explain the student's error and state the correct concavity.
(d) Confirm your answer to (b) by eliminating the parameter.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = −1/t² and dy/dt = 1/t, so dy/dx = (1/t) ÷ (−1/t²) = **−t**.

**(b)** d/dt (dy/dx) = −1. Divide by dx/dt = −1/t²: d²y/dx² = (−1) ÷ (−1/t²) = **t²**.

**(c)** The student has stopped after differentiating with respect to t. d²y/dx² is d/dt (dy/dx) **divided by dx/dt**, and here dx/dt = −1/t² < 0 for every t > 0, so dividing changes the sign. d²y/dx² = t² > 0, so the curve is **concave up** for all t > 0.

**(d)** t = 1/x, so y = ln(1/x) = −ln x for x > 0. Then dy/dx = −1/x = −t ✓ and d²y/dx² = 1/x² = t² ✓.

| Point | What earns it |
|---|---|
| 1 | dy/dx = −t |
| 1 | d²y/dx² = t², dividing d/dt (dy/dx) by dx/dt |
| 1 | Identifies the missing division by dx/dt |
| 1 | Explains that dx/dt < 0 reverses the sign, so the curve is concave up |
| 1 | Elimination y = −ln x with d²y/dx² = 1/x² = t² |

Total: 5 points. A sketch of y = −ln x, which bends upward, is a good extra check but is not required.
</details>

## How did you do?

- **Q1 or Q3 wrong:** go back to "The method in four steps" in the [study guide](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/); the most common slip is forgetting to divide by dx/dt.
- **Q2 or Q7 wrong:** reread "Watch the sign of dx/dt" and Worked example 2.
- **Q4 or Q6 wrong:** revisit "What the sign tells you" and Worked example 2(c) on tangent-line estimates.
- **Q5 wrong:** compare with Worked example 1, including the check by eliminating t.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-checklist/).
