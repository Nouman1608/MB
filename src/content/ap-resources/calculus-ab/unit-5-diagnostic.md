---
resourceId: "mb-ap-calcab-u5-diagnostic"
title: "Analytical Applications of Differentiation: Unit Diagnostic (Calculus AB Unit 5)"
description: "Twelve short original questions, one per topic of Analytical Applications of Differentiation, to show which topics you should revisit, with explanations and links."
course: "calculus-ab"
unit: 5
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiation rules from Units 2 and 3, including the derivatives of ln x, eˣ and arctan x"
  - "Solving polynomial equations and reading a sign chart"
learningObjectives:
  - "Find out which Unit 5 topics are secure and which need more work"
  - "Check theorem, sign chart, extrema, concavity and optimization skills quickly"
  - "Practise short written justifications for relative and absolute extrema"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave π, e, ln 2 and surds in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcab-u5-review", "mb-ap-calcab-5.4-study-guide", "mb-ap-calcab-5.5-study-guide", "mb-ap-calcab-5.9-study-guide", "mb-ap-calcab-5.11-study-guide"]
next: "mb-ap-calcab-u5-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 5, to decide which of the 12 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
  - "Shared diagnostic for Calculus AB and Calculus BC students; every question applies to both courses."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 5, Analytical Applications of Differentiation, to revisit. There is one question per topic. These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are invented. The questions are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening any answer, and give a reason for every conclusion. The unit is shared by Calculus AB and Calculus BC, and there are no BC-only questions: every question is for both courses.

## Question 1 (multiple choice · 5.1)

A function f is differentiable for all real x, with f(2) = 7 and f(6) = −1. Which statement **must** be true?

- (A) f′(c) = 0 for some c in (2, 6).
- (B) f′(4) = −2.
- (C) f′(c) = −2 for some c in (2, 6).
- (D) f′(c) = 3 for some c in (2, 6).

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f is differentiable, so both conditions hold on [2, 6]. The average rate is (−1 − 7)/(6 − 2) = −2, so by the Mean Value Theorem f′(c) = −2 for some c in (2, 6).

- (A) would need f(2) = f(6).
- (B) assumes c is the midpoint.
- (D) averages the two outputs instead of finding the secant slope.

**If you missed this:** [Topic 5.1 study guide](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/).
</details>

## Question 2 (multiple choice · 5.2)

Which is the complete list of critical points of f(x) = x² − 8 ln x?

- (A) x = 2 only
- (B) x = −2 and x = 2
- (C) x = 0 and x = 2
- (D) x = −2, x = 0 and x = 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = 2x − 8/x = 2(x − 2)(x + 2)/x. A critical point must be in the domain of f, which is x > 0. So only x = 2 counts.

- (B) keeps x = −2, where ln x is undefined.
- (C) and (D) count x = 0, where f itself does not exist.

**If you missed this:** [Topic 5.2 study guide](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/).
</details>

## Question 3 (multiple choice · 5.3)

Let f(x) = ln(x² + 1) − x. Which statement is true?

- (A) f is increasing on (−∞, 1) and decreasing on (1, ∞).
- (B) f is decreasing on (−∞, 1) and increasing on (1, ∞).
- (C) f is increasing on (0, ∞).
- (D) f is decreasing on (−∞, ∞).

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f′(x) = 2x/(x² + 1) − 1 = −(x − 1)²/(x² + 1), which is negative for every x except x = 1. A single zero with the same sign on both sides does not end an interval of decrease.

- (A) and (B) assume f′ changes sign at x = 1. A squared factor does not.
- (C) forgets the − 1: 2x/(x² + 1) alone is positive for x > 0.

**If you missed this:** [Topic 5.3 study guide](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/).
</details>

## Question 4 (short answer · 5.4)

Let f(x) = x − 4 arctan x.

(a) Show that f′(x) = (x² − 3)/(x² + 1) and find the critical points of f.
(b) Classify each critical point using the First Derivative Test. Justify.
(c) Find the exact relative maximum value of f.

<details>
<summary>Worked answer</summary>

**(a)** f′(x) = 1 − 4/(1 + x²) = **(x² − 3)/(x² + 1)**. The bottom is never 0, so the critical points are where x² = 3: **x = −√3 and x = √3**.

**(b)** f′(−2) = 1/5 > 0, f′(0) = −3 < 0, f′(2) = 1/5 > 0. f′ changes from positive to negative at x = −√3: **relative maximum**. f′ changes from negative to positive at x = √3: **relative minimum**.

**(c)** f(−√3) = −√3 − 4(−π/3) = **4π/3 − √3** (about 2.46). Substitute into f, not f′.

**If you missed this:** [Topic 5.4 study guide](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/).
</details>

## Question 5 (multiple choice · 5.5)

What are the absolute maximum and absolute minimum values of f(x) = x − 2√x on [0, 9]?

- (A) Maximum 3, at x = 9; minimum 0, at x = 0
- (B) Maximum 3, at x = 9; minimum −1, at x = 1
- (C) Maximum 0, at x = 0; minimum −1, at x = 1
- (D) There is no absolute maximum, because f′(0) does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f is continuous on [0, 9], so the Candidates Test applies. f′(x) = 1 − 1/√x = 0 at x = 1. Candidates: f(0) = 0, f(1) = −1, f(9) = 3.

- (A) misses x = 1.
- (C) misses the right endpoint.
- (D) The Extreme Value Theorem needs continuity, not differentiability.

**If you missed this:** [Topic 5.5 study guide](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/).
</details>

## Question 6 (multiple choice · 5.6)

Let f(x) = xeˣ. Which statement about the graph of f is true?

- (A) Concave up on (−1, ∞); point of inflection at x = −1
- (B) Concave up for all x, because eˣ > 0
- (C) Concave up on (−2, ∞); point of inflection at x = −2
- (D) Concave down on (−2, ∞); point of inflection at x = −2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f′(x) = (x + 1)eˣ and f″(x) = (x + 2)eˣ, which has the sign of x + 2. f″ changes from negative to positive at x = −2.

- (A) uses the zero of f′, a critical point.
- (B) ignores the factor x + 2.
- (D) reverses the sign of f″.

**If you missed this:** [Topic 5.6 study guide](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/).
</details>

## Question 7 (multiple choice · 5.7)

Let f(x) = eˣ − 2x for all real x. Which statement is true?

- (A) f has a relative maximum at x = ln 2, because f′(ln 2) = 0.
- (B) f has a relative minimum at x = ln 2, but with no closed interval there is no absolute minimum.
- (C) The absolute minimum value of f is e² − 4, at x = 2.
- (D) The absolute minimum value of f is 2 − 2 ln 2, at x = ln 2.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f′(x) = eˣ − 2 = 0 only at x = ln 2, and f″(ln 2) = 2 > 0: a relative minimum. It is the only critical point of a continuous function, so it is the absolute minimum.

- (A) f′ = 0 only marks a candidate; the sign of f″ decides.
- (B) The one-critical-point rule works on open intervals too.
- (C) solves eˣ = 2 as x = 2.

**If you missed this:** [Topic 5.7 study guide](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/).
</details>

## Question 8 (multiple choice · 5.8)

You are sketching f(x) = x⁴ − 6x². Which gives the x-coordinates of every relative extremum and point of inflection?

- (A) Minimums at ±√3; maximum at 0; inflection at 0 only
- (B) Minimums at ±√3; maximum at 0; inflection at ±1
- (C) Minimums at ±1; maximum at 0; inflection at ±√3
- (D) Minimums at ±√3; no maximum; inflection at ±1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 4x(x² − 3) has signs −, +, −, + across −√3, 0, √3: minimums at ±√3 (value −9), maximum at 0 (value 0). f″(x) = 12(x² − 1) changes sign at ±1 (value −5).

- (A) guesses the centre of symmetry; f″(0) = −12.
- (C) swaps the zeros of f′ and f″.
- (D) misses the sign change of f′ at 0.

**If you missed this:** [Topic 5.8 study guide](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/).
</details>

## Question 9 (multiple choice · 5.9)

f is twice differentiable on (0, 6). The graph of f′ rises on (0, 2), falls on (2, 6), and crosses the x-axis only at x = 5, from above to below. Which statement must be true?

- (A) f has a point of inflection at x = 2 and a relative maximum at x = 5.
- (B) f has a relative maximum at x = 2 and a point of inflection at x = 5.
- (C) f is decreasing on (2, 6).
- (D) f has a relative minimum at x = 5.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′ changes from increasing to decreasing at x = 2, so f changes from concave up to concave down. f′ changes from positive to negative at x = 5: a relative maximum.

- (B) swaps the roles. A peak of f′ is about concavity of f.
- (C) confuses "f′ decreasing" with "f′ negative". f′ > 0 on (2, 5).
- (D) reverses the First Derivative Test.

**If you missed this:** [Topic 5.9 study guide](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/).
</details>

## Question 10 (multiple choice · 5.10)

At a ticket price of p dollars, a fictional concert hall sells N(p) = 900 − 30p tickets, for 10 ≤ p ≤ 30. Which price gives the greatest revenue?

- (A) $30
- (B) $10
- (C) $15
- (D) $6,750

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** R(p) = p(900 − 30p), so R′(p) = 900 − 60p = 0 at p = 15. Candidates: R(10) = 6,000, R(15) = 6,750, R(30) = 0.

- (A) solves N(p) = 0 instead of R′(p) = 0.
- (B) gives the most tickets, not the most revenue.
- (D) is the greatest revenue, not the price.

**If you missed this:** [Topic 5.10 study guide](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/).
</details>

## Question 11 (short answer · 5.11)

A fictional print studio can make between 1 and 200 figurines a day. Making x figurines costs C(x) = 0.02x² + 3x + 288 dollars, so the average cost per figurine is A(x) = C(x)/x = 0.02x + 3 + 288/x.

(a) Find the number of figurines that minimises the average cost on [1, 200]. Justify that it gives the absolute minimum.
(b) Find the minimum average cost and interpret it in context.
(c) A manager says making 200 a day is cheapest per figurine, because the fixed $288 is spread more thinly. Respond.

<details>
<summary>Worked answer</summary>

**(a)** A′(x) = 0.02 − 288/x² = 0 gives x = 120 in the interval. A is continuous on [1, 200]; candidates: A(1) = 291.02, A(120) = 7.80, A(200) = 8.44. The smallest is at **x = 120**.

**(b)** The lowest possible average cost is **$7.80 per figurine**, when the studio makes 120 figurines a day.

**(c)** Wrong. A′(x) > 0 on (120, 200), so past 120 the average cost rises: it is $8.44 at 200.

**If you missed this:** [Topic 5.11 study guide](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/).
</details>

## Question 12 (multiple choice · 5.12)

The curve eʸ + y = x² − 2x + 2 passes through (1, 0) and defines y as a differentiable function of x. Which statement is true at (1, 0)?

- (A) dy/dx = 0 and d²y/dx² = −1, so y has a relative maximum at x = 1.
- (B) dy/dx = 0 and d²y/dx² = 1, so y has a relative minimum at x = 1.
- (C) dy/dx = 0 and d²y/dx² = 2, so y has a relative minimum at x = 1.
- (D) dy/dx does not exist, so (1, 0) is not a critical point.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** (eʸ + 1)y′ = 2x − 2, so y′ = 0 at (1, 0). Differentiate again: eʸ(y′)² + (eʸ + 1)y″ = 2. At (1, 0): 2y″ = 2, so y″ = 1 > 0.

- (A) gets the sign of y″ wrong, which reverses the conclusion.
- (C) forgets to divide by eʸ + 1 = 2.
- (D) eʸ + 1 is never 0, so dy/dx always exists.

**If you missed this:** [Topic 5.12 study guide](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 5.1 Mean Value Theorem | 1 | [Guide 5.1](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/) |
| 5.2 Critical points | 2 | [Guide 5.2](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/) |
| 5.3 Increasing and decreasing | 3 | [Guide 5.3](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/) |
| 5.4 First Derivative Test | 4 | [Guide 5.4](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/) |
| 5.5 Candidates Test | 5 | [Guide 5.5](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/) |
| 5.6 Concavity | 6 | [Guide 5.6](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/) |
| 5.7 Second derivative test | 7 | [Guide 5.7](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/) |
| 5.8 Sketching graphs | 8 | [Guide 5.8](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/) |
| 5.9 Connecting f, f′ and f″ | 9 | [Guide 5.9](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/) |
| 5.10 Optimization set-up | 10 | [Guide 5.10](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/) |
| 5.11 Optimization in context | 11 | [Guide 5.11](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/) |
| 5.12 Implicit relations | 12 | [Guide 5.12](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 5.2 and 5.3 first.** Critical points and sign charts are the first step of every later topic in the unit.
- **Check your written answers** to Questions 4 and 11: did you give a reason, not just a number?
- **For a gap**, read the guide, then do its practice set.
- **Then try the [Unit 5 mixed review](/advanced-course-resources/calculus-ab/unit-5-review/)**, where each question combines topics.
