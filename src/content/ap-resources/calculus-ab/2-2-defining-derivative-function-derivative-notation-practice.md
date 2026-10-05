---
resourceId: "mb-ap-calcab-2.2-practice"
title: "Defining the Derivative of a Function and Using Derivative Notation: Practice Questions (Calculus AB 2.2)"
description: "Seven original Marlbridge practice questions on the derivative function from the definition, derivative notation, units and tangent lines, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative at a point as a limit (Topic 2.1)"
  - "Point-slope form of a straight line"
prerequisiteResources: ["mb-ap-calcab-2.2-study-guide"]
learningObjectives:
  - "Find f′(x) from the limit definition"
  - "Use f′(x), dy/dx and y′ correctly, including values at a point"
  - "Write the equation of a tangent line at a given point"
  - "State the units of a derivative and interpret it in context"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers. Use the limit definition, not derivative rules, wherever a question says so."
related: ["mb-ap-calcab-2.2-study-guide", "mb-ap-calcab-2.2-revision-notes", "mb-ap-calcab-2.2-checklist"]
next: "mb-ap-calcab-2.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers. All contexts and data are invented. Notation: lim (h → 0) g(h) means "the limit as h approaches 0 of g(h)"; f′(x), dy/dx and y′ all denote the derivative. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let y = f(x). Which of the following does **not** denote the derivative of f?

- (A) dy/dx
- (B) f′(x)
- (C) y′
- (D) Δy/Δx

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Δy/Δx is the average rate of change over an interval, the difference quotient itself. The derivative is its **limit** as Δx → 0.

- (A), (B) and (C) are the three standard notations for the derivative of y = f(x). They mean the same thing, so none of them is the answer.
</details>

## Question 2 (multiple choice · core)

Let f(x) = 4 − x². From the definition, f′(x) = −2x. Which is an equation of the line tangent to the graph of f at x = 1?

- (A) y = −2x + 5
- (B) y = −2x + 3
- (C) y − 3 = −2x(x − 1)
- (D) y = 2x + 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The point is (1, f(1)) = (1, 3). The slope is f′(1) = −2. So y − 3 = −2(x − 1), which rearranges to y = −2x + 5.

- (B) uses the correct slope but makes f(1) = 3 the y-intercept. The line must pass through (1, 3); this one passes through (0, 3).
- (C) uses the formula f′(x) = −2x as the slope instead of the number f′(1). The result is a parabola, not a line.
- (D) drops the minus sign in f′(1), using slope 2: y − 3 = 2(x − 1) gives y = 2x + 1.
</details>

## Question 3 (multiple choice · core)

For a function g, lim (h → 0) (g(x + h) − g(x))/h = 3x² − 4x for all x. Which statement must be true?

- (A) g′(1) = −1
- (B) g(1) = −1
- (C) The derivative of g is 0 only at x = 0.
- (D) The line tangent to the graph of g at x = 1 is y = −x.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The limit is the definition of g′(x), so g′(x) = 3x² − 4x and g′(1) = 3 − 4 = −1.

- (B) confuses g′(1) with g(1). The derivative gives no information about the height of g.
- (C) is false: 3x² − 4x = x(3x − 4) = 0 at x = 0 **and** at x = 4/3.
- (D) has the correct slope, −1, but assumes the line passes through the origin. Without g(1) you cannot write the tangent line.
</details>

## Question 4 (multiple choice · foundation)

In a fictional shop, C(n) is the cost, in dollars, of n kilograms of rice. What are the units of C′(n)?

- (A) Dollars
- (B) Kilograms per dollar
- (C) Dollars per kilogram
- (D) Dollar-kilograms

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** C′(n) is the limit of ΔC/Δn, a change in dollars divided by a change in kilograms. So its units are the units of C over the units of n.

- (A) is the unit of C(n) itself, not of its rate of change.
- (B) inverts the ratio; that would be the unit of the rate of change of n with respect to C.
- (D) multiplies the units instead of dividing.
</details>

## Question 5 (constructed response · core)

Let f(x) = √(x + 3).

(a) Use the definition of the derivative to show that f′(x) = 1/(2√(x + 3)).
(b) For which values of x does your formula for f′(x) exist?
(c) Write an equation of the line tangent to the graph of f at x = 1.
(d) A student writes the tangent line at x = 1 as y − 2 = (1/(2√(x + 3)))(x − 1). Explain why this is not a correct answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = lim (h → 0) (√(x + h + 3) − √(x + 3))/h. Substitution gives 0/0. Multiply top and bottom by the conjugate √(x + h + 3) + √(x + 3). The top becomes (x + h + 3) − (x + 3) = h. So, for h ≠ 0,

(f(x + h) − f(x))/h = h / (h(√(x + h + 3) + √(x + 3))) = 1/(√(x + h + 3) + √(x + 3)).

As h → 0, the bottom approaches 2√(x + 3). So **f′(x) = 1/(2√(x + 3))**.

**(b)** The formula needs √(x + 3) to be defined and nonzero, so **x > −3**. (f is defined at x = −3, but f′ is not.)

**(c)** f(1) = √4 = 2 and f′(1) = 1/(2 × 2) = 1/4. Tangent line: **y − 2 = (1/4)(x − 1)**, or y = x/4 + 7/4.

**(d)** The student used the formula f′(x) as the slope instead of the number f′(1) = 1/4. The slope of a line must be a constant; with x still inside the "slope", the equation is not a straight line at all. Substituting x = 1 into f′ first gives the correct line from (c).

| Point | What earns it |
|---|---|
| 1 | Correct difference quotient and multiplication by the conjugate |
| 1 | Simplifies the top to h, cancels h (h ≠ 0) and takes the limit to reach 1/(2√(x + 3)) |
| 1 | Domain of f′: x > −3, with the reason that the denominator is 0 at x = −3 |
| 1 | Tangent line with point (1, 2) and slope 1/4 |
| 1 | Explains that the slope must be the number f′(1) = 1/4, not the expression f′(x) |
</details>

## Question 6 (constructed response · core)

Let f(x) = x³.

(a) Use the definition of the derivative to find f′(x).
(b) Find all points on the graph of f where the tangent line is parallel to the line y = 12x − 5.
(c) Write an equation of the tangent line at each point you found in (b). Are they the same line?
(d) Find f′(0) and describe the tangent line at the origin.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (x + h)³ − x³ = 3x²h + 3xh² + h³. Divide by h (h ≠ 0): 3x² + 3xh + h². Let h → 0: **f′(x) = 3x²**.

**(b)** Parallel lines have equal slopes, so f′(x) = 12. Then 3x² = 12, x² = 4 and x = 2 or x = −2. The points are **(2, 8)** and **(−2, −8)**.

**(c)** At (2, 8): y − 8 = 12(x − 2), so **y = 12x − 16**. At (−2, −8): y + 8 = 12(x + 2), so **y = 12x + 16**. They are different lines: parallel, with the same slope but different intercepts.

**(d)** f′(0) = 0. The tangent line at (0, 0) is horizontal: **y = 0**, the x-axis. (The curve crosses this tangent line at the origin, which shows a tangent line can cross the curve at the point of tangency.)

| Point | What earns it |
|---|---|
| 1 | Correct expansion of (x + h)³ − x³ and division by h |
| 1 | f′(x) = 3x² from the limit |
| 1 | Sets f′(x) = 12 and finds both x = 2 and x = −2 |
| 1 | Both tangent lines correct, with the conclusion that they are parallel but not the same |
| 1 | f′(0) = 0 and the tangent line y = 0 |
</details>

## Question 7 (constructed response · stretch)

In a fictional model, a toy rocket's height above the ground is y = 40t − 5t² metres, t seconds after launch, for 0 ≤ t ≤ 8.

(a) Use the definition of the derivative to find dy/dt.
(b) Find dy/dt at t = 3 and at t = 5. Interpret both values, with units.
(c) Find the time when dy/dt = 0 and the height at that time. What is the rocket doing at that instant?
(d) A student writes: "dy/dt at t = 3 is 40(3) − 5(3)² = 75 m/s." Explain the student's error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y(t + h) − y(t) = 40h − 5(2th + h²) = 40h − 10th − 5h². Divide by h (h ≠ 0): 40 − 10t − 5h. Let h → 0: **dy/dt = 40 − 10t** metres per second.

**(b)** At t = 3: dy/dt = 40 − 30 = **10 m/s**. Three seconds after launch, the rocket is rising at 10 metres per second.
At t = 5: dy/dt = 40 − 50 = **−10 m/s**. Five seconds after launch, the rocket is falling at 10 metres per second.

**(c)** 40 − 10t = 0 gives **t = 4**. The height is 40(4) − 5(16) = **80 m**. At that instant the rocket is neither rising nor falling: its vertical velocity is 0.

**(d)** The student substituted t = 3 into y, not into dy/dt. The value 75 is the **height** y at t = 3, in metres, not a rate in metres per second. The correct value is dy/dt at t = 3 = 10 m/s. In notation, y(3) = 75 but y′(3) = 10.

| Point | What earns it |
|---|---|
| 1 | Correct difference quotient simplified to 40 − 10t − 5h (h ≠ 0) |
| 1 | dy/dt = 40 − 10t from the limit |
| 1 | Both values, 10 and −10, with units m/s and the correct meaning of each sign |
| 1 | t = 4 and height 80 m, with the rocket momentarily neither rising nor falling |
| 1 | Identifies 75 as y(3), a height, and gives y′(3) = 10 |
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "Derivative notation" and the units paragraph under "Four representations" in the [study guide](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/).
- **Q2 or Q6 wrong:** redo Worked example 3 and the tangent line box: point (a, f(a)), slope the number f′(a).
- **Q3 or Q7(d) wrong:** review the difference between f(a) and f′(a) in "Common misconceptions".
- **Q5, Q6(a) or Q7(a) wrong:** redo Worked examples 1 and 2, writing f(x + h) in full before subtracting.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-checklist/).
