---
resourceId: "mb-ap-calcab-3.4-study-guide"
title: "Differentiating Inverse Trigonometric Functions: Study Guide (Calculus AB 3.4)"
description: "Derive the derivatives of arcsin, arccos and arctan from the inverse-function idea, then use them with the chain, product and quotient rules."
course: "calculus-ab"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of inverse functions (Topic 3.3)"
  - "Implicit differentiation (Topic 3.2) and the chain rule (Topic 3.1)"
  - "Derivatives of sin x, cos x and tan x (Unit 2)"
  - "Exact values of sine, cosine and tangent at π/6, π/4 and π/3, and the identities sin²θ + cos²θ = 1 and 1 + tan²θ = sec²θ"
prerequisiteResources: ["mb-ap-calcab-3.3-study-guide"]
learningObjectives:
  - "State the domain and range of arcsin, arccos and arctan, and explain why the ranges are restricted"
  - "Derive the derivatives of arcsin x and arctan x by implicit differentiation or by the inverse-function rule"
  - "Differentiate expressions that combine inverse trigonometric functions with the chain, product and quotient rules"
  - "Identify where the derivatives of arcsin and arccos do not exist"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work every example here without a calculator, in radians. Give exact answers using π and surds."
related: ["mb-ap-calcab-3.4-revision-notes", "mb-ap-calcab-3.4-practice", "mb-ap-calcab-3.4-checklist"]
next: "mb-ap-calcab-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "d/dx arcsin x = 1/√(1 − x²) and d/dx arccos x = −1/√(1 − x²), for −1 < x < 1."
  - "d/dx arctan x = 1/(1 + x²), for every real x."
  - "With an inner function u: d/dx arcsin u = u′/√(1 − u²) and d/dx arctan u = u′/(1 + u²)."
  - "Each formula comes from Topic 3.3: write sin y = x (or tan y = x) and differentiate implicitly."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.4 is common content, so the same page serves AB and BC students."
  - question: "Is sin⁻¹ x the same as 1/sin x?"
    answer: "No. sin⁻¹ x means arcsin x, the angle whose sine is x. The reciprocal 1/sin x is csc x. To avoid confusion, this page writes arcsin."
  - question: "Which formulas should I memorise?"
    answer: "Know arcsin, arccos and arctan by heart, and be able to derive them. The other three follow the same method and are listed for reference."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

- **arcsin x** and **sin⁻¹ x** mean the same thing: the angle, in radians, whose sine is x. The same goes for arccos x (cos⁻¹ x) and arctan x (tan⁻¹ x).
- **sin⁻¹ x is not 1/sin x.** The reciprocal of sin x is csc x. A power such as sin²x is a different notation from sin⁻¹ x.
- All angles are in **radians**. The derivative formulas below are only true in radians.

This page writes "arcsin" rather than "sin⁻¹" to avoid mixing up inverse and reciprocal.

## Why the ranges are restricted

Sine is not one-to-one: sin(π/6) = sin(5π/6) = 1/2. To have an inverse, sine must be restricted to an interval where it is one-to-one. The standard choices are:

| Function | Domain (inputs x) | Range (output angles) | The original function is restricted to |
|---|---|---|---|
| arcsin x | −1 ≤ x ≤ 1 | −π/2 ≤ y ≤ π/2 | sin on [−π/2, π/2], where it increases |
| arccos x | −1 ≤ x ≤ 1 | 0 ≤ y ≤ π | cos on [0, π], where it decreases |
| arctan x | all real x | −π/2 < y < π/2 | tan on (−π/2, π/2), where it increases |

The ranges matter in the derivations below. On [−π/2, π/2], cos y is never negative. On [0, π], sin y is never negative. Those facts fix the sign of each square root.

## Deriving the derivative of arcsin x

Let **y = arcsin x**, for −1 < x < 1. By the definition of the inverse,

**sin y = x**, with −π/2 < y < π/2.

Differentiate both sides with respect to x, using implicit differentiation (Topic 3.2):

**cos y · dy/dx = 1**, so **dy/dx = 1/cos y**.

Now write cos y in terms of x. From sin²y + cos²y = 1, cos y = ±√(1 − sin²y) = ±√(1 − x²). Because y lies between −π/2 and π/2, cos y > 0, so take the positive root:

> **d/dx arcsin x = 1/√(1 − x²)**, for −1 < x < 1.

A right triangle shows the same step without the identity (Figure 1). If sin y = x, draw a triangle with hypotenuse 1 and opposite side x. Pythagoras gives the adjacent side √(1 − x²), so cos y = √(1 − x²). (The triangle shows the case 0 < x < 1; the identity argument covers all of −1 < x < 1.)

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="tri-title tri-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tri-title">Reference triangles for y = arcsin x and y = arctan x</title>
<desc id="tri-desc">Two right triangles side by side, each with the angle y at the bottom-left corner and the right angle at the bottom-right corner. Left triangle, labelled "y = arcsin x, so sin y = x": hypotenuse 1, vertical side opposite y labelled x, horizontal side labelled square root of 1 minus x squared. Under it: cos y equals square root of 1 minus x squared. Right triangle, labelled "y = arctan x, so tan y = x": horizontal side 1, vertical side x, hypotenuse labelled square root of 1 plus x squared. Under it: sec squared y equals 1 plus x squared.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<polygon points="40,220 200,220 200,100"/>
<polygon points="300,220 460,220 460,100"/>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="1.2">
<polyline points="186,220 186,206 200,206"/>
<polyline points="446,220 446,206 460,206"/>
<path d="M 80 220 A 40 40 0 0 0 72 196"/>
<path d="M 340 220 A 40 40 0 0 0 332 196"/>
</g>
<g font-size="14" fill="#1d2b44">
<text x="90" y="212">y</text>
<text x="350" y="212">y</text>
<text x="96" y="150" text-anchor="end">1</text>
<text x="210" y="166">x</text>
<text x="120" y="242" text-anchor="middle">√(1 − x²)</text>
<text x="350" y="150" text-anchor="end">√(1 + x²)</text>
<text x="470" y="166">x</text>
<text x="380" y="242" text-anchor="middle">1</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="120" y="40">y = arcsin x, so sin y = x</text>
<text x="380" y="40">y = arctan x, so tan y = x</text>
<text x="120" y="272">cos y = √(1 − x²)</text>
<text x="380" y="272">sec²y = 1 + x²</text>
</g>
</svg>
<figcaption>Figure 1. Left: if y = arcsin x, the triangle with hypotenuse 1 and opposite side x has adjacent side √(1 − x²), so cos y = √(1 − x²). Right: if y = arctan x, the triangle with adjacent side 1 and opposite side x has hypotenuse √(1 + x²), so sec y = √(1 + x²). The triangles are drawn for a positive x and are not to scale.</figcaption>
</figure>

**The same result from Topic 3.3.** Sine (restricted) and arcsin are inverses, so (arcsin)′(x) = 1/sin′(arcsin x) = 1/cos(arcsin x) = 1/√(1 − x²). This is the inverse-function rule g′(x) = 1/f′(g(x)) with f = sin.

## Deriving the derivative of arctan x

Let **y = arctan x**. Then **tan y = x**, with −π/2 < y < π/2. Differentiate implicitly:

**sec²y · dy/dx = 1**, so **dy/dx = 1/sec²y**.

Use the identity sec²y = 1 + tan²y = 1 + x² (or the right-hand triangle in Figure 1):

> **d/dx arctan x = 1/(1 + x²)**, for every real x.

The denominator 1 + x² is never 0, so arctan is differentiable everywhere. Its slope is largest at x = 0, where it equals 1, and it gets close to 0 as x grows large in either direction. That matches the graph of arctan, which levels off towards the horizontal asymptotes y = ±π/2.

## The other inverse trigonometric functions

**arccos.** For every x in [−1, 1], arcsin x + arccos x = π/2. (The two angles are complementary.) Differentiating, d/dx arccos x = 0 − 1/√(1 − x²):

> **d/dx arccos x = −1/√(1 − x²)**, for −1 < x < 1.

The negative sign makes sense: arccos is a decreasing function.

The remaining three follow from the same method. They are less common, and their formulas depend on the range convention (the ones below use the usual ranges: arccot from 0 to π; arcsec and arccsc built from arccos(1/x) and arcsin(1/x)).

| Function | Derivative | Valid for |
|---|---|---|
| arcsin x | 1/√(1 − x²) | −1 < x < 1 |
| arccos x | −1/√(1 − x²) | −1 < x < 1 |
| arctan x | 1/(1 + x²) | all real x |
| arccot x | −1/(1 + x²) | all real x |
| arcsec x | 1/(\|x\|√(x² − 1)) | \|x\| > 1 |
| arccsc x | −1/(\|x\|√(x² − 1)) | \|x\| > 1 |

**Where the derivatives fail.** At x = ±1 the denominator √(1 − x²) is 0. The graphs of arcsin and arccos have vertical tangents at their endpoints, because sine and cosine have horizontal tangents at the matching angles (Topic 3.3). So arcsin and arccos are differentiable only on the **open** interval −1 < x < 1.

## Using the chain rule

Most exam questions put something inside the inverse function. Combine each formula with the chain rule (Topic 3.1). If u is a differentiable function of x:

- d/dx arcsin u = u′/√(1 − u²)
- d/dx arccos u = −u′/√(1 − u²)
- d/dx arctan u = u′/(1 + u²)

Two checks: the **whole** inner function is squared (not just x), and the derivative of the inner function goes on top.

## Worked example 1: arctan with a chain

**Question.** Let h(x) = arctan(x² − 1). Find h′(x). Then find the equation of the tangent line to the graph of h at x = 1.

1. **Identify the inner function.** u = x² − 1, so u′ = 2x.
2. **Apply the chain-rule form.** h′(x) = u′/(1 + u²) = **2x/(1 + (x² − 1)²)**.
   Expanded, the denominator is x⁴ − 2x² + 2. Either form is fine.
3. **Point on the graph.** h(1) = arctan(0) = 0. The point is (1, 0).
4. **Slope.** h′(1) = 2(1)/(1 + 0²) = 2.
5. **Tangent line.** **y = 2(x − 1)**.

**Check.** At x = 1.01, h(1.01) = arctan(0.0201) ≈ 0.0201, and the tangent line gives 2(0.01) = 0.02. These agree closely.

**One more value.** h′(0) = 0, because the factor 2x is 0 there. The graph of h has a horizontal tangent at (0, −π/4), the lowest point of the graph, since x² − 1 is smallest at x = 0.

## Worked example 2: arcsin inside a product

**Question.** Let y = x · arcsin(2x). Find dy/dx and evaluate it at x = 1/4.

1. **Where is y differentiable?** arcsin(2x) needs −1 ≤ 2x ≤ 1, and its derivative needs −1 < 2x < 1. So work on −1/2 < x < 1/2. The value x = 1/4 is inside.
2. **Product rule.** dy/dx = (1) · arcsin(2x) + x · d/dx arcsin(2x).
3. **Chain rule on arcsin(2x).** u = 2x, u′ = 2, so d/dx arcsin(2x) = 2/√(1 − 4x²).
4. **Combine.** **dy/dx = arcsin(2x) + 2x/√(1 − 4x²)**.
5. **Evaluate at x = 1/4.** arcsin(1/2) = π/6. And 1 − 4(1/16) = 3/4, so √(3/4) = √3/2. The second term is (2/4)/(√3/2) = (1/2)(2/√3) = 1/√3 = √3/3.

   **dy/dx at x = 1/4 equals π/6 + √3/3** (about 1.101).

**Check.** A symmetric difference using y at x = 0.251 and 0.249 gives about 1.101, which agrees.

**Watch the square.** The inner function is 2x, so u² = 4x², not 2x². Squaring only the x is one of the most common slips in this topic.

## Worked example 3: using the inverse-function rule at a point

**Question.** Without using the arccos formula, find the derivative of arccos x at x = 1/2. Then confirm with the formula.

1. **Matching input.** arccos(1/2) = π/3, because cos(π/3) = 1/2 and π/3 is in [0, π].
2. **Derivative of the original function there.** The original function is cos, restricted to [0, π]. Its derivative is −sin, and −sin(π/3) = −√3/2.
3. **Reciprocal (Topic 3.3).** The derivative of arccos at 1/2 is 1/(−√3/2) = **−2/√3**, which is −2√3/3.

**Confirm.** −1/√(1 − 1/4) = −1/(√3/2) = −2/√3. The two methods agree, and the answer is negative, as it must be for a decreasing function.

## Common misconceptions

- **Reading sin⁻¹ x as 1/sin x.** That is csc x, whose derivative is −csc x cot x. arcsin is a different function.
- **Mixing up the formulas.** arcsin and arccos have a square root; arctan does not. Ask: "Is there a square root in this one?" Only the sine and cosine versions have one.
- **Forgetting the minus sign for arccos.** arccos decreases, so its derivative is negative.
- **Dropping the chain rule.** d/dx arctan(5x) is 5/(1 + 25x²), not 1/(1 + 25x²).
- **Squaring only part of the inner function.** For arcsin(2x), the denominator is √(1 − 4x²), not √(1 − 2x²).
- **Using degrees.** arcsin(1/2) is π/6, not 30, in every calculus formula.
- **Evaluating outside the domain.** arcsin(1.2) is undefined, because no angle has sine 1.2. And arcsin is not differentiable at x = ±1.
- **Picking the wrong sign of the root.** cos(arcsin x) = +√(1 − x²), because arcsin gives angles where cosine is not negative.

## Where this leads

Topic 3.5 asks you to choose the right procedure when a function mixes these derivatives with products, quotients and compositions. Continue with [Selecting Procedures for Calculating Derivatives](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/). In Unit 6 you will read these formulas backwards: 1/(1 + x²) and 1/√(1 − x²) are the derivatives of arctan x and arcsin x, so they have those functions as antiderivatives. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-checklist/) to consolidate.
