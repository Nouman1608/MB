---
resourceId: "mb-ap-calcab-6.4-practice"
title: "The Fundamental Theorem of Calculus and Accumulation Functions: Practice Questions (Calculus AB 6.4)"
description: "Seven original Marlbridge practice questions on accumulation functions and the derivative of an integral, including graphs, the chain rule and a context, with full solutions."
course: "calculus-ab"
unit: 6
topics: ["6.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule (Topic 3.1)"
  - "Signed area and the definite integral (Topics 6.1 to 6.3)"
prerequisiteResources: ["mb-ap-calcab-6.4-study-guide"]
learningObjectives:
  - "Differentiate functions defined by integrals, including a lower limit x and an upper limit that is a function of x"
  - "Find values and derivatives of an accumulation function from a graph"
  - "Write a tangent line to a function defined by an integral"
  - "Explain the meaning of an accumulation function and its derivative in context"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers."
related: ["mb-ap-calcab-6.4-study-guide", "mb-ap-calcab-6.4-revision-notes", "mb-ap-calcab-6.4-checklist"]
next: "mb-ap-calcab-6.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, exact answers, and every integrand is continuous where it is used. Notation: ∫ (a to x) f(t) dt means the definite integral of f(t) from t = a to t = x. The context in Question 7 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let g(x) = ∫ (4 to x) √(t + 5) dt. What is g′(4)?

- (A) 0
- (B) 1/6
- (C) 3
- (D) −3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** √(t + 5) is continuous for t ≥ −5, so by the theorem g′(x) = √(x + 5). Then g′(4) = √9 = 3.

- (A) is g(4), not g′(4). The interval from 4 to 4 has no area, but the slope there is not 0.
- (B) differentiates the integrand: d/dt √(t + 5) = 1/(2√(t + 5)), which is 1/6 at t = 4. The theorem gives back the integrand itself, not its derivative.
- (D) adds a minus sign that belongs only when x is the **lower** limit.
</details>

## Question 2 (multiple choice · core)

What is d/dx ∫ (x to 2) cos(t²) dt?

- (A) cos(x²)
- (B) −cos(x²)
- (C) −2x sin(x²)
- (D) cos 4 − cos(x²)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Swap the limits: ∫ (x to 2) cos(t²) dt = −∫ (2 to x) cos(t²) dt. By the theorem its derivative is −cos(x²).

- (A) misses the minus sign that comes from x being the lower limit.
- (C) is the derivative of cos(x²). It differentiates the integrand instead of applying the theorem.
- (D) substitutes the limits into the integrand and subtracts. The result still contains a constant term, cos 4, which a derivative of this kind never has.
</details>

## Question 3 (multiple choice · core)

What is d/dx ∫ (0 to 2x) e^(t²) dt?

- (A) e^(4x²)
- (B) 2e^(4x²)
- (C) e^(4x²) − 1
- (D) 8x e^(4x²)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The upper limit is u(x) = 2x, so u′(x) = 2. Substitute u into the integrand and multiply by u′: e^((2x)²) · 2 = 2e^(4x²).

- (A) forgets the chain rule factor u′(x) = 2.
- (C) substitutes both limits into the integrand and subtracts (e^(4x²) − e⁰). That is not how the theorem works.
- (D) is the derivative of e^(4x²): it differentiates the integrand after substituting.
</details>

## Question 4 (multiple choice · core)

Let f(t) = 3 − t and g(x) = ∫ (1 to x) f(t) dt. What is g(4)?

- (A) −1
- (B) 3/2
- (C) 5/2
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The line y = 3 − t crosses the axis at t = 3. From t = 1 to 3 it is above the axis: a triangle with base 2 and height 2, area 2. From 3 to 4 it is below: a triangle with base 1 and height 1, area 1/2, counted as negative. So g(4) = 2 − 1/2 = 3/2.

- (A) is f(4) = g′(4), a slope, not the accumulated value.
- (C) adds the two areas without signs: 2 + 1/2.
- (D) starts the area at t = 0 instead of t = 1: ∫ (0 to 4) (3 − t) dt = 9/2 − 1/2 = 4.
</details>

## Question 5 (graph · core)

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="q5-title q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5-title">Graph of f for Question 5</title>
<desc id="q5-desc">The graph of f on −2 ≤ t ≤ 5 consists of three line segments joining the points (−2, −2), (0, 2), (2, 2) and (5, −1). The first segment rises with slope 2 and crosses the t-axis at t = −1. The second is horizontal at height 2. The third falls with slope −1 and crosses the t-axis at t = 4. Grid lines are drawn at every whole number.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.6" opacity="0.3"><line x1="80" y1="25" x2="80" y2="275"/><line x1="138" y1="25" x2="138" y2="275"/><line x1="196" y1="25" x2="196" y2="275"/><line x1="254" y1="25" x2="254" y2="275"/><line x1="312" y1="25" x2="312" y2="275"/><line x1="370" y1="25" x2="370" y2="275"/><line x1="428" y1="25" x2="428" y2="275"/><line x1="486" y1="25" x2="486" y2="275"/><line x1="80" y1="250" x2="486" y2="250"/><line x1="80" y1="200" x2="486" y2="200"/><line x1="80" y1="150" x2="486" y2="150"/><line x1="80" y1="100" x2="486" y2="100"/><line x1="80" y1="50" x2="486" y2="50"/></g>
<line x1="57" y1="150" x2="509" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="196" y1="280" x2="196" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<text x="513" y="146" font-size="12" fill="#1d2b44">t</text><text x="202" y="20" font-size="12" fill="#1d2b44">y</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="80" y="166">−2</text><text x="144" y="166">−1</text><text x="254" y="166">1</text><text x="312" y="166">2</text><text x="370" y="166">3</text><text x="428" y="144">4</text><text x="486" y="166">5</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="190" y="254">−2</text><text x="190" y="204">−1</text><text x="190" y="104">1</text><text x="190" y="54">2</text></g>
<polyline points="80,250 196,50 312,50 486,200" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="80" cy="250" r="4" fill="#1d2b44"/><circle cx="196" cy="50" r="4" fill="#1d2b44"/><circle cx="312" cy="50" r="4" fill="#1d2b44"/><circle cx="486" cy="200" r="4" fill="#1d2b44"/>
<text x="329" y="40" font-size="13" fill="#1d2b44">y = f(t)</text>
</svg>
<figcaption>Graph of f for Question 5. Each segment joins two of the marked points (−2, −2), (0, 2), (2, 2) and (5, −1).</figcaption>
</figure>

The graph of f on −2 ≤ t ≤ 5 is shown above. Let g(x) = ∫ (0 to x) f(t) dt.

(a) Find g(2), g(4) and g(5).
(b) Find g(−2), and explain the sign of your answer.
(c) Find g′(1) and g′(4.5).
(d) Write an equation of the tangent line to the graph of g at x = 4.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From 0 to 2: a rectangle, 2 × 2 = 4, so **g(2) = 4**. From 2 to 4 the graph falls from 2 to 0: a triangle with area (1/2)(2)(2) = 2, so **g(4) = 6**. From 4 to 5 it is below the axis: a triangle with area (1/2)(1)(1) = 1/2, so **g(5) = 6 − 1/2 = 11/2**.

**(b)** g(−2) = ∫ (0 to −2) f(t) dt = −∫ (−2 to 0) f(t) dt. On [−2, 0] there is a triangle below the axis from −2 to −1 (signed area −1) and a triangle above from −1 to 0 (signed area +1). So ∫ (−2 to 0) f(t) dt = 0 and **g(−2) = 0**. The two triangles cancel, so reversing the direction makes no difference here.

**(c)** f is continuous, so g′ = f. **g′(1) = f(1) = 2.** On [2, 5], f(t) = 4 − t, so **g′(4.5) = −0.5**.

**(d)** g(4) = 6 and g′(4) = f(4) = 0. Tangent line: **y = 6** (horizontal).

| Point | What earns it |
|---|---|
| 1 | g(2) = 4, g(4) = 6 and g(5) = 11/2, using signed areas |
| 1 | g(−2) = 0 with the reversal of limits shown or explained |
| 1 | g′(1) = 2 and g′(4.5) = −1/2, using g′ = f |
| 1 | Tangent line y = 6, from the point (4, 6) and slope 0 |
</details>

## Question 6 (constructed response · core)

Let F(x) = ∫ (0 to x) (t − 1)/(t² + 1) dt.

(a) Explain why F is differentiable for every real x, and find F′(x).
(b) Write an equation of the tangent line to the graph of F at x = 0.
(c) Let G(x) = ∫ (0 to x²) (t − 1)/(t² + 1) dt. Find G′(x) and G′(2).
(d) A student says G′(1) = 0 "because the upper limit is 1 and the integrand is 0 at t = 1". The value is right. Is the reason complete? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The integrand is a quotient of polynomials whose denominator t² + 1 is never 0, so it is continuous for every real t. By the theorem, F is differentiable everywhere and **F′(x) = (x − 1)/(x² + 1)**.

**(b)** F(0) = ∫ (0 to 0) … = 0 and F′(0) = (0 − 1)/(0 + 1) = −1. Tangent line: **y = −x**.

**(c)** G(x) = F(x²), so by the chain rule G′(x) = F′(x²) · 2x:

**G′(x) = 2x(x² − 1)/(x⁴ + 1)**, and G′(2) = 4 · 3/17 = **12/17**.

**(d)** Not complete. G′(1) = F′(1) · 2(1) = 0 · 2 = 0. The chain-rule factor 2x must be included; here the result is 0 only because the integrand is 0 at u(1) = 1. In general the factor u′(x) changes the answer, as G′(2) shows.

| Point | What earns it |
|---|---|
| 1 | Continuity of the integrand stated, and F′(x) = (x − 1)/(x² + 1) |
| 1 | y = −x, using F(0) = 0 and F′(0) = −1 |
| 1 | G′(x) with the factor 2x, and G′(2) = 12/17 |
| 1 | Explains that the chain-rule factor belongs in the derivative, even when the product is 0 |
</details>

## Question 7 (constructed response · stretch)

Rainwater flows into a tank at a rate of r(t) = 20 + 6 sin(t/2) litres per hour, for 0 ≤ t ≤ 12, where t is in hours. At t = 0 the tank holds 500 litres. For 0 ≤ x ≤ 12, let

W(x) = 500 + ∫ (0 to x) r(t) dt

(a) Explain what W(x) represents, with units.
(b) Find W′(x) and W′(π). Interpret W′(π) in context.
(c) Using a short time interval from x to x + h, explain in words why W′(x) = r(x).
(d) Let P(x) = ∫ (x to 12) r(t) dt. Say what P(x) means, find P′(π), and explain why its sign makes sense.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ (0 to x) r(t) dt is the water (in litres) that flows in from time 0 to time x hours. Adding the starting 500 litres, **W(x) is the volume of water in the tank, in litres, at time x hours**.

**(b)** r is continuous, and the derivative of the constant 500 is 0, so **W′(x) = r(x) = 20 + 6 sin(x/2)**. Then W′(π) = 20 + 6 sin(π/2) = **26 litres per hour**. At t = π hours the volume of water in the tank is increasing at 26 litres per hour.

**(c)** From x to x + h, the extra water is W(x + h) − W(x). Over a short interval the inflow rate stays close to r(x), so the extra water is about r(x) · h litres. Dividing by h gives about r(x) litres per hour, and the approximation becomes exact as h → 0. So W′(x) = r(x).

**(d)** P(x) is the water, in litres, that will flow in from time x until t = 12 hours. Since x is the lower limit, P′(x) = −r(x), so **P′(π) = −26 litres per hour**. The sign makes sense: as time passes, less of the period is left, so the amount still to come decreases, at the rate water is arriving.

| Point | What earns it |
|---|---|
| 1 | W(x) as the amount of water in the tank at time x, in litres |
| 1 | W′(x) = r(x) and W′(π) = 26 litres per hour, with interpretation |
| 1 | Short-interval argument: extra water ≈ r(x) · h, divide by h, let h → 0 |
| 1 | Meaning of P(x), P′(π) = −26, and a reason for the negative sign |
</details>

## How did you do?

- **Q1 or Q6(a) wrong:** reread "The Fundamental Theorem of Calculus (accumulation form)" in the [study guide](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/).
- **Q2, Q3 or Q6(c) wrong:** redo Worked example 2 and the "Variations you must recognise" table.
- **Q4 or Q5 wrong:** redo Worked example 1 with Figure 2, paying attention to signs.
- **Q6(b) or Q7 wrong:** see Worked example 3 and "Why it is true" with Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-checklist/).
