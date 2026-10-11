---
title: "OxfordAQA International AS and A-level Mathematics: Integration by parts, partial fractions and volumes of revolution (9660) -- Practice Questions"
seoTitle: "OxfordAQA Maths 9660 Parts and Volumes Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by parts, partial fractions and volumes of revolution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 196
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-integration-oxfordaqa-alevel-maths"
description: "Original questions with worked answers on integration by parts, partial fractions and volumes of revolution, for OxfordAQA International A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section P2.7 (the second part of Integration) of the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*: integration by parts, partial fractions and volumes of revolution. This content is part of Unit P2 (Pure Maths) in the International A-level and is not examined at International AS.

Learn the methods first in the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of/) and the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes/). See also the [OxfordAQA A-level Mathematics course page](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). For other topics, try the [free 10-minute diagnostics](/diagnostics/). Leave answers exact unless the question asks for a decimal.

## Questions

**1.** Find ∫ x e^(4x) dx. **[3]**

**2.** **(a)** Differentiate x cos 4x with respect to x. **[2]**
**(b)** Hence find ∫ x sin 4x dx. **[3]**

**3.** Show that ∫ from 1 to 9 of (ln x)/√x dx = 12 ln 3 − 8. **[5]**

**4.** Show that ∫ from 0 to 1 of x² e^(−x) dx = 2 − 5/e. **[5]**

**5.** **(a)** Express (2x − 17)/((2x + 1)(x − 4)) in the form A/(2x + 1) + B/(x − 4), where A and B are constants. **[3]**
**(b)** Hence show that ∫ from 5 to 8 of (2x − 17)/((2x + 1)(x − 4)) dx = ln(289/484). **[4]**

**6.** Find the exact value of ∫ from 5 to 9 of (2x² − 3x + 3)/((x − 3)(x + 1)) dx, writing it as p + q ln 3 + r ln 5 with p, q and r constants to be stated. **[7]**

**7.** The region under the curve y = 1 + eˣ, between x = 0 and x = ln 3, is rotated through 360° about the x-axis. Show that the solid formed has volume π(8 + ln 3). **[4]**

**8.** The finite region S is enclosed by the curve y = 1 + √x, the y-axis and the line y = 3. S is rotated through 360° about the y-axis. Calculate the exact volume of the solid formed. **[4]**

**9.** The curve C has equation y = √(x ln x), for x ≥ 1. The finite region enclosed by C, the x-axis and the line x = e is rotated through 360° about the x-axis. Determine the exact volume of the solid generated. **[6]**

**10.** The region under the curve y = √(10/((x + 1)(x + 6))), between x = 0 and x = 4, is rotated through 360° about the x-axis. Show that the volume generated is 2π ln 3. **[7]**

**11.** A planter is made by rotating the part of the curve y = x⁴ (for x ≥ 0) with 0 ≤ y ≤ 16 through 360° about the y-axis. Lengths are in decimetres, so a volume in dm³ is a number of litres.
**(a)** Show that the volume of soil in the planter when the depth is h dm is (2π/3) h^(3/2) dm³. **[3]**
**(b)** Find the capacity of the planter, to the nearest litre. **[2]**
**(c)** Find the depth of soil when the planter is half full. Give your answer to 3 significant figures. **[2]**

## Answers

**1.** Take u = x and dv/dx = e^(4x), so v = ¼ e^(4x) [1]. Then ∫ x e^(4x) dx = ¼ x e^(4x) − ¼ ∫ e^(4x) dx [1]. This gives **¼ x e^(4x) − (1/16) e^(4x) + c**, which equals (4x − 1) e^(4x)/16 + c [1]. **[3]**
*Examiner insight:* State your choice of u and dv/dx. If the final line has a slip, a clear first step still shows the method.

**2. (a)** Product rule: d/dx(x cos 4x) = x(−4 sin 4x) + cos 4x [1]. This is **cos 4x − 4x sin 4x** [1].
**(b)** Integrate the result of (a): x cos 4x = ∫ cos 4x dx − 4 ∫ x sin 4x dx [1]. Rearranging, 4 ∫ x sin 4x dx = (1/4) sin 4x − x cos 4x [1]. So **∫ x sin 4x dx = (1/16) sin 4x − (1/4) x cos 4x + c** [1]. **[5]**
*Examiner insight:* When a question says "hence", use the earlier result. Starting afresh by parts may be valid, but it is slower and carries the risk of sign slips.

**3.** Write the integrand as ln x × x^(−1/2). Let u = ln x and v′ = x^(−1/2), so that v = 2√x [1]. Then ∫ (ln x)/√x dx = 2√x ln x − ∫ 2√x (1/x) dx [1]. The remaining integral is 2 ∫ x^(−1/2) dx = 4√x [1]. So the antiderivative is 2√x ln x − 4√x. At x = 9: 6 ln 9 − 12 = 12 ln 3 − 12, using ln 9 = 2 ln 3 [1]. At x = 1 the value is −4. Subtract: 12 ln 3 − 12 + 4 = **12 ln 3 − 8** [1]. **[5]**
*Examiner insight:* Where the result is printed, the working is what earns credit. Include both limit substitutions and the step ln 9 = 2 ln 3.

**4.** Take u = x² and dv/dx = e^(−x), so v = −e^(−x) [1]. Then ∫ x² e^(−x) dx = −x² e^(−x) + 2 ∫ x e^(−x) dx [1]. Second pass: ∫ x e^(−x) dx = −x e^(−x) − e^(−x) [1]. So the antiderivative is −e^(−x)(x² + 2x + 2) [1]. At 1 the value is −5e^(−1). At 0 it is −2. Subtract: −5/e + 2 = **2 − 5/e** [1]. **[5]**
*Examiner insight:* Differentiate your antiderivative as a check before substituting limits. It takes under a minute and catches sign errors.

**5. (a)** 2x − 17 = A(x − 4) + B(2x + 1) [1]. Put x = 4: −9 = 9B, so B = −1 [1]. Put x = −½: −18 = −4.5A, so A = 4 [1]. The result is **4/(2x + 1) − 1/(x − 4)**.
**(b)** ∫ [4/(2x + 1) − 1/(x − 4)] dx = 2 ln|2x + 1| − ln|x − 4| [2]. At 8: 2 ln 17 − ln 4. At 5: 2 ln 11 − ln 1 = 2 ln 11 [1]. Subtract and use the laws of logarithms: 2 ln 17 − ln 4 − 2 ln 11 = ln(289/(4 × 121)) = **ln(289/484)** [1]. **[7]**
*Examiner insight:* The 2 in 2 ln|2x + 1| comes from 4 × ½. Writing the integration rule next to your working helps you avoid dropping the factor.

**6.** Numerator and denominator are both quadratic, so start by dividing. The denominator expands to x² − 2x − 3 [1]. 2x² − 3x + 3 = 2(x² − 2x − 3) + (x + 9) [1]. Write (x + 9)/((x − 3)(x + 1)) = A/(x − 3) + B/(x + 1), so x + 9 = A(x + 1) + B(x − 3) [1]. Put x = 3: 12 = 4A, A = 3. Put x = −1: 8 = −4B, B = −2 [1]. Integrate: 2x + 3 ln|x − 3| − 2 ln|x + 1| [1]. At 9: 18 + 3 ln 6 − 2 ln 10. At 5: 10 + 3 ln 2 − 2 ln 6 [1]. Subtract: 8 + 5 ln 6 − 3 ln 2 − 2 ln 10. With ln 6 = ln 2 + ln 3 and ln 10 = ln 2 + ln 5, the result is **8 + 5 ln 3 − 2 ln 5**, so **p = 8, q = 5, r = −2** (about 10.3) [1]. **[7]**
*Examiner insight:* Convert to ln 3 and ln 5 only at the end. The ln 2 terms should cancel, which gives you a check on the arithmetic.

**7.** V = π ∫ (1 + eˣ)² dx, with (1 + eˣ)² = 1 + 2eˣ + e^(2x) [1]. The integral is x + 2eˣ + ½ e^(2x) [1]. At ln 3: ln 3 + 6 + 9/2 = ln 3 + 21/2. At 0: 0 + 2 + ½ = 5/2 [1]. Difference: ln 3 + 8, so **V = π(8 + ln 3)** [1]. **[4]**
*Examiner insight:* Expand the square before integrating. Writing y² as 1 + e^(2x) is the most common slip, and it gives a different answer.

**8.** Rearrange y = 1 + √x to give x = (y − 1)², so x² = (y − 1)⁴ [1]. The curve meets the y-axis at y = 1, so the limits are 1 and 3 [1]. V = π ∫ from 1 to 3 of (y − 1)⁴ dy = π [(y − 1)⁵/5] from 1 to 3 [1]. This is π(32/5) − 0, so **V = 32π/5** [1]. **[4]**
*Examiner insight:* For a rotation about the y-axis, use y-limits and write x² in terms of y before integrating. An integral in x would answer a different problem.

**9.** y² = x ln x. The curve meets the x-axis where ln x = 0, at x = 1, so the limits are 1 and e [1]. V = π ∫ from 1 to e of x ln x dx [1]. Take u = ln x, dv/dx = x, v = x²/2 [1]. Then ∫ x ln x dx = (x²/2) ln x − x²/4 [1]. At e: e²/2 − e²/4 = e²/4. At 1: −¼ [1]. **V = π(e² + 1)/4** [1]. **[6]**
*Examiner insight:* Squaring a square root removes it completely. Take the lower limit from the equation y = 0 and show that you have done so.

**10.** V = π ∫ y² dx, with y² = 10/((x + 1)(x + 6)) [1]. Write 10 = A(x + 6) + B(x + 1) [1]. Put x = −1: A = 2. Put x = −6: B = −2 [1]. So V = π ∫ from 0 to 4 of [2/(x + 1) − 2/(x + 6)] dx [1]. The integral is 2 ln|x + 1| − 2 ln|x + 6| = 2 ln|(x + 1)/(x + 6)| [1]. At 4: 2 ln(5/10) = 2 ln(½). At 0: 2 ln(1/6). Subtract: 2 ln(½ × 6) = 2 ln 3 [1]. So **V = 2π ln 3** [1]. **[7]**
*Examiner insight:* This question joins two skills. Show the squaring of y, the partial fractions and the limits as separate lines so each can be followed.

**11. (a)** y = x⁴ gives x² = y^(1/2). The volume to depth h is V = π ∫ from 0 to h of x² dy = π ∫ y^(1/2) dy [1] = π [(2/3) y^(3/2)] from 0 to h [1] = **(2π/3) h^(3/2)** [1].
**(b)** Put h = 16: 16^(3/2) = 64, so V = 128π/3 [1], which is about **134 litres** [1].
**(c)** Half the capacity is 64π/3. Then (2π/3) h^(3/2) = 64π/3, so h^(3/2) = 32 [1], and **h = 32^(2/3) ≈ 10.1 dm** [1]. **[7]**
*Examiner insight:* In part (c), work from the exact capacity rather than the rounded 134, so that the third significant figure is not disturbed.

## Where marks are usually lost

- Forgetting the minus sign in uv − ∫ v (du/dx) dx.
- Choosing u = eˣ or u = sin x in a product with x, which makes the new integral harder.
- Stopping after one pass when the integrand contains x².
- Omitting the factor 1/a when integrating 1/(ax + b).
- Skipping the division step when the numerator's degree equals the denominator's.
- Squaring only part of y, or forgetting to expand (1 + eˣ)² as a trinomial.
- Using x-limits for a rotation about the y-axis, or leaving the curve in terms of x.
- Substituting limits into only one term of the parts result.
- Rounding before the last line, and then losing the exact form that was asked for.

## Next steps

- Re-read the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes/) and redo any question you lost marks on.
- Return to the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of/) for the worked examples.
- Visit the [course page](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/).
- Try all the free 10-minute diagnostics at [/diagnostics/](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

*OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, published by OxfordAQA, for International AS exams from May/June 2018 and International A-level exams from May/June 2019. See section P2.7 (Integration).
