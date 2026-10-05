---
resourceId: "mb-ap-calcab-6.8-practice"
title: "Antiderivatives and Indefinite Integrals: Basic Rules and Notation: Practice Questions (Calculus AB 6.8)"
description: "Seven original Marlbridge practice questions on indefinite integrals, the constant of integration, basic antiderivative rules and rewriting, with full solutions."
course: "calculus-ab"
unit: 6
topics: ["6.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of powers, exponentials, logarithms, trig and inverse trig functions"
  - "Index laws and basic trig identities"
prerequisiteResources: ["mb-ap-calcab-6.8-study-guide"]
learningObjectives:
  - "Find indefinite integrals with the basic rules, including + C"
  - "Rewrite products, quotients and roots before integrating"
  - "Check a claimed antiderivative by differentiating"
  - "Explain the meaning of the constant of integration and recognise functions without a formula antiderivative"
skills: ["1", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers."
related: ["mb-ap-calcab-6.8-study-guide", "mb-ap-calcab-6.8-revision-notes", "mb-ap-calcab-6.8-checklist"]
next: "mb-ap-calcab-6.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and each integrand is considered on an interval where it is defined. Notation: ∫ f(x) dx is an indefinite integral and C is an arbitrary constant. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is ∫ (5x⁴ − 6x + 2) dx?

- (A) x⁵ − 3x² + 2x + C
- (B) 20x³ − 6 + C
- (C) x⁵ − 3x² + C
- (D) x⁵ − 6x² + 2x + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Term by term: 5x⁴ → x⁵, −6x → −3x², 2 → 2x. Check: d/dx (x⁵ − 3x² + 2x) = 5x⁴ − 6x + 2.

- (B) differentiates the integrand instead of integrating it.
- (C) treats the constant 2 as if it disappears. That happens when you differentiate; when you integrate, 2 becomes 2x. Its derivative is 5x⁴ − 6x.
- (D) raises the power of x but does not divide by the new power: −6x → −6x² instead of −3x². Its derivative is 5x⁴ − 12x + 2.
</details>

## Question 2 (multiple choice · core)

What is ∫ (3/x − 4/x²) dx?

- (A) 3 ln|x| + 4/x + C
- (B) 3 ln|x| − 4/x + C
- (C) −3/x² + 8/x³ + C
- (D) 3 ln|x| − 4 ln(x²) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 3/x → 3 ln|x|. For −4/x² = −4x⁻², use the power rule: −4 · x⁻¹/(−1) = 4x⁻¹ = 4/x. Check: d/dx (4/x) = −4/x². ✓

- (B) loses the sign when dividing by −1. Its derivative is 3/x + 4/x².
- (C) is the derivative of the integrand, not an antiderivative.
- (D) uses the ln rule for 1/x², which only works for 1/x. Its derivative is 3/x − 8/x = −5/x.
</details>

## Question 3 (multiple choice · core)

What is ∫ (sec x tan x + 1/(1 + x²)) dx?

- (A) sec x + arctan x + C
- (B) −sec x + arctan x + C
- (C) sec x + ln(1 + x²) + C
- (D) sec x + arcsin x + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** d/dx sec x = sec x tan x and d/dx arctan x = 1/(1 + x²).

- (B) borrows the minus sign from the csc x cot x rule. sec has no minus sign in its derivative.
- (C) treats 1/(1 + x²) like 1/x. The derivative of ln(1 + x²) is 2x/(1 + x²), not 1/(1 + x²).
- (D) confuses the two inverse trig forms. arcsin x has derivative 1/√(1 − x²).
</details>

## Question 4 (multiple choice · core)

F(x) = x ln x − x for x > 0. F is an antiderivative of which function?

- (A) ln x
- (B) ln x − 1
- (C) 1/x
- (D) ln x + 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate F. By the product rule, d/dx (x ln x) = 1 · ln x + x · (1/x) = ln x + 1. Then F′(x) = ln x + 1 − 1 = ln x. So ∫ ln x dx = x ln x − x + C.

- (B) differentiates x ln x as just ln x, missing the second product-rule term x · (1/x).
- (C) is the derivative of ln x, so it goes one step too far: it is F″(x), not F′(x).
- (D) forgets to differentiate the −x term.

Lesson: you may not know an antiderivative rule for ln x yet, but you can always **check** a claimed one with derivative rules.
</details>

## Question 5 (constructed response · core)

(a) Find ∫ (x² + 1)²/x² dx.
(b) Show that cos x/(1 − cos²x) = csc x cot x, and hence find ∫ cos x/(1 − cos²x) dx.
(c) Check your answer to (b) by differentiating.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Expand the top: (x² + 1)² = x⁴ + 2x² + 1. Divide each term by x²: x² + 2 + x⁻².

∫ (x² + 2 + x⁻²) dx = **x³/3 + 2x − 1/x + C**

**(b)** 1 − cos²x = sin²x, so cos x/(1 − cos²x) = cos x/sin²x = (1/sin x) · (cos x/sin x) = csc x cot x.

Since d/dx csc x = −csc x cot x, ∫ csc x cot x dx = **−csc x + C**.

**(c)** d/dx (−csc x) = −(−csc x cot x) = csc x cot x = cos x/(1 − cos²x). ✓

| Point | What earns it |
|---|---|
| 1 | Expands and divides to x² + 2 + x⁻² |
| 1 | x³/3 + 2x − 1/x + C, including + C |
| 1 | Correct identity work and −csc x + C |
| 1 | Differentiation check with the sign handled correctly |
</details>

## Question 6 (constructed response · core)

Let f(x) = 3x² − 4, G(x) = x³ − 4x + 10 and H(x) = x³ − 4x − 2.

(a) Show that G and H are both antiderivatives of f.
(b) Explain why ∫ f(x) dx is written as x³ − 4x + C and not as G(x) alone.
(c) Describe how the graphs of G and H are related, and find the slope of each graph at x = 1.
(d) Evaluate ∫ (1 to 3) f(x) dx using G, then using H. Explain why the answers agree.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** G′(x) = 3x² − 4 = f(x) and H′(x) = 3x² − 4 = f(x).

**(b)** f has infinitely many antiderivatives: x³ − 4x plus any constant. G is only one of them. The indefinite integral names the whole family, so it needs + C.

**(c)** H(x) − G(x) = −12 for every x, so the graph of H is the graph of G **moved down 12 units**. At x = 1 both slopes are f(1) = 3 − 4 = **−1**, because the two functions have the same derivative. (The points are (1, 7) on G and (1, −5) on H.)

**(d)** G(3) − G(1) = (27 − 12 + 10) − (1 − 4 + 10) = 25 − 7 = **18**.
H(3) − H(1) = (27 − 12 − 2) − (1 − 4 − 2) = 13 − (−5) = **18**.
They agree because H = G − 12, and the −12 appears in both H(3) and H(1), so it cancels in the subtraction.

| Point | What earns it |
|---|---|
| 1 | Both derivatives shown equal to f(x) |
| 1 | + C explained as listing all antiderivatives, not just one |
| 1 | Vertical shift of 12 units and equal slopes −1 at x = 1 |
| 1 | Both evaluations give 18, with the cancelling constant explained |
</details>

## Question 7 (constructed response · stretch)

(a) Find ∫ (4 − x²)/(2 + x) dx, for x > −2.
(b) Find ∫ e^(x + 2) dx using an index law and a basic rule.
(c) Find ∫ 3 · 10ˣ dx.
(d) A student claims that ∫ e^(−x²) dx = −e^(−x²)/(2x) + C. Show by differentiating that this is wrong, and state what is true about antiderivatives of e^(−x²).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Factor the top: 4 − x² = (2 − x)(2 + x). For x ≠ −2 the fraction is 2 − x.

∫ (2 − x) dx = **2x − x²/2 + C**

**(b)** e^(x + 2) = e² · eˣ, and e² is a constant. So ∫ e² eˣ dx = e² eˣ + C = **e^(x + 2) + C**.

**(c)** Use the aˣ rule with a = 10: **3 · 10ˣ/ln 10 + C**. Check: d/dx (10ˣ/ln 10) = 10ˣ.

**(d)** By the quotient rule (or the product rule on −(1/2) x⁻¹ e^(−x²)),

d/dx (−e^(−x²)/(2x)) = e^(−x²) + e^(−x²)/(2x²)

This is not e^(−x²): there is an extra term e^(−x²)/(2x²). So the claim is false. The student treated the antiderivative like reversing the chain rule, dividing by the derivative of −x², but x is not a constant, so dividing by −2x does not undo the chain rule.

In fact e^(−x²) has **no antiderivative that can be written with familiar functions**. It does have antiderivatives: because e^(−t²) is continuous, ∫ (0 to x) e^(−t²) dt is one (Topic 6.4).

| Point | What earns it |
|---|---|
| 1 | Simplifies to 2 − x and integrates to 2x − x²/2 + C |
| 1 | e^(x + 2) + C via e² eˣ |
| 1 | 3 · 10ˣ/ln 10 + C |
| 1 | Correct derivative showing the extra term, plus the statement that no formula antiderivative exists (but an accumulation function is one) |

Acceptable alternative for (a): polynomial division of 4 − x² by 2 + x gives 2 − x with remainder 0.
</details>

## How did you do?

- **Q1 or Q2 wrong:** reread "Basic rules: derivative rules read backwards" in the [study guide](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/), especially the power rule and ln|x|.
- **Q3 or Q5(b) wrong:** redo Worked example 2 and learn the trig and inverse trig rows of the table.
- **Q4 or Q7(d) wrong:** redo Worked example 3 and "Check by differentiating".
- **Q5(a) or Q7(a) wrong:** see "Two rules that let you work term by term" and Worked example 1.
- **Q6 wrong:** reread "From one antiderivative to a family" and Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-checklist/).
