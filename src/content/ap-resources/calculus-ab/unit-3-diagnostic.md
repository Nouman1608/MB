---
resourceId: "mb-ap-calcab-u3-diagnostic"
title: "Differentiation: Composite, Implicit, and Inverse Functions: Unit Diagnostic (Calculus AB Unit 3)"
description: "Ten short original questions, one or two per topic of composite, implicit and inverse differentiation, to show which topics to revisit, with explanations and links."
course: "calculus-ab"
unit: 3
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative rules from Unit 2: power, product, quotient, trig, eˣ and ln x"
  - "Exact values of sin, cos and tan at π/6, π/4 and π/3"
learningObjectives:
  - "Find out which Unit 3 topics are secure and which need more work"
  - "Check the chain rule, implicit differentiation and inverse derivatives quickly from formulas and given values"
  - "Practise short written methods for tangent lines and higher derivatives"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Angles are in radians and every answer is exact."
related: ["mb-ap-calcab-u3-review", "mb-ap-calcab-3.1-study-guide", "mb-ap-calcab-3.2-study-guide", "mb-ap-calcab-3.3-study-guide", "mb-ap-calcab-3.5-study-guide"]
next: "mb-ap-calcab-u3-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 3, to decide which of the six topics to revisit first."
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

**What this is for.** Use this diagnostic to find which topics of Unit 3, Differentiation: Composite, Implicit, and Inverse Functions, to revisit. There is at least one question per topic, and two each for Topics 3.1, 3.2, 3.5 and 3.6. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Angles are in radians, and every answer is exact. Answer everything before opening any answer. f⁻¹ means the inverse function, not 1/f. The unit is shared by Calculus AB and Calculus BC, and **no question here is BC only**: all six topics are examined in both courses.

## Question 1 (multiple choice · 3.1)

Let f(x) = √(1 + e^(2x)). What is f′(0)?

- (A) 1/(2√2)
- (B) 1/√2
- (C) √2
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Three layers: square root, then 1 + e^(2x), then 2x. f′(x) = 1/(2√(1 + e^(2x))) · e^(2x) · 2 = e^(2x)/√(1 + e^(2x)). At x = 0: 1/√2.

- (A) drops the factor 2 from the innermost layer 2x.
- (C) drops the 1/2 from the square root. (It also happens to equal f(0).)
- (D) is only the derivative of the inside, 2e^(2x), at x = 0.

**If you missed this:** "More than two layers" in the [Topic 3.1 study guide](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/).
</details>

## Question 2 (multiple choice · 3.1)

A differentiable function f has f′(2) = 4 and f′(5) = −2. Let h(x) = f(3x − 1). What is h′(2)?

- (A) −6
- (B) −2
- (C) 12
- (D) −10

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** h′(x) = f′(3x − 1) · 3. At x = 2 the inside is 3(2) − 1 = 5, so h′(2) = f′(5) × 3 = −6.

- (B) forgets to multiply by the derivative of the inside, 3.
- (C) evaluates f′ at x = 2 instead of at the inside value 5.
- (D) multiplies by the inside, 5, instead of by its derivative.

**If you missed this:** the table example in the [Topic 3.1 study guide](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/). Find the inside value first.
</details>

## Question 3 (multiple choice · 3.2)

The point (2, 1) lies on the curve x³ + xy² = 10. What is dy/dx at (2, 1)?

- (A) −13/4
- (B) −3
- (C) −13/2
- (D) −4/13

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate both sides. The term xy² needs the product rule and then the chain rule on y²:

3x² + y² + 2xy · dy/dx = 0, so dy/dx = −(3x² + y²)/(2xy).

At (2, 1): −(12 + 1)/4 = −13/4.

- (B) loses the y² term from the product rule: −12/4.
- (C) loses the factor x in 2xy · dy/dx, dividing by 2y = 2 instead of 2xy = 4.
- (D) is the reciprocal, from dividing the wrong way.

**If you missed this:** the table of terms under "The key idea" in the [Topic 3.2 study guide](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/).
</details>

## Question 4 (short answer · 3.2)

Consider the curve x·e^y + y = 2.

(a) Show that (2, 0) is on the curve, and find the tangent line there.
(b) Find the exact coordinates of the point on the curve where the tangent line is vertical.

<details>
<summary>Worked answer</summary>

**(a)** 2 × e⁰ + 0 = 2. ✓ Differentiate, with the product rule on x·e^y and the chain rule on e^y:

e^y + x·e^y · dy/dx + dy/dx = 0, so dy/dx = −e^y/(x·e^y + 1).

At (2, 0): dy/dx = −1/(2 + 1) = −1/3. Tangent line: **y = −(1/3)(x − 2)**.

**(b)** Vertical means the denominator is 0: x·e^y + 1 = 0, so x·e^y = −1. Substitute into the curve: −1 + y = 2, so y = 3 and x = −e^(−3). The numerator −e³ is not 0. The point is **(−e^(−3), 3)**.

**If you missed this:** "Horizontal and vertical tangent lines" in the [Topic 3.2 study guide](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/). Always combine the condition with the curve's equation.
</details>

## Question 5 (multiple choice · 3.3)

A function f is differentiable and one-to-one, with f(1) = 4, f(4) = 1, f′(1) = −5 and f′(4) = −2/3. What is the derivative of f⁻¹ at x = 1?

- (A) −1/5
- (B) −3/2
- (C) 3/2
- (D) −2/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The input of f that gives 1 is 4, since f(4) = 1. So (f⁻¹)′(1) = 1/f′(4) = 1/(−2/3) = −3/2.

- (A) is 1/f′(1). It uses x = 1 as an input of f, but 1 is an output of f.
- (C) changes the sign. Reflecting in y = x keeps the sign of a slope.
- (D) forgets the reciprocal.

**If you missed this:** the three-step method in the [Topic 3.3 study guide](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/).
</details>

## Question 6 (multiple choice · 3.4)

What is the slope of the graph of y = arcsin(3x) at the point where y = π/6?

- (A) 2/√3
- (B) 2√3
- (C) −2√3
- (D) 12/5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** First find x: arcsin(3x) = π/6 means 3x = sin(π/6) = 1/2, so x = 1/6. Then dy/dx = 3/√(1 − 9x²). At x = 1/6: 3/√(3/4) = 3 × 2/√3 = 2√3.

- (A) forgets the chain-rule factor 3.
- (C) uses the arccos formula, which has a minus sign.
- (D) uses the arctan formula, 3/(1 + 9x²).

**If you missed this:** "Using the chain rule" in the [Topic 3.4 study guide](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/).
</details>

## Question 7 (multiple choice · 3.5)

What is lim (h → 0) [arctan(1 + h) − π/4]/h?

- (A) 0
- (B) 1/2
- (C) π/4
- (D) It does not exist, because h = 0 gives 0/0.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Since arctan 1 = π/4, this is the definition of the derivative of arctan x at x = 1. So it equals 1/(1 + 1²) = 1/2.

- (A) treats 0/0 as 0.
- (C) is arctan 1, the value of the function, not its derivative.
- (D) 0/0 means "find another procedure", not "no limit".

**If you missed this:** "A limit that is a derivative in disguise" in the [Topic 3.5 study guide](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/).
</details>

## Question 8 (short answer · 3.5)

Let k(x) = x² · arctan(√x) for x > 0.

(a) What is the last operation in k(x)? Name every rule you need, in order.
(b) Find k′(1).

<details>
<summary>Worked answer</summary>

**(a)** The last operation is a **product**, so start with the product rule. The second factor is a composite (arctan of √x), so it needs the arctan formula with the chain rule. The derivative of √x = x^(1/2) uses the power rule.

**(b)** k′(x) = 2x · arctan(√x) + x² · [1/(1 + x)] · [1/(2√x)].

At x = 1: 2 × π/4 + 1 × (1/2) × (1/2) = **π/2 + 1/4**.

**If you missed this:** "Step 2: find the last operation" in the [Topic 3.5 study guide](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/).
</details>

## Question 9 (multiple choice · 3.6)

Let f(x) = (2x + 1)⁵. What is f‴(0)?

- (A) 60
- (B) 120
- (C) 480
- (D) 80

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each derivative multiplies by the chain factor 2. f′(x) = 10(2x + 1)⁴, f″(x) = 80(2x + 1)³, f‴(x) = 480(2x + 1)². At x = 0: 480.

- (A) is 5 × 4 × 3, with no chain factors at all.
- (B) includes the factor 2 only once.
- (D) is f″(0): it stops one derivative early.

**If you missed this:** "Patterns in higher derivatives" in the [Topic 3.6 study guide](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/).
</details>

## Question 10 (short answer · 3.6)

Let y = e^(kx), where k is a constant.

(a) Find dy/dx and d²y/dx².
(b) Find every value of k for which d²y/dx² − dy/dx − 6y = 0 for all x.
(c) For each value of k from (b), find d³y/dx³ at x = 0.

<details>
<summary>Worked answer</summary>

**(a)** dy/dx = k·e^(kx) and d²y/dx² = k²·e^(kx).

**(b)** Substitute: (k² − k − 6)e^(kx) = 0. Since e^(kx) is never 0, k² − k − 6 = 0, so (k − 3)(k + 2) = 0: **k = 3 or k = −2**.

**(c)** d³y/dx³ = k³·e^(kx), which is k³ at x = 0: **27** for k = 3 and **−8** for k = −2.

**If you missed this:** the notation table and "Exponentials repeat with a factor" in the [Topic 3.6 study guide](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 3.1 The chain rule | 1, 2 | [Guide 3.1](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/) |
| 3.2 Implicit differentiation | 3, 4 | [Guide 3.2](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/) |
| 3.3 Inverse functions | 5 | [Guide 3.3](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/) |
| 3.4 Inverse trig functions | 6 | [Guide 3.4](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/) |
| 3.5 Selecting procedures | 7, 8 | [Guide 3.5](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/) |
| 3.6 Higher-order derivatives | 9, 10 | [Guide 3.6](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix a gap in Topic 3.1 first.** Every other topic in the unit uses the chain rule, so a slip there spreads.
- **For a gap**, read the guide, then do the topic's practice set.
- **For a shaky topic**, look at which wrong option you chose. Each explanation names the slip behind it.
- **Then try the [Unit 3 mixed review](/advanced-course-resources/calculus-ab/unit-3-review/)**, where each question combines topics.
