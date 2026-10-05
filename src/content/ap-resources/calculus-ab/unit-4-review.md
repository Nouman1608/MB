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

Use this page after studying Unit 4, Contextual Applications of Differentiation, or after the [Unit 4 diagnostic](/advanced-course-resources/calculus-ab/unit-4-diagnostic/). The unit is shared by Calculus AB and Calculus BC; every question is for both courses. These are **original Marlbridge practice questions**, not past exam questions, with invented data. The rubrics are a suggested Marlbridge rubric, not official scoring. No calculator.

## Big ideas of the unit

- **A derivative is a rate with units.** Its units are (units of f) ÷ (units of input), and the input need not be time ([Topic 4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/)).
- **A full interpretation names four things:** input value, quantity, direction and rate with units. f(a) is an amount; f′(a) is a rate ([Topic 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/)).
- **Motion is the same idea twice.** v = x′ and a = v′. The sign of v gives the direction; v and a with the same sign means speeding up ([Topic 4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/)).
- **The second derivative says how a rate is changing**: a falling quantity with a positive second derivative is falling more slowly ([Topic 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/)).
- **Related rates come from the chain rule.** Differentiate an always-true equation with respect to t; each changing quantity brings its own rate ([Topic 4.4](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/)).
- **Build first, substitute last.** Choose the equation, remove any variable whose rate you do not know, and substitute instant values only after differentiating ([Topic 4.5](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/)).
- **Close to a point, a curve behaves like its tangent line.** L(x) estimates nearby values; the sign of f″ says whether the estimate is too high or too low ([Topic 4.6](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/)).
- **L'Hospital's Rule is local linearity for quotients.** When top and bottom both tend to 0 (or both to ∞), compare their derivatives instead ([Topic 4.7](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| "Interpret f′(a)" | Input value, quantity, increasing/decreasing, rate with units | 4.1, 4.3 |
| Rate from a table | Difference quotient using the closest values either side | 4.1, 4.3 |
| Rest, direction, speeding up | v = 0; v changes sign; compare signs of v and a | 4.2 |
| Several quantities change together | Equation at all times → differentiate with respect to t | 4.4 |
| Product or quotient of changing quantities | Product or quotient rule, a rate on every changing factor | 4.4 |
| Extra variable with unknown rate | Remove it first (similar triangles, a fixed ratio) | 4.5 |
| Estimate a value near a | L(x) = f(a) + f′(a)(x − a) | 4.6 |
| Too high or too low? | f″ > 0: line below, underestimate; f″ < 0: overestimate | 4.6 |
| Limit gives 0/0 or ∞/∞ | Check both limits, then lim f′/g′ | 4.7 |

## Question 1 (multiple choice · mixed)

W(t) is the volume of water, in litres, in a leaking tank after t minutes. W(5) = 300, W′(5) = −12 and W″(t) > 0 for 5 ≤ t ≤ 6. The tangent line at t = 5 is used to estimate W(5.5). Which statement is best supported?

- (A) The leak is slowing down, and the estimate 294 is too low.
- (B) The leak is speeding up, and the estimate 294 is too high.
- (C) The leak is slowing down, and the estimate 294 is too high.
- (D) The leak is speeding up, and the estimate 306 is too low.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** W′(5) = −12, so water leaves at 12 litres per minute. W″ > 0 means W′ is increasing towards 0, so the leak is slowing down. The estimate is W(5.5) ≈ 300 − 12(0.5) = 294. W″ > 0, so the graph bends upward and the tangent line lies below it: 294 is too low.

- (B) reads W″ > 0 as a faster leak and reverses the concavity rule.
- (C) reverses the concavity rule.
- (D) reads W″ > 0 as a faster leak and adds the change, as if the tank were filling.

Topics: 4.1, 4.3, 4.6.
</details>

## Question 2 (multiple choice · mixed)

A rectangle on a screen has one corner at the origin and the opposite corner P on the curve y = 12 − x², with x > 0 and lengths in centimetres. P slides along the curve so that its x-coordinate increases at 0.5 cm per second. How fast is the area of the rectangle changing when x = 1?

- (A) Increasing at 5.5 cm² per second
- (B) Increasing at 4.5 cm² per second
- (C) Increasing at 9 cm² per second
- (D) Decreasing at 1 cm² per second

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The area is A = xy, and y = 12 − x² at all times, so A = 12x − x³. Differentiate with respect to t: dA/dt = (12 − 3x²) · dx/dt. At x = 1: dA/dt = 9 × 0.5 = 4.5 cm² per second. (Product rule check: dy/dt = −2x · dx/dt = −1, and 11(0.5) + 1(−1) = 4.5.)

- (A) keeps only y · dx/dt and forgets that the height y is also changing.
- (C) is dA/dx, with the rate dx/dt left out.
- (D) keeps only x · dy/dt.

Topics: 4.1, 4.4, 4.5.
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

**(a)** a(t) = −6 cos(πt/6) × (π/6) = **−π cos(πt/6)**. a(2) = −π cos(π/3) = **−π/2 m/s²**.

**(b)** v = 0 when sin(πt/6) = 1/2. With 0 ≤ πt/6 ≤ π, πt/6 = π/6 or 5π/6, so t = 1 or t = 5. v(0) = 3 > 0, v(2) = 3 − 3√3 < 0 and v(6) = 3 > 0, so v changes sign at both and the particle **changes direction at t = 1 and t = 5**.

**(c)** At t = 2: v(2) = 3 − 3√3 < 0 and a(2) = −π/2 < 0. Same signs: **speeding up**. At t = 4: v(4) = 3 − 6 sin(2π/3) = 3 − 3√3 < 0 and a(4) = −π cos(2π/3) = π/2 > 0. Opposite signs: **slowing down**.

**(d)** The slope of x at t = 4 is v(4), so x(4.1) ≈ 2 + (3 − 3√3)(0.1) = **2.3 − 0.3√3** (about 1.78 m). x″ = a > 0 on (3, 6), so the graph of x bends upward and the tangent line lies below it: **too low**.

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

Two rods, 5 m and 8 m long, are hinged at one end. A cloth covers the triangle formed by the rods and the line joining their free ends. A motor pushes the free ends apart so that their distance c increases at a steady 0.5 m per minute. If θ is the angle between the rods, c² = 89 − 80 cos θ and the cloth's area is A = 20 sin θ m².

(a) Find c when θ = π/3. Find dθ/dt at that moment, with units.
(b) Find dA/dt when θ = π/3. Interpret your answer in context.
(c) Find the distance c at the instant the area stops increasing. Explain.
(d) Use the tangent line to A, as a function of θ, at θ = π/3 to estimate A when θ = π/3 + 0.1. Is this an overestimate or an underestimate? Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** c² = 89 − 80(1/2) = 49, so **c = 7 m**. Differentiate with respect to t: 2c · dc/dt = 80 sin θ · dθ/dt. At θ = π/3: 2(7)(0.5) = 80(√3/2) · dθ/dt, so 7 = 40√3 · dθ/dt and **dθ/dt = 7/(40√3) = 7√3/120 radians per minute** (about 0.10).

**(b)** dA/dt = 20 cos θ · dθ/dt = 20(1/2)(7√3/120) = **7√3/12 m² per minute** (about 1.01). When the angle is π/3, the cloth's area is increasing at about 1.01 m² per minute.

**(c)** From (a), dθ/dt = c · (dc/dt)/(40 sin θ) > 0 for 0 < θ < π. So dA/dt = 20 cos θ · dθ/dt is 0 only when cos θ = 0, at **θ = π/2**, where it changes from positive to negative. Then c² = 89, so **c = √89 m** (about 9.4 m).

**(d)** dA/dθ = 20 cos θ, which is 10 at θ = π/3, and A(π/3) = 10√3. So A ≈ 10√3 + 10(0.1) = **10√3 + 1 m²** (about 18.32). d²A/dθ² = −20 sin θ < 0 for 0 < θ < π, so the tangent line lies above the graph: **an overestimate**. (The actual area is about 18.23 m².)

| Point | What earns it |
|---|---|
| 1 | c = 7 m |
| 1 | 2c · dc/dt = 80 sin θ · dθ/dt, with both rates attached |
| 1 | dθ/dt = 7√3/120 radians per minute |
| 1 | dA/dt = 7√3/12 m² per minute, with an interpretation |
| 1 | θ = π/2 from cos θ = 0 (with dθ/dt > 0), and c = √89 m |
| 1 | Estimate 10√3 + 1 from the tangent line in θ |
| 1 | Overestimate, justified by d²A/dθ² < 0 |

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

**(d)** f(0) = 0 and f′(x) = 2/(1 + 2x), so f′(0) = 2 and **L(x) = 2x**. ln(1.1) = f(0.05) ≈ 2(0.05) = **0.1**. f″(x) = −4/(1 + 2x)² < 0, so the line lies above the graph: **0.1 is too high**. (The true value is about 0.0953.)

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

| t (hours) | 0 | 3 | 4 | 8 | 10 |
|---|---|---|---|---|---|
| V(t) (m³) | 30 | 35.4 | 36.2 | 37.4 | 36.8 |

(a) Use the data to estimate V′(3.5). Give units and interpret your answer.
(b) The depth of water is h m, so V = 4πh. Use (a) to estimate the rate at which the depth is changing at t = 3.5.
(c) Was the depth rising faster at t = 1.5 or at t = 3.5? Use the data to support your answer.
(d) At t = 9, a sensor shows that the depth is decreasing at 0.02 m per hour. Find dV/dt at t = 9, in litres per minute. (1 m³ = 1000 litres.)

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V′(3.5) ≈ (36.2 − 35.4)/(4 − 3) = **0.8 m³ per hour**. At 3.5 hours, the volume is increasing at about 0.8 m³ per hour.

**(b)** dV/dt = 4π · dh/dt, so dh/dt ≈ 0.8/(4π) = **1/(5π) m per hour** (about 0.064 m per hour).

**(c)** V′(1.5) ≈ (35.4 − 30)/3 = 1.8 m³ per hour, so dh/dt ≈ 9/(20π) m per hour (about 0.14). Since dh/dt = V′ ÷ 4π, the larger V′ gives the larger dh/dt: the depth was **rising faster at t = 1.5**.

**(d)** dV/dt = 4π · dh/dt = 4π(−0.02) = −0.08π m³ per hour. That is −80π litres per hour, or −80π/60 = **−4π/3 litres per minute** (about −4.2).

| Point | What earns it |
|---|---|
| 1 | 0.8 from the closest values either side of 3.5, with units |
| 1 | Interpretation with the time, "increasing" and units |
| 1 | dV/dt = 4π · dh/dt and 1/(5π) m per hour |
| 1 | (c): t = 1.5, with both rates compared through the factor 1/(4π) |
| 1 | −0.08π m³ per hour, with a negative sign |
| 1 | Conversion to −4π/3 litres per minute |

Total: 6 points. Topics: 4.1, 4.3, 4.4.
</details>

## How did you do?

Add up your points from Questions 4–7 (25 in total) and your correct answers to Questions 1–3. The total is only a guide, not a predicted exam score. Note **which topics** your lost points came from (each answer lists them), then use those topic checklists:

[4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-checklist/) ·
[4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-checklist/) ·
[4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-checklist/) ·
[4.4](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-checklist/) ·
[4.5](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-checklist/) ·
[4.6](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-checklist/) ·
[4.7](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-checklist/)

If many topics need work, go back to the [Unit 4 diagnostic](/advanced-course-resources/calculus-ab/unit-4-diagnostic/) and use its "Your next step" table to choose where to start.
