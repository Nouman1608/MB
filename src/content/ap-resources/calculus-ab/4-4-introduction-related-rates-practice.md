---
resourceId: "mb-ap-calcab-4.4-practice"
title: "Introduction to Related Rates: Practice Questions (Calculus AB 4.4)"
description: "Seven original Marlbridge practice questions on differentiating with respect to time and calculating related rates with the chain, product and quotient rules, with suggested rubrics."
course: "calculus-ab"
unit: 4
topics: ["4.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain, product and quotient rules"
prerequisiteResources: ["mb-ap-calcab-4.4-study-guide"]
learningObjectives:
  - "Differentiate an equation with respect to time, attaching the correct rate to each changing quantity"
  - "Use the product and quotient rules when changing quantities are multiplied or divided"
  - "Substitute instant values only after differentiating, and explain why"
  - "Calculate an unknown rate at an instant with correct sign and units"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave π and surds in exact answers."
related: ["mb-ap-calcab-4.4-study-guide", "mb-ap-calcab-4.4-revision-notes", "mb-ap-calcab-4.4-checklist"]
next: "mb-ap-calcab-4.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and every changing quantity is a differentiable function of time t. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A square array of solar panels is being extended so that it stays square. At the moment when its side length is 6 m, the side length is increasing at 0.5 m per day. At what rate is the area of the array increasing at that moment?

- (A) 0.25 m² per day
- (B) 1 m² per day
- (C) 6 m² per day
- (D) 12 m² per day

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A = s², so dA/dt = 2s · ds/dt = 2(6)(0.5) = 6 m² per day.

- (A) squares the rate, (0.5)² = 0.25. The rate is not squared; the side is.
- (B) computes 2 · ds/dt and forgets the factor s.
- (D) computes 2s = 12 and forgets the factor ds/dt. That is dA/ds, not dA/dt.
</details>

## Question 2 (multiple choice · core)

A rectangular animal pen is reshaped, but its area is always 20 m². Its length x and width y change with time. At the moment when x = 4 m and y = 5 m, the length is increasing at 2 m per minute. What is dy/dt at that moment?

- (A) −2.5 m per minute
- (B) −1.6 m per minute
- (C) 0 m per minute
- (D) 2.5 m per minute

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At all times xy = 20. Differentiate with the product rule: x · dy/dt + y · dx/dt = 0. Substitute: 4 · dy/dt + 5(2) = 0, so dy/dt = −10/4 = −2.5 m per minute. The width must shrink to keep the area fixed.

- (B) swaps the roles of x and y: −(dx/dt)(x)/y = −8/5.
- (C) uses (dx/dt)(dy/dt) = 0 instead of the product rule, then concludes dy/dt = 0.
- (D) has the wrong sign. If the length grows and the area is fixed, the width cannot also grow.
</details>

## Question 3 (multiple choice · core)

A cylindrical piece of dough rises and spreads, so both its radius r and its height h change with time. Its volume is V = πr²h. Which expression gives dV/dt?

- (A) 2πr · (dr/dt) · (dh/dt)
- (B) πr² · (dh/dt)
- (C) 2πrh · (dr/dt) + πr² · (dh/dt)
- (D) 2πr · (dr/dt) + dh/dt

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** V is the product of r² and h, and both change. Product rule: dV/dt = π[(d/dt of r²) · h + r² · dh/dt] = π[2r · (dr/dt) · h + r² · dh/dt].

- (A) multiplies the rates together instead of using the product rule.
- (B) treats r as a constant. That would only be right if the radius were fixed.
- (D) differentiates each factor separately and adds, which is not a valid rule.
</details>

## Question 4 (multiple choice · core)

Quantities x and y depend on time, and z = x/y. At a certain instant, x = 6, y = 3, dx/dt = 1 and dy/dt = 2. What is dz/dt at that instant?

- (A) −1
- (B) 1/3
- (C) 1/2
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Quotient rule: dz/dt = (y · dx/dt − x · dy/dt)/y² = (3 × 1 − 6 × 2)/9 = (3 − 12)/9 = −1.

- (B) is (dx/dt)/y = 1/3. It ignores the change in y.
- (C) is (dx/dt)/(dy/dt) = 1/2. Rates do not divide like that.
- (D) reverses the order in the numerator, (6 × 2 − 3 × 1)/9 = 1, which flips the sign.
</details>

## Question 5 (constructed response · core)

A cylindrical candle has a fixed radius of 3 cm. As it burns, its height h decreases at a constant 0.4 cm per hour. The volume of wax is V = πr²h.

(a) Explain which quantities in V = πr²h are constants and which change with time.
(b) Find dV/dt at the moment when h = 10 cm. Give units.
(c) A student substitutes h = 10 before differentiating and gets dV/dt = 0. Explain the error.
(d) Does your answer to (b) depend on the height? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** π is a constant. The radius r = 3 cm is fixed for all time, so it is a constant too. The height h changes with time, so V changes with time.

**(b)** With r = 3, V = 9πh at all times. Differentiate: dV/dt = 9π · dh/dt. Since h decreases, dh/dt = −0.4. So dV/dt = 9π(−0.4) = **−3.6π cm³ per hour** (about −11.3 cm³ per hour). At that moment the wax volume is decreasing at 3.6π cm³ per hour.

**(c)** Substituting h = 10 first gives V = 90π, a constant, whose derivative is 0. But h = 10 is true only at one instant; the height is still changing. The equation must be differentiated while h is still a variable.

**(d)** No. dV/dt = 9π · dh/dt and dh/dt is constant, so the volume decreases at 3.6π cm³ per hour at every height. The value h = 10 is not needed.

| Point | What earns it |
|---|---|
| 1 | Identifies r and π as constants and h (and V) as changing |
| 1 | dV/dt = πr² · dh/dt with dh/dt = −0.4 (negative sign) |
| 1 | −3.6π cm³ per hour with units, stated as a decrease |
| 1 | Explains that h = 10 holds only at an instant, so substituting first wrongly removes dh/dt; notes in (d) that the rate does not depend on h |
</details>

## Question 6 (constructed response · core)

A small bead slides around a circular wire hoop. With the centre of the hoop at the origin and lengths in cm, the bead's position (x, y) always satisfies x² + y² = 100.

(a) Differentiate x² + y² = 100 with respect to t.
(b) At the moment when the bead is at (6, 8), dx/dt = −4 cm per second. Find dy/dt.
(c) Interpret the signs of dx/dt and dy/dt in (b).
(d) Later the bead is at (6, −8), again with dx/dt = −4 cm per second. Find dy/dt and explain why it differs from (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 2x · dx/dt + 2y · dy/dt = 0 (the derivative of the constant 100 is 0).

**(b)** Substitute: 2(6)(−4) + 2(8) · dy/dt = 0, so −48 + 16 · dy/dt = 0 and **dy/dt = 3 cm per second**. (Check: 6² + 8² = 100, so (6, 8) is on the hoop.)

**(c)** dx/dt < 0: the bead is moving left. dy/dt > 0: it is moving up. At (6, 8), on the upper right of the hoop, moving left means moving up and over the top.

**(d)** 2(6)(−4) + 2(−8) · dy/dt = 0, so −48 − 16 · dy/dt = 0 and **dy/dt = −3 cm per second**. The relationship between the rates depends on where the bead is: dy/dt = −(x/y) · dx/dt, and y has changed sign. On the lower half of the hoop, moving left means moving down.

| Point | What earns it |
|---|---|
| 1 | Correct derivative 2x · dx/dt + 2y · dy/dt = 0 |
| 1 | dy/dt = 3 cm/s at (6, 8), with values substituted after differentiating |
| 1 | Interprets both signs (moving left, moving up) |
| 1 | dy/dt = −3 cm/s at (6, −8) with a reason based on the sign of y |
</details>

## Question 7 (constructed response · stretch)

In a 3D design program, a closed box has a square base of side s cm and height h cm. The designer stretches the base so that s increases at 0.1 cm per second, while the height decreases at 0.3 cm per second. Consider the instant when s = 10 cm and h = 4 cm.

(a) The volume is V = s²h. Find dV/dt at that instant.
(b) The total surface area is S = 2s² + 4sh. Find dS/dt at that instant.
(c) The base is growing, yet the volume is shrinking. Use your working in (a) to explain how this can happen.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule (s² times h): dV/dt = 2s · (ds/dt) · h + s² · dh/dt. Substitute s = 10, h = 4, ds/dt = 0.1, dh/dt = −0.3:

dV/dt = 2(10)(0.1)(4) + (100)(−0.3) = 8 − 30 = **−22 cm³ per second**.

**(b)** dS/dt = 4s · ds/dt + 4(ds/dt · h + s · dh/dt) (chain rule on 2s², product rule on 4sh). Substitute:

dS/dt = 4(10)(0.1) + 4(0.1 × 4 + 10 × (−0.3)) = 4 + 4(0.4 − 3) = 4 − 10.4 = **−6.4 cm² per second**.

**(c)** The first term in (a), 8 cm³/s, is the gain from the growing base. The second term, −30 cm³/s, is the loss from the falling height. At this instant the base is large (area 100 cm²), so even a small drop in height removes a lot of volume. The loss is bigger than the gain, so the total rate is negative.

| Point | What earns it |
|---|---|
| 1 | Correct product-rule derivative of s²h, with ds/dt and dh/dt attached |
| 1 | dV/dt = −22 cm³/s with units |
| 1 | Correct derivative of S and dS/dt = −6.4 cm²/s with units |
| 1 | Explains (c) by comparing the two terms of dV/dt (gain of 8 versus loss of 30) |

A common error in (b) is to differentiate 4sh as 4 · (ds/dt) · (dh/dt). That ignores the product rule.
</details>

## How did you do?

- **Q1 or Q5 wrong:** reread "The chain rule does the linking" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/).
- **Q2, Q3 or Q7 wrong:** redo Worked example 2(a): the product rule with two changing quantities.
- **Q4 wrong:** redo Worked example 2(b) and check the order of the quotient rule.
- **Q5(c) or Q6 wrong:** reread "Always true, or only true now?" and differentiate before you substitute.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-checklist/).
