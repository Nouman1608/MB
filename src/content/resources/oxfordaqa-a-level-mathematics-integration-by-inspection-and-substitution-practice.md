---
title: "OxfordAQA International AS and A-level Mathematics: Integration by inspection and substitution (9660) -- Practice Questions"
seoTitle: "OxfordAQA 9660 Inspection and Substitution Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by inspection and substitution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 195
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-integration-oxfordaqa-alevel-maths"
description: "Original practice questions with worked answers on P2.7 integration by inspection and substitution for OxfordAQA International A-level Mathematics 9660."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover the first part of section P2.7 (Integration) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2: standard integrals, the reverse chain rule by inspection and substitution, and f′(x)/f(x). The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. Use radians throughout and give exact answers where a question asks for them. Full explanations are in the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution/) and the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-revision-notes/). Course links: the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Questions

**1.** Find ∫ (7e^(x/3) + 2cos 5x − 6/x) dx. **[4]**

**2.** Evaluate ∫ from 0 to π/6 of 4 sin 3x dx. **[3]**

**3.** Show that ∫ from 1 to 4 of 5/(2x + 7) dx = (5/2) ln(5/3). **[3]**

**4.** Find ∫ x³(x⁴ + 3)⁴ dx by inspection, and show how you checked your answer. **[3]**

**5.** Find the exact value of ∫ from 0 to 2 of x e^(−x²/4) dx. **[4]**

**6.**

**(a)** Find ∫ 6x²/(2x³ − 5) dx. **[2]**
**(b)** Find the exact value of ∫ from 1 to 3 of (4x + 2)/(x² + x) dx, giving your answer in the form a ln b. **[3]**

**7.** Use the substitution u = 4 − x to find the exact value of ∫ from 1 to 3 of x(4 − x)³ dx. **[6]**

**8.** Use the substitution u = 1 + x² to show that ∫ from 0 to 1 of x³/√(1 + x²) dx = (2 − √2)/3. **[6]**

**9.** Use the substitution u = eˣ + 3 to find the exact value of ∫ from 0 to ln 2 of e^(2x)/(eˣ + 3) dx. **[6]**

**10.**

**(a)** Differentiate (3x² + 1)^(3/2) with respect to x. **[2]**
**(b)** Hence find the exact value of ∫ from 0 to 1 of x√(3x² + 1) dx. **[3]**

**11.** The curve C has equation y = 10x/(x² + 4) for x ≥ 0. The line L has equation y = 5x/4.

**(a)** Find the exact area of the region bounded by C, the x-axis and the line x = 4. **[3]**
**(b)** Show that C and L meet at the origin and at the point (2, 5/2). **[2]**
**(c)** For 0 ≤ x ≤ 2 the curve lies above the line. Find the exact area of the region between C and L for 0 ≤ x ≤ 2. **[4]**

**12.** Use the substitution u = sin x to show that ∫ from 0 to π/2 of cos⁵x dx = 8/15. **[6]**

## Answers

**1.** ∫ 7e^(x/3) dx = 7 × 3e^(x/3) = 21e^(x/3) [1]. ∫ 2cos 5x dx = (2/5) sin 5x [1]. ∫ 6/x dx = 6 ln|x|, so the term is −6 ln|x| [1].
**21e^(x/3) + (2/5) sin 5x − 6 ln|x| + c** [1] **[4]**
*Examiner insight:* A sloppy factor of k is the usual way to lose marks here, so differentiate each term of your answer to check it. The constant of integration is easy to forget when the line is full of other terms.

**2.** The antiderivative of 4 sin 3x is −(4/3) cos 3x [1]. Substitute the limits: −(4/3)(cos(π/2) − cos 0) = −(4/3)(0 − 1) [1].
**4/3** [1] **[3]**
*Examiner insight:* Work in radians and write cos(π/2) = 0 and cos 0 = 1 explicitly. A sign slip from the minus in the antiderivative is the common error, and a line showing each substitution lets a reader see what you meant.

**3.** ∫ 5/(2x + 7) dx = (5/2) ln|2x + 7| [1]. Limits: (5/2)(ln 15 − ln 9) [1]. Use ln 15 − ln 9 = ln(15/9) = ln(5/3), so the integral is **(5/2) ln(5/3)** [1] **[3]**
*Examiner insight:* On a "show that" question, the printed answer is given, so the marks come from the working. Show the antiderivative, the limits and the log law you use. The modulus can be dropped because 2x + 7 is positive on the interval.

**4.** Inside function x⁴ + 3, derivative 4x³. Guess (x⁴ + 3)⁵ [1]. Check: d/dx (x⁴ + 3)⁵ = 5(x⁴ + 3)⁴ × 4x³ = 20x³(x⁴ + 3)⁴, which is 20 times the integrand [1].
**(x⁴ + 3)⁵/20 + c** [1] **[3]**
*Examiner insight:* A question that asks you to show a check wants the differentiation written down. State the factor you divide by, and write + c on the final line.

**5.** The exponent is −x²/4, with derivative −x/2. Differentiating e^(−x²/4) gives −(x/2) e^(−x²/4), so the antiderivative is −2e^(−x²/4) [2]. Evaluate: −2e^(−1) − (−2e⁰) [1].
**2 − 2e⁻¹**, which is 2 − 2/e [1] **[4]**
*Examiner insight:* If the question says "exact", leave e in the answer. Writing a rounded decimal such as 1.26 as the final answer risks losing the final mark, though a decimal as an extra line is harmless.

**6. (a)** The derivative of 2x³ − 5 is 6x², which is the numerator [1].
**ln|2x³ − 5| + c** [1] **[2]**
**(b)** 4x + 2 = 2(2x + 1), and 2x + 1 is the derivative of x² + x [1]. The integral is 2 ln(x² + x) [1]. Limits: 2 ln 12 − 2 ln 2 = 2 ln 6, so **a = 2, b = 6** [1] **[3]**
*Examiner insight:* Look for the factor of 2 before applying the f′/f rule, because the numerator is only a multiple of the derivative. In part (b) x² + x is positive on the interval, so the modulus is not needed.

**7.** u = 4 − x gives x = 4 − u and dx = −du [1]. Limits: x = 1 gives u = 3, and x = 3 gives u = 1 [1]. The integral becomes ∫ from 3 to 1 of −(4 − u)u³ du = ∫ from 1 to 3 of (4 − u)u³ du [1]. Expand: ∫ (4u³ − u⁴) du = u⁴ − u⁵/5 [1]. At u = 3: 81 − 243/5; at u = 1: 1 − 1/5 [1].
**158/5** [1] **[6]**
*Examiner insight:* The sign from dx = −du is easy to lose. Reversing the limits to run from 1 to 3 and removing the minus sign are two separate moves, so write both. The integrand is positive on the interval, so a positive final value is a useful check.

**8.** u = 1 + x², so du = 2x dx and x² = u − 1 [1]. Limits: x = 0 gives u = 1, and x = 1 gives u = 2 [1]. x³ dx = x² × x dx = (u − 1) du/2, so the integral is ½ ∫ from 1 to 2 of (u − 1)u^(−1/2) du = ½ ∫ (u^(1/2) − u^(−1/2)) du [1]. Antiderivative: ½[(2/3)u^(3/2) − 2u^(1/2)] [1]. At u = 2: (2/3)(2√2) − 2√2 = −2√2/3; at u = 1: 2/3 − 2 = −4/3 [1]. ½(−2√2/3 + 4/3) = **(2 − √2)/3** [1] **[6]**
*Examiner insight:* Splitting x³ as x² × x is the idea that makes this work, so write it down. For a "show that", finish with the exact printed form and not a decimal.

**9.** u = eˣ + 3, so du = eˣ dx and eˣ = u − 3. Write e^(2x) dx = eˣ × eˣ dx = (u − 3) du [1]. Limits: x = 0 gives u = 4, and x = ln 2 gives u = 5 [1]. The integral is ∫ from 4 to 5 of (u − 3)/u du = ∫ (1 − 3/u) du [1]. Antiderivative: u − 3 ln u [1]. Evaluate: (5 − 3 ln 5) − (4 − 3 ln 4) [1].
**1 − 3 ln(5/4)**, using ln 5 − ln 4 = ln(5/4) [1] **[6]**
*Examiner insight:* The step e^(2x) = eˣ × eˣ links the integrand to du, so show it. Combine the two logarithms with the laws of logarithms to reach a neat exact answer.

**10. (a)** Chain rule: (3/2)(3x² + 1)^(1/2) × 6x [1] = **9x√(3x² + 1)** [1] **[2]**
**(b)** Part (a) gives ∫ x√(3x² + 1) dx = (1/9)(3x² + 1)^(3/2) [1]. Limits: (1/9)(4^(3/2) − 1) = (1/9)(8 − 1) [1].
**7/9** [1] **[3]**
*Examiner insight:* "Hence" means use part (a). A substitution from scratch may reach the same answer but ignores the instruction. Divide by 9, because the derivative in part (a) is nine times the integrand.

**11. (a)** 10x = 5 × 2x, and 2x is the derivative of x² + 4, so the integral is 5 ln(x² + 4) [1]. Limits: 5 ln 20 − 5 ln 4 [1].
**5 ln 5** [1] **[3]**
**(b)** Set 10x/(x² + 4) = 5x/4. Either x = 0, or 10/(x² + 4) = 5/4, so x² + 4 = 8 and x = 2 [1]. Then y = 5(2)/4 = 5/2, so the point is (2, 5/2) [1] **[2]**
**(c)** Area = ∫ from 0 to 2 of (10x/(x² + 4) − 5x/4) dx [1]. Antiderivative: 5 ln(x² + 4) − 5x²/8 [1]. Limits: (5 ln 8 − 5/2) − 5 ln 4 [1].
**5 ln 2 − 5/2** [1] **[4]**
*Examiner insight:* In area questions, write curve minus line before integrating. In part (c) the logarithms combine because 5 ln 8 − 5 ln 4 = 5 ln 2. A decimal check of 0.966 shows the area is positive.

**12.** cos⁵x = cos x × (cos²x)² = cos x (1 − sin²x)² [1]. u = sin x, so du = cos x dx [1]. Limits: x = 0 gives u = 0, and x = π/2 gives u = 1 [1]. The integral is ∫ from 0 to 1 of (1 − u²)² du = ∫ (1 − 2u² + u⁴) du [1]. Antiderivative: u − (2/3)u³ + (1/5)u⁵ [1]. At u = 1: 1 − 2/3 + 1/5 = **8/15** [1] **[6]**
*Examiner insight:* The key step is writing the odd power as one cos x times an even power, then using sin²x + cos²x = 1. Without that step the substitution cannot be completed, so show it on its own line.

## Where marks are usually lost

- Forgetting to divide by k for e^(kx), sin kx or cos kx.
- Writing +cos(kx)/k for ∫ sin kx dx.
- Applying the f′/f rule when the numerator needs a constant factor, then forgetting the factor.
- Forgetting + c in an indefinite integral, or the modulus in ln|f(x)| when f could be negative.
- Substituting, but leaving x in the integrand or forgetting to replace dx.
- Changing the limits to u-values and then using them in the wrong variable.
- Losing a sign when du = −dx or du = −sin x dx, or when limits are reversed.
- Giving a decimal where the question asks for an exact answer.
- Skipping steps on a "show that" question, where the working carries the credit.

## Next steps

- Re-read the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution/) for any method you missed.
- Use the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-revision-notes/) to recall the standard results.
- Go to the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/) or tick off the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. These questions follow the content and additional information listed under P2.7.
