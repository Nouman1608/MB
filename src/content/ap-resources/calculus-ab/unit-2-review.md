---
resourceId: "mb-ap-calcab-u2-review"
title: "Differentiation: Definition and Fundamental Properties: Mixed Unit Review (Calculus AB Unit 2)"
description: "The big ideas of Differentiation: Definition and Fundamental Properties, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 2
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 2 topics, or at least the Unit 2 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u2-diagnostic"]
learningObjectives:
  - "Connect the definition of the derivative, tangent lines, estimates and the derivative rules as one set of ideas"
  - "Choose the right rule by reading the structure of an expression"
  - "Answer multi-part questions that combine several Unit 2 topics, including table and context questions"
  - "Justify whether a derivative exists at a point using continuity and one-sided difference quotients"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Leave answers exact, such as 50/e or 3e²."
related: ["mb-ap-calcab-u2-diagnostic", "mb-ap-calcab-2.1-checklist", "mb-ap-calcab-2.2-checklist", "mb-ap-calcab-2.3-checklist", "mb-ap-calcab-2.4-checklist", "mb-ap-calcab-2.5-checklist", "mb-ap-calcab-2.6-checklist", "mb-ap-calcab-2.7-checklist", "mb-ap-calcab-2.8-checklist", "mb-ap-calcab-2.9-checklist", "mb-ap-calcab-2.10-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The derivative at a point is the limit of average rates of change; the derivative function collects those limits for every x."
  - "f′(a) is the slope of the tangent line at (a, f(a)); keep the value f(a) and the slope f′(a) separate."
  - "Differentiable at a point means continuous there, but a continuous function can still fail to have a derivative."
  - "Rewrite first, then pick the rule from the structure: power, sum, product, quotient, or a known trig, exponential or log derivative."
  - "Shared review for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after studying the Unit 2 topics or after the [Unit 2 diagnostic](/advanced-course-resources/calculus-ab/unit-2-diagnostic/). The unit is shared by Calculus AB and Calculus BC; no question here is BC only. These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric, not official scoring. No calculator.

## Big ideas of the unit

- **A derivative is a limit of average rates.** The difference quotient (f(a + h) − f(a))/h is an average rate over a small interval; its limit as h → 0 is f′(a), the rate at an instant ([Topic 2.1](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/)).
- **The derivative is also a function.** Letting x vary gives f′(x), written dy/dx, f′(x) or y′. Its value at a is the slope of the tangent line at (a, f(a)) ([Topic 2.2](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/)).
- **Without a formula, you estimate.** From a table, use the closest points around a; from a graph, the tangent slope; with technology, the numerical derivative ([Topic 2.3](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/)).
- **Differentiable implies continuous, not the other way round.** A break rules out a derivative. Corners, cusps and vertical tangents are continuous points with no derivative ([Topic 2.4](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/)).
- **Rules replace the limit.** The power rule handles xʳ for any real r once you rewrite roots and fractions as powers ([Topic 2.5](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/)). Constants, sums and constant multiples then give every polynomial ([Topic 2.6](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/)).
- **Four special derivatives:** sin x → cos x, cos x → −sin x, eˣ → eˣ, ln x → 1/x. Seeing a difference quotient as one of these lets you find a limit fast ([Topic 2.7](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/)).
- **Products and quotients have their own rules.** (fg)′ = f′g + fg′ and (f/g)′ = (gf′ − fg′)/g². Neither is f′g′ or f′/g′ ([Topic 2.8](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/), [Topic 2.9](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/)).
- **The other four trig derivatives follow from the quotient rule.** Write tan, cot, sec and csc using sin and cos, then simplify with sin²x + cos²x = 1 ([Topic 2.10](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| (f(b) − f(a))/(b − a) | Average rate of change over [a, b] | 2.1 |
| lim (h → 0) (f(a + h) − f(a))/h or lim (x → a) (f(x) − f(a))/(x − a) | f′(a); if you know the derivative of f, read the limit as f′(a) | 2.1, 2.7 |
| Tangent line at x = a | Point (a, f(a)), slope f′(a): y − f(a) = f′(a)(x − a) | 2.2 |
| A table, no formula | Difference quotient on the shortest interval containing a, with units | 2.3 |
| Piecewise function or absolute value at a join | Check continuity first, then both one-sided limits of the difference quotient | 2.4 |
| Roots, or x in a denominator | Rewrite as xʳ, then power rule | 2.5 |
| Sum or constant multiple | Differentiate term by term; a constant term gives 0 | 2.6 |
| sin, cos, eˣ, ln x | Use the four known derivatives | 2.7 |
| f · g | f′g + fg′ | 2.8 |
| f / g | (gf′ − fg′)/g²; but if the bottom is a single power, split or rewrite first | 2.9, 2.5 |
| tan, cot, sec, csc | sec²x, −csc²x, sec x tan x, −csc x cot x | 2.10 |
| "Horizontal tangent" | Solve f′(x) = 0 in the domain | 2.2, 2.6–2.10 |

## Question 1 (multiple choice · mixed)

What is lim (h → 0) ((2 + h)e^(2 + h) − 2e²)/h?

- (A) e²
- (B) 2e²
- (C) 3e²
- (D) It does not exist, because substitution gives 0/0.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The limit is the h-form of f′(2) for f(x) = xeˣ, since f(2) = 2e². By the product rule, f′(x) = 1·eˣ + x·eˣ = (x + 1)eˣ, so f′(2) = 3e².

- (A) keeps only the first product-rule term, 1·eˣ.
- (B) is f(2), the value, not the slope (it is also the second product-rule term on its own).
- (D) 0/0 is normal for a derivative written as a limit; it does not mean the limit fails.

Topics: 2.1, 2.7, 2.8.
</details>

## Question 2 (multiple choice · mixed)

Let k(x) = ∛x · (x − 4), defined for all real x. Which statement is true?

- (A) k has horizontal tangents at both x = 0 and x = 1.
- (B) k has a horizontal tangent at x = 1, and k′(0) does not exist because the graph has a vertical tangent at x = 0.
- (C) k′(0) does not exist because k is not continuous at x = 0.
- (D) k′(x) = (1/3)x^(−2/3), which is never 0, so k has no horizontal tangent.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Expand: k(x) = x^(4/3) − 4x^(1/3). By the power and sum rules, k′(x) = (4/3)x^(1/3) − (4/3)x^(−2/3) = 4(x − 1)/(3x^(2/3)) for x ≠ 0. This is 0 at x = 1. At x = 0, k is continuous (k(0) = 0), but the difference quotient k(h)/h = (h − 4)/h^(2/3) tends to −∞ from both sides: a vertical tangent, so k′(0) does not exist.

- (A) At x = 0 the derivative is undefined, not 0.
- (C) k is a product of continuous functions, so it is continuous at 0.
- (D) multiplies the derivatives of the two factors, (1/3)x^(−2/3) × 1.

Topics: 2.4, 2.5, 2.6, 2.8.
</details>

## Question 3 (multiple choice · mixed)

Which is an equation of the line tangent to y = cos x/(1 + sin x) at x = 0?

- (A) y = 1 + x
- (B) y = −x
- (C) y = 1
- (D) y = 1 − x

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Quotient rule:

dy/dx = [(1 + sin x)(−sin x) − cos x · cos x]/(1 + sin x)² = −(sin x + sin²x + cos²x)/(1 + sin x)² = −(1 + sin x)/(1 + sin x)² = −1/(1 + sin x).

At x = 0: y = 1/1 = 1 and dy/dx = −1. So y − 1 = −1(x − 0), which is y = 1 − x.

- (A) reverses the top of the quotient rule, giving slope +1.
- (B) uses the slope but the point (0, 0) instead of (0, 1).
- (C) divides the derivatives, −sin x / cos x, which is 0 at x = 0.

Topics: 2.2, 2.7, 2.9, 2.10.
</details>

## Question 4 (constructed response · mixed)

A function f is differentiable for all x. Selected values are shown (invented data). You are also told that f′(3) = 2 exactly.

| x | 0 | 2 | 3 | 5 | 6 |
|---|---|---|---|---|---|
| f(x) | 1 | 5 | 6 | 10 | 16 |

(a) Find the average rate of change of f over [0, 6].
(b) Use the table to estimate f′(4). Show the difference quotient you use.
(c) Let g(x) = f(x) · ln x for x > 0. Find g′(3).
(d) Let q(x) = f(x)/(x + 1). Find q′(3).
(e) Write an equation of the line tangent to the graph of q at x = 3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (f(6) − f(0))/(6 − 0) = (16 − 1)/6 = **5/2**.

**(b)** The shortest interval in the table containing 4 is [3, 5]: f′(4) ≈ (f(5) − f(3))/(5 − 3) = (10 − 6)/2 = **2**.

**(c)** Product rule: g′(x) = f′(x) · ln x + f(x) · (1/x). At x = 3: g′(3) = 2 ln 3 + 6/3 = **2 + 2 ln 3**.

**(d)** Quotient rule, with bottom x + 1 and its derivative 1:
q′(3) = [(3 + 1) f′(3) − f(3) · 1]/(3 + 1)² = (4 × 2 − 6)/16 = 2/16 = **1/8**.

**(e)** q(3) = 6/4 = 3/2. Tangent line: **y − 3/2 = (1/8)(x − 3)**.

| Point | What earns it |
|---|---|
| 1 | (a): 5/2, from f(6) and f(0) |
| 1 | (b): an interval containing 4, with the quotient shown (2) |
| 1 | (c): product rule set up with f(3) and f′(3) in the right places |
| 1 | (c): d/dx ln x = 1/x used, and g′(3) = 2 + 2 ln 3 |
| 1 | (d): q′(3) = 1/8, with the quotient rule numerator in the correct order |
| 1 | (e): tangent line through (3, 3/2) with slope 1/8 |

Total: 6 points. Topics: 2.1, 2.2, 2.3, 2.7, 2.8, 2.9.
</details>

## Question 5 (constructed response · mixed)

For constants a and b, a function f is defined by

- f(x) = a√x for 0 < x ≤ 4
- f(x) = x²/8 + b for x > 4

(a) Use the definition of the derivative to show that the derivative of √x at x = 4 is 1/4.
(b) Write an equation in a and b that must hold if f is continuous at x = 4.
(c) Find a and b so that f is differentiable at x = 4. Justify.
(d) With these values, write an equation of the line tangent to the graph of f at x = 4.
(e) Now let a = 4 and b = 5. Is f differentiable at x = 4? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (h → 0) (√(4 + h) − 2)/h. Multiply top and bottom by √(4 + h) + 2: the top becomes (4 + h) − 4 = h, so the quotient is 1/(√(4 + h) + 2) for h ≠ 0. The limit is 1/(2 + 2) = **1/4**.

**(b)** f(4) = 2a, and the right-hand limit is 16/8 + b = 2 + b. Continuity needs **2a = 2 + b**.

**(c)** For x < 4, f′(x) = a/(2√x), so the left-hand slope at 4 is a/4 (this is a times the limit in (a)). For x > 4, f′(x) = x/4, so the right-hand slope is 4/4 = 1. Differentiability needs continuity (from (b)) and equal one-sided slopes: a/4 = 1, so **a = 4**, and then b = 2a − 2 = **6**.

**(d)** f(4) = 4 × 2 = 8 and f′(4) = 1. Tangent line: **y − 8 = 1(x − 4)**, or y = x + 4.

**(e)** **No.** f(4) = 8 but the right-hand limit is 2 + 5 = 7, so f is not continuous at 4, and so not differentiable there, even though the one-sided slopes match.

| Point | What earns it |
|---|---|
| 1 | (a): conjugate algebra and the limit 1/4 |
| 1 | (b): 2a = 2 + b |
| 1 | (c): one-sided slopes a/4 and 1 |
| 1 | (c): a = 4 and b = 6, with both conditions used |
| 1 | (d): tangent line through (4, 8) with slope 1 |
| 1 | (e): "no", because continuity fails (8 ≠ 7) |

Total: 6 points. Topics: 2.1, 2.2, 2.4, 2.5, 2.6.
</details>

## Question 6 (constructed response · mixed)

In a fictional model, the power output of a small test generator t hours after start-up is

**P(t) = 50t²/eᵗ** kilowatts, for 0 ≤ t ≤ 6.

(a) Use the quotient rule to show that P′(t) = 50t(2 − t)/eᵗ.
(b) Find P′(1). Give units and interpret the value in context.
(c) Find the time in 0 < t < 6 at which P′(t) = 0, and the power output at that time. What does the sign of P′(3) tell you?
(d) Write P(t) = 50t² · (1/eᵗ). Use the quotient rule to find the derivative of 1/eᵗ, then the product rule to check (a).
(e) Find the average rate of change of P over [0, 2], with units.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Top 50t², derivative 100t. Bottom eᵗ, derivative eᵗ.
P′(t) = [eᵗ · 100t − 50t² · eᵗ]/(eᵗ)² = eᵗ(100t − 50t²)/e^(2t) = **50t(2 − t)/eᵗ**.

**(b)** P′(1) = 50(1)(1)/e = **50/e kilowatts per hour** (about 18.4). One hour after start-up, the power output is increasing at 50/e kilowatts per hour.

**(c)** eᵗ is never 0, so P′(t) = 0 only when t = 0 or t = 2. In 0 < t < 6 that is **t = 2**, when P(2) = 200/e² kilowatts. P′(3) = 50(3)(−1)/e³ = −150/e³ < 0, so **at t = 3 the power output is decreasing**.

**(d)** d/dt (1/eᵗ) = [eᵗ · 0 − 1 · eᵗ]/(eᵗ)² = −1/eᵗ. Product rule: P′(t) = 100t · (1/eᵗ) + 50t² · (−1/eᵗ) = (100t − 50t²)/eᵗ = 50t(2 − t)/eᵗ, which agrees with (a).

**(e)** (P(2) − P(0))/(2 − 0) = (200/e² − 0)/2 = **100/e² kilowatts per hour** (about 13.5).

| Point | What earns it |
|---|---|
| 1 | (a): quotient rule with correct parts and simplification |
| 1 | (b): 50/e with units kilowatts per hour |
| 1 | (b): interpretation: rate at t = 1, increasing |
| 1 | (c): t = 2 and P(2) = 200/e², with the reason eᵗ ≠ 0 |
| 1 | (c): P′(3) < 0 means decreasing |
| 1 | (d): derivative of 1/eᵗ is −1/eᵗ and product rule agrees |
| 1 | (e): 100/e² with units |

Total: 7 points. Topics: 2.1, 2.2, 2.5, 2.7, 2.8, 2.9.
</details>

## Question 7 (constructed response · mixed)

For a constant k, let g be defined on −π/2 < x < π/2 by

- g(x) = x + cos x for x ≤ 0
- g(x) = 1 + k tan x for x > 0

(a) Show that g is continuous at x = 0 for every value of k.
(b) Find lim (h → 0⁻) (g(h) − g(0))/h. Recognise (cos h − 1)/h as a derivative to help.
(c) Find lim (h → 0⁺) (g(h) − g(0))/h in terms of k. Recognise tan h/h as a derivative to help.
(d) For which value of k is g differentiable at x = 0? Write g′(x) for x < 0 and for x > 0 with that k.
(e) With that k, write an equation of the line tangent to the graph of g at x = π/4.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** g(0) = 0 + cos 0 = 1. Left-hand limit: 0 + 1 = 1. Right-hand limit: 1 + k tan 0 = 1. All three agree for any k, so **g is continuous at 0**.

**(b)** (h + cos h − 1)/h = 1 + (cos h − 1)/h. The second part is the difference quotient of cos at 0, so it tends to −sin 0 = 0. The limit is **1**.

**(c)** (1 + k tan h − 1)/h = k · tan h/h. Since tan 0 = 0, tan h/h is the difference quotient of tan at 0, so it tends to sec²0 = 1. The limit is **k**.

**(d)** g is continuous at 0, so it is differentiable there exactly when the one-sided limits agree: **k = 1**, with g′(0) = 1. Then g′(x) = **1 − sin x** for x < 0 and g′(x) = **sec²x** for x > 0.

**(e)** g(π/4) = 1 + tan(π/4) = 2, and g′(π/4) = sec²(π/4) = (√2)² = 2. Tangent line: **y − 2 = 2(x − π/4)**.

| Point | What earns it |
|---|---|
| 1 | (a): g(0) and both one-sided limits equal 1 |
| 1 | (b): limit 1, using (cos h − 1)/h → 0 |
| 1 | (c): limit k, using tan h/h → 1 |
| 1 | (d): k = 1, with continuity and equal one-sided limits as the reason |
| 1 | (d): g′(x) correct on both sides |
| 1 | (e): tangent line through (π/4, 2) with slope 2 |

Total: 6 points. Topics: 2.1, 2.4, 2.7, 2.10.
</details>

## How did you do?

Add your points from Questions 4–7 (25 in total) and your correct answers to Questions 1–3. The total is only a rough guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then work through those topic checklists:

[2.1](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-checklist/) ·
[2.2](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-checklist/) ·
[2.3](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-checklist/) ·
[2.4](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-checklist/) ·
[2.5](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-checklist/) ·
[2.6](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-checklist/) ·
[2.7](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-checklist/) ·
[2.8](/advanced-course-resources/calculus-ab/2-8-product-rule-checklist/) ·
[2.9](/advanced-course-resources/calculus-ab/2-9-quotient-rule-checklist/) ·
[2.10](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-checklist/)

If many topics need work, start from the "Your next step" table in the [Unit 2 diagnostic](/advanced-course-resources/calculus-ab/unit-2-diagnostic/).
