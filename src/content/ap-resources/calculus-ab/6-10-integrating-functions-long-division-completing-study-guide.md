---
resourceId: "mb-ap-calcab-6.10-study-guide"
title: "Integrating Functions Using Long Division and Completing the Square: Study Guide (Calculus AB 6.10)"
description: "Learn when to rewrite an integrand first: long division for top-heavy rational functions, and completing the square to reach arctan and arcsin forms."
course: "calculus-ab"
unit: 6
topics: ["6.10"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Integration by substitution (Topic 6.9)"
  - "Basic antiderivatives, including ∫ 1/x dx = ln|x| + C, ∫ 1/(1 + x²) dx = arctan x + C and ∫ 1/√(1 − x²) dx = arcsin x + C (Topic 6.8)"
  - "Polynomial long division and completing the square from algebra"
prerequisiteResources: ["mb-ap-calcab-6.9-study-guide"]
learningObjectives:
  - "Decide when an integrand needs rewriting into an equivalent form before it can be integrated"
  - "Use polynomial long division to rewrite a rational function whose numerator degree is at least the denominator degree, then integrate"
  - "Complete the square in a quadratic and use it to reach the arctan and arcsin antiderivative forms"
  - "Split a numerator into a multiple of the denominator's derivative plus a constant, giving a logarithm term and an arctan term"
  - "Evaluate definite integrals after these rearrangements"
skills: ["1", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Exact answers may contain ln and π; decimals are only for checking."
related: ["mb-ap-calcab-6.10-revision-notes", "mb-ap-calcab-6.10-practice", "mb-ap-calcab-6.10-checklist"]
next: "mb-ap-calcab-6.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If the degree of the numerator is at least the degree of the denominator, divide first. Write the result as quotient + remainder/divisor, then integrate each part."
  - "For 1 over a quadratic with no real roots, complete the square to get a² + (x − h)², then use ∫ du/(a² + u²) = (1/a) arctan(u/a) + C."
  - "For 1 over the square root of a quadratic with a negative x² term, complete the square to get a² − (x − h)², then use ∫ du/√(a² − u²) = arcsin(u/a) + C."
  - "If the numerator is linear, split it into (a multiple of the denominator's derivative) + (a constant). The first part gives ln; the second gives arctan."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.10 is common content, so the same page serves AB and BC students. BC students later add partial fractions (Topic 6.12) for denominators that factor into linear factors."
  - question: "How do I know whether to divide or to complete the square?"
    answer: "Compare degrees first. If the top has degree at least that of the bottom, divide. If the top has lower degree and the bottom is a quadratic that does not factor, complete the square."
  - question: "What if the quadratic in the denominator factors, like x² − 4?"
    answer: "Then completing the square does not lead to arctan, because you get a difference, not a sum. Integrals like ∫ 1/(x² − 4) dx need partial fractions, which is a BC-only topic (6.12)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form. **∫ f(x) dx** is an indefinite integral (add + C). **∫ (a to b) f(x) dx** is the definite integral from x = a to x = b. **[F(x)] (a to b)** means F(b) − F(a). **arctan** and **arcsin** are the inverse tangent and inverse sine; you may also see them written tan⁻¹ and sin⁻¹.

## Why rewrite before integrating?

Some integrands match no basic rule and no obvious substitution as written. Try ∫ (x² + 3x + 1)/(x + 1) dx. Let u = x + 1? Then du = dx, but you are left with (x² + 3x + 1)/u, which still needs work. There is no product or chain-rule pattern to undo.

The fix is to write the **same function in a different form** that does match the rules you know. Two algebra tools do most of the work:

| What you see | First step | What you get |
|---|---|---|
| Rational function, degree of top ≥ degree of bottom | Long division | Polynomial + (remainder)/(divisor) |
| 1/(quadratic) where the quadratic has no real roots | Complete the square | an arctan form |
| 1/√(quadratic) with a negative x² term | Complete the square | an arcsin form |
| (linear)/(quadratic with no real roots) | Split the numerator, then complete the square | a ln term plus an arctan term |

The rewriting is pure algebra. It changes how the function looks, not its values, so it changes nothing about the integral.

**Where AB stops.** If the denominator factors into distinct linear factors, such as x² − 4 = (x − 2)(x + 2), the tool you need is partial fractions. That is a BC-only topic (6.12). In this topic, after division the denominator is usually linear or a quadratic with no real roots. (A perfect square such as (x + 1)² is fine too: ∫ dx/(x + 1)² is a power-rule substitution.)

## Tool 1: long division

When the top's degree is at least the bottom's, divide, exactly as with numbers. 17/5 = 3 + 2/5, and in the same way:

**(x² + 3x + 1)/(x + 1) = x + 2 − 1/(x + 1)**

The division, step by step:

1. x² ÷ x = **x**. Multiply: x(x + 1) = x² + x. Subtract: (x² + 3x + 1) − (x² + x) = 2x + 1.
2. 2x ÷ x = **2**. Multiply: 2(x + 1) = 2x + 2. Subtract: (2x + 1) − (2x + 2) = **−1**.
3. Quotient x + 2, remainder −1. So the fraction equals x + 2 + (−1)/(x + 1).

**Check by multiplying back:** (x + 2)(x + 1) − 1 = x² + 3x + 2 − 1 = x² + 3x + 1. Correct.

Now each piece is easy: x and 2 are powers, and ∫ 1/(x + 1) dx = ln|x + 1| + C. The graph below shows what the division means.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="div-title div-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="div-title">The curve y = (x² + 3x + 1)/(x + 1) below the line y = x + 2 for x from 0 to 2</title>
<desc id="div-desc">The solid curve y = (x² + 3x + 1)/(x + 1) rises from (0, 1) to (2, 11/3). The dashed straight line y = x + 2 rises from (0, 2) to (2, 4) and lies above the curve the whole way. The region under the curve from x = 0 to x = 2 is shaded with diagonal hatching and labelled area 6 − ln 3. The unshaded strip between the curve and the line is labelled gap 1/(x + 1), area ln 3. The gap is 1 unit tall at x = 0 and 1/3 of a unit tall at x = 2.</desc>
<defs>
<pattern id="div-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
<rect width="8" height="8" fill="#fdf6e3"/>
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.2"/>
</pattern>
</defs>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<polygon points="60,260 60.0,210.0 78.0,200.5 96.0,191.7 114.0,183.5 132.0,175.7 150.0,168.3 168.0,161.2 186.0,154.4 204.0,147.8 222.0,141.3 240.0,135.0 258.0,128.8 276.0,122.7 294.0,116.7 312.0,110.8 330.0,105.0 348.0,99.2 366.0,93.5 384.0,87.9 402.0,82.2 420.0,76.7 420,260" fill="url(#div-hatch)" stroke="none"/>
<polyline points="60.0,210.0 78.0,200.5 96.0,191.7 114.0,183.5 132.0,175.7 150.0,168.3 168.0,161.2 186.0,154.4 204.0,147.8 222.0,141.3 240.0,135.0 258.0,128.8 276.0,122.7 294.0,116.7 312.0,110.8 330.0,105.0 348.0,99.2 366.0,93.5 384.0,87.9 402.0,82.2 420.0,76.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="60" y1="160" x2="420" y2="60" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="420" y1="60" x2="420" y2="260" stroke="#1d2b44" stroke-width="1"/>
<line x1="50" y1="260" x2="470" y2="260" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="272" x2="60" y2="35" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="277">0</text><text x="150" y="277">0.5</text><text x="240" y="277">1</text><text x="330" y="277">1.5</text><text x="420" y="277">2</text><text x="465" y="255">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="54" y="214">1</text><text x="54" y="164">2</text><text x="54" y="114">3</text><text x="54" y="64">4</text><text x="54" y="40">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="56" y1="210" x2="64" y2="210"/><line x1="56" y1="160" x2="64" y2="160"/><line x1="56" y1="110" x2="64" y2="110"/><line x1="56" y1="60" x2="64" y2="60"/>
<line x1="150" y1="256" x2="150" y2="264"/><line x1="240" y1="256" x2="240" y2="264"/><line x1="330" y1="256" x2="330" y2="264"/><line x1="420" y1="256" x2="420" y2="264"/>
</g>
<text x="250" y="80" font-size="12" fill="#1d2b44">dashed: y = x + 2</text>
<rect x="294" y="137" width="198" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="300" y="150" font-size="12" fill="#1d2b44">solid: y = (x² + 3x + 1)/(x + 1)</text>
<line x1="120" y1="120" x2="132" y2="155" stroke="#1d2b44" stroke-width="1"/>
<text x="70" y="112" font-size="12" fill="#1d2b44">gap = 1/(x + 1), area ln 3</text>
<rect x="170" y="212" width="150" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="245" y="227" font-size="12" fill="#1d2b44" text-anchor="middle">area = 6 − ln 3 ≈ 4.90</text>
</svg>
<figcaption>Figure 1. Long division splits the curve into a straight line minus a small gap. The area under the dashed line y = x + 2 from 0 to 2 is a trapezoid, (2 + 4)/2 × 2 = 6. The gap between line and curve has height 1/(x + 1), and its area is ln 3. So the hatched area under the curve is 6 − ln 3. Axes are unitless.</figcaption>
</figure>

**Two quick cases.** When the degrees are equal, the quotient is a constant: (x² + 2)/(x² + 1) = 1 + 1/(x² + 1). When the top is a simple shift of the bottom, you can "add and subtract" instead of dividing: x/(x + 1) = (x + 1 − 1)/(x + 1) = 1 − 1/(x + 1).

## Tool 2: completing the square

The target forms are two results you can derive from Topic 6.8 with a substitution (Topic 6.9). For a constant a > 0:

> **Arctan form.** ∫ du/(a² + u²) = (1/a) arctan(u/a) + C
>
> **Arcsin form.** ∫ du/√(a² − u²) = arcsin(u/a) + C

**Where the 1/a comes from.** In ∫ du/(a² + u²), take a² out of the bottom: (1/a²) ∫ du/(1 + (u/a)²). Let w = u/a, so du = a dw. This gives (1/a²) · a ∫ dw/(1 + w²) = (1/a) arctan w + C. In the arcsin form, the factor a from du cancels the a from the square root, so no 1/a appears.

To reach these forms, complete the square:

**x² + bx + c = (x + b/2)² + (c − b²/4)**

- x² + 6x + 13 = (x + 3)² + 4, so a = 2 and u = x + 3. Then ∫ dx/(x² + 6x + 13) = (1/2) arctan((x + 3)/2) + C.
- 6x − x² = −(x² − 6x) = −((x − 3)² − 9) = 9 − (x − 3)², so a = 3 and u = x − 3. Then ∫ dx/√(6x − x²) = arcsin((x − 3)/3) + C.

**When does arctan apply?** Only if the quadratic has **no real roots** (discriminant b² − 4ac < 0). Then the constant left after completing the square is positive, and you get a sum of squares. x² − 4 has discriminant 16 > 0, so it is a difference of squares, and arctan does not apply.

## Worked example 1: long division in a definite integral

**Question.** Evaluate ∫ (0 to 2) (x² + 3x + 1)/(x + 1) dx exactly.

1. **Compare degrees.** Top degree 2, bottom degree 1. Divide first.
2. **Divide** (shown above): the integrand equals x + 2 − 1/(x + 1).
3. **Integrate each term:** an antiderivative is x²/2 + 2x − ln|x + 1|. On [0, 2], x + 1 > 0, so write ln(x + 1).
4. **Evaluate.**
   At x = 2: 2 + 4 − ln 3 = 6 − ln 3.
   At x = 0: 0 + 0 − ln 1 = 0.
5. **Answer:** **6 − ln 3**, about 4.90.

**Check with the picture.** Figure 1 gives the same answer: trapezoid area 6 minus gap area ln 3. The curve runs from height 1 to height 11/3 over a width of 2, so the area must lie between 2 and about 7.3. The answer fits.

## Worked example 2: completing the square to reach arctan

**Question.** Evaluate ∫ (1 to 3) 1/(x² − 2x + 5) dx exactly.

1. **Compare degrees.** Top degree 0, bottom degree 2. No division needed.
2. **Check for real roots.** Discriminant (−2)² − 4(5) = −16 < 0. No real roots, so aim for arctan.
3. **Complete the square:** x² − 2x + 5 = (x − 1)² + 4. So a = 2, and let u = x − 1, with du = dx.
4. **Change the limits:** x = 1 gives u = 0; x = 3 gives u = 2.
5. **Integrate:** ∫ (0 to 2) du/(4 + u²) = [(1/2) arctan(u/2)] (0 to 2) = (1/2)(arctan 1 − arctan 0).
6. **Evaluate:** arctan 1 = π/4 and arctan 0 = 0, so the answer is (1/2)(π/4) = **π/8**, about 0.393.

**Check.** The integrand falls from 1/4 at x = 1 to 1/8 at x = 3, over a width of 2. So the area lies between 2 × 1/8 = 0.25 and 2 × 1/4 = 0.5. The answer 0.393 fits.

## Worked example 3: splitting the numerator

**Question.** Find ∫ (x + 4)/(x² + 4x + 8) dx.

1. **Compare degrees.** Top degree 1, bottom degree 2. No division.
2. **Look at the derivative of the bottom:** d/dx (x² + 4x + 8) = 2x + 4.
3. **Split the top** into a multiple of 2x + 4 plus a constant: x + 4 = (1/2)(2x + 4) + 2.
4. **Write two integrals:**
   **(1/2) ∫ (2x + 4)/(x² + 4x + 8) dx + 2 ∫ 1/(x² + 4x + 8) dx**
5. **First integral:** derivative over function (u = x² + 4x + 8), so it gives (1/2) ln(x² + 4x + 8). The quadratic is always positive (discriminant 16 − 32 < 0), so no absolute value is needed.
6. **Second integral:** complete the square: x² + 4x + 8 = (x + 2)² + 4, so a = 2. It gives 2 · (1/2) arctan((x + 2)/2) = arctan((x + 2)/2).
7. **Answer:**
   **∫ (x + 4)/(x² + 4x + 8) dx = (1/2) ln(x² + 4x + 8) + arctan((x + 2)/2) + C**

**Check.** Differentiate: (1/2)(2x + 4)/(x² + 4x + 8) + (1/2)/(1 + (x + 2)²/4). The second term equals 2/(4 + (x + 2)²) = 2/(x² + 4x + 8). Adding gives (x + 2 + 2)/(x² + 4x + 8) = (x + 4)/(x² + 4x + 8). Correct.

## Common misconceptions

- **Integrating top and bottom separately.** ∫ p(x)/q(x) dx is not (∫ p dx)/(∫ q dx). Rewrite first.
- **Forgetting the remainder.** After dividing, the remainder term is usually where the ln comes from. Dropping it loses part of the answer.
- **Completing the square when the top is too big.** If the top's degree is at least the bottom's, divide first.
- **Writing ln of the quadratic for 1/(quadratic).** ∫ 1/(x² + 6x + 13) dx is not ln(x² + 6x + 13). That would need 2x + 6 on top.
- **Using 1/a² or a² instead of 1/a and a.** From (x − 1)² + 4, a = 2, not 4.
- **Sign slips in completing the square.** x² − 2x + 5 = (x − 1)² + 4, not (x + 1)² + 4. Expand your square to check.
- **Forcing arctan onto a quadratic that factors.** 1/(x² − 4) is not an arctan form. It needs partial fractions, which is BC-only.

## Where this leads

Topic 6.14, [Selecting Techniques for Antidifferentiation](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/), asks you to choose between basic rules, substitution and the rearrangements on this page. BC students add integration by parts and partial fractions before that. Rewritten integrands come up again in Unit 7 (separable differential equations) and Unit 8 (areas and volumes). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-checklist/) to consolidate.
