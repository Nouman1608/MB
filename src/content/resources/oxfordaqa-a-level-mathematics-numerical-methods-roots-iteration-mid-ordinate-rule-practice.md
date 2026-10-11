---
title: "OxfordAQA International AS and A-level Mathematics: Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule (9660) -- Practice Questions"
seoTitle: "OxfordAQA 9660 Numerical Methods Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 198
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-numerical-methods-oxfordaqa-alevel-maths"
description: "Original practice questions with worked answers on P2.9 numerical methods for OxfordAQA International A-level Maths 9660: roots, iteration and integration."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section P2.9 (Numerical methods) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. Learn the methods from the [study guide](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule/) and [revision notes](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-revision-notes/). Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/). Unit P2 is a calculator-allowed unit, so use one, but show your working.

## Questions

**1.** Show that the equation x⁴ + 3x − 9 = 0 has a root between x = 1.4 and x = 1.5. **[3]**

**2.** Let f(x) = 1/(x² − 4). A student finds f(1) = −1/3 and f(3) = 1/5 and concludes that f(x) = 0 has a root between 1 and 3.

**(a)** Calculate f(1) and f(3) to confirm the student's values. **[1]**
**(b)** Explain why the conclusion is wrong, and show that f(x) = 0 has no solution at all. **[2]**

**3.** Show that the root of x⁵ + x − 12 = 0 is 1.60 correct to 2 decimal places. **[3]**

**4.** The equation x³ + 5x − 8 = 0 has one real root, α.

**(a)** Show that the equation can be rearranged to x = (8 − x³)/5. **[1]**
**(b)** Use xₙ₊₁ = (8 − xₙ³)/5 with x₁ = 1 to find x₂, x₃ and x₄, giving x₄ to 3 decimal places. **[2]**
**(c)** A second rearrangement is xₙ₊₁ = ∛(8 − 5xₙ). For this g, g′(α) ≈ −1.10. Explain what this tells you about using it to find α. **[2]**

**5.** A sequence is defined by xₙ₊₁ = 6/(xₙ + 1) with x₁ = 1.

**(a)** Find x₂, x₃ and x₄. **[2]**
**(b)** The sequence converges to a limit α. Show that α² + α − 6 = 0 and find α. **[2]**
**(c)** Find g′(α) for g(x) = 6/(x + 1), and say whether the diagram is a staircase or a cobweb. **[2]**

**6.** Let y = √(x³ + 1).

**(a)** Use the mid-ordinate rule with 4 strips to estimate ∫₀² y dx, giving your answer to 3 decimal places. **[4]**
**(b)** The value of the integral is 3.2413 to 4 decimal places. The curve is convex for 0 < x ≤ 2. Explain, using the geometry of the rule, why your estimate is below this value. **[2]**

**7.** **(a)** Use Simpson's rule with 4 strips to estimate ∫₀² √(x³ + 1) dx, giving your answer to 3 decimal places. **[4]**
**(b)** Explain why Simpson's rule cannot be used with 3 strips. **[1]**

**8.** Water flows into a tank at a rate r litres per minute. Readings are taken every 2 minutes.

| t (minutes) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| r | 3.2 | 4.1 | 5.6 | 5.0 | 3.8 |

Use Simpson's rule to estimate the total volume of water that flows in during the 8 minutes. **[4]**

**9.** Consider ∫₁⁴ 1/x² dx, whose exact value is 3/4.

**(a)** Use the mid-ordinate rule with 3 strips to estimate the integral to 3 decimal places. **[3]**
**(b)** Explain, using a tangent at a midpoint, why your answer is lower than 3/4. **[1]**
**(c)** Use 6 strips to improve the estimate, giving your answer to 3 decimal places. **[2]**

**10.** **(a)** Use Simpson's rule with 2 strips to estimate ∫₁³ ln x dx, giving your answer to 4 decimal places. **[3]**
**(b)** Repeat with 4 strips. **[3]**
**(c)** The exact value of the integral is 1.2958 to 4 decimal places. Comment on what the two estimates show. **[1]**

**11.** The curve C has equation y = 4/(1 + x²). The line y = x meets C at the point where x = α.

**(a)** Show that α satisfies x³ + x − 4 = 0, and that 1.3 < α < 1.4. **[3]**
**(b)** Use xₙ₊₁ = ∛(4 − xₙ) with x₁ = 1 to find α correct to 3 decimal places. **[4]**
**(c)** The region R is bounded by C, the line y = x and the y-axis. Use Simpson's rule with 4 strips on ∫₀^1.4 y dx, and use 1.4 as the upper limit in place of α, to estimate the area of R to 2 decimal places. **[4]**

## Answers

**1.** Let f(x) = x⁴ + 3x − 9. f(1.4) = 3.8416 + 4.2 − 9 = −0.9584 [1]. f(1.5) = 5.0625 + 4.5 − 9 = 0.5625 [1]. f is continuous (polynomial) and the sign changes, so a root lies between 1.4 and 1.5 [1]. **[3]**
*Examiner insight:* Give both values, the sign change and a word on continuity; a bare "yes" with no values shows nothing.

**2. (a)** f(1) = 1/(1 − 4) = −1/3 and f(3) = 1/(9 − 4) = 1/5 [1].
**(b)** f is not continuous at x = 2, where x² − 4 = 0, and 2 lies between 1 and 3, so the sign change comes from a jump, not a crossing [1]. A fraction 1/(x² − 4) with numerator 1 is never zero, so f(x) = 0 has no solution [1]. **[3]**
*Examiner insight:* A critique must name the failed condition (continuity) and the location (x = 2); "the test is unreliable" is too vague to gain credit.

**3.** Let f(x) = x⁵ + x − 12. f(1.595) = −0.0821 [1]. f(1.605) = 0.2556 [1]. f is continuous and changes sign, so the root is in (1.595, 1.605) and equals 1.60 to 2 d.p. [1]. **[3]**
*Examiner insight:* Testing 1.6 alone shows nothing about rounding; the two bounds that round to 1.60 are what justify the decimal places.

**4. (a)** x³ + 5x − 8 = 0 gives 5x = 8 − x³, so x = (8 − x³)/5 [1].
**(b)** x₂ = (8 − 1)/5 = 1.4 [1]. x₃ = (8 − 2.744)/5 = 1.0512 and x₄ = (8 − 1.1616)/5 = 1.3677, so **x₄ = 1.368** [1].
**(c)** |g′(α)| ≈ 1.10 > 1 [1], so the iteration does not converge: the cobweb spirals outwards, and this rearrangement cannot be used to find α [1]. **[5]**
*Examiner insight:* Write the value of g′(α) beside the comparison with 1 (or −1); a statement of "diverges" with no reason is unsupported.

**5. (a)** x₂ = 6/2 = 3 [1]; x₃ = 6/4 = 1.5 and x₄ = 6/2.5 = 2.4 [1].
**(b)** At the limit α = 6/(α + 1), so α² + α = 6, giving α² + α − 6 = 0 [1]. (α + 3)(α − 2) = 0. The terms are positive, so **α = 2** [1].
**(c)** g′(x) = −6/(x + 1)², so g′(2) = −6/9 = **−2/3** [1]. It lies between −1 and 0, so the iteration converges as a **cobweb** spiralling inwards [1]. **[6]**
*Examiner insight:* Reject the second root of the quadratic with a reason (the iterates are all positive), not silently.

**6. (a)** h = 2/4 = 0.5 and the midpoints are 0.25, 0.75, 1.25, 1.75 [1]. Heights: 1.0078, 1.1924, 1.7185, 2.5218 [1]. Sum = 6.4405, so estimate = 0.5 × 6.4405 [1] = **3.220** [1].
**(b)** On each strip the rectangle has the same area as the trapezium under the tangent at the midpoint [1]. The curve is convex, so the tangent lies below it and each strip is underestimated: 3.220 < 3.2413 [1]. **[6]**
*Examiner insight:* Show the table of midpoint heights; a slip in one value is then easy to locate, and the explanation needs "tangent below the curve", not just "convex".

**7. (a)** h = 0.5; ordinates at x = 0, 0.5, 1, 1.5, 2 are 1, 1.0607, 1.4142, 2.0917, 3 [1]. Weights: ends once, odd positions ×4, even interior ×2 [1]. (0.5/3)[1 + 3 + 4(1.0607 + 2.0917) + 2(1.4142)] [1] = **3.240** [1].
**(b)** Simpson's rule needs an even number of strips (an odd number of ordinates) [1]. **[5]**
*Examiner insight:* Keep at least four decimal places in the ordinates; rounding them to 2 d.p. can shift the third decimal place of the answer.

**8.** h = 2 [1]. Volume ≈ (2/3)[3.2 + 3.8 + 4(4.1 + 5.0) + 2(5.6)] [1] = (2/3)(54.6) [1] = **36.4 litres** [1]. **[4]**
*Examiner insight:* The integral of a rate is an amount, so state the unit; the answer is the area under the r–t graph, not an average rate.

**9. (a)** h = 1 and the midpoints are 1.5, 2.5, 3.5 [1]. Heights 0.4444, 0.16, 0.0816 [1]. Sum × h = **0.686** [1].
**(b)** The curve is convex, so the tangent at each midpoint lies below the curve and the rule underestimates [1].
**(c)** h = 0.5, midpoints 1.25, 1.75, 2.25, 2.75, 3.25, 3.75 [1]. Estimate = 0.5 × (0.64 + 0.3265 + 0.1975 + 0.1322 + 0.0947 + 0.0711) = **0.731** [1]. **[6]**
*Examiner insight:* A statement that more strips improve the estimate is best backed by the numbers: 0.686 and 0.731 move towards 0.75.

**10. (a)** h = 1; ordinates ln 1 = 0, ln 2 = 0.6931, ln 3 = 1.0986 [1]. (1/3)[0 + 1.0986 + 4(0.6931)] [1] = **1.2904** [1].
**(b)** h = 0.5; ordinates 0, 0.4055, 0.6931, 0.9163, 1.0986 [1]. (0.5/3)[0 + 1.0986 + 4(0.4055 + 0.9163) + 2(0.6931)] [1] = **1.2953** [1].
**(c)** The errors are about 0.0054 and 0.0005, so doubling the strips gave a much closer value [1]. **[7]**
*Examiner insight:* A comparison needs a quantity (the size of each error); "the second is better" alone says little.

**11. (a)** The curves meet where 4/(1 + x²) = x, so 4 = x + x³ and x³ + x − 4 = 0 [1]. Let f(x) = x³ + x − 4: f(1.3) = −0.503 and f(1.4) = 0.144 [1]. f is continuous and changes sign, so 1.3 < α < 1.4 [1].
**(b)** x³ = 4 − x gives x = ∛(4 − x) [1]. x₂ = 1.4422 and x₃ = 1.3676 [1]. x₄ = 1.3808, x₅ = 1.3785, x₆ = 1.3789 [1]. x₇ = 1.3788 so **α = 1.379** [1].
**(c)** h = 1.4/4 = 0.35; ordinates 4, 3.5635, 2.6846, 1.9025, 1.3514 [1]. (0.35/3)[4 + 1.3514 + 4(3.5635 + 1.9025) + 2(2.6846)] = 3.8015 [1]. Area under the line to 1.4 is ½ × 1.4² = 0.98 [1]. Area of R ≈ 3.8015 − 0.98 = **2.82** [1]. **[11]**
*Examiner insight:* Carry unrounded values through an iteration, and when a question substitutes a convenient limit (here 1.4 for α) say so, so the answer is read as an estimate.

## Where marks are usually lost

- Writing "sign change, so root" without continuity, or accepting a sign change across an asymptote.
- Testing only the rounded value when asked to justify a number of decimal places.
- Rounding iterates early, so the final values drift.
- Quoting convergence from the value of g′ at the wrong point, or without comparing with 1.
- Using the strip edges as the heights in the mid-ordinate rule.
- Applying Simpson's rule to an odd number of strips, or mixing up the 4 and 2.
- Forgetting the factor h/3 in Simpson's rule, or h in the mid-ordinate rule.
- Giving an answer to the wrong number of decimal places or without units.
- Calling an estimate an over- or underestimate with no geometric reason.

## Next steps

- Re-read the [revision notes](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-revision-notes/) and the [study guide](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule/).
- Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. This content is listed under P2.9 in International A-level Unit P2 (Pure Maths).
