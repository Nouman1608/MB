---
resourceId: "mb-ap-calcab-4.7-practice"
title: "Using L'Hospital's Rule for Determining Limits of Indeterminate Forms: Practice Questions (Calculus AB 4.7)"
description: "Seven original Marlbridge practice questions on L'Hospital's Rule for 0/0 and ∞/∞ limits, with written checks, full solutions and suggested rubrics."
course: "calculus-ab"
unit: 4
topics: ["4.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of eˣ, ln x, sin x and cos x, and the chain rule"
prerequisiteResources: ["mb-ap-calcab-4.7-study-guide"]
learningObjectives:
  - "Check and state that a limit has the form 0/0 or ∞/∞ before using L'Hospital's Rule"
  - "Evaluate limits with the rule, applying it more than once when needed"
  - "Recognise limits where the rule does not apply"
  - "Use the rule with tables of values and in a modelling context"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers unless a question asks for a numerical check."
related: ["mb-ap-calcab-4.7-study-guide", "mb-ap-calcab-4.7-revision-notes", "mb-ap-calcab-4.7-checklist"]
next: "mb-ap-calcab-4.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)". The model in Question 5 is invented for practice. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is lim (x → 0) (sin 6x)/(e^(2x) − 1)?

- (A) 0
- (B) 1/3
- (C) 1
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Check: lim (x → 0) sin 6x = 0 and lim (x → 0) (e^(2x) − 1) = 0, so the form is 0/0 and L'Hospital's Rule applies. Differentiate top and bottom separately: lim (x → 0) 6 cos 6x/(2e^(2x)) = 6/2 = 3.

- (A) treats the label 0/0 as if it were the number 0.
- (B) is the ratio upside down, g′(0)/f′(0) = 2/6. The derivative of the top goes on top.
- (C) forgets the chain rule on both parts, using cos 6x and e^(2x), which gives 1/1 = 1.
</details>

## Question 2 (multiple choice · core)

The functions f and g have continuous derivatives. The table gives some of their values.

| x | f(x) | g(x) | f′(x) | g′(x) |
|---|---|---|---|---|
| 3 | 0 | 0 | 4 | −6 |

What is lim (x → 3) f(x)/g(x)?

- (A) −2/3
- (B) −3/2
- (C) 0
- (D) It cannot be determined from the table.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f and g are differentiable, so they are continuous, and lim (x → 3) f(x) = f(3) = 0 and lim (x → 3) g(x) = g(3) = 0. The form is 0/0, so L'Hospital's Rule applies: lim (x → 3) f(x)/g(x) = lim (x → 3) f′(x)/g′(x). Because f′ and g′ are continuous and g′(3) ≠ 0, this equals f′(3)/g′(3) = 4/(−6) = −2/3.

- (B) puts g′ over f′.
- (C) treats f(3)/g(3) = 0/0 as the value 0.
- (D) misses that the derivative values are enough once the 0/0 form is confirmed.
</details>

## Question 3 (multiple choice · core)

To which of these limits can L'Hospital's Rule be applied directly?

- (A) lim (x → 0) (cos x)/x
- (B) lim (x → 1) (ln x)/(x² − 1)
- (C) lim (x → ∞) e^(−x)/x
- (D) lim (x → 0) (x + 1)/eˣ

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At x = 1, ln 1 = 0 and 1² − 1 = 0, so the form is 0/0. (The rule then gives lim (x → 1) (1/x)/(2x) = 1/2.)

- (A) The top tends to cos 0 = 1, not 0. This is nonzero/0, so the expression is unbounded near 0. It is not indeterminate.
- (C) The top tends to 0 and the bottom to ∞. A form 0/∞ is not indeterminate: the limit is 0.
- (D) Substitution gives 1/1 = 1. The limit is simply 1.
</details>

## Question 4 (multiple choice · core)

What is lim (x → 0) (1 − cos 3x)/x²?

- (A) 0
- (B) 3/2
- (C) 9/2
- (D) −9/2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Check: 1 − cos 0 = 0 and 0² = 0, so the form is 0/0. First use: lim (x → 0) 3 sin 3x/(2x). Check again: 3 sin 0 = 0 and 2 × 0 = 0, still 0/0. Second use: lim (x → 0) 9 cos 3x/2 = 9/2.

- (A) stops after one use and treats the new 0/0 as 0.
- (B) forgets the chain rule on the second use, writing 3 cos 3x instead of 9 cos 3x.
- (D) gets the sign wrong: d/dx (−cos 3x) = +3 sin 3x, not −3 sin 3x.
</details>

## Question 5 (constructed response · core)

Two fictional apps launch on the same day. The number of users of app P, in thousands, t weeks after launch is modelled by P(t) = 8t² + 3. The number of users of app Q, in thousands, is modelled by Q(t) = e^(0.2t).

(a) Explain why lim (t → ∞) P(t)/Q(t) is an indeterminate form.
(b) Use L'Hospital's Rule to find lim (t → ∞) P(t)/Q(t). Show that the rule applies each time you use it.
(c) At t = 10, P(t)/Q(t) ≈ 109. Interpret this value and your answer to (b) in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As t → ∞, 8t² + 3 → ∞ and e^(0.2t) → ∞. Both grow without bound, so the limit has the form ∞/∞. That does not decide the limit: it depends on which grows faster.

**(b)** First use (form ∞/∞ from (a)):

lim (t → ∞) (8t² + 3)/e^(0.2t) = lim (t → ∞) 16t/(0.2e^(0.2t))

Check again: 16t → ∞ and 0.2e^(0.2t) → ∞, still ∞/∞. Second use:

= lim (t → ∞) 16/(0.04e^(0.2t))

Now the top is the constant 16 and the bottom → ∞, so the limit is **0**.

**(c)** Ten weeks after launch, app P has about 109 times as many users as app Q. But the limit 0 means that in the long run app Q's users far outnumber app P's: the ratio of P's users to Q's users approaches 0. (For example, by t = 100 the ratio is below 0.001.)

| Point | What earns it |
|---|---|
| 1 | States both limits are infinite, so the form is ∞/∞ |
| 1 | First use correct, 16t/(0.2e^(0.2t)), with the chain rule on the exponential |
| 1 | Checks ∞/∞ again before the second use, and reaches 16/(0.04e^(0.2t)) → 0 |
| 1 | Interprets both: P is ahead at t = 10, but Q's user numbers eventually dominate (ratio → 0) |

Acceptable alternative for (b): quoting that exponentials grow faster than polynomials (Topic 1.15) gives the value 0, but this question asks for the rule, so the growth fact alone earns at most the final answer.
</details>

## Question 6 (constructed response · core)

Let h(x) = ln(x − 1)/(x² − 4) for x > 1, x ≠ 2.

(a) Find lim (x → 2) h(x), with a full justification.
(b) A student wrote this:

> lim (x → 2) h(x) = 0/0. By L'Hospital's Rule, I differentiate h(x) using the quotient rule…
>
> Identify **two** errors in the student's work.

(c) Let k(x) = (ln(x − 1) + 1)/(x² − 4). Explain why L'Hospital's Rule cannot be used for lim (x → 2) k(x), and describe the behaviour of k(x) on each side of x = 2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (x → 2) ln(x − 1) = ln 1 = 0 and lim (x → 2) (x² − 4) = 0. The form is 0/0, so L'Hospital's Rule applies:

lim (x → 2) ln(x − 1)/(x² − 4) = lim (x → 2) (1/(x − 1))/(2x) = lim (x → 2) 1/(2x(x − 1)) = 1/(2 × 2 × 1) = **1/4**.

Check: at x = 2.01, h(x) ≈ 0.248.

**(b)** Error 1: writing "= 0/0". 0/0 is a label for the form, not a value; the student should state the two limits separately. Error 2: using the quotient rule. The rule uses the derivative of the top divided by the derivative of the bottom, not the derivative of h.

**(c)** As x → 2, the top tends to ln 1 + 1 = 1, not 0, while the bottom tends to 0. The form is 1/0, which is not indeterminate, so the rule does not apply. For x slightly more than 2, x² − 4 is small and positive, so k(x) → +∞. For x slightly less than 2, x² − 4 is small and negative, so k(x) → −∞.

| Point | What earns it |
|---|---|
| 1 | Shows both limits in (a) are 0 and states the rule applies |
| 1 | Correct derivatives 1/(x − 1) and 2x, and the value 1/4 |
| 1 | Identifies both errors in (b) with a reason for each |
| 1 | In (c), explains that 1/0 is not indeterminate **and** gives +∞ on the right, −∞ on the left |
</details>

## Question 7 (constructed response · stretch)

Let F(x) = (e^(2x) − 1 − kx)/x² for x ≠ 0, where k is a constant, and let F(0) = c.

(a) Show that lim (x → 0) F(x) has the form 0/0 for every value of k.
(b) After one use of L'Hospital's Rule, explain why lim (x → 0) F(x) can be finite only if k = 2.
(c) With k = 2, find lim (x → 0) F(x), and the value of c that makes F continuous at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As x → 0, the top tends to e⁰ − 1 − 0 = 0 for any k, and the bottom x² → 0. So the form is 0/0.

**(b)** The rule gives lim (x → 0) (2e^(2x) − k)/(2x). The bottom tends to 0, and the top tends to 2 − k. If k ≠ 2, this is a nonzero number over 0, so (2e^(2x) − k)/(2x) tends to +∞ or −∞ on each side of 0. Applying the rule to each one-sided limit, F(x) also tends to +∞ or −∞ on each side, so lim (x → 0) F(x) is not finite. (For example, with k = 3 the limit is −∞ from the right and +∞ from the left.) So a finite limit needs 2 − k = 0, that is, k = 2.

**(c)** With k = 2, lim (x → 0) (2e^(2x) − 2)/(2x) has the form 0/0 (top → 0, bottom → 0), so use the rule again: lim (x → 0) 4e^(2x)/2 = 4/2 = **2**. For continuity at 0, F(0) must equal the limit, so **c = 2**.

Check: at x = 0.01, F(x) ≈ 2.013 with k = 2.

| Point | What earns it |
|---|---|
| 1 | Shows the top and bottom both tend to 0 for every k |
| 1 | Correct first derivative ratio (2e^(2x) − k)/(2x) |
| 1 | Argues that k ≠ 2 gives nonzero/0, so k = 2 |
| 1 | Second check and second use give 2, and states c = 2 for continuity |
</details>

## How did you do?

- **Q1 or Q4 wrong:** redo Worked examples 1 and 3 in the [study guide](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/), with the chain rule on every term.
- **Q2 wrong:** reread "Using a table of values" in the guide.
- **Q3 or Q6(c) wrong:** see "When not to use the rule": the form must be 0/0 or ∞/∞.
- **Q5 wrong:** redo Worked example 2 (∞/∞) and check the form before each use.
- **Q6(b) or Q7 wrong:** reread "How to write the justification" and the misconceptions list.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-checklist/).
