---
title: "OCR A Level Mathematics A: Integration basics: fundamental theorem, integrals and areas (H240) -- Practice Questions"
seoTitle: "OCR A Level Maths Integration Basics Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration basics: fundamental theorem, indefinite and definite integrals, areas and standard integrals"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 119
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Original practice questions with worked answers on indefinite and definite integrals, standard integrals and areas for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover integration basics in OCR A Level Mathematics A (H240), content references 1.08a to 1.08f of the OCR specification, Version 3.1 (August 2026). References 1.08a, 1.08b, 1.08d and 1.08e are Stage 1, common to AS and A Level. Standard integrals of e^kx, 1/x, sin kx and cos kx (1.08c), and areas between curves, against the y-axis or for parametric curves (1.08f), are A Level only and are labelled. The marks shown are our own guide to the size of each step. Start with the [study guide](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and/) if a topic is unfamiliar. The [revision notes](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes/) recap each method. Related links: the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/), the [Pure Mathematics practice set](/resources/ocr-a-level-mathematics-pure-practice/) and the [free diagnostics](/diagnostics/).

## Questions

**1.** Find each integral. Show your working by hand.

**(a)** ∫ (15√x - 8/x³ + 4) dx **[3]**
**(b)** ∫ (8e^(4x) - 6/x + 10 sin 5x) dx (A Level only) **[3]**

**2.** A curve has gradient dy/dx = 6x² - 5/x² and passes through the point (1, 9). Find the equation of the curve. **[4]**

**3.** **(a)** Differentiate x sin 3x with respect to x. **[2]**
**(b)** Hence show that ∫₀^(π/6) x cos 3x dx = π/18 - 1/9. **[3]**

**4.** **(a)** Write sin² 2x in terms of cos 4x. **[1]**
**(b)** Hence find the exact value of ∫₀^(π/8) 12 sin² 2x dx. (A Level only) **[3]**

**5.** Find the exact value of ∫₁⁴ (6/√x + 5/x) dx, giving your answer in the form a + b ln 2. (A Level only) **[4]**

**6.** Given that k > 0 and ∫₀^k 4e^(2x) dx = 30, find the exact value of k. (A Level only) **[3]**

**7.** The curve C has equation y = x(x - 1)(x - 4).

**(a)** Show that y = x³ - 5x² + 4x. **[1]**
**(b)** Evaluate ∫₀⁴ y dx and explain why the answer is not the area enclosed by C and the x-axis for 0 ≤ x ≤ 4. **[2]**
**(c)** Find that area. **[3]**

**8.** (A Level only) The curve with parametric equations x = 4 cos t, y = 3 sin t, for 0 ≤ t ≤ π/2, meets the axes at (4, 0) and (0, 3). Show that the area enclosed by the curve and the two axes is 3π. **[5]**

**9.** (A Level only) The curve y = 1/x and the line y = 5/2 - x intersect at two points.

**(a)** Find the coordinates of the points of intersection. **[2]**
**(b)** Find the exact area of the region between the curve and the line. **[4]**

**10.** (A Level only) The curves y = 3eˣ and y = e^(2x) + 2 intersect at two points A and B.

**(a)** Show that the x-coordinates of A and B satisfy (eˣ - 1)(eˣ - 2) = 0, and find them. **[3]**
**(b)** Calculate the exact area bounded by the two curves. **[4]**

## Answers

**1. (a)** Rewrite as 15x^(1/2) - 8x⁻³ + 4.
15x^(1/2) integrates to 10x^(3/2) [1]; -8x⁻³ integrates to 4x⁻² [1]; 4 integrates to 4x, and add c [1].
**10x^(3/2) + 4/x² + 4x + c** **[3]**
**(b)** 8e^(4x) → 2e^(4x) [1]; -6/x → -6 ln\|x\| [1]; 10 sin 5x → -2 cos 5x, with c [1].
**2e^(4x) - 6 ln\|x\| - 2 cos 5x + c** **[3]**
*Examiner insight:* Work term by term and check each answer by differentiating it; the divisor 1/k and the minus sign for sin are the usual slips.

**2.** y = ∫ (6x² - 5x⁻²) dx [1] = 2x³ + 5x⁻¹ + c [1].
Use (1, 9): 2 + 5 + c = 9, so c = 2 [1].
**y = 2x³ + 5/x + 2** [1] **[4]**
*Examiner insight:* A question that gives a point is asking for c, so a final line without it will be incomplete however neat the integration is.

**3. (a)** Product rule: d/dx (x sin 3x) = sin 3x + x × 3 cos 3x [1] = **sin 3x + 3x cos 3x** [1] **[2]**
**(b)** Integrate part (a): x sin 3x = -(1/3) cos 3x + 3∫ x cos 3x dx, so ∫ x cos 3x dx = (1/3) x sin 3x + (1/9) cos 3x [1].
Limits: at π/6, (π/6)(1/3)(1) + 0 = π/18 [1]; at 0, 0 + 1/9 = 1/9.
Subtract: **π/18 - 1/9** [1] **[3]**
*Examiner insight:* On "hence" and "show that" questions, use the result from part (a) openly and write each line down, because the final value is given, so the working is what shows you have reached it.

**4. (a)** cos 4x = 1 - 2 sin² 2x, so **sin² 2x = (1 - cos 4x)/2** [1] **[1]**
**(b)** 12 sin² 2x = 6(1 - cos 4x), with antiderivative 6x - (3/2) sin 4x [1].
At π/8: 6π/8 - (3/2) sin(π/2) = 3π/4 - 3/2 [1]; at 0 the value is 0.
**3π/4 - 3/2** [1] **[3]**
*Examiner insight:* Dividing by 4 when integrating cos 4x is the step most often dropped, and a decimal in place of the exact form will not match what the question asks for.

**5.** 6x^(-1/2) → 12x^(1/2) [1]; 5/x → 5 ln x [1].
Upper limit: 24 + 5 ln 4; lower limit: 12 + 0 [1].
Difference: 12 + 5 ln 4 = **12 + 10 ln 2** (using ln 4 = 2 ln 2) [1] **[4]**
*Examiner insight:* "In the form a + b ln 2" tells you to simplify ln 4, so leave no ln 4 in the final line.

**6.** [2e^(2x)]₀^k [1]. 2e^(2k) - 2 = 30, so e^(2k) = 16 [1].
2k = ln 16, so **k = ln 4** (equivalently 2 ln 2) [1] **[3]**
*Examiner insight:* An equation with an unknown limit is solved after the integral is evaluated; taking logarithms at the right moment keeps the answer exact.

**7. (a)** x(x - 1)(x - 4) = x(x² - 5x + 4) = **x³ - 5x² + 4x** [1] **[1]**
**(b)** ∫₀⁴ y dx = [x⁴/4 - 5x³/3 + 2x²]₀⁴ = 64 - 320/3 + 32 [1] = **-32/3**.
It is negative because the part of C below the axis (1 < x < 4) is larger than the part above, so the two parts partly cancel [1] **[2]**
**(c)** Roots at 0, 1, 4: split at x = 1 [1].
∫₀¹ y dx = 1/4 - 5/3 + 2 = 7/12; ∫₁⁴ y dx = -32/3 - 7/12 = -45/4 [1].
Area = 7/12 + 45/4 = **71/6** [1] **[3]**
*Examiner insight:* Whenever a curve crosses the axis inside the limits, a single integral gives a net value; treat each piece separately and add the positive sizes.

**8.** The curve runs from (4, 0) at t = 0 to (0, 3) at t = π/2, so x goes from 4 down to 0. Area = ∫ y dx over x from 0 to 4 [1].
dx/dt = -4 sin t, so area = ∫ from t = π/2 to 0 of 3 sin t × (-4 sin t) dt = ∫₀^(π/2) 12 sin² t dt [1] (reversing the limits removes the minus sign).
sin² t = (1 - cos 2t)/2, so the integrand is 6(1 - cos 2t) [1].
[6t - 3 sin 2t]₀^(π/2) [1] = 3π - 0 = **3π** [1] **[5]**
*Examiner insight:* For a parametric area, convert the limits to t and check the direction of travel; a wrong sign here is easy to hide, so state how it resolves.

**9. (a)** 1/x = 5/2 - x gives 2x² - 5x + 2 = 0 [1], so (2x - 1)(x - 2) = 0 and the points are **(1/2, 2) and (2, 1/2)** [1] **[2]**
**(b)** At x = 1 the line (3/2) is above the curve (1), so area = ∫ from 1/2 to 2 of (5/2 - x - 1/x) dx [1].
Antiderivative: 5x/2 - x²/2 - ln x [1].
At 2: 5 - 2 - ln 2 = 3 - ln 2. At 1/2: 5/4 - 1/8 - ln(1/2) = 9/8 + ln 2 [1].
Area = 3 - ln 2 - 9/8 - ln 2 = **15/8 - 2 ln 2** [1] **[4]**
*Examiner insight:* Test a value between the limits to choose the upper curve, and remember ln(1/2) = -ln 2 so that the two logarithms combine.

**10. (a)** 3eˣ = e^(2x) + 2 gives e^(2x) - 3eˣ + 2 = 0 [1], which factorises as (eˣ - 1)(eˣ - 2) = 0 [1]. So eˣ = 1 or 2, giving **x = 0 and x = ln 2** [1] **[3]**
**(b)** At eˣ = 3/2 the curve y = 3eˣ gives 9/2 and the other gives 17/4, so 3eˣ is above [1].
Area = ∫₀^(ln 2) (3eˣ - e^(2x) - 2) dx [1] = [3eˣ - e^(2x)/2 - 2x]₀^(ln 2) [1].
= (6 - 2 - 2 ln 2) - (3 - 1/2) = **3/2 - 2 ln 2** [1] **[4]**
*Examiner insight:* Using e^(2 ln 2) = 4 and eˣ = 2 at x = ln 2 keeps everything exact; show those two substitutions rather than going straight to the final line.

## Where marks are usually lost

- Forgetting +c in an indefinite integral, or not using the given point to find it.
- Multiplying instead of dividing by k when integrating e^(kx), sin kx or cos kx.
- Missing the minus sign when integrating sin kx.
- Failing to expand or rewrite the integrand before integrating.
- Writing a decimal where an exact value or a stated form was asked for.
- Treating a net integral as an area when the curve crosses the axis.
- Choosing the lower curve as the upper one, or ignoring a crossing between the limits.
- Substituting x-limits into an integral already written in terms of t.
- Writing ln of a negative number instead of ln\|x\|.

## Next steps

- Recap the methods in the [revision notes](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes/) or re-read the [study guide](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and/).
- See the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) and tick items off the [checklist](/checklists/ocr/a-level/mathematics/).
- Take one of the [free 10-minute diagnostics](/diagnostics/) to find your next weak spot.
- [Book a free trial class](/trial/) if you would like help with this topic.

## Official syllabus

These questions follow content references 1.08a to 1.08f of the OCR A Level in Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR.
