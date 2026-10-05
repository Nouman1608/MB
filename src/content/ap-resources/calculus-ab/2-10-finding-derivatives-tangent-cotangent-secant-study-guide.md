---
resourceId: "mb-ap-calcab-2.10-study-guide"
title: "Derivatives of Tangent, Cotangent, Secant and Cosecant: Study Guide (Calculus AB 2.10)"
description: "Rewrite tan, cot, sec and csc in terms of sine and cosine, use the quotient rule to find their derivatives, and apply the results with the product and quotient rules."
course: "calculus-ab"
unit: 2
topics: ["2.10"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of sin x and cos x (Topic 2.7)"
  - "The product rule and the quotient rule (Topics 2.8 and 2.9)"
  - "The definitions tan x = sin x/cos x, cot x = cos x/sin x, sec x = 1/cos x, csc x = 1/sin x"
  - "The identities sin²x + cos²x = 1 and 1 + tan²x = sec²x, and exact values at π/6, π/4 and π/3"
prerequisiteResources: ["mb-ap-calcab-2.9-study-guide"]
learningObjectives:
  - "Rewrite tangent, cotangent, secant and cosecant in terms of sine and cosine"
  - "Derive the derivatives of all four functions with the quotient rule"
  - "Recall the four derivatives and the values of x where each one exists"
  - "Combine these derivatives with the product and quotient rules, using identities to simplify"
  - "Find slopes and tangent lines for graphs built from these functions"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Angles are in radians. Give exact values such as √3 or π/2."
related: ["mb-ap-calcab-2.10-revision-notes", "mb-ap-calcab-2.10-practice", "mb-ap-calcab-2.10-checklist"]
next: "mb-ap-calcab-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "d/dx tan x = sec²x, d/dx cot x = −csc²x, d/dx sec x = sec x tan x, d/dx csc x = −csc x cot x."
  - "Each result comes from rewriting the function with sin x and cos x and using the quotient rule."
  - "The three 'co' functions (cos, cot, csc) have derivatives that start with a minus sign."
  - "These results hold only with x in radians, and only where the function is defined."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.10 is common content, so the same page serves AB and BC students."
  - question: "Do I need to memorise all four derivatives?"
    answer: "Yes. In the exam you should write them down at once. But you should also be able to derive each one in a few lines, which is a good check if you forget a sign."
  - question: "Why does sec²x appear so often?"
    answer: "Because the derivative of tan x is sec²x, and the identity 1 + tan²x = sec²x lets you swap between the two forms when you simplify."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer. **sec²x** means (sec x)², and **d/dx tan x** means "the derivative of tan x with respect to x". Fractions are written on one line with brackets. All angles are in **radians**: the derivatives of the trig functions are only this simple in radians.

## The idea: rewrite, then use a rule you know

From Topic 2.7 you know two trig derivatives:

**d/dx sin x = cos x** and **d/dx cos x = −sin x**.

The other four trig functions are built from sine and cosine:

| Function | Rewritten | Defined where |
|---|---|---|
| tan x | sin x / cos x | cos x ≠ 0, so x ≠ π/2 + kπ |
| cot x | cos x / sin x | sin x ≠ 0, so x ≠ kπ |
| sec x | 1 / cos x | cos x ≠ 0, so x ≠ π/2 + kπ |
| csc x | 1 / sin x | sin x ≠ 0, so x ≠ kπ |

(Here k is any integer.) Each one is a quotient. So the quotient rule from Topic 2.9 gives its derivative. The skill being tested is to **spot that an identity turns a new function into one you can already differentiate**.

## Deriving d/dx tan x

Write tan x = sin x / cos x. Top: sin x, derivative cos x. Bottom: cos x, derivative −sin x. Quotient rule, bottom first:

**d/dx tan x = [cos x · cos x − sin x · (−sin x)] / cos²x**

**= (cos²x + sin²x) / cos²x**

The Pythagorean identity makes the top equal to 1:

**= 1 / cos²x = sec²x**

So **d/dx tan x = sec²x**, for every x where cos x ≠ 0.

## Deriving d/dx sec x

Write sec x = 1 / cos x. Top: 1, derivative 0. Bottom: cos x, derivative −sin x.

**d/dx sec x = [cos x · 0 − 1 · (−sin x)] / cos²x = sin x / cos²x**

Split the fraction into two factors:

**= (1/cos x) · (sin x/cos x) = sec x tan x**

So **d/dx sec x = sec x tan x**, for every x where cos x ≠ 0.

## The four results

| Function | Derivative | Quick reason |
|---|---|---|
| tan x | sec²x | Quotient rule on sin x / cos x, then sin²x + cos²x = 1 |
| cot x | −csc²x | Quotient rule on cos x / sin x (Worked example 1) |
| sec x | sec x tan x | Reciprocal rule on 1 / cos x |
| csc x | −csc x cot x | Reciprocal rule on 1 / sin x (try it in Practice Q5) |

**A memory pattern.** Pair each function with its "co" partner. tan ↔ cot, sec ↔ csc. Swap every function for its partner and add a minus sign:

- tan x → sec²x, so cot x → −csc²x.
- sec x → sec x tan x, so csc x → −csc x cot x.

This is the same pattern as sin x → cos x and cos x → −sin x.

**Rewriting works in both directions.** Sometimes an identity makes a function simpler before you differentiate. For example, sin x · sec x = sin x/cos x = tan x, so its derivative is sec²x at once. The product rule gives the same result, with more work:

**d/dx (sin x · sec x) = cos x · sec x + sin x · sec x tan x = 1 + tan²x = sec²x**

because cos x · sec x = 1 and sin x · sec x = tan x. Getting the same answer two ways is a useful check. Before you differentiate, always ask: can an identity make this shorter?

## Reading the derivative on a graph

The derivative of tan x is sec²x = 1/cos²x. Since 0 < cos²x ≤ 1 wherever tan x is defined, **sec²x ≥ 1**. So the graph of y = tan x rises on every interval where it is defined, such as (−π/2, π/2), and its slope is never less than 1. The slope is exactly 1 at x = 0, where cos²x = 1, and grows without bound near the asymptotes.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="tan-title tan-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tan-title">Graph of y = tan x between −π/2 and π/2 with tangent lines at x = 0 and x = π/4</title>
<desc id="tan-desc">The curve y = tan x is drawn for x between about −1.33 and 1.33 radians. It rises from about −4 near the left asymptote, passes through the origin and rises to about 4 near the right asymptote. Vertical dashed lines mark the asymptotes at x = −π/2 and x = π/2. A dotted tangent line through the origin has slope 1, matching the line y = x. A dash-dot tangent line through the point (π/4, 1), marked with a solid dot, has slope 2 and is steeper.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="40" y1="155" x2="490" y2="155" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="300" x2="260" y2="10" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="15" x2="70" y2="295" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<line x1="450" y1="15" x2="450" y2="295" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="314">−π/2</text><text x="165" y="172">−π/4</text><text x="355" y="172">π/4</text><text x="450" y="314">π/2</text>
<text x="495" y="150">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="253" y="294">−4</text><text x="253" y="227">−2</text><text x="253" y="125">1</text><text x="253" y="92">2</text><text x="253" y="24">4</text>
<text x="253" y="12">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="165" y1="151" x2="165" y2="159"/><line x1="355" y1="151" x2="355" y2="159"/>
<line x1="256" y1="290" x2="264" y2="290"/><line x1="256" y1="222.5" x2="264" y2="222.5"/><line x1="256" y1="121.3" x2="264" y2="121.3"/><line x1="256" y1="87.5" x2="264" y2="87.5"/><line x1="256" y1="20" x2="264" y2="20"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="99.6,290.1 105.0,268.5 110.3,252.5 115.6,240.1 121.0,230.3 126.3,222.1 131.7,215.3 137.0,209.5 142.4,204.5 147.7,200.1 153.1,196.2 158.4,192.6 163.8,189.4 169.1,186.5 174.5,183.8 179.8,181.4 185.2,179.0 190.5,176.9 195.8,174.8 201.2,172.8 206.5,171.0 211.9,169.2 217.2,167.5 222.6,165.8 227.9,164.2 233.3,162.6 238.6,161.0 244.0,159.5 249.3,158.0 254.7,156.5 260.0,155.0 265.3,153.5 270.7,152.0 276.0,150.5 281.4,149.0 286.7,147.4 292.1,145.8 297.4,144.2 302.8,142.5 308.1,140.8 313.5,139.0 318.8,137.2 324.2,135.2 329.5,133.1 334.8,131.0 340.2,128.6 345.5,126.2 350.9,123.5 356.2,120.6 361.6,117.4 366.9,113.8 372.3,109.9 377.6,105.5 383.0,100.5 388.3,94.7 393.7,87.9 399.0,79.7 404.4,69.9 409.7,57.5 415.0,41.5 420.4,19.9"/>
<line x1="102.8" y1="198.9" x2="417.2" y2="111.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<line x1="203.8" y1="205.6" x2="450" y2="68.2" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 4 2 4"/>
<circle cx="355" cy="121.3" r="5" fill="#1d2b44"/>
<circle cx="260" cy="155" r="4" fill="#1d2b44"/>
<text x="300" y="185" font-size="12" fill="#1d2b44">dotted: slope 1 at x = 0</text>
<text x="368" y="138" font-size="12" fill="#1d2b44">(π/4, 1)</text>
<text x="300" y="62" font-size="12" fill="#1d2b44">dash-dot: slope 2</text>
<text x="80" y="40" font-size="12" fill="#1d2b44">x = −π/2</text>
<text x="380" y="300" font-size="12" fill="#1d2b44">x = π/2</text>
</svg>
<figcaption>Figure 1. y = tan x on (−π/2, π/2). At x = 0 the slope is sec²0 = 1 (dotted line, y = x). At x = π/4 the slope is sec²(π/4) = (√2)² = 2 (dash-dot line through the dot at (π/4, 1)). The slope is never below 1 and grows near the dashed asymptotes. Axes are unitless; x is in radians.</figcaption>
</figure>

## Worked example 1: deriving d/dx cot x and using it

**Question.** (a) Use the quotient rule to show that d/dx cot x = −csc²x. (b) Find the equation of the line tangent to y = cot x at x = π/6.

**(a)**

1. **Rewrite with an identity.** cot x = cos x / sin x, defined where sin x ≠ 0.
2. **Name the parts.** Top: cos x, derivative −sin x. Bottom: sin x, derivative cos x.
3. **Quotient rule, bottom first.**
   **d/dx cot x = [sin x · (−sin x) − cos x · cos x] / sin²x**
4. **Simplify the top.** −sin²x − cos²x = −(sin²x + cos²x) = −1.
5. **Finish.** −1/sin²x = −(1/sin x)² = **−csc²x**.

**(b)**

1. **Find the point.** cot(π/6) = cos(π/6)/sin(π/6) = (√3/2)/(1/2) = √3. The point is (π/6, √3).
2. **Find the slope.** csc(π/6) = 1/sin(π/6) = 2, so the slope is −csc²(π/6) = −4.
3. **Write the line.** **y = √3 − 4(x − π/6)**.

**Check.** The slope is negative. That fits: −csc²x < 0 everywhere cot x is defined, so cot x falls on every interval where it is defined.

## Worked example 2: a product with tan x

**Question.** Let f(x) = x tan x for −π/2 < x < π/2. Find f′(x), then the equation of the tangent line at x = π/4.

1. **Choose the rule.** f is a product of x and tan x, so use the product rule (Topic 2.8).
2. **Differentiate each part.** d/dx x = 1. d/dx tan x = sec²x.
3. **Product rule.**
   **f′(x) = (1)(tan x) + (x)(sec²x) = tan x + x sec²x**
4. **Evaluate at π/4.** tan(π/4) = 1 and sec²(π/4) = (√2)² = 2. So
   **f′(π/4) = 1 + (π/4)(2) = 1 + π/2**
5. **Find the point.** f(π/4) = (π/4)(1) = π/4.
6. **Write the line.** **y = π/4 + (1 + π/2)(x − π/4)**.

**Check.** 1 + π/2 ≈ 2.571. A symmetric difference quotient for f near π/4 also gives 2.571 to four significant figures.

**Common slip.** Writing f′(x) = 1 · sec²x = sec²x multiplies the derivatives. That is not the product rule.

## Worked example 3: a quotient simplified with an identity

**Question.** Let g(x) = sec x / (1 + tan x), on an interval where 1 + tan x ≠ 0 and cos x ≠ 0. Show that g′(x) = sec x (tan x − 1)/(1 + tan x)², and find g′(0).

1. **Name the parts.** Top: sec x, derivative sec x tan x. Bottom: 1 + tan x, derivative sec²x.
2. **Quotient rule.**
   **g′(x) = [(1 + tan x)(sec x tan x) − (sec x)(sec²x)] / (1 + tan x)²**
3. **Factor out sec x from the top.**
   top = sec x [tan x + tan²x − sec²x]
4. **Use an identity.** 1 + tan²x = sec²x, so tan²x − sec²x = −1. The bracket becomes tan x − 1.
5. **Result.** **g′(x) = sec x (tan x − 1)/(1 + tan x)²**.
6. **Evaluate at 0.** sec 0 = 1, tan 0 = 0, so g′(0) = 1 × (0 − 1)/1² = **−1**.

**Interpretation.** g′(x) = 0 where tan x = 1, for example at x = π/4. The identity step turned a messy top into one you can solve.

## Common misconceptions

- **"d/dx tan x = sec x."** The square matters: d/dx tan x = sec²x.
- **"d/dx sec x = tan x."** It is sec x tan x. Check by deriving it from 1/cos x.
- **Losing the minus sign on cot x and csc x.** Use the pattern: every "co" function's derivative starts with a minus.
- **Mixing up the reciprocals.** sec x = 1/cos x and csc x = 1/sin x. Each reciprocal pair has exactly one "co" in it: **sec** pairs with **co**s, **co**sec (csc) pairs with sin.
- **Reading sin⁻¹x as 1/sin x.** sin⁻¹x is the inverse sine (arcsine). The reciprocal is csc x = (sin x)⁻¹.
- **Using degrees.** d/dx tan x = sec²x is true only when x is in radians.
- **Forgetting the domain.** tan x and sec x are not differentiable at x = π/2 + kπ, because they are not defined there.
- **Multiplying derivatives in a product.** In x tan x, the derivative is tan x + x sec²x, not sec²x.

## Where this leads

You now have the derivative of every basic trig function. In [Topic 3.1](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/) the chain rule lets you differentiate compositions such as tan(3x) or sec(x²). Later, d/dx tan x = sec²x becomes the antiderivative fact that sec²x integrates to tan x. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap). If the quotient rule still feels shaky, review [Topic 2.9](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/) first.

Try the [practice questions](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-checklist/) to consolidate.
