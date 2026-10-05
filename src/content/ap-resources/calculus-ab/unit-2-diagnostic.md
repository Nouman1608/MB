---
resourceId: "mb-ap-calcab-u2-diagnostic"
title: "Differentiation: Definition and Fundamental Properties: Unit Diagnostic (Calculus AB Unit 2)"
description: "Thirteen short original questions, one or two per topic of Differentiation: Definition and Fundamental Properties, to show which topics to revisit, with links."
course: "calculus-ab"
unit: 2
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limits and continuity from Unit 1, including one-sided limits"
  - "Exponent laws, fractions and the values of sin x and cos x at standard angles"
learningObjectives:
  - "Find out which Unit 2 topics are secure and which need more work"
  - "Check the definition of the derivative, tangent lines and derivative estimates quickly"
  - "Check the derivative rules for powers, sums, products, quotients, trig, exponential and log functions"
  - "Practise short justifications about where a derivative exists"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Angles are in radians. Question 4 needs only simple division; leave every other answer exact."
related: ["mb-ap-calcab-u2-review", "mb-ap-calcab-2.2-study-guide", "mb-ap-calcab-2.4-study-guide", "mb-ap-calcab-2.7-study-guide", "mb-ap-calcab-2.9-study-guide"]
next: "mb-ap-calcab-u2-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 2, to decide which of the 10 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
  - "Shared diagnostic for Calculus AB and Calculus BC students; no question is BC only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 2, Differentiation: Definition and Fundamental Properties, to revisit. There is one question per topic, and two for Topics 2.2, 2.4 and 2.7. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Angles are in radians. Answer everything before opening any answer. The unit is shared by Calculus AB and Calculus BC, so **no question here is BC only**.

## Question 1 (multiple choice · 2.1)

Let f(x) = x² + 3x. For h ≠ 0, the difference quotient (f(1 + h) − f(1))/h simplifies to h + 5. Which statement is true?

- (A) The average rate of change of f over [1, 4] is 8, and f′(1) = 5.
- (B) The average rate of change of f over [1, 4] is 8, and f′(1) = 6.
- (C) The average rate of change of f over [1, 4] is 24, and f′(1) = 5.
- (D) f′(1) cannot be found, because the quotient is 0/0 at h = 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The interval [1, 4] is [1, 1 + h] with h = 3, so the average rate is 3 + 5 = 8. (Check: (28 − 4)/(4 − 1) = 8.) The derivative is the limit as h → 0: f′(1) = 0 + 5 = 5.

- (B) puts h = 1 instead of taking the limit.
- (C) forgets to divide the change in f, 24, by the change in x, 3.
- (D) A limit never uses h = 0 itself.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/).
</details>

## Question 2 (multiple choice · 2.2)

The line tangent to the graph of g at x = −2 is y = 3x + 7. Which statement must be true?

- (A) g(−2) = 7 and g′(−2) = 3
- (B) g(−2) = 3 and g′(−2) = 1
- (C) g(−2) = 1 and g′(−2) = 3
- (D) g′(x) = 3 for every x

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The tangent line touches the graph at x = −2, so g(−2) = 3(−2) + 7 = 1. Its slope is the derivative there: g′(−2) = 3.

- (A) uses the y-intercept, the line's height at x = 0.
- (B) swaps the value and the slope.
- (D) The tangent line gives the slope at one point only.

**If you missed this:** [Topic 2.2 study guide](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/).
</details>

## Question 3 (short answer · 2.2)

Let f(x) = 1/(2x − 1).

(a) Use the definition of the derivative to find f′(x).
(b) Write an equation of the line tangent to the graph of f at x = 1.

<details>
<summary>Worked answer</summary>

**(a)** Combine the fractions in f(x + h) − f(x):

1/(2x + 2h − 1) − 1/(2x − 1) = [(2x − 1) − (2x + 2h − 1)] / [(2x + 2h − 1)(2x − 1)] = −2h / [(2x + 2h − 1)(2x − 1)].

Divide by h (h ≠ 0): −2 / [(2x + 2h − 1)(2x − 1)]. Let h → 0: **f′(x) = −2/(2x − 1)²**, for x ≠ 1/2.

**(b)** Point: f(1) = 1/1 = 1. Slope: f′(1) = −2/1 = −2. Tangent line: **y − 1 = −2(x − 1)**, or y = −2x + 3.

**If you missed this:** Worked examples 2 and 3 in the [Topic 2.2 study guide](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/).
</details>

## Question 4 (multiple choice · 2.3)

The height H(t) of a fictional sunflower, in centimetres, is measured t days after the start of an experiment. H is differentiable. The data are invented.

| t (days) | 0 | 5 | 8 | 12 | 20 |
|---|---|---|---|---|---|
| H(t) (cm) | 50 | 62 | 71 | 77 | 81 |

What is the best estimate of H′(10) from the table?

- (A) 1.55 cm per day
- (B) 1.5 cm per day
- (C) 3 cm per day
- (D) 6 cm per day

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use the shortest interval in the table that contains t = 10, which is [8, 12]: (H(12) − H(8))/(12 − 8) = (77 − 71)/4 = 1.5 cm per day.

- (A) uses [0, 20], which is far too wide.
- (C) uses [5, 8], which does not contain t = 10.
- (D) is the change in height, 6 cm, not divided by the 4 days.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/).
</details>

## Question 5 (multiple choice · 2.4)

A function f is **not** continuous at x = 5. Which statement must be true?

- (A) f(5) is undefined.
- (B) lim (x → 5) f(x) does not exist.
- (C) The graph of f has a vertical asymptote at x = 5.
- (D) f′(5) does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Differentiable at 5 would mean continuous at 5. f is not continuous there, so it is not differentiable there.

- (A) and (B) can cause a discontinuity, but neither must happen: f(5) and the limit can both exist and differ.
- (C) A jump or a hole is also a discontinuity.

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/).
</details>

## Question 6 (short answer · 2.4)

Let f(x) = x² + 1 for x ≤ 1, and f(x) = 4√x − 2 for x > 1.

(a) Show that f is continuous at x = 1.
(b) Use one-sided limits of the difference quotient to decide whether f is differentiable at x = 1.
(c) If the second piece were 4√x instead, would f be differentiable at x = 1? Give a reason.

<details>
<summary>Worked answer</summary>

**(a)** f(1) = 1 + 1 = 2. Left-hand limit: 1² + 1 = 2. Right-hand limit: 4√1 − 2 = 2. The limit is 2 = f(1), so **f is continuous at x = 1**.

**(b)** From the left: ((1 + h)² + 1 − 2)/h = (2h + h²)/h = 2 + h → 2.
From the right: (4√(1 + h) − 2 − 2)/h = 4(√(1 + h) − 1)/h. Multiply by the conjugate: 4/(√(1 + h) + 1) → 4/2 = 2.
Both one-sided limits equal 2, so **f is differentiable at x = 1, with f′(1) = 2**.

**(c)** **No.** The right-hand limit would be 4, not f(1) = 2, so f would not be continuous at 1, and so not differentiable there, even though the slopes still match.

**If you missed this:** Worked example 2 in the [Topic 2.4 study guide](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/).
</details>

## Question 7 (multiple choice · 2.5)

Let f(x) = 3/∛x for x > 0. What is f′(8)?

- (A) −1/4
- (B) −1/2
- (C) −1/16
- (D) 36

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Rewrite f(x) = 3x^(−1/3). Then f′(x) = 3 × (−1/3)x^(−4/3) = −x^(−4/3). Since 8^(1/3) = 2, 8^(4/3) = 16, so f′(8) = −1/16.

- (A) subtracts 1/3 instead of 1 from the exponent, giving −x^(−2/3).
- (B) brings the power down but forgets to subtract 1.
- (D) applies the power rule to the denominator alone, as if the derivative of 3/u were 3/u′.

**If you missed this:** [Topic 2.5 study guide](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/).
</details>

## Question 8 (multiple choice · 2.6)

The line tangent to y = x³ − 2x² + kx at x = 2 is parallel to the line y = 7x. What is the constant k?

- (A) −1
- (B) 3
- (C) 7/2
- (D) 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Parallel lines have equal slopes, so dy/dx = 7 at x = 2. Term by term, dy/dx = 3x² − 4x + k. At x = 2: 12 − 8 + k = 7, so k = 3.

- (A) differentiates −2x² as −2x.
- (C) sets the y-value, 8 − 8 + 2k, equal to 7 instead of the slope.
- (D) assumes the slope of kx alone must be 7.

**If you missed this:** [Topic 2.6 study guide](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/).
</details>

## Question 9 (multiple choice · 2.7)

Let f(x) = 4 ln x − x² for x > 0. At which x does the graph of f have a horizontal tangent line?

- (A) x = −√2 and x = √2
- (B) x = 2
- (C) x = e
- (D) x = √2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f′(x) = 4/x − 2x. Set it equal to 0: 4/x = 2x, so x² = 2. Only x = √2 is in the domain x > 0.

- (A) forgets that ln x needs x > 0.
- (B) solves 4/x = 2 instead of 4/x = 2x.
- (C) does not solve f′(x) = 0.

**If you missed this:** [Topic 2.7 study guide](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/).
</details>

## Question 10 (multiple choice · 2.7)

What is lim (x → 4) (ln x − ln 4)/(x − 4)?

- (A) 1/4
- (B) ln 4
- (C) 0
- (D) It does not exist, because substitution gives 0/0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** This is the x-form of the definition, lim (x → a) (f(x) − f(a))/(x − a), with f(x) = ln x and a = 4. Since d/dx ln x = 1/x, the limit is f′(4) = 1/4.

- (B) is f(4), the value, not the slope.
- (C) assumes the top tending to 0 makes the whole fraction 0.
- (D) 0/0 means "find another method", here recognising a derivative.

**If you missed this:** Worked example 3 in the [Topic 2.7 study guide](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/).
</details>

## Question 11 (multiple choice · 2.8)

Let y = √x · eˣ. What is dy/dx at x = 1?

- (A) e/2
- (B) e
- (C) 3e/2
- (D) 2e

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Product rule: dy/dx = (1/(2√x))eˣ + √x·eˣ. At x = 1: e/2 + e = 3e/2.

- (A) multiplies the two derivatives, (1/2) × e.
- (B) keeps only the second term of the product rule.
- (D) uses x^(−1/2) as the derivative of √x, dropping the factor 1/2.

**If you missed this:** [Topic 2.8 study guide](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/).
</details>

## Question 12 (multiple choice · 2.9)

Let f(x) = (cos x)/x for x ≠ 0. What is f′(π/2)?

- (A) 2/π
- (B) −2/π
- (C) −1
- (D) −π/2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Quotient rule: f′(x) = (x(−sin x) − cos x · 1)/x². At x = π/2: (−π/2 − 0)/(π²/4) = −2/π.

- (A) reverses the order of the top: cos x · 1 − x(−sin x).
- (C) divides the derivatives, −sin x / 1.
- (D) forgets to divide by x² = π²/4.

**If you missed this:** [Topic 2.9 study guide](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/).
</details>

## Question 13 (short answer · 2.10)

Let f(x) = sec x + tan x for −π/2 < x < π/2.

(a) Show that f′(x) = sec x (sec x + tan x).
(b) Write an equation of the line tangent to the graph of f at x = 0.
(c) Explain why f′(x) > 0 for every x in the interval. (Hint: write f(x) as one fraction.)

<details>
<summary>Worked answer</summary>

**(a)** d/dx sec x = sec x tan x and d/dx tan x = sec²x. So f′(x) = sec x tan x + sec²x = **sec x (tan x + sec x)**.

**(b)** f(0) = 1 + 0 = 1 and f′(0) = 1 × (0 + 1) = 1. Tangent line: **y = x + 1**.

**(c)** On (−π/2, π/2), cos x > 0, so sec x > 0. Also sec x + tan x = (1 + sin x)/cos x, and sin x > −1 here, so this factor is positive too. A product of two positive factors is **positive**.

**If you missed this:** [Topic 2.10 study guide](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 2.1 Average and instantaneous rates | 1 | [Guide 2.1](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/) |
| 2.2 Derivative function, notation, tangent lines | 2, 3 | [Guide 2.2](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/) |
| 2.3 Estimating derivatives | 4 | [Guide 2.3](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/) |
| 2.4 Differentiability and continuity | 5, 6 | [Guide 2.4](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/) |
| 2.5 Power rule | 7 | [Guide 2.5](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/) |
| 2.6 Constant, sum, difference rules | 8 | [Guide 2.6](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/) |
| 2.7 sin x, cos x, eˣ, ln x | 9, 10 | [Guide 2.7](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/) |
| 2.8 Product rule | 11 | [Guide 2.8](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/) |
| 2.9 Quotient rule | 12 | [Guide 2.9](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/) |
| 2.10 tan, cot, sec, csc | 13 | [Guide 2.10](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 2.1, 2.2 and 2.5 first**; every later rule builds on them.
- **For a gap**, read the guide, then the practice set.
- **Then try the [Unit 2 mixed review](/advanced-course-resources/calculus-ab/unit-2-review/)**, where each question combines topics.
