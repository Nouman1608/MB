---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponential, reciprocal and trig integration (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths P3 Integration Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration of exponential, reciprocal and trigonometric functions, and integration by recognition"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 149
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-integration-edexcel-alevel-maths"
description: "Eleven original worked practice questions on P3 integration for Edexcel International Advanced Level Maths: standard integrals, recognition and identities."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover Pearson Edexcel International Advanced Level Mathematics (YMA01) Pure Mathematics 3, topics 5.1 and 5.2, from the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019). The specification states P3 is compulsory for IAL Mathematics and Pure Mathematics only, not IAS. Give exact answers unless told otherwise, and use radians.

Teaching is in the [study guide](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/) and [revision notes](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-revision-notes/). Course pages: the [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). Not sure where to start? Try the [free diagnostics](/diagnostics/).

## Questions

**1.** Find ∫ (3e^(−x/3) + 7 cos 4x − 2/(5x)) dx, for x > 0. **[4]**

**2.** Find the exact value of ∫ from 0 to π/4 of (8 cos 2x − 3 sin x) dx. **[4]**

**3.** A curve has gradient dy/dx = 8e^(2x) − 3/x for x > 0, and passes through the point (1, 2e²). Find the equation of the curve. **[4]**

**4.** **(a)** Find ∫ 9x²/(2x³ + 7) dx. **[2]**
**(b)** Evaluate ∫ from 0 to 1 of 10/(4 − 3x) dx, giving the answer in the form k ln 2. **[3]**

**5.** **(a)** Show that ∫ from 0 to π/4 of tan x dx = ½ ln 2. **[3]**
**(b)** Find the exact value of ∫ from 0 to π/12 of sec² 3x dx. **[2]**

**6.** Find **(a)** ∫ 6 cos x sin⁵ x dx **[2]**
**(b)** ∫ x(3x² − 1)⁴ dx **[3]**
**(c)** ∫ e^(2x)/√(e^(2x) + 1) dx **[3]**

**7.** **(a)** Find ∫ cos² 2x dx. **[3]**
**(b)** Find the exact value of ∫ from 0 to π/2 of tan²(x/2) dx. **[3]**

**8.** Find ∫ (3 sin x + cos x)² dx. **[5]**

**9.** Region R lies between the x-axis and the curve y = 3e^(x/2) + 2/x, from x = 2 to x = 6. Find the exact area of R. **[5]**

**10.** **(a)** Show that 1/(1 + eˣ) = 1 − eˣ/(1 + eˣ). **[1]**
**(b)** Hence find the exact value of ∫ from 0 to ln 3 of 1/(1 + eˣ) dx. **[5]**

**11.** A particle moves in a straight line with velocity v = 6 cos²(2t) − 2e^(−t) metres per second at time t seconds. Find the exact displacement of the particle from t = 0 to t = π/4. **[6]**

## Answers

**1.** ∫ 3e^(−x/3) dx = 3 × e^(−x/3)/(−1/3) = −9e^(−x/3) [1]; ∫ 7 cos 4x dx = (7/4) sin 4x [1]; ∫ (2/(5x)) dx = (2/5) ln x, so the term is −(2/5) ln x [1]; **−9e^(−x/3) + (7/4) sin 4x − (2/5) ln x + c** [1]
*Examiner insight:* Each term is a separate piece of work, and a missing 1/k or a lost sign in one term is a separate slip. Writing the arbitrary constant matters: an indefinite integral without it is incomplete.

**2.** Antiderivative of 8 cos 2x is 4 sin 2x [1]; of −3 sin x is +3 cos x [1]; at π/4 the value is 4 + 3√2/2 and at 0 it is 3 [1]; **1 + 3√2/2** [1]
*Examiner insight:* Do not convert to decimals when the question asks for an exact value. Keep √2/2 and cos 0 = 1 as exact numbers so the final form is clean.

**3.** y = 4e^(2x) − 3 ln x + c [1], using ∫ 8e^(2x) dx = 4e^(2x) and ∫ 3/x dx = 3 ln x [1]; at (1, 2e²): 2e² = 4e² − 0 + c, so c = −2e² [1]; **y = 4e^(2x) − 3 ln x − 2e²** [1]
*Examiner insight:* Always substitute the given point into the integrated equation and solve for c, and state the final equation in full. Stopping at the value of c leaves the question unanswered.

**4. (a)** The derivative of 2x³ + 7 is 6x², and 9x² = (3/2) × 6x² [1]; **(3/2) ln|2x³ + 7| + c** [1]
**(b)** Antiderivative is −(10/3) ln|4 − 3x|, since the derivative of 4 − 3x is −3 [1]; substitute the limits: −(10/3)(ln 1 − ln 4) [1]; **(20/3) ln 2** [1]
*Examiner insight:* A negative coefficient of x reverses the sign of the logarithm term. Check by differentiating your result: the chain rule must return the numerator exactly.

**5. (a)** ∫ tan x dx = −ln|cos x| [1]; −ln(cos π/4) + ln(cos 0) = −ln(√2/2) + 0 [1]; −ln(√2/2) = ln(2/√2) = ln √2 = **½ ln 2** [1]
**(b)** (1/3) tan 3x [1]; (1/3) tan(π/4) − (1/3) tan 0 = **1/3** [1]
*Examiner insight:* A "show that" needs every intermediate step visible, including the line where the logarithm is simplified. Quoting the answer after the antiderivative gives no evidence of the simplification.

**6. (a)** f = sin x, f′ = cos x, so the integrand is 6 f′f⁵ [1]; **sin⁶ x + c** [1]
**(b)** f = 3x² − 1, f′ = 6x, so x(3x² − 1)⁴ = (1/6) f′f⁴ [1]; (1/6) × (3x² − 1)⁵/5 [1]; **(3x² − 1)⁵/30 + c** [1]
**(c)** f = e^(2x) + 1, f′ = 2e^(2x), so the integrand is ½ f′ f^(−1/2) [1]; ½ × f^(1/2)/(1/2) [1]; **√(e^(2x) + 1) + c** [1]
*Examiner insight:* Name f(x) and f′(x) explicitly, then adjust the constant. This makes your method clear to the reader, and differentiating the result will catch most slips.

**7. (a)** cos² 2x = ½(1 + cos 4x) [1]; ∫ cos 4x dx = (sin 4x)/4 [1]; **x/2 + (sin 4x)/8 + c** [1]
**(b)** tan²(x/2) = sec²(x/2) − 1 [1]; antiderivative 2 tan(x/2) − x [1]; at π/2: 2 − π/2, at 0: 0, so **2 − π/2** [1]
*Examiner insight:* Replace the squared function with the identity before integrating. A common slip is to integrate sec²(x/2) and forget the factor 2 from the half-angle.

**8.** Expand: 9 sin² x + 6 sin x cos x + cos² x = 1 + 8 sin² x + 3 sin 2x [1]; use sin² x = ½(1 − cos 2x) to get 5 − 4 cos 2x + 3 sin 2x [1]; ∫ (5 − 4 cos 2x) dx = 5x − 2 sin 2x [1]; ∫ 3 sin 2x dx = −(3/2) cos 2x [1]; **5x − 2 sin 2x − (3/2) cos 2x + c** [1]
*Examiner insight:* Expanding a bracket and simplifying with identities before integrating usually gives a shorter route than trying to integrate the square directly. Keep the working in stages so a slip in one identity does not lose the rest.

**9.** The curve is above the x-axis for 2 ≤ x ≤ 6, so Area = ∫ from 2 to 6 of (3e^(x/2) + 2/x) dx [1]; antiderivative 6e^(x/2) + 2 ln x [2]; substitute: (6e³ + 2 ln 6) − (6e + 2 ln 2) [1]; **6e³ − 6e + 2 ln 3** [1]
*Examiner insight:* State the integral for the area before evaluating it. Combine the logarithms with ln 6 − ln 2 = ln 3, since an exact answer should be fully simplified.

**10. (a)** 1 − eˣ/(1 + eˣ) = (1 + eˣ − eˣ)/(1 + eˣ) = **1/(1 + eˣ)** [1]
**(b)** ∫ [1 − eˣ/(1 + eˣ)] dx = x − ln(1 + eˣ) [2]; at ln 3: ln 3 − ln 4 [1]; at 0: 0 − ln 2 [1]; difference ln 3 − ln 4 + ln 2 = **ln(3/2)** [1]
*Examiner insight:* "Hence" tells you to use the result from the previous part, so the rewrite in part (a) is the route. A different method may not satisfy the instruction. The numerator eˣ is exactly the derivative of the denominator, which is why the second term integrates to a logarithm.

**11.** cos² 2t = ½(1 + cos 4t) [1]; ∫ 6 cos² 2t dt = 3t + (3/4) sin 4t [1]; ∫ −2e^(−t) dt = 2e^(−t) [1]; at π/4: 3π/4 + 0 + 2e^(−π/4) [1]; at 0: 0 + 0 + 2 [1]; displacement **3π/4 − 2 + 2e^(−π/4)** metres [1]
*Examiner insight:* Give units in a context question. Integrating velocity over the interval gives displacement, so leave the sign as calculated and keep the exact form requested.

## Where marks are usually lost

- Dropping the 1/k factor when integrating e^kx, sin kx or cos kx.
- Getting the sign wrong in the integral of sin kx, or in a logarithm when the coefficient of x is negative.
- Forgetting the arbitrary constant, or forgetting to use a point to find it.
- Applying the f′/f form when the numerator is not a constant multiple of f′.
- Not naming f(x) and f′(x) in a recognition question.
- Integrating a squared trigonometric function without an identity.
- Converting to decimals when an exact answer is requested, or leaving ln 4 where 2 ln 2 is clearer.
- Missing a step in a "show that" question.

## Next steps

- Read the [revision notes](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-revision-notes/) for quick recall.
- Revisit the [study guide](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/) for worked explanations.
- Go to the [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and tick items off the [printable checklist](/checklists/edexcel/a-level/mathematics/).
- Take any of the [free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited. These questions cover Unit P3 topics 5.1 and 5.2.
