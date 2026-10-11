---
title: "OCR A Level Mathematics A: Techniques of integration, parts and partial fractions (H240) -- Practice Questions"
seoTitle: "OCR A Level Maths Integration Techniques Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Techniques of integration: reverse chain rule, parts, substitution, partial fractions and the trapezium rule"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 120
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Eleven original questions with worked answers on limits of sums, trapezium rule, substitution, parts and partial fractions for OCR A Level Maths A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover integration techniques for OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026): content statements 1.08g to 1.08j and 1.09f. All are Stage 2 content, so they are **A Level only**. Learn the methods first from the [study guide](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts/) and [revision notes](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-revision-notes/). The wider course is on the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), and the [printable checklist](/checklists/ocr/a-level/mathematics/) lists every skill. Marks in bold brackets and the mark splits in the answers are Marlbridge's own. Keep exact values unless a question asks for a decimal.

## Questions

**1.**

**(a)** Find ∫ 12x³(x⁴ + 5)² dx. **[2]**
**(b)** Find ∫ (6x + 3)/(x² + x + 7) dx. **[2]**
**(c)** Show that ∫₀^(π/3) tan x dx = ln 2. **[3]**

**2.** The function f(x) = 12/(x + 2) is used to model a decreasing quantity for 0 ≤ x ≤ 4.

**(a)** Use four rectangles of equal width to find an upper bound and a lower bound for ∫₀⁴ f(x) dx. **[3]**
**(b)** Use the trapezium rule with four strips to estimate the integral. **[2]**
**(c)** Without finding the exact value, say whether your answer to (b) is an overestimate or an underestimate, giving a reason. **[1]**

**3.**

**(a)** The area under y = 3x + 2 from x = 0 to x = 2 is split into n rectangles of equal width, with heights taken at the right-hand edge of each strip. Show that the total area of the rectangles is 10 + 6/n. **[3]**
**(b)** Hence state the area under the line. **[1]**
**(c)** Write lim (δx→0) Σ (x = 1 to 9) (x^(−1/2) + 2) δx as a definite integral and evaluate it. **[3]**

**4.** Use the substitution u = 2x − 1 to show that ∫₁⁵ 4x/(2x − 1)² dx = ln 9 + 8/9. **[5]**

**5.** Use the substitution x = 3 sin θ to show that ∫₀^(3/2) x²/√(9 − x²) dx = 3π/4 − 9√3/8. **[6]**

**6.** Evaluate ∫₀^(π/3) x sin 3x dx, giving an exact answer. **[4]**

**7.** Find ∫ x² e^(−2x) dx. **[5]**

**8.** Show that ∫₁⁴ √x ln x dx = (32/3) ln 2 − 28/9. **[5]**

**9.** Express (8x − 3)/(x(2x + 1)(x − 3)) in partial fractions, and hence show that ∫₄⁶ (8x − 3)/(x(2x + 1)(x − 3)) dx = ln(729/338). **[7]**

**10.** Given that (3x + 6)/((2x + 1)(x − 1)²) = A/(2x + 1) + B/(x − 1) + C/(x − 1)², find A, B and C, and hence find the exact value of ∫₂⁵ (3x + 6)/((2x + 1)(x − 1)²) dx. **[6]**

**11.** Use the substitution u = √x, followed by integration by parts, to show that ∫₀⁴ e^(√x) dx = 2(e² + 1). **[6]**

## Answers

**1. (a)** Let f(x) = x⁴ + 5, so f'(x) = 4x³ and 12x³ = 3f'(x). [1]
∫ = 3 × (x⁴ + 5)³/3 = **(x⁴ + 5)³ + c** [1]
**(b)** 6x + 3 = 3(2x + 1), and 2x + 1 is the derivative of the denominator. [1]
∫ = **3 ln(x² + x + 7) + c** (the denominator is always positive, so the modulus is optional) [1]
**(c)** tan x = sin x/cos x, so ∫ tan x dx = −ln|cos x|. [1]
[−ln(cos x)]₀^(π/3) = −ln(½) + ln 1 [1]
= ln 2 (since −ln(½) = ln 2) [1]
*Examiner insight:* Part (c) is a "show that", so write the antiderivative, substitute both limits, and name the log law you use. Skipping straight to ln 2 leaves little to credit.

**2. (a)** Ordinates at x = 0, 1, 2, 3, 4: 6, 4, 3, 2.4, 2. [1]
Upper bound (left edges, decreasing function): 6 + 4 + 3 + 2.4 = **15.4** [1]
Lower bound (right edges): 4 + 3 + 2.4 + 2 = **11.4** [1]
**(b)** ½[6 + 2 + 2(4 + 3 + 2.4)] [1] = **13.4** [1]
**(c)** The curve is convex (it bends upwards), so the trapezia lie above it: **overestimate**. [1]
*Examiner insight:* Say which edge of each rectangle you used. A bound with no reasoning about the direction of the function is hard to credit, even when the numbers are right.

**3. (a)** Width 2/n; right-edge heights 3(2r/n) + 2 = 6r/n + 2. [1]
Sum = (2/n) Σ (6r/n + 2) = (2/n)[(6/n)(n(n + 1)/2) + 2n] [1]
= (2/n)(3n + 3 + 2n) = (2/n)(5n + 3) = 10 + 6/n [1]
**(b)** As n → ∞, 6/n → 0, so the area is **10**. [1]
**(c)** The limit is ∫₁⁹ (x^(−1/2) + 2) dx. [1]
= [2√x + 2x]₁⁹ [1]
= (6 + 18) − (2 + 2) = **20** [1]
*Examiner insight:* In (a), use Σr = n(n + 1)/2 explicitly and simplify to the required form. In (c), the limits of the integral come from the first and last values of x in the sum.

**4.** u = 2x − 1 gives x = (u + 1)/2 and dx = du/2. [1]
When x = 1, u = 1; when x = 5, u = 9. [1]
Integrand: 4 × ((u + 1)/2) × (1/2) ÷ u² = (u + 1)/u² = 1/u + 1/u². [1]
∫₁⁹ (1/u + 1/u²) du = [ln u − 1/u]₁⁹ [1]
= (ln 9 − 1/9) − (0 − 1) = **ln 9 + 8/9** [1]
*Examiner insight:* Because the answer is given, every conversion (x, dx, limits) needs to be visible. Leaving the original limits in place is a common way to lose the later marks.

**5.** dx = 3 cos θ dθ. [1]
√(9 − 9 sin²θ) = 3 cos θ, for θ in the range used. [1]
Integrand becomes 9 sin²θ dθ. [1]
Limits: x = 0 → θ = 0; x = 3/2 → sin θ = ½, θ = π/6. [1]
9 sin²θ = (9/2)(1 − cos 2θ), so ∫ = (9/2)[θ − ½ sin 2θ]₀^(π/6) [1]
= (9/2)(π/6 − √3/4) = **3π/4 − 9√3/8** [1]
*Examiner insight:* State the double-angle identity you use for sin²θ. Quote the exact values of sin(π/3) and the limits in radians so the surds can be checked.

**6.** u = x, dv/dx = sin 3x, so du/dx = 1 and v = −(1/3) cos 3x. [1]
∫ = [−(x/3) cos 3x] + ∫ (1/3) cos 3x dx [1]
= [−(x/3) cos 3x + (1/9) sin 3x]₀^(π/3) [1]
At π/3: cos π = −1, sin π = 0, giving π/9; at 0 the value is 0. Answer **π/9**. [1]
*Examiner insight:* Put the limits into the uv term as well as the remaining integral. Check that 3x gives a factor 1/3 each time you integrate.

**7.** First application: u = x², dv/dx = e^(−2x), v = −½e^(−2x). [1]
∫ = −½x²e^(−2x) + ∫ x e^(−2x) dx [1]
Second: u = x, v = −½e^(−2x): ∫ x e^(−2x) dx = −½x e^(−2x) + ∫ ½e^(−2x) dx [1]
= −½x e^(−2x) − ¼e^(−2x) [1]
Total: **−¼e^(−2x)(2x² + 2x + 1) + c** [1]
*Examiner insight:* Differentiating your answer is a quick way to catch a sign slip. Keep the minus sign with the second integral in brackets when you substitute back.

**8.** u = ln x, dv/dx = x^(1/2). [1]
du/dx = 1/x and v = (2/3)x^(3/2). [1]
∫ = [(2/3)x^(3/2) ln x] − ∫ (2/3)x^(1/2) dx [1]
= [(2/3)x^(3/2) ln x − (4/9)x^(3/2)]₁⁴ [1]
At 4: (16/3) ln 4 − 32/9 = (32/3) ln 2 − 32/9; at 1: −4/9. Difference: **(32/3) ln 2 − 28/9** [1]
*Examiner insight:* Write ln 4 as 2 ln 2 explicitly, since the target form has ln 2. Put the 1/x cancellation in the working.

**9.** Write A/x + B/(2x + 1) + C/(x − 3), so 8x − 3 = A(2x + 1)(x − 3) + Bx(x − 3) + Cx(2x + 1). [1]
x = 0: −3 = −3A, so A = 1. [1]
x = 3: 21 = 21C, so C = 1. [1]
x = −½: −7 = (7/4)B, so B = −4. [1]
So the fraction is 1/x − 4/(2x + 1) + 1/(x − 3).
∫ = ln x − 2 ln(2x + 1) + ln(x − 3) (all arguments are positive on [4, 6]) [1]
At 6: ln 6 − 2 ln 13 + ln 3; at 4: ln 4 − 2 ln 9 + ln 1. [1]
Difference = ln(18/169) − ln(4/81) = ln(1458/676) = **ln(729/338)** [1]
*Examiner insight:* Write the identity for 8x − 3 before substituting values. Combine the logs into one term only after both limits are in.

**10.** 3x + 6 = A(x − 1)² + B(2x + 1)(x − 1) + C(2x + 1). [1]
x = 1: 9 = 3C, so C = 3. [1]
x = −½: 4.5 = (9/4)A, so A = 2. [1]
x² terms: 0 = A + 2B, so B = −1. [1]
∫ = [ln(2x + 1) − ln(x − 1) − 3/(x − 1)]₂⁵ [1]
= (ln 11 − ln 4 − ¾) − (ln 5 − 0 − 3) = **ln(11/20) + 9/4** [1]
*Examiner insight:* The term 2/(2x + 1) integrates to ln(2x + 1), not 2 ln(2x + 1). Check the constants by substituting another value, such as x = 0.

**11.** u = √x gives x = u² and dx = 2u du. [1]
When x = 0, u = 0; when x = 4, u = 2. [1]
Integral becomes ∫₀² 2u e^u du. [1]
By parts with U = 2u and dV/du = e^u: [2u e^u]₀² − ∫₀² 2e^u du [1]
= [2u e^u − 2e^u]₀² [1]
= (4e² − 2e²) − (0 − 2) = **2e² + 2 = 2(e² + 1)** [1]
*Examiner insight:* Using different letters for the parts (U and V here) avoids confusing them with the substitution variable u. Keep the limits in u throughout.

## Where marks are usually lost

- Not changing the limits after a substitution, or substituting back and keeping the old limits as well.
- Leaving x in the integrand after replacing dx.
- Stopping at "= ln 2" or similar on a "show that" without every intermediate line.
- Forgetting the minus sign when integrating e^(−2x) or sin 3x, or the factor 1/3 or 1/2.
- Choosing u = eˣ or u = sin x when a power of x is available.
- Not applying the limits to the uv term in a definite integral by parts.
- Mixing up upper and lower rectangle sums on a decreasing function.
- Stating "overestimate" for the trapezium rule without linking it to the shape of the curve.
- Writing 2 ln|2x + 1| for ∫ 2/(2x + 1) dx, or forgetting to divide by the coefficient of x.

## Next steps

- Memorise the methods in the [revision notes](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-revision-notes/) and reread the [study guide](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts/).
- Check coverage on the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) and the [printable checklist](/checklists/ocr/a-level/mathematics/).
- Take one of the [free 10-minute diagnostics](/diagnostics/) to find your weakest topic.
- [Book a free trial class](/trial/) for help with any method here.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018. Content statements 1.08g, 1.08h, 1.08i, 1.08j and 1.09f.
