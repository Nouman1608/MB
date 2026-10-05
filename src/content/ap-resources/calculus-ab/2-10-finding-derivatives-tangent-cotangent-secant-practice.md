---
resourceId: "mb-ap-calcab-2.10-practice"
title: "Derivatives of Tangent, Cotangent, Secant and Cosecant: Practice Questions (Calculus AB 2.10)"
description: "Seven original Marlbridge practice questions on derivatives of tan, cot, sec and csc, with identities, product and quotient rules, a context and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.10"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of sin x and cos x"
  - "The product rule and the quotient rule"
  - "Exact trig values at π/6, π/4, π/3 and π/2"
prerequisiteResources: ["mb-ap-calcab-2.10-study-guide"]
learningObjectives:
  - "Recall and apply the derivatives of tan x, cot x, sec x and csc x"
  - "Derive a trig derivative by rewriting with sine and cosine"
  - "Use identities to simplify derivatives that combine these functions"
  - "Interpret a trig derivative in context, with units"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers such as √3 or π/2."
related: ["mb-ap-calcab-2.10-study-guide", "mb-ap-calcab-2.10-revision-notes", "mb-ap-calcab-2.10-checklist"]
next: "mb-ap-calcab-2.10-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: sec²x means (sec x)², and fractions are written on one line. The context in Question 6 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

If f(x) = 3 tan x − 2 sec x, what is f′(x)?

- (A) 3 sec x − 2 sec x tan x
- (B) 3 sec²x + 2 sec x tan x
- (C) 3 sec²x − 2 tan x
- (D) 3 sec²x − 2 sec x tan x

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Use the constant multiple and difference rules with d/dx tan x = sec²x and d/dx sec x = sec x tan x: f′(x) = 3 sec²x − 2 sec x tan x.

- (A) drops the square: the derivative of tan x is sec²x, not sec x.
- (B) flips the sign of the second term. Only the "co" functions (cot, csc) bring in a new minus sign; sec x does not.
- (C) uses d/dx sec x = tan x, missing the factor sec x.
</details>

## Question 2 (multiple choice · core)

What is the slope of the graph of y = sec x at x = π/3?

- (A) √3
- (B) 2√3/3
- (C) 2√3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dy/dx = sec x tan x. At π/3: sec(π/3) = 1/cos(π/3) = 1/(1/2) = 2 and tan(π/3) = √3. Slope = 2 × √3 = 2√3.

- (A) uses d/dx sec x = tan x, so it gives tan(π/3) only.
- (B) uses tan(π/3) = 1/√3 = √3/3, which is the value of tan(π/6).
- (D) uses sec²x, which is the derivative of tan x, not of sec x.
</details>

## Question 3 (multiple choice · core)

Let h(x) = x cot x for 0 < x < π. What is h′(π/2)?

- (A) −π/2
- (B) 0
- (C) π/2
- (D) −1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Product rule: h′(x) = (1)(cot x) + x(−csc²x) = cot x − x csc²x. At π/2: cot(π/2) = cos(π/2)/sin(π/2) = 0 and csc(π/2) = 1. So h′(π/2) = 0 − (π/2)(1) = −π/2.

- (B) keeps only the first product-rule term, cot x, which is 0 at π/2.
- (C) uses d/dx cot x = +csc²x, losing the minus sign.
- (D) multiplies the derivatives, (1)(−csc²x), instead of using the product rule.
</details>

## Question 4 (multiple choice · core)

What is d/dx (sec²x − tan²x)?

- (A) 2 sec²x tan x
- (B) 0
- (C) 1
- (D) 4 sec²x tan x

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The identity 1 + tan²x = sec²x gives sec²x − tan²x = 1 wherever both are defined. The derivative of a constant is 0. You can also check with the product rule: d/dx sec²x = 2 sec x · sec x tan x = 2 sec²x tan x, and d/dx tan²x = 2 tan x sec²x. These are equal, so the difference is 0.

- (A) differentiates sec²x but forgets to subtract the derivative of tan²x.
- (C) gives the value of the expression, not its derivative.
- (D) adds the two derivatives instead of subtracting them.
</details>

## Question 5 (constructed response · core)

(a) Write csc x in terms of sin x, and use the quotient rule to show that d/dx csc x = −csc x cot x.
(b) For which values of x is the result in (a) valid?
(c) Find the equation of the line tangent to y = csc x at x = π/6.

<details>
<summary>Worked solution</summary>

**(a)** csc x = 1/sin x. Top: 1, derivative 0. Bottom: sin x, derivative cos x.

d/dx csc x = [sin x · 0 − 1 · cos x]/sin²x = −cos x/sin²x = −(1/sin x)(cos x/sin x) = **−csc x cot x**.

**(b)** Wherever sin x ≠ 0, that is x ≠ kπ for any integer k.

**(c)** csc(π/6) = 1/(1/2) = 2. cot(π/6) = (√3/2)/(1/2) = √3. Slope = −(2)(√3) = −2√3. Tangent line: **y = 2 − 2√3(x − π/6)**.

Suggested mark points (4): 1 for rewriting as 1/sin x and a correct quotient-rule set-up; 1 for splitting −cos x/sin²x into −csc x cot x; 1 for the domain x ≠ kπ; 1 for the tangent line with point (π/6, 2) and slope −2√3.
</details>

## Question 6 (constructed response · core)

In an invented scenario, a camera on level ground is 50 metres from the point directly below a balloon. The balloon rises straight up. When the angle of elevation from the camera to the balloon is θ radians, the balloon's height is

**H(θ) = 50 tan θ** metres, for 0 ≤ θ < π/2.

(a) Find H′(θ).
(b) Find H′(π/6) and H′(π/3). Give units, and explain what the two values tell you.
(c) Explain why H′(θ) ≥ 50 for every θ in the domain.
(d) Use an identity to show that H′(θ) = 50 + [H(θ)]²/50.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** H′(θ) = **50 sec²θ**.

**(b)** sec(π/6) = 1/(√3/2) = 2/√3, so sec²(π/6) = 4/3 and H′(π/6) = 50 × 4/3 = **200/3 metres per radian**. sec(π/3) = 2, so sec²(π/3) = 4 and H′(π/3) = **200 metres per radian**. The height changes three times as fast, per unit of angle, at θ = π/3 as at θ = π/6. As the balloon gets higher, a small increase in the angle corresponds to a much larger increase in height.

**(c)** sec²θ = 1/cos²θ. For 0 ≤ θ < π/2, 0 < cos θ ≤ 1, so 0 < cos²θ ≤ 1 and 1/cos²θ ≥ 1. So H′(θ) = 50 sec²θ ≥ 50. Equality holds only at θ = 0.

**(d)** sec²θ = 1 + tan²θ, so H′(θ) = 50 + 50 tan²θ. Since tan θ = H/50, 50 tan²θ = 50 × H²/2500 = H²/50. So **H′(θ) = 50 + H²/50**. Check at θ = π/3: H = 50√3, H² = 7500, so 50 + 150 = 200, as in (b).

| Point | What earns it |
|---|---|
| 1 | H′(θ) = 50 sec²θ |
| 1 | Both values, 200/3 and 200, with units of metres per radian |
| 1 | A correct interpretation comparing the two rates |
| 1 | Argument that sec²θ ≥ 1 because 0 < cos²θ ≤ 1 on the domain |
| 1 | Uses 1 + tan²θ = sec²θ and tan θ = H/50 to reach 50 + H²/50 |

A statement such as "the balloon is 200 metres high" in (b) earns no interpretation mark: H′ is a rate, not a height.
</details>

## Question 7 (constructed response · stretch)

Let k(x) = tan x/(1 + sec x), for 0 < x < π/2.

(a) Use the quotient rule and an identity to show that k′(x) = 1/(1 + cos x).
(b) Show that k(x) = sin x/(1 + cos x) on this interval, and differentiate this form to confirm your answer to (a).
(c) Find the equation of the line tangent to the graph of k at x = π/3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Top: tan x, derivative sec²x. Bottom: 1 + sec x, derivative sec x tan x.

k′(x) = [(1 + sec x)sec²x − tan x · sec x tan x]/(1 + sec x)².

Factor sec x from the top: sec x[(1 + sec x)sec x − tan²x] = sec x[sec x + sec²x − tan²x]. Since sec²x − tan²x = 1, the bracket is sec x + 1. So

k′(x) = sec x(1 + sec x)/(1 + sec x)² = sec x/(1 + sec x).

Multiply top and bottom by cos x: **k′(x) = 1/(cos x + 1)**.

**(b)** Multiply top and bottom of k by cos x: tan x · cos x = sin x and (1 + sec x)cos x = cos x + 1. So k(x) = sin x/(1 + cos x).

Quotient rule: [(1 + cos x)cos x − sin x(−sin x)]/(1 + cos x)² = (cos x + cos²x + sin²x)/(1 + cos x)² = (1 + cos x)/(1 + cos x)² = **1/(1 + cos x)**. The two methods agree.

**(c)** k(π/3) = sin(π/3)/(1 + cos(π/3)) = (√3/2)/(3/2) = √3/3. k′(π/3) = 1/(1 + 1/2) = 2/3. Tangent line: **y = √3/3 + (2/3)(x − π/3)**.

| Point | What earns it |
|---|---|
| 1 | Correct quotient-rule set-up with sec²x and sec x tan x |
| 1 | Uses sec²x − tan²x = 1 to simplify the numerator |
| 1 | Reaches 1/(1 + cos x) |
| 1 | Rewrites k as sin x/(1 + cos x) and differentiates it correctly |
| 1 | Tangent line with point (π/3, √3/3) and slope 2/3 |

Acceptable alternative for (a): rewrite first, as in (b), then differentiate. Full credit for (a) needs the identity step or an equivalent simplification.
</details>

## How did you do?

- **Q1 or Q2 wrong:** relearn the table of four results in the [study guide](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/), and practise deriving sec x from 1/cos x.
- **Q3 wrong:** redo Worked example 2 (product with tan x) and check the sign pattern for "co" functions.
- **Q4 or Q7 wrong:** see Worked example 3, where 1 + tan²x = sec²x simplifies a quotient.
- **Q5 wrong:** reread "Deriving d/dx sec x" and Worked example 1; the csc x derivation follows the same steps.
- **Q6 wrong:** see "Reading the derivative on a graph" and Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-checklist/).
