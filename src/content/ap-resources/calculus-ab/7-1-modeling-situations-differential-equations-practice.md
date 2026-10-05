---
resourceId: "mb-ap-calcab-7.1-practice"
title: "Modeling Situations with Differential Equations: Practice Questions (Calculus AB 7.1)"
description: "Seven original Marlbridge practice questions on writing and reading differential equations from words, finding the constant of proportionality and interpreting rates."
course: "calculus-ab"
unit: 7
topics: ["7.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as a rate of change, with units"
prerequisiteResources: ["mb-ap-calcab-7.1-study-guide"]
learningObjectives:
  - "Translate a verbal description into a differential equation with the correct sign"
  - "Find a constant of proportionality from one given rate and state its units"
  - "Use a differential equation to find and interpret a rate at a given value"
  - "Describe a given differential equation in words"
skills: ["1", "2"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. The numbers are chosen to work by hand."
related: ["mb-ap-calcab-7.1-study-guide", "mb-ap-calcab-7.1-revision-notes", "mb-ap-calcab-7.1-checklist"]
next: "mb-ap-calcab-7.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, k is a constant, and t is time in the units stated. All contexts and data are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The population P of a culture of yeast cells increases at a rate proportional to the cube root of P. Time is t, and k is a positive constant. Which equation models this?

- (A) dP/dt = k/∛P
- (B) P = k∛t
- (C) dP/dt = k∛P
- (D) dP/dt = k∛t

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** "The rate of change of P" is dP/dt. "Proportional to the cube root of P" is k∛P. P is increasing and k > 0, so the sign is positive.

- (A) is "inversely proportional to the cube root of P".
- (B) models P itself, not its rate, and uses t instead of P.
- (D) makes the rate depend on time, not on the size of the population.
</details>

## Question 2 (multiple choice · core)

After a dye is added to a tank, the concentration C of dye decreases at a rate inversely proportional to the square of the time t since the dye was added (t ≥ 1). Which equation models this, with k > 0?

- (A) dC/dt = −k/t²
- (B) dC/dt = k/t²
- (C) dC/dt = −kt²
- (D) dC/dt = −k/C²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "Inversely proportional to the square of t" is k/t². The concentration decreases, so the rate is negative. With k > 0, the minus sign must be written.

- (B) has the right form but describes an increase.
- (C) makes the rate proportional to t², not inversely proportional.
- (D) makes the rate depend on C instead of on t.
</details>

## Question 3 (multiple choice · core)

A metal rod cools in a workshop kept at 24 °C. Its temperature T (°C) satisfies dT/dt = −k(T − 24), with t in minutes and k > 0. When T = 64 °C, the rod is cooling at 2 °C per minute. What is dT/dt when T = 44 °C?

- (A) −1.375 °C per minute
- (B) −1 °C per minute
- (C) −0.05 °C per minute
- (D) 1 °C per minute

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "Cooling at 2 °C per minute" means dT/dt = −2. So −2 = −k(64 − 24) = −40k, giving k = 0.05 per minute. Then dT/dt = −0.05(44 − 24) = −0.05 × 20 = −1 °C per minute.

- (A) treats the rate as proportional to T instead of to T − 24: k = 2/64, then (2/64) × 44 = 1.375.
- (C) is the value of k, not the rate.
- (D) loses the minus sign. The rod is still above 24 °C, so it is still cooling.
</details>

## Question 4 (multiple choice · core)

The mass W, in grams, of a seedling satisfies dW/dt = 0.3(50 − W) for 0 < W < 50, with t in weeks. Which statement describes this model?

- (A) W increases at a rate proportional to W.
- (B) W is proportional to the difference between 50 grams and W.
- (C) W decreases at a rate proportional to the difference between 50 grams and W.
- (D) W increases at a rate proportional to the difference between 50 grams and W.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The right side is a constant (0.3) times (50 − W). For 0 < W < 50, 50 − W > 0, so dW/dt > 0 and W increases.

- (A) would be dW/dt = kW.
- (B) describes W itself, not its rate of change.
- (C) has the wrong direction: 0.3 > 0 and 50 − W > 0, so the rate is positive.
</details>

## Question 5 (constructed response · core)

A message spreads through a school of 900 students. Let N be the number of students who have heard it, t hours after it started. The rate at which N increases is jointly proportional to the number of students who have heard the message and the number who have not.

(a) Write a differential equation for N.
(b) When N = 100, the message is spreading at 16 students per hour. Find the constant of proportionality.
(c) Find dN/dt when N = 450 and when N = 850. Explain in context why the second rate is smaller.
(d) For which value of N is the rate of spreading greatest? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Students who have not heard: 900 − N. "Jointly proportional" means a product:

**dN/dt = kN(900 − N)**, with k > 0 because N is increasing.

**(b)** 16 = k × 100 × (900 − 100) = 80 000k, so **k = 16/80 000 = 1/5000 = 0.0002** (per student per hour).

**(c)** N = 450: dN/dt = 0.0002 × 450 × 450 = **40.5 students per hour**.
N = 850: dN/dt = 0.0002 × 850 × 50 = **8.5 students per hour**.

At N = 850 only 50 students have not heard, so there are few new people left to tell. The second factor is small, so the rate is small.

**(d)** The rate is k times N(900 − N). N(900 − N) = 900N − N² is a downward parabola in N with roots 0 and 900, so it is largest halfway between them, at **N = 450**.

| Point | What earns it |
|---|---|
| 1 | Correct equation dN/dt = kN(900 − N) (or with k stated as 0.0002 later) |
| 1 | k = 0.0002, from substituting N = 100 and dN/dt = 16 |
| 1 | Both rates correct (40.5 and 8.5) with units |
| 1 | Context reason for (c) **and** N = 450 with a reason for (d) |

Acceptable alternative for (d): the derivative of 900N − N² with respect to N is 900 − 2N, which is zero at N = 450. A table of rates alone earns no mark, because it does not show the maximum.
</details>

## Question 6 (constructed response · core)

Water flows into a tank at a constant 12 litres per minute. Water also drains out through a hole at a rate proportional to the square root of the volume V (litres) in the tank.

(a) Write a differential equation for V, with t in minutes.
(b) When V = 100 litres, the volume is increasing at 2 litres per minute. Find the constant of proportionality.
(c) Find dV/dt when V = 196 litres and interpret your answer.
(d) For what volume does the amount of water in the tank stay the same?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Net rate = rate in − rate out: **dV/dt = 12 − k√V**, with k > 0.

**(b)** 2 = 12 − k√100 = 12 − 10k, so 10k = 10 and **k = 1**.

**(c)** dV/dt = 12 − √196 = 12 − 14 = **−2 litres per minute**. When the tank holds 196 litres, the volume is decreasing at 2 litres per minute, because water drains out faster than it flows in.

**(d)** The volume does not change when dV/dt = 0: 12 − √V = 0, so √V = 12 and **V = 144 litres**.

| Point | What earns it |
|---|---|
| 1 | dV/dt = 12 − k√V, with the outflow subtracted |
| 1 | k = 1 from the given rate |
| 1 | dV/dt = −2 at V = 196, interpreted as decreasing at 2 litres per minute |
| 1 | Sets dV/dt = 0 and finds V = 144 |

A common error in (a) is dV/dt = 12 − k√t, which makes the drain depend on time rather than on the amount of water.
</details>

## Question 7 (constructed response · stretch)

A car moves along a straight road. Its velocity v (metres per second) is positive and less than 30. Its acceleration is proportional to the difference between 30 m/s and its velocity. Time t is in seconds and s is the car's position in metres.

(a) Write a first-order differential equation for v.
(b) When v = 10 m/s, the acceleration is 1.6 m/s². Find the constant of proportionality, with units.
(c) Rewrite your equation as a differential equation in s, using derivatives of s.
(d) Find the acceleration when v = 25 m/s. Explain what the model says happens to the acceleration as v gets close to 30 m/s.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Acceleration is dv/dt. **dv/dt = k(30 − v)**, with k > 0 because the car speeds up while v < 30.

**(b)** 1.6 = k(30 − 10) = 20k, so **k = 0.08 per second** (s⁻¹). Units: m/s² ÷ (m/s) = 1/s.

**(c)** Velocity is ds/dt and acceleration is d²s/dt², so **d²s/dt² = 0.08(30 − ds/dt)**. This is a second-order differential equation: it involves the second derivative of s.

**(d)** dv/dt = 0.08 × (30 − 25) = **0.4 m/s²**. As v gets close to 30, the factor 30 − v gets close to 0, so the acceleration gets close to 0. The car keeps speeding up, but more and more gently.

| Point | What earns it |
|---|---|
| 1 | dv/dt = k(30 − v) with k > 0 (or k(v − 30) with k < 0, stated) |
| 1 | k = 0.08 with units per second |
| 1 | d²s/dt² = 0.08(30 − ds/dt) |
| 1 | 0.4 m/s² at v = 25 |
| 1 | Explains that the acceleration approaches 0 as v approaches 30 because the difference approaches 0 |
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** revisit "From words to symbols" in the [study guide](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/), and check which quantity follows "proportional to".
- **Q3 or Q7 wrong:** redo Worked example 1, paying attention to the sign of the given rate.
- **Q6 wrong:** see Worked example 2 (rate in minus rate out).
- **Q5 wrong:** reread the "jointly proportional" row of the phrase table.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-checklist/).
