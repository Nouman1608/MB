---
resourceId: "mb-ap-calcab-6.14-practice"
title: "Selecting Techniques for Antidifferentiation: Practice Questions (Calculus AB 6.14)"
description: "Seven original Marlbridge practice questions on choosing and applying an integration technique, including lookalike integrals and a no-formula case, with suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.14"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Basic antiderivatives, substitution, long division and completing the square (Topics 6.8 to 6.10)"
prerequisiteResources: ["mb-ap-calcab-6.14-study-guide"]
learningObjectives:
  - "Identify the technique an integrand needs from its form"
  - "Find indefinite integrals and evaluate definite integrals using the chosen technique"
  - "Recognise an integrand with no antiderivative in familiar functions and use technology instead"
  - "Justify a choice of technique and check an answer by differentiating"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "No calculator for Questions 1–5 and 7. Question 6(c) needs a calculator; give decimals to 3 decimal places. Give exact answers everywhere else."
related: ["mb-ap-calcab-6.14-study-guide", "mb-ap-calcab-6.14-revision-notes", "mb-ap-calcab-6.14-checklist"]
next: "mb-ap-calcab-6.14-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students; Question 7(d) is BC only."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: angles in radians; **no calculator** except in Question 6(c), where decimals are given to 3 decimal places; exact answers elsewhere. Notation: **∫ (a to b) f(x) dx** is the definite integral from a to b, and **[F(x)] (a to b)** means F(b) − F(a). The context in Question 6 is invented. This set is for both Calculus AB and Calculus BC students; Question 7(d) is for BC students only.

## Question 1 (multiple choice · foundation)

∫ (4x + 6)/(x² + 3x + 1) dx =

- (A) 2 ln|x² + 3x + 1| + C
- (B) ln|x² + 3x + 1| + C
- (C) (4x + 6) ln|x² + 3x + 1| + C
- (D) (2x² + 6x)/(x³/3 + 3x²/2 + x) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The signal: the derivative of the bottom is 2x + 3, and the top is 4x + 6 = 2(2x + 3). Let u = x² + 3x + 1, so du = (2x + 3) dx and (4x + 6) dx = 2 du. Then ∫ 2/u du = 2 ln|u| + C = 2 ln|x² + 3x + 1| + C.

- (B) misses the factor 2. Its derivative is (2x + 3)/(x² + 3x + 1), half the integrand.
- (C) keeps the top outside the logarithm. Only constants can come outside an integral, and the 4x + 6 is used up by du.
- (D) integrates the top and the bottom separately. ∫ f/g dx is not (∫ f dx)/(∫ g dx).
</details>

## Question 2 (multiple choice · core)

∫ 1/(x² + 10x + 26) dx =

- (A) ln|x² + 10x + 26| + C
- (B) arctan(x + 5) + C
- (C) −1/(x + 5) + C
- (D) (1/(2x + 10)) ln|x² + 10x + 26| + C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The signal: a quadratic denominator with nothing on top. Its discriminant is 100 − 104 = −4 < 0, so it does not factor. Complete the square: x² + 10x + 26 = (x + 5)² + 1. With u = x + 5, du = dx, the integral is ∫ 1/(u² + 1) du = arctan u + C = arctan(x + 5) + C.

- (A) uses the ln pattern without the derivative of the bottom on top. Its derivative is (2x + 10)/(x² + 10x + 26), not the integrand.
- (C) drops the + 1 and treats the bottom as (x + 5)². Its derivative is 1/(x + 5)².
- (D) divides by du/dx = 2x + 10 to "fix" the missing factor. You cannot divide by a variable expression this way, and differentiating (D) does not give back the integrand.
</details>

## Question 3 (multiple choice · core)

For which integral is the substitution u = x² + 4 the most effective first step?

- (A) ∫ 1/(x² + 4) dx
- (B) ∫ x(x² + 4)⁵ dx
- (C) ∫ (x² + 4)⁵ dx
- (D) ∫ x²/(x² + 4) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** du = 2x dx, so the integrand needs a factor x (up to a constant). Only (B) has it: x dx = ½ du, and ∫ ½ u⁵ du = u⁶/12 + C = (x² + 4)⁶/12 + C.

- (A) has no x on top. It is an arctan form: ½ arctan(x/2) + C.
- (C) has no factor x either. Expand (x² + 4)⁵ and use the power rule term by term.
- (D) has top degree equal to bottom degree, so divide first: x²/(x² + 4) = 1 − 4/(x² + 4), giving x − 2 arctan(x/2) + C.
</details>

## Question 4 (multiple choice · core)

Exactly one of these indefinite integrals **cannot** be written using powers, roots, exponentials, logarithms, trig and inverse trig functions. Which one?

- (A) ∫ x cos(x²) dx
- (B) ∫ cos(x²) dx
- (C) ∫ cos²x sin x dx
- (D) ∫ cos(2x) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** cos(x²) has no antiderivative in familiar functions. No substitution helps, because the derivative of x², which is 2x, is not present. A definite integral of cos(x²) still exists; you would find its value with technology.

- (A) has the factor x: with u = x², x dx = ½ du, so the answer is ½ sin(x²) + C.
- (C) has sin x, the derivative of cos x up to a sign: with u = cos x, the answer is −cos³x/3 + C.
- (D) is a basic rule with a linear inside: ½ sin(2x) + C.
</details>

## Question 5 (constructed response · core)

For each integral, state the signal you see and the technique you will use, then find the integral.

(a) ∫ (x³ − 2x + 1)/x² dx  (b) ∫ eˣ/(eˣ + 3) dx  (c) ∫ (x² + 2x)/(x + 1) dx

(d) Check your answer to (c) by differentiating it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Signal: a fraction over a single term. Technique: split. (x³ − 2x + 1)/x² = x − 2/x + x⁻². So the integral is **x²/2 − 2 ln|x| − 1/x + C**.

**(b)** Signal: the derivative of eˣ + 3 is eˣ, which is the top. Technique: substitution with u = eˣ + 3, du = eˣ dx. ∫ (1/u) du = ln|u| + C = **ln(eˣ + 3) + C**. No absolute value is needed, because eˣ + 3 > 0.

**(c)** Signal: top degree 2 > bottom degree 1. Technique: long division. x² + 2x = (x + 1)(x + 1) − 1, so (x² + 2x)/(x + 1) = x + 1 − 1/(x + 1). The integral is **x²/2 + x − ln|x + 1| + C**.

**(d)** d/dx [x²/2 + x − ln|x + 1|] = x + 1 − 1/(x + 1) = ((x + 1)² − 1)/(x + 1) = (x² + 2x)/(x + 1). This is the integrand, so (c) is correct.

| Point | What earns it |
|---|---|
| 1 | (a) Splits the fraction into powers and integrates all three terms correctly, including ln|x| |
| 1 | (b) Names substitution with u = eˣ + 3 and obtains ln(eˣ + 3) + C |
| 1 | (c) Divides first and obtains x²/2 + x − ln|x + 1| + C |
| 1 | (d) Differentiates and shows the result simplifies to the original integrand |

Acceptable alternative for (c): substitute w = x + 1 so x² + 2x = w² − 1, then ∫ (w − 1/w) dw = w²/2 − ln|w| + C. This differs from the answer above only by a constant. Omitting + C throughout costs one point in total (take it from (a)), not one per part.
</details>

## Question 6 (constructed response · core)

*Invented context.* Water flows into a garden tank through three inlets. Time t is measured in minutes, and each rate is in litres per minute.

- Inlet P: p(t) = 40t/(t² + 16)
- Inlet Q: q(t) = 40/(t² + 16)
- Inlet R: r(t) = 5e^(−0.04t²)

(a) Without a calculator, find the exact volume that flows through inlet P from t = 0 to t = 6. Give your answer in the form k ln m.
(b) Without a calculator, find the exact volume that flows through inlet Q from t = 0 to t = 4.
(c) A student tries to find ∫ (0 to 6) r(t) dt by substitution and gets stuck. Explain why, then use a calculator to find the volume through inlet R from t = 0 to t = 6.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Signal: the derivative of t² + 16 is 2t, and the top is 40t = 20(2t). Let u = t² + 16, du = 2t dt, so 40t dt = 20 du. New limits: t = 0 gives u = 16; t = 6 gives u = 52.
∫ (16 to 52) 20/u du = 20 [ln u] (16 to 52) = 20 ln(52/16) = **20 ln(13/4) litres** (about 23.573 litres).

**(b)** Signal: no t on top, and t² + 16 = t² + 4² has no real roots. Technique: arctan form.
∫ (0 to 4) 40/(t² + 4²) dt = 40 × (1/4) [arctan(t/4)] (0 to 4) = 10(arctan 1 − arctan 0) = 10 × π/4 = **5π/2 litres** (about 7.854 litres).

**(c)** Substitution with u = −0.04t² needs du = −0.08t dt, but there is no factor t in r(t). No other technique works either: e^(−0.04t²) has no antiderivative in familiar functions. The definite integral still exists, so use technology:
∫ (0 to 6) 5e^(−0.04t²) dt ≈ **20.169 litres**.

| Point | What earns it |
|---|---|
| 1 | (a) Uses substitution with u = t² + 16 and changes the limits to 16 and 52 (or returns to t before substituting) |
| 1 | (a) Obtains 20 ln(13/4) litres, or an equivalent such as 20 ln 52 − 20 ln 16 |
| 1 | (b) Uses the arctan form with k = 4 and obtains 5π/2 litres |
| 1 | (c) Explains that the factor t needed for substitution is missing / there is no closed-form antiderivative, **and** gives 20.169 litres |

Units are required in at least one answer. Using u-limits 0 and 6 after substituting in (a) loses the second point.
</details>

## Question 7 (constructed response · stretch)

Let I = ∫ (0 to 1) (2x³ + 3x² + 2x + 5)/(x² + 1) dx.

(a) A student says, "The bottom is x² + 1, so I will substitute u = x² + 1." Explain why this is not a good first step.
(b) Use long division to write the integrand as a polynomial plus a proper fraction.
(c) Find the exact value of I.
(d) **BC only.** Find ∫ (0 to 1) x³ e^(x²) dx. Name the techniques you use.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The top has degree 3 and the bottom degree 2, so the fraction is top-heavy. Also du = 2x dx, and the top is not a constant multiple of x. Substitution leaves a mixture of x and u. Long division is the right first step.

**(b)** Divide 2x³ + 3x² + 2x + 5 by x² + 1:
(x² + 1)(2x + 3) = 2x³ + 3x² + 2x + 3, which leaves a remainder of 2. So

**(2x³ + 3x² + 2x + 5)/(x² + 1) = 2x + 3 + 2/(x² + 1)**

**(c)** Integrate each piece: ∫ (2x + 3) dx = x² + 3x, and ∫ 2/(x² + 1) dx = 2 arctan x.
I = [x² + 3x + 2 arctan x] (0 to 1) = (1 + 3 + 2 × π/4) − 0 = **4 + π/2** (about 5.571).

**(d) BC only.** First substitute w = x², so dw = 2x dx and x³ dx = x² · x dx = ½ w dw. Limits: x = 0 gives w = 0; x = 1 gives w = 1. The integral is ½ ∫ (0 to 1) w eʷ dw. Now use integration by parts with u = w, dv = eʷ dw: ∫ w eʷ dw = w eʷ − eʷ. So the integral is ½ [w eʷ − eʷ] (0 to 1) = ½ [(e − e) − (0 − 1)] = **½**.

| Point | What earns it (AB: out of 4; BC: out of 5) |
|---|---|
| 1 | (a) Notes the top's degree is at least the bottom's, **or** that du = 2x dx does not match the top |
| 1 | (b) Correct quotient 2x + 3 and remainder 2 |
| 1 | (c) Correct antiderivative x² + 3x + 2 arctan x |
| 1 | (c) Correct value 4 + π/2, using arctan 1 = π/4 |
| 1 | (d) BC only: substitution w = x² followed by parts, with value ½ |

Acceptable alternative for (d): parts directly with u = x², dv = x e^(x²) dx, v = ½ e^(x²). This gives ½ x² e^(x²) − ½ e^(x²), and the same value ½.
</details>

## How did you do?

- **Q1, Q3 or Q6(a) wrong:** revisit the substitution signal in "The toolkit and the signal for each tool" in the [study guide](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/).
- **Q2 or Q6(b) wrong:** see Worked example 1(d) on completing the square and the arctan form.
- **Q5 or Q7 wrong:** compare your work with the lookalike table and Worked example 2; divide or split before anything else.
- **Q4 or Q6(c) wrong:** reread "When there is no formula".
- **BC students, Q7(d) wrong:** see Worked example 3 and the [integration by parts guide](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-checklist/).
