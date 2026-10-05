---
resourceId: "mb-ap-calcab-u4-review"
title: "Contextual Applications of Differentiation: Mixed Unit Review (Calculus AB Unit 4)"
description: "The big ideas of Contextual Applications of Differentiation in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 4
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 4 topics, or at least the Unit 4 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u4-diagnostic"]
learningObjectives:
  - "Connect derivatives in context, motion, related rates, tangent lines and L'Hospital's Rule as one set of ideas"
  - "Choose a method by reading what a question gives and what it asks for"
  - "Answer multi-part questions that combine several Unit 4 topics"
  - "Write complete interpretations and justifications with units, signs and named conditions"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave π, e and surds in exact answers; decimals are given only to help you interpret."
related: ["mb-ap-calcab-u4-diagnostic", "mb-ap-calcab-4.1-checklist", "mb-ap-calcab-4.2-checklist", "mb-ap-calcab-4.3-checklist", "mb-ap-calcab-4.4-checklist", "mb-ap-calcab-4.5-checklist", "mb-ap-calcab-4.6-checklist", "mb-ap-calcab-4.7-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Every derivative in context is a rate: units of the output divided by units of the input."
  - "Motion and related rates both rest on signs: the sign of a rate says increasing or decreasing, and comparing signs of v and a says speeding up or slowing down."
  - "The tangent line turns a rate into an estimate, and the second derivative tells you whether the estimate is too high or too low."
  - "L'Hospital's Rule is local linearity applied to a 0/0 or ∞/∞ quotient; always check the form first."
  - "Shared review for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after studying Unit 4, Contextual Applications of Differentiation, or after the [Unit 4 diagnostic](/advanced-course-resources/calculus-ab/unit-4-diagnostic/). The unit is shared by Calculus AB and Calculus BC; every question is for both courses. These are **original Marlbridge practice questions**, not past exam questions, with invented contexts and data. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. No calculator for any question.

## Big ideas of the unit

- **A derivative is a rate with units.** f′(a) says how fast f changes per unit of input when the input is a. Its units are (units of f) ÷ (units of input), and the input need not be time ([Topic 4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/)).
- **A full interpretation names four things:** the input value, the quantity, the direction (increasing or decreasing) and the rate with units. f(a) is an amount and f′(a) is a rate; never mix them up ([Topic 4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/), [Topic 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/)).
- **Motion is the same idea twice.** Velocity is the derivative of position, and acceleration is the derivative of velocity. The sign of v gives the direction; v and a with the same sign means speeding up ([Topic 4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/)).
- **The second derivative says how a rate is changing**: a falling quantity with a positive second derivative is falling more slowly ([Topic 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/)).
- **Related rates come from the chain rule.** Differentiate an equation that holds at all times with respect to t; each changing quantity brings its own rate ([Topic 4.4](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/)).
- **Build first, substitute last.** Choose the equation (Pythagoras, similar shapes, trig, area or volume), remove any variable whose rate you do not know, and substitute instant values only after differentiating ([Topic 4.5](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/)).
- **Close to a point, a curve behaves like its tangent line.** L(x) = f(a) + f′(a)(x − a) estimates nearby values, and the sign of f″ tells you whether the estimate is too high or too low ([Topic 4.6](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/)).
- **L'Hospital's Rule is local linearity for quotients.** When top and bottom both tend to 0 (or both to ∞), compare their derivatives instead ([Topic 4.7](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| "Interpret f′(a)" | Input value, quantity, increasing/decreasing, rate with units | 4.1, 4.3 |
| Units of f′ or f″ | (units of f) ÷ (units of input), or ÷ (units of input)² | 4.1, 4.3 |
| Rate from a table | Difference quotient using the closest values either side | 4.1, 4.3 |
| At rest / changes direction | v = 0 / v changes sign | 4.2 |
| Speeding up or slowing down | Compare the signs of v and a | 4.2 |
| Several quantities change together | Equation at all times → differentiate with respect to t | 4.4 |
| Product or quotient of changing quantities | Product or quotient rule, a rate on every changing factor | 4.4 |
| Extra variable with unknown rate | Remove it first (similar triangles, a fixed ratio) | 4.5 |
| Estimate a value near a | L(x) = f(a) + f′(a)(x − a) | 4.6 |
| Too high or too low? | f″ > 0: line below, underestimate; f″ < 0: overestimate | 4.6 |
| Limit gives 0/0 or ∞/∞ | Check both limits, then lim f′/g′ | 4.7 |

## Question 1 (multiple choice · mixed)

W(t) is the volume of water, in litres, in a leaking tank after t minutes. W(5) = 300, W′(5) = −12 and W″(t) > 0 for all t. Which statement about W(5.5) is best supported?

- (A) W(5.5) ≈ 294, and the actual value is greater than 294.
- (B) W(5.5) ≈ 294, and the actual value is less than 294.
- (C) W(5.5) ≈ 306, and the actual value is greater than 306.
- (D) W(5.5) ≈ 288, and the actual value is greater than 288.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The tangent line at t = 5 gives W(5.5) ≈ 300 − 12(0.5) = 294. W″ > 0, so the graph bends upward and the tangent line lies below it: 294 is an underestimate, and the actual value is greater.

- (B) reverses the concavity rule.
- (C) adds the change, as if the tank were filling.
- (D) uses a step of 1 minute instead of 0.5.

Topics: 4.1, 4.3, 4.6.
</details>

## Question 2 (multiple choice · mixed)

A bead slides along the curve y = x², where x and y are in centimetres, so that dx/dt = 3 cm per second at all times. How fast is the bead's distance from the origin changing when it is at (2, 4)?

- (A) 12 cm per second
- (B) 27/√5 cm per second
- (C) 54/√5 cm per second
- (D) √153 cm per second

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Let D be the distance, so D² = x² + y² = x² + x⁴ at all times. Differentiate: 2D · dD/dt = (2x + 4x³) · dx/dt. At (2, 4), D = √20 = 2√5, so 4√5 · dD/dt = 36 × 3 = 108 and dD/dt = 27/√5 (about 12.1 cm per second).

- (A) is dy/dt = 2x · dx/dt, the vertical rate only.
- (C) forgets the factor 2 in 2D.
- (D) is the bead's speed, √(3² + 12²). Only part of that motion points away from the origin.

Topics: 4.2, 4.4, 4.5.
</details>

## Question 3 (multiple choice · mixed)

Functions f and g have continuous derivatives. The line y = 3x is tangent to the graph of f at x = 0, and the line y = 5x is tangent to the graph of g at x = 0. What is lim (x → 0) f(x)/g(x)?

- (A) 3/5
- (B) 5/3
- (C) 0
- (D) It cannot be determined without formulas for f and g.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both tangent lines pass through the origin, so f(0) = g(0) = 0; their slopes give f′(0) = 3 and g′(0) = 5. f and g are continuous, so the form is 0/0. By L'Hospital's Rule, the limit is lim f′(x)/g′(x) = 3/5, since the derivatives are continuous and g′(0) ≠ 0. Local linearity says the same thing: near 0, f(x)/g(x) ≈ 3x/5x.

- (B) inverts the ratio.
- (C) treats 0/0 as 0.
- (D) misses that the tangent lines give all the values the rule needs.

Topics: 4.6, 4.7.
</details>

## Question 4 (constructed response · mixed)

A particle moves along a horizontal line. Its velocity, in metres per second, is v(t) = 3 − 6 sin(πt/6) for 0 ≤ t ≤ 6 seconds. At t = 4 its position is x(4) = 2 m.

(a) Find a(t). Give a(2) with units.
(b) Find the times when the particle changes direction. Justify.
(c) Is the particle speeding up or slowing down at t = 2? At t = 4? Justify.
(d) Use the tangent line to the graph of x at t = 4 to estimate x(4.1). Is the estimate too high or too low? Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** By the chain rule, a(t) = −6 cos(πt/6) × (π/6) = **−π cos(πt/6)**. a(2) = −π cos(π/3) = **−π/2 m/s²**.

**(b)** v = 0 when sin(πt/6) = 1/2. With 0 ≤ πt/6 ≤ π, πt/6 = π/6 or 5π/6, so t = 1 or t = 5. v > 0 on [0, 1), v < 0 on (1, 5) and v > 0 on (5, 6] (check v(0) = 3, v(2) = 3 − 3√3, v(6) = 3). v changes sign at both, so the particle **changes direction at t = 1 and t = 5**.

**(c)** At t = 2: v(2) = 3 − 3√3 < 0 and a(2) = −π/2 < 0. Same signs: **speeding up**. At t = 4: v(4) = 3 − 6 sin(2π/3) = 3 − 3√3 < 0 and a(4) = −π cos(2π/3) = π/2 > 0. Opposite signs: **slowing down**.

**(d)** The slope of x at t = 4 is v(4) = 3 − 3√3. So x(4.1) ≈ 2 + (3 − 3√3)(0.1) = **2.3 − 0.3√3** (about 1.78 m). x″(4) = a(4) = π/2 > 0, and a stays positive just after t = 4, so the graph of x bends upward and the tangent line lies below it. The estimate is **too low**.

| Point | What earns it |
|---|---|
| 1 | a(t) = −π cos(πt/6) and a(2) = −π/2 m/s² with units |
| 1 | t = 1 and t = 5 from v = 0 |
| 1 | Sign change of v shown at both times |
| 1 | Both conclusions in (c), each with the signs of v and a stated |
| 1 | x(4.1) ≈ 2.3 − 0.3√3, using v(4) as the slope |
| 1 | Underestimate, justified by x″ = a > 0 |

Total: 6 points. Topics: 4.1, 4.2, 4.6.
</details>

## Question 5 (constructed response · mixed)

Two rods, 8 m and 10 m long, are hinged together at one end. A stage designer opens the angle θ between them at a steady 0.1 radians per minute. A cloth covers the triangle formed by the rods and the line joining their free ends. Its area is A = (1/2)(8)(10) sin θ = 40 sin θ m², and the length c of the third side satisfies c² = 8² + 10² − 2(8)(10) cos θ.

(a) Find dA/dt when θ = π/3. Give units and interpret your answer.
(b) For which angle θ, with 0 < θ < π, does the area momentarily stop increasing? Explain.
(c) Find dc/dt when θ = π/3.
(d) Use your answer to (a) to estimate the change in the cloth's area over the 30 seconds after θ = π/3. Is this an overestimate or an underestimate? Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A = 40 sin θ, so dA/dt = 40 cos θ · dθ/dt = 40 cos θ × 0.1 = 4 cos θ. At θ = π/3: **dA/dt = 2 m² per minute**. When the angle is π/3, the area of the cloth is increasing at 2 square metres per minute.

**(b)** dA/dt = 4 cos θ = 0 when **θ = π/2**. For θ < π/2, cos θ > 0 and the area grows; for θ > π/2, it shrinks. The triangle has its largest area when the rods are at right angles.

**(c)** At θ = π/3, c² = 64 + 100 − 160(1/2) = 84, so c = 2√21. Differentiate c² = 164 − 160 cos θ: 2c · dc/dt = 160 sin θ · dθ/dt. So 4√21 · dc/dt = 160(√3/2)(0.1) = 8√3, and **dc/dt = 2√3/√21 = 2/√7 m per minute** (about 0.76 m per minute).

**(d)** 30 seconds is 0.5 minutes, so the change is about 2 × 0.5 = **1 m²**. Since dθ/dt is constant, d²A/dt² = −40 sin θ (0.1)² = −0.4 sin θ, which is negative for these angles. A is concave down as a function of time, so the tangent line lies above it: **1 m² is an overestimate**. (The actual change is about 0.96 m².)

| Point | What earns it |
|---|---|
| 1 | dA/dt = 40 cos θ · dθ/dt, with dθ/dt attached |
| 1 | 2 m² per minute, with an interpretation naming the angle, "increasing" and units |
| 1 | θ = π/2 from dA/dt = 0, with the sign change of cos θ |
| 1 | c = 2√21 and a correct derivative of the equation for c² |
| 1 | dc/dt = 2/√7 m per minute |
| 1 | Estimate 1 m² from a 0.5-minute step |
| 1 | Overestimate, justified by d²A/dt² < 0 |

Total: 7 points. Topics: 4.1, 4.4, 4.5, 4.6.
</details>

## Question 6 (constructed response · mixed)

Let h(x) = ln(1 + 2x)/x for x > −1/2, x ≠ 0, and let h(0) = k.

(a) Find lim (x → 0) h(x). Show that L'Hospital's Rule applies.
(b) Find the value of k that makes h continuous at x = 0.
(c) Find lim (x → ∞) h(x). Show that the rule applies.
(d) Write the linearization of f(x) = ln(1 + 2x) at x = 0. Use it to estimate ln(1.1), and decide whether the estimate is too high or too low.
(e) Use your linearization to explain the answer to (a) without the rule.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (x → 0) ln(1 + 2x) = ln 1 = 0 and lim (x → 0) x = 0. The form is 0/0, so the rule applies: lim (x → 0) [2/(1 + 2x)]/1 = **2**.

**(b)** Continuity needs h(0) = lim (x → 0) h(x), so **k = 2**.

**(c)** As x → ∞, ln(1 + 2x) → ∞ and x → ∞, so the form is ∞/∞. The rule gives lim (x → ∞) 2/(1 + 2x) = **0**.

**(d)** f(0) = 0 and f′(x) = 2/(1 + 2x), so f′(0) = 2 and **L(x) = 2x**. ln(1.1) = f(0.05) ≈ 2(0.05) = **0.1**. f″(x) = −4/(1 + 2x)² < 0, so the graph bends downward and the line lies above it: **0.1 is too high**. (The true value is about 0.0953.)

**(e)** Near x = 0, ln(1 + 2x) ≈ 2x, so h(x) ≈ 2x/x = 2: the top behaves like its tangent line.

| Point | What earns it |
|---|---|
| 1 | Both limits in (a) stated separately as 0 |
| 1 | Limit 2 from the derivatives of top and bottom, and k = 2 |
| 1 | ∞/∞ form shown, and limit 0 at infinity |
| 1 | L(x) = 2x and the estimate 0.1 |
| 1 | Too high, justified by f″ < 0 |
| 1 | (e): links ln(1 + 2x) ≈ 2x to the limit 2 |

Total: 6 points. Topics: 4.6, 4.7.
</details>

## Question 7 (constructed response · mixed)

A water tank is a vertical cylinder with radius 2 m. The volume of water in it, V(t) cubic metres, is measured at selected times t hours. V is differentiable.

| t (hours) | 0 | 2 | 5 | 6 | 9 |
|---|---|---|---|---|---|
| V(t) (m³) | 30 | 33.6 | 37.2 | 37.5 | 36.6 |

(a) Use the data to estimate V′(5.5). Give units and interpret your answer.
(b) The depth of water is h m, so V = 4πh. Use (a) to estimate the rate at which the depth is changing at t = 5.5.
(c) Was the depth rising faster at t = 1 or at t = 5.5? Use the data to support your answer.
(d) At t = 7, a sensor shows that the depth is decreasing at 0.02 m per hour. Find dV/dt at t = 7, in litres per minute. (1 m³ = 1000 litres.)

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V′(5.5) ≈ (37.5 − 37.2)/(6 − 5) = **0.3 m³ per hour**. At 5.5 hours, the volume of water is increasing at about 0.3 cubic metres per hour.

**(b)** V = 4πh at all times, so dV/dt = 4π · dh/dt and dh/dt = (dV/dt)/(4π) ≈ 0.3/(4π) = **3/(40π) m per hour** (about 0.024 m per hour).

**(c)** V′(1) ≈ (33.6 − 30)/2 = 1.8 m³ per hour, so dh/dt ≈ 9/(20π) m per hour. dh/dt is always V′ ÷ 4π, so the larger V′ gives the larger dh/dt: the depth was **rising faster at t = 1**.

**(d)** dV/dt = 4π · dh/dt = 4π(−0.02) = −0.08π m³ per hour. That is −80π litres per hour, or −80π/60 = **−4π/3 litres per minute** (about −4.2). At t = 7 the volume is decreasing at 4π/3 litres per minute.

| Point | What earns it |
|---|---|
| 1 | 0.3 from the closest values either side of 5.5, with units |
| 1 | Interpretation with the time, "increasing" and units |
| 1 | dV/dt = 4π · dh/dt and 3/(40π) m per hour |
| 1 | (c): t = 1, with both rates compared through the factor 1/(4π) |
| 1 | −0.08π m³ per hour, with a negative sign |
| 1 | Conversion to −4π/3 litres per minute |

Total: 6 points. Topics: 4.1, 4.3, 4.4.
</details>

## How did you do?

Add up your points from Questions 4–7 (25 in total) and your correct answers to Questions 1–3. The total is only a guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-checklist/) ·
[4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-checklist/) ·
[4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-checklist/) ·
[4.4](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-checklist/) ·
[4.5](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-checklist/) ·
[4.6](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-checklist/) ·
[4.7](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-checklist/)

If many topics need work, go back to the [Unit 4 diagnostic](/advanced-course-resources/calculus-ab/unit-4-diagnostic/) and use its "Your next step" table to choose where to start.
