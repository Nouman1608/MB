---
resourceId: "mb-ap-calcab-u6-diagnostic"
title: "Integration and Accumulation of Change: Unit Diagnostic (Calculus AB Unit 6)"
description: "Fourteen short original questions, one per topic of Integration and Accumulation of Change, to show which topics you should revisit, with explanations and links."
course: "calculus-ab"
unit: 6
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivative rules from Units 2 and 3, including the chain rule and the derivatives of inverse trig functions"
  - "Using f′ and f″ to describe a function, from Unit 5"
learningObjectives:
  - "Find out which Unit 6 topics are secure and which need more work"
  - "Check accumulation, Riemann sum, Fundamental Theorem and antidifferentiation skills quickly"
  - "Practise short written justifications for accumulation functions and for choosing a technique"
skills: ["1", "2", "3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave e, π, ln and arctan in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcab-u6-review", "mb-ap-calcab-6.4-study-guide", "mb-ap-calcab-6.5-study-guide", "mb-ap-calcab-6.9-study-guide", "mb-ap-calcab-6.14-study-guide"]
next: "mb-ap-calcab-u6-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 6, to decide which of the 14 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "Questions 11, 12 and 13 are for Calculus BC only; Calculus AB students skip them."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 6, Integration and Accumulation of Change, to revisit: one question per topic. These are **original Marlbridge practice questions**, not past exam questions, with invented data. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening the answers. The unit is shared by Calculus AB and Calculus BC. **Questions 11, 12 and 13 are BC only** (Topics 6.11 to 6.13); Calculus AB students skip them.

## Question 1 (multiple choice · 6.1)

The depth of snow on a roof changes at a rate of s(t) cm per hour, t hours after midnight. The graph of s is made of straight segments joining (0, 0), (3, 6), (5, 6), (6, 0) and (8, −4). At t = 0 the snow is 10 cm deep. How deep is it at t = 8?

- (A) 20 cm
- (B) 30 cm
- (C) 38 cm
- (D) 34 cm

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Above the axis: 9 + 12 + 3 = 24. From t = 6 to 8 the region is below the axis, with area 4, so it counts as −4. Net change = 20 cm, so the depth is 10 + 20 = 30 cm.

- (A) leaves out the starting depth.
- (C) adds the area below the axis.
- (D) stops at t = 6.

**If you missed this:** [Guide 6.1](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/).
</details>

## Question 2 (multiple choice · 6.2)

Water flows into a pool at an increasing rate R(t) litres per minute.

| t (minutes) | 0 | 3 | 4 | 8 |
|---|---|---|---|---|
| R(t) (litres per minute) | 2 | 5 | 6 | 9 |

Which is true of the right Riemann sum for ∫ (0 to 8) R(t) dt with the table's three subintervals?

- (A) It is 57, and it is an overestimate.
- (B) It is 57, and it is an underestimate.
- (C) It is 35, and it is an overestimate.
- (D) It is 160/3, and it is an overestimate.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The widths are 3, 1 and 4, so the right sum is 5(3) + 6(1) + 9(4) = 57 litres. R is increasing, so each right-hand height is the highest on its strip: 57 is an overestimate.

- (B) reverses the rule.
- (C) is the left sum, an underestimate.
- (D) uses equal widths of 8/3; the table's gaps are not equal.

**If you missed this:** [Guide 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/).
</details>

## Question 3 (multiple choice · 6.3)

What is the value of lim (n → ∞) Σ (i = 1 to n) (2/n) · 1/(1 + 2i/n)²?

- (A) 4/3
- (B) −2/3
- (C) 2/3
- (D) ln 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Δx = 2/n and xᵢ = 1 + 2i/n runs from 1 to 3, so the limit is ∫ (1 to 3) 1/x² dx = [−1/x] (1 to 3) = 2/3.

- (A) counts the width 2/n twice.
- (B) has a sign slip in the antiderivative.
- (D) integrates 1/x, not 1/x².

**If you missed this:** [Guide 6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/).
</details>

## Question 4 (multiple choice · 6.4)

Let G(x) = ∫ (1 to x²) √(t² + 9) dt. What is G′(2)?

- (A) 5
- (B) 4√13
- (C) 20 − √10
- (D) 20

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** By the Fundamental Theorem and the chain rule, G′(x) = √(x⁴ + 9) · 2x, so G′(2) = 5 × 4 = 20.

- (A) leaves out the chain factor 2x.
- (B) puts x, not x², into the integrand.
- (C) subtracts the integrand at the constant lower limit.

**If you missed this:** [Guide 6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/).
</details>

## Question 5 (short answer · 6.5)

The graph of a continuous function f, for 0 ≤ t ≤ 6, is made of straight segments joining (0, 2), (1, 0), (3, −2), (4, 0) and (6, 2). Let g(x) = 5 + ∫ (1 to x) f(t) dt.

(a) Find g(4) and g(6).
(b) Find the x-value of each relative extremum of g on (0, 6), and classify it. Justify.
(c) On what interval is the graph of g concave down? Give a reason.

<details>
<summary>Worked answer</summary>

**(a)** From 1 to 4 the graph is a triangle below the axis with area 3, so **g(4) = 5 − 3 = 2**. From 4 to 6 a triangle above the axis has area 2, so **g(6) = 4**.

**(b)** g′ = f. f changes from positive to negative at x = 1: **relative maximum at x = 1**. f changes from negative to positive at x = 4: **relative minimum at x = 4**.

**(c)** g″ = f′, and f is decreasing on (0, 3), so g is **concave down on (0, 3)**.

**If you missed this:** [Guide 6.5](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/).
</details>

## Question 6 (multiple choice · 6.6)

f is continuous, ∫ (0 to 5) f(x) dx = 7 and ∫ (2 to 5) f(x) dx = 10. What is ∫ (2 to 0) [f(x) + 4] dx?

- (A) 5
- (B) −5
- (C) −1
- (D) −25

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ∫ (0 to 2) f(x) dx = 7 − 10 = −3, so ∫ (0 to 2) [f(x) + 4] dx = −3 + 8 = 5. Reversing the limits gives −5.

- (A) forgets to reverse the sign.
- (C) adds 4, not 4 × 2.
- (D) adds the given integrals.

**If you missed this:** [Guide 6.6](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/).
</details>

## Question 7 (multiple choice · 6.7)

A pump removes water from a cellar at r(t) = 12 − 3√t litres per minute, t minutes after it starts. How much water does it remove from t = 1 to t = 4?

- (A) 32 litres
- (B) −3 litres
- (C) 22 litres
- (D) 50 litres

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An antiderivative is F(t) = 12t − 2t^(3/2). F(4) − F(1) = (48 − 16) − (12 − 2) = 32 − 10 = 22 litres.

- (A) is F(4) only; it leaves out F(1).
- (B) is r(4) − r(1), the change in the rate.
- (D) uses +2t^(3/2) in the antiderivative, so it gets 36 + 14 instead of 36 − 14.

**If you missed this:** [Guide 6.7](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/).
</details>

## Question 8 (multiple choice · 6.8)

What is ∫ (4/√(1 − x²) − 2ˣ) dx?

- (A) 4 arcsin x − 2ˣ ln 2 + C
- (B) 4 arctan x − 2ˣ/ln 2 + C
- (C) 4 arcsin x − 2^(x + 1)/(x + 1) + C
- (D) 4 arcsin x − 2ˣ/ln 2 + C

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** d/dx arcsin x = 1/√(1 − x²) and d/dx (2ˣ/ln 2) = 2ˣ.

- (A) uses the derivative rule for 2ˣ.
- (B) mixes up arcsin and arctan.
- (C) uses the power rule on 2ˣ.

**If you missed this:** [Guide 6.8](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/).
</details>

## Question 9 (short answer · 6.9)

(a) Find ∫ (ln x)³/x dx.
(b) Evaluate ∫ (0 to π/3) sin x/cos³x dx exactly. Show the new limits.

<details>
<summary>Worked answer</summary>

**(a)** Let u = ln x, so du = (1/x) dx. The integral becomes ∫ u³ du = u⁴/4 + C = **(ln x)⁴/4 + C**.

**(b)** Let u = cos x, so du = −sin x dx. x = 0 gives u = 1, and x = π/3 gives u = 1/2. The integral becomes −∫ (1 to 1/2) u⁻³ du = ∫ (1/2 to 1) u⁻³ du = [−1/(2u²)] (1/2 to 1) = −1/2 + 2 = **3/2**.

**If you missed this:** [Guide 6.9](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/).
</details>

## Question 10 (multiple choice · 6.10)

What is ∫ (x² + 7)/(x² + 4) dx?

- (A) x + 3 arctan(x/2) + C
- (B) x + (3/2) arctan(x/2) + C
- (C) x + (7/2) arctan(x/2) + C
- (D) x + (3/2) ln(x² + 4) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Equal degrees, so divide first: (x² + 7)/(x² + 4) = 1 + 3/(x² + 4), and ∫ 3/(x² + 4) dx = (3/2) arctan(x/2).

- (A) forgets the factor 1/2 from x² + 2².
- (C) uses 7 as the remainder.
- (D) uses ln, but 3 is not a multiple of 2x.

**If you missed this:** [Guide 6.10](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/).
</details>

## Question 11 (multiple choice · 6.11) (BC only)

What is ∫ (1 to e) x² ln x dx?

- (A) (2e³ − 1)/9
- (B) e³/3
- (C) (2e³ + 1)/9
- (D) 2e³/9

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Take u = ln x and dv = x² dx, so du = (1/x) dx and v = x³/3. Then ∫ x² ln x dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9. From 1 to e: (e³/3 − e³/9) − (0 − 1/9) = (2e³ + 1)/9.

- (A) has a sign slip at the lower limit.
- (B) stops after the uv term.
- (D) forgets the value at the lower limit.

**If you missed this:** [Guide 6.11](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/).
</details>

## Question 12 (multiple choice · 6.12) (BC only)

What is ∫ (x + 7)/(x² − x − 6) dx?

- (A) 2 ln|x + 2| − ln|x − 3| + C
- (B) 2 ln|x − 3| + ln|x + 2| + C
- (C) ln|x² − x − 6| + C
- (D) 2 ln|x − 3| − ln|x + 2| + C

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** x² − x − 6 = (x − 3)(x + 2). From x + 7 = A(x + 2) + B(x − 3): x = 3 gives A = 2, and x = −2 gives B = −1.

- (A) swaps the constants.
- (B) has a sign slip in B.
- (C) would need the top to be 2x − 1.

**If you missed this:** [Guide 6.12](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/).
</details>

## Question 13 (multiple choice · 6.13) (BC only)

What is ∫ (e to ∞) 1/(x (ln x)²) dx?

- (A) 1
- (B) −1
- (C) 1/e
- (D) It diverges.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With u = ln x, an antiderivative is −1/ln x. So the integral is lim (b → ∞) [−1/ln b + 1/ln e] = 0 + 1 = 1.

- (B) has the sign of the antiderivative wrong.
- (C) uses e in place of ln e = 1 at the lower limit.
- (D) is true for 1/(x ln x), not for 1/(x (ln x)²).

**If you missed this:** [Guide 6.13](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/).
</details>

## Question 14 (short answer · 6.14)

For each integral, name the technique you will use and find the integral.

(a) ∫ 6x/(x² + 25) dx  (b) ∫ 6/(x² + 25) dx  (c) ∫ (2x² + 6x)/(x² + 25) dx

<details>
<summary>Worked answer</summary>

**(a)** The top is a multiple of the bottom's derivative, 2x: **substitution**, u = x² + 25, so 6x dx = 3 du. **3 ln(x² + 25) + C** (no absolute value needed, as x² + 25 > 0).

**(b)** A constant over x² + 5²: **the arctan pattern**. **(6/5) arctan(x/5) + C**.

**(c)** Equal degrees: **long division first**, giving 2 + (6x − 50)/(x² + 25). Split the fraction: 6x/(x² + 25) by substitution, −50/(x² + 25) by arctan. **2x + 3 ln(x² + 25) − 10 arctan(x/5) + C**.

**If you missed this:** [Guide 6.14](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/).
</details>

## Your next step

| Topic | Question | If you missed it, read |
|---|---|---|
| 6.1 Accumulation of change | 1 | [Guide 6.1](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/) |
| 6.2 Riemann sums | 2 | [Guide 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/) |
| 6.3 Sigma and integral notation | 3 | [Guide 6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/) |
| 6.4 Accumulation functions | 4 | [Guide 6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/) |
| 6.5 Their behaviour | 5 | [Guide 6.5](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/) |
| 6.6 Integral properties | 6 | [Guide 6.6](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/) |
| 6.7 Evaluating integrals | 7 | [Guide 6.7](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/) |
| 6.8 Basic antiderivatives | 8 | [Guide 6.8](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/) |
| 6.9 Substitution | 9 | [Guide 6.9](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/) |
| 6.10 Division, completing the square | 10 | [Guide 6.10](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/) |
| 6.11 Parts (BC only) | 11 | [Guide 6.11](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/) |
| 6.12 Partial fractions (BC only) | 12 | [Guide 6.12](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/) |
| 6.13 Improper integrals (BC only) | 13 | [Guide 6.13](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/) |
| 6.14 Choosing a technique | 14 | [Guide 6.14](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix Topics 6.1 and 6.4 first.** Most of the unit builds on them.
- **Then fix techniques in order:** 6.8, 6.9, 6.10. Topic 6.14 needs them all.
- **Check your reasons** in Questions 5, 9 and 14, not just the values.
- **For a gap**, read the guide and do the topic's practice set, then try the [Unit 6 mixed review](/advanced-course-resources/calculus-ab/unit-6-review/), where each question combines topics.
