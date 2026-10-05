---
resourceId: "mb-ap-calcab-6.9-study-guide"
title: "Integrating Using Substitution: Study Guide (Calculus AB 6.9)"
description: "Learn how substitution reverses the chain rule, how to choose u and adjust constants, and how to change the limits when you use substitution in a definite integral."
course: "calculus-ab"
unit: 6
topics: ["6.9"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule (Topic 3.1)"
  - "Basic antiderivatives and indefinite integral notation (Topic 6.8)"
  - "Evaluating a definite integral with an antiderivative (Topic 6.7)"
  - "Derivatives of eˣ, ln x and the trigonometric functions"
prerequisiteResources: ["mb-ap-calcab-6.8-study-guide"]
learningObjectives:
  - "Explain substitution as the chain rule run backwards"
  - "Choose a suitable inner function u, find du and rewrite an integral entirely in terms of u, including constant adjustments"
  - "Find indefinite integrals by substitution and check the result by differentiating"
  - "Rewrite leftover factors of x in terms of u when the integrand needs rearranging"
  - "Evaluate definite integrals by substitution, changing the limits of integration to match the new variable"
skills: ["1", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Give exact answers; decimals are only for checking."
related: ["mb-ap-calcab-6.9-revision-notes", "mb-ap-calcab-6.9-practice", "mb-ap-calcab-6.9-checklist"]
next: "mb-ap-calcab-6.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Substitution undoes the chain rule: ∫ f(g(x)) · g′(x) dx = F(g(x)) + C, where F is an antiderivative of f."
  - "Let u be the inner function, find du = g′(x) dx, and rewrite the whole integral in u before you integrate. Constant factors can be adjusted; variable factors cannot."
  - "In a definite integral, change the limits to u-values: x = a becomes u = g(a) and x = b becomes u = g(b). Then you never need to go back to x."
  - "Check any indefinite answer by differentiating it. You should get the original integrand."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.9 is common content, so the same page serves AB and BC students. BC students use substitution again inside integration by parts and improper integrals."
  - question: "How do I know what to choose for u?"
    answer: "Look for an inner function whose derivative also appears as a factor, apart from a constant. Common choices are the expression inside a power, a root, an exponent, a trig function or a denominator."
  - question: "Do I have to change the limits in a definite integral?"
    answer: "You must either change the limits to u-values, or go back to x before you substitute the original limits. Changing the limits is usually shorter. What you must never do is use x-limits with a function of u."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form. **∫ f(x) dx** is an indefinite integral (a family of antiderivatives, written with + C). **∫ (a to b) f(x) dx** is the definite integral from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. **[F(u)] (1 to 2)** means F(2) − F(1).

## The idea: the chain rule run backwards

In Topic 6.8 you found antiderivatives by reading derivative rules backwards. That works for x⁵, eˣ or cos x. It does not work directly for something like 3x² cos(x³), because no single basic rule produces it.

But you have seen this shape before. Differentiate sin(x³) with the chain rule:

**d/dx sin(x³) = cos(x³) · 3x²**

So 3x² cos(x³) is the derivative of sin(x³), and

**∫ 3x² cos(x³) dx = sin(x³) + C**

The integrand had two parts: an **outer function** (cos) evaluated at an **inner function** (x³), multiplied by the **derivative of the inner function** (3x²). That is exactly what the chain rule produces. In general, if F′ = f, then

> **Substitution rule.** ∫ f(g(x)) · g′(x) dx = F(g(x)) + C

Substitution is a bookkeeping method that makes this pattern easy to see. You rename the inner function **u = g(x)**. Then du/dx = g′(x), which you write as **du = g′(x) dx**. The integral becomes

**∫ f(u) du = F(u) + C = F(g(x)) + C**

The new integral is a basic one from Topic 6.8.

## How to spot a substitution

Look for an inner function whose derivative is also a factor of the integrand, apart from a constant multiple.

| Integrand | Try u = | du = | Antiderivative |
|---|---|---|---|
| x²(x³ + 1)⁴ | x³ + 1 | 3x² dx | (x³ + 1)⁵/15 + C |
| x e^(−x²) | −x² | −2x dx | −(1/2)e^(−x²) + C |
| cos x / sin²x | sin x | cos x dx | −1/sin x + C |
| sec²x · tan³x | tan x | sec²x dx | tan⁴x/4 + C |
| 1/(x ln x), for x > 1 | ln x | (1/x) dx | ln(ln x) + C |

Good places to look for u: the expression inside a power or root, the exponent of e, the input of a trig function, or a denominator whose derivative sits in the numerator.

## The method, step by step

1. **Choose u.** Usually the inner function.
2. **Find du.** Differentiate: du = g′(x) dx.
3. **Rewrite everything in u.** Every x and the dx must go. Adjust constants if needed.
4. **Integrate** with a basic rule.
5. **Substitute back** to write the answer in x, and add + C.
6. **Check** by differentiating your answer.

**Adjusting a constant.** For ∫ x cos(x²) dx, let u = x². Then du = 2x dx, so x dx = (1/2) du:

**∫ x cos(x²) dx = ∫ cos u · (1/2) du = (1/2) sin u + C = (1/2) sin(x²) + C**

Dividing by the constant 2 is allowed, because a constant factor can move through an integral sign.

**You cannot adjust a variable.** For ∫ cos(x²) dx, the factor x is missing. You cannot "divide by 2x" to fix it, because 2x is not constant and cannot move outside the integral. In fact cos(x²) has no antiderivative made of familiar functions (Topic 6.8 noted that many functions are like this). If you guess sin(x²)/(2x) and differentiate it with the quotient rule, you do not get cos(x²).

### Linear inner functions: a quick case

When the inner function is ax + b, du = a dx, so you divide by a:

**∫ f(ax + b) dx = (1/a) F(ax + b) + C**

- ∫ e^(5x − 2) dx = (1/5)e^(5x − 2) + C
- ∫ cos(πx/3) dx = (3/π) sin(πx/3) + C
- ∫ 1/(2x + 1) dx = (1/2) ln|2x + 1| + C
- ∫ (4x − 3)⁶ dx = (4x − 3)⁷/28 + C, because 7 × 4 = 28

**A useful result.** ∫ tan x dx = ∫ sin x / cos x dx. Let u = cos x, so du = −sin x dx. Then the integral is ∫ −du/u = −ln|u| + C = **−ln|cos x| + C**.

## Rewriting leftover x

Sometimes du does not use up every x. For ∫ x/√(x + 3) dx, let u = x + 3. Then du = dx, but an x is left on top. Solve the substitution for x: **x = u − 3**. Now everything is in u:

**∫ (u − 3)/√u du = ∫ (u^(1/2) − 3u^(−1/2)) du**

This is a rearrangement into an equivalent form: split the fraction, then integrate each power. Worked example 3 finishes it.

## Definite integrals: change the limits

In a definite integral, the limits belong to the variable of integration. When the variable changes from x to u, the limits must change too.

> **Changing limits.** If u = g(x), then ∫ (a to b) f(g(x)) g′(x) dx = ∫ (g(a) to g(b)) f(u) du.

Take ∫ (0 to 1) 2x(x² + 1) dx. Let u = x² + 1, so du = 2x dx. When x = 0, u = 1. When x = 1, u = 2. So

**∫ (0 to 1) 2x(x² + 1) dx = ∫ (1 to 2) u du = [u²/2] (1 to 2) = 2 − 1/2 = 3/2**

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="sub-title sub-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sub-title">Two regions with equal area: before and after the substitution u = x² + 1</title>
<desc id="sub-desc">Left panel: the curve y = 2x(x² + 1) for x from 0 to 1, rising from (0, 0) to (1, 4), with the region under it shaded with diagonal hatching and labelled area 3/2. Right panel: the line y = u for u from 0 to 2, with the region under it from u = 1 to u = 2 shaded with the same hatching. This region is a trapezoid with parallel sides 1 and 2 and width 1, labelled area 3/2. The two shaded regions have different shapes but the same area.</desc>
<defs>
<pattern id="sub-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
<rect width="8" height="8" fill="#fdf6e3"/>
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.2"/>
</pattern>
</defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<text x="140" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">Before: in x</text>
<text x="430" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">After: in u</text>
<polygon points="50.0,250.0 59.0,245.0 68.0,239.9 77.0,234.7 86.0,229.2 95.0,223.4 104.0,217.3 113.0,210.7 122.0,203.6 131.0,195.9 140.0,187.5 149.0,178.4 158.0,168.4 167.0,157.5 176.0,145.7 185.0,132.8 194.0,118.8 203.0,103.6 212.0,87.1 221.0,69.3 230.0,50.0 230,250" fill="url(#sub-hatch)" stroke="none"/>
<polyline points="50.0,250.0 59.0,245.0 68.0,239.9 77.0,234.7 86.0,229.2 95.0,223.4 104.0,217.3 113.0,210.7 122.0,203.6 131.0,195.9 140.0,187.5 149.0,178.4 158.0,168.4 167.0,157.5 176.0,145.7 185.0,132.8 194.0,118.8 203.0,103.6 212.0,87.1 221.0,69.3 230.0,50.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="40" y1="250" x2="260" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="50" y1="262" x2="50" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="50" y="267">0</text><text x="140" y="267">0.5</text><text x="230" y="267">1</text><text x="252" y="245">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="44" y="204">1</text><text x="44" y="154">2</text><text x="44" y="104">3</text><text x="44" y="54">4</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="46" y1="200" x2="54" y2="200"/><line x1="46" y1="150" x2="54" y2="150"/><line x1="46" y1="100" x2="54" y2="100"/><line x1="46" y1="50" x2="54" y2="50"/>
<line x1="140" y1="246" x2="140" y2="254"/><line x1="230" y1="246" x2="230" y2="254"/>
</g>
<text x="62" y="80" font-size="12" fill="#1d2b44">y = 2x(x² + 1)</text>
<rect x="150" y="214" width="76" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="188" y="228" font-size="12" fill="#1d2b44" text-anchor="middle">area = 3/2</text>
<polygon points="430,250 430,200 530,150 530,250" fill="url(#sub-hatch)" stroke="none"/>
<line x1="330" y1="250" x2="530" y2="150" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="320" y1="250" x2="550" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="330" y1="262" x2="330" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="430" y1="200" x2="430" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="530" y1="150" x2="530" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="330" y="267">0</text><text x="430" y="267">1</text><text x="530" y="267">2</text><text x="548" y="245">u</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="324" y="204">1</text><text x="324" y="154">2</text><text x="324" y="104">3</text><text x="324" y="54">4</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="326" y1="200" x2="334" y2="200"/><line x1="326" y1="150" x2="334" y2="150"/><line x1="326" y1="100" x2="334" y2="100"/><line x1="326" y1="50" x2="334" y2="50"/>
</g>
<text x="440" y="130" font-size="12" fill="#1d2b44">y = u</text>
<rect x="442" y="214" width="76" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="480" y="228" font-size="12" fill="#1d2b44" text-anchor="middle">area = 3/2</text>
</svg>
<figcaption>Figure 1. Substitution changes the shape of the region, not its size. On the left, the area under y = 2x(x² + 1) from x = 0 to x = 1. On the right, the area under y = u from u = 1 to u = 2, a trapezoid with area (1 + 2)/2 × 1 = 3/2. The new limits 1 and 2 are the values of u = x² + 1 at x = 0 and x = 1. Axes are unitless.</figcaption>
</figure>

**Two correct routes.** You may either (a) change the limits and finish in u, or (b) find the antiderivative, substitute back to x, then use the original limits. Both give the same number. Route (a) is usually shorter. Mixing them (an antiderivative in u with limits in x) is the classic error.

**Limits can come out "backwards".** If the new lower limit is larger than the new upper limit, keep them in that order. You can then use ∫ (b to a) = −∫ (a to b) from Topic 6.6 if you want. Worked example 2 shows this.

## Worked example 1: an indefinite integral with a constant adjustment

**Question.** Find ∫ (x + 1)/(x² + 2x + 7)³ dx.

1. **Choose u.** The denominator is a power of x² + 2x + 7. Let **u = x² + 2x + 7**.
2. **Find du.** du = (2x + 2) dx = 2(x + 1) dx. So **(x + 1) dx = (1/2) du**.
3. **Rewrite in u.** The numerator and dx together are (x + 1) dx:
   **∫ (x + 1)/(x² + 2x + 7)³ dx = ∫ (1/2) · u^(−3) du**
4. **Integrate** with the power rule: (1/2) · u^(−2)/(−2) = −(1/4)u^(−2).
5. **Substitute back:**
   **= −1/(4(x² + 2x + 7)²) + C**

**Check.** Differentiate −(1/4)(x² + 2x + 7)^(−2) with the chain rule: −(1/4) · (−2)(x² + 2x + 7)^(−3) · (2x + 2) = (2x + 2)/(2(x² + 2x + 7)³) = (x + 1)/(x² + 2x + 7)³. This matches the integrand.

## Worked example 2: a definite integral with changed limits

**Question.** Evaluate ∫ (0 to π/2) sin x/(1 + cos x) dx exactly.

1. **Choose u.** The denominator 1 + cos x has derivative −sin x, and sin x is in the numerator. Let **u = 1 + cos x**.
2. **Find du.** du = −sin x dx, so **sin x dx = −du**.
3. **Change the limits.** When x = 0, u = 1 + cos 0 = **2**. When x = π/2, u = 1 + cos(π/2) = **1**.
4. **Rewrite in u, keeping the order of the limits:**
   **∫ (0 to π/2) sin x/(1 + cos x) dx = ∫ (2 to 1) (−1/u) du**
5. **Tidy the sign.** Swapping the limits changes the sign, which cancels the minus: **= ∫ (1 to 2) (1/u) du**
6. **Evaluate:** [ln u] (1 to 2) = ln 2 − ln 1 = **ln 2**.

**Answer.** ln 2, which is about 0.693.

**Check the sign.** For x between 0 and π/2, sin x ≥ 0 and 1 + cos x > 0, so the integrand is never negative. A positive answer makes sense. You did not have to go back to x at any stage, because the limits were already u-values.

## Worked example 3: rewriting a leftover x

**Question.** Evaluate ∫ (1 to 6) x/√(x + 3) dx exactly.

1. **Choose u.** Let **u = x + 3**. Then du = dx, and **x = u − 3**.
2. **Change the limits.** x = 1 gives u = 4. x = 6 gives u = 9.
3. **Rewrite in u:**
   **∫ (4 to 9) (u − 3)/√u du = ∫ (4 to 9) (u^(1/2) − 3u^(−1/2)) du**
4. **Integrate each term:** an antiderivative is G(u) = (2/3)u^(3/2) − 6u^(1/2).
5. **Evaluate.** G(9) = (2/3)(27) − 6(3) = 18 − 18 = 0. G(4) = (2/3)(8) − 6(2) = 16/3 − 12 = −20/3.
   So the integral is 0 − (−20/3) = **20/3**.

**Answer.** 20/3, about 6.67.

**Check.** The integrand is positive on [1, 6], so a positive answer is right. Its value runs from 1/2 at x = 1 to 2 at x = 6, so the area must lie between 5 × 1/2 = 2.5 and 5 × 2 = 10. The answer 6.67 fits.

**Why not u = √(x + 3)?** That also works, but it leads to more algebra. When the inner function is linear, u = (inner function) is usually the simplest choice.

## Common misconceptions

- **Leaving some x in the integral.** ∫ x · u³ du is not ready to integrate. Every x, and the dx, must be replaced before you integrate.
- **Forgetting the constant adjustment.** If du = 2x dx and you only have x dx, you need a factor of 1/2. Leaving it out doubles the answer.
- **Dividing by a variable.** You cannot fix a missing x by "dividing by 2x". Only constants can be adjusted. ∫ cos(x²) dx cannot be done by substitution.
- **Keeping the x-limits after changing to u.** In ∫ (1 to 2) x e^(x²) dx with u = x², the u-limits are 1 and 4, not 1 and 2.
- **"Correcting" limits that come out in the wrong order.** If x = 0 gives u = 2 and x = π/2 gives u = 1, the integral is from 2 to 1. Do not quietly swap them without changing the sign.
- **Dropping + C or dropping du.** An indefinite answer needs + C. Writing ∫ u³ without du hides the factor you adjusted.
- **Not checking.** Differentiating your answer takes half a minute and catches most errors.

## Where this leads

Substitution is the most used integration technique in the course. Topic 6.10, [Integrating Functions Using Long Division and Completing the Square](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/), rewrites an integrand first and then often finishes with a substitution. In Unit 7 you will use substitution to solve separable differential equations, and in Unit 8 to find areas and volumes. BC students will combine it with integration by parts. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-checklist/) to consolidate.
