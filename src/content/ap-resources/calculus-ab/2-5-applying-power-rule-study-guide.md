---
resourceId: "mb-ap-calcab-2.5-study-guide"
title: "Applying the Power Rule: Study Guide (Calculus AB 2.5)"
description: "See where the power rule comes from, then use it for any real exponent: rewrite roots and reciprocals as powers, find slopes and tangent lines, and spot where it fails."
course: "calculus-ab"
unit: 2
topics: ["2.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definition of the derivative as a limit of a difference quotient (Topic 2.2)"
  - "Differentiability and continuity (Topic 2.4)"
  - "Limits by algebraic manipulation: expanding, combining fractions and conjugates (Topic 1.6)"
  - "Laws of exponents, including negative and fractional exponents"
prerequisiteResources: ["mb-ap-calcab-2.4-study-guide"]
learningObjectives:
  - "Find the derivative of x², x³, 1/x and √x straight from the limit definition and see the pattern they share"
  - "Apply the power rule d/dx[xʳ] = r·xʳ⁻¹ for whole-number, negative, fractional and other real exponents"
  - "Rewrite roots, reciprocals and simple products or quotients of powers as a single power of x before differentiating"
  - "Use the power rule to find the slope and equation of a tangent line at a given point"
  - "Recognise when the power rule gives an undefined derivative and connect this to vertical tangents and cusps"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Leave answers exact, using fractions and roots."
related: ["mb-ap-calcab-2.5-revision-notes", "mb-ap-calcab-2.5-practice", "mb-ap-calcab-2.5-checklist"]
next: "mb-ap-calcab-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Power rule: if f(x) = xʳ for a constant real number r, then f′(x) = r·xʳ⁻¹ wherever both sides are defined."
  - "Bring the exponent down as a multiplier, then lower the exponent by exactly 1."
  - "Rewrite first: 1/xⁿ = x⁻ⁿ, √x = x^(1/2), the cube root of x² = x^(2/3)."
  - "The rule comes from the limit definition. Use it as a shortcut, but know the definition still sits underneath."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.5 is common content, so the same page serves AB and BC students."
  - question: "Does the power rule work for negative and fractional exponents?"
    answer: "Yes. It works for any constant real exponent r, as long as x is in the domain of both xʳ and xʳ⁻¹. Negative and fractional exponents are the cases students most often get wrong, so practise them."
  - question: "Can I use the power rule on 2ˣ?"
    answer: "No. In 2ˣ the variable is in the exponent, so it is an exponential function, not a power function. Exponential functions have their own rules, starting in Topic 2.7."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives and limits are written in a compact form:

- **f′(x)** ("f prime of x") is the derivative of f.
- **d/dx[xʳ]** means "the derivative with respect to x of xʳ". **dy/dx** is the derivative of y with respect to x.
- **lim (h → 0)** means "the limit as h approaches 0".
- Fractional exponents are written in brackets, for example x^(2/3). On paper, write them as normal superscripts.

All three derivative notations mean the same thing. Use whichever the question uses.

## Why a shortcut is needed

In Topic 2.2 you met the definition of the derivative:

**f′(x) = lim (h → 0) [f(x + h) − f(x)] / h**

It always works, but it takes several lines of algebra for every function. This topic gives the first shortcut. It covers every function of the form f(x) = xʳ, where r is a constant. These are called **power functions**.

## Building the pattern from the definition

### The derivative of x³

Let f(x) = x³. Expand (x + h)³ = x³ + 3x²h + 3xh² + h³. Then

**[f(x + h) − f(x)] / h = (3x²h + 3xh² + h³) / h = 3x² + 3xh + h²** for h ≠ 0.

As h → 0, the last two terms vanish. So **f′(x) = 3x²**.

Do the same for x, x² and x⁴, and a pattern appears:

| f(x) | f′(x) from the definition |
|---|---|
| x | 1 |
| x² | 2x |
| x³ | 3x² |
| x⁴ | 4x³ |

Each time, the old exponent becomes the multiplier and the new exponent is one less.

### Why the pattern holds for every positive whole number n

*Background (not examined as a proof).* When you expand (x + h)ⁿ, the first two terms are always xⁿ and n·xⁿ⁻¹h. Every other term contains h² or a higher power of h. Subtract xⁿ and divide by h. You get n·xⁿ⁻¹ plus terms that still contain h. Those terms go to 0, leaving **n·xⁿ⁻¹**.

### Testing the pattern on 1/x and √x

The same pattern works when the exponent is not a positive whole number. Two checks from the definition, using the algebra from Topic 1.6:

**f(x) = 1/x = x⁻¹.** Combine the fractions on top:

1/(x + h) − 1/x = [x − (x + h)] / [x(x + h)] = −h / [x(x + h)].

Divide by h and cancel (h ≠ 0): the quotient is −1/[x(x + h)]. As h → 0 this tends to **−1/x²**. The pattern predicts (−1)·x⁻² = −1/x². It matches.

**f(x) = √x = x^(1/2)**, for x > 0. Multiply top and bottom of [√(x + h) − √x]/h by the conjugate √(x + h) + √x. The top becomes (x + h) − x = h. Cancel h to get 1/[√(x + h) + √x]. As h → 0 this tends to **1/(2√x)**. The pattern predicts (1/2)·x^(−1/2) = 1/(2√x). It matches again.

## The power rule

> **Power rule.** If r is a constant real number and f(x) = xʳ, then **f′(x) = r·xʳ⁻¹**, for every x where xʳ and xʳ⁻¹ are both defined.

In words: **bring the exponent down, then subtract 1 from the exponent.**

The rule holds for any constant exponent: positive or negative, whole or fractional, even irrational. For example, d/dx[x^π] = π·x^(π − 1) for x > 0.

Two cases to know by heart:

- d/dx[x] = 1. The graph y = x is a line with slope 1.
- x⁰ = 1 for x ≠ 0. The rule gives 0·x⁻¹ = 0, which fits: a constant graph has slope 0. Constants in general are handled in Topic 2.6.

### Rewrite before you differentiate

The power rule only applies to a single power of x. Roots and fractions must be rewritten first:

| Given | Rewrite as | Derivative |
|---|---|---|
| 1/x⁴ | x⁻⁴ | −4x⁻⁵ = −4/x⁵ |
| √x | x^(1/2) | (1/2)x^(−1/2) = 1/(2√x) |
| cube root of x² | x^(2/3) | (2/3)x^(−1/3) |
| 1/√x | x^(−1/2) | (−1/2)x^(−3/2) |

Use the laws of exponents: xᵃ·xᵇ = xᵃ⁺ᵇ, xᵃ/xᵇ = xᵃ⁻ᵇ, (xᵃ)ᵇ = xᵃᵇ, and the nth root of xᵐ = x^(m/n).

**Subtracting 1 from a negative or fractional exponent** is where most errors happen:

- −4 − 1 = **−5** (not −3).
- 2/3 − 1 = **−1/3**.
- −1/2 − 1 = **−3/2**.

## Worked example 1: rewrite, then differentiate

**Question.** Find the derivative of each function. Give answers with positive exponents.
(a) y = 1/x⁴  (b) y = cube root of x²  (c) y = x²√x, x > 0  (d) y = x⁷/x³, x ≠ 0

**(a)** Rewrite: y = x⁻⁴. Bring down −4 and lower the exponent: −4 − 1 = −5.
dy/dx = −4x⁻⁵ = **−4/x⁵**.

**(b)** Rewrite: y = x^(2/3). New exponent: 2/3 − 1 = −1/3.
dy/dx = (2/3)x^(−1/3) = **2/(3·cube root of x)**, for x ≠ 0.

**(c)** Combine into one power: x²·x^(1/2) = x^(5/2). New exponent: 5/2 − 1 = 3/2.
dy/dx = **(5/2)x^(3/2)**. At x = 4, for example, this is (5/2)(8) = 20.

**(d)** Simplify first: x⁷/x³ = x⁴ for x ≠ 0.
dy/dx = **4x³**, for x ≠ 0.

**Check.** In (c) and (d) you combined powers before differentiating. Do not differentiate the top and bottom (or the two factors) separately. The derivative of a product or quotient is *not* the product or quotient of the derivatives; the correct rules come in Topics 2.8 and 2.9.

## Worked example 2: a tangent line

**Question.** Let f(x) = x^(3/2) for x ≥ 0. Find the slope of the graph at x = 4 and the equation of the tangent line there.

1. **Differentiate.** New exponent: 3/2 − 1 = 1/2. So f′(x) = (3/2)x^(1/2) = (3/2)√x.
2. **Evaluate the derivative.** f′(4) = (3/2)√4 = (3/2)(2) = **3**. This is the slope.
3. **Find the point.** f(4) = 4^(3/2) = (√4)³ = 2³ = 8. The point is (4, 8).
4. **Write the line.** Point-slope form: y − 8 = 3(x − 4). Simplified: **y = 3x − 4**.

**Check.** Use the difference quotient with a small h. With h = 0.01: [f(4.01) − 8]/0.01 ≈ 3.0019. With h = −0.01: ≈ 2.9981. Both are close to 3, one just above and one just below.

**Interpretation.** Near x = 4 the curve and the tangent line almost coincide. At x = 4.1 the line gives 8.3 and the curve gives about 8.302.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="pow-title pow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pow-title">Graph of y = x to the power 3/2 with its tangent line at (4, 8)</title>
<desc id="pow-desc">A curve starting at the origin, flat at first and then rising more and more steeply, drawn for x from 0 to 6. It passes through (1, 1), (4, 8) and about (6, 14.7). A dashed straight line touches the curve at the filled point (4, 8). The dashed line crosses the x-axis at x = 4/3 and reaches y = 14 at x = 6, staying just below the curve on both sides of the point of contact. Labels give the tangent line as y = 3x − 4 with slope 3.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="290" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="305" x2="60" y2="12" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="130" y="306">1</text><text x="200" y="306">2</text><text x="270" y="306">3</text><text x="340" y="306">4</text><text x="410" y="306">5</text><text x="480" y="306">6</text>
<text x="506" y="286">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="258">2</text><text x="53" y="222">4</text><text x="53" y="186">6</text><text x="53" y="150">8</text><text x="53" y="114">10</text><text x="53" y="78">12</text><text x="53" y="42">14</text>
<text x="53" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="130" y1="286" x2="130" y2="294"/><line x1="200" y1="286" x2="200" y2="294"/><line x1="270" y1="286" x2="270" y2="294"/><line x1="340" y1="286" x2="340" y2="294"/><line x1="410" y1="286" x2="410" y2="294"/><line x1="480" y1="286" x2="480" y2="294"/>
<line x1="56" y1="254" x2="64" y2="254"/><line x1="56" y1="218" x2="64" y2="218"/><line x1="56" y1="182" x2="64" y2="182"/><line x1="56" y1="146" x2="64" y2="146"/><line x1="56" y1="110" x2="64" y2="110"/><line x1="56" y1="74" x2="64" y2="74"/><line x1="56" y1="38" x2="64" y2="38"/>
</g>
<line x1="340" y1="152" x2="340" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="60" y1="146" x2="334" y2="146" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,290.0 67.0,289.4 74.0,288.4 81.0,287.0 88.0,285.4 95.0,283.6 102.0,281.6 109.0,279.5 116.0,277.1 123.0,274.6 130.0,272.0 137.0,269.2 144.0,266.3 151.0,263.3 158.0,260.2 165.0,256.9 172.0,253.6 179.0,250.1 186.0,246.5 193.0,242.9 200.0,239.1 207.0,235.2 214.0,231.3 221.0,227.2 228.0,223.1 235.0,218.8 242.0,214.5 249.0,210.1 256.0,205.7 263.0,201.1 270.0,196.5 277.0,191.8 284.0,187.0 291.0,182.1 298.0,177.2 305.0,172.1 312.0,167.1 319.0,161.9 326.0,156.7 333.0,151.4 340.0,146.0 347.0,140.6 354.0,135.1 361.0,129.5 368.0,123.9 375.0,118.2 382.0,112.4 389.0,106.6 396.0,100.7 403.0,94.8 410.0,88.8 417.0,82.7 424.0,76.6 431.0,70.4 438.0,64.1 445.0,57.8 452.0,51.5 459.0,45.0 466.0,38.6 473.0,32.0 480.0,25.5"/>
<line x1="153.3" y1="290" x2="480" y2="38" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<circle cx="340" cy="146" r="5.5" fill="#1d2b44"/>
<text x="352" y="170" font-size="13" fill="#1d2b44">(4, 8): slope = f′(4) = 3</text>
<text x="300" y="60" font-size="13" fill="#1d2b44">solid curve: y = x^(3/2)</text>
<text x="300" y="78" font-size="13" fill="#1d2b44">dashed line: y = 3x − 4</text>
</svg>
<figcaption>Figure 1. The solid curve is y = x^(3/2). The dashed tangent line at (4, 8) has slope f′(4) = 3, found with the power rule. The tangent stays just below the curve on both sides of the point of contact. Axes are unitless.</figcaption>
</figure>

## When the power rule gives "undefined"

The power rule only applies where xʳ⁻¹ is defined. A fractional or negative exponent can make the derivative undefined at a point where the function itself is fine.

Take f(x) = x^(1/3), the cube root of x. It is defined and continuous for every real x, including 0. The power rule gives

**f′(x) = (1/3)x^(−2/3) = 1/(3·(cube root of x)²)**

At x = 0 the bottom is 0, so f′(0) does not exist. Check with the definition: [f(0 + h) − f(0)]/h = h^(1/3)/h = 1/h^(2/3). As h → 0 this grows without bound. The graph has a **vertical tangent** at the origin. This is exactly the situation from Topic 2.4: a function can be continuous at a point and still not be differentiable there.

So when the power rule gives a zero denominator, do not ignore it. It is telling you where the graph has a vertical tangent, a cusp, or a point outside the domain.

Domains matter too. For f(x) = x^(1/2), the derivative (1/2)x^(−1/2) only exists for x > 0, even though f(0) = 0 is defined. The domain of f′ can be smaller than the domain of f.

## Common misconceptions

- **Subtracting 1 the wrong way for negative exponents.** d/dx[x⁻³] = −3x⁻⁴, not −3x⁻². Going "one less" from −3 means −4.
- **Differentiating 1/x³ as 1/(3x²).** Rewrite as x⁻³ first. The answer is −3/x⁴.
- **Keeping the old exponent.** d/dx[x^(1/2)] is (1/2)x^(−1/2), not (1/2)x^(1/2).
- **Adding 1 to the exponent.** That is the reverse process (antidifferentiation, Unit 6), not differentiation.
- **Using the power rule on exponential functions.** In 2ˣ the exponent is the variable. d/dx[2ˣ] is not x·2ˣ⁻¹.
- **Using the power rule on a constant like π³ or 5².** These are numbers, not powers of x. Their derivative is 0 (Topic 2.6).
- **Differentiating each factor separately.** For x²√x, combine to x^(5/2) first. Multiplying the derivatives 2x and 1/(2√x) gives √x, which is wrong.
- **Ignoring an undefined derivative.** If f′(a) has a zero denominator, f is not differentiable at a. Check the graph for a vertical tangent or cusp.

## Where this leads

The power rule is the first of the derivative rules in Unit 2. Topic 2.6 combines it with the constant, sum, difference and constant multiple rules, so you can differentiate any polynomial and expressions such as 5√x − 3/x² term by term: see [Topic 2.6, Derivative Rules: Constant, Sum, Difference, and Constant Multiple](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/). If you need to revisit why a derivative can fail to exist, go back to [Topic 2.4](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-checklist/) to consolidate.
