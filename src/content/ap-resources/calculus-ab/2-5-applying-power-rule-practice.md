---
resourceId: "mb-ap-calcab-2.5-practice"
title: "Applying the Power Rule: Practice Questions (Calculus AB 2.5)"
description: "Seven original Marlbridge practice questions on the power rule with negative and fractional exponents, tangent lines and undefined derivatives, with full solutions and rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Laws of exponents, including negative and fractional exponents"
  - "The limit definition of the derivative"
prerequisiteResources: ["mb-ap-calcab-2.5-study-guide"]
learningObjectives:
  - "Apply the power rule to whole-number, negative and fractional exponents"
  - "Rewrite roots, reciprocals and combined powers as a single power of x"
  - "Use derivatives to find slopes and tangent lines"
  - "Confirm a power-rule result with the limit definition and explain where a derivative fails to exist"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions and roots, not decimals)."
related: ["mb-ap-calcab-2.5-study-guide", "mb-ap-calcab-2.5-revision-notes", "mb-ap-calcab-2.5-checklist"]
next: "mb-ap-calcab-2.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and exact answers unless stated. Notation: f′(x), dy/dx and d/dx[…] all mean the derivative with respect to x; fractional exponents are written in brackets, e.g. x^(3/4). This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is d/dx[1/x⁵]?

- (A) −5/x⁶
- (B) −5/x⁴
- (C) 1/(5x⁴)
- (D) 5/x⁶

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Rewrite 1/x⁵ as x⁻⁵. Bring down −5 and lower the exponent by 1: −5 − 1 = −6. So the derivative is −5x⁻⁶ = −5/x⁶.

- (B) lowers the exponent the wrong way: it treats −5 − 1 as −4.
- (C) differentiates only the denominator, x⁵ → 5x⁴, and keeps it in the denominator. A reciprocal must be rewritten as a negative power first.
- (D) loses the minus sign that comes down with the exponent −5. The function 1/x⁵ is decreasing for x > 0, so its derivative there must be negative.
</details>

## Question 2 (multiple choice · core)

Let f(x) = ∜(x³), the fourth root of x³, for x > 0. What is f′(16)?

- (A) 3/8
- (B) 3/2
- (C) 96
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Rewrite: f(x) = x^(3/4). New exponent: 3/4 − 1 = −1/4. So f′(x) = (3/4)x^(−1/4). Since 16^(1/4) = 2, 16^(−1/4) = 1/2. So f′(16) = (3/4)(1/2) = 3/8.

- (B) uses exponent +1/4 instead of −1/4: (3/4)·16^(1/4) = (3/4)(2) = 3/2. That is a sign slip in 3/4 − 1.
- (C) adds 1 to the exponent instead of subtracting it: (3/4)·16^(7/4) = (3/4)(128) = 96.
- (D) is f(16) = 16^(3/4) = 8, the value of the function, not its derivative.
</details>

## Question 3 (multiple choice · core)

Which function has derivative −(1/2)x^(−3/2) for x > 0?

- (A) √x
- (B) 1/√x
- (C) −1/√x
- (D) 1/x^(3/2)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 1/√x = x^(−1/2). The power rule gives (−1/2)x^(−1/2 − 1) = −(1/2)x^(−3/2). This matches.

- (A) √x = x^(1/2) has derivative (1/2)x^(−1/2): wrong sign and wrong exponent.
- (C) −1/√x = −x^(−1/2) has derivative +(1/2)x^(−3/2). The two minus signs cancel.
- (D) x^(−3/2) has derivative −(3/2)x^(−5/2). This option copies the exponent of the target answer instead of working backwards from it.
</details>

## Question 4 (multiple choice · core)

At which x-values does the graph of y = x³ have a tangent line with slope 12?

- (A) x = 2 only
- (B) x = −2 and x = 2
- (C) x = ∛12 only
- (D) x = 4 only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slope of the tangent line is dy/dx = 3x². Set 3x² = 12, so x² = 4 and x = ±2. The points are (2, 8) and (−2, −8); the tangent at each has slope 12.

- (A) forgets the negative square root. 3(−2)² = 12 as well.
- (C) sets the function, x³, equal to 12 instead of the derivative.
- (D) uses 3x as the derivative (bringing the 3 down but not keeping x²), then solves 3x = 12.
</details>

## Question 5 (constructed response · core)

Let f(x) = 1/x².

(a) Use the definition f′(x) = lim (h → 0) [f(x + h) − f(x)]/h to find f′(x). Show the algebra.
(b) Confirm your answer with the power rule.
(c) Explain why f′(0) does not exist.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Combine the fractions on top over the common denominator x²(x + h)²:

1/(x + h)² − 1/x² = [x² − (x + h)²] / [x²(x + h)²] = (−2xh − h²) / [x²(x + h)²].

Divide by h and cancel h (allowed, since h ≠ 0 inside the limit):

[f(x + h) − f(x)]/h = (−2x − h) / [x²(x + h)²].

Now let h → 0: f′(x) = −2x / (x²·x²) = −2x/x⁴ = **−2/x³**.

**(b)** f(x) = x⁻². Power rule: f′(x) = −2x⁻³ = −2/x³. The two methods agree.

**(c)** 0 is not in the domain of f, because 1/0² is undefined. A function cannot be differentiable at a point where it is not even defined (differentiable implies continuous, Topic 2.4). The formula −2/x³ also has a zero denominator at x = 0.

| Point | What earns it |
|---|---|
| 1 | Correct difference quotient with the fractions combined over a common denominator |
| 1 | Expands and cancels h correctly to reach (−2x − h)/[x²(x + h)²] or equivalent |
| 1 | Takes the limit, keeping "lim" until h is replaced, to get −2/x³ |
| 1 | Rewrites as x⁻² and applies the power rule correctly |
| 1 | Explains that 0 is not in the domain of f, so f is not continuous (and so not differentiable) there |

A table of difference quotients alone earns no marks for (a), because the question asks for the definition.
</details>

## Question 6 (constructed response · core)

Rewrite each function as a single power of x, then find its derivative. Assume x > 0.

(a) g(x) = x³·∛x
(b) k(x) = 1/(x²√x)
(c) m(x) = (x⁴)³ / x⁵
(d) A student writes: "The derivative of x³·∛x is 3x² · (1/3)x^(−2/3) = x^(4/3)." Show that the student's answer is wrong at x = 8, and explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x³·x^(1/3) = x^(10/3). Derivative: **(10/3)x^(7/3)**.

**(b)** x²·x^(1/2) = x^(5/2), so k(x) = x^(−5/2). New exponent: −5/2 − 1 = −7/2. Derivative: **−(5/2)x^(−7/2)**.

**(c)** (x⁴)³ = x¹², and x¹²/x⁵ = x⁷. Derivative: **7x⁶**.

**(d)** At x = 8 the correct derivative is (10/3)·8^(7/3) = (10/3)(128) = 1280/3. The student's formula gives 8^(4/3) = 16. These differ, so the student is wrong. The error: the student differentiated each factor and multiplied the results. The derivative of a product is not the product of the derivatives. Combine the powers first (as in (a)), or use the product rule from Topic 2.8.

| Point | What earns it |
|---|---|
| 1 | (a) x^(10/3) and derivative (10/3)x^(7/3) |
| 1 | (b) x^(−5/2) and derivative −(5/2)x^(−7/2), with the exponent lowered correctly |
| 1 | (c) x⁷ and derivative 7x⁶ |
| 1 | (d) Shows the two values at x = 8 differ (1280/3 and 16) **and** names the error: multiplying derivatives of factors |

Accept equivalent forms, e.g. −5/(2x^(7/2)) in (b).
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x^(2/3), defined for all real x as the square of the cube root of x.

(a) Find f′(x) for x ≠ 0.
(b) Find the equation of the tangent line to the graph at x = 8.
(c) Find the point on the graph where the tangent line has slope −1/3.
(d) Using the definition of the derivative, explain whether f is differentiable at x = 0, and describe the graph there.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** New exponent: 2/3 − 1 = −1/3. So f′(x) = (2/3)x^(−1/3) = **2/(3∛x)**, for x ≠ 0.

**(b)** f(8) = (∛8)² = 2² = 4. f′(8) = 2/(3·2) = 1/3. Tangent: y − 4 = (1/3)(x − 8), or **y = x/3 + 4/3**.

**(c)** Solve 2/(3∛x) = −1/3. Cross-multiply: 6 = −3∛x, so ∛x = −2 and x = −8. Then f(−8) = (−2)² = 4. The point is **(−8, 4)**. (By symmetry, the graph is the mirror image of the right-hand side, so the slope there is the negative of f′(8).)

**(d)** f(0) = 0, so the difference quotient at 0 is f(h)/h = h^(2/3)/h = 1/∛h for h ≠ 0. As h → 0⁺ this tends to +∞; as h → 0⁻ it tends to −∞. The limit does not exist, so **f is not differentiable at 0**. f is continuous at 0, though, so the graph has a **cusp**: a sharp point at the origin where both sides become vertical, pointing downward.

| Point | What earns it |
|---|---|
| 1 | f′(x) = (2/3)x^(−1/3) |
| 1 | f(8) = 4 and f′(8) = 1/3 |
| 1 | Correct tangent line equation |
| 1 | x = −8 found from f′(x) = −1/3, with point (−8, 4) |
| 1 | Difference quotient 1/∛h with the two one-sided limits (+∞ and −∞) |
| 1 | Concludes not differentiable at 0, describes a cusp, and notes f is continuous there |

Pointing to the zero denominator in f′(x) at x = 0 is acceptable supporting evidence for (d), but the full mark needs the definition, as the question asks.
</details>

## How did you do?

- **Q1 or Q6(b) wrong:** revisit "Subtracting 1 from a negative or fractional exponent" in the [study guide](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/).
- **Q2, Q3 or Q6 wrong:** redo Worked example 1 and the "Rewrite before you differentiate" table.
- **Q4 or Q7(b)–(c) wrong:** redo Worked example 2 (tangent lines) and remember the slope is the derivative, not the function value.
- **Q5 or Q7(d) wrong:** reread "Building the pattern from the definition" and "When the power rule gives 'undefined'".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-checklist/).
